import pool from '../utils/db';
import { H3Event } from 'h3';
import bcrypt from 'bcryptjs';

export default defineEventHandler(async (event: H3Event) => {
  try {
    // Get request body (email and password)
    const { email, password } = await readBody(event);
    
    // Validate input
    if (!email || !password) {
      return {
        success: false,
        message: 'Email and password are required'
      };
    }
    
    // Query the database to find the user
    const [rows] = await pool.execute(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );
    
    // Check if user exists
    const users = rows as any[];
    if (users.length === 0) {
      return {
        success: false,
        message: 'User not found'
      };
    }
    
    const user = users[0];
    
    // Use bcrypt to compare the provided password with the stored hash
    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if (!isPasswordValid) {
      return {
        success: false,
        message: 'Invalid password'
      };
    }
    
    // If authentication is successful, return user data (excluding password)
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