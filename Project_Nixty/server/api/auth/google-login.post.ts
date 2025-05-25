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
    
    // Check if user exists with this email
    const [existingUsers] = await pool.execute(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );
    
    const users = existingUsers as any[];
    let user;
    
    if (users.length === 0) {
      // User doesn't exist, create a new one
      // Generate a random password since they're logging in with Google
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
      
      user = (newUsers as any[])[0];
    } else {
      // User exists, update Google ID if not set
      user = users[0];
      
      if (!user.google_id) {
        await pool.execute(
          'UPDATE users SET google_id = ?, profile_picture = ? WHERE id = ?',
          [google_id, picture, user.id]
        );
        
        // Update the user object with the Google ID
        user.google_id = google_id;
        user.profile_picture = picture;
      }
    }
    
    // Remove password from user object
    const { password: _, ...userWithoutPassword } = user;
    
    return {
      success: true,
      message: 'Google login successful',
      user: userWithoutPassword
    };
    
  } catch (error) {
    console.error('Google login error:', error);
    
    return {
      success: false,
      message: 'An error occurred during Google login'
    };
  }
}); 