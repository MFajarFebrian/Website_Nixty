import { computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderSlot } from "vue/server-renderer";
import { d as useRuntimeConfig } from "../server.mjs";
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
const _sfc_main = {
  __name: "ProseH1",
  __ssrInlineRender: true,
  props: {
    id: { type: String, required: false }
  },
  setup(__props) {
    const props = __props;
    const { headings } = useRuntimeConfig().public.mdc;
    const generate = computed(() => {
      var _a;
      return props.id && (typeof (headings == null ? void 0 : headings.anchorLinks) === "boolean" && (headings == null ? void 0 : headings.anchorLinks) === true || typeof (headings == null ? void 0 : headings.anchorLinks) === "object" && ((_a = headings == null ? void 0 : headings.anchorLinks) == null ? void 0 : _a.h1));
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<h1${ssrRenderAttrs(mergeProps({
        id: props.id
      }, _attrs))}>`);
      if (unref(generate)) {
        _push(`<a${ssrRenderAttr("href", `#${props.id}`)}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</a>`);
      } else {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      }
      _push(`</h1>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH1.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=ProseH1-DBfB_RqH.js.map
