"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8427],
  {
    48427: function (e, s, l) {
      l.d(s, {
        Z: function () {
          return z;
        },
      });
      var a = l(85893),
        t = l(67294),
        i = l(90608),
        r = l(12095),
        n = l(34302),
        c = l(63162),
        d = l(41664),
        o = l.n(d),
        x = l(93967),
        m = l.n(x),
        u = l(11163),
        g = l(21003),
        h = l(83658),
        p = l(88329),
        b = l(68029),
        f = l(32761),
        j = l(4234),
        v = l(34614),
        N = l(17428),
        w = l(89015),
        y = l(70010),
        k = l(59743),
        I = (e) => {
          var s;
          let { lightMode: l, walletBalance: i } = e,
            {
              isAuthenticated: r,
              login: n,
              logout: c,
              holoUser: d,
              isAuthReady: x,
            } = (0, g.a)(),
            { isOpen: I, onOpen: C, onClose: E } = (0, h.q)(),
            _ = (0, t.useRef)(),
            F = (0, u.useRouter)(),
            B =
              null === (s = null == F ? void 0 : F.query) || void 0 === s
                ? void 0
                : s.invited;
          return (
            (0, t.useEffect)(() => {
              B && (localStorage.setItem("invitedby", B), F.replace("/"));
            }, [B]),
            (0, a.jsxs)(p.k, {
              top: 0,
              position: "fixed",
              height: "64px",
              width: "100%",
              zIndex: 99,
              className: "border-b border-bordergray dark:bg-black",
              sx: {
                justifyContent: "space-between",
                alignItems: "center",
                padding: "14px 20px",
              },
              children: [
                (0, a.jsx)(b.x, {
                  children: (0, a.jsx)(o(), {
                    href: "/",
                    passHref: !0,
                    children: (0, a.jsx)(f.E, {
                      src: l ? "/img/logo.svg" : "/img/logo-white.svg",
                      alt: "hologram",
                      height: "20px",
                    }),
                  }),
                }),
                (0, a.jsxs)("div", {
                  className:
                    "max-w-1/2 relative flex h-full items-center justify-between gap-x-4",
                  children: [
                    (0, k.IF)(null == d ? void 0 : d.planId) &&
                      (0, a.jsx)("button", {
                        onClick: () => {
                          if (!d) {
                            n();
                            return;
                          }
                          F.push("/upgrade");
                        },
                        className: m()(
                          "flex h-8 w-8 items-center justify-center rounded-full   "
                        ),
                        children: (0, a.jsx)("img", {
                          src: "/icons/upgrade/upgrade.svg",
                          alt: "upgrade",
                          className: "h-5 w-5",
                        }),
                      }),
                    x
                      ? (0, a.jsx)(a.Fragment, {
                          children: r
                            ? (0, a.jsxs)("div", {
                                onClick: C,
                                className:
                                  "flex flex-col items-center justify-center ",
                                children: [
                                  (0, a.jsx)("img", {
                                    src:
                                      (null == d ? void 0 : d.image) ||
                                      "/img/activity/default-avatar.png",
                                    alt: "avatar",
                                    className: "h-8 w-8 rounded-full",
                                  }),
                                  (0, a.jsx)("div", {
                                    className:
                                      "body-text-xs absolute -bottom-[10px] -right-1 flex h-[14px] w-10 items-center justify-center rounded-lg  border-[0.5px] border-secondary-default bg-white/[0.48] px-1 text-gray-600 backdrop-blur-[5px] dark:bg-blackAlpha-300 dark:text-secondary-200",
                                    children: i,
                                  }),
                                ],
                              })
                            : (0, a.jsx)("button", {
                                onClick: n,
                                className: m()(
                                  "group h-6 rounded-full text-xs uppercase text-white",
                                  l
                                    ? "border border-gray-800 "
                                    : "bg-[linear-gradient(to_right,_#15DCE8,_#64DFC7,_#8AE09C,_#DBEE72)] p-[2px]"
                                ),
                                children: (0, a.jsx)("div", {
                                  className: m()(
                                    "group flex h-5 items-center justify-center rounded-full border px-3 text-xs font-bold uppercase",
                                    l ? "bg-gray-200 " : "border-0 bg-black"
                                  ),
                                  children: (0, a.jsx)("span", {
                                    className: m()(
                                      l ? "text-gray-800 " : "text-white "
                                    ),
                                    children: "Login",
                                  }),
                                }),
                              }),
                        })
                      : (0, a.jsx)("div", {
                          className:
                            "flex flex-col items-center justify-center",
                          children: (0, a.jsx)("div", {
                            className:
                              "h-8 w-8 animate-pulse rounded-full bg-gray-100",
                          }),
                        }),
                    (0, a.jsx)(a.Fragment, {
                      children: (0, a.jsxs)(j.dy, {
                        isOpen: I,
                        placement: "right",
                        onClose: E,
                        size: "xs",
                        finalFocusRef: _,
                        children: [
                          (0, a.jsx)(v.Z, {}),
                          (0, a.jsxs)(N.s, {
                            sx: {
                              background: "".concat(
                                l ? "#D6E2EC" : "rgba(28, 39, 48, 0.90)"
                              ),
                              boxShadow:
                                "4px 0px 20px 0px rgba(47, 72, 66, 0.05)",
                              backdropFilter: "blur(10px)",
                            },
                            children: [
                              (0, a.jsx)(w.o, {
                                className: "".concat(
                                  l ? "!text-gray-800" : "!text-white"
                                ),
                              }),
                              (0, a.jsx)(y.f, {
                                children: (0, a.jsx)("div", {
                                  className: "w-full",
                                  children: (0, a.jsxs)("div", {
                                    className:
                                      "body-text-lg w-full divide-y divide-secondary-300 pt-4",
                                    children: [
                                      d &&
                                        (0, a.jsxs)("button", {
                                          className:
                                            "flex w-full items-center space-x-3 py-6\n                        ".concat(
                                              l
                                                ? "text-gray-800"
                                                : "text-white",
                                              " "
                                            ),
                                          onClick: () =>
                                            F.push("/@".concat(d.username)),
                                          children: [
                                            l
                                              ? (0, a.jsx)("img", {
                                                  src: "/icons/icon-profile-dark.svg",
                                                  alt: "profile",
                                                  className: "h-5 w-5",
                                                })
                                              : (0, a.jsx)("img", {
                                                  src: "/icons/icon-profile-light.svg",
                                                  alt: "profile",
                                                  className: "h-5 w-5",
                                                }),
                                            (0, a.jsx)("span", {
                                              className: "",
                                              children: "Profile",
                                            }),
                                          ],
                                        }),
                                      (0, a.jsxs)("button", {
                                        className:
                                          "flex w-full items-center space-x-3 py-6 text-[#FF2950]",
                                        onClick: () => {
                                          E(), c();
                                        },
                                        children: [
                                          (0, a.jsx)("img", {
                                            src: "/icons/icon-logout.svg",
                                            alt: "logout",
                                            className: "h-5 w-5",
                                          }),
                                          (0, a.jsx)("span", {
                                            className: "",
                                            children: "Sign out",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
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
            })
          );
        },
        C = l(27076),
        E = l(71176),
        _ = l(57954),
        F = l(45953),
        B = l(35553),
        D = l(78033),
        z = (e) => {
          var s;
          let { lightMode: l } = e,
            {
              logout: d,
              login: x,
              holoUser: h,
              isAuthenticated: p,
              isAuthReady: b,
            } = (0, g.a)(),
            { wallet: f } = (0, _.O)(),
            j = (0, u.useRouter)(),
            v = (0, D.K)({
              address: null == f ? void 0 : f.address,
              chainId: +(null == f ? void 0 : f.chainId.split(":")[1]),
              query: {
                refetchInterval: 4e3,
                refetchIntervalInBackground: !0,
                refetchOnMount: "always",
              },
            }),
            N = v.data ? Number(B.bM(v.data.value, v.data.decimals)) : 0,
            w = +(null == f ? void 0 : f.chainId.split(":")[1]),
            y =
              null === (s = null == j ? void 0 : j.query) || void 0 === s
                ? void 0
                : s.invited,
            [z, S] = (0, t.useState)();
          return (
            (0, t.useEffect)(() => {
              S((0, F.u3)(w));
            }, [w]),
            (0, t.useEffect)(() => {
              y && (localStorage.setItem("invitedby", y), j.replace("/"));
            }, [y]),
            (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)("div", {
                  className: "block md:hidden",
                  children: (0, a.jsx)(I, {
                    lightMode: l,
                    walletBalance: (0, C.m)(N.toString() || "0"),
                  }),
                }),
                (0, a.jsx)("div", {
                  className:
                    "fixed top-0 z-[49] hidden h-14 w-full border-b border-bordergray bg-black md:flex",
                  children: (0, a.jsxs)("div", {
                    className:
                      "flex h-full w-full items-center justify-between px-4",
                    children: [
                      (0, a.jsx)("div", {
                        className: "flex items-center space-x-2",
                        children: (0, a.jsx)(o(), {
                          href: "/",
                          passHref: !0,
                          children: (0, a.jsx)("img", {
                            src: "/img/logo-white.svg",
                            alt: "SlwrAi Logo",
                            className: " h-6 w-auto",
                          }),
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: "flex items-center",
                        children: (0, a.jsx)("div", {
                          className: "flex items-center space-x-2 ",
                          children: b
                            ? (0, a.jsx)(a.Fragment, {
                                children: p
                                  ? (0, a.jsxs)("div", {
                                      className: "flex items-center",
                                      children: [
                                        (0, a.jsxs)("div", {
                                          onClick: () =>
                                            j.push(
                                              "/@".concat(
                                                h.username,
                                                "?mode=wallet"
                                              )
                                            ),
                                          className:
                                            "subheading-lg-sm flex items-center justify-between hover:cursor-pointer ",
                                          children: [
                                            (0, a.jsxs)("div", {
                                              className:
                                                "flex items-center justify-center space-x-2 p-2 font-avenir font-bold uppercase dark:text-white",
                                              children: [
                                                (0, a.jsx)("img", {
                                                  src: "/icons/icon-wallet-white.svg",
                                                  alt: "wallet",
                                                  className: "h-6 w-6",
                                                }),
                                                (0, a.jsx)("span", {
                                                  className:
                                                    "items-center justify-center text-center ",
                                                  children: Number(
                                                    (0, C.m)(
                                                      N.toFixed(4) || "0"
                                                    )
                                                  ),
                                                }),
                                                (0, a.jsx)("span", {
                                                  className:
                                                    "items-center justify-center text-center text-secondary-500",
                                                  children: z || "",
                                                }),
                                              ],
                                            }),
                                            (0, a.jsx)("div", {
                                              className:
                                                "mx-[20px] h-8 w-[2px] bg-secondary-700",
                                            }),
                                          ],
                                        }),
                                        (0, a.jsxs)(i.v, {
                                          children: [
                                            (0, k.$W)(
                                              null == h ? void 0 : h.planId
                                            )
                                              ? (0, a.jsx)("img", {
                                                  src: "/img/membership/premium-badge.png",
                                                  alt: "Premium Plan Badge",
                                                  className: "h-6",
                                                })
                                              : (0, k.zB)(
                                                  null == h ? void 0 : h.planId
                                                )
                                              ? (0, a.jsx)("img", {
                                                  src: "/img/membership/elite-badge.png",
                                                  alt: "Elite Plan Badge",
                                                  className: "h-6",
                                                })
                                              : (0, a.jsx)("button", {
                                                  onClick: () =>
                                                    j.push("/upgrade"),
                                                  className:
                                                    "text-gradient subheading-md-sm flex items-center justify-center text-center uppercase",
                                                  children: (0, a.jsx)("img", {
                                                    src: "/img/membership/upgrade.png",
                                                    alt: "upgrade",
                                                    className: "h-[25px]",
                                                  }),
                                                }),
                                            (0, a.jsx)(r.j, {
                                              className: m()(
                                                "subheading-lg-sm ml-4 text-start",
                                                (0, k.IF)(
                                                  null == h ? void 0 : h.planId
                                                )
                                                  ? "text-white"
                                                  : (0, k.zB)(
                                                      null == h
                                                        ? void 0
                                                        : h.planId
                                                    )
                                                  ? "text-yellow-400"
                                                  : (0, k.$W)(
                                                      null == h
                                                        ? void 0
                                                        : h.planId
                                                    ) && "text-green-400"
                                              ),
                                              children: (0, a.jsxs)("div", {
                                                className: "flex items-center",
                                                children: [
                                                  (0, a.jsxs)("div", {
                                                    children: [
                                                      null == h
                                                        ? void 0
                                                        : h.username,
                                                      !(0, k.IF)(
                                                        null == h
                                                          ? void 0
                                                          : h.planId
                                                      ) &&
                                                        (0, a.jsxs)("p", {
                                                          className:
                                                            "body-text-sm leading-tight text-secondary-400",
                                                          children: [
                                                            "Expires:",
                                                            " ",
                                                            (0, E.lX)(
                                                              new Date(
                                                                null == h
                                                                  ? void 0
                                                                  : h.planExpiresAt
                                                              )
                                                            ),
                                                          ],
                                                        }),
                                                    ],
                                                  }),
                                                  (0, a.jsxs)("div", {
                                                    className: "relative",
                                                    children: [
                                                      (0, a.jsx)("img", {
                                                        src:
                                                          (null == h
                                                            ? void 0
                                                            : h.image) ||
                                                          "/img/activity/default-avatar.png",
                                                        alt: "avatar",
                                                        className: m()(
                                                          "ml-2 h-9 w-9 rounded-full object-cover ring-2",
                                                          (0, k.IF)(
                                                            null == h
                                                              ? void 0
                                                              : h.planId
                                                          )
                                                            ? "ring-white"
                                                            : (0, k.zB)(
                                                                null == h
                                                                  ? void 0
                                                                  : h.planId
                                                              )
                                                            ? "ring-yellow-400"
                                                            : (0, k.$W)(
                                                                null == h
                                                                  ? void 0
                                                                  : h.planId
                                                              ) &&
                                                              "ring-green-400"
                                                        ),
                                                      }),
                                                      (0, k.zB)(
                                                        null == h
                                                          ? void 0
                                                          : h.planId
                                                      ) &&
                                                        (0, a.jsx)("img", {
                                                          src: "/icons/membership/elite-mini-badge.svg",
                                                          alt: "elite",
                                                          className:
                                                            "absolute -bottom-1 -right-1 h-3",
                                                        }),
                                                      (0, k.$W)(
                                                        null == h
                                                          ? void 0
                                                          : h.planId
                                                      ) &&
                                                        (0, a.jsx)("img", {
                                                          src: "/icons/membership/premium-mini-badge.svg",
                                                          alt: "elite",
                                                          className:
                                                            "absolute -bottom-1 -right-1 h-3",
                                                        }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            }),
                                            (0, a.jsxs)(n.q, {
                                              className:
                                                "flex flex-col gap-y-3 border border-bordergray !bg-black p-3 !text-white",
                                              children: [
                                                h &&
                                                  (0, a.jsxs)(c.s, {
                                                    className:
                                                      "body-text-default flex gap-x-3 !bg-black !text-white",
                                                    onClick: () =>
                                                      j.push(
                                                        "/@".concat(h.username)
                                                      ),
                                                    children: [
                                                      (0, a.jsx)("img", {
                                                        src: "/icons/icon-profile-light.svg",
                                                        alt: "profile",
                                                        className: "h-5 w-5",
                                                      }),
                                                      "Profile",
                                                    ],
                                                  }),
                                                (0, a.jsx)("div", {
                                                  className:
                                                    "mx-auto flex h-[0.5px] w-[90%] items-center justify-center bg-whiteAlpha-300",
                                                }),
                                                (0, a.jsxs)(c.s, {
                                                  className:
                                                    "body-text-default flex gap-x-3 !bg-black !text-[#FF2950]",
                                                  onClick: d,
                                                  children: [
                                                    (0, a.jsx)("img", {
                                                      src: "/icons/icon-logout.svg",
                                                      alt: "logout",
                                                      className: "h-5 w-5",
                                                    }),
                                                    "Sign Out",
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    })
                                  : (0, a.jsxs)("div", {
                                      className: "flex items-center",
                                      children: [
                                        (0, a.jsx)("img", {
                                          src: "/icons/upgrade/upgrade.svg",
                                          alt: "upgrade",
                                          className: "mr-1 h-6 w-6",
                                        }),
                                        (0, a.jsx)("button", {
                                          onClick: () => x(),
                                          className:
                                            "text-gradient subheading-lg-sm uppercase",
                                          children: "Upgrade",
                                        }),
                                        (0, a.jsx)("div", {
                                          className:
                                            "mx-2 h-[2px] w-6 rotate-90 rounded-full bg-secondary-700",
                                        }),
                                        (0, a.jsx)("button", {
                                          className:
                                            "subheading-lg-sm group cursor-pointer rounded-full bg-[linear-gradient(to_right,_#15DCE8,_#64DFC7,_#8AE09C,_#DBEE72)] p-[2px] uppercase",
                                          onClick: x,
                                          children: (0, a.jsx)("div", {
                                            className:
                                              "subheading-lg-xs group flex items-center rounded-full bg-secondary-800 px-4 py-2 uppercase",
                                            children: (0, a.jsx)("span", {
                                              className: m()(
                                                "text-white group-hover:bg-[linear-gradient(to_right,_#15DCE8,_#64DFC7,_#8AE09C,_#DBEE72)] group-hover:bg-clip-text group-hover:text-transparent"
                                              ),
                                              children: "Login",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                              })
                            : (0, a.jsxs)("div", {
                                className:
                                  "flex animate-pulse items-center space-x-2",
                                children: [
                                  (0, a.jsx)("div", {
                                    className:
                                      "h-6 w-24 rounded-md bg-secondary-500",
                                  }),
                                  (0, a.jsx)("div", {
                                    className:
                                      "mx-[20px] h-8 w-[2px] bg-secondary-700",
                                  }),
                                  (0, a.jsx)("div", {
                                    className:
                                      "h-6 w-20 rounded-md bg-secondary-600",
                                  }),
                                  (0, a.jsx)("div", {
                                    className:
                                      "h-6 w-24 rounded-md bg-secondary-500",
                                  }),
                                  (0, a.jsx)("div", {
                                    className:
                                      "h-10 w-10 rounded-full bg-secondary-500",
                                  }),
                                ],
                              }),
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            })
          );
        };
    },
  },
]);
