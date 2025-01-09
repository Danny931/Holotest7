(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4185],
  {
    50265: function (e, t, r) {
      "use strict";
      e = r.nmd(e);
      let a =
          (e = 0) =>
          (t) =>
            `\u001B[${38 + e};5;${t}m`,
        n =
          (e = 0) =>
          (t, r, a) =>
            `\u001B[${38 + e};2;${t};${r};${a}m`;
      Object.defineProperty(e, "exports", {
        enumerable: !0,
        get: function () {
          let e = new Map(),
            t = {
              modifier: {
                reset: [0, 0],
                bold: [1, 22],
                dim: [2, 22],
                italic: [3, 23],
                underline: [4, 24],
                overline: [53, 55],
                inverse: [7, 27],
                hidden: [8, 28],
                strikethrough: [9, 29],
              },
              color: {
                black: [30, 39],
                red: [31, 39],
                green: [32, 39],
                yellow: [33, 39],
                blue: [34, 39],
                magenta: [35, 39],
                cyan: [36, 39],
                white: [37, 39],
                blackBright: [90, 39],
                redBright: [91, 39],
                greenBright: [92, 39],
                yellowBright: [93, 39],
                blueBright: [94, 39],
                magentaBright: [95, 39],
                cyanBright: [96, 39],
                whiteBright: [97, 39],
              },
              bgColor: {
                bgBlack: [40, 49],
                bgRed: [41, 49],
                bgGreen: [42, 49],
                bgYellow: [43, 49],
                bgBlue: [44, 49],
                bgMagenta: [45, 49],
                bgCyan: [46, 49],
                bgWhite: [47, 49],
                bgBlackBright: [100, 49],
                bgRedBright: [101, 49],
                bgGreenBright: [102, 49],
                bgYellowBright: [103, 49],
                bgBlueBright: [104, 49],
                bgMagentaBright: [105, 49],
                bgCyanBright: [106, 49],
                bgWhiteBright: [107, 49],
              },
            };
          for (let [r, a] of ((t.color.gray = t.color.blackBright),
          (t.bgColor.bgGray = t.bgColor.bgBlackBright),
          (t.color.grey = t.color.blackBright),
          (t.bgColor.bgGrey = t.bgColor.bgBlackBright),
          Object.entries(t))) {
            for (let [r, n] of Object.entries(a))
              (t[r] = { open: `\u001B[${n[0]}m`, close: `\u001B[${n[1]}m` }),
                (a[r] = t[r]),
                e.set(n[0], n[1]);
            Object.defineProperty(t, r, { value: a, enumerable: !1 });
          }
          return (
            Object.defineProperty(t, "codes", { value: e, enumerable: !1 }),
            (t.color.close = "\x1b[39m"),
            (t.bgColor.close = "\x1b[49m"),
            (t.color.ansi256 = a()),
            (t.color.ansi16m = n()),
            (t.bgColor.ansi256 = a(10)),
            (t.bgColor.ansi16m = n(10)),
            Object.defineProperties(t, {
              rgbToAnsi256: {
                value: (e, t, r) =>
                  e === t && t === r
                    ? e < 8
                      ? 16
                      : e > 248
                      ? 231
                      : Math.round(((e - 8) / 247) * 24) + 232
                    : 16 +
                      36 * Math.round((e / 255) * 5) +
                      6 * Math.round((t / 255) * 5) +
                      Math.round((r / 255) * 5),
                enumerable: !1,
              },
              hexToRgb: {
                value: (e) => {
                  let t = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(
                    e.toString(16)
                  );
                  if (!t) return [0, 0, 0];
                  let { colorString: r } = t.groups;
                  3 === r.length &&
                    (r = r
                      .split("")
                      .map((e) => e + e)
                      .join(""));
                  let a = Number.parseInt(r, 16);
                  return [(a >> 16) & 255, (a >> 8) & 255, 255 & a];
                },
                enumerable: !1,
              },
              hexToAnsi256: {
                value: (e) => t.rgbToAnsi256(...t.hexToRgb(e)),
                enumerable: !1,
              },
            }),
            t
          );
        },
      });
    },
    11877: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return l;
        },
      });
      for (
        var a,
          n = {
            randomUUID:
              "undefined" != typeof crypto &&
              crypto.randomUUID &&
              crypto.randomUUID.bind(crypto),
          },
          i = new Uint8Array(16),
          s = [],
          o = 0;
        o < 256;
        ++o
      )
        s.push((o + 256).toString(16).slice(1));
      var l = function (e, t, r) {
        if (n.randomUUID && !t && !e) return n.randomUUID();
        var o =
          (e = e || {}).random ||
          (
            e.rng ||
            function () {
              if (
                !a &&
                !(a =
                  "undefined" != typeof crypto &&
                  crypto.getRandomValues &&
                  crypto.getRandomValues.bind(crypto))
              )
                throw Error(
                  "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
                );
              return a(i);
            }
          )();
        if (((o[6] = (15 & o[6]) | 64), (o[8] = (63 & o[8]) | 128), t)) {
          r = r || 0;
          for (var l = 0; l < 16; ++l) t[r + l] = o[l];
          return t;
        }
        return (function (e, t = 0) {
          return (
            s[e[t + 0]] +
            s[e[t + 1]] +
            s[e[t + 2]] +
            s[e[t + 3]] +
            "-" +
            s[e[t + 4]] +
            s[e[t + 5]] +
            "-" +
            s[e[t + 6]] +
            s[e[t + 7]] +
            "-" +
            s[e[t + 8]] +
            s[e[t + 9]] +
            "-" +
            s[e[t + 10]] +
            s[e[t + 11]] +
            s[e[t + 12]] +
            s[e[t + 13]] +
            s[e[t + 14]] +
            s[e[t + 15]]
          ).toLowerCase();
        })(o);
      };
    },
    23204: function (e) {
      "use strict";
      let t = /[\p{Lu}]/u,
        r = /[\p{Ll}]/u,
        a = /^[\p{Lu}](?![\p{Lu}])/gu,
        n = /([\p{Alpha}\p{N}_]|$)/u,
        i = /[_.\- ]+/,
        s = RegExp("^" + i.source),
        o = RegExp(i.source + n.source, "gu"),
        l = RegExp("\\d+" + n.source, "gu"),
        u = (e, a, n) => {
          let i = !1,
            s = !1,
            o = !1;
          for (let l = 0; l < e.length; l++) {
            let u = e[l];
            i && t.test(u)
              ? ((e = e.slice(0, l) + "-" + e.slice(l)),
                (i = !1),
                (o = s),
                (s = !0),
                l++)
              : s && o && r.test(u)
              ? ((e = e.slice(0, l - 1) + "-" + e.slice(l - 1)),
                (o = s),
                (s = !1),
                (i = !0))
              : ((i = a(u) === u && n(u) !== u),
                (o = s),
                (s = n(u) === u && a(u) !== u));
          }
          return e;
        },
        c = (e, t) => ((a.lastIndex = 0), e.replace(a, (e) => t(e))),
        d = (e, t) => (
          (o.lastIndex = 0),
          (l.lastIndex = 0),
          e.replace(o, (e, r) => t(r)).replace(l, (e) => t(e))
        ),
        h = (e, t) => {
          if (!("string" == typeof e || Array.isArray(e)))
            throw TypeError("Expected the input to be `string | string[]`");
          if (
            ((t = { pascalCase: !1, preserveConsecutiveUppercase: !1, ...t }),
            0 ===
              (e = Array.isArray(e)
                ? e
                    .map((e) => e.trim())
                    .filter((e) => e.length)
                    .join("-")
                : e.trim()).length)
          )
            return "";
          let r =
              !1 === t.locale
                ? (e) => e.toLowerCase()
                : (e) => e.toLocaleLowerCase(t.locale),
            a =
              !1 === t.locale
                ? (e) => e.toUpperCase()
                : (e) => e.toLocaleUpperCase(t.locale);
          return 1 === e.length
            ? t.pascalCase
              ? a(e)
              : r(e)
            : (e !== r(e) && (e = u(e, r, a)),
              (e = e.replace(s, "")),
              (e = t.preserveConsecutiveUppercase ? c(e, r) : r(e)),
              t.pascalCase && (e = a(e.charAt(0)) + e.slice(1)),
              d(e, a));
        };
      (e.exports = h), (e.exports.default = h);
    },
    2466: function (e) {
      "use strict";
      e.exports = function (e, t) {
        if ("string" != typeof e) throw TypeError("Expected a string");
        return (
          (t = void 0 === t ? "_" : t),
          e
            .replace(/([a-z\d])([A-Z])/g, "$1" + t + "$2")
            .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, "$1" + t + "$2")
            .toLowerCase()
        );
      };
    },
    32513: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return l;
        },
      });
      for (
        var a,
          n = {
            randomUUID:
              "undefined" != typeof crypto &&
              crypto.randomUUID &&
              crypto.randomUUID.bind(crypto),
          },
          i = new Uint8Array(16),
          s = [],
          o = 0;
        o < 256;
        ++o
      )
        s.push((o + 256).toString(16).slice(1));
      var l = function (e, t, r) {
        if (n.randomUUID && !t && !e) return n.randomUUID();
        var o =
          (e = e || {}).random ||
          (
            e.rng ||
            function () {
              if (
                !a &&
                !(a =
                  "undefined" != typeof crypto &&
                  crypto.getRandomValues &&
                  crypto.getRandomValues.bind(crypto))
              )
                throw Error(
                  "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
                );
              return a(i);
            }
          )();
        if (((o[6] = (15 & o[6]) | 64), (o[8] = (63 & o[8]) | 128), t)) {
          r = r || 0;
          for (var l = 0; l < 16; ++l) t[r + l] = o[l];
          return t;
        }
        return (function (e, t = 0) {
          return (
            s[e[t + 0]] +
            s[e[t + 1]] +
            s[e[t + 2]] +
            s[e[t + 3]] +
            "-" +
            s[e[t + 4]] +
            s[e[t + 5]] +
            "-" +
            s[e[t + 6]] +
            s[e[t + 7]] +
            "-" +
            s[e[t + 8]] +
            s[e[t + 9]] +
            "-" +
            s[e[t + 10]] +
            s[e[t + 11]] +
            s[e[t + 12]] +
            s[e[t + 13]] +
            s[e[t + 14]] +
            s[e[t + 15]]
          ).toLowerCase();
        })(o);
      };
    },
    27345: function (e) {
      "use strict";
      e.exports = (e, t) => (
        (t = t || (() => {})),
        e.then(
          (e) =>
            new Promise((e) => {
              e(t());
            }).then(() => e),
          (e) =>
            new Promise((e) => {
              e(t());
            }).then(() => {
              throw e;
            })
        )
      );
    },
    45860: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let a = r(78939),
        n = r(58147),
        i = r(66506),
        s = () => {},
        o = new n.TimeoutError();
      class l extends a {
        constructor(e) {
          var t, r, a, n;
          if (
            (super(),
            (this._intervalCount = 0),
            (this._intervalEnd = 0),
            (this._pendingCount = 0),
            (this._resolveEmpty = s),
            (this._resolveIdle = s),
            !(
              "number" ==
                typeof (e = Object.assign(
                  {
                    carryoverConcurrencyCount: !1,
                    intervalCap: 1 / 0,
                    interval: 0,
                    concurrency: 1 / 0,
                    autoStart: !0,
                    queueClass: i.default,
                  },
                  e
                )).intervalCap && e.intervalCap >= 1
            ))
          )
            throw TypeError(
              `Expected \`intervalCap\` to be a number from 1 and up, got \`${
                null !==
                  (r =
                    null === (t = e.intervalCap) || void 0 === t
                      ? void 0
                      : t.toString()) && void 0 !== r
                  ? r
                  : ""
              }\` (${typeof e.intervalCap})`
            );
          if (
            void 0 === e.interval ||
            !(Number.isFinite(e.interval) && e.interval >= 0)
          )
            throw TypeError(
              `Expected \`interval\` to be a finite number >= 0, got \`${
                null !==
                  (n =
                    null === (a = e.interval) || void 0 === a
                      ? void 0
                      : a.toString()) && void 0 !== n
                  ? n
                  : ""
              }\` (${typeof e.interval})`
            );
          (this._carryoverConcurrencyCount = e.carryoverConcurrencyCount),
            (this._isIntervalIgnored =
              e.intervalCap === 1 / 0 || 0 === e.interval),
            (this._intervalCap = e.intervalCap),
            (this._interval = e.interval),
            (this._queue = new e.queueClass()),
            (this._queueClass = e.queueClass),
            (this.concurrency = e.concurrency),
            (this._timeout = e.timeout),
            (this._throwOnTimeout = !0 === e.throwOnTimeout),
            (this._isPaused = !1 === e.autoStart);
        }
        get _doesIntervalAllowAnother() {
          return (
            this._isIntervalIgnored || this._intervalCount < this._intervalCap
          );
        }
        get _doesConcurrentAllowAnother() {
          return this._pendingCount < this._concurrency;
        }
        _next() {
          this._pendingCount--, this._tryToStartAnother(), this.emit("next");
        }
        _resolvePromises() {
          this._resolveEmpty(),
            (this._resolveEmpty = s),
            0 === this._pendingCount &&
              (this._resolveIdle(), (this._resolveIdle = s), this.emit("idle"));
        }
        _onResumeInterval() {
          this._onInterval(),
            this._initializeIntervalIfNeeded(),
            (this._timeoutId = void 0);
        }
        _isIntervalPaused() {
          let e = Date.now();
          if (void 0 === this._intervalId) {
            let t = this._intervalEnd - e;
            if (!(t < 0))
              return (
                void 0 === this._timeoutId &&
                  (this._timeoutId = setTimeout(() => {
                    this._onResumeInterval();
                  }, t)),
                !0
              );
            this._intervalCount = this._carryoverConcurrencyCount
              ? this._pendingCount
              : 0;
          }
          return !1;
        }
        _tryToStartAnother() {
          if (0 === this._queue.size)
            return (
              this._intervalId && clearInterval(this._intervalId),
              (this._intervalId = void 0),
              this._resolvePromises(),
              !1
            );
          if (!this._isPaused) {
            let e = !this._isIntervalPaused();
            if (
              this._doesIntervalAllowAnother &&
              this._doesConcurrentAllowAnother
            ) {
              let t = this._queue.dequeue();
              return (
                !!t &&
                (this.emit("active"),
                t(),
                e && this._initializeIntervalIfNeeded(),
                !0)
              );
            }
          }
          return !1;
        }
        _initializeIntervalIfNeeded() {
          this._isIntervalIgnored ||
            void 0 !== this._intervalId ||
            ((this._intervalId = setInterval(() => {
              this._onInterval();
            }, this._interval)),
            (this._intervalEnd = Date.now() + this._interval));
        }
        _onInterval() {
          0 === this._intervalCount &&
            0 === this._pendingCount &&
            this._intervalId &&
            (clearInterval(this._intervalId), (this._intervalId = void 0)),
            (this._intervalCount = this._carryoverConcurrencyCount
              ? this._pendingCount
              : 0),
            this._processQueue();
        }
        _processQueue() {
          for (; this._tryToStartAnother(); );
        }
        get concurrency() {
          return this._concurrency;
        }
        set concurrency(e) {
          if (!("number" == typeof e && e >= 1))
            throw TypeError(
              `Expected \`concurrency\` to be a number from 1 and up, got \`${e}\` (${typeof e})`
            );
          (this._concurrency = e), this._processQueue();
        }
        async add(e, t = {}) {
          return new Promise((r, a) => {
            let i = async () => {
              this._pendingCount++, this._intervalCount++;
              try {
                let i =
                  void 0 === this._timeout && void 0 === t.timeout
                    ? e()
                    : n.default(
                        Promise.resolve(e()),
                        void 0 === t.timeout ? this._timeout : t.timeout,
                        () => {
                          (void 0 === t.throwOnTimeout
                            ? this._throwOnTimeout
                            : t.throwOnTimeout) && a(o);
                        }
                      );
                r(await i);
              } catch (e) {
                a(e);
              }
              this._next();
            };
            this._queue.enqueue(i, t),
              this._tryToStartAnother(),
              this.emit("add");
          });
        }
        async addAll(e, t) {
          return Promise.all(e.map(async (e) => this.add(e, t)));
        }
        start() {
          return (
            this._isPaused && ((this._isPaused = !1), this._processQueue()),
            this
          );
        }
        pause() {
          this._isPaused = !0;
        }
        clear() {
          this._queue = new this._queueClass();
        }
        async onEmpty() {
          if (0 !== this._queue.size)
            return new Promise((e) => {
              let t = this._resolveEmpty;
              this._resolveEmpty = () => {
                t(), e();
              };
            });
        }
        async onIdle() {
          if (0 !== this._pendingCount || 0 !== this._queue.size)
            return new Promise((e) => {
              let t = this._resolveIdle;
              this._resolveIdle = () => {
                t(), e();
              };
            });
        }
        get size() {
          return this._queue.size;
        }
        sizeBy(e) {
          return this._queue.filter(e).length;
        }
        get pending() {
          return this._pendingCount;
        }
        get isPaused() {
          return this._isPaused;
        }
        get timeout() {
          return this._timeout;
        }
        set timeout(e) {
          this._timeout = e;
        }
      }
      t.default = l;
    },
    87489: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e, t, r) {
          let a = 0,
            n = e.length;
          for (; n > 0; ) {
            let i = (n / 2) | 0,
              s = a + i;
            0 >= r(e[s], t) ? ((a = ++s), (n -= i + 1)) : (n = i);
          }
          return a;
        });
    },
    66506: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let a = r(87489);
      class n {
        constructor() {
          this._queue = [];
        }
        enqueue(e, t) {
          let r = {
            priority: (t = Object.assign({ priority: 0 }, t)).priority,
            run: e,
          };
          if (this.size && this._queue[this.size - 1].priority >= t.priority) {
            this._queue.push(r);
            return;
          }
          let n = a.default(this._queue, r, (e, t) => t.priority - e.priority);
          this._queue.splice(n, 0, r);
        }
        dequeue() {
          let e = this._queue.shift();
          return null == e ? void 0 : e.run;
        }
        filter(e) {
          return this._queue
            .filter((t) => t.priority === e.priority)
            .map((e) => e.run);
        }
        get size() {
          return this._queue.length;
        }
      }
      t.default = n;
    },
    78939: function (e) {
      "use strict";
      var t = Object.prototype.hasOwnProperty,
        r = "~";
      function a() {}
      function n(e, t, r) {
        (this.fn = e), (this.context = t), (this.once = r || !1);
      }
      function i(e, t, a, i, s) {
        if ("function" != typeof a)
          throw TypeError("The listener must be a function");
        var o = new n(a, i || e, s),
          l = r ? r + t : t;
        return (
          e._events[l]
            ? e._events[l].fn
              ? (e._events[l] = [e._events[l], o])
              : e._events[l].push(o)
            : ((e._events[l] = o), e._eventsCount++),
          e
        );
      }
      function s(e, t) {
        0 == --e._eventsCount ? (e._events = new a()) : delete e._events[t];
      }
      function o() {
        (this._events = new a()), (this._eventsCount = 0);
      }
      Object.create &&
        ((a.prototype = Object.create(null)), new a().__proto__ || (r = !1)),
        (o.prototype.eventNames = function () {
          var e,
            a,
            n = [];
          if (0 === this._eventsCount) return n;
          for (a in (e = this._events))
            t.call(e, a) && n.push(r ? a.slice(1) : a);
          return Object.getOwnPropertySymbols
            ? n.concat(Object.getOwnPropertySymbols(e))
            : n;
        }),
        (o.prototype.listeners = function (e) {
          var t = r ? r + e : e,
            a = this._events[t];
          if (!a) return [];
          if (a.fn) return [a.fn];
          for (var n = 0, i = a.length, s = Array(i); n < i; n++)
            s[n] = a[n].fn;
          return s;
        }),
        (o.prototype.listenerCount = function (e) {
          var t = r ? r + e : e,
            a = this._events[t];
          return a ? (a.fn ? 1 : a.length) : 0;
        }),
        (o.prototype.emit = function (e, t, a, n, i, s) {
          var o = r ? r + e : e;
          if (!this._events[o]) return !1;
          var l,
            u,
            c = this._events[o],
            d = arguments.length;
          if (c.fn) {
            switch ((c.once && this.removeListener(e, c.fn, void 0, !0), d)) {
              case 1:
                return c.fn.call(c.context), !0;
              case 2:
                return c.fn.call(c.context, t), !0;
              case 3:
                return c.fn.call(c.context, t, a), !0;
              case 4:
                return c.fn.call(c.context, t, a, n), !0;
              case 5:
                return c.fn.call(c.context, t, a, n, i), !0;
              case 6:
                return c.fn.call(c.context, t, a, n, i, s), !0;
            }
            for (u = 1, l = Array(d - 1); u < d; u++) l[u - 1] = arguments[u];
            c.fn.apply(c.context, l);
          } else {
            var h,
              p = c.length;
            for (u = 0; u < p; u++)
              switch (
                (c[u].once && this.removeListener(e, c[u].fn, void 0, !0), d)
              ) {
                case 1:
                  c[u].fn.call(c[u].context);
                  break;
                case 2:
                  c[u].fn.call(c[u].context, t);
                  break;
                case 3:
                  c[u].fn.call(c[u].context, t, a);
                  break;
                case 4:
                  c[u].fn.call(c[u].context, t, a, n);
                  break;
                default:
                  if (!l)
                    for (h = 1, l = Array(d - 1); h < d; h++)
                      l[h - 1] = arguments[h];
                  c[u].fn.apply(c[u].context, l);
              }
          }
          return !0;
        }),
        (o.prototype.on = function (e, t, r) {
          return i(this, e, t, r, !1);
        }),
        (o.prototype.once = function (e, t, r) {
          return i(this, e, t, r, !0);
        }),
        (o.prototype.removeListener = function (e, t, a, n) {
          var i = r ? r + e : e;
          if (!this._events[i]) return this;
          if (!t) return s(this, i), this;
          var o = this._events[i];
          if (o.fn)
            o.fn !== t ||
              (n && !o.once) ||
              (a && o.context !== a) ||
              s(this, i);
          else {
            for (var l = 0, u = [], c = o.length; l < c; l++)
              (o[l].fn !== t ||
                (n && !o[l].once) ||
                (a && o[l].context !== a)) &&
                u.push(o[l]);
            u.length
              ? (this._events[i] = 1 === u.length ? u[0] : u)
              : s(this, i);
          }
          return this;
        }),
        (o.prototype.removeAllListeners = function (e) {
          var t;
          return (
            e
              ? ((t = r ? r + e : e), this._events[t] && s(this, t))
              : ((this._events = new a()), (this._eventsCount = 0)),
            this
          );
        }),
        (o.prototype.off = o.prototype.removeListener),
        (o.prototype.addListener = o.prototype.on),
        (o.prefixed = r),
        (o.EventEmitter = o),
        (e.exports = o);
    },
    42693: function (e, t, r) {
      "use strict";
      let a = r(99353),
        n = [
          "Failed to fetch",
          "NetworkError when attempting to fetch resource.",
          "The Internet connection appears to be offline.",
          "Network request failed",
        ];
      class i extends Error {
        constructor(e) {
          super(),
            e instanceof Error
              ? ((this.originalError = e), ({ message: e } = e))
              : ((this.originalError = Error(e)),
                (this.originalError.stack = this.stack)),
            (this.name = "AbortError"),
            (this.message = e);
        }
      }
      let s = (e, t, r) => {
          let a = r.retries - (t - 1);
          return (e.attemptNumber = t), (e.retriesLeft = a), e;
        },
        o = (e) => n.includes(e),
        l = (e, t) =>
          new Promise((r, n) => {
            t = { onFailedAttempt: () => {}, retries: 10, ...t };
            let l = a.operation(t);
            l.attempt(async (a) => {
              try {
                r(await e(a));
              } catch (e) {
                if (!(e instanceof Error)) {
                  n(
                    TypeError(
                      `Non-error was thrown: "${e}". You should only throw errors.`
                    )
                  );
                  return;
                }
                if (e instanceof i) l.stop(), n(e.originalError);
                else if (e instanceof TypeError && !o(e.message))
                  l.stop(), n(e);
                else {
                  s(e, a, t);
                  try {
                    await t.onFailedAttempt(e);
                  } catch (e) {
                    n(e);
                    return;
                  }
                  l.retry(e) || n(l.mainError());
                }
              }
            });
          });
      (e.exports = l), (e.exports.default = l), (e.exports.AbortError = i);
    },
    58147: function (e, t, r) {
      "use strict";
      let a = r(27345);
      class n extends Error {
        constructor(e) {
          super(e), (this.name = "TimeoutError");
        }
      }
      let i = (e, t, r) =>
        new Promise((i, s) => {
          if ("number" != typeof t || t < 0)
            throw TypeError("Expected `milliseconds` to be a positive number");
          if (t === 1 / 0) {
            i(e);
            return;
          }
          let o = setTimeout(() => {
            if ("function" == typeof r) {
              try {
                i(r());
              } catch (e) {
                s(e);
              }
              return;
            }
            let a =
                "string" == typeof r
                  ? r
                  : `Promise timed out after ${t} milliseconds`,
              o = r instanceof Error ? r : new n(a);
            "function" == typeof e.cancel && e.cancel(), s(o);
          }, t);
          a(e.then(i, s), () => {
            clearTimeout(o);
          });
        });
      (e.exports = i), (e.exports.default = i), (e.exports.TimeoutError = n);
    },
    99353: function (e, t, r) {
      e.exports = r(71846);
    },
    71846: function (e, t, r) {
      var a = r(41960);
      (t.operation = function (e) {
        return new a(t.timeouts(e), {
          forever: e && (e.forever || e.retries === 1 / 0),
          unref: e && e.unref,
          maxRetryTime: e && e.maxRetryTime,
        });
      }),
        (t.timeouts = function (e) {
          if (e instanceof Array) return [].concat(e);
          var t = {
            retries: 10,
            factor: 2,
            minTimeout: 1e3,
            maxTimeout: 1 / 0,
            randomize: !1,
          };
          for (var r in e) t[r] = e[r];
          if (t.minTimeout > t.maxTimeout)
            throw Error("minTimeout is greater than maxTimeout");
          for (var a = [], n = 0; n < t.retries; n++)
            a.push(this.createTimeout(n, t));
          return (
            e && e.forever && !a.length && a.push(this.createTimeout(n, t)),
            a.sort(function (e, t) {
              return e - t;
            }),
            a
          );
        }),
        (t.createTimeout = function (e, t) {
          return Math.min(
            Math.round(
              (t.randomize ? Math.random() + 1 : 1) *
                Math.max(t.minTimeout, 1) *
                Math.pow(t.factor, e)
            ),
            t.maxTimeout
          );
        }),
        (t.wrap = function (e, r, a) {
          if ((r instanceof Array && ((a = r), (r = null)), !a))
            for (var n in ((a = []), e)) "function" == typeof e[n] && a.push(n);
          for (var i = 0; i < a.length; i++) {
            var s = a[i],
              o = e[s];
            (e[s] = function (a) {
              var n = t.operation(r),
                i = Array.prototype.slice.call(arguments, 1),
                s = i.pop();
              i.push(function (e) {
                n.retry(e) ||
                  (e && (arguments[0] = n.mainError()),
                  s.apply(this, arguments));
              }),
                n.attempt(function () {
                  a.apply(e, i);
                });
            }.bind(e, o)),
              (e[s].options = r);
          }
        });
    },
    41960: function (e) {
      function t(e, t) {
        "boolean" == typeof t && (t = { forever: t }),
          (this._originalTimeouts = JSON.parse(JSON.stringify(e))),
          (this._timeouts = e),
          (this._options = t || {}),
          (this._maxRetryTime = (t && t.maxRetryTime) || 1 / 0),
          (this._fn = null),
          (this._errors = []),
          (this._attempts = 1),
          (this._operationTimeout = null),
          (this._operationTimeoutCb = null),
          (this._timeout = null),
          (this._operationStart = null),
          (this._timer = null),
          this._options.forever &&
            (this._cachedTimeouts = this._timeouts.slice(0));
      }
      (e.exports = t),
        (t.prototype.reset = function () {
          (this._attempts = 1),
            (this._timeouts = this._originalTimeouts.slice(0));
        }),
        (t.prototype.stop = function () {
          this._timeout && clearTimeout(this._timeout),
            this._timer && clearTimeout(this._timer),
            (this._timeouts = []),
            (this._cachedTimeouts = null);
        }),
        (t.prototype.retry = function (e) {
          if ((this._timeout && clearTimeout(this._timeout), !e)) return !1;
          var t = new Date().getTime();
          if (e && t - this._operationStart >= this._maxRetryTime)
            return (
              this._errors.push(e),
              this._errors.unshift(Error("RetryOperation timeout occurred")),
              !1
            );
          this._errors.push(e);
          var r = this._timeouts.shift();
          if (void 0 === r) {
            if (!this._cachedTimeouts) return !1;
            this._errors.splice(0, this._errors.length - 1),
              (r = this._cachedTimeouts.slice(-1));
          }
          var a = this;
          return (
            (this._timer = setTimeout(function () {
              a._attempts++,
                a._operationTimeoutCb &&
                  ((a._timeout = setTimeout(function () {
                    a._operationTimeoutCb(a._attempts);
                  }, a._operationTimeout)),
                  a._options.unref && a._timeout.unref()),
                a._fn(a._attempts);
            }, r)),
            this._options.unref && this._timer.unref(),
            !0
          );
        }),
        (t.prototype.attempt = function (e, t) {
          (this._fn = e),
            t &&
              (t.timeout && (this._operationTimeout = t.timeout),
              t.cb && (this._operationTimeoutCb = t.cb));
          var r = this;
          this._operationTimeoutCb &&
            (this._timeout = setTimeout(function () {
              r._operationTimeoutCb();
            }, r._operationTimeout)),
            (this._operationStart = new Date().getTime()),
            this._fn(this._attempts);
        }),
        (t.prototype.try = function (e) {
          console.log("Using RetryOperation.try() is deprecated"),
            this.attempt(e);
        }),
        (t.prototype.start = function (e) {
          console.log("Using RetryOperation.start() is deprecated"),
            this.attempt(e);
        }),
        (t.prototype.start = t.prototype.try),
        (t.prototype.errors = function () {
          return this._errors;
        }),
        (t.prototype.attempts = function () {
          return this._attempts;
        }),
        (t.prototype.mainError = function () {
          if (0 === this._errors.length) return null;
          for (
            var e = {}, t = null, r = 0, a = 0;
            a < this._errors.length;
            a++
          ) {
            var n = this._errors[a],
              i = n.message,
              s = (e[i] || 0) + 1;
            (e[i] = s), s >= r && ((t = n), (r = s));
          }
          return t;
        });
    },
    22257: function (e, t, r) {
      let a = Symbol("SemVer ANY");
      class n {
        static get ANY() {
          return a;
        }
        constructor(e, t) {
          if (((t = i(t)), e instanceof n)) {
            if (!!t.loose === e.loose) return e;
            e = e.value;
          }
          u("comparator", (e = e.trim().split(/\s+/).join(" ")), t),
            (this.options = t),
            (this.loose = !!t.loose),
            this.parse(e),
            this.semver === a
              ? (this.value = "")
              : (this.value = this.operator + this.semver.version),
            u("comp", this);
        }
        parse(e) {
          let t = this.options.loose ? s[o.COMPARATORLOOSE] : s[o.COMPARATOR],
            r = e.match(t);
          if (!r) throw TypeError(`Invalid comparator: ${e}`);
          (this.operator = void 0 !== r[1] ? r[1] : ""),
            "=" === this.operator && (this.operator = ""),
            r[2]
              ? (this.semver = new c(r[2], this.options.loose))
              : (this.semver = a);
        }
        toString() {
          return this.value;
        }
        test(e) {
          if (
            (u("Comparator.test", e, this.options.loose),
            this.semver === a || e === a)
          )
            return !0;
          if ("string" == typeof e)
            try {
              e = new c(e, this.options);
            } catch (e) {
              return !1;
            }
          return l(e, this.operator, this.semver, this.options);
        }
        intersects(e, t) {
          if (!(e instanceof n)) throw TypeError("a Comparator is required");
          return "" === this.operator
            ? "" === this.value || new d(e.value, t).test(this.value)
            : "" === e.operator
            ? "" === e.value || new d(this.value, t).test(e.semver)
            : !(
                ((t = i(t)).includePrerelease &&
                  ("<0.0.0-0" === this.value || "<0.0.0-0" === e.value)) ||
                (!t.includePrerelease &&
                  (this.value.startsWith("<0.0.0") ||
                    e.value.startsWith("<0.0.0")))
              ) &&
              !!(
                (this.operator.startsWith(">") && e.operator.startsWith(">")) ||
                (this.operator.startsWith("<") && e.operator.startsWith("<")) ||
                (this.semver.version === e.semver.version &&
                  this.operator.includes("=") &&
                  e.operator.includes("=")) ||
                (l(this.semver, "<", e.semver, t) &&
                  this.operator.startsWith(">") &&
                  e.operator.startsWith("<")) ||
                (l(this.semver, ">", e.semver, t) &&
                  this.operator.startsWith("<") &&
                  e.operator.startsWith(">"))
              );
        }
      }
      e.exports = n;
      let i = r(12893),
        { safeRe: s, t: o } = r(55765),
        l = r(7539),
        u = r(74225),
        c = r(26376),
        d = r(66902);
    },
    66902: function (e, t, r) {
      let a = /\s+/g;
      class n {
        constructor(e, t) {
          if (((t = s(t)), e instanceof n)) {
            if (
              !!t.loose === e.loose &&
              !!t.includePrerelease === e.includePrerelease
            )
              return e;
            return new n(e.raw, t);
          }
          if (e instanceof o)
            return (
              (this.raw = e.value),
              (this.set = [[e]]),
              (this.formatted = void 0),
              this
            );
          if (
            ((this.options = t),
            (this.loose = !!t.loose),
            (this.includePrerelease = !!t.includePrerelease),
            (this.raw = e.trim().replace(a, " ")),
            (this.set = this.raw
              .split("||")
              .map((e) => this.parseRange(e.trim()))
              .filter((e) => e.length)),
            !this.set.length)
          )
            throw TypeError(`Invalid SemVer Range: ${this.raw}`);
          if (this.set.length > 1) {
            let e = this.set[0];
            if (
              ((this.set = this.set.filter((e) => !y(e[0]))),
              0 === this.set.length)
            )
              this.set = [e];
            else if (this.set.length > 1) {
              for (let e of this.set)
                if (1 === e.length && b(e[0])) {
                  this.set = [e];
                  break;
                }
            }
          }
          this.formatted = void 0;
        }
        get range() {
          if (void 0 === this.formatted) {
            this.formatted = "";
            for (let e = 0; e < this.set.length; e++) {
              e > 0 && (this.formatted += "||");
              let t = this.set[e];
              for (let e = 0; e < t.length; e++)
                e > 0 && (this.formatted += " "),
                  (this.formatted += t[e].toString().trim());
            }
          }
          return this.formatted;
        }
        format() {
          return this.range;
        }
        toString() {
          return this.range;
        }
        parseRange(e) {
          let t =
              ((this.options.includePrerelease && m) |
                (this.options.loose && g)) +
              ":" +
              e,
            r = i.get(t);
          if (r) return r;
          let a = this.options.loose,
            n = a ? c[d.HYPHENRANGELOOSE] : c[d.HYPHENRANGE];
          l(
            "hyphen replace",
            (e = e.replace(n, T(this.options.includePrerelease)))
          ),
            l("comparator trim", (e = e.replace(c[d.COMPARATORTRIM], h))),
            l("tilde trim", (e = e.replace(c[d.TILDETRIM], p))),
            l("caret trim", (e = e.replace(c[d.CARETTRIM], f)));
          let s = e
            .split(" ")
            .map((e) => v(e, this.options))
            .join(" ")
            .split(/\s+/)
            .map((e) => I(e, this.options));
          a &&
            (s = s.filter(
              (e) => (
                l("loose invalid filter", e, this.options),
                !!e.match(c[d.COMPARATORLOOSE])
              )
            )),
            l("range list", s);
          let u = new Map();
          for (let e of s.map((e) => new o(e, this.options))) {
            if (y(e)) return [e];
            u.set(e.value, e);
          }
          u.size > 1 && u.has("") && u.delete("");
          let b = [...u.values()];
          return i.set(t, b), b;
        }
        intersects(e, t) {
          if (!(e instanceof n)) throw TypeError("a Range is required");
          return this.set.some(
            (r) =>
              _(r, t) &&
              e.set.some(
                (e) =>
                  _(e, t) && r.every((r) => e.every((e) => r.intersects(e, t)))
              )
          );
        }
        test(e) {
          if (!e) return !1;
          if ("string" == typeof e)
            try {
              e = new u(e, this.options);
            } catch (e) {
              return !1;
            }
          for (let t = 0; t < this.set.length; t++)
            if (R(this.set[t], e, this.options)) return !0;
          return !1;
        }
      }
      e.exports = n;
      let i = new (r(99659))(),
        s = r(12893),
        o = r(22257),
        l = r(74225),
        u = r(26376),
        {
          safeRe: c,
          t: d,
          comparatorTrimReplace: h,
          tildeTrimReplace: p,
          caretTrimReplace: f,
        } = r(55765),
        { FLAG_INCLUDE_PRERELEASE: m, FLAG_LOOSE: g } = r(83295),
        y = (e) => "<0.0.0-0" === e.value,
        b = (e) => "" === e.value,
        _ = (e, t) => {
          let r = !0,
            a = e.slice(),
            n = a.pop();
          for (; r && a.length; )
            (r = a.every((e) => n.intersects(e, t))), (n = a.pop());
          return r;
        },
        v = (e, t) => (
          l("comp", e, t),
          l("caret", (e = O(e, t))),
          l("tildes", (e = E(e, t))),
          l("xrange", (e = S(e, t))),
          l("stars", (e = P(e, t))),
          e
        ),
        w = (e) => !e || "x" === e.toLowerCase() || "*" === e,
        E = (e, t) =>
          e
            .trim()
            .split(/\s+/)
            .map((e) => x(e, t))
            .join(" "),
        x = (e, t) => {
          let r = t.loose ? c[d.TILDELOOSE] : c[d.TILDE];
          return e.replace(r, (t, r, a, n, i) => {
            let s;
            return (
              l("tilde", e, t, r, a, n, i),
              w(r)
                ? (s = "")
                : w(a)
                ? (s = `>=${r}.0.0 <${+r + 1}.0.0-0`)
                : w(n)
                ? (s = `>=${r}.${a}.0 <${r}.${+a + 1}.0-0`)
                : i
                ? (l("replaceTilde pr", i),
                  (s = `>=${r}.${a}.${n}-${i} <${r}.${+a + 1}.0-0`))
                : (s = `>=${r}.${a}.${n} <${r}.${+a + 1}.0-0`),
              l("tilde return", s),
              s
            );
          });
        },
        O = (e, t) =>
          e
            .trim()
            .split(/\s+/)
            .map((e) => k(e, t))
            .join(" "),
        k = (e, t) => {
          l("caret", e, t);
          let r = t.loose ? c[d.CARETLOOSE] : c[d.CARET],
            a = t.includePrerelease ? "-0" : "";
          return e.replace(r, (t, r, n, i, s) => {
            let o;
            return (
              l("caret", e, t, r, n, i, s),
              w(r)
                ? (o = "")
                : w(n)
                ? (o = `>=${r}.0.0${a} <${+r + 1}.0.0-0`)
                : w(i)
                ? (o =
                    "0" === r
                      ? `>=${r}.${n}.0${a} <${r}.${+n + 1}.0-0`
                      : `>=${r}.${n}.0${a} <${+r + 1}.0.0-0`)
                : s
                ? (l("replaceCaret pr", s),
                  (o =
                    "0" === r
                      ? "0" === n
                        ? `>=${r}.${n}.${i}-${s} <${r}.${n}.${+i + 1}-0`
                        : `>=${r}.${n}.${i}-${s} <${r}.${+n + 1}.0-0`
                      : `>=${r}.${n}.${i}-${s} <${+r + 1}.0.0-0`))
                : (l("no pr"),
                  (o =
                    "0" === r
                      ? "0" === n
                        ? `>=${r}.${n}.${i}${a} <${r}.${n}.${+i + 1}-0`
                        : `>=${r}.${n}.${i}${a} <${r}.${+n + 1}.0-0`
                      : `>=${r}.${n}.${i} <${+r + 1}.0.0-0`)),
              l("caret return", o),
              o
            );
          });
        },
        S = (e, t) => (
          l("replaceXRanges", e, t),
          e
            .split(/\s+/)
            .map((e) => A(e, t))
            .join(" ")
        ),
        A = (e, t) => {
          e = e.trim();
          let r = t.loose ? c[d.XRANGELOOSE] : c[d.XRANGE];
          return e.replace(r, (r, a, n, i, s, o) => {
            l("xRange", e, r, a, n, i, s, o);
            let u = w(n),
              c = u || w(i),
              d = c || w(s);
            return (
              "=" === a && d && (a = ""),
              (o = t.includePrerelease ? "-0" : ""),
              u
                ? (r = ">" === a || "<" === a ? "<0.0.0-0" : "*")
                : a && d
                ? (c && (i = 0),
                  (s = 0),
                  ">" === a
                    ? ((a = ">="),
                      c ? ((n = +n + 1), (i = 0)) : (i = +i + 1),
                      (s = 0))
                    : "<=" === a &&
                      ((a = "<"), c ? (n = +n + 1) : (i = +i + 1)),
                  "<" === a && (o = "-0"),
                  (r = `${a + n}.${i}.${s}${o}`))
                : c
                ? (r = `>=${n}.0.0${o} <${+n + 1}.0.0-0`)
                : d && (r = `>=${n}.${i}.0${o} <${n}.${+i + 1}.0-0`),
              l("xRange return", r),
              r
            );
          });
        },
        P = (e, t) => (
          l("replaceStars", e, t), e.trim().replace(c[d.STAR], "")
        ),
        I = (e, t) => (
          l("replaceGTE0", e, t),
          e.trim().replace(c[t.includePrerelease ? d.GTE0PRE : d.GTE0], "")
        ),
        T = (e) => (t, r, a, n, i, s, o, l, u, c, d, h) => (
          (r = w(a)
            ? ""
            : w(n)
            ? `>=${a}.0.0${e ? "-0" : ""}`
            : w(i)
            ? `>=${a}.${n}.0${e ? "-0" : ""}`
            : s
            ? `>=${r}`
            : `>=${r}${e ? "-0" : ""}`),
          (l = w(u)
            ? ""
            : w(c)
            ? `<${+u + 1}.0.0-0`
            : w(d)
            ? `<${u}.${+c + 1}.0-0`
            : h
            ? `<=${u}.${c}.${d}-${h}`
            : e
            ? `<${u}.${c}.${+d + 1}-0`
            : `<=${l}`),
          `${r} ${l}`.trim()
        ),
        R = (e, t, r) => {
          for (let r = 0; r < e.length; r++) if (!e[r].test(t)) return !1;
          if (t.prerelease.length && !r.includePrerelease) {
            for (let r = 0; r < e.length; r++)
              if (
                (l(e[r].semver),
                e[r].semver !== o.ANY && e[r].semver.prerelease.length > 0)
              ) {
                let a = e[r].semver;
                if (
                  a.major === t.major &&
                  a.minor === t.minor &&
                  a.patch === t.patch
                )
                  return !0;
              }
            return !1;
          }
          return !0;
        };
    },
    26376: function (e, t, r) {
      let a = r(74225),
        { MAX_LENGTH: n, MAX_SAFE_INTEGER: i } = r(83295),
        { safeRe: s, t: o } = r(55765),
        l = r(12893),
        { compareIdentifiers: u } = r(86742);
      class c {
        constructor(e, t) {
          if (((t = l(t)), e instanceof c)) {
            if (
              !!t.loose === e.loose &&
              !!t.includePrerelease === e.includePrerelease
            )
              return e;
            e = e.version;
          } else if ("string" != typeof e)
            throw TypeError(
              `Invalid version. Must be a string. Got type "${typeof e}".`
            );
          if (e.length > n)
            throw TypeError(`version is longer than ${n} characters`);
          a("SemVer", e, t),
            (this.options = t),
            (this.loose = !!t.loose),
            (this.includePrerelease = !!t.includePrerelease);
          let r = e.trim().match(t.loose ? s[o.LOOSE] : s[o.FULL]);
          if (!r) throw TypeError(`Invalid Version: ${e}`);
          if (
            ((this.raw = e),
            (this.major = +r[1]),
            (this.minor = +r[2]),
            (this.patch = +r[3]),
            this.major > i || this.major < 0)
          )
            throw TypeError("Invalid major version");
          if (this.minor > i || this.minor < 0)
            throw TypeError("Invalid minor version");
          if (this.patch > i || this.patch < 0)
            throw TypeError("Invalid patch version");
          r[4]
            ? (this.prerelease = r[4].split(".").map((e) => {
                if (/^[0-9]+$/.test(e)) {
                  let t = +e;
                  if (t >= 0 && t < i) return t;
                }
                return e;
              }))
            : (this.prerelease = []),
            (this.build = r[5] ? r[5].split(".") : []),
            this.format();
        }
        format() {
          return (
            (this.version = `${this.major}.${this.minor}.${this.patch}`),
            this.prerelease.length &&
              (this.version += `-${this.prerelease.join(".")}`),
            this.version
          );
        }
        toString() {
          return this.version;
        }
        compare(e) {
          if (
            (a("SemVer.compare", this.version, this.options, e),
            !(e instanceof c))
          ) {
            if ("string" == typeof e && e === this.version) return 0;
            e = new c(e, this.options);
          }
          return e.version === this.version
            ? 0
            : this.compareMain(e) || this.comparePre(e);
        }
        compareMain(e) {
          return (
            e instanceof c || (e = new c(e, this.options)),
            u(this.major, e.major) ||
              u(this.minor, e.minor) ||
              u(this.patch, e.patch)
          );
        }
        comparePre(e) {
          if (
            (e instanceof c || (e = new c(e, this.options)),
            this.prerelease.length && !e.prerelease.length)
          )
            return -1;
          if (!this.prerelease.length && e.prerelease.length) return 1;
          if (!this.prerelease.length && !e.prerelease.length) return 0;
          let t = 0;
          do {
            let r = this.prerelease[t],
              n = e.prerelease[t];
            if (
              (a("prerelease compare", t, r, n), void 0 === r && void 0 === n)
            )
              return 0;
            if (void 0 === n) return 1;
            if (void 0 === r) return -1;
            if (r === n) continue;
            else return u(r, n);
          } while (++t);
        }
        compareBuild(e) {
          e instanceof c || (e = new c(e, this.options));
          let t = 0;
          do {
            let r = this.build[t],
              n = e.build[t];
            if ((a("build compare", t, r, n), void 0 === r && void 0 === n))
              return 0;
            if (void 0 === n) return 1;
            if (void 0 === r) return -1;
            if (r === n) continue;
            else return u(r, n);
          } while (++t);
        }
        inc(e, t, r) {
          switch (e) {
            case "premajor":
              (this.prerelease.length = 0),
                (this.patch = 0),
                (this.minor = 0),
                this.major++,
                this.inc("pre", t, r);
              break;
            case "preminor":
              (this.prerelease.length = 0),
                (this.patch = 0),
                this.minor++,
                this.inc("pre", t, r);
              break;
            case "prepatch":
              (this.prerelease.length = 0),
                this.inc("patch", t, r),
                this.inc("pre", t, r);
              break;
            case "prerelease":
              0 === this.prerelease.length && this.inc("patch", t, r),
                this.inc("pre", t, r);
              break;
            case "major":
              (0 !== this.minor ||
                0 !== this.patch ||
                0 === this.prerelease.length) &&
                this.major++,
                (this.minor = 0),
                (this.patch = 0),
                (this.prerelease = []);
              break;
            case "minor":
              (0 !== this.patch || 0 === this.prerelease.length) &&
                this.minor++,
                (this.patch = 0),
                (this.prerelease = []);
              break;
            case "patch":
              0 === this.prerelease.length && this.patch++,
                (this.prerelease = []);
              break;
            case "pre": {
              let e = Number(r) ? 1 : 0;
              if (!t && !1 === r)
                throw Error("invalid increment argument: identifier is empty");
              if (0 === this.prerelease.length) this.prerelease = [e];
              else {
                let a = this.prerelease.length;
                for (; --a >= 0; )
                  "number" == typeof this.prerelease[a] &&
                    (this.prerelease[a]++, (a = -2));
                if (-1 === a) {
                  if (t === this.prerelease.join(".") && !1 === r)
                    throw Error(
                      "invalid increment argument: identifier already exists"
                    );
                  this.prerelease.push(e);
                }
              }
              if (t) {
                let a = [t, e];
                !1 === r && (a = [t]),
                  0 === u(this.prerelease[0], t)
                    ? isNaN(this.prerelease[1]) && (this.prerelease = a)
                    : (this.prerelease = a);
              }
              break;
            }
            default:
              throw Error(`invalid increment argument: ${e}`);
          }
          return (
            (this.raw = this.format()),
            this.build.length && (this.raw += `+${this.build.join(".")}`),
            this
          );
        }
      }
      e.exports = c;
    },
    13507: function (e, t, r) {
      let a = r(33959);
      e.exports = (e, t) => {
        let r = a(e.trim().replace(/^[=v]+/, ""), t);
        return r ? r.version : null;
      };
    },
    7539: function (e, t, r) {
      let a = r(58718),
        n = r(81194),
        i = r(71312),
        s = r(25903),
        o = r(21544),
        l = r(12056);
      e.exports = (e, t, r, u) => {
        switch (t) {
          case "===":
            return (
              "object" == typeof e && (e = e.version),
              "object" == typeof r && (r = r.version),
              e === r
            );
          case "!==":
            return (
              "object" == typeof e && (e = e.version),
              "object" == typeof r && (r = r.version),
              e !== r
            );
          case "":
          case "=":
          case "==":
            return a(e, r, u);
          case "!=":
            return n(e, r, u);
          case ">":
            return i(e, r, u);
          case ">=":
            return s(e, r, u);
          case "<":
            return o(e, r, u);
          case "<=":
            return l(e, r, u);
          default:
            throw TypeError(`Invalid operator: ${t}`);
        }
      };
    },
    99038: function (e, t, r) {
      let a = r(26376),
        n = r(33959),
        { safeRe: i, t: s } = r(55765);
      e.exports = (e, t) => {
        if (e instanceof a) return e;
        if (("number" == typeof e && (e = String(e)), "string" != typeof e))
          return null;
        let r = null;
        if ((t = t || {}).rtl) {
          let a;
          let n = t.includePrerelease ? i[s.COERCERTLFULL] : i[s.COERCERTL];
          for (
            ;
            (a = n.exec(e)) && (!r || r.index + r[0].length !== e.length);

          )
            (r && a.index + a[0].length === r.index + r[0].length) || (r = a),
              (n.lastIndex = a.index + a[1].length + a[2].length);
          n.lastIndex = -1;
        } else r = e.match(t.includePrerelease ? i[s.COERCEFULL] : i[s.COERCE]);
        if (null === r) return null;
        let o = r[2],
          l = r[3] || "0",
          u = r[4] || "0",
          c = t.includePrerelease && r[5] ? `-${r[5]}` : "",
          d = t.includePrerelease && r[6] ? `+${r[6]}` : "";
        return n(`${o}.${l}.${u}${c}${d}`, t);
      };
    },
    88880: function (e, t, r) {
      let a = r(26376);
      e.exports = (e, t, r) => {
        let n = new a(e, r),
          i = new a(t, r);
        return n.compare(i) || n.compareBuild(i);
      };
    },
    27880: function (e, t, r) {
      let a = r(46269);
      e.exports = (e, t) => a(e, t, !0);
    },
    46269: function (e, t, r) {
      let a = r(26376);
      e.exports = (e, t, r) => new a(e, r).compare(new a(t, r));
    },
    62378: function (e, t, r) {
      let a = r(33959);
      e.exports = (e, t) => {
        let r = a(e, null, !0),
          n = a(t, null, !0),
          i = r.compare(n);
        if (0 === i) return null;
        let s = i > 0,
          o = s ? r : n,
          l = s ? n : r,
          u = !!o.prerelease.length;
        if (l.prerelease.length && !u)
          return l.patch || l.minor
            ? o.patch
              ? "patch"
              : o.minor
              ? "minor"
              : "major"
            : "major";
        let c = u ? "pre" : "";
        return r.major !== n.major
          ? c + "major"
          : r.minor !== n.minor
          ? c + "minor"
          : r.patch !== n.patch
          ? c + "patch"
          : "prerelease";
      };
    },
    58718: function (e, t, r) {
      let a = r(46269);
      e.exports = (e, t, r) => 0 === a(e, t, r);
    },
    71312: function (e, t, r) {
      let a = r(46269);
      e.exports = (e, t, r) => a(e, t, r) > 0;
    },
    25903: function (e, t, r) {
      let a = r(46269);
      e.exports = (e, t, r) => a(e, t, r) >= 0;
    },
    20253: function (e, t, r) {
      let a = r(26376);
      e.exports = (e, t, r, n, i) => {
        "string" == typeof r && ((i = n), (n = r), (r = void 0));
        try {
          return new a(e instanceof a ? e.version : e, r).inc(t, n, i).version;
        } catch (e) {
          return null;
        }
      };
    },
    21544: function (e, t, r) {
      let a = r(46269);
      e.exports = (e, t, r) => 0 > a(e, t, r);
    },
    12056: function (e, t, r) {
      let a = r(46269);
      e.exports = (e, t, r) => 0 >= a(e, t, r);
    },
    38679: function (e, t, r) {
      let a = r(26376);
      e.exports = (e, t) => new a(e, t).major;
    },
    87789: function (e, t, r) {
      let a = r(26376);
      e.exports = (e, t) => new a(e, t).minor;
    },
    81194: function (e, t, r) {
      let a = r(46269);
      e.exports = (e, t, r) => 0 !== a(e, t, r);
    },
    33959: function (e, t, r) {
      let a = r(26376);
      e.exports = (e, t, r = !1) => {
        if (e instanceof a) return e;
        try {
          return new a(e, t);
        } catch (e) {
          if (!r) return null;
          throw e;
        }
      };
    },
    52358: function (e, t, r) {
      let a = r(26376);
      e.exports = (e, t) => new a(e, t).patch;
    },
    57559: function (e, t, r) {
      let a = r(33959);
      e.exports = (e, t) => {
        let r = a(e, t);
        return r && r.prerelease.length ? r.prerelease : null;
      };
    },
    79795: function (e, t, r) {
      let a = r(46269);
      e.exports = (e, t, r) => a(t, e, r);
    },
    63657: function (e, t, r) {
      let a = r(88880);
      e.exports = (e, t) => e.sort((e, r) => a(r, e, t));
    },
    45712: function (e, t, r) {
      let a = r(66902);
      e.exports = (e, t, r) => {
        try {
          t = new a(t, r);
        } catch (e) {
          return !1;
        }
        return t.test(e);
      };
    },
    21100: function (e, t, r) {
      let a = r(88880);
      e.exports = (e, t) => e.sort((e, r) => a(e, r, t));
    },
    76397: function (e, t, r) {
      let a = r(33959);
      e.exports = (e, t) => {
        let r = a(e, t);
        return r ? r.version : null;
      };
    },
    81249: function (e, t, r) {
      let a = r(55765),
        n = r(83295),
        i = r(26376),
        s = r(86742),
        o = r(33959),
        l = r(76397),
        u = r(13507),
        c = r(20253),
        d = r(62378),
        h = r(38679),
        p = r(87789),
        f = r(52358),
        m = r(57559),
        g = r(46269),
        y = r(79795),
        b = r(27880),
        _ = r(88880),
        v = r(21100),
        w = r(63657),
        E = r(71312),
        x = r(21544),
        O = r(58718),
        k = r(81194),
        S = r(25903),
        A = r(12056),
        P = r(7539),
        I = r(99038),
        T = r(22257),
        R = r(66902),
        $ = r(45712),
        j = r(51042),
        C = r(85775),
        N = r(71657),
        L = r(95316),
        M = r(89042),
        U = r(6826),
        D = r(97606),
        F = r(50032),
        Z = r(82937),
        B = r(17908),
        q = r(50799);
      e.exports = {
        parse: o,
        valid: l,
        clean: u,
        inc: c,
        diff: d,
        major: h,
        minor: p,
        patch: f,
        prerelease: m,
        compare: g,
        rcompare: y,
        compareLoose: b,
        compareBuild: _,
        sort: v,
        rsort: w,
        gt: E,
        lt: x,
        eq: O,
        neq: k,
        gte: S,
        lte: A,
        cmp: P,
        coerce: I,
        Comparator: T,
        Range: R,
        satisfies: $,
        toComparators: j,
        maxSatisfying: C,
        minSatisfying: N,
        minVersion: L,
        validRange: M,
        outside: U,
        gtr: D,
        ltr: F,
        intersects: Z,
        simplifyRange: B,
        subset: q,
        SemVer: i,
        re: a.re,
        src: a.src,
        tokens: a.t,
        SEMVER_SPEC_VERSION: n.SEMVER_SPEC_VERSION,
        RELEASE_TYPES: n.RELEASE_TYPES,
        compareIdentifiers: s.compareIdentifiers,
        rcompareIdentifiers: s.rcompareIdentifiers,
      };
    },
    83295: function (e) {
      let t = Number.MAX_SAFE_INTEGER || 9007199254740991;
      e.exports = {
        MAX_LENGTH: 256,
        MAX_SAFE_COMPONENT_LENGTH: 16,
        MAX_SAFE_BUILD_LENGTH: 250,
        MAX_SAFE_INTEGER: t,
        RELEASE_TYPES: [
          "major",
          "premajor",
          "minor",
          "preminor",
          "patch",
          "prepatch",
          "prerelease",
        ],
        SEMVER_SPEC_VERSION: "2.0.0",
        FLAG_INCLUDE_PRERELEASE: 1,
        FLAG_LOOSE: 2,
      };
    },
    74225: function (e, t, r) {
      var a = r(34155);
      let n =
        "object" == typeof a &&
        a.env &&
        a.env.NODE_DEBUG &&
        /\bsemver\b/i.test(a.env.NODE_DEBUG)
          ? (...e) => console.error("SEMVER", ...e)
          : () => {};
      e.exports = n;
    },
    86742: function (e) {
      let t = /^[0-9]+$/,
        r = (e, r) => {
          let a = t.test(e),
            n = t.test(r);
          return (
            a && n && ((e = +e), (r = +r)),
            e === r ? 0 : a && !n ? -1 : n && !a ? 1 : e < r ? -1 : 1
          );
        };
      e.exports = {
        compareIdentifiers: r,
        rcompareIdentifiers: (e, t) => r(t, e),
      };
    },
    99659: function (e) {
      class t {
        constructor() {
          (this.max = 1e3), (this.map = new Map());
        }
        get(e) {
          let t = this.map.get(e);
          if (void 0 !== t) return this.map.delete(e), this.map.set(e, t), t;
        }
        delete(e) {
          return this.map.delete(e);
        }
        set(e, t) {
          if (!this.delete(e) && void 0 !== t) {
            if (this.map.size >= this.max) {
              let e = this.map.keys().next().value;
              this.delete(e);
            }
            this.map.set(e, t);
          }
          return this;
        }
      }
      e.exports = t;
    },
    12893: function (e) {
      let t = Object.freeze({ loose: !0 }),
        r = Object.freeze({});
      e.exports = (e) => (e ? ("object" != typeof e ? t : e) : r);
    },
    55765: function (e, t, r) {
      let {
          MAX_SAFE_COMPONENT_LENGTH: a,
          MAX_SAFE_BUILD_LENGTH: n,
          MAX_LENGTH: i,
        } = r(83295),
        s = r(74225),
        o = ((t = e.exports = {}).re = []),
        l = (t.safeRe = []),
        u = (t.src = []),
        c = (t.t = {}),
        d = 0,
        h = "[a-zA-Z0-9-]",
        p = [
          ["\\s", 1],
          ["\\d", i],
          [h, n],
        ],
        f = (e) => {
          for (let [t, r] of p)
            e = e
              .split(`${t}*`)
              .join(`${t}{0,${r}}`)
              .split(`${t}+`)
              .join(`${t}{1,${r}}`);
          return e;
        },
        m = (e, t, r) => {
          let a = f(t),
            n = d++;
          s(e, n, t),
            (c[e] = n),
            (u[n] = t),
            (o[n] = new RegExp(t, r ? "g" : void 0)),
            (l[n] = new RegExp(a, r ? "g" : void 0));
        };
      m("NUMERICIDENTIFIER", "0|[1-9]\\d*"),
        m("NUMERICIDENTIFIERLOOSE", "\\d+"),
        m("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${h}*`),
        m(
          "MAINVERSION",
          `(${u[c.NUMERICIDENTIFIER]})\\.(${u[c.NUMERICIDENTIFIER]})\\.(${
            u[c.NUMERICIDENTIFIER]
          })`
        ),
        m(
          "MAINVERSIONLOOSE",
          `(${u[c.NUMERICIDENTIFIERLOOSE]})\\.(${
            u[c.NUMERICIDENTIFIERLOOSE]
          })\\.(${u[c.NUMERICIDENTIFIERLOOSE]})`
        ),
        m(
          "PRERELEASEIDENTIFIER",
          `(?:${u[c.NUMERICIDENTIFIER]}|${u[c.NONNUMERICIDENTIFIER]})`
        ),
        m(
          "PRERELEASEIDENTIFIERLOOSE",
          `(?:${u[c.NUMERICIDENTIFIERLOOSE]}|${u[c.NONNUMERICIDENTIFIER]})`
        ),
        m(
          "PRERELEASE",
          `(?:-(${u[c.PRERELEASEIDENTIFIER]}(?:\\.${
            u[c.PRERELEASEIDENTIFIER]
          })*))`
        ),
        m(
          "PRERELEASELOOSE",
          `(?:-?(${u[c.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${
            u[c.PRERELEASEIDENTIFIERLOOSE]
          })*))`
        ),
        m("BUILDIDENTIFIER", `${h}+`),
        m(
          "BUILD",
          `(?:\\+(${u[c.BUILDIDENTIFIER]}(?:\\.${u[c.BUILDIDENTIFIER]})*))`
        ),
        m(
          "FULLPLAIN",
          `v?${u[c.MAINVERSION]}${u[c.PRERELEASE]}?${u[c.BUILD]}?`
        ),
        m("FULL", `^${u[c.FULLPLAIN]}$`),
        m(
          "LOOSEPLAIN",
          `[v=\\s]*${u[c.MAINVERSIONLOOSE]}${u[c.PRERELEASELOOSE]}?${
            u[c.BUILD]
          }?`
        ),
        m("LOOSE", `^${u[c.LOOSEPLAIN]}$`),
        m("GTLT", "((?:<|>)?=?)"),
        m("XRANGEIDENTIFIERLOOSE", `${u[c.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),
        m("XRANGEIDENTIFIER", `${u[c.NUMERICIDENTIFIER]}|x|X|\\*`),
        m(
          "XRANGEPLAIN",
          `[v=\\s]*(${u[c.XRANGEIDENTIFIER]})(?:\\.(${
            u[c.XRANGEIDENTIFIER]
          })(?:\\.(${u[c.XRANGEIDENTIFIER]})(?:${u[c.PRERELEASE]})?${
            u[c.BUILD]
          }?)?)?`
        ),
        m(
          "XRANGEPLAINLOOSE",
          `[v=\\s]*(${u[c.XRANGEIDENTIFIERLOOSE]})(?:\\.(${
            u[c.XRANGEIDENTIFIERLOOSE]
          })(?:\\.(${u[c.XRANGEIDENTIFIERLOOSE]})(?:${u[c.PRERELEASELOOSE]})?${
            u[c.BUILD]
          }?)?)?`
        ),
        m("XRANGE", `^${u[c.GTLT]}\\s*${u[c.XRANGEPLAIN]}$`),
        m("XRANGELOOSE", `^${u[c.GTLT]}\\s*${u[c.XRANGEPLAINLOOSE]}$`),
        m(
          "COERCEPLAIN",
          `(^|[^\\d])(\\d{1,${a}})(?:\\.(\\d{1,${a}}))?(?:\\.(\\d{1,${a}}))?`
        ),
        m("COERCE", `${u[c.COERCEPLAIN]}(?:$|[^\\d])`),
        m(
          "COERCEFULL",
          u[c.COERCEPLAIN] +
            `(?:${u[c.PRERELEASE]})?` +
            `(?:${u[c.BUILD]})?` +
            "(?:$|[^\\d])"
        ),
        m("COERCERTL", u[c.COERCE], !0),
        m("COERCERTLFULL", u[c.COERCEFULL], !0),
        m("LONETILDE", "(?:~>?)"),
        m("TILDETRIM", `(\\s*)${u[c.LONETILDE]}\\s+`, !0),
        (t.tildeTrimReplace = "$1~"),
        m("TILDE", `^${u[c.LONETILDE]}${u[c.XRANGEPLAIN]}$`),
        m("TILDELOOSE", `^${u[c.LONETILDE]}${u[c.XRANGEPLAINLOOSE]}$`),
        m("LONECARET", "(?:\\^)"),
        m("CARETTRIM", `(\\s*)${u[c.LONECARET]}\\s+`, !0),
        (t.caretTrimReplace = "$1^"),
        m("CARET", `^${u[c.LONECARET]}${u[c.XRANGEPLAIN]}$`),
        m("CARETLOOSE", `^${u[c.LONECARET]}${u[c.XRANGEPLAINLOOSE]}$`),
        m("COMPARATORLOOSE", `^${u[c.GTLT]}\\s*(${u[c.LOOSEPLAIN]})$|^$`),
        m("COMPARATOR", `^${u[c.GTLT]}\\s*(${u[c.FULLPLAIN]})$|^$`),
        m(
          "COMPARATORTRIM",
          `(\\s*)${u[c.GTLT]}\\s*(${u[c.LOOSEPLAIN]}|${u[c.XRANGEPLAIN]})`,
          !0
        ),
        (t.comparatorTrimReplace = "$1$2$3"),
        m(
          "HYPHENRANGE",
          `^\\s*(${u[c.XRANGEPLAIN]})\\s+-\\s+(${u[c.XRANGEPLAIN]})\\s*$`
        ),
        m(
          "HYPHENRANGELOOSE",
          `^\\s*(${u[c.XRANGEPLAINLOOSE]})\\s+-\\s+(${
            u[c.XRANGEPLAINLOOSE]
          })\\s*$`
        ),
        m("STAR", "(<|>)?=?\\s*\\*"),
        m("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"),
        m("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
    },
    97606: function (e, t, r) {
      let a = r(6826);
      e.exports = (e, t, r) => a(e, t, ">", r);
    },
    82937: function (e, t, r) {
      let a = r(66902);
      e.exports = (e, t, r) => (
        (e = new a(e, r)), (t = new a(t, r)), e.intersects(t, r)
      );
    },
    50032: function (e, t, r) {
      let a = r(6826);
      e.exports = (e, t, r) => a(e, t, "<", r);
    },
    85775: function (e, t, r) {
      let a = r(26376),
        n = r(66902);
      e.exports = (e, t, r) => {
        let i = null,
          s = null,
          o = null;
        try {
          o = new n(t, r);
        } catch (e) {
          return null;
        }
        return (
          e.forEach((e) => {
            o.test(e) && (!i || -1 === s.compare(e)) && (s = new a((i = e), r));
          }),
          i
        );
      };
    },
    71657: function (e, t, r) {
      let a = r(26376),
        n = r(66902);
      e.exports = (e, t, r) => {
        let i = null,
          s = null,
          o = null;
        try {
          o = new n(t, r);
        } catch (e) {
          return null;
        }
        return (
          e.forEach((e) => {
            o.test(e) && (!i || 1 === s.compare(e)) && (s = new a((i = e), r));
          }),
          i
        );
      };
    },
    95316: function (e, t, r) {
      let a = r(26376),
        n = r(66902),
        i = r(71312);
      e.exports = (e, t) => {
        e = new n(e, t);
        let r = new a("0.0.0");
        if (e.test(r) || ((r = new a("0.0.0-0")), e.test(r))) return r;
        r = null;
        for (let t = 0; t < e.set.length; ++t) {
          let n = e.set[t],
            s = null;
          n.forEach((e) => {
            let t = new a(e.semver.version);
            switch (e.operator) {
              case ">":
                0 === t.prerelease.length ? t.patch++ : t.prerelease.push(0),
                  (t.raw = t.format());
              case "":
              case ">=":
                (!s || i(t, s)) && (s = t);
                break;
              case "<":
              case "<=":
                break;
              default:
                throw Error(`Unexpected operation: ${e.operator}`);
            }
          }),
            s && (!r || i(r, s)) && (r = s);
        }
        return r && e.test(r) ? r : null;
      };
    },
    6826: function (e, t, r) {
      let a = r(26376),
        n = r(22257),
        { ANY: i } = n,
        s = r(66902),
        o = r(45712),
        l = r(71312),
        u = r(21544),
        c = r(12056),
        d = r(25903);
      e.exports = (e, t, r, h) => {
        let p, f, m, g, y;
        switch (((e = new a(e, h)), (t = new s(t, h)), r)) {
          case ">":
            (p = l), (f = c), (m = u), (g = ">"), (y = ">=");
            break;
          case "<":
            (p = u), (f = d), (m = l), (g = "<"), (y = "<=");
            break;
          default:
            throw TypeError('Must provide a hilo val of "<" or ">"');
        }
        if (o(e, t, h)) return !1;
        for (let r = 0; r < t.set.length; ++r) {
          let a = t.set[r],
            s = null,
            o = null;
          if (
            (a.forEach((e) => {
              e.semver === i && (e = new n(">=0.0.0")),
                (s = s || e),
                (o = o || e),
                p(e.semver, s.semver, h)
                  ? (s = e)
                  : m(e.semver, o.semver, h) && (o = e);
            }),
            s.operator === g ||
              s.operator === y ||
              ((!o.operator || o.operator === g) && f(e, o.semver)) ||
              (o.operator === y && m(e, o.semver)))
          )
            return !1;
        }
        return !0;
      };
    },
    17908: function (e, t, r) {
      let a = r(45712),
        n = r(46269);
      e.exports = (e, t, r) => {
        let i = [],
          s = null,
          o = null,
          l = e.sort((e, t) => n(e, t, r));
        for (let e of l)
          a(e, t, r)
            ? ((o = e), s || (s = e))
            : (o && i.push([s, o]), (o = null), (s = null));
        s && i.push([s, null]);
        let u = [];
        for (let [e, t] of i)
          e === t
            ? u.push(e)
            : t || e !== l[0]
            ? t
              ? e === l[0]
                ? u.push(`<=${t}`)
                : u.push(`${e} - ${t}`)
              : u.push(`>=${e}`)
            : u.push("*");
        let c = u.join(" || "),
          d = "string" == typeof t.raw ? t.raw : String(t);
        return c.length < d.length ? c : t;
      };
    },
    50799: function (e, t, r) {
      let a = r(66902),
        n = r(22257),
        { ANY: i } = n,
        s = r(45712),
        o = r(46269),
        l = [new n(">=0.0.0-0")],
        u = [new n(">=0.0.0")],
        c = (e, t, r) => {
          let a, n, c, p, f, m, g;
          if (e === t) return !0;
          if (1 === e.length && e[0].semver === i) {
            if (1 === t.length && t[0].semver === i) return !0;
            e = r.includePrerelease ? l : u;
          }
          if (1 === t.length && t[0].semver === i) {
            if (r.includePrerelease) return !0;
            t = u;
          }
          let y = new Set();
          for (let t of e)
            ">" === t.operator || ">=" === t.operator
              ? (a = d(a, t, r))
              : "<" === t.operator || "<=" === t.operator
              ? (n = h(n, t, r))
              : y.add(t.semver);
          if (
            y.size > 1 ||
            (a &&
              n &&
              ((c = o(a.semver, n.semver, r)) > 0 ||
                (0 === c && (">=" !== a.operator || "<=" !== n.operator))))
          )
            return null;
          for (let e of y) {
            if ((a && !s(e, String(a), r)) || (n && !s(e, String(n), r)))
              return null;
            for (let a of t) if (!s(e, String(a), r)) return !1;
            return !0;
          }
          let b =
              !!n &&
              !r.includePrerelease &&
              !!n.semver.prerelease.length &&
              n.semver,
            _ =
              !!a &&
              !r.includePrerelease &&
              !!a.semver.prerelease.length &&
              a.semver;
          for (let e of (b &&
            1 === b.prerelease.length &&
            "<" === n.operator &&
            0 === b.prerelease[0] &&
            (b = !1),
          t)) {
            if (
              ((g = g || ">" === e.operator || ">=" === e.operator),
              (m = m || "<" === e.operator || "<=" === e.operator),
              a)
            ) {
              if (
                (_ &&
                  e.semver.prerelease &&
                  e.semver.prerelease.length &&
                  e.semver.major === _.major &&
                  e.semver.minor === _.minor &&
                  e.semver.patch === _.patch &&
                  (_ = !1),
                ">" === e.operator || ">=" === e.operator)
              ) {
                if ((p = d(a, e, r)) === e && p !== a) return !1;
              } else if (">=" === a.operator && !s(a.semver, String(e), r))
                return !1;
            }
            if (n) {
              if (
                (b &&
                  e.semver.prerelease &&
                  e.semver.prerelease.length &&
                  e.semver.major === b.major &&
                  e.semver.minor === b.minor &&
                  e.semver.patch === b.patch &&
                  (b = !1),
                "<" === e.operator || "<=" === e.operator)
              ) {
                if ((f = h(n, e, r)) === e && f !== n) return !1;
              } else if ("<=" === n.operator && !s(n.semver, String(e), r))
                return !1;
            }
            if (!e.operator && (n || a) && 0 !== c) return !1;
          }
          return (
            (!a || !m || !!n || 0 === c) &&
            (!n || !g || !!a || 0 === c) &&
            !_ &&
            !b
          );
        },
        d = (e, t, r) => {
          if (!e) return t;
          let a = o(e.semver, t.semver, r);
          return a > 0
            ? e
            : a < 0
            ? t
            : ">" === t.operator && ">=" === e.operator
            ? t
            : e;
        },
        h = (e, t, r) => {
          if (!e) return t;
          let a = o(e.semver, t.semver, r);
          return a < 0
            ? e
            : a > 0
            ? t
            : "<" === t.operator && "<=" === e.operator
            ? t
            : e;
        };
      e.exports = (e, t, r = {}) => {
        if (e === t) return !0;
        (e = new a(e, r)), (t = new a(t, r));
        let n = !1;
        e: for (let a of e.set) {
          for (let e of t.set) {
            let t = c(a, e, r);
            if (((n = n || null !== t), t)) continue e;
          }
          if (n) return !1;
        }
        return !0;
      };
    },
    51042: function (e, t, r) {
      let a = r(66902);
      e.exports = (e, t) =>
        new a(e, t).set.map((e) =>
          e
            .map((e) => e.value)
            .join(" ")
            .trim()
            .split(" ")
        );
    },
    89042: function (e, t, r) {
      let a = r(66902);
      e.exports = (e, t) => {
        try {
          return new a(e, t).range || "*";
        } catch (e) {
          return null;
        }
      };
    },
    50703: function (e, t, r) {
      "use strict";
      let a, n, i, s, o, l, u;
      var c,
        d,
        h,
        p,
        f,
        m,
        g,
        y,
        b,
        _,
        v,
        w,
        E,
        x,
        O,
        k,
        S,
        A,
        P,
        I,
        T,
        R,
        $,
        j,
        C,
        N,
        L,
        M,
        U,
        D,
        F,
        Z,
        B,
        q,
        H,
        z,
        W,
        J,
        V,
        G,
        X,
        K,
        Q = {};
      r.r(Q),
        r.d(Q, {
          APIConnectionError: function () {
            return eW;
          },
          APIConnectionTimeoutError: function () {
            return eJ;
          },
          APIError: function () {
            return eH;
          },
          APIUserAbortError: function () {
            return ez;
          },
          AnthropicError: function () {
            return eq;
          },
          AuthenticationError: function () {
            return eG;
          },
          BadRequestError: function () {
            return eV;
          },
          ConflictError: function () {
            return eQ;
          },
          InternalServerError: function () {
            return e1;
          },
          NotFoundError: function () {
            return eK;
          },
          PermissionDeniedError: function () {
            return eX;
          },
          RateLimitError: function () {
            return e0;
          },
          UnprocessableEntityError: function () {
            return eY;
          },
        });
      let Y = "0.27.3",
        ee = !1;
      class et {
        constructor(e) {
          this.body = e;
        }
        get [Symbol.toStringTag]() {
          return "MultipartBody";
        }
      }
      n ||
        (function (e, t = { auto: !1 }) {
          if (ee)
            throw Error(
              `you must \`import '@anthropic-ai/sdk/shims/${e.kind}'\` before importing anything else from @anthropic-ai/sdk`
            );
          if (n)
            throw Error(
              `can't \`import '@anthropic-ai/sdk/shims/${e.kind}'\` after \`import '@anthropic-ai/sdk/shims/${n}'\``
            );
          (ee = t.auto),
            (n = e.kind),
            (i = e.fetch),
            e.Request,
            e.Response,
            e.Headers,
            e.FormData,
            e.Blob,
            (s = e.File),
            (o = e.ReadableStream),
            e.getMultipartRequestOptions,
            (l = e.getDefaultAgent),
            (u = e.fileFromPath),
            e.isFsReadStream;
        })(
          (function ({ manuallyImported: e } = {}) {
            let t, r, a, n;
            let i = e
              ? "You may need to use polyfills"
              : `Add one of these imports before your first \`import … from '@anthropic-ai/sdk'\`:
- \`import '@anthropic-ai/sdk/shims/node'\` (if you're running on Node)
- \`import '@anthropic-ai/sdk/shims/web'\` (otherwise)
`;
            try {
              (t = fetch), (r = Request), (a = Response), (n = Headers);
            } catch (e) {
              throw Error(
                `this environment is missing the following Web Fetch API type: ${e.message}. ${i}`
              );
            }
            return {
              kind: "web",
              fetch: t,
              Request: r,
              Response: a,
              Headers: n,
              FormData:
                "undefined" != typeof FormData
                  ? FormData
                  : class {
                      constructor() {
                        throw Error(
                          `file uploads aren't supported in this environment yet as 'FormData' is undefined. ${i}`
                        );
                      }
                    },
              Blob:
                "undefined" != typeof Blob
                  ? Blob
                  : class {
                      constructor() {
                        throw Error(
                          `file uploads aren't supported in this environment yet as 'Blob' is undefined. ${i}`
                        );
                      }
                    },
              File:
                "undefined" != typeof File
                  ? File
                  : class {
                      constructor() {
                        throw Error(
                          `file uploads aren't supported in this environment yet as 'File' is undefined. ${i}`
                        );
                      }
                    },
              ReadableStream:
                "undefined" != typeof ReadableStream
                  ? ReadableStream
                  : class {
                      constructor() {
                        throw Error(
                          `streaming isn't supported in this environment yet as 'ReadableStream' is undefined. ${i}`
                        );
                      }
                    },
              getMultipartRequestOptions: async (e, t) => ({
                ...t,
                body: new et(e),
              }),
              getDefaultAgent: (e) => void 0,
              fileFromPath: () => {
                throw Error(
                  "The `fileFromPath` function is only supported in Node. See the README for more details: https://www.github.com/anthropics/anthropic-sdk-typescript#file-uploads"
                );
              },
              isFsReadStream: (e) => !1,
            };
          })(),
          { auto: !0 }
        );
      var er = r(48764).Buffer;
      class ea {
        constructor(e, t) {
          (this.iterator = e), (this.controller = t);
        }
        static fromSSEResponse(e, t) {
          let r = !1;
          return new ea(async function* () {
            if (r)
              throw Error(
                "Cannot iterate over a consumed stream, use `.tee()` to split the stream."
              );
            r = !0;
            let a = !1;
            try {
              for await (let r of en(e, t)) {
                if ("completion" === r.event)
                  try {
                    yield JSON.parse(r.data);
                  } catch (e) {
                    throw (
                      (console.error(
                        "Could not parse message into JSON:",
                        r.data
                      ),
                      console.error("From chunk:", r.raw),
                      e)
                    );
                  }
                if (
                  "message_start" === r.event ||
                  "message_delta" === r.event ||
                  "message_stop" === r.event ||
                  "content_block_start" === r.event ||
                  "content_block_delta" === r.event ||
                  "content_block_stop" === r.event
                )
                  try {
                    yield JSON.parse(r.data);
                  } catch (e) {
                    throw (
                      (console.error(
                        "Could not parse message into JSON:",
                        r.data
                      ),
                      console.error("From chunk:", r.raw),
                      e)
                    );
                  }
                if ("ping" !== r.event && "error" === r.event)
                  throw eH.generate(
                    void 0,
                    `SSE Error: ${r.data}`,
                    r.data,
                    eS(e.headers)
                  );
              }
              a = !0;
            } catch (e) {
              if (e instanceof Error && "AbortError" === e.name) return;
              throw e;
            } finally {
              a || t.abort();
            }
          }, t);
        }
        static fromReadableStream(e, t) {
          let r = !1;
          async function* a() {
            let t = new eo();
            for await (let r of el(e)) for (let e of t.decode(r)) yield e;
            for (let e of t.flush()) yield e;
          }
          return new ea(async function* () {
            if (r)
              throw Error(
                "Cannot iterate over a consumed stream, use `.tee()` to split the stream."
              );
            r = !0;
            let e = !1;
            try {
              for await (let t of a()) !e && t && (yield JSON.parse(t));
              e = !0;
            } catch (e) {
              if (e instanceof Error && "AbortError" === e.name) return;
              throw e;
            } finally {
              e || t.abort();
            }
          }, t);
        }
        [Symbol.asyncIterator]() {
          return this.iterator();
        }
        tee() {
          let e = [],
            t = [],
            r = this.iterator(),
            a = (a) => ({
              next: () => {
                if (0 === a.length) {
                  let a = r.next();
                  e.push(a), t.push(a);
                }
                return a.shift();
              },
            });
          return [
            new ea(() => a(e), this.controller),
            new ea(() => a(t), this.controller),
          ];
        }
        toReadableStream() {
          let e;
          let t = this,
            r = new TextEncoder();
          return new o({
            async start() {
              e = t[Symbol.asyncIterator]();
            },
            async pull(t) {
              try {
                let { value: a, done: n } = await e.next();
                if (n) return t.close();
                let i = r.encode(JSON.stringify(a) + "\n");
                t.enqueue(i);
              } catch (e) {
                t.error(e);
              }
            },
            async cancel() {
              await e.return?.();
            },
          });
        }
      }
      async function* en(e, t) {
        if (!e.body)
          throw (
            (t.abort(),
            new eq("Attempted to iterate over a response with no body"))
          );
        let r = new es(),
          a = new eo();
        for await (let t of ei(el(e.body)))
          for (let e of a.decode(t)) {
            let t = r.decode(e);
            t && (yield t);
          }
        for (let e of a.flush()) {
          let t = r.decode(e);
          t && (yield t);
        }
      }
      async function* ei(e) {
        let t = new Uint8Array();
        for await (let r of e) {
          let e;
          if (null == r) continue;
          let a =
              r instanceof ArrayBuffer
                ? new Uint8Array(r)
                : "string" == typeof r
                ? new TextEncoder().encode(r)
                : r,
            n = new Uint8Array(t.length + a.length);
          for (
            n.set(t), n.set(a, t.length), t = n;
            -1 !==
            (e = (function (e) {
              for (let t = 0; t < e.length - 2; t++) {
                if (
                  (10 === e[t] && 10 === e[t + 1]) ||
                  (13 === e[t] && 13 === e[t + 1])
                )
                  return t + 2;
                if (
                  13 === e[t] &&
                  10 === e[t + 1] &&
                  t + 3 < e.length &&
                  13 === e[t + 2] &&
                  10 === e[t + 3]
                )
                  return t + 4;
              }
              return -1;
            })(t));

          )
            yield t.slice(0, e), (t = t.slice(e));
        }
        t.length > 0 && (yield t);
      }
      class es {
        constructor() {
          (this.event = null), (this.data = []), (this.chunks = []);
        }
        decode(e) {
          if ((e.endsWith("\r") && (e = e.substring(0, e.length - 1)), !e)) {
            if (!this.event && !this.data.length) return null;
            let e = {
              event: this.event,
              data: this.data.join("\n"),
              raw: this.chunks,
            };
            return (this.event = null), (this.data = []), (this.chunks = []), e;
          }
          if ((this.chunks.push(e), e.startsWith(":"))) return null;
          let [t, r, a] = (function (e, t) {
            let r = e.indexOf(":");
            return -1 !== r
              ? [e.substring(0, r), ":", e.substring(r + t.length)]
              : [e, "", ""];
          })(e, ":");
          return (
            a.startsWith(" ") && (a = a.substring(1)),
            "event" === t
              ? (this.event = a)
              : "data" === t && this.data.push(a),
            null
          );
        }
      }
      class eo {
        constructor() {
          (this.buffer = []), (this.trailingCR = !1);
        }
        decode(e) {
          let t = this.decodeText(e);
          if (
            (this.trailingCR && ((t = "\r" + t), (this.trailingCR = !1)),
            t.endsWith("\r") && ((this.trailingCR = !0), (t = t.slice(0, -1))),
            !t)
          )
            return [];
          let r = eo.NEWLINE_CHARS.has(t[t.length - 1] || ""),
            a = t.split(eo.NEWLINE_REGEXP);
          return (r && a.pop(), 1 !== a.length || r)
            ? (this.buffer.length > 0 &&
                ((a = [this.buffer.join("") + a[0], ...a.slice(1)]),
                (this.buffer = [])),
              r || (this.buffer = [a.pop() || ""]),
              a)
            : (this.buffer.push(a[0]), []);
        }
        decodeText(e) {
          if (null == e) return "";
          if ("string" == typeof e) return e;
          if (void 0 !== er) {
            if (e instanceof er) return e.toString();
            if (e instanceof Uint8Array) return er.from(e).toString();
            throw new eq(
              `Unexpected: received non-Uint8Array (${e.constructor.name}) stream chunk in an environment with a global "Buffer" defined, which this library assumes to be Node. Please report this error.`
            );
          }
          if ("undefined" != typeof TextDecoder) {
            if (e instanceof Uint8Array || e instanceof ArrayBuffer)
              return (
                this.textDecoder ??
                  (this.textDecoder = new TextDecoder("utf8")),
                this.textDecoder.decode(e)
              );
            throw new eq(
              `Unexpected: received non-Uint8Array/ArrayBuffer (${e.constructor.name}) in a web platform. Please report this error.`
            );
          }
          throw new eq(
            "Unexpected: neither Buffer nor TextDecoder are available as globals. Please report this error."
          );
        }
        flush() {
          if (!this.buffer.length && !this.trailingCR) return [];
          let e = [this.buffer.join("")];
          return (this.buffer = []), (this.trailingCR = !1), e;
        }
      }
      function el(e) {
        if (e[Symbol.asyncIterator]) return e;
        let t = e.getReader();
        return {
          async next() {
            try {
              let e = await t.read();
              return e?.done && t.releaseLock(), e;
            } catch (e) {
              throw (t.releaseLock(), e);
            }
          },
          async return() {
            let e = t.cancel();
            return t.releaseLock(), await e, { done: !0, value: void 0 };
          },
          [Symbol.asyncIterator]() {
            return this;
          },
        };
      }
      (eo.NEWLINE_CHARS = new Set(["\n", "\r"])),
        (eo.NEWLINE_REGEXP = /\r\n|[\n\r]/g);
      var eu = r(48764).Buffer;
      let ec = (e) =>
          null != e &&
          "object" == typeof e &&
          "string" == typeof e.url &&
          "function" == typeof e.blob,
        ed = (e) =>
          null != e &&
          "object" == typeof e &&
          "string" == typeof e.name &&
          "number" == typeof e.lastModified &&
          eh(e),
        eh = (e) =>
          null != e &&
          "object" == typeof e &&
          "number" == typeof e.size &&
          "string" == typeof e.type &&
          "function" == typeof e.text &&
          "function" == typeof e.slice &&
          "function" == typeof e.arrayBuffer,
        ep = (e) => ed(e) || ec(e) || isFsReadStream(e);
      async function ef(e, t, r) {
        var a;
        if (ed((e = await e))) return e;
        if (ec(e)) {
          let a = await e.blob();
          t ||
            (t =
              new URL(e.url).pathname.split(/[\\/]/).pop() ?? "unknown_file");
          let n = eh(a) ? [await a.arrayBuffer()] : [a];
          return new s(n, t, r);
        }
        let n = await em(e);
        if (
          (t ||
            (t =
              (eg((a = e).name) ||
                eg(a.filename) ||
                eg(a.path)?.split(/[\\/]/).pop()) ??
              "unknown_file"),
          !r?.type)
        ) {
          let e = n[0]?.type;
          "string" == typeof e && (r = { ...r, type: e });
        }
        return new s(n, t, r);
      }
      async function em(e) {
        let t = [];
        if (
          "string" == typeof e ||
          ArrayBuffer.isView(e) ||
          e instanceof ArrayBuffer
        )
          t.push(e);
        else if (eh(e)) t.push(await e.arrayBuffer());
        else if (ey(e)) for await (let r of e) t.push(r);
        else
          throw Error(
            `Unexpected data type: ${typeof e}; constructor: ${
              e?.constructor?.name
            }; props: ${(function (e) {
              let t = Object.getOwnPropertyNames(e);
              return `[${t.map((e) => `"${e}"`).join(", ")}]`;
            })(e)}`
          );
        return t;
      }
      let eg = (e) =>
          "string" == typeof e
            ? e
            : void 0 !== eu && e instanceof eu
            ? String(e)
            : void 0,
        ey = (e) =>
          null != e &&
          "object" == typeof e &&
          "function" == typeof e[Symbol.asyncIterator],
        eb = (e) =>
          e &&
          "object" == typeof e &&
          e.body &&
          "MultipartBody" === e[Symbol.toStringTag],
        e_ = (e) => {
          if (ep(e)) return !0;
          if (Array.isArray(e)) return e.some(e_);
          if (e && "object" == typeof e) {
            for (let t in e) if (e_(e[t])) return !0;
          }
          return !1;
        };
      var ev = r(48764).Buffer,
        ew = r(34155);
      async function eE(e) {
        let { response: t } = e;
        if (e.options.stream)
          return (eF("response", t.status, t.url, t.headers, t.body),
          e.options.__streamClass)
            ? e.options.__streamClass.fromSSEResponse(t, e.controller)
            : ea.fromSSEResponse(t, e.controller);
        if (204 === t.status) return null;
        if (e.options.__binaryResponse) return t;
        let r = t.headers.get("content-type");
        if (
          r?.includes("application/json") ||
          r?.includes("application/vnd.api+json")
        ) {
          let e = await t.json();
          return eF("response", t.status, t.url, t.headers, e), e;
        }
        let a = await t.text();
        return eF("response", t.status, t.url, t.headers, a), a;
      }
      class ex extends Promise {
        constructor(e, t = eE) {
          super((e) => {
            e(null);
          }),
            (this.responsePromise = e),
            (this.parseResponse = t);
        }
        _thenUnwrap(e) {
          return new ex(this.responsePromise, async (t) =>
            e(await this.parseResponse(t))
          );
        }
        asResponse() {
          return this.responsePromise.then((e) => e.response);
        }
        async withResponse() {
          let [e, t] = await Promise.all([this.parse(), this.asResponse()]);
          return { data: e, response: t };
        }
        parse() {
          return (
            this.parsedPromise ||
              (this.parsedPromise = this.responsePromise.then(
                this.parseResponse
              )),
            this.parsedPromise
          );
        }
        then(e, t) {
          return this.parse().then(e, t);
        }
        catch(e) {
          return this.parse().catch(e);
        }
        finally(e) {
          return this.parse().finally(e);
        }
      }
      class eO {
        constructor({
          baseURL: e,
          maxRetries: t = 2,
          timeout: r = 6e5,
          httpAgent: a,
          fetch: n,
        }) {
          (this.baseURL = e),
            (this.maxRetries = eN("maxRetries", t)),
            (this.timeout = eN("timeout", r)),
            (this.httpAgent = a),
            (this.fetch = n ?? i);
        }
        authHeaders(e) {
          return {};
        }
        defaultHeaders(e) {
          return {
            Accept: "application/json",
            "Content-Type": "application/json",
            "User-Agent": this.getUserAgent(),
            ...eT(),
            ...this.authHeaders(e),
          };
        }
        validateHeaders(e, t) {}
        defaultIdempotencyKey() {
          return `stainless-node-retry-${eZ()}`;
        }
        get(e, t) {
          return this.methodRequest("get", e, t);
        }
        post(e, t) {
          return this.methodRequest("post", e, t);
        }
        patch(e, t) {
          return this.methodRequest("patch", e, t);
        }
        put(e, t) {
          return this.methodRequest("put", e, t);
        }
        delete(e, t) {
          return this.methodRequest("delete", e, t);
        }
        methodRequest(e, t, r) {
          return this.request(
            Promise.resolve(r).then(async (r) => {
              let a =
                r && eh(r?.body)
                  ? new DataView(await r.body.arrayBuffer())
                  : r?.body instanceof DataView
                  ? r.body
                  : r?.body instanceof ArrayBuffer
                  ? new DataView(r.body)
                  : r && ArrayBuffer.isView(r?.body)
                  ? new DataView(r.body.buffer)
                  : r?.body;
              return { method: e, path: t, ...r, body: a };
            })
          );
        }
        getAPIList(e, t, r) {
          return this.requestAPIList(t, { method: "get", path: e, ...r });
        }
        calculateContentLength(e) {
          if ("string" == typeof e) {
            if (void 0 !== ev) return ev.byteLength(e, "utf8").toString();
            if ("undefined" != typeof TextEncoder)
              return new TextEncoder().encode(e).length.toString();
          } else if (ArrayBuffer.isView(e)) return e.byteLength.toString();
          return null;
        }
        buildRequest(e) {
          let { method: t, path: r, query: a, headers: n = {} } = e,
            i =
              ArrayBuffer.isView(e.body) ||
              (e.__binaryRequest && "string" == typeof e.body)
                ? e.body
                : eb(e.body)
                ? e.body.body
                : e.body
                ? JSON.stringify(e.body, null, 2)
                : null,
            s = this.calculateContentLength(i),
            o = this.buildURL(r, a);
          "timeout" in e && eN("timeout", e.timeout);
          let u = e.timeout ?? this.timeout,
            c = e.httpAgent ?? this.httpAgent ?? l(o),
            d = u + 1e3;
          "number" == typeof c?.options?.timeout &&
            d > (c.options.timeout ?? 0) &&
            (c.options.timeout = d),
            this.idempotencyHeader &&
              "get" !== t &&
              (e.idempotencyKey ||
                (e.idempotencyKey = this.defaultIdempotencyKey()),
              (n[this.idempotencyHeader] = e.idempotencyKey));
          let h = this.buildHeaders({
            options: e,
            headers: n,
            contentLength: s,
          });
          return {
            req: {
              method: t,
              ...(i && { body: i }),
              headers: h,
              ...(c && { agent: c }),
              signal: e.signal ?? null,
            },
            url: o,
            timeout: u,
          };
        }
        buildHeaders({ options: e, headers: t, contentLength: r }) {
          let a = {};
          return (
            r && (a["content-length"] = r),
            eD(a, this.defaultHeaders(e)),
            eD(a, t),
            eb(e.body) && "node" !== n && delete a["content-type"],
            this.validateHeaders(a, t),
            a
          );
        }
        async prepareOptions(e) {}
        async prepareRequest(e, { url: t, options: r }) {}
        parseHeaders(e) {
          return e
            ? Symbol.iterator in e
              ? Object.fromEntries(Array.from(e).map((e) => [...e]))
              : { ...e }
            : {};
        }
        makeStatusError(e, t, r, a) {
          return eH.generate(e, t, r, a);
        }
        request(e, t = null) {
          return new ex(this.makeRequest(e, t));
        }
        async makeRequest(e, t) {
          let r = await e;
          null == t && (t = r.maxRetries ?? this.maxRetries),
            await this.prepareOptions(r);
          let { req: a, url: n, timeout: i } = this.buildRequest(r);
          if (
            (await this.prepareRequest(a, { url: n, options: r }),
            eF("request", n, r, a.headers),
            r.signal?.aborted)
          )
            throw new ez();
          let s = new AbortController(),
            o = await this.fetchWithTimeout(n, a, i, s).catch(eL);
          if (o instanceof Error) {
            if (r.signal?.aborted) throw new ez();
            if (t) return this.retryRequest(r, t);
            if ("AbortError" === o.name) throw new eJ();
            throw new eW({ cause: o });
          }
          let l = eS(o.headers);
          if (!o.ok) {
            if (t && this.shouldRetry(o)) {
              let e = `retrying, ${t} attempts remaining`;
              return (
                eF(`response (error; ${e})`, o.status, n, l),
                this.retryRequest(r, t, l)
              );
            }
            let e = await o.text().catch((e) => eL(e).message),
              a = eR(e),
              i = a ? void 0 : e,
              s = t
                ? "(error; no more retries left)"
                : "(error; not retryable)";
            throw (
              (eF(`response (error; ${s})`, o.status, n, l, i),
              this.makeStatusError(o.status, a, i, l))
            );
          }
          return { response: o, options: r, controller: s };
        }
        requestAPIList(e, t) {
          return new ek(this, this.makeRequest(t, null), e);
        }
        buildURL(e, t) {
          let r = new URL(
              ej(e)
                ? e
                : this.baseURL +
                  (this.baseURL.endsWith("/") && e.startsWith("/")
                    ? e.slice(1)
                    : e)
            ),
            a = this.defaultQuery();
          return (
            eU(a) || (t = { ...a, ...t }),
            "object" == typeof t &&
              t &&
              !Array.isArray(t) &&
              (r.search = this.stringifyQuery(t)),
            r.toString()
          );
        }
        stringifyQuery(e) {
          return Object.entries(e)
            .filter(([e, t]) => void 0 !== t)
            .map(([e, t]) => {
              if (
                "string" == typeof t ||
                "number" == typeof t ||
                "boolean" == typeof t
              )
                return `${encodeURIComponent(e)}=${encodeURIComponent(t)}`;
              if (null === t) return `${encodeURIComponent(e)}=`;
              throw new eq(
                `Cannot stringify type ${typeof t}; Expected string, number, boolean, or null. If you need to pass nested query parameters, you can manually encode them, e.g. { query: { 'foo[key1]': value1, 'foo[key2]': value2 } }, and please open a GitHub issue requesting better support for your use case.`
              );
            })
            .join("&");
        }
        async fetchWithTimeout(e, t, r, a) {
          let { signal: n, ...i } = t || {};
          n && n.addEventListener("abort", () => a.abort());
          let s = setTimeout(() => a.abort(), r);
          return this.getRequestClient()
            .fetch.call(void 0, e, { signal: a.signal, ...i })
            .finally(() => {
              clearTimeout(s);
            });
        }
        getRequestClient() {
          return { fetch: this.fetch };
        }
        shouldRetry(e) {
          let t = e.headers.get("x-should-retry");
          return (
            "true" === t ||
            ("false" !== t &&
              (408 === e.status ||
                409 === e.status ||
                429 === e.status ||
                e.status >= 500))
          );
        }
        async retryRequest(e, t, r) {
          let a;
          let n = r?.["retry-after-ms"];
          if (n) {
            let e = parseFloat(n);
            Number.isNaN(e) || (a = e);
          }
          let i = r?.["retry-after"];
          if (i && !a) {
            let e = parseFloat(i);
            a = Number.isNaN(e) ? Date.parse(i) - Date.now() : 1e3 * e;
          }
          if (!(a && 0 <= a && a < 6e4)) {
            let r = e.maxRetries ?? this.maxRetries;
            a = this.calculateDefaultRetryTimeoutMillis(t, r);
          }
          return await eC(a), this.makeRequest(e, t - 1);
        }
        calculateDefaultRetryTimeoutMillis(e, t) {
          return (
            Math.min(0.5 * Math.pow(2, t - e), 8) *
            (1 - 0.25 * Math.random()) *
            1e3
          );
        }
        getUserAgent() {
          return `${this.constructor.name}/JS ${Y}`;
        }
      }
      new WeakMap();
      class ek extends ex {
        constructor(e, t, r) {
          super(t, async (t) => new r(e, t.response, await eE(t), t.options));
        }
        async *[Symbol.asyncIterator]() {
          for await (let e of await this) yield e;
        }
      }
      let eS = (e) =>
          new Proxy(Object.fromEntries(e.entries()), {
            get(e, t) {
              let r = t.toString();
              return e[r.toLowerCase()] || e[r];
            },
          }),
        eA = () => {
          if ("undefined" != typeof Deno && null != Deno.build)
            return {
              "X-Stainless-Lang": "js",
              "X-Stainless-Package-Version": Y,
              "X-Stainless-OS": eI(Deno.build.os),
              "X-Stainless-Arch": eP(Deno.build.arch),
              "X-Stainless-Runtime": "deno",
              "X-Stainless-Runtime-Version":
                "string" == typeof Deno.version
                  ? Deno.version
                  : Deno.version?.deno ?? "unknown",
            };
          if ("undefined" != typeof EdgeRuntime)
            return {
              "X-Stainless-Lang": "js",
              "X-Stainless-Package-Version": Y,
              "X-Stainless-OS": "Unknown",
              "X-Stainless-Arch": `other:${EdgeRuntime}`,
              "X-Stainless-Runtime": "edge",
              "X-Stainless-Runtime-Version": ew.version,
            };
          if (
            "[object process]" ===
            Object.prototype.toString.call(void 0 !== ew ? ew : 0)
          )
            return {
              "X-Stainless-Lang": "js",
              "X-Stainless-Package-Version": Y,
              "X-Stainless-OS": eI(ew.platform),
              "X-Stainless-Arch": eP(ew.arch),
              "X-Stainless-Runtime": "node",
              "X-Stainless-Runtime-Version": ew.version,
            };
          let e = (function () {
            if ("undefined" == typeof navigator || !navigator) return null;
            for (let { key: e, pattern: t } of [
              { key: "edge", pattern: /Edge(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
              { key: "ie", pattern: /MSIE(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
              {
                key: "ie",
                pattern: /Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/,
              },
              {
                key: "chrome",
                pattern: /Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/,
              },
              {
                key: "firefox",
                pattern: /Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/,
              },
              {
                key: "safari",
                pattern:
                  /(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/,
              },
            ]) {
              let r = t.exec(navigator.userAgent);
              if (r) {
                let t = r[1] || 0,
                  a = r[2] || 0,
                  n = r[3] || 0;
                return { browser: e, version: `${t}.${a}.${n}` };
              }
            }
            return null;
          })();
          return e
            ? {
                "X-Stainless-Lang": "js",
                "X-Stainless-Package-Version": Y,
                "X-Stainless-OS": "Unknown",
                "X-Stainless-Arch": "unknown",
                "X-Stainless-Runtime": `browser:${e.browser}`,
                "X-Stainless-Runtime-Version": e.version,
              }
            : {
                "X-Stainless-Lang": "js",
                "X-Stainless-Package-Version": Y,
                "X-Stainless-OS": "Unknown",
                "X-Stainless-Arch": "unknown",
                "X-Stainless-Runtime": "unknown",
                "X-Stainless-Runtime-Version": "unknown",
              };
        },
        eP = (e) =>
          "x32" === e
            ? "x32"
            : "x86_64" === e || "x64" === e
            ? "x64"
            : "arm" === e
            ? "arm"
            : "aarch64" === e || "arm64" === e
            ? "arm64"
            : e
            ? `other:${e}`
            : "unknown",
        eI = (e) =>
          (e = e.toLowerCase()).includes("ios")
            ? "iOS"
            : "android" === e
            ? "Android"
            : "darwin" === e
            ? "MacOS"
            : "win32" === e
            ? "Windows"
            : "freebsd" === e
            ? "FreeBSD"
            : "openbsd" === e
            ? "OpenBSD"
            : "linux" === e
            ? "Linux"
            : e
            ? `Other:${e}`
            : "Unknown",
        eT = () => a ?? (a = eA()),
        eR = (e) => {
          try {
            return JSON.parse(e);
          } catch (e) {
            return;
          }
        },
        e$ = RegExp("^(?:[a-z]+:)?//", "i"),
        ej = (e) => e$.test(e),
        eC = (e) => new Promise((t) => setTimeout(t, e)),
        eN = (e, t) => {
          if ("number" != typeof t || !Number.isInteger(t))
            throw new eq(`${e} must be an integer`);
          if (t < 0) throw new eq(`${e} must be a positive integer`);
          return t;
        },
        eL = (e) => (e instanceof Error ? e : Error(e)),
        eM = (e) =>
          void 0 !== ew
            ? ew.env?.[e]?.trim() ?? void 0
            : "undefined" != typeof Deno
            ? Deno.env?.get?.(e)?.trim()
            : void 0;
      function eU(e) {
        if (!e) return !0;
        for (let t in e) return !1;
        return !0;
      }
      function eD(e, t) {
        for (let r in t) {
          if (!Object.prototype.hasOwnProperty.call(t, r)) continue;
          let a = r.toLowerCase();
          if (!a) continue;
          let n = t[r];
          null === n ? delete e[a] : void 0 !== n && (e[a] = n);
        }
      }
      function eF(e, ...t) {
        void 0 !== ew &&
          ew?.env?.DEBUG === "true" &&
          console.log(`Anthropic:DEBUG:${e}`, ...t);
      }
      let eZ = () =>
          "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
            let t = (16 * Math.random()) | 0;
            return ("x" === e ? t : (3 & t) | 8).toString(16);
          }),
        eB = () =>
          "undefined" != typeof window &&
          void 0 !== window.document &&
          "undefined" != typeof navigator;
      class eq extends Error {}
      class eH extends eq {
        constructor(e, t, r, a) {
          super(`${eH.makeMessage(e, t, r)}`),
            (this.status = e),
            (this.headers = a),
            (this.request_id = a?.["request-id"]),
            (this.error = t);
        }
        static makeMessage(e, t, r) {
          let a = t?.message
            ? "string" == typeof t.message
              ? t.message
              : JSON.stringify(t.message)
            : t
            ? JSON.stringify(t)
            : r;
          return e && a
            ? `${e} ${a}`
            : e
            ? `${e} status code (no body)`
            : a || "(no status code or body)";
        }
        static generate(e, t, r, a) {
          return e
            ? 400 === e
              ? new eV(e, t, r, a)
              : 401 === e
              ? new eG(e, t, r, a)
              : 403 === e
              ? new eX(e, t, r, a)
              : 404 === e
              ? new eK(e, t, r, a)
              : 409 === e
              ? new eQ(e, t, r, a)
              : 422 === e
              ? new eY(e, t, r, a)
              : 429 === e
              ? new e0(e, t, r, a)
              : e >= 500
              ? new e1(e, t, r, a)
              : new eH(e, t, r, a)
            : new eW({ message: r, cause: eL(t) });
        }
      }
      class ez extends eH {
        constructor({ message: e } = {}) {
          super(void 0, void 0, e || "Request was aborted.", void 0),
            (this.status = void 0);
        }
      }
      class eW extends eH {
        constructor({ message: e, cause: t }) {
          super(void 0, void 0, e || "Connection error.", void 0),
            (this.status = void 0),
            t && (this.cause = t);
        }
      }
      class eJ extends eW {
        constructor({ message: e } = {}) {
          super({ message: e ?? "Request timed out." });
        }
      }
      class eV extends eH {
        constructor() {
          super(...arguments), (this.status = 400);
        }
      }
      class eG extends eH {
        constructor() {
          super(...arguments), (this.status = 401);
        }
      }
      class eX extends eH {
        constructor() {
          super(...arguments), (this.status = 403);
        }
      }
      class eK extends eH {
        constructor() {
          super(...arguments), (this.status = 404);
        }
      }
      class eQ extends eH {
        constructor() {
          super(...arguments), (this.status = 409);
        }
      }
      class eY extends eH {
        constructor() {
          super(...arguments), (this.status = 422);
        }
      }
      class e0 extends eH {
        constructor() {
          super(...arguments), (this.status = 429);
        }
      }
      class e1 extends eH {}
      class e2 {
        constructor(e) {
          this._client = e;
        }
      }
      class e4 extends e2 {
        create(e, t) {
          return this._client.post("/v1/complete", {
            body: e,
            timeout: this._client._options.timeout ?? 6e5,
            ...t,
            stream: e.stream ?? !1,
          });
        }
      }
      e4 || (e4 = {});
      let e5 = (e) => {
          let t = 0,
            r = [];
          for (; t < e.length; ) {
            let a = e[t];
            if ("\\" === a) {
              t++;
              continue;
            }
            if ("{" === a) {
              r.push({ type: "brace", value: "{" }), t++;
              continue;
            }
            if ("}" === a) {
              r.push({ type: "brace", value: "}" }), t++;
              continue;
            }
            if ("[" === a) {
              r.push({ type: "paren", value: "[" }), t++;
              continue;
            }
            if ("]" === a) {
              r.push({ type: "paren", value: "]" }), t++;
              continue;
            }
            if (":" === a) {
              r.push({ type: "separator", value: ":" }), t++;
              continue;
            }
            if ("," === a) {
              r.push({ type: "delimiter", value: "," }), t++;
              continue;
            }
            if ('"' === a) {
              let n = "",
                i = !1;
              for (a = e[++t]; '"' !== a; ) {
                if (t === e.length) {
                  i = !0;
                  break;
                }
                if ("\\" === a) {
                  if (++t === e.length) {
                    i = !0;
                    break;
                  }
                  (n += a + e[t]), (a = e[++t]);
                } else (n += a), (a = e[++t]);
              }
              (a = e[++t]), i || r.push({ type: "string", value: n });
              continue;
            }
            let n = /\s/;
            if (a && n.test(a)) {
              t++;
              continue;
            }
            let i = /[0-9]/;
            if ((a && i.test(a)) || "-" === a || "." === a) {
              let n = "";
              for (
                "-" === a && ((n += a), (a = e[++t]));
                (a && i.test(a)) || "." === a;

              )
                (n += a), (a = e[++t]);
              r.push({ type: "number", value: n });
              continue;
            }
            let s = /[a-z]/i;
            if (a && s.test(a)) {
              let n = "";
              for (; a && s.test(a) && t !== e.length; ) (n += a), (a = e[++t]);
              "true" == n || "false" == n || "null" === n
                ? r.push({ type: "name", value: n })
                : t++;
              continue;
            }
            t++;
          }
          return r;
        },
        e6 = (e) => {
          if (0 === e.length) return e;
          let t = e[e.length - 1];
          switch (t.type) {
            case "separator":
              return e6((e = e.slice(0, e.length - 1)));
            case "number":
              let r = t.value[t.value.length - 1];
              if ("." === r || "-" === r)
                return e6((e = e.slice(0, e.length - 1)));
            case "string":
              let a = e[e.length - 2];
              if (
                a?.type === "delimiter" ||
                (a?.type === "brace" && "{" === a.value)
              )
                return e6((e = e.slice(0, e.length - 1)));
              break;
            case "delimiter":
              return e6((e = e.slice(0, e.length - 1)));
          }
          return e;
        },
        e9 = (e) => {
          let t = [];
          return (
            e.map((e) => {
              "brace" === e.type &&
                ("{" === e.value
                  ? t.push("}")
                  : t.splice(t.lastIndexOf("}"), 1)),
                "paren" === e.type &&
                  ("[" === e.value
                    ? t.push("]")
                    : t.splice(t.lastIndexOf("]"), 1));
            }),
            t.length > 0 &&
              t.reverse().map((t) => {
                "}" === t
                  ? e.push({ type: "brace", value: "}" })
                  : "]" === t && e.push({ type: "paren", value: "]" });
              }),
            e
          );
        },
        e3 = (e) => {
          let t = "";
          return (
            e.map((e) => {
              "string" === e.type ? (t += '"' + e.value + '"') : (t += e.value);
            }),
            t
          );
        },
        e8 = (e) => JSON.parse(e3(e9(e6(e5(e)))));
      var e7 = function (e, t, r, a, n) {
          if ("m" === a) throw TypeError("Private method is not writable");
          if ("a" === a && !n)
            throw TypeError("Private accessor was defined without a setter");
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
            throw TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === a ? n.call(e, r) : n ? (n.value = r) : t.set(e, r), r;
        },
        te = function (e, t, r, a) {
          if ("a" === r && !a)
            throw TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !a : !t.has(e))
            throw TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === r ? a : "a" === r ? a.call(e) : a ? a.value : t.get(e);
        };
      let tt = "__json_buf";
      class tr {
        constructor() {
          d.add(this),
            (this.messages = []),
            (this.receivedMessages = []),
            h.set(this, void 0),
            (this.controller = new AbortController()),
            p.set(this, void 0),
            f.set(this, () => {}),
            m.set(this, () => {}),
            g.set(this, void 0),
            y.set(this, () => {}),
            b.set(this, () => {}),
            _.set(this, {}),
            v.set(this, !1),
            w.set(this, !1),
            E.set(this, !1),
            x.set(this, !1),
            S.set(this, (e) => {
              if (
                (e7(this, w, !0, "f"),
                e instanceof Error && "AbortError" === e.name && (e = new ez()),
                e instanceof ez)
              )
                return e7(this, E, !0, "f"), this._emit("abort", e);
              if (e instanceof eq) return this._emit("error", e);
              if (e instanceof Error) {
                let t = new eq(e.message);
                return (t.cause = e), this._emit("error", t);
              }
              return this._emit("error", new eq(String(e)));
            }),
            e7(
              this,
              p,
              new Promise((e, t) => {
                e7(this, f, e, "f"), e7(this, m, t, "f");
              }),
              "f"
            ),
            e7(
              this,
              g,
              new Promise((e, t) => {
                e7(this, y, e, "f"), e7(this, b, t, "f");
              }),
              "f"
            ),
            te(this, p, "f").catch(() => {}),
            te(this, g, "f").catch(() => {});
        }
        static fromReadableStream(e) {
          let t = new tr();
          return t._run(() => t._fromReadableStream(e)), t;
        }
        static createMessage(e, t, r) {
          let a = new tr();
          for (let e of t.messages) a._addMessageParam(e);
          return (
            a._run(() =>
              a._createMessage(
                e,
                { ...t, stream: !0 },
                {
                  ...r,
                  headers: {
                    ...r?.headers,
                    "X-Stainless-Helper-Method": "stream",
                  },
                }
              )
            ),
            a
          );
        }
        _run(e) {
          e().then(() => {
            this._emitFinal(), this._emit("end");
          }, te(this, S, "f"));
        }
        _addMessageParam(e) {
          this.messages.push(e);
        }
        _addMessage(e, t = !0) {
          this.receivedMessages.push(e), t && this._emit("message", e);
        }
        async _createMessage(e, t, r) {
          let a = r?.signal;
          a &&
            (a.aborted && this.controller.abort(),
            a.addEventListener("abort", () => this.controller.abort())),
            te(this, d, "m", A).call(this);
          let n = await e.create(
            { ...t, stream: !0 },
            { ...r, signal: this.controller.signal }
          );
          for await (let e of (this._connected(), n))
            te(this, d, "m", P).call(this, e);
          if (n.controller.signal?.aborted) throw new ez();
          te(this, d, "m", I).call(this);
        }
        _connected() {
          this.ended || (te(this, f, "f").call(this), this._emit("connect"));
        }
        get ended() {
          return te(this, v, "f");
        }
        get errored() {
          return te(this, w, "f");
        }
        get aborted() {
          return te(this, E, "f");
        }
        abort() {
          this.controller.abort();
        }
        on(e, t) {
          return (
            (te(this, _, "f")[e] || (te(this, _, "f")[e] = [])).push({
              listener: t,
            }),
            this
          );
        }
        off(e, t) {
          let r = te(this, _, "f")[e];
          if (!r) return this;
          let a = r.findIndex((e) => e.listener === t);
          return a >= 0 && r.splice(a, 1), this;
        }
        once(e, t) {
          return (
            (te(this, _, "f")[e] || (te(this, _, "f")[e] = [])).push({
              listener: t,
              once: !0,
            }),
            this
          );
        }
        emitted(e) {
          return new Promise((t, r) => {
            e7(this, x, !0, "f"),
              "error" !== e && this.once("error", r),
              this.once(e, t);
          });
        }
        async done() {
          e7(this, x, !0, "f"), await te(this, g, "f");
        }
        get currentMessage() {
          return te(this, h, "f");
        }
        async finalMessage() {
          return await this.done(), te(this, d, "m", O).call(this);
        }
        async finalText() {
          return await this.done(), te(this, d, "m", k).call(this);
        }
        _emit(e, ...t) {
          if (te(this, v, "f")) return;
          "end" === e && (e7(this, v, !0, "f"), te(this, y, "f").call(this));
          let r = te(this, _, "f")[e];
          if (
            (r &&
              ((te(this, _, "f")[e] = r.filter((e) => !e.once)),
              r.forEach(({ listener: e }) => e(...t))),
            "abort" === e)
          ) {
            let e = t[0];
            te(this, x, "f") || r?.length || Promise.reject(e),
              te(this, m, "f").call(this, e),
              te(this, b, "f").call(this, e),
              this._emit("end");
            return;
          }
          if ("error" === e) {
            let e = t[0];
            te(this, x, "f") || r?.length || Promise.reject(e),
              te(this, m, "f").call(this, e),
              te(this, b, "f").call(this, e),
              this._emit("end");
          }
        }
        _emitFinal() {
          this.receivedMessages.at(-1) &&
            this._emit("finalMessage", te(this, d, "m", O).call(this));
        }
        async _fromReadableStream(e, t) {
          let r = t?.signal;
          r &&
            (r.aborted && this.controller.abort(),
            r.addEventListener("abort", () => this.controller.abort())),
            te(this, d, "m", A).call(this),
            this._connected();
          let a = ea.fromReadableStream(e, this.controller);
          for await (let e of a) te(this, d, "m", P).call(this, e);
          if (a.controller.signal?.aborted) throw new ez();
          te(this, d, "m", I).call(this);
        }
        [((h = new WeakMap()),
        (p = new WeakMap()),
        (f = new WeakMap()),
        (m = new WeakMap()),
        (g = new WeakMap()),
        (y = new WeakMap()),
        (b = new WeakMap()),
        (_ = new WeakMap()),
        (v = new WeakMap()),
        (w = new WeakMap()),
        (E = new WeakMap()),
        (x = new WeakMap()),
        (S = new WeakMap()),
        (d = new WeakSet()),
        (O = function () {
          if (0 === this.receivedMessages.length)
            throw new eq(
              "stream ended without producing a Message with role=assistant"
            );
          return this.receivedMessages.at(-1);
        }),
        (k = function () {
          if (0 === this.receivedMessages.length)
            throw new eq(
              "stream ended without producing a Message with role=assistant"
            );
          let e = this.receivedMessages
            .at(-1)
            .content.filter((e) => "text" === e.type)
            .map((e) => e.text);
          if (0 === e.length)
            throw new eq(
              "stream ended without producing a content block with type=text"
            );
          return e.join(" ");
        }),
        (A = function () {
          this.ended || e7(this, h, void 0, "f");
        }),
        (P = function (e) {
          if (this.ended) return;
          let t = te(this, d, "m", T).call(this, e);
          switch ((this._emit("streamEvent", e, t), e.type)) {
            case "content_block_delta": {
              let r = t.content.at(-1);
              "text_delta" === e.delta.type && "text" === r.type
                ? this._emit("text", e.delta.text, r.text || "")
                : "input_json_delta" === e.delta.type &&
                  "tool_use" === r.type &&
                  r.input &&
                  this._emit("inputJson", e.delta.partial_json, r.input);
              break;
            }
            case "message_stop":
              this._addMessageParam(t), this._addMessage(t, !0);
              break;
            case "content_block_stop":
              this._emit("contentBlock", t.content.at(-1));
              break;
            case "message_start":
              e7(this, h, t, "f");
          }
        }),
        (I = function () {
          if (this.ended)
            throw new eq("stream has ended, this shouldn't happen");
          let e = te(this, h, "f");
          if (!e) throw new eq("request ended without sending any chunks");
          return e7(this, h, void 0, "f"), e;
        }),
        (T = function (e) {
          let t = te(this, h, "f");
          if ("message_start" === e.type) {
            if (t)
              throw new eq(
                `Unexpected event order, got ${e.type} before receiving "message_stop"`
              );
            return e.message;
          }
          if (!t)
            throw new eq(
              `Unexpected event order, got ${e.type} before "message_start"`
            );
          switch (e.type) {
            case "message_stop":
            case "content_block_stop":
              return t;
            case "message_delta":
              return (
                (t.stop_reason = e.delta.stop_reason),
                (t.stop_sequence = e.delta.stop_sequence),
                (t.usage.output_tokens = e.usage.output_tokens),
                t
              );
            case "content_block_start":
              return t.content.push(e.content_block), t;
            case "content_block_delta": {
              let r = t.content.at(e.index);
              if (r?.type === "text" && "text_delta" === e.delta.type)
                r.text += e.delta.text;
              else if (
                r?.type === "tool_use" &&
                "input_json_delta" === e.delta.type
              ) {
                let t = r[tt] || "";
                Object.defineProperty(r, tt, {
                  value: (t += e.delta.partial_json),
                  enumerable: !1,
                  writable: !0,
                }),
                  t && (r.input = e8(t));
              }
              return t;
            }
          }
        }),
        Symbol.asyncIterator)]() {
          let e = [],
            t = [],
            r = !1;
          return (
            this.on("streamEvent", (r) => {
              let a = t.shift();
              a ? a.resolve(r) : e.push(r);
            }),
            this.on("end", () => {
              for (let e of ((r = !0), t)) e.resolve(void 0);
              t.length = 0;
            }),
            this.on("abort", (e) => {
              for (let a of ((r = !0), t)) a.reject(e);
              t.length = 0;
            }),
            this.on("error", (e) => {
              for (let a of ((r = !0), t)) a.reject(e);
              t.length = 0;
            }),
            {
              next: async () =>
                e.length
                  ? { value: e.shift(), done: !1 }
                  : r
                  ? { value: void 0, done: !0 }
                  : new Promise((e, r) =>
                      t.push({ resolve: e, reject: r })
                    ).then((e) =>
                      e ? { value: e, done: !1 } : { value: void 0, done: !0 }
                    ),
              return: async () => (this.abort(), { value: void 0, done: !0 }),
            }
          );
        }
        toReadableStream() {
          return new ea(
            this[Symbol.asyncIterator].bind(this),
            this.controller
          ).toReadableStream();
        }
      }
      class ta extends e2 {
        create(e, t) {
          return (
            e.model in tn &&
              console.warn(`The model '${
                e.model
              }' is deprecated and will reach end-of-life on ${tn[e.model]}
Please migrate to a newer model. Visit https://docs.anthropic.com/en/docs/resources/model-deprecations for more information.`),
            this._client.post("/v1/messages", {
              body: e,
              timeout: this._client._options.timeout ?? 6e5,
              ...t,
              stream: e.stream ?? !1,
            })
          );
        }
        stream(e, t) {
          return tr.createMessage(this, e, t);
        }
      }
      let tn = {
        "claude-1.3": "November 6th, 2024",
        "claude-1.3-100k": "November 6th, 2024",
        "claude-instant-1.1": "November 6th, 2024",
        "claude-instant-1.1-100k": "November 6th, 2024",
        "claude-instant-1.2": "November 6th, 2024",
      };
      ta || (ta = {});
      var ti = function (e, t, r, a, n) {
          if ("m" === a) throw TypeError("Private method is not writable");
          if ("a" === a && !n)
            throw TypeError("Private accessor was defined without a setter");
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
            throw TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === a ? n.call(e, r) : n ? (n.value = r) : t.set(e, r), r;
        },
        ts = function (e, t, r, a) {
          if ("a" === r && !a)
            throw TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !a : !t.has(e))
            throw TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === r ? a : "a" === r ? a.call(e) : a ? a.value : t.get(e);
        };
      let to = "__json_buf";
      class tl {
        constructor() {
          R.add(this),
            (this.messages = []),
            (this.receivedMessages = []),
            $.set(this, void 0),
            (this.controller = new AbortController()),
            j.set(this, void 0),
            C.set(this, () => {}),
            N.set(this, () => {}),
            L.set(this, void 0),
            M.set(this, () => {}),
            U.set(this, () => {}),
            D.set(this, {}),
            F.set(this, !1),
            Z.set(this, !1),
            B.set(this, !1),
            q.set(this, !1),
            W.set(this, (e) => {
              if (
                (ti(this, Z, !0, "f"),
                e instanceof Error && "AbortError" === e.name && (e = new ez()),
                e instanceof ez)
              )
                return ti(this, B, !0, "f"), this._emit("abort", e);
              if (e instanceof eq) return this._emit("error", e);
              if (e instanceof Error) {
                let t = new eq(e.message);
                return (t.cause = e), this._emit("error", t);
              }
              return this._emit("error", new eq(String(e)));
            }),
            ti(
              this,
              j,
              new Promise((e, t) => {
                ti(this, C, e, "f"), ti(this, N, t, "f");
              }),
              "f"
            ),
            ti(
              this,
              L,
              new Promise((e, t) => {
                ti(this, M, e, "f"), ti(this, U, t, "f");
              }),
              "f"
            ),
            ts(this, j, "f").catch(() => {}),
            ts(this, L, "f").catch(() => {});
        }
        static fromReadableStream(e) {
          let t = new tl();
          return t._run(() => t._fromReadableStream(e)), t;
        }
        static createMessage(e, t, r) {
          let a = new tl();
          for (let e of t.messages) a._addPromptCachingBetaMessageParam(e);
          return (
            a._run(() =>
              a._createPromptCachingBetaMessage(
                e,
                { ...t, stream: !0 },
                {
                  ...r,
                  headers: {
                    ...r?.headers,
                    "X-Stainless-Helper-Method": "stream",
                  },
                }
              )
            ),
            a
          );
        }
        _run(e) {
          e().then(() => {
            this._emitFinal(), this._emit("end");
          }, ts(this, W, "f"));
        }
        _addPromptCachingBetaMessageParam(e) {
          this.messages.push(e);
        }
        _addPromptCachingBetaMessage(e, t = !0) {
          this.receivedMessages.push(e), t && this._emit("message", e);
        }
        async _createPromptCachingBetaMessage(e, t, r) {
          let a = r?.signal;
          a &&
            (a.aborted && this.controller.abort(),
            a.addEventListener("abort", () => this.controller.abort())),
            ts(this, R, "m", J).call(this);
          let n = await e.create(
            { ...t, stream: !0 },
            { ...r, signal: this.controller.signal }
          );
          for await (let e of (this._connected(), n))
            ts(this, R, "m", V).call(this, e);
          if (n.controller.signal?.aborted) throw new ez();
          ts(this, R, "m", G).call(this);
        }
        _connected() {
          this.ended || (ts(this, C, "f").call(this), this._emit("connect"));
        }
        get ended() {
          return ts(this, F, "f");
        }
        get errored() {
          return ts(this, Z, "f");
        }
        get aborted() {
          return ts(this, B, "f");
        }
        abort() {
          this.controller.abort();
        }
        on(e, t) {
          return (
            (ts(this, D, "f")[e] || (ts(this, D, "f")[e] = [])).push({
              listener: t,
            }),
            this
          );
        }
        off(e, t) {
          let r = ts(this, D, "f")[e];
          if (!r) return this;
          let a = r.findIndex((e) => e.listener === t);
          return a >= 0 && r.splice(a, 1), this;
        }
        once(e, t) {
          return (
            (ts(this, D, "f")[e] || (ts(this, D, "f")[e] = [])).push({
              listener: t,
              once: !0,
            }),
            this
          );
        }
        emitted(e) {
          return new Promise((t, r) => {
            ti(this, q, !0, "f"),
              "error" !== e && this.once("error", r),
              this.once(e, t);
          });
        }
        async done() {
          ti(this, q, !0, "f"), await ts(this, L, "f");
        }
        get currentMessage() {
          return ts(this, $, "f");
        }
        async finalMessage() {
          return await this.done(), ts(this, R, "m", H).call(this);
        }
        async finalText() {
          return await this.done(), ts(this, R, "m", z).call(this);
        }
        _emit(e, ...t) {
          if (ts(this, F, "f")) return;
          "end" === e && (ti(this, F, !0, "f"), ts(this, M, "f").call(this));
          let r = ts(this, D, "f")[e];
          if (
            (r &&
              ((ts(this, D, "f")[e] = r.filter((e) => !e.once)),
              r.forEach(({ listener: e }) => e(...t))),
            "abort" === e)
          ) {
            let e = t[0];
            ts(this, q, "f") || r?.length || Promise.reject(e),
              ts(this, N, "f").call(this, e),
              ts(this, U, "f").call(this, e),
              this._emit("end");
            return;
          }
          if ("error" === e) {
            let e = t[0];
            ts(this, q, "f") || r?.length || Promise.reject(e),
              ts(this, N, "f").call(this, e),
              ts(this, U, "f").call(this, e),
              this._emit("end");
          }
        }
        _emitFinal() {
          this.receivedMessages.at(-1) &&
            this._emit(
              "finalPromptCachingBetaMessage",
              ts(this, R, "m", H).call(this)
            );
        }
        async _fromReadableStream(e, t) {
          let r = t?.signal;
          r &&
            (r.aborted && this.controller.abort(),
            r.addEventListener("abort", () => this.controller.abort())),
            ts(this, R, "m", J).call(this),
            this._connected();
          let a = ea.fromReadableStream(e, this.controller);
          for await (let e of a) ts(this, R, "m", V).call(this, e);
          if (a.controller.signal?.aborted) throw new ez();
          ts(this, R, "m", G).call(this);
        }
        [(($ = new WeakMap()),
        (j = new WeakMap()),
        (C = new WeakMap()),
        (N = new WeakMap()),
        (L = new WeakMap()),
        (M = new WeakMap()),
        (U = new WeakMap()),
        (D = new WeakMap()),
        (F = new WeakMap()),
        (Z = new WeakMap()),
        (B = new WeakMap()),
        (q = new WeakMap()),
        (W = new WeakMap()),
        (R = new WeakSet()),
        (H = function () {
          if (0 === this.receivedMessages.length)
            throw new eq(
              "stream ended without producing a PromptCachingBetaMessage with role=assistant"
            );
          return this.receivedMessages.at(-1);
        }),
        (z = function () {
          if (0 === this.receivedMessages.length)
            throw new eq(
              "stream ended without producing a PromptCachingBetaMessage with role=assistant"
            );
          let e = this.receivedMessages
            .at(-1)
            .content.filter((e) => "text" === e.type)
            .map((e) => e.text);
          if (0 === e.length)
            throw new eq(
              "stream ended without producing a content block with type=text"
            );
          return e.join(" ");
        }),
        (J = function () {
          this.ended || ti(this, $, void 0, "f");
        }),
        (V = function (e) {
          if (this.ended) return;
          let t = ts(this, R, "m", X).call(this, e);
          switch ((this._emit("streamEvent", e, t), e.type)) {
            case "content_block_delta": {
              let r = t.content.at(-1);
              "text_delta" === e.delta.type && "text" === r.type
                ? this._emit("text", e.delta.text, r.text || "")
                : "input_json_delta" === e.delta.type &&
                  "tool_use" === r.type &&
                  r.input &&
                  this._emit("inputJson", e.delta.partial_json, r.input);
              break;
            }
            case "message_stop":
              this._addPromptCachingBetaMessageParam(t),
                this._addPromptCachingBetaMessage(t, !0);
              break;
            case "content_block_stop":
              this._emit("contentBlock", t.content.at(-1));
              break;
            case "message_start":
              ti(this, $, t, "f");
          }
        }),
        (G = function () {
          if (this.ended)
            throw new eq("stream has ended, this shouldn't happen");
          let e = ts(this, $, "f");
          if (!e) throw new eq("request ended without sending any chunks");
          return ti(this, $, void 0, "f"), e;
        }),
        (X = function (e) {
          let t = ts(this, $, "f");
          if ("message_start" === e.type) {
            if (t)
              throw new eq(
                `Unexpected event order, got ${e.type} before receiving "message_stop"`
              );
            return e.message;
          }
          if (!t)
            throw new eq(
              `Unexpected event order, got ${e.type} before "message_start"`
            );
          switch (e.type) {
            case "message_stop":
            case "content_block_stop":
              return t;
            case "message_delta":
              return (
                (t.stop_reason = e.delta.stop_reason),
                (t.stop_sequence = e.delta.stop_sequence),
                (t.usage.output_tokens = e.usage.output_tokens),
                t
              );
            case "content_block_start":
              return t.content.push(e.content_block), t;
            case "content_block_delta": {
              let r = t.content.at(e.index);
              if (r?.type === "text" && "text_delta" === e.delta.type)
                r.text += e.delta.text;
              else if (
                r?.type === "tool_use" &&
                "input_json_delta" === e.delta.type
              ) {
                let t = r[to] || "";
                Object.defineProperty(r, to, {
                  value: (t += e.delta.partial_json),
                  enumerable: !1,
                  writable: !0,
                }),
                  t && (r.input = e8(t));
              }
              return t;
            }
          }
        }),
        Symbol.asyncIterator)]() {
          let e = [],
            t = [],
            r = !1;
          return (
            this.on("streamEvent", (r) => {
              let a = t.shift();
              a ? a.resolve(r) : e.push(r);
            }),
            this.on("end", () => {
              for (let e of ((r = !0), t)) e.resolve(void 0);
              t.length = 0;
            }),
            this.on("abort", (e) => {
              for (let a of ((r = !0), t)) a.reject(e);
              t.length = 0;
            }),
            this.on("error", (e) => {
              for (let a of ((r = !0), t)) a.reject(e);
              t.length = 0;
            }),
            {
              next: async () =>
                e.length
                  ? { value: e.shift(), done: !1 }
                  : r
                  ? { value: void 0, done: !0 }
                  : new Promise((e, r) =>
                      t.push({ resolve: e, reject: r })
                    ).then((e) =>
                      e ? { value: e, done: !1 } : { value: void 0, done: !0 }
                    ),
              return: async () => (this.abort(), { value: void 0, done: !0 }),
            }
          );
        }
        toReadableStream() {
          return new ea(
            this[Symbol.asyncIterator].bind(this),
            this.controller
          ).toReadableStream();
        }
      }
      class tu extends e2 {
        create(e, t) {
          return this._client.post("/v1/messages?beta=prompt_caching", {
            body: e,
            timeout: this._client._options.timeout ?? 6e5,
            ...t,
            headers: {
              "anthropic-beta": "prompt-caching-2024-07-31",
              ...t?.headers,
            },
            stream: e.stream ?? !1,
          });
        }
        stream(e, t) {
          return tl.createMessage(this, e, t);
        }
      }
      tu || (tu = {});
      class tc extends e2 {
        constructor() {
          super(...arguments), (this.messages = new tu(this._client));
        }
      }
      (tc || (tc = {})).Messages = tu;
      class td extends e2 {
        constructor() {
          super(...arguments), (this.promptCaching = new tc(this._client));
        }
      }
      (td || (td = {})).PromptCaching = tc;
      class th extends eO {
        constructor({
          baseURL: e = eM("ANTHROPIC_BASE_URL"),
          apiKey: t = eM("ANTHROPIC_API_KEY") ?? null,
          authToken: r = eM("ANTHROPIC_AUTH_TOKEN") ?? null,
          ...a
        } = {}) {
          let n = {
            apiKey: t,
            authToken: r,
            ...a,
            baseURL: e || "https://api.anthropic.com",
          };
          if (!n.dangerouslyAllowBrowser && eB())
            throw new eq(
              "It looks like you're running in a browser-like environment.\n\nThis is disabled by default, as it risks exposing your secret API credentials to attackers.\nIf you understand the risks and have appropriate mitigations in place,\nyou can set the `dangerouslyAllowBrowser` option to `true`, e.g.,\n\nnew Anthropic({ apiKey, dangerouslyAllowBrowser: true });\n\nTODO: link!\n"
            );
          super({
            baseURL: n.baseURL,
            timeout: n.timeout ?? 6e5,
            httpAgent: n.httpAgent,
            maxRetries: n.maxRetries,
            fetch: n.fetch,
          }),
            (this.completions = new e4(this)),
            (this.messages = new ta(this)),
            (this.beta = new td(this)),
            (this._options = n),
            (this.apiKey = t),
            (this.authToken = r);
        }
        defaultQuery() {
          return this._options.defaultQuery;
        }
        defaultHeaders(e) {
          return {
            ...super.defaultHeaders(e),
            ...(this._options.dangerouslyAllowBrowser
              ? { "anthropic-dangerous-direct-browser-access": "true" }
              : void 0),
            "anthropic-version": "2023-06-01",
            ...this._options.defaultHeaders,
          };
        }
        validateHeaders(e, t) {
          if (
            (!this.apiKey || !e["x-api-key"]) &&
            null !== t["x-api-key"] &&
            (!this.authToken || !e.authorization) &&
            null !== t.authorization
          )
            throw Error(
              'Could not resolve authentication method. Expected either apiKey or authToken to be set. Or for one of the "X-Api-Key" or "Authorization" headers to be explicitly omitted'
            );
        }
        authHeaders(e) {
          let t = this.apiKeyAuth(e),
            r = this.bearerAuth(e);
          return null == t || eU(t) ? (null == r || eU(r) ? {} : r) : t;
        }
        apiKeyAuth(e) {
          return null == this.apiKey ? {} : { "X-Api-Key": this.apiKey };
        }
        bearerAuth(e) {
          return null == this.authToken
            ? {}
            : { Authorization: `Bearer ${this.authToken}` };
        }
      }
      (K = th),
        (th.Anthropic = K),
        (th.HUMAN_PROMPT = "\n\nHuman:"),
        (th.AI_PROMPT = "\n\nAssistant:"),
        (th.DEFAULT_TIMEOUT = 6e5),
        (th.AnthropicError = eq),
        (th.APIError = eH),
        (th.APIConnectionError = eW),
        (th.APIConnectionTimeoutError = eJ),
        (th.APIUserAbortError = ez),
        (th.NotFoundError = eK),
        (th.ConflictError = eQ),
        (th.RateLimitError = e0),
        (th.BadRequestError = eV),
        (th.AuthenticationError = eG),
        (th.InternalServerError = e1),
        (th.PermissionDeniedError = eX),
        (th.UnprocessableEntityError = eY),
        (th.toFile = ef),
        (th.fileFromPath = u);
      let { HUMAN_PROMPT: tp, AI_PROMPT: tf } = th,
        {
          AnthropicError: tm,
          APIError: tg,
          APIConnectionError: ty,
          APIConnectionTimeoutError: tb,
          APIUserAbortError: t_,
          NotFoundError: tv,
          ConflictError: tw,
          RateLimitError: tE,
          BadRequestError: tx,
          AuthenticationError: tO,
          InternalServerError: tk,
          PermissionDeniedError: tS,
          UnprocessableEntityError: tA,
        } = Q;
      ((c = th || (th = {})).Completions = e4),
        (c.Messages = ta),
        (c.Beta = td),
        r(26679),
        r(1381),
        r(44018),
        r(95280),
        r(82905),
        r(9321),
        r(4670),
        r(80697),
        r(57606),
        r(85248);
    },
    16515: function (e, t, r) {
      "use strict";
      r.d(t, {
        E: function () {
          return o;
        },
      });
      var a = r(11877),
        n = r(98415),
        i = r(6374);
      class s {}
      class o extends s {
        get lc_namespace() {
          return ["langchain_core", "callbacks", this.name];
        }
        get lc_secrets() {}
        get lc_attributes() {}
        get lc_aliases() {}
        static lc_name() {
          return this.name;
        }
        get lc_id() {
          return [...this.lc_namespace, (0, n.j)(this.constructor)];
        }
        constructor(e) {
          super(),
            Object.defineProperty(this, "lc_serializable", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !1,
            }),
            Object.defineProperty(this, "lc_kwargs", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "ignoreLLM", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !1,
            }),
            Object.defineProperty(this, "ignoreChain", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !1,
            }),
            Object.defineProperty(this, "ignoreAgent", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !1,
            }),
            Object.defineProperty(this, "ignoreRetriever", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !1,
            }),
            Object.defineProperty(this, "ignoreCustomEvent", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !1,
            }),
            Object.defineProperty(this, "raiseError", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !1,
            }),
            Object.defineProperty(this, "awaitHandlers", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "false" === (0, i.lS)("LANGCHAIN_CALLBACKS_BACKGROUND"),
            }),
            (this.lc_kwargs = e || {}),
            e &&
              ((this.ignoreLLM = e.ignoreLLM ?? this.ignoreLLM),
              (this.ignoreChain = e.ignoreChain ?? this.ignoreChain),
              (this.ignoreAgent = e.ignoreAgent ?? this.ignoreAgent),
              (this.ignoreRetriever =
                e.ignoreRetriever ?? this.ignoreRetriever),
              (this.ignoreCustomEvent =
                e.ignoreCustomEvent ?? this.ignoreCustomEvent),
              (this.raiseError = e.raiseError ?? this.raiseError),
              (this.awaitHandlers =
                this.raiseError || (e._awaitHandler ?? this.awaitHandlers)));
        }
        copy() {
          return new this.constructor(this);
        }
        toJSON() {
          return n.i.prototype.toJSON.call(this);
        }
        toJSONNotImplemented() {
          return n.i.prototype.toJSONNotImplemented.call(this);
        }
        static fromMethods(e) {
          class t extends o {
            constructor() {
              super(),
                Object.defineProperty(this, "name", {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: a.Z(),
                }),
                Object.assign(this, e);
            }
          }
          return new t();
        }
      }
    },
    91490: function (e, t, r) {
      "use strict";
      let a, n;
      r.d(t, {
        Ye: function () {
          return j;
        },
        xz: function () {
          return C;
        },
        QH: function () {
          return S;
        },
      });
      var i = r(11877),
        s = r(16515),
        o = r(50265),
        l = r(84075);
      function u(e, t) {
        return `${e.open}${t}${e.close}`;
      }
      function c(e, t) {
        try {
          return JSON.stringify(e, null, 2);
        } catch (e) {
          return t;
        }
      }
      function d(e) {
        return "string" == typeof e
          ? e.trim()
          : null == e
          ? e
          : c(e, e.toString());
      }
      function h(e) {
        if (!e.end_time) return "";
        let t = e.end_time - e.start_time;
        return t < 1e3 ? `${t}ms` : `${(t / 1e3).toFixed(2)}s`;
      }
      let { color: p } = o;
      class f extends l.Z {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "console_callback_handler",
            });
        }
        persistRun(e) {
          return Promise.resolve();
        }
        getParents(e) {
          let t = [],
            r = e;
          for (; r.parent_run_id; ) {
            let e = this.runMap.get(r.parent_run_id);
            if (e) t.push(e), (r = e);
            else break;
          }
          return t;
        }
        getBreadcrumbs(e) {
          let t = [...this.getParents(e).reverse(), e]
            .map((e, t, r) => {
              let a = `${e.execution_order}:${e.run_type}:${e.name}`;
              return t === r.length - 1 ? u(o.bold, a) : a;
            })
            .join(" > ");
          return u(p.grey, t);
        }
        onChainStart(e) {
          let t = this.getBreadcrumbs(e);
          console.log(
            `${u(
              p.green,
              "[chain/start]"
            )} [${t}] Entering Chain run with input: ${c(e.inputs, "[inputs]")}`
          );
        }
        onChainEnd(e) {
          let t = this.getBreadcrumbs(e);
          console.log(
            `${u(p.cyan, "[chain/end]")} [${t}] [${h(
              e
            )}] Exiting Chain run with output: ${c(e.outputs, "[outputs]")}`
          );
        }
        onChainError(e) {
          let t = this.getBreadcrumbs(e);
          console.log(
            `${u(p.red, "[chain/error]")} [${t}] [${h(
              e
            )}] Chain run errored with error: ${c(e.error, "[error]")}`
          );
        }
        onLLMStart(e) {
          let t = this.getBreadcrumbs(e),
            r =
              "prompts" in e.inputs
                ? { prompts: e.inputs.prompts.map((e) => e.trim()) }
                : e.inputs;
          console.log(
            `${u(
              p.green,
              "[llm/start]"
            )} [${t}] Entering LLM run with input: ${c(r, "[inputs]")}`
          );
        }
        onLLMEnd(e) {
          let t = this.getBreadcrumbs(e);
          console.log(
            `${u(p.cyan, "[llm/end]")} [${t}] [${h(
              e
            )}] Exiting LLM run with output: ${c(e.outputs, "[response]")}`
          );
        }
        onLLMError(e) {
          let t = this.getBreadcrumbs(e);
          console.log(
            `${u(p.red, "[llm/error]")} [${t}] [${h(
              e
            )}] LLM run errored with error: ${c(e.error, "[error]")}`
          );
        }
        onToolStart(e) {
          let t = this.getBreadcrumbs(e);
          console.log(
            `${u(
              p.green,
              "[tool/start]"
            )} [${t}] Entering Tool run with input: "${d(e.inputs.input)}"`
          );
        }
        onToolEnd(e) {
          let t = this.getBreadcrumbs(e);
          console.log(
            `${u(p.cyan, "[tool/end]")} [${t}] [${h(
              e
            )}] Exiting Tool run with output: "${d(e.outputs?.output)}"`
          );
        }
        onToolError(e) {
          let t = this.getBreadcrumbs(e);
          console.log(
            `${u(p.red, "[tool/error]")} [${t}] [${h(
              e
            )}] Tool run errored with error: ${c(e.error, "[error]")}`
          );
        }
        onRetrieverStart(e) {
          let t = this.getBreadcrumbs(e);
          console.log(
            `${u(
              p.green,
              "[retriever/start]"
            )} [${t}] Entering Retriever run with input: ${c(
              e.inputs,
              "[inputs]"
            )}`
          );
        }
        onRetrieverEnd(e) {
          let t = this.getBreadcrumbs(e);
          console.log(
            `${u(p.cyan, "[retriever/end]")} [${t}] [${h(
              e
            )}] Exiting Retriever run with output: ${c(e.outputs, "[outputs]")}`
          );
        }
        onRetrieverError(e) {
          let t = this.getBreadcrumbs(e);
          console.log(
            `${u(p.red, "[retriever/error]")} [${t}] [${h(
              e
            )}] Retriever run errored with error: ${c(e.error, "[error]")}`
          );
        }
        onAgentAction(e) {
          let t = this.getBreadcrumbs(e);
          console.log(
            `${u(p.blue, "[agent/action]")} [${t}] Agent selected action: ${c(
              e.actions[e.actions.length - 1],
              "[action]"
            )}`
          );
        }
      }
      var m = r(72245),
        g = r(6374),
        y = r(97895),
        b = r(424),
        _ = r(47080);
      let v = () => {
        if (void 0 === a) {
          let e =
            "false" === (0, g.lS)("LANGCHAIN_CALLBACKS_BACKGROUND")
              ? { blockOnRootRunFinalization: !0 }
              : {};
          a = new _.KU(e);
        }
        return a;
      };
      class w extends l.Z {
        constructor(e = {}) {
          super(e),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "langchain_tracer",
            }),
            Object.defineProperty(this, "projectName", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "exampleId", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "client", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            });
          let { exampleId: t, projectName: r, client: a } = e;
          (this.projectName =
            r ??
            (0, g.lS)("LANGCHAIN_PROJECT") ??
            (0, g.lS)("LANGCHAIN_SESSION")),
            (this.exampleId = t),
            (this.client = a ?? v());
          let n = w.getTraceableRunTree();
          n && this.updateFromRunTree(n);
        }
        async _convertToCreate(e, t) {
          return {
            ...e,
            extra: { ...e.extra, runtime: await (0, g.sA)() },
            child_runs: void 0,
            session_name: this.projectName,
            reference_example_id: e.parent_run_id ? void 0 : t,
          };
        }
        async persistRun(e) {}
        async onRunCreate(e) {
          let t = await this._convertToCreate(e, this.exampleId);
          await this.client.createRun(t);
        }
        async onRunUpdate(e) {
          let t = {
            end_time: e.end_time,
            error: e.error,
            outputs: e.outputs,
            events: e.events,
            inputs: e.inputs,
            trace_id: e.trace_id,
            dotted_order: e.dotted_order,
            parent_run_id: e.parent_run_id,
          };
          await this.client.updateRun(e.id, t);
        }
        getRun(e) {
          return this.runMap.get(e);
        }
        updateFromRunTree(e) {
          let t = e,
            r = new Set();
          for (; t.parent_run && !r.has(t.id) && (r.add(t.id), t.parent_run); )
            t = t.parent_run;
          r.clear();
          let a = [t];
          for (; a.length > 0; ) {
            let e = a.shift();
            !(!e || r.has(e.id)) &&
              (r.add(e.id),
              this.runMap.set(e.id, e),
              e.child_runs && a.push(...e.child_runs));
          }
          (this.client = e.client ?? this.client),
            (this.projectName = e.project_name ?? this.projectName),
            (this.exampleId = e.reference_example_id ?? this.exampleId);
        }
        convertToRunTree(e) {
          let t = {},
            r = [];
          for (let [e, a] of this.runMap) {
            let n = new y.IV({
              ...a,
              child_runs: [],
              parent_run: void 0,
              client: this.client,
              project_name: this.projectName,
              reference_example_id: this.exampleId,
              tracingEnabled: !0,
            });
            (t[e] = n), r.push([e, a.dotted_order]);
          }
          for (let [e] of (r.sort((e, t) =>
            e[1] && t[1] ? e[1].localeCompare(t[1]) : 0
          ),
          r)) {
            let r = this.runMap.get(e),
              a = t[e];
            if (r && a && r.parent_run_id) {
              let e = t[r.parent_run_id];
              e && (e.child_runs.push(a), (a.parent_run = e));
            }
          }
          return t[e];
        }
        static getTraceableRunTree() {
          try {
            return (0, b.dy)();
          } catch {
            return;
          }
        }
      }
      var E = r(45860),
        x = r(55655);
      async function O(e, t) {
        !0 === t
          ? void 0 !== (0, x.IU)()
            ? await (0, x.IU)().run(void 0, async () => e())
            : await e()
          : (void 0 === n &&
              (n = new E.default({ autoStart: !0, concurrency: 1 })),
            n.add(async () => {
              void 0 !== (0, x.IU)()
                ? await (0, x.IU)().run(void 0, async () => e())
                : await e();
            }));
      }
      let k = (e) =>
        void 0 !== e
          ? e
          : !![
              "LANGSMITH_TRACING_V2",
              "LANGCHAIN_TRACING_V2",
              "LANGSMITH_TRACING",
              "LANGCHAIN_TRACING",
            ].find((e) => "true" === (0, g.lS)(e));
      function S(e) {
        return e
          ? Array.isArray(e) || "name" in e
            ? { callbacks: e }
            : e
          : {};
      }
      class A {
        setHandler(e) {
          return this.setHandlers([e]);
        }
      }
      class P {
        constructor(e, t, r, a, n, i, s, o) {
          Object.defineProperty(this, "runId", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          }),
            Object.defineProperty(this, "handlers", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t,
            }),
            Object.defineProperty(this, "inheritableHandlers", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: r,
            }),
            Object.defineProperty(this, "tags", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: a,
            }),
            Object.defineProperty(this, "inheritableTags", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            }),
            Object.defineProperty(this, "metadata", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            }),
            Object.defineProperty(this, "inheritableMetadata", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: s,
            }),
            Object.defineProperty(this, "_parentRunId", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: o,
            });
        }
        get parentRunId() {
          return this._parentRunId;
        }
        async handleText(e) {
          await Promise.all(
            this.handlers.map((t) =>
              O(async () => {
                try {
                  await t.handleText?.(
                    e,
                    this.runId,
                    this._parentRunId,
                    this.tags
                  );
                } catch (e) {
                  if (
                    ((t.raiseError ? console.error : console.warn)(
                      `Error in handler ${t.constructor.name}, handleText: ${e}`
                    ),
                    t.raiseError)
                  )
                    throw e;
                }
              }, t.awaitHandlers)
            )
          );
        }
        async handleCustomEvent(e, t, r, a, n) {
          await Promise.all(
            this.handlers.map((r) =>
              O(async () => {
                try {
                  await r.handleCustomEvent?.(
                    e,
                    t,
                    this.runId,
                    this.tags,
                    this.metadata
                  );
                } catch (e) {
                  if (
                    ((r.raiseError ? console.error : console.warn)(
                      `Error in handler ${r.constructor.name}, handleCustomEvent: ${e}`
                    ),
                    r.raiseError)
                  )
                    throw e;
                }
              }, r.awaitHandlers)
            )
          );
        }
      }
      class I extends P {
        getChild(e) {
          let t = new j(this.runId);
          return (
            t.setHandlers(this.inheritableHandlers),
            t.addTags(this.inheritableTags),
            t.addMetadata(this.inheritableMetadata),
            e && t.addTags([e], !1),
            t
          );
        }
        async handleRetrieverEnd(e) {
          await Promise.all(
            this.handlers.map((t) =>
              O(async () => {
                if (!t.ignoreRetriever)
                  try {
                    await t.handleRetrieverEnd?.(
                      e,
                      this.runId,
                      this._parentRunId,
                      this.tags
                    );
                  } catch (e) {
                    if (
                      ((t.raiseError ? console.error : console.warn)(
                        `Error in handler ${t.constructor.name}, handleRetriever`
                      ),
                      t.raiseError)
                    )
                      throw e;
                  }
              }, t.awaitHandlers)
            )
          );
        }
        async handleRetrieverError(e) {
          await Promise.all(
            this.handlers.map((t) =>
              O(async () => {
                if (!t.ignoreRetriever)
                  try {
                    await t.handleRetrieverError?.(
                      e,
                      this.runId,
                      this._parentRunId,
                      this.tags
                    );
                  } catch (r) {
                    if (
                      ((t.raiseError ? console.error : console.warn)(
                        `Error in handler ${t.constructor.name}, handleRetrieverError: ${r}`
                      ),
                      t.raiseError)
                    )
                      throw e;
                  }
              }, t.awaitHandlers)
            )
          );
        }
      }
      class T extends P {
        async handleLLMNewToken(e, t, r, a, n, i) {
          await Promise.all(
            this.handlers.map((r) =>
              O(async () => {
                if (!r.ignoreLLM)
                  try {
                    await r.handleLLMNewToken?.(
                      e,
                      t ?? { prompt: 0, completion: 0 },
                      this.runId,
                      this._parentRunId,
                      this.tags,
                      i
                    );
                  } catch (e) {
                    if (
                      ((r.raiseError ? console.error : console.warn)(
                        `Error in handler ${r.constructor.name}, handleLLMNewToken: ${e}`
                      ),
                      r.raiseError)
                    )
                      throw e;
                  }
              }, r.awaitHandlers)
            )
          );
        }
        async handleLLMError(e) {
          await Promise.all(
            this.handlers.map((t) =>
              O(async () => {
                if (!t.ignoreLLM)
                  try {
                    await t.handleLLMError?.(
                      e,
                      this.runId,
                      this._parentRunId,
                      this.tags
                    );
                  } catch (e) {
                    if (
                      ((t.raiseError ? console.error : console.warn)(
                        `Error in handler ${t.constructor.name}, handleLLMError: ${e}`
                      ),
                      t.raiseError)
                    )
                      throw e;
                  }
              }, t.awaitHandlers)
            )
          );
        }
        async handleLLMEnd(e) {
          await Promise.all(
            this.handlers.map((t) =>
              O(async () => {
                if (!t.ignoreLLM)
                  try {
                    await t.handleLLMEnd?.(
                      e,
                      this.runId,
                      this._parentRunId,
                      this.tags
                    );
                  } catch (e) {
                    if (
                      ((t.raiseError ? console.error : console.warn)(
                        `Error in handler ${t.constructor.name}, handleLLMEnd: ${e}`
                      ),
                      t.raiseError)
                    )
                      throw e;
                  }
              }, t.awaitHandlers)
            )
          );
        }
      }
      class R extends P {
        getChild(e) {
          let t = new j(this.runId);
          return (
            t.setHandlers(this.inheritableHandlers),
            t.addTags(this.inheritableTags),
            t.addMetadata(this.inheritableMetadata),
            e && t.addTags([e], !1),
            t
          );
        }
        async handleChainError(e, t, r, a, n) {
          await Promise.all(
            this.handlers.map((t) =>
              O(async () => {
                if (!t.ignoreChain)
                  try {
                    await t.handleChainError?.(
                      e,
                      this.runId,
                      this._parentRunId,
                      this.tags,
                      n
                    );
                  } catch (e) {
                    if (
                      ((t.raiseError ? console.error : console.warn)(
                        `Error in handler ${t.constructor.name}, handleChainError: ${e}`
                      ),
                      t.raiseError)
                    )
                      throw e;
                  }
              }, t.awaitHandlers)
            )
          );
        }
        async handleChainEnd(e, t, r, a, n) {
          await Promise.all(
            this.handlers.map((t) =>
              O(async () => {
                if (!t.ignoreChain)
                  try {
                    await t.handleChainEnd?.(
                      e,
                      this.runId,
                      this._parentRunId,
                      this.tags,
                      n
                    );
                  } catch (e) {
                    if (
                      ((t.raiseError ? console.error : console.warn)(
                        `Error in handler ${t.constructor.name}, handleChainEnd: ${e}`
                      ),
                      t.raiseError)
                    )
                      throw e;
                  }
              }, t.awaitHandlers)
            )
          );
        }
        async handleAgentAction(e) {
          await Promise.all(
            this.handlers.map((t) =>
              O(async () => {
                if (!t.ignoreAgent)
                  try {
                    await t.handleAgentAction?.(
                      e,
                      this.runId,
                      this._parentRunId,
                      this.tags
                    );
                  } catch (e) {
                    if (
                      ((t.raiseError ? console.error : console.warn)(
                        `Error in handler ${t.constructor.name}, handleAgentAction: ${e}`
                      ),
                      t.raiseError)
                    )
                      throw e;
                  }
              }, t.awaitHandlers)
            )
          );
        }
        async handleAgentEnd(e) {
          await Promise.all(
            this.handlers.map((t) =>
              O(async () => {
                if (!t.ignoreAgent)
                  try {
                    await t.handleAgentEnd?.(
                      e,
                      this.runId,
                      this._parentRunId,
                      this.tags
                    );
                  } catch (e) {
                    if (
                      ((t.raiseError ? console.error : console.warn)(
                        `Error in handler ${t.constructor.name}, handleAgentEnd: ${e}`
                      ),
                      t.raiseError)
                    )
                      throw e;
                  }
              }, t.awaitHandlers)
            )
          );
        }
      }
      class $ extends P {
        getChild(e) {
          let t = new j(this.runId);
          return (
            t.setHandlers(this.inheritableHandlers),
            t.addTags(this.inheritableTags),
            t.addMetadata(this.inheritableMetadata),
            e && t.addTags([e], !1),
            t
          );
        }
        async handleToolError(e) {
          await Promise.all(
            this.handlers.map((t) =>
              O(async () => {
                if (!t.ignoreAgent)
                  try {
                    await t.handleToolError?.(
                      e,
                      this.runId,
                      this._parentRunId,
                      this.tags
                    );
                  } catch (e) {
                    if (
                      ((t.raiseError ? console.error : console.warn)(
                        `Error in handler ${t.constructor.name}, handleToolError: ${e}`
                      ),
                      t.raiseError)
                    )
                      throw e;
                  }
              }, t.awaitHandlers)
            )
          );
        }
        async handleToolEnd(e) {
          await Promise.all(
            this.handlers.map((t) =>
              O(async () => {
                if (!t.ignoreAgent)
                  try {
                    await t.handleToolEnd?.(
                      e,
                      this.runId,
                      this._parentRunId,
                      this.tags
                    );
                  } catch (e) {
                    if (
                      ((t.raiseError ? console.error : console.warn)(
                        `Error in handler ${t.constructor.name}, handleToolEnd: ${e}`
                      ),
                      t.raiseError)
                    )
                      throw e;
                  }
              }, t.awaitHandlers)
            )
          );
        }
      }
      class j extends A {
        constructor(e, t) {
          super(),
            Object.defineProperty(this, "handlers", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: [],
            }),
            Object.defineProperty(this, "inheritableHandlers", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: [],
            }),
            Object.defineProperty(this, "tags", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: [],
            }),
            Object.defineProperty(this, "inheritableTags", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: [],
            }),
            Object.defineProperty(this, "metadata", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: {},
            }),
            Object.defineProperty(this, "inheritableMetadata", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: {},
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "callback_manager",
            }),
            Object.defineProperty(this, "_parentRunId", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.handlers = t?.handlers ?? this.handlers),
            (this.inheritableHandlers =
              t?.inheritableHandlers ?? this.inheritableHandlers),
            (this.tags = t?.tags ?? this.tags),
            (this.inheritableTags = t?.inheritableTags ?? this.inheritableTags),
            (this.metadata = t?.metadata ?? this.metadata),
            (this.inheritableMetadata =
              t?.inheritableMetadata ?? this.inheritableMetadata),
            (this._parentRunId = e);
        }
        getParentRunId() {
          return this._parentRunId;
        }
        async handleLLMStart(e, t, r, a, n, s, o, u) {
          return Promise.all(
            t.map(async (t, a) => {
              let s = 0 === a && r ? r : (0, i.Z)();
              return (
                await Promise.all(
                  this.handlers.map((r) => {
                    if (!r.ignoreLLM)
                      return (
                        (0, l.H)(r) &&
                          r._createRunForLLMStart(
                            e,
                            [t],
                            s,
                            this._parentRunId,
                            n,
                            this.tags,
                            this.metadata,
                            u
                          ),
                        O(async () => {
                          try {
                            await r.handleLLMStart?.(
                              e,
                              [t],
                              s,
                              this._parentRunId,
                              n,
                              this.tags,
                              this.metadata,
                              u
                            );
                          } catch (e) {
                            if (
                              ((r.raiseError ? console.error : console.warn)(
                                `Error in handler ${r.constructor.name}, handleLLMStart: ${e}`
                              ),
                              r.raiseError)
                            )
                              throw e;
                          }
                        }, r.awaitHandlers)
                      );
                  })
                ),
                new T(
                  s,
                  this.handlers,
                  this.inheritableHandlers,
                  this.tags,
                  this.inheritableTags,
                  this.metadata,
                  this.inheritableMetadata,
                  this._parentRunId
                )
              );
            })
          );
        }
        async handleChatModelStart(e, t, r, a, n, s, o, u) {
          return Promise.all(
            t.map(async (t, a) => {
              let s = 0 === a && r ? r : (0, i.Z)();
              return (
                await Promise.all(
                  this.handlers.map((r) => {
                    if (!r.ignoreLLM)
                      return (
                        (0, l.H)(r) &&
                          r._createRunForChatModelStart(
                            e,
                            [t],
                            s,
                            this._parentRunId,
                            n,
                            this.tags,
                            this.metadata,
                            u
                          ),
                        O(async () => {
                          try {
                            if (r.handleChatModelStart)
                              await r.handleChatModelStart?.(
                                e,
                                [t],
                                s,
                                this._parentRunId,
                                n,
                                this.tags,
                                this.metadata,
                                u
                              );
                            else if (r.handleLLMStart) {
                              let a = (0, m.zs)(t);
                              await r.handleLLMStart?.(
                                e,
                                [a],
                                s,
                                this._parentRunId,
                                n,
                                this.tags,
                                this.metadata,
                                u
                              );
                            }
                          } catch (e) {
                            if (
                              ((r.raiseError ? console.error : console.warn)(
                                `Error in handler ${r.constructor.name}, handleLLMStart: ${e}`
                              ),
                              r.raiseError)
                            )
                              throw e;
                          }
                        }, r.awaitHandlers)
                      );
                  })
                ),
                new T(
                  s,
                  this.handlers,
                  this.inheritableHandlers,
                  this.tags,
                  this.inheritableTags,
                  this.metadata,
                  this.inheritableMetadata,
                  this._parentRunId
                )
              );
            })
          );
        }
        async handleChainStart(e, t, r = (0, i.Z)(), a, n, s, o) {
          return (
            await Promise.all(
              this.handlers.map((n) => {
                if (!n.ignoreChain)
                  return (
                    (0, l.H)(n) &&
                      n._createRunForChainStart(
                        e,
                        t,
                        r,
                        this._parentRunId,
                        this.tags,
                        this.metadata,
                        a,
                        o
                      ),
                    O(async () => {
                      try {
                        await n.handleChainStart?.(
                          e,
                          t,
                          r,
                          this._parentRunId,
                          this.tags,
                          this.metadata,
                          a,
                          o
                        );
                      } catch (e) {
                        if (
                          ((n.raiseError ? console.error : console.warn)(
                            `Error in handler ${n.constructor.name}, handleChainStart: ${e}`
                          ),
                          n.raiseError)
                        )
                          throw e;
                      }
                    }, n.awaitHandlers)
                  );
              })
            ),
            new R(
              r,
              this.handlers,
              this.inheritableHandlers,
              this.tags,
              this.inheritableTags,
              this.metadata,
              this.inheritableMetadata,
              this._parentRunId
            )
          );
        }
        async handleToolStart(e, t, r = (0, i.Z)(), a, n, s, o) {
          return (
            await Promise.all(
              this.handlers.map((a) => {
                if (!a.ignoreAgent)
                  return (
                    (0, l.H)(a) &&
                      a._createRunForToolStart(
                        e,
                        t,
                        r,
                        this._parentRunId,
                        this.tags,
                        this.metadata,
                        o
                      ),
                    O(async () => {
                      try {
                        await a.handleToolStart?.(
                          e,
                          t,
                          r,
                          this._parentRunId,
                          this.tags,
                          this.metadata,
                          o
                        );
                      } catch (e) {
                        if (
                          ((a.raiseError ? console.error : console.warn)(
                            `Error in handler ${a.constructor.name}, handleToolStart: ${e}`
                          ),
                          a.raiseError)
                        )
                          throw e;
                      }
                    }, a.awaitHandlers)
                  );
              })
            ),
            new $(
              r,
              this.handlers,
              this.inheritableHandlers,
              this.tags,
              this.inheritableTags,
              this.metadata,
              this.inheritableMetadata,
              this._parentRunId
            )
          );
        }
        async handleRetrieverStart(e, t, r = (0, i.Z)(), a, n, s, o) {
          return (
            await Promise.all(
              this.handlers.map((a) => {
                if (!a.ignoreRetriever)
                  return (
                    (0, l.H)(a) &&
                      a._createRunForRetrieverStart(
                        e,
                        t,
                        r,
                        this._parentRunId,
                        this.tags,
                        this.metadata,
                        o
                      ),
                    O(async () => {
                      try {
                        await a.handleRetrieverStart?.(
                          e,
                          t,
                          r,
                          this._parentRunId,
                          this.tags,
                          this.metadata,
                          o
                        );
                      } catch (e) {
                        if (
                          ((a.raiseError ? console.error : console.warn)(
                            `Error in handler ${a.constructor.name}, handleRetrieverStart: ${e}`
                          ),
                          a.raiseError)
                        )
                          throw e;
                      }
                    }, a.awaitHandlers)
                  );
              })
            ),
            new I(
              r,
              this.handlers,
              this.inheritableHandlers,
              this.tags,
              this.inheritableTags,
              this.metadata,
              this.inheritableMetadata,
              this._parentRunId
            )
          );
        }
        async handleCustomEvent(e, t, r, a, n) {
          await Promise.all(
            this.handlers.map((a) =>
              O(async () => {
                if (!a.ignoreCustomEvent)
                  try {
                    await a.handleCustomEvent?.(
                      e,
                      t,
                      r,
                      this.tags,
                      this.metadata
                    );
                  } catch (e) {
                    if (
                      ((a.raiseError ? console.error : console.warn)(
                        `Error in handler ${a.constructor.name}, handleCustomEvent: ${e}`
                      ),
                      a.raiseError)
                    )
                      throw e;
                  }
              }, a.awaitHandlers)
            )
          );
        }
        addHandler(e, t = !0) {
          this.handlers.push(e), t && this.inheritableHandlers.push(e);
        }
        removeHandler(e) {
          (this.handlers = this.handlers.filter((t) => t !== e)),
            (this.inheritableHandlers = this.inheritableHandlers.filter(
              (t) => t !== e
            ));
        }
        setHandlers(e, t = !0) {
          for (let r of ((this.handlers = []),
          (this.inheritableHandlers = []),
          e))
            this.addHandler(r, t);
        }
        addTags(e, t = !0) {
          this.removeTags(e),
            this.tags.push(...e),
            t && this.inheritableTags.push(...e);
        }
        removeTags(e) {
          (this.tags = this.tags.filter((t) => !e.includes(t))),
            (this.inheritableTags = this.inheritableTags.filter(
              (t) => !e.includes(t)
            ));
        }
        addMetadata(e, t = !0) {
          (this.metadata = { ...this.metadata, ...e }),
            t &&
              (this.inheritableMetadata = {
                ...this.inheritableMetadata,
                ...e,
              });
        }
        removeMetadata(e) {
          for (let t of Object.keys(e))
            delete this.metadata[t], delete this.inheritableMetadata[t];
        }
        copy(e = [], t = !0) {
          let r = new j(this._parentRunId);
          for (let e of this.handlers) {
            let t = this.inheritableHandlers.includes(e);
            r.addHandler(e, t);
          }
          for (let e of this.tags) {
            let t = this.inheritableTags.includes(e);
            r.addTags([e], t);
          }
          for (let e of Object.keys(this.metadata)) {
            let t = Object.keys(this.inheritableMetadata).includes(e);
            r.addMetadata({ [e]: this.metadata[e] }, t);
          }
          for (let a of e)
            r.handlers
              .filter((e) => "console_callback_handler" === e.name)
              .some((e) => e.name === a.name) || r.addHandler(a, t);
          return r;
        }
        static fromHandlers(e) {
          class t extends s.E {
            constructor() {
              super(),
                Object.defineProperty(this, "name", {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: (0, i.Z)(),
                }),
                Object.assign(this, e);
            }
          }
          let r = new this();
          return r.addHandler(new t()), r;
        }
        static configure(e, t, r, a, n, i, s) {
          return this._configureSync(e, t, r, a, n, i, s);
        }
        static _configureSync(e, t, r, a, n, i, s) {
          let o;
          (e || t) &&
            (Array.isArray(e) || !e
              ? (o = new j()).setHandlers(e?.map(C) ?? [], !0)
              : (o = e),
            (o = o.copy(Array.isArray(t) ? t.map(C) : t?.handlers, !1)));
          let l = "true" === (0, g.lS)("LANGCHAIN_VERBOSE") || s?.verbose,
            u = w.getTraceableRunTree()?.tracingEnabled || k(),
            c = u || ((0, g.lS)("LANGCHAIN_TRACING") ?? !1);
          if (l || c) {
            if (
              (o || (o = new j()),
              l && !o.handlers.some((e) => e.name === f.prototype.name))
            ) {
              let e = new f();
              o.addHandler(e, !0);
            }
            if (
              c &&
              !o.handlers.some((e) => "langchain_tracer" === e.name) &&
              u
            ) {
              let e = new w();
              o.addHandler(e, !0),
                (o._parentRunId =
                  w.getTraceableRunTree()?.id ?? o._parentRunId);
            }
          }
          return (
            (r || a) && o && (o.addTags(r ?? []), o.addTags(a ?? [], !1)),
            (n || i) &&
              o &&
              (o.addMetadata(n ?? {}), o.addMetadata(i ?? {}, !1)),
            o
          );
        }
      }
      function C(e) {
        return "name" in e ? e : s.E.fromMethods(e);
      }
    },
    30717: function (e, t, r) {
      "use strict";
      function a(e, t) {
        return (
          (e.lc_error_code = t),
          (e.message = `${e.message}

Troubleshooting URL: https://js.langchain.com/docs/troubleshooting/errors/${t}/
`),
          e
        );
      }
      r.d(t, {
        r: function () {
          return a;
        },
      });
    },
    402: function (e, t, r) {
      "use strict";
      r.d(t, {
        BD: function () {
          return P;
        },
        qV: function () {
          return I;
        },
        F1: function () {
          return S;
        },
        er: function () {
          return k;
        },
      });
      var a = "object" == typeof window ? window : {},
        n = "0123456789abcdef".split(""),
        i = [-2147483648, 8388608, 32768, 128],
        s = [24, 16, 8, 0],
        o = [];
      function l(e) {
        e
          ? ((o[0] =
              o[16] =
              o[1] =
              o[2] =
              o[3] =
              o[4] =
              o[5] =
              o[6] =
              o[7] =
              o[8] =
              o[9] =
              o[10] =
              o[11] =
              o[12] =
              o[13] =
              o[14] =
              o[15] =
                0),
            (this.blocks = o))
          : (this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
          (this.h0 = 1732584193),
          (this.h1 = 4023233417),
          (this.h2 = 2562383102),
          (this.h3 = 271733878),
          (this.h4 = 3285377520),
          (this.block = this.start = this.bytes = this.hBytes = 0),
          (this.finalized = this.hashed = !1),
          (this.first = !0);
      }
      (l.prototype.update = function (e) {
        if (!this.finalized) {
          var t = "string" != typeof e;
          t && e.constructor === a.ArrayBuffer && (e = new Uint8Array(e));
          for (var r, n, i = 0, o = e.length || 0, l = this.blocks; i < o; ) {
            if (
              (this.hashed &&
                ((this.hashed = !1),
                (l[0] = this.block),
                (l[16] =
                  l[1] =
                  l[2] =
                  l[3] =
                  l[4] =
                  l[5] =
                  l[6] =
                  l[7] =
                  l[8] =
                  l[9] =
                  l[10] =
                  l[11] =
                  l[12] =
                  l[13] =
                  l[14] =
                  l[15] =
                    0)),
              t)
            )
              for (n = this.start; i < o && n < 64; ++i)
                l[n >> 2] |= e[i] << s[3 & n++];
            else
              for (n = this.start; i < o && n < 64; ++i)
                (r = e.charCodeAt(i)) < 128
                  ? (l[n >> 2] |= r << s[3 & n++])
                  : (r < 2048
                      ? (l[n >> 2] |= (192 | (r >> 6)) << s[3 & n++])
                      : (r < 55296 || r >= 57344
                          ? (l[n >> 2] |= (224 | (r >> 12)) << s[3 & n++])
                          : ((r =
                              65536 +
                              (((1023 & r) << 10) |
                                (1023 & e.charCodeAt(++i)))),
                            (l[n >> 2] |= (240 | (r >> 18)) << s[3 & n++]),
                            (l[n >> 2] |=
                              (128 | ((r >> 12) & 63)) << s[3 & n++])),
                        (l[n >> 2] |= (128 | ((r >> 6) & 63)) << s[3 & n++])),
                    (l[n >> 2] |= (128 | (63 & r)) << s[3 & n++]));
            (this.lastByteIndex = n),
              (this.bytes += n - this.start),
              n >= 64
                ? ((this.block = l[16]),
                  (this.start = n - 64),
                  this.hash(),
                  (this.hashed = !0))
                : (this.start = n);
          }
          return (
            this.bytes > 4294967295 &&
              ((this.hBytes += (this.bytes / 4294967296) << 0),
              (this.bytes = this.bytes % 4294967296)),
            this
          );
        }
      }),
        (l.prototype.finalize = function () {
          if (!this.finalized) {
            this.finalized = !0;
            var e = this.blocks,
              t = this.lastByteIndex;
            (e[16] = this.block),
              (e[t >> 2] |= i[3 & t]),
              (this.block = e[16]),
              t >= 56 &&
                (this.hashed || this.hash(),
                (e[0] = this.block),
                (e[16] =
                  e[1] =
                  e[2] =
                  e[3] =
                  e[4] =
                  e[5] =
                  e[6] =
                  e[7] =
                  e[8] =
                  e[9] =
                  e[10] =
                  e[11] =
                  e[12] =
                  e[13] =
                  e[14] =
                  e[15] =
                    0)),
              (e[14] = (this.hBytes << 3) | (this.bytes >>> 29)),
              (e[15] = this.bytes << 3),
              this.hash();
          }
        }),
        (l.prototype.hash = function () {
          var e,
            t,
            r,
            a = this.h0,
            n = this.h1,
            i = this.h2,
            s = this.h3,
            o = this.h4,
            l = this.blocks;
          for (t = 16; t < 80; ++t)
            (r = l[t - 3] ^ l[t - 8] ^ l[t - 14] ^ l[t - 16]),
              (l[t] = (r << 1) | (r >>> 31));
          for (t = 0; t < 20; t += 5)
            (e = (n & i) | (~n & s)),
              (o =
                ((r = (a << 5) | (a >>> 27)) + e + o + 1518500249 + l[t]) << 0),
              (e = (a & (n = (n << 30) | (n >>> 2))) | (~a & i)),
              (s =
                ((r = (o << 5) | (o >>> 27)) + e + s + 1518500249 + l[t + 1]) <<
                0),
              (e = (o & (a = (a << 30) | (a >>> 2))) | (~o & n)),
              (i =
                ((r = (s << 5) | (s >>> 27)) + e + i + 1518500249 + l[t + 2]) <<
                0),
              (e = (s & (o = (o << 30) | (o >>> 2))) | (~s & a)),
              (n =
                ((r = (i << 5) | (i >>> 27)) + e + n + 1518500249 + l[t + 3]) <<
                0),
              (e = (i & (s = (s << 30) | (s >>> 2))) | (~i & o)),
              (a =
                ((r = (n << 5) | (n >>> 27)) + e + a + 1518500249 + l[t + 4]) <<
                0),
              (i = (i << 30) | (i >>> 2));
          for (; t < 40; t += 5)
            (e = n ^ i ^ s),
              (o =
                ((r = (a << 5) | (a >>> 27)) + e + o + 1859775393 + l[t]) << 0),
              (e = a ^ (n = (n << 30) | (n >>> 2)) ^ i),
              (s =
                ((r = (o << 5) | (o >>> 27)) + e + s + 1859775393 + l[t + 1]) <<
                0),
              (e = o ^ (a = (a << 30) | (a >>> 2)) ^ n),
              (i =
                ((r = (s << 5) | (s >>> 27)) + e + i + 1859775393 + l[t + 2]) <<
                0),
              (e = s ^ (o = (o << 30) | (o >>> 2)) ^ a),
              (n =
                ((r = (i << 5) | (i >>> 27)) + e + n + 1859775393 + l[t + 3]) <<
                0),
              (e = i ^ (s = (s << 30) | (s >>> 2)) ^ o),
              (a =
                ((r = (n << 5) | (n >>> 27)) + e + a + 1859775393 + l[t + 4]) <<
                0),
              (i = (i << 30) | (i >>> 2));
          for (; t < 60; t += 5)
            (e = (n & i) | (n & s) | (i & s)),
              (o =
                ((r = (a << 5) | (a >>> 27)) + e + o - 1894007588 + l[t]) << 0),
              (e = (a & (n = (n << 30) | (n >>> 2))) | (a & i) | (n & i)),
              (s =
                ((r = (o << 5) | (o >>> 27)) + e + s - 1894007588 + l[t + 1]) <<
                0),
              (e = (o & (a = (a << 30) | (a >>> 2))) | (o & n) | (a & n)),
              (i =
                ((r = (s << 5) | (s >>> 27)) + e + i - 1894007588 + l[t + 2]) <<
                0),
              (e = (s & (o = (o << 30) | (o >>> 2))) | (s & a) | (o & a)),
              (n =
                ((r = (i << 5) | (i >>> 27)) + e + n - 1894007588 + l[t + 3]) <<
                0),
              (e = (i & (s = (s << 30) | (s >>> 2))) | (i & o) | (s & o)),
              (a =
                ((r = (n << 5) | (n >>> 27)) + e + a - 1894007588 + l[t + 4]) <<
                0),
              (i = (i << 30) | (i >>> 2));
          for (; t < 80; t += 5)
            (e = n ^ i ^ s),
              (o =
                ((r = (a << 5) | (a >>> 27)) + e + o - 899497514 + l[t]) << 0),
              (e = a ^ (n = (n << 30) | (n >>> 2)) ^ i),
              (s =
                ((r = (o << 5) | (o >>> 27)) + e + s - 899497514 + l[t + 1]) <<
                0),
              (e = o ^ (a = (a << 30) | (a >>> 2)) ^ n),
              (i =
                ((r = (s << 5) | (s >>> 27)) + e + i - 899497514 + l[t + 2]) <<
                0),
              (e = s ^ (o = (o << 30) | (o >>> 2)) ^ a),
              (n =
                ((r = (i << 5) | (i >>> 27)) + e + n - 899497514 + l[t + 3]) <<
                0),
              (e = i ^ (s = (s << 30) | (s >>> 2)) ^ o),
              (a =
                ((r = (n << 5) | (n >>> 27)) + e + a - 899497514 + l[t + 4]) <<
                0),
              (i = (i << 30) | (i >>> 2));
          (this.h0 = (this.h0 + a) << 0),
            (this.h1 = (this.h1 + n) << 0),
            (this.h2 = (this.h2 + i) << 0),
            (this.h3 = (this.h3 + s) << 0),
            (this.h4 = (this.h4 + o) << 0);
        }),
        (l.prototype.hex = function () {
          this.finalize();
          var e = this.h0,
            t = this.h1,
            r = this.h2,
            a = this.h3,
            i = this.h4;
          return (
            n[(e >> 28) & 15] +
            n[(e >> 24) & 15] +
            n[(e >> 20) & 15] +
            n[(e >> 16) & 15] +
            n[(e >> 12) & 15] +
            n[(e >> 8) & 15] +
            n[(e >> 4) & 15] +
            n[15 & e] +
            n[(t >> 28) & 15] +
            n[(t >> 24) & 15] +
            n[(t >> 20) & 15] +
            n[(t >> 16) & 15] +
            n[(t >> 12) & 15] +
            n[(t >> 8) & 15] +
            n[(t >> 4) & 15] +
            n[15 & t] +
            n[(r >> 28) & 15] +
            n[(r >> 24) & 15] +
            n[(r >> 20) & 15] +
            n[(r >> 16) & 15] +
            n[(r >> 12) & 15] +
            n[(r >> 8) & 15] +
            n[(r >> 4) & 15] +
            n[15 & r] +
            n[(a >> 28) & 15] +
            n[(a >> 24) & 15] +
            n[(a >> 20) & 15] +
            n[(a >> 16) & 15] +
            n[(a >> 12) & 15] +
            n[(a >> 8) & 15] +
            n[(a >> 4) & 15] +
            n[15 & a] +
            n[(i >> 28) & 15] +
            n[(i >> 24) & 15] +
            n[(i >> 20) & 15] +
            n[(i >> 16) & 15] +
            n[(i >> 12) & 15] +
            n[(i >> 8) & 15] +
            n[(i >> 4) & 15] +
            n[15 & i]
          );
        }),
        (l.prototype.toString = l.prototype.hex),
        (l.prototype.digest = function () {
          this.finalize();
          var e = this.h0,
            t = this.h1,
            r = this.h2,
            a = this.h3,
            n = this.h4;
          return [
            (e >> 24) & 255,
            (e >> 16) & 255,
            (e >> 8) & 255,
            255 & e,
            (t >> 24) & 255,
            (t >> 16) & 255,
            (t >> 8) & 255,
            255 & t,
            (r >> 24) & 255,
            (r >> 16) & 255,
            (r >> 8) & 255,
            255 & r,
            (a >> 24) & 255,
            (a >> 16) & 255,
            (a >> 8) & 255,
            255 & a,
            (n >> 24) & 255,
            (n >> 16) & 255,
            (n >> 8) & 255,
            255 & n,
          ];
        }),
        (l.prototype.array = l.prototype.digest),
        (l.prototype.arrayBuffer = function () {
          this.finalize();
          var e = new ArrayBuffer(20),
            t = new DataView(e);
          return (
            t.setUint32(0, this.h0),
            t.setUint32(4, this.h1),
            t.setUint32(8, this.h2),
            t.setUint32(12, this.h3),
            t.setUint32(16, this.h4),
            e
          );
        });
      let u = (e) => new l(!0).update(e).hex();
      var c = r(72245);
      let d = (...e) => u(e.join("_"));
      class h {}
      let p = new Map();
      class f extends h {
        constructor(e) {
          super(),
            Object.defineProperty(this, "cache", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.cache = e ?? new Map());
        }
        lookup(e, t) {
          return Promise.resolve(this.cache.get(d(e, t)) ?? null);
        }
        async update(e, t, r) {
          this.cache.set(d(e, t), r);
        }
        static global() {
          return new f(p);
        }
      }
      var m = r(98415),
        g = r(56989);
      class y extends m.i {}
      class b extends y {
        static lc_name() {
          return "StringPromptValue";
        }
        constructor(e) {
          super({ value: e }),
            Object.defineProperty(this, "lc_namespace", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: ["langchain_core", "prompt_values"],
            }),
            Object.defineProperty(this, "lc_serializable", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !0,
            }),
            Object.defineProperty(this, "value", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.value = e);
        }
        toString() {
          return this.value;
        }
        toChatMessages() {
          return [new g.xk(this.value)];
        }
      }
      class _ extends y {
        static lc_name() {
          return "ChatPromptValue";
        }
        constructor(e) {
          Array.isArray(e) && (e = { messages: e }),
            super(e),
            Object.defineProperty(this, "lc_namespace", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: ["langchain_core", "prompt_values"],
            }),
            Object.defineProperty(this, "lc_serializable", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !0,
            }),
            Object.defineProperty(this, "messages", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.messages = e.messages);
        }
        toString() {
          return (0, c.zs)(this.messages);
        }
        toChatMessages() {
          return this.messages;
        }
      }
      var v = r(99636),
        w = r(45772),
        E = r(50648);
      let x = (e) =>
          e.startsWith("gpt-3.5-turbo-16k")
            ? "gpt-3.5-turbo-16k"
            : e.startsWith("gpt-3.5-turbo-")
            ? "gpt-3.5-turbo"
            : e.startsWith("gpt-4-32k")
            ? "gpt-4-32k"
            : e.startsWith("gpt-4-")
            ? "gpt-4"
            : e.startsWith("gpt-4o")
            ? "gpt-4o"
            : e,
        O = (e) => {
          switch (x(e)) {
            case "gpt-3.5-turbo-16k":
              return 16384;
            case "gpt-3.5-turbo":
              return 4096;
            case "gpt-4-32k":
              return 32768;
            case "gpt-4":
              return 8192;
            case "text-davinci-003":
            default:
              return 4097;
            case "text-curie-001":
            case "text-babbage-001":
            case "text-ada-001":
            case "code-cushman-001":
              return 2048;
            case "code-davinci-002":
              return 8e3;
          }
        };
      function k(e) {
        return (
          "object" == typeof e &&
          !!e &&
          "type" in e &&
          "function" === e.type &&
          "function" in e &&
          "object" == typeof e.function &&
          !!e.function &&
          "name" in e.function &&
          "parameters" in e.function
        );
      }
      let S = async ({ prompt: e, modelName: t }) => {
          let r;
          try {
            r = (await (0, w.b)(x(t))).encode(e).length;
          } catch (t) {
            console.warn(
              "Failed to calculate number of tokens, falling back to approximate count"
            ),
              (r = Math.ceil(e.length / 4));
          }
          return O(t) - r;
        },
        A = () => !1;
      class P extends E.eq {
        get lc_attributes() {
          return { callbacks: void 0, verbose: void 0 };
        }
        constructor(e) {
          super(e),
            Object.defineProperty(this, "verbose", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "callbacks", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "tags", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "metadata", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.verbose = e.verbose ?? A()),
            (this.callbacks = e.callbacks),
            (this.tags = e.tags ?? []),
            (this.metadata = e.metadata ?? {});
        }
      }
      class I extends P {
        get callKeys() {
          return ["stop", "timeout", "signal", "tags", "metadata", "callbacks"];
        }
        constructor({ callbacks: e, callbackManager: t, ...r }) {
          let { cache: a, ...n } = r;
          super({ callbacks: e ?? t, ...n }),
            Object.defineProperty(this, "caller", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "cache", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "_encoding", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            "object" == typeof a
              ? (this.cache = a)
              : a
              ? (this.cache = f.global())
              : (this.cache = void 0),
            (this.caller = new v.L(r ?? {}));
        }
        async getNumTokens(e) {
          if ("string" != typeof e) return 0;
          let t = Math.ceil(e.length / 4);
          if (!this._encoding)
            try {
              this._encoding = await (0, w.b)(
                "modelName" in this ? x(this.modelName) : "gpt2"
              );
            } catch (e) {
              console.warn(
                "Failed to calculate number of tokens, falling back to approximate count",
                e
              );
            }
          if (this._encoding)
            try {
              t = this._encoding.encode(e).length;
            } catch (e) {
              console.warn(
                "Failed to calculate number of tokens, falling back to approximate count",
                e
              );
            }
          return t;
        }
        static _convertInputToPromptValue(e) {
          return "string" == typeof e
            ? new b(e)
            : Array.isArray(e)
            ? new _(e.map(c.E1))
            : e;
        }
        _identifyingParams() {
          return {};
        }
        _getSerializedCacheKeyParametersForCall({ config: e, ...t }) {
          return Object.entries({
            ...this._identifyingParams(),
            ...t,
            _type: this._llmType(),
            _model: this._modelType(),
          })
            .filter(([e, t]) => void 0 !== t)
            .map(([e, t]) => `${e}:${JSON.stringify(t)}`)
            .sort()
            .join(",");
        }
        serialize() {
          return {
            ...this._identifyingParams(),
            _type: this._llmType(),
            _model: this._modelType(),
          };
        }
        static async deserialize(e) {
          throw Error("Use .toJSON() instead");
        }
      }
    },
    98415: function (e, t, r) {
      "use strict";
      r.d(t, {
        i: function () {
          return o;
        },
        j: function () {
          return s;
        },
      });
      var a = r(2466);
      function n(e, t) {
        return t?.[e] || a(e);
      }
      function i(e) {
        return Array.isArray(e) ? [...e] : { ...e };
      }
      function s(e) {
        let t = Object.getPrototypeOf(e);
        return "function" == typeof e.lc_name &&
          ("function" != typeof t.lc_name || e.lc_name() !== t.lc_name())
          ? e.lc_name()
          : e.name;
      }
      r(23204);
      class o {
        static lc_name() {
          return this.name;
        }
        get lc_id() {
          return [...this.lc_namespace, s(this.constructor)];
        }
        get lc_secrets() {}
        get lc_attributes() {}
        get lc_aliases() {}
        constructor(e, ...t) {
          Object.defineProperty(this, "lc_serializable", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          }),
            Object.defineProperty(this, "lc_kwargs", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.lc_kwargs = e || {});
        }
        toJSON() {
          if (
            !this.lc_serializable ||
            this.lc_kwargs instanceof o ||
            "object" != typeof this.lc_kwargs ||
            Array.isArray(this.lc_kwargs)
          )
            return this.toJSONNotImplemented();
          let e = {},
            t = {},
            r = Object.keys(this.lc_kwargs).reduce(
              (e, t) => ((e[t] = t in this ? this[t] : this.lc_kwargs[t]), e),
              {}
            );
          for (
            let a = Object.getPrototypeOf(this);
            a;
            a = Object.getPrototypeOf(a)
          )
            Object.assign(e, Reflect.get(a, "lc_aliases", this)),
              Object.assign(t, Reflect.get(a, "lc_secrets", this)),
              Object.assign(r, Reflect.get(a, "lc_attributes", this));
          return (
            Object.keys(t).forEach((e) => {
              let t = this,
                a = r,
                [n, ...i] = e.split(".").reverse();
              for (let e of i.reverse()) {
                if (!(e in t) || void 0 === t[e]) return;
                (e in a && void 0 !== a[e]) ||
                  ("object" == typeof t[e] && null != t[e]
                    ? (a[e] = {})
                    : Array.isArray(t[e]) && (a[e] = [])),
                  (t = t[e]),
                  (a = a[e]);
              }
              n in t && void 0 !== t[n] && (a[n] = a[n] || t[n]);
            }),
            {
              lc: 1,
              type: "constructor",
              id: this.lc_id,
              kwargs: (function (e, t, r) {
                let a = {};
                for (let n in e) Object.hasOwn(e, n) && (a[t(n, r)] = e[n]);
                return a;
              })(
                Object.keys(t).length
                  ? (function (e, t) {
                      let r = i(e);
                      for (let [e, a] of Object.entries(t)) {
                        let [t, ...n] = e.split(".").reverse(),
                          s = r;
                        for (let e of n.reverse()) {
                          if (void 0 === s[e]) break;
                          (s[e] = i(s[e])), (s = s[e]);
                        }
                        void 0 !== s[t] &&
                          (s[t] = { lc: 1, type: "secret", id: [a] });
                      }
                      return r;
                    })(r, t)
                  : r,
                n,
                e
              ),
            }
          );
        }
        toJSONNotImplemented() {
          return { lc: 1, type: "not_implemented", id: this.lc_id };
        }
      }
    },
    82882: function (e, t, r) {
      "use strict";
      r.d(t, {
        GC: function () {
          return u;
        },
        Z0: function () {
          return o;
        },
        gY: function () {
          return s;
        },
        wT: function () {
          return l;
        },
      });
      var a = r(15305),
        n = r(2820),
        i = r(97076);
      class s extends n.ku {
        get lc_aliases() {
          return {
            ...super.lc_aliases,
            tool_calls: "tool_calls",
            invalid_tool_calls: "invalid_tool_calls",
          };
        }
        constructor(e, t) {
          let r;
          if ("string" == typeof e)
            r = {
              content: e,
              tool_calls: [],
              invalid_tool_calls: [],
              additional_kwargs: t ?? {},
            };
          else {
            r = e;
            let t = r.additional_kwargs?.tool_calls,
              a = r.tool_calls;
            null != t &&
              t.length > 0 &&
              (void 0 === a || 0 === a.length) &&
              console.warn(
                "New LangChain packages are available that more efficiently handle tool calling.\n\nPlease upgrade your packages to versions that set message tool calls. e.g., `yarn add @langchain/anthropic`, yarn add @langchain/openai`, etc."
              );
            try {
              if (null != t && void 0 === a) {
                let [e, a] = (0, i.jC)(t);
                (r.tool_calls = e ?? []), (r.invalid_tool_calls = a ?? []);
              } else
                (r.tool_calls = r.tool_calls ?? []),
                  (r.invalid_tool_calls = r.invalid_tool_calls ?? []);
            } catch (e) {
              (r.tool_calls = []), (r.invalid_tool_calls = []);
            }
          }
          super(r),
            Object.defineProperty(this, "tool_calls", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: [],
            }),
            Object.defineProperty(this, "invalid_tool_calls", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: [],
            }),
            Object.defineProperty(this, "usage_metadata", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            "string" != typeof r &&
              ((this.tool_calls = r.tool_calls ?? this.tool_calls),
              (this.invalid_tool_calls =
                r.invalid_tool_calls ?? this.invalid_tool_calls)),
            (this.usage_metadata = r.usage_metadata);
        }
        static lc_name() {
          return "AIMessage";
        }
        _getType() {
          return "ai";
        }
        get _printableFields() {
          return {
            ...super._printableFields,
            tool_calls: this.tool_calls,
            invalid_tool_calls: this.invalid_tool_calls,
            usage_metadata: this.usage_metadata,
          };
        }
      }
      function o(e) {
        return "ai" === e._getType();
      }
      function l(e) {
        return "ai" === e._getType();
      }
      class u extends n.$k {
        constructor(e) {
          let t;
          if ("string" == typeof e)
            t = {
              content: e,
              tool_calls: [],
              invalid_tool_calls: [],
              tool_call_chunks: [],
            };
          else if (void 0 === e.tool_call_chunks)
            t = {
              ...e,
              tool_calls: e.tool_calls ?? [],
              invalid_tool_calls: [],
              tool_call_chunks: [],
              usage_metadata:
                void 0 !== e.usage_metadata ? e.usage_metadata : void 0,
            };
          else {
            let r = [],
              n = [];
            for (let t of e.tool_call_chunks) {
              let e = {};
              try {
                if (
                  ((e = (0, a.g)(t.args || "{}")),
                  null === e || "object" != typeof e || Array.isArray(e))
                )
                  throw Error("Malformed tool call chunk args.");
                r.push({
                  name: t.name ?? "",
                  args: e,
                  id: t.id,
                  type: "tool_call",
                });
              } catch (e) {
                n.push({
                  name: t.name,
                  args: t.args,
                  id: t.id,
                  error: "Malformed args.",
                  type: "invalid_tool_call",
                });
              }
            }
            t = {
              ...e,
              tool_calls: r,
              invalid_tool_calls: n,
              usage_metadata:
                void 0 !== e.usage_metadata ? e.usage_metadata : void 0,
            };
          }
          super(t),
            Object.defineProperty(this, "tool_calls", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: [],
            }),
            Object.defineProperty(this, "invalid_tool_calls", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: [],
            }),
            Object.defineProperty(this, "tool_call_chunks", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: [],
            }),
            Object.defineProperty(this, "usage_metadata", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.tool_call_chunks =
              t.tool_call_chunks ?? this.tool_call_chunks),
            (this.tool_calls = t.tool_calls ?? this.tool_calls),
            (this.invalid_tool_calls =
              t.invalid_tool_calls ?? this.invalid_tool_calls),
            (this.usage_metadata = t.usage_metadata);
        }
        get lc_aliases() {
          return {
            ...super.lc_aliases,
            tool_calls: "tool_calls",
            invalid_tool_calls: "invalid_tool_calls",
            tool_call_chunks: "tool_call_chunks",
          };
        }
        static lc_name() {
          return "AIMessageChunk";
        }
        _getType() {
          return "ai";
        }
        get _printableFields() {
          return {
            ...super._printableFields,
            tool_calls: this.tool_calls,
            tool_call_chunks: this.tool_call_chunks,
            invalid_tool_calls: this.invalid_tool_calls,
            usage_metadata: this.usage_metadata,
          };
        }
        concat(e) {
          let t = {
            content: (0, n.Wf)(this.content, e.content),
            additional_kwargs: (0, n.wv)(
              this.additional_kwargs,
              e.additional_kwargs
            ),
            response_metadata: (0, n.wv)(
              this.response_metadata,
              e.response_metadata
            ),
            tool_call_chunks: [],
            id: this.id ?? e.id,
          };
          if (
            void 0 !== this.tool_call_chunks ||
            void 0 !== e.tool_call_chunks
          ) {
            let r = (0, n.eL)(this.tool_call_chunks, e.tool_call_chunks);
            void 0 !== r && r.length > 0 && (t.tool_call_chunks = r);
          }
          if (void 0 !== this.usage_metadata || void 0 !== e.usage_metadata) {
            let r = {
                ...((this.usage_metadata?.input_token_details?.audio !==
                  void 0 ||
                  e.usage_metadata?.input_token_details?.audio !== void 0) && {
                  audio:
                    (this.usage_metadata?.input_token_details?.audio ?? 0) +
                    (e.usage_metadata?.input_token_details?.audio ?? 0),
                }),
                ...((this.usage_metadata?.input_token_details?.cache_read !==
                  void 0 ||
                  e.usage_metadata?.input_token_details?.cache_read !==
                    void 0) && {
                  cache_read:
                    (this.usage_metadata?.input_token_details?.cache_read ??
                      0) +
                    (e.usage_metadata?.input_token_details?.cache_read ?? 0),
                }),
                ...((this.usage_metadata?.input_token_details
                  ?.cache_creation !== void 0 ||
                  e.usage_metadata?.input_token_details?.cache_creation !==
                    void 0) && {
                  cache_creation:
                    (this.usage_metadata?.input_token_details?.cache_creation ??
                      0) +
                    (e.usage_metadata?.input_token_details?.cache_creation ??
                      0),
                }),
              },
              a = {
                ...((this.usage_metadata?.output_token_details?.audio !==
                  void 0 ||
                  e.usage_metadata?.output_token_details?.audio !== void 0) && {
                  audio:
                    (this.usage_metadata?.output_token_details?.audio ?? 0) +
                    (e.usage_metadata?.output_token_details?.audio ?? 0),
                }),
                ...((this.usage_metadata?.output_token_details?.reasoning !==
                  void 0 ||
                  e.usage_metadata?.output_token_details?.reasoning !==
                    void 0) && {
                  reasoning:
                    (this.usage_metadata?.output_token_details?.reasoning ??
                      0) +
                    (e.usage_metadata?.output_token_details?.reasoning ?? 0),
                }),
              },
              n = this.usage_metadata ?? {
                input_tokens: 0,
                output_tokens: 0,
                total_tokens: 0,
              },
              i = e.usage_metadata ?? {
                input_tokens: 0,
                output_tokens: 0,
                total_tokens: 0,
              },
              s = {
                input_tokens: n.input_tokens + i.input_tokens,
                output_tokens: n.output_tokens + i.output_tokens,
                total_tokens: n.total_tokens + i.total_tokens,
                ...(Object.keys(r).length > 0 && { input_token_details: r }),
                ...(Object.keys(a).length > 0 && { output_token_details: a }),
              };
            t.usage_metadata = s;
          }
          return new u(t);
        }
      }
    },
    2820: function (e, t, r) {
      "use strict";
      r.d(t, {
        $k: function () {
          return c;
        },
        QW: function () {
          return h;
        },
        Wf: function () {
          return n;
        },
        a2: function () {
          return p;
        },
        eL: function () {
          return l;
        },
        gQ: function () {
          return d;
        },
        ku: function () {
          return s;
        },
        n4: function () {
          return i;
        },
        wv: function () {
          return o;
        },
        x: function () {
          return u;
        },
      });
      var a = r(98415);
      function n(e, t) {
        return "string" == typeof e
          ? "string" == typeof t
            ? e + t
            : [{ type: "text", text: e }, ...t]
          : Array.isArray(t)
          ? l(e, t) ?? [...e, ...t]
          : [...e, { type: "text", text: t }];
      }
      function i(e, t) {
        return "error" === e || "error" === t ? "error" : "success";
      }
      class s extends a.i {
        get lc_aliases() {
          return {
            additional_kwargs: "additional_kwargs",
            response_metadata: "response_metadata",
          };
        }
        get text() {
          return "string" == typeof this.content ? this.content : "";
        }
        getType() {
          return this._getType();
        }
        constructor(e, t) {
          "string" == typeof e &&
            (e = { content: e, additional_kwargs: t, response_metadata: {} }),
            e.additional_kwargs || (e.additional_kwargs = {}),
            e.response_metadata || (e.response_metadata = {}),
            super(e),
            Object.defineProperty(this, "lc_namespace", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: ["langchain_core", "messages"],
            }),
            Object.defineProperty(this, "lc_serializable", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !0,
            }),
            Object.defineProperty(this, "content", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "additional_kwargs", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "response_metadata", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "id", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.name = e.name),
            (this.content = e.content),
            (this.additional_kwargs = e.additional_kwargs),
            (this.response_metadata = e.response_metadata),
            (this.id = e.id);
        }
        toDict() {
          return { type: this._getType(), data: this.toJSON().kwargs };
        }
        static lc_name() {
          return "BaseMessage";
        }
        get _printableFields() {
          return {
            id: this.id,
            content: this.content,
            name: this.name,
            additional_kwargs: this.additional_kwargs,
            response_metadata: this.response_metadata,
          };
        }
        _updateId(e) {
          (this.id = e), (this.lc_kwargs.id = e);
        }
        get [Symbol.toStringTag]() {
          return this.constructor.lc_name();
        }
        [Symbol.for("nodejs.util.inspect.custom")](e) {
          var t, r;
          if (null === e) return this;
          let a =
            ((t = this._printableFields),
            (r = Math.max(4, e)),
            JSON.stringify(
              (function e(t, a) {
                if ("object" != typeof t || null == t) return t;
                if (a >= r) return Array.isArray(t) ? "[Array]" : "[Object]";
                if (Array.isArray(t)) return t.map((t) => e(t, a + 1));
                let n = {};
                for (let r of Object.keys(t)) n[r] = e(t[r], a + 1);
                return n;
              })(t, 0),
              null,
              2
            ));
          return `${this.constructor.lc_name()} ${a}`;
        }
      }
      function o(e, t) {
        let r = { ...e };
        for (let [e, a] of Object.entries(t))
          if (null == r[e]) r[e] = a;
          else if (null == a) continue;
          else if (
            typeof r[e] != typeof a ||
            Array.isArray(r[e]) !== Array.isArray(a)
          )
            throw Error(
              `field[${e}] already exists in the message chunk, but with a different type.`
            );
          else if ("string" == typeof r[e]) {
            if ("type" === e) continue;
            r[e] += a;
          } else if ("object" != typeof r[e] || Array.isArray(r[e])) {
            if (Array.isArray(r[e])) r[e] = l(r[e], a);
            else {
              if (r[e] === a) continue;
              console.warn(
                `field[${e}] already exists in this message chunk and value has unsupported type.`
              );
            }
          } else r[e] = o(r[e], a);
        return r;
      }
      function l(e, t) {
        if (void 0 !== e || void 0 !== t) {
          if (void 0 === e || void 0 === t) return e || t;
          {
            let r = [...e];
            for (let e of t)
              if (
                "object" == typeof e &&
                "index" in e &&
                "number" == typeof e.index
              ) {
                let t = r.findIndex((t) => t.index === e.index);
                -1 !== t ? (r[t] = o(r[t], e)) : r.push(e);
              } else {
                if ("object" == typeof e && "text" in e && "" === e.text)
                  continue;
                r.push(e);
              }
            return r;
          }
        }
      }
      function u(e, t) {
        if (!e && !t) throw Error("Cannot merge two undefined objects.");
        if (!e || !t) return e || t;
        if (typeof e != typeof t)
          throw Error(`Cannot merge objects of different types.
Left ${typeof e}
Right ${typeof t}`);
        if ("string" == typeof e && "string" == typeof t) return e + t;
        if (Array.isArray(e) && Array.isArray(t)) return l(e, t);
        if ("object" == typeof e && "object" == typeof t) return o(e, t);
        if (e === t) return e;
        throw Error(`Can not merge objects of different types.
Left ${e}
Right ${t}`);
      }
      class c extends s {}
      function d(e) {
        return "string" == typeof e.role;
      }
      function h(e) {
        return "function" == typeof e?._getType;
      }
      function p(e) {
        return h(e) && "function" == typeof e.concat;
      }
    },
    27214: function (e, t, r) {
      "use strict";
      r.d(t, {
        HD: function () {
          return i;
        },
        J: function () {
          return n;
        },
      });
      var a = r(2820);
      class n extends a.ku {
        static lc_name() {
          return "ChatMessage";
        }
        static _chatMessageClass() {
          return n;
        }
        constructor(e, t) {
          "string" == typeof e && (e = { content: e, role: t }),
            super(e),
            Object.defineProperty(this, "role", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.role = e.role);
        }
        _getType() {
          return "generic";
        }
        static isInstance(e) {
          return "generic" === e._getType();
        }
        get _printableFields() {
          return { ...super._printableFields, role: this.role };
        }
      }
      class i extends a.$k {
        static lc_name() {
          return "ChatMessageChunk";
        }
        constructor(e, t) {
          "string" == typeof e && (e = { content: e, role: t }),
            super(e),
            Object.defineProperty(this, "role", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.role = e.role);
        }
        _getType() {
          return "generic";
        }
        concat(e) {
          return new i({
            content: (0, a.Wf)(this.content, e.content),
            additional_kwargs: (0, a.wv)(
              this.additional_kwargs,
              e.additional_kwargs
            ),
            response_metadata: (0, a.wv)(
              this.response_metadata,
              e.response_metadata
            ),
            role: this.role,
            id: this.id ?? e.id,
          });
        }
        get _printableFields() {
          return { ...super._printableFields, role: this.role };
        }
      }
    },
    61342: function (e, t, r) {
      "use strict";
      r.d(t, {
        Cr: function () {
          return i;
        },
        TN: function () {
          return n;
        },
      });
      var a = r(2820);
      class n extends a.ku {
        static lc_name() {
          return "FunctionMessage";
        }
        constructor(e, t) {
          "string" == typeof e && (e = { content: e, name: t }), super(e);
        }
        _getType() {
          return "function";
        }
      }
      class i extends a.$k {
        static lc_name() {
          return "FunctionMessageChunk";
        }
        _getType() {
          return "function";
        }
        concat(e) {
          return new i({
            content: (0, a.Wf)(this.content, e.content),
            additional_kwargs: (0, a.wv)(
              this.additional_kwargs,
              e.additional_kwargs
            ),
            response_metadata: (0, a.wv)(
              this.response_metadata,
              e.response_metadata
            ),
            name: this.name ?? "",
            id: this.id ?? e.id,
          });
        }
      }
    },
    56989: function (e, t, r) {
      "use strict";
      r.d(t, {
        ro: function () {
          return i;
        },
        xk: function () {
          return n;
        },
      });
      var a = r(2820);
      class n extends a.ku {
        static lc_name() {
          return "HumanMessage";
        }
        _getType() {
          return "human";
        }
      }
      class i extends a.$k {
        static lc_name() {
          return "HumanMessageChunk";
        }
        _getType() {
          return "human";
        }
        concat(e) {
          return new i({
            content: (0, a.Wf)(this.content, e.content),
            additional_kwargs: (0, a.wv)(
              this.additional_kwargs,
              e.additional_kwargs
            ),
            response_metadata: (0, a.wv)(
              this.response_metadata,
              e.response_metadata
            ),
            id: this.id ?? e.id,
          });
        }
      }
    },
    69662: function (e, t, r) {
      "use strict";
      r.d(t, {
        gY: function () {
          return a.gY;
        },
        GC: function () {
          return a.GC;
        },
        J: function () {
          return i.J;
        },
        HD: function () {
          return i.HD;
        },
        Cr: function () {
          return s.Cr;
        },
        xk: function () {
          return o.xk;
        },
        ro: function () {
          return o.ro;
        },
        xq: function () {
          return l.xq;
        },
        Xz: function () {
          return c.Xz;
        },
        E1: function () {
          return u.E1;
        },
        Oy: function () {
          return u.Oy;
        },
        zs: function () {
          return u.zs;
        },
        Z0: function () {
          return a.Z0;
        },
        wT: function () {
          return a.wT;
        },
        QW: function () {
          return n.QW;
        },
      });
      var a = r(82882),
        n = r(2820),
        i = r(27214),
        s = r(61342),
        o = r(56989),
        l = r(39177),
        u = r(72245);
      r(50648), n.ku;
      var c = r(97076);
      o.xk, o.ro, a.gY, a.GC, l.jN, l.xq, c.Cq, c.Xz, s.TN, s.Cr, i.J, i.HD;
    },
    39177: function (e, t, r) {
      "use strict";
      r.d(t, {
        jN: function () {
          return n;
        },
        xq: function () {
          return i;
        },
      });
      var a = r(2820);
      class n extends a.ku {
        static lc_name() {
          return "SystemMessage";
        }
        _getType() {
          return "system";
        }
      }
      class i extends a.$k {
        static lc_name() {
          return "SystemMessageChunk";
        }
        _getType() {
          return "system";
        }
        concat(e) {
          return new i({
            content: (0, a.Wf)(this.content, e.content),
            additional_kwargs: (0, a.wv)(
              this.additional_kwargs,
              e.additional_kwargs
            ),
            response_metadata: (0, a.wv)(
              this.response_metadata,
              e.response_metadata
            ),
            id: this.id ?? e.id,
          });
        }
      }
    },
    97076: function (e, t, r) {
      "use strict";
      r.d(t, {
        Cq: function () {
          return n;
        },
        Xz: function () {
          return i;
        },
        jC: function () {
          return s;
        },
      });
      var a = r(2820);
      class n extends a.ku {
        static lc_name() {
          return "ToolMessage";
        }
        get lc_aliases() {
          return { tool_call_id: "tool_call_id" };
        }
        constructor(e, t, r) {
          "string" == typeof e &&
            (e = { content: e, name: r, tool_call_id: t }),
            super(e),
            Object.defineProperty(this, "status", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "tool_call_id", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "artifact", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.tool_call_id = e.tool_call_id),
            (this.artifact = e.artifact),
            (this.status = e.status);
        }
        _getType() {
          return "tool";
        }
        static isInstance(e) {
          return "tool" === e._getType();
        }
        get _printableFields() {
          return {
            ...super._printableFields,
            tool_call_id: this.tool_call_id,
            artifact: this.artifact,
          };
        }
      }
      class i extends a.$k {
        constructor(e) {
          super(e),
            Object.defineProperty(this, "tool_call_id", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "status", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "artifact", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.tool_call_id = e.tool_call_id),
            (this.artifact = e.artifact),
            (this.status = e.status);
        }
        static lc_name() {
          return "ToolMessageChunk";
        }
        _getType() {
          return "tool";
        }
        concat(e) {
          return new i({
            content: (0, a.Wf)(this.content, e.content),
            additional_kwargs: (0, a.wv)(
              this.additional_kwargs,
              e.additional_kwargs
            ),
            response_metadata: (0, a.wv)(
              this.response_metadata,
              e.response_metadata
            ),
            artifact: (0, a.x)(this.artifact, e.artifact),
            tool_call_id: this.tool_call_id,
            id: this.id ?? e.id,
            status: (0, a.n4)(this.status, e.status),
          });
        }
        get _printableFields() {
          return {
            ...super._printableFields,
            tool_call_id: this.tool_call_id,
            artifact: this.artifact,
          };
        }
      }
      function s(e) {
        let t = [],
          r = [];
        for (let a of e)
          if (a.function) {
            let e = a.function.name;
            try {
              let r = JSON.parse(a.function.arguments),
                n = { name: e || "", args: r || {}, id: a.id };
              t.push(n);
            } catch (t) {
              r.push({
                name: e,
                args: a.function.arguments,
                id: a.id,
                error: "Malformed args.",
              });
            }
          }
        return [t, r];
      }
    },
    72245: function (e, t, r) {
      "use strict";
      r.d(t, {
        E1: function () {
          return f;
        },
        Oy: function () {
          return g;
        },
        zs: function () {
          return m;
        },
      });
      var a = r(30717),
        n = r(39570),
        i = r(82882),
        s = r(2820),
        o = r(27214),
        l = r(61342),
        u = r(56989),
        c = r(39177),
        d = r(97076);
      function h(e) {
        return (0, n.u)(e)
          ? e
          : "string" == typeof e.id &&
            "function" === e.type &&
            "object" == typeof e.function &&
            null !== e.function &&
            "arguments" in e.function &&
            "string" == typeof e.function.arguments &&
            "name" in e.function &&
            "string" == typeof e.function.name
          ? {
              id: e.id,
              args: JSON.parse(e.function.arguments),
              name: e.function.name,
              type: "tool_call",
            }
          : e;
      }
      function p(e) {
        let t, r;
        if (
          "object" == typeof e &&
          null != e &&
          1 === e.lc &&
          Array.isArray(e.id) &&
          null != e.kwargs &&
          "object" == typeof e.kwargs
        ) {
          let a = e.id.at(-1);
          (t =
            "HumanMessage" === a || "HumanMessageChunk" === a
              ? "user"
              : "AIMessage" === a || "AIMessageChunk" === a
              ? "assistant"
              : "SystemMessage" === a || "SystemMessageChunk" === a
              ? "system"
              : "unknown"),
            (r = e.kwargs);
        } else {
          let { type: a, ...n } = e;
          (t = a), (r = n);
        }
        if ("human" === t || "user" === t) return new u.xk(r);
        if ("ai" === t || "assistant" === t) {
          let { tool_calls: e, ...t } = r;
          if (!Array.isArray(e)) return new i.gY(r);
          let a = e.map(h);
          return new i.gY({ ...t, tool_calls: a });
        }
        if ("system" === t) return new c.jN(r);
        if ("tool" === t && "tool_call_id" in r)
          return new d.Cq({
            ...r,
            content: r.content,
            tool_call_id: r.tool_call_id,
            name: r.name,
          });
        throw (0, a.r)(
          Error(`Unable to coerce message from array: only human, AI, system, or tool message coercion is currently supported.

Received: ${JSON.stringify(e, null, 2)}`),
          "MESSAGE_COERCION_FAILURE"
        );
      }
      function f(e) {
        if ("string" == typeof e) return new u.xk(e);
        if ((0, s.QW)(e)) return e;
        if (Array.isArray(e)) {
          let [t, r] = e;
          return p({ type: t, content: r });
        }
        if (!(0, s.gQ)(e)) return p(e);
        {
          let { role: t, ...r } = e;
          return p({ ...r, type: t });
        }
      }
      function m(e, t = "Human", r = "AI") {
        let a = [];
        for (let n of e) {
          let e;
          if ("human" === n._getType()) e = t;
          else if ("ai" === n._getType()) e = r;
          else if ("system" === n._getType()) e = "System";
          else if ("function" === n._getType()) e = "Function";
          else if ("tool" === n._getType()) e = "Tool";
          else if ("generic" === n._getType()) e = n.role;
          else throw Error(`Got unsupported message type: ${n._getType()}`);
          let i = n.name ? `${n.name}, ` : "",
            s =
              "string" == typeof n.content
                ? n.content
                : JSON.stringify(n.content, null, 2);
          a.push(`${e}: ${i}${s}`);
        }
        return a.join("\n");
      }
      function g(e) {
        let t = e._getType();
        if ("human" === t) return new u.ro({ ...e });
        if ("ai" === t) {
          let t = { ...e };
          return (
            "tool_calls" in t &&
              (t = {
                ...t,
                tool_call_chunks: t.tool_calls?.map((e) => ({
                  ...e,
                  type: "tool_call_chunk",
                  index: void 0,
                  args: JSON.stringify(e.args),
                })),
              }),
            new i.GC({ ...t })
          );
        }
        if ("system" === t) return new c.xq({ ...e });
        if ("function" === t) return new l.Cr({ ...e });
        if (o.J.isInstance(e)) return new o.HD({ ...e });
        throw Error("Unknown message type.");
      }
    },
    61223: function (e, t, r) {
      "use strict";
      r.d(t, {
        bI: function () {
          return s;
        },
        dS: function () {
          return o;
        },
        tw: function () {
          return i;
        },
      });
      var a = r(71902),
        n = r(30717);
      class i extends a.eq {
        parseResultWithPrompt(e, t, r) {
          return this.parseResult(e, r);
        }
        _baseMessageToString(e) {
          return "string" == typeof e.content
            ? e.content
            : this._baseMessageContentToString(e.content);
        }
        _baseMessageContentToString(e) {
          return JSON.stringify(e);
        }
        async invoke(e, t) {
          return "string" == typeof e
            ? this._callWithConfig(
                async (e, t) => this.parseResult([{ text: e }], t?.callbacks),
                e,
                { ...t, runType: "parser" }
              )
            : this._callWithConfig(
                async (e, t) =>
                  this.parseResult(
                    [{ message: e, text: this._baseMessageToString(e) }],
                    t?.callbacks
                  ),
                e,
                { ...t, runType: "parser" }
              );
        }
      }
      class s extends i {
        parseResult(e, t) {
          return this.parse(e[0].text, t);
        }
        async parseWithPrompt(e, t, r) {
          return this.parse(e, r);
        }
        _type() {
          throw Error("_type not implemented");
        }
      }
      class o extends Error {
        constructor(e, t, r, a = !1) {
          if (
            (super(e),
            Object.defineProperty(this, "llmOutput", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "observation", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "sendToLLM", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.llmOutput = t),
            (this.observation = r),
            (this.sendToLLM = a),
            a && (void 0 === r || void 0 === t))
          )
            throw Error(
              "Arguments 'observation' & 'llmOutput' are required if 'sendToLlm' is true"
            );
          (0, n.r)(this, "OUTPUT_PARSING_FAILURE");
        }
      }
    },
    99701: function (e, t, r) {
      "use strict";
      r.d(t, {
        Qh: function () {
          return s;
        },
        gP: function () {
          return i.g;
        },
      });
      var a = r(14713),
        n = r(26355),
        i = r(15305);
      class s extends a.g {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "lc_namespace", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: ["langchain_core", "output_parsers"],
            }),
            Object.defineProperty(this, "lc_serializable", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !0,
            });
        }
        static lc_name() {
          return "JsonOutputParser";
        }
        _diff(e, t) {
          return t
            ? e
              ? (0, n.q)(e, t)
              : [{ op: "replace", path: "", value: t }]
            : void 0;
        }
        async parsePartialResult(e) {
          return (0, i.M)(e[0].text);
        }
        async parse(e) {
          return (0, i.M)(e, JSON.parse);
        }
        getFormatInstructions() {
          return "";
        }
      }
    },
    14713: function (e, t, r) {
      "use strict";
      r.d(t, {
        g: function () {
          return l;
        },
        G: function () {
          return o;
        },
      });
      var a = r(61223),
        n = r(2820),
        i = r(72245),
        s = r(66305);
      "undefined" != typeof self &&
      self.location &&
      "null" !== self.location.origin
        ? new URL(
            self.location.origin + self.location.pathname + location.search
          )
        : new URL("https://github.com/cfworker");
      class o extends a.bI {
        async *_transform(e) {
          for await (let t of e)
            "string" == typeof t
              ? yield this.parseResult([{ text: t }])
              : yield this.parseResult([
                  { message: t, text: this._baseMessageToString(t) },
                ]);
        }
        async *transform(e, t) {
          yield* this._transformStreamWithConfig(
            e,
            this._transform.bind(this),
            { ...t, runType: "parser" }
          );
        }
      }
      class l extends o {
        constructor(e) {
          super(e),
            Object.defineProperty(this, "diff", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !1,
            }),
            (this.diff = e?.diff ?? this.diff);
        }
        async *_transform(e) {
          let t, r;
          for await (let a of e) {
            let e;
            if ("string" != typeof a && "string" != typeof a.content)
              throw Error("Cannot handle non-string output.");
            if ((0, n.a2)(a)) {
              if ("string" != typeof a.content)
                throw Error("Cannot handle non-string message output.");
              e = new s.Ls({ message: a, text: a.content });
            } else if ((0, n.QW)(a)) {
              if ("string" != typeof a.content)
                throw Error("Cannot handle non-string message output.");
              e = new s.Ls({ message: (0, i.Oy)(a), text: a.content });
            } else e = new s.b6({ text: a });
            r = void 0 === r ? e : r.concat(e);
            let o = await this.parsePartialResult([r]);
            null != o &&
              !(function e(t, r) {
                let a = typeof t;
                if (a !== typeof r) return !1;
                if (Array.isArray(t)) {
                  if (!Array.isArray(r)) return !1;
                  let a = t.length;
                  if (a !== r.length) return !1;
                  for (let n = 0; n < a; n++) if (!e(t[n], r[n])) return !1;
                  return !0;
                }
                if ("object" === a) {
                  if (!t || !r) return t === r;
                  let a = Object.keys(t),
                    n = Object.keys(r);
                  if (a.length !== n.length) return !1;
                  for (let n of a) if (!e(t[n], r[n])) return !1;
                  return !0;
                }
                return t === r;
              })(o, t) &&
              (this.diff ? yield this._diff(t, o) : yield o, (t = o));
          }
        }
        getFormatInstructions() {
          return "";
        }
      }
    },
    66305: function (e, t, r) {
      "use strict";
      r.d(t, {
        Ls: function () {
          return i;
        },
        WH: function () {
          return a;
        },
        b6: function () {
          return n;
        },
      });
      let a = "__run";
      class n {
        constructor(e) {
          Object.defineProperty(this, "text", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
            Object.defineProperty(this, "generationInfo", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.text = e.text),
            (this.generationInfo = e.generationInfo);
        }
        concat(e) {
          return new n({
            text: this.text + e.text,
            generationInfo: { ...this.generationInfo, ...e.generationInfo },
          });
        }
      }
      class i extends n {
        constructor(e) {
          super(e),
            Object.defineProperty(this, "message", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.message = e.message);
        }
        concat(e) {
          return new i({
            text: this.text + e.text,
            generationInfo: { ...this.generationInfo, ...e.generationInfo },
            message: this.message.concat(e.message),
          });
        }
      }
    },
    50648: function (e, t, r) {
      "use strict";
      r.d(t, {
        eq: function () {
          return N;
        },
        Vh: function () {
          return z;
        },
        pX: function () {
          return L;
        },
        Y8: function () {
          return B;
        },
        dT: function () {
          return F;
        },
        lW: function () {
          return D;
        },
        Uv: function () {
          return C;
        },
        k9: function () {
          return H;
        },
      });
      var a = r(1604),
        n = r(42693),
        i = r(11877),
        s = r(424),
        o = r(63035),
        l = r(89208),
        u = r(98415),
        c = r(16076),
        d = r(82964),
        h = r(27798),
        p = r(99636),
        f = r(84075);
      class m extends f.Z {
        constructor({ config: e, onStart: t, onEnd: r, onError: a }) {
          super({ _awaitHandler: !0 }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "RootListenersTracer",
            }),
            Object.defineProperty(this, "rootId", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "config", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "argOnStart", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "argOnEnd", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "argOnError", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.config = e),
            (this.argOnStart = t),
            (this.argOnEnd = r),
            (this.argOnError = a);
        }
        persistRun(e) {
          return Promise.resolve();
        }
        async onRunCreate(e) {
          !this.rootId &&
            ((this.rootId = e.id),
            this.argOnStart && (await this.argOnStart(e, this.config)));
        }
        async onRunUpdate(e) {
          e.id === this.rootId &&
            (e.error
              ? this.argOnError && (await this.argOnError(e, this.config))
              : this.argOnEnd && (await this.argOnEnd(e, this.config)));
        }
      }
      function g(e) {
        return !!e && e.lc_runnable;
      }
      class y {
        constructor(e) {
          Object.defineProperty(this, "includeNames", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
            Object.defineProperty(this, "includeTypes", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "includeTags", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "excludeNames", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "excludeTypes", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "excludeTags", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.includeNames = e.includeNames),
            (this.includeTypes = e.includeTypes),
            (this.includeTags = e.includeTags),
            (this.excludeNames = e.excludeNames),
            (this.excludeTypes = e.excludeTypes),
            (this.excludeTags = e.excludeTags);
        }
        includeEvent(e, t) {
          let r =
              void 0 === this.includeNames &&
              void 0 === this.includeTypes &&
              void 0 === this.includeTags,
            a = e.tags ?? [];
          return (
            void 0 !== this.includeNames &&
              (r = r || this.includeNames.includes(e.name)),
            void 0 !== this.includeTypes &&
              (r = r || this.includeTypes.includes(t)),
            void 0 !== this.includeTags &&
              (r = r || a.some((e) => this.includeTags?.includes(e))),
            void 0 !== this.excludeNames &&
              (r = r && !this.excludeNames.includes(e.name)),
            void 0 !== this.excludeTypes &&
              (r = r && !this.excludeTypes.includes(t)),
            void 0 !== this.excludeTags &&
              (r = r && a.every((e) => !this.excludeTags?.includes(e))),
            r
          );
        }
      }
      var b = r(57452),
        _ = r(9321),
        v =
          /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i,
        w = function (e) {
          return "string" == typeof e && v.test(e);
        };
      function E(e) {
        return e.replace(/[^a-zA-Z-_0-9]/g, "_");
      }
      let x = ["*", "_", "`"];
      async function O(e, t) {
        let { backgroundColor: r = "white" } = t ?? {},
          a = btoa(e);
        void 0 === r || /^#(?:[0-9a-fA-F]{3}){1,2}$/.test(r) || (r = `!${r}`);
        let n = `https://mermaid.ink/img/${a}?bgColor=${r}`,
          i = await fetch(n);
        if (!i.ok)
          throw Error(`Failed to render the graph using the Mermaid.INK API.
Status code: ${i.status}
Status text: ${i.statusText}`);
        return await i.blob();
      }
      class k {
        constructor(e) {
          Object.defineProperty(this, "nodes", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {},
          }),
            Object.defineProperty(this, "edges", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: [],
            }),
            (this.nodes = e?.nodes ?? this.nodes),
            (this.edges = e?.edges ?? this.edges);
        }
        toJSON() {
          let e = {};
          return (
            Object.values(this.nodes).forEach((t, r) => {
              e[t.id] = w(t.id) ? r : t.id;
            }),
            {
              nodes: Object.values(this.nodes).map((t) => ({
                id: e[t.id],
                ...(g(t.data)
                  ? {
                      type: "runnable",
                      data: { id: t.data.lc_id, name: t.data.getName() },
                    }
                  : {
                      type: "schema",
                      data: { ...(0, _.Y_)(t.data.schema), title: t.data.name },
                    }),
              })),
              edges: this.edges.map((t) => {
                let r = { source: e[t.source], target: e[t.target] };
                return (
                  void 0 !== t.data && (r.data = t.data),
                  void 0 !== t.conditional && (r.conditional = t.conditional),
                  r
                );
              }),
            }
          );
        }
        addNode(e, t, r) {
          if (void 0 !== t && void 0 !== this.nodes[t])
            throw Error(`Node with id ${t} already exists`);
          let a = t ?? (0, i.Z)(),
            n = {
              id: a,
              data: e,
              name: (function (e, t) {
                if (void 0 !== e && !w(e)) return e;
                if (!g(t)) return t.name ?? "UnknownSchema";
                try {
                  let e = t.getName();
                  return (e = e.startsWith("Runnable") ? e.slice(8) : e);
                } catch (e) {
                  return t.getName();
                }
              })(t, e),
              metadata: r,
            };
          return (this.nodes[a] = n), n;
        }
        removeNode(e) {
          delete this.nodes[e.id],
            (this.edges = this.edges.filter(
              (t) => t.source !== e.id && t.target !== e.id
            ));
        }
        addEdge(e, t, r, a) {
          if (void 0 === this.nodes[e.id])
            throw Error(`Source node ${e.id} not in graph`);
          if (void 0 === this.nodes[t.id])
            throw Error(`Target node ${t.id} not in graph`);
          let n = { source: e.id, target: t.id, data: r, conditional: a };
          return this.edges.push(n), n;
        }
        firstNode() {
          return S(this);
        }
        lastNode() {
          return A(this);
        }
        extend(e, t = "") {
          let r = t;
          Object.values(e.nodes)
            .map((e) => e.id)
            .every(w) && (r = "");
          let a = (e) => (r ? `${r}:${e}` : e);
          Object.entries(e.nodes).forEach(([e, t]) => {
            this.nodes[a(e)] = { ...t, id: a(e) };
          });
          let n = e.edges.map((e) => ({
            ...e,
            source: a(e.source),
            target: a(e.target),
          }));
          this.edges = [...this.edges, ...n];
          let i = e.firstNode(),
            s = e.lastNode();
          return [
            i ? { id: a(i.id), data: i.data } : void 0,
            s ? { id: a(s.id), data: s.data } : void 0,
          ];
        }
        trimFirstNode() {
          let e = this.firstNode();
          e && S(this, [e.id]) && this.removeNode(e);
        }
        trimLastNode() {
          let e = this.lastNode();
          e && A(this, [e.id]) && this.removeNode(e);
        }
        reid() {
          let e = Object.fromEntries(
              Object.values(this.nodes).map((e) => [e.id, e.name])
            ),
            t = new Map();
          Object.values(e).forEach((e) => {
            t.set(e, (t.get(e) || 0) + 1);
          });
          let r = (r) => {
            let a = e[r];
            return w(r) && 1 === t.get(a) ? a : r;
          };
          return new k({
            nodes: Object.fromEntries(
              Object.entries(this.nodes).map(([e, t]) => [
                r(e),
                { ...t, id: r(e) },
              ])
            ),
            edges: this.edges.map((e) => ({
              ...e,
              source: r(e.source),
              target: r(e.target),
            })),
          });
        }
        drawMermaid(e) {
          let {
              withStyles: t,
              curveStyle: r,
              nodeColors: a = {
                default: "fill:#f2f0ff,line-height:1.2",
                first: "fill-opacity:0",
                last: "fill:#bfb6fc",
              },
              wrapLabelNWords: n,
            } = e ?? {},
            i = this.reid(),
            s = i.firstNode(),
            o = i.lastNode();
          return (function (e, t, r) {
            let {
                firstNode: a,
                lastNode: n,
                nodeColors: i,
                withStyles: s = !0,
                curveStyle: o = "linear",
                wrapLabelNWords: l = 9,
              } = r ?? {},
              u = s
                ? `%%{init: {'flowchart': {'curve': '${o}'}}}%%
graph TD;
`
                : "graph TD;\n";
            if (s) {
              let t = "default",
                r = { [t]: "{0}({1})" };
              for (let [i, s] of (void 0 !== a && (r[a] = "{0}([{1}]):::first"),
              void 0 !== n && (r[n] = "{0}([{1}]):::last"),
              Object.entries(e))) {
                let e = s.name.split(":").pop() ?? "",
                  a = x.some((t) => e.startsWith(t) && e.endsWith(t))
                    ? `<p>${e}</p>`
                    : e;
                Object.keys(s.metadata ?? {}).length &&
                  (a += `<hr/><small><em>${Object.entries(s.metadata ?? {})
                    .map(([e, t]) => `${e} = ${t}`)
                    .join("\n")}</em></small>`);
                let n = (r[i] ?? r[t]).replace("{0}", E(i)).replace("{1}", a);
                u += `	${n}
`;
              }
            }
            let c = {};
            for (let e of t) {
              let t = e.source.split(":"),
                r = e.target.split(":"),
                a = t.filter((e, t) => e === r[t]).join(":");
              c[a] || (c[a] = []), c[a].push(e);
            }
            let d = new Set();
            function h(e, t) {
              let r = 1 === e.length && e[0].source === e[0].target;
              if (t && !r) {
                let e = t.split(":").pop();
                if (d.has(e))
                  throw Error(
                    `Found duplicate subgraph '${e}' -- this likely means that you're reusing a subgraph node with the same name. Please adjust your graph to have subgraph nodes with unique names.`
                  );
                d.add(e),
                  (u += `	subgraph ${e}
`);
              }
              for (let t of e) {
                let { source: e, target: r, data: a, conditional: n } = t,
                  i = "";
                if (void 0 !== a) {
                  let e = a,
                    t = e.split(" ");
                  t.length > l &&
                    (e = Array.from(
                      { length: Math.ceil(t.length / l) },
                      (e, r) => t.slice(r * l, (r + 1) * l).join(" ")
                    ).join("&nbsp;<br>&nbsp;")),
                    (i = n
                      ? ` -. &nbsp;${e}&nbsp; .-> `
                      : ` -- &nbsp;${e}&nbsp; --> `);
                } else i = n ? " -.-> " : " --> ";
                u += `	${E(e)}${i}${E(r)};
`;
              }
              for (let e in c) e.startsWith(`${t}:`) && e !== t && h(c[e], e);
              t && !r && (u += "	end\n");
            }
            for (let e in (h(c[""] ?? [], ""), c))
              e.includes(":") || "" === e || h(c[e], e);
            return (
              s &&
                (u += (function (e) {
                  let t = "";
                  for (let [r, a] of Object.entries(e))
                    t += `	classDef ${r} ${a};
`;
                  return t;
                })(i ?? {})),
              u
            );
          })(i.nodes, i.edges, {
            firstNode: s?.id,
            lastNode: o?.id,
            withStyles: t,
            curveStyle: r,
            nodeColors: a,
            wrapLabelNWords: n,
          });
        }
        async drawMermaidPng(e) {
          return O(this.drawMermaid(e), {
            backgroundColor: e?.backgroundColor,
          });
        }
      }
      function S(e, t = []) {
        let r = new Set(
            e.edges.filter((e) => !t.includes(e.source)).map((e) => e.target)
          ),
          a = [];
        for (let n of Object.values(e.nodes))
          t.includes(n.id) || r.has(n.id) || a.push(n);
        return 1 === a.length ? a[0] : void 0;
      }
      function A(e, t = []) {
        let r = new Set(
            e.edges.filter((e) => !t.includes(e.target)).map((e) => e.source)
          ),
          a = [];
        for (let n of Object.values(e.nodes))
          t.includes(n.id) || r.has(n.id) || a.push(n);
        return 1 === a.length ? a[0] : void 0;
      }
      function P(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          "function" == typeof e[Symbol.iterator] &&
          "function" == typeof e.next
        );
      }
      let I = (e) =>
        null != e &&
        "object" == typeof e &&
        "next" in e &&
        "function" == typeof e.next;
      function T(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          "function" == typeof e[Symbol.asyncIterator]
        );
      }
      function* R(e, t) {
        for (;;) {
          let { value: r, done: a } = b.AO.runWithConfig(e, t.next.bind(t), !0);
          if (a) break;
          yield r;
        }
      }
      async function* $(e, t) {
        let r = t[Symbol.asyncIterator]();
        for (;;) {
          let { value: a, done: n } = await b.AO.runWithConfig(
            e,
            r.next.bind(t),
            !0
          );
          if (n) break;
          yield a;
        }
      }
      var j = r(39570);
      function C(e, t) {
        return !e ||
          Array.isArray(e) ||
          e instanceof Date ||
          "object" != typeof e
          ? { [t]: e }
          : e;
      }
      class N extends u.i {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "lc_runnable", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !0,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            });
        }
        getName(e) {
          let t =
            this.name ?? this.constructor.lc_name() ?? this.constructor.name;
          return e ? `${t}${e}` : t;
        }
        bind(e) {
          return new L({ bound: this, kwargs: e, config: {} });
        }
        map() {
          return new M({ bound: this });
        }
        withRetry(e) {
          return new U({
            bound: this,
            kwargs: {},
            config: {},
            maxAttemptNumber: e?.stopAfterAttempt,
            ...e,
          });
        }
        withConfig(e) {
          return new L({ bound: this, config: e, kwargs: {} });
        }
        withFallbacks(e) {
          return new q({
            runnable: this,
            fallbacks: Array.isArray(e) ? e : e.fallbacks,
          });
        }
        _getOptionsList(e, t = 0) {
          if (Array.isArray(e) && e.length !== t)
            throw Error(
              `Passed "options" must be an array with the same length as the inputs, but got ${e.length} options for ${t} inputs`
            );
          if (Array.isArray(e)) return e.map(h.LE);
          if (t > 1 && !Array.isArray(e) && e.runId) {
            console.warn(
              "Provided runId will be used only for the first element of the batch."
            );
            let r = Object.fromEntries(
              Object.entries(e).filter(([e]) => "runId" !== e)
            );
            return Array.from({ length: t }, (t, a) =>
              (0, h.LE)(0 === a ? e : r)
            );
          }
          return Array.from({ length: t }, () => (0, h.LE)(e));
        }
        async batch(e, t, r) {
          let a = this._getOptionsList(t ?? {}, e.length),
            n = a[0]?.maxConcurrency ?? r?.maxConcurrency,
            i = new p.L({
              maxConcurrency: n,
              onFailedAttempt: (e) => {
                throw e;
              },
            });
          return Promise.all(
            e.map((e, t) =>
              i.call(async () => {
                try {
                  return await this.invoke(e, a[t]);
                } catch (e) {
                  if (r?.returnExceptions) return e;
                  throw e;
                }
              })
            )
          );
        }
        async *_streamIterator(e, t) {
          yield this.invoke(e, t);
        }
        async stream(e, t) {
          let r = (0, h.LE)(t),
            a = new c.qq({ generator: this._streamIterator(e, r), config: r });
          return await a.setup, c.QJ.fromAsyncGenerator(a);
        }
        _separateRunnableConfigFromCallOptions(e) {
          let t;
          t =
            void 0 === e
              ? (0, h.LE)(e)
              : (0, h.LE)({
                  callbacks: e.callbacks,
                  tags: e.tags,
                  metadata: e.metadata,
                  runName: e.runName,
                  configurable: e.configurable,
                  recursionLimit: e.recursionLimit,
                  maxConcurrency: e.maxConcurrency,
                  runId: e.runId,
                  timeout: e.timeout,
                  signal: e.signal,
                });
          let r = { ...e };
          return (
            delete r.callbacks,
            delete r.tags,
            delete r.metadata,
            delete r.runName,
            delete r.configurable,
            delete r.recursionLimit,
            delete r.maxConcurrency,
            delete r.runId,
            delete r.timeout,
            delete r.signal,
            [t, r]
          );
        }
        async _callWithConfig(e, t, r) {
          let a;
          let n = (0, h.LE)(r),
            i = await (0, h.Le)(n),
            s = await i?.handleChainStart(
              this.toJSON(),
              C(t, "input"),
              n.runId,
              n?.runType,
              void 0,
              void 0,
              n?.runName ?? this.getName()
            );
          delete n.runId;
          try {
            let i = e.call(this, t, n, s);
            a = await (0, d.E)(i, r?.signal);
          } catch (e) {
            throw (await s?.handleChainError(e), e);
          }
          return await s?.handleChainEnd(C(a, "output")), a;
        }
        async _batchWithConfig(e, t, r, a) {
          let n;
          let i = this._getOptionsList(r ?? {}, t.length),
            s = await Promise.all(i.map(h.Le)),
            o = await Promise.all(
              s.map(async (e, r) => {
                let a = await e?.handleChainStart(
                  this.toJSON(),
                  C(t[r], "input"),
                  i[r].runId,
                  i[r].runType,
                  void 0,
                  void 0,
                  i[r].runName ?? this.getName()
                );
                return delete i[r].runId, a;
              })
            );
          try {
            let r = e.call(this, t, i, o, a);
            n = await (0, d.E)(r, i?.[0]?.signal);
          } catch (e) {
            throw (await Promise.all(o.map((t) => t?.handleChainError(e))), e);
          }
          return (
            await Promise.all(o.map((e) => e?.handleChainEnd(C(n, "output")))),
            n
          );
        }
        async *_transformStreamWithConfig(e, t, r) {
          let a, n, i;
          let s = !0,
            u = !0,
            d = (0, h.LE)(r),
            p = await (0, h.Le)(d);
          async function* f() {
            for await (let t of e) {
              if (s) {
                if (void 0 === a) a = t;
                else
                  try {
                    a = (0, c.zo)(a, t);
                  } catch {
                    (a = void 0), (s = !1);
                  }
              }
              yield t;
            }
          }
          try {
            let e = await (0, c.E7)(
              t.bind(this),
              f(),
              async () =>
                p?.handleChainStart(
                  this.toJSON(),
                  { input: "" },
                  d.runId,
                  d.runType,
                  void 0,
                  void 0,
                  d.runName ?? this.getName()
                ),
              r?.signal,
              d
            );
            delete d.runId, (i = e.setup);
            let a = i?.handlers.find(l.C),
              s = e.output;
            void 0 !== a &&
              void 0 !== i &&
              (s = a.tapOutputIterable(i.runId, s));
            let h = i?.handlers.find(o.ky);
            for await (let e of (void 0 !== h &&
              void 0 !== i &&
              (s = h.tapOutputIterable(i.runId, s)),
            s))
              if ((yield e, u)) {
                if (void 0 === n) n = e;
                else
                  try {
                    n = (0, c.zo)(n, e);
                  } catch {
                    (n = void 0), (u = !1);
                  }
              }
          } catch (e) {
            throw (
              (await i?.handleChainError(e, void 0, void 0, void 0, {
                inputs: C(a, "input"),
              }),
              e)
            );
          }
          await i?.handleChainEnd(n ?? {}, void 0, void 0, void 0, {
            inputs: C(a, "input"),
          });
        }
        getGraph(e) {
          let t = new k(),
            r = t.addNode({
              name: `${this.getName()}Input`,
              schema: a.z.any(),
            }),
            n = t.addNode(this),
            i = t.addNode({
              name: `${this.getName()}Output`,
              schema: a.z.any(),
            });
          return t.addEdge(r, n), t.addEdge(n, i), t;
        }
        pipe(e) {
          return new D({ first: this, last: H(e) });
        }
        pick(e) {
          return this.pipe(new W(e));
        }
        assign(e) {
          return this.pipe(new z(new F({ steps: e })));
        }
        async *transform(e, t) {
          let r;
          for await (let t of e) r = void 0 === r ? t : (0, c.zo)(r, t);
          yield* this._streamIterator(r, (0, h.LE)(t));
        }
        async *streamLog(e, t, r) {
          let a = new o.Te({ ...r, autoClose: !1, _schemaFormat: "original" }),
            n = (0, h.LE)(t);
          yield* this._streamLog(e, a, n);
        }
        async *_streamLog(e, t, r) {
          let { callbacks: a } = r;
          if (void 0 === a) r.callbacks = [t];
          else if (Array.isArray(a)) r.callbacks = a.concat([t]);
          else {
            let e = a.copy();
            e.addHandler(t, !0), (r.callbacks = e);
          }
          let n = this.stream(e, r),
            i = (async function () {
              try {
                for await (let e of await n) {
                  let r = new o.hv({
                    ops: [{ op: "add", path: "/streamed_output/-", value: e }],
                  });
                  await t.writer.write(r);
                }
              } finally {
                await t.writer.close();
              }
            })();
          try {
            for await (let e of t) yield e;
          } finally {
            await i;
          }
        }
        streamEvents(e, t, r) {
          let a;
          if ("v1" === t.version) a = this._streamEventsV1(e, t, r);
          else if ("v2" === t.version) a = this._streamEventsV2(e, t, r);
          else
            throw Error(
              'Only versions "v1" and "v2" of the schema are currently supported.'
            );
          return "text/event-stream" === t.encoding
            ? (function (e) {
                let t = new TextEncoder(),
                  r = new ReadableStream({
                    async start(r) {
                      for await (let a of e)
                        r.enqueue(
                          t.encode(`event: data
data: ${JSON.stringify(a)}

`)
                        );
                      r.enqueue(t.encode("event: end\n\n")), r.close();
                    },
                  });
                return c.QJ.fromReadableStream(r);
              })(a)
            : c.QJ.fromAsyncGenerator(a);
        }
        async *_streamEventsV2(e, t, r) {
          let a;
          let n = new l.d({ ...r, autoClose: !1 }),
            s = (0, h.LE)(t),
            o = s.runId ?? (0, i.Z)();
          s.runId = o;
          let u = s.callbacks;
          if (void 0 === u) s.callbacks = [n];
          else if (Array.isArray(u)) s.callbacks = u.concat(n);
          else {
            let e = u.copy();
            e.addHandler(n, !0), (s.callbacks = e);
          }
          let c = this,
            d = (async function () {
              try {
                let t = await c.stream(e, s);
                for await (let e of n.tapOutputIterable(o, t));
              } finally {
                await n.finish();
              }
            })(),
            p = !1;
          try {
            for await (let t of n) {
              if (!p) {
                (t.data.input = e), (p = !0), (a = t.run_id), yield t;
                continue;
              }
              t.run_id === a &&
                t.event.endsWith("_end") &&
                t.data?.input &&
                delete t.data.input,
                yield t;
            }
          } finally {
            await d;
          }
        }
        async *_streamEventsV1(e, t, r) {
          let a;
          let n = !1,
            i = (0, h.LE)(t),
            s = i.tags ?? [],
            l = i.metadata ?? {},
            u = i.runName ?? this.getName(),
            c = new o.Te({
              ...r,
              autoClose: !1,
              _schemaFormat: "streaming_events",
            }),
            d = new y({ ...r });
          for await (let t of this._streamLog(e, c, i)) {
            if (
              void 0 === (a = a ? a.concat(t) : o.y6.fromRunLogPatch(t)).state
            )
              throw Error(
                'Internal error: "streamEvents" state is missing. Please open a bug report.'
              );
            if (!n) {
              n = !0;
              let t = { ...a.state },
                r = {
                  run_id: t.id,
                  event: `on_${t.type}_start`,
                  name: u,
                  tags: s,
                  metadata: l,
                  data: { input: e },
                };
              d.includeEvent(r, t.type) && (yield r);
            }
            for (let e of [
              ...new Set(
                t.ops
                  .filter((e) => e.path.startsWith("/logs/"))
                  .map((e) => e.path.split("/")[2])
              ),
            ]) {
              let t;
              let r = {},
                n = a.state.logs[e];
              if (
                "start" ==
                (t =
                  void 0 === n.end_time
                    ? n.streamed_output.length > 0
                      ? "stream"
                      : "start"
                    : "end")
              )
                void 0 !== n.inputs && (r.input = n.inputs);
              else if ("end" === t)
                void 0 !== n.inputs && (r.input = n.inputs),
                  (r.output = n.final_output);
              else if ("stream" === t) {
                let e = n.streamed_output.length;
                if (1 !== e)
                  throw Error(
                    `Expected exactly one chunk of streamed output, got ${e} instead. Encountered in: "${n.name}"`
                  );
                (r = { chunk: n.streamed_output[0] }), (n.streamed_output = []);
              }
              yield {
                event: `on_${n.type}_${t}`,
                name: n.name,
                run_id: n.id,
                tags: n.tags,
                metadata: n.metadata,
                data: r,
              };
            }
            let { state: r } = a;
            if (r.streamed_output.length > 0) {
              let e = r.streamed_output.length;
              if (1 !== e)
                throw Error(
                  `Expected exactly one chunk of streamed output, got ${e} instead. Encountered in: "${r.name}"`
                );
              let t = { chunk: r.streamed_output[0] };
              r.streamed_output = [];
              let a = {
                event: `on_${r.type}_stream`,
                run_id: r.id,
                tags: s,
                metadata: l,
                name: u,
                data: t,
              };
              d.includeEvent(a, r.type) && (yield a);
            }
          }
          let p = a?.state;
          if (void 0 !== p) {
            let e = {
              event: `on_${p.type}_end`,
              name: u,
              run_id: p.id,
              tags: s,
              metadata: l,
              data: { output: p.final_output },
            };
            d.includeEvent(e, p.type) && (yield e);
          }
        }
        static isRunnable(e) {
          return g(e);
        }
        withListeners({ onStart: e, onEnd: t, onError: r }) {
          return new L({
            bound: this,
            config: {},
            configFactories: [
              (a) => ({
                callbacks: [
                  new m({ config: a, onStart: e, onEnd: t, onError: r }),
                ],
              }),
            ],
          });
        }
        asTool(e) {
          return (function (e, t) {
            let r = t.name ?? e.getName(),
              n = t.description ?? t.schema?.description;
            return new J(
              t.schema.constructor === a.z.ZodString
                ? {
                    name: r,
                    description: n,
                    schema: a.z
                      .object({ input: a.z.string() })
                      .transform((e) => e.input),
                    bound: e,
                  }
                : { name: r, description: n, schema: t.schema, bound: e }
            );
          })(this, e);
        }
      }
      class L extends N {
        static lc_name() {
          return "RunnableBinding";
        }
        constructor(e) {
          super(e),
            Object.defineProperty(this, "lc_namespace", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: ["langchain_core", "runnables"],
            }),
            Object.defineProperty(this, "lc_serializable", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !0,
            }),
            Object.defineProperty(this, "bound", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "config", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "kwargs", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "configFactories", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.bound = e.bound),
            (this.kwargs = e.kwargs),
            (this.config = e.config),
            (this.configFactories = e.configFactories);
        }
        getName(e) {
          return this.bound.getName(e);
        }
        async _mergeConfig(...e) {
          let t = (0, h.t8)(this.config, ...e);
          return (0, h.t8)(
            t,
            ...(this.configFactories
              ? await Promise.all(
                  this.configFactories.map(async (e) => await e(t))
                )
              : [])
          );
        }
        bind(e) {
          return new this.constructor({
            bound: this.bound,
            kwargs: { ...this.kwargs, ...e },
            config: this.config,
          });
        }
        withConfig(e) {
          return new this.constructor({
            bound: this.bound,
            kwargs: this.kwargs,
            config: { ...this.config, ...e },
          });
        }
        withRetry(e) {
          return new this.constructor({
            bound: this.bound.withRetry(e),
            kwargs: this.kwargs,
            config: this.config,
          });
        }
        async invoke(e, t) {
          return this.bound.invoke(
            e,
            await this._mergeConfig((0, h.LE)(t), this.kwargs)
          );
        }
        async batch(e, t, r) {
          let a = Array.isArray(t)
            ? await Promise.all(
                t.map(async (e) => this._mergeConfig((0, h.LE)(e), this.kwargs))
              )
            : await this._mergeConfig((0, h.LE)(t), this.kwargs);
          return this.bound.batch(e, a, r);
        }
        async *_streamIterator(e, t) {
          yield* this.bound._streamIterator(
            e,
            await this._mergeConfig((0, h.LE)(t), this.kwargs)
          );
        }
        async stream(e, t) {
          return this.bound.stream(
            e,
            await this._mergeConfig((0, h.LE)(t), this.kwargs)
          );
        }
        async *transform(e, t) {
          yield* this.bound.transform(
            e,
            await this._mergeConfig((0, h.LE)(t), this.kwargs)
          );
        }
        streamEvents(e, t, r) {
          let a = this,
            n = async function* () {
              yield* a.bound.streamEvents(
                e,
                {
                  ...(await a._mergeConfig((0, h.LE)(t), a.kwargs)),
                  version: t.version,
                },
                r
              );
            };
          return c.QJ.fromAsyncGenerator(n());
        }
        static isRunnableBinding(e) {
          return e.bound && N.isRunnable(e.bound);
        }
        withListeners({ onStart: e, onEnd: t, onError: r }) {
          return new L({
            bound: this.bound,
            kwargs: this.kwargs,
            config: this.config,
            configFactories: [
              (a) => ({
                callbacks: [
                  new m({ config: a, onStart: e, onEnd: t, onError: r }),
                ],
              }),
            ],
          });
        }
      }
      class M extends N {
        static lc_name() {
          return "RunnableEach";
        }
        constructor(e) {
          super(e),
            Object.defineProperty(this, "lc_serializable", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !0,
            }),
            Object.defineProperty(this, "lc_namespace", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: ["langchain_core", "runnables"],
            }),
            Object.defineProperty(this, "bound", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.bound = e.bound);
        }
        bind(e) {
          return new M({ bound: this.bound.bind(e) });
        }
        async invoke(e, t) {
          return this._callWithConfig(this._invoke.bind(this), e, t);
        }
        async _invoke(e, t, r) {
          return this.bound.batch(e, (0, h.q)(t, { callbacks: r?.getChild() }));
        }
        withListeners({ onStart: e, onEnd: t, onError: r }) {
          return new M({
            bound: this.bound.withListeners({
              onStart: e,
              onEnd: t,
              onError: r,
            }),
          });
        }
      }
      class U extends L {
        static lc_name() {
          return "RunnableRetry";
        }
        constructor(e) {
          super(e),
            Object.defineProperty(this, "lc_namespace", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: ["langchain_core", "runnables"],
            }),
            Object.defineProperty(this, "maxAttemptNumber", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 3,
            }),
            Object.defineProperty(this, "onFailedAttempt", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: () => {},
            }),
            (this.maxAttemptNumber =
              e.maxAttemptNumber ?? this.maxAttemptNumber),
            (this.onFailedAttempt = e.onFailedAttempt ?? this.onFailedAttempt);
        }
        _patchConfigForRetry(e, t, r) {
          let a = e > 1 ? `retry:attempt:${e}` : void 0;
          return (0, h.q)(t, { callbacks: r?.getChild(a) });
        }
        async _invoke(e, t, r) {
          return n((a) => super.invoke(e, this._patchConfigForRetry(a, t, r)), {
            onFailedAttempt: (t) => this.onFailedAttempt(t, e),
            retries: Math.max(this.maxAttemptNumber - 1, 0),
            randomize: !0,
          });
        }
        async invoke(e, t) {
          return this._callWithConfig(this._invoke.bind(this), e, t);
        }
        async _batch(e, t, r, a) {
          let i = {};
          try {
            await n(
              async (n) => {
                let s;
                let o = e
                    .map((e, t) => t)
                    .filter(
                      (e) =>
                        void 0 === i[e.toString()] ||
                        i[e.toString()] instanceof Error
                    ),
                  l = o.map((t) => e[t]),
                  u = o.map((e) =>
                    this._patchConfigForRetry(n, t?.[e], r?.[e])
                  ),
                  c = await super.batch(l, u, { ...a, returnExceptions: !0 });
                for (let e = 0; e < c.length; e += 1) {
                  let t = c[e],
                    r = o[e];
                  t instanceof Error && void 0 === s && ((s = t).input = l[e]),
                    (i[r.toString()] = t);
                }
                if (s) throw s;
                return c;
              },
              {
                onFailedAttempt: (e) => this.onFailedAttempt(e, e.input),
                retries: Math.max(this.maxAttemptNumber - 1, 0),
                randomize: !0,
              }
            );
          } catch (e) {
            if (a?.returnExceptions !== !0) throw e;
          }
          return Object.keys(i)
            .sort((e, t) => parseInt(e, 10) - parseInt(t, 10))
            .map((e) => i[parseInt(e, 10)]);
        }
        async batch(e, t, r) {
          return this._batchWithConfig(this._batch.bind(this), e, t, r);
        }
      }
      class D extends N {
        static lc_name() {
          return "RunnableSequence";
        }
        constructor(e) {
          super(e),
            Object.defineProperty(this, "first", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "middle", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: [],
            }),
            Object.defineProperty(this, "last", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "omitSequenceTags", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !1,
            }),
            Object.defineProperty(this, "lc_serializable", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !0,
            }),
            Object.defineProperty(this, "lc_namespace", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: ["langchain_core", "runnables"],
            }),
            (this.first = e.first),
            (this.middle = e.middle ?? this.middle),
            (this.last = e.last),
            (this.name = e.name),
            (this.omitSequenceTags =
              e.omitSequenceTags ?? this.omitSequenceTags);
        }
        get steps() {
          return [this.first, ...this.middle, this.last];
        }
        async invoke(e, t) {
          let r;
          let a = (0, h.LE)(t),
            n = await (0, h.Le)(a),
            i = await n?.handleChainStart(
              this.toJSON(),
              C(e, "input"),
              a.runId,
              void 0,
              void 0,
              void 0,
              a?.runName
            );
          delete a.runId;
          let s = e;
          try {
            let e = [this.first, ...this.middle];
            for (let r = 0; r < e.length; r += 1) {
              let n = e[r].invoke(
                s,
                (0, h.q)(a, {
                  callbacks: i?.getChild(
                    this.omitSequenceTags ? void 0 : `seq:step:${r + 1}`
                  ),
                })
              );
              s = await (0, d.E)(n, t?.signal);
            }
            if (t?.signal?.aborted) throw Error("Aborted");
            r = await this.last.invoke(
              s,
              (0, h.q)(a, {
                callbacks: i?.getChild(
                  this.omitSequenceTags
                    ? void 0
                    : `seq:step:${this.steps.length}`
                ),
              })
            );
          } catch (e) {
            throw (await i?.handleChainError(e), e);
          }
          return await i?.handleChainEnd(C(r, "output")), r;
        }
        async batch(e, t, r) {
          let a = this._getOptionsList(t ?? {}, e.length),
            n = await Promise.all(a.map(h.Le)),
            i = await Promise.all(
              n.map(async (t, r) => {
                let n = await t?.handleChainStart(
                  this.toJSON(),
                  C(e[r], "input"),
                  a[r].runId,
                  void 0,
                  void 0,
                  void 0,
                  a[r].runName
                );
                return delete a[r].runId, n;
              })
            ),
            s = e;
          try {
            for (let e = 0; e < this.steps.length; e += 1) {
              let t = this.steps[e].batch(
                s,
                i.map((t, r) => {
                  let n = t?.getChild(
                    this.omitSequenceTags ? void 0 : `seq:step:${e + 1}`
                  );
                  return (0, h.q)(a[r], { callbacks: n });
                }),
                r
              );
              s = await (0, d.E)(t, a[0]?.signal);
            }
          } catch (e) {
            throw (await Promise.all(i.map((t) => t?.handleChainError(e))), e);
          }
          return (
            await Promise.all(i.map((e) => e?.handleChainEnd(C(s, "output")))),
            s
          );
        }
        async *_streamIterator(e, t) {
          let r;
          let a = await (0, h.Le)(t),
            { runId: n, ...i } = t ?? {},
            s = await a?.handleChainStart(
              this.toJSON(),
              C(e, "input"),
              n,
              void 0,
              void 0,
              void 0,
              i?.runName
            ),
            o = [this.first, ...this.middle, this.last],
            l = !0;
          async function* u() {
            yield e;
          }
          try {
            let e = o[0].transform(
              u(),
              (0, h.q)(i, {
                callbacks: s?.getChild(
                  this.omitSequenceTags ? void 0 : "seq:step:1"
                ),
              })
            );
            for (let t = 1; t < o.length; t += 1) {
              let r = o[t];
              e = await r.transform(
                e,
                (0, h.q)(i, {
                  callbacks: s?.getChild(
                    this.omitSequenceTags ? void 0 : `seq:step:${t + 1}`
                  ),
                })
              );
            }
            for await (let a of e)
              if ((t?.signal?.throwIfAborted(), yield a, l)) {
                if (void 0 === r) r = a;
                else
                  try {
                    r = (0, c.zo)(r, a);
                  } catch (e) {
                    (r = void 0), (l = !1);
                  }
              }
          } catch (e) {
            throw (await s?.handleChainError(e), e);
          }
          await s?.handleChainEnd(C(r, "output"));
        }
        getGraph(e) {
          let t = new k(),
            r = null;
          return (
            this.steps.forEach((a, n) => {
              let i = a.getGraph(e);
              0 !== n && i.trimFirstNode(),
                n !== this.steps.length - 1 && i.trimLastNode(),
                t.extend(i);
              let s = i.firstNode();
              if (!s) throw Error(`Runnable ${a} has no first node`);
              r && t.addEdge(r, s), (r = i.lastNode());
            }),
            t
          );
        }
        pipe(e) {
          return new D(
            D.isRunnableSequence(e)
              ? {
                  first: this.first,
                  middle: this.middle.concat([this.last, e.first, ...e.middle]),
                  last: e.last,
                  name: this.name ?? e.name,
                }
              : {
                  first: this.first,
                  middle: [...this.middle, this.last],
                  last: H(e),
                  name: this.name,
                }
          );
        }
        static isRunnableSequence(e) {
          return Array.isArray(e.middle) && N.isRunnable(e);
        }
        static from([e, ...t], r) {
          let a = {};
          return (
            "string" == typeof r ? (a.name = r) : void 0 !== r && (a = r),
            new D({
              ...a,
              first: H(e),
              middle: t.slice(0, -1).map(H),
              last: H(t[t.length - 1]),
            })
          );
        }
      }
      class F extends N {
        static lc_name() {
          return "RunnableMap";
        }
        getStepsKeys() {
          return Object.keys(this.steps);
        }
        constructor(e) {
          for (let [t, r] of (super(e),
          Object.defineProperty(this, "lc_namespace", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ["langchain_core", "runnables"],
          }),
          Object.defineProperty(this, "lc_serializable", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !0,
          }),
          Object.defineProperty(this, "steps", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.steps = {}),
          Object.entries(e.steps)))
            this.steps[t] = H(r);
        }
        static from(e) {
          return new F({ steps: e });
        }
        async invoke(e, t) {
          let r = (0, h.LE)(t),
            a = await (0, h.Le)(r),
            n = await a?.handleChainStart(
              this.toJSON(),
              { input: e },
              r.runId,
              void 0,
              void 0,
              void 0,
              r?.runName
            );
          delete r.runId;
          let i = {};
          try {
            let a = Object.entries(this.steps).map(async ([t, a]) => {
              i[t] = await a.invoke(
                e,
                (0, h.q)(r, { callbacks: n?.getChild(`map:key:${t}`) })
              );
            });
            await (0, d.E)(Promise.all(a), t?.signal);
          } catch (e) {
            throw (await n?.handleChainError(e), e);
          }
          return await n?.handleChainEnd(i), i;
        }
        async *_transform(e, t, r) {
          let a = { ...this.steps },
            n = (0, c.y2)(e, Object.keys(a).length),
            i = new Map(
              Object.entries(a).map(([e, a], i) => {
                let s = a.transform(
                  n[i],
                  (0, h.q)(r, { callbacks: t?.getChild(`map:key:${e}`) })
                );
                return [
                  e,
                  s.next().then((t) => ({ key: e, gen: s, result: t })),
                ];
              })
            );
          for (; i.size; ) {
            let e = Promise.race(i.values()),
              { key: t, result: a, gen: n } = await (0, d.E)(e, r?.signal);
            i.delete(t),
              a.done ||
                (yield { [t]: a.value },
                i.set(
                  t,
                  n.next().then((e) => ({ key: t, gen: n, result: e }))
                ));
          }
        }
        transform(e, t) {
          return this._transformStreamWithConfig(
            e,
            this._transform.bind(this),
            t
          );
        }
        async stream(e, t) {
          async function* r() {
            yield e;
          }
          let a = (0, h.LE)(t),
            n = new c.qq({ generator: this.transform(r(), a), config: a });
          return await n.setup, c.QJ.fromAsyncGenerator(n);
        }
      }
      class Z extends N {
        constructor(e) {
          if (
            (super(e),
            Object.defineProperty(this, "lc_serializable", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !1,
            }),
            Object.defineProperty(this, "lc_namespace", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: ["langchain_core", "runnables"],
            }),
            Object.defineProperty(this, "func", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            !(0, s.xQ)(e.func))
          )
            throw Error(
              "RunnableTraceable requires a function that is wrapped in traceable higher-order function"
            );
          this.func = e.func;
        }
        async invoke(e, t) {
          let [r] = this._getOptionsList(t ?? {}, 1),
            a = await (0, h.Le)(r),
            n = this.func((0, h.q)(r, { callbacks: a }), e);
          return (0, d.E)(n, r?.signal);
        }
        async *_streamIterator(e, t) {
          let [r] = this._getOptionsList(t ?? {}, 1),
            a = await this.invoke(e, t);
          if (T(a)) {
            for await (let e of a) r?.signal?.throwIfAborted(), yield e;
            return;
          }
          if (I(a)) {
            for (;;) {
              r?.signal?.throwIfAborted();
              let e = a.next();
              if (e.done) break;
              yield e.value;
            }
            return;
          }
          yield a;
        }
        static from(e) {
          return new Z({ func: e });
        }
      }
      class B extends N {
        static lc_name() {
          return "RunnableLambda";
        }
        constructor(e) {
          if ((0, s.xQ)(e.func)) return Z.from(e.func);
          super(e),
            Object.defineProperty(this, "lc_namespace", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: ["langchain_core", "runnables"],
            }),
            Object.defineProperty(this, "func", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (function (e) {
              if ((0, s.xQ)(e))
                throw Error(
                  "RunnableLambda requires a function that is not wrapped in traceable higher-order function. This shouldn't happen."
                );
            })(e.func),
            (this.func = e.func);
        }
        static from(e) {
          return new B({ func: e });
        }
        async _invoke(e, t, r) {
          return new Promise((a, n) => {
            let i = (0, h.q)(t, {
              callbacks: r?.getChild(),
              recursionLimit: (t?.recursionLimit ?? h.ov) - 1,
            });
            b.AO.runWithConfig(i, async () => {
              try {
                let r = await this.func(e, { ...i });
                if (r && N.isRunnable(r)) {
                  if (t?.recursionLimit === 0)
                    throw Error("Recursion limit reached.");
                  r = await r.invoke(e, {
                    ...i,
                    recursionLimit: (i.recursionLimit ?? h.ov) - 1,
                  });
                } else if (T(r)) {
                  let e;
                  for await (let a of $(i, r))
                    if ((t?.signal?.throwIfAborted(), void 0 === e)) e = a;
                    else
                      try {
                        e = (0, c.zo)(e, a);
                      } catch (t) {
                        e = a;
                      }
                  r = e;
                } else if (P(r)) {
                  let e;
                  for (let a of R(i, r))
                    if ((t?.signal?.throwIfAborted(), void 0 === e)) e = a;
                    else
                      try {
                        e = (0, c.zo)(e, a);
                      } catch (t) {
                        e = a;
                      }
                  r = e;
                }
                a(r);
              } catch (e) {
                n(e);
              }
            });
          });
        }
        async invoke(e, t) {
          return this._callWithConfig(this._invoke.bind(this), e, t);
        }
        async *_transform(e, t, r) {
          let a;
          for await (let t of e)
            if (void 0 === a) a = t;
            else
              try {
                a = (0, c.zo)(a, t);
              } catch (e) {
                a = t;
              }
          let n = (0, h.q)(r, {
              callbacks: t?.getChild(),
              recursionLimit: (r?.recursionLimit ?? h.ov) - 1,
            }),
            i = await new Promise((e, t) => {
              b.AO.runWithConfig(n, async () => {
                try {
                  let t = await this.func(a, { ...n, config: n });
                  e(t);
                } catch (e) {
                  t(e);
                }
              });
            });
          if (i && N.isRunnable(i)) {
            if (r?.recursionLimit === 0)
              throw Error("Recursion limit reached.");
            for await (let e of await i.stream(a, n)) yield e;
          } else if (T(i))
            for await (let e of $(n, i)) r?.signal?.throwIfAborted(), yield e;
          else if (P(i))
            for (let e of R(n, i)) r?.signal?.throwIfAborted(), yield e;
          else yield i;
        }
        transform(e, t) {
          return this._transformStreamWithConfig(
            e,
            this._transform.bind(this),
            t
          );
        }
        async stream(e, t) {
          async function* r() {
            yield e;
          }
          let a = (0, h.LE)(t),
            n = new c.qq({ generator: this.transform(r(), a), config: a });
          return await n.setup, c.QJ.fromAsyncGenerator(n);
        }
      }
      class q extends N {
        static lc_name() {
          return "RunnableWithFallbacks";
        }
        constructor(e) {
          super(e),
            Object.defineProperty(this, "lc_namespace", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: ["langchain_core", "runnables"],
            }),
            Object.defineProperty(this, "lc_serializable", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !0,
            }),
            Object.defineProperty(this, "runnable", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "fallbacks", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.runnable = e.runnable),
            (this.fallbacks = e.fallbacks);
        }
        *runnables() {
          for (let e of (yield this.runnable, this.fallbacks)) yield e;
        }
        async invoke(e, t) {
          let r;
          let a = (0, h.LE)(t),
            n = await (0, h.Le)(t),
            { runId: i, ...s } = a,
            o = await n?.handleChainStart(
              this.toJSON(),
              C(e, "input"),
              i,
              void 0,
              void 0,
              void 0,
              s?.runName
            );
          for (let t of this.runnables()) {
            a?.signal?.throwIfAborted();
            try {
              let r = await t.invoke(
                e,
                (0, h.q)(s, { callbacks: o?.getChild() })
              );
              return await o?.handleChainEnd(C(r, "output")), r;
            } catch (e) {
              void 0 === r && (r = e);
            }
          }
          if (void 0 === r) throw Error("No error stored at end of fallback.");
          throw (await o?.handleChainError(r), r);
        }
        async *_streamIterator(e, t) {
          let r, a, n;
          let i = (0, h.LE)(t),
            s = await (0, h.Le)(t),
            { runId: o, ...l } = i,
            u = await s?.handleChainStart(
              this.toJSON(),
              C(e, "input"),
              o,
              void 0,
              void 0,
              void 0,
              l?.runName
            );
          for (let t of this.runnables()) {
            i?.signal?.throwIfAborted();
            let n = (0, h.q)(l, { callbacks: u?.getChild() });
            try {
              a = await t.stream(e, n);
              break;
            } catch (e) {
              void 0 === r && (r = e);
            }
          }
          if (void 0 === a) {
            let e = r ?? Error("No error stored at end of fallback.");
            throw (await u?.handleChainError(e), e);
          }
          try {
            for await (let e of a) {
              yield e;
              try {
                n = void 0 === n ? n : (0, c.zo)(n, e);
              } catch (e) {
                n = void 0;
              }
            }
          } catch (e) {
            throw (await u?.handleChainError(e), e);
          }
          await u?.handleChainEnd(C(n, "output"));
        }
        async batch(e, t, r) {
          let a;
          if (r?.returnExceptions) throw Error("Not implemented.");
          let n = this._getOptionsList(t ?? {}, e.length),
            i = await Promise.all(n.map((e) => (0, h.Le)(e))),
            s = await Promise.all(
              i.map(async (t, r) => {
                let a = await t?.handleChainStart(
                  this.toJSON(),
                  C(e[r], "input"),
                  n[r].runId,
                  void 0,
                  void 0,
                  void 0,
                  n[r].runName
                );
                return delete n[r].runId, a;
              })
            );
          for (let t of this.runnables()) {
            n[0].signal?.throwIfAborted();
            try {
              let a = await t.batch(
                e,
                s.map((e, t) => (0, h.q)(n[t], { callbacks: e?.getChild() })),
                r
              );
              return (
                await Promise.all(
                  s.map((e, t) => e?.handleChainEnd(C(a[t], "output")))
                ),
                a
              );
            } catch (e) {
              void 0 === a && (a = e);
            }
          }
          if (!a) throw Error("No error stored at end of fallbacks.");
          throw (await Promise.all(s.map((e) => e?.handleChainError(a))), a);
        }
      }
      function H(e) {
        if ("function" == typeof e) return new B({ func: e });
        if (N.isRunnable(e)) return e;
        if (Array.isArray(e) || "object" != typeof e)
          throw Error(`Expected a Runnable, function or object.
Instead got an unsupported type.`);
        {
          let t = {};
          for (let [r, a] of Object.entries(e)) t[r] = H(a);
          return new F({ steps: t });
        }
      }
      class z extends N {
        static lc_name() {
          return "RunnableAssign";
        }
        constructor(e) {
          e instanceof F && (e = { mapper: e }),
            super(e),
            Object.defineProperty(this, "lc_namespace", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: ["langchain_core", "runnables"],
            }),
            Object.defineProperty(this, "lc_serializable", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !0,
            }),
            Object.defineProperty(this, "mapper", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.mapper = e.mapper);
        }
        async invoke(e, t) {
          let r = await this.mapper.invoke(e, t);
          return { ...e, ...r };
        }
        async *_transform(e, t, r) {
          let a = this.mapper.getStepsKeys(),
            [n, i] = (0, c.y2)(e),
            s = this.mapper.transform(
              i,
              (0, h.q)(r, { callbacks: t?.getChild() })
            ),
            o = s.next();
          for await (let e of n) {
            if ("object" != typeof e || Array.isArray(e))
              throw Error(
                `RunnableAssign can only be used with objects as input, got ${typeof e}`
              );
            let t = Object.fromEntries(
              Object.entries(e).filter(([e]) => !a.includes(e))
            );
            Object.keys(t).length > 0 && (yield t);
          }
          for await (let e of (yield (await o).value, s)) yield e;
        }
        transform(e, t) {
          return this._transformStreamWithConfig(
            e,
            this._transform.bind(this),
            t
          );
        }
        async stream(e, t) {
          async function* r() {
            yield e;
          }
          let a = (0, h.LE)(t),
            n = new c.qq({ generator: this.transform(r(), a), config: a });
          return await n.setup, c.QJ.fromAsyncGenerator(n);
        }
      }
      class W extends N {
        static lc_name() {
          return "RunnablePick";
        }
        constructor(e) {
          ("string" == typeof e || Array.isArray(e)) && (e = { keys: e }),
            super(e),
            Object.defineProperty(this, "lc_namespace", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: ["langchain_core", "runnables"],
            }),
            Object.defineProperty(this, "lc_serializable", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !0,
            }),
            Object.defineProperty(this, "keys", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.keys = e.keys);
        }
        async _pick(e) {
          if ("string" == typeof this.keys) return e[this.keys];
          {
            let t = this.keys
              .map((t) => [t, e[t]])
              .filter((e) => void 0 !== e[1]);
            return 0 === t.length ? void 0 : Object.fromEntries(t);
          }
        }
        async invoke(e, t) {
          return this._callWithConfig(this._pick.bind(this), e, t);
        }
        async *_transform(e) {
          for await (let t of e) {
            let e = await this._pick(t);
            void 0 !== e && (yield e);
          }
        }
        transform(e, t) {
          return this._transformStreamWithConfig(
            e,
            this._transform.bind(this),
            t
          );
        }
        async stream(e, t) {
          async function* r() {
            yield e;
          }
          let a = (0, h.LE)(t),
            n = new c.qq({ generator: this.transform(r(), a), config: a });
          return await n.setup, c.QJ.fromAsyncGenerator(n);
        }
      }
      class J extends L {
        constructor(e) {
          super({
            bound: D.from([
              B.from(async (e) => {
                let t;
                if ((0, j.u)(e))
                  try {
                    t = await this.schema.parseAsync(e.args);
                  } catch (t) {
                    throw new j.Y(
                      "Received tool input did not match expected schema",
                      JSON.stringify(e.args)
                    );
                  }
                else t = e;
                return t;
              }).withConfig({ runName: `${e.name}:parse_input` }),
              e.bound,
            ]).withConfig({ runName: e.name }),
            config: e.config ?? {},
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "description", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "schema", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.name = e.name),
            (this.description = e.description),
            (this.schema = e.schema);
        }
        static lc_name() {
          return "RunnableToolLike";
        }
      }
    },
    27798: function (e, t, r) {
      "use strict";
      r.d(t, {
        LE: function () {
          return u;
        },
        Le: function () {
          return s;
        },
        ov: function () {
          return i;
        },
        q: function () {
          return c;
        },
        t8: function () {
          return o;
        },
      });
      var a = r(91490),
        n = r(57452);
      let i = 25;
      async function s(e) {
        return a.Ye._configureSync(
          e?.callbacks,
          void 0,
          e?.tags,
          void 0,
          e?.metadata
        );
      }
      function o(...e) {
        let t = {};
        for (let r of e.filter((e) => !!e))
          for (let e of Object.keys(r))
            if ("metadata" === e) t[e] = { ...t[e], ...r[e] };
            else if ("tags" === e) {
              let a = t[e] ?? [];
              t[e] = [...new Set(a.concat(r[e] ?? []))];
            } else if ("configurable" === e) t[e] = { ...t[e], ...r[e] };
            else if ("timeout" === e)
              void 0 === t.timeout
                ? (t.timeout = r.timeout)
                : void 0 !== r.timeout &&
                  (t.timeout = Math.min(t.timeout, r.timeout));
            else if ("signal" === e)
              void 0 === t.signal
                ? (t.signal = r.signal)
                : void 0 !== r.signal &&
                  ("any" in AbortSignal
                    ? (t.signal = AbortSignal.any([t.signal, r.signal]))
                    : (t.signal = r.signal));
            else if ("callbacks" === e) {
              let e = t.callbacks,
                n = r.callbacks;
              if (Array.isArray(n)) {
                if (e) {
                  if (Array.isArray(e)) t.callbacks = e.concat(n);
                  else {
                    let r = e.copy();
                    for (let e of n) r.addHandler((0, a.xz)(e), !0);
                    t.callbacks = r;
                  }
                } else t.callbacks = n;
              } else if (n) {
                if (e) {
                  if (Array.isArray(e)) {
                    let r = n.copy();
                    for (let t of e) r.addHandler((0, a.xz)(t), !0);
                    t.callbacks = r;
                  } else
                    t.callbacks = new a.Ye(n._parentRunId, {
                      handlers: e.handlers.concat(n.handlers),
                      inheritableHandlers: e.inheritableHandlers.concat(
                        n.inheritableHandlers
                      ),
                      tags: Array.from(new Set(e.tags.concat(n.tags))),
                      inheritableTags: Array.from(
                        new Set(e.inheritableTags.concat(n.inheritableTags))
                      ),
                      metadata: { ...e.metadata, ...n.metadata },
                    });
                } else t.callbacks = n;
              }
            } else t[e] = r[e] ?? t[e];
        return t;
      }
      let l = new Set(["string", "number", "boolean"]);
      function u(e) {
        let t = n.AO.getRunnableConfig(),
          r = { tags: [], metadata: {}, recursionLimit: 25, runId: void 0 };
        if (t) {
          let { runId: e, runName: a, ...n } = t;
          r = Object.entries(n).reduce(
            (e, [t, r]) => (void 0 !== r && (e[t] = r), e),
            r
          );
        }
        if (
          (e &&
            (r = Object.entries(e).reduce(
              (e, [t, r]) => (void 0 !== r && (e[t] = r), e),
              r
            )),
          r?.configurable)
        )
          for (let e of Object.keys(r.configurable))
            l.has(typeof r.configurable[e]) &&
              !r.metadata?.[e] &&
              (r.metadata || (r.metadata = {}),
              (r.metadata[e] = r.configurable[e]));
        if (void 0 !== r.timeout) {
          if (r.timeout <= 0) throw Error("Timeout must be a positive number");
          let e = AbortSignal.timeout(r.timeout);
          void 0 !== r.signal
            ? "any" in AbortSignal &&
              (r.signal = AbortSignal.any([r.signal, e]))
            : (r.signal = e),
            delete r.timeout;
        }
        return r;
      }
      function c(
        e = {},
        {
          callbacks: t,
          maxConcurrency: r,
          recursionLimit: a,
          runName: n,
          configurable: i,
          runId: s,
        } = {}
      ) {
        let o = u(e);
        return (
          void 0 !== t && (delete o.runName, (o.callbacks = t)),
          void 0 !== a && (o.recursionLimit = a),
          void 0 !== r && (o.maxConcurrency = r),
          void 0 !== n && (o.runName = n),
          void 0 !== i && (o.configurable = { ...o.configurable, ...i }),
          void 0 !== s && delete o.runId,
          o
        );
      }
    },
    71902: function (e, t, r) {
      "use strict";
      r.d(t, {
        eq: function () {
          return a.eq;
        },
        sk: function () {
          return n.s;
        },
        lW: function () {
          return a.lW;
        },
      });
      var a = r(50648);
      r(27798);
      var n = r(84572);
      r(16076), r(69662);
    },
    84572: function (e, t, r) {
      "use strict";
      r.d(t, {
        s: function () {
          return s;
        },
      });
      var a = r(16076),
        n = r(50648),
        i = r(27798);
      class s extends n.eq {
        static lc_name() {
          return "RunnablePassthrough";
        }
        constructor(e) {
          super(e),
            Object.defineProperty(this, "lc_namespace", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: ["langchain_core", "runnables"],
            }),
            Object.defineProperty(this, "lc_serializable", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !0,
            }),
            Object.defineProperty(this, "func", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            e && (this.func = e.func);
        }
        async invoke(e, t) {
          let r = (0, i.LE)(t);
          return (
            this.func && (await this.func(e, r)),
            this._callWithConfig((e) => Promise.resolve(e), e, r)
          );
        }
        async *transform(e, t) {
          let r;
          let n = (0, i.LE)(t),
            s = !0;
          for await (let t of this._transformStreamWithConfig(e, (e) => e, n))
            if ((yield t, s)) {
              if (void 0 === r) r = t;
              else
                try {
                  r = (0, a.zo)(r, t);
                } catch {
                  (r = void 0), (s = !1);
                }
            }
          this.func && void 0 !== r && (await this.func(r, n));
        }
        static assign(e) {
          return new n.Vh(new n.dT({ steps: e }));
        }
      }
    },
    55655: function (e, t, r) {
      "use strict";
      r.d(t, {
        IU: function () {
          return i;
        },
        eO: function () {
          return n;
        },
      });
      let a = Symbol.for("ls:tracing_async_local_storage"),
        n = (e) => {
          globalThis[a] = e;
        },
        i = () => globalThis[a];
    },
    57452: function (e, t, r) {
      "use strict";
      r.d(t, {
        AO: function () {
          return d;
        },
      });
      var a = r(47080),
        n = r(55655),
        i = r(91490);
      class s {
        getStore() {}
        run(e, t) {
          return t();
        }
        enterWith(e) {}
      }
      let o = new s(),
        l = Symbol.for("lc:child_config"),
        u = Symbol.for("lc:context_variables");
      class c {
        getInstance() {
          return (0, n.IU)() ?? o;
        }
        getRunnableConfig() {
          let e = this.getInstance();
          return e.getStore()?.extra?.[l];
        }
        runWithConfig(e, t, r) {
          let n;
          let s = i.Ye._configureSync(
              e?.callbacks,
              void 0,
              e?.tags,
              void 0,
              e?.metadata
            ),
            o = this.getInstance(),
            c = o.getStore(),
            d = s?.getParentRunId(),
            h = s?.handlers?.find((e) => e?.name === "langchain_tracer");
          return (
            h && d
              ? (n = h.convertToRunTree(d))
              : r ||
                (n = new a.IV({
                  name: "<runnable_lambda>",
                  tracingEnabled: !1,
                })),
            n && (n.extra = { ...n.extra, [l]: e }),
            void 0 !== c && void 0 !== c[u] && (n[u] = c[u]),
            o.run(n, t)
          );
        }
        initializeGlobalInstance(e) {
          void 0 === (0, n.IU)() && (0, n.eO)(e);
        }
      }
      let d = new c();
    },
    39570: function (e, t, r) {
      "use strict";
      function a(e) {
        return !!(
          e &&
          "object" == typeof e &&
          "type" in e &&
          "tool_call" === e.type
        );
      }
      r.d(t, {
        Y: function () {
          return n;
        },
        u: function () {
          return a;
        },
      });
      class n extends Error {
        constructor(e, t) {
          super(e),
            Object.defineProperty(this, "output", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.output = t);
        }
      }
    },
    84075: function (e, t, r) {
      "use strict";
      r.d(t, {
        H: function () {
          return i;
        },
        Z: function () {
          return s;
        },
      });
      var a = r(16515);
      function n(e, t) {
        return e && !Array.isArray(e) && "object" == typeof e ? e : { [t]: e };
      }
      function i(e) {
        return "function" == typeof e._addRunToRunMap;
      }
      class s extends a.E {
        constructor(e) {
          super(...arguments),
            Object.defineProperty(this, "runMap", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: new Map(),
            });
        }
        copy() {
          return this;
        }
        stringifyError(e) {
          return e instanceof Error
            ? e.message +
                (e?.stack
                  ? `

${e.stack}`
                  : "")
            : "string" == typeof e
            ? e
            : `${e}`;
        }
        _addChildRun(e, t) {
          e.child_runs.push(t);
        }
        _addRunToRunMap(e) {
          let t = (function (e, t, r) {
              let a = r.toFixed(0).slice(0, 3).padStart(3, "0");
              return (
                `${new Date(e).toISOString().slice(0, -1)}${a}Z`.replace(
                  /[-:.]/g,
                  ""
                ) + t
              );
            })(e.start_time, e.id, e.execution_order),
            r = { ...e };
          if (void 0 !== r.parent_run_id) {
            let e = this.runMap.get(r.parent_run_id);
            e &&
              (this._addChildRun(e, r),
              (e.child_execution_order = Math.max(
                e.child_execution_order,
                r.child_execution_order
              )),
              (r.trace_id = e.trace_id),
              void 0 !== e.dotted_order &&
                (r.dotted_order = [e.dotted_order, t].join(".")));
          } else (r.trace_id = r.id), (r.dotted_order = t);
          return this.runMap.set(r.id, r), r;
        }
        async _endTrace(e) {
          let t =
            void 0 !== e.parent_run_id && this.runMap.get(e.parent_run_id);
          t
            ? (t.child_execution_order = Math.max(
                t.child_execution_order,
                e.child_execution_order
              ))
            : await this.persistRun(e),
            this.runMap.delete(e.id),
            await this.onRunUpdate?.(e);
        }
        _getExecutionOrder(e) {
          let t = void 0 !== e && this.runMap.get(e);
          return t ? t.child_execution_order + 1 : 1;
        }
        _createRunForLLMStart(e, t, r, a, n, i, s, o) {
          let l = this._getExecutionOrder(a),
            u = Date.now(),
            c = s ? { ...n, metadata: s } : n,
            d = {
              id: r,
              name: o ?? e.id[e.id.length - 1],
              parent_run_id: a,
              start_time: u,
              serialized: e,
              events: [{ name: "start", time: new Date(u).toISOString() }],
              inputs: { prompts: t },
              execution_order: l,
              child_runs: [],
              child_execution_order: l,
              run_type: "llm",
              extra: c ?? {},
              tags: i || [],
            };
          return this._addRunToRunMap(d);
        }
        async handleLLMStart(e, t, r, a, n, i, s, o) {
          let l =
            this.runMap.get(r) ??
            this._createRunForLLMStart(e, t, r, a, n, i, s, o);
          return await this.onRunCreate?.(l), await this.onLLMStart?.(l), l;
        }
        _createRunForChatModelStart(e, t, r, a, n, i, s, o) {
          let l = this._getExecutionOrder(a),
            u = Date.now(),
            c = s ? { ...n, metadata: s } : n,
            d = {
              id: r,
              name: o ?? e.id[e.id.length - 1],
              parent_run_id: a,
              start_time: u,
              serialized: e,
              events: [{ name: "start", time: new Date(u).toISOString() }],
              inputs: { messages: t },
              execution_order: l,
              child_runs: [],
              child_execution_order: l,
              run_type: "llm",
              extra: c ?? {},
              tags: i || [],
            };
          return this._addRunToRunMap(d);
        }
        async handleChatModelStart(e, t, r, a, n, i, s, o) {
          let l =
            this.runMap.get(r) ??
            this._createRunForChatModelStart(e, t, r, a, n, i, s, o);
          return await this.onRunCreate?.(l), await this.onLLMStart?.(l), l;
        }
        async handleLLMEnd(e, t) {
          let r = this.runMap.get(t);
          if (!r || r?.run_type !== "llm") throw Error("No LLM run to end.");
          return (
            (r.end_time = Date.now()),
            (r.outputs = e),
            r.events.push({
              name: "end",
              time: new Date(r.end_time).toISOString(),
            }),
            await this.onLLMEnd?.(r),
            await this._endTrace(r),
            r
          );
        }
        async handleLLMError(e, t) {
          let r = this.runMap.get(t);
          if (!r || r?.run_type !== "llm") throw Error("No LLM run to end.");
          return (
            (r.end_time = Date.now()),
            (r.error = this.stringifyError(e)),
            r.events.push({
              name: "error",
              time: new Date(r.end_time).toISOString(),
            }),
            await this.onLLMError?.(r),
            await this._endTrace(r),
            r
          );
        }
        _createRunForChainStart(e, t, r, a, n, i, s, o) {
          let l = this._getExecutionOrder(a),
            u = Date.now(),
            c = {
              id: r,
              name: o ?? e.id[e.id.length - 1],
              parent_run_id: a,
              start_time: u,
              serialized: e,
              events: [{ name: "start", time: new Date(u).toISOString() }],
              inputs: t,
              execution_order: l,
              child_execution_order: l,
              run_type: s ?? "chain",
              child_runs: [],
              extra: i ? { metadata: i } : {},
              tags: n || [],
            };
          return this._addRunToRunMap(c);
        }
        async handleChainStart(e, t, r, a, n, i, s, o) {
          let l =
            this.runMap.get(r) ??
            this._createRunForChainStart(e, t, r, a, n, i, s, o);
          return await this.onRunCreate?.(l), await this.onChainStart?.(l), l;
        }
        async handleChainEnd(e, t, r, a, i) {
          let s = this.runMap.get(t);
          if (!s) throw Error("No chain run to end.");
          return (
            (s.end_time = Date.now()),
            (s.outputs = n(e, "output")),
            s.events.push({
              name: "end",
              time: new Date(s.end_time).toISOString(),
            }),
            i?.inputs !== void 0 && (s.inputs = n(i.inputs, "input")),
            await this.onChainEnd?.(s),
            await this._endTrace(s),
            s
          );
        }
        async handleChainError(e, t, r, a, i) {
          let s = this.runMap.get(t);
          if (!s) throw Error("No chain run to end.");
          return (
            (s.end_time = Date.now()),
            (s.error = this.stringifyError(e)),
            s.events.push({
              name: "error",
              time: new Date(s.end_time).toISOString(),
            }),
            i?.inputs !== void 0 && (s.inputs = n(i.inputs, "input")),
            await this.onChainError?.(s),
            await this._endTrace(s),
            s
          );
        }
        _createRunForToolStart(e, t, r, a, n, i, s) {
          let o = this._getExecutionOrder(a),
            l = Date.now(),
            u = {
              id: r,
              name: s ?? e.id[e.id.length - 1],
              parent_run_id: a,
              start_time: l,
              serialized: e,
              events: [{ name: "start", time: new Date(l).toISOString() }],
              inputs: { input: t },
              execution_order: o,
              child_execution_order: o,
              run_type: "tool",
              child_runs: [],
              extra: i ? { metadata: i } : {},
              tags: n || [],
            };
          return this._addRunToRunMap(u);
        }
        async handleToolStart(e, t, r, a, n, i, s) {
          let o =
            this.runMap.get(r) ??
            this._createRunForToolStart(e, t, r, a, n, i, s);
          return await this.onRunCreate?.(o), await this.onToolStart?.(o), o;
        }
        async handleToolEnd(e, t) {
          let r = this.runMap.get(t);
          if (!r || r?.run_type !== "tool") throw Error("No tool run to end");
          return (
            (r.end_time = Date.now()),
            (r.outputs = { output: e }),
            r.events.push({
              name: "end",
              time: new Date(r.end_time).toISOString(),
            }),
            await this.onToolEnd?.(r),
            await this._endTrace(r),
            r
          );
        }
        async handleToolError(e, t) {
          let r = this.runMap.get(t);
          if (!r || r?.run_type !== "tool") throw Error("No tool run to end");
          return (
            (r.end_time = Date.now()),
            (r.error = this.stringifyError(e)),
            r.events.push({
              name: "error",
              time: new Date(r.end_time).toISOString(),
            }),
            await this.onToolError?.(r),
            await this._endTrace(r),
            r
          );
        }
        async handleAgentAction(e, t) {
          let r = this.runMap.get(t);
          r &&
            r?.run_type === "chain" &&
            ((r.actions = r.actions || []),
            r.actions.push(e),
            r.events.push({
              name: "agent_action",
              time: new Date().toISOString(),
              kwargs: { action: e },
            }),
            await this.onAgentAction?.(r));
        }
        async handleAgentEnd(e, t) {
          let r = this.runMap.get(t);
          r &&
            r?.run_type === "chain" &&
            (r.events.push({
              name: "agent_end",
              time: new Date().toISOString(),
              kwargs: { action: e },
            }),
            await this.onAgentEnd?.(r));
        }
        _createRunForRetrieverStart(e, t, r, a, n, i, s) {
          let o = this._getExecutionOrder(a),
            l = Date.now(),
            u = {
              id: r,
              name: s ?? e.id[e.id.length - 1],
              parent_run_id: a,
              start_time: l,
              serialized: e,
              events: [{ name: "start", time: new Date(l).toISOString() }],
              inputs: { query: t },
              execution_order: o,
              child_execution_order: o,
              run_type: "retriever",
              child_runs: [],
              extra: i ? { metadata: i } : {},
              tags: n || [],
            };
          return this._addRunToRunMap(u);
        }
        async handleRetrieverStart(e, t, r, a, n, i, s) {
          let o =
            this.runMap.get(r) ??
            this._createRunForRetrieverStart(e, t, r, a, n, i, s);
          return (
            await this.onRunCreate?.(o), await this.onRetrieverStart?.(o), o
          );
        }
        async handleRetrieverEnd(e, t) {
          let r = this.runMap.get(t);
          if (!r || r?.run_type !== "retriever")
            throw Error("No retriever run to end");
          return (
            (r.end_time = Date.now()),
            (r.outputs = { documents: e }),
            r.events.push({
              name: "end",
              time: new Date(r.end_time).toISOString(),
            }),
            await this.onRetrieverEnd?.(r),
            await this._endTrace(r),
            r
          );
        }
        async handleRetrieverError(e, t) {
          let r = this.runMap.get(t);
          if (!r || r?.run_type !== "retriever")
            throw Error("No retriever run to end");
          return (
            (r.end_time = Date.now()),
            (r.error = this.stringifyError(e)),
            r.events.push({
              name: "error",
              time: new Date(r.end_time).toISOString(),
            }),
            await this.onRetrieverError?.(r),
            await this._endTrace(r),
            r
          );
        }
        async handleText(e, t) {
          let r = this.runMap.get(t);
          r &&
            r?.run_type === "chain" &&
            (r.events.push({
              name: "text",
              time: new Date().toISOString(),
              kwargs: { text: e },
            }),
            await this.onText?.(r));
        }
        async handleLLMNewToken(e, t, r, a, n, i) {
          let s = this.runMap.get(r);
          if (!s || s?.run_type !== "llm")
            throw Error(
              'Invalid "runId" provided to "handleLLMNewToken" callback.'
            );
          return (
            s.events.push({
              name: "new_token",
              time: new Date().toISOString(),
              kwargs: { token: e, idx: t, chunk: i?.chunk },
            }),
            await this.onLLMNewToken?.(s, e, { chunk: i?.chunk }),
            s
          );
        }
      }
    },
    89208: function (e, t, r) {
      "use strict";
      r.d(t, {
        C: function () {
          return l;
        },
        d: function () {
          return u;
        },
      });
      var a = r(84075),
        n = r(16076),
        i = r(82882),
        s = r(66305);
      function o({ name: e, serialized: t }) {
        return void 0 !== e
          ? e
          : t?.name !== void 0
          ? t.name
          : t?.id !== void 0 && Array.isArray(t?.id)
          ? t.id[t.id.length - 1]
          : "Unnamed";
      }
      let l = (e) => "event_stream_tracer" === e.name;
      class u extends a.Z {
        constructor(e) {
          super({ _awaitHandler: !0, ...e }),
            Object.defineProperty(this, "autoClose", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !0,
            }),
            Object.defineProperty(this, "includeNames", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "includeTypes", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "includeTags", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "excludeNames", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "excludeTypes", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "excludeTags", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "runInfoMap", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: new Map(),
            }),
            Object.defineProperty(this, "tappedPromises", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: new Map(),
            }),
            Object.defineProperty(this, "transformStream", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "writer", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "receiveStream", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "event_stream_tracer",
            }),
            (this.autoClose = e?.autoClose ?? !0),
            (this.includeNames = e?.includeNames),
            (this.includeTypes = e?.includeTypes),
            (this.includeTags = e?.includeTags),
            (this.excludeNames = e?.excludeNames),
            (this.excludeTypes = e?.excludeTypes),
            (this.excludeTags = e?.excludeTags),
            (this.transformStream = new TransformStream()),
            (this.writer = this.transformStream.writable.getWriter()),
            (this.receiveStream = n.QJ.fromReadableStream(
              this.transformStream.readable
            ));
        }
        [Symbol.asyncIterator]() {
          return this.receiveStream;
        }
        async persistRun(e) {}
        _includeRun(e) {
          let t = e.tags ?? [],
            r =
              void 0 === this.includeNames &&
              void 0 === this.includeTags &&
              void 0 === this.includeTypes;
          return (
            void 0 !== this.includeNames &&
              (r = r || this.includeNames.includes(e.name)),
            void 0 !== this.includeTypes &&
              (r = r || this.includeTypes.includes(e.runType)),
            void 0 !== this.includeTags &&
              (r =
                r || void 0 !== t.find((e) => this.includeTags?.includes(e))),
            void 0 !== this.excludeNames &&
              (r = r && !this.excludeNames.includes(e.name)),
            void 0 !== this.excludeTypes &&
              (r = r && !this.excludeTypes.includes(e.runType)),
            void 0 !== this.excludeTags &&
              (r = r && t.every((e) => !this.excludeTags?.includes(e))),
            r
          );
        }
        async *tapOutputIterable(e, t) {
          let r = await t.next();
          if (r.done) return;
          let a = this.runInfoMap.get(e);
          if (void 0 === a) {
            yield r.value;
            return;
          }
          function n(e, t) {
            return "llm" === e && "string" == typeof t
              ? new s.b6({ text: t })
              : t;
          }
          let i = this.tappedPromises.get(e);
          if (void 0 === i) {
            let s;
            (i = new Promise((e) => {
              s = e;
            })),
              this.tappedPromises.set(e, i);
            try {
              let i = {
                event: `on_${a.runType}_stream`,
                run_id: e,
                name: a.name,
                tags: a.tags,
                metadata: a.metadata,
                data: {},
              };
              for await (let e of (await this.send(
                { ...i, data: { chunk: n(a.runType, r.value) } },
                a
              ),
              yield r.value,
              t))
                "tool" !== a.runType &&
                  "retriever" !== a.runType &&
                  (await this.send(
                    { ...i, data: { chunk: n(a.runType, e) } },
                    a
                  )),
                  yield e;
            } finally {
              s();
            }
          } else for await (let e of (yield r.value, t)) yield e;
        }
        async send(e, t) {
          this._includeRun(t) && (await this.writer.write(e));
        }
        async sendEndEvent(e, t) {
          let r = this.tappedPromises.get(e.run_id);
          void 0 !== r
            ? r.then(() => {
                this.send(e, t);
              })
            : await this.send(e, t);
        }
        async onLLMStart(e) {
          let t = o(e),
            r = void 0 !== e.inputs.messages ? "chat_model" : "llm",
            a = {
              tags: e.tags ?? [],
              metadata: e.extra?.metadata ?? {},
              name: t,
              runType: r,
              inputs: e.inputs,
            };
          this.runInfoMap.set(e.id, a);
          let n = `on_${r}_start`;
          await this.send(
            {
              event: n,
              data: { input: e.inputs },
              name: t,
              tags: e.tags ?? [],
              run_id: e.id,
              metadata: e.extra?.metadata ?? {},
            },
            a
          );
        }
        async onLLMNewToken(e, t, r) {
          let a, n;
          let o = this.runInfoMap.get(e.id);
          if (void 0 === o)
            throw Error(`onLLMNewToken: Run ID ${e.id} not found in run map.`);
          if (1 !== this.runInfoMap.size) {
            if ("chat_model" === o.runType)
              (n = "on_chat_model_stream"),
                (a =
                  r?.chunk === void 0
                    ? new i.GC({ content: t, id: `run-${e.id}` })
                    : r.chunk.message);
            else if ("llm" === o.runType)
              (n = "on_llm_stream"),
                (a = r?.chunk === void 0 ? new s.b6({ text: t }) : r.chunk);
            else throw Error(`Unexpected run type ${o.runType}`);
            await this.send(
              {
                event: n,
                data: { chunk: a },
                run_id: e.id,
                name: o.name,
                tags: o.tags,
                metadata: o.metadata,
              },
              o
            );
          }
        }
        async onLLMEnd(e) {
          let t, r;
          let a = this.runInfoMap.get(e.id);
          if ((this.runInfoMap.delete(e.id), void 0 === a))
            throw Error(`onLLMEnd: Run ID ${e.id} not found in run map.`);
          let n = e.outputs?.generations;
          if ("chat_model" === a.runType) {
            for (let e of n ?? []) {
              if (void 0 !== r) break;
              r = e[0]?.message;
            }
            t = "on_chat_model_end";
          } else if ("llm" === a.runType)
            (r = {
              generations: n?.map((e) =>
                e.map((e) => ({
                  text: e.text,
                  generationInfo: e.generationInfo,
                }))
              ),
              llmOutput: e.outputs?.llmOutput ?? {},
            }),
              (t = "on_llm_end");
          else throw Error(`onLLMEnd: Unexpected run type: ${a.runType}`);
          await this.sendEndEvent(
            {
              event: t,
              data: { output: r, input: a.inputs },
              run_id: e.id,
              name: a.name,
              tags: a.tags,
              metadata: a.metadata,
            },
            a
          );
        }
        async onChainStart(e) {
          let t = o(e),
            r = e.run_type ?? "chain",
            a = {
              tags: e.tags ?? [],
              metadata: e.extra?.metadata ?? {},
              name: t,
              runType: e.run_type,
            },
            n = {};
          "" === e.inputs.input && 1 === Object.keys(e.inputs).length
            ? ((n = {}), (a.inputs = {}))
            : void 0 !== e.inputs.input
            ? ((n.input = e.inputs.input), (a.inputs = e.inputs.input))
            : ((n.input = e.inputs), (a.inputs = e.inputs)),
            this.runInfoMap.set(e.id, a),
            await this.send(
              {
                event: `on_${r}_start`,
                data: n,
                name: t,
                tags: e.tags ?? [],
                run_id: e.id,
                metadata: e.extra?.metadata ?? {},
              },
              a
            );
        }
        async onChainEnd(e) {
          let t = this.runInfoMap.get(e.id);
          if ((this.runInfoMap.delete(e.id), void 0 === t))
            throw Error(`onChainEnd: Run ID ${e.id} not found in run map.`);
          let r = `on_${e.run_type}_end`,
            a = e.inputs ?? t.inputs ?? {},
            n = { output: e.outputs?.output ?? e.outputs, input: a };
          a.input &&
            1 === Object.keys(a).length &&
            ((n.input = a.input), (t.inputs = a.input)),
            await this.sendEndEvent(
              {
                event: r,
                data: n,
                run_id: e.id,
                name: t.name,
                tags: t.tags,
                metadata: t.metadata ?? {},
              },
              t
            );
        }
        async onToolStart(e) {
          let t = o(e),
            r = {
              tags: e.tags ?? [],
              metadata: e.extra?.metadata ?? {},
              name: t,
              runType: "tool",
              inputs: e.inputs ?? {},
            };
          this.runInfoMap.set(e.id, r),
            await this.send(
              {
                event: "on_tool_start",
                data: { input: e.inputs ?? {} },
                name: t,
                run_id: e.id,
                tags: e.tags ?? [],
                metadata: e.extra?.metadata ?? {},
              },
              r
            );
        }
        async onToolEnd(e) {
          let t = this.runInfoMap.get(e.id);
          if ((this.runInfoMap.delete(e.id), void 0 === t))
            throw Error(`onToolEnd: Run ID ${e.id} not found in run map.`);
          if (void 0 === t.inputs)
            throw Error(
              `onToolEnd: Run ID ${e.id} is a tool call, and is expected to have traced inputs.`
            );
          let r = e.outputs?.output === void 0 ? e.outputs : e.outputs.output;
          await this.sendEndEvent(
            {
              event: "on_tool_end",
              data: { output: r, input: t.inputs },
              run_id: e.id,
              name: t.name,
              tags: t.tags,
              metadata: t.metadata,
            },
            t
          );
        }
        async onRetrieverStart(e) {
          let t = o(e),
            r = {
              tags: e.tags ?? [],
              metadata: e.extra?.metadata ?? {},
              name: t,
              runType: "retriever",
              inputs: { query: e.inputs.query },
            };
          this.runInfoMap.set(e.id, r),
            await this.send(
              {
                event: "on_retriever_start",
                data: { input: { query: e.inputs.query } },
                name: t,
                tags: e.tags ?? [],
                run_id: e.id,
                metadata: e.extra?.metadata ?? {},
              },
              r
            );
        }
        async onRetrieverEnd(e) {
          let t = this.runInfoMap.get(e.id);
          if ((this.runInfoMap.delete(e.id), void 0 === t))
            throw Error(`onRetrieverEnd: Run ID ${e.id} not found in run map.`);
          await this.sendEndEvent(
            {
              event: "on_retriever_end",
              data: {
                output: e.outputs?.documents ?? e.outputs,
                input: t.inputs,
              },
              run_id: e.id,
              name: t.name,
              tags: t.tags,
              metadata: t.metadata,
            },
            t
          );
        }
        async handleCustomEvent(e, t, r) {
          let a = this.runInfoMap.get(r);
          if (void 0 === a)
            throw Error(`handleCustomEvent: Run ID ${r} not found in run map.`);
          await this.send(
            {
              event: "on_custom_event",
              run_id: r,
              name: e,
              tags: a.tags,
              metadata: a.metadata,
              data: t,
            },
            a
          );
        }
        async finish() {
          Promise.all([...this.tappedPromises.values()]).finally(() => {
            this.writer.close();
          });
        }
      }
    },
    63035: function (e, t, r) {
      "use strict";
      r.d(t, {
        Te: function () {
          return h;
        },
        hv: function () {
          return o;
        },
        ky: function () {
          return u;
        },
        y6: function () {
          return l;
        },
      });
      var a = r(93082),
        n = r(84075),
        i = r(16076),
        s = r(82882);
      class o {
        constructor(e) {
          Object.defineProperty(this, "ops", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
            (this.ops = e.ops ?? []);
        }
        concat(e) {
          let t = this.ops.concat(e.ops),
            r = (0, a.af)({}, t);
          return new l({ ops: t, state: r[r.length - 1].newDocument });
        }
      }
      class l extends o {
        constructor(e) {
          super(e),
            Object.defineProperty(this, "state", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.state = e.state);
        }
        concat(e) {
          let t = this.ops.concat(e.ops),
            r = (0, a.af)(this.state, e.ops);
          return new l({ ops: t, state: r[r.length - 1].newDocument });
        }
        static fromRunLogPatch(e) {
          let t = (0, a.af)({}, e.ops);
          return new l({ ops: e.ops, state: t[t.length - 1].newDocument });
        }
      }
      let u = (e) => "log_stream_tracer" === e.name;
      async function c(e, t) {
        if ("original" === t)
          throw Error(
            "Do not assign inputs with original schema drop the key for now. When inputs are added to streamLog they should be added with standardized schema for streaming events."
          );
        let { inputs: r } = e;
        return ["retriever", "llm", "prompt"].includes(e.run_type)
          ? r
          : 1 !== Object.keys(r).length || r?.input !== ""
          ? r.input
          : void 0;
      }
      async function d(e, t) {
        let { outputs: r } = e;
        return "original" === t ||
          ["retriever", "llm", "prompt"].includes(e.run_type)
          ? r
          : void 0 !== r && 1 === Object.keys(r).length && r?.output !== void 0
          ? r.output
          : r;
      }
      class h extends n.Z {
        constructor(e) {
          super({ _awaitHandler: !0, ...e }),
            Object.defineProperty(this, "autoClose", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !0,
            }),
            Object.defineProperty(this, "includeNames", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "includeTypes", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "includeTags", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "excludeNames", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "excludeTypes", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "excludeTags", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "_schemaFormat", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "original",
            }),
            Object.defineProperty(this, "rootId", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "keyMapByRunId", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: {},
            }),
            Object.defineProperty(this, "counterMapByRunName", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: {},
            }),
            Object.defineProperty(this, "transformStream", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "writer", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "receiveStream", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "log_stream_tracer",
            }),
            (this.autoClose = e?.autoClose ?? !0),
            (this.includeNames = e?.includeNames),
            (this.includeTypes = e?.includeTypes),
            (this.includeTags = e?.includeTags),
            (this.excludeNames = e?.excludeNames),
            (this.excludeTypes = e?.excludeTypes),
            (this.excludeTags = e?.excludeTags),
            (this._schemaFormat = e?._schemaFormat ?? this._schemaFormat),
            (this.transformStream = new TransformStream()),
            (this.writer = this.transformStream.writable.getWriter()),
            (this.receiveStream = i.QJ.fromReadableStream(
              this.transformStream.readable
            ));
        }
        [Symbol.asyncIterator]() {
          return this.receiveStream;
        }
        async persistRun(e) {}
        _includeRun(e) {
          if (e.id === this.rootId) return !1;
          let t = e.tags ?? [],
            r =
              void 0 === this.includeNames &&
              void 0 === this.includeTags &&
              void 0 === this.includeTypes;
          return (
            void 0 !== this.includeNames &&
              (r = r || this.includeNames.includes(e.name)),
            void 0 !== this.includeTypes &&
              (r = r || this.includeTypes.includes(e.run_type)),
            void 0 !== this.includeTags &&
              (r =
                r || void 0 !== t.find((e) => this.includeTags?.includes(e))),
            void 0 !== this.excludeNames &&
              (r = r && !this.excludeNames.includes(e.name)),
            void 0 !== this.excludeTypes &&
              (r = r && !this.excludeTypes.includes(e.run_type)),
            void 0 !== this.excludeTags &&
              (r = r && t.every((e) => !this.excludeTags?.includes(e))),
            r
          );
        }
        async *tapOutputIterable(e, t) {
          for await (let r of t) {
            if (e !== this.rootId) {
              let t = this.keyMapByRunId[e];
              t &&
                (await this.writer.write(
                  new o({
                    ops: [
                      {
                        op: "add",
                        path: `/logs/${t}/streamed_output/-`,
                        value: r,
                      },
                    ],
                  })
                ));
            }
            yield r;
          }
        }
        async onRunCreate(e) {
          if (
            (void 0 === this.rootId &&
              ((this.rootId = e.id),
              await this.writer.write(
                new o({
                  ops: [
                    {
                      op: "replace",
                      path: "",
                      value: {
                        id: e.id,
                        name: e.name,
                        type: e.run_type,
                        streamed_output: [],
                        final_output: void 0,
                        logs: {},
                      },
                    },
                  ],
                })
              )),
            !this._includeRun(e))
          )
            return;
          void 0 === this.counterMapByRunName[e.name] &&
            (this.counterMapByRunName[e.name] = 0),
            (this.counterMapByRunName[e.name] += 1);
          let t = this.counterMapByRunName[e.name];
          this.keyMapByRunId[e.id] = 1 === t ? e.name : `${e.name}:${t}`;
          let r = {
            id: e.id,
            name: e.name,
            type: e.run_type,
            tags: e.tags ?? [],
            metadata: e.extra?.metadata ?? {},
            start_time: new Date(e.start_time).toISOString(),
            streamed_output: [],
            streamed_output_str: [],
            final_output: void 0,
            end_time: void 0,
          };
          "streaming_events" === this._schemaFormat &&
            (r.inputs = await c(e, this._schemaFormat)),
            await this.writer.write(
              new o({
                ops: [
                  {
                    op: "add",
                    path: `/logs/${this.keyMapByRunId[e.id]}`,
                    value: r,
                  },
                ],
              })
            );
        }
        async onRunUpdate(e) {
          try {
            let t = this.keyMapByRunId[e.id];
            if (void 0 === t) return;
            let r = [];
            "streaming_events" === this._schemaFormat &&
              r.push({
                op: "replace",
                path: `/logs/${t}/inputs`,
                value: await c(e, this._schemaFormat),
              }),
              r.push({
                op: "add",
                path: `/logs/${t}/final_output`,
                value: await d(e, this._schemaFormat),
              }),
              void 0 !== e.end_time &&
                r.push({
                  op: "add",
                  path: `/logs/${t}/end_time`,
                  value: new Date(e.end_time).toISOString(),
                });
            let a = new o({ ops: r });
            await this.writer.write(a);
          } finally {
            if (e.id === this.rootId) {
              let t = new o({
                ops: [
                  {
                    op: "replace",
                    path: "/final_output",
                    value: await d(e, this._schemaFormat),
                  },
                ],
              });
              await this.writer.write(t),
                this.autoClose && (await this.writer.close());
            }
          }
        }
        async onLLMNewToken(e, t, r) {
          let a;
          let n = this.keyMapByRunId[e.id];
          if (void 0 === n) return;
          if (void 0 !== e.inputs.messages) {
            var i;
            a =
              void 0 !== (i = r?.chunk) && void 0 !== i.message
                ? r?.chunk
                : new s.GC({ id: `run-${e.id}`, content: t });
          } else a = t;
          let l = new o({
            ops: [
              { op: "add", path: `/logs/${n}/streamed_output_str/-`, value: t },
              { op: "add", path: `/logs/${n}/streamed_output/-`, value: a },
            ],
          });
          await this.writer.write(l);
        }
      }
    },
    99636: function (e, t, r) {
      "use strict";
      r.d(t, {
        L: function () {
          return o;
        },
      });
      var a = r(42693),
        n = r(45860);
      let i = [400, 401, 402, 403, 404, 405, 406, 407, 409],
        s = (e) => {
          if (
            e.message.startsWith("Cancel") ||
            e.message.startsWith("AbortError") ||
            "AbortError" === e.name ||
            e?.code === "ECONNABORTED"
          )
            throw e;
          let t = e?.response?.status ?? e?.status;
          if (t && i.includes(+t)) throw e;
          if (e?.error?.code === "insufficient_quota") {
            let t = Error(e?.message);
            throw ((t.name = "InsufficientQuotaError"), t);
          }
        };
      class o {
        constructor(e) {
          Object.defineProperty(this, "maxConcurrency", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
            Object.defineProperty(this, "maxRetries", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "onFailedAttempt", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "queue", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.maxConcurrency = e.maxConcurrency ?? 1 / 0),
            (this.maxRetries = e.maxRetries ?? 6),
            (this.onFailedAttempt = e.onFailedAttempt ?? s);
          let t = n.default;
          this.queue = new t({ concurrency: this.maxConcurrency });
        }
        call(e, ...t) {
          return this.queue.add(
            () =>
              a(
                () =>
                  e(...t).catch((e) => {
                    if (e instanceof Error) throw e;
                    throw Error(e);
                  }),
                {
                  onFailedAttempt: this.onFailedAttempt,
                  retries: this.maxRetries,
                  randomize: !0,
                }
              ),
            { throwOnTimeout: !0 }
          );
        }
        callWithOptions(e, t, ...r) {
          return e.signal
            ? Promise.race([
                this.call(t, ...r),
                new Promise((t, r) => {
                  e.signal?.addEventListener("abort", () => {
                    r(Error("AbortError"));
                  });
                }),
              ])
            : this.call(t, ...r);
        }
        fetch(...e) {
          return this.call(() =>
            fetch(...e).then((e) => (e.ok ? e : Promise.reject(e)))
          );
        }
      }
    },
    6374: function (e, t, r) {
      "use strict";
      let a;
      r.d(t, {
        lS: function () {
          return h;
        },
        sA: function () {
          return d;
        },
      });
      var n = r(34155);
      let i = () => "undefined" != typeof window && void 0 !== window.document,
        s = () =>
          "object" == typeof globalThis &&
          globalThis.constructor &&
          "DedicatedWorkerGlobalScope" === globalThis.constructor.name,
        o = () =>
          ("undefined" != typeof window && "nodejs" === window.name) ||
          ("undefined" != typeof navigator &&
            (navigator.userAgent.includes("Node.js") ||
              navigator.userAgent.includes("jsdom"))),
        l = () => "undefined" != typeof Deno,
        u = () =>
          void 0 !== n &&
          void 0 !== n.versions &&
          void 0 !== n.versions.node &&
          !l(),
        c = () =>
          i()
            ? "browser"
            : u()
            ? "node"
            : s()
            ? "webworker"
            : o()
            ? "jsdom"
            : l()
            ? "deno"
            : "other";
      async function d() {
        return (
          void 0 === a && (a = { library: "langchain-js", runtime: c() }), a
        );
      }
      function h(e) {
        try {
          return void 0 !== n ? n.env?.[e] : void 0;
        } catch (e) {
          return;
        }
      }
    },
    93082: function (e, t, r) {
      "use strict";
      r.d(t, {
        af: function () {
          return b;
        },
        qu: function () {
          return x;
        },
      });
      var a = {};
      r.r(a),
        r.d(a, {
          JsonPatchError: function () {
            return h;
          },
          _areEquals: function () {
            return E;
          },
          applyOperation: function () {
            return y;
          },
          applyPatch: function () {
            return b;
          },
          applyReducer: function () {
            return _;
          },
          deepClone: function () {
            return p;
          },
          getValueByPointer: function () {
            return g;
          },
          validate: function () {
            return w;
          },
          validator: function () {
            return v;
          },
        });
      let n = Object.prototype.hasOwnProperty;
      function i(e, t) {
        return n.call(e, t);
      }
      function s(e) {
        if (Array.isArray(e)) {
          let t = Array(e.length);
          for (let e = 0; e < t.length; e++) t[e] = "" + e;
          return t;
        }
        if (Object.keys) return Object.keys(e);
        let t = [];
        for (let r in e) i(e, r) && t.push(r);
        return t;
      }
      function o(e) {
        switch (typeof e) {
          case "object":
            return JSON.parse(JSON.stringify(e));
          case "undefined":
            return null;
          default:
            return e;
        }
      }
      function l(e) {
        let t,
          r = 0,
          a = e.length;
        for (; r < a; ) {
          if ((t = e.charCodeAt(r)) >= 48 && t <= 57) {
            r++;
            continue;
          }
          return !1;
        }
        return !0;
      }
      function u(e) {
        return -1 === e.indexOf("/") && -1 === e.indexOf("~")
          ? e
          : e.replace(/~/g, "~0").replace(/\//g, "~1");
      }
      function c(e, t) {
        let r = [e];
        for (let e in t) {
          let a =
            "object" == typeof t[e] ? JSON.stringify(t[e], null, 2) : t[e];
          void 0 !== a && r.push(`${e}: ${a}`);
        }
        return r.join("\n");
      }
      class d extends Error {
        constructor(e, t, r, a, n) {
          super(c(e, { name: t, index: r, operation: a, tree: n })),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t,
            }),
            Object.defineProperty(this, "index", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: r,
            }),
            Object.defineProperty(this, "operation", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: a,
            }),
            Object.defineProperty(this, "tree", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            }),
            Object.setPrototypeOf(this, new.target.prototype),
            (this.message = c(e, { name: t, index: r, operation: a, tree: n }));
        }
      }
      let h = d,
        p = o,
        f = {
          add: function (e, t, r) {
            return (e[t] = this.value), { newDocument: r };
          },
          remove: function (e, t, r) {
            var a = e[t];
            return delete e[t], { newDocument: r, removed: a };
          },
          replace: function (e, t, r) {
            var a = e[t];
            return (e[t] = this.value), { newDocument: r, removed: a };
          },
          move: function (e, t, r) {
            let a = g(r, this.path);
            a && (a = o(a));
            let n = y(r, { op: "remove", path: this.from }).removed;
            return (
              y(r, { op: "add", path: this.path, value: n }),
              { newDocument: r, removed: a }
            );
          },
          copy: function (e, t, r) {
            let a = g(r, this.from);
            return (
              y(r, { op: "add", path: this.path, value: o(a) }),
              { newDocument: r }
            );
          },
          test: function (e, t, r) {
            return { newDocument: r, test: E(e[t], this.value) };
          },
          _get: function (e, t, r) {
            return (this.value = e[t]), { newDocument: r };
          },
        };
      var m = {
        add: function (e, t, r) {
          return (
            l(t) ? e.splice(t, 0, this.value) : (e[t] = this.value),
            { newDocument: r, index: t }
          );
        },
        remove: function (e, t, r) {
          return { newDocument: r, removed: e.splice(t, 1)[0] };
        },
        replace: function (e, t, r) {
          var a = e[t];
          return (e[t] = this.value), { newDocument: r, removed: a };
        },
        move: f.move,
        copy: f.copy,
        test: f.test,
        _get: f._get,
      };
      function g(e, t) {
        if ("" == t) return e;
        var r = { op: "_get", path: t };
        return y(e, r), r.value;
      }
      function y(e, t, r = !1, a = !0, n = !0, i = 0) {
        if (
          (r && ("function" == typeof r ? r(t, 0, e, t.path) : v(t, 0)),
          "" === t.path)
        ) {
          let a = { newDocument: e };
          if ("add" === t.op) return (a.newDocument = t.value), a;
          if ("replace" === t.op)
            return (a.newDocument = t.value), (a.removed = e), a;
          if ("move" === t.op || "copy" === t.op)
            return (
              (a.newDocument = g(e, t.from)),
              "move" === t.op && (a.removed = e),
              a
            );
          if ("test" === t.op) {
            if (((a.test = E(e, t.value)), !1 === a.test))
              throw new h(
                "Test operation failed",
                "TEST_OPERATION_FAILED",
                i,
                t,
                e
              );
            return (a.newDocument = e), a;
          } else {
            if ("remove" === t.op)
              return (a.removed = e), (a.newDocument = null), a;
            if ("_get" === t.op) return (t.value = e), a;
            if (!r) return a;
            throw new h(
              "Operation `op` property is not one of operations defined in RFC-6902",
              "OPERATION_OP_INVALID",
              i,
              t,
              e
            );
          }
        }
        {
          let s, u, c;
          a || (e = o(e));
          let d = (t.path || "").split("/"),
            p = e,
            g = 1,
            y = d.length;
          for (u = "function" == typeof r ? r : v; ; ) {
            if (
              ((s = d[g]) &&
                -1 != s.indexOf("~") &&
                (s = s.replace(/~1/g, "/").replace(/~0/g, "~")),
              n &&
                ("__proto__" == s ||
                  ("prototype" == s && g > 0 && "constructor" == d[g - 1])))
            )
              throw TypeError(
                "JSON-Patch: modifying `__proto__` or `constructor/prototype` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README"
              );
            if (
              (r &&
                void 0 === c &&
                (void 0 === p[s]
                  ? (c = d.slice(0, g).join("/"))
                  : g == y - 1 && (c = t.path),
                void 0 !== c && u(t, 0, e, c)),
              g++,
              Array.isArray(p))
            ) {
              if ("-" === s) s = p.length;
              else {
                if (r && !l(s))
                  throw new h(
                    "Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index",
                    "OPERATION_PATH_ILLEGAL_ARRAY_INDEX",
                    i,
                    t,
                    e
                  );
                l(s) && (s = ~~s);
              }
              if (g >= y) {
                if (r && "add" === t.op && s > p.length)
                  throw new h(
                    "The specified index MUST NOT be greater than the number of elements in the array",
                    "OPERATION_VALUE_OUT_OF_BOUNDS",
                    i,
                    t,
                    e
                  );
                let a = m[t.op].call(t, p, s, e);
                if (!1 === a.test)
                  throw new h(
                    "Test operation failed",
                    "TEST_OPERATION_FAILED",
                    i,
                    t,
                    e
                  );
                return a;
              }
            } else if (g >= y) {
              let r = f[t.op].call(t, p, s, e);
              if (!1 === r.test)
                throw new h(
                  "Test operation failed",
                  "TEST_OPERATION_FAILED",
                  i,
                  t,
                  e
                );
              return r;
            }
            if (((p = p[s]), r && g < y && (!p || "object" != typeof p)))
              throw new h(
                "Cannot perform operation at the desired path",
                "OPERATION_PATH_UNRESOLVABLE",
                i,
                t,
                e
              );
          }
        }
      }
      function b(e, t, r, a = !0, n = !0) {
        if (r && !Array.isArray(t))
          throw new h(
            "Patch sequence must be an array",
            "SEQUENCE_NOT_AN_ARRAY"
          );
        a || (e = o(e));
        let i = Array(t.length);
        for (let a = 0, s = t.length; a < s; a++)
          (i[a] = y(e, t[a], r, !0, n, a)), (e = i[a].newDocument);
        return (i.newDocument = e), i;
      }
      function _(e, t, r) {
        let a = y(e, t);
        if (!1 === a.test)
          throw new h(
            "Test operation failed",
            "TEST_OPERATION_FAILED",
            r,
            t,
            e
          );
        return a.newDocument;
      }
      function v(e, t, r, a) {
        if ("object" != typeof e || null === e || Array.isArray(e))
          throw new h(
            "Operation is not an object",
            "OPERATION_NOT_AN_OBJECT",
            t,
            e,
            r
          );
        if (f[e.op]) {
          if ("string" != typeof e.path)
            throw new h(
              "Operation `path` property is not a string",
              "OPERATION_PATH_INVALID",
              t,
              e,
              r
            );
          if (0 !== e.path.indexOf("/") && e.path.length > 0)
            throw new h(
              'Operation `path` property must start with "/"',
              "OPERATION_PATH_INVALID",
              t,
              e,
              r
            );
          if (("move" === e.op || "copy" === e.op) && "string" != typeof e.from)
            throw new h(
              "Operation `from` property is not present (applicable in `move` and `copy` operations)",
              "OPERATION_FROM_REQUIRED",
              t,
              e,
              r
            );
          else if (
            ("add" === e.op || "replace" === e.op || "test" === e.op) &&
            void 0 === e.value
          )
            throw new h(
              "Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)",
              "OPERATION_VALUE_REQUIRED",
              t,
              e,
              r
            );
          else if (
            ("add" === e.op || "replace" === e.op || "test" === e.op) &&
            (function e(t) {
              if (void 0 === t) return !0;
              if (t) {
                if (Array.isArray(t)) {
                  for (let r = 0, a = t.length; r < a; r++)
                    if (e(t[r])) return !0;
                } else if ("object" == typeof t) {
                  let a = s(t),
                    n = a.length;
                  for (var r = 0; r < n; r++) if (e(t[a[r]])) return !0;
                }
              }
              return !1;
            })(e.value)
          )
            throw new h(
              "Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)",
              "OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED",
              t,
              e,
              r
            );
          else if (r) {
            if ("add" == e.op) {
              var n = e.path.split("/").length,
                i = a.split("/").length;
              if (n !== i + 1 && n !== i)
                throw new h(
                  "Cannot perform an `add` operation at the desired path",
                  "OPERATION_PATH_CANNOT_ADD",
                  t,
                  e,
                  r
                );
            } else if (
              "replace" === e.op ||
              "remove" === e.op ||
              "_get" === e.op
            ) {
              if (e.path !== a)
                throw new h(
                  "Cannot perform the operation at a path that does not exist",
                  "OPERATION_PATH_UNRESOLVABLE",
                  t,
                  e,
                  r
                );
            } else if ("move" === e.op || "copy" === e.op) {
              var o = w([{ op: "_get", path: e.from, value: void 0 }], r);
              if (o && "OPERATION_PATH_UNRESOLVABLE" === o.name)
                throw new h(
                  "Cannot perform the operation from a path that does not exist",
                  "OPERATION_FROM_UNRESOLVABLE",
                  t,
                  e,
                  r
                );
            }
          }
        } else
          throw new h(
            "Operation `op` property is not one of operations defined in RFC-6902",
            "OPERATION_OP_INVALID",
            t,
            e,
            r
          );
      }
      function w(e, t, r) {
        try {
          if (!Array.isArray(e))
            throw new h(
              "Patch sequence must be an array",
              "SEQUENCE_NOT_AN_ARRAY"
            );
          if (t) b(o(t), o(e), r || !0);
          else {
            r = r || v;
            for (var a = 0; a < e.length; a++) r(e[a], a, t, void 0);
          }
        } catch (e) {
          if (e instanceof h) return e;
          throw e;
        }
      }
      function E(e, t) {
        if (e === t) return !0;
        if (e && t && "object" == typeof e && "object" == typeof t) {
          var r,
            a,
            n,
            i = Array.isArray(e),
            s = Array.isArray(t);
          if (i && s) {
            if ((a = e.length) != t.length) return !1;
            for (r = a; 0 != r--; ) if (!E(e[r], t[r])) return !1;
            return !0;
          }
          if (i != s) return !1;
          var o = Object.keys(e);
          if ((a = o.length) !== Object.keys(t).length) return !1;
          for (r = a; 0 != r--; ) if (!t.hasOwnProperty(o[r])) return !1;
          for (r = a; 0 != r--; ) if (!E(e[(n = o[r])], t[n])) return !1;
          return !0;
        }
        return e != e && t != t;
      }
      function x(e, t, r = !1) {
        var a = [];
        return (
          !(function e(t, r, a, n, l) {
            if (r !== t) {
              "function" == typeof r.toJSON && (r = r.toJSON());
              for (
                var c = s(r), d = s(t), h = !1, p = d.length - 1;
                p >= 0;
                p--
              ) {
                var f = d[p],
                  m = t[f];
                if (
                  i(r, f) &&
                  !(void 0 === r[f] && void 0 !== m && !1 === Array.isArray(r))
                ) {
                  var g = r[f];
                  "object" == typeof m &&
                  null != m &&
                  "object" == typeof g &&
                  null != g &&
                  Array.isArray(m) === Array.isArray(g)
                    ? e(m, g, a, n + "/" + u(f), l)
                    : m !== g &&
                      (l &&
                        a.push({
                          op: "test",
                          path: n + "/" + u(f),
                          value: o(m),
                        }),
                      a.push({
                        op: "replace",
                        path: n + "/" + u(f),
                        value: o(g),
                      }));
                } else
                  Array.isArray(t) === Array.isArray(r)
                    ? (l &&
                        a.push({
                          op: "test",
                          path: n + "/" + u(f),
                          value: o(m),
                        }),
                      a.push({ op: "remove", path: n + "/" + u(f) }),
                      (h = !0))
                    : (l && a.push({ op: "test", path: n, value: t }),
                      a.push({ op: "replace", path: n, value: r }));
              }
              if (h || c.length != d.length)
                for (var p = 0; p < c.length; p++) {
                  var f = c[p];
                  i(t, f) ||
                    void 0 === r[f] ||
                    a.push({ op: "add", path: n + "/" + u(f), value: o(r[f]) });
                }
            }
          })(e, t, a, "", r),
          a
        );
      }
      new WeakMap();
    },
    15305: function (e, t, r) {
      "use strict";
      function a(e, t = n) {
        e = e.trim();
        let r = /```(json)?(.*)```/s.exec(e);
        return t(r ? r[2] : e);
      }
      function n(e) {
        if (void 0 === e) return null;
        try {
          return JSON.parse(e);
        } catch (e) {}
        let t = "",
          r = [],
          a = !1,
          n = !1;
        for (let i of e) {
          if (a)
            '"' !== i || n
              ? "\n" !== i || n
                ? (n = "\\" === i && !n)
                : (i = "\\n")
              : (a = !1);
          else if ('"' === i) (a = !0), (n = !1);
          else if ("{" === i) r.push("}");
          else if ("[" === i) r.push("]");
          else if ("}" === i || "]" === i) {
            if (!r || r[r.length - 1] !== i) return null;
            r.pop();
          }
          t += i;
        }
        a && (t += '"');
        for (let e = r.length - 1; e >= 0; e -= 1) t += r[e];
        try {
          return JSON.parse(t);
        } catch (e) {
          return null;
        }
      }
      r.d(t, {
        M: function () {
          return a;
        },
        g: function () {
          return n;
        },
      });
    },
    26355: function (e, t, r) {
      "use strict";
      r.d(t, {
        q: function () {
          return a.qu;
        },
      });
      var a = r(93082);
    },
    82964: function (e, t, r) {
      "use strict";
      async function a(e, t) {
        let r;
        return void 0 === t
          ? e
          : Promise.race([
              e.catch((e) => {
                if (!t?.aborted) throw e;
              }),
              new Promise((e, a) => {
                (r = () => {
                  a(Error("Aborted"));
                }),
                  t.addEventListener("abort", r),
                  t.aborted && a(Error("Aborted"));
              }),
            ]).finally(() => t.removeEventListener("abort", r));
      }
      r.d(t, {
        E: function () {
          return a;
        },
      });
    },
    16076: function (e, t, r) {
      "use strict";
      r.d(t, {
        E7: function () {
          return l;
        },
        QJ: function () {
          return i;
        },
        qq: function () {
          return o;
        },
        y2: function () {
          return s;
        },
        zo: function () {
          return function e(t, r) {
            if (Array.isArray(t) && Array.isArray(r)) return t.concat(r);
            if (
              ("string" == typeof t && "string" == typeof r) ||
              ("number" == typeof t && "number" == typeof r)
            )
              return t + r;
            if ("concat" in t && "function" == typeof t.concat)
              return t.concat(r);
            if ("object" == typeof t && "object" == typeof r) {
              let a = { ...t };
              for (let [t, n] of Object.entries(r))
                t in a && !Array.isArray(a[t])
                  ? (a[t] = e(a[t], n))
                  : (a[t] = n);
              return a;
            }
            throw Error(`Cannot concat ${typeof t} and ${typeof r}`);
          };
        },
      });
      var a = r(57452),
        n = r(82964);
      class i extends ReadableStream {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "reader", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            });
        }
        ensureReader() {
          this.reader || (this.reader = this.getReader());
        }
        async next() {
          this.ensureReader();
          try {
            let e = await this.reader.read();
            if (e.done)
              return this.reader.releaseLock(), { done: !0, value: void 0 };
            return { done: !1, value: e.value };
          } catch (e) {
            throw (this.reader.releaseLock(), e);
          }
        }
        async return() {
          if ((this.ensureReader(), this.locked)) {
            let e = this.reader.cancel();
            this.reader.releaseLock(), await e;
          }
          return { done: !0, value: void 0 };
        }
        async throw(e) {
          if ((this.ensureReader(), this.locked)) {
            let e = this.reader.cancel();
            this.reader.releaseLock(), await e;
          }
          throw e;
        }
        [Symbol.asyncIterator]() {
          return this;
        }
        async [Symbol.asyncDispose]() {
          await this.return();
        }
        static fromReadableStream(e) {
          let t = e.getReader();
          return new i({
            start: (e) =>
              (function r() {
                return t.read().then(({ done: t, value: a }) => {
                  if (t) {
                    e.close();
                    return;
                  }
                  return e.enqueue(a), r();
                });
              })(),
            cancel() {
              t.releaseLock();
            },
          });
        }
        static fromAsyncGenerator(e) {
          return new i({
            async pull(t) {
              let { value: r, done: a } = await e.next();
              a && t.close(), t.enqueue(r);
            },
            async cancel(t) {
              await e.return(t);
            },
          });
        }
      }
      function s(e, t = 2) {
        let r = Array.from({ length: t }, () => []);
        return r.map(async function* (t) {
          for (;;)
            if (0 === t.length) {
              let t = await e.next();
              for (let e of r) e.push(t);
            } else {
              if (t[0].done) return;
              yield t.shift().value;
            }
        });
      }
      class o {
        constructor(e) {
          Object.defineProperty(this, "generator", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
            Object.defineProperty(this, "setup", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "config", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "signal", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "firstResult", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "firstResultUsed", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !1,
            }),
            (this.generator = e.generator),
            (this.config = e.config),
            (this.signal = e.signal ?? this.config?.signal),
            (this.setup = new Promise((t, r) => {
              a.AO.runWithConfig(
                e.config,
                async () => {
                  (this.firstResult = e.generator.next()),
                    e.startSetup
                      ? this.firstResult.then(e.startSetup).then(t, r)
                      : this.firstResult.then((e) => t(void 0), r);
                },
                !0
              );
            }));
        }
        async next(...e) {
          return (this.signal?.throwIfAborted(), this.firstResultUsed)
            ? a.AO.runWithConfig(
                this.config,
                this.signal
                  ? async () => (0, n.E)(this.generator.next(...e), this.signal)
                  : async () => this.generator.next(...e),
                !0
              )
            : ((this.firstResultUsed = !0), this.firstResult);
        }
        async return(e) {
          return this.generator.return(e);
        }
        async throw(e) {
          return this.generator.throw(e);
        }
        [Symbol.asyncIterator]() {
          return this;
        }
        async [Symbol.asyncDispose]() {
          await this.return();
        }
      }
      async function l(e, t, r, a, ...n) {
        let i = new o({ generator: t, startSetup: r, signal: a }),
          s = await i.setup;
        return { output: e(i, s, ...n), setup: s };
      }
    },
    45772: function (e, t, r) {
      "use strict";
      let a, n;
      r.d(t, {
        b: function () {
          return p;
        },
        l: function () {
          return h;
        },
      });
      var i,
        s = r(79742),
        o = Object.defineProperty,
        l = class {
          specialTokens;
          inverseSpecialTokens;
          patStr;
          textEncoder = new TextEncoder();
          textDecoder = new TextDecoder("utf-8");
          rankMap = new Map();
          textMap = new Map();
          constructor(e, t) {
            for (let [t, r] of ((this.patStr = e.pat_str),
            Object.entries(
              e.bpe_ranks
                .split("\n")
                .filter(Boolean)
                .reduce((e, t) => {
                  let [r, a, ...n] = t.split(" "),
                    i = Number.parseInt(a, 10);
                  return n.forEach((t, r) => (e[t] = i + r)), e;
                }, {})
            ))) {
              let e = s.toByteArray(t);
              this.rankMap.set(e.join(","), r), this.textMap.set(r, e);
            }
            (this.specialTokens = { ...e.special_tokens, ...t }),
              (this.inverseSpecialTokens = Object.entries(
                this.specialTokens
              ).reduce(
                (e, [t, r]) => ((e[r] = this.textEncoder.encode(t)), e),
                {}
              ));
          }
          encode(e, t = [], r = "all") {
            let a = RegExp(this.patStr, "ug"),
              n = l.specialTokenRegex(Object.keys(this.specialTokens)),
              i = [],
              s = new Set("all" === t ? Object.keys(this.specialTokens) : t),
              o = new Set(
                "all" === r
                  ? Object.keys(this.specialTokens).filter((e) => !s.has(e))
                  : r
              );
            if (o.size > 0) {
              let t = l.specialTokenRegex([...o]),
                r = e.match(t);
              if (null != r)
                throw Error(
                  `The text contains a special token that is not allowed: ${r[0]}`
                );
            }
            let u = 0;
            for (;;) {
              let t = null,
                r = u;
              for (
                ;
                (n.lastIndex = r), !(null == (t = n.exec(e)) || s.has(t[0]));

              )
                r = t.index + 1;
              let o = t?.index ?? e.length;
              for (let t of e.substring(u, o).matchAll(a)) {
                let e = this.textEncoder.encode(t[0]),
                  r = this.rankMap.get(e.join(","));
                if (null != r) {
                  i.push(r);
                  continue;
                }
                i.push(
                  ...(function (e, t) {
                    return 1 === e.length
                      ? [t.get(e.join(","))]
                      : (function (e, t) {
                          let r = Array.from({ length: e.length }, (e, t) => ({
                            start: t,
                            end: t + 1,
                          }));
                          for (; r.length > 1; ) {
                            let a = null;
                            for (let n = 0; n < r.length - 1; n++) {
                              let i = e.slice(r[n].start, r[n + 1].end),
                                s = t.get(i.join(","));
                              null != s &&
                                (null == a || s < a[0]) &&
                                (a = [s, n]);
                            }
                            if (null != a) {
                              let e = a[1];
                              (r[e] = { start: r[e].start, end: r[e + 1].end }),
                                r.splice(e + 1, 1);
                            } else break;
                          }
                          return r;
                        })(e, t)
                          .map((r) => t.get(e.slice(r.start, r.end).join(",")))
                          .filter((e) => null != e);
                  })(e, this.rankMap)
                );
              }
              if (null == t) break;
              let l = this.specialTokens[t[0]];
              i.push(l), (u = t.index + t[0].length);
            }
            return i;
          }
          decode(e) {
            let t = [],
              r = 0;
            for (let a = 0; a < e.length; ++a) {
              let n = e[a],
                i = this.textMap.get(n) ?? this.inverseSpecialTokens[n];
              null != i && (t.push(i), (r += i.length));
            }
            let a = new Uint8Array(r),
              n = 0;
            for (let e of t) a.set(e, n), (n += e.length);
            return this.textDecoder.decode(a);
          }
        };
      (a = "symbol" != typeof (i = "specialTokenRegex") ? i + "" : i),
        (n = (e) =>
          RegExp(
            e.map((e) => e.replace(/[\\^$*+?.()|[\]{}]/g, "\\$&")).join("|"),
            "g"
          )),
        a in l
          ? o(l, a, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (l[a] = n);
      var u = r(99636);
      let c = {},
        d = new u.L({});
      async function h(e) {
        return (
          e in c ||
            (c[e] = d
              .fetch(`https://tiktoken.pages.dev/js/${e}.json`)
              .then((e) => e.json())
              .then((e) => new l(e))
              .catch((t) => {
                throw (delete c[e], t);
              })),
          await c[e]
        );
      }
      async function p(e) {
        return h(
          (function (e) {
            switch (e) {
              case "gpt2":
                return "gpt2";
              case "code-cushman-001":
              case "code-cushman-002":
              case "code-davinci-001":
              case "code-davinci-002":
              case "cushman-codex":
              case "davinci-codex":
              case "davinci-002":
              case "text-davinci-002":
              case "text-davinci-003":
                return "p50k_base";
              case "code-davinci-edit-001":
              case "text-davinci-edit-001":
                return "p50k_edit";
              case "ada":
              case "babbage":
              case "babbage-002":
              case "code-search-ada-code-001":
              case "code-search-babbage-code-001":
              case "curie":
              case "davinci":
              case "text-ada-001":
              case "text-babbage-001":
              case "text-curie-001":
              case "text-davinci-001":
              case "text-search-ada-doc-001":
              case "text-search-babbage-doc-001":
              case "text-search-curie-doc-001":
              case "text-search-davinci-doc-001":
              case "text-similarity-ada-001":
              case "text-similarity-babbage-001":
              case "text-similarity-curie-001":
              case "text-similarity-davinci-001":
                return "r50k_base";
              case "gpt-3.5-turbo-instruct-0914":
              case "gpt-3.5-turbo-instruct":
              case "gpt-3.5-turbo-16k-0613":
              case "gpt-3.5-turbo-16k":
              case "gpt-3.5-turbo-0613":
              case "gpt-3.5-turbo-0301":
              case "gpt-3.5-turbo":
              case "gpt-4-32k-0613":
              case "gpt-4-32k-0314":
              case "gpt-4-32k":
              case "gpt-4-0613":
              case "gpt-4-0314":
              case "gpt-4":
              case "gpt-3.5-turbo-1106":
              case "gpt-35-turbo":
              case "gpt-4-1106-preview":
              case "gpt-4-vision-preview":
              case "gpt-3.5-turbo-0125":
              case "gpt-4-turbo":
              case "gpt-4-turbo-2024-04-09":
              case "gpt-4-turbo-preview":
              case "gpt-4-0125-preview":
              case "text-embedding-ada-002":
              case "text-embedding-3-small":
              case "text-embedding-3-large":
                return "cl100k_base";
              case "gpt-4o":
              case "gpt-4o-2024-05-13":
              case "gpt-4o-2024-08-06":
              case "gpt-4o-mini-2024-07-18":
              case "gpt-4o-mini":
              case "o1-mini":
              case "o1-preview":
              case "o1-preview-2024-09-12":
              case "o1-mini-2024-09-12":
              case "chatgpt-4o-latest":
              case "gpt-4o-realtime":
              case "gpt-4o-realtime-preview-2024-10-01":
                return "o200k_base";
              default:
                throw Error("Unknown model");
            }
          })(e)
        );
      }
    },
    80697: function (e, t, r) {
      "use strict";
      function a(e) {
        return "function" == typeof e?.parse;
      }
      r.d(t, {
        F: function () {
          return a;
        },
      });
    },
    82905: function (e, t, r) {
      "use strict";
      r.d(t, {
        F1: function () {
          return a.F1;
        },
        er: function () {
          return a.er;
        },
      });
      var a = r(402);
    },
    95280: function (e, t, r) {
      "use strict";
      r.d(t, {
        QU: function () {
          return f;
        },
      });
      var a = r(9321),
        n = r(69662),
        i = r(66305),
        s = r(402),
        o = r(91490),
        l = r(50648),
        u = r(89208),
        c = r(63035),
        d = r(16076),
        h = r(84572),
        p = r(80697);
      class f extends s.qV {
        constructor(e) {
          super(e),
            Object.defineProperty(this, "lc_namespace", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: ["langchain", "chat_models", this._llmType()],
            });
        }
        _separateRunnableConfigFromCallOptionsCompat(e) {
          let [t, r] = super._separateRunnableConfigFromCallOptions(e);
          return (r.signal = t.signal), [t, r];
        }
        async invoke(e, t) {
          let r = f._convertInputToPromptValue(e);
          return (await this.generatePrompt([r], t, t?.callbacks))
            .generations[0][0].message;
        }
        async *_streamResponseChunks(e, t, r) {
          throw Error("Not implemented.");
        }
        async *_streamIterator(e, t) {
          if (this._streamResponseChunks === f.prototype._streamResponseChunks)
            yield this.invoke(e, t);
          else {
            let r, a;
            let i = f._convertInputToPromptValue(e).toChatMessages(),
              [s, l] = this._separateRunnableConfigFromCallOptionsCompat(t),
              u = { ...s.metadata, ...this.getLsParams(l) },
              c = await o.Ye.configure(
                s.callbacks,
                this.callbacks,
                s.tags,
                this.tags,
                u,
                this.metadata,
                { verbose: this.verbose }
              ),
              d = {
                options: l,
                invocation_params: this?.invocationParams(l),
                batch_size: 1,
              },
              h = await c?.handleChatModelStart(
                this.toJSON(),
                [i],
                s.runId,
                void 0,
                d,
                void 0,
                void 0,
                s.runName
              );
            try {
              for await (let e of this._streamResponseChunks(i, l, h?.[0])) {
                if (null == e.message.id) {
                  let t = h?.at(0)?.runId;
                  null != t && e.message._updateId(`run-${t}`);
                }
                (e.message.response_metadata = {
                  ...e.generationInfo,
                  ...e.message.response_metadata,
                }),
                  yield e.message,
                  (r = r ? r.concat(e) : e),
                  (0, n.wT)(e.message) &&
                    void 0 !== e.message.usage_metadata &&
                    (a = {
                      tokenUsage: {
                        promptTokens: e.message.usage_metadata.input_tokens,
                        completionTokens:
                          e.message.usage_metadata.output_tokens,
                        totalTokens: e.message.usage_metadata.total_tokens,
                      },
                    });
              }
            } catch (e) {
              throw (
                (await Promise.all((h ?? []).map((t) => t?.handleLLMError(e))),
                e)
              );
            }
            await Promise.all(
              (h ?? []).map((e) =>
                e?.handleLLMEnd({ generations: [[r]], llmOutput: a })
              )
            );
          }
        }
        getLsParams(e) {
          let t = this.getName().startsWith("Chat")
            ? this.getName().replace("Chat", "")
            : this.getName();
          return { ls_model_type: "chat", ls_stop: e.stop, ls_provider: t };
        }
        async _generateUncached(e, t, r) {
          let a = e.map((e) => e.map(n.E1)),
            s = { ...r.metadata, ...this.getLsParams(t) },
            l = await o.Ye.configure(
              r.callbacks,
              this.callbacks,
              r.tags,
              this.tags,
              s,
              this.metadata,
              { verbose: this.verbose }
            ),
            h = {
              options: t,
              invocation_params: this?.invocationParams(t),
              batch_size: 1,
            },
            p = await l?.handleChatModelStart(
              this.toJSON(),
              a,
              r.runId,
              void 0,
              h,
              void 0,
              void 0,
              r.runName
            ),
            m = [],
            g = [];
          if (
            p?.[0].handlers.find((e) => u.C(e) || c.ky(e)) &&
            1 === a.length &&
            this._streamResponseChunks !== f.prototype._streamResponseChunks
          )
            try {
              let e, r;
              for await (let i of await this._streamResponseChunks(
                a[0],
                t,
                p?.[0]
              )) {
                if (null == i.message.id) {
                  let e = p?.at(0)?.runId;
                  null != e && i.message._updateId(`run-${e}`);
                }
                (e = void 0 === e ? i : (0, d.zo)(e, i)),
                  (0, n.wT)(i.message) &&
                    void 0 !== i.message.usage_metadata &&
                    (r = {
                      tokenUsage: {
                        promptTokens: i.message.usage_metadata.input_tokens,
                        completionTokens:
                          i.message.usage_metadata.output_tokens,
                        totalTokens: i.message.usage_metadata.total_tokens,
                      },
                    });
              }
              if (void 0 === e)
                throw Error("Received empty response from chat model call.");
              m.push([e]),
                await p?.[0].handleLLMEnd({ generations: m, llmOutput: r });
            } catch (e) {
              throw (await p?.[0].handleLLMError(e), e);
            }
          else {
            let e = await Promise.allSettled(
              a.map((e, r) =>
                this._generate(e, { ...t, promptIndex: r }, p?.[r])
              )
            );
            await Promise.all(
              e.map(async (e, t) => {
                if ("fulfilled" !== e.status)
                  return (
                    await p?.[t]?.handleLLMError(e.reason),
                    Promise.reject(e.reason)
                  );
                {
                  let r = e.value;
                  for (let e of r.generations) {
                    if (null == e.message.id) {
                      let t = p?.at(0)?.runId;
                      null != t && e.message._updateId(`run-${t}`);
                    }
                    e.message.response_metadata = {
                      ...e.generationInfo,
                      ...e.message.response_metadata,
                    };
                  }
                  return (
                    1 === r.generations.length &&
                      (r.generations[0].message.response_metadata = {
                        ...r.llmOutput,
                        ...r.generations[0].message.response_metadata,
                      }),
                    (m[t] = r.generations),
                    (g[t] = r.llmOutput),
                    p?.[t]?.handleLLMEnd({
                      generations: [r.generations],
                      llmOutput: r.llmOutput,
                    })
                  );
                }
              })
            );
          }
          let y = {
            generations: m,
            llmOutput: g.length ? this._combineLLMOutput?.(...g) : void 0,
          };
          return (
            Object.defineProperty(y, i.WH, {
              value: p ? { runIds: p?.map((e) => e.runId) } : void 0,
              configurable: !0,
            }),
            y
          );
        }
        async _generateCached({
          messages: e,
          cache: t,
          llmStringKey: r,
          parsedOptions: a,
          handledOptions: s,
        }) {
          let l = e.map((e) => e.map(n.E1)),
            u = { ...s.metadata, ...this.getLsParams(a) },
            c = await o.Ye.configure(
              s.callbacks,
              this.callbacks,
              s.tags,
              this.tags,
              u,
              this.metadata,
              { verbose: this.verbose }
            ),
            d = {
              options: a,
              invocation_params: this?.invocationParams(a),
              batch_size: 1,
              cached: !0,
            },
            h = await c?.handleChatModelStart(
              this.toJSON(),
              l,
              s.runId,
              void 0,
              d,
              void 0,
              void 0,
              s.runName
            ),
            p = [],
            m = (
              await Promise.allSettled(
                l.map(async (e, a) => {
                  let n = f._convertInputToPromptValue(e).toString(),
                    i = await t.lookup(n, r);
                  return null == i && p.push(a), i;
                })
              )
            )
              .map((e, t) => ({ result: e, runManager: h?.[t] }))
              .filter(
                ({ result: e }) =>
                  ("fulfilled" === e.status && null != e.value) ||
                  "rejected" === e.status
              ),
            g = [];
          await Promise.all(
            m.map(async ({ result: e, runManager: t }, r) => {
              if ("fulfilled" !== e.status)
                return (
                  await t?.handleLLMError(e.reason), Promise.reject(e.reason)
                );
              {
                let a = e.value;
                return (
                  (g[r] = a),
                  a.length && (await t?.handleLLMNewToken(a[0].text)),
                  t?.handleLLMEnd({ generations: [a] })
                );
              }
            })
          );
          let y = { generations: g, missingPromptIndices: p };
          return (
            Object.defineProperty(y, i.WH, {
              value: h ? { runIds: h?.map((e) => e.runId) } : void 0,
              configurable: !0,
            }),
            y
          );
        }
        async generate(e, t, r) {
          let a;
          a = Array.isArray(t) ? { stop: t } : t;
          let i = e.map((e) => e.map(n.E1)),
            [s, o] = this._separateRunnableConfigFromCallOptionsCompat(a);
          if (((s.callbacks = s.callbacks ?? r), !this.cache))
            return this._generateUncached(i, o, s);
          let { cache: l } = this,
            u = this._getSerializedCacheKeyParametersForCall(o),
            { generations: c, missingPromptIndices: d } =
              await this._generateCached({
                messages: i,
                cache: l,
                llmStringKey: u,
                parsedOptions: o,
                handledOptions: s,
              }),
            h = {};
          if (d.length > 0) {
            let e = await this._generateUncached(
              d.map((e) => i[e]),
              o,
              s
            );
            await Promise.all(
              e.generations.map(async (e, t) => {
                let r = d[t];
                c[r] = e;
                let a = f._convertInputToPromptValue(i[r]).toString();
                return l.update(a, u, e);
              })
            ),
              (h = e.llmOutput ?? {});
          }
          return { generations: c, llmOutput: h };
        }
        invocationParams(e) {
          return {};
        }
        _modelType() {
          return "base_chat_model";
        }
        serialize() {
          return {
            ...this.invocationParams(),
            _type: this._llmType(),
            _model: this._modelType(),
          };
        }
        async generatePrompt(e, t, r) {
          let a = e.map((e) => e.toChatMessages());
          return this.generate(a, t, r);
        }
        async call(e, t, r) {
          return (await this.generate([e.map(n.E1)], t, r)).generations[0][0]
            .message;
        }
        async callPrompt(e, t, r) {
          let a = e.toChatMessages();
          return this.call(a, t, r);
        }
        async predictMessages(e, t, r) {
          return this.call(e, t, r);
        }
        async predict(e, t, r) {
          let a = new n.xk(e),
            i = await this.call([a], t, r);
          if ("string" != typeof i.content)
            throw Error("Cannot use predict when output is not a string.");
          return i.content;
        }
        withStructuredOutput(e, t) {
          let r;
          if ("function" != typeof this.bindTools)
            throw Error(
              'Chat model must implement ".bindTools()" to use withStructuredOutput.'
            );
          if (t?.strict)
            throw Error(
              '"strict" mode is not supported for this model by default.'
            );
          let n = t?.name,
            i = e.description ?? "A function available to call.",
            s = t?.method,
            o = t?.includeRaw;
          if ("jsonMode" === s)
            throw Error(
              'Base withStructuredOutput implementation only supports "functionCalling" as a method.'
            );
          let u = n ?? "extract";
          (0, p.F)(e)
            ? (r = [
                {
                  type: "function",
                  function: {
                    name: u,
                    description: i,
                    parameters: (0, a.Y_)(e),
                  },
                },
              ])
            : ("name" in e && (u = e.name),
              (r = [
                {
                  type: "function",
                  function: { name: u, description: i, parameters: e },
                },
              ]));
          let c = this.bindTools(r),
            d = l.Y8.from((e) => {
              if (!e.tool_calls || 0 === e.tool_calls.length)
                throw Error("No tool calls found in the response.");
              let t = e.tool_calls.find((e) => e.name === u);
              if (!t) throw Error(`No tool call found with name ${u}.`);
              return t.args;
            });
          if (!o) return c.pipe(d).withConfig({ runName: "StructuredOutput" });
          let f = h.s.assign({ parsed: (e, t) => d.invoke(e.raw, t) }),
            m = h.s.assign({ parsed: () => null }),
            g = f.withFallbacks({ fallbacks: [m] });
          return l.lW
            .from([{ raw: c }, g])
            .withConfig({ runName: "StructuredOutputRunnable" });
        }
      }
    },
    26679: function (e, t, r) {
      "use strict";
      r.d(t, {
        Cr: function () {
          return a.Cr;
        },
        GC: function () {
          return a.GC;
        },
        HD: function () {
          return a.HD;
        },
        J: function () {
          return a.J;
        },
        Oy: function () {
          return a.Oy;
        },
        Xz: function () {
          return a.Xz;
        },
        Z0: function () {
          return a.Z0;
        },
        gY: function () {
          return a.gY;
        },
        ro: function () {
          return a.ro;
        },
        xk: function () {
          return a.xk;
        },
        xq: function () {
          return a.xq;
        },
      });
      var a = r(69662);
    },
    85248: function (e, t, r) {
      "use strict";
      r.d(t, {
        tw: function () {
          return a.tw;
        },
        Qh: function () {
          return o.Qh;
        },
        dS: function () {
          return a.dS;
        },
        K: function () {
          return s;
        },
      });
      var a = r(61223);
      r(14713);
      var n = r(1604),
        i = r(9321);
      class s extends a.bI {
        static lc_name() {
          return "StructuredOutputParser";
        }
        toJSON() {
          return this.toJSONNotImplemented();
        }
        constructor(e) {
          super(e),
            Object.defineProperty(this, "schema", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: e,
            }),
            Object.defineProperty(this, "lc_namespace", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: ["langchain", "output_parsers", "structured"],
            });
        }
        static fromZodSchema(e) {
          return new this(e);
        }
        static fromNamesAndDescriptions(e) {
          return new this(
            n.z.object(
              Object.fromEntries(
                Object.entries(e).map(([e, t]) => [e, n.z.string().describe(t)])
              )
            )
          );
        }
        getFormatInstructions() {
          return `You must format your output as a JSON value that adheres to a given "JSON Schema" instance.

"JSON Schema" is a declarative language that allows you to annotate and validate JSON documents.

For example, the example "JSON Schema" instance {{"properties": {{"foo": {{"description": "a list of test words", "type": "array", "items": {{"type": "string"}}}}}}, "required": ["foo"]}}}}
would match an object with one required property, "foo". The "type" property specifies "foo" must be an "array", and the "description" property semantically describes it as "a list of test words". The items within "foo" must be strings.
Thus, the object {{"foo": ["bar", "baz"]}} is a well-formatted instance of this example "JSON Schema". The object {{"properties": {{"foo": ["bar", "baz"]}}}} is not well-formatted.

Your output will be parsed and type-checked according to the provided schema instance, so make sure all fields in your output match the schema exactly and there are no trailing commas!

Here is the JSON Schema instance your output must adhere to. Include the enclosing markdown codeblock:
\`\`\`json
${JSON.stringify((0, i.Y_)(this.schema))}
\`\`\`
`;
        }
        async parse(e) {
          try {
            let t = (
              e.includes("```") ? e.trim().split(/```(?:json)?/)[1] : e.trim()
            )
              .replace(/"([^"\\]*(\\.[^"\\]*)*)"/g, (e, t) => {
                let r = t.replace(/\n/g, "\\n");
                return `"${r}"`;
              })
              .replace(/\n/g, "");
            return await this.schema.parseAsync(JSON.parse(t));
          } catch (t) {
            throw new a.dS(`Failed to parse. Text: "${e}". Error: ${t}`, e);
          }
        }
      }
      var o = r(99701);
      r(26355);
      let l = (e) => {
        if (0 === Object.keys(e).length) return {};
        let t = {};
        return (
          e.children.length > 0
            ? (t[e.name] = e.children.map(l))
            : (t[e.name] = e.text ?? void 0),
          t
        );
      };
    },
    1381: function (e, t, r) {
      "use strict";
      r.d(t, {
        Ls: function () {
          return a.Ls;
        },
        b6: function () {
          return a.b6;
        },
      });
      var a = r(66305);
    },
    4670: function (e, t, r) {
      "use strict";
      r.d(t, {
        lW: function () {
          return a.lW;
        },
        sk: function () {
          return a.sk;
        },
      });
      var a = r(71902);
    },
    44018: function (e, t, r) {
      "use strict";
      r.d(t, {
        lS: function () {
          return a.lS;
        },
      });
      var a = r(6374);
    },
    57606: function (e, t, r) {
      "use strict";
      r.d(t, {
        sU: function () {
          return s;
        },
        iW: function () {
          return o;
        },
      });
      var a = r(9321),
        n = r(50648),
        i = r(80697);
      function s(e, t) {
        let r = "number" == typeof t ? void 0 : t;
        return {
          name: e.name,
          description: e.description,
          parameters: (0, a.Y_)(e.schema),
          ...(r?.strict !== void 0 ? { strict: r.strict } : {}),
        };
      }
      function o(e) {
        return (
          (!!e &&
            "object" == typeof e &&
            "name" in e &&
            "schema" in e &&
            (0, i.F)(e.schema)) ||
          (void 0 !== e &&
            n.eq.isRunnable(e) &&
            "lc_name" in e.constructor &&
            "function" == typeof e.constructor.lc_name &&
            "RunnableToolLike" === e.constructor.lc_name()) ||
          (void 0 !== e && Array.isArray(e.lc_namespace))
        );
      }
    },
    2570: function (e, t, r) {
      "use strict";
      let a, n, i, s, o, l, u, c, d, h, p;
      let f = "RFC3986",
        m = {
          RFC1738: (e) => String(e).replace(/%20/g, "+"),
          RFC3986: (e) => String(e),
        };
      Object.prototype.hasOwnProperty;
      let g = Array.isArray,
        y = (() => {
          let e = [];
          for (let t = 0; t < 256; ++t)
            e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
          return e;
        })();
      function b(e, t) {
        if (g(e)) {
          let r = [];
          for (let a = 0; a < e.length; a += 1) r.push(t(e[a]));
          return r;
        }
        return t(e);
      }
      let _ = Object.prototype.hasOwnProperty,
        v = {
          brackets: (e) => String(e) + "[]",
          comma: "comma",
          indices: (e, t) => String(e) + "[" + t + "]",
          repeat: (e) => String(e),
        },
        w = Array.isArray,
        E = Array.prototype.push,
        x = function (e, t) {
          E.apply(e, w(t) ? t : [t]);
        },
        O = Date.prototype.toISOString,
        k = {
          addQueryPrefix: !1,
          allowDots: !1,
          allowEmptyArrays: !1,
          arrayFormat: "indices",
          charset: "utf-8",
          charsetSentinel: !1,
          delimiter: "&",
          encode: !0,
          encodeDotInKeys: !1,
          encoder: (e, t, r, a, n) => {
            if (0 === e.length) return e;
            let i = e;
            if (
              ("symbol" == typeof e
                ? (i = Symbol.prototype.toString.call(e))
                : "string" != typeof e && (i = String(e)),
              "iso-8859-1" === r)
            )
              return escape(i).replace(/%u[0-9a-f]{4}/gi, function (e) {
                return "%26%23" + parseInt(e.slice(2), 16) + "%3B";
              });
            let s = "";
            for (let e = 0; e < i.length; e += 1024) {
              let t = i.length >= 1024 ? i.slice(e, e + 1024) : i,
                r = [];
              for (let e = 0; e < t.length; ++e) {
                let a = t.charCodeAt(e);
                if (
                  45 === a ||
                  46 === a ||
                  95 === a ||
                  126 === a ||
                  (a >= 48 && a <= 57) ||
                  (a >= 65 && a <= 90) ||
                  (a >= 97 && a <= 122) ||
                  ("RFC1738" === n && (40 === a || 41 === a))
                ) {
                  r[r.length] = t.charAt(e);
                  continue;
                }
                if (a < 128) {
                  r[r.length] = y[a];
                  continue;
                }
                if (a < 2048) {
                  r[r.length] = y[192 | (a >> 6)] + y[128 | (63 & a)];
                  continue;
                }
                if (a < 55296 || a >= 57344) {
                  r[r.length] =
                    y[224 | (a >> 12)] +
                    y[128 | ((a >> 6) & 63)] +
                    y[128 | (63 & a)];
                  continue;
                }
                (e += 1),
                  (a = 65536 + (((1023 & a) << 10) | (1023 & t.charCodeAt(e)))),
                  (r[r.length] =
                    y[240 | (a >> 18)] +
                    y[128 | ((a >> 12) & 63)] +
                    y[128 | ((a >> 6) & 63)] +
                    y[128 | (63 & a)]);
              }
              s += r.join("");
            }
            return s;
          },
          encodeValuesOnly: !1,
          format: f,
          formatter: m[f],
          indices: !1,
          serializeDate: (e) => O.call(e),
          skipNulls: !1,
          strictNullHandling: !1,
        },
        S = {},
        A = "4.72.0",
        P = !1;
      class I {
        constructor(e) {
          this.body = e;
        }
        get [Symbol.toStringTag]() {
          return "MultipartBody";
        }
      }
      i ||
        (function (e, t = { auto: !1 }) {
          if (P)
            throw Error(
              `you must \`import 'openai/shims/${e.kind}'\` before importing anything else from openai`
            );
          if (i)
            throw Error(
              `can't \`import 'openai/shims/${e.kind}'\` after \`import 'openai/shims/${i}'\``
            );
          (P = t.auto),
            (i = e.kind),
            (s = e.fetch),
            e.Request,
            e.Response,
            e.Headers,
            (o = e.FormData),
            e.Blob,
            (l = e.File),
            (u = e.ReadableStream),
            (c = e.getMultipartRequestOptions),
            (d = e.getDefaultAgent),
            (h = e.fileFromPath),
            (p = e.isFsReadStream);
        })(
          (function ({ manuallyImported: e } = {}) {
            let t, r, a, n;
            let i = e
              ? "You may need to use polyfills"
              : `Add one of these imports before your first \`import … from 'openai'\`:
- \`import 'openai/shims/node'\` (if you're running on Node)
- \`import 'openai/shims/web'\` (otherwise)
`;
            try {
              (t = fetch), (r = Request), (a = Response), (n = Headers);
            } catch (e) {
              throw Error(
                `this environment is missing the following Web Fetch API type: ${e.message}. ${i}`
              );
            }
            return {
              kind: "web",
              fetch: t,
              Request: r,
              Response: a,
              Headers: n,
              FormData:
                "undefined" != typeof FormData
                  ? FormData
                  : class {
                      constructor() {
                        throw Error(
                          `file uploads aren't supported in this environment yet as 'FormData' is undefined. ${i}`
                        );
                      }
                    },
              Blob:
                "undefined" != typeof Blob
                  ? Blob
                  : class {
                      constructor() {
                        throw Error(
                          `file uploads aren't supported in this environment yet as 'Blob' is undefined. ${i}`
                        );
                      }
                    },
              File:
                "undefined" != typeof File
                  ? File
                  : class {
                      constructor() {
                        throw Error(
                          `file uploads aren't supported in this environment yet as 'File' is undefined. ${i}`
                        );
                      }
                    },
              ReadableStream:
                "undefined" != typeof ReadableStream
                  ? ReadableStream
                  : class {
                      constructor() {
                        throw Error(
                          `streaming isn't supported in this environment yet as 'ReadableStream' is undefined. ${i}`
                        );
                      }
                    },
              getMultipartRequestOptions: async (e, t) => ({
                ...t,
                body: new I(e),
              }),
              getDefaultAgent: (e) => void 0,
              fileFromPath: () => {
                throw Error(
                  "The `fileFromPath` function is only supported in Node. See the README for more details: https://www.github.com/openai/openai-node#file-uploads"
                );
              },
              isFsReadStream: (e) => !1,
            };
          })(),
          { auto: !0 }
        );
      class T extends Error {}
      class R extends T {
        constructor(e, t, r, a) {
          super(`${R.makeMessage(e, t, r)}`),
            (this.status = e),
            (this.headers = a),
            (this.request_id = a?.["x-request-id"]),
            (this.error = t),
            (this.code = t?.code),
            (this.param = t?.param),
            (this.type = t?.type);
        }
        static makeMessage(e, t, r) {
          let a = t?.message
            ? "string" == typeof t.message
              ? t.message
              : JSON.stringify(t.message)
            : t
            ? JSON.stringify(t)
            : r;
          return e && a
            ? `${e} ${a}`
            : e
            ? `${e} status code (no body)`
            : a || "(no status code or body)";
        }
        static generate(e, t, r, a) {
          if (!e) return new j({ message: r, cause: tS(t) });
          let n = t?.error;
          return 400 === e
            ? new N(e, n, r, a)
            : 401 === e
            ? new L(e, n, r, a)
            : 403 === e
            ? new M(e, n, r, a)
            : 404 === e
            ? new U(e, n, r, a)
            : 409 === e
            ? new D(e, n, r, a)
            : 422 === e
            ? new F(e, n, r, a)
            : 429 === e
            ? new Z(e, n, r, a)
            : e >= 500
            ? new B(e, n, r, a)
            : new R(e, n, r, a);
        }
      }
      class $ extends R {
        constructor({ message: e } = {}) {
          super(void 0, void 0, e || "Request was aborted.", void 0),
            (this.status = void 0);
        }
      }
      class j extends R {
        constructor({ message: e, cause: t }) {
          super(void 0, void 0, e || "Connection error.", void 0),
            (this.status = void 0),
            t && (this.cause = t);
        }
      }
      class C extends j {
        constructor({ message: e } = {}) {
          super({ message: e ?? "Request timed out." });
        }
      }
      class N extends R {
        constructor() {
          super(...arguments), (this.status = 400);
        }
      }
      class L extends R {
        constructor() {
          super(...arguments), (this.status = 401);
        }
      }
      class M extends R {
        constructor() {
          super(...arguments), (this.status = 403);
        }
      }
      class U extends R {
        constructor() {
          super(...arguments), (this.status = 404);
        }
      }
      class D extends R {
        constructor() {
          super(...arguments), (this.status = 409);
        }
      }
      class F extends R {
        constructor() {
          super(...arguments), (this.status = 422);
        }
      }
      class Z extends R {
        constructor() {
          super(...arguments), (this.status = 429);
        }
      }
      class B extends R {}
      class q extends T {
        constructor() {
          super(
            "Could not parse response content as the length limit was reached"
          );
        }
      }
      class H extends T {
        constructor() {
          super(
            "Could not parse response content as the request was rejected by the content filter"
          );
        }
      }
      var z,
        W,
        J,
        V,
        G,
        X,
        K,
        Q,
        Y,
        ee,
        et,
        er,
        ea,
        en,
        ei,
        es,
        eo,
        el,
        eu,
        ec,
        ed,
        eh,
        ep,
        ef,
        em,
        eg,
        ey,
        eb,
        e_,
        ev,
        ew,
        eE,
        ex,
        eO,
        ek,
        eS,
        eA,
        eP,
        eI,
        eT,
        eR,
        e$,
        ej,
        eC,
        eN,
        eL,
        eM,
        eU,
        eD,
        eF,
        eZ,
        eB,
        eq,
        eH,
        ez,
        eW,
        eJ = r(48764).Buffer;
      class eV {
        constructor() {
          (this.buffer = []), (this.trailingCR = !1);
        }
        decode(e) {
          let t = this.decodeText(e);
          if (
            (this.trailingCR && ((t = "\r" + t), (this.trailingCR = !1)),
            t.endsWith("\r") && ((this.trailingCR = !0), (t = t.slice(0, -1))),
            !t)
          )
            return [];
          let r = eV.NEWLINE_CHARS.has(t[t.length - 1] || ""),
            a = t.split(eV.NEWLINE_REGEXP);
          return (r && a.pop(), 1 !== a.length || r)
            ? (this.buffer.length > 0 &&
                ((a = [this.buffer.join("") + a[0], ...a.slice(1)]),
                (this.buffer = [])),
              r || (this.buffer = [a.pop() || ""]),
              a)
            : (this.buffer.push(a[0]), []);
        }
        decodeText(e) {
          if (null == e) return "";
          if ("string" == typeof e) return e;
          if (void 0 !== eJ) {
            if (e instanceof eJ) return e.toString();
            if (e instanceof Uint8Array) return eJ.from(e).toString();
            throw new T(
              `Unexpected: received non-Uint8Array (${e.constructor.name}) stream chunk in an environment with a global "Buffer" defined, which this library assumes to be Node. Please report this error.`
            );
          }
          if ("undefined" != typeof TextDecoder) {
            if (e instanceof Uint8Array || e instanceof ArrayBuffer)
              return (
                this.textDecoder ??
                  (this.textDecoder = new TextDecoder("utf8")),
                this.textDecoder.decode(e)
              );
            throw new T(
              `Unexpected: received non-Uint8Array/ArrayBuffer (${e.constructor.name}) in a web platform. Please report this error.`
            );
          }
          throw new T(
            "Unexpected: neither Buffer nor TextDecoder are available as globals. Please report this error."
          );
        }
        flush() {
          if (!this.buffer.length && !this.trailingCR) return [];
          let e = [this.buffer.join("")];
          return (this.buffer = []), (this.trailingCR = !1), e;
        }
      }
      (eV.NEWLINE_CHARS = new Set(["\n", "\r"])),
        (eV.NEWLINE_REGEXP = /\r\n|[\n\r]/g);
      class eG {
        constructor(e, t) {
          (this.iterator = e), (this.controller = t);
        }
        static fromSSEResponse(e, t) {
          let r = !1;
          return new eG(async function* () {
            if (r)
              throw Error(
                "Cannot iterate over a consumed stream, use `.tee()` to split the stream."
              );
            r = !0;
            let a = !1;
            try {
              for await (let r of eX(e, t))
                if (!a) {
                  if (r.data.startsWith("[DONE]")) {
                    a = !0;
                    continue;
                  }
                  if (null === r.event) {
                    let e;
                    try {
                      e = JSON.parse(r.data);
                    } catch (e) {
                      throw (
                        (console.error(
                          "Could not parse message into JSON:",
                          r.data
                        ),
                        console.error("From chunk:", r.raw),
                        e)
                      );
                    }
                    if (e && e.error)
                      throw new R(void 0, e.error, void 0, void 0);
                    yield e;
                  } else {
                    let e;
                    try {
                      e = JSON.parse(r.data);
                    } catch (e) {
                      throw (
                        (console.error(
                          "Could not parse message into JSON:",
                          r.data
                        ),
                        console.error("From chunk:", r.raw),
                        e)
                      );
                    }
                    if ("error" == r.event)
                      throw new R(void 0, e.error, e.message, void 0);
                    yield { event: r.event, data: e };
                  }
                }
              a = !0;
            } catch (e) {
              if (e instanceof Error && "AbortError" === e.name) return;
              throw e;
            } finally {
              a || t.abort();
            }
          }, t);
        }
        static fromReadableStream(e, t) {
          let r = !1;
          async function* a() {
            let t = new eV();
            for await (let r of eY(e)) for (let e of t.decode(r)) yield e;
            for (let e of t.flush()) yield e;
          }
          return new eG(async function* () {
            if (r)
              throw Error(
                "Cannot iterate over a consumed stream, use `.tee()` to split the stream."
              );
            r = !0;
            let e = !1;
            try {
              for await (let t of a()) !e && t && (yield JSON.parse(t));
              e = !0;
            } catch (e) {
              if (e instanceof Error && "AbortError" === e.name) return;
              throw e;
            } finally {
              e || t.abort();
            }
          }, t);
        }
        [Symbol.asyncIterator]() {
          return this.iterator();
        }
        tee() {
          let e = [],
            t = [],
            r = this.iterator(),
            a = (a) => ({
              next: () => {
                if (0 === a.length) {
                  let a = r.next();
                  e.push(a), t.push(a);
                }
                return a.shift();
              },
            });
          return [
            new eG(() => a(e), this.controller),
            new eG(() => a(t), this.controller),
          ];
        }
        toReadableStream() {
          let e;
          let t = this,
            r = new TextEncoder();
          return new u({
            async start() {
              e = t[Symbol.asyncIterator]();
            },
            async pull(t) {
              try {
                let { value: a, done: n } = await e.next();
                if (n) return t.close();
                let i = r.encode(JSON.stringify(a) + "\n");
                t.enqueue(i);
              } catch (e) {
                t.error(e);
              }
            },
            async cancel() {
              await e.return?.();
            },
          });
        }
      }
      async function* eX(e, t) {
        if (!e.body)
          throw (
            (t.abort(),
            new T("Attempted to iterate over a response with no body"))
          );
        let r = new eQ(),
          a = new eV();
        for await (let t of eK(eY(e.body)))
          for (let e of a.decode(t)) {
            let t = r.decode(e);
            t && (yield t);
          }
        for (let e of a.flush()) {
          let t = r.decode(e);
          t && (yield t);
        }
      }
      async function* eK(e) {
        let t = new Uint8Array();
        for await (let r of e) {
          let e;
          if (null == r) continue;
          let a =
              r instanceof ArrayBuffer
                ? new Uint8Array(r)
                : "string" == typeof r
                ? new TextEncoder().encode(r)
                : r,
            n = new Uint8Array(t.length + a.length);
          for (
            n.set(t), n.set(a, t.length), t = n;
            -1 !==
            (e = (function (e) {
              for (let t = 0; t < e.length - 2; t++) {
                if (
                  (10 === e[t] && 10 === e[t + 1]) ||
                  (13 === e[t] && 13 === e[t + 1])
                )
                  return t + 2;
                if (
                  13 === e[t] &&
                  10 === e[t + 1] &&
                  t + 3 < e.length &&
                  13 === e[t + 2] &&
                  10 === e[t + 3]
                )
                  return t + 4;
              }
              return -1;
            })(t));

          )
            yield t.slice(0, e), (t = t.slice(e));
        }
        t.length > 0 && (yield t);
      }
      class eQ {
        constructor() {
          (this.event = null), (this.data = []), (this.chunks = []);
        }
        decode(e) {
          if ((e.endsWith("\r") && (e = e.substring(0, e.length - 1)), !e)) {
            if (!this.event && !this.data.length) return null;
            let e = {
              event: this.event,
              data: this.data.join("\n"),
              raw: this.chunks,
            };
            return (this.event = null), (this.data = []), (this.chunks = []), e;
          }
          if ((this.chunks.push(e), e.startsWith(":"))) return null;
          let [t, r, a] = (function (e, t) {
            let r = e.indexOf(":");
            return -1 !== r
              ? [e.substring(0, r), ":", e.substring(r + t.length)]
              : [e, "", ""];
          })(e, ":");
          return (
            a.startsWith(" ") && (a = a.substring(1)),
            "event" === t
              ? (this.event = a)
              : "data" === t && this.data.push(a),
            null
          );
        }
      }
      function eY(e) {
        if (e[Symbol.asyncIterator]) return e;
        let t = e.getReader();
        return {
          async next() {
            try {
              let e = await t.read();
              return e?.done && t.releaseLock(), e;
            } catch (e) {
              throw (t.releaseLock(), e);
            }
          },
          async return() {
            let e = t.cancel();
            return t.releaseLock(), await e, { done: !0, value: void 0 };
          },
          [Symbol.asyncIterator]() {
            return this;
          },
        };
      }
      var e0 = r(48764).Buffer;
      let e1 = (e) =>
          null != e &&
          "object" == typeof e &&
          "string" == typeof e.url &&
          "function" == typeof e.blob,
        e2 = (e) =>
          null != e &&
          "object" == typeof e &&
          "string" == typeof e.name &&
          "number" == typeof e.lastModified &&
          e4(e),
        e4 = (e) =>
          null != e &&
          "object" == typeof e &&
          "number" == typeof e.size &&
          "string" == typeof e.type &&
          "function" == typeof e.text &&
          "function" == typeof e.slice &&
          "function" == typeof e.arrayBuffer,
        e5 = (e) => e2(e) || e1(e) || p(e);
      async function e6(e, t, r) {
        var a;
        if (e2((e = await e))) return e;
        if (e1(e)) {
          let a = await e.blob();
          t ||
            (t =
              new URL(e.url).pathname.split(/[\\/]/).pop() ?? "unknown_file");
          let n = e4(a) ? [await a.arrayBuffer()] : [a];
          return new l(n, t, r);
        }
        let n = await e9(e);
        if (
          (t ||
            (t =
              (e3((a = e).name) ||
                e3(a.filename) ||
                e3(a.path)?.split(/[\\/]/).pop()) ??
              "unknown_file"),
          !r?.type)
        ) {
          let e = n[0]?.type;
          "string" == typeof e && (r = { ...r, type: e });
        }
        return new l(n, t, r);
      }
      async function e9(e) {
        let t = [];
        if (
          "string" == typeof e ||
          ArrayBuffer.isView(e) ||
          e instanceof ArrayBuffer
        )
          t.push(e);
        else if (e4(e)) t.push(await e.arrayBuffer());
        else if (e8(e)) for await (let r of e) t.push(r);
        else
          throw Error(
            `Unexpected data type: ${typeof e}; constructor: ${
              e?.constructor?.name
            }; props: ${(function (e) {
              let t = Object.getOwnPropertyNames(e);
              return `[${t.map((e) => `"${e}"`).join(", ")}]`;
            })(e)}`
          );
        return t;
      }
      let e3 = (e) =>
          "string" == typeof e
            ? e
            : void 0 !== e0 && e instanceof e0
            ? String(e)
            : void 0,
        e8 = (e) =>
          null != e &&
          "object" == typeof e &&
          "function" == typeof e[Symbol.asyncIterator],
        e7 = (e) =>
          e &&
          "object" == typeof e &&
          e.body &&
          "MultipartBody" === e[Symbol.toStringTag],
        te = async (e) => {
          let t = await tt(e.body);
          return c(t, e);
        },
        tt = async (e) => {
          let t = new o();
          return (
            await Promise.all(
              Object.entries(e || {}).map(([e, r]) => ta(t, e, r))
            ),
            t
          );
        },
        tr = (e) => {
          if (e5(e)) return !0;
          if (Array.isArray(e)) return e.some(tr);
          if (e && "object" == typeof e) {
            for (let t in e) if (tr(e[t])) return !0;
          }
          return !1;
        },
        ta = async (e, t, r) => {
          if (void 0 !== r) {
            if (null == r)
              throw TypeError(
                `Received null for "${t}"; to pass null in FormData, you must use the string 'null'`
              );
            if (
              "string" == typeof r ||
              "number" == typeof r ||
              "boolean" == typeof r
            )
              e.append(t, String(r));
            else if (e5(r)) {
              let a = await e6(r);
              e.append(t, a);
            } else if (Array.isArray(r))
              await Promise.all(r.map((r) => ta(e, t + "[]", r)));
            else if ("object" == typeof r)
              await Promise.all(
                Object.entries(r).map(([r, a]) => ta(e, `${t}[${r}]`, a))
              );
            else
              throw TypeError(
                `Invalid value given to form, expected a string, number, boolean, object, Array, File or Blob but got ${r} instead`
              );
          }
        };
      var tn = r(48764).Buffer,
        ti = r(34155),
        ts = function (e, t, r, a, n) {
          if ("m" === a) throw TypeError("Private method is not writable");
          if ("a" === a && !n)
            throw TypeError("Private accessor was defined without a setter");
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
            throw TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === a ? n.call(e, r) : n ? (n.value = r) : t.set(e, r), r;
        },
        to = function (e, t, r, a) {
          if ("a" === r && !a)
            throw TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !a : !t.has(e))
            throw TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === r ? a : "a" === r ? a.call(e) : a ? a.value : t.get(e);
        };
      async function tl(e) {
        let { response: t } = e;
        if (e.options.stream)
          return (tR("response", t.status, t.url, t.headers, t.body),
          e.options.__streamClass)
            ? e.options.__streamClass.fromSSEResponse(t, e.controller)
            : eG.fromSSEResponse(t, e.controller);
        if (204 === t.status) return null;
        if (e.options.__binaryResponse) return t;
        let r = t.headers.get("content-type");
        if (
          r?.includes("application/json") ||
          r?.includes("application/vnd.api+json")
        ) {
          let e = await t.json();
          return tR("response", t.status, t.url, t.headers, e), tu(e, t);
        }
        let a = await t.text();
        return tR("response", t.status, t.url, t.headers, a), a;
      }
      function tu(e, t) {
        return !e || "object" != typeof e || Array.isArray(e)
          ? e
          : Object.defineProperty(e, "_request_id", {
              value: t.headers.get("x-request-id"),
              enumerable: !1,
            });
      }
      class tc extends Promise {
        constructor(e, t = tl) {
          super((e) => {
            e(null);
          }),
            (this.responsePromise = e),
            (this.parseResponse = t);
        }
        _thenUnwrap(e) {
          return new tc(this.responsePromise, async (t) =>
            tu(e(await this.parseResponse(t), t), t.response)
          );
        }
        asResponse() {
          return this.responsePromise.then((e) => e.response);
        }
        async withResponse() {
          let [e, t] = await Promise.all([this.parse(), this.asResponse()]);
          return {
            data: e,
            response: t,
            request_id: t.headers.get("x-request-id"),
          };
        }
        parse() {
          return (
            this.parsedPromise ||
              (this.parsedPromise = this.responsePromise.then(
                this.parseResponse
              )),
            this.parsedPromise
          );
        }
        then(e, t) {
          return this.parse().then(e, t);
        }
        catch(e) {
          return this.parse().catch(e);
        }
        finally(e) {
          return this.parse().finally(e);
        }
      }
      class td {
        constructor({
          baseURL: e,
          maxRetries: t = 2,
          timeout: r = 6e5,
          httpAgent: a,
          fetch: n,
        }) {
          (this.baseURL = e),
            (this.maxRetries = tk("maxRetries", t)),
            (this.timeout = tk("timeout", r)),
            (this.httpAgent = a),
            (this.fetch = n ?? s);
        }
        authHeaders(e) {
          return {};
        }
        defaultHeaders(e) {
          return {
            Accept: "application/json",
            "Content-Type": "application/json",
            "User-Agent": this.getUserAgent(),
            ...tv(),
            ...this.authHeaders(e),
          };
        }
        validateHeaders(e, t) {}
        defaultIdempotencyKey() {
          return `stainless-node-retry-${t$()}`;
        }
        get(e, t) {
          return this.methodRequest("get", e, t);
        }
        post(e, t) {
          return this.methodRequest("post", e, t);
        }
        patch(e, t) {
          return this.methodRequest("patch", e, t);
        }
        put(e, t) {
          return this.methodRequest("put", e, t);
        }
        delete(e, t) {
          return this.methodRequest("delete", e, t);
        }
        methodRequest(e, t, r) {
          return this.request(
            Promise.resolve(r).then(async (r) => {
              let a =
                r && e4(r?.body)
                  ? new DataView(await r.body.arrayBuffer())
                  : r?.body instanceof DataView
                  ? r.body
                  : r?.body instanceof ArrayBuffer
                  ? new DataView(r.body)
                  : r && ArrayBuffer.isView(r?.body)
                  ? new DataView(r.body.buffer)
                  : r?.body;
              return { method: e, path: t, ...r, body: a };
            })
          );
        }
        getAPIList(e, t, r) {
          return this.requestAPIList(t, { method: "get", path: e, ...r });
        }
        calculateContentLength(e) {
          if ("string" == typeof e) {
            if (void 0 !== tn) return tn.byteLength(e, "utf8").toString();
            if ("undefined" != typeof TextEncoder)
              return new TextEncoder().encode(e).length.toString();
          } else if (ArrayBuffer.isView(e)) return e.byteLength.toString();
          return null;
        }
        buildRequest(e, { retryCount: t = 0 } = {}) {
          let { method: r, path: a, query: n, headers: i = {} } = e,
            s =
              ArrayBuffer.isView(e.body) ||
              (e.__binaryRequest && "string" == typeof e.body)
                ? e.body
                : e7(e.body)
                ? e.body.body
                : e.body
                ? JSON.stringify(e.body, null, 2)
                : null,
            o = this.calculateContentLength(s),
            l = this.buildURL(a, n);
          "timeout" in e && tk("timeout", e.timeout);
          let u = e.timeout ?? this.timeout,
            c = e.httpAgent ?? this.httpAgent ?? d(l),
            h = u + 1e3;
          "number" == typeof c?.options?.timeout &&
            h > (c.options.timeout ?? 0) &&
            (c.options.timeout = h),
            this.idempotencyHeader &&
              "get" !== r &&
              (e.idempotencyKey ||
                (e.idempotencyKey = this.defaultIdempotencyKey()),
              (i[this.idempotencyHeader] = e.idempotencyKey));
          let p = this.buildHeaders({
            options: e,
            headers: i,
            contentLength: o,
            retryCount: t,
          });
          return {
            req: {
              method: r,
              ...(s && { body: s }),
              headers: p,
              ...(c && { agent: c }),
              signal: e.signal ?? null,
            },
            url: l,
            timeout: u,
          };
        }
        buildHeaders({
          options: e,
          headers: t,
          contentLength: r,
          retryCount: a,
        }) {
          let n = {};
          r && (n["content-length"] = r);
          let s = this.defaultHeaders(e);
          return (
            tT(n, s),
            tT(n, t),
            e7(e.body) && "node" !== i && delete n["content-type"],
            void 0 === tN(s, "x-stainless-retry-count") &&
              void 0 === tN(t, "x-stainless-retry-count") &&
              (n["x-stainless-retry-count"] = String(a)),
            this.validateHeaders(n, t),
            n
          );
        }
        async prepareOptions(e) {}
        async prepareRequest(e, { url: t, options: r }) {}
        parseHeaders(e) {
          return e
            ? Symbol.iterator in e
              ? Object.fromEntries(Array.from(e).map((e) => [...e]))
              : { ...e }
            : {};
        }
        makeStatusError(e, t, r, a) {
          return R.generate(e, t, r, a);
        }
        request(e, t = null) {
          return new tc(this.makeRequest(e, t));
        }
        async makeRequest(e, t) {
          let r = await e,
            a = r.maxRetries ?? this.maxRetries;
          null == t && (t = a), await this.prepareOptions(r);
          let {
            req: n,
            url: i,
            timeout: s,
          } = this.buildRequest(r, { retryCount: a - t });
          if (
            (await this.prepareRequest(n, { url: i, options: r }),
            tR("request", i, r, n.headers),
            r.signal?.aborted)
          )
            throw new $();
          let o = new AbortController(),
            l = await this.fetchWithTimeout(i, n, s, o).catch(tS);
          if (l instanceof Error) {
            if (r.signal?.aborted) throw new $();
            if (t) return this.retryRequest(r, t);
            if ("AbortError" === l.name) throw new C();
            throw new j({ cause: l });
          }
          let u = tf(l.headers);
          if (!l.ok) {
            if (t && this.shouldRetry(l)) {
              let e = `retrying, ${t} attempts remaining`;
              return (
                tR(`response (error; ${e})`, l.status, i, u),
                this.retryRequest(r, t, u)
              );
            }
            let e = await l.text().catch((e) => tS(e).message),
              a = tw(e),
              n = a ? void 0 : e,
              s = t
                ? "(error; no more retries left)"
                : "(error; not retryable)";
            throw (
              (tR(`response (error; ${s})`, l.status, i, u, n),
              this.makeStatusError(l.status, a, n, u))
            );
          }
          return { response: l, options: r, controller: o };
        }
        requestAPIList(e, t) {
          return new tp(this, this.makeRequest(t, null), e);
        }
        buildURL(e, t) {
          let r = new URL(
              tx(e)
                ? e
                : this.baseURL +
                  (this.baseURL.endsWith("/") && e.startsWith("/")
                    ? e.slice(1)
                    : e)
            ),
            a = this.defaultQuery();
          return (
            tP(a) || (t = { ...a, ...t }),
            "object" == typeof t &&
              t &&
              !Array.isArray(t) &&
              (r.search = this.stringifyQuery(t)),
            r.toString()
          );
        }
        stringifyQuery(e) {
          return Object.entries(e)
            .filter(([e, t]) => void 0 !== t)
            .map(([e, t]) => {
              if (
                "string" == typeof t ||
                "number" == typeof t ||
                "boolean" == typeof t
              )
                return `${encodeURIComponent(e)}=${encodeURIComponent(t)}`;
              if (null === t) return `${encodeURIComponent(e)}=`;
              throw new T(
                `Cannot stringify type ${typeof t}; Expected string, number, boolean, or null. If you need to pass nested query parameters, you can manually encode them, e.g. { query: { 'foo[key1]': value1, 'foo[key2]': value2 } }, and please open a GitHub issue requesting better support for your use case.`
              );
            })
            .join("&");
        }
        async fetchWithTimeout(e, t, r, a) {
          let { signal: n, ...i } = t || {};
          n && n.addEventListener("abort", () => a.abort());
          let s = setTimeout(() => a.abort(), r);
          return this.getRequestClient()
            .fetch.call(void 0, e, { signal: a.signal, ...i })
            .finally(() => {
              clearTimeout(s);
            });
        }
        getRequestClient() {
          return { fetch: this.fetch };
        }
        shouldRetry(e) {
          let t = e.headers.get("x-should-retry");
          return (
            "true" === t ||
            ("false" !== t &&
              (408 === e.status ||
                409 === e.status ||
                429 === e.status ||
                e.status >= 500))
          );
        }
        async retryRequest(e, t, r) {
          let a;
          let n = r?.["retry-after-ms"];
          if (n) {
            let e = parseFloat(n);
            Number.isNaN(e) || (a = e);
          }
          let i = r?.["retry-after"];
          if (i && !a) {
            let e = parseFloat(i);
            a = Number.isNaN(e) ? Date.parse(i) - Date.now() : 1e3 * e;
          }
          if (!(a && 0 <= a && a < 6e4)) {
            let r = e.maxRetries ?? this.maxRetries;
            a = this.calculateDefaultRetryTimeoutMillis(t, r);
          }
          return await tO(a), this.makeRequest(e, t - 1);
        }
        calculateDefaultRetryTimeoutMillis(e, t) {
          return (
            Math.min(0.5 * Math.pow(2, t - e), 8) *
            (1 - 0.25 * Math.random()) *
            1e3
          );
        }
        getUserAgent() {
          return `${this.constructor.name}/JS ${A}`;
        }
      }
      class th {
        constructor(e, t, r, a) {
          z.set(this, void 0),
            ts(this, z, e, "f"),
            (this.options = a),
            (this.response = t),
            (this.body = r);
        }
        hasNextPage() {
          return (
            !!this.getPaginatedItems().length && null != this.nextPageInfo()
          );
        }
        async getNextPage() {
          let e = this.nextPageInfo();
          if (!e)
            throw new T(
              "No next page expected; please check `.hasNextPage()` before calling `.getNextPage()`."
            );
          let t = { ...this.options };
          if ("params" in e && "object" == typeof t.query)
            t.query = { ...t.query, ...e.params };
          else if ("url" in e) {
            for (let [r, a] of [
              ...Object.entries(t.query || {}),
              ...e.url.searchParams.entries(),
            ])
              e.url.searchParams.set(r, a);
            (t.query = void 0), (t.path = e.url.toString());
          }
          return await to(this, z, "f").requestAPIList(this.constructor, t);
        }
        async *iterPages() {
          let e = this;
          for (yield e; e.hasNextPage(); ) (e = await e.getNextPage()), yield e;
        }
        async *[((z = new WeakMap()), Symbol.asyncIterator)]() {
          for await (let e of this.iterPages())
            for (let t of e.getPaginatedItems()) yield t;
        }
      }
      class tp extends tc {
        constructor(e, t, r) {
          super(t, async (t) => new r(e, t.response, await tl(t), t.options));
        }
        async *[Symbol.asyncIterator]() {
          for await (let e of await this) yield e;
        }
      }
      let tf = (e) =>
          new Proxy(Object.fromEntries(e.entries()), {
            get(e, t) {
              let r = t.toString();
              return e[r.toLowerCase()] || e[r];
            },
          }),
        tm = {
          method: !0,
          path: !0,
          query: !0,
          body: !0,
          headers: !0,
          maxRetries: !0,
          stream: !0,
          timeout: !0,
          httpAgent: !0,
          signal: !0,
          idempotencyKey: !0,
          __binaryRequest: !0,
          __binaryResponse: !0,
          __streamClass: !0,
        },
        tg = (e) =>
          "object" == typeof e &&
          null !== e &&
          !tP(e) &&
          Object.keys(e).every((e) => tI(tm, e)),
        ty = () => {
          if ("undefined" != typeof Deno && null != Deno.build)
            return {
              "X-Stainless-Lang": "js",
              "X-Stainless-Package-Version": A,
              "X-Stainless-OS": t_(Deno.build.os),
              "X-Stainless-Arch": tb(Deno.build.arch),
              "X-Stainless-Runtime": "deno",
              "X-Stainless-Runtime-Version":
                "string" == typeof Deno.version
                  ? Deno.version
                  : Deno.version?.deno ?? "unknown",
            };
          if ("undefined" != typeof EdgeRuntime)
            return {
              "X-Stainless-Lang": "js",
              "X-Stainless-Package-Version": A,
              "X-Stainless-OS": "Unknown",
              "X-Stainless-Arch": `other:${EdgeRuntime}`,
              "X-Stainless-Runtime": "edge",
              "X-Stainless-Runtime-Version": ti.version,
            };
          if (
            "[object process]" ===
            Object.prototype.toString.call(void 0 !== ti ? ti : 0)
          )
            return {
              "X-Stainless-Lang": "js",
              "X-Stainless-Package-Version": A,
              "X-Stainless-OS": t_(ti.platform),
              "X-Stainless-Arch": tb(ti.arch),
              "X-Stainless-Runtime": "node",
              "X-Stainless-Runtime-Version": ti.version,
            };
          let e = (function () {
            if ("undefined" == typeof navigator || !navigator) return null;
            for (let { key: e, pattern: t } of [
              { key: "edge", pattern: /Edge(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
              { key: "ie", pattern: /MSIE(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
              {
                key: "ie",
                pattern: /Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/,
              },
              {
                key: "chrome",
                pattern: /Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/,
              },
              {
                key: "firefox",
                pattern: /Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/,
              },
              {
                key: "safari",
                pattern:
                  /(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/,
              },
            ]) {
              let r = t.exec(navigator.userAgent);
              if (r) {
                let t = r[1] || 0,
                  a = r[2] || 0,
                  n = r[3] || 0;
                return { browser: e, version: `${t}.${a}.${n}` };
              }
            }
            return null;
          })();
          return e
            ? {
                "X-Stainless-Lang": "js",
                "X-Stainless-Package-Version": A,
                "X-Stainless-OS": "Unknown",
                "X-Stainless-Arch": "unknown",
                "X-Stainless-Runtime": `browser:${e.browser}`,
                "X-Stainless-Runtime-Version": e.version,
              }
            : {
                "X-Stainless-Lang": "js",
                "X-Stainless-Package-Version": A,
                "X-Stainless-OS": "Unknown",
                "X-Stainless-Arch": "unknown",
                "X-Stainless-Runtime": "unknown",
                "X-Stainless-Runtime-Version": "unknown",
              };
        },
        tb = (e) =>
          "x32" === e
            ? "x32"
            : "x86_64" === e || "x64" === e
            ? "x64"
            : "arm" === e
            ? "arm"
            : "aarch64" === e || "arm64" === e
            ? "arm64"
            : e
            ? `other:${e}`
            : "unknown",
        t_ = (e) =>
          (e = e.toLowerCase()).includes("ios")
            ? "iOS"
            : "android" === e
            ? "Android"
            : "darwin" === e
            ? "MacOS"
            : "win32" === e
            ? "Windows"
            : "freebsd" === e
            ? "FreeBSD"
            : "openbsd" === e
            ? "OpenBSD"
            : "linux" === e
            ? "Linux"
            : e
            ? `Other:${e}`
            : "Unknown",
        tv = () => a ?? (a = ty()),
        tw = (e) => {
          try {
            return JSON.parse(e);
          } catch (e) {
            return;
          }
        },
        tE = RegExp("^(?:[a-z]+:)?//", "i"),
        tx = (e) => tE.test(e),
        tO = (e) => new Promise((t) => setTimeout(t, e)),
        tk = (e, t) => {
          if ("number" != typeof t || !Number.isInteger(t))
            throw new T(`${e} must be an integer`);
          if (t < 0) throw new T(`${e} must be a positive integer`);
          return t;
        },
        tS = (e) => {
          if (e instanceof Error) return e;
          if ("object" == typeof e && null !== e)
            try {
              return Error(JSON.stringify(e));
            } catch {}
          return Error(e);
        },
        tA = (e) =>
          void 0 !== ti
            ? ti.env?.[e]?.trim() ?? void 0
            : "undefined" != typeof Deno
            ? Deno.env?.get?.(e)?.trim()
            : void 0;
      function tP(e) {
        if (!e) return !0;
        for (let t in e) return !1;
        return !0;
      }
      function tI(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      function tT(e, t) {
        for (let r in t) {
          if (!tI(t, r)) continue;
          let a = r.toLowerCase();
          if (!a) continue;
          let n = t[r];
          null === n ? delete e[a] : void 0 !== n && (e[a] = n);
        }
      }
      function tR(e, ...t) {
        void 0 !== ti &&
          ti?.env?.DEBUG === "true" &&
          console.log(`OpenAI:DEBUG:${e}`, ...t);
      }
      let t$ = () =>
          "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
            let t = (16 * Math.random()) | 0;
            return ("x" === e ? t : (3 & t) | 8).toString(16);
          }),
        tj = () =>
          "undefined" != typeof window &&
          void 0 !== window.document &&
          "undefined" != typeof navigator,
        tC = (e) => "function" == typeof e?.get,
        tN = (e, t) => {
          let r = t.toLowerCase();
          if (tC(e)) {
            let a =
              t[0]?.toUpperCase() +
              t
                .substring(1)
                .replace(/([^\w])(\w)/g, (e, t, r) => t + r.toUpperCase());
            for (let n of [t, r, t.toUpperCase(), a]) {
              let t = e.get(n);
              if (t) return t;
            }
          }
          for (let [a, n] of Object.entries(e))
            if (a.toLowerCase() === r) {
              if (Array.isArray(n)) {
                if (n.length <= 1) return n[0];
                return (
                  console.warn(
                    `Received ${n.length} entries for the ${t} header, using the first entry.`
                  ),
                  n[0]
                );
              }
              return n;
            }
        };
      function tL(e) {
        return null != e && "object" == typeof e && !Array.isArray(e);
      }
      class tM {
        constructor(e) {
          this._client = e;
        }
      }
      class tU extends tM {
        create(e, t) {
          return this._client.post("/completions", {
            body: e,
            ...t,
            stream: e.stream ?? !1,
          });
        }
      }
      class tD extends tM {
        create(e, t) {
          return this._client.post("/chat/completions", {
            body: e,
            ...t,
            stream: e.stream ?? !1,
          });
        }
      }
      class tF extends tM {
        constructor() {
          super(...arguments), (this.completions = new tD(this._client));
        }
      }
      tF.Completions = tD;
      class tZ extends tM {
        create(e, t) {
          return this._client.post("/embeddings", { body: e, ...t });
        }
      }
      class tB extends th {
        constructor(e, t, r, a) {
          super(e, t, r, a),
            (this.data = r.data || []),
            (this.object = r.object);
        }
        getPaginatedItems() {
          return this.data ?? [];
        }
        nextPageParams() {
          return null;
        }
        nextPageInfo() {
          return null;
        }
      }
      class tq extends th {
        constructor(e, t, r, a) {
          super(e, t, r, a), (this.data = r.data || []);
        }
        getPaginatedItems() {
          return this.data ?? [];
        }
        nextPageParams() {
          let e = this.nextPageInfo();
          if (!e) return null;
          if ("params" in e) return e.params;
          let t = Object.fromEntries(e.url.searchParams);
          return Object.keys(t).length ? t : null;
        }
        nextPageInfo() {
          let e = this.getPaginatedItems();
          if (!e.length) return null;
          let t = e[e.length - 1]?.id;
          return t ? { params: { after: t } } : null;
        }
      }
      class tH extends tM {
        create(e, t) {
          return this._client.post("/files", te({ body: e, ...t }));
        }
        retrieve(e, t) {
          return this._client.get(`/files/${e}`, t);
        }
        list(e = {}, t) {
          return tg(e)
            ? this.list({}, e)
            : this._client.getAPIList("/files", tz, { query: e, ...t });
        }
        del(e, t) {
          return this._client.delete(`/files/${e}`, t);
        }
        content(e, t) {
          return this._client.get(`/files/${e}/content`, {
            ...t,
            __binaryResponse: !0,
          });
        }
        retrieveContent(e, t) {
          return this._client.get(`/files/${e}/content`, {
            ...t,
            headers: { Accept: "application/json", ...t?.headers },
          });
        }
        async waitForProcessing(
          e,
          { pollInterval: t = 5e3, maxWait: r = 18e5 } = {}
        ) {
          let a = new Set(["processed", "error", "deleted"]),
            n = Date.now(),
            i = await this.retrieve(e);
          for (; !i.status || !a.has(i.status); )
            if ((await tO(t), (i = await this.retrieve(e)), Date.now() - n > r))
              throw new C({
                message: `Giving up on waiting for file ${e} to finish processing after ${r} milliseconds.`,
              });
          return i;
        }
      }
      class tz extends tq {}
      tH.FileObjectsPage = tz;
      class tW extends tM {
        createVariation(e, t) {
          return this._client.post("/images/variations", te({ body: e, ...t }));
        }
        edit(e, t) {
          return this._client.post("/images/edits", te({ body: e, ...t }));
        }
        generate(e, t) {
          return this._client.post("/images/generations", { body: e, ...t });
        }
      }
      class tJ extends tM {
        create(e, t) {
          return this._client.post("/audio/speech", {
            body: e,
            ...t,
            __binaryResponse: !0,
          });
        }
      }
      class tV extends tM {
        create(e, t) {
          return this._client.post(
            "/audio/transcriptions",
            te({ body: e, ...t })
          );
        }
      }
      class tG extends tM {
        create(e, t) {
          return this._client.post(
            "/audio/translations",
            te({ body: e, ...t })
          );
        }
      }
      class tX extends tM {
        constructor() {
          super(...arguments),
            (this.transcriptions = new tV(this._client)),
            (this.translations = new tG(this._client)),
            (this.speech = new tJ(this._client));
        }
      }
      (tX.Transcriptions = tV), (tX.Translations = tG), (tX.Speech = tJ);
      class tK extends tM {
        create(e, t) {
          return this._client.post("/moderations", { body: e, ...t });
        }
      }
      class tQ extends tM {
        retrieve(e, t) {
          return this._client.get(`/models/${e}`, t);
        }
        list(e) {
          return this._client.getAPIList("/models", tY, e);
        }
        del(e, t) {
          return this._client.delete(`/models/${e}`, t);
        }
      }
      class tY extends tB {}
      tQ.ModelsPage = tY;
      class t0 extends tM {
        list(e, t = {}, r) {
          return tg(t)
            ? this.list(e, {}, t)
            : this._client.getAPIList(
                `/fine_tuning/jobs/${e}/checkpoints`,
                t1,
                { query: t, ...r }
              );
        }
      }
      class t1 extends tq {}
      t0.FineTuningJobCheckpointsPage = t1;
      class t2 extends tM {
        constructor() {
          super(...arguments), (this.checkpoints = new t0(this._client));
        }
        create(e, t) {
          return this._client.post("/fine_tuning/jobs", { body: e, ...t });
        }
        retrieve(e, t) {
          return this._client.get(`/fine_tuning/jobs/${e}`, t);
        }
        list(e = {}, t) {
          return tg(e)
            ? this.list({}, e)
            : this._client.getAPIList("/fine_tuning/jobs", t4, {
                query: e,
                ...t,
              });
        }
        cancel(e, t) {
          return this._client.post(`/fine_tuning/jobs/${e}/cancel`, t);
        }
        listEvents(e, t = {}, r) {
          return tg(t)
            ? this.listEvents(e, {}, t)
            : this._client.getAPIList(`/fine_tuning/jobs/${e}/events`, t5, {
                query: t,
                ...r,
              });
        }
      }
      class t4 extends tq {}
      class t5 extends tq {}
      (t2.FineTuningJobsPage = t4),
        (t2.FineTuningJobEventsPage = t5),
        (t2.Checkpoints = t0),
        (t2.FineTuningJobCheckpointsPage = t1);
      class t6 extends tM {
        constructor() {
          super(...arguments), (this.jobs = new t2(this._client));
        }
      }
      (t6.Jobs = t2),
        (t6.FineTuningJobsPage = t4),
        (t6.FineTuningJobEventsPage = t5);
      class t9 extends tM {
        create(e, t) {
          return this._client.post("/assistants", {
            body: e,
            ...t,
            headers: { "OpenAI-Beta": "assistants=v2", ...t?.headers },
          });
        }
        retrieve(e, t) {
          return this._client.get(`/assistants/${e}`, {
            ...t,
            headers: { "OpenAI-Beta": "assistants=v2", ...t?.headers },
          });
        }
        update(e, t, r) {
          return this._client.post(`/assistants/${e}`, {
            body: t,
            ...r,
            headers: { "OpenAI-Beta": "assistants=v2", ...r?.headers },
          });
        }
        list(e = {}, t) {
          return tg(e)
            ? this.list({}, e)
            : this._client.getAPIList("/assistants", t3, {
                query: e,
                ...t,
                headers: { "OpenAI-Beta": "assistants=v2", ...t?.headers },
              });
        }
        del(e, t) {
          return this._client.delete(`/assistants/${e}`, {
            ...t,
            headers: { "OpenAI-Beta": "assistants=v2", ...t?.headers },
          });
        }
      }
      class t3 extends tq {}
      function t8(e) {
        return "function" == typeof e.parse;
      }
      t9.AssistantsPage = t3;
      let t7 = (e) => e?.role === "assistant",
        re = (e) => e?.role === "function",
        rt = (e) => e?.role === "tool";
      var rr = function (e, t, r, a, n) {
          if ("m" === a) throw TypeError("Private method is not writable");
          if ("a" === a && !n)
            throw TypeError("Private accessor was defined without a setter");
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
            throw TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === a ? n.call(e, r) : n ? (n.value = r) : t.set(e, r), r;
        },
        ra = function (e, t, r, a) {
          if ("a" === r && !a)
            throw TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !a : !t.has(e))
            throw TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === r ? a : "a" === r ? a.call(e) : a ? a.value : t.get(e);
        };
      class rn {
        constructor() {
          W.add(this),
            (this.controller = new AbortController()),
            J.set(this, void 0),
            V.set(this, () => {}),
            G.set(this, () => {}),
            X.set(this, void 0),
            K.set(this, () => {}),
            Q.set(this, () => {}),
            Y.set(this, {}),
            ee.set(this, !1),
            et.set(this, !1),
            er.set(this, !1),
            ea.set(this, !1),
            rr(
              this,
              J,
              new Promise((e, t) => {
                rr(this, V, e, "f"), rr(this, G, t, "f");
              }),
              "f"
            ),
            rr(
              this,
              X,
              new Promise((e, t) => {
                rr(this, K, e, "f"), rr(this, Q, t, "f");
              }),
              "f"
            ),
            ra(this, J, "f").catch(() => {}),
            ra(this, X, "f").catch(() => {});
        }
        _run(e) {
          setTimeout(() => {
            e().then(() => {
              this._emitFinal(), this._emit("end");
            }, ra(this, W, "m", en).bind(this));
          }, 0);
        }
        _connected() {
          this.ended || (ra(this, V, "f").call(this), this._emit("connect"));
        }
        get ended() {
          return ra(this, ee, "f");
        }
        get errored() {
          return ra(this, et, "f");
        }
        get aborted() {
          return ra(this, er, "f");
        }
        abort() {
          this.controller.abort();
        }
        on(e, t) {
          return (
            (ra(this, Y, "f")[e] || (ra(this, Y, "f")[e] = [])).push({
              listener: t,
            }),
            this
          );
        }
        off(e, t) {
          let r = ra(this, Y, "f")[e];
          if (!r) return this;
          let a = r.findIndex((e) => e.listener === t);
          return a >= 0 && r.splice(a, 1), this;
        }
        once(e, t) {
          return (
            (ra(this, Y, "f")[e] || (ra(this, Y, "f")[e] = [])).push({
              listener: t,
              once: !0,
            }),
            this
          );
        }
        emitted(e) {
          return new Promise((t, r) => {
            rr(this, ea, !0, "f"),
              "error" !== e && this.once("error", r),
              this.once(e, t);
          });
        }
        async done() {
          rr(this, ea, !0, "f"), await ra(this, X, "f");
        }
        _emit(e, ...t) {
          if (ra(this, ee, "f")) return;
          "end" === e && (rr(this, ee, !0, "f"), ra(this, K, "f").call(this));
          let r = ra(this, Y, "f")[e];
          if (
            (r &&
              ((ra(this, Y, "f")[e] = r.filter((e) => !e.once)),
              r.forEach(({ listener: e }) => e(...t))),
            "abort" === e)
          ) {
            let e = t[0];
            ra(this, ea, "f") || r?.length || Promise.reject(e),
              ra(this, G, "f").call(this, e),
              ra(this, Q, "f").call(this, e),
              this._emit("end");
            return;
          }
          if ("error" === e) {
            let e = t[0];
            ra(this, ea, "f") || r?.length || Promise.reject(e),
              ra(this, G, "f").call(this, e),
              ra(this, Q, "f").call(this, e),
              this._emit("end");
          }
        }
        _emitFinal() {}
      }
      function ri(e) {
        return e?.$brand === "auto-parseable-response-format";
      }
      function rs(e) {
        return e?.$brand === "auto-parseable-tool";
      }
      function ro(e, t) {
        let r = e.choices.map((e) => {
          var r;
          if ("length" === e.finish_reason) throw new q();
          if ("content_filter" === e.finish_reason) throw new H();
          return {
            ...e,
            message: {
              ...e.message,
              tool_calls:
                e.message.tool_calls?.map((e) =>
                  (function (e, t) {
                    let r = e.tools?.find(
                      (e) => e.function?.name === t.function.name
                    );
                    return {
                      ...t,
                      function: {
                        ...t.function,
                        parsed_arguments: rs(r)
                          ? r.$parseRaw(t.function.arguments)
                          : r?.function.strict
                          ? JSON.parse(t.function.arguments)
                          : null,
                      },
                    };
                  })(t, e)
                ) ?? [],
              parsed:
                e.message.content && !e.message.refusal
                  ? ((r = e.message.content),
                    t.response_format?.type !== "json_schema"
                      ? null
                      : t.response_format?.type === "json_schema"
                      ? "$parseRaw" in t.response_format
                        ? t.response_format.$parseRaw(r)
                        : JSON.parse(r)
                      : null)
                  : null,
            },
          };
        });
        return { ...e, choices: r };
      }
      function rl(e) {
        return (
          !!ri(e.response_format) ||
          (e.tools?.some(
            (e) => rs(e) || ("function" === e.type && !0 === e.function.strict)
          ) ??
            !1)
        );
      }
      (J = new WeakMap()),
        (V = new WeakMap()),
        (G = new WeakMap()),
        (X = new WeakMap()),
        (K = new WeakMap()),
        (Q = new WeakMap()),
        (Y = new WeakMap()),
        (ee = new WeakMap()),
        (et = new WeakMap()),
        (er = new WeakMap()),
        (ea = new WeakMap()),
        (W = new WeakSet()),
        (en = function (e) {
          if (
            (rr(this, et, !0, "f"),
            e instanceof Error && "AbortError" === e.name && (e = new $()),
            e instanceof $)
          )
            return rr(this, er, !0, "f"), this._emit("abort", e);
          if (e instanceof T) return this._emit("error", e);
          if (e instanceof Error) {
            let t = new T(e.message);
            return (t.cause = e), this._emit("error", t);
          }
          return this._emit("error", new T(String(e)));
        });
      var ru = function (e, t, r, a) {
        if ("a" === r && !a)
          throw TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !a : !t.has(e))
          throw TypeError(
            "Cannot read private member from an object whose class did not declare it"
          );
        return "m" === r ? a : "a" === r ? a.call(e) : a ? a.value : t.get(e);
      };
      class rc extends rn {
        constructor() {
          super(...arguments),
            ei.add(this),
            (this._chatCompletions = []),
            (this.messages = []);
        }
        _addChatCompletion(e) {
          this._chatCompletions.push(e), this._emit("chatCompletion", e);
          let t = e.choices[0]?.message;
          return t && this._addMessage(t), e;
        }
        _addMessage(e, t = !0) {
          if (
            ("content" in e || (e.content = null), this.messages.push(e), t)
          ) {
            if ((this._emit("message", e), (re(e) || rt(e)) && e.content))
              this._emit("functionCallResult", e.content);
            else if (t7(e) && e.function_call)
              this._emit("functionCall", e.function_call);
            else if (t7(e) && e.tool_calls)
              for (let t of e.tool_calls)
                "function" === t.type && this._emit("functionCall", t.function);
          }
        }
        async finalChatCompletion() {
          await this.done();
          let e = this._chatCompletions[this._chatCompletions.length - 1];
          if (!e)
            throw new T("stream ended without producing a ChatCompletion");
          return e;
        }
        async finalContent() {
          return await this.done(), ru(this, ei, "m", es).call(this);
        }
        async finalMessage() {
          return await this.done(), ru(this, ei, "m", eo).call(this);
        }
        async finalFunctionCall() {
          return await this.done(), ru(this, ei, "m", el).call(this);
        }
        async finalFunctionCallResult() {
          return await this.done(), ru(this, ei, "m", eu).call(this);
        }
        async totalUsage() {
          return await this.done(), ru(this, ei, "m", ec).call(this);
        }
        allChatCompletions() {
          return [...this._chatCompletions];
        }
        _emitFinal() {
          let e = this._chatCompletions[this._chatCompletions.length - 1];
          e && this._emit("finalChatCompletion", e);
          let t = ru(this, ei, "m", eo).call(this);
          t && this._emit("finalMessage", t);
          let r = ru(this, ei, "m", es).call(this);
          r && this._emit("finalContent", r);
          let a = ru(this, ei, "m", el).call(this);
          a && this._emit("finalFunctionCall", a);
          let n = ru(this, ei, "m", eu).call(this);
          null != n && this._emit("finalFunctionCallResult", n),
            this._chatCompletions.some((e) => e.usage) &&
              this._emit("totalUsage", ru(this, ei, "m", ec).call(this));
        }
        async _createChatCompletion(e, t, r) {
          let a = r?.signal;
          a &&
            (a.aborted && this.controller.abort(),
            a.addEventListener("abort", () => this.controller.abort())),
            ru(this, ei, "m", ed).call(this, t);
          let n = await e.chat.completions.create(
            { ...t, stream: !1 },
            { ...r, signal: this.controller.signal }
          );
          return this._connected(), this._addChatCompletion(ro(n, t));
        }
        async _runChatCompletion(e, t, r) {
          for (let e of t.messages) this._addMessage(e, !1);
          return await this._createChatCompletion(e, t, r);
        }
        async _runFunctions(e, t, r) {
          let a = "function",
            { function_call: n = "auto", stream: i, ...s } = t,
            o = "string" != typeof n && n?.name,
            { maxChatCompletions: l = 10 } = r || {},
            u = {};
          for (let e of t.functions) u[e.name || e.function.name] = e;
          let c = t.functions.map((e) => ({
            name: e.name || e.function.name,
            parameters: e.parameters,
            description: e.description,
          }));
          for (let e of t.messages) this._addMessage(e, !1);
          for (let t = 0; t < l; ++t) {
            let t;
            let i = await this._createChatCompletion(
                e,
                {
                  ...s,
                  function_call: n,
                  functions: c,
                  messages: [...this.messages],
                },
                r
              ),
              l = i.choices[0]?.message;
            if (!l) throw new T("missing message in ChatCompletion response");
            if (!l.function_call) return;
            let { name: d, arguments: h } = l.function_call,
              p = u[d];
            if (p) {
              if (o && o !== d) {
                let e = `Invalid function_call: ${JSON.stringify(
                  d
                )}. ${JSON.stringify(o)} requested. Please try again`;
                this._addMessage({ role: a, name: d, content: e });
                continue;
              }
            } else {
              let e = `Invalid function_call: ${JSON.stringify(
                d
              )}. Available options are: ${c
                .map((e) => JSON.stringify(e.name))
                .join(", ")}. Please try again`;
              this._addMessage({ role: a, name: d, content: e });
              continue;
            }
            try {
              t = t8(p) ? await p.parse(h) : h;
            } catch (e) {
              this._addMessage({
                role: a,
                name: d,
                content: e instanceof Error ? e.message : String(e),
              });
              continue;
            }
            let f = await p.function(t, this),
              m = ru(this, ei, "m", eh).call(this, f);
            if ((this._addMessage({ role: a, name: d, content: m }), o)) return;
          }
        }
        async _runTools(e, t, r) {
          let a = "tool",
            { tool_choice: n = "auto", stream: i, ...s } = t,
            o = "string" != typeof n && n?.function?.name,
            { maxChatCompletions: l = 10 } = r || {},
            u = t.tools.map((e) => {
              if (rs(e)) {
                if (!e.$callback)
                  throw new T(
                    "Tool given to `.runTools()` that does not have an associated function"
                  );
                return {
                  type: "function",
                  function: {
                    function: e.$callback,
                    name: e.function.name,
                    description: e.function.description || "",
                    parameters: e.function.parameters,
                    parse: e.$parseRaw,
                    strict: !0,
                  },
                };
              }
              return e;
            }),
            c = {};
          for (let e of u)
            "function" === e.type &&
              (c[e.function.name || e.function.function.name] = e.function);
          let d =
            "tools" in t
              ? u.map((e) =>
                  "function" === e.type
                    ? {
                        type: "function",
                        function: {
                          name: e.function.name || e.function.function.name,
                          parameters: e.function.parameters,
                          description: e.function.description,
                          strict: e.function.strict,
                        },
                      }
                    : e
                )
              : void 0;
          for (let e of t.messages) this._addMessage(e, !1);
          for (let t = 0; t < l; ++t) {
            let t = await this._createChatCompletion(
                e,
                {
                  ...s,
                  tool_choice: n,
                  tools: d,
                  messages: [...this.messages],
                },
                r
              ),
              i = t.choices[0]?.message;
            if (!i) throw new T("missing message in ChatCompletion response");
            if (!i.tool_calls?.length) break;
            for (let e of i.tool_calls) {
              let t;
              if ("function" !== e.type) continue;
              let r = e.id,
                { name: n, arguments: i } = e.function,
                s = c[n];
              if (s) {
                if (o && o !== n) {
                  let e = `Invalid tool_call: ${JSON.stringify(
                    n
                  )}. ${JSON.stringify(o)} requested. Please try again`;
                  this._addMessage({ role: a, tool_call_id: r, content: e });
                  continue;
                }
              } else {
                let e = `Invalid tool_call: ${JSON.stringify(
                  n
                )}. Available options are: ${Object.keys(c)
                  .map((e) => JSON.stringify(e))
                  .join(", ")}. Please try again`;
                this._addMessage({ role: a, tool_call_id: r, content: e });
                continue;
              }
              try {
                t = t8(s) ? await s.parse(i) : i;
              } catch (t) {
                let e = t instanceof Error ? t.message : String(t);
                this._addMessage({ role: a, tool_call_id: r, content: e });
                continue;
              }
              let l = await s.function(t, this),
                u = ru(this, ei, "m", eh).call(this, l);
              if (
                (this._addMessage({ role: a, tool_call_id: r, content: u }), o)
              )
                return;
            }
          }
        }
      }
      (ei = new WeakSet()),
        (es = function () {
          return ru(this, ei, "m", eo).call(this).content ?? null;
        }),
        (eo = function () {
          let e = this.messages.length;
          for (; e-- > 0; ) {
            let t = this.messages[e];
            if (t7(t)) {
              let { function_call: e, ...r } = t,
                a = {
                  ...r,
                  content: t.content ?? null,
                  refusal: t.refusal ?? null,
                };
              return e && (a.function_call = e), a;
            }
          }
          throw new T(
            "stream ended without producing a ChatCompletionMessage with role=assistant"
          );
        }),
        (el = function () {
          for (let e = this.messages.length - 1; e >= 0; e--) {
            let t = this.messages[e];
            if (t7(t) && t?.function_call) return t.function_call;
            if (t7(t) && t?.tool_calls?.length)
              return t.tool_calls.at(-1)?.function;
          }
        }),
        (eu = function () {
          for (let e = this.messages.length - 1; e >= 0; e--) {
            let t = this.messages[e];
            if (
              (re(t) && null != t.content) ||
              (rt(t) &&
                null != t.content &&
                "string" == typeof t.content &&
                this.messages.some(
                  (e) =>
                    "assistant" === e.role &&
                    e.tool_calls?.some(
                      (e) => "function" === e.type && e.id === t.tool_call_id
                    )
                ))
            )
              return t.content;
          }
        }),
        (ec = function () {
          let e = { completion_tokens: 0, prompt_tokens: 0, total_tokens: 0 };
          for (let { usage: t } of this._chatCompletions)
            t &&
              ((e.completion_tokens += t.completion_tokens),
              (e.prompt_tokens += t.prompt_tokens),
              (e.total_tokens += t.total_tokens));
          return e;
        }),
        (ed = function (e) {
          if (null != e.n && e.n > 1)
            throw new T(
              "ChatCompletion convenience helpers only support n=1 at this time. To use n>1, please use chat.completions.create() directly."
            );
        }),
        (eh = function (e) {
          return "string" == typeof e
            ? e
            : void 0 === e
            ? "undefined"
            : JSON.stringify(e);
        });
      class rd extends rc {
        static runFunctions(e, t, r) {
          let a = new rd(),
            n = {
              ...r,
              headers: {
                ...r?.headers,
                "X-Stainless-Helper-Method": "runFunctions",
              },
            };
          return a._run(() => a._runFunctions(e, t, n)), a;
        }
        static runTools(e, t, r) {
          let a = new rd(),
            n = {
              ...r,
              headers: {
                ...r?.headers,
                "X-Stainless-Helper-Method": "runTools",
              },
            };
          return a._run(() => a._runTools(e, t, n)), a;
        }
        _addMessage(e, t = !0) {
          super._addMessage(e, t),
            t7(e) && e.content && this._emit("content", e.content);
        }
      }
      let rh = {
        STR: 1,
        NUM: 2,
        ARR: 4,
        OBJ: 8,
        NULL: 16,
        BOOL: 32,
        NAN: 64,
        INFINITY: 128,
        MINUS_INFINITY: 256,
        ALL: 511,
      };
      class rp extends Error {}
      class rf extends Error {}
      let rm = (e, t) => {
          let r = e.length,
            a = 0,
            n = (e) => {
              throw new rp(`${e} at position ${a}`);
            },
            i = (e) => {
              throw new rf(`${e} at position ${a}`);
            },
            s = () =>
              (d(), a >= r && n("Unexpected end of input"), '"' === e[a])
                ? o()
                : "{" === e[a]
                ? l()
                : "[" === e[a]
                ? u()
                : "null" === e.substring(a, a + 4) ||
                  (rh.NULL & t &&
                    r - a < 4 &&
                    "null".startsWith(e.substring(a)))
                ? ((a += 4), null)
                : "true" === e.substring(a, a + 4) ||
                  (rh.BOOL & t &&
                    r - a < 4 &&
                    "true".startsWith(e.substring(a)))
                ? ((a += 4), !0)
                : "false" === e.substring(a, a + 5) ||
                  (rh.BOOL & t &&
                    r - a < 5 &&
                    "false".startsWith(e.substring(a)))
                ? ((a += 5), !1)
                : "Infinity" === e.substring(a, a + 8) ||
                  (rh.INFINITY & t &&
                    r - a < 8 &&
                    "Infinity".startsWith(e.substring(a)))
                ? ((a += 8), 1 / 0)
                : "-Infinity" === e.substring(a, a + 9) ||
                  (rh.MINUS_INFINITY & t &&
                    1 < r - a &&
                    r - a < 9 &&
                    "-Infinity".startsWith(e.substring(a)))
                ? ((a += 9), -1 / 0)
                : "NaN" === e.substring(a, a + 3) ||
                  (rh.NAN & t && r - a < 3 && "NaN".startsWith(e.substring(a)))
                ? ((a += 3), NaN)
                : c(),
            o = () => {
              let s = a,
                o = !1;
              for (a++; a < r && ('"' !== e[a] || (o && "\\" === e[a - 1])); )
                (o = "\\" === e[a] && !o), a++;
              if ('"' == e.charAt(a))
                try {
                  return JSON.parse(e.substring(s, ++a - Number(o)));
                } catch (e) {
                  i(String(e));
                }
              else if (rh.STR & t)
                try {
                  return JSON.parse(e.substring(s, a - Number(o)) + '"');
                } catch (t) {
                  return JSON.parse(e.substring(s, e.lastIndexOf("\\")) + '"');
                }
              n("Unterminated string literal");
            },
            l = () => {
              a++, d();
              let i = {};
              try {
                for (; "}" !== e[a]; ) {
                  if ((d(), a >= r && rh.OBJ & t)) return i;
                  let n = o();
                  d(), a++;
                  try {
                    let e = s();
                    Object.defineProperty(i, n, {
                      value: e,
                      writable: !0,
                      enumerable: !0,
                      configurable: !0,
                    });
                  } catch (e) {
                    if (rh.OBJ & t) return i;
                    throw e;
                  }
                  d(), "," === e[a] && a++;
                }
              } catch (e) {
                if (rh.OBJ & t) return i;
                n("Expected '}' at end of object");
              }
              return a++, i;
            },
            u = () => {
              a++;
              let r = [];
              try {
                for (; "]" !== e[a]; ) r.push(s()), d(), "," === e[a] && a++;
              } catch (e) {
                if (rh.ARR & t) return r;
                n("Expected ']' at end of array");
              }
              return a++, r;
            },
            c = () => {
              if (0 === a) {
                "-" === e && rh.NUM & t && n("Not sure what '-' is");
                try {
                  return JSON.parse(e);
                } catch (r) {
                  if (rh.NUM & t)
                    try {
                      if ("." === e[e.length - 1])
                        return JSON.parse(e.substring(0, e.lastIndexOf(".")));
                      return JSON.parse(e.substring(0, e.lastIndexOf("e")));
                    } catch (e) {}
                  i(String(r));
                }
              }
              let s = a;
              for ("-" === e[a] && a++; e[a] && !",]}".includes(e[a]); ) a++;
              a != r || rh.NUM & t || n("Unterminated number literal");
              try {
                return JSON.parse(e.substring(s, a));
              } catch (r) {
                "-" === e.substring(s, a) &&
                  rh.NUM & t &&
                  n("Not sure what '-' is");
                try {
                  return JSON.parse(e.substring(s, e.lastIndexOf("e")));
                } catch (e) {
                  i(String(e));
                }
              }
            },
            d = () => {
              for (; a < r && " \n\r	".includes(e[a]); ) a++;
            };
          return s();
        },
        rg = (e) =>
          (function (e, t = rh.ALL) {
            if ("string" != typeof e)
              throw TypeError(`expecting str, got ${typeof e}`);
            if (!e.trim()) throw Error(`${e} is empty`);
            return rm(e.trim(), t);
          })(e, rh.ALL ^ rh.NUM);
      var ry = function (e, t, r, a, n) {
          if ("m" === a) throw TypeError("Private method is not writable");
          if ("a" === a && !n)
            throw TypeError("Private accessor was defined without a setter");
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
            throw TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === a ? n.call(e, r) : n ? (n.value = r) : t.set(e, r), r;
        },
        rb = function (e, t, r, a) {
          if ("a" === r && !a)
            throw TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !a : !t.has(e))
            throw TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === r ? a : "a" === r ? a.call(e) : a ? a.value : t.get(e);
        };
      class r_ extends rc {
        constructor(e) {
          super(),
            ep.add(this),
            ef.set(this, void 0),
            em.set(this, void 0),
            eg.set(this, void 0),
            ry(this, ef, e, "f"),
            ry(this, em, [], "f");
        }
        get currentChatCompletionSnapshot() {
          return rb(this, eg, "f");
        }
        static fromReadableStream(e) {
          let t = new r_(null);
          return t._run(() => t._fromReadableStream(e)), t;
        }
        static createChatCompletion(e, t, r) {
          let a = new r_(t);
          return (
            a._run(() =>
              a._runChatCompletion(
                e,
                { ...t, stream: !0 },
                {
                  ...r,
                  headers: {
                    ...r?.headers,
                    "X-Stainless-Helper-Method": "stream",
                  },
                }
              )
            ),
            a
          );
        }
        async _createChatCompletion(e, t, r) {
          super._createChatCompletion;
          let a = r?.signal;
          a &&
            (a.aborted && this.controller.abort(),
            a.addEventListener("abort", () => this.controller.abort())),
            rb(this, ep, "m", ey).call(this);
          let n = await e.chat.completions.create(
            { ...t, stream: !0 },
            { ...r, signal: this.controller.signal }
          );
          for await (let e of (this._connected(), n))
            rb(this, ep, "m", e_).call(this, e);
          if (n.controller.signal?.aborted) throw new $();
          return this._addChatCompletion(rb(this, ep, "m", eE).call(this));
        }
        async _fromReadableStream(e, t) {
          let r;
          let a = t?.signal;
          a &&
            (a.aborted && this.controller.abort(),
            a.addEventListener("abort", () => this.controller.abort())),
            rb(this, ep, "m", ey).call(this),
            this._connected();
          let n = eG.fromReadableStream(e, this.controller);
          for await (let e of n)
            r &&
              r !== e.id &&
              this._addChatCompletion(rb(this, ep, "m", eE).call(this)),
              rb(this, ep, "m", e_).call(this, e),
              (r = e.id);
          if (n.controller.signal?.aborted) throw new $();
          return this._addChatCompletion(rb(this, ep, "m", eE).call(this));
        }
        [((ef = new WeakMap()),
        (em = new WeakMap()),
        (eg = new WeakMap()),
        (ep = new WeakSet()),
        (ey = function () {
          this.ended || ry(this, eg, void 0, "f");
        }),
        (eb = function (e) {
          let t = rb(this, em, "f")[e.index];
          return (
            t ||
              ((t = {
                content_done: !1,
                refusal_done: !1,
                logprobs_content_done: !1,
                logprobs_refusal_done: !1,
                done_tool_calls: new Set(),
                current_tool_call_index: null,
              }),
              (rb(this, em, "f")[e.index] = t)),
            t
          );
        }),
        (e_ = function (e) {
          if (this.ended) return;
          let t = rb(this, ep, "m", eO).call(this, e);
          for (let r of (this._emit("chunk", e, t), e.choices)) {
            let e = t.choices[r.index];
            null != r.delta.content &&
              e.message?.role === "assistant" &&
              e.message?.content &&
              (this._emit("content", r.delta.content, e.message.content),
              this._emit("content.delta", {
                delta: r.delta.content,
                snapshot: e.message.content,
                parsed: e.message.parsed,
              })),
              null != r.delta.refusal &&
                e.message?.role === "assistant" &&
                e.message?.refusal &&
                this._emit("refusal.delta", {
                  delta: r.delta.refusal,
                  snapshot: e.message.refusal,
                }),
              r.logprobs?.content != null &&
                e.message?.role === "assistant" &&
                this._emit("logprobs.content.delta", {
                  content: r.logprobs?.content,
                  snapshot: e.logprobs?.content ?? [],
                }),
              r.logprobs?.refusal != null &&
                e.message?.role === "assistant" &&
                this._emit("logprobs.refusal.delta", {
                  refusal: r.logprobs?.refusal,
                  snapshot: e.logprobs?.refusal ?? [],
                });
            let a = rb(this, ep, "m", eb).call(this, e);
            for (let t of (e.finish_reason &&
              (rb(this, ep, "m", ew).call(this, e),
              null != a.current_tool_call_index &&
                rb(this, ep, "m", ev).call(this, e, a.current_tool_call_index)),
            r.delta.tool_calls ?? []))
              a.current_tool_call_index !== t.index &&
                (rb(this, ep, "m", ew).call(this, e),
                null != a.current_tool_call_index &&
                  rb(this, ep, "m", ev).call(
                    this,
                    e,
                    a.current_tool_call_index
                  )),
                (a.current_tool_call_index = t.index);
            for (let t of r.delta.tool_calls ?? []) {
              let r = e.message.tool_calls?.[t.index];
              r?.type &&
                (r?.type === "function"
                  ? this._emit("tool_calls.function.arguments.delta", {
                      name: r.function?.name,
                      index: t.index,
                      arguments: r.function.arguments,
                      parsed_arguments: r.function.parsed_arguments,
                      arguments_delta: t.function?.arguments ?? "",
                    })
                  : r?.type);
            }
          }
        }),
        (ev = function (e, t) {
          if (rb(this, ep, "m", eb).call(this, e).done_tool_calls.has(t))
            return;
          let r = e.message.tool_calls?.[t];
          if (!r) throw Error("no tool call snapshot");
          if (!r.type) throw Error("tool call snapshot missing `type`");
          if ("function" === r.type) {
            let e = rb(this, ef, "f")?.tools?.find(
              (e) =>
                "function" === e.type && e.function.name === r.function.name
            );
            this._emit("tool_calls.function.arguments.done", {
              name: r.function.name,
              index: t,
              arguments: r.function.arguments,
              parsed_arguments: rs(e)
                ? e.$parseRaw(r.function.arguments)
                : e?.function.strict
                ? JSON.parse(r.function.arguments)
                : null,
            });
          } else r.type;
        }),
        (ew = function (e) {
          let t = rb(this, ep, "m", eb).call(this, e);
          if (e.message.content && !t.content_done) {
            t.content_done = !0;
            let r = rb(this, ep, "m", ex).call(this);
            this._emit("content.done", {
              content: e.message.content,
              parsed: r ? r.$parseRaw(e.message.content) : null,
            });
          }
          e.message.refusal &&
            !t.refusal_done &&
            ((t.refusal_done = !0),
            this._emit("refusal.done", { refusal: e.message.refusal })),
            e.logprobs?.content &&
              !t.logprobs_content_done &&
              ((t.logprobs_content_done = !0),
              this._emit("logprobs.content.done", {
                content: e.logprobs.content,
              })),
            e.logprobs?.refusal &&
              !t.logprobs_refusal_done &&
              ((t.logprobs_refusal_done = !0),
              this._emit("logprobs.refusal.done", {
                refusal: e.logprobs.refusal,
              }));
        }),
        (eE = function () {
          if (this.ended)
            throw new T("stream has ended, this shouldn't happen");
          let e = rb(this, eg, "f");
          if (!e) throw new T("request ended without sending any chunks");
          return (
            ry(this, eg, void 0, "f"),
            ry(this, em, [], "f"),
            (function (e, t) {
              var r;
              let {
                id: a,
                choices: n,
                created: i,
                model: s,
                system_fingerprint: o,
                ...l
              } = e;
              return (
                (r = {
                  ...l,
                  id: a,
                  choices: n.map(
                    ({
                      message: t,
                      finish_reason: r,
                      index: a,
                      logprobs: n,
                      ...i
                    }) => {
                      if (!r)
                        throw new T(`missing finish_reason for choice ${a}`);
                      let {
                          content: s = null,
                          function_call: o,
                          tool_calls: l,
                          ...u
                        } = t,
                        c = t.role;
                      if (!c) throw new T(`missing role for choice ${a}`);
                      if (o) {
                        let { arguments: e, name: l } = o;
                        if (null == e)
                          throw new T(
                            `missing function_call.arguments for choice ${a}`
                          );
                        if (!l)
                          throw new T(
                            `missing function_call.name for choice ${a}`
                          );
                        return {
                          ...i,
                          message: {
                            content: s,
                            function_call: { arguments: e, name: l },
                            role: c,
                            refusal: t.refusal ?? null,
                          },
                          finish_reason: r,
                          index: a,
                          logprobs: n,
                        };
                      }
                      return l
                        ? {
                            ...i,
                            index: a,
                            finish_reason: r,
                            logprobs: n,
                            message: {
                              ...u,
                              role: c,
                              content: s,
                              refusal: t.refusal ?? null,
                              tool_calls: l.map((t, r) => {
                                let { function: n, type: i, id: s, ...o } = t,
                                  { arguments: l, name: u, ...c } = n || {};
                                if (null == s)
                                  throw new T(`missing choices[${a}].tool_calls[${r}].id
${rv(e)}`);
                                if (null == i)
                                  throw new T(`missing choices[${a}].tool_calls[${r}].type
${rv(e)}`);
                                if (null == u)
                                  throw new T(`missing choices[${a}].tool_calls[${r}].function.name
${rv(e)}`);
                                if (null == l)
                                  throw new T(`missing choices[${a}].tool_calls[${r}].function.arguments
${rv(e)}`);
                                return {
                                  ...o,
                                  id: s,
                                  type: i,
                                  function: { ...c, name: u, arguments: l },
                                };
                              }),
                            },
                          }
                        : {
                            ...i,
                            message: {
                              ...u,
                              content: s,
                              role: c,
                              refusal: t.refusal ?? null,
                            },
                            finish_reason: r,
                            index: a,
                            logprobs: n,
                          };
                    }
                  ),
                  created: i,
                  model: s,
                  object: "chat.completion",
                  ...(o ? { system_fingerprint: o } : {}),
                }),
                t && rl(t)
                  ? ro(r, t)
                  : {
                      ...r,
                      choices: r.choices.map((e) => ({
                        ...e,
                        message: {
                          ...e.message,
                          parsed: null,
                          tool_calls: e.message.tool_calls ?? [],
                        },
                      })),
                    }
              );
            })(e, rb(this, ef, "f"))
          );
        }),
        (ex = function () {
          let e = rb(this, ef, "f")?.response_format;
          return ri(e) ? e : null;
        }),
        (eO = function (e) {
          var t, r, a, n;
          let i = rb(this, eg, "f"),
            { choices: s, ...o } = e;
          for (let {
            delta: s,
            finish_reason: l,
            index: u,
            logprobs: c = null,
            ...d
          } of (i
            ? Object.assign(i, o)
            : (i = ry(this, eg, { ...o, choices: [] }, "f")),
          e.choices)) {
            let e = i.choices[u];
            if (
              (e ||
                (e = i.choices[u] =
                  {
                    finish_reason: l,
                    index: u,
                    message: {},
                    logprobs: c,
                    ...d,
                  }),
              c)
            ) {
              if (e.logprobs) {
                let { content: a, refusal: n, ...i } = c;
                Object.assign(e.logprobs, i),
                  a &&
                    ((t = e.logprobs).content ?? (t.content = []),
                    e.logprobs.content.push(...a)),
                  n &&
                    ((r = e.logprobs).refusal ?? (r.refusal = []),
                    e.logprobs.refusal.push(...n));
              } else e.logprobs = Object.assign({}, c);
            }
            if (
              l &&
              ((e.finish_reason = l),
              rb(this, ef, "f") && rl(rb(this, ef, "f")))
            ) {
              if ("length" === l) throw new q();
              if ("content_filter" === l) throw new H();
            }
            if ((Object.assign(e, d), !s)) continue;
            let {
              content: o,
              refusal: h,
              function_call: p,
              role: f,
              tool_calls: m,
              ...g
            } = s;
            if (
              (Object.assign(e.message, g),
              h && (e.message.refusal = (e.message.refusal || "") + h),
              f && (e.message.role = f),
              p &&
                (e.message.function_call
                  ? (p.name && (e.message.function_call.name = p.name),
                    p.arguments &&
                      ((a = e.message.function_call).arguments ??
                        (a.arguments = ""),
                      (e.message.function_call.arguments += p.arguments)))
                  : (e.message.function_call = p)),
              o &&
                ((e.message.content = (e.message.content || "") + o),
                !e.message.refusal &&
                  rb(this, ep, "m", ex).call(this) &&
                  (e.message.parsed = rg(e.message.content))),
              m)
            )
              for (let { index: t, id: r, type: a, function: i, ...s } of (e
                .message.tool_calls || (e.message.tool_calls = []),
              m)) {
                let o = (n = e.message.tool_calls)[t] ?? (n[t] = {});
                Object.assign(o, s),
                  r && (o.id = r),
                  a && (o.type = a),
                  i &&
                    (o.function ??
                      (o.function = { name: i.name ?? "", arguments: "" })),
                  i?.name && (o.function.name = i.name),
                  i?.arguments &&
                    ((o.function.arguments += i.arguments),
                    (function (e, t) {
                      if (!e) return !1;
                      let r = e.tools?.find(
                        (e) => e.function?.name === t.function.name
                      );
                      return rs(r) || r?.function.strict || !1;
                    })(rb(this, ef, "f"), o) &&
                      (o.function.parsed_arguments = rg(o.function.arguments)));
              }
          }
          return i;
        }),
        Symbol.asyncIterator)]() {
          let e = [],
            t = [],
            r = !1;
          return (
            this.on("chunk", (r) => {
              let a = t.shift();
              a ? a.resolve(r) : e.push(r);
            }),
            this.on("end", () => {
              for (let e of ((r = !0), t)) e.resolve(void 0);
              t.length = 0;
            }),
            this.on("abort", (e) => {
              for (let a of ((r = !0), t)) a.reject(e);
              t.length = 0;
            }),
            this.on("error", (e) => {
              for (let a of ((r = !0), t)) a.reject(e);
              t.length = 0;
            }),
            {
              next: async () =>
                e.length
                  ? { value: e.shift(), done: !1 }
                  : r
                  ? { value: void 0, done: !0 }
                  : new Promise((e, r) =>
                      t.push({ resolve: e, reject: r })
                    ).then((e) =>
                      e ? { value: e, done: !1 } : { value: void 0, done: !0 }
                    ),
              return: async () => (this.abort(), { value: void 0, done: !0 }),
            }
          );
        }
        toReadableStream() {
          return new eG(
            this[Symbol.asyncIterator].bind(this),
            this.controller
          ).toReadableStream();
        }
      }
      function rv(e) {
        return JSON.stringify(e);
      }
      class rw extends r_ {
        static fromReadableStream(e) {
          let t = new rw(null);
          return t._run(() => t._fromReadableStream(e)), t;
        }
        static runFunctions(e, t, r) {
          let a = new rw(null),
            n = {
              ...r,
              headers: {
                ...r?.headers,
                "X-Stainless-Helper-Method": "runFunctions",
              },
            };
          return a._run(() => a._runFunctions(e, t, n)), a;
        }
        static runTools(e, t, r) {
          let a = new rw(t),
            n = {
              ...r,
              headers: {
                ...r?.headers,
                "X-Stainless-Helper-Method": "runTools",
              },
            };
          return a._run(() => a._runTools(e, t, n)), a;
        }
      }
      class rE extends tM {
        parse(e, t) {
          return (
            !(function (e) {
              for (let t of e ?? []) {
                if ("function" !== t.type)
                  throw new T(
                    `Currently only \`function\` tool types support auto-parsing; Received \`${t.type}\``
                  );
                if (!0 !== t.function.strict)
                  throw new T(
                    `The \`${t.function.name}\` tool is not marked with \`strict: true\`. Only strict function tools can be auto-parsed`
                  );
              }
            })(e.tools),
            this._client.chat.completions
              .create(e, {
                ...t,
                headers: {
                  ...t?.headers,
                  "X-Stainless-Helper-Method": "beta.chat.completions.parse",
                },
              })
              ._thenUnwrap((t) => ro(t, e))
          );
        }
        runFunctions(e, t) {
          return e.stream
            ? rw.runFunctions(this._client, e, t)
            : rd.runFunctions(this._client, e, t);
        }
        runTools(e, t) {
          return e.stream
            ? rw.runTools(this._client, e, t)
            : rd.runTools(this._client, e, t);
        }
        stream(e, t) {
          return r_.createChatCompletion(this._client, e, t);
        }
      }
      class rx extends tM {
        constructor() {
          super(...arguments), (this.completions = new rE(this._client));
        }
      }
      (rx || (rx = {})).Completions = rE;
      var rO = function (e, t, r, a) {
          if ("a" === r && !a)
            throw TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !a : !t.has(e))
            throw TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === r ? a : "a" === r ? a.call(e) : a ? a.value : t.get(e);
        },
        rk = function (e, t, r, a, n) {
          if ("m" === a) throw TypeError("Private method is not writable");
          if ("a" === a && !n)
            throw TypeError("Private accessor was defined without a setter");
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
            throw TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === a ? n.call(e, r) : n ? (n.value = r) : t.set(e, r), r;
        };
      class rS extends rn {
        constructor() {
          super(...arguments),
            ek.add(this),
            eS.set(this, []),
            eA.set(this, {}),
            eP.set(this, {}),
            eI.set(this, void 0),
            eT.set(this, void 0),
            eR.set(this, void 0),
            e$.set(this, void 0),
            ej.set(this, void 0),
            eC.set(this, void 0),
            eN.set(this, void 0),
            eL.set(this, void 0),
            eM.set(this, void 0);
        }
        [((eS = new WeakMap()),
        (eA = new WeakMap()),
        (eP = new WeakMap()),
        (eI = new WeakMap()),
        (eT = new WeakMap()),
        (eR = new WeakMap()),
        (e$ = new WeakMap()),
        (ej = new WeakMap()),
        (eC = new WeakMap()),
        (eN = new WeakMap()),
        (eL = new WeakMap()),
        (eM = new WeakMap()),
        (ek = new WeakSet()),
        Symbol.asyncIterator)]() {
          let e = [],
            t = [],
            r = !1;
          return (
            this.on("event", (r) => {
              let a = t.shift();
              a ? a.resolve(r) : e.push(r);
            }),
            this.on("end", () => {
              for (let e of ((r = !0), t)) e.resolve(void 0);
              t.length = 0;
            }),
            this.on("abort", (e) => {
              for (let a of ((r = !0), t)) a.reject(e);
              t.length = 0;
            }),
            this.on("error", (e) => {
              for (let a of ((r = !0), t)) a.reject(e);
              t.length = 0;
            }),
            {
              next: async () =>
                e.length
                  ? { value: e.shift(), done: !1 }
                  : r
                  ? { value: void 0, done: !0 }
                  : new Promise((e, r) =>
                      t.push({ resolve: e, reject: r })
                    ).then((e) =>
                      e ? { value: e, done: !1 } : { value: void 0, done: !0 }
                    ),
              return: async () => (this.abort(), { value: void 0, done: !0 }),
            }
          );
        }
        static fromReadableStream(e) {
          let t = new rS();
          return t._run(() => t._fromReadableStream(e)), t;
        }
        async _fromReadableStream(e, t) {
          let r = t?.signal;
          r &&
            (r.aborted && this.controller.abort(),
            r.addEventListener("abort", () => this.controller.abort())),
            this._connected();
          let a = eG.fromReadableStream(e, this.controller);
          for await (let e of a) rO(this, ek, "m", eU).call(this, e);
          if (a.controller.signal?.aborted) throw new $();
          return this._addRun(rO(this, ek, "m", eD).call(this));
        }
        toReadableStream() {
          return new eG(
            this[Symbol.asyncIterator].bind(this),
            this.controller
          ).toReadableStream();
        }
        static createToolAssistantStream(e, t, r, a, n) {
          let i = new rS();
          return (
            i._run(() =>
              i._runToolAssistantStream(e, t, r, a, {
                ...n,
                headers: {
                  ...n?.headers,
                  "X-Stainless-Helper-Method": "stream",
                },
              })
            ),
            i
          );
        }
        async _createToolAssistantStream(e, t, r, a, n) {
          let i = n?.signal;
          i &&
            (i.aborted && this.controller.abort(),
            i.addEventListener("abort", () => this.controller.abort()));
          let s = { ...a, stream: !0 },
            o = await e.submitToolOutputs(t, r, s, {
              ...n,
              signal: this.controller.signal,
            });
          for await (let e of (this._connected(), o))
            rO(this, ek, "m", eU).call(this, e);
          if (o.controller.signal?.aborted) throw new $();
          return this._addRun(rO(this, ek, "m", eD).call(this));
        }
        static createThreadAssistantStream(e, t, r) {
          let a = new rS();
          return (
            a._run(() =>
              a._threadAssistantStream(e, t, {
                ...r,
                headers: {
                  ...r?.headers,
                  "X-Stainless-Helper-Method": "stream",
                },
              })
            ),
            a
          );
        }
        static createAssistantStream(e, t, r, a) {
          let n = new rS();
          return (
            n._run(() =>
              n._runAssistantStream(e, t, r, {
                ...a,
                headers: {
                  ...a?.headers,
                  "X-Stainless-Helper-Method": "stream",
                },
              })
            ),
            n
          );
        }
        currentEvent() {
          return rO(this, eN, "f");
        }
        currentRun() {
          return rO(this, eL, "f");
        }
        currentMessageSnapshot() {
          return rO(this, eI, "f");
        }
        currentRunStepSnapshot() {
          return rO(this, eM, "f");
        }
        async finalRunSteps() {
          return await this.done(), Object.values(rO(this, eA, "f"));
        }
        async finalMessages() {
          return await this.done(), Object.values(rO(this, eP, "f"));
        }
        async finalRun() {
          if ((await this.done(), !rO(this, eT, "f")))
            throw Error("Final run was not received.");
          return rO(this, eT, "f");
        }
        async _createThreadAssistantStream(e, t, r) {
          let a = r?.signal;
          a &&
            (a.aborted && this.controller.abort(),
            a.addEventListener("abort", () => this.controller.abort()));
          let n = { ...t, stream: !0 },
            i = await e.createAndRun(n, {
              ...r,
              signal: this.controller.signal,
            });
          for await (let e of (this._connected(), i))
            rO(this, ek, "m", eU).call(this, e);
          if (i.controller.signal?.aborted) throw new $();
          return this._addRun(rO(this, ek, "m", eD).call(this));
        }
        async _createAssistantStream(e, t, r, a) {
          let n = a?.signal;
          n &&
            (n.aborted && this.controller.abort(),
            n.addEventListener("abort", () => this.controller.abort()));
          let i = { ...r, stream: !0 },
            s = await e.create(t, i, { ...a, signal: this.controller.signal });
          for await (let e of (this._connected(), s))
            rO(this, ek, "m", eU).call(this, e);
          if (s.controller.signal?.aborted) throw new $();
          return this._addRun(rO(this, ek, "m", eD).call(this));
        }
        static accumulateDelta(e, t) {
          for (let [r, a] of Object.entries(t)) {
            if (!e.hasOwnProperty(r)) {
              e[r] = a;
              continue;
            }
            let t = e[r];
            if (null == t || "index" === r || "type" === r) {
              e[r] = a;
              continue;
            }
            if ("string" == typeof t && "string" == typeof a) t += a;
            else if ("number" == typeof t && "number" == typeof a) t += a;
            else if (tL(t) && tL(a)) t = this.accumulateDelta(t, a);
            else if (Array.isArray(t) && Array.isArray(a)) {
              if (
                t.every((e) => "string" == typeof e || "number" == typeof e)
              ) {
                t.push(...a);
                continue;
              }
              for (let e of a) {
                if (!tL(e))
                  throw Error(
                    `Expected array delta entry to be an object but got: ${e}`
                  );
                let r = e.index;
                if (null == r)
                  throw (
                    (console.error(e),
                    Error(
                      "Expected array delta entry to have an `index` property"
                    ))
                  );
                if ("number" != typeof r)
                  throw Error(
                    `Expected array delta entry \`index\` property to be a number but got ${r}`
                  );
                let a = t[r];
                null == a ? t.push(e) : (t[r] = this.accumulateDelta(a, e));
              }
              continue;
            } else
              throw Error(
                `Unhandled record type: ${r}, deltaValue: ${a}, accValue: ${t}`
              );
            e[r] = t;
          }
          return e;
        }
        _addRun(e) {
          return e;
        }
        async _threadAssistantStream(e, t, r) {
          return await this._createThreadAssistantStream(t, e, r);
        }
        async _runAssistantStream(e, t, r, a) {
          return await this._createAssistantStream(t, e, r, a);
        }
        async _runToolAssistantStream(e, t, r, a, n) {
          return await this._createToolAssistantStream(r, e, t, a, n);
        }
      }
      (eU = function (e) {
        if (!this.ended)
          switch (
            (rk(this, eN, e, "f"), rO(this, ek, "m", eB).call(this, e), e.event)
          ) {
            case "thread.created":
              break;
            case "thread.run.created":
            case "thread.run.queued":
            case "thread.run.in_progress":
            case "thread.run.requires_action":
            case "thread.run.completed":
            case "thread.run.failed":
            case "thread.run.cancelling":
            case "thread.run.cancelled":
            case "thread.run.expired":
              rO(this, ek, "m", eW).call(this, e);
              break;
            case "thread.run.step.created":
            case "thread.run.step.in_progress":
            case "thread.run.step.delta":
            case "thread.run.step.completed":
            case "thread.run.step.failed":
            case "thread.run.step.cancelled":
            case "thread.run.step.expired":
              rO(this, ek, "m", eZ).call(this, e);
              break;
            case "thread.message.created":
            case "thread.message.in_progress":
            case "thread.message.delta":
            case "thread.message.completed":
            case "thread.message.incomplete":
              rO(this, ek, "m", eF).call(this, e);
              break;
            case "error":
              throw Error(
                "Encountered an error event in event processing - errors should be processed earlier"
              );
          }
      }),
        (eD = function () {
          if (this.ended)
            throw new T("stream has ended, this shouldn't happen");
          if (!rO(this, eT, "f"))
            throw Error("Final run has not been received");
          return rO(this, eT, "f");
        }),
        (eF = function (e) {
          let [t, r] = rO(this, ek, "m", eH).call(this, e, rO(this, eI, "f"));
          for (let e of (rk(this, eI, t, "f"),
          (rO(this, eP, "f")[t.id] = t),
          r)) {
            let r = t.content[e.index];
            r?.type == "text" && this._emit("textCreated", r.text);
          }
          switch (e.event) {
            case "thread.message.created":
              this._emit("messageCreated", e.data);
              break;
            case "thread.message.in_progress":
              break;
            case "thread.message.delta":
              if (
                (this._emit("messageDelta", e.data.delta, t),
                e.data.delta.content)
              )
                for (let r of e.data.delta.content) {
                  if ("text" == r.type && r.text) {
                    let e = r.text,
                      a = t.content[r.index];
                    if (a && "text" == a.type)
                      this._emit("textDelta", e, a.text);
                    else
                      throw Error(
                        "The snapshot associated with this text delta is not text or missing"
                      );
                  }
                  if (r.index != rO(this, eR, "f")) {
                    if (rO(this, e$, "f"))
                      switch (rO(this, e$, "f").type) {
                        case "text":
                          this._emit(
                            "textDone",
                            rO(this, e$, "f").text,
                            rO(this, eI, "f")
                          );
                          break;
                        case "image_file":
                          this._emit(
                            "imageFileDone",
                            rO(this, e$, "f").image_file,
                            rO(this, eI, "f")
                          );
                      }
                    rk(this, eR, r.index, "f");
                  }
                  rk(this, e$, t.content[r.index], "f");
                }
              break;
            case "thread.message.completed":
            case "thread.message.incomplete":
              if (void 0 !== rO(this, eR, "f")) {
                let t = e.data.content[rO(this, eR, "f")];
                if (t)
                  switch (t.type) {
                    case "image_file":
                      this._emit(
                        "imageFileDone",
                        t.image_file,
                        rO(this, eI, "f")
                      );
                      break;
                    case "text":
                      this._emit("textDone", t.text, rO(this, eI, "f"));
                  }
              }
              rO(this, eI, "f") && this._emit("messageDone", e.data),
                rk(this, eI, void 0, "f");
          }
        }),
        (eZ = function (e) {
          let t = rO(this, ek, "m", eq).call(this, e);
          switch ((rk(this, eM, t, "f"), e.event)) {
            case "thread.run.step.created":
              this._emit("runStepCreated", e.data);
              break;
            case "thread.run.step.delta":
              let r = e.data.delta;
              if (
                r.step_details &&
                "tool_calls" == r.step_details.type &&
                r.step_details.tool_calls &&
                "tool_calls" == t.step_details.type
              )
                for (let e of r.step_details.tool_calls)
                  e.index == rO(this, ej, "f")
                    ? this._emit(
                        "toolCallDelta",
                        e,
                        t.step_details.tool_calls[e.index]
                      )
                    : (rO(this, eC, "f") &&
                        this._emit("toolCallDone", rO(this, eC, "f")),
                      rk(this, ej, e.index, "f"),
                      rk(this, eC, t.step_details.tool_calls[e.index], "f"),
                      rO(this, eC, "f") &&
                        this._emit("toolCallCreated", rO(this, eC, "f")));
              this._emit("runStepDelta", e.data.delta, t);
              break;
            case "thread.run.step.completed":
            case "thread.run.step.failed":
            case "thread.run.step.cancelled":
            case "thread.run.step.expired":
              rk(this, eM, void 0, "f"),
                "tool_calls" == e.data.step_details.type &&
                  rO(this, eC, "f") &&
                  (this._emit("toolCallDone", rO(this, eC, "f")),
                  rk(this, eC, void 0, "f")),
                this._emit("runStepDone", e.data, t);
          }
        }),
        (eB = function (e) {
          rO(this, eS, "f").push(e), this._emit("event", e);
        }),
        (eq = function (e) {
          switch (e.event) {
            case "thread.run.step.created":
              return (rO(this, eA, "f")[e.data.id] = e.data), e.data;
            case "thread.run.step.delta":
              let t = rO(this, eA, "f")[e.data.id];
              if (!t)
                throw Error(
                  "Received a RunStepDelta before creation of a snapshot"
                );
              let r = e.data;
              if (r.delta) {
                let a = rS.accumulateDelta(t, r.delta);
                rO(this, eA, "f")[e.data.id] = a;
              }
              return rO(this, eA, "f")[e.data.id];
            case "thread.run.step.completed":
            case "thread.run.step.failed":
            case "thread.run.step.cancelled":
            case "thread.run.step.expired":
            case "thread.run.step.in_progress":
              rO(this, eA, "f")[e.data.id] = e.data;
          }
          if (rO(this, eA, "f")[e.data.id]) return rO(this, eA, "f")[e.data.id];
          throw Error("No snapshot available");
        }),
        (eH = function (e, t) {
          let r = [];
          switch (e.event) {
            case "thread.message.created":
              return [e.data, r];
            case "thread.message.delta":
              if (!t)
                throw Error(
                  "Received a delta with no existing snapshot (there should be one from message creation)"
                );
              let a = e.data;
              if (a.delta.content)
                for (let e of a.delta.content)
                  if (e.index in t.content) {
                    let r = t.content[e.index];
                    t.content[e.index] = rO(this, ek, "m", ez).call(this, e, r);
                  } else (t.content[e.index] = e), r.push(e);
              return [t, r];
            case "thread.message.in_progress":
            case "thread.message.completed":
            case "thread.message.incomplete":
              if (t) return [t, r];
              throw Error(
                "Received thread message event with no existing snapshot"
              );
          }
          throw Error("Tried to accumulate a non-message event");
        }),
        (ez = function (e, t) {
          return rS.accumulateDelta(t, e);
        }),
        (eW = function (e) {
          switch ((rk(this, eL, e.data, "f"), e.event)) {
            case "thread.run.created":
            case "thread.run.queued":
            case "thread.run.in_progress":
              break;
            case "thread.run.requires_action":
            case "thread.run.cancelled":
            case "thread.run.failed":
            case "thread.run.completed":
            case "thread.run.expired":
              rk(this, eT, e.data, "f"),
                rO(this, eC, "f") &&
                  (this._emit("toolCallDone", rO(this, eC, "f")),
                  rk(this, eC, void 0, "f"));
          }
        });
      class rA extends tM {
        create(e, t, r) {
          return this._client.post(`/threads/${e}/messages`, {
            body: t,
            ...r,
            headers: { "OpenAI-Beta": "assistants=v2", ...r?.headers },
          });
        }
        retrieve(e, t, r) {
          return this._client.get(`/threads/${e}/messages/${t}`, {
            ...r,
            headers: { "OpenAI-Beta": "assistants=v2", ...r?.headers },
          });
        }
        update(e, t, r, a) {
          return this._client.post(`/threads/${e}/messages/${t}`, {
            body: r,
            ...a,
            headers: { "OpenAI-Beta": "assistants=v2", ...a?.headers },
          });
        }
        list(e, t = {}, r) {
          return tg(t)
            ? this.list(e, {}, t)
            : this._client.getAPIList(`/threads/${e}/messages`, rP, {
                query: t,
                ...r,
                headers: { "OpenAI-Beta": "assistants=v2", ...r?.headers },
              });
        }
        del(e, t, r) {
          return this._client.delete(`/threads/${e}/messages/${t}`, {
            ...r,
            headers: { "OpenAI-Beta": "assistants=v2", ...r?.headers },
          });
        }
      }
      class rP extends tq {}
      rA.MessagesPage = rP;
      class rI extends tM {
        retrieve(e, t, r, a = {}, n) {
          return tg(a)
            ? this.retrieve(e, t, r, {}, a)
            : this._client.get(`/threads/${e}/runs/${t}/steps/${r}`, {
                query: a,
                ...n,
                headers: { "OpenAI-Beta": "assistants=v2", ...n?.headers },
              });
        }
        list(e, t, r = {}, a) {
          return tg(r)
            ? this.list(e, t, {}, r)
            : this._client.getAPIList(`/threads/${e}/runs/${t}/steps`, rT, {
                query: r,
                ...a,
                headers: { "OpenAI-Beta": "assistants=v2", ...a?.headers },
              });
        }
      }
      class rT extends tq {}
      rI.RunStepsPage = rT;
      class rR extends tM {
        constructor() {
          super(...arguments), (this.steps = new rI(this._client));
        }
        create(e, t, r) {
          let { include: a, ...n } = t;
          return this._client.post(`/threads/${e}/runs`, {
            query: { include: a },
            body: n,
            ...r,
            headers: { "OpenAI-Beta": "assistants=v2", ...r?.headers },
            stream: t.stream ?? !1,
          });
        }
        retrieve(e, t, r) {
          return this._client.get(`/threads/${e}/runs/${t}`, {
            ...r,
            headers: { "OpenAI-Beta": "assistants=v2", ...r?.headers },
          });
        }
        update(e, t, r, a) {
          return this._client.post(`/threads/${e}/runs/${t}`, {
            body: r,
            ...a,
            headers: { "OpenAI-Beta": "assistants=v2", ...a?.headers },
          });
        }
        list(e, t = {}, r) {
          return tg(t)
            ? this.list(e, {}, t)
            : this._client.getAPIList(`/threads/${e}/runs`, r$, {
                query: t,
                ...r,
                headers: { "OpenAI-Beta": "assistants=v2", ...r?.headers },
              });
        }
        cancel(e, t, r) {
          return this._client.post(`/threads/${e}/runs/${t}/cancel`, {
            ...r,
            headers: { "OpenAI-Beta": "assistants=v2", ...r?.headers },
          });
        }
        async createAndPoll(e, t, r) {
          let a = await this.create(e, t, r);
          return await this.poll(e, a.id, r);
        }
        createAndStream(e, t, r) {
          return rS.createAssistantStream(
            e,
            this._client.beta.threads.runs,
            t,
            r
          );
        }
        async poll(e, t, r) {
          let a = { ...r?.headers, "X-Stainless-Poll-Helper": "true" };
          for (
            r?.pollIntervalMs &&
            (a["X-Stainless-Custom-Poll-Interval"] =
              r.pollIntervalMs.toString());
            ;

          ) {
            let { data: n, response: i } = await this.retrieve(e, t, {
              ...r,
              headers: { ...r?.headers, ...a },
            }).withResponse();
            switch (n.status) {
              case "queued":
              case "in_progress":
              case "cancelling":
                let s = 5e3;
                if (r?.pollIntervalMs) s = r.pollIntervalMs;
                else {
                  let e = i.headers.get("openai-poll-after-ms");
                  if (e) {
                    let t = parseInt(e);
                    isNaN(t) || (s = t);
                  }
                }
                await tO(s);
                break;
              case "requires_action":
              case "incomplete":
              case "cancelled":
              case "completed":
              case "failed":
              case "expired":
                return n;
            }
          }
        }
        stream(e, t, r) {
          return rS.createAssistantStream(
            e,
            this._client.beta.threads.runs,
            t,
            r
          );
        }
        submitToolOutputs(e, t, r, a) {
          return this._client.post(
            `/threads/${e}/runs/${t}/submit_tool_outputs`,
            {
              body: r,
              ...a,
              headers: { "OpenAI-Beta": "assistants=v2", ...a?.headers },
              stream: r.stream ?? !1,
            }
          );
        }
        async submitToolOutputsAndPoll(e, t, r, a) {
          let n = await this.submitToolOutputs(e, t, r, a);
          return await this.poll(e, n.id, a);
        }
        submitToolOutputsStream(e, t, r, a) {
          return rS.createToolAssistantStream(
            e,
            t,
            this._client.beta.threads.runs,
            r,
            a
          );
        }
      }
      class r$ extends tq {}
      (rR.RunsPage = r$), (rR.Steps = rI), (rR.RunStepsPage = rT);
      class rj extends tM {
        constructor() {
          super(...arguments),
            (this.runs = new rR(this._client)),
            (this.messages = new rA(this._client));
        }
        create(e = {}, t) {
          return tg(e)
            ? this.create({}, e)
            : this._client.post("/threads", {
                body: e,
                ...t,
                headers: { "OpenAI-Beta": "assistants=v2", ...t?.headers },
              });
        }
        retrieve(e, t) {
          return this._client.get(`/threads/${e}`, {
            ...t,
            headers: { "OpenAI-Beta": "assistants=v2", ...t?.headers },
          });
        }
        update(e, t, r) {
          return this._client.post(`/threads/${e}`, {
            body: t,
            ...r,
            headers: { "OpenAI-Beta": "assistants=v2", ...r?.headers },
          });
        }
        del(e, t) {
          return this._client.delete(`/threads/${e}`, {
            ...t,
            headers: { "OpenAI-Beta": "assistants=v2", ...t?.headers },
          });
        }
        createAndRun(e, t) {
          return this._client.post("/threads/runs", {
            body: e,
            ...t,
            headers: { "OpenAI-Beta": "assistants=v2", ...t?.headers },
            stream: e.stream ?? !1,
          });
        }
        async createAndRunPoll(e, t) {
          let r = await this.createAndRun(e, t);
          return await this.runs.poll(r.thread_id, r.id, t);
        }
        createAndRunStream(e, t) {
          return rS.createThreadAssistantStream(
            e,
            this._client.beta.threads,
            t
          );
        }
      }
      (rj.Runs = rR),
        (rj.RunsPage = r$),
        (rj.Messages = rA),
        (rj.MessagesPage = rP);
      let rC = async (e) => {
        let t = await Promise.allSettled(e),
          r = t.filter((e) => "rejected" === e.status);
        if (r.length) {
          for (let e of r) console.error(e.reason);
          throw Error(`${r.length} promise(s) failed - see the above errors`);
        }
        let a = [];
        for (let e of t) "fulfilled" === e.status && a.push(e.value);
        return a;
      };
      class rN extends tM {
        create(e, t, r) {
          return this._client.post(`/vector_stores/${e}/files`, {
            body: t,
            ...r,
            headers: { "OpenAI-Beta": "assistants=v2", ...r?.headers },
          });
        }
        retrieve(e, t, r) {
          return this._client.get(`/vector_stores/${e}/files/${t}`, {
            ...r,
            headers: { "OpenAI-Beta": "assistants=v2", ...r?.headers },
          });
        }
        list(e, t = {}, r) {
          return tg(t)
            ? this.list(e, {}, t)
            : this._client.getAPIList(`/vector_stores/${e}/files`, rL, {
                query: t,
                ...r,
                headers: { "OpenAI-Beta": "assistants=v2", ...r?.headers },
              });
        }
        del(e, t, r) {
          return this._client.delete(`/vector_stores/${e}/files/${t}`, {
            ...r,
            headers: { "OpenAI-Beta": "assistants=v2", ...r?.headers },
          });
        }
        async createAndPoll(e, t, r) {
          let a = await this.create(e, t, r);
          return await this.poll(e, a.id, r);
        }
        async poll(e, t, r) {
          let a = { ...r?.headers, "X-Stainless-Poll-Helper": "true" };
          for (
            r?.pollIntervalMs &&
            (a["X-Stainless-Custom-Poll-Interval"] =
              r.pollIntervalMs.toString());
            ;

          ) {
            let n = await this.retrieve(e, t, {
                ...r,
                headers: a,
              }).withResponse(),
              i = n.data;
            switch (i.status) {
              case "in_progress":
                let s = 5e3;
                if (r?.pollIntervalMs) s = r.pollIntervalMs;
                else {
                  let e = n.response.headers.get("openai-poll-after-ms");
                  if (e) {
                    let t = parseInt(e);
                    isNaN(t) || (s = t);
                  }
                }
                await tO(s);
                break;
              case "failed":
              case "completed":
                return i;
            }
          }
        }
        async upload(e, t, r) {
          let a = await this._client.files.create(
            { file: t, purpose: "assistants" },
            r
          );
          return this.create(e, { file_id: a.id }, r);
        }
        async uploadAndPoll(e, t, r) {
          let a = await this.upload(e, t, r);
          return await this.poll(e, a.id, r);
        }
      }
      class rL extends tq {}
      rN.VectorStoreFilesPage = rL;
      class rM extends tM {
        create(e, t, r) {
          return this._client.post(`/vector_stores/${e}/file_batches`, {
            body: t,
            ...r,
            headers: { "OpenAI-Beta": "assistants=v2", ...r?.headers },
          });
        }
        retrieve(e, t, r) {
          return this._client.get(`/vector_stores/${e}/file_batches/${t}`, {
            ...r,
            headers: { "OpenAI-Beta": "assistants=v2", ...r?.headers },
          });
        }
        cancel(e, t, r) {
          return this._client.post(
            `/vector_stores/${e}/file_batches/${t}/cancel`,
            { ...r, headers: { "OpenAI-Beta": "assistants=v2", ...r?.headers } }
          );
        }
        async createAndPoll(e, t, r) {
          let a = await this.create(e, t);
          return await this.poll(e, a.id, r);
        }
        listFiles(e, t, r = {}, a) {
          return tg(r)
            ? this.listFiles(e, t, {}, r)
            : this._client.getAPIList(
                `/vector_stores/${e}/file_batches/${t}/files`,
                rL,
                {
                  query: r,
                  ...a,
                  headers: { "OpenAI-Beta": "assistants=v2", ...a?.headers },
                }
              );
        }
        async poll(e, t, r) {
          let a = { ...r?.headers, "X-Stainless-Poll-Helper": "true" };
          for (
            r?.pollIntervalMs &&
            (a["X-Stainless-Custom-Poll-Interval"] =
              r.pollIntervalMs.toString());
            ;

          ) {
            let { data: n, response: i } = await this.retrieve(e, t, {
              ...r,
              headers: a,
            }).withResponse();
            switch (n.status) {
              case "in_progress":
                let s = 5e3;
                if (r?.pollIntervalMs) s = r.pollIntervalMs;
                else {
                  let e = i.headers.get("openai-poll-after-ms");
                  if (e) {
                    let t = parseInt(e);
                    isNaN(t) || (s = t);
                  }
                }
                await tO(s);
                break;
              case "failed":
              case "cancelled":
              case "completed":
                return n;
            }
          }
        }
        async uploadAndPoll(e, { files: t, fileIds: r = [] }, a) {
          if (null == t || 0 == t.length)
            throw Error(
              "No `files` provided to process. If you've already uploaded files you should use `.createAndPoll()` instead"
            );
          let n = Math.min(a?.maxConcurrency ?? 5, t.length),
            i = this._client,
            s = t.values(),
            o = [...r];
          async function l(e) {
            for (let t of e) {
              let e = await i.files.create(
                { file: t, purpose: "assistants" },
                a
              );
              o.push(e.id);
            }
          }
          let u = Array(n).fill(s).map(l);
          return await rC(u), await this.createAndPoll(e, { file_ids: o });
        }
      }
      class rU extends tM {
        constructor() {
          super(...arguments),
            (this.files = new rN(this._client)),
            (this.fileBatches = new rM(this._client));
        }
        create(e, t) {
          return this._client.post("/vector_stores", {
            body: e,
            ...t,
            headers: { "OpenAI-Beta": "assistants=v2", ...t?.headers },
          });
        }
        retrieve(e, t) {
          return this._client.get(`/vector_stores/${e}`, {
            ...t,
            headers: { "OpenAI-Beta": "assistants=v2", ...t?.headers },
          });
        }
        update(e, t, r) {
          return this._client.post(`/vector_stores/${e}`, {
            body: t,
            ...r,
            headers: { "OpenAI-Beta": "assistants=v2", ...r?.headers },
          });
        }
        list(e = {}, t) {
          return tg(e)
            ? this.list({}, e)
            : this._client.getAPIList("/vector_stores", rD, {
                query: e,
                ...t,
                headers: { "OpenAI-Beta": "assistants=v2", ...t?.headers },
              });
        }
        del(e, t) {
          return this._client.delete(`/vector_stores/${e}`, {
            ...t,
            headers: { "OpenAI-Beta": "assistants=v2", ...t?.headers },
          });
        }
      }
      class rD extends tq {}
      (rU.VectorStoresPage = rD),
        (rU.Files = rN),
        (rU.VectorStoreFilesPage = rL),
        (rU.FileBatches = rM);
      class rF extends tM {
        constructor() {
          super(...arguments),
            (this.vectorStores = new rU(this._client)),
            (this.chat = new rx(this._client)),
            (this.assistants = new t9(this._client)),
            (this.threads = new rj(this._client));
        }
      }
      (rF.VectorStores = rU),
        (rF.VectorStoresPage = rD),
        (rF.Assistants = t9),
        (rF.AssistantsPage = t3),
        (rF.Threads = rj);
      class rZ extends tM {
        create(e, t) {
          return this._client.post("/batches", { body: e, ...t });
        }
        retrieve(e, t) {
          return this._client.get(`/batches/${e}`, t);
        }
        list(e = {}, t) {
          return tg(e)
            ? this.list({}, e)
            : this._client.getAPIList("/batches", rB, { query: e, ...t });
        }
        cancel(e, t) {
          return this._client.post(`/batches/${e}/cancel`, t);
        }
      }
      class rB extends tq {}
      rZ.BatchesPage = rB;
      class rq extends tM {
        create(e, t, r) {
          return this._client.post(
            `/uploads/${e}/parts`,
            te({ body: t, ...r })
          );
        }
      }
      class rH extends tM {
        constructor() {
          super(...arguments), (this.parts = new rq(this._client));
        }
        create(e, t) {
          return this._client.post("/uploads", { body: e, ...t });
        }
        cancel(e, t) {
          return this._client.post(`/uploads/${e}/cancel`, t);
        }
        complete(e, t, r) {
          return this._client.post(`/uploads/${e}/complete`, { body: t, ...r });
        }
      }
      (rH.Parts = rq), r(34155);
      class rz extends td {
        constructor({
          baseURL: e = tA("OPENAI_BASE_URL"),
          apiKey: t = tA("OPENAI_API_KEY"),
          organization: r = tA("OPENAI_ORG_ID") ?? null,
          project: a = tA("OPENAI_PROJECT_ID") ?? null,
          ...n
        } = {}) {
          if (void 0 === t)
            throw new T(
              "The OPENAI_API_KEY environment variable is missing or empty; either provide it, or instantiate the OpenAI client with an apiKey option, like new OpenAI({ apiKey: 'My API Key' })."
            );
          let i = {
            apiKey: t,
            organization: r,
            project: a,
            ...n,
            baseURL: e || "https://api.openai.com/v1",
          };
          if (!i.dangerouslyAllowBrowser && tj())
            throw new T(
              "It looks like you're running in a browser-like environment.\n\nThis is disabled by default, as it risks exposing your secret API credentials to attackers.\nIf you understand the risks and have appropriate mitigations in place,\nyou can set the `dangerouslyAllowBrowser` option to `true`, e.g.,\n\nnew OpenAI({ apiKey, dangerouslyAllowBrowser: true });\n\nhttps://help.openai.com/en/articles/5112595-best-practices-for-api-key-safety\n"
            );
          super({
            baseURL: i.baseURL,
            timeout: i.timeout ?? 6e5,
            httpAgent: i.httpAgent,
            maxRetries: i.maxRetries,
            fetch: i.fetch,
          }),
            (this.completions = new tU(this)),
            (this.chat = new tF(this)),
            (this.embeddings = new tZ(this)),
            (this.files = new tH(this)),
            (this.images = new tW(this)),
            (this.audio = new tX(this)),
            (this.moderations = new tK(this)),
            (this.models = new tQ(this)),
            (this.fineTuning = new t6(this)),
            (this.beta = new rF(this)),
            (this.batches = new rZ(this)),
            (this.uploads = new rH(this)),
            (this._options = i),
            (this.apiKey = t),
            (this.organization = r),
            (this.project = a);
        }
        defaultQuery() {
          return this._options.defaultQuery;
        }
        defaultHeaders(e) {
          return {
            ...super.defaultHeaders(e),
            "OpenAI-Organization": this.organization,
            "OpenAI-Project": this.project,
            ...this._options.defaultHeaders,
          };
        }
        authHeaders(e) {
          return { Authorization: `Bearer ${this.apiKey}` };
        }
        stringifyQuery(e) {
          return (function (e, t = {}) {
            let r,
              a = e,
              n = (function (e = k) {
                let t;
                if (
                  void 0 !== e.allowEmptyArrays &&
                  "boolean" != typeof e.allowEmptyArrays
                )
                  throw TypeError(
                    "`allowEmptyArrays` option can only be `true` or `false`, when provided"
                  );
                if (
                  void 0 !== e.encodeDotInKeys &&
                  "boolean" != typeof e.encodeDotInKeys
                )
                  throw TypeError(
                    "`encodeDotInKeys` option can only be `true` or `false`, when provided"
                  );
                if (
                  null !== e.encoder &&
                  void 0 !== e.encoder &&
                  "function" != typeof e.encoder
                )
                  throw TypeError("Encoder has to be a function.");
                let r = e.charset || k.charset;
                if (
                  void 0 !== e.charset &&
                  "utf-8" !== e.charset &&
                  "iso-8859-1" !== e.charset
                )
                  throw TypeError(
                    "The charset option must be either utf-8, iso-8859-1, or undefined"
                  );
                let a = f;
                if (void 0 !== e.format) {
                  if (!_.call(m, e.format))
                    throw TypeError("Unknown format option provided.");
                  a = e.format;
                }
                let n = m[a],
                  i = k.filter;
                if (
                  (("function" == typeof e.filter || w(e.filter)) &&
                    (i = e.filter),
                  (t =
                    e.arrayFormat && e.arrayFormat in v
                      ? e.arrayFormat
                      : "indices" in e
                      ? e.indices
                        ? "indices"
                        : "repeat"
                      : k.arrayFormat),
                  "commaRoundTrip" in e && "boolean" != typeof e.commaRoundTrip)
                )
                  throw TypeError(
                    "`commaRoundTrip` must be a boolean, or absent"
                  );
                let s =
                  void 0 === e.allowDots
                    ? !0 == !!e.encodeDotInKeys || k.allowDots
                    : !!e.allowDots;
                return {
                  addQueryPrefix:
                    "boolean" == typeof e.addQueryPrefix
                      ? e.addQueryPrefix
                      : k.addQueryPrefix,
                  allowDots: s,
                  allowEmptyArrays:
                    "boolean" == typeof e.allowEmptyArrays
                      ? !!e.allowEmptyArrays
                      : k.allowEmptyArrays,
                  arrayFormat: t,
                  charset: r,
                  charsetSentinel:
                    "boolean" == typeof e.charsetSentinel
                      ? e.charsetSentinel
                      : k.charsetSentinel,
                  commaRoundTrip: !!e.commaRoundTrip,
                  delimiter: void 0 === e.delimiter ? k.delimiter : e.delimiter,
                  encode: "boolean" == typeof e.encode ? e.encode : k.encode,
                  encodeDotInKeys:
                    "boolean" == typeof e.encodeDotInKeys
                      ? e.encodeDotInKeys
                      : k.encodeDotInKeys,
                  encoder:
                    "function" == typeof e.encoder ? e.encoder : k.encoder,
                  encodeValuesOnly:
                    "boolean" == typeof e.encodeValuesOnly
                      ? e.encodeValuesOnly
                      : k.encodeValuesOnly,
                  filter: i,
                  format: a,
                  formatter: n,
                  serializeDate:
                    "function" == typeof e.serializeDate
                      ? e.serializeDate
                      : k.serializeDate,
                  skipNulls:
                    "boolean" == typeof e.skipNulls ? e.skipNulls : k.skipNulls,
                  sort: "function" == typeof e.sort ? e.sort : null,
                  strictNullHandling:
                    "boolean" == typeof e.strictNullHandling
                      ? e.strictNullHandling
                      : k.strictNullHandling,
                };
              })(t);
            "function" == typeof n.filter
              ? (a = (0, n.filter)("", a))
              : w(n.filter) && (r = n.filter);
            let i = [];
            if ("object" != typeof a || null === a) return "";
            let s = v[n.arrayFormat],
              o = "comma" === s && n.commaRoundTrip;
            r || (r = Object.keys(a)), n.sort && r.sort(n.sort);
            let l = new WeakMap();
            for (let e = 0; e < r.length; ++e) {
              let t = r[e];
              (n.skipNulls && null === a[t]) ||
                x(
                  i,
                  (function e(
                    t,
                    r,
                    a,
                    n,
                    i,
                    s,
                    o,
                    l,
                    u,
                    c,
                    d,
                    h,
                    p,
                    f,
                    m,
                    g,
                    y,
                    _
                  ) {
                    var v, E;
                    let O,
                      A = t,
                      P = _,
                      I = 0,
                      T = !1;
                    for (; void 0 !== (P = P.get(S)) && !T; ) {
                      let e = P.get(t);
                      if (((I += 1), void 0 !== e)) {
                        if (e === I) throw RangeError("Cyclic object value");
                        T = !0;
                      }
                      void 0 === P.get(S) && (I = 0);
                    }
                    if (
                      ("function" == typeof c
                        ? (A = c(r, A))
                        : A instanceof Date
                        ? (A = p?.(A))
                        : "comma" === a &&
                          w(A) &&
                          (A = b(A, function (e) {
                            return e instanceof Date ? p?.(e) : e;
                          })),
                      null === A)
                    ) {
                      if (s) return u && !g ? u(r, k.encoder, y, "key", f) : r;
                      A = "";
                    }
                    if (
                      "string" == typeof (v = A) ||
                      "number" == typeof v ||
                      "boolean" == typeof v ||
                      "symbol" == typeof v ||
                      "bigint" == typeof v ||
                      ((E = A) &&
                        "object" == typeof E &&
                        E.constructor &&
                        E.constructor.isBuffer &&
                        E.constructor.isBuffer(E))
                    ) {
                      if (u) {
                        let e = g ? r : u(r, k.encoder, y, "key", f);
                        return [
                          m?.(e) + "=" + m?.(u(A, k.encoder, y, "value", f)),
                        ];
                      }
                      return [m?.(r) + "=" + m?.(String(A))];
                    }
                    let R = [];
                    if (void 0 === A) return R;
                    if ("comma" === a && w(A))
                      g && u && (A = b(A, u)),
                        (O = [
                          {
                            value: A.length > 0 ? A.join(",") || null : void 0,
                          },
                        ]);
                    else if (w(c)) O = c;
                    else {
                      let e = Object.keys(A);
                      O = d ? e.sort(d) : e;
                    }
                    let $ = l ? String(r).replace(/\./g, "%2E") : String(r),
                      j = n && w(A) && 1 === A.length ? $ + "[]" : $;
                    if (i && w(A) && 0 === A.length) return j + "[]";
                    for (let r = 0; r < O.length; ++r) {
                      let b = O[r],
                        v =
                          "object" == typeof b && void 0 !== b.value
                            ? b.value
                            : A[b];
                      if (o && null === v) continue;
                      let E = h && l ? b.replace(/\./g, "%2E") : b,
                        k = w(A)
                          ? "function" == typeof a
                            ? a(j, E)
                            : j
                          : j + (h ? "." + E : "[" + E + "]");
                      _.set(t, I);
                      let P = new WeakMap();
                      P.set(S, _),
                        x(
                          R,
                          e(
                            v,
                            k,
                            a,
                            n,
                            i,
                            s,
                            o,
                            l,
                            "comma" === a && g && w(A) ? null : u,
                            c,
                            d,
                            h,
                            p,
                            f,
                            m,
                            g,
                            y,
                            P
                          )
                        );
                    }
                    return R;
                  })(
                    a[t],
                    t,
                    s,
                    o,
                    n.allowEmptyArrays,
                    n.strictNullHandling,
                    n.skipNulls,
                    n.encodeDotInKeys,
                    n.encode ? n.encoder : null,
                    n.filter,
                    n.sort,
                    n.allowDots,
                    n.serializeDate,
                    n.format,
                    n.formatter,
                    n.encodeValuesOnly,
                    n.charset,
                    l
                  )
                );
            }
            let u = i.join(n.delimiter),
              c = !0 === n.addQueryPrefix ? "?" : "";
            return (
              n.charsetSentinel &&
                ("iso-8859-1" === n.charset
                  ? (c += "utf8=%26%2310003%3B&")
                  : (c += "utf8=%E2%9C%93&")),
              u.length > 0 ? c + u : ""
            );
          })(e, { arrayFormat: "brackets" });
        }
      }
      (rz.OpenAI = rz),
        (rz.DEFAULT_TIMEOUT = 6e5),
        (rz.OpenAIError = T),
        (rz.APIError = R),
        (rz.APIConnectionError = j),
        (rz.APIConnectionTimeoutError = C),
        (rz.APIUserAbortError = $),
        (rz.NotFoundError = U),
        (rz.ConflictError = D),
        (rz.RateLimitError = Z),
        (rz.BadRequestError = N),
        (rz.AuthenticationError = L),
        (rz.InternalServerError = B),
        (rz.PermissionDeniedError = M),
        (rz.UnprocessableEntityError = F),
        (rz.toFile = e6),
        (rz.fileFromPath = h),
        (rz.Completions = tU),
        (rz.Chat = tF),
        (rz.Embeddings = tZ),
        (rz.Files = tH),
        (rz.FileObjectsPage = tz),
        (rz.Images = tW),
        (rz.Audio = tX),
        (rz.Moderations = tK),
        (rz.Models = tQ),
        (rz.ModelsPage = tY),
        (rz.FineTuning = t6),
        (rz.Beta = rF),
        (rz.Batches = rZ),
        (rz.BatchesPage = rB),
        (rz.Uploads = rH),
        r(26679),
        r(1381);
      var rW = r(44018);
      r(95280),
        r(82905),
        r(4670),
        r(85248),
        r(61223),
        r(99701),
        r(14713),
        r(82882),
        r(9321);
      var rJ = r(1604);
      function rV(e, t, r, a) {
        a?.errorMessages &&
          r &&
          (e.errorMessage = { ...e.errorMessage, [t]: r });
      }
      function rG(e, t, r, a, n) {
        (e[t] = r), rV(e, t, a, n);
      }
      let rX = (e, t) => ar(e.innerType._def, t),
        rK = (e, t) => {
          let r = { type: "integer", format: "unix-time" };
          if ("openApi3" === t.target) return r;
          for (let a of e.checks)
            switch (a.kind) {
              case "min":
                rG(r, "minimum", a.value, a.message, t);
                break;
              case "max":
                rG(r, "maximum", a.value, a.message, t);
            }
          return r;
        },
        rQ = (e) => (!("type" in e) || "string" !== e.type) && "allOf" in e,
        rY = {
          cuid: /^[cC][^\s-]{8,}$/,
          cuid2: /^[0-9a-z]+$/,
          ulid: /^[0-9A-HJKMNP-TV-Z]{26}$/,
          email:
            /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$/,
          emoji: () => (
            void 0 === n &&
              (n = RegExp(
                "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",
                "u"
              )),
            n
          ),
          base64:
            /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
          nanoid: /^[a-zA-Z0-9_-]{21}$/,
        };
      function r0(e, t) {
        let r = { type: "string" };
        function a(e) {
          return "escape" === t.patternStrategy ? r1(e) : e;
        }
        if (e.checks)
          for (let n of e.checks)
            switch (n.kind) {
              case "min":
                rG(
                  r,
                  "minLength",
                  "number" == typeof r.minLength
                    ? Math.max(r.minLength, n.value)
                    : n.value,
                  n.message,
                  t
                );
                break;
              case "max":
                rG(
                  r,
                  "maxLength",
                  "number" == typeof r.maxLength
                    ? Math.min(r.maxLength, n.value)
                    : n.value,
                  n.message,
                  t
                );
                break;
              case "email":
                switch (t.emailStrategy) {
                  case "format:email":
                    r2(r, "email", n.message, t);
                    break;
                  case "format:idn-email":
                    r2(r, "idn-email", n.message, t);
                    break;
                  case "pattern:zod":
                    r4(r, rY.email, n.message, t);
                }
                break;
              case "url":
                r2(r, "uri", n.message, t);
                break;
              case "uuid":
                r2(r, "uuid", n.message, t);
                break;
              case "regex":
                r4(r, n.regex, n.message, t);
                break;
              case "cuid":
                r4(r, rY.cuid, n.message, t);
                break;
              case "cuid2":
                r4(r, rY.cuid2, n.message, t);
                break;
              case "startsWith":
                r4(r, RegExp(`^${a(n.value)}`), n.message, t);
                break;
              case "endsWith":
                r4(r, RegExp(`${a(n.value)}$`), n.message, t);
                break;
              case "datetime":
                r2(r, "date-time", n.message, t);
                break;
              case "date":
                r2(r, "date", n.message, t);
                break;
              case "time":
                r2(r, "time", n.message, t);
                break;
              case "duration":
                r2(r, "duration", n.message, t);
                break;
              case "length":
                rG(
                  r,
                  "minLength",
                  "number" == typeof r.minLength
                    ? Math.max(r.minLength, n.value)
                    : n.value,
                  n.message,
                  t
                ),
                  rG(
                    r,
                    "maxLength",
                    "number" == typeof r.maxLength
                      ? Math.min(r.maxLength, n.value)
                      : n.value,
                    n.message,
                    t
                  );
                break;
              case "includes":
                r4(r, RegExp(a(n.value)), n.message, t);
                break;
              case "ip":
                "v6" !== n.version && r2(r, "ipv4", n.message, t),
                  "v4" !== n.version && r2(r, "ipv6", n.message, t);
                break;
              case "emoji":
                r4(r, rY.emoji, n.message, t);
                break;
              case "ulid":
                r4(r, rY.ulid, n.message, t);
                break;
              case "base64":
                switch (t.base64Strategy) {
                  case "format:binary":
                    r2(r, "binary", n.message, t);
                    break;
                  case "contentEncoding:base64":
                    rG(r, "contentEncoding", "base64", n.message, t);
                    break;
                  case "pattern:zod":
                    r4(r, rY.base64, n.message, t);
                }
                break;
              case "nanoid":
                r4(r, rY.nanoid, n.message, t);
            }
        return r;
      }
      let r1 = (e) =>
          Array.from(e)
            .map((e) => (/[a-zA-Z0-9]/.test(e) ? e : `\\${e}`))
            .join(""),
        r2 = (e, t, r, a) => {
          e.format || e.anyOf?.some((e) => e.format)
            ? (e.anyOf || (e.anyOf = []),
              e.format &&
                (e.anyOf.push({
                  format: e.format,
                  ...(e.errorMessage &&
                    a.errorMessages && {
                      errorMessage: { format: e.errorMessage.format },
                    }),
                }),
                delete e.format,
                e.errorMessage &&
                  (delete e.errorMessage.format,
                  0 === Object.keys(e.errorMessage).length &&
                    delete e.errorMessage)),
              e.anyOf.push({
                format: t,
                ...(r && a.errorMessages && { errorMessage: { format: r } }),
              }))
            : rG(e, "format", t, r, a);
        },
        r4 = (e, t, r, a) => {
          e.pattern || e.allOf?.some((e) => e.pattern)
            ? (e.allOf || (e.allOf = []),
              e.pattern &&
                (e.allOf.push({
                  pattern: e.pattern,
                  ...(e.errorMessage &&
                    a.errorMessages && {
                      errorMessage: { pattern: e.errorMessage.pattern },
                    }),
                }),
                delete e.pattern,
                e.errorMessage &&
                  (delete e.errorMessage.pattern,
                  0 === Object.keys(e.errorMessage).length &&
                    delete e.errorMessage)),
              e.allOf.push({
                pattern: r5(t, a),
                ...(r && a.errorMessages && { errorMessage: { pattern: r } }),
              }))
            : rG(e, "pattern", r5(t, a), r, a);
        },
        r5 = (e, t) => {
          let r = "function" == typeof e ? e() : e;
          if (!t.applyRegexFlags || !r.flags) return r.source;
          let a = {
              i: r.flags.includes("i"),
              m: r.flags.includes("m"),
              s: r.flags.includes("s"),
            },
            n = a.i ? r.source.toLowerCase() : r.source,
            i = "",
            s = !1,
            o = !1,
            l = !1;
          for (let e = 0; e < n.length; e++) {
            if (s) {
              (i += n[e]), (s = !1);
              continue;
            }
            if (a.i) {
              if (o) {
                if (n[e].match(/[a-z]/)) {
                  l
                    ? ((i += n[e] + `${n[e - 2]}-${n[e]}`.toUpperCase()),
                      (l = !1))
                    : "-" === n[e + 1] && n[e + 2]?.match(/[a-z]/)
                    ? ((i += n[e]), (l = !0))
                    : (i += `${n[e]}${n[e].toUpperCase()}`);
                  continue;
                }
              } else if (n[e].match(/[a-z]/)) {
                i += `[${n[e]}${n[e].toUpperCase()}]`;
                continue;
              }
            }
            if (a.m) {
              if ("^" === n[e]) {
                i += `(^|(?<=[\r
]))`;
                continue;
              }
              if ("$" === n[e]) {
                i += `($|(?=[\r
]))`;
                continue;
              }
            }
            if (a.s && "." === n[e]) {
              i += o
                ? `${n[e]}\r
`
                : `[${n[e]}\r
]`;
              continue;
            }
            (i += n[e]),
              "\\" === n[e]
                ? (s = !0)
                : o && "]" === n[e]
                ? (o = !1)
                : o || "[" !== n[e] || (o = !0);
          }
          try {
            new RegExp(i);
          } catch {
            return (
              console.warn(
                `Could not convert regex pattern at ${t.currentPath.join(
                  "/"
                )} to a flag-independent form! Falling back to the flag-ignorant source`
              ),
              r.source
            );
          }
          return i;
        };
      function r6(e, t) {
        if (
          "openApi3" === t.target &&
          e.keyType?._def.typeName === rJ.pA.ZodEnum
        )
          return {
            type: "object",
            required: e.keyType._def.values,
            properties: e.keyType._def.values.reduce(
              (r, a) => ({
                ...r,
                [a]:
                  ar(e.valueType._def, {
                    ...t,
                    currentPath: [...t.currentPath, "properties", a],
                  }) ?? {},
              }),
              {}
            ),
            additionalProperties: !1,
          };
        let r = {
          type: "object",
          additionalProperties:
            ar(e.valueType._def, {
              ...t,
              currentPath: [...t.currentPath, "additionalProperties"],
            }) ?? {},
        };
        if ("openApi3" === t.target) return r;
        if (
          e.keyType?._def.typeName === rJ.pA.ZodString &&
          e.keyType._def.checks?.length
        ) {
          let a = Object.entries(r0(e.keyType._def, t)).reduce(
            (e, [t, r]) => ("type" === t ? e : { ...e, [t]: r }),
            {}
          );
          return { ...r, propertyNames: a };
        }
        return e.keyType?._def.typeName === rJ.pA.ZodEnum
          ? { ...r, propertyNames: { enum: e.keyType._def.values } }
          : r;
      }
      let r9 = {
          ZodString: "string",
          ZodNumber: "number",
          ZodBigInt: "integer",
          ZodBoolean: "boolean",
          ZodNull: "null",
        },
        r3 = (e, t) => {
          let r = (
            e.options instanceof Map
              ? Array.from(e.options.values())
              : e.options
          )
            .map((e, r) =>
              ar(e._def, {
                ...t,
                currentPath: [...t.currentPath, "anyOf", `${r}`],
              })
            )
            .filter(
              (e) =>
                !!e &&
                (!t.strictUnions ||
                  ("object" == typeof e && Object.keys(e).length > 0))
            );
          return r.length ? { anyOf: r } : void 0;
        },
        r8 = (e, t) => {
          if (t.currentPath.toString() === t.propertyPath?.toString())
            return ar(e.innerType._def, t);
          let r = ar(e.innerType._def, {
            ...t,
            currentPath: [...t.currentPath, "anyOf", "1"],
          });
          return r ? { anyOf: [{ not: {} }, r] } : {};
        },
        r7 = (e, t) => {
          if ("input" === t.pipeStrategy) return ar(e.in._def, t);
          if ("output" === t.pipeStrategy) return ar(e.out._def, t);
          let r = ar(e.in._def, {
              ...t,
              currentPath: [...t.currentPath, "allOf", "0"],
            }),
            a = ar(e.out._def, {
              ...t,
              currentPath: [...t.currentPath, "allOf", r ? "1" : "0"],
            });
          return { allOf: [r, a].filter((e) => void 0 !== e) };
        },
        ae = (e, t) => ar(e.innerType._def, t),
        at = Symbol("Let zodToJsonSchema decide on which parser to use");
      function ar(e, t, r = !1) {
        let a = t.seen.get(e);
        if (t.override) {
          let n = t.override?.(e, t, a, r);
          if (n !== at) return n;
        }
        if (a && !r) {
          let e = aa(a, t);
          if (void 0 !== e) return "$ref" in e && t.seenRefs.add(e.$ref), e;
        }
        let n = { def: e, path: t.currentPath, jsonSchema: void 0 };
        t.seen.set(e, n);
        let i = ai(e, e.typeName, t, r);
        return i && as(e, t, i), (n.jsonSchema = i), i;
      }
      let aa = (e, t) => {
          switch (t.$refStrategy) {
            case "root":
              return { $ref: e.path.join("/") };
            case "extract-to-root":
              let r = e.path.slice(t.basePath.length + 1).join("_");
              return (
                r !== t.name &&
                  "duplicate-ref" === t.nameStrategy &&
                  (t.definitions[r] = e.def),
                { $ref: [...t.basePath, t.definitionPath, r].join("/") }
              );
            case "relative":
              return { $ref: an(t.currentPath, e.path) };
            case "none":
            case "seen":
              if (
                e.path.length < t.currentPath.length &&
                e.path.every((e, r) => t.currentPath[r] === e)
              )
                return (
                  console.warn(
                    `Recursive reference detected at ${t.currentPath.join(
                      "/"
                    )}! Defaulting to any`
                  ),
                  {}
                );
              return "seen" === t.$refStrategy ? {} : void 0;
          }
        },
        an = (e, t) => {
          let r = 0;
          for (; r < e.length && r < t.length && e[r] === t[r]; r++);
          return [(e.length - r).toString(), ...t.slice(r)].join("/");
        },
        ai = (e, t, r, a) => {
          switch (t) {
            case rJ.pA.ZodString:
              return r0(e, r);
            case rJ.pA.ZodNumber:
              return (function (e, t) {
                let r = { type: "number" };
                if (!e.checks) return r;
                for (let a of e.checks)
                  switch (a.kind) {
                    case "int":
                      (r.type = "integer"), rV(r, "type", a.message, t);
                      break;
                    case "min":
                      "jsonSchema7" === t.target
                        ? a.inclusive
                          ? rG(r, "minimum", a.value, a.message, t)
                          : rG(r, "exclusiveMinimum", a.value, a.message, t)
                        : (a.inclusive || (r.exclusiveMinimum = !0),
                          rG(r, "minimum", a.value, a.message, t));
                      break;
                    case "max":
                      "jsonSchema7" === t.target
                        ? a.inclusive
                          ? rG(r, "maximum", a.value, a.message, t)
                          : rG(r, "exclusiveMaximum", a.value, a.message, t)
                        : (a.inclusive || (r.exclusiveMaximum = !0),
                          rG(r, "maximum", a.value, a.message, t));
                      break;
                    case "multipleOf":
                      rG(r, "multipleOf", a.value, a.message, t);
                  }
                return r;
              })(e, r);
            case rJ.pA.ZodObject:
              return (function (e, t) {
                let r = {
                  type: "object",
                  ...Object.entries(e.shape()).reduce(
                    (e, [r, a]) => {
                      if (void 0 === a || void 0 === a._def) return e;
                      let n = ar(a._def, {
                        ...t,
                        currentPath: [...t.currentPath, "properties", r],
                        propertyPath: [...t.currentPath, "properties", r],
                      });
                      return void 0 === n
                        ? e
                        : {
                            properties: { ...e.properties, [r]: n },
                            required:
                              a.isOptional() && !t.openaiStrictMode
                                ? e.required
                                : [...e.required, r],
                          };
                    },
                    { properties: {}, required: [] }
                  ),
                  additionalProperties:
                    "strict" === t.removeAdditionalStrategy
                      ? "ZodNever" === e.catchall._def.typeName
                        ? "strict" !== e.unknownKeys
                        : ar(e.catchall._def, {
                            ...t,
                            currentPath: [
                              ...t.currentPath,
                              "additionalProperties",
                            ],
                          }) ?? !0
                      : "ZodNever" === e.catchall._def.typeName
                      ? "passthrough" === e.unknownKeys
                      : ar(e.catchall._def, {
                          ...t,
                          currentPath: [
                            ...t.currentPath,
                            "additionalProperties",
                          ],
                        }) ?? !0,
                };
                return r.required.length || delete r.required, r;
              })(e, r);
            case rJ.pA.ZodBigInt:
              return (function (e, t) {
                let r = { type: "integer", format: "int64" };
                if (!e.checks) return r;
                for (let a of e.checks)
                  switch (a.kind) {
                    case "min":
                      "jsonSchema7" === t.target
                        ? a.inclusive
                          ? rG(r, "minimum", a.value, a.message, t)
                          : rG(r, "exclusiveMinimum", a.value, a.message, t)
                        : (a.inclusive || (r.exclusiveMinimum = !0),
                          rG(r, "minimum", a.value, a.message, t));
                      break;
                    case "max":
                      "jsonSchema7" === t.target
                        ? a.inclusive
                          ? rG(r, "maximum", a.value, a.message, t)
                          : rG(r, "exclusiveMaximum", a.value, a.message, t)
                        : (a.inclusive || (r.exclusiveMaximum = !0),
                          rG(r, "maximum", a.value, a.message, t));
                      break;
                    case "multipleOf":
                      rG(r, "multipleOf", a.value, a.message, t);
                  }
                return r;
              })(e, r);
            case rJ.pA.ZodBoolean:
              return { type: "boolean" };
            case rJ.pA.ZodDate:
              return (function e(t, r, a) {
                let n = a ?? r.dateStrategy;
                if (Array.isArray(n))
                  return { anyOf: n.map((a, n) => e(t, r, a)) };
                switch (n) {
                  case "string":
                  case "format:date-time":
                    return { type: "string", format: "date-time" };
                  case "format:date":
                    return { type: "string", format: "date" };
                  case "integer":
                    return rK(t, r);
                }
              })(e, r);
            case rJ.pA.ZodUndefined:
              return { not: {} };
            case rJ.pA.ZodNull:
              return "openApi3" === r.target
                ? { enum: ["null"], nullable: !0 }
                : { type: "null" };
            case rJ.pA.ZodArray:
              return (function (e, t) {
                let r = { type: "array" };
                return (
                  e.type?._def?.typeName !== rJ.pA.ZodAny &&
                    (r.items = ar(e.type._def, {
                      ...t,
                      currentPath: [...t.currentPath, "items"],
                    })),
                  e.minLength &&
                    rG(
                      r,
                      "minItems",
                      e.minLength.value,
                      e.minLength.message,
                      t
                    ),
                  e.maxLength &&
                    rG(
                      r,
                      "maxItems",
                      e.maxLength.value,
                      e.maxLength.message,
                      t
                    ),
                  e.exactLength &&
                    (rG(
                      r,
                      "minItems",
                      e.exactLength.value,
                      e.exactLength.message,
                      t
                    ),
                    rG(
                      r,
                      "maxItems",
                      e.exactLength.value,
                      e.exactLength.message,
                      t
                    )),
                  r
                );
              })(e, r);
            case rJ.pA.ZodUnion:
            case rJ.pA.ZodDiscriminatedUnion:
              return (function (e, t) {
                if ("openApi3" === t.target) return r3(e, t);
                let r =
                  e.options instanceof Map
                    ? Array.from(e.options.values())
                    : e.options;
                if (
                  r.every(
                    (e) =>
                      e._def.typeName in r9 &&
                      (!e._def.checks || !e._def.checks.length)
                  )
                ) {
                  let e = r.reduce((e, t) => {
                    let r = r9[t._def.typeName];
                    return r && !e.includes(r) ? [...e, r] : e;
                  }, []);
                  return { type: e.length > 1 ? e : e[0] };
                }
                if (
                  r.every(
                    (e) => "ZodLiteral" === e._def.typeName && !e.description
                  )
                ) {
                  let e = r.reduce((e, t) => {
                    let r = typeof t._def.value;
                    switch (r) {
                      case "string":
                      case "number":
                      case "boolean":
                        return [...e, r];
                      case "bigint":
                        return [...e, "integer"];
                      case "object":
                        if (null === t._def.value) return [...e, "null"];
                      default:
                        return e;
                    }
                  }, []);
                  if (e.length === r.length) {
                    let t = e.filter((e, t, r) => r.indexOf(e) === t);
                    return {
                      type: t.length > 1 ? t : t[0],
                      enum: r.reduce(
                        (e, t) =>
                          e.includes(t._def.value) ? e : [...e, t._def.value],
                        []
                      ),
                    };
                  }
                } else if (r.every((e) => "ZodEnum" === e._def.typeName))
                  return {
                    type: "string",
                    enum: r.reduce(
                      (e, t) => [
                        ...e,
                        ...t._def.values.filter((t) => !e.includes(t)),
                      ],
                      []
                    ),
                  };
                return r3(e, t);
              })(e, r);
            case rJ.pA.ZodIntersection:
              return (function (e, t) {
                let r = [
                    ar(e.left._def, {
                      ...t,
                      currentPath: [...t.currentPath, "allOf", "0"],
                    }),
                    ar(e.right._def, {
                      ...t,
                      currentPath: [...t.currentPath, "allOf", "1"],
                    }),
                  ].filter((e) => !!e),
                  a =
                    "jsonSchema2019-09" === t.target
                      ? { unevaluatedProperties: !1 }
                      : void 0,
                  n = [];
                return (
                  r.forEach((e) => {
                    if (rQ(e))
                      n.push(...e.allOf),
                        void 0 === e.unevaluatedProperties && (a = void 0);
                    else {
                      let t = e;
                      if (
                        "additionalProperties" in e &&
                        !1 === e.additionalProperties
                      ) {
                        let { additionalProperties: r, ...a } = e;
                        t = a;
                      } else a = void 0;
                      n.push(t);
                    }
                  }),
                  n.length ? { allOf: n, ...a } : void 0
                );
              })(e, r);
            case rJ.pA.ZodTuple:
              return e.rest
                ? {
                    type: "array",
                    minItems: e.items.length,
                    items: e.items
                      .map((e, t) =>
                        ar(e._def, {
                          ...r,
                          currentPath: [...r.currentPath, "items", `${t}`],
                        })
                      )
                      .reduce((e, t) => (void 0 === t ? e : [...e, t]), []),
                    additionalItems: ar(e.rest._def, {
                      ...r,
                      currentPath: [...r.currentPath, "additionalItems"],
                    }),
                  }
                : {
                    type: "array",
                    minItems: e.items.length,
                    maxItems: e.items.length,
                    items: e.items
                      .map((e, t) =>
                        ar(e._def, {
                          ...r,
                          currentPath: [...r.currentPath, "items", `${t}`],
                        })
                      )
                      .reduce((e, t) => (void 0 === t ? e : [...e, t]), []),
                  };
            case rJ.pA.ZodRecord:
              return r6(e, r);
            case rJ.pA.ZodLiteral:
              return (function (e, t) {
                let r = typeof e.value;
                return "bigint" !== r &&
                  "number" !== r &&
                  "boolean" !== r &&
                  "string" !== r
                  ? { type: Array.isArray(e.value) ? "array" : "object" }
                  : "openApi3" === t.target
                  ? { type: "bigint" === r ? "integer" : r, enum: [e.value] }
                  : { type: "bigint" === r ? "integer" : r, const: e.value };
              })(e, r);
            case rJ.pA.ZodEnum:
              return { type: "string", enum: [...e.values] };
            case rJ.pA.ZodNativeEnum:
              return (function (e) {
                let t = e.values,
                  r = Object.keys(e.values)
                    .filter((e) => "number" != typeof t[t[e]])
                    .map((e) => t[e]),
                  a = Array.from(new Set(r.map((e) => typeof e)));
                return {
                  type:
                    1 === a.length
                      ? "string" === a[0]
                        ? "string"
                        : "number"
                      : ["string", "number"],
                  enum: r,
                };
              })(e);
            case rJ.pA.ZodNullable:
              return (function (e, t) {
                if (
                  [
                    "ZodString",
                    "ZodNumber",
                    "ZodBigInt",
                    "ZodBoolean",
                    "ZodNull",
                  ].includes(e.innerType._def.typeName) &&
                  (!e.innerType._def.checks || !e.innerType._def.checks.length)
                )
                  return "openApi3" === t.target ||
                    "property" === t.nullableStrategy
                    ? { type: r9[e.innerType._def.typeName], nullable: !0 }
                    : { type: [r9[e.innerType._def.typeName], "null"] };
                if ("openApi3" === t.target) {
                  let r = ar(e.innerType._def, {
                    ...t,
                    currentPath: [...t.currentPath],
                  });
                  return r && "$ref" in r
                    ? { allOf: [r], nullable: !0 }
                    : r && { ...r, nullable: !0 };
                }
                let r = ar(e.innerType._def, {
                  ...t,
                  currentPath: [...t.currentPath, "anyOf", "0"],
                });
                return r && { anyOf: [r, { type: "null" }] };
              })(e, r);
            case rJ.pA.ZodOptional:
              return r8(e, r);
            case rJ.pA.ZodMap:
              return "record" === r.mapStrategy
                ? r6(e, r)
                : {
                    type: "array",
                    maxItems: 125,
                    items: {
                      type: "array",
                      items: [
                        ar(e.keyType._def, {
                          ...r,
                          currentPath: [
                            ...r.currentPath,
                            "items",
                            "items",
                            "0",
                          ],
                        }) || {},
                        ar(e.valueType._def, {
                          ...r,
                          currentPath: [
                            ...r.currentPath,
                            "items",
                            "items",
                            "1",
                          ],
                        }) || {},
                      ],
                      minItems: 2,
                      maxItems: 2,
                    },
                  };
            case rJ.pA.ZodSet:
              return (function (e, t) {
                let r = {
                  type: "array",
                  uniqueItems: !0,
                  items: ar(e.valueType._def, {
                    ...t,
                    currentPath: [...t.currentPath, "items"],
                  }),
                };
                return (
                  e.minSize &&
                    rG(r, "minItems", e.minSize.value, e.minSize.message, t),
                  e.maxSize &&
                    rG(r, "maxItems", e.maxSize.value, e.maxSize.message, t),
                  r
                );
              })(e, r);
            case rJ.pA.ZodLazy:
              return ar(e.getter()._def, r);
            case rJ.pA.ZodPromise:
              return ar(e.type._def, r);
            case rJ.pA.ZodNaN:
            case rJ.pA.ZodNever:
              return { not: {} };
            case rJ.pA.ZodEffects:
              return "input" === r.effectStrategy
                ? ar(e.schema._def, r, a)
                : {};
            case rJ.pA.ZodAny:
            case rJ.pA.ZodUnknown:
              return {};
            case rJ.pA.ZodDefault:
              return { ...ar(e.innerType._def, r), default: e.defaultValue() };
            case rJ.pA.ZodBranded:
              return ar(e.type._def, r);
            case rJ.pA.ZodReadonly:
              return ae(e, r);
            case rJ.pA.ZodCatch:
              return rX(e, r);
            case rJ.pA.ZodPipeline:
              return r7(e, r);
            case rJ.pA.ZodFunction:
            case rJ.pA.ZodVoid:
            case rJ.pA.ZodSymbol:
            default:
              return;
          }
        },
        as = (e, t, r) => (
          e.description &&
            ((r.description = e.description),
            t.markdownDescription && (r.markdownDescription = e.description)),
          r
        );
      r(57606), r(69662), r(66305);
      var ao = r(91490),
        al = r(402);
      r(89208), r(63035), r(16076), r(99636);
      var au = r(27798),
        ac = r(97076);
      r(57452);
      var ad = r(39570);
      r(80697);
      class ah extends al.BD {
        get lc_namespace() {
          return ["langchain", "tools"];
        }
        constructor(e) {
          super(e ?? {}),
            Object.defineProperty(this, "returnDirect", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !1,
            }),
            Object.defineProperty(this, "verboseParsingErrors", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !1,
            }),
            Object.defineProperty(this, "responseFormat", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "content",
            }),
            (this.verboseParsingErrors =
              e?.verboseParsingErrors ?? this.verboseParsingErrors),
            (this.responseFormat = e?.responseFormat ?? this.responseFormat);
        }
        async invoke(e, t) {
          let r, a;
          (0, ad.u)(e) ? ((r = e.id), (a = e.args)) : (a = e);
          let n = (0, au.LE)(t);
          return this.call(a, {
            ...n,
            configurable: { ...n.configurable, tool_call_id: r },
          });
        }
        async call(e, t, r) {
          let a, n, i, s, o;
          try {
            a = await this.schema.parseAsync(e);
          } catch (r) {
            let t = "Received tool input did not match expected schema";
            throw (
              (this.verboseParsingErrors &&
                (t = `${t}
Details: ${r.message}`),
              new ad.Y(t, JSON.stringify(e)))
            );
          }
          let l = (0, ao.QH)(t),
            u = await ao.Ye.configure(
              l.callbacks,
              this.callbacks,
              l.tags || r,
              this.tags,
              l.metadata,
              this.metadata,
              { verbose: this.verbose }
            ),
            c = await u?.handleToolStart(
              this.toJSON(),
              "string" == typeof a ? a : JSON.stringify(a),
              l.runId,
              void 0,
              void 0,
              void 0,
              l.runName
            );
          delete l.runId;
          try {
            n = await this._call(a, c, l);
          } catch (e) {
            throw (await c?.handleToolError(e), e);
          }
          if ("content_and_artifact" === this.responseFormat) {
            if (Array.isArray(n) && 2 === n.length) [i, s] = n;
            else
              throw Error(`Tool response format is "content_and_artifact" but the output was not a two-tuple.
Result: ${JSON.stringify(n)}`);
          } else i = n;
          l && "configurable" in l && (o = l.configurable.tool_call_id);
          let d = (function (e) {
            let { content: t, artifact: r, toolCallId: a } = e;
            return a
              ? new ac.Cq(
                  "string" == typeof t ||
                  (Array.isArray(t) && t.every((e) => "object" == typeof e))
                    ? { content: t, artifact: r, tool_call_id: a, name: e.name }
                    : {
                        content: (function (e) {
                          try {
                            return JSON.stringify(e, null, 2);
                          } catch (t) {
                            return `${e}`;
                          }
                        })(t),
                        artifact: r,
                        tool_call_id: a,
                        name: e.name,
                      }
                )
              : t;
          })({ content: i, artifact: s, toolCallId: o, name: this.name });
          return await c?.handleToolEnd(d), d;
        }
      }
      class ap extends ah {
        constructor(e) {
          super(e),
            Object.defineProperty(this, "schema", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: rJ.z
                .object({ input: rJ.z.string().optional() })
                .transform((e) => e.input),
            });
        }
        call(e, t) {
          return super.call("string" != typeof e && e ? e : { input: e }, t);
        }
      }
      class af extends ap {
        static lc_name() {
          return "DallEAPIWrapper";
        }
        constructor(e) {
          e?.responseFormat !== void 0 &&
            ["url", "b64_json"].includes(e.responseFormat) &&
            ((e.dallEResponseFormat = e.responseFormat),
            (e.responseFormat = "content")),
            super(e),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "dalle_api_wrapper",
            }),
            Object.defineProperty(this, "description", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value:
                "A wrapper around OpenAI DALL-E API. Useful for when you need to generate images from a text description. Input should be an image description.",
            }),
            Object.defineProperty(this, "client", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "model", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "dall-e-3",
            }),
            Object.defineProperty(this, "style", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "vivid",
            }),
            Object.defineProperty(this, "quality", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "standard",
            }),
            Object.defineProperty(this, "n", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 1,
            }),
            Object.defineProperty(this, "size", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "1024x1024",
            }),
            Object.defineProperty(this, "dallEResponseFormat", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "url",
            }),
            Object.defineProperty(this, "user", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            });
          let t = {
            apiKey:
              e?.apiKey ?? e?.openAIApiKey ?? (0, rW.lS)("OPENAI_API_KEY"),
            organization: e?.organization ?? (0, rW.lS)("OPENAI_ORGANIZATION"),
            dangerouslyAllowBrowser: !0,
            baseUrl: e?.baseUrl,
          };
          (this.client = new rz(t)),
            (this.model = e?.model ?? e?.modelName ?? this.model),
            (this.style = e?.style ?? this.style),
            (this.quality = e?.quality ?? this.quality),
            (this.n = e?.n ?? this.n),
            (this.size = e?.size ?? this.size),
            (this.dallEResponseFormat =
              e?.dallEResponseFormat ?? this.dallEResponseFormat),
            (this.user = e?.user);
        }
        processMultipleGeneratedUrls(e) {
          return "url" === this.dallEResponseFormat
            ? e.flatMap((e) =>
                e.data
                  .flatMap((e) =>
                    e.url ? { type: "image_url", image_url: e.url } : []
                  )
                  .filter(
                    (e) =>
                      void 0 !== e &&
                      "image_url" === e.type &&
                      "string" == typeof e.image_url &&
                      void 0 !== e.image_url
                  )
              )
            : e.flatMap((e) =>
                e.data
                  .flatMap((e) =>
                    e.b64_json
                      ? { type: "image_url", image_url: { url: e.b64_json } }
                      : []
                  )
                  .filter(
                    (e) =>
                      void 0 !== e &&
                      "image_url" === e.type &&
                      "object" == typeof e.image_url &&
                      "url" in e.image_url &&
                      "string" == typeof e.image_url.url &&
                      void 0 !== e.image_url.url
                  )
              );
        }
        async _call(e) {
          let t = {
            model: this.model,
            prompt: e,
            n: 1,
            size: this.size,
            response_format: this.dallEResponseFormat,
            style: this.style,
            quality: this.quality,
            user: this.user,
          };
          if (this.n > 1) {
            let e = await Promise.all(
              Array.from({ length: this.n }).map(() =>
                this.client.images.generate(t)
              )
            );
            return this.processMultipleGeneratedUrls(e);
          }
          let r = await this.client.images.generate(t),
            a = "";
          return (
            "url" === this.dallEResponseFormat
              ? ([a] = r.data
                  .map((e) => e.url)
                  .filter((e) => "undefined" !== e))
              : ([a] = r.data
                  .map((e) => e.b64_json)
                  .filter((e) => "undefined" !== e)),
            a
          );
        }
      }
      Object.defineProperty(af, "toolName", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "dalle_api_wrapper",
      });
    },
    74480: function (e, t, r) {
      "use strict";
      r(50648), r(45772);
    },
    88334: function (e, t, r) {
      "use strict";
      r.d(t, {
        KU: function () {
          return j;
        },
      });
      var a = r(32513),
        n = r(42693),
        i = r(45860),
        s = r(32738);
      let o = [400, 401, 403, 404, 405, 406, 407, 408],
        l = [409];
      class u {
        constructor(e) {
          Object.defineProperty(this, "maxConcurrency", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
            Object.defineProperty(this, "maxRetries", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "queue", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "onFailedResponseHook", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.maxConcurrency = e.maxConcurrency ?? 1 / 0),
            (this.maxRetries = e.maxRetries ?? 6),
            (this.queue = new i.default({ concurrency: this.maxConcurrency })),
            (this.onFailedResponseHook = e?.onFailedResponseHook);
        }
        call(e, ...t) {
          let r = this.onFailedResponseHook;
          return this.queue.add(
            () =>
              n(
                () =>
                  e(...t).catch((e) => {
                    if (e instanceof Error) throw e;
                    throw Error(e);
                  }),
                {
                  async onFailedAttempt(e) {
                    if (
                      e.message.startsWith("Cancel") ||
                      e.message.startsWith("TimeoutError") ||
                      e.message.startsWith("AbortError") ||
                      e?.code === "ECONNABORTED"
                    )
                      throw e;
                    let t = e?.response,
                      a = t?.status;
                    if (a) {
                      if (o.includes(+a)) throw e;
                      if (l.includes(+a)) return;
                      r && (await r(t));
                    }
                  },
                  retries: this.maxRetries,
                  randomize: !0,
                }
              ),
            { throwOnTimeout: !0 }
          );
        }
        callWithOptions(e, t, ...r) {
          return e.signal
            ? Promise.race([
                this.call(t, ...r),
                new Promise((t, r) => {
                  e.signal?.addEventListener("abort", () => {
                    r(Error("AbortError"));
                  });
                }),
              ])
            : this.call(t, ...r);
        }
        fetch(...e) {
          return this.call(() =>
            (0, s.s)()(...e).then((e) => (e.ok ? e : Promise.reject(e)))
          );
        }
      }
      function c(e) {
        return "function" == typeof e?._getType;
      }
      function d(e) {
        let t = { type: e._getType(), data: { content: e.content } };
        return (
          e?.additional_kwargs &&
            Object.keys(e.additional_kwargs).length > 0 &&
            (t.data.additional_kwargs = { ...e.additional_kwargs }),
          t
        );
      }
      var h = r(99402),
        p = r(96097),
        f =
          /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;
      function m(e, t) {
        if (!("string" == typeof e && f.test(e)))
          throw Error(
            void 0 !== t ? `Invalid UUID for ${t}: ${e}` : `Invalid UUID: ${e}`
          );
        return e;
      }
      var g = r(17367),
        y = r(81249);
      function b(e) {
        if (
          !e ||
          e.split("/").length > 2 ||
          e.startsWith("/") ||
          e.endsWith("/") ||
          e.split(":").length > 2
        )
          throw Error(`Invalid identifier format: ${e}`);
        let [t, r] = e.split(":"),
          a = r || "latest";
        if (t.includes("/")) {
          let [r, n] = t.split("/", 2);
          if (!r || !n) throw Error(`Invalid identifier format: ${e}`);
          return [r, n, a];
        }
        if (!t) throw Error(`Invalid identifier format: ${e}`);
        return ["-", t, a];
      }
      class _ extends Error {
        constructor(e) {
          super(e), (this.name = "LangSmithConflictError");
        }
      }
      async function v(e, t, r) {
        let a;
        if (e.ok) {
          r && (a = await e.text());
          return;
        }
        a = await e.text();
        let n = `Failed to ${t}. Received status [${e.status}]: ${e.statusText}. Server response: ${a}`;
        if (409 === e.status) throw new _(n);
        throw Error(n);
      }
      var w = { result: "[Circular]" },
        E = [],
        x = [];
      function O(e, t, r, a) {
        try {
          return JSON.stringify(e, t, r);
        } catch (o) {
          if (!o.message?.includes("Converting circular structure to JSON"))
            return (
              console.warn(
                "[WARNING]: LangSmith received unserializable value."
              ),
              "[Unserializable]"
            );
          console.warn(
            "[WARNING]: LangSmith received circular JSON. This will decrease tracer performance."
          ),
            void 0 === a &&
              (a = {
                depthLimit: Number.MAX_SAFE_INTEGER,
                edgesLimit: Number.MAX_SAFE_INTEGER,
              }),
            (function e(t, r, a, n, i, s, o) {
              if (((s += 1), "object" == typeof t && null !== t)) {
                for (l = 0; l < n.length; l++)
                  if (n[l] === t) {
                    k(w, t, r, i);
                    return;
                  }
                if (
                  (void 0 !== o.depthLimit && s > o.depthLimit) ||
                  (void 0 !== o.edgesLimit && a + 1 > o.edgesLimit)
                ) {
                  k("[...]", t, r, i);
                  return;
                }
                if ((n.push(t), Array.isArray(t)))
                  for (l = 0; l < t.length; l++) e(t[l], l, l, n, t, s, o);
                else {
                  var l,
                    u = Object.keys(t);
                  for (l = 0; l < u.length; l++) {
                    var c = u[l];
                    e(t[c], c, l, n, t, s, o);
                  }
                }
                n.pop();
              }
            })(e, "", 0, [], void 0, 0, a);
          try {
            var n;
            i =
              0 === x.length
                ? JSON.stringify(e, t, r)
                : JSON.stringify(
                    e,
                    ((n = t),
                    (n =
                      void 0 !== n
                        ? n
                        : function (e, t) {
                            return t;
                          }),
                    function (e, t) {
                      if (x.length > 0)
                        for (var r = 0; r < x.length; r++) {
                          var a = x[r];
                          if (a[1] === e && a[0] === t) {
                            (t = a[2]), x.splice(r, 1);
                            break;
                          }
                        }
                      return n.call(this, e, t);
                    }),
                    r
                  );
          } catch (e) {
            return JSON.stringify(
              "[unable to serialize, circular reference is too complex to analyze]"
            );
          } finally {
            for (; 0 !== E.length; ) {
              var i,
                s = E.pop();
              4 === s.length
                ? Object.defineProperty(s[0], s[1], s[3])
                : (s[0][s[1]] = s[2]);
            }
          }
          return i;
        }
      }
      function k(e, t, r, a) {
        var n = Object.getOwnPropertyDescriptor(a, r);
        void 0 !== n.get
          ? n.configurable
            ? (Object.defineProperty(a, r, { value: e }), E.push([a, r, t, n]))
            : x.push([t, r, e])
          : ((a[r] = e), E.push([a, r, t]));
      }
      function S(e) {
        let t = (0, h.sA)(),
          r = (0, h.DW)(),
          a = e.extra ?? {},
          n = a.metadata;
        return (
          (e.extra = {
            ...a,
            runtime: { ...t, ...a?.runtime },
            metadata: {
              ...r,
              ...(r.revision_id || e.revision_id
                ? { revision_id: e.revision_id ?? r.revision_id }
                : {}),
              ...n,
            },
          }),
          e
        );
      }
      let A = () => {
          let e = (0, h.HC)("TRACING_SAMPLING_RATE");
          if (void 0 === e) return;
          let t = parseFloat(e);
          if (t < 0 || t > 1)
            throw Error(
              `LANGSMITH_TRACING_SAMPLING_RATE must be between 0 and 1 if set. Got: ${t}`
            );
          return t;
        },
        P = (e) => {
          let t = e
            .replace("http://", "")
            .replace("https://", "")
            .split("/")[0]
            .split(":")[0];
          return "localhost" === t || "127.0.0.1" === t || "::1" === t;
        };
      async function I(e) {
        let t = [];
        for await (let r of e) t.push(r);
        return t;
      }
      function T(e) {
        if (void 0 !== e)
          return e
            .trim()
            .replace(/^"(.*)"$/, "$1")
            .replace(/^'(.*)'$/, "$1");
      }
      let R = async (e) => {
        if (e?.status === 429) {
          let t = 1e3 * parseInt(e.headers.get("retry-after") ?? "30", 10);
          if (t > 0) return await new Promise((e) => setTimeout(e, t)), !0;
        }
        return !1;
      };
      class $ {
        constructor() {
          Object.defineProperty(this, "items", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: [],
          }),
            Object.defineProperty(this, "sizeBytes", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 0,
            });
        }
        peek() {
          return this.items[0];
        }
        push(e) {
          let t;
          let r = new Promise((e) => {
              t = e;
            }),
            a = O(e.item).length;
          return (
            this.items.push({
              action: e.action,
              payload: e.item,
              itemPromiseResolve: t,
              itemPromise: r,
              size: a,
            }),
            (this.sizeBytes += a),
            r
          );
        }
        pop(e) {
          if (e < 1)
            throw Error("Number of bytes to pop off may not be less than 1.");
          let t = [],
            r = 0;
          for (; r + (this.peek()?.size ?? 0) < e && this.items.length > 0; ) {
            let e = this.items.shift();
            e && (t.push(e), (r += e.size), (this.sizeBytes -= e.size));
          }
          if (0 === t.length && this.items.length > 0) {
            let e = this.items.shift();
            t.push(e), (r += e.size), (this.sizeBytes -= e.size);
          }
          return [
            t.map((e) => ({ action: e.action, item: e.payload })),
            () => t.forEach((e) => e.itemPromiseResolve()),
          ];
        }
      }
      class j {
        constructor(e = {}) {
          Object.defineProperty(this, "apiKey", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
            Object.defineProperty(this, "apiUrl", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "webUrl", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "caller", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "batchIngestCaller", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "timeout_ms", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "_tenantId", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: null,
            }),
            Object.defineProperty(this, "hideInputs", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "hideOutputs", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "tracingSampleRate", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "filteredPostUuids", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: new Set(),
            }),
            Object.defineProperty(this, "autoBatchTracing", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: !0,
            }),
            Object.defineProperty(this, "autoBatchQueue", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: new $(),
            }),
            Object.defineProperty(this, "autoBatchTimeout", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "autoBatchAggregationDelayMs", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 250,
            }),
            Object.defineProperty(this, "batchSizeBytesLimit", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "fetchOptions", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "settings", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "blockOnRootRunFinalization", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "false" === (0, h.lS)("LANGSMITH_TRACING_BACKGROUND"),
            }),
            Object.defineProperty(this, "traceBatchConcurrency", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 5,
            }),
            Object.defineProperty(this, "_serverInfo", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "_getServerInfoPromise", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            });
          let t = j.getDefaultClientConfig();
          if (
            ((this.tracingSampleRate = A()),
            (this.apiUrl = T(e.apiUrl ?? t.apiUrl) ?? ""),
            this.apiUrl.endsWith("/") &&
              (this.apiUrl = this.apiUrl.slice(0, -1)),
            (this.apiKey = T(e.apiKey ?? t.apiKey)),
            (this.webUrl = T(e.webUrl ?? t.webUrl)),
            this.webUrl?.endsWith("/") &&
              (this.webUrl = this.webUrl.slice(0, -1)),
            (this.timeout_ms = e.timeout_ms ?? 9e4),
            (this.caller = new u(e.callerOptions ?? {})),
            (this.traceBatchConcurrency =
              e.traceBatchConcurrency ?? this.traceBatchConcurrency),
            this.traceBatchConcurrency < 1)
          )
            throw Error("Trace batch concurrency must be positive.");
          (this.batchIngestCaller = new u({
            maxRetries: 2,
            maxConcurrency: this.traceBatchConcurrency,
            ...(e.callerOptions ?? {}),
            onFailedResponseHook: R,
          })),
            (this.hideInputs = e.hideInputs ?? e.anonymizer ?? t.hideInputs),
            (this.hideOutputs = e.hideOutputs ?? e.anonymizer ?? t.hideOutputs),
            (this.autoBatchTracing =
              e.autoBatchTracing ?? this.autoBatchTracing),
            (this.blockOnRootRunFinalization =
              e.blockOnRootRunFinalization ?? this.blockOnRootRunFinalization),
            (this.batchSizeBytesLimit = e.batchSizeBytesLimit),
            (this.fetchOptions = e.fetchOptions || {});
        }
        static getDefaultClientConfig() {
          let e = (0, h.HC)("API_KEY");
          return {
            apiUrl: (0, h.HC)("ENDPOINT") ?? "https://api.smith.langchain.com",
            apiKey: e,
            webUrl: void 0,
            hideInputs: "true" === (0, h.HC)("HIDE_INPUTS"),
            hideOutputs: "true" === (0, h.HC)("HIDE_OUTPUTS"),
          };
        }
        getHostUrl() {
          return this.webUrl
            ? this.webUrl
            : P(this.apiUrl)
            ? ((this.webUrl = "http://localhost:3000"), this.webUrl)
            : this.apiUrl.includes("/api") &&
              !this.apiUrl.split(".", 1)[0].endsWith("api")
            ? ((this.webUrl = this.apiUrl.replace("/api", "")), this.webUrl)
            : this.apiUrl.split(".", 1)[0].includes("dev")
            ? ((this.webUrl = "https://dev.smith.langchain.com"), this.webUrl)
            : this.apiUrl.split(".", 1)[0].includes("eu")
            ? ((this.webUrl = "https://eu.smith.langchain.com"), this.webUrl)
            : ((this.webUrl = "https://smith.langchain.com"), this.webUrl);
        }
        get headers() {
          let e = { "User-Agent": `langsmith-js/${p.I9}` };
          return this.apiKey && (e["x-api-key"] = `${this.apiKey}`), e;
        }
        processInputs(e) {
          return !1 === this.hideInputs
            ? e
            : !0 === this.hideInputs
            ? {}
            : "function" == typeof this.hideInputs
            ? this.hideInputs(e)
            : e;
        }
        processOutputs(e) {
          return !1 === this.hideOutputs
            ? e
            : !0 === this.hideOutputs
            ? {}
            : "function" == typeof this.hideOutputs
            ? this.hideOutputs(e)
            : e;
        }
        prepareRunCreateOrUpdateInputs(e) {
          let t = { ...e };
          return (
            void 0 !== t.inputs && (t.inputs = this.processInputs(t.inputs)),
            void 0 !== t.outputs &&
              (t.outputs = this.processOutputs(t.outputs)),
            t
          );
        }
        async _getResponse(e, t) {
          let r = t?.toString() ?? "",
            a = `${this.apiUrl}${e}?${r}`,
            n = await this.caller.call((0, s.s)(), a, {
              method: "GET",
              headers: this.headers,
              signal: AbortSignal.timeout(this.timeout_ms),
              ...this.fetchOptions,
            });
          return await v(n, `Failed to fetch ${e}`), n;
        }
        async _get(e, t) {
          return (await this._getResponse(e, t)).json();
        }
        async *_getPaginated(e, t = new URLSearchParams(), r) {
          let a = Number(t.get("offset")) || 0,
            n = Number(t.get("limit")) || 100;
          for (;;) {
            t.set("offset", String(a)), t.set("limit", String(n));
            let i = `${this.apiUrl}${e}?${t}`,
              o = await this.caller.call((0, s.s)(), i, {
                method: "GET",
                headers: this.headers,
                signal: AbortSignal.timeout(this.timeout_ms),
                ...this.fetchOptions,
              });
            await v(o, `Failed to fetch ${e}`);
            let l = r ? r(await o.json()) : await o.json();
            if (0 === l.length || (yield l, l.length < n)) break;
            a += l.length;
          }
        }
        async *_getCursorPaginatedList(e, t = null, r = "POST", a = "runs") {
          let n = t ? { ...t } : {};
          for (;;) {
            let t = await this.caller.call((0, s.s)(), `${this.apiUrl}${e}`, {
                method: r,
                headers: {
                  ...this.headers,
                  "Content-Type": "application/json",
                },
                signal: AbortSignal.timeout(this.timeout_ms),
                ...this.fetchOptions,
                body: JSON.stringify(n),
              }),
              i = await t.json();
            if (!i || !i[a]) break;
            yield i[a];
            let o = i.cursors;
            if (!o || !o.next) break;
            n.cursor = o.next;
          }
        }
        _filterForSampling(e, t = !1) {
          if (void 0 === this.tracingSampleRate) return e;
          if (t) {
            let t = [];
            for (let r of e)
              this.filteredPostUuids.has(r.id)
                ? this.filteredPostUuids.delete(r.id)
                : t.push(r);
            return t;
          }
          {
            let t = [];
            for (let r of e)
              (r.id !== r.trace_id &&
                !this.filteredPostUuids.has(r.trace_id)) ||
              Math.random() < this.tracingSampleRate
                ? t.push(r)
                : this.filteredPostUuids.add(r.id);
            return t;
          }
        }
        async _getBatchSizeLimitBytes() {
          let e = await this._ensureServerInfo();
          return (
            this.batchSizeBytesLimit ??
            e.batch_ingest_config?.size_limit_bytes ??
            20971520
          );
        }
        drainAutoBatchQueue(e) {
          for (; this.autoBatchQueue.items.length > 0; ) {
            let [t, r] = this.autoBatchQueue.pop(e);
            if (!t.length) {
              r();
              break;
            }
            this._processBatch(t, r).catch(console.error);
          }
        }
        async _processBatch(e, t) {
          if (!e.length) {
            t();
            return;
          }
          try {
            let t = {
                runCreates: e
                  .filter((e) => "create" === e.action)
                  .map((e) => e.item),
                runUpdates: e
                  .filter((e) => "update" === e.action)
                  .map((e) => e.item),
              },
              r = await this._ensureServerInfo();
            r?.batch_ingest_config?.use_multipart_endpoint
              ? await this.multipartIngestRuns(t)
              : await this.batchIngestRuns(t);
          } finally {
            t();
          }
        }
        async processRunOperation(e) {
          clearTimeout(this.autoBatchTimeout),
            (this.autoBatchTimeout = void 0),
            "create" === e.action && (e.item = S(e.item));
          let t = this.autoBatchQueue.push(e),
            r = await this._getBatchSizeLimitBytes();
          return (
            this.autoBatchQueue.sizeBytes > r && this.drainAutoBatchQueue(r),
            this.autoBatchQueue.items.length > 0 &&
              (this.autoBatchTimeout = setTimeout(() => {
                (this.autoBatchTimeout = void 0), this.drainAutoBatchQueue(r);
              }, this.autoBatchAggregationDelayMs)),
            t
          );
        }
        async _getServerInfo() {
          let e = await (0, s.s)()(`${this.apiUrl}/info`, {
            method: "GET",
            headers: { Accept: "application/json" },
            signal: AbortSignal.timeout(1e3),
            ...this.fetchOptions,
          });
          return await v(e, "get server info"), e.json();
        }
        async _ensureServerInfo() {
          return (
            void 0 === this._getServerInfoPromise &&
              (this._getServerInfoPromise = (async () => {
                if (void 0 === this._serverInfo)
                  try {
                    this._serverInfo = await this._getServerInfo();
                  } catch (e) {
                    console.warn(
                      "[WARNING]: LangSmith failed to fetch info on supported operations. Falling back to single calls and default limits."
                    );
                  }
                return this._serverInfo ?? {};
              })()),
            this._getServerInfoPromise.then(
              (e) => (
                void 0 === this._serverInfo &&
                  (this._getServerInfoPromise = void 0),
                e
              )
            )
          );
        }
        async _getSettings() {
          return (
            this.settings || (this.settings = this._get("/settings")),
            await this.settings
          );
        }
        async createRun(e) {
          if (!this._filterForSampling([e]).length) return;
          let t = { ...this.headers, "Content-Type": "application/json" },
            r = e.project_name;
          delete e.project_name;
          let a = this.prepareRunCreateOrUpdateInputs({
            session_name: r,
            ...e,
            start_time: e.start_time ?? Date.now(),
          });
          if (
            this.autoBatchTracing &&
            void 0 !== a.trace_id &&
            void 0 !== a.dotted_order
          ) {
            this.processRunOperation({ action: "create", item: a }).catch(
              console.error
            );
            return;
          }
          let n = S(a),
            i = await this.caller.call((0, s.s)(), `${this.apiUrl}/runs`, {
              method: "POST",
              headers: t,
              body: O(n),
              signal: AbortSignal.timeout(this.timeout_ms),
              ...this.fetchOptions,
            });
          await v(i, "create run", !0);
        }
        async batchIngestRuns({ runCreates: e, runUpdates: t }) {
          if (void 0 === e && void 0 === t) return;
          let r = e?.map((e) => this.prepareRunCreateOrUpdateInputs(e)) ?? [],
            a = t?.map((e) => this.prepareRunCreateOrUpdateInputs(e)) ?? [];
          if (r.length > 0 && a.length > 0) {
            let e = r.reduce((e, t) => (t.id && (e[t.id] = t), e), {}),
              t = [];
            for (let r of a)
              void 0 !== r.id && e[r.id]
                ? (e[r.id] = { ...e[r.id], ...r })
                : t.push(r);
            (r = Object.values(e)), (a = t);
          }
          let n = {
            post: this._filterForSampling(r),
            patch: this._filterForSampling(a, !0),
          };
          if (!n.post.length && !n.patch.length) return;
          if (void 0 === (await this._ensureServerInfo()).version) {
            for (let e of ((this.autoBatchTracing = !1), n.post))
              await this.createRun(e);
            for (let e of n.patch)
              void 0 !== e.id && (await this.updateRun(e.id, e));
            return;
          }
          let i = { post: [], patch: [] };
          for (let e of ["post", "patch"]) {
            let t = n[e].reverse(),
              r = t.pop();
            for (; void 0 !== r; ) i[e].push(r), (r = t.pop());
          }
          (i.post.length > 0 || i.patch.length > 0) &&
            (await this._postBatchIngestRuns(O(i)));
        }
        async _postBatchIngestRuns(e) {
          let t = {
              ...this.headers,
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            r = await this.batchIngestCaller.call(
              (0, s.s)(),
              `${this.apiUrl}/runs/batch`,
              {
                method: "POST",
                headers: t,
                body: e,
                signal: AbortSignal.timeout(this.timeout_ms),
                ...this.fetchOptions,
              }
            );
          await v(r, "batch create run", !0);
        }
        async multipartIngestRuns({ runCreates: e, runUpdates: t }) {
          if (void 0 === e && void 0 === t) return;
          let r = {},
            a = [];
          for (let t of e ?? []) {
            let e = this.prepareRunCreateOrUpdateInputs(t);
            void 0 !== e.id &&
              void 0 !== e.attachments &&
              (r[e.id] = e.attachments),
              delete e.attachments,
              a.push(e);
          }
          let n = [];
          for (let e of t ?? []) n.push(this.prepareRunCreateOrUpdateInputs(e));
          if (
            void 0 !==
            a.find((e) => void 0 === e.trace_id || void 0 === e.dotted_order)
          )
            throw Error(
              'Multipart ingest requires "trace_id" and "dotted_order" to be set when creating a run'
            );
          if (
            void 0 !==
            n.find((e) => void 0 === e.trace_id || void 0 === e.dotted_order)
          )
            throw Error(
              'Multipart ingest requires "trace_id" and "dotted_order" to be set when updating a run'
            );
          if (a.length > 0 && n.length > 0) {
            let e = a.reduce((e, t) => (t.id && (e[t.id] = t), e), {}),
              t = [];
            for (let r of n)
              void 0 !== r.id && e[r.id]
                ? (e[r.id] = { ...e[r.id], ...r })
                : t.push(r);
            (a = Object.values(e)), (n = t);
          }
          if (0 === a.length && 0 === n.length) return;
          let i = [],
            s = [];
          for (let [e, t] of [
            ["post", a],
            ["patch", n],
          ])
            for (let a of t) {
              let {
                  inputs: t,
                  outputs: n,
                  events: o,
                  attachments: l,
                  ...u
                } = a,
                c = { inputs: t, outputs: n, events: o },
                d = O(u);
              for (let [t, r] of (s.push({
                name: `${e}.${u.id}`,
                payload: new Blob([d], {
                  type: `application/json; length=${d.length}`,
                }),
              }),
              Object.entries(c))) {
                if (void 0 === r) continue;
                let a = O(r);
                s.push({
                  name: `${e}.${u.id}.${t}`,
                  payload: new Blob([a], {
                    type: `application/json; length=${a.length}`,
                  }),
                });
              }
              if (void 0 !== u.id) {
                let e = r[u.id];
                if (e)
                  for (let [t, [a, n]] of (delete r[u.id], Object.entries(e))) {
                    if (t.includes(".")) {
                      console.warn(
                        `Skipping attachment '${t}' for run ${u.id}: Invalid attachment name. Attachment names must not contain periods ('.'). Please rename the attachment and try again.`
                      );
                      continue;
                    }
                    s.push({
                      name: `attachment.${u.id}.${t}`,
                      payload: new Blob([n], {
                        type: `${a}; length=${n.byteLength}`,
                      }),
                    });
                  }
              }
              i.push(`trace=${u.trace_id},id=${u.id}`);
            }
          await this._sendMultipartRequest(s, i.join("; "));
        }
        async _sendMultipartRequest(e, t) {
          try {
            let t = new FormData();
            for (let r of e) t.append(r.name, r.payload);
            await this.batchIngestCaller.call(
              (0, s.s)(),
              `${this.apiUrl}/runs/multipart`,
              {
                method: "POST",
                headers: { ...this.headers },
                body: t,
                signal: AbortSignal.timeout(this.timeout_ms),
                ...this.fetchOptions,
              }
            );
          } catch (r) {
            let e = "Failed to multipart ingest runs";
            r instanceof Error
              ? (e += `: ${r.stack || r.message}`)
              : (e += `: ${String(r)}`),
              console.warn(`${e.trim()}

Context: ${t}`);
          }
        }
        async updateRun(e, t) {
          m(e),
            t.inputs && (t.inputs = this.processInputs(t.inputs)),
            t.outputs && (t.outputs = this.processOutputs(t.outputs));
          let r = { ...t, id: e };
          if (!this._filterForSampling([r], !0).length) return;
          if (
            this.autoBatchTracing &&
            void 0 !== r.trace_id &&
            void 0 !== r.dotted_order
          ) {
            void 0 !== t.end_time &&
            void 0 === r.parent_run_id &&
            this.blockOnRootRunFinalization
              ? await this.processRunOperation({
                  action: "update",
                  item: r,
                }).catch(console.error)
              : this.processRunOperation({ action: "update", item: r }).catch(
                  console.error
                );
            return;
          }
          let a = { ...this.headers, "Content-Type": "application/json" },
            n = await this.caller.call((0, s.s)(), `${this.apiUrl}/runs/${e}`, {
              method: "PATCH",
              headers: a,
              body: O(t),
              signal: AbortSignal.timeout(this.timeout_ms),
              ...this.fetchOptions,
            });
          await v(n, "update run", !0);
        }
        async readRun(e, { loadChildRuns: t } = { loadChildRuns: !1 }) {
          m(e);
          let r = await this._get(`/runs/${e}`);
          return t && r.child_run_ids && (r = await this._loadChildRuns(r)), r;
        }
        async getRunUrl({ runId: e, run: t, projectOpts: r }) {
          if (void 0 !== t) {
            let e;
            e = t.session_id
              ? t.session_id
              : r?.projectName
              ? (await this.readProject({ projectName: r?.projectName })).id
              : r?.projectId
              ? r?.projectId
              : (
                  await this.readProject({
                    projectName: (0, h.HC)("PROJECT") || "default",
                  })
                ).id;
            let a = await this._getTenantId();
            return `${this.getHostUrl()}/o/${a}/projects/p/${e}/r/${
              t.id
            }?poll=true`;
          }
          if (void 0 !== e) {
            let t = await this.readRun(e);
            if (!t.app_path) throw Error(`Run ${e} has no app_path`);
            let r = this.getHostUrl();
            return `${r}${t.app_path}`;
          }
          throw Error("Must provide either runId or run");
        }
        async _loadChildRuns(e) {
          let t = await I(this.listRuns({ id: e.child_run_ids })),
            r = {},
            a = {};
          for (let e of (t.sort((e, t) =>
            (e?.dotted_order ?? "").localeCompare(t?.dotted_order ?? "")
          ),
          t)) {
            if (null === e.parent_run_id || void 0 === e.parent_run_id)
              throw Error(`Child run ${e.id} has no parent`);
            e.parent_run_id in r || (r[e.parent_run_id] = []),
              r[e.parent_run_id].push(e),
              (a[e.id] = e);
          }
          for (let t in ((e.child_runs = r[e.id] || []), r))
            t !== e.id && (a[t].child_runs = r[t]);
          return e;
        }
        async *listRuns(e) {
          let {
              projectId: t,
              projectName: r,
              parentRunId: a,
              traceId: n,
              referenceExampleId: i,
              startTime: s,
              executionOrder: o,
              isRoot: l,
              runType: u,
              error: c,
              id: d,
              query: h,
              filter: p,
              traceFilter: f,
              treeFilter: m,
              limit: g,
              select: y,
            } = e,
            b = [];
          if ((t && (b = Array.isArray(t) ? t : [t]), r)) {
            let e = Array.isArray(r) ? r : [r],
              t = await Promise.all(
                e.map((e) =>
                  this.readProject({ projectName: e }).then((e) => e.id)
                )
              );
            b.push(...t);
          }
          let _ = {
              session: b.length ? b : null,
              run_type: u,
              reference_example: i,
              query: h,
              filter: p,
              trace_filter: f,
              tree_filter: m,
              execution_order: o,
              parent_run: a,
              start_time: s ? s.toISOString() : null,
              error: c,
              id: d,
              limit: g,
              trace: n,
              select: y || [
                "app_path",
                "child_run_ids",
                "completion_cost",
                "completion_tokens",
                "dotted_order",
                "end_time",
                "error",
                "events",
                "extra",
                "feedback_stats",
                "first_token_time",
                "id",
                "inputs",
                "name",
                "outputs",
                "parent_run_id",
                "parent_run_ids",
                "prompt_cost",
                "prompt_tokens",
                "reference_example_id",
                "run_type",
                "session_id",
                "start_time",
                "status",
                "tags",
                "total_cost",
                "total_tokens",
                "trace_id",
              ],
              is_root: l,
            },
            v = 0;
          for await (let e of this._getCursorPaginatedList("/runs/query", _))
            if (g) {
              if (v >= g) break;
              if (e.length + v > g) {
                let t = e.slice(0, g - v);
                yield* t;
                break;
              }
              (v += e.length), yield* e;
            } else yield* e;
        }
        async getRunStats({
          id: e,
          trace: t,
          parentRun: r,
          runType: a,
          projectNames: n,
          projectIds: i,
          referenceExampleIds: o,
          startTime: l,
          endTime: u,
          error: c,
          query: d,
          filter: h,
          traceFilter: p,
          treeFilter: f,
          isRoot: m,
          dataSourceType: g,
        }) {
          let y = i || [];
          n &&
            (y = [
              ...(i || []),
              ...(await Promise.all(
                n.map((e) =>
                  this.readProject({ projectName: e }).then((e) => e.id)
                )
              )),
            ]);
          let b = Object.fromEntries(
              Object.entries({
                id: e,
                trace: t,
                parent_run: r,
                run_type: a,
                session: y,
                reference_example: o,
                start_time: l,
                end_time: u,
                error: c,
                query: d,
                filter: h,
                trace_filter: p,
                tree_filter: f,
                is_root: m,
                data_source_type: g,
              }).filter(([e, t]) => void 0 !== t)
            ),
            _ = await this.caller.call(
              (0, s.s)(),
              `${this.apiUrl}/runs/stats`,
              {
                method: "POST",
                headers: this.headers,
                body: JSON.stringify(b),
                signal: AbortSignal.timeout(this.timeout_ms),
                ...this.fetchOptions,
              }
            );
          return await _.json();
        }
        async shareRun(e, { shareId: t } = {}) {
          let r = { run_id: e, share_token: t || a.Z() };
          m(e);
          let n = await this.caller.call(
              (0, s.s)(),
              `${this.apiUrl}/runs/${e}/share`,
              {
                method: "PUT",
                headers: this.headers,
                body: JSON.stringify(r),
                signal: AbortSignal.timeout(this.timeout_ms),
                ...this.fetchOptions,
              }
            ),
            i = await n.json();
          if (null === i || !("share_token" in i))
            throw Error("Invalid response from server");
          return `${this.getHostUrl()}/public/${i.share_token}/r`;
        }
        async unshareRun(e) {
          m(e);
          let t = await this.caller.call(
            (0, s.s)(),
            `${this.apiUrl}/runs/${e}/share`,
            {
              method: "DELETE",
              headers: this.headers,
              signal: AbortSignal.timeout(this.timeout_ms),
              ...this.fetchOptions,
            }
          );
          await v(t, "unshare run", !0);
        }
        async readRunSharedLink(e) {
          m(e);
          let t = await this.caller.call(
              (0, s.s)(),
              `${this.apiUrl}/runs/${e}/share`,
              {
                method: "GET",
                headers: this.headers,
                signal: AbortSignal.timeout(this.timeout_ms),
                ...this.fetchOptions,
              }
            ),
            r = await t.json();
          if (null !== r && "share_token" in r)
            return `${this.getHostUrl()}/public/${r.share_token}/r`;
        }
        async listSharedRuns(e, { runIds: t } = {}) {
          let r = new URLSearchParams({ share_token: e });
          if (void 0 !== t) for (let e of t) r.append("id", e);
          m(e);
          let a = await this.caller.call(
            (0, s.s)(),
            `${this.apiUrl}/public/${e}/runs${r}`,
            {
              method: "GET",
              headers: this.headers,
              signal: AbortSignal.timeout(this.timeout_ms),
              ...this.fetchOptions,
            }
          );
          return await a.json();
        }
        async readDatasetSharedSchema(e, t) {
          if (!e && !t)
            throw Error("Either datasetId or datasetName must be given");
          e || (e = (await this.readDataset({ datasetName: t })).id), m(e);
          let r = await this.caller.call(
              (0, s.s)(),
              `${this.apiUrl}/datasets/${e}/share`,
              {
                method: "GET",
                headers: this.headers,
                signal: AbortSignal.timeout(this.timeout_ms),
                ...this.fetchOptions,
              }
            ),
            a = await r.json();
          return (a.url = `${this.getHostUrl()}/public/${a.share_token}/d`), a;
        }
        async shareDataset(e, t) {
          if (!e && !t)
            throw Error("Either datasetId or datasetName must be given");
          e || (e = (await this.readDataset({ datasetName: t })).id);
          let r = { dataset_id: e };
          m(e);
          let a = await this.caller.call(
              (0, s.s)(),
              `${this.apiUrl}/datasets/${e}/share`,
              {
                method: "PUT",
                headers: this.headers,
                body: JSON.stringify(r),
                signal: AbortSignal.timeout(this.timeout_ms),
                ...this.fetchOptions,
              }
            ),
            n = await a.json();
          return (n.url = `${this.getHostUrl()}/public/${n.share_token}/d`), n;
        }
        async unshareDataset(e) {
          m(e);
          let t = await this.caller.call(
            (0, s.s)(),
            `${this.apiUrl}/datasets/${e}/share`,
            {
              method: "DELETE",
              headers: this.headers,
              signal: AbortSignal.timeout(this.timeout_ms),
              ...this.fetchOptions,
            }
          );
          await v(t, "unshare dataset", !0);
        }
        async readSharedDataset(e) {
          m(e);
          let t = await this.caller.call(
            (0, s.s)(),
            `${this.apiUrl}/public/${e}/datasets`,
            {
              method: "GET",
              headers: this.headers,
              signal: AbortSignal.timeout(this.timeout_ms),
              ...this.fetchOptions,
            }
          );
          return await t.json();
        }
        async listSharedExamples(e, t) {
          let r = {};
          t?.exampleIds && (r.id = t.exampleIds);
          let a = new URLSearchParams();
          Object.entries(r).forEach(([e, t]) => {
            Array.isArray(t)
              ? t.forEach((t) => a.append(e, t))
              : a.append(e, t);
          });
          let n = await this.caller.call(
              (0, s.s)(),
              `${this.apiUrl}/public/${e}/examples?${a.toString()}`,
              {
                method: "GET",
                headers: this.headers,
                signal: AbortSignal.timeout(this.timeout_ms),
                ...this.fetchOptions,
              }
            ),
            i = await n.json();
          if (!n.ok) {
            if ("detail" in i)
              throw Error(`Failed to list shared examples.
Status: ${n.status}
Message: ${i.detail.join("\n")}`);
            throw Error(
              `Failed to list shared examples: ${n.status} ${n.statusText}`
            );
          }
          return i.map((e) => ({ ...e, _hostUrl: this.getHostUrl() }));
        }
        async createProject({
          projectName: e,
          description: t = null,
          metadata: r = null,
          upsert: a = !1,
          projectExtra: n = null,
          referenceDatasetId: i = null,
        }) {
          let o = `${this.apiUrl}/sessions${a ? "?upsert=true" : ""}`,
            l = n || {};
          r && (l.metadata = r);
          let u = { name: e, extra: l, description: t };
          null !== i && (u.reference_dataset_id = i);
          let c = await this.caller.call((0, s.s)(), o, {
            method: "POST",
            headers: { ...this.headers, "Content-Type": "application/json" },
            body: JSON.stringify(u),
            signal: AbortSignal.timeout(this.timeout_ms),
            ...this.fetchOptions,
          });
          return await v(c, "create project"), await c.json();
        }
        async updateProject(
          e,
          {
            name: t = null,
            description: r = null,
            metadata: a = null,
            projectExtra: n = null,
            endTime: i = null,
          }
        ) {
          let o = `${this.apiUrl}/sessions/${e}`,
            l = n;
          a && (l = { ...(l || {}), metadata: a });
          let u = {
              name: t,
              extra: l,
              description: r,
              end_time: i ? new Date(i).toISOString() : null,
            },
            c = await this.caller.call((0, s.s)(), o, {
              method: "PATCH",
              headers: { ...this.headers, "Content-Type": "application/json" },
              body: JSON.stringify(u),
              signal: AbortSignal.timeout(this.timeout_ms),
              ...this.fetchOptions,
            });
          return await v(c, "update project"), await c.json();
        }
        async hasProject({ projectId: e, projectName: t }) {
          let r = "/sessions",
            a = new URLSearchParams();
          if (void 0 !== e && void 0 !== t)
            throw Error(
              "Must provide either projectName or projectId, not both"
            );
          if (void 0 !== e) m(e), (r += `/${e}`);
          else if (void 0 !== t) a.append("name", t);
          else throw Error("Must provide projectName or projectId");
          let n = await this.caller.call(
            (0, s.s)(),
            `${this.apiUrl}${r}?${a}`,
            {
              method: "GET",
              headers: this.headers,
              signal: AbortSignal.timeout(this.timeout_ms),
              ...this.fetchOptions,
            }
          );
          try {
            let e = await n.json();
            if (!n.ok) return !1;
            if (Array.isArray(e)) return e.length > 0;
            return !0;
          } catch (e) {
            return !1;
          }
        }
        async readProject({ projectId: e, projectName: t, includeStats: r }) {
          let a,
            n = "/sessions",
            i = new URLSearchParams();
          if (void 0 !== e && void 0 !== t)
            throw Error(
              "Must provide either projectName or projectId, not both"
            );
          if (void 0 !== e) m(e), (n += `/${e}`);
          else if (void 0 !== t) i.append("name", t);
          else throw Error("Must provide projectName or projectId");
          void 0 !== r && i.append("include_stats", r.toString());
          let s = await this._get(n, i);
          if (Array.isArray(s)) {
            if (0 === s.length)
              throw Error(`Project[id=${e}, name=${t}] not found`);
            a = s[0];
          } else a = s;
          return a;
        }
        async getProjectUrl({ projectId: e, projectName: t }) {
          if (void 0 === e && void 0 === t)
            throw Error("Must provide either projectName or projectId");
          let r = await this.readProject({ projectId: e, projectName: t }),
            a = await this._getTenantId();
          return `${this.getHostUrl()}/o/${a}/projects/p/${r.id}`;
        }
        async getDatasetUrl({ datasetId: e, datasetName: t }) {
          if (void 0 === e && void 0 === t)
            throw Error("Must provide either datasetName or datasetId");
          let r = await this.readDataset({ datasetId: e, datasetName: t }),
            a = await this._getTenantId();
          return `${this.getHostUrl()}/o/${a}/datasets/${r.id}`;
        }
        async _getTenantId() {
          if (null !== this._tenantId) return this._tenantId;
          let e = new URLSearchParams({ limit: "1" });
          for await (let t of this._getPaginated("/sessions", e))
            return (this._tenantId = t[0].tenant_id), t[0].tenant_id;
          throw Error("No projects found to resolve tenant.");
        }
        async *listProjects({
          projectIds: e,
          name: t,
          nameContains: r,
          referenceDatasetId: a,
          referenceDatasetName: n,
          referenceFree: i,
          metadata: s,
        } = {}) {
          let o = new URLSearchParams();
          if (void 0 !== e) for (let t of e) o.append("id", t);
          if (
            (void 0 !== t && o.append("name", t),
            void 0 !== r && o.append("name_contains", r),
            void 0 !== a)
          )
            o.append("reference_dataset", a);
          else if (void 0 !== n) {
            let e = await this.readDataset({ datasetName: n });
            o.append("reference_dataset", e.id);
          }
          for await (let e of (void 0 !== i &&
            o.append("reference_free", i.toString()),
          void 0 !== s && o.append("metadata", JSON.stringify(s)),
          this._getPaginated("/sessions", o)))
            yield* e;
        }
        async deleteProject({ projectId: e, projectName: t }) {
          let r;
          if (void 0 === e && void 0 === t)
            throw Error("Must provide projectName or projectId");
          if (void 0 !== e && void 0 !== t)
            throw Error(
              "Must provide either projectName or projectId, not both"
            );
          m(
            (r =
              void 0 === e
                ? (await this.readProject({ projectName: t })).id
                : e)
          );
          let a = await this.caller.call(
            (0, s.s)(),
            `${this.apiUrl}/sessions/${r}`,
            {
              method: "DELETE",
              headers: this.headers,
              signal: AbortSignal.timeout(this.timeout_ms),
              ...this.fetchOptions,
            }
          );
          await v(a, `delete session ${r} (${t})`, !0);
        }
        async uploadCsv({
          csvFile: e,
          fileName: t,
          inputKeys: r,
          outputKeys: a,
          description: n,
          dataType: i,
          name: o,
        }) {
          let l = `${this.apiUrl}/datasets/upload`,
            u = new FormData();
          u.append("file", e, t),
            r.forEach((e) => {
              u.append("input_keys", e);
            }),
            a.forEach((e) => {
              u.append("output_keys", e);
            }),
            n && u.append("description", n),
            i && u.append("data_type", i),
            o && u.append("name", o);
          let c = await this.caller.call((0, s.s)(), l, {
            method: "POST",
            headers: this.headers,
            body: u,
            signal: AbortSignal.timeout(this.timeout_ms),
            ...this.fetchOptions,
          });
          return await v(c, "upload CSV"), await c.json();
        }
        async createDataset(
          e,
          {
            description: t,
            dataType: r,
            inputsSchema: a,
            outputsSchema: n,
            metadata: i,
          } = {}
        ) {
          let o = {
            name: e,
            description: t,
            extra: i ? { metadata: i } : void 0,
          };
          r && (o.data_type = r),
            a && (o.inputs_schema_definition = a),
            n && (o.outputs_schema_definition = n);
          let l = await this.caller.call(
            (0, s.s)(),
            `${this.apiUrl}/datasets`,
            {
              method: "POST",
              headers: { ...this.headers, "Content-Type": "application/json" },
              body: JSON.stringify(o),
              signal: AbortSignal.timeout(this.timeout_ms),
              ...this.fetchOptions,
            }
          );
          return await v(l, "create dataset"), await l.json();
        }
        async readDataset({ datasetId: e, datasetName: t }) {
          let r,
            a = "/datasets",
            n = new URLSearchParams({ limit: "1" });
          if (void 0 !== e && void 0 !== t)
            throw Error(
              "Must provide either datasetName or datasetId, not both"
            );
          if (void 0 !== e) m(e), (a += `/${e}`);
          else if (void 0 !== t) n.append("name", t);
          else throw Error("Must provide datasetName or datasetId");
          let i = await this._get(a, n);
          if (Array.isArray(i)) {
            if (0 === i.length)
              throw Error(`Dataset[id=${e}, name=${t}] not found`);
            r = i[0];
          } else r = i;
          return r;
        }
        async hasDataset({ datasetId: e, datasetName: t }) {
          try {
            return await this.readDataset({ datasetId: e, datasetName: t }), !0;
          } catch (e) {
            if (
              e instanceof Error &&
              e.message.toLocaleLowerCase().includes("not found")
            )
              return !1;
            throw e;
          }
        }
        async diffDatasetVersions({
          datasetId: e,
          datasetName: t,
          fromVersion: r,
          toVersion: a,
        }) {
          let n = e;
          if (void 0 === n && void 0 === t)
            throw Error("Must provide either datasetName or datasetId");
          if (void 0 !== n && void 0 !== t)
            throw Error(
              "Must provide either datasetName or datasetId, not both"
            );
          void 0 === n && (n = (await this.readDataset({ datasetName: t })).id);
          let i = new URLSearchParams({
            from_version: "string" == typeof r ? r : r.toISOString(),
            to_version: "string" == typeof a ? a : a.toISOString(),
          });
          return await this._get(`/datasets/${n}/versions/diff`, i);
        }
        async readDatasetOpenaiFinetuning({ datasetId: e, datasetName: t }) {
          if (void 0 !== e);
          else if (void 0 !== t)
            e = (await this.readDataset({ datasetName: t })).id;
          else throw Error("Must provide datasetName or datasetId");
          let r = await this._getResponse(`/datasets/${e}/openai_ft`);
          return (await r.text())
            .trim()
            .split("\n")
            .map((e) => JSON.parse(e));
        }
        async *listDatasets({
          limit: e = 100,
          offset: t = 0,
          datasetIds: r,
          datasetName: a,
          datasetNameContains: n,
          metadata: i,
        } = {}) {
          let s = new URLSearchParams({
            limit: e.toString(),
            offset: t.toString(),
          });
          if (void 0 !== r) for (let e of r) s.append("id", e);
          for await (let e of (void 0 !== a && s.append("name", a),
          void 0 !== n && s.append("name_contains", n),
          void 0 !== i && s.append("metadata", JSON.stringify(i)),
          this._getPaginated("/datasets", s)))
            yield* e;
        }
        async updateDataset(e) {
          let { datasetId: t, datasetName: r, ...a } = e;
          if (!t && !r)
            throw Error("Must provide either datasetName or datasetId");
          let n = t ?? (await this.readDataset({ datasetName: r })).id;
          m(n);
          let i = await this.caller.call(
            (0, s.s)(),
            `${this.apiUrl}/datasets/${n}`,
            {
              method: "PATCH",
              headers: { ...this.headers, "Content-Type": "application/json" },
              body: JSON.stringify(a),
              signal: AbortSignal.timeout(this.timeout_ms),
              ...this.fetchOptions,
            }
          );
          return await v(i, "update dataset"), await i.json();
        }
        async deleteDataset({ datasetId: e, datasetName: t }) {
          let r = "/datasets",
            a = e;
          if (void 0 !== e && void 0 !== t)
            throw Error(
              "Must provide either datasetName or datasetId, not both"
            );
          if (
            (void 0 !== t &&
              (a = (await this.readDataset({ datasetName: t })).id),
            void 0 !== a)
          )
            m(a), (r += `/${a}`);
          else throw Error("Must provide datasetName or datasetId");
          let n = await this.caller.call((0, s.s)(), this.apiUrl + r, {
            method: "DELETE",
            headers: this.headers,
            signal: AbortSignal.timeout(this.timeout_ms),
            ...this.fetchOptions,
          });
          await v(n, `delete ${r}`), await n.json();
        }
        async indexDataset({ datasetId: e, datasetName: t, tag: r }) {
          let a = e;
          if (a || t) {
            if (a && t)
              throw Error(
                "Must provide either datasetName or datasetId, not both"
              );
            a || (a = (await this.readDataset({ datasetName: t })).id);
          } else throw Error("Must provide either datasetName or datasetId");
          m(a);
          let n = await this.caller.call(
            (0, s.s)(),
            `${this.apiUrl}/datasets/${a}/index`,
            {
              method: "POST",
              headers: { ...this.headers, "Content-Type": "application/json" },
              body: JSON.stringify({ tag: r }),
              signal: AbortSignal.timeout(this.timeout_ms),
              ...this.fetchOptions,
            }
          );
          await v(n, "index dataset"), await n.json();
        }
        async similarExamples(e, t, r, { filter: a } = {}) {
          let n = { limit: r, inputs: e };
          void 0 !== a && (n.filter = a), m(t);
          let i = await this.caller.call(
            (0, s.s)(),
            `${this.apiUrl}/datasets/${t}/search`,
            {
              method: "POST",
              headers: { ...this.headers, "Content-Type": "application/json" },
              body: JSON.stringify(n),
              signal: AbortSignal.timeout(this.timeout_ms),
              ...this.fetchOptions,
            }
          );
          return (
            await v(i, "fetch similar examples"), (await i.json()).examples
          );
        }
        async createExample(
          e,
          t,
          {
            datasetId: r,
            datasetName: a,
            createdAt: n,
            exampleId: i,
            metadata: o,
            split: l,
            sourceRunId: u,
          }
        ) {
          let c = r;
          if (void 0 === c && void 0 === a)
            throw Error("Must provide either datasetName or datasetId");
          if (void 0 !== c && void 0 !== a)
            throw Error(
              "Must provide either datasetName or datasetId, not both"
            );
          void 0 === c && (c = (await this.readDataset({ datasetName: a })).id);
          let d = n || new Date(),
            h = {
              dataset_id: c,
              inputs: e,
              outputs: t,
              created_at: d?.toISOString(),
              id: i,
              metadata: o,
              split: l,
              source_run_id: u,
            },
            p = await this.caller.call((0, s.s)(), `${this.apiUrl}/examples`, {
              method: "POST",
              headers: { ...this.headers, "Content-Type": "application/json" },
              body: JSON.stringify(h),
              signal: AbortSignal.timeout(this.timeout_ms),
              ...this.fetchOptions,
            });
          return await v(p, "create example"), await p.json();
        }
        async createExamples(e) {
          let {
              inputs: t,
              outputs: r,
              metadata: a,
              sourceRunIds: n,
              exampleIds: i,
              datasetId: o,
              datasetName: l,
            } = e,
            u = o;
          if (void 0 === u && void 0 === l)
            throw Error("Must provide either datasetName or datasetId");
          if (void 0 !== u && void 0 !== l)
            throw Error(
              "Must provide either datasetName or datasetId, not both"
            );
          void 0 === u && (u = (await this.readDataset({ datasetName: l })).id);
          let c = t.map((t, s) => ({
              dataset_id: u,
              inputs: t,
              outputs: r ? r[s] : void 0,
              metadata: a ? a[s] : void 0,
              split: e.splits ? e.splits[s] : void 0,
              id: i ? i[s] : void 0,
              source_run_id: n ? n[s] : void 0,
            })),
            d = await this.caller.call(
              (0, s.s)(),
              `${this.apiUrl}/examples/bulk`,
              {
                method: "POST",
                headers: {
                  ...this.headers,
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(c),
                signal: AbortSignal.timeout(this.timeout_ms),
                ...this.fetchOptions,
              }
            );
          return await v(d, "create examples"), await d.json();
        }
        async createLLMExample(e, t, r) {
          return this.createExample({ input: e }, { output: t }, r);
        }
        async createChatExample(e, t, r) {
          let a = e.map((e) => (c(e) ? d(e) : e)),
            n = c(t) ? d(t) : t;
          return this.createExample({ input: a }, { output: n }, r);
        }
        async readExample(e) {
          m(e);
          let t = `/examples/${e}`;
          return await this._get(t);
        }
        async *listExamples({
          datasetId: e,
          datasetName: t,
          exampleIds: r,
          asOf: a,
          splits: n,
          inlineS3Urls: i,
          metadata: s,
          limit: o,
          offset: l,
          filter: u,
        } = {}) {
          let c;
          if (void 0 !== e && void 0 !== t)
            throw Error(
              "Must provide either datasetName or datasetId, not both"
            );
          if (void 0 !== e) c = e;
          else if (void 0 !== t)
            c = (await this.readDataset({ datasetName: t })).id;
          else throw Error("Must provide a datasetName or datasetId");
          let d = new URLSearchParams({ dataset: c }),
            h = a ? ("string" == typeof a ? a : a?.toISOString()) : void 0;
          if (
            (h && d.append("as_of", h),
            d.append("inline_s3_urls", (i ?? !0).toString()),
            void 0 !== r)
          )
            for (let e of r) d.append("id", e);
          if (void 0 !== n) for (let e of n) d.append("splits", e);
          if (void 0 !== s) {
            let e = JSON.stringify(s);
            d.append("metadata", e);
          }
          void 0 !== o && d.append("limit", o.toString()),
            void 0 !== l && d.append("offset", l.toString()),
            void 0 !== u && d.append("filter", u);
          let p = 0;
          for await (let e of this._getPaginated("/examples", d)) {
            for (let t of e) yield t, p++;
            if (void 0 !== o && p >= o) break;
          }
        }
        async deleteExample(e) {
          m(e);
          let t = `/examples/${e}`,
            r = await this.caller.call((0, s.s)(), this.apiUrl + t, {
              method: "DELETE",
              headers: this.headers,
              signal: AbortSignal.timeout(this.timeout_ms),
              ...this.fetchOptions,
            });
          await v(r, `delete ${t}`), await r.json();
        }
        async updateExample(e, t) {
          m(e);
          let r = await this.caller.call(
            (0, s.s)(),
            `${this.apiUrl}/examples/${e}`,
            {
              method: "PATCH",
              headers: { ...this.headers, "Content-Type": "application/json" },
              body: JSON.stringify(t),
              signal: AbortSignal.timeout(this.timeout_ms),
              ...this.fetchOptions,
            }
          );
          return await v(r, "update example"), await r.json();
        }
        async updateExamples(e) {
          let t = await this.caller.call(
            (0, s.s)(),
            `${this.apiUrl}/examples/bulk`,
            {
              method: "PATCH",
              headers: { ...this.headers, "Content-Type": "application/json" },
              body: JSON.stringify(e),
              signal: AbortSignal.timeout(this.timeout_ms),
              ...this.fetchOptions,
            }
          );
          return await v(t, "update examples"), await t.json();
        }
        async listDatasetSplits({ datasetId: e, datasetName: t, asOf: r }) {
          let a;
          if (void 0 === e && void 0 === t)
            throw Error("Must provide dataset name or ID");
          if (void 0 !== e && void 0 !== t)
            throw Error(
              "Must provide either datasetName or datasetId, not both"
            );
          m(
            (a =
              void 0 === e
                ? (await this.readDataset({ datasetName: t })).id
                : e)
          );
          let n = new URLSearchParams(),
            i = r ? ("string" == typeof r ? r : r?.toISOString()) : void 0;
          return (
            i && n.append("as_of", i),
            await this._get(`/datasets/${a}/splits`, n)
          );
        }
        async updateDatasetSplits({
          datasetId: e,
          datasetName: t,
          splitName: r,
          exampleIds: a,
          remove: n = !1,
        }) {
          let i;
          if (void 0 === e && void 0 === t)
            throw Error("Must provide dataset name or ID");
          if (void 0 !== e && void 0 !== t)
            throw Error(
              "Must provide either datasetName or datasetId, not both"
            );
          m(
            (i =
              void 0 === e
                ? (await this.readDataset({ datasetName: t })).id
                : e)
          );
          let o = {
              split_name: r,
              examples: a.map((e) => (m(e), e)),
              remove: n,
            },
            l = await this.caller.call(
              (0, s.s)(),
              `${this.apiUrl}/datasets/${i}/splits`,
              {
                method: "PUT",
                headers: {
                  ...this.headers,
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(o),
                signal: AbortSignal.timeout(this.timeout_ms),
                ...this.fetchOptions,
              }
            );
          await v(l, "update dataset splits", !0);
        }
        async evaluateRun(
          e,
          t,
          { sourceInfo: r, loadChildRuns: a, referenceExample: n } = {
            loadChildRuns: !1,
          }
        ) {
          let i;
          if (
            ((0, g.O)(
              "This method is deprecated and will be removed in future LangSmith versions, use `evaluate` from `langsmith/evaluation` instead."
            ),
            "string" == typeof e)
          )
            i = await this.readRun(e, { loadChildRuns: a });
          else if ("object" == typeof e && "id" in e) i = e;
          else throw Error(`Invalid run type: ${typeof e}`);
          null !== i.reference_example_id &&
            void 0 !== i.reference_example_id &&
            (n = await this.readExample(i.reference_example_id));
          let s = await t.evaluateRun(i, n),
            [o, l] = await this._logEvaluationFeedback(s, i, r);
          return l[0];
        }
        async createFeedback(
          e,
          t,
          {
            score: r,
            value: n,
            correction: i,
            comment: o,
            sourceInfo: l,
            feedbackSourceType: u = "api",
            sourceRunId: c,
            feedbackId: d,
            feedbackConfig: h,
            projectId: p,
            comparativeExperimentId: f,
          }
        ) {
          if (!e && !p)
            throw Error("One of runId or projectId must be provided");
          if (e && p)
            throw Error("Only one of runId or projectId can be provided");
          let g = { type: u ?? "api", metadata: l ?? {} };
          void 0 === c ||
            g?.metadata === void 0 ||
            g.metadata.__run ||
            (g.metadata.__run = { run_id: c }),
            g?.metadata !== void 0 &&
              g.metadata.__run?.run_id !== void 0 &&
              m(g.metadata.__run.run_id);
          let y = {
              id: d ?? a.Z(),
              run_id: e,
              key: t,
              score: r,
              value: n,
              correction: i,
              comment: o,
              feedback_source: g,
              comparative_experiment_id: f,
              feedbackConfig: h,
              session_id: p,
            },
            b = `${this.apiUrl}/feedback`,
            _ = await this.caller.call((0, s.s)(), b, {
              method: "POST",
              headers: { ...this.headers, "Content-Type": "application/json" },
              body: JSON.stringify(y),
              signal: AbortSignal.timeout(this.timeout_ms),
              ...this.fetchOptions,
            });
          return await v(_, "create feedback", !0), y;
        }
        async updateFeedback(
          e,
          { score: t, value: r, correction: a, comment: n }
        ) {
          let i = {};
          null != t && (i.score = t),
            null != r && (i.value = r),
            null != a && (i.correction = a),
            null != n && (i.comment = n),
            m(e);
          let o = await this.caller.call(
            (0, s.s)(),
            `${this.apiUrl}/feedback/${e}`,
            {
              method: "PATCH",
              headers: { ...this.headers, "Content-Type": "application/json" },
              body: JSON.stringify(i),
              signal: AbortSignal.timeout(this.timeout_ms),
              ...this.fetchOptions,
            }
          );
          await v(o, "update feedback", !0);
        }
        async readFeedback(e) {
          m(e);
          let t = `/feedback/${e}`;
          return await this._get(t);
        }
        async deleteFeedback(e) {
          m(e);
          let t = `/feedback/${e}`,
            r = await this.caller.call((0, s.s)(), this.apiUrl + t, {
              method: "DELETE",
              headers: this.headers,
              signal: AbortSignal.timeout(this.timeout_ms),
              ...this.fetchOptions,
            });
          await v(r, `delete ${t}`), await r.json();
        }
        async *listFeedback({
          runIds: e,
          feedbackKeys: t,
          feedbackSourceTypes: r,
        } = {}) {
          let a = new URLSearchParams();
          if ((e && a.append("run", e.join(",")), t))
            for (let e of t) a.append("key", e);
          if (r) for (let e of r) a.append("source", e);
          for await (let e of this._getPaginated("/feedback", a)) yield* e;
        }
        async createPresignedFeedbackToken(
          e,
          t,
          { expiration: r, feedbackConfig: a } = {}
        ) {
          let n = { run_id: e, feedback_key: t, feedback_config: a };
          r
            ? "string" == typeof r
              ? (n.expires_at = r)
              : (r?.hours || r?.minutes || r?.days) && (n.expires_in = r)
            : (n.expires_in = { hours: 3 });
          let i = await this.caller.call(
            (0, s.s)(),
            `${this.apiUrl}/feedback/tokens`,
            {
              method: "POST",
              headers: { ...this.headers, "Content-Type": "application/json" },
              body: JSON.stringify(n),
              signal: AbortSignal.timeout(this.timeout_ms),
              ...this.fetchOptions,
            }
          );
          return await i.json();
        }
        async createComparativeExperiment({
          name: e,
          experimentIds: t,
          referenceDatasetId: r,
          createdAt: a,
          description: n,
          metadata: i,
          id: o,
        }) {
          if (0 === t.length)
            throw Error("At least one experiment is required");
          if (
            (r ||
              (r = (await this.readProject({ projectId: t[0] }))
                .reference_dataset_id),
            null == !r)
          )
            throw Error("A reference dataset is required");
          let l = {
            id: o,
            name: e,
            experiment_ids: t,
            reference_dataset_id: r,
            description: n,
            created_at: (a ?? new Date())?.toISOString(),
            extra: {},
          };
          i && (l.extra.metadata = i);
          let u = await this.caller.call(
            (0, s.s)(),
            `${this.apiUrl}/datasets/comparative`,
            {
              method: "POST",
              headers: { ...this.headers, "Content-Type": "application/json" },
              body: JSON.stringify(l),
              signal: AbortSignal.timeout(this.timeout_ms),
              ...this.fetchOptions,
            }
          );
          return await u.json();
        }
        async *listPresignedFeedbackTokens(e) {
          m(e);
          let t = new URLSearchParams({ run_id: e });
          for await (let e of this._getPaginated("/feedback/tokens", t))
            yield* e;
        }
        _selectEvalResults(e) {
          return "results" in e ? e.results : [e];
        }
        async _logEvaluationFeedback(e, t, r) {
          let a = this._selectEvalResults(e),
            n = [];
          for (let e of a) {
            let a = r || {};
            e.evaluatorInfo && (a = { ...e.evaluatorInfo, ...a });
            let i = null;
            e.targetRunId ? (i = e.targetRunId) : t && (i = t.id),
              n.push(
                await this.createFeedback(i, e.key, {
                  score: e.score,
                  value: e.value,
                  comment: e.comment,
                  correction: e.correction,
                  sourceInfo: a,
                  sourceRunId: e.sourceRunId,
                  feedbackConfig: e.feedbackConfig,
                  feedbackSourceType: "model",
                })
              );
          }
          return [a, n];
        }
        async logEvaluationFeedback(e, t, r) {
          let [a] = await this._logEvaluationFeedback(e, t, r);
          return a;
        }
        async *listAnnotationQueues(e = {}) {
          let { queueIds: t, name: r, nameContains: a, limit: n } = e,
            i = new URLSearchParams();
          t &&
            t.forEach((e, t) => {
              m(e, `queueIds[${t}]`), i.append("ids", e);
            }),
            r && i.append("name", r),
            a && i.append("name_contains", a),
            i.append(
              "limit",
              (void 0 !== n ? Math.min(n, 100) : 100).toString()
            );
          let s = 0;
          for await (let e of this._getPaginated("/annotation-queues", i))
            if ((yield* e, s++, void 0 !== n && s >= n)) break;
        }
        async createAnnotationQueue(e) {
          let { name: t, description: r, queueId: n } = e,
            i = { name: t, description: r, id: n || a.Z() },
            o = await this.caller.call(
              (0, s.s)(),
              `${this.apiUrl}/annotation-queues`,
              {
                method: "POST",
                headers: {
                  ...this.headers,
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(
                  Object.fromEntries(
                    Object.entries(i).filter(([e, t]) => void 0 !== t)
                  )
                ),
                signal: AbortSignal.timeout(this.timeout_ms),
                ...this.fetchOptions,
              }
            );
          return await v(o, "create annotation queue"), await o.json();
        }
        async readAnnotationQueue(e) {
          let t = await this.listAnnotationQueues({ queueIds: [e] }).next();
          if (t.done) throw Error(`Annotation queue with ID ${e} not found`);
          return t.value;
        }
        async updateAnnotationQueue(e, t) {
          let { name: r, description: a } = t,
            n = await this.caller.call(
              (0, s.s)(),
              `${this.apiUrl}/annotation-queues/${m(e, "queueId")}`,
              {
                method: "PATCH",
                headers: {
                  ...this.headers,
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ name: r, description: a }),
                signal: AbortSignal.timeout(this.timeout_ms),
                ...this.fetchOptions,
              }
            );
          await v(n, "update annotation queue");
        }
        async deleteAnnotationQueue(e) {
          let t = await this.caller.call(
            (0, s.s)(),
            `${this.apiUrl}/annotation-queues/${m(e, "queueId")}`,
            {
              method: "DELETE",
              headers: { ...this.headers, Accept: "application/json" },
              signal: AbortSignal.timeout(this.timeout_ms),
              ...this.fetchOptions,
            }
          );
          await v(t, "delete annotation queue");
        }
        async addRunsToAnnotationQueue(e, t) {
          let r = await this.caller.call(
            (0, s.s)(),
            `${this.apiUrl}/annotation-queues/${m(e, "queueId")}/runs`,
            {
              method: "POST",
              headers: { ...this.headers, "Content-Type": "application/json" },
              body: JSON.stringify(
                t.map((e, t) => m(e, `runIds[${t}]`).toString())
              ),
              signal: AbortSignal.timeout(this.timeout_ms),
              ...this.fetchOptions,
            }
          );
          await v(r, "add runs to annotation queue");
        }
        async getRunFromAnnotationQueue(e, t) {
          let r = `/annotation-queues/${m(e, "queueId")}/run`,
            a = await this.caller.call((0, s.s)(), `${this.apiUrl}${r}/${t}`, {
              method: "GET",
              headers: this.headers,
              signal: AbortSignal.timeout(this.timeout_ms),
              ...this.fetchOptions,
            });
          return await v(a, "get run from annotation queue"), await a.json();
        }
        async _currentTenantIsOwner(e) {
          let t = await this._getSettings();
          return "-" == e || t.tenant_handle === e;
        }
        async _ownerConflictError(e, t) {
          let r = await this._getSettings();
          return Error(`Cannot ${e} for another tenant.

      Current tenant: ${r.tenant_handle}

      Requested tenant: ${t}`);
        }
        async _getLatestCommitHash(e) {
          let t = await this.caller.call(
              (0, s.s)(),
              `${this.apiUrl}/commits/${e}/?limit=1&offset=0`,
              {
                method: "GET",
                headers: this.headers,
                signal: AbortSignal.timeout(this.timeout_ms),
                ...this.fetchOptions,
              }
            ),
            r = await t.json();
          if (!t.ok) {
            let e =
                "string" == typeof r.detail
                  ? r.detail
                  : JSON.stringify(r.detail),
              a = Error(`Error ${t.status}: ${t.statusText}
${e}`);
            throw ((a.statusCode = t.status), a);
          }
          if (0 !== r.commits.length) return r.commits[0].commit_hash;
        }
        async _likeOrUnlikePrompt(e, t) {
          let [r, a, n] = b(e),
            i = await this.caller.call(
              (0, s.s)(),
              `${this.apiUrl}/likes/${r}/${a}`,
              {
                method: "POST",
                body: JSON.stringify({ like: t }),
                headers: {
                  ...this.headers,
                  "Content-Type": "application/json",
                },
                signal: AbortSignal.timeout(this.timeout_ms),
                ...this.fetchOptions,
              }
            );
          return await v(i, `${t ? "like" : "unlike"} prompt`), await i.json();
        }
        async _getPromptUrl(e) {
          let [t, r, a] = b(e);
          if (await this._currentTenantIsOwner(t)) {
            let e = await this._getSettings();
            return "latest" !== a
              ? `${this.getHostUrl()}/prompts/${r}/${a.substring(
                  0,
                  8
                )}?organizationId=${e.id}`
              : `${this.getHostUrl()}/prompts/${r}?organizationId=${e.id}`;
          }
          return "latest" !== a
            ? `${this.getHostUrl()}/hub/${t}/${r}/${a.substring(0, 8)}`
            : `${this.getHostUrl()}/hub/${t}/${r}`;
        }
        async promptExists(e) {
          return !!(await this.getPrompt(e));
        }
        async likePrompt(e) {
          return this._likeOrUnlikePrompt(e, !0);
        }
        async unlikePrompt(e) {
          return this._likeOrUnlikePrompt(e, !1);
        }
        async *listCommits(e) {
          for await (let t of this._getPaginated(
            `/commits/${e}/`,
            new URLSearchParams(),
            (e) => e.commits
          ))
            yield* t;
        }
        async *listPrompts(e) {
          let t = new URLSearchParams();
          for await (let r of (t.append(
            "sort_field",
            e?.sortField ?? "updated_at"
          ),
          t.append("sort_direction", "desc"),
          t.append("is_archived", (!!e?.isArchived).toString()),
          e?.isPublic !== void 0 &&
            t.append("is_public", e.isPublic.toString()),
          e?.query && t.append("query", e.query),
          this._getPaginated("/repos", t, (e) => e.repos)))
            yield* r;
        }
        async getPrompt(e) {
          let [t, r, a] = b(e),
            n = await this.caller.call(
              (0, s.s)(),
              `${this.apiUrl}/repos/${t}/${r}`,
              {
                method: "GET",
                headers: this.headers,
                signal: AbortSignal.timeout(this.timeout_ms),
                ...this.fetchOptions,
              }
            );
          if (404 === n.status) return null;
          await v(n, "get prompt");
          let i = await n.json();
          return i.repo ? i.repo : null;
        }
        async createPrompt(e, t) {
          let r = await this._getSettings();
          if (t?.isPublic && !r.tenant_handle)
            throw Error(`Cannot create a public prompt without first

        creating a LangChain Hub handle. 
        You can add a handle by creating a public prompt at:

        https://smith.langchain.com/prompts`);
          let [a, n, i] = b(e);
          if (!(await this._currentTenantIsOwner(a)))
            throw await this._ownerConflictError("create a prompt", a);
          let o = {
              repo_handle: n,
              ...(t?.description && { description: t.description }),
              ...(t?.readme && { readme: t.readme }),
              ...(t?.tags && { tags: t.tags }),
              is_public: !!t?.isPublic,
            },
            l = await this.caller.call((0, s.s)(), `${this.apiUrl}/repos/`, {
              method: "POST",
              headers: { ...this.headers, "Content-Type": "application/json" },
              body: JSON.stringify(o),
              signal: AbortSignal.timeout(this.timeout_ms),
              ...this.fetchOptions,
            });
          await v(l, "create prompt");
          let { repo: u } = await l.json();
          return u;
        }
        async createCommit(e, t, r) {
          if (!(await this.promptExists(e)))
            throw Error("Prompt does not exist, you must create it first.");
          let [a, n, i] = b(e),
            o =
              r?.parentCommitHash !== "latest" && r?.parentCommitHash
                ? r?.parentCommitHash
                : await this._getLatestCommitHash(`${a}/${n}`),
            l = { manifest: JSON.parse(JSON.stringify(t)), parent_commit: o },
            u = await this.caller.call(
              (0, s.s)(),
              `${this.apiUrl}/commits/${a}/${n}`,
              {
                method: "POST",
                headers: {
                  ...this.headers,
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(l),
                signal: AbortSignal.timeout(this.timeout_ms),
                ...this.fetchOptions,
              }
            );
          await v(u, "create commit");
          let c = await u.json();
          return this._getPromptUrl(
            `${a}/${n}${c.commit_hash ? `:${c.commit_hash}` : ""}`
          );
        }
        async updatePrompt(e, t) {
          if (!(await this.promptExists(e)))
            throw Error("Prompt does not exist, you must create it first.");
          let [r, a] = b(e);
          if (!(await this._currentTenantIsOwner(r)))
            throw await this._ownerConflictError("update a prompt", r);
          let n = {};
          if (
            (t?.description !== void 0 && (n.description = t.description),
            t?.readme !== void 0 && (n.readme = t.readme),
            t?.tags !== void 0 && (n.tags = t.tags),
            t?.isPublic !== void 0 && (n.is_public = t.isPublic),
            t?.isArchived !== void 0 && (n.is_archived = t.isArchived),
            0 === Object.keys(n).length)
          )
            throw Error("No valid update options provided");
          let i = await this.caller.call(
            (0, s.s)(),
            `${this.apiUrl}/repos/${r}/${a}`,
            {
              method: "PATCH",
              body: JSON.stringify(n),
              headers: { ...this.headers, "Content-Type": "application/json" },
              signal: AbortSignal.timeout(this.timeout_ms),
              ...this.fetchOptions,
            }
          );
          return await v(i, "update prompt"), i.json();
        }
        async deletePrompt(e) {
          if (!(await this.promptExists(e)))
            throw Error("Prompt does not exist, you must create it first.");
          let [t, r, a] = b(e);
          if (!(await this._currentTenantIsOwner(t)))
            throw await this._ownerConflictError("delete a prompt", t);
          let n = await this.caller.call(
            (0, s.s)(),
            `${this.apiUrl}/repos/${t}/${r}`,
            {
              method: "DELETE",
              headers: this.headers,
              signal: AbortSignal.timeout(this.timeout_ms),
              ...this.fetchOptions,
            }
          );
          return await n.json();
        }
        async pullPromptCommit(e, t) {
          let [r, a, n] = b(e),
            i = (function (e, t) {
              let r = (0, y.parse)(e),
                a = (0, y.parse)(t);
              if (!r || !a) throw Error("Invalid version format.");
              return r.compare(a) >= 0;
            })((await this._getServerInfo()).version, "0.5.23"),
            o = n;
          if (!i && "latest" === n) {
            let e = await this._getLatestCommitHash(`${r}/${a}`);
            if (e) o = e;
            else throw Error("No commits found");
          }
          let l = await this.caller.call(
            (0, s.s)(),
            `${this.apiUrl}/commits/${r}/${a}/${o}${
              t?.includeModel ? "?include_model=true" : ""
            }`,
            {
              method: "GET",
              headers: this.headers,
              signal: AbortSignal.timeout(this.timeout_ms),
              ...this.fetchOptions,
            }
          );
          await v(l, "pull prompt commit");
          let u = await l.json();
          return {
            owner: r,
            repo: a,
            commit_hash: u.commit_hash,
            manifest: u.manifest,
            examples: u.examples,
          };
        }
        async _pullPrompt(e, t) {
          return JSON.stringify(
            (await this.pullPromptCommit(e, { includeModel: t?.includeModel }))
              .manifest
          );
        }
        async pushPrompt(e, t) {
          return ((await this.promptExists(e))
            ? t &&
              Object.keys(t).some((e) => "object" !== e) &&
              (await this.updatePrompt(e, {
                description: t?.description,
                readme: t?.readme,
                tags: t?.tags,
                isPublic: t?.isPublic,
              }))
            : await this.createPrompt(e, {
                description: t?.description,
                readme: t?.readme,
                tags: t?.tags,
                isPublic: t?.isPublic,
              }),
          t?.object)
            ? await this.createCommit(e, t?.object, {
                parentCommitHash: t?.parentCommitHash,
              })
            : await this._getPromptUrl(e);
        }
        async clonePublicDataset(e, t = {}) {
          let { sourceApiUrl: r = this.apiUrl, datasetName: a } = t,
            [n, i] = this.parseTokenOrUrl(e, r),
            s = new j({ apiUrl: n, apiKey: "placeholder" }),
            o = await s.readSharedDataset(i),
            l = a || o.name;
          try {
            if (await this.hasDataset({ datasetId: l })) {
              console.log(
                `Dataset ${l} already exists in your tenant. Skipping.`
              );
              return;
            }
          } catch (e) {}
          let u = await s.listSharedExamples(i),
            c = await this.createDataset(l, {
              description: o.description,
              dataType: o.data_type || "kv",
              inputsSchema: o.inputs_schema_definition ?? void 0,
              outputsSchema: o.outputs_schema_definition ?? void 0,
            });
          try {
            await this.createExamples({
              inputs: u.map((e) => e.inputs),
              outputs: u.flatMap((e) => (e.outputs ? [e.outputs] : [])),
              datasetId: c.id,
            });
          } catch (e) {
            throw (
              (console.error(
                `An error occurred while creating dataset ${l}. You should delete it manually.`
              ),
              e)
            );
          }
        }
        parseTokenOrUrl(e, t, r = 2, a = "dataset") {
          try {
            return m(e), [t, e];
          } catch (e) {}
          try {
            let n = new URL(e).pathname.split("/").filter((e) => "" !== e);
            if (n.length >= r) {
              let e = n[n.length - r];
              return [t, e];
            }
            throw Error(`Invalid public ${a} URL: ${e}`);
          } catch (t) {
            throw Error(`Invalid public ${a} URL or token: ${e}`);
          }
        }
        awaitPendingTraceBatches() {
          return Promise.all([
            ...this.autoBatchQueue.items.map(({ itemPromise: e }) => e),
            this.batchIngestCaller.queue.onIdle(),
          ]);
        }
      }
    },
    96097: function (e, t, r) {
      "use strict";
      r.d(t, {
        I9: function () {
          return i;
        },
        IV: function () {
          return n.IV;
        },
        KU: function () {
          return a.KU;
        },
      });
      var a = r(88334),
        n = r(97895);
      r(32738);
      let i = "0.2.4";
    },
    97895: function (e, t, r) {
      "use strict";
      r.d(t, {
        IV: function () {
          return c;
        },
        n6: function () {
          return d;
        },
      });
      var a = r(32513),
        n = r(99402),
        i = r(88334);
      let s = (e) =>
        void 0 !== e
          ? e
          : !!["TRACING_V2", "TRACING"].find((e) => "true" === (0, n.HC)(e));
      var o = r(17367);
      let l = Symbol.for("lc:context_variables");
      class u {
        constructor(e, t) {
          Object.defineProperty(this, "metadata", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
            Object.defineProperty(this, "tags", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.metadata = e),
            (this.tags = t);
        }
        static fromHeader(e) {
          let t = e.split(","),
            r = {},
            a = [];
          for (let e of t) {
            let [t, n] = e.split("="),
              i = decodeURIComponent(n);
            "langsmith-metadata" === t
              ? (r = JSON.parse(i))
              : "langsmith-tags" === t && (a = i.split(","));
          }
          return new u(r, a);
        }
        toHeader() {
          let e = [];
          return (
            this.metadata &&
              Object.keys(this.metadata).length > 0 &&
              e.push(
                `langsmith-metadata=${encodeURIComponent(
                  JSON.stringify(this.metadata)
                )}`
              ),
            this.tags &&
              this.tags.length > 0 &&
              e.push(
                `langsmith-tags=${encodeURIComponent(this.tags.join(","))}`
              ),
            e.join(",")
          );
        }
      }
      class c {
        constructor(e) {
          if (
            (Object.defineProperty(this, "id", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "run_type", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "project_name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "parent_run", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "child_runs", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "start_time", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "end_time", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "extra", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "tags", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "error", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "serialized", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "inputs", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "outputs", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "reference_example_id", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "client", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "events", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "trace_id", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "dotted_order", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "tracingEnabled", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "execution_order", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "child_execution_order", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "attachments", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            d(e))
          ) {
            Object.assign(this, { ...e });
            return;
          }
          let t = c.getDefaultConfig(),
            { metadata: r, ...a } = e,
            n = a.client ?? c.getSharedClient(),
            i = { ...r, ...a?.extra?.metadata };
          if (
            ((a.extra = { ...a.extra, metadata: i }),
            Object.assign(this, { ...t, ...a, client: n }),
            this.trace_id ||
              (this.parent_run
                ? (this.trace_id = this.parent_run.trace_id ?? this.id)
                : (this.trace_id = this.id)),
            (this.execution_order ??= 1),
            (this.child_execution_order ??= 1),
            !this.dotted_order)
          ) {
            let e = (function (e, t, r = 1) {
              let a = r.toFixed(0).slice(0, 3).padStart(3, "0");
              return (
                `${new Date(e).toISOString().slice(0, -1)}${a}Z`.replace(
                  /[-:.]/g,
                  ""
                ) + t
              );
            })(this.start_time, this.id, this.execution_order);
            this.parent_run
              ? (this.dotted_order = this.parent_run.dotted_order + "." + e)
              : (this.dotted_order = e);
          }
        }
        static getDefaultConfig() {
          return {
            id: a.Z(),
            run_type: "chain",
            project_name:
              (0, n.lS)("LANGCHAIN_PROJECT") ??
              (0, n.lS)("LANGCHAIN_SESSION") ??
              "default",
            child_runs: [],
            api_url: (0, n.lS)("LANGCHAIN_ENDPOINT") ?? "http://localhost:1984",
            api_key: (0, n.lS)("LANGCHAIN_API_KEY"),
            caller_options: {},
            start_time: Date.now(),
            serialized: {},
            inputs: {},
            extra: {},
          };
        }
        static getSharedClient() {
          return (
            c.sharedClient || (c.sharedClient = new i.KU()), c.sharedClient
          );
        }
        createChild(e) {
          var t;
          let r = this.child_execution_order + 1,
            a = new c({
              ...e,
              parent_run: this,
              project_name: this.project_name,
              client: this.client,
              tracingEnabled: this.tracingEnabled,
              execution_order: r,
              child_execution_order: r,
            });
          l in this && (a[l] = this[l]);
          let n = Symbol.for("lc:child_config"),
            i = e.extra?.[n] ?? this.extra[n];
          if (
            void 0 !== i &&
            "object" == typeof i.callbacks &&
            (p(i.callbacks?.handlers) || p(i.callbacks))
          ) {
            let e = { ...i },
              r =
                "object" == typeof (t = e.callbacks) &&
                null != t &&
                Array.isArray(t.handlers)
                  ? e.callbacks.copy?.()
                  : void 0;
            r &&
              (Object.assign(r, { _parentRunId: a.id }),
              r.handlers?.find(h)?.updateFromRunTree?.(a),
              (e.callbacks = r)),
              (a.extra[n] = e);
          }
          let s = new Set(),
            o = this;
          for (; null != o && !s.has(o.id); )
            s.add(o.id),
              (o.child_execution_order = Math.max(o.child_execution_order, r)),
              (o = o.parent_run);
          return this.child_runs.push(a), a;
        }
        async end(e, t, r = Date.now(), a) {
          (this.outputs = this.outputs ?? e),
            (this.error = this.error ?? t),
            (this.end_time = this.end_time ?? r),
            a &&
              Object.keys(a).length > 0 &&
              (this.extra = this.extra
                ? { ...this.extra, metadata: { ...this.extra.metadata, ...a } }
                : { metadata: a });
        }
        _convertToCreate(e, t, r = !0) {
          let a, n;
          let i = e.extra ?? {};
          if ((i.runtime || (i.runtime = {}), t))
            for (let [e, r] of Object.entries(t))
              i.runtime[e] || (i.runtime[e] = r);
          return (
            r
              ? ((n = e.parent_run?.id), (a = []))
              : ((a = e.child_runs.map((e) => this._convertToCreate(e, t, r))),
                (n = void 0)),
            {
              id: e.id,
              name: e.name,
              start_time: e.start_time,
              end_time: e.end_time,
              run_type: e.run_type,
              reference_example_id: e.reference_example_id,
              extra: i,
              serialized: e.serialized,
              error: e.error,
              inputs: e.inputs,
              outputs: e.outputs,
              session_name: e.project_name,
              child_runs: a,
              parent_run_id: n,
              trace_id: e.trace_id,
              dotted_order: e.dotted_order,
              tags: e.tags,
              attachments: e.attachments,
            }
          );
        }
        async postRun(e = !0) {
          try {
            let t = (0, n.sA)(),
              r = await this._convertToCreate(this, t, !0);
            if ((await this.client.createRun(r), !e))
              for (let e of ((0, o.O)(
                "Posting with excludeChildRuns=false is deprecated and will be removed in a future version."
              ),
              this.child_runs))
                await e.postRun(!1);
          } catch (e) {
            console.error(`Error in postRun for run ${this.id}:`, e);
          }
        }
        async patchRun() {
          try {
            let e = {
              end_time: this.end_time,
              error: this.error,
              inputs: this.inputs,
              outputs: this.outputs,
              parent_run_id: this.parent_run?.id,
              reference_example_id: this.reference_example_id,
              extra: this.extra,
              events: this.events,
              dotted_order: this.dotted_order,
              trace_id: this.trace_id,
              tags: this.tags,
              attachments: this.attachments,
            };
            await this.client.updateRun(this.id, e);
          } catch (e) {
            console.error(`Error in patchRun for run ${this.id}`, e);
          }
        }
        toJSON() {
          return this._convertToCreate(this, void 0, !1);
        }
        static fromRunnableConfig(e, t) {
          let r, a, n;
          let i = e?.callbacks,
            o = s();
          if (i) {
            let e = i?.getParentRunId?.() ?? "",
              t = i?.handlers?.find((e) => e?.name == "langchain_tracer");
            (r = t?.getRun?.(e)),
              (a = t?.projectName),
              (n = t?.client),
              (o = o || !!t);
          }
          return r
            ? new c({
                name: r.name,
                id: r.id,
                trace_id: r.trace_id,
                dotted_order: r.dotted_order,
                client: n,
                tracingEnabled: o,
                project_name: a,
                tags: [...new Set((r?.tags ?? []).concat(e?.tags ?? []))],
                extra: { metadata: { ...r?.extra?.metadata, ...e?.metadata } },
              }).createChild(t)
            : new c({ ...t, client: n, tracingEnabled: o, project_name: a });
        }
        static fromDottedOrder(e) {
          return this.fromHeaders({ "langsmith-trace": e });
        }
        static fromHeaders(e, t) {
          let r =
              "get" in e && "function" == typeof e.get
                ? {
                    "langsmith-trace": e.get("langsmith-trace"),
                    baggage: e.get("baggage"),
                  }
                : e,
            a = r["langsmith-trace"];
          if (!a || "string" != typeof a) return;
          let n = a.trim(),
            i = n.split(".").map((e) => {
              let [t, r] = e.split("Z");
              return { strTime: t, time: Date.parse(t + "Z"), uuid: r };
            }),
            s = i[0].uuid,
            o = {
              ...t,
              name: t?.name ?? "parent",
              run_type: t?.run_type ?? "chain",
              start_time: t?.start_time ?? Date.now(),
              id: i.at(-1)?.uuid,
              trace_id: s,
              dotted_order: n,
            };
          if (r.baggage && "string" == typeof r.baggage) {
            let e = u.fromHeader(r.baggage);
            (o.metadata = e.metadata), (o.tags = e.tags);
          }
          return new c(o);
        }
        toHeaders(e) {
          let t = {
            "langsmith-trace": this.dotted_order,
            baggage: new u(this.extra?.metadata, this.tags).toHeader(),
          };
          if (e) for (let [r, a] of Object.entries(t)) e.set(r, a);
          return t;
        }
      }
      function d(e) {
        return (
          void 0 !== e &&
          "function" == typeof e.createChild &&
          "function" == typeof e.postRun
        );
      }
      function h(e) {
        return (
          "object" == typeof e &&
          null != e &&
          "string" == typeof e.name &&
          "langchain_tracer" === e.name
        );
      }
      function p(e) {
        return Array.isArray(e) && e.some((e) => h(e));
      }
      Object.defineProperty(c, "sharedClient", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null,
      });
    },
    32738: function (e, t, r) {
      "use strict";
      r.d(t, {
        s: function () {
          return i;
        },
      });
      let a = (...e) => fetch(...e),
        n = Symbol.for("ls:fetch_implementation"),
        i = () => globalThis[n] ?? a;
    },
    99402: function (e, t, r) {
      "use strict";
      let a, n, i;
      r.d(t, {
        DW: function () {
          return m;
        },
        HC: function () {
          return y;
        },
        lS: function () {
          return g;
        },
        sA: function () {
          return f;
        },
      });
      var s = r(96097),
        o = r(34155);
      let l = () => "undefined" != typeof window && void 0 !== window.document,
        u = () =>
          "object" == typeof globalThis &&
          globalThis.constructor &&
          "DedicatedWorkerGlobalScope" === globalThis.constructor.name,
        c = () =>
          ("undefined" != typeof window && "nodejs" === window.name) ||
          ("undefined" != typeof navigator &&
            (navigator.userAgent.includes("Node.js") ||
              navigator.userAgent.includes("jsdom"))),
        d = () => "undefined" != typeof Deno,
        h = () =>
          void 0 !== o &&
          void 0 !== o.versions &&
          void 0 !== o.versions.node &&
          !d(),
        p = () =>
          a ||
          (a = l()
            ? "browser"
            : h()
            ? "node"
            : u()
            ? "webworker"
            : c()
            ? "jsdom"
            : d()
            ? "deno"
            : "other");
      function f() {
        if (void 0 === n) {
          let e = p(),
            t = (function () {
              if (void 0 !== i) return i;
              let e = {};
              for (let t of [
                "VERCEL_GIT_COMMIT_SHA",
                "NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA",
                "COMMIT_REF",
                "RENDER_GIT_COMMIT",
                "CI_COMMIT_SHA",
                "CIRCLE_SHA1",
                "CF_PAGES_COMMIT_SHA",
                "REACT_APP_GIT_SHA",
                "SOURCE_VERSION",
                "GITHUB_SHA",
                "TRAVIS_COMMIT",
                "GIT_COMMIT",
                "BUILD_VCS_NUMBER",
                "bamboo_planRepository_revision",
                "Build.SourceVersion",
                "BITBUCKET_COMMIT",
                "DRONE_COMMIT_SHA",
                "SEMAPHORE_GIT_SHA",
                "BUILDKITE_COMMIT",
              ]) {
                let r = g(t);
                void 0 !== r && (e[t] = r);
              }
              return (i = e), e;
            })();
          n = {
            library: "langsmith",
            runtime: e,
            sdk: "langsmith-js",
            sdk_version: s.I9,
            ...t,
          };
        }
        return n;
      }
      function m() {
        let e =
            (function () {
              try {
                if (void 0 !== o && o.env)
                  return Object.entries(o.env).reduce(
                    (e, [t, r]) => ((e[t] = String(r)), e),
                    {}
                  );
                return;
              } catch (e) {
                return;
              }
            })() || {},
          t = {},
          r = [
            "LANGCHAIN_API_KEY",
            "LANGCHAIN_ENDPOINT",
            "LANGCHAIN_TRACING_V2",
            "LANGCHAIN_PROJECT",
            "LANGCHAIN_SESSION",
          ];
        for (let [a, n] of Object.entries(e))
          !a.startsWith("LANGCHAIN_") ||
            "string" != typeof n ||
            r.includes(a) ||
            a.toLowerCase().includes("key") ||
            a.toLowerCase().includes("secret") ||
            a.toLowerCase().includes("token") ||
            ("LANGCHAIN_REVISION_ID" === a ? (t.revision_id = n) : (t[a] = n));
        return t;
      }
      function g(e) {
        try {
          return void 0 !== o ? o.env?.[e] : void 0;
        } catch (e) {
          return;
        }
      }
      function y(e) {
        return g(`LANGSMITH_${e}`) || g(`LANGCHAIN_${e}`);
      }
    },
    17367: function (e, t, r) {
      "use strict";
      r.d(t, {
        O: function () {
          return n;
        },
      });
      let a = {};
      function n(e) {
        a[e] || (console.warn(e), (a[e] = !0));
      }
    },
    47080: function (e, t, r) {
      "use strict";
      r.d(t, {
        IV: function () {
          return a.IV;
        },
        KU: function () {
          return a.KU;
        },
      });
      var a = r(96097);
    },
    424: function (e, t, r) {
      "use strict";
      r.d(t, {
        dy: function () {
          return u;
        },
        xQ: function () {
          return c;
        },
      });
      var a = r(97895);
      class n {
        getStore() {}
        run(e, t) {
          return t();
        }
      }
      let i = Symbol.for("ls:tracing_async_local_storage"),
        s = new n();
      class o {
        getInstance() {
          return globalThis[i] ?? s;
        }
        initializeGlobalInstance(e) {
          void 0 === globalThis[i] && (globalThis[i] = e);
        }
      }
      let l = new o(),
        u = () => {
          let e = l.getInstance().getStore();
          if (!(0, a.n6)(e))
            throw Error(
              "Could not get the current run tree.\n\nPlease make sure you are calling this method within a traceable function or the tracing is enabled."
            );
          return e;
        };
      function c(e) {
        return "function" == typeof e && "langsmith:traceable" in e;
      }
      Symbol.for("langsmith:traceable:root");
    },
    9321: function (e, t, r) {
      "use strict";
      let a;
      r.d(t, {
        Y_: function () {
          return $;
        },
      });
      let n = Symbol("Let zodToJsonSchema decide on which parser to use"),
        i = {
          name: void 0,
          $refStrategy: "root",
          basePath: ["#"],
          effectStrategy: "input",
          pipeStrategy: "all",
          dateStrategy: "format:date-time",
          mapStrategy: "entries",
          removeAdditionalStrategy: "passthrough",
          definitionPath: "definitions",
          target: "jsonSchema7",
          strictUnions: !1,
          definitions: {},
          errorMessages: !1,
          markdownDescription: !1,
          patternStrategy: "escape",
          applyRegexFlags: !1,
          emailStrategy: "format:email",
          base64Strategy: "contentEncoding:base64",
          nameStrategy: "ref",
        },
        s = (e) => ("string" == typeof e ? { ...i, name: e } : { ...i, ...e }),
        o = (e) => {
          let t = s(e),
            r =
              void 0 !== t.name
                ? [...t.basePath, t.definitionPath, t.name]
                : t.basePath;
          return {
            ...t,
            currentPath: r,
            propertyPath: void 0,
            seen: new Map(
              Object.entries(t.definitions).map(([e, r]) => [
                r._def,
                {
                  def: r._def,
                  path: [...t.basePath, t.definitionPath, e],
                  jsonSchema: void 0,
                },
              ])
            ),
          };
        };
      var l = r(1604);
      function u(e, t, r, a) {
        a?.errorMessages &&
          r &&
          (e.errorMessage = { ...e.errorMessage, [t]: r });
      }
      function c(e, t, r, a, n) {
        (e[t] = r), u(e, t, a, n);
      }
      function d(e, t) {
        return A(e.type._def, t);
      }
      let h = (e, t) => A(e.innerType._def, t),
        p = (e, t) => {
          let r = { type: "integer", format: "unix-time" };
          if ("openApi3" === t.target) return r;
          for (let a of e.checks)
            switch (a.kind) {
              case "min":
                c(r, "minimum", a.value, a.message, t);
                break;
              case "max":
                c(r, "maximum", a.value, a.message, t);
            }
          return r;
        },
        f = (e) => (!("type" in e) || "string" !== e.type) && "allOf" in e,
        m = {
          cuid: /^[cC][^\s-]{8,}$/,
          cuid2: /^[0-9a-z]+$/,
          ulid: /^[0-9A-HJKMNP-TV-Z]{26}$/,
          email:
            /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$/,
          emoji: () => (
            void 0 === a &&
              (a = RegExp(
                "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",
                "u"
              )),
            a
          ),
          base64:
            /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
          nanoid: /^[a-zA-Z0-9_-]{21}$/,
        };
      function g(e, t) {
        let r = { type: "string" };
        function a(e) {
          return "escape" === t.patternStrategy ? y(e) : e;
        }
        if (e.checks)
          for (let n of e.checks)
            switch (n.kind) {
              case "min":
                c(
                  r,
                  "minLength",
                  "number" == typeof r.minLength
                    ? Math.max(r.minLength, n.value)
                    : n.value,
                  n.message,
                  t
                );
                break;
              case "max":
                c(
                  r,
                  "maxLength",
                  "number" == typeof r.maxLength
                    ? Math.min(r.maxLength, n.value)
                    : n.value,
                  n.message,
                  t
                );
                break;
              case "email":
                switch (t.emailStrategy) {
                  case "format:email":
                    b(r, "email", n.message, t);
                    break;
                  case "format:idn-email":
                    b(r, "idn-email", n.message, t);
                    break;
                  case "pattern:zod":
                    _(r, m.email, n.message, t);
                }
                break;
              case "url":
                b(r, "uri", n.message, t);
                break;
              case "uuid":
                b(r, "uuid", n.message, t);
                break;
              case "regex":
                _(r, n.regex, n.message, t);
                break;
              case "cuid":
                _(r, m.cuid, n.message, t);
                break;
              case "cuid2":
                _(r, m.cuid2, n.message, t);
                break;
              case "startsWith":
                _(r, RegExp(`^${a(n.value)}`), n.message, t);
                break;
              case "endsWith":
                _(r, RegExp(`${a(n.value)}$`), n.message, t);
                break;
              case "datetime":
                b(r, "date-time", n.message, t);
                break;
              case "date":
                b(r, "date", n.message, t);
                break;
              case "time":
                b(r, "time", n.message, t);
                break;
              case "duration":
                b(r, "duration", n.message, t);
                break;
              case "length":
                c(
                  r,
                  "minLength",
                  "number" == typeof r.minLength
                    ? Math.max(r.minLength, n.value)
                    : n.value,
                  n.message,
                  t
                ),
                  c(
                    r,
                    "maxLength",
                    "number" == typeof r.maxLength
                      ? Math.min(r.maxLength, n.value)
                      : n.value,
                    n.message,
                    t
                  );
                break;
              case "includes":
                _(r, RegExp(a(n.value)), n.message, t);
                break;
              case "ip":
                "v6" !== n.version && b(r, "ipv4", n.message, t),
                  "v4" !== n.version && b(r, "ipv6", n.message, t);
                break;
              case "emoji":
                _(r, m.emoji, n.message, t);
                break;
              case "ulid":
                _(r, m.ulid, n.message, t);
                break;
              case "base64":
                switch (t.base64Strategy) {
                  case "format:binary":
                    b(r, "binary", n.message, t);
                    break;
                  case "contentEncoding:base64":
                    c(r, "contentEncoding", "base64", n.message, t);
                    break;
                  case "pattern:zod":
                    _(r, m.base64, n.message, t);
                }
                break;
              case "nanoid":
                _(r, m.nanoid, n.message, t);
            }
        return r;
      }
      let y = (e) =>
          Array.from(e)
            .map((e) => (/[a-zA-Z0-9]/.test(e) ? e : `\\${e}`))
            .join(""),
        b = (e, t, r, a) => {
          e.format || e.anyOf?.some((e) => e.format)
            ? (e.anyOf || (e.anyOf = []),
              e.format &&
                (e.anyOf.push({
                  format: e.format,
                  ...(e.errorMessage &&
                    a.errorMessages && {
                      errorMessage: { format: e.errorMessage.format },
                    }),
                }),
                delete e.format,
                e.errorMessage &&
                  (delete e.errorMessage.format,
                  0 === Object.keys(e.errorMessage).length &&
                    delete e.errorMessage)),
              e.anyOf.push({
                format: t,
                ...(r && a.errorMessages && { errorMessage: { format: r } }),
              }))
            : c(e, "format", t, r, a);
        },
        _ = (e, t, r, a) => {
          e.pattern || e.allOf?.some((e) => e.pattern)
            ? (e.allOf || (e.allOf = []),
              e.pattern &&
                (e.allOf.push({
                  pattern: e.pattern,
                  ...(e.errorMessage &&
                    a.errorMessages && {
                      errorMessage: { pattern: e.errorMessage.pattern },
                    }),
                }),
                delete e.pattern,
                e.errorMessage &&
                  (delete e.errorMessage.pattern,
                  0 === Object.keys(e.errorMessage).length &&
                    delete e.errorMessage)),
              e.allOf.push({
                pattern: v(t, a),
                ...(r && a.errorMessages && { errorMessage: { pattern: r } }),
              }))
            : c(e, "pattern", v(t, a), r, a);
        },
        v = (e, t) => {
          let r = "function" == typeof e ? e() : e;
          if (!t.applyRegexFlags || !r.flags) return r.source;
          let a = {
              i: r.flags.includes("i"),
              m: r.flags.includes("m"),
              s: r.flags.includes("s"),
            },
            n = a.i ? r.source.toLowerCase() : r.source,
            i = "",
            s = !1,
            o = !1,
            l = !1;
          for (let e = 0; e < n.length; e++) {
            if (s) {
              (i += n[e]), (s = !1);
              continue;
            }
            if (a.i) {
              if (o) {
                if (n[e].match(/[a-z]/)) {
                  l
                    ? ((i += n[e] + `${n[e - 2]}-${n[e]}`.toUpperCase()),
                      (l = !1))
                    : "-" === n[e + 1] && n[e + 2]?.match(/[a-z]/)
                    ? ((i += n[e]), (l = !0))
                    : (i += `${n[e]}${n[e].toUpperCase()}`);
                  continue;
                }
              } else if (n[e].match(/[a-z]/)) {
                i += `[${n[e]}${n[e].toUpperCase()}]`;
                continue;
              }
            }
            if (a.m) {
              if ("^" === n[e]) {
                i += `(^|(?<=[\r
]))`;
                continue;
              }
              if ("$" === n[e]) {
                i += `($|(?=[\r
]))`;
                continue;
              }
            }
            if (a.s && "." === n[e]) {
              i += o
                ? `${n[e]}\r
`
                : `[${n[e]}\r
]`;
              continue;
            }
            (i += n[e]),
              "\\" === n[e]
                ? (s = !0)
                : o && "]" === n[e]
                ? (o = !1)
                : o || "[" !== n[e] || (o = !0);
          }
          try {
            new RegExp(i);
          } catch {
            return (
              console.warn(
                `Could not convert regex pattern at ${t.currentPath.join(
                  "/"
                )} to a flag-independent form! Falling back to the flag-ignorant source`
              ),
              r.source
            );
          }
          return i;
        };
      function w(e, t) {
        if (
          "openApi3" === t.target &&
          e.keyType?._def.typeName === l.pA.ZodEnum
        )
          return {
            type: "object",
            required: e.keyType._def.values,
            properties: e.keyType._def.values.reduce(
              (r, a) => ({
                ...r,
                [a]:
                  A(e.valueType._def, {
                    ...t,
                    currentPath: [...t.currentPath, "properties", a],
                  }) ?? {},
              }),
              {}
            ),
            additionalProperties: !1,
          };
        let r = {
          type: "object",
          additionalProperties:
            A(e.valueType._def, {
              ...t,
              currentPath: [...t.currentPath, "additionalProperties"],
            }) ?? {},
        };
        if ("openApi3" === t.target) return r;
        if (
          e.keyType?._def.typeName === l.pA.ZodString &&
          e.keyType._def.checks?.length
        ) {
          let { type: a, ...n } = g(e.keyType._def, t);
          return { ...r, propertyNames: n };
        }
        if (e.keyType?._def.typeName === l.pA.ZodEnum)
          return { ...r, propertyNames: { enum: e.keyType._def.values } };
        if (
          e.keyType?._def.typeName === l.pA.ZodBranded &&
          e.keyType._def.type._def.typeName === l.pA.ZodString &&
          e.keyType._def.type._def.checks?.length
        ) {
          let { type: a, ...n } = d(e.keyType._def, t);
          return { ...r, propertyNames: n };
        }
        return r;
      }
      let E = {
          ZodString: "string",
          ZodNumber: "number",
          ZodBigInt: "integer",
          ZodBoolean: "boolean",
          ZodNull: "null",
        },
        x = (e, t) => {
          let r = (
            e.options instanceof Map
              ? Array.from(e.options.values())
              : e.options
          )
            .map((e, r) =>
              A(e._def, {
                ...t,
                currentPath: [...t.currentPath, "anyOf", `${r}`],
              })
            )
            .filter(
              (e) =>
                !!e &&
                (!t.strictUnions ||
                  ("object" == typeof e && Object.keys(e).length > 0))
            );
          return r.length ? { anyOf: r } : void 0;
        },
        O = (e, t) => {
          if (t.currentPath.toString() === t.propertyPath?.toString())
            return A(e.innerType._def, t);
          let r = A(e.innerType._def, {
            ...t,
            currentPath: [...t.currentPath, "anyOf", "1"],
          });
          return r ? { anyOf: [{ not: {} }, r] } : {};
        },
        k = (e, t) => {
          if ("input" === t.pipeStrategy) return A(e.in._def, t);
          if ("output" === t.pipeStrategy) return A(e.out._def, t);
          let r = A(e.in._def, {
              ...t,
              currentPath: [...t.currentPath, "allOf", "0"],
            }),
            a = A(e.out._def, {
              ...t,
              currentPath: [...t.currentPath, "allOf", r ? "1" : "0"],
            });
          return { allOf: [r, a].filter((e) => void 0 !== e) };
        },
        S = (e, t) => A(e.innerType._def, t);
      function A(e, t, r = !1) {
        let a = t.seen.get(e);
        if (t.override) {
          let i = t.override?.(e, t, a, r);
          if (i !== n) return i;
        }
        if (a && !r) {
          let e = P(a, t);
          if (void 0 !== e) return e;
        }
        let i = { def: e, path: t.currentPath, jsonSchema: void 0 };
        t.seen.set(e, i);
        let s = T(e, e.typeName, t);
        return s && R(e, t, s), (i.jsonSchema = s), s;
      }
      let P = (e, t) => {
          switch (t.$refStrategy) {
            case "root":
              return { $ref: e.path.join("/") };
            case "relative":
              return { $ref: I(t.currentPath, e.path) };
            case "none":
            case "seen":
              if (
                e.path.length < t.currentPath.length &&
                e.path.every((e, r) => t.currentPath[r] === e)
              )
                return (
                  console.warn(
                    `Recursive reference detected at ${t.currentPath.join(
                      "/"
                    )}! Defaulting to any`
                  ),
                  {}
                );
              return "seen" === t.$refStrategy ? {} : void 0;
          }
        },
        I = (e, t) => {
          let r = 0;
          for (; r < e.length && r < t.length && e[r] === t[r]; r++);
          return [(e.length - r).toString(), ...t.slice(r)].join("/");
        },
        T = (e, t, r) => {
          switch (t) {
            case l.pA.ZodString:
              return g(e, r);
            case l.pA.ZodNumber:
              return (function (e, t) {
                let r = { type: "number" };
                if (!e.checks) return r;
                for (let a of e.checks)
                  switch (a.kind) {
                    case "int":
                      (r.type = "integer"), u(r, "type", a.message, t);
                      break;
                    case "min":
                      "jsonSchema7" === t.target
                        ? a.inclusive
                          ? c(r, "minimum", a.value, a.message, t)
                          : c(r, "exclusiveMinimum", a.value, a.message, t)
                        : (a.inclusive || (r.exclusiveMinimum = !0),
                          c(r, "minimum", a.value, a.message, t));
                      break;
                    case "max":
                      "jsonSchema7" === t.target
                        ? a.inclusive
                          ? c(r, "maximum", a.value, a.message, t)
                          : c(r, "exclusiveMaximum", a.value, a.message, t)
                        : (a.inclusive || (r.exclusiveMaximum = !0),
                          c(r, "maximum", a.value, a.message, t));
                      break;
                    case "multipleOf":
                      c(r, "multipleOf", a.value, a.message, t);
                  }
                return r;
              })(e, r);
            case l.pA.ZodObject:
              return (function (e, t) {
                let r = {
                  type: "object",
                  ...Object.entries(e.shape()).reduce(
                    (e, [r, a]) => {
                      if (void 0 === a || void 0 === a._def) return e;
                      let n = A(a._def, {
                        ...t,
                        currentPath: [...t.currentPath, "properties", r],
                        propertyPath: [...t.currentPath, "properties", r],
                      });
                      return void 0 === n
                        ? e
                        : {
                            properties: { ...e.properties, [r]: n },
                            required: a.isOptional()
                              ? e.required
                              : [...e.required, r],
                          };
                    },
                    { properties: {}, required: [] }
                  ),
                  additionalProperties:
                    "strict" === t.removeAdditionalStrategy
                      ? "ZodNever" === e.catchall._def.typeName
                        ? "strict" !== e.unknownKeys
                        : A(e.catchall._def, {
                            ...t,
                            currentPath: [
                              ...t.currentPath,
                              "additionalProperties",
                            ],
                          }) ?? !0
                      : "ZodNever" === e.catchall._def.typeName
                      ? "passthrough" === e.unknownKeys
                      : A(e.catchall._def, {
                          ...t,
                          currentPath: [
                            ...t.currentPath,
                            "additionalProperties",
                          ],
                        }) ?? !0,
                };
                return r.required.length || delete r.required, r;
              })(e, r);
            case l.pA.ZodBigInt:
              return (function (e, t) {
                let r = { type: "integer", format: "int64" };
                if (!e.checks) return r;
                for (let a of e.checks)
                  switch (a.kind) {
                    case "min":
                      "jsonSchema7" === t.target
                        ? a.inclusive
                          ? c(r, "minimum", a.value, a.message, t)
                          : c(r, "exclusiveMinimum", a.value, a.message, t)
                        : (a.inclusive || (r.exclusiveMinimum = !0),
                          c(r, "minimum", a.value, a.message, t));
                      break;
                    case "max":
                      "jsonSchema7" === t.target
                        ? a.inclusive
                          ? c(r, "maximum", a.value, a.message, t)
                          : c(r, "exclusiveMaximum", a.value, a.message, t)
                        : (a.inclusive || (r.exclusiveMaximum = !0),
                          c(r, "maximum", a.value, a.message, t));
                      break;
                    case "multipleOf":
                      c(r, "multipleOf", a.value, a.message, t);
                  }
                return r;
              })(e, r);
            case l.pA.ZodBoolean:
              return { type: "boolean" };
            case l.pA.ZodDate:
              return (function e(t, r, a) {
                let n = a ?? r.dateStrategy;
                if (Array.isArray(n))
                  return { anyOf: n.map((a, n) => e(t, r, a)) };
                switch (n) {
                  case "string":
                  case "format:date-time":
                    return { type: "string", format: "date-time" };
                  case "format:date":
                    return { type: "string", format: "date" };
                  case "integer":
                    return p(t, r);
                }
              })(e, r);
            case l.pA.ZodUndefined:
              return { not: {} };
            case l.pA.ZodNull:
              return "openApi3" === r.target
                ? { enum: ["null"], nullable: !0 }
                : { type: "null" };
            case l.pA.ZodArray:
              return (function (e, t) {
                let r = { type: "array" };
                return (
                  e.type?._def &&
                    e.type?._def?.typeName !== l.pA.ZodAny &&
                    (r.items = A(e.type._def, {
                      ...t,
                      currentPath: [...t.currentPath, "items"],
                    })),
                  e.minLength &&
                    c(r, "minItems", e.minLength.value, e.minLength.message, t),
                  e.maxLength &&
                    c(r, "maxItems", e.maxLength.value, e.maxLength.message, t),
                  e.exactLength &&
                    (c(
                      r,
                      "minItems",
                      e.exactLength.value,
                      e.exactLength.message,
                      t
                    ),
                    c(
                      r,
                      "maxItems",
                      e.exactLength.value,
                      e.exactLength.message,
                      t
                    )),
                  r
                );
              })(e, r);
            case l.pA.ZodUnion:
            case l.pA.ZodDiscriminatedUnion:
              return (function (e, t) {
                if ("openApi3" === t.target) return x(e, t);
                let r =
                  e.options instanceof Map
                    ? Array.from(e.options.values())
                    : e.options;
                if (
                  r.every(
                    (e) =>
                      e._def.typeName in E &&
                      (!e._def.checks || !e._def.checks.length)
                  )
                ) {
                  let e = r.reduce((e, t) => {
                    let r = E[t._def.typeName];
                    return r && !e.includes(r) ? [...e, r] : e;
                  }, []);
                  return { type: e.length > 1 ? e : e[0] };
                }
                if (
                  r.every(
                    (e) => "ZodLiteral" === e._def.typeName && !e.description
                  )
                ) {
                  let e = r.reduce((e, t) => {
                    let r = typeof t._def.value;
                    switch (r) {
                      case "string":
                      case "number":
                      case "boolean":
                        return [...e, r];
                      case "bigint":
                        return [...e, "integer"];
                      case "object":
                        if (null === t._def.value) return [...e, "null"];
                      default:
                        return e;
                    }
                  }, []);
                  if (e.length === r.length) {
                    let t = e.filter((e, t, r) => r.indexOf(e) === t);
                    return {
                      type: t.length > 1 ? t : t[0],
                      enum: r.reduce(
                        (e, t) =>
                          e.includes(t._def.value) ? e : [...e, t._def.value],
                        []
                      ),
                    };
                  }
                } else if (r.every((e) => "ZodEnum" === e._def.typeName))
                  return {
                    type: "string",
                    enum: r.reduce(
                      (e, t) => [
                        ...e,
                        ...t._def.values.filter((t) => !e.includes(t)),
                      ],
                      []
                    ),
                  };
                return x(e, t);
              })(e, r);
            case l.pA.ZodIntersection:
              return (function (e, t) {
                let r = [
                    A(e.left._def, {
                      ...t,
                      currentPath: [...t.currentPath, "allOf", "0"],
                    }),
                    A(e.right._def, {
                      ...t,
                      currentPath: [...t.currentPath, "allOf", "1"],
                    }),
                  ].filter((e) => !!e),
                  a =
                    "jsonSchema2019-09" === t.target
                      ? { unevaluatedProperties: !1 }
                      : void 0,
                  n = [];
                return (
                  r.forEach((e) => {
                    if (f(e))
                      n.push(...e.allOf),
                        void 0 === e.unevaluatedProperties && (a = void 0);
                    else {
                      let t = e;
                      if (
                        "additionalProperties" in e &&
                        !1 === e.additionalProperties
                      ) {
                        let { additionalProperties: r, ...a } = e;
                        t = a;
                      } else a = void 0;
                      n.push(t);
                    }
                  }),
                  n.length ? { allOf: n, ...a } : void 0
                );
              })(e, r);
            case l.pA.ZodTuple:
              return e.rest
                ? {
                    type: "array",
                    minItems: e.items.length,
                    items: e.items
                      .map((e, t) =>
                        A(e._def, {
                          ...r,
                          currentPath: [...r.currentPath, "items", `${t}`],
                        })
                      )
                      .reduce((e, t) => (void 0 === t ? e : [...e, t]), []),
                    additionalItems: A(e.rest._def, {
                      ...r,
                      currentPath: [...r.currentPath, "additionalItems"],
                    }),
                  }
                : {
                    type: "array",
                    minItems: e.items.length,
                    maxItems: e.items.length,
                    items: e.items
                      .map((e, t) =>
                        A(e._def, {
                          ...r,
                          currentPath: [...r.currentPath, "items", `${t}`],
                        })
                      )
                      .reduce((e, t) => (void 0 === t ? e : [...e, t]), []),
                  };
            case l.pA.ZodRecord:
              return w(e, r);
            case l.pA.ZodLiteral:
              return (function (e, t) {
                let r = typeof e.value;
                return "bigint" !== r &&
                  "number" !== r &&
                  "boolean" !== r &&
                  "string" !== r
                  ? { type: Array.isArray(e.value) ? "array" : "object" }
                  : "openApi3" === t.target
                  ? { type: "bigint" === r ? "integer" : r, enum: [e.value] }
                  : { type: "bigint" === r ? "integer" : r, const: e.value };
              })(e, r);
            case l.pA.ZodEnum:
              return { type: "string", enum: e.values };
            case l.pA.ZodNativeEnum:
              return (function (e) {
                let t = e.values,
                  r = Object.keys(e.values)
                    .filter((e) => "number" != typeof t[t[e]])
                    .map((e) => t[e]),
                  a = Array.from(new Set(r.map((e) => typeof e)));
                return {
                  type:
                    1 === a.length
                      ? "string" === a[0]
                        ? "string"
                        : "number"
                      : ["string", "number"],
                  enum: r,
                };
              })(e);
            case l.pA.ZodNullable:
              return (function (e, t) {
                if (
                  [
                    "ZodString",
                    "ZodNumber",
                    "ZodBigInt",
                    "ZodBoolean",
                    "ZodNull",
                  ].includes(e.innerType._def.typeName) &&
                  (!e.innerType._def.checks || !e.innerType._def.checks.length)
                )
                  return "openApi3" === t.target
                    ? { type: E[e.innerType._def.typeName], nullable: !0 }
                    : { type: [E[e.innerType._def.typeName], "null"] };
                if ("openApi3" === t.target) {
                  let r = A(e.innerType._def, {
                    ...t,
                    currentPath: [...t.currentPath],
                  });
                  return r && "$ref" in r
                    ? { allOf: [r], nullable: !0 }
                    : r && { ...r, nullable: !0 };
                }
                let r = A(e.innerType._def, {
                  ...t,
                  currentPath: [...t.currentPath, "anyOf", "0"],
                });
                return r && { anyOf: [r, { type: "null" }] };
              })(e, r);
            case l.pA.ZodOptional:
              return O(e, r);
            case l.pA.ZodMap:
              return "record" === r.mapStrategy
                ? w(e, r)
                : {
                    type: "array",
                    maxItems: 125,
                    items: {
                      type: "array",
                      items: [
                        A(e.keyType._def, {
                          ...r,
                          currentPath: [
                            ...r.currentPath,
                            "items",
                            "items",
                            "0",
                          ],
                        }) || {},
                        A(e.valueType._def, {
                          ...r,
                          currentPath: [
                            ...r.currentPath,
                            "items",
                            "items",
                            "1",
                          ],
                        }) || {},
                      ],
                      minItems: 2,
                      maxItems: 2,
                    },
                  };
            case l.pA.ZodSet:
              return (function (e, t) {
                let r = {
                  type: "array",
                  uniqueItems: !0,
                  items: A(e.valueType._def, {
                    ...t,
                    currentPath: [...t.currentPath, "items"],
                  }),
                };
                return (
                  e.minSize &&
                    c(r, "minItems", e.minSize.value, e.minSize.message, t),
                  e.maxSize &&
                    c(r, "maxItems", e.maxSize.value, e.maxSize.message, t),
                  r
                );
              })(e, r);
            case l.pA.ZodLazy:
              return A(e.getter()._def, r);
            case l.pA.ZodPromise:
              return A(e.type._def, r);
            case l.pA.ZodNaN:
            case l.pA.ZodNever:
              return { not: {} };
            case l.pA.ZodEffects:
              return "input" === r.effectStrategy ? A(e.schema._def, r) : {};
            case l.pA.ZodAny:
            case l.pA.ZodUnknown:
              return {};
            case l.pA.ZodDefault:
              return { ...A(e.innerType._def, r), default: e.defaultValue() };
            case l.pA.ZodBranded:
              return d(e, r);
            case l.pA.ZodReadonly:
              return S(e, r);
            case l.pA.ZodCatch:
              return h(e, r);
            case l.pA.ZodPipeline:
              return k(e, r);
            case l.pA.ZodFunction:
            case l.pA.ZodVoid:
            case l.pA.ZodSymbol:
            default:
              return;
          }
        },
        R = (e, t, r) => (
          e.description &&
            ((r.description = e.description),
            t.markdownDescription && (r.markdownDescription = e.description)),
          r
        ),
        $ = (e, t) => {
          let r = o(t),
            a =
              "object" == typeof t && t.definitions
                ? Object.entries(t.definitions).reduce(
                    (e, [t, a]) => ({
                      ...e,
                      [t]:
                        A(
                          a._def,
                          {
                            ...r,
                            currentPath: [...r.basePath, r.definitionPath, t],
                          },
                          !0
                        ) ?? {},
                    }),
                    {}
                  )
                : void 0,
            n =
              "string" == typeof t
                ? t
                : t?.nameStrategy === "title"
                ? void 0
                : t?.name,
            i =
              A(
                e._def,
                void 0 === n
                  ? r
                  : { ...r, currentPath: [...r.basePath, r.definitionPath, n] },
                !1
              ) ?? {},
            s =
              "object" == typeof t &&
              void 0 !== t.name &&
              "title" === t.nameStrategy
                ? t.name
                : void 0;
          void 0 !== s && (i.title = s);
          let l =
            void 0 === n
              ? a
                ? { ...i, [r.definitionPath]: a }
                : i
              : {
                  $ref: [
                    ...("relative" === r.$refStrategy ? [] : r.basePath),
                    r.definitionPath,
                    n,
                  ].join("/"),
                  [r.definitionPath]: { ...a, [n]: i },
                };
          return (
            "jsonSchema7" === r.target
              ? (l.$schema = "http://json-schema.org/draft-07/schema#")
              : "jsonSchema2019-09" === r.target &&
                (l.$schema = "https://json-schema.org/draft/2019-09/schema#"),
            l
          );
        };
    },
    1604: function (e, t, r) {
      "use strict";
      let a;
      r.d(t, {
        pA: function () {
          return ts;
        },
        z: function () {
          return to;
        },
      }),
        ((e8 = tt || (tt = {})).assertEqual = (e) => e),
        (e8.assertIs = function (e) {}),
        (e8.assertNever = function (e) {
          throw Error();
        }),
        (e8.arrayToEnum = (e) => {
          let t = {};
          for (let r of e) t[r] = r;
          return t;
        }),
        (e8.getValidEnumValues = (e) => {
          let t = e8.objectKeys(e).filter((t) => "number" != typeof e[e[t]]),
            r = {};
          for (let a of t) r[a] = e[a];
          return e8.objectValues(r);
        }),
        (e8.objectValues = (e) =>
          e8.objectKeys(e).map(function (t) {
            return e[t];
          })),
        (e8.objectKeys =
          "function" == typeof Object.keys
            ? (e) => Object.keys(e)
            : (e) => {
                let t = [];
                for (let r in e)
                  Object.prototype.hasOwnProperty.call(e, r) && t.push(r);
                return t;
              }),
        (e8.find = (e, t) => {
          for (let r of e) if (t(r)) return r;
        }),
        (e8.isInteger =
          "function" == typeof Number.isInteger
            ? (e) => Number.isInteger(e)
            : (e) =>
                "number" == typeof e && isFinite(e) && Math.floor(e) === e),
        (e8.joinValues = function (e, t = " | ") {
          return e.map((e) => ("string" == typeof e ? `'${e}'` : e)).join(t);
        }),
        (e8.jsonStringifyReplacer = (e, t) =>
          "bigint" == typeof t ? t.toString() : t),
        ((tr || (tr = {})).mergeShapes = (e, t) => ({ ...e, ...t }));
      let n = tt.arrayToEnum([
          "string",
          "nan",
          "number",
          "integer",
          "float",
          "boolean",
          "date",
          "bigint",
          "symbol",
          "function",
          "undefined",
          "null",
          "array",
          "object",
          "unknown",
          "promise",
          "void",
          "never",
          "map",
          "set",
        ]),
        i = (e) => {
          switch (typeof e) {
            case "undefined":
              return n.undefined;
            case "string":
              return n.string;
            case "number":
              return isNaN(e) ? n.nan : n.number;
            case "boolean":
              return n.boolean;
            case "function":
              return n.function;
            case "bigint":
              return n.bigint;
            case "symbol":
              return n.symbol;
            case "object":
              if (Array.isArray(e)) return n.array;
              if (null === e) return n.null;
              if (
                e.then &&
                "function" == typeof e.then &&
                e.catch &&
                "function" == typeof e.catch
              )
                return n.promise;
              if ("undefined" != typeof Map && e instanceof Map) return n.map;
              if ("undefined" != typeof Set && e instanceof Set) return n.set;
              if ("undefined" != typeof Date && e instanceof Date)
                return n.date;
              return n.object;
            default:
              return n.unknown;
          }
        },
        s = tt.arrayToEnum([
          "invalid_type",
          "invalid_literal",
          "custom",
          "invalid_union",
          "invalid_union_discriminator",
          "invalid_enum_value",
          "unrecognized_keys",
          "invalid_arguments",
          "invalid_return_type",
          "invalid_date",
          "invalid_string",
          "too_small",
          "too_big",
          "invalid_intersection_types",
          "not_multiple_of",
          "not_finite",
        ]);
      class o extends Error {
        constructor(e) {
          super(),
            (this.issues = []),
            (this.addIssue = (e) => {
              this.issues = [...this.issues, e];
            }),
            (this.addIssues = (e = []) => {
              this.issues = [...this.issues, ...e];
            });
          let t = new.target.prototype;
          Object.setPrototypeOf
            ? Object.setPrototypeOf(this, t)
            : (this.__proto__ = t),
            (this.name = "ZodError"),
            (this.issues = e);
        }
        get errors() {
          return this.issues;
        }
        format(e) {
          let t =
              e ||
              function (e) {
                return e.message;
              },
            r = { _errors: [] },
            a = (e) => {
              for (let n of e.issues)
                if ("invalid_union" === n.code) n.unionErrors.map(a);
                else if ("invalid_return_type" === n.code) a(n.returnTypeError);
                else if ("invalid_arguments" === n.code) a(n.argumentsError);
                else if (0 === n.path.length) r._errors.push(t(n));
                else {
                  let e = r,
                    a = 0;
                  for (; a < n.path.length; ) {
                    let r = n.path[a];
                    a === n.path.length - 1
                      ? ((e[r] = e[r] || { _errors: [] }),
                        e[r]._errors.push(t(n)))
                      : (e[r] = e[r] || { _errors: [] }),
                      (e = e[r]),
                      a++;
                  }
                }
            };
          return a(this), r;
        }
        static assert(e) {
          if (!(e instanceof o)) throw Error(`Not a ZodError: ${e}`);
        }
        toString() {
          return this.message;
        }
        get message() {
          return JSON.stringify(this.issues, tt.jsonStringifyReplacer, 2);
        }
        get isEmpty() {
          return 0 === this.issues.length;
        }
        flatten(e = (e) => e.message) {
          let t = {},
            r = [];
          for (let a of this.issues)
            a.path.length > 0
              ? ((t[a.path[0]] = t[a.path[0]] || []), t[a.path[0]].push(e(a)))
              : r.push(e(a));
          return { formErrors: r, fieldErrors: t };
        }
        get formErrors() {
          return this.flatten();
        }
      }
      o.create = (e) => new o(e);
      let l = (e, t) => {
          let r;
          switch (e.code) {
            case s.invalid_type:
              r =
                e.received === n.undefined
                  ? "Required"
                  : `Expected ${e.expected}, received ${e.received}`;
              break;
            case s.invalid_literal:
              r = `Invalid literal value, expected ${JSON.stringify(
                e.expected,
                tt.jsonStringifyReplacer
              )}`;
              break;
            case s.unrecognized_keys:
              r = `Unrecognized key(s) in object: ${tt.joinValues(
                e.keys,
                ", "
              )}`;
              break;
            case s.invalid_union:
              r = "Invalid input";
              break;
            case s.invalid_union_discriminator:
              r = `Invalid discriminator value. Expected ${tt.joinValues(
                e.options
              )}`;
              break;
            case s.invalid_enum_value:
              r = `Invalid enum value. Expected ${tt.joinValues(
                e.options
              )}, received '${e.received}'`;
              break;
            case s.invalid_arguments:
              r = "Invalid function arguments";
              break;
            case s.invalid_return_type:
              r = "Invalid function return type";
              break;
            case s.invalid_date:
              r = "Invalid date";
              break;
            case s.invalid_string:
              "object" == typeof e.validation
                ? "includes" in e.validation
                  ? ((r = `Invalid input: must include "${e.validation.includes}"`),
                    "number" == typeof e.validation.position &&
                      (r = `${r} at one or more positions greater than or equal to ${e.validation.position}`))
                  : "startsWith" in e.validation
                  ? (r = `Invalid input: must start with "${e.validation.startsWith}"`)
                  : "endsWith" in e.validation
                  ? (r = `Invalid input: must end with "${e.validation.endsWith}"`)
                  : tt.assertNever(e.validation)
                : (r =
                    "regex" !== e.validation
                      ? `Invalid ${e.validation}`
                      : "Invalid");
              break;
            case s.too_small:
              r =
                "array" === e.type
                  ? `Array must contain ${
                      e.exact
                        ? "exactly"
                        : e.inclusive
                        ? "at least"
                        : "more than"
                    } ${e.minimum} element(s)`
                  : "string" === e.type
                  ? `String must contain ${
                      e.exact ? "exactly" : e.inclusive ? "at least" : "over"
                    } ${e.minimum} character(s)`
                  : "number" === e.type
                  ? `Number must be ${
                      e.exact
                        ? "exactly equal to "
                        : e.inclusive
                        ? "greater than or equal to "
                        : "greater than "
                    }${e.minimum}`
                  : "date" === e.type
                  ? `Date must be ${
                      e.exact
                        ? "exactly equal to "
                        : e.inclusive
                        ? "greater than or equal to "
                        : "greater than "
                    }${new Date(Number(e.minimum))}`
                  : "Invalid input";
              break;
            case s.too_big:
              r =
                "array" === e.type
                  ? `Array must contain ${
                      e.exact
                        ? "exactly"
                        : e.inclusive
                        ? "at most"
                        : "less than"
                    } ${e.maximum} element(s)`
                  : "string" === e.type
                  ? `String must contain ${
                      e.exact ? "exactly" : e.inclusive ? "at most" : "under"
                    } ${e.maximum} character(s)`
                  : "number" === e.type
                  ? `Number must be ${
                      e.exact
                        ? "exactly"
                        : e.inclusive
                        ? "less than or equal to"
                        : "less than"
                    } ${e.maximum}`
                  : "bigint" === e.type
                  ? `BigInt must be ${
                      e.exact
                        ? "exactly"
                        : e.inclusive
                        ? "less than or equal to"
                        : "less than"
                    } ${e.maximum}`
                  : "date" === e.type
                  ? `Date must be ${
                      e.exact
                        ? "exactly"
                        : e.inclusive
                        ? "smaller than or equal to"
                        : "smaller than"
                    } ${new Date(Number(e.maximum))}`
                  : "Invalid input";
              break;
            case s.custom:
              r = "Invalid input";
              break;
            case s.invalid_intersection_types:
              r = "Intersection results could not be merged";
              break;
            case s.not_multiple_of:
              r = `Number must be a multiple of ${e.multipleOf}`;
              break;
            case s.not_finite:
              r = "Number must be finite";
              break;
            default:
              (r = t.defaultError), tt.assertNever(e);
          }
          return { message: r };
        },
        u = l;
      function c() {
        return u;
      }
      let d = (e) => {
        let { data: t, path: r, errorMaps: a, issueData: n } = e,
          i = [...r, ...(n.path || [])],
          s = { ...n, path: i };
        if (void 0 !== n.message) return { ...n, path: i, message: n.message };
        let o = "";
        for (let e of a
          .filter((e) => !!e)
          .slice()
          .reverse())
          o = e(s, { data: t, defaultError: o }).message;
        return { ...n, path: i, message: o };
      };
      function h(e, t) {
        let r = c(),
          a = d({
            issueData: t,
            data: e.data,
            path: e.path,
            errorMaps: [
              e.common.contextualErrorMap,
              e.schemaErrorMap,
              r,
              r === l ? void 0 : l,
            ].filter((e) => !!e),
          });
        e.common.issues.push(a);
      }
      class p {
        constructor() {
          this.value = "valid";
        }
        dirty() {
          "valid" === this.value && (this.value = "dirty");
        }
        abort() {
          "aborted" !== this.value && (this.value = "aborted");
        }
        static mergeArray(e, t) {
          let r = [];
          for (let a of t) {
            if ("aborted" === a.status) return f;
            "dirty" === a.status && e.dirty(), r.push(a.value);
          }
          return { status: e.value, value: r };
        }
        static async mergeObjectAsync(e, t) {
          let r = [];
          for (let e of t) {
            let t = await e.key,
              a = await e.value;
            r.push({ key: t, value: a });
          }
          return p.mergeObjectSync(e, r);
        }
        static mergeObjectSync(e, t) {
          let r = {};
          for (let a of t) {
            let { key: t, value: n } = a;
            if ("aborted" === t.status || "aborted" === n.status) return f;
            "dirty" === t.status && e.dirty(),
              "dirty" === n.status && e.dirty(),
              "__proto__" !== t.value &&
                (void 0 !== n.value || a.alwaysSet) &&
                (r[t.value] = n.value);
          }
          return { status: e.value, value: r };
        }
      }
      let f = Object.freeze({ status: "aborted" }),
        m = (e) => ({ status: "dirty", value: e }),
        g = (e) => ({ status: "valid", value: e }),
        y = (e) => "aborted" === e.status,
        b = (e) => "dirty" === e.status,
        _ = (e) => "valid" === e.status,
        v = (e) => "undefined" != typeof Promise && e instanceof Promise;
      function w(e, t, r, a) {
        if ("a" === r && !a)
          throw TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !a : !t.has(e))
          throw TypeError(
            "Cannot read private member from an object whose class did not declare it"
          );
        return "m" === r ? a : "a" === r ? a.call(e) : a ? a.value : t.get(e);
      }
      function E(e, t, r, a, n) {
        if ("m" === a) throw TypeError("Private method is not writable");
        if ("a" === a && !n)
          throw TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !n : !t.has(e))
          throw TypeError(
            "Cannot write private member to an object whose class did not declare it"
          );
        return "a" === a ? n.call(e, r) : n ? (n.value = r) : t.set(e, r), r;
      }
      "function" == typeof SuppressedError && SuppressedError,
        ((e7 = ta || (ta = {})).errToObj = (e) =>
          "string" == typeof e ? { message: e } : e || {}),
        (e7.toString = (e) =>
          "string" == typeof e ? e : null == e ? void 0 : e.message);
      class x {
        constructor(e, t, r, a) {
          (this._cachedPath = []),
            (this.parent = e),
            (this.data = t),
            (this._path = r),
            (this._key = a);
        }
        get path() {
          return (
            this._cachedPath.length ||
              (this._key instanceof Array
                ? this._cachedPath.push(...this._path, ...this._key)
                : this._cachedPath.push(...this._path, this._key)),
            this._cachedPath
          );
        }
      }
      let O = (e, t) => {
        if (_(t)) return { success: !0, data: t.value };
        if (!e.common.issues.length)
          throw Error("Validation failed but no issues detected.");
        return {
          success: !1,
          get error() {
            if (this._error) return this._error;
            let t = new o(e.common.issues);
            return (this._error = t), this._error;
          },
        };
      };
      function k(e) {
        if (!e) return {};
        let {
          errorMap: t,
          invalid_type_error: r,
          required_error: a,
          description: n,
        } = e;
        if (t && (r || a))
          throw Error(
            'Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.'
          );
        return t
          ? { errorMap: t, description: n }
          : {
              errorMap: (t, n) => {
                var i, s;
                let { message: o } = e;
                return "invalid_enum_value" === t.code
                  ? { message: null != o ? o : n.defaultError }
                  : void 0 === n.data
                  ? {
                      message:
                        null !== (i = null != o ? o : a) && void 0 !== i
                          ? i
                          : n.defaultError,
                    }
                  : "invalid_type" !== t.code
                  ? { message: n.defaultError }
                  : {
                      message:
                        null !== (s = null != o ? o : r) && void 0 !== s
                          ? s
                          : n.defaultError,
                    };
              },
              description: n,
            };
      }
      class S {
        constructor(e) {
          (this.spa = this.safeParseAsync),
            (this._def = e),
            (this.parse = this.parse.bind(this)),
            (this.safeParse = this.safeParse.bind(this)),
            (this.parseAsync = this.parseAsync.bind(this)),
            (this.safeParseAsync = this.safeParseAsync.bind(this)),
            (this.spa = this.spa.bind(this)),
            (this.refine = this.refine.bind(this)),
            (this.refinement = this.refinement.bind(this)),
            (this.superRefine = this.superRefine.bind(this)),
            (this.optional = this.optional.bind(this)),
            (this.nullable = this.nullable.bind(this)),
            (this.nullish = this.nullish.bind(this)),
            (this.array = this.array.bind(this)),
            (this.promise = this.promise.bind(this)),
            (this.or = this.or.bind(this)),
            (this.and = this.and.bind(this)),
            (this.transform = this.transform.bind(this)),
            (this.brand = this.brand.bind(this)),
            (this.default = this.default.bind(this)),
            (this.catch = this.catch.bind(this)),
            (this.describe = this.describe.bind(this)),
            (this.pipe = this.pipe.bind(this)),
            (this.readonly = this.readonly.bind(this)),
            (this.isNullable = this.isNullable.bind(this)),
            (this.isOptional = this.isOptional.bind(this));
        }
        get description() {
          return this._def.description;
        }
        _getType(e) {
          return i(e.data);
        }
        _getOrReturnCtx(e, t) {
          return (
            t || {
              common: e.parent.common,
              data: e.data,
              parsedType: i(e.data),
              schemaErrorMap: this._def.errorMap,
              path: e.path,
              parent: e.parent,
            }
          );
        }
        _processInputParams(e) {
          return {
            status: new p(),
            ctx: {
              common: e.parent.common,
              data: e.data,
              parsedType: i(e.data),
              schemaErrorMap: this._def.errorMap,
              path: e.path,
              parent: e.parent,
            },
          };
        }
        _parseSync(e) {
          let t = this._parse(e);
          if (v(t)) throw Error("Synchronous parse encountered promise.");
          return t;
        }
        _parseAsync(e) {
          return Promise.resolve(this._parse(e));
        }
        parse(e, t) {
          let r = this.safeParse(e, t);
          if (r.success) return r.data;
          throw r.error;
        }
        safeParse(e, t) {
          var r;
          let a = {
              common: {
                issues: [],
                async:
                  null !== (r = null == t ? void 0 : t.async) &&
                  void 0 !== r &&
                  r,
                contextualErrorMap: null == t ? void 0 : t.errorMap,
              },
              path: (null == t ? void 0 : t.path) || [],
              schemaErrorMap: this._def.errorMap,
              parent: null,
              data: e,
              parsedType: i(e),
            },
            n = this._parseSync({ data: e, path: a.path, parent: a });
          return O(a, n);
        }
        async parseAsync(e, t) {
          let r = await this.safeParseAsync(e, t);
          if (r.success) return r.data;
          throw r.error;
        }
        async safeParseAsync(e, t) {
          let r = {
              common: {
                issues: [],
                contextualErrorMap: null == t ? void 0 : t.errorMap,
                async: !0,
              },
              path: (null == t ? void 0 : t.path) || [],
              schemaErrorMap: this._def.errorMap,
              parent: null,
              data: e,
              parsedType: i(e),
            },
            a = this._parse({ data: e, path: r.path, parent: r });
          return O(r, await (v(a) ? a : Promise.resolve(a)));
        }
        refine(e, t) {
          let r = (e) =>
            "string" == typeof t || void 0 === t
              ? { message: t }
              : "function" == typeof t
              ? t(e)
              : t;
          return this._refinement((t, a) => {
            let n = e(t),
              i = () => a.addIssue({ code: s.custom, ...r(t) });
            return "undefined" != typeof Promise && n instanceof Promise
              ? n.then((e) => !!e || (i(), !1))
              : !!n || (i(), !1);
          });
        }
        refinement(e, t) {
          return this._refinement(
            (r, a) =>
              !!e(r) || (a.addIssue("function" == typeof t ? t(r, a) : t), !1)
          );
        }
        _refinement(e) {
          return new eg({
            schema: this,
            typeName: ts.ZodEffects,
            effect: { type: "refinement", refinement: e },
          });
        }
        superRefine(e) {
          return this._refinement(e);
        }
        optional() {
          return ey.create(this, this._def);
        }
        nullable() {
          return eb.create(this, this._def);
        }
        nullish() {
          return this.nullable().optional();
        }
        array() {
          return Y.create(this, this._def);
        }
        promise() {
          return em.create(this, this._def);
        }
        or(e) {
          return et.create([this, e], this._def);
        }
        and(e) {
          return en.create(this, e, this._def);
        }
        transform(e) {
          return new eg({
            ...k(this._def),
            schema: this,
            typeName: ts.ZodEffects,
            effect: { type: "transform", transform: e },
          });
        }
        default(e) {
          return new e_({
            ...k(this._def),
            innerType: this,
            defaultValue: "function" == typeof e ? e : () => e,
            typeName: ts.ZodDefault,
          });
        }
        brand() {
          return new ex({
            typeName: ts.ZodBranded,
            type: this,
            ...k(this._def),
          });
        }
        catch(e) {
          return new ev({
            ...k(this._def),
            innerType: this,
            catchValue: "function" == typeof e ? e : () => e,
            typeName: ts.ZodCatch,
          });
        }
        describe(e) {
          return new this.constructor({ ...this._def, description: e });
        }
        pipe(e) {
          return eO.create(this, e);
        }
        readonly() {
          return ek.create(this);
        }
        isOptional() {
          return this.safeParse(void 0).success;
        }
        isNullable() {
          return this.safeParse(null).success;
        }
      }
      let A = /^c[^\s-]{8,}$/i,
        P = /^[0-9a-z]+$/,
        I = /^[0-9A-HJKMNP-TV-Z]{26}$/,
        T =
          /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
        R = /^[a-z0-9_-]{21}$/i,
        $ =
          /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
        j =
          /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
        C =
          /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
        N =
          /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
        L = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
        M =
          "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
        U = RegExp(`^${M}$`);
      function D(e) {
        let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
        return (
          e.precision
            ? (t = `${t}\\.\\d{${e.precision}}`)
            : null == e.precision && (t = `${t}(\\.\\d+)?`),
          t
        );
      }
      function F(e) {
        let t = `${M}T${D(e)}`,
          r = [];
        return (
          r.push(e.local ? "Z?" : "Z"),
          e.offset && r.push("([+-]\\d{2}:?\\d{2})"),
          (t = `${t}(${r.join("|")})`),
          RegExp(`^${t}$`)
        );
      }
      class Z extends S {
        _parse(e) {
          var t, r;
          let i;
          if (
            (this._def.coerce && (e.data = String(e.data)),
            this._getType(e) !== n.string)
          ) {
            let t = this._getOrReturnCtx(e);
            return (
              h(t, {
                code: s.invalid_type,
                expected: n.string,
                received: t.parsedType,
              }),
              f
            );
          }
          let o = new p();
          for (let n of this._def.checks)
            if ("min" === n.kind)
              e.data.length < n.value &&
                (h((i = this._getOrReturnCtx(e, i)), {
                  code: s.too_small,
                  minimum: n.value,
                  type: "string",
                  inclusive: !0,
                  exact: !1,
                  message: n.message,
                }),
                o.dirty());
            else if ("max" === n.kind)
              e.data.length > n.value &&
                (h((i = this._getOrReturnCtx(e, i)), {
                  code: s.too_big,
                  maximum: n.value,
                  type: "string",
                  inclusive: !0,
                  exact: !1,
                  message: n.message,
                }),
                o.dirty());
            else if ("length" === n.kind) {
              let t = e.data.length > n.value,
                r = e.data.length < n.value;
              (t || r) &&
                ((i = this._getOrReturnCtx(e, i)),
                t
                  ? h(i, {
                      code: s.too_big,
                      maximum: n.value,
                      type: "string",
                      inclusive: !0,
                      exact: !0,
                      message: n.message,
                    })
                  : r &&
                    h(i, {
                      code: s.too_small,
                      minimum: n.value,
                      type: "string",
                      inclusive: !0,
                      exact: !0,
                      message: n.message,
                    }),
                o.dirty());
            } else if ("email" === n.kind)
              j.test(e.data) ||
                (h((i = this._getOrReturnCtx(e, i)), {
                  validation: "email",
                  code: s.invalid_string,
                  message: n.message,
                }),
                o.dirty());
            else if ("emoji" === n.kind)
              a ||
                (a = RegExp(
                  "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",
                  "u"
                )),
                a.test(e.data) ||
                  (h((i = this._getOrReturnCtx(e, i)), {
                    validation: "emoji",
                    code: s.invalid_string,
                    message: n.message,
                  }),
                  o.dirty());
            else if ("uuid" === n.kind)
              T.test(e.data) ||
                (h((i = this._getOrReturnCtx(e, i)), {
                  validation: "uuid",
                  code: s.invalid_string,
                  message: n.message,
                }),
                o.dirty());
            else if ("nanoid" === n.kind)
              R.test(e.data) ||
                (h((i = this._getOrReturnCtx(e, i)), {
                  validation: "nanoid",
                  code: s.invalid_string,
                  message: n.message,
                }),
                o.dirty());
            else if ("cuid" === n.kind)
              A.test(e.data) ||
                (h((i = this._getOrReturnCtx(e, i)), {
                  validation: "cuid",
                  code: s.invalid_string,
                  message: n.message,
                }),
                o.dirty());
            else if ("cuid2" === n.kind)
              P.test(e.data) ||
                (h((i = this._getOrReturnCtx(e, i)), {
                  validation: "cuid2",
                  code: s.invalid_string,
                  message: n.message,
                }),
                o.dirty());
            else if ("ulid" === n.kind)
              I.test(e.data) ||
                (h((i = this._getOrReturnCtx(e, i)), {
                  validation: "ulid",
                  code: s.invalid_string,
                  message: n.message,
                }),
                o.dirty());
            else if ("url" === n.kind)
              try {
                new URL(e.data);
              } catch (t) {
                h((i = this._getOrReturnCtx(e, i)), {
                  validation: "url",
                  code: s.invalid_string,
                  message: n.message,
                }),
                  o.dirty();
              }
            else
              "regex" === n.kind
                ? ((n.regex.lastIndex = 0),
                  n.regex.test(e.data) ||
                    (h((i = this._getOrReturnCtx(e, i)), {
                      validation: "regex",
                      code: s.invalid_string,
                      message: n.message,
                    }),
                    o.dirty()))
                : "trim" === n.kind
                ? (e.data = e.data.trim())
                : "includes" === n.kind
                ? e.data.includes(n.value, n.position) ||
                  (h((i = this._getOrReturnCtx(e, i)), {
                    code: s.invalid_string,
                    validation: { includes: n.value, position: n.position },
                    message: n.message,
                  }),
                  o.dirty())
                : "toLowerCase" === n.kind
                ? (e.data = e.data.toLowerCase())
                : "toUpperCase" === n.kind
                ? (e.data = e.data.toUpperCase())
                : "startsWith" === n.kind
                ? e.data.startsWith(n.value) ||
                  (h((i = this._getOrReturnCtx(e, i)), {
                    code: s.invalid_string,
                    validation: { startsWith: n.value },
                    message: n.message,
                  }),
                  o.dirty())
                : "endsWith" === n.kind
                ? e.data.endsWith(n.value) ||
                  (h((i = this._getOrReturnCtx(e, i)), {
                    code: s.invalid_string,
                    validation: { endsWith: n.value },
                    message: n.message,
                  }),
                  o.dirty())
                : "datetime" === n.kind
                ? F(n).test(e.data) ||
                  (h((i = this._getOrReturnCtx(e, i)), {
                    code: s.invalid_string,
                    validation: "datetime",
                    message: n.message,
                  }),
                  o.dirty())
                : "date" === n.kind
                ? U.test(e.data) ||
                  (h((i = this._getOrReturnCtx(e, i)), {
                    code: s.invalid_string,
                    validation: "date",
                    message: n.message,
                  }),
                  o.dirty())
                : "time" === n.kind
                ? RegExp(`^${D(n)}$`).test(e.data) ||
                  (h((i = this._getOrReturnCtx(e, i)), {
                    code: s.invalid_string,
                    validation: "time",
                    message: n.message,
                  }),
                  o.dirty())
                : "duration" === n.kind
                ? $.test(e.data) ||
                  (h((i = this._getOrReturnCtx(e, i)), {
                    validation: "duration",
                    code: s.invalid_string,
                    message: n.message,
                  }),
                  o.dirty())
                : "ip" === n.kind
                ? ((t = e.data),
                  (("v4" === (r = n.version) || !r) && C.test(t)) ||
                    (("v6" === r || !r) && N.test(t)) ||
                    (h((i = this._getOrReturnCtx(e, i)), {
                      validation: "ip",
                      code: s.invalid_string,
                      message: n.message,
                    }),
                    o.dirty()))
                : "base64" === n.kind
                ? L.test(e.data) ||
                  (h((i = this._getOrReturnCtx(e, i)), {
                    validation: "base64",
                    code: s.invalid_string,
                    message: n.message,
                  }),
                  o.dirty())
                : tt.assertNever(n);
          return { status: o.value, value: e.data };
        }
        _regex(e, t, r) {
          return this.refinement((t) => e.test(t), {
            validation: t,
            code: s.invalid_string,
            ...ta.errToObj(r),
          });
        }
        _addCheck(e) {
          return new Z({ ...this._def, checks: [...this._def.checks, e] });
        }
        email(e) {
          return this._addCheck({ kind: "email", ...ta.errToObj(e) });
        }
        url(e) {
          return this._addCheck({ kind: "url", ...ta.errToObj(e) });
        }
        emoji(e) {
          return this._addCheck({ kind: "emoji", ...ta.errToObj(e) });
        }
        uuid(e) {
          return this._addCheck({ kind: "uuid", ...ta.errToObj(e) });
        }
        nanoid(e) {
          return this._addCheck({ kind: "nanoid", ...ta.errToObj(e) });
        }
        cuid(e) {
          return this._addCheck({ kind: "cuid", ...ta.errToObj(e) });
        }
        cuid2(e) {
          return this._addCheck({ kind: "cuid2", ...ta.errToObj(e) });
        }
        ulid(e) {
          return this._addCheck({ kind: "ulid", ...ta.errToObj(e) });
        }
        base64(e) {
          return this._addCheck({ kind: "base64", ...ta.errToObj(e) });
        }
        ip(e) {
          return this._addCheck({ kind: "ip", ...ta.errToObj(e) });
        }
        datetime(e) {
          var t, r;
          return "string" == typeof e
            ? this._addCheck({
                kind: "datetime",
                precision: null,
                offset: !1,
                local: !1,
                message: e,
              })
            : this._addCheck({
                kind: "datetime",
                precision:
                  void 0 === (null == e ? void 0 : e.precision)
                    ? null
                    : null == e
                    ? void 0
                    : e.precision,
                offset:
                  null !== (t = null == e ? void 0 : e.offset) &&
                  void 0 !== t &&
                  t,
                local:
                  null !== (r = null == e ? void 0 : e.local) &&
                  void 0 !== r &&
                  r,
                ...ta.errToObj(null == e ? void 0 : e.message),
              });
        }
        date(e) {
          return this._addCheck({ kind: "date", message: e });
        }
        time(e) {
          return "string" == typeof e
            ? this._addCheck({ kind: "time", precision: null, message: e })
            : this._addCheck({
                kind: "time",
                precision:
                  void 0 === (null == e ? void 0 : e.precision)
                    ? null
                    : null == e
                    ? void 0
                    : e.precision,
                ...ta.errToObj(null == e ? void 0 : e.message),
              });
        }
        duration(e) {
          return this._addCheck({ kind: "duration", ...ta.errToObj(e) });
        }
        regex(e, t) {
          return this._addCheck({ kind: "regex", regex: e, ...ta.errToObj(t) });
        }
        includes(e, t) {
          return this._addCheck({
            kind: "includes",
            value: e,
            position: null == t ? void 0 : t.position,
            ...ta.errToObj(null == t ? void 0 : t.message),
          });
        }
        startsWith(e, t) {
          return this._addCheck({
            kind: "startsWith",
            value: e,
            ...ta.errToObj(t),
          });
        }
        endsWith(e, t) {
          return this._addCheck({
            kind: "endsWith",
            value: e,
            ...ta.errToObj(t),
          });
        }
        min(e, t) {
          return this._addCheck({ kind: "min", value: e, ...ta.errToObj(t) });
        }
        max(e, t) {
          return this._addCheck({ kind: "max", value: e, ...ta.errToObj(t) });
        }
        length(e, t) {
          return this._addCheck({
            kind: "length",
            value: e,
            ...ta.errToObj(t),
          });
        }
        nonempty(e) {
          return this.min(1, ta.errToObj(e));
        }
        trim() {
          return new Z({
            ...this._def,
            checks: [...this._def.checks, { kind: "trim" }],
          });
        }
        toLowerCase() {
          return new Z({
            ...this._def,
            checks: [...this._def.checks, { kind: "toLowerCase" }],
          });
        }
        toUpperCase() {
          return new Z({
            ...this._def,
            checks: [...this._def.checks, { kind: "toUpperCase" }],
          });
        }
        get isDatetime() {
          return !!this._def.checks.find((e) => "datetime" === e.kind);
        }
        get isDate() {
          return !!this._def.checks.find((e) => "date" === e.kind);
        }
        get isTime() {
          return !!this._def.checks.find((e) => "time" === e.kind);
        }
        get isDuration() {
          return !!this._def.checks.find((e) => "duration" === e.kind);
        }
        get isEmail() {
          return !!this._def.checks.find((e) => "email" === e.kind);
        }
        get isURL() {
          return !!this._def.checks.find((e) => "url" === e.kind);
        }
        get isEmoji() {
          return !!this._def.checks.find((e) => "emoji" === e.kind);
        }
        get isUUID() {
          return !!this._def.checks.find((e) => "uuid" === e.kind);
        }
        get isNANOID() {
          return !!this._def.checks.find((e) => "nanoid" === e.kind);
        }
        get isCUID() {
          return !!this._def.checks.find((e) => "cuid" === e.kind);
        }
        get isCUID2() {
          return !!this._def.checks.find((e) => "cuid2" === e.kind);
        }
        get isULID() {
          return !!this._def.checks.find((e) => "ulid" === e.kind);
        }
        get isIP() {
          return !!this._def.checks.find((e) => "ip" === e.kind);
        }
        get isBase64() {
          return !!this._def.checks.find((e) => "base64" === e.kind);
        }
        get minLength() {
          let e = null;
          for (let t of this._def.checks)
            "min" === t.kind && (null === e || t.value > e) && (e = t.value);
          return e;
        }
        get maxLength() {
          let e = null;
          for (let t of this._def.checks)
            "max" === t.kind && (null === e || t.value < e) && (e = t.value);
          return e;
        }
      }
      Z.create = (e) => {
        var t;
        return new Z({
          checks: [],
          typeName: ts.ZodString,
          coerce:
            null !== (t = null == e ? void 0 : e.coerce) && void 0 !== t && t,
          ...k(e),
        });
      };
      class B extends S {
        constructor() {
          super(...arguments),
            (this.min = this.gte),
            (this.max = this.lte),
            (this.step = this.multipleOf);
        }
        _parse(e) {
          let t;
          if (
            (this._def.coerce && (e.data = Number(e.data)),
            this._getType(e) !== n.number)
          ) {
            let t = this._getOrReturnCtx(e);
            return (
              h(t, {
                code: s.invalid_type,
                expected: n.number,
                received: t.parsedType,
              }),
              f
            );
          }
          let r = new p();
          for (let a of this._def.checks)
            "int" === a.kind
              ? tt.isInteger(e.data) ||
                (h((t = this._getOrReturnCtx(e, t)), {
                  code: s.invalid_type,
                  expected: "integer",
                  received: "float",
                  message: a.message,
                }),
                r.dirty())
              : "min" === a.kind
              ? (a.inclusive ? e.data < a.value : e.data <= a.value) &&
                (h((t = this._getOrReturnCtx(e, t)), {
                  code: s.too_small,
                  minimum: a.value,
                  type: "number",
                  inclusive: a.inclusive,
                  exact: !1,
                  message: a.message,
                }),
                r.dirty())
              : "max" === a.kind
              ? (a.inclusive ? e.data > a.value : e.data >= a.value) &&
                (h((t = this._getOrReturnCtx(e, t)), {
                  code: s.too_big,
                  maximum: a.value,
                  type: "number",
                  inclusive: a.inclusive,
                  exact: !1,
                  message: a.message,
                }),
                r.dirty())
              : "multipleOf" === a.kind
              ? 0 !==
                  (function (e, t) {
                    let r = (e.toString().split(".")[1] || "").length,
                      a = (t.toString().split(".")[1] || "").length,
                      n = r > a ? r : a;
                    return (
                      (parseInt(e.toFixed(n).replace(".", "")) %
                        parseInt(t.toFixed(n).replace(".", ""))) /
                      Math.pow(10, n)
                    );
                  })(e.data, a.value) &&
                (h((t = this._getOrReturnCtx(e, t)), {
                  code: s.not_multiple_of,
                  multipleOf: a.value,
                  message: a.message,
                }),
                r.dirty())
              : "finite" === a.kind
              ? Number.isFinite(e.data) ||
                (h((t = this._getOrReturnCtx(e, t)), {
                  code: s.not_finite,
                  message: a.message,
                }),
                r.dirty())
              : tt.assertNever(a);
          return { status: r.value, value: e.data };
        }
        gte(e, t) {
          return this.setLimit("min", e, !0, ta.toString(t));
        }
        gt(e, t) {
          return this.setLimit("min", e, !1, ta.toString(t));
        }
        lte(e, t) {
          return this.setLimit("max", e, !0, ta.toString(t));
        }
        lt(e, t) {
          return this.setLimit("max", e, !1, ta.toString(t));
        }
        setLimit(e, t, r, a) {
          return new B({
            ...this._def,
            checks: [
              ...this._def.checks,
              { kind: e, value: t, inclusive: r, message: ta.toString(a) },
            ],
          });
        }
        _addCheck(e) {
          return new B({ ...this._def, checks: [...this._def.checks, e] });
        }
        int(e) {
          return this._addCheck({ kind: "int", message: ta.toString(e) });
        }
        positive(e) {
          return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !1,
            message: ta.toString(e),
          });
        }
        negative(e) {
          return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !1,
            message: ta.toString(e),
          });
        }
        nonpositive(e) {
          return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !0,
            message: ta.toString(e),
          });
        }
        nonnegative(e) {
          return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !0,
            message: ta.toString(e),
          });
        }
        multipleOf(e, t) {
          return this._addCheck({
            kind: "multipleOf",
            value: e,
            message: ta.toString(t),
          });
        }
        finite(e) {
          return this._addCheck({ kind: "finite", message: ta.toString(e) });
        }
        safe(e) {
          return this._addCheck({
            kind: "min",
            inclusive: !0,
            value: Number.MIN_SAFE_INTEGER,
            message: ta.toString(e),
          })._addCheck({
            kind: "max",
            inclusive: !0,
            value: Number.MAX_SAFE_INTEGER,
            message: ta.toString(e),
          });
        }
        get minValue() {
          let e = null;
          for (let t of this._def.checks)
            "min" === t.kind && (null === e || t.value > e) && (e = t.value);
          return e;
        }
        get maxValue() {
          let e = null;
          for (let t of this._def.checks)
            "max" === t.kind && (null === e || t.value < e) && (e = t.value);
          return e;
        }
        get isInt() {
          return !!this._def.checks.find(
            (e) =>
              "int" === e.kind ||
              ("multipleOf" === e.kind && tt.isInteger(e.value))
          );
        }
        get isFinite() {
          let e = null,
            t = null;
          for (let r of this._def.checks) {
            if (
              "finite" === r.kind ||
              "int" === r.kind ||
              "multipleOf" === r.kind
            )
              return !0;
            "min" === r.kind
              ? (null === t || r.value > t) && (t = r.value)
              : "max" === r.kind &&
                (null === e || r.value < e) &&
                (e = r.value);
          }
          return Number.isFinite(t) && Number.isFinite(e);
        }
      }
      B.create = (e) =>
        new B({
          checks: [],
          typeName: ts.ZodNumber,
          coerce: (null == e ? void 0 : e.coerce) || !1,
          ...k(e),
        });
      class q extends S {
        constructor() {
          super(...arguments), (this.min = this.gte), (this.max = this.lte);
        }
        _parse(e) {
          let t;
          if (
            (this._def.coerce && (e.data = BigInt(e.data)),
            this._getType(e) !== n.bigint)
          ) {
            let t = this._getOrReturnCtx(e);
            return (
              h(t, {
                code: s.invalid_type,
                expected: n.bigint,
                received: t.parsedType,
              }),
              f
            );
          }
          let r = new p();
          for (let a of this._def.checks)
            "min" === a.kind
              ? (a.inclusive ? e.data < a.value : e.data <= a.value) &&
                (h((t = this._getOrReturnCtx(e, t)), {
                  code: s.too_small,
                  type: "bigint",
                  minimum: a.value,
                  inclusive: a.inclusive,
                  message: a.message,
                }),
                r.dirty())
              : "max" === a.kind
              ? (a.inclusive ? e.data > a.value : e.data >= a.value) &&
                (h((t = this._getOrReturnCtx(e, t)), {
                  code: s.too_big,
                  type: "bigint",
                  maximum: a.value,
                  inclusive: a.inclusive,
                  message: a.message,
                }),
                r.dirty())
              : "multipleOf" === a.kind
              ? e.data % a.value !== BigInt(0) &&
                (h((t = this._getOrReturnCtx(e, t)), {
                  code: s.not_multiple_of,
                  multipleOf: a.value,
                  message: a.message,
                }),
                r.dirty())
              : tt.assertNever(a);
          return { status: r.value, value: e.data };
        }
        gte(e, t) {
          return this.setLimit("min", e, !0, ta.toString(t));
        }
        gt(e, t) {
          return this.setLimit("min", e, !1, ta.toString(t));
        }
        lte(e, t) {
          return this.setLimit("max", e, !0, ta.toString(t));
        }
        lt(e, t) {
          return this.setLimit("max", e, !1, ta.toString(t));
        }
        setLimit(e, t, r, a) {
          return new q({
            ...this._def,
            checks: [
              ...this._def.checks,
              { kind: e, value: t, inclusive: r, message: ta.toString(a) },
            ],
          });
        }
        _addCheck(e) {
          return new q({ ...this._def, checks: [...this._def.checks, e] });
        }
        positive(e) {
          return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !1,
            message: ta.toString(e),
          });
        }
        negative(e) {
          return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !1,
            message: ta.toString(e),
          });
        }
        nonpositive(e) {
          return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !0,
            message: ta.toString(e),
          });
        }
        nonnegative(e) {
          return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !0,
            message: ta.toString(e),
          });
        }
        multipleOf(e, t) {
          return this._addCheck({
            kind: "multipleOf",
            value: e,
            message: ta.toString(t),
          });
        }
        get minValue() {
          let e = null;
          for (let t of this._def.checks)
            "min" === t.kind && (null === e || t.value > e) && (e = t.value);
          return e;
        }
        get maxValue() {
          let e = null;
          for (let t of this._def.checks)
            "max" === t.kind && (null === e || t.value < e) && (e = t.value);
          return e;
        }
      }
      q.create = (e) => {
        var t;
        return new q({
          checks: [],
          typeName: ts.ZodBigInt,
          coerce:
            null !== (t = null == e ? void 0 : e.coerce) && void 0 !== t && t,
          ...k(e),
        });
      };
      class H extends S {
        _parse(e) {
          if (
            (this._def.coerce && (e.data = !!e.data),
            this._getType(e) !== n.boolean)
          ) {
            let t = this._getOrReturnCtx(e);
            return (
              h(t, {
                code: s.invalid_type,
                expected: n.boolean,
                received: t.parsedType,
              }),
              f
            );
          }
          return g(e.data);
        }
      }
      H.create = (e) =>
        new H({
          typeName: ts.ZodBoolean,
          coerce: (null == e ? void 0 : e.coerce) || !1,
          ...k(e),
        });
      class z extends S {
        _parse(e) {
          let t;
          if (
            (this._def.coerce && (e.data = new Date(e.data)),
            this._getType(e) !== n.date)
          ) {
            let t = this._getOrReturnCtx(e);
            return (
              h(t, {
                code: s.invalid_type,
                expected: n.date,
                received: t.parsedType,
              }),
              f
            );
          }
          if (isNaN(e.data.getTime()))
            return h(this._getOrReturnCtx(e), { code: s.invalid_date }), f;
          let r = new p();
          for (let a of this._def.checks)
            "min" === a.kind
              ? e.data.getTime() < a.value &&
                (h((t = this._getOrReturnCtx(e, t)), {
                  code: s.too_small,
                  message: a.message,
                  inclusive: !0,
                  exact: !1,
                  minimum: a.value,
                  type: "date",
                }),
                r.dirty())
              : "max" === a.kind
              ? e.data.getTime() > a.value &&
                (h((t = this._getOrReturnCtx(e, t)), {
                  code: s.too_big,
                  message: a.message,
                  inclusive: !0,
                  exact: !1,
                  maximum: a.value,
                  type: "date",
                }),
                r.dirty())
              : tt.assertNever(a);
          return { status: r.value, value: new Date(e.data.getTime()) };
        }
        _addCheck(e) {
          return new z({ ...this._def, checks: [...this._def.checks, e] });
        }
        min(e, t) {
          return this._addCheck({
            kind: "min",
            value: e.getTime(),
            message: ta.toString(t),
          });
        }
        max(e, t) {
          return this._addCheck({
            kind: "max",
            value: e.getTime(),
            message: ta.toString(t),
          });
        }
        get minDate() {
          let e = null;
          for (let t of this._def.checks)
            "min" === t.kind && (null === e || t.value > e) && (e = t.value);
          return null != e ? new Date(e) : null;
        }
        get maxDate() {
          let e = null;
          for (let t of this._def.checks)
            "max" === t.kind && (null === e || t.value < e) && (e = t.value);
          return null != e ? new Date(e) : null;
        }
      }
      z.create = (e) =>
        new z({
          checks: [],
          coerce: (null == e ? void 0 : e.coerce) || !1,
          typeName: ts.ZodDate,
          ...k(e),
        });
      class W extends S {
        _parse(e) {
          if (this._getType(e) !== n.symbol) {
            let t = this._getOrReturnCtx(e);
            return (
              h(t, {
                code: s.invalid_type,
                expected: n.symbol,
                received: t.parsedType,
              }),
              f
            );
          }
          return g(e.data);
        }
      }
      W.create = (e) => new W({ typeName: ts.ZodSymbol, ...k(e) });
      class J extends S {
        _parse(e) {
          if (this._getType(e) !== n.undefined) {
            let t = this._getOrReturnCtx(e);
            return (
              h(t, {
                code: s.invalid_type,
                expected: n.undefined,
                received: t.parsedType,
              }),
              f
            );
          }
          return g(e.data);
        }
      }
      J.create = (e) => new J({ typeName: ts.ZodUndefined, ...k(e) });
      class V extends S {
        _parse(e) {
          if (this._getType(e) !== n.null) {
            let t = this._getOrReturnCtx(e);
            return (
              h(t, {
                code: s.invalid_type,
                expected: n.null,
                received: t.parsedType,
              }),
              f
            );
          }
          return g(e.data);
        }
      }
      V.create = (e) => new V({ typeName: ts.ZodNull, ...k(e) });
      class G extends S {
        constructor() {
          super(...arguments), (this._any = !0);
        }
        _parse(e) {
          return g(e.data);
        }
      }
      G.create = (e) => new G({ typeName: ts.ZodAny, ...k(e) });
      class X extends S {
        constructor() {
          super(...arguments), (this._unknown = !0);
        }
        _parse(e) {
          return g(e.data);
        }
      }
      X.create = (e) => new X({ typeName: ts.ZodUnknown, ...k(e) });
      class K extends S {
        _parse(e) {
          let t = this._getOrReturnCtx(e);
          return (
            h(t, {
              code: s.invalid_type,
              expected: n.never,
              received: t.parsedType,
            }),
            f
          );
        }
      }
      K.create = (e) => new K({ typeName: ts.ZodNever, ...k(e) });
      class Q extends S {
        _parse(e) {
          if (this._getType(e) !== n.undefined) {
            let t = this._getOrReturnCtx(e);
            return (
              h(t, {
                code: s.invalid_type,
                expected: n.void,
                received: t.parsedType,
              }),
              f
            );
          }
          return g(e.data);
        }
      }
      Q.create = (e) => new Q({ typeName: ts.ZodVoid, ...k(e) });
      class Y extends S {
        _parse(e) {
          let { ctx: t, status: r } = this._processInputParams(e),
            a = this._def;
          if (t.parsedType !== n.array)
            return (
              h(t, {
                code: s.invalid_type,
                expected: n.array,
                received: t.parsedType,
              }),
              f
            );
          if (null !== a.exactLength) {
            let e = t.data.length > a.exactLength.value,
              n = t.data.length < a.exactLength.value;
            (e || n) &&
              (h(t, {
                code: e ? s.too_big : s.too_small,
                minimum: n ? a.exactLength.value : void 0,
                maximum: e ? a.exactLength.value : void 0,
                type: "array",
                inclusive: !0,
                exact: !0,
                message: a.exactLength.message,
              }),
              r.dirty());
          }
          if (
            (null !== a.minLength &&
              t.data.length < a.minLength.value &&
              (h(t, {
                code: s.too_small,
                minimum: a.minLength.value,
                type: "array",
                inclusive: !0,
                exact: !1,
                message: a.minLength.message,
              }),
              r.dirty()),
            null !== a.maxLength &&
              t.data.length > a.maxLength.value &&
              (h(t, {
                code: s.too_big,
                maximum: a.maxLength.value,
                type: "array",
                inclusive: !0,
                exact: !1,
                message: a.maxLength.message,
              }),
              r.dirty()),
            t.common.async)
          )
            return Promise.all(
              [...t.data].map((e, r) =>
                a.type._parseAsync(new x(t, e, t.path, r))
              )
            ).then((e) => p.mergeArray(r, e));
          let i = [...t.data].map((e, r) =>
            a.type._parseSync(new x(t, e, t.path, r))
          );
          return p.mergeArray(r, i);
        }
        get element() {
          return this._def.type;
        }
        min(e, t) {
          return new Y({
            ...this._def,
            minLength: { value: e, message: ta.toString(t) },
          });
        }
        max(e, t) {
          return new Y({
            ...this._def,
            maxLength: { value: e, message: ta.toString(t) },
          });
        }
        length(e, t) {
          return new Y({
            ...this._def,
            exactLength: { value: e, message: ta.toString(t) },
          });
        }
        nonempty(e) {
          return this.min(1, e);
        }
      }
      Y.create = (e, t) =>
        new Y({
          type: e,
          minLength: null,
          maxLength: null,
          exactLength: null,
          typeName: ts.ZodArray,
          ...k(t),
        });
      class ee extends S {
        constructor() {
          super(...arguments),
            (this._cached = null),
            (this.nonstrict = this.passthrough),
            (this.augment = this.extend);
        }
        _getCached() {
          if (null !== this._cached) return this._cached;
          let e = this._def.shape(),
            t = tt.objectKeys(e);
          return (this._cached = { shape: e, keys: t });
        }
        _parse(e) {
          if (this._getType(e) !== n.object) {
            let t = this._getOrReturnCtx(e);
            return (
              h(t, {
                code: s.invalid_type,
                expected: n.object,
                received: t.parsedType,
              }),
              f
            );
          }
          let { status: t, ctx: r } = this._processInputParams(e),
            { shape: a, keys: i } = this._getCached(),
            o = [];
          if (
            !(
              this._def.catchall instanceof K &&
              "strip" === this._def.unknownKeys
            )
          )
            for (let e in r.data) i.includes(e) || o.push(e);
          let l = [];
          for (let e of i) {
            let t = a[e],
              n = r.data[e];
            l.push({
              key: { status: "valid", value: e },
              value: t._parse(new x(r, n, r.path, e)),
              alwaysSet: e in r.data,
            });
          }
          if (this._def.catchall instanceof K) {
            let e = this._def.unknownKeys;
            if ("passthrough" === e)
              for (let e of o)
                l.push({
                  key: { status: "valid", value: e },
                  value: { status: "valid", value: r.data[e] },
                });
            else if ("strict" === e)
              o.length > 0 &&
                (h(r, { code: s.unrecognized_keys, keys: o }), t.dirty());
            else if ("strip" === e);
            else
              throw Error(
                "Internal ZodObject error: invalid unknownKeys value."
              );
          } else {
            let e = this._def.catchall;
            for (let t of o) {
              let a = r.data[t];
              l.push({
                key: { status: "valid", value: t },
                value: e._parse(new x(r, a, r.path, t)),
                alwaysSet: t in r.data,
              });
            }
          }
          return r.common.async
            ? Promise.resolve()
                .then(async () => {
                  let e = [];
                  for (let t of l) {
                    let r = await t.key,
                      a = await t.value;
                    e.push({ key: r, value: a, alwaysSet: t.alwaysSet });
                  }
                  return e;
                })
                .then((e) => p.mergeObjectSync(t, e))
            : p.mergeObjectSync(t, l);
        }
        get shape() {
          return this._def.shape();
        }
        strict(e) {
          return (
            ta.errToObj,
            new ee({
              ...this._def,
              unknownKeys: "strict",
              ...(void 0 !== e
                ? {
                    errorMap: (t, r) => {
                      var a, n, i, s;
                      let o =
                        null !==
                          (i =
                            null === (n = (a = this._def).errorMap) ||
                            void 0 === n
                              ? void 0
                              : n.call(a, t, r).message) && void 0 !== i
                          ? i
                          : r.defaultError;
                      return "unrecognized_keys" === t.code
                        ? {
                            message:
                              null !== (s = ta.errToObj(e).message) &&
                              void 0 !== s
                                ? s
                                : o,
                          }
                        : { message: o };
                    },
                  }
                : {}),
            })
          );
        }
        strip() {
          return new ee({ ...this._def, unknownKeys: "strip" });
        }
        passthrough() {
          return new ee({ ...this._def, unknownKeys: "passthrough" });
        }
        extend(e) {
          return new ee({
            ...this._def,
            shape: () => ({ ...this._def.shape(), ...e }),
          });
        }
        merge(e) {
          return new ee({
            unknownKeys: e._def.unknownKeys,
            catchall: e._def.catchall,
            shape: () => ({ ...this._def.shape(), ...e._def.shape() }),
            typeName: ts.ZodObject,
          });
        }
        setKey(e, t) {
          return this.augment({ [e]: t });
        }
        catchall(e) {
          return new ee({ ...this._def, catchall: e });
        }
        pick(e) {
          let t = {};
          return (
            tt.objectKeys(e).forEach((r) => {
              e[r] && this.shape[r] && (t[r] = this.shape[r]);
            }),
            new ee({ ...this._def, shape: () => t })
          );
        }
        omit(e) {
          let t = {};
          return (
            tt.objectKeys(this.shape).forEach((r) => {
              e[r] || (t[r] = this.shape[r]);
            }),
            new ee({ ...this._def, shape: () => t })
          );
        }
        deepPartial() {
          return (function e(t) {
            if (t instanceof ee) {
              let r = {};
              for (let a in t.shape) {
                let n = t.shape[a];
                r[a] = ey.create(e(n));
              }
              return new ee({ ...t._def, shape: () => r });
            }
            return t instanceof Y
              ? new Y({ ...t._def, type: e(t.element) })
              : t instanceof ey
              ? ey.create(e(t.unwrap()))
              : t instanceof eb
              ? eb.create(e(t.unwrap()))
              : t instanceof ei
              ? ei.create(t.items.map((t) => e(t)))
              : t;
          })(this);
        }
        partial(e) {
          let t = {};
          return (
            tt.objectKeys(this.shape).forEach((r) => {
              let a = this.shape[r];
              e && !e[r] ? (t[r] = a) : (t[r] = a.optional());
            }),
            new ee({ ...this._def, shape: () => t })
          );
        }
        required(e) {
          let t = {};
          return (
            tt.objectKeys(this.shape).forEach((r) => {
              if (e && !e[r]) t[r] = this.shape[r];
              else {
                let e = this.shape[r];
                for (; e instanceof ey; ) e = e._def.innerType;
                t[r] = e;
              }
            }),
            new ee({ ...this._def, shape: () => t })
          );
        }
        keyof() {
          return eh(tt.objectKeys(this.shape));
        }
      }
      (ee.create = (e, t) =>
        new ee({
          shape: () => e,
          unknownKeys: "strip",
          catchall: K.create(),
          typeName: ts.ZodObject,
          ...k(t),
        })),
        (ee.strictCreate = (e, t) =>
          new ee({
            shape: () => e,
            unknownKeys: "strict",
            catchall: K.create(),
            typeName: ts.ZodObject,
            ...k(t),
          })),
        (ee.lazycreate = (e, t) =>
          new ee({
            shape: e,
            unknownKeys: "strip",
            catchall: K.create(),
            typeName: ts.ZodObject,
            ...k(t),
          }));
      class et extends S {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            r = this._def.options;
          if (t.common.async)
            return Promise.all(
              r.map(async (e) => {
                let r = {
                  ...t,
                  common: { ...t.common, issues: [] },
                  parent: null,
                };
                return {
                  result: await e._parseAsync({
                    data: t.data,
                    path: t.path,
                    parent: r,
                  }),
                  ctx: r,
                };
              })
            ).then(function (e) {
              for (let t of e) if ("valid" === t.result.status) return t.result;
              for (let r of e)
                if ("dirty" === r.result.status)
                  return t.common.issues.push(...r.ctx.common.issues), r.result;
              let r = e.map((e) => new o(e.ctx.common.issues));
              return h(t, { code: s.invalid_union, unionErrors: r }), f;
            });
          {
            let e;
            let a = [];
            for (let n of r) {
              let r = {
                  ...t,
                  common: { ...t.common, issues: [] },
                  parent: null,
                },
                i = n._parseSync({ data: t.data, path: t.path, parent: r });
              if ("valid" === i.status) return i;
              "dirty" !== i.status || e || (e = { result: i, ctx: r }),
                r.common.issues.length && a.push(r.common.issues);
            }
            if (e)
              return t.common.issues.push(...e.ctx.common.issues), e.result;
            let n = a.map((e) => new o(e));
            return h(t, { code: s.invalid_union, unionErrors: n }), f;
          }
        }
        get options() {
          return this._def.options;
        }
      }
      et.create = (e, t) =>
        new et({ options: e, typeName: ts.ZodUnion, ...k(t) });
      let er = (e) => {
        if (e instanceof ec) return er(e.schema);
        if (e instanceof eg) return er(e.innerType());
        if (e instanceof ed) return [e.value];
        if (e instanceof ep) return e.options;
        if (e instanceof ef) return tt.objectValues(e.enum);
        if (e instanceof e_) return er(e._def.innerType);
        if (e instanceof J) return [void 0];
        else if (e instanceof V) return [null];
        else if (e instanceof ey) return [void 0, ...er(e.unwrap())];
        else if (e instanceof eb) return [null, ...er(e.unwrap())];
        else if (e instanceof ex) return er(e.unwrap());
        else if (e instanceof ek) return er(e.unwrap());
        else if (e instanceof ev) return er(e._def.innerType);
        else return [];
      };
      class ea extends S {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          if (t.parsedType !== n.object)
            return (
              h(t, {
                code: s.invalid_type,
                expected: n.object,
                received: t.parsedType,
              }),
              f
            );
          let r = this.discriminator,
            a = t.data[r],
            i = this.optionsMap.get(a);
          return i
            ? t.common.async
              ? i._parseAsync({ data: t.data, path: t.path, parent: t })
              : i._parseSync({ data: t.data, path: t.path, parent: t })
            : (h(t, {
                code: s.invalid_union_discriminator,
                options: Array.from(this.optionsMap.keys()),
                path: [r],
              }),
              f);
        }
        get discriminator() {
          return this._def.discriminator;
        }
        get options() {
          return this._def.options;
        }
        get optionsMap() {
          return this._def.optionsMap;
        }
        static create(e, t, r) {
          let a = new Map();
          for (let r of t) {
            let t = er(r.shape[e]);
            if (!t.length)
              throw Error(
                `A discriminator value for key \`${e}\` could not be extracted from all schema options`
              );
            for (let n of t) {
              if (a.has(n))
                throw Error(
                  `Discriminator property ${String(
                    e
                  )} has duplicate value ${String(n)}`
                );
              a.set(n, r);
            }
          }
          return new ea({
            typeName: ts.ZodDiscriminatedUnion,
            discriminator: e,
            options: t,
            optionsMap: a,
            ...k(r),
          });
        }
      }
      class en extends S {
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e),
            a = (e, a) => {
              if (y(e) || y(a)) return f;
              let o = (function e(t, r) {
                let a = i(t),
                  s = i(r);
                if (t === r) return { valid: !0, data: t };
                if (a === n.object && s === n.object) {
                  let a = tt.objectKeys(r),
                    n = tt.objectKeys(t).filter((e) => -1 !== a.indexOf(e)),
                    i = { ...t, ...r };
                  for (let a of n) {
                    let n = e(t[a], r[a]);
                    if (!n.valid) return { valid: !1 };
                    i[a] = n.data;
                  }
                  return { valid: !0, data: i };
                }
                if (a === n.array && s === n.array) {
                  if (t.length !== r.length) return { valid: !1 };
                  let a = [];
                  for (let n = 0; n < t.length; n++) {
                    let i = e(t[n], r[n]);
                    if (!i.valid) return { valid: !1 };
                    a.push(i.data);
                  }
                  return { valid: !0, data: a };
                }
                return a === n.date && s === n.date && +t == +r
                  ? { valid: !0, data: t }
                  : { valid: !1 };
              })(e.value, a.value);
              return o.valid
                ? ((b(e) || b(a)) && t.dirty(),
                  { status: t.value, value: o.data })
                : (h(r, { code: s.invalid_intersection_types }), f);
            };
          return r.common.async
            ? Promise.all([
                this._def.left._parseAsync({
                  data: r.data,
                  path: r.path,
                  parent: r,
                }),
                this._def.right._parseAsync({
                  data: r.data,
                  path: r.path,
                  parent: r,
                }),
              ]).then(([e, t]) => a(e, t))
            : a(
                this._def.left._parseSync({
                  data: r.data,
                  path: r.path,
                  parent: r,
                }),
                this._def.right._parseSync({
                  data: r.data,
                  path: r.path,
                  parent: r,
                })
              );
        }
      }
      en.create = (e, t, r) =>
        new en({ left: e, right: t, typeName: ts.ZodIntersection, ...k(r) });
      class ei extends S {
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e);
          if (r.parsedType !== n.array)
            return (
              h(r, {
                code: s.invalid_type,
                expected: n.array,
                received: r.parsedType,
              }),
              f
            );
          if (r.data.length < this._def.items.length)
            return (
              h(r, {
                code: s.too_small,
                minimum: this._def.items.length,
                inclusive: !0,
                exact: !1,
                type: "array",
              }),
              f
            );
          !this._def.rest &&
            r.data.length > this._def.items.length &&
            (h(r, {
              code: s.too_big,
              maximum: this._def.items.length,
              inclusive: !0,
              exact: !1,
              type: "array",
            }),
            t.dirty());
          let a = [...r.data]
            .map((e, t) => {
              let a = this._def.items[t] || this._def.rest;
              return a ? a._parse(new x(r, e, r.path, t)) : null;
            })
            .filter((e) => !!e);
          return r.common.async
            ? Promise.all(a).then((e) => p.mergeArray(t, e))
            : p.mergeArray(t, a);
        }
        get items() {
          return this._def.items;
        }
        rest(e) {
          return new ei({ ...this._def, rest: e });
        }
      }
      ei.create = (e, t) => {
        if (!Array.isArray(e))
          throw Error("You must pass an array of schemas to z.tuple([ ... ])");
        return new ei({ items: e, typeName: ts.ZodTuple, rest: null, ...k(t) });
      };
      class es extends S {
        get keySchema() {
          return this._def.keyType;
        }
        get valueSchema() {
          return this._def.valueType;
        }
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e);
          if (r.parsedType !== n.object)
            return (
              h(r, {
                code: s.invalid_type,
                expected: n.object,
                received: r.parsedType,
              }),
              f
            );
          let a = [],
            i = this._def.keyType,
            o = this._def.valueType;
          for (let e in r.data)
            a.push({
              key: i._parse(new x(r, e, r.path, e)),
              value: o._parse(new x(r, r.data[e], r.path, e)),
              alwaysSet: e in r.data,
            });
          return r.common.async
            ? p.mergeObjectAsync(t, a)
            : p.mergeObjectSync(t, a);
        }
        get element() {
          return this._def.valueType;
        }
        static create(e, t, r) {
          return new es(
            t instanceof S
              ? { keyType: e, valueType: t, typeName: ts.ZodRecord, ...k(r) }
              : {
                  keyType: Z.create(),
                  valueType: e,
                  typeName: ts.ZodRecord,
                  ...k(t),
                }
          );
        }
      }
      class eo extends S {
        get keySchema() {
          return this._def.keyType;
        }
        get valueSchema() {
          return this._def.valueType;
        }
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e);
          if (r.parsedType !== n.map)
            return (
              h(r, {
                code: s.invalid_type,
                expected: n.map,
                received: r.parsedType,
              }),
              f
            );
          let a = this._def.keyType,
            i = this._def.valueType,
            o = [...r.data.entries()].map(([e, t], n) => ({
              key: a._parse(new x(r, e, r.path, [n, "key"])),
              value: i._parse(new x(r, t, r.path, [n, "value"])),
            }));
          if (r.common.async) {
            let e = new Map();
            return Promise.resolve().then(async () => {
              for (let r of o) {
                let a = await r.key,
                  n = await r.value;
                if ("aborted" === a.status || "aborted" === n.status) return f;
                ("dirty" === a.status || "dirty" === n.status) && t.dirty(),
                  e.set(a.value, n.value);
              }
              return { status: t.value, value: e };
            });
          }
          {
            let e = new Map();
            for (let r of o) {
              let a = r.key,
                n = r.value;
              if ("aborted" === a.status || "aborted" === n.status) return f;
              ("dirty" === a.status || "dirty" === n.status) && t.dirty(),
                e.set(a.value, n.value);
            }
            return { status: t.value, value: e };
          }
        }
      }
      eo.create = (e, t, r) =>
        new eo({ valueType: t, keyType: e, typeName: ts.ZodMap, ...k(r) });
      class el extends S {
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e);
          if (r.parsedType !== n.set)
            return (
              h(r, {
                code: s.invalid_type,
                expected: n.set,
                received: r.parsedType,
              }),
              f
            );
          let a = this._def;
          null !== a.minSize &&
            r.data.size < a.minSize.value &&
            (h(r, {
              code: s.too_small,
              minimum: a.minSize.value,
              type: "set",
              inclusive: !0,
              exact: !1,
              message: a.minSize.message,
            }),
            t.dirty()),
            null !== a.maxSize &&
              r.data.size > a.maxSize.value &&
              (h(r, {
                code: s.too_big,
                maximum: a.maxSize.value,
                type: "set",
                inclusive: !0,
                exact: !1,
                message: a.maxSize.message,
              }),
              t.dirty());
          let i = this._def.valueType;
          function o(e) {
            let r = new Set();
            for (let a of e) {
              if ("aborted" === a.status) return f;
              "dirty" === a.status && t.dirty(), r.add(a.value);
            }
            return { status: t.value, value: r };
          }
          let l = [...r.data.values()].map((e, t) =>
            i._parse(new x(r, e, r.path, t))
          );
          return r.common.async ? Promise.all(l).then((e) => o(e)) : o(l);
        }
        min(e, t) {
          return new el({
            ...this._def,
            minSize: { value: e, message: ta.toString(t) },
          });
        }
        max(e, t) {
          return new el({
            ...this._def,
            maxSize: { value: e, message: ta.toString(t) },
          });
        }
        size(e, t) {
          return this.min(e, t).max(e, t);
        }
        nonempty(e) {
          return this.min(1, e);
        }
      }
      el.create = (e, t) =>
        new el({
          valueType: e,
          minSize: null,
          maxSize: null,
          typeName: ts.ZodSet,
          ...k(t),
        });
      class eu extends S {
        constructor() {
          super(...arguments), (this.validate = this.implement);
        }
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          if (t.parsedType !== n.function)
            return (
              h(t, {
                code: s.invalid_type,
                expected: n.function,
                received: t.parsedType,
              }),
              f
            );
          function r(e, r) {
            return d({
              data: e,
              path: t.path,
              errorMaps: [
                t.common.contextualErrorMap,
                t.schemaErrorMap,
                c(),
                l,
              ].filter((e) => !!e),
              issueData: { code: s.invalid_arguments, argumentsError: r },
            });
          }
          function a(e, r) {
            return d({
              data: e,
              path: t.path,
              errorMaps: [
                t.common.contextualErrorMap,
                t.schemaErrorMap,
                c(),
                l,
              ].filter((e) => !!e),
              issueData: { code: s.invalid_return_type, returnTypeError: r },
            });
          }
          let i = { errorMap: t.common.contextualErrorMap },
            u = t.data;
          if (this._def.returns instanceof em) {
            let e = this;
            return g(async function (...t) {
              let n = new o([]),
                s = await e._def.args.parseAsync(t, i).catch((e) => {
                  throw (n.addIssue(r(t, e)), n);
                }),
                l = await Reflect.apply(u, this, s);
              return await e._def.returns._def.type
                .parseAsync(l, i)
                .catch((e) => {
                  throw (n.addIssue(a(l, e)), n);
                });
            });
          }
          {
            let e = this;
            return g(function (...t) {
              let n = e._def.args.safeParse(t, i);
              if (!n.success) throw new o([r(t, n.error)]);
              let s = Reflect.apply(u, this, n.data),
                l = e._def.returns.safeParse(s, i);
              if (!l.success) throw new o([a(s, l.error)]);
              return l.data;
            });
          }
        }
        parameters() {
          return this._def.args;
        }
        returnType() {
          return this._def.returns;
        }
        args(...e) {
          return new eu({ ...this._def, args: ei.create(e).rest(X.create()) });
        }
        returns(e) {
          return new eu({ ...this._def, returns: e });
        }
        implement(e) {
          return this.parse(e);
        }
        strictImplement(e) {
          return this.parse(e);
        }
        static create(e, t, r) {
          return new eu({
            args: e || ei.create([]).rest(X.create()),
            returns: t || X.create(),
            typeName: ts.ZodFunction,
            ...k(r),
          });
        }
      }
      class ec extends S {
        get schema() {
          return this._def.getter();
        }
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          return this._def
            .getter()
            ._parse({ data: t.data, path: t.path, parent: t });
        }
      }
      ec.create = (e, t) =>
        new ec({ getter: e, typeName: ts.ZodLazy, ...k(t) });
      class ed extends S {
        _parse(e) {
          if (e.data !== this._def.value) {
            let t = this._getOrReturnCtx(e);
            return (
              h(t, {
                received: t.data,
                code: s.invalid_literal,
                expected: this._def.value,
              }),
              f
            );
          }
          return { status: "valid", value: e.data };
        }
        get value() {
          return this._def.value;
        }
      }
      function eh(e, t) {
        return new ep({ values: e, typeName: ts.ZodEnum, ...k(t) });
      }
      ed.create = (e, t) =>
        new ed({ value: e, typeName: ts.ZodLiteral, ...k(t) });
      class ep extends S {
        constructor() {
          super(...arguments), tn.set(this, void 0);
        }
        _parse(e) {
          if ("string" != typeof e.data) {
            let t = this._getOrReturnCtx(e),
              r = this._def.values;
            return (
              h(t, {
                expected: tt.joinValues(r),
                received: t.parsedType,
                code: s.invalid_type,
              }),
              f
            );
          }
          if (
            (w(this, tn, "f") || E(this, tn, new Set(this._def.values), "f"),
            !w(this, tn, "f").has(e.data))
          ) {
            let t = this._getOrReturnCtx(e),
              r = this._def.values;
            return (
              h(t, {
                received: t.data,
                code: s.invalid_enum_value,
                options: r,
              }),
              f
            );
          }
          return g(e.data);
        }
        get options() {
          return this._def.values;
        }
        get enum() {
          let e = {};
          for (let t of this._def.values) e[t] = t;
          return e;
        }
        get Values() {
          let e = {};
          for (let t of this._def.values) e[t] = t;
          return e;
        }
        get Enum() {
          let e = {};
          for (let t of this._def.values) e[t] = t;
          return e;
        }
        extract(e, t = this._def) {
          return ep.create(e, { ...this._def, ...t });
        }
        exclude(e, t = this._def) {
          return ep.create(
            this.options.filter((t) => !e.includes(t)),
            { ...this._def, ...t }
          );
        }
      }
      (tn = new WeakMap()), (ep.create = eh);
      class ef extends S {
        constructor() {
          super(...arguments), ti.set(this, void 0);
        }
        _parse(e) {
          let t = tt.getValidEnumValues(this._def.values),
            r = this._getOrReturnCtx(e);
          if (r.parsedType !== n.string && r.parsedType !== n.number) {
            let e = tt.objectValues(t);
            return (
              h(r, {
                expected: tt.joinValues(e),
                received: r.parsedType,
                code: s.invalid_type,
              }),
              f
            );
          }
          if (
            (w(this, ti, "f") ||
              E(
                this,
                ti,
                new Set(tt.getValidEnumValues(this._def.values)),
                "f"
              ),
            !w(this, ti, "f").has(e.data))
          ) {
            let e = tt.objectValues(t);
            return (
              h(r, {
                received: r.data,
                code: s.invalid_enum_value,
                options: e,
              }),
              f
            );
          }
          return g(e.data);
        }
        get enum() {
          return this._def.values;
        }
      }
      (ti = new WeakMap()),
        (ef.create = (e, t) =>
          new ef({ values: e, typeName: ts.ZodNativeEnum, ...k(t) }));
      class em extends S {
        unwrap() {
          return this._def.type;
        }
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          return t.parsedType !== n.promise && !1 === t.common.async
            ? (h(t, {
                code: s.invalid_type,
                expected: n.promise,
                received: t.parsedType,
              }),
              f)
            : g(
                (t.parsedType === n.promise
                  ? t.data
                  : Promise.resolve(t.data)
                ).then((e) =>
                  this._def.type.parseAsync(e, {
                    path: t.path,
                    errorMap: t.common.contextualErrorMap,
                  })
                )
              );
        }
      }
      em.create = (e, t) =>
        new em({ type: e, typeName: ts.ZodPromise, ...k(t) });
      class eg extends S {
        innerType() {
          return this._def.schema;
        }
        sourceType() {
          return this._def.schema._def.typeName === ts.ZodEffects
            ? this._def.schema.sourceType()
            : this._def.schema;
        }
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e),
            a = this._def.effect || null,
            n = {
              addIssue: (e) => {
                h(r, e), e.fatal ? t.abort() : t.dirty();
              },
              get path() {
                return r.path;
              },
            };
          if (((n.addIssue = n.addIssue.bind(n)), "preprocess" === a.type)) {
            let e = a.transform(r.data, n);
            if (r.common.async)
              return Promise.resolve(e).then(async (e) => {
                if ("aborted" === t.value) return f;
                let a = await this._def.schema._parseAsync({
                  data: e,
                  path: r.path,
                  parent: r,
                });
                return "aborted" === a.status
                  ? f
                  : "dirty" === a.status || "dirty" === t.value
                  ? m(a.value)
                  : a;
              });
            {
              if ("aborted" === t.value) return f;
              let a = this._def.schema._parseSync({
                data: e,
                path: r.path,
                parent: r,
              });
              return "aborted" === a.status
                ? f
                : "dirty" === a.status || "dirty" === t.value
                ? m(a.value)
                : a;
            }
          }
          if ("refinement" === a.type) {
            let e = (e) => {
              let t = a.refinement(e, n);
              if (r.common.async) return Promise.resolve(t);
              if (t instanceof Promise)
                throw Error(
                  "Async refinement encountered during synchronous parse operation. Use .parseAsync instead."
                );
              return e;
            };
            if (!1 !== r.common.async)
              return this._def.schema
                ._parseAsync({ data: r.data, path: r.path, parent: r })
                .then((r) =>
                  "aborted" === r.status
                    ? f
                    : ("dirty" === r.status && t.dirty(),
                      e(r.value).then(() => ({
                        status: t.value,
                        value: r.value,
                      })))
                );
            {
              let a = this._def.schema._parseSync({
                data: r.data,
                path: r.path,
                parent: r,
              });
              return "aborted" === a.status
                ? f
                : ("dirty" === a.status && t.dirty(),
                  e(a.value),
                  { status: t.value, value: a.value });
            }
          }
          if ("transform" === a.type) {
            if (!1 !== r.common.async)
              return this._def.schema
                ._parseAsync({ data: r.data, path: r.path, parent: r })
                .then((e) =>
                  _(e)
                    ? Promise.resolve(a.transform(e.value, n)).then((e) => ({
                        status: t.value,
                        value: e,
                      }))
                    : e
                );
            {
              let e = this._def.schema._parseSync({
                data: r.data,
                path: r.path,
                parent: r,
              });
              if (!_(e)) return e;
              let i = a.transform(e.value, n);
              if (i instanceof Promise)
                throw Error(
                  "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead."
                );
              return { status: t.value, value: i };
            }
          }
          tt.assertNever(a);
        }
      }
      (eg.create = (e, t, r) =>
        new eg({ schema: e, typeName: ts.ZodEffects, effect: t, ...k(r) })),
        (eg.createWithPreprocess = (e, t, r) =>
          new eg({
            schema: t,
            effect: { type: "preprocess", transform: e },
            typeName: ts.ZodEffects,
            ...k(r),
          }));
      class ey extends S {
        _parse(e) {
          return this._getType(e) === n.undefined
            ? g(void 0)
            : this._def.innerType._parse(e);
        }
        unwrap() {
          return this._def.innerType;
        }
      }
      ey.create = (e, t) =>
        new ey({ innerType: e, typeName: ts.ZodOptional, ...k(t) });
      class eb extends S {
        _parse(e) {
          return this._getType(e) === n.null
            ? g(null)
            : this._def.innerType._parse(e);
        }
        unwrap() {
          return this._def.innerType;
        }
      }
      eb.create = (e, t) =>
        new eb({ innerType: e, typeName: ts.ZodNullable, ...k(t) });
      class e_ extends S {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            r = t.data;
          return (
            t.parsedType === n.undefined && (r = this._def.defaultValue()),
            this._def.innerType._parse({ data: r, path: t.path, parent: t })
          );
        }
        removeDefault() {
          return this._def.innerType;
        }
      }
      e_.create = (e, t) =>
        new e_({
          innerType: e,
          typeName: ts.ZodDefault,
          defaultValue:
            "function" == typeof t.default ? t.default : () => t.default,
          ...k(t),
        });
      class ev extends S {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            r = { ...t, common: { ...t.common, issues: [] } },
            a = this._def.innerType._parse({
              data: r.data,
              path: r.path,
              parent: { ...r },
            });
          return v(a)
            ? a.then((e) => ({
                status: "valid",
                value:
                  "valid" === e.status
                    ? e.value
                    : this._def.catchValue({
                        get error() {
                          return new o(r.common.issues);
                        },
                        input: r.data,
                      }),
              }))
            : {
                status: "valid",
                value:
                  "valid" === a.status
                    ? a.value
                    : this._def.catchValue({
                        get error() {
                          return new o(r.common.issues);
                        },
                        input: r.data,
                      }),
              };
        }
        removeCatch() {
          return this._def.innerType;
        }
      }
      ev.create = (e, t) =>
        new ev({
          innerType: e,
          typeName: ts.ZodCatch,
          catchValue: "function" == typeof t.catch ? t.catch : () => t.catch,
          ...k(t),
        });
      class ew extends S {
        _parse(e) {
          if (this._getType(e) !== n.nan) {
            let t = this._getOrReturnCtx(e);
            return (
              h(t, {
                code: s.invalid_type,
                expected: n.nan,
                received: t.parsedType,
              }),
              f
            );
          }
          return { status: "valid", value: e.data };
        }
      }
      ew.create = (e) => new ew({ typeName: ts.ZodNaN, ...k(e) });
      let eE = Symbol("zod_brand");
      class ex extends S {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            r = t.data;
          return this._def.type._parse({ data: r, path: t.path, parent: t });
        }
        unwrap() {
          return this._def.type;
        }
      }
      class eO extends S {
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e);
          if (r.common.async)
            return (async () => {
              let e = await this._def.in._parseAsync({
                data: r.data,
                path: r.path,
                parent: r,
              });
              return "aborted" === e.status
                ? f
                : "dirty" === e.status
                ? (t.dirty(), m(e.value))
                : this._def.out._parseAsync({
                    data: e.value,
                    path: r.path,
                    parent: r,
                  });
            })();
          {
            let e = this._def.in._parseSync({
              data: r.data,
              path: r.path,
              parent: r,
            });
            return "aborted" === e.status
              ? f
              : "dirty" === e.status
              ? (t.dirty(), { status: "dirty", value: e.value })
              : this._def.out._parseSync({
                  data: e.value,
                  path: r.path,
                  parent: r,
                });
          }
        }
        static create(e, t) {
          return new eO({ in: e, out: t, typeName: ts.ZodPipeline });
        }
      }
      class ek extends S {
        _parse(e) {
          let t = this._def.innerType._parse(e),
            r = (e) => (_(e) && (e.value = Object.freeze(e.value)), e);
          return v(t) ? t.then((e) => r(e)) : r(t);
        }
        unwrap() {
          return this._def.innerType;
        }
      }
      function eS(e, t = {}, r) {
        return e
          ? G.create().superRefine((a, n) => {
              var i, s;
              if (!e(a)) {
                let e =
                    "function" == typeof t
                      ? t(a)
                      : "string" == typeof t
                      ? { message: t }
                      : t,
                  o =
                    null ===
                      (s = null !== (i = e.fatal) && void 0 !== i ? i : r) ||
                    void 0 === s ||
                    s;
                n.addIssue({
                  code: "custom",
                  ...("string" == typeof e ? { message: e } : e),
                  fatal: o,
                });
              }
            })
          : G.create();
      }
      ek.create = (e, t) =>
        new ek({ innerType: e, typeName: ts.ZodReadonly, ...k(t) });
      let eA = { object: ee.lazycreate };
      ((te = ts || (ts = {})).ZodString = "ZodString"),
        (te.ZodNumber = "ZodNumber"),
        (te.ZodNaN = "ZodNaN"),
        (te.ZodBigInt = "ZodBigInt"),
        (te.ZodBoolean = "ZodBoolean"),
        (te.ZodDate = "ZodDate"),
        (te.ZodSymbol = "ZodSymbol"),
        (te.ZodUndefined = "ZodUndefined"),
        (te.ZodNull = "ZodNull"),
        (te.ZodAny = "ZodAny"),
        (te.ZodUnknown = "ZodUnknown"),
        (te.ZodNever = "ZodNever"),
        (te.ZodVoid = "ZodVoid"),
        (te.ZodArray = "ZodArray"),
        (te.ZodObject = "ZodObject"),
        (te.ZodUnion = "ZodUnion"),
        (te.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
        (te.ZodIntersection = "ZodIntersection"),
        (te.ZodTuple = "ZodTuple"),
        (te.ZodRecord = "ZodRecord"),
        (te.ZodMap = "ZodMap"),
        (te.ZodSet = "ZodSet"),
        (te.ZodFunction = "ZodFunction"),
        (te.ZodLazy = "ZodLazy"),
        (te.ZodLiteral = "ZodLiteral"),
        (te.ZodEnum = "ZodEnum"),
        (te.ZodEffects = "ZodEffects"),
        (te.ZodNativeEnum = "ZodNativeEnum"),
        (te.ZodOptional = "ZodOptional"),
        (te.ZodNullable = "ZodNullable"),
        (te.ZodDefault = "ZodDefault"),
        (te.ZodCatch = "ZodCatch"),
        (te.ZodPromise = "ZodPromise"),
        (te.ZodBranded = "ZodBranded"),
        (te.ZodPipeline = "ZodPipeline"),
        (te.ZodReadonly = "ZodReadonly");
      let eP = Z.create,
        eI = B.create,
        eT = ew.create,
        eR = q.create,
        e$ = H.create,
        ej = z.create,
        eC = W.create,
        eN = J.create,
        eL = V.create,
        eM = G.create,
        eU = X.create,
        eD = K.create,
        eF = Q.create,
        eZ = Y.create,
        eB = ee.create,
        eq = ee.strictCreate,
        eH = et.create,
        ez = ea.create,
        eW = en.create,
        eJ = ei.create,
        eV = es.create,
        eG = eo.create,
        eX = el.create,
        eK = eu.create,
        eQ = ec.create,
        eY = ed.create,
        e0 = ep.create,
        e1 = ef.create,
        e2 = em.create,
        e4 = eg.create,
        e5 = ey.create,
        e6 = eb.create,
        e9 = eg.createWithPreprocess,
        e3 = eO.create;
      var e8,
        e7,
        te,
        tt,
        tr,
        ta,
        tn,
        ti,
        ts,
        to = Object.freeze({
          __proto__: null,
          defaultErrorMap: l,
          setErrorMap: function (e) {
            u = e;
          },
          getErrorMap: c,
          makeIssue: d,
          EMPTY_PATH: [],
          addIssueToContext: h,
          ParseStatus: p,
          INVALID: f,
          DIRTY: m,
          OK: g,
          isAborted: y,
          isDirty: b,
          isValid: _,
          isAsync: v,
          get util() {
            return tt;
          },
          get objectUtil() {
            return tr;
          },
          ZodParsedType: n,
          getParsedType: i,
          ZodType: S,
          datetimeRegex: F,
          ZodString: Z,
          ZodNumber: B,
          ZodBigInt: q,
          ZodBoolean: H,
          ZodDate: z,
          ZodSymbol: W,
          ZodUndefined: J,
          ZodNull: V,
          ZodAny: G,
          ZodUnknown: X,
          ZodNever: K,
          ZodVoid: Q,
          ZodArray: Y,
          ZodObject: ee,
          ZodUnion: et,
          ZodDiscriminatedUnion: ea,
          ZodIntersection: en,
          ZodTuple: ei,
          ZodRecord: es,
          ZodMap: eo,
          ZodSet: el,
          ZodFunction: eu,
          ZodLazy: ec,
          ZodLiteral: ed,
          ZodEnum: ep,
          ZodNativeEnum: ef,
          ZodPromise: em,
          ZodEffects: eg,
          ZodTransformer: eg,
          ZodOptional: ey,
          ZodNullable: eb,
          ZodDefault: e_,
          ZodCatch: ev,
          ZodNaN: ew,
          BRAND: eE,
          ZodBranded: ex,
          ZodPipeline: eO,
          ZodReadonly: ek,
          custom: eS,
          Schema: S,
          ZodSchema: S,
          late: eA,
          get ZodFirstPartyTypeKind() {
            return ts;
          },
          coerce: {
            string: (e) => Z.create({ ...e, coerce: !0 }),
            number: (e) => B.create({ ...e, coerce: !0 }),
            boolean: (e) => H.create({ ...e, coerce: !0 }),
            bigint: (e) => q.create({ ...e, coerce: !0 }),
            date: (e) => z.create({ ...e, coerce: !0 }),
          },
          any: eM,
          array: eZ,
          bigint: eR,
          boolean: e$,
          date: ej,
          discriminatedUnion: ez,
          effect: e4,
          enum: e0,
          function: eK,
          instanceof: (e, t = { message: `Input not instance of ${e.name}` }) =>
            eS((t) => t instanceof e, t),
          intersection: eW,
          lazy: eQ,
          literal: eY,
          map: eG,
          nan: eT,
          nativeEnum: e1,
          never: eD,
          null: eL,
          nullable: e6,
          number: eI,
          object: eB,
          oboolean: () => e$().optional(),
          onumber: () => eI().optional(),
          optional: e5,
          ostring: () => eP().optional(),
          pipeline: e3,
          preprocess: e9,
          promise: e2,
          record: eV,
          set: eX,
          strictObject: eq,
          string: eP,
          symbol: eC,
          transformer: e4,
          tuple: eJ,
          undefined: eN,
          union: eH,
          unknown: eU,
          void: eF,
          NEVER: f,
          ZodIssueCode: s,
          quotelessJson: (e) =>
            JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:"),
          ZodError: o,
        });
    },
  },
]);
