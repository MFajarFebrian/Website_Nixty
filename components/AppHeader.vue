<template>
  <header class="app-header">
    <div class="logo">
      <NuxtLink to="/">Nixty</NuxtLink>
    </div>
    
    <nav class="nav-links" v-if="user">
      <!-- All users get these links -->
      <NuxtLink to="/dashboard">Dashboard</NuxtLink>
      
      <!-- Admin-only links -->
      <template v-if="user.account_type === 'admin'">
        <NuxtLink to="/admin/users">Users</NuxtLink>
        <NuxtLink to="/admin/settings">Settings</NuxtLink>
      </template>
      
      <!-- User profile dropdown -->
      <div class="user-dropdown">
        <button class="dropdown-button">
          <img v-if="user.profile_picture" :src="user.profile_picture" class="profile-picture" alt="Profile" />
          <span v-else class="profile-initial">{{ getUserInitial }}</span>
          <span class="user-name">{{ user.name || user.email }}</span>
          <span class="dropdown-arrow">▼</span>
        </button>
        <div class="dropdown-content">
          <NuxtLink to="/profile">My Profile</NuxtLink>
        </div>
      </div>
      
      <!-- Logout button -->
      <LogoutButton show-icon />
    </nav>
    
    <!-- Login/Register links for guests -->
    <nav class="nav-links" v-else>
      <NuxtLink to="/login">Login</NuxtLink>
      <NuxtLink to="/register">Register</NuxtLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const router = useRouter();
const { user, initUser } = useAuth();

// Get user initial for avatar placeholder
const getUserInitial = computed(() => {
  if (!user.value || !user.value.name) return '?';
  return user.value.name.charAt(0).toUpperCase();
});

// On component mount, initialize user from session storage
onMounted(() => {
  initUser();
});
</script>

<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo a {
  font-size: 1.5rem;
  font-weight: bold;
  color: #007bff;
  text-decoration: none;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav-links a {
  color: #333;
  text-decoration: none;
  font-weight: 500;
}

.nav-links a:hover {
  color: #007bff;
}

/* Dropdown styles */
.user-dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-button {
  background-color: #f8f9fa;
  color: #333;
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.profile-picture {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
}

.profile-initial {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #007bff;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
}

.user-name {
  max-width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.dropdown-arrow {
  font-size: 10px;
}

.dropdown-content {
  display: none;
  position: absolute;
  right: 0;
  background-color: #fff;
  min-width: 160px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  z-index: 1;
  border-radius: 4px;
  overflow: hidden;
}

.dropdown-content a {
  color: #333;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.user-dropdown:hover .dropdown-content {
  display: block;
}
</style> 