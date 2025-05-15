import { defineComponent, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { c as useRoute, a as useSeoMeta } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "C:/Users/E31/Documents/2025 project/Website_Nixty/node_modules/hookable/dist/index.mjs";
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
  __name: "[...slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const slug = route.params.slug;
    const path = Array.isArray(slug) ? slug.join("/") : slug;
    const pageData = {
      "products": {
        title: "Office 365 Products",
        description: "Browse our Office 365 products",
        content: '<h1 class="text-3xl font-bold mb-6">Office 365 Products</h1><p>Browse our selection of Office 365 products for individuals and businesses.</p>'
      },
      "pricing": {
        title: "Office 365 Pricing",
        description: "View our pricing options",
        content: '<h1 class="text-3xl font-bold mb-6">Office 365 Pricing</h1><p>Compare our pricing plans to find the right Office 365 solution for you.</p>'
      },
      "support": {
        title: "Office 365 Support",
        description: "Get help with Office 365",
        content: `<h1 class="text-3xl font-bold mb-6">Office 365 Support</h1><p>Need help with your Office 365 subscription? We're here to help.</p>`
      },
      "about": {
        title: "About Our Office 365 Store",
        description: "Learn about our store",
        content: `<h1 class="text-3xl font-bold mb-6">About Our Office 365 Store</h1><p>We've been providing Office 365 solutions since 2010.</p>`
      },
      "contact": {
        title: "Contact Us",
        description: "Get in touch with our team",
        content: '<h1 class="text-3xl font-bold mb-6">Contact Us</h1><p>Have questions? Reach out to our team for assistance.</p>'
      }
    };
    const pageInfo = pageData[path] || {
      title: "404 - Page Not Found",
      description: "The requested page could not be found",
      content: `<h1 class="text-3xl font-bold mb-6">404 - Page Not Found</h1><p>The page you are looking for doesn't exist.</p>`
    };
    useSeoMeta({
      title: pageInfo.title,
      description: pageInfo.description
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div>${unref(pageInfo).content ?? ""}</div>`);
      if (unref(pageInfo).title !== "404 - Page Not Found") {
        _push(`<div class="mt-10 bg-white p-6 rounded-lg shadow-md"><h2 class="text-xl font-semibold mb-4">Additional Information</h2><p class="text-gray-600">This is a placeholder for the ${ssrInterpolate(unref(path))} page.</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_...slug_-DSapZrKI.js.map
