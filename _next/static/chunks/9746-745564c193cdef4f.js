"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9746],
  {
    19311: function (t, e, n) {
      n.d(e, {
        R: function () {
          return r;
        },
      });
      let r = (0, n(24278).I)({
        d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z",
        displayName: "ArrowBackIcon",
      });
    },
    75218: function (t, e, n) {
      n.d(e, {
        m: function () {
          return r;
        },
      });
      let r = (0, n(24278).I)({
        d: "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z",
        displayName: "ArrowForwardIcon",
      });
    },
    68029: function (t, e, n) {
      n.d(e, {
        x: function () {
          return r;
        },
      });
      let r = (0, n(53882).m)("div");
      r.displayName = "Box";
    },
    88329: function (t, e, n) {
      n.d(e, {
        k: function () {
          return u;
        },
      });
      var r = n(85893),
        i = n(49381),
        o = n(53882);
      let u = (0, i.G)(function (t, e) {
        let {
          direction: n,
          align: i,
          justify: u,
          wrap: a,
          basis: c,
          grow: l,
          shrink: s,
          ...f
        } = t;
        return (0,
        r.jsx)(o.m.div, { ref: e, __css: { display: "flex", flexDirection: n, alignItems: i, justifyContent: u, flexWrap: a, flexBasis: c, flexGrow: l, flexShrink: s }, ...f });
      });
      u.displayName = "Flex";
    },
    32761: function (t, e, n) {
      n.d(e, {
        E: function () {
          return f;
        },
      });
      var r = n(85893),
        i = n(8297),
        o = n(49381);
      let u = (0, o.G)(function (t, e) {
        let { htmlWidth: n, htmlHeight: i, alt: o, ...u } = t;
        return (0, r.jsx)("img", { width: n, height: i, ref: e, alt: o, ...u });
      });
      u.displayName = "NativeImage";
      var a = n(12408),
        c = n(67294);
      let l = (t, e) =>
        ("loaded" !== t && "beforeLoadOrError" === e) ||
        ("failed" === t && "onError" === e);
      var s = n(53882);
      let f = (0, o.G)(function (t, e) {
        let {
            fallbackSrc: n,
            fallback: o,
            src: f,
            srcSet: d,
            align: p,
            fit: m,
            loading: g,
            ignoreFallback: h,
            crossOrigin: y,
            fallbackStrategy: x = "beforeLoadOrError",
            referrerPolicy: v,
            ...b
          } = t,
          E = void 0 !== n || void 0 !== o,
          w = null != g || h || !E,
          S = l(
            (function (t) {
              let {
                  loading: e,
                  src: n,
                  srcSet: r,
                  onLoad: i,
                  onError: o,
                  crossOrigin: u,
                  sizes: l,
                  ignoreFallback: s,
                } = t,
                [f, d] = (0, c.useState)("pending");
              (0, c.useEffect)(() => {
                d(n ? "loading" : "pending");
              }, [n]);
              let p = (0, c.useRef)(),
                m = (0, c.useCallback)(() => {
                  if (!n) return;
                  g();
                  let t = new Image();
                  (t.src = n),
                    u && (t.crossOrigin = u),
                    r && (t.srcset = r),
                    l && (t.sizes = l),
                    e && (t.loading = e),
                    (t.onload = (t) => {
                      g(), d("loaded"), i?.(t);
                    }),
                    (t.onerror = (t) => {
                      g(), d("failed"), o?.(t);
                    }),
                    (p.current = t);
                }, [n, u, r, l, i, o, e]),
                g = () => {
                  p.current &&
                    ((p.current.onload = null),
                    (p.current.onerror = null),
                    (p.current = null));
                };
              return (
                (0, a.G)(() => {
                  if (!s)
                    return (
                      "loading" === f && m(),
                      () => {
                        g();
                      }
                    );
                }, [f, m, s]),
                s ? "loaded" : f
              );
            })({ ...t, crossOrigin: y, ignoreFallback: w }),
            x
          ),
          O = {
            ref: e,
            objectFit: m,
            objectPosition: p,
            ...(w ? b : (0, i.C)(b, ["onError", "onLoad"])),
          };
        return S
          ? o ||
              (0, r.jsx)(s.m.img, {
                as: u,
                className: "chakra-image__placeholder",
                src: n,
                ...O,
              })
          : (0, r.jsx)(s.m.img, {
              as: u,
              src: f,
              srcSet: d,
              crossOrigin: y,
              loading: g,
              referrerPolicy: v,
              className: "chakra-image",
              ...O,
            });
      });
      f.displayName = "Image";
    },
    89015: function (t, e, n) {
      n.d(e, {
        o: function () {
          return m;
        },
      });
      var r = n(85893),
        i = n(34926),
        o = n(68928),
        u = n(5490),
        a = n(65544),
        c = n(12553),
        l = n(49381),
        s = n(64317),
        f = n(53882);
      function d(t) {
        return (0, r.jsx)(c.J, {
          focusable: "false",
          "aria-hidden": !0,
          ...t,
          children: (0, r.jsx)("path", {
            fill: "currentColor",
            d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z",
          }),
        });
      }
      let p = (0, l.G)(function (t, e) {
        let n = (0, s.m)("CloseButton", t),
          { children: i, isDisabled: o, __css: u, ...c } = (0, a.L)(t);
        return (0,
        r.jsx)(f.m.button, { type: "button", "aria-label": "Close", ref: e, disabled: o, __css: { outline: 0, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, ...n, ...u }, ...c, children: i || (0, r.jsx)(d, { width: "1em", height: "1em" }) });
      });
      p.displayName = "CloseButton";
      let m = (0, l.G)((t, e) => {
        let { onClick: n, className: a, ...c } = t,
          { onClose: l } = (0, u.vR)(),
          s = (0, i.cx)("chakra-modal__close-btn", a),
          f = (0, u.I_)();
        return (0, r.jsx)(p, {
          ref: e,
          __css: f.closeButton,
          className: s,
          onClick: (0, o.v)(n, (t) => {
            t.stopPropagation(), l();
          }),
          ...c,
        });
      });
      m.displayName = "ModalCloseButton";
    },
    93924: function (t, e, n) {
      n.d(e, {
        U: function () {
          return p;
        },
      });
      var r = n(85893);
      let i = (t) => {
        let { condition: e, message: n } = t;
      };
      var o = n(34926),
        u = n(65820),
        a = n(33654),
        c = n(67294),
        l = n(82145);
      let s = (t) => null != t && parseInt(t.toString(), 10) > 0,
        f = {
          exit: {
            height: { duration: 0.2, ease: l.Lj.ease },
            opacity: { duration: 0.3, ease: l.Lj.ease },
          },
          enter: {
            height: { duration: 0.3, ease: l.Lj.ease },
            opacity: { duration: 0.4, ease: l.Lj.ease },
          },
        },
        d = {
          exit: ({
            animateOpacity: t,
            startingHeight: e,
            transition: n,
            transitionEnd: r,
            delay: i,
          }) => ({
            ...(t && { opacity: s(e) ? 1 : 0 }),
            height: e,
            transitionEnd: r?.exit,
            transition: n?.exit ?? l.p$.exit(f.exit, i),
          }),
          enter: ({
            animateOpacity: t,
            endingHeight: e,
            transition: n,
            transitionEnd: r,
            delay: i,
          }) => ({
            ...(t && { opacity: 1 }),
            height: e,
            transitionEnd: r?.enter,
            transition: n?.enter ?? l.p$.enter(f.enter, i),
          }),
        },
        p = (0, c.forwardRef)((t, e) => {
          let {
              in: n,
              unmountOnExit: l,
              animateOpacity: s = !0,
              startingHeight: f = 0,
              endingHeight: p = "auto",
              style: m,
              className: g,
              transition: h,
              transitionEnd: y,
              animatePresenceProps: x,
              ...v
            } = t,
            [b, E] = (0, c.useState)(!1);
          (0, c.useEffect)(() => {
            let t = setTimeout(() => {
              E(!0);
            });
            return () => clearTimeout(t);
          }, []),
            i({
              condition: Number(f) > 0 && !!l,
              message:
                "startingHeight and unmountOnExit are mutually exclusive. You can't use them together",
            });
          let w = parseFloat(f.toString()) > 0,
            S = {
              startingHeight: f,
              endingHeight: p,
              animateOpacity: s,
              transition: b ? h : { enter: { duration: 0 } },
              transitionEnd: {
                enter: y?.enter,
                exit: l
                  ? y?.exit
                  : { ...y?.exit, display: w ? "block" : "none" },
              },
            },
            O = !l || n,
            I = n || l ? "enter" : "exit";
          return (0, r.jsx)(u.M, {
            ...x,
            initial: !1,
            custom: S,
            children:
              O &&
              (0, r.jsx)(a.E.div, {
                ref: e,
                ...v,
                className: (0, o.cx)("chakra-collapse", g),
                style: { overflow: "hidden", display: "block", ...m },
                custom: S,
                variants: d,
                initial: !!l && "exit",
                animate: I,
                exit: "exit",
              }),
          });
        });
      p.displayName = "Collapse";
    },
    77451: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return i;
        },
      });
      let r = {
        active: !0,
        breakpoints: {},
        delay: 4e3,
        jump: !1,
        playOnInit: !0,
        stopOnFocusIn: !0,
        stopOnInteraction: !0,
        stopOnMouseEnter: !1,
        stopOnLastSnap: !1,
        rootNode: null,
      };
      function i(t = {}) {
        let e, n, o;
        let u = !1,
          a = !0,
          c = !1,
          l = 0;
        function s() {
          if (o || !a) return;
          u || n.emit("autoplay:play");
          let { ownerWindow: t } = n.internalEngine();
          t.clearInterval(l), (l = t.setInterval(g, e.delay)), (u = !0);
        }
        function f() {
          if (o) return;
          u && n.emit("autoplay:stop");
          let { ownerWindow: t } = n.internalEngine();
          t.clearInterval(l), (l = 0), (u = !1);
        }
        function d() {
          if (p()) return (a = u), f();
          a && s();
        }
        function p() {
          let { ownerDocument: t } = n.internalEngine();
          return "hidden" === t.visibilityState;
        }
        function m(t) {
          void 0 !== t && (c = t), (a = !0), s();
        }
        function g() {
          let { index: t } = n.internalEngine(),
            r = t.clone().add(1).get(),
            i = n.scrollSnapList().length - 1;
          e.stopOnLastSnap && r === i && f(),
            n.canScrollNext() ? n.scrollNext(c) : n.scrollTo(0, c);
        }
        return {
          name: "autoplay",
          options: t,
          init: function (u, l) {
            n = u;
            let { mergeOptions: m, optionsAtMedia: g } = l,
              h = m(r, i.globalOptions);
            if (((e = g(m(h, t))), n.scrollSnapList().length <= 1)) return;
            (c = e.jump), (o = !1);
            let { eventStore: y, ownerDocument: x } = n.internalEngine(),
              v = n.rootNode(),
              b = (e.rootNode && e.rootNode(v)) || v,
              E = n.containerNode();
            n.on("pointerDown", f),
              e.stopOnInteraction || n.on("pointerUp", s),
              e.stopOnMouseEnter &&
                (y.add(b, "mouseenter", () => {
                  (a = !1), f();
                }),
                e.stopOnInteraction ||
                  y.add(b, "mouseleave", () => {
                    (a = !0), s();
                  })),
              e.stopOnFocusIn &&
                (n.on("slideFocusStart", f),
                e.stopOnInteraction || y.add(E, "focusout", s)),
              y.add(x, "visibilitychange", d),
              e.playOnInit && !p() && s();
          },
          destroy: function () {
            n
              .off("pointerDown", f)
              .off("pointerUp", s)
              .off("slideFocusStart", f),
              f(),
              (o = !0),
              (u = !1);
          },
          play: m,
          stop: function () {
            u && f();
          },
          reset: function () {
            u && m();
          },
          isPlaying: function () {
            return u;
          },
        };
      }
      i.globalOptions = void 0;
    },
    89382: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return I;
        },
      });
      var r = n(67294);
      function i(t) {
        return (
          "[object Object]" === Object.prototype.toString.call(t) ||
          Array.isArray(t)
        );
      }
      function o(t, e) {
        let n = Object.keys(t),
          r = Object.keys(e);
        return (
          n.length === r.length &&
          JSON.stringify(Object.keys(t.breakpoints || {})) ===
            JSON.stringify(Object.keys(e.breakpoints || {})) &&
          n.every((n) => {
            let r = t[n],
              u = e[n];
            return "function" == typeof r
              ? `${r}` == `${u}`
              : i(r) && i(u)
              ? o(r, u)
              : r === u;
          })
        );
      }
      function u(t) {
        return t
          .concat()
          .sort((t, e) => (t.name > e.name ? 1 : -1))
          .map((t) => t.options);
      }
      function a(t) {
        return "number" == typeof t;
      }
      function c(t) {
        return "string" == typeof t;
      }
      function l(t) {
        return "boolean" == typeof t;
      }
      function s(t) {
        return "[object Object]" === Object.prototype.toString.call(t);
      }
      function f(t) {
        return Math.abs(t);
      }
      function d(t) {
        return Math.sign(t);
      }
      function p(t) {
        return y(t).map(Number);
      }
      function m(t) {
        return t[g(t)];
      }
      function g(t) {
        return Math.max(0, t.length - 1);
      }
      function h(t, e = 0) {
        return Array.from(Array(t), (t, n) => e + n);
      }
      function y(t) {
        return Object.keys(t);
      }
      function x(t, e) {
        return void 0 !== e.MouseEvent && t instanceof e.MouseEvent;
      }
      function v() {
        let t = [],
          e = {
            add: function (n, r, i, o = { passive: !0 }) {
              let u;
              return (
                "addEventListener" in n
                  ? (n.addEventListener(r, i, o),
                    (u = () => n.removeEventListener(r, i, o)))
                  : (n.addListener(i), (u = () => n.removeListener(i))),
                t.push(u),
                e
              );
            },
            clear: function () {
              t = t.filter((t) => t());
            },
          };
        return e;
      }
      function b(t = 0, e = 0) {
        let n = f(t - e);
        function r(n) {
          return n < t || n > e;
        }
        return {
          length: n,
          max: e,
          min: t,
          constrain: function (n) {
            return r(n) ? (n < t ? t : e) : n;
          },
          reachedAny: r,
          reachedMax: function (t) {
            return t > e;
          },
          reachedMin: function (e) {
            return e < t;
          },
          removeOffset: function (t) {
            return n ? t - n * Math.ceil((t - e) / n) : t;
          },
        };
      }
      function E(t) {
        let e = t;
        function n(t) {
          return a(t) ? t : t.get();
        }
        return {
          get: function () {
            return e;
          },
          set: function (t) {
            e = n(t);
          },
          add: function (t) {
            e += n(t);
          },
          subtract: function (t) {
            e -= n(t);
          },
        };
      }
      function w(t, e) {
        let n =
            "x" === t.scroll
              ? function (t) {
                  return `translate3d(${t}px,0px,0px)`;
                }
              : function (t) {
                  return `translate3d(0px,${t}px,0px)`;
                },
          r = e.style,
          i = !1;
        return {
          clear: function () {
            i ||
              ((r.transform = ""),
              e.getAttribute("style") || e.removeAttribute("style"));
          },
          to: function (e) {
            i || (r.transform = n(t.direction(e)));
          },
          toggleActive: function (t) {
            i = !t;
          },
        };
      }
      let S = {
        align: "center",
        axis: "x",
        container: null,
        slides: null,
        containScroll: "trimSnaps",
        direction: "ltr",
        slidesToScroll: 1,
        inViewThreshold: 0,
        breakpoints: {},
        dragFree: !1,
        dragThreshold: 10,
        loop: !1,
        skipSnaps: !1,
        duration: 25,
        startIndex: 0,
        active: !0,
        watchDrag: !0,
        watchResize: !0,
        watchSlides: !0,
        watchFocus: !0,
      };
      function O(t, e, n) {
        let r, i, o, u, I;
        let L = t.ownerDocument,
          k = L.defaultView,
          N = (function (t) {
            function e(t, e) {
              return (function t(e, n) {
                return [e, n].reduce(
                  (e, n) => (
                    y(n).forEach((r) => {
                      let i = e[r],
                        o = n[r],
                        u = s(i) && s(o);
                      e[r] = u ? t(i, o) : o;
                    }),
                    e
                  ),
                  {}
                );
              })(t, e || {});
            }
            return {
              mergeOptions: e,
              optionsAtMedia: function (n) {
                let r = n.breakpoints || {},
                  i = y(r)
                    .filter((e) => t.matchMedia(e).matches)
                    .map((t) => r[t])
                    .reduce((t, n) => e(t, n), {});
                return e(n, i);
              },
              optionsMediaQueries: function (e) {
                return e
                  .map((t) => y(t.breakpoints || {}))
                  .reduce((t, e) => t.concat(e), [])
                  .map(t.matchMedia);
              },
            };
          })(k),
          j =
            ((I = []),
            {
              init: function (t, e) {
                return (
                  (I = e.filter(
                    ({ options: t }) => !1 !== N.optionsAtMedia(t).active
                  )).forEach((e) => e.init(t, N)),
                  e.reduce((t, e) => Object.assign(t, { [e.name]: e }), {})
                );
              },
              destroy: function () {
                I = I.filter((t) => t.destroy());
              },
            }),
          D = v(),
          F = (function () {
            let t,
              e = {},
              n = {
                init: function (e) {
                  t = e;
                },
                emit: function (r) {
                  return (e[r] || []).forEach((e) => e(t, r)), n;
                },
                off: function (t, r) {
                  return (e[t] = (e[t] || []).filter((t) => t !== r)), n;
                },
                on: function (t, r) {
                  return (e[t] = (e[t] || []).concat([r])), n;
                },
                clear: function () {
                  e = {};
                },
              };
            return n;
          })(),
          { mergeOptions: M, optionsAtMedia: A, optionsMediaQueries: C } = N,
          { on: P, off: T, emit: _ } = F,
          H = !1,
          B = M(S, O.globalOptions),
          z = M(B),
          R = [];
        function V(e, n) {
          !H &&
            ((z = A((B = M(B, e)))),
            (R = n || R),
            (function () {
              let { container: e, slides: n } = z;
              o = (c(e) ? t.querySelector(e) : e) || t.children[0];
              let r = c(n) ? o.querySelectorAll(n) : n;
              u = [].slice.call(r || o.children);
            })(),
            (r = (function e(n) {
              let r = (function (t, e, n, r, i, o, u) {
                let s, S;
                let {
                    align: O,
                    axis: I,
                    direction: L,
                    startIndex: k,
                    loop: N,
                    duration: j,
                    dragFree: D,
                    dragThreshold: F,
                    inViewThreshold: M,
                    slidesToScroll: A,
                    skipSnaps: C,
                    containScroll: P,
                    watchResize: T,
                    watchSlides: _,
                    watchDrag: H,
                    watchFocus: B,
                  } = o,
                  z = {
                    measure: function (t) {
                      let {
                        offsetTop: e,
                        offsetLeft: n,
                        offsetWidth: r,
                        offsetHeight: i,
                      } = t;
                      return {
                        top: e,
                        right: n + r,
                        bottom: e + i,
                        left: n,
                        width: r,
                        height: i,
                      };
                    },
                  },
                  R = z.measure(e),
                  V = n.map(z.measure),
                  $ = (function (t, e) {
                    let n = "rtl" === e,
                      r = "y" === t,
                      i = !r && n ? -1 : 1;
                    return {
                      scroll: r ? "y" : "x",
                      cross: r ? "x" : "y",
                      startEdge: r ? "top" : n ? "right" : "left",
                      endEdge: r ? "bottom" : n ? "left" : "right",
                      measureSize: function (t) {
                        let { height: e, width: n } = t;
                        return r ? e : n;
                      },
                      direction: function (t) {
                        return t * i;
                      },
                    };
                  })(I, L),
                  G = $.measureSize(R),
                  U = {
                    measure: function (t) {
                      return (t / 100) * G;
                    },
                  },
                  q = (function (t, e) {
                    let n = {
                      start: function () {
                        return 0;
                      },
                      center: function (t) {
                        return (e - t) / 2;
                      },
                      end: function (t) {
                        return e - t;
                      },
                    };
                    return {
                      measure: function (r, i) {
                        return c(t) ? n[t](r) : t(e, r, i);
                      },
                    };
                  })(O, G),
                  J = !N && !!P,
                  {
                    slideSizes: Z,
                    slideSizesWithGaps: X,
                    startGap: Y,
                    endGap: Q,
                  } = (function (t, e, n, r, i, o) {
                    let { measureSize: u, startEdge: a, endEdge: c } = t,
                      l = n[0] && i,
                      s = (function () {
                        if (!l) return 0;
                        let t = n[0];
                        return f(e[a] - t[a]);
                      })(),
                      d = l
                        ? parseFloat(
                            o
                              .getComputedStyle(m(r))
                              .getPropertyValue(`margin-${c}`)
                          )
                        : 0,
                      p = n.map(u),
                      h = n
                        .map((t, e, n) => {
                          let r = e === g(n);
                          return e
                            ? r
                              ? p[e] + d
                              : n[e + 1][a] - t[a]
                            : p[e] + s;
                        })
                        .map(f);
                    return {
                      slideSizes: p,
                      slideSizesWithGaps: h,
                      startGap: s,
                      endGap: d,
                    };
                  })($, R, V, n, N || !!P, i),
                  W = (function (t, e, n, r, i, o, u, c, l) {
                    let { startEdge: s, endEdge: d, direction: h } = t,
                      y = a(n);
                    return {
                      groupSlides: function (t) {
                        return y
                          ? p(t)
                              .filter((t) => t % n == 0)
                              .map((e) => t.slice(e, e + n))
                          : t.length
                          ? p(t)
                              .reduce((n, a, l) => {
                                let p = m(n) || 0,
                                  y = a === g(t),
                                  x = i[s] - o[p][s],
                                  v = i[s] - o[a][d],
                                  b = r || 0 !== p ? 0 : h(u),
                                  E = f(v - (!r && y ? h(c) : 0) - (x + b));
                                return (
                                  l && E > e + 2 && n.push(a),
                                  y && n.push(t.length),
                                  n
                                );
                              }, [])
                              .map((e, n, r) => {
                                let i = Math.max(r[n - 1] || 0);
                                return t.slice(i, e);
                              })
                          : [];
                      },
                    };
                  })($, G, A, N, R, V, Y, Q, 0),
                  { snaps: K, snapsAligned: tt } = (function (t, e, n, r, i) {
                    let { startEdge: o, endEdge: u } = t,
                      { groupSlides: a } = i,
                      c = a(r)
                        .map((t) => m(t)[u] - t[0][o])
                        .map(f)
                        .map(e.measure),
                      l = r.map((t) => n[o] - t[o]).map((t) => -f(t)),
                      s = a(l)
                        .map((t) => t[0])
                        .map((t, e) => t + c[e]);
                    return { snaps: l, snapsAligned: s };
                  })($, q, R, V, W),
                  te = -m(K) + m(X),
                  { snapsContained: tn, scrollContainLimit: tr } = (function (
                    t,
                    e,
                    n,
                    r,
                    i
                  ) {
                    let o = b(-e + t, 0),
                      u = n
                        .map((t, e) => {
                          let { min: r, max: i } = o,
                            u = o.constrain(t),
                            a = e === g(n);
                          return e
                            ? a || 1 > f(r - u)
                              ? r
                              : 1 > f(i - u)
                              ? i
                              : u
                            : i;
                        })
                        .map((t) => parseFloat(t.toFixed(3))),
                      a = (function () {
                        let t = u[0],
                          e = m(u);
                        return b(u.lastIndexOf(t), u.indexOf(e) + 1);
                      })();
                    return {
                      snapsContained: (function () {
                        if (e <= t + 2) return [o.max];
                        if ("keepSnaps" === r) return u;
                        let { min: n, max: i } = a;
                        return u.slice(n, i);
                      })(),
                      scrollContainLimit: a,
                    };
                  })(G, te, tt, P, 0),
                  ti = J ? tn : tt,
                  { limit: to } = (function (t, e, n) {
                    let r = e[0];
                    return { limit: b(n ? r - t : m(e), r) };
                  })(te, ti, N),
                  tu = (function t(e, n, r) {
                    let { constrain: i } = b(0, e),
                      o = e + 1,
                      u = a(n);
                    function a(t) {
                      return r ? f((o + t) % o) : i(t);
                    }
                    function c() {
                      return t(e, u, r);
                    }
                    let l = {
                      get: function () {
                        return u;
                      },
                      set: function (t) {
                        return (u = a(t)), l;
                      },
                      add: function (t) {
                        return c().set(u + t);
                      },
                      clone: c,
                    };
                    return l;
                  })(g(ti), k, N),
                  ta = tu.clone(),
                  tc = p(n),
                  tl = (
                    {
                      dragHandler: t,
                      scrollBody: e,
                      scrollBounds: n,
                      options: { loop: r },
                    },
                    i
                  ) => {
                    r || n.constrain(t.pointerDown()), e.seek(i);
                  },
                  ts = (
                    {
                      scrollBody: t,
                      translate: e,
                      location: n,
                      offsetLocation: r,
                      scrollLooper: i,
                      slideLooper: o,
                      dragHandler: u,
                      animation: a,
                      eventHandler: c,
                      scrollBounds: l,
                      options: { loop: s },
                    },
                    f
                  ) => {
                    let d = t.settled(),
                      p = !l.shouldConstrain(),
                      m = s ? d : d && p;
                    m && !u.pointerDown() && (a.stop(), c.emit("settle")),
                      m || c.emit("scroll");
                    let g = n.get() * f + tm.get() * (1 - f);
                    r.set(g),
                      s && (i.loop(t.direction()), o.loop()),
                      e.to(r.get());
                  },
                  tf = (function (t, e, n, r) {
                    let i = v(),
                      o = 1e3 / 60,
                      u = null,
                      a = 0,
                      c = 0;
                    function l(t) {
                      if (!c) return;
                      u || (u = t);
                      let i = t - u;
                      for (u = t, a += i; a >= o; ) n(o), (a -= o);
                      r(a / o), c && e.requestAnimationFrame(l);
                    }
                    function s() {
                      e.cancelAnimationFrame(c), (u = null), (a = 0), (c = 0);
                    }
                    return {
                      init: function () {
                        i.add(t, "visibilitychange", () => {
                          t.hidden && ((u = null), (a = 0));
                        });
                      },
                      destroy: function () {
                        s(), i.clear();
                      },
                      start: function () {
                        c || (c = e.requestAnimationFrame(l));
                      },
                      stop: s,
                      update: () => n(o),
                      render: r,
                    };
                  })(
                    r,
                    i,
                    (t) => tl(tI, t),
                    (t) => ts(tI, t)
                  ),
                  td = ti[tu.get()],
                  tp = E(td),
                  tm = E(td),
                  tg = E(td),
                  th = E(td),
                  ty = (function (t, e, n, r, i, o) {
                    let u = 0,
                      a = 0,
                      c = i,
                      l = 0.68,
                      s = t.get(),
                      p = 0;
                    function m(t) {
                      return (c = t), h;
                    }
                    function g(t) {
                      return (l = t), h;
                    }
                    let h = {
                      direction: function () {
                        return a;
                      },
                      duration: function () {
                        return c;
                      },
                      velocity: function () {
                        return u;
                      },
                      seek: function (e) {
                        let i = e / 1e3,
                          o = c * i,
                          f = r.get() - t.get(),
                          m = 0;
                        return (
                          c
                            ? (n.set(t),
                              (u += f / o),
                              (u *= l),
                              (s += u),
                              t.add(u * i),
                              (m = s - p))
                            : ((u = 0), n.set(r), t.set(r), (m = f)),
                          (a = d(m)),
                          (p = s),
                          h
                        );
                      },
                      settled: function () {
                        return 0.001 > f(r.get() - e.get());
                      },
                      useBaseFriction: function () {
                        return g(0.68);
                      },
                      useBaseDuration: function () {
                        return m(i);
                      },
                      useFriction: g,
                      useDuration: m,
                    };
                    return h;
                  })(tp, tg, tm, th, j, 0),
                  tx = (function (t, e, n, r, i) {
                    let { reachedAny: o, removeOffset: u, constrain: a } = r;
                    function c(t) {
                      return t.concat().sort((t, e) => f(t) - f(e))[0];
                    }
                    function l(e, r) {
                      let i = [e, e + n, e - n];
                      if (!t) return e;
                      if (!r) return c(i);
                      let o = i.filter((t) => d(t) === r);
                      return o.length ? c(o) : m(i) - n;
                    }
                    return {
                      byDistance: function (n, r) {
                        let c = i.get() + n,
                          { index: s, distance: d } = (function (n) {
                            let r = t ? u(n) : a(n),
                              { index: i } = e
                                .map((t, e) => ({
                                  diff: l(t - r, 0),
                                  index: e,
                                }))
                                .sort((t, e) => f(t.diff) - f(e.diff))[0];
                            return { index: i, distance: r };
                          })(c),
                          p = !t && o(c);
                        if (!r || p) return { index: s, distance: n };
                        let m = n + l(e[s] - d, 0);
                        return { index: s, distance: m };
                      },
                      byIndex: function (t, n) {
                        let r = l(e[t] - i.get(), n);
                        return { index: t, distance: r };
                      },
                      shortcut: l,
                    };
                  })(N, ti, te, to, th),
                  tv = (function (t, e, n, r, i, o, u) {
                    function a(i) {
                      let a = i.distance,
                        c = i.index !== e.get();
                      o.add(a),
                        a &&
                          (r.duration()
                            ? t.start()
                            : (t.update(), t.render(1), t.update())),
                        c && (n.set(e.get()), e.set(i.index), u.emit("select"));
                    }
                    return {
                      distance: function (t, e) {
                        a(i.byDistance(t, e));
                      },
                      index: function (t, n) {
                        let r = e.clone().set(t);
                        a(i.byIndex(r.get(), n));
                      },
                    };
                  })(tf, tu, ta, ty, tx, th, u),
                  tb = (function (t) {
                    let { max: e, length: n } = t;
                    return {
                      get: function (t) {
                        return n ? -((t - e) / n) : 0;
                      },
                    };
                  })(to),
                  tE = v(),
                  tw = (function (t, e, n, r) {
                    let i;
                    let o = {},
                      u = null,
                      a = null,
                      c = !1;
                    return {
                      init: function () {
                        (i = new IntersectionObserver(
                          (t) => {
                            c ||
                              (t.forEach((t) => {
                                o[e.indexOf(t.target)] = t;
                              }),
                              (u = null),
                              (a = null),
                              n.emit("slidesInView"));
                          },
                          { root: t.parentElement, threshold: r }
                        )),
                          e.forEach((t) => i.observe(t));
                      },
                      destroy: function () {
                        i && i.disconnect(), (c = !0);
                      },
                      get: function (t = !0) {
                        if (t && u) return u;
                        if (!t && a) return a;
                        let e = y(o).reduce((e, n) => {
                          let r = parseInt(n),
                            { isIntersecting: i } = o[r];
                          return ((t && i) || (!t && !i)) && e.push(r), e;
                        }, []);
                        return t && (u = e), t || (a = e), e;
                      },
                    };
                  })(e, n, u, M),
                  { slideRegistry: tS } = (function (t, e, n, r, i, o) {
                    let { groupSlides: u } = i,
                      { min: a, max: c } = r;
                    return {
                      slideRegistry: (function () {
                        let r = u(o);
                        return 1 === n.length
                          ? [o]
                          : t && "keepSnaps" !== e
                          ? r.slice(a, c).map((t, e, n) => {
                              let r = e === g(n);
                              return e
                                ? r
                                  ? h(g(o) - m(n)[0] + 1, m(n)[0])
                                  : t
                                : h(m(n[0]) + 1);
                            })
                          : r;
                      })(),
                    };
                  })(J, P, ti, tr, W, tc),
                  tO = (function (t, e, n, r, i, o, u, c) {
                    let s = { passive: !0, capture: !0 },
                      f = 0;
                    function d(t) {
                      "Tab" === t.code && (f = new Date().getTime());
                    }
                    return {
                      init: function (p) {
                        c &&
                          (o.add(document, "keydown", d, !1),
                          e.forEach((e, d) => {
                            o.add(
                              e,
                              "focus",
                              (e) => {
                                (l(c) || c(p, e)) &&
                                  (function (e) {
                                    if (new Date().getTime() - f > 10) return;
                                    u.emit("slideFocusStart"),
                                      (t.scrollLeft = 0);
                                    let o = n.findIndex((t) => t.includes(e));
                                    a(o) &&
                                      (i.useDuration(0),
                                      r.index(o, 0),
                                      u.emit("slideFocus"));
                                  })(d);
                              },
                              s
                            );
                          }));
                      },
                    };
                  })(t, n, tS, tv, ty, tE, u, B),
                  tI = {
                    ownerDocument: r,
                    ownerWindow: i,
                    eventHandler: u,
                    containerRect: R,
                    slideRects: V,
                    animation: tf,
                    axis: $,
                    dragHandler: (function (
                      t,
                      e,
                      n,
                      r,
                      i,
                      o,
                      u,
                      a,
                      c,
                      s,
                      p,
                      m,
                      g,
                      h,
                      y,
                      E,
                      w,
                      S,
                      O
                    ) {
                      let { cross: I, direction: L } = t,
                        k = ["INPUT", "SELECT", "TEXTAREA"],
                        N = { passive: !1 },
                        j = v(),
                        D = v(),
                        F = b(50, 225).constrain(h.measure(20)),
                        M = { mouse: 300, touch: 400 },
                        A = { mouse: 500, touch: 600 },
                        C = y ? 43 : 25,
                        P = !1,
                        T = 0,
                        _ = 0,
                        H = !1,
                        B = !1,
                        z = !1,
                        R = !1;
                      function V(t) {
                        if (!x(t, r) && t.touches.length >= 2) return $(t);
                        let e = o.readPoint(t),
                          n = o.readPoint(t, I),
                          u = f(e - T),
                          c = f(n - _);
                        if (!B && !R && (!t.cancelable || !(B = u > c)))
                          return $(t);
                        let l = o.pointerMove(t);
                        u > E && (z = !0),
                          s.useFriction(0.3).useDuration(0.75),
                          a.start(),
                          i.add(L(l)),
                          t.preventDefault();
                      }
                      function $(t) {
                        let e = p.byDistance(0, !1).index !== m.get(),
                          n =
                            o.pointerUp(t) * (y ? A : M)[R ? "mouse" : "touch"],
                          r = (function (t, e) {
                            let n = m.add(-1 * d(t)),
                              r = p.byDistance(t, !y).distance;
                            return y || f(t) < F
                              ? r
                              : w && e
                              ? 0.5 * r
                              : p.byIndex(n.get(), 0).distance;
                          })(L(n), e),
                          i = (function (t, e) {
                            var n, r;
                            if (0 === t || 0 === e || f(t) <= f(e)) return 0;
                            let i = ((n = f(t)), (r = f(e)), f(n - r));
                            return f(i / t);
                          })(n, r);
                        (B = !1),
                          (H = !1),
                          D.clear(),
                          s.useDuration(C - 10 * i).useFriction(0.68 + i / 50),
                          c.distance(r, !y),
                          (R = !1),
                          g.emit("pointerUp");
                      }
                      function G(t) {
                        z &&
                          (t.stopPropagation(), t.preventDefault(), (z = !1));
                      }
                      return {
                        init: function (t) {
                          O &&
                            j
                              .add(e, "dragstart", (t) => t.preventDefault(), N)
                              .add(e, "touchmove", () => void 0, N)
                              .add(e, "touchend", () => void 0)
                              .add(e, "touchstart", a)
                              .add(e, "mousedown", a)
                              .add(e, "touchcancel", $)
                              .add(e, "contextmenu", $)
                              .add(e, "click", G, !0);
                          function a(a) {
                            (l(O) || O(t, a)) &&
                              (function (t) {
                                let a = x(t, r);
                                (R = a),
                                  (z = y && a && !t.buttons && P),
                                  (P = f(i.get() - u.get()) >= 2),
                                  (a && 0 !== t.button) ||
                                    (function (t) {
                                      let e = t.nodeName || "";
                                      return k.includes(e);
                                    })(t.target) ||
                                    ((H = !0),
                                    o.pointerDown(t),
                                    s.useFriction(0).useDuration(0),
                                    i.set(u),
                                    (function () {
                                      let t = R ? n : e;
                                      D.add(t, "touchmove", V, N)
                                        .add(t, "touchend", $)
                                        .add(t, "mousemove", V, N)
                                        .add(t, "mouseup", $);
                                    })(),
                                    (T = o.readPoint(t)),
                                    (_ = o.readPoint(t, I)),
                                    g.emit("pointerDown"));
                              })(a);
                          }
                        },
                        destroy: function () {
                          j.clear(), D.clear();
                        },
                        pointerDown: function () {
                          return H;
                        },
                      };
                    })(
                      $,
                      t,
                      r,
                      i,
                      th,
                      (function (t, e) {
                        let n, r;
                        function i(t) {
                          return t.timeStamp;
                        }
                        function o(n, r) {
                          let i = r || t.scroll,
                            o = `client${"x" === i ? "X" : "Y"}`;
                          return (x(n, e) ? n : n.touches[0])[o];
                        }
                        return {
                          pointerDown: function (t) {
                            return (n = t), (r = t), o(t);
                          },
                          pointerMove: function (t) {
                            let e = o(t) - o(r),
                              u = i(t) - i(n) > 170;
                            return (r = t), u && (n = t), e;
                          },
                          pointerUp: function (t) {
                            if (!n || !r) return 0;
                            let e = o(r) - o(n),
                              u = i(t) - i(n),
                              a = i(t) - i(r) > 170,
                              c = e / u;
                            return u && !a && f(c) > 0.1 ? c : 0;
                          },
                          readPoint: o,
                        };
                      })($, i),
                      tp,
                      tf,
                      tv,
                      ty,
                      tx,
                      tu,
                      u,
                      U,
                      D,
                      F,
                      C,
                      0,
                      H
                    ),
                    eventStore: tE,
                    percentOfView: U,
                    index: tu,
                    indexPrevious: ta,
                    limit: to,
                    location: tp,
                    offsetLocation: tg,
                    previousLocation: tm,
                    options: o,
                    resizeHandler: (function (t, e, n, r, i, o, u) {
                      let a, c;
                      let s = [t].concat(r),
                        d = [],
                        p = !1;
                      function m(t) {
                        return i.measureSize(u.measure(t));
                      }
                      return {
                        init: function (i) {
                          o &&
                            ((c = m(t)),
                            (d = r.map(m)),
                            (a = new ResizeObserver((n) => {
                              (l(o) || o(i, n)) &&
                                (function (n) {
                                  for (let o of n) {
                                    if (p) return;
                                    let n = o.target === t,
                                      u = r.indexOf(o.target),
                                      a = n ? c : d[u];
                                    if (f(m(n ? t : r[u]) - a) >= 0.5) {
                                      i.reInit(), e.emit("resize");
                                      break;
                                    }
                                  }
                                })(n);
                            })),
                            n.requestAnimationFrame(() => {
                              s.forEach((t) => a.observe(t));
                            }));
                        },
                        destroy: function () {
                          (p = !0), a && a.disconnect();
                        },
                      };
                    })(e, u, i, n, $, T, z),
                    scrollBody: ty,
                    scrollBounds: (function (t, e, n, r, i) {
                      let o = i.measure(10),
                        u = i.measure(50),
                        a = b(0.1, 0.99),
                        c = !1;
                      function l() {
                        return !!(
                          !c &&
                          t.reachedAny(n.get()) &&
                          t.reachedAny(e.get())
                        );
                      }
                      return {
                        shouldConstrain: l,
                        constrain: function (i) {
                          if (!l()) return;
                          let c = t.reachedMin(e.get()) ? "min" : "max",
                            s = f(t[c] - e.get()),
                            d = n.get() - e.get(),
                            p = a.constrain(s / u);
                          n.subtract(d * p),
                            !i &&
                              f(d) < o &&
                              (n.set(t.constrain(n.get())),
                              r.useDuration(25).useBaseFriction());
                        },
                        toggleActive: function (t) {
                          c = !t;
                        },
                      };
                    })(to, tg, th, ty, U),
                    scrollLooper: (function (t, e, n, r) {
                      let { reachedMin: i, reachedMax: o } = b(
                        e.min + 0.1,
                        e.max + 0.1
                      );
                      return {
                        loop: function (e) {
                          if (!(1 === e ? o(n.get()) : -1 === e && i(n.get())))
                            return;
                          let u = -1 * e * t;
                          r.forEach((t) => t.add(u));
                        },
                      };
                    })(te, to, tg, [tp, tg, tm, th]),
                    scrollProgress: tb,
                    scrollSnapList: ti.map(tb.get),
                    scrollSnaps: ti,
                    scrollTarget: tx,
                    scrollTo: tv,
                    slideLooper: (function (t, e, n, r, i, o, u, a, c) {
                      let l = p(i),
                        s = m(d(p(i).reverse(), u[0]), n, !1).concat(
                          m(d(l, e - u[0] - 1), -n, !0)
                        );
                      function f(t, e) {
                        return t.reduce((t, e) => t - i[e], e);
                      }
                      function d(t, e) {
                        return t.reduce(
                          (t, n) => (f(t, e) > 0 ? t.concat([n]) : t),
                          []
                        );
                      }
                      function m(i, u, l) {
                        let s = o.map((t, n) => ({
                          start: t - r[n] + 0.5 + u,
                          end: t + e - 0.5 + u,
                        }));
                        return i.map((e) => {
                          let r = l ? 0 : -n,
                            i = l ? n : 0,
                            o = s[e][l ? "end" : "start"];
                          return {
                            index: e,
                            loopPoint: o,
                            slideLocation: E(-1),
                            translate: w(t, c[e]),
                            target: () => (a.get() > o ? r : i),
                          };
                        });
                      }
                      return {
                        canLoop: function () {
                          return s.every(
                            ({ index: t }) =>
                              0.1 >=
                              f(
                                l.filter((e) => e !== t),
                                e
                              )
                          );
                        },
                        clear: function () {
                          s.forEach((t) => t.translate.clear());
                        },
                        loop: function () {
                          s.forEach((t) => {
                            let {
                                target: e,
                                translate: n,
                                slideLocation: r,
                              } = t,
                              i = e();
                            i !== r.get() && (n.to(i), r.set(i));
                          });
                        },
                        loopPoints: s,
                      };
                    })($, G, te, Z, X, K, ti, tg, n),
                    slideFocus: tO,
                    slidesHandler:
                      ((S = !1),
                      {
                        init: function (t) {
                          _ &&
                            (s = new MutationObserver((e) => {
                              !S &&
                                (l(_) || _(t, e)) &&
                                (function (e) {
                                  for (let n of e)
                                    if ("childList" === n.type) {
                                      t.reInit(), u.emit("slidesChanged");
                                      break;
                                    }
                                })(e);
                            })).observe(e, { childList: !0 });
                        },
                        destroy: function () {
                          s && s.disconnect(), (S = !0);
                        },
                      }),
                    slidesInView: tw,
                    slideIndexes: tc,
                    slideRegistry: tS,
                    slidesToScroll: W,
                    target: th,
                    translate: w($, e),
                  };
                return tI;
              })(t, o, u, L, k, n, F);
              return n.loop && !r.slideLooper.canLoop()
                ? e(Object.assign({}, n, { loop: !1 }))
                : r;
            })(z)),
            C([B, ...R.map(({ options: t }) => t)]).forEach((t) =>
              D.add(t, "change", $)
            ),
            z.active &&
              (r.translate.to(r.location.get()),
              r.animation.init(),
              r.slidesInView.init(),
              r.slideFocus.init(J),
              r.eventHandler.init(J),
              r.resizeHandler.init(J),
              r.slidesHandler.init(J),
              r.options.loop && r.slideLooper.loop(),
              o.offsetParent && u.length && r.dragHandler.init(J),
              (i = j.init(J, R))));
        }
        function $(t, e) {
          let n = q();
          G(), V(M({ startIndex: n }, t), e), F.emit("reInit");
        }
        function G() {
          r.dragHandler.destroy(),
            r.eventStore.clear(),
            r.translate.clear(),
            r.slideLooper.clear(),
            r.resizeHandler.destroy(),
            r.slidesHandler.destroy(),
            r.slidesInView.destroy(),
            r.animation.destroy(),
            j.destroy(),
            D.clear();
        }
        function U(t, e, n) {
          z.active &&
            !H &&
            (r.scrollBody
              .useBaseFriction()
              .useDuration(!0 === e ? 0 : z.duration),
            r.scrollTo.index(t, n || 0));
        }
        function q() {
          return r.index.get();
        }
        let J = {
          canScrollNext: function () {
            return r.index.add(1).get() !== q();
          },
          canScrollPrev: function () {
            return r.index.add(-1).get() !== q();
          },
          containerNode: function () {
            return o;
          },
          internalEngine: function () {
            return r;
          },
          destroy: function () {
            H || ((H = !0), D.clear(), G(), F.emit("destroy"), F.clear());
          },
          off: T,
          on: P,
          emit: _,
          plugins: function () {
            return i;
          },
          previousScrollSnap: function () {
            return r.indexPrevious.get();
          },
          reInit: $,
          rootNode: function () {
            return t;
          },
          scrollNext: function (t) {
            U(r.index.add(1).get(), t, -1);
          },
          scrollPrev: function (t) {
            U(r.index.add(-1).get(), t, 1);
          },
          scrollProgress: function () {
            return r.scrollProgress.get(r.location.get());
          },
          scrollSnapList: function () {
            return r.scrollSnapList;
          },
          scrollTo: U,
          selectedScrollSnap: q,
          slideNodes: function () {
            return u;
          },
          slidesInView: function () {
            return r.slidesInView.get();
          },
          slidesNotInView: function () {
            return r.slidesInView.get(!1);
          },
        };
        return V(e, n), setTimeout(() => F.emit("init"), 0), J;
      }
      function I(t = {}, e = []) {
        let n = (0, r.useRef)(t),
          i = (0, r.useRef)(e),
          [a, c] = (0, r.useState)(),
          [l, s] = (0, r.useState)(),
          f = (0, r.useCallback)(() => {
            a && a.reInit(n.current, i.current);
          }, [a]);
        return (
          (0, r.useEffect)(() => {
            o(n.current, t) || ((n.current = t), f());
          }, [t, f]),
          (0, r.useEffect)(() => {
            !(function (t, e) {
              if (t.length !== e.length) return !1;
              let n = u(t),
                r = u(e);
              return n.every((t, e) => o(t, r[e]));
            })(i.current, e) && ((i.current = e), f());
          }, [e, f]),
          (0, r.useEffect)(() => {
            if (
              "undefined" != typeof window &&
              window.document &&
              window.document.createElement &&
              l
            ) {
              O.globalOptions = I.globalOptions;
              let t = O(l, n.current, i.current);
              return c(t), () => t.destroy();
            }
            c(void 0);
          }, [l, c]),
          [s, a]
        );
      }
      (O.globalOptions = void 0), (I.globalOptions = void 0);
    },
  },
]);
