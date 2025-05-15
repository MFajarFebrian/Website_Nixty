import { _ as __nuxt_component_0 } from "./nuxt-link-D3Z5Chp2.js";
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { a as useSeoMeta } from "../server.mjs";
import "C:/Users/E31/Documents/2025 project/Website_Nixty/node_modules/ufo/dist/index.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "C:/Users/E31/Documents/2025 project/Website_Nixty/node_modules/hookable/dist/index.mjs";
import "C:/Users/E31/Documents/2025 project/Website_Nixty/node_modules/unctx/dist/index.mjs";
import "C:/Users/E31/Documents/2025 project/Website_Nixty/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/E31/Documents/2025 project/Website_Nixty/node_modules/radix3/dist/index.mjs";
import "C:/Users/E31/Documents/2025 project/Website_Nixty/node_modules/defu/dist/defu.mjs";
import "tailwindcss/colors";
import "C:/Users/E31/Documents/2025 project/Website_Nixty/node_modules/klona/dist/index.mjs";
import "C:/Users/E31/Documents/2025 project/Website_Nixty/node_modules/@unhead/vue/dist/index.mjs";
import "@iconify/vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Office 365 Retail Store",
      description: "Welcome to our Office 365 retail store"
    });
    const featuredProducts = ref([]);
    const loading = ref(true);
    function formatPrice(price) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      }).format(price);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-6xl mx-auto px-4 py-10" }, _attrs))}><div class="bg-blue-600 text-white rounded-xl p-8 mb-12 shadow-lg"><div class="max-w-3xl"><h1 class="text-4xl font-bold mb-4">Welcome to Our Office 365 Retail Store</h1><p class="text-xl mb-6">Get the best Office 365 plans for your business or personal use at competitive prices.</p><div class="flex flex-wrap gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/products",
        class: "bg-white text-blue-600 hover:bg-blue-50 font-medium py-2 px-6 rounded-lg transition"
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
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/login",
        class: "bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-6 rounded-lg transition"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Sign In `);
          } else {
            return [
              createTextVNode(" Sign In ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="mb-12"><div class="flex justify-between items-center mb-6"><h2 class="text-2xl font-bold">Featured Products</h2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/products",
        class: "text-blue-600 hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`View all products →`);
          } else {
            return [
              createTextVNode("View all products →")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid grid-cols-1 md:grid-cols-3 gap-6">`);
      if (unref(loading)) {
        _push(`<div class="col-span-3 flex justify-center py-12"><div class="inline-block animate-spin rounded-full h-8 w-8 border-4 border-blue-500 border-t-transparent"></div></div>`);
      } else {
        _push(`<!--[-->`);
        ssrRenderList(unref(featuredProducts), (product) => {
          _push(`<div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"><div class="p-6"><div class="text-sm text-blue-600 font-semibold mb-1">${ssrInterpolate(product.category)}</div><h3 class="text-lg font-bold mb-2">${ssrInterpolate(product.name)}</h3><p class="text-gray-600 text-sm mb-4 line-clamp-2">${ssrInterpolate(product.description)}</p><div class="flex justify-between items-center"><span class="text-xl font-bold text-blue-700">${ssrInterpolate(formatPrice(product.price))}<span class="text-sm font-normal">/month</span></span>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/product/${product.id}`,
            class: "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` View Details `);
              } else {
                return [
                  createTextVNode(" View Details ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div></div>`);
        });
        _push(`<!--]-->`);
      }
      _push(`</div></div><div class="mb-12"><h2 class="text-2xl font-bold mb-6">Product Categories</h2><div class="grid grid-cols-1 md:grid-cols-3 gap-6"><div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"><div class="p-6"><h3 class="text-xl font-bold mb-2">Office 365 Business</h3><p class="text-gray-600 mb-4">Plans designed for businesses of all sizes.</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/products?category=Office 365 Business",
        class: "text-blue-600 hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Browse Business Plans → `);
          } else {
            return [
              createTextVNode(" Browse Business Plans → ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"><div class="p-6"><h3 class="text-xl font-bold mb-2">Office 365 Personal</h3><p class="text-gray-600 mb-4">Plans for individual and family use.</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/products?category=Office 365 Personal",
        class: "text-blue-600 hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Browse Personal Plans → `);
          } else {
            return [
              createTextVNode(" Browse Personal Plans → ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"><div class="p-6"><h3 class="text-xl font-bold mb-2">Office 365 Enterprise</h3><p class="text-gray-600 mb-4">Plans for large organizations with advanced needs.</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/products?category=Office 365 Enterprise",
        class: "text-blue-600 hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Browse Enterprise Plans → `);
          } else {
            return [
              createTextVNode(" Browse Enterprise Plans → ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div><div class="mb-12"><h2 class="text-2xl font-bold mb-6">Why Choose Us</h2><div class="grid grid-cols-1 md:grid-cols-3 gap-6"><div class="bg-white p-6 rounded-lg shadow-md"><div class="mb-3 text-blue-600"><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div><h3 class="text-lg font-semibold mb-2">Competitive Pricing</h3><p class="text-gray-600">We offer the best prices on Office 365 subscriptions with special discounts for businesses.</p></div><div class="bg-white p-6 rounded-lg shadow-md"><div class="mb-3 text-blue-600"><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div><h3 class="text-lg font-semibold mb-2">Fast Activation</h3><p class="text-gray-600">Get your Office 365 subscription activated instantly after purchase.</p></div><div class="bg-white p-6 rounded-lg shadow-md"><div class="mb-3 text-blue-600"><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div><h3 class="text-lg font-semibold mb-2">24/7 Support</h3><p class="text-gray-600">Our dedicated support team is available around the clock to assist with any issues.</p></div></div></div><footer class="mt-12 pt-6 border-t border-gray-200"><div class="grid grid-cols-1 md:grid-cols-4 gap-8"><div><h3 class="text-lg font-semibold mb-3">Office 365 Store</h3><p class="text-gray-600 text-sm">Your trusted provider of Microsoft Office 365 subscriptions for businesses and individuals.</p></div><div><h3 class="text-md font-semibold mb-3">Quick Links</h3><ul class="space-y-2 text-sm"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/products",
        class: "text-blue-600 hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Products`);
          } else {
            return [
              createTextVNode("Products")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/pricing",
        class: "text-blue-600 hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Pricing`);
          } else {
            return [
              createTextVNode("Pricing")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "text-blue-600 hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About Us`);
          } else {
            return [
              createTextVNode("About Us")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "text-blue-600 hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact`);
          } else {
            return [
              createTextVNode("Contact")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div><h3 class="text-md font-semibold mb-3">Legal</h3><ul class="space-y-2 text-sm"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/privacy",
        class: "text-blue-600 hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Privacy Policy`);
          } else {
            return [
              createTextVNode("Privacy Policy")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/terms",
        class: "text-blue-600 hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Terms of Service`);
          } else {
            return [
              createTextVNode("Terms of Service")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/refund",
        class: "text-blue-600 hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Refund Policy`);
          } else {
            return [
              createTextVNode("Refund Policy")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div><h3 class="text-md font-semibold mb-3">Contact Us</h3><ul class="space-y-2 text-sm text-gray-600"><li>Email: support@office365store.com</li><li>Phone: +1 (555) 123-4567</li><li>Hours: Mon-Fri, 9AM-6PM EST</li></ul></div></div><div class="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-500"><p>© ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Office 365 Retail Store. All rights reserved.</p></div></footer></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-QX6WwK2n.js.map
