<template>
  <div class="admin-dashboard">
    <div class="dashboard-header">
      <h2>Admin Dashboard</h2>
      <p>Welcome, {{ user?.name || 'Admin' }}!</p>
    </div>
    
    <div class="dashboard-content">
      <div class="dashboard-card">
        <h3>User Management</h3>
        <p>You have access to manage all users in the system.</p>
        <button class="action-button">Manage Users</button>
      </div>
      
      <div class="dashboard-card">
        <h3>Site Settings</h3>
        <p>Configure website settings and preferences.</p>
        <button class="action-button">Edit Settings</button>
      </div>
      
      <div class="dashboard-card">
        <h3>Content Management</h3>
        <p>Add or modify content across the website.</p>
        <button class="action-button">Manage Content</button>
      </div>
    </div>
    
    <div class="dashboard-footer">
      <LogoutButton size="large" label="Logout from Admin" show-icon />
    </div>
  </div>
</template>

<script setup lang="ts">
interface User {
  id: number;
  email: string;
  name: string | null;
  account_type: 'user' | 'admin';
  created_at: string;
}

// Define props for the component
defineProps<{
  user: User;
}>();
</script>

<style scoped>
.dashboard-header {
  text-align: center;
  margin-bottom: 40px;
}

.dashboard-header h2 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 10px;
}

.dashboard-header p {
  font-size: 1.2rem;
  color: #666;
}

.dashboard-content {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.dashboard-card {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-top: 4px solid #007bff;
}

.dashboard-card h3 {
  color: #333;
  margin-bottom: 10px;
  font-size: 1.3rem;
}

.dashboard-card p {
  color: #666;
  margin-bottom: 20px;
  line-height: 1.5;
}

.action-button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
}

.action-button:hover {
  background-color: #0056b3;
}

.dashboard-footer {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}
</style> 