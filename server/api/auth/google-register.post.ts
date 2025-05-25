import { H3Event } from 'h3';
import { defineEventHandler, readBody } from 'h3';
import pool from '../../utils/db';

export default defineEventHandler(async (event: H3Event) => {
  try {
    const { email, name, google_id, picture } = await readBody(event);
    
    // Input validation
    if (!email || !google_id) {
      return {
        success: false,
        message: 'Email and Google ID are required'
      };
    }
    
    // Check if user already exists
    const [existingUsers] = await pool.query(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );
    
    if ((existingUsers as any[]).length > 0) {
      // If user exists but doesn't have a Google ID, update it
      const existingUser = (existingUsers as any[])[0];
      
      if (!existingUser.google_id) {
        await pool.query(
          'UPDATE users SET google_id = ?, picture = ? WHERE id = ?',
          [google_id, picture, existingUser.id]
        );
        
        return {
          success: true,
          message: 'Account linked with Google',
          user: {
            id: existingUser.id,
            email: existingUser.email,
            name: existingUser.name,
            picture: picture || existingUser.picture,
            account_type: existingUser.account_type
          }
        };
      }
      
      return {
        success: false,
        message: 'Email already in use'
      };
    }
    
    // Create user
    const [result] = await pool.query(
      'INSERT INTO users (email, name, google_id, picture, account_type) VALUES (?, ?, ?, ?, ?)',
      [email, name, google_id, picture, 'user']
    );
    
    const userId = (result as any).insertId;
    
    return {
      success: true,
      message: 'Registration successful',
      user: {
        id: userId,
        email,
        name,
        picture,
        account_type: 'user'
      }
    };
  } catch (error) {
    console.error('Google registration error:', error);
    return {
      success: false,
      message: 'An error occurred during registration'
    };
  }
}); 