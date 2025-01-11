(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2600],
  {
    38588: function (e, t, l) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/chat/[[...character_id]]",
        function () {
          return l(60857);
        },
      ]);
    },
    11206: function (e, t, l) {
      "use strict";
      l.d(t, {
        w_: function () {
          return o;
        },
      });
      var r = l(67294),
        s = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        a = r.createContext && r.createContext(s),
        n = function () {
          return (n =
            Object.assign ||
            function (e) {
              for (var t, l = 1, r = arguments.length; l < r; l++)
                for (var s in (t = arguments[l]))
                  Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
              return e;
            }).apply(this, arguments);
        },
        i = function (e, t) {
          var l = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              0 > t.indexOf(r) &&
              (l[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var s = 0, r = Object.getOwnPropertySymbols(e);
              s < r.length;
              s++
            )
              0 > t.indexOf(r[s]) &&
                Object.prototype.propertyIsEnumerable.call(e, r[s]) &&
                (l[r[s]] = e[r[s]]);
          return l;
        };
      function o(e) {
        return function (t) {
          return r.createElement(
            c,
            n({ attr: n({}, e.attr) }, t),
            (function e(t) {
              return (
                t &&
                t.map(function (t, l) {
                  return r.createElement(
                    t.tag,
                    n({ key: l }, t.attr),
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
          var l,
            s = e.attr,
            a = e.size,
            o = e.title,
            c = i(e, ["attr", "size", "title"]),
            d = a || t.size || "1em";
          return (
            t.className && (l = t.className),
            e.className && (l = (l ? l + " " : "") + e.className),
            r.createElement(
              "svg",
              n(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                t.attr,
                s,
                c,
                {
                  className: l,
                  style: n(n({ color: e.color || t.color }, t.style), e.style),
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
        return void 0 !== a
          ? r.createElement(a.Consumer, null, function (e) {
              return t(e);
            })
          : t(s);
      }
    },
    81069: function (e, t, l) {
      "use strict";
      l.d(t, {
        X: function () {
          return s;
        },
      });
      var r = l(85893);
      let s = (0, l(24278).I)({
        displayName: "ChatHistory-Icon",
        viewBox: "0 0 36 36",
        path: (0, r.jsx)("path", {
          d: "M20.15 0.100098C19.3146 0.100098 18.5134 0.431972 17.9226 1.02271C17.3319 1.61345 17 2.41467 17 3.2501V13.7501C17 14.5855 17.3319 15.3867 17.9226 15.9775C18.5134 16.5682 19.3146 16.9001 20.15 16.9001H32.75C33.5854 16.9001 34.3867 16.5682 34.9774 15.9775C35.5681 15.3867 35.9 14.5855 35.9 13.7501V3.2501C35.9 2.41467 35.5681 1.61345 34.9774 1.02271C34.3867 0.431972 33.5854 0.100098 32.75 0.100098H20.15ZM22.25 10.6001H30.65C30.9285 10.6001 31.1956 10.7107 31.3925 10.9076C31.5894 11.1045 31.7 11.3716 31.7 11.6501C31.7 11.9286 31.5894 12.1956 31.3925 12.3926C31.1956 12.5895 30.9285 12.7001 30.65 12.7001H22.25C21.9715 12.7001 21.7045 12.5895 21.5075 12.3926C21.3106 12.1956 21.2 11.9286 21.2 11.6501C21.2 11.3716 21.3106 11.1045 21.5075 10.9076C21.7045 10.7107 21.9715 10.6001 22.25 10.6001ZM21.2 5.3501C21.2 5.07162 21.3106 4.80455 21.5075 4.60764C21.7045 4.41072 21.9715 4.3001 22.25 4.3001H30.65C30.9285 4.3001 31.1956 4.41072 31.3925 4.60764C31.5894 4.80455 31.7 5.07162 31.7 5.3501C31.7 5.62857 31.5894 5.89565 31.3925 6.09256C31.1956 6.28947 30.9285 6.4001 30.65 6.4001H22.25C21.9715 6.4001 21.7045 6.28947 21.5075 6.09256C21.3106 5.89565 21.2 5.62857 21.2 5.3501ZM5.66001 4.3001H14.9V6.4001H5.66001C3.77841 6.4001 2.30001 7.8974 2.30001 9.6887V23.7797C2.30001 25.571 3.77841 27.0683 5.66001 27.0683H9.02001V33.7001H9.02631L9.03051 33.698L18.0101 27.0683H28.34C30.2216 27.0683 31.7 25.571 31.7 23.7797V19.0001H32.75C33.1091 19.0001 33.4598 18.9644 33.8 18.8951V23.7797C33.8 26.7575 31.3556 29.1683 28.34 29.1683H18.701L10.2779 35.3864C9.83087 35.7159 9.27231 35.8568 8.72246 35.7786C8.17261 35.7005 7.67542 35.4096 7.33791 34.9685C7.06735 34.6121 6.92061 34.177 6.92001 33.7295V29.1683H5.66001C2.64441 29.1683 0.200012 26.7554 0.200012 23.7797V9.6887C0.200012 6.713 2.64441 4.3001 5.66001 4.3001Z",
          fill: "currentColor",
        }),
      });
    },
    43952: function (e, t, l) {
      "use strict";
      var r = l(85893),
        s = l(39879);
      l(67294),
        (t.Z = (e) => {
          let { isOpen: t } = e;
          return (0, r.jsx)("div", {
            className: t
              ? "flex inset-0 items-center justify-center select-none absolute w-full"
              : "hidden ",
            children: (0, r.jsx)("div", {
              className: t ? "  " : "hidden",
              children: (0, r.jsx)(s.J5, {
                src: "https://hologramxyz.s3.amazonaws.com/assets/lotties/holo-loading.json",
                loop: !0,
                autoplay: !0,
                className: "h-[100px] w-[100px]",
              }),
            }),
          });
        });
    },
    11225: function (e, t, l) {
      "use strict";
      var r = l(85893),
        s = l(93967),
        a = l.n(s),
        n = l(67294),
        i = l(32761),
        o = l(34011);
      t.Z = (e) => {
        let {
            name: t,
            isSelected: l,
            imageURL: s,
            onSelect: c,
            size: d,
            borderRadius: u,
            disabled: x,
            darkMode: h,
            darkText: m,
            showName: p = !0,
            customStyle: v,
          } = e,
          [f, g] = (0, n.useState)(null != l && l),
          [b, y] = (0, n.useState)(!0),
          j = (0, o.Z)();
        return (
          (0, n.useEffect)(() => {
            void 0 !== l && g(l);
          }, [l]),
          (0, r.jsxs)("div", {
            className: a()(
              "sm" === d
                ? "w-[50px]"
                : "xs" === d
                ? "w-[60px]"
                : "mid" === d
                ? "w-[80px]"
                : "md" === d
                ? "w-[100px]"
                : "lg" === d
                ? "w-[140px]"
                : "w-full"
            ),
            children: [
              (0, r.jsxs)("div", {
                className: a()(
                  "group relative select-none rounded-2xl",
                  "sm" === d
                    ? "h-[50px] w-[50px]"
                    : "xs" === d
                    ? "h-[60px] w-[60px]"
                    : "mid" === d
                    ? "h-[80px] w-[80px]"
                    : "md" === d
                    ? "h-[100px] w-[100px]"
                    : "lg" === d
                    ? "h-[140px] w-[140px]"
                    : "w-full",
                  b ? "block" : "hidden",
                  x ? "cursor-default opacity-30" : "cursor-pointer opacity-100"
                ),
                onClick: (e) => {
                  x || c(e);
                },
                children: [
                  s
                    ? (0, r.jsx)(i.E, {
                        objectFit: "cover",
                        src: s,
                        borderRadius: null != u ? u : 16,
                        border: j && l && "1px solid #DAFF80",
                        width:
                          "sm" === d
                            ? "50px"
                            : "sx" === d
                            ? "60px"
                            : "mid" === d
                            ? "80px"
                            : "md" === d
                            ? "100px"
                            : "lg" === d
                            ? "140px"
                            : "100%",
                        height:
                          "sm" === d
                            ? "50px"
                            : "xs" === d
                            ? "60px"
                            : "mid" === d
                            ? "80px"
                            : "md" === d
                            ? "100px"
                            : "lg" === d
                            ? "140px"
                            : "190px",
                        alt: "nft",
                        onError: (e) => {
                          (e.target.style.display = "none"), y(!1);
                        },
                        className: a()(
                          "bg-whiteAlpha-50 object-cover backdrop-blur-xl",
                          v
                        ),
                      })
                    : (0, r.jsx)("div", {
                        className: a()(
                          "bg-whiteAlpha-50 backdrop-blur-xl",
                          "sm" === d
                            ? "h-[50px] w-[50px]"
                            : "xs" === d
                            ? "h-[60px] w-[60px]"
                            : "mid" === d
                            ? "h-[80px] w-[80px]"
                            : "md" === d
                            ? "h-[100px] w-[100px]"
                            : "h-[140px] w-[140px]"
                        ),
                      }),
                  !j &&
                    !x &&
                    (0, r.jsx)("div", {
                      className:
                        "absolute bottom-0 left-0 right-0 top-0 group-hover:rounded-2xl group-hover:shadow-[0px_0px_30px_0px_#DAFF80_inset] group-hover:ring-1 group-hover:ring-hg-lime",
                    }),
                  (0, r.jsx)("div", {
                    className: a()(
                      "pointer-events-none absolute bottom-0 left-0 right-0 top-0 ".concat(
                        j ? " border" : " border-2",
                        "  rounded-2xl border-hg-lime shadow-[0px_0px_20px_0px_#DAFF80_inset]"
                      ),
                      f
                        ? "opacity-100 transition duration-300 ease-in-out"
                        : "opacity-0"
                    ),
                  }),
                  (0, r.jsx)("div", {
                    className: a()(
                      "pointer-events-none absolute -left-[3px] -top-[3px] scale-100 rounded-tl-2xl border-primary-default",
                      j
                        ? "border-l-[5px] border-t-[5px]"
                        : "border-l-8 border-t-8 ",
                      f
                        ? "scale-100 opacity-100 transition duration-300 ease-in-out"
                        : "scale-[3] opacity-0",
                      "sm" === d ? "h-[20px] w-[20px]" : "h-[25px] w-[25px]"
                    ),
                  }),
                  (0, r.jsx)("div", {
                    className: a()(
                      "pointer-events-none  absolute -right-[3px] -top-[3px] rounded-tr-2xl border-primary-default",
                      j
                        ? "border-r-[5px] border-t-[5px] "
                        : "border-r-8 border-t-8 ",
                      f
                        ? "scale-100 opacity-100 transition duration-300 ease-in-out"
                        : "scale-[3] opacity-0",
                      "sm" === d ? "h-[20px] w-[20px]" : "h-[25px] w-[25px]"
                    ),
                  }),
                  (0, r.jsx)("div", {
                    className: a()(
                      "pointer-events-none   absolute -bottom-[3px] -left-[3px] rounded-bl-2xl border-primary-default",
                      j
                        ? "border-b-[5px] border-l-[5px] "
                        : "border-b-8 border-l-8 ",
                      f
                        ? "scale-100 opacity-100 transition duration-300 ease-in-out"
                        : "scale-[3] opacity-0",
                      "sm" === d ? "h-[20px] w-[20px]" : "h-[25px] w-[25px]"
                    ),
                  }),
                  (0, r.jsx)("div", {
                    className: a()(
                      "pointer-events-none  absolute -bottom-[3px] -right-[3px] rounded-br-2xl border-primary-default",
                      j
                        ? "border-b-[5px] border-r-[5px] "
                        : "border-b-8 border-r-8 ",
                      f
                        ? "scale-100 opacity-100 transition duration-300 ease-in-out"
                        : "scale-[3] opacity-0",
                      "sm" === d ? "h-[20px] w-[20px]" : "h-[25px] w-[25px]"
                    ),
                  }),
                ],
              }),
              p &&
                (0, r.jsx)("p", {
                  className: a()({
                    "mt-2 select-none overflow-hidden truncate text-ellipsis whitespace-nowrap text-center dark:text-secondary-200":
                      !0,
                    "subheading-sm-xsss": "mid" === d,
                    "subheading-sm-xss": "sm" === d,
                    "subheading-sm-xs": "sm" !== d,
                    "text-white": h || !m,
                    "text-black": !h || m,
                  }),
                  children: t,
                }),
            ],
          })
        );
      };
    },
    60857: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return B;
          },
        });
      var r = l(85893),
        s = l(67294),
        a = l(48427),
        n = l(60209),
        i = l(92544),
        o = l(99319),
        c = l(21003),
        d = l(11163),
        u = l(93967),
        x = l.n(u),
        h = l(86523),
        m = l(58484),
        p = l(44175),
        v = (e) => {
          let { isOpen: t, onClose: l } = e,
            [a, n] = (0, s.useState)(!1),
            [i, o] = (0, s.useState)(5),
            c = (0, d.useRouter)();
          (0, s.useEffect)(() => {
            n(!0);
          }, []),
            (0, s.useEffect)(() => {
              let e;
              return (
                t && i > 0
                  ? (e = setTimeout(() => o(i - 1), 1e3))
                  : t && 0 === i
                  ? (c.push("/"), l())
                  : t || o(5),
                () => clearTimeout(e)
              );
            }, [t, i, l, c]);
          let u = () => {
            l(), c.push("/");
          };
          return (0, r.jsx)(m.Z, {
            show: t,
            onClose: u,
            width: "lg",
            children: (0, r.jsxs)("div", {
              className: x()(
                "overflow-hidden rounded-[16px] bg-black transition duration-300",
                a ? "opacity-100" : "opacity-0"
              ),
              children: [
                (0, r.jsx)("button", {
                  className: x()(
                    "absolute right-5 top-5 h-[40px] w-[40px] rounded-full p-0 text-secondary-200 transition duration-300 hover:bg-black/20",
                    a ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                  ),
                  onClick: u,
                  children: (0, r.jsx)(h.T, {}),
                }),
                (0, r.jsxs)("div", {
                  className: "px-9 pb-[48px] pt-[64px] text-center text-white",
                  children: [
                    (0, r.jsx)("div", {
                      className: "flex w-full items-center justify-center",
                      children: (0, r.jsx)(p.WarningSolidIcon, {
                        className: "h-9 w-9",
                      }),
                    }),
                    (0, r.jsxs)("div", {
                      className: x()(
                        "transition duration-300",
                        a
                          ? "-translate-y-0 opacity-100"
                          : "translate-y-4 opacity-0"
                      ),
                      children: [
                        (0, r.jsx)("div", {
                          className: "mt-3 flex items-center justify-center",
                          children: (0, r.jsx)("h4", {
                            className: "subheading-lg-lg",
                            children: "The Character is not Accessible",
                          }),
                        }),
                        (0, r.jsx)("p", {
                          className:
                            "mb-9 mt-2 font-avenir text-[14px] font-medium text-secondary-400",
                          children:
                            "Private characters are exclusively accessible to their owners. Others lack the authority to use the character under any circumstances. Feel free to explore more public characters on our site!",
                        }),
                      ],
                    }),
                    (0, r.jsxs)("button", {
                      className: x()(
                        "subheading-lg-md flex w-full cursor-pointer items-center justify-center rounded-full bg-primary-300 py-3 uppercase text-gray-800 ring-1 ring-gray-800 transition delay-75 duration-300 hover:bg-opacity-90 hover:ring-2",
                        a
                          ? "-translate-y-0 opacity-100"
                          : "translate-y-4 opacity-0"
                      ),
                      onClick: u,
                      children: [
                        "GOT IT",
                        " ",
                        i > 0 &&
                          (0, r.jsxs)("span", {
                            className: "ml-2 lowercase",
                            children: ["(", i, "s)"],
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        f = l(8559),
        g = l(36641),
        b = l(45366),
        y = (e) => {
          let {
              recentChats: t,
              selectedChat: l,
              onSelectChat: a,
              onNewChat: n,
            } = e,
            [i, o] = (0, s.useState)(""),
            c = (e) => {
              let t = new Date(),
                l = Math.floor((t.getTime() - e.getTime()) / 1e3);
              return l < 30
                ? "Just now"
                : l < 60
                ? "".concat(l, "s")
                : l < 3600
                ? "".concat(Math.floor(l / 60), "m")
                : l < 86400
                ? "".concat(Math.floor(l / 3600), "h")
                : l < 691200
                ? "".concat(Math.floor(l / 86400), "d")
                : e.getFullYear() === t.getFullYear()
                ? e.toLocaleString("default", {
                    month: "short",
                    day: "numeric",
                  })
                : e.toLocaleString("default", {
                    month: "2-digit",
                    day: "2-digit",
                    year: "numeric",
                  });
            },
            d =
              null == t
                ? void 0
                : t
                    .filter((e) =>
                      e.character.name.toLowerCase().includes(i.toLowerCase())
                    )
                    .map((e, t) => {
                      var s, n;
                      let i = c(new Date(null == e ? void 0 : e.updatedAt));
                      return (0, r.jsxs)(
                        "div",
                        {
                          className: x()({
                            "flex w-full cursor-pointer justify-start gap-3 rounded-lg p-3 hover:bg-whiteAlpha-100":
                              !0,
                            "md:bg-whiteAlpha-100":
                              e.chatHistoryId ===
                              (null == l ? void 0 : l.chatHistoryId),
                          }),
                          onClick: () => a(e),
                          children: [
                            (0, r.jsx)("div", {
                              className:
                                "flex h-[50px] w-[50px] items-center justify-center",
                              children: (0, r.jsx)("img", {
                                src: e.character.brain.image,
                                alt: "chat image",
                                className: x()(
                                  "h-10 w-10 rounded-full object-cover",
                                  e === l && "object-cover"
                                ),
                              }),
                            }),
                            (0, r.jsxs)("div", {
                              className:
                                "flex w-full flex-col justify-center overflow-x-hidden overflow-ellipsis",
                              children: [
                                (0, r.jsxs)("div", {
                                  className:
                                    "flex w-full items-center justify-between",
                                  children: [
                                    (0, r.jsx)("div", {
                                      className:
                                        "subheading-sm-sm flex items-center text-white",
                                      children: (0, r.jsx)("span", {
                                        className:
                                          "inline-block max-w-[220px] truncate md:max-w-[200px]",
                                        children: e.character.name,
                                      }),
                                    }),
                                    (0, r.jsx)("div", {
                                      className:
                                        "body-text-xs text-secondary-400",
                                      children: i,
                                    }),
                                  ],
                                }),
                                e.messages &&
                                  (0, r.jsx)("div", {
                                    className:
                                      "body-text-default truncate overflow-ellipsis text-start text-secondary-400",
                                    children:
                                      null ===
                                        (n =
                                          e.messages[
                                            (null === (s = e.messages) ||
                                            void 0 === s
                                              ? void 0
                                              : s.length) - 1
                                          ]) || void 0 === n
                                        ? void 0
                                        : n.content,
                                  }),
                              ],
                            }),
                          ],
                        },
                        e.updatedAt + t
                      );
                    });
          return (0, r.jsxs)("div", {
            className: "h-full bg-blackAlpha-50 p-6",
            children: [
              (0, r.jsxs)("div", {
                className: "mb-3 flex justify-between",
                children: [
                  (0, r.jsx)("p", {
                    className: "heading-sm-xl text-gray-700",
                    children: (0, r.jsx)("span", {
                      style: {
                        WebkitTextStroke: "1px #A2B6C5",
                        color: "transparent",
                      },
                      children: "Chat.",
                    }),
                  }),
                  (0, r.jsx)("button", {
                    // onClick: n,
                    children: (0, r.jsx)(p.CreatePlusOutlineIcon, {
                      className: "text-secondary-200",
                    }),
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className:
                  "relative mb-3 rounded-lg border border-whiteAlpha-200 bg-blackAlpha-500 px-3",
                children: [
                  (0, r.jsx)(b.G, {
                    className:
                      "absolute left-3 top-1/2 h-7 w-7 -translate-y-1/2 transform !text-secondary-200",
                  }),
                  (0, r.jsx)("input", {
                    className:
                      "body-text-default w-full bg-transparent py-3 pl-6 text-secondary-200 outline-none placeholder:text-secondary-400",
                    placeholder: "Search Here",
                    onChange: (e) => o(e.target.value),
                  }),
                ],
              }),
              (0, r.jsx)("div", {
                className:
                  "hide-scrollbar flex h-full flex-col gap-2 overflow-y-scroll pb-[100px]",
                children: d,
              }),
            ],
          });
        },
        j = l(47817),
        w = l(70386),
        N = l(90354),
        k = l(27076),
        C = l(48204),
        S = l(25675),
        I = l.n(S),
        A = (e) => {
          var t, l, s, a;
          let { character: n } = e,
            i = (0, d.useRouter)();
          return (0, r.jsxs)("button", {
            onClick: (e) => {
              var t;
              e.preventDefault(),
                (null == n ? void 0 : n.ownerId) &&
                  i.push(
                    "/@".concat(
                      null === (t = null == n ? void 0 : n.owner) ||
                        void 0 === t
                        ? void 0
                        : t.username
                    )
                  );
            },
            className:
              " flex max-w-fit items-center justify-start space-x-1 rounded-[6px] bg-black/[0.04] px-1 ring-1 ring-secondary-300 hover:bg-black/[0.1] hover:ring-secondary-400 dark:bg-blackAlpha-200 dark:ring-whiteAlpha-400",
            children: [
              (0, g.Mh)(n) && !(0, g.nE)(n)
                ? (0, r.jsx)("img", {
                    src: "/img/twitter-logo.png",
                    alt: "twitter-logo",
                    className: "h-4 w-4 overflow-hidden rounded-md",
                  })
                : (!(0, g.Mh)(n) || (0, g.nE)(n)) &&
                  (0, r.jsx)(I(), {
                    src:
                      null === (t = null == n ? void 0 : n.owner) ||
                      void 0 === t
                        ? void 0
                        : t.image,
                    width: 16,
                    height: 16,
                    className: "rounded-full",
                    alt:
                      null !==
                        (s =
                          null === (l = null == n ? void 0 : n.owner) ||
                          void 0 === l
                            ? void 0
                            : l.username) && void 0 !== s
                        ? s
                        : "Owner profile picture",
                  }),
              (0, r.jsx)("p", {
                className:
                  "subheading-sm-xss overflow-hidden truncate text-secondary-default dark:text-secondary-200",
                children:
                  (0, g.Mh)(n) && !(0, g.nE)(n)
                    ? "unclaimed"
                    : "@" +
                      (null === (a = null == n ? void 0 : n.owner) ||
                      void 0 === a
                        ? void 0
                        : a.username),
              }),
            ],
          });
        },
        H = l(98734),
        _ = l(22424),
        E = l(88148),
        O = (e) => {
          var t,
            l,
            a,
            n,
            i,
            o,
            c,
            u,
            h,
            m,
            v,
            f,
            g,
            b,
            y,
            j,
            w,
            N,
            S,
            I,
            O,
            T,
            F,
            M,
            D,
            z,
            P,
            L,
            R;
          let { user: Z, character: $, userCard: V, setUserCard: B } = e,
            U = (0, d.useRouter)(),
            [G, Y] = (0, s.useState)({
              basicInfo: !0,
              skill: !1,
              scenario: !1,
              userPersona: !0,
            }),
            q = (e) => {
              Y((t) => Object.assign(Object.assign({}, t), { [e]: !t[e] }));
            };
          return (
            (0, s.useEffect)(() => {
              var e;
              (null === (e = null == $ ? void 0 : $.brain) || void 0 === e
                ? void 0
                : e.scenario) &&
                !G.scenario &&
                q("scenario");
            }, []),
            (0, r.jsxs)("div", {
              className:
                "hide-scrollbar h-full w-full overflow-hidden overflow-y-auto pt-4 md:pt-6",
              children: [
                (0, r.jsxs)("div", {
                  className: "mb-7 flex w-full gap-4 px-4",
                  children: [
                    (0, r.jsx)("img", {
                      src:
                        null === (t = null == $ ? void 0 : $.brain) ||
                        void 0 === t
                          ? void 0
                          : t.image,
                      alt: "character image",
                      className:
                        "aspect-square h-[72px] w-[72px] cursor-pointer rounded-xl object-cover",
                      onClick: () =>
                        U.push("/c/".concat(null == $ ? void 0 : $.id)),
                    }),
                    (0, r.jsx)("div", {
                      className: "flex w-full",
                      children: (0, r.jsxs)("div", {
                        className: "flex w-full flex-col justify-between",
                        children: [
                          (0, r.jsxs)("div", {
                            className:
                              "flex max-w-full items-center justify-between",
                            children: [
                              (0, r.jsx)("div", {
                                className:
                                  "subheading-lg-md max-w-[250px] overflow-hidden truncate overflow-ellipsis whitespace-nowrap text-white",
                                children: null == $ ? void 0 : $.name,
                              }),
                              $.ownerId === (null == Z ? void 0 : Z.id) &&
                                (0, r.jsx)("button", {
                                  className: "flex shrink-0",
                                  onClick: () =>
                                    U.push(
                                      "/edit/"
                                        .concat($.id, "?redirectUrl=")
                                        .concat(
                                          encodeURIComponent(
                                            "/chat/".concat($.id)
                                          )
                                        )
                                    ),
                                  children: (0, r.jsx)(p.EditSolidIcon, {
                                    className: "h-3 w-3 text-secondary-200",
                                  }),
                                }),
                            ],
                          }),
                          (0, r.jsxs)("div", {
                            className: "flex items-center gap-1",
                            children: [
                              (0, r.jsx)(p.ChatIcon, {
                                className: "h-4 w-4 text-secondary-200",
                              }),
                              (0, r.jsx)("div", {
                                className:
                                  "subheading-lg-xss text-secondary-200",
                                children: $ ? (0, k.pw)($.chatsCount) : "0",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "mt-6 w-full rounded-xl",
                  children: [
                    (0, r.jsxs)("div", {
                      className:
                        "mb-0.5 w-full border-b border-t border-bordergray px-4",
                      children: [
                        (0, r.jsxs)("button", {
                          className:
                            "flex w-full items-center justify-between py-3",
                          onClick: () => q("basicInfo"),
                          children: [
                            (0, r.jsx)("span", {
                              className: "subheading-lg-sm text-white",
                              children: "Basic Information",
                            }),
                            (0, r.jsx)(C.v, {
                              width: 5,
                              height: 5,
                              color: "white",
                              className: "transition-transform ".concat(
                                G.basicInfo ? "rotate-180 transform" : ""
                              ),
                            }),
                          ],
                        }),
                        G.basicInfo &&
                          (0, r.jsxs)("div", {
                            className: "flex flex-col gap-4 pb-4",
                            children: [
                              (0, r.jsx)("div", {
                                className: "flex flex-wrap gap-2",
                                children:
                                  null ===
                                    (l = (0, k.EZ)(
                                      null == $ ? void 0 : $.tags
                                    )) || void 0 === l
                                    ? void 0
                                    : l.map((e, t) =>
                                        (0, r.jsx)(
                                          "div",
                                          {
                                            className:
                                              "subheading-sm-xss rounded-[100px] bg-blackAlpha-600 px-2 py-1 text-secondary-200",
                                            children: e,
                                          },
                                          t
                                        )
                                      ),
                              }),
                              (0, r.jsxs)("div", {
                                className: "flex flex-col gap-1",
                                children: [
                                  (0, r.jsx)("div", {
                                    className:
                                      "heading-sm-xsss uppercase text-secondary-200",
                                    children: "bio",
                                  }),
                                  (0, r.jsx)("div", {
                                    className:
                                      "body-text-sm text-secondary-300",
                                    children:
                                      null == $ ? void 0 : $.brain.shortBio,
                                  }),
                                ],
                              }),
                              (0, r.jsxs)("div", {
                                className: "flex flex-col gap-1",
                                children: [
                                  (0, r.jsx)("div", {
                                    className:
                                      "heading-sm-xsss uppercase text-secondary-200",
                                    children: "Created By",
                                  }),
                                  (0, r.jsx)(A, { character: $ }),
                                ],
                              }),
                              (!(null === (a = null == $ ? void 0 : $.token) ||
                              void 0 === a
                                ? void 0
                                : a.twitter) ||
                                !(null === (n = null == $ ? void 0 : $.token) ||
                                void 0 === n
                                  ? void 0
                                  : n.telegram) ||
                                !(null === (i = null == $ ? void 0 : $.token) ||
                                void 0 === i
                                  ? void 0
                                  : i.discord) ||
                                !(null === (o = null == $ ? void 0 : $.token) ||
                                void 0 === o
                                  ? void 0
                                  : o.website)) &&
                                (0, r.jsxs)("div", {
                                  className: "flex flex-col gap-2",
                                  children: [
                                    (0, r.jsx)("div", {
                                      className:
                                        "heading-sm-xsss uppercase text-secondary-200",
                                      children: "Socials",
                                    }),
                                    (0, r.jsxs)("div", {
                                      className: "flex gap-4",
                                      children: [
                                        (null ===
                                          (c = null == $ ? void 0 : $.token) ||
                                        void 0 === c
                                          ? void 0
                                          : c.twitter) &&
                                          (0, r.jsx)("a", {
                                            href: $.token.twitter,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className:
                                              "flex items-center justify-center",
                                            children: (0, r.jsx)("div", {
                                              className:
                                                "rounded-sm text-secondary-200",
                                              children: (0, r.jsx)(p.XIcon, {
                                                className: "h-6 w-6",
                                              }),
                                            }),
                                          }),
                                        (null ===
                                          (u = null == $ ? void 0 : $.token) ||
                                        void 0 === u
                                          ? void 0
                                          : u.telegram) &&
                                          (0, r.jsx)("a", {
                                            href:
                                              null ===
                                                (h =
                                                  null == $
                                                    ? void 0
                                                    : $.token) || void 0 === h
                                                ? void 0
                                                : h.telegram,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className:
                                              "flex items-center justify-center",
                                            children: (0, r.jsx)(
                                              p.TelegramIcon,
                                              {
                                                className:
                                                  "h-6 w-6 text-secondary-200",
                                              }
                                            ),
                                          }),
                                        (null ===
                                          (m = null == $ ? void 0 : $.token) ||
                                        void 0 === m
                                          ? void 0
                                          : m.discord) &&
                                          (0, r.jsx)("a", {
                                            href:
                                              null ===
                                                (v =
                                                  null == $
                                                    ? void 0
                                                    : $.token) || void 0 === v
                                                ? void 0
                                                : v.discord,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className:
                                              "flex items-center justify-center",
                                            children: (0, r.jsx)(
                                              p.DiscordIcon,
                                              {
                                                className:
                                                  "h-6 w-6 text-secondary-200",
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
                    (0, r.jsxs)("div", {
                      className:
                        "mb-0.5 w-full border-b border-bordergray px-4",
                      children: [
                        (0, r.jsxs)("button", {
                          className: x()(
                            "flex w-full items-center justify-between py-3",
                            {
                              "cursor-not-allowed opacity-50":
                                !(null === (f = null == $ ? void 0 : $.brain) ||
                                void 0 === f
                                  ? void 0
                                  : f.skills) ||
                                (null === (g = null == $ ? void 0 : $.brain) ||
                                void 0 === g
                                  ? void 0
                                  : g.skills.length) === 0,
                            }
                          ),
                          onClick: () => q("skill"),
                          disabled:
                            !(null === (b = null == $ ? void 0 : $.brain) ||
                            void 0 === b
                              ? void 0
                              : b.skills) ||
                            (null === (y = null == $ ? void 0 : $.brain) ||
                            void 0 === y
                              ? void 0
                              : y.skills.length) === 0,
                          children: [
                            (0, r.jsx)("span", {
                              className: "subheading-lg-sm text-white",
                              children: "Skills",
                            }),
                            (0, r.jsx)(C.v, {
                              width: 5,
                              height: 5,
                              color: "white",
                              className: "transition-transform ".concat(
                                G.skill ? "rotate-180 transform" : ""
                              ),
                            }),
                          ],
                        }),
                        G.skill &&
                          (0, r.jsx)("div", {
                            className: x()(
                              "flex flex-col gap-4 pb-4 transition-all duration-300 ease-in-out",
                              {
                                "max-h-[1000px] opacity-100": !0 === G.skill,
                                "max-h-0 overflow-hidden opacity-0": !G.skill,
                              }
                            ),
                            children:
                              null ===
                                (w =
                                  null === (j = null == $ ? void 0 : $.brain) ||
                                  void 0 === j
                                    ? void 0
                                    : j.skills) || void 0 === w
                                ? void 0
                                : w.map((e, t) => {
                                    let l = E.N[e];
                                    return (0, r.jsxs)(
                                      "div",
                                      {
                                        className: "flex items-start",
                                        children: [
                                          l &&
                                            (0, r.jsx)("img", {
                                              src: l.icon,
                                              alt: e,
                                              className: "mr-2 h-5 w-5",
                                            }),
                                          (0, r.jsxs)("div", {
                                            className: "flex flex-col",
                                            children: [
                                              (0, r.jsx)("span", {
                                                className:
                                                  "subheading-lg-xs mb-1 text-secondary-200",
                                                children: l.name,
                                              }),
                                              (0, r.jsx)("div", {
                                                className:
                                                  "body-text-sm mb-2 text-secondary-400",
                                                children:
                                                  null == l
                                                    ? void 0
                                                    : l.description,
                                              }),
                                              (0, r.jsx)("div", {
                                                className:
                                                  "subheading-sm-xss mb-1 text-secondary-200",
                                                children: "Example Dialog",
                                              }),
                                              (0, r.jsx)("div", {
                                                className:
                                                  "body-text-sm no-scrollbar max-h-[120px] overflow-y-scroll rounded-bl-lg rounded-br-lg rounded-tr-lg",
                                                children: l.exampleDialogue,
                                              }),
                                            ],
                                          }),
                                        ],
                                      },
                                      t
                                    );
                                  }),
                          }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: "w-full border-b border-bordergray px-4",
                      children: [
                        (0, r.jsxs)("button", {
                          className: x()(
                            "flex w-full items-center justify-between py-3",
                            {
                              "cursor-not-allowed opacity-50": !(null ===
                                (S =
                                  null === (N = null == $ ? void 0 : $.brain) ||
                                  void 0 === N
                                    ? void 0
                                    : N.scenario) || void 0 === S
                                ? void 0
                                : S.description),
                            }
                          ),
                          onClick: () => q("scenario"),
                          disabled: !(null ===
                            (O =
                              null === (I = null == $ ? void 0 : $.brain) ||
                              void 0 === I
                                ? void 0
                                : I.scenario) || void 0 === O
                            ? void 0
                            : O.description),
                          children: [
                            (0, r.jsx)("span", {
                              className: "subheading-lg-sm text-white",
                              children: "Scenario",
                            }),
                            (0, r.jsx)(C.v, {
                              width: 5,
                              height: 5,
                              color: "white",
                              className: "transition-transform ".concat(
                                G.scenario ? "rotate-180 transform" : ""
                              ),
                            }),
                          ],
                        }),
                        G.scenario &&
                          (0, r.jsxs)("div", {
                            className: "flex flex-col items-center gap-3 pb-4",
                            children: [
                              (null ===
                                (F =
                                  null === (T = null == $ ? void 0 : $.brain) ||
                                  void 0 === T
                                    ? void 0
                                    : T.scenario) || void 0 === F
                                ? void 0
                                : F.image) &&
                                (0, r.jsx)("img", {
                                  src:
                                    null ===
                                      (D =
                                        null ===
                                          (M = null == $ ? void 0 : $.brain) ||
                                        void 0 === M
                                          ? void 0
                                          : M.scenario) || void 0 === D
                                      ? void 0
                                      : D.image,
                                  alt: "scenario",
                                  className: "h-[90px] rounded-xl object-cover",
                                }),
                              (null ===
                                (P =
                                  null === (z = null == $ ? void 0 : $.brain) ||
                                  void 0 === z
                                    ? void 0
                                    : z.scenario) || void 0 === P
                                ? void 0
                                : P.description) &&
                                (0, r.jsx)("div", {
                                  className: "body-text-sm text-secondary-500",
                                  children: (0, r.jsx)("div", {
                                    dangerouslySetInnerHTML: {
                                      __html: _.Z.sanitize(
                                        (0, H.eh)({
                                          prompt:
                                            null ===
                                              (R =
                                                null ===
                                                  (L =
                                                    null == $
                                                      ? void 0
                                                      : $.brain) || void 0 === L
                                                  ? void 0
                                                  : L.scenario) || void 0 === R
                                              ? void 0
                                              : R.description,
                                          characterName: $.conversationName,
                                          username: V.name,
                                        })
                                      ),
                                    },
                                  }),
                                }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className: "mb-4 w-full px-4",
                  children: (0, r.jsxs)("div", {
                    className: "mb-0.5 w-full rounded-xl",
                    children: [
                      (0, r.jsxs)("button", {
                        className:
                          "flex w-full items-center justify-between py-3",
                        onClick: () => q("userPersona"),
                        children: [
                          (0, r.jsx)("span", {
                            className: "subheading-lg-sm text-white",
                            children: "User card",
                          }),
                          (0, r.jsx)(C.v, {
                            width: 5,
                            height: 5,
                            color: "white",
                            className: "transition-transform ".concat(
                              G.userPersona ? "rotate-180 transform" : ""
                            ),
                          }),
                        ],
                      }),
                      G.userPersona &&
                        (0, r.jsxs)("div", {
                          className: "flex flex-col gap-4 pb-4",
                          children: [
                            (0, r.jsxs)("div", {
                              className: "flex flex-col gap-1",
                              children: [
                                (0, r.jsx)("div", {
                                  className:
                                    "heading-sm-xsss uppercase text-secondary-200",
                                  children: "Your Name",
                                }),
                                (0, r.jsx)("input", {
                                  type: "text",
                                  placeholder: 'eg: "John"',
                                  onChange: (e) => {
                                    e.target.value.length > 20 ||
                                      B((t) =>
                                        Object.assign(Object.assign({}, t), {
                                          name: e.target.value,
                                        })
                                      );
                                  },
                                  onBlur: () =>
                                    localStorage.setItem(
                                      "user-card-name",
                                      V.name
                                    ),
                                  value: V.name,
                                  className: x()(
                                    "subheading-sm-md subheading-sm-xs mt-1 h-[45px] w-full rounded-lg border border-bordergray bg-black/20 px-4 py-2 text-white hover:outline hover:outline-primary-default"
                                  ),
                                }),
                              ],
                            }),
                            (0, r.jsxs)("div", {
                              className: "flex flex-col gap-1",
                              children: [
                                (0, r.jsx)("div", {
                                  className:
                                    "heading-sm-xsss uppercase text-secondary-200",
                                  children: "Your Persona",
                                }),
                                (0, r.jsx)("textarea", {
                                  rows: 3,
                                  className: x()(
                                    "body-text-default mt-1 w-full rounded-lg border border-bordergray bg-blackAlpha-300 p-2 text-white ring-0 hover:outline hover:outline-primary-default focus:outline focus:outline-primary-default"
                                  ),
                                  onChange: (e) => {
                                    e.target.value.length > 200 ||
                                      B((t) =>
                                        Object.assign(Object.assign({}, t), {
                                          persona: e.target.value,
                                        })
                                      );
                                  },
                                  onBlur: () =>
                                    localStorage.setItem(
                                      "user-card-persona",
                                      V.persona
                                    ),
                                  value: V.persona,
                                  placeholder:
                                    'eg: "{user} is very charismatic and lives in New York."',
                                }),
                              ],
                            }),
                          ],
                        }),
                    ],
                  }),
                }),
              ],
            })
          );
        },
        T = l(19311),
        F = l(11225),
        M = l(51933),
        D = (e) => {
          let {
              selectedBackgroundUrl: t,
              onSelectBackground: l,
              onClose: a,
            } = e,
            [n, i] = (0, s.useState)(!1);
          (0, s.useEffect)(() => {
            i(!0);
          }, []);
          let o = M.jD
            .filter((e) => "2d" === e.type)
            .map((e) =>
              (0, r.jsx)(
                "div",
                {
                  children: (0, r.jsx)(F.Z, {
                    isSelected: e.image === t,
                    imageURL: e.image,
                    name: e.name,
                    size: "full",
                    onSelect: () => {
                      e.image === t ? l("") : l(e.image);
                    },
                    darkMode: !0,
                    customStyle:
                      "!h-[95px]  lg:!h-[112px] xl:!w-full xl:!h-[174px]",
                  }),
                },
                e.name
              )
            );
          return (0, r.jsxs)("div", {
            className: "h-full w-full px-6 pt-4 md:pt-6",
            children: [
              (0, r.jsxs)("div", {
                className: "mb-5 flex items-center xl:justify-between",
                children: [
                  (0, r.jsx)("button", {
                    className:
                      "mr-2 flex items-center justify-center text-white xl:hidden",
                    onClick: a,
                    children: (0, r.jsx)(T.R, { width: 6, height: 6 }),
                  }),
                  (0, r.jsx)("div", {
                    className: "heading-lg-xs uppercase text-secondary-200",
                    children: "backgrounds",
                  }),
                  (0, r.jsx)("button", {
                    className: x()(
                      "hidden h-6 w-6 items-center justify-center rounded-full p-1 text-secondary-500 transition duration-300 hover:bg-black/20 xl:flex",
                      n
                        ? "translate-x-0 opacity-100"
                        : "translate-x-4 opacity-0"
                    ),
                    onClick: a,
                    children: (0, r.jsx)(h.T, {
                      className: "!text-secondary-500",
                    }),
                  }),
                ],
              }),
              (0, r.jsx)("div", {
                className:
                  "hide-scrollbar -mx-1 -mt-1 grid h-full grid-cols-2 gap-5 overflow-y-scroll px-1 pb-20 pt-1 lg:grid-cols-3 xl:grid-cols-1",
                children: o,
              }),
            ],
          });
        },
        z = l(43952),
        P = l(91816),
        L = l(48899),
        R = function (e, t, l, r) {
          return new (l || (l = Promise))(function (s, a) {
            function n(e) {
              try {
                o(r.next(e));
              } catch (e) {
                a(e);
              }
            }
            function i(e) {
              try {
                o(r.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function o(e) {
              var t;
              e.done
                ? s(e.value)
                : ((t = e.value) instanceof l
                    ? t
                    : new l(function (e) {
                        e(t);
                      })
                  ).then(n, i);
            }
            o((r = r.apply(e, t || [])).next());
          });
        },
        Z = (e) => {
          let { show: t, onClose: l, onNewChat: a } = e,
            { isAuthReady: n, holoUser: o } = (0, c.a)(),
            d = (0, P.S)({ base: !0, lg: !1 }),
            {
              userCreatedCharacters: u,
              tokenCharacterUpdated: p,
              tokenCharacters: v,
              setTokenCharacterUpdated: f,
              setTokenCharacters: g,
            } = (0, i.W)((e) => e),
            [b, y] = (0, s.useState)([]),
            [j, w] = (0, s.useState)(null),
            [N, k] = (0, s.useState)(!1),
            [C, S] = (0, s.useState)(!1),
            [I, A] = (0, s.useState)("");
          (0, s.useEffect)(() => {
            R(void 0, void 0, void 0, function* () {
              if ((k(!0), !n || !o || b.length > 0)) return;
              let e = [];
              p
                ? (e = v)
                : (g(
                    (e = (yield H(null == o ? void 0 : o.id))
                      .filter((e) => e.character)
                      .map((e) => e.character))
                  ),
                  f(!0)),
                y(
                  [...u, ...e].filter(
                    (e, t, l) => t === l.findIndex((t) => t.id === e.id)
                  )
                ),
                S(!0);
            });
          }, [o, n]);
          let H = (e) =>
            R(void 0, void 0, void 0, function* () {
              let t = yield fetch("/api/users/".concat(e, "/tokens"), {
                method: "GET",
                headers: { "Content-Type": "application/json" },
              });
              return t.ok ? yield t.json() : [];
            });
          return (0, r.jsx)(m.Z, {
            show: t,
            onClose: l,
            width: "2xl",
            style: "!max-w-[716px]",
            children: (0, r.jsxs)("div", {
              className: x()(
                "relative flex h-[520px] flex-col justify-between overflow-hidden rounded-t-3xl bg-black p-4 pt-8 text-white transition duration-300 md:h-[560px] md:rounded-3xl md:p-10 ",
                N ? "opacity-100" : "opacity-0"
              ),
              children: [
                (0, r.jsx)("button", {
                  className: x()(
                    "absolute right-5 top-5 h-[40px] w-[40px] rounded-full p-0 text-secondary-200 transition duration-300 hover:bg-black/20",
                    N ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                  ),
                  onClick: l,
                  children: (0, r.jsx)(h.T, {}),
                }),
                (0, r.jsxs)("div", {
                  className: "h-[330px] md:h-[350px]",
                  children: [
                    (0, r.jsx)("div", {
                      className:
                        "subheading-lg-lg mb-7 flex items-center justify-center text-white",
                      children: "Start a new chat",
                    }),
                    C
                      ? (0, r.jsx)(r.Fragment, {
                          children:
                            0 === u.length
                              ? (0, r.jsx)("div", {
                                  className:
                                    "m-[3px] flex h-full w-full items-center justify-center px-2 pt-2",
                                  children: (0, r.jsx)("p", {
                                    className:
                                      "text-xs text-secondary-default dark:text-secondary-200",
                                    children: "There are no items here yet.",
                                  }),
                                })
                              : (0, r.jsx)("div", {
                                  className:
                                    "hide-scrollbar -mx-1 -mt-1 grid h-full w-full grid-cols-4 gap-2 overflow-x-hidden overflow-y-scroll px-1 pb-5 pt-1 sm:grid-cols-3 md:grid-cols-4",
                                  children: b.map((e, t) => {
                                    var l;
                                    if (!e) return;
                                    let s =
                                      (null == j ? void 0 : j.id) ===
                                      (null == e ? void 0 : e.id);
                                    return (0, r.jsx)(
                                      "div",
                                      {
                                        children: (0, r.jsx)(F.Z, {
                                          isSelected: s,
                                          imageURL:
                                            null ===
                                              (l =
                                                null == e ? void 0 : e.brain) ||
                                            void 0 === l
                                              ? void 0
                                              : l.image,
                                          name: null == e ? void 0 : e.name,
                                          onSelect: () => {
                                            s || w(e);
                                          },
                                          size: d ? "mid" : "lg",
                                        }),
                                      },
                                      "".concat(e.id, "-").concat(t)
                                    );
                                  }),
                                }),
                        })
                      : (0, r.jsx)("div", {
                          className:
                            "flex h-full w-full items-center justify-center",
                          children: (0, r.jsx)(L.$, { color: "white" }),
                        }),
                  ],
                }),
                (0, r.jsx)("button", {
                  disabled: !j,
                  className: x()({
                    "subheading-lg-md mt-5 flex w-full items-center justify-center rounded-full bg-primary-default py-3 uppercase text-secondary-800 hover:bg-primary-200":
                      !0,
                    "opacity-50": !j,
                  }),
                  onClick: () =>
                    R(void 0, void 0, void 0, function* () {
                      yield a(j), l();
                    }),
                  children: "create chat",
                }),
              ],
            }),
          });
        },
        $ = l(81069),
        V = function (e, t, l, r) {
          return new (l || (l = Promise))(function (s, a) {
            function n(e) {
              try {
                o(r.next(e));
              } catch (e) {
                a(e);
              }
            }
            function i(e) {
              try {
                o(r.throw(e));
              } catch (e) {
                a(e);
              }
            }
            function o(e) {
              var t;
              e.done
                ? s(e.value)
                : ((t = e.value) instanceof l
                    ? t
                    : new l(function (e) {
                        e(t);
                      })
                  ).then(n, i);
            }
            o((r = r.apply(e, t || [])).next());
          });
        },
        B = () => {
          var e;
          let t = (0, d.useRouter)(),
            { getAudioData: l, speakAudioLipsync: u } = (0, N.Z)(),
            { selectedCharacter: h } = (0, i.W)((e) => e),
            { holoUser: m, isAuthReady: b, login: k } = (0, c.a)(),
            {
              chatHistory: C,
              setChatHistory: S,
              recentChats: I,
              setRecentChats: A,
              setUIMode: _,
            } = (0, o.oR)((e) => e),
            { character_id: E } = t.query,
            [F, M] = (0, s.useState)(f.z$.RECENT_CHATS),
            [P, L] = (0, s.useState)(!1),
            [R, B] = (0, s.useState)(!1),
            [U, G] = (0, s.useState)(null),
            [Y, q] = (0, s.useState)(!1),
            [W, X] = (0, s.useState)(!1),
            [J, K] = (0, s.useState)(!1),
            [Q, ee] = (0, s.useState)(""),
            [et, el] = (0, s.useState)(void 0),
            [er, es] = (0, s.useState)({ name: "", persona: "" }),
            [ea, en] = (0, s.useState)(!0),
            [ei, eo] = (0, s.useState)(!1),
            [ec, ed] = (0, s.useState)(!1),
            [eu, ex] = (0, s.useState)(!1),
            eh = (0, s.useRef)(null);
          (0, s.useEffect)(() => {
            if (t.isReady) {
              if (Array.isArray(E) && E.length > 0) {
                el(E[0]);
                return;
              }
              if (void 0 === E) {
                el(null);
                return;
              }
              el(E);
            }
          }, [E, t.isReady]),
            (0, s.useEffect)(() => {
              b && void 0 !== et && em();
            }, [b, m, et]);
          let em = () =>
              V(void 0, void 0, void 0, function* () {
                if (!m) {
                  yield ep();
                  return;
                }
                let e = localStorage.getItem("user-card-name"),
                  t = localStorage.getItem("user-card-persona");
                if (
                  (es({ name: e || m.username, persona: t || "" }), ev(I, et))
                ) {
                  X(!0);
                  return;
                }
                yield ef(e || m.username), X(!0);
              }),
            ep = () =>
              V(void 0, void 0, void 0, function* () {
                var e;
                if (!et) {
                  X(!0);
                  return;
                }
                let t = yield ew(null == m ? void 0 : m.id, et);
                if (!t) return;
                let l = {
                  messages: t.brain.firstMessage
                    ? [
                        {
                          content: (0, H.nh)({
                            prompt:
                              null === (e = t.brain) || void 0 === e
                                ? void 0
                                : e.firstMessage,
                            characterName: t.conversationName,
                            username: "User",
                          }),
                          speaker: "AI",
                          sentAt: new Date().toString(),
                        },
                      ]
                    : [],
                  updatedAt: new Date().toString(),
                  character: t,
                  chatHistoryId: t.id,
                };
                A([l]), (eh.current = t.id), eb(l), q(!1), X(!0);
              }),
            ev = (e, t) => {
              let l = e.find((e) => e.character.id === t);
              return !!l && (eb(l), !0);
            },
            ef = (e) =>
              V(void 0, void 0, void 0, function* () {
                var l;
                q(!0);
                let r = yield ej(null == m ? void 0 : m.id);
                if ((A(r), !et)) {
                  if (r && r.length > 0) {
                    let e = r[0];
                    t.push(
                      "/chat/".concat(
                        null === (l = null == e ? void 0 : e.character) ||
                          void 0 === l
                          ? void 0
                          : l.id
                      )
                    ),
                      q(!1);
                    return;
                  }
                  M(f.z$.RECENT_CHATS), q(!1);
                  return;
                }
                if (ev(r, et)) {
                  q(!1);
                  return;
                }
                let s = yield ew(null == m ? void 0 : m.id, et);
                s && (yield eg(s, e, r), q(!1));
              }),
            eg = (e, t, l) =>
              V(void 0, void 0, void 0, function* () {
                let {
                    historyId: r,
                    chatMessages: s,
                    updatedAt: a,
                  } = yield ey(e.id, t),
                  n = {
                    messages: s,
                    updatedAt: a,
                    character: e,
                    chatHistoryId: r,
                  };
                A([n, ...(l ? [...l] : [])]), (eh.current = r), eb(n);
              }),
            eb = (e) => {
              if (
                (G(e),
                M(f.z$.CHAT),
                (eh.current = e.chatHistoryId),
                S(e.messages ? e.messages : []),
                !e.chatHistoryId)
              ) {
                en(!0);
                return;
              }
              en(!1), t.push("/chat/".concat(e.character.id));
            },
            ey = (e, t) =>
              V(void 0, void 0, void 0, function* () {
                try {
                  let l = yield fetch(
                    "/api/users/"
                      .concat(
                        null == m ? void 0 : m.id,
                        "/chat-history?characterId="
                      )
                      .concat(e, "&userCardName=")
                      .concat(t),
                    {
                      method: "GET",
                      headers: { "Content-Type": "application/json" },
                    }
                  );
                  if (200 !== l.status)
                    return {
                      historyId: null,
                      chatMessages: null,
                      updatedAt: null,
                    };
                  let {
                    historyId: r,
                    chatHistory: s,
                    updatedAt: a,
                  } = yield l.json();
                  return { historyId: r, chatMessages: s, updatedAt: a };
                } catch (e) {
                  return (
                    console.error(e),
                    { historyId: null, chatMessages: null, updatedAt: null }
                  );
                }
              }),
            ej = (e) =>
              V(void 0, void 0, void 0, function* () {
                yield (0, w.hP)();
                let t = yield fetch("/api/users/".concat(e, "/recent-chats"), {
                  method: "GET",
                  headers: { "Content-Type": "application/json" },
                });
                return t.ok ? yield t.json() : [];
              }),
            ew = (e, t) =>
              V(void 0, void 0, void 0, function* () {
                if (!t) return null;
                if (t === (null == h ? void 0 : h.id)) return h;
                yield (0, w.hP)();
                let l = yield (0, g.Pm)(t, e);
                return l &&
                  ((null == m ? void 0 : m.role) === f.i4.ADMIN ||
                    (null == l ? void 0 : l.ownerId) ===
                      (null == m ? void 0 : m.id) ||
                    l.visibility !== f.rx.PRIVATE)
                  ? l
                  : (K(!0), null);
              }),
            eN = () => {
              if (!m) {
                k();
                return;
              }
              L(!0);
            };
          return (0, r.jsxs)("div", {
            className: "relative h-screen w-screen",
            children: [
              P &&
                (0, r.jsx)(Z, {
                  show: P,
                  onNewChat: (e) =>
                    V(void 0, void 0, void 0, function* () {
                      if (!m) {
                        k();
                        return;
                      }
                      ev(I, e.id) || t.push("/chat/".concat(e.id));
                    }),
                  onClose: () => L(!1),
                }),
              J &&
                (0, r.jsx)(v, {
                  isOpen: J,
                  onClose: () => {
                    K(!1);
                  },
                }),
              (0, r.jsxs)("div", {
                className: x()(
                  "md:block",
                  F === f.z$.RECENT_CHATS ? "block" : "hidden"
                ),
                children: [(0, r.jsx)(a.Z, {}), (0, r.jsx)(n.Z, {})],
              }),
              Y || !W
                ? (0, r.jsx)(z.Z, { isOpen: !0 })
                : (0, r.jsxs)("div", {
                    className: x()(
                      "flex h-full md:pl-[56px] md:pt-[56px]",
                      Q ? "bg-cover bg-center bg-no-repeat" : "",
                      F === f.z$.RECENT_CHATS ? "pt-[56px]" : "pt-0"
                    ),
                    style: Q
                      ? {
                          backgroundImage:
                            "linear-gradient(#060C1180, #060C1180), url(".concat(
                              Q,
                              ")"
                            ),
                          backgroundColor: "rgba(255, 255, 255, 0.3)",
                        }
                      : void 0,
                    children: [
                      (0, r.jsx)("div", {
                        className: x()(
                          "h-full w-full md:block md:w-1/5 md:border-r md:border-bordergray",
                          Q ? "backdrop-blur-md" : "",
                          F === f.z$.RECENT_CHATS ? "block" : "hidden"
                        ),
                        children:
                          I &&
                          (0, r.jsx)(y, {
                            recentChats: I,
                            selectedChat: U,
                            onSelectChat: eb,
                            onNewChat: () => eN(),
                          }),
                      }),
                      (0, r.jsx)("div", {
                        className: x()({
                          "h-full w-full md:w-3/5": !0,
                          block: F !== f.z$.INFO,
                          hidden: F === f.z$.INFO,
                        }),
                        children: (0, r.jsxs)("div", {
                          className: "flex h-full w-full flex-col px-4 md:px-6",
                          children: [
                            (null == U ? void 0 : U.character) &&
                              (0, r.jsxs)("div", {
                                className:
                                  "flex w-full items-center justify-between border-b border-bordergray py-3 ",
                                children: [
                                  (0, r.jsxs)("div", {
                                    className: "flex w-full items-center gap-2",
                                    children: [
                                      (0, r.jsxs)("div", {
                                        className: "flex gap-2",
                                        children: [
                                          (0, r.jsx)("button", {
                                            className:
                                              "flex items-center justify-center text-white md:hidden",
                                            onClick: () => M(f.z$.RECENT_CHATS),
                                            children: (0, r.jsx)(T.R, {
                                              width: 6,
                                              height: 6,
                                            }),
                                          }),
                                          (0, r.jsx)("img", {
                                            className:
                                              "h-10 w-10 cursor-pointer rounded-full object-cover",
                                            alt: "ai picture",
                                            src:
                                              null ===
                                                (e = U.character.brain) ||
                                              void 0 === e
                                                ? void 0
                                                : e.image,
                                            onClick: () =>
                                              t.push(
                                                "/c/".concat(U.character.id)
                                              ),
                                          }),
                                        ],
                                      }),
                                      (0, r.jsx)("div", {
                                        className:
                                          "subheading-sm-sm cursor-pointer text-white hover:underline",
                                        onClick: () =>
                                          t.push("/c/".concat(U.character.id)),
                                        children: U.character.name,
                                      }),
                                    ],
                                  }),
                                  (0, r.jsxs)("div", {
                                    className:
                                      "relative flex items-center justify-end gap-2",
                                    children: [
                                      (0, r.jsx)("button", {
                                        className: "h-6 w-6",
                                        onClick: () => eo(!ei),
                                        children: (0, r.jsx)(
                                          p.MoreOutlineIcon,
                                          { className: "text-white" }
                                        ),
                                      }),
                                      ei &&
                                        (0, r.jsx)("div", {
                                          className:
                                            "absolute right-0 top-full z-50 mt-2 w-48 rounded-xl bg-black",
                                          children: (0, r.jsxs)("ul", {
                                            className: "",
                                            children: [
                                              (0, r.jsx)("li", {
                                                className:
                                                  "flex gap-1 rounded-t-xl",
                                                children: (0, r.jsxs)(
                                                  "button",
                                                  {
                                                    onClick: () => {
                                                      B(!0),
                                                        M(f.z$.INFO),
                                                        eo(!1);
                                                    },
                                                    className:
                                                      "subheading-sm-xs flex w-full items-center gap-1 rounded-t-xl p-3 text-left text-secondary-300 hover:bg-secondary-700",
                                                    children: [
                                                      (0, r.jsx)(
                                                        p.EditSolidIcon,
                                                        {
                                                          className:
                                                            "h-4 w-4 text-secondary-200",
                                                        }
                                                      ),
                                                      (0, r.jsx)(r.Fragment, {
                                                        children:
                                                          "Change Background",
                                                      }),
                                                    ],
                                                  }
                                                ),
                                              }),
                                              (0, r.jsx)("li", {
                                                className:
                                                  "flex gap-1 rounded-b-xl",
                                                children: (0, r.jsxs)(
                                                  "button",
                                                  {
                                                    className:
                                                      "subheading-sm-xs flex w-full items-center gap-1 rounded-b-xl p-3 text-left text-secondary-300 hover:bg-secondary-700",
                                                    onClick: () => {
                                                      ex(!0), eo(!1);
                                                    },
                                                    children: [
                                                      (0, r.jsx)($.X, {
                                                        className:
                                                          "h-4 w-4 text-secondary-200",
                                                      }),
                                                      (0, r.jsx)(r.Fragment, {
                                                        children:
                                                          "Clear History",
                                                      }),
                                                    ],
                                                  }
                                                ),
                                              }),
                                              (0, r.jsx)("li", {
                                                className:
                                                  "flex gap-1 rounded-b-xl",
                                                children: (0, r.jsxs)(
                                                  "button",
                                                  {
                                                    className:
                                                      "subheading-sm-xs flex w-full items-center gap-1 rounded-b-xl p-3 text-left text-secondary-300 hover:bg-secondary-700",
                                                    onClick: () => {
                                                      ed(!0), eo(!1);
                                                    },
                                                    children: [
                                                      (0, r.jsx)(
                                                        p.TrashSolidIcon,
                                                        {
                                                          className:
                                                            "h-4 w-4 text-secondary-200",
                                                        }
                                                      ),
                                                      (0, r.jsx)(r.Fragment, {
                                                        children: "Delete Chat",
                                                      }),
                                                    ],
                                                  }
                                                ),
                                              }),
                                            ],
                                          }),
                                        }),
                                      (0, r.jsx)("button", {
                                        className: "h-5 w-5 md:hidden",
                                        onClick: () => M(f.z$.INFO),
                                        children:
                                          F === f.z$.CHAT
                                            ? (0, r.jsx)(p.GroupOutLineIcon, {
                                                className:
                                                  "!text-[20px] text-white",
                                              })
                                            : (0, r.jsx)(p.GroupSolidIcon, {
                                                className:
                                                  "text-[20px] text-white",
                                              }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            (0, r.jsx)(j.Z, {
                              mode: f.z_.DEFAULT,
                              user: m,
                              character: null == U ? void 0 : U.character,
                              currentChatHistoryId: eh,
                              userCard: er,
                              chatHistory: C,
                              setChatHistory: S,
                              chatDisabled: ea,
                              setChatDisabled: en,
                              isClearHistoryModalOpen: eu,
                              setIsClearHistoryModalOpen: ex,
                              isDeleteHistoryModalOpen: ec,
                              setIsDeleteHistoryModalOpen: ed,
                              onClearedChatHistory: () => {
                                var e, t;
                                if (!U) return;
                                let l = null;
                                (null === (e = U.character.brain) ||
                                void 0 === e
                                  ? void 0
                                  : e.firstMessage) &&
                                  (l = {
                                    speaker: "AI",
                                    content: (0, H.nh)({
                                      prompt:
                                        null === (t = U.character.brain) ||
                                        void 0 === t
                                          ? void 0
                                          : t.firstMessage,
                                      characterName:
                                        U.character.conversationName,
                                      username: er.name ? er.name : m.username,
                                    }),
                                    sentAt: new Date().toString(),
                                  }),
                                  A(
                                    I.map((e) =>
                                      e.chatHistoryId !== eh.current
                                        ? e
                                        : Object.assign(Object.assign({}, e), {
                                            messages: l ? [l] : [],
                                            updatedAt: new Date().toString(),
                                          })
                                    )
                                  ),
                                  S(l ? [l] : []);
                              },
                              onDeletedChatHistory: () => {
                                var e;
                                if (!U) return;
                                let l = I.filter(
                                  (e) => e.chatHistoryId !== eh.current
                                );
                                if (l && l.length > 0) {
                                  let r = I.find((e) => {
                                    var t, l;
                                    return (
                                      (null === (t = e.character) ||
                                      void 0 === t
                                        ? void 0
                                        : t.id) !==
                                      (null ===
                                        (l =
                                          null == U ? void 0 : U.character) ||
                                      void 0 === l
                                        ? void 0
                                        : l.id)
                                    );
                                  });
                                  G(r),
                                    (eh.current =
                                      null == r ? void 0 : r.chatHistoryId),
                                    S(
                                      null !==
                                        (e = null == r ? void 0 : r.messages) &&
                                        void 0 !== e
                                        ? e
                                        : []
                                    ),
                                    t.push("/chat/".concat(r.character.id)),
                                    A(l);
                                  return;
                                }
                                M(f.z$.RECENT_CHATS),
                                  G(null),
                                  t.push("/chat"),
                                  A([]);
                              },
                              onNewMessage: (e) => {
                                A([
                                  Object.assign(
                                    Object.assign(
                                      {},
                                      I.find(
                                        (e) =>
                                          e.chatHistoryId ===
                                          (null == eh ? void 0 : eh.current)
                                      )
                                    ),
                                    {
                                      messages: e,
                                      updatedAt: new Date().toString(),
                                    }
                                  ),
                                  ...I.filter(
                                    (e) =>
                                      e.chatHistoryId !==
                                      (null == eh ? void 0 : eh.current)
                                  ),
                                ]);
                              },
                            }),
                          ],
                        }),
                      }),
                      (0, r.jsx)("div", {
                        className: x()(
                          "h-full w-full md:block md:w-1/5 md:border-l md:border-bordergray",
                          Q ? "backdrop-blur-md" : "",
                          F === f.z$.INFO
                            ? "transform-all transition duration-300 ease-in-out"
                            : "hidden"
                        ),
                        children:
                          (null == U ? void 0 : U.character) &&
                          (0, r.jsxs)(r.Fragment, {
                            children: [
                              !R &&
                                (0, r.jsx)("button", {
                                  className:
                                    "flex items-center justify-center pl-4 pt-5 text-white xl:hidden",
                                  onClick: () => M(f.z$.CHAT),
                                  children: (0, r.jsx)(T.R, {
                                    width: 6,
                                    height: 6,
                                  }),
                                }),
                              R
                                ? (0, r.jsx)(D, {
                                    selectedBackgroundUrl: Q,
                                    onSelectBackground: (e) => ee(e),
                                    onClose: () => {
                                      B(!1), M(f.z$.CHAT);
                                    },
                                  })
                                : (0, r.jsx)(O, {
                                    user: m,
                                    character: null == U ? void 0 : U.character,
                                    userCard: er,
                                    setUserCard: es,
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
    51933: function (e, t, l) {
      "use strict";
      l.d(t, {
        jD: function () {
          return c;
        },
      });
      let r = "https://hologramxyz.s3.amazonaws.com/backgrounds/",
        s = [
          { url: "background12.jpg", slug: "Neon Dream Scape" },
          { url: "background13.jpg", slug: "Cartoon Clutter Cove" },
          { url: "background14.jpg", slug: "Majestic Fantasy Palace" },
          { url: "background15.jpg", slug: "Golden Hour Vista" },
          { url: "background16.jpg", slug: "Urban Neon Nightscape" },
          { url: "background17.jpg", slug: "Radiant Nightlife" },
          { url: "background18.jpg", slug: "Futuristic Neon Passage" },
          { url: "background19.jpg", slug: "Cybernetic Corridor" },
          { url: "background20.jpg", slug: "Chill Lo-Fi Lounge" },
          { url: "background21.jpg", slug: "Animated Style Salon" },
          { url: "background22.jpg", slug: "Celestial Suspended Chapel" },
          { url: "background23.jpg", slug: "Aerial Apartment" },
          { url: "background1.png", slug: "Lofty Playroom" },
          { url: "background2.jpg", slug: "Rainy Cyber Metropolis" },
          { url: "background3.jpg", slug: "Low Poly Landscape" },
          { url: "background4.jpeg", slug: "Framed Dimensions" },
          { url: "background5.jpg", slug: "Golden Sky Jewel" },
          { url: "background6.jpeg", slug: "Digital Collectibles Sanctum" },
          { url: "background7.jpg", slug: "Lake & Sad Pepe" },
          { url: "background8.jpg", slug: "Meme Portrait" },
          { url: "background9.jpg", slug: "Tropical Pepe Vibes" },
          { url: "background10.jpg", slug: "They Don’t Know" },
          { url: "background11.jpg", slug: "NPC Wojak" },
        ],
        a = (e) => ({
          name: "".concat(s[e].slug),
          image: "".concat(r).concat(s[e].url),
          modelUrl: "".concat(r).concat(s[e].url),
          type: "2d",
        }),
        n = s.map((e, t) => a(t)),
        i = [
          {
            img_url: "DreamlikeLandscape.jpeg",
            model_url: "DreamlikeLandscape.glb",
            slug: "Dream Like Landscape",
          },
          {
            img_url: "LightBlueSky.jpeg",
            model_url: "LightBlueSky.glb",
            slug: "Light Blue Sky",
          },
          {
            img_url: "FairyForestNight.jpeg",
            model_url: "FairyForestNight.glb",
            slug: "Fairy Forest Night",
          },
        ],
        o = (e) => ({
          name: i[e].slug,
          image: "".concat(r).concat(i[e].img_url),
          modelUrl: "".concat(r).concat(i[e].model_url),
          type: "3d",
        });
      i.map((e, t) => o(t));
      let c = n;
    },
    48204: function (e, t, l) {
      "use strict";
      l.d(t, {
        v: function () {
          return r;
        },
      });
      let r = (0, l(24278).I)({
        displayName: "ChevronDownIcon",
        d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z",
      });
    },
    45366: function (e, t, l) {
      "use strict";
      l.d(t, {
        G: function () {
          return r;
        },
      });
      let r = (0, l(24278).I)({
        d: "M23.414,20.591l-4.645-4.645a10.256,10.256,0,1,0-2.828,2.829l4.645,4.644a2.025,2.025,0,0,0,2.828,0A2,2,0,0,0,23.414,20.591ZM10.25,3.005A7.25,7.25,0,1,1,3,10.255,7.258,7.258,0,0,1,10.25,3.005Z",
        displayName: "Search2Icon",
      });
    },
    91816: function (e, t, l) {
      "use strict";
      l.d(t, {
        S: function () {
          return i;
        },
      });
      var r = l(79115),
        s = l(1185),
        a = l(68050),
        n = l(37984);
      function i(e, t) {
        let l = (function (e) {
            let t = (0, r.Kn)(e) ? e : { fallback: e ?? "base" },
              l = (0, n.F)().__breakpoints.details.map(
                ({ minMaxQuery: e, breakpoint: t }) => ({
                  breakpoint: t,
                  query: e.replace("@media screen and ", ""),
                })
              ),
              s = l.map((e) => e.breakpoint === t.fallback),
              i = (0, a.a)(
                l.map((e) => e.query),
                { fallback: s, ssr: t.ssr }
              ).findIndex((e) => !0 == e);
            return l[i]?.breakpoint ?? t.fallback;
          })((0, r.Kn)(t) ? t : { fallback: t ?? "base" }),
          i = (0, n.F)();
        if (!l) return;
        let o = Array.from(i.__breakpoints?.keys || []);
        return (function (e, t, l = s.AV) {
          let r = Object.keys(e).indexOf(t);
          if (-1 !== r) return e[t];
          let a = l.indexOf(t);
          for (; a >= 0; ) {
            let t = l[a];
            if (e.hasOwnProperty(t)) {
              r = a;
              break;
            }
            a -= 1;
          }
          if (-1 !== r) return e[l[r]];
        })(
          Array.isArray(e)
            ? Object.fromEntries(
                Object.entries((0, s.Yq)(e, o)).map(([e, t]) => [e, t])
              )
            : e,
          l,
          o
        );
      }
    },
    1185: function (e, t, l) {
      "use strict";
      l.d(t, {
        AV: function () {
          return s;
        },
        XQ: function () {
          return a;
        },
        Yq: function () {
          return n;
        },
      });
      var r = l(79115);
      let s = Object.freeze(["base", "sm", "md", "lg", "xl", "2xl"]);
      function a(e, t) {
        return Array.isArray(e)
          ? e.map((e) => (null === e ? null : t(e)))
          : (0, r.Kn)(e)
          ? Object.keys(e).reduce((l, r) => ((l[r] = t(e[r])), l), {})
          : null != e
          ? t(e)
          : null;
      }
      function n(e, t = s) {
        let l = {};
        return (
          e.forEach((e, r) => {
            let s = t[r];
            null != e && (l[s] = e);
          }),
          l
        );
      }
    },
    87278: function (e, t, l) {
      "use strict";
      l.d(t, {
        Q: function () {
          return n;
        },
      });
      var r = l(81841),
        s = l(81946),
        a = l(87831);
      async function n(e, t) {
        let l;
        let { chainId: n, connector: i, ...o } = t;
        l = t.account
          ? t.account
          : (
              await (0, a.e)(e, {
                account: t.account,
                chainId: n,
                connector: i,
              })
            ).account;
        let c = e.getClient({ chainId: n });
        return (0, s.s)(c, r.Q, "estimateGas")({ ...o, account: l });
      }
    },
  },
  function (e) {
    e.O(
      0,
      [
        8388, 6556, 6047, 3464, 9626, 4185, 4569, 7197, 4175, 8427, 209, 3326,
        2888, 9774, 179,
      ],
      function () {
        return e((e.s = 38588));
      }
    ),
      (_N_E = e.O());
  },
]);
