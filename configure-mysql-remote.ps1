# PowerShell script to configure MySQL for remote connections

# Path to MySQL configuration file
$mysqlConfigPath = "C:\xampp\mysql\bin\my.ini"

# Check if the file exists
if (-not (Test-Path $mysqlConfigPath)) {
    Write-Host "MySQL configuration file not found at $mysqlConfigPath"
    exit 1
}

# Backup the original file
$backupPath = "$mysqlConfigPath.backup"
Copy-Item -Path $mysqlConfigPath -Destination $backupPath -Force
Write-Host "Backed up original configuration to $backupPath"

# Read the configuration file
$config = Get-Content -Path $mysqlConfigPath -Raw

# Replace bind-address = 127.0.0.1 with bind-address = 0.0.0.0
$newConfig = $config -replace "bind-address\s*=\s*127\.0\.0\.1", "bind-address = 0.0.0.0"

# Write the modified configuration back to the file
$newConfig | Set-Content -Path $mysqlConfigPath -Force
Write-Host "Updated MySQL configuration to accept remote connections"

# Create a user that can connect from any host
$createUserCommand = @"
"C:\xampp\mysql\bin\mysql.exe" -u root -e "CREATE USER IF NOT EXISTS 'nixty_remote'@'%' IDENTIFIED BY 'nixty_password'; GRANT ALL PRIVILEGES ON nixty.* TO 'nixty_remote'@'%'; FLUSH PRIVILEGES;"
"@

# Execute the command
Invoke-Expression $createUserCommand
Write-Host "Created remote user 'nixty_remote' with password 'nixty_password'"

Write-Host "Configuration complete. Please restart MySQL service from XAMPP Control Panel."
Write-Host "After restarting, update vercel.json with these credentials:"
Write-Host "MYSQL_USER: nixty_remote"
Write-Host "MYSQL_PASSWORD: nixty_password" 