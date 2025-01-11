(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5405],
  {
    48312: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return s(63789);
        },
      ]);
    },
    89684: function (e, t, s) {
      "use strict";
      s.d(t, {
        O: function () {
          return r;
        },
      });
      var a = s(67294);
      function r(e) {
        let [t, s] = (0, a.useState)(!1);
        return (
          (0, a.useEffect)(() => {
            let t = new IntersectionObserver(
              (e) => {
                let [t] = e;
                return s(t.isIntersecting);
              },
              { root: null, rootMargin: "0px", threshold: 0.1 }
            );
            return (
              e.current && t.observe(e.current),
              () => {
                t.disconnect();
              }
            );
          }, [e]),
          t
        );
      }
    },
    63789: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          __N_SSG: function () {
            return Q;
          },
          default: function () {
            return $;
          },
        });
      var a = s(85893),
        r = s(67294),
        l = s(48427),
        n = s(60209),
        i = s(21003),
        d = s(38491),
        c = s(46941),
        o = s(85105),
        x = s(45366),
        m = s(86523),
        u = s(42650),
        h = s(91516),
        p = (e) => {
          let { text: t, onClose: s } = e;
          return (0, a.jsxs)("button", {
            className:
              "flex items-center justify-between gap-x-1 rounded-[100px] bg-black/[0.06] px-3 py-1 text-center hover:bg-black/[0.1] dark:bg-blackAlpha-500",
            children: [
              (0, a.jsx)("span", {
                className:
                  "text-center font-avenir text-[14px] font-semibold tracking-[0.28px] text-secondary-800 dark:text-secondary-200",
                children: t,
              }),
              (0, a.jsx)("div", {
                className:
                  "flex h-4 w-4 items-center justify-center text-center",
                onClick: s,
                children: (0, a.jsx)(m.T, { color: "white", fontSize: "8px" }),
              }),
            ],
          });
        },
        f = s(11163),
        v = s(25675),
        b = s.n(v),
        y = s(8559),
        g = s(916),
        j = (e) => {
          let {
              AvailableSortBy: t,
              AvailableCategories: s,
              selectedExploreMode: r,
              selectedSortBy: l,
              selectedCategory: n,
              setSelectedSortBy: i,
              setSelectedCategory: d,
              showFilterDrawer: c,
              setShowFilterDrawer: o,
            } = e,
            x = (e) => {
              i(e);
            },
            m = (e) => {
              if ((null == n ? void 0 : n.type) === e.type) {
                d(null);
                return;
              }
              d(e);
            };
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsxs)(g.Z, {
              isOpen: c,
              onClose: () => o(!1),
              overlayClose: !1,
              showComeDownIcon: !1,
              closeButton: !0,
              contentStyle:
                "animate-fade-in-bottom !bg-blackAlpha-300 bg-white/[0.08] backdrop-blur-[100px] !pl-4 !pt-4 w-full !h-[80vh]",
              children: [
                (0, a.jsxs)("div", {
                  className: "mt-3 w-full",
                  children: [
                    (0, a.jsx)("span", {
                      className: "heading-sm-xsss uppercase text-secondary-200",
                      children: "Sort by",
                    }),
                    (0, a.jsx)("div", {
                      className: "mt-[10px] flex flex-wrap gap-3",
                      children: t
                        .filter((e) => e.availableIn === r.type)
                        .map((e) =>
                          (0, a.jsx)(
                            "button",
                            {
                              onClick: () => x(e),
                              className: "".concat(
                                e.type === l.type
                                  ? "bg-whiteAlpha-300 text-secondary-200"
                                  : "bg-blackAlpha-300 text-secondary-200",
                                " subheading-sm-xss rounded-[1000px] border border-[#44525C] px-4 py-2 capitalize "
                              ),
                              children: e.name,
                            },
                            e.type
                          )
                        ),
                    }),
                    (0, a.jsx)("div", {
                      className: "mt-5 h-[1px] w-full bg-black/[0.08]",
                    }),
                  ],
                }),
                Object.values(y.GH).map((e) =>
                  e === y.GH.Internal
                    ? null
                    : (0, a.jsxs)(
                        "div",
                        {
                          className: "mt-5 w-full",
                          children: [
                            (0, a.jsx)("span", {
                              className:
                                "heading-sm-xsss uppercase text-secondary-200",
                              children: e,
                            }),
                            (0, a.jsx)("div", {
                              className: "mt-3 flex flex-wrap gap-3",
                              children: Object.values(y._P).map((t) =>
                                y.R_[t] !== e
                                  ? null
                                  : (0, a.jsxs)(
                                      "button",
                                      {
                                        onClick: () => {
                                          m(s.find((e) => e.type === t));
                                        },
                                        className: "".concat(
                                          (null == n ? void 0 : n.type) === t
                                            ? "bg-secondary- text-secondary-200 "
                                            : "bg-blackAlpha-300 text-secondary-200",
                                          " just-between subheading-sm-xss flex items-center rounded-[1000px] border border-[#44525C] px-[16px] py-[8px] uppercase "
                                        ),
                                        children: [
                                          (0, a.jsx)("span", {
                                            className: "my-[-5px] text-lg",
                                            children: y.cS[t],
                                          }),
                                          (0, a.jsx)("span", {
                                            className:
                                              "ml-[8px] text-center capitalize",
                                            children: t,
                                          }),
                                        ],
                                      },
                                      t
                                    )
                              ),
                            }),
                            (0, a.jsx)("div", {
                              className: "mt-5 h-[1px] w-full bg-black/[0.08]",
                            }),
                          ],
                        },
                        e
                      )
                ),
                (0, a.jsx)("div", {
                  className: "my-5 flex justify-center pt-[8px]",
                  children: (0, a.jsx)("button", {
                    onClick: () => {
                      d(null),
                        r.type === y.Ru.MY_CREATIONS ? i(l) : i(t[0]),
                        o(!1);
                    },
                    className:
                      "flex w-[150px] flex-col items-center justify-center px-[18px] py-[12px] text-center",
                    children: (0, a.jsx)("span", {
                      className:
                        "heading-sm-xs border-[1.5px] border-transparent border-b-secondary-200 pb-[4px] uppercase text-secondary-200",
                      children: "Clear all",
                    }),
                  }),
                }),
              ],
            }),
          });
        },
        w = s(7823),
        N = s(89684);
      function k(e) {
        let { pageToFetch: t, fetchMoreCharacters: s } = e,
          [l, n] = (0, r.useState)({ characters: [], nextPage: t }),
          i = (0, r.useRef)(null),
          d = (0, N.O)(i),
          [c, o] = (0, r.useState)(!1),
          x = () => {
            var e, t, a, r;
            return (
              (e = this),
              (t = void 0),
              (a = void 0),
              (r = function* () {
                c ||
                  (o(!0),
                  n({ characters: [], nextPage: yield s(l.nextPage) }),
                  o(!1));
              }),
              new (a || (a = Promise))(function (s, l) {
                function n(e) {
                  try {
                    d(r.next(e));
                  } catch (e) {
                    l(e);
                  }
                }
                function i(e) {
                  try {
                    d(r.throw(e));
                  } catch (e) {
                    l(e);
                  }
                }
                function d(e) {
                  var t;
                  e.done
                    ? s(e.value)
                    : ((t = e.value) instanceof a
                        ? t
                        : new a(function (e) {
                            e(t);
                          })
                      ).then(n, i);
                }
                d((r = r.apply(e, t || [])).next());
              })
            );
          };
        return (
          (0, r.useEffect)(() => {
            d && x();
          }, [d]),
          (0, a.jsx)(a.Fragment, {
            children:
              void 0 !== l.nextPage &&
              (0, a.jsx)("div", {
                ref: i,
                className: "absolute bottom-0 flex w-full items-end",
                children: (0, a.jsx)("div", {
                  className: "relative flex h-full w-full items-end",
                  children: (0, a.jsx)("div", {
                    className: "mb-44 w-full md:mb-16",
                    children: (0, a.jsx)("div", {
                      className: "flex h-full w-full justify-center",
                      children: (0, a.jsx)(w.Z, {
                        className: "h-5 w-5 dark:text-secondary-200",
                      }),
                    }),
                  }),
                }),
              }),
          })
        );
      }
      var C = s(27076),
        S = s(93967),
        E = s.n(S),
        I = s(42056),
        A = s(36641),
        R = (e) => {
          let { character: t } = e;
          return (0, a.jsx)(a.Fragment, {
            children:
              (0, A.nE)(t) || (0, A.BZ)(t)
                ? (0, a.jsxs)("div", {
                    className: "group/checkmark flex flex-shrink-0",
                    children: [
                      (0, a.jsx)("img", {
                        src: "/icons/twitter-checkmark-claimed.svg",
                        alt: "twitter-checkmars",
                        className: "h-5 w-5",
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "pointer-events-none absolute bottom-[90px] left-0 z-50 hidden w-full rounded-[4px] bg-black/80 p-3 font-avenir text-sm text-white opacity-0 backdrop-blur-[10px] transition duration-300 group-hover/checkmark:opacity-100 md:block",
                        children:
                          "The verified holder of this Twitter account has claimed this official AI",
                      }),
                    ],
                  })
                : (0, A.Mh)(t) &&
                  (0, a.jsxs)("div", {
                    className: "group/checkmark flex flex-shrink-0",
                    children: [
                      (0, a.jsx)("img", {
                        src: "/icons/twitter-checkmark-unclaimed.svg",
                        alt: "twitter-checkmars",
                        className: "h-5 w-5",
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "pointer-events-none absolute bottom-[90px] left-0 z-50 hidden w-full rounded-[4px] bg-black/80 p-3 font-avenir text-sm text-white opacity-0 backdrop-blur-[10px] transition duration-300 group-hover/checkmark:opacity-100 md:block",
                        children:
                          "This is the official AI for this Twitter account",
                      }),
                    ],
                  }),
          });
        },
        T = s(61235),
        M = s(34011),
        O = (e) => {
          var t, s, l, n, i, d;
          let { character: c, onSelect: o, isBlurred: x } = e,
            m = (0, M.Z)(),
            [u, h] = (0, r.useState)(!1),
            p = (0, A.vf)(c)
              ? c.body.image
              : null === (t = c.brain) || void 0 === t
              ? void 0
              : t.image,
            f = x ? { WebkitFilter: "blur(8px)", filter: "blur(8px)" } : {};
          return (0, a.jsxs)("div", {
            onMouseEnter: () => {
              m || h(!0);
            },
            onMouseLeave: () => {
              m || h(!1);
            },
            onClick: () => o(c),
            className: E()(
              "relative z-0 flex aspect-square h-[120px] w-full cursor-pointer items-center gap-2 overflow-hidden rounded-[20px] bg-black px-3 pb-3 pt-2 backdrop-blur-[30px] md:aspect-auto md:h-[370px] md:flex-col md:items-start md:hover:shadow-[8px_8px_12px_0px_rgba(19,66,81,0.20)]",
              "border-2 border-transparent md:hover:border-primary-300"
            ),
            children: [
              (0, a.jsx)("div", {
                className:
                  "absolute left-0 top-0 hidden h-full w-full overflow-hidden rounded-[20px] md:block",
                style: Object.assign(
                  {
                    backgroundImage: m
                      ? "none"
                      : "linear-gradient(to top, transparent 85%, #202428), linear-gradient(to bottom, transparent 30%, #202428), url(".concat(
                          p,
                          ")"
                        ),
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transform: u ? "scale(1.25)" : "scale(1.02)",
                    transition: "transform 0.3s ease-in-out",
                  },
                  f
                ),
              }),
              (0, a.jsx)("img", {
                src: p,
                alt: "character",
                className:
                  "h-[76px] min-w-[76px] rounded-[20px] object-cover md:hidden",
                style: f,
              }),
              (0, a.jsx)("div", {
                className:
                  "relative overflow-hidden rounded-md md:aspect-square md:w-full",
                children: (0, a.jsx)("div", {
                  className: "absolute right-0 top-0 w-full",
                  children: (0, a.jsx)(T.Z, {
                    tags: c.tags,
                    tooltipsPosition: "top",
                  }),
                }),
              }),
              (0, a.jsxs)("div", {
                className:
                  "relative flex h-full w-full flex-col items-start justify-center sm:justify-end md:mt-2 md:h-[400px] md:w-full md:flex-1",
                children: [
                  (0, a.jsxs)("div", {
                    className: "flex w-full items-center justify-between",
                    children: [],
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "mt-2 flex max-w-[100%] items-center space-x-1 md:justify-start",
                    children: [
                      (0, a.jsx)("h4", {
                        className:
                          "subheading-lg-md truncate text-start capitalize leading-6 text-gray-800 dark:text-white",
                        children: (0, A.uy)(c) ? c.body.name : c.name,
                      }),
                      (0, a.jsx)(R, { character: c }),
                    ],
                  }),
                  (null === (i = c.brain) || void 0 === i ? void 0 : i.shortBio)
                    ? (0, a.jsx)("p", {
                        className:
                          "body-text-sm mt-1 line-clamp-2 h-10 max-h-8 w-full truncate whitespace-normal text-left leading-[15.6px] text-secondary-default dark:text-secondary-300",
                        children:
                          null === (d = c.brain) || void 0 === d
                            ? void 0
                            : d.shortBio,
                      })
                    : (0, a.jsx)("div", { className: "h-10" }),
                ],
              }),
            ],
          });
        },
        P = (e) => {
          let { count: t } = e;
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)("div", {
              className:
                "mt-5 grid w-full gap-4 gap-x-2 gap-y-4 overflow-y-auto px-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7",
              children: Array.from({ length: t }, (e, t) => t + 1).map((e) =>
                (0, a.jsx)(
                  "div",
                  {
                    className:
                      "h-[120px] w-full animate-pulse rounded-[10px] bg-gray-100/50 md:h-[320px]",
                  },
                  e
                )
              ),
            }),
          });
        },
        _ = s(92544),
        D = s(58484),
        z = s(43564),
        Z = s(21083),
        F = function (e, t, s, a) {
          return new (s || (s = Promise))(function (r, l) {
            function n(e) {
              try {
                d(a.next(e));
              } catch (e) {
                l(e);
              }
            }
            function i(e) {
              try {
                d(a.throw(e));
              } catch (e) {
                l(e);
              }
            }
            function d(e) {
              var t;
              e.done
                ? r(e.value)
                : ((t = e.value) instanceof s
                    ? t
                    : new s(function (e) {
                        e(t);
                      })
                  ).then(n, i);
            }
            d((a = a.apply(e, t || [])).next());
          });
        },
        B = (e) => {
          var t, s;
          let {
              isOpen: l,
              onClose: n,
              user: i,
              character: d,
              highestFeaturedParam: c,
              setHighestFeaturedParam: o,
            } = e,
            { deleteUserCreatedCharacter: x } = (0, _.W)((e) => e),
            [m, u] = (0, r.useState)("settings"),
            [h, p] = (0, r.useState)(1),
            [f, v] = (0, r.useState)(
              null !==
                (s =
                  null === (t = null == d ? void 0 : d.brain) || void 0 === t
                    ? void 0
                    : t.llmModel) && void 0 !== s
                ? s
                : Z.J3.GPT_4_o_mini
            ),
            [b, g] = (0, r.useState)(""),
            [j, N] = (0, r.useState)(d),
            [k, C] = (0, r.useState)(null),
            [S, E] = (0, r.useState)(null),
            [I, A] = (0, r.useState)(d.visibility),
            [R, T] = (0, r.useState)(!1),
            [M, O] = (0, r.useState)(!1),
            [P, B] = (0, r.useState)(!1),
            [L, G] = (0, r.useState)(!1),
            [W, V] = (0, r.useState)(!1),
            [J, U] = (0, r.useState)(!1),
            [Y, H] = (0, r.useState)(!1),
            [X, q] = (0, r.useState)(null);
          (0, r.useEffect)(() => {
            var e, t;
            N(d),
              C(null),
              E(null),
              A(d.visibility),
              v(
                null !==
                  (t =
                    null === (e = d.brain) || void 0 === e
                      ? void 0
                      : e.llmModel) && void 0 !== t
                  ? t
                  : Z.J3.GPT_3_5_TURBO
              );
          }, [d]),
            (0, r.useEffect)(() => {
              l && K();
            }, [l]);
          let K = () =>
              F(void 0, void 0, void 0, function* () {
                let e = yield fetch(
                  "/api/ai/fine-tune/jobs/".concat(d.id, "/", 3),
                  {
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                  }
                );
                e.ok && q((yield e.json()).data);
              }),
            Q = (e) =>
              F(void 0, void 0, void 0, function* () {
                if (!R) {
                  T(!0);
                  try {
                    if (e < 0) {
                      T(!1);
                      return;
                    }
                    let t = yield fetch(
                      "/api/admin/characters/".concat(d.id, "/featured"),
                      {
                        method: "PUT",
                        body: JSON.stringify({ featured: e }),
                        headers: { "Content-Type": "application/json" },
                      }
                    );
                    if (!t.ok) {
                      T(!1), alert("Error setting as featured");
                      return;
                    }
                    let s = yield t.json();
                    if ("success" === s.status) {
                      T(!1),
                        alert(
                          "Successfully set as featured. Refresh the page to see changes."
                        ),
                        n();
                      return;
                    }
                    alert("Error setting as featured");
                  } catch (e) {
                    console.error(e), alert("Error setting as featured");
                  }
                  T(!1);
                }
              }),
            $ = (e) =>
              F(void 0, void 0, void 0, function* () {
                H(!0);
                try {
                  let t = yield fetch(
                    "/api/admin/brains/".concat(d.brain.id, "/llm"),
                    {
                      method: "POST",
                      body: JSON.stringify({ llm: e }),
                      headers: { "Content-Type": "application/json" },
                    }
                  );
                  if (!t.ok) {
                    alert("Error setting as LLM model"), H(!1);
                    return;
                  }
                  let s = yield t.json();
                  if ("success" === s.status) {
                    alert(
                      "Successfully set as LLM model. Refresh the page to see changes."
                    ),
                      H(!1);
                    return;
                  }
                  alert("Error setting as LLM model"), H(!1);
                } catch (e) {
                  console.error(e), alert("Error setting as LLM model"), H(!1);
                }
              }),
            ee = (e) =>
              F(void 0, void 0, void 0, function* () {
                if (M) return !1;
                O(!0);
                try {
                  let t = yield fetch(
                    "/api/admin/characters/".concat(d.id, "/permissions"),
                    {
                      method: "POST",
                      body: JSON.stringify({ userAdminId: i.id, userId: e }),
                      headers: { "Content-Type": "application/json" },
                    }
                  );
                  if (!t.ok) {
                    O(!1), alert("Error setting admin permission");
                    return;
                  }
                  let s = yield t.json();
                  if ("success" === s.status) {
                    O(!1),
                      alert(
                        "Successfully set admin permission to ".concat(e, ".")
                      ),
                      n();
                    return;
                  }
                  alert("Error setting admin permission");
                } catch (e) {
                  console.error(e), alert("Error setting admin permission");
                }
                O(!1);
              }),
            et = (e) =>
              F(void 0, void 0, void 0, function* () {
                if (!L) {
                  G(!0);
                  try {
                    let t = yield fetch(
                      "/api/admin/characters/".concat(d.id, "/visibility"),
                      {
                        method: "POST",
                        body: JSON.stringify({ visibility: e }),
                        headers: { "Content-Type": "application/json" },
                      }
                    );
                    if (!t.ok) {
                      alert("Error setting visibility"), G(!1);
                      return;
                    }
                    if ((yield t.json()).visibility === e) {
                      alert(
                        "Successfully set visibility to ".concat(
                          e,
                          ". Refresh the page to see changes"
                        )
                      ),
                        G(!1),
                        n();
                      return;
                    }
                    alert("Error setting visibility");
                  } catch (e) {
                    console.error(e), alert("Error setting visibility");
                  }
                  G(!1);
                }
              }),
            es = (e) =>
              F(void 0, void 0, void 0, function* () {
                if (!P) {
                  if ((B(!0), !e)) {
                    B(!1);
                    return;
                  }
                  try {
                    let t = yield fetch(
                      "/api/admin/characters/".concat(d.id, "/tags"),
                      {
                        method: "POST",
                        body: JSON.stringify({ tagName: e }),
                        headers: { "Content-Type": "application/json" },
                      }
                    );
                    if (!t.ok) {
                      alert("Error adding tag"), B(!1);
                      return;
                    }
                    let s = yield t.json();
                    if (s.tags) {
                      N(Object.assign(Object.assign({}, j), { tags: s.tags })),
                        alert("Successfully added tag ".concat(e, ".")),
                        B(!1);
                      return;
                    }
                    alert("Error adding tag");
                  } catch (e) {
                    console.error(e), alert("Error adding tag");
                  }
                  B(!1);
                }
              }),
            ea = (e) =>
              F(void 0, void 0, void 0, function* () {
                if (!P) {
                  B(!0);
                  try {
                    let t = yield fetch(
                      "/api/admin/characters/".concat(d.id, "/tags"),
                      {
                        method: "DELETE",
                        body: JSON.stringify({ tagName: e }),
                        headers: { "Content-Type": "application/json" },
                      }
                    );
                    if (!t.ok) {
                      B(!1), alert("Error deleting tag");
                      return;
                    }
                    let s = yield t.json();
                    if (s.tags) {
                      B(!1),
                        N(
                          Object.assign(Object.assign({}, j), { tags: s.tags })
                        ),
                        alert("Successfully removed tag ".concat(e, "."));
                      return;
                    }
                    alert("Error deleting tag");
                  } catch (e) {
                    console.error(e), alert("Error deleting tag");
                  }
                  B(!1);
                }
              }),
            er =
              null == j
                ? void 0
                : j.tags.map((e) =>
                    (0, a.jsxs)(
                      "div",
                      {
                        className:
                          "relative mr-1 mt-1 rounded-full border border-secondary-default py-1 pl-3 pr-6 font-avenir",
                        children: [
                          e,
                          (0, a.jsxs)("button", {
                            className:
                              "absolute right-0 top-[2px] flex h-6 w-6 items-center justify-center rounded-full hover:text-primary-default",
                            onClick: () => ea(e),
                            children: [
                              "x",
                              P &&
                                (0, a.jsx)(w.Z, {
                                  className: "ml-2 h-2 w-2 text-secondary-800",
                                }),
                            ],
                          }),
                        ],
                      },
                      e
                    )
                  ),
            el = () => {
              ee(b), g("");
            },
            en = () =>
              F(void 0, void 0, void 0, function* () {
                if (!J) {
                  U(!0);
                  try {
                    let e = yield fetch("/api/admin/characters/".concat(d.id), {
                      method: "DELETE",
                      headers: { "Content-Type": "application/json" },
                    });
                    if (!e.ok) {
                      alert("Error deleting character"), U(!1);
                      return;
                    }
                    let t = yield e.json();
                    if ("success" === t.status) {
                      alert(
                        "Successfully deleted the character. Refresh the page to see changes"
                      ),
                        x(d.id),
                        U(!1),
                        n();
                      return;
                    }
                    alert("Error deleting character");
                  } catch (e) {
                    console.error(e), alert("Error deleting character");
                  }
                  U(!1);
                }
              });
          return (null == i ? void 0 : i.role) !== y.i4.ADMIN
            ? null
            : (0, a.jsx)(D.Z, {
                show: l,
                onClose: n,
                width: "lg",
                children: (0, a.jsxs)("div", {
                  className: "rounded-xl bg-black p-4 text-secondary-200",
                  children: [
                    (0, a.jsx)("div", {
                      className: "relative flex justify-end",
                      children: (0, a.jsx)("button", {
                        className:
                          "rounded-full bg-[#838b91] p-1 text-white hover:bg-[#3c4042]",
                        onClick: n,
                        children: (0, a.jsx)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          className: "h-6 w-6",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          stroke: "currentColor",
                          children: (0, a.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M6 18L18 6M6 6l12 12",
                          }),
                        }),
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className: "",
                      children: [
                        (0, a.jsx)("h2", {
                          className:
                            "font-PPMonumentExtended pb-2 text-center text-lg font-bold uppercase",
                          children: "Admin Settings",
                        }),
                        (0, a.jsxs)("p", {
                          className:
                            "font-PPMonumentExtended pb-2 text-sm text-secondary-500",
                          children: [
                            (0, a.jsx)("strong", {
                              className: "text-secondary-300",
                              children: "Character ID:",
                            }),
                            " ",
                            d.id,
                          ],
                        }),
                        (0, a.jsxs)("p", {
                          className:
                            "font-PPMonumentExtended pb-2 text-sm text-secondary-500",
                          children: [
                            (0, a.jsx)("strong", {
                              className: "text-secondary-300",
                              children: "Brain ID:",
                            }),
                            " ",
                            d.brainId ? d.brainId : "No brain",
                          ],
                        }),
                        (0, a.jsxs)("p", {
                          className:
                            "font-PPMonumentExtended pb-2 text-sm text-secondary-500",
                          children: [
                            (0, a.jsx)("strong", {
                              className: "text-secondary-300",
                              children: "Body ID:",
                            }),
                            " ",
                            d.bodyId ? d.bodyId : "No body",
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "my-2 flex justify-center space-x-2 rounded-md border border-gray-500 bg-blackAlpha-500 px-2 py-3",
                      children: [
                        c &&
                          (0, a.jsx)("button", {
                            className:
                              "rounded-full px-2 py-1 text-sm font-semibold ".concat(
                                "featured" === m
                                  ? " bg-primary-default text-secondary-800"
                                  : "border border-secondary-200 bg-black text-secondary-200"
                              ),
                            onClick: () => u("featured"),
                            children: "Featured",
                          }),
                        (0, a.jsx)("button", {
                          className:
                            "rounded-full px-2 py-1 text-sm font-semibold ".concat(
                              "llm" === m
                                ? " bg-primary-default text-secondary-800"
                                : "border border-secondary-200 bg-black text-secondary-200"
                            ),
                          onClick: () => u("llm"),
                          children: "LLM",
                        }),
                        (0, a.jsx)("button", {
                          className:
                            "rounded-full px-2 py-1 text-sm font-semibold ".concat(
                              "permission" === m
                                ? " bg-primary-default text-secondary-800"
                                : "border border-secondary-200 bg-black text-secondary-200"
                            ),
                          onClick: () => u("permission"),
                          children: "Permission",
                        }),
                        (0, a.jsx)("button", {
                          className:
                            "rounded-full px-2 py-1 text-sm font-semibold ".concat(
                              "token" === m
                                ? " bg-primary-default text-secondary-800"
                                : "border border-secondary-200 bg-black text-secondary-200"
                            ),
                          onClick: () => u("token"),
                          children: "Token",
                        }),
                        (0, a.jsx)("button", {
                          className:
                            "rounded-full px-2 py-1 text-sm font-semibold ".concat(
                              "settings" === m
                                ? " bg-primary-default text-secondary-800"
                                : "border border-secondary-200 bg-black text-secondary-200"
                            ),
                          onClick: () => u("settings"),
                          children: "Settings",
                        }),
                      ],
                    }),
                    "featured" === m &&
                      (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)("p", {
                            className:
                              "mt-2 w-full text-center font-avenir text-md font-semibold text-white",
                            children:
                              "Manages the featured value for this character",
                          }),
                          (0, a.jsxs)("div", {
                            className: "mt-6",
                            children: [
                              (0, a.jsx)("h3", { children: "Set as First" }),
                              (0, a.jsx)("p", {
                                className:
                                  "w-full font-avenir text-sm text-secondary-400",
                                children:
                                  "Automatically updates the bot featured value to be the highest",
                              }),
                              (0, a.jsxs)("button", {
                                className:
                                  "my-2 flex w-full items-center justify-center rounded bg-primary-default px-4 py-2 font-avenir text-md font-bold text-secondary-800",
                                onClick: () => {
                                  let e = c + 1;
                                  Q(e), o(e);
                                },
                                children: [
                                  "Set as first",
                                  R &&
                                    (0, a.jsx)(w.Z, {
                                      className:
                                        "ml-2 h-4 w-4 text-secondary-800",
                                    }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "mt-4 w-full",
                                children: [
                                  (0, a.jsx)("h3", {
                                    children: "Featured Offset",
                                  }),
                                  (0, a.jsx)("p", {
                                    className:
                                      "w-full font-avenir text-sm text-secondary-400",
                                    children:
                                      'Sets the current character "offset value" after the first featured character',
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "flex w-full py-2",
                                children: [
                                  (0, a.jsx)("input", {
                                    className:
                                      "mr-2 bg-secondary-600 px-2 py-2 pr-8 font-avenir text-secondary-300",
                                    type: "number",
                                    min: 1,
                                    defaultValue: 1,
                                    onChange: (e) => p(Number(e.target.value)),
                                  }),
                                  (0, a.jsxs)("button", {
                                    className:
                                      "flex w-full items-center justify-center rounded bg-primary-default px-4 font-avenir text-md font-bold text-secondary-800",
                                    onClick: () => {
                                      Q(Math.max(c - h, 1));
                                    },
                                    children: [
                                      "Place after first (offset)",
                                      R &&
                                        (0, a.jsx)(w.Z, {
                                          className:
                                            "ml-2 h-4 w-4 text-secondary-800",
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "relative mt-4",
                                children: [
                                  (0, a.jsx)("div", {
                                    className:
                                      "absolute inset-0 flex items-center",
                                    "aria-hidden": "true",
                                    children: (0, a.jsx)("div", {
                                      className:
                                        "w-full border-t border-red-300",
                                    }),
                                  }),
                                  (0, a.jsx)("div", {
                                    className: "relative flex justify-center",
                                    children: (0, a.jsx)("span", {
                                      className:
                                        "bg-black px-2 text-sm text-red-400",
                                      children: "Danger Zone",
                                    }),
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("button", {
                                className:
                                  "mt-4 flex w-full items-center justify-center rounded bg-red-500 px-4 py-2 font-avenir text-md font-bold text-secondary-200",
                                onClick: () => Q(0),
                                children: [
                                  "Remove from featured",
                                  R &&
                                    (0, a.jsx)(w.Z, {
                                      className:
                                        "ml-2 h-4 w-4 text-secondary-800",
                                    }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    "llm" === m &&
                      (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)("p", {
                            className:
                              "mt-2 w-full text-center font-avenir text-md font-semibold text-white",
                            children:
                              "Updates the default LLM model used by the character",
                          }),
                          (0, a.jsxs)("div", {
                            className: "mt-6 flex w-full",
                            children: [
                              (0, a.jsxs)("select", {
                                className:
                                  "mr-2 w-1/2 bg-secondary-600 px-2 py-2 pr-8 font-avenir text-secondary-300",
                                value: f,
                                onChange: (e) => {
                                  v(e.target.value);
                                },
                                children: [
                                  (0, a.jsx)("option", { value: "" }, "none"),
                                  Object.values(Z.J3).map((e) =>
                                    (0, a.jsx)(
                                      "option",
                                      { value: e, children: e },
                                      e
                                    )
                                  ),
                                ],
                              }),
                              (0, a.jsxs)("button", {
                                className:
                                  "flex  w-1/2 items-center justify-center rounded bg-primary-default px-4 font-avenir text-md font-bold text-secondary-800",
                                onClick: () => $(f),
                                children: [
                                  "Set chat model",
                                  Y &&
                                    (0, a.jsx)(w.Z, {
                                      className:
                                        "ml-2 h-4 w-4 text-secondary-800",
                                    }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("p", {
                            className:
                              "font-PPMonumentExtended -mb-4 mt-4 pb-2 text-sm text-secondary-500",
                            children: [
                              (0, a.jsx)("strong", {
                                className: "text-secondary-300",
                                children: "Current Model:",
                              }),
                              " ",
                              d.brain.llmModel,
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "mt-6 w-full",
                            children: [
                              (0, a.jsx)("h3", {
                                children: "Go to Fine-tune Page",
                              }),
                              (0, a.jsx)("p", {
                                className:
                                  "w-full font-avenir text-sm text-secondary-400",
                                children:
                                  "Goes to the fine-tune page to start fine-tuning, check fine-tuning status, or connect character to fine-tuned model.",
                              }),
                              (0, a.jsxs)("button", {
                                className:
                                  "my-2 flex w-full items-center justify-center rounded bg-primary-default px-4 py-2 font-avenir text-md font-bold text-secondary-800",
                                onClick: () => {
                                  window.open("/admin/finetune", "_blank");
                                },
                                children: [
                                  "Go to fine-tune",
                                  M &&
                                    (0, a.jsx)(w.Z, {
                                      className:
                                        "ml-2 h-4 w-4 text-secondary-800",
                                    }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "mt-6 w-full",
                            children: [
                              (0, a.jsx)("h3", {
                                children: "Display all fine-tuning Jobs",
                              }),
                              (0, a.jsx)("p", {
                                className:
                                  "w-full font-avenir text-sm text-secondary-400",
                                children:
                                  "Display all fine-tuning jobs in database.",
                              }),
                              (0, a.jsxs)("button", {
                                className:
                                  "my-2 flex w-full items-center justify-center rounded bg-primary-default px-4 py-2 font-avenir text-md font-bold text-secondary-800",
                                onClick: () => {
                                  window.open("/admin/finetune/all", "_blank");
                                },
                                children: [
                                  "Display all fine-tuned models",
                                  M &&
                                    (0, a.jsx)(w.Z, {
                                      className:
                                        "ml-2 h-4 w-4 text-secondary-800",
                                    }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "mt-6 w-full",
                            children: [
                              (0, a.jsx)("h3", {
                                children: "Recent Fine-tuning Jobs",
                              }),
                              (0, a.jsxs)("div", {
                                className:
                                  "flex w-full font-avenir text-sm text-secondary-400",
                                children: [
                                  (0, a.jsx)("div", {
                                    className: "flex-1 text-left",
                                    children: (0, a.jsx)("span", {
                                      children: "Model Name",
                                    }),
                                  }),
                                  (0, a.jsx)("div", {
                                    className: "flex-1 text-left",
                                    children: (0, a.jsx)("span", {
                                      children: "Finetune ID",
                                    }),
                                  }),
                                ],
                              }),
                              null == X
                                ? void 0
                                : X.map((e, t) =>
                                    (0, a.jsx)(
                                      "div",
                                      {
                                        children: (
                                          null == e ? void 0 : e.modelName
                                        )
                                          ? (0, a.jsxs)("div", {
                                              className:
                                                "flex w-full font-avenir text-sm text-secondary-400",
                                              children: [
                                                (0, a.jsx)("div", {
                                                  className: "flex-1 text-left",
                                                  children: (0, a.jsxs)(
                                                    "span",
                                                    {
                                                      children: [
                                                        t + 1,
                                                        ". ",
                                                        e.modelName,
                                                      ],
                                                    }
                                                  ),
                                                }),
                                                (0, a.jsx)("div", {
                                                  className: "flex-1 text-left",
                                                  children: (0, a.jsx)("span", {
                                                    children: e.ftId,
                                                  }),
                                                }),
                                              ],
                                            })
                                          : (null == e ? void 0 : e.ftId)
                                          ? (0, a.jsxs)("div", {
                                              className:
                                                "flex w-full font-avenir text-sm text-secondary-400",
                                              children: [
                                                (0, a.jsx)("div", {
                                                  className: "flex-1 text-left",
                                                  children: (0, a.jsxs)(
                                                    "span",
                                                    {
                                                      children: [
                                                        t + 1,
                                                        ". N/A (Training in Progress)",
                                                      ],
                                                    }
                                                  ),
                                                }),
                                                (0, a.jsx)("div", {
                                                  className: "flex-1 text-left",
                                                  children: (0, a.jsx)("span", {
                                                    children: e.ftId,
                                                  }),
                                                }),
                                              ],
                                            })
                                          : (0, a.jsxs)("p", {
                                              className:
                                                "w-full font-avenir text-sm text-secondary-400",
                                              children: [t + 1, ". N/A"],
                                            }),
                                      },
                                      t
                                    )
                                  ),
                            ],
                          }),
                        ],
                      }),
                    "permission" === m &&
                      (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)("p", {
                            className:
                              "mt-2 w-full text-center font-avenir text-md font-semibold text-white",
                            children:
                              "Assign character editing permissions to yourself or another user",
                          }),
                          (0, a.jsxs)("div", {
                            className: "mt-6 w-full",
                            children: [
                              (0, a.jsx)("h3", {
                                children: "Make myself Admin",
                              }),
                              (0, a.jsx)("p", {
                                className:
                                  "w-full font-avenir text-sm text-secondary-400",
                                children:
                                  "Adds admin permissions for this character to the current logged in user.",
                              }),
                              (0, a.jsxs)("button", {
                                className:
                                  "my-2 flex w-full items-center justify-center rounded bg-primary-default px-4 py-2 font-avenir text-md font-bold text-secondary-800",
                                onClick: () => {
                                  ee(null == i ? void 0 : i.id);
                                },
                                children: [
                                  "Make myself admin",
                                  M &&
                                    (0, a.jsx)(w.Z, {
                                      className:
                                        "ml-2 h-4 w-4 text-secondary-800",
                                    }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "mt-4 w-full",
                                children: [
                                  (0, a.jsx)("h3", {
                                    children: "Make user Admin",
                                  }),
                                  (0, a.jsx)("p", {
                                    className:
                                      "w-full font-avenir text-sm text-secondary-400",
                                    children:
                                      "Adds admin permissions for the provided user id.",
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "flex w-full py-2",
                                children: [
                                  (0, a.jsx)("input", {
                                    className:
                                      "mr-2 bg-secondary-600 px-2 py-2 pr-8 font-avenir text-secondary-300",
                                    value: b,
                                    type: "text",
                                    onChange: (e) => {
                                      g(e.target.value);
                                    },
                                    placeholder:
                                      "Type user id (e.g. did:privy:...)",
                                  }),
                                  (0, a.jsxs)("button", {
                                    className:
                                      "flex w-full items-center justify-center rounded bg-primary-default px-4 font-avenir text-md font-bold text-secondary-800",
                                    onClick: () => el(),
                                    children: [
                                      "Add",
                                      M &&
                                        (0, a.jsx)(w.Z, {
                                          className:
                                            "ml-2 h-4 w-4 text-secondary-800",
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    "token" === m &&
                      (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)("p", {
                            className:
                              "mt-2 w-full text-center font-avenir text-md font-semibold text-white",
                            children:
                              'Update this character to be a "Token" bot.',
                          }),
                          (0, a.jsxs)("p", {
                            className:
                              "mt-1 flex items-center text-xs font-medium text-gray-500",
                            children: [
                              "To create a new new Token Config go to the\xa0",
                              (0, a.jsx)("a", {
                                href: "/admin/token-configs",
                                target: "_blank",
                                className: "font-semibold underline",
                                children: "Admin Dashboard",
                              }),
                            ],
                          }),
                        ],
                      }),
                    "settings" === m &&
                      (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)("p", {
                            className:
                              "mt-2 w-full text-center font-avenir text-md font-semibold text-white",
                            children:
                              "Manages main settings about the character",
                          }),
                          (0, a.jsxs)("div", {
                            className: "mt-6",
                            children: [
                              (0, a.jsxs)("div", {
                                className: "",
                                children: [
                                  (0, a.jsx)("h3", {
                                    children: "Character Tags",
                                  }),
                                  (0, a.jsx)("p", {
                                    className:
                                      "w-full font-avenir text-sm text-secondary-400",
                                    children:
                                      "Add and remove the tags for the current character",
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "flex w-full py-2",
                                    children: [
                                      (0, a.jsxs)("select", {
                                        className:
                                          " mr-2 w-1/2 bg-secondary-600 px-2 py-2 pr-8 font-avenir text-secondary-300",
                                        onChange: (e) => C(e.target.value),
                                        children: [
                                          (0, a.jsx)(
                                            "option",
                                            { value: "" },
                                            "none"
                                          ),
                                          Object.values(y._P)
                                            .filter((e) => !j.tags.includes(e))
                                            .map((e) =>
                                              (0, a.jsx)(
                                                "option",
                                                { value: e, children: e },
                                                e
                                              )
                                            ),
                                        ],
                                      }),
                                      (0, a.jsxs)("button", {
                                        className:
                                          "flex  w-1/2 items-center justify-center rounded bg-primary-default px-4 font-avenir text-md font-bold text-secondary-800",
                                        onClick: () => es(k),
                                        children: [
                                          "Add Tag",
                                          P &&
                                            (0, a.jsx)(w.Z, {
                                              className:
                                                "ml-2 h-4 w-4 text-secondary-800",
                                            }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, a.jsx)("div", {
                                    className: "flex flex-wrap",
                                    children: j && er,
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "mt-4",
                                children: [
                                  (0, a.jsx)("h3", { children: "Visibility" }),
                                  (0, a.jsx)("p", {
                                    className:
                                      "w-full font-avenir text-sm text-secondary-400",
                                    children:
                                      "Updated the visibility for the character",
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "flex w-full py-2",
                                    children: [
                                      (0, a.jsxs)("select", {
                                        className:
                                          "mr-2 w-1/2 bg-secondary-600 px-2 py-2 pr-8 font-avenir text-secondary-300",
                                        defaultValue: j.visibility,
                                        onChange: (e) => {
                                          A(e.target.value);
                                        },
                                        children: [
                                          (0, a.jsx)("option", {
                                            value: "public",
                                            children: "Public",
                                          }),
                                          (0, a.jsx)("option", {
                                            value: "private",
                                            children: "Private",
                                          }),
                                        ],
                                      }),
                                      (0, a.jsxs)("button", {
                                        className:
                                          "flex w-1/2 items-center justify-center rounded bg-primary-default px-4 font-avenir text-md font-bold text-secondary-800",
                                        onClick: () =>
                                          F(
                                            void 0,
                                            void 0,
                                            void 0,
                                            function* () {
                                              yield et(I);
                                            }
                                          ),
                                        children: [
                                          "Update",
                                          L &&
                                            (0, a.jsx)(w.Z, {
                                              className:
                                                "ml-2 h-4 w-4 text-secondary-800",
                                            }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "mt-4",
                                children: [
                                  (0, a.jsx)("h3", { children: "Skills" }),
                                  (0, a.jsxs)("p", {
                                    className:
                                      "w-full font-avenir text-sm text-secondary-400",
                                    children: [
                                      "Updates the skills for the character brain.",
                                      " ",
                                      (0, a.jsx)("strong", {
                                        children:
                                          "Adding/removing the NSFW Skill, will automatically also update the character LLM model.",
                                      }),
                                    ],
                                  }),
                                  (0, a.jsx)("p", {
                                    className: "text-sm text-red-500",
                                    children:
                                      "Skills selection currently disabled",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "relative mt-4",
                            children: [
                              (0, a.jsx)("div", {
                                className: "absolute inset-0 flex items-center",
                                "aria-hidden": "true",
                                children: (0, a.jsx)("div", {
                                  className: "w-full border-t border-red-300",
                                }),
                              }),
                              (0, a.jsx)("div", {
                                className: "relative flex justify-center",
                                children: (0, a.jsx)("span", {
                                  className:
                                    "bg-black px-2 text-sm text-red-400",
                                  children: "Danger Zone",
                                }),
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "w-full py-2",
                            children: [
                              (0, a.jsx)("div", {
                                className:
                                  "my-2 flex flex-col font-avenir text-sm text-secondary-400",
                                children: (0, a.jsx)("div", {
                                  className:
                                    "border-l-4 border-[#FF164E] bg-blackAlpha-400 p-4",
                                  children: (0, a.jsxs)("div", {
                                    className: "flex",
                                    children: [
                                      (0, a.jsx)("div", {
                                        className: "flex-shrink-0",
                                        children: (0, a.jsx)(z.a, {
                                          className: "h-5 w-5",
                                        }),
                                      }),
                                      (0, a.jsx)("div", {
                                        className: "ml-3 text-sm",
                                        children: (0, a.jsxs)("p", {
                                          children: [
                                            "Deleting a character will also delete the body but",
                                            " ",
                                            (0, a.jsx)("strong", {
                                              children: "NOT",
                                            }),
                                            " the brain. Make sure you know what you're doing before proceeding. This action is irreversible.",
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                              (0, a.jsxs)("button", {
                                className:
                                  "mt-4 flex w-full cursor-not-allowed items-center justify-center rounded bg-red-500 px-4 py-2 font-avenir text-md font-bold text-secondary-200",
                                disabled: !0,
                                onClick: () => {
                                  en();
                                },
                                children: [
                                  "Delete Character",
                                  J &&
                                    (0, a.jsx)(w.Z, {
                                      className:
                                        "ml-2 h-4 w-4 text-secondary-200",
                                    }),
                                ],
                              }),
                              (0, a.jsx)("p", {
                                className:
                                  "mt-2 text-center text-sm text-red-400",
                                children: "Currently unavailable",
                              }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
              });
        },
        L = (e) => {
          let {
              AvailableSortBy: t,
              AvailableCategories: s,
              AvailableExploreModes: r,
              selectedExploreMode: l,
              setSelectedExploreMode: n,
              selectedSortBy: d,
              setSelectedSortBy: c,
              selectedCategory: o,
              setSelectedCategory: x,
              onClose: u,
            } = e,
            { isAuthenticated: h, login: p } = (0, i.a)(),
            f = (e) => {
              if (e.type === y.Ru.MY_CREATIONS && !h) return p();
              c(
                e.type === y.Ru.DISCOVER
                  ? t.find((e) => e.type === y.hn.FEATURED)
                  : t.find((e) => e.type === y.hn.DATE_CREATED)
              ),
                x(null),
                n(e);
            },
            v = (e) => {
              if ((null == o ? void 0 : o.type) === e.type) {
                x(null);
                return;
              }
              x(e);
            },
            b = () => {
              n(r[0]), c(t[0]), x(null);
            };
          return (0, a.jsxs)("div", {
            className:
              "absolute right-0 top-12 z-10 hidden max-h-[500px] max-w-[400px] overflow-hidden rounded-[24px] border border-bordergray bg-black p-8 md:block",
            children: [
              (0, a.jsx)("button", {
                className:
                  "absolute right-3 top-3 z-20 h-[40px] w-[40px] rounded-full p-0 text-secondary-200 hover:bg-black/20",
                onClick: u,
                children: (0, a.jsx)(m.T, {}),
              }),
              (0, a.jsxs)("div", {
                className: "relative max-h-[500px]",
                children: [
                  (0, a.jsxs)("div", {
                    className: "max-h-[350px] overflow-y-auto pb-10",
                    children: [
                      (0, a.jsx)("span", {
                        className:
                          "heading-sm-xsss uppercase leading-[17px] text-secondary-800 dark:text-secondary-200",
                        children: "Explore in",
                      }),
                      (0, a.jsxs)("div", {
                        className: "mt-2 flex gap-2",
                        children: [
                          (0, a.jsx)("button", {
                            onClick: () =>
                              f(r.find((e) => e.type === y.Ru.DISCOVER)),
                            className: "".concat(
                              l.type === y.Ru.DISCOVER
                                ? "bg-black text-white dark:bg-secondary-200 dark:text-secondary-800"
                                : "bg-white/[0.24] dark:bg-inherit dark:text-secondary-200",
                              " subheading-sm-xss rounded-[1000px] border border-bordergray px-3 py-2 text-center capitalize hover:bg-black hover:text-white dark:hover:bg-secondary-200 dark:hover:text-secondary-800"
                            ),
                            children: "Discover",
                          }),
                          (0, a.jsx)("button", {
                            onClick: () =>
                              f(r.find((e) => e.type === y.Ru.MY_CREATIONS)),
                            className: "".concat(
                              l.type === y.Ru.MY_CREATIONS
                                ? "bg-black text-white dark:bg-secondary-200 dark:text-secondary-800"
                                : "bg-white/[0.24] dark:bg-inherit dark:text-secondary-200",
                              " subheading-sm-xss rounded-[1000px] border border-bordergray px-3 py-2 text-center capitalize hover:bg-black hover:text-white dark:hover:bg-secondary-200 dark:hover:text-secondary-800"
                            ),
                            children: "My Characters",
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "my-4 h-[1px] w-full bg-black/[0.08] dark:bg-whiteAlpha-200",
                      }),
                      (0, a.jsxs)("div", {
                        className: "w-full",
                        children: [
                          (0, a.jsx)("span", {
                            className:
                              "heading-sm-xsss uppercase leading-[17px] text-secondary-800 dark:text-secondary-200",
                            children: "Sort by",
                          }),
                          (0, a.jsx)("div", {
                            className: "mt-2 flex flex-wrap gap-3",
                            children: t
                              .filter((e) => e.availableIn === l.type)
                              .map((e) =>
                                (0, a.jsx)(
                                  "button",
                                  {
                                    onClick: () => c(e),
                                    className: "".concat(
                                      e.type === d.type
                                        ? "bg-black text-white dark:bg-secondary-200 dark:text-secondary-800"
                                        : "bg-white/[0.24] dark:bg-inherit dark:text-secondary-200",
                                      " subheading-sm-xss rounded-[1000px] border border-bordergray px-3 py-2 text-center capitalize hover:bg-black hover:text-white dark:hover:bg-secondary-200 dark:hover:text-secondary-800"
                                    ),
                                    children: e.name,
                                  },
                                  e.type
                                )
                              ),
                          }),
                        ],
                      }),
                      Object.values(y.GH).map((e) =>
                        e === y.GH.Internal
                          ? null
                          : (0, a.jsxs)(
                              "div",
                              {
                                className: "w-full",
                                children: [
                                  (0, a.jsx)("div", {
                                    className:
                                      "my-4 h-[1px] w-full bg-black/[0.08] dark:bg-whiteAlpha-200",
                                  }),
                                  (0, a.jsx)("span", {
                                    className:
                                      "heading-sm-xsss uppercase leading-[17px] text-secondary-800 dark:text-secondary-200",
                                    children: e,
                                  }),
                                  (0, a.jsx)("div", {
                                    className: "mt-2 flex flex-wrap gap-3",
                                    children: Object.values(y._P).map((t) =>
                                      y.R_[t] !== e
                                        ? null
                                        : (0, a.jsxs)(
                                            "button",
                                            {
                                              onClick: () => {
                                                v(s.find((e) => e.type === t));
                                              },
                                              className: "".concat(
                                                (null == o
                                                  ? void 0
                                                  : o.type) === t
                                                  ? "bg-black text-white dark:bg-secondary-200 dark:text-secondary-800"
                                                  : "bg-white/[0.24] dark:bg-inherit dark:text-secondary-200",
                                                " just-between subheading-sm-xss flex items-center rounded-[1000px] border border-bordergray px-3 py-2 text-center capitalize hover:bg-black hover:text-white dark:hover:bg-secondary-200 dark:hover:text-secondary-800"
                                              ),
                                              children: [
                                                (0, a.jsx)("span", {
                                                  className:
                                                    "my-[-5px] text-lg",
                                                  children: y.cS[t],
                                                }),
                                                (0, a.jsx)("span", {
                                                  className:
                                                    "ml-[8px] text-center capitalize",
                                                  children: t,
                                                }),
                                              ],
                                            },
                                            t
                                          )
                                    ),
                                  }),
                                ],
                              },
                              e
                            )
                      ),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: "sticky bottom-0 w-full",
                    children: (0, a.jsx)("button", {
                      onClick: () => b(),
                      className:
                        "subheading-lg-sm w-full rounded-full py-2 uppercase text-white ring-2 ring-white hover:bg-whiteAlpha-200",
                      children: "Reset",
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        G = s(27896),
        W = s(82327),
        V = (e) => {
          let {
              title: t,
              description: s,
              characters: l,
              setDisplayedModalCharacter: n,
              setIsAdminModalOpen: d,
              onSelectCharacter: x,
            } = e,
            { holoUser: m } = (0, i.a)(),
            { setSelectedCharacter: u } = (0, _.W)((e) => e),
            [h, p] = (0, r.useState)(0),
            f = () =>
              window.innerWidth >= 1536
                ? 6
                : window.innerWidth >= 1280
                ? 5
                : window.innerWidth >= 1024
                ? 4
                : window.innerWidth >= 768
                ? 3
                : window.innerWidth >= 640
                ? 2
                : 1,
            [v, b] = (0, r.useState)(f()),
            g = Math.ceil(l.length / v);
          (0, r.useEffect)(() => {
            let e = () => {
              b(f());
            };
            return (
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            );
          }, []);
          let j = l.slice(h * v, (h + 1) * v);
          return (0, a.jsxs)("div", {
            className: "w-full space-y-6",
            children: [
              (0, a.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                  (0, a.jsxs)("div", {
                    className: "space-y-1",
                    children: [
                      (0, a.jsx)("h2", {
                        className: "text-2xl font-bold text-secondary-200",
                        children: t,
                      }),
                      s &&
                        (0, a.jsx)("p", {
                          className: "body-text-default text-secondary-400",
                          children: s,
                        }),
                    ],
                  }),
                  g > 1 &&
                    (0, a.jsx)("div", {
                      className: "flex items-center gap-2",
                      children: Array.from({ length: g }).map((e, t) =>
                        (0, a.jsx)(
                          "button",
                          {
                            onClick: () => p(t),
                            className:
                              "h-2 rounded-full transition-all ".concat(
                                t === h
                                  ? "w-6 bg-secondary-200"
                                  : "w-2 bg-secondary-700"
                              ),
                            "aria-label": "Go to page ".concat(t + 1),
                          },
                          t
                        )
                      ),
                    }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "relative",
                children: [
                  h > 0 &&
                    (0, a.jsx)("button", {
                      className:
                        "absolute -left-4 top-1/2 z-10 -translate-y-1/2 transform bg-black/80 text-secondary-200",
                      onClick: () => {
                        p((e) => Math.max(0, e - 1));
                      },
                      children: (0, a.jsx)(c.w, { className: "h-6 w-6" }),
                    }),
                  h < g - 1 &&
                    (0, a.jsx)("button", {
                      className:
                        "absolute -right-4 top-1/2 z-10 -translate-y-1/2 transform bg-black/80 text-secondary-200",
                      onClick: () => {
                        p((e) => Math.min(g - 1, e + 1));
                      },
                      children: (0, a.jsx)(o.X, { className: "h-6 w-6" }),
                    }),
                  0 === l.length
                    ? (0, a.jsx)("div", {
                        className: "flex h-32 items-center justify-center",
                        children: (0, a.jsx)("p", {
                          className: "text-secondary-400",
                          children: "No AI characters found.",
                        }),
                      })
                    : (0, a.jsx)("div", {
                        className:
                          "grid auto-cols-fr grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6",
                        children: j.map((e) => {
                          let t = (0, A.TB)(e, m);
                          return (0, a.jsxs)(
                            "div",
                            {
                              className: "relative",
                              children: [
                                (0, a.jsx)(O, {
                                  character: e,
                                  onSelect: () => x(e, t),
                                  isBlurred: t,
                                }),
                                (null == m ? void 0 : m.role) === y.i4.ADMIN &&
                                  (0, a.jsx)("button", {
                                    className:
                                      "absolute left-2 top-2 bg-black/50",
                                    onClick: (t) => {
                                      t.stopPropagation(), u(e), d(!0);
                                    },
                                    children: (0, a.jsx)("img", {
                                      src: "/icons/setting-white.svg",
                                      alt: "Settings",
                                      className: "h-4 w-4",
                                    }),
                                  }),
                              ],
                            },
                            e.id
                          );
                        }),
                      }),
                ],
              }),
            ],
          });
        },
        J = (e) => {
          var t, s, r, l, n, i;
          let {
              character: d,
              displayScenario: c = !1,
              displayCharacterCreator: o = !1,
            } = e,
            x = (0, C.EZ)(d.tags);
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)("div", {
                className: "mt-2",
                children:
                  x.length > 0 &&
                  (0, a.jsx)("div", {
                    className: "flex flex-wrap items-start",
                    children: x.map((e, t) =>
                      (0, a.jsx)(
                        "div",
                        {
                          className:
                            "mb-2 mr-1 flex items-center rounded-full bg-black px-3 py-1 font-avenir text-sm font-medium text-white",
                          children: e,
                        },
                        t
                      )
                    ),
                  }),
              }),
              o &&
                (0, a.jsxs)("div", {
                  className: "mt-1 flex flex-col gap-y-1",
                  children: [
                    (0, a.jsx)("span", {
                      className: "heading-sm-xsss uppercase dark:text-white",
                      children: "Create By",
                    }),
                    (0, a.jsx)("div", {
                      children: (0, a.jsx)(I.Z, {
                        ownerId: d.ownerId,
                        username:
                          null === (t = null == d ? void 0 : d.owner) ||
                          void 0 === t
                            ? void 0
                            : t.username,
                        ownerImage:
                          null === (s = null == d ? void 0 : d.owner) ||
                          void 0 === s
                            ? void 0
                            : s.image,
                        planId:
                          null === (r = null == d ? void 0 : d.owner) ||
                          void 0 === r
                            ? void 0
                            : r.planId,
                        character: d,
                      }),
                    }),
                  ],
                }),
              (null === (l = null == d ? void 0 : d.brain) || void 0 === l
                ? void 0
                : l.shortBio) &&
                (0, a.jsxs)("div", {
                  className: "mt-2 max-h-[125px] overflow-y-scroll",
                  children: [
                    (0, a.jsx)("label", {
                      className: "text-xs uppercase text-secondary-200",
                      children: "Bio",
                    }),
                    (0, a.jsx)("p", {
                      className: "space-x-2 font-avenir text-[14px] text-white",
                      children: d.brain.shortBio,
                    }),
                  ],
                }),
              c &&
                (null ===
                  (i =
                    null === (n = null == d ? void 0 : d.brain) || void 0 === n
                      ? void 0
                      : n.scenario) || void 0 === i
                  ? void 0
                  : i.description) &&
                (0, a.jsxs)("div", {
                  className: "mt-2",
                  children: [
                    (0, a.jsx)("label", {
                      className: "text-xs uppercase text-secondary-200",
                      children: "Scenario",
                    }),
                    (0, a.jsx)("span", {
                      className:
                        "flex items-center space-x-2 font-avenir text-[14px] text-white",
                      children: d.brain.scenario.description,
                    }),
                  ],
                }),
            ],
          });
        },
        U = s(44175),
        Y = (e) => {
          var t, s, l;
          let {
              character: n,
              show: i,
              onShareCharacter: d,
              onClickChat: c,
              onClickDetails: o,
              onClose: x,
            } = e,
            [u, h] = (0, r.useState)(!1);
          return (
            (0, r.useEffect)(() => {
              h(!0);
            }, []),
            (0, a.jsx)(D.Z, {
              show: i,
              onClose: x,
              width: "3xl",
              disableOutsideClick: !1,
              children: (0, a.jsxs)("div", {
                className: E()(
                  "max-h-[100vh] overflow-hidden rounded-t-2xl bg-black transition duration-300 sm:rounded-b-2xl",
                  u ? "opacity-100" : "opacity-0"
                ),
                children: [
                  (0, a.jsx)("button", {
                    className: E()(
                      "absolute right-4 top-2 z-20 h-5 w-5 rounded-full p-0 text-secondary-200 transition duration-300 hover:bg-black/20 md:right-5 md:top-5 md:h-[40px] md:w-[40px]",
                      u
                        ? "translate-x-0 opacity-100"
                        : "translate-x-4 opacity-0"
                    ),
                    onClick: x,
                    children: (0, a.jsx)(m.T, {}),
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "no-scrollbar  max-h-[95vh] overflow-y-scroll p-4 text-white md:h-full md:p-9",
                    children: (0, a.jsxs)("div", {
                      className: E()(
                        "transition duration-300",
                        u
                          ? "-translate-y-0 opacity-100"
                          : "translate-y-4 opacity-0"
                      ),
                      children: [
                        (0, a.jsxs)("div", {
                          className:
                            "flex flex-row items-start space-x-4 space-y-4 md:space-y-0",
                          children: [
                            (0, a.jsxs)("div", {
                              className:
                                "relative w-[50%] overflow-hidden rounded-[20px] md:w-[40%]",
                              children: [
                                (0, a.jsx)("img", {
                                  src: (0, A.vf)(n)
                                    ? n.body.image
                                    : n.brain.image,
                                  alt: "character image",
                                  className:
                                    "aspect-square h-full w-full object-cover sm:h-[250px] md:aspect-auto",
                                }),
                                (0, a.jsx)("div", {
                                  className:
                                    "absolute bottom-2 right-2 w-3/4 md:bottom-[10px] md:right-[10px]",
                                  children: (0, a.jsx)(T.Z, {
                                    tags: n.tags,
                                    tooltipsPosition: "bottom",
                                  }),
                                }),
                                (0, a.jsx)("div", {
                                  onClick: () => d(),
                                  className:
                                    "absolute right-2 top-2 scale-75 hover:cursor-pointer md:scale-100",
                                  children: (0, a.jsx)("img", {
                                    src: "/icons/share-black.svg",
                                    alt: "share",
                                  }),
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "w-[50%] space-y-2 md:w-[60%]",
                              children: [
                                (0, a.jsx)("h4", {
                                  className:
                                    "subheading-lg-md truncate text-start capitalize text-gray-800 dark:text-white",
                                  children: n.name,
                                }),
                                (0, a.jsxs)("div", {
                                  className:
                                    "w-full space-y-2 md:flex md:items-center md:space-x-4 md:space-y-0",
                                  children: [
                                    (0, a.jsx)(I.Z, {
                                      character: n,
                                      ownerId: n.ownerId,
                                      ownerImage:
                                        null ===
                                          (t = null == n ? void 0 : n.owner) ||
                                        void 0 === t
                                          ? void 0
                                          : t.image,
                                      username:
                                        null ===
                                          (s = null == n ? void 0 : n.owner) ||
                                        void 0 === s
                                          ? void 0
                                          : s.username,
                                      planId:
                                        null ===
                                          (l = null == n ? void 0 : n.owner) ||
                                        void 0 === l
                                          ? void 0
                                          : l.planId,
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "flex items-center",
                                      children: [
                                        (0, a.jsx)(U.ChatSolidIcon, {
                                          className:
                                            "mr-[2px] h-4 w-4 text-gray-200",
                                        }),
                                        (0, a.jsx)("span", {
                                          className:
                                            "font-avenir text-sm font-semibold text-secondary-default dark:text-secondary-300",
                                          children: (0, C.pw)(n.chatsCount),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, a.jsx)("div", {
                                  className: "mt-4 hidden md:block",
                                  children: (0, a.jsx)(J, { character: n }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "mt-4 hidden items-center space-x-2 md:flex",
                          children: [
                            (0, a.jsxs)("button", {
                              onClick: () => c(),
                              className:
                                "subheading-lg-sm mt-2 flex w-full items-center justify-center space-x-2 rounded-full bg-primary-default py-2 text-sm uppercase text-secondary-800 md:text-[16px]",
                              children: [
                                (0, a.jsx)(U.ChatSolidIcon, {
                                  className:
                                    "mr-2 h-4 w-4 text-secondary-800 md:h-6 md:w-6",
                                }),
                                "Chat",
                              ],
                            }),
                            (0, a.jsx)("button", {
                              onClick: () => o(),
                              className:
                                "subheading-lg-sm mt-2 flex w-full items-center justify-center space-x-2 rounded-full bg-secondary-200 py-2 text-sm uppercase text-secondary-800 md:text-[16px]",
                              children: "Character Details",
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "mt-4 md:hidden",
                          children: [
                            (0, a.jsx)(J, { character: n }),
                            (0, a.jsxs)("button", {
                              onClick: () => c(),
                              className:
                                "subheading-lg-sm mt-4 flex w-full items-center justify-center space-x-2 rounded-full bg-primary-default py-2 text-sm uppercase text-secondary-800 md:text-[16px]",
                              children: [
                                (0, a.jsx)(U.ChatSolidIcon, {
                                  className:
                                    "mr-2 h-4 w-4 text-secondary-800 md:h-6 md:w-6",
                                }),
                                "Chat",
                              ],
                            }),
                            (0, a.jsx)("button", {
                              onClick: () => o(),
                              className:
                                "subheading-lg-sm mt-2 flex w-full items-center justify-center space-x-2 rounded-full bg-secondary-200 py-2 text-sm uppercase text-secondary-800 md:text-[16px]",
                              children: "Character Details",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            })
          );
        },
        H = s(99319),
        X = function (e, t, s, a) {
          return new (s || (s = Promise))(function (r, l) {
            function n(e) {
              try {
                d(a.next(e));
              } catch (e) {
                l(e);
              }
            }
            function i(e) {
              try {
                d(a.throw(e));
              } catch (e) {
                l(e);
              }
            }
            function d(e) {
              var t;
              e.done
                ? r(e.value)
                : ((t = e.value) instanceof s
                    ? t
                    : new s(function (e) {
                        e(t);
                      })
                  ).then(n, i);
            }
            d((a = a.apply(e, t || [])).next());
          });
        };
      let q = [
        {
          image:
            "https://hologramxyz.s3.amazonaws.com/assets/images/lootbox-event/lootbox-banner.png",
          name: "lootbox-banner",
          path: "/holoskins",
        },
        {
          image:
            "https://hologramxyz.s3.amazonaws.com/assets/images/pudgy-event/pudgy-banner.png",
          name: "pudgy-banner",
          path: "/pudgypenguins",
        },
      ];
      var K = (e) => {
          var t, s, l;
          let {
              cachedCharactersByFeatured: n,
              cachedCharactersByMarket: v,
              cachedCharactersByRoleplay: g,
            } = e,
            w = [
              { name: "Discover", type: y.Ru.DISCOVER },
              { name: "My Creations", type: y.Ru.MY_CREATIONS },
            ],
            N = [
              {
                name: "Trending",
                type: y.hn.TRENDING,
                availableIn: y.Ru.DISCOVER,
              },
              {
                name: "Featured",
                type: y.hn.FEATURED,
                availableIn: y.Ru.DISCOVER,
              },
              {
                name: "Chat Number",
                type: y.hn.POPULAR,
                availableIn: y.Ru.DISCOVER,
              },
              { name: "Newest", type: y.hn.NEWEST, availableIn: y.Ru.DISCOVER },
              {
                name: "Date Created",
                type: y.hn.DATE_CREATED,
                availableIn: y.Ru.MY_CREATIONS,
              },
            ],
            C = Object.keys(y._P)
              .filter((e) => y.R_[y._P[e]] !== y.GH.Internal)
              .map((e) => ({ name: y._P[e], type: y._P[e], icon: e })),
            S = (0, f.useRouter)(),
            I = (0, M.Z)(),
            {
              holoUser: R,
              isAuthenticated: T,
              // login: D,
              refreshHoloUser: z,
            } = (0, i.a)(),
            {
              userCreatedCharacters: Z,
              selectedCharacter: F,
              setSelectedCharacter: J,
              fetchCharacters: U,
            } = (0, _.W)((e) => e),
            { setDisplayNsfwPreferenceModal: K } = (0, H.oR)((e) => e),
            Q = (0, r.useRef)(null),
            $ = (0, r.useRef)(null),
            ee = (0, r.useRef)(null),
            et = (0, r.useRef)(null),
            [es, ea] = (0, r.useState)(w[0]),
            [er, el] = (0, r.useState)(N[0]),
            [en, ei] = (0, r.useState)(null),
            [ed, ec] = (0, r.useState)(!1),
            [eo, ex] = (0, r.useState)(""),
            [em, eu] = (0, r.useState)(!1),
            [eh, ep] = (0, r.useState)(!1),
            [ef, ev] = (0, r.useState)([]),
            [eb, ey] = (0, r.useState)(1),
            [eg, ej] = (0, r.useState)(0),
            [ew, eN] = (0, r.useState)(0),
            [ek, eC] = (0, r.useState)(!1),
            [eS, eE] = (0, r.useState)(),
            [eI, eA] = (0, r.useState)(),
            [eR, eT] = (0, r.useState)(),
            [eM, eO] = (0, r.useState)(!1),
            [eP, e_] = (0, r.useState)(!1),
            [eD, ez] = (0, r.useState)(0),
            [eZ, eF] = (0, r.useState)(!0);
          (0, W.Z)(et, () => e_(!1)),
            (0, r.useEffect)(() => {
              eW(), eB();
            }, [es, er, en, eo, R]),
            (0, r.useEffect)(() => {
              let e = setInterval(() => {
                eX();
              }, 1e4);
              return () => {
                clearInterval(e);
              };
            }, [eD]);
          let eB = () => {
              var e, t;
              if (
                (null == es ? void 0 : es.type) ===
                  (null === (e = w[0]) || void 0 === e ? void 0 : e.type) &&
                (null == er ? void 0 : er.type) ===
                  (null === (t = N[0]) || void 0 === t ? void 0 : t.type) &&
                !eo &&
                !en
              ) {
                eF(!0);
                return;
              }
              eF(!1);
            },
            eL = (e) =>
              X(void 0, void 0, void 0, function* () {
                J(e), S.push("/chat/".concat(e.id));
              }),
            eG = (e) =>
              X(void 0, void 0, void 0, function* () {
                ex(e);
              }),
            eW = () =>
              X(void 0, void 0, void 0, function* () {
                var e;
                eu(!0);
                let t = er.type.toString(),
                  s = en ? en.type.toString() : void 0;
                if (t === y.hn.TRENDING && !s && !eo) {
                  !eS ||
                    (null === (e = eS.signal) || void 0 === e
                      ? void 0
                      : e.aborted) ||
                    eS.abort("Changed filter."),
                    ev(yield eV()),
                    eu(!1);
                  return;
                }
                let a = { sortBy: er.type, tag: s, search: eo || void 0 },
                  { characters: r, nextPage: l, total: n } = yield eU(0, 18, a);
                void 0 !== r && (ev(r), ey(l), ej(n), eu(!1));
              }),
            eV = () =>
              X(void 0, void 0, void 0, function* () {
                let e = yield fetch(
                    "/api/characters?sortBy=trending&page=0&pageSize=18",
                    {
                      method: "GET",
                      headers: { "Content-Type": "application/json" },
                    }
                  ),
                  { characters: t } = yield e.json();
                return t;
              }),
            eJ = () => {
              S.push("/chat/".concat(F.id));
            },
            eU = (e, t, s) =>
              X(void 0, void 0, void 0, function* () {
                var a;
                !eS ||
                  (null === (a = eS.signal) || void 0 === a
                    ? void 0
                    : a.aborted) ||
                  eS.abort("Changed filter");
                let r = new AbortController();
                if ((eE(r), es.type === y.Ru.DISCOVER)) {
                  let {
                    characters: a,
                    nextPage: l,
                    total: n,
                  } = yield U(e, t, s, r.signal);
                  return { characters: a, nextPage: l, total: n };
                }
                if (es.type === y.Ru.MY_CREATIONS) {
                  let e = 1;
                  return (
                    ef[0].id === Z[0].id && (e = void 0),
                    { characters: Z, nextPage: e, total: Z.length }
                  );
                }
                return { characters: void 0, nextPage: void 0, total: void 0 };
              }),
            eY = (e) => {
              el(e), e_(!1);
            },
            eH = () => {
              if (eD - 1 < 0) return ez(q.length - 1);
              ez(() => eD - 1);
            },
            eX = () => {
              if (eD + 1 >= q.length) return ez(0);
              ez(() => eD + 1);
            },
            eq = (e, t) => {
              if (!R) return D();
              if (t) {
                K(!0);
                return;
              }
              eA(e);
            };
          return (0, a.jsxs)(a.Fragment, {
            children: [
              eh &&
                (0, a.jsx)(j, {
                  AvailableCategories: C,
                  AvailableSortBy: N,
                  showFilterDrawer: eh,
                  setShowFilterDrawer: ep,
                  selectedExploreMode: es,
                  selectedSortBy: er,
                  selectedCategory: en,
                  setSelectedSortBy: el,
                  setSelectedCategory: ei,
                }),
              eI &&
                (0, a.jsx)(
                  Y,
                  {
                    character: eI,
                    show: !!eI,
                    onClose: () => eA(null),
                    onClickChat: () => eL(eI),
                    onClickDetails: () => S.push("/c/".concat(eI.id)),
                    onShareCharacter: () => eT(eI),
                  },
                  "PreviewCharacterModal"
                ),
              eR &&
                (0, a.jsx)(
                  G.Z,
                  {
                    show: !!eR,
                    characterId: eR.id || "",
                    onClose: (e) => {
                      null == e || e.preventDefault(), eT(null);
                    },
                    shareText: (0, A.aI)(
                      eR.ownerId === (null == R ? void 0 : R.id),
                      eR.name
                    ),
                  },
                  "ShareCharacterModal"
                ),
              (0, a.jsxs)("div", {
                ref: Q,
                onScroll: () => {
                  var e;
                  (null == Q ? void 0 : Q.current) &&
                    ((null === (e = null == Q ? void 0 : Q.current) ||
                    void 0 === e
                      ? void 0
                      : e.scrollTop) >= 1300
                      ? ec(!0)
                      : ec(!1));
                },
                className:
                  "hide-scrollbar relative w-full overflow-y-auto overflow-x-hidden px-4 md:px-10 ",
                children: [
                  (0, a.jsxs)("div", {
                    className: E()(
                      "relative mt-4 hidden w-full items-center overflow-hidden rounded-[24px] md:flex md:pt-10"
                    ),
                    children: [
                      (0, a.jsx)(b(), {
                        src:
                          null === (t = q[eD]) || void 0 === t
                            ? void 0
                            : t.image,
                        alt:
                          null === (s = q[eD]) || void 0 === s
                            ? void 0
                            : s.name,
                        width: 0,
                        height: 0,
                        sizes: "100vw",
                        className:
                          "animate-fade-in-right h-auto w-full cursor-pointer rounded-3xl",
                        onClick: () => {
                          var e;
                          return S.push(
                            null === (e = q[eD]) || void 0 === e
                              ? void 0
                              : e.path
                          );
                        },
                      }),
                      (0, a.jsx)("div", {
                        onClick: (e) => {
                          e.preventDefault(), eH();
                        },
                        className:
                          "absolute left-2 top-1/2 cursor-pointer rounded-full bg-blackAlpha-500 hover:cursor-pointer hover:bg-blackAlpha-700",
                        children: (0, a.jsx)(c.w, {
                          className: "text-[24px] !text-white",
                        }),
                      }),
                      (0, a.jsx)("div", {
                        onClick: (e) => {
                          e.preventDefault(), eX();
                        },
                        className:
                          "absolute right-2 top-1/2 cursor-pointer rounded-full bg-blackAlpha-500 hover:cursor-pointer hover:bg-blackAlpha-700",
                        children: (0, a.jsx)(o.X, {
                          className: "text-[24px] !text-white",
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "animate-fade-in-right absolute bottom-2 left-0 flex w-full items-center justify-center gap-x-2 ",
                        children: q.map((e, t) =>
                          (0, a.jsx)(
                            "div",
                            {
                              className: E()(
                                t === eD
                                  ? "h-2 w-6 rounded bg-white "
                                  : "h-2 w-2 rounded-full  bg-black",
                                "cursor-pointer"
                              ),
                              onClick: () => ez(t),
                            },
                            e.name
                          )
                        ),
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "sticky top-0 z-20 flex bg-black md:mt-6 md:pb-4",
                    children: (0, a.jsxs)("div", {
                      className: "relative w-full",
                      children: [
                        (0, a.jsxs)("div", {
                          className:
                            "mb-5 mt-6 flex h-[38px] w-full justify-between gap-x-6  md:mb-0 md:px-0",
                          children: [
                            (0, a.jsxs)("div", {
                              className:
                                "relative flex h-[38px] w-full items-center  ",
                              children: [
                                (0, a.jsx)("div", {
                                  className:
                                    "absolute left-2 flex items-center justify-center md:hover:!cursor-pointer",
                                  children: (0, a.jsx)(x.G, {
                                    className: "!text-secondary-200",
                                  }),
                                }),
                                (0, a.jsx)("input", {
                                  ref: $,
                                  value: eo,
                                  onChange: (e) => eG(e.target.value),
                                  onClick: () => {
                                    T || D();
                                  },
                                  type: "text",
                                  placeholder: "Search Here",
                                  className: E()(
                                    "h-full w-full rounded-lg border border-black/[0.06] bg-white/[0.08] pl-8 font-avenir text-[14px] font-medium text-secondary-500 outline-none hover:border-black/[0.06]  hover:bg-white/[0.28] focus:border-secondary-800 focus:bg-secondary-200 active:border-secondary-800 active:bg-secondary-200",
                                    "dark:border-whiteAlpha-200 dark:bg-blackAlpha-500 dark:text-secondary-400 dark:hover:border-whiteAlpha-200 dark:hover:bg-blackAlpha-700 dark:hover:text-white dark:focus:border-whiteAlpha-200 dark:focus:bg-blackAlpha-700 dark:focus:text-white"
                                  ),
                                }),
                                eo &&
                                  (0, a.jsx)("button", {
                                    onClick: () => ex(""),
                                    className:
                                      "absolute right-4 flex items-center justify-center",
                                    children: (0, a.jsx)(m.T, {
                                      className:
                                        "flex items-center justify-center  !text-[12px] !text-secondary-200 md:hover:!cursor-pointer",
                                    }),
                                  }),
                              ],
                            }),
                            (0, a.jsxs)("button", {
                              onClick: () => (I ? ep(!0) : eO(!eM)),
                              className:
                                "relative flex items-center justify-center",
                              children: [
                                (0, a.jsx)(b(), {
                                  src: "/icons/filter-white.svg",
                                  alt: "filter",
                                  width: 24,
                                  height: 24,
                                }),
                                er.type === y.hn.NEWEST || en
                                  ? (0, a.jsx)("div", {
                                      className:
                                        "absolute right-0 top-[7px] h-[10px] w-[10px] rounded-[10px] bg-primary-300 ",
                                    })
                                  : null,
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsx)("div", {
                          className: "absolute top-6 w-full",
                          children:
                            eM &&
                            (0, a.jsx)(L, {
                              AvailableCategories: C,
                              AvailableExploreModes: w,
                              AvailableSortBy: N,
                              selectedExploreMode: es,
                              setSelectedExploreMode: ea,
                              selectedSortBy: er,
                              setSelectedSortBy: el,
                              selectedCategory: en,
                              setSelectedCategory: ei,
                              onClose: () => eO(!1),
                            }),
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className: "relative",
                    children: [
                      eZ &&
                        (0, a.jsxs)("div", {
                          className: "hidden md:block",
                          children: [
                            (0, a.jsx)("div", {
                              className: "my-10 flex w-full ",
                              children:
                                n.length > 0 &&
                                (0, a.jsx)(
                                  V,
                                  {
                                    title: "Featured",
                                    characters: n,
                                    setDisplayedModalCharacter: eA,
                                    setIsAdminModalOpen: eC,
                                    onSelectCharacter: (e, t) => eq(e, t),
                                  },
                                  "Featured"
                                ),
                            }),
                            (0, a.jsx)("div", {
                              className: "my-10 flex w-full",
                              children:
                                v.length > 0 &&
                                (0, a.jsx)(
                                  V,
                                  {
                                    title: "Market Wizards",
                                    description:
                                      "Access the latest market news, prices, and trading tips through your favorite financial influencers, memes, and stocks.",
                                    characters: v,
                                    setDisplayedModalCharacter: eA,
                                    setIsAdminModalOpen: eC,
                                    onSelectCharacter: (e, t) => eq(e, t),
                                  },
                                  "Market Wizards"
                                ),
                            }),
                          ],
                        }),
                      (0, a.jsx)("div", {
                        className: E()(
                          "hidden items-center md:flex",
                          eZ ? "mb-5 mt-7" : "mb-10 mt-5"
                        ),
                        children: eZ
                          ? (0, a.jsx)("p", {
                              ref: ee,
                              className:
                                "heading-sm-lg uppercase leading-[26.4px] dark:text-secondary-200",
                              children: "Explore",
                            })
                          : (0, a.jsxs)("div", {
                              className: "hidden md:flex md:w-full ",
                              children: [
                                (0, a.jsxs)("div", {
                                  ref: et,
                                  className:
                                    "relative inline-block min-w-[165px] text-left",
                                  children: [
                                    (0, a.jsx)("div", {
                                      children: (0, a.jsxs)("button", {
                                        className: E()(
                                          "subheading-sm-sm inline-flex w-full justify-center bg-blackAlpha-300  px-4 py-1 text-secondary-200 shadow-sm hover:bg-whiteAlpha-300 focus:outline-none ",
                                          eP
                                            ? "rounded-t-[14px]"
                                            : "rounded-[10000px]"
                                        ),
                                        onClick: () => e_(!eP),
                                        children: [
                                          (0, a.jsxs)("p", {
                                            className: "font-normal",
                                            children: [
                                              "Sort by:",
                                              (0, a.jsxs)("span", {
                                                className: "font-semibold",
                                                children: [" ", er.name],
                                              }),
                                            ],
                                          }),
                                          (0, a.jsx)("div", {
                                            className: "ml-2",
                                            children: (0, a.jsx)(u.A, {
                                              className: "!text-sm",
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                    eP &&
                                      (0, a.jsx)("div", {
                                        className:
                                          "absolute z-10 w-full rounded-b-[14px] bg-blackAlpha-300 shadow-lg backdrop-blur-2xl",
                                        children: (0, a.jsx)("div", {
                                          role: "menu",
                                          "aria-orientation": "vertical",
                                          "aria-labelledby": "options-menu",
                                          children: (es.type === y.Ru.DISCOVER
                                            ? N.filter(
                                                (e) =>
                                                  e.availableIn ===
                                                    y.Ru.DISCOVER &&
                                                  e.type !== er.type
                                              )
                                            : es.type === y.Ru.MY_CREATIONS
                                            ? N.filter(
                                                (e) =>
                                                  e.availableIn ===
                                                    y.Ru.MY_CREATIONS &&
                                                  e.type !== er.type
                                              )
                                            : void 0
                                          ).map((e, t) =>
                                            (0, a.jsx)(
                                              "div",
                                              {
                                                onClick: () => eY(e),
                                                className: E()(
                                                  "subheading-sm-sm block cursor-pointer px-4 py-2  text-secondary-200 hover:bg-whiteAlpha-300 ",
                                                  t + 1 === N.length - 1
                                                    ? "rounded-b-[14px]"
                                                    : ""
                                                ),
                                                children: e.name,
                                              },
                                              t
                                            )
                                          ),
                                        }),
                                      }),
                                  ],
                                }),
                                en &&
                                  (0, a.jsx)(p, {
                                    text: en.name,
                                    onClose: () => ei(null),
                                  }),
                              ],
                            }),
                      }),
                      (0, a.jsxs)("div", {
                        className: "h-full w-full",
                        children: [
                          em
                            ? (0, a.jsx)(P, { count: 18 })
                            : (0, a.jsxs)("div", {
                                className:
                                  "relative mb-20 grid h-auto w-full grid-cols-1 gap-4 pb-32 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6",
                                children: [
                                  ef.map((e, t) => {
                                    e.featured > ew && eN(e.featured);
                                    let s = (0, A.TB)(e, R);
                                    return (0, a.jsxs)(
                                      "div",
                                      {
                                        className: "relative",
                                        children: [
                                          (0, a.jsx)(
                                            O,
                                            {
                                              character: e,
                                              onSelect: () => eq(e, s),
                                              isBlurred: s,
                                            },
                                            "".concat(e.id, "_").concat(t)
                                          ),
                                          (null == R ? void 0 : R.role) ===
                                            y.i4.ADMIN &&
                                            (0, a.jsx)(d.z, {
                                              variant: "ghost",
                                              style: {
                                                position: "absolute",
                                                top: "4px",
                                                left: "0px",
                                              },
                                              _hover: {},
                                              color: "white",
                                              onClick: (t) => {
                                                t.stopPropagation(),
                                                  J(e),
                                                  eC(!0);
                                              },
                                              children: (0, a.jsx)("img", {
                                                src: "/icons/setting-white.svg",
                                                alt: "settings mode",
                                              }),
                                            }),
                                        ],
                                      },
                                      "".concat(e.id, "_").concat(t)
                                    );
                                  }),
                                  0 !== ef.length &&
                                    ef.length !== eg - 18 &&
                                    (0, a.jsx)(k, {
                                      pageToFetch: eb,
                                      fetchMoreCharacters: (e) =>
                                        X(void 0, void 0, void 0, function* () {
                                          if (void 0 === e) return;
                                          let t = er.type.toString(),
                                            s = en
                                              ? en.type.toString()
                                              : void 0,
                                            { characters: a, nextPage: r } =
                                              yield eU(e, 18, {
                                                sortBy: t,
                                                tag: s,
                                                search: eo || void 0,
                                              });
                                          if (void 0 !== a)
                                            return ev((e) => [...e, ...a]), r;
                                        }),
                                    }),
                                ],
                              }),
                          (0, a.jsx)("div", {
                            className:
                              "my-10 flex w-full items-center justify-center text-sm text-gray-500",
                            children: (0, a.jsx)("a", {
                              href: "/privacy-policy",
                              className: "hover:underline",
                              children: "Privacy Policy",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  ed &&
                    (0, a.jsx)("div", {
                      onClick: () => {
                        (null == Q ? void 0 : Q.current) &&
                          Q.current.scrollTo({ top: 0, behavior: "smooth" });
                      },
                      className:
                        "scroll-to-top-border fixed bottom-[152px] right-2 h-[46px] w-[46px] rounded-full md:bottom-[160px] md:right-12 md:hover:cursor-pointer",
                      children: (0, a.jsx)("div", {
                        className:
                          "flex h-11 w-11 items-center justify-center rounded-full bg-black",
                        children: (0, a.jsx)(h.g, {
                          color: "white",
                          fontSize: "36px",
                        }),
                      }),
                    }),
                  F &&
                    (0, a.jsx)("div", {}),
                ],
              }),
              F &&
                (0, a.jsx)(B, {
                  isOpen: ek,
                  onClose: () => eC(!1),
                  user: R,
                  character: F,
                  highestFeaturedParam: ew,
                  setHighestFeaturedParam: (e) => eN(e),
                }),
            ],
          });
        },
        Q = !0,
        $ = (e) => {
          let {
              cachedCharactersByFeatured: t,
              cachedCharactersByMarket: s,
              cachedCharactersByRoleplay: d,
            } = e,
            { isAuthReady: c, isAuthenticated: o } = (0, i.a)(),
            x = (0, r.useRef)(null),
            m = (0, M.Z)();
          return (
            (0, r.useEffect)(() => {
              if (c || !o) return;
            }, [c, o]),
            (0, a.jsx)("div", {
              className: "h-screen w-full dark:bg-black",
              children: (0, a.jsxs)("div", {
                ref: x,
                className: "relative h-full w-full bg-cover bg-no-repeat",
                children: [
                  (0, a.jsx)(l.Z, {}),
                  (0, a.jsx)(n.Z, {}),
                  (0, a.jsx)("div", {
                    className:
                      "mt-[52px] flex h-full w-full justify-center md:absolute md:mt-0 md:justify-normal md:pl-14 md:pt-14",
                    children: (0, a.jsx)("div", {
                      className: "".concat(
                        m
                          ? "flex w-full flex-col items-center"
                          : "flex w-full flex-col"
                      ),
                      children: (0, a.jsx)(K, {
                        cachedCharactersByFeatured: t,
                        cachedCharactersByMarket: s,
                        cachedCharactersByRoleplay: d,
                      }),
                    }),
                  }),
                ],
              }),
            })
          );
        };
    },
    91516: function (e, t, s) {
      "use strict";
      s.d(t, {
        g: function () {
          return a;
        },
      });
      let a = (0, s(24278).I)({
        d: "M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z",
        displayName: "ChevronUpIcon",
      });
    },
    45366: function (e, t, s) {
      "use strict";
      s.d(t, {
        G: function () {
          return a;
        },
      });
      let a = (0, s(24278).I)({
        d: "M23.414,20.591l-4.645-4.645a10.256,10.256,0,1,0-2.828,2.829l4.645,4.644a2.025,2.025,0,0,0,2.828,0A2,2,0,0,0,23.414,20.591ZM10.25,3.005A7.25,7.25,0,1,1,3,10.255,7.258,7.258,0,0,1,10.25,3.005Z",
        displayName: "Search2Icon",
      });
    },
  },
  function (e) {
    e.O(
      0,
      [6047, 3464, 9626, 4175, 8427, 209, 6867, 2888, 9774, 179],
      function () {
        return e((e.s = 48312));
      }
    ),
      (_N_E = e.O());
  },
]);
