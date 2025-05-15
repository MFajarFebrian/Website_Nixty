import { ref, mergeProps, unref, useSSRContext } from 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr } from 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = {
  __name: "test-profile",
  __ssrInlineRender: true,
  setup(__props) {
    const profile = ref(null);
    const error = ref(null);
    const loading = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md" }, _attrs))}><h1 class="text-2xl font-bold mb-6">User Profile</h1><div class="mb-4"><button class="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""}>${ssrInterpolate(unref(loading) ? "Loading..." : "Fetch Profile")}</button><button class="ml-2 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700"> Logout </button></div>`);
      if (unref(error)) {
        _push(`<div class="mt-4 p-3 bg-red-100 text-red-700 rounded">${ssrInterpolate(unref(error))}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(profile)) {
        _push(`<div class="mt-4"><h2 class="text-lg font-semibold mb-2">Profile Information</h2><div class="p-3 bg-green-100 text-green-800 rounded"><p><strong>User ID:</strong> ${ssrInterpolate(unref(profile).id)}</p><p><strong>Name:</strong> ${ssrInterpolate(unref(profile).name)}</p><p><strong>Email:</strong> ${ssrInterpolate(unref(profile).email)}</p><p><strong>Role:</strong> ${ssrInterpolate(unref(profile).role)}</p><p><strong>Joined:</strong> ${ssrInterpolate(new Date(unref(profile).createdAt).toLocaleString())}</p></div></div>`);
      } else if (!unref(error)) {
        _push(`<div class="mt-4 p-3 bg-gray-100 text-gray-700 rounded"> No profile loaded. Please click &quot;Fetch Profile&quot; or login first at <a href="/test-login" class="text-blue-600 hover:underline">Login Page</a>. </div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test-profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=test-profile-DAIRyNKs.mjs.map
