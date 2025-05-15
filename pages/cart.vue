<script setup lang="ts">
interface CartItem {
  id: number;
  product_id: number;
  name: string;
  price: number;
  quantity: number;
  image_url?: string;
}

const cart = ref<CartItem[]>([]);
const loading = ref(true);
const error = ref(null);
const subtotal = computed(() => {
  return cart.value.reduce((total, item) => total + (item.price * item.quantity), 0);
});

// Mock cart data - in a real app, this would be fetched from the server
onMounted(() => {
  loading.value = true;
  
  // Simulate fetching cart data
  setTimeout(() => {
    // Check if we have cart data in localStorage
    const storedCart = localStorage.getItem('office365_cart');
    
    if (storedCart) {
      try {
        cart.value = JSON.parse(storedCart);
      } catch (err) {
        console.error('Failed to parse cart data', err);
        cart.value = [];
      }
    }
    
    loading.value = false;
  }, 500);
});

// Update cart item quantity
function updateQuantity(itemId: number, newQuantity: number) {
  if (newQuantity < 1) return;
  
  const itemIndex = cart.value.findIndex(item => item.id === itemId);
  if (itemIndex !== -1) {
    cart.value[itemIndex].quantity = newQuantity;
    saveCart();
  }
}

// Remove item from cart
function removeItem(itemId: number) {
  cart.value = cart.value.filter(item => item.id !== itemId);
  saveCart();
}

// Save cart to localStorage
function saveCart() {
  localStorage.setItem('office365_cart', JSON.stringify(cart.value));
  
  // Update cart count in header
  if (window.cartUpdated) {
    window.cartUpdated();
  }
}

// Clear the entire cart
function clearCart() {
  cart.value = [];
  localStorage.removeItem('office365_cart');
  
  // Update cart count in header
  if (window.cartUpdated) {
    window.cartUpdated();
  }
}

// Format price to display in currency format
function formatPrice(price: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency', 
    currency: 'USD'
  }).format(price);
}

// Set page metadata
useSeoMeta({
  title: 'Shopping Cart - Office 365 Retail Store',
  description: 'Your shopping cart'
});
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">Shopping Cart</h1>
    
    <!-- Loading state -->
    <div v-if="loading" class="flex justify-center py-12">
      <div class="inline-block animate-spin rounded-full h-8 w-8 border-4 border-blue-500 border-t-transparent"></div>
    </div>
    
    <!-- Error state -->
    <div v-else-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-8">
      {{ error }}
    </div>
    
    <!-- Empty cart -->
    <div v-else-if="cart.length === 0" class="text-center py-12 bg-white rounded-lg shadow-md">
      <div class="text-5xl mb-4">🛒</div>
      <h2 class="text-2xl font-bold text-gray-700 mb-4">Your cart is empty</h2>
      <p class="text-gray-600 mb-6">Looks like you haven't added any products to your cart yet.</p>
      <NuxtLink 
        to="/products" 
        class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition"
      >
        Browse Products
      </NuxtLink>
    </div>
    
    <!-- Cart with items -->
    <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Cart items -->
      <div class="lg:col-span-2">
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <div class="p-6">
            <div class="flex justify-between items-center mb-4">
              <h2 class="text-xl font-bold">Items ({{ cart.length }})</h2>
              <button 
                @click="clearCart" 
                class="text-red-600 hover:text-red-800 text-sm"
              >
                Clear Cart
              </button>
            </div>
            
            <!-- Cart item list -->
            <div class="space-y-6">
              <div 
                v-for="item in cart" 
                :key="item.id"
                class="flex items-start border-b pb-6 last:border-0 last:pb-0"
              >
                <!-- Product image -->
                <div class="w-20 h-20 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center mr-4">
                  <img 
                    v-if="item.image_url" 
                    :src="item.image_url" 
                    :alt="item.name"
                    class="max-w-full max-h-full object-contain"
                  />
                  <div v-else class="text-3xl text-gray-300">
                    <span>📄</span>
                  </div>
                </div>
                
                <!-- Product details -->
                <div class="flex-grow">
                  <h3 class="font-semibold text-lg mb-1">{{ item.name }}</h3>
                  <p class="text-blue-700 font-bold">{{ formatPrice(item.price) }}<span class="text-sm font-normal text-gray-600">/month</span></p>
                </div>
                
                <!-- Quantity controls -->
                <div class="flex items-center ml-4">
                  <div class="flex border rounded">
                    <button 
                      @click="updateQuantity(item.id, item.quantity - 1)"
                      class="px-3 py-1 border-r hover:bg-gray-100"
                    >
                      -
                    </button>
                    <input 
                      v-model="item.quantity" 
                      type="number" 
                      min="1" 
                      class="w-12 text-center py-1"
                      @change="updateQuantity(item.id, parseInt(item.quantity.toString()))"
                    />
                    <button 
                      @click="updateQuantity(item.id, item.quantity + 1)"
                      class="px-3 py-1 border-l hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                  
                  <!-- Remove button -->
                  <button 
                    @click="removeItem(item.id)"
                    class="ml-4 text-gray-500 hover:text-red-600"
                  >
                    <span class="sr-only">Remove</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Order summary -->
      <div class="lg:col-span-1">
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <div class="p-6">
            <h2 class="text-xl font-bold mb-4">Order Summary</h2>
            
            <div class="space-y-2 mb-6">
              <div class="flex justify-between">
                <span class="text-gray-600">Subtotal</span>
                <span class="font-medium">{{ formatPrice(subtotal) }}</span>
              </div>
              
              <div class="flex justify-between">
                <span class="text-gray-600">Taxes</span>
                <span class="font-medium">{{ formatPrice(subtotal * 0.1) }}</span>
              </div>
              
              <div class="border-t pt-2 mt-2">
                <div class="flex justify-between font-bold">
                  <span>Total</span>
                  <span>{{ formatPrice(subtotal * 1.1) }}</span>
                </div>
                <div class="text-xs text-gray-500 mt-1">Billed monthly</div>
              </div>
            </div>
            
            <button 
              class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium transition"
            >
              Proceed to Checkout
            </button>
            
            <div class="mt-4">
              <NuxtLink to="/products" class="text-blue-600 hover:underline text-sm">
                ← Continue Shopping
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 