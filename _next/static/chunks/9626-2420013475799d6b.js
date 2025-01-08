"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9626],
  {
    4942: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(83997);
      function o(e, t, n) {
        return (
          (t = (0, r.Z)(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
    },
    89611: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      function r(e, t) {
        return (r = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
      }
    },
    83997: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(71002);
      function o(e) {
        var t = (function (e, t) {
          if ("object" != (0, r.Z)(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var o = n.call(e, t || "default");
            if ("object" != (0, r.Z)(o)) return o;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == (0, r.Z)(t) ? t : t + "";
      }
    },
    71002: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      function r(e) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
    },
    17428: function (e, t, n) {
      n.d(t, {
        s: function () {
          return tX;
        },
      });
      var r,
        o,
        i,
        a,
        u = n(85893),
        c = n(34926),
        l = n(4234),
        s = n(5490),
        d = n(15947),
        f = n(67294),
        m = n(97582),
        p = "right-scroll-bar-position",
        v = "width-before-scroll-bar";
      function h(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e;
      }
      var y = "undefined" != typeof window ? f.useLayoutEffect : f.useEffect,
        b = new WeakMap();
      function g(e, t) {
        var n,
          r,
          o,
          i =
            ((n = t || null),
            (r = function (t) {
              return e.forEach(function (e) {
                return h(e, t);
              });
            }),
            ((o = (0, f.useState)(function () {
              return {
                value: n,
                callback: r,
                facade: {
                  get current() {
                    return o.value;
                  },
                  set current(value) {
                    var e = o.value;
                    e !== value && ((o.value = value), o.callback(value, e));
                  },
                },
              };
            })[0]).callback = r),
            o.facade);
        return (
          y(
            function () {
              var t = b.get(i);
              if (t) {
                var n = new Set(t),
                  r = new Set(e),
                  o = i.current;
                n.forEach(function (e) {
                  r.has(e) || h(e, null);
                }),
                  r.forEach(function (e) {
                    n.has(e) || h(e, o);
                  });
              }
              b.set(i, e);
            },
            [e]
          ),
          i
        );
      }
      function x(e) {
        return e;
      }
      function w(e, t) {
        void 0 === t && (t = x);
        var n = [],
          r = !1;
        return {
          read: function () {
            if (r)
              throw Error(
                "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
              );
            return n.length ? n[n.length - 1] : e;
          },
          useMedium: function (e) {
            var o = t(e, r);
            return (
              n.push(o),
              function () {
                n = n.filter(function (e) {
                  return e !== o;
                });
              }
            );
          },
          assignSyncMedium: function (e) {
            for (r = !0; n.length; ) {
              var t = n;
              (n = []), t.forEach(e);
            }
            n = {
              push: function (t) {
                return e(t);
              },
              filter: function () {
                return n;
              },
            };
          },
          assignMedium: function (e) {
            r = !0;
            var t = [];
            if (n.length) {
              var o = n;
              (n = []), o.forEach(e), (t = n);
            }
            var i = function () {
                var n = t;
                (t = []), n.forEach(e);
              },
              a = function () {
                return Promise.resolve().then(i);
              };
            a(),
              (n = {
                push: function (e) {
                  t.push(e), a();
                },
                filter: function (e) {
                  return (t = t.filter(e)), n;
                },
              });
          },
        };
      }
      function E(e, t) {
        return void 0 === t && (t = x), w(e, t);
      }
      function k(e) {
        void 0 === e && (e = {});
        var t = w(null);
        return (t.options = (0, m.pi)({ async: !0, ssr: !1 }, e)), t;
      }
      var C = k(),
        M = function () {},
        S = f.forwardRef(function (e, t) {
          var n = f.useRef(null),
            r = f.useState({
              onScrollCapture: M,
              onWheelCapture: M,
              onTouchMoveCapture: M,
            }),
            o = r[0],
            i = r[1],
            a = e.forwardProps,
            u = e.children,
            c = e.className,
            l = e.removeScrollBar,
            s = e.enabled,
            d = e.shards,
            p = e.sideCar,
            v = e.noIsolation,
            h = e.inert,
            y = e.allowPinchZoom,
            b = e.as,
            x = e.gapMode,
            w = (0, m._T)(e, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as",
              "gapMode",
            ]),
            E = g([n, t]),
            k = (0, m.pi)((0, m.pi)({}, w), o);
          return f.createElement(
            f.Fragment,
            null,
            s &&
              f.createElement(p, {
                sideCar: C,
                removeScrollBar: l,
                shards: d,
                noIsolation: v,
                inert: h,
                setCallbacks: i,
                allowPinchZoom: !!y,
                lockRef: n,
                gapMode: x,
              }),
            a
              ? f.cloneElement(
                  f.Children.only(u),
                  (0, m.pi)((0, m.pi)({}, k), { ref: E })
                )
              : f.createElement(
                  void 0 === b ? "div" : b,
                  (0, m.pi)({}, k, { className: c, ref: E }),
                  u
                )
          );
        });
      (S.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (S.classNames = { fullWidth: v, zeroRight: p });
      var N = function (e) {
        var t = e.sideCar,
          n = (0, m._T)(e, ["sideCar"]);
        if (!t)
          throw Error(
            "Sidecar: please provide `sideCar` property to import the right car"
          );
        var r = t.read();
        if (!r) throw Error("Sidecar medium not found");
        return f.createElement(r, (0, m.pi)({}, n));
      };
      N.isSideCarExport = !0;
      var O = function () {
          var e = 0,
            t = null;
          return {
            add: function (r) {
              if (
                0 == e &&
                (t = (function () {
                  if (!document) return null;
                  var e = document.createElement("style");
                  e.type = "text/css";
                  var t = a || n.nc;
                  return t && e.setAttribute("nonce", t), e;
                })())
              ) {
                var o, i;
                (o = t).styleSheet
                  ? (o.styleSheet.cssText = r)
                  : o.appendChild(document.createTextNode(r)),
                  (i = t),
                  (
                    document.head || document.getElementsByTagName("head")[0]
                  ).appendChild(i);
              }
              e++;
            },
            remove: function () {
              --e ||
                !t ||
                (t.parentNode && t.parentNode.removeChild(t), (t = null));
            },
          };
        },
        R = function () {
          var e = O();
          return function (t, n) {
            f.useEffect(
              function () {
                return (
                  e.add(t),
                  function () {
                    e.remove();
                  }
                );
              },
              [t && n]
            );
          };
        },
        P = function () {
          var e = R();
          return function (t) {
            return e(t.styles, t.dynamic), null;
          };
        },
        I = { left: 0, top: 0, right: 0, gap: 0 },
        A = function (e) {
          return parseInt(e || "", 10) || 0;
        },
        T = function (e) {
          var t = window.getComputedStyle(document.body),
            n = t["padding" === e ? "paddingLeft" : "marginLeft"],
            r = t["padding" === e ? "paddingTop" : "marginTop"],
            o = t["padding" === e ? "paddingRight" : "marginRight"];
          return [A(n), A(r), A(o)];
        },
        j = function (e) {
          if ((void 0 === e && (e = "margin"), "undefined" == typeof window))
            return I;
          var t = T(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0]),
          };
        },
        F = P(),
        L = "data-scroll-locked",
        _ = function (e, t, n, r) {
          var o = e.left,
            i = e.top,
            a = e.right,
            u = e.gap;
          return (
            void 0 === n && (n = "margin"),
            "\n  ."
              .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
              .concat(r, ";\n   padding-right: ")
              .concat(u, "px ")
              .concat(r, ";\n  }\n  body[")
              .concat(L, "] {\n    overflow: hidden ")
              .concat(r, ";\n    overscroll-behavior: contain;\n    ")
              .concat(
                [
                  t && "position: relative ".concat(r, ";"),
                  "margin" === n &&
                    "\n    padding-left: "
                      .concat(o, "px;\n    padding-top: ")
                      .concat(i, "px;\n    padding-right: ")
                      .concat(
                        a,
                        "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: "
                      )
                      .concat(u, "px ")
                      .concat(r, ";\n    "),
                  "padding" === n &&
                    "padding-right: ".concat(u, "px ").concat(r, ";"),
                ]
                  .filter(Boolean)
                  .join(""),
                "\n  }\n  \n  ."
              )
              .concat(p, " {\n    right: ")
              .concat(u, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(v, " {\n    margin-right: ")
              .concat(u, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(p, " .")
              .concat(p, " {\n    right: 0 ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(v, " .")
              .concat(v, " {\n    margin-right: 0 ")
              .concat(r, ";\n  }\n  \n  body[")
              .concat(L, "] {\n    ")
              .concat("--removed-body-scroll-bar-size", ": ")
              .concat(u, "px;\n  }\n")
          );
        },
        D = function () {
          var e = parseInt(document.body.getAttribute(L) || "0", 10);
          return isFinite(e) ? e : 0;
        },
        W = function () {
          f.useEffect(function () {
            return (
              document.body.setAttribute(L, (D() + 1).toString()),
              function () {
                var e = D() - 1;
                e <= 0
                  ? document.body.removeAttribute(L)
                  : document.body.setAttribute(L, e.toString());
              }
            );
          }, []);
        },
        B = function (e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            o = void 0 === r ? "margin" : r;
          W();
          var i = f.useMemo(
            function () {
              return j(o);
            },
            [o]
          );
          return f.createElement(F, {
            styles: _(i, !t, o, n ? "" : "!important"),
          });
        },
        Z = !1;
      if ("undefined" != typeof window)
        try {
          var $ = Object.defineProperty({}, "passive", {
            get: function () {
              return (Z = !0), !0;
            },
          });
          window.addEventListener("test", $, $),
            window.removeEventListener("test", $, $);
        } catch (e) {
          Z = !1;
        }
      var z = !!Z && { passive: !1 },
        G = function (e, t) {
          if (!(e instanceof Element)) return !1;
          var n = window.getComputedStyle(e);
          return (
            "hidden" !== n[t] &&
            !(
              n.overflowY === n.overflowX &&
              "TEXTAREA" !== e.tagName &&
              "visible" === n[t]
            )
          );
        },
        U = function (e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                r instanceof ShadowRoot &&
                (r = r.host),
              q(e, r))
            ) {
              var o = Y(e, r);
              if (o[1] > o[2]) return !0;
            }
            r = r.parentNode;
          } while (r && r !== n.body);
          return !1;
        },
        q = function (e, t) {
          return "v" === e ? G(t, "overflowY") : G(t, "overflowX");
        },
        Y = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        H = function (e, t, n, r, o) {
          var i,
            a =
              ((i = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === i ? -1 : 1),
            u = a * r,
            c = n.target,
            l = t.contains(c),
            s = !1,
            d = u > 0,
            f = 0,
            m = 0;
          do {
            var p = Y(e, c),
              v = p[0],
              h = p[1] - p[2] - a * v;
            (v || h) && q(e, c) && ((f += h), (m += v)),
              c instanceof ShadowRoot ? (c = c.host) : (c = c.parentNode);
          } while (
            (!l && c !== document.body) ||
            (l && (t.contains(c) || t === c))
          );
          return (
            d && ((o && 1 > Math.abs(f)) || (!o && u > f))
              ? (s = !0)
              : !d && ((o && 1 > Math.abs(m)) || (!o && -u > m)) && (s = !0),
            s
          );
        },
        X = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        K = function (e) {
          return [e.deltaX, e.deltaY];
        },
        V = function (e) {
          return e && "current" in e ? e.current : e;
        },
        J = 0,
        Q = [],
        ee =
          ((r = function (e) {
            var t = f.useRef([]),
              n = f.useRef([0, 0]),
              r = f.useRef(),
              o = f.useState(J++)[0],
              i = f.useState(P)[0],
              a = f.useRef(e);
            f.useEffect(
              function () {
                a.current = e;
              },
              [e]
            ),
              f.useEffect(
                function () {
                  if (e.inert) {
                    document.body.classList.add(
                      "block-interactivity-".concat(o)
                    );
                    var t = (0, m.ev)(
                      [e.lockRef.current],
                      (e.shards || []).map(V),
                      !0
                    ).filter(Boolean);
                    return (
                      t.forEach(function (e) {
                        return e.classList.add(
                          "allow-interactivity-".concat(o)
                        );
                      }),
                      function () {
                        document.body.classList.remove(
                          "block-interactivity-".concat(o)
                        ),
                          t.forEach(function (e) {
                            return e.classList.remove(
                              "allow-interactivity-".concat(o)
                            );
                          });
                      }
                    );
                  }
                },
                [e.inert, e.lockRef.current, e.shards]
              );
            var u = f.useCallback(function (e, t) {
                if (
                  ("touches" in e && 2 === e.touches.length) ||
                  ("wheel" === e.type && e.ctrlKey)
                )
                  return !a.current.allowPinchZoom;
                var o,
                  i = X(e),
                  u = n.current,
                  c = "deltaX" in e ? e.deltaX : u[0] - i[0],
                  l = "deltaY" in e ? e.deltaY : u[1] - i[1],
                  s = e.target,
                  d = Math.abs(c) > Math.abs(l) ? "h" : "v";
                if ("touches" in e && "h" === d && "range" === s.type)
                  return !1;
                var f = U(d, s);
                if (!f) return !0;
                if (
                  (f ? (o = d) : ((o = "v" === d ? "h" : "v"), (f = U(d, s))),
                  !f)
                )
                  return !1;
                if (
                  (!r.current &&
                    "changedTouches" in e &&
                    (c || l) &&
                    (r.current = o),
                  !o)
                )
                  return !0;
                var m = r.current || o;
                return H(m, t, e, "h" === m ? c : l, !0);
              }, []),
              c = f.useCallback(function (e) {
                if (Q.length && Q[Q.length - 1] === i) {
                  var n = "deltaY" in e ? K(e) : X(e),
                    r = t.current.filter(function (t) {
                      var r;
                      return (
                        t.name === e.type &&
                        (t.target === e.target ||
                          e.target === t.shadowParent) &&
                        (r = t.delta)[0] === n[0] &&
                        r[1] === n[1]
                      );
                    })[0];
                  if (r && r.should) {
                    e.cancelable && e.preventDefault();
                    return;
                  }
                  if (!r) {
                    var o = (a.current.shards || [])
                      .map(V)
                      .filter(Boolean)
                      .filter(function (t) {
                        return t.contains(e.target);
                      });
                    (o.length > 0 ? u(e, o[0]) : !a.current.noIsolation) &&
                      e.cancelable &&
                      e.preventDefault();
                  }
                }
              }, []),
              l = f.useCallback(function (e, n, r, o) {
                var i = {
                  name: e,
                  delta: n,
                  target: r,
                  should: o,
                  shadowParent: (function (e) {
                    for (var t = null; null !== e; )
                      e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
                        (e = e.parentNode);
                    return t;
                  })(r),
                };
                t.current.push(i),
                  setTimeout(function () {
                    t.current = t.current.filter(function (e) {
                      return e !== i;
                    });
                  }, 1);
              }, []),
              s = f.useCallback(function (e) {
                (n.current = X(e)), (r.current = void 0);
              }, []),
              d = f.useCallback(function (t) {
                l(t.type, K(t), t.target, u(t, e.lockRef.current));
              }, []),
              p = f.useCallback(function (t) {
                l(t.type, X(t), t.target, u(t, e.lockRef.current));
              }, []);
            f.useEffect(function () {
              return (
                Q.push(i),
                e.setCallbacks({
                  onScrollCapture: d,
                  onWheelCapture: d,
                  onTouchMoveCapture: p,
                }),
                document.addEventListener("wheel", c, z),
                document.addEventListener("touchmove", c, z),
                document.addEventListener("touchstart", s, z),
                function () {
                  (Q = Q.filter(function (e) {
                    return e !== i;
                  })),
                    document.removeEventListener("wheel", c, z),
                    document.removeEventListener("touchmove", c, z),
                    document.removeEventListener("touchstart", s, z);
                }
              );
            }, []);
            var v = e.removeScrollBar,
              h = e.inert;
            return f.createElement(
              f.Fragment,
              null,
              h
                ? f.createElement(i, {
                    styles: "\n  .block-interactivity-"
                      .concat(
                        o,
                        " {pointer-events: none;}\n  .allow-interactivity-"
                      )
                      .concat(o, " {pointer-events: all;}\n"),
                  })
                : null,
              v ? f.createElement(B, { gapMode: e.gapMode }) : null
            );
          }),
          C.useMedium(r),
          N),
        et = f.forwardRef(function (e, t) {
          return f.createElement(S, (0, m.pi)({}, e, { ref: t, sideCar: ee }));
        });
      et.classNames = S.classNames;
      var en = n(59848),
        er = n(87462),
        eo = "data-focus-lock",
        ei = "data-focus-lock-disabled",
        ea = {
          width: "1px",
          height: "0px",
          padding: 0,
          overflow: "hidden",
          position: "fixed",
          top: "1px",
          left: "1px",
        },
        eu = E({}, function (e) {
          return { target: e.target, currentTarget: e.currentTarget };
        }),
        ec = E(),
        el = E(),
        es = k({ async: !0, ssr: "undefined" != typeof document }),
        ed = (0, f.createContext)(void 0),
        ef = [],
        em = f.forwardRef(function (e, t) {
          var n,
            r = f.useState(),
            o = r[0],
            i = r[1],
            a = f.useRef(),
            u = f.useRef(!1),
            c = f.useRef(null),
            l = f.useState({})[1],
            s = e.children,
            d = e.disabled,
            m = void 0 !== d && d,
            p = e.noFocusGuards,
            v = void 0 !== p && p,
            h = e.persistentFocus,
            y = e.crossFrame,
            b = e.autoFocus,
            x = (e.allowTextSelection, e.group),
            w = e.className,
            E = e.whiteList,
            k = e.hasPositiveIndices,
            C = e.shards,
            M = void 0 === C ? ef : C,
            S = e.as,
            N = e.lockProps,
            O = e.sideCar,
            R = e.returnFocus,
            P = void 0 !== R && R,
            I = e.focusOptions,
            A = e.onActivation,
            T = e.onDeactivation,
            j = f.useState({})[0],
            F = f.useCallback(
              function (e) {
                var t = e.captureFocusRestore;
                if (!c.current) {
                  var n,
                    r = null == (n = document) ? void 0 : n.activeElement;
                  (c.current = r), r !== document.body && (c.current = t(r));
                }
                a.current && A && A(a.current), (u.current = !0), l();
              },
              [A]
            ),
            L = f.useCallback(
              function () {
                (u.current = !1), T && T(a.current), l();
              },
              [T]
            ),
            _ = f.useCallback(
              function (e) {
                var t = c.current;
                if (t) {
                  var n = ("function" == typeof t ? t() : t) || document.body,
                    r = "function" == typeof P ? P(n) : P;
                  if (r) {
                    var o = "object" == typeof r ? r : void 0;
                    (c.current = null),
                      e
                        ? Promise.resolve().then(function () {
                            return n.focus(o);
                          })
                        : n.focus(o);
                  }
                }
              },
              [P]
            ),
            D = f.useCallback(function (e) {
              u.current && eu.useMedium(e);
            }, []),
            W = ec.useMedium,
            B = f.useCallback(function (e) {
              a.current !== e && ((a.current = e), i(e));
            }, []),
            Z = (0, er.Z)(
              (((n = {})[ei] = m && "disabled"), (n[eo] = x), n),
              void 0 === N ? {} : N
            ),
            $ = !0 !== v,
            z = $ && "tail" !== v,
            G = g([t, B]),
            U = f.useMemo(
              function () {
                return {
                  observed: a,
                  shards: M,
                  enabled: !m,
                  active: u.current,
                };
              },
              [m, u.current, M, o]
            );
          return f.createElement(
            f.Fragment,
            null,
            $ && [
              f.createElement("div", {
                key: "guard-first",
                "data-focus-guard": !0,
                tabIndex: m ? -1 : 0,
                style: ea,
              }),
              k
                ? f.createElement("div", {
                    key: "guard-nearest",
                    "data-focus-guard": !0,
                    tabIndex: m ? -1 : 1,
                    style: ea,
                  })
                : null,
            ],
            !m &&
              f.createElement(O, {
                id: j,
                sideCar: es,
                observed: o,
                disabled: m,
                persistentFocus: void 0 !== h && h,
                crossFrame: void 0 === y || y,
                autoFocus: void 0 === b || b,
                whiteList: E,
                shards: M,
                onActivation: F,
                onDeactivation: L,
                returnFocus: _,
                focusOptions: I,
                noFocusGuards: v,
              }),
            f.createElement(
              void 0 === S ? "div" : S,
              (0, er.Z)({ ref: G }, Z, { className: w, onBlur: W, onFocus: D }),
              f.createElement(ed.Provider, { value: U }, s)
            ),
            z &&
              f.createElement("div", {
                "data-focus-guard": !0,
                tabIndex: m ? -1 : 0,
                style: ea,
              })
          );
        });
      em.propTypes = {};
      var ep = n(89611),
        ev = n(4942),
        eh = function (e) {
          for (var t = Array(e.length), n = 0; n < e.length; ++n) t[n] = e[n];
          return t;
        },
        ey = function (e) {
          return Array.isArray(e) ? e : [e];
        },
        eb = function (e) {
          return Array.isArray(e) ? e[0] : e;
        },
        eg = function (e) {
          if (e.nodeType !== Node.ELEMENT_NODE) return !1;
          var t = window.getComputedStyle(e, null);
          return (
            !!t &&
            !!t.getPropertyValue &&
            ("none" === t.getPropertyValue("display") ||
              "hidden" === t.getPropertyValue("visibility"))
          );
        },
        ex = function (e) {
          return e.parentNode &&
            e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE
            ? e.parentNode.host
            : e.parentNode;
        },
        ew = function (e) {
          return e === document || (e && e.nodeType === Node.DOCUMENT_NODE);
        },
        eE = function (e, t) {
          var n,
            r = e.get(t);
          if (void 0 !== r) return r;
          var o =
            ((n = eE.bind(void 0, e)),
            !t || ew(t) || (!eg(t) && !t.hasAttribute("inert") && n(ex(t))));
          return e.set(t, o), o;
        },
        ek = function (e, t) {
          var n,
            r = e.get(t);
          if (void 0 !== r) return r;
          var o =
            ((n = ek.bind(void 0, e)), !t || !!ew(t) || (!!eN(t) && n(ex(t))));
          return e.set(t, o), o;
        },
        eC = function (e) {
          return e.dataset;
        },
        eM = function (e) {
          return "INPUT" === e.tagName;
        },
        eS = function (e) {
          return eM(e) && "radio" === e.type;
        },
        eN = function (e) {
          return ![!0, "true", ""].includes(
            e.getAttribute("data-no-autofocus")
          );
        },
        eO = function (e) {
          var t;
          return !!(
            e && (null === (t = eC(e)) || void 0 === t ? void 0 : t.focusGuard)
          );
        },
        eR = function (e) {
          return !eO(e);
        },
        eP = function (e) {
          return !!e;
        },
        eI = function (e, t) {
          var n = Math.max(0, e.tabIndex),
            r = Math.max(0, t.tabIndex),
            o = n - r,
            i = e.index - t.index;
          if (o) {
            if (!n) return 1;
            if (!r) return -1;
          }
          return o || i;
        },
        eA = function (e, t, n) {
          return eh(e)
            .map(function (e, t) {
              var r =
                e.tabIndex < 0 && !e.hasAttribute("tabindex") ? 0 : e.tabIndex;
              return {
                node: e,
                index: t,
                tabIndex:
                  n && -1 === r ? ((e.dataset || {}).focusGuard ? 0 : -1) : r,
              };
            })
            .filter(function (e) {
              return !t || e.tabIndex >= 0;
            })
            .sort(eI);
        },
        eT =
          "button:enabled,select:enabled,textarea:enabled,input:enabled,a[href],area[href],summary,iframe,object,embed,audio[controls],video[controls],[tabindex],[contenteditable],[autofocus]",
        ej = "".concat(eT, ", [data-focus-guard]"),
        eF = function (e, t) {
          return eh((e.shadowRoot || e).children).reduce(function (e, n) {
            return e.concat(n.matches(t ? ej : eT) ? [n] : [], eF(n));
          }, []);
        },
        eL = function (e, t) {
          var n;
          return e instanceof HTMLIFrameElement &&
            (null === (n = e.contentDocument) || void 0 === n ? void 0 : n.body)
            ? e_([e.contentDocument.body], t)
            : [e];
        },
        e_ = function (e, t) {
          return e.reduce(function (e, n) {
            var r,
              o = eF(n, t),
              i = (r = []).concat.apply(
                r,
                o.map(function (e) {
                  return eL(e, t);
                })
              );
            return e.concat(
              i,
              n.parentNode
                ? eh(n.parentNode.querySelectorAll(eT)).filter(function (e) {
                    return e === n;
                  })
                : []
            );
          }, []);
        },
        eD = function (e, t) {
          return eh(e)
            .filter(function (e) {
              return eE(t, e);
            })
            .filter(function (e) {
              return !(
                (eM(e) || "BUTTON" === e.tagName) &&
                ("hidden" === e.type || e.disabled)
              );
            });
        },
        eW = function (e, t) {
          return (
            void 0 === t && (t = new Map()),
            eh(e).filter(function (e) {
              return ek(t, e);
            })
          );
        },
        eB = function (e, t, n) {
          return eA(eD(e_(e, n), t), !0, n);
        },
        eZ = function (e, t) {
          return eA(eD(e_(e), t), !1);
        },
        e$ = function (e, t) {
          return e.shadowRoot
            ? e$(e.shadowRoot, t)
            : !!(
                void 0 !== Object.getPrototypeOf(e).contains &&
                Object.getPrototypeOf(e).contains.call(e, t)
              ) ||
                eh(e.children).some(function (e) {
                  var n;
                  if (e instanceof HTMLIFrameElement) {
                    var r =
                      null === (n = e.contentDocument) || void 0 === n
                        ? void 0
                        : n.body;
                    return !!r && e$(r, t);
                  }
                  return e$(e, t);
                });
        },
        ez = function (e) {
          try {
            return e();
          } catch (e) {
            return;
          }
        },
        eG = function (e) {
          if ((void 0 === e && (e = document), e && e.activeElement)) {
            var t = e.activeElement;
            return t.shadowRoot
              ? eG(t.shadowRoot)
              : t instanceof HTMLIFrameElement &&
                ez(function () {
                  return t.contentWindow.document;
                })
              ? eG(t.contentWindow.document)
              : t;
          }
        },
        eU = function (e) {
          void 0 === e && (e = document);
          var t = eG(e);
          return (
            !!t &&
            eh(e.querySelectorAll("[".concat("data-no-focus-lock", "]"))).some(
              function (e) {
                return e$(e, t);
              }
            )
          );
        },
        eq = function (e) {
          for (var t = new Set(), n = e.length, r = 0; r < n; r += 1)
            for (var o = r + 1; o < n; o += 1) {
              var i = e[r].compareDocumentPosition(e[o]);
              (i & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(o),
                (i & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
            }
          return e.filter(function (e, n) {
            return !t.has(n);
          });
        },
        eY = function (e) {
          return e.parentNode ? eY(e.parentNode) : e;
        },
        eH = function (e) {
          return ey(e)
            .filter(Boolean)
            .reduce(function (e, t) {
              var n = t.getAttribute(eo);
              return (
                e.push.apply(
                  e,
                  n
                    ? eq(
                        eh(
                          eY(t).querySelectorAll(
                            "["
                              .concat(eo, '="')
                              .concat(n, '"]:not([')
                              .concat(ei, '="disabled"])')
                          )
                        )
                      )
                    : [t]
                ),
                e
              );
            }, []);
        },
        eX = function (e, t) {
          return (
            void 0 === t && (t = eG(eb(e).ownerDocument)),
            !!t &&
              (!t.dataset || !t.dataset.focusGuard) &&
              eH(e).some(function (e) {
                var n;
                return (
                  e$(e, t) ||
                  ((n = t),
                  !!eh(e.querySelectorAll("iframe")).some(function (e) {
                    return e === n;
                  }))
                );
              })
          );
        },
        eK = function (e, t) {
          e &&
            ("focus" in e && e.focus(t),
            "contentWindow" in e && e.contentWindow && e.contentWindow.focus());
        },
        eV = function (e, t) {
          return (
            (eS(e) &&
              e.name &&
              t
                .filter(eS)
                .filter(function (t) {
                  return t.name === e.name;
                })
                .filter(function (e) {
                  return e.checked;
                })[0]) ||
            e
          );
        },
        eJ = function (e) {
          var t = new Set();
          return (
            e.forEach(function (n) {
              return t.add(eV(n, e));
            }),
            e.filter(function (e) {
              return t.has(e);
            })
          );
        },
        eQ = function (e) {
          return e[0] && e.length > 1 ? eV(e[0], e) : e[0];
        },
        e0 = function (e, t) {
          return e.indexOf(eV(t, e));
        },
        e1 = "NEW_FOCUS",
        e4 = function (e, t, n, r, o) {
          var i = e.length,
            a = e[0],
            u = e[i - 1],
            c = eO(r);
          if (!(r && e.indexOf(r) >= 0)) {
            var l = void 0 !== r ? n.indexOf(r) : -1,
              s = o ? n.indexOf(o) : l,
              d = o ? e.indexOf(o) : -1;
            if (-1 === l) return -1 !== d ? d : e1;
            if (-1 === d) return e1;
            var f = l - s,
              m = n.indexOf(a),
              p = n.indexOf(u),
              v = eJ(n),
              h = (void 0 !== r ? v.indexOf(r) : -1) - (o ? v.indexOf(o) : l);
            if ((!f && d >= 0) || 0 === t.length) return d;
            var y = e0(e, t[0]),
              b = e0(e, t[t.length - 1]);
            if (l <= m && c && Math.abs(f) > 1) return b;
            if (l >= p && c && Math.abs(f) > 1) return y;
            if (f && Math.abs(h) > 1) return d;
            if (l <= m) return b;
            if (l > p) return y;
            if (f) return Math.abs(f) > 1 ? d : (i + d + f) % i;
          }
        },
        e2 = function (e, t, n) {
          var r = eW(
            e
              .map(function (e) {
                return e.node;
              })
              .filter(function (e) {
                var t,
                  r =
                    null === (t = eC(e)) || void 0 === t ? void 0 : t.autofocus;
                return (
                  e.autofocus ||
                  (void 0 !== r && "false" !== r) ||
                  n.indexOf(e) >= 0
                );
              })
          );
          return r && r.length ? eQ(r) : eQ(eW(t));
        },
        e8 = function (e, t) {
          return (
            void 0 === t && (t = []),
            t.push(e),
            e.parentNode && e8(e.parentNode.host || e.parentNode, t),
            t
          );
        },
        e9 = function (e, t) {
          for (var n = e8(e), r = e8(t), o = 0; o < n.length; o += 1) {
            var i = n[o];
            if (r.indexOf(i) >= 0) return i;
          }
          return !1;
        },
        e5 = function (e, t, n) {
          var r = ey(e),
            o = ey(t),
            i = r[0],
            a = !1;
          return (
            o.filter(Boolean).forEach(function (e) {
              (a = e9(a || e, e) || a),
                n.filter(Boolean).forEach(function (e) {
                  var t = e9(i, e);
                  t && (a = !a || e$(t, a) ? t : e9(t, a));
                });
            }),
            a
          );
        },
        e3 = function (e, t) {
          return e.reduce(function (e, n) {
            return e.concat(
              eD(
                eh(n.querySelectorAll("[".concat("data-autofocus-inside", "]")))
                  .map(function (e) {
                    return e_([e]);
                  })
                  .reduce(function (e, t) {
                    return e.concat(t);
                  }, []),
                t
              )
            );
          }, []);
        },
        e6 = function (e, t) {
          var n = new Map();
          return (
            t.forEach(function (e) {
              return n.set(e.node, e);
            }),
            e
              .map(function (e) {
                return n.get(e);
              })
              .filter(eP)
          );
        },
        e7 = function (e, t) {
          var n = eG(ey(e).length > 0 ? document : eb(e).ownerDocument),
            r = eH(e).filter(eR),
            o = e5(n || e, e, r),
            i = new Map(),
            a = eZ(r, i),
            u = a.filter(function (e) {
              return eR(e.node);
            });
          if (u[0]) {
            var c = eZ([o], i).map(function (e) {
                return e.node;
              }),
              l = e6(c, u),
              s = l.map(function (e) {
                return e.node;
              }),
              d = l
                .filter(function (e) {
                  return e.tabIndex >= 0;
                })
                .map(function (e) {
                  return e.node;
                }),
              f = e4(s, d, c, n, t);
            if (f === e1) {
              var m = e2(a, d, e3(r, i)) || e2(a, s, e3(r, i));
              return m
                ? { node: m }
                : void console.warn(
                    "focus-lock: cannot find any node to move focus into"
                  );
            }
            return void 0 === f ? f : l[f];
          }
        },
        te = 0,
        tt = !1,
        tn = function (e, t, n) {
          void 0 === n && (n = {});
          var r = e7(e, t);
          if (!tt && r) {
            if (te > 2) {
              console.error(
                "FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"
              ),
                (tt = !0),
                setTimeout(function () {
                  tt = !1;
                }, 1);
              return;
            }
            te++, eK(r.node, n.focusOptions), te--;
          }
        };
      function tr(e) {
        if (!e) return null;
        if ("undefined" == typeof WeakRef)
          return function () {
            return e || null;
          };
        var t = e ? new WeakRef(e) : null;
        return function () {
          return (null == t ? void 0 : t.deref()) || null;
        };
      }
      var to = function (e) {
          if (!e) return null;
          for (var t = [], n = e; n && n !== document.body; )
            t.push({
              current: tr(n),
              parent: tr(n.parentElement),
              left: tr(n.previousElementSibling),
              right: tr(n.nextElementSibling),
            }),
              (n = n.parentElement);
          return { element: tr(e), stack: t, ownerDocument: e.ownerDocument };
        },
        ti = function (e) {
          if (e)
            for (
              var t,
                n,
                r,
                o,
                i,
                a = e.stack,
                u = e.ownerDocument,
                c = new Map(),
                l = 0;
              l < a.length;
              l++
            ) {
              var s = a[l],
                d =
                  null === (t = s.parent) || void 0 === t ? void 0 : t.call(s);
              if (d && u.contains(d)) {
                for (
                  var f =
                      null === (n = s.left) || void 0 === n
                        ? void 0
                        : n.call(s),
                    m = s.current(),
                    p = d.contains(m) ? m : void 0,
                    v =
                      null === (r = s.right) || void 0 === r
                        ? void 0
                        : r.call(s),
                    h = eB([d], c),
                    y =
                      null !==
                        (i =
                          null !==
                            (o =
                              null != p
                                ? p
                                : null == f
                                ? void 0
                                : f.nextElementSibling) && void 0 !== o
                            ? o
                            : v) && void 0 !== i
                        ? i
                        : f;
                  y;

                ) {
                  for (var b = 0; b < h.length; b++) {
                    var g = h[b];
                    if (null == y ? void 0 : y.contains(g.node)) return g.node;
                  }
                  y = y.nextElementSibling;
                }
                if (h.length) return h[0].node;
              }
            }
        },
        ta = function (e) {
          var t = to(e);
          return function () {
            return ti(t);
          };
        },
        tu = function (e) {
          var t = eH(e).filter(eR),
            n = eA(e_([e5(e, e, t)], !0), !0, !0),
            r = e_(t, !1);
          return n.map(function (e) {
            var t = e.node;
            return {
              node: t,
              index: e.index,
              lockItem: r.indexOf(t) >= 0,
              guard: eO(t),
            };
          });
        },
        tc = function (e, t, n) {
          if (!e || !t) return console.error("no element or scope given"), {};
          var r = ey(t);
          if (
            r.every(function (t) {
              return !e$(t, e);
            })
          )
            return (
              console.error("Active element is not contained in the scope"), {}
            );
          var o = n ? eB(r, new Map()) : eZ(r, new Map()),
            i = o.findIndex(function (t) {
              return t.node === e;
            });
          if (-1 !== i)
            return {
              prev: o[i - 1],
              next: o[i + 1],
              first: o[0],
              last: o[o.length - 1],
            };
        },
        tl = function (e, t) {
          var n = t ? eB(ey(e), new Map()) : eZ(ey(e), new Map());
          return { first: n[0], last: n[n.length - 1] };
        },
        ts = function (e, t, n) {
          void 0 === t && (t = {});
          var r,
            o =
              ((r = t),
              Object.assign(
                { scope: document.body, cycle: !0, onlyTabbable: !0 },
                r
              )),
            i = tc(e, o.scope, o.onlyTabbable);
          if (i) {
            var a = n(i, o.cycle);
            a && eK(a.node, o.focusOptions);
          }
        },
        td = function (e, t, n) {
          var r,
            o = tl(e, null === (r = t.onlyTabbable) || void 0 === r || r)[n];
          o && eK(o.node, t.focusOptions);
        };
      function tf(e) {
        setTimeout(e, 1);
      }
      var tm = function (e) {
          return e && "current" in e ? e.current : e;
        },
        tp = function () {
          return document && document.activeElement === document.body;
        },
        tv = null,
        th = null,
        ty = function () {
          return null;
        },
        tb = null,
        tg = !1,
        tx = !1,
        tw = function (e, t) {
          tb = { observerNode: e, portaledElement: t };
        };
      function tE(e, t, n, r) {
        var o = null,
          i = e;
        do {
          var a = r[i];
          if (a.guard) a.node.dataset.focusAutoGuard && (o = a);
          else if (a.lockItem) {
            if (i !== e) return;
            o = null;
          } else break;
        } while ((i += n) !== t);
        o && (o.node.tabIndex = 0);
      }
      var tk = function (e) {
          return eZ(e, new Map());
        },
        tC = function () {
          var e = !1;
          if (tv) {
            var t = tv,
              n = t.observed,
              r = t.persistentFocus,
              o = t.autoFocus,
              i = t.shards,
              a = t.crossFrame,
              u = t.focusOptions,
              c = t.noFocusGuards,
              l = n || (tb && tb.portaledElement);
            if (
              tp() &&
              th &&
              (!document.body.contains(th) ||
                !tk([(f = th).parentNode]).some(function (e) {
                  return e.node === f;
                }))
            ) {
              th = null;
              var s = ty();
              s && s.focus();
            }
            var d = document && document.activeElement;
            if (l) {
              var f,
                m = [l].concat(i.map(tm).filter(Boolean));
              if (
                ((!d ||
                  (
                    tv.whiteList ||
                    function () {
                      return !0;
                    }
                  )(d)) &&
                  (r ||
                    (function () {
                      if (!(a ? !!tg : "meanwhile" === tg) || !c || !th || tx)
                        return !1;
                      var e = tk(m),
                        t = e.findIndex(function (e) {
                          return e.node === th;
                        });
                      return 0 === t || t === e.length - 1;
                    })() ||
                    !(tp() || eU()) ||
                    (!th && o)) &&
                  (l &&
                    !(
                      eX(m) ||
                      (d &&
                        m.some(function (e) {
                          return (function e(t, n, r) {
                            return (
                              n &&
                              ((n.host === t &&
                                (!n.activeElement ||
                                  r.contains(n.activeElement))) ||
                                (n.parentNode && e(t, n.parentNode, r)))
                            );
                          })(d, e, e);
                        })) ||
                      (tb && tb.portaledElement === d)
                    ) &&
                    (document && !th && d && !o
                      ? (d.blur && d.blur(), document.body.focus())
                      : ((e = tn(m, th, { focusOptions: u })), (tb = {}))),
                  (tg = !1),
                  (ty = ta((th = document && document.activeElement)))),
                document &&
                  d !== document.activeElement &&
                  document.querySelector("[data-focus-auto-guard]"))
              ) {
                var p = document && document.activeElement,
                  v = tu(m),
                  h = v
                    .map(function (e) {
                      return e.node;
                    })
                    .indexOf(p);
                h > -1 &&
                  (v
                    .filter(function (e) {
                      var t = e.guard,
                        n = e.node;
                      return t && n.dataset.focusAutoGuard;
                    })
                    .forEach(function (e) {
                      return e.node.removeAttribute("tabIndex");
                    }),
                  tE(h, v.length, 1, v),
                  tE(h, -1, -1, v));
              }
            }
          }
          return e;
        },
        tM = function (e) {
          tC() && e && (e.stopPropagation(), e.preventDefault());
        },
        tS = function () {
          return tf(tC);
        },
        tN = function () {
          tx = !0;
        },
        tO = function () {
          (tx = !1),
            (tg = "just"),
            tf(function () {
              tg = "meanwhile";
            });
        },
        tR = function () {
          document.addEventListener("focusin", tM),
            document.addEventListener("focusout", tS),
            window.addEventListener("focus", tN),
            window.addEventListener("blur", tO);
        },
        tP = function () {
          document.removeEventListener("focusin", tM),
            document.removeEventListener("focusout", tS),
            window.removeEventListener("focus", tN),
            window.removeEventListener("blur", tO);
        },
        tI = {
          moveFocusInside: tn,
          focusInside: eX,
          focusNextElement: function (e, t) {
            void 0 === t && (t = {}),
              ts(e, t, function (e, t) {
                var n = e.next,
                  r = e.first;
                return n || (t && r);
              });
          },
          focusPrevElement: function (e, t) {
            void 0 === t && (t = {}),
              ts(e, t, function (e, t) {
                var n = e.prev,
                  r = e.last;
                return n || (t && r);
              });
          },
          focusFirstElement: function (e, t) {
            void 0 === t && (t = {}), td(e, t, "first");
          },
          focusLastElement: function (e, t) {
            void 0 === t && (t = {}), td(e, t, "last");
          },
          captureFocusRestore: ta,
        };
      eu.assignSyncMedium(function (e) {
        var t = e.target,
          n = e.currentTarget;
        n.contains(t) || tw(n, t);
      }),
        ec.assignMedium(tS),
        el.assignMedium(function (e) {
          return e(tI);
        });
      var tA = ((o = function (e) {
          return e.filter(function (e) {
            return !e.disabled;
          });
        }),
        (i = function (e) {
          var t = e.slice(-1)[0];
          t && !tv && tR();
          var n = tv,
            r = n && t && t.id === n.id;
          (tv = t),
            !n ||
              r ||
              (n.onDeactivation(),
              e.filter(function (e) {
                return e.id === n.id;
              }).length || n.returnFocus(!t)),
            t
              ? ((th = null),
                (r && n.observed === t.observed) || t.onActivation(tI),
                tC(!0),
                tf(tC))
              : (tP(), (th = null));
        }),
        function (e) {
          var t,
            n = [];
          function r() {
            i(
              (t = o(
                n.map(function (e) {
                  return e.props;
                })
              ))
            );
          }
          var a = (function (o) {
            function i() {
              return o.apply(this, arguments) || this;
            }
            (i.prototype = Object.create(o.prototype)),
              (i.prototype.constructor = i),
              (0, ep.Z)(i, o),
              (i.peek = function () {
                return t;
              });
            var a = i.prototype;
            return (
              (a.componentDidMount = function () {
                n.push(this), r();
              }),
              (a.componentDidUpdate = function () {
                r();
              }),
              (a.componentWillUnmount = function () {
                var e = n.indexOf(this);
                n.splice(e, 1), r();
              }),
              (a.render = function () {
                return f.createElement(e, this.props);
              }),
              i
            );
          })(f.PureComponent);
          return (
            (0, ev.Z)(
              a,
              "displayName",
              "SideEffect(" + (e.displayName || e.name || "Component") + ")"
            ),
            a
          );
        })(function () {
          return null;
        }),
        tT = f.forwardRef(function (e, t) {
          return f.createElement(em, (0, er.Z)({ sideCar: tA, ref: t }, e));
        }),
        tj = em.propTypes || {};
      tj.sideCar,
        (function (e, t) {
          if (null != e) {
            var n = {};
            for (var r in e)
              if ({}.hasOwnProperty.call(e, r)) {
                if (t.includes(r)) continue;
                n[r] = e[r];
              }
          }
        })(tj, ["sideCar"]),
        (tT.propTypes = {});
      var tF = n(90191);
      let tL = (e) => e.offsetWidth > 0 && e.offsetHeight > 0,
        t_ = tT.default ?? tT,
        tD = (e) => {
          let {
              initialFocusRef: t,
              finalFocusRef: n,
              contentRef: r,
              restoreFocus: o,
              children: i,
              isDisabled: a,
              autoFocus: c,
              persistentFocus: l,
              lockFocusAcrossFrames: s,
            } = e,
            d = (0, f.useCallback)(() => {
              t?.current
                ? t.current.focus()
                : r?.current &&
                  0 ===
                    (function (e) {
                      let t = Array.from(
                        e.querySelectorAll(
                          "input:not(:disabled):not([disabled]),select:not(:disabled):not([disabled]),textarea:not(:disabled):not([disabled]),embed,iframe,object,a[href],area[href],button:not(:disabled):not([disabled]),[tabindex],audio[controls],video[controls],*[tabindex]:not([aria-disabled]),*[contenteditable]"
                        )
                      );
                      return (
                        t.unshift(e), t.filter((e) => (0, tF.EB)(e) && tL(e))
                      );
                    })(r.current).length &&
                  requestAnimationFrame(() => {
                    r.current?.focus();
                  });
            }, [t, r]),
            m = (0, f.useCallback)(() => {
              n?.current?.focus();
            }, [n]),
            p = o && !n;
          return (0, u.jsx)(t_, {
            crossFrame: s,
            persistentFocus: l,
            autoFocus: c,
            disabled: a,
            onActivation: d,
            onDeactivation: m,
            returnFocus: p,
            children: i,
          });
        };
      function tW(e) {
        let {
            autoFocus: t,
            trapFocus: n,
            dialogRef: r,
            initialFocusRef: o,
            blockScrollOnMount: i,
            allowPinchZoom: a,
            finalFocusRef: c,
            returnFocusOnClose: l,
            preserveScrollBarGap: m,
            lockFocusAcrossFrames: p,
            isOpen: v,
          } = (0, s.vR)(),
          [h, y] = (0, d.oO)();
        (0, f.useEffect)(() => {
          !h && y && setTimeout(y);
        }, [h, y]);
        let b = (0, en.$)(r, v);
        return (0, u.jsx)(tD, {
          autoFocus: t,
          isDisabled: !n,
          initialFocusRef: o,
          finalFocusRef: c,
          restoreFocus: l,
          contentRef: r,
          lockFocusAcrossFrames: p,
          children: (0, u.jsx)(et, {
            removeScrollBar: !m,
            allowPinchZoom: a,
            enabled: 1 === b && i,
            forwardProps: !0,
            children: e.children,
          }),
        });
      }
      tD.displayName = "FocusLock";
      var tB = n(65820),
        tZ = n(33654),
        t$ = n(82145);
      let tz = {
          exit: { duration: 0.15, ease: t$.Lj.easeInOut },
          enter: { type: "spring", damping: 25, stiffness: 180 },
        },
        tG = {
          exit: ({
            direction: e,
            transition: t,
            transitionEnd: n,
            delay: r,
          }) => {
            let { exit: o } = (0, t$.js)({ direction: e });
            return {
              ...o,
              transition: t?.exit ?? t$.p$.exit(tz.exit, r),
              transitionEnd: n?.exit,
            };
          },
          enter: ({
            direction: e,
            transitionEnd: t,
            transition: n,
            delay: r,
          }) => {
            let { enter: o } = (0, t$.js)({ direction: e });
            return {
              ...o,
              transition: n?.enter ?? t$.p$.enter(tz.enter, r),
              transitionEnd: t?.enter,
            };
          },
        },
        tU = (0, f.forwardRef)(function (e, t) {
          let {
              direction: n = "right",
              style: r,
              unmountOnExit: o,
              in: i,
              className: a,
              transition: l,
              transitionEnd: s,
              delay: d,
              motionProps: f,
              animatePresenceProps: m,
              ...p
            } = e,
            v = Object.assign(
              { position: "fixed" },
              (0, t$.js)({ direction: n }).position,
              r
            ),
            h = !o || (i && o),
            y = i || o ? "enter" : "exit",
            b = { transitionEnd: s, transition: l, direction: n, delay: d };
          return (0,
          u.jsx)(tB.M, { ...m, custom: b, children: h && (0, u.jsx)(tZ.E.div, { ...p, ref: t, initial: "exit", className: (0, c.cx)("chakra-slide", a), animate: y, exit: "exit", custom: b, variants: tG, style: v, ...f }) });
        });
      tU.displayName = "Slide";
      var tq = n(53882),
        tY = n(49381);
      let tH = (0, tq.m)(tU),
        tX = (0, tY.G)((e, t) => {
          let {
              className: n,
              children: r,
              motionProps: o,
              containerProps: i,
              ...a
            } = e,
            {
              getDialogProps: d,
              getDialogContainerProps: f,
              isOpen: m,
            } = (0, s.vR)(),
            p = d(a, t),
            v = f(i),
            h = (0, c.cx)("chakra-modal__content", n),
            y = (0, s.I_)(),
            b = {
              display: "flex",
              flexDirection: "column",
              position: "relative",
              width: "100%",
              outline: 0,
              ...y.dialog,
            },
            g = {
              display: "flex",
              width: "100vw",
              height: "$100vh",
              position: "fixed",
              left: 0,
              top: 0,
              ...y.dialogContainer,
            },
            { placement: x } = (0, l.M$)();
          return (0, u.jsx)(tW, {
            children: (0, u.jsx)(tq.m.div, {
              ...v,
              className: "chakra-modal__content-container",
              __css: g,
              children: (0, u.jsx)(tH, {
                motionProps: o,
                direction: x,
                in: m,
                className: h,
                ...p,
                __css: b,
                children: r,
              }),
            }),
          });
        });
      tX.displayName = "DrawerContent";
    },
    4234: function (e, t, n) {
      n.d(t, {
        M$: function () {
          return c;
        },
        dy: function () {
          return s;
        },
      });
      var r = n(85893),
        o = n(52110),
        i = n(5490),
        a = n(37984);
      let [u, c] = (0, o.k)(),
        l = {
          start: { ltr: "left", rtl: "right" },
          end: { ltr: "right", rtl: "left" },
        };
      function s(e) {
        let {
            isOpen: t,
            onClose: n,
            placement: o = "right",
            children: c,
            ...s
          } = e,
          d = (0, a.F)(),
          f = d.components?.Drawer,
          m = (function (e, t) {
            if (e) return l[e]?.[t] ?? e;
          })(o, d.direction);
        return (0, r.jsx)(u, {
          value: { placement: m },
          children: (0, r.jsx)(i.u_, {
            isOpen: t,
            onClose: n,
            styleConfig: f,
            ...s,
            children: c,
          }),
        });
      }
    },
    70010: function (e, t, n) {
      n.d(t, {
        f: function () {
          return l;
        },
      });
      var r = n(85893),
        o = n(34926),
        i = n(67294),
        a = n(5490),
        u = n(49381),
        c = n(53882);
      let l = (0, u.G)((e, t) => {
        let { className: n, ...u } = e,
          { bodyId: l, setBodyMounted: s } = (0, a.vR)();
        (0, i.useEffect)(() => (s(!0), () => s(!1)), [s]);
        let d = (0, o.cx)("chakra-modal__body", n),
          f = (0, a.I_)();
        return (0, r.jsx)(c.m.div, {
          ref: t,
          className: d,
          id: l,
          ...u,
          __css: f.body,
        });
      });
      l.displayName = "ModalBody";
    },
    59848: function (e, t, n) {
      n.d(t, {
        $: function () {
          return l;
        },
        m: function () {
          return c;
        },
      });
      var r = n(67294),
        o = Object.defineProperty,
        i = (e, t, n) =>
          t in e
            ? o(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        a = (e, t, n) => (i(e, "symbol" != typeof t ? t + "" : t, n), n);
      class u {
        constructor() {
          a(this, "modals"), (this.modals = new Set());
        }
        add(e) {
          return this.modals.add(e), this.modals.size;
        }
        remove(e) {
          this.modals.delete(e);
        }
        isTopModal(e) {
          return !!e && e === Array.from(this.modals)[this.modals.size - 1];
        }
      }
      let c = new u();
      function l(e, t) {
        let [n, o] = (0, r.useState)(0);
        return (
          (0, r.useEffect)(() => {
            let n = e.current;
            if (n)
              return (
                t && o(c.add(n)),
                () => {
                  c.remove(n), o(0);
                }
              );
          }, [t, e]),
          n
        );
      }
    },
    34614: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return p;
        },
      });
      var r = n(85893),
        o = n(34926),
        i = n(33654),
        a = n(5490),
        u = n(65820),
        c = n(67294),
        l = n(82145);
      let s = {
        initial: "exit",
        animate: "enter",
        exit: "exit",
        variants: {
          enter: ({ transition: e, transitionEnd: t, delay: n } = {}) => ({
            opacity: 1,
            transition: e?.enter ?? l.p$.enter(l.Sh.enter, n),
            transitionEnd: t?.enter,
          }),
          exit: ({ transition: e, transitionEnd: t, delay: n } = {}) => ({
            opacity: 0,
            transition: e?.exit ?? l.p$.exit(l.Sh.exit, n),
            transitionEnd: t?.exit,
          }),
        },
      };
      (0, c.forwardRef)(function (e, t) {
        let {
            unmountOnExit: n,
            in: a,
            className: c,
            transition: l,
            transitionEnd: d,
            delay: f,
            animatePresenceProps: m,
            ...p
          } = e,
          v = a || n ? "enter" : "exit",
          h = !n || (a && n),
          y = { transition: l, transitionEnd: d, delay: f };
        return (0,
        r.jsx)(u.M, { ...m, custom: y, children: h && (0, r.jsx)(i.E.div, { ref: t, className: (0, o.cx)("chakra-fade", c), custom: y, ...s, animate: v, ...p }) });
      }).displayName = "Fade";
      var d = n(53882),
        f = n(49381);
      let m = (0, d.m)(i.E.div),
        p = (0, f.G)((e, t) => {
          let { className: n, transition: i, motionProps: u, ...c } = e,
            l = (0, o.cx)("chakra-modal__overlay", n),
            d = {
              pos: "fixed",
              left: "0",
              top: "0",
              w: "100vw",
              h: "100vh",
              ...(0, a.I_)().overlay,
            },
            { motionPreset: f } = (0, a.vR)(),
            p = "none" === f ? {} : s;
          return (0, r.jsx)(m, {
            ...(u || p),
            __css: d,
            ref: t,
            className: l,
            ...c,
          });
        });
      p.displayName = "ModalOverlay";
    },
    5490: function (e, t, n) {
      n.d(t, {
        u_: function () {
          return k;
        },
        vR: function () {
          return E;
        },
        I_: function () {
          return x;
        },
      });
      var r = n(85893),
        o = n(52110),
        i = n(65820),
        a = n(29062),
        u = n(68928),
        c = new WeakMap(),
        l = new WeakMap(),
        s = {},
        d = 0,
        f = function (e) {
          return e && (e.host || f(e.parentNode));
        },
        m = function (e, t, n, r) {
          var o = (Array.isArray(e) ? e : [e])
            .map(function (e) {
              if (t.contains(e)) return e;
              var n = f(e);
              return n && t.contains(n)
                ? n
                : (console.error(
                    "aria-hidden",
                    e,
                    "in not contained inside",
                    t,
                    ". Doing nothing"
                  ),
                  null);
            })
            .filter(function (e) {
              return !!e;
            });
          s[n] || (s[n] = new WeakMap());
          var i = s[n],
            a = [],
            u = new Set(),
            m = new Set(o),
            p = function (e) {
              !e || u.has(e) || (u.add(e), p(e.parentNode));
            };
          o.forEach(p);
          var v = function (e) {
            !e ||
              m.has(e) ||
              Array.prototype.forEach.call(e.children, function (e) {
                if (u.has(e)) v(e);
                else
                  try {
                    var t = e.getAttribute(r),
                      o = null !== t && "false" !== t,
                      s = (c.get(e) || 0) + 1,
                      d = (i.get(e) || 0) + 1;
                    c.set(e, s),
                      i.set(e, d),
                      a.push(e),
                      1 === s && o && l.set(e, !0),
                      1 === d && e.setAttribute(n, "true"),
                      o || e.setAttribute(r, "true");
                  } catch (t) {
                    console.error("aria-hidden: cannot operate on ", e, t);
                  }
              });
          };
          return (
            v(t),
            u.clear(),
            d++,
            function () {
              a.forEach(function (e) {
                var t = c.get(e) - 1,
                  o = i.get(e) - 1;
                c.set(e, t),
                  i.set(e, o),
                  t || (l.has(e) || e.removeAttribute(r), l.delete(e)),
                  o || e.removeAttribute(n);
              }),
                --d ||
                  ((c = new WeakMap()),
                  (c = new WeakMap()),
                  (l = new WeakMap()),
                  (s = {}));
            }
          );
        },
        p = function (e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var r = Array.from(Array.isArray(e) ? e : [e]),
            o =
              t ||
              ("undefined" == typeof document
                ? null
                : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
          return o
            ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
              m(r, o, n, "aria-hidden"))
            : function () {
                return null;
              };
        },
        v = n(67294),
        h = n(59848),
        y = n(33284),
        b = n(64317);
      let [g, x] = (0, o.k)({
          name: "ModalStylesContext",
          errorMessage:
            "useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Modal />\" ",
        }),
        [w, E] = (0, o.k)({
          strict: !0,
          name: "ModalContext",
          errorMessage:
            "useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`",
        }),
        k = (e) => {
          let t = {
              scrollBehavior: "outside",
              autoFocus: !0,
              trapFocus: !0,
              returnFocusOnClose: !0,
              blockScrollOnMount: !0,
              allowPinchZoom: !1,
              preserveScrollBarGap: !0,
              motionPreset: "scale",
              ...e,
              lockFocusAcrossFrames: e.lockFocusAcrossFrames || !0,
            },
            {
              portalProps: n,
              children: o,
              autoFocus: c,
              trapFocus: l,
              initialFocusRef: s,
              finalFocusRef: d,
              returnFocusOnClose: f,
              blockScrollOnMount: m,
              allowPinchZoom: x,
              preserveScrollBarGap: E,
              motionPreset: k,
              lockFocusAcrossFrames: C,
              animatePresenceProps: M,
              onCloseComplete: S,
            } = t,
            N = (0, b.j)("Modal", t),
            O = {
              ...(function (e) {
                let {
                    isOpen: t,
                    onClose: n,
                    id: r,
                    closeOnOverlayClick: o = !0,
                    closeOnEsc: i = !0,
                    useInert: c = !0,
                    onOverlayClick: l,
                    onEsc: s,
                  } = e,
                  d = (0, v.useRef)(null),
                  f = (0, v.useRef)(null),
                  [m, y, b] = (function (e, ...t) {
                    let n = (0, v.useId)(),
                      r = e || n;
                    return (0, v.useMemo)(
                      () => t.map((e) => `${e}-${r}`),
                      [r, t]
                    );
                  })(
                    r,
                    "chakra-modal",
                    "chakra-modal--header",
                    "chakra-modal--body"
                  );
                !(function (e, t) {
                  let n = e.current;
                  (0, v.useEffect)(() => {
                    if (e.current && t) return p(e.current);
                  }, [t, e, n]);
                })(d, t && c);
                let g = (0, h.$)(d, t),
                  x = (0, v.useRef)(null),
                  w = (0, v.useCallback)((e) => {
                    x.current = e.target;
                  }, []),
                  E = (0, v.useCallback)(
                    (e) => {
                      "Escape" === e.key &&
                        (e.stopPropagation(), i && n?.(), s?.());
                    },
                    [i, n, s]
                  ),
                  [k, C] = (0, v.useState)(!1),
                  [M, S] = (0, v.useState)(!1),
                  N = (0, v.useCallback)(
                    (e = {}, t = null) => ({
                      role: "dialog",
                      ...e,
                      ref: (0, a.lq)(t, d),
                      id: m,
                      tabIndex: -1,
                      "aria-modal": !0,
                      "aria-labelledby": k ? y : void 0,
                      "aria-describedby": M ? b : void 0,
                      onClick: (0, u.v)(e.onClick, (e) => e.stopPropagation()),
                    }),
                    [b, M, m, y, k]
                  ),
                  O = (0, v.useCallback)(
                    (e) => {
                      e.stopPropagation(),
                        x.current === e.target &&
                          h.m.isTopModal(d.current) &&
                          (o && n?.(), l?.());
                    },
                    [n, o, l]
                  ),
                  R = (0, v.useCallback)(
                    (e = {}, t = null) => ({
                      ...e,
                      ref: (0, a.lq)(t, f),
                      onClick: (0, u.v)(e.onClick, O),
                      onKeyDown: (0, u.v)(e.onKeyDown, E),
                      onMouseDown: (0, u.v)(e.onMouseDown, w),
                    }),
                    [E, w, O]
                  );
                return {
                  isOpen: t,
                  onClose: n,
                  headerId: y,
                  bodyId: b,
                  setBodyMounted: S,
                  setHeaderMounted: C,
                  dialogRef: d,
                  overlayRef: f,
                  getDialogProps: N,
                  getDialogContainerProps: R,
                  index: g,
                };
              })(t),
              autoFocus: c,
              trapFocus: l,
              initialFocusRef: s,
              finalFocusRef: d,
              returnFocusOnClose: f,
              blockScrollOnMount: m,
              allowPinchZoom: x,
              preserveScrollBarGap: E,
              motionPreset: k,
              lockFocusAcrossFrames: C,
            };
          return (0, r.jsx)(w, {
            value: O,
            children: (0, r.jsx)(g, {
              value: N,
              children: (0, r.jsx)(i.M, {
                ...M,
                onExitComplete: S,
                children: O.isOpen && (0, r.jsx)(y.h, { ...n, children: o }),
              }),
            }),
          });
        };
      k.displayName = "Modal";
    },
    33284: function (e, t, n) {
      n.d(t, {
        h: function () {
          return h;
        },
      });
      var r = n(85893),
        o = n(12408),
        i = n(52110),
        a = n(67294),
        u = n(73935);
      let [c, l] = (0, i.k)({ strict: !1, name: "PortalManagerContext" }),
        [s, d] = (0, i.k)({ strict: !1, name: "PortalContext" }),
        f = "chakra-portal",
        m = (e) =>
          (0, r.jsx)("div", {
            className: "chakra-portal-zIndex",
            style: {
              position: "absolute",
              zIndex: e.zIndex,
              top: 0,
              left: 0,
              right: 0,
            },
            children: e.children,
          }),
        p = (e) => {
          let { appendToParentPortal: t, children: n } = e,
            [i, c] = (0, a.useState)(null),
            p = (0, a.useRef)(null),
            [, v] = (0, a.useState)({});
          (0, a.useEffect)(() => v({}), []);
          let h = d(),
            y = l();
          (0, o.G)(() => {
            if (!i) return;
            let e = i.ownerDocument,
              n = t ? h ?? e.body : e.body;
            if (!n) return;
            (p.current = e.createElement("div")),
              (p.current.className = f),
              n.appendChild(p.current),
              v({});
            let r = p.current;
            return () => {
              n.contains(r) && n.removeChild(r);
            };
          }, [i]);
          let b = y?.zIndex
            ? (0, r.jsx)(m, { zIndex: y?.zIndex, children: n })
            : n;
          return p.current
            ? (0, u.createPortal)(
                (0, r.jsx)(s, { value: p.current, children: b }),
                p.current
              )
            : (0, r.jsx)("span", {
                ref: (e) => {
                  e && c(e);
                },
              });
        },
        v = (e) => {
          let { children: t, containerRef: n, appendToParentPortal: i } = e,
            c = n.current,
            l = c ?? ("undefined" != typeof window ? document.body : void 0),
            d = (0, a.useMemo)(() => {
              let e = c?.ownerDocument.createElement("div");
              return e && (e.className = f), e;
            }, [c]),
            [, m] = (0, a.useState)({});
          return ((0, o.G)(() => m({}), []),
          (0, o.G)(() => {
            if (d && l)
              return (
                l.appendChild(d),
                () => {
                  l.removeChild(d);
                }
              );
          }, [d, l]),
          l && d)
            ? (0, u.createPortal)(
                (0, r.jsx)(s, { value: i ? d : null, children: t }),
                d
              )
            : null;
        };
      function h(e) {
        let { containerRef: t, ...n } = { appendToParentPortal: !0, ...e };
        return t
          ? (0, r.jsx)(v, { containerRef: t, ...n })
          : (0, r.jsx)(p, { ...n });
      }
      (h.className = f),
        (h.selector = ".chakra-portal"),
        (h.displayName = "Portal");
    },
    82145: function (e, t, n) {
      n.d(t, {
        Lj: function () {
          return r;
        },
        Sh: function () {
          return a;
        },
        js: function () {
          return i;
        },
        p$: function () {
          return u;
        },
      });
      let r = {
          ease: [0.25, 0.1, 0.25, 1],
          easeIn: [0.4, 0, 1, 1],
          easeOut: [0, 0, 0.2, 1],
          easeInOut: [0.4, 0, 0.2, 1],
        },
        o = {
          slideLeft: {
            position: { left: 0, top: 0, bottom: 0, width: "100%" },
            enter: { x: 0, y: 0 },
            exit: { x: "-100%", y: 0 },
          },
          slideRight: {
            position: { right: 0, top: 0, bottom: 0, width: "100%" },
            enter: { x: 0, y: 0 },
            exit: { x: "100%", y: 0 },
          },
          slideUp: {
            position: { top: 0, left: 0, right: 0, maxWidth: "100vw" },
            enter: { x: 0, y: 0 },
            exit: { x: 0, y: "-100%" },
          },
          slideDown: {
            position: { bottom: 0, left: 0, right: 0, maxWidth: "100vw" },
            enter: { x: 0, y: 0 },
            exit: { x: 0, y: "100%" },
          },
        };
      function i(e) {
        switch (e?.direction ?? "right") {
          case "right":
          default:
            return o.slideRight;
          case "left":
            return o.slideLeft;
          case "bottom":
            return o.slideDown;
          case "top":
            return o.slideUp;
        }
      }
      let a = {
          enter: { duration: 0.2, ease: r.easeOut },
          exit: { duration: 0.1, ease: r.easeIn },
        },
        u = {
          enter: (e, t) => ({
            ...e,
            delay: "number" == typeof t ? t : t?.enter,
          }),
          exit: (e, t) => ({ ...e, delay: "number" == typeof t ? t : t?.exit }),
        };
    },
    65820: function (e, t, n) {
      n.d(t, {
        M: function () {
          return b;
        },
      });
      var r = n(67294),
        o = n(49304),
        i = n(30404),
        a = n(58868);
      function u() {
        let e = (0, r.useRef)(!1);
        return (
          (0, a.L)(
            () => (
              (e.current = !0),
              () => {
                e.current = !1;
              }
            ),
            []
          ),
          e
        );
      }
      var c = n(240),
        l = n(96681);
      class s extends r.Component {
        getSnapshotBeforeUpdate(e) {
          let t = this.props.childRef.current;
          if (t && e.isPresent && !this.props.isPresent) {
            let e = this.props.sizeRef.current;
            (e.height = t.offsetHeight || 0),
              (e.width = t.offsetWidth || 0),
              (e.top = t.offsetTop),
              (e.left = t.offsetLeft);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function d({ children: e, isPresent: t }) {
        let n = (0, r.useId)(),
          o = (0, r.useRef)(null),
          i = (0, r.useRef)({ width: 0, height: 0, top: 0, left: 0 });
        return (
          (0, r.useInsertionEffect)(() => {
            let { width: e, height: r, top: a, left: u } = i.current;
            if (t || !o.current || !e || !r) return;
            o.current.dataset.motionPopId = n;
            let c = document.createElement("style");
            return (
              document.head.appendChild(c),
              c.sheet &&
                c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${r}px !important;
            top: ${a}px !important;
            left: ${u}px !important;
          }
        `),
              () => {
                document.head.removeChild(c);
              }
            );
          }, [t]),
          r.createElement(
            s,
            { isPresent: t, childRef: o, sizeRef: i },
            r.cloneElement(e, { ref: o })
          )
        );
      }
      let f = ({
        children: e,
        initial: t,
        isPresent: n,
        onExitComplete: o,
        custom: i,
        presenceAffectsLayout: a,
        mode: u,
      }) => {
        let s = (0, l.h)(m),
          f = (0, r.useId)(),
          p = (0, r.useMemo)(
            () => ({
              id: f,
              initial: t,
              isPresent: n,
              custom: i,
              onExitComplete: (e) => {
                for (let t of (s.set(e, !0), s.values())) if (!t) return;
                o && o();
              },
              register: (e) => (s.set(e, !1), () => s.delete(e)),
            }),
            a ? void 0 : [n]
          );
        return (
          (0, r.useMemo)(() => {
            s.forEach((e, t) => s.set(t, !1));
          }, [n]),
          r.useEffect(() => {
            n || s.size || !o || o();
          }, [n]),
          "popLayout" === u && (e = r.createElement(d, { isPresent: n }, e)),
          r.createElement(c.O.Provider, { value: p }, e)
        );
      };
      function m() {
        return new Map();
      }
      var p = n(25364),
        v = n(65411),
        h = n(16034);
      let y = (e) => e.key || "",
        b = ({
          children: e,
          custom: t,
          initial: n = !0,
          onExitComplete: c,
          exitBeforeEnter: l,
          presenceAffectsLayout: s = !0,
          mode: d = "sync",
        }) => {
          l &&
            ((d = "wait"),
            (0, h.O)(!1, "Replace exitBeforeEnter with mode='wait'"));
          let [m] = (function () {
              let e = u(),
                [t, n] = (0, r.useState)(0),
                o = (0, r.useCallback)(() => {
                  e.current && n(t + 1);
                }, [t]);
              return [(0, r.useCallback)(() => i.Z_.postRender(o), [o]), t];
            })(),
            b = (0, r.useContext)(p.p).forceRender;
          b && (m = b);
          let g = u(),
            x = (function (e) {
              let t = [];
              return (
                r.Children.forEach(e, (e) => {
                  (0, r.isValidElement)(e) && t.push(e);
                }),
                t
              );
            })(e),
            w = x,
            E = new Set(),
            k = (0, r.useRef)(w),
            C = (0, r.useRef)(new Map()).current,
            M = (0, r.useRef)(!0);
          if (
            ((0, a.L)(() => {
              (M.current = !1),
                (function (e, t) {
                  e.forEach((e) => {
                    let n = y(e);
                    t.set(n, e);
                  });
                })(x, C),
                (k.current = w);
            }),
            (0, v.z)(() => {
              (M.current = !0), C.clear(), E.clear();
            }),
            M.current)
          )
            return r.createElement(
              r.Fragment,
              null,
              w.map((e) =>
                r.createElement(
                  f,
                  {
                    key: y(e),
                    isPresent: !0,
                    initial: !!n && void 0,
                    presenceAffectsLayout: s,
                    mode: d,
                  },
                  e
                )
              )
            );
          w = [...w];
          let S = k.current.map(y),
            N = x.map(y),
            O = S.length;
          for (let e = 0; e < O; e++) {
            let t = S[e];
            -1 === N.indexOf(t) && E.add(t);
          }
          return (
            "wait" === d && E.size && (w = []),
            E.forEach((e) => {
              if (-1 !== N.indexOf(e)) return;
              let n = C.get(e);
              if (!n) return;
              let o = S.indexOf(e);
              w.splice(
                o,
                0,
                r.createElement(
                  f,
                  {
                    key: y(n),
                    isPresent: !1,
                    onExitComplete: () => {
                      C.delete(e), E.delete(e);
                      let t = k.current.findIndex((t) => t.key === e);
                      if ((k.current.splice(t, 1), !E.size)) {
                        if (((k.current = x), !1 === g.current)) return;
                        m(), c && c();
                      }
                    },
                    custom: t,
                    presenceAffectsLayout: s,
                    mode: d,
                  },
                  n
                )
              );
            }),
            (w = w.map((e) => {
              let t = e.key;
              return E.has(t)
                ? e
                : r.createElement(
                    f,
                    {
                      key: y(e),
                      isPresent: !0,
                      presenceAffectsLayout: s,
                      mode: d,
                    },
                    e
                  );
            })),
            "production" !== o.O &&
              "wait" === d &&
              w.length > 1 &&
              console.warn(
                'You\'re attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.'
              ),
            r.createElement(
              r.Fragment,
              null,
              E.size ? w : w.map((e) => (0, r.cloneElement)(e))
            )
          );
        };
    },
  },
]);
