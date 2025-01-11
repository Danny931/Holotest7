(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2417],
  {
    59782: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/create",
        function () {
          return s(58119);
        },
      ]);
    },
    43952: function (e, t, s) {
      "use strict";
      var a = s(85893),
        r = s(39879);
      s(67294),
        (t.Z = (e) => {
          let { isOpen: t } = e;
          return (0, a.jsx)("div", {
            className: t
              ? "flex inset-0 items-center justify-center select-none absolute w-full"
              : "hidden ",
            children: (0, a.jsx)("div", {
              className: t ? "  " : "hidden",
              children: (0, a.jsx)(r.J5, {
                src: "https://hologramxyz.s3.amazonaws.com/assets/lotties/holo-loading.json",
                loop: !0,
                autoplay: !0,
                className: "h-[100px] w-[100px]",
              }),
            }),
          });
        });
    },
    29069: function (e, t, s) {
      "use strict";
      var a = s(85893),
        r = s(71867),
        n = s(67294),
        l = s(362),
        i = s(21003),
        o = s(8559),
        c = s(57307),
        d = s(81107),
        u = s(57880),
        x = s(87464),
        m = s(57954),
        h = s(59743),
        p = s(71176),
        f = s(99319),
        g = s(83691),
        y = function (e, t, s, a) {
          return new (s || (s = Promise))(function (r, n) {
            function l(e) {
              try {
                o(a.next(e));
              } catch (e) {
                n(e);
              }
            }
            function i(e) {
              try {
                o(a.throw(e));
              } catch (e) {
                n(e);
              }
            }
            function o(e) {
              var t;
              e.done
                ? r(e.value)
                : ((t = e.value) instanceof s
                    ? t
                    : new s(function (e) {
                        e(t);
                      })
                  ).then(l, i);
            }
            o((a = a.apply(e, t || [])).next());
          });
        };
      t.Z = (e) => {
        let { open: t, onClose: s, planId: v } = e,
          { holoUser: b, refreshHoloUser: j } = (0, i.a)(),
          { wallet: w } = (0, m.O)(),
          { setDisplayNotification: N } = (0, f.oR)((e) => e),
          [C, E] = (0, n.useState)(),
          [k, S] = (0, n.useState)(1),
          [_, T] = (0, n.useState)(),
          [A, O] = (0, n.useState)(0),
          [R, I] = (0, n.useState)(!1),
          [M, P] = (0, n.useState)(!1),
          [W, L] = (0, n.useState)(!1),
          [Z, B] = (0, n.useState)(""),
          [D, F] = (0, n.useState)(),
          {
            showOrderDetailDrawer: U,
            setShowOrderDetailDrawer: Y,
            stripeSubscription: K,
            setStripeSubscription: X,
            getPremiumPrice: q,
            getElitePrice: z,
            PriceForYearlyPlan: H,
            selectedCustomDuration: Q,
            setSelectedCustomDuration: G,
            selectedSubscriptionPlan: J,
            setSelectedSubscriptionPlan: V,
            cryptoTransactionDescription: $,
            isCryptoTransactionModalOpen: ee,
            setIsCryptoTransactionModalOpen: et,
            currentCryptoTransaction: es,
            isLoadingCryptoTransaction: ea,
            setIsLoadingCryptoTransaction: er,
            isAutoRenew: en,
            setIsAutoRenew: el,
            startCryptoTransaction: ei,
            billingMode: eo,
            setBillingMode: ec,
            onChooseElitePlanClicked: ed,
            onChoosePremiumPlanClicked: eu,
          } = (0, r.Z)();
        (0, n.useEffect)(() => {
          if (t)
            switch (v) {
              case o._r.PREMIUM:
                eu();
                break;
              case o._r.ELITE:
                ed();
            }
        }, [t, v]);
        let ex = (e) => {
            if ((P(!1), e === o.LN.SUCCESS)) {
              let e = k > 1 ? (0, d.cY)(C, k) : (0, d.Ni)(C);
              e > 0 && (O(e), I(!0));
            }
            F(null), T(null), E(null), S(1), B("");
          },
          em = (e) =>
            y(void 0, void 0, void 0, function* () {
              try {
                let t = yield fetch(
                  "api/users/".concat(b.id, "/crypto-transactions/plan/send"),
                  {
                    method: "POST",
                    body: JSON.stringify({
                      planId: J.id,
                      customDuration: (0, h.Vd)(J.id) ? Q : 0,
                      signedTransaction: e,
                    }),
                    headers: { "Content-Type": "application/json" },
                  }
                );
                if (!t.ok) {
                  let e = yield t.json();
                  return (
                    console.error(e),
                    {
                      errorMessage: e.errorMessage
                        ? e.errorMessage
                        : "Unexpected error!",
                      transactionHash: null,
                      transactionStatus: o.LN.FAILED,
                    }
                  );
                }
                let s = yield t.json();
                return {
                  errorMessage: s.errorMessage,
                  transactionHash: s.transactionHash,
                  transactionStatus: s.transactionStatus,
                };
              } catch (e) {
                return (
                  console.error(e),
                  {
                    errorMessage: "Unexpected error, ".concat(e),
                    transactionHash: null,
                    transactionStatus: o.LN.FAILED,
                  }
                );
              }
            }),
          eh = (e, t) => {
            B(e), F(t), j(), er(!1), et(!1);
            let s = J.id;
            E(s),
              S(Q),
              T(
                (0, p.lX)(
                  (0, h.MH)(
                    null == b ? void 0 : b.planId,
                    b.planExpiresAt,
                    s,
                    Q
                  )
                )
              ),
              P(!0);
          },
          ep = (e) => {
            N(!0, o.CC.ERROR, "Error", e), er(!1), et(!1);
          },
          ef = () => {
            er(!1), et(!1);
          };
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(g.Z, {
              expirationDate: new Date(1717587082),
              open: W,
              onClose: () => L(!1),
            }),
            U &&
              (0, a.jsx)(l.Z, {
                holoUser: b,
                stripeSubscription: K,
                open: U,
                billingMode: eo,
                isAutoRenew: en,
                setIsAutoRenew: el,
                selectedSubscriptionPlan: J,
                selectedCustomDuration: Q,
                setSelectedCustomDuration: G,
                setBillingMode: ec,
                onChoosePremiumPlanClicked: eu,
                onChooseElitePlanClicked: ed,
                startCryptoTransaction: (e, t, s) => ei(e, t, s),
                onClose: () => {
                  Y(!1), s();
                },
                getPremiumPrice: q,
                getElitePrice: z,
              }),
            M &&
              (0, a.jsx)(c.Z, {
                expirationDate: _,
                transactionStatus: D,
                transactionHash: Z,
                onClose: (e) => ex(e),
              }),
            R &&
              (0, a.jsx)(u.Z, {
                lootboxAmount: A,
                show: R,
                onClose: () => {
                  O(0), I(!1);
                },
              }),
            (0, a.jsx)(x.Z, {
              wallet: w,
              transaction: es,
              uiConfig: { title: "Review Plan Transaction", description: $ },
              isOpen: ee,
              onSendTransaction: (e) =>
                y(void 0, void 0, void 0, function* () {
                  return yield em(e);
                }),
              onComplete: (e, t) => eh(e, t),
              onError: (e) => ep(e),
              onClose: () => ef(),
            }),
          ],
        });
      };
    },
    58119: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return P;
          },
        });
      var a = s(85893),
        r = s(48427),
        n = s(60209),
        l = s(99319),
        i = s(67294),
        o = s(88148),
        c = s(25675),
        d = s.n(c),
        u = s(19311),
        x = s(51373),
        m = s(93967),
        h = s.n(m),
        p = s(86523),
        f = s(21003),
        g = s(58484),
        y = s(11163),
        v = s(7823),
        b = (e) => {
          let { show: t, handle: s, onRetrain: r, onClose: n } = e,
            { holoUser: l, refreshHoloUser: o } = (0, f.a)(),
            c = (0, y.useRouter)(),
            [d, u] = (0, i.useState)(!1),
            [m, b] = (0, i.useState)(!1);
          (0, i.useEffect)(() => {
            u(!0);
          }, []);
          let j = () => {
            var e, t, s, a;
            return (
              (e = void 0),
              (t = void 0),
              (s = void 0),
              (a = function* () {
                m || (b(!0), yield r(), b(!1));
              }),
              new (s || (s = Promise))(function (r, n) {
                function l(e) {
                  try {
                    o(a.next(e));
                  } catch (e) {
                    n(e);
                  }
                }
                function i(e) {
                  try {
                    o(a.throw(e));
                  } catch (e) {
                    n(e);
                  }
                }
                function o(e) {
                  var t;
                  e.done
                    ? r(e.value)
                    : ((t = e.value) instanceof s
                        ? t
                        : new s(function (e) {
                            e(t);
                          })
                      ).then(l, i);
                }
                o((a = a.apply(e, t || [])).next());
              })
            );
          };
          return (0, a.jsx)(g.Z, {
            show: t,
            onClose: n,
            width: "lg",
            children: (0, a.jsxs)("div", {
              className: h()(
                "overflow-hidden rounded-[16px] bg-black transition duration-300",
                d ? "opacity-100" : "opacity-0"
              ),
              children: [
                (0, a.jsx)("button", {
                  className: h()(
                    "absolute right-5 top-5 z-20 h-[40px] w-[40px] rounded-full p-0 text-secondary-200 transition duration-300 hover:bg-black/20",
                    d ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                  ),
                  onClick: n,
                  children: (0, a.jsx)(p.T, {}),
                }),
                (0, a.jsxs)("div", {
                  className: "p-9 text-white",
                  children: [
                    (0, a.jsx)("p", {
                      className: "subheading-lg-lg",
                      children: "Retrain X Clone",
                    }),
                    (0, a.jsxs)("p", {
                      className: "body-text-lg mt-2 text-secondary-400",
                      children: [
                        "Burn ",
                        x.Qo,
                        " crystals to retrain your AI X Clone using the latest tweets from",
                        " ",
                        (0, a.jsxs)("a", {
                          href: "https://x.com/".concat(s),
                          target: "_blank",
                          style: { textDecoration: "underline" },
                          children: ["@", s],
                        }),
                        ".",
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "mt-5 flex w-full items-center justify-between rounded-[8px] bg-black px-4 py-2",
                      children: [
                        (0, a.jsxs)("div", {
                          className:
                            "subheading-sm-sm flex items-center space-x-2",
                          children: [
                            (0, a.jsx)("img", {
                              src: "/img/activity/crystal-active.png",
                              alt: "chat-icon",
                              className: "mr-[2px] h-6 w-6",
                            }),
                            (0, a.jsx)("span", {
                              className: "text-secondary-200",
                              children:
                                (null == l ? void 0 : l.currentCrystals) ||
                                (null == l ? void 0 : l.currentCrystals) === 0
                                  ? null == l
                                    ? void 0
                                    : l.currentCrystals
                                  : null == l
                                  ? void 0
                                  : l.crystals,
                            }),
                            (0, a.jsx)("span", {
                              className: "text-secondary-500",
                              children: "Crystals Available",
                            }),
                          ],
                        }),
                        (0, a.jsx)("button", {
                          onClick: () => c.push("/reward/?category=milestones"),
                          className:
                            "subheading-lg-xs rounded-full px-2 py-1 text-primary-default ring-1 ring-primary-default",
                          children: "Earn Crystals",
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "mt-5 flex items-center justify-between space-x-2 rounded-[20px] bg-whiteAlpha-50 px-6 py-3",
                      children: [
                        (0, a.jsx)("span", {
                          className: "heading-sm-xsss uppercase",
                          children: "Crystals Burned",
                        }),
                        (0, a.jsxs)("div", {
                          className: "flex items-center",
                          children: [
                            (0, a.jsx)("img", {
                              src: "/img/activity/crystal-active.png",
                              alt: "chat-icon",
                              className: "mr-[2px] h-6 w-6",
                            }),
                            (0, a.jsxs)("span", {
                              className: "subheading-lg-md",
                              children: ["- ", x.Qo],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)("button", {
                      onClick: () => j(),
                      className:
                        "subheading-lg-md mt-5 flex w-full items-center justify-center rounded-full bg-primary-default py-3 uppercase text-secondary-800 hover:bg-primary-default/90",
                      children: [
                        "confirm",
                        m &&
                          (0, a.jsx)(v.Z, {
                            className: "ml-2 h-4 w-4 text-secondary-800",
                          }),
                      ],
                    }),
                    (0, a.jsx)("button", {
                      onClick: () => n(),
                      className:
                        "subheading-lg-md mt-2 w-full rounded-full bg-secondary-200 py-3 uppercase text-secondary-800 hover:bg-secondary-200/90",
                      children: "Cancel",
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        j = s(8559),
        w = s(70386),
        N = s(36641),
        C = function (e, t, s, a) {
          return new (s || (s = Promise))(function (r, n) {
            function l(e) {
              try {
                o(a.next(e));
              } catch (e) {
                n(e);
              }
            }
            function i(e) {
              try {
                o(a.throw(e));
              } catch (e) {
                n(e);
              }
            }
            function o(e) {
              var t;
              e.done
                ? r(e.value)
                : ((t = e.value) instanceof s
                    ? t
                    : new s(function (e) {
                        e(t);
                      })
                  ).then(l, i);
            }
            o((a = a.apply(e, t || [])).next());
          });
        },
        E = (e) => {
          var t, s, r, n;
          let { onClose: o } = e,
            c = (0, y.useRouter)(),
            { linkTwitter: m, user: p } = (0, w.sv)(),
            {
              isAuthReady: g,
              isAuthenticated: E,
              holoUser: k,
              login: S,
              refreshHoloUser: _,
            } = (0, f.a)(),
            {
              setUsageLimitationMessage: T,
              setIsUsageLimitationModalOpen: A,
              setDisplayNotification: O,
            } = (0, l.oR)((e) => e),
            [R, I] = (0, i.useState)(!1),
            [M, P] = (0, i.useState)(null),
            [W, L] = (0, i.useState)(!1),
            [Z, B] = (0, i.useState)(!0);
          (0, i.useEffect)(() => {
            k && Y(k.id);
          }, [g]);
          let D = () =>
              C(void 0, void 0, void 0, function* () {
                if (!U() || R) return;
                I(!0);
                let {
                  character: e,
                  isValid: t,
                  errorMessage: s,
                  errorCode: a,
                } = yield (0, N.F)(k.id, j.Oo.X_CLONE);
                if (!t) {
                  a === j.jK.USAGE_LIMIT ? (T(s, !0), A(!0)) : F(s), I(!1);
                  return;
                }
                c.push("/create/".concat(e.id));
              }),
            F = (e) => {
              O(!0, j.CC.ERROR, "Error", e, j.d.BOTTOM);
            },
            U = () => !!g && (!!E || (S(), !1)),
            Y = (e) =>
              C(void 0, void 0, void 0, function* () {
                B(!0), P(yield (0, N.We)(e)), B(!1);
              });
          return (0, a.jsxs)("div", {
            className:
              "relative flex h-full w-full max-w-[1200px] flex-col items-center",
            children: [
              (0, a.jsx)("button", {
                onClick: o,
                className:
                  "group absolute left-2 top-5 flex h-[42px] w-[42px] items-center justify-center rounded-full bg-black hover:bg-black/50 md:left-0 md:top-10",
                children: (0, a.jsx)(u.R, {
                  className:
                    "!text-[24px] !text-white group-hover:!text-secondary-300",
                }),
              }),
              (0, a.jsxs)("div", {
                className:
                  "heading-lg-lg md:heading-lg-4xl relative mt-5 text-transparent md:mt-[70px]",
                style: { WebkitTextStroke: "1px #A2B6C5" },
                children: [
                  "Train.",
                  (0, a.jsx)("div", {
                    className:
                      "absolute bottom-0 h-2/3 w-full bg-gradient-to-b from-transparent to-[#1A2127]",
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "flex flex-col px-3",
                children: [
                  (0, a.jsxs)("div", {
                    className: "mt-6 flex items-center gap-5",
                    children: [
                      (0, a.jsx)(d(), {
                        src: "/img/activity/twitter-dark.svg",
                        alt: "twitter",
                        className: "object-cover",
                        height: 120,
                        width: 120,
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "flex h-full w-full flex-col content-between justify-between py-1",
                        children: [
                          (0, a.jsx)("div", {
                            className: "subheading-sm-md dark:text-white",
                            children: "X Clone",
                          }),
                          Z
                            ? (0, a.jsx)("button", {
                                disabled: !0,
                                className:
                                  "subheading-lg-xs flex w-full justify-center rounded-[10000px] bg-primary-300 py-2 uppercase text-secondary-800 md:w-[100px]",
                                children: (0, a.jsx)(v.Z, {
                                  className: "h-5 w-5",
                                }),
                              })
                            : (null == p ? void 0 : p.twitter)
                            ? M
                              ? (0, a.jsx)("button", {
                                  onClick: () => {
                                    L(!0);
                                  },
                                  disabled: R || !g,
                                  className: h()({
                                    "subheading-lg-xs w-full rounded-[10000px] py-2 uppercase md:w-[100px]":
                                      !0,
                                    "bg-primary-300 text-secondary-800": !R,
                                    "bg-black text-white": R,
                                  }),
                                  children: R ? "retraining..." : "retrain",
                                })
                              : (0, a.jsx)("button", {
                                  onClick: () => D(),
                                  disabled: R || !g,
                                  className: h()({
                                    "subheading-lg-xs w-[125px] rounded-[10000px] p-2 uppercase":
                                      !0,
                                    "bg-primary-300 text-secondary-800": !R,
                                    "bg-black text-white": R,
                                  }),
                                  children: R ? "generating..." : "generate",
                                })
                            : (0, a.jsx)("button", {
                                disabled: !g,
                                onClick: () => {
                                  U() && m();
                                },
                                className:
                                  "subheading-lg-xs w-full rounded-[10000px] bg-primary-300 py-2 uppercase text-secondary-800 md:w-[100px]",
                                children: "connect",
                              }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)("p", {
                    className:
                      "body-text-default mt-6 h-full text-secondary-400",
                    children:
                      "Connect X, generate or retrain your AI clone to talk just like you, 24/7. Your X Clone is trained on your public tweets and profile descriptions.",
                  }),
                  (0, a.jsxs)("div", {
                    className: "mt-6 flex flex-col gap-y-2",
                    children: [
                      (null == p ? void 0 : p.twitter) &&
                        (0, a.jsxs)("div", {
                          className: "flex items-center gap-x-2",
                          children: [
                            (0, a.jsx)("div", {
                              className: "h-3 w-3 rounded-full bg-green-300 ",
                            }),
                            (0, a.jsx)("img", {
                              src:
                                null === (t = null == p ? void 0 : p.twitter) ||
                                void 0 === t
                                  ? void 0
                                  : t.profilePictureUrl,
                              alt:
                                null === (s = null == p ? void 0 : p.twitter) ||
                                void 0 === s
                                  ? void 0
                                  : s.username,
                              className: "h-8 w-8 rounded-full",
                            }),
                            (0, a.jsxs)("span", {
                              className: "subheading-sm-sm dark:text-white",
                              children: [
                                "@",
                                null === (r = null == p ? void 0 : p.twitter) ||
                                void 0 === r
                                  ? void 0
                                  : r.username,
                              ],
                            }),
                          ],
                        }),
                      (0, a.jsx)("div", {
                        className:
                          "mt-10 flex w-full items-center gap-x-6 gap-y-4",
                      }),
                    ],
                  }),
                ],
              }),
              W &&
                (0, a.jsx)(b, {
                  handle:
                    null === (n = null == k ? void 0 : k.twitter) ||
                    void 0 === n
                      ? void 0
                      : n.username,
                  show: W,
                  onRetrain: () =>
                    C(void 0, void 0, void 0, function* () {
                      if (!U() || R || !M) return;
                      I(!0);
                      let {
                        character: e,
                        isValid: t,
                        errorMessage: s,
                        errorCode: a,
                      } = yield (0, N.m8)(k.id, M.id, M.brain.id);
                      if (!t) {
                        F(s), I(!1);
                        return;
                      }
                      P(e),
                        _(),
                        L(!1),
                        I(!1),
                        O(
                          !0,
                          j.CC.SUCCESS,
                          "- ".concat(x.Qo, " Crystals"),
                          "Character retrained successfully with new knowledge from X!",
                          j.d.BOTTOM
                        );
                    }),
                  onClose: () => {
                    L(!1);
                  },
                }),
            ],
          });
        },
        k = s(44175),
        S = s(92544),
        _ = s(43952),
        T = s(71176),
        A = s(59743),
        O = s(29069),
        R = s(71434),
        I = s(24413),
        M = function (e, t, s, a) {
          return new (s || (s = Promise))(function (r, n) {
            function l(e) {
              try {
                o(a.next(e));
              } catch (e) {
                n(e);
              }
            }
            function i(e) {
              try {
                o(a.throw(e));
              } catch (e) {
                n(e);
              }
            }
            function o(e) {
              var t;
              e.done
                ? r(e.value)
                : ((t = e.value) instanceof s
                    ? t
                    : new s(function (e) {
                        e(t);
                      })
                  ).then(l, i);
            }
            o((a = a.apply(e, t || [])).next());
          });
        },
        P = () => {
          var e;
          let t = {
              [j.Oo.MARKET_WIZ]: {
                name: o.N[o.W.CRYPTO_MARKET_WIZ].name,
                description: o.N[o.W.CRYPTO_MARKET_WIZ].description,
                requiresElite: o.N[o.W.CRYPTO_MARKET_WIZ].requiresElite,
                icon: o.N[o.W.CRYPTO_MARKET_WIZ].icon,
              },
              [j.Oo.RP_COMPANION]: {
                name: o.N[o.W.NSFW_ROLE_PLAY].name,
                description: o.N[o.W.NSFW_ROLE_PLAY].description,
                requiresElite: o.N[o.W.NSFW_ROLE_PLAY].requiresElite,
                icon: o.N[o.W.NSFW_ROLE_PLAY].icon,
              },
            },
            s = (0, y.useRouter)(),
            { getAccessToken: c } = (0, w.sv)(),
            {
              setUIMode: d,
              setDisplayNotification: u,
              setUsageLimitationMessage: x,
              setIsUsageLimitationModalOpen: m,
            } = (0, l.oR)((e) => e),
            { setSelectedCharacter: h } = (0, S.W)((e) => e),
            {
              isAuthReady: p,
              isAuthenticated: g,
              login: b,
              holoUser: C,
            } = (0, f.a)(),
            [P, W] = (0, i.useState)(!1),
            [L, Z] = (0, i.useState)(!1),
            [B, D] = (0, i.useState)(!1),
            [F, U] = (0, i.useState)(!1),
            [Y, K] = (0, i.useState)(!1),
            [X, q] = (0, i.useState)(!1),
            [z, H] = (0, i.useState)(),
            [Q, G] = (0, i.useState)(!1);
          (0, i.useEffect)(() => {
            if (p) {
              if (!C) {
                Z(!0);
                return;
              }
              $(null == C ? void 0 : C.id);
            }
          }, [p, C]);
          let J = (e) => {
              u(!0, j.CC.ERROR, "Error", e, j.d.BOTTOM);
            },
            V = () => !!p && (!!g || (b(), !1)),
            $ = (e) =>
              M(void 0, void 0, void 0, function* () {
                let {
                  character: t,
                  isValid: s,
                  errorMessage: a,
                } = yield (0, N.KA)(e);
                if (!s) {
                  J(a);
                  return;
                }
                H(t), Z(!0);
              }),
            ee = (e) =>
              M(void 0, void 0, void 0, function* () {
                if (!V() || X) return;
                if ((yield c(), L && z)) {
                  D(!0);
                  return;
                }
                q(!0);
                let {
                  character: t,
                  isValid: a,
                  errorMessage: r,
                  errorCode: n,
                } = yield (0, N.F)(C.id, e);
                if (!a) {
                  n === j.jK.USAGE_LIMIT ? (x(r, !0), m(!0)) : J(r), q(!1);
                  return;
                }
                h(t), s.push("/create/".concat(t.id));
              }),
            et = () =>
              M(void 0, void 0, void 0, function* () {
                if (!g) return b();
                if (!z) {
                  J(
                    "Could not find the in progress character. Please try refresh the page."
                  );
                  return;
                }
                h(z), s.push("/create/".concat(z.id));
              }),
            es = (e) => {
              if (!g) return b();
              if (
                t[e].requiresElite &&
                !(0, A.zB)(null == C ? void 0 : C.planId)
              ) {
                W(!0);
                return;
              }
              ee(e);
            },
            ea = () => {
              if (!g) return b();
              if (L && z) {
                D(!0);
                return;
              }
              G(!0);
            };
          return (0, a.jsxs)("div", {
            className: "hide-scrollbar max-h-screen w-full overflow-y-scroll",
            children: [
              (0, a.jsx)(O.Z, {
                open: P,
                onClose: () => W(!1),
                planId: j._r.ELITE,
              }),
              (0, a.jsx)(r.Z, {}),
              (0, a.jsx)(n.Z, {}),
              (0, a.jsxs)("div", {
                className:
                  "pl:8 hide-scrollbar flex h-full justify-center pt-[56px] lg:pl-[56px]",
                children: [
                  (0, a.jsx)(R.Z, {
                    show: B,
                    secondaryButtonOnClick: () => D(!1),
                    primaryButtonOnClick: () =>
                      M(void 0, void 0, void 0, function* () {
                        if (F) return;
                        if (!z) {
                          J(
                            "Could not find the in progress character. Please try refresh the page."
                          );
                          return;
                        }
                        U(!0);
                        let e = yield fetch(
                          "/api/users/"
                            .concat(C.id, "/characters/")
                            .concat(z.id, "/wip"),
                          {
                            method: "DELETE",
                            headers: { "Content-Type": "application/json" },
                          }
                        );
                        if (!e.ok) {
                          let t = yield e.json();
                          J(
                            "Could not delete the in progress character: ".concat(
                              t.errorMessage
                            )
                          );
                          return;
                        }
                        $(C.id), h(null), U(!1), D(!1);
                      }),
                    onClose: () => D(!1),
                    loading: F,
                    uiConfig: {
                      title: "Discard Draft?",
                      description:
                        "You already have a AI character in progress. Are you sure you want to discard your previous draft?",
                      primaryButtonText: "Discard",
                      secondaryButtonText: "Cancel",
                      secondaryButtonBgColor: "bg-secondary-100",
                      primaryButtonBgColor: "bg-primary-default",
                    },
                  }),
                  (0, a.jsx)(I.Z, {
                    show: Q,
                    onClose: () => G(!1),
                    onSelectMemecoin: (e) =>
                      M(void 0, void 0, void 0, function* () {
                        if (!e || !V() || X) return;
                        yield c(), q(!0);
                        let {
                          character: t,
                          isValid: a,
                          errorMessage: r,
                          errorCode: n,
                        } = yield (0, N.F)(C.id, j.Oo.MEMECOIN, e);
                        if (!a) {
                          n === j.jK.USAGE_LIMIT ? (x(r, !0), m(!0)) : J(r),
                            q(!1);
                          return;
                        }
                        h(t), s.push("/create/".concat(t.id));
                      }),
                  }),
                  !L && (0, a.jsx)(_.Z, { isOpen: !0 }),
                  L &&
                    (0, a.jsx)(a.Fragment, {
                      children: Y
                        ? (0, a.jsx)(E, { onClose: () => K(!1) })
                        : (0, a.jsxs)("div", {
                            className:
                              "flex w-full max-w-5xl flex-col items-start justify-between gap-x-2 gap-y-2 p-4 md:content-start md:items-start md:gap-y-0 md:p-4",
                            children: [
                              (0, a.jsx)("div", {
                                className:
                                  "heading-lg-lg md:heading-lg-3xl relative text-transparent",
                                style: { WebkitTextStroke: "1px #A2B6C5" },
                                children: "Create AI.",
                              }),
                              (0, a.jsxs)("div", {
                                className:
                                  "mb-4 flex w-full flex-col items-start gap-4 space-y-4 rounded-2xl px-2 py-4 md:flex-row md:items-start md:space-y-0 md:px-4",
                                children: [
                                  (0, a.jsxs)("div", {
                                    className:
                                      "flex w-full items-start gap-x-2",
                                    children: [
                                      (0, a.jsx)("img", {
                                        src: "/icons/creator-ai.svg",
                                        alt: "creator-ai",
                                        className: "h-7 w-7 object-cover",
                                      }),
                                      (0, a.jsxs)("div", {
                                        className:
                                          "flex flex-col justify-start",
                                        children: [
                                          (0, a.jsx)("p", {
                                            className:
                                              "subheading-sm-xs text-white",
                                            children: "Personality & Knowledge",
                                          }),
                                          (0, a.jsx)("span", {
                                            className:
                                              "body-text-xs text-secondary-400",
                                            children:
                                              "Customize what your agent knows, how it behaves, and what it sounds like.",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("div", {
                                    className:
                                      "flex w-full items-start gap-x-2",
                                    children: [
                                      (0, a.jsx)("img", {
                                        src: "/icons/creator-ai.svg",
                                        alt: "creator-ai",
                                        className: "h-7 w-7 object-cover",
                                      }),
                                      (0, a.jsxs)("div", {
                                        className: "flex flex-col",
                                        children: [
                                          (0, a.jsx)("p", {
                                            className:
                                              "subheading-sm-xs text-white",
                                            children: "3D Avatar",
                                          }),
                                          (0, a.jsx)("span", {
                                            className:
                                              "body-text-xs text-secondary-400",
                                            children:
                                              "Bring your AI to life as a 3D character. Express yourself with wearables, animations, and emotes.",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("div", {
                                    className:
                                      "flex w-full items-start gap-x-2",
                                    children: [
                                      (0, a.jsx)("img", {
                                        src: "/icons/creator-skills.svg",
                                        alt: "creator-ai",
                                        className: "h-7 w-7 object-cover",
                                      }),
                                      (0, a.jsxs)("div", {
                                        className: "flex flex-col",
                                        children: [
                                          (0, a.jsx)("p", {
                                            className:
                                              "subheading-sm-xs text-white",
                                            children: "Skills",
                                          }),
                                          (0, a.jsx)("span", {
                                            className:
                                              "body-text-xs text-secondary-400",
                                            children:
                                              "Unleash the power of custom models and agentic workflows.",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "mb-4 flex w-full items-center justify-start md:mb-6",
                                children: (0, a.jsxs)("div", {
                                  className:
                                    "grid w-full max-w-xl grid-cols-6 gap-2",
                                  children: [
                                    (0, a.jsxs)("button", {
                                      className:
                                        "col-span-2 flex aspect-square h-full w-full flex-col items-center justify-center gap-3 rounded-3xl border border-bordergray bg-black p-2 text-white transition-all duration-200 md:hover:bg-primary-default md:hover:text-black",
                                      // onClick: () => ee(j.Oo.DEFAULT),
                                      disabled: !L,
                                      children: [
                                        (0, a.jsx)("div", {
                                          className:
                                            "flex items-center justify-center",
                                          children: (0, a.jsx)(
                                            k.PlusOutlineIcon,
                                            { className: "h-7 w-7" }
                                          ),
                                        }),
                                        (0, a.jsx)("div", {
                                          className:
                                            "subheading-sm-xss md:subheading-lg-sm",
                                          children: "Create",
                                        }),
                                        X &&
                                          (0, a.jsx)(v.Z, {
                                            className:
                                              "h-4 w-4 text-secondary-200",
                                          }),
                                      ],
                                    }),
                                    z &&
                                      !X &&
                                      (0, a.jsxs)("div", {
                                        className:
                                          "relative col-span-4 flex w-full cursor-pointer items-center space-x-2 rounded-3xl border border-bordergray bg-black p-4 transition-transform duration-200 md:p-6 md:hover:translate-y-[-6px]",
                                        // onClick: () => et(),
                                        children: [
                                          (0, a.jsx)("img", {
                                            className:
                                              "mr-2 h-16 w-16 rounded-2xl object-cover md:h-32 md:w-32",
                                            src:
                                              null === (e = z.brain) ||
                                              void 0 === e
                                                ? void 0
                                                : e.image,
                                            alt: "pfp",
                                          }),
                                          (0, a.jsxs)("div", {
                                            className:
                                              "flex h-full flex-col items-start justify-start gap-1 md:py-2 ",
                                            children: [
                                              (0, a.jsxs)("div", {
                                                className:
                                                  "flex items-center justify-start space-x-2",
                                                children: [
                                                  (0, a.jsx)("div", {
                                                    className:
                                                      "subheading-lg-sm text-white",
                                                    children:
                                                      (null == z
                                                        ? void 0
                                                        : z.name) || "Draft AI",
                                                  }),
                                                  (0, a.jsx)("div", {
                                                    className:
                                                      "heading-sm-xsss rounded-md bg-whiteAlpha-200 p-1 uppercase text-secondary-200 backdrop-blur-sm",
                                                    children: "draft",
                                                  }),
                                                ],
                                              }),
                                              (null == z
                                                ? void 0
                                                : z.updatedAt) &&
                                                (0, a.jsxs)("div", {
                                                  className:
                                                    "body-text-sm text-secondary-500",
                                                  children: [
                                                    "Last edit",
                                                    " ",
                                                    (0, T.Uo)(
                                                      new Date(
                                                        (null == z
                                                          ? void 0
                                                          : z.updatedAt
                                                              ._seconds) * 1e3
                                                      )
                                                    ),
                                                  ],
                                                }),
                                              (0, a.jsx)("div", {
                                                className:
                                                  "body-text-default hidden overflow-ellipsis text-start text-secondary-300 md:block",
                                                children: (0, a.jsx)("p", {
                                                  className: "line-clamp-3",
                                                  children: z.brain.shortBio,
                                                }),
                                              }),
                                              (0, a.jsxs)("div", {
                                                className:
                                                  "flex justify-start gap-3 ",
                                                children: [
                                                  (0, a.jsx)("button", {
                                                    // onClick: et,
                                                    className: "md:hidden",
                                                    children: (0, a.jsx)(
                                                      k.EditSolidIcon,
                                                      {
                                                        className:
                                                          "h-4 w-4 text-secondary-200",
                                                      }
                                                    ),
                                                  }),
                                                  (0, a.jsx)("button", {
                                                    onClick: (e) => {
                                                      e.stopPropagation(),
                                                        D(!0);
                                                    },
                                                    children: (0, a.jsx)(
                                                      k.TrashSolidIcon,
                                                      {
                                                        className:
                                                          "h-4 w-4 text-secondary-200",
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                              }),
                              (0, a.jsxs)("div", {
                                className: "flex w-full flex-col items-start",
                                children: [
                                  (0, a.jsxs)("div", {
                                    className: "mb-2 md:mb-3",
                                    children: [
                                      (0, a.jsx)("p", {
                                        className:
                                          "subheading-lg-sm md:subheading-lg-md leading-6 dark:text-secondary-200",
                                        children: "Templates",
                                      }),
                                      (0, a.jsx)("p", {
                                        className:
                                          "body-text-sm md:body-text-default mt-2 dark:text-secondary-400",
                                        children:
                                          "Quickstart your creation through an already-made persona template.",
                                      }),
                                    ],
                                  }),
                                  (0, a.jsx)("div", {
                                    className:
                                      "grid w-full grid-cols-1 gap-3 pb-24 sm:grid-cols-2 md:grid-cols-2 md:pb-0 lg:grid-cols-3",
                                    children: (0, a.jsxs)(a.Fragment, {
                                      children: [
                                        (0, a.jsxs)("button", {
                                          className:
                                            "relative flex flex-col items-center rounded-3xl border border-bordergray bg-black p-6 shadow-md transition-transform duration-200 md:hover:-translate-y-2",
                                          // onClick: () => ea(),
                                          children: [
                                            (0, a.jsxs)("div", {
                                              children: [
                                                (0, a.jsx)("img", {
                                                  className:
                                                    "mx-auto mb-3 h-10 w-10 rounded-md",
                                                  src: o.N[o.W.MEMECOIN_MASTER]
                                                    .icon,
                                                  alt: "skill",
                                                }),
                                                (0, a.jsx)("div", {
                                                  className:
                                                    "subheading-lg-md mb-4 text-white",
                                                  children:
                                                    o.N[o.W.MEMECOIN_MASTER]
                                                      .name,
                                                }),
                                                (0, a.jsx)("div", {
                                                  className:
                                                    "body-text-default mb-8 text-center text-secondary-300",
                                                  children:
                                                    o.N[o.W.MEMECOIN_MASTER]
                                                      .description,
                                                }),
                                              ],
                                            }),
                                            (0, a.jsx)("div", {
                                              className:
                                                "flex flex-1 items-end",
                                              children: (0, a.jsx)("div", {
                                                className:
                                                  "subheading-lg-sm text-primary-default",
                                                children: "Choose Template",
                                              }),
                                            }),
                                          ],
                                        }),
                                        Object.keys(t).map((e) =>
                                          (0, a.jsxs)(
                                            "button",
                                            {
                                              className:
                                                "relative flex flex-col items-center rounded-3xl border border-bordergray bg-black p-6 shadow-md transition-transform duration-200 md:hover:-translate-y-2",
                                              // onClick: () => es(e),
                                              children: [
                                                (0, a.jsxs)("div", {
                                                  children: [
                                                    (0, a.jsx)("img", {
                                                      className:
                                                        "mx-auto mb-3 h-10 w-10 rounded-md",
                                                      src: t[e].icon,
                                                      alt: "skill",
                                                    }),
                                                    (0, a.jsx)("div", {
                                                      className:
                                                        "subheading-lg-md mb-4 text-white",
                                                      children: t[e].name,
                                                    }),
                                                    (0, a.jsx)("div", {
                                                      className:
                                                        "body-text-default mb-8 text-center text-secondary-300",
                                                      children:
                                                        t[e].description,
                                                    }),
                                                  ],
                                                }),
                                                (0, a.jsx)("div", {
                                                  className:
                                                    "flex flex-1 items-end",
                                                  children:
                                                    t[e].requiresElite &&
                                                    !(0, A.zB)(
                                                      null == C
                                                        ? void 0
                                                        : C.planId
                                                    )
                                                      ? (0, a.jsxs)("div", {
                                                          className:
                                                            "subheading-lg-xss flex cursor-pointer items-center justify-center rounded-full bg-gradient-to-br from-[#FFE791] to-[#FFCF24] px-12 py-2 uppercase text-secondary-800 hover:bg-opacity-90 hover:shadow-[0_0px_12px_2px_#DDE7FA80]",
                                                          children: [
                                                            (0, a.jsx)(
                                                              k.LockSolidIcon,
                                                              {
                                                                className:
                                                                  "mr-2 h-5 w-5 text-black",
                                                              }
                                                            ),
                                                            "Upgrade",
                                                          ],
                                                        })
                                                      : (0, a.jsx)("div", {
                                                          className:
                                                            "subheading-lg-sm text-primary-default",
                                                          children:
                                                            "Choose Template",
                                                        }),
                                                }),
                                              ],
                                            },
                                            e
                                          )
                                        ),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                    }),
                ],
              }),
            ],
          });
        };
    },
  },
  function (e) {
    e.O(
      0,
      [
        8388, 6047, 3464, 9626, 2641, 2929, 4175, 8427, 209, 7464, 5258, 4413,
        2888, 9774, 179,
      ],
      function () {
        return e((e.s = 59782));
      }
    ),
      (_N_E = e.O());
  },
]);
