import { _ as __nuxt_component_0 } from './nuxt-link-D3Z5Chp2.mjs';
import { defineComponent, ref, watch, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'file://C:/Users/E31/Documents/2025%20project/Website_Nixty/node_modules/vue/server-renderer/index.mjs';
import { a as useSeoMeta } from './server.mjs';
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
  __name: "products",
  __ssrInlineRender: true,
  setup(__props) {
    const products = ref([]);
    const loading = ref(true);
    const error = ref(null);
    const searchQuery = ref("");
    const selectedCategory = ref("");
    const categories = ref([]);
    async function fetchProducts() {
      loading.value = true;
      error.value = null;
      try {
        let url = "/api/products";
        const params = new URLSearchParams();
        if (searchQuery.value) {
          params.append("query", searchQuery.value);
        }
        if (selectedCategory.value) {
          params.append("category", selectedCategory.value);
        }
        if (params.toString()) {
          url += `?${params.toString()}`;
        }
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        products.value = data.products;
        const uniqueCategories = /* @__PURE__ */ new Set();
        data.products.forEach((product) => {
          if (product.category) {
            uniqueCategories.add(product.category);
          }
        });
        categories.value = Array.from(uniqueCategories);
      } catch (err) {
        error.value = err.message;
      } finally {
        loading.value = false;
      }
    }
    watch([searchQuery, selectedCategory], debounce(() => {
      fetchProducts();
    }, 300));
    function formatPrice(price) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      }).format(price);
    }
    useSeoMeta({
      title: "Products - Office 365 Retail Store",
      description: "Browse our Office 365 products and plans"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-6xl mx-auto px-4 py-8" }, _attrs))}><h1 class="text-3xl font-bold mb-6">Office 365 Products</h1><div class="mb-8 bg-white p-4 rounded-lg shadow"><div class="flex flex-col md:flex-row gap-4"><div class="flex-1"><label class="block text-sm font-medium text-gray-700 mb-1">Search Products</label><input${ssrRenderAttr("value", unref(searchQuery))} type="text" placeholder="Search by name or description..." class="w-full px-4 py-2 border rounded-md"></div><div class="md:w-64"><label class="block text-sm font-medium text-gray-700 mb-1">Filter by Category</label><select class="w-full px-4 py-2 border rounded-md"><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(selectedCategory)) ? ssrLooseContain(unref(selectedCategory), "") : ssrLooseEqual(unref(selectedCategory), "")) ? " selected" : ""}>All Categories</option><!--[-->`);
      ssrRenderList(unref(categories), (category) => {
        _push(`<option${ssrRenderAttr("value", category)}${ssrIncludeBooleanAttr(Array.isArray(unref(selectedCategory)) ? ssrLooseContain(unref(selectedCategory), category) : ssrLooseEqual(unref(selectedCategory), category)) ? " selected" : ""}>${ssrInterpolate(category)}</option>`);
      });
      _push(`<!--]--></select></div></div></div>`);
      if (unref(loading)) {
        _push(`<div class="flex justify-center py-12"><div class="inline-block animate-spin rounded-full h-8 w-8 border-4 border-blue-500 border-t-transparent"></div></div>`);
      } else if (unref(error)) {
        _push(`<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">${ssrInterpolate(unref(error))}</div>`);
      } else if (unref(products).length === 0) {
        _push(`<div class="text-center py-12"><p class="text-xl text-gray-600">No products found matching your criteria.</p></div>`);
      } else {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
        ssrRenderList(unref(products), (product) => {
          _push(`<div class="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow"><div class="p-5"><div class="text-sm text-blue-600 font-semibold mb-1">${ssrInterpolate(product.category)}</div><h2 class="text-lg font-bold mb-2">${ssrInterpolate(product.name)}</h2><p class="text-gray-600 text-sm mb-4 line-clamp-2">${ssrInterpolate(product.description)}</p><div class="flex justify-between items-center"><span class="text-xl font-bold text-blue-700">${ssrInterpolate(formatPrice(product.price))}<span class="text-sm font-normal">/month</span></span>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/product/${product.id}`,
            class: "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` View Details `);
              } else {
                return [
                  createTextVNode(" View Details ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=products-K8dd97T7.mjs.map
