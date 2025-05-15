import { db, users } from '~/server/database';
import { eq } from 'drizzle-orm';
import { comparePassword, generateToken } from '~/server/utils/auth';

export default defineEventHandler(async (event) => {
  try {
    // Parse the request body
    const body = await readBody(event);
    
    // Validate required fields
    if (!body.email || !body.password) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Bad Request',
        message: 'Email and password are required'
      });
    }
    
    // Find the user
    const result = await db.select().from(users).where(eq(users.email, body.email)).limit(1);
    
    if (!result.length) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Unauthorized',
        message: 'Invalid email or password'
      });
    }
    
    const user = result[0];
    
    // Verify password
    const passwordValid = await comparePassword(body.password, user.password);
    
    if (!passwordValid) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Unauthorized',
        message: 'Invalid email or password'
      });
    }
    
    // Generate JWT token
    const token = generateToken(user);
    
    // Return user data and token
    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role
      },
      token
    };
  } catch (error) {
    // If it's already a formatted error, pass it through
    if (error.statusCode) {
      throw error;
    }
    
    console.error('Error logging in:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Server Error',
      message: 'Failed to login'
    });
  }
}); 