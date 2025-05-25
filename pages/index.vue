<template>
  <div>
    <!-- This page will redirect to /login or /dashboard, so we don't need content here -->
  </div>
</template>

<script setup lang="ts">
// Use Nuxt's built-in navigation utilities
const router = useRouter();

// Redirect based on authentication status
onMounted(() => {
  // Check if user is logged in by looking for data in sessionStorage
  const userJson = sessionStorage.getItem('currentUser');
  
  if (userJson) {
    // User is logged in, redirect to dashboard
    router.push('/dashboard');
  } else {
    // User is not logged in, redirect to login page
    router.push('/login');
  }
});
</script> 