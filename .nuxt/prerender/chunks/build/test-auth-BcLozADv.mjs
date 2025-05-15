import { ref, mergeProps, unref, useSSRContext } from 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = {
  __name: "test-auth",
  __ssrInlineRender: true,
  setup(__props) {
    const activeTab = ref("login");
    const loginEmail = ref("admin@example.com");
    const loginPassword = ref("password123");
    const loginResult = ref(null);
    const loginError = ref(null);
    const loginLoading = ref(false);
    const registerName = ref("New User");
    const registerEmail = ref("newuser@example.com");
    const registerPassword = ref("test123");
    const registerResult = ref(null);
    const registerError = ref(null);
    const registerLoading = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md" }, _attrs))}><h1 class="text-2xl font-bold mb-6">Authentication Test Page</h1><div class="mb-6 flex border-b"><button class="${ssrRenderClass([unref(activeTab) === "login" ? "border-b-2 border-blue-500 font-medium" : "text-gray-500", "py-2 px-4 mr-2"])}"> Login Test </button><button class="${ssrRenderClass([unref(activeTab) === "register" ? "border-b-2 border-blue-500 font-medium" : "text-gray-500", "py-2 px-4 mr-2"])}"> Registration Test </button></div>`);
      if (unref(activeTab) === "login") {
        _push(`<div class="space-y-6"><form class="space-y-4"><div><label class="block text-gray-700 mb-2" for="login-email">Email</label><input${ssrRenderAttr("value", unref(loginEmail))} id="login-email" type="email" class="w-full px-3 py-2 border rounded-lg" placeholder="Email"></div><div><label class="block text-gray-700 mb-2" for="login-password">Password</label><input${ssrRenderAttr("value", unref(loginPassword))} id="login-password" type="password" class="w-full px-3 py-2 border rounded-lg" placeholder="Password"></div><div class="flex space-x-2"><button type="submit" class="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"${ssrIncludeBooleanAttr(unref(loginLoading)) ? " disabled" : ""}>${ssrInterpolate(unref(loginLoading) ? "Logging in..." : "Login")}</button><button type="button" class="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300"> Use Admin </button><button type="button" class="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300"> Use Test User </button></div></form>`);
        if (unref(loginError)) {
          _push(`<div class="p-3 bg-red-100 text-red-700 rounded"><strong>Error:</strong> ${ssrInterpolate(unref(loginError))}</div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(loginResult)) {
          _push(`<div class="border p-4 rounded"><h2 class="text-lg font-semibold mb-2">Login Successful!</h2><div class="p-3 bg-green-100 text-green-800 rounded mb-4"><p><strong>User:</strong> ${ssrInterpolate(unref(loginResult).user.name)}</p><p><strong>Email:</strong> ${ssrInterpolate(unref(loginResult).user.email)}</p><p><strong>Role:</strong> ${ssrInterpolate(unref(loginResult).user.role)}</p></div><details class="bg-gray-100 p-2 rounded"><summary class="cursor-pointer">JWT Token</summary><p class="text-xs overflow-auto p-2 whitespace-nowrap">${ssrInterpolate(unref(loginResult).token)}</p></details><div class="mt-4"><button class="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"> Check User Profile </button></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(activeTab) === "register") {
        _push(`<div class="space-y-6"><form class="space-y-4"><div><label class="block text-gray-700 mb-2" for="register-name">Name</label><input${ssrRenderAttr("value", unref(registerName))} id="register-name" type="text" class="w-full px-3 py-2 border rounded-lg" placeholder="Full Name"></div><div><label class="block text-gray-700 mb-2" for="register-email">Email</label><input${ssrRenderAttr("value", unref(registerEmail))} id="register-email" type="email" class="w-full px-3 py-2 border rounded-lg" placeholder="Email"></div><div><label class="block text-gray-700 mb-2" for="register-password">Password</label><input${ssrRenderAttr("value", unref(registerPassword))} id="register-password" type="password" class="w-full px-3 py-2 border rounded-lg" placeholder="Password"><p class="text-xs text-gray-500 mt-1">Password must be at least 6 characters</p></div><div><button type="submit" class="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"${ssrIncludeBooleanAttr(unref(registerLoading)) ? " disabled" : ""}>${ssrInterpolate(unref(registerLoading) ? "Registering..." : "Register")}</button></div></form>`);
        if (unref(registerError)) {
          _push(`<div class="p-3 bg-red-100 text-red-700 rounded"><strong>Error:</strong> ${ssrInterpolate(unref(registerError))}</div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(registerResult)) {
          _push(`<div class="border p-4 rounded"><h2 class="text-lg font-semibold mb-2">Registration Successful!</h2><div class="p-3 bg-green-100 text-green-800 rounded mb-4"><p><strong>User:</strong> ${ssrInterpolate(unref(registerResult).user.name)}</p><p><strong>Email:</strong> ${ssrInterpolate(unref(registerResult).user.email)}</p><p><strong>Role:</strong> ${ssrInterpolate(unref(registerResult).user.role)}</p></div><details class="bg-gray-100 p-2 rounded"><summary class="cursor-pointer">JWT Token</summary><p class="text-xs overflow-auto p-2 whitespace-nowrap">${ssrInterpolate(unref(registerResult).token)}</p></details><div class="mt-4"><button class="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"> Check User Profile </button></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mt-8 pt-6 border-t"><h3 class="font-semibold mb-2">Test Accounts:</h3><div class="space-y-2"><div class="bg-gray-100 p-3 rounded"><p><strong>Admin User:</strong> admin@example.com / password123</p></div><div class="bg-gray-100 p-3 rounded"><p><strong>Test User:</strong> test@example.com / test123</p></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test-auth.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=test-auth-BcLozADv.mjs.map
