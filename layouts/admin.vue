<template>
  <div class="flex min-h-screen">
    <!-- Admin Sidebar -->
    <div class="w-64 bg-gray-800 text-white p-4">
      <h2 class="text-2xl font-bold mb-6">Admin Panel</h2>
      <nav class="space-y-2">
        <NuxtLink to="/admin" class="block py-2 px-4 rounded hover:bg-gray-700">Dashboard</NuxtLink>
        <NuxtLink to="/admin/products" class="block py-2 px-4 rounded hover:bg-gray-700">Products</NuxtLink>
        <NuxtLink to="/admin/orders" class="block py-2 px-4 rounded hover:bg-gray-700">Orders</NuxtLink>
        <NuxtLink to="/admin/users" class="block py-2 px-4 rounded hover:bg-gray-700">Users</NuxtLink>
        <NuxtLink to="/admin/settings" class="block py-2 px-4 rounded hover:bg-gray-700">Settings</NuxtLink>
        <NuxtLink to="/" class="block py-2 px-4 rounded hover:bg-gray-700 mt-6">Back to Store</NuxtLink>
      </nav>
    </div>
    
    <!-- Admin Content -->
    <div class="flex-1 p-8">
      <slot />
    </div>
  </div>
</template> 