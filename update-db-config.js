const fs = require('fs');
const path = require('path');

// Path to the database configuration file
const dbConfigPath = path.join(__dirname, 'Project_Nixty', 'server', 'utils', 'db.ts');

// Read the current file
fs.readFile(dbConfigPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Update the database configuration to use Docker container
  const updatedConfig = data.replace(
    /createPool\(\s*{[^}]*}\s*\)/s,
    `createPool({
  host: 'localhost',
  user: 'nixty_user',
  password: 'nixty_password',
  database: 'nixty',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})`
  );

  // Write the updated configuration back to the file
  fs.writeFile(dbConfigPath, updatedConfig, 'utf8', (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }
    console.log('Database configuration updated successfully!');
  });
}); 