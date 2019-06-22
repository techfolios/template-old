var script = {
  name: 'VSpotlight',
  props: {
    background: {
      type: String,
      required: true
    },
    position: {
      type: String,
      default: 'center',
      required: false
    }
  },
  data: function data() {
    return {
      spotlight: null,
      spotlightSize: 'transparent 160px, rgba(0, 0, 0, 0.85) 200px)'
    };
  },
  mounted: function mounted() {
    var t = this;
    t.spotlight = document.querySelector('.spotlight');
    window.addEventListener('mousemove', function (e) {
      t.updateSpotlight(e);
    });
    window.addEventListener('mousedown', function (e) {
      if (e.which === 1) {
        t.spotlightSize = 'transparent 130px, rgba(0, 0, 0, 0.95) 150px)';
        t.updateSpotlight(e);
      }
    });
    window.addEventListener('mouseup', function (e) {
      t.spotlightSize = 'transparent 160px, rgba(0, 0, 0, 0.85) 200px)';
      t.updateSpotlight(e);
    });
  },

  methods: {
    updateSpotlight: function updateSpotlight(e) {
      var t = this;
      t.spotlight.style.backgroundImage = 'radial-gradient(circle at ' + e.pageX / window.innerWidth * 100 + '% ' + e.pageY / window.innerHeight * 100 + '%, ' + t.spotlightSize;
    }
  }
};

var __vue_script__ = script;

var __vue_render__ = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "bg-container",
    style: {
      background: "url(" + _vm.background + ") no-repeat " + _vm.position
    }
  }, [_c("div", { staticClass: "spotlight" })]);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

var __vue_template__ = typeof __vue_render__ !== 'undefined' ? { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ } : {};

var __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-4ca9553e_0", { source: "\n.bg-container[data-v-4ca9553e] {\n  background-size: cover;\n  height: 100vh;\n}\n.spotlight[data-v-4ca9553e] {\n  position: absolute;\n  height: 100vh;\n  width: 100vh;\n  background-image: radial-gradient(\n    circle,\n    transparent 160px,\n    rgba(0, 0, 0, 0.85) 200px\n  );\n}\n", map: undefined, media: undefined });
};

var __vue_scope_id__ = "data-v-4ca9553e";

var __vue_module_identifier__ = undefined;

var __vue_is_functional_template__ = false;

function __vue_normalize__(template, style, script$$1, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

  {
    component.__file = "/Users/vinayak/Development/Personal/v-spotlight/src/VSpotlight.vue";
  }

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  {
    var hook = void 0;
    if (style) {
      hook = function hook(context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook !== undefined) {
      if (component.functional) {
        var originalRender = component.render;
        component.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        var existing = component.beforeCreate;
        component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
  }

  return component;
}

function __vue_create_injector__() {
  var head = document.head || document.getElementsByTagName('head')[0];
  var styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
  var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  return function addStyle(id, css) {
    if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return;

    var group = isOldIE ? css.media || 'default' : id;
    var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

    if (!style.ids.includes(id)) {
      var code = css.source;
      var index = style.ids.length;

      style.ids.push(id);

      if (isOldIE) {
        style.element = style.element || document.querySelector('style[data-group=' + group + ']');
      }

      if (!style.element) {
        var el = style.element = document.createElement('style');
        el.type = 'text/css';

        if (css.media) el.setAttribute('media', css.media);
        if (isOldIE) {
          el.setAttribute('data-group', group);
          el.setAttribute('data-next-index', '0');
        }

        head.appendChild(el);
      }

      if (isOldIE) {
        index = parseInt(style.element.getAttribute('data-next-index'));
        style.element.setAttribute('data-next-index', index + 1);
      }

      if (style.element.styleSheet) {
        style.parts.push(code);
        style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
      } else {
        var textNode = document.createTextNode(code);
        var nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  };
}


var VSpotlight = __vue_normalize__(__vue_template__, __vue_inject_styles__, typeof __vue_script__ === 'undefined' ? {} : __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, typeof __vue_create_injector__ !== 'undefined' ? __vue_create_injector__ : function () {}, typeof __vue_create_injector_ssr__ !== 'undefined' ? __vue_create_injector_ssr__ : function () {});

export default VSpotlight;
