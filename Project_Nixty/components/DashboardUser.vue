<template>
  <div class="user-dashboard">
    <div class="dashboard-header">
      <h2>User Dashboard</h2>
      <p>Welcome, {{ user?.name || 'User' }}!</p>
    </div>
    
    <div class="dashboard-content">
      <div class="dashboard-card">
        <h3>My Profile</h3>
        <p>View and edit your profile information.</p>
        <button class="action-button">Edit Profile</button>
      </div>
      
      <div class="dashboard-card">
        <h3>My Activity</h3>
        <p>View your recent activity on the site.</p>
        <button class="action-button">View Activity</button>
      </div>
      
      <div class="dashboard-card">
        <h3>Account Settings</h3>
        <p>Manage your account preferences.</p>
        <button class="action-button">Settings</button>
      </div>
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
  border-top: 4px solid #28a745;
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
</style> 