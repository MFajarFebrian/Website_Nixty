import { H3Event } from 'h3';
import { defineEventHandler } from 'h3';
import pool from '../../utils/db';

export default defineEventHandler(async (event: H3Event) => {
  try {
    // Get list of tables
    const [tables] = await pool.query('SHOW TABLES');
    
    // For each table, get its structure
    const tableDetails = await Promise.all(
      (tables as any[]).map(async (tableRow) => {
        const tableName = tableRow[`Tables_in_${process.env.MYSQL_DATABASE || 'nixty'}`];
        const [columns] = await pool.query(`DESCRIBE ${tableName}`);
        
        return {
          name: tableName,
          columns: columns
        };
      })
    );
    
    return {
      success: true,
      tables: tableDetails
    };
  } catch (error) {
    console.error('Error fetching tables:', error);
    return {
      success: false,
      message: 'An error occurred while fetching database tables'
    };
  }
}); 