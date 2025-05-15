import { db, users } from '~/server/database';
import { eq } from 'drizzle-orm';
import { hashPassword, generateToken } from '~/server/utils/auth';

export default defineEventHandler(async (event) => {
  try {
    // Parse the request body
    const body = await readBody(event);
    
    // Validate required fields
    if (!body.email || !body.password || !body.name) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Bad Request',
        message: 'Email, password and name are required'
      });
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Bad Request',
        message: 'Invalid email format'
      });
    }
    
    // Validate password length
    if (body.password.length < 6) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Bad Request',
        message: 'Password must be at least 6 characters long'
      });
    }
    
    // Check if user already exists
    const existingUser = await db.select().from(users).where(eq(users.email, body.email)).limit(1);
    
    if (existingUser.length) {
      throw createError({
        statusCode: 409,
        statusMessage: 'Conflict',
        message: 'User with this email already exists'
      });
    }
    
    // Hash the password
    const hashedPassword = await hashPassword(body.password);
    
    // Create the user (MySQL doesn't support .returning())
    await db.insert(users).values({
      email: body.email,
      password: hashedPassword,
      name: body.name,
      role: 'customer' // Default role
    });
    
    // Fetch the created user
    const newUser = await db.select({
      id: users.id,
      email: users.email,
      name: users.name,
      role: users.role,
      createdAt: users.createdAt
    }).from(users).where(eq(users.email, body.email)).limit(1);
    
    if (!newUser.length) {
      throw new Error('Failed to retrieve created user');
    }
    
    // Generate JWT token
    const user = newUser[0];
    const token = generateToken(user);
    
    // Return user data and token
    return {
      user,
      token
    };
  } catch (error) {
    // If it's already a formatted error, pass it through
    if (error.statusCode) {
      throw error;
    }
    
    console.error('Error registering user:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Server Error',
      message: 'Failed to register user'
    });
  }
}); 