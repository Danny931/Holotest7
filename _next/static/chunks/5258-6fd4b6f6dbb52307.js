"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5258],
  {
    57880: function (e, s, t) {
      var l = t(85893),
        a = t(86523),
        n = t(93967),
        i = t.n(n),
        r = t(67294),
        c = t(58484),
        o = t(25675),
        d = t.n(o),
        x = t(11163);
      s.Z = (e) => {
        let { show: s, lootboxAmount: t, onClose: n } = e,
          [o, u] = (0, r.useState)(!1),
          m = (0, x.useRouter)();
        return (
          (0, r.useEffect)(() => {
            u(!0);
          }, []),
          (0, l.jsx)(c.Z, {
            show: s,
            onClose: n,
            width: "lg",
            disableOverflow: !0,
            children: (0, l.jsxs)("div", {
              className: i()(
                " rounded-[16px] bg-black transition duration-300",
                o ? "opacity-100" : "opacity-0"
              ),
              children: [
                (0, l.jsx)("button", {
                  className: i()(
                    "absolute right-5 top-5 z-20 h-[40px] w-[40px] rounded-full p-0 text-secondary-200 transition duration-300 hover:bg-black/20",
                    o ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                  ),
                  onClick: n,
                  children: (0, l.jsx)(a.T, {}),
                }),
                (0, l.jsx)("div", {
                  className: "flex w-full flex-col items-center p-9 text-white",
                  children: (0, l.jsxs)("div", {
                    className: i()(
                      "flex w-full flex-col items-center transition duration-300",
                      o
                        ? "-translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    ),
                    children: [
                      (0, l.jsx)(d(), {
                        src: "https://hologramxyz.s3.amazonaws.com/assets/images/lootbox/lootbox.png",
                        alt: "lootbox",
                        height: 294,
                        width: 324,
                        className: "-mt-[140px] ",
                      }),
                      (0, l.jsxs)("span", {
                        className: "subheading-lg-lg dark:text-white",
                        children: ["You’ve received ", t, " Loot Boxes!"],
                      }),
                      (0, l.jsx)("button", {
                        onClick: () => m.push("/inventory?mode=lootbox"),
                        className:
                          "subheading-lg-md mt-6 w-full rounded-[10000px] bg-primary-300 py-3 leading-6 text-secondary-800",
                        children: "VIEW IN INVENTORY",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          })
        );
      };
    },
    83691: function (e, s, t) {
      var l = t(85893),
        a = t(67294),
        n = t(58484),
        i = t(93967),
        r = t.n(i),
        c = t(86523),
        o = t(71176),
        d = t(39879);
      s.Z = (e) => {
        let { open: s, onClose: t, expirationDate: i } = e,
          [x, u] = (0, a.useState)(!1),
          [m, p] = (0, a.useState)(4);
        return (
          (0, a.useEffect)(() => {
            u(!0), s && p(4);
          }, [s]),
          (0, a.useEffect)(() => {
            if (!s) return;
            if (0 === m) {
              t();
              return;
            }
            let e = setInterval(() => {
              p((e) => e - 1);
            }, 1e3);
            return () => {
              clearInterval(e);
            };
          }, [s, m, t]),
          (0, l.jsx)(n.Z, {
            show: s,
            onClose: t,
            width: "lg",
            disableOutsideClick: !0,
            children: (0, l.jsxs)("div", {
              className: r()(
                "flex max-h-[90vh] flex-row overflow-y-scroll rounded-3xl bg-black p-9 text-white transition duration-300",
                x ? "opacity-100" : "opacity-0"
              ),
              children: [
                (0, l.jsx)("button", {
                  className: r()(
                    "absolute right-4 top-2 z-20 h-5 w-5 rounded-full p-0 text-secondary-500 transition duration-300 hover:bg-black/20 md:right-5 md:top-5 md:h-[40px] md:w-[40px]",
                    x ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                  ),
                  onClick: t,
                  children: (0, l.jsx)(c.T, {}),
                }),
                (0, l.jsxs)("div", {
                  className: "flex w-full flex-col",
                  children: [
                    x &&
                      (0, l.jsx)(d.J5, {
                        src: "https://hologramxyz.s3.amazonaws.com/assets/lotties/countdown-light.json",
                        autoplay: 4 === m,
                        className: "h-20",
                      }),
                    (0, l.jsx)("h1", {
                      className:
                        "subheading-lg-lg w-full text-center leading-[28.8px] text-white",
                      children: "Payment Successful",
                    }),
                    (0, l.jsxs)("p", {
                      className:
                        "body-text-lg mt-3 text-center leading-[20.8px] text-secondary-400",
                      children: [
                        "Thank you for your purchase! Your premium plan is now active until",
                        (0, l.jsx)("span", {
                          className: "ml-1 font-bold",
                          children: (0, o.lX)(i),
                        }),
                        ".",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      };
    },
    362: function (e, s, t) {
      t.d(s, {
        Z: function () {
          return Z;
        },
      });
      var l,
        a,
        n = t(85893),
        i = t(67294),
        r = t(26972),
        c = t(4234),
        o = t(34614),
        d = t(17428),
        x = t(70010),
        u = t(20726),
        m = t.n(u),
        p = t(93967),
        h = t.n(p),
        f = t(25675),
        b = t.n(f),
        v = t(8559),
        g = t(91892),
        j = t(86115),
        y = t(69328),
        N = t(48204),
        w = t(93924),
        E = t(5920),
        T = t(59743),
        O = t(71176),
        C = t(21003),
        A = (e) => {
          let {
              selectedPlan: s,
              selectedCustomDuration: t,
              billingMode: l,
              renderTotalDetails: a,
              onCheckout: r,
              setBillingMode: c,
              setSelectedCustomDuration: o,
              onChoosePremiumPlanClicked: d,
              onChooseElitePlanClicked: x,
              getPlanPriceForType: u,
              getTotalPrice: p,
            } = e,
            { isAuthReady: f, holoUser: A } = (0, C.a)(),
            [L, R] = (0, i.useState)(!1),
            [k, Y] = (0, i.useState)(!1),
            [F, I] = (0, i.useState)(!1),
            [S, M] = (0, i.useState)(0),
            [P, U] = (0, i.useState)({ earnCount: 0, nextEarn: 0 }),
            D = null == s ? void 0 : s.id.split(" ")[0],
            H = "Elite" === D ? 3 : 6,
            B =
              "https://hologramxyz.s3.amazonaws.com/assets/images/upgrade/lootbox-unlock.png",
            z = (e, s) => {
              let t = e - (s % e);
              return {
                earnCount: Math.floor(s / e),
                nextEarn: t === e ? e : t,
              };
            };
          return ((0, i.useEffect)(() => {
            let e = {
                [v.vO.QUARTERLY]: 3,
                [v.vO.YEARLY]: 12,
                [v.vO.MONTHLY]: 1,
              },
              s = l === v.vO.CUSTOM ? t : e[l],
              a = z(H, s),
              n = s % H,
              i = 0 === n ? 100 : (n / H) * 100;
            M(i), U(a), 100 === i && Y(!0);
            let r = setTimeout(() => {
              Y(!1), 100 === i && M(0);
            }, 1e3);
            return () => {
              clearTimeout(r);
            };
          }, [t, D, l, 3, 6]),
          (0, i.useEffect)(
            () => ("Elite" === D ? x() : "Premium" === D ? d() : void 0),
            [l, D]
          ),
          (0, i.useEffect)(() => {
            if (f) {
              if (!(0, T.HE)(null == A ? void 0 : A.planId, D + " " + l)) {
                c(v.vO.CUSTOM);
                return;
              }
              c(v.vO.YEARLY);
            }
          }, [f]),
          A)
            ? (0, n.jsxs)("div", {
                className:
                  "no-scrollbar flex w-full flex-col gap-y-4 overflow-y-auto",
                children: [
                  (0, n.jsx)("div", {
                    className: "flex w-full flex-col",
                    children: (0, n.jsxs)("div", {
                      className: "flex flex-col",
                      children: [
                        (0, n.jsxs)("div", {
                          className: h()(
                            "heading-lg-sm flex items-center gap-x-1 rounded-t-3xl capitalize",
                            "Premium" === D && "text-green-400",
                            "Elite" === D && "text-yellow-400"
                          ),
                          children: [
                            "Elite" === D
                              ? (0, n.jsx)("img", {
                                  src: "/icons/membership/elite-upgrade.svg",
                                  alt: "premium",
                                  className: "h-6 w-6",
                                })
                              : (0, n.jsx)("img", {
                                  src: "/icons/membership/premium-upgrade.svg",
                                  alt: "premium",
                                  className: "h-6 w-6",
                                }),
                            "Premium" === D &&
                              (0, n.jsx)(g.bD, {
                                text: D,
                                color1: "#08EDDF",
                                color2: "#8AE09C",
                                color3: "#CEED8B",
                              }),
                            "Elite" === D &&
                              (0, n.jsx)(g.bD, {
                                text: D,
                                color1: "#FFE791",
                                color3: "#FFCF24",
                                direction: "bg-gradient-to-tl",
                              }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className: "flex flex-col px-2 pt-4",
                          children: [
                            (0, n.jsxs)("div", {
                              className: "flex flex-col gap-y-3",
                              children: [
                                (0, n.jsxs)("button", {
                                  onClick: () => {
                                    c(v.vO.YEARLY);
                                  },
                                  disabled: !(0, T.HE)(
                                    null == A ? void 0 : A.planId,
                                    D + " " + v.vO.YEARLY
                                  ),
                                  className: h()(
                                    "relative flex justify-between overflow-hidden rounded-xl  bg-blackAlpha-100 p-4",
                                    l === v.vO.YEARLY
                                      ? "ring-[2px] ring-primary-300"
                                      : "ring-[1px] ring-whiteAlpha-200 hover:ring-secondary-500"
                                  ),
                                  children: [
                                    !(0, T.HE)(
                                      null == A ? void 0 : A.planId,
                                      D + " " + v.vO.YEARLY
                                    ) &&
                                      (0, n.jsx)("div", {
                                        className:
                                          "absolute left-0 top-0 h-full w-full bg-black/50",
                                      }),
                                    (0, n.jsxs)("div", {
                                      className: "flex items-center gap-x-2",
                                      children: [
                                        (0, n.jsx)("div", {
                                          className: h()(
                                            "flex h-5 w-5 items-center justify-center rounded-full border-2 ",
                                            l === v.vO.YEARLY
                                              ? "border-primary-300"
                                              : "border-secondary-600"
                                          ),
                                          children:
                                            l === v.vO.YEARLY &&
                                            (0, n.jsx)("p", {
                                              className: h()(
                                                " h-[10px] w-[10px] rounded-full bg-primary-300"
                                              ),
                                            }),
                                        }),
                                        (0, n.jsx)("span", {
                                          className:
                                            "subheading-lg-xss leading-[14.4px] text-white",
                                          children: "Annually",
                                        }),
                                        (0, n.jsx)("span", {
                                          className:
                                            "subheading-lg-xss rounded bg-primary-300 px-1 py-0.5 leading-[14.4px] text-secondary-800",
                                          children: "30%OFF",
                                        }),
                                      ],
                                    }),
                                    (0, n.jsxs)("div", {
                                      className:
                                        " body-text-sm text-secondary-400",
                                      children: [
                                        (0, n.jsxs)("span", {
                                          className:
                                            " font-avenir text-[14px] font-bold leading-[18.2px] text-primary-300",
                                          children: ["$", u(v.vO.YEARLY)],
                                        }),
                                        "/mo",
                                      ],
                                    }),
                                  ],
                                }),
                                (0, n.jsxs)("button", {
                                  onClick: () => {
                                    c(v.vO.QUARTERLY);
                                  },
                                  disabled: !(0, T.HE)(
                                    null == A ? void 0 : A.planId,
                                    D + " " + v.vO.QUARTERLY
                                  ),
                                  className: h()(
                                    "relative flex justify-between overflow-hidden rounded-xl  bg-blackAlpha-100 p-4",
                                    l === v.vO.QUARTERLY
                                      ? "ring-[2px] ring-primary-300"
                                      : "ring-[1px] ring-whiteAlpha-200 hover:ring-secondary-500"
                                  ),
                                  children: [
                                    !(0, T.HE)(
                                      null == A ? void 0 : A.planId,
                                      D + " " + v.vO.QUARTERLY
                                    ) &&
                                      (0, n.jsx)("div", {
                                        className:
                                          "absolute left-0 top-0 h-full w-full bg-black/50",
                                      }),
                                    (0, n.jsxs)("div", {
                                      className: "flex items-center gap-x-2",
                                      children: [
                                        (0, n.jsx)("div", {
                                          className: h()(
                                            "flex h-5 w-5 items-center justify-center rounded-full border-2 ",
                                            l === v.vO.QUARTERLY
                                              ? "border-primary-300"
                                              : "border-secondary-600"
                                          ),
                                          children:
                                            l === v.vO.QUARTERLY &&
                                            (0, n.jsx)("p", {
                                              className: h()(
                                                " h-[10px] w-[10px] rounded-full bg-primary-300"
                                              ),
                                            }),
                                        }),
                                        (0, n.jsx)("span", {
                                          className:
                                            "subheading-lg-xss leading-[14.4px] text-white",
                                          children: "Quarterly",
                                        }),
                                        (0, n.jsx)("span", {
                                          className:
                                            "subheading-lg-xss rounded bg-secondary-200 px-1 py-0.5 leading-[14.4px] text-secondary-800",
                                          children: "10%OFF",
                                        }),
                                      ],
                                    }),
                                    (0, n.jsxs)("div", {
                                      className:
                                        " body-text-sm text-secondary-400",
                                      children: [
                                        (0, n.jsxs)("span", {
                                          className:
                                            " font-avenir text-[14px] font-bold leading-[18.2px] text-primary-300",
                                          children: ["$", u(v.vO.QUARTERLY)],
                                        }),
                                        "/mo",
                                      ],
                                    }),
                                  ],
                                }),
                                (0, n.jsxs)("button", {
                                  onClick: () => {
                                    c(v.vO.MONTHLY);
                                  },
                                  disabled: !(0, T.HE)(
                                    null == A ? void 0 : A.planId,
                                    D + " " + v.vO.MONTHLY
                                  ),
                                  className: h()(
                                    "relative flex justify-between overflow-hidden rounded-xl bg-blackAlpha-100 p-4",
                                    l === v.vO.MONTHLY
                                      ? "ring-[2px] ring-primary-300"
                                      : "ring-[1px] ring-whiteAlpha-200 hover:ring-secondary-500"
                                  ),
                                  children: [
                                    !(0, T.HE)(
                                      null == A ? void 0 : A.planId,
                                      D + " " + v.vO.MONTHLY
                                    ) &&
                                      (0, n.jsx)("div", {
                                        className:
                                          "absolute left-0 top-0 h-full w-full bg-black/50",
                                      }),
                                    (0, n.jsxs)("div", {
                                      className: "flex items-center gap-x-2",
                                      children: [
                                        (0, n.jsx)("div", {
                                          className: h()(
                                            "flex h-5 w-5 items-center justify-center rounded-full border-2 ",
                                            l === v.vO.MONTHLY
                                              ? "border-primary-300"
                                              : "border-secondary-600"
                                          ),
                                          children:
                                            l === v.vO.MONTHLY &&
                                            (0, n.jsx)("p", {
                                              className: h()(
                                                " h-[10px] w-[10px] rounded-full bg-primary-300"
                                              ),
                                            }),
                                        }),
                                        (0, n.jsx)("span", {
                                          className:
                                            "subheading-lg-xss leading-[14.4px] text-white",
                                          children: "Monthly",
                                        }),
                                      ],
                                    }),
                                    (0, n.jsxs)("div", {
                                      className:
                                        " body-text-sm text-secondary-400",
                                      children: [
                                        (0, n.jsxs)("span", {
                                          className:
                                            " font-avenir text-[14px] font-bold leading-[18.2px] text-primary-300",
                                          children: ["$", u(v.vO.MONTHLY)],
                                        }),
                                        "/mo",
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, n.jsxs)("div", {
                              onClick: () => {
                                c(v.vO.CUSTOM);
                              },
                              className: h()(
                                "group/button mt-3 flex w-full cursor-pointer flex-col  rounded-xl bg-blackAlpha-300 p-4",
                                l === v.vO.CUSTOM
                                  ? "ring-[2px] ring-primary-300"
                                  : "ring-[1px] ring-whiteAlpha-200 hover:ring-secondary-500"
                              ),
                              children: [
                                (0, n.jsxs)("div", {
                                  className:
                                    "flex w-full items-center justify-between ",
                                  children: [
                                    (0, n.jsxs)("div", {
                                      className: "flex items-center gap-x-2",
                                      children: [
                                        (0, n.jsx)("div", {
                                          className: h()(
                                            "flex h-5 w-5 items-center justify-center rounded-full border-2 ",
                                            l === v.vO.CUSTOM
                                              ? "border-primary-300"
                                              : "border-secondary-600"
                                          ),
                                          children:
                                            l === v.vO.CUSTOM &&
                                            (0, n.jsx)("p", {
                                              className: h()(
                                                " h-[10px] w-[10px] rounded-full bg-primary-300"
                                              ),
                                            }),
                                        }),
                                        (0, n.jsx)("span", {
                                          className:
                                            "subheading-lg-xss leading-[14.4px] text-white",
                                          children: "Custom",
                                        }),
                                      ],
                                    }),
                                    (0, n.jsxs)("div", {
                                      className: "flex items-center gap-x-1",
                                      children: [
                                        (0, n.jsxs)("div", {
                                          className:
                                            "jsx-8d72dac0f6bcaaeb " +
                                            (h()(
                                              "subheading-sm-sm flex items-center justify-between  rounded-full ",
                                              F
                                                ? "ring-1 ring-red-500"
                                                : "f ring-[1px] ring-secondary-600 hover:ring-secondary-400"
                                            ) || ""),
                                          children: [
                                            (0, n.jsx)("button", {
                                              onClick: () => {
                                                if (t <= 1) return I(!0);
                                                o(t - 1);
                                              },
                                              className:
                                                "jsx-8d72dac0f6bcaaeb w-7 text-center",
                                              children: "-",
                                            }),
                                            (0, n.jsx)("input", {
                                              type: "number",
                                              onChange: (e) => {
                                                if (
                                                  !(
                                                    Number(e.target.value) > 100
                                                  )
                                                ) {
                                                  if ("" === e.target.value)
                                                    return o(null);
                                                  if (
                                                    0 >= Number(e.target.value)
                                                  )
                                                    return o(1);
                                                  o(Number(e.target.value));
                                                }
                                              },
                                              value: t,
                                              className:
                                                "jsx-8d72dac0f6bcaaeb " +
                                                (h()(
                                                  "subheading-sm-sm max-w-8 bg-transparent  text-center  text-secondary-400 !ring-transparent focus:!ring-transparent group-hover/button:!text-white",
                                                  l === v.vO.CUSTOM &&
                                                    "!text-white"
                                                ) || ""),
                                            }),
                                            (0, n.jsx)(m(), {
                                              id: "8d72dac0f6bcaaeb",
                                              children:
                                                'input[type="number"].jsx-8d72dac0f6bcaaeb::-webkit-inner-spin-button,input[type="number"].jsx-8d72dac0f6bcaaeb::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type="number"].jsx-8d72dac0f6bcaaeb{-moz-appearance:textfield}',
                                            }),
                                            (0, n.jsx)("button", {
                                              onClick: () => {
                                                F && I(!1),
                                                  t >= 100 || o(t + 1);
                                              },
                                              className:
                                                "jsx-8d72dac0f6bcaaeb w-7 text-center",
                                              children: "+",
                                            }),
                                          ],
                                        }),
                                        (0, n.jsx)("div", {
                                          className: "body-text-default",
                                          children: "Months",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                F &&
                                  (0, n.jsx)("p", {
                                    className: "mt-2 flex w-full items-center",
                                    children: (0, n.jsx)("span", {
                                      className:
                                        "body-text-sm w-full leading-[15.6px] text-red-500 ",
                                      children:
                                        "You need to at least pay 1 month upfront.",
                                    }),
                                  }),
                                (0, n.jsx)(w.U, {
                                  in: l === v.vO.CUSTOM,
                                  animateOpacity: !0,
                                  children: (0, n.jsxs)("p", {
                                    className:
                                      "body-text-sm mt-2 text-start leading-[15.6px] text-secondary-500",
                                    children: [
                                      "Pay upfront to extend your subscription to",
                                      " ",
                                      (0, n.jsx)("span", {
                                        className:
                                          "subheading-lg-xss text-start",
                                        children: (0, O.lX)(
                                          (0, T.MH)(
                                            null == A ? void 0 : A.planId,
                                            null == A
                                              ? void 0
                                              : A.planExpiresAt,
                                            null == s ? void 0 : s.id,
                                            t
                                          )
                                        ),
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            (0, n.jsxs)("div", {
                              className:
                                "mt-3 flex flex-col gap-y-2 rounded-xl bg-whiteAlpha-50 p-4",
                              children: [
                                (0, g.z3)(),
                                (0, n.jsx)("div", {
                                  className:
                                    "subheading-sm-xss leading-[14.8px]",
                                  children: (0, n.jsxs)("span", {
                                    className:
                                      "bg-gradient-to-br   from-[#D3E3FF] via-[#BED6FF] to-[#9DBCFF] bg-clip-text text-transparent",
                                    children: [
                                      "Get a FREE loot box with every ",
                                      H,
                                      " months of Elite plan purchase.",
                                    ],
                                  }),
                                }),
                                P.earnCount >= 0 &&
                                  (0, n.jsx)("div", {
                                    className:
                                      "my-2 h-[1px] w-full bg-whiteAlpha-200",
                                  }),
                                (0, n.jsx)(w.U, {
                                  in: P.earnCount >= 0 || l === v.vO.CUSTOM,
                                  animateOpacity: !0,
                                  children: (0, n.jsxs)("div", {
                                    className:
                                      "flex h-full w-full flex-col items-center",
                                    children: [
                                      (0, n.jsxs)("div", {
                                        className: "relative flex w-full ",
                                        children: [
                                          (0, n.jsxs)("div", {
                                            className:
                                              "flex h-full w-[180px] flex-col  gap-y-3",
                                            children: [
                                              (0, n.jsxs)("p", {
                                                className:
                                                  "subheading-sm-xs leading-[14px]",
                                                children: [
                                                  P.nextEarn,
                                                  " More months to earn",
                                                ],
                                              }),
                                              (0, n.jsx)(E.E, {
                                                value: S,
                                                sx: {
                                                  "& div": {
                                                    background: "".concat(
                                                      0 !== S
                                                        ? "linear-gradient(to left, #D3E3FF, #BED6FF, #9DBCFF)"
                                                        : "#000"
                                                    ),
                                                    transition: "".concat(
                                                      0 !== S
                                                        ? "width 0.5s ease-out"
                                                        : "width 0.5s ease-in"
                                                    ),
                                                  },
                                                },
                                                className:
                                                  "!h-2 !rounded-[10000px] !bg-black",
                                              }),
                                            ],
                                          }),
                                          (0, n.jsxs)("div", {
                                            className:
                                              "absolute right-0 flex h-full min-h-[60px]  min-w-[88px] items-center ",
                                            children: [
                                              (0, n.jsxs)("div", {
                                                className:
                                                  "relative flex h-full w-full items-center justify-center ",
                                                children: [
                                                  (0, n.jsx)(b(), {
                                                    src: k
                                                      ? B
                                                      : "https://hologramxyz.s3.amazonaws.com/assets/images/upgrade/lootbox-lock.png",
                                                    alt: "lock-lootbox",
                                                    width: 60,
                                                    height: 60,
                                                    className:
                                                      "absolute left-0 z-10 h-[60px] w-[60px] object-cover",
                                                  }),
                                                  k
                                                    ? (0, n.jsx)("div", {
                                                        className: h()(
                                                          "absolute left-1/2 top-1/2 z-20 flex h-4 w-4 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-green-400 "
                                                        ),
                                                        children: (0, n.jsx)(
                                                          j.n,
                                                          {
                                                            className:
                                                              " !text-[10px] !text-black",
                                                          }
                                                        ),
                                                      })
                                                    : (0, n.jsx)(y.m, {
                                                        className: h()(
                                                          " absolute left-1/2 top-1/2 z-20  -translate-x-1/2 -translate-y-1/2 !text-sm !text-black "
                                                        ),
                                                      }),
                                                ],
                                              }),
                                              (0, n.jsxs)("p", {
                                                className:
                                                  "subheading-lg-xs ml-1 min-w-6",
                                                children: [
                                                  "x ",
                                                  P.earnCount + 1,
                                                  " ",
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      !L &&
                                        P.earnCount > 0 &&
                                        (0, n.jsxs)("button", {
                                          onClick: () => R(!0),
                                          className:
                                            "subheading-sm-xss mt-6 flex items-center justify-center text-secondary-400 lg:hidden",
                                          children: [
                                            "Learn More",
                                            (0, n.jsx)(N.v, {
                                              className:
                                                "!text-[16px] !text-secondary-400",
                                            }),
                                          ],
                                        }),
                                      (0, n.jsx)("div", {
                                        className: h()(
                                          "mt-8 block  w-full lg:hidden",
                                          l === v.vO.CUSTOM && ""
                                        ),
                                        children:
                                          P.earnCount > 0 &&
                                          L &&
                                          (0, n.jsxs)("div", {
                                            className:
                                              "flex h-full w-full items-center justify-between lg:hidden ",
                                            children: [
                                              (0, n.jsxs)("p", {
                                                className:
                                                  "subheading-sm-xs flex items-center leading-[14px] ",
                                                children: ["Now earning", " "],
                                              }),
                                              (0, n.jsxs)("div", {
                                                className:
                                                  "flex items-center gap-x-1",
                                                children: [
                                                  (0, n.jsx)(b(), {
                                                    src: B,
                                                    alt: "unlock-loote",
                                                    width: 60,
                                                    height: 60,
                                                    className: "object-cover",
                                                  }),
                                                  (0, n.jsxs)("p", {
                                                    className:
                                                      " subheading-lg-xs min-w-6",
                                                    children: [
                                                      "x ",
                                                      P.earnCount,
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                      }),
                                      (0, n.jsx)("div", {
                                        className: h()(
                                          "mt-8 hidden w-full lg:block",
                                          l === v.vO.CUSTOM && ""
                                        ),
                                        children:
                                          P.earnCount > 0 &&
                                          (0, n.jsxs)("div", {
                                            className:
                                              "hidden h-full w-full items-center justify-between lg:flex ",
                                            children: [
                                              (0, n.jsxs)("p", {
                                                className:
                                                  "subheading-sm-xs flex items-center leading-[14px] ",
                                                children: ["Now earning", " "],
                                              }),
                                              (0, n.jsxs)("div", {
                                                className:
                                                  "flex items-center gap-x-1",
                                                children: [
                                                  (0, n.jsx)(b(), {
                                                    src: B,
                                                    alt: "unlock-loote",
                                                    width: 60,
                                                    height: 60,
                                                    className: "object-cover ",
                                                  }),
                                                  (0, n.jsxs)("p", {
                                                    className:
                                                      "subheading-lg-xs min-w-6",
                                                    children: [
                                                      "x ",
                                                      P.earnCount,
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, n.jsxs)("div", {
                    className: "flex flex-col",
                    children: [
                      (0, n.jsx)("div", {
                        className: "flex flex-col gap-y-4",
                        children: a,
                      }),
                      (0, n.jsx)("div", {
                        className: "my-4 h-[1px] w-full bg-whiteAlpha-200",
                      }),
                      (0, n.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [
                          (0, n.jsx)("span", {
                            className: "subheading-sm-xs",
                            children: "Total",
                          }),
                          (0, n.jsxs)("span", {
                            className: "subheading-lg-xs",
                            children: ["(USD) $", Number(p()).toFixed(2)],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsx)("button", {
                    onClick: r,
                    className:
                      "subheading-lg-sm  flex cursor-pointer items-center justify-center rounded-[10000px] bg-primary-300 px-4 py-2 text-secondary-800",
                    children: "CHECK OUT",
                  }),
                  (0, n.jsx)("div", {
                    className: "block h-6 w-full opacity-0 ",
                    children: ".",
                  }),
                ],
              })
            : null;
        },
        L = t(7823),
        R = t(57954),
        k = t(99319),
        Y = t(27076),
        F = t(34425),
        I = t(45953),
        S = t(67795),
        M = t(78033),
        P = t(30129),
        U = function (e, s, t, l) {
          return new (t || (t = Promise))(function (a, n) {
            function i(e) {
              try {
                c(l.next(e));
              } catch (e) {
                n(e);
              }
            }
            function r(e) {
              try {
                c(l.throw(e));
              } catch (e) {
                n(e);
              }
            }
            function c(e) {
              var s;
              e.done
                ? a(e.value)
                : ((s = e.value) instanceof t
                    ? s
                    : new t(function (e) {
                        e(s);
                      })
                  ).then(i, r);
            }
            c((l = l.apply(e, s || [])).next());
          });
        };
      ((l = a || (a = {}))[(l.WALLET = 0)] = "WALLET"),
        (l[(l.FIAT = 1)] = "FIAT");
      var D = (e) => {
          let {
              selectedPlan: s,
              stripeSubscription: t,
              selectedCustomDuration: l,
              billingMode: r,
              renderTotalDetails: c,
              isAutoRenew: o,
              setIsAutoRenew: d,
              onFiatCheckout: x,
              startCryptoTransaction: u,
              onClose: m,
              getTotalPrice: p,
            } = e,
            { holoUser: f } = (0, C.a)(),
            { wallet: b } = (0, R.O)(),
            { setDisplayNotification: j } = (0, k.oR)((e) => e),
            [y, N] = (0, i.useState)(a.FIAT),
            [w, E] = (0, i.useState)(),
            [A, D] = (0, i.useState)(),
            [H, B] = (0, i.useState)(),
            [z, _] = (0, i.useState)(""),
            [W, Q] = (0, i.useState)(!0),
            [Z, $] = (0, i.useState)(!1),
            [G, X] = (0, i.useState)(),
            [V, q] = (0, i.useState)(),
            K = +(null == b ? void 0 : b.chainId.split(":")[1]),
            J = (0, I.u3)(K),
            { data: ee } = (0, M.K)({
              address: null == b ? void 0 : b.address,
              chainId: K,
            }),
            { data: es } = (0, P.N)({
              to: F.ET,
              value: "",
              enabled: null == f ? void 0 : f.externalWalletAddress,
              chainId: K,
            });
          (0, i.useEffect)(() => {
            b && et();
          }, [b]);
          let et = () =>
              U(void 0, void 0, void 0, function* () {
                Q(!0);
                let e = yield (0, I.sG)([v.Wr.BNB, v.Wr.ETH], v.F.USD);
                if (!e) {
                  j(
                    !0,
                    v.CC.ERROR,
                    "ERROR!",
                    "Could not load prices. Please try again in a moment.",
                    v.d.TOP
                  );
                  return;
                }
                E(e[v.Wr.ETH]),
                  D(e[v.Wr.BNB]),
                  _(null == s ? void 0 : s.id.split(" ")[0].toLowerCase()),
                  q(
                    ea(
                      null == J ? void 0 : J.toUpperCase(),
                      e[v.Wr.ETH],
                      e[v.Wr.BNB]
                    )
                  ),
                  X(
                    en(
                      null == J ? void 0 : J.toUpperCase(),
                      e[v.Wr.ETH],
                      e[v.Wr.BNB]
                    )
                  ),
                  Q(!1);
              }),
            el = () =>
              U(void 0, void 0, void 0, function* () {
                $(!0), u(s, w, A), m();
              }),
            ea = (e, s, t) => {
              let l = "ETH" === e,
                a = "TBNB" === e || "BNB" === e;
              return l
                ? "$".concat(s.toFixed(4), " USD = 1 ").concat(e)
                : a
                ? "$".concat(t.toFixed(4), " USD = 1 ").concat(e)
                : void 0;
            },
            en = (e, s, t) => {
              let l = "ETH" === e,
                a = "TBNB" === e || "BNB" === e;
              return l
                ? "".concat((p() / s).toFixed(4), " ").concat(e)
                : a
                ? "".concat((p() / t).toFixed(4), " ").concat(e)
                : void 0;
            },
            ei = (e, s) =>
              "ETH" === e
                ? (w * s).toFixed(2)
                : "TBNB" === e || "BNB" === e
                ? (A * s).toFixed(2)
                : void 0;
          return (
            (0, i.useMemo)(() => {
              es && B(Number(ei(J, Number((0, S.o)(es)))));
            }, [es, K, W]),
            (0, n.jsx)(n.Fragment, {
              children: (0, n.jsxs)("div", {
                className: h()(
                  "no-scrollbar flex h-full w-full translate-x-0 transform flex-col gap-y-6 overflow-y-auto overflow-x-hidden  opacity-100 transition duration-300"
                ),
                children: [
                  (0, n.jsx)("div", {
                    className: "body-text-default",
                    children: "PURCHASE DETAILS",
                  }),
                  (0, n.jsxs)("div", {
                    className:
                      "flex flex-col rounded-[20px] bg-blackAlpha-300 p-6",
                    children: [
                      (0, n.jsxs)("div", {
                        className: "flex flex-col gap-y-4",
                        children: [
                          (0, n.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [
                              (0, n.jsx)("span", {
                                className:
                                  "subheading-sm-xs text-secondary-500",
                                children: "Product",
                              }),
                              (0, n.jsxs)("p", {
                                className: h()("subheading-lg-xs capitalize "),
                                children: [
                                  "premium" === z &&
                                    (0, n.jsx)(g.bD, {
                                      text: "Holoworld ".concat(z, " Plan"),
                                      color1: "#08EDDF",
                                      color2: "#8AE09C",
                                      color3: "#CEED8B",
                                    }),
                                  "elite" === z &&
                                    (0, n.jsx)(g.bD, {
                                      text: "Holoworld ".concat(z, " Plan"),
                                      color1: "#FFE791",
                                      color3: "#FFCF24",
                                      direction: "bg-gradient-to-tl",
                                    }),
                                ],
                              }),
                            ],
                          }),
                          (0, n.jsx)("div", {
                            className: "w-full",
                            children: c,
                          }),
                        ],
                      }),
                      (0, n.jsx)("div", {
                        className: "my-4 h-[1px] w-full bg-whiteAlpha-200",
                      }),
                      (0, n.jsxs)("div", {
                        className:
                          "flex items-center justify-between text-white",
                        children: [
                          (0, n.jsx)("span", {
                            className: "subheading-sm-xs",
                            children: "Total Price",
                          }),
                          (0, n.jsxs)("span", {
                            className: "subheading-lg-xs",
                            children: ["(USD) $", p().toFixed(1)],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className: "flex flex-col gap-y-2",
                    children: [
                      (0, n.jsx)("span", {
                        className: "heading-sm-xsss text-white",
                        children: "Select Payment Method",
                      }),
                      (0, n.jsxs)("div", {
                        className:
                          "flex w-full cursor-pointer items-center justify-between",
                        children: [
                          (0, n.jsxs)("div", {
                            className: h()(
                              "flex  w-[144px] flex-col items-center justify-center rounded-xl border-[2px]  bg-black p-4",
                              y === a.WALLET
                                ? " border-primary-300"
                                : "border-bordergray"
                            ),
                            onClick: () => N(a.WALLET),
                            children: [
                              (0, n.jsx)("img", {
                                src: "/img/activity/eth-active.svg",
                                alt: "credit-card",
                                className: "h-8 w-8",
                              }),
                              (0, n.jsx)("p", {
                                className:
                                  "subheading-sm-xs text-center text-white",
                                children: "WALLET",
                              }),
                              (0, n.jsxs)("span", {
                                className:
                                  "body-text-xs w-[125px] rounded-lg bg-blackAlpha-400 px-2 py-1 text-center tracking-tighter text-secondary-300",
                                children: [
                                  (0, Y.m)(
                                    (null == ee
                                      ? void 0
                                      : ee.formatted.toString()) || "0"
                                  ),
                                  " ",
                                  (0, n.jsxs)("span", {
                                    className: "uppercase ",
                                    children: [
                                      " ",
                                      (null == ee ? void 0 : ee.symbol) || "",
                                    ],
                                  }),
                                  " ",
                                  "Available",
                                ],
                              }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            className: h()(
                              "flex  w-[144px] flex-col items-center justify-center rounded-xl  border-[2px]  bg-black p-4",
                              y === a.FIAT
                                ? " border-primary-300"
                                : "border-bordergray"
                            ),
                            onClick: () => N(a.FIAT),
                            children: [
                              (0, n.jsx)("img", {
                                src: "/img/activity/credit-card-active.svg",
                                alt: "credit-card",
                                className: "h-8 w-8 ",
                              }),
                              (0, n.jsx)("p", {
                                className:
                                  "subheading-sm-xs text-center text-white",
                                children: "FIAT",
                              }),
                              (0, n.jsx)("span", {
                                className:
                                  "body-text-xs w-[125px] rounded-lg bg-blackAlpha-400 px-2 py-1 text-center text-secondary-300",
                                children: "Card Payment",
                              }),
                            ],
                          }),
                        ],
                      }),
                      y == a.WALLET &&
                        (0, n.jsx)("div", {
                          className: "mt-4 flex flex-col",
                          children: W
                            ? (0, n.jsx)("div", {
                                className: "flex justify-center",
                                children: (0, n.jsx)(L.Z, {
                                  className: "h-4 w-4",
                                }),
                              })
                            : (0, n.jsxs)(n.Fragment, {
                                children: [
                                  (0, n.jsx)("span", {
                                    className: "heading-sm-xsss text-white",
                                    children: "Select CHAIN",
                                  }),
                                  (0, n.jsx)("div", {
                                    className:
                                      "mt-2 flex cursor-pointer items-center gap-x-2 ",
                                    children:
                                      null === F.Eq || void 0 === F.Eq
                                        ? void 0
                                        : F.Eq.map((e) =>
                                            (0, n.jsxs)(
                                              "div",
                                              {
                                                onClick: () =>
                                                  b.switchChain(
                                                    null == e ? void 0 : e.id
                                                  ),
                                                className: h()(
                                                  "flex h-5 items-center justify-center gap-x-[2px] rounded  border bg-black px-2",
                                                  K === e.id
                                                    ? " border-primary-300 text-primary-300"
                                                    : "border-bordergray text-secondary-300"
                                                ),
                                                children: [
                                                  (0, n.jsx)("img", {
                                                    src: (0, Y.KZ)(e.id),
                                                    alt: "eth",
                                                    className: "h-3 w-3",
                                                  }),
                                                  (0, n.jsx)("p", {
                                                    className: h()(
                                                      "body-text-xs  text-center "
                                                    ),
                                                    children:
                                                      null == e
                                                        ? void 0
                                                        : e.name,
                                                  }),
                                                ],
                                              },
                                              e.id
                                            )
                                          ),
                                  }),
                                ],
                              }),
                        }),
                    ],
                  }),
                  y == a.WALLET &&
                    !W &&
                    (0, n.jsxs)("div", {
                      className: "flex flex-col gap-y-3",
                      children: [
                        (0, n.jsxs)("div", {
                          className: "flex items-center justify-between",
                          children: [
                            (0, n.jsx)("p", {
                              className: "flex items-center",
                              children: (0, n.jsx)("span", {
                                className:
                                  "subheading-sm-xs text-secondary-500",
                                children: "Total Fees",
                              }),
                            }),
                            (0, n.jsxs)("span", {
                              className: "body-text-default ",
                              children: ["$", H || 0],
                            }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className: "flex items-center justify-between",
                          children: [
                            (0, n.jsx)("span", {
                              className: "subheading-sm-xs text-secondary-500",
                              children: "Rate",
                            }),
                            (0, n.jsx)("span", {
                              className: "body-text-default",
                              children: V,
                            }),
                          ],
                        }),
                      ],
                    }),
                  y == a.FIAT &&
                    r !== v.vO.CUSTOM &&
                    (0, T.IF)(null == f ? void 0 : f.planId) &&
                    !(null == t ? void 0 : t.id) &&
                    (0, n.jsxs)("div", {
                      className: "flex w-full flex-col",
                      children: [
                        (0, n.jsx)("span", {
                          className: "heading-sm-xsss leading-[8px] text-white",
                          children: "Subscribe AFTER expiration",
                        }),
                        (0, n.jsxs)("button", {
                          onClick: () => d(!0),
                          className:
                            "mt-4 flex w-full items-start justify-between gap-x-2",
                          children: [
                            (0, n.jsx)("div", {
                              className: h()(
                                "flex h-5 min-w-5 items-center justify-center rounded-full border-2 ",
                                o
                                  ? "border-primary-300"
                                  : "border-secondary-600"
                              ),
                              children:
                                o &&
                                (0, n.jsx)("p", {
                                  className: h()(
                                    " h-[10px] w-[10px] rounded-full bg-primary-300"
                                  ),
                                }),
                            }),
                            (0, n.jsxs)("p", {
                              className:
                                "body-text-sm flex h-full w-full items-center text-start leading-[15.6px] text-secondary-200",
                              children: [
                                "Renew automatically after",
                                " ",
                                (0, O.lX)(
                                  (0, T.MH)(
                                    null == f ? void 0 : f.planId,
                                    null == f ? void 0 : f.planExpiresAt,
                                    null == s ? void 0 : s.id,
                                    l
                                  )
                                ),
                              ],
                            }),
                          ],
                        }),
                        (0, n.jsxs)("button", {
                          onClick: () => d(!1),
                          className:
                            "mt-4 flex w-full items-center justify-between gap-x-2",
                          children: [
                            (0, n.jsx)("div", {
                              className: h()(
                                "flex h-5 min-w-5 items-center justify-center rounded-full border-2 ",
                                o
                                  ? "border-secondary-600"
                                  : "border-primary-300"
                              ),
                              children:
                                !o &&
                                (0, n.jsx)("p", {
                                  className: h()(
                                    " h-[10px] w-[10px] rounded-full bg-primary-300"
                                  ),
                                }),
                            }),
                            (0, n.jsx)("p", {
                              className:
                                "body-text-sm flex h-full w-full items-center leading-[15.6px] text-secondary-200",
                              children:
                                "I don't want to renew after the expiration",
                            }),
                          ],
                        }),
                      ],
                    }),
                  (0, n.jsxs)("div", {
                    className: "flex flex-col gap-y-2",
                    children: [
                      (0, n.jsx)("span", {
                        className: "heading-sm-xsss uppercase text-white",
                        children: "you pay",
                      }),
                      (0, n.jsx)("div", {
                        className:
                          "flex w-full flex-col gap-y-1 rounded-[20px] bg-blackAlpha-300 p-6",
                        children: (0, n.jsx)("div", {
                          className: "w-full ",
                          children: (0, n.jsxs)("div", {
                            className:
                              "subheading-lg-lg flex w-full flex-col items-end gap-y-1 !text-white",
                            children: [
                              y == a.WALLET &&
                                (0, n.jsxs)("div", {
                                  className:
                                    "flex w-full items-center justify-between",
                                  children: [
                                    (0, n.jsx)("p", {
                                      className: "subheading-sm-xs",
                                      children: "Total",
                                    }),
                                    (0, n.jsx)("span", { children: G }),
                                  ],
                                }),
                              (0, n.jsxs)("div", {
                                className: h()(
                                  "subheading-sm-xs flex  w-full justify-between leading-[14px]",
                                  y == a.WALLET
                                    ? "flex-row-reverse text-secondary-400"
                                    : " text-white"
                                ),
                                children: [
                                  y == a.FIAT &&
                                    (0, n.jsx)("p", {
                                      className: "subheading-sm-xs",
                                      children: "Total",
                                    }),
                                  "(USD) $",
                                  p(),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                      r !== v.vO.CUSTOM &&
                        y == a.FIAT &&
                        (0, n.jsxs)("p", {
                          className:
                            " body-text-sm flex h-full  w-full items-center leading-[15.6px] text-secondary-500 ",
                          children: [
                            "Next recurring payment on",
                            " ",
                            (0, O.lX)(
                              (0, T.MH)(
                                null == f ? void 0 : f.planId,
                                null == f ? void 0 : f.planExpiresAt,
                                null == s ? void 0 : s.id,
                                l
                              )
                            ),
                            ".",
                          ],
                        }),
                    ],
                  }),
                  y === a.FIAT &&
                    (0, n.jsx)("button", {
                      onClick: () => x(null == s ? void 0 : s.id),
                      className:
                        "subheading-lg-sm flex items-center justify-center rounded-[10000px] bg-primary-300 px-4 py-2 text-secondary-800 ",
                      children: "PROCEED TO PAYMENT",
                    }),
                  y === a.WALLET &&
                    (0, n.jsxs)("button", {
                      onClick: () => {
                        el();
                      },
                      disabled: Z || W,
                      className:
                        "subheading-lg-sm flex items-center justify-center rounded-[10000px] bg-primary-300 px-4 py-2 text-secondary-800 ",
                      children: [
                        "CONFIRM AND PAY",
                        Z && (0, n.jsx)(L.Z, { className: "ml-2 h-4 w-4" }),
                      ],
                    }),
                ],
              }),
            })
          );
        },
        H = t(39332),
        B = t(88575),
        z = t(19311),
        _ = t(86523),
        W = t(51373),
        Q = t(11163),
        Z = (e) => {
          let {
              open: s,
              holoUser: t,
              stripeSubscription: l,
              billingMode: a,
              selectedSubscriptionPlan: u,
              selectedCustomDuration: m,
              isAutoRenew: p,
              setIsAutoRenew: h,
              setSelectedCustomDuration: f,
              startCryptoTransaction: b,
              onClose: g,
              setBillingMode: j,
              getPremiumPrice: y,
              getElitePrice: N,
              onChoosePremiumPlanClicked: w,
              onChooseElitePlanClicked: E,
            } = e,
            O = (0, Q.useRouter)(),
            [C, L] = (0, i.useState)(!1),
            R = (0, H.usePathname)(),
            k = null == u ? void 0 : u.id.split(" ")[0];
          (0, i.useEffect)(() => {
            s || L(!1);
          }, [s]);
          let Y = (e) => {
              var s, l, a, n;
              return (
                (s = void 0),
                (l = void 0),
                (a = void 0),
                (n = function* () {
                  let s = W.dO.find((s) => s.id === e);
                  if (!s) return;
                  let l = yield fetch("/api/stripe/subscription", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      userId: t.id,
                      planId: e,
                      priceId: s.stripeProductId,
                      customDuration: (0, T.Vd)(e) ? m : 0,
                      isAutoRenew: p,
                      pathname: R,
                    }),
                  });
                  if (l.ok) {
                    let e = yield l.json();
                    O.push(e.url);
                  }
                }),
                new (a || (a = Promise))(function (e, t) {
                  function i(e) {
                    try {
                      c(n.next(e));
                    } catch (e) {
                      t(e);
                    }
                  }
                  function r(e) {
                    try {
                      c(n.throw(e));
                    } catch (e) {
                      t(e);
                    }
                  }
                  function c(s) {
                    var t;
                    s.done
                      ? e(s.value)
                      : ((t = s.value) instanceof a
                          ? t
                          : new a(function (e) {
                              e(t);
                            })
                        ).then(i, r);
                  }
                  c((n = n.apply(s, l || [])).next());
                })
              );
            },
            F = () => {
              var e;
              return a === v.vO.CUSTOM
                ? (null == u ? void 0 : u.price) * m
                : (null ===
                    (e = W.dO.find((e) => e.id === k + " " + v.vO.MONTHLY)) ||
                  void 0 === e
                    ? void 0
                    : e.price) * (0, T.bp)(null == u ? void 0 : u.id);
            },
            I = () => {
              let e = F();
              return a === v.vO.CUSTOM
                ? m >= 3 && m < 12
                  ? 0.1 * e
                  : m >= 12
                  ? 0.3 * e
                  : 0
                : a === v.vO.QUARTERLY
                ? 0.1 * e
                : a === v.vO.YEARLY
                ? 0.3 * e
                : 0;
            },
            S = () => {
              let e = 0;
              (0, T.ab)(
                null == t ? void 0 : t.planId,
                null == u ? void 0 : u.id
              ) && (e = (0, T.wP)(null == t ? void 0 : t.planId).price);
              let s = (null == u ? void 0 : u.price) - e;
              return (
                m >= 3 &&
                  m < 12 &&
                  (s = Number(
                    ((null == u ? void 0 : u.price) * m * 0.9 - e).toFixed(2)
                  )),
                m >= 12 &&
                  (s = Number(
                    ((null == u ? void 0 : u.price) * m * 0.7 - e).toFixed(2)
                  )),
                m > 1 && m < 3 && (s = (null == u ? void 0 : u.price) * m - e),
                s
              );
            },
            M = () => {
              var e;
              return (0, n.jsxs)("div", {
                className: "flex w-full flex-col gap-y-4",
                children: [
                  (0, n.jsxs)("div", {
                    className: "flex w-full items-center justify-between",
                    children: [
                      (0, n.jsxs)("span", {
                        className: "subheading-sm-xs text-secondary-500",
                        children: [
                          "Subscription (",
                          a === v.vO.CUSTOM
                            ? m
                            : (0, T.bp)(null == u ? void 0 : u.id),
                          " ",
                          "Months)",
                        ],
                      }),
                      (0, n.jsxs)("span", {
                        className: "body-text-default ",
                        children: ["$", F().toFixed(2)],
                      }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [
                      (0, n.jsxs)("div", {
                        className:
                          "subheading-sm-xs flex items-center gap-x-1 text-secondary-500",
                        children: [
                          "Discount",
                          " ",
                          (0, n.jsx)(r.u, {
                            placement: "bottom-start",
                            className:
                              "!w-[224px] !rounded !bg-blackAlpha-600  !p-3 !backdrop-blur-[12px]",
                            label: (0, n.jsx)("p", {
                              className:
                                " body-text-sm leading-[15.6px]  text-white ",
                              children:
                                "Get a 10% discount when you pay upfront for 3 or more months. Get a 30% discount when you pay upfront for 12 or more months.",
                            }),
                            children: (0, n.jsx)(B.U, {
                              className:
                                "cursor-pointer !text-[16px] !text-primary-300",
                            }),
                          }),
                        ],
                      }),
                      (0, n.jsxs)("span", {
                        className: "body-text-default ",
                        children: ["-$", I().toFixed(2)],
                      }),
                    ],
                  }),
                  (0, T.ab)(
                    null == t ? void 0 : t.planId,
                    null == u ? void 0 : u.id
                  ) &&
                    (0, n.jsxs)("div", {
                      className: "flex items-center justify-between",
                      children: [
                        (0, n.jsx)("span", {
                          className: "subheading-sm-xs text-secondary-500",
                          children: "Previous payment",
                        }),
                        (0, n.jsxs)("p", {
                          className: "body-text-default ",
                          children: [
                            "-$",
                            null ===
                              (e = (0, T.wP)(null == t ? void 0 : t.planId)) ||
                            void 0 === e
                              ? void 0
                              : e.price,
                          ],
                        }),
                      ],
                    }),
                ],
              });
            };
          return (0, n.jsxs)(c.dy, {
            isOpen: s,
            autoFocus: !1,
            placement: "right",
            onClose: () => {
              g();
            },
            size: "sm",
            children: [
              (0, n.jsx)(o.Z, {}),
              (0, n.jsx)(d.s, {
                className: "z-50 !w-[364px] !bg-black !p-0 !text-secondary-200",
                children: (0, n.jsxs)(x.f, {
                  className: "!md:px-8 flex w-full flex-col !px-[28px] !pt-4 ",
                  children: [
                    (0, n.jsxs)("div", {
                      className:
                        "mb-4 flex w-full items-center justify-between",
                      children: [
                        C
                          ? (0, n.jsx)(z.R, {
                              className:
                                "cursor-pointer !text-[22px] !text-secondary-400 ",
                              onClick: () => L(!1),
                            })
                          : (0, n.jsx)("div", { className: "h-4 w-4" }),
                        (0, n.jsx)(_.T, {
                          className: "cursor-pointer !text-secondary-400 ",
                          onClick: g,
                        }),
                      ],
                    }),
                    C
                      ? (0, n.jsx)(D, {
                          stripeSubscription: l,
                          selectedPlan: u,
                          selectedCustomDuration: m,
                          billingMode: a,
                          isAutoRenew: p,
                          setIsAutoRenew: h,
                          onFiatCheckout: (e) => {
                            Y(e);
                          },
                          startCryptoTransaction: (e, s, t) => b(e, s, t),
                          onClose: g,
                          getTotalPrice: S,
                          renderTotalDetails: M(),
                        })
                      : (0, n.jsx)(A, {
                          onCheckout: () => L(!0),
                          selectedPlan: u,
                          billingMode: a,
                          selectedCustomDuration: m,
                          setSelectedCustomDuration: f,
                          setBillingMode: j,
                          onChoosePremiumPlanClicked: w,
                          onChooseElitePlanClicked: E,
                          getPlanPriceForType: (e) =>
                            "Elite" === k
                              ? N(e)
                              : "Premium" === k
                              ? y(e)
                              : void 0,
                          getTotalPrice: S,
                          renderTotalDetails: M(),
                        }),
                  ],
                }),
              }),
            ],
          });
        };
    },
    57307: function (e, s, t) {
      var l = t(85893),
        a = t(67294),
        n = t(93967),
        i = t.n(n),
        r = t(86523),
        c = t(8559),
        o = t(34425),
        d = t(45953),
        x = t(57954);
      s.Z = (e) => {
        let {
            expirationDate: s,
            transactionStatus: t,
            transactionHash: n,
            onClose: u,
          } = e,
          { wallet: m } = (0, x.O)(),
          p = +(null == m ? void 0 : m.chainId.split(":")[1]),
          [h, f] = (0, a.useState)(),
          [b, v] = (0, a.useState)(!1),
          [g, j] = (0, a.useState)(""),
          [y, N] = (0, a.useState)(""),
          [w, E] = (0, a.useState)("");
        (0, a.useEffect)(() => {
          if (null === n || null === p || null === t) return;
          f("".concat(o.Ce[p], "/tx/").concat(n));
          let { statusTitle: e, statusDescription: s, statusIcon: l } = T(t);
          N(e), E(s), j(l), v(!0);
        }, [n, t, p]);
        let T = (e) => {
          switch (e) {
            case c.LN.SUCCESS:
              return {
                statusTitle: "Payment Successful!",
                statusDescription:
                  "Thank you for your purchase. Your plan is now active. Your plan will expire on ".concat(
                    s,
                    "."
                  ),
                statusIcon: "/icons/tick.png",
              };
            case c.LN.PENDING:
              return {
                statusTitle: "Payment Pending",
                statusDescription:
                  "Your transaction is still pending. You will receive your membership once the transaction completes successfully. You can verify the status of the transaction by clicking on the button below!",
                statusIcon: "",
              };
            case c.LN.FAILED:
              return {
                statusTitle: "Payment Failed",
                statusDescription:
                  "Your transaction failed. Click the button below to visit the link to the transaction for more info. If the problem persist, please contact support.",
                statusIcon: "",
              };
          }
        };
        return (0, l.jsxs)("div", {
          className: i()(
            "absolute left-1/2 top-1/2 z-50 w-[500px] translate-x-[-50%] translate-y-[-50%] overflow-hidden rounded-[16px] bg-black transition duration-300",
            b ? "opacity-100" : "opacity-0"
          ),
          children: [
            (0, l.jsx)("button", {
              className: i()(
                "absolute right-5 top-5 h-[40px] w-[40px] rounded-full bg-black/30 p-0 text-white transition duration-300 hover:bg-black/50",
                b ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
              ),
              onClick: () => u(t),
              children: (0, l.jsx)(r.T, {}),
            }),
            (0, l.jsxs)("div", {
              className: "px-9 pb-[48px] pt-[64px] text-center text-gray-200",
              children: [
                (0, l.jsxs)("div", {
                  className: i()(
                    "transition duration-300",
                    b ? "-translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  ),
                  children: [
                    (0, l.jsxs)("div", {
                      className:
                        "flex w-full items-center justify-center space-x-2",
                      children: [
                        g &&
                          (0, l.jsx)("img", {
                            src: g,
                            alt: "icon",
                            className: "h-8 w-8",
                          }),
                        (0, l.jsx)("h4", {
                          className: "subheading-lg-lg uppercase",
                          children: y,
                        }),
                      ],
                    }),
                    (0, l.jsx)("p", {
                      className: "body-text-lg mt-2 text-secondary-300",
                      children: w,
                    }),
                  ],
                }),
                n &&
                  (0, l.jsx)("button", {
                    className:
                      "mt-6 flex w-full flex-row rounded-full bg-primary-default py-3 text-secondary-800 dark:bg-secondary-100",
                    onClick: () => {
                      h && window.open(h, "_blank");
                    },
                    children: (0, l.jsx)("div", {
                      className:
                        "flex h-full w-full items-center justify-center",
                      children: (0, l.jsxs)("div", {
                        className: "subheading-lg-md",
                        children: [
                          "View Transaction on",
                          " ",
                          (0, l.jsx)("span", {
                            className: "uppercase",
                            children: (0, d.pp)(p),
                          }),
                        ],
                      }),
                    }),
                  }),
              ],
            }),
          ],
        });
      };
    },
    91892: function (e, s, t) {
      t.d(s, {
        bD: function () {
          return x;
        },
        z3: function () {
          return u;
        },
      });
      var l = t(85893);
      t(67294);
      var a = t(25675),
        n = t.n(a),
        i = t(8559),
        r = t(93967),
        c = t.n(r),
        o = t(48204),
        d = t(91516);
      let x = (e) => {
          let { text: s, color1: t, color2: a, color3: n, direction: i } = e;
          return (0, l.jsx)("span", {
            className: ""
              .concat(
                i || "bg-gradient-to-br",
                "  bg-clip-text text-transparent from-["
              )
              .concat(t, "] ")
              .concat(a && "via-[".concat(a, "]"), "  to-[")
              .concat(n, "]"),
            children: s,
          });
        },
        u = () =>
          (0, l.jsxs)("div", {
            className: "relative ",
            children: [
              (0, l.jsx)("div", {
                className:
                  " absolute left-0 top-0 h-full w-[110px] rounded bg-gradient-to-r from-[#08EDDF1A]/10 to-[#CEED8B1A]/10 ",
              }),
              (0, l.jsx)("div", {
                className:
                  "px-1 py-0.5 font-avenir  text-[10px] font-bold leading-3",
                children: (0, l.jsx)(x, {
                  text: "LIMITED TIME OFFER",
                  color1: "#08EDDF",
                  color2: "#8AE09C",
                  color3: "#CEED8B",
                }),
              }),
            ],
          }),
        m = (e) => {
          let { count: s } = e;
          return (0, l.jsxs)("div", {
            className: "flex justify-between ",
            children: [
              (0, l.jsxs)("div", {
                className: "flex flex-col gap-y-3",
                children: [
                  (0, l.jsx)(u, {}),
                  (0, l.jsxs)("span", {
                    className:
                      " font-avenir text-sm font-semibold leading-[16.8px] text-secondary-200",
                    children: [
                      "Get a FREE loot box with every ",
                      s,
                      " months of Premium plan purchase.",
                    ],
                  }),
                ],
              }),
              (0, l.jsx)(n(), {
                src: "https://hologramxyz.s3.amazonaws.com/assets/lotties/ring-lootbox.png",
                alt: "loot box",
                width: 103,
                height: 103,
                className: "-mt-5 object-cover",
              }),
            ],
          });
        };
      s.ZP = (e) => {
        let {
          subscriptionCardType: s,
          renderButton: t,
          planDescription: a,
          isShowPlanDescription: n,
          setIsShowPlanDescription: r,
        } = e;
        return (0, l.jsxs)("div", {
          className: "flex w-full max-w-[380px] flex-col md:h-full lg:h-auto",
          children: [
            (0, l.jsxs)("div", {
              className:
                "flex items-center gap-x-2 rounded-t-[24px] border-x border-t border-bordergray py-2 pl-6",
              children: [
                (0, l.jsx)("img", {
                  src: "/icons/membership/".concat(
                    s.toLowerCase(),
                    "-upgrade.svg"
                  ),
                  alt: "base",
                  className: "h-6 w-6 object-cover",
                }),
                (0, l.jsx)("div", {
                  className: c()(
                    "heading-lg-sm capitalize leading-[19.2px] text-secondary-200"
                  ),
                  children:
                    s === i.Dv.BASIC
                      ? (0, l.jsx)(l.Fragment, { children: s })
                      : s === i.Dv.PREMIUM
                      ? (0, l.jsx)(x, {
                          text: s,
                          color1: "#08EDDF",
                          color2: "#8AE09C",
                          color3: "#CEED8B",
                        })
                      : s === i.Dv.ELITE
                      ? (0, l.jsx)(x, {
                          text: s,
                          color1: "#FFE791",
                          color3: "#FFCF24",
                          direction: "bg-gradient-to-tl",
                        })
                      : void 0,
                }),
              ],
            }),
            (0, l.jsxs)("div", {
              className:
                "flex min-h-[205px] w-full flex-col gap-y-[16px] rounded-b-[24px] border border-bordergray p-7 md:h-full  md:gap-y-6 xl:h-auto",
              children: [
                (0, l.jsx)("div", {
                  className: "flex w-full flex-col ",
                  children:
                    s === i.Dv.BASIC
                      ? (0, l.jsxs)("div", {
                          children: [
                            (0, l.jsx)("p", {
                              className:
                                "subheading-lg-2xl leading-[38.4px] text-white",
                              children: "FREE",
                            }),
                            (0, l.jsx)("span", {
                              className:
                                " font-avenir text-[14px] font-semibold leading-[16.8px] text-secondary-200",
                              children:
                                "Enjoy our basic benefit plan for free.",
                            }),
                          ],
                        })
                      : s === i.Dv.PREMIUM
                      ? (0, l.jsx)(m, { count: 6 })
                      : s === i.Dv.ELITE
                      ? (0, l.jsx)(m, { count: 3 })
                      : void 0,
                }),
                (0, l.jsx)("div", {
                  className: "flex h-full w-full",
                  children: t,
                }),
                !n &&
                  (0, l.jsxs)("button", {
                    onClick: () => r(!0),
                    className:
                      "subheading-sm-xss flex items-center justify-center text-secondary-400 md:hidden",
                    children: [
                      "Learn More",
                      (0, l.jsx)(o.v, {
                        className: "!text-[16px] !text-secondary-400",
                      }),
                    ],
                  }),
                n &&
                  (0, l.jsxs)("div", {
                    className: "flex w-full flex-col justify-center md:hidden ",
                    children: [
                      (0, l.jsx)("div", { children: n && a }),
                      (0, l.jsx)("div", {
                        className:
                          "mt-6 flex w-full items-center justify-center",
                        children:
                          n &&
                          (0, l.jsx)("button", {
                            onClick: () => r(!1),
                            className:
                              "subheading-sm-xss flex items-center justify-center text-secondary-400 md:hidden",
                            children: (0, l.jsx)(d.g, {
                              className: "!text-[16px] !text-secondary-400",
                            }),
                          }),
                      }),
                    ],
                  }),
              ],
            }),
          ],
        });
      };
    },
    55599: function (e, s, t) {
      t.d(s, {
        k: function () {
          return a;
        },
      });
      var l = t(71358);
      let a = [
        {
          id: "luna",
          name: "Luna",
          description:
            "Luna is inherently nurturing, often likened to a medic in the way she attentively aids those around her with her magical web3 insights.",
          image:
            "https://hologramxyz.s3.amazonaws.com/assets/images/lootbox/character-luna.png",
          assets: [...l.yX, ...l.a9],
        },
        {
          id: "neko",
          name: "Neko",
          description:
            "Neko is the embodiment of cunning and confidence. Her smirk is her signature, a subtle hint at her readiness to outmaneuver anyone who crosses her path.",
          image:
            "https://hologramxyz.s3.amazonaws.com/assets/images/lootbox/character-neko.png",
          assets: [...l.iA, ...l.a9],
        },
        {
          id: "rin",
          name: "Rin",
          description: "",
          image:
            "https://hologramxyz.s3.amazonaws.com/assets/images/lootbox/character-rin.png",
          assets: l.yX,
        },
        {
          id: "ayame",
          name: "Ayame",
          description: "",
          image:
            "https://hologramxyz.s3.amazonaws.com/assets/images/lootbox/character-ayame.png",
          assets: l.iA,
        },
      ];
    },
    71867: function (e, s, t) {
      var l = t(21003),
        a = t(8559),
        n = t(45953),
        i = t(35553),
        r = t(67294),
        c = t(57954),
        o = t(59743),
        d = t(99319),
        x = t(34425);
      s.Z = () => {
        let { holoUser: e } = (0, l.a)(),
          { wallet: s } = (0, c.O)(),
          { setDisplayNotification: t, setUIMode: u } = (0, d.oR)((e) => e),
          [m, p] = (0, r.useState)(!1),
          [h, f] = (0, r.useState)(a.vO.YEARLY),
          [b, v] = (0, r.useState)(),
          [g, j] = (0, r.useState)(!1),
          [y, N] = (0, r.useState)(),
          [w, E] = (0, r.useState)(""),
          [T, O] = (0, r.useState)(!1),
          [C, A] = (0, r.useState)(1),
          [L, R] = (0, r.useState)(null),
          [k, Y] = (0, r.useState)(!1),
          F = (e) =>
            ({
              [a.vO.MONTHLY]: "14.90",
              [a.vO.QUARTERLY]: "".concat((40.23 / 3).toFixed(2)),
              [a.vO.YEARLY]: "".concat("10.43"),
            }[e]),
          I = (e) =>
            ({
              [a.vO.MONTHLY]: "29.90",
              [a.vO.QUARTERLY]: "".concat("26.91"),
              [a.vO.YEARLY]: "".concat("20.93"),
            }[e]),
          S = { [a.Dv.PREMIUM]: F(a.vO.YEARLY), [a.Dv.ELITE]: I(a.vO.YEARLY) };
        return {
          showOrderDetailDrawer: m,
          setShowOrderDetailDrawer: p,
          stripeSubscription: b,
          setStripeSubscription: v,
          getPremiumPrice: F,
          getElitePrice: I,
          PriceForYearlyPlan: S,
          selectedCustomDuration: C,
          setSelectedCustomDuration: A,
          selectedSubscriptionPlan: y,
          setSelectedSubscriptionPlan: N,
          cryptoTransactionDescription: w,
          isCryptoTransactionModalOpen: T,
          setIsCryptoTransactionModalOpen: O,
          currentCryptoTransaction: L,
          isLoadingCryptoTransaction: k,
          setIsLoadingCryptoTransaction: Y,
          isAutoRenew: g,
          setIsAutoRenew: j,
          startCryptoTransaction: (l, r, c) => {
            var d, u, m, p;
            return (
              (d = void 0),
              (u = void 0),
              (m = void 0),
              (p = function* () {
                let d = +(null == s ? void 0 : s.chainId.split(":")[1]),
                  u = (0, n.u3)(d),
                  m = 0;
                (0, o.ab)(
                  null == e ? void 0 : e.planId,
                  null == l ? void 0 : l.id
                ) && (m = (0, o.wP)(null == e ? void 0 : e.planId).price);
                let p = l.price;
                C &&
                  C >= 3 &&
                  C < 12 &&
                  (p = Number((l.price * C * 0.9 - m).toFixed(2))),
                  C &&
                    C >= 12 &&
                    (p = Number((l.price * C * 0.7 - m).toFixed(2))),
                  C || (p = l.price - m);
                let h =
                  "ETH" === u
                    ? (p / r).toFixed(5)
                    : "TBNB" === u || "BNB" === u
                    ? (p / c).toFixed(5)
                    : -1;
                if (-1 === h) {
                  t(
                    !0,
                    a.CC.ERROR,
                    "ERROR!",
                    "Could not calculate the correct price for the plan. Please try again later.",
                    a.d.BOTTOM
                  );
                  return;
                }
                let f = {
                  from: e.walletAddress,
                  to: x.ET,
                  chainId: d,
                  value: i.fi(h),
                };
                Y(!0),
                  R(f),
                  E(
                    "Review your transansaction to purchase the ".concat(
                      y.id,
                      " plan."
                    )
                  ),
                  O(!0);
              }),
              new (m || (m = Promise))(function (e, s) {
                function t(e) {
                  try {
                    a(p.next(e));
                  } catch (e) {
                    s(e);
                  }
                }
                function l(e) {
                  try {
                    a(p.throw(e));
                  } catch (e) {
                    s(e);
                  }
                }
                function a(s) {
                  var a;
                  s.done
                    ? e(s.value)
                    : ((a = s.value) instanceof m
                        ? a
                        : new m(function (e) {
                            e(a);
                          })
                      ).then(t, l);
                }
                a((p = p.apply(d, u || [])).next());
              })
            );
          },
          billingMode: h,
          setBillingMode: f,
          onChooseElitePlanClicked: () => {
            p(!0),
              k ||
                (h === a.vO.MONTHLY && N((0, o.wP)(a._r.ELITE_MONTHLY)),
                h === a.vO.QUARTERLY && N((0, o.wP)(a._r.ELITE_QUARTERLY)),
                h === a.vO.YEARLY && N((0, o.wP)(a._r.ELITE_YEARLY)),
                h === a.vO.CUSTOM && N((0, o.wP)(a._r.ELITE)),
                p(!0));
          },
          onChoosePremiumPlanClicked: () => {
            k ||
              (h === a.vO.MONTHLY && N((0, o.wP)(a._r.PREMIUM_MONTHLY)),
              h === a.vO.QUARTERLY && N((0, o.wP)(a._r.PREMIUM_QUARTERLY)),
              h === a.vO.YEARLY && N((0, o.wP)(a._r.PREMIUM_YEARLY)),
              h === a.vO.CUSTOM && N((0, o.wP)(a._r.PREMIUM)),
              p(!0));
          },
        };
      };
    },
    81107: function (e, s, t) {
      t.d(s, {
        Ni: function () {
          return a;
        },
        cY: function () {
          return n;
        },
      }),
        t(55599),
        t(46759);
      var l = t(8559);
      function a(e) {
        switch (e) {
          case l._r.ELITE_YEARLY:
            return 4;
          case l._r.PREMIUM_YEARLY:
            return 2;
          case l._r.ELITE_QUARTERLY:
            return 1;
          default:
            return 0;
        }
      }
      function n(e, s) {
        switch (e) {
          case l._r.ELITE:
            return Math.floor(s / 3);
          case l._r.PREMIUM:
            return Math.floor(s / 6);
          default:
            return 0;
        }
      }
    },
  },
]);
