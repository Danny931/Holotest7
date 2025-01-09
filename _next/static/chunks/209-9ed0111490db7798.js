"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [209],
  {
    60209: function (e, a, s) {
      s.d(a, {
        Z: function () {
          return u;
        },
      });
      var r = s(85893),
        i = s(67294),
        t = s(93967),
        o = s.n(t),
        n = s(12519),
        c = s(11163),
        l = s(21850),
        d = s(21003),
        v = "https://discord.gg/uP3hGWQh8b",
        h = s(44175),
        u = (e) => {
          let { lightMode: a } = e,
            { holoUser: s, login: t } = (0, d.a)(),
            u = (0, c.useRouter)(),
            [m, g] = (0, i.useState)(""),
            p = () => {
              u.push("/");
            },
            x = () => {
              u.push("/launch");
            },
            b = () => {
              u.push("/playground");
            },
            f = () => {
              if (!s) {
                t();
                return;
              }
              u.push("/inventory");
            },
            w = () => {
              u.push("/chat");
            },
            j = () => {
              u.push("/create");
            };
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)("div", {
              className:
                "group fixed bottom-0 left-0 z-[49] flex w-full flex-row border-r border-bordergray dark:bg-black md:left-0 md:top-0 md:mt-[56px] md:h-[calc(100vh-42px)] md:w-[56px] md:flex-col md:justify-between md:py-4 md:transition-[width] md:duration-150 md:hover:w-[220px]",
              children: [
                (0, r.jsxs)("div", {
                  className: "flex w-full justify-between md:flex-col",
                  children: [
                    (0, r.jsxs)("div", {
                      className:
                        "group/home relative flex w-full cursor-pointer flex-col items-center justify-start py-4 md:flex-row md:pl-4",
                      onClick: () => p(),
                      onMouseEnter: () => g("home"),
                      onMouseLeave: () => g(""),
                      children: [
                        "/" === u.pathname
                          ? (0, r.jsx)("img", {
                              src: (0, l.r)(a).home.active,
                              alt: "home mode",
                            })
                          : "home" === m
                          ? (0, r.jsx)("img", {
                              src: (0, l.r)(a).home.hover,
                              alt: "home mode",
                            })
                          : (0, r.jsx)("img", {
                              src: (0, l.r)(a).home.default,
                              alt: "home mode",
                            }),
                        (0, r.jsx)("div", {
                          className:
                            "subheading-sm-xss md:subheading-sm-xs cursor-pointer capitalize leading-[16.8px] group-hover:visible dark:text-white md:invisible md:pl-3 ".concat(
                              "/" === u.pathname
                                ? "sub-hover-gradient-background"
                                : ""
                            ),
                          children: "Explore",
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className:
                        "group/launch relative flex w-full cursor-pointer flex-col items-center justify-start py-4 md:flex-row md:pl-4",
                      onClick: () => x(),
                      onMouseEnter: () => g("launch"),
                      onMouseLeave: () => g(""),
                      children: [
                        "/launch" === u.pathname
                          ? (0, r.jsx)("img", {
                              src: (0, l.r)(a).launch.active,
                              alt: "launch mode",
                            })
                          : "launch" === m
                          ? (0, r.jsx)("img", {
                              src: (0, l.r)(a).launch.hover,
                              alt: "launch mode",
                            })
                          : (0, r.jsx)("img", {
                              src: (0, l.r)(a).launch.default,
                              alt: "launch mode",
                            }),
                        (0, r.jsx)("div", {
                          className:
                            "subheading-sm-xss md:subheading-sm-xs cursor-pointer capitalize leading-[16.8px] group-hover:visible dark:text-white md:invisible md:pl-3 ".concat(
                              "/launch" === u.pathname
                                ? "sub-hover-gradient-background"
                                : ""
                            ),
                          children: "Market",
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className:
                        "group/create relative flex w-full cursor-pointer flex-col items-center justify-start py-4 md:flex-row md:pl-4",
                      onClick: () => j(),
                      onMouseEnter: () => g("create"),
                      onMouseLeave: () => g(""),
                      children: [
                        u.pathname.includes("/create")
                          ? (0, r.jsx)("img", {
                              src: (0, l.r)(a).creator.active,
                              alt: "creator mode",
                            })
                          : "create" === m
                          ? (0, r.jsx)("img", {
                              src: (0, l.r)(a).creator.hover,
                              alt: "creator mode",
                            })
                          : (0, r.jsx)("img", {
                              src: (0, l.r)(a).creator.default,
                              alt: "creator mode",
                            }),
                        (0, r.jsx)("div", {
                          className:
                            "subheading-sm-xss md:subheading-sm-xs cursor-pointer capitalize leading-[16.8px] group-hover:visible dark:text-white md:invisible md:pl-3 ".concat(
                              "/create" === u.pathname
                                ? "sub-hover-gradient-background"
                                : ""
                            ),
                          children: "Create",
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className:
                        "group/chat relative flex w-full cursor-pointer flex-col items-center justify-start py-4 md:flex-row md:pl-4",
                      onClick: () => w(),
                      onMouseEnter: () => g("chat"),
                      onMouseLeave: () => g(""),
                      children: [
                        (0, r.jsx)("div", {
                          children:
                            u.pathname.startsWith("/chat") || "chat" === m
                              ? (0, r.jsx)(h.ChatSolidIcon, {
                                  className: "h-6 w-6",
                                  fill: "url(#main-holo-gradient)",
                                })
                              : (0, r.jsx)(h.ChatOutlineIcon, {
                                  className: o()(
                                    "h-6 w-6",
                                    a
                                      ? "text-secondary-default"
                                      : "text-gray-300"
                                  ),
                                }),
                        }),
                        (0, r.jsx)("div", {
                          className:
                            "subheading-sm-xss md:subheading-sm-xs cursor-pointer capitalize leading-[16.8px] group-hover:visible dark:text-white md:invisible md:pl-3 ".concat(
                              u.pathname.includes("/chat")
                                ? "sub-hover-gradient-background"
                                : ""
                            ),
                          children: "Chat",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "hidden md:block",
                  children: [
                    (0, r.jsxs)("div", {
                      className:
                        "group/docs flex w-full cursor-pointer flex-row items-center justify-start",
                      onClick: () => {
                        window.open("/", "_blank");
                      },
                      onMouseEnter: () => g("docs"),
                      onMouseLeave: () => g(""),
                      children: [
                        (0, r.jsx)(n.h, {
                          "aria-label": "reward mode",
                          variant: "ghost",
                          height: "56px",
                          className: "!pl-2",
                          _hover: { bg: "none" },
                          icon:
                            "docs" === m
                              ? (0, r.jsx)("img", {
                                  src: (0, l.r)(a).docs.hover,
                                  alt: "docs mode",
                                })
                              : (0, r.jsx)("img", {
                                  src: (0, l.r)(a).docs.default,
                                  alt: "docs mode",
                                }),
                        }),
                        (0, r.jsx)("div", {
                          className: o()({
                            "subheading-sm-xss md:subheading-sm-xs pl-3 capitalize leading-[16.8px] group-hover:visible dark:text-white md:invisible":
                              !0,
                          }),
                          children: "Docs",
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className:
                        "group/twitter flex w-full cursor-pointer flex-row items-center justify-start",
                      onClick: () => {
                        window.open(
                          "https://x.com/SLWR_AI",
                          "_blank"
                        );
                      },
                      onMouseEnter: () => g("twitter"),
                      onMouseLeave: () => g(""),
                      children: [
                        (0, r.jsx)(n.h, {
                          "aria-label": "twitter mode",
                          variant: "ghost",
                          height: "56px",
                          _hover: { bg: "none" },
                          className: "!pl-2",
                          icon:
                            "twitter" === m
                              ? (0, r.jsx)("img", {
                                  src: (0, l.r)(a).twitter.hover,
                                  alt: "twitter mode",
                                })
                              : (0, r.jsx)("img", {
                                  src: (0, l.r)(a).twitter.default,
                                  alt: "twitter mode",
                                }),
                          onClick: () => {
                            window.open(
                              "https://x.com/SLWR_AI",
                              "_blank"
                            );
                          },
                        }),
                        (0, r.jsx)("div", {
                          className: o()({
                            "subheading-sm-xss md:subheading-sm-xs pl-3 capitalize leading-[16.8px] group-hover:visible dark:text-white md:invisible":
                              !0,
                          }),
                          children: "Twitter",
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className:
                        "group/telegram flex w-full cursor-pointer flex-row items-center justify-start",
                      onClick: () => window.open(v, "_blank"),
                      onMouseEnter: () => g("telegram"),
                      onMouseLeave: () => g(""),
                      children: [
                        (0, r.jsx)(n.h, {
                          "aria-label": "telegram mode",
                          variant: "ghost",
                          height: "56px",
                          className: "!pl-2",
                          _hover: { bg: "none" },
                          icon:
                            "telegram" === m
                              ? (0, r.jsx)("img", {
                                  src: (0, l.r)(a).discord.hover,
                                  alt: "telegram mode",
                                })
                              : (0, r.jsx)("img", {
                                  src: (0, l.r)(a).discord.default,
                                  alt: "telegram mode",
                                }),
                          onClick: () => {
                            window.open(v, "_blank");
                          },
                        }),
                        (0, r.jsx)("div", {
                          className: o()({
                            "subheading-sm-xss md:subheading-sm-xs pl-3 capitalize leading-[16.8px] group-hover:visible dark:text-white md:invisible":
                              !0,
                          }),
                          children: "Telegram",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        };
    },
    21850: function (e, a, s) {
      s.d(a, {
        r: function () {
          return r;
        },
      });
      let r = (e) => ({
        home: {
          default: e
            ? "/icons/navbar/home-black.svg"
            : "/icons/navbar/home-white.svg",
          hover: "/icons/navbar/home-active.svg",
          active: "/icons/navbar/home-active.svg",
        },
        launch: {
          default: "/icons/navbar/launch-white.svg",
          hover: "/icons/navbar/launch-active.svg",
          active: "/icons/navbar/launch-active.svg",
        },
        inventory: {
          default: "/icons/navbar/inventory-white.svg",
          hover: "/icons/navbar/inventory-active.svg",
          active: "/icons/navbar/inventory-active.svg",
        },
        market: {
          default: "/icons/navbar/market-white.svg",
          hover: "/icons/navbar/market-active.svg",
          active: "/icons/navbar/market-active.svg",
        },
        studio: {
          default: e
            ? "/icons/navbar/studio-black.svg"
            : "/icons/navbar/studio-white.svg",
          hover: "/icons/navbar/studio-active.svg",
          active: "/icons/navbar/studio-active.svg",
        },
        creator: {
          default: e
            ? "/icons/navbar/create-black.svg"
            : "/icons/navbar/create-white.svg",
          hover: e
            ? "/icons/navbar/creator-active.svg"
            : "/icons/navbar/create-active.svg",
          active: "/icons/navbar/create-active.svg",
        },
        discord: {
          default: e
            ? "/icons/navbar/discord-light.svg"
            : "/icons/navbar/discord.svg",
          hover: "/icons/navbar/discord-active.svg",
          active: "/icons/navbar/discord-active.svg",
        },
        reward: {
          default: e
            ? "/icons/navbar/reward-light.svg"
            : "/icons/navbar/reward.svg",
          hover: e
            ? "/icons/navbar/reward-light-hover.svg"
            : "/icons/navbar/reward-hover.svg",
          active: "/icons/navbar/reward-active.svg",
        },
        docs: {
          default: e
            ? "/icons/navbar/docs-dark.svg"
            : "/icons/navbar/docs-light.svg",
          hover: "/icons/navbar/docs.svg",
          active: "",
        },
        twitter: {
          default: "/icons/navbar/icon-twitter-white.svg",
          hover: "/icons/navbar/icon-twitter-active.svg",
          active: "/icons/navbar/icon-twitter-active.svg",
        },
      });
    },
  },
]);
