import { defineComponent, useSSRContext } from 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/vue/index.mjs';
import { ssrRenderAttrs } from 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/vue/server-renderer/index.mjs';
import { a as useSeoMeta } from './server.mjs';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/ofetch/dist/node.mjs';
import '../_/nitro.mjs';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/ufo/dist/index.mjs';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Admin Dashboard",
      description: "Office 365 Admin Dashboard"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="text-3xl font-bold mb-6">Admin Dashboard</h1><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6"><div class="bg-white p-6 rounded-lg shadow-md"><h3 class="text-lg font-semibold mb-2">Total Products</h3><p class="text-3xl font-bold">25</p></div><div class="bg-white p-6 rounded-lg shadow-md"><h3 class="text-lg font-semibold mb-2">Total Orders</h3><p class="text-3xl font-bold">42</p></div><div class="bg-white p-6 rounded-lg shadow-md"><h3 class="text-lg font-semibold mb-2">Total Users</h3><p class="text-3xl font-bold">156</p></div><div class="bg-white p-6 rounded-lg shadow-md"><h3 class="text-lg font-semibold mb-2">Revenue</h3><p class="text-3xl font-bold">$12,450</p></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Bx5sD23L.mjs.map
