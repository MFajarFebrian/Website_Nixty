<script setup lang="ts">
definePageMeta({
  layout: 'admin'
})

// Direct metadata without using content files
useSeoMeta({
  title: 'Admin Dashboard',
  description: 'Office 365 Admin Dashboard'
})
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Admin Dashboard</h1>
    
    <!-- Admin Dashboard -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-lg font-semibold mb-2">Total Products</h3>
        <p class="text-3xl font-bold">25</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-lg font-semibold mb-2">Total Orders</h3>
        <p class="text-3xl font-bold">42</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-lg font-semibold mb-2">Total Users</h3>
        <p class="text-3xl font-bold">156</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-lg font-semibold mb-2">Revenue</h3>
        <p class="text-3xl font-bold">$12,450</p>
      </div>
    </div>
  </div>
</template> 