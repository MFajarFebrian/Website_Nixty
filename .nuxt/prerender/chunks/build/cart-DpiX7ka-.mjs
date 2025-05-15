import { _ as __nuxt_component_0 } from './nuxt-link-D3Z5Chp2.mjs';
import { defineComponent, ref, computed, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/vue/server-renderer/index.mjs';
import { a as useSeoMeta } from './server.mjs';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/ofetch/dist/node.mjs';
import '../_/nitro.mjs';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/bcrypt/bcrypt.js';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/jsonwebtoken/index.js';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/node-mock-http/dist/index.mjs';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/@iconify/utils/lib/index.mjs';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/consola/dist/index.mjs';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/nuxt/dist/core/runtime/nitro/utils/cache-driver.js';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/db0/dist/connectors/better-sqlite3.mjs';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/ipx/dist/index.mjs';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/tailwindcss/dist/colors.mjs';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/@iconify/vue/dist/iconify.mjs';
import '../_/renderer.mjs';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/unhead/dist/server.mjs';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/devalue/index.js';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/unhead/dist/plugins.mjs';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/unhead/dist/utils.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "cart",
  __ssrInlineRender: true,
  setup(__props) {
    const cart = ref([]);
    const loading = ref(true);
    const error = ref(null);
    const subtotal = computed(() => {
      return cart.value.reduce((total, item) => total + item.price * item.quantity, 0);
    });
    function formatPrice(price) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      }).format(price);
    }
    useSeoMeta({
      title: "Shopping Cart - Office 365 Retail Store",
      description: "Your shopping cart"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-6xl mx-auto px-4 py-8" }, _attrs))}><h1 class="text-3xl font-bold mb-8">Shopping Cart</h1>`);
      if (unref(loading)) {
        _push(`<div class="flex justify-center py-12"><div class="inline-block animate-spin rounded-full h-8 w-8 border-4 border-blue-500 border-t-transparent"></div></div>`);
      } else if (unref(error)) {
        _push(`<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-8">${ssrInterpolate(unref(error))}</div>`);
      } else if (unref(cart).length === 0) {
        _push(`<div class="text-center py-12 bg-white rounded-lg shadow-md"><div class="text-5xl mb-4">\u{1F6D2}</div><h2 class="text-2xl font-bold text-gray-700 mb-4">Your cart is empty</h2><p class="text-gray-600 mb-6">Looks like you haven&#39;t added any products to your cart yet.</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/products",
          class: "bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Browse Products `);
            } else {
              return [
                createTextVNode(" Browse Products ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="grid grid-cols-1 lg:grid-cols-3 gap-8"><div class="lg:col-span-2"><div class="bg-white rounded-lg shadow-md overflow-hidden"><div class="p-6"><div class="flex justify-between items-center mb-4"><h2 class="text-xl font-bold">Items (${ssrInterpolate(unref(cart).length)})</h2><button class="text-red-600 hover:text-red-800 text-sm"> Clear Cart </button></div><div class="space-y-6"><!--[-->`);
        ssrRenderList(unref(cart), (item) => {
          _push(`<div class="flex items-start border-b pb-6 last:border-0 last:pb-0"><div class="w-20 h-20 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center mr-4">`);
          if (item.image_url) {
            _push(`<img${ssrRenderAttr("src", item.image_url)}${ssrRenderAttr("alt", item.name)} class="max-w-full max-h-full object-contain">`);
          } else {
            _push(`<div class="text-3xl text-gray-300"><span>\u{1F4C4}</span></div>`);
          }
          _push(`</div><div class="flex-grow"><h3 class="font-semibold text-lg mb-1">${ssrInterpolate(item.name)}</h3><p class="text-blue-700 font-bold">${ssrInterpolate(formatPrice(item.price))}<span class="text-sm font-normal text-gray-600">/month</span></p></div><div class="flex items-center ml-4"><div class="flex border rounded"><button class="px-3 py-1 border-r hover:bg-gray-100"> - </button><input${ssrRenderAttr("value", item.quantity)} type="number" min="1" class="w-12 text-center py-1"><button class="px-3 py-1 border-l hover:bg-gray-100"> + </button></div><button class="ml-4 text-gray-500 hover:text-red-600"><span class="sr-only">Remove</span><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg></button></div></div>`);
        });
        _push(`<!--]--></div></div></div></div><div class="lg:col-span-1"><div class="bg-white rounded-lg shadow-md overflow-hidden"><div class="p-6"><h2 class="text-xl font-bold mb-4">Order Summary</h2><div class="space-y-2 mb-6"><div class="flex justify-between"><span class="text-gray-600">Subtotal</span><span class="font-medium">${ssrInterpolate(formatPrice(unref(subtotal)))}</span></div><div class="flex justify-between"><span class="text-gray-600">Taxes</span><span class="font-medium">${ssrInterpolate(formatPrice(unref(subtotal) * 0.1))}</span></div><div class="border-t pt-2 mt-2"><div class="flex justify-between font-bold"><span>Total</span><span>${ssrInterpolate(formatPrice(unref(subtotal) * 1.1))}</span></div><div class="text-xs text-gray-500 mt-1">Billed monthly</div></div></div><button class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium transition"> Proceed to Checkout </button><div class="mt-4">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/products",
          class: "text-blue-600 hover:underline text-sm"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u2190 Continue Shopping `);
            } else {
              return [
                createTextVNode(" \u2190 Continue Shopping ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div></div></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=cart-DpiX7ka-.mjs.map
