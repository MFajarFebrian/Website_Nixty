import pool from '../../utils/db';
import { H3Event } from 'h3';
import bcrypt from 'bcryptjs';

export default defineEventHandler(async (event: H3Event) => {
  try {
    // Get Google user data from request body
    const { email, name, google_id, picture } = await readBody(event);
    
    // Validate input
    if (!email || !google_id) {
      return {
        success: false,
        message: 'Email and Google ID are required'
      };
    }
    
    // Check if user already exists
    const [existingUsers] = await pool.execute(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );
    
    const users = existingUsers as any[];
    
    if (users.length > 0) {
      // User already exists
      return {
        success: false,
        message: 'A user with this email already exists'
      };
    }
    
    // Generate a random password since they're registering with Google
    const randomPassword = Math.random().toString(36).substring(2, 15);
    const hashedPassword = await bcrypt.hash(randomPassword, 10);
    
    // Insert the new user
    const [result] = await pool.execute(
      'INSERT INTO users (email, name, password, account_type, google_id, profile_picture) VALUES (?, ?, ?, ?, ?, ?)',
      [email, name, hashedPassword, 'user', google_id, picture]
    );
    
    const insertId = (result as any).insertId;
    
    // Get the newly created user
    const [newUsers] = await pool.execute(
      'SELECT * FROM users WHERE id = ?',
      [insertId]
    );
    
    const user = (newUsers as any[])[0];
    
    // Remove password from user object
    const { password: _, ...userWithoutPassword } = user;
    
    return {
      success: true,
      message: 'Google registration successful',
      user: userWithoutPassword
    };
    
  } catch (error) {
    console.error('Google registration error:', error);
    
    return {
      success: false,
      message: 'An error occurred during Google registration'
    };
  }
}); 