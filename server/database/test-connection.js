import mysql from 'mysql2/promise';

async function testConnection() {
  try {
    console.log('Testing database connection...');
    
    // First, test raw MySQL connection
    const connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST || 'localhost',
      user: process.env.MYSQL_USER || 'root',
      password: process.env.MYSQL_PASSWORD || '',
      port: process.env.MYSQL_PORT || 3306, // Default XAMPP MySQL port
    });
    
    console.log('Successfully connected to MySQL server!');
    
    // Check if database exists
    const [rows] = await connection.execute(
      `SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = ?`,
      [process.env.MYSQL_DATABASE || 'office365_store']
    );
    
    if (rows.length === 0) {
      console.error(`Database '${process.env.MYSQL_DATABASE || 'office365_store'}' does not exist!`);
      console.log('You may need to run the migration script first.');
    } else {
      console.log(`Database '${process.env.MYSQL_DATABASE || 'office365_store'}' exists.`);
      
      // Connect to the specific database
      await connection.changeUser({
        database: process.env.MYSQL_DATABASE || 'office365_store'
      });
      
      // Test if users table exists and has data
      const [usersResult] = await connection.execute('SELECT COUNT(*) as count FROM users');
      console.log(`Found ${usersResult[0].count} users in the database.`);
      
      // Try to get admin user
      const [adminUser] = await connection.execute(
        'SELECT * FROM users WHERE email = ?', 
        ['admin@example.com']
      );
      
      console.log('Admin user:', adminUser.length ? 'Found' : 'Not found');
      
      if (adminUser.length) {
        console.log('Admin user details:', {
          id: adminUser[0].id,
          email: adminUser[0].email,
          name: adminUser[0].name,
          role: adminUser[0].role
        });
      }
    }
    
    await connection.end();
  } catch (error) {
    console.error('Database connection test failed:', error);
  }
}

// Run the test
testConnection(); 