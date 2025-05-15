import { _ as __nuxt_component_0 } from "./nuxt-link-D3Z5Chp2.js";
import { defineComponent, ref, mergeProps, withCtx, createVNode, createTextVNode, unref, createBlock, createCommentVNode, openBlock, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import "C:/Users/E31/Documents/2025 project/Website_Nixty/node_modules/hookable/dist/index.mjs";
import "C:/Users/E31/Documents/2025 project/Website_Nixty/node_modules/ufo/dist/index.mjs";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
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
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const cartItemsCount = ref(0);
    const isAuthenticated = ref(false);
    const user = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col bg-gray-50" }, _attrs))}><header class="bg-white shadow-sm"><div class="max-w-6xl mx-auto px-4"><div class="flex justify-between items-center h-16"><div class="flex items-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-blue-600 font-bold text-xl"${_scopeId}>Office365 Store</span>`);
          } else {
            return [
              createVNode("span", { class: "text-blue-600 font-bold text-xl" }, "Office365 Store")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="hidden md:ml-10 md:flex space-x-8">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/products",
        class: "text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Products `);
          } else {
            return [
              createTextVNode(" Products ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/#categories",
        class: "text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Categories `);
          } else {
            return [
              createTextVNode(" Categories ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/support",
        class: "text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Support `);
          } else {
            return [
              createTextVNode(" Support ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav></div><div class="flex items-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/cart",
        class: "ml-4 group relative p-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="sr-only"${_scopeId}>Cart</span><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"${_scopeId}></path></svg>`);
            if (unref(cartItemsCount) > 0) {
              _push2(`<span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-blue-600 rounded-full"${_scopeId}>${ssrInterpolate(unref(cartItemsCount))}</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("span", { class: "sr-only" }, "Cart"),
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                class: "h-6 w-6 text-gray-600 group-hover:text-blue-600",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                })
              ])),
              unref(cartItemsCount) > 0 ? (openBlock(), createBlock("span", {
                key: 0,
                class: "absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-blue-600 rounded-full"
              }, toDisplayString(unref(cartItemsCount)), 1)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(isAuthenticated)) {
        _push(`<div class="ml-4 relative flex items-center">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/profile",
          class: "text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` My Account `);
            } else {
              return [
                createTextVNode(" My Account ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<button class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"> Logout </button>`);
        if (((_a = unref(user)) == null ? void 0 : _a.role) === "admin") {
          _push(`<span class="ml-2 bg-red-100 text-red-800 text-xs font-medium px-2 py-0.5 rounded"> Admin </span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/login",
          class: "ml-4 text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Login `);
            } else {
              return [
                createTextVNode(" Login ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/register",
          class: "ml-4 bg-blue-600 text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Sign Up `);
            } else {
              return [
                createTextVNode(" Sign Up ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--]-->`);
      }
      _push(`</div></div></div></header><main class="flex-grow">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><footer class="bg-gray-800 text-white"><div class="max-w-6xl mx-auto px-4 py-8"><div class="grid grid-cols-1 md:grid-cols-4 gap-8"><div><h3 class="text-lg font-semibold mb-4">Office365 Store</h3><p class="text-gray-400 text-sm"> Your trusted source for Office 365 subscriptions at competitive prices. </p></div><div><h3 class="text-lg font-semibold mb-4">Products</h3><ul class="space-y-2 text-sm text-gray-400"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/products?category=Office 365 Business",
        class: "hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Business Plans `);
          } else {
            return [
              createTextVNode(" Business Plans ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/products?category=Office 365 Personal",
        class: "hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Personal Plans `);
          } else {
            return [
              createTextVNode(" Personal Plans ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/products?category=Office 365 Enterprise",
        class: "hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Enterprise Plans `);
          } else {
            return [
              createTextVNode(" Enterprise Plans ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div><h3 class="text-lg font-semibold mb-4">Support</h3><ul class="space-y-2 text-sm text-gray-400"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/faq",
        class: "hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` FAQ `);
          } else {
            return [
              createTextVNode(" FAQ ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Contact Us `);
          } else {
            return [
              createTextVNode(" Contact Us ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/support",
        class: "hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Support Center `);
          } else {
            return [
              createTextVNode(" Support Center ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div><h3 class="text-lg font-semibold mb-4">Legal</h3><ul class="space-y-2 text-sm text-gray-400"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/terms",
        class: "hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Terms of Service `);
          } else {
            return [
              createTextVNode(" Terms of Service ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/privacy",
        class: "hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Privacy Policy `);
          } else {
            return [
              createTextVNode(" Privacy Policy ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></div><div class="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400"><p>© ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Office365 Store. All rights reserved.</p></div></div></footer></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=default-CyLfmyD-.js.map
