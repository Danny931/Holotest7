(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [788],
  {
    68786: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/launch",
        function () {
          return s(91278);
        },
      ]);
    },
    11206: function (e, t, s) {
      "use strict";
      s.d(t, {
        w_: function () {
          return o;
        },
      });
      var r = s(67294),
        a = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        n = r.createContext && r.createContext(a),
        l = function () {
          return (l =
            Object.assign ||
            function (e) {
              for (var t, s = 1, r = arguments.length; s < r; s++)
                for (var a in (t = arguments[s]))
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              return e;
            }).apply(this, arguments);
        },
        i = function (e, t) {
          var s = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              0 > t.indexOf(r) &&
              (s[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var a = 0, r = Object.getOwnPropertySymbols(e);
              a < r.length;
              a++
            )
              0 > t.indexOf(r[a]) &&
                Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
                (s[r[a]] = e[r[a]]);
          return s;
        };
      function o(e) {
        return function (t) {
          return r.createElement(
            c,
            l({ attr: l({}, e.attr) }, t),
            (function e(t) {
              return (
                t &&
                t.map(function (t, s) {
                  return r.createElement(
                    t.tag,
                    l({ key: s }, t.attr),
                    e(t.child)
                  );
                })
              );
            })(e.child)
          );
        };
      }
      function c(e) {
        var t = function (t) {
          var s,
            a = e.attr,
            n = e.size,
            o = e.title,
            c = i(e, ["attr", "size", "title"]),
            d = n || t.size || "1em";
          return (
            t.className && (s = t.className),
            e.className && (s = (s ? s + " " : "") + e.className),
            r.createElement(
              "svg",
              l(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                t.attr,
                a,
                c,
                {
                  className: s,
                  style: l(l({ color: e.color || t.color }, t.style), e.style),
                  height: d,
                  width: d,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              o && r.createElement("title", null, o),
              e.children
            )
          );
        };
        return void 0 !== n
          ? r.createElement(n.Consumer, null, function (e) {
              return t(e);
            })
          : t(a);
      }
    },
    91102: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return u;
        },
      });
      var r = s(85893),
        a = s(89382),
        n = s(67294),
        l = s(93967),
        i = s.n(l),
        o = (e) => {
          let { itemsLength: t, selectedIndex: s } = e,
            a = Array(t).fill(0);
          return (0, r.jsx)("div", {
            className:
              "absolute -bottom-10 left-1/2 flex -translate-x-1/2 gap-1",
            children: a.map((e, t) => {
              let a = t === s;
              return (0, r.jsx)(
                "div",
                {
                  className: i()({
                    "h-2 w-2 rounded-full bg-white ring-[0.3px] ring-gray-900 transition-all duration-300":
                      !0,
                    "opacity-50": !a,
                  }),
                },
                t
              );
            }),
          });
        },
        c = s(77451),
        d = s(19311),
        x = s(75218),
        m = function (e, t) {
          var s = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              0 > t.indexOf(r) &&
              (s[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var a = 0, r = Object.getOwnPropertySymbols(e);
              a < r.length;
              a++
            )
              0 > t.indexOf(r[a]) &&
                Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
                (s[r[a]] = e[r[a]]);
          return s;
        },
        u = (e) => {
          var {
              children: t,
              autoPlay: s = !1,
              hiddenDots: l = !1,
              showArrows: i = !1,
            } = e,
            u = m(e, ["children", "autoPlay", "hiddenDots", "showArrows"]);
          let h = s ? [(0, c.Z)({ delay: 3e3 })] : [],
            [p, f] = (0, a.Z)(u, h),
            [g, b] = (0, n.useState)(0),
            [j, v] = (0, n.useState)(!1);
          (0, n.useEffect)(() => {
            function e() {
              b((null == f ? void 0 : f.selectedScrollSnap()) || 0);
            }
            return (
              null == f || f.on("select", e),
              () => {
                null == f || f.off("select", e);
              }
            );
          }, [f]);
          let y = n.Children.count(t);
          return (0, r.jsxs)("div", {
            onMouseEnter: () => v(!0),
            onMouseLeave: () => v(!1),
            className: "relative",
            children: [
              (0, r.jsx)("div", {
                ref: p,
                className: "",
                children: (0, r.jsx)("div", {
                  className: "flex items-center",
                  children: t,
                }),
              }),
              !l && (0, r.jsx)(o, { itemsLength: y, selectedIndex: g }),
              i &&
                (j || !s) &&
                (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)("button", {
                      onClick: () => (null == f ? void 0 : f.scrollPrev()),
                      className:
                        "absolute left-0 top-1/2 flex h-full w-[5%] -translate-y-1/2 transform items-center justify-center",
                      children: (0, r.jsx)("div", {
                        children: (0, r.jsx)(d.R, {
                          className: "text-[36px] !text-secondary-200",
                        }),
                      }),
                    }),
                    (0, r.jsx)("button", {
                      onClick: () => (null == f ? void 0 : f.scrollNext()),
                      className:
                        "absolute right-0 top-1/2 flex h-full w-[5%] -translate-y-1/2 transform  items-center justify-center",
                      children: (0, r.jsx)("div", {
                        children: (0, r.jsx)(x.m, {
                          className: "text-[36px] !text-secondary-200",
                        }),
                      }),
                    }),
                  ],
                }),
            ],
          });
        };
    },
    12227: function (e, t, s) {
      "use strict";
      var r = s(85893),
        a = s(46941),
        n = s(85105),
        l = s(93967),
        i = s.n(l);
      t.Z = (e) => {
        let {
            totalItems: t,
            itemsPerPage: s,
            currentPage: l,
            setCurrentPage: o,
          } = e,
          c = Math.ceil(t / s),
          d = (e) => {
            e < 1 || e > c || o(e);
          };
        return (0, r.jsxs)("div", {
          className: "subheading-sm-xs flex items-center justify-center",
          children: [
            (0, r.jsx)("button", {
              className: "mx-1 rounded bg-black py-1 text-secondary-300 ",
              onClick: () => d(l - 1),
              disabled: 1 === l,
              children: (0, r.jsx)(a.w, {
                className: i()(
                  "!text-[24px]",
                  1 === l
                    ? "!text-secondary-500"
                    : " !font-extrabold  !text-white"
                ),
              }),
            }),
            (() => {
              let e = [];
              if (c <= 5) for (let t = 1; t <= c; t++) e.push(t);
              else
                e =
                  l < 4
                    ? [1, 2, 3, "...", c]
                    : l > c - 3
                    ? [1, "...", c - 2, c - 1, c]
                    : [1, "...", l, "...", c];
              return e.map((e, t) =>
                "..." === e
                  ? (0, r.jsx)("span", { className: "mx-1", children: e }, t)
                  : (0, r.jsx)(
                      "button",
                      {
                        className:
                          "subheading-sm-xs mx-1 h-6 w-6  rounded text-center ".concat(
                            e === l
                              ? " bg-secondary-700 text-white"
                              : "bg-gray-800 text-gray-300"
                          ),
                        onClick: () => d(e),
                        children: e,
                      },
                      t
                    )
              );
            })(),
            (0, r.jsx)("button", {
              className: "mx-1 rounded bg-black py-1 text-secondary-300",
              onClick: () => d(l + 1),
              disabled: l === c,
              children: (0, r.jsx)(n.X, {
                className: i()(
                  "!text-[24px]",
                  l === c
                    ? "!text-secondary-500"
                    : " !font-extrabold  !text-white"
                ),
              }),
            }),
          ],
        });
      };
    },
    91278: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          MemecoinSortBy: function () {
            return l;
          },
          TokenSortBy: function () {
            return n;
          },
          availableMemecoinSortBy: function () {
            return q;
          },
          availableTokenSortBy: function () {
            return H;
          },
          default: function () {
            return X;
          },
        });
      var r,
        a,
        n,
        l,
        i = s(85893),
        o = s(48427),
        c = s(60209),
        d = s(67294),
        x = s(99319),
        m = s(8559),
        u = s(11163),
        h = s(21003),
        p = () =>
          (0, i.jsxs)("div", {
            className: "mt-[100px] flex w-full flex-col items-center ",
            children: [
              (0, i.jsx)("div", {
                className:
                  "heading-lg-xl sm:heading-lg-3xl relative overflow-hidden whitespace-nowrap text-center text-transparent",
                style: {
                  color: "transparent",
                  WebkitTextStroke: "2px transparent",
                  background: "linear-gradient(to top, #1A2127, #A2B6C5)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "#121212",
                  backgroundSize: "50% 100%",
                  backgroundPosition: "center bottom",
                },
                children: "How it Works",
              }),
              (0, i.jsxs)("div", {
                className:
                  "mt-10 flex max-w-[1280px] flex-col gap-y-10 lg:mt-0 lg:flex-row lg:items-start lg:justify-between lg:gap-x-16",
                children: [
                  (0, i.jsxs)("div", {
                    className:
                      "flex h-full w-full gap-x-3 px-12 lg:flex-col lg:items-start lg:justify-center",
                    children: [
                      (0, i.jsx)("div", {
                        className:
                          "relative flex min-w-[86px] items-start justify-center overflow-hidden whitespace-nowrap text-center text-[96px] text-transparent",
                        style: {
                          color: "transparent",
                          WebkitTextStroke: "2px transparent",
                          background:
                            "linear-gradient(to top, #1A2127, #A2B6C5)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "#121212",
                          backgroundSize: "50% 100%",
                          backgroundPosition: "center bottom",
                        },
                        children: "1",
                      }),
                      (0, i.jsxs)("div", {
                        className: "flex flex-col justify-center lg:-mt-6",
                        children: [
                          (0, i.jsx)("div", {
                            className: "subheading-lg-xl text-white",
                            children: "Create",
                          }),
                          (0, i.jsx)("div", {
                            className:
                              "body-text-default tracking-tighter text-secondary-400",
                            children:
                              "Create and fine-tune an AI agent for your favorite community.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className:
                      "flex h-full w-full gap-x-3 px-12 lg:flex-col lg:items-start lg:justify-center",
                    children: [
                      (0, i.jsx)("div", {
                        className:
                          "relative flex min-w-[86px] items-start justify-center overflow-hidden whitespace-nowrap text-center text-[96px] text-transparent",
                        style: {
                          color: "transparent",
                          WebkitTextStroke: "2px transparent",
                          background:
                            "linear-gradient(to top, #1A2127, #A2B6C5)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "#121212",
                          backgroundSize: "50% 100%",
                          backgroundPosition: "center bottom",
                        },
                        children: "2",
                      }),
                      (0, i.jsxs)("div", {
                        className: "flex flex-col justify-center lg:-mt-6",
                        children: [
                          (0, i.jsx)("div", {
                            className: "subheading-lg-xl text-white",
                            children: "Launch",
                          }),
                          (0, i.jsx)("div", {
                            className:
                              "body-text-default tracking-tighter text-secondary-400",
                            children:
                              "Share the AI with your community and get votes.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className:
                      "flex h-full w-full gap-x-3 px-12 lg:flex-col lg:items-start lg:justify-center",
                    children: [
                      (0, i.jsx)("div", {
                        className:
                          "relative flex min-w-[86px] items-start justify-center overflow-hidden whitespace-nowrap text-center text-[96px] text-transparent",
                        style: {
                          color: "transparent",
                          WebkitTextStroke: "2px transparent",
                          background:
                            "linear-gradient(to top, #1A2127, #A2B6C5)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "#121212",
                          backgroundSize: "50% 100%",
                          backgroundPosition: "center bottom",
                        },
                        children: "3",
                      }),
                      (0, i.jsxs)("div", {
                        className: "flex flex-col justify-center lg:-mt-6",
                        children: [
                          (0, i.jsx)("div", {
                            className: "subheading-lg-xl text-white",
                            children: "Elevate",
                          }),
                          (0, i.jsx)("div", {
                            className:
                              "body-text-default tracking-tighter text-secondary-400",
                            children:
                              "Communities with the most upvotes get their AI agents ready for X and AI studio (coming soon)",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        f = s(25675),
        g = s.n(f),
        b = (e) => {
          let { onLaunchShares: t } = e;
          return (0, i.jsx)("div", {
            className: "flex w-full items-center justify-center ",
            children: (0, i.jsxs)("div", {
              className:
                "relative mx-6 mt-[100px] flex w-full max-w-[1360px] flex-col items-center justify-center overflow-hidden rounded-2xl px-8 py-[56px] sm:py-[76px] md:py-20 lg:mx-[48px]",
              style: {
                background:
                  "linear-gradient(96deg, #DCED71 18.4%, #0FC6EA 98.24%)",
              },
              children: [
                (0, i.jsx)(g(), {
                  src: "https://hologramxyz.s3.amazonaws.com/assets/images/launch/launch-footer-bg.png",
                  alt: "footer-bg",
                  className:
                    "absolute left-0 top-0 h-full w-full rounded-2xl object-cover",
                  width: 1360,
                  height: 352,
                }),
                (0, i.jsxs)("div", {
                  className: "z-20 flex w-full flex-col items-center",
                  children: [
                    (0, i.jsx)("div", {
                      className:
                        "mb-3 text-center text-[18px]  font-extrabold text-black sm:text-[40px]",
                      children: "Welcome to SmileAI",
                    }),
                    (0, i.jsx)("div", {
                      className:
                        "sm:subheading-sm-sm subheading-sm-xs mb-[48px] text-center text-secondary-800",
                      children:
                        "Create, play, and trade your favorite AI agents.",
                    }),
                    (0, i.jsx)("button", {
                      className:
                        "subheading-lg-md flex h-14 w-[200px] items-center justify-center rounded-full bg-black leading-[24px] -tracking-[0.4px] text-white ",
                      // onClick: t,
                      children: "Launch",
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        j = () =>
          (0, i.jsx)("div", {
            className:
              "subheading-sm-xs mt-[100px] h-[112px] text-center text-secondary-500 ",
            children: "Copyright \xa9 2024 SmileAI\xae. All rights reserved.",
          }),
        v = s(36641),
        y = s(57954),
        w = s(34425),
        N = s(59082);
      let k = [
        {
          question: "What is the vision?",
          answer: (0, i.jsx)(i.Fragment, {
            children:
              "The next Hollywood or Disney won't emerge from a boardroom of media executives, but from the creative minds of today's digital natives. Armed with nothing more than smartphones and imagination, a new generation of creators is redefining storytelling through pseudonymous accounts and short-form videos. Yet not everyone has the personality or appearance widely accepted for stardom, nor access to massive production budgets. These barriers are to be shattered in SmileAI, enabling anyone the power to tell their own story - with or without a camera.",
          }),
        },
        {
          question: "What is the roadmap?",
          answer: (0, i.jsxs)(i.Fragment, {
            children: [
              "Our roadmap covers several key areas to achieve our vision towards the hub for the world's most immersive AI character agents. We will continue to build alongside community feedbacks for what people want to see.",
              (0, i.jsx)("br", {}),
              (0, i.jsx)("br", {}),
              (0, i.jsx)("span", {
                className: "font-semibold",
                children: "Go live on socials",
              }),
              (0, i.jsx)("br", {}),
              "• X, Telegram and Discord integration for seamless AI interactions across platforms",
              (0, i.jsx)("br", {}),
              "• Tiktok, Twitch, Youtube Live, and Instagram Reels integrations for seamless AI avatar livestreaming",
              (0, i.jsx)("br", {}),
              (0, i.jsx)("br", {}),
              (0, i.jsx)("span", {
                className: "font-semibold",
                children: "Lower barrier to content / IP creation",
              }),
              (0, i.jsx)("br", {}),
              "• Character generation",
              (0, i.jsx)("br", {}),
              "• Video generation",
              (0, i.jsx)("br", {}),
              "• Animation engine",
              (0, i.jsx)("br", {}),
              (0, i.jsx)("br", {}),
              (0, i.jsx)("span", {
                className: "font-semibold",
                children: "Elevate immersion",
              }),
              (0, i.jsx)("br", {}),
              "• Long-term memory",
              (0, i.jsx)("br", {}),
              "• Multi-agent interactions",
              (0, i.jsx)("br", {}),
              "• Simulation Engine",
              (0, i.jsx)("br", {}),
              "• Voice Creation",
              (0, i.jsx)("br", {}),
              (0, i.jsx)("br", {}),
              (0, i.jsx)("span", {
                className: "font-semibold",
                children: "Expand platforms",
              }),
              (0, i.jsx)("br", {}),
              "• Mobile",
              (0, i.jsx)("br", {}),
              "• Browser Extension",
              (0, i.jsx)("br", {}),
              "• SDK",
              (0, i.jsx)("br", {}),
              "• Desktop",
              (0, i.jsx)("br", {}),
              (0, i.jsx)("br", {}),
              (0, i.jsx)("span", {
                className: "font-semibold",
                children: "Let creators monetize",
              }),
              (0, i.jsx)("br", {}),
              "• Skills Marketplace",
              (0, i.jsx)("br", {}),
              "• Asset Marketplace",
              (0, i.jsx)("br", {}),
              "• Creator Leaderboard",
              (0, i.jsx)("br", {}),
            ],
          }),
        },
        {
          question: "What to expect in the upcoming weeks?",
          answer: (0, i.jsx)(i.Fragment, {
            children:
              "Socials / streaming. Generative content. Rapidly accelerating sentience. More choices for creators. Aggressively collecting community feedback.",
          }),
        },
        {
          question: "What is Agent Market?",
          answer: (0, i.jsx)(i.Fragment, {
            children:
              "Agent market is a place where the best and most active communities can get access to the next generation tools of AI to bring their project to the next level.",
          }),
        },
        {
          question: "How do I launch an AI agent?",
          answer:
            "Click create, enter in the token address and start fine-tuning the character with our innovative character creator. Once published, you can share with your community and friends to collect votes.",
        },
      ];
      var C = () => {
          let [e, t] = (0, d.useState)([]);
          return (0, i.jsxs)("div", {
            className: "mt-[100px] flex w-full flex-col items-center ",
            children: [
              (0, i.jsx)("div", {
                className:
                  "heading-lg-xl sm:heading-lg-3xl relative overflow-hidden whitespace-nowrap text-center text-transparent",
                style: {
                  color: "transparent",
                  WebkitTextStroke: "2px transparent",
                  background: "linear-gradient(to top, #1A2127, #A2B6C5)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "#121212",
                  backgroundSize: "50% 100%",
                  backgroundPosition: "center bottom",
                },
                children: "FAQ",
              }),
              (0, i.jsx)("div", {
                className: "flex w-full items-center justify-center text-white",
                children: (0, i.jsx)("div", {
                  className: "w-4/5",
                  children: k.map((s, r) =>
                    (0, i.jsxs)(
                      "button",
                      {
                        className: "w-full text-left",
                        onClick: () =>
                          t((e) =>
                            e.some((e) => e === r)
                              ? e.filter((e) => e !== r)
                              : [...e, r]
                          ),
                        children: [
                          (0, i.jsx)("div", {
                            className:
                              "my-4 h-[1px] w-full bg-black/[0.08] dark:bg-whiteAlpha-200",
                          }),
                          (0, i.jsxs)("div", {
                            className:
                              "subheading-lg-md flex w-full items-center justify-between",
                            children: [
                              s.question,
                              (0, i.jsx)("div", {
                                className:
                                  "font-avenir text-[20px] font-medium text-white",
                                children: e.some((e) => e === r)
                                  ? (0, i.jsx)(N.Vmf, {})
                                  : (0, i.jsx)(N.OId, {}),
                              }),
                            ],
                          }),
                          e.some((e) => e === r) &&
                            (0, i.jsx)("p", {
                              className:
                                "body-text-default mt-2 w-full text-secondary-300",
                              children: s.answer,
                            }),
                        ],
                      },
                      r
                    )
                  ),
                }),
              }),
            ],
          });
        },
        S = s(12227),
        A = () =>
          (0, i.jsxs)("button", {
            className: "relative w-[400px] rounded-3xl bg-black p-5 shadow-xl",
            children: [
              (0, i.jsxs)("div", {
                className: "absolute right-5 top-5 flex gap-3",
                children: [
                  (0, i.jsx)("div", {
                    className: "flex items-center justify-center ",
                    children: (0, i.jsx)("div", {
                      className:
                        "h-4 w-4 animate-pulse rounded bg-secondary-400",
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className: "flex items-center justify-center ",
                    children: (0, i.jsx)("div", {
                      className:
                        "h-4 w-4 animate-pulse rounded bg-secondary-400",
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className: "flex items-center justify-center",
                    children: (0, i.jsx)("div", {
                      className:
                        "h-4 w-4 animate-pulse rounded bg-secondary-400",
                    }),
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: "flex justify-start gap-4",
                children: [
                  (0, i.jsx)("div", {
                    className:
                      "h-16 w-16 animate-pulse rounded-xl bg-secondary-500 object-cover  sm:h-[76px] sm:w-[76px]",
                  }),
                  (0, i.jsxs)("div", {
                    className: "flex flex-col justify-between",
                    children: [
                      (0, i.jsxs)("div", {
                        className: "flex flex-col",
                        children: [
                          (0, i.jsx)("div", {
                            className:
                              "h-5 w-16 animate-pulse rounded bg-secondary-400",
                          }),
                          (0, i.jsx)("div", {
                            className:
                              "mt-1 h-4 w-[120px] animate-pulse rounded bg-secondary-400",
                          }),
                        ],
                      }),
                      (0, i.jsx)("div", {
                        className:
                          "body-text-sm flex h-4 w-40 animate-pulse cursor-pointer items-center rounded bg-secondary-400 ",
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                className: "my-3 w-full text-whiteAlpha-200",
              }),
              (0, i.jsx)("div", {
                className:
                  "body-text-sm mb-3 line-clamp-2 hidden h-10 w-full animate-pulse overflow-ellipsis whitespace-nowrap rounded bg-secondary-400 sm:block",
              }),
              (0, i.jsxs)("div", {
                className: "mb-3 flex justify-start gap-4",
                children: [
                  (0, i.jsxs)("div", {
                    className:
                      "flex w-1/3 flex-col items-start gap-1 text-green-400 sm:hidden sm:w-auto",
                    children: [
                      (0, i.jsx)("div", {
                        className: "heading-sm-xsss uppercase",
                        children: "Progress",
                      }),
                      (0, i.jsx)("div", {
                        className:
                          "h-4 w-20 animate-pulse rounded bg-secondary-400",
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className:
                      "flex w-1/3 flex-col items-start gap-1 text-green-400 sm:w-auto",
                    children: [
                      (0, i.jsx)("div", {
                        className: "heading-sm-xsss uppercase ",
                        children: "market cap",
                      }),
                      (0, i.jsx)("div", {
                        className:
                          "h-4 w-20 animate-pulse rounded bg-secondary-400",
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className:
                      "flex w-1/3 flex-col items-start gap-1 text-secondary-300 sm:w-auto",
                    children: [
                      (0, i.jsx)("div", {
                        className: "heading-sm-xsss uppercase ",
                        children: "launch time",
                      }),
                      (0, i.jsx)("div", {
                        className:
                          "h-4 w-20 animate-pulse rounded bg-secondary-400",
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: "mb-6 hidden flex-col items-start sm:flex",
                children: [
                  (0, i.jsx)("div", {
                    className: "flex items-center gap-1",
                    children: (0, i.jsx)("div", {
                      className: "subheading-lg-sm text-green-400",
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className: "mt-1 h-2 w-full rounded-full bg-black ",
                    children: (0, i.jsx)("div", {
                      className:
                        "h-2 w-full animate-pulse rounded-full bg-secondary-400",
                    }),
                  }),
                ],
              }),
            ],
          }),
        E = s(44175),
        T = s(70386),
        O = s(93967),
        B = s.n(O),
        I = (e) => {
          var t;
          let { character: s } = e,
            r = (0, u.useRouter)(),
            { holoUser: a, isAuthenticated: n } = (0, h.a)(),
            { login: l } = (0, T.sv)(),
            {
              userCharacterUpvotes: o,
              setUserCharacterUpvotes: c,
              setDisplayNotification: p,
            } = (0, x.oR)((e) => e),
            [f, g] = (0, d.useState)(s.memecoinUpvoteCounter || 0),
            b = (null == o ? void 0 : o.upvotedIds.includes(s.id)) || !1,
            j = () => {
              var e, t, r, i;
              return (
                (e = void 0),
                (t = void 0),
                (r = void 0),
                (i = function* () {
                  if (!n) return l();
                  yield (0, T.hP)();
                  let e = yield fetch("/api/launchpad/memecoins/upvotes", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ characterId: s.id, userId: a.id }),
                  });
                  if (!e.ok) {
                    let t = yield e.json();
                    p(!0, m.CC.ERROR, "Error", t.errorMessage, m.d.BOTTOM);
                    return;
                  }
                  let { updatedUserCharacterUpvotes: t } = yield e.json();
                  g((e) => (b ? e - 1 : e + 1)), c(t);
                }),
                new (r || (r = Promise))(function (s, a) {
                  function n(e) {
                    try {
                      o(i.next(e));
                    } catch (e) {
                      a(e);
                    }
                  }
                  function l(e) {
                    try {
                      o(i.throw(e));
                    } catch (e) {
                      a(e);
                    }
                  }
                  function o(e) {
                    var t;
                    e.done
                      ? s(e.value)
                      : ((t = e.value) instanceof r
                          ? t
                          : new r(function (e) {
                              e(t);
                            })
                        ).then(n, l);
                  }
                  o((i = i.apply(e, t || [])).next());
                })
              );
            };
          return (0, i.jsxs)("button", {
            className: B()(
              "relative w-full rounded-3xl border border-bordergray bg-black p-5 md:hover:ring-1 md:hover:ring-primary-300"
            ),
            onClick: () => r.push("/c/".concat(s.id)),
            children: [
              (0, i.jsxs)("div", {
                className: "absolute right-5 top-5 flex gap-3",
                children: [
                  s.brain.memecoinConfig.telegram &&
                    (0, i.jsx)("a", {
                      href: s.brain.memecoinConfig.telegram,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "flex items-center justify-center",
                      children: (0, i.jsx)(E.TelegramIcon, {
                        className: "h-3 w-3 text-secondary-200",
                      }),
                    }),
                  s.brain.memecoinConfig.twitter &&
                    (0, i.jsx)("a", {
                      href: s.brain.memecoinConfig.twitter,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "flex items-center justify-center",
                      children: (0, i.jsx)(E.XIcon, {
                        className: "h-3 w-3 text-secondary-200",
                      }),
                    }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: "flex justify-start gap-4",
                children: [
                  (0, i.jsx)("img", {
                    src: s.brain.image,
                    alt: "".concat(s.brain.memecoinConfig.name, "'s profile"),
                    className:
                      "h-16 w-16 rounded-xl object-cover sm:h-[76px] sm:w-[76px]",
                  }),
                  (0, i.jsxs)("div", {
                    className: "flex flex-col justify-between ",
                    children: [
                      (0, i.jsxs)("div", {
                        className:
                          "flex items-center gap-x-1 sm:flex-col sm:items-start sm:gap-0",
                        children: [
                          (0, i.jsx)("div", {
                            className:
                              " sm:subheading-lg-md subheading-lg-sm flex items-center text-start capitalize leading-6 -tracking-[0.4px] dark:text-white",
                            children: (0, i.jsx)("span", {
                              className:
                                "inline-block max-w-[100px] truncate sm:max-w-[150px]",
                              children: s.brain.memecoinConfig.name,
                            }),
                          }),
                          (0, i.jsx)("div", {
                            className:
                              "subheading-sm-xs flex items-center text-start dark:text-secondary-400 sm:mt-1 sm:hidden",
                            children: (0, i.jsx)("span", {
                              className: "inline-block max-w-20 truncate",
                              children: "(".concat(
                                s.brain.memecoinConfig.symbol,
                                ")"
                              ),
                            }),
                          }),
                          (0, i.jsxs)("div", {
                            className:
                              "subheading-sm-xs hidden items-center gap-x-1 text-start dark:text-secondary-400 sm:mt-1 sm:flex",
                            children: [
                              "Ticker:",
                              (0, i.jsx)("span", {
                                className:
                                  "inline-block max-w-[100px] truncate sm:max-w-[150px]",
                                children: s.brain.memecoinConfig.symbol,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, i.jsx)("div", {
                        className:
                          "body-text-sm line-clamp-1 overflow-hidden text-start leading-4 dark:text-secondary-300 sm:hidden ",
                        children: s.brain.shortBio,
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                className: "my-3 h-[1px] w-full bg-whiteAlpha-200",
              }),
              (0, i.jsx)("div", {
                className:
                  "body-text-sm mb-3 line-clamp-2 hidden h-9 text-start dark:text-secondary-300 sm:block",
                children: s.brain.shortBio,
              }),
              (0, i.jsxs)("div", {
                className: "flex w-full justify-between gap-x-4 sm:mb-3 ",
                children: [
                  (0, i.jsxs)("div", {
                    className:
                      "flex w-1/3 flex-col items-start gap-x-1 text-secondary-300 sm:w-auto",
                    children: [
                      (0, i.jsx)("div", {
                        className: "heading-sm-xsss uppercase leading-[9.6px] ",
                        children: "Trade on",
                      }),
                      (0, i.jsx)("div", {
                        className:
                          "subheading-lg-xs mt-0.5 font-normal leading-[16.8px] -tracking-[0.28px] sm:font-bold",
                        children:
                          null === (t = s.memecoinChain) || void 0 === t
                            ? void 0
                            : t.toUpperCase(),
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: "flex flex-col",
                    children: [
                      (0, i.jsx)("div", {
                        className:
                          "heading-sm-xsss uppercase leading-[9.6px] text-secondary-300 ",
                        children: "Vote",
                      }),
                      (0, i.jsxs)("div", {
                        onClick: (e) => {
                          e.stopPropagation(), j();
                        },
                        className:
                          "mt-1 flex cursor-pointer items-center rounded-full bg-whiteAlpha-100 px-2 py-[2px]",
                        children: [
                          b
                            ? (0, i.jsx)(E.UpvoteIcon, {
                                className: "h-4 w-4 text-primary-default",
                              })
                            : (0, i.jsx)(E.UpvoteOutlineIcon, {
                                className: "h-4 w-4 text-secondary-200",
                              }),
                          (0, i.jsx)("span", {
                            className:
                              "subheading-lg-xss ml-1 text-secondary-200",
                            children: f,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        P = s(45366),
        W = s(86523),
        _ = s(42650),
        M = s(93924),
        z = (e) => {
          let {
              loading: t,
              searchValue: s,
              tokensPerPage: r,
              totalItems: a,
              currentPage: n,
              characters: l,
              selectedSortBy: o,
              isOpenFilteringSection: c,
              setIsOpenFilteringSection: d,
              setCurrentPage: x,
              setSearchValue: m,
              handleSelectedSortBy: u,
            } = e,
            { isAuthenticated: p, login: f } = (0, h.a)();
          return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)("div", {
              className:
                "flex h-full w-full flex-col px-4 sm:items-center sm:px-8 lg:px-12",
              children: (0, i.jsxs)("div", {
                className: "flex w-full flex-col items-center",
                children: [
                  (0, i.jsx)("div", {
                    className:
                      "heading-lg-md sm:heading-lg-3xl relative mb-2 overflow-hidden whitespace-nowrap text-center text-transparent",
                    style: {
                      color: "transparent",
                      WebkitTextStroke: "2px transparent",
                      background: "linear-gradient(to top, #1A2127, #A2B6C5)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "#121212",
                      backgroundSize: "50% 100%",
                      backgroundPosition: "center bottom",
                    },
                    children: "AI Memecoins",
                  }),
                  (0, i.jsxs)("div", {
                    className:
                      "flex w-full flex-col bg-black pb-2 pt-[13px] sm:top-[56px] sm:pb-0",
                    children: [
                      (0, i.jsx)("div", {
                        className: "relative w-full",
                        children: (0, i.jsx)("div", {
                          className:
                            " flex h-[38px] w-full justify-between gap-x-6 md:mb-0 md:px-0",
                          children: (0, i.jsxs)("div", {
                            className:
                              "relative flex h-[38px] w-full items-center  ",
                            children: [
                              (0, i.jsx)("div", {
                                className:
                                  "absolute left-2 flex items-center justify-center md:hover:!cursor-pointer",
                                children: (0, i.jsx)(P.G, {
                                  className: "!text-secondary-200",
                                }),
                              }),
                              (0, i.jsx)("input", {
                                value: s,
                                onChange: (e) => m(e.target.value),
                                onClick: () => {
                                  p || f();
                                },
                                type: "text",
                                placeholder: "Search Here",
                                className: B()(
                                  "h-full w-full rounded-lg border border-black/[0.06] bg-white/[0.08] pl-8 font-avenir text-[14px] font-medium text-secondary-500 outline-none hover:border-black/[0.06]  hover:bg-white/[0.28] focus:border-secondary-800 focus:bg-secondary-200 active:border-secondary-800 active:bg-secondary-200",
                                  "dark:border-whiteAlpha-200 dark:bg-blackAlpha-500 dark:text-secondary-400 dark:hover:border-whiteAlpha-200 dark:hover:bg-blackAlpha-700 dark:hover:text-white dark:focus:border-whiteAlpha-200 dark:focus:bg-blackAlpha-700 dark:focus:text-white"
                                ),
                              }),
                              s &&
                                (0, i.jsx)("button", {
                                  onClick: () => m(""),
                                  className:
                                    "absolute right-4 flex items-center justify-center",
                                  children: (0, i.jsx)(W.T, {
                                    className:
                                      "flex items-center justify-center  !text-[12px] !text-secondary-200 md:hover:!cursor-pointer",
                                  }),
                                }),
                            ],
                          }),
                        }),
                      }),
                      (0, i.jsxs)("div", {
                        className:
                          "relative mt-2 flex w-full flex-wrap items-start gap-x-3 sm:flex-nowrap",
                        children: [
                          (0, i.jsx)("div", {
                            className:
                              "z-10 block rounded-b-[14px] bg-black shadow-lg backdrop-blur-2xl md:hidden",
                            children: (0, i.jsx)(M.U, {
                              in: !0,
                              animateOpacity: !0,
                              children: (0, i.jsx)("div", {
                                role: "menu",
                                "aria-orientation": "vertical",
                                "aria-labelledby": "options-menu",
                                className: "flex gap-2",
                                children: q.map((e, t) =>
                                  (0, i.jsxs)(
                                    "div",
                                    {
                                      onClick: () => {
                                        u(e.type), d(!1);
                                      },
                                      className: B()(
                                        "subheading-sm-sm  flex cursor-pointer items-center gap-x-2 rounded-full border-2 border-bordergray px-4 py-2 text-secondary-200"
                                      ),
                                      children: [
                                        (0, i.jsx)("div", {
                                          className: B()(
                                            "flex h-4 w-4 items-center justify-center rounded-full border-2 ",
                                            e.type == o
                                              ? "border-secondary-200"
                                              : " border-secondary-600"
                                          ),
                                          children:
                                            e.type == o &&
                                            (0, i.jsx)("div", {
                                              className:
                                                "h-2 w-2 rounded-full bg-secondary-200",
                                            }),
                                        }),
                                        (0, i.jsx)("p", { children: e.name }),
                                      ],
                                    },
                                    t
                                  )
                                ),
                              }),
                            }),
                          }),
                          (0, i.jsxs)("div", {
                            className: "relative hidden text-left md:block",
                            children: [
                              (0, i.jsxs)("button", {
                                className: B()(
                                  "subheading-sm-sm flex justify-center rounded-[10000px] border border-bordergray  px-4 py-1 text-secondary-200 shadow-sm focus:outline-none "
                                ),
                                onClick: () => d(!c),
                                children: [
                                  (0, i.jsxs)("p", {
                                    className:
                                      "flex w-full items-center gap-x-1",
                                    children: [
                                      (0, i.jsx)("span", {
                                        className: " text-nowrap",
                                        children: "Sort by:",
                                      }),
                                      (0, i.jsx)("span", {
                                        className: "text-nowrap capitalize",
                                        children: q.find((e) => e.type === o)
                                          .name,
                                      }),
                                    ],
                                  }),
                                  (0, i.jsx)("div", {
                                    className: "ml-2",
                                    children: (0, i.jsx)(_.A, {
                                      className: B()(
                                        "!text-sm",
                                        c && "rotate-180"
                                      ),
                                    }),
                                  }),
                                ],
                              }),
                              (0, i.jsx)("div", {
                                className: "absolute z-10 mt-2 w-full",
                                children: (0, i.jsx)(M.U, {
                                  in: c,
                                  animateOpacity: !0,
                                  children: (0, i.jsx)("div", {
                                    role: "menu",
                                    "aria-orientation": "vertical",
                                    "aria-labelledby": "options-menu",
                                    children: q.map((e, t) =>
                                      (0, i.jsxs)(
                                        "div",
                                        {
                                          onClick: () => {
                                            u(e.type), d(!1);
                                          },
                                          className: B()(
                                            "subheading-sm-sm  flex cursor-pointer items-center gap-x-2 border-2 border-bordergray bg-black px-4 py-2  text-secondary-200 shadow-xl hover:bg-secondary-500",
                                            t === q.length - 1 &&
                                              "rounded-b-[14px]",
                                            0 === t && "rounded-t-[14px]"
                                          ),
                                          children: [
                                            (0, i.jsx)("div", {
                                              className: B()(
                                                "flex h-4 w-4 items-center justify-center rounded-full border-2 ",
                                                e.type == o
                                                  ? "border-secondary-200"
                                                  : " border-secondary-600"
                                              ),
                                              children:
                                                e.type == o &&
                                                (0, i.jsx)("div", {
                                                  className:
                                                    "h-2 w-2 rounded-full bg-secondary-200",
                                                }),
                                            }),
                                            (0, i.jsx)("p", {
                                              children: e.name,
                                            }),
                                          ],
                                        },
                                        t
                                      )
                                    ),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className:
                      "mt-2 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:mt-4 xl:grid-cols-3 2xl:grid-cols-4",
                    children: t
                      ? (0, i.jsx)(i.Fragment, {
                          children: Array.from({ length: 12 }, (e, t) =>
                            (0, i.jsx)(
                              "div",
                              {
                                className: "flex w-full",
                                children: (0, i.jsx)(A, {}),
                              },
                              t
                            )
                          ),
                        })
                      : 0 === l.length
                      ? (0, i.jsx)("div", {
                          className:
                            "col-span-full flex w-full items-center justify-center",
                          children: (0, i.jsx)("p", {
                            className:
                              "text-center capitalize text-secondary-300",
                            children: "No results found .",
                          }),
                        })
                      : (0, i.jsx)(i.Fragment, {
                          children: l.map((e, t) =>
                            (0, i.jsx)(
                              "div",
                              {
                                className: "flex w-full",
                                children: (0, i.jsx)(I, { character: e }),
                              },
                              t
                            )
                          ),
                        }),
                  }),
                  a > r &&
                    (0, i.jsx)("div", {
                      className:
                        "mt-8 hidden justify-center text-secondary-200 sm:flex",
                      children: (0, i.jsx)(S.Z, {
                        totalItems: a,
                        itemsPerPage: r,
                        currentPage: n,
                        setCurrentPage: x,
                      }),
                    }),
                ],
              }),
            }),
          });
        },
        R = s(91102);
      let F = { loop: !0, dragFree: !0, containScroll: "trimSnaps" };
      var L = (e) => {
          let { characters: t, loading: s } = e;
          return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)("div", {
              className:
                " -mt-[60px] mb-[100px] flex w-full flex-col items-center",
              children: [
                (0, i.jsx)("div", {
                  className:
                    "heading-lg-xl sm:heading-lg-3xl relative overflow-hidden whitespace-nowrap bg-transparent text-center text-transparent",
                  style: {
                    color: "transparent",
                    WebkitTextStroke: "2px transparent",
                    background: "linear-gradient(to top, #1A2127, #A2B6C5)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "#121212",
                    backgroundSize: "50% 100%",
                    backgroundPosition: "center bottom",
                  },
                  children: "Featured",
                }),
                (0, i.jsx)("div", {
                  className: "no-scrollbar flex w-full overflow-x-auto",
                  children: s
                    ? (0, i.jsx)(i.Fragment, {
                        children: Array.from({ length: 6 }, (e, t) =>
                          (0, i.jsx)(
                            "div",
                            {
                              className: "mr-4 flex flex-none",
                              children: (0, i.jsx)(
                                "div",
                                {
                                  className: "flex w-[320px] sm:w-[400px]",
                                  children: (0, i.jsx)(A, {}),
                                },
                                t
                              ),
                            },
                            t
                          )
                        ),
                      })
                    : (0, i.jsx)("div", {
                        className: "flex w-full items-center ",
                        children: (0, i.jsx)("div", {
                          className: "w-full overflow-hidden py-2",
                          children: (0, i.jsx)(R.Z, {
                            ...F,
                            autoPlay: !0,
                            hiddenDots: !0,
                            showArrows: !0,
                            children: t.map((e, t) =>
                              (0, i.jsx)(
                                "div",
                                {
                                  className: "mr-4 flex flex-none",
                                  children: (0, i.jsx)("div", {
                                    className: "flex w-[320px]  sm:w-[400px]",
                                    children: (0, i.jsx)(I, { character: e }),
                                  }),
                                },
                                t
                              )
                            ),
                          }),
                        }),
                      }),
                }),
              ],
            }),
          });
        },
        V = s(24413),
        D = s(92544),
        U = s(71434),
        Z = s(7823),
        G = function (e, t, s, r) {
          return new (s || (s = Promise))(function (a, n) {
            function l(e) {
              try {
                o(r.next(e));
              } catch (e) {
                n(e);
              }
            }
            function i(e) {
              try {
                o(r.throw(e));
              } catch (e) {
                n(e);
              }
            }
            function o(e) {
              var t;
              e.done
                ? a(e.value)
                : ((t = e.value) instanceof s
                    ? t
                    : new s(function (e) {
                        e(t);
                      })
                  ).then(l, i);
            }
            o((r = r.apply(e, t || [])).next());
          });
        };
      ((r = n || (n = {})).BUMP_ORDER = "bump-order"),
        (r.NEWEST = "newest"),
        (r.MARKET_CAP = "market-cap"),
        ((a = l || (l = {})).UPVOTES = "upvotes"),
        (a.NEWEST = "newest"),
        (a.ACTIVE = "active");
      let H = [
          { name: "Bump Order", type: n.BUMP_ORDER },
          { name: "Newest", type: n.NEWEST },
          { name: "Market Cap", type: n.MARKET_CAP },
        ],
        q = [
          { name: "Activity", type: l.ACTIVE },
          { name: "Votes", type: l.UPVOTES },
          { name: "Newest", type: l.NEWEST },
        ];
      var X = () => {
        let e = (0, u.useRouter)(),
          {
            holoUser: t,
            isAuthenticated: s,
            login: r,
            isAuthReady: a,
          } = (0, h.a)(),
          { getAccessToken: n } = (0, T.sv)(),
          { setUIMode: f, setDisplayNotification: g } = (0, x.oR)((e) => e),
          { wallet: N } = (0, y.O)(),
          { setSelectedCharacter: k } = (0, D.W)((e) => e),
          S = (0, d.useRef)(null),
          A = (0, d.useRef)(),
          [E, O] = (0, d.useState)(!1),
          [B, I] = (0, d.useState)(!1),
          [P, W] = (0, d.useState)([]),
          [_, M] = (0, d.useState)([]),
          [R, F] = (0, d.useState)(!0),
          [H, q] = (0, d.useState)(!1),
          [X, K] = (0, d.useState)(!1),
          [$, Y] = (0, d.useState)(),
          [J, Q] = (0, d.useState)(!1),
          [ee, et] = (0, d.useState)(!0),
          [es, er] = (0, d.useState)(1),
          [ea, en] = (0, d.useState)(1),
          [el, ei] = (0, d.useState)(""),
          [eo, ec] = (0, d.useState)(l.ACTIVE),
          [ed, ex] = (0, d.useState)(!1);
        (0, d.useEffect)(() => {
          N && N.switchChain(w.Uz);
        }, [N]),
          (0, d.useEffect)(() => {
            let e = S.current;
            e &&
              ((e.muted = !0),
              e.play().catch((e) => {
                console.error("AutoPlay failed:", e);
              }));
          }, []),
          (0, d.useEffect)(() => {
            em();
          }, []),
          (0, d.useEffect)(() => {
            eu();
          }, [ea, el, eo]),
          (0, d.useEffect)(() => {
            if (a) {
              if (!t) {
                q(!0);
                return;
              }
              ef(null == t ? void 0 : t.id);
            }
          }, [a, t]);
        let em = () =>
            G(void 0, void 0, void 0, function* () {
              et(!0);
              let e = yield fetch("/api/launchpad/memecoins/featured", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
              });
              e.ok && M(yield e.json()), et(!1);
            }),
          eu = () =>
            G(void 0, void 0, void 0, function* () {
              F(!0);
              let e = "/api/launchpad/memecoins",
                t = new URLSearchParams();
              void 0 !== ea && t.set("page", ea.toString()),
                t.set("pageSize", "12"),
                void 0 !== el && t.set("search", el),
                void 0 !== eo && t.set("sortBy", eo);
              let s = t.toString(),
                r = yield fetch(s ? "".concat(e, "?").concat(s) : e, {
                  method: "GET",
                  headers: { "Content-Type": "application/json" },
                });
              if (r.ok) {
                let { memecoins: e, total: t, nextPage: s } = yield r.json();
                W(e), er(t);
              }
              F(!1);
            }),
          eh = () =>
            G(void 0, void 0, void 0, function* () {
              if (!s) return r();
              if (H && $) {
                O(!0);
                return;
              }
              Q(!0);
            }),
          ep = () => !!a && (!!s || (r(), !1)),
          ef = (e) =>
            G(void 0, void 0, void 0, function* () {
              let {
                character: t,
                isValid: s,
                errorMessage: r,
              } = yield (0, v.KA)(e);
              if (!s) {
                eg(r);
                return;
              }
              Y(t), q(!0);
            }),
          eg = (e) => {
            g(!0, m.CC.ERROR, "Error", e, m.d.BOTTOM);
          };
        return (0, i.jsxs)("div", {
          className: "h-screen w-full",
          children: [
            (0, i.jsx)(o.Z, {}),
            (0, i.jsx)(c.Z, {}),
            (0, i.jsxs)("div", {
              className:
                "no-scrollbar relative h-full overflow-scroll lg:pl-14",
              children: [
                (0, i.jsx)(V.Z, {
                  show: J,
                  onClose: () => Q(!1),
                  onSelectMemecoin: (s) =>
                    G(void 0, void 0, void 0, function* () {
                      if (!s || !ep() || X) return;
                      yield n(), K(!0);
                      let {
                        character: r,
                        isValid: a,
                        errorMessage: l,
                        errorCode: i,
                      } = yield (0, v.F)(t.id, m.Oo.MEMECOIN, s);
                      if (!a) {
                        g(!0, m.CC.ERROR, "Error", l, m.d.BOTTOM), K(!1);
                        return;
                      }
                      k(r), e.push("/create/".concat(r.id));
                    }),
                }),
                (0, i.jsx)(U.Z, {
                  show: E,
                  secondaryButtonOnClick: () => O(!1),
                  primaryButtonOnClick: () =>
                    G(void 0, void 0, void 0, function* () {
                      if (B) return;
                      if (!$) {
                        eg(
                          "Could not find the in progress character. Please try refresh the page."
                        );
                        return;
                      }
                      I(!0);
                      let e = yield fetch(
                        "/api/users/"
                          .concat(t.id, "/characters/")
                          .concat($.id, "/wip"),
                        {
                          method: "DELETE",
                          headers: { "Content-Type": "application/json" },
                        }
                      );
                      if (!e.ok) {
                        let t = yield e.json();
                        eg(
                          "Could not delete the in progress character: ".concat(
                            t.errorMessage
                          )
                        );
                        return;
                      }
                      ef(t.id), k(null), I(!1), O(!1);
                    }),
                  onClose: () => O(!1),
                  loading: B,
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
                (0, i.jsxs)("div", {
                  className:
                    "relative flex w-full justify-center overflow-hidden",
                  children: [
                    (0, i.jsx)("video", {
                      ref: S,
                      src: "/img/bg.mp4",
                      className: "h-[752px] w-full object-cover opacity-65",
                      autoPlay: !0,
                      muted: !0,
                      loop: !0,
                      playsInline: !0,
                    }),
                    (0, i.jsxs)("div", {
                      className:
                        "absolute left-1/2 top-52 flex -translate-x-1/2 flex-col items-center justify-center",
                      children: [
                        (0, i.jsx)("div", {
                          className:
                            "sm:heading-lg-3xl heading-lg-xl mb-2 text-center text-white",
                          children: "Agent Market",
                        }),
                        (0, i.jsxs)("div", {
                          className:
                            "sm:subheading-sm-sm subheading-sm-xs mb-8 text-center text-secondary-200",
                          children: [
                            "Create AI agents for your token communities",
                            (0, i.jsx)("br", {}),
                            " Vote for the first agents to deploy on X.",
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          className: "flex flex-col gap-4 sm:flex-row",
                          children: [
                            (0, i.jsxs)("button", {
                              className:
                                "subheading-lg-md flex h-14 w-[318px] items-center justify-center space-x-2 rounded-full bg-primary-default leading-[24px] -tracking-[0.4px] text-secondary-800 hover:bg-primary-200 sm:w-[200px]",
                              onClick: () => {
                                window.location.href = "https://id0.smileai.pro"; // 替换为你想跳转的链接
                              },
                              children: [
                                (0, i.jsx)("span", {
                                  children: "Join IDO",
                                }),
                                X && (0, i.jsx)(Z.Z, { className: "h-4 w-4" }),
                              ],
                            }),
                            (0, i.jsx)("button", {
                              className:
                                "subheading-lg-md flex h-14 w-[318px] items-center justify-center rounded-full bg-secondary-100  leading-[24px] -tracking-[0.4px] text-secondary-800 hover:bg-secondary-50 sm:w-[200px]",
                              onClick: () => {
                                var e;
                                A.current &&
                                  (null === (e = A.current) ||
                                    void 0 === e ||
                                    e.scrollIntoView({ behavior: "smooth" }));
                              },
                              children: "How it Works",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsx)("div", {
                      className:
                        "absolute bottom-0 left-0 -mt-[100px] h-[100px] w-full bg-gradient-to-b from-transparent to-black",
                    }),
                  ],
                }),
                _.length > 0 && (0, i.jsx)(L, { characters: _, loading: ee }),
                (0, i.jsx)("div", {
                  className: "",
                  children: (0, i.jsx)(z, {
                    isOpenFilteringSection: ed,
                    setIsOpenFilteringSection: ex,
                    selectedSortBy: eo,
                    handleSelectedSortBy: ec,
                    loading: R,
                    totalItems: es,
                    searchValue: el,
                    setSearchValue: ei,
                    tokensPerPage: 12,
                    currentPage: ea,
                    setCurrentPage: en,
                    characters: P,
                  }),
                }),
                (0, i.jsx)("div", { ref: A, children: (0, i.jsx)(p, {}) }),
                (0, i.jsx)(C, {}),
                (0, i.jsx)(b, { onLaunchShares: eh }),
                (0, i.jsx)(j, {}),
              ],
            }),
          ],
        });
      };
    },
    46941: function (e, t, s) {
      "use strict";
      s.d(t, {
        w: function () {
          return r;
        },
      });
      let r = (0, s(24278).I)({
        d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z",
        displayName: "ChevronLeftIcon",
      });
    },
    85105: function (e, t, s) {
      "use strict";
      s.d(t, {
        X: function () {
          return r;
        },
      });
      let r = (0, s(24278).I)({
        d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z",
        displayName: "ChevronRightIcon",
      });
    },
    45366: function (e, t, s) {
      "use strict";
      s.d(t, {
        G: function () {
          return r;
        },
      });
      let r = (0, s(24278).I)({
        d: "M23.414,20.591l-4.645-4.645a10.256,10.256,0,1,0-2.828,2.829l4.645,4.644a2.025,2.025,0,0,0,2.828,0A2,2,0,0,0,23.414,20.591ZM10.25,3.005A7.25,7.25,0,1,1,3,10.255,7.258,7.258,0,0,1,10.25,3.005Z",
        displayName: "Search2Icon",
      });
    },
    38491: function (e, t, s) {
      "use strict";
      s.d(t, {
        z: function () {
          return b;
        },
      });
      var r = s(85893),
        a = s(29062),
        n = s(65544),
        l = s(20397),
        i = s(34926),
        o = s(67294);
      let [c, d] = (0, s(52110).k)({ strict: !1, name: "ButtonGroupContext" });
      var x = s(53882);
      function m(e) {
        let { children: t, className: s, ...a } = e,
          n = (0, o.isValidElement)(t)
            ? (0, o.cloneElement)(t, { "aria-hidden": !0, focusable: !1 })
            : t,
          l = (0, i.cx)("chakra-button__icon", s);
        return (0, r.jsx)(x.m.span, {
          display: "inline-flex",
          alignSelf: "center",
          flexShrink: 0,
          ...a,
          className: l,
          children: n,
        });
      }
      m.displayName = "ButtonIcon";
      var u = s(83695),
        h = s(48899);
      function p(e) {
        let {
            label: t,
            placement: s,
            spacing: a = "0.5rem",
            children: n = (0, r.jsx)(h.$, {
              color: "currentColor",
              width: "1em",
              height: "1em",
            }),
            className: l,
            __css: c,
            ...d
          } = e,
          m = (0, i.cx)("chakra-button__spinner", l),
          p = "start" === s ? "marginEnd" : "marginStart",
          f = (0, o.useMemo)(
            () =>
              (0, u.k0)({
                display: "flex",
                alignItems: "center",
                position: t ? "relative" : "absolute",
                [p]: t ? a : 0,
                fontSize: "1em",
                lineHeight: "normal",
                ...c,
              }),
            [c, t, p, a]
          );
        return (0, r.jsx)(x.m.div, {
          className: m,
          ...d,
          __css: f,
          children: n,
        });
      }
      p.displayName = "ButtonSpinner";
      var f = s(49381),
        g = s(64317);
      let b = (0, f.G)((e, t) => {
        let s = d(),
          c = (0, g.m)("Button", { ...s, ...e }),
          {
            isDisabled: m = s?.isDisabled,
            isLoading: u,
            isActive: h,
            children: f,
            leftIcon: b,
            rightIcon: v,
            loadingText: y,
            iconSpacing: w = "0.5rem",
            type: N,
            spinner: k,
            spinnerPlacement: C = "start",
            className: S,
            as: A,
            shouldWrapChildren: E,
            ...T
          } = (0, n.L)(e),
          O = (0, o.useMemo)(() => {
            let e = { ...c?._focus, zIndex: 1 };
            return {
              display: "inline-flex",
              appearance: "none",
              alignItems: "center",
              justifyContent: "center",
              userSelect: "none",
              position: "relative",
              whiteSpace: "nowrap",
              verticalAlign: "middle",
              outline: "none",
              ...c,
              ...(!!s && { _focus: e }),
            };
          }, [c, s]),
          { ref: B, type: I } = (function (e) {
            let [t, s] = (0, o.useState)(!e);
            return {
              ref: (0, o.useCallback)((e) => {
                e && s("BUTTON" === e.tagName);
              }, []),
              type: t ? "button" : void 0,
            };
          })(A),
          P = {
            rightIcon: v,
            leftIcon: b,
            iconSpacing: w,
            children: f,
            shouldWrapChildren: E,
          };
        return (0, r.jsxs)(x.m.button, {
          disabled: m || u,
          ref: (0, a.qq)(t, B),
          as: A,
          type: N ?? I,
          "data-active": (0, l.P)(h),
          "data-loading": (0, l.P)(u),
          __css: O,
          className: (0, i.cx)("chakra-button", S),
          ...T,
          children: [
            u &&
              "start" === C &&
              (0, r.jsx)(p, {
                className: "chakra-button__spinner--start",
                label: y,
                placement: "start",
                spacing: w,
                children: k,
              }),
            u
              ? y ||
                (0, r.jsx)(x.m.span, {
                  opacity: 0,
                  children: (0, r.jsx)(j, { ...P }),
                })
              : (0, r.jsx)(j, { ...P }),
            u &&
              "end" === C &&
              (0, r.jsx)(p, {
                className: "chakra-button__spinner--end",
                label: y,
                placement: "end",
                spacing: w,
                children: k,
              }),
          ],
        });
      });
      function j(e) {
        let {
          leftIcon: t,
          rightIcon: s,
          children: a,
          iconSpacing: n,
          shouldWrapChildren: l,
        } = e;
        return l
          ? (0, r.jsxs)("span", {
              style: { display: "contents" },
              children: [
                t && (0, r.jsx)(m, { marginEnd: n, children: t }),
                a,
                s && (0, r.jsx)(m, { marginStart: n, children: s }),
              ],
            })
          : (0, r.jsxs)(r.Fragment, {
              children: [
                t && (0, r.jsx)(m, { marginEnd: n, children: t }),
                a,
                s && (0, r.jsx)(m, { marginStart: n, children: s }),
              ],
            });
      }
      b.displayName = "Button";
    },
    12519: function (e, t, s) {
      "use strict";
      s.d(t, {
        h: function () {
          return l;
        },
      });
      var r = s(85893),
        a = s(67294),
        n = s(38491);
      let l = (0, s(49381).G)((e, t) => {
        let { icon: s, children: l, isRound: i, "aria-label": o, ...c } = e,
          d = s || l,
          x = (0, a.isValidElement)(d)
            ? (0, a.cloneElement)(d, { "aria-hidden": !0, focusable: !1 })
            : null;
        return (0, r.jsx)(n.z, {
          px: "0",
          py: "0",
          borderRadius: i ? "full" : void 0,
          ref: t,
          "aria-label": o,
          ...c,
          children: x,
        });
      });
      l.displayName = "IconButton";
    },
    48899: function (e, t, s) {
      "use strict";
      s.d(t, {
        $: function () {
          return x;
        },
      });
      var r = s(85893),
        a = s(65544),
        n = s(34926),
        l = s(70917),
        i = s(49381),
        o = s(64317),
        c = s(53882);
      let d = (0, l.F4)({
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        }),
        x = (0, i.G)((e, t) => {
          let s = (0, o.m)("Spinner", e),
            {
              label: l = "Loading...",
              thickness: i = "2px",
              speed: x = "0.45s",
              emptyColor: m = "transparent",
              className: u,
              ...h
            } = (0, a.L)(e),
            p = (0, n.cx)("chakra-spinner", u),
            f = {
              display: "inline-block",
              borderColor: "currentColor",
              borderStyle: "solid",
              borderRadius: "99999px",
              borderWidth: i,
              borderBottomColor: m,
              borderLeftColor: m,
              animation: `${d} ${x} linear infinite`,
              ...s,
            };
          return (0, r.jsx)(c.m.div, {
            ref: t,
            __css: f,
            className: p,
            ...h,
            children: l && (0, r.jsx)(c.m.span, { srOnly: !0, children: l }),
          });
        });
      x.displayName = "Spinner";
    },
  },
  function (e) {
    e.O(
      0,
      [9866, 6047, 3464, 9626, 9746, 4175, 8427, 209, 4413, 2888, 9774, 179],
      function () {
        return e((e.s = 68786));
      }
    ),
      (_N_E = e.O());
  },
]);
