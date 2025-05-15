<script setup lang="ts">
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  image_url?: string;
}

interface CartItem {
  id: number;
  product_id: number;
  name: string;
  price: number;
  quantity: number;
  image_url?: string;
}

const route = useRoute();
const router = useRouter();
const productId = route.params.id;
const product = ref<Product | null>(null);
const loading = ref(true);
const error = ref(null);
const quantity = ref(1);
const addedToCart = ref(false);

// Fetch product details
async function fetchProduct() {
  loading.value = true;
  error.value = null;
  
  try {
    const response = await fetch(`/api/products/${productId}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch product details');
    }
    
    const data = await response.json();
    product.value = data.product;
  } catch (err: any) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
}

// Add to cart function
function addToCart() {
  if (!product.value) return;
  
  try {
    // Get existing cart or initialize empty array
    const cartJson = localStorage.getItem('office365_cart');
    const cart: CartItem[] = cartJson ? JSON.parse(cartJson) : [];
    
    // Check if product already exists in cart
    const existingItemIndex = cart.findIndex(item => item.product_id === product.value?.id);
    
    if (existingItemIndex >= 0) {
      // Update quantity if product already in cart
      cart[existingItemIndex].quantity += quantity.value;
    } else {
      // Add new item to cart
      const newItem: CartItem = {
        id: Date.now(), // Generate unique ID for cart item
        product_id: product.value.id,
        name: product.value.name,
        price: product.value.price,
        quantity: quantity.value,
        image_url: product.value.image_url
      };
      
      cart.push(newItem);
    }
    
    // Save updated cart
    localStorage.setItem('office365_cart', JSON.stringify(cart));
    
    // Update cart count in header
    if (window.cartUpdated) {
      window.cartUpdated();
    }
    
    // Show success message
    addedToCart.value = true;
    
    // Reset after 3 seconds
    setTimeout(() => {
      addedToCart.value = false;
    }, 3000);
  } catch (err) {
    console.error('Error adding to cart:', err);
  }
}

// Navigate to cart
function viewCart() {
  router.push('/cart');
}

// Format price to display in currency format
function formatPrice(price: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency', 
    currency: 'USD'
  }).format(price);
}

// Fetch product on component mount
onMounted(() => {
  fetchProduct();
});

// Set page metadata based on product
watch(product, (newProduct) => {
  if (newProduct) {
    useSeoMeta({
      title: `${newProduct.name} - Office 365 Retail Store`,
      description: newProduct.description || 'Office 365 product details'
    });
  }
});
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 py-8">
    <!-- Loading state -->
    <div v-if="loading" class="flex justify-center py-12">
      <div class="inline-block animate-spin rounded-full h-8 w-8 border-4 border-blue-500 border-t-transparent"></div>
    </div>
    
    <!-- Error state -->
    <div v-else-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
      {{ error }}
    </div>
    
    <!-- Product not found -->
    <div v-else-if="!product" class="text-center py-12">
      <h1 class="text-2xl font-bold text-gray-700">Product not found</h1>
      <p class="mt-2 text-gray-600">The product you're looking for doesn't exist.</p>
      <NuxtLink to="/products" class="mt-4 inline-block text-blue-600 hover:underline">
        Browse all products
      </NuxtLink>
    </div>
    
    <!-- Product details -->
    <div v-else class="bg-white rounded-lg shadow-md overflow-hidden">
      <div class="p-6 md:p-8">
        <div class="flex flex-col md:flex-row">
          <!-- Product image or placeholder -->
          <div class="md:w-1/3 mb-6 md:mb-0 md:mr-8">
            <div class="bg-gray-100 rounded-lg aspect-square flex items-center justify-center">
              <img 
                v-if="product.image_url" 
                :src="product.image_url" 
                :alt="product.name"
                class="max-w-full max-h-full object-contain"
              />
              <div v-else class="text-6xl text-gray-300">
                <span>📄</span>
              </div>
            </div>
          </div>
          
          <!-- Product information -->
          <div class="md:w-2/3">
            <div class="text-sm text-blue-600 font-semibold mb-1">{{ product.category }}</div>
            <h1 class="text-3xl font-bold mb-4">{{ product.name }}</h1>
            
            <div class="mb-6">
              <span class="text-2xl font-bold text-blue-700">{{ formatPrice(product.price) }}</span>
              <span class="text-gray-600 ml-1">/month</span>
            </div>
            
            <p class="text-gray-700 mb-6">{{ product.description }}</p>
            
            <div class="flex items-center mb-6">
              <span class="mr-3 font-medium">Quantity:</span>
              <div class="flex border rounded">
                <button 
                  @click="quantity = Math.max(1, quantity - 1)" 
                  class="px-3 py-1 border-r hover:bg-gray-100"
                >
                  -
                </button>
                <input 
                  v-model="quantity" 
                  type="number" 
                  min="1" 
                  :max="product.stock" 
                  class="w-12 text-center py-1"
                />
                <button 
                  @click="quantity = Math.min(product.stock, quantity + 1)" 
                  class="px-3 py-1 border-l hover:bg-gray-100"
                >
                  +
                </button>
              </div>
              <span class="ml-4 text-sm text-gray-600">{{ product.stock }} available</span>
            </div>
            
            <!-- Success message -->
            <div v-if="addedToCart" class="mb-6 bg-green-100 text-green-700 p-3 rounded-md">
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Added to cart! <button @click="viewCart" class="text-blue-600 hover:underline">View cart</button></span>
              </div>
            </div>
            
            <div class="flex space-x-4">
              <button 
                @click="addToCart" 
                class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md"
              >
                Add to Cart
              </button>
              <NuxtLink 
                to="/products" 
                class="border border-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-50"
              >
                Back to Products
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 