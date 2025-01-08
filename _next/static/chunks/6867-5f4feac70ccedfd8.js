"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6867],
  {
    42056: function (e, t, n) {
      var a = n(85893),
        r = n(11163),
        l = n(25675),
        i = n.n(l),
        s = n(51373),
        o = n(99319),
        c = n(93967),
        d = n.n(c),
        u = n(59743),
        m = n(36641);
      t.Z = (e) => {
        var t, n;
        let {
            ownerId: l,
            ownerImage: c,
            username: p,
            planId: x,
            character: h,
            inheritWidth: f = !1,
          } = e,
          g = (0, r.useRouter)(),
          y = (0, o.Td)();
        return (0, a.jsxs)("button", {
          onClick: (e) => {
            e.stopPropagation(),
              !l ||
                "default_owner" === l ||
                (0, m.BZ)(h) ||
                g.push("/@".concat(p));
          },
          className: d()(
            "flex items-center justify-center space-x-1 rounded-[6px] bg-black/[0.04] px-1 py-[1px] ring-1 hover:bg-black/[0.1] dark:bg-blackAlpha-200",
            f && "w-full",
            (0, u.zB)(x)
              ? "ring-yellow-400/75 hover:ring-yellow-200"
              : (0, u.$W)(x)
              ? "ring-green-400/75 hover:ring-green-200"
              : " ring-whiteAlpha-400 hover:ring-secondary-300"
          ),
          style: { backdropFilter: "blur(10px)" },
          children: [
            h &&
              (0, a.jsx)(a.Fragment, {
                children:
                  !(0, m.Mh)(h) || (0, m.nE)(h) || (0, m.BZ)(h)
                    ? (!(0, m.Mh)(h) || (0, m.nE)(h) || (0, m.BZ)(h)) &&
                      (0, a.jsx)(i(), {
                        src:
                          c ||
                          (null === (t = s.g3[null == h ? void 0 : h.id]) ||
                          void 0 === t
                            ? void 0
                            : t.image) ||
                          y,
                        width: 16,
                        height: 16,
                        className: "max-h-4 rounded-full object-cover",
                        alt: null != p ? p : "Owner profile picture",
                      })
                    : (0, a.jsx)("img", {
                        src: "/img/twitter-logo.png",
                        alt: "twitter-logo",
                        className: "h-4 w-4 overflow-hidden rounded-full",
                      }),
              }),
            (0, a.jsx)("p", {
              className:
                "subheading-sm-xss overflow-hidden truncate text-secondary-default dark:text-secondary-200",
              children:
                !(0, m.Mh)(h) || (0, m.nE)(h) || (0, m.BZ)(h)
                  ? "@" +
                    (null != p
                      ? p
                      : null === (n = s.g3[null == h ? void 0 : h.id]) ||
                        void 0 === n
                      ? void 0
                      : n.username)
                  : "unclaimed",
            }),
            (0, u.zB)(x) &&
              (0, a.jsx)("img", {
                src: "/icons/membership/elite-mini-badge.png",
                alt: "elite",
                className: "h-4",
              }),
            (0, u.$W)(x) &&
              (0, a.jsx)("img", {
                src: "/icons/membership/premium-mini-badge.png",
                alt: "elite",
                className: "h-4",
              }),
          ],
        });
      };
    },
    61235: function (e, t, n) {
      var a = n(85893),
        r = n(8559),
        l = n(93967),
        i = n.n(l);
      t.Z = (e) => {
        let { tags: t, tooltipsPosition: n, rowPosition: l = "end" } = e;
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsxs)("div", {
            className: i()(
              "relative flex w-full  items-center space-x-2",
              "start" === l ? "justify-start" : "justify-end"
            ),
            children: [
              t.includes(r._P.Web3) &&
                (0, a.jsxs)("div", {
                  className:
                    "flex items-center rounded bg-[#066F494D] px-1 py-1 text-[8px] font-semibold uppercase text-green-300 backdrop-blur-[10px] md:right-2 md:top-3",
                  children: [
                    (0, a.jsx)("img", {
                      src: "/icons/upgrade/upgrade.svg",
                      alt: "premium",
                      className: "mr-1 h-3 w-3",
                    }),
                    "Premium",
                  ],
                }),
              t.includes(r._P.NSFW) &&
                (0, a.jsx)("div", {
                  className:
                    "rounded bg-[#BC85CF20] px-1 py-1 text-[8px] font-semibold uppercase text-[#FA86FC] backdrop-blur-[10px] md:right-2 md:top-3",
                  children: "NSFW",
                }),
            ],
          }),
        });
      };
    },
    916: function (e, t, n) {
      var a = n(85893),
        r = n(86523);
      n(67294);
      var l = n(73935);
      t.Z = (e) => {
        let {
          isOpen: t,
          closeButton: n = !1,
          onClose: i,
          showOverlay: s = !0,
          children: o,
          overlayClose: c = !0,
          showComeDownIcon: d = !0,
          contentStyle: u,
        } = e;
        return t
          ? (0, l.createPortal)(
              (0, a.jsx)(a.Fragment, {
                children: (0, a.jsxs)("div", {
                  className:
                    "fixed inset-0 z-[2000] overflow-hidden transition-opacity ".concat(
                      t ? "opacity-100" : "pointer-events-none opacity-0"
                    ),
                  children: [
                    s &&
                      (0, a.jsx)("div", {
                        className: "absolute inset-0 bg-black opacity-50",
                        onClick: () => {
                          c && c && i();
                        },
                      }),
                    (0, a.jsx)("div", {
                      className:
                        "max-h-4/5 fixed bottom-0 flex h-auto w-screen max-w-full transform transition-transform duration-300 ease-out ".concat(
                          t ? "translate-y-0" : "translate-y-full"
                        ),
                      children: (0, a.jsxs)("div", {
                        className: "relative  w-full  bg-white ".concat(u),
                        children: [
                          n &&
                            (0, a.jsx)("div", {
                              className: "fixed right-4 top-4",
                              onClick: i,
                              children: (0, a.jsx)(r.T, {
                                className: "!text-secondary-500",
                              }),
                            }),
                          d &&
                            (0, a.jsx)("div", {
                              className:
                                "mb-5 mt-1 flex w-full items-center justify-center",
                              children: (0, a.jsx)("img", {
                                src: "/icons/drawer-header.svg",
                                alt: "drawer",
                              }),
                            }),
                          (0, a.jsx)("div", {
                            className: "h-full overflow-y-scroll ",
                            children: o,
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              document.body
            )
          : null;
      };
    },
    27896: function (e, t, n) {
      var a = n(85893),
        r = n(93967),
        l = n.n(r),
        i = n(67294),
        s = n(86523),
        o = n(86115),
        c = n(58484);
      t.Z = (e) => {
        let { show: t, characterId: n, shareText: r, onClose: d } = e,
          [u, m] = (0, i.useState)(!1),
          [p, x] = (0, i.useState)(!1);
        (0, i.useEffect)(() => {
          m(!0);
        }, []);
        let h = () => {
          d();
        };
        return (0, a.jsx)(c.Z, {
          show: t,
          onClose: h,
          width: "lg",
          children: (0, a.jsxs)("div", {
            className: l()(
              "overflow-hidden rounded-[16px] bg-black transition duration-300",
              u ? "opacity-100" : "opacity-0"
            ),
            children: [
              (0, a.jsx)("button", {
                className: l()(
                  "absolute right-5 top-5 z-20 h-[40px] w-[40px] rounded-full p-0 text-secondary-200 transition duration-300 hover:bg-black/20",
                  u ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                ),
                onClick: h,
                children: (0, a.jsx)(s.T, {}),
              }),
              (0, a.jsxs)("div", {
                className: "flex flex-col items-center p-9 text-white",
                children: [
                  (0, a.jsxs)("div", {
                    className: l()(
                      "flex flex-col items-center transition duration-300",
                      u
                        ? "-translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    ),
                    children: [
                      (0, a.jsx)("div", {
                        className: "subheading-lg-lg mt-6",
                        children: "Share Character",
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "body-text-lg mt-3 text-center text-secondary-400",
                        children: [
                          "Would you like to share the character to gain more ",
                          (0, a.jsx)("br", {}),
                          "exposure? You can earn crystals if more people vote for",
                          (0, a.jsx)("br", {}),
                          "your character.",
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: l()(
                      "subheading-lg-md mt-9 flex w-full flex-col gap-y-2 px-4 text-secondary-800 transition delay-100 duration-300",
                      u
                        ? "-translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    ),
                    children: [
                      (0, a.jsxs)("button", {
                        onClick: () => {
                          let e = encodeURIComponent(
                              ""
                                .concat("https://app.holoworld.com", "/chat/")
                                .concat(n)
                            ),
                            t = encodeURIComponent(r);
                          window.open(
                            "https://twitter.com/intent/tweet?url="
                              .concat(e, "&text=")
                              .concat(t),
                            "_blank"
                          );
                        },
                        className:
                          "flex items-center justify-center gap-x-2 rounded-[10000px] bg-primary-300 py-2",
                        children: [
                          (0, a.jsx)("div", {
                            className: "z-10 h-7 w-7 rounded bg-black",
                            children: (0, a.jsx)("img", {
                              src: "/img/activity/twitter-dark.svg",
                              alt: "twitter",
                              className: "z-20 h-7 w-7",
                            }),
                          }),
                          (0, a.jsx)("span", { children: "SHARE ON TWITTER" }),
                        ],
                      }),
                      (0, a.jsxs)("button", {
                        onClick: () => {
                          navigator.clipboard.writeText(
                            ""
                              .concat("https://app.holoworld.com", "/chat/")
                              .concat(n)
                          ),
                            x(!0),
                            setTimeout(function () {
                              x(!1);
                            }, 1e3);
                        },
                        className:
                          "flex items-center justify-center gap-x-2 rounded-[10000px] bg-secondary-100 py-2",
                        children: [
                          (0, a.jsxs)("div", {
                            className: "relative",
                            children: [
                              (0, a.jsx)(o.n, {
                                className: l()(
                                  "absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 transition duration-300",
                                  p
                                    ? "-translate-y-1/2 opacity-100"
                                    : "-translate-y-2 opacity-0"
                                ),
                              }),
                              (0, a.jsx)("img", {
                                src: "/icons/icon-copy-black.svg",
                                alt: "share-icon",
                                className: l()(
                                  "h-7 w-7 transition duration-300",
                                  p ? "opacity-0" : "opacity-100 delay-300"
                                ),
                              }),
                            ],
                          }),
                          (0, a.jsx)("span", { children: "COPY LINK" }),
                        ],
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
    86115: function (e, t, n) {
      n.d(t, {
        n: function () {
          return r;
        },
      });
      var a = n(85893);
      let r = (0, n(24278).I)({
        viewBox: "0 0 14 14",
        path: (0, a.jsx)("g", {
          fill: "currentColor",
          children: (0, a.jsx)("polygon", {
            points:
              "5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039",
          }),
        }),
      });
    },
    46941: function (e, t, n) {
      n.d(t, {
        w: function () {
          return a;
        },
      });
      let a = (0, n(24278).I)({
        d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z",
        displayName: "ChevronLeftIcon",
      });
    },
    85105: function (e, t, n) {
      n.d(t, {
        X: function () {
          return a;
        },
      });
      let a = (0, n(24278).I)({
        d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z",
        displayName: "ChevronRightIcon",
      });
    },
    68029: function (e, t, n) {
      n.d(t, {
        x: function () {
          return a;
        },
      });
      let a = (0, n(53882).m)("div");
      a.displayName = "Box";
    },
    38491: function (e, t, n) {
      n.d(t, {
        z: function () {
          return y;
        },
      });
      var a = n(85893),
        r = n(29062),
        l = n(65544),
        i = n(20397),
        s = n(34926),
        o = n(67294);
      let [c, d] = (0, n(52110).k)({ strict: !1, name: "ButtonGroupContext" });
      var u = n(53882);
      function m(e) {
        let { children: t, className: n, ...r } = e,
          l = (0, o.isValidElement)(t)
            ? (0, o.cloneElement)(t, { "aria-hidden": !0, focusable: !1 })
            : t,
          i = (0, s.cx)("chakra-button__icon", n);
        return (0, a.jsx)(u.m.span, {
          display: "inline-flex",
          alignSelf: "center",
          flexShrink: 0,
          ...r,
          className: i,
          children: l,
        });
      }
      m.displayName = "ButtonIcon";
      var p = n(83695),
        x = n(48899);
      function h(e) {
        let {
            label: t,
            placement: n,
            spacing: r = "0.5rem",
            children: l = (0, a.jsx)(x.$, {
              color: "currentColor",
              width: "1em",
              height: "1em",
            }),
            className: i,
            __css: c,
            ...d
          } = e,
          m = (0, s.cx)("chakra-button__spinner", i),
          h = "start" === n ? "marginEnd" : "marginStart",
          f = (0, o.useMemo)(
            () =>
              (0, p.k0)({
                display: "flex",
                alignItems: "center",
                position: t ? "relative" : "absolute",
                [h]: t ? r : 0,
                fontSize: "1em",
                lineHeight: "normal",
                ...c,
              }),
            [c, t, h, r]
          );
        return (0, a.jsx)(u.m.div, {
          className: m,
          ...d,
          __css: f,
          children: l,
        });
      }
      h.displayName = "ButtonSpinner";
      var f = n(49381),
        g = n(64317);
      let y = (0, f.G)((e, t) => {
        let n = d(),
          c = (0, g.m)("Button", { ...n, ...e }),
          {
            isDisabled: m = n?.isDisabled,
            isLoading: p,
            isActive: x,
            children: f,
            leftIcon: y,
            rightIcon: j,
            loadingText: v,
            iconSpacing: N = "0.5rem",
            type: w,
            spinner: k,
            spinnerPlacement: C = "start",
            className: _,
            as: B,
            shouldWrapChildren: S,
            ...E
          } = (0, l.L)(e),
          I = (0, o.useMemo)(() => {
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
              ...(!!n && { _focus: e }),
            };
          }, [c, n]),
          { ref: L, type: F } = (function (e) {
            let [t, n] = (0, o.useState)(!e);
            return {
              ref: (0, o.useCallback)((e) => {
                e && n("BUTTON" === e.tagName);
              }, []),
              type: t ? "button" : void 0,
            };
          })(B),
          z = {
            rightIcon: j,
            leftIcon: y,
            iconSpacing: N,
            children: f,
            shouldWrapChildren: S,
          };
        return (0, a.jsxs)(u.m.button, {
          disabled: m || p,
          ref: (0, r.qq)(t, L),
          as: B,
          type: w ?? F,
          "data-active": (0, i.P)(x),
          "data-loading": (0, i.P)(p),
          __css: I,
          className: (0, s.cx)("chakra-button", _),
          ...E,
          children: [
            p &&
              "start" === C &&
              (0, a.jsx)(h, {
                className: "chakra-button__spinner--start",
                label: v,
                placement: "start",
                spacing: N,
                children: k,
              }),
            p
              ? v ||
                (0, a.jsx)(u.m.span, {
                  opacity: 0,
                  children: (0, a.jsx)(b, { ...z }),
                })
              : (0, a.jsx)(b, { ...z }),
            p &&
              "end" === C &&
              (0, a.jsx)(h, {
                className: "chakra-button__spinner--end",
                label: v,
                placement: "end",
                spacing: N,
                children: k,
              }),
          ],
        });
      });
      function b(e) {
        let {
          leftIcon: t,
          rightIcon: n,
          children: r,
          iconSpacing: l,
          shouldWrapChildren: i,
        } = e;
        return i
          ? (0, a.jsxs)("span", {
              style: { display: "contents" },
              children: [
                t && (0, a.jsx)(m, { marginEnd: l, children: t }),
                r,
                n && (0, a.jsx)(m, { marginStart: l, children: n }),
              ],
            })
          : (0, a.jsxs)(a.Fragment, {
              children: [
                t && (0, a.jsx)(m, { marginEnd: l, children: t }),
                r,
                n && (0, a.jsx)(m, { marginStart: l, children: n }),
              ],
            });
      }
      y.displayName = "Button";
    },
    12519: function (e, t, n) {
      n.d(t, {
        h: function () {
          return i;
        },
      });
      var a = n(85893),
        r = n(67294),
        l = n(38491);
      let i = (0, n(49381).G)((e, t) => {
        let { icon: n, children: i, isRound: s, "aria-label": o, ...c } = e,
          d = n || i,
          u = (0, r.isValidElement)(d)
            ? (0, r.cloneElement)(d, { "aria-hidden": !0, focusable: !1 })
            : null;
        return (0, a.jsx)(l.z, {
          px: "0",
          py: "0",
          borderRadius: s ? "full" : void 0,
          ref: t,
          "aria-label": o,
          ...c,
          children: u,
        });
      });
      i.displayName = "IconButton";
    },
    88329: function (e, t, n) {
      n.d(t, {
        k: function () {
          return i;
        },
      });
      var a = n(85893),
        r = n(49381),
        l = n(53882);
      let i = (0, r.G)(function (e, t) {
        let {
          direction: n,
          align: r,
          justify: i,
          wrap: s,
          basis: o,
          grow: c,
          shrink: d,
          ...u
        } = e;
        return (0,
        a.jsx)(l.m.div, { ref: t, __css: { display: "flex", flexDirection: n, alignItems: r, justifyContent: i, flexWrap: s, flexBasis: o, flexGrow: c, flexShrink: d }, ...u });
      });
      i.displayName = "Flex";
    },
    32761: function (e, t, n) {
      n.d(t, {
        E: function () {
          return u;
        },
      });
      var a = n(85893),
        r = n(8297),
        l = n(49381);
      let i = (0, l.G)(function (e, t) {
        let { htmlWidth: n, htmlHeight: r, alt: l, ...i } = e;
        return (0, a.jsx)("img", { width: n, height: r, ref: t, alt: l, ...i });
      });
      i.displayName = "NativeImage";
      var s = n(12408),
        o = n(67294);
      let c = (e, t) =>
        ("loaded" !== e && "beforeLoadOrError" === t) ||
        ("failed" === e && "onError" === t);
      var d = n(53882);
      let u = (0, l.G)(function (e, t) {
        let {
            fallbackSrc: n,
            fallback: l,
            src: u,
            srcSet: m,
            align: p,
            fit: x,
            loading: h,
            ignoreFallback: f,
            crossOrigin: g,
            fallbackStrategy: y = "beforeLoadOrError",
            referrerPolicy: b,
            ...j
          } = e,
          v = void 0 !== n || void 0 !== l,
          N = null != h || f || !v,
          w = c(
            (function (e) {
              let {
                  loading: t,
                  src: n,
                  srcSet: a,
                  onLoad: r,
                  onError: l,
                  crossOrigin: i,
                  sizes: c,
                  ignoreFallback: d,
                } = e,
                [u, m] = (0, o.useState)("pending");
              (0, o.useEffect)(() => {
                m(n ? "loading" : "pending");
              }, [n]);
              let p = (0, o.useRef)(),
                x = (0, o.useCallback)(() => {
                  if (!n) return;
                  h();
                  let e = new Image();
                  (e.src = n),
                    i && (e.crossOrigin = i),
                    a && (e.srcset = a),
                    c && (e.sizes = c),
                    t && (e.loading = t),
                    (e.onload = (e) => {
                      h(), m("loaded"), r?.(e);
                    }),
                    (e.onerror = (e) => {
                      h(), m("failed"), l?.(e);
                    }),
                    (p.current = e);
                }, [n, i, a, c, r, l, t]),
                h = () => {
                  p.current &&
                    ((p.current.onload = null),
                    (p.current.onerror = null),
                    (p.current = null));
                };
              return (
                (0, s.G)(() => {
                  if (!d)
                    return (
                      "loading" === u && x(),
                      () => {
                        h();
                      }
                    );
                }, [u, x, d]),
                d ? "loaded" : u
              );
            })({ ...e, crossOrigin: g, ignoreFallback: N }),
            y
          ),
          k = {
            ref: t,
            objectFit: x,
            objectPosition: p,
            ...(N ? j : (0, r.C)(j, ["onError", "onLoad"])),
          };
        return w
          ? l ||
              (0, a.jsx)(d.m.img, {
                as: i,
                className: "chakra-image__placeholder",
                src: n,
                ...k,
              })
          : (0, a.jsx)(d.m.img, {
              as: i,
              src: u,
              srcSet: m,
              crossOrigin: g,
              loading: h,
              referrerPolicy: b,
              className: "chakra-image",
              ...k,
            });
      });
      u.displayName = "Image";
    },
    89015: function (e, t, n) {
      n.d(t, {
        o: function () {
          return x;
        },
      });
      var a = n(85893),
        r = n(34926),
        l = n(68928),
        i = n(5490),
        s = n(65544),
        o = n(12553),
        c = n(49381),
        d = n(64317),
        u = n(53882);
      function m(e) {
        return (0, a.jsx)(o.J, {
          focusable: "false",
          "aria-hidden": !0,
          ...e,
          children: (0, a.jsx)("path", {
            fill: "currentColor",
            d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z",
          }),
        });
      }
      let p = (0, c.G)(function (e, t) {
        let n = (0, d.m)("CloseButton", e),
          { children: r, isDisabled: l, __css: i, ...o } = (0, s.L)(e);
        return (0,
        a.jsx)(u.m.button, { type: "button", "aria-label": "Close", ref: t, disabled: l, __css: { outline: 0, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, ...n, ...i }, ...o, children: r || (0, a.jsx)(m, { width: "1em", height: "1em" }) });
      });
      p.displayName = "CloseButton";
      let x = (0, c.G)((e, t) => {
        let { onClick: n, className: s, ...o } = e,
          { onClose: c } = (0, i.vR)(),
          d = (0, r.cx)("chakra-modal__close-btn", s),
          u = (0, i.I_)();
        return (0, a.jsx)(p, {
          ref: t,
          __css: u.closeButton,
          className: d,
          onClick: (0, l.v)(n, (e) => {
            e.stopPropagation(), c();
          }),
          ...o,
        });
      });
      x.displayName = "ModalCloseButton";
    },
    48899: function (e, t, n) {
      n.d(t, {
        $: function () {
          return u;
        },
      });
      var a = n(85893),
        r = n(65544),
        l = n(34926),
        i = n(70917),
        s = n(49381),
        o = n(64317),
        c = n(53882);
      let d = (0, i.F4)({
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        }),
        u = (0, s.G)((e, t) => {
          let n = (0, o.m)("Spinner", e),
            {
              label: i = "Loading...",
              thickness: s = "2px",
              speed: u = "0.45s",
              emptyColor: m = "transparent",
              className: p,
              ...x
            } = (0, r.L)(e),
            h = (0, l.cx)("chakra-spinner", p),
            f = {
              display: "inline-block",
              borderColor: "currentColor",
              borderStyle: "solid",
              borderRadius: "99999px",
              borderWidth: s,
              borderBottomColor: m,
              borderLeftColor: m,
              animation: `${d} ${u} linear infinite`,
              ...n,
            };
          return (0, a.jsx)(c.m.div, {
            ref: t,
            __css: f,
            className: h,
            ...x,
            children: i && (0, a.jsx)(c.m.span, { srOnly: !0, children: i }),
          });
        });
      u.displayName = "Spinner";
    },
  },
]);
