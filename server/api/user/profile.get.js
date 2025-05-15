import { db, users } from '~/server/database';
import { eq } from 'drizzle-orm';
import { authenticate } from '~/server/utils/auth';

export default defineEventHandler(async (event) => {
  try {
    // Authenticate the user
    const authUser = authenticate(event);
    
    // Fetch the most recent user data
    const result = await db.select({
      id: users.id,
      email: users.email,
      name: users.name,
      role: users.role,
      createdAt: users.createdAt
    }).from(users).where(eq(users.id, authUser.id)).limit(1);
    
    if (!result.length) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Not Found',
        message: 'User not found'
      });
    }
    
    return result[0];
  } catch (error) {
    // If it's already a formatted error, pass it through
    if (error.statusCode) {
      throw error;
    }
    
    console.error('Error fetching user profile:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Server Error',
      message: 'Failed to fetch user profile'
    });
  }
}); 