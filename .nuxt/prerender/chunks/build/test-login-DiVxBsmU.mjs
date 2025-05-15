import { ref, mergeProps, unref, useSSRContext } from 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = {
  __name: "test-login",
  __ssrInlineRender: true,
  setup(__props) {
    const email = ref("admin@example.com");
    const password = ref("password123");
    const loginResult = ref(null);
    const error = ref(null);
    const loading = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md" }, _attrs))}><h1 class="text-2xl font-bold mb-6">Test Admin Login</h1><form class="space-y-4"><div><label class="block text-gray-700 mb-2" for="email">Email</label><input${ssrRenderAttr("value", unref(email))} id="email" type="email" class="w-full px-3 py-2 border rounded-lg" placeholder="Email"></div><div><label class="block text-gray-700 mb-2" for="password">Password</label><input${ssrRenderAttr("value", unref(password))} id="password" type="password" class="w-full px-3 py-2 border rounded-lg" placeholder="Password"></div><div><button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""}>${ssrInterpolate(unref(loading) ? "Logging in..." : "Login")}</button></div></form>`);
      if (unref(error)) {
        _push(`<div class="mt-4 p-3 bg-red-100 text-red-700 rounded">${ssrInterpolate(unref(error))}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(loginResult)) {
        _push(`<div class="mt-4"><h2 class="text-lg font-semibold mb-2">Login Successful!</h2><div class="p-3 bg-green-100 text-green-800 rounded"><p><strong>User:</strong> ${ssrInterpolate(unref(loginResult).user.name)}</p><p><strong>Email:</strong> ${ssrInterpolate(unref(loginResult).user.email)}</p><p><strong>Role:</strong> ${ssrInterpolate(unref(loginResult).user.role)}</p><p class="mt-2"><strong>Token:</strong></p><p class="text-xs overflow-auto whitespace-nowrap">${ssrInterpolate(unref(loginResult).token)}</p></div><div class="mt-4"><a href="/test-profile" class="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 inline-block"> View Profile </a></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test-login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=test-login-DiVxBsmU.mjs.map
