<script setup lang="ts">
// Get cart items count from localStorage
const cartItemsCount = ref(0);

// Function to update cart count
function updateCartCount() {
  try {
    const cartData = localStorage.getItem('office365_cart');
    if (cartData) {
      const cart = JSON.parse(cartData);
      cartItemsCount.value = cart.length;
    } else {
      cartItemsCount.value = 0;
    }
  } catch (error) {
    console.error('Error reading cart data:', error);
    cartItemsCount.value = 0;
  }
}

onMounted(() => {
  // Initial update
  updateCartCount();
  
  // Listen for storage events to update cart count when changed from another tab
  window.addEventListener('storage', updateCartCount);
  
  // Create custom event for cart updates
  window.cartUpdated = updateCartCount;
  
  // Check for existing cart on load
  updateCartCount();
});

// Check if user is authenticated
const isAuthenticated = ref(false);
const user = ref(null);

onMounted(async () => {
  try {
    const token = localStorage.getItem('auth_token');
    if (token) {
      const response = await fetch('/api/user/profile', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        user.value = data.user;
        isAuthenticated.value = true;
      }
    }
  } catch (error) {
    console.error('Error checking authentication:', error);
  }
});

// Handle logout
function logout() {
  localStorage.removeItem('auth_token');
  isAuthenticated.value = false;
  user.value = null;
  // Redirect to home page
  navigateTo('/');
}
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <!-- Navigation -->
    <header class="bg-white shadow-sm">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between items-center h-16">
          <!-- Logo and main navigation -->
          <div class="flex items-center">
            <NuxtLink to="/" class="flex items-center">
              <span class="text-blue-600 font-bold text-xl">Office365 Store</span>
            </NuxtLink>
            <nav class="hidden md:ml-10 md:flex space-x-8">
              <NuxtLink to="/products" class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Products
              </NuxtLink>
              <NuxtLink to="/#categories" class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Categories
              </NuxtLink>
              <NuxtLink to="/support" class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Support
              </NuxtLink>
            </nav>
          </div>
          
          <!-- Right side navigation -->
          <div class="flex items-center">
            <!-- Cart icon with items count -->
            <NuxtLink to="/cart" class="ml-4 group relative p-2">
              <span class="sr-only">Cart</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span v-if="cartItemsCount > 0" class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-blue-600 rounded-full">
                {{ cartItemsCount }}
              </span>
            </NuxtLink>
            
            <!-- Authentication links -->
            <template v-if="isAuthenticated">
              <div class="ml-4 relative flex items-center">
                <NuxtLink to="/profile" class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                  My Account
                </NuxtLink>
                <button 
                  @click="logout" 
                  class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                >
                  Logout
                </button>
                <span v-if="user?.role === 'admin'" class="ml-2 bg-red-100 text-red-800 text-xs font-medium px-2 py-0.5 rounded">
                  Admin
                </span>
              </div>
            </template>
            <template v-else>
              <NuxtLink to="/login" class="ml-4 text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Login
              </NuxtLink>
              <NuxtLink to="/register" class="ml-4 bg-blue-600 text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">
                Sign Up
              </NuxtLink>
            </template>
          </div>
        </div>
      </div>
    </header>
    
    <!-- Main content -->
    <main class="flex-grow">
      <slot />
    </main>
    
    <!-- Footer -->
    <footer class="bg-gray-800 text-white">
      <div class="max-w-6xl mx-auto px-4 py-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-lg font-semibold mb-4">Office365 Store</h3>
            <p class="text-gray-400 text-sm">
              Your trusted source for Office 365 subscriptions at competitive prices.
            </p>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">Products</h3>
            <ul class="space-y-2 text-sm text-gray-400">
              <li>
                <NuxtLink to="/products?category=Office 365 Business" class="hover:text-white">
                  Business Plans
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/products?category=Office 365 Personal" class="hover:text-white">
                  Personal Plans
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/products?category=Office 365 Enterprise" class="hover:text-white">
                  Enterprise Plans
                </NuxtLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">Support</h3>
            <ul class="space-y-2 text-sm text-gray-400">
              <li>
                <NuxtLink to="/faq" class="hover:text-white">
                  FAQ
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contact" class="hover:text-white">
                  Contact Us
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/support" class="hover:text-white">
                  Support Center
                </NuxtLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">Legal</h3>
            <ul class="space-y-2 text-sm text-gray-400">
              <li>
                <NuxtLink to="/terms" class="hover:text-white">
                  Terms of Service
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/privacy" class="hover:text-white">
                  Privacy Policy
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>&copy; {{ new Date().getFullYear() }} Office365 Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
body {
  overflow-y: scroll;
}
</style> 
 