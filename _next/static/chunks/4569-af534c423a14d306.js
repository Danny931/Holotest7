"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4569],
  {
    22424: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return J;
        },
      });
      let {
          entries: r,
          setPrototypeOf: i,
          isFrozen: s,
          getPrototypeOf: l,
          getOwnPropertyDescriptor: o,
        } = Object,
        { freeze: a, seal: c, create: p } = Object,
        { apply: u, construct: h } = "undefined" != typeof Reflect && Reflect;
      a ||
        (a = function (e) {
          return e;
        }),
        c ||
          (c = function (e) {
            return e;
          }),
        u ||
          (u = function (e, t, n) {
            return e.apply(t, n);
          }),
        h ||
          (h = function (e, t) {
            return new e(...t);
          });
      let f = E(Array.prototype.forEach),
        d = E(Array.prototype.pop),
        g = E(Array.prototype.push),
        m = E(String.prototype.toLowerCase),
        k = E(String.prototype.toString),
        x = E(String.prototype.match),
        b = E(String.prototype.replace),
        y = E(String.prototype.indexOf),
        w = E(String.prototype.trim),
        T = E(Object.prototype.hasOwnProperty),
        _ = E(RegExp.prototype.test),
        A =
          ((Q = TypeError),
          function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return h(Q, t);
          });
      function E(e) {
        return function (t) {
          for (
            var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1;
            i < n;
            i++
          )
            r[i - 1] = arguments[i];
          return u(e, t, r);
        };
      }
      function R(e, t) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : m;
        i && i(e, null);
        let r = t.length;
        for (; r--; ) {
          let i = t[r];
          if ("string" == typeof i) {
            let e = n(i);
            e !== i && (s(t) || (t[r] = e), (i = e));
          }
          e[i] = !0;
        }
        return e;
      }
      function S(e) {
        let t = p(null);
        for (let [n, i] of r(e))
          T(e, n) &&
            (Array.isArray(i)
              ? (t[n] = (function (e) {
                  for (let t = 0; t < e.length; t++) T(e, t) || (e[t] = null);
                  return e;
                })(i))
              : i && "object" == typeof i && i.constructor === Object
              ? (t[n] = S(i))
              : (t[n] = i));
        return t;
      }
      function N(e, t) {
        for (; null !== e; ) {
          let n = o(e, t);
          if (n) {
            if (n.get) return E(n.get);
            if ("function" == typeof n.value) return E(n.value);
          }
          e = l(e);
        }
        return function () {
          return null;
        };
      }
      let I = a([
          "a",
          "abbr",
          "acronym",
          "address",
          "area",
          "article",
          "aside",
          "audio",
          "b",
          "bdi",
          "bdo",
          "big",
          "blink",
          "blockquote",
          "body",
          "br",
          "button",
          "canvas",
          "caption",
          "center",
          "cite",
          "code",
          "col",
          "colgroup",
          "content",
          "data",
          "datalist",
          "dd",
          "decorator",
          "del",
          "details",
          "dfn",
          "dialog",
          "dir",
          "div",
          "dl",
          "dt",
          "element",
          "em",
          "fieldset",
          "figcaption",
          "figure",
          "font",
          "footer",
          "form",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "head",
          "header",
          "hgroup",
          "hr",
          "html",
          "i",
          "img",
          "input",
          "ins",
          "kbd",
          "label",
          "legend",
          "li",
          "main",
          "map",
          "mark",
          "marquee",
          "menu",
          "menuitem",
          "meter",
          "nav",
          "nobr",
          "ol",
          "optgroup",
          "option",
          "output",
          "p",
          "picture",
          "pre",
          "progress",
          "q",
          "rp",
          "rt",
          "ruby",
          "s",
          "samp",
          "section",
          "select",
          "shadow",
          "small",
          "source",
          "spacer",
          "span",
          "strike",
          "strong",
          "style",
          "sub",
          "summary",
          "sup",
          "table",
          "tbody",
          "td",
          "template",
          "textarea",
          "tfoot",
          "th",
          "thead",
          "time",
          "tr",
          "track",
          "tt",
          "u",
          "ul",
          "var",
          "video",
          "wbr",
        ]),
        $ = a([
          "svg",
          "a",
          "altglyph",
          "altglyphdef",
          "altglyphitem",
          "animatecolor",
          "animatemotion",
          "animatetransform",
          "circle",
          "clippath",
          "defs",
          "desc",
          "ellipse",
          "filter",
          "font",
          "g",
          "glyph",
          "glyphref",
          "hkern",
          "image",
          "line",
          "lineargradient",
          "marker",
          "mask",
          "metadata",
          "mpath",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "radialgradient",
          "rect",
          "stop",
          "style",
          "switch",
          "symbol",
          "text",
          "textpath",
          "title",
          "tref",
          "tspan",
          "view",
          "vkern",
        ]),
        L = a([
          "feBlend",
          "feColorMatrix",
          "feComponentTransfer",
          "feComposite",
          "feConvolveMatrix",
          "feDiffuseLighting",
          "feDisplacementMap",
          "feDistantLight",
          "feDropShadow",
          "feFlood",
          "feFuncA",
          "feFuncB",
          "feFuncG",
          "feFuncR",
          "feGaussianBlur",
          "feImage",
          "feMerge",
          "feMergeNode",
          "feMorphology",
          "feOffset",
          "fePointLight",
          "feSpecularLighting",
          "feSpotLight",
          "feTile",
          "feTurbulence",
        ]),
        v = a([
          "animate",
          "color-profile",
          "cursor",
          "discard",
          "font-face",
          "font-face-format",
          "font-face-name",
          "font-face-src",
          "font-face-uri",
          "foreignobject",
          "hatch",
          "hatchpath",
          "mesh",
          "meshgradient",
          "meshpatch",
          "meshrow",
          "missing-glyph",
          "script",
          "set",
          "solidcolor",
          "unknown",
          "use",
        ]),
        z = a([
          "math",
          "menclose",
          "merror",
          "mfenced",
          "mfrac",
          "mglyph",
          "mi",
          "mlabeledtr",
          "mmultiscripts",
          "mn",
          "mo",
          "mover",
          "mpadded",
          "mphantom",
          "mroot",
          "mrow",
          "ms",
          "mspace",
          "msqrt",
          "mstyle",
          "msub",
          "msup",
          "msubsup",
          "mtable",
          "mtd",
          "mtext",
          "mtr",
          "munder",
          "munderover",
          "mprescripts",
        ]),
        C = a([
          "maction",
          "maligngroup",
          "malignmark",
          "mlongdiv",
          "mscarries",
          "mscarry",
          "msgroup",
          "mstack",
          "msline",
          "msrow",
          "semantics",
          "annotation",
          "annotation-xml",
          "mprescripts",
          "none",
        ]),
        O = a(["#text"]),
        D = a([
          "accept",
          "action",
          "align",
          "alt",
          "autocapitalize",
          "autocomplete",
          "autopictureinpicture",
          "autoplay",
          "background",
          "bgcolor",
          "border",
          "capture",
          "cellpadding",
          "cellspacing",
          "checked",
          "cite",
          "class",
          "clear",
          "color",
          "cols",
          "colspan",
          "controls",
          "controlslist",
          "coords",
          "crossorigin",
          "datetime",
          "decoding",
          "default",
          "dir",
          "disabled",
          "disablepictureinpicture",
          "disableremoteplayback",
          "download",
          "draggable",
          "enctype",
          "enterkeyhint",
          "face",
          "for",
          "headers",
          "height",
          "hidden",
          "high",
          "href",
          "hreflang",
          "id",
          "inputmode",
          "integrity",
          "ismap",
          "kind",
          "label",
          "lang",
          "list",
          "loading",
          "loop",
          "low",
          "max",
          "maxlength",
          "media",
          "method",
          "min",
          "minlength",
          "multiple",
          "muted",
          "name",
          "nonce",
          "noshade",
          "novalidate",
          "nowrap",
          "open",
          "optimum",
          "pattern",
          "placeholder",
          "playsinline",
          "popover",
          "popovertarget",
          "popovertargetaction",
          "poster",
          "preload",
          "pubdate",
          "radiogroup",
          "readonly",
          "rel",
          "required",
          "rev",
          "reversed",
          "role",
          "rows",
          "rowspan",
          "spellcheck",
          "scope",
          "selected",
          "shape",
          "size",
          "sizes",
          "span",
          "srclang",
          "start",
          "src",
          "srcset",
          "step",
          "style",
          "summary",
          "tabindex",
          "title",
          "translate",
          "type",
          "usemap",
          "valign",
          "value",
          "width",
          "wrap",
          "xmlns",
          "slot",
        ]),
        M = a([
          "accent-height",
          "accumulate",
          "additive",
          "alignment-baseline",
          "amplitude",
          "ascent",
          "attributename",
          "attributetype",
          "azimuth",
          "basefrequency",
          "baseline-shift",
          "begin",
          "bias",
          "by",
          "class",
          "clip",
          "clippathunits",
          "clip-path",
          "clip-rule",
          "color",
          "color-interpolation",
          "color-interpolation-filters",
          "color-profile",
          "color-rendering",
          "cx",
          "cy",
          "d",
          "dx",
          "dy",
          "diffuseconstant",
          "direction",
          "display",
          "divisor",
          "dur",
          "edgemode",
          "elevation",
          "end",
          "exponent",
          "fill",
          "fill-opacity",
          "fill-rule",
          "filter",
          "filterunits",
          "flood-color",
          "flood-opacity",
          "font-family",
          "font-size",
          "font-size-adjust",
          "font-stretch",
          "font-style",
          "font-variant",
          "font-weight",
          "fx",
          "fy",
          "g1",
          "g2",
          "glyph-name",
          "glyphref",
          "gradientunits",
          "gradienttransform",
          "height",
          "href",
          "id",
          "image-rendering",
          "in",
          "in2",
          "intercept",
          "k",
          "k1",
          "k2",
          "k3",
          "k4",
          "kerning",
          "keypoints",
          "keysplines",
          "keytimes",
          "lang",
          "lengthadjust",
          "letter-spacing",
          "kernelmatrix",
          "kernelunitlength",
          "lighting-color",
          "local",
          "marker-end",
          "marker-mid",
          "marker-start",
          "markerheight",
          "markerunits",
          "markerwidth",
          "maskcontentunits",
          "maskunits",
          "max",
          "mask",
          "media",
          "method",
          "mode",
          "min",
          "name",
          "numoctaves",
          "offset",
          "operator",
          "opacity",
          "order",
          "orient",
          "orientation",
          "origin",
          "overflow",
          "paint-order",
          "path",
          "pathlength",
          "patterncontentunits",
          "patterntransform",
          "patternunits",
          "points",
          "preservealpha",
          "preserveaspectratio",
          "primitiveunits",
          "r",
          "rx",
          "ry",
          "radius",
          "refx",
          "refy",
          "repeatcount",
          "repeatdur",
          "restart",
          "result",
          "rotate",
          "scale",
          "seed",
          "shape-rendering",
          "slope",
          "specularconstant",
          "specularexponent",
          "spreadmethod",
          "startoffset",
          "stddeviation",
          "stitchtiles",
          "stop-color",
          "stop-opacity",
          "stroke-dasharray",
          "stroke-dashoffset",
          "stroke-linecap",
          "stroke-linejoin",
          "stroke-miterlimit",
          "stroke-opacity",
          "stroke",
          "stroke-width",
          "style",
          "surfacescale",
          "systemlanguage",
          "tabindex",
          "tablevalues",
          "targetx",
          "targety",
          "transform",
          "transform-origin",
          "text-anchor",
          "text-decoration",
          "text-rendering",
          "textlength",
          "type",
          "u1",
          "u2",
          "unicode",
          "values",
          "viewbox",
          "visibility",
          "version",
          "vert-adv-y",
          "vert-origin-x",
          "vert-origin-y",
          "width",
          "word-spacing",
          "wrap",
          "writing-mode",
          "xchannelselector",
          "ychannelselector",
          "x",
          "x1",
          "x2",
          "xmlns",
          "y",
          "y1",
          "y2",
          "z",
          "zoomandpan",
        ]),
        P = a([
          "accent",
          "accentunder",
          "align",
          "bevelled",
          "close",
          "columnsalign",
          "columnlines",
          "columnspan",
          "denomalign",
          "depth",
          "dir",
          "display",
          "displaystyle",
          "encoding",
          "fence",
          "frame",
          "height",
          "href",
          "id",
          "largeop",
          "length",
          "linethickness",
          "lspace",
          "lquote",
          "mathbackground",
          "mathcolor",
          "mathsize",
          "mathvariant",
          "maxsize",
          "minsize",
          "movablelimits",
          "notation",
          "numalign",
          "open",
          "rowalign",
          "rowlines",
          "rowspacing",
          "rowspan",
          "rspace",
          "rquote",
          "scriptlevel",
          "scriptminsize",
          "scriptsizemultiplier",
          "selection",
          "separator",
          "separators",
          "stretchy",
          "subscriptshift",
          "supscriptshift",
          "symmetric",
          "voffset",
          "width",
          "xmlns",
        ]),
        U = a([
          "xlink:href",
          "xml:id",
          "xlink:title",
          "xml:space",
          "xmlns:xlink",
        ]),
        H = c(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
        F = c(/<%[\w\W]*|[\w\W]*%>/gm),
        B = c(/\${[\w\W]*}/gm),
        q = c(/^data-[\-\w.\u00B7-\uFFFF]/),
        Z = c(/^aria-[\-\w]+$/),
        W = c(
          /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
        ),
        G = c(/^(?:\w+script|data):/i),
        j = c(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
        Y = c(/^html$/i);
      var Q,
        X = Object.freeze({
          __proto__: null,
          ARIA_ATTR: Z,
          ATTR_WHITESPACE: j,
          CUSTOM_ELEMENT: c(/^[a-z][.\w]*(-[.\w]+)+$/i),
          DATA_ATTR: q,
          DOCTYPE_NAME: Y,
          ERB_EXPR: F,
          IS_ALLOWED_URI: W,
          IS_SCRIPT_OR_DATA: G,
          MUSTACHE_EXPR: H,
          TMPLIT_EXPR: B,
        });
      let K = {
          element: 1,
          text: 3,
          progressingInstruction: 7,
          comment: 8,
          document: 9,
        },
        V = function (e, t) {
          if ("object" != typeof e || "function" != typeof e.createPolicy)
            return null;
          let n = null,
            r = "data-tt-policy-suffix";
          t && t.hasAttribute(r) && (n = t.getAttribute(r));
          let i = "dompurify" + (n ? "#" + n : "");
          try {
            return e.createPolicy(i, {
              createHTML: (e) => e,
              createScriptURL: (e) => e,
            });
          } catch (e) {
            return (
              console.warn(
                "TrustedTypes policy " + i + " could not be created."
              ),
              null
            );
          }
        };
      var J = (function e() {
        let t,
          n =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "undefined" == typeof window
              ? null
              : window,
          i = (t) => e(t);
        if (
          ((i.version = "3.2.0"),
          (i.removed = []),
          !n || !n.document || n.document.nodeType !== K.document)
        )
          return (i.isSupported = !1), i;
        let { document: s } = n,
          l = s,
          o = l.currentScript,
          {
            DocumentFragment: c,
            HTMLTemplateElement: u,
            Node: h,
            Element: E,
            NodeFilter: H,
            NamedNodeMap: F = n.NamedNodeMap || n.MozNamedAttrMap,
            HTMLFormElement: B,
            DOMParser: q,
            trustedTypes: Z,
          } = n,
          G = E.prototype,
          j = N(G, "cloneNode"),
          Q = N(G, "remove"),
          J = N(G, "nextSibling"),
          ee = N(G, "childNodes"),
          et = N(G, "parentNode");
        if ("function" == typeof u) {
          let e = s.createElement("template");
          e.content && e.content.ownerDocument && (s = e.content.ownerDocument);
        }
        let en = "",
          {
            implementation: er,
            createNodeIterator: ei,
            createDocumentFragment: es,
            getElementsByTagName: el,
          } = s,
          { importNode: eo } = l,
          ea = {};
        i.isSupported =
          "function" == typeof r &&
          "function" == typeof et &&
          er &&
          void 0 !== er.createHTMLDocument;
        let {
            MUSTACHE_EXPR: ec,
            ERB_EXPR: ep,
            TMPLIT_EXPR: eu,
            DATA_ATTR: eh,
            ARIA_ATTR: ef,
            IS_SCRIPT_OR_DATA: ed,
            ATTR_WHITESPACE: eg,
            CUSTOM_ELEMENT: em,
          } = X,
          { IS_ALLOWED_URI: ek } = X,
          ex = null,
          eb = R({}, [...I, ...$, ...L, ...z, ...O]),
          ey = null,
          ew = R({}, [...D, ...M, ...P, ...U]),
          eT = Object.seal(
            p(null, {
              tagNameCheck: {
                writable: !0,
                configurable: !1,
                enumerable: !0,
                value: null,
              },
              attributeNameCheck: {
                writable: !0,
                configurable: !1,
                enumerable: !0,
                value: null,
              },
              allowCustomizedBuiltInElements: {
                writable: !0,
                configurable: !1,
                enumerable: !0,
                value: !1,
              },
            })
          ),
          e_ = null,
          eA = null,
          eE = !0,
          eR = !0,
          eS = !1,
          eN = !0,
          eI = !1,
          e$ = !0,
          eL = !1,
          ev = !1,
          ez = !1,
          eC = !1,
          eO = !1,
          eD = !1,
          eM = !0,
          eP = !1,
          eU = !0,
          eH = !1,
          eF = {},
          eB = null,
          eq = R({}, [
            "annotation-xml",
            "audio",
            "colgroup",
            "desc",
            "foreignobject",
            "head",
            "iframe",
            "math",
            "mi",
            "mn",
            "mo",
            "ms",
            "mtext",
            "noembed",
            "noframes",
            "noscript",
            "plaintext",
            "script",
            "style",
            "svg",
            "template",
            "thead",
            "title",
            "video",
            "xmp",
          ]),
          eZ = null,
          eW = R({}, ["audio", "video", "img", "source", "image", "track"]),
          eG = null,
          ej = R({}, [
            "alt",
            "class",
            "for",
            "id",
            "label",
            "name",
            "pattern",
            "placeholder",
            "role",
            "summary",
            "title",
            "value",
            "style",
            "xmlns",
          ]),
          eY = "http://www.w3.org/1998/Math/MathML",
          eQ = "http://www.w3.org/2000/svg",
          eX = "http://www.w3.org/1999/xhtml",
          eK = eX,
          eV = !1,
          eJ = null,
          e0 = R({}, [eY, eQ, eX], k),
          e1 = R({}, ["mi", "mo", "mn", "ms", "mtext"]),
          e3 = R({}, ["annotation-xml"]),
          e2 = R({}, ["title", "style", "font", "a", "script"]),
          e9 = null,
          e4 = ["application/xhtml+xml", "text/html"],
          e6 = null,
          e5 = null,
          e8 = s.createElement("form"),
          e7 = function (e) {
            return e instanceof RegExp || e instanceof Function;
          },
          te = function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            if (!e5 || e5 !== e) {
              if (
                ((e && "object" == typeof e) || (e = {}),
                (e = S(e)),
                (e6 =
                  "application/xhtml+xml" ===
                  (e9 =
                    -1 === e4.indexOf(e.PARSER_MEDIA_TYPE)
                      ? "text/html"
                      : e.PARSER_MEDIA_TYPE)
                    ? k
                    : m),
                (ex = T(e, "ALLOWED_TAGS") ? R({}, e.ALLOWED_TAGS, e6) : eb),
                (ey = T(e, "ALLOWED_ATTR") ? R({}, e.ALLOWED_ATTR, e6) : ew),
                (eJ = T(e, "ALLOWED_NAMESPACES")
                  ? R({}, e.ALLOWED_NAMESPACES, k)
                  : e0),
                (eG = T(e, "ADD_URI_SAFE_ATTR")
                  ? R(S(ej), e.ADD_URI_SAFE_ATTR, e6)
                  : ej),
                (eZ = T(e, "ADD_DATA_URI_TAGS")
                  ? R(S(eW), e.ADD_DATA_URI_TAGS, e6)
                  : eW),
                (eB = T(e, "FORBID_CONTENTS")
                  ? R({}, e.FORBID_CONTENTS, e6)
                  : eq),
                (e_ = T(e, "FORBID_TAGS") ? R({}, e.FORBID_TAGS, e6) : {}),
                (eA = T(e, "FORBID_ATTR") ? R({}, e.FORBID_ATTR, e6) : {}),
                (eF = !!T(e, "USE_PROFILES") && e.USE_PROFILES),
                (eE = !1 !== e.ALLOW_ARIA_ATTR),
                (eR = !1 !== e.ALLOW_DATA_ATTR),
                (eS = e.ALLOW_UNKNOWN_PROTOCOLS || !1),
                (eN = !1 !== e.ALLOW_SELF_CLOSE_IN_ATTR),
                (eI = e.SAFE_FOR_TEMPLATES || !1),
                (e$ = !1 !== e.SAFE_FOR_XML),
                (eL = e.WHOLE_DOCUMENT || !1),
                (eC = e.RETURN_DOM || !1),
                (eO = e.RETURN_DOM_FRAGMENT || !1),
                (eD = e.RETURN_TRUSTED_TYPE || !1),
                (ez = e.FORCE_BODY || !1),
                (eM = !1 !== e.SANITIZE_DOM),
                (eP = e.SANITIZE_NAMED_PROPS || !1),
                (eU = !1 !== e.KEEP_CONTENT),
                (eH = e.IN_PLACE || !1),
                (ek = e.ALLOWED_URI_REGEXP || W),
                (eK = e.NAMESPACE || eX),
                (e1 = e.MATHML_TEXT_INTEGRATION_POINTS || e1),
                (e3 = e.HTML_INTEGRATION_POINTS || e3),
                (eT = e.CUSTOM_ELEMENT_HANDLING || {}),
                e.CUSTOM_ELEMENT_HANDLING &&
                  e7(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
                  (eT.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
                e.CUSTOM_ELEMENT_HANDLING &&
                  e7(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
                  (eT.attributeNameCheck =
                    e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
                e.CUSTOM_ELEMENT_HANDLING &&
                  "boolean" ==
                    typeof e.CUSTOM_ELEMENT_HANDLING
                      .allowCustomizedBuiltInElements &&
                  (eT.allowCustomizedBuiltInElements =
                    e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
                eI && (eR = !1),
                eO && (eC = !0),
                eF &&
                  ((ex = R({}, O)),
                  (ey = []),
                  !0 === eF.html && (R(ex, I), R(ey, D)),
                  !0 === eF.svg && (R(ex, $), R(ey, M), R(ey, U)),
                  !0 === eF.svgFilters && (R(ex, L), R(ey, M), R(ey, U)),
                  !0 === eF.mathMl && (R(ex, z), R(ey, P), R(ey, U))),
                e.ADD_TAGS &&
                  (ex === eb && (ex = S(ex)), R(ex, e.ADD_TAGS, e6)),
                e.ADD_ATTR &&
                  (ey === ew && (ey = S(ey)), R(ey, e.ADD_ATTR, e6)),
                e.ADD_URI_SAFE_ATTR && R(eG, e.ADD_URI_SAFE_ATTR, e6),
                e.FORBID_CONTENTS &&
                  (eB === eq && (eB = S(eB)), R(eB, e.FORBID_CONTENTS, e6)),
                eU && (ex["#text"] = !0),
                eL && R(ex, ["html", "head", "body"]),
                ex.table && (R(ex, ["tbody"]), delete e_.tbody),
                e.TRUSTED_TYPES_POLICY)
              ) {
                if ("function" != typeof e.TRUSTED_TYPES_POLICY.createHTML)
                  throw A(
                    'TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.'
                  );
                if ("function" != typeof e.TRUSTED_TYPES_POLICY.createScriptURL)
                  throw A(
                    'TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.'
                  );
                en = (t = e.TRUSTED_TYPES_POLICY).createHTML("");
              } else
                void 0 === t && (t = V(Z, o)),
                  null !== t &&
                    "string" == typeof en &&
                    (en = t.createHTML(""));
              a && a(e), (e5 = e);
            }
          },
          tt = R({}, [...$, ...L, ...v]),
          tn = R({}, [...z, ...C]),
          tr = function (e) {
            let t = et(e);
            (t && t.tagName) || (t = { namespaceURI: eK, tagName: "template" });
            let n = m(e.tagName),
              r = m(t.tagName);
            return (
              !!eJ[e.namespaceURI] &&
              (e.namespaceURI === eQ
                ? t.namespaceURI === eX
                  ? "svg" === n
                  : t.namespaceURI === eY
                  ? "svg" === n && ("annotation-xml" === r || e1[r])
                  : !!tt[n]
                : e.namespaceURI === eY
                ? t.namespaceURI === eX
                  ? "math" === n
                  : t.namespaceURI === eQ
                  ? "math" === n && e3[r]
                  : !!tn[n]
                : e.namespaceURI === eX
                ? (t.namespaceURI !== eQ || !!e3[r]) &&
                  (t.namespaceURI !== eY || !!e1[r]) &&
                  !tn[n] &&
                  (e2[n] || !tt[n])
                : "application/xhtml+xml" === e9 && !!eJ[e.namespaceURI])
            );
          },
          ti = function (e) {
            g(i.removed, { element: e });
            try {
              et(e).removeChild(e);
            } catch (t) {
              Q(e);
            }
          },
          ts = function (e, t) {
            try {
              g(i.removed, { attribute: t.getAttributeNode(e), from: t });
            } catch (e) {
              g(i.removed, { attribute: null, from: t });
            }
            if ((t.removeAttribute(e), "is" === e && !ey[e])) {
              if (eC || eO)
                try {
                  ti(t);
                } catch (e) {}
              else
                try {
                  t.setAttribute(e, "");
                } catch (e) {}
            }
          },
          tl = function (e) {
            let n = null,
              r = null;
            if (ez) e = "<remove></remove>" + e;
            else {
              let t = x(e, /^[\r\n\t ]+/);
              r = t && t[0];
            }
            "application/xhtml+xml" === e9 &&
              eK === eX &&
              (e =
                '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
                e +
                "</body></html>");
            let i = t ? t.createHTML(e) : e;
            if (eK === eX)
              try {
                n = new q().parseFromString(i, e9);
              } catch (e) {}
            if (!n || !n.documentElement) {
              n = er.createDocument(eK, "template", null);
              try {
                n.documentElement.innerHTML = eV ? en : i;
              } catch (e) {}
            }
            let l = n.body || n.documentElement;
            return (e &&
              r &&
              l.insertBefore(s.createTextNode(r), l.childNodes[0] || null),
            eK === eX)
              ? el.call(n, eL ? "html" : "body")[0]
              : eL
              ? n.documentElement
              : l;
          },
          to = function (e) {
            return ei.call(
              e.ownerDocument || e,
              e,
              H.SHOW_ELEMENT |
                H.SHOW_COMMENT |
                H.SHOW_TEXT |
                H.SHOW_PROCESSING_INSTRUCTION |
                H.SHOW_CDATA_SECTION,
              null
            );
          },
          ta = function (e) {
            return (
              e instanceof B &&
              ("string" != typeof e.nodeName ||
                "string" != typeof e.textContent ||
                "function" != typeof e.removeChild ||
                !(e.attributes instanceof F) ||
                "function" != typeof e.removeAttribute ||
                "function" != typeof e.setAttribute ||
                "string" != typeof e.namespaceURI ||
                "function" != typeof e.insertBefore ||
                "function" != typeof e.hasChildNodes)
            );
          },
          tc = function (e) {
            return "function" == typeof h && e instanceof h;
          };
        function tp(e, t, n) {
          ea[e] &&
            f(ea[e], (e) => {
              e.call(i, t, n, e5);
            });
        }
        let tu = function (e) {
            let t = null;
            if ((tp("beforeSanitizeElements", e, null), ta(e)))
              return ti(e), !0;
            let n = e6(e.nodeName);
            if (
              (tp("uponSanitizeElement", e, { tagName: n, allowedTags: ex }),
              (e.hasChildNodes() &&
                !tc(e.firstElementChild) &&
                _(/<[/\w]/g, e.innerHTML) &&
                _(/<[/\w]/g, e.textContent)) ||
                e.nodeType === K.progressingInstruction ||
                (e$ && e.nodeType === K.comment && _(/<[/\w]/g, e.data)))
            )
              return ti(e), !0;
            if (!ex[n] || e_[n]) {
              if (
                !e_[n] &&
                tf(n) &&
                ((eT.tagNameCheck instanceof RegExp && _(eT.tagNameCheck, n)) ||
                  (eT.tagNameCheck instanceof Function && eT.tagNameCheck(n)))
              )
                return !1;
              if (eU && !eB[n]) {
                let t = et(e) || e.parentNode,
                  n = ee(e) || e.childNodes;
                if (n && t) {
                  let r = n.length;
                  for (let i = r - 1; i >= 0; --i) {
                    let r = j(n[i], !0);
                    (r.__removalCount = (e.__removalCount || 0) + 1),
                      t.insertBefore(r, J(e));
                  }
                }
              }
              return ti(e), !0;
            }
            return (e instanceof E && !tr(e)) ||
              (("noscript" === n || "noembed" === n || "noframes" === n) &&
                _(/<\/no(script|embed|frames)/i, e.innerHTML))
              ? (ti(e), !0)
              : (eI &&
                  e.nodeType === K.text &&
                  ((t = e.textContent),
                  f([ec, ep, eu], (e) => {
                    t = b(t, e, " ");
                  }),
                  e.textContent !== t &&
                    (g(i.removed, { element: e.cloneNode() }),
                    (e.textContent = t))),
                tp("afterSanitizeElements", e, null),
                !1);
          },
          th = function (e, t, n) {
            if (eM && ("id" === t || "name" === t) && (n in s || n in e8))
              return !1;
            if (eR && !eA[t] && _(eh, t));
            else if (eE && _(ef, t));
            else if (!ey[t] || eA[t]) {
              if (
                !(
                  (tf(e) &&
                    ((eT.tagNameCheck instanceof RegExp &&
                      _(eT.tagNameCheck, e)) ||
                      (eT.tagNameCheck instanceof Function &&
                        eT.tagNameCheck(e))) &&
                    ((eT.attributeNameCheck instanceof RegExp &&
                      _(eT.attributeNameCheck, t)) ||
                      (eT.attributeNameCheck instanceof Function &&
                        eT.attributeNameCheck(t)))) ||
                  ("is" === t &&
                    eT.allowCustomizedBuiltInElements &&
                    ((eT.tagNameCheck instanceof RegExp &&
                      _(eT.tagNameCheck, n)) ||
                      (eT.tagNameCheck instanceof Function &&
                        eT.tagNameCheck(n))))
                )
              )
                return !1;
            } else if (eG[t]);
            else if (_(ek, b(n, eg, "")));
            else if (
              ("src" === t || "xlink:href" === t || "href" === t) &&
              "script" !== e &&
              0 === y(n, "data:") &&
              eZ[e]
            );
            else if (eS && !_(ed, b(n, eg, "")));
            else if (n) return !1;
            return !0;
          },
          tf = function (e) {
            return "annotation-xml" !== e && x(e, em);
          },
          td = function (e) {
            tp("beforeSanitizeAttributes", e, null);
            let { attributes: n } = e;
            if (!n) return;
            let r = {
                attrName: "",
                attrValue: "",
                keepAttr: !0,
                allowedAttributes: ey,
                forceKeepAttr: void 0,
              },
              s = n.length;
            for (; s--; ) {
              let { name: l, namespaceURI: o, value: a } = n[s],
                c = e6(l),
                p = "value" === l ? a : w(a);
              if (
                ((r.attrName = c),
                (r.attrValue = p),
                (r.keepAttr = !0),
                (r.forceKeepAttr = void 0),
                tp("uponSanitizeAttribute", e, r),
                (p = r.attrValue),
                eP &&
                  ("id" === c || "name" === c) &&
                  (ts(l, e), (p = "user-content-" + p)),
                e$ && _(/((--!?|])>)|<\/(style|title)/i, p))
              ) {
                ts(l, e);
                continue;
              }
              if (r.forceKeepAttr || (ts(l, e), !r.keepAttr)) continue;
              if (!eN && _(/\/>/i, p)) {
                ts(l, e);
                continue;
              }
              eI &&
                f([ec, ep, eu], (e) => {
                  p = b(p, e, " ");
                });
              let u = e6(e.nodeName);
              if (th(u, c, p)) {
                if (
                  t &&
                  "object" == typeof Z &&
                  "function" == typeof Z.getAttributeType
                ) {
                  if (o);
                  else
                    switch (Z.getAttributeType(u, c)) {
                      case "TrustedHTML":
                        p = t.createHTML(p);
                        break;
                      case "TrustedScriptURL":
                        p = t.createScriptURL(p);
                    }
                }
                try {
                  o ? e.setAttributeNS(o, l, p) : e.setAttribute(l, p),
                    ta(e) ? ti(e) : d(i.removed);
                } catch (e) {}
              }
            }
            tp("afterSanitizeAttributes", e, null);
          },
          tg = function e(t) {
            let n = null,
              r = to(t);
            for (tp("beforeSanitizeShadowDOM", t, null); (n = r.nextNode()); )
              tp("uponSanitizeShadowNode", n, null),
                tu(n) || (n.content instanceof c && e(n.content), td(n));
            tp("afterSanitizeShadowDOM", t, null);
          };
        return (
          (i.sanitize = function (e) {
            let n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              r = null,
              s = null,
              o = null,
              a = null;
            if (((eV = !e) && (e = "<!-->"), "string" != typeof e && !tc(e))) {
              if ("function" == typeof e.toString) {
                if ("string" != typeof (e = e.toString()))
                  throw A("dirty is not a string, aborting");
              } else throw A("toString is not a function");
            }
            if (!i.isSupported) return e;
            if (
              (ev || te(n),
              (i.removed = []),
              "string" == typeof e && (eH = !1),
              eH)
            ) {
              if (e.nodeName) {
                let t = e6(e.nodeName);
                if (!ex[t] || e_[t])
                  throw A(
                    "root node is forbidden and cannot be sanitized in-place"
                  );
              }
            } else if (e instanceof h)
              (s = (r = tl("<!---->")).ownerDocument.importNode(e, !0))
                .nodeType === K.element && "BODY" === s.nodeName
                ? (r = s)
                : "HTML" === s.nodeName
                ? (r = s)
                : r.appendChild(s);
            else {
              if (!eC && !eI && !eL && -1 === e.indexOf("<"))
                return t && eD ? t.createHTML(e) : e;
              if (!(r = tl(e))) return eC ? null : eD ? en : "";
            }
            r && ez && ti(r.firstChild);
            let p = to(eH ? e : r);
            for (; (o = p.nextNode()); )
              tu(o) || (o.content instanceof c && tg(o.content), td(o));
            if (eH) return e;
            if (eC) {
              if (eO)
                for (a = es.call(r.ownerDocument); r.firstChild; )
                  a.appendChild(r.firstChild);
              else a = r;
              return (
                (ey.shadowroot || ey.shadowrootmode) && (a = eo.call(l, a, !0)),
                a
              );
            }
            let u = eL ? r.outerHTML : r.innerHTML;
            return (
              eL &&
                ex["!doctype"] &&
                r.ownerDocument &&
                r.ownerDocument.doctype &&
                r.ownerDocument.doctype.name &&
                _(Y, r.ownerDocument.doctype.name) &&
                (u = "<!DOCTYPE " + r.ownerDocument.doctype.name + ">\n" + u),
              eI &&
                f([ec, ep, eu], (e) => {
                  u = b(u, e, " ");
                }),
              t && eD ? t.createHTML(u) : u
            );
          }),
          (i.setConfig = function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            te(e), (ev = !0);
          }),
          (i.clearConfig = function () {
            (e5 = null), (ev = !1);
          }),
          (i.isValidAttribute = function (e, t, n) {
            return e5 || te({}), th(e6(e), e6(t), n);
          }),
          (i.addHook = function (e, t) {
            "function" == typeof t && ((ea[e] = ea[e] || []), g(ea[e], t));
          }),
          (i.removeHook = function (e) {
            if (ea[e]) return d(ea[e]);
          }),
          (i.removeHooks = function (e) {
            ea[e] && (ea[e] = []);
          }),
          (i.removeAllHooks = function () {
            ea = {};
          }),
          i
        );
      })();
    },
    87441: function (e, t, n) {
      function r() {
        return {
          async: !1,
          breaks: !1,
          extensions: null,
          gfm: !0,
          hooks: null,
          pedantic: !1,
          renderer: null,
          silent: !1,
          tokenizer: null,
          walkTokens: null,
        };
      }
      n.d(t, {
        TU: function () {
          return eu;
        },
      });
      let i = r(),
        s = /[&<>"']/,
        l = RegExp(s.source, "g"),
        o = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
        a = RegExp(o.source, "g"),
        c = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        },
        p = (e) => c[e];
      function u(e, t) {
        if (t) {
          if (s.test(e)) return e.replace(l, p);
        } else if (o.test(e)) return e.replace(a, p);
        return e;
      }
      let h = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,
        f = /(^|[^\[])\^/g;
      function d(e, t) {
        let n = "string" == typeof e ? e : e.source;
        t = t || "";
        let r = {
          replace: (e, t) => {
            let i = "string" == typeof t ? t : t.source;
            return (i = i.replace(f, "$1")), (n = n.replace(e, i)), r;
          },
          getRegex: () => new RegExp(n, t),
        };
        return r;
      }
      function g(e) {
        try {
          e = encodeURI(e).replace(/%25/g, "%");
        } catch {
          return null;
        }
        return e;
      }
      let m = { exec: () => null };
      function k(e, t) {
        let n = e
            .replace(/\|/g, (e, t, n) => {
              let r = !1,
                i = t;
              for (; --i >= 0 && "\\" === n[i]; ) r = !r;
              return r ? "|" : " |";
            })
            .split(/ \|/),
          r = 0;
        if (
          (n[0].trim() || n.shift(),
          n.length > 0 && !n[n.length - 1].trim() && n.pop(),
          t)
        ) {
          if (n.length > t) n.splice(t);
          else for (; n.length < t; ) n.push("");
        }
        for (; r < n.length; r++) n[r] = n[r].trim().replace(/\\\|/g, "|");
        return n;
      }
      function x(e, t, n) {
        let r = e.length;
        if (0 === r) return "";
        let i = 0;
        for (; i < r; ) {
          let s = e.charAt(r - i - 1);
          if (s !== t || n) {
            if (s !== t && n) i++;
            else break;
          } else i++;
        }
        return e.slice(0, r - i);
      }
      function b(e, t, n, r) {
        let i = t.href,
          s = t.title ? u(t.title) : null,
          l = e[1].replace(/\\([\[\]])/g, "$1");
        if ("!" !== e[0].charAt(0)) {
          r.state.inLink = !0;
          let e = {
            type: "link",
            raw: n,
            href: i,
            title: s,
            text: l,
            tokens: r.inlineTokens(l),
          };
          return (r.state.inLink = !1), e;
        }
        return { type: "image", raw: n, href: i, title: s, text: u(l) };
      }
      class y {
        options;
        rules;
        lexer;
        constructor(e) {
          this.options = e || i;
        }
        space(e) {
          let t = this.rules.block.newline.exec(e);
          if (t && t[0].length > 0) return { type: "space", raw: t[0] };
        }
        code(e) {
          let t = this.rules.block.code.exec(e);
          if (t) {
            let e = t[0].replace(/^ {1,4}/gm, "");
            return {
              type: "code",
              raw: t[0],
              codeBlockStyle: "indented",
              text: this.options.pedantic ? e : x(e, "\n"),
            };
          }
        }
        fences(e) {
          let t = this.rules.block.fences.exec(e);
          if (t) {
            let e = t[0],
              n = (function (e, t) {
                let n = e.match(/^(\s+)(?:```)/);
                if (null === n) return t;
                let r = n[1];
                return t
                  .split("\n")
                  .map((e) => {
                    let t = e.match(/^\s+/);
                    if (null === t) return e;
                    let [n] = t;
                    return n.length >= r.length ? e.slice(r.length) : e;
                  })
                  .join("\n");
              })(e, t[3] || "");
            return {
              type: "code",
              raw: e,
              lang: t[2]
                ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1")
                : t[2],
              text: n,
            };
          }
        }
        heading(e) {
          let t = this.rules.block.heading.exec(e);
          if (t) {
            let e = t[2].trim();
            if (/#$/.test(e)) {
              let t = x(e, "#");
              this.options.pedantic
                ? (e = t.trim())
                : (!t || / $/.test(t)) && (e = t.trim());
            }
            return {
              type: "heading",
              raw: t[0],
              depth: t[1].length,
              text: e,
              tokens: this.lexer.inline(e),
            };
          }
        }
        hr(e) {
          let t = this.rules.block.hr.exec(e);
          if (t) return { type: "hr", raw: x(t[0], "\n") };
        }
        blockquote(e) {
          let t = this.rules.block.blockquote.exec(e);
          if (t) {
            let e = x(t[0], "\n").split("\n"),
              n = "",
              r = "",
              i = [];
            for (; e.length > 0; ) {
              let t,
                s = !1,
                l = [];
              for (t = 0; t < e.length; t++)
                if (/^ {0,3}>/.test(e[t])) l.push(e[t]), (s = !0);
                else if (s) break;
                else l.push(e[t]);
              e = e.slice(t);
              let o = l.join("\n"),
                a = o
                  .replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g, "\n    $1")
                  .replace(/^ {0,3}>[ \t]?/gm, "");
              (n = n
                ? `${n}
${o}`
                : o),
                (r = r
                  ? `${r}
${a}`
                  : a);
              let c = this.lexer.state.top;
              if (
                ((this.lexer.state.top = !0),
                this.lexer.blockTokens(a, i, !0),
                (this.lexer.state.top = c),
                0 === e.length)
              )
                break;
              let p = i[i.length - 1];
              if (p?.type === "code") break;
              if (p?.type === "blockquote") {
                let t = p.raw + "\n" + e.join("\n"),
                  s = this.blockquote(t);
                (i[i.length - 1] = s),
                  (n = n.substring(0, n.length - p.raw.length) + s.raw),
                  (r = r.substring(0, r.length - p.text.length) + s.text);
                break;
              }
              if (p?.type === "list") {
                let t = p.raw + "\n" + e.join("\n"),
                  s = this.list(t);
                (i[i.length - 1] = s),
                  (n = n.substring(0, n.length - p.raw.length) + s.raw),
                  (r = r.substring(0, r.length - p.raw.length) + s.raw),
                  (e = t.substring(i[i.length - 1].raw.length).split("\n"));
                continue;
              }
            }
            return { type: "blockquote", raw: n, tokens: i, text: r };
          }
        }
        list(e) {
          let t = this.rules.block.list.exec(e);
          if (t) {
            let n = t[1].trim(),
              r = n.length > 1,
              i = {
                type: "list",
                raw: "",
                ordered: r,
                start: r ? +n.slice(0, -1) : "",
                loose: !1,
                items: [],
              };
            (n = r ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`),
              this.options.pedantic && (n = r ? n : "[*+-]");
            let s = RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`),
              l = !1;
            for (; e; ) {
              let n,
                r = !1,
                o = "",
                a = "";
              if (!(t = s.exec(e)) || this.rules.block.hr.test(e)) break;
              (o = t[0]), (e = e.substring(o.length));
              let c = t[2]
                  .split("\n", 1)[0]
                  .replace(/^\t+/, (e) => " ".repeat(3 * e.length)),
                p = e.split("\n", 1)[0],
                u = !c.trim(),
                h = 0;
              if (
                (this.options.pedantic
                  ? ((h = 2), (a = c.trimStart()))
                  : u
                  ? (h = t[1].length + 1)
                  : ((h = (h = t[2].search(/[^ ]/)) > 4 ? 1 : h),
                    (a = c.slice(h)),
                    (h += t[1].length)),
                u &&
                  /^ *$/.test(p) &&
                  ((o += p + "\n"), (e = e.substring(p.length + 1)), (r = !0)),
                !r)
              ) {
                let t = RegExp(
                    `^ {0,${Math.min(
                      3,
                      h - 1
                    )}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`
                  ),
                  n = RegExp(
                    `^ {0,${Math.min(
                      3,
                      h - 1
                    )}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`
                  ),
                  r = RegExp(`^ {0,${Math.min(3, h - 1)}}(?:\`\`\`|~~~)`),
                  i = RegExp(`^ {0,${Math.min(3, h - 1)}}#`);
                for (; e; ) {
                  let s = e.split("\n", 1)[0];
                  if (
                    ((p = s),
                    this.options.pedantic &&
                      (p = p.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")),
                    r.test(p) || i.test(p) || t.test(p) || n.test(e))
                  )
                    break;
                  if (p.search(/[^ ]/) >= h || !p.trim())
                    a += "\n" + p.slice(h);
                  else {
                    if (
                      u ||
                      c.search(/[^ ]/) >= 4 ||
                      r.test(c) ||
                      i.test(c) ||
                      n.test(c)
                    )
                      break;
                    a += "\n" + p;
                  }
                  u || p.trim() || (u = !0),
                    (o += s + "\n"),
                    (e = e.substring(s.length + 1)),
                    (c = p.slice(h));
                }
              }
              !i.loose &&
                (l ? (i.loose = !0) : /\n *\n *$/.test(o) && (l = !0));
              let f = null;
              this.options.gfm &&
                (f = /^\[[ xX]\] /.exec(a)) &&
                ((n = "[ ] " !== f[0]), (a = a.replace(/^\[[ xX]\] +/, ""))),
                i.items.push({
                  type: "list_item",
                  raw: o,
                  task: !!f,
                  checked: n,
                  loose: !1,
                  text: a,
                  tokens: [],
                }),
                (i.raw += o);
            }
            (i.items[i.items.length - 1].raw =
              i.items[i.items.length - 1].raw.trimEnd()),
              (i.items[i.items.length - 1].text =
                i.items[i.items.length - 1].text.trimEnd()),
              (i.raw = i.raw.trimEnd());
            for (let e = 0; e < i.items.length; e++)
              if (
                ((this.lexer.state.top = !1),
                (i.items[e].tokens = this.lexer.blockTokens(
                  i.items[e].text,
                  []
                )),
                !i.loose)
              ) {
                let t = i.items[e].tokens.filter((e) => "space" === e.type),
                  n = t.length > 0 && t.some((e) => /\n.*\n/.test(e.raw));
                i.loose = n;
              }
            if (i.loose)
              for (let e = 0; e < i.items.length; e++) i.items[e].loose = !0;
            return i;
          }
        }
        html(e) {
          let t = this.rules.block.html.exec(e);
          if (t)
            return {
              type: "html",
              block: !0,
              raw: t[0],
              pre: "pre" === t[1] || "script" === t[1] || "style" === t[1],
              text: t[0],
            };
        }
        def(e) {
          let t = this.rules.block.def.exec(e);
          if (t) {
            let e = t[1].toLowerCase().replace(/\s+/g, " "),
              n = t[2]
                ? t[2]
                    .replace(/^<(.*)>$/, "$1")
                    .replace(this.rules.inline.anyPunctuation, "$1")
                : "",
              r = t[3]
                ? t[3]
                    .substring(1, t[3].length - 1)
                    .replace(this.rules.inline.anyPunctuation, "$1")
                : t[3];
            return { type: "def", tag: e, raw: t[0], href: n, title: r };
          }
        }
        table(e) {
          let t = this.rules.block.table.exec(e);
          if (!t || !/[:|]/.test(t[2])) return;
          let n = k(t[1]),
            r = t[2].replace(/^\||\| *$/g, "").split("|"),
            i =
              t[3] && t[3].trim()
                ? t[3].replace(/\n[ \t]*$/, "").split("\n")
                : [],
            s = { type: "table", raw: t[0], header: [], align: [], rows: [] };
          if (n.length === r.length) {
            for (let e of r)
              /^ *-+: *$/.test(e)
                ? s.align.push("right")
                : /^ *:-+: *$/.test(e)
                ? s.align.push("center")
                : /^ *:-+ *$/.test(e)
                ? s.align.push("left")
                : s.align.push(null);
            for (let e = 0; e < n.length; e++)
              s.header.push({
                text: n[e],
                tokens: this.lexer.inline(n[e]),
                header: !0,
                align: s.align[e],
              });
            for (let e of i)
              s.rows.push(
                k(e, s.header.length).map((e, t) => ({
                  text: e,
                  tokens: this.lexer.inline(e),
                  header: !1,
                  align: s.align[t],
                }))
              );
            return s;
          }
        }
        lheading(e) {
          let t = this.rules.block.lheading.exec(e);
          if (t)
            return {
              type: "heading",
              raw: t[0],
              depth: "=" === t[2].charAt(0) ? 1 : 2,
              text: t[1],
              tokens: this.lexer.inline(t[1]),
            };
        }
        paragraph(e) {
          let t = this.rules.block.paragraph.exec(e);
          if (t) {
            let e =
              "\n" === t[1].charAt(t[1].length - 1) ? t[1].slice(0, -1) : t[1];
            return {
              type: "paragraph",
              raw: t[0],
              text: e,
              tokens: this.lexer.inline(e),
            };
          }
        }
        text(e) {
          let t = this.rules.block.text.exec(e);
          if (t)
            return {
              type: "text",
              raw: t[0],
              text: t[0],
              tokens: this.lexer.inline(t[0]),
            };
        }
        escape(e) {
          let t = this.rules.inline.escape.exec(e);
          if (t) return { type: "escape", raw: t[0], text: u(t[1]) };
        }
        tag(e) {
          let t = this.rules.inline.tag.exec(e);
          if (t)
            return (
              !this.lexer.state.inLink && /^<a /i.test(t[0])
                ? (this.lexer.state.inLink = !0)
                : this.lexer.state.inLink &&
                  /^<\/a>/i.test(t[0]) &&
                  (this.lexer.state.inLink = !1),
              !this.lexer.state.inRawBlock &&
              /^<(pre|code|kbd|script)(\s|>)/i.test(t[0])
                ? (this.lexer.state.inRawBlock = !0)
                : this.lexer.state.inRawBlock &&
                  /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) &&
                  (this.lexer.state.inRawBlock = !1),
              {
                type: "html",
                raw: t[0],
                inLink: this.lexer.state.inLink,
                inRawBlock: this.lexer.state.inRawBlock,
                block: !1,
                text: t[0],
              }
            );
        }
        link(e) {
          let t = this.rules.inline.link.exec(e);
          if (t) {
            let e = t[2].trim();
            if (!this.options.pedantic && /^</.test(e)) {
              if (!/>$/.test(e)) return;
              let t = x(e.slice(0, -1), "\\");
              if ((e.length - t.length) % 2 == 0) return;
            } else {
              let e = (function (e, t) {
                if (-1 === e.indexOf(")")) return -1;
                let n = 0;
                for (let t = 0; t < e.length; t++)
                  if ("\\" === e[t]) t++;
                  else if ("(" === e[t]) n++;
                  else if (")" === e[t] && --n < 0) return t;
                return -1;
              })(t[2], "()");
              if (e > -1) {
                let n = (0 === t[0].indexOf("!") ? 5 : 4) + t[1].length + e;
                (t[2] = t[2].substring(0, e)),
                  (t[0] = t[0].substring(0, n).trim()),
                  (t[3] = "");
              }
            }
            let n = t[2],
              r = "";
            if (this.options.pedantic) {
              let e = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n);
              e && ((n = e[1]), (r = e[3]));
            } else r = t[3] ? t[3].slice(1, -1) : "";
            return (
              (n = n.trim()),
              /^</.test(n) &&
                (n =
                  this.options.pedantic && !/>$/.test(e)
                    ? n.slice(1)
                    : n.slice(1, -1)),
              b(
                t,
                {
                  href: n
                    ? n.replace(this.rules.inline.anyPunctuation, "$1")
                    : n,
                  title: r
                    ? r.replace(this.rules.inline.anyPunctuation, "$1")
                    : r,
                },
                t[0],
                this.lexer
              )
            );
          }
        }
        reflink(e, t) {
          let n;
          if (
            (n = this.rules.inline.reflink.exec(e)) ||
            (n = this.rules.inline.nolink.exec(e))
          ) {
            let e = t[(n[2] || n[1]).replace(/\s+/g, " ").toLowerCase()];
            if (!e) {
              let e = n[0].charAt(0);
              return { type: "text", raw: e, text: e };
            }
            return b(n, e, n[0], this.lexer);
          }
        }
        emStrong(e, t, n = "") {
          let r = this.rules.inline.emStrongLDelim.exec(e);
          if (
            !(!r || (r[3] && n.match(/[\p{L}\p{N}]/u))) &&
            (!(r[1] || r[2]) || !n || this.rules.inline.punctuation.exec(n))
          ) {
            let n = [...r[0]].length - 1,
              i,
              s,
              l = n,
              o = 0,
              a =
                "*" === r[0][0]
                  ? this.rules.inline.emStrongRDelimAst
                  : this.rules.inline.emStrongRDelimUnd;
            for (
              a.lastIndex = 0, t = t.slice(-1 * e.length + n);
              null != (r = a.exec(t));

            ) {
              if (!(i = r[1] || r[2] || r[3] || r[4] || r[5] || r[6])) continue;
              if (((s = [...i].length), r[3] || r[4])) {
                l += s;
                continue;
              }
              if ((r[5] || r[6]) && n % 3 && !((n + s) % 3)) {
                o += s;
                continue;
              }
              if ((l -= s) > 0) continue;
              s = Math.min(s, s + l + o);
              let t = [...r[0]][0].length,
                a = e.slice(0, n + r.index + t + s);
              if (Math.min(n, s) % 2) {
                let e = a.slice(1, -1);
                return {
                  type: "em",
                  raw: a,
                  text: e,
                  tokens: this.lexer.inlineTokens(e),
                };
              }
              let c = a.slice(2, -2);
              return {
                type: "strong",
                raw: a,
                text: c,
                tokens: this.lexer.inlineTokens(c),
              };
            }
          }
        }
        codespan(e) {
          let t = this.rules.inline.code.exec(e);
          if (t) {
            let e = t[2].replace(/\n/g, " "),
              n = /[^ ]/.test(e),
              r = /^ /.test(e) && / $/.test(e);
            return (
              n && r && (e = e.substring(1, e.length - 1)),
              (e = u(e, !0)),
              { type: "codespan", raw: t[0], text: e }
            );
          }
        }
        br(e) {
          let t = this.rules.inline.br.exec(e);
          if (t) return { type: "br", raw: t[0] };
        }
        del(e) {
          let t = this.rules.inline.del.exec(e);
          if (t)
            return {
              type: "del",
              raw: t[0],
              text: t[2],
              tokens: this.lexer.inlineTokens(t[2]),
            };
        }
        autolink(e) {
          let t = this.rules.inline.autolink.exec(e);
          if (t) {
            let e, n;
            return (
              (n = "@" === t[2] ? "mailto:" + (e = u(t[1])) : (e = u(t[1]))),
              {
                type: "link",
                raw: t[0],
                text: e,
                href: n,
                tokens: [{ type: "text", raw: e, text: e }],
              }
            );
          }
        }
        url(e) {
          let t;
          if ((t = this.rules.inline.url.exec(e))) {
            let e, n;
            if ("@" === t[2]) n = "mailto:" + (e = u(t[0]));
            else {
              let r;
              do
                (r = t[0]),
                  (t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? "");
              while (r !== t[0]);
              (e = u(t[0])), (n = "www." === t[1] ? "http://" + t[0] : t[0]);
            }
            return {
              type: "link",
              raw: t[0],
              text: e,
              href: n,
              tokens: [{ type: "text", raw: e, text: e }],
            };
          }
        }
        inlineText(e) {
          let t = this.rules.inline.text.exec(e);
          if (t) {
            let e;
            return (
              (e = this.lexer.state.inRawBlock ? t[0] : u(t[0])),
              { type: "text", raw: t[0], text: e }
            );
          }
        }
      }
      let w =
          /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
        T = /(?:[*+-]|\d{1,9}[.)])/,
        _ = d(
          /^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/
        )
          .replace(/bull/g, T)
          .replace(/blockCode/g, / {4}/)
          .replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/)
          .replace(/blockquote/g, / {0,3}>/)
          .replace(/heading/g, / {0,3}#{1,6}/)
          .replace(/html/g, / {0,3}<[^\n>]+>\n/)
          .getRegex(),
        A =
          /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
        E = /(?!\s*\])(?:\\.|[^\[\]\\])+/,
        R = d(
          /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/
        )
          .replace("label", E)
          .replace(
            "title",
            /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/
          )
          .getRegex(),
        S = d(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/)
          .replace(/bull/g, T)
          .getRegex(),
        N =
          "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",
        I = /<!--(?:-?>|[\s\S]*?(?:-->|$))/,
        $ = d(
          "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
          "i"
        )
          .replace("comment", I)
          .replace("tag", N)
          .replace(
            "attribute",
            / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/
          )
          .getRegex(),
        L = d(A)
          .replace("hr", w)
          .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
          .replace("|lheading", "")
          .replace("|table", "")
          .replace("blockquote", " {0,3}>")
          .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
          .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
          .replace(
            "html",
            "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
          )
          .replace("tag", N)
          .getRegex(),
        v = {
          blockquote: d(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/)
            .replace("paragraph", L)
            .getRegex(),
          code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
          def: R,
          fences:
            /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
          heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
          hr: w,
          html: $,
          lheading: _,
          list: S,
          newline: /^(?: *(?:\n|$))+/,
          paragraph: L,
          table: m,
          text: /^[^\n]+/,
        },
        z = d(
          "^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
        )
          .replace("hr", w)
          .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
          .replace("blockquote", " {0,3}>")
          .replace("code", " {4}[^\\n]")
          .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
          .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
          .replace(
            "html",
            "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
          )
          .replace("tag", N)
          .getRegex(),
        C = {
          ...v,
          table: z,
          paragraph: d(A)
            .replace("hr", w)
            .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
            .replace("|lheading", "")
            .replace("table", z)
            .replace("blockquote", " {0,3}>")
            .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
            .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
            .replace(
              "html",
              "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
            )
            .replace("tag", N)
            .getRegex(),
        },
        O = {
          ...v,
          html: d(
            "^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))"
          )
            .replace("comment", I)
            .replace(
              /tag/g,
              "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b"
            )
            .getRegex(),
          def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
          heading: /^(#{1,6})(.*)(?:\n+|$)/,
          fences: m,
          lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
          paragraph: d(A)
            .replace("hr", w)
            .replace("heading", " *#{1,6} *[^\n]")
            .replace("lheading", _)
            .replace("|table", "")
            .replace("blockquote", " {0,3}>")
            .replace("|fences", "")
            .replace("|list", "")
            .replace("|html", "")
            .replace("|tag", "")
            .getRegex(),
        },
        D = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
        M = /^( {2,}|\\)\n(?!\s*$)/,
        P = "\\p{P}\\p{S}",
        U = d(/^((?![*_])[\spunctuation])/, "u")
          .replace(/punctuation/g, P)
          .getRegex(),
        H = d(
          /^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,
          "u"
        )
          .replace(/punct/g, P)
          .getRegex(),
        F = d(
          "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])",
          "gu"
        )
          .replace(/punct/g, P)
          .getRegex(),
        B = d(
          "^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])",
          "gu"
        )
          .replace(/punct/g, P)
          .getRegex(),
        q = d(/\\([punct])/, "gu")
          .replace(/punct/g, P)
          .getRegex(),
        Z = d(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/)
          .replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/)
          .replace(
            "email",
            /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/
          )
          .getRegex(),
        W = d(I).replace("(?:-->|$)", "-->").getRegex(),
        G = d(
          "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>"
        )
          .replace("comment", W)
          .replace(
            "attribute",
            /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/
          )
          .getRegex(),
        j = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,
        Y = d(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/)
          .replace("label", j)
          .replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/)
          .replace(
            "title",
            /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/
          )
          .getRegex(),
        Q = d(/^!?\[(label)\]\[(ref)\]/)
          .replace("label", j)
          .replace("ref", E)
          .getRegex(),
        X = d(/^!?\[(ref)\](?:\[\])?/)
          .replace("ref", E)
          .getRegex(),
        K = d("reflink|nolink(?!\\()", "g")
          .replace("reflink", Q)
          .replace("nolink", X)
          .getRegex(),
        V = {
          _backpedal: m,
          anyPunctuation: q,
          autolink: Z,
          blockSkip: /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,
          br: M,
          code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
          del: m,
          emStrongLDelim: H,
          emStrongRDelimAst: F,
          emStrongRDelimUnd: B,
          escape: D,
          link: Y,
          nolink: X,
          punctuation: U,
          reflink: Q,
          reflinkSearch: K,
          tag: G,
          text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
          url: m,
        },
        J = {
          ...V,
          link: d(/^!?\[(label)\]\((.*?)\)/)
            .replace("label", j)
            .getRegex(),
          reflink: d(/^!?\[(label)\]\s*\[([^\]]*)\]/)
            .replace("label", j)
            .getRegex(),
        },
        ee = {
          ...V,
          escape: d(D).replace("])", "~|])").getRegex(),
          url: d(
            /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
            "i"
          )
            .replace(
              "email",
              /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/
            )
            .getRegex(),
          _backpedal:
            /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
          del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
          text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
        },
        et = {
          ...ee,
          br: d(M).replace("{2,}", "*").getRegex(),
          text: d(ee.text)
            .replace("\\b_", "\\b_| {2,}\\n")
            .replace(/\{2,\}/g, "*")
            .getRegex(),
        },
        en = { normal: v, gfm: C, pedantic: O },
        er = { normal: V, gfm: ee, breaks: et, pedantic: J };
      class ei {
        tokens;
        options;
        state;
        tokenizer;
        inlineQueue;
        constructor(e) {
          (this.tokens = []),
            (this.tokens.links = Object.create(null)),
            (this.options = e || i),
            (this.options.tokenizer = this.options.tokenizer || new y()),
            (this.tokenizer = this.options.tokenizer),
            (this.tokenizer.options = this.options),
            (this.tokenizer.lexer = this),
            (this.inlineQueue = []),
            (this.state = { inLink: !1, inRawBlock: !1, top: !0 });
          let t = { block: en.normal, inline: er.normal };
          this.options.pedantic
            ? ((t.block = en.pedantic), (t.inline = er.pedantic))
            : this.options.gfm &&
              ((t.block = en.gfm),
              this.options.breaks
                ? (t.inline = er.breaks)
                : (t.inline = er.gfm)),
            (this.tokenizer.rules = t);
        }
        static get rules() {
          return { block: en, inline: er };
        }
        static lex(e, t) {
          return new ei(t).lex(e);
        }
        static lexInline(e, t) {
          return new ei(t).inlineTokens(e);
        }
        lex(e) {
          (e = e.replace(/\r\n|\r/g, "\n")), this.blockTokens(e, this.tokens);
          for (let e = 0; e < this.inlineQueue.length; e++) {
            let t = this.inlineQueue[e];
            this.inlineTokens(t.src, t.tokens);
          }
          return (this.inlineQueue = []), this.tokens;
        }
        blockTokens(e, t = [], n = !1) {
          let r, i, s;
          for (
            e = this.options.pedantic
              ? e.replace(/\t/g, "    ").replace(/^ +$/gm, "")
              : e.replace(
                  /^( *)(\t+)/gm,
                  (e, t, n) => t + "    ".repeat(n.length)
                );
            e;

          )
            if (
              !(
                this.options.extensions &&
                this.options.extensions.block &&
                this.options.extensions.block.some(
                  (n) =>
                    !!(r = n.call({ lexer: this }, e, t)) &&
                    ((e = e.substring(r.raw.length)), t.push(r), !0)
                )
              )
            ) {
              if ((r = this.tokenizer.space(e))) {
                (e = e.substring(r.raw.length)),
                  1 === r.raw.length && t.length > 0
                    ? (t[t.length - 1].raw += "\n")
                    : t.push(r);
                continue;
              }
              if ((r = this.tokenizer.code(e))) {
                (e = e.substring(r.raw.length)),
                  (i = t[t.length - 1]) &&
                  ("paragraph" === i.type || "text" === i.type)
                    ? ((i.raw += "\n" + r.raw),
                      (i.text += "\n" + r.text),
                      (this.inlineQueue[this.inlineQueue.length - 1].src =
                        i.text))
                    : t.push(r);
                continue;
              }
              if (
                (r = this.tokenizer.fences(e)) ||
                (r = this.tokenizer.heading(e)) ||
                (r = this.tokenizer.hr(e)) ||
                (r = this.tokenizer.blockquote(e)) ||
                (r = this.tokenizer.list(e)) ||
                (r = this.tokenizer.html(e))
              ) {
                (e = e.substring(r.raw.length)), t.push(r);
                continue;
              }
              if ((r = this.tokenizer.def(e))) {
                (e = e.substring(r.raw.length)),
                  (i = t[t.length - 1]) &&
                  ("paragraph" === i.type || "text" === i.type)
                    ? ((i.raw += "\n" + r.raw),
                      (i.text += "\n" + r.raw),
                      (this.inlineQueue[this.inlineQueue.length - 1].src =
                        i.text))
                    : this.tokens.links[r.tag] ||
                      (this.tokens.links[r.tag] = {
                        href: r.href,
                        title: r.title,
                      });
                continue;
              }
              if (
                (r = this.tokenizer.table(e)) ||
                (r = this.tokenizer.lheading(e))
              ) {
                (e = e.substring(r.raw.length)), t.push(r);
                continue;
              }
              if (
                ((s = e),
                this.options.extensions && this.options.extensions.startBlock)
              ) {
                let t,
                  n = 1 / 0,
                  r = e.slice(1);
                this.options.extensions.startBlock.forEach((e) => {
                  "number" == typeof (t = e.call({ lexer: this }, r)) &&
                    t >= 0 &&
                    (n = Math.min(n, t));
                }),
                  n < 1 / 0 && n >= 0 && (s = e.substring(0, n + 1));
              }
              if (this.state.top && (r = this.tokenizer.paragraph(s))) {
                (i = t[t.length - 1]),
                  n && i?.type === "paragraph"
                    ? ((i.raw += "\n" + r.raw),
                      (i.text += "\n" + r.text),
                      this.inlineQueue.pop(),
                      (this.inlineQueue[this.inlineQueue.length - 1].src =
                        i.text))
                    : t.push(r),
                  (n = s.length !== e.length),
                  (e = e.substring(r.raw.length));
                continue;
              }
              if ((r = this.tokenizer.text(e))) {
                (e = e.substring(r.raw.length)),
                  (i = t[t.length - 1]) && "text" === i.type
                    ? ((i.raw += "\n" + r.raw),
                      (i.text += "\n" + r.text),
                      this.inlineQueue.pop(),
                      (this.inlineQueue[this.inlineQueue.length - 1].src =
                        i.text))
                    : t.push(r);
                continue;
              }
              if (e) {
                let t = "Infinite loop on byte: " + e.charCodeAt(0);
                if (this.options.silent) {
                  console.error(t);
                  break;
                }
                throw Error(t);
              }
            }
          return (this.state.top = !0), t;
        }
        inline(e, t = []) {
          return this.inlineQueue.push({ src: e, tokens: t }), t;
        }
        inlineTokens(e, t = []) {
          let n, r, i, s, l, o;
          let a = e;
          if (this.tokens.links) {
            let e = Object.keys(this.tokens.links);
            if (e.length > 0)
              for (
                ;
                null != (s = this.tokenizer.rules.inline.reflinkSearch.exec(a));

              )
                e.includes(s[0].slice(s[0].lastIndexOf("[") + 1, -1)) &&
                  (a =
                    a.slice(0, s.index) +
                    "[" +
                    "a".repeat(s[0].length - 2) +
                    "]" +
                    a.slice(
                      this.tokenizer.rules.inline.reflinkSearch.lastIndex
                    ));
          }
          for (; null != (s = this.tokenizer.rules.inline.blockSkip.exec(a)); )
            a =
              a.slice(0, s.index) +
              "[" +
              "a".repeat(s[0].length - 2) +
              "]" +
              a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
          for (
            ;
            null != (s = this.tokenizer.rules.inline.anyPunctuation.exec(a));

          )
            a =
              a.slice(0, s.index) +
              "++" +
              a.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
          for (; e; )
            if (
              (l || (o = ""),
              (l = !1),
              !(
                this.options.extensions &&
                this.options.extensions.inline &&
                this.options.extensions.inline.some(
                  (r) =>
                    !!(n = r.call({ lexer: this }, e, t)) &&
                    ((e = e.substring(n.raw.length)), t.push(n), !0)
                )
              ))
            ) {
              if ((n = this.tokenizer.escape(e))) {
                (e = e.substring(n.raw.length)), t.push(n);
                continue;
              }
              if ((n = this.tokenizer.tag(e))) {
                (e = e.substring(n.raw.length)),
                  (r = t[t.length - 1]) &&
                  "text" === n.type &&
                  "text" === r.type
                    ? ((r.raw += n.raw), (r.text += n.text))
                    : t.push(n);
                continue;
              }
              if ((n = this.tokenizer.link(e))) {
                (e = e.substring(n.raw.length)), t.push(n);
                continue;
              }
              if ((n = this.tokenizer.reflink(e, this.tokens.links))) {
                (e = e.substring(n.raw.length)),
                  (r = t[t.length - 1]) &&
                  "text" === n.type &&
                  "text" === r.type
                    ? ((r.raw += n.raw), (r.text += n.text))
                    : t.push(n);
                continue;
              }
              if (
                (n = this.tokenizer.emStrong(e, a, o)) ||
                (n = this.tokenizer.codespan(e)) ||
                (n = this.tokenizer.br(e)) ||
                (n = this.tokenizer.del(e)) ||
                (n = this.tokenizer.autolink(e)) ||
                (!this.state.inLink && (n = this.tokenizer.url(e)))
              ) {
                (e = e.substring(n.raw.length)), t.push(n);
                continue;
              }
              if (
                ((i = e),
                this.options.extensions && this.options.extensions.startInline)
              ) {
                let t,
                  n = 1 / 0,
                  r = e.slice(1);
                this.options.extensions.startInline.forEach((e) => {
                  "number" == typeof (t = e.call({ lexer: this }, r)) &&
                    t >= 0 &&
                    (n = Math.min(n, t));
                }),
                  n < 1 / 0 && n >= 0 && (i = e.substring(0, n + 1));
              }
              if ((n = this.tokenizer.inlineText(i))) {
                (e = e.substring(n.raw.length)),
                  "_" !== n.raw.slice(-1) && (o = n.raw.slice(-1)),
                  (l = !0),
                  (r = t[t.length - 1]) && "text" === r.type
                    ? ((r.raw += n.raw), (r.text += n.text))
                    : t.push(n);
                continue;
              }
              if (e) {
                let t = "Infinite loop on byte: " + e.charCodeAt(0);
                if (this.options.silent) {
                  console.error(t);
                  break;
                }
                throw Error(t);
              }
            }
          return t;
        }
      }
      class es {
        options;
        parser;
        constructor(e) {
          this.options = e || i;
        }
        space(e) {
          return "";
        }
        code({ text: e, lang: t, escaped: n }) {
          let r = (t || "").match(/^\S*/)?.[0],
            i = e.replace(/\n$/, "") + "\n";
          return r
            ? '<pre><code class="language-' +
                u(r) +
                '">' +
                (n ? i : u(i, !0)) +
                "</code></pre>\n"
            : "<pre><code>" + (n ? i : u(i, !0)) + "</code></pre>\n";
        }
        blockquote({ tokens: e }) {
          let t = this.parser.parse(e);
          return `<blockquote>
${t}</blockquote>
`;
        }
        html({ text: e }) {
          return e;
        }
        heading({ tokens: e, depth: t }) {
          return `<h${t}>${this.parser.parseInline(e)}</h${t}>
`;
        }
        hr(e) {
          return "<hr>\n";
        }
        list(e) {
          let t = e.ordered,
            n = e.start,
            r = "";
          for (let t = 0; t < e.items.length; t++) {
            let n = e.items[t];
            r += this.listitem(n);
          }
          let i = t ? "ol" : "ul";
          return (
            "<" +
            i +
            (t && 1 !== n ? ' start="' + n + '"' : "") +
            ">\n" +
            r +
            "</" +
            i +
            ">\n"
          );
        }
        listitem(e) {
          let t = "";
          if (e.task) {
            let n = this.checkbox({ checked: !!e.checked });
            e.loose
              ? e.tokens.length > 0 && "paragraph" === e.tokens[0].type
                ? ((e.tokens[0].text = n + " " + e.tokens[0].text),
                  e.tokens[0].tokens &&
                    e.tokens[0].tokens.length > 0 &&
                    "text" === e.tokens[0].tokens[0].type &&
                    (e.tokens[0].tokens[0].text =
                      n + " " + e.tokens[0].tokens[0].text))
                : e.tokens.unshift({
                    type: "text",
                    raw: n + " ",
                    text: n + " ",
                  })
              : (t += n + " ");
          }
          return (
            (t += this.parser.parse(e.tokens, !!e.loose)),
            `<li>${t}</li>
`
          );
        }
        checkbox({ checked: e }) {
          return (
            "<input " +
            (e ? 'checked="" ' : "") +
            'disabled="" type="checkbox">'
          );
        }
        paragraph({ tokens: e }) {
          return `<p>${this.parser.parseInline(e)}</p>
`;
        }
        table(e) {
          let t = "",
            n = "";
          for (let t = 0; t < e.header.length; t++)
            n += this.tablecell(e.header[t]);
          t += this.tablerow({ text: n });
          let r = "";
          for (let t = 0; t < e.rows.length; t++) {
            let i = e.rows[t];
            n = "";
            for (let e = 0; e < i.length; e++) n += this.tablecell(i[e]);
            r += this.tablerow({ text: n });
          }
          return (
            r && (r = `<tbody>${r}</tbody>`),
            "<table>\n<thead>\n" + t + "</thead>\n" + r + "</table>\n"
          );
        }
        tablerow({ text: e }) {
          return `<tr>
${e}</tr>
`;
        }
        tablecell(e) {
          let t = this.parser.parseInline(e.tokens),
            n = e.header ? "th" : "td";
          return (
            (e.align ? `<${n} align="${e.align}">` : `<${n}>`) +
            t +
            `</${n}>
`
          );
        }
        strong({ tokens: e }) {
          return `<strong>${this.parser.parseInline(e)}</strong>`;
        }
        em({ tokens: e }) {
          return `<em>${this.parser.parseInline(e)}</em>`;
        }
        codespan({ text: e }) {
          return `<code>${e}</code>`;
        }
        br(e) {
          return "<br>";
        }
        del({ tokens: e }) {
          return `<del>${this.parser.parseInline(e)}</del>`;
        }
        link({ href: e, title: t, tokens: n }) {
          let r = this.parser.parseInline(n),
            i = g(e);
          if (null === i) return r;
          let s = '<a href="' + (e = i) + '"';
          return t && (s += ' title="' + t + '"'), (s += ">" + r + "</a>");
        }
        image({ href: e, title: t, text: n }) {
          let r = g(e);
          if (null === r) return n;
          e = r;
          let i = `<img src="${e}" alt="${n}"`;
          return t && (i += ` title="${t}"`), (i += ">");
        }
        text(e) {
          return "tokens" in e && e.tokens
            ? this.parser.parseInline(e.tokens)
            : e.text;
        }
      }
      class el {
        strong({ text: e }) {
          return e;
        }
        em({ text: e }) {
          return e;
        }
        codespan({ text: e }) {
          return e;
        }
        del({ text: e }) {
          return e;
        }
        html({ text: e }) {
          return e;
        }
        text({ text: e }) {
          return e;
        }
        link({ text: e }) {
          return "" + e;
        }
        image({ text: e }) {
          return "" + e;
        }
        br() {
          return "";
        }
      }
      class eo {
        options;
        renderer;
        textRenderer;
        constructor(e) {
          (this.options = e || i),
            (this.options.renderer = this.options.renderer || new es()),
            (this.renderer = this.options.renderer),
            (this.renderer.options = this.options),
            (this.renderer.parser = this),
            (this.textRenderer = new el());
        }
        static parse(e, t) {
          return new eo(t).parse(e);
        }
        static parseInline(e, t) {
          return new eo(t).parseInline(e);
        }
        parse(e, t = !0) {
          let n = "";
          for (let r = 0; r < e.length; r++) {
            let i = e[r];
            if (
              this.options.extensions &&
              this.options.extensions.renderers &&
              this.options.extensions.renderers[i.type]
            ) {
              let e = this.options.extensions.renderers[i.type].call(
                { parser: this },
                i
              );
              if (
                !1 !== e ||
                ![
                  "space",
                  "hr",
                  "heading",
                  "code",
                  "table",
                  "blockquote",
                  "list",
                  "html",
                  "paragraph",
                  "text",
                ].includes(i.type)
              ) {
                n += e || "";
                continue;
              }
            }
            switch (i.type) {
              case "space":
                n += this.renderer.space(i);
                continue;
              case "hr":
                n += this.renderer.hr(i);
                continue;
              case "heading":
                n += this.renderer.heading(i);
                continue;
              case "code":
                n += this.renderer.code(i);
                continue;
              case "table":
                n += this.renderer.table(i);
                continue;
              case "blockquote":
                n += this.renderer.blockquote(i);
                continue;
              case "list":
                n += this.renderer.list(i);
                continue;
              case "html":
                n += this.renderer.html(i);
                continue;
              case "paragraph":
                n += this.renderer.paragraph(i);
                continue;
              case "text": {
                let s = i,
                  l = this.renderer.text(s);
                for (; r + 1 < e.length && "text" === e[r + 1].type; )
                  (s = e[++r]), (l += "\n" + this.renderer.text(s));
                t
                  ? (n += this.renderer.paragraph({
                      type: "paragraph",
                      raw: l,
                      text: l,
                      tokens: [{ type: "text", raw: l, text: l }],
                    }))
                  : (n += l);
                continue;
              }
              default: {
                let e = 'Token with "' + i.type + '" type was not found.';
                if (this.options.silent) return console.error(e), "";
                throw Error(e);
              }
            }
          }
          return n;
        }
        parseInline(e, t) {
          t = t || this.renderer;
          let n = "";
          for (let r = 0; r < e.length; r++) {
            let i = e[r];
            if (
              this.options.extensions &&
              this.options.extensions.renderers &&
              this.options.extensions.renderers[i.type]
            ) {
              let e = this.options.extensions.renderers[i.type].call(
                { parser: this },
                i
              );
              if (
                !1 !== e ||
                ![
                  "escape",
                  "html",
                  "link",
                  "image",
                  "strong",
                  "em",
                  "codespan",
                  "br",
                  "del",
                  "text",
                ].includes(i.type)
              ) {
                n += e || "";
                continue;
              }
            }
            switch (i.type) {
              case "escape":
              case "text":
                n += t.text(i);
                break;
              case "html":
                n += t.html(i);
                break;
              case "link":
                n += t.link(i);
                break;
              case "image":
                n += t.image(i);
                break;
              case "strong":
                n += t.strong(i);
                break;
              case "em":
                n += t.em(i);
                break;
              case "codespan":
                n += t.codespan(i);
                break;
              case "br":
                n += t.br(i);
                break;
              case "del":
                n += t.del(i);
                break;
              default: {
                let e = 'Token with "' + i.type + '" type was not found.';
                if (this.options.silent) return console.error(e), "";
                throw Error(e);
              }
            }
          }
          return n;
        }
      }
      class ea {
        options;
        constructor(e) {
          this.options = e || i;
        }
        static passThroughHooks = new Set([
          "preprocess",
          "postprocess",
          "processAllTokens",
        ]);
        preprocess(e) {
          return e;
        }
        postprocess(e) {
          return e;
        }
        processAllTokens(e) {
          return e;
        }
      }
      class ec {
        defaults = r();
        options = this.setOptions;
        parse = this.#e(ei.lex, eo.parse);
        parseInline = this.#e(ei.lexInline, eo.parseInline);
        Parser = eo;
        Renderer = es;
        TextRenderer = el;
        Lexer = ei;
        Tokenizer = y;
        Hooks = ea;
        constructor(...e) {
          this.use(...e);
        }
        walkTokens(e, t) {
          let n = [];
          for (let r of e)
            switch (((n = n.concat(t.call(this, r))), r.type)) {
              case "table":
                for (let e of r.header)
                  n = n.concat(this.walkTokens(e.tokens, t));
                for (let e of r.rows)
                  for (let r of e) n = n.concat(this.walkTokens(r.tokens, t));
                break;
              case "list":
                n = n.concat(this.walkTokens(r.items, t));
                break;
              default: {
                let e = r;
                this.defaults.extensions?.childTokens?.[e.type]
                  ? this.defaults.extensions.childTokens[e.type].forEach(
                      (r) => {
                        let i = e[r].flat(1 / 0);
                        n = n.concat(this.walkTokens(i, t));
                      }
                    )
                  : e.tokens && (n = n.concat(this.walkTokens(e.tokens, t)));
              }
            }
          return n;
        }
        use(...e) {
          let t = this.defaults.extensions || {
            renderers: {},
            childTokens: {},
          };
          return (
            e.forEach((e) => {
              let n = { ...e };
              if (
                ((n.async = this.defaults.async || n.async || !1),
                e.extensions &&
                  (e.extensions.forEach((e) => {
                    if (!e.name) throw Error("extension name required");
                    if ("renderer" in e) {
                      let n = t.renderers[e.name];
                      n
                        ? (t.renderers[e.name] = function (...t) {
                            let r = e.renderer.apply(this, t);
                            return !1 === r && (r = n.apply(this, t)), r;
                          })
                        : (t.renderers[e.name] = e.renderer);
                    }
                    if ("tokenizer" in e) {
                      if (
                        !e.level ||
                        ("block" !== e.level && "inline" !== e.level)
                      )
                        throw Error(
                          "extension level must be 'block' or 'inline'"
                        );
                      let n = t[e.level];
                      n ? n.unshift(e.tokenizer) : (t[e.level] = [e.tokenizer]),
                        e.start &&
                          ("block" === e.level
                            ? t.startBlock
                              ? t.startBlock.push(e.start)
                              : (t.startBlock = [e.start])
                            : "inline" === e.level &&
                              (t.startInline
                                ? t.startInline.push(e.start)
                                : (t.startInline = [e.start])));
                    }
                    "childTokens" in e &&
                      e.childTokens &&
                      (t.childTokens[e.name] = e.childTokens);
                  }),
                  (n.extensions = t)),
                e.renderer)
              ) {
                let t = this.defaults.renderer || new es(this.defaults);
                for (let n in e.renderer) {
                  if (!(n in t)) throw Error(`renderer '${n}' does not exist`);
                  if (["options", "parser"].includes(n)) continue;
                  let r = e.renderer[n];
                  e.useNewRenderer || (r = this.#t(r, n, t));
                  let i = t[n];
                  t[n] = (...e) => {
                    let n = r.apply(t, e);
                    return !1 === n && (n = i.apply(t, e)), n || "";
                  };
                }
                n.renderer = t;
              }
              if (e.tokenizer) {
                let t = this.defaults.tokenizer || new y(this.defaults);
                for (let n in e.tokenizer) {
                  if (!(n in t)) throw Error(`tokenizer '${n}' does not exist`);
                  if (["options", "rules", "lexer"].includes(n)) continue;
                  let r = e.tokenizer[n],
                    i = t[n];
                  t[n] = (...e) => {
                    let n = r.apply(t, e);
                    return !1 === n && (n = i.apply(t, e)), n;
                  };
                }
                n.tokenizer = t;
              }
              if (e.hooks) {
                let t = this.defaults.hooks || new ea();
                for (let n in e.hooks) {
                  if (!(n in t)) throw Error(`hook '${n}' does not exist`);
                  if ("options" === n) continue;
                  let r = e.hooks[n],
                    i = t[n];
                  ea.passThroughHooks.has(n)
                    ? (t[n] = (e) => {
                        if (this.defaults.async)
                          return Promise.resolve(r.call(t, e)).then((e) =>
                            i.call(t, e)
                          );
                        let n = r.call(t, e);
                        return i.call(t, n);
                      })
                    : (t[n] = (...e) => {
                        let n = r.apply(t, e);
                        return !1 === n && (n = i.apply(t, e)), n;
                      });
                }
                n.hooks = t;
              }
              if (e.walkTokens) {
                let t = this.defaults.walkTokens,
                  r = e.walkTokens;
                n.walkTokens = function (e) {
                  let n = [];
                  return (
                    n.push(r.call(this, e)),
                    t && (n = n.concat(t.call(this, e))),
                    n
                  );
                };
              }
              this.defaults = { ...this.defaults, ...n };
            }),
            this
          );
        }
        #t(e, t, n) {
          switch (t) {
            case "heading":
              return function (r) {
                return r.type && r.type === t
                  ? e.call(
                      this,
                      n.parser.parseInline(r.tokens),
                      r.depth,
                      n.parser
                        .parseInline(r.tokens, n.parser.textRenderer)
                        .replace(h, (e, t) =>
                          "colon" === (t = t.toLowerCase())
                            ? ":"
                            : "#" === t.charAt(0)
                            ? "x" === t.charAt(1)
                              ? String.fromCharCode(
                                  parseInt(t.substring(2), 16)
                                )
                              : String.fromCharCode(+t.substring(1))
                            : ""
                        )
                    )
                  : e.apply(this, arguments);
              };
            case "code":
              return function (n) {
                return n.type && n.type === t
                  ? e.call(this, n.text, n.lang, !!n.escaped)
                  : e.apply(this, arguments);
              };
            case "table":
              return function (n) {
                if (!n.type || n.type !== t) return e.apply(this, arguments);
                let r = "",
                  i = "";
                for (let e = 0; e < n.header.length; e++)
                  i += this.tablecell({
                    text: n.header[e].text,
                    tokens: n.header[e].tokens,
                    header: !0,
                    align: n.align[e],
                  });
                r += this.tablerow({ text: i });
                let s = "";
                for (let e = 0; e < n.rows.length; e++) {
                  let t = n.rows[e];
                  i = "";
                  for (let e = 0; e < t.length; e++)
                    i += this.tablecell({
                      text: t[e].text,
                      tokens: t[e].tokens,
                      header: !1,
                      align: n.align[e],
                    });
                  s += this.tablerow({ text: i });
                }
                return e.call(this, r, s);
              };
            case "blockquote":
              return function (n) {
                if (!n.type || n.type !== t) return e.apply(this, arguments);
                let r = this.parser.parse(n.tokens);
                return e.call(this, r);
              };
            case "list":
              return function (n) {
                if (!n.type || n.type !== t) return e.apply(this, arguments);
                let r = n.ordered,
                  i = n.start,
                  s = n.loose,
                  l = "";
                for (let e = 0; e < n.items.length; e++) {
                  let t = n.items[e],
                    r = t.checked,
                    i = t.task,
                    o = "";
                  if (t.task) {
                    let e = this.checkbox({ checked: !!r });
                    s
                      ? t.tokens.length > 0 && "paragraph" === t.tokens[0].type
                        ? ((t.tokens[0].text = e + " " + t.tokens[0].text),
                          t.tokens[0].tokens &&
                            t.tokens[0].tokens.length > 0 &&
                            "text" === t.tokens[0].tokens[0].type &&
                            (t.tokens[0].tokens[0].text =
                              e + " " + t.tokens[0].tokens[0].text))
                        : t.tokens.unshift({ type: "text", text: e + " " })
                      : (o += e + " ");
                  }
                  (o += this.parser.parse(t.tokens, s)),
                    (l += this.listitem({
                      type: "list_item",
                      raw: o,
                      text: o,
                      task: i,
                      checked: !!r,
                      loose: s,
                      tokens: t.tokens,
                    }));
                }
                return e.call(this, l, r, i);
              };
            case "html":
              return function (n) {
                return n.type && n.type === t
                  ? e.call(this, n.text, n.block)
                  : e.apply(this, arguments);
              };
            case "paragraph":
              return function (n) {
                return n.type && n.type === t
                  ? e.call(this, this.parser.parseInline(n.tokens))
                  : e.apply(this, arguments);
              };
            case "escape":
              return function (n) {
                return n.type && n.type === t
                  ? e.call(this, n.text)
                  : e.apply(this, arguments);
              };
            case "link":
              return function (n) {
                return n.type && n.type === t
                  ? e.call(
                      this,
                      n.href,
                      n.title,
                      this.parser.parseInline(n.tokens)
                    )
                  : e.apply(this, arguments);
              };
            case "image":
              return function (n) {
                return n.type && n.type === t
                  ? e.call(this, n.href, n.title, n.text)
                  : e.apply(this, arguments);
              };
            case "strong":
              return function (n) {
                return n.type && n.type === t
                  ? e.call(this, this.parser.parseInline(n.tokens))
                  : e.apply(this, arguments);
              };
            case "em":
              return function (n) {
                return n.type && n.type === t
                  ? e.call(this, this.parser.parseInline(n.tokens))
                  : e.apply(this, arguments);
              };
            case "codespan":
              return function (n) {
                return n.type && n.type === t
                  ? e.call(this, n.text)
                  : e.apply(this, arguments);
              };
            case "del":
              return function (n) {
                return n.type && n.type === t
                  ? e.call(this, this.parser.parseInline(n.tokens))
                  : e.apply(this, arguments);
              };
            case "text":
              return function (n) {
                return n.type && n.type === t
                  ? e.call(this, n.text)
                  : e.apply(this, arguments);
              };
          }
          return e;
        }
        setOptions(e) {
          return (this.defaults = { ...this.defaults, ...e }), this;
        }
        lexer(e, t) {
          return ei.lex(e, t ?? this.defaults);
        }
        parser(e, t) {
          return eo.parse(e, t ?? this.defaults);
        }
        #e(e, t) {
          return (n, r) => {
            let i = { ...r },
              s = { ...this.defaults, ...i };
            !0 === this.defaults.async &&
              !1 === i.async &&
              (s.silent ||
                console.warn(
                  "marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."
                ),
              (s.async = !0));
            let l = this.#n(!!s.silent, !!s.async);
            if (null == n)
              return l(Error("marked(): input parameter is undefined or null"));
            if ("string" != typeof n)
              return l(
                Error(
                  "marked(): input parameter is of type " +
                    Object.prototype.toString.call(n) +
                    ", string expected"
                )
              );
            if ((s.hooks && (s.hooks.options = s), s.async))
              return Promise.resolve(s.hooks ? s.hooks.preprocess(n) : n)
                .then((t) => e(t, s))
                .then((e) => (s.hooks ? s.hooks.processAllTokens(e) : e))
                .then((e) =>
                  s.walkTokens
                    ? Promise.all(this.walkTokens(e, s.walkTokens)).then(
                        () => e
                      )
                    : e
                )
                .then((e) => t(e, s))
                .then((e) => (s.hooks ? s.hooks.postprocess(e) : e))
                .catch(l);
            try {
              s.hooks && (n = s.hooks.preprocess(n));
              let r = e(n, s);
              s.hooks && (r = s.hooks.processAllTokens(r)),
                s.walkTokens && this.walkTokens(r, s.walkTokens);
              let i = t(r, s);
              return s.hooks && (i = s.hooks.postprocess(i)), i;
            } catch (e) {
              return l(e);
            }
          };
        }
        #n(e, t) {
          return (n) => {
            if (
              ((n.message +=
                "\nPlease report this to https://github.com/markedjs/marked."),
              e)
            ) {
              let e =
                "<p>An error occurred:</p><pre>" +
                u(n.message + "", !0) +
                "</pre>";
              return t ? Promise.resolve(e) : e;
            }
            if (t) return Promise.reject(n);
            throw n;
          };
        }
      }
      let ep = new ec();
      function eu(e, t) {
        return ep.parse(e, t);
      }
      (eu.options = eu.setOptions =
        function (e) {
          return (
            ep.setOptions(e), (eu.defaults = ep.defaults), (i = eu.defaults), eu
          );
        }),
        (eu.getDefaults = r),
        (eu.defaults = i),
        (eu.use = function (...e) {
          return (
            ep.use(...e), (eu.defaults = ep.defaults), (i = eu.defaults), eu
          );
        }),
        (eu.walkTokens = function (e, t) {
          return ep.walkTokens(e, t);
        }),
        (eu.parseInline = ep.parseInline),
        (eu.Parser = eo),
        (eu.parser = eo.parse),
        (eu.Renderer = es),
        (eu.TextRenderer = el),
        (eu.Lexer = ei),
        (eu.lexer = ei.lex),
        (eu.Tokenizer = y),
        (eu.Hooks = ea),
        (eu.parse = eu),
        eu.options,
        eu.setOptions,
        eu.use,
        eu.walkTokens,
        eu.parseInline,
        eo.parse,
        ei.lex;
    },
  },
]);
