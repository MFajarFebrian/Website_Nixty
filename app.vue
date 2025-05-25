<template>
  <div>
    <AppHeader />
    <NuxtRouteAnnouncer />
    <main class="main-content">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup lang="ts">
// No explicit imports needed
</script>

<style>
/* Global styles */
body {
  font-family: sans-serif;
  margin: 0;
  background-color: #f4f4f4;
}

.main-content {
  padding-top: 20px;
}
</style>
