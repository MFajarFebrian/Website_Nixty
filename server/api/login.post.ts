import { H3Event } from 'h3';
import { defineEventHandler, readBody } from 'h3';
import bcrypt from 'bcryptjs';
import pool from '../utils/db';

export default defineEventHandler(async (event: H3Event) => {
  try {
    const { email, password } = await readBody(event);
    
    // Input validation
    if (!email || !password) {
      return {
        success: false,
        message: 'Email and password are required'
      };
    }
    
    // Get user from database
    const [users] = await pool.query(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );
    
    const user = (users as any[])[0];
    
    // Check if user exists
    if (!user) {
      return {
        success: false,
        message: 'Invalid email or password'
      };
    }
    
    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if (!isPasswordValid) {
      return {
        success: false,
        message: 'Invalid email or password'
      };
    }
    
    // Return user data (excluding password)
    const { password: _, ...userWithoutPassword } = user;
    
    return {
      success: true,
      message: 'Login successful',
      user: userWithoutPassword
    };
  } catch (error) {
    console.error('Login error:', error);
    return {
      success: false,
      message: 'An error occurred during login'
    };
  }
}); 