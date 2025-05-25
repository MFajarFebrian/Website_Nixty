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
    
    // Check if user exists
    const [users] = await pool.query(
      'SELECT * FROM users WHERE email = ? AND google_id = ?',
      [email, google_id]
    );
    
    if ((users as any[]).length === 0) {
      return {
        success: false,
        message: 'User not found. Please register first.',
        needsRegistration: true
      };
    }
    
    const user = (users as any[])[0];
    
    // Return user data
    return {
      success: true,
      message: 'Login successful',
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        picture: user.picture,
        account_type: user.account_type
      }
    };
  } catch (error) {
    console.error('Google login error:', error);
    return {
      success: false,
      message: 'An error occurred during login'
    };
  }
}); 