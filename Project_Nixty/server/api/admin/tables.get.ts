import pool from '../../utils/db';
import { H3Event } from 'h3';

export default defineEventHandler(async (event: H3Event) => {
  try {
    // Get all tables in the nixty database
    const [rows] = await pool.execute(
      'SHOW TABLES FROM nixty'
    );
    
    // Transform the result to a simpler format
    const tables = (rows as any[]).map(row => {
      // The column name is 'Tables_in_nixty'
      return Object.values(row)[0];
    });
    
    return {
      success: true,
      tables
    };
    
  } catch (error) {
    console.error('Error fetching tables:', error);
    
    return {
      success: false,
      message: 'An error occurred while fetching tables'
    };
  }
}); 