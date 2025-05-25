<template>
  <div class="login-page">
    <h1>Welcome to Nixty</h1>
    <p class="subtitle">Please log in to access your account</p>
    <LoginForm />
  </div>
</template>

<script setup lang="ts">
// No need to explicitly import the LoginForm component
// because Nuxt auto-imports components from the components directory
</script>

<style scoped>
.login-page {
  max-width: 600px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
}

h1 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 10px;
}

.subtitle {
  color: #666;
  margin-bottom: 30px;
}
</style> 