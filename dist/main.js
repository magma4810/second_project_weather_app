(() => {
  "use strict";
  var e = {
      28: (e, t, n) => {
        n.d(t, { Z: () => i });
        var r = n(81),
          a = n.n(r),
          o = n(645),
          c = n.n(o)()(a());
        c.push([
          e.id,
          "body {\n  background-color: lightblue;\n}\ndiv {\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n\ninput {\n  border-radius: 10px;\n}\n\n.show_weather {\n  border: 2px solid rgb(110, 156, 170);\n  border-radius: 10px;\n  height: 125px;\n}\n\n.clearStorage {\n  height: 25px;\n}\n",
          "",
        ]);
        const i = c;
      },
      645: (e) => {
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = "",
                  r = void 0 !== t[5];
                return (
                  t[4] && (n += "@supports (".concat(t[4], ") {")),
                  t[2] && (n += "@media ".concat(t[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {",
                    )),
                  (n += e(t)),
                  r && (n += "}"),
                  t[2] && (n += "}"),
                  t[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (t.i = function (e, n, r, a, o) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var c = {};
              if (r)
                for (var i = 0; i < this.length; i++) {
                  var s = this[i][0];
                  null != s && (c[s] = !0);
                }
              for (var l = 0; l < e.length; l++) {
                var u = [].concat(e[l]);
                (r && c[u[0]]) ||
                  (void 0 !== o &&
                    (void 0 === u[5] ||
                      (u[1] = "@layer"
                        .concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {")
                        .concat(u[1], "}")),
                    (u[5] = o)),
                  n &&
                    (u[2]
                      ? ((u[1] = "@media "
                          .concat(u[2], " {")
                          .concat(u[1], "}")),
                        (u[2] = n))
                      : (u[2] = n)),
                  a &&
                    (u[4]
                      ? ((u[1] = "@supports ("
                          .concat(u[4], ") {")
                          .concat(u[1], "}")),
                        (u[4] = a))
                      : (u[4] = "".concat(a))),
                  t.push(u));
              }
            }),
            t
          );
        };
      },
      81: (e) => {
        e.exports = function (e) {
          return e[1];
        };
      },
      379: (e) => {
        var t = [];
        function n(e) {
          for (var n = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === e) {
              n = r;
              break;
            }
          return n;
        }
        function r(e, r) {
          for (var o = {}, c = [], i = 0; i < e.length; i++) {
            var s = e[i],
              l = r.base ? s[0] + r.base : s[0],
              u = o[l] || 0,
              d = "".concat(l, " ").concat(u);
            o[l] = u + 1;
            var p = n(d),
              m = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== p) t[p].references++, t[p].updater(m);
            else {
              var f = a(m, r);
              (r.byIndex = i),
                t.splice(i, 0, { identifier: d, updater: f, references: 1 });
            }
            c.push(d);
          }
          return c;
        }
        function a(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, a) {
          var o = r((e = e || []), (a = a || {}));
          return function (e) {
            e = e || [];
            for (var c = 0; c < o.length; c++) {
              var i = n(o[c]);
              t[i].references--;
            }
            for (var s = r(e, a), l = 0; l < o.length; l++) {
              var u = n(o[l]);
              0 === t[u].references && (t[u].updater(), t.splice(u, 1));
            }
            o = s;
          };
        };
      },
      569: (e) => {
        var t = {};
        e.exports = function (e, n) {
          var r = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(n);
        };
      },
      216: (e) => {
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      565: (e, t, n) => {
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      795: (e) => {
        e.exports = function (e) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var a = void 0 !== n.layer;
                a &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {",
                  )),
                  (r += n.css),
                  a && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var o = n.sourceMap;
                o &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
                      " */",
                    )),
                  t.styleTagTransform(r, e, t.options);
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      589: (e) => {
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var o = (t[r] = { id: r, exports: {} });
    return e[r](o, o.exports, n), o.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.nc = void 0),
    (() => {
      var e = n(379),
        t = n.n(e),
        r = n(795),
        a = n.n(r),
        o = n(569),
        c = n.n(o),
        i = n(565),
        s = n.n(i),
        l = n(216),
        u = n.n(l),
        d = n(589),
        p = n.n(d),
        m = n(28),
        f = {};
      (f.styleTagTransform = p()),
        (f.setAttributes = s()),
        (f.insert = c().bind(null, "head")),
        (f.domAPI = a()),
        (f.insertStyleElement = u()),
        t()(m.Z, f),
        m.Z && m.Z.locals && m.Z.locals;
      const h = async (e) => {
          const t = await (async (e) => {
            const t = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?units=metric&q=\n          ${e}&appid=ab4639f5754271e773ed6d3ffd73f327`,
            );
            return await t.json();
          })(e);
          document.querySelector(".show_weather").innerHTML =
            `Погода в ${t.name} <br>\n  Temperature: ${t.main.temp}˚\n  <img src = https://openweathermap.org/img/wn/${t.weather[0].icon}@2x.png> `;
        },
        y = async (e) => {
          const t = fetch(
            `https://geocode-maps.yandex.ru/1.x/?apikey=96aaccbc-e728-4c64-bcf3-ba18bc4c3d20&geocode=${e}&format=json`,
          )
            .then((e) => e.json())
            .then((e) => e.response)
            .then((e) => e.GeoObjectCollection)
            .then((e) => e.featureMember[0])
            .then((e) => e.GeoObject)
            .then((e) => e.Point)
            .then((e) => e.pos);
          return (await t).split(" ").map((e) => Number(e));
        };
      function v(e) {
        const t = document.createElement("li"),
          n = document.createElement("button");
        (n.innerHTML = e),
          n.addEventListener("click", async () => {
            await h(n.innerHTML);
            let e = `https://static-maps.yandex.ru/v1?ll=${(
              await y(n.innerHTML)
            ).join(",")}&z=12&apikey=e0b3de27-83db-41e7-b150-72e7d09d00fc`;
            document.querySelector(".map").src = e;
          }),
          t.append(n);
        const r = document.querySelector(".list");
        r.insertBefore(t, r.children[0]);
      }
      !(async function (e) {
        const t = "lastCity",
          n = "allCity";
        document.body.append(e);
        const r = document.createElement("section");
        r.className = "weaher_container";
        const a = document.createElement("input");
        (a.placeholder = "Enter city"), r.append(a);
        const o = document.createElement("button");
        (o.className = "input_button"),
          (o.innerText = "Show Weather"),
          r.append(o);
        const c = document.createElement("ul");
        (c.className = "list"), r.append(c);
        const i = document.createElement("button");
        (i.className = "clearStorage"),
          (i.innerText = "Clear"),
          r.append(i),
          e.append(r);
        const s = document.createElement("section");
        (s.className = "show_weather"), e.append(s);
        const l = document.createElement("img");
        let u;
        (l.className = "map"),
          e.append(l),
          e.querySelector(".clearStorage").addEventListener("click", () => {
            localStorage.clear(), e.querySelector(".list").remove();
          });
        const d =
            null !== localStorage.getItem(t) &&
            JSON.parse(localStorage.getItem(t)),
          p =
            null === localStorage.getItem(n)
              ? []
              : JSON.parse(localStorage.getItem(n));
        if (d)
          h(d),
            p.forEach((e) => {
              !(function (e) {
                const t = document.createElement("li"),
                  n = document.createElement("button");
                (n.innerHTML = e),
                  n.addEventListener("click", async () => {
                    await h(n.innerHTML);
                    let e = `https://static-maps.yandex.ru/v1?ll=${(
                      await y(n.innerHTML)
                    ).join(
                      ",",
                    )}&z=12&apikey=e0b3de27-83db-41e7-b150-72e7d09d00fc`;
                    document.querySelector(".map").src = e;
                  }),
                  t.append(n),
                  document.querySelector(".list").append(t);
              })(e);
            }),
            (u = `https://static-maps.yandex.ru/v1?ll=${(await y(await d)).join(
              ",",
            )}&z=12&apikey=e0b3de27-83db-41e7-b150-72e7d09d00fc`),
            (e.querySelector(".map").src = u);
        else {
          const r = fetch("https://get.geojs.io/v1/ip/geo.json")
            .then((e) => e.json())
            .then((e) => e.city);
          h(await r),
            v(await r),
            p.unshift(await r),
            localStorage.setItem(n, JSON.stringify(p)),
            localStorage.setItem(t, JSON.stringify(await r)),
            (u = `https://static-maps.yandex.ru/v1?ll=${(await y(await r)).join(
              ",",
            )}&z=12&apikey=e0b3de27-83db-41e7-b150-72e7d09d00fc`),
            (e.querySelector(".map").src = u);
        }
        e.querySelector(".input_button").addEventListener("click", async () => {
          const r = (function () {
            const e = document.querySelector("input"),
              t = e.value;
            return (e.value = ""), t;
          })();
          h(r),
            localStorage.setItem(t, JSON.stringify(r)),
            p.includes(r) ||
              (v(r),
              10 === p.length
                ? (p.pop(),
                  e.querySelector(".list").childNodes[p.length + 1].remove(),
                  p.unshift(r))
                : p.unshift(r),
              localStorage.setItem(n, JSON.stringify(p))),
            (u = `https://static-maps.yandex.ru/v1?ll=${(await y(r)).join(
              ",",
            )}&z=12&apikey=e0b3de27-83db-41e7-b150-72e7d09d00fc`),
            (e.querySelector(".map").src = u);
        });
      })(document.createElement("div"));
    })();
})();
