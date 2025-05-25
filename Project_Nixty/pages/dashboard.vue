<template>
  <div class="dashboard-page">
    <h1>Dashboard</h1>
    
    <div v-if="!user" class="loading-message">
      Loading user information...
    </div>
    
    <template v-else>
      <!-- Render the appropriate dashboard based on account type -->
      <DashboardAdmin v-if="user.account_type === 'admin'" :user="user" />
      <DashboardUser v-else :user="user" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

const router = useRouter();
const { user, initUser } = useAuth();

onMounted(() => {
  // Initialize user from session storage
  initUser();
  
  // If no user is found, redirect to login
  if (!user.value) {
    router.push('/login');
  }
});
</script>

<style scoped>
.dashboard-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
}

.loading-message {
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  margin: 50px 0;
}
</style> 