import { defineComponent, unref, useSSRContext } from 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate } from 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/vue/server-renderer/index.mjs';
import { c as useRoute, a as useSeoMeta } from './server.mjs';
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
  __name: "[section]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const section = route.params.section;
    const sectionData = {
      products: {
        title: "Manage Products",
        description: "Manage Office 365 products",
        heading: "Product Management"
      },
      orders: {
        title: "Manage Orders",
        description: "Manage customer orders",
        heading: "Order Management"
      },
      users: {
        title: "Manage Users",
        description: "Manage user accounts",
        heading: "User Management"
      },
      settings: {
        title: "Admin Settings",
        description: "Configure store settings",
        heading: "Store Settings"
      }
    };
    const sectionInfo = sectionData[section] || {
      title: `${section.charAt(0).toUpperCase() + section.slice(1)}`,
      description: `Manage ${section}`,
      heading: `${section.charAt(0).toUpperCase() + section.slice(1)} Management`
    };
    useSeoMeta({
      title: sectionInfo.title,
      description: sectionInfo.description
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="text-3xl font-bold mb-6">${ssrInterpolate(unref(sectionInfo).heading)}</h1><div class="bg-white p-6 rounded-lg shadow-md mt-6"><h2 class="text-xl font-semibold mb-4">${ssrInterpolate(unref(sectionInfo).heading)}</h2><p class="text-gray-600">This is for the ${ssrInterpolate(unref(sectionInfo).heading)} section.</p><div class="mt-6 overflow-x-auto"><table class="min-w-full bg-white"><thead><tr><th class="py-2 px-4 border-b">ID</th><th class="py-2 px-4 border-b">Name</th><th class="py-2 px-4 border-b">Date</th><th class="py-2 px-4 border-b">Actions</th></tr></thead><tbody><tr><td class="py-2 px-4 border-b">1</td><td class="py-2 px-4 border-b">Example Item</td><td class="py-2 px-4 border-b">2025-01-01</td><td class="py-2 px-4 border-b"><button class="text-blue-600 hover:underline mr-2">Edit</button><button class="text-red-600 hover:underline">Delete</button></td></tr><tr><td class="py-2 px-4 border-b">2</td><td class="py-2 px-4 border-b">Another Item</td><td class="py-2 px-4 border-b">2025-01-02</td><td class="py-2 px-4 border-b"><button class="text-blue-600 hover:underline mr-2">Edit</button><button class="text-red-600 hover:underline">Delete</button></td></tr></tbody></table></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/[section].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_section_-C9Ifta_h.mjs.map
