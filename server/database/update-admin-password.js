import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';

async function updateAdminPassword() {
  try {
    console.log('Updating admin password...');
    
    // Generate a new password hash for "password123"
    const password = 'password123';
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    
    console.log('New password hash generated.');
    
    // Connect to the database
    const connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST || 'localhost',
      user: process.env.MYSQL_USER || 'root',
      password: process.env.MYSQL_PASSWORD || '',
      port: process.env.MYSQL_PORT || 3306,
      database: process.env.MYSQL_DATABASE || 'office365_store'
    });
    
    // Update the admin user password
    const [result] = await connection.execute(
      'UPDATE users SET password = ? WHERE email = ?',
      [hashedPassword, 'admin@example.com']
    );
    
    if (result.affectedRows > 0) {
      console.log('Admin password updated successfully!');
    } else {
      console.log('Admin user not found. No password was updated.');
    }
    
    // Verify the update
    const [users] = await connection.execute(
      'SELECT * FROM users WHERE email = ?',
      ['admin@example.com']
    );
    
    if (users.length > 0) {
      console.log('Admin user details:');
      console.log('- ID:', users[0].id);
      console.log('- Email:', users[0].email);
      console.log('- Name:', users[0].name);
      console.log('- Role:', users[0].role);
    }
    
    await connection.end();
    console.log('Done!');
  } catch (error) {
    console.error('Error updating admin password:', error);
  }
}

// Run the update
updateAdminPassword(); 