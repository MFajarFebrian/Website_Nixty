import { _ as __nuxt_component_0 } from './nuxt-link-D3Z5Chp2.mjs';
import { defineComponent, ref, watch, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/vue/server-renderer/index.mjs';
import { c as useRoute, b as useRouter, a as useSeoMeta } from './server.mjs';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/ofetch/dist/node.mjs';
import '../_/nitro.mjs';
import 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/h3/dist/index.mjs';
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
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useRouter();
    route.params.id;
    const product = ref(null);
    const loading = ref(true);
    const error = ref(null);
    const quantity = ref(1);
    const addedToCart = ref(false);
    function formatPrice(price) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      }).format(price);
    }
    watch(product, (newProduct) => {
      if (newProduct) {
        useSeoMeta({
          title: `${newProduct.name} - Office 365 Retail Store`,
          description: newProduct.description || "Office 365 product details"
        });
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-5xl mx-auto px-4 py-8" }, _attrs))}>`);
      if (unref(loading)) {
        _push(`<div class="flex justify-center py-12"><div class="inline-block animate-spin rounded-full h-8 w-8 border-4 border-blue-500 border-t-transparent"></div></div>`);
      } else if (unref(error)) {
        _push(`<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">${ssrInterpolate(unref(error))}</div>`);
      } else if (!unref(product)) {
        _push(`<div class="text-center py-12"><h1 class="text-2xl font-bold text-gray-700">Product not found</h1><p class="mt-2 text-gray-600">The product you&#39;re looking for doesn&#39;t exist.</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/products",
          class: "mt-4 inline-block text-blue-600 hover:underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Browse all products `);
            } else {
              return [
                createTextVNode(" Browse all products ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="bg-white rounded-lg shadow-md overflow-hidden"><div class="p-6 md:p-8"><div class="flex flex-col md:flex-row"><div class="md:w-1/3 mb-6 md:mb-0 md:mr-8"><div class="bg-gray-100 rounded-lg aspect-square flex items-center justify-center">`);
        if (unref(product).image_url) {
          _push(`<img${ssrRenderAttr("src", unref(product).image_url)}${ssrRenderAttr("alt", unref(product).name)} class="max-w-full max-h-full object-contain">`);
        } else {
          _push(`<div class="text-6xl text-gray-300"><span>\u{1F4C4}</span></div>`);
        }
        _push(`</div></div><div class="md:w-2/3"><div class="text-sm text-blue-600 font-semibold mb-1">${ssrInterpolate(unref(product).category)}</div><h1 class="text-3xl font-bold mb-4">${ssrInterpolate(unref(product).name)}</h1><div class="mb-6"><span class="text-2xl font-bold text-blue-700">${ssrInterpolate(formatPrice(unref(product).price))}</span><span class="text-gray-600 ml-1">/month</span></div><p class="text-gray-700 mb-6">${ssrInterpolate(unref(product).description)}</p><div class="flex items-center mb-6"><span class="mr-3 font-medium">Quantity:</span><div class="flex border rounded"><button class="px-3 py-1 border-r hover:bg-gray-100"> - </button><input${ssrRenderAttr("value", unref(quantity))} type="number" min="1"${ssrRenderAttr("max", unref(product).stock)} class="w-12 text-center py-1"><button class="px-3 py-1 border-l hover:bg-gray-100"> + </button></div><span class="ml-4 text-sm text-gray-600">${ssrInterpolate(unref(product).stock)} available</span></div>`);
        if (unref(addedToCart)) {
          _push(`<div class="mb-6 bg-green-100 text-green-700 p-3 rounded-md"><div class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg><span>Added to cart! <button class="text-blue-600 hover:underline">View cart</button></span></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex space-x-4"><button class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md"> Add to Cart </button>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/products",
          class: "border border-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-50"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Back to Products `);
            } else {
              return [
                createTextVNode(" Back to Products ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div></div></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-DVrjFZNH.mjs.map
