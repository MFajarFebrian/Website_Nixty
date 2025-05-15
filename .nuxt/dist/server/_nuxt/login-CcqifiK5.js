import { _ as __nuxt_component_0 } from "./nuxt-link-D3Z5Chp2.js";
import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderComponent } from "vue/server-renderer";
import { b as useRouter, a as useSeoMeta } from "../server.mjs";
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
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const email = ref("");
    const password = ref("");
    const loading = ref(false);
    const error = ref(null);
    const successMessage = ref("");
    useSeoMeta({
      title: "Login - Office 365 Retail Store",
      description: "Login to your Office 365 account"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-md mx-auto px-4 py-8" }, _attrs))}><h1 class="text-2xl font-bold mb-6 text-center">Login to Your Account</h1><div class="bg-white rounded-lg shadow-md overflow-hidden"><div class="p-6"><form>`);
      if (unref(successMessage)) {
        _push(`<div class="mb-6 p-3 bg-green-100 text-green-700 rounded-md">${ssrInterpolate(unref(successMessage))}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(error)) {
        _push(`<div class="mb-6 p-3 bg-red-100 text-red-700 rounded-md">${ssrInterpolate(unref(error))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mb-4"><label class="block text-gray-700 mb-2" for="email">Email</label><input${ssrRenderAttr("value", unref(email))} type="email" id="email" placeholder="Your email" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required></div><div class="mb-6"><label class="block text-gray-700 mb-2" for="password">Password</label><input${ssrRenderAttr("value", unref(password))} type="password" id="password" placeholder="Your password" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required></div><button type="submit" class="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition duration-200"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""}>`);
      if (unref(loading)) {
        _push(`<span class="flex items-center justify-center"><svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Logging in... </span>`);
      } else {
        _push(`<span>Login</span>`);
      }
      _push(`</button></form><div class="mt-6 text-center"><p class="text-gray-600"> Don&#39;t have an account? `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/register",
        class: "text-blue-600 hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Register`);
          } else {
            return [
              createTextVNode("Register")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div><div class="mt-8 pt-6 border-t border-gray-200"><p class="text-sm text-gray-600 mb-2">Admin credentials for testing:</p><div class="text-sm text-gray-800 bg-gray-100 p-2 rounded-md"><p><strong>Email:</strong> admin@example.com</p><p><strong>Password:</strong> password123</p><button class="mt-2 w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-1 px-2 rounded text-xs"> Fill Admin Credentials </button></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=login-CcqifiK5.js.map
