(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2641],
  {
    4032: function (e, t, n) {
      "use strict";
      var r = n(34155);
      n(91479);
      var i = n(67294),
        s = i && "object" == typeof i && "default" in i ? i : { default: i },
        o = void 0 !== r && r.env && !0,
        u = function (e) {
          return "[object String]" === Object.prototype.toString.call(e);
        },
        c = (function () {
          function e(e) {
            var t = void 0 === e ? {} : e,
              n = t.name,
              r = void 0 === n ? "stylesheet" : n,
              i = t.optimizeForSpeed,
              s = void 0 === i ? o : i;
            a(u(r), "`name` must be a string"),
              (this._name = r),
              (this._deletedRulePlaceholder = "#" + r + "-deleted-rule____{}"),
              a("boolean" == typeof s, "`optimizeForSpeed` must be a boolean"),
              (this._optimizeForSpeed = s),
              (this._serverSheet = void 0),
              (this._tags = []),
              (this._injected = !1),
              (this._rulesCount = 0);
            var c = document.querySelector('meta[property="csp-nonce"]');
            this._nonce = c ? c.getAttribute("content") : null;
          }
          var t = e.prototype;
          return (
            (t.setOptimizeForSpeed = function (e) {
              a(
                "boolean" == typeof e,
                "`setOptimizeForSpeed` accepts a boolean"
              ),
                a(
                  0 === this._rulesCount,
                  "optimizeForSpeed cannot be when rules have already been inserted"
                ),
                this.flush(),
                (this._optimizeForSpeed = e),
                this.inject();
            }),
            (t.isOptimizeForSpeed = function () {
              return this._optimizeForSpeed;
            }),
            (t.inject = function () {
              var e = this;
              if (
                (a(!this._injected, "sheet already injected"),
                (this._injected = !0),
                this._optimizeForSpeed)
              ) {
                (this._tags[0] = this.makeStyleTag(this._name)),
                  (this._optimizeForSpeed = "insertRule" in this.getSheet()),
                  this._optimizeForSpeed ||
                    (o ||
                      console.warn(
                        "StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."
                      ),
                    this.flush(),
                    (this._injected = !0));
                return;
              }
              this._serverSheet = {
                cssRules: [],
                insertRule: function (t, n) {
                  return (
                    "number" == typeof n
                      ? (e._serverSheet.cssRules[n] = { cssText: t })
                      : e._serverSheet.cssRules.push({ cssText: t }),
                    n
                  );
                },
                deleteRule: function (t) {
                  e._serverSheet.cssRules[t] = null;
                },
              };
            }),
            (t.getSheetForTag = function (e) {
              if (e.sheet) return e.sheet;
              for (var t = 0; t < document.styleSheets.length; t++)
                if (document.styleSheets[t].ownerNode === e)
                  return document.styleSheets[t];
            }),
            (t.getSheet = function () {
              return this.getSheetForTag(this._tags[this._tags.length - 1]);
            }),
            (t.insertRule = function (e, t) {
              if (
                (a(u(e), "`insertRule` accepts only strings"),
                this._optimizeForSpeed)
              ) {
                var n = this.getSheet();
                "number" != typeof t && (t = n.cssRules.length);
                try {
                  n.insertRule(e, t);
                } catch (t) {
                  return (
                    o ||
                      console.warn(
                        "StyleSheet: illegal rule: \n\n" +
                          e +
                          "\n\nSee https://stackoverflow.com/q/20007992 for more info"
                      ),
                    -1
                  );
                }
              } else {
                var r = this._tags[t];
                this._tags.push(this.makeStyleTag(this._name, e, r));
              }
              return this._rulesCount++;
            }),
            (t.replaceRule = function (e, t) {
              if (this._optimizeForSpeed) {
                var n = this.getSheet();
                if (
                  (t.trim() || (t = this._deletedRulePlaceholder),
                  !n.cssRules[e])
                )
                  return e;
                n.deleteRule(e);
                try {
                  n.insertRule(t, e);
                } catch (r) {
                  o ||
                    console.warn(
                      "StyleSheet: illegal rule: \n\n" +
                        t +
                        "\n\nSee https://stackoverflow.com/q/20007992 for more info"
                    ),
                    n.insertRule(this._deletedRulePlaceholder, e);
                }
              } else {
                var r = this._tags[e];
                a(r, "old rule at index `" + e + "` not found"),
                  (r.textContent = t);
              }
              return e;
            }),
            (t.deleteRule = function (e) {
              if (this._optimizeForSpeed) this.replaceRule(e, "");
              else {
                var t = this._tags[e];
                a(t, "rule at index `" + e + "` not found"),
                  t.parentNode.removeChild(t),
                  (this._tags[e] = null);
              }
            }),
            (t.flush = function () {
              (this._injected = !1),
                (this._rulesCount = 0),
                this._tags.forEach(function (e) {
                  return e && e.parentNode.removeChild(e);
                }),
                (this._tags = []);
            }),
            (t.cssRules = function () {
              var e = this;
              return this._tags.reduce(function (t, n) {
                return (
                  n
                    ? (t = t.concat(
                        Array.prototype.map.call(
                          e.getSheetForTag(n).cssRules,
                          function (t) {
                            return t.cssText === e._deletedRulePlaceholder
                              ? null
                              : t;
                          }
                        )
                      ))
                    : t.push(null),
                  t
                );
              }, []);
            }),
            (t.makeStyleTag = function (e, t, n) {
              t &&
                a(
                  u(t),
                  "makeStyleTag accepts only strings as second parameter"
                );
              var r = document.createElement("style");
              this._nonce && r.setAttribute("nonce", this._nonce),
                (r.type = "text/css"),
                r.setAttribute("data-" + e, ""),
                t && r.appendChild(document.createTextNode(t));
              var i = document.head || document.getElementsByTagName("head")[0];
              return n ? i.insertBefore(r, n) : i.appendChild(r), r;
            }),
            (function (e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            })(e.prototype, [
              {
                key: "length",
                get: function () {
                  return this._rulesCount;
                },
              },
            ]),
            e
          );
        })();
      function a(e, t) {
        if (!e) throw Error("StyleSheet: " + t + ".");
      }
      var l = function (e) {
          for (var t = 5381, n = e.length; n; )
            t = (33 * t) ^ e.charCodeAt(--n);
          return t >>> 0;
        },
        h = {};
      function d(e, t) {
        if (!t) return "jsx-" + e;
        var n = String(t),
          r = e + n;
        return h[r] || (h[r] = "jsx-" + l(e + "-" + n)), h[r];
      }
      function f(e, t) {
        var n = e + t;
        return (
          h[n] || (h[n] = t.replace(/__jsx-style-dynamic-selector/g, e)), h[n]
        );
      }
      var p = (function () {
          function e(e) {
            var t = void 0 === e ? {} : e,
              n = t.styleSheet,
              r = void 0 === n ? null : n,
              i = t.optimizeForSpeed,
              s = void 0 !== i && i;
            (this._sheet =
              r || new c({ name: "styled-jsx", optimizeForSpeed: s })),
              this._sheet.inject(),
              r &&
                "boolean" == typeof s &&
                (this._sheet.setOptimizeForSpeed(s),
                (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
              (this._fromServer = void 0),
              (this._indices = {}),
              (this._instancesCounts = {});
          }
          var t = e.prototype;
          return (
            (t.add = function (e) {
              var t = this;
              void 0 === this._optimizeForSpeed &&
                ((this._optimizeForSpeed = Array.isArray(e.children)),
                this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),
                (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
                this._fromServer ||
                  ((this._fromServer = this.selectFromServer()),
                  (this._instancesCounts = Object.keys(this._fromServer).reduce(
                    function (e, t) {
                      return (e[t] = 0), e;
                    },
                    {}
                  )));
              var n = this.getIdAndRules(e),
                r = n.styleId,
                i = n.rules;
              if (r in this._instancesCounts) {
                this._instancesCounts[r] += 1;
                return;
              }
              var s = i
                .map(function (e) {
                  return t._sheet.insertRule(e);
                })
                .filter(function (e) {
                  return -1 !== e;
                });
              (this._indices[r] = s), (this._instancesCounts[r] = 1);
            }),
            (t.remove = function (e) {
              var t = this,
                n = this.getIdAndRules(e).styleId;
              if (
                ((function (e, t) {
                  if (!e) throw Error("StyleSheetRegistry: " + t + ".");
                })(
                  n in this._instancesCounts,
                  "styleId: `" + n + "` not found"
                ),
                (this._instancesCounts[n] -= 1),
                this._instancesCounts[n] < 1)
              ) {
                var r = this._fromServer && this._fromServer[n];
                r
                  ? (r.parentNode.removeChild(r), delete this._fromServer[n])
                  : (this._indices[n].forEach(function (e) {
                      return t._sheet.deleteRule(e);
                    }),
                    delete this._indices[n]),
                  delete this._instancesCounts[n];
              }
            }),
            (t.update = function (e, t) {
              this.add(t), this.remove(e);
            }),
            (t.flush = function () {
              this._sheet.flush(),
                this._sheet.inject(),
                (this._fromServer = void 0),
                (this._indices = {}),
                (this._instancesCounts = {});
            }),
            (t.cssRules = function () {
              var e = this,
                t = this._fromServer
                  ? Object.keys(this._fromServer).map(function (t) {
                      return [t, e._fromServer[t]];
                    })
                  : [],
                n = this._sheet.cssRules();
              return t.concat(
                Object.keys(this._indices)
                  .map(function (t) {
                    return [
                      t,
                      e._indices[t]
                        .map(function (e) {
                          return n[e].cssText;
                        })
                        .join(e._optimizeForSpeed ? "" : "\n"),
                    ];
                  })
                  .filter(function (e) {
                    return !!e[1];
                  })
              );
            }),
            (t.styles = function (e) {
              var t, n;
              return (
                (t = this.cssRules()),
                void 0 === (n = e) && (n = {}),
                t.map(function (e) {
                  var t = e[0],
                    r = e[1];
                  return s.default.createElement("style", {
                    id: "__" + t,
                    key: "__" + t,
                    nonce: n.nonce ? n.nonce : void 0,
                    dangerouslySetInnerHTML: { __html: r },
                  });
                })
              );
            }),
            (t.getIdAndRules = function (e) {
              var t = e.children,
                n = e.dynamic,
                r = e.id;
              if (n) {
                var i = d(r, n);
                return {
                  styleId: i,
                  rules: Array.isArray(t)
                    ? t.map(function (e) {
                        return f(i, e);
                      })
                    : [f(i, t)],
                };
              }
              return { styleId: d(r), rules: Array.isArray(t) ? t : [t] };
            }),
            (t.selectFromServer = function () {
              return Array.prototype.slice
                .call(document.querySelectorAll('[id^="__jsx-"]'))
                .reduce(function (e, t) {
                  return (e[t.id.slice(2)] = t), e;
                }, {});
            }),
            e
          );
        })(),
        m = i.createContext(null);
      m.displayName = "StyleSheetContext";
      var _ = s.default.useInsertionEffect || s.default.useLayoutEffect,
        v = new p();
      function y(e) {
        var t = v || i.useContext(m);
        return (
          t &&
            _(
              function () {
                return (
                  t.add(e),
                  function () {
                    t.remove(e);
                  }
                );
              },
              [e.id, String(e.dynamic)]
            ),
          null
        );
      }
      (y.dynamic = function (e) {
        return e
          .map(function (e) {
            return d(e[0], e[1]);
          })
          .join(" ");
      }),
        (t.style = y);
    },
    20726: function (e, t, n) {
      "use strict";
      e.exports = n(4032).style;
    },
    91479: function () {},
    86115: function (e, t, n) {
      "use strict";
      n.d(t, {
        n: function () {
          return i;
        },
      });
      var r = n(85893);
      let i = (0, n(24278).I)({
        viewBox: "0 0 14 14",
        path: (0, r.jsx)("g", {
          fill: "currentColor",
          children: (0, r.jsx)("polygon", {
            points:
              "5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039",
          }),
        }),
      });
    },
    28470: function (e, t, n) {
      "use strict";
      n.d(t, {
        Ag: function () {
          return u;
        },
        O2: function () {
          return i;
        },
        U1: function () {
          return s;
        },
        Wt: function () {
          return c;
        },
        YD: function () {
          return o;
        },
      });
      var r = n(70917);
      let i = (0, r.F4)({
          "0%": { strokeDasharray: "1, 400", strokeDashoffset: "0" },
          "50%": { strokeDasharray: "400, 400", strokeDashoffset: "-100" },
          "100%": { strokeDasharray: "400, 400", strokeDashoffset: "-260" },
        }),
        s = (0, r.F4)({
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        }),
        o = (0, r.F4)({ "0%": { left: "-40%" }, "100%": { left: "100%" } }),
        u = (0, r.F4)({
          from: { backgroundPosition: "1rem 0" },
          to: { backgroundPosition: "0 0" },
        });
      function c(e) {
        let {
            value: t = 0,
            min: n,
            max: r,
            valueText: i,
            getValueText: s,
            isIndeterminate: o,
            role: u = "progressbar",
          } = e,
          c = ((t - n) * 100) / (r - n);
        return {
          bind: {
            "data-indeterminate": o ? "" : void 0,
            "aria-valuemax": r,
            "aria-valuemin": n,
            "aria-valuenow": o ? void 0 : t,
            "aria-valuetext": (() => {
              if (null != t) return "function" == typeof s ? s(t, c) : i;
            })(),
            role: u,
          },
          percent: c,
          value: t,
        };
      }
    },
    87278: function (e, t, n) {
      "use strict";
      n.d(t, {
        Q: function () {
          return o;
        },
      });
      var r = n(81841),
        i = n(81946),
        s = n(87831);
      async function o(e, t) {
        let n;
        let { chainId: o, connector: u, ...c } = t;
        n = t.account
          ? t.account
          : (
              await (0, s.e)(e, {
                account: t.account,
                chainId: o,
                connector: u,
              })
            ).account;
        let a = e.getClient({ chainId: o });
        return (0, i.s)(a, r.Q, "estimateGas")({ ...c, account: n });
      }
    },
    30129: function (e, t, n) {
      "use strict";
      n.d(t, {
        N: function () {
          return d;
        },
      });
      var r = n(87278),
        i = n(36100),
        s = n(1212),
        o = n(82002),
        u = n(37122),
        c = n(30202),
        a = n(87831),
        l = n(67294),
        h = n(87314);
      function d(e = {}) {
        let { connector: t, query: n = {} } = e,
          d = (0, u.Z)(e),
          { data: f } = (function (e = {}) {
            let { query: t = {}, ...n } = e,
              r = (0, u.Z)(n),
              d = (0, c.NL)(),
              { address: f, connector: p, status: m } = (0, h.m)({ config: r }),
              _ = (0, o.x)({ config: r }),
              v = e.connector ?? p,
              { queryKey: y, ...S } = (function (e, t = {}) {
                return {
                  gcTime: 0,
                  async queryFn({ queryKey: n }) {
                    let { connector: r } = t,
                      { connectorUid: i, scopeKey: s, ...o } = n[1];
                    return (0, a.e)(e, { ...o, connector: r });
                  },
                  queryKey: (function (e = {}) {
                    let { connector: t, ...n } = e;
                    return [
                      "connectorClient",
                      { ...(0, i.OP)(n), connectorUid: t?.uid },
                    ];
                  })(t),
                };
              })(r, { ...e, chainId: e.chainId ?? _, connector: v }),
              g = !!(
                ("connected" === m ||
                  ("reconnecting" === m && v?.getProvider)) &&
                (t.enabled ?? !0)
              ),
              F = (0, l.useRef)(f);
            return (
              (0, l.useEffect)(() => {
                let e = F.current;
                !f && e
                  ? (d.removeQueries({ queryKey: y }), (F.current = void 0))
                  : f !== e &&
                    (d.invalidateQueries({ queryKey: y }), (F.current = f));
              }, [f, d]),
              (0, s.aM)({
                ...t,
                ...S,
                queryKey: y,
                enabled: g,
                staleTime: Number.POSITIVE_INFINITY,
              })
            );
          })({ connector: t, query: { enabled: void 0 === e.account } }),
          p = e.account ?? f?.account,
          m = (0, o.x)({ config: d }),
          _ = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: n }) {
                let { connector: i } = t,
                  { account: s, scopeKey: o, ...u } = n[1];
                if (!s && !i) throw Error("account or connector is required");
                return (0, r.Q)(e, { account: s, connector: i, ...u });
              },
              queryKey: (function (e = {}) {
                let { connector: t, ...n } = e;
                return ["estimateGas", (0, i.OP)(n)];
              })(t),
            };
          })(d, { ...e, account: p, chainId: e.chainId ?? m, connector: t }),
          v = !!((p || t) && (n.enabled ?? !0));
        return (0, s.aM)({ ...n, ..._, enabled: v });
      }
    },
  },
]);
