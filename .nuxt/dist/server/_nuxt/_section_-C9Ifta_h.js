import { defineComponent, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import "C:/Users/E31/Documents/2025 project/Website_Nixty/node_modules/hookable/dist/index.mjs";
import { c as useRoute, a as useSeoMeta } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "C:/Users/E31/Documents/2025 project/Website_Nixty/node_modules/unctx/dist/index.mjs";
import "C:/Users/E31/Documents/2025 project/Website_Nixty/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/E31/Documents/2025 project/Website_Nixty/node_modules/radix3/dist/index.mjs";
import "C:/Users/E31/Documents/2025 project/Website_Nixty/node_modules/defu/dist/defu.mjs";
import "C:/Users/E31/Documents/2025 project/Website_Nixty/node_modules/ufo/dist/index.mjs";
import "tailwindcss/colors";
import "C:/Users/E31/Documents/2025 project/Website_Nixty/node_modules/klona/dist/index.mjs";
import "C:/Users/E31/Documents/2025 project/Website_Nixty/node_modules/@unhead/vue/dist/index.mjs";
import "@iconify/vue";
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
export {
  _sfc_main as default
};
//# sourceMappingURL=_section_-C9Ifta_h.js.map
