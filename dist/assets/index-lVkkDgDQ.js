var NE = Object.defineProperty;
var GE = (r, t, i) =>
  t in r
    ? NE(r, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
    : (r[t] = i);
var X0 = (r, t, i) => GE(r, typeof t != "symbol" ? t + "" : t, i);
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) s(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const c of o.addedNodes)
          c.tagName === "LINK" && c.rel === "modulepreload" && s(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function s(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = i(l);
    fetch(l.href, o);
  }
})();
function FE(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default")
    ? r.default
    : r;
}
var xf = { exports: {} },
  Et = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Y0;
function UE() {
  if (Y0) return Et;
  Y0 = 1;
  var r = Symbol.for("react.transitional.element"),
    t = Symbol.for("react.portal"),
    i = Symbol.for("react.fragment"),
    s = Symbol.for("react.strict_mode"),
    l = Symbol.for("react.profiler"),
    o = Symbol.for("react.consumer"),
    c = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    d = Symbol.for("react.suspense"),
    _ = Symbol.for("react.memo"),
    m = Symbol.for("react.lazy"),
    y = Symbol.iterator;
  function v(T) {
    return T === null || typeof T != "object"
      ? null
      : ((T = (y && T[y]) || T["@@iterator"]),
        typeof T == "function" ? T : null);
  }
  var E = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    x = Object.assign,
    b = {};
  function R(T, X, U) {
    (this.props = T),
      (this.context = X),
      (this.refs = b),
      (this.updater = U || E);
  }
  (R.prototype.isReactComponent = {}),
    (R.prototype.setState = function (T, X) {
      if (typeof T != "object" && typeof T != "function" && T != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, T, X, "setState");
    }),
    (R.prototype.forceUpdate = function (T) {
      this.updater.enqueueForceUpdate(this, T, "forceUpdate");
    });
  function A() {}
  A.prototype = R.prototype;
  function O(T, X, U) {
    (this.props = T),
      (this.context = X),
      (this.refs = b),
      (this.updater = U || E);
  }
  var G = (O.prototype = new A());
  (G.constructor = O), x(G, R.prototype), (G.isPureReactComponent = !0);
  var z = Array.isArray,
    D = { H: null, A: null, T: null, S: null },
    j = Object.prototype.hasOwnProperty;
  function Q(T, X, U, tt, J, lt) {
    return (
      (U = lt.ref),
      { $$typeof: r, type: T, key: X, ref: U !== void 0 ? U : null, props: lt }
    );
  }
  function Z(T, X) {
    return Q(T.type, X, void 0, void 0, void 0, T.props);
  }
  function F(T) {
    return typeof T == "object" && T !== null && T.$$typeof === r;
  }
  function V(T) {
    var X = { "=": "=0", ":": "=2" };
    return (
      "$" +
      T.replace(/[=:]/g, function (U) {
        return X[U];
      })
    );
  }
  var rt = /\/+/g;
  function it(T, X) {
    return typeof T == "object" && T !== null && T.key != null
      ? V("" + T.key)
      : X.toString(36);
  }
  function ot() {}
  function st(T) {
    switch (T.status) {
      case "fulfilled":
        return T.value;
      case "rejected":
        throw T.reason;
      default:
        switch (
          (typeof T.status == "string"
            ? T.then(ot, ot)
            : ((T.status = "pending"),
              T.then(
                function (X) {
                  T.status === "pending" &&
                    ((T.status = "fulfilled"), (T.value = X));
                },
                function (X) {
                  T.status === "pending" &&
                    ((T.status = "rejected"), (T.reason = X));
                },
              )),
          T.status)
        ) {
          case "fulfilled":
            return T.value;
          case "rejected":
            throw T.reason;
        }
    }
    throw T;
  }
  function nt(T, X, U, tt, J) {
    var lt = typeof T;
    (lt === "undefined" || lt === "boolean") && (T = null);
    var ct = !1;
    if (T === null) ct = !0;
    else
      switch (lt) {
        case "bigint":
        case "string":
        case "number":
          ct = !0;
          break;
        case "object":
          switch (T.$$typeof) {
            case r:
            case t:
              ct = !0;
              break;
            case m:
              return (ct = T._init), nt(ct(T._payload), X, U, tt, J);
          }
      }
    if (ct)
      return (
        (J = J(T)),
        (ct = tt === "" ? "." + it(T, 0) : tt),
        z(J)
          ? ((U = ""),
            ct != null && (U = ct.replace(rt, "$&/") + "/"),
            nt(J, X, U, "", function (Ut) {
              return Ut;
            }))
          : J != null &&
            (F(J) &&
              (J = Z(
                J,
                U +
                  (J.key == null || (T && T.key === J.key)
                    ? ""
                    : ("" + J.key).replace(rt, "$&/") + "/") +
                  ct,
              )),
            X.push(J)),
        1
      );
    ct = 0;
    var Nt = tt === "" ? "." : tt + ":";
    if (z(T))
      for (var mt = 0; mt < T.length; mt++)
        (tt = T[mt]), (lt = Nt + it(tt, mt)), (ct += nt(tt, X, U, lt, J));
    else if (((mt = v(T)), typeof mt == "function"))
      for (T = mt.call(T), mt = 0; !(tt = T.next()).done; )
        (tt = tt.value), (lt = Nt + it(tt, mt++)), (ct += nt(tt, X, U, lt, J));
    else if (lt === "object") {
      if (typeof T.then == "function") return nt(st(T), X, U, tt, J);
      throw (
        ((X = String(T)),
        Error(
          "Objects are not valid as a React child (found: " +
            (X === "[object Object]"
              ? "object with keys {" + Object.keys(T).join(", ") + "}"
              : X) +
            "). If you meant to render a collection of children, use an array instead.",
        ))
      );
    }
    return ct;
  }
  function Y(T, X, U) {
    if (T == null) return T;
    var tt = [],
      J = 0;
    return (
      nt(T, tt, "", "", function (lt) {
        return X.call(U, lt, J++);
      }),
      tt
    );
  }
  function q(T) {
    if (T._status === -1) {
      var X = T._result;
      (X = X()),
        X.then(
          function (U) {
            (T._status === 0 || T._status === -1) &&
              ((T._status = 1), (T._result = U));
          },
          function (U) {
            (T._status === 0 || T._status === -1) &&
              ((T._status = 2), (T._result = U));
          },
        ),
        T._status === -1 && ((T._status = 0), (T._result = X));
    }
    if (T._status === 1) return T._result.default;
    throw T._result;
  }
  var W =
    typeof reportError == "function"
      ? reportError
      : function (T) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var X = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof T == "object" &&
                T !== null &&
                typeof T.message == "string"
                  ? String(T.message)
                  : String(T),
              error: T,
            });
            if (!window.dispatchEvent(X)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", T);
            return;
          }
          console.error(T);
        };
  function $() {}
  return (
    (Et.Children = {
      map: Y,
      forEach: function (T, X, U) {
        Y(
          T,
          function () {
            X.apply(this, arguments);
          },
          U,
        );
      },
      count: function (T) {
        var X = 0;
        return (
          Y(T, function () {
            X++;
          }),
          X
        );
      },
      toArray: function (T) {
        return (
          Y(T, function (X) {
            return X;
          }) || []
        );
      },
      only: function (T) {
        if (!F(T))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return T;
      },
    }),
    (Et.Component = R),
    (Et.Fragment = i),
    (Et.Profiler = l),
    (Et.PureComponent = O),
    (Et.StrictMode = s),
    (Et.Suspense = d),
    (Et.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = D),
    (Et.act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    }),
    (Et.cache = function (T) {
      return function () {
        return T.apply(null, arguments);
      };
    }),
    (Et.cloneElement = function (T, X, U) {
      if (T == null)
        throw Error(
          "The argument must be a React element, but you passed " + T + ".",
        );
      var tt = x({}, T.props),
        J = T.key,
        lt = void 0;
      if (X != null)
        for (ct in (X.ref !== void 0 && (lt = void 0),
        X.key !== void 0 && (J = "" + X.key),
        X))
          !j.call(X, ct) ||
            ct === "key" ||
            ct === "__self" ||
            ct === "__source" ||
            (ct === "ref" && X.ref === void 0) ||
            (tt[ct] = X[ct]);
      var ct = arguments.length - 2;
      if (ct === 1) tt.children = U;
      else if (1 < ct) {
        for (var Nt = Array(ct), mt = 0; mt < ct; mt++)
          Nt[mt] = arguments[mt + 2];
        tt.children = Nt;
      }
      return Q(T.type, J, void 0, void 0, lt, tt);
    }),
    (Et.createContext = function (T) {
      return (
        (T = {
          $$typeof: c,
          _currentValue: T,
          _currentValue2: T,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (T.Provider = T),
        (T.Consumer = { $$typeof: o, _context: T }),
        T
      );
    }),
    (Et.createElement = function (T, X, U) {
      var tt,
        J = {},
        lt = null;
      if (X != null)
        for (tt in (X.key !== void 0 && (lt = "" + X.key), X))
          j.call(X, tt) &&
            tt !== "key" &&
            tt !== "__self" &&
            tt !== "__source" &&
            (J[tt] = X[tt]);
      var ct = arguments.length - 2;
      if (ct === 1) J.children = U;
      else if (1 < ct) {
        for (var Nt = Array(ct), mt = 0; mt < ct; mt++)
          Nt[mt] = arguments[mt + 2];
        J.children = Nt;
      }
      if (T && T.defaultProps)
        for (tt in ((ct = T.defaultProps), ct))
          J[tt] === void 0 && (J[tt] = ct[tt]);
      return Q(T, lt, void 0, void 0, null, J);
    }),
    (Et.createRef = function () {
      return { current: null };
    }),
    (Et.forwardRef = function (T) {
      return { $$typeof: h, render: T };
    }),
    (Et.isValidElement = F),
    (Et.lazy = function (T) {
      return { $$typeof: m, _payload: { _status: -1, _result: T }, _init: q };
    }),
    (Et.memo = function (T, X) {
      return { $$typeof: _, type: T, compare: X === void 0 ? null : X };
    }),
    (Et.startTransition = function (T) {
      var X = D.T,
        U = {};
      D.T = U;
      try {
        var tt = T(),
          J = D.S;
        J !== null && J(U, tt),
          typeof tt == "object" &&
            tt !== null &&
            typeof tt.then == "function" &&
            tt.then($, W);
      } catch (lt) {
        W(lt);
      } finally {
        D.T = X;
      }
    }),
    (Et.unstable_useCacheRefresh = function () {
      return D.H.useCacheRefresh();
    }),
    (Et.use = function (T) {
      return D.H.use(T);
    }),
    (Et.useActionState = function (T, X, U) {
      return D.H.useActionState(T, X, U);
    }),
    (Et.useCallback = function (T, X) {
      return D.H.useCallback(T, X);
    }),
    (Et.useContext = function (T) {
      return D.H.useContext(T);
    }),
    (Et.useDebugValue = function () {}),
    (Et.useDeferredValue = function (T, X) {
      return D.H.useDeferredValue(T, X);
    }),
    (Et.useEffect = function (T, X) {
      return D.H.useEffect(T, X);
    }),
    (Et.useId = function () {
      return D.H.useId();
    }),
    (Et.useImperativeHandle = function (T, X, U) {
      return D.H.useImperativeHandle(T, X, U);
    }),
    (Et.useInsertionEffect = function (T, X) {
      return D.H.useInsertionEffect(T, X);
    }),
    (Et.useLayoutEffect = function (T, X) {
      return D.H.useLayoutEffect(T, X);
    }),
    (Et.useMemo = function (T, X) {
      return D.H.useMemo(T, X);
    }),
    (Et.useOptimistic = function (T, X) {
      return D.H.useOptimistic(T, X);
    }),
    (Et.useReducer = function (T, X, U) {
      return D.H.useReducer(T, X, U);
    }),
    (Et.useRef = function (T) {
      return D.H.useRef(T);
    }),
    (Et.useState = function (T) {
      return D.H.useState(T);
    }),
    (Et.useSyncExternalStore = function (T, X, U) {
      return D.H.useSyncExternalStore(T, X, U);
    }),
    (Et.useTransition = function () {
      return D.H.useTransition();
    }),
    (Et.version = "19.0.0"),
    Et
  );
}
var k0;
function yd() {
  return k0 || ((k0 = 1), (xf.exports = UE())), xf.exports;
}
var te = yd();
const ue = FE(te);
var Cf = { exports: {} },
  xa = {},
  Tf = { exports: {} },
  Rf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var P0;
function XE() {
  return (
    P0 ||
      ((P0 = 1),
      (function (r) {
        function t(Y, q) {
          var W = Y.length;
          Y.push(q);
          t: for (; 0 < W; ) {
            var $ = (W - 1) >>> 1,
              T = Y[$];
            if (0 < l(T, q)) (Y[$] = q), (Y[W] = T), (W = $);
            else break t;
          }
        }
        function i(Y) {
          return Y.length === 0 ? null : Y[0];
        }
        function s(Y) {
          if (Y.length === 0) return null;
          var q = Y[0],
            W = Y.pop();
          if (W !== q) {
            Y[0] = W;
            t: for (var $ = 0, T = Y.length, X = T >>> 1; $ < X; ) {
              var U = 2 * ($ + 1) - 1,
                tt = Y[U],
                J = U + 1,
                lt = Y[J];
              if (0 > l(tt, W))
                J < T && 0 > l(lt, tt)
                  ? ((Y[$] = lt), (Y[J] = W), ($ = J))
                  : ((Y[$] = tt), (Y[U] = W), ($ = U));
              else if (J < T && 0 > l(lt, W)) (Y[$] = lt), (Y[J] = W), ($ = J);
              else break t;
            }
          }
          return q;
        }
        function l(Y, q) {
          var W = Y.sortIndex - q.sortIndex;
          return W !== 0 ? W : Y.id - q.id;
        }
        if (
          ((r.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var o = performance;
          r.unstable_now = function () {
            return o.now();
          };
        } else {
          var c = Date,
            h = c.now();
          r.unstable_now = function () {
            return c.now() - h;
          };
        }
        var d = [],
          _ = [],
          m = 1,
          y = null,
          v = 3,
          E = !1,
          x = !1,
          b = !1,
          R = typeof setTimeout == "function" ? setTimeout : null,
          A = typeof clearTimeout == "function" ? clearTimeout : null,
          O = typeof setImmediate < "u" ? setImmediate : null;
        function G(Y) {
          for (var q = i(_); q !== null; ) {
            if (q.callback === null) s(_);
            else if (q.startTime <= Y)
              s(_), (q.sortIndex = q.expirationTime), t(d, q);
            else break;
            q = i(_);
          }
        }
        function z(Y) {
          if (((b = !1), G(Y), !x))
            if (i(d) !== null) (x = !0), st();
            else {
              var q = i(_);
              q !== null && nt(z, q.startTime - Y);
            }
        }
        var D = !1,
          j = -1,
          Q = 5,
          Z = -1;
        function F() {
          return !(r.unstable_now() - Z < Q);
        }
        function V() {
          if (D) {
            var Y = r.unstable_now();
            Z = Y;
            var q = !0;
            try {
              t: {
                (x = !1), b && ((b = !1), A(j), (j = -1)), (E = !0);
                var W = v;
                try {
                  e: {
                    for (
                      G(Y), y = i(d);
                      y !== null && !(y.expirationTime > Y && F());

                    ) {
                      var $ = y.callback;
                      if (typeof $ == "function") {
                        (y.callback = null), (v = y.priorityLevel);
                        var T = $(y.expirationTime <= Y);
                        if (((Y = r.unstable_now()), typeof T == "function")) {
                          (y.callback = T), G(Y), (q = !0);
                          break e;
                        }
                        y === i(d) && s(d), G(Y);
                      } else s(d);
                      y = i(d);
                    }
                    if (y !== null) q = !0;
                    else {
                      var X = i(_);
                      X !== null && nt(z, X.startTime - Y), (q = !1);
                    }
                  }
                  break t;
                } finally {
                  (y = null), (v = W), (E = !1);
                }
                q = void 0;
              }
            } finally {
              q ? rt() : (D = !1);
            }
          }
        }
        var rt;
        if (typeof O == "function")
          rt = function () {
            O(V);
          };
        else if (typeof MessageChannel < "u") {
          var it = new MessageChannel(),
            ot = it.port2;
          (it.port1.onmessage = V),
            (rt = function () {
              ot.postMessage(null);
            });
        } else
          rt = function () {
            R(V, 0);
          };
        function st() {
          D || ((D = !0), rt());
        }
        function nt(Y, q) {
          j = R(function () {
            Y(r.unstable_now());
          }, q);
        }
        (r.unstable_IdlePriority = 5),
          (r.unstable_ImmediatePriority = 1),
          (r.unstable_LowPriority = 4),
          (r.unstable_NormalPriority = 3),
          (r.unstable_Profiling = null),
          (r.unstable_UserBlockingPriority = 2),
          (r.unstable_cancelCallback = function (Y) {
            Y.callback = null;
          }),
          (r.unstable_continueExecution = function () {
            x || E || ((x = !0), st());
          }),
          (r.unstable_forceFrameRate = function (Y) {
            0 > Y || 125 < Y
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Q = 0 < Y ? Math.floor(1e3 / Y) : 5);
          }),
          (r.unstable_getCurrentPriorityLevel = function () {
            return v;
          }),
          (r.unstable_getFirstCallbackNode = function () {
            return i(d);
          }),
          (r.unstable_next = function (Y) {
            switch (v) {
              case 1:
              case 2:
              case 3:
                var q = 3;
                break;
              default:
                q = v;
            }
            var W = v;
            v = q;
            try {
              return Y();
            } finally {
              v = W;
            }
          }),
          (r.unstable_pauseExecution = function () {}),
          (r.unstable_requestPaint = function () {}),
          (r.unstable_runWithPriority = function (Y, q) {
            switch (Y) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                Y = 3;
            }
            var W = v;
            v = Y;
            try {
              return q();
            } finally {
              v = W;
            }
          }),
          (r.unstable_scheduleCallback = function (Y, q, W) {
            var $ = r.unstable_now();
            switch (
              (typeof W == "object" && W !== null
                ? ((W = W.delay),
                  (W = typeof W == "number" && 0 < W ? $ + W : $))
                : (W = $),
              Y)
            ) {
              case 1:
                var T = -1;
                break;
              case 2:
                T = 250;
                break;
              case 5:
                T = 1073741823;
                break;
              case 4:
                T = 1e4;
                break;
              default:
                T = 5e3;
            }
            return (
              (T = W + T),
              (Y = {
                id: m++,
                callback: q,
                priorityLevel: Y,
                startTime: W,
                expirationTime: T,
                sortIndex: -1,
              }),
              W > $
                ? ((Y.sortIndex = W),
                  t(_, Y),
                  i(d) === null &&
                    Y === i(_) &&
                    (b ? (A(j), (j = -1)) : (b = !0), nt(z, W - $)))
                : ((Y.sortIndex = T), t(d, Y), x || E || ((x = !0), st())),
              Y
            );
          }),
          (r.unstable_shouldYield = F),
          (r.unstable_wrapCallback = function (Y) {
            var q = v;
            return function () {
              var W = v;
              v = q;
              try {
                return Y.apply(this, arguments);
              } finally {
                v = W;
              }
            };
          });
      })(Rf)),
    Rf
  );
}
var B0;
function YE() {
  return B0 || ((B0 = 1), (Tf.exports = XE())), Tf.exports;
}
var bf = { exports: {} },
  Me = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var H0;
function kE() {
  if (H0) return Me;
  H0 = 1;
  var r = yd();
  function t(d) {
    var _ = "https://react.dev/errors/" + d;
    if (1 < arguments.length) {
      _ += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var m = 2; m < arguments.length; m++)
        _ += "&args[]=" + encodeURIComponent(arguments[m]);
    }
    return (
      "Minified React error #" +
      d +
      "; visit " +
      _ +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function i() {}
  var s = {
      d: {
        f: i,
        r: function () {
          throw Error(t(522));
        },
        D: i,
        C: i,
        L: i,
        m: i,
        X: i,
        S: i,
        M: i,
      },
      p: 0,
      findDOMNode: null,
    },
    l = Symbol.for("react.portal");
  function o(d, _, m) {
    var y =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: l,
      key: y == null ? null : "" + y,
      children: d,
      containerInfo: _,
      implementation: m,
    };
  }
  var c = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(d, _) {
    if (d === "font") return "";
    if (typeof _ == "string") return _ === "use-credentials" ? _ : "";
  }
  return (
    (Me.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s),
    (Me.createPortal = function (d, _) {
      var m =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!_ || (_.nodeType !== 1 && _.nodeType !== 9 && _.nodeType !== 11))
        throw Error(t(299));
      return o(d, _, null, m);
    }),
    (Me.flushSync = function (d) {
      var _ = c.T,
        m = s.p;
      try {
        if (((c.T = null), (s.p = 2), d)) return d();
      } finally {
        (c.T = _), (s.p = m), s.d.f();
      }
    }),
    (Me.preconnect = function (d, _) {
      typeof d == "string" &&
        (_
          ? ((_ = _.crossOrigin),
            (_ =
              typeof _ == "string"
                ? _ === "use-credentials"
                  ? _
                  : ""
                : void 0))
          : (_ = null),
        s.d.C(d, _));
    }),
    (Me.prefetchDNS = function (d) {
      typeof d == "string" && s.d.D(d);
    }),
    (Me.preinit = function (d, _) {
      if (typeof d == "string" && _ && typeof _.as == "string") {
        var m = _.as,
          y = h(m, _.crossOrigin),
          v = typeof _.integrity == "string" ? _.integrity : void 0,
          E = typeof _.fetchPriority == "string" ? _.fetchPriority : void 0;
        m === "style"
          ? s.d.S(d, typeof _.precedence == "string" ? _.precedence : void 0, {
              crossOrigin: y,
              integrity: v,
              fetchPriority: E,
            })
          : m === "script" &&
            s.d.X(d, {
              crossOrigin: y,
              integrity: v,
              fetchPriority: E,
              nonce: typeof _.nonce == "string" ? _.nonce : void 0,
            });
      }
    }),
    (Me.preinitModule = function (d, _) {
      if (typeof d == "string")
        if (typeof _ == "object" && _ !== null) {
          if (_.as == null || _.as === "script") {
            var m = h(_.as, _.crossOrigin);
            s.d.M(d, {
              crossOrigin: m,
              integrity: typeof _.integrity == "string" ? _.integrity : void 0,
              nonce: typeof _.nonce == "string" ? _.nonce : void 0,
            });
          }
        } else _ == null && s.d.M(d);
    }),
    (Me.preload = function (d, _) {
      if (
        typeof d == "string" &&
        typeof _ == "object" &&
        _ !== null &&
        typeof _.as == "string"
      ) {
        var m = _.as,
          y = h(m, _.crossOrigin);
        s.d.L(d, m, {
          crossOrigin: y,
          integrity: typeof _.integrity == "string" ? _.integrity : void 0,
          nonce: typeof _.nonce == "string" ? _.nonce : void 0,
          type: typeof _.type == "string" ? _.type : void 0,
          fetchPriority:
            typeof _.fetchPriority == "string" ? _.fetchPriority : void 0,
          referrerPolicy:
            typeof _.referrerPolicy == "string" ? _.referrerPolicy : void 0,
          imageSrcSet:
            typeof _.imageSrcSet == "string" ? _.imageSrcSet : void 0,
          imageSizes: typeof _.imageSizes == "string" ? _.imageSizes : void 0,
          media: typeof _.media == "string" ? _.media : void 0,
        });
      }
    }),
    (Me.preloadModule = function (d, _) {
      if (typeof d == "string")
        if (_) {
          var m = h(_.as, _.crossOrigin);
          s.d.m(d, {
            as: typeof _.as == "string" && _.as !== "script" ? _.as : void 0,
            crossOrigin: m,
            integrity: typeof _.integrity == "string" ? _.integrity : void 0,
          });
        } else s.d.m(d);
    }),
    (Me.requestFormReset = function (d) {
      s.d.r(d);
    }),
    (Me.unstable_batchedUpdates = function (d, _) {
      return d(_);
    }),
    (Me.useFormState = function (d, _, m) {
      return c.H.useFormState(d, _, m);
    }),
    (Me.useFormStatus = function () {
      return c.H.useHostTransitionStatus();
    }),
    (Me.version = "19.0.0"),
    Me
  );
}
var j0;
function PE() {
  if (j0) return bf.exports;
  j0 = 1;
  function r() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (t) {
        console.error(t);
      }
  }
  return r(), (bf.exports = kE()), bf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Z0;
function BE() {
  if (Z0) return xa;
  Z0 = 1;
  var r = YE(),
    t = yd(),
    i = PE();
  function s(e) {
    var n = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        n += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      n +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function l(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  var o = Symbol.for("react.element"),
    c = Symbol.for("react.transitional.element"),
    h = Symbol.for("react.portal"),
    d = Symbol.for("react.fragment"),
    _ = Symbol.for("react.strict_mode"),
    m = Symbol.for("react.profiler"),
    y = Symbol.for("react.provider"),
    v = Symbol.for("react.consumer"),
    E = Symbol.for("react.context"),
    x = Symbol.for("react.forward_ref"),
    b = Symbol.for("react.suspense"),
    R = Symbol.for("react.suspense_list"),
    A = Symbol.for("react.memo"),
    O = Symbol.for("react.lazy"),
    G = Symbol.for("react.offscreen"),
    z = Symbol.for("react.memo_cache_sentinel"),
    D = Symbol.iterator;
  function j(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (D && e[D]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Q = Symbol.for("react.client.reference");
  function Z(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Q ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case d:
        return "Fragment";
      case h:
        return "Portal";
      case m:
        return "Profiler";
      case _:
        return "StrictMode";
      case b:
        return "Suspense";
      case R:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case E:
          return (e.displayName || "Context") + ".Provider";
        case v:
          return (e._context.displayName || "Context") + ".Consumer";
        case x:
          var n = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = n.displayName || n.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case A:
          return (
            (n = e.displayName || null), n !== null ? n : Z(e.type) || "Memo"
          );
        case O:
          (n = e._payload), (e = e._init);
          try {
            return Z(e(n));
          } catch {}
      }
    return null;
  }
  var F = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    V = Object.assign,
    rt,
    it;
  function ot(e) {
    if (rt === void 0)
      try {
        throw Error();
      } catch (a) {
        var n = a.stack.trim().match(/\n( *(at )?)/);
        (rt = (n && n[1]) || ""),
          (it =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
                ? "@unknown:0:0"
                : "");
      }
    return (
      `
` +
      rt +
      e +
      it
    );
  }
  var st = !1;
  function nt(e, n) {
    if (!e || st) return "";
    st = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var u = {
        DetermineComponentFrameRoot: function () {
          try {
            if (n) {
              var K = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(K.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(K, []);
                } catch (k) {
                  var N = k;
                }
                Reflect.construct(e, [], K);
              } else {
                try {
                  K.call();
                } catch (k) {
                  N = k;
                }
                e.call(K.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (k) {
                N = k;
              }
              (K = e()) &&
                typeof K.catch == "function" &&
                K.catch(function () {});
            }
          } catch (k) {
            if (k && N && typeof k.stack == "string") return [k.stack, N.stack];
          }
          return [null, null];
        },
      };
      u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var f = Object.getOwnPropertyDescriptor(
        u.DetermineComponentFrameRoot,
        "name",
      );
      f &&
        f.configurable &&
        Object.defineProperty(u.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var g = u.DetermineComponentFrameRoot(),
        p = g[0],
        S = g[1];
      if (p && S) {
        var C = p.split(`
`),
          M = S.split(`
`);
        for (
          f = u = 0;
          u < C.length && !C[u].includes("DetermineComponentFrameRoot");

        )
          u++;
        for (; f < M.length && !M[f].includes("DetermineComponentFrameRoot"); )
          f++;
        if (u === C.length || f === M.length)
          for (
            u = C.length - 1, f = M.length - 1;
            1 <= u && 0 <= f && C[u] !== M[f];

          )
            f--;
        for (; 1 <= u && 0 <= f; u--, f--)
          if (C[u] !== M[f]) {
            if (u !== 1 || f !== 1)
              do
                if ((u--, f--, 0 > f || C[u] !== M[f])) {
                  var P =
                    `
` + C[u].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      P.includes("<anonymous>") &&
                      (P = P.replace("<anonymous>", e.displayName)),
                    P
                  );
                }
              while (1 <= u && 0 <= f);
            break;
          }
      }
    } finally {
      (st = !1), (Error.prepareStackTrace = a);
    }
    return (a = e ? e.displayName || e.name : "") ? ot(a) : "";
  }
  function Y(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return ot(e.type);
      case 16:
        return ot("Lazy");
      case 13:
        return ot("Suspense");
      case 19:
        return ot("SuspenseList");
      case 0:
      case 15:
        return (e = nt(e.type, !1)), e;
      case 11:
        return (e = nt(e.type.render, !1)), e;
      case 1:
        return (e = nt(e.type, !0)), e;
      default:
        return "";
    }
  }
  function q(e) {
    try {
      var n = "";
      do (n += Y(e)), (e = e.return);
      while (e);
      return n;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  function W(e) {
    var n = e,
      a = e;
    if (e.alternate) for (; n.return; ) n = n.return;
    else {
      e = n;
      do (n = e), (n.flags & 4098) !== 0 && (a = n.return), (e = n.return);
      while (e);
    }
    return n.tag === 3 ? a : null;
  }
  function $(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (
        (n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)),
        n !== null)
      )
        return n.dehydrated;
    }
    return null;
  }
  function T(e) {
    if (W(e) !== e) throw Error(s(188));
  }
  function X(e) {
    var n = e.alternate;
    if (!n) {
      if (((n = W(e)), n === null)) throw Error(s(188));
      return n !== e ? null : e;
    }
    for (var a = e, u = n; ; ) {
      var f = a.return;
      if (f === null) break;
      var g = f.alternate;
      if (g === null) {
        if (((u = f.return), u !== null)) {
          a = u;
          continue;
        }
        break;
      }
      if (f.child === g.child) {
        for (g = f.child; g; ) {
          if (g === a) return T(f), e;
          if (g === u) return T(f), n;
          g = g.sibling;
        }
        throw Error(s(188));
      }
      if (a.return !== u.return) (a = f), (u = g);
      else {
        for (var p = !1, S = f.child; S; ) {
          if (S === a) {
            (p = !0), (a = f), (u = g);
            break;
          }
          if (S === u) {
            (p = !0), (u = f), (a = g);
            break;
          }
          S = S.sibling;
        }
        if (!p) {
          for (S = g.child; S; ) {
            if (S === a) {
              (p = !0), (a = g), (u = f);
              break;
            }
            if (S === u) {
              (p = !0), (u = g), (a = f);
              break;
            }
            S = S.sibling;
          }
          if (!p) throw Error(s(189));
        }
      }
      if (a.alternate !== u) throw Error(s(190));
    }
    if (a.tag !== 3) throw Error(s(188));
    return a.stateNode.current === a ? e : n;
  }
  function U(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((n = U(e)), n !== null)) return n;
      e = e.sibling;
    }
    return null;
  }
  var tt = Array.isArray,
    J = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    lt = { pending: !1, data: null, method: null, action: null },
    ct = [],
    Nt = -1;
  function mt(e) {
    return { current: e };
  }
  function Ut(e) {
    0 > Nt || ((e.current = ct[Nt]), (ct[Nt] = null), Nt--);
  }
  function vt(e, n) {
    Nt++, (ct[Nt] = e.current), (e.current = n);
  }
  var Ie = mt(null),
    Yi = mt(null),
    Qe = mt(null),
    Je = mt(null);
  function ki(e, n) {
    switch ((vt(Qe, n), vt(Yi, e), vt(Ie, null), (e = n.nodeType), e)) {
      case 9:
      case 11:
        n = (n = n.documentElement) && (n = n.namespaceURI) ? g0(n) : 0;
        break;
      default:
        if (
          ((e = e === 8 ? n.parentNode : n),
          (n = e.tagName),
          (e = e.namespaceURI))
        )
          (e = g0(e)), (n = _0(e, n));
        else
          switch (n) {
            case "svg":
              n = 1;
              break;
            case "math":
              n = 2;
              break;
            default:
              n = 0;
          }
    }
    Ut(Ie), vt(Ie, n);
  }
  function ve() {
    Ut(Ie), Ut(Yi), Ut(Qe);
  }
  function ke(e) {
    e.memoizedState !== null && vt(Je, e);
    var n = Ie.current,
      a = _0(n, e.type);
    n !== a && (vt(Yi, e), vt(Ie, a));
  }
  function Ai(e) {
    Yi.current === e && (Ut(Ie), Ut(Yi)),
      Je.current === e && (Ut(Je), (ya._currentValue = lt));
  }
  var wi = Object.prototype.hasOwnProperty,
    Pi = r.unstable_scheduleCallback,
    nn = r.unstable_cancelCallback,
    Mi = r.unstable_shouldYield,
    sn = r.unstable_requestPaint,
    kt = r.unstable_now,
    Rl = r.unstable_getCurrentPriorityLevel,
    Ss = r.unstable_ImmediatePriority,
    xs = r.unstable_UserBlockingPriority,
    cr = r.unstable_NormalPriority,
    io = r.unstable_LowPriority,
    bl = r.unstable_IdlePriority,
    Al = r.log,
    _c = r.unstable_setDisableYieldValue,
    Cs = null,
    Te = null;
  function no(e) {
    if (Te && typeof Te.onCommitFiberRoot == "function")
      try {
        Te.onCommitFiberRoot(Cs, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  function ai(e) {
    if (
      (typeof Al == "function" && _c(e),
      Te && typeof Te.setStrictMode == "function")
    )
      try {
        Te.setStrictMode(Cs, e);
      } catch {}
  }
  var Re = Math.clz32 ? Math.clz32 : Ts,
    mc = Math.log,
    wl = Math.LN2;
  function Ts(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((mc(e) / wl) | 0)) | 0;
  }
  var Bi = 128,
    Hi = 4194304;
  function ji(e) {
    var n = e & 42;
    if (n !== 0) return n;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194176;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Rs(e, n) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var u = 0,
      f = e.suspendedLanes,
      g = e.pingedLanes,
      p = e.warmLanes;
    e = e.finishedLanes !== 0;
    var S = a & 134217727;
    return (
      S !== 0
        ? ((a = S & ~f),
          a !== 0
            ? (u = ji(a))
            : ((g &= S),
              g !== 0
                ? (u = ji(g))
                : e || ((p = S & ~p), p !== 0 && (u = ji(p)))))
        : ((S = a & ~f),
          S !== 0
            ? (u = ji(S))
            : g !== 0
              ? (u = ji(g))
              : e || ((p = a & ~p), p !== 0 && (u = ji(p)))),
      u === 0
        ? 0
        : n !== 0 &&
            n !== u &&
            (n & f) === 0 &&
            ((f = u & -u),
            (p = n & -n),
            f >= p || (f === 32 && (p & 4194176) !== 0))
          ? n
          : u
    );
  }
  function ce(e, n) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & n) === 0;
  }
  function rn(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
        return n + 250;
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ne() {
    var e = Bi;
    return (Bi <<= 1), (Bi & 4194176) === 0 && (Bi = 128), e;
  }
  function $e() {
    var e = Hi;
    return (Hi <<= 1), (Hi & 62914560) === 0 && (Hi = 4194304), e;
  }
  function be(e) {
    for (var n = [], a = 0; 31 > a; a++) n.push(e);
    return n;
  }
  function Ge(e, n) {
    (e.pendingLanes |= n),
      n !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function Oi(e, n, a, u, f, g) {
    var p = e.pendingLanes;
    (e.pendingLanes = a),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= a),
      (e.entangledLanes &= a),
      (e.errorRecoveryDisabledLanes &= a),
      (e.shellSuspendCounter = 0);
    var S = e.entanglements,
      C = e.expirationTimes,
      M = e.hiddenUpdates;
    for (a = p & ~a; 0 < a; ) {
      var P = 31 - Re(a),
        K = 1 << P;
      (S[P] = 0), (C[P] = -1);
      var N = M[P];
      if (N !== null)
        for (M[P] = null, P = 0; P < N.length; P++) {
          var k = N[P];
          k !== null && (k.lane &= -536870913);
        }
      a &= ~K;
    }
    u !== 0 && Zt(e, u, 0),
      g !== 0 && f === 0 && e.tag !== 0 && (e.suspendedLanes |= g & ~(p & ~n));
  }
  function Zt(e, n, a) {
    (e.pendingLanes |= n), (e.suspendedLanes &= ~n);
    var u = 31 - Re(n);
    (e.entangledLanes |= n),
      (e.entanglements[u] = e.entanglements[u] | 1073741824 | (a & 4194218));
  }
  function he(e, n) {
    var a = (e.entangledLanes |= n);
    for (e = e.entanglements; a; ) {
      var u = 31 - Re(a),
        f = 1 << u;
      (f & n) | (e[u] & n) && (e[u] |= n), (a &= ~f);
    }
  }
  function oi(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function so() {
    var e = J.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : z0(e.type));
  }
  function R1(e, n) {
    var a = J.p;
    try {
      return (J.p = e), n();
    } finally {
      J.p = a;
    }
  }
  var Gn = Math.random().toString(36).slice(2),
    Ae = "__reactFiber$" + Gn,
    Pe = "__reactProps$" + Gn,
    hr = "__reactContainer$" + Gn,
    yc = "__reactEvents$" + Gn,
    b1 = "__reactListeners$" + Gn,
    A1 = "__reactHandles$" + Gn,
    fg = "__reactResources$" + Gn,
    Ml = "__reactMarker$" + Gn;
  function pc(e) {
    delete e[Ae], delete e[Pe], delete e[yc], delete e[b1], delete e[A1];
  }
  function bs(e) {
    var n = e[Ae];
    if (n) return n;
    for (var a = e.parentNode; a; ) {
      if ((n = a[hr] || a[Ae])) {
        if (
          ((a = n.alternate),
          n.child !== null || (a !== null && a.child !== null))
        )
          for (e = p0(e); e !== null; ) {
            if ((a = e[Ae])) return a;
            e = p0(e);
          }
        return n;
      }
      (e = a), (a = e.parentNode);
    }
    return null;
  }
  function fr(e) {
    if ((e = e[Ae] || e[hr])) {
      var n = e.tag;
      if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3)
        return e;
    }
    return null;
  }
  function Ol(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e.stateNode;
    throw Error(s(33));
  }
  function dr(e) {
    var n = e[fg];
    return (
      n ||
        (n = e[fg] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      n
    );
  }
  function fe(e) {
    e[Ml] = !0;
  }
  var dg = new Set(),
    gg = {};
  function As(e, n) {
    gr(e, n), gr(e + "Capture", n);
  }
  function gr(e, n) {
    for (gg[e] = n, e = 0; e < n.length; e++) dg.add(n[e]);
  }
  var ln = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    w1 = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    _g = {},
    mg = {};
  function M1(e) {
    return wi.call(mg, e)
      ? !0
      : wi.call(_g, e)
        ? !1
        : w1.test(e)
          ? (mg[e] = !0)
          : ((_g[e] = !0), !1);
  }
  function ro(e, n, a) {
    if (M1(n))
      if (a === null) e.removeAttribute(n);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(n);
            return;
          case "boolean":
            var u = n.toLowerCase().slice(0, 5);
            if (u !== "data-" && u !== "aria-") {
              e.removeAttribute(n);
              return;
            }
        }
        e.setAttribute(n, "" + a);
      }
  }
  function lo(e, n, a) {
    if (a === null) e.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttribute(n, "" + a);
    }
  }
  function an(e, n, a, u) {
    if (u === null) e.removeAttribute(a);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(n, a, "" + u);
    }
  }
  function ui(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function yg(e) {
    var n = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (n === "checkbox" || n === "radio")
    );
  }
  function O1(e) {
    var n = yg(e) ? "checked" : "value",
      a = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
      u = "" + e[n];
    if (
      !e.hasOwnProperty(n) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var f = a.get,
        g = a.set;
      return (
        Object.defineProperty(e, n, {
          configurable: !0,
          get: function () {
            return f.call(this);
          },
          set: function (p) {
            (u = "" + p), g.call(this, p);
          },
        }),
        Object.defineProperty(e, n, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return u;
          },
          setValue: function (p) {
            u = "" + p;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[n];
          },
        }
      );
    }
  }
  function ao(e) {
    e._valueTracker || (e._valueTracker = O1(e));
  }
  function pg(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var a = n.getValue(),
      u = "";
    return (
      e && (u = yg(e) ? (e.checked ? "true" : "false") : e.value),
      (e = u),
      e !== a ? (n.setValue(e), !0) : !1
    );
  }
  function oo(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var D1 = /[\n"\\]/g;
  function ci(e) {
    return e.replace(D1, function (n) {
      return "\\" + n.charCodeAt(0).toString(16) + " ";
    });
  }
  function vc(e, n, a, u, f, g, p, S) {
    (e.name = ""),
      p != null &&
      typeof p != "function" &&
      typeof p != "symbol" &&
      typeof p != "boolean"
        ? (e.type = p)
        : e.removeAttribute("type"),
      n != null
        ? p === "number"
          ? ((n === 0 && e.value === "") || e.value != n) &&
            (e.value = "" + ui(n))
          : e.value !== "" + ui(n) && (e.value = "" + ui(n))
        : (p !== "submit" && p !== "reset") || e.removeAttribute("value"),
      n != null
        ? Ec(e, p, ui(n))
        : a != null
          ? Ec(e, p, ui(a))
          : u != null && e.removeAttribute("value"),
      f == null && g != null && (e.defaultChecked = !!g),
      f != null &&
        (e.checked = f && typeof f != "function" && typeof f != "symbol"),
      S != null &&
      typeof S != "function" &&
      typeof S != "symbol" &&
      typeof S != "boolean"
        ? (e.name = "" + ui(S))
        : e.removeAttribute("name");
  }
  function vg(e, n, a, u, f, g, p, S) {
    if (
      (g != null &&
        typeof g != "function" &&
        typeof g != "symbol" &&
        typeof g != "boolean" &&
        (e.type = g),
      n != null || a != null)
    ) {
      if (!((g !== "submit" && g !== "reset") || n != null)) return;
      (a = a != null ? "" + ui(a) : ""),
        (n = n != null ? "" + ui(n) : a),
        S || n === e.value || (e.value = n),
        (e.defaultValue = n);
    }
    (u = u ?? f),
      (u = typeof u != "function" && typeof u != "symbol" && !!u),
      (e.checked = S ? e.checked : !!u),
      (e.defaultChecked = !!u),
      p != null &&
        typeof p != "function" &&
        typeof p != "symbol" &&
        typeof p != "boolean" &&
        (e.name = p);
  }
  function Ec(e, n, a) {
    (n === "number" && oo(e.ownerDocument) === e) ||
      e.defaultValue === "" + a ||
      (e.defaultValue = "" + a);
  }
  function _r(e, n, a, u) {
    if (((e = e.options), n)) {
      n = {};
      for (var f = 0; f < a.length; f++) n["$" + a[f]] = !0;
      for (a = 0; a < e.length; a++)
        (f = n.hasOwnProperty("$" + e[a].value)),
          e[a].selected !== f && (e[a].selected = f),
          f && u && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + ui(a), n = null, f = 0; f < e.length; f++) {
        if (e[f].value === a) {
          (e[f].selected = !0), u && (e[f].defaultSelected = !0);
          return;
        }
        n !== null || e[f].disabled || (n = e[f]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Eg(e, n, a) {
    if (
      n != null &&
      ((n = "" + ui(n)), n !== e.value && (e.value = n), a == null)
    ) {
      e.defaultValue !== n && (e.defaultValue = n);
      return;
    }
    e.defaultValue = a != null ? "" + ui(a) : "";
  }
  function Sg(e, n, a, u) {
    if (n == null) {
      if (u != null) {
        if (a != null) throw Error(s(92));
        if (tt(u)) {
          if (1 < u.length) throw Error(s(93));
          u = u[0];
        }
        a = u;
      }
      a == null && (a = ""), (n = a);
    }
    (a = ui(n)),
      (e.defaultValue = a),
      (u = e.textContent),
      u === a && u !== "" && u !== null && (e.value = u);
  }
  function mr(e, n) {
    if (n) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var L1 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function xg(e, n, a) {
    var u = n.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? u
        ? e.setProperty(n, "")
        : n === "float"
          ? (e.cssFloat = "")
          : (e[n] = "")
      : u
        ? e.setProperty(n, a)
        : typeof a != "number" || a === 0 || L1.has(n)
          ? n === "float"
            ? (e.cssFloat = a)
            : (e[n] = ("" + a).trim())
          : (e[n] = a + "px");
  }
  function Cg(e, n, a) {
    if (n != null && typeof n != "object") throw Error(s(62));
    if (((e = e.style), a != null)) {
      for (var u in a)
        !a.hasOwnProperty(u) ||
          (n != null && n.hasOwnProperty(u)) ||
          (u.indexOf("--") === 0
            ? e.setProperty(u, "")
            : u === "float"
              ? (e.cssFloat = "")
              : (e[u] = ""));
      for (var f in n)
        (u = n[f]), n.hasOwnProperty(f) && a[f] !== u && xg(e, f, u);
    } else for (var g in n) n.hasOwnProperty(g) && xg(e, g, n[g]);
  }
  function Sc(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var z1 = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    I1 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function uo(e) {
    return I1.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var xc = null;
  function Cc(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var yr = null,
    pr = null;
  function Tg(e) {
    var n = fr(e);
    if (n && (e = n.stateNode)) {
      var a = e[Pe] || null;
      t: switch (((e = n.stateNode), n.type)) {
        case "input":
          if (
            (vc(
              e,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name,
            ),
            (n = a.name),
            a.type === "radio" && n != null)
          ) {
            for (a = e; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + ci("" + n) + '"][type="radio"]',
              ),
                n = 0;
              n < a.length;
              n++
            ) {
              var u = a[n];
              if (u !== e && u.form === e.form) {
                var f = u[Pe] || null;
                if (!f) throw Error(s(90));
                vc(
                  u,
                  f.value,
                  f.defaultValue,
                  f.defaultValue,
                  f.checked,
                  f.defaultChecked,
                  f.type,
                  f.name,
                );
              }
            }
            for (n = 0; n < a.length; n++)
              (u = a[n]), u.form === e.form && pg(u);
          }
          break t;
        case "textarea":
          Eg(e, a.value, a.defaultValue);
          break t;
        case "select":
          (n = a.value), n != null && _r(e, !!a.multiple, n, !1);
      }
    }
  }
  var Tc = !1;
  function Rg(e, n, a) {
    if (Tc) return e(n, a);
    Tc = !0;
    try {
      var u = e(n);
      return u;
    } finally {
      if (
        ((Tc = !1),
        (yr !== null || pr !== null) &&
          (Ko(), yr && ((n = yr), (e = pr), (pr = yr = null), Tg(n), e)))
      )
        for (n = 0; n < e.length; n++) Tg(e[n]);
    }
  }
  function Dl(e, n) {
    var a = e.stateNode;
    if (a === null) return null;
    var u = a[Pe] || null;
    if (u === null) return null;
    a = u[n];
    t: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (u = !u.disabled) ||
          ((e = e.type),
          (u = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !u);
        break t;
      default:
        e = !1;
    }
    if (e) return null;
    if (a && typeof a != "function") throw Error(s(231, n, typeof a));
    return a;
  }
  var Rc = !1;
  if (ln)
    try {
      var Ll = {};
      Object.defineProperty(Ll, "passive", {
        get: function () {
          Rc = !0;
        },
      }),
        window.addEventListener("test", Ll, Ll),
        window.removeEventListener("test", Ll, Ll);
    } catch {
      Rc = !1;
    }
  var Fn = null,
    bc = null,
    co = null;
  function bg() {
    if (co) return co;
    var e,
      n = bc,
      a = n.length,
      u,
      f = "value" in Fn ? Fn.value : Fn.textContent,
      g = f.length;
    for (e = 0; e < a && n[e] === f[e]; e++);
    var p = a - e;
    for (u = 1; u <= p && n[a - u] === f[g - u]; u++);
    return (co = f.slice(e, 1 < u ? 1 - u : void 0));
  }
  function ho(e) {
    var n = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
        : (e = n),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function fo() {
    return !0;
  }
  function Ag() {
    return !1;
  }
  function Be(e) {
    function n(a, u, f, g, p) {
      (this._reactName = a),
        (this._targetInst = f),
        (this.type = u),
        (this.nativeEvent = g),
        (this.target = p),
        (this.currentTarget = null);
      for (var S in e)
        e.hasOwnProperty(S) && ((a = e[S]), (this[S] = a ? a(g) : g[S]));
      return (
        (this.isDefaultPrevented = (
          g.defaultPrevented != null ? g.defaultPrevented : g.returnValue === !1
        )
          ? fo
          : Ag),
        (this.isPropagationStopped = Ag),
        this
      );
    }
    return (
      V(n.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = fo));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = fo));
        },
        persist: function () {},
        isPersistent: fo,
      }),
      n
    );
  }
  var ws = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    go = Be(ws),
    zl = V({}, ws, { view: 0, detail: 0 }),
    N1 = Be(zl),
    Ac,
    wc,
    Il,
    _o = V({}, zl, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Oc,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Il &&
              (Il && e.type === "mousemove"
                ? ((Ac = e.screenX - Il.screenX), (wc = e.screenY - Il.screenY))
                : (wc = Ac = 0),
              (Il = e)),
            Ac);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : wc;
      },
    }),
    wg = Be(_o),
    G1 = V({}, _o, { dataTransfer: 0 }),
    F1 = Be(G1),
    U1 = V({}, zl, { relatedTarget: 0 }),
    Mc = Be(U1),
    X1 = V({}, ws, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Y1 = Be(X1),
    k1 = V({}, ws, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    P1 = Be(k1),
    B1 = V({}, ws, { data: 0 }),
    Mg = Be(B1),
    H1 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    j1 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Z1 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function K1(e) {
    var n = this.nativeEvent;
    return n.getModifierState
      ? n.getModifierState(e)
      : (e = Z1[e])
        ? !!n[e]
        : !1;
  }
  function Oc() {
    return K1;
  }
  var q1 = V({}, zl, {
      key: function (e) {
        if (e.key) {
          var n = H1[e.key] || e.key;
          if (n !== "Unidentified") return n;
        }
        return e.type === "keypress"
          ? ((e = ho(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? j1[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Oc,
      charCode: function (e) {
        return e.type === "keypress" ? ho(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? ho(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    V1 = Be(q1),
    W1 = V({}, _o, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Og = Be(W1),
    Q1 = V({}, zl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Oc,
    }),
    J1 = Be(Q1),
    $1 = V({}, ws, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    tv = Be($1),
    ev = V({}, _o, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    iv = Be(ev),
    nv = V({}, ws, { newState: 0, oldState: 0 }),
    sv = Be(nv),
    rv = [9, 13, 27, 32],
    Dc = ln && "CompositionEvent" in window,
    Nl = null;
  ln && "documentMode" in document && (Nl = document.documentMode);
  var lv = ln && "TextEvent" in window && !Nl,
    Dg = ln && (!Dc || (Nl && 8 < Nl && 11 >= Nl)),
    Lg = " ",
    zg = !1;
  function Ig(e, n) {
    switch (e) {
      case "keyup":
        return rv.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Ng(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var vr = !1;
  function av(e, n) {
    switch (e) {
      case "compositionend":
        return Ng(n);
      case "keypress":
        return n.which !== 32 ? null : ((zg = !0), Lg);
      case "textInput":
        return (e = n.data), e === Lg && zg ? null : e;
      default:
        return null;
    }
  }
  function ov(e, n) {
    if (vr)
      return e === "compositionend" || (!Dc && Ig(e, n))
        ? ((e = bg()), (co = bc = Fn = null), (vr = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return Dg && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var uv = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Gg(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!uv[e.type] : n === "textarea";
  }
  function Fg(e, n, a, u) {
    yr ? (pr ? pr.push(u) : (pr = [u])) : (yr = u),
      (n = Jo(n, "onChange")),
      0 < n.length &&
        ((a = new go("onChange", "change", null, a, u)),
        e.push({ event: a, listeners: n }));
  }
  var Gl = null,
    Fl = null;
  function cv(e) {
    u0(e, 0);
  }
  function mo(e) {
    var n = Ol(e);
    if (pg(n)) return e;
  }
  function Ug(e, n) {
    if (e === "change") return n;
  }
  var Xg = !1;
  if (ln) {
    var Lc;
    if (ln) {
      var zc = "oninput" in document;
      if (!zc) {
        var Yg = document.createElement("div");
        Yg.setAttribute("oninput", "return;"),
          (zc = typeof Yg.oninput == "function");
      }
      Lc = zc;
    } else Lc = !1;
    Xg = Lc && (!document.documentMode || 9 < document.documentMode);
  }
  function kg() {
    Gl && (Gl.detachEvent("onpropertychange", Pg), (Fl = Gl = null));
  }
  function Pg(e) {
    if (e.propertyName === "value" && mo(Fl)) {
      var n = [];
      Fg(n, Fl, e, Cc(e)), Rg(cv, n);
    }
  }
  function hv(e, n, a) {
    e === "focusin"
      ? (kg(), (Gl = n), (Fl = a), Gl.attachEvent("onpropertychange", Pg))
      : e === "focusout" && kg();
  }
  function fv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return mo(Fl);
  }
  function dv(e, n) {
    if (e === "click") return mo(n);
  }
  function gv(e, n) {
    if (e === "input" || e === "change") return mo(n);
  }
  function _v(e, n) {
    return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
  }
  var ti = typeof Object.is == "function" ? Object.is : _v;
  function Ul(e, n) {
    if (ti(e, n)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof n != "object" ||
      n === null
    )
      return !1;
    var a = Object.keys(e),
      u = Object.keys(n);
    if (a.length !== u.length) return !1;
    for (u = 0; u < a.length; u++) {
      var f = a[u];
      if (!wi.call(n, f) || !ti(e[f], n[f])) return !1;
    }
    return !0;
  }
  function Bg(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Hg(e, n) {
    var a = Bg(e);
    e = 0;
    for (var u; a; ) {
      if (a.nodeType === 3) {
        if (((u = e + a.textContent.length), e <= n && u >= n))
          return { node: a, offset: n - e };
        e = u;
      }
      t: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break t;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = Bg(a);
    }
  }
  function jg(e, n) {
    return e && n
      ? e === n
        ? !0
        : e && e.nodeType === 3
          ? !1
          : n && n.nodeType === 3
            ? jg(e, n.parentNode)
            : "contains" in e
              ? e.contains(n)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(n) & 16)
                : !1
      : !1;
  }
  function Zg(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var n = oo(e.document); n instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof n.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = n.contentWindow;
      else break;
      n = oo(e.document);
    }
    return n;
  }
  function Ic(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      n &&
      ((n === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        n === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function mv(e, n) {
    var a = Zg(n);
    n = e.focusedElem;
    var u = e.selectionRange;
    if (
      a !== n &&
      n &&
      n.ownerDocument &&
      jg(n.ownerDocument.documentElement, n)
    ) {
      if (u !== null && Ic(n)) {
        if (
          ((e = u.start),
          (a = u.end),
          a === void 0 && (a = e),
          "selectionStart" in n)
        )
          (n.selectionStart = e),
            (n.selectionEnd = Math.min(a, n.value.length));
        else if (
          ((a = ((e = n.ownerDocument || document) && e.defaultView) || window),
          a.getSelection)
        ) {
          a = a.getSelection();
          var f = n.textContent.length,
            g = Math.min(u.start, f);
          (u = u.end === void 0 ? g : Math.min(u.end, f)),
            !a.extend && g > u && ((f = u), (u = g), (g = f)),
            (f = Hg(n, g));
          var p = Hg(n, u);
          f &&
            p &&
            (a.rangeCount !== 1 ||
              a.anchorNode !== f.node ||
              a.anchorOffset !== f.offset ||
              a.focusNode !== p.node ||
              a.focusOffset !== p.offset) &&
            ((e = e.createRange()),
            e.setStart(f.node, f.offset),
            a.removeAllRanges(),
            g > u
              ? (a.addRange(e), a.extend(p.node, p.offset))
              : (e.setEnd(p.node, p.offset), a.addRange(e)));
        }
      }
      for (e = [], a = n; (a = a.parentNode); )
        a.nodeType === 1 &&
          e.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < e.length; n++)
        (a = e[n]),
          (a.element.scrollLeft = a.left),
          (a.element.scrollTop = a.top);
    }
  }
  var yv = ln && "documentMode" in document && 11 >= document.documentMode,
    Er = null,
    Nc = null,
    Xl = null,
    Gc = !1;
  function Kg(e, n, a) {
    var u =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Gc ||
      Er == null ||
      Er !== oo(u) ||
      ((u = Er),
      "selectionStart" in u && Ic(u)
        ? (u = { start: u.selectionStart, end: u.selectionEnd })
        : ((u = (
            (u.ownerDocument && u.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (u = {
            anchorNode: u.anchorNode,
            anchorOffset: u.anchorOffset,
            focusNode: u.focusNode,
            focusOffset: u.focusOffset,
          })),
      (Xl && Ul(Xl, u)) ||
        ((Xl = u),
        (u = Jo(Nc, "onSelect")),
        0 < u.length &&
          ((n = new go("onSelect", "select", null, n, a)),
          e.push({ event: n, listeners: u }),
          (n.target = Er))));
  }
  function Ms(e, n) {
    var a = {};
    return (
      (a[e.toLowerCase()] = n.toLowerCase()),
      (a["Webkit" + e] = "webkit" + n),
      (a["Moz" + e] = "moz" + n),
      a
    );
  }
  var Sr = {
      animationend: Ms("Animation", "AnimationEnd"),
      animationiteration: Ms("Animation", "AnimationIteration"),
      animationstart: Ms("Animation", "AnimationStart"),
      transitionrun: Ms("Transition", "TransitionRun"),
      transitionstart: Ms("Transition", "TransitionStart"),
      transitioncancel: Ms("Transition", "TransitionCancel"),
      transitionend: Ms("Transition", "TransitionEnd"),
    },
    Fc = {},
    qg = {};
  ln &&
    ((qg = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Sr.animationend.animation,
      delete Sr.animationiteration.animation,
      delete Sr.animationstart.animation),
    "TransitionEvent" in window || delete Sr.transitionend.transition);
  function Os(e) {
    if (Fc[e]) return Fc[e];
    if (!Sr[e]) return e;
    var n = Sr[e],
      a;
    for (a in n) if (n.hasOwnProperty(a) && a in qg) return (Fc[e] = n[a]);
    return e;
  }
  var Vg = Os("animationend"),
    Wg = Os("animationiteration"),
    Qg = Os("animationstart"),
    pv = Os("transitionrun"),
    vv = Os("transitionstart"),
    Ev = Os("transitioncancel"),
    Jg = Os("transitionend"),
    $g = new Map(),
    t_ =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
        " ",
      );
  function Di(e, n) {
    $g.set(e, n), As(n, [e]);
  }
  var hi = [],
    xr = 0,
    Uc = 0;
  function yo() {
    for (var e = xr, n = (Uc = xr = 0); n < e; ) {
      var a = hi[n];
      hi[n++] = null;
      var u = hi[n];
      hi[n++] = null;
      var f = hi[n];
      hi[n++] = null;
      var g = hi[n];
      if (((hi[n++] = null), u !== null && f !== null)) {
        var p = u.pending;
        p === null ? (f.next = f) : ((f.next = p.next), (p.next = f)),
          (u.pending = f);
      }
      g !== 0 && e_(a, f, g);
    }
  }
  function po(e, n, a, u) {
    (hi[xr++] = e),
      (hi[xr++] = n),
      (hi[xr++] = a),
      (hi[xr++] = u),
      (Uc |= u),
      (e.lanes |= u),
      (e = e.alternate),
      e !== null && (e.lanes |= u);
  }
  function Xc(e, n, a, u) {
    return po(e, n, a, u), vo(e);
  }
  function Un(e, n) {
    return po(e, null, null, n), vo(e);
  }
  function e_(e, n, a) {
    e.lanes |= a;
    var u = e.alternate;
    u !== null && (u.lanes |= a);
    for (var f = !1, g = e.return; g !== null; )
      (g.childLanes |= a),
        (u = g.alternate),
        u !== null && (u.childLanes |= a),
        g.tag === 22 &&
          ((e = g.stateNode), e === null || e._visibility & 1 || (f = !0)),
        (e = g),
        (g = g.return);
    f &&
      n !== null &&
      e.tag === 3 &&
      ((g = e.stateNode),
      (f = 31 - Re(a)),
      (g = g.hiddenUpdates),
      (e = g[f]),
      e === null ? (g[f] = [n]) : e.push(n),
      (n.lane = a | 536870912));
  }
  function vo(e) {
    if (50 < ca) throw ((ca = 0), (jh = null), Error(s(185)));
    for (var n = e.return; n !== null; ) (e = n), (n = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var Cr = {},
    i_ = new WeakMap();
  function fi(e, n) {
    if (typeof e == "object" && e !== null) {
      var a = i_.get(e);
      return a !== void 0
        ? a
        : ((n = { value: e, source: n, stack: q(n) }), i_.set(e, n), n);
    }
    return { value: e, source: n, stack: q(n) };
  }
  var Tr = [],
    Rr = 0,
    Eo = null,
    So = 0,
    di = [],
    gi = 0,
    Ds = null,
    on = 1,
    un = "";
  function Ls(e, n) {
    (Tr[Rr++] = So), (Tr[Rr++] = Eo), (Eo = e), (So = n);
  }
  function n_(e, n, a) {
    (di[gi++] = on), (di[gi++] = un), (di[gi++] = Ds), (Ds = e);
    var u = on;
    e = un;
    var f = 32 - Re(u) - 1;
    (u &= ~(1 << f)), (a += 1);
    var g = 32 - Re(n) + f;
    if (30 < g) {
      var p = f - (f % 5);
      (g = (u & ((1 << p) - 1)).toString(32)),
        (u >>= p),
        (f -= p),
        (on = (1 << (32 - Re(n) + f)) | (a << f) | u),
        (un = g + e);
    } else (on = (1 << g) | (a << f) | u), (un = e);
  }
  function Yc(e) {
    e.return !== null && (Ls(e, 1), n_(e, 1, 0));
  }
  function kc(e) {
    for (; e === Eo; )
      (Eo = Tr[--Rr]), (Tr[Rr] = null), (So = Tr[--Rr]), (Tr[Rr] = null);
    for (; e === Ds; )
      (Ds = di[--gi]),
        (di[gi] = null),
        (un = di[--gi]),
        (di[gi] = null),
        (on = di[--gi]),
        (di[gi] = null);
  }
  var Fe = null,
    Ee = null,
    Ot = !1,
    Li = null,
    Zi = !1,
    Pc = Error(s(519));
  function zs(e) {
    var n = Error(s(418, ""));
    throw (Pl(fi(n, e)), Pc);
  }
  function s_(e) {
    var n = e.stateNode,
      a = e.type,
      u = e.memoizedProps;
    switch (((n[Ae] = e), (n[Pe] = u), a)) {
      case "dialog":
        bt("cancel", n), bt("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        bt("load", n);
        break;
      case "video":
      case "audio":
        for (a = 0; a < fa.length; a++) bt(fa[a], n);
        break;
      case "source":
        bt("error", n);
        break;
      case "img":
      case "image":
      case "link":
        bt("error", n), bt("load", n);
        break;
      case "details":
        bt("toggle", n);
        break;
      case "input":
        bt("invalid", n),
          vg(
            n,
            u.value,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name,
            !0,
          ),
          ao(n);
        break;
      case "select":
        bt("invalid", n);
        break;
      case "textarea":
        bt("invalid", n), Sg(n, u.value, u.defaultValue, u.children), ao(n);
    }
    (a = u.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      n.textContent === "" + a ||
      u.suppressHydrationWarning === !0 ||
      d0(n.textContent, a)
        ? (u.popover != null && (bt("beforetoggle", n), bt("toggle", n)),
          u.onScroll != null && bt("scroll", n),
          u.onScrollEnd != null && bt("scrollend", n),
          u.onClick != null && (n.onclick = $o),
          (n = !0))
        : (n = !1),
      n || zs(e);
  }
  function r_(e) {
    for (Fe = e.return; Fe; )
      switch (Fe.tag) {
        case 3:
        case 27:
          Zi = !0;
          return;
        case 5:
        case 13:
          Zi = !1;
          return;
        default:
          Fe = Fe.return;
      }
  }
  function Yl(e) {
    if (e !== Fe) return !1;
    if (!Ot) return r_(e), (Ot = !0), !1;
    var n = !1,
      a;
    if (
      ((a = e.tag !== 3 && e.tag !== 27) &&
        ((a = e.tag === 5) &&
          ((a = e.type),
          (a =
            !(a !== "form" && a !== "button") || uf(e.type, e.memoizedProps))),
        (a = !a)),
      a && (n = !0),
      n && Ee && zs(e),
      r_(e),
      e.tag === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(s(317));
      t: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8)
            if (((a = e.data), a === "/$")) {
              if (n === 0) {
                Ee = Ii(e.nextSibling);
                break t;
              }
              n--;
            } else (a !== "$" && a !== "$!" && a !== "$?") || n++;
          e = e.nextSibling;
        }
        Ee = null;
      }
    } else Ee = Fe ? Ii(e.stateNode.nextSibling) : null;
    return !0;
  }
  function kl() {
    (Ee = Fe = null), (Ot = !1);
  }
  function Pl(e) {
    Li === null ? (Li = [e]) : Li.push(e);
  }
  var Bl = Error(s(460)),
    l_ = Error(s(474)),
    Bc = { then: function () {} };
  function a_(e) {
    return (e = e.status), e === "fulfilled" || e === "rejected";
  }
  function xo() {}
  function o_(e, n, a) {
    switch (
      ((a = e[a]),
      a === void 0 ? e.push(n) : a !== n && (n.then(xo, xo), (n = a)),
      n.status)
    ) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw ((e = n.reason), e === Bl ? Error(s(483)) : e);
      default:
        if (typeof n.status == "string") n.then(xo, xo);
        else {
          if (((e = Bt), e !== null && 100 < e.shellSuspendCounter))
            throw Error(s(482));
          (e = n),
            (e.status = "pending"),
            e.then(
              function (u) {
                if (n.status === "pending") {
                  var f = n;
                  (f.status = "fulfilled"), (f.value = u);
                }
              },
              function (u) {
                if (n.status === "pending") {
                  var f = n;
                  (f.status = "rejected"), (f.reason = u);
                }
              },
            );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw ((e = n.reason), e === Bl ? Error(s(483)) : e);
        }
        throw ((Hl = n), Bl);
    }
  }
  var Hl = null;
  function u_() {
    if (Hl === null) throw Error(s(459));
    var e = Hl;
    return (Hl = null), e;
  }
  var br = null,
    jl = 0;
  function Co(e) {
    var n = jl;
    return (jl += 1), br === null && (br = []), o_(br, e, n);
  }
  function Zl(e, n) {
    (n = n.props.ref), (e.ref = n !== void 0 ? n : null);
  }
  function To(e, n) {
    throw n.$$typeof === o
      ? Error(s(525))
      : ((e = Object.prototype.toString.call(n)),
        Error(
          s(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(n).join(", ") + "}"
              : e,
          ),
        ));
  }
  function c_(e) {
    var n = e._init;
    return n(e._payload);
  }
  function h_(e) {
    function n(L, w) {
      if (e) {
        var I = L.deletions;
        I === null ? ((L.deletions = [w]), (L.flags |= 16)) : I.push(w);
      }
    }
    function a(L, w) {
      if (!e) return null;
      for (; w !== null; ) n(L, w), (w = w.sibling);
      return null;
    }
    function u(L) {
      for (var w = new Map(); L !== null; )
        L.key !== null ? w.set(L.key, L) : w.set(L.index, L), (L = L.sibling);
      return w;
    }
    function f(L, w) {
      return (L = Wn(L, w)), (L.index = 0), (L.sibling = null), L;
    }
    function g(L, w, I) {
      return (
        (L.index = I),
        e
          ? ((I = L.alternate),
            I !== null
              ? ((I = I.index), I < w ? ((L.flags |= 33554434), w) : I)
              : ((L.flags |= 33554434), w))
          : ((L.flags |= 1048576), w)
      );
    }
    function p(L) {
      return e && L.alternate === null && (L.flags |= 33554434), L;
    }
    function S(L, w, I, H) {
      return w === null || w.tag !== 6
        ? ((w = Fh(I, L.mode, H)), (w.return = L), w)
        : ((w = f(w, I)), (w.return = L), w);
    }
    function C(L, w, I, H) {
      var et = I.type;
      return et === d
        ? P(L, w, I.props.children, H, I.key)
        : w !== null &&
            (w.elementType === et ||
              (typeof et == "object" &&
                et !== null &&
                et.$$typeof === O &&
                c_(et) === w.type))
          ? ((w = f(w, I.props)), Zl(w, I), (w.return = L), w)
          : ((w = Po(I.type, I.key, I.props, null, L.mode, H)),
            Zl(w, I),
            (w.return = L),
            w);
    }
    function M(L, w, I, H) {
      return w === null ||
        w.tag !== 4 ||
        w.stateNode.containerInfo !== I.containerInfo ||
        w.stateNode.implementation !== I.implementation
        ? ((w = Uh(I, L.mode, H)), (w.return = L), w)
        : ((w = f(w, I.children || [])), (w.return = L), w);
    }
    function P(L, w, I, H, et) {
      return w === null || w.tag !== 7
        ? ((w = Bs(I, L.mode, H, et)), (w.return = L), w)
        : ((w = f(w, I)), (w.return = L), w);
    }
    function K(L, w, I) {
      if (
        (typeof w == "string" && w !== "") ||
        typeof w == "number" ||
        typeof w == "bigint"
      )
        return (w = Fh("" + w, L.mode, I)), (w.return = L), w;
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case c:
            return (
              (I = Po(w.type, w.key, w.props, null, L.mode, I)),
              Zl(I, w),
              (I.return = L),
              I
            );
          case h:
            return (w = Uh(w, L.mode, I)), (w.return = L), w;
          case O:
            var H = w._init;
            return (w = H(w._payload)), K(L, w, I);
        }
        if (tt(w) || j(w))
          return (w = Bs(w, L.mode, I, null)), (w.return = L), w;
        if (typeof w.then == "function") return K(L, Co(w), I);
        if (w.$$typeof === E) return K(L, Xo(L, w), I);
        To(L, w);
      }
      return null;
    }
    function N(L, w, I, H) {
      var et = w !== null ? w.key : null;
      if (
        (typeof I == "string" && I !== "") ||
        typeof I == "number" ||
        typeof I == "bigint"
      )
        return et !== null ? null : S(L, w, "" + I, H);
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case c:
            return I.key === et ? C(L, w, I, H) : null;
          case h:
            return I.key === et ? M(L, w, I, H) : null;
          case O:
            return (et = I._init), (I = et(I._payload)), N(L, w, I, H);
        }
        if (tt(I) || j(I)) return et !== null ? null : P(L, w, I, H, null);
        if (typeof I.then == "function") return N(L, w, Co(I), H);
        if (I.$$typeof === E) return N(L, w, Xo(L, I), H);
        To(L, I);
      }
      return null;
    }
    function k(L, w, I, H, et) {
      if (
        (typeof H == "string" && H !== "") ||
        typeof H == "number" ||
        typeof H == "bigint"
      )
        return (L = L.get(I) || null), S(w, L, "" + H, et);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case c:
            return (
              (L = L.get(H.key === null ? I : H.key) || null), C(w, L, H, et)
            );
          case h:
            return (
              (L = L.get(H.key === null ? I : H.key) || null), M(w, L, H, et)
            );
          case O:
            var Tt = H._init;
            return (H = Tt(H._payload)), k(L, w, I, H, et);
        }
        if (tt(H) || j(H)) return (L = L.get(I) || null), P(w, L, H, et, null);
        if (typeof H.then == "function") return k(L, w, I, Co(H), et);
        if (H.$$typeof === E) return k(L, w, I, Xo(w, H), et);
        To(w, H);
      }
      return null;
    }
    function at(L, w, I, H) {
      for (
        var et = null, Tt = null, ut = w, dt = (w = 0), _e = null;
        ut !== null && dt < I.length;
        dt++
      ) {
        ut.index > dt ? ((_e = ut), (ut = null)) : (_e = ut.sibling);
        var Dt = N(L, ut, I[dt], H);
        if (Dt === null) {
          ut === null && (ut = _e);
          break;
        }
        e && ut && Dt.alternate === null && n(L, ut),
          (w = g(Dt, w, dt)),
          Tt === null ? (et = Dt) : (Tt.sibling = Dt),
          (Tt = Dt),
          (ut = _e);
      }
      if (dt === I.length) return a(L, ut), Ot && Ls(L, dt), et;
      if (ut === null) {
        for (; dt < I.length; dt++)
          (ut = K(L, I[dt], H)),
            ut !== null &&
              ((w = g(ut, w, dt)),
              Tt === null ? (et = ut) : (Tt.sibling = ut),
              (Tt = ut));
        return Ot && Ls(L, dt), et;
      }
      for (ut = u(ut); dt < I.length; dt++)
        (_e = k(ut, L, dt, I[dt], H)),
          _e !== null &&
            (e &&
              _e.alternate !== null &&
              ut.delete(_e.key === null ? dt : _e.key),
            (w = g(_e, w, dt)),
            Tt === null ? (et = _e) : (Tt.sibling = _e),
            (Tt = _e));
      return (
        e &&
          ut.forEach(function (ns) {
            return n(L, ns);
          }),
        Ot && Ls(L, dt),
        et
      );
    }
    function yt(L, w, I, H) {
      if (I == null) throw Error(s(151));
      for (
        var et = null,
          Tt = null,
          ut = w,
          dt = (w = 0),
          _e = null,
          Dt = I.next();
        ut !== null && !Dt.done;
        dt++, Dt = I.next()
      ) {
        ut.index > dt ? ((_e = ut), (ut = null)) : (_e = ut.sibling);
        var ns = N(L, ut, Dt.value, H);
        if (ns === null) {
          ut === null && (ut = _e);
          break;
        }
        e && ut && ns.alternate === null && n(L, ut),
          (w = g(ns, w, dt)),
          Tt === null ? (et = ns) : (Tt.sibling = ns),
          (Tt = ns),
          (ut = _e);
      }
      if (Dt.done) return a(L, ut), Ot && Ls(L, dt), et;
      if (ut === null) {
        for (; !Dt.done; dt++, Dt = I.next())
          (Dt = K(L, Dt.value, H)),
            Dt !== null &&
              ((w = g(Dt, w, dt)),
              Tt === null ? (et = Dt) : (Tt.sibling = Dt),
              (Tt = Dt));
        return Ot && Ls(L, dt), et;
      }
      for (ut = u(ut); !Dt.done; dt++, Dt = I.next())
        (Dt = k(ut, L, dt, Dt.value, H)),
          Dt !== null &&
            (e &&
              Dt.alternate !== null &&
              ut.delete(Dt.key === null ? dt : Dt.key),
            (w = g(Dt, w, dt)),
            Tt === null ? (et = Dt) : (Tt.sibling = Dt),
            (Tt = Dt));
      return (
        e &&
          ut.forEach(function (IE) {
            return n(L, IE);
          }),
        Ot && Ls(L, dt),
        et
      );
    }
    function Jt(L, w, I, H) {
      if (
        (typeof I == "object" &&
          I !== null &&
          I.type === d &&
          I.key === null &&
          (I = I.props.children),
        typeof I == "object" && I !== null)
      ) {
        switch (I.$$typeof) {
          case c:
            t: {
              for (var et = I.key; w !== null; ) {
                if (w.key === et) {
                  if (((et = I.type), et === d)) {
                    if (w.tag === 7) {
                      a(L, w.sibling),
                        (H = f(w, I.props.children)),
                        (H.return = L),
                        (L = H);
                      break t;
                    }
                  } else if (
                    w.elementType === et ||
                    (typeof et == "object" &&
                      et !== null &&
                      et.$$typeof === O &&
                      c_(et) === w.type)
                  ) {
                    a(L, w.sibling),
                      (H = f(w, I.props)),
                      Zl(H, I),
                      (H.return = L),
                      (L = H);
                    break t;
                  }
                  a(L, w);
                  break;
                } else n(L, w);
                w = w.sibling;
              }
              I.type === d
                ? ((H = Bs(I.props.children, L.mode, H, I.key)),
                  (H.return = L),
                  (L = H))
                : ((H = Po(I.type, I.key, I.props, null, L.mode, H)),
                  Zl(H, I),
                  (H.return = L),
                  (L = H));
            }
            return p(L);
          case h:
            t: {
              for (et = I.key; w !== null; ) {
                if (w.key === et)
                  if (
                    w.tag === 4 &&
                    w.stateNode.containerInfo === I.containerInfo &&
                    w.stateNode.implementation === I.implementation
                  ) {
                    a(L, w.sibling),
                      (H = f(w, I.children || [])),
                      (H.return = L),
                      (L = H);
                    break t;
                  } else {
                    a(L, w);
                    break;
                  }
                else n(L, w);
                w = w.sibling;
              }
              (H = Uh(I, L.mode, H)), (H.return = L), (L = H);
            }
            return p(L);
          case O:
            return (et = I._init), (I = et(I._payload)), Jt(L, w, I, H);
        }
        if (tt(I)) return at(L, w, I, H);
        if (j(I)) {
          if (((et = j(I)), typeof et != "function")) throw Error(s(150));
          return (I = et.call(I)), yt(L, w, I, H);
        }
        if (typeof I.then == "function") return Jt(L, w, Co(I), H);
        if (I.$$typeof === E) return Jt(L, w, Xo(L, I), H);
        To(L, I);
      }
      return (typeof I == "string" && I !== "") ||
        typeof I == "number" ||
        typeof I == "bigint"
        ? ((I = "" + I),
          w !== null && w.tag === 6
            ? (a(L, w.sibling), (H = f(w, I)), (H.return = L), (L = H))
            : (a(L, w), (H = Fh(I, L.mode, H)), (H.return = L), (L = H)),
          p(L))
        : a(L, w);
    }
    return function (L, w, I, H) {
      try {
        jl = 0;
        var et = Jt(L, w, I, H);
        return (br = null), et;
      } catch (ut) {
        if (ut === Bl) throw ut;
        var Tt = pi(29, ut, null, L.mode);
        return (Tt.lanes = H), (Tt.return = L), Tt;
      } finally {
      }
    };
  }
  var Is = h_(!0),
    f_ = h_(!1),
    Ar = mt(null),
    Ro = mt(0);
  function d_(e, n) {
    (e = En), vt(Ro, e), vt(Ar, n), (En = e | n.baseLanes);
  }
  function Hc() {
    vt(Ro, En), vt(Ar, Ar.current);
  }
  function jc() {
    (En = Ro.current), Ut(Ar), Ut(Ro);
  }
  var _i = mt(null),
    Ki = null;
  function Xn(e) {
    var n = e.alternate;
    vt(le, le.current & 1),
      vt(_i, e),
      Ki === null &&
        (n === null || Ar.current !== null || n.memoizedState !== null) &&
        (Ki = e);
  }
  function g_(e) {
    if (e.tag === 22) {
      if ((vt(le, le.current), vt(_i, e), Ki === null)) {
        var n = e.alternate;
        n !== null && n.memoizedState !== null && (Ki = e);
      }
    } else Yn();
  }
  function Yn() {
    vt(le, le.current), vt(_i, _i.current);
  }
  function cn(e) {
    Ut(_i), Ki === e && (Ki = null), Ut(le);
  }
  var le = mt(0);
  function bo(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var a = n.memoizedState;
        if (
          a !== null &&
          ((a = a.dehydrated), a === null || a.data === "$?" || a.data === "$!")
        )
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return null;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
    return null;
  }
  var Sv =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              n = (this.signal = {
                aborted: !1,
                addEventListener: function (a, u) {
                  e.push(u);
                },
              });
            this.abort = function () {
              (n.aborted = !0),
                e.forEach(function (a) {
                  return a();
                });
            };
          },
    xv = r.unstable_scheduleCallback,
    Cv = r.unstable_NormalPriority,
    ae = {
      $$typeof: E,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Zc() {
    return { controller: new Sv(), data: new Map(), refCount: 0 };
  }
  function Kl(e) {
    e.refCount--,
      e.refCount === 0 &&
        xv(Cv, function () {
          e.controller.abort();
        });
  }
  var ql = null,
    Kc = 0,
    wr = 0,
    Mr = null;
  function Tv(e, n) {
    if (ql === null) {
      var a = (ql = []);
      (Kc = 0),
        (wr = $h()),
        (Mr = {
          status: "pending",
          value: void 0,
          then: function (u) {
            a.push(u);
          },
        });
    }
    return Kc++, n.then(__, __), n;
  }
  function __() {
    if (--Kc === 0 && ql !== null) {
      Mr !== null && (Mr.status = "fulfilled");
      var e = ql;
      (ql = null), (wr = 0), (Mr = null);
      for (var n = 0; n < e.length; n++) (0, e[n])();
    }
  }
  function Rv(e, n) {
    var a = [],
      u = {
        status: "pending",
        value: null,
        reason: null,
        then: function (f) {
          a.push(f);
        },
      };
    return (
      e.then(
        function () {
          (u.status = "fulfilled"), (u.value = n);
          for (var f = 0; f < a.length; f++) (0, a[f])(n);
        },
        function (f) {
          for (u.status = "rejected", u.reason = f, f = 0; f < a.length; f++)
            (0, a[f])(void 0);
        },
      ),
      u
    );
  }
  var m_ = F.S;
  F.S = function (e, n) {
    typeof n == "object" &&
      n !== null &&
      typeof n.then == "function" &&
      Tv(e, n),
      m_ !== null && m_(e, n);
  };
  var Ns = mt(null);
  function qc() {
    var e = Ns.current;
    return e !== null ? e : Bt.pooledCache;
  }
  function Ao(e, n) {
    n === null ? vt(Ns, Ns.current) : vt(Ns, n.pool);
  }
  function y_() {
    var e = qc();
    return e === null ? null : { parent: ae._currentValue, pool: e };
  }
  var kn = 0,
    Ct = null,
    Xt = null,
    ie = null,
    wo = !1,
    Or = !1,
    Gs = !1,
    Mo = 0,
    Vl = 0,
    Dr = null,
    bv = 0;
  function ee() {
    throw Error(s(321));
  }
  function Vc(e, n) {
    if (n === null) return !1;
    for (var a = 0; a < n.length && a < e.length; a++)
      if (!ti(e[a], n[a])) return !1;
    return !0;
  }
  function Wc(e, n, a, u, f, g) {
    return (
      (kn = g),
      (Ct = n),
      (n.memoizedState = null),
      (n.updateQueue = null),
      (n.lanes = 0),
      (F.H = e === null || e.memoizedState === null ? Fs : Pn),
      (Gs = !1),
      (g = a(u, f)),
      (Gs = !1),
      Or && (g = v_(n, a, u, f)),
      p_(e),
      g
    );
  }
  function p_(e) {
    F.H = qi;
    var n = Xt !== null && Xt.next !== null;
    if (((kn = 0), (ie = Xt = Ct = null), (wo = !1), (Vl = 0), (Dr = null), n))
      throw Error(s(300));
    e === null ||
      de ||
      ((e = e.dependencies), e !== null && Uo(e) && (de = !0));
  }
  function v_(e, n, a, u) {
    Ct = e;
    var f = 0;
    do {
      if ((Or && (Dr = null), (Vl = 0), (Or = !1), 25 <= f))
        throw Error(s(301));
      if (((f += 1), (ie = Xt = null), e.updateQueue != null)) {
        var g = e.updateQueue;
        (g.lastEffect = null),
          (g.events = null),
          (g.stores = null),
          g.memoCache != null && (g.memoCache.index = 0);
      }
      (F.H = Us), (g = n(a, u));
    } while (Or);
    return g;
  }
  function Av() {
    var e = F.H,
      n = e.useState()[0];
    return (
      (n = typeof n.then == "function" ? Wl(n) : n),
      (e = e.useState()[0]),
      (Xt !== null ? Xt.memoizedState : null) !== e && (Ct.flags |= 1024),
      n
    );
  }
  function Qc() {
    var e = Mo !== 0;
    return (Mo = 0), e;
  }
  function Jc(e, n, a) {
    (n.updateQueue = e.updateQueue), (n.flags &= -2053), (e.lanes &= ~a);
  }
  function $c(e) {
    if (wo) {
      for (e = e.memoizedState; e !== null; ) {
        var n = e.queue;
        n !== null && (n.pending = null), (e = e.next);
      }
      wo = !1;
    }
    (kn = 0), (ie = Xt = Ct = null), (Or = !1), (Vl = Mo = 0), (Dr = null);
  }
  function He() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return ie === null ? (Ct.memoizedState = ie = e) : (ie = ie.next = e), ie;
  }
  function ne() {
    if (Xt === null) {
      var e = Ct.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Xt.next;
    var n = ie === null ? Ct.memoizedState : ie.next;
    if (n !== null) (ie = n), (Xt = e);
    else {
      if (e === null)
        throw Ct.alternate === null ? Error(s(467)) : Error(s(310));
      (Xt = e),
        (e = {
          memoizedState: Xt.memoizedState,
          baseState: Xt.baseState,
          baseQueue: Xt.baseQueue,
          queue: Xt.queue,
          next: null,
        }),
        ie === null ? (Ct.memoizedState = ie = e) : (ie = ie.next = e);
    }
    return ie;
  }
  var Oo;
  Oo = function () {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function Wl(e) {
    var n = Vl;
    return (
      (Vl += 1),
      Dr === null && (Dr = []),
      (e = o_(Dr, e, n)),
      (n = Ct),
      (ie === null ? n.memoizedState : ie.next) === null &&
        ((n = n.alternate),
        (F.H = n === null || n.memoizedState === null ? Fs : Pn)),
      e
    );
  }
  function Do(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Wl(e);
      if (e.$$typeof === E) return we(e);
    }
    throw Error(s(438, String(e)));
  }
  function th(e) {
    var n = null,
      a = Ct.updateQueue;
    if ((a !== null && (n = a.memoCache), n == null)) {
      var u = Ct.alternate;
      u !== null &&
        ((u = u.updateQueue),
        u !== null &&
          ((u = u.memoCache),
          u != null &&
            (n = {
              data: u.data.map(function (f) {
                return f.slice();
              }),
              index: 0,
            })));
    }
    if (
      (n == null && (n = { data: [], index: 0 }),
      a === null && ((a = Oo()), (Ct.updateQueue = a)),
      (a.memoCache = n),
      (a = n.data[n.index]),
      a === void 0)
    )
      for (a = n.data[n.index] = Array(e), u = 0; u < e; u++) a[u] = z;
    return n.index++, a;
  }
  function hn(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Lo(e) {
    var n = ne();
    return eh(n, Xt, e);
  }
  function eh(e, n, a) {
    var u = e.queue;
    if (u === null) throw Error(s(311));
    u.lastRenderedReducer = a;
    var f = e.baseQueue,
      g = u.pending;
    if (g !== null) {
      if (f !== null) {
        var p = f.next;
        (f.next = g.next), (g.next = p);
      }
      (n.baseQueue = f = g), (u.pending = null);
    }
    if (((g = e.baseState), f === null)) e.memoizedState = g;
    else {
      n = f.next;
      var S = (p = null),
        C = null,
        M = n,
        P = !1;
      do {
        var K = M.lane & -536870913;
        if (K !== M.lane ? (wt & K) === K : (kn & K) === K) {
          var N = M.revertLane;
          if (N === 0)
            C !== null &&
              (C = C.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: M.action,
                  hasEagerState: M.hasEagerState,
                  eagerState: M.eagerState,
                  next: null,
                }),
              K === wr && (P = !0);
          else if ((kn & N) === N) {
            (M = M.next), N === wr && (P = !0);
            continue;
          } else
            (K = {
              lane: 0,
              revertLane: M.revertLane,
              action: M.action,
              hasEagerState: M.hasEagerState,
              eagerState: M.eagerState,
              next: null,
            }),
              C === null ? ((S = C = K), (p = g)) : (C = C.next = K),
              (Ct.lanes |= N),
              (Qn |= N);
          (K = M.action),
            Gs && a(g, K),
            (g = M.hasEagerState ? M.eagerState : a(g, K));
        } else
          (N = {
            lane: K,
            revertLane: M.revertLane,
            action: M.action,
            hasEagerState: M.hasEagerState,
            eagerState: M.eagerState,
            next: null,
          }),
            C === null ? ((S = C = N), (p = g)) : (C = C.next = N),
            (Ct.lanes |= K),
            (Qn |= K);
        M = M.next;
      } while (M !== null && M !== n);
      if (
        (C === null ? (p = g) : (C.next = S),
        !ti(g, e.memoizedState) && ((de = !0), P && ((a = Mr), a !== null)))
      )
        throw a;
      (e.memoizedState = g),
        (e.baseState = p),
        (e.baseQueue = C),
        (u.lastRenderedState = g);
    }
    return f === null && (u.lanes = 0), [e.memoizedState, u.dispatch];
  }
  function ih(e) {
    var n = ne(),
      a = n.queue;
    if (a === null) throw Error(s(311));
    a.lastRenderedReducer = e;
    var u = a.dispatch,
      f = a.pending,
      g = n.memoizedState;
    if (f !== null) {
      a.pending = null;
      var p = (f = f.next);
      do (g = e(g, p.action)), (p = p.next);
      while (p !== f);
      ti(g, n.memoizedState) || (de = !0),
        (n.memoizedState = g),
        n.baseQueue === null && (n.baseState = g),
        (a.lastRenderedState = g);
    }
    return [g, u];
  }
  function E_(e, n, a) {
    var u = Ct,
      f = ne(),
      g = Ot;
    if (g) {
      if (a === void 0) throw Error(s(407));
      a = a();
    } else a = n();
    var p = !ti((Xt || f).memoizedState, a);
    if (
      (p && ((f.memoizedState = a), (de = !0)),
      (f = f.queue),
      rh(C_.bind(null, u, f, e), [e]),
      f.getSnapshot !== n || p || (ie !== null && ie.memoizedState.tag & 1))
    ) {
      if (
        ((u.flags |= 2048),
        Lr(9, x_.bind(null, u, f, a, n), { destroy: void 0 }, null),
        Bt === null)
      )
        throw Error(s(349));
      g || (kn & 60) !== 0 || S_(u, n, a);
    }
    return a;
  }
  function S_(e, n, a) {
    (e.flags |= 16384),
      (e = { getSnapshot: n, value: a }),
      (n = Ct.updateQueue),
      n === null
        ? ((n = Oo()), (Ct.updateQueue = n), (n.stores = [e]))
        : ((a = n.stores), a === null ? (n.stores = [e]) : a.push(e));
  }
  function x_(e, n, a, u) {
    (n.value = a), (n.getSnapshot = u), T_(n) && R_(e);
  }
  function C_(e, n, a) {
    return a(function () {
      T_(n) && R_(e);
    });
  }
  function T_(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var a = n();
      return !ti(e, a);
    } catch {
      return !0;
    }
  }
  function R_(e) {
    var n = Un(e, 2);
    n !== null && Ue(n, e, 2);
  }
  function nh(e) {
    var n = He();
    if (typeof e == "function") {
      var a = e;
      if (((e = a()), Gs)) {
        ai(!0);
        try {
          a();
        } finally {
          ai(!1);
        }
      }
    }
    return (
      (n.memoizedState = n.baseState = e),
      (n.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: hn,
        lastRenderedState: e,
      }),
      n
    );
  }
  function b_(e, n, a, u) {
    return (e.baseState = a), eh(e, Xt, typeof u == "function" ? u : hn);
  }
  function wv(e, n, a, u, f) {
    if (No(e)) throw Error(s(485));
    if (((e = n.action), e !== null)) {
      var g = {
        payload: f,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (p) {
          g.listeners.push(p);
        },
      };
      F.T !== null ? a(!0) : (g.isTransition = !1),
        u(g),
        (a = n.pending),
        a === null
          ? ((g.next = n.pending = g), A_(n, g))
          : ((g.next = a.next), (n.pending = a.next = g));
    }
  }
  function A_(e, n) {
    var a = n.action,
      u = n.payload,
      f = e.state;
    if (n.isTransition) {
      var g = F.T,
        p = {};
      F.T = p;
      try {
        var S = a(f, u),
          C = F.S;
        C !== null && C(p, S), w_(e, n, S);
      } catch (M) {
        sh(e, n, M);
      } finally {
        F.T = g;
      }
    } else
      try {
        (g = a(f, u)), w_(e, n, g);
      } catch (M) {
        sh(e, n, M);
      }
  }
  function w_(e, n, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (u) {
            M_(e, n, u);
          },
          function (u) {
            return sh(e, n, u);
          },
        )
      : M_(e, n, a);
  }
  function M_(e, n, a) {
    (n.status = "fulfilled"),
      (n.value = a),
      O_(n),
      (e.state = a),
      (n = e.pending),
      n !== null &&
        ((a = n.next),
        a === n ? (e.pending = null) : ((a = a.next), (n.next = a), A_(e, a)));
  }
  function sh(e, n, a) {
    var u = e.pending;
    if (((e.pending = null), u !== null)) {
      u = u.next;
      do (n.status = "rejected"), (n.reason = a), O_(n), (n = n.next);
      while (n !== u);
    }
    e.action = null;
  }
  function O_(e) {
    e = e.listeners;
    for (var n = 0; n < e.length; n++) (0, e[n])();
  }
  function D_(e, n) {
    return n;
  }
  function L_(e, n) {
    if (Ot) {
      var a = Bt.formState;
      if (a !== null) {
        t: {
          var u = Ct;
          if (Ot) {
            if (Ee) {
              e: {
                for (var f = Ee, g = Zi; f.nodeType !== 8; ) {
                  if (!g) {
                    f = null;
                    break e;
                  }
                  if (((f = Ii(f.nextSibling)), f === null)) {
                    f = null;
                    break e;
                  }
                }
                (g = f.data), (f = g === "F!" || g === "F" ? f : null);
              }
              if (f) {
                (Ee = Ii(f.nextSibling)), (u = f.data === "F!");
                break t;
              }
            }
            zs(u);
          }
          u = !1;
        }
        u && (n = a[0]);
      }
    }
    return (
      (a = He()),
      (a.memoizedState = a.baseState = n),
      (u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: D_,
        lastRenderedState: n,
      }),
      (a.queue = u),
      (a = W_.bind(null, Ct, u)),
      (u.dispatch = a),
      (u = nh(!1)),
      (g = ch.bind(null, Ct, !1, u.queue)),
      (u = He()),
      (f = { state: n, dispatch: null, action: e, pending: null }),
      (u.queue = f),
      (a = wv.bind(null, Ct, f, g, a)),
      (f.dispatch = a),
      (u.memoizedState = e),
      [n, a, !1]
    );
  }
  function z_(e) {
    var n = ne();
    return I_(n, Xt, e);
  }
  function I_(e, n, a) {
    (n = eh(e, n, D_)[0]),
      (e = Lo(hn)[0]),
      (n =
        typeof n == "object" && n !== null && typeof n.then == "function"
          ? Wl(n)
          : n);
    var u = ne(),
      f = u.queue,
      g = f.dispatch;
    return (
      a !== u.memoizedState &&
        ((Ct.flags |= 2048),
        Lr(9, Mv.bind(null, f, a), { destroy: void 0 }, null)),
      [n, g, e]
    );
  }
  function Mv(e, n) {
    e.action = n;
  }
  function N_(e) {
    var n = ne(),
      a = Xt;
    if (a !== null) return I_(n, a, e);
    ne(), (n = n.memoizedState), (a = ne());
    var u = a.queue.dispatch;
    return (a.memoizedState = e), [n, u, !1];
  }
  function Lr(e, n, a, u) {
    return (
      (e = { tag: e, create: n, inst: a, deps: u, next: null }),
      (n = Ct.updateQueue),
      n === null && ((n = Oo()), (Ct.updateQueue = n)),
      (a = n.lastEffect),
      a === null
        ? (n.lastEffect = e.next = e)
        : ((u = a.next), (a.next = e), (e.next = u), (n.lastEffect = e)),
      e
    );
  }
  function G_() {
    return ne().memoizedState;
  }
  function zo(e, n, a, u) {
    var f = He();
    (Ct.flags |= e),
      (f.memoizedState = Lr(
        1 | n,
        a,
        { destroy: void 0 },
        u === void 0 ? null : u,
      ));
  }
  function Io(e, n, a, u) {
    var f = ne();
    u = u === void 0 ? null : u;
    var g = f.memoizedState.inst;
    Xt !== null && u !== null && Vc(u, Xt.memoizedState.deps)
      ? (f.memoizedState = Lr(n, a, g, u))
      : ((Ct.flags |= e), (f.memoizedState = Lr(1 | n, a, g, u)));
  }
  function F_(e, n) {
    zo(8390656, 8, e, n);
  }
  function rh(e, n) {
    Io(2048, 8, e, n);
  }
  function U_(e, n) {
    return Io(4, 2, e, n);
  }
  function X_(e, n) {
    return Io(4, 4, e, n);
  }
  function Y_(e, n) {
    if (typeof n == "function") {
      e = e();
      var a = n(e);
      return function () {
        typeof a == "function" ? a() : n(null);
      };
    }
    if (n != null)
      return (
        (e = e()),
        (n.current = e),
        function () {
          n.current = null;
        }
      );
  }
  function k_(e, n, a) {
    (a = a != null ? a.concat([e]) : null), Io(4, 4, Y_.bind(null, n, e), a);
  }
  function lh() {}
  function P_(e, n) {
    var a = ne();
    n = n === void 0 ? null : n;
    var u = a.memoizedState;
    return n !== null && Vc(n, u[1]) ? u[0] : ((a.memoizedState = [e, n]), e);
  }
  function B_(e, n) {
    var a = ne();
    n = n === void 0 ? null : n;
    var u = a.memoizedState;
    if (n !== null && Vc(n, u[1])) return u[0];
    if (((u = e()), Gs)) {
      ai(!0);
      try {
        e();
      } finally {
        ai(!1);
      }
    }
    return (a.memoizedState = [u, n]), u;
  }
  function ah(e, n, a) {
    return a === void 0 || (kn & 1073741824) !== 0
      ? (e.memoizedState = n)
      : ((e.memoizedState = a), (e = jm()), (Ct.lanes |= e), (Qn |= e), a);
  }
  function H_(e, n, a, u) {
    return ti(a, n)
      ? a
      : Ar.current !== null
        ? ((e = ah(e, a, u)), ti(e, n) || (de = !0), e)
        : (kn & 42) === 0
          ? ((de = !0), (e.memoizedState = a))
          : ((e = jm()), (Ct.lanes |= e), (Qn |= e), n);
  }
  function j_(e, n, a, u, f) {
    var g = J.p;
    J.p = g !== 0 && 8 > g ? g : 8;
    var p = F.T,
      S = {};
    (F.T = S), ch(e, !1, n, a);
    try {
      var C = f(),
        M = F.S;
      if (
        (M !== null && M(S, C),
        C !== null && typeof C == "object" && typeof C.then == "function")
      ) {
        var P = Rv(C, u);
        Ql(e, n, P, si(e));
      } else Ql(e, n, u, si(e));
    } catch (K) {
      Ql(e, n, { then: function () {}, status: "rejected", reason: K }, si());
    } finally {
      (J.p = g), (F.T = p);
    }
  }
  function Ov() {}
  function oh(e, n, a, u) {
    if (e.tag !== 5) throw Error(s(476));
    var f = Z_(e).queue;
    j_(
      e,
      f,
      n,
      lt,
      a === null
        ? Ov
        : function () {
            return K_(e), a(u);
          },
    );
  }
  function Z_(e) {
    var n = e.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: lt,
      baseState: lt,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: hn,
        lastRenderedState: lt,
      },
      next: null,
    };
    var a = {};
    return (
      (n.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: hn,
          lastRenderedState: a,
        },
        next: null,
      }),
      (e.memoizedState = n),
      (e = e.alternate),
      e !== null && (e.memoizedState = n),
      n
    );
  }
  function K_(e) {
    var n = Z_(e).next.queue;
    Ql(e, n, {}, si());
  }
  function uh() {
    return we(ya);
  }
  function q_() {
    return ne().memoizedState;
  }
  function V_() {
    return ne().memoizedState;
  }
  function Dv(e) {
    for (var n = e.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var a = si();
          e = jn(a);
          var u = Zn(n, e, a);
          u !== null && (Ue(u, n, a), ta(u, n, a)),
            (n = { cache: Zc() }),
            (e.payload = n);
          return;
      }
      n = n.return;
    }
  }
  function Lv(e, n, a) {
    var u = si();
    (a = {
      lane: u,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      No(e)
        ? Q_(n, a)
        : ((a = Xc(e, n, a, u)), a !== null && (Ue(a, e, u), J_(a, n, u)));
  }
  function W_(e, n, a) {
    var u = si();
    Ql(e, n, a, u);
  }
  function Ql(e, n, a, u) {
    var f = {
      lane: u,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (No(e)) Q_(n, f);
    else {
      var g = e.alternate;
      if (
        e.lanes === 0 &&
        (g === null || g.lanes === 0) &&
        ((g = n.lastRenderedReducer), g !== null)
      )
        try {
          var p = n.lastRenderedState,
            S = g(p, a);
          if (((f.hasEagerState = !0), (f.eagerState = S), ti(S, p)))
            return po(e, n, f, 0), Bt === null && yo(), !1;
        } catch {
        } finally {
        }
      if (((a = Xc(e, n, f, u)), a !== null))
        return Ue(a, e, u), J_(a, n, u), !0;
    }
    return !1;
  }
  function ch(e, n, a, u) {
    if (
      ((u = {
        lane: 2,
        revertLane: $h(),
        action: u,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      No(e))
    ) {
      if (n) throw Error(s(479));
    } else (n = Xc(e, a, u, 2)), n !== null && Ue(n, e, 2);
  }
  function No(e) {
    var n = e.alternate;
    return e === Ct || (n !== null && n === Ct);
  }
  function Q_(e, n) {
    Or = wo = !0;
    var a = e.pending;
    a === null ? (n.next = n) : ((n.next = a.next), (a.next = n)),
      (e.pending = n);
  }
  function J_(e, n, a) {
    if ((a & 4194176) !== 0) {
      var u = n.lanes;
      (u &= e.pendingLanes), (a |= u), (n.lanes = a), he(e, a);
    }
  }
  var qi = {
    readContext: we,
    use: Do,
    useCallback: ee,
    useContext: ee,
    useEffect: ee,
    useImperativeHandle: ee,
    useLayoutEffect: ee,
    useInsertionEffect: ee,
    useMemo: ee,
    useReducer: ee,
    useRef: ee,
    useState: ee,
    useDebugValue: ee,
    useDeferredValue: ee,
    useTransition: ee,
    useSyncExternalStore: ee,
    useId: ee,
  };
  (qi.useCacheRefresh = ee),
    (qi.useMemoCache = ee),
    (qi.useHostTransitionStatus = ee),
    (qi.useFormState = ee),
    (qi.useActionState = ee),
    (qi.useOptimistic = ee);
  var Fs = {
    readContext: we,
    use: Do,
    useCallback: function (e, n) {
      return (He().memoizedState = [e, n === void 0 ? null : n]), e;
    },
    useContext: we,
    useEffect: F_,
    useImperativeHandle: function (e, n, a) {
      (a = a != null ? a.concat([e]) : null),
        zo(4194308, 4, Y_.bind(null, n, e), a);
    },
    useLayoutEffect: function (e, n) {
      return zo(4194308, 4, e, n);
    },
    useInsertionEffect: function (e, n) {
      zo(4, 2, e, n);
    },
    useMemo: function (e, n) {
      var a = He();
      n = n === void 0 ? null : n;
      var u = e();
      if (Gs) {
        ai(!0);
        try {
          e();
        } finally {
          ai(!1);
        }
      }
      return (a.memoizedState = [u, n]), u;
    },
    useReducer: function (e, n, a) {
      var u = He();
      if (a !== void 0) {
        var f = a(n);
        if (Gs) {
          ai(!0);
          try {
            a(n);
          } finally {
            ai(!1);
          }
        }
      } else f = n;
      return (
        (u.memoizedState = u.baseState = f),
        (e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: f,
        }),
        (u.queue = e),
        (e = e.dispatch = Lv.bind(null, Ct, e)),
        [u.memoizedState, e]
      );
    },
    useRef: function (e) {
      var n = He();
      return (e = { current: e }), (n.memoizedState = e);
    },
    useState: function (e) {
      e = nh(e);
      var n = e.queue,
        a = W_.bind(null, Ct, n);
      return (n.dispatch = a), [e.memoizedState, a];
    },
    useDebugValue: lh,
    useDeferredValue: function (e, n) {
      var a = He();
      return ah(a, e, n);
    },
    useTransition: function () {
      var e = nh(!1);
      return (
        (e = j_.bind(null, Ct, e.queue, !0, !1)),
        (He().memoizedState = e),
        [!1, e]
      );
    },
    useSyncExternalStore: function (e, n, a) {
      var u = Ct,
        f = He();
      if (Ot) {
        if (a === void 0) throw Error(s(407));
        a = a();
      } else {
        if (((a = n()), Bt === null)) throw Error(s(349));
        (wt & 60) !== 0 || S_(u, n, a);
      }
      f.memoizedState = a;
      var g = { value: a, getSnapshot: n };
      return (
        (f.queue = g),
        F_(C_.bind(null, u, g, e), [e]),
        (u.flags |= 2048),
        Lr(9, x_.bind(null, u, g, a, n), { destroy: void 0 }, null),
        a
      );
    },
    useId: function () {
      var e = He(),
        n = Bt.identifierPrefix;
      if (Ot) {
        var a = un,
          u = on;
        (a = (u & ~(1 << (32 - Re(u) - 1))).toString(32) + a),
          (n = ":" + n + "R" + a),
          (a = Mo++),
          0 < a && (n += "H" + a.toString(32)),
          (n += ":");
      } else (a = bv++), (n = ":" + n + "r" + a.toString(32) + ":");
      return (e.memoizedState = n);
    },
    useCacheRefresh: function () {
      return (He().memoizedState = Dv.bind(null, Ct));
    },
  };
  (Fs.useMemoCache = th),
    (Fs.useHostTransitionStatus = uh),
    (Fs.useFormState = L_),
    (Fs.useActionState = L_),
    (Fs.useOptimistic = function (e) {
      var n = He();
      n.memoizedState = n.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null,
      };
      return (
        (n.queue = a), (n = ch.bind(null, Ct, !0, a)), (a.dispatch = n), [e, n]
      );
    });
  var Pn = {
    readContext: we,
    use: Do,
    useCallback: P_,
    useContext: we,
    useEffect: rh,
    useImperativeHandle: k_,
    useInsertionEffect: U_,
    useLayoutEffect: X_,
    useMemo: B_,
    useReducer: Lo,
    useRef: G_,
    useState: function () {
      return Lo(hn);
    },
    useDebugValue: lh,
    useDeferredValue: function (e, n) {
      var a = ne();
      return H_(a, Xt.memoizedState, e, n);
    },
    useTransition: function () {
      var e = Lo(hn)[0],
        n = ne().memoizedState;
      return [typeof e == "boolean" ? e : Wl(e), n];
    },
    useSyncExternalStore: E_,
    useId: q_,
  };
  (Pn.useCacheRefresh = V_),
    (Pn.useMemoCache = th),
    (Pn.useHostTransitionStatus = uh),
    (Pn.useFormState = z_),
    (Pn.useActionState = z_),
    (Pn.useOptimistic = function (e, n) {
      var a = ne();
      return b_(a, Xt, e, n);
    });
  var Us = {
    readContext: we,
    use: Do,
    useCallback: P_,
    useContext: we,
    useEffect: rh,
    useImperativeHandle: k_,
    useInsertionEffect: U_,
    useLayoutEffect: X_,
    useMemo: B_,
    useReducer: ih,
    useRef: G_,
    useState: function () {
      return ih(hn);
    },
    useDebugValue: lh,
    useDeferredValue: function (e, n) {
      var a = ne();
      return Xt === null ? ah(a, e, n) : H_(a, Xt.memoizedState, e, n);
    },
    useTransition: function () {
      var e = ih(hn)[0],
        n = ne().memoizedState;
      return [typeof e == "boolean" ? e : Wl(e), n];
    },
    useSyncExternalStore: E_,
    useId: q_,
  };
  (Us.useCacheRefresh = V_),
    (Us.useMemoCache = th),
    (Us.useHostTransitionStatus = uh),
    (Us.useFormState = N_),
    (Us.useActionState = N_),
    (Us.useOptimistic = function (e, n) {
      var a = ne();
      return Xt !== null
        ? b_(a, Xt, e, n)
        : ((a.baseState = e), [e, a.queue.dispatch]);
    });
  function hh(e, n, a, u) {
    (n = e.memoizedState),
      (a = a(u, n)),
      (a = a == null ? n : V({}, n, a)),
      (e.memoizedState = a),
      e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var fh = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? W(e) === e : !1;
    },
    enqueueSetState: function (e, n, a) {
      e = e._reactInternals;
      var u = si(),
        f = jn(u);
      (f.payload = n),
        a != null && (f.callback = a),
        (n = Zn(e, f, u)),
        n !== null && (Ue(n, e, u), ta(n, e, u));
    },
    enqueueReplaceState: function (e, n, a) {
      e = e._reactInternals;
      var u = si(),
        f = jn(u);
      (f.tag = 1),
        (f.payload = n),
        a != null && (f.callback = a),
        (n = Zn(e, f, u)),
        n !== null && (Ue(n, e, u), ta(n, e, u));
    },
    enqueueForceUpdate: function (e, n) {
      e = e._reactInternals;
      var a = si(),
        u = jn(a);
      (u.tag = 2),
        n != null && (u.callback = n),
        (n = Zn(e, u, a)),
        n !== null && (Ue(n, e, a), ta(n, e, a));
    },
  };
  function $_(e, n, a, u, f, g, p) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(u, g, p)
        : n.prototype && n.prototype.isPureReactComponent
          ? !Ul(a, u) || !Ul(f, g)
          : !0
    );
  }
  function tm(e, n, a, u) {
    (e = n.state),
      typeof n.componentWillReceiveProps == "function" &&
        n.componentWillReceiveProps(a, u),
      typeof n.UNSAFE_componentWillReceiveProps == "function" &&
        n.UNSAFE_componentWillReceiveProps(a, u),
      n.state !== e && fh.enqueueReplaceState(n, n.state, null);
  }
  function Xs(e, n) {
    var a = n;
    if ("ref" in n) {
      a = {};
      for (var u in n) u !== "ref" && (a[u] = n[u]);
    }
    if ((e = e.defaultProps)) {
      a === n && (a = V({}, a));
      for (var f in e) a[f] === void 0 && (a[f] = e[f]);
    }
    return a;
  }
  var Go =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var n = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == "object" &&
                e !== null &&
                typeof e.message == "string"
                  ? String(e.message)
                  : String(e),
              error: e,
            });
            if (!window.dispatchEvent(n)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", e);
            return;
          }
          console.error(e);
        };
  function em(e) {
    Go(e);
  }
  function im(e) {
    console.error(e);
  }
  function nm(e) {
    Go(e);
  }
  function Fo(e, n) {
    try {
      var a = e.onUncaughtError;
      a(n.value, { componentStack: n.stack });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function sm(e, n, a) {
    try {
      var u = e.onCaughtError;
      u(a.value, {
        componentStack: a.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null,
      });
    } catch (f) {
      setTimeout(function () {
        throw f;
      });
    }
  }
  function dh(e, n, a) {
    return (
      (a = jn(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        Fo(e, n);
      }),
      a
    );
  }
  function rm(e) {
    return (e = jn(e)), (e.tag = 3), e;
  }
  function lm(e, n, a, u) {
    var f = a.type.getDerivedStateFromError;
    if (typeof f == "function") {
      var g = u.value;
      (e.payload = function () {
        return f(g);
      }),
        (e.callback = function () {
          sm(n, a, u);
        });
    }
    var p = a.stateNode;
    p !== null &&
      typeof p.componentDidCatch == "function" &&
      (e.callback = function () {
        sm(n, a, u),
          typeof f != "function" &&
            (Jn === null ? (Jn = new Set([this])) : Jn.add(this));
        var S = u.stack;
        this.componentDidCatch(u.value, {
          componentStack: S !== null ? S : "",
        });
      });
  }
  function zv(e, n, a, u, f) {
    if (
      ((a.flags |= 32768),
      u !== null && typeof u == "object" && typeof u.then == "function")
    ) {
      if (
        ((n = a.alternate),
        n !== null && $l(n, a, f, !0),
        (a = _i.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 13:
            return (
              Ki === null ? qh() : a.alternate === null && Qt === 0 && (Qt = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = f),
              u === Bc
                ? (a.flags |= 16384)
                : ((n = a.updateQueue),
                  n === null ? (a.updateQueue = new Set([u])) : n.add(u),
                  Wh(e, u, f)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              u === Bc
                ? (a.flags |= 16384)
                : ((n = a.updateQueue),
                  n === null
                    ? ((n = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([u]),
                      }),
                      (a.updateQueue = n))
                    : ((a = n.retryQueue),
                      a === null ? (n.retryQueue = new Set([u])) : a.add(u)),
                  Wh(e, u, f)),
              !1
            );
        }
        throw Error(s(435, a.tag));
      }
      return Wh(e, u, f), qh(), !1;
    }
    if (Ot)
      return (
        (n = _i.current),
        n !== null
          ? ((n.flags & 65536) === 0 && (n.flags |= 256),
            (n.flags |= 65536),
            (n.lanes = f),
            u !== Pc && ((e = Error(s(422), { cause: u })), Pl(fi(e, a))))
          : (u !== Pc && ((n = Error(s(423), { cause: u })), Pl(fi(n, a))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (f &= -f),
            (e.lanes |= f),
            (u = fi(u, a)),
            (f = dh(e.stateNode, u, f)),
            wh(e, f),
            Qt !== 4 && (Qt = 2)),
        !1
      );
    var g = Error(s(520), { cause: u });
    if (
      ((g = fi(g, a)),
      oa === null ? (oa = [g]) : oa.push(g),
      Qt !== 4 && (Qt = 2),
      n === null)
    )
      return !0;
    (u = fi(u, a)), (a = n);
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (e = f & -f),
            (a.lanes |= e),
            (e = dh(a.stateNode, u, e)),
            wh(a, e),
            !1
          );
        case 1:
          if (
            ((n = a.type),
            (g = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof n.getDerivedStateFromError == "function" ||
                (g !== null &&
                  typeof g.componentDidCatch == "function" &&
                  (Jn === null || !Jn.has(g)))))
          )
            return (
              (a.flags |= 65536),
              (f &= -f),
              (a.lanes |= f),
              (f = rm(f)),
              lm(f, e, a, u),
              wh(a, f),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var am = Error(s(461)),
    de = !1;
  function Se(e, n, a, u) {
    n.child = e === null ? f_(n, null, a, u) : Is(n, e.child, a, u);
  }
  function om(e, n, a, u, f) {
    a = a.render;
    var g = n.ref;
    if ("ref" in u) {
      var p = {};
      for (var S in u) S !== "ref" && (p[S] = u[S]);
    } else p = u;
    return (
      ks(n),
      (u = Wc(e, n, a, p, g, f)),
      (S = Qc()),
      e !== null && !de
        ? (Jc(e, n, f), fn(e, n, f))
        : (Ot && S && Yc(n), (n.flags |= 1), Se(e, n, u, f), n.child)
    );
  }
  function um(e, n, a, u, f) {
    if (e === null) {
      var g = a.type;
      return typeof g == "function" &&
        !Gh(g) &&
        g.defaultProps === void 0 &&
        a.compare === null
        ? ((n.tag = 15), (n.type = g), cm(e, n, g, u, f))
        : ((e = Po(a.type, null, u, n, n.mode, f)),
          (e.ref = n.ref),
          (e.return = n),
          (n.child = e));
    }
    if (((g = e.child), !xh(e, f))) {
      var p = g.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : Ul), a(p, u) && e.ref === n.ref)
      )
        return fn(e, n, f);
    }
    return (
      (n.flags |= 1),
      (e = Wn(g, u)),
      (e.ref = n.ref),
      (e.return = n),
      (n.child = e)
    );
  }
  function cm(e, n, a, u, f) {
    if (e !== null) {
      var g = e.memoizedProps;
      if (Ul(g, u) && e.ref === n.ref)
        if (((de = !1), (n.pendingProps = u = g), xh(e, f)))
          (e.flags & 131072) !== 0 && (de = !0);
        else return (n.lanes = e.lanes), fn(e, n, f);
    }
    return gh(e, n, a, u, f);
  }
  function hm(e, n, a) {
    var u = n.pendingProps,
      f = u.children,
      g = (n.stateNode._pendingVisibility & 2) !== 0,
      p = e !== null ? e.memoizedState : null;
    if ((Jl(e, n), u.mode === "hidden" || g)) {
      if ((n.flags & 128) !== 0) {
        if (((u = p !== null ? p.baseLanes | a : a), e !== null)) {
          for (f = n.child = e.child, g = 0; f !== null; )
            (g = g | f.lanes | f.childLanes), (f = f.sibling);
          n.childLanes = g & ~u;
        } else (n.childLanes = 0), (n.child = null);
        return fm(e, n, u, a);
      }
      if ((a & 536870912) !== 0)
        (n.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Ao(n, p !== null ? p.cachePool : null),
          p !== null ? d_(n, p) : Hc(),
          g_(n);
      else
        return (
          (n.lanes = n.childLanes = 536870912),
          fm(e, n, p !== null ? p.baseLanes | a : a, a)
        );
    } else
      p !== null
        ? (Ao(n, p.cachePool), d_(n, p), Yn(), (n.memoizedState = null))
        : (e !== null && Ao(n, null), Hc(), Yn());
    return Se(e, n, f, a), n.child;
  }
  function fm(e, n, a, u) {
    var f = qc();
    return (
      (f = f === null ? null : { parent: ae._currentValue, pool: f }),
      (n.memoizedState = { baseLanes: a, cachePool: f }),
      e !== null && Ao(n, null),
      Hc(),
      g_(n),
      e !== null && $l(e, n, u, !0),
      null
    );
  }
  function Jl(e, n) {
    var a = n.ref;
    if (a === null) e !== null && e.ref !== null && (n.flags |= 2097664);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(s(284));
      (e === null || e.ref !== a) && (n.flags |= 2097664);
    }
  }
  function gh(e, n, a, u, f) {
    return (
      ks(n),
      (a = Wc(e, n, a, u, void 0, f)),
      (u = Qc()),
      e !== null && !de
        ? (Jc(e, n, f), fn(e, n, f))
        : (Ot && u && Yc(n), (n.flags |= 1), Se(e, n, a, f), n.child)
    );
  }
  function dm(e, n, a, u, f, g) {
    return (
      ks(n),
      (n.updateQueue = null),
      (a = v_(n, u, a, f)),
      p_(e),
      (u = Qc()),
      e !== null && !de
        ? (Jc(e, n, g), fn(e, n, g))
        : (Ot && u && Yc(n), (n.flags |= 1), Se(e, n, a, g), n.child)
    );
  }
  function gm(e, n, a, u, f) {
    if ((ks(n), n.stateNode === null)) {
      var g = Cr,
        p = a.contextType;
      typeof p == "object" && p !== null && (g = we(p)),
        (g = new a(u, g)),
        (n.memoizedState =
          g.state !== null && g.state !== void 0 ? g.state : null),
        (g.updater = fh),
        (n.stateNode = g),
        (g._reactInternals = n),
        (g = n.stateNode),
        (g.props = u),
        (g.state = n.memoizedState),
        (g.refs = {}),
        bh(n),
        (p = a.contextType),
        (g.context = typeof p == "object" && p !== null ? we(p) : Cr),
        (g.state = n.memoizedState),
        (p = a.getDerivedStateFromProps),
        typeof p == "function" && (hh(n, a, p, u), (g.state = n.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof g.getSnapshotBeforeUpdate == "function" ||
          (typeof g.UNSAFE_componentWillMount != "function" &&
            typeof g.componentWillMount != "function") ||
          ((p = g.state),
          typeof g.componentWillMount == "function" && g.componentWillMount(),
          typeof g.UNSAFE_componentWillMount == "function" &&
            g.UNSAFE_componentWillMount(),
          p !== g.state && fh.enqueueReplaceState(g, g.state, null),
          ia(n, u, g, f),
          ea(),
          (g.state = n.memoizedState)),
        typeof g.componentDidMount == "function" && (n.flags |= 4194308),
        (u = !0);
    } else if (e === null) {
      g = n.stateNode;
      var S = n.memoizedProps,
        C = Xs(a, S);
      g.props = C;
      var M = g.context,
        P = a.contextType;
      (p = Cr), typeof P == "object" && P !== null && (p = we(P));
      var K = a.getDerivedStateFromProps;
      (P =
        typeof K == "function" ||
        typeof g.getSnapshotBeforeUpdate == "function"),
        (S = n.pendingProps !== S),
        P ||
          (typeof g.UNSAFE_componentWillReceiveProps != "function" &&
            typeof g.componentWillReceiveProps != "function") ||
          ((S || M !== p) && tm(n, g, u, p)),
        (Hn = !1);
      var N = n.memoizedState;
      (g.state = N),
        ia(n, u, g, f),
        ea(),
        (M = n.memoizedState),
        S || N !== M || Hn
          ? (typeof K == "function" && (hh(n, a, K, u), (M = n.memoizedState)),
            (C = Hn || $_(n, a, C, u, N, M, p))
              ? (P ||
                  (typeof g.UNSAFE_componentWillMount != "function" &&
                    typeof g.componentWillMount != "function") ||
                  (typeof g.componentWillMount == "function" &&
                    g.componentWillMount(),
                  typeof g.UNSAFE_componentWillMount == "function" &&
                    g.UNSAFE_componentWillMount()),
                typeof g.componentDidMount == "function" &&
                  (n.flags |= 4194308))
              : (typeof g.componentDidMount == "function" &&
                  (n.flags |= 4194308),
                (n.memoizedProps = u),
                (n.memoizedState = M)),
            (g.props = u),
            (g.state = M),
            (g.context = p),
            (u = C))
          : (typeof g.componentDidMount == "function" && (n.flags |= 4194308),
            (u = !1));
    } else {
      (g = n.stateNode),
        Ah(e, n),
        (p = n.memoizedProps),
        (P = Xs(a, p)),
        (g.props = P),
        (K = n.pendingProps),
        (N = g.context),
        (M = a.contextType),
        (C = Cr),
        typeof M == "object" && M !== null && (C = we(M)),
        (S = a.getDerivedStateFromProps),
        (M =
          typeof S == "function" ||
          typeof g.getSnapshotBeforeUpdate == "function") ||
          (typeof g.UNSAFE_componentWillReceiveProps != "function" &&
            typeof g.componentWillReceiveProps != "function") ||
          ((p !== K || N !== C) && tm(n, g, u, C)),
        (Hn = !1),
        (N = n.memoizedState),
        (g.state = N),
        ia(n, u, g, f),
        ea();
      var k = n.memoizedState;
      p !== K ||
      N !== k ||
      Hn ||
      (e !== null && e.dependencies !== null && Uo(e.dependencies))
        ? (typeof S == "function" && (hh(n, a, S, u), (k = n.memoizedState)),
          (P =
            Hn ||
            $_(n, a, P, u, N, k, C) ||
            (e !== null && e.dependencies !== null && Uo(e.dependencies)))
            ? (M ||
                (typeof g.UNSAFE_componentWillUpdate != "function" &&
                  typeof g.componentWillUpdate != "function") ||
                (typeof g.componentWillUpdate == "function" &&
                  g.componentWillUpdate(u, k, C),
                typeof g.UNSAFE_componentWillUpdate == "function" &&
                  g.UNSAFE_componentWillUpdate(u, k, C)),
              typeof g.componentDidUpdate == "function" && (n.flags |= 4),
              typeof g.getSnapshotBeforeUpdate == "function" &&
                (n.flags |= 1024))
            : (typeof g.componentDidUpdate != "function" ||
                (p === e.memoizedProps && N === e.memoizedState) ||
                (n.flags |= 4),
              typeof g.getSnapshotBeforeUpdate != "function" ||
                (p === e.memoizedProps && N === e.memoizedState) ||
                (n.flags |= 1024),
              (n.memoizedProps = u),
              (n.memoizedState = k)),
          (g.props = u),
          (g.state = k),
          (g.context = C),
          (u = P))
        : (typeof g.componentDidUpdate != "function" ||
            (p === e.memoizedProps && N === e.memoizedState) ||
            (n.flags |= 4),
          typeof g.getSnapshotBeforeUpdate != "function" ||
            (p === e.memoizedProps && N === e.memoizedState) ||
            (n.flags |= 1024),
          (u = !1));
    }
    return (
      (g = u),
      Jl(e, n),
      (u = (n.flags & 128) !== 0),
      g || u
        ? ((g = n.stateNode),
          (a =
            u && typeof a.getDerivedStateFromError != "function"
              ? null
              : g.render()),
          (n.flags |= 1),
          e !== null && u
            ? ((n.child = Is(n, e.child, null, f)),
              (n.child = Is(n, null, a, f)))
            : Se(e, n, a, f),
          (n.memoizedState = g.state),
          (e = n.child))
        : (e = fn(e, n, f)),
      e
    );
  }
  function _m(e, n, a, u) {
    return kl(), (n.flags |= 256), Se(e, n, a, u), n.child;
  }
  var _h = { dehydrated: null, treeContext: null, retryLane: 0 };
  function mh(e) {
    return { baseLanes: e, cachePool: y_() };
  }
  function yh(e, n, a) {
    return (e = e !== null ? e.childLanes & ~a : 0), n && (e |= vi), e;
  }
  function mm(e, n, a) {
    var u = n.pendingProps,
      f = !1,
      g = (n.flags & 128) !== 0,
      p;
    if (
      ((p = g) ||
        (p =
          e !== null && e.memoizedState === null ? !1 : (le.current & 2) !== 0),
      p && ((f = !0), (n.flags &= -129)),
      (p = (n.flags & 32) !== 0),
      (n.flags &= -33),
      e === null)
    ) {
      if (Ot) {
        if ((f ? Xn(n) : Yn(), Ot)) {
          var S = Ee,
            C;
          if ((C = S)) {
            t: {
              for (C = S, S = Zi; C.nodeType !== 8; ) {
                if (!S) {
                  S = null;
                  break t;
                }
                if (((C = Ii(C.nextSibling)), C === null)) {
                  S = null;
                  break t;
                }
              }
              S = C;
            }
            S !== null
              ? ((n.memoizedState = {
                  dehydrated: S,
                  treeContext: Ds !== null ? { id: on, overflow: un } : null,
                  retryLane: 536870912,
                }),
                (C = pi(18, null, null, 0)),
                (C.stateNode = S),
                (C.return = n),
                (n.child = C),
                (Fe = n),
                (Ee = null),
                (C = !0))
              : (C = !1);
          }
          C || zs(n);
        }
        if (
          ((S = n.memoizedState),
          S !== null && ((S = S.dehydrated), S !== null))
        )
          return S.data === "$!" ? (n.lanes = 16) : (n.lanes = 536870912), null;
        cn(n);
      }
      return (
        (S = u.children),
        (u = u.fallback),
        f
          ? (Yn(),
            (f = n.mode),
            (S = vh({ mode: "hidden", children: S }, f)),
            (u = Bs(u, f, a, null)),
            (S.return = n),
            (u.return = n),
            (S.sibling = u),
            (n.child = S),
            (f = n.child),
            (f.memoizedState = mh(a)),
            (f.childLanes = yh(e, p, a)),
            (n.memoizedState = _h),
            u)
          : (Xn(n), ph(n, S))
      );
    }
    if (
      ((C = e.memoizedState), C !== null && ((S = C.dehydrated), S !== null))
    ) {
      if (g)
        n.flags & 256
          ? (Xn(n), (n.flags &= -257), (n = Eh(e, n, a)))
          : n.memoizedState !== null
            ? (Yn(), (n.child = e.child), (n.flags |= 128), (n = null))
            : (Yn(),
              (f = u.fallback),
              (S = n.mode),
              (u = vh({ mode: "visible", children: u.children }, S)),
              (f = Bs(f, S, a, null)),
              (f.flags |= 2),
              (u.return = n),
              (f.return = n),
              (u.sibling = f),
              (n.child = u),
              Is(n, e.child, null, a),
              (u = n.child),
              (u.memoizedState = mh(a)),
              (u.childLanes = yh(e, p, a)),
              (n.memoizedState = _h),
              (n = f));
      else if ((Xn(n), S.data === "$!")) {
        if (((p = S.nextSibling && S.nextSibling.dataset), p)) var M = p.dgst;
        (p = M),
          (u = Error(s(419))),
          (u.stack = ""),
          (u.digest = p),
          Pl({ value: u, source: null, stack: null }),
          (n = Eh(e, n, a));
      } else if (
        (de || $l(e, n, a, !1), (p = (a & e.childLanes) !== 0), de || p)
      ) {
        if (((p = Bt), p !== null)) {
          if (((u = a & -a), (u & 42) !== 0)) u = 1;
          else
            switch (u) {
              case 2:
                u = 1;
                break;
              case 8:
                u = 4;
                break;
              case 32:
                u = 16;
                break;
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
                u = 64;
                break;
              case 268435456:
                u = 134217728;
                break;
              default:
                u = 0;
            }
          if (
            ((u = (u & (p.suspendedLanes | a)) !== 0 ? 0 : u),
            u !== 0 && u !== C.retryLane)
          )
            throw ((C.retryLane = u), Un(e, u), Ue(p, e, u), am);
        }
        S.data === "$?" || qh(), (n = Eh(e, n, a));
      } else
        S.data === "$?"
          ? ((n.flags |= 128),
            (n.child = e.child),
            (n = qv.bind(null, e)),
            (S._reactRetry = n),
            (n = null))
          : ((e = C.treeContext),
            (Ee = Ii(S.nextSibling)),
            (Fe = n),
            (Ot = !0),
            (Li = null),
            (Zi = !1),
            e !== null &&
              ((di[gi++] = on),
              (di[gi++] = un),
              (di[gi++] = Ds),
              (on = e.id),
              (un = e.overflow),
              (Ds = n)),
            (n = ph(n, u.children)),
            (n.flags |= 4096));
      return n;
    }
    return f
      ? (Yn(),
        (f = u.fallback),
        (S = n.mode),
        (C = e.child),
        (M = C.sibling),
        (u = Wn(C, { mode: "hidden", children: u.children })),
        (u.subtreeFlags = C.subtreeFlags & 31457280),
        M !== null ? (f = Wn(M, f)) : ((f = Bs(f, S, a, null)), (f.flags |= 2)),
        (f.return = n),
        (u.return = n),
        (u.sibling = f),
        (n.child = u),
        (u = f),
        (f = n.child),
        (S = e.child.memoizedState),
        S === null
          ? (S = mh(a))
          : ((C = S.cachePool),
            C !== null
              ? ((M = ae._currentValue),
                (C = C.parent !== M ? { parent: M, pool: M } : C))
              : (C = y_()),
            (S = { baseLanes: S.baseLanes | a, cachePool: C })),
        (f.memoizedState = S),
        (f.childLanes = yh(e, p, a)),
        (n.memoizedState = _h),
        u)
      : (Xn(n),
        (a = e.child),
        (e = a.sibling),
        (a = Wn(a, { mode: "visible", children: u.children })),
        (a.return = n),
        (a.sibling = null),
        e !== null &&
          ((p = n.deletions),
          p === null ? ((n.deletions = [e]), (n.flags |= 16)) : p.push(e)),
        (n.child = a),
        (n.memoizedState = null),
        a);
  }
  function ph(e, n) {
    return (
      (n = vh({ mode: "visible", children: n }, e.mode)),
      (n.return = e),
      (e.child = n)
    );
  }
  function vh(e, n) {
    return Pm(e, n, 0, null);
  }
  function Eh(e, n, a) {
    return (
      Is(n, e.child, null, a),
      (e = ph(n, n.pendingProps.children)),
      (e.flags |= 2),
      (n.memoizedState = null),
      e
    );
  }
  function ym(e, n, a) {
    e.lanes |= n;
    var u = e.alternate;
    u !== null && (u.lanes |= n), Th(e.return, n, a);
  }
  function Sh(e, n, a, u, f) {
    var g = e.memoizedState;
    g === null
      ? (e.memoizedState = {
          isBackwards: n,
          rendering: null,
          renderingStartTime: 0,
          last: u,
          tail: a,
          tailMode: f,
        })
      : ((g.isBackwards = n),
        (g.rendering = null),
        (g.renderingStartTime = 0),
        (g.last = u),
        (g.tail = a),
        (g.tailMode = f));
  }
  function pm(e, n, a) {
    var u = n.pendingProps,
      f = u.revealOrder,
      g = u.tail;
    if ((Se(e, n, u.children, a), (u = le.current), (u & 2) !== 0))
      (u = (u & 1) | 2), (n.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        t: for (e = n.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && ym(e, a, n);
          else if (e.tag === 19) ym(e, a, n);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === n) break t;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === n) break t;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      u &= 1;
    }
    switch ((vt(le, u), f)) {
      case "forwards":
        for (a = n.child, f = null; a !== null; )
          (e = a.alternate),
            e !== null && bo(e) === null && (f = a),
            (a = a.sibling);
        (a = f),
          a === null
            ? ((f = n.child), (n.child = null))
            : ((f = a.sibling), (a.sibling = null)),
          Sh(n, !1, f, a, g);
        break;
      case "backwards":
        for (a = null, f = n.child, n.child = null; f !== null; ) {
          if (((e = f.alternate), e !== null && bo(e) === null)) {
            n.child = f;
            break;
          }
          (e = f.sibling), (f.sibling = a), (a = f), (f = e);
        }
        Sh(n, !0, a, null, g);
        break;
      case "together":
        Sh(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function fn(e, n, a) {
    if (
      (e !== null && (n.dependencies = e.dependencies),
      (Qn |= n.lanes),
      (a & n.childLanes) === 0)
    )
      if (e !== null) {
        if (($l(e, n, a, !1), (a & n.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && n.child !== e.child) throw Error(s(153));
    if (n.child !== null) {
      for (
        e = n.child, a = Wn(e, e.pendingProps), n.child = a, a.return = n;
        e.sibling !== null;

      )
        (e = e.sibling),
          (a = a.sibling = Wn(e, e.pendingProps)),
          (a.return = n);
      a.sibling = null;
    }
    return n.child;
  }
  function xh(e, n) {
    return (e.lanes & n) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && Uo(e)));
  }
  function Iv(e, n, a) {
    switch (n.tag) {
      case 3:
        ki(n, n.stateNode.containerInfo),
          Bn(n, ae, e.memoizedState.cache),
          kl();
        break;
      case 27:
      case 5:
        ke(n);
        break;
      case 4:
        ki(n, n.stateNode.containerInfo);
        break;
      case 10:
        Bn(n, n.type, n.memoizedProps.value);
        break;
      case 13:
        var u = n.memoizedState;
        if (u !== null)
          return u.dehydrated !== null
            ? (Xn(n), (n.flags |= 128), null)
            : (a & n.child.childLanes) !== 0
              ? mm(e, n, a)
              : (Xn(n), (e = fn(e, n, a)), e !== null ? e.sibling : null);
        Xn(n);
        break;
      case 19:
        var f = (e.flags & 128) !== 0;
        if (
          ((u = (a & n.childLanes) !== 0),
          u || ($l(e, n, a, !1), (u = (a & n.childLanes) !== 0)),
          f)
        ) {
          if (u) return pm(e, n, a);
          n.flags |= 128;
        }
        if (
          ((f = n.memoizedState),
          f !== null &&
            ((f.rendering = null), (f.tail = null), (f.lastEffect = null)),
          vt(le, le.current),
          u)
        )
          break;
        return null;
      case 22:
      case 23:
        return (n.lanes = 0), hm(e, n, a);
      case 24:
        Bn(n, ae, e.memoizedState.cache);
    }
    return fn(e, n, a);
  }
  function vm(e, n, a) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps) de = !0;
      else {
        if (!xh(e, a) && (n.flags & 128) === 0) return (de = !1), Iv(e, n, a);
        de = (e.flags & 131072) !== 0;
      }
    else (de = !1), Ot && (n.flags & 1048576) !== 0 && n_(n, So, n.index);
    switch (((n.lanes = 0), n.tag)) {
      case 16:
        t: {
          e = n.pendingProps;
          var u = n.elementType,
            f = u._init;
          if (((u = f(u._payload)), (n.type = u), typeof u == "function"))
            Gh(u)
              ? ((e = Xs(u, e)), (n.tag = 1), (n = gm(null, n, u, e, a)))
              : ((n.tag = 0), (n = gh(null, n, u, e, a)));
          else {
            if (u != null) {
              if (((f = u.$$typeof), f === x)) {
                (n.tag = 11), (n = om(null, n, u, e, a));
                break t;
              } else if (f === A) {
                (n.tag = 14), (n = um(null, n, u, e, a));
                break t;
              }
            }
            throw ((n = Z(u) || u), Error(s(306, n, "")));
          }
        }
        return n;
      case 0:
        return gh(e, n, n.type, n.pendingProps, a);
      case 1:
        return (u = n.type), (f = Xs(u, n.pendingProps)), gm(e, n, u, f, a);
      case 3:
        t: {
          if ((ki(n, n.stateNode.containerInfo), e === null))
            throw Error(s(387));
          var g = n.pendingProps;
          (f = n.memoizedState), (u = f.element), Ah(e, n), ia(n, g, null, a);
          var p = n.memoizedState;
          if (
            ((g = p.cache),
            Bn(n, ae, g),
            g !== f.cache && Rh(n, [ae], a, !0),
            ea(),
            (g = p.element),
            f.isDehydrated)
          )
            if (
              ((f = { element: g, isDehydrated: !1, cache: p.cache }),
              (n.updateQueue.baseState = f),
              (n.memoizedState = f),
              n.flags & 256)
            ) {
              n = _m(e, n, g, a);
              break t;
            } else if (g !== u) {
              (u = fi(Error(s(424)), n)), Pl(u), (n = _m(e, n, g, a));
              break t;
            } else
              for (
                Ee = Ii(n.stateNode.containerInfo.firstChild),
                  Fe = n,
                  Ot = !0,
                  Li = null,
                  Zi = !0,
                  a = f_(n, null, g, a),
                  n.child = a;
                a;

              )
                (a.flags = (a.flags & -3) | 4096), (a = a.sibling);
          else {
            if ((kl(), g === u)) {
              n = fn(e, n, a);
              break t;
            }
            Se(e, n, g, a);
          }
          n = n.child;
        }
        return n;
      case 26:
        return (
          Jl(e, n),
          e === null
            ? (a = x0(n.type, null, n.pendingProps, null))
              ? (n.memoizedState = a)
              : Ot ||
                ((a = n.type),
                (e = n.pendingProps),
                (u = tu(Qe.current).createElement(a)),
                (u[Ae] = n),
                (u[Pe] = e),
                xe(u, a, e),
                fe(u),
                (n.stateNode = u))
            : (n.memoizedState = x0(
                n.type,
                e.memoizedProps,
                n.pendingProps,
                e.memoizedState,
              )),
          null
        );
      case 27:
        return (
          ke(n),
          e === null &&
            Ot &&
            ((u = n.stateNode = v0(n.type, n.pendingProps, Qe.current)),
            (Fe = n),
            (Zi = !0),
            (Ee = Ii(u.firstChild))),
          (u = n.pendingProps.children),
          e !== null || Ot ? Se(e, n, u, a) : (n.child = Is(n, null, u, a)),
          Jl(e, n),
          n.child
        );
      case 5:
        return (
          e === null &&
            Ot &&
            ((f = u = Ee) &&
              ((u = cE(u, n.type, n.pendingProps, Zi)),
              u !== null
                ? ((n.stateNode = u),
                  (Fe = n),
                  (Ee = Ii(u.firstChild)),
                  (Zi = !1),
                  (f = !0))
                : (f = !1)),
            f || zs(n)),
          ke(n),
          (f = n.type),
          (g = n.pendingProps),
          (p = e !== null ? e.memoizedProps : null),
          (u = g.children),
          uf(f, g) ? (u = null) : p !== null && uf(f, p) && (n.flags |= 32),
          n.memoizedState !== null &&
            ((f = Wc(e, n, Av, null, null, a)), (ya._currentValue = f)),
          Jl(e, n),
          Se(e, n, u, a),
          n.child
        );
      case 6:
        return (
          e === null &&
            Ot &&
            ((e = a = Ee) &&
              ((a = hE(a, n.pendingProps, Zi)),
              a !== null
                ? ((n.stateNode = a), (Fe = n), (Ee = null), (e = !0))
                : (e = !1)),
            e || zs(n)),
          null
        );
      case 13:
        return mm(e, n, a);
      case 4:
        return (
          ki(n, n.stateNode.containerInfo),
          (u = n.pendingProps),
          e === null ? (n.child = Is(n, null, u, a)) : Se(e, n, u, a),
          n.child
        );
      case 11:
        return om(e, n, n.type, n.pendingProps, a);
      case 7:
        return Se(e, n, n.pendingProps, a), n.child;
      case 8:
        return Se(e, n, n.pendingProps.children, a), n.child;
      case 12:
        return Se(e, n, n.pendingProps.children, a), n.child;
      case 10:
        return (
          (u = n.pendingProps),
          Bn(n, n.type, u.value),
          Se(e, n, u.children, a),
          n.child
        );
      case 9:
        return (
          (f = n.type._context),
          (u = n.pendingProps.children),
          ks(n),
          (f = we(f)),
          (u = u(f)),
          (n.flags |= 1),
          Se(e, n, u, a),
          n.child
        );
      case 14:
        return um(e, n, n.type, n.pendingProps, a);
      case 15:
        return cm(e, n, n.type, n.pendingProps, a);
      case 19:
        return pm(e, n, a);
      case 22:
        return hm(e, n, a);
      case 24:
        return (
          ks(n),
          (u = we(ae)),
          e === null
            ? ((f = qc()),
              f === null &&
                ((f = Bt),
                (g = Zc()),
                (f.pooledCache = g),
                g.refCount++,
                g !== null && (f.pooledCacheLanes |= a),
                (f = g)),
              (n.memoizedState = { parent: u, cache: f }),
              bh(n),
              Bn(n, ae, f))
            : ((e.lanes & a) !== 0 && (Ah(e, n), ia(n, null, null, a), ea()),
              (f = e.memoizedState),
              (g = n.memoizedState),
              f.parent !== u
                ? ((f = { parent: u, cache: u }),
                  (n.memoizedState = f),
                  n.lanes === 0 &&
                    (n.memoizedState = n.updateQueue.baseState = f),
                  Bn(n, ae, u))
                : ((u = g.cache),
                  Bn(n, ae, u),
                  u !== f.cache && Rh(n, [ae], a, !0))),
          Se(e, n, n.pendingProps.children, a),
          n.child
        );
      case 29:
        throw n.pendingProps;
    }
    throw Error(s(156, n.tag));
  }
  var Ch = mt(null),
    Ys = null,
    dn = null;
  function Bn(e, n, a) {
    vt(Ch, n._currentValue), (n._currentValue = a);
  }
  function gn(e) {
    (e._currentValue = Ch.current), Ut(Ch);
  }
  function Th(e, n, a) {
    for (; e !== null; ) {
      var u = e.alternate;
      if (
        ((e.childLanes & n) !== n
          ? ((e.childLanes |= n), u !== null && (u.childLanes |= n))
          : u !== null && (u.childLanes & n) !== n && (u.childLanes |= n),
        e === a)
      )
        break;
      e = e.return;
    }
  }
  function Rh(e, n, a, u) {
    var f = e.child;
    for (f !== null && (f.return = e); f !== null; ) {
      var g = f.dependencies;
      if (g !== null) {
        var p = f.child;
        g = g.firstContext;
        t: for (; g !== null; ) {
          var S = g;
          g = f;
          for (var C = 0; C < n.length; C++)
            if (S.context === n[C]) {
              (g.lanes |= a),
                (S = g.alternate),
                S !== null && (S.lanes |= a),
                Th(g.return, a, e),
                u || (p = null);
              break t;
            }
          g = S.next;
        }
      } else if (f.tag === 18) {
        if (((p = f.return), p === null)) throw Error(s(341));
        (p.lanes |= a),
          (g = p.alternate),
          g !== null && (g.lanes |= a),
          Th(p, a, e),
          (p = null);
      } else p = f.child;
      if (p !== null) p.return = f;
      else
        for (p = f; p !== null; ) {
          if (p === e) {
            p = null;
            break;
          }
          if (((f = p.sibling), f !== null)) {
            (f.return = p.return), (p = f);
            break;
          }
          p = p.return;
        }
      f = p;
    }
  }
  function $l(e, n, a, u) {
    e = null;
    for (var f = n, g = !1; f !== null; ) {
      if (!g) {
        if ((f.flags & 524288) !== 0) g = !0;
        else if ((f.flags & 262144) !== 0) break;
      }
      if (f.tag === 10) {
        var p = f.alternate;
        if (p === null) throw Error(s(387));
        if (((p = p.memoizedProps), p !== null)) {
          var S = f.type;
          ti(f.pendingProps.value, p.value) ||
            (e !== null ? e.push(S) : (e = [S]));
        }
      } else if (f === Je.current) {
        if (((p = f.alternate), p === null)) throw Error(s(387));
        p.memoizedState.memoizedState !== f.memoizedState.memoizedState &&
          (e !== null ? e.push(ya) : (e = [ya]));
      }
      f = f.return;
    }
    e !== null && Rh(n, e, a, u), (n.flags |= 262144);
  }
  function Uo(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!ti(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function ks(e) {
    (Ys = e),
      (dn = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null);
  }
  function we(e) {
    return Em(Ys, e);
  }
  function Xo(e, n) {
    return Ys === null && ks(e), Em(e, n);
  }
  function Em(e, n) {
    var a = n._currentValue;
    if (((n = { context: n, memoizedValue: a, next: null }), dn === null)) {
      if (e === null) throw Error(s(308));
      (dn = n),
        (e.dependencies = { lanes: 0, firstContext: n }),
        (e.flags |= 524288);
    } else dn = dn.next = n;
    return a;
  }
  var Hn = !1;
  function bh(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Ah(e, n) {
    (e = e.updateQueue),
      n.updateQueue === e &&
        (n.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        });
  }
  function jn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Zn(e, n, a) {
    var u = e.updateQueue;
    if (u === null) return null;
    if (((u = u.shared), (Vt & 2) !== 0)) {
      var f = u.pending;
      return (
        f === null ? (n.next = n) : ((n.next = f.next), (f.next = n)),
        (u.pending = n),
        (n = vo(e)),
        e_(e, null, a),
        n
      );
    }
    return po(e, u, n, a), vo(e);
  }
  function ta(e, n, a) {
    if (
      ((n = n.updateQueue), n !== null && ((n = n.shared), (a & 4194176) !== 0))
    ) {
      var u = n.lanes;
      (u &= e.pendingLanes), (a |= u), (n.lanes = a), he(e, a);
    }
  }
  function wh(e, n) {
    var a = e.updateQueue,
      u = e.alternate;
    if (u !== null && ((u = u.updateQueue), a === u)) {
      var f = null,
        g = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var p = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          g === null ? (f = g = p) : (g = g.next = p), (a = a.next);
        } while (a !== null);
        g === null ? (f = g = n) : (g = g.next = n);
      } else f = g = n;
      (a = {
        baseState: u.baseState,
        firstBaseUpdate: f,
        lastBaseUpdate: g,
        shared: u.shared,
        callbacks: u.callbacks,
      }),
        (e.updateQueue = a);
      return;
    }
    (e = a.lastBaseUpdate),
      e === null ? (a.firstBaseUpdate = n) : (e.next = n),
      (a.lastBaseUpdate = n);
  }
  var Mh = !1;
  function ea() {
    if (Mh) {
      var e = Mr;
      if (e !== null) throw e;
    }
  }
  function ia(e, n, a, u) {
    Mh = !1;
    var f = e.updateQueue;
    Hn = !1;
    var g = f.firstBaseUpdate,
      p = f.lastBaseUpdate,
      S = f.shared.pending;
    if (S !== null) {
      f.shared.pending = null;
      var C = S,
        M = C.next;
      (C.next = null), p === null ? (g = M) : (p.next = M), (p = C);
      var P = e.alternate;
      P !== null &&
        ((P = P.updateQueue),
        (S = P.lastBaseUpdate),
        S !== p &&
          (S === null ? (P.firstBaseUpdate = M) : (S.next = M),
          (P.lastBaseUpdate = C)));
    }
    if (g !== null) {
      var K = f.baseState;
      (p = 0), (P = M = C = null), (S = g);
      do {
        var N = S.lane & -536870913,
          k = N !== S.lane;
        if (k ? (wt & N) === N : (u & N) === N) {
          N !== 0 && N === wr && (Mh = !0),
            P !== null &&
              (P = P.next =
                {
                  lane: 0,
                  tag: S.tag,
                  payload: S.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var at = e,
              yt = S;
            N = n;
            var Jt = a;
            switch (yt.tag) {
              case 1:
                if (((at = yt.payload), typeof at == "function")) {
                  K = at.call(Jt, K, N);
                  break t;
                }
                K = at;
                break t;
              case 3:
                at.flags = (at.flags & -65537) | 128;
              case 0:
                if (
                  ((at = yt.payload),
                  (N = typeof at == "function" ? at.call(Jt, K, N) : at),
                  N == null)
                )
                  break t;
                K = V({}, K, N);
                break t;
              case 2:
                Hn = !0;
            }
          }
          (N = S.callback),
            N !== null &&
              ((e.flags |= 64),
              k && (e.flags |= 8192),
              (k = f.callbacks),
              k === null ? (f.callbacks = [N]) : k.push(N));
        } else
          (k = {
            lane: N,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null,
          }),
            P === null ? ((M = P = k), (C = K)) : (P = P.next = k),
            (p |= N);
        if (((S = S.next), S === null)) {
          if (((S = f.shared.pending), S === null)) break;
          (k = S),
            (S = k.next),
            (k.next = null),
            (f.lastBaseUpdate = k),
            (f.shared.pending = null);
        }
      } while (!0);
      P === null && (C = K),
        (f.baseState = C),
        (f.firstBaseUpdate = M),
        (f.lastBaseUpdate = P),
        g === null && (f.shared.lanes = 0),
        (Qn |= p),
        (e.lanes = p),
        (e.memoizedState = K);
    }
  }
  function Sm(e, n) {
    if (typeof e != "function") throw Error(s(191, e));
    e.call(n);
  }
  function xm(e, n) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++) Sm(a[e], n);
  }
  function na(e, n) {
    try {
      var a = n.updateQueue,
        u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var f = u.next;
        a = f;
        do {
          if ((a.tag & e) === e) {
            u = void 0;
            var g = a.create,
              p = a.inst;
            (u = g()), (p.destroy = u);
          }
          a = a.next;
        } while (a !== f);
      }
    } catch (S) {
      Pt(n, n.return, S);
    }
  }
  function Kn(e, n, a) {
    try {
      var u = n.updateQueue,
        f = u !== null ? u.lastEffect : null;
      if (f !== null) {
        var g = f.next;
        u = g;
        do {
          if ((u.tag & e) === e) {
            var p = u.inst,
              S = p.destroy;
            if (S !== void 0) {
              (p.destroy = void 0), (f = n);
              var C = a;
              try {
                S();
              } catch (M) {
                Pt(f, C, M);
              }
            }
          }
          u = u.next;
        } while (u !== g);
      }
    } catch (M) {
      Pt(n, n.return, M);
    }
  }
  function Cm(e) {
    var n = e.updateQueue;
    if (n !== null) {
      var a = e.stateNode;
      try {
        xm(n, a);
      } catch (u) {
        Pt(e, e.return, u);
      }
    }
  }
  function Tm(e, n, a) {
    (a.props = Xs(e.type, e.memoizedProps)), (a.state = e.memoizedState);
    try {
      a.componentWillUnmount();
    } catch (u) {
      Pt(e, n, u);
    }
  }
  function Ps(e, n) {
    try {
      var a = e.ref;
      if (a !== null) {
        var u = e.stateNode;
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var f = u;
            break;
          default:
            f = u;
        }
        typeof a == "function" ? (e.refCleanup = a(f)) : (a.current = f);
      }
    } catch (g) {
      Pt(e, n, g);
    }
  }
  function ei(e, n) {
    var a = e.ref,
      u = e.refCleanup;
    if (a !== null)
      if (typeof u == "function")
        try {
          u();
        } catch (f) {
          Pt(e, n, f);
        } finally {
          (e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (f) {
          Pt(e, n, f);
        }
      else a.current = null;
  }
  function Rm(e) {
    var n = e.type,
      a = e.memoizedProps,
      u = e.stateNode;
    try {
      t: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && u.focus();
          break t;
        case "img":
          a.src ? (u.src = a.src) : a.srcSet && (u.srcset = a.srcSet);
      }
    } catch (f) {
      Pt(e, e.return, f);
    }
  }
  function bm(e, n, a) {
    try {
      var u = e.stateNode;
      rE(u, e.type, a, n), (u[Pe] = n);
    } catch (f) {
      Pt(e, e.return, f);
    }
  }
  function Am(e) {
    return (
      e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 || e.tag === 4
    );
  }
  function Oh(e) {
    t: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Am(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 27 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue t;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Dh(e, n, a) {
    var u = e.tag;
    if (u === 5 || u === 6)
      (e = e.stateNode),
        n
          ? a.nodeType === 8
            ? a.parentNode.insertBefore(e, n)
            : a.insertBefore(e, n)
          : (a.nodeType === 8
              ? ((n = a.parentNode), n.insertBefore(e, a))
              : ((n = a), n.appendChild(e)),
            (a = a._reactRootContainer),
            a != null || n.onclick !== null || (n.onclick = $o));
    else if (u !== 4 && u !== 27 && ((e = e.child), e !== null))
      for (Dh(e, n, a), e = e.sibling; e !== null; )
        Dh(e, n, a), (e = e.sibling);
  }
  function Yo(e, n, a) {
    var u = e.tag;
    if (u === 5 || u === 6)
      (e = e.stateNode), n ? a.insertBefore(e, n) : a.appendChild(e);
    else if (u !== 4 && u !== 27 && ((e = e.child), e !== null))
      for (Yo(e, n, a), e = e.sibling; e !== null; )
        Yo(e, n, a), (e = e.sibling);
  }
  var _n = !1,
    Wt = !1,
    Lh = !1,
    wm = typeof WeakSet == "function" ? WeakSet : Set,
    ge = null,
    Mm = !1;
  function Nv(e, n) {
    if (((e = e.containerInfo), (af = lu), (e = Zg(e)), Ic(e))) {
      if ("selectionStart" in e)
        var a = { start: e.selectionStart, end: e.selectionEnd };
      else
        t: {
          a = ((a = e.ownerDocument) && a.defaultView) || window;
          var u = a.getSelection && a.getSelection();
          if (u && u.rangeCount !== 0) {
            a = u.anchorNode;
            var f = u.anchorOffset,
              g = u.focusNode;
            u = u.focusOffset;
            try {
              a.nodeType, g.nodeType;
            } catch {
              a = null;
              break t;
            }
            var p = 0,
              S = -1,
              C = -1,
              M = 0,
              P = 0,
              K = e,
              N = null;
            e: for (;;) {
              for (
                var k;
                K !== a || (f !== 0 && K.nodeType !== 3) || (S = p + f),
                  K !== g || (u !== 0 && K.nodeType !== 3) || (C = p + u),
                  K.nodeType === 3 && (p += K.nodeValue.length),
                  (k = K.firstChild) !== null;

              )
                (N = K), (K = k);
              for (;;) {
                if (K === e) break e;
                if (
                  (N === a && ++M === f && (S = p),
                  N === g && ++P === u && (C = p),
                  (k = K.nextSibling) !== null)
                )
                  break;
                (K = N), (N = K.parentNode);
              }
              K = k;
            }
            a = S === -1 || C === -1 ? null : { start: S, end: C };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      of = { focusedElem: e, selectionRange: a }, lu = !1, ge = n;
      ge !== null;

    )
      if (
        ((n = ge), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null)
      )
        (e.return = n), (ge = e);
      else
        for (; ge !== null; ) {
          switch (((n = ge), (g = n.alternate), (e = n.flags), n.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && g !== null) {
                (e = void 0),
                  (a = n),
                  (f = g.memoizedProps),
                  (g = g.memoizedState),
                  (u = a.stateNode);
                try {
                  var at = Xs(a.type, f, a.elementType === a.type);
                  (e = u.getSnapshotBeforeUpdate(at, g)),
                    (u.__reactInternalSnapshotBeforeUpdate = e);
                } catch (yt) {
                  Pt(a, a.return, yt);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = n.stateNode.containerInfo), (a = e.nodeType), a === 9)
                )
                  ff(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      ff(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(s(163));
          }
          if (((e = n.sibling), e !== null)) {
            (e.return = n.return), (ge = e);
            break;
          }
          ge = n.return;
        }
    return (at = Mm), (Mm = !1), at;
  }
  function Om(e, n, a) {
    var u = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        yn(e, a), u & 4 && na(5, a);
        break;
      case 1:
        if ((yn(e, a), u & 4))
          if (((e = a.stateNode), n === null))
            try {
              e.componentDidMount();
            } catch (S) {
              Pt(a, a.return, S);
            }
          else {
            var f = Xs(a.type, n.memoizedProps);
            n = n.memoizedState;
            try {
              e.componentDidUpdate(f, n, e.__reactInternalSnapshotBeforeUpdate);
            } catch (S) {
              Pt(a, a.return, S);
            }
          }
        u & 64 && Cm(a), u & 512 && Ps(a, a.return);
        break;
      case 3:
        if ((yn(e, a), u & 64 && ((u = a.updateQueue), u !== null))) {
          if (((e = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                e = a.child.stateNode;
                break;
              case 1:
                e = a.child.stateNode;
            }
          try {
            xm(u, e);
          } catch (S) {
            Pt(a, a.return, S);
          }
        }
        break;
      case 26:
        yn(e, a), u & 512 && Ps(a, a.return);
        break;
      case 27:
      case 5:
        yn(e, a), n === null && u & 4 && Rm(a), u & 512 && Ps(a, a.return);
        break;
      case 12:
        yn(e, a);
        break;
      case 13:
        yn(e, a), u & 4 && zm(e, a);
        break;
      case 22:
        if (((f = a.memoizedState !== null || _n), !f)) {
          n = (n !== null && n.memoizedState !== null) || Wt;
          var g = _n,
            p = Wt;
          (_n = f),
            (Wt = n) && !p ? qn(e, a, (a.subtreeFlags & 8772) !== 0) : yn(e, a),
            (_n = g),
            (Wt = p);
        }
        u & 512 &&
          (a.memoizedProps.mode === "manual"
            ? Ps(a, a.return)
            : ei(a, a.return));
        break;
      default:
        yn(e, a);
    }
  }
  function Dm(e) {
    var n = e.alternate;
    n !== null && ((e.alternate = null), Dm(n)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((n = e.stateNode), n !== null && pc(n)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var se = null,
    ii = !1;
  function mn(e, n, a) {
    for (a = a.child; a !== null; ) Lm(e, n, a), (a = a.sibling);
  }
  function Lm(e, n, a) {
    if (Te && typeof Te.onCommitFiberUnmount == "function")
      try {
        Te.onCommitFiberUnmount(Cs, a);
      } catch {}
    switch (a.tag) {
      case 26:
        Wt || ei(a, n),
          mn(e, n, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a));
        break;
      case 27:
        Wt || ei(a, n);
        var u = se,
          f = ii;
        for (
          se = a.stateNode, mn(e, n, a), a = a.stateNode, n = a.attributes;
          n.length;

        )
          a.removeAttributeNode(n[0]);
        pc(a), (se = u), (ii = f);
        break;
      case 5:
        Wt || ei(a, n);
      case 6:
        f = se;
        var g = ii;
        if (((se = null), mn(e, n, a), (se = f), (ii = g), se !== null))
          if (ii)
            try {
              (e = se),
                (u = a.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(u)
                  : e.removeChild(u);
            } catch (p) {
              Pt(a, n, p);
            }
          else
            try {
              se.removeChild(a.stateNode);
            } catch (p) {
              Pt(a, n, p);
            }
        break;
      case 18:
        se !== null &&
          (ii
            ? ((n = se),
              (a = a.stateNode),
              n.nodeType === 8
                ? hf(n.parentNode, a)
                : n.nodeType === 1 && hf(n, a),
              Sa(n))
            : hf(se, a.stateNode));
        break;
      case 4:
        (u = se),
          (f = ii),
          (se = a.stateNode.containerInfo),
          (ii = !0),
          mn(e, n, a),
          (se = u),
          (ii = f);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Wt || Kn(2, a, n), Wt || Kn(4, a, n), mn(e, n, a);
        break;
      case 1:
        Wt ||
          (ei(a, n),
          (u = a.stateNode),
          typeof u.componentWillUnmount == "function" && Tm(a, n, u)),
          mn(e, n, a);
        break;
      case 21:
        mn(e, n, a);
        break;
      case 22:
        Wt || ei(a, n),
          (Wt = (u = Wt) || a.memoizedState !== null),
          mn(e, n, a),
          (Wt = u);
        break;
      default:
        mn(e, n, a);
    }
  }
  function zm(e, n) {
    if (
      n.memoizedState === null &&
      ((e = n.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Sa(e);
      } catch (a) {
        Pt(n, n.return, a);
      }
  }
  function Gv(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var n = e.stateNode;
        return n === null && (n = e.stateNode = new wm()), n;
      case 22:
        return (
          (e = e.stateNode),
          (n = e._retryCache),
          n === null && (n = e._retryCache = new wm()),
          n
        );
      default:
        throw Error(s(435, e.tag));
    }
  }
  function zh(e, n) {
    var a = Gv(e);
    n.forEach(function (u) {
      var f = Vv.bind(null, e, u);
      a.has(u) || (a.add(u), u.then(f, f));
    });
  }
  function mi(e, n) {
    var a = n.deletions;
    if (a !== null)
      for (var u = 0; u < a.length; u++) {
        var f = a[u],
          g = e,
          p = n,
          S = p;
        t: for (; S !== null; ) {
          switch (S.tag) {
            case 27:
            case 5:
              (se = S.stateNode), (ii = !1);
              break t;
            case 3:
              (se = S.stateNode.containerInfo), (ii = !0);
              break t;
            case 4:
              (se = S.stateNode.containerInfo), (ii = !0);
              break t;
          }
          S = S.return;
        }
        if (se === null) throw Error(s(160));
        Lm(g, p, f),
          (se = null),
          (ii = !1),
          (g = f.alternate),
          g !== null && (g.return = null),
          (f.return = null);
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; ) Im(n, e), (n = n.sibling);
  }
  var zi = null;
  function Im(e, n) {
    var a = e.alternate,
      u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        mi(n, e),
          yi(e),
          u & 4 && (Kn(3, e, e.return), na(3, e), Kn(5, e, e.return));
        break;
      case 1:
        mi(n, e),
          yi(e),
          u & 512 && (Wt || a === null || ei(a, a.return)),
          u & 64 &&
            _n &&
            ((e = e.updateQueue),
            e !== null &&
              ((u = e.callbacks),
              u !== null &&
                ((a = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = a === null ? u : a.concat(u)))));
        break;
      case 26:
        var f = zi;
        if (
          (mi(n, e),
          yi(e),
          u & 512 && (Wt || a === null || ei(a, a.return)),
          u & 4)
        ) {
          var g = a !== null ? a.memoizedState : null;
          if (((u = e.memoizedState), a === null))
            if (u === null)
              if (e.stateNode === null) {
                t: {
                  (u = e.type),
                    (a = e.memoizedProps),
                    (f = f.ownerDocument || f);
                  e: switch (u) {
                    case "title":
                      (g = f.getElementsByTagName("title")[0]),
                        (!g ||
                          g[Ml] ||
                          g[Ae] ||
                          g.namespaceURI === "http://www.w3.org/2000/svg" ||
                          g.hasAttribute("itemprop")) &&
                          ((g = f.createElement(u)),
                          f.head.insertBefore(
                            g,
                            f.querySelector("head > title"),
                          )),
                        xe(g, u, a),
                        (g[Ae] = e),
                        fe(g),
                        (u = g);
                      break t;
                    case "link":
                      var p = R0("link", "href", f).get(u + (a.href || ""));
                      if (p) {
                        for (var S = 0; S < p.length; S++)
                          if (
                            ((g = p[S]),
                            g.getAttribute("href") ===
                              (a.href == null ? null : a.href) &&
                              g.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              g.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              g.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            p.splice(S, 1);
                            break e;
                          }
                      }
                      (g = f.createElement(u)),
                        xe(g, u, a),
                        f.head.appendChild(g);
                      break;
                    case "meta":
                      if (
                        (p = R0("meta", "content", f).get(
                          u + (a.content || ""),
                        ))
                      ) {
                        for (S = 0; S < p.length; S++)
                          if (
                            ((g = p[S]),
                            g.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              g.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              g.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              g.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              g.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            p.splice(S, 1);
                            break e;
                          }
                      }
                      (g = f.createElement(u)),
                        xe(g, u, a),
                        f.head.appendChild(g);
                      break;
                    default:
                      throw Error(s(468, u));
                  }
                  (g[Ae] = e), fe(g), (u = g);
                }
                e.stateNode = u;
              } else b0(f, e.type, e.stateNode);
            else e.stateNode = T0(f, u, e.memoizedProps);
          else
            g !== u
              ? (g === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : g.count--,
                u === null
                  ? b0(f, e.type, e.stateNode)
                  : T0(f, u, e.memoizedProps))
              : u === null &&
                e.stateNode !== null &&
                bm(e, e.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        if (u & 4 && e.alternate === null) {
          (f = e.stateNode), (g = e.memoizedProps);
          try {
            for (var C = f.firstChild; C; ) {
              var M = C.nextSibling,
                P = C.nodeName;
              C[Ml] ||
                P === "HEAD" ||
                P === "BODY" ||
                P === "SCRIPT" ||
                P === "STYLE" ||
                (P === "LINK" && C.rel.toLowerCase() === "stylesheet") ||
                f.removeChild(C),
                (C = M);
            }
            for (var K = e.type, N = f.attributes; N.length; )
              f.removeAttributeNode(N[0]);
            xe(f, K, g), (f[Ae] = e), (f[Pe] = g);
          } catch (at) {
            Pt(e, e.return, at);
          }
        }
      case 5:
        if (
          (mi(n, e),
          yi(e),
          u & 512 && (Wt || a === null || ei(a, a.return)),
          e.flags & 32)
        ) {
          f = e.stateNode;
          try {
            mr(f, "");
          } catch (at) {
            Pt(e, e.return, at);
          }
        }
        u & 4 &&
          e.stateNode != null &&
          ((f = e.memoizedProps), bm(e, f, a !== null ? a.memoizedProps : f)),
          u & 1024 && (Lh = !0);
        break;
      case 6:
        if ((mi(n, e), yi(e), u & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          (u = e.memoizedProps), (a = e.stateNode);
          try {
            a.nodeValue = u;
          } catch (at) {
            Pt(e, e.return, at);
          }
        }
        break;
      case 3:
        if (
          ((nu = null),
          (f = zi),
          (zi = eu(n.containerInfo)),
          mi(n, e),
          (zi = f),
          yi(e),
          u & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            Sa(n.containerInfo);
          } catch (at) {
            Pt(e, e.return, at);
          }
        Lh && ((Lh = !1), Nm(e));
        break;
      case 4:
        (u = zi),
          (zi = eu(e.stateNode.containerInfo)),
          mi(n, e),
          yi(e),
          (zi = u);
        break;
      case 12:
        mi(n, e), yi(e);
        break;
      case 13:
        mi(n, e),
          yi(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (Ph = kt()),
          u & 4 &&
            ((u = e.updateQueue),
            u !== null && ((e.updateQueue = null), zh(e, u)));
        break;
      case 22:
        if (
          (u & 512 && (Wt || a === null || ei(a, a.return)),
          (C = e.memoizedState !== null),
          (M = a !== null && a.memoizedState !== null),
          (P = _n),
          (K = Wt),
          (_n = P || C),
          (Wt = K || M),
          mi(n, e),
          (Wt = K),
          (_n = P),
          yi(e),
          (n = e.stateNode),
          (n._current = e),
          (n._visibility &= -3),
          (n._visibility |= n._pendingVisibility & 2),
          u & 8192 &&
            ((n._visibility = C ? n._visibility & -2 : n._visibility | 1),
            C && ((n = _n || Wt), a === null || M || n || zr(e)),
            e.memoizedProps === null || e.memoizedProps.mode !== "manual"))
        )
          t: for (a = null, n = e; ; ) {
            if (n.tag === 5 || n.tag === 26 || n.tag === 27) {
              if (a === null) {
                M = a = n;
                try {
                  if (((f = M.stateNode), C))
                    (g = f.style),
                      typeof g.setProperty == "function"
                        ? g.setProperty("display", "none", "important")
                        : (g.display = "none");
                  else {
                    (p = M.stateNode), (S = M.memoizedProps.style);
                    var k =
                      S != null && S.hasOwnProperty("display")
                        ? S.display
                        : null;
                    p.style.display =
                      k == null || typeof k == "boolean" ? "" : ("" + k).trim();
                  }
                } catch (at) {
                  Pt(M, M.return, at);
                }
              }
            } else if (n.tag === 6) {
              if (a === null) {
                M = n;
                try {
                  M.stateNode.nodeValue = C ? "" : M.memoizedProps;
                } catch (at) {
                  Pt(M, M.return, at);
                }
              }
            } else if (
              ((n.tag !== 22 && n.tag !== 23) ||
                n.memoizedState === null ||
                n === e) &&
              n.child !== null
            ) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === e) break t;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === e) break t;
              a === n && (a = null), (n = n.return);
            }
            a === n && (a = null),
              (n.sibling.return = n.return),
              (n = n.sibling);
          }
        u & 4 &&
          ((u = e.updateQueue),
          u !== null &&
            ((a = u.retryQueue),
            a !== null && ((u.retryQueue = null), zh(e, a))));
        break;
      case 19:
        mi(n, e),
          yi(e),
          u & 4 &&
            ((u = e.updateQueue),
            u !== null && ((e.updateQueue = null), zh(e, u)));
        break;
      case 21:
        break;
      default:
        mi(n, e), yi(e);
    }
  }
  function yi(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        if (e.tag !== 27) {
          t: {
            for (var a = e.return; a !== null; ) {
              if (Am(a)) {
                var u = a;
                break t;
              }
              a = a.return;
            }
            throw Error(s(160));
          }
          switch (u.tag) {
            case 27:
              var f = u.stateNode,
                g = Oh(e);
              Yo(e, g, f);
              break;
            case 5:
              var p = u.stateNode;
              u.flags & 32 && (mr(p, ""), (u.flags &= -33));
              var S = Oh(e);
              Yo(e, S, p);
              break;
            case 3:
            case 4:
              var C = u.stateNode.containerInfo,
                M = Oh(e);
              Dh(e, M, C);
              break;
            default:
              throw Error(s(161));
          }
        }
      } catch (P) {
        Pt(e, e.return, P);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function Nm(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var n = e;
        Nm(n),
          n.tag === 5 && n.flags & 1024 && n.stateNode.reset(),
          (e = e.sibling);
      }
  }
  function yn(e, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; ) Om(e, n.alternate, n), (n = n.sibling);
  }
  function zr(e) {
    for (e = e.child; e !== null; ) {
      var n = e;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Kn(4, n, n.return), zr(n);
          break;
        case 1:
          ei(n, n.return);
          var a = n.stateNode;
          typeof a.componentWillUnmount == "function" && Tm(n, n.return, a),
            zr(n);
          break;
        case 26:
        case 27:
        case 5:
          ei(n, n.return), zr(n);
          break;
        case 22:
          ei(n, n.return), n.memoizedState === null && zr(n);
          break;
        default:
          zr(n);
      }
      e = e.sibling;
    }
  }
  function qn(e, n, a) {
    for (a = a && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var u = n.alternate,
        f = e,
        g = n,
        p = g.flags;
      switch (g.tag) {
        case 0:
        case 11:
        case 15:
          qn(f, g, a), na(4, g);
          break;
        case 1:
          if (
            (qn(f, g, a),
            (u = g),
            (f = u.stateNode),
            typeof f.componentDidMount == "function")
          )
            try {
              f.componentDidMount();
            } catch (M) {
              Pt(u, u.return, M);
            }
          if (((u = g), (f = u.updateQueue), f !== null)) {
            var S = u.stateNode;
            try {
              var C = f.shared.hiddenCallbacks;
              if (C !== null)
                for (f.shared.hiddenCallbacks = null, f = 0; f < C.length; f++)
                  Sm(C[f], S);
            } catch (M) {
              Pt(u, u.return, M);
            }
          }
          a && p & 64 && Cm(g), Ps(g, g.return);
          break;
        case 26:
        case 27:
        case 5:
          qn(f, g, a), a && u === null && p & 4 && Rm(g), Ps(g, g.return);
          break;
        case 12:
          qn(f, g, a);
          break;
        case 13:
          qn(f, g, a), a && p & 4 && zm(f, g);
          break;
        case 22:
          g.memoizedState === null && qn(f, g, a), Ps(g, g.return);
          break;
        default:
          qn(f, g, a);
      }
      n = n.sibling;
    }
  }
  function Ih(e, n) {
    var a = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (a = e.memoizedState.cachePool.pool),
      (e = null),
      n.memoizedState !== null &&
        n.memoizedState.cachePool !== null &&
        (e = n.memoizedState.cachePool.pool),
      e !== a && (e != null && e.refCount++, a != null && Kl(a));
  }
  function Nh(e, n) {
    (e = null),
      n.alternate !== null && (e = n.alternate.memoizedState.cache),
      (n = n.memoizedState.cache),
      n !== e && (n.refCount++, e != null && Kl(e));
  }
  function Vn(e, n, a, u) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) Gm(e, n, a, u), (n = n.sibling);
  }
  function Gm(e, n, a, u) {
    var f = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Vn(e, n, a, u), f & 2048 && na(9, n);
        break;
      case 3:
        Vn(e, n, a, u),
          f & 2048 &&
            ((e = null),
            n.alternate !== null && (e = n.alternate.memoizedState.cache),
            (n = n.memoizedState.cache),
            n !== e && (n.refCount++, e != null && Kl(e)));
        break;
      case 12:
        if (f & 2048) {
          Vn(e, n, a, u), (e = n.stateNode);
          try {
            var g = n.memoizedProps,
              p = g.id,
              S = g.onPostCommit;
            typeof S == "function" &&
              S(
                p,
                n.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0,
              );
          } catch (C) {
            Pt(n, n.return, C);
          }
        } else Vn(e, n, a, u);
        break;
      case 23:
        break;
      case 22:
        (g = n.stateNode),
          n.memoizedState !== null
            ? g._visibility & 4
              ? Vn(e, n, a, u)
              : sa(e, n)
            : g._visibility & 4
              ? Vn(e, n, a, u)
              : ((g._visibility |= 4),
                Ir(e, n, a, u, (n.subtreeFlags & 10256) !== 0)),
          f & 2048 && Ih(n.alternate, n);
        break;
      case 24:
        Vn(e, n, a, u), f & 2048 && Nh(n.alternate, n);
        break;
      default:
        Vn(e, n, a, u);
    }
  }
  function Ir(e, n, a, u, f) {
    for (f = f && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var g = e,
        p = n,
        S = a,
        C = u,
        M = p.flags;
      switch (p.tag) {
        case 0:
        case 11:
        case 15:
          Ir(g, p, S, C, f), na(8, p);
          break;
        case 23:
          break;
        case 22:
          var P = p.stateNode;
          p.memoizedState !== null
            ? P._visibility & 4
              ? Ir(g, p, S, C, f)
              : sa(g, p)
            : ((P._visibility |= 4), Ir(g, p, S, C, f)),
            f && M & 2048 && Ih(p.alternate, p);
          break;
        case 24:
          Ir(g, p, S, C, f), f && M & 2048 && Nh(p.alternate, p);
          break;
        default:
          Ir(g, p, S, C, f);
      }
      n = n.sibling;
    }
  }
  function sa(e, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var a = e,
          u = n,
          f = u.flags;
        switch (u.tag) {
          case 22:
            sa(a, u), f & 2048 && Ih(u.alternate, u);
            break;
          case 24:
            sa(a, u), f & 2048 && Nh(u.alternate, u);
            break;
          default:
            sa(a, u);
        }
        n = n.sibling;
      }
  }
  var ra = 8192;
  function Nr(e) {
    if (e.subtreeFlags & ra)
      for (e = e.child; e !== null; ) Fm(e), (e = e.sibling);
  }
  function Fm(e) {
    switch (e.tag) {
      case 26:
        Nr(e),
          e.flags & ra &&
            e.memoizedState !== null &&
            TE(zi, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        Nr(e);
        break;
      case 3:
      case 4:
        var n = zi;
        (zi = eu(e.stateNode.containerInfo)), Nr(e), (zi = n);
        break;
      case 22:
        e.memoizedState === null &&
          ((n = e.alternate),
          n !== null && n.memoizedState !== null
            ? ((n = ra), (ra = 16777216), Nr(e), (ra = n))
            : Nr(e));
        break;
      default:
        Nr(e);
    }
  }
  function Um(e) {
    var n = e.alternate;
    if (n !== null && ((e = n.child), e !== null)) {
      n.child = null;
      do (n = e.sibling), (e.sibling = null), (e = n);
      while (e !== null);
    }
  }
  function la(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var a = 0; a < n.length; a++) {
          var u = n[a];
          (ge = u), Ym(u, e);
        }
      Um(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) Xm(e), (e = e.sibling);
  }
  function Xm(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        la(e), e.flags & 2048 && Kn(9, e, e.return);
        break;
      case 3:
        la(e);
        break;
      case 12:
        la(e);
        break;
      case 22:
        var n = e.stateNode;
        e.memoizedState !== null &&
        n._visibility & 4 &&
        (e.return === null || e.return.tag !== 13)
          ? ((n._visibility &= -5), ko(e))
          : la(e);
        break;
      default:
        la(e);
    }
  }
  function ko(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var a = 0; a < n.length; a++) {
          var u = n[a];
          (ge = u), Ym(u, e);
        }
      Um(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((n = e), n.tag)) {
        case 0:
        case 11:
        case 15:
          Kn(8, n, n.return), ko(n);
          break;
        case 22:
          (a = n.stateNode),
            a._visibility & 4 && ((a._visibility &= -5), ko(n));
          break;
        default:
          ko(n);
      }
      e = e.sibling;
    }
  }
  function Ym(e, n) {
    for (; ge !== null; ) {
      var a = ge;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Kn(8, a, n);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var u = a.memoizedState.cachePool.pool;
            u != null && u.refCount++;
          }
          break;
        case 24:
          Kl(a.memoizedState.cache);
      }
      if (((u = a.child), u !== null)) (u.return = a), (ge = u);
      else
        t: for (a = e; ge !== null; ) {
          u = ge;
          var f = u.sibling,
            g = u.return;
          if ((Dm(u), u === a)) {
            ge = null;
            break t;
          }
          if (f !== null) {
            (f.return = g), (ge = f);
            break t;
          }
          ge = g;
        }
    }
  }
  function Fv(e, n, a, u) {
    (this.tag = e),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = n),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = u),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function pi(e, n, a, u) {
    return new Fv(e, n, a, u);
  }
  function Gh(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Wn(e, n) {
    var a = e.alternate;
    return (
      a === null
        ? ((a = pi(e.tag, n, e.key, e.mode)),
          (a.elementType = e.elementType),
          (a.type = e.type),
          (a.stateNode = e.stateNode),
          (a.alternate = e),
          (e.alternate = a))
        : ((a.pendingProps = n),
          (a.type = e.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = e.flags & 31457280),
      (a.childLanes = e.childLanes),
      (a.lanes = e.lanes),
      (a.child = e.child),
      (a.memoizedProps = e.memoizedProps),
      (a.memoizedState = e.memoizedState),
      (a.updateQueue = e.updateQueue),
      (n = e.dependencies),
      (a.dependencies =
        n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
      (a.sibling = e.sibling),
      (a.index = e.index),
      (a.ref = e.ref),
      (a.refCleanup = e.refCleanup),
      a
    );
  }
  function km(e, n) {
    e.flags &= 31457282;
    var a = e.alternate;
    return (
      a === null
        ? ((e.childLanes = 0),
          (e.lanes = n),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = a.childLanes),
          (e.lanes = a.lanes),
          (e.child = a.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = a.memoizedProps),
          (e.memoizedState = a.memoizedState),
          (e.updateQueue = a.updateQueue),
          (e.type = a.type),
          (n = a.dependencies),
          (e.dependencies =
            n === null
              ? null
              : { lanes: n.lanes, firstContext: n.firstContext })),
      e
    );
  }
  function Po(e, n, a, u, f, g) {
    var p = 0;
    if (((u = e), typeof e == "function")) Gh(e) && (p = 1);
    else if (typeof e == "string")
      p = xE(e, a, Ie.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      t: switch (e) {
        case d:
          return Bs(a.children, f, g, n);
        case _:
          (p = 8), (f |= 24);
          break;
        case m:
          return (
            (e = pi(12, a, n, f | 2)), (e.elementType = m), (e.lanes = g), e
          );
        case b:
          return (e = pi(13, a, n, f)), (e.elementType = b), (e.lanes = g), e;
        case R:
          return (e = pi(19, a, n, f)), (e.elementType = R), (e.lanes = g), e;
        case G:
          return Pm(a, f, g, n);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case y:
              case E:
                p = 10;
                break t;
              case v:
                p = 9;
                break t;
              case x:
                p = 11;
                break t;
              case A:
                p = 14;
                break t;
              case O:
                (p = 16), (u = null);
                break t;
            }
          (p = 29),
            (a = Error(s(130, e === null ? "null" : typeof e, ""))),
            (u = null);
      }
    return (
      (n = pi(p, a, n, f)), (n.elementType = e), (n.type = u), (n.lanes = g), n
    );
  }
  function Bs(e, n, a, u) {
    return (e = pi(7, e, u, n)), (e.lanes = a), e;
  }
  function Pm(e, n, a, u) {
    (e = pi(22, e, u, n)), (e.elementType = G), (e.lanes = a);
    var f = {
      _visibility: 1,
      _pendingVisibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
      _current: null,
      detach: function () {
        var g = f._current;
        if (g === null) throw Error(s(456));
        if ((f._pendingVisibility & 2) === 0) {
          var p = Un(g, 2);
          p !== null && ((f._pendingVisibility |= 2), Ue(p, g, 2));
        }
      },
      attach: function () {
        var g = f._current;
        if (g === null) throw Error(s(456));
        if ((f._pendingVisibility & 2) !== 0) {
          var p = Un(g, 2);
          p !== null && ((f._pendingVisibility &= -3), Ue(p, g, 2));
        }
      },
    };
    return (e.stateNode = f), e;
  }
  function Fh(e, n, a) {
    return (e = pi(6, e, null, n)), (e.lanes = a), e;
  }
  function Uh(e, n, a) {
    return (
      (n = pi(4, e.children !== null ? e.children : [], e.key, n)),
      (n.lanes = a),
      (n.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      n
    );
  }
  function pn(e) {
    e.flags |= 4;
  }
  function Bm(e, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !A0(n))) {
      if (
        ((n = _i.current),
        n !== null &&
          ((wt & 4194176) === wt
            ? Ki !== null
            : ((wt & 62914560) !== wt && (wt & 536870912) === 0) || n !== Ki))
      )
        throw ((Hl = Bc), l_);
      e.flags |= 8192;
    }
  }
  function Bo(e, n) {
    n !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((n = e.tag !== 22 ? $e() : 536870912), (e.lanes |= n), (Fr |= n));
  }
  function aa(e, n) {
    if (!Ot)
      switch (e.tailMode) {
        case "hidden":
          n = e.tail;
          for (var a = null; n !== null; )
            n.alternate !== null && (a = n), (n = n.sibling);
          a === null ? (e.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = e.tail;
          for (var u = null; a !== null; )
            a.alternate !== null && (u = a), (a = a.sibling);
          u === null
            ? n || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (u.sibling = null);
      }
  }
  function qt(e) {
    var n = e.alternate !== null && e.alternate.child === e.child,
      a = 0,
      u = 0;
    if (n)
      for (var f = e.child; f !== null; )
        (a |= f.lanes | f.childLanes),
          (u |= f.subtreeFlags & 31457280),
          (u |= f.flags & 31457280),
          (f.return = e),
          (f = f.sibling);
    else
      for (f = e.child; f !== null; )
        (a |= f.lanes | f.childLanes),
          (u |= f.subtreeFlags),
          (u |= f.flags),
          (f.return = e),
          (f = f.sibling);
    return (e.subtreeFlags |= u), (e.childLanes = a), n;
  }
  function Uv(e, n, a) {
    var u = n.pendingProps;
    switch ((kc(n), n.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return qt(n), null;
      case 1:
        return qt(n), null;
      case 3:
        return (
          (a = n.stateNode),
          (u = null),
          e !== null && (u = e.memoizedState.cache),
          n.memoizedState.cache !== u && (n.flags |= 2048),
          gn(ae),
          ve(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (e === null || e.child === null) &&
            (Yl(n)
              ? pn(n)
              : e === null ||
                (e.memoizedState.isDehydrated && (n.flags & 256) === 0) ||
                ((n.flags |= 1024), Li !== null && (Zh(Li), (Li = null)))),
          qt(n),
          null
        );
      case 26:
        return (
          (a = n.memoizedState),
          e === null
            ? (pn(n),
              a !== null ? (qt(n), Bm(n, a)) : (qt(n), (n.flags &= -16777217)))
            : a
              ? a !== e.memoizedState
                ? (pn(n), qt(n), Bm(n, a))
                : (qt(n), (n.flags &= -16777217))
              : (e.memoizedProps !== u && pn(n), qt(n), (n.flags &= -16777217)),
          null
        );
      case 27:
        Ai(n), (a = Qe.current);
        var f = n.type;
        if (e !== null && n.stateNode != null) e.memoizedProps !== u && pn(n);
        else {
          if (!u) {
            if (n.stateNode === null) throw Error(s(166));
            return qt(n), null;
          }
          (e = Ie.current),
            Yl(n) ? s_(n) : ((e = v0(f, u, a)), (n.stateNode = e), pn(n));
        }
        return qt(n), null;
      case 5:
        if ((Ai(n), (a = n.type), e !== null && n.stateNode != null))
          e.memoizedProps !== u && pn(n);
        else {
          if (!u) {
            if (n.stateNode === null) throw Error(s(166));
            return qt(n), null;
          }
          if (((e = Ie.current), Yl(n))) s_(n);
          else {
            switch (((f = tu(Qe.current)), e)) {
              case 1:
                e = f.createElementNS("http://www.w3.org/2000/svg", a);
                break;
              case 2:
                e = f.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                break;
              default:
                switch (a) {
                  case "svg":
                    e = f.createElementNS("http://www.w3.org/2000/svg", a);
                    break;
                  case "math":
                    e = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a,
                    );
                    break;
                  case "script":
                    (e = f.createElement("div")),
                      (e.innerHTML = "<script><\/script>"),
                      (e = e.removeChild(e.firstChild));
                    break;
                  case "select":
                    (e =
                      typeof u.is == "string"
                        ? f.createElement("select", { is: u.is })
                        : f.createElement("select")),
                      u.multiple
                        ? (e.multiple = !0)
                        : u.size && (e.size = u.size);
                    break;
                  default:
                    e =
                      typeof u.is == "string"
                        ? f.createElement(a, { is: u.is })
                        : f.createElement(a);
                }
            }
            (e[Ae] = n), (e[Pe] = u);
            t: for (f = n.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6) e.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                (f.child.return = f), (f = f.child);
                continue;
              }
              if (f === n) break t;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === n) break t;
                f = f.return;
              }
              (f.sibling.return = f.return), (f = f.sibling);
            }
            n.stateNode = e;
            t: switch ((xe(e, a, u), a)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!u.autoFocus;
                break t;
              case "img":
                e = !0;
                break t;
              default:
                e = !1;
            }
            e && pn(n);
          }
        }
        return qt(n), (n.flags &= -16777217), null;
      case 6:
        if (e && n.stateNode != null) e.memoizedProps !== u && pn(n);
        else {
          if (typeof u != "string" && n.stateNode === null) throw Error(s(166));
          if (((e = Qe.current), Yl(n))) {
            if (
              ((e = n.stateNode),
              (a = n.memoizedProps),
              (u = null),
              (f = Fe),
              f !== null)
            )
              switch (f.tag) {
                case 27:
                case 5:
                  u = f.memoizedProps;
              }
            (e[Ae] = n),
              (e = !!(
                e.nodeValue === a ||
                (u !== null && u.suppressHydrationWarning === !0) ||
                d0(e.nodeValue, a)
              )),
              e || zs(n);
          } else (e = tu(e).createTextNode(u)), (e[Ae] = n), (n.stateNode = e);
        }
        return qt(n), null;
      case 13:
        if (
          ((u = n.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((f = Yl(n)), u !== null && u.dehydrated !== null)) {
            if (e === null) {
              if (!f) throw Error(s(318));
              if (
                ((f = n.memoizedState),
                (f = f !== null ? f.dehydrated : null),
                !f)
              )
                throw Error(s(317));
              f[Ae] = n;
            } else
              kl(),
                (n.flags & 128) === 0 && (n.memoizedState = null),
                (n.flags |= 4);
            qt(n), (f = !1);
          } else Li !== null && (Zh(Li), (Li = null)), (f = !0);
          if (!f) return n.flags & 256 ? (cn(n), n) : (cn(n), null);
        }
        if ((cn(n), (n.flags & 128) !== 0)) return (n.lanes = a), n;
        if (
          ((a = u !== null), (e = e !== null && e.memoizedState !== null), a)
        ) {
          (u = n.child),
            (f = null),
            u.alternate !== null &&
              u.alternate.memoizedState !== null &&
              u.alternate.memoizedState.cachePool !== null &&
              (f = u.alternate.memoizedState.cachePool.pool);
          var g = null;
          u.memoizedState !== null &&
            u.memoizedState.cachePool !== null &&
            (g = u.memoizedState.cachePool.pool),
            g !== f && (u.flags |= 2048);
        }
        return (
          a !== e && a && (n.child.flags |= 8192),
          Bo(n, n.updateQueue),
          qt(n),
          null
        );
      case 4:
        return ve(), e === null && sf(n.stateNode.containerInfo), qt(n), null;
      case 10:
        return gn(n.type), qt(n), null;
      case 19:
        if ((Ut(le), (f = n.memoizedState), f === null)) return qt(n), null;
        if (((u = (n.flags & 128) !== 0), (g = f.rendering), g === null))
          if (u) aa(f, !1);
          else {
            if (Qt !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = n.child; e !== null; ) {
                if (((g = bo(e)), g !== null)) {
                  for (
                    n.flags |= 128,
                      aa(f, !1),
                      e = g.updateQueue,
                      n.updateQueue = e,
                      Bo(n, e),
                      n.subtreeFlags = 0,
                      e = a,
                      a = n.child;
                    a !== null;

                  )
                    km(a, e), (a = a.sibling);
                  return vt(le, (le.current & 1) | 2), n.child;
                }
                e = e.sibling;
              }
            f.tail !== null &&
              kt() > Ho &&
              ((n.flags |= 128), (u = !0), aa(f, !1), (n.lanes = 4194304));
          }
        else {
          if (!u)
            if (((e = bo(g)), e !== null)) {
              if (
                ((n.flags |= 128),
                (u = !0),
                (e = e.updateQueue),
                (n.updateQueue = e),
                Bo(n, e),
                aa(f, !0),
                f.tail === null &&
                  f.tailMode === "hidden" &&
                  !g.alternate &&
                  !Ot)
              )
                return qt(n), null;
            } else
              2 * kt() - f.renderingStartTime > Ho &&
                a !== 536870912 &&
                ((n.flags |= 128), (u = !0), aa(f, !1), (n.lanes = 4194304));
          f.isBackwards
            ? ((g.sibling = n.child), (n.child = g))
            : ((e = f.last),
              e !== null ? (e.sibling = g) : (n.child = g),
              (f.last = g));
        }
        return f.tail !== null
          ? ((n = f.tail),
            (f.rendering = n),
            (f.tail = n.sibling),
            (f.renderingStartTime = kt()),
            (n.sibling = null),
            (e = le.current),
            vt(le, u ? (e & 1) | 2 : e & 1),
            n)
          : (qt(n), null);
      case 22:
      case 23:
        return (
          cn(n),
          jc(),
          (u = n.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== u && (n.flags |= 8192)
            : u && (n.flags |= 8192),
          u
            ? (a & 536870912) !== 0 &&
              (n.flags & 128) === 0 &&
              (qt(n), n.subtreeFlags & 6 && (n.flags |= 8192))
            : qt(n),
          (a = n.updateQueue),
          a !== null && Bo(n, a.retryQueue),
          (a = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          (u = null),
          n.memoizedState !== null &&
            n.memoizedState.cachePool !== null &&
            (u = n.memoizedState.cachePool.pool),
          u !== a && (n.flags |= 2048),
          e !== null && Ut(Ns),
          null
        );
      case 24:
        return (
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          n.memoizedState.cache !== a && (n.flags |= 2048),
          gn(ae),
          qt(n),
          null
        );
      case 25:
        return null;
    }
    throw Error(s(156, n.tag));
  }
  function Xv(e, n) {
    switch ((kc(n), n.tag)) {
      case 1:
        return (
          (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 3:
        return (
          gn(ae),
          ve(),
          (e = n.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((n.flags = (e & -65537) | 128), n)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Ai(n), null;
      case 13:
        if (
          (cn(n), (e = n.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (n.alternate === null) throw Error(s(340));
          kl();
        }
        return (
          (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 19:
        return Ut(le), null;
      case 4:
        return ve(), null;
      case 10:
        return gn(n.type), null;
      case 22:
      case 23:
        return (
          cn(n),
          jc(),
          e !== null && Ut(Ns),
          (e = n.flags),
          e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 24:
        return gn(ae), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Hm(e, n) {
    switch ((kc(n), n.tag)) {
      case 3:
        gn(ae), ve();
        break;
      case 26:
      case 27:
      case 5:
        Ai(n);
        break;
      case 4:
        ve();
        break;
      case 13:
        cn(n);
        break;
      case 19:
        Ut(le);
        break;
      case 10:
        gn(n.type);
        break;
      case 22:
      case 23:
        cn(n), jc(), e !== null && Ut(Ns);
        break;
      case 24:
        gn(ae);
    }
  }
  var Yv = {
      getCacheForType: function (e) {
        var n = we(ae),
          a = n.data.get(e);
        return a === void 0 && ((a = e()), n.data.set(e, a)), a;
      },
    },
    kv = typeof WeakMap == "function" ? WeakMap : Map,
    Vt = 0,
    Bt = null,
    Rt = null,
    wt = 0,
    Ht = 0,
    ni = null,
    vn = !1,
    Gr = !1,
    Xh = !1,
    En = 0,
    Qt = 0,
    Qn = 0,
    Hs = 0,
    Yh = 0,
    vi = 0,
    Fr = 0,
    oa = null,
    Vi = null,
    kh = !1,
    Ph = 0,
    Ho = 1 / 0,
    jo = null,
    Jn = null,
    Zo = !1,
    js = null,
    ua = 0,
    Bh = 0,
    Hh = null,
    ca = 0,
    jh = null;
  function si() {
    if ((Vt & 2) !== 0 && wt !== 0) return wt & -wt;
    if (F.T !== null) {
      var e = wr;
      return e !== 0 ? e : $h();
    }
    return so();
  }
  function jm() {
    vi === 0 && (vi = (wt & 536870912) === 0 || Ot ? Ne() : 536870912);
    var e = _i.current;
    return e !== null && (e.flags |= 32), vi;
  }
  function Ue(e, n, a) {
    ((e === Bt && Ht === 2) || e.cancelPendingCommit !== null) &&
      (Ur(e, 0), Sn(e, wt, vi, !1)),
      Ge(e, a),
      ((Vt & 2) === 0 || e !== Bt) &&
        (e === Bt &&
          ((Vt & 2) === 0 && (Hs |= a), Qt === 4 && Sn(e, wt, vi, !1)),
        Wi(e));
  }
  function Zm(e, n, a) {
    if ((Vt & 6) !== 0) throw Error(s(327));
    var u = (!a && (n & 60) === 0 && (n & e.expiredLanes) === 0) || ce(e, n),
      f = u ? Hv(e, n) : Vh(e, n, !0),
      g = u;
    do {
      if (f === 0) {
        Gr && !u && Sn(e, n, 0, !1);
        break;
      } else if (f === 6) Sn(e, n, 0, !vn);
      else {
        if (((a = e.current.alternate), g && !Pv(a))) {
          (f = Vh(e, n, !1)), (g = !1);
          continue;
        }
        if (f === 2) {
          if (((g = n), e.errorRecoveryDisabledLanes & g)) var p = 0;
          else
            (p = e.pendingLanes & -536870913),
              (p = p !== 0 ? p : p & 536870912 ? 536870912 : 0);
          if (p !== 0) {
            n = p;
            t: {
              var S = e;
              f = oa;
              var C = S.current.memoizedState.isDehydrated;
              if ((C && (Ur(S, p).flags |= 256), (p = Vh(S, p, !1)), p !== 2)) {
                if (Xh && !C) {
                  (S.errorRecoveryDisabledLanes |= g), (Hs |= g), (f = 4);
                  break t;
                }
                (g = Vi), (Vi = f), g !== null && Zh(g);
              }
              f = p;
            }
            if (((g = !1), f !== 2)) continue;
          }
        }
        if (f === 1) {
          Ur(e, 0), Sn(e, n, 0, !0);
          break;
        }
        t: {
          switch (((u = e), f)) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((n & 4194176) === n) {
                Sn(u, n, vi, !vn);
                break t;
              }
              break;
            case 2:
              Vi = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if (
            ((u.finishedWork = a),
            (u.finishedLanes = n),
            (n & 62914560) === n && ((g = Ph + 300 - kt()), 10 < g))
          ) {
            if ((Sn(u, n, vi, !vn), Rs(u, 0) !== 0)) break t;
            u.timeoutHandle = m0(
              Km.bind(null, u, a, Vi, jo, kh, n, vi, Hs, Fr, vn, 2, -0, 0),
              g,
            );
            break t;
          }
          Km(u, a, Vi, jo, kh, n, vi, Hs, Fr, vn, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Wi(e);
  }
  function Zh(e) {
    Vi === null ? (Vi = e) : Vi.push.apply(Vi, e);
  }
  function Km(e, n, a, u, f, g, p, S, C, M, P, K, N) {
    var k = n.subtreeFlags;
    if (
      (k & 8192 || (k & 16785408) === 16785408) &&
      ((ma = { stylesheets: null, count: 0, unsuspend: CE }),
      Fm(n),
      (n = RE()),
      n !== null)
    ) {
      (e.cancelPendingCommit = n(t0.bind(null, e, a, u, f, p, S, C, 1, K, N))),
        Sn(e, g, p, !M);
      return;
    }
    t0(e, a, u, f, p, S, C, P, K, N);
  }
  function Pv(e) {
    for (var n = e; ; ) {
      var a = n.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        n.flags & 16384 &&
        ((a = n.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var u = 0; u < a.length; u++) {
          var f = a[u],
            g = f.getSnapshot;
          f = f.value;
          try {
            if (!ti(g(), f)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = n.child), n.subtreeFlags & 16384 && a !== null))
        (a.return = n), (n = a);
      else {
        if (n === e) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) return !0;
          n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
      }
    }
    return !0;
  }
  function Sn(e, n, a, u) {
    (n &= ~Yh),
      (n &= ~Hs),
      (e.suspendedLanes |= n),
      (e.pingedLanes &= ~n),
      u && (e.warmLanes |= n),
      (u = e.expirationTimes);
    for (var f = n; 0 < f; ) {
      var g = 31 - Re(f),
        p = 1 << g;
      (u[g] = -1), (f &= ~p);
    }
    a !== 0 && Zt(e, a, n);
  }
  function Ko() {
    return (Vt & 6) === 0 ? (ha(0), !1) : !0;
  }
  function Kh() {
    if (Rt !== null) {
      if (Ht === 0) var e = Rt.return;
      else (e = Rt), (dn = Ys = null), $c(e), (br = null), (jl = 0), (e = Rt);
      for (; e !== null; ) Hm(e.alternate, e), (e = e.return);
      Rt = null;
    }
  }
  function Ur(e, n) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var a = e.timeoutHandle;
    a !== -1 && ((e.timeoutHandle = -1), aE(a)),
      (a = e.cancelPendingCommit),
      a !== null && ((e.cancelPendingCommit = null), a()),
      Kh(),
      (Bt = e),
      (Rt = a = Wn(e.current, null)),
      (wt = n),
      (Ht = 0),
      (ni = null),
      (vn = !1),
      (Gr = ce(e, n)),
      (Xh = !1),
      (Fr = vi = Yh = Hs = Qn = Qt = 0),
      (Vi = oa = null),
      (kh = !1),
      (n & 8) !== 0 && (n |= n & 32);
    var u = e.entangledLanes;
    if (u !== 0)
      for (e = e.entanglements, u &= n; 0 < u; ) {
        var f = 31 - Re(u),
          g = 1 << f;
        (n |= e[f]), (u &= ~g);
      }
    return (En = n), yo(), a;
  }
  function qm(e, n) {
    (Ct = null),
      (F.H = qi),
      n === Bl
        ? ((n = u_()), (Ht = 3))
        : n === l_
          ? ((n = u_()), (Ht = 4))
          : (Ht =
              n === am
                ? 8
                : n !== null &&
                    typeof n == "object" &&
                    typeof n.then == "function"
                  ? 6
                  : 1),
      (ni = n),
      Rt === null && ((Qt = 1), Fo(e, fi(n, e.current)));
  }
  function Vm() {
    var e = F.H;
    return (F.H = qi), e === null ? qi : e;
  }
  function Wm() {
    var e = F.A;
    return (F.A = Yv), e;
  }
  function qh() {
    (Qt = 4),
      vn || ((wt & 4194176) !== wt && _i.current !== null) || (Gr = !0),
      ((Qn & 134217727) === 0 && (Hs & 134217727) === 0) ||
        Bt === null ||
        Sn(Bt, wt, vi, !1);
  }
  function Vh(e, n, a) {
    var u = Vt;
    Vt |= 2;
    var f = Vm(),
      g = Wm();
    (Bt !== e || wt !== n) && ((jo = null), Ur(e, n)), (n = !1);
    var p = Qt;
    t: do
      try {
        if (Ht !== 0 && Rt !== null) {
          var S = Rt,
            C = ni;
          switch (Ht) {
            case 8:
              Kh(), (p = 6);
              break t;
            case 3:
            case 2:
            case 6:
              _i.current === null && (n = !0);
              var M = Ht;
              if (((Ht = 0), (ni = null), Xr(e, S, C, M), a && Gr)) {
                p = 0;
                break t;
              }
              break;
            default:
              (M = Ht), (Ht = 0), (ni = null), Xr(e, S, C, M);
          }
        }
        Bv(), (p = Qt);
        break;
      } catch (P) {
        qm(e, P);
      }
    while (!0);
    return (
      n && e.shellSuspendCounter++,
      (dn = Ys = null),
      (Vt = u),
      (F.H = f),
      (F.A = g),
      Rt === null && ((Bt = null), (wt = 0), yo()),
      p
    );
  }
  function Bv() {
    for (; Rt !== null; ) Qm(Rt);
  }
  function Hv(e, n) {
    var a = Vt;
    Vt |= 2;
    var u = Vm(),
      f = Wm();
    Bt !== e || wt !== n
      ? ((jo = null), (Ho = kt() + 500), Ur(e, n))
      : (Gr = ce(e, n));
    t: do
      try {
        if (Ht !== 0 && Rt !== null) {
          n = Rt;
          var g = ni;
          e: switch (Ht) {
            case 1:
              (Ht = 0), (ni = null), Xr(e, n, g, 1);
              break;
            case 2:
              if (a_(g)) {
                (Ht = 0), (ni = null), Jm(n);
                break;
              }
              (n = function () {
                Ht === 2 && Bt === e && (Ht = 7), Wi(e);
              }),
                g.then(n, n);
              break t;
            case 3:
              Ht = 7;
              break t;
            case 4:
              Ht = 5;
              break t;
            case 7:
              a_(g)
                ? ((Ht = 0), (ni = null), Jm(n))
                : ((Ht = 0), (ni = null), Xr(e, n, g, 7));
              break;
            case 5:
              var p = null;
              switch (Rt.tag) {
                case 26:
                  p = Rt.memoizedState;
                case 5:
                case 27:
                  var S = Rt;
                  if (!p || A0(p)) {
                    (Ht = 0), (ni = null);
                    var C = S.sibling;
                    if (C !== null) Rt = C;
                    else {
                      var M = S.return;
                      M !== null ? ((Rt = M), qo(M)) : (Rt = null);
                    }
                    break e;
                  }
              }
              (Ht = 0), (ni = null), Xr(e, n, g, 5);
              break;
            case 6:
              (Ht = 0), (ni = null), Xr(e, n, g, 6);
              break;
            case 8:
              Kh(), (Qt = 6);
              break t;
            default:
              throw Error(s(462));
          }
        }
        jv();
        break;
      } catch (P) {
        qm(e, P);
      }
    while (!0);
    return (
      (dn = Ys = null),
      (F.H = u),
      (F.A = f),
      (Vt = a),
      Rt !== null ? 0 : ((Bt = null), (wt = 0), yo(), Qt)
    );
  }
  function jv() {
    for (; Rt !== null && !Mi(); ) Qm(Rt);
  }
  function Qm(e) {
    var n = vm(e.alternate, e, En);
    (e.memoizedProps = e.pendingProps), n === null ? qo(e) : (Rt = n);
  }
  function Jm(e) {
    var n = e,
      a = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = dm(a, n, n.pendingProps, n.type, void 0, wt);
        break;
      case 11:
        n = dm(a, n, n.pendingProps, n.type.render, n.ref, wt);
        break;
      case 5:
        $c(n);
      default:
        Hm(a, n), (n = Rt = km(n, En)), (n = vm(a, n, En));
    }
    (e.memoizedProps = e.pendingProps), n === null ? qo(e) : (Rt = n);
  }
  function Xr(e, n, a, u) {
    (dn = Ys = null), $c(n), (br = null), (jl = 0);
    var f = n.return;
    try {
      if (zv(e, f, n, a, wt)) {
        (Qt = 1), Fo(e, fi(a, e.current)), (Rt = null);
        return;
      }
    } catch (g) {
      if (f !== null) throw ((Rt = f), g);
      (Qt = 1), Fo(e, fi(a, e.current)), (Rt = null);
      return;
    }
    n.flags & 32768
      ? (Ot || u === 1
          ? (e = !0)
          : Gr || (wt & 536870912) !== 0
            ? (e = !1)
            : ((vn = e = !0),
              (u === 2 || u === 3 || u === 6) &&
                ((u = _i.current),
                u !== null && u.tag === 13 && (u.flags |= 16384))),
        $m(n, e))
      : qo(n);
  }
  function qo(e) {
    var n = e;
    do {
      if ((n.flags & 32768) !== 0) {
        $m(n, vn);
        return;
      }
      e = n.return;
      var a = Uv(n.alternate, n, En);
      if (a !== null) {
        Rt = a;
        return;
      }
      if (((n = n.sibling), n !== null)) {
        Rt = n;
        return;
      }
      Rt = n = e;
    } while (n !== null);
    Qt === 0 && (Qt = 5);
  }
  function $m(e, n) {
    do {
      var a = Xv(e.alternate, e);
      if (a !== null) {
        (a.flags &= 32767), (Rt = a);
        return;
      }
      if (
        ((a = e.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !n && ((e = e.sibling), e !== null))
      ) {
        Rt = e;
        return;
      }
      Rt = e = a;
    } while (e !== null);
    (Qt = 6), (Rt = null);
  }
  function t0(e, n, a, u, f, g, p, S, C, M) {
    var P = F.T,
      K = J.p;
    try {
      (J.p = 2), (F.T = null), Zv(e, n, a, u, K, f, g, p, S, C, M);
    } finally {
      (F.T = P), (J.p = K);
    }
  }
  function Zv(e, n, a, u, f, g, p, S) {
    do Yr();
    while (js !== null);
    if ((Vt & 6) !== 0) throw Error(s(327));
    var C = e.finishedWork;
    if (((u = e.finishedLanes), C === null)) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), C === e.current))
      throw Error(s(177));
    (e.callbackNode = null),
      (e.callbackPriority = 0),
      (e.cancelPendingCommit = null);
    var M = C.lanes | C.childLanes;
    if (
      ((M |= Uc),
      Oi(e, u, M, g, p, S),
      e === Bt && ((Rt = Bt = null), (wt = 0)),
      ((C.subtreeFlags & 10256) === 0 && (C.flags & 10256) === 0) ||
        Zo ||
        ((Zo = !0),
        (Bh = M),
        (Hh = a),
        Wv(cr, function () {
          return Yr(), null;
        })),
      (a = (C.flags & 15990) !== 0),
      (C.subtreeFlags & 15990) !== 0 || a
        ? ((a = F.T),
          (F.T = null),
          (g = J.p),
          (J.p = 2),
          (p = Vt),
          (Vt |= 4),
          Nv(e, C),
          Im(C, e),
          mv(of, e.containerInfo),
          (lu = !!af),
          (of = af = null),
          (e.current = C),
          Om(e, C.alternate, C),
          sn(),
          (Vt = p),
          (J.p = g),
          (F.T = a))
        : (e.current = C),
      Zo ? ((Zo = !1), (js = e), (ua = u)) : e0(e, M),
      (M = e.pendingLanes),
      M === 0 && (Jn = null),
      no(C.stateNode),
      Wi(e),
      n !== null)
    )
      for (f = e.onRecoverableError, C = 0; C < n.length; C++)
        (M = n[C]), f(M.value, { componentStack: M.stack });
    return (
      (ua & 3) !== 0 && Yr(),
      (M = e.pendingLanes),
      (u & 4194218) !== 0 && (M & 42) !== 0
        ? e === jh
          ? ca++
          : ((ca = 0), (jh = e))
        : (ca = 0),
      ha(0),
      null
    );
  }
  function e0(e, n) {
    (e.pooledCacheLanes &= n) === 0 &&
      ((n = e.pooledCache), n != null && ((e.pooledCache = null), Kl(n)));
  }
  function Yr() {
    if (js !== null) {
      var e = js,
        n = Bh;
      Bh = 0;
      var a = oi(ua),
        u = F.T,
        f = J.p;
      try {
        if (((J.p = 32 > a ? 32 : a), (F.T = null), js === null)) var g = !1;
        else {
          (a = Hh), (Hh = null);
          var p = js,
            S = ua;
          if (((js = null), (ua = 0), (Vt & 6) !== 0)) throw Error(s(331));
          var C = Vt;
          if (
            ((Vt |= 4),
            Xm(p.current),
            Gm(p, p.current, S, a),
            (Vt = C),
            ha(0, !1),
            Te && typeof Te.onPostCommitFiberRoot == "function")
          )
            try {
              Te.onPostCommitFiberRoot(Cs, p);
            } catch {}
          g = !0;
        }
        return g;
      } finally {
        (J.p = f), (F.T = u), e0(e, n);
      }
    }
    return !1;
  }
  function i0(e, n, a) {
    (n = fi(a, n)),
      (n = dh(e.stateNode, n, 2)),
      (e = Zn(e, n, 2)),
      e !== null && (Ge(e, 2), Wi(e));
  }
  function Pt(e, n, a) {
    if (e.tag === 3) i0(e, e, a);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          i0(n, e, a);
          break;
        } else if (n.tag === 1) {
          var u = n.stateNode;
          if (
            typeof n.type.getDerivedStateFromError == "function" ||
            (typeof u.componentDidCatch == "function" &&
              (Jn === null || !Jn.has(u)))
          ) {
            (e = fi(a, e)),
              (a = rm(2)),
              (u = Zn(n, a, 2)),
              u !== null && (lm(a, u, n, e), Ge(u, 2), Wi(u));
            break;
          }
        }
        n = n.return;
      }
  }
  function Wh(e, n, a) {
    var u = e.pingCache;
    if (u === null) {
      u = e.pingCache = new kv();
      var f = new Set();
      u.set(n, f);
    } else (f = u.get(n)), f === void 0 && ((f = new Set()), u.set(n, f));
    f.has(a) ||
      ((Xh = !0), f.add(a), (e = Kv.bind(null, e, n, a)), n.then(e, e));
  }
  function Kv(e, n, a) {
    var u = e.pingCache;
    u !== null && u.delete(n),
      (e.pingedLanes |= e.suspendedLanes & a),
      (e.warmLanes &= ~a),
      Bt === e &&
        (wt & a) === a &&
        (Qt === 4 || (Qt === 3 && (wt & 62914560) === wt && 300 > kt() - Ph)
          ? (Vt & 2) === 0 && Ur(e, 0)
          : (Yh |= a),
        Fr === wt && (Fr = 0)),
      Wi(e);
  }
  function n0(e, n) {
    n === 0 && (n = $e()), (e = Un(e, n)), e !== null && (Ge(e, n), Wi(e));
  }
  function qv(e) {
    var n = e.memoizedState,
      a = 0;
    n !== null && (a = n.retryLane), n0(e, a);
  }
  function Vv(e, n) {
    var a = 0;
    switch (e.tag) {
      case 13:
        var u = e.stateNode,
          f = e.memoizedState;
        f !== null && (a = f.retryLane);
        break;
      case 19:
        u = e.stateNode;
        break;
      case 22:
        u = e.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    u !== null && u.delete(n), n0(e, a);
  }
  function Wv(e, n) {
    return Pi(e, n);
  }
  var Vo = null,
    kr = null,
    Qh = !1,
    Wo = !1,
    Jh = !1,
    Zs = 0;
  function Wi(e) {
    e !== kr &&
      e.next === null &&
      (kr === null ? (Vo = kr = e) : (kr = kr.next = e)),
      (Wo = !0),
      Qh || ((Qh = !0), Jv(Qv));
  }
  function ha(e, n) {
    if (!Jh && Wo) {
      Jh = !0;
      do
        for (var a = !1, u = Vo; u !== null; ) {
          if (e !== 0) {
            var f = u.pendingLanes;
            if (f === 0) var g = 0;
            else {
              var p = u.suspendedLanes,
                S = u.pingedLanes;
              (g = (1 << (31 - Re(42 | e) + 1)) - 1),
                (g &= f & ~(p & ~S)),
                (g = g & 201326677 ? (g & 201326677) | 1 : g ? g | 2 : 0);
            }
            g !== 0 && ((a = !0), l0(u, g));
          } else
            (g = wt),
              (g = Rs(u, u === Bt ? g : 0)),
              (g & 3) === 0 || ce(u, g) || ((a = !0), l0(u, g));
          u = u.next;
        }
      while (a);
      Jh = !1;
    }
  }
  function Qv() {
    Wo = Qh = !1;
    var e = 0;
    Zs !== 0 && (lE() && (e = Zs), (Zs = 0));
    for (var n = kt(), a = null, u = Vo; u !== null; ) {
      var f = u.next,
        g = s0(u, n);
      g === 0
        ? ((u.next = null),
          a === null ? (Vo = f) : (a.next = f),
          f === null && (kr = a))
        : ((a = u), (e !== 0 || (g & 3) !== 0) && (Wo = !0)),
        (u = f);
    }
    ha(e);
  }
  function s0(e, n) {
    for (
      var a = e.suspendedLanes,
        u = e.pingedLanes,
        f = e.expirationTimes,
        g = e.pendingLanes & -62914561;
      0 < g;

    ) {
      var p = 31 - Re(g),
        S = 1 << p,
        C = f[p];
      C === -1
        ? ((S & a) === 0 || (S & u) !== 0) && (f[p] = rn(S, n))
        : C <= n && (e.expiredLanes |= S),
        (g &= ~S);
    }
    if (
      ((n = Bt),
      (a = wt),
      (a = Rs(e, e === n ? a : 0)),
      (u = e.callbackNode),
      a === 0 || (e === n && Ht === 2) || e.cancelPendingCommit !== null)
    )
      return (
        u !== null && u !== null && nn(u),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((a & 3) === 0 || ce(e, a)) {
      if (((n = a & -a), n === e.callbackPriority)) return n;
      switch ((u !== null && nn(u), oi(a))) {
        case 2:
        case 8:
          a = xs;
          break;
        case 32:
          a = cr;
          break;
        case 268435456:
          a = bl;
          break;
        default:
          a = cr;
      }
      return (
        (u = r0.bind(null, e)),
        (a = Pi(a, u)),
        (e.callbackPriority = n),
        (e.callbackNode = a),
        n
      );
    }
    return (
      u !== null && u !== null && nn(u),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function r0(e, n) {
    var a = e.callbackNode;
    if (Yr() && e.callbackNode !== a) return null;
    var u = wt;
    return (
      (u = Rs(e, e === Bt ? u : 0)),
      u === 0
        ? null
        : (Zm(e, u, n),
          s0(e, kt()),
          e.callbackNode != null && e.callbackNode === a
            ? r0.bind(null, e)
            : null)
    );
  }
  function l0(e, n) {
    if (Yr()) return null;
    Zm(e, n, !0);
  }
  function Jv(e) {
    oE(function () {
      (Vt & 6) !== 0 ? Pi(Ss, e) : e();
    });
  }
  function $h() {
    return Zs === 0 && (Zs = Ne()), Zs;
  }
  function a0(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : uo("" + e);
  }
  function o0(e, n) {
    var a = n.ownerDocument.createElement("input");
    return (
      (a.name = n.name),
      (a.value = n.value),
      e.id && a.setAttribute("form", e.id),
      n.parentNode.insertBefore(a, n),
      (e = new FormData(e)),
      a.parentNode.removeChild(a),
      e
    );
  }
  function $v(e, n, a, u, f) {
    if (n === "submit" && a && a.stateNode === f) {
      var g = a0((f[Pe] || null).action),
        p = u.submitter;
      p &&
        ((n = (n = p[Pe] || null)
          ? a0(n.formAction)
          : p.getAttribute("formAction")),
        n !== null && ((g = n), (p = null)));
      var S = new go("action", "action", null, u, f);
      e.push({
        event: S,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (u.defaultPrevented) {
                if (Zs !== 0) {
                  var C = p ? o0(f, p) : new FormData(f);
                  oh(
                    a,
                    { pending: !0, data: C, method: f.method, action: g },
                    null,
                    C,
                  );
                }
              } else
                typeof g == "function" &&
                  (S.preventDefault(),
                  (C = p ? o0(f, p) : new FormData(f)),
                  oh(
                    a,
                    { pending: !0, data: C, method: f.method, action: g },
                    g,
                    C,
                  ));
            },
            currentTarget: f,
          },
        ],
      });
    }
  }
  for (var tf = 0; tf < t_.length; tf++) {
    var ef = t_[tf],
      tE = ef.toLowerCase(),
      eE = ef[0].toUpperCase() + ef.slice(1);
    Di(tE, "on" + eE);
  }
  Di(Vg, "onAnimationEnd"),
    Di(Wg, "onAnimationIteration"),
    Di(Qg, "onAnimationStart"),
    Di("dblclick", "onDoubleClick"),
    Di("focusin", "onFocus"),
    Di("focusout", "onBlur"),
    Di(pv, "onTransitionRun"),
    Di(vv, "onTransitionStart"),
    Di(Ev, "onTransitionCancel"),
    Di(Jg, "onTransitionEnd"),
    gr("onMouseEnter", ["mouseout", "mouseover"]),
    gr("onMouseLeave", ["mouseout", "mouseover"]),
    gr("onPointerEnter", ["pointerout", "pointerover"]),
    gr("onPointerLeave", ["pointerout", "pointerover"]),
    As(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    As(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    As("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    As(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    As(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    As(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    );
  var fa =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    iE = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(fa),
    );
  function u0(e, n) {
    n = (n & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var u = e[a],
        f = u.event;
      u = u.listeners;
      t: {
        var g = void 0;
        if (n)
          for (var p = u.length - 1; 0 <= p; p--) {
            var S = u[p],
              C = S.instance,
              M = S.currentTarget;
            if (((S = S.listener), C !== g && f.isPropagationStopped()))
              break t;
            (g = S), (f.currentTarget = M);
            try {
              g(f);
            } catch (P) {
              Go(P);
            }
            (f.currentTarget = null), (g = C);
          }
        else
          for (p = 0; p < u.length; p++) {
            if (
              ((S = u[p]),
              (C = S.instance),
              (M = S.currentTarget),
              (S = S.listener),
              C !== g && f.isPropagationStopped())
            )
              break t;
            (g = S), (f.currentTarget = M);
            try {
              g(f);
            } catch (P) {
              Go(P);
            }
            (f.currentTarget = null), (g = C);
          }
      }
    }
  }
  function bt(e, n) {
    var a = n[yc];
    a === void 0 && (a = n[yc] = new Set());
    var u = e + "__bubble";
    a.has(u) || (c0(n, e, 2, !1), a.add(u));
  }
  function nf(e, n, a) {
    var u = 0;
    n && (u |= 4), c0(a, e, u, n);
  }
  var Qo = "_reactListening" + Math.random().toString(36).slice(2);
  function sf(e) {
    if (!e[Qo]) {
      (e[Qo] = !0),
        dg.forEach(function (a) {
          a !== "selectionchange" && (iE.has(a) || nf(a, !1, e), nf(a, !0, e));
        });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[Qo] || ((n[Qo] = !0), nf("selectionchange", !1, n));
    }
  }
  function c0(e, n, a, u) {
    switch (z0(n)) {
      case 2:
        var f = wE;
        break;
      case 8:
        f = ME;
        break;
      default:
        f = yf;
    }
    (a = f.bind(null, n, a, e)),
      (f = void 0),
      !Rc ||
        (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
        (f = !0),
      u
        ? f !== void 0
          ? e.addEventListener(n, a, { capture: !0, passive: f })
          : e.addEventListener(n, a, !0)
        : f !== void 0
          ? e.addEventListener(n, a, { passive: f })
          : e.addEventListener(n, a, !1);
  }
  function rf(e, n, a, u, f) {
    var g = u;
    if ((n & 1) === 0 && (n & 2) === 0 && u !== null)
      t: for (;;) {
        if (u === null) return;
        var p = u.tag;
        if (p === 3 || p === 4) {
          var S = u.stateNode.containerInfo;
          if (S === f || (S.nodeType === 8 && S.parentNode === f)) break;
          if (p === 4)
            for (p = u.return; p !== null; ) {
              var C = p.tag;
              if (
                (C === 3 || C === 4) &&
                ((C = p.stateNode.containerInfo),
                C === f || (C.nodeType === 8 && C.parentNode === f))
              )
                return;
              p = p.return;
            }
          for (; S !== null; ) {
            if (((p = bs(S)), p === null)) return;
            if (((C = p.tag), C === 5 || C === 6 || C === 26 || C === 27)) {
              u = g = p;
              continue t;
            }
            S = S.parentNode;
          }
        }
        u = u.return;
      }
    Rg(function () {
      var M = g,
        P = Cc(a),
        K = [];
      t: {
        var N = $g.get(e);
        if (N !== void 0) {
          var k = go,
            at = e;
          switch (e) {
            case "keypress":
              if (ho(a) === 0) break t;
            case "keydown":
            case "keyup":
              k = V1;
              break;
            case "focusin":
              (at = "focus"), (k = Mc);
              break;
            case "focusout":
              (at = "blur"), (k = Mc);
              break;
            case "beforeblur":
            case "afterblur":
              k = Mc;
              break;
            case "click":
              if (a.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              k = wg;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              k = F1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              k = J1;
              break;
            case Vg:
            case Wg:
            case Qg:
              k = Y1;
              break;
            case Jg:
              k = tv;
              break;
            case "scroll":
            case "scrollend":
              k = N1;
              break;
            case "wheel":
              k = iv;
              break;
            case "copy":
            case "cut":
            case "paste":
              k = P1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              k = Og;
              break;
            case "toggle":
            case "beforetoggle":
              k = sv;
          }
          var yt = (n & 4) !== 0,
            Jt = !yt && (e === "scroll" || e === "scrollend"),
            L = yt ? (N !== null ? N + "Capture" : null) : N;
          yt = [];
          for (var w = M, I; w !== null; ) {
            var H = w;
            if (
              ((I = H.stateNode),
              (H = H.tag),
              (H !== 5 && H !== 26 && H !== 27) ||
                I === null ||
                L === null ||
                ((H = Dl(w, L)), H != null && yt.push(da(w, H, I))),
              Jt)
            )
              break;
            w = w.return;
          }
          0 < yt.length &&
            ((N = new k(N, at, null, a, P)),
            K.push({ event: N, listeners: yt }));
        }
      }
      if ((n & 7) === 0) {
        t: {
          if (
            ((N = e === "mouseover" || e === "pointerover"),
            (k = e === "mouseout" || e === "pointerout"),
            N &&
              a !== xc &&
              (at = a.relatedTarget || a.fromElement) &&
              (bs(at) || at[hr]))
          )
            break t;
          if (
            (k || N) &&
            ((N =
              P.window === P
                ? P
                : (N = P.ownerDocument)
                  ? N.defaultView || N.parentWindow
                  : window),
            k
              ? ((at = a.relatedTarget || a.toElement),
                (k = M),
                (at = at ? bs(at) : null),
                at !== null &&
                  ((Jt = W(at)),
                  (yt = at.tag),
                  at !== Jt || (yt !== 5 && yt !== 27 && yt !== 6)) &&
                  (at = null))
              : ((k = null), (at = M)),
            k !== at)
          ) {
            if (
              ((yt = wg),
              (H = "onMouseLeave"),
              (L = "onMouseEnter"),
              (w = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((yt = Og),
                (H = "onPointerLeave"),
                (L = "onPointerEnter"),
                (w = "pointer")),
              (Jt = k == null ? N : Ol(k)),
              (I = at == null ? N : Ol(at)),
              (N = new yt(H, w + "leave", k, a, P)),
              (N.target = Jt),
              (N.relatedTarget = I),
              (H = null),
              bs(P) === M &&
                ((yt = new yt(L, w + "enter", at, a, P)),
                (yt.target = I),
                (yt.relatedTarget = Jt),
                (H = yt)),
              (Jt = H),
              k && at)
            )
              e: {
                for (yt = k, L = at, w = 0, I = yt; I; I = Pr(I)) w++;
                for (I = 0, H = L; H; H = Pr(H)) I++;
                for (; 0 < w - I; ) (yt = Pr(yt)), w--;
                for (; 0 < I - w; ) (L = Pr(L)), I--;
                for (; w--; ) {
                  if (yt === L || (L !== null && yt === L.alternate)) break e;
                  (yt = Pr(yt)), (L = Pr(L));
                }
                yt = null;
              }
            else yt = null;
            k !== null && h0(K, N, k, yt, !1),
              at !== null && Jt !== null && h0(K, Jt, at, yt, !0);
          }
        }
        t: {
          if (
            ((N = M ? Ol(M) : window),
            (k = N.nodeName && N.nodeName.toLowerCase()),
            k === "select" || (k === "input" && N.type === "file"))
          )
            var et = Ug;
          else if (Gg(N))
            if (Xg) et = gv;
            else {
              et = fv;
              var Tt = hv;
            }
          else
            (k = N.nodeName),
              !k ||
              k.toLowerCase() !== "input" ||
              (N.type !== "checkbox" && N.type !== "radio")
                ? M && Sc(M.elementType) && (et = Ug)
                : (et = dv);
          if (et && (et = et(e, M))) {
            Fg(K, et, a, P);
            break t;
          }
          Tt && Tt(e, N, M),
            e === "focusout" &&
              M &&
              N.type === "number" &&
              M.memoizedProps.value != null &&
              Ec(N, "number", N.value);
        }
        switch (((Tt = M ? Ol(M) : window), e)) {
          case "focusin":
            (Gg(Tt) || Tt.contentEditable === "true") &&
              ((Er = Tt), (Nc = M), (Xl = null));
            break;
          case "focusout":
            Xl = Nc = Er = null;
            break;
          case "mousedown":
            Gc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Gc = !1), Kg(K, a, P);
            break;
          case "selectionchange":
            if (yv) break;
          case "keydown":
          case "keyup":
            Kg(K, a, P);
        }
        var ut;
        if (Dc)
          t: {
            switch (e) {
              case "compositionstart":
                var dt = "onCompositionStart";
                break t;
              case "compositionend":
                dt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                dt = "onCompositionUpdate";
                break t;
            }
            dt = void 0;
          }
        else
          vr
            ? Ig(e, a) && (dt = "onCompositionEnd")
            : e === "keydown" &&
              a.keyCode === 229 &&
              (dt = "onCompositionStart");
        dt &&
          (Dg &&
            a.locale !== "ko" &&
            (vr || dt !== "onCompositionStart"
              ? dt === "onCompositionEnd" && vr && (ut = bg())
              : ((Fn = P),
                (bc = "value" in Fn ? Fn.value : Fn.textContent),
                (vr = !0))),
          (Tt = Jo(M, dt)),
          0 < Tt.length &&
            ((dt = new Mg(dt, e, null, a, P)),
            K.push({ event: dt, listeners: Tt }),
            ut
              ? (dt.data = ut)
              : ((ut = Ng(a)), ut !== null && (dt.data = ut)))),
          (ut = lv ? av(e, a) : ov(e, a)) &&
            ((dt = Jo(M, "onBeforeInput")),
            0 < dt.length &&
              ((Tt = new Mg("onBeforeInput", "beforeinput", null, a, P)),
              K.push({ event: Tt, listeners: dt }),
              (Tt.data = ut))),
          $v(K, e, M, a, P);
      }
      u0(K, n);
    });
  }
  function da(e, n, a) {
    return { instance: e, listener: n, currentTarget: a };
  }
  function Jo(e, n) {
    for (var a = n + "Capture", u = []; e !== null; ) {
      var f = e,
        g = f.stateNode;
      (f = f.tag),
        (f !== 5 && f !== 26 && f !== 27) ||
          g === null ||
          ((f = Dl(e, a)),
          f != null && u.unshift(da(e, f, g)),
          (f = Dl(e, n)),
          f != null && u.push(da(e, f, g))),
        (e = e.return);
    }
    return u;
  }
  function Pr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function h0(e, n, a, u, f) {
    for (var g = n._reactName, p = []; a !== null && a !== u; ) {
      var S = a,
        C = S.alternate,
        M = S.stateNode;
      if (((S = S.tag), C !== null && C === u)) break;
      (S !== 5 && S !== 26 && S !== 27) ||
        M === null ||
        ((C = M),
        f
          ? ((M = Dl(a, g)), M != null && p.unshift(da(a, M, C)))
          : f || ((M = Dl(a, g)), M != null && p.push(da(a, M, C)))),
        (a = a.return);
    }
    p.length !== 0 && e.push({ event: n, listeners: p });
  }
  var nE = /\r\n?/g,
    sE = /\u0000|\uFFFD/g;
  function f0(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        nE,
        `
`,
      )
      .replace(sE, "");
  }
  function d0(e, n) {
    return (n = f0(n)), f0(e) === n;
  }
  function $o() {}
  function Yt(e, n, a, u, f, g) {
    switch (a) {
      case "children":
        typeof u == "string"
          ? n === "body" || (n === "textarea" && u === "") || mr(e, u)
          : (typeof u == "number" || typeof u == "bigint") &&
            n !== "body" &&
            mr(e, "" + u);
        break;
      case "className":
        lo(e, "class", u);
        break;
      case "tabIndex":
        lo(e, "tabindex", u);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        lo(e, a, u);
        break;
      case "style":
        Cg(e, u, g);
        break;
      case "data":
        if (n !== "object") {
          lo(e, "data", u);
          break;
        }
      case "src":
      case "href":
        if (u === "" && (n !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (
          u == null ||
          typeof u == "function" ||
          typeof u == "symbol" ||
          typeof u == "boolean"
        ) {
          e.removeAttribute(a);
          break;
        }
        (u = uo("" + u)), e.setAttribute(a, u);
        break;
      case "action":
      case "formAction":
        if (typeof u == "function") {
          e.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof g == "function" &&
            (a === "formAction"
              ? (n !== "input" && Yt(e, n, "name", f.name, f, null),
                Yt(e, n, "formEncType", f.formEncType, f, null),
                Yt(e, n, "formMethod", f.formMethod, f, null),
                Yt(e, n, "formTarget", f.formTarget, f, null))
              : (Yt(e, n, "encType", f.encType, f, null),
                Yt(e, n, "method", f.method, f, null),
                Yt(e, n, "target", f.target, f, null)));
        if (u == null || typeof u == "symbol" || typeof u == "boolean") {
          e.removeAttribute(a);
          break;
        }
        (u = uo("" + u)), e.setAttribute(a, u);
        break;
      case "onClick":
        u != null && (e.onclick = $o);
        break;
      case "onScroll":
        u != null && bt("scroll", e);
        break;
      case "onScrollEnd":
        u != null && bt("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(s(61));
          if (((a = u.__html), a != null)) {
            if (f.children != null) throw Error(s(60));
            e.innerHTML = a;
          }
        }
        break;
      case "multiple":
        e.multiple = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "muted":
        e.muted = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          u == null ||
          typeof u == "function" ||
          typeof u == "boolean" ||
          typeof u == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        (a = uo("" + u)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        u != null && typeof u != "function" && typeof u != "symbol"
          ? e.setAttribute(a, "" + u)
          : e.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        u && typeof u != "function" && typeof u != "symbol"
          ? e.setAttribute(a, "")
          : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        u === !0
          ? e.setAttribute(a, "")
          : u !== !1 &&
              u != null &&
              typeof u != "function" &&
              typeof u != "symbol"
            ? e.setAttribute(a, u)
            : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        !isNaN(u) &&
        1 <= u
          ? e.setAttribute(a, u)
          : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        u == null || typeof u == "function" || typeof u == "symbol" || isNaN(u)
          ? e.removeAttribute(a)
          : e.setAttribute(a, u);
        break;
      case "popover":
        bt("beforetoggle", e), bt("toggle", e), ro(e, "popover", u);
        break;
      case "xlinkActuate":
        an(e, "http://www.w3.org/1999/xlink", "xlink:actuate", u);
        break;
      case "xlinkArcrole":
        an(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", u);
        break;
      case "xlinkRole":
        an(e, "http://www.w3.org/1999/xlink", "xlink:role", u);
        break;
      case "xlinkShow":
        an(e, "http://www.w3.org/1999/xlink", "xlink:show", u);
        break;
      case "xlinkTitle":
        an(e, "http://www.w3.org/1999/xlink", "xlink:title", u);
        break;
      case "xlinkType":
        an(e, "http://www.w3.org/1999/xlink", "xlink:type", u);
        break;
      case "xmlBase":
        an(e, "http://www.w3.org/XML/1998/namespace", "xml:base", u);
        break;
      case "xmlLang":
        an(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", u);
        break;
      case "xmlSpace":
        an(e, "http://www.w3.org/XML/1998/namespace", "xml:space", u);
        break;
      case "is":
        ro(e, "is", u);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = z1.get(a) || a), ro(e, a, u));
    }
  }
  function lf(e, n, a, u, f, g) {
    switch (a) {
      case "style":
        Cg(e, u, g);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(s(61));
          if (((a = u.__html), a != null)) {
            if (f.children != null) throw Error(s(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof u == "string"
          ? mr(e, u)
          : (typeof u == "number" || typeof u == "bigint") && mr(e, "" + u);
        break;
      case "onScroll":
        u != null && bt("scroll", e);
        break;
      case "onScrollEnd":
        u != null && bt("scrollend", e);
        break;
      case "onClick":
        u != null && (e.onclick = $o);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!gg.hasOwnProperty(a))
          t: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((f = a.endsWith("Capture")),
              (n = a.slice(2, f ? a.length - 7 : void 0)),
              (g = e[Pe] || null),
              (g = g != null ? g[a] : null),
              typeof g == "function" && e.removeEventListener(n, g, f),
              typeof u == "function")
            ) {
              typeof g != "function" &&
                g !== null &&
                (a in e
                  ? (e[a] = null)
                  : e.hasAttribute(a) && e.removeAttribute(a)),
                e.addEventListener(n, u, f);
              break t;
            }
            a in e
              ? (e[a] = u)
              : u === !0
                ? e.setAttribute(a, "")
                : ro(e, a, u);
          }
    }
  }
  function xe(e, n, a) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        bt("error", e), bt("load", e);
        var u = !1,
          f = !1,
          g;
        for (g in a)
          if (a.hasOwnProperty(g)) {
            var p = a[g];
            if (p != null)
              switch (g) {
                case "src":
                  u = !0;
                  break;
                case "srcSet":
                  f = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, n));
                default:
                  Yt(e, n, g, p, a, null);
              }
          }
        f && Yt(e, n, "srcSet", a.srcSet, a, null),
          u && Yt(e, n, "src", a.src, a, null);
        return;
      case "input":
        bt("invalid", e);
        var S = (g = p = f = null),
          C = null,
          M = null;
        for (u in a)
          if (a.hasOwnProperty(u)) {
            var P = a[u];
            if (P != null)
              switch (u) {
                case "name":
                  f = P;
                  break;
                case "type":
                  p = P;
                  break;
                case "checked":
                  C = P;
                  break;
                case "defaultChecked":
                  M = P;
                  break;
                case "value":
                  g = P;
                  break;
                case "defaultValue":
                  S = P;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (P != null) throw Error(s(137, n));
                  break;
                default:
                  Yt(e, n, u, P, a, null);
              }
          }
        vg(e, g, S, C, M, p, f, !1), ao(e);
        return;
      case "select":
        bt("invalid", e), (u = p = g = null);
        for (f in a)
          if (a.hasOwnProperty(f) && ((S = a[f]), S != null))
            switch (f) {
              case "value":
                g = S;
                break;
              case "defaultValue":
                p = S;
                break;
              case "multiple":
                u = S;
              default:
                Yt(e, n, f, S, a, null);
            }
        (n = g),
          (a = p),
          (e.multiple = !!u),
          n != null ? _r(e, !!u, n, !1) : a != null && _r(e, !!u, a, !0);
        return;
      case "textarea":
        bt("invalid", e), (g = f = u = null);
        for (p in a)
          if (a.hasOwnProperty(p) && ((S = a[p]), S != null))
            switch (p) {
              case "value":
                u = S;
                break;
              case "defaultValue":
                f = S;
                break;
              case "children":
                g = S;
                break;
              case "dangerouslySetInnerHTML":
                if (S != null) throw Error(s(91));
                break;
              default:
                Yt(e, n, p, S, a, null);
            }
        Sg(e, u, f, g), ao(e);
        return;
      case "option":
        for (C in a)
          if (a.hasOwnProperty(C) && ((u = a[C]), u != null))
            switch (C) {
              case "selected":
                e.selected =
                  u && typeof u != "function" && typeof u != "symbol";
                break;
              default:
                Yt(e, n, C, u, a, null);
            }
        return;
      case "dialog":
        bt("cancel", e), bt("close", e);
        break;
      case "iframe":
      case "object":
        bt("load", e);
        break;
      case "video":
      case "audio":
        for (u = 0; u < fa.length; u++) bt(fa[u], e);
        break;
      case "image":
        bt("error", e), bt("load", e);
        break;
      case "details":
        bt("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        bt("error", e), bt("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (M in a)
          if (a.hasOwnProperty(M) && ((u = a[M]), u != null))
            switch (M) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, n));
              default:
                Yt(e, n, M, u, a, null);
            }
        return;
      default:
        if (Sc(n)) {
          for (P in a)
            a.hasOwnProperty(P) &&
              ((u = a[P]), u !== void 0 && lf(e, n, P, u, a, void 0));
          return;
        }
    }
    for (S in a)
      a.hasOwnProperty(S) && ((u = a[S]), u != null && Yt(e, n, S, u, a, null));
  }
  function rE(e, n, a, u) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var f = null,
          g = null,
          p = null,
          S = null,
          C = null,
          M = null,
          P = null;
        for (k in a) {
          var K = a[k];
          if (a.hasOwnProperty(k) && K != null)
            switch (k) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                C = K;
              default:
                u.hasOwnProperty(k) || Yt(e, n, k, null, u, K);
            }
        }
        for (var N in u) {
          var k = u[N];
          if (((K = a[N]), u.hasOwnProperty(N) && (k != null || K != null)))
            switch (N) {
              case "type":
                g = k;
                break;
              case "name":
                f = k;
                break;
              case "checked":
                M = k;
                break;
              case "defaultChecked":
                P = k;
                break;
              case "value":
                p = k;
                break;
              case "defaultValue":
                S = k;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (k != null) throw Error(s(137, n));
                break;
              default:
                k !== K && Yt(e, n, N, k, u, K);
            }
        }
        vc(e, p, S, C, M, P, g, f);
        return;
      case "select":
        k = p = S = N = null;
        for (g in a)
          if (((C = a[g]), a.hasOwnProperty(g) && C != null))
            switch (g) {
              case "value":
                break;
              case "multiple":
                k = C;
              default:
                u.hasOwnProperty(g) || Yt(e, n, g, null, u, C);
            }
        for (f in u)
          if (
            ((g = u[f]),
            (C = a[f]),
            u.hasOwnProperty(f) && (g != null || C != null))
          )
            switch (f) {
              case "value":
                N = g;
                break;
              case "defaultValue":
                S = g;
                break;
              case "multiple":
                p = g;
              default:
                g !== C && Yt(e, n, f, g, u, C);
            }
        (n = S),
          (a = p),
          (u = k),
          N != null
            ? _r(e, !!a, N, !1)
            : !!u != !!a &&
              (n != null ? _r(e, !!a, n, !0) : _r(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        k = N = null;
        for (S in a)
          if (
            ((f = a[S]),
            a.hasOwnProperty(S) && f != null && !u.hasOwnProperty(S))
          )
            switch (S) {
              case "value":
                break;
              case "children":
                break;
              default:
                Yt(e, n, S, null, u, f);
            }
        for (p in u)
          if (
            ((f = u[p]),
            (g = a[p]),
            u.hasOwnProperty(p) && (f != null || g != null))
          )
            switch (p) {
              case "value":
                N = f;
                break;
              case "defaultValue":
                k = f;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(s(91));
                break;
              default:
                f !== g && Yt(e, n, p, f, u, g);
            }
        Eg(e, N, k);
        return;
      case "option":
        for (var at in a)
          if (
            ((N = a[at]),
            a.hasOwnProperty(at) && N != null && !u.hasOwnProperty(at))
          )
            switch (at) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Yt(e, n, at, null, u, N);
            }
        for (C in u)
          if (
            ((N = u[C]),
            (k = a[C]),
            u.hasOwnProperty(C) && N !== k && (N != null || k != null))
          )
            switch (C) {
              case "selected":
                e.selected =
                  N && typeof N != "function" && typeof N != "symbol";
                break;
              default:
                Yt(e, n, C, N, u, k);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var yt in a)
          (N = a[yt]),
            a.hasOwnProperty(yt) &&
              N != null &&
              !u.hasOwnProperty(yt) &&
              Yt(e, n, yt, null, u, N);
        for (M in u)
          if (
            ((N = u[M]),
            (k = a[M]),
            u.hasOwnProperty(M) && N !== k && (N != null || k != null))
          )
            switch (M) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null) throw Error(s(137, n));
                break;
              default:
                Yt(e, n, M, N, u, k);
            }
        return;
      default:
        if (Sc(n)) {
          for (var Jt in a)
            (N = a[Jt]),
              a.hasOwnProperty(Jt) &&
                N !== void 0 &&
                !u.hasOwnProperty(Jt) &&
                lf(e, n, Jt, void 0, u, N);
          for (P in u)
            (N = u[P]),
              (k = a[P]),
              !u.hasOwnProperty(P) ||
                N === k ||
                (N === void 0 && k === void 0) ||
                lf(e, n, P, N, u, k);
          return;
        }
    }
    for (var L in a)
      (N = a[L]),
        a.hasOwnProperty(L) &&
          N != null &&
          !u.hasOwnProperty(L) &&
          Yt(e, n, L, null, u, N);
    for (K in u)
      (N = u[K]),
        (k = a[K]),
        !u.hasOwnProperty(K) ||
          N === k ||
          (N == null && k == null) ||
          Yt(e, n, K, N, u, k);
  }
  var af = null,
    of = null;
  function tu(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function g0(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function _0(e, n) {
    if (e === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && n === "foreignObject" ? 0 : e;
  }
  function uf(e, n) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof n.children == "string" ||
      typeof n.children == "number" ||
      typeof n.children == "bigint" ||
      (typeof n.dangerouslySetInnerHTML == "object" &&
        n.dangerouslySetInnerHTML !== null &&
        n.dangerouslySetInnerHTML.__html != null)
    );
  }
  var cf = null;
  function lE() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === cf
        ? !1
        : ((cf = e), !0)
      : ((cf = null), !1);
  }
  var m0 = typeof setTimeout == "function" ? setTimeout : void 0,
    aE = typeof clearTimeout == "function" ? clearTimeout : void 0,
    y0 = typeof Promise == "function" ? Promise : void 0,
    oE =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof y0 < "u"
          ? function (e) {
              return y0.resolve(null).then(e).catch(uE);
            }
          : m0;
  function uE(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function hf(e, n) {
    var a = n,
      u = 0;
    do {
      var f = a.nextSibling;
      if ((e.removeChild(a), f && f.nodeType === 8))
        if (((a = f.data), a === "/$")) {
          if (u === 0) {
            e.removeChild(f), Sa(n);
            return;
          }
          u--;
        } else (a !== "$" && a !== "$?" && a !== "$!") || u++;
      a = f;
    } while (a);
    Sa(n);
  }
  function ff(e) {
    var n = e.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var a = n;
      switch (((n = n.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          ff(a), pc(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(a);
    }
  }
  function cE(e, n, a, u) {
    for (; e.nodeType === 1; ) {
      var f = a;
      if (e.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!u && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (u) {
        if (!e[Ml])
          switch (n) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((g = e.getAttribute("rel")),
                g === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                g !== f.rel ||
                e.getAttribute("href") !== (f.href == null ? null : f.href) ||
                e.getAttribute("crossorigin") !==
                  (f.crossOrigin == null ? null : f.crossOrigin) ||
                e.getAttribute("title") !== (f.title == null ? null : f.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((g = e.getAttribute("src")),
                (g !== (f.src == null ? null : f.src) ||
                  e.getAttribute("type") !== (f.type == null ? null : f.type) ||
                  e.getAttribute("crossorigin") !==
                    (f.crossOrigin == null ? null : f.crossOrigin)) &&
                  g &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (n === "input" && e.type === "hidden") {
        var g = f.name == null ? null : "" + f.name;
        if (f.type === "hidden" && e.getAttribute("name") === g) return e;
      } else return e;
      if (((e = Ii(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function hE(e, n, a) {
    if (n === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !a) ||
        ((e = Ii(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Ii(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (
          ((n = e.data),
          n === "$" || n === "$!" || n === "$?" || n === "F!" || n === "F")
        )
          break;
        if (n === "/$") return null;
      }
    }
    return e;
  }
  function p0(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (n === 0) return e;
          n--;
        } else a === "/$" && n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function v0(e, n, a) {
    switch (((n = tu(a)), e)) {
      case "html":
        if (((e = n.documentElement), !e)) throw Error(s(452));
        return e;
      case "head":
        if (((e = n.head), !e)) throw Error(s(453));
        return e;
      case "body":
        if (((e = n.body), !e)) throw Error(s(454));
        return e;
      default:
        throw Error(s(451));
    }
  }
  var Ei = new Map(),
    E0 = new Set();
  function eu(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.ownerDocument;
  }
  var xn = J.d;
  J.d = { f: fE, r: dE, D: gE, C: _E, L: mE, m: yE, X: vE, S: pE, M: EE };
  function fE() {
    var e = xn.f(),
      n = Ko();
    return e || n;
  }
  function dE(e) {
    var n = fr(e);
    n !== null && n.tag === 5 && n.type === "form" ? K_(n) : xn.r(e);
  }
  var Br = typeof document > "u" ? null : document;
  function S0(e, n, a) {
    var u = Br;
    if (u && typeof n == "string" && n) {
      var f = ci(n);
      (f = 'link[rel="' + e + '"][href="' + f + '"]'),
        typeof a == "string" && (f += '[crossorigin="' + a + '"]'),
        E0.has(f) ||
          (E0.add(f),
          (e = { rel: e, crossOrigin: a, href: n }),
          u.querySelector(f) === null &&
            ((n = u.createElement("link")),
            xe(n, "link", e),
            fe(n),
            u.head.appendChild(n)));
    }
  }
  function gE(e) {
    xn.D(e), S0("dns-prefetch", e, null);
  }
  function _E(e, n) {
    xn.C(e, n), S0("preconnect", e, n);
  }
  function mE(e, n, a) {
    xn.L(e, n, a);
    var u = Br;
    if (u && e && n) {
      var f = 'link[rel="preload"][as="' + ci(n) + '"]';
      n === "image" && a && a.imageSrcSet
        ? ((f += '[imagesrcset="' + ci(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (f += '[imagesizes="' + ci(a.imageSizes) + '"]'))
        : (f += '[href="' + ci(e) + '"]');
      var g = f;
      switch (n) {
        case "style":
          g = Hr(e);
          break;
        case "script":
          g = jr(e);
      }
      Ei.has(g) ||
        ((e = V(
          {
            rel: "preload",
            href: n === "image" && a && a.imageSrcSet ? void 0 : e,
            as: n,
          },
          a,
        )),
        Ei.set(g, e),
        u.querySelector(f) !== null ||
          (n === "style" && u.querySelector(ga(g))) ||
          (n === "script" && u.querySelector(_a(g))) ||
          ((n = u.createElement("link")),
          xe(n, "link", e),
          fe(n),
          u.head.appendChild(n)));
    }
  }
  function yE(e, n) {
    xn.m(e, n);
    var a = Br;
    if (a && e) {
      var u = n && typeof n.as == "string" ? n.as : "script",
        f =
          'link[rel="modulepreload"][as="' + ci(u) + '"][href="' + ci(e) + '"]',
        g = f;
      switch (u) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          g = jr(e);
      }
      if (
        !Ei.has(g) &&
        ((e = V({ rel: "modulepreload", href: e }, n)),
        Ei.set(g, e),
        a.querySelector(f) === null)
      ) {
        switch (u) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(_a(g))) return;
        }
        (u = a.createElement("link")),
          xe(u, "link", e),
          fe(u),
          a.head.appendChild(u);
      }
    }
  }
  function pE(e, n, a) {
    xn.S(e, n, a);
    var u = Br;
    if (u && e) {
      var f = dr(u).hoistableStyles,
        g = Hr(e);
      n = n || "default";
      var p = f.get(g);
      if (!p) {
        var S = { loading: 0, preload: null };
        if ((p = u.querySelector(ga(g)))) S.loading = 5;
        else {
          (e = V({ rel: "stylesheet", href: e, "data-precedence": n }, a)),
            (a = Ei.get(g)) && df(e, a);
          var C = (p = u.createElement("link"));
          fe(C),
            xe(C, "link", e),
            (C._p = new Promise(function (M, P) {
              (C.onload = M), (C.onerror = P);
            })),
            C.addEventListener("load", function () {
              S.loading |= 1;
            }),
            C.addEventListener("error", function () {
              S.loading |= 2;
            }),
            (S.loading |= 4),
            iu(p, n, u);
        }
        (p = { type: "stylesheet", instance: p, count: 1, state: S }),
          f.set(g, p);
      }
    }
  }
  function vE(e, n) {
    xn.X(e, n);
    var a = Br;
    if (a && e) {
      var u = dr(a).hoistableScripts,
        f = jr(e),
        g = u.get(f);
      g ||
        ((g = a.querySelector(_a(f))),
        g ||
          ((e = V({ src: e, async: !0 }, n)),
          (n = Ei.get(f)) && gf(e, n),
          (g = a.createElement("script")),
          fe(g),
          xe(g, "link", e),
          a.head.appendChild(g)),
        (g = { type: "script", instance: g, count: 1, state: null }),
        u.set(f, g));
    }
  }
  function EE(e, n) {
    xn.M(e, n);
    var a = Br;
    if (a && e) {
      var u = dr(a).hoistableScripts,
        f = jr(e),
        g = u.get(f);
      g ||
        ((g = a.querySelector(_a(f))),
        g ||
          ((e = V({ src: e, async: !0, type: "module" }, n)),
          (n = Ei.get(f)) && gf(e, n),
          (g = a.createElement("script")),
          fe(g),
          xe(g, "link", e),
          a.head.appendChild(g)),
        (g = { type: "script", instance: g, count: 1, state: null }),
        u.set(f, g));
    }
  }
  function x0(e, n, a, u) {
    var f = (f = Qe.current) ? eu(f) : null;
    if (!f) throw Error(s(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((n = Hr(a.href)),
            (a = dr(f).hoistableStyles),
            (u = a.get(n)),
            u ||
              ((u = { type: "style", instance: null, count: 0, state: null }),
              a.set(n, u)),
            u)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          e = Hr(a.href);
          var g = dr(f).hoistableStyles,
            p = g.get(e);
          if (
            (p ||
              ((f = f.ownerDocument || f),
              (p = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              g.set(e, p),
              (g = f.querySelector(ga(e))) &&
                !g._p &&
                ((p.instance = g), (p.state.loading = 5)),
              Ei.has(e) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                Ei.set(e, a),
                g || SE(f, e, a, p.state))),
            n && u === null)
          )
            throw Error(s(528, ""));
          return p;
        }
        if (n && u !== null) throw Error(s(529, ""));
        return null;
      case "script":
        return (
          (n = a.async),
          (a = a.src),
          typeof a == "string" &&
          n &&
          typeof n != "function" &&
          typeof n != "symbol"
            ? ((n = jr(a)),
              (a = dr(f).hoistableScripts),
              (u = a.get(n)),
              u ||
                ((u = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(n, u)),
              u)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(s(444, e));
    }
  }
  function Hr(e) {
    return 'href="' + ci(e) + '"';
  }
  function ga(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function C0(e) {
    return V({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function SE(e, n, a, u) {
    e.querySelector('link[rel="preload"][as="style"][' + n + "]")
      ? (u.loading = 1)
      : ((n = e.createElement("link")),
        (u.preload = n),
        n.addEventListener("load", function () {
          return (u.loading |= 1);
        }),
        n.addEventListener("error", function () {
          return (u.loading |= 2);
        }),
        xe(n, "link", a),
        fe(n),
        e.head.appendChild(n));
  }
  function jr(e) {
    return '[src="' + ci(e) + '"]';
  }
  function _a(e) {
    return "script[async]" + e;
  }
  function T0(e, n, a) {
    if ((n.count++, n.instance === null))
      switch (n.type) {
        case "style":
          var u = e.querySelector('style[data-href~="' + ci(a.href) + '"]');
          if (u) return (n.instance = u), fe(u), u;
          var f = V({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (u = (e.ownerDocument || e).createElement("style")),
            fe(u),
            xe(u, "style", f),
            iu(u, a.precedence, e),
            (n.instance = u)
          );
        case "stylesheet":
          f = Hr(a.href);
          var g = e.querySelector(ga(f));
          if (g) return (n.state.loading |= 4), (n.instance = g), fe(g), g;
          (u = C0(a)),
            (f = Ei.get(f)) && df(u, f),
            (g = (e.ownerDocument || e).createElement("link")),
            fe(g);
          var p = g;
          return (
            (p._p = new Promise(function (S, C) {
              (p.onload = S), (p.onerror = C);
            })),
            xe(g, "link", u),
            (n.state.loading |= 4),
            iu(g, a.precedence, e),
            (n.instance = g)
          );
        case "script":
          return (
            (g = jr(a.src)),
            (f = e.querySelector(_a(g)))
              ? ((n.instance = f), fe(f), f)
              : ((u = a),
                (f = Ei.get(g)) && ((u = V({}, a)), gf(u, f)),
                (e = e.ownerDocument || e),
                (f = e.createElement("script")),
                fe(f),
                xe(f, "link", u),
                e.head.appendChild(f),
                (n.instance = f))
          );
        case "void":
          return null;
        default:
          throw Error(s(443, n.type));
      }
    else
      n.type === "stylesheet" &&
        (n.state.loading & 4) === 0 &&
        ((u = n.instance), (n.state.loading |= 4), iu(u, a.precedence, e));
    return n.instance;
  }
  function iu(e, n, a) {
    for (
      var u = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        f = u.length ? u[u.length - 1] : null,
        g = f,
        p = 0;
      p < u.length;
      p++
    ) {
      var S = u[p];
      if (S.dataset.precedence === n) g = S;
      else if (g !== f) break;
    }
    g
      ? g.parentNode.insertBefore(e, g.nextSibling)
      : ((n = a.nodeType === 9 ? a.head : a), n.insertBefore(e, n.firstChild));
  }
  function df(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy),
      e.title == null && (e.title = n.title);
  }
  function gf(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy),
      e.integrity == null && (e.integrity = n.integrity);
  }
  var nu = null;
  function R0(e, n, a) {
    if (nu === null) {
      var u = new Map(),
        f = (nu = new Map());
      f.set(a, u);
    } else (f = nu), (u = f.get(a)), u || ((u = new Map()), f.set(a, u));
    if (u.has(e)) return u;
    for (
      u.set(e, null), a = a.getElementsByTagName(e), f = 0;
      f < a.length;
      f++
    ) {
      var g = a[f];
      if (
        !(
          g[Ml] ||
          g[Ae] ||
          (e === "link" && g.getAttribute("rel") === "stylesheet")
        ) &&
        g.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var p = g.getAttribute(n) || "";
        p = e + p;
        var S = u.get(p);
        S ? S.push(g) : u.set(p, [g]);
      }
    }
    return u;
  }
  function b0(e, n, a) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(
        a,
        n === "title" ? e.querySelector("head > title") : null,
      );
  }
  function xE(e, n, a) {
    if (a === 1 || n.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof n.precedence != "string" ||
          typeof n.href != "string" ||
          n.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof n.rel != "string" ||
          typeof n.href != "string" ||
          n.href === "" ||
          n.onLoad ||
          n.onError
        )
          break;
        switch (n.rel) {
          case "stylesheet":
            return (
              (e = n.disabled), typeof n.precedence == "string" && e == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          n.async &&
          typeof n.async != "function" &&
          typeof n.async != "symbol" &&
          !n.onLoad &&
          !n.onError &&
          n.src &&
          typeof n.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function A0(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var ma = null;
  function CE() {}
  function TE(e, n, a) {
    if (ma === null) throw Error(s(475));
    var u = ma;
    if (
      n.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var f = Hr(a.href),
          g = e.querySelector(ga(f));
        if (g) {
          (e = g._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (u.count++, (u = su.bind(u)), e.then(u, u)),
            (n.state.loading |= 4),
            (n.instance = g),
            fe(g);
          return;
        }
        (g = e.ownerDocument || e),
          (a = C0(a)),
          (f = Ei.get(f)) && df(a, f),
          (g = g.createElement("link")),
          fe(g);
        var p = g;
        (p._p = new Promise(function (S, C) {
          (p.onload = S), (p.onerror = C);
        })),
          xe(g, "link", a),
          (n.instance = g);
      }
      u.stylesheets === null && (u.stylesheets = new Map()),
        u.stylesheets.set(n, e),
        (e = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (u.count++,
          (n = su.bind(u)),
          e.addEventListener("load", n),
          e.addEventListener("error", n));
    }
  }
  function RE() {
    if (ma === null) throw Error(s(475));
    var e = ma;
    return (
      e.stylesheets && e.count === 0 && _f(e, e.stylesheets),
      0 < e.count
        ? function (n) {
            var a = setTimeout(function () {
              if ((e.stylesheets && _f(e, e.stylesheets), e.unsuspend)) {
                var u = e.unsuspend;
                (e.unsuspend = null), u();
              }
            }, 6e4);
            return (
              (e.unsuspend = n),
              function () {
                (e.unsuspend = null), clearTimeout(a);
              }
            );
          }
        : null
    );
  }
  function su() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) _f(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var ru = null;
  function _f(e, n) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (ru = new Map()),
        n.forEach(bE, e),
        (ru = null),
        su.call(e));
  }
  function bE(e, n) {
    if (!(n.state.loading & 4)) {
      var a = ru.get(e);
      if (a) var u = a.get(null);
      else {
        (a = new Map()), ru.set(e, a);
        for (
          var f = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            g = 0;
          g < f.length;
          g++
        ) {
          var p = f[g];
          (p.nodeName === "LINK" || p.getAttribute("media") !== "not all") &&
            (a.set(p.dataset.precedence, p), (u = p));
        }
        u && a.set(null, u);
      }
      (f = n.instance),
        (p = f.getAttribute("data-precedence")),
        (g = a.get(p) || u),
        g === u && a.set(null, f),
        a.set(p, f),
        this.count++,
        (u = su.bind(this)),
        f.addEventListener("load", u),
        f.addEventListener("error", u),
        g
          ? g.parentNode.insertBefore(f, g.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(f, e.firstChild)),
        (n.state.loading |= 4);
    }
  }
  var ya = {
    $$typeof: E,
    Provider: null,
    Consumer: null,
    _currentValue: lt,
    _currentValue2: lt,
    _threadCount: 0,
  };
  function AE(e, n, a, u, f, g, p, S) {
    (this.tag = 1),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = be(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.finishedLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = be(0)),
      (this.hiddenUpdates = be(null)),
      (this.identifierPrefix = u),
      (this.onUncaughtError = f),
      (this.onCaughtError = g),
      (this.onRecoverableError = p),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = S),
      (this.incompleteTransitions = new Map());
  }
  function w0(e, n, a, u, f, g, p, S, C, M, P, K) {
    return (
      (e = new AE(e, n, a, p, S, C, M, K)),
      (n = 1),
      g === !0 && (n |= 24),
      (g = pi(3, null, null, n)),
      (e.current = g),
      (g.stateNode = e),
      (n = Zc()),
      n.refCount++,
      (e.pooledCache = n),
      n.refCount++,
      (g.memoizedState = { element: u, isDehydrated: a, cache: n }),
      bh(g),
      e
    );
  }
  function M0(e) {
    return e ? ((e = Cr), e) : Cr;
  }
  function O0(e, n, a, u, f, g) {
    (f = M0(f)),
      u.context === null ? (u.context = f) : (u.pendingContext = f),
      (u = jn(n)),
      (u.payload = { element: a }),
      (g = g === void 0 ? null : g),
      g !== null && (u.callback = g),
      (a = Zn(e, u, n)),
      a !== null && (Ue(a, e, n), ta(a, e, n));
  }
  function D0(e, n) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < n ? a : n;
    }
  }
  function mf(e, n) {
    D0(e, n), (e = e.alternate) && D0(e, n);
  }
  function L0(e) {
    if (e.tag === 13) {
      var n = Un(e, 67108864);
      n !== null && Ue(n, e, 67108864), mf(e, 67108864);
    }
  }
  var lu = !0;
  function wE(e, n, a, u) {
    var f = F.T;
    F.T = null;
    var g = J.p;
    try {
      (J.p = 2), yf(e, n, a, u);
    } finally {
      (J.p = g), (F.T = f);
    }
  }
  function ME(e, n, a, u) {
    var f = F.T;
    F.T = null;
    var g = J.p;
    try {
      (J.p = 8), yf(e, n, a, u);
    } finally {
      (J.p = g), (F.T = f);
    }
  }
  function yf(e, n, a, u) {
    if (lu) {
      var f = pf(u);
      if (f === null) rf(e, n, u, au, a), I0(e, u);
      else if (DE(f, e, n, a, u)) u.stopPropagation();
      else if ((I0(e, u), n & 4 && -1 < OE.indexOf(e))) {
        for (; f !== null; ) {
          var g = fr(f);
          if (g !== null)
            switch (g.tag) {
              case 3:
                if (((g = g.stateNode), g.current.memoizedState.isDehydrated)) {
                  var p = ji(g.pendingLanes);
                  if (p !== 0) {
                    var S = g;
                    for (S.pendingLanes |= 2, S.entangledLanes |= 2; p; ) {
                      var C = 1 << (31 - Re(p));
                      (S.entanglements[1] |= C), (p &= ~C);
                    }
                    Wi(g), (Vt & 6) === 0 && ((Ho = kt() + 500), ha(0));
                  }
                }
                break;
              case 13:
                (S = Un(g, 2)), S !== null && Ue(S, g, 2), Ko(), mf(g, 2);
            }
          if (((g = pf(u)), g === null && rf(e, n, u, au, a), g === f)) break;
          f = g;
        }
        f !== null && u.stopPropagation();
      } else rf(e, n, u, null, a);
    }
  }
  function pf(e) {
    return (e = Cc(e)), vf(e);
  }
  var au = null;
  function vf(e) {
    if (((au = null), (e = bs(e)), e !== null)) {
      var n = W(e);
      if (n === null) e = null;
      else {
        var a = n.tag;
        if (a === 13) {
          if (((e = $(n)), e !== null)) return e;
          e = null;
        } else if (a === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          e = null;
        } else n !== e && (e = null);
      }
    }
    return (au = e), null;
  }
  function z0(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Rl()) {
          case Ss:
            return 2;
          case xs:
            return 8;
          case cr:
          case io:
            return 32;
          case bl:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Ef = !1,
    $n = null,
    ts = null,
    es = null,
    pa = new Map(),
    va = new Map(),
    is = [],
    OE =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function I0(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        $n = null;
        break;
      case "dragenter":
      case "dragleave":
        ts = null;
        break;
      case "mouseover":
      case "mouseout":
        es = null;
        break;
      case "pointerover":
      case "pointerout":
        pa.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        va.delete(n.pointerId);
    }
  }
  function Ea(e, n, a, u, f, g) {
    return e === null || e.nativeEvent !== g
      ? ((e = {
          blockedOn: n,
          domEventName: a,
          eventSystemFlags: u,
          nativeEvent: g,
          targetContainers: [f],
        }),
        n !== null && ((n = fr(n)), n !== null && L0(n)),
        e)
      : ((e.eventSystemFlags |= u),
        (n = e.targetContainers),
        f !== null && n.indexOf(f) === -1 && n.push(f),
        e);
  }
  function DE(e, n, a, u, f) {
    switch (n) {
      case "focusin":
        return ($n = Ea($n, e, n, a, u, f)), !0;
      case "dragenter":
        return (ts = Ea(ts, e, n, a, u, f)), !0;
      case "mouseover":
        return (es = Ea(es, e, n, a, u, f)), !0;
      case "pointerover":
        var g = f.pointerId;
        return pa.set(g, Ea(pa.get(g) || null, e, n, a, u, f)), !0;
      case "gotpointercapture":
        return (
          (g = f.pointerId), va.set(g, Ea(va.get(g) || null, e, n, a, u, f)), !0
        );
    }
    return !1;
  }
  function N0(e) {
    var n = bs(e.target);
    if (n !== null) {
      var a = W(n);
      if (a !== null) {
        if (((n = a.tag), n === 13)) {
          if (((n = $(a)), n !== null)) {
            (e.blockedOn = n),
              R1(e.priority, function () {
                if (a.tag === 13) {
                  var u = si(),
                    f = Un(a, u);
                  f !== null && Ue(f, a, u), mf(a, u);
                }
              });
            return;
          }
        } else if (n === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function ou(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var a = pf(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var u = new a.constructor(a.type, a);
        (xc = u), a.target.dispatchEvent(u), (xc = null);
      } else return (n = fr(a)), n !== null && L0(n), (e.blockedOn = a), !1;
      n.shift();
    }
    return !0;
  }
  function G0(e, n, a) {
    ou(e) && a.delete(n);
  }
  function LE() {
    (Ef = !1),
      $n !== null && ou($n) && ($n = null),
      ts !== null && ou(ts) && (ts = null),
      es !== null && ou(es) && (es = null),
      pa.forEach(G0),
      va.forEach(G0);
  }
  function uu(e, n) {
    e.blockedOn === n &&
      ((e.blockedOn = null),
      Ef ||
        ((Ef = !0),
        r.unstable_scheduleCallback(r.unstable_NormalPriority, LE)));
  }
  var cu = null;
  function F0(e) {
    cu !== e &&
      ((cu = e),
      r.unstable_scheduleCallback(r.unstable_NormalPriority, function () {
        cu === e && (cu = null);
        for (var n = 0; n < e.length; n += 3) {
          var a = e[n],
            u = e[n + 1],
            f = e[n + 2];
          if (typeof u != "function") {
            if (vf(u || a) === null) continue;
            break;
          }
          var g = fr(a);
          g !== null &&
            (e.splice(n, 3),
            (n -= 3),
            oh(g, { pending: !0, data: f, method: a.method, action: u }, u, f));
        }
      }));
  }
  function Sa(e) {
    function n(C) {
      return uu(C, e);
    }
    $n !== null && uu($n, e),
      ts !== null && uu(ts, e),
      es !== null && uu(es, e),
      pa.forEach(n),
      va.forEach(n);
    for (var a = 0; a < is.length; a++) {
      var u = is[a];
      u.blockedOn === e && (u.blockedOn = null);
    }
    for (; 0 < is.length && ((a = is[0]), a.blockedOn === null); )
      N0(a), a.blockedOn === null && is.shift();
    if (((a = (e.ownerDocument || e).$$reactFormReplay), a != null))
      for (u = 0; u < a.length; u += 3) {
        var f = a[u],
          g = a[u + 1],
          p = f[Pe] || null;
        if (typeof g == "function") p || F0(a);
        else if (p) {
          var S = null;
          if (g && g.hasAttribute("formAction")) {
            if (((f = g), (p = g[Pe] || null))) S = p.formAction;
            else if (vf(f) !== null) continue;
          } else S = p.action;
          typeof S == "function" ? (a[u + 1] = S) : (a.splice(u, 3), (u -= 3)),
            F0(a);
        }
      }
  }
  function Sf(e) {
    this._internalRoot = e;
  }
  (hu.prototype.render = Sf.prototype.render =
    function (e) {
      var n = this._internalRoot;
      if (n === null) throw Error(s(409));
      var a = n.current,
        u = si();
      O0(a, u, e, n, null, null);
    }),
    (hu.prototype.unmount = Sf.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var n = e.containerInfo;
          e.tag === 0 && Yr(),
            O0(e.current, 2, null, e, null, null),
            Ko(),
            (n[hr] = null);
        }
      });
  function hu(e) {
    this._internalRoot = e;
  }
  hu.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var n = so();
      e = { blockedOn: null, target: e, priority: n };
      for (var a = 0; a < is.length && n !== 0 && n < is[a].priority; a++);
      is.splice(a, 0, e), a === 0 && N0(e);
    }
  };
  var U0 = t.version;
  if (U0 !== "19.0.0") throw Error(s(527, U0, "19.0.0"));
  J.findDOMNode = function (e) {
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function"
        ? Error(s(188))
        : ((e = Object.keys(e).join(",")), Error(s(268, e)));
    return (
      (e = X(n)),
      (e = e !== null ? U(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var zE = {
    bundleType: 0,
    version: "19.0.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: F,
    findFiberByHostInstance: bs,
    reconcilerVersion: "19.0.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var fu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!fu.isDisabled && fu.supportsFiber)
      try {
        (Cs = fu.inject(zE)), (Te = fu);
      } catch {}
  }
  return (
    (xa.createRoot = function (e, n) {
      if (!l(e)) throw Error(s(299));
      var a = !1,
        u = "",
        f = em,
        g = im,
        p = nm,
        S = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (a = !0),
          n.identifierPrefix !== void 0 && (u = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (f = n.onUncaughtError),
          n.onCaughtError !== void 0 && (g = n.onCaughtError),
          n.onRecoverableError !== void 0 && (p = n.onRecoverableError),
          n.unstable_transitionCallbacks !== void 0 &&
            (S = n.unstable_transitionCallbacks)),
        (n = w0(e, 1, !1, null, null, a, u, f, g, p, S, null)),
        (e[hr] = n.current),
        sf(e.nodeType === 8 ? e.parentNode : e),
        new Sf(n)
      );
    }),
    (xa.hydrateRoot = function (e, n, a) {
      if (!l(e)) throw Error(s(299));
      var u = !1,
        f = "",
        g = em,
        p = im,
        S = nm,
        C = null,
        M = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (u = !0),
          a.identifierPrefix !== void 0 && (f = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (g = a.onUncaughtError),
          a.onCaughtError !== void 0 && (p = a.onCaughtError),
          a.onRecoverableError !== void 0 && (S = a.onRecoverableError),
          a.unstable_transitionCallbacks !== void 0 &&
            (C = a.unstable_transitionCallbacks),
          a.formState !== void 0 && (M = a.formState)),
        (n = w0(e, 1, !0, n, a ?? null, u, f, g, p, S, C, M)),
        (n.context = M0(null)),
        (a = n.current),
        (u = si()),
        (f = jn(u)),
        (f.callback = null),
        Zn(a, f, u),
        (n.current.lanes = u),
        Ge(n, u),
        Wi(n),
        (e[hr] = n.current),
        sf(e),
        new hu(n)
      );
    }),
    (xa.version = "19.0.0"),
    xa
  );
}
var K0;
function HE() {
  if (K0) return Cf.exports;
  K0 = 1;
  function r() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (t) {
        console.error(t);
      }
  }
  return r(), (Cf.exports = BE()), Cf.exports;
}
var jE = HE();
const je = { ADD: "add", REMOVE: "remove" },
  cl = { PROPERTYCHANGE: "propertychange" },
  pt = {
    CHANGE: "change",
    ERROR: "error",
    CONTEXTMENU: "contextmenu",
    CLICK: "click",
    DBLCLICK: "dblclick",
    KEYDOWN: "keydown",
    KEYPRESS: "keypress",
    LOAD: "load",
    TOUCHMOVE: "touchmove",
    WHEEL: "wheel",
  };
class ju {
  constructor() {
    this.disposed = !1;
  }
  dispose() {
    this.disposed || ((this.disposed = !0), this.disposeInternal());
  }
  disposeInternal() {}
}
function ZE(r, t, i) {
  let s, l;
  i = i || Mn;
  let o = 0,
    c = r.length,
    h = !1;
  for (; o < c; )
    (s = o + ((c - o) >> 1)),
      (l = +i(r[s], t)),
      l < 0 ? (o = s + 1) : ((c = s), (h = !l));
  return h ? o : ~o;
}
function Mn(r, t) {
  return r > t ? 1 : r < t ? -1 : 0;
}
function KE(r, t) {
  return r < t ? 1 : r > t ? -1 : 0;
}
function pd(r, t, i) {
  if (r[0] <= t) return 0;
  const s = r.length;
  if (t <= r[s - 1]) return s - 1;
  if (typeof i == "function") {
    for (let l = 1; l < s; ++l) {
      const o = r[l];
      if (o === t) return l;
      if (o < t) return i(t, r[l - 1], o) > 0 ? l - 1 : l;
    }
    return s - 1;
  }
  if (i > 0) {
    for (let l = 1; l < s; ++l) if (r[l] < t) return l - 1;
    return s - 1;
  }
  if (i < 0) {
    for (let l = 1; l < s; ++l) if (r[l] <= t) return l;
    return s - 1;
  }
  for (let l = 1; l < s; ++l) {
    if (r[l] == t) return l;
    if (r[l] < t) return r[l - 1] - t < t - r[l] ? l - 1 : l;
  }
  return s - 1;
}
function qE(r, t, i) {
  for (; t < i; ) {
    const s = r[t];
    (r[t] = r[i]), (r[i] = s), ++t, --i;
  }
}
function en(r, t) {
  const i = Array.isArray(t) ? t : [t],
    s = i.length;
  for (let l = 0; l < s; l++) r[r.length] = i[l];
}
function Es(r, t) {
  const i = r.length;
  if (i !== t.length) return !1;
  for (let s = 0; s < i; s++) if (r[s] !== t[s]) return !1;
  return !0;
}
function VE(r, t, i) {
  const s = t || Mn;
  return r.every(function (l, o) {
    if (o === 0) return !0;
    const c = s(r[o - 1], l);
    return !(c > 0 || c === 0);
  });
}
function Ia() {
  return !0;
}
function Zu() {
  return !1;
}
function hl() {}
function ep(r) {
  let t, i, s;
  return function () {
    const l = Array.prototype.slice.call(arguments);
    return (
      (!i || this !== s || !Es(l, i)) &&
        ((s = this), (i = l), (t = r.apply(this, arguments))),
      t
    );
  };
}
function WE(r) {
  function t() {
    let i;
    try {
      i = r();
    } catch (s) {
      return Promise.reject(s);
    }
    return i instanceof Promise ? i : Promise.resolve(i);
  }
  return t();
}
function Za(r) {
  for (const t in r) delete r[t];
}
function nr(r) {
  let t;
  for (t in r) return !1;
  return !t;
}
class In {
  constructor(t) {
    this.propagationStopped,
      this.defaultPrevented,
      (this.type = t),
      (this.target = null);
  }
  preventDefault() {
    this.defaultPrevented = !0;
  }
  stopPropagation() {
    this.propagationStopped = !0;
  }
}
class Ku extends ju {
  constructor(t) {
    super(),
      (this.eventTarget_ = t),
      (this.pendingRemovals_ = null),
      (this.dispatching_ = null),
      (this.listeners_ = null);
  }
  addEventListener(t, i) {
    if (!t || !i) return;
    const s = this.listeners_ || (this.listeners_ = {}),
      l = s[t] || (s[t] = []);
    l.includes(i) || l.push(i);
  }
  dispatchEvent(t) {
    const i = typeof t == "string",
      s = i ? t : t.type,
      l = this.listeners_ && this.listeners_[s];
    if (!l) return;
    const o = i ? new In(t) : t;
    o.target || (o.target = this.eventTarget_ || this);
    const c = this.dispatching_ || (this.dispatching_ = {}),
      h = this.pendingRemovals_ || (this.pendingRemovals_ = {});
    s in c || ((c[s] = 0), (h[s] = 0)), ++c[s];
    let d;
    for (let _ = 0, m = l.length; _ < m; ++_)
      if (
        ("handleEvent" in l[_]
          ? (d = l[_].handleEvent(o))
          : (d = l[_].call(this, o)),
        d === !1 || o.propagationStopped)
      ) {
        d = !1;
        break;
      }
    if (--c[s] === 0) {
      let _ = h[s];
      for (delete h[s]; _--; ) this.removeEventListener(s, hl);
      delete c[s];
    }
    return d;
  }
  disposeInternal() {
    this.listeners_ && Za(this.listeners_);
  }
  getListeners(t) {
    return (this.listeners_ && this.listeners_[t]) || void 0;
  }
  hasListener(t) {
    return this.listeners_
      ? t
        ? t in this.listeners_
        : Object.keys(this.listeners_).length > 0
      : !1;
  }
  removeEventListener(t, i) {
    if (!this.listeners_) return;
    const s = this.listeners_[t];
    if (!s) return;
    const l = s.indexOf(i);
    l !== -1 &&
      (this.pendingRemovals_ && t in this.pendingRemovals_
        ? ((s[l] = hl), ++this.pendingRemovals_[t])
        : (s.splice(l, 1), s.length === 0 && delete this.listeners_[t]));
  }
}
function Mt(r, t, i, s, l) {
  if (l) {
    const c = i;
    i = function (h) {
      return r.removeEventListener(t, i), c.call(s ?? this, h);
    };
  } else s && s !== r && (i = i.bind(s));
  const o = { target: r, type: t, listener: i };
  return r.addEventListener(t, i), o;
}
function bu(r, t, i, s) {
  return Mt(r, t, i, s, !0);
}
function jt(r) {
  r && r.target && (r.target.removeEventListener(r.type, r.listener), Za(r));
}
class Ka extends Ku {
  constructor() {
    super(),
      (this.on = this.onInternal),
      (this.once = this.onceInternal),
      (this.un = this.unInternal),
      (this.revision_ = 0);
  }
  changed() {
    ++this.revision_, this.dispatchEvent(pt.CHANGE);
  }
  getRevision() {
    return this.revision_;
  }
  onInternal(t, i) {
    if (Array.isArray(t)) {
      const s = t.length,
        l = new Array(s);
      for (let o = 0; o < s; ++o) l[o] = Mt(this, t[o], i);
      return l;
    }
    return Mt(this, t, i);
  }
  onceInternal(t, i) {
    let s;
    if (Array.isArray(t)) {
      const l = t.length;
      s = new Array(l);
      for (let o = 0; o < l; ++o) s[o] = bu(this, t[o], i);
    } else s = bu(this, t, i);
    return (i.ol_key = s), s;
  }
  unInternal(t, i) {
    const s = i.ol_key;
    if (s) QE(s);
    else if (Array.isArray(t))
      for (let l = 0, o = t.length; l < o; ++l)
        this.removeEventListener(t[l], i);
    else this.removeEventListener(t, i);
  }
}
Ka.prototype.on;
Ka.prototype.once;
Ka.prototype.un;
function QE(r) {
  if (Array.isArray(r)) for (let t = 0, i = r.length; t < i; ++t) jt(r[t]);
  else jt(r);
}
function _t() {
  throw new Error("Unimplemented abstract method.");
}
let JE = 0;
function It(r) {
  return r.ol_uid || (r.ol_uid = String(++JE));
}
class q0 extends In {
  constructor(t, i, s) {
    super(t), (this.key = i), (this.oldValue = s);
  }
}
class Xi extends Ka {
  constructor(t) {
    super(),
      this.on,
      this.once,
      this.un,
      It(this),
      (this.values_ = null),
      t !== void 0 && this.setProperties(t);
  }
  get(t) {
    let i;
    return (
      this.values_ && this.values_.hasOwnProperty(t) && (i = this.values_[t]), i
    );
  }
  getKeys() {
    return (this.values_ && Object.keys(this.values_)) || [];
  }
  getProperties() {
    return (this.values_ && Object.assign({}, this.values_)) || {};
  }
  getPropertiesInternal() {
    return this.values_;
  }
  hasProperties() {
    return !!this.values_;
  }
  notify(t, i) {
    let s;
    (s = `change:${t}`),
      this.hasListener(s) && this.dispatchEvent(new q0(s, t, i)),
      (s = cl.PROPERTYCHANGE),
      this.hasListener(s) && this.dispatchEvent(new q0(s, t, i));
  }
  addChangeListener(t, i) {
    this.addEventListener(`change:${t}`, i);
  }
  removeChangeListener(t, i) {
    this.removeEventListener(`change:${t}`, i);
  }
  set(t, i, s) {
    const l = this.values_ || (this.values_ = {});
    if (s) l[t] = i;
    else {
      const o = l[t];
      (l[t] = i), o !== i && this.notify(t, o);
    }
  }
  setProperties(t, i) {
    for (const s in t) this.set(s, t[s], i);
  }
  applyProperties(t) {
    t.values_ && Object.assign(this.values_ || (this.values_ = {}), t.values_);
  }
  unset(t, i) {
    if (this.values_ && t in this.values_) {
      const s = this.values_[t];
      delete this.values_[t],
        nr(this.values_) && (this.values_ = null),
        i || this.notify(t, s);
    }
  }
}
const V0 = { LENGTH: "length" };
class du extends In {
  constructor(t, i, s) {
    super(t), (this.element = i), (this.index = s);
  }
}
class $i extends Xi {
  constructor(t, i) {
    if (
      (super(),
      this.on,
      this.once,
      this.un,
      (i = i || {}),
      (this.unique_ = !!i.unique),
      (this.array_ = t || []),
      this.unique_)
    )
      for (let s = 0, l = this.array_.length; s < l; ++s)
        this.assertUnique_(this.array_[s], s);
    this.updateLength_();
  }
  clear() {
    for (; this.getLength() > 0; ) this.pop();
  }
  extend(t) {
    for (let i = 0, s = t.length; i < s; ++i) this.push(t[i]);
    return this;
  }
  forEach(t) {
    const i = this.array_;
    for (let s = 0, l = i.length; s < l; ++s) t(i[s], s, i);
  }
  getArray() {
    return this.array_;
  }
  item(t) {
    return this.array_[t];
  }
  getLength() {
    return this.get(V0.LENGTH);
  }
  insertAt(t, i) {
    if (t < 0 || t > this.getLength())
      throw new Error("Index out of bounds: " + t);
    this.unique_ && this.assertUnique_(i),
      this.array_.splice(t, 0, i),
      this.updateLength_(),
      this.dispatchEvent(new du(je.ADD, i, t));
  }
  pop() {
    return this.removeAt(this.getLength() - 1);
  }
  push(t) {
    this.unique_ && this.assertUnique_(t);
    const i = this.getLength();
    return this.insertAt(i, t), this.getLength();
  }
  remove(t) {
    const i = this.array_;
    for (let s = 0, l = i.length; s < l; ++s)
      if (i[s] === t) return this.removeAt(s);
  }
  removeAt(t) {
    if (t < 0 || t >= this.getLength()) return;
    const i = this.array_[t];
    return (
      this.array_.splice(t, 1),
      this.updateLength_(),
      this.dispatchEvent(new du(je.REMOVE, i, t)),
      i
    );
  }
  setAt(t, i) {
    const s = this.getLength();
    if (t >= s) {
      this.insertAt(t, i);
      return;
    }
    if (t < 0) throw new Error("Index out of bounds: " + t);
    this.unique_ && this.assertUnique_(i, t);
    const l = this.array_[t];
    (this.array_[t] = i),
      this.dispatchEvent(new du(je.REMOVE, l, t)),
      this.dispatchEvent(new du(je.ADD, i, t));
  }
  updateLength_() {
    this.set(V0.LENGTH, this.array_.length);
  }
  assertUnique_(t, i) {
    for (let s = 0, l = this.array_.length; s < l; ++s)
      if (this.array_[s] === t && s !== i)
        throw new Error("Duplicate item added to a unique collection");
  }
}
function Lt(r, t) {
  if (!r) throw new Error(t);
}
class qu extends Xi {
  constructor(t) {
    if (
      (super(),
      this.on,
      this.once,
      this.un,
      (this.id_ = void 0),
      (this.geometryName_ = "geometry"),
      (this.style_ = null),
      (this.styleFunction_ = void 0),
      (this.geometryChangeKey_ = null),
      this.addChangeListener(this.geometryName_, this.handleGeometryChanged_),
      t)
    )
      if (typeof t.getSimplifiedGeometry == "function") {
        const i = t;
        this.setGeometry(i);
      } else {
        const i = t;
        this.setProperties(i);
      }
  }
  clone() {
    const t = new qu(this.hasProperties() ? this.getProperties() : null);
    t.setGeometryName(this.getGeometryName());
    const i = this.getGeometry();
    i && t.setGeometry(i.clone());
    const s = this.getStyle();
    return s && t.setStyle(s), t;
  }
  getGeometry() {
    return this.get(this.geometryName_);
  }
  getId() {
    return this.id_;
  }
  getGeometryName() {
    return this.geometryName_;
  }
  getStyle() {
    return this.style_;
  }
  getStyleFunction() {
    return this.styleFunction_;
  }
  handleGeometryChange_() {
    this.changed();
  }
  handleGeometryChanged_() {
    this.geometryChangeKey_ &&
      (jt(this.geometryChangeKey_), (this.geometryChangeKey_ = null));
    const t = this.getGeometry();
    t &&
      (this.geometryChangeKey_ = Mt(
        t,
        pt.CHANGE,
        this.handleGeometryChange_,
        this,
      )),
      this.changed();
  }
  setGeometry(t) {
    this.set(this.geometryName_, t);
  }
  setStyle(t) {
    (this.style_ = t),
      (this.styleFunction_ = t ? $E(t) : void 0),
      this.changed();
  }
  setId(t) {
    (this.id_ = t), this.changed();
  }
  setGeometryName(t) {
    this.removeChangeListener(this.geometryName_, this.handleGeometryChanged_),
      (this.geometryName_ = t),
      this.addChangeListener(this.geometryName_, this.handleGeometryChanged_),
      this.handleGeometryChanged_();
  }
}
function $E(r) {
  if (typeof r == "function") return r;
  let t;
  return (
    Array.isArray(r)
      ? (t = r)
      : (Lt(
          typeof r.getZIndex == "function",
          "Expected an `ol/style/Style` or an array of `ol/style/Style.js`",
        ),
        (t = [r])),
    function () {
      return t;
    }
  );
}
const me = {
  UNKNOWN: 0,
  INTERSECTING: 1,
  ABOVE: 2,
  RIGHT: 4,
  BELOW: 8,
  LEFT: 16,
};
function W0(r) {
  const t = Ri();
  for (let i = 0, s = r.length; i < s; ++i) za(t, r[i]);
  return t;
}
function tS(r, t, i) {
  const s = Math.min.apply(null, r),
    l = Math.min.apply(null, t),
    o = Math.max.apply(null, r),
    c = Math.max.apply(null, t);
  return Ln(s, l, o, c, i);
}
function vd(r, t, i) {
  return i
    ? ((i[0] = r[0] - t),
      (i[1] = r[1] - t),
      (i[2] = r[2] + t),
      (i[3] = r[3] + t),
      i)
    : [r[0] - t, r[1] - t, r[2] + t, r[3] + t];
}
function ip(r, t) {
  return t
    ? ((t[0] = r[0]), (t[1] = r[1]), (t[2] = r[2]), (t[3] = r[3]), t)
    : r.slice();
}
function rr(r, t, i) {
  let s, l;
  return (
    t < r[0] ? (s = r[0] - t) : r[2] < t ? (s = t - r[2]) : (s = 0),
    i < r[1] ? (l = r[1] - i) : r[3] < i ? (l = i - r[3]) : (l = 0),
    s * s + l * l
  );
}
function fl(r, t) {
  return Ed(r, t[0], t[1]);
}
function nl(r, t) {
  return r[0] <= t[0] && t[2] <= r[2] && r[1] <= t[1] && t[3] <= r[3];
}
function Ed(r, t, i) {
  return r[0] <= t && t <= r[2] && r[1] <= i && i <= r[3];
}
function Jf(r, t) {
  const i = r[0],
    s = r[1],
    l = r[2],
    o = r[3],
    c = t[0],
    h = t[1];
  let d = me.UNKNOWN;
  return (
    c < i ? (d = d | me.LEFT) : c > l && (d = d | me.RIGHT),
    h < s ? (d = d | me.BELOW) : h > o && (d = d | me.ABOVE),
    d === me.UNKNOWN && (d = me.INTERSECTING),
    d
  );
}
function Ri() {
  return [1 / 0, 1 / 0, -1 / 0, -1 / 0];
}
function Ln(r, t, i, s, l) {
  return l ? ((l[0] = r), (l[1] = t), (l[2] = i), (l[3] = s), l) : [r, t, i, s];
}
function Sl(r) {
  return Ln(1 / 0, 1 / 0, -1 / 0, -1 / 0, r);
}
function np(r, t) {
  const i = r[0],
    s = r[1];
  return Ln(i, s, i, s, t);
}
function Sd(r, t, i, s, l) {
  const o = Sl(l);
  return rp(o, r, t, i, s);
}
function Na(r, t) {
  return r[0] == t[0] && r[2] == t[2] && r[1] == t[1] && r[3] == t[3];
}
function sp(r, t) {
  return (
    t[0] < r[0] && (r[0] = t[0]),
    t[2] > r[2] && (r[2] = t[2]),
    t[1] < r[1] && (r[1] = t[1]),
    t[3] > r[3] && (r[3] = t[3]),
    r
  );
}
function za(r, t) {
  t[0] < r[0] && (r[0] = t[0]),
    t[0] > r[2] && (r[2] = t[0]),
    t[1] < r[1] && (r[1] = t[1]),
    t[1] > r[3] && (r[3] = t[1]);
}
function rp(r, t, i, s, l) {
  for (; i < s; i += l) eS(r, t[i], t[i + 1]);
  return r;
}
function eS(r, t, i) {
  (r[0] = Math.min(r[0], t)),
    (r[1] = Math.min(r[1], i)),
    (r[2] = Math.max(r[2], t)),
    (r[3] = Math.max(r[3], i));
}
function lp(r, t) {
  let i;
  return (
    (i = t(Vu(r))),
    i || ((i = t(Wu(r))), i) || ((i = t(Qu(r))), i) || ((i = t(lr(r))), i)
      ? i
      : !1
  );
}
function $f(r) {
  let t = 0;
  return qa(r) || (t = Ft(r) * Ye(r)), t;
}
function Vu(r) {
  return [r[0], r[1]];
}
function Wu(r) {
  return [r[2], r[1]];
}
function ys(r) {
  return [(r[0] + r[2]) / 2, (r[1] + r[3]) / 2];
}
function iS(r, t) {
  let i;
  if (t === "bottom-left") i = Vu(r);
  else if (t === "bottom-right") i = Wu(r);
  else if (t === "top-left") i = lr(r);
  else if (t === "top-right") i = Qu(r);
  else throw new Error("Invalid corner");
  return i;
}
function td(r, t, i, s, l) {
  const [o, c, h, d, _, m, y, v] = ap(r, t, i, s);
  return Ln(
    Math.min(o, h, _, y),
    Math.min(c, d, m, v),
    Math.max(o, h, _, y),
    Math.max(c, d, m, v),
    l,
  );
}
function ap(r, t, i, s) {
  const l = (t * s[0]) / 2,
    o = (t * s[1]) / 2,
    c = Math.cos(i),
    h = Math.sin(i),
    d = l * c,
    _ = l * h,
    m = o * c,
    y = o * h,
    v = r[0],
    E = r[1];
  return [
    v - d + y,
    E - _ - m,
    v - d - y,
    E - _ + m,
    v + d - y,
    E + _ + m,
    v + d + y,
    E + _ - m,
    v - d + y,
    E - _ - m,
  ];
}
function Ye(r) {
  return r[3] - r[1];
}
function er(r, t, i) {
  const s = i || Ri();
  return (
    qe(r, t)
      ? (r[0] > t[0] ? (s[0] = r[0]) : (s[0] = t[0]),
        r[1] > t[1] ? (s[1] = r[1]) : (s[1] = t[1]),
        r[2] < t[2] ? (s[2] = r[2]) : (s[2] = t[2]),
        r[3] < t[3] ? (s[3] = r[3]) : (s[3] = t[3]))
      : Sl(s),
    s
  );
}
function lr(r) {
  return [r[0], r[3]];
}
function Qu(r) {
  return [r[2], r[3]];
}
function Ft(r) {
  return r[2] - r[0];
}
function qe(r, t) {
  return r[0] <= t[2] && r[2] >= t[0] && r[1] <= t[3] && r[3] >= t[1];
}
function qa(r) {
  return r[2] < r[0] || r[3] < r[1];
}
function nS(r, t) {
  return t
    ? ((t[0] = r[0]), (t[1] = r[1]), (t[2] = r[2]), (t[3] = r[3]), t)
    : r;
}
function sS(r, t, i) {
  let s = !1;
  const l = Jf(r, t),
    o = Jf(r, i);
  if (l === me.INTERSECTING || o === me.INTERSECTING) s = !0;
  else {
    const c = r[0],
      h = r[1],
      d = r[2],
      _ = r[3],
      m = t[0],
      y = t[1],
      v = i[0],
      E = i[1],
      x = (E - y) / (v - m);
    let b, R;
    o & me.ABOVE &&
      !(l & me.ABOVE) &&
      ((b = v - (E - _) / x), (s = b >= c && b <= d)),
      !s &&
        o & me.RIGHT &&
        !(l & me.RIGHT) &&
        ((R = E - (v - d) * x), (s = R >= h && R <= _)),
      !s &&
        o & me.BELOW &&
        !(l & me.BELOW) &&
        ((b = v - (E - h) / x), (s = b >= c && b <= d)),
      !s &&
        o & me.LEFT &&
        !(l & me.LEFT) &&
        ((R = E - (v - c) * x), (s = R >= h && R <= _));
  }
  return s;
}
function rS(r, t, i, s) {
  if (qa(r)) return Sl(i);
  let l = [];
  (l = [r[0], r[1], r[2], r[1], r[2], r[3], r[0], r[3]]), t(l, l, 2);
  const o = [],
    c = [];
  for (let h = 0, d = l.length; h < d; h += 2) o.push(l[h]), c.push(l[h + 1]);
  return tS(o, c, i);
}
function op(r, t) {
  const i = t.getExtent(),
    s = ys(r);
  if (t.canWrapX() && (s[0] < i[0] || s[0] >= i[2])) {
    const l = Ft(i),
      c = Math.floor((s[0] - i[0]) / l) * l;
    (r[0] -= c), (r[2] -= c);
  }
  return r;
}
function up(r, t, i) {
  if (t.canWrapX()) {
    const s = t.getExtent();
    if (!isFinite(r[0]) || !isFinite(r[2])) return [[s[0], r[1], s[2], r[3]]];
    op(r, t);
    const l = Ft(s);
    if (Ft(r) > l && !i) return [[s[0], r[1], s[2], r[3]]];
    if (r[0] < s[0])
      return [
        [r[0] + l, r[1], s[2], r[3]],
        [s[0], r[1], r[2], r[3]],
      ];
    if (r[2] > s[2])
      return [
        [r[0], r[1], s[2], r[3]],
        [s[0], r[1], r[2] - l, r[3]],
      ];
  }
  return [r];
}
function re(r, t, i) {
  return Math.min(Math.max(r, t), i);
}
function lS(r, t, i, s, l, o) {
  const c = l - i,
    h = o - s;
  if (c !== 0 || h !== 0) {
    const d = ((r - i) * c + (t - s) * h) / (c * c + h * h);
    d > 1 ? ((i = l), (s = o)) : d > 0 && ((i += c * d), (s += h * d));
  }
  return ir(r, t, i, s);
}
function ir(r, t, i, s) {
  const l = i - r,
    o = s - t;
  return l * l + o * o;
}
function aS(r) {
  const t = r.length;
  for (let s = 0; s < t; s++) {
    let l = s,
      o = Math.abs(r[s][s]);
    for (let h = s + 1; h < t; h++) {
      const d = Math.abs(r[h][s]);
      d > o && ((o = d), (l = h));
    }
    if (o === 0) return null;
    const c = r[l];
    (r[l] = r[s]), (r[s] = c);
    for (let h = s + 1; h < t; h++) {
      const d = -r[h][s] / r[s][s];
      for (let _ = s; _ < t + 1; _++)
        s == _ ? (r[h][_] = 0) : (r[h][_] += d * r[s][_]);
    }
  }
  const i = new Array(t);
  for (let s = t - 1; s >= 0; s--) {
    i[s] = r[s][t] / r[s][s];
    for (let l = s - 1; l >= 0; l--) r[l][t] -= r[l][s] * i[s];
  }
  return i;
}
function Q0(r) {
  return (r * 180) / Math.PI;
}
function gs(r) {
  return (r * Math.PI) / 180;
}
function ll(r, t) {
  const i = r % t;
  return i * t < 0 ? i + t : i;
}
function ri(r, t, i) {
  return r + i * (t - r);
}
function xd(r, t) {
  const i = Math.pow(10, t);
  return Math.round(r * i) / i;
}
function gu(r, t) {
  return Math.floor(xd(r, t));
}
function _u(r, t) {
  return Math.ceil(xd(r, t));
}
function ed(r, t, i) {
  if (r >= t && r < i) return r;
  const s = i - t;
  return ((((r - t) % s) + s) % s) + t;
}
const oS = 63710088e-1;
function J0(r, t, i) {
  i = i || oS;
  const s = gs(r[1]),
    l = gs(t[1]),
    o = (l - s) / 2,
    c = gs(t[0] - r[0]) / 2,
    h =
      Math.sin(o) * Math.sin(o) +
      Math.sin(c) * Math.sin(c) * Math.cos(s) * Math.cos(l);
  return 2 * i * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
}
function cp(...r) {
  console.warn(...r);
}
function uS(r, t) {
  return (r[0] += +t[0]), (r[1] += +t[1]), r;
}
function Au(r, t) {
  let i = !0;
  for (let s = r.length - 1; s >= 0; --s)
    if (r[s] != t[s]) {
      i = !1;
      break;
    }
  return i;
}
function Cd(r, t) {
  const i = Math.cos(t),
    s = Math.sin(t),
    l = r[0] * i - r[1] * s,
    o = r[1] * i + r[0] * s;
  return (r[0] = l), (r[1] = o), r;
}
function cS(r, t) {
  return (r[0] *= t), (r[1] *= t), r;
}
function hp(r, t) {
  if (t.canWrapX()) {
    const i = Ft(t.getExtent()),
      s = hS(r, t, i);
    s && (r[0] -= s * i);
  }
  return r;
}
function hS(r, t, i) {
  const s = t.getExtent();
  let l = 0;
  return (
    t.canWrapX() &&
      (r[0] < s[0] || r[0] > s[2]) &&
      ((i = i || Ft(s)), (l = Math.floor((r[0] - s[0]) / i))),
    l
  );
}
const Td = {
  radians: 6370997 / (2 * Math.PI),
  degrees: (2 * Math.PI * 6370997) / 360,
  ft: 0.3048,
  m: 1,
  "us-ft": 1200 / 3937,
};
class Rd {
  constructor(t) {
    (this.code_ = t.code),
      (this.units_ = t.units),
      (this.extent_ = t.extent !== void 0 ? t.extent : null),
      (this.worldExtent_ = t.worldExtent !== void 0 ? t.worldExtent : null),
      (this.axisOrientation_ =
        t.axisOrientation !== void 0 ? t.axisOrientation : "enu"),
      (this.global_ = t.global !== void 0 ? t.global : !1),
      (this.canWrapX_ = !!(this.global_ && this.extent_)),
      (this.getPointResolutionFunc_ = t.getPointResolution),
      (this.defaultTileGrid_ = null),
      (this.metersPerUnit_ = t.metersPerUnit);
  }
  canWrapX() {
    return this.canWrapX_;
  }
  getCode() {
    return this.code_;
  }
  getExtent() {
    return this.extent_;
  }
  getUnits() {
    return this.units_;
  }
  getMetersPerUnit() {
    return this.metersPerUnit_ || Td[this.units_];
  }
  getWorldExtent() {
    return this.worldExtent_;
  }
  getAxisOrientation() {
    return this.axisOrientation_;
  }
  isGlobal() {
    return this.global_;
  }
  setGlobal(t) {
    (this.global_ = t), (this.canWrapX_ = !!(t && this.extent_));
  }
  getDefaultTileGrid() {
    return this.defaultTileGrid_;
  }
  setDefaultTileGrid(t) {
    this.defaultTileGrid_ = t;
  }
  setExtent(t) {
    (this.extent_ = t), (this.canWrapX_ = !!(this.global_ && t));
  }
  setWorldExtent(t) {
    this.worldExtent_ = t;
  }
  setGetPointResolution(t) {
    this.getPointResolutionFunc_ = t;
  }
  getPointResolutionFunc() {
    return this.getPointResolutionFunc_;
  }
}
const Va = 6378137,
  sl = Math.PI * Va,
  fS = [-sl, -sl, sl, sl],
  dS = [-180, -85, 180, 85],
  mu = Va * Math.log(Math.tan(Math.PI / 2));
class Zr extends Rd {
  constructor(t) {
    super({
      code: t,
      units: "m",
      extent: fS,
      global: !0,
      worldExtent: dS,
      getPointResolution: function (i, s) {
        return i / Math.cosh(s[1] / Va);
      },
    });
  }
}
const $0 = [
  new Zr("EPSG:3857"),
  new Zr("EPSG:102100"),
  new Zr("EPSG:102113"),
  new Zr("EPSG:900913"),
  new Zr("http://www.opengis.net/def/crs/EPSG/0/3857"),
  new Zr("http://www.opengis.net/gml/srs/epsg.xml#3857"),
];
function gS(r, t, i, s) {
  const l = r.length;
  (i = i > 1 ? i : 2),
    (s = s ?? i),
    t === void 0 && (i > 2 ? (t = r.slice()) : (t = new Array(l)));
  for (let o = 0; o < l; o += s) {
    t[o] = (sl * r[o]) / 180;
    let c = Va * Math.log(Math.tan((Math.PI * (+r[o + 1] + 90)) / 360));
    c > mu ? (c = mu) : c < -mu && (c = -mu), (t[o + 1] = c);
  }
  return t;
}
function _S(r, t, i, s) {
  const l = r.length;
  (i = i > 1 ? i : 2),
    (s = s ?? i),
    t === void 0 && (i > 2 ? (t = r.slice()) : (t = new Array(l)));
  for (let o = 0; o < l; o += s)
    (t[o] = (180 * r[o]) / sl),
      (t[o + 1] = (360 * Math.atan(Math.exp(r[o + 1] / Va))) / Math.PI - 90);
  return t;
}
const mS = 6378137,
  ty = [-180, -90, 180, 90],
  yS = (Math.PI * mS) / 180;
class Ks extends Rd {
  constructor(t, i) {
    super({
      code: t,
      units: "degrees",
      extent: ty,
      axisOrientation: i,
      global: !0,
      metersPerUnit: yS,
      worldExtent: ty,
    });
  }
}
const ey = [
  new Ks("CRS:84"),
  new Ks("EPSG:4326", "neu"),
  new Ks("urn:ogc:def:crs:OGC:1.3:CRS84"),
  new Ks("urn:ogc:def:crs:OGC:2:84"),
  new Ks("http://www.opengis.net/def/crs/OGC/1.3/CRS84"),
  new Ks("http://www.opengis.net/gml/srs/epsg.xml#4326", "neu"),
  new Ks("http://www.opengis.net/def/crs/EPSG/0/4326", "neu"),
];
let id = {};
function pS(r) {
  return (
    id[r] ||
    id[r.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/, "EPSG:$3")] ||
    null
  );
}
function vS(r, t) {
  id[r] = t;
}
let al = {};
function Ga(r, t, i) {
  const s = r.getCode(),
    l = t.getCode();
  s in al || (al[s] = {}), (al[s][l] = i);
}
function Af(r, t) {
  return r in al && t in al[r] ? al[r][t] : null;
}
const wu = 0.9996,
  Ti = 0.00669438,
  Ju = Ti * Ti,
  $u = Ju * Ti,
  Qs = Ti / (1 - Ti),
  iy = Math.sqrt(1 - Ti),
  dl = (1 - iy) / (1 + iy),
  fp = dl * dl,
  bd = fp * dl,
  Ad = bd * dl,
  dp = Ad * dl,
  gp = 1 - Ti / 4 - (3 * Ju) / 64 - (5 * $u) / 256,
  ES = (3 * Ti) / 8 + (3 * Ju) / 32 + (45 * $u) / 1024,
  SS = (15 * Ju) / 256 + (45 * $u) / 1024,
  xS = (35 * $u) / 3072,
  CS = (3 / 2) * dl - (27 / 32) * bd + (269 / 512) * dp,
  TS = (21 / 16) * fp - (55 / 32) * Ad,
  RS = (151 / 96) * bd - (417 / 128) * dp,
  bS = (1097 / 512) * Ad,
  Mu = 6378137;
function AS(r, t, i) {
  const s = r - 5e5,
    c = (i.north ? t : t - 1e7) / wu / (Mu * gp),
    h =
      c +
      CS * Math.sin(2 * c) +
      TS * Math.sin(4 * c) +
      RS * Math.sin(6 * c) +
      bS * Math.sin(8 * c),
    d = Math.sin(h),
    _ = d * d,
    m = Math.cos(h),
    y = d / m,
    v = y * y,
    E = v * v,
    x = 1 - Ti * _,
    b = Math.sqrt(1 - Ti * _),
    R = Mu / b,
    A = (1 - Ti) / x,
    O = Qs * m ** 2,
    G = O * O,
    z = s / (R * wu),
    D = z * z,
    j = D * z,
    Q = j * z,
    Z = Q * z,
    F = Z * z,
    V =
      h -
      (y / A) * (D / 2 - (Q / 24) * (5 + 3 * v + 10 * O - 4 * G - 9 * Qs)) +
      (F / 720) * (61 + 90 * v + 298 * O + 45 * E - 252 * Qs - 3 * G);
  let rt =
    (z -
      (j / 6) * (1 + 2 * v + O) +
      (Z / 120) * (5 - 2 * O + 28 * v - 3 * G + 8 * Qs + 24 * E)) /
    m;
  return (rt = ed(rt + gs(_p(i.number)), -Math.PI, Math.PI)), [Q0(rt), Q0(V)];
}
const ny = -80,
  sy = 84,
  wS = -180,
  MS = 180;
function OS(r, t, i) {
  (r = ed(r, wS, MS)), t < ny ? (t = ny) : t > sy && (t = sy);
  const s = gs(t),
    l = Math.sin(s),
    o = Math.cos(s),
    c = l / o,
    h = c * c,
    d = h * h,
    _ = gs(r),
    m = _p(i.number),
    y = gs(m),
    v = Mu / Math.sqrt(1 - Ti * l ** 2),
    E = Qs * o ** 2,
    x = o * ed(_ - y, -Math.PI, Math.PI),
    b = x * x,
    R = b * x,
    A = R * x,
    O = A * x,
    G = O * x,
    z =
      Mu *
      (gp * s -
        ES * Math.sin(2 * s) +
        SS * Math.sin(4 * s) -
        xS * Math.sin(6 * s)),
    D =
      wu *
        v *
        (x +
          (R / 6) * (1 - h + E) +
          (O / 120) * (5 - 18 * h + d + 72 * E - 58 * Qs)) +
      5e5;
  let j =
    wu *
    (z +
      v *
        c *
        (b / 2 +
          (A / 24) * (5 - h + 9 * E + 4 * E ** 2) +
          (G / 720) * (61 - 58 * h + d + 600 * E - 330 * Qs)));
  return i.north || (j += 1e7), [D, j];
}
function _p(r) {
  return (r - 1) * 6 - 180 + 3;
}
const DS = [
  /^EPSG:(\d+)$/,
  /^urn:ogc:def:crs:EPSG::(\d+)$/,
  /^http:\/\/www\.opengis\.net\/def\/crs\/EPSG\/0\/(\d+)$/,
];
function mp(r) {
  let t = 0;
  for (const l of DS) {
    const o = r.match(l);
    if (o) {
      t = parseInt(o[1]);
      break;
    }
  }
  if (!t) return null;
  let i = 0,
    s = !1;
  return (
    t > 32700 && t < 32761
      ? (i = t - 32700)
      : t > 32600 && t < 32661 && ((s = !0), (i = t - 32600)),
    i ? { number: i, north: s } : null
  );
}
function ry(r, t) {
  return function (i, s, l, o) {
    const c = i.length;
    (l = l > 1 ? l : 2),
      (o = o ?? l),
      s || (l > 2 ? (s = i.slice()) : (s = new Array(c)));
    for (let h = 0; h < c; h += o) {
      const d = i[h],
        _ = i[h + 1],
        m = r(d, _, t);
      (s[h] = m[0]), (s[h + 1] = m[1]);
    }
    return s;
  };
}
function LS(r) {
  return mp(r) ? new Rd({ code: r, units: "m" }) : null;
}
function zS(r) {
  const t = mp(r.getCode());
  return t ? { forward: ry(OS, t), inverse: ry(AS, t) } : null;
}
const IS = [zS],
  NS = [LS];
let nd = !0;
function GS(r) {
  nd = !1;
}
function wd(r, t) {
  if (t !== void 0) {
    for (let i = 0, s = r.length; i < s; ++i) t[i] = r[i];
    t = t;
  } else t = r.slice();
  return t;
}
function sd(r) {
  vS(r.getCode(), r), Ga(r, r, wd);
}
function FS(r) {
  r.forEach(sd);
}
function Kt(r) {
  if (typeof r != "string") return r;
  const t = pS(r);
  if (t) return t;
  for (const i of NS) {
    const s = i(r);
    if (s) return s;
  }
  return null;
}
function ly(r, t, i, s) {
  r = Kt(r);
  let l;
  const o = r.getPointResolutionFunc();
  if (o) l = o(t, i);
  else {
    const c = r.getUnits();
    if (c == "degrees" || s == "degrees") l = t;
    else {
      const h = Wa(r, Kt("EPSG:4326"));
      if (!h && c !== "degrees") l = t * r.getMetersPerUnit();
      else {
        let _ = [
          i[0] - t / 2,
          i[1],
          i[0] + t / 2,
          i[1],
          i[0],
          i[1] - t / 2,
          i[0],
          i[1] + t / 2,
        ];
        _ = h(_, _, 2);
        const m = J0(_.slice(0, 2), _.slice(2, 4)),
          y = J0(_.slice(4, 6), _.slice(6, 8));
        l = (m + y) / 2;
      }
      const d = r.getMetersPerUnit();
      d !== void 0 && (l /= d);
    }
  }
  return l;
}
function ay(r) {
  FS(r),
    r.forEach(function (t) {
      r.forEach(function (i) {
        t !== i && Ga(t, i, wd);
      });
    });
}
function US(r, t, i, s) {
  r.forEach(function (l) {
    t.forEach(function (o) {
      Ga(l, o, i), Ga(o, l, s);
    });
  });
}
function Md(r, t) {
  return r ? (typeof r == "string" ? Kt(r) : r) : Kt(t);
}
function XS(r) {
  return function (t, i, s, l) {
    const o = t.length;
    (s = s !== void 0 ? s : 2),
      (l = l ?? s),
      (i = i !== void 0 ? i : new Array(o));
    for (let c = 0; c < o; c += l) {
      const h = r(t.slice(c, c + s)),
        d = h.length;
      for (let _ = 0, m = l; _ < m; ++_) i[c + _] = _ >= d ? t[c + _] : h[_];
    }
    return i;
  };
}
function Ru(r, t) {
  if (r === t) return !0;
  const i = r.getUnits() === t.getUnits();
  return (r.getCode() === t.getCode() || Wa(r, t) === wd) && i;
}
function Wa(r, t) {
  const i = r.getCode(),
    s = t.getCode();
  let l = Af(i, s);
  if (l) return l;
  let o = null,
    c = null;
  for (const d of IS) o || (o = d(r)), c || (c = d(t));
  if (!o && !c) return null;
  const h = "EPSG:4326";
  if (c)
    if (o) l = wf(o.inverse, c.forward);
    else {
      const d = Af(i, h);
      d && (l = wf(d, c.forward));
    }
  else {
    const d = Af(h, s);
    d && (l = wf(o.inverse, d));
  }
  return l && (sd(r), sd(t), Ga(r, t, l)), l;
}
function wf(r, t) {
  return function (i, s, l, o) {
    return (s = r(i, s, l, o)), t(s, s, l, o);
  };
}
function gl(r, t) {
  const i = Kt(r),
    s = Kt(t);
  return Wa(i, s);
}
function tc(r, t, i) {
  const s = gl(t, i);
  if (!s) {
    const l = Kt(t).getCode(),
      o = Kt(i).getCode();
    throw new Error(`No transform available between ${l} and ${o}`);
  }
  return s(r, void 0, r.length);
}
function yp(r, t, i, s) {
  const l = gl(t, i);
  return rS(r, l, void 0);
}
let bi = null;
function YS(r) {
  bi = Kt(r);
}
function Ou() {
  return bi;
}
function kS() {
  YS("EPSG:4326");
}
function rd(r, t) {
  return bi ? tc(r, t, bi) : r;
}
function Rn(r, t) {
  return bi
    ? tc(r, bi, t)
    : (nd &&
        !Au(r, [0, 0]) &&
        r[0] >= -180 &&
        r[0] <= 180 &&
        r[1] >= -90 &&
        r[1] <= 90 &&
        ((nd = !1),
        cp(
          "Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates.",
        )),
      r);
}
function Du(r, t) {
  return bi ? yp(r, t, bi) : r;
}
function hs(r, t) {
  return bi ? yp(r, bi, t) : r;
}
function PS(r, t) {
  if (!bi) return r;
  const i = Kt(t).getMetersPerUnit(),
    s = bi.getMetersPerUnit();
  return i && s ? (r * i) / s : r;
}
function BS() {
  ay($0), ay(ey), US(ey, $0, gS, _S);
}
BS();
new Array(6);
function Fi() {
  return [1, 0, 0, 1, 0, 0];
}
function HS(r, t) {
  return (
    (r[0] = t[0]),
    (r[1] = t[1]),
    (r[2] = t[2]),
    (r[3] = t[3]),
    (r[4] = t[4]),
    (r[5] = t[5]),
    r
  );
}
function ye(r, t) {
  const i = t[0],
    s = t[1];
  return (
    (t[0] = r[0] * i + r[2] * s + r[4]), (t[1] = r[1] * i + r[3] * s + r[5]), t
  );
}
function zn(r, t, i, s, l, o, c, h) {
  const d = Math.sin(o),
    _ = Math.cos(o);
  return (
    (r[0] = s * _),
    (r[1] = l * d),
    (r[2] = -s * d),
    (r[3] = l * _),
    (r[4] = c * s * _ - h * s * d + t),
    (r[5] = c * l * d + h * l * _ + i),
    r
  );
}
function pp(r, t) {
  const i = jS(t);
  Lt(i !== 0, "Transformation matrix cannot be inverted");
  const s = t[0],
    l = t[1],
    o = t[2],
    c = t[3],
    h = t[4],
    d = t[5];
  return (
    (r[0] = c / i),
    (r[1] = -l / i),
    (r[2] = -o / i),
    (r[3] = s / i),
    (r[4] = (o * d - c * h) / i),
    (r[5] = -(s * d - l * h) / i),
    r
  );
}
function jS(r) {
  return r[0] * r[3] - r[1] * r[2];
}
const oy = [1e6, 1e6, 1e6, 1e6, 2, 2];
function ZS(r) {
  return (
    "matrix(" + r.map((i, s) => Math.round(i * oy[s]) / oy[s]).join(", ") + ")"
  );
}
function _s(r, t, i, s, l, o, c) {
  (o = o || []), (c = c || 2);
  let h = 0;
  for (let d = t; d < i; d += s) {
    const _ = r[d],
      m = r[d + 1];
    (o[h++] = l[0] * _ + l[2] * m + l[4]),
      (o[h++] = l[1] * _ + l[3] * m + l[5]);
    for (let y = 2; y < c; y++) o[h++] = r[d + y];
  }
  return o && o.length != h && (o.length = h), o;
}
function vp(r, t, i, s, l, o, c) {
  c = c || [];
  const h = Math.cos(l),
    d = Math.sin(l),
    _ = o[0],
    m = o[1];
  let y = 0;
  for (let v = t; v < i; v += s) {
    const E = r[v] - _,
      x = r[v + 1] - m;
    (c[y++] = _ + E * h - x * d), (c[y++] = m + E * d + x * h);
    for (let b = v + 2; b < v + s; ++b) c[y++] = r[b];
  }
  return c && c.length != y && (c.length = y), c;
}
function KS(r, t, i, s, l, o, c, h) {
  h = h || [];
  const d = c[0],
    _ = c[1];
  let m = 0;
  for (let y = t; y < i; y += s) {
    const v = r[y] - d,
      E = r[y + 1] - _;
    (h[m++] = d + l * v), (h[m++] = _ + o * E);
    for (let x = y + 2; x < y + s; ++x) h[m++] = r[x];
  }
  return h && h.length != m && (h.length = m), h;
}
function qS(r, t, i, s, l, o, c) {
  c = c || [];
  let h = 0;
  for (let d = t; d < i; d += s) {
    (c[h++] = r[d] + l), (c[h++] = r[d + 1] + o);
    for (let _ = d + 2; _ < d + s; ++_) c[h++] = r[_];
  }
  return c && c.length != h && (c.length = h), c;
}
const uy = Fi(),
  VS = [NaN, NaN];
class Ep extends Xi {
  constructor() {
    super(),
      (this.extent_ = Ri()),
      (this.extentRevision_ = -1),
      (this.simplifiedGeometryMaxMinSquaredTolerance = 0),
      (this.simplifiedGeometryRevision = 0),
      (this.simplifyTransformedInternal = ep((t, i, s) => {
        if (!s) return this.getSimplifiedGeometry(i);
        const l = this.clone();
        return l.applyTransform(s), l.getSimplifiedGeometry(i);
      }));
  }
  simplifyTransformed(t, i) {
    return this.simplifyTransformedInternal(this.getRevision(), t, i);
  }
  clone() {
    return _t();
  }
  closestPointXY(t, i, s, l) {
    return _t();
  }
  containsXY(t, i) {
    return this.closestPointXY(t, i, VS, Number.MIN_VALUE) === 0;
  }
  getClosestPoint(t, i) {
    return (i = i || [NaN, NaN]), this.closestPointXY(t[0], t[1], i, 1 / 0), i;
  }
  intersectsCoordinate(t) {
    return this.containsXY(t[0], t[1]);
  }
  computeExtent(t) {
    return _t();
  }
  getExtent(t) {
    if (this.extentRevision_ != this.getRevision()) {
      const i = this.computeExtent(this.extent_);
      (isNaN(i[0]) || isNaN(i[1])) && Sl(i),
        (this.extentRevision_ = this.getRevision());
    }
    return nS(this.extent_, t);
  }
  rotate(t, i) {
    _t();
  }
  scale(t, i, s) {
    _t();
  }
  simplify(t) {
    return this.getSimplifiedGeometry(t * t);
  }
  getSimplifiedGeometry(t) {
    return _t();
  }
  getType() {
    return _t();
  }
  applyTransform(t) {
    _t();
  }
  intersectsExtent(t) {
    return _t();
  }
  translate(t, i) {
    _t();
  }
  transform(t, i) {
    const s = Kt(t),
      l =
        s.getUnits() == "tile-pixels"
          ? function (o, c, h) {
              const d = s.getExtent(),
                _ = s.getWorldExtent(),
                m = Ye(_) / Ye(d);
              zn(uy, _[0], _[3], m, -m, 0, 0, 0);
              const y = _s(o, 0, o.length, h, uy, c),
                v = gl(s, i);
              return v ? v(y, y, h) : y;
            }
          : gl(s, i);
    return this.applyTransform(l), this;
  }
}
class ar extends Ep {
  constructor() {
    super(), (this.layout = "XY"), (this.stride = 2), this.flatCoordinates;
  }
  computeExtent(t) {
    return Sd(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      t,
    );
  }
  getCoordinates() {
    return _t();
  }
  getFirstCoordinate() {
    return this.flatCoordinates.slice(0, this.stride);
  }
  getFlatCoordinates() {
    return this.flatCoordinates;
  }
  getLastCoordinate() {
    return this.flatCoordinates.slice(
      this.flatCoordinates.length - this.stride,
    );
  }
  getLayout() {
    return this.layout;
  }
  getSimplifiedGeometry(t) {
    if (
      (this.simplifiedGeometryRevision !== this.getRevision() &&
        ((this.simplifiedGeometryMaxMinSquaredTolerance = 0),
        (this.simplifiedGeometryRevision = this.getRevision())),
      t < 0 ||
        (this.simplifiedGeometryMaxMinSquaredTolerance !== 0 &&
          t <= this.simplifiedGeometryMaxMinSquaredTolerance))
    )
      return this;
    const i = this.getSimplifiedGeometryInternal(t);
    return i.getFlatCoordinates().length < this.flatCoordinates.length
      ? i
      : ((this.simplifiedGeometryMaxMinSquaredTolerance = t), this);
  }
  getSimplifiedGeometryInternal(t) {
    return this;
  }
  getStride() {
    return this.stride;
  }
  setFlatCoordinates(t, i) {
    (this.stride = cy(t)), (this.layout = t), (this.flatCoordinates = i);
  }
  setCoordinates(t, i) {
    _t();
  }
  setLayout(t, i, s) {
    let l;
    if (t) l = cy(t);
    else {
      for (let o = 0; o < s; ++o) {
        if (i.length === 0) {
          (this.layout = "XY"), (this.stride = 2);
          return;
        }
        i = i[0];
      }
      (l = i.length), (t = or(l));
    }
    (this.layout = t), (this.stride = l);
  }
  applyTransform(t) {
    this.flatCoordinates &&
      (t(
        this.flatCoordinates,
        this.flatCoordinates,
        this.layout.startsWith("XYZ") ? 3 : 2,
        this.stride,
      ),
      this.changed());
  }
  rotate(t, i) {
    const s = this.getFlatCoordinates();
    if (s) {
      const l = this.getStride();
      vp(s, 0, s.length, l, t, i, s), this.changed();
    }
  }
  scale(t, i, s) {
    i === void 0 && (i = t), s || (s = ys(this.getExtent()));
    const l = this.getFlatCoordinates();
    if (l) {
      const o = this.getStride();
      KS(l, 0, l.length, o, t, i, s, l), this.changed();
    }
  }
  translate(t, i) {
    const s = this.getFlatCoordinates();
    if (s) {
      const l = this.getStride();
      qS(s, 0, s.length, l, t, i, s), this.changed();
    }
  }
}
function or(r) {
  let t;
  return r == 2 ? (t = "XY") : r == 3 ? (t = "XYZ") : r == 4 && (t = "XYZM"), t;
}
function cy(r) {
  let t;
  return (
    r == "XY"
      ? (t = 2)
      : r == "XYZ" || r == "XYM"
        ? (t = 3)
        : r == "XYZM" && (t = 4),
    t
  );
}
function WS(r, t, i) {
  const s = r.getFlatCoordinates();
  if (!s) return null;
  const l = r.getStride();
  return _s(s, 0, s.length, l, t, i);
}
function Sp(r, t, i, s) {
  let l = 0;
  const o = r[i - s],
    c = r[i - s + 1];
  let h = 0,
    d = 0;
  for (; t < i; t += s) {
    const _ = r[t] - o,
      m = r[t + 1] - c;
    (l += d * _ - h * m), (h = _), (d = m);
  }
  return l / 2;
}
function xp(r, t, i, s) {
  let l = 0;
  for (let o = 0, c = i.length; o < c; ++o) {
    const h = i[o];
    (l += Sp(r, t, h, s)), (t = h);
  }
  return l;
}
function QS(r, t, i, s) {
  let l = 0;
  for (let o = 0, c = i.length; o < c; ++o) {
    const h = i[o];
    (l += xp(r, t, h, s)), (t = h[h.length - 1]);
  }
  return l;
}
function hy(r, t, i, s, l, o, c) {
  const h = r[t],
    d = r[t + 1],
    _ = r[i] - h,
    m = r[i + 1] - d;
  let y;
  if (_ === 0 && m === 0) y = t;
  else {
    const v = ((l - h) * _ + (o - d) * m) / (_ * _ + m * m);
    if (v > 1) y = i;
    else if (v > 0) {
      for (let E = 0; E < s; ++E) c[E] = ri(r[t + E], r[i + E], v);
      c.length = s;
      return;
    } else y = t;
  }
  for (let v = 0; v < s; ++v) c[v] = r[y + v];
  c.length = s;
}
function Od(r, t, i, s, l) {
  let o = r[t],
    c = r[t + 1];
  for (t += s; t < i; t += s) {
    const h = r[t],
      d = r[t + 1],
      _ = ir(o, c, h, d);
    _ > l && (l = _), (o = h), (c = d);
  }
  return l;
}
function Dd(r, t, i, s, l) {
  for (let o = 0, c = i.length; o < c; ++o) {
    const h = i[o];
    (l = Od(r, t, h, s, l)), (t = h);
  }
  return l;
}
function JS(r, t, i, s, l) {
  for (let o = 0, c = i.length; o < c; ++o) {
    const h = i[o];
    (l = Dd(r, t, h, s, l)), (t = h[h.length - 1]);
  }
  return l;
}
function Ld(r, t, i, s, l, o, c, h, d, _, m) {
  if (t == i) return _;
  let y, v;
  if (l === 0) {
    if (((v = ir(c, h, r[t], r[t + 1])), v < _)) {
      for (y = 0; y < s; ++y) d[y] = r[t + y];
      return (d.length = s), v;
    }
    return _;
  }
  m = m || [NaN, NaN];
  let E = t + s;
  for (; E < i; )
    if ((hy(r, E - s, E, s, c, h, m), (v = ir(c, h, m[0], m[1])), v < _)) {
      for (_ = v, y = 0; y < s; ++y) d[y] = m[y];
      (d.length = s), (E += s);
    } else E += s * Math.max(((Math.sqrt(v) - Math.sqrt(_)) / l) | 0, 1);
  if (o && (hy(r, i - s, t, s, c, h, m), (v = ir(c, h, m[0], m[1])), v < _)) {
    for (_ = v, y = 0; y < s; ++y) d[y] = m[y];
    d.length = s;
  }
  return _;
}
function zd(r, t, i, s, l, o, c, h, d, _, m) {
  m = m || [NaN, NaN];
  for (let y = 0, v = i.length; y < v; ++y) {
    const E = i[y];
    (_ = Ld(r, t, E, s, l, o, c, h, d, _, m)), (t = E);
  }
  return _;
}
function $S(r, t, i, s, l, o, c, h, d, _, m) {
  m = m || [NaN, NaN];
  for (let y = 0, v = i.length; y < v; ++y) {
    const E = i[y];
    (_ = zd(r, t, E, s, l, o, c, h, d, _, m)), (t = E[E.length - 1]);
  }
  return _;
}
function tx(r, t, i, s) {
  for (let l = 0, o = i.length; l < o; ++l) r[t++] = i[l];
  return t;
}
function ec(r, t, i, s) {
  for (let l = 0, o = i.length; l < o; ++l) {
    const c = i[l];
    for (let h = 0; h < s; ++h) r[t++] = c[h];
  }
  return t;
}
function Qa(r, t, i, s, l) {
  l = l || [];
  let o = 0;
  for (let c = 0, h = i.length; c < h; ++c) {
    const d = ec(r, t, i[c], s);
    (l[o++] = d), (t = d);
  }
  return (l.length = o), l;
}
function Cp(r, t, i, s, l) {
  l = l || [];
  let o = 0;
  for (let c = 0, h = i.length; c < h; ++c) {
    const d = Qa(r, t, i[c], s, l[o]);
    d.length === 0 && (d[0] = t), (l[o++] = d), (t = d[d.length - 1]);
  }
  return (l.length = o), l;
}
function fs(r, t, i, s, l) {
  l = l !== void 0 ? l : [];
  let o = 0;
  for (let c = t; c < i; c += s) l[o++] = r.slice(c, c + s);
  return (l.length = o), l;
}
function Fa(r, t, i, s, l) {
  l = l !== void 0 ? l : [];
  let o = 0;
  for (let c = 0, h = i.length; c < h; ++c) {
    const d = i[c];
    (l[o++] = fs(r, t, d, s, l[o])), (t = d);
  }
  return (l.length = o), l;
}
function ld(r, t, i, s, l) {
  l = l !== void 0 ? l : [];
  let o = 0;
  for (let c = 0, h = i.length; c < h; ++c) {
    const d = i[c];
    (l[o++] = d.length === 1 && d[0] === t ? [] : Fa(r, t, d, s, l[o])),
      (t = d[d.length - 1]);
  }
  return (l.length = o), l;
}
function ic(r, t, i, s, l, o, c) {
  const h = (i - t) / s;
  if (h < 3) {
    for (; t < i; t += s) (o[c++] = r[t]), (o[c++] = r[t + 1]);
    return c;
  }
  const d = new Array(h);
  (d[0] = 1), (d[h - 1] = 1);
  const _ = [t, i - s];
  let m = 0;
  for (; _.length > 0; ) {
    const y = _.pop(),
      v = _.pop();
    let E = 0;
    const x = r[v],
      b = r[v + 1],
      R = r[y],
      A = r[y + 1];
    for (let O = v + s; O < y; O += s) {
      const G = r[O],
        z = r[O + 1],
        D = lS(G, z, x, b, R, A);
      D > E && ((m = O), (E = D));
    }
    E > l &&
      ((d[(m - t) / s] = 1),
      v + s < m && _.push(v, m),
      m + s < y && _.push(m, y));
  }
  for (let y = 0; y < h; ++y)
    d[y] && ((o[c++] = r[t + y * s]), (o[c++] = r[t + y * s + 1]));
  return c;
}
function Tp(r, t, i, s, l, o, c, h) {
  for (let d = 0, _ = i.length; d < _; ++d) {
    const m = i[d];
    (c = ic(r, t, m, s, l, o, c)), h.push(c), (t = m);
  }
  return c;
}
function Ws(r, t) {
  return t * Math.round(r / t);
}
function ex(r, t, i, s, l, o, c) {
  if (t == i) return c;
  let h = Ws(r[t], l),
    d = Ws(r[t + 1], l);
  (t += s), (o[c++] = h), (o[c++] = d);
  let _, m;
  do
    if (((_ = Ws(r[t], l)), (m = Ws(r[t + 1], l)), (t += s), t == i))
      return (o[c++] = _), (o[c++] = m), c;
  while (_ == h && m == d);
  for (; t < i; ) {
    const y = Ws(r[t], l),
      v = Ws(r[t + 1], l);
    if (((t += s), y == _ && v == m)) continue;
    const E = _ - h,
      x = m - d,
      b = y - h,
      R = v - d;
    if (
      E * R == x * b &&
      ((E < 0 && b < E) || E == b || (E > 0 && b > E)) &&
      ((x < 0 && R < x) || x == R || (x > 0 && R > x))
    ) {
      (_ = y), (m = v);
      continue;
    }
    (o[c++] = _), (o[c++] = m), (h = _), (d = m), (_ = y), (m = v);
  }
  return (o[c++] = _), (o[c++] = m), c;
}
function Id(r, t, i, s, l, o, c, h) {
  for (let d = 0, _ = i.length; d < _; ++d) {
    const m = i[d];
    (c = ex(r, t, m, s, l, o, c)), h.push(c), (t = m);
  }
  return c;
}
function ix(r, t, i, s, l, o, c, h) {
  for (let d = 0, _ = i.length; d < _; ++d) {
    const m = i[d],
      y = [];
    (c = Id(r, t, m, s, l, o, c, y)), h.push(y), (t = m[m.length - 1]);
  }
  return c;
}
class Ua extends ar {
  constructor(t, i) {
    super(),
      (this.maxDelta_ = -1),
      (this.maxDeltaRevision_ = -1),
      i !== void 0 && !Array.isArray(t[0])
        ? this.setFlatCoordinates(i, t)
        : this.setCoordinates(t, i);
  }
  clone() {
    return new Ua(this.flatCoordinates.slice(), this.layout);
  }
  closestPointXY(t, i, s, l) {
    return l < rr(this.getExtent(), t, i)
      ? l
      : (this.maxDeltaRevision_ != this.getRevision() &&
          ((this.maxDelta_ = Math.sqrt(
            Od(
              this.flatCoordinates,
              0,
              this.flatCoordinates.length,
              this.stride,
              0,
            ),
          )),
          (this.maxDeltaRevision_ = this.getRevision())),
        Ld(
          this.flatCoordinates,
          0,
          this.flatCoordinates.length,
          this.stride,
          this.maxDelta_,
          !0,
          t,
          i,
          s,
          l,
        ));
  }
  getArea() {
    return Sp(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
    );
  }
  getCoordinates() {
    return fs(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
    );
  }
  getSimplifiedGeometryInternal(t) {
    const i = [];
    return (
      (i.length = ic(
        this.flatCoordinates,
        0,
        this.flatCoordinates.length,
        this.stride,
        t,
        i,
        0,
      )),
      new Ua(i, "XY")
    );
  }
  getType() {
    return "LinearRing";
  }
  intersectsExtent(t) {
    return !1;
  }
  setCoordinates(t, i) {
    this.setLayout(i, t, 1),
      this.flatCoordinates || (this.flatCoordinates = []),
      (this.flatCoordinates.length = ec(
        this.flatCoordinates,
        0,
        t,
        this.stride,
      )),
      this.changed();
  }
}
class _l extends ar {
  constructor(t, i) {
    super(), this.setCoordinates(t, i);
  }
  clone() {
    const t = new _l(this.flatCoordinates.slice(), this.layout);
    return t.applyProperties(this), t;
  }
  closestPointXY(t, i, s, l) {
    const o = this.flatCoordinates,
      c = ir(t, i, o[0], o[1]);
    if (c < l) {
      const h = this.stride;
      for (let d = 0; d < h; ++d) s[d] = o[d];
      return (s.length = h), c;
    }
    return l;
  }
  getCoordinates() {
    return this.flatCoordinates.slice();
  }
  computeExtent(t) {
    return np(this.flatCoordinates, t);
  }
  getType() {
    return "Point";
  }
  intersectsExtent(t) {
    return Ed(t, this.flatCoordinates[0], this.flatCoordinates[1]);
  }
  setCoordinates(t, i) {
    this.setLayout(i, t, 0),
      this.flatCoordinates || (this.flatCoordinates = []),
      (this.flatCoordinates.length = tx(
        this.flatCoordinates,
        0,
        t,
        this.stride,
      )),
      this.changed();
  }
}
function nx(r, t, i, s, l) {
  return !lp(l, function (c) {
    return !Js(r, t, i, s, c[0], c[1]);
  });
}
function Js(r, t, i, s, l, o) {
  let c = 0,
    h = r[i - s],
    d = r[i - s + 1];
  for (; t < i; t += s) {
    const _ = r[t],
      m = r[t + 1];
    d <= o
      ? m > o && (_ - h) * (o - d) - (l - h) * (m - d) > 0 && c++
      : m <= o && (_ - h) * (o - d) - (l - h) * (m - d) < 0 && c--,
      (h = _),
      (d = m);
  }
  return c !== 0;
}
function Nd(r, t, i, s, l, o) {
  if (i.length === 0 || !Js(r, t, i[0], s, l, o)) return !1;
  for (let c = 1, h = i.length; c < h; ++c)
    if (Js(r, i[c - 1], i[c], s, l, o)) return !1;
  return !0;
}
function sx(r, t, i, s, l, o) {
  if (i.length === 0) return !1;
  for (let c = 0, h = i.length; c < h; ++c) {
    const d = i[c];
    if (Nd(r, t, d, s, l, o)) return !0;
    t = d[d.length - 1];
  }
  return !1;
}
function Gd(r, t, i, s, l, o, c) {
  let h, d, _, m, y, v, E;
  const x = l[o + 1],
    b = [];
  for (let O = 0, G = i.length; O < G; ++O) {
    const z = i[O];
    for (m = r[z - s], v = r[z - s + 1], h = t; h < z; h += s)
      (y = r[h]),
        (E = r[h + 1]),
        ((x <= v && E <= x) || (v <= x && x <= E)) &&
          ((_ = ((x - v) / (E - v)) * (y - m) + m), b.push(_)),
        (m = y),
        (v = E);
  }
  let R = NaN,
    A = -1 / 0;
  for (b.sort(Mn), m = b[0], h = 1, d = b.length; h < d; ++h) {
    y = b[h];
    const O = Math.abs(y - m);
    O > A && ((_ = (m + y) / 2), Nd(r, t, i, s, _, x) && ((R = _), (A = O))),
      (m = y);
  }
  return isNaN(R) && (R = l[o]), c ? (c.push(R, x, A), c) : [R, x, A];
}
function Rp(r, t, i, s, l) {
  let o = [];
  for (let c = 0, h = i.length; c < h; ++c) {
    const d = i[c];
    (o = Gd(r, t, d, s, l, 2 * c, o)), (t = d[d.length - 1]);
  }
  return o;
}
function bp(r, t, i, s, l) {
  let o;
  for (t += s; t < i; t += s)
    if (((o = l(r.slice(t - s, t), r.slice(t, t + s))), o)) return o;
  return !1;
}
function nc(r, t, i, s, l, o) {
  return (
    (o = o ?? rp(Ri(), r, t, i, s)),
    qe(l, o)
      ? (o[0] >= l[0] && o[2] <= l[2]) || (o[1] >= l[1] && o[3] <= l[3])
        ? !0
        : bp(r, t, i, s, function (c, h) {
            return sS(l, c, h);
          })
      : !1
  );
}
function rx(r, t, i, s, l) {
  for (let o = 0, c = i.length; o < c; ++o) {
    if (nc(r, t, i[o], s, l)) return !0;
    t = i[o];
  }
  return !1;
}
function Ap(r, t, i, s, l) {
  return !!(
    nc(r, t, i, s, l) ||
    Js(r, t, i, s, l[0], l[1]) ||
    Js(r, t, i, s, l[0], l[3]) ||
    Js(r, t, i, s, l[2], l[1]) ||
    Js(r, t, i, s, l[2], l[3])
  );
}
function wp(r, t, i, s, l) {
  if (!Ap(r, t, i[0], s, l)) return !1;
  if (i.length === 1) return !0;
  for (let o = 1, c = i.length; o < c; ++o)
    if (nx(r, i[o - 1], i[o], s, l) && !nc(r, i[o - 1], i[o], s, l)) return !1;
  return !0;
}
function lx(r, t, i, s, l) {
  for (let o = 0, c = i.length; o < c; ++o) {
    const h = i[o];
    if (wp(r, t, h, s, l)) return !0;
    t = h[h.length - 1];
  }
  return !1;
}
function ax(r, t, i, s) {
  for (; t < i - s; ) {
    for (let l = 0; l < s; ++l) {
      const o = r[t + l];
      (r[t + l] = r[i - s + l]), (r[i - s + l] = o);
    }
    (t += s), (i -= s);
  }
}
function Fd(r, t, i, s) {
  let l = 0,
    o = r[i - s],
    c = r[i - s + 1];
  for (; t < i; t += s) {
    const h = r[t],
      d = r[t + 1];
    (l += (h - o) * (d + c)), (o = h), (c = d);
  }
  return l === 0 ? void 0 : l > 0;
}
function Ud(r, t, i, s, l) {
  l = l !== void 0 ? l : !1;
  for (let o = 0, c = i.length; o < c; ++o) {
    const h = i[o],
      d = Fd(r, t, h, s);
    if (o === 0) {
      if ((l && d) || (!l && !d)) return !1;
    } else if ((l && !d) || (!l && d)) return !1;
    t = h;
  }
  return !0;
}
function Mp(r, t, i, s, l) {
  for (let o = 0, c = i.length; o < c; ++o) {
    const h = i[o];
    if (!Ud(r, t, h, s, l)) return !1;
    h.length && (t = h[h.length - 1]);
  }
  return !0;
}
function Lu(r, t, i, s, l) {
  l = l !== void 0 ? l : !1;
  for (let o = 0, c = i.length; o < c; ++o) {
    const h = i[o],
      d = Fd(r, t, h, s);
    (o === 0 ? (l && d) || (!l && !d) : (l && !d) || (!l && d)) &&
      ax(r, t, h, s),
      (t = h);
  }
  return t;
}
function ad(r, t, i, s, l) {
  for (let o = 0, c = i.length; o < c; ++o) t = Lu(r, t, i[o], s, l);
  return t;
}
function ox(r, t) {
  const i = [];
  let s = 0,
    l = 0,
    o;
  for (let c = 0, h = t.length; c < h; ++c) {
    const d = t[c],
      _ = Fd(r, s, d, 2);
    if ((o === void 0 && (o = _), _ === o)) i.push(t.slice(l, c + 1));
    else {
      if (i.length === 0) continue;
      i[i.length - 1].push(t[l]);
    }
    (l = c + 1), (s = d);
  }
  return i;
}
class ps extends ar {
  constructor(t, i, s) {
    super(),
      (this.ends_ = []),
      (this.flatInteriorPointRevision_ = -1),
      (this.flatInteriorPoint_ = null),
      (this.maxDelta_ = -1),
      (this.maxDeltaRevision_ = -1),
      (this.orientedRevision_ = -1),
      (this.orientedFlatCoordinates_ = null),
      i !== void 0 && s
        ? (this.setFlatCoordinates(i, t), (this.ends_ = s))
        : this.setCoordinates(t, i);
  }
  appendLinearRing(t) {
    this.flatCoordinates
      ? en(this.flatCoordinates, t.getFlatCoordinates())
      : (this.flatCoordinates = t.getFlatCoordinates().slice()),
      this.ends_.push(this.flatCoordinates.length),
      this.changed();
  }
  clone() {
    const t = new ps(
      this.flatCoordinates.slice(),
      this.layout,
      this.ends_.slice(),
    );
    return t.applyProperties(this), t;
  }
  closestPointXY(t, i, s, l) {
    return l < rr(this.getExtent(), t, i)
      ? l
      : (this.maxDeltaRevision_ != this.getRevision() &&
          ((this.maxDelta_ = Math.sqrt(
            Dd(this.flatCoordinates, 0, this.ends_, this.stride, 0),
          )),
          (this.maxDeltaRevision_ = this.getRevision())),
        zd(
          this.flatCoordinates,
          0,
          this.ends_,
          this.stride,
          this.maxDelta_,
          !0,
          t,
          i,
          s,
          l,
        ));
  }
  containsXY(t, i) {
    return Nd(
      this.getOrientedFlatCoordinates(),
      0,
      this.ends_,
      this.stride,
      t,
      i,
    );
  }
  getArea() {
    return xp(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride);
  }
  getCoordinates(t) {
    let i;
    return (
      t !== void 0
        ? ((i = this.getOrientedFlatCoordinates().slice()),
          Lu(i, 0, this.ends_, this.stride, t))
        : (i = this.flatCoordinates),
      Fa(i, 0, this.ends_, this.stride)
    );
  }
  getEnds() {
    return this.ends_;
  }
  getFlatInteriorPoint() {
    if (this.flatInteriorPointRevision_ != this.getRevision()) {
      const t = ys(this.getExtent());
      (this.flatInteriorPoint_ = Gd(
        this.getOrientedFlatCoordinates(),
        0,
        this.ends_,
        this.stride,
        t,
        0,
      )),
        (this.flatInteriorPointRevision_ = this.getRevision());
    }
    return this.flatInteriorPoint_;
  }
  getInteriorPoint() {
    return new _l(this.getFlatInteriorPoint(), "XYM");
  }
  getLinearRingCount() {
    return this.ends_.length;
  }
  getLinearRing(t) {
    return t < 0 || this.ends_.length <= t
      ? null
      : new Ua(
          this.flatCoordinates.slice(
            t === 0 ? 0 : this.ends_[t - 1],
            this.ends_[t],
          ),
          this.layout,
        );
  }
  getLinearRings() {
    const t = this.layout,
      i = this.flatCoordinates,
      s = this.ends_,
      l = [];
    let o = 0;
    for (let c = 0, h = s.length; c < h; ++c) {
      const d = s[c],
        _ = new Ua(i.slice(o, d), t);
      l.push(_), (o = d);
    }
    return l;
  }
  getOrientedFlatCoordinates() {
    if (this.orientedRevision_ != this.getRevision()) {
      const t = this.flatCoordinates;
      Ud(t, 0, this.ends_, this.stride)
        ? (this.orientedFlatCoordinates_ = t)
        : ((this.orientedFlatCoordinates_ = t.slice()),
          (this.orientedFlatCoordinates_.length = Lu(
            this.orientedFlatCoordinates_,
            0,
            this.ends_,
            this.stride,
          ))),
        (this.orientedRevision_ = this.getRevision());
    }
    return this.orientedFlatCoordinates_;
  }
  getSimplifiedGeometryInternal(t) {
    const i = [],
      s = [];
    return (
      (i.length = Id(
        this.flatCoordinates,
        0,
        this.ends_,
        this.stride,
        Math.sqrt(t),
        i,
        0,
        s,
      )),
      new ps(i, "XY", s)
    );
  }
  getType() {
    return "Polygon";
  }
  intersectsExtent(t) {
    return wp(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, t);
  }
  setCoordinates(t, i) {
    this.setLayout(i, t, 2),
      this.flatCoordinates || (this.flatCoordinates = []);
    const s = Qa(this.flatCoordinates, 0, t, this.stride, this.ends_);
    (this.flatCoordinates.length = s.length === 0 ? 0 : s[s.length - 1]),
      this.changed();
  }
}
function fy(r) {
  if (qa(r)) throw new Error("Cannot create polygon from empty extent");
  const t = r[0],
    i = r[1],
    s = r[2],
    l = r[3],
    o = [t, i, t, l, s, l, s, i, t, i];
  return new ps(o, "XY", [o.length]);
}
function zu(r, t, i, s, l, o, c) {
  let h, d;
  const _ = (i - t) / s;
  if (_ === 1) h = t;
  else if (_ === 2) (h = t), (d = l);
  else if (_ !== 0) {
    let m = r[t],
      y = r[t + 1],
      v = 0;
    const E = [0];
    for (let R = t + s; R < i; R += s) {
      const A = r[R],
        O = r[R + 1];
      (v += Math.sqrt((A - m) * (A - m) + (O - y) * (O - y))),
        E.push(v),
        (m = A),
        (y = O);
    }
    const x = l * v,
      b = ZE(E, x);
    b < 0
      ? ((d = (x - E[-b - 2]) / (E[-b - 1] - E[-b - 2])),
        (h = t + (-b - 2) * s))
      : (h = t + b * s);
  }
  (c = c > 1 ? c : 2), (o = o || new Array(c));
  for (let m = 0; m < c; ++m)
    o[m] =
      h === void 0
        ? NaN
        : d === void 0
          ? r[h + m]
          : ri(r[h + m], r[h + s + m], d);
  return o;
}
function od(r, t, i, s, l, o) {
  if (i == t) return null;
  let c;
  if (l < r[t + s - 1])
    return o ? ((c = r.slice(t, t + s)), (c[s - 1] = l), c) : null;
  if (r[i - 1] < l)
    return o ? ((c = r.slice(i - s, i)), (c[s - 1] = l), c) : null;
  if (l == r[t + s - 1]) return r.slice(t, t + s);
  let h = t / s,
    d = i / s;
  for (; h < d; ) {
    const v = (h + d) >> 1;
    l < r[(v + 1) * s - 1] ? (d = v) : (h = v + 1);
  }
  const _ = r[h * s - 1];
  if (l == _) return r.slice((h - 1) * s, (h - 1) * s + s);
  const m = r[(h + 1) * s - 1],
    y = (l - _) / (m - _);
  c = [];
  for (let v = 0; v < s - 1; ++v)
    c.push(ri(r[(h - 1) * s + v], r[h * s + v], y));
  return c.push(l), c;
}
function ux(r, t, i, s, l, o, c) {
  if (c) return od(r, t, i[i.length - 1], s, l, o);
  let h;
  if (l < r[s - 1]) return o ? ((h = r.slice(0, s)), (h[s - 1] = l), h) : null;
  if (r[r.length - 1] < l)
    return o ? ((h = r.slice(r.length - s)), (h[s - 1] = l), h) : null;
  for (let d = 0, _ = i.length; d < _; ++d) {
    const m = i[d];
    if (t != m) {
      if (l < r[t + s - 1]) return null;
      if (l <= r[m - 1]) return od(r, t, m, s, l, !1);
      t = m;
    }
  }
  return null;
}
function Op(r, t, i, s) {
  let l = r[t],
    o = r[t + 1],
    c = 0;
  for (let h = t + s; h < i; h += s) {
    const d = r[h],
      _ = r[h + 1];
    (c += Math.sqrt((d - l) * (d - l) + (_ - o) * (_ - o))), (l = d), (o = _);
  }
  return c;
}
class ml extends ar {
  constructor(t, i) {
    super(),
      (this.flatMidpoint_ = null),
      (this.flatMidpointRevision_ = -1),
      (this.maxDelta_ = -1),
      (this.maxDeltaRevision_ = -1),
      i !== void 0 && !Array.isArray(t[0])
        ? this.setFlatCoordinates(i, t)
        : this.setCoordinates(t, i);
  }
  appendCoordinate(t) {
    en(this.flatCoordinates, t), this.changed();
  }
  clone() {
    const t = new ml(this.flatCoordinates.slice(), this.layout);
    return t.applyProperties(this), t;
  }
  closestPointXY(t, i, s, l) {
    return l < rr(this.getExtent(), t, i)
      ? l
      : (this.maxDeltaRevision_ != this.getRevision() &&
          ((this.maxDelta_ = Math.sqrt(
            Od(
              this.flatCoordinates,
              0,
              this.flatCoordinates.length,
              this.stride,
              0,
            ),
          )),
          (this.maxDeltaRevision_ = this.getRevision())),
        Ld(
          this.flatCoordinates,
          0,
          this.flatCoordinates.length,
          this.stride,
          this.maxDelta_,
          !1,
          t,
          i,
          s,
          l,
        ));
  }
  forEachSegment(t) {
    return bp(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      t,
    );
  }
  getCoordinateAtM(t, i) {
    return this.layout != "XYM" && this.layout != "XYZM"
      ? null
      : ((i = i !== void 0 ? i : !1),
        od(
          this.flatCoordinates,
          0,
          this.flatCoordinates.length,
          this.stride,
          t,
          i,
        ));
  }
  getCoordinates() {
    return fs(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
    );
  }
  getCoordinateAt(t, i) {
    return zu(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      t,
      i,
      this.stride,
    );
  }
  getLength() {
    return Op(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
    );
  }
  getFlatMidpoint() {
    return (
      this.flatMidpointRevision_ != this.getRevision() &&
        ((this.flatMidpoint_ = this.getCoordinateAt(
          0.5,
          this.flatMidpoint_ ?? void 0,
        )),
        (this.flatMidpointRevision_ = this.getRevision())),
      this.flatMidpoint_
    );
  }
  getSimplifiedGeometryInternal(t) {
    const i = [];
    return (
      (i.length = ic(
        this.flatCoordinates,
        0,
        this.flatCoordinates.length,
        this.stride,
        t,
        i,
        0,
      )),
      new ml(i, "XY")
    );
  }
  getType() {
    return "LineString";
  }
  intersectsExtent(t) {
    return nc(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      t,
      this.getExtent(),
    );
  }
  setCoordinates(t, i) {
    this.setLayout(i, t, 1),
      this.flatCoordinates || (this.flatCoordinates = []),
      (this.flatCoordinates.length = ec(
        this.flatCoordinates,
        0,
        t,
        this.stride,
      )),
      this.changed();
  }
}
const xi = {
    PRERENDER: "prerender",
    POSTRENDER: "postrender",
    PRECOMPOSE: "precompose",
    POSTCOMPOSE: "postcompose",
    RENDERCOMPLETE: "rendercomplete",
  },
  vs =
    typeof navigator < "u" && typeof navigator.userAgent < "u"
      ? navigator.userAgent.toLowerCase()
      : "",
  cx = vs.includes("firefox"),
  hx = vs.includes("safari") && !vs.includes("chrom");
hx &&
  (vs.includes("version/15.4") ||
    /cpu (os|iphone os) 15_4 like mac os x/.test(vs));
const fx = vs.includes("webkit") && !vs.includes("edge"),
  Dp = vs.includes("macintosh"),
  Lp = typeof devicePixelRatio < "u" ? devicePixelRatio : 1,
  zp =
    typeof WorkerGlobalScope < "u" &&
    typeof OffscreenCanvas < "u" &&
    self instanceof WorkerGlobalScope,
  Ip = typeof Image < "u" && Image.prototype.decode,
  Np = (function () {
    let r = !1;
    try {
      const t = Object.defineProperty({}, "passive", {
        get: function () {
          r = !0;
        },
      });
      window.addEventListener("_", null, t),
        window.removeEventListener("_", null, t);
    } catch {}
    return r;
  })(),
  xt = { IDLE: 0, LOADING: 1, LOADED: 2, ERROR: 3 },
  dy = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50],
  };
var gy = {
  red: 0,
  orange: 60,
  yellow: 120,
  green: 180,
  blue: 240,
  purple: 300,
};
function dx(r) {
  var m, y;
  var t,
    i = [],
    s = 1,
    l;
  if (typeof r == "number")
    return {
      space: "rgb",
      values: [r >>> 16, (r & 65280) >>> 8, r & 255],
      alpha: 1,
    };
  if (typeof r == "number")
    return {
      space: "rgb",
      values: [r >>> 16, (r & 65280) >>> 8, r & 255],
      alpha: 1,
    };
  if (((r = String(r).toLowerCase()), dy[r])) (i = dy[r].slice()), (l = "rgb");
  else if (r === "transparent") (s = 0), (l = "rgb"), (i = [0, 0, 0]);
  else if (r[0] === "#") {
    var o = r.slice(1),
      c = o.length,
      h = c <= 4;
    (s = 1),
      h
        ? ((i = [
            parseInt(o[0] + o[0], 16),
            parseInt(o[1] + o[1], 16),
            parseInt(o[2] + o[2], 16),
          ]),
          c === 4 && (s = parseInt(o[3] + o[3], 16) / 255))
        : ((i = [
            parseInt(o[0] + o[1], 16),
            parseInt(o[2] + o[3], 16),
            parseInt(o[4] + o[5], 16),
          ]),
          c === 8 && (s = parseInt(o[6] + o[7], 16) / 255)),
      i[0] || (i[0] = 0),
      i[1] || (i[1] = 0),
      i[2] || (i[2] = 0),
      (l = "rgb");
  } else if (
    (t =
      /^((?:rgba?|hs[lvb]a?|hwba?|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms|oklch|oklab|color))\s*\(([^\)]*)\)/.exec(
        r,
      ))
  ) {
    var d = t[1];
    l = d.replace(/a$/, "");
    var _ = l === "cmyk" ? 4 : l === "gray" ? 1 : 3;
    (i = t[2].trim().split(/\s*[,\/]\s*|\s+/)),
      l === "color" && (l = i.shift()),
      (i = i.map(function (v, E) {
        if (v[v.length - 1] === "%")
          return (
            (v = parseFloat(v) / 100),
            E === 3
              ? v
              : l === "rgb"
                ? v * 255
                : l[0] === "h" || (l[0] === "l" && !E)
                  ? v * 100
                  : l === "lab"
                    ? v * 125
                    : l === "lch"
                      ? E < 2
                        ? v * 150
                        : v * 360
                      : l[0] === "o" && !E
                        ? v
                        : l === "oklab"
                          ? v * 0.4
                          : l === "oklch"
                            ? E < 2
                              ? v * 0.4
                              : v * 360
                            : v
          );
        if (l[E] === "h" || (E === 2 && l[l.length - 1] === "h")) {
          if (gy[v] !== void 0) return gy[v];
          if (v.endsWith("deg")) return parseFloat(v);
          if (v.endsWith("turn")) return parseFloat(v) * 360;
          if (v.endsWith("grad")) return (parseFloat(v) * 360) / 400;
          if (v.endsWith("rad")) return (parseFloat(v) * 180) / Math.PI;
        }
        return v === "none" ? 0 : parseFloat(v);
      })),
      (s = i.length > _ ? i.pop() : 1);
  } else
    /[0-9](?:\s|\/|,)/.test(r) &&
      ((i = r.match(/([0-9]+)/g).map(function (v) {
        return parseFloat(v);
      })),
      (l =
        ((y = (m = r.match(/([a-z])/gi)) == null ? void 0 : m.join("")) == null
          ? void 0
          : y.toLowerCase()) || "rgb"));
  return { space: l, values: i, alpha: s };
}
const Xa = {
  name: "rgb",
  min: [0, 0, 0],
  max: [255, 255, 255],
  channel: ["red", "green", "blue"],
  alias: ["RGB"],
};
var Mf = {
  name: "hsl",
  min: [0, 0, 0],
  max: [360, 100, 100],
  channel: ["hue", "saturation", "lightness"],
  alias: ["HSL"],
  rgb: function (r) {
    var t = r[0] / 360,
      i = r[1] / 100,
      s = r[2] / 100,
      l,
      o,
      c,
      h,
      d,
      _ = 0;
    if (i === 0) return (d = s * 255), [d, d, d];
    for (
      o = s < 0.5 ? s * (1 + i) : s + i - s * i, l = 2 * s - o, h = [0, 0, 0];
      _ < 3;

    )
      (c = t + (1 / 3) * -(_ - 1)),
        c < 0 ? c++ : c > 1 && c--,
        (d =
          6 * c < 1
            ? l + (o - l) * 6 * c
            : 2 * c < 1
              ? o
              : 3 * c < 2
                ? l + (o - l) * (2 / 3 - c) * 6
                : l),
        (h[_++] = d * 255);
    return h;
  },
};
Xa.hsl = function (r) {
  var t = r[0] / 255,
    i = r[1] / 255,
    s = r[2] / 255,
    l = Math.min(t, i, s),
    o = Math.max(t, i, s),
    c = o - l,
    h,
    d,
    _;
  return (
    o === l
      ? (h = 0)
      : t === o
        ? (h = (i - s) / c)
        : i === o
          ? (h = 2 + (s - t) / c)
          : s === o && (h = 4 + (t - i) / c),
    (h = Math.min(h * 60, 360)),
    h < 0 && (h += 360),
    (_ = (l + o) / 2),
    o === l ? (d = 0) : _ <= 0.5 ? (d = c / (o + l)) : (d = c / (2 - o - l)),
    [h, d * 100, _ * 100]
  );
};
function gx(r) {
  Array.isArray(r) && r.raw && (r = String.raw(...arguments)),
    r instanceof Number && (r = +r);
  var t,
    i = dx(r);
  if (!i.space) return [];
  const s = i.space[0] === "h" ? Mf.min : Xa.min,
    l = i.space[0] === "h" ? Mf.max : Xa.max;
  return (
    (t = Array(3)),
    (t[0] = Math.min(Math.max(i.values[0], s[0]), l[0])),
    (t[1] = Math.min(Math.max(i.values[1], s[1]), l[1])),
    (t[2] = Math.min(Math.max(i.values[2], s[2]), l[2])),
    i.space[0] === "h" && (t = Mf.rgb(t)),
    t.push(Math.min(Math.max(i.alpha, 0), 1)),
    t
  );
}
const ze = {
  name: "xyz",
  min: [0, 0, 0],
  channel: ["X", "Y", "Z"],
  alias: ["XYZ", "ciexyz", "cie1931"],
  whitepoint: {
    2: {
      A: [109.85, 100, 35.585],
      C: [98.074, 100, 118.232],
      D50: [96.422, 100, 82.521],
      D55: [95.682, 100, 92.149],
      D65: [95.045592705167, 100, 108.9057750759878],
      D75: [94.972, 100, 122.638],
      F2: [99.187, 100, 67.395],
      F7: [95.044, 100, 108.755],
      F11: [100.966, 100, 64.37],
      E: [100, 100, 100],
    },
    10: {
      A: [111.144, 100, 35.2],
      C: [97.285, 100, 116.145],
      D50: [96.72, 100, 81.427],
      D55: [95.799, 100, 90.926],
      D65: [94.811, 100, 107.304],
      D75: [94.416, 100, 120.641],
      F2: [103.28, 100, 69.026],
      F7: [95.792, 100, 107.687],
      F11: [103.866, 100, 65.627],
      E: [100, 100, 100],
    },
  },
};
ze.max = ze.whitepoint[2].D65;
ze.rgb = function (r, t) {
  t = t || ze.whitepoint[2].E;
  var i = r[0] / t[0],
    s = r[1] / t[1],
    l = r[2] / t[2],
    o,
    c,
    h;
  return (
    (o = i * 3.240969941904521 + s * -1.537383177570093 + l * -0.498610760293),
    (c = i * -0.96924363628087 + s * 1.87596750150772 + l * 0.041555057407175),
    (h = i * 0.055630079696993 + s * -0.20397695888897 + l * 1.056971514242878),
    (o =
      o > 0.0031308 ? 1.055 * Math.pow(o, 1 / 2.4) - 0.055 : (o = o * 12.92)),
    (c =
      c > 0.0031308 ? 1.055 * Math.pow(c, 1 / 2.4) - 0.055 : (c = c * 12.92)),
    (h =
      h > 0.0031308 ? 1.055 * Math.pow(h, 1 / 2.4) - 0.055 : (h = h * 12.92)),
    (o = Math.min(Math.max(0, o), 1)),
    (c = Math.min(Math.max(0, c), 1)),
    (h = Math.min(Math.max(0, h), 1)),
    [o * 255, c * 255, h * 255]
  );
};
Xa.xyz = function (r, t) {
  var i = r[0] / 255,
    s = r[1] / 255,
    l = r[2] / 255;
  (i = i > 0.04045 ? Math.pow((i + 0.055) / 1.055, 2.4) : i / 12.92),
    (s = s > 0.04045 ? Math.pow((s + 0.055) / 1.055, 2.4) : s / 12.92),
    (l = l > 0.04045 ? Math.pow((l + 0.055) / 1.055, 2.4) : l / 12.92);
  var o = i * 0.41239079926595 + s * 0.35758433938387 + l * 0.18048078840183,
    c = i * 0.21263900587151 + s * 0.71516867876775 + l * 0.072192315360733,
    h = i * 0.019330818715591 + s * 0.11919477979462 + l * 0.95053215224966;
  return (t = t || ze.whitepoint[2].E), [o * t[0], c * t[1], h * t[2]];
};
var Xd = {
  name: "luv",
  min: [0, -134, -140],
  max: [100, 224, 122],
  channel: ["lightness", "u", "v"],
  alias: ["LUV", "cieluv", "cie1976"],
  xyz: function (r, t, i) {
    var s, l, o, c, h, d, _, m, y, v, E, x, b;
    if (((o = r[0]), (c = r[1]), (h = r[2]), o === 0)) return [0, 0, 0];
    var R = 0.0011070564598794539;
    return (
      (t = t || "D65"),
      (i = i || 2),
      (y = ze.whitepoint[i][t][0]),
      (v = ze.whitepoint[i][t][1]),
      (E = ze.whitepoint[i][t][2]),
      (x = (4 * y) / (y + 15 * v + 3 * E)),
      (b = (9 * v) / (y + 15 * v + 3 * E)),
      (s = c / (13 * o) + x || 0),
      (l = h / (13 * o) + b || 0),
      (_ = o > 8 ? v * Math.pow((o + 16) / 116, 3) : v * o * R),
      (d = (_ * 9 * s) / (4 * l) || 0),
      (m = (_ * (12 - 3 * s - 20 * l)) / (4 * l) || 0),
      [d, _, m]
    );
  },
};
ze.luv = function (r, t, i) {
  var s,
    l,
    o,
    c,
    h,
    d,
    _,
    m,
    y,
    v,
    E,
    x,
    b,
    R = 0.008856451679035631,
    A = 903.2962962962961;
  (t = t || "D65"),
    (i = i || 2),
    (y = ze.whitepoint[i][t][0]),
    (v = ze.whitepoint[i][t][1]),
    (E = ze.whitepoint[i][t][2]),
    (x = (4 * y) / (y + 15 * v + 3 * E)),
    (b = (9 * v) / (y + 15 * v + 3 * E)),
    (d = r[0]),
    (_ = r[1]),
    (m = r[2]),
    (s = (4 * d) / (d + 15 * _ + 3 * m) || 0),
    (l = (9 * _) / (d + 15 * _ + 3 * m) || 0);
  var O = _ / v;
  return (
    (o = O <= R ? A * O : 116 * Math.pow(O, 1 / 3) - 16),
    (c = 13 * o * (s - x)),
    (h = 13 * o * (l - b)),
    [o, c, h]
  );
};
var Gp = {
  name: "lchuv",
  channel: ["lightness", "chroma", "hue"],
  alias: ["LCHuv", "cielchuv"],
  min: [0, 0, 0],
  max: [100, 100, 360],
  luv: function (r) {
    var t = r[0],
      i = r[1],
      s = r[2],
      l,
      o,
      c;
    return (
      (c = (s / 360) * 2 * Math.PI),
      (l = i * Math.cos(c)),
      (o = i * Math.sin(c)),
      [t, l, o]
    );
  },
  xyz: function (r) {
    return Xd.xyz(Gp.luv(r));
  },
};
Xd.lchuv = function (r) {
  var t = r[0],
    i = r[1],
    s = r[2],
    l = Math.sqrt(i * i + s * s),
    o = Math.atan2(s, i),
    c = (o * 360) / 2 / Math.PI;
  return c < 0 && (c += 360), [t, l, c];
};
ze.lchuv = function (r) {
  return Xd.lchuv(ze.luv(r));
};
const Yd = [NaN, NaN, NaN, 0];
function _x(r) {
  return typeof r == "string" ? r : Pd(r);
}
const mx = 1024,
  Ca = {};
let Of = 0;
function yx(r) {
  if (r.length === 4) return r;
  const t = r.slice();
  return (t[3] = 1), t;
}
function _y(r) {
  const t = ze.lchuv(Xa.xyz(r));
  return (t[3] = r[3]), t;
}
function px(r) {
  const t = ze.rgb(Gp.xyz(r));
  return (t[3] = r[3]), t;
}
function kd(r) {
  if (r === "none") return Yd;
  if (Ca.hasOwnProperty(r)) return Ca[r];
  if (Of >= mx) {
    let i = 0;
    for (const s in Ca) (i++ & 3) === 0 && (delete Ca[s], --Of);
  }
  const t = gx(r);
  if (t.length !== 4) throw new Error('failed to parse "' + r + '" as color');
  for (const i of t)
    if (isNaN(i)) throw new Error('failed to parse "' + r + '" as color');
  return Fp(t), (Ca[r] = t), ++Of, t;
}
function yl(r) {
  return Array.isArray(r) ? r : kd(r);
}
function Fp(r) {
  return (
    (r[0] = re((r[0] + 0.5) | 0, 0, 255)),
    (r[1] = re((r[1] + 0.5) | 0, 0, 255)),
    (r[2] = re((r[2] + 0.5) | 0, 0, 255)),
    (r[3] = re(r[3], 0, 1)),
    r
  );
}
function Pd(r) {
  let t = r[0];
  t != (t | 0) && (t = (t + 0.5) | 0);
  let i = r[1];
  i != (i | 0) && (i = (i + 0.5) | 0);
  let s = r[2];
  s != (s | 0) && (s = (s + 0.5) | 0);
  const l = r[3] === void 0 ? 1 : Math.round(r[3] * 1e3) / 1e3;
  return "rgba(" + t + "," + i + "," + s + "," + l + ")";
}
function pe(r, t, i, s) {
  let l;
  return (
    i && i.length
      ? (l = i.shift())
      : zp
        ? (l = new OffscreenCanvas(r || 300, t || 300))
        : (l = document.createElement("canvas")),
    r && (l.width = r),
    t && (l.height = t),
    l.getContext("2d", s)
  );
}
let Df;
function Iu() {
  return Df || (Df = pe(1, 1)), Df;
}
function sc(r) {
  const t = r.canvas;
  (t.width = 1), (t.height = 1), r.clearRect(0, 0, 1, 1);
}
function vx(r) {
  let t = r.offsetWidth;
  const i = getComputedStyle(r);
  return (t += parseInt(i.marginLeft, 10) + parseInt(i.marginRight, 10)), t;
}
function Ex(r) {
  let t = r.offsetHeight;
  const i = getComputedStyle(r);
  return (t += parseInt(i.marginTop, 10) + parseInt(i.marginBottom, 10)), t;
}
function my(r, t) {
  const i = t.parentNode;
  i && i.replaceChild(r, t);
}
function Up(r) {
  for (; r.lastChild; ) r.lastChild.remove();
}
function Sx(r, t) {
  const i = r.childNodes;
  for (let s = 0; ; ++s) {
    const l = i[s],
      o = t[s];
    if (!l && !o) break;
    if (l !== o) {
      if (!l) {
        r.appendChild(o);
        continue;
      }
      if (!o) {
        r.removeChild(l), --s;
        continue;
      }
      r.insertBefore(o, l);
    }
  }
}
function xx(r, t, i) {
  const s = r;
  let l = !0,
    o = !1,
    c = !1;
  const h = [
    bu(s, pt.LOAD, function () {
      (c = !0), o || t();
    }),
  ];
  return (
    s.src && Ip
      ? ((o = !0),
        s
          .decode()
          .then(function () {
            l && t();
          })
          .catch(function (d) {
            l && (c ? t() : i());
          }))
      : h.push(bu(s, pt.ERROR, i)),
    function () {
      (l = !1), h.forEach(jt);
    }
  );
}
function Cx(r, t) {
  return new Promise((i, s) => {
    function l() {
      c(), i(r);
    }
    function o() {
      c(), s(new Error("Image load error"));
    }
    function c() {
      r.removeEventListener("load", l), r.removeEventListener("error", o);
    }
    r.addEventListener("load", l), r.addEventListener("error", o);
  });
}
function Tx(r, t) {
  return (
    t && (r.src = t),
    r.src && Ip
      ? new Promise((i, s) =>
          r
            .decode()
            .then(() => i(r))
            .catch((l) => (r.complete && r.width ? i(r) : s(l))),
        )
      : Cx(r)
  );
}
class Rx {
  constructor() {
    (this.cache_ = {}),
      (this.patternCache_ = {}),
      (this.cacheSize_ = 0),
      (this.maxCacheSize_ = 1024);
  }
  clear() {
    (this.cache_ = {}), (this.patternCache_ = {}), (this.cacheSize_ = 0);
  }
  canExpireCache() {
    return this.cacheSize_ > this.maxCacheSize_;
  }
  expire() {
    if (this.canExpireCache()) {
      let t = 0;
      for (const i in this.cache_) {
        const s = this.cache_[i];
        (t++ & 3) === 0 &&
          !s.hasListener() &&
          (delete this.cache_[i],
          delete this.patternCache_[i],
          --this.cacheSize_);
      }
    }
  }
  get(t, i, s) {
    const l = Lf(t, i, s);
    return l in this.cache_ ? this.cache_[l] : null;
  }
  getPattern(t, i, s) {
    const l = Lf(t, i, s);
    return l in this.patternCache_ ? this.patternCache_[l] : null;
  }
  set(t, i, s, l, o) {
    const c = Lf(t, i, s),
      h = c in this.cache_;
    (this.cache_[c] = l),
      o &&
        (l.getImageState() === xt.IDLE && l.load(),
        l.getImageState() === xt.LOADING
          ? l.ready().then(() => {
              this.patternCache_[c] = Iu().createPattern(
                l.getImage(1),
                "repeat",
              );
            })
          : (this.patternCache_[c] = Iu().createPattern(
              l.getImage(1),
              "repeat",
            ))),
      h || ++this.cacheSize_;
  }
  setSize(t) {
    (this.maxCacheSize_ = t), this.expire();
  }
}
function Lf(r, t, i) {
  const s = i ? yl(i) : "null";
  return t + ":" + r + ":" + s;
}
const Ci = new Rx();
let Ta = null;
class Xp extends Ku {
  constructor(t, i, s, l, o) {
    super(),
      (this.hitDetectionImage_ = null),
      (this.image_ = t),
      (this.crossOrigin_ = s),
      (this.canvas_ = {}),
      (this.color_ = o),
      (this.imageState_ = l === void 0 ? xt.IDLE : l),
      (this.size_ = t && t.width && t.height ? [t.width, t.height] : null),
      (this.src_ = i),
      this.tainted_,
      (this.ready_ = null);
  }
  initializeImage_() {
    (this.image_ = new Image()),
      this.crossOrigin_ !== null &&
        (this.image_.crossOrigin = this.crossOrigin_);
  }
  isTainted_() {
    if (this.tainted_ === void 0 && this.imageState_ === xt.LOADED) {
      Ta || (Ta = pe(1, 1, void 0, { willReadFrequently: !0 })),
        Ta.drawImage(this.image_, 0, 0);
      try {
        Ta.getImageData(0, 0, 1, 1), (this.tainted_ = !1);
      } catch {
        (Ta = null), (this.tainted_ = !0);
      }
    }
    return this.tainted_ === !0;
  }
  dispatchChangeEvent_() {
    this.dispatchEvent(pt.CHANGE);
  }
  handleImageError_() {
    (this.imageState_ = xt.ERROR), this.dispatchChangeEvent_();
  }
  handleImageLoad_() {
    (this.imageState_ = xt.LOADED),
      (this.size_ = [this.image_.width, this.image_.height]),
      this.dispatchChangeEvent_();
  }
  getImage(t) {
    return (
      this.image_ || this.initializeImage_(),
      this.replaceColor_(t),
      this.canvas_[t] ? this.canvas_[t] : this.image_
    );
  }
  getPixelRatio(t) {
    return this.replaceColor_(t), this.canvas_[t] ? t : 1;
  }
  getImageState() {
    return this.imageState_;
  }
  getHitDetectionImage() {
    if ((this.image_ || this.initializeImage_(), !this.hitDetectionImage_))
      if (this.isTainted_()) {
        const t = this.size_[0],
          i = this.size_[1],
          s = pe(t, i);
        s.fillRect(0, 0, t, i), (this.hitDetectionImage_ = s.canvas);
      } else this.hitDetectionImage_ = this.image_;
    return this.hitDetectionImage_;
  }
  getSize() {
    return this.size_;
  }
  getSrc() {
    return this.src_;
  }
  load() {
    if (this.imageState_ === xt.IDLE) {
      this.image_ || this.initializeImage_(), (this.imageState_ = xt.LOADING);
      try {
        this.src_ !== void 0 && (this.image_.src = this.src_);
      } catch {
        this.handleImageError_();
      }
      this.image_ instanceof HTMLImageElement &&
        Tx(this.image_, this.src_)
          .then((t) => {
            (this.image_ = t), this.handleImageLoad_();
          })
          .catch(this.handleImageError_.bind(this));
    }
  }
  replaceColor_(t) {
    if (!this.color_ || this.canvas_[t] || this.imageState_ !== xt.LOADED)
      return;
    const i = this.image_,
      s = pe(Math.ceil(i.width * t), Math.ceil(i.height * t)),
      l = s.canvas;
    s.scale(t, t),
      s.drawImage(i, 0, 0),
      (s.globalCompositeOperation = "multiply"),
      (s.fillStyle = _x(this.color_)),
      s.fillRect(0, 0, l.width / t, l.height / t),
      (s.globalCompositeOperation = "destination-in"),
      s.drawImage(i, 0, 0),
      (this.canvas_[t] = l);
  }
  ready() {
    return (
      this.ready_ ||
        (this.ready_ = new Promise((t) => {
          if (this.imageState_ === xt.LOADED || this.imageState_ === xt.ERROR)
            t();
          else {
            const i = () => {
              (this.imageState_ === xt.LOADED ||
                this.imageState_ === xt.ERROR) &&
                (this.removeEventListener(pt.CHANGE, i), t());
            };
            this.addEventListener(pt.CHANGE, i);
          }
        })),
      this.ready_
    );
  }
}
function Bd(r, t, i, s, l, o) {
  let c = t === void 0 ? void 0 : Ci.get(t, i, l);
  return (
    c ||
      ((c = new Xp(r, r && "src" in r ? r.src || void 0 : t, i, s, l)),
      Ci.set(t, i, l, c, o)),
    o && c && !Ci.getPattern(t, i, l) && Ci.set(t, i, l, c, o),
    c
  );
}
function tn(r) {
  return r
    ? Array.isArray(r)
      ? Pd(r)
      : typeof r == "object" && "src" in r
        ? bx(r)
        : r
    : null;
}
function bx(r) {
  if (!r.offset || !r.size) return Ci.getPattern(r.src, "anonymous", r.color);
  const t = r.src + ":" + r.offset,
    i = Ci.getPattern(t, void 0, r.color);
  if (i) return i;
  const s = Ci.get(r.src, "anonymous", null);
  if (s.getImageState() !== xt.LOADED) return null;
  const l = pe(r.size[0], r.size[1]);
  return (
    l.drawImage(
      s.getImage(1),
      r.offset[0],
      r.offset[1],
      r.size[0],
      r.size[1],
      0,
      0,
      r.size[0],
      r.size[1],
    ),
    Bd(l.canvas, t, void 0, xt.LOADED, r.color, !0),
    Ci.getPattern(t, void 0, r.color)
  );
}
class Yp {
  drawCustom(t, i, s, l, o) {}
  drawGeometry(t) {}
  setStyle(t) {}
  drawCircle(t, i, s) {}
  drawFeature(t, i, s) {}
  drawGeometryCollection(t, i, s) {}
  drawLineString(t, i, s) {}
  drawMultiLineString(t, i, s) {}
  drawMultiPoint(t, i, s) {}
  drawMultiPolygon(t, i, s) {}
  drawPoint(t, i, s) {}
  drawPolygon(t, i, s) {}
  drawText(t, i, s) {}
  setFillStrokeStyle(t, i) {}
  setImageStyle(t, i) {}
  setTextStyle(t, i) {}
}
const yu = "ol-hidden",
  Ax = "ol-selectable",
  rc = "ol-unselectable",
  Hd = "ol-control",
  yy = "ol-collapsed",
  wx = new RegExp(
    [
      "^\\s*(?=(?:(?:[-a-z]+\\s*){0,2}(italic|oblique))?)",
      "(?=(?:(?:[-a-z]+\\s*){0,2}(small-caps))?)",
      "(?=(?:(?:[-a-z]+\\s*){0,2}(bold(?:er)?|lighter|[1-9]00 ))?)",
      "(?:(?:normal|\\1|\\2|\\3)\\s*){0,3}((?:xx?-)?",
      "(?:small|large)|medium|smaller|larger|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx]))",
      "(?:\\s*\\/\\s*(normal|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx])?))",
      `?\\s*([-,\\"\\'\\sa-z]+?)\\s*$`,
    ].join(""),
    "i",
  ),
  py = ["style", "variant", "weight", "size", "lineHeight", "family"],
  kp = function (r) {
    const t = r.match(wx);
    if (!t) return null;
    const i = {
      lineHeight: "normal",
      size: "1.2em",
      style: "normal",
      weight: "normal",
      variant: "normal",
    };
    for (let s = 0, l = py.length; s < l; ++s) {
      const o = t[s + 1];
      o !== void 0 && (i[py[s]] = o);
    }
    return (i.families = i.family.split(/,\s?/)), i;
  },
  Pp = "10px sans-serif",
  Ze = "#000",
  pl = "round",
  On = [],
  Dn = 0,
  vl = "round",
  Ya = 10,
  ka = "#000",
  Pa = "center",
  Nu = "middle",
  $s = [0, 0, 0, 0],
  Ba = 1,
  bn = new Xi();
let $r = null,
  ud;
const cd = {},
  Mx = (function () {
    const t = "32px ",
      i = ["monospace", "serif"],
      s = i.length,
      l = "wmytzilWMYTZIL@#/&?$%10";
    let o, c;
    function h(_, m, y) {
      let v = !0;
      for (let E = 0; E < s; ++E) {
        const x = i[E];
        if (((c = Gu(_ + " " + m + " " + t + x, l)), y != x)) {
          const b = Gu(_ + " " + m + " " + t + y + "," + x, l);
          v = v && b != c;
        }
      }
      return !!v;
    }
    function d() {
      let _ = !0;
      const m = bn.getKeys();
      for (let y = 0, v = m.length; y < v; ++y) {
        const E = m[y];
        if (bn.get(E) < 100) {
          const [x, b, R] = E.split(`
`);
          h(x, b, R)
            ? (Za(cd), ($r = null), (ud = void 0), bn.set(E, 100))
            : (bn.set(E, bn.get(E) + 1, !0), (_ = !1));
        }
      }
      _ && (clearInterval(o), (o = void 0));
    }
    return function (_) {
      const m = kp(_);
      if (!m) return;
      const y = m.families;
      for (let v = 0, E = y.length; v < E; ++v) {
        const x = y[v],
          b =
            m.style +
            `
` +
            m.weight +
            `
` +
            x;
        bn.get(b) === void 0 &&
          (bn.set(b, 100, !0),
          h(m.style, m.weight, x) ||
            (bn.set(b, 0, !0), o === void 0 && (o = setInterval(d, 32))));
      }
    };
  })(),
  Ox = (function () {
    let r;
    return function (t) {
      let i = cd[t];
      if (i == null) {
        if (zp) {
          const s = kp(t),
            l = Bp(t, "Žg");
          i =
            (isNaN(Number(s.lineHeight)) ? 1.2 : Number(s.lineHeight)) *
            (l.actualBoundingBoxAscent + l.actualBoundingBoxDescent);
        } else
          r ||
            ((r = document.createElement("div")),
            (r.innerHTML = "M"),
            (r.style.minHeight = "0"),
            (r.style.maxHeight = "none"),
            (r.style.height = "auto"),
            (r.style.padding = "0"),
            (r.style.border = "none"),
            (r.style.position = "absolute"),
            (r.style.display = "block"),
            (r.style.left = "-99999px")),
            (r.style.font = t),
            document.body.appendChild(r),
            (i = r.offsetHeight),
            document.body.removeChild(r);
        cd[t] = i;
      }
      return i;
    };
  })();
function Bp(r, t) {
  return (
    $r || ($r = pe(1, 1)),
    r != ud && (($r.font = r), (ud = $r.font)),
    $r.measureText(t)
  );
}
function Gu(r, t) {
  return Bp(r, t).width;
}
function vy(r, t, i) {
  if (t in i) return i[t];
  const s = t
    .split(
      `
`,
    )
    .reduce((l, o) => Math.max(l, Gu(r, o)), 0);
  return (i[t] = s), s;
}
function Dx(r, t) {
  const i = [],
    s = [],
    l = [];
  let o = 0,
    c = 0,
    h = 0,
    d = 0;
  for (let _ = 0, m = t.length; _ <= m; _ += 2) {
    const y = t[_];
    if (
      y ===
        `
` ||
      _ === m
    ) {
      (o = Math.max(o, c)), l.push(c), (c = 0), (h += d), (d = 0);
      continue;
    }
    const v = t[_ + 1] || r.font,
      E = Gu(v, y);
    i.push(E), (c += E);
    const x = Ox(v);
    s.push(x), (d = Math.max(d, x));
  }
  return { width: o, height: h, widths: i, heights: s, lineWidths: l };
}
function Lx(r, t, i, s, l, o, c, h, d, _, m) {
  r.save(),
    i !== 1 &&
      (r.globalAlpha === void 0
        ? (r.globalAlpha = (y) => (y.globalAlpha *= i))
        : (r.globalAlpha *= i)),
    t && r.transform.apply(r, t),
    s.contextInstructions
      ? (r.translate(d, _), r.scale(m[0], m[1]), zx(s, r))
      : m[0] < 0 || m[1] < 0
        ? (r.translate(d, _),
          r.scale(m[0], m[1]),
          r.drawImage(s, l, o, c, h, 0, 0, c, h))
        : r.drawImage(s, l, o, c, h, d, _, c * m[0], h * m[1]),
    r.restore();
}
function zx(r, t) {
  const i = r.contextInstructions;
  for (let s = 0, l = i.length; s < l; s += 2)
    Array.isArray(i[s + 1]) ? t[i[s]].apply(t, i[s + 1]) : (t[i[s]] = i[s + 1]);
}
class Ix extends Yp {
  constructor(t, i, s, l, o, c, h) {
    super(),
      (this.context_ = t),
      (this.pixelRatio_ = i),
      (this.extent_ = s),
      (this.transform_ = l),
      (this.transformRotation_ = l ? xd(Math.atan2(l[1], l[0]), 10) : 0),
      (this.viewRotation_ = o),
      (this.squaredTolerance_ = c),
      (this.userTransform_ = h),
      (this.contextFillState_ = null),
      (this.contextStrokeState_ = null),
      (this.contextTextState_ = null),
      (this.fillState_ = null),
      (this.strokeState_ = null),
      (this.image_ = null),
      (this.imageAnchorX_ = 0),
      (this.imageAnchorY_ = 0),
      (this.imageHeight_ = 0),
      (this.imageOpacity_ = 0),
      (this.imageOriginX_ = 0),
      (this.imageOriginY_ = 0),
      (this.imageRotateWithView_ = !1),
      (this.imageRotation_ = 0),
      (this.imageScale_ = [0, 0]),
      (this.imageWidth_ = 0),
      (this.text_ = ""),
      (this.textOffsetX_ = 0),
      (this.textOffsetY_ = 0),
      (this.textRotateWithView_ = !1),
      (this.textRotation_ = 0),
      (this.textScale_ = [0, 0]),
      (this.textFillState_ = null),
      (this.textStrokeState_ = null),
      (this.textState_ = null),
      (this.pixelCoordinates_ = []),
      (this.tmpLocalTransform_ = Fi());
  }
  drawImages_(t, i, s, l) {
    if (!this.image_) return;
    const o = _s(t, i, s, l, this.transform_, this.pixelCoordinates_),
      c = this.context_,
      h = this.tmpLocalTransform_,
      d = c.globalAlpha;
    this.imageOpacity_ != 1 && (c.globalAlpha = d * this.imageOpacity_);
    let _ = this.imageRotation_;
    this.transformRotation_ === 0 && (_ -= this.viewRotation_),
      this.imageRotateWithView_ && (_ += this.viewRotation_);
    for (let m = 0, y = o.length; m < y; m += 2) {
      const v = o[m] - this.imageAnchorX_,
        E = o[m + 1] - this.imageAnchorY_;
      if (_ !== 0 || this.imageScale_[0] != 1 || this.imageScale_[1] != 1) {
        const x = v + this.imageAnchorX_,
          b = E + this.imageAnchorY_;
        zn(h, x, b, 1, 1, _, -x, -b),
          c.save(),
          c.transform.apply(c, h),
          c.translate(x, b),
          c.scale(this.imageScale_[0], this.imageScale_[1]),
          c.drawImage(
            this.image_,
            this.imageOriginX_,
            this.imageOriginY_,
            this.imageWidth_,
            this.imageHeight_,
            -this.imageAnchorX_,
            -this.imageAnchorY_,
            this.imageWidth_,
            this.imageHeight_,
          ),
          c.restore();
      } else
        c.drawImage(
          this.image_,
          this.imageOriginX_,
          this.imageOriginY_,
          this.imageWidth_,
          this.imageHeight_,
          v,
          E,
          this.imageWidth_,
          this.imageHeight_,
        );
    }
    this.imageOpacity_ != 1 && (c.globalAlpha = d);
  }
  drawText_(t, i, s, l) {
    if (!this.textState_ || this.text_ === "") return;
    this.textFillState_ && this.setContextFillState_(this.textFillState_),
      this.textStrokeState_ &&
        this.setContextStrokeState_(this.textStrokeState_),
      this.setContextTextState_(this.textState_);
    const o = _s(t, i, s, l, this.transform_, this.pixelCoordinates_),
      c = this.context_;
    let h = this.textRotation_;
    for (
      this.transformRotation_ === 0 && (h -= this.viewRotation_),
        this.textRotateWithView_ && (h += this.viewRotation_);
      i < s;
      i += l
    ) {
      const d = o[i] + this.textOffsetX_,
        _ = o[i + 1] + this.textOffsetY_;
      h !== 0 || this.textScale_[0] != 1 || this.textScale_[1] != 1
        ? (c.save(),
          c.translate(d - this.textOffsetX_, _ - this.textOffsetY_),
          c.rotate(h),
          c.translate(this.textOffsetX_, this.textOffsetY_),
          c.scale(this.textScale_[0], this.textScale_[1]),
          this.textStrokeState_ && c.strokeText(this.text_, 0, 0),
          this.textFillState_ && c.fillText(this.text_, 0, 0),
          c.restore())
        : (this.textStrokeState_ && c.strokeText(this.text_, d, _),
          this.textFillState_ && c.fillText(this.text_, d, _));
    }
  }
  moveToLineTo_(t, i, s, l, o) {
    const c = this.context_,
      h = _s(t, i, s, l, this.transform_, this.pixelCoordinates_);
    c.moveTo(h[0], h[1]);
    let d = h.length;
    o && (d -= 2);
    for (let _ = 2; _ < d; _ += 2) c.lineTo(h[_], h[_ + 1]);
    return o && c.closePath(), s;
  }
  drawRings_(t, i, s, l) {
    for (let o = 0, c = s.length; o < c; ++o)
      i = this.moveToLineTo_(t, i, s[o], l, !0);
    return i;
  }
  drawCircle(t) {
    if (
      (this.squaredTolerance_ &&
        (t = t.simplifyTransformed(
          this.squaredTolerance_,
          this.userTransform_,
        )),
      !!qe(this.extent_, t.getExtent()))
    ) {
      if (this.fillState_ || this.strokeState_) {
        this.fillState_ && this.setContextFillState_(this.fillState_),
          this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
        const i = WS(t, this.transform_, this.pixelCoordinates_),
          s = i[2] - i[0],
          l = i[3] - i[1],
          o = Math.sqrt(s * s + l * l),
          c = this.context_;
        c.beginPath(),
          c.arc(i[0], i[1], o, 0, 2 * Math.PI),
          this.fillState_ && c.fill(),
          this.strokeState_ && c.stroke();
      }
      this.text_ !== "" && this.drawText_(t.getCenter(), 0, 2, 2);
    }
  }
  setStyle(t) {
    this.setFillStrokeStyle(t.getFill(), t.getStroke()),
      this.setImageStyle(t.getImage()),
      this.setTextStyle(t.getText());
  }
  setTransform(t) {
    this.transform_ = t;
  }
  drawGeometry(t) {
    switch (t.getType()) {
      case "Point":
        this.drawPoint(t);
        break;
      case "LineString":
        this.drawLineString(t);
        break;
      case "Polygon":
        this.drawPolygon(t);
        break;
      case "MultiPoint":
        this.drawMultiPoint(t);
        break;
      case "MultiLineString":
        this.drawMultiLineString(t);
        break;
      case "MultiPolygon":
        this.drawMultiPolygon(t);
        break;
      case "GeometryCollection":
        this.drawGeometryCollection(t);
        break;
      case "Circle":
        this.drawCircle(t);
        break;
    }
  }
  drawFeature(t, i) {
    const s = i.getGeometryFunction()(t);
    s && (this.setStyle(i), this.drawGeometry(s));
  }
  drawGeometryCollection(t) {
    const i = t.getGeometriesArray();
    for (let s = 0, l = i.length; s < l; ++s) this.drawGeometry(i[s]);
  }
  drawPoint(t) {
    this.squaredTolerance_ &&
      (t = t.simplifyTransformed(this.squaredTolerance_, this.userTransform_));
    const i = t.getFlatCoordinates(),
      s = t.getStride();
    this.image_ && this.drawImages_(i, 0, i.length, s),
      this.text_ !== "" && this.drawText_(i, 0, i.length, s);
  }
  drawMultiPoint(t) {
    this.squaredTolerance_ &&
      (t = t.simplifyTransformed(this.squaredTolerance_, this.userTransform_));
    const i = t.getFlatCoordinates(),
      s = t.getStride();
    this.image_ && this.drawImages_(i, 0, i.length, s),
      this.text_ !== "" && this.drawText_(i, 0, i.length, s);
  }
  drawLineString(t) {
    if (
      (this.squaredTolerance_ &&
        (t = t.simplifyTransformed(
          this.squaredTolerance_,
          this.userTransform_,
        )),
      !!qe(this.extent_, t.getExtent()))
    ) {
      if (this.strokeState_) {
        this.setContextStrokeState_(this.strokeState_);
        const i = this.context_,
          s = t.getFlatCoordinates();
        i.beginPath(),
          this.moveToLineTo_(s, 0, s.length, t.getStride(), !1),
          i.stroke();
      }
      if (this.text_ !== "") {
        const i = t.getFlatMidpoint();
        this.drawText_(i, 0, 2, 2);
      }
    }
  }
  drawMultiLineString(t) {
    this.squaredTolerance_ &&
      (t = t.simplifyTransformed(this.squaredTolerance_, this.userTransform_));
    const i = t.getExtent();
    if (qe(this.extent_, i)) {
      if (this.strokeState_) {
        this.setContextStrokeState_(this.strokeState_);
        const s = this.context_,
          l = t.getFlatCoordinates();
        let o = 0;
        const c = t.getEnds(),
          h = t.getStride();
        s.beginPath();
        for (let d = 0, _ = c.length; d < _; ++d)
          o = this.moveToLineTo_(l, o, c[d], h, !1);
        s.stroke();
      }
      if (this.text_ !== "") {
        const s = t.getFlatMidpoints();
        this.drawText_(s, 0, s.length, 2);
      }
    }
  }
  drawPolygon(t) {
    if (
      (this.squaredTolerance_ &&
        (t = t.simplifyTransformed(
          this.squaredTolerance_,
          this.userTransform_,
        )),
      !!qe(this.extent_, t.getExtent()))
    ) {
      if (this.strokeState_ || this.fillState_) {
        this.fillState_ && this.setContextFillState_(this.fillState_),
          this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
        const i = this.context_;
        i.beginPath(),
          this.drawRings_(
            t.getOrientedFlatCoordinates(),
            0,
            t.getEnds(),
            t.getStride(),
          ),
          this.fillState_ && i.fill(),
          this.strokeState_ && i.stroke();
      }
      if (this.text_ !== "") {
        const i = t.getFlatInteriorPoint();
        this.drawText_(i, 0, 2, 2);
      }
    }
  }
  drawMultiPolygon(t) {
    if (
      (this.squaredTolerance_ &&
        (t = t.simplifyTransformed(
          this.squaredTolerance_,
          this.userTransform_,
        )),
      !!qe(this.extent_, t.getExtent()))
    ) {
      if (this.strokeState_ || this.fillState_) {
        this.fillState_ && this.setContextFillState_(this.fillState_),
          this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
        const i = this.context_,
          s = t.getOrientedFlatCoordinates();
        let l = 0;
        const o = t.getEndss(),
          c = t.getStride();
        i.beginPath();
        for (let h = 0, d = o.length; h < d; ++h) {
          const _ = o[h];
          l = this.drawRings_(s, l, _, c);
        }
        this.fillState_ && i.fill(), this.strokeState_ && i.stroke();
      }
      if (this.text_ !== "") {
        const i = t.getFlatInteriorPoints();
        this.drawText_(i, 0, i.length, 2);
      }
    }
  }
  setContextFillState_(t) {
    const i = this.context_,
      s = this.contextFillState_;
    s
      ? s.fillStyle != t.fillStyle &&
        ((s.fillStyle = t.fillStyle), (i.fillStyle = t.fillStyle))
      : ((i.fillStyle = t.fillStyle),
        (this.contextFillState_ = { fillStyle: t.fillStyle }));
  }
  setContextStrokeState_(t) {
    const i = this.context_,
      s = this.contextStrokeState_;
    s
      ? (s.lineCap != t.lineCap &&
          ((s.lineCap = t.lineCap), (i.lineCap = t.lineCap)),
        Es(s.lineDash, t.lineDash) || i.setLineDash((s.lineDash = t.lineDash)),
        s.lineDashOffset != t.lineDashOffset &&
          ((s.lineDashOffset = t.lineDashOffset),
          (i.lineDashOffset = t.lineDashOffset)),
        s.lineJoin != t.lineJoin &&
          ((s.lineJoin = t.lineJoin), (i.lineJoin = t.lineJoin)),
        s.lineWidth != t.lineWidth &&
          ((s.lineWidth = t.lineWidth), (i.lineWidth = t.lineWidth)),
        s.miterLimit != t.miterLimit &&
          ((s.miterLimit = t.miterLimit), (i.miterLimit = t.miterLimit)),
        s.strokeStyle != t.strokeStyle &&
          ((s.strokeStyle = t.strokeStyle), (i.strokeStyle = t.strokeStyle)))
      : ((i.lineCap = t.lineCap),
        i.setLineDash(t.lineDash),
        (i.lineDashOffset = t.lineDashOffset),
        (i.lineJoin = t.lineJoin),
        (i.lineWidth = t.lineWidth),
        (i.miterLimit = t.miterLimit),
        (i.strokeStyle = t.strokeStyle),
        (this.contextStrokeState_ = {
          lineCap: t.lineCap,
          lineDash: t.lineDash,
          lineDashOffset: t.lineDashOffset,
          lineJoin: t.lineJoin,
          lineWidth: t.lineWidth,
          miterLimit: t.miterLimit,
          strokeStyle: t.strokeStyle,
        }));
  }
  setContextTextState_(t) {
    const i = this.context_,
      s = this.contextTextState_,
      l = t.textAlign ? t.textAlign : Pa;
    s
      ? (s.font != t.font && ((s.font = t.font), (i.font = t.font)),
        s.textAlign != l && ((s.textAlign = l), (i.textAlign = l)),
        s.textBaseline != t.textBaseline &&
          ((s.textBaseline = t.textBaseline),
          (i.textBaseline = t.textBaseline)))
      : ((i.font = t.font),
        (i.textAlign = l),
        (i.textBaseline = t.textBaseline),
        (this.contextTextState_ = {
          font: t.font,
          textAlign: l,
          textBaseline: t.textBaseline,
        }));
  }
  setFillStrokeStyle(t, i) {
    if (!t) this.fillState_ = null;
    else {
      const s = t.getColor();
      this.fillState_ = { fillStyle: tn(s || Ze) };
    }
    if (!i) this.strokeState_ = null;
    else {
      const s = i.getColor(),
        l = i.getLineCap(),
        o = i.getLineDash(),
        c = i.getLineDashOffset(),
        h = i.getLineJoin(),
        d = i.getWidth(),
        _ = i.getMiterLimit(),
        m = o || On;
      this.strokeState_ = {
        lineCap: l !== void 0 ? l : pl,
        lineDash:
          this.pixelRatio_ === 1 ? m : m.map((y) => y * this.pixelRatio_),
        lineDashOffset: (c || Dn) * this.pixelRatio_,
        lineJoin: h !== void 0 ? h : vl,
        lineWidth: (d !== void 0 ? d : Ba) * this.pixelRatio_,
        miterLimit: _ !== void 0 ? _ : Ya,
        strokeStyle: tn(s || ka),
      };
    }
  }
  setImageStyle(t) {
    let i;
    if (!t || !(i = t.getSize())) {
      this.image_ = null;
      return;
    }
    const s = t.getPixelRatio(this.pixelRatio_),
      l = t.getAnchor(),
      o = t.getOrigin();
    (this.image_ = t.getImage(this.pixelRatio_)),
      (this.imageAnchorX_ = l[0] * s),
      (this.imageAnchorY_ = l[1] * s),
      (this.imageHeight_ = i[1] * s),
      (this.imageOpacity_ = t.getOpacity()),
      (this.imageOriginX_ = o[0]),
      (this.imageOriginY_ = o[1]),
      (this.imageRotateWithView_ = t.getRotateWithView()),
      (this.imageRotation_ = t.getRotation());
    const c = t.getScaleArray();
    (this.imageScale_ = [
      (c[0] * this.pixelRatio_) / s,
      (c[1] * this.pixelRatio_) / s,
    ]),
      (this.imageWidth_ = i[0] * s);
  }
  setTextStyle(t) {
    if (!t) this.text_ = "";
    else {
      const i = t.getFill();
      if (!i) this.textFillState_ = null;
      else {
        const E = i.getColor();
        this.textFillState_ = { fillStyle: tn(E || Ze) };
      }
      const s = t.getStroke();
      if (!s) this.textStrokeState_ = null;
      else {
        const E = s.getColor(),
          x = s.getLineCap(),
          b = s.getLineDash(),
          R = s.getLineDashOffset(),
          A = s.getLineJoin(),
          O = s.getWidth(),
          G = s.getMiterLimit();
        this.textStrokeState_ = {
          lineCap: x !== void 0 ? x : pl,
          lineDash: b || On,
          lineDashOffset: R || Dn,
          lineJoin: A !== void 0 ? A : vl,
          lineWidth: O !== void 0 ? O : Ba,
          miterLimit: G !== void 0 ? G : Ya,
          strokeStyle: tn(E || ka),
        };
      }
      const l = t.getFont(),
        o = t.getOffsetX(),
        c = t.getOffsetY(),
        h = t.getRotateWithView(),
        d = t.getRotation(),
        _ = t.getScaleArray(),
        m = t.getText(),
        y = t.getTextAlign(),
        v = t.getTextBaseline();
      (this.textState_ = {
        font: l !== void 0 ? l : Pp,
        textAlign: y !== void 0 ? y : Pa,
        textBaseline: v !== void 0 ? v : Nu,
      }),
        (this.text_ =
          m !== void 0
            ? Array.isArray(m)
              ? m.reduce((E, x, b) => (E += b % 2 ? " " : x), "")
              : m
            : ""),
        (this.textOffsetX_ = o !== void 0 ? this.pixelRatio_ * o : 0),
        (this.textOffsetY_ = c !== void 0 ? this.pixelRatio_ * c : 0),
        (this.textRotateWithView_ = h !== void 0 ? h : !1),
        (this.textRotation_ = d !== void 0 ? d : 0),
        (this.textScale_ = [this.pixelRatio_ * _[0], this.pixelRatio_ * _[1]]);
    }
  }
}
const Nx = 0.5,
  Hp = {
    Point: Bx,
    LineString: Yx,
    Polygon: jx,
    MultiPoint: Hx,
    MultiLineString: kx,
    MultiPolygon: Px,
    GeometryCollection: Xx,
    Circle: Fx,
  };
function Gx(r, t) {
  return parseInt(It(r), 10) - parseInt(It(t), 10);
}
function Ey(r, t) {
  const i = jp(r, t);
  return i * i;
}
function jp(r, t) {
  return (Nx * r) / t;
}
function Fx(r, t, i, s, l) {
  const o = i.getFill(),
    c = i.getStroke();
  if (o || c) {
    const d = r.getBuilder(i.getZIndex(), "Circle");
    d.setFillStrokeStyle(o, c), d.drawCircle(t, s, l);
  }
  const h = i.getText();
  if (h && h.getText()) {
    const d = r.getBuilder(i.getZIndex(), "Text");
    d.setTextStyle(h), d.drawText(t, s);
  }
}
function Sy(r, t, i, s, l, o, c, h) {
  const d = [],
    _ = i.getImage();
  if (_) {
    let v = !0;
    const E = _.getImageState();
    E == xt.LOADED || E == xt.ERROR ? (v = !1) : E == xt.IDLE && _.load(),
      v && d.push(_.ready());
  }
  const m = i.getFill();
  m && m.loading() && d.push(m.ready());
  const y = d.length > 0;
  return y && Promise.all(d).then(() => l(null)), Ux(r, t, i, s, o, c, h), y;
}
function Ux(r, t, i, s, l, o, c) {
  const h = i.getGeometryFunction()(t);
  if (!h) return;
  const d = h.simplifyTransformed(s, l);
  if (i.getRenderer()) Zp(r, d, i, t, c);
  else {
    const m = Hp[d.getType()];
    m(r, d, i, t, c, o);
  }
}
function Zp(r, t, i, s, l) {
  if (t.getType() == "GeometryCollection") {
    const c = t.getGeometries();
    for (let h = 0, d = c.length; h < d; ++h) Zp(r, c[h], i, s, l);
    return;
  }
  r.getBuilder(i.getZIndex(), "Default").drawCustom(
    t,
    s,
    i.getRenderer(),
    i.getHitDetectionRenderer(),
    l,
  );
}
function Xx(r, t, i, s, l, o) {
  const c = t.getGeometriesArray();
  let h, d;
  for (h = 0, d = c.length; h < d; ++h) {
    const _ = Hp[c[h].getType()];
    _(r, c[h], i, s, l, o);
  }
}
function Yx(r, t, i, s, l) {
  const o = i.getStroke();
  if (o) {
    const h = r.getBuilder(i.getZIndex(), "LineString");
    h.setFillStrokeStyle(null, o), h.drawLineString(t, s, l);
  }
  const c = i.getText();
  if (c && c.getText()) {
    const h = r.getBuilder(i.getZIndex(), "Text");
    h.setTextStyle(c), h.drawText(t, s, l);
  }
}
function kx(r, t, i, s, l) {
  const o = i.getStroke();
  if (o) {
    const h = r.getBuilder(i.getZIndex(), "LineString");
    h.setFillStrokeStyle(null, o), h.drawMultiLineString(t, s, l);
  }
  const c = i.getText();
  if (c && c.getText()) {
    const h = r.getBuilder(i.getZIndex(), "Text");
    h.setTextStyle(c), h.drawText(t, s, l);
  }
}
function Px(r, t, i, s, l) {
  const o = i.getFill(),
    c = i.getStroke();
  if (c || o) {
    const d = r.getBuilder(i.getZIndex(), "Polygon");
    d.setFillStrokeStyle(o, c), d.drawMultiPolygon(t, s, l);
  }
  const h = i.getText();
  if (h && h.getText()) {
    const d = r.getBuilder(i.getZIndex(), "Text");
    d.setTextStyle(h), d.drawText(t, s, l);
  }
}
function Bx(r, t, i, s, l, o) {
  const c = i.getImage(),
    h = i.getText(),
    d = h && h.getText(),
    _ = o && c && d ? {} : void 0;
  if (c) {
    if (c.getImageState() != xt.LOADED) return;
    const m = r.getBuilder(i.getZIndex(), "Image");
    m.setImageStyle(c, _), m.drawPoint(t, s, l);
  }
  if (d) {
    const m = r.getBuilder(i.getZIndex(), "Text");
    m.setTextStyle(h, _), m.drawText(t, s, l);
  }
}
function Hx(r, t, i, s, l, o) {
  const c = i.getImage(),
    h = c && c.getOpacity() !== 0,
    d = i.getText(),
    _ = d && d.getText(),
    m = o && h && _ ? {} : void 0;
  if (h) {
    if (c.getImageState() != xt.LOADED) return;
    const y = r.getBuilder(i.getZIndex(), "Image");
    y.setImageStyle(c, m), y.drawMultiPoint(t, s, l);
  }
  if (_) {
    const y = r.getBuilder(i.getZIndex(), "Text");
    y.setTextStyle(d, m), y.drawText(t, s, l);
  }
}
function jx(r, t, i, s, l) {
  const o = i.getFill(),
    c = i.getStroke();
  if (o || c) {
    const d = r.getBuilder(i.getZIndex(), "Polygon");
    d.setFillStrokeStyle(o, c), d.drawPolygon(t, s, l);
  }
  const h = i.getText();
  if (h && h.getText()) {
    const d = r.getBuilder(i.getZIndex(), "Text");
    d.setTextStyle(h), d.drawText(t, s, l);
  }
}
let Zx = !1;
function Kx(r, t, i, s, l, o, c) {
  const h = new XMLHttpRequest();
  h.open("GET", typeof r == "function" ? r(i, s, l) : r, !0),
    t.getType() == "arraybuffer" && (h.responseType = "arraybuffer"),
    (h.withCredentials = Zx),
    (h.onload = function (d) {
      if (!h.status || (h.status >= 200 && h.status < 300)) {
        const _ = t.getType();
        try {
          let m;
          _ == "text" || _ == "json"
            ? (m = h.responseText)
            : _ == "xml"
              ? (m = h.responseXML || h.responseText)
              : _ == "arraybuffer" && (m = h.response),
            m
              ? o(
                  t.readFeatures(m, { extent: i, featureProjection: l }),
                  t.readProjection(m),
                )
              : c();
        } catch {
          c();
        }
      } else c();
    }),
    (h.onerror = c),
    h.send();
}
function xy(r, t) {
  return function (i, s, l, o, c) {
    Kx(
      r,
      t,
      i,
      s,
      l,
      (h, d) => {
        this.addFeatures(h), o !== void 0 && o(h);
      },
      c || hl,
    );
  };
}
function qx(r, t) {
  return [[-1 / 0, -1 / 0, 1 / 0, 1 / 0]];
}
function Kp(r, t, i, s) {
  const l = [];
  let o = Ri();
  for (let c = 0, h = i.length; c < h; ++c) {
    const d = i[c];
    (o = Sd(r, t, d[0], s)),
      l.push((o[0] + o[2]) / 2, (o[1] + o[3]) / 2),
      (t = d[d.length - 1]);
  }
  return l;
}
class Fu extends Ep {
  constructor(t) {
    super(),
      (this.geometries_ = t),
      (this.changeEventsKeys_ = []),
      this.listenGeometriesChange_();
  }
  unlistenGeometriesChange_() {
    this.changeEventsKeys_.forEach(jt), (this.changeEventsKeys_.length = 0);
  }
  listenGeometriesChange_() {
    const t = this.geometries_;
    for (let i = 0, s = t.length; i < s; ++i)
      this.changeEventsKeys_.push(Mt(t[i], pt.CHANGE, this.changed, this));
  }
  clone() {
    const t = new Fu(zf(this.geometries_));
    return t.applyProperties(this), t;
  }
  closestPointXY(t, i, s, l) {
    if (l < rr(this.getExtent(), t, i)) return l;
    const o = this.geometries_;
    for (let c = 0, h = o.length; c < h; ++c)
      l = o[c].closestPointXY(t, i, s, l);
    return l;
  }
  containsXY(t, i) {
    const s = this.geometries_;
    for (let l = 0, o = s.length; l < o; ++l)
      if (s[l].containsXY(t, i)) return !0;
    return !1;
  }
  computeExtent(t) {
    Sl(t);
    const i = this.geometries_;
    for (let s = 0, l = i.length; s < l; ++s) sp(t, i[s].getExtent());
    return t;
  }
  getGeometries() {
    return zf(this.geometries_);
  }
  getGeometriesArray() {
    return this.geometries_;
  }
  getGeometriesArrayRecursive() {
    let t = [];
    const i = this.geometries_;
    for (let s = 0, l = i.length; s < l; ++s)
      i[s].getType() === this.getType()
        ? (t = t.concat(i[s].getGeometriesArrayRecursive()))
        : t.push(i[s]);
    return t;
  }
  getSimplifiedGeometry(t) {
    if (
      (this.simplifiedGeometryRevision !== this.getRevision() &&
        ((this.simplifiedGeometryMaxMinSquaredTolerance = 0),
        (this.simplifiedGeometryRevision = this.getRevision())),
      t < 0 ||
        (this.simplifiedGeometryMaxMinSquaredTolerance !== 0 &&
          t < this.simplifiedGeometryMaxMinSquaredTolerance))
    )
      return this;
    const i = [],
      s = this.geometries_;
    let l = !1;
    for (let o = 0, c = s.length; o < c; ++o) {
      const h = s[o],
        d = h.getSimplifiedGeometry(t);
      i.push(d), d !== h && (l = !0);
    }
    return l
      ? new Fu(i)
      : ((this.simplifiedGeometryMaxMinSquaredTolerance = t), this);
  }
  getType() {
    return "GeometryCollection";
  }
  intersectsExtent(t) {
    const i = this.geometries_;
    for (let s = 0, l = i.length; s < l; ++s)
      if (i[s].intersectsExtent(t)) return !0;
    return !1;
  }
  isEmpty() {
    return this.geometries_.length === 0;
  }
  rotate(t, i) {
    const s = this.geometries_;
    for (let l = 0, o = s.length; l < o; ++l) s[l].rotate(t, i);
    this.changed();
  }
  scale(t, i, s) {
    s || (s = ys(this.getExtent()));
    const l = this.geometries_;
    for (let o = 0, c = l.length; o < c; ++o) l[o].scale(t, i, s);
    this.changed();
  }
  setGeometries(t) {
    this.setGeometriesArray(zf(t));
  }
  setGeometriesArray(t) {
    this.unlistenGeometriesChange_(),
      (this.geometries_ = t),
      this.listenGeometriesChange_(),
      this.changed();
  }
  applyTransform(t) {
    const i = this.geometries_;
    for (let s = 0, l = i.length; s < l; ++s) i[s].applyTransform(t);
    this.changed();
  }
  translate(t, i) {
    const s = this.geometries_;
    for (let l = 0, o = s.length; l < o; ++l) s[l].translate(t, i);
    this.changed();
  }
  disposeInternal() {
    this.unlistenGeometriesChange_(), super.disposeInternal();
  }
}
function zf(r) {
  return r.map((t) => t.clone());
}
class Uu extends ar {
  constructor(t, i, s) {
    if (
      (super(),
      (this.ends_ = []),
      (this.maxDelta_ = -1),
      (this.maxDeltaRevision_ = -1),
      Array.isArray(t[0]))
    )
      this.setCoordinates(t, i);
    else if (i !== void 0 && s) this.setFlatCoordinates(i, t), (this.ends_ = s);
    else {
      const l = t,
        o = [],
        c = [];
      for (let d = 0, _ = l.length; d < _; ++d) {
        const m = l[d];
        en(o, m.getFlatCoordinates()), c.push(o.length);
      }
      const h = l.length === 0 ? this.getLayout() : l[0].getLayout();
      this.setFlatCoordinates(h, o), (this.ends_ = c);
    }
  }
  appendLineString(t) {
    en(this.flatCoordinates, t.getFlatCoordinates().slice()),
      this.ends_.push(this.flatCoordinates.length),
      this.changed();
  }
  clone() {
    const t = new Uu(
      this.flatCoordinates.slice(),
      this.layout,
      this.ends_.slice(),
    );
    return t.applyProperties(this), t;
  }
  closestPointXY(t, i, s, l) {
    return l < rr(this.getExtent(), t, i)
      ? l
      : (this.maxDeltaRevision_ != this.getRevision() &&
          ((this.maxDelta_ = Math.sqrt(
            Dd(this.flatCoordinates, 0, this.ends_, this.stride, 0),
          )),
          (this.maxDeltaRevision_ = this.getRevision())),
        zd(
          this.flatCoordinates,
          0,
          this.ends_,
          this.stride,
          this.maxDelta_,
          !1,
          t,
          i,
          s,
          l,
        ));
  }
  getCoordinateAtM(t, i, s) {
    return (this.layout != "XYM" && this.layout != "XYZM") ||
      this.flatCoordinates.length === 0
      ? null
      : ((i = i !== void 0 ? i : !1),
        (s = s !== void 0 ? s : !1),
        ux(this.flatCoordinates, 0, this.ends_, this.stride, t, i, s));
  }
  getCoordinates() {
    return Fa(this.flatCoordinates, 0, this.ends_, this.stride);
  }
  getEnds() {
    return this.ends_;
  }
  getLineString(t) {
    return t < 0 || this.ends_.length <= t
      ? null
      : new ml(
          this.flatCoordinates.slice(
            t === 0 ? 0 : this.ends_[t - 1],
            this.ends_[t],
          ),
          this.layout,
        );
  }
  getLineStrings() {
    const t = this.flatCoordinates,
      i = this.ends_,
      s = this.layout,
      l = [];
    let o = 0;
    for (let c = 0, h = i.length; c < h; ++c) {
      const d = i[c],
        _ = new ml(t.slice(o, d), s);
      l.push(_), (o = d);
    }
    return l;
  }
  getFlatMidpoints() {
    const t = [],
      i = this.flatCoordinates;
    let s = 0;
    const l = this.ends_,
      o = this.stride;
    for (let c = 0, h = l.length; c < h; ++c) {
      const d = l[c],
        _ = zu(i, s, d, o, 0.5);
      en(t, _), (s = d);
    }
    return t;
  }
  getSimplifiedGeometryInternal(t) {
    const i = [],
      s = [];
    return (
      (i.length = Tp(
        this.flatCoordinates,
        0,
        this.ends_,
        this.stride,
        t,
        i,
        0,
        s,
      )),
      new Uu(i, "XY", s)
    );
  }
  getType() {
    return "MultiLineString";
  }
  intersectsExtent(t) {
    return rx(this.flatCoordinates, 0, this.ends_, this.stride, t);
  }
  setCoordinates(t, i) {
    this.setLayout(i, t, 2),
      this.flatCoordinates || (this.flatCoordinates = []);
    const s = Qa(this.flatCoordinates, 0, t, this.stride, this.ends_);
    (this.flatCoordinates.length = s.length === 0 ? 0 : s[s.length - 1]),
      this.changed();
  }
}
class lc extends ar {
  constructor(t, i) {
    super(),
      i && !Array.isArray(t[0])
        ? this.setFlatCoordinates(i, t)
        : this.setCoordinates(t, i);
  }
  appendPoint(t) {
    en(this.flatCoordinates, t.getFlatCoordinates()), this.changed();
  }
  clone() {
    const t = new lc(this.flatCoordinates.slice(), this.layout);
    return t.applyProperties(this), t;
  }
  closestPointXY(t, i, s, l) {
    if (l < rr(this.getExtent(), t, i)) return l;
    const o = this.flatCoordinates,
      c = this.stride;
    for (let h = 0, d = o.length; h < d; h += c) {
      const _ = ir(t, i, o[h], o[h + 1]);
      if (_ < l) {
        l = _;
        for (let m = 0; m < c; ++m) s[m] = o[h + m];
        s.length = c;
      }
    }
    return l;
  }
  getCoordinates() {
    return fs(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
    );
  }
  getPoint(t) {
    const i = this.flatCoordinates.length / this.stride;
    return t < 0 || i <= t
      ? null
      : new _l(
          this.flatCoordinates.slice(t * this.stride, (t + 1) * this.stride),
          this.layout,
        );
  }
  getPoints() {
    const t = this.flatCoordinates,
      i = this.layout,
      s = this.stride,
      l = [];
    for (let o = 0, c = t.length; o < c; o += s) {
      const h = new _l(t.slice(o, o + s), i);
      l.push(h);
    }
    return l;
  }
  getType() {
    return "MultiPoint";
  }
  intersectsExtent(t) {
    const i = this.flatCoordinates,
      s = this.stride;
    for (let l = 0, o = i.length; l < o; l += s) {
      const c = i[l],
        h = i[l + 1];
      if (Ed(t, c, h)) return !0;
    }
    return !1;
  }
  setCoordinates(t, i) {
    this.setLayout(i, t, 1),
      this.flatCoordinates || (this.flatCoordinates = []),
      (this.flatCoordinates.length = ec(
        this.flatCoordinates,
        0,
        t,
        this.stride,
      )),
      this.changed();
  }
}
class Xu extends ar {
  constructor(t, i, s) {
    if (
      (super(),
      (this.endss_ = []),
      (this.flatInteriorPointsRevision_ = -1),
      (this.flatInteriorPoints_ = null),
      (this.maxDelta_ = -1),
      (this.maxDeltaRevision_ = -1),
      (this.orientedRevision_ = -1),
      (this.orientedFlatCoordinates_ = null),
      !s && !Array.isArray(t[0]))
    ) {
      const l = t,
        o = [],
        c = [];
      for (let h = 0, d = l.length; h < d; ++h) {
        const _ = l[h],
          m = o.length,
          y = _.getEnds();
        for (let v = 0, E = y.length; v < E; ++v) y[v] += m;
        en(o, _.getFlatCoordinates()), c.push(y);
      }
      (i = l.length === 0 ? this.getLayout() : l[0].getLayout()),
        (t = o),
        (s = c);
    }
    i !== void 0 && s
      ? (this.setFlatCoordinates(i, t), (this.endss_ = s))
      : this.setCoordinates(t, i);
  }
  appendPolygon(t) {
    let i;
    if (!this.flatCoordinates)
      (this.flatCoordinates = t.getFlatCoordinates().slice()),
        (i = t.getEnds().slice()),
        this.endss_.push();
    else {
      const s = this.flatCoordinates.length;
      en(this.flatCoordinates, t.getFlatCoordinates()),
        (i = t.getEnds().slice());
      for (let l = 0, o = i.length; l < o; ++l) i[l] += s;
    }
    this.endss_.push(i), this.changed();
  }
  clone() {
    const t = this.endss_.length,
      i = new Array(t);
    for (let l = 0; l < t; ++l) i[l] = this.endss_[l].slice();
    const s = new Xu(this.flatCoordinates.slice(), this.layout, i);
    return s.applyProperties(this), s;
  }
  closestPointXY(t, i, s, l) {
    return l < rr(this.getExtent(), t, i)
      ? l
      : (this.maxDeltaRevision_ != this.getRevision() &&
          ((this.maxDelta_ = Math.sqrt(
            JS(this.flatCoordinates, 0, this.endss_, this.stride, 0),
          )),
          (this.maxDeltaRevision_ = this.getRevision())),
        $S(
          this.getOrientedFlatCoordinates(),
          0,
          this.endss_,
          this.stride,
          this.maxDelta_,
          !0,
          t,
          i,
          s,
          l,
        ));
  }
  containsXY(t, i) {
    return sx(
      this.getOrientedFlatCoordinates(),
      0,
      this.endss_,
      this.stride,
      t,
      i,
    );
  }
  getArea() {
    return QS(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride);
  }
  getCoordinates(t) {
    let i;
    return (
      t !== void 0
        ? ((i = this.getOrientedFlatCoordinates().slice()),
          ad(i, 0, this.endss_, this.stride, t))
        : (i = this.flatCoordinates),
      ld(i, 0, this.endss_, this.stride)
    );
  }
  getEndss() {
    return this.endss_;
  }
  getFlatInteriorPoints() {
    if (this.flatInteriorPointsRevision_ != this.getRevision()) {
      const t = Kp(this.flatCoordinates, 0, this.endss_, this.stride);
      (this.flatInteriorPoints_ = Rp(
        this.getOrientedFlatCoordinates(),
        0,
        this.endss_,
        this.stride,
        t,
      )),
        (this.flatInteriorPointsRevision_ = this.getRevision());
    }
    return this.flatInteriorPoints_;
  }
  getInteriorPoints() {
    return new lc(this.getFlatInteriorPoints().slice(), "XYM");
  }
  getOrientedFlatCoordinates() {
    if (this.orientedRevision_ != this.getRevision()) {
      const t = this.flatCoordinates;
      Mp(t, 0, this.endss_, this.stride)
        ? (this.orientedFlatCoordinates_ = t)
        : ((this.orientedFlatCoordinates_ = t.slice()),
          (this.orientedFlatCoordinates_.length = ad(
            this.orientedFlatCoordinates_,
            0,
            this.endss_,
            this.stride,
          ))),
        (this.orientedRevision_ = this.getRevision());
    }
    return this.orientedFlatCoordinates_;
  }
  getSimplifiedGeometryInternal(t) {
    const i = [],
      s = [];
    return (
      (i.length = ix(
        this.flatCoordinates,
        0,
        this.endss_,
        this.stride,
        Math.sqrt(t),
        i,
        0,
        s,
      )),
      new Xu(i, "XY", s)
    );
  }
  getPolygon(t) {
    if (t < 0 || this.endss_.length <= t) return null;
    let i;
    if (t === 0) i = 0;
    else {
      const o = this.endss_[t - 1];
      i = o[o.length - 1];
    }
    const s = this.endss_[t].slice(),
      l = s[s.length - 1];
    if (i !== 0) for (let o = 0, c = s.length; o < c; ++o) s[o] -= i;
    return new ps(this.flatCoordinates.slice(i, l), this.layout, s);
  }
  getPolygons() {
    const t = this.layout,
      i = this.flatCoordinates,
      s = this.endss_,
      l = [];
    let o = 0;
    for (let c = 0, h = s.length; c < h; ++c) {
      const d = s[c].slice(),
        _ = d[d.length - 1];
      if (o !== 0) for (let y = 0, v = d.length; y < v; ++y) d[y] -= o;
      const m = new ps(i.slice(o, _), t, d);
      l.push(m), (o = _);
    }
    return l;
  }
  getType() {
    return "MultiPolygon";
  }
  intersectsExtent(t) {
    return lx(
      this.getOrientedFlatCoordinates(),
      0,
      this.endss_,
      this.stride,
      t,
    );
  }
  setCoordinates(t, i) {
    this.setLayout(i, t, 3),
      this.flatCoordinates || (this.flatCoordinates = []);
    const s = Cp(this.flatCoordinates, 0, t, this.stride, this.endss_);
    if (s.length === 0) this.flatCoordinates.length = 0;
    else {
      const l = s[s.length - 1];
      this.flatCoordinates.length = l.length === 0 ? 0 : l[l.length - 1];
    }
    this.changed();
  }
}
const Cy = Fi();
class li {
  constructor(t, i, s, l, o, c) {
    this.styleFunction,
      this.extent_,
      (this.id_ = c),
      (this.type_ = t),
      (this.flatCoordinates_ = i),
      (this.flatInteriorPoints_ = null),
      (this.flatMidpoints_ = null),
      (this.ends_ = s || null),
      (this.properties_ = o),
      this.squaredTolerance_,
      (this.stride_ = l),
      this.simplifiedGeometry_;
  }
  get(t) {
    return this.properties_[t];
  }
  getExtent() {
    return (
      this.extent_ ||
        (this.extent_ =
          this.type_ === "Point"
            ? np(this.flatCoordinates_)
            : Sd(this.flatCoordinates_, 0, this.flatCoordinates_.length, 2)),
      this.extent_
    );
  }
  getFlatInteriorPoint() {
    if (!this.flatInteriorPoints_) {
      const t = ys(this.getExtent());
      this.flatInteriorPoints_ = Gd(
        this.flatCoordinates_,
        0,
        this.ends_,
        2,
        t,
        0,
      );
    }
    return this.flatInteriorPoints_;
  }
  getFlatInteriorPoints() {
    if (!this.flatInteriorPoints_) {
      const t = ox(this.flatCoordinates_, this.ends_),
        i = Kp(this.flatCoordinates_, 0, t, 2);
      this.flatInteriorPoints_ = Rp(this.flatCoordinates_, 0, t, 2, i);
    }
    return this.flatInteriorPoints_;
  }
  getFlatMidpoint() {
    return (
      this.flatMidpoints_ ||
        (this.flatMidpoints_ = zu(
          this.flatCoordinates_,
          0,
          this.flatCoordinates_.length,
          2,
          0.5,
        )),
      this.flatMidpoints_
    );
  }
  getFlatMidpoints() {
    if (!this.flatMidpoints_) {
      this.flatMidpoints_ = [];
      const t = this.flatCoordinates_;
      let i = 0;
      const s = this.ends_;
      for (let l = 0, o = s.length; l < o; ++l) {
        const c = s[l],
          h = zu(t, i, c, 2, 0.5);
        en(this.flatMidpoints_, h), (i = c);
      }
    }
    return this.flatMidpoints_;
  }
  getId() {
    return this.id_;
  }
  getOrientedFlatCoordinates() {
    return this.flatCoordinates_;
  }
  getGeometry() {
    return this;
  }
  getSimplifiedGeometry(t) {
    return this;
  }
  simplifyTransformed(t, i) {
    return this;
  }
  getProperties() {
    return this.properties_;
  }
  getPropertiesInternal() {
    return this.properties_;
  }
  getStride() {
    return this.stride_;
  }
  getStyleFunction() {
    return this.styleFunction;
  }
  getType() {
    return this.type_;
  }
  transform(t) {
    t = Kt(t);
    const i = t.getExtent(),
      s = t.getWorldExtent();
    if (i && s) {
      const l = Ye(s) / Ye(i);
      zn(Cy, s[0], s[3], l, -l, 0, 0, 0),
        _s(
          this.flatCoordinates_,
          0,
          this.flatCoordinates_.length,
          2,
          Cy,
          this.flatCoordinates_,
        );
    }
  }
  applyTransform(t) {
    t(this.flatCoordinates_, this.flatCoordinates_, this.stride_);
  }
  clone() {
    var t;
    return new li(
      this.type_,
      this.flatCoordinates_.slice(),
      (t = this.ends_) == null ? void 0 : t.slice(),
      this.stride_,
      Object.assign({}, this.properties_),
      this.id_,
    );
  }
  getEnds() {
    return this.ends_;
  }
  enableSimplifyTransformed() {
    return (
      (this.simplifyTransformed = ep((t, i) => {
        if (t === this.squaredTolerance_) return this.simplifiedGeometry_;
        (this.simplifiedGeometry_ = this.clone()),
          i && this.simplifiedGeometry_.applyTransform(i);
        const s = this.simplifiedGeometry_.getFlatCoordinates();
        let l;
        switch (this.type_) {
          case "LineString":
            (s.length = ic(
              s,
              0,
              this.simplifiedGeometry_.flatCoordinates_.length,
              this.simplifiedGeometry_.stride_,
              t,
              s,
              0,
            )),
              (l = [s.length]);
            break;
          case "MultiLineString":
            (l = []),
              (s.length = Tp(
                s,
                0,
                this.simplifiedGeometry_.ends_,
                this.simplifiedGeometry_.stride_,
                t,
                s,
                0,
                l,
              ));
            break;
          case "Polygon":
            (l = []),
              (s.length = Id(
                s,
                0,
                this.simplifiedGeometry_.ends_,
                this.simplifiedGeometry_.stride_,
                Math.sqrt(t),
                s,
                0,
                l,
              ));
            break;
        }
        return (
          l &&
            (this.simplifiedGeometry_ = new li(
              this.type_,
              s,
              l,
              2,
              this.properties_,
              this.id_,
            )),
          (this.squaredTolerance_ = t),
          this.simplifiedGeometry_
        );
      })),
      this
    );
  }
}
li.prototype.getFlatCoordinates = li.prototype.getOrientedFlatCoordinates;
function qp(r, t, i = 0, s = r.length - 1, l = Vx) {
  for (; s > i; ) {
    if (s - i > 600) {
      const d = s - i + 1,
        _ = t - i + 1,
        m = Math.log(d),
        y = 0.5 * Math.exp((2 * m) / 3),
        v = 0.5 * Math.sqrt((m * y * (d - y)) / d) * (_ - d / 2 < 0 ? -1 : 1),
        E = Math.max(i, Math.floor(t - (_ * y) / d + v)),
        x = Math.min(s, Math.floor(t + ((d - _) * y) / d + v));
      qp(r, t, E, x, l);
    }
    const o = r[t];
    let c = i,
      h = s;
    for (Ra(r, i, t), l(r[s], o) > 0 && Ra(r, i, s); c < h; ) {
      for (Ra(r, c, h), c++, h--; l(r[c], o) < 0; ) c++;
      for (; l(r[h], o) > 0; ) h--;
    }
    l(r[i], o) === 0 ? Ra(r, i, h) : (h++, Ra(r, h, s)),
      h <= t && (i = h + 1),
      t <= h && (s = h - 1);
  }
}
function Ra(r, t, i) {
  const s = r[t];
  (r[t] = r[i]), (r[i] = s);
}
function Vx(r, t) {
  return r < t ? -1 : r > t ? 1 : 0;
}
let Vp = class {
  constructor(t = 9) {
    (this._maxEntries = Math.max(4, t)),
      (this._minEntries = Math.max(2, Math.ceil(this._maxEntries * 0.4))),
      this.clear();
  }
  all() {
    return this._all(this.data, []);
  }
  search(t) {
    let i = this.data;
    const s = [];
    if (!vu(t, i)) return s;
    const l = this.toBBox,
      o = [];
    for (; i; ) {
      for (let c = 0; c < i.children.length; c++) {
        const h = i.children[c],
          d = i.leaf ? l(h) : h;
        vu(t, d) &&
          (i.leaf ? s.push(h) : Nf(t, d) ? this._all(h, s) : o.push(h));
      }
      i = o.pop();
    }
    return s;
  }
  collides(t) {
    let i = this.data;
    if (!vu(t, i)) return !1;
    const s = [];
    for (; i; ) {
      for (let l = 0; l < i.children.length; l++) {
        const o = i.children[l],
          c = i.leaf ? this.toBBox(o) : o;
        if (vu(t, c)) {
          if (i.leaf || Nf(t, c)) return !0;
          s.push(o);
        }
      }
      i = s.pop();
    }
    return !1;
  }
  load(t) {
    if (!(t && t.length)) return this;
    if (t.length < this._minEntries) {
      for (let s = 0; s < t.length; s++) this.insert(t[s]);
      return this;
    }
    let i = this._build(t.slice(), 0, t.length - 1, 0);
    if (!this.data.children.length) this.data = i;
    else if (this.data.height === i.height) this._splitRoot(this.data, i);
    else {
      if (this.data.height < i.height) {
        const s = this.data;
        (this.data = i), (i = s);
      }
      this._insert(i, this.data.height - i.height - 1, !0);
    }
    return this;
  }
  insert(t) {
    return t && this._insert(t, this.data.height - 1), this;
  }
  clear() {
    return (this.data = tl([])), this;
  }
  remove(t, i) {
    if (!t) return this;
    let s = this.data;
    const l = this.toBBox(t),
      o = [],
      c = [];
    let h, d, _;
    for (; s || o.length; ) {
      if (
        (s || ((s = o.pop()), (d = o[o.length - 1]), (h = c.pop()), (_ = !0)),
        s.leaf)
      ) {
        const m = Wx(t, s.children, i);
        if (m !== -1)
          return s.children.splice(m, 1), o.push(s), this._condense(o), this;
      }
      !_ && !s.leaf && Nf(s, l)
        ? (o.push(s), c.push(h), (h = 0), (d = s), (s = s.children[0]))
        : d
          ? (h++, (s = d.children[h]), (_ = !1))
          : (s = null);
    }
    return this;
  }
  toBBox(t) {
    return t;
  }
  compareMinX(t, i) {
    return t.minX - i.minX;
  }
  compareMinY(t, i) {
    return t.minY - i.minY;
  }
  toJSON() {
    return this.data;
  }
  fromJSON(t) {
    return (this.data = t), this;
  }
  _all(t, i) {
    const s = [];
    for (; t; )
      t.leaf ? i.push(...t.children) : s.push(...t.children), (t = s.pop());
    return i;
  }
  _build(t, i, s, l) {
    const o = s - i + 1;
    let c = this._maxEntries,
      h;
    if (o <= c) return (h = tl(t.slice(i, s + 1))), Kr(h, this.toBBox), h;
    l ||
      ((l = Math.ceil(Math.log(o) / Math.log(c))),
      (c = Math.ceil(o / Math.pow(c, l - 1)))),
      (h = tl([])),
      (h.leaf = !1),
      (h.height = l);
    const d = Math.ceil(o / c),
      _ = d * Math.ceil(Math.sqrt(c));
    Ty(t, i, s, _, this.compareMinX);
    for (let m = i; m <= s; m += _) {
      const y = Math.min(m + _ - 1, s);
      Ty(t, m, y, d, this.compareMinY);
      for (let v = m; v <= y; v += d) {
        const E = Math.min(v + d - 1, y);
        h.children.push(this._build(t, v, E, l - 1));
      }
    }
    return Kr(h, this.toBBox), h;
  }
  _chooseSubtree(t, i, s, l) {
    for (; l.push(i), !(i.leaf || l.length - 1 === s); ) {
      let o = 1 / 0,
        c = 1 / 0,
        h;
      for (let d = 0; d < i.children.length; d++) {
        const _ = i.children[d],
          m = If(_),
          y = $x(t, _) - m;
        y < c
          ? ((c = y), (o = m < o ? m : o), (h = _))
          : y === c && m < o && ((o = m), (h = _));
      }
      i = h || i.children[0];
    }
    return i;
  }
  _insert(t, i, s) {
    const l = s ? t : this.toBBox(t),
      o = [],
      c = this._chooseSubtree(l, this.data, i, o);
    for (
      c.children.push(t), wa(c, l);
      i >= 0 && o[i].children.length > this._maxEntries;

    )
      this._split(o, i), i--;
    this._adjustParentBBoxes(l, o, i);
  }
  _split(t, i) {
    const s = t[i],
      l = s.children.length,
      o = this._minEntries;
    this._chooseSplitAxis(s, o, l);
    const c = this._chooseSplitIndex(s, o, l),
      h = tl(s.children.splice(c, s.children.length - c));
    (h.height = s.height),
      (h.leaf = s.leaf),
      Kr(s, this.toBBox),
      Kr(h, this.toBBox),
      i ? t[i - 1].children.push(h) : this._splitRoot(s, h);
  }
  _splitRoot(t, i) {
    (this.data = tl([t, i])),
      (this.data.height = t.height + 1),
      (this.data.leaf = !1),
      Kr(this.data, this.toBBox);
  }
  _chooseSplitIndex(t, i, s) {
    let l,
      o = 1 / 0,
      c = 1 / 0;
    for (let h = i; h <= s - i; h++) {
      const d = Aa(t, 0, h, this.toBBox),
        _ = Aa(t, h, s, this.toBBox),
        m = t2(d, _),
        y = If(d) + If(_);
      m < o
        ? ((o = m), (l = h), (c = y < c ? y : c))
        : m === o && y < c && ((c = y), (l = h));
    }
    return l || s - i;
  }
  _chooseSplitAxis(t, i, s) {
    const l = t.leaf ? this.compareMinX : Qx,
      o = t.leaf ? this.compareMinY : Jx,
      c = this._allDistMargin(t, i, s, l),
      h = this._allDistMargin(t, i, s, o);
    c < h && t.children.sort(l);
  }
  _allDistMargin(t, i, s, l) {
    t.children.sort(l);
    const o = this.toBBox,
      c = Aa(t, 0, i, o),
      h = Aa(t, s - i, s, o);
    let d = pu(c) + pu(h);
    for (let _ = i; _ < s - i; _++) {
      const m = t.children[_];
      wa(c, t.leaf ? o(m) : m), (d += pu(c));
    }
    for (let _ = s - i - 1; _ >= i; _--) {
      const m = t.children[_];
      wa(h, t.leaf ? o(m) : m), (d += pu(h));
    }
    return d;
  }
  _adjustParentBBoxes(t, i, s) {
    for (let l = s; l >= 0; l--) wa(i[l], t);
  }
  _condense(t) {
    for (let i = t.length - 1, s; i >= 0; i--)
      t[i].children.length === 0
        ? i > 0
          ? ((s = t[i - 1].children), s.splice(s.indexOf(t[i]), 1))
          : this.clear()
        : Kr(t[i], this.toBBox);
  }
};
function Wx(r, t, i) {
  if (!i) return t.indexOf(r);
  for (let s = 0; s < t.length; s++) if (i(r, t[s])) return s;
  return -1;
}
function Kr(r, t) {
  Aa(r, 0, r.children.length, t, r);
}
function Aa(r, t, i, s, l) {
  l || (l = tl(null)),
    (l.minX = 1 / 0),
    (l.minY = 1 / 0),
    (l.maxX = -1 / 0),
    (l.maxY = -1 / 0);
  for (let o = t; o < i; o++) {
    const c = r.children[o];
    wa(l, r.leaf ? s(c) : c);
  }
  return l;
}
function wa(r, t) {
  return (
    (r.minX = Math.min(r.minX, t.minX)),
    (r.minY = Math.min(r.minY, t.minY)),
    (r.maxX = Math.max(r.maxX, t.maxX)),
    (r.maxY = Math.max(r.maxY, t.maxY)),
    r
  );
}
function Qx(r, t) {
  return r.minX - t.minX;
}
function Jx(r, t) {
  return r.minY - t.minY;
}
function If(r) {
  return (r.maxX - r.minX) * (r.maxY - r.minY);
}
function pu(r) {
  return r.maxX - r.minX + (r.maxY - r.minY);
}
function $x(r, t) {
  return (
    (Math.max(t.maxX, r.maxX) - Math.min(t.minX, r.minX)) *
    (Math.max(t.maxY, r.maxY) - Math.min(t.minY, r.minY))
  );
}
function t2(r, t) {
  const i = Math.max(r.minX, t.minX),
    s = Math.max(r.minY, t.minY),
    l = Math.min(r.maxX, t.maxX),
    o = Math.min(r.maxY, t.maxY);
  return Math.max(0, l - i) * Math.max(0, o - s);
}
function Nf(r, t) {
  return (
    r.minX <= t.minX && r.minY <= t.minY && t.maxX <= r.maxX && t.maxY <= r.maxY
  );
}
function vu(r, t) {
  return (
    t.minX <= r.maxX && t.minY <= r.maxY && t.maxX >= r.minX && t.maxY >= r.minY
  );
}
function tl(r) {
  return {
    children: r,
    height: 1,
    leaf: !0,
    minX: 1 / 0,
    minY: 1 / 0,
    maxX: -1 / 0,
    maxY: -1 / 0,
  };
}
function Ty(r, t, i, s, l) {
  const o = [t, i];
  for (; o.length; ) {
    if (((i = o.pop()), (t = o.pop()), i - t <= s)) continue;
    const c = t + Math.ceil((i - t) / s / 2) * s;
    qp(r, c, t, i, l), o.push(t, c, c, i);
  }
}
class Ry {
  constructor(t) {
    (this.rbush_ = new Vp(t)), (this.items_ = {});
  }
  insert(t, i) {
    const s = { minX: t[0], minY: t[1], maxX: t[2], maxY: t[3], value: i };
    this.rbush_.insert(s), (this.items_[It(i)] = s);
  }
  load(t, i) {
    const s = new Array(i.length);
    for (let l = 0, o = i.length; l < o; l++) {
      const c = t[l],
        h = i[l],
        d = { minX: c[0], minY: c[1], maxX: c[2], maxY: c[3], value: h };
      (s[l] = d), (this.items_[It(h)] = d);
    }
    this.rbush_.load(s);
  }
  remove(t) {
    const i = It(t),
      s = this.items_[i];
    return delete this.items_[i], this.rbush_.remove(s) !== null;
  }
  update(t, i) {
    const s = this.items_[It(i)],
      l = [s.minX, s.minY, s.maxX, s.maxY];
    Na(l, t) || (this.remove(i), this.insert(t, i));
  }
  getAll() {
    return this.rbush_.all().map(function (i) {
      return i.value;
    });
  }
  getInExtent(t) {
    const i = { minX: t[0], minY: t[1], maxX: t[2], maxY: t[3] };
    return this.rbush_.search(i).map(function (l) {
      return l.value;
    });
  }
  forEach(t) {
    return this.forEach_(this.getAll(), t);
  }
  forEachInExtent(t, i) {
    return this.forEach_(this.getInExtent(t), i);
  }
  forEach_(t, i) {
    let s;
    for (let l = 0, o = t.length; l < o; l++) if (((s = i(t[l])), s)) return s;
    return s;
  }
  isEmpty() {
    return nr(this.items_);
  }
  clear() {
    this.rbush_.clear(), (this.items_ = {});
  }
  getExtent(t) {
    const i = this.rbush_.toJSON();
    return Ln(i.minX, i.minY, i.maxX, i.maxY, t);
  }
  concat(t) {
    this.rbush_.load(t.rbush_.all());
    for (const i in t.items_) this.items_[i] = t.items_[i];
  }
}
class Wp extends Xi {
  constructor(t) {
    super(),
      (this.projection = Kt(t.projection)),
      (this.attributions_ = by(t.attributions)),
      (this.attributionsCollapsible_ = t.attributionsCollapsible ?? !0),
      (this.loading = !1),
      (this.state_ = t.state !== void 0 ? t.state : "ready"),
      (this.wrapX_ = t.wrapX !== void 0 ? t.wrapX : !1),
      (this.interpolate_ = !!t.interpolate),
      (this.viewResolver = null),
      (this.viewRejector = null);
    const i = this;
    this.viewPromise_ = new Promise(function (s, l) {
      (i.viewResolver = s), (i.viewRejector = l);
    });
  }
  getAttributions() {
    return this.attributions_;
  }
  getAttributionsCollapsible() {
    return this.attributionsCollapsible_;
  }
  getProjection() {
    return this.projection;
  }
  getResolutions(t) {
    return null;
  }
  getView() {
    return this.viewPromise_;
  }
  getState() {
    return this.state_;
  }
  getWrapX() {
    return this.wrapX_;
  }
  getInterpolate() {
    return this.interpolate_;
  }
  refresh() {
    this.changed();
  }
  setAttributions(t) {
    (this.attributions_ = by(t)), this.changed();
  }
  setState(t) {
    (this.state_ = t), this.changed();
  }
}
function by(r) {
  return r
    ? typeof r == "function"
      ? r
      : (Array.isArray(r) || (r = [r]), (t) => r)
    : null;
}
const Si = {
  ADDFEATURE: "addfeature",
  CHANGEFEATURE: "changefeature",
  CLEAR: "clear",
  REMOVEFEATURE: "removefeature",
  FEATURESLOADSTART: "featuresloadstart",
  FEATURESLOADEND: "featuresloadend",
  FEATURESLOADERROR: "featuresloaderror",
};
class ss extends In {
  constructor(t, i, s) {
    super(t), (this.feature = i), (this.features = s);
  }
}
class jd extends Wp {
  constructor(t) {
    (t = t || {}),
      super({
        attributions: t.attributions,
        interpolate: !0,
        projection: void 0,
        state: "ready",
        wrapX: t.wrapX !== void 0 ? t.wrapX : !0,
      }),
      this.on,
      this.once,
      this.un,
      (this.loader_ = hl),
      (this.format_ = t.format || null),
      (this.overlaps_ = t.overlaps === void 0 ? !0 : t.overlaps),
      (this.url_ = t.url),
      t.loader !== void 0
        ? (this.loader_ = t.loader)
        : this.url_ !== void 0 &&
          (Lt(this.format_, "`format` must be set when `url` is set"),
          (this.loader_ = xy(this.url_, this.format_))),
      (this.strategy_ = t.strategy !== void 0 ? t.strategy : qx);
    const i = t.useSpatialIndex !== void 0 ? t.useSpatialIndex : !0;
    (this.featuresRtree_ = i ? new Ry() : null),
      (this.loadedExtentsRtree_ = new Ry()),
      (this.loadingExtentsCount_ = 0),
      (this.nullGeometryFeatures_ = {}),
      (this.idIndex_ = {}),
      (this.uidIndex_ = {}),
      (this.featureChangeKeys_ = {}),
      (this.featuresCollection_ = null);
    let s, l;
    Array.isArray(t.features)
      ? (l = t.features)
      : t.features && ((s = t.features), (l = s.getArray())),
      !i && s === void 0 && (s = new $i(l)),
      l !== void 0 && this.addFeaturesInternal(l),
      s !== void 0 && this.bindFeaturesCollection_(s);
  }
  addFeature(t) {
    this.addFeatureInternal(t), this.changed();
  }
  addFeatureInternal(t) {
    const i = It(t);
    if (!this.addToIndex_(i, t)) {
      this.featuresCollection_ && this.featuresCollection_.remove(t);
      return;
    }
    this.setupChangeEvents_(i, t);
    const s = t.getGeometry();
    if (s) {
      const l = s.getExtent();
      this.featuresRtree_ && this.featuresRtree_.insert(l, t);
    } else this.nullGeometryFeatures_[i] = t;
    this.dispatchEvent(new ss(Si.ADDFEATURE, t));
  }
  setupChangeEvents_(t, i) {
    i instanceof li ||
      (this.featureChangeKeys_[t] = [
        Mt(i, pt.CHANGE, this.handleFeatureChange_, this),
        Mt(i, cl.PROPERTYCHANGE, this.handleFeatureChange_, this),
      ]);
  }
  addToIndex_(t, i) {
    let s = !0;
    if (i.getId() !== void 0) {
      const l = String(i.getId());
      if (!(l in this.idIndex_)) this.idIndex_[l] = i;
      else if (i instanceof li) {
        const o = this.idIndex_[l];
        o instanceof li
          ? Array.isArray(o)
            ? o.push(i)
            : (this.idIndex_[l] = [o, i])
          : (s = !1);
      } else s = !1;
    }
    return (
      s &&
        (Lt(
          !(t in this.uidIndex_),
          "The passed `feature` was already added to the source",
        ),
        (this.uidIndex_[t] = i)),
      s
    );
  }
  addFeatures(t) {
    this.addFeaturesInternal(t), this.changed();
  }
  addFeaturesInternal(t) {
    const i = [],
      s = [],
      l = [];
    for (let o = 0, c = t.length; o < c; o++) {
      const h = t[o],
        d = It(h);
      this.addToIndex_(d, h) && s.push(h);
    }
    for (let o = 0, c = s.length; o < c; o++) {
      const h = s[o],
        d = It(h);
      this.setupChangeEvents_(d, h);
      const _ = h.getGeometry();
      if (_) {
        const m = _.getExtent();
        i.push(m), l.push(h);
      } else this.nullGeometryFeatures_[d] = h;
    }
    if (
      (this.featuresRtree_ && this.featuresRtree_.load(i, l),
      this.hasListener(Si.ADDFEATURE))
    )
      for (let o = 0, c = s.length; o < c; o++)
        this.dispatchEvent(new ss(Si.ADDFEATURE, s[o]));
  }
  bindFeaturesCollection_(t) {
    let i = !1;
    this.addEventListener(Si.ADDFEATURE, function (s) {
      i || ((i = !0), t.push(s.feature), (i = !1));
    }),
      this.addEventListener(Si.REMOVEFEATURE, function (s) {
        i || ((i = !0), t.remove(s.feature), (i = !1));
      }),
      t.addEventListener(je.ADD, (s) => {
        i || ((i = !0), this.addFeature(s.element), (i = !1));
      }),
      t.addEventListener(je.REMOVE, (s) => {
        i || ((i = !0), this.removeFeature(s.element), (i = !1));
      }),
      (this.featuresCollection_ = t);
  }
  clear(t) {
    if (t) {
      for (const s in this.featureChangeKeys_)
        this.featureChangeKeys_[s].forEach(jt);
      this.featuresCollection_ ||
        ((this.featureChangeKeys_ = {}),
        (this.idIndex_ = {}),
        (this.uidIndex_ = {}));
    } else if (this.featuresRtree_) {
      this.featuresRtree_.forEach((s) => {
        this.removeFeatureInternal(s);
      });
      for (const s in this.nullGeometryFeatures_)
        this.removeFeatureInternal(this.nullGeometryFeatures_[s]);
    }
    this.featuresCollection_ && this.featuresCollection_.clear(),
      this.featuresRtree_ && this.featuresRtree_.clear(),
      (this.nullGeometryFeatures_ = {});
    const i = new ss(Si.CLEAR);
    this.dispatchEvent(i), this.changed();
  }
  forEachFeature(t) {
    if (this.featuresRtree_) return this.featuresRtree_.forEach(t);
    this.featuresCollection_ && this.featuresCollection_.forEach(t);
  }
  forEachFeatureAtCoordinateDirect(t, i) {
    const s = [t[0], t[1], t[0], t[1]];
    return this.forEachFeatureInExtent(s, function (l) {
      const o = l.getGeometry();
      if (o instanceof li || o.intersectsCoordinate(t)) return i(l);
    });
  }
  forEachFeatureInExtent(t, i) {
    if (this.featuresRtree_) return this.featuresRtree_.forEachInExtent(t, i);
    this.featuresCollection_ && this.featuresCollection_.forEach(i);
  }
  forEachFeatureIntersectingExtent(t, i) {
    return this.forEachFeatureInExtent(t, function (s) {
      const l = s.getGeometry();
      if (l instanceof li || l.intersectsExtent(t)) {
        const o = i(s);
        if (o) return o;
      }
    });
  }
  getFeaturesCollection() {
    return this.featuresCollection_;
  }
  getFeatures() {
    let t;
    return (
      this.featuresCollection_
        ? (t = this.featuresCollection_.getArray().slice(0))
        : this.featuresRtree_ &&
          ((t = this.featuresRtree_.getAll()),
          nr(this.nullGeometryFeatures_) ||
            en(t, Object.values(this.nullGeometryFeatures_))),
      t
    );
  }
  getFeaturesAtCoordinate(t) {
    const i = [];
    return (
      this.forEachFeatureAtCoordinateDirect(t, function (s) {
        i.push(s);
      }),
      i
    );
  }
  getFeaturesInExtent(t, i) {
    if (this.featuresRtree_) {
      if (!(i && i.canWrapX() && this.getWrapX()))
        return this.featuresRtree_.getInExtent(t);
      const l = up(t, i);
      return [].concat(...l.map((o) => this.featuresRtree_.getInExtent(o)));
    }
    return this.featuresCollection_
      ? this.featuresCollection_.getArray().slice(0)
      : [];
  }
  getClosestFeatureToCoordinate(t, i) {
    const s = t[0],
      l = t[1];
    let o = null;
    const c = [NaN, NaN];
    let h = 1 / 0;
    const d = [-1 / 0, -1 / 0, 1 / 0, 1 / 0];
    return (
      (i = i || Ia),
      this.featuresRtree_.forEachInExtent(d, function (_) {
        if (i(_)) {
          const m = _.getGeometry(),
            y = h;
          if (
            ((h = m instanceof li ? 0 : m.closestPointXY(s, l, c, h)), h < y)
          ) {
            o = _;
            const v = Math.sqrt(h);
            (d[0] = s - v), (d[1] = l - v), (d[2] = s + v), (d[3] = l + v);
          }
        }
      }),
      o
    );
  }
  getExtent(t) {
    return this.featuresRtree_.getExtent(t);
  }
  getFeatureById(t) {
    const i = this.idIndex_[t.toString()];
    return i !== void 0 ? i : null;
  }
  getFeatureByUid(t) {
    const i = this.uidIndex_[t];
    return i !== void 0 ? i : null;
  }
  getFormat() {
    return this.format_;
  }
  getOverlaps() {
    return this.overlaps_;
  }
  getUrl() {
    return this.url_;
  }
  handleFeatureChange_(t) {
    const i = t.target,
      s = It(i),
      l = i.getGeometry();
    if (!l)
      s in this.nullGeometryFeatures_ ||
        (this.featuresRtree_ && this.featuresRtree_.remove(i),
        (this.nullGeometryFeatures_[s] = i));
    else {
      const c = l.getExtent();
      s in this.nullGeometryFeatures_
        ? (delete this.nullGeometryFeatures_[s],
          this.featuresRtree_ && this.featuresRtree_.insert(c, i))
        : this.featuresRtree_ && this.featuresRtree_.update(c, i);
    }
    const o = i.getId();
    if (o !== void 0) {
      const c = o.toString();
      this.idIndex_[c] !== i &&
        (this.removeFromIdIndex_(i), (this.idIndex_[c] = i));
    } else this.removeFromIdIndex_(i), (this.uidIndex_[s] = i);
    this.changed(), this.dispatchEvent(new ss(Si.CHANGEFEATURE, i));
  }
  hasFeature(t) {
    const i = t.getId();
    return i !== void 0 ? i in this.idIndex_ : It(t) in this.uidIndex_;
  }
  isEmpty() {
    return this.featuresRtree_
      ? this.featuresRtree_.isEmpty() && nr(this.nullGeometryFeatures_)
      : this.featuresCollection_
        ? this.featuresCollection_.getLength() === 0
        : !0;
  }
  loadFeatures(t, i, s) {
    const l = this.loadedExtentsRtree_,
      o = this.strategy_(t, i, s);
    for (let c = 0, h = o.length; c < h; ++c) {
      const d = o[c];
      l.forEachInExtent(d, function (m) {
        return nl(m.extent, d);
      }) ||
        (++this.loadingExtentsCount_,
        this.dispatchEvent(new ss(Si.FEATURESLOADSTART)),
        this.loader_.call(
          this,
          d,
          i,
          s,
          (m) => {
            --this.loadingExtentsCount_,
              this.dispatchEvent(new ss(Si.FEATURESLOADEND, void 0, m));
          },
          () => {
            --this.loadingExtentsCount_,
              this.dispatchEvent(new ss(Si.FEATURESLOADERROR));
          },
        ),
        l.insert(d, { extent: d.slice() }));
    }
    this.loading = this.loader_.length < 4 ? !1 : this.loadingExtentsCount_ > 0;
  }
  refresh() {
    this.clear(!0), this.loadedExtentsRtree_.clear(), super.refresh();
  }
  removeLoadedExtent(t) {
    const i = this.loadedExtentsRtree_,
      s = i.forEachInExtent(t, function (l) {
        if (Na(l.extent, t)) return l;
      });
    s && i.remove(s);
  }
  removeFeatures(t) {
    let i = !1;
    for (let s = 0, l = t.length; s < l; ++s)
      i = this.removeFeatureInternal(t[s]) || i;
    i && this.changed();
  }
  removeFeature(t) {
    if (!t) return;
    this.removeFeatureInternal(t) && this.changed();
  }
  removeFeatureInternal(t) {
    const i = It(t);
    if (!(i in this.uidIndex_)) return !1;
    i in this.nullGeometryFeatures_
      ? delete this.nullGeometryFeatures_[i]
      : this.featuresRtree_ && this.featuresRtree_.remove(t);
    const s = this.featureChangeKeys_[i];
    s == null || s.forEach(jt), delete this.featureChangeKeys_[i];
    const l = t.getId();
    if (l !== void 0) {
      const o = l.toString(),
        c = this.idIndex_[o];
      c === t
        ? delete this.idIndex_[o]
        : Array.isArray(c) &&
          (c.splice(c.indexOf(t), 1),
          c.length === 1 && (this.idIndex_[o] = c[0]));
    }
    return (
      delete this.uidIndex_[i],
      this.hasListener(Si.REMOVEFEATURE) &&
        this.dispatchEvent(new ss(Si.REMOVEFEATURE, t)),
      !0
    );
  }
  removeFromIdIndex_(t) {
    for (const i in this.idIndex_)
      if (this.idIndex_[i] === t) {
        delete this.idIndex_[i];
        break;
      }
  }
  setLoader(t) {
    this.loader_ = t;
  }
  setUrl(t) {
    Lt(this.format_, "`format` must be set when `url` is set"),
      (this.url_ = t),
      this.setLoader(xy(t, this.format_));
  }
  setOverlaps(t) {
    (this.overlaps_ = t), this.changed();
  }
}
class xl {
  constructor(t) {
    (t = t || {}),
      (this.patternImage_ = null),
      (this.color_ = null),
      t.color !== void 0 && this.setColor(t.color);
  }
  clone() {
    const t = this.getColor();
    return new xl({ color: Array.isArray(t) ? t.slice() : t || void 0 });
  }
  getColor() {
    return this.color_;
  }
  setColor(t) {
    if (t !== null && typeof t == "object" && "src" in t) {
      const i = Bd(
        null,
        t.src,
        "anonymous",
        void 0,
        t.offset ? null : t.color ? t.color : null,
        !(t.offset && t.size),
      );
      i.ready().then(() => {
        this.patternImage_ = null;
      }),
        i.getImageState() === xt.IDLE && i.load(),
        i.getImageState() === xt.LOADING && (this.patternImage_ = i);
    }
    this.color_ = t;
  }
  getKey() {
    const t = this.getColor();
    return t
      ? t instanceof CanvasPattern || t instanceof CanvasGradient
        ? It(t)
        : typeof t == "object" && "src" in t
          ? t.src + ":" + t.offset
          : yl(t).toString()
      : "";
  }
  loading() {
    return !!this.patternImage_;
  }
  ready() {
    return this.patternImage_ ? this.patternImage_.ready() : Promise.resolve();
  }
}
class El {
  constructor(t) {
    (t = t || {}),
      (this.color_ = t.color !== void 0 ? t.color : null),
      (this.lineCap_ = t.lineCap),
      (this.lineDash_ = t.lineDash !== void 0 ? t.lineDash : null),
      (this.lineDashOffset_ = t.lineDashOffset),
      (this.lineJoin_ = t.lineJoin),
      (this.miterLimit_ = t.miterLimit),
      (this.width_ = t.width);
  }
  clone() {
    const t = this.getColor();
    return new El({
      color: Array.isArray(t) ? t.slice() : t || void 0,
      lineCap: this.getLineCap(),
      lineDash: this.getLineDash() ? this.getLineDash().slice() : void 0,
      lineDashOffset: this.getLineDashOffset(),
      lineJoin: this.getLineJoin(),
      miterLimit: this.getMiterLimit(),
      width: this.getWidth(),
    });
  }
  getColor() {
    return this.color_;
  }
  getLineCap() {
    return this.lineCap_;
  }
  getLineDash() {
    return this.lineDash_;
  }
  getLineDashOffset() {
    return this.lineDashOffset_;
  }
  getLineJoin() {
    return this.lineJoin_;
  }
  getMiterLimit() {
    return this.miterLimit_;
  }
  getWidth() {
    return this.width_;
  }
  setColor(t) {
    this.color_ = t;
  }
  setLineCap(t) {
    this.lineCap_ = t;
  }
  setLineDash(t) {
    this.lineDash_ = t;
  }
  setLineDashOffset(t) {
    this.lineDashOffset_ = t;
  }
  setLineJoin(t) {
    this.lineJoin_ = t;
  }
  setMiterLimit(t) {
    this.miterLimit_ = t;
  }
  setWidth(t) {
    this.width_ = t;
  }
}
function Ay(r) {
  return r[0] > 0 && r[1] > 0;
}
function e2(r, t, i) {
  return (
    i === void 0 && (i = [0, 0]),
    (i[0] = (r[0] * t + 0.5) | 0),
    (i[1] = (r[1] * t + 0.5) | 0),
    i
  );
}
function We(r, t) {
  return Array.isArray(r)
    ? r
    : (t === void 0 ? (t = [r, r]) : ((t[0] = r), (t[1] = r)), t);
}
class ac {
  constructor(t) {
    (this.opacity_ = t.opacity),
      (this.rotateWithView_ = t.rotateWithView),
      (this.rotation_ = t.rotation),
      (this.scale_ = t.scale),
      (this.scaleArray_ = We(t.scale)),
      (this.displacement_ = t.displacement),
      (this.declutterMode_ = t.declutterMode);
  }
  clone() {
    const t = this.getScale();
    return new ac({
      opacity: this.getOpacity(),
      scale: Array.isArray(t) ? t.slice() : t,
      rotation: this.getRotation(),
      rotateWithView: this.getRotateWithView(),
      displacement: this.getDisplacement().slice(),
      declutterMode: this.getDeclutterMode(),
    });
  }
  getOpacity() {
    return this.opacity_;
  }
  getRotateWithView() {
    return this.rotateWithView_;
  }
  getRotation() {
    return this.rotation_;
  }
  getScale() {
    return this.scale_;
  }
  getScaleArray() {
    return this.scaleArray_;
  }
  getDisplacement() {
    return this.displacement_;
  }
  getDeclutterMode() {
    return this.declutterMode_;
  }
  getAnchor() {
    return _t();
  }
  getImage(t) {
    return _t();
  }
  getHitDetectionImage() {
    return _t();
  }
  getPixelRatio(t) {
    return 1;
  }
  getImageState() {
    return _t();
  }
  getImageSize() {
    return _t();
  }
  getOrigin() {
    return _t();
  }
  getSize() {
    return _t();
  }
  setDisplacement(t) {
    this.displacement_ = t;
  }
  setOpacity(t) {
    this.opacity_ = t;
  }
  setRotateWithView(t) {
    this.rotateWithView_ = t;
  }
  setRotation(t) {
    this.rotation_ = t;
  }
  setScale(t) {
    (this.scale_ = t), (this.scaleArray_ = We(t));
  }
  listenImageChange(t) {
    _t();
  }
  load() {
    _t();
  }
  unlistenImageChange(t) {
    _t();
  }
  ready() {
    return Promise.resolve();
  }
}
class oc extends ac {
  constructor(t) {
    super({
      opacity: 1,
      rotateWithView: t.rotateWithView !== void 0 ? t.rotateWithView : !1,
      rotation: t.rotation !== void 0 ? t.rotation : 0,
      scale: t.scale !== void 0 ? t.scale : 1,
      displacement: t.displacement !== void 0 ? t.displacement : [0, 0],
      declutterMode: t.declutterMode,
    }),
      (this.hitDetectionCanvas_ = null),
      (this.fill_ = t.fill !== void 0 ? t.fill : null),
      (this.origin_ = [0, 0]),
      (this.points_ = t.points),
      (this.radius = t.radius),
      (this.radius2_ = t.radius2),
      (this.angle_ = t.angle !== void 0 ? t.angle : 0),
      (this.stroke_ = t.stroke !== void 0 ? t.stroke : null),
      this.size_,
      this.renderOptions_,
      (this.imageState_ =
        this.fill_ && this.fill_.loading() ? xt.LOADING : xt.LOADED),
      this.imageState_ === xt.LOADING &&
        this.ready().then(() => (this.imageState_ = xt.LOADED)),
      this.render();
  }
  clone() {
    const t = this.getScale(),
      i = new oc({
        fill: this.getFill() ? this.getFill().clone() : void 0,
        points: this.getPoints(),
        radius: this.getRadius(),
        radius2: this.getRadius2(),
        angle: this.getAngle(),
        stroke: this.getStroke() ? this.getStroke().clone() : void 0,
        rotation: this.getRotation(),
        rotateWithView: this.getRotateWithView(),
        scale: Array.isArray(t) ? t.slice() : t,
        displacement: this.getDisplacement().slice(),
        declutterMode: this.getDeclutterMode(),
      });
    return i.setOpacity(this.getOpacity()), i;
  }
  getAnchor() {
    const t = this.size_,
      i = this.getDisplacement(),
      s = this.getScaleArray();
    return [t[0] / 2 - i[0] / s[0], t[1] / 2 + i[1] / s[1]];
  }
  getAngle() {
    return this.angle_;
  }
  getFill() {
    return this.fill_;
  }
  setFill(t) {
    (this.fill_ = t), this.render();
  }
  getHitDetectionImage() {
    return (
      this.hitDetectionCanvas_ ||
        (this.hitDetectionCanvas_ = this.createHitDetectionCanvas_(
          this.renderOptions_,
        )),
      this.hitDetectionCanvas_
    );
  }
  getImage(t) {
    var o, c;
    const i = (o = this.fill_) == null ? void 0 : o.getKey(),
      s =
        `${t},${this.angle_},${this.radius},${this.radius2_},${this.points_},${i}` +
        Object.values(this.renderOptions_).join(",");
    let l = (c = Ci.get(s, null, null)) == null ? void 0 : c.getImage(1);
    if (!l) {
      const h = this.renderOptions_,
        d = Math.ceil(h.size * t),
        _ = pe(d, d);
      this.draw_(h, _, t),
        (l = _.canvas),
        Ci.set(s, null, null, new Xp(l, void 0, null, xt.LOADED, null));
    }
    return l;
  }
  getPixelRatio(t) {
    return t;
  }
  getImageSize() {
    return this.size_;
  }
  getImageState() {
    return this.imageState_;
  }
  getOrigin() {
    return this.origin_;
  }
  getPoints() {
    return this.points_;
  }
  getRadius() {
    return this.radius;
  }
  getRadius2() {
    return this.radius2_;
  }
  getSize() {
    return this.size_;
  }
  getStroke() {
    return this.stroke_;
  }
  setStroke(t) {
    (this.stroke_ = t), this.render();
  }
  listenImageChange(t) {}
  load() {}
  unlistenImageChange(t) {}
  calculateLineJoinSize_(t, i, s) {
    if (i === 0 || this.points_ === 1 / 0 || (t !== "bevel" && t !== "miter"))
      return i;
    let l = this.radius,
      o = this.radius2_ === void 0 ? l : this.radius2_;
    if (l < o) {
      const j = l;
      (l = o), (o = j);
    }
    const c = this.radius2_ === void 0 ? this.points_ : this.points_ * 2,
      h = (2 * Math.PI) / c,
      d = o * Math.sin(h),
      _ = Math.sqrt(o * o - d * d),
      m = l - _,
      y = Math.sqrt(d * d + m * m),
      v = y / d;
    if (t === "miter" && v <= s) return v * i;
    const E = i / 2 / v,
      x = (i / 2) * (m / y),
      R = Math.sqrt((l + E) * (l + E) + x * x) - l;
    if (this.radius2_ === void 0 || t === "bevel") return R * 2;
    const A = l * Math.sin(h),
      O = Math.sqrt(l * l - A * A),
      G = o - O,
      D = Math.sqrt(A * A + G * G) / A;
    if (D <= s) {
      const j = (D * i) / 2 - o - l;
      return 2 * Math.max(R, j);
    }
    return R * 2;
  }
  createRenderOptions() {
    let t = pl,
      i = vl,
      s = 0,
      l = null,
      o = 0,
      c,
      h = 0;
    this.stroke_ &&
      ((c = tn(this.stroke_.getColor() ?? ka)),
      (h = this.stroke_.getWidth() ?? Ba),
      (l = this.stroke_.getLineDash()),
      (o = this.stroke_.getLineDashOffset() ?? 0),
      (i = this.stroke_.getLineJoin() ?? vl),
      (t = this.stroke_.getLineCap() ?? pl),
      (s = this.stroke_.getMiterLimit() ?? Ya));
    const d = this.calculateLineJoinSize_(i, h, s),
      _ = Math.max(this.radius, this.radius2_ || 0),
      m = Math.ceil(2 * _ + d);
    return {
      strokeStyle: c,
      strokeWidth: h,
      size: m,
      lineCap: t,
      lineDash: l,
      lineDashOffset: o,
      lineJoin: i,
      miterLimit: s,
    };
  }
  render() {
    this.renderOptions_ = this.createRenderOptions();
    const t = this.renderOptions_.size;
    (this.hitDetectionCanvas_ = null), (this.size_ = [t, t]);
  }
  draw_(t, i, s) {
    if (
      (i.scale(s, s),
      i.translate(t.size / 2, t.size / 2),
      this.createPath_(i),
      this.fill_)
    ) {
      let l = this.fill_.getColor();
      l === null && (l = Ze), (i.fillStyle = tn(l)), i.fill();
    }
    t.strokeStyle &&
      ((i.strokeStyle = t.strokeStyle),
      (i.lineWidth = t.strokeWidth),
      t.lineDash &&
        (i.setLineDash(t.lineDash), (i.lineDashOffset = t.lineDashOffset)),
      (i.lineCap = t.lineCap),
      (i.lineJoin = t.lineJoin),
      (i.miterLimit = t.miterLimit),
      i.stroke());
  }
  createHitDetectionCanvas_(t) {
    let i;
    if (this.fill_) {
      let s = this.fill_.getColor(),
        l = 0;
      typeof s == "string" && (s = yl(s)),
        s === null
          ? (l = 1)
          : Array.isArray(s) && (l = s.length === 4 ? s[3] : 1),
        l === 0 &&
          ((i = pe(t.size, t.size)), this.drawHitDetectionCanvas_(t, i));
    }
    return i ? i.canvas : this.getImage(1);
  }
  createPath_(t) {
    let i = this.points_;
    const s = this.radius;
    if (i === 1 / 0) t.arc(0, 0, s, 0, 2 * Math.PI);
    else {
      const l = this.radius2_ === void 0 ? s : this.radius2_;
      this.radius2_ !== void 0 && (i *= 2);
      const o = this.angle_ - Math.PI / 2,
        c = (2 * Math.PI) / i;
      for (let h = 0; h < i; h++) {
        const d = o + h * c,
          _ = h % 2 === 0 ? s : l;
        t.lineTo(_ * Math.cos(d), _ * Math.sin(d));
      }
      t.closePath();
    }
  }
  drawHitDetectionCanvas_(t, i) {
    i.translate(t.size / 2, t.size / 2),
      this.createPath_(i),
      (i.fillStyle = Ze),
      i.fill(),
      t.strokeStyle &&
        ((i.strokeStyle = t.strokeStyle),
        (i.lineWidth = t.strokeWidth),
        t.lineDash &&
          (i.setLineDash(t.lineDash), (i.lineDashOffset = t.lineDashOffset)),
        (i.lineJoin = t.lineJoin),
        (i.miterLimit = t.miterLimit),
        i.stroke());
  }
  ready() {
    return this.fill_ ? this.fill_.ready() : Promise.resolve();
  }
}
class uc extends oc {
  constructor(t) {
    (t = t || { radius: 5 }),
      super({
        points: 1 / 0,
        fill: t.fill,
        radius: t.radius,
        stroke: t.stroke,
        scale: t.scale !== void 0 ? t.scale : 1,
        rotation: t.rotation !== void 0 ? t.rotation : 0,
        rotateWithView: t.rotateWithView !== void 0 ? t.rotateWithView : !1,
        displacement: t.displacement !== void 0 ? t.displacement : [0, 0],
        declutterMode: t.declutterMode,
      });
  }
  clone() {
    const t = this.getScale(),
      i = new uc({
        fill: this.getFill() ? this.getFill().clone() : void 0,
        stroke: this.getStroke() ? this.getStroke().clone() : void 0,
        radius: this.getRadius(),
        scale: Array.isArray(t) ? t.slice() : t,
        rotation: this.getRotation(),
        rotateWithView: this.getRotateWithView(),
        displacement: this.getDisplacement().slice(),
        declutterMode: this.getDeclutterMode(),
      });
    return i.setOpacity(this.getOpacity()), i;
  }
  setRadius(t) {
    (this.radius = t), this.render();
  }
}
class ms {
  constructor(t) {
    (t = t || {}),
      (this.geometry_ = null),
      (this.geometryFunction_ = wy),
      t.geometry !== void 0 && this.setGeometry(t.geometry),
      (this.fill_ = t.fill !== void 0 ? t.fill : null),
      (this.image_ = t.image !== void 0 ? t.image : null),
      (this.renderer_ = t.renderer !== void 0 ? t.renderer : null),
      (this.hitDetectionRenderer_ =
        t.hitDetectionRenderer !== void 0 ? t.hitDetectionRenderer : null),
      (this.stroke_ = t.stroke !== void 0 ? t.stroke : null),
      (this.text_ = t.text !== void 0 ? t.text : null),
      (this.zIndex_ = t.zIndex);
  }
  clone() {
    let t = this.getGeometry();
    return (
      t && typeof t == "object" && (t = t.clone()),
      new ms({
        geometry: t ?? void 0,
        fill: this.getFill() ? this.getFill().clone() : void 0,
        image: this.getImage() ? this.getImage().clone() : void 0,
        renderer: this.getRenderer() ?? void 0,
        stroke: this.getStroke() ? this.getStroke().clone() : void 0,
        text: this.getText() ? this.getText().clone() : void 0,
        zIndex: this.getZIndex(),
      })
    );
  }
  getRenderer() {
    return this.renderer_;
  }
  setRenderer(t) {
    this.renderer_ = t;
  }
  setHitDetectionRenderer(t) {
    this.hitDetectionRenderer_ = t;
  }
  getHitDetectionRenderer() {
    return this.hitDetectionRenderer_;
  }
  getGeometry() {
    return this.geometry_;
  }
  getGeometryFunction() {
    return this.geometryFunction_;
  }
  getFill() {
    return this.fill_;
  }
  setFill(t) {
    this.fill_ = t;
  }
  getImage() {
    return this.image_;
  }
  setImage(t) {
    this.image_ = t;
  }
  getStroke() {
    return this.stroke_;
  }
  setStroke(t) {
    this.stroke_ = t;
  }
  getText() {
    return this.text_;
  }
  setText(t) {
    this.text_ = t;
  }
  getZIndex() {
    return this.zIndex_;
  }
  setGeometry(t) {
    typeof t == "function"
      ? (this.geometryFunction_ = t)
      : typeof t == "string"
        ? (this.geometryFunction_ = function (i) {
            return i.get(t);
          })
        : t
          ? t !== void 0 &&
            (this.geometryFunction_ = function () {
              return t;
            })
          : (this.geometryFunction_ = wy),
      (this.geometry_ = t);
  }
  setZIndex(t) {
    this.zIndex_ = t;
  }
}
function i2(r) {
  let t;
  if (typeof r == "function") t = r;
  else {
    let i;
    Array.isArray(r)
      ? (i = r)
      : (Lt(
          typeof r.getZIndex == "function",
          "Expected an `Style` or an array of `Style`",
        ),
        (i = [r])),
      (t = function () {
        return i;
      });
  }
  return t;
}
let Gf = null;
function Qp(r, t) {
  if (!Gf) {
    const i = new xl({ color: "rgba(255,255,255,0.4)" }),
      s = new El({ color: "#3399CC", width: 1.25 });
    Gf = [
      new ms({
        image: new uc({ fill: i, stroke: s, radius: 5 }),
        fill: i,
        stroke: s,
      }),
    ];
  }
  return Gf;
}
function wy(r) {
  return r.getGeometry();
}
const n2 = "#333";
class cc {
  constructor(t) {
    (t = t || {}),
      (this.font_ = t.font),
      (this.rotation_ = t.rotation),
      (this.rotateWithView_ = t.rotateWithView),
      (this.keepUpright_ = t.keepUpright),
      (this.scale_ = t.scale),
      (this.scaleArray_ = We(t.scale !== void 0 ? t.scale : 1)),
      (this.text_ = t.text),
      (this.textAlign_ = t.textAlign),
      (this.justify_ = t.justify),
      (this.repeat_ = t.repeat),
      (this.textBaseline_ = t.textBaseline),
      (this.fill_ = t.fill !== void 0 ? t.fill : new xl({ color: n2 })),
      (this.maxAngle_ = t.maxAngle !== void 0 ? t.maxAngle : Math.PI / 4),
      (this.placement_ = t.placement !== void 0 ? t.placement : "point"),
      (this.overflow_ = !!t.overflow),
      (this.stroke_ = t.stroke !== void 0 ? t.stroke : null),
      (this.offsetX_ = t.offsetX !== void 0 ? t.offsetX : 0),
      (this.offsetY_ = t.offsetY !== void 0 ? t.offsetY : 0),
      (this.backgroundFill_ = t.backgroundFill ? t.backgroundFill : null),
      (this.backgroundStroke_ = t.backgroundStroke ? t.backgroundStroke : null),
      (this.padding_ = t.padding === void 0 ? null : t.padding),
      (this.declutterMode_ = t.declutterMode);
  }
  clone() {
    const t = this.getScale();
    return new cc({
      font: this.getFont(),
      placement: this.getPlacement(),
      repeat: this.getRepeat(),
      maxAngle: this.getMaxAngle(),
      overflow: this.getOverflow(),
      rotation: this.getRotation(),
      rotateWithView: this.getRotateWithView(),
      keepUpright: this.getKeepUpright(),
      scale: Array.isArray(t) ? t.slice() : t,
      text: this.getText(),
      textAlign: this.getTextAlign(),
      justify: this.getJustify(),
      textBaseline: this.getTextBaseline(),
      fill: this.getFill() ? this.getFill().clone() : void 0,
      stroke: this.getStroke() ? this.getStroke().clone() : void 0,
      offsetX: this.getOffsetX(),
      offsetY: this.getOffsetY(),
      backgroundFill: this.getBackgroundFill()
        ? this.getBackgroundFill().clone()
        : void 0,
      backgroundStroke: this.getBackgroundStroke()
        ? this.getBackgroundStroke().clone()
        : void 0,
      padding: this.getPadding() || void 0,
      declutterMode: this.getDeclutterMode(),
    });
  }
  getOverflow() {
    return this.overflow_;
  }
  getFont() {
    return this.font_;
  }
  getMaxAngle() {
    return this.maxAngle_;
  }
  getPlacement() {
    return this.placement_;
  }
  getRepeat() {
    return this.repeat_;
  }
  getOffsetX() {
    return this.offsetX_;
  }
  getOffsetY() {
    return this.offsetY_;
  }
  getFill() {
    return this.fill_;
  }
  getRotateWithView() {
    return this.rotateWithView_;
  }
  getKeepUpright() {
    return this.keepUpright_;
  }
  getRotation() {
    return this.rotation_;
  }
  getScale() {
    return this.scale_;
  }
  getScaleArray() {
    return this.scaleArray_;
  }
  getStroke() {
    return this.stroke_;
  }
  getText() {
    return this.text_;
  }
  getTextAlign() {
    return this.textAlign_;
  }
  getJustify() {
    return this.justify_;
  }
  getTextBaseline() {
    return this.textBaseline_;
  }
  getBackgroundFill() {
    return this.backgroundFill_;
  }
  getBackgroundStroke() {
    return this.backgroundStroke_;
  }
  getPadding() {
    return this.padding_;
  }
  getDeclutterMode() {
    return this.declutterMode_;
  }
  setOverflow(t) {
    this.overflow_ = t;
  }
  setFont(t) {
    this.font_ = t;
  }
  setMaxAngle(t) {
    this.maxAngle_ = t;
  }
  setOffsetX(t) {
    this.offsetX_ = t;
  }
  setOffsetY(t) {
    this.offsetY_ = t;
  }
  setPlacement(t) {
    this.placement_ = t;
  }
  setRepeat(t) {
    this.repeat_ = t;
  }
  setRotateWithView(t) {
    this.rotateWithView_ = t;
  }
  setKeepUpright(t) {
    this.keepUpright_ = t;
  }
  setFill(t) {
    this.fill_ = t;
  }
  setRotation(t) {
    this.rotation_ = t;
  }
  setScale(t) {
    (this.scale_ = t), (this.scaleArray_ = We(t !== void 0 ? t : 1));
  }
  setStroke(t) {
    this.stroke_ = t;
  }
  setText(t) {
    this.text_ = t;
  }
  setTextAlign(t) {
    this.textAlign_ = t;
  }
  setJustify(t) {
    this.justify_ = t;
  }
  setTextBaseline(t) {
    this.textBaseline_ = t;
  }
  setBackgroundFill(t) {
    this.backgroundFill_ = t;
  }
  setBackgroundStroke(t) {
    this.backgroundStroke_ = t;
  }
  setPadding(t) {
    this.padding_ = t;
  }
}
const Le = { ANIMATING: 0, INTERACTING: 1 },
  ht = {
    BEGIN_GEOMETRY: 0,
    BEGIN_PATH: 1,
    CIRCLE: 2,
    CLOSE_PATH: 3,
    CUSTOM: 4,
    DRAW_CHARS: 5,
    DRAW_IMAGE: 6,
    END_GEOMETRY: 7,
    FILL: 8,
    MOVE_TO_LINE_TO: 9,
    SET_FILL_STYLE: 10,
    SET_STROKE_STYLE: 11,
    STROKE: 12,
  },
  Eu = [ht.FILL],
  ds = [ht.STROKE],
  tr = [ht.BEGIN_PATH],
  My = [ht.CLOSE_PATH];
class Ja extends Yp {
  constructor(t, i, s, l) {
    super(),
      (this.tolerance = t),
      (this.maxExtent = i),
      (this.pixelRatio = l),
      (this.maxLineWidth = 0),
      (this.resolution = s),
      (this.beginGeometryInstruction1_ = null),
      (this.beginGeometryInstruction2_ = null),
      (this.bufferedMaxExtent_ = null),
      (this.instructions = []),
      (this.coordinates = []),
      (this.tmpCoordinate_ = []),
      (this.hitDetectionInstructions = []),
      (this.state = {});
  }
  applyPixelRatio(t) {
    const i = this.pixelRatio;
    return i == 1
      ? t
      : t.map(function (s) {
          return s * i;
        });
  }
  appendFlatPointCoordinates(t, i) {
    const s = this.getBufferedMaxExtent(),
      l = this.tmpCoordinate_,
      o = this.coordinates;
    let c = o.length;
    for (let h = 0, d = t.length; h < d; h += i)
      (l[0] = t[h]),
        (l[1] = t[h + 1]),
        fl(s, l) && ((o[c++] = l[0]), (o[c++] = l[1]));
    return c;
  }
  appendFlatLineCoordinates(t, i, s, l, o, c) {
    const h = this.coordinates;
    let d = h.length;
    const _ = this.getBufferedMaxExtent();
    c && (i += l);
    let m = t[i],
      y = t[i + 1];
    const v = this.tmpCoordinate_;
    let E = !0,
      x,
      b,
      R;
    for (x = i + l; x < s; x += l)
      (v[0] = t[x]),
        (v[1] = t[x + 1]),
        (R = Jf(_, v)),
        R !== b
          ? (E && ((h[d++] = m), (h[d++] = y), (E = !1)),
            (h[d++] = v[0]),
            (h[d++] = v[1]))
          : R === me.INTERSECTING
            ? ((h[d++] = v[0]), (h[d++] = v[1]), (E = !1))
            : (E = !0),
        (m = v[0]),
        (y = v[1]),
        (b = R);
    return ((o && E) || x === i + l) && ((h[d++] = m), (h[d++] = y)), d;
  }
  drawCustomCoordinates_(t, i, s, l, o) {
    for (let c = 0, h = s.length; c < h; ++c) {
      const d = s[c],
        _ = this.appendFlatLineCoordinates(t, i, d, l, !1, !1);
      o.push(_), (i = d);
    }
    return i;
  }
  drawCustom(t, i, s, l, o) {
    this.beginGeometry(t, i, o);
    const c = t.getType(),
      h = t.getStride(),
      d = this.coordinates.length;
    let _, m, y, v, E;
    switch (c) {
      case "MultiPolygon":
        (_ = t.getOrientedFlatCoordinates()), (v = []);
        const x = t.getEndss();
        E = 0;
        for (let b = 0, R = x.length; b < R; ++b) {
          const A = [];
          (E = this.drawCustomCoordinates_(_, E, x[b], h, A)), v.push(A);
        }
        this.instructions.push([ht.CUSTOM, d, v, t, s, ld, o]),
          this.hitDetectionInstructions.push([
            ht.CUSTOM,
            d,
            v,
            t,
            l || s,
            ld,
            o,
          ]);
        break;
      case "Polygon":
      case "MultiLineString":
        (y = []),
          (_ =
            c == "Polygon"
              ? t.getOrientedFlatCoordinates()
              : t.getFlatCoordinates()),
          (E = this.drawCustomCoordinates_(_, 0, t.getEnds(), h, y)),
          this.instructions.push([ht.CUSTOM, d, y, t, s, Fa, o]),
          this.hitDetectionInstructions.push([
            ht.CUSTOM,
            d,
            y,
            t,
            l || s,
            Fa,
            o,
          ]);
        break;
      case "LineString":
      case "Circle":
        (_ = t.getFlatCoordinates()),
          (m = this.appendFlatLineCoordinates(_, 0, _.length, h, !1, !1)),
          this.instructions.push([ht.CUSTOM, d, m, t, s, fs, o]),
          this.hitDetectionInstructions.push([
            ht.CUSTOM,
            d,
            m,
            t,
            l || s,
            fs,
            o,
          ]);
        break;
      case "MultiPoint":
        (_ = t.getFlatCoordinates()),
          (m = this.appendFlatPointCoordinates(_, h)),
          m > d &&
            (this.instructions.push([ht.CUSTOM, d, m, t, s, fs, o]),
            this.hitDetectionInstructions.push([
              ht.CUSTOM,
              d,
              m,
              t,
              l || s,
              fs,
              o,
            ]));
        break;
      case "Point":
        (_ = t.getFlatCoordinates()),
          this.coordinates.push(_[0], _[1]),
          (m = this.coordinates.length),
          this.instructions.push([ht.CUSTOM, d, m, t, s, void 0, o]),
          this.hitDetectionInstructions.push([
            ht.CUSTOM,
            d,
            m,
            t,
            l || s,
            void 0,
            o,
          ]);
        break;
    }
    this.endGeometry(i);
  }
  beginGeometry(t, i, s) {
    (this.beginGeometryInstruction1_ = [ht.BEGIN_GEOMETRY, i, 0, t, s]),
      this.instructions.push(this.beginGeometryInstruction1_),
      (this.beginGeometryInstruction2_ = [ht.BEGIN_GEOMETRY, i, 0, t, s]),
      this.hitDetectionInstructions.push(this.beginGeometryInstruction2_);
  }
  finish() {
    return {
      instructions: this.instructions,
      hitDetectionInstructions: this.hitDetectionInstructions,
      coordinates: this.coordinates,
    };
  }
  reverseHitDetectionInstructions() {
    const t = this.hitDetectionInstructions;
    t.reverse();
    let i;
    const s = t.length;
    let l,
      o,
      c = -1;
    for (i = 0; i < s; ++i)
      (l = t[i]),
        (o = l[0]),
        o == ht.END_GEOMETRY
          ? (c = i)
          : o == ht.BEGIN_GEOMETRY &&
            ((l[2] = i), qE(this.hitDetectionInstructions, c, i), (c = -1));
  }
  fillStyleToState(t, i = {}) {
    if (t) {
      const s = t.getColor();
      (i.fillPatternScale =
        s && typeof s == "object" && "src" in s ? this.pixelRatio : 1),
        (i.fillStyle = tn(s || Ze));
    } else i.fillStyle = void 0;
    return i;
  }
  strokeStyleToState(t, i = {}) {
    if (t) {
      const s = t.getColor();
      i.strokeStyle = tn(s || ka);
      const l = t.getLineCap();
      i.lineCap = l !== void 0 ? l : pl;
      const o = t.getLineDash();
      i.lineDash = o ? o.slice() : On;
      const c = t.getLineDashOffset();
      i.lineDashOffset = c || Dn;
      const h = t.getLineJoin();
      i.lineJoin = h !== void 0 ? h : vl;
      const d = t.getWidth();
      i.lineWidth = d !== void 0 ? d : Ba;
      const _ = t.getMiterLimit();
      (i.miterLimit = _ !== void 0 ? _ : Ya),
        i.lineWidth > this.maxLineWidth &&
          ((this.maxLineWidth = i.lineWidth), (this.bufferedMaxExtent_ = null));
    } else
      (i.strokeStyle = void 0),
        (i.lineCap = void 0),
        (i.lineDash = null),
        (i.lineDashOffset = void 0),
        (i.lineJoin = void 0),
        (i.lineWidth = void 0),
        (i.miterLimit = void 0);
    return i;
  }
  setFillStrokeStyle(t, i) {
    const s = this.state;
    this.fillStyleToState(t, s), this.strokeStyleToState(i, s);
  }
  createFill(t) {
    const i = t.fillStyle,
      s = [ht.SET_FILL_STYLE, i];
    return typeof i != "string" && s.push(t.fillPatternScale), s;
  }
  applyStroke(t) {
    this.instructions.push(this.createStroke(t));
  }
  createStroke(t) {
    return [
      ht.SET_STROKE_STYLE,
      t.strokeStyle,
      t.lineWidth * this.pixelRatio,
      t.lineCap,
      t.lineJoin,
      t.miterLimit,
      t.lineDash ? this.applyPixelRatio(t.lineDash) : null,
      t.lineDashOffset * this.pixelRatio,
    ];
  }
  updateFillStyle(t, i) {
    const s = t.fillStyle;
    (typeof s != "string" || t.currentFillStyle != s) &&
      (s !== void 0 && this.instructions.push(i.call(this, t)),
      (t.currentFillStyle = s));
  }
  updateStrokeStyle(t, i) {
    const s = t.strokeStyle,
      l = t.lineCap,
      o = t.lineDash,
      c = t.lineDashOffset,
      h = t.lineJoin,
      d = t.lineWidth,
      _ = t.miterLimit;
    (t.currentStrokeStyle != s ||
      t.currentLineCap != l ||
      (o != t.currentLineDash && !Es(t.currentLineDash, o)) ||
      t.currentLineDashOffset != c ||
      t.currentLineJoin != h ||
      t.currentLineWidth != d ||
      t.currentMiterLimit != _) &&
      (s !== void 0 && i.call(this, t),
      (t.currentStrokeStyle = s),
      (t.currentLineCap = l),
      (t.currentLineDash = o),
      (t.currentLineDashOffset = c),
      (t.currentLineJoin = h),
      (t.currentLineWidth = d),
      (t.currentMiterLimit = _));
  }
  endGeometry(t) {
    (this.beginGeometryInstruction1_[2] = this.instructions.length),
      (this.beginGeometryInstruction1_ = null),
      (this.beginGeometryInstruction2_[2] =
        this.hitDetectionInstructions.length),
      (this.beginGeometryInstruction2_ = null);
    const i = [ht.END_GEOMETRY, t];
    this.instructions.push(i), this.hitDetectionInstructions.push(i);
  }
  getBufferedMaxExtent() {
    if (
      !this.bufferedMaxExtent_ &&
      ((this.bufferedMaxExtent_ = ip(this.maxExtent)), this.maxLineWidth > 0)
    ) {
      const t = (this.resolution * (this.maxLineWidth + 1)) / 2;
      vd(this.bufferedMaxExtent_, t, this.bufferedMaxExtent_);
    }
    return this.bufferedMaxExtent_;
  }
}
class s2 extends Ja {
  constructor(t, i, s, l) {
    super(t, i, s, l),
      (this.hitDetectionImage_ = null),
      (this.image_ = null),
      (this.imagePixelRatio_ = void 0),
      (this.anchorX_ = void 0),
      (this.anchorY_ = void 0),
      (this.height_ = void 0),
      (this.opacity_ = void 0),
      (this.originX_ = void 0),
      (this.originY_ = void 0),
      (this.rotateWithView_ = void 0),
      (this.rotation_ = void 0),
      (this.scale_ = void 0),
      (this.width_ = void 0),
      (this.declutterMode_ = void 0),
      (this.declutterImageWithText_ = void 0);
  }
  drawPoint(t, i, s) {
    if (
      !this.image_ ||
      (this.maxExtent && !fl(this.maxExtent, t.getFlatCoordinates()))
    )
      return;
    this.beginGeometry(t, i, s);
    const l = t.getFlatCoordinates(),
      o = t.getStride(),
      c = this.coordinates.length,
      h = this.appendFlatPointCoordinates(l, o);
    this.instructions.push([
      ht.DRAW_IMAGE,
      c,
      h,
      this.image_,
      this.anchorX_ * this.imagePixelRatio_,
      this.anchorY_ * this.imagePixelRatio_,
      Math.ceil(this.height_ * this.imagePixelRatio_),
      this.opacity_,
      this.originX_ * this.imagePixelRatio_,
      this.originY_ * this.imagePixelRatio_,
      this.rotateWithView_,
      this.rotation_,
      [
        (this.scale_[0] * this.pixelRatio) / this.imagePixelRatio_,
        (this.scale_[1] * this.pixelRatio) / this.imagePixelRatio_,
      ],
      Math.ceil(this.width_ * this.imagePixelRatio_),
      this.declutterMode_,
      this.declutterImageWithText_,
    ]),
      this.hitDetectionInstructions.push([
        ht.DRAW_IMAGE,
        c,
        h,
        this.hitDetectionImage_,
        this.anchorX_,
        this.anchorY_,
        this.height_,
        1,
        this.originX_,
        this.originY_,
        this.rotateWithView_,
        this.rotation_,
        this.scale_,
        this.width_,
        this.declutterMode_,
        this.declutterImageWithText_,
      ]),
      this.endGeometry(i);
  }
  drawMultiPoint(t, i, s) {
    if (!this.image_) return;
    this.beginGeometry(t, i, s);
    const l = t.getFlatCoordinates(),
      o = [];
    for (let d = 0, _ = l.length; d < _; d += t.getStride())
      (!this.maxExtent || fl(this.maxExtent, l.slice(d, d + 2))) &&
        o.push(l[d], l[d + 1]);
    const c = this.coordinates.length,
      h = this.appendFlatPointCoordinates(o, 2);
    this.instructions.push([
      ht.DRAW_IMAGE,
      c,
      h,
      this.image_,
      this.anchorX_ * this.imagePixelRatio_,
      this.anchorY_ * this.imagePixelRatio_,
      Math.ceil(this.height_ * this.imagePixelRatio_),
      this.opacity_,
      this.originX_ * this.imagePixelRatio_,
      this.originY_ * this.imagePixelRatio_,
      this.rotateWithView_,
      this.rotation_,
      [
        (this.scale_[0] * this.pixelRatio) / this.imagePixelRatio_,
        (this.scale_[1] * this.pixelRatio) / this.imagePixelRatio_,
      ],
      Math.ceil(this.width_ * this.imagePixelRatio_),
      this.declutterMode_,
      this.declutterImageWithText_,
    ]),
      this.hitDetectionInstructions.push([
        ht.DRAW_IMAGE,
        c,
        h,
        this.hitDetectionImage_,
        this.anchorX_,
        this.anchorY_,
        this.height_,
        1,
        this.originX_,
        this.originY_,
        this.rotateWithView_,
        this.rotation_,
        this.scale_,
        this.width_,
        this.declutterMode_,
        this.declutterImageWithText_,
      ]),
      this.endGeometry(i);
  }
  finish() {
    return (
      this.reverseHitDetectionInstructions(),
      (this.anchorX_ = void 0),
      (this.anchorY_ = void 0),
      (this.hitDetectionImage_ = null),
      (this.image_ = null),
      (this.imagePixelRatio_ = void 0),
      (this.height_ = void 0),
      (this.scale_ = void 0),
      (this.opacity_ = void 0),
      (this.originX_ = void 0),
      (this.originY_ = void 0),
      (this.rotateWithView_ = void 0),
      (this.rotation_ = void 0),
      (this.width_ = void 0),
      super.finish()
    );
  }
  setImageStyle(t, i) {
    const s = t.getAnchor(),
      l = t.getSize(),
      o = t.getOrigin();
    (this.imagePixelRatio_ = t.getPixelRatio(this.pixelRatio)),
      (this.anchorX_ = s[0]),
      (this.anchorY_ = s[1]),
      (this.hitDetectionImage_ = t.getHitDetectionImage()),
      (this.image_ = t.getImage(this.pixelRatio)),
      (this.height_ = l[1]),
      (this.opacity_ = t.getOpacity()),
      (this.originX_ = o[0]),
      (this.originY_ = o[1]),
      (this.rotateWithView_ = t.getRotateWithView()),
      (this.rotation_ = t.getRotation()),
      (this.scale_ = t.getScaleArray()),
      (this.width_ = l[0]),
      (this.declutterMode_ = t.getDeclutterMode()),
      (this.declutterImageWithText_ = i);
  }
}
class r2 extends Ja {
  constructor(t, i, s, l) {
    super(t, i, s, l);
  }
  drawFlatCoordinates_(t, i, s, l) {
    const o = this.coordinates.length,
      c = this.appendFlatLineCoordinates(t, i, s, l, !1, !1),
      h = [ht.MOVE_TO_LINE_TO, o, c];
    return this.instructions.push(h), this.hitDetectionInstructions.push(h), s;
  }
  drawLineString(t, i, s) {
    const l = this.state,
      o = l.strokeStyle,
      c = l.lineWidth;
    if (o === void 0 || c === void 0) return;
    this.updateStrokeStyle(l, this.applyStroke),
      this.beginGeometry(t, i, s),
      this.hitDetectionInstructions.push(
        [
          ht.SET_STROKE_STYLE,
          l.strokeStyle,
          l.lineWidth,
          l.lineCap,
          l.lineJoin,
          l.miterLimit,
          On,
          Dn,
        ],
        tr,
      );
    const h = t.getFlatCoordinates(),
      d = t.getStride();
    this.drawFlatCoordinates_(h, 0, h.length, d),
      this.hitDetectionInstructions.push(ds),
      this.endGeometry(i);
  }
  drawMultiLineString(t, i, s) {
    const l = this.state,
      o = l.strokeStyle,
      c = l.lineWidth;
    if (o === void 0 || c === void 0) return;
    this.updateStrokeStyle(l, this.applyStroke),
      this.beginGeometry(t, i, s),
      this.hitDetectionInstructions.push(
        [
          ht.SET_STROKE_STYLE,
          l.strokeStyle,
          l.lineWidth,
          l.lineCap,
          l.lineJoin,
          l.miterLimit,
          On,
          Dn,
        ],
        tr,
      );
    const h = t.getEnds(),
      d = t.getFlatCoordinates(),
      _ = t.getStride();
    let m = 0;
    for (let y = 0, v = h.length; y < v; ++y)
      m = this.drawFlatCoordinates_(d, m, h[y], _);
    this.hitDetectionInstructions.push(ds), this.endGeometry(i);
  }
  finish() {
    const t = this.state;
    return (
      t.lastStroke != null &&
        t.lastStroke != this.coordinates.length &&
        this.instructions.push(ds),
      this.reverseHitDetectionInstructions(),
      (this.state = null),
      super.finish()
    );
  }
  applyStroke(t) {
    t.lastStroke != null &&
      t.lastStroke != this.coordinates.length &&
      (this.instructions.push(ds), (t.lastStroke = this.coordinates.length)),
      (t.lastStroke = 0),
      super.applyStroke(t),
      this.instructions.push(tr);
  }
}
class Oy extends Ja {
  constructor(t, i, s, l) {
    super(t, i, s, l);
  }
  drawFlatCoordinatess_(t, i, s, l) {
    const o = this.state,
      c = o.fillStyle !== void 0,
      h = o.strokeStyle !== void 0,
      d = s.length;
    this.instructions.push(tr), this.hitDetectionInstructions.push(tr);
    for (let _ = 0; _ < d; ++_) {
      const m = s[_],
        y = this.coordinates.length,
        v = this.appendFlatLineCoordinates(t, i, m, l, !0, !h),
        E = [ht.MOVE_TO_LINE_TO, y, v];
      this.instructions.push(E),
        this.hitDetectionInstructions.push(E),
        h &&
          (this.instructions.push(My), this.hitDetectionInstructions.push(My)),
        (i = m);
    }
    return (
      c && (this.instructions.push(Eu), this.hitDetectionInstructions.push(Eu)),
      h && (this.instructions.push(ds), this.hitDetectionInstructions.push(ds)),
      i
    );
  }
  drawCircle(t, i, s) {
    const l = this.state,
      o = l.fillStyle,
      c = l.strokeStyle;
    if (o === void 0 && c === void 0) return;
    this.setFillStrokeStyles_(),
      this.beginGeometry(t, i, s),
      l.fillStyle !== void 0 &&
        this.hitDetectionInstructions.push([ht.SET_FILL_STYLE, Ze]),
      l.strokeStyle !== void 0 &&
        this.hitDetectionInstructions.push([
          ht.SET_STROKE_STYLE,
          l.strokeStyle,
          l.lineWidth,
          l.lineCap,
          l.lineJoin,
          l.miterLimit,
          On,
          Dn,
        ]);
    const h = t.getFlatCoordinates(),
      d = t.getStride(),
      _ = this.coordinates.length;
    this.appendFlatLineCoordinates(h, 0, h.length, d, !1, !1);
    const m = [ht.CIRCLE, _];
    this.instructions.push(tr, m),
      this.hitDetectionInstructions.push(tr, m),
      l.fillStyle !== void 0 &&
        (this.instructions.push(Eu), this.hitDetectionInstructions.push(Eu)),
      l.strokeStyle !== void 0 &&
        (this.instructions.push(ds), this.hitDetectionInstructions.push(ds)),
      this.endGeometry(i);
  }
  drawPolygon(t, i, s) {
    const l = this.state,
      o = l.fillStyle,
      c = l.strokeStyle;
    if (o === void 0 && c === void 0) return;
    this.setFillStrokeStyles_(),
      this.beginGeometry(t, i, s),
      l.fillStyle !== void 0 &&
        this.hitDetectionInstructions.push([ht.SET_FILL_STYLE, Ze]),
      l.strokeStyle !== void 0 &&
        this.hitDetectionInstructions.push([
          ht.SET_STROKE_STYLE,
          l.strokeStyle,
          l.lineWidth,
          l.lineCap,
          l.lineJoin,
          l.miterLimit,
          On,
          Dn,
        ]);
    const h = t.getEnds(),
      d = t.getOrientedFlatCoordinates(),
      _ = t.getStride();
    this.drawFlatCoordinatess_(d, 0, h, _), this.endGeometry(i);
  }
  drawMultiPolygon(t, i, s) {
    const l = this.state,
      o = l.fillStyle,
      c = l.strokeStyle;
    if (o === void 0 && c === void 0) return;
    this.setFillStrokeStyles_(),
      this.beginGeometry(t, i, s),
      l.fillStyle !== void 0 &&
        this.hitDetectionInstructions.push([ht.SET_FILL_STYLE, Ze]),
      l.strokeStyle !== void 0 &&
        this.hitDetectionInstructions.push([
          ht.SET_STROKE_STYLE,
          l.strokeStyle,
          l.lineWidth,
          l.lineCap,
          l.lineJoin,
          l.miterLimit,
          On,
          Dn,
        ]);
    const h = t.getEndss(),
      d = t.getOrientedFlatCoordinates(),
      _ = t.getStride();
    let m = 0;
    for (let y = 0, v = h.length; y < v; ++y)
      m = this.drawFlatCoordinatess_(d, m, h[y], _);
    this.endGeometry(i);
  }
  finish() {
    this.reverseHitDetectionInstructions(), (this.state = null);
    const t = this.tolerance;
    if (t !== 0) {
      const i = this.coordinates;
      for (let s = 0, l = i.length; s < l; ++s) i[s] = Ws(i[s], t);
    }
    return super.finish();
  }
  setFillStrokeStyles_() {
    const t = this.state;
    t.fillStyle !== void 0 && this.updateFillStyle(t, this.createFill),
      t.strokeStyle !== void 0 && this.updateStrokeStyle(t, this.applyStroke);
  }
}
function l2(r, t, i, s, l) {
  const o = [];
  let c = i,
    h = 0,
    d = t.slice(i, 2);
  for (; h < r && c + l < s; ) {
    const [_, m] = d.slice(-2),
      y = t[c + l],
      v = t[c + l + 1],
      E = Math.sqrt((y - _) * (y - _) + (v - m) * (v - m));
    if (((h += E), h >= r)) {
      const x = (r - h + E) / E,
        b = ri(_, y, x),
        R = ri(m, v, x);
      d.push(b, R), o.push(d), (d = [b, R]), h == r && (c += l), (h = 0);
    } else if (h < r) d.push(t[c + l], t[c + l + 1]), (c += l);
    else {
      const x = E - h,
        b = ri(_, y, x / E),
        R = ri(m, v, x / E);
      d.push(b, R), o.push(d), (d = [b, R]), (h = 0), (c += l);
    }
  }
  return h > 0 && o.push(d), o;
}
function a2(r, t, i, s, l) {
  let o = i,
    c = i,
    h = 0,
    d = 0,
    _ = i,
    m,
    y,
    v,
    E,
    x,
    b,
    R,
    A,
    O,
    G;
  for (y = i; y < s; y += l) {
    const z = t[y],
      D = t[y + 1];
    x !== void 0 &&
      ((O = z - x),
      (G = D - b),
      (E = Math.sqrt(O * O + G * G)),
      R !== void 0 &&
        ((d += v),
        (m = Math.acos((R * O + A * G) / (v * E))),
        m > r && (d > h && ((h = d), (o = _), (c = y)), (d = 0), (_ = y - l))),
      (v = E),
      (R = O),
      (A = G)),
      (x = z),
      (b = D);
  }
  return (d += E), d > h ? [_, y] : [o, c];
}
const Yu = {
  left: 0,
  center: 0.5,
  right: 1,
  top: 0,
  middle: 0.5,
  hanging: 0.2,
  alphabetic: 0.8,
  ideographic: 0.8,
  bottom: 1,
};
class o2 extends Ja {
  constructor(t, i, s, l) {
    super(t, i, s, l),
      (this.labels_ = null),
      (this.text_ = ""),
      (this.textOffsetX_ = 0),
      (this.textOffsetY_ = 0),
      (this.textRotateWithView_ = void 0),
      (this.textKeepUpright_ = void 0),
      (this.textRotation_ = 0),
      (this.textFillState_ = null),
      (this.fillStates = {}),
      (this.fillStates[Ze] = { fillStyle: Ze }),
      (this.textStrokeState_ = null),
      (this.strokeStates = {}),
      (this.textState_ = {}),
      (this.textStates = {}),
      (this.textKey_ = ""),
      (this.fillKey_ = ""),
      (this.strokeKey_ = ""),
      (this.declutterMode_ = void 0),
      (this.declutterImageWithText_ = void 0);
  }
  finish() {
    const t = super.finish();
    return (
      (t.textStates = this.textStates),
      (t.fillStates = this.fillStates),
      (t.strokeStates = this.strokeStates),
      t
    );
  }
  drawText(t, i, s) {
    const l = this.textFillState_,
      o = this.textStrokeState_,
      c = this.textState_;
    if (this.text_ === "" || !c || (!l && !o)) return;
    const h = this.coordinates;
    let d = h.length;
    const _ = t.getType();
    let m = null,
      y = t.getStride();
    if (
      c.placement === "line" &&
      (_ == "LineString" ||
        _ == "MultiLineString" ||
        _ == "Polygon" ||
        _ == "MultiPolygon")
    ) {
      if (!qe(this.maxExtent, t.getExtent())) return;
      let v;
      if (((m = t.getFlatCoordinates()), _ == "LineString")) v = [m.length];
      else if (_ == "MultiLineString") v = t.getEnds();
      else if (_ == "Polygon") v = t.getEnds().slice(0, 1);
      else if (_ == "MultiPolygon") {
        const R = t.getEndss();
        v = [];
        for (let A = 0, O = R.length; A < O; ++A) v.push(R[A][0]);
      }
      this.beginGeometry(t, i, s);
      const E = c.repeat,
        x = E ? void 0 : c.textAlign;
      let b = 0;
      for (let R = 0, A = v.length; R < A; ++R) {
        let O;
        E
          ? (O = l2(E * this.resolution, m, b, v[R], y))
          : (O = [m.slice(b, v[R])]);
        for (let G = 0, z = O.length; G < z; ++G) {
          const D = O[G];
          let j = 0,
            Q = D.length;
          if (x == null) {
            const F = a2(c.maxAngle, D, 0, D.length, 2);
            (j = F[0]), (Q = F[1]);
          }
          for (let F = j; F < Q; F += y) h.push(D[F], D[F + 1]);
          const Z = h.length;
          (b = v[R]), this.drawChars_(d, Z), (d = Z);
        }
      }
      this.endGeometry(i);
    } else {
      let v = c.overflow ? null : [];
      switch (_) {
        case "Point":
        case "MultiPoint":
          m = t.getFlatCoordinates();
          break;
        case "LineString":
          m = t.getFlatMidpoint();
          break;
        case "Circle":
          m = t.getCenter();
          break;
        case "MultiLineString":
          (m = t.getFlatMidpoints()), (y = 2);
          break;
        case "Polygon":
          (m = t.getFlatInteriorPoint()),
            c.overflow || v.push(m[2] / this.resolution),
            (y = 3);
          break;
        case "MultiPolygon":
          const z = t.getFlatInteriorPoints();
          m = [];
          for (let D = 0, j = z.length; D < j; D += 3)
            c.overflow || v.push(z[D + 2] / this.resolution),
              m.push(z[D], z[D + 1]);
          if (m.length === 0) return;
          y = 2;
          break;
      }
      const E = this.appendFlatPointCoordinates(m, y);
      if (E === d) return;
      if (v && (E - d) / 2 !== m.length / y) {
        let z = d / 2;
        v = v.filter((D, j) => {
          const Q =
            h[(z + j) * 2] === m[j * y] && h[(z + j) * 2 + 1] === m[j * y + 1];
          return Q || --z, Q;
        });
      }
      this.saveTextStates_();
      const x = c.backgroundFill
          ? this.createFill(this.fillStyleToState(c.backgroundFill))
          : null,
        b = c.backgroundStroke
          ? this.createStroke(this.strokeStyleToState(c.backgroundStroke))
          : null;
      this.beginGeometry(t, i, s);
      let R = c.padding;
      if (R != $s && (c.scale[0] < 0 || c.scale[1] < 0)) {
        let z = c.padding[0],
          D = c.padding[1],
          j = c.padding[2],
          Q = c.padding[3];
        c.scale[0] < 0 && ((D = -D), (Q = -Q)),
          c.scale[1] < 0 && ((z = -z), (j = -j)),
          (R = [z, D, j, Q]);
      }
      const A = this.pixelRatio;
      this.instructions.push([
        ht.DRAW_IMAGE,
        d,
        E,
        null,
        NaN,
        NaN,
        NaN,
        1,
        0,
        0,
        this.textRotateWithView_,
        this.textRotation_,
        [1, 1],
        NaN,
        this.declutterMode_,
        this.declutterImageWithText_,
        R == $s
          ? $s
          : R.map(function (z) {
              return z * A;
            }),
        x,
        b,
        this.text_,
        this.textKey_,
        this.strokeKey_,
        this.fillKey_,
        this.textOffsetX_,
        this.textOffsetY_,
        v,
      ]);
      const O = 1 / A,
        G = x ? x.slice(0) : null;
      G && (G[1] = Ze),
        this.hitDetectionInstructions.push([
          ht.DRAW_IMAGE,
          d,
          E,
          null,
          NaN,
          NaN,
          NaN,
          1,
          0,
          0,
          this.textRotateWithView_,
          this.textRotation_,
          [O, O],
          NaN,
          this.declutterMode_,
          this.declutterImageWithText_,
          R,
          G,
          b,
          this.text_,
          this.textKey_,
          this.strokeKey_,
          this.fillKey_ ? Ze : this.fillKey_,
          this.textOffsetX_,
          this.textOffsetY_,
          v,
        ]),
        this.endGeometry(i);
    }
  }
  saveTextStates_() {
    const t = this.textStrokeState_,
      i = this.textState_,
      s = this.textFillState_,
      l = this.strokeKey_;
    t &&
      (l in this.strokeStates ||
        (this.strokeStates[l] = {
          strokeStyle: t.strokeStyle,
          lineCap: t.lineCap,
          lineDashOffset: t.lineDashOffset,
          lineWidth: t.lineWidth,
          lineJoin: t.lineJoin,
          miterLimit: t.miterLimit,
          lineDash: t.lineDash,
        }));
    const o = this.textKey_;
    o in this.textStates ||
      (this.textStates[o] = {
        font: i.font,
        textAlign: i.textAlign || Pa,
        justify: i.justify,
        textBaseline: i.textBaseline || Nu,
        scale: i.scale,
      });
    const c = this.fillKey_;
    s &&
      (c in this.fillStates ||
        (this.fillStates[c] = { fillStyle: s.fillStyle }));
  }
  drawChars_(t, i) {
    const s = this.textStrokeState_,
      l = this.textState_,
      o = this.strokeKey_,
      c = this.textKey_,
      h = this.fillKey_;
    this.saveTextStates_();
    const d = this.pixelRatio,
      _ = Yu[l.textBaseline],
      m = this.textOffsetY_ * d,
      y = this.text_,
      v = s ? (s.lineWidth * Math.abs(l.scale[0])) / 2 : 0;
    this.instructions.push([
      ht.DRAW_CHARS,
      t,
      i,
      _,
      l.overflow,
      h,
      l.maxAngle,
      d,
      m,
      o,
      v * d,
      y,
      c,
      1,
      this.declutterMode_,
      this.textKeepUpright_,
    ]),
      this.hitDetectionInstructions.push([
        ht.DRAW_CHARS,
        t,
        i,
        _,
        l.overflow,
        h && Ze,
        l.maxAngle,
        d,
        m,
        o,
        v * d,
        y,
        c,
        1 / d,
        this.declutterMode_,
        this.textKeepUpright_,
      ]);
  }
  setTextStyle(t, i) {
    let s, l, o;
    if (!t) this.text_ = "";
    else {
      const c = t.getFill();
      c
        ? ((l = this.textFillState_),
          l || ((l = {}), (this.textFillState_ = l)),
          (l.fillStyle = tn(c.getColor() || Ze)))
        : ((l = null), (this.textFillState_ = l));
      const h = t.getStroke();
      if (!h) (o = null), (this.textStrokeState_ = o);
      else {
        (o = this.textStrokeState_),
          o || ((o = {}), (this.textStrokeState_ = o));
        const b = h.getLineDash(),
          R = h.getLineDashOffset(),
          A = h.getWidth(),
          O = h.getMiterLimit();
        (o.lineCap = h.getLineCap() || pl),
          (o.lineDash = b ? b.slice() : On),
          (o.lineDashOffset = R === void 0 ? Dn : R),
          (o.lineJoin = h.getLineJoin() || vl),
          (o.lineWidth = A === void 0 ? Ba : A),
          (o.miterLimit = O === void 0 ? Ya : O),
          (o.strokeStyle = tn(h.getColor() || ka));
      }
      s = this.textState_;
      const d = t.getFont() || Pp;
      Mx(d);
      const _ = t.getScaleArray();
      (s.overflow = t.getOverflow()),
        (s.font = d),
        (s.maxAngle = t.getMaxAngle()),
        (s.placement = t.getPlacement()),
        (s.textAlign = t.getTextAlign()),
        (s.repeat = t.getRepeat()),
        (s.justify = t.getJustify()),
        (s.textBaseline = t.getTextBaseline() || Nu),
        (s.backgroundFill = t.getBackgroundFill()),
        (s.backgroundStroke = t.getBackgroundStroke()),
        (s.padding = t.getPadding() || $s),
        (s.scale = _ === void 0 ? [1, 1] : _);
      const m = t.getOffsetX(),
        y = t.getOffsetY(),
        v = t.getRotateWithView(),
        E = t.getKeepUpright(),
        x = t.getRotation();
      (this.text_ = t.getText() || ""),
        (this.textOffsetX_ = m === void 0 ? 0 : m),
        (this.textOffsetY_ = y === void 0 ? 0 : y),
        (this.textRotateWithView_ = v === void 0 ? !1 : v),
        (this.textKeepUpright_ = E === void 0 ? !0 : E),
        (this.textRotation_ = x === void 0 ? 0 : x),
        (this.strokeKey_ = o
          ? (typeof o.strokeStyle == "string"
              ? o.strokeStyle
              : It(o.strokeStyle)) +
            o.lineCap +
            o.lineDashOffset +
            "|" +
            o.lineWidth +
            o.lineJoin +
            o.miterLimit +
            "[" +
            o.lineDash.join() +
            "]"
          : ""),
        (this.textKey_ =
          s.font +
          s.scale +
          (s.textAlign || "?") +
          (s.repeat || "?") +
          (s.justify || "?") +
          (s.textBaseline || "?")),
        (this.fillKey_ =
          l && l.fillStyle
            ? typeof l.fillStyle == "string"
              ? l.fillStyle
              : "|" + It(l.fillStyle)
            : "");
    }
    (this.declutterMode_ = t.getDeclutterMode()),
      (this.declutterImageWithText_ = i);
  }
}
const u2 = {
  Circle: Oy,
  Default: Ja,
  Image: s2,
  LineString: r2,
  Polygon: Oy,
  Text: o2,
};
class c2 {
  constructor(t, i, s, l) {
    (this.tolerance_ = t),
      (this.maxExtent_ = i),
      (this.pixelRatio_ = l),
      (this.resolution_ = s),
      (this.buildersByZIndex_ = {});
  }
  finish() {
    const t = {};
    for (const i in this.buildersByZIndex_) {
      t[i] = t[i] || {};
      const s = this.buildersByZIndex_[i];
      for (const l in s) {
        const o = s[l].finish();
        t[i][l] = o;
      }
    }
    return t;
  }
  getBuilder(t, i) {
    const s = t !== void 0 ? t.toString() : "0";
    let l = this.buildersByZIndex_[s];
    l === void 0 && ((l = {}), (this.buildersByZIndex_[s] = l));
    let o = l[i];
    if (o === void 0) {
      const c = u2[i];
      (o = new c(
        this.tolerance_,
        this.maxExtent_,
        this.resolution_,
        this.pixelRatio_,
      )),
        (l[i] = o);
    }
    return o;
  }
}
function h2(r, t, i, s, l, o, c, h, d, _, m, y, v = !0) {
  let E = r[t],
    x = r[t + 1],
    b = 0,
    R = 0,
    A = 0,
    O = 0;
  function G() {
    (b = E),
      (R = x),
      (t += s),
      (E = r[t]),
      (x = r[t + 1]),
      (O += A),
      (A = Math.sqrt((E - b) * (E - b) + (x - R) * (x - R)));
  }
  do G();
  while (t < i - s && O + A < o);
  let z = A === 0 ? 0 : (o - O) / A;
  const D = ri(b, E, z),
    j = ri(R, x, z),
    Q = t - s,
    Z = O,
    F = o + h * d(_, l, m);
  for (; t < i - s && O + A < F; ) G();
  z = A === 0 ? 0 : (F - O) / A;
  const V = ri(b, E, z),
    rt = ri(R, x, z);
  let it = !1;
  if (v)
    if (y) {
      const q = [D, j, V, rt];
      vp(q, 0, 4, 2, y, q, q), (it = q[0] > q[2]);
    } else it = D > V;
  const ot = Math.PI,
    st = [],
    nt = Q + s === t;
  (t = Q), (A = 0), (O = Z), (E = r[t]), (x = r[t + 1]);
  let Y;
  if (nt) {
    G(), (Y = Math.atan2(x - R, E - b)), it && (Y += Y > 0 ? -ot : ot);
    const q = (V + D) / 2,
      W = (rt + j) / 2;
    return (st[0] = [q, W, (F - o) / 2, Y, l]), st;
  }
  l = l.replace(/\n/g, " ");
  for (let q = 0, W = l.length; q < W; ) {
    G();
    let $ = Math.atan2(x - R, E - b);
    if ((it && ($ += $ > 0 ? -ot : ot), Y !== void 0)) {
      let lt = $ - Y;
      if (((lt += lt > ot ? -2 * ot : lt < -ot ? 2 * ot : 0), Math.abs(lt) > c))
        return null;
    }
    Y = $;
    const T = q;
    let X = 0;
    for (; q < W; ++q) {
      const lt = it ? W - q - 1 : q,
        ct = h * d(_, l[lt], m);
      if (t + s < i && O + A < o + X + ct / 2) break;
      X += ct;
    }
    if (q === T) continue;
    const U = it ? l.substring(W - T, W - q) : l.substring(T, q);
    z = A === 0 ? 0 : (o + X / 2 - O) / A;
    const tt = ri(b, E, z),
      J = ri(R, x, z);
    st.push([tt, J, X / 2, $, U]), (o += X);
  }
  return st;
}
class Jp {
  constructor() {
    X0(
      this,
      "pushMethodArgs_",
      (...t) => (this.instructions_[this.zIndex + this.offset_].push(t), this),
    );
    (this.instructions_ = []),
      (this.zIndex = 0),
      (this.offset_ = 0),
      (this.context_ = new Proxy(Iu(), {
        get: (t, i) => {
          if (typeof Iu()[i] == "function")
            return (
              this.instructions_[this.zIndex + this.offset_] ||
                (this.instructions_[this.zIndex + this.offset_] = []),
              this.instructions_[this.zIndex + this.offset_].push(i),
              this.pushMethodArgs_
            );
        },
        set: (t, i, s) => (
          this.instructions_[this.zIndex + this.offset_] ||
            (this.instructions_[this.zIndex + this.offset_] = []),
          this.instructions_[this.zIndex + this.offset_].push(i, s),
          !0
        ),
      }));
  }
  pushFunction(t) {
    this.instructions_[this.zIndex + this.offset_].push(t);
  }
  getContext() {
    return this.context_;
  }
  draw(t) {
    this.instructions_.forEach((i) => {
      for (let s = 0, l = i.length; s < l; ++s) {
        const o = i[s];
        if (typeof o == "function") {
          o(t);
          continue;
        }
        const c = i[++s];
        if (typeof t[o] == "function") t[o](...c);
        else {
          if (typeof c == "function") {
            t[o] = c(t);
            continue;
          }
          t[o] = c;
        }
      }
    });
  }
  clear() {
    (this.instructions_.length = 0), (this.zIndex = 0), (this.offset_ = 0);
  }
  offset() {
    (this.offset_ = this.instructions_.length), (this.zIndex = 0);
  }
}
const qr = Ri(),
  rs = [],
  Cn = [],
  Tn = [],
  ls = [];
function Dy(r) {
  return r[3].declutterBox;
}
const Ly = new RegExp("[֑-ࣿיִ-﷿ﹰ-ﻼࠀ-࿿-]");
function Ff(r, t) {
  return (
    t === "start"
      ? (t = Ly.test(r) ? "right" : "left")
      : t === "end" && (t = Ly.test(r) ? "left" : "right"),
    Yu[t]
  );
}
function f2(r, t, i) {
  return (
    i > 0 &&
      r.push(
        `
`,
        "",
      ),
    r.push(t, ""),
    r
  );
}
class d2 {
  constructor(t, i, s, l, o) {
    (this.overlaps = s),
      (this.pixelRatio = i),
      (this.resolution = t),
      this.alignAndScaleFill_,
      (this.instructions = l.instructions),
      (this.coordinates = l.coordinates),
      (this.coordinateCache_ = {}),
      (this.renderedTransform_ = Fi()),
      (this.hitDetectionInstructions = l.hitDetectionInstructions),
      (this.pixelCoordinates_ = null),
      (this.viewRotation_ = 0),
      (this.fillStates = l.fillStates || {}),
      (this.strokeStates = l.strokeStates || {}),
      (this.textStates = l.textStates || {}),
      (this.widths_ = {}),
      (this.labels_ = {}),
      (this.zIndexContext_ = o ? new Jp() : null);
  }
  getZIndexContext() {
    return this.zIndexContext_;
  }
  createLabel(t, i, s, l) {
    const o = t + i + s + l;
    if (this.labels_[o]) return this.labels_[o];
    const c = l ? this.strokeStates[l] : null,
      h = s ? this.fillStates[s] : null,
      d = this.textStates[i],
      _ = this.pixelRatio,
      m = [d.scale[0] * _, d.scale[1] * _],
      y = d.justify
        ? Yu[d.justify]
        : Ff(Array.isArray(t) ? t[0] : t, d.textAlign || Pa),
      v = l && c.lineWidth ? c.lineWidth : 0,
      E = Array.isArray(t)
        ? t
        : String(t)
            .split(
              `
`,
            )
            .reduce(f2, []),
      { width: x, height: b, widths: R, heights: A, lineWidths: O } = Dx(d, E),
      G = x + v,
      z = [],
      D = (G + 2) * m[0],
      j = (b + v) * m[1],
      Q = {
        width: D < 0 ? Math.floor(D) : Math.ceil(D),
        height: j < 0 ? Math.floor(j) : Math.ceil(j),
        contextInstructions: z,
      };
    (m[0] != 1 || m[1] != 1) && z.push("scale", m),
      l &&
        (z.push("strokeStyle", c.strokeStyle),
        z.push("lineWidth", v),
        z.push("lineCap", c.lineCap),
        z.push("lineJoin", c.lineJoin),
        z.push("miterLimit", c.miterLimit),
        z.push("setLineDash", [c.lineDash]),
        z.push("lineDashOffset", c.lineDashOffset)),
      s && z.push("fillStyle", h.fillStyle),
      z.push("textBaseline", "middle"),
      z.push("textAlign", "center");
    const Z = 0.5 - y;
    let F = y * G + Z * v;
    const V = [],
      rt = [];
    let it = 0,
      ot = 0,
      st = 0,
      nt = 0,
      Y;
    for (let q = 0, W = E.length; q < W; q += 2) {
      const $ = E[q];
      if (
        $ ===
        `
`
      ) {
        (ot += it), (it = 0), (F = y * G + Z * v), ++nt;
        continue;
      }
      const T = E[q + 1] || d.font;
      T !== Y && (l && V.push("font", T), s && rt.push("font", T), (Y = T)),
        (it = Math.max(it, A[st]));
      const X = [$, F + Z * R[st] + y * (R[st] - O[nt]), 0.5 * (v + it) + ot];
      (F += R[st]),
        l && V.push("strokeText", X),
        s && rt.push("fillText", X),
        ++st;
    }
    return (
      Array.prototype.push.apply(z, V),
      Array.prototype.push.apply(z, rt),
      (this.labels_[o] = Q),
      Q
    );
  }
  replayTextBackground_(t, i, s, l, o, c, h) {
    t.beginPath(),
      t.moveTo.apply(t, i),
      t.lineTo.apply(t, s),
      t.lineTo.apply(t, l),
      t.lineTo.apply(t, o),
      t.lineTo.apply(t, i),
      c &&
        ((this.alignAndScaleFill_ = c[2]), (t.fillStyle = c[1]), this.fill_(t)),
      h && (this.setStrokeStyle_(t, h), t.stroke());
  }
  calculateImageOrLabelDimensions_(
    t,
    i,
    s,
    l,
    o,
    c,
    h,
    d,
    _,
    m,
    y,
    v,
    E,
    x,
    b,
    R,
  ) {
    (h *= v[0]), (d *= v[1]);
    let A = s - h,
      O = l - d;
    const G = o + _ > t ? t - _ : o,
      z = c + m > i ? i - m : c,
      D = x[3] + G * v[0] + x[1],
      j = x[0] + z * v[1] + x[2],
      Q = A - x[3],
      Z = O - x[0];
    (b || y !== 0) &&
      ((rs[0] = Q),
      (ls[0] = Q),
      (rs[1] = Z),
      (Cn[1] = Z),
      (Cn[0] = Q + D),
      (Tn[0] = Cn[0]),
      (Tn[1] = Z + j),
      (ls[1] = Tn[1]));
    let F;
    return (
      y !== 0
        ? ((F = zn(Fi(), s, l, 1, 1, y, -s, -l)),
          ye(F, rs),
          ye(F, Cn),
          ye(F, Tn),
          ye(F, ls),
          Ln(
            Math.min(rs[0], Cn[0], Tn[0], ls[0]),
            Math.min(rs[1], Cn[1], Tn[1], ls[1]),
            Math.max(rs[0], Cn[0], Tn[0], ls[0]),
            Math.max(rs[1], Cn[1], Tn[1], ls[1]),
            qr,
          ))
        : Ln(
            Math.min(Q, Q + D),
            Math.min(Z, Z + j),
            Math.max(Q, Q + D),
            Math.max(Z, Z + j),
            qr,
          ),
      E && ((A = Math.round(A)), (O = Math.round(O))),
      {
        drawImageX: A,
        drawImageY: O,
        drawImageW: G,
        drawImageH: z,
        originX: _,
        originY: m,
        declutterBox: {
          minX: qr[0],
          minY: qr[1],
          maxX: qr[2],
          maxY: qr[3],
          value: R,
        },
        canvasTransform: F,
        scale: v,
      }
    );
  }
  replayImageOrLabel_(t, i, s, l, o, c, h) {
    const d = !!(c || h),
      _ = l.declutterBox,
      m = h ? (h[2] * l.scale[0]) / 2 : 0;
    return (
      _.minX - m <= i[0] &&
        _.maxX + m >= 0 &&
        _.minY - m <= i[1] &&
        _.maxY + m >= 0 &&
        (d && this.replayTextBackground_(t, rs, Cn, Tn, ls, c, h),
        Lx(
          t,
          l.canvasTransform,
          o,
          s,
          l.originX,
          l.originY,
          l.drawImageW,
          l.drawImageH,
          l.drawImageX,
          l.drawImageY,
          l.scale,
        )),
      !0
    );
  }
  fill_(t) {
    const i = this.alignAndScaleFill_;
    if (i) {
      const s = ye(this.renderedTransform_, [0, 0]),
        l = 512 * this.pixelRatio;
      t.save(),
        t.translate(s[0] % l, s[1] % l),
        i !== 1 && t.scale(i, i),
        t.rotate(this.viewRotation_);
    }
    t.fill(), i && t.restore();
  }
  setStrokeStyle_(t, i) {
    (t.strokeStyle = i[1]),
      (t.lineWidth = i[2]),
      (t.lineCap = i[3]),
      (t.lineJoin = i[4]),
      (t.miterLimit = i[5]),
      (t.lineDashOffset = i[7]),
      t.setLineDash(i[6]);
  }
  drawLabelWithPointPlacement_(t, i, s, l) {
    const o = this.textStates[i],
      c = this.createLabel(t, i, l, s),
      h = this.strokeStates[s],
      d = this.pixelRatio,
      _ = Ff(Array.isArray(t) ? t[0] : t, o.textAlign || Pa),
      m = Yu[o.textBaseline || Nu],
      y = h && h.lineWidth ? h.lineWidth : 0,
      v = c.width / d - 2 * o.scale[0],
      E = _ * v + 2 * (0.5 - _) * y,
      x = (m * c.height) / d + 2 * (0.5 - m) * y;
    return { label: c, anchorX: E, anchorY: x };
  }
  execute_(t, i, s, l, o, c, h, d) {
    const _ = this.zIndexContext_;
    let m;
    this.pixelCoordinates_ && Es(s, this.renderedTransform_)
      ? (m = this.pixelCoordinates_)
      : (this.pixelCoordinates_ || (this.pixelCoordinates_ = []),
        (m = _s(
          this.coordinates,
          0,
          this.coordinates.length,
          2,
          s,
          this.pixelCoordinates_,
        )),
        HS(this.renderedTransform_, s));
    let y = 0;
    const v = l.length;
    let E = 0,
      x,
      b,
      R,
      A,
      O,
      G,
      z,
      D,
      j,
      Q,
      Z,
      F,
      V,
      rt = 0,
      it = 0;
    const ot = this.coordinateCache_,
      st = this.viewRotation_,
      nt = Math.round(Math.atan2(-s[1], s[0]) * 1e12) / 1e12,
      Y = {
        context: t,
        pixelRatio: this.pixelRatio,
        resolution: this.resolution,
        rotation: st,
      },
      q = this.instructions != l || this.overlaps ? 0 : 200;
    let W, $, T, X;
    for (; y < v; ) {
      const U = l[y];
      switch (U[0]) {
        case ht.BEGIN_GEOMETRY:
          (W = U[1]),
            (X = U[3]),
            W.getGeometry()
              ? h !== void 0 && !qe(h, X.getExtent())
                ? (y = U[2] + 1)
                : ++y
              : (y = U[2]),
            _ && (_.zIndex = U[4]);
          break;
        case ht.BEGIN_PATH:
          rt > q && (this.fill_(t), (rt = 0)),
            it > q && (t.stroke(), (it = 0)),
            !rt && !it && (t.beginPath(), (O = NaN), (G = NaN)),
            ++y;
          break;
        case ht.CIRCLE:
          E = U[1];
          const J = m[E],
            lt = m[E + 1],
            ct = m[E + 2],
            Nt = m[E + 3],
            mt = ct - J,
            Ut = Nt - lt,
            vt = Math.sqrt(mt * mt + Ut * Ut);
          t.moveTo(J + vt, lt), t.arc(J, lt, vt, 0, 2 * Math.PI, !0), ++y;
          break;
        case ht.CLOSE_PATH:
          t.closePath(), ++y;
          break;
        case ht.CUSTOM:
          (E = U[1]), (x = U[2]);
          const Ie = U[3],
            Yi = U[4],
            Qe = U[5];
          (Y.geometry = Ie), (Y.feature = W), y in ot || (ot[y] = []);
          const Je = ot[y];
          Qe
            ? Qe(m, E, x, 2, Je)
            : ((Je[0] = m[E]), (Je[1] = m[E + 1]), (Je.length = 2)),
            _ && (_.zIndex = U[6]),
            Yi(Je, Y),
            ++y;
          break;
        case ht.DRAW_IMAGE:
          (E = U[1]), (x = U[2]), (j = U[3]), (b = U[4]), (R = U[5]);
          let ki = U[6];
          const ve = U[7],
            ke = U[8],
            Ai = U[9],
            wi = U[10];
          let Pi = U[11];
          const nn = U[12];
          let Mi = U[13];
          A = U[14] || "declutter";
          const sn = U[15];
          if (!j && U.length >= 20) {
            (Q = U[19]), (Z = U[20]), (F = U[21]), (V = U[22]);
            const ce = this.drawLabelWithPointPlacement_(Q, Z, F, V);
            (j = ce.label), (U[3] = j);
            const rn = U[23];
            (b = (ce.anchorX - rn) * this.pixelRatio), (U[4] = b);
            const Ne = U[24];
            (R = (ce.anchorY - Ne) * this.pixelRatio),
              (U[5] = R),
              (ki = j.height),
              (U[6] = ki),
              (Mi = j.width),
              (U[13] = Mi);
          }
          let kt;
          U.length > 25 && (kt = U[25]);
          let Rl, Ss, xs;
          U.length > 17
            ? ((Rl = U[16]), (Ss = U[17]), (xs = U[18]))
            : ((Rl = $s), (Ss = null), (xs = null)),
            wi && nt ? (Pi += st) : !wi && !nt && (Pi -= st);
          let cr = 0;
          for (; E < x; E += 2) {
            if (kt && kt[cr++] < Mi / this.pixelRatio) continue;
            const ce = this.calculateImageOrLabelDimensions_(
                j.width,
                j.height,
                m[E],
                m[E + 1],
                Mi,
                ki,
                b,
                R,
                ke,
                Ai,
                Pi,
                nn,
                o,
                Rl,
                !!Ss || !!xs,
                W,
              ),
              rn = [t, i, j, ce, ve, Ss, xs];
            if (d) {
              let Ne, $e, be;
              if (sn) {
                const Zt = x - E;
                if (!sn[Zt]) {
                  sn[Zt] = { args: rn, declutterMode: A };
                  continue;
                }
                const he = sn[Zt];
                (Ne = he.args),
                  ($e = he.declutterMode),
                  delete sn[Zt],
                  (be = Dy(Ne));
              }
              let Ge, Oi;
              if (
                (Ne && ($e !== "declutter" || !d.collides(be)) && (Ge = !0),
                (A !== "declutter" || !d.collides(ce.declutterBox)) &&
                  (Oi = !0),
                $e === "declutter" && A === "declutter")
              ) {
                const Zt = Ge && Oi;
                (Ge = Zt), (Oi = Zt);
              }
              Ge &&
                ($e !== "none" && d.insert(be),
                this.replayImageOrLabel_.apply(this, Ne)),
                Oi &&
                  (A !== "none" && d.insert(ce.declutterBox),
                  this.replayImageOrLabel_.apply(this, rn));
            } else this.replayImageOrLabel_.apply(this, rn);
          }
          ++y;
          break;
        case ht.DRAW_CHARS:
          const io = U[1],
            bl = U[2],
            Al = U[3],
            _c = U[4];
          V = U[5];
          const Cs = U[6],
            Te = U[7],
            no = U[8];
          F = U[9];
          const ai = U[10];
          (Q = U[11]), (Z = U[12]);
          const Re = [U[13], U[13]];
          A = U[14] || "declutter";
          const mc = U[15],
            wl = this.textStates[Z],
            Ts = wl.font,
            Bi = [wl.scale[0] * Te, wl.scale[1] * Te];
          let Hi;
          Ts in this.widths_
            ? (Hi = this.widths_[Ts])
            : ((Hi = {}), (this.widths_[Ts] = Hi));
          const ji = Op(m, io, bl, 2),
            Rs = Math.abs(Bi[0]) * vy(Ts, Q, Hi);
          if (_c || Rs <= ji) {
            const ce = this.textStates[Z].textAlign,
              rn = (ji - Rs) * Ff(Q, ce),
              Ne = h2(
                m,
                io,
                bl,
                2,
                Q,
                rn,
                Cs,
                Math.abs(Bi[0]),
                vy,
                Ts,
                Hi,
                nt ? 0 : this.viewRotation_,
                mc,
              );
            t: if (Ne) {
              const $e = [];
              let be, Ge, Oi, Zt, he;
              if (F)
                for (be = 0, Ge = Ne.length; be < Ge; ++be) {
                  (he = Ne[be]),
                    (Oi = he[4]),
                    (Zt = this.createLabel(Oi, Z, "", F)),
                    (b = he[2] + (Bi[0] < 0 ? -ai : ai)),
                    (R =
                      Al * Zt.height +
                      ((0.5 - Al) * 2 * ai * Bi[1]) / Bi[0] -
                      no);
                  const oi = this.calculateImageOrLabelDimensions_(
                    Zt.width,
                    Zt.height,
                    he[0],
                    he[1],
                    Zt.width,
                    Zt.height,
                    b,
                    R,
                    0,
                    0,
                    he[3],
                    Re,
                    !1,
                    $s,
                    !1,
                    W,
                  );
                  if (d && A === "declutter" && d.collides(oi.declutterBox))
                    break t;
                  $e.push([t, i, Zt, oi, 1, null, null]);
                }
              if (V)
                for (be = 0, Ge = Ne.length; be < Ge; ++be) {
                  (he = Ne[be]),
                    (Oi = he[4]),
                    (Zt = this.createLabel(Oi, Z, V, "")),
                    (b = he[2]),
                    (R = Al * Zt.height - no);
                  const oi = this.calculateImageOrLabelDimensions_(
                    Zt.width,
                    Zt.height,
                    he[0],
                    he[1],
                    Zt.width,
                    Zt.height,
                    b,
                    R,
                    0,
                    0,
                    he[3],
                    Re,
                    !1,
                    $s,
                    !1,
                    W,
                  );
                  if (d && A === "declutter" && d.collides(oi.declutterBox))
                    break t;
                  $e.push([t, i, Zt, oi, 1, null, null]);
                }
              d && A !== "none" && d.load($e.map(Dy));
              for (let oi = 0, so = $e.length; oi < so; ++oi)
                this.replayImageOrLabel_.apply(this, $e[oi]);
            }
          }
          ++y;
          break;
        case ht.END_GEOMETRY:
          if (c !== void 0) {
            W = U[1];
            const ce = c(W, X, A);
            if (ce) return ce;
          }
          ++y;
          break;
        case ht.FILL:
          q ? rt++ : this.fill_(t), ++y;
          break;
        case ht.MOVE_TO_LINE_TO:
          for (
            E = U[1],
              x = U[2],
              $ = m[E],
              T = m[E + 1],
              t.moveTo($, T),
              O = ($ + 0.5) | 0,
              G = (T + 0.5) | 0,
              E += 2;
            E < x;
            E += 2
          )
            ($ = m[E]),
              (T = m[E + 1]),
              (z = ($ + 0.5) | 0),
              (D = (T + 0.5) | 0),
              (E == x - 2 || z !== O || D !== G) &&
                (t.lineTo($, T), (O = z), (G = D));
          ++y;
          break;
        case ht.SET_FILL_STYLE:
          (this.alignAndScaleFill_ = U[2]),
            rt && (this.fill_(t), (rt = 0), it && (t.stroke(), (it = 0))),
            (t.fillStyle = U[1]),
            ++y;
          break;
        case ht.SET_STROKE_STYLE:
          it && (t.stroke(), (it = 0)), this.setStrokeStyle_(t, U), ++y;
          break;
        case ht.STROKE:
          q ? it++ : t.stroke(), ++y;
          break;
        default:
          ++y;
          break;
      }
    }
    rt && this.fill_(t), it && t.stroke();
  }
  execute(t, i, s, l, o, c) {
    (this.viewRotation_ = l),
      this.execute_(t, i, s, this.instructions, o, void 0, void 0, c);
  }
  executeHitDetection(t, i, s, l, o) {
    return (
      (this.viewRotation_ = s),
      this.execute_(
        t,
        [t.canvas.width, t.canvas.height],
        i,
        this.hitDetectionInstructions,
        !0,
        l,
        o,
      )
    );
  }
}
const rl = ["Polygon", "Circle", "LineString", "Image", "Text", "Default"],
  $p = ["Image", "Text"],
  g2 = rl.filter((r) => !$p.includes(r));
class _2 {
  constructor(t, i, s, l, o, c, h) {
    (this.maxExtent_ = t),
      (this.overlaps_ = l),
      (this.pixelRatio_ = s),
      (this.resolution_ = i),
      (this.renderBuffer_ = c),
      (this.executorsByZIndex_ = {}),
      (this.hitDetectionContext_ = null),
      (this.hitDetectionTransform_ = Fi()),
      (this.renderedContext_ = null),
      (this.deferredZIndexContexts_ = {}),
      this.createExecutors_(o, h);
  }
  clip(t, i) {
    const s = this.getClipCoords(i);
    t.beginPath(),
      t.moveTo(s[0], s[1]),
      t.lineTo(s[2], s[3]),
      t.lineTo(s[4], s[5]),
      t.lineTo(s[6], s[7]),
      t.clip();
  }
  createExecutors_(t, i) {
    for (const s in t) {
      let l = this.executorsByZIndex_[s];
      l === void 0 && ((l = {}), (this.executorsByZIndex_[s] = l));
      const o = t[s];
      for (const c in o) {
        const h = o[c];
        l[c] = new d2(this.resolution_, this.pixelRatio_, this.overlaps_, h, i);
      }
    }
  }
  hasExecutors(t) {
    for (const i in this.executorsByZIndex_) {
      const s = this.executorsByZIndex_[i];
      for (let l = 0, o = t.length; l < o; ++l) if (t[l] in s) return !0;
    }
    return !1;
  }
  forEachFeatureAtCoordinate(t, i, s, l, o, c) {
    l = Math.round(l);
    const h = l * 2 + 1,
      d = zn(
        this.hitDetectionTransform_,
        l + 0.5,
        l + 0.5,
        1 / i,
        -1 / i,
        -s,
        -t[0],
        -t[1],
      ),
      _ = !this.hitDetectionContext_;
    _ &&
      (this.hitDetectionContext_ = pe(h, h, void 0, {
        willReadFrequently: !0,
      }));
    const m = this.hitDetectionContext_;
    m.canvas.width !== h || m.canvas.height !== h
      ? ((m.canvas.width = h), (m.canvas.height = h))
      : _ || m.clearRect(0, 0, h, h);
    let y;
    this.renderBuffer_ !== void 0 &&
      ((y = Ri()), za(y, t), vd(y, i * (this.renderBuffer_ + l), y));
    const v = m2(l);
    let E;
    function x(D, j, Q) {
      const Z = m.getImageData(0, 0, h, h).data;
      for (let F = 0, V = v.length; F < V; F++)
        if (Z[v[F]] > 0) {
          if (
            !c ||
            Q === "none" ||
            (E !== "Image" && E !== "Text") ||
            c.includes(D)
          ) {
            const rt = (v[F] - 3) / 4,
              it = l - (rt % h),
              ot = l - ((rt / h) | 0),
              st = o(D, j, it * it + ot * ot);
            if (st) return st;
          }
          m.clearRect(0, 0, h, h);
          break;
        }
    }
    const b = Object.keys(this.executorsByZIndex_).map(Number);
    b.sort(Mn);
    let R, A, O, G, z;
    for (R = b.length - 1; R >= 0; --R) {
      const D = b[R].toString();
      for (O = this.executorsByZIndex_[D], A = rl.length - 1; A >= 0; --A)
        if (
          ((E = rl[A]),
          (G = O[E]),
          G !== void 0 && ((z = G.executeHitDetection(m, d, s, x, y)), z))
        )
          return z;
    }
  }
  getClipCoords(t) {
    const i = this.maxExtent_;
    if (!i) return null;
    const s = i[0],
      l = i[1],
      o = i[2],
      c = i[3],
      h = [s, l, s, c, o, c, o, l];
    return _s(h, 0, 8, 2, t, h), h;
  }
  isEmpty() {
    return nr(this.executorsByZIndex_);
  }
  execute(t, i, s, l, o, c, h) {
    const d = Object.keys(this.executorsByZIndex_).map(Number);
    d.sort(h ? KE : Mn), (c = c || rl);
    const _ = rl.length;
    for (let m = 0, y = d.length; m < y; ++m) {
      const v = d[m].toString(),
        E = this.executorsByZIndex_[v];
      for (let x = 0, b = c.length; x < b; ++x) {
        const R = c[x],
          A = E[R];
        if (A !== void 0) {
          const O = h === null ? void 0 : A.getZIndexContext(),
            G = O ? O.getContext() : t,
            z = this.maxExtent_ && R !== "Image" && R !== "Text";
          if (
            (z && (G.save(), this.clip(G, s)),
            !O || R === "Text" || R === "Image"
              ? A.execute(G, i, s, l, o, h)
              : O.pushFunction((D) => A.execute(D, i, s, l, o, h)),
            z && G.restore(),
            O)
          ) {
            O.offset();
            const D = d[m] * _ + x;
            this.deferredZIndexContexts_[D] ||
              (this.deferredZIndexContexts_[D] = []),
              this.deferredZIndexContexts_[D].push(O);
          }
        }
      }
    }
    this.renderedContext_ = t;
  }
  getDeferredZIndexContexts() {
    return this.deferredZIndexContexts_;
  }
  getRenderedContext() {
    return this.renderedContext_;
  }
  renderDeferred() {
    const t = this.deferredZIndexContexts_,
      i = Object.keys(t).map(Number).sort(Mn);
    for (let s = 0, l = i.length; s < l; ++s)
      t[i[s]].forEach((o) => {
        o.draw(this.renderedContext_), o.clear();
      }),
        (t[i[s]].length = 0);
  }
}
const Uf = {};
function m2(r) {
  if (Uf[r] !== void 0) return Uf[r];
  const t = r * 2 + 1,
    i = r * r,
    s = new Array(i + 1);
  for (let o = 0; o <= r; ++o)
    for (let c = 0; c <= r; ++c) {
      const h = o * o + c * c;
      if (h > i) break;
      let d = s[h];
      d || ((d = []), (s[h] = d)),
        d.push(((r + o) * t + (r + c)) * 4 + 3),
        o > 0 && d.push(((r - o) * t + (r + c)) * 4 + 3),
        c > 0 &&
          (d.push(((r + o) * t + (r - c)) * 4 + 3),
          o > 0 && d.push(((r - o) * t + (r - c)) * 4 + 3));
    }
  const l = [];
  for (let o = 0, c = s.length; o < c; ++o) s[o] && l.push(...s[o]);
  return (Uf[r] = l), l;
}
function zy(r, t, i, s) {
  return i !== void 0 && s !== void 0
    ? [i / r, s / t]
    : i !== void 0
      ? i / r
      : s !== void 0
        ? s / t
        : 1;
}
class hc extends ac {
  constructor(t) {
    t = t || {};
    const i = t.opacity !== void 0 ? t.opacity : 1,
      s = t.rotation !== void 0 ? t.rotation : 0,
      l = t.scale !== void 0 ? t.scale : 1,
      o = t.rotateWithView !== void 0 ? t.rotateWithView : !1;
    super({
      opacity: i,
      rotation: s,
      scale: l,
      displacement: t.displacement !== void 0 ? t.displacement : [0, 0],
      rotateWithView: o,
      declutterMode: t.declutterMode,
    }),
      (this.anchor_ = t.anchor !== void 0 ? t.anchor : [0.5, 0.5]),
      (this.normalizedAnchor_ = null),
      (this.anchorOrigin_ =
        t.anchorOrigin !== void 0 ? t.anchorOrigin : "top-left"),
      (this.anchorXUnits_ =
        t.anchorXUnits !== void 0 ? t.anchorXUnits : "fraction"),
      (this.anchorYUnits_ =
        t.anchorYUnits !== void 0 ? t.anchorYUnits : "fraction"),
      (this.crossOrigin_ = t.crossOrigin !== void 0 ? t.crossOrigin : null);
    const c = t.img !== void 0 ? t.img : null;
    let h = t.src;
    Lt(
      !(h !== void 0 && c),
      "`image` and `src` cannot be provided at the same time",
    ),
      (h === void 0 || h.length === 0) && c && (h = c.src || It(c)),
      Lt(
        h !== void 0 && h.length > 0,
        "A defined and non-empty `src` or `image` must be provided",
      ),
      Lt(
        !((t.width !== void 0 || t.height !== void 0) && t.scale !== void 0),
        "`width` or `height` cannot be provided together with `scale`",
      );
    let d;
    if (
      (t.src !== void 0
        ? (d = xt.IDLE)
        : c !== void 0 &&
          ("complete" in c
            ? c.complete
              ? (d = c.src ? xt.LOADED : xt.IDLE)
              : (d = xt.LOADING)
            : (d = xt.LOADED)),
      (this.color_ = t.color !== void 0 ? yl(t.color) : null),
      (this.iconImage_ = Bd(c, h, this.crossOrigin_, d, this.color_)),
      (this.offset_ = t.offset !== void 0 ? t.offset : [0, 0]),
      (this.offsetOrigin_ =
        t.offsetOrigin !== void 0 ? t.offsetOrigin : "top-left"),
      (this.origin_ = null),
      (this.size_ = t.size !== void 0 ? t.size : null),
      this.initialOptions_,
      t.width !== void 0 || t.height !== void 0)
    ) {
      let _, m;
      if (t.size) [_, m] = t.size;
      else {
        const y = this.getImage(1);
        if (y.width && y.height) (_ = y.width), (m = y.height);
        else if (y instanceof HTMLImageElement) {
          this.initialOptions_ = t;
          const v = () => {
            if ((this.unlistenImageChange(v), !this.initialOptions_)) return;
            const E = this.iconImage_.getSize();
            this.setScale(zy(E[0], E[1], t.width, t.height));
          };
          this.listenImageChange(v);
          return;
        }
      }
      _ !== void 0 && this.setScale(zy(_, m, t.width, t.height));
    }
  }
  clone() {
    let t, i, s;
    return (
      this.initialOptions_
        ? ((i = this.initialOptions_.width), (s = this.initialOptions_.height))
        : ((t = this.getScale()), (t = Array.isArray(t) ? t.slice() : t)),
      new hc({
        anchor: this.anchor_.slice(),
        anchorOrigin: this.anchorOrigin_,
        anchorXUnits: this.anchorXUnits_,
        anchorYUnits: this.anchorYUnits_,
        color:
          this.color_ && this.color_.slice
            ? this.color_.slice()
            : this.color_ || void 0,
        crossOrigin: this.crossOrigin_,
        offset: this.offset_.slice(),
        offsetOrigin: this.offsetOrigin_,
        opacity: this.getOpacity(),
        rotateWithView: this.getRotateWithView(),
        rotation: this.getRotation(),
        scale: t,
        width: i,
        height: s,
        size: this.size_ !== null ? this.size_.slice() : void 0,
        src: this.getSrc(),
        displacement: this.getDisplacement().slice(),
        declutterMode: this.getDeclutterMode(),
      })
    );
  }
  getAnchor() {
    let t = this.normalizedAnchor_;
    if (!t) {
      t = this.anchor_;
      const l = this.getSize();
      if (
        this.anchorXUnits_ == "fraction" ||
        this.anchorYUnits_ == "fraction"
      ) {
        if (!l) return null;
        (t = this.anchor_.slice()),
          this.anchorXUnits_ == "fraction" && (t[0] *= l[0]),
          this.anchorYUnits_ == "fraction" && (t[1] *= l[1]);
      }
      if (this.anchorOrigin_ != "top-left") {
        if (!l) return null;
        t === this.anchor_ && (t = this.anchor_.slice()),
          (this.anchorOrigin_ == "top-right" ||
            this.anchorOrigin_ == "bottom-right") &&
            (t[0] = -t[0] + l[0]),
          (this.anchorOrigin_ == "bottom-left" ||
            this.anchorOrigin_ == "bottom-right") &&
            (t[1] = -t[1] + l[1]);
      }
      this.normalizedAnchor_ = t;
    }
    const i = this.getDisplacement(),
      s = this.getScaleArray();
    return [t[0] - i[0] / s[0], t[1] + i[1] / s[1]];
  }
  setAnchor(t) {
    (this.anchor_ = t), (this.normalizedAnchor_ = null);
  }
  getColor() {
    return this.color_;
  }
  getImage(t) {
    return this.iconImage_.getImage(t);
  }
  getPixelRatio(t) {
    return this.iconImage_.getPixelRatio(t);
  }
  getImageSize() {
    return this.iconImage_.getSize();
  }
  getImageState() {
    return this.iconImage_.getImageState();
  }
  getHitDetectionImage() {
    return this.iconImage_.getHitDetectionImage();
  }
  getOrigin() {
    if (this.origin_) return this.origin_;
    let t = this.offset_;
    if (this.offsetOrigin_ != "top-left") {
      const i = this.getSize(),
        s = this.iconImage_.getSize();
      if (!i || !s) return null;
      (t = t.slice()),
        (this.offsetOrigin_ == "top-right" ||
          this.offsetOrigin_ == "bottom-right") &&
          (t[0] = s[0] - i[0] - t[0]),
        (this.offsetOrigin_ == "bottom-left" ||
          this.offsetOrigin_ == "bottom-right") &&
          (t[1] = s[1] - i[1] - t[1]);
    }
    return (this.origin_ = t), this.origin_;
  }
  getSrc() {
    return this.iconImage_.getSrc();
  }
  getSize() {
    return this.size_ ? this.size_ : this.iconImage_.getSize();
  }
  getWidth() {
    const t = this.getScaleArray();
    if (this.size_) return this.size_[0] * t[0];
    if (this.iconImage_.getImageState() == xt.LOADED)
      return this.iconImage_.getSize()[0] * t[0];
  }
  getHeight() {
    const t = this.getScaleArray();
    if (this.size_) return this.size_[1] * t[1];
    if (this.iconImage_.getImageState() == xt.LOADED)
      return this.iconImage_.getSize()[1] * t[1];
  }
  setScale(t) {
    delete this.initialOptions_, super.setScale(t);
  }
  listenImageChange(t) {
    this.iconImage_.addEventListener(pt.CHANGE, t);
  }
  load() {
    this.iconImage_.load();
  }
  unlistenImageChange(t) {
    this.iconImage_.removeEventListener(pt.CHANGE, t);
  }
  ready() {
    return this.iconImage_.ready();
  }
}
const Qi = 0.5;
function y2(r, t, i, s, l, o, c, h, d) {
  const _ = d ? Du(l, d) : l,
    m = r[0] * Qi,
    y = r[1] * Qi,
    v = pe(m, y);
  v.imageSmoothingEnabled = !1;
  const E = v.canvas,
    x = new Ix(v, Qi, l, null, c, h, d ? Wa(Ou(), d) : null),
    b = i.length,
    R = Math.floor((256 * 256 * 256 - 1) / b),
    A = {};
  for (let G = 1; G <= b; ++G) {
    const z = i[G - 1],
      D = z.getStyleFunction() || s;
    if (!D) continue;
    let j = D(z, o);
    if (!j) continue;
    Array.isArray(j) || (j = [j]);
    const Z = (G * R).toString(16).padStart(7, "#00000");
    for (let F = 0, V = j.length; F < V; ++F) {
      const rt = j[F],
        it = rt.getGeometryFunction()(z);
      if (!it || !qe(_, it.getExtent())) continue;
      const ot = rt.clone(),
        st = ot.getFill();
      st && st.setColor(Z);
      const nt = ot.getStroke();
      nt && (nt.setColor(Z), nt.setLineDash(null)), ot.setText(void 0);
      const Y = rt.getImage();
      if (Y) {
        const T = Y.getImageSize();
        if (!T) continue;
        const X = pe(T[0], T[1], void 0, { alpha: !1 }),
          U = X.canvas;
        (X.fillStyle = Z),
          X.fillRect(0, 0, U.width, U.height),
          ot.setImage(
            new hc({
              img: U,
              anchor: Y.getAnchor(),
              anchorXUnits: "pixels",
              anchorYUnits: "pixels",
              offset: Y.getOrigin(),
              opacity: 1,
              size: Y.getSize(),
              scale: Y.getScale(),
              rotation: Y.getRotation(),
              rotateWithView: Y.getRotateWithView(),
            }),
          );
      }
      const q = ot.getZIndex() || 0;
      let W = A[q];
      W ||
        ((W = {}),
        (A[q] = W),
        (W.Polygon = []),
        (W.Circle = []),
        (W.LineString = []),
        (W.Point = []));
      const $ = it.getType();
      if ($ === "GeometryCollection") {
        const T = it.getGeometriesArrayRecursive();
        for (let X = 0, U = T.length; X < U; ++X) {
          const tt = T[X];
          W[tt.getType().replace("Multi", "")].push(tt, ot);
        }
      } else W[$.replace("Multi", "")].push(it, ot);
    }
  }
  const O = Object.keys(A).map(Number).sort(Mn);
  for (let G = 0, z = O.length; G < z; ++G) {
    const D = A[O[G]];
    for (const j in D) {
      const Q = D[j];
      for (let Z = 0, F = Q.length; Z < F; Z += 2) {
        x.setStyle(Q[Z + 1]);
        for (let V = 0, rt = t.length; V < rt; ++V)
          x.setTransform(t[V]), x.drawGeometry(Q[Z]);
      }
    }
  }
  return v.getImageData(0, 0, E.width, E.height);
}
function p2(r, t, i) {
  const s = [];
  if (i) {
    const l = Math.floor(Math.round(r[0]) * Qi),
      o = Math.floor(Math.round(r[1]) * Qi),
      c = (re(l, 0, i.width - 1) + re(o, 0, i.height - 1) * i.width) * 4,
      h = i.data[c],
      d = i.data[c + 1],
      m = i.data[c + 2] + 256 * (d + 256 * h),
      y = Math.floor((256 * 256 * 256 - 1) / t.length);
    m && m % y === 0 && s.push(t[m / y - 1]);
  }
  return s;
}
class t1 extends In {
  constructor(t, i, s, l) {
    super(t),
      (this.inversePixelTransform = i),
      (this.frameState = s),
      (this.context = l);
  }
}
const v2 = 5;
class E2 extends Ka {
  constructor(t) {
    super(),
      (this.ready = !0),
      (this.boundHandleImageChange_ = this.handleImageChange_.bind(this)),
      (this.layer_ = t),
      (this.staleKeys_ = new Array()),
      (this.maxStaleKeys = v2);
  }
  getStaleKeys() {
    return this.staleKeys_;
  }
  prependStaleKey(t) {
    this.staleKeys_.unshift(t),
      this.staleKeys_.length > this.maxStaleKeys &&
        (this.staleKeys_.length = this.maxStaleKeys);
  }
  getFeatures(t) {
    return _t();
  }
  getData(t) {
    return null;
  }
  prepareFrame(t) {
    return _t();
  }
  renderFrame(t, i) {
    return _t();
  }
  forEachFeatureAtCoordinate(t, i, s, l, o) {}
  getLayer() {
    return this.layer_;
  }
  handleFontsChanged() {}
  handleImageChange_(t) {
    const i = t.target;
    (i.getState() === xt.LOADED || i.getState() === xt.ERROR) &&
      this.renderIfReadyAndVisible();
  }
  loadImage(t) {
    let i = t.getState();
    return (
      i != xt.LOADED &&
        i != xt.ERROR &&
        t.addEventListener(pt.CHANGE, this.boundHandleImageChange_),
      i == xt.IDLE && (t.load(), (i = t.getState())),
      i == xt.LOADED
    );
  }
  renderIfReadyAndVisible() {
    const t = this.getLayer();
    t && t.getVisible() && t.getSourceState() === "ready" && t.changed();
  }
  renderDeferred(t) {}
  disposeInternal() {
    delete this.layer_, super.disposeInternal();
  }
}
const Iy = [];
let el = null;
function S2() {
  el = pe(1, 1, void 0, { willReadFrequently: !0 });
}
class e1 extends E2 {
  constructor(t) {
    super(t),
      (this.container = null),
      this.renderedResolution,
      (this.tempTransform = Fi()),
      (this.pixelTransform = Fi()),
      (this.inversePixelTransform = Fi()),
      (this.context = null),
      (this.deferredContext_ = null),
      (this.containerReused = !1),
      (this.frameState = null);
  }
  getImageData(t, i, s) {
    el || S2(), el.clearRect(0, 0, 1, 1);
    let l;
    try {
      el.drawImage(t, i, s, 1, 1, 0, 0, 1, 1),
        (l = el.getImageData(0, 0, 1, 1).data);
    } catch {
      return (el = null), null;
    }
    return l;
  }
  getBackground(t) {
    let s = this.getLayer().getBackground();
    return (
      typeof s == "function" && (s = s(t.viewState.resolution)), s || void 0
    );
  }
  useContainer(t, i, s) {
    const l = this.getLayer().getClassName();
    let o, c;
    if (
      t &&
      t.className === l &&
      (!s ||
        (t &&
          t.style.backgroundColor &&
          Es(yl(t.style.backgroundColor), yl(s))))
    ) {
      const h = t.firstElementChild;
      h instanceof HTMLCanvasElement && (c = h.getContext("2d"));
    }
    if (
      (c && c.canvas.style.transform === i
        ? ((this.container = t),
          (this.context = c),
          (this.containerReused = !0))
        : this.containerReused
          ? ((this.container = null),
            (this.context = null),
            (this.containerReused = !1))
          : this.container && (this.container.style.backgroundColor = null),
      !this.container)
    ) {
      (o = document.createElement("div")), (o.className = l);
      let h = o.style;
      (h.position = "absolute"),
        (h.width = "100%"),
        (h.height = "100%"),
        (c = pe());
      const d = c.canvas;
      o.appendChild(d),
        (h = d.style),
        (h.position = "absolute"),
        (h.left = "0"),
        (h.transformOrigin = "top left"),
        (this.container = o),
        (this.context = c);
    }
    !this.containerReused &&
      s &&
      !this.container.style.backgroundColor &&
      (this.container.style.backgroundColor = s);
  }
  clipUnrotated(t, i, s) {
    const l = lr(s),
      o = Qu(s),
      c = Wu(s),
      h = Vu(s);
    ye(i.coordinateToPixelTransform, l),
      ye(i.coordinateToPixelTransform, o),
      ye(i.coordinateToPixelTransform, c),
      ye(i.coordinateToPixelTransform, h);
    const d = this.inversePixelTransform;
    ye(d, l),
      ye(d, o),
      ye(d, c),
      ye(d, h),
      t.save(),
      t.beginPath(),
      t.moveTo(Math.round(l[0]), Math.round(l[1])),
      t.lineTo(Math.round(o[0]), Math.round(o[1])),
      t.lineTo(Math.round(c[0]), Math.round(c[1])),
      t.lineTo(Math.round(h[0]), Math.round(h[1])),
      t.clip();
  }
  prepareContainer(t, i) {
    const s = t.extent,
      l = t.viewState.resolution,
      o = t.viewState.rotation,
      c = t.pixelRatio,
      h = Math.round((Ft(s) / l) * c),
      d = Math.round((Ye(s) / l) * c);
    zn(
      this.pixelTransform,
      t.size[0] / 2,
      t.size[1] / 2,
      1 / c,
      1 / c,
      o,
      -h / 2,
      -d / 2,
    ),
      pp(this.inversePixelTransform, this.pixelTransform);
    const _ = ZS(this.pixelTransform);
    if (
      (this.useContainer(i, _, this.getBackground(t)), !this.containerReused)
    ) {
      const m = this.context.canvas;
      m.width != h || m.height != d
        ? ((m.width = h), (m.height = d))
        : this.context.clearRect(0, 0, h, d),
        _ !== m.style.transform && (m.style.transform = _);
    }
  }
  dispatchRenderEvent_(t, i, s) {
    const l = this.getLayer();
    if (l.hasListener(t)) {
      const o = new t1(t, this.inversePixelTransform, s, i);
      l.dispatchEvent(o);
    }
  }
  preRender(t, i) {
    (this.frameState = i),
      !i.declutter && this.dispatchRenderEvent_(xi.PRERENDER, t, i);
  }
  postRender(t, i) {
    i.declutter || this.dispatchRenderEvent_(xi.POSTRENDER, t, i);
  }
  renderDeferredInternal(t) {}
  getRenderContext(t) {
    return (
      t.declutter &&
        !this.deferredContext_ &&
        (this.deferredContext_ = new Jp()),
      t.declutter ? this.deferredContext_.getContext() : this.context
    );
  }
  renderDeferred(t) {
    t.declutter &&
      (this.dispatchRenderEvent_(xi.PRERENDER, this.context, t),
      t.declutter &&
        this.deferredContext_ &&
        (this.deferredContext_.draw(this.context),
        this.deferredContext_.clear()),
      this.renderDeferredInternal(t),
      this.dispatchRenderEvent_(xi.POSTRENDER, this.context, t));
  }
  getRenderTransform(t, i, s, l, o, c, h) {
    const d = o / 2,
      _ = c / 2,
      m = l / i,
      y = -m,
      v = -t[0] + h,
      E = -t[1];
    return zn(this.tempTransform, d, _, m, y, -s, v, E);
  }
  disposeInternal() {
    delete this.frameState, super.disposeInternal();
  }
}
class x2 extends e1 {
  constructor(t) {
    super(t),
      (this.boundHandleStyleImageChange_ =
        this.handleStyleImageChange_.bind(this)),
      this.animatingOrInteracting_,
      (this.hitDetectionImageData_ = null),
      (this.clipped_ = !1),
      (this.renderedFeatures_ = null),
      (this.renderedRevision_ = -1),
      (this.renderedResolution_ = NaN),
      (this.renderedExtent_ = Ri()),
      (this.wrappedRenderedExtent_ = Ri()),
      this.renderedRotation_,
      (this.renderedCenter_ = null),
      (this.renderedProjection_ = null),
      (this.renderedPixelRatio_ = 1),
      (this.renderedRenderOrder_ = null),
      this.renderedFrameDeclutter_,
      (this.replayGroup_ = null),
      (this.replayGroupChanged = !0),
      (this.clipping = !0),
      (this.targetContext_ = null),
      (this.opacity_ = 1);
  }
  renderWorlds(t, i, s) {
    const l = i.extent,
      o = i.viewState,
      c = o.center,
      h = o.resolution,
      d = o.projection,
      _ = o.rotation,
      m = d.getExtent(),
      y = this.getLayer().getSource(),
      v = this.getLayer().getDeclutter(),
      E = i.pixelRatio,
      x = i.viewHints,
      b = !(x[Le.ANIMATING] || x[Le.INTERACTING]),
      R = this.context,
      A = Math.round((Ft(l) / h) * E),
      O = Math.round((Ye(l) / h) * E),
      G = y.getWrapX() && d.canWrapX(),
      z = G ? Ft(m) : null,
      D = G ? Math.ceil((l[2] - m[2]) / z) + 1 : 1;
    let j = G ? Math.floor((l[0] - m[0]) / z) : 0;
    do {
      let Q = this.getRenderTransform(c, h, 0, E, A, O, j * z);
      i.declutter && (Q = Q.slice(0)),
        t.execute(
          R,
          [R.canvas.width, R.canvas.height],
          Q,
          _,
          b,
          s === void 0 ? rl : s ? $p : g2,
          s ? v && i.declutter[v] : void 0,
        );
    } while (++j < D);
  }
  setDrawContext_() {
    this.opacity_ !== 1 &&
      ((this.targetContext_ = this.context),
      (this.context = pe(
        this.context.canvas.width,
        this.context.canvas.height,
        Iy,
      )));
  }
  resetDrawContext_() {
    if (this.opacity_ !== 1) {
      const t = this.targetContext_.globalAlpha;
      (this.targetContext_.globalAlpha = this.opacity_),
        this.targetContext_.drawImage(this.context.canvas, 0, 0),
        (this.targetContext_.globalAlpha = t),
        sc(this.context),
        Iy.push(this.context.canvas),
        (this.context = this.targetContext_),
        (this.targetContext_ = null);
    }
  }
  renderDeclutter(t) {
    !this.replayGroup_ ||
      !this.getLayer().getDeclutter() ||
      this.renderWorlds(this.replayGroup_, t, !0);
  }
  renderDeferredInternal(t) {
    this.replayGroup_ &&
      (this.replayGroup_.renderDeferred(),
      this.clipped_ && this.context.restore(),
      this.resetDrawContext_());
  }
  renderFrame(t, i) {
    const s = t.layerStatesArray[t.layerIndex];
    this.opacity_ = s.opacity;
    const l = t.viewState;
    this.prepareContainer(t, i);
    const o = this.context,
      c = this.replayGroup_;
    let h = c && !c.isEmpty();
    if (
      !h &&
      !(
        this.getLayer().hasListener(xi.PRERENDER) ||
        this.getLayer().hasListener(xi.POSTRENDER)
      )
    )
      return null;
    this.setDrawContext_(), this.preRender(o, t);
    const d = l.projection;
    if (((this.clipped_ = !1), h && s.extent && this.clipping)) {
      const _ = hs(s.extent, d);
      (h = qe(_, t.extent)),
        (this.clipped_ = h && !nl(_, t.extent)),
        this.clipped_ && this.clipUnrotated(o, t, _);
    }
    return (
      h &&
        this.renderWorlds(c, t, this.getLayer().getDeclutter() ? !1 : void 0),
      !t.declutter && this.clipped_ && o.restore(),
      this.postRender(o, t),
      this.renderedRotation_ !== l.rotation &&
        ((this.renderedRotation_ = l.rotation),
        (this.hitDetectionImageData_ = null)),
      t.declutter || this.resetDrawContext_(),
      this.container
    );
  }
  getFeatures(t) {
    return new Promise((i) => {
      if (
        this.frameState &&
        !this.hitDetectionImageData_ &&
        !this.animatingOrInteracting_
      ) {
        const s = this.frameState.size.slice(),
          l = this.renderedCenter_,
          o = this.renderedResolution_,
          c = this.renderedRotation_,
          h = this.renderedProjection_,
          d = this.wrappedRenderedExtent_,
          _ = this.getLayer(),
          m = [],
          y = s[0] * Qi,
          v = s[1] * Qi;
        m.push(this.getRenderTransform(l, o, c, Qi, y, v, 0).slice());
        const E = _.getSource(),
          x = h.getExtent();
        if (E.getWrapX() && h.canWrapX() && !nl(x, d)) {
          let R = d[0];
          const A = Ft(x);
          let O = 0,
            G;
          for (; R < x[0]; )
            --O,
              (G = A * O),
              m.push(this.getRenderTransform(l, o, c, Qi, y, v, G).slice()),
              (R += A);
          for (O = 0, R = d[2]; R > x[2]; )
            ++O,
              (G = A * O),
              m.push(this.getRenderTransform(l, o, c, Qi, y, v, G).slice()),
              (R -= A);
        }
        const b = Ou();
        this.hitDetectionImageData_ = y2(
          s,
          m,
          this.renderedFeatures_,
          _.getStyleFunction(),
          d,
          o,
          c,
          Ey(o, this.renderedPixelRatio_),
          b ? h : null,
        );
      }
      i(p2(t, this.renderedFeatures_, this.hitDetectionImageData_));
    });
  }
  forEachFeatureAtCoordinate(t, i, s, l, o) {
    var v, E;
    if (!this.replayGroup_) return;
    const c = i.viewState.resolution,
      h = i.viewState.rotation,
      d = this.getLayer(),
      _ = {},
      m = function (x, b, R) {
        const A = It(x),
          O = _[A];
        if (O) {
          if (O !== !0 && R < O.distanceSq) {
            if (R === 0)
              return (_[A] = !0), o.splice(o.lastIndexOf(O), 1), l(x, d, b);
            (O.geometry = b), (O.distanceSq = R);
          }
        } else {
          if (R === 0) return (_[A] = !0), l(x, d, b);
          o.push(
            (_[A] = {
              feature: x,
              layer: d,
              geometry: b,
              distanceSq: R,
              callback: l,
            }),
          );
        }
      },
      y = this.getLayer().getDeclutter();
    return this.replayGroup_.forEachFeatureAtCoordinate(
      t,
      c,
      h,
      s,
      m,
      y
        ? (E = (v = i.declutter) == null ? void 0 : v[y]) == null
          ? void 0
          : E.all().map((x) => x.value)
        : null,
    );
  }
  handleFontsChanged() {
    const t = this.getLayer();
    t.getVisible() && this.replayGroup_ && t.changed();
  }
  handleStyleImageChange_(t) {
    this.renderIfReadyAndVisible();
  }
  prepareFrame(t) {
    const i = this.getLayer(),
      s = i.getSource();
    if (!s) return !1;
    const l = t.viewHints[Le.ANIMATING],
      o = t.viewHints[Le.INTERACTING],
      c = i.getUpdateWhileAnimating(),
      h = i.getUpdateWhileInteracting();
    if ((this.ready && !c && l) || (!h && o))
      return (this.animatingOrInteracting_ = !0), !0;
    this.animatingOrInteracting_ = !1;
    const d = t.extent,
      _ = t.viewState,
      m = _.projection,
      y = _.resolution,
      v = t.pixelRatio,
      E = i.getRevision(),
      x = i.getRenderBuffer();
    let b = i.getRenderOrder();
    b === void 0 && (b = Gx);
    const R = _.center.slice(),
      A = vd(d, x * y),
      O = A.slice(),
      G = [A.slice()],
      z = m.getExtent();
    if (s.getWrapX() && m.canWrapX() && !nl(z, t.extent)) {
      const nt = Ft(z),
        Y = Math.max(Ft(A) / 2, nt);
      (A[0] = z[0] - Y), (A[2] = z[2] + Y), hp(R, m);
      const q = op(G[0], m);
      q[0] < z[0] && q[2] < z[2]
        ? G.push([q[0] + nt, q[1], q[2] + nt, q[3]])
        : q[0] > z[0] &&
          q[2] > z[2] &&
          G.push([q[0] - nt, q[1], q[2] - nt, q[3]]);
    }
    if (
      this.ready &&
      this.renderedResolution_ == y &&
      this.renderedRevision_ == E &&
      this.renderedRenderOrder_ == b &&
      this.renderedFrameDeclutter_ === !!t.declutter &&
      nl(this.wrappedRenderedExtent_, A)
    )
      return (
        Es(this.renderedExtent_, O) ||
          ((this.hitDetectionImageData_ = null), (this.renderedExtent_ = O)),
        (this.renderedCenter_ = R),
        (this.replayGroupChanged = !1),
        !0
      );
    this.replayGroup_ = null;
    const D = new c2(jp(y, v), A, y, v),
      j = Ou();
    let Q;
    if (j) {
      for (let nt = 0, Y = G.length; nt < Y; ++nt) {
        const q = G[nt],
          W = Du(q, m);
        s.loadFeatures(W, PS(y, m), j);
      }
      Q = Wa(j, m);
    } else
      for (let nt = 0, Y = G.length; nt < Y; ++nt) s.loadFeatures(G[nt], y, m);
    const Z = Ey(y, v);
    let F = !0;
    const V = (nt, Y) => {
        let q;
        const W = nt.getStyleFunction() || i.getStyleFunction();
        if ((W && (q = W(nt, y)), q)) {
          const $ = this.renderFeature(
            nt,
            Z,
            q,
            D,
            Q,
            this.getLayer().getDeclutter(),
            Y,
          );
          F = F && !$;
        }
      },
      rt = Du(A, m),
      it = s.getFeaturesInExtent(rt);
    b && it.sort(b);
    for (let nt = 0, Y = it.length; nt < Y; ++nt) V(it[nt], nt);
    (this.renderedFeatures_ = it), (this.ready = F);
    const ot = D.finish(),
      st = new _2(
        A,
        y,
        v,
        s.getOverlaps(),
        ot,
        i.getRenderBuffer(),
        !!t.declutter,
      );
    return (
      (this.renderedResolution_ = y),
      (this.renderedRevision_ = E),
      (this.renderedRenderOrder_ = b),
      (this.renderedFrameDeclutter_ = !!t.declutter),
      (this.renderedExtent_ = O),
      (this.wrappedRenderedExtent_ = A),
      (this.renderedCenter_ = R),
      (this.renderedProjection_ = m),
      (this.renderedPixelRatio_ = v),
      (this.replayGroup_ = st),
      (this.hitDetectionImageData_ = null),
      (this.replayGroupChanged = !0),
      !0
    );
  }
  renderFeature(t, i, s, l, o, c, h) {
    if (!s) return !1;
    let d = !1;
    if (Array.isArray(s))
      for (let _ = 0, m = s.length; _ < m; ++_)
        d = Sy(l, t, s[_], i, this.boundHandleStyleImageChange_, o, c, h) || d;
    else d = Sy(l, t, s, i, this.boundHandleStyleImageChange_, o, c, h);
    return d;
  }
}
let ur = 0;
const Xe = 1 << ur++,
  At = 1 << ur++,
  Ke = 1 << ur++,
  Gi = 1 << ur++,
  sr = 1 << ur++,
  Ma = 1 << ur++,
  Su = Math.pow(2, ur) - 1,
  Zd = {
    [Xe]: "boolean",
    [At]: "number",
    [Ke]: "string",
    [Gi]: "color",
    [sr]: "number[]",
    [Ma]: "size",
  },
  C2 = Object.keys(Zd).map(Number).sort(Mn);
function T2(r) {
  return r in Zd;
}
function Oa(r) {
  const t = [];
  for (const i of C2) Da(r, i) && t.push(Zd[i]);
  return t.length === 0
    ? "untyped"
    : t.length < 3
      ? t.join(" or ")
      : t.slice(0, -1).join(", ") + ", or " + t[t.length - 1];
}
function Da(r, t) {
  return (r & t) === t;
}
function as(r, t) {
  return r === t;
}
class oe {
  constructor(t, i) {
    if (!T2(t))
      throw new Error(
        `literal expressions must have a specific type, got ${Oa(t)}`,
      );
    (this.type = t), (this.value = i);
  }
}
class R2 {
  constructor(t, i, ...s) {
    (this.type = t), (this.operator = i), (this.args = s);
  }
}
function i1() {
  return {
    variables: new Set(),
    properties: new Set(),
    featureId: !1,
    geometryType: !1,
    mapState: !1,
  };
}
function Ce(r, t, i) {
  switch (typeof r) {
    case "boolean": {
      if (as(t, Ke)) return new oe(Ke, r ? "true" : "false");
      if (!Da(t, Xe)) throw new Error(`got a boolean, but expected ${Oa(t)}`);
      return new oe(Xe, r);
    }
    case "number": {
      if (as(t, Ma)) return new oe(Ma, We(r));
      if (as(t, Xe)) return new oe(Xe, !!r);
      if (as(t, Ke)) return new oe(Ke, r.toString());
      if (!Da(t, At)) throw new Error(`got a number, but expected ${Oa(t)}`);
      return new oe(At, r);
    }
    case "string": {
      if (as(t, Gi)) return new oe(Gi, kd(r));
      if (as(t, Xe)) return new oe(Xe, !!r);
      if (!Da(t, Ke)) throw new Error(`got a string, but expected ${Oa(t)}`);
      return new oe(Ke, r);
    }
  }
  if (!Array.isArray(r))
    throw new Error("expression must be an array or a primitive value");
  if (r.length === 0) throw new Error("empty expression");
  if (typeof r[0] == "string") return G2(r, t, i);
  for (const s of r)
    if (typeof s != "number") throw new Error("expected an array of numbers");
  if (as(t, Ma)) {
    if (r.length !== 2)
      throw new Error(
        `expected an array of two values for a size, got ${r.length}`,
      );
    return new oe(Ma, r);
  }
  if (as(t, Gi)) {
    if (r.length === 3) return new oe(Gi, [...r, 1]);
    if (r.length === 4) return new oe(Gi, r);
    throw new Error(
      `expected an array of 3 or 4 values for a color, got ${r.length}`,
    );
  }
  if (!Da(t, sr))
    throw new Error(`got an array of numbers, but expected ${Oa(t)}`);
  return new oe(sr, r);
}
const B = {
    Get: "get",
    Var: "var",
    Concat: "concat",
    GeometryType: "geometry-type",
    LineMetric: "line-metric",
    Any: "any",
    All: "all",
    Not: "!",
    Resolution: "resolution",
    Zoom: "zoom",
    Time: "time",
    Equal: "==",
    NotEqual: "!=",
    GreaterThan: ">",
    GreaterThanOrEqualTo: ">=",
    LessThan: "<",
    LessThanOrEqualTo: "<=",
    Multiply: "*",
    Divide: "/",
    Add: "+",
    Subtract: "-",
    Clamp: "clamp",
    Mod: "%",
    Pow: "^",
    Abs: "abs",
    Floor: "floor",
    Ceil: "ceil",
    Round: "round",
    Sin: "sin",
    Cos: "cos",
    Atan: "atan",
    Sqrt: "sqrt",
    Match: "match",
    Between: "between",
    Interpolate: "interpolate",
    Coalesce: "coalesce",
    Case: "case",
    In: "in",
    Number: "number",
    String: "string",
    Array: "array",
    Color: "color",
    Id: "id",
    Band: "band",
    Palette: "palette",
    ToString: "to-string",
    Has: "has",
  },
  b2 = {
    [B.Get]: gt(St(1, 1 / 0), Ny),
    [B.Var]: gt(St(1, 1), A2),
    [B.Has]: gt(St(1, 1 / 0), Ny),
    [B.Id]: gt(w2, Vr),
    [B.Concat]: gt(St(2, 1 / 0), zt(Ke)),
    [B.GeometryType]: gt(M2, Vr),
    [B.LineMetric]: gt(Vr),
    [B.Resolution]: gt(Xf, Vr),
    [B.Zoom]: gt(Xf, Vr),
    [B.Time]: gt(Xf, Vr),
    [B.Any]: gt(St(2, 1 / 0), zt(Xe)),
    [B.All]: gt(St(2, 1 / 0), zt(Xe)),
    [B.Not]: gt(St(1, 1), zt(Xe)),
    [B.Equal]: gt(St(2, 2), zt(Su)),
    [B.NotEqual]: gt(St(2, 2), zt(Su)),
    [B.GreaterThan]: gt(St(2, 2), zt(At)),
    [B.GreaterThanOrEqualTo]: gt(St(2, 2), zt(At)),
    [B.LessThan]: gt(St(2, 2), zt(At)),
    [B.LessThanOrEqualTo]: gt(St(2, 2), zt(At)),
    [B.Multiply]: gt(St(2, 1 / 0), Gy),
    [B.Coalesce]: gt(St(2, 1 / 0), Gy),
    [B.Divide]: gt(St(2, 2), zt(At)),
    [B.Add]: gt(St(2, 1 / 0), zt(At)),
    [B.Subtract]: gt(St(2, 2), zt(At)),
    [B.Clamp]: gt(St(3, 3), zt(At)),
    [B.Mod]: gt(St(2, 2), zt(At)),
    [B.Pow]: gt(St(2, 2), zt(At)),
    [B.Abs]: gt(St(1, 1), zt(At)),
    [B.Floor]: gt(St(1, 1), zt(At)),
    [B.Ceil]: gt(St(1, 1), zt(At)),
    [B.Round]: gt(St(1, 1), zt(At)),
    [B.Sin]: gt(St(1, 1), zt(At)),
    [B.Cos]: gt(St(1, 1), zt(At)),
    [B.Atan]: gt(St(1, 2), zt(At)),
    [B.Sqrt]: gt(St(1, 1), zt(At)),
    [B.Match]: gt(St(4, 1 / 0), Fy, D2),
    [B.Between]: gt(St(3, 3), zt(At)),
    [B.Interpolate]: gt(St(6, 1 / 0), Fy, L2),
    [B.Case]: gt(St(3, 1 / 0), O2, z2),
    [B.In]: gt(St(2, 2), I2),
    [B.Number]: gt(St(1, 1 / 0), zt(Su)),
    [B.String]: gt(St(1, 1 / 0), zt(Su)),
    [B.Array]: gt(St(1, 1 / 0), zt(At)),
    [B.Color]: gt(St(1, 4), zt(At)),
    [B.Band]: gt(St(1, 3), zt(At)),
    [B.Palette]: gt(St(2, 2), N2),
    [B.ToString]: gt(St(1, 1), zt(Xe | At | Ke | Gi)),
  };
function Ny(r, t, i) {
  const s = r.length - 1,
    l = new Array(s);
  for (let o = 0; o < s; ++o) {
    const c = r[o + 1];
    switch (typeof c) {
      case "number": {
        l[o] = new oe(At, c);
        break;
      }
      case "string": {
        l[o] = new oe(Ke, c);
        break;
      }
      default:
        throw new Error(
          `expected a string key or numeric array index for a get operation, got ${c}`,
        );
    }
    o === 0 && i.properties.add(String(c));
  }
  return l;
}
function A2(r, t, i) {
  const s = r[1];
  if (typeof s != "string")
    throw new Error("expected a string argument for var operation");
  return i.variables.add(s), [new oe(Ke, s)];
}
function w2(r, t, i) {
  i.featureId = !0;
}
function M2(r, t, i) {
  i.geometryType = !0;
}
function Xf(r, t, i) {
  i.mapState = !0;
}
function Vr(r, t, i) {
  const s = r[0];
  if (r.length !== 1)
    throw new Error(`expected no arguments for ${s} operation`);
  return [];
}
function St(r, t) {
  return function (i, s, l) {
    const o = i[0],
      c = i.length - 1;
    if (r === t) {
      if (c !== r) {
        const h = r === 1 ? "" : "s";
        throw new Error(`expected ${r} argument${h} for ${o}, got ${c}`);
      }
    } else if (c < r || c > t) {
      const h = t === 1 / 0 ? `${r} or more` : `${r} to ${t}`;
      throw new Error(`expected ${h} arguments for ${o}, got ${c}`);
    }
  };
}
function Gy(r, t, i) {
  const s = r.length - 1,
    l = new Array(s);
  for (let o = 0; o < s; ++o) {
    const c = Ce(r[o + 1], t, i);
    l[o] = c;
  }
  return l;
}
function zt(r) {
  return function (t, i, s) {
    const l = t.length - 1,
      o = new Array(l);
    for (let c = 0; c < l; ++c) {
      const h = Ce(t[c + 1], r, s);
      o[c] = h;
    }
    return o;
  };
}
function O2(r, t, i) {
  const s = r[0],
    l = r.length - 1;
  if (l % 2 === 0)
    throw new Error(
      `expected an odd number of arguments for ${s}, got ${l} instead`,
    );
}
function Fy(r, t, i) {
  const s = r[0],
    l = r.length - 1;
  if (l % 2 === 1)
    throw new Error(
      `expected an even number of arguments for operation ${s}, got ${l} instead`,
    );
}
function D2(r, t, i) {
  const s = r.length - 1,
    l = Ke | At | Xe,
    o = Ce(r[1], l, i),
    c = Ce(r[r.length - 1], t, i),
    h = new Array(s - 2);
  for (let d = 0; d < s - 2; d += 2) {
    try {
      const _ = Ce(r[d + 2], o.type, i);
      h[d] = _;
    } catch (_) {
      throw new Error(
        `failed to parse argument ${d + 1} of match expression: ${_.message}`,
      );
    }
    try {
      const _ = Ce(r[d + 3], c.type, i);
      h[d + 1] = _;
    } catch (_) {
      throw new Error(
        `failed to parse argument ${d + 2} of match expression: ${_.message}`,
      );
    }
  }
  return [o, ...h, c];
}
function L2(r, t, i) {
  const s = r[1];
  let l;
  switch (s[0]) {
    case "linear":
      l = 1;
      break;
    case "exponential":
      const d = s[1];
      if (typeof d != "number" || d <= 0)
        throw new Error(
          `expected a number base for exponential interpolation, got ${JSON.stringify(d)} instead`,
        );
      l = d;
      break;
    default:
      throw new Error(`invalid interpolation type: ${JSON.stringify(s)}`);
  }
  const o = new oe(At, l);
  let c;
  try {
    c = Ce(r[2], At, i);
  } catch (d) {
    throw new Error(
      `failed to parse argument 1 in interpolate expression: ${d.message}`,
    );
  }
  const h = new Array(r.length - 3);
  for (let d = 0; d < h.length; d += 2) {
    try {
      const _ = Ce(r[d + 3], At, i);
      h[d] = _;
    } catch (_) {
      throw new Error(
        `failed to parse argument ${d + 2} for interpolate expression: ${_.message}`,
      );
    }
    try {
      const _ = Ce(r[d + 4], t, i);
      h[d + 1] = _;
    } catch (_) {
      throw new Error(
        `failed to parse argument ${d + 3} for interpolate expression: ${_.message}`,
      );
    }
  }
  return [o, c, ...h];
}
function z2(r, t, i) {
  const s = Ce(r[r.length - 1], t, i),
    l = new Array(r.length - 1);
  for (let o = 0; o < l.length - 1; o += 2) {
    try {
      const c = Ce(r[o + 1], Xe, i);
      l[o] = c;
    } catch (c) {
      throw new Error(
        `failed to parse argument ${o} of case expression: ${c.message}`,
      );
    }
    try {
      const c = Ce(r[o + 2], s.type, i);
      l[o + 1] = c;
    } catch (c) {
      throw new Error(
        `failed to parse argument ${o + 1} of case expression: ${c.message}`,
      );
    }
  }
  return (l[l.length - 1] = s), l;
}
function I2(r, t, i) {
  let s = r[2];
  if (!Array.isArray(s))
    throw new Error(
      'the second argument for the "in" operator must be an array',
    );
  let l;
  if (typeof s[0] == "string") {
    if (s[0] !== "literal")
      throw new Error(
        'for the "in" operator, a string array should be wrapped in a "literal" operator to disambiguate from expressions',
      );
    if (!Array.isArray(s[1]))
      throw new Error(
        'failed to parse "in" expression: the literal operator must be followed by an array',
      );
    (s = s[1]), (l = Ke);
  } else l = At;
  const o = new Array(s.length);
  for (let h = 0; h < o.length; h++)
    try {
      const d = Ce(s[h], l, i);
      o[h] = d;
    } catch (d) {
      throw new Error(
        `failed to parse haystack item ${h} for "in" expression: ${d.message}`,
      );
    }
  return [Ce(r[1], l, i), ...o];
}
function N2(r, t, i) {
  let s;
  try {
    s = Ce(r[1], At, i);
  } catch (c) {
    throw new Error(
      `failed to parse first argument in palette expression: ${c.message}`,
    );
  }
  const l = r[2];
  if (!Array.isArray(l))
    throw new Error("the second argument of palette must be an array");
  const o = new Array(l.length);
  for (let c = 0; c < o.length; c++) {
    let h;
    try {
      h = Ce(l[c], Gi, i);
    } catch (d) {
      throw new Error(
        `failed to parse color at index ${c} in palette expression: ${d.message}`,
      );
    }
    if (!(h instanceof oe))
      throw new Error(
        `the palette color at index ${c} must be a literal value`,
      );
    o[c] = h;
  }
  return [s, ...o];
}
function gt(...r) {
  return function (t, i, s) {
    const l = t[0];
    let o;
    for (let c = 0; c < r.length; c++) {
      const h = r[c](t, i, s);
      if (c == r.length - 1) {
        if (!h)
          throw new Error(
            "expected last argument validator to return the parsed args",
          );
        o = h;
      }
    }
    return new R2(i, l, ...o);
  };
}
function G2(r, t, i) {
  const s = r[0],
    l = b2[s];
  if (!l) throw new Error(`unknown operator: ${s}`);
  return l(r, t, i);
}
function n1(r) {
  if (!r) return "";
  const t = r.getType();
  switch (t) {
    case "Point":
    case "LineString":
    case "Polygon":
      return t;
    case "MultiPoint":
    case "MultiLineString":
    case "MultiPolygon":
      return t.substring(5);
    case "Circle":
      return "Polygon";
    case "GeometryCollection":
      return n1(r.getGeometries()[0]);
    default:
      return "";
  }
}
function s1() {
  return {
    variables: {},
    properties: {},
    resolution: NaN,
    featureId: null,
    geometryType: "",
  };
}
function Nn(r, t, i) {
  const s = Ce(r, t, i);
  return Ui(s);
}
function Ui(r, t) {
  if (r instanceof oe) {
    if (r.type === Gi && typeof r.value == "string") {
      const s = kd(r.value);
      return function () {
        return s;
      };
    }
    return function () {
      return r.value;
    };
  }
  const i = r.operator;
  switch (i) {
    case B.Number:
    case B.String:
    case B.Coalesce:
      return F2(r);
    case B.Get:
    case B.Var:
    case B.Has:
      return U2(r);
    case B.Id:
      return (s) => s.featureId;
    case B.GeometryType:
      return (s) => s.geometryType;
    case B.Concat: {
      const s = r.args.map((l) => Ui(l));
      return (l) => "".concat(...s.map((o) => o(l).toString()));
    }
    case B.Resolution:
      return (s) => s.resolution;
    case B.Any:
    case B.All:
    case B.Between:
    case B.In:
    case B.Not:
      return Y2(r);
    case B.Equal:
    case B.NotEqual:
    case B.LessThan:
    case B.LessThanOrEqualTo:
    case B.GreaterThan:
    case B.GreaterThanOrEqualTo:
      return X2(r);
    case B.Multiply:
    case B.Divide:
    case B.Add:
    case B.Subtract:
    case B.Clamp:
    case B.Mod:
    case B.Pow:
    case B.Abs:
    case B.Floor:
    case B.Ceil:
    case B.Round:
    case B.Sin:
    case B.Cos:
    case B.Atan:
    case B.Sqrt:
      return k2(r);
    case B.Case:
      return P2(r);
    case B.Match:
      return B2(r);
    case B.Interpolate:
      return H2(r);
    case B.ToString:
      return j2(r);
    default:
      throw new Error(`Unsupported operator ${i}`);
  }
}
function F2(r, t) {
  const i = r.operator,
    s = r.args.length,
    l = new Array(s);
  for (let o = 0; o < s; ++o) l[o] = Ui(r.args[o]);
  switch (i) {
    case B.Coalesce:
      return (o) => {
        for (let c = 0; c < s; ++c) {
          const h = l[c](o);
          if (typeof h < "u" && h !== null) return h;
        }
        throw new Error("Expected one of the values to be non-null");
      };
    case B.Number:
    case B.String:
      return (o) => {
        for (let c = 0; c < s; ++c) {
          const h = l[c](o);
          if (typeof h === i) return h;
        }
        throw new Error(`Expected one of the values to be a ${i}`);
      };
    default:
      throw new Error(`Unsupported assertion operator ${i}`);
  }
}
function U2(r, t) {
  const s = r.args[0].value;
  switch (r.operator) {
    case B.Get:
      return (l) => {
        const o = r.args;
        let c = l.properties[s];
        for (let h = 1, d = o.length; h < d; ++h) {
          const m = o[h].value;
          c = c[m];
        }
        return c;
      };
    case B.Var:
      return (l) => l.variables[s];
    case B.Has:
      return (l) => {
        const o = r.args;
        if (!(s in l.properties)) return !1;
        let c = l.properties[s];
        for (let h = 1, d = o.length; h < d; ++h) {
          const m = o[h].value;
          if (!c || !Object.hasOwn(c, m)) return !1;
          c = c[m];
        }
        return !0;
      };
    default:
      throw new Error(`Unsupported accessor operator ${r.operator}`);
  }
}
function X2(r, t) {
  const i = r.operator,
    s = Ui(r.args[0]),
    l = Ui(r.args[1]);
  switch (i) {
    case B.Equal:
      return (o) => s(o) === l(o);
    case B.NotEqual:
      return (o) => s(o) !== l(o);
    case B.LessThan:
      return (o) => s(o) < l(o);
    case B.LessThanOrEqualTo:
      return (o) => s(o) <= l(o);
    case B.GreaterThan:
      return (o) => s(o) > l(o);
    case B.GreaterThanOrEqualTo:
      return (o) => s(o) >= l(o);
    default:
      throw new Error(`Unsupported comparison operator ${i}`);
  }
}
function Y2(r, t) {
  const i = r.operator,
    s = r.args.length,
    l = new Array(s);
  for (let o = 0; o < s; ++o) l[o] = Ui(r.args[o]);
  switch (i) {
    case B.Any:
      return (o) => {
        for (let c = 0; c < s; ++c) if (l[c](o)) return !0;
        return !1;
      };
    case B.All:
      return (o) => {
        for (let c = 0; c < s; ++c) if (!l[c](o)) return !1;
        return !0;
      };
    case B.Between:
      return (o) => {
        const c = l[0](o),
          h = l[1](o),
          d = l[2](o);
        return c >= h && c <= d;
      };
    case B.In:
      return (o) => {
        const c = l[0](o);
        for (let h = 1; h < s; ++h) if (c === l[h](o)) return !0;
        return !1;
      };
    case B.Not:
      return (o) => !l[0](o);
    default:
      throw new Error(`Unsupported logical operator ${i}`);
  }
}
function k2(r, t) {
  const i = r.operator,
    s = r.args.length,
    l = new Array(s);
  for (let o = 0; o < s; ++o) l[o] = Ui(r.args[o]);
  switch (i) {
    case B.Multiply:
      return (o) => {
        let c = 1;
        for (let h = 0; h < s; ++h) c *= l[h](o);
        return c;
      };
    case B.Divide:
      return (o) => l[0](o) / l[1](o);
    case B.Add:
      return (o) => {
        let c = 0;
        for (let h = 0; h < s; ++h) c += l[h](o);
        return c;
      };
    case B.Subtract:
      return (o) => l[0](o) - l[1](o);
    case B.Clamp:
      return (o) => {
        const c = l[0](o),
          h = l[1](o);
        if (c < h) return h;
        const d = l[2](o);
        return c > d ? d : c;
      };
    case B.Mod:
      return (o) => l[0](o) % l[1](o);
    case B.Pow:
      return (o) => Math.pow(l[0](o), l[1](o));
    case B.Abs:
      return (o) => Math.abs(l[0](o));
    case B.Floor:
      return (o) => Math.floor(l[0](o));
    case B.Ceil:
      return (o) => Math.ceil(l[0](o));
    case B.Round:
      return (o) => Math.round(l[0](o));
    case B.Sin:
      return (o) => Math.sin(l[0](o));
    case B.Cos:
      return (o) => Math.cos(l[0](o));
    case B.Atan:
      return s === 2
        ? (o) => Math.atan2(l[0](o), l[1](o))
        : (o) => Math.atan(l[0](o));
    case B.Sqrt:
      return (o) => Math.sqrt(l[0](o));
    default:
      throw new Error(`Unsupported numeric operator ${i}`);
  }
}
function P2(r, t) {
  const i = r.args.length,
    s = new Array(i);
  for (let l = 0; l < i; ++l) s[l] = Ui(r.args[l]);
  return (l) => {
    for (let o = 0; o < i - 1; o += 2) if (s[o](l)) return s[o + 1](l);
    return s[i - 1](l);
  };
}
function B2(r, t) {
  const i = r.args.length,
    s = new Array(i);
  for (let l = 0; l < i; ++l) s[l] = Ui(r.args[l]);
  return (l) => {
    const o = s[0](l);
    for (let c = 1; c < i; c += 2) if (o === s[c](l)) return s[c + 1](l);
    return s[i - 1](l);
  };
}
function H2(r, t) {
  const i = r.args.length,
    s = new Array(i);
  for (let l = 0; l < i; ++l) s[l] = Ui(r.args[l]);
  return (l) => {
    const o = s[0](l),
      c = s[1](l);
    let h, d;
    for (let _ = 2; _ < i; _ += 2) {
      const m = s[_](l);
      let y = s[_ + 1](l);
      const v = Array.isArray(y);
      if ((v && (y = yx(y)), m >= c))
        return _ === 2 ? y : v ? Z2(o, c, h, d, m, y) : La(o, c, h, d, m, y);
      (h = m), (d = y);
    }
    return d;
  };
}
function j2(r, t) {
  const i = r.operator,
    s = r.args.length,
    l = new Array(s);
  for (let o = 0; o < s; ++o) l[o] = Ui(r.args[o]);
  switch (i) {
    case B.ToString:
      return (o) => {
        const c = l[0](o);
        return r.args[0].type === Gi ? Pd(c) : c.toString();
      };
    default:
      throw new Error(`Unsupported convert operator ${i}`);
  }
}
function La(r, t, i, s, l, o) {
  const c = l - i;
  if (c === 0) return s;
  const h = t - i,
    d = r === 1 ? h / c : (Math.pow(r, h) - 1) / (Math.pow(r, c) - 1);
  return s + d * (o - s);
}
function Z2(r, t, i, s, l, o) {
  if (l - i === 0) return s;
  const h = _y(s),
    d = _y(o);
  let _ = d[2] - h[2];
  _ > 180 ? (_ -= 360) : _ < -180 && (_ += 360);
  const m = [
    La(r, t, i, h[0], l, d[0]),
    La(r, t, i, h[1], l, d[1]),
    h[2] + La(r, t, i, 0, l, _),
    La(r, t, i, s[3], l, o[3]),
  ];
  return Fp(px(m));
}
function K2(r) {
  return !0;
}
function q2(r) {
  const t = i1(),
    i = V2(r, t),
    s = s1();
  return function (l, o) {
    if (
      ((s.properties = l.getPropertiesInternal()),
      (s.resolution = o),
      t.featureId)
    ) {
      const c = l.getId();
      c !== void 0 ? (s.featureId = c) : (s.featureId = null);
    }
    return t.geometryType && (s.geometryType = n1(l.getGeometry())), i(s);
  };
}
function Uy(r) {
  const t = i1(),
    i = r.length,
    s = new Array(i);
  for (let c = 0; c < i; ++c) s[c] = hd(r[c], t);
  const l = s1(),
    o = new Array(i);
  return function (c, h) {
    if (
      ((l.properties = c.getPropertiesInternal()),
      (l.resolution = h),
      t.featureId)
    ) {
      const _ = c.getId();
      _ !== void 0 ? (l.featureId = _) : (l.featureId = null);
    }
    let d = 0;
    for (let _ = 0; _ < i; ++_) {
      const m = s[_](l);
      m && ((o[d] = m), (d += 1));
    }
    return (o.length = d), o;
  };
}
function V2(r, t) {
  const i = r.length,
    s = new Array(i);
  for (let l = 0; l < i; ++l) {
    const o = r[l],
      c = "filter" in o ? Nn(o.filter, Xe, t) : K2;
    let h;
    if (Array.isArray(o.style)) {
      const d = o.style.length;
      h = new Array(d);
      for (let _ = 0; _ < d; ++_) h[_] = hd(o.style[_], t);
    } else h = [hd(o.style, t)];
    s[l] = { filter: c, styles: h };
  }
  return function (l) {
    const o = [];
    let c = !1;
    for (let h = 0; h < i; ++h) {
      const d = s[h].filter;
      if (d(l) && !(r[h].else && c)) {
        c = !0;
        for (const _ of s[h].styles) {
          const m = _(l);
          m && o.push(m);
        }
      }
    }
    return o;
  };
}
function hd(r, t) {
  const i = Ha(r, "", t),
    s = ja(r, "", t),
    l = W2(r, t),
    o = Q2(r, t),
    c = Ve(r, "z-index", t);
  if (!i && !s && !l && !o && !nr(r))
    throw new Error(
      "No fill, stroke, point, or text symbolizer properties in style: " +
        JSON.stringify(r),
    );
  const h = new ms();
  return function (d) {
    let _ = !0;
    if (i) {
      const m = i(d);
      m && (_ = !1), h.setFill(m);
    }
    if (s) {
      const m = s(d);
      m && (_ = !1), h.setStroke(m);
    }
    if (l) {
      const m = l(d);
      m && (_ = !1), h.setText(m);
    }
    if (o) {
      const m = o(d);
      m && (_ = !1), h.setImage(m);
    }
    return c && h.setZIndex(c(d)), _ ? null : h;
  };
}
function Ha(r, t, i) {
  let s;
  if (t + "fill-pattern-src" in r) s = eC(r, t + "fill-", i);
  else {
    if (r[t + "fill-color"] === "none") return (o) => null;
    s = Kd(r, t + "fill-color", i);
  }
  if (!s) return null;
  const l = new xl();
  return function (o) {
    const c = s(o);
    return c === Yd ? null : (l.setColor(c), l);
  };
}
function ja(r, t, i) {
  const s = Ve(r, t + "stroke-width", i),
    l = Kd(r, t + "stroke-color", i);
  if (!s && !l) return null;
  const o = wn(r, t + "stroke-line-cap", i),
    c = wn(r, t + "stroke-line-join", i),
    h = r1(r, t + "stroke-line-dash", i),
    d = Ve(r, t + "stroke-line-dash-offset", i),
    _ = Ve(r, t + "stroke-miter-limit", i),
    m = new El();
  return function (y) {
    if (l) {
      const v = l(y);
      if (v === Yd) return null;
      m.setColor(v);
    }
    if ((s && m.setWidth(s(y)), o)) {
      const v = o(y);
      if (v !== "butt" && v !== "round" && v !== "square")
        throw new Error("Expected butt, round, or square line cap");
      m.setLineCap(v);
    }
    if (c) {
      const v = c(y);
      if (v !== "bevel" && v !== "round" && v !== "miter")
        throw new Error("Expected bevel, round, or miter line join");
      m.setLineJoin(v);
    }
    return (
      h && m.setLineDash(h(y)),
      d && m.setLineDashOffset(d(y)),
      _ && m.setMiterLimit(_(y)),
      m
    );
  };
}
function W2(r, t) {
  const i = "text-",
    s = wn(r, i + "value", t);
  if (!s) return null;
  const l = Ha(r, i, t),
    o = Ha(r, i + "background-", t),
    c = ja(r, i, t),
    h = ja(r, i + "background-", t),
    d = wn(r, i + "font", t),
    _ = Ve(r, i + "max-angle", t),
    m = Ve(r, i + "offset-x", t),
    y = Ve(r, i + "offset-y", t),
    v = ol(r, i + "overflow", t),
    E = wn(r, i + "placement", t),
    x = Ve(r, i + "repeat", t),
    b = fc(r, i + "scale", t),
    R = ol(r, i + "rotate-with-view", t),
    A = Ve(r, i + "rotation", t),
    O = wn(r, i + "align", t),
    G = wn(r, i + "justify", t),
    z = wn(r, i + "baseline", t),
    D = ol(r, i + "keep-upright", t),
    j = r1(r, i + "padding", t),
    Q = dc(r, i + "declutter-mode"),
    Z = new cc({ declutterMode: Q });
  return function (F) {
    if (
      (Z.setText(s(F)),
      l && Z.setFill(l(F)),
      o && Z.setBackgroundFill(o(F)),
      c && Z.setStroke(c(F)),
      h && Z.setBackgroundStroke(h(F)),
      d && Z.setFont(d(F)),
      _ && Z.setMaxAngle(_(F)),
      m && Z.setOffsetX(m(F)),
      y && Z.setOffsetY(y(F)),
      v && Z.setOverflow(v(F)),
      E)
    ) {
      const V = E(F);
      if (V !== "point" && V !== "line")
        throw new Error("Expected point or line for text-placement");
      Z.setPlacement(V);
    }
    if (
      (x && Z.setRepeat(x(F)),
      b && Z.setScale(b(F)),
      R && Z.setRotateWithView(R(F)),
      A && Z.setRotation(A(F)),
      O)
    ) {
      const V = O(F);
      if (
        V !== "left" &&
        V !== "center" &&
        V !== "right" &&
        V !== "end" &&
        V !== "start"
      )
        throw new Error(
          "Expected left, right, center, start, or end for text-align",
        );
      Z.setTextAlign(V);
    }
    if (G) {
      const V = G(F);
      if (V !== "left" && V !== "right" && V !== "center")
        throw new Error("Expected left, right, or center for text-justify");
      Z.setJustify(V);
    }
    if (z) {
      const V = z(F);
      if (
        V !== "bottom" &&
        V !== "top" &&
        V !== "middle" &&
        V !== "alphabetic" &&
        V !== "hanging"
      )
        throw new Error(
          "Expected bottom, top, middle, alphabetic, or hanging for text-baseline",
        );
      Z.setTextBaseline(V);
    }
    return j && Z.setPadding(j(F)), D && Z.setKeepUpright(D(F)), Z;
  };
}
function Q2(r, t) {
  return "icon-src" in r
    ? J2(r, t)
    : "shape-points" in r
      ? $2(r, t)
      : "circle-radius" in r
        ? tC(r, t)
        : null;
}
function J2(r, t) {
  const i = "icon-",
    s = i + "src",
    l = l1(r[s], s),
    o = ku(r, i + "anchor", t),
    c = fc(r, i + "scale", t),
    h = Ve(r, i + "opacity", t),
    d = ku(r, i + "displacement", t),
    _ = Ve(r, i + "rotation", t),
    m = ol(r, i + "rotate-with-view", t),
    y = Yy(r, i + "anchor-origin"),
    v = ky(r, i + "anchor-x-units"),
    E = ky(r, i + "anchor-y-units"),
    x = rC(r, i + "color"),
    b = nC(r, i + "cross-origin"),
    R = sC(r, i + "offset"),
    A = Yy(r, i + "offset-origin"),
    O = Pu(r, i + "width"),
    G = Pu(r, i + "height"),
    z = iC(r, i + "size"),
    D = dc(r, i + "declutter-mode"),
    j = new hc({
      src: l,
      anchorOrigin: y,
      anchorXUnits: v,
      anchorYUnits: E,
      color: x,
      crossOrigin: b,
      offset: R,
      offsetOrigin: A,
      height: G,
      width: O,
      size: z,
      declutterMode: D,
    });
  return function (Q) {
    return (
      h && j.setOpacity(h(Q)),
      d && j.setDisplacement(d(Q)),
      _ && j.setRotation(_(Q)),
      m && j.setRotateWithView(m(Q)),
      c && j.setScale(c(Q)),
      o && j.setAnchor(o(Q)),
      j
    );
  };
}
function $2(r, t) {
  const i = "shape-",
    s = i + "points",
    l = i + "radius",
    o = fd(r[s], s),
    c = fd(r[l], l),
    h = Ha(r, i, t),
    d = ja(r, i, t),
    _ = fc(r, i + "scale", t),
    m = ku(r, i + "displacement", t),
    y = Ve(r, i + "rotation", t),
    v = ol(r, i + "rotate-with-view", t),
    E = Pu(r, i + "radius2"),
    x = Pu(r, i + "angle"),
    b = dc(r, i + "declutter-mode"),
    R = new oc({
      points: o,
      radius: c,
      radius2: E,
      angle: x,
      declutterMode: b,
    });
  return function (A) {
    return (
      h && R.setFill(h(A)),
      d && R.setStroke(d(A)),
      m && R.setDisplacement(m(A)),
      y && R.setRotation(y(A)),
      v && R.setRotateWithView(v(A)),
      _ && R.setScale(_(A)),
      R
    );
  };
}
function tC(r, t) {
  const i = "circle-",
    s = Ha(r, i, t),
    l = ja(r, i, t),
    o = Ve(r, i + "radius", t),
    c = fc(r, i + "scale", t),
    h = ku(r, i + "displacement", t),
    d = Ve(r, i + "rotation", t),
    _ = ol(r, i + "rotate-with-view", t),
    m = dc(r, i + "declutter-mode"),
    y = new uc({ radius: 5, declutterMode: m });
  return function (v) {
    return (
      o && y.setRadius(o(v)),
      s && y.setFill(s(v)),
      l && y.setStroke(l(v)),
      h && y.setDisplacement(h(v)),
      d && y.setRotation(d(v)),
      _ && y.setRotateWithView(_(v)),
      c && y.setScale(c(v)),
      y
    );
  };
}
function Ve(r, t, i) {
  if (!(t in r)) return;
  const s = Nn(r[t], At, i);
  return function (l) {
    return fd(s(l), t);
  };
}
function wn(r, t, i) {
  if (!(t in r)) return null;
  const s = Nn(r[t], Ke, i);
  return function (l) {
    return l1(s(l), t);
  };
}
function eC(r, t, i) {
  const s = wn(r, t + "pattern-src", i),
    l = Xy(r, t + "pattern-offset", i),
    o = Xy(r, t + "pattern-size", i),
    c = Kd(r, t + "color", i);
  return function (h) {
    return { src: s(h), offset: l && l(h), size: o && o(h), color: c && c(h) };
  };
}
function ol(r, t, i) {
  if (!(t in r)) return null;
  const s = Nn(r[t], Xe, i);
  return function (l) {
    const o = s(l);
    if (typeof o != "boolean") throw new Error(`Expected a boolean for ${t}`);
    return o;
  };
}
function Kd(r, t, i) {
  if (!(t in r)) return null;
  const s = Nn(r[t], Gi, i);
  return function (l) {
    return a1(s(l), t);
  };
}
function r1(r, t, i) {
  if (!(t in r)) return null;
  const s = Nn(r[t], sr, i);
  return function (l) {
    return $a(s(l), t);
  };
}
function ku(r, t, i) {
  if (!(t in r)) return null;
  const s = Nn(r[t], sr, i);
  return function (l) {
    const o = $a(s(l), t);
    if (o.length !== 2) throw new Error(`Expected two numbers for ${t}`);
    return o;
  };
}
function Xy(r, t, i) {
  if (!(t in r)) return null;
  const s = Nn(r[t], sr, i);
  return function (l) {
    return o1(s(l), t);
  };
}
function fc(r, t, i) {
  if (!(t in r)) return null;
  const s = Nn(r[t], sr | At, i);
  return function (l) {
    return lC(s(l), t);
  };
}
function Pu(r, t) {
  const i = r[t];
  if (i !== void 0) {
    if (typeof i != "number") throw new Error(`Expected a number for ${t}`);
    return i;
  }
}
function iC(r, t) {
  const i = r[t];
  if (i !== void 0) {
    if (typeof i == "number") return We(i);
    if (!Array.isArray(i))
      throw new Error(`Expected a number or size array for ${t}`);
    if (i.length !== 2 || typeof i[0] != "number" || typeof i[1] != "number")
      throw new Error(`Expected a number or size array for ${t}`);
    return i;
  }
}
function nC(r, t) {
  const i = r[t];
  if (i !== void 0) {
    if (typeof i != "string") throw new Error(`Expected a string for ${t}`);
    return i;
  }
}
function Yy(r, t) {
  const i = r[t];
  if (i !== void 0) {
    if (
      i !== "bottom-left" &&
      i !== "bottom-right" &&
      i !== "top-left" &&
      i !== "top-right"
    )
      throw new Error(
        `Expected bottom-left, bottom-right, top-left, or top-right for ${t}`,
      );
    return i;
  }
}
function ky(r, t) {
  const i = r[t];
  if (i !== void 0) {
    if (i !== "pixels" && i !== "fraction")
      throw new Error(`Expected pixels or fraction for ${t}`);
    return i;
  }
}
function sC(r, t) {
  const i = r[t];
  if (i !== void 0) return $a(i, t);
}
function dc(r, t) {
  const i = r[t];
  if (i !== void 0) {
    if (typeof i != "string") throw new Error(`Expected a string for ${t}`);
    if (i !== "declutter" && i !== "obstacle" && i !== "none")
      throw new Error(`Expected declutter, obstacle, or none for ${t}`);
    return i;
  }
}
function rC(r, t) {
  const i = r[t];
  if (i !== void 0) return a1(i, t);
}
function $a(r, t) {
  if (!Array.isArray(r)) throw new Error(`Expected an array for ${t}`);
  const i = r.length;
  for (let s = 0; s < i; ++s)
    if (typeof r[s] != "number")
      throw new Error(`Expected an array of numbers for ${t}`);
  return r;
}
function l1(r, t) {
  if (typeof r != "string") throw new Error(`Expected a string for ${t}`);
  return r;
}
function fd(r, t) {
  if (typeof r != "number") throw new Error(`Expected a number for ${t}`);
  return r;
}
function a1(r, t) {
  if (typeof r == "string") return r;
  const i = $a(r, t),
    s = i.length;
  if (s < 3 || s > 4)
    throw new Error(`Expected a color with 3 or 4 values for ${t}`);
  return i;
}
function o1(r, t) {
  const i = $a(r, t);
  if (i.length !== 2)
    throw new Error(`Expected an array of two numbers for ${t}`);
  return i;
}
function lC(r, t) {
  return typeof r == "number" ? r : o1(r, t);
}
const Ni = { CENTER: "center", RESOLUTION: "resolution", ROTATION: "rotation" };
function Py(r, t, i) {
  return function (s, l, o, c, h) {
    if (!s) return;
    if (!l && !t) return s;
    const d = t ? 0 : o[0] * l,
      _ = t ? 0 : o[1] * l,
      m = h ? h[0] : 0,
      y = h ? h[1] : 0;
    let v = r[0] + d / 2 + m,
      E = r[2] - d / 2 + m,
      x = r[1] + _ / 2 + y,
      b = r[3] - _ / 2 + y;
    v > E && ((v = (E + v) / 2), (E = v)),
      x > b && ((x = (b + x) / 2), (b = x));
    let R = re(s[0], v, E),
      A = re(s[1], x, b);
    if (c && i && l) {
      const O = 30 * l;
      (R +=
        -O * Math.log(1 + Math.max(0, v - s[0]) / O) +
        O * Math.log(1 + Math.max(0, s[0] - E) / O)),
        (A +=
          -O * Math.log(1 + Math.max(0, x - s[1]) / O) +
          O * Math.log(1 + Math.max(0, s[1] - b) / O));
    }
    return [R, A];
  };
}
function aC(r) {
  return r;
}
function u1(r) {
  return Math.pow(r, 3);
}
function Cl(r) {
  return 1 - u1(1 - r);
}
function oC(r) {
  return 3 * r * r - 2 * r * r * r;
}
function uC(r) {
  return r;
}
function qd(r, t, i, s) {
  const l = Ft(t) / i[0],
    o = Ye(t) / i[1];
  return s ? Math.min(r, Math.max(l, o)) : Math.min(r, Math.min(l, o));
}
function Vd(r, t, i) {
  let s = Math.min(r, t);
  const l = 50;
  return (
    (s *= Math.log(1 + l * Math.max(0, r / t - 1)) / l + 1),
    i &&
      ((s = Math.max(s, i)),
      (s /= Math.log(1 + l * Math.max(0, i / r - 1)) / l + 1)),
    re(s, i / 2, t * 2)
  );
}
function cC(r, t, i, s) {
  return (
    (t = t !== void 0 ? t : !0),
    function (l, o, c, h) {
      if (l !== void 0) {
        const d = r[0],
          _ = r[r.length - 1],
          m = i ? qd(d, i, c, s) : d;
        if (h) return t ? Vd(l, m, _) : re(l, _, m);
        const y = Math.min(m, l),
          v = Math.floor(pd(r, y, o));
        return r[v] > m && v < r.length - 1 ? r[v + 1] : r[v];
      }
    }
  );
}
function hC(r, t, i, s, l, o) {
  return (
    (s = s !== void 0 ? s : !0),
    (i = i !== void 0 ? i : 0),
    function (c, h, d, _) {
      if (c !== void 0) {
        const m = l ? qd(t, l, d, o) : t;
        if (_) return s ? Vd(c, m, i) : re(c, i, m);
        const y = 1e-9,
          v = Math.ceil(Math.log(t / m) / Math.log(r) - y),
          E = -h * (0.5 - y) + 0.5,
          x = Math.min(m, c),
          b = Math.floor(Math.log(t / x) / Math.log(r) + E),
          R = Math.max(v, b),
          A = t / Math.pow(r, R);
        return re(A, i, m);
      }
    }
  );
}
function By(r, t, i, s, l) {
  return (
    (i = i !== void 0 ? i : !0),
    function (o, c, h, d) {
      if (o !== void 0) {
        const _ = s ? qd(r, s, h, l) : r;
        return !i || !d ? re(o, t, _) : Vd(o, _, t);
      }
    }
  );
}
function Wd(r) {
  if (r !== void 0) return 0;
}
function Hy(r) {
  if (r !== void 0) return r;
}
function fC(r) {
  const t = (2 * Math.PI) / r;
  return function (i, s) {
    if (s) return i;
    if (i !== void 0) return (i = Math.floor(i / t + 0.5) * t), i;
  };
}
function dC(r) {
  const t = gs(5);
  return function (i, s) {
    return s || i === void 0 ? i : Math.abs(i) <= t ? 0 : i;
  };
}
const gC = 42,
  Qd = 256,
  Yf = 0;
class Ji extends Xi {
  constructor(t) {
    super(),
      this.on,
      this.once,
      this.un,
      (t = Object.assign({}, t)),
      (this.hints_ = [0, 0]),
      (this.animations_ = []),
      this.updateAnimationKey_,
      (this.projection_ = Md(t.projection, "EPSG:3857")),
      (this.viewportSize_ = [100, 100]),
      (this.targetCenter_ = null),
      this.targetResolution_,
      this.targetRotation_,
      (this.nextCenter_ = null),
      this.nextResolution_,
      this.nextRotation_,
      (this.cancelAnchor_ = void 0),
      t.projection && GS(),
      t.center && (t.center = Rn(t.center, this.projection_)),
      t.extent && (t.extent = hs(t.extent, this.projection_)),
      this.applyOptions_(t);
  }
  applyOptions_(t) {
    const i = Object.assign({}, t);
    for (const h in Ni) delete i[h];
    this.setProperties(i, !0);
    const s = mC(t);
    (this.maxResolution_ = s.maxResolution),
      (this.minResolution_ = s.minResolution),
      (this.zoomFactor_ = s.zoomFactor),
      (this.resolutions_ = t.resolutions),
      (this.padding_ = t.padding),
      (this.minZoom_ = s.minZoom);
    const l = _C(t),
      o = s.constraint,
      c = yC(t);
    (this.constraints_ = { center: l, resolution: o, rotation: c }),
      this.setRotation(t.rotation !== void 0 ? t.rotation : 0),
      this.setCenterInternal(t.center !== void 0 ? t.center : null),
      t.resolution !== void 0
        ? this.setResolution(t.resolution)
        : t.zoom !== void 0 && this.setZoom(t.zoom);
  }
  get padding() {
    return this.padding_;
  }
  set padding(t) {
    let i = this.padding_;
    this.padding_ = t;
    const s = this.getCenterInternal();
    if (s) {
      const l = t || [0, 0, 0, 0];
      i = i || [0, 0, 0, 0];
      const o = this.getResolution(),
        c = (o / 2) * (l[3] - i[3] + i[1] - l[1]),
        h = (o / 2) * (l[0] - i[0] + i[2] - l[2]);
      this.setCenterInternal([s[0] + c, s[1] - h]);
    }
  }
  getUpdatedOptions_(t) {
    const i = this.getProperties();
    return (
      i.resolution !== void 0
        ? (i.resolution = this.getResolution())
        : (i.zoom = this.getZoom()),
      (i.center = this.getCenterInternal()),
      (i.rotation = this.getRotation()),
      Object.assign({}, i, t)
    );
  }
  animate(t) {
    this.isDef() && !this.getAnimating() && this.resolveConstraints(0);
    const i = new Array(arguments.length);
    for (let s = 0; s < i.length; ++s) {
      let l = arguments[s];
      l.center &&
        ((l = Object.assign({}, l)),
        (l.center = Rn(l.center, this.getProjection()))),
        l.anchor &&
          ((l = Object.assign({}, l)),
          (l.anchor = Rn(l.anchor, this.getProjection()))),
        (i[s] = l);
    }
    this.animateInternal.apply(this, i);
  }
  animateInternal(t) {
    let i = arguments.length,
      s;
    i > 1 &&
      typeof arguments[i - 1] == "function" &&
      ((s = arguments[i - 1]), --i);
    let l = 0;
    for (; l < i && !this.isDef(); ++l) {
      const m = arguments[l];
      m.center && this.setCenterInternal(m.center),
        m.zoom !== void 0
          ? this.setZoom(m.zoom)
          : m.resolution && this.setResolution(m.resolution),
        m.rotation !== void 0 && this.setRotation(m.rotation);
    }
    if (l === i) {
      s && xu(s, !0);
      return;
    }
    let o = Date.now(),
      c = this.targetCenter_.slice(),
      h = this.targetResolution_,
      d = this.targetRotation_;
    const _ = [];
    for (; l < i; ++l) {
      const m = arguments[l],
        y = {
          start: o,
          complete: !1,
          anchor: m.anchor,
          duration: m.duration !== void 0 ? m.duration : 1e3,
          easing: m.easing || oC,
          callback: s,
        };
      if (
        (m.center &&
          ((y.sourceCenter = c),
          (y.targetCenter = m.center.slice()),
          (c = y.targetCenter)),
        m.zoom !== void 0
          ? ((y.sourceResolution = h),
            (y.targetResolution = this.getResolutionForZoom(m.zoom)),
            (h = y.targetResolution))
          : m.resolution &&
            ((y.sourceResolution = h),
            (y.targetResolution = m.resolution),
            (h = y.targetResolution)),
        m.rotation !== void 0)
      ) {
        y.sourceRotation = d;
        const v = ll(m.rotation - d + Math.PI, 2 * Math.PI) - Math.PI;
        (y.targetRotation = d + v), (d = y.targetRotation);
      }
      pC(y) ? (y.complete = !0) : (o += y.duration), _.push(y);
    }
    this.animations_.push(_),
      this.setHint(Le.ANIMATING, 1),
      this.updateAnimations_();
  }
  getAnimating() {
    return this.hints_[Le.ANIMATING] > 0;
  }
  getInteracting() {
    return this.hints_[Le.INTERACTING] > 0;
  }
  cancelAnimations() {
    this.setHint(Le.ANIMATING, -this.hints_[Le.ANIMATING]);
    let t;
    for (let i = 0, s = this.animations_.length; i < s; ++i) {
      const l = this.animations_[i];
      if ((l[0].callback && xu(l[0].callback, !1), !t))
        for (let o = 0, c = l.length; o < c; ++o) {
          const h = l[o];
          if (!h.complete) {
            t = h.anchor;
            break;
          }
        }
    }
    (this.animations_.length = 0),
      (this.cancelAnchor_ = t),
      (this.nextCenter_ = null),
      (this.nextResolution_ = NaN),
      (this.nextRotation_ = NaN);
  }
  updateAnimations_() {
    if (
      (this.updateAnimationKey_ !== void 0 &&
        (cancelAnimationFrame(this.updateAnimationKey_),
        (this.updateAnimationKey_ = void 0)),
      !this.getAnimating())
    )
      return;
    const t = Date.now();
    let i = !1;
    for (let s = this.animations_.length - 1; s >= 0; --s) {
      const l = this.animations_[s];
      let o = !0;
      for (let c = 0, h = l.length; c < h; ++c) {
        const d = l[c];
        if (d.complete) continue;
        const _ = t - d.start;
        let m = d.duration > 0 ? _ / d.duration : 1;
        m >= 1 ? ((d.complete = !0), (m = 1)) : (o = !1);
        const y = d.easing(m);
        if (d.sourceCenter) {
          const v = d.sourceCenter[0],
            E = d.sourceCenter[1],
            x = d.targetCenter[0],
            b = d.targetCenter[1];
          this.nextCenter_ = d.targetCenter;
          const R = v + y * (x - v),
            A = E + y * (b - E);
          this.targetCenter_ = [R, A];
        }
        if (d.sourceResolution && d.targetResolution) {
          const v =
            y === 1
              ? d.targetResolution
              : d.sourceResolution +
                y * (d.targetResolution - d.sourceResolution);
          if (d.anchor) {
            const E = this.getViewportSize_(this.getRotation()),
              x = this.constraints_.resolution(v, 0, E, !0);
            this.targetCenter_ = this.calculateCenterZoom(x, d.anchor);
          }
          (this.nextResolution_ = d.targetResolution),
            (this.targetResolution_ = v),
            this.applyTargetState_(!0);
        }
        if (d.sourceRotation !== void 0 && d.targetRotation !== void 0) {
          const v =
            y === 1
              ? ll(d.targetRotation + Math.PI, 2 * Math.PI) - Math.PI
              : d.sourceRotation + y * (d.targetRotation - d.sourceRotation);
          if (d.anchor) {
            const E = this.constraints_.rotation(v, !0);
            this.targetCenter_ = this.calculateCenterRotate(E, d.anchor);
          }
          (this.nextRotation_ = d.targetRotation), (this.targetRotation_ = v);
        }
        if ((this.applyTargetState_(!0), (i = !0), !d.complete)) break;
      }
      if (o) {
        (this.animations_[s] = null),
          this.setHint(Le.ANIMATING, -1),
          (this.nextCenter_ = null),
          (this.nextResolution_ = NaN),
          (this.nextRotation_ = NaN);
        const c = l[0].callback;
        c && xu(c, !0);
      }
    }
    (this.animations_ = this.animations_.filter(Boolean)),
      i &&
        this.updateAnimationKey_ === void 0 &&
        (this.updateAnimationKey_ = requestAnimationFrame(
          this.updateAnimations_.bind(this),
        ));
  }
  calculateCenterRotate(t, i) {
    let s;
    const l = this.getCenterInternal();
    return (
      l !== void 0 &&
        ((s = [l[0] - i[0], l[1] - i[1]]),
        Cd(s, t - this.getRotation()),
        uS(s, i)),
      s
    );
  }
  calculateCenterZoom(t, i) {
    let s;
    const l = this.getCenterInternal(),
      o = this.getResolution();
    if (l !== void 0 && o !== void 0) {
      const c = i[0] - (t * (i[0] - l[0])) / o,
        h = i[1] - (t * (i[1] - l[1])) / o;
      s = [c, h];
    }
    return s;
  }
  getViewportSize_(t) {
    const i = this.viewportSize_;
    if (t) {
      const s = i[0],
        l = i[1];
      return [
        Math.abs(s * Math.cos(t)) + Math.abs(l * Math.sin(t)),
        Math.abs(s * Math.sin(t)) + Math.abs(l * Math.cos(t)),
      ];
    }
    return i;
  }
  setViewportSize(t) {
    (this.viewportSize_ = Array.isArray(t) ? t.slice() : [100, 100]),
      this.getAnimating() || this.resolveConstraints(0);
  }
  getCenter() {
    const t = this.getCenterInternal();
    return t && rd(t, this.getProjection());
  }
  getCenterInternal() {
    return this.get(Ni.CENTER);
  }
  getConstraints() {
    return this.constraints_;
  }
  getConstrainResolution() {
    return this.get("constrainResolution");
  }
  getHints(t) {
    return t !== void 0
      ? ((t[0] = this.hints_[0]), (t[1] = this.hints_[1]), t)
      : this.hints_.slice();
  }
  calculateExtent(t) {
    const i = this.calculateExtentInternal(t);
    return Du(i, this.getProjection());
  }
  calculateExtentInternal(t) {
    t = t || this.getViewportSizeMinusPadding_();
    const i = this.getCenterInternal();
    Lt(i, "The view center is not defined");
    const s = this.getResolution();
    Lt(s !== void 0, "The view resolution is not defined");
    const l = this.getRotation();
    return Lt(l !== void 0, "The view rotation is not defined"), td(i, s, l, t);
  }
  getMaxResolution() {
    return this.maxResolution_;
  }
  getMinResolution() {
    return this.minResolution_;
  }
  getMaxZoom() {
    return this.getZoomForResolution(this.minResolution_);
  }
  setMaxZoom(t) {
    this.applyOptions_(this.getUpdatedOptions_({ maxZoom: t }));
  }
  getMinZoom() {
    return this.getZoomForResolution(this.maxResolution_);
  }
  setMinZoom(t) {
    this.applyOptions_(this.getUpdatedOptions_({ minZoom: t }));
  }
  setConstrainResolution(t) {
    this.applyOptions_(this.getUpdatedOptions_({ constrainResolution: t }));
  }
  getProjection() {
    return this.projection_;
  }
  getResolution() {
    return this.get(Ni.RESOLUTION);
  }
  getResolutions() {
    return this.resolutions_;
  }
  getResolutionForExtent(t, i) {
    return this.getResolutionForExtentInternal(hs(t, this.getProjection()), i);
  }
  getResolutionForExtentInternal(t, i) {
    i = i || this.getViewportSizeMinusPadding_();
    const s = Ft(t) / i[0],
      l = Ye(t) / i[1];
    return Math.max(s, l);
  }
  getResolutionForValueFunction(t) {
    t = t || 2;
    const i = this.getConstrainedResolution(this.maxResolution_),
      s = this.minResolution_,
      l = Math.log(i / s) / Math.log(t);
    return function (o) {
      return i / Math.pow(t, o * l);
    };
  }
  getRotation() {
    return this.get(Ni.ROTATION);
  }
  getValueForResolutionFunction(t) {
    const i = Math.log(t || 2),
      s = this.getConstrainedResolution(this.maxResolution_),
      l = this.minResolution_,
      o = Math.log(s / l) / i;
    return function (c) {
      return Math.log(s / c) / i / o;
    };
  }
  getViewportSizeMinusPadding_(t) {
    let i = this.getViewportSize_(t);
    const s = this.padding_;
    return s && (i = [i[0] - s[1] - s[3], i[1] - s[0] - s[2]]), i;
  }
  getState() {
    const t = this.getProjection(),
      i = this.getResolution(),
      s = this.getRotation();
    let l = this.getCenterInternal();
    const o = this.padding_;
    if (o) {
      const c = this.getViewportSizeMinusPadding_();
      l = kf(
        l,
        this.getViewportSize_(),
        [c[0] / 2 + o[3], c[1] / 2 + o[0]],
        i,
        s,
      );
    }
    return {
      center: l.slice(0),
      projection: t !== void 0 ? t : null,
      resolution: i,
      nextCenter: this.nextCenter_,
      nextResolution: this.nextResolution_,
      nextRotation: this.nextRotation_,
      rotation: s,
      zoom: this.getZoom(),
    };
  }
  getViewStateAndExtent() {
    return { viewState: this.getState(), extent: this.calculateExtent() };
  }
  getZoom() {
    let t;
    const i = this.getResolution();
    return i !== void 0 && (t = this.getZoomForResolution(i)), t;
  }
  getZoomForResolution(t) {
    let i = this.minZoom_ || 0,
      s,
      l;
    if (this.resolutions_) {
      const o = pd(this.resolutions_, t, 1);
      (i = o),
        (s = this.resolutions_[o]),
        o == this.resolutions_.length - 1
          ? (l = 2)
          : (l = s / this.resolutions_[o + 1]);
    } else (s = this.maxResolution_), (l = this.zoomFactor_);
    return i + Math.log(s / t) / Math.log(l);
  }
  getResolutionForZoom(t) {
    var i;
    if ((i = this.resolutions_) != null && i.length) {
      if (this.resolutions_.length === 1) return this.resolutions_[0];
      const s = re(Math.floor(t), 0, this.resolutions_.length - 2),
        l = this.resolutions_[s] / this.resolutions_[s + 1];
      return this.resolutions_[s] / Math.pow(l, re(t - s, 0, 1));
    }
    return this.maxResolution_ / Math.pow(this.zoomFactor_, t - this.minZoom_);
  }
  fit(t, i) {
    let s;
    if (
      (Lt(
        Array.isArray(t) || typeof t.getSimplifiedGeometry == "function",
        "Invalid extent or geometry provided as `geometry`",
      ),
      Array.isArray(t))
    ) {
      Lt(!qa(t), "Cannot fit empty extent provided as `geometry`");
      const l = hs(t, this.getProjection());
      s = fy(l);
    } else if (t.getType() === "Circle") {
      const l = hs(t.getExtent(), this.getProjection());
      (s = fy(l)), s.rotate(this.getRotation(), ys(l));
    } else {
      const l = Ou();
      l ? (s = t.clone().transform(l, this.getProjection())) : (s = t);
    }
    this.fitInternal(s, i);
  }
  rotatedExtentForGeometry(t) {
    const i = this.getRotation(),
      s = Math.cos(i),
      l = Math.sin(-i),
      o = t.getFlatCoordinates(),
      c = t.getStride();
    let h = 1 / 0,
      d = 1 / 0,
      _ = -1 / 0,
      m = -1 / 0;
    for (let y = 0, v = o.length; y < v; y += c) {
      const E = o[y] * s - o[y + 1] * l,
        x = o[y] * l + o[y + 1] * s;
      (h = Math.min(h, E)),
        (d = Math.min(d, x)),
        (_ = Math.max(_, E)),
        (m = Math.max(m, x));
    }
    return [h, d, _, m];
  }
  fitInternal(t, i) {
    i = i || {};
    let s = i.size;
    s || (s = this.getViewportSizeMinusPadding_());
    const l = i.padding !== void 0 ? i.padding : [0, 0, 0, 0],
      o = i.nearest !== void 0 ? i.nearest : !1;
    let c;
    i.minResolution !== void 0
      ? (c = i.minResolution)
      : i.maxZoom !== void 0
        ? (c = this.getResolutionForZoom(i.maxZoom))
        : (c = 0);
    const h = this.rotatedExtentForGeometry(t);
    let d = this.getResolutionForExtentInternal(h, [
      s[0] - l[1] - l[3],
      s[1] - l[0] - l[2],
    ]);
    (d = isNaN(d) ? c : Math.max(d, c)),
      (d = this.getConstrainedResolution(d, o ? 0 : 1));
    const _ = this.getRotation(),
      m = Math.sin(_),
      y = Math.cos(_),
      v = ys(h);
    (v[0] += ((l[1] - l[3]) / 2) * d), (v[1] += ((l[0] - l[2]) / 2) * d);
    const E = v[0] * y - v[1] * m,
      x = v[1] * y + v[0] * m,
      b = this.getConstrainedCenter([E, x], d),
      R = i.callback ? i.callback : hl;
    i.duration !== void 0
      ? this.animateInternal(
          { resolution: d, center: b, duration: i.duration, easing: i.easing },
          R,
        )
      : ((this.targetResolution_ = d),
        (this.targetCenter_ = b),
        this.applyTargetState_(!1, !0),
        xu(R, !0));
  }
  centerOn(t, i, s) {
    this.centerOnInternal(Rn(t, this.getProjection()), i, s);
  }
  centerOnInternal(t, i, s) {
    this.setCenterInternal(
      kf(t, i, s, this.getResolution(), this.getRotation()),
    );
  }
  calculateCenterShift(t, i, s, l) {
    let o;
    const c = this.padding_;
    if (c && t) {
      const h = this.getViewportSizeMinusPadding_(-s),
        d = kf(t, l, [h[0] / 2 + c[3], h[1] / 2 + c[0]], i, s);
      o = [t[0] - d[0], t[1] - d[1]];
    }
    return o;
  }
  isDef() {
    return !!this.getCenterInternal() && this.getResolution() !== void 0;
  }
  adjustCenter(t) {
    const i = rd(this.targetCenter_, this.getProjection());
    this.setCenter([i[0] + t[0], i[1] + t[1]]);
  }
  adjustCenterInternal(t) {
    const i = this.targetCenter_;
    this.setCenterInternal([i[0] + t[0], i[1] + t[1]]);
  }
  adjustResolution(t, i) {
    (i = i && Rn(i, this.getProjection())), this.adjustResolutionInternal(t, i);
  }
  adjustResolutionInternal(t, i) {
    const s = this.getAnimating() || this.getInteracting(),
      l = this.getViewportSize_(this.getRotation()),
      o = this.constraints_.resolution(this.targetResolution_ * t, 0, l, s);
    i && (this.targetCenter_ = this.calculateCenterZoom(o, i)),
      (this.targetResolution_ *= t),
      this.applyTargetState_();
  }
  adjustZoom(t, i) {
    this.adjustResolution(Math.pow(this.zoomFactor_, -t), i);
  }
  adjustRotation(t, i) {
    i && (i = Rn(i, this.getProjection())), this.adjustRotationInternal(t, i);
  }
  adjustRotationInternal(t, i) {
    const s = this.getAnimating() || this.getInteracting(),
      l = this.constraints_.rotation(this.targetRotation_ + t, s);
    i && (this.targetCenter_ = this.calculateCenterRotate(l, i)),
      (this.targetRotation_ += t),
      this.applyTargetState_();
  }
  setCenter(t) {
    this.setCenterInternal(t && Rn(t, this.getProjection()));
  }
  setCenterInternal(t) {
    (this.targetCenter_ = t), this.applyTargetState_();
  }
  setHint(t, i) {
    return (this.hints_[t] += i), this.changed(), this.hints_[t];
  }
  setResolution(t) {
    (this.targetResolution_ = t), this.applyTargetState_();
  }
  setRotation(t) {
    (this.targetRotation_ = t), this.applyTargetState_();
  }
  setZoom(t) {
    this.setResolution(this.getResolutionForZoom(t));
  }
  applyTargetState_(t, i) {
    const s = this.getAnimating() || this.getInteracting() || i,
      l = this.constraints_.rotation(this.targetRotation_, s),
      o = this.getViewportSize_(l),
      c = this.constraints_.resolution(this.targetResolution_, 0, o, s),
      h = this.constraints_.center(
        this.targetCenter_,
        c,
        o,
        s,
        this.calculateCenterShift(this.targetCenter_, c, l, o),
      );
    this.get(Ni.ROTATION) !== l && this.set(Ni.ROTATION, l),
      this.get(Ni.RESOLUTION) !== c &&
        (this.set(Ni.RESOLUTION, c), this.set("zoom", this.getZoom(), !0)),
      (!h || !this.get(Ni.CENTER) || !Au(this.get(Ni.CENTER), h)) &&
        this.set(Ni.CENTER, h),
      this.getAnimating() && !t && this.cancelAnimations(),
      (this.cancelAnchor_ = void 0);
  }
  resolveConstraints(t, i, s) {
    t = t !== void 0 ? t : 200;
    const l = i || 0,
      o = this.constraints_.rotation(this.targetRotation_),
      c = this.getViewportSize_(o),
      h = this.constraints_.resolution(this.targetResolution_, l, c),
      d = this.constraints_.center(
        this.targetCenter_,
        h,
        c,
        !1,
        this.calculateCenterShift(this.targetCenter_, h, o, c),
      );
    if (t === 0 && !this.cancelAnchor_) {
      (this.targetResolution_ = h),
        (this.targetRotation_ = o),
        (this.targetCenter_ = d),
        this.applyTargetState_();
      return;
    }
    (s = s || (t === 0 ? this.cancelAnchor_ : void 0)),
      (this.cancelAnchor_ = void 0),
      (this.getResolution() !== h ||
        this.getRotation() !== o ||
        !this.getCenterInternal() ||
        !Au(this.getCenterInternal(), d)) &&
        (this.getAnimating() && this.cancelAnimations(),
        this.animateInternal({
          rotation: o,
          center: d,
          resolution: h,
          duration: t,
          easing: Cl,
          anchor: s,
        }));
  }
  beginInteraction() {
    this.resolveConstraints(0), this.setHint(Le.INTERACTING, 1);
  }
  endInteraction(t, i, s) {
    (s = s && Rn(s, this.getProjection())),
      this.endInteractionInternal(t, i, s);
  }
  endInteractionInternal(t, i, s) {
    this.getInteracting() &&
      (this.setHint(Le.INTERACTING, -1), this.resolveConstraints(t, i, s));
  }
  getConstrainedCenter(t, i) {
    const s = this.getViewportSize_(this.getRotation());
    return this.constraints_.center(t, i || this.getResolution(), s);
  }
  getConstrainedZoom(t, i) {
    const s = this.getResolutionForZoom(t);
    return this.getZoomForResolution(this.getConstrainedResolution(s, i));
  }
  getConstrainedResolution(t, i) {
    i = i || 0;
    const s = this.getViewportSize_(this.getRotation());
    return this.constraints_.resolution(t, i, s);
  }
}
function xu(r, t) {
  setTimeout(function () {
    r(t);
  }, 0);
}
function _C(r) {
  if (r.extent !== void 0) {
    const i =
      r.smoothExtentConstraint !== void 0 ? r.smoothExtentConstraint : !0;
    return Py(r.extent, r.constrainOnlyCenter, i);
  }
  const t = Md(r.projection, "EPSG:3857");
  if (r.multiWorld !== !0 && t.isGlobal()) {
    const i = t.getExtent().slice();
    return (i[0] = -1 / 0), (i[2] = 1 / 0), Py(i, !1, !1);
  }
  return aC;
}
function mC(r) {
  let t,
    i,
    s,
    c = r.minZoom !== void 0 ? r.minZoom : Yf,
    h = r.maxZoom !== void 0 ? r.maxZoom : 28;
  const d = r.zoomFactor !== void 0 ? r.zoomFactor : 2,
    _ = r.multiWorld !== void 0 ? r.multiWorld : !1,
    m =
      r.smoothResolutionConstraint !== void 0
        ? r.smoothResolutionConstraint
        : !0,
    y = r.showFullExtent !== void 0 ? r.showFullExtent : !1,
    v = Md(r.projection, "EPSG:3857"),
    E = v.getExtent();
  let x = r.constrainOnlyCenter,
    b = r.extent;
  if (
    (!_ && !b && v.isGlobal() && ((x = !1), (b = E)), r.resolutions !== void 0)
  ) {
    const R = r.resolutions;
    (i = R[c]),
      (s = R[h] !== void 0 ? R[h] : R[R.length - 1]),
      r.constrainResolution
        ? (t = cC(R, m, !x && b, y))
        : (t = By(i, s, m, !x && b, y));
  } else {
    const A =
        (E
          ? Math.max(Ft(E), Ye(E))
          : (360 * Td.degrees) / v.getMetersPerUnit()) /
        Qd /
        Math.pow(2, Yf),
      O = A / Math.pow(2, 28 - Yf);
    (i = r.maxResolution),
      i !== void 0 ? (c = 0) : (i = A / Math.pow(d, c)),
      (s = r.minResolution),
      s === void 0 &&
        (r.maxZoom !== void 0
          ? r.maxResolution !== void 0
            ? (s = i / Math.pow(d, h))
            : (s = A / Math.pow(d, h))
          : (s = O)),
      (h = c + Math.floor(Math.log(i / s) / Math.log(d))),
      (s = i / Math.pow(d, h - c)),
      r.constrainResolution
        ? (t = hC(d, i, s, m, !x && b, y))
        : (t = By(i, s, m, !x && b, y));
  }
  return {
    constraint: t,
    maxResolution: i,
    minResolution: s,
    minZoom: c,
    zoomFactor: d,
  };
}
function yC(r) {
  if (r.enableRotation !== void 0 ? r.enableRotation : !0) {
    const i = r.constrainRotation;
    return i === void 0 || i === !0
      ? dC()
      : i === !1
        ? Hy
        : typeof i == "number"
          ? fC(i)
          : Hy;
  }
  return Wd;
}
function pC(r) {
  return !(
    (r.sourceCenter && r.targetCenter && !Au(r.sourceCenter, r.targetCenter)) ||
    r.sourceResolution !== r.targetResolution ||
    r.sourceRotation !== r.targetRotation
  );
}
function kf(r, t, i, s, l) {
  const o = Math.cos(-l);
  let c = Math.sin(-l),
    h = r[0] * o - r[1] * c,
    d = r[1] * o + r[0] * c;
  (h += (t[0] / 2 - i[0]) * s), (d += (i[1] - t[1] / 2) * s), (c = -c);
  const _ = h * o - d * c,
    m = d * o + h * c;
  return [_, m];
}
const Gt = {
  OPACITY: "opacity",
  VISIBLE: "visible",
  EXTENT: "extent",
  Z_INDEX: "zIndex",
  MAX_RESOLUTION: "maxResolution",
  MIN_RESOLUTION: "minResolution",
  MAX_ZOOM: "maxZoom",
  MIN_ZOOM: "minZoom",
  SOURCE: "source",
  MAP: "map",
};
class c1 extends Xi {
  constructor(t) {
    super(), this.on, this.once, this.un, (this.background_ = t.background);
    const i = Object.assign({}, t);
    typeof t.properties == "object" &&
      (delete i.properties, Object.assign(i, t.properties)),
      (i[Gt.OPACITY] = t.opacity !== void 0 ? t.opacity : 1),
      Lt(typeof i[Gt.OPACITY] == "number", "Layer opacity must be a number"),
      (i[Gt.VISIBLE] = t.visible !== void 0 ? t.visible : !0),
      (i[Gt.Z_INDEX] = t.zIndex),
      (i[Gt.MAX_RESOLUTION] =
        t.maxResolution !== void 0 ? t.maxResolution : 1 / 0),
      (i[Gt.MIN_RESOLUTION] = t.minResolution !== void 0 ? t.minResolution : 0),
      (i[Gt.MIN_ZOOM] = t.minZoom !== void 0 ? t.minZoom : -1 / 0),
      (i[Gt.MAX_ZOOM] = t.maxZoom !== void 0 ? t.maxZoom : 1 / 0),
      (this.className_ = i.className !== void 0 ? i.className : "ol-layer"),
      delete i.className,
      this.setProperties(i),
      (this.state_ = null);
  }
  getBackground() {
    return this.background_;
  }
  getClassName() {
    return this.className_;
  }
  getLayerState(t) {
    const i = this.state_ || { layer: this, managed: t === void 0 ? !0 : t },
      s = this.getZIndex();
    return (
      (i.opacity = re(Math.round(this.getOpacity() * 100) / 100, 0, 1)),
      (i.visible = this.getVisible()),
      (i.extent = this.getExtent()),
      (i.zIndex = s === void 0 && !i.managed ? 1 / 0 : s),
      (i.maxResolution = this.getMaxResolution()),
      (i.minResolution = Math.max(this.getMinResolution(), 0)),
      (i.minZoom = this.getMinZoom()),
      (i.maxZoom = this.getMaxZoom()),
      (this.state_ = i),
      i
    );
  }
  getLayersArray(t) {
    return _t();
  }
  getLayerStatesArray(t) {
    return _t();
  }
  getExtent() {
    return this.get(Gt.EXTENT);
  }
  getMaxResolution() {
    return this.get(Gt.MAX_RESOLUTION);
  }
  getMinResolution() {
    return this.get(Gt.MIN_RESOLUTION);
  }
  getMinZoom() {
    return this.get(Gt.MIN_ZOOM);
  }
  getMaxZoom() {
    return this.get(Gt.MAX_ZOOM);
  }
  getOpacity() {
    return this.get(Gt.OPACITY);
  }
  getSourceState() {
    return _t();
  }
  getVisible() {
    return this.get(Gt.VISIBLE);
  }
  getZIndex() {
    return this.get(Gt.Z_INDEX);
  }
  setBackground(t) {
    (this.background_ = t), this.changed();
  }
  setExtent(t) {
    this.set(Gt.EXTENT, t);
  }
  setMaxResolution(t) {
    this.set(Gt.MAX_RESOLUTION, t);
  }
  setMinResolution(t) {
    this.set(Gt.MIN_RESOLUTION, t);
  }
  setMaxZoom(t) {
    this.set(Gt.MAX_ZOOM, t);
  }
  setMinZoom(t) {
    this.set(Gt.MIN_ZOOM, t);
  }
  setOpacity(t) {
    Lt(typeof t == "number", "Layer opacity must be a number"),
      this.set(Gt.OPACITY, t);
  }
  setVisible(t) {
    this.set(Gt.VISIBLE, t);
  }
  setZIndex(t) {
    this.set(Gt.Z_INDEX, t);
  }
  disposeInternal() {
    this.state_ && ((this.state_.layer = null), (this.state_ = null)),
      super.disposeInternal();
  }
}
class gc extends c1 {
  constructor(t) {
    const i = Object.assign({}, t);
    delete i.source,
      super(i),
      this.on,
      this.once,
      this.un,
      (this.mapPrecomposeKey_ = null),
      (this.mapRenderKey_ = null),
      (this.sourceChangeKey_ = null),
      (this.renderer_ = null),
      (this.sourceReady_ = !1),
      (this.rendered = !1),
      t.render && (this.render = t.render),
      t.map && this.setMap(t.map),
      this.addChangeListener(Gt.SOURCE, this.handleSourcePropertyChange_);
    const s = t.source ? t.source : null;
    this.setSource(s);
  }
  getLayersArray(t) {
    return (t = t || []), t.push(this), t;
  }
  getLayerStatesArray(t) {
    return (t = t || []), t.push(this.getLayerState()), t;
  }
  getSource() {
    return this.get(Gt.SOURCE) || null;
  }
  getRenderSource() {
    return this.getSource();
  }
  getSourceState() {
    const t = this.getSource();
    return t ? t.getState() : "undefined";
  }
  handleSourceChange_() {
    this.changed(),
      !(this.sourceReady_ || this.getSource().getState() !== "ready") &&
        ((this.sourceReady_ = !0), this.dispatchEvent("sourceready"));
  }
  handleSourcePropertyChange_() {
    this.sourceChangeKey_ &&
      (jt(this.sourceChangeKey_), (this.sourceChangeKey_ = null)),
      (this.sourceReady_ = !1);
    const t = this.getSource();
    t &&
      ((this.sourceChangeKey_ = Mt(
        t,
        pt.CHANGE,
        this.handleSourceChange_,
        this,
      )),
      t.getState() === "ready" &&
        ((this.sourceReady_ = !0),
        setTimeout(() => {
          this.dispatchEvent("sourceready");
        }, 0)),
      this.clearRenderer()),
      this.changed();
  }
  getFeatures(t) {
    return this.renderer_ ? this.renderer_.getFeatures(t) : Promise.resolve([]);
  }
  getData(t) {
    return !this.renderer_ || !this.rendered ? null : this.renderer_.getData(t);
  }
  isVisible(t) {
    let i;
    const s = this.getMapInternal();
    !t && s && (t = s.getView()),
      t instanceof Ji
        ? (i = { viewState: t.getState(), extent: t.calculateExtent() })
        : (i = t),
      !i.layerStatesArray &&
        s &&
        (i.layerStatesArray = s.getLayerGroup().getLayerStatesArray());
    let l;
    if (i.layerStatesArray) {
      if (((l = i.layerStatesArray.find((c) => c.layer === this)), !l))
        return !1;
    } else l = this.getLayerState();
    const o = this.getExtent();
    return Jd(l, i.viewState) && (!o || qe(o, i.extent));
  }
  getAttributions(t) {
    var o;
    if (!this.isVisible(t)) return [];
    const i = (o = this.getSource()) == null ? void 0 : o.getAttributions();
    if (!i) return [];
    const s = t instanceof Ji ? t.getViewStateAndExtent() : t;
    let l = i(s);
    return Array.isArray(l) || (l = [l]), l;
  }
  render(t, i) {
    const s = this.getRenderer();
    return s.prepareFrame(t)
      ? ((this.rendered = !0), s.renderFrame(t, i))
      : null;
  }
  unrender() {
    this.rendered = !1;
  }
  getDeclutter() {}
  renderDeclutter(t, i) {}
  renderDeferred(t) {
    const i = this.getRenderer();
    i && i.renderDeferred(t);
  }
  setMapInternal(t) {
    t || this.unrender(), this.set(Gt.MAP, t);
  }
  getMapInternal() {
    return this.get(Gt.MAP);
  }
  setMap(t) {
    this.mapPrecomposeKey_ &&
      (jt(this.mapPrecomposeKey_), (this.mapPrecomposeKey_ = null)),
      t || this.changed(),
      this.mapRenderKey_ &&
        (jt(this.mapRenderKey_), (this.mapRenderKey_ = null)),
      t &&
        ((this.mapPrecomposeKey_ = Mt(
          t,
          xi.PRECOMPOSE,
          this.handlePrecompose_,
          this,
        )),
        (this.mapRenderKey_ = Mt(this, pt.CHANGE, t.render, t)),
        this.changed());
  }
  handlePrecompose_(t) {
    const i = t.frameState.layerStatesArray,
      s = this.getLayerState(!1);
    Lt(
      !i.some((l) => l.layer === s.layer),
      "A layer can only be added to the map once. Use either `layer.setMap()` or `map.addLayer()`, not both.",
    ),
      i.push(s);
  }
  setSource(t) {
    this.set(Gt.SOURCE, t);
  }
  getRenderer() {
    return (
      this.renderer_ || (this.renderer_ = this.createRenderer()), this.renderer_
    );
  }
  hasRenderer() {
    return !!this.renderer_;
  }
  createRenderer() {
    return null;
  }
  clearRenderer() {
    this.renderer_ && (this.renderer_.dispose(), delete this.renderer_);
  }
  disposeInternal() {
    this.clearRenderer(), this.setSource(null), super.disposeInternal();
  }
}
function Jd(r, t) {
  if (!r.visible) return !1;
  const i = t.resolution;
  if (i < r.minResolution || i >= r.maxResolution) return !1;
  const s = t.zoom;
  return s > r.minZoom && s <= r.maxZoom;
}
const jy = { RENDER_ORDER: "renderOrder" };
class h1 extends gc {
  constructor(t) {
    t = t || {};
    const i = Object.assign({}, t);
    delete i.style,
      delete i.renderBuffer,
      delete i.updateWhileAnimating,
      delete i.updateWhileInteracting,
      super(i),
      (this.declutter_ = t.declutter ? String(t.declutter) : void 0),
      (this.renderBuffer_ = t.renderBuffer !== void 0 ? t.renderBuffer : 100),
      (this.style_ = null),
      (this.styleFunction_ = void 0),
      this.setStyle(t.style),
      (this.updateWhileAnimating_ =
        t.updateWhileAnimating !== void 0 ? t.updateWhileAnimating : !1),
      (this.updateWhileInteracting_ =
        t.updateWhileInteracting !== void 0 ? t.updateWhileInteracting : !1);
  }
  getDeclutter() {
    return this.declutter_;
  }
  getFeatures(t) {
    return super.getFeatures(t);
  }
  getRenderBuffer() {
    return this.renderBuffer_;
  }
  getRenderOrder() {
    return this.get(jy.RENDER_ORDER);
  }
  getStyle() {
    return this.style_;
  }
  getStyleFunction() {
    return this.styleFunction_;
  }
  getUpdateWhileAnimating() {
    return this.updateWhileAnimating_;
  }
  getUpdateWhileInteracting() {
    return this.updateWhileInteracting_;
  }
  renderDeclutter(t, i) {
    const s = this.getDeclutter();
    s in t.declutter || (t.declutter[s] = new Vp(9)),
      this.getRenderer().renderDeclutter(t, i);
  }
  setRenderOrder(t) {
    this.set(jy.RENDER_ORDER, t);
  }
  setStyle(t) {
    this.style_ = t === void 0 ? Qp : t;
    const i = vC(t);
    (this.styleFunction_ = t === null ? void 0 : i2(i)), this.changed();
  }
  setDeclutter(t) {
    (this.declutter_ = t ? String(t) : void 0), this.changed();
  }
}
function vC(r) {
  if (r === void 0) return Qp;
  if (!r) return null;
  if (typeof r == "function" || r instanceof ms) return r;
  if (!Array.isArray(r)) return Uy([r]);
  if (r.length === 0) return [];
  const t = r.length,
    i = r[0];
  if (i instanceof ms) {
    const l = new Array(t);
    for (let o = 0; o < t; ++o) {
      const c = r[o];
      if (!(c instanceof ms))
        throw new Error("Expected a list of style instances");
      l[o] = c;
    }
    return l;
  }
  if ("style" in i) {
    const l = new Array(t);
    for (let o = 0; o < t; ++o) {
      const c = r[o];
      if (!("style" in c))
        throw new Error("Expected a list of rules with a style property");
      l[o] = c;
    }
    return q2(l);
  }
  return Uy(r);
}
class $d extends h1 {
  constructor(t) {
    super(t);
  }
  createRenderer() {
    return new x2(this);
  }
}
const ft = { IDLE: 0, LOADING: 1, LOADED: 2, ERROR: 3, EMPTY: 4 };
class tg extends Ku {
  constructor(t, i, s) {
    super(),
      (s = s || {}),
      (this.tileCoord = t),
      (this.state = i),
      (this.key = ""),
      (this.transition_ = s.transition === void 0 ? 250 : s.transition),
      (this.transitionStarts_ = {}),
      (this.interpolate = !!s.interpolate);
  }
  changed() {
    this.dispatchEvent(pt.CHANGE);
  }
  release() {
    this.setState(ft.EMPTY);
  }
  getKey() {
    return this.key + "/" + this.tileCoord;
  }
  getTileCoord() {
    return this.tileCoord;
  }
  getState() {
    return this.state;
  }
  setState(t) {
    if (this.state !== ft.EMPTY) {
      if (this.state !== ft.ERROR && this.state > t)
        throw new Error("Tile load sequence violation");
      (this.state = t), this.changed();
    }
  }
  load() {
    _t();
  }
  getAlpha(t, i) {
    if (!this.transition_) return 1;
    let s = this.transitionStarts_[t];
    if (!s) (s = i), (this.transitionStarts_[t] = s);
    else if (s === -1) return 1;
    const l = i - s + 1e3 / 60;
    return l >= this.transition_ ? 1 : u1(l / this.transition_);
  }
  inTransition(t) {
    return this.transition_ ? this.transitionStarts_[t] !== -1 : !1;
  }
  endTransition(t) {
    this.transition_ && (this.transitionStarts_[t] = -1);
  }
  disposeInternal() {
    this.release(), super.disposeInternal();
  }
}
class f1 extends tg {
  constructor(t, i, s, l, o, c) {
    super(t, i, c),
      (this.crossOrigin_ = l),
      (this.src_ = s),
      (this.key = s),
      (this.image_ = new Image()),
      l !== null && (this.image_.crossOrigin = l),
      (this.unlisten_ = null),
      (this.tileLoadFunction_ = o);
  }
  getImage() {
    return this.image_;
  }
  setImage(t) {
    (this.image_ = t),
      (this.state = ft.LOADED),
      this.unlistenImage_(),
      this.changed();
  }
  handleImageError_() {
    (this.state = ft.ERROR),
      this.unlistenImage_(),
      (this.image_ = EC()),
      this.changed();
  }
  handleImageLoad_() {
    const t = this.image_;
    t.naturalWidth && t.naturalHeight
      ? (this.state = ft.LOADED)
      : (this.state = ft.EMPTY),
      this.unlistenImage_(),
      this.changed();
  }
  load() {
    this.state == ft.ERROR &&
      ((this.state = ft.IDLE),
      (this.image_ = new Image()),
      this.crossOrigin_ !== null &&
        (this.image_.crossOrigin = this.crossOrigin_)),
      this.state == ft.IDLE &&
        ((this.state = ft.LOADING),
        this.changed(),
        this.tileLoadFunction_(this, this.src_),
        (this.unlisten_ = xx(
          this.image_,
          this.handleImageLoad_.bind(this),
          this.handleImageError_.bind(this),
        )));
  }
  unlistenImage_() {
    this.unlisten_ && (this.unlisten_(), (this.unlisten_ = null));
  }
  disposeInternal() {
    this.unlistenImage_(), (this.image_ = null), super.disposeInternal();
  }
}
function EC() {
  const r = pe(1, 1);
  return (r.fillStyle = "rgba(0,0,0,0)"), r.fillRect(0, 0, 1, 1), r.canvas;
}
class SC {
  constructor(t, i, s) {
    (this.decay_ = t),
      (this.minVelocity_ = i),
      (this.delay_ = s),
      (this.points_ = []),
      (this.angle_ = 0),
      (this.initialVelocity_ = 0);
  }
  begin() {
    (this.points_.length = 0), (this.angle_ = 0), (this.initialVelocity_ = 0);
  }
  update(t, i) {
    this.points_.push(t, i, Date.now());
  }
  end() {
    if (this.points_.length < 6) return !1;
    const t = Date.now() - this.delay_,
      i = this.points_.length - 3;
    if (this.points_[i + 2] < t) return !1;
    let s = i - 3;
    for (; s > 0 && this.points_[s + 2] > t; ) s -= 3;
    const l = this.points_[i + 2] - this.points_[s + 2];
    if (l < 1e3 / 60) return !1;
    const o = this.points_[i] - this.points_[s],
      c = this.points_[i + 1] - this.points_[s + 1];
    return (
      (this.angle_ = Math.atan2(c, o)),
      (this.initialVelocity_ = Math.sqrt(o * o + c * c) / l),
      this.initialVelocity_ > this.minVelocity_
    );
  }
  getDistance() {
    return (this.minVelocity_ - this.initialVelocity_) / this.decay_;
  }
  getAngle() {
    return this.angle_;
  }
}
class il extends In {
  constructor(t, i, s) {
    super(t), (this.map = i), (this.frameState = s !== void 0 ? s : null);
  }
}
class us extends il {
  constructor(t, i, s, l, o, c) {
    super(t, i, o),
      (this.originalEvent = s),
      (this.pixel_ = null),
      (this.coordinate_ = null),
      (this.dragging = l !== void 0 ? l : !1),
      (this.activePointers = c);
  }
  get pixel() {
    return (
      this.pixel_ || (this.pixel_ = this.map.getEventPixel(this.originalEvent)),
      this.pixel_
    );
  }
  set pixel(t) {
    this.pixel_ = t;
  }
  get coordinate() {
    return (
      this.coordinate_ ||
        (this.coordinate_ = this.map.getCoordinateFromPixel(this.pixel)),
      this.coordinate_
    );
  }
  set coordinate(t) {
    this.coordinate_ = t;
  }
  preventDefault() {
    super.preventDefault(),
      "preventDefault" in this.originalEvent &&
        this.originalEvent.preventDefault();
  }
  stopPropagation() {
    super.stopPropagation(),
      "stopPropagation" in this.originalEvent &&
        this.originalEvent.stopPropagation();
  }
}
const $t = {
    SINGLECLICK: "singleclick",
    CLICK: pt.CLICK,
    DBLCLICK: pt.DBLCLICK,
    POINTERDRAG: "pointerdrag",
    POINTERMOVE: "pointermove",
    POINTERDOWN: "pointerdown",
    POINTERUP: "pointerup",
    POINTEROVER: "pointerover",
    POINTEROUT: "pointerout",
    POINTERENTER: "pointerenter",
    POINTERLEAVE: "pointerleave",
    POINTERCANCEL: "pointercancel",
  },
  dd = { POINTERMOVE: "pointermove", POINTERDOWN: "pointerdown" };
class xC extends Ku {
  constructor(t, i) {
    super(t),
      (this.map_ = t),
      this.clickTimeoutId_,
      (this.emulateClicks_ = !1),
      (this.dragging_ = !1),
      (this.dragListenerKeys_ = []),
      (this.moveTolerance_ = i === void 0 ? 1 : i),
      (this.down_ = null);
    const s = this.map_.getViewport();
    (this.activePointers_ = []),
      (this.trackedTouches_ = {}),
      (this.element_ = s),
      (this.pointerdownListenerKey_ = Mt(
        s,
        dd.POINTERDOWN,
        this.handlePointerDown_,
        this,
      )),
      this.originalPointerMoveEvent_,
      (this.relayedListenerKey_ = Mt(
        s,
        dd.POINTERMOVE,
        this.relayMoveEvent_,
        this,
      )),
      (this.boundHandleTouchMove_ = this.handleTouchMove_.bind(this)),
      this.element_.addEventListener(
        pt.TOUCHMOVE,
        this.boundHandleTouchMove_,
        Np ? { passive: !1 } : !1,
      );
  }
  emulateClick_(t) {
    let i = new us($t.CLICK, this.map_, t);
    this.dispatchEvent(i),
      this.clickTimeoutId_ !== void 0
        ? (clearTimeout(this.clickTimeoutId_),
          (this.clickTimeoutId_ = void 0),
          (i = new us($t.DBLCLICK, this.map_, t)),
          this.dispatchEvent(i))
        : (this.clickTimeoutId_ = setTimeout(() => {
            this.clickTimeoutId_ = void 0;
            const s = new us($t.SINGLECLICK, this.map_, t);
            this.dispatchEvent(s);
          }, 250));
  }
  updateActivePointers_(t) {
    const i = t,
      s = i.pointerId;
    if (i.type == $t.POINTERUP || i.type == $t.POINTERCANCEL) {
      delete this.trackedTouches_[s];
      for (const l in this.trackedTouches_)
        if (this.trackedTouches_[l].target !== i.target) {
          delete this.trackedTouches_[l];
          break;
        }
    } else
      (i.type == $t.POINTERDOWN || i.type == $t.POINTERMOVE) &&
        (this.trackedTouches_[s] = i);
    this.activePointers_ = Object.values(this.trackedTouches_);
  }
  handlePointerUp_(t) {
    this.updateActivePointers_(t);
    const i = new us(
      $t.POINTERUP,
      this.map_,
      t,
      void 0,
      void 0,
      this.activePointers_,
    );
    this.dispatchEvent(i),
      this.emulateClicks_ &&
        !i.defaultPrevented &&
        !this.dragging_ &&
        this.isMouseActionButton_(t) &&
        this.emulateClick_(this.down_),
      this.activePointers_.length === 0 &&
        (this.dragListenerKeys_.forEach(jt),
        (this.dragListenerKeys_.length = 0),
        (this.dragging_ = !1),
        (this.down_ = null));
  }
  isMouseActionButton_(t) {
    return t.button === 0;
  }
  handlePointerDown_(t) {
    (this.emulateClicks_ = this.activePointers_.length === 0),
      this.updateActivePointers_(t);
    const i = new us(
      $t.POINTERDOWN,
      this.map_,
      t,
      void 0,
      void 0,
      this.activePointers_,
    );
    if (
      (this.dispatchEvent(i),
      (this.down_ = new PointerEvent(t.type, t)),
      Object.defineProperty(this.down_, "target", {
        writable: !1,
        value: t.target,
      }),
      this.dragListenerKeys_.length === 0)
    ) {
      const s = this.map_.getOwnerDocument();
      this.dragListenerKeys_.push(
        Mt(s, $t.POINTERMOVE, this.handlePointerMove_, this),
        Mt(s, $t.POINTERUP, this.handlePointerUp_, this),
        Mt(this.element_, $t.POINTERCANCEL, this.handlePointerUp_, this),
      ),
        this.element_.getRootNode &&
          this.element_.getRootNode() !== s &&
          this.dragListenerKeys_.push(
            Mt(
              this.element_.getRootNode(),
              $t.POINTERUP,
              this.handlePointerUp_,
              this,
            ),
          );
    }
  }
  handlePointerMove_(t) {
    if (this.isMoving_(t)) {
      this.updateActivePointers_(t), (this.dragging_ = !0);
      const i = new us(
        $t.POINTERDRAG,
        this.map_,
        t,
        this.dragging_,
        void 0,
        this.activePointers_,
      );
      this.dispatchEvent(i);
    }
  }
  relayMoveEvent_(t) {
    this.originalPointerMoveEvent_ = t;
    const i = !!(this.down_ && this.isMoving_(t));
    this.dispatchEvent(new us($t.POINTERMOVE, this.map_, t, i));
  }
  handleTouchMove_(t) {
    const i = this.originalPointerMoveEvent_;
    (!i || i.defaultPrevented) &&
      (typeof t.cancelable != "boolean" || t.cancelable === !0) &&
      t.preventDefault();
  }
  isMoving_(t) {
    return (
      this.dragging_ ||
      Math.abs(t.clientX - this.down_.clientX) > this.moveTolerance_ ||
      Math.abs(t.clientY - this.down_.clientY) > this.moveTolerance_
    );
  }
  disposeInternal() {
    this.relayedListenerKey_ &&
      (jt(this.relayedListenerKey_), (this.relayedListenerKey_ = null)),
      this.element_.removeEventListener(
        pt.TOUCHMOVE,
        this.boundHandleTouchMove_,
      ),
      this.pointerdownListenerKey_ &&
        (jt(this.pointerdownListenerKey_),
        (this.pointerdownListenerKey_ = null)),
      this.dragListenerKeys_.forEach(jt),
      (this.dragListenerKeys_.length = 0),
      (this.element_ = null),
      super.disposeInternal();
  }
}
const An = {
    POSTRENDER: "postrender",
    MOVESTART: "movestart",
    MOVEEND: "moveend",
    LOADSTART: "loadstart",
    LOADEND: "loadend",
  },
  De = {
    LAYERGROUP: "layergroup",
    SIZE: "size",
    TARGET: "target",
    VIEW: "view",
  },
  Bu = 1 / 0;
class CC {
  constructor(t, i) {
    (this.priorityFunction_ = t),
      (this.keyFunction_ = i),
      (this.elements_ = []),
      (this.priorities_ = []),
      (this.queuedElements_ = {});
  }
  clear() {
    (this.elements_.length = 0),
      (this.priorities_.length = 0),
      Za(this.queuedElements_);
  }
  dequeue() {
    const t = this.elements_,
      i = this.priorities_,
      s = t[0];
    t.length == 1
      ? ((t.length = 0), (i.length = 0))
      : ((t[0] = t.pop()), (i[0] = i.pop()), this.siftUp_(0));
    const l = this.keyFunction_(s);
    return delete this.queuedElements_[l], s;
  }
  enqueue(t) {
    Lt(
      !(this.keyFunction_(t) in this.queuedElements_),
      "Tried to enqueue an `element` that was already added to the queue",
    );
    const i = this.priorityFunction_(t);
    return i != Bu
      ? (this.elements_.push(t),
        this.priorities_.push(i),
        (this.queuedElements_[this.keyFunction_(t)] = !0),
        this.siftDown_(0, this.elements_.length - 1),
        !0)
      : !1;
  }
  getCount() {
    return this.elements_.length;
  }
  getLeftChildIndex_(t) {
    return t * 2 + 1;
  }
  getRightChildIndex_(t) {
    return t * 2 + 2;
  }
  getParentIndex_(t) {
    return (t - 1) >> 1;
  }
  heapify_() {
    let t;
    for (t = (this.elements_.length >> 1) - 1; t >= 0; t--) this.siftUp_(t);
  }
  isEmpty() {
    return this.elements_.length === 0;
  }
  isKeyQueued(t) {
    return t in this.queuedElements_;
  }
  isQueued(t) {
    return this.isKeyQueued(this.keyFunction_(t));
  }
  siftUp_(t) {
    const i = this.elements_,
      s = this.priorities_,
      l = i.length,
      o = i[t],
      c = s[t],
      h = t;
    for (; t < l >> 1; ) {
      const d = this.getLeftChildIndex_(t),
        _ = this.getRightChildIndex_(t),
        m = _ < l && s[_] < s[d] ? _ : d;
      (i[t] = i[m]), (s[t] = s[m]), (t = m);
    }
    (i[t] = o), (s[t] = c), this.siftDown_(h, t);
  }
  siftDown_(t, i) {
    const s = this.elements_,
      l = this.priorities_,
      o = s[i],
      c = l[i];
    for (; i > t; ) {
      const h = this.getParentIndex_(i);
      if (l[h] > c) (s[i] = s[h]), (l[i] = l[h]), (i = h);
      else break;
    }
    (s[i] = o), (l[i] = c);
  }
  reprioritize() {
    const t = this.priorityFunction_,
      i = this.elements_,
      s = this.priorities_;
    let l = 0;
    const o = i.length;
    let c, h, d;
    for (h = 0; h < o; ++h)
      (c = i[h]),
        (d = t(c)),
        d == Bu
          ? delete this.queuedElements_[this.keyFunction_(c)]
          : ((s[l] = d), (i[l++] = c));
    (i.length = l), (s.length = l), this.heapify_();
  }
}
class TC extends CC {
  constructor(t, i) {
    super(
      (s) => t.apply(null, s),
      (s) => s[0].getKey(),
    ),
      (this.boundHandleTileChange_ = this.handleTileChange.bind(this)),
      (this.tileChangeCallback_ = i),
      (this.tilesLoading_ = 0),
      (this.tilesLoadingKeys_ = {});
  }
  enqueue(t) {
    const i = super.enqueue(t);
    return (
      i && t[0].addEventListener(pt.CHANGE, this.boundHandleTileChange_), i
    );
  }
  getTilesLoading() {
    return this.tilesLoading_;
  }
  handleTileChange(t) {
    const i = t.target,
      s = i.getState();
    if (s === ft.LOADED || s === ft.ERROR || s === ft.EMPTY) {
      s !== ft.ERROR &&
        i.removeEventListener(pt.CHANGE, this.boundHandleTileChange_);
      const l = i.getKey();
      l in this.tilesLoadingKeys_ &&
        (delete this.tilesLoadingKeys_[l], --this.tilesLoading_),
        this.tileChangeCallback_();
    }
  }
  loadMoreTiles(t, i) {
    let s = 0;
    for (; this.tilesLoading_ < t && s < i && this.getCount() > 0; ) {
      const l = this.dequeue()[0],
        o = l.getKey();
      l.getState() === ft.IDLE &&
        !(o in this.tilesLoadingKeys_) &&
        ((this.tilesLoadingKeys_[o] = !0), ++this.tilesLoading_, ++s, l.load());
    }
  }
}
function RC(r, t, i, s, l) {
  if (!r || !(i in r.wantedTiles) || !r.wantedTiles[i][t.getKey()]) return Bu;
  const o = r.viewState.center,
    c = s[0] - o[0],
    h = s[1] - o[1];
  return 65536 * Math.log(l) + Math.sqrt(c * c + h * h) / l;
}
class eg extends Xi {
  constructor(t) {
    super();
    const i = t.element;
    i &&
      !t.target &&
      !i.style.pointerEvents &&
      (i.style.pointerEvents = "auto"),
      (this.element = i || null),
      (this.target_ = null),
      (this.map_ = null),
      (this.listenerKeys = []),
      t.render && (this.render = t.render),
      t.target && this.setTarget(t.target);
  }
  disposeInternal() {
    var t;
    (t = this.element) == null || t.remove(), super.disposeInternal();
  }
  getMap() {
    return this.map_;
  }
  setMap(t) {
    var i;
    this.map_ && ((i = this.element) == null || i.remove());
    for (let s = 0, l = this.listenerKeys.length; s < l; ++s)
      jt(this.listenerKeys[s]);
    if (((this.listenerKeys.length = 0), (this.map_ = t), t)) {
      const s = this.target_ ?? t.getOverlayContainerStopEvent();
      this.element && s.appendChild(this.element),
        this.render !== hl &&
          this.listenerKeys.push(Mt(t, An.POSTRENDER, this.render, this)),
        t.render();
    }
  }
  render(t) {}
  setTarget(t) {
    this.target_ = typeof t == "string" ? document.getElementById(t) : t;
  }
}
class bC extends eg {
  constructor(t) {
    (t = t || {}),
      super({
        element: document.createElement("div"),
        render: t.render,
        target: t.target,
      }),
      (this.ulElement_ = document.createElement("ul")),
      (this.collapsed_ = t.collapsed !== void 0 ? t.collapsed : !0),
      (this.userCollapsed_ = this.collapsed_),
      (this.overrideCollapsible_ = t.collapsible !== void 0),
      (this.collapsible_ = t.collapsible !== void 0 ? t.collapsible : !0),
      this.collapsible_ || (this.collapsed_ = !1),
      (this.attributions_ = t.attributions);
    const i = t.className !== void 0 ? t.className : "ol-attribution",
      s = t.tipLabel !== void 0 ? t.tipLabel : "Attributions",
      l = t.expandClassName !== void 0 ? t.expandClassName : i + "-expand",
      o = t.collapseLabel !== void 0 ? t.collapseLabel : "›",
      c =
        t.collapseClassName !== void 0 ? t.collapseClassName : i + "-collapse";
    typeof o == "string"
      ? ((this.collapseLabel_ = document.createElement("span")),
        (this.collapseLabel_.textContent = o),
        (this.collapseLabel_.className = c))
      : (this.collapseLabel_ = o);
    const h = t.label !== void 0 ? t.label : "i";
    typeof h == "string"
      ? ((this.label_ = document.createElement("span")),
        (this.label_.textContent = h),
        (this.label_.className = l))
      : (this.label_ = h);
    const d =
      this.collapsible_ && !this.collapsed_ ? this.collapseLabel_ : this.label_;
    (this.toggleButton_ = document.createElement("button")),
      this.toggleButton_.setAttribute("type", "button"),
      this.toggleButton_.setAttribute(
        "aria-expanded",
        String(!this.collapsed_),
      ),
      (this.toggleButton_.title = s),
      this.toggleButton_.appendChild(d),
      this.toggleButton_.addEventListener(
        pt.CLICK,
        this.handleClick_.bind(this),
        !1,
      );
    const _ =
        i +
        " " +
        rc +
        " " +
        Hd +
        (this.collapsed_ && this.collapsible_ ? " " + yy : "") +
        (this.collapsible_ ? "" : " ol-uncollapsible"),
      m = this.element;
    (m.className = _),
      m.appendChild(this.toggleButton_),
      m.appendChild(this.ulElement_),
      (this.renderedAttributions_ = []),
      (this.renderedVisible_ = !0);
  }
  collectSourceAttributions_(t) {
    const i = this.getMap().getAllLayers(),
      s = new Set(i.flatMap((l) => l.getAttributions(t)));
    if (
      (this.attributions_ !== void 0 &&
        (Array.isArray(this.attributions_)
          ? this.attributions_.forEach((l) => s.add(l))
          : s.add(this.attributions_)),
      !this.overrideCollapsible_)
    ) {
      const l = !i.some((o) => {
        var c;
        return (
          ((c = o.getSource()) == null
            ? void 0
            : c.getAttributionsCollapsible()) === !1
        );
      });
      this.setCollapsible(l);
    }
    return Array.from(s);
  }
  async updateElement_(t) {
    if (!t) {
      this.renderedVisible_ &&
        ((this.element.style.display = "none"), (this.renderedVisible_ = !1));
      return;
    }
    const i = await Promise.all(
        this.collectSourceAttributions_(t).map((l) => WE(() => l)),
      ),
      s = i.length > 0;
    if (
      (this.renderedVisible_ != s &&
        ((this.element.style.display = s ? "" : "none"),
        (this.renderedVisible_ = s)),
      !Es(i, this.renderedAttributions_))
    ) {
      Up(this.ulElement_);
      for (let l = 0, o = i.length; l < o; ++l) {
        const c = document.createElement("li");
        (c.innerHTML = i[l]), this.ulElement_.appendChild(c);
      }
      this.renderedAttributions_ = i;
    }
  }
  handleClick_(t) {
    t.preventDefault(),
      this.handleToggle_(),
      (this.userCollapsed_ = this.collapsed_);
  }
  handleToggle_() {
    this.element.classList.toggle(yy),
      this.collapsed_
        ? my(this.collapseLabel_, this.label_)
        : my(this.label_, this.collapseLabel_),
      (this.collapsed_ = !this.collapsed_),
      this.toggleButton_.setAttribute(
        "aria-expanded",
        String(!this.collapsed_),
      );
  }
  getCollapsible() {
    return this.collapsible_;
  }
  setCollapsible(t) {
    this.collapsible_ !== t &&
      ((this.collapsible_ = t),
      this.element.classList.toggle("ol-uncollapsible"),
      this.userCollapsed_ && this.handleToggle_());
  }
  setCollapsed(t) {
    (this.userCollapsed_ = t),
      !(!this.collapsible_ || this.collapsed_ === t) && this.handleToggle_();
  }
  getCollapsed() {
    return this.collapsed_;
  }
  render(t) {
    this.updateElement_(t.frameState);
  }
}
class AC extends eg {
  constructor(t) {
    (t = t || {}),
      super({
        element: document.createElement("div"),
        render: t.render,
        target: t.target,
      });
    const i = t.className !== void 0 ? t.className : "ol-rotate",
      s = t.label !== void 0 ? t.label : "⇧",
      l = t.compassClassName !== void 0 ? t.compassClassName : "ol-compass";
    (this.label_ = null),
      typeof s == "string"
        ? ((this.label_ = document.createElement("span")),
          (this.label_.className = l),
          (this.label_.textContent = s))
        : ((this.label_ = s), this.label_.classList.add(l));
    const o = t.tipLabel ? t.tipLabel : "Reset rotation",
      c = document.createElement("button");
    (c.className = i + "-reset"),
      c.setAttribute("type", "button"),
      (c.title = o),
      c.appendChild(this.label_),
      c.addEventListener(pt.CLICK, this.handleClick_.bind(this), !1);
    const h = i + " " + rc + " " + Hd,
      d = this.element;
    (d.className = h),
      d.appendChild(c),
      (this.callResetNorth_ = t.resetNorth ? t.resetNorth : void 0),
      (this.duration_ = t.duration !== void 0 ? t.duration : 250),
      (this.autoHide_ = t.autoHide !== void 0 ? t.autoHide : !0),
      (this.rotation_ = void 0),
      this.autoHide_ && this.element.classList.add(yu);
  }
  handleClick_(t) {
    t.preventDefault(),
      this.callResetNorth_ !== void 0
        ? this.callResetNorth_()
        : this.resetNorth_();
  }
  resetNorth_() {
    const i = this.getMap().getView();
    if (!i) return;
    const s = i.getRotation();
    s !== void 0 &&
      (this.duration_ > 0 && s % (2 * Math.PI) !== 0
        ? i.animate({ rotation: 0, duration: this.duration_, easing: Cl })
        : i.setRotation(0));
  }
  render(t) {
    const i = t.frameState;
    if (!i) return;
    const s = i.viewState.rotation;
    if (s != this.rotation_) {
      const l = "rotate(" + s + "rad)";
      if (this.autoHide_) {
        const o = this.element.classList.contains(yu);
        !o && s === 0
          ? this.element.classList.add(yu)
          : o && s !== 0 && this.element.classList.remove(yu);
      }
      this.label_.style.transform = l;
    }
    this.rotation_ = s;
  }
}
class wC extends eg {
  constructor(t) {
    (t = t || {}),
      super({ element: document.createElement("div"), target: t.target });
    const i = t.className !== void 0 ? t.className : "ol-zoom",
      s = t.delta !== void 0 ? t.delta : 1,
      l = t.zoomInClassName !== void 0 ? t.zoomInClassName : i + "-in",
      o = t.zoomOutClassName !== void 0 ? t.zoomOutClassName : i + "-out",
      c = t.zoomInLabel !== void 0 ? t.zoomInLabel : "+",
      h = t.zoomOutLabel !== void 0 ? t.zoomOutLabel : "–",
      d = t.zoomInTipLabel !== void 0 ? t.zoomInTipLabel : "Zoom in",
      _ = t.zoomOutTipLabel !== void 0 ? t.zoomOutTipLabel : "Zoom out",
      m = document.createElement("button");
    (m.className = l),
      m.setAttribute("type", "button"),
      (m.title = d),
      m.appendChild(typeof c == "string" ? document.createTextNode(c) : c),
      m.addEventListener(pt.CLICK, this.handleClick_.bind(this, s), !1);
    const y = document.createElement("button");
    (y.className = o),
      y.setAttribute("type", "button"),
      (y.title = _),
      y.appendChild(typeof h == "string" ? document.createTextNode(h) : h),
      y.addEventListener(pt.CLICK, this.handleClick_.bind(this, -s), !1);
    const v = i + " " + rc + " " + Hd,
      E = this.element;
    (E.className = v),
      E.appendChild(m),
      E.appendChild(y),
      (this.duration_ = t.duration !== void 0 ? t.duration : 250);
  }
  handleClick_(t, i) {
    i.preventDefault(), this.zoomByDelta_(t);
  }
  zoomByDelta_(t) {
    const s = this.getMap().getView();
    if (!s) return;
    const l = s.getZoom();
    if (l !== void 0) {
      const o = s.getConstrainedZoom(l + t);
      this.duration_ > 0
        ? (s.getAnimating() && s.cancelAnimations(),
          s.animate({ zoom: o, duration: this.duration_, easing: Cl }))
        : s.setZoom(o);
    }
  }
}
function MC(r) {
  r = r || {};
  const t = new $i();
  return (
    (r.zoom !== void 0 ? r.zoom : !0) && t.push(new wC(r.zoomOptions)),
    (r.rotate !== void 0 ? r.rotate : !0) && t.push(new AC(r.rotateOptions)),
    (r.attribution !== void 0 ? r.attribution : !0) &&
      t.push(new bC(r.attributionOptions)),
    t
  );
}
const Zy = { ACTIVE: "active" };
class to extends Xi {
  constructor(t) {
    super(),
      this.on,
      this.once,
      this.un,
      t && t.handleEvent && (this.handleEvent = t.handleEvent),
      (this.map_ = null),
      this.setActive(!0);
  }
  getActive() {
    return this.get(Zy.ACTIVE);
  }
  getMap() {
    return this.map_;
  }
  handleEvent(t) {
    return !0;
  }
  setActive(t) {
    this.set(Zy.ACTIVE, t);
  }
  setMap(t) {
    this.map_ = t;
  }
}
function OC(r, t, i) {
  const s = r.getCenterInternal();
  if (s) {
    const l = [s[0] + t[0], s[1] + t[1]];
    r.animateInternal({
      duration: i !== void 0 ? i : 250,
      easing: uC,
      center: r.getConstrainedCenter(l),
    });
  }
}
function ig(r, t, i, s) {
  const l = r.getZoom();
  if (l === void 0) return;
  const o = r.getConstrainedZoom(l + t),
    c = r.getResolutionForZoom(o);
  r.getAnimating() && r.cancelAnimations(),
    r.animate({
      resolution: c,
      anchor: i,
      duration: s !== void 0 ? s : 250,
      easing: Cl,
    });
}
class DC extends to {
  constructor(t) {
    super(),
      (t = t || {}),
      (this.delta_ = t.delta ? t.delta : 1),
      (this.duration_ = t.duration !== void 0 ? t.duration : 250);
  }
  handleEvent(t) {
    let i = !1;
    if (t.type == $t.DBLCLICK) {
      const s = t.originalEvent,
        l = t.map,
        o = t.coordinate,
        c = s.shiftKey ? -this.delta_ : this.delta_,
        h = l.getView();
      ig(h, c, o, this.duration_), s.preventDefault(), (i = !0);
    }
    return !i;
  }
}
function gd(r) {
  const t = arguments;
  return function (i) {
    let s = !0;
    for (let l = 0, o = t.length; l < o && ((s = s && t[l](i)), !!s); ++l);
    return s;
  };
}
const LC = function (r) {
    const t = r.originalEvent;
    return t.altKey && !(t.metaKey || t.ctrlKey) && t.shiftKey;
  },
  zC = function (r) {
    const t = r.map.getTargetElement(),
      i = t.getRootNode(),
      s = r.map.getOwnerDocument().activeElement;
    return i instanceof ShadowRoot ? i.host.contains(s) : t.contains(s);
  },
  d1 = function (r) {
    const t = r.map.getTargetElement(),
      i = t.getRootNode();
    return (i instanceof ShadowRoot ? i.host : t).hasAttribute("tabindex")
      ? zC(r)
      : !0;
  },
  IC = Ia,
  g1 = function (r) {
    const t = r.originalEvent;
    return t.button == 0 && !(fx && Dp && t.ctrlKey);
  },
  _1 = function (r) {
    const t = r.originalEvent;
    return !t.altKey && !(t.metaKey || t.ctrlKey) && !t.shiftKey;
  },
  NC = function (r) {
    const t = r.originalEvent;
    return Dp ? t.metaKey : t.ctrlKey;
  },
  GC = function (r) {
    const t = r.originalEvent;
    return !t.altKey && !(t.metaKey || t.ctrlKey) && t.shiftKey;
  },
  m1 = function (r) {
    const t = r.originalEvent,
      i = t.target.tagName;
    return (
      i !== "INPUT" &&
      i !== "SELECT" &&
      i !== "TEXTAREA" &&
      !t.target.isContentEditable
    );
  },
  Pf = function (r) {
    const t = r.originalEvent;
    return (
      Lt(t !== void 0, "mapBrowserEvent must originate from a pointer event"),
      t.pointerType == "mouse"
    );
  },
  FC = function (r) {
    const t = r.originalEvent;
    return (
      Lt(t !== void 0, "mapBrowserEvent must originate from a pointer event"),
      t.isPrimary && t.button === 0
    );
  };
class eo extends to {
  constructor(t) {
    (t = t || {}),
      super(t),
      t.handleDownEvent && (this.handleDownEvent = t.handleDownEvent),
      t.handleDragEvent && (this.handleDragEvent = t.handleDragEvent),
      t.handleMoveEvent && (this.handleMoveEvent = t.handleMoveEvent),
      t.handleUpEvent && (this.handleUpEvent = t.handleUpEvent),
      t.stopDown && (this.stopDown = t.stopDown),
      (this.handlingDownUpSequence = !1),
      (this.targetPointers = []);
  }
  getPointerCount() {
    return this.targetPointers.length;
  }
  handleDownEvent(t) {
    return !1;
  }
  handleDragEvent(t) {}
  handleEvent(t) {
    if (!t.originalEvent) return !0;
    let i = !1;
    if ((this.updateTrackedPointers_(t), this.handlingDownUpSequence)) {
      if (t.type == $t.POINTERDRAG)
        this.handleDragEvent(t), t.originalEvent.preventDefault();
      else if (t.type == $t.POINTERUP) {
        const s = this.handleUpEvent(t);
        this.handlingDownUpSequence = s && this.targetPointers.length > 0;
      }
    } else if (t.type == $t.POINTERDOWN) {
      const s = this.handleDownEvent(t);
      (this.handlingDownUpSequence = s), (i = this.stopDown(s));
    } else t.type == $t.POINTERMOVE && this.handleMoveEvent(t);
    return !i;
  }
  handleMoveEvent(t) {}
  handleUpEvent(t) {
    return !1;
  }
  stopDown(t) {
    return t;
  }
  updateTrackedPointers_(t) {
    t.activePointers && (this.targetPointers = t.activePointers);
  }
}
function ng(r) {
  const t = r.length;
  let i = 0,
    s = 0;
  for (let l = 0; l < t; l++) (i += r[l].clientX), (s += r[l].clientY);
  return { clientX: i / t, clientY: s / t };
}
class UC extends eo {
  constructor(t) {
    super({ stopDown: Zu }),
      (t = t || {}),
      (this.kinetic_ = t.kinetic),
      (this.lastCentroid = null),
      this.lastPointersCount_,
      (this.panning_ = !1);
    const i = t.condition ? t.condition : gd(_1, FC);
    (this.condition_ = t.onFocusOnly ? gd(d1, i) : i), (this.noKinetic_ = !1);
  }
  handleDragEvent(t) {
    const i = t.map;
    this.panning_ || ((this.panning_ = !0), i.getView().beginInteraction());
    const s = this.targetPointers,
      l = i.getEventPixel(ng(s));
    if (s.length == this.lastPointersCount_) {
      if (
        (this.kinetic_ && this.kinetic_.update(l[0], l[1]), this.lastCentroid)
      ) {
        const o = [this.lastCentroid[0] - l[0], l[1] - this.lastCentroid[1]],
          h = t.map.getView();
        cS(o, h.getResolution()),
          Cd(o, h.getRotation()),
          h.adjustCenterInternal(o);
      }
    } else this.kinetic_ && this.kinetic_.begin();
    (this.lastCentroid = l),
      (this.lastPointersCount_ = s.length),
      t.originalEvent.preventDefault();
  }
  handleUpEvent(t) {
    const i = t.map,
      s = i.getView();
    if (this.targetPointers.length === 0) {
      if (!this.noKinetic_ && this.kinetic_ && this.kinetic_.end()) {
        const l = this.kinetic_.getDistance(),
          o = this.kinetic_.getAngle(),
          c = s.getCenterInternal(),
          h = i.getPixelFromCoordinateInternal(c),
          d = i.getCoordinateFromPixelInternal([
            h[0] - l * Math.cos(o),
            h[1] - l * Math.sin(o),
          ]);
        s.animateInternal({
          center: s.getConstrainedCenter(d),
          duration: 500,
          easing: Cl,
        });
      }
      return this.panning_ && ((this.panning_ = !1), s.endInteraction()), !1;
    }
    return (
      this.kinetic_ && this.kinetic_.begin(), (this.lastCentroid = null), !0
    );
  }
  handleDownEvent(t) {
    if (this.targetPointers.length > 0 && this.condition_(t)) {
      const s = t.map.getView();
      return (
        (this.lastCentroid = null),
        s.getAnimating() && s.cancelAnimations(),
        this.kinetic_ && this.kinetic_.begin(),
        (this.noKinetic_ = this.targetPointers.length > 1),
        !0
      );
    }
    return !1;
  }
}
class XC extends eo {
  constructor(t) {
    (t = t || {}),
      super({ stopDown: Zu }),
      (this.condition_ = t.condition ? t.condition : LC),
      (this.lastAngle_ = void 0),
      (this.duration_ = t.duration !== void 0 ? t.duration : 250);
  }
  handleDragEvent(t) {
    if (!Pf(t)) return;
    const i = t.map,
      s = i.getView();
    if (s.getConstraints().rotation === Wd) return;
    const l = i.getSize(),
      o = t.pixel,
      c = Math.atan2(l[1] / 2 - o[1], o[0] - l[0] / 2);
    if (this.lastAngle_ !== void 0) {
      const h = c - this.lastAngle_;
      s.adjustRotationInternal(-h);
    }
    this.lastAngle_ = c;
  }
  handleUpEvent(t) {
    return Pf(t) ? (t.map.getView().endInteraction(this.duration_), !1) : !0;
  }
  handleDownEvent(t) {
    return Pf(t) && g1(t) && this.condition_(t)
      ? (t.map.getView().beginInteraction(), (this.lastAngle_ = void 0), !0)
      : !1;
  }
}
class YC extends ju {
  constructor(t) {
    super(),
      (this.geometry_ = null),
      (this.element_ = document.createElement("div")),
      (this.element_.style.position = "absolute"),
      (this.element_.style.pointerEvents = "auto"),
      (this.element_.className = "ol-box " + t),
      (this.map_ = null),
      (this.startPixel_ = null),
      (this.endPixel_ = null);
  }
  disposeInternal() {
    this.setMap(null);
  }
  render_() {
    const t = this.startPixel_,
      i = this.endPixel_,
      s = "px",
      l = this.element_.style;
    (l.left = Math.min(t[0], i[0]) + s),
      (l.top = Math.min(t[1], i[1]) + s),
      (l.width = Math.abs(i[0] - t[0]) + s),
      (l.height = Math.abs(i[1] - t[1]) + s);
  }
  setMap(t) {
    if (this.map_) {
      this.map_.getOverlayContainer().removeChild(this.element_);
      const i = this.element_.style;
      (i.left = "inherit"),
        (i.top = "inherit"),
        (i.width = "inherit"),
        (i.height = "inherit");
    }
    (this.map_ = t),
      this.map_ && this.map_.getOverlayContainer().appendChild(this.element_);
  }
  setPixels(t, i) {
    (this.startPixel_ = t),
      (this.endPixel_ = i),
      this.createOrUpdateGeometry(),
      this.render_();
  }
  createOrUpdateGeometry() {
    if (!this.map_) return;
    const t = this.startPixel_,
      i = this.endPixel_,
      l = [t, [t[0], i[1]], i, [i[0], t[1]]].map(
        this.map_.getCoordinateFromPixelInternal,
        this.map_,
      );
    (l[4] = l[0].slice()),
      this.geometry_
        ? this.geometry_.setCoordinates([l])
        : (this.geometry_ = new ps([l]));
  }
  getGeometry() {
    return this.geometry_;
  }
}
const Wr = {
  BOXSTART: "boxstart",
  BOXDRAG: "boxdrag",
  BOXEND: "boxend",
  BOXCANCEL: "boxcancel",
};
class ba extends In {
  constructor(t, i, s) {
    super(t), (this.coordinate = i), (this.mapBrowserEvent = s);
  }
}
class kC extends eo {
  constructor(t) {
    super(),
      this.on,
      this.once,
      this.un,
      (t = t ?? {}),
      (this.box_ = new YC(t.className || "ol-dragbox")),
      (this.minArea_ = t.minArea ?? 64),
      t.onBoxEnd && (this.onBoxEnd = t.onBoxEnd),
      (this.startPixel_ = null),
      (this.condition_ = t.condition ?? g1),
      (this.boxEndCondition_ =
        t.boxEndCondition ?? this.defaultBoxEndCondition);
  }
  defaultBoxEndCondition(t, i, s) {
    const l = s[0] - i[0],
      o = s[1] - i[1];
    return l * l + o * o >= this.minArea_;
  }
  getGeometry() {
    return this.box_.getGeometry();
  }
  handleDragEvent(t) {
    this.startPixel_ &&
      (this.box_.setPixels(this.startPixel_, t.pixel),
      this.dispatchEvent(new ba(Wr.BOXDRAG, t.coordinate, t)));
  }
  handleUpEvent(t) {
    if (!this.startPixel_) return !1;
    const i = this.boxEndCondition_(t, this.startPixel_, t.pixel);
    return (
      i && this.onBoxEnd(t),
      this.dispatchEvent(new ba(i ? Wr.BOXEND : Wr.BOXCANCEL, t.coordinate, t)),
      this.box_.setMap(null),
      (this.startPixel_ = null),
      !1
    );
  }
  handleDownEvent(t) {
    return this.condition_(t)
      ? ((this.startPixel_ = t.pixel),
        this.box_.setMap(t.map),
        this.box_.setPixels(this.startPixel_, this.startPixel_),
        this.dispatchEvent(new ba(Wr.BOXSTART, t.coordinate, t)),
        !0)
      : !1;
  }
  onBoxEnd(t) {}
  setActive(t) {
    t ||
      (this.box_.setMap(null),
      this.startPixel_ &&
        (this.dispatchEvent(new ba(Wr.BOXCANCEL, this.startPixel_, null)),
        (this.startPixel_ = null))),
      super.setActive(t);
  }
  setMap(t) {
    this.getMap() &&
      (this.box_.setMap(null),
      this.startPixel_ &&
        (this.dispatchEvent(new ba(Wr.BOXCANCEL, this.startPixel_, null)),
        (this.startPixel_ = null))),
      super.setMap(t);
  }
}
class PC extends kC {
  constructor(t) {
    t = t || {};
    const i = t.condition ? t.condition : GC;
    super({
      condition: i,
      className: t.className || "ol-dragzoom",
      minArea: t.minArea,
    }),
      (this.duration_ = t.duration !== void 0 ? t.duration : 200),
      (this.out_ = t.out !== void 0 ? t.out : !1);
  }
  onBoxEnd(t) {
    const s = this.getMap().getView();
    let l = this.getGeometry();
    if (this.out_) {
      const o = s.rotatedExtentForGeometry(l),
        c = s.getResolutionForExtentInternal(o),
        h = s.getResolution() / c;
      (l = l.clone()), l.scale(h * h);
    }
    s.fitInternal(l, { duration: this.duration_, easing: Cl });
  }
}
const qs = {
  LEFT: "ArrowLeft",
  UP: "ArrowUp",
  RIGHT: "ArrowRight",
  DOWN: "ArrowDown",
};
class BC extends to {
  constructor(t) {
    super(),
      (t = t || {}),
      (this.defaultCondition_ = function (i) {
        return _1(i) && m1(i);
      }),
      (this.condition_ =
        t.condition !== void 0 ? t.condition : this.defaultCondition_),
      (this.duration_ = t.duration !== void 0 ? t.duration : 100),
      (this.pixelDelta_ = t.pixelDelta !== void 0 ? t.pixelDelta : 128);
  }
  handleEvent(t) {
    let i = !1;
    if (t.type == pt.KEYDOWN) {
      const s = t.originalEvent,
        l = s.key;
      if (
        this.condition_(t) &&
        (l == qs.DOWN || l == qs.LEFT || l == qs.RIGHT || l == qs.UP)
      ) {
        const c = t.map.getView(),
          h = c.getResolution() * this.pixelDelta_;
        let d = 0,
          _ = 0;
        l == qs.DOWN
          ? (_ = -h)
          : l == qs.LEFT
            ? (d = -h)
            : l == qs.RIGHT
              ? (d = h)
              : (_ = h);
        const m = [d, _];
        Cd(m, c.getRotation()),
          OC(c, m, this.duration_),
          s.preventDefault(),
          (i = !0);
      }
    }
    return !i;
  }
}
class HC extends to {
  constructor(t) {
    super(),
      (t = t || {}),
      (this.condition_ = t.condition
        ? t.condition
        : function (i) {
            return !NC(i) && m1(i);
          }),
      (this.delta_ = t.delta ? t.delta : 1),
      (this.duration_ = t.duration !== void 0 ? t.duration : 100);
  }
  handleEvent(t) {
    let i = !1;
    if (t.type == pt.KEYDOWN || t.type == pt.KEYPRESS) {
      const s = t.originalEvent,
        l = s.key;
      if (this.condition_(t) && (l === "+" || l === "-")) {
        const o = t.map,
          c = l === "+" ? this.delta_ : -this.delta_,
          h = o.getView();
        ig(h, c, void 0, this.duration_), s.preventDefault(), (i = !0);
      }
    }
    return !i;
  }
}
class jC extends to {
  constructor(t) {
    (t = t || {}),
      super(t),
      (this.totalDelta_ = 0),
      (this.lastDelta_ = 0),
      (this.maxDelta_ = t.maxDelta !== void 0 ? t.maxDelta : 1),
      (this.duration_ = t.duration !== void 0 ? t.duration : 250),
      (this.timeout_ = t.timeout !== void 0 ? t.timeout : 80),
      (this.useAnchor_ = t.useAnchor !== void 0 ? t.useAnchor : !0),
      (this.constrainResolution_ =
        t.constrainResolution !== void 0 ? t.constrainResolution : !1);
    const i = t.condition ? t.condition : IC;
    (this.condition_ = t.onFocusOnly ? gd(d1, i) : i),
      (this.lastAnchor_ = null),
      (this.startTime_ = void 0),
      this.timeoutId_,
      (this.mode_ = void 0),
      (this.trackpadEventGap_ = 400),
      this.trackpadTimeoutId_,
      (this.deltaPerZoom_ = 300);
  }
  endInteraction_() {
    this.trackpadTimeoutId_ = void 0;
    const t = this.getMap();
    if (!t) return;
    t.getView().endInteraction(
      void 0,
      this.lastDelta_ ? (this.lastDelta_ > 0 ? 1 : -1) : 0,
      this.lastAnchor_ ? t.getCoordinateFromPixel(this.lastAnchor_) : null,
    );
  }
  handleEvent(t) {
    if (!this.condition_(t) || t.type !== pt.WHEEL) return !0;
    const s = t.map,
      l = t.originalEvent;
    l.preventDefault(), this.useAnchor_ && (this.lastAnchor_ = t.pixel);
    let o;
    if (
      (t.type == pt.WHEEL &&
        ((o = l.deltaY),
        cx && l.deltaMode === WheelEvent.DOM_DELTA_PIXEL && (o /= Lp),
        l.deltaMode === WheelEvent.DOM_DELTA_LINE && (o *= 40)),
      o === 0)
    )
      return !1;
    this.lastDelta_ = o;
    const c = Date.now();
    this.startTime_ === void 0 && (this.startTime_ = c),
      (!this.mode_ || c - this.startTime_ > this.trackpadEventGap_) &&
        (this.mode_ = Math.abs(o) < 4 ? "trackpad" : "wheel");
    const h = s.getView();
    if (
      this.mode_ === "trackpad" &&
      !(h.getConstrainResolution() || this.constrainResolution_)
    )
      return (
        this.trackpadTimeoutId_
          ? clearTimeout(this.trackpadTimeoutId_)
          : (h.getAnimating() && h.cancelAnimations(), h.beginInteraction()),
        (this.trackpadTimeoutId_ = setTimeout(
          this.endInteraction_.bind(this),
          this.timeout_,
        )),
        h.adjustZoom(
          -o / this.deltaPerZoom_,
          this.lastAnchor_ ? s.getCoordinateFromPixel(this.lastAnchor_) : null,
        ),
        (this.startTime_ = c),
        !1
      );
    this.totalDelta_ += o;
    const d = Math.max(this.timeout_ - (c - this.startTime_), 0);
    return (
      clearTimeout(this.timeoutId_),
      (this.timeoutId_ = setTimeout(this.handleWheelZoom_.bind(this, s), d)),
      !1
    );
  }
  handleWheelZoom_(t) {
    const i = t.getView();
    i.getAnimating() && i.cancelAnimations();
    let s =
      -re(
        this.totalDelta_,
        -this.maxDelta_ * this.deltaPerZoom_,
        this.maxDelta_ * this.deltaPerZoom_,
      ) / this.deltaPerZoom_;
    (i.getConstrainResolution() || this.constrainResolution_) &&
      (s = s ? (s > 0 ? 1 : -1) : 0),
      ig(
        i,
        s,
        this.lastAnchor_ ? t.getCoordinateFromPixel(this.lastAnchor_) : null,
        this.duration_,
      ),
      (this.mode_ = void 0),
      (this.totalDelta_ = 0),
      (this.lastAnchor_ = null),
      (this.startTime_ = void 0),
      (this.timeoutId_ = void 0);
  }
  setMouseAnchor(t) {
    (this.useAnchor_ = t), t || (this.lastAnchor_ = null);
  }
}
class ZC extends eo {
  constructor(t) {
    t = t || {};
    const i = t;
    i.stopDown || (i.stopDown = Zu),
      super(i),
      (this.anchor_ = null),
      (this.lastAngle_ = void 0),
      (this.rotating_ = !1),
      (this.rotationDelta_ = 0),
      (this.threshold_ = t.threshold !== void 0 ? t.threshold : 0.3),
      (this.duration_ = t.duration !== void 0 ? t.duration : 250);
  }
  handleDragEvent(t) {
    let i = 0;
    const s = this.targetPointers[0],
      l = this.targetPointers[1],
      o = Math.atan2(l.clientY - s.clientY, l.clientX - s.clientX);
    if (this.lastAngle_ !== void 0) {
      const d = o - this.lastAngle_;
      (this.rotationDelta_ += d),
        !this.rotating_ &&
          Math.abs(this.rotationDelta_) > this.threshold_ &&
          (this.rotating_ = !0),
        (i = d);
    }
    this.lastAngle_ = o;
    const c = t.map,
      h = c.getView();
    h.getConstraints().rotation !== Wd &&
      ((this.anchor_ = c.getCoordinateFromPixelInternal(
        c.getEventPixel(ng(this.targetPointers)),
      )),
      this.rotating_ &&
        (c.render(), h.adjustRotationInternal(i, this.anchor_)));
  }
  handleUpEvent(t) {
    return this.targetPointers.length < 2
      ? (t.map.getView().endInteraction(this.duration_), !1)
      : !0;
  }
  handleDownEvent(t) {
    if (this.targetPointers.length >= 2) {
      const i = t.map;
      return (
        (this.anchor_ = null),
        (this.lastAngle_ = void 0),
        (this.rotating_ = !1),
        (this.rotationDelta_ = 0),
        this.handlingDownUpSequence || i.getView().beginInteraction(),
        !0
      );
    }
    return !1;
  }
}
class KC extends eo {
  constructor(t) {
    t = t || {};
    const i = t;
    i.stopDown || (i.stopDown = Zu),
      super(i),
      (this.anchor_ = null),
      (this.duration_ = t.duration !== void 0 ? t.duration : 400),
      (this.lastDistance_ = void 0),
      (this.lastScaleDelta_ = 1);
  }
  handleDragEvent(t) {
    let i = 1;
    const s = this.targetPointers[0],
      l = this.targetPointers[1],
      o = s.clientX - l.clientX,
      c = s.clientY - l.clientY,
      h = Math.sqrt(o * o + c * c);
    this.lastDistance_ !== void 0 && (i = this.lastDistance_ / h),
      (this.lastDistance_ = h);
    const d = t.map,
      _ = d.getView();
    i != 1 && (this.lastScaleDelta_ = i),
      (this.anchor_ = d.getCoordinateFromPixelInternal(
        d.getEventPixel(ng(this.targetPointers)),
      )),
      d.render(),
      _.adjustResolutionInternal(i, this.anchor_);
  }
  handleUpEvent(t) {
    if (this.targetPointers.length < 2) {
      const s = t.map.getView(),
        l = this.lastScaleDelta_ > 1 ? 1 : -1;
      return s.endInteraction(this.duration_, l), !1;
    }
    return !0;
  }
  handleDownEvent(t) {
    if (this.targetPointers.length >= 2) {
      const i = t.map;
      return (
        (this.anchor_ = null),
        (this.lastDistance_ = void 0),
        (this.lastScaleDelta_ = 1),
        this.handlingDownUpSequence || i.getView().beginInteraction(),
        !0
      );
    }
    return !1;
  }
}
function qC(r) {
  r = r || {};
  const t = new $i(),
    i = new SC(-0.005, 0.05, 100);
  return (
    (r.altShiftDragRotate !== void 0 ? r.altShiftDragRotate : !0) &&
      t.push(new XC()),
    (r.doubleClickZoom !== void 0 ? r.doubleClickZoom : !0) &&
      t.push(new DC({ delta: r.zoomDelta, duration: r.zoomDuration })),
    (r.dragPan !== void 0 ? r.dragPan : !0) &&
      t.push(new UC({ onFocusOnly: r.onFocusOnly, kinetic: i })),
    (r.pinchRotate !== void 0 ? r.pinchRotate : !0) && t.push(new ZC()),
    (r.pinchZoom !== void 0 ? r.pinchZoom : !0) &&
      t.push(new KC({ duration: r.zoomDuration })),
    (r.keyboard !== void 0 ? r.keyboard : !0) &&
      (t.push(new BC()),
      t.push(new HC({ delta: r.zoomDelta, duration: r.zoomDuration }))),
    (r.mouseWheelZoom !== void 0 ? r.mouseWheelZoom : !0) &&
      t.push(new jC({ onFocusOnly: r.onFocusOnly, duration: r.zoomDuration })),
    (r.shiftDragZoom !== void 0 ? r.shiftDragZoom : !0) &&
      t.push(new PC({ duration: r.zoomDuration })),
    t
  );
}
class cs extends In {
  constructor(t, i) {
    super(t), (this.layer = i);
  }
}
const Bf = { LAYERS: "layers" };
class Tl extends c1 {
  constructor(t) {
    t = t || {};
    const i = Object.assign({}, t);
    delete i.layers;
    let s = t.layers;
    super(i),
      this.on,
      this.once,
      this.un,
      (this.layersListenerKeys_ = []),
      (this.listenerKeys_ = {}),
      this.addChangeListener(Bf.LAYERS, this.handleLayersChanged_),
      s
        ? Array.isArray(s)
          ? (s = new $i(s.slice(), { unique: !0 }))
          : Lt(
              typeof s.getArray == "function",
              "Expected `layers` to be an array or a `Collection`",
            )
        : (s = new $i(void 0, { unique: !0 })),
      this.setLayers(s);
  }
  handleLayerChange_() {
    this.changed();
  }
  handleLayersChanged_() {
    this.layersListenerKeys_.forEach(jt), (this.layersListenerKeys_.length = 0);
    const t = this.getLayers();
    this.layersListenerKeys_.push(
      Mt(t, je.ADD, this.handleLayersAdd_, this),
      Mt(t, je.REMOVE, this.handleLayersRemove_, this),
    );
    for (const s in this.listenerKeys_) this.listenerKeys_[s].forEach(jt);
    Za(this.listenerKeys_);
    const i = t.getArray();
    for (let s = 0, l = i.length; s < l; s++) {
      const o = i[s];
      this.registerLayerListeners_(o),
        this.dispatchEvent(new cs("addlayer", o));
    }
    this.changed();
  }
  registerLayerListeners_(t) {
    const i = [
      Mt(t, cl.PROPERTYCHANGE, this.handleLayerChange_, this),
      Mt(t, pt.CHANGE, this.handleLayerChange_, this),
    ];
    t instanceof Tl &&
      i.push(
        Mt(t, "addlayer", this.handleLayerGroupAdd_, this),
        Mt(t, "removelayer", this.handleLayerGroupRemove_, this),
      ),
      (this.listenerKeys_[It(t)] = i);
  }
  handleLayerGroupAdd_(t) {
    this.dispatchEvent(new cs("addlayer", t.layer));
  }
  handleLayerGroupRemove_(t) {
    this.dispatchEvent(new cs("removelayer", t.layer));
  }
  handleLayersAdd_(t) {
    const i = t.element;
    this.registerLayerListeners_(i),
      this.dispatchEvent(new cs("addlayer", i)),
      this.changed();
  }
  handleLayersRemove_(t) {
    const i = t.element,
      s = It(i);
    this.listenerKeys_[s].forEach(jt),
      delete this.listenerKeys_[s],
      this.dispatchEvent(new cs("removelayer", i)),
      this.changed();
  }
  getLayers() {
    return this.get(Bf.LAYERS);
  }
  setLayers(t) {
    const i = this.getLayers();
    if (i) {
      const s = i.getArray();
      for (let l = 0, o = s.length; l < o; ++l)
        this.dispatchEvent(new cs("removelayer", s[l]));
    }
    this.set(Bf.LAYERS, t);
  }
  getLayersArray(t) {
    return (
      (t = t !== void 0 ? t : []),
      this.getLayers().forEach(function (i) {
        i.getLayersArray(t);
      }),
      t
    );
  }
  getLayerStatesArray(t) {
    const i = t !== void 0 ? t : [],
      s = i.length;
    this.getLayers().forEach(function (c) {
      c.getLayerStatesArray(i);
    });
    const l = this.getLayerState();
    let o = l.zIndex;
    !t && l.zIndex === void 0 && (o = 0);
    for (let c = s, h = i.length; c < h; c++) {
      const d = i[c];
      (d.opacity *= l.opacity),
        (d.visible = d.visible && l.visible),
        (d.maxResolution = Math.min(d.maxResolution, l.maxResolution)),
        (d.minResolution = Math.max(d.minResolution, l.minResolution)),
        (d.minZoom = Math.max(d.minZoom, l.minZoom)),
        (d.maxZoom = Math.min(d.maxZoom, l.maxZoom)),
        l.extent !== void 0 &&
          (d.extent !== void 0
            ? (d.extent = er(d.extent, l.extent))
            : (d.extent = l.extent)),
        d.zIndex === void 0 && (d.zIndex = o);
    }
    return i;
  }
  getSourceState() {
    return "ready";
  }
}
class VC extends ju {
  constructor(t) {
    super(), (this.map_ = t);
  }
  dispatchRenderEvent(t, i) {
    _t();
  }
  calculateMatrices2D(t) {
    const i = t.viewState,
      s = t.coordinateToPixelTransform,
      l = t.pixelToCoordinateTransform;
    zn(
      s,
      t.size[0] / 2,
      t.size[1] / 2,
      1 / i.resolution,
      -1 / i.resolution,
      -i.rotation,
      -i.center[0],
      -i.center[1],
    ),
      pp(l, s);
  }
  forEachFeatureAtCoordinate(t, i, s, l, o, c, h, d) {
    let _;
    const m = i.viewState;
    function y(z, D, j, Q) {
      return o.call(c, D, z ? j : null, Q);
    }
    const v = m.projection,
      E = hp(t.slice(), v),
      x = [[0, 0]];
    if (v.canWrapX() && l) {
      const z = v.getExtent(),
        D = Ft(z);
      x.push([-D, 0], [D, 0]);
    }
    const b = i.layerStatesArray,
      R = b.length,
      A = [],
      O = [];
    for (let z = 0; z < x.length; z++)
      for (let D = R - 1; D >= 0; --D) {
        const j = b[D],
          Q = j.layer;
        if (Q.hasRenderer() && Jd(j, m) && h.call(d, Q)) {
          const Z = Q.getRenderer(),
            F = Q.getSource();
          if (Z && F) {
            const V = F.getWrapX() ? E : t,
              rt = y.bind(null, j.managed);
            (O[0] = V[0] + x[z][0]),
              (O[1] = V[1] + x[z][1]),
              (_ = Z.forEachFeatureAtCoordinate(O, i, s, rt, A));
          }
          if (_) return _;
        }
      }
    if (A.length === 0) return;
    const G = 1 / A.length;
    return (
      A.forEach((z, D) => (z.distanceSq += D * G)),
      A.sort((z, D) => z.distanceSq - D.distanceSq),
      A.some((z) => (_ = z.callback(z.feature, z.layer, z.geometry))),
      _
    );
  }
  hasFeatureAtCoordinate(t, i, s, l, o, c) {
    return (
      this.forEachFeatureAtCoordinate(t, i, s, l, Ia, this, o, c) !== void 0
    );
  }
  getMap() {
    return this.map_;
  }
  renderFrame(t) {
    _t();
  }
  scheduleExpireIconCache(t) {
    Ci.canExpireCache() && t.postRenderFunctions.push(WC);
  }
}
function WC(r, t) {
  Ci.expire();
}
class QC extends VC {
  constructor(t) {
    super(t),
      (this.fontChangeListenerKey_ = Mt(
        bn,
        cl.PROPERTYCHANGE,
        t.redrawText,
        t,
      )),
      (this.element_ = document.createElement("div"));
    const i = this.element_.style;
    (i.position = "absolute"),
      (i.width = "100%"),
      (i.height = "100%"),
      (i.zIndex = "0"),
      (this.element_.className = rc + " ol-layers");
    const s = t.getViewport();
    s.insertBefore(this.element_, s.firstChild || null),
      (this.children_ = []),
      (this.renderedVisible_ = !0);
  }
  dispatchRenderEvent(t, i) {
    const s = this.getMap();
    if (s.hasListener(t)) {
      const l = new t1(t, void 0, i);
      s.dispatchEvent(l);
    }
  }
  disposeInternal() {
    jt(this.fontChangeListenerKey_),
      this.element_.remove(),
      super.disposeInternal();
  }
  renderFrame(t) {
    if (!t) {
      this.renderedVisible_ &&
        ((this.element_.style.display = "none"), (this.renderedVisible_ = !1));
      return;
    }
    this.calculateMatrices2D(t), this.dispatchRenderEvent(xi.PRECOMPOSE, t);
    const i = t.layerStatesArray.sort((h, d) => h.zIndex - d.zIndex);
    i.some((h) => h.layer instanceof h1 && h.layer.getDeclutter()) &&
      (t.declutter = {});
    const l = t.viewState;
    this.children_.length = 0;
    const o = [];
    let c = null;
    for (let h = 0, d = i.length; h < d; ++h) {
      const _ = i[h];
      t.layerIndex = h;
      const m = _.layer,
        y = m.getSourceState();
      if (!Jd(_, l) || (y != "ready" && y != "undefined")) {
        m.unrender();
        continue;
      }
      const v = m.render(t, c);
      v && (v !== c && (this.children_.push(v), (c = v)), o.push(_));
    }
    this.declutter(t, o),
      Sx(this.element_, this.children_),
      this.dispatchRenderEvent(xi.POSTCOMPOSE, t),
      this.renderedVisible_ ||
        ((this.element_.style.display = ""), (this.renderedVisible_ = !0)),
      this.scheduleExpireIconCache(t);
  }
  declutter(t, i) {
    if (t.declutter) {
      for (let s = i.length - 1; s >= 0; --s) {
        const l = i[s],
          o = l.layer;
        o.getDeclutter() && o.renderDeclutter(t, l);
      }
      i.forEach((s) => s.layer.renderDeferred(t));
    }
  }
}
function y1(r) {
  if (r instanceof gc) {
    r.setMapInternal(null);
    return;
  }
  r instanceof Tl && r.getLayers().forEach(y1);
}
function p1(r, t) {
  if (r instanceof gc) {
    r.setMapInternal(t);
    return;
  }
  if (r instanceof Tl) {
    const i = r.getLayers().getArray();
    for (let s = 0, l = i.length; s < l; ++s) p1(i[s], t);
  }
}
let JC = class extends Xi {
  constructor(t) {
    super(), (t = t || {}), this.on, this.once, this.un;
    const i = $C(t);
    (this.renderComplete_ = !1),
      (this.loaded_ = !0),
      (this.boundHandleBrowserEvent_ = this.handleBrowserEvent.bind(this)),
      (this.maxTilesLoading_ =
        t.maxTilesLoading !== void 0 ? t.maxTilesLoading : 16),
      (this.pixelRatio_ = t.pixelRatio !== void 0 ? t.pixelRatio : Lp),
      this.postRenderTimeoutHandle_,
      this.animationDelayKey_,
      (this.animationDelay_ = this.animationDelay_.bind(this)),
      (this.coordinateToPixelTransform_ = Fi()),
      (this.pixelToCoordinateTransform_ = Fi()),
      (this.frameIndex_ = 0),
      (this.frameState_ = null),
      (this.previousExtent_ = null),
      (this.viewPropertyListenerKey_ = null),
      (this.viewChangeListenerKey_ = null),
      (this.layerGroupPropertyListenerKeys_ = null),
      (this.viewport_ = document.createElement("div")),
      (this.viewport_.className =
        "ol-viewport" + ("ontouchstart" in window ? " ol-touch" : "")),
      (this.viewport_.style.position = "relative"),
      (this.viewport_.style.overflow = "hidden"),
      (this.viewport_.style.width = "100%"),
      (this.viewport_.style.height = "100%"),
      (this.overlayContainer_ = document.createElement("div")),
      (this.overlayContainer_.style.position = "absolute"),
      (this.overlayContainer_.style.zIndex = "0"),
      (this.overlayContainer_.style.width = "100%"),
      (this.overlayContainer_.style.height = "100%"),
      (this.overlayContainer_.style.pointerEvents = "none"),
      (this.overlayContainer_.className = "ol-overlaycontainer"),
      this.viewport_.appendChild(this.overlayContainer_),
      (this.overlayContainerStopEvent_ = document.createElement("div")),
      (this.overlayContainerStopEvent_.style.position = "absolute"),
      (this.overlayContainerStopEvent_.style.zIndex = "0"),
      (this.overlayContainerStopEvent_.style.width = "100%"),
      (this.overlayContainerStopEvent_.style.height = "100%"),
      (this.overlayContainerStopEvent_.style.pointerEvents = "none"),
      (this.overlayContainerStopEvent_.className =
        "ol-overlaycontainer-stopevent"),
      this.viewport_.appendChild(this.overlayContainerStopEvent_),
      (this.mapBrowserEventHandler_ = null),
      (this.moveTolerance_ = t.moveTolerance),
      (this.keyboardEventTarget_ = i.keyboardEventTarget),
      (this.targetChangeHandlerKeys_ = null),
      (this.targetElement_ = null),
      (this.resizeObserver_ = new ResizeObserver(() => this.updateSize())),
      (this.controls = i.controls || MC()),
      (this.interactions = i.interactions || qC({ onFocusOnly: !0 })),
      (this.overlays_ = i.overlays),
      (this.overlayIdIndex_ = {}),
      (this.renderer_ = null),
      (this.postRenderFunctions_ = []),
      (this.tileQueue_ = new TC(
        this.getTilePriority.bind(this),
        this.handleTileChange_.bind(this),
      )),
      this.addChangeListener(De.LAYERGROUP, this.handleLayerGroupChanged_),
      this.addChangeListener(De.VIEW, this.handleViewChanged_),
      this.addChangeListener(De.SIZE, this.handleSizeChanged_),
      this.addChangeListener(De.TARGET, this.handleTargetChanged_),
      this.setProperties(i.values);
    const s = this;
    t.view &&
      !(t.view instanceof Ji) &&
      t.view.then(function (l) {
        s.setView(new Ji(l));
      }),
      this.controls.addEventListener(je.ADD, (l) => {
        l.element.setMap(this);
      }),
      this.controls.addEventListener(je.REMOVE, (l) => {
        l.element.setMap(null);
      }),
      this.interactions.addEventListener(je.ADD, (l) => {
        l.element.setMap(this);
      }),
      this.interactions.addEventListener(je.REMOVE, (l) => {
        l.element.setMap(null);
      }),
      this.overlays_.addEventListener(je.ADD, (l) => {
        this.addOverlayInternal_(l.element);
      }),
      this.overlays_.addEventListener(je.REMOVE, (l) => {
        const o = l.element.getId();
        o !== void 0 && delete this.overlayIdIndex_[o.toString()],
          l.element.setMap(null);
      }),
      this.controls.forEach((l) => {
        l.setMap(this);
      }),
      this.interactions.forEach((l) => {
        l.setMap(this);
      }),
      this.overlays_.forEach(this.addOverlayInternal_.bind(this));
  }
  addControl(t) {
    this.getControls().push(t);
  }
  addInteraction(t) {
    this.getInteractions().push(t);
  }
  addLayer(t) {
    this.getLayerGroup().getLayers().push(t);
  }
  handleLayerAdd_(t) {
    p1(t.layer, this);
  }
  addOverlay(t) {
    this.getOverlays().push(t);
  }
  addOverlayInternal_(t) {
    const i = t.getId();
    i !== void 0 && (this.overlayIdIndex_[i.toString()] = t), t.setMap(this);
  }
  disposeInternal() {
    this.controls.clear(),
      this.interactions.clear(),
      this.overlays_.clear(),
      this.resizeObserver_.disconnect(),
      this.setTarget(null),
      super.disposeInternal();
  }
  forEachFeatureAtPixel(t, i, s) {
    if (!this.frameState_ || !this.renderer_) return;
    const l = this.getCoordinateFromPixelInternal(t);
    s = s !== void 0 ? s : {};
    const o = s.hitTolerance !== void 0 ? s.hitTolerance : 0,
      c = s.layerFilter !== void 0 ? s.layerFilter : Ia,
      h = s.checkWrapped !== !1;
    return this.renderer_.forEachFeatureAtCoordinate(
      l,
      this.frameState_,
      o,
      h,
      i,
      null,
      c,
      null,
    );
  }
  getFeaturesAtPixel(t, i) {
    const s = [];
    return (
      this.forEachFeatureAtPixel(
        t,
        function (l) {
          s.push(l);
        },
        i,
      ),
      s
    );
  }
  getAllLayers() {
    const t = [];
    function i(s) {
      s.forEach(function (l) {
        l instanceof Tl ? i(l.getLayers()) : t.push(l);
      });
    }
    return i(this.getLayers()), t;
  }
  hasFeatureAtPixel(t, i) {
    if (!this.frameState_ || !this.renderer_) return !1;
    const s = this.getCoordinateFromPixelInternal(t);
    i = i !== void 0 ? i : {};
    const l = i.layerFilter !== void 0 ? i.layerFilter : Ia,
      o = i.hitTolerance !== void 0 ? i.hitTolerance : 0,
      c = i.checkWrapped !== !1;
    return this.renderer_.hasFeatureAtCoordinate(
      s,
      this.frameState_,
      o,
      c,
      l,
      null,
    );
  }
  getEventCoordinate(t) {
    return this.getCoordinateFromPixel(this.getEventPixel(t));
  }
  getEventCoordinateInternal(t) {
    return this.getCoordinateFromPixelInternal(this.getEventPixel(t));
  }
  getEventPixel(t) {
    const s = this.viewport_.getBoundingClientRect(),
      l = this.getSize(),
      o = s.width / l[0],
      c = s.height / l[1],
      h = "changedTouches" in t ? t.changedTouches[0] : t;
    return [(h.clientX - s.left) / o, (h.clientY - s.top) / c];
  }
  getTarget() {
    return this.get(De.TARGET);
  }
  getTargetElement() {
    return this.targetElement_;
  }
  getCoordinateFromPixel(t) {
    return rd(
      this.getCoordinateFromPixelInternal(t),
      this.getView().getProjection(),
    );
  }
  getCoordinateFromPixelInternal(t) {
    const i = this.frameState_;
    return i ? ye(i.pixelToCoordinateTransform, t.slice()) : null;
  }
  getControls() {
    return this.controls;
  }
  getOverlays() {
    return this.overlays_;
  }
  getOverlayById(t) {
    const i = this.overlayIdIndex_[t.toString()];
    return i !== void 0 ? i : null;
  }
  getInteractions() {
    return this.interactions;
  }
  getLayerGroup() {
    return this.get(De.LAYERGROUP);
  }
  setLayers(t) {
    const i = this.getLayerGroup();
    if (t instanceof $i) {
      i.setLayers(t);
      return;
    }
    const s = i.getLayers();
    s.clear(), s.extend(t);
  }
  getLayers() {
    return this.getLayerGroup().getLayers();
  }
  getLoadingOrNotReady() {
    const t = this.getLayerGroup().getLayerStatesArray();
    for (let i = 0, s = t.length; i < s; ++i) {
      const l = t[i];
      if (!l.visible) continue;
      const o = l.layer.getRenderer();
      if (o && !o.ready) return !0;
      const c = l.layer.getSource();
      if (c && c.loading) return !0;
    }
    return !1;
  }
  getPixelFromCoordinate(t) {
    const i = Rn(t, this.getView().getProjection());
    return this.getPixelFromCoordinateInternal(i);
  }
  getPixelFromCoordinateInternal(t) {
    const i = this.frameState_;
    return i ? ye(i.coordinateToPixelTransform, t.slice(0, 2)) : null;
  }
  getRenderer() {
    return this.renderer_;
  }
  getSize() {
    return this.get(De.SIZE);
  }
  getView() {
    return this.get(De.VIEW);
  }
  getViewport() {
    return this.viewport_;
  }
  getOverlayContainer() {
    return this.overlayContainer_;
  }
  getOverlayContainerStopEvent() {
    return this.overlayContainerStopEvent_;
  }
  getOwnerDocument() {
    const t = this.getTargetElement();
    return t ? t.ownerDocument : document;
  }
  getTilePriority(t, i, s, l) {
    return RC(this.frameState_, t, i, s, l);
  }
  handleBrowserEvent(t, i) {
    i = i || t.type;
    const s = new us(i, this, t);
    this.handleMapBrowserEvent(s);
  }
  handleMapBrowserEvent(t) {
    if (!this.frameState_) return;
    const i = t.originalEvent,
      s = i.type;
    if (s === dd.POINTERDOWN || s === pt.WHEEL || s === pt.KEYDOWN) {
      const l = this.getOwnerDocument(),
        o = this.viewport_.getRootNode ? this.viewport_.getRootNode() : l,
        c = i.target,
        h =
          o instanceof ShadowRoot
            ? o.host === c
              ? o.host.ownerDocument
              : o
            : o === l
              ? l.documentElement
              : o;
      if (this.overlayContainerStopEvent_.contains(c) || !h.contains(c)) return;
    }
    if (((t.frameState = this.frameState_), this.dispatchEvent(t) !== !1)) {
      const l = this.getInteractions().getArray().slice();
      for (let o = l.length - 1; o >= 0; o--) {
        const c = l[o];
        if (c.getMap() !== this || !c.getActive() || !this.getTargetElement())
          continue;
        if (!c.handleEvent(t) || t.propagationStopped) break;
      }
    }
  }
  handlePostRender() {
    const t = this.frameState_,
      i = this.tileQueue_;
    if (!i.isEmpty()) {
      let l = this.maxTilesLoading_,
        o = l;
      if (t) {
        const c = t.viewHints;
        if (c[Le.ANIMATING] || c[Le.INTERACTING]) {
          const h = Date.now() - t.time > 8;
          (l = h ? 0 : 8), (o = h ? 0 : 2);
        }
      }
      i.getTilesLoading() < l && (i.reprioritize(), i.loadMoreTiles(l, o));
    }
    t &&
      this.renderer_ &&
      !t.animate &&
      (this.renderComplete_
        ? (this.hasListener(xi.RENDERCOMPLETE) &&
            this.renderer_.dispatchRenderEvent(xi.RENDERCOMPLETE, t),
          this.loaded_ === !1 &&
            ((this.loaded_ = !0),
            this.dispatchEvent(new il(An.LOADEND, this, t))))
        : this.loaded_ === !0 &&
          ((this.loaded_ = !1),
          this.dispatchEvent(new il(An.LOADSTART, this, t))));
    const s = this.postRenderFunctions_;
    if (t) for (let l = 0, o = s.length; l < o; ++l) s[l](this, t);
    s.length = 0;
  }
  handleSizeChanged_() {
    this.getView() &&
      !this.getView().getAnimating() &&
      this.getView().resolveConstraints(0),
      this.render();
  }
  handleTargetChanged_() {
    if (this.mapBrowserEventHandler_) {
      for (let s = 0, l = this.targetChangeHandlerKeys_.length; s < l; ++s)
        jt(this.targetChangeHandlerKeys_[s]);
      (this.targetChangeHandlerKeys_ = null),
        this.viewport_.removeEventListener(
          pt.CONTEXTMENU,
          this.boundHandleBrowserEvent_,
        ),
        this.viewport_.removeEventListener(
          pt.WHEEL,
          this.boundHandleBrowserEvent_,
        ),
        this.mapBrowserEventHandler_.dispose(),
        (this.mapBrowserEventHandler_ = null),
        this.viewport_.remove();
    }
    if (this.targetElement_) {
      this.resizeObserver_.unobserve(this.targetElement_);
      const s = this.targetElement_.getRootNode();
      s instanceof ShadowRoot && this.resizeObserver_.unobserve(s.host),
        this.setSize(void 0);
    }
    const t = this.getTarget(),
      i = typeof t == "string" ? document.getElementById(t) : t;
    if (((this.targetElement_ = i), !i))
      this.renderer_ &&
        (clearTimeout(this.postRenderTimeoutHandle_),
        (this.postRenderTimeoutHandle_ = void 0),
        (this.postRenderFunctions_.length = 0),
        this.renderer_.dispose(),
        (this.renderer_ = null)),
        this.animationDelayKey_ &&
          (cancelAnimationFrame(this.animationDelayKey_),
          (this.animationDelayKey_ = void 0));
    else {
      i.appendChild(this.viewport_),
        this.renderer_ || (this.renderer_ = new QC(this)),
        (this.mapBrowserEventHandler_ = new xC(this, this.moveTolerance_));
      for (const o in $t)
        this.mapBrowserEventHandler_.addEventListener(
          $t[o],
          this.handleMapBrowserEvent.bind(this),
        );
      this.viewport_.addEventListener(
        pt.CONTEXTMENU,
        this.boundHandleBrowserEvent_,
        !1,
      ),
        this.viewport_.addEventListener(
          pt.WHEEL,
          this.boundHandleBrowserEvent_,
          Np ? { passive: !1 } : !1,
        );
      let s;
      if (this.keyboardEventTarget_) s = this.keyboardEventTarget_;
      else {
        const o = i.getRootNode();
        s = o instanceof ShadowRoot ? o.host : i;
      }
      this.targetChangeHandlerKeys_ = [
        Mt(s, pt.KEYDOWN, this.handleBrowserEvent, this),
        Mt(s, pt.KEYPRESS, this.handleBrowserEvent, this),
      ];
      const l = i.getRootNode();
      l instanceof ShadowRoot && this.resizeObserver_.observe(l.host),
        this.resizeObserver_.observe(i);
    }
    this.updateSize();
  }
  handleTileChange_() {
    this.render();
  }
  handleViewPropertyChanged_() {
    this.render();
  }
  handleViewChanged_() {
    this.viewPropertyListenerKey_ &&
      (jt(this.viewPropertyListenerKey_),
      (this.viewPropertyListenerKey_ = null)),
      this.viewChangeListenerKey_ &&
        (jt(this.viewChangeListenerKey_), (this.viewChangeListenerKey_ = null));
    const t = this.getView();
    t &&
      (this.updateViewportSize_(this.getSize()),
      (this.viewPropertyListenerKey_ = Mt(
        t,
        cl.PROPERTYCHANGE,
        this.handleViewPropertyChanged_,
        this,
      )),
      (this.viewChangeListenerKey_ = Mt(
        t,
        pt.CHANGE,
        this.handleViewPropertyChanged_,
        this,
      )),
      t.resolveConstraints(0)),
      this.render();
  }
  handleLayerGroupChanged_() {
    this.layerGroupPropertyListenerKeys_ &&
      (this.layerGroupPropertyListenerKeys_.forEach(jt),
      (this.layerGroupPropertyListenerKeys_ = null));
    const t = this.getLayerGroup();
    t &&
      (this.handleLayerAdd_(new cs("addlayer", t)),
      (this.layerGroupPropertyListenerKeys_ = [
        Mt(t, cl.PROPERTYCHANGE, this.render, this),
        Mt(t, pt.CHANGE, this.render, this),
        Mt(t, "addlayer", this.handleLayerAdd_, this),
        Mt(t, "removelayer", this.handleLayerRemove_, this),
      ])),
      this.render();
  }
  isRendered() {
    return !!this.frameState_;
  }
  animationDelay_() {
    (this.animationDelayKey_ = void 0), this.renderFrame_(Date.now());
  }
  renderSync() {
    this.animationDelayKey_ && cancelAnimationFrame(this.animationDelayKey_),
      this.animationDelay_();
  }
  redrawText() {
    const t = this.getLayerGroup().getLayerStatesArray();
    for (let i = 0, s = t.length; i < s; ++i) {
      const l = t[i].layer;
      l.hasRenderer() && l.getRenderer().handleFontsChanged();
    }
  }
  render() {
    this.renderer_ &&
      this.animationDelayKey_ === void 0 &&
      (this.animationDelayKey_ = requestAnimationFrame(this.animationDelay_));
  }
  removeControl(t) {
    return this.getControls().remove(t);
  }
  removeInteraction(t) {
    return this.getInteractions().remove(t);
  }
  removeLayer(t) {
    return this.getLayerGroup().getLayers().remove(t);
  }
  handleLayerRemove_(t) {
    y1(t.layer);
  }
  removeOverlay(t) {
    return this.getOverlays().remove(t);
  }
  renderFrame_(t) {
    const i = this.getSize(),
      s = this.getView(),
      l = this.frameState_;
    let o = null;
    if (i !== void 0 && Ay(i) && s && s.isDef()) {
      const c = s.getHints(
          this.frameState_ ? this.frameState_.viewHints : void 0,
        ),
        h = s.getState();
      if (
        ((o = {
          animate: !1,
          coordinateToPixelTransform: this.coordinateToPixelTransform_,
          declutter: null,
          extent: td(h.center, h.resolution, h.rotation, i),
          index: this.frameIndex_++,
          layerIndex: 0,
          layerStatesArray: this.getLayerGroup().getLayerStatesArray(),
          pixelRatio: this.pixelRatio_,
          pixelToCoordinateTransform: this.pixelToCoordinateTransform_,
          postRenderFunctions: [],
          size: i,
          tileQueue: this.tileQueue_,
          time: t,
          usedTiles: {},
          viewState: h,
          viewHints: c,
          wantedTiles: {},
          mapId: It(this),
          renderTargets: {},
        }),
        h.nextCenter && h.nextResolution)
      ) {
        const d = isNaN(h.nextRotation) ? h.rotation : h.nextRotation;
        o.nextExtent = td(h.nextCenter, h.nextResolution, d, i);
      }
    }
    (this.frameState_ = o),
      this.renderer_.renderFrame(o),
      o &&
        (o.animate && this.render(),
        Array.prototype.push.apply(
          this.postRenderFunctions_,
          o.postRenderFunctions,
        ),
        l &&
          (!this.previousExtent_ ||
            (!qa(this.previousExtent_) &&
              !Na(o.extent, this.previousExtent_))) &&
          (this.dispatchEvent(new il(An.MOVESTART, this, l)),
          (this.previousExtent_ = Sl(this.previousExtent_))),
        this.previousExtent_ &&
          !o.viewHints[Le.ANIMATING] &&
          !o.viewHints[Le.INTERACTING] &&
          !Na(o.extent, this.previousExtent_) &&
          (this.dispatchEvent(new il(An.MOVEEND, this, o)),
          ip(o.extent, this.previousExtent_))),
      this.dispatchEvent(new il(An.POSTRENDER, this, o)),
      (this.renderComplete_ =
        (this.hasListener(An.LOADSTART) ||
          this.hasListener(An.LOADEND) ||
          this.hasListener(xi.RENDERCOMPLETE)) &&
        !this.tileQueue_.getTilesLoading() &&
        !this.tileQueue_.getCount() &&
        !this.getLoadingOrNotReady()),
      this.postRenderTimeoutHandle_ ||
        (this.postRenderTimeoutHandle_ = setTimeout(() => {
          (this.postRenderTimeoutHandle_ = void 0), this.handlePostRender();
        }, 0));
  }
  setLayerGroup(t) {
    const i = this.getLayerGroup();
    i && this.handleLayerRemove_(new cs("removelayer", i)),
      this.set(De.LAYERGROUP, t);
  }
  setSize(t) {
    this.set(De.SIZE, t);
  }
  setTarget(t) {
    this.set(De.TARGET, t);
  }
  setView(t) {
    if (!t || t instanceof Ji) {
      this.set(De.VIEW, t);
      return;
    }
    this.set(De.VIEW, new Ji());
    const i = this;
    t.then(function (s) {
      i.setView(new Ji(s));
    });
  }
  updateSize() {
    const t = this.getTargetElement();
    let i;
    if (t) {
      const l = getComputedStyle(t),
        o =
          t.offsetWidth -
          parseFloat(l.borderLeftWidth) -
          parseFloat(l.paddingLeft) -
          parseFloat(l.paddingRight) -
          parseFloat(l.borderRightWidth),
        c =
          t.offsetHeight -
          parseFloat(l.borderTopWidth) -
          parseFloat(l.paddingTop) -
          parseFloat(l.paddingBottom) -
          parseFloat(l.borderBottomWidth);
      !isNaN(o) &&
        !isNaN(c) &&
        ((i = [Math.max(0, o), Math.max(0, c)]),
        !Ay(i) &&
          (t.offsetWidth || t.offsetHeight || t.getClientRects().length) &&
          cp(
            "No map visible because the map container's width or height are 0.",
          ));
    }
    const s = this.getSize();
    i && (!s || !Es(i, s)) && (this.setSize(i), this.updateViewportSize_(i));
  }
  updateViewportSize_(t) {
    const i = this.getView();
    i && i.setViewportSize(t);
  }
};
function $C(r) {
  let t = null;
  r.keyboardEventTarget !== void 0 &&
    (t =
      typeof r.keyboardEventTarget == "string"
        ? document.getElementById(r.keyboardEventTarget)
        : r.keyboardEventTarget);
  const i = {},
    s =
      r.layers && typeof r.layers.getLayers == "function"
        ? r.layers
        : new Tl({ layers: r.layers });
  (i[De.LAYERGROUP] = s),
    (i[De.TARGET] = r.target),
    (i[De.VIEW] = r.view instanceof Ji ? r.view : new Ji());
  let l;
  r.controls !== void 0 &&
    (Array.isArray(r.controls)
      ? (l = new $i(r.controls.slice()))
      : (Lt(
          typeof r.controls.getArray == "function",
          "Expected `controls` to be an array or an `ol/Collection.js`",
        ),
        (l = r.controls)));
  let o;
  r.interactions !== void 0 &&
    (Array.isArray(r.interactions)
      ? (o = new $i(r.interactions.slice()))
      : (Lt(
          typeof r.interactions.getArray == "function",
          "Expected `interactions` to be an array or an `ol/Collection.js`",
        ),
        (o = r.interactions)));
  let c;
  return (
    r.overlays !== void 0
      ? Array.isArray(r.overlays)
        ? (c = new $i(r.overlays.slice()))
        : (Lt(
            typeof r.overlays.getArray == "function",
            "Expected `overlays` to be an array or an `ol/Collection.js`",
          ),
          (c = r.overlays))
      : (c = new $i()),
    {
      controls: l,
      interactions: o,
      keyboardEventTarget: t,
      overlays: c,
      values: i,
    }
  );
}
const Oe = {
  ELEMENT: "element",
  MAP: "map",
  OFFSET: "offset",
  POSITION: "position",
  POSITIONING: "positioning",
};
class sg extends Xi {
  constructor(t) {
    super(),
      this.on,
      this.once,
      this.un,
      (this.options = t),
      (this.id = t.id),
      (this.insertFirst = t.insertFirst !== void 0 ? t.insertFirst : !0),
      (this.stopEvent = t.stopEvent !== void 0 ? t.stopEvent : !0),
      (this.element = document.createElement("div")),
      (this.element.className =
        t.className !== void 0 ? t.className : "ol-overlay-container " + Ax),
      (this.element.style.position = "absolute"),
      (this.element.style.pointerEvents = "auto"),
      (this.autoPan = t.autoPan === !0 ? {} : t.autoPan || void 0),
      (this.rendered = { transform_: "", visible: !0 }),
      (this.mapPostrenderListenerKey = null),
      this.addChangeListener(Oe.ELEMENT, this.handleElementChanged),
      this.addChangeListener(Oe.MAP, this.handleMapChanged),
      this.addChangeListener(Oe.OFFSET, this.handleOffsetChanged),
      this.addChangeListener(Oe.POSITION, this.handlePositionChanged),
      this.addChangeListener(Oe.POSITIONING, this.handlePositioningChanged),
      t.element !== void 0 && this.setElement(t.element),
      this.setOffset(t.offset !== void 0 ? t.offset : [0, 0]),
      this.setPositioning(t.positioning || "top-left"),
      t.position !== void 0 && this.setPosition(t.position);
  }
  getElement() {
    return this.get(Oe.ELEMENT);
  }
  getId() {
    return this.id;
  }
  getMap() {
    return this.get(Oe.MAP) || null;
  }
  getOffset() {
    return this.get(Oe.OFFSET);
  }
  getPosition() {
    return this.get(Oe.POSITION);
  }
  getPositioning() {
    return this.get(Oe.POSITIONING);
  }
  handleElementChanged() {
    Up(this.element);
    const t = this.getElement();
    t && this.element.appendChild(t);
  }
  handleMapChanged() {
    var i;
    this.mapPostrenderListenerKey &&
      ((i = this.element) == null || i.remove(),
      jt(this.mapPostrenderListenerKey),
      (this.mapPostrenderListenerKey = null));
    const t = this.getMap();
    if (t) {
      (this.mapPostrenderListenerKey = Mt(t, An.POSTRENDER, this.render, this)),
        this.updatePixelPosition();
      const s = this.stopEvent
        ? t.getOverlayContainerStopEvent()
        : t.getOverlayContainer();
      this.insertFirst
        ? s.insertBefore(this.element, s.childNodes[0] || null)
        : s.appendChild(this.element),
        this.performAutoPan();
    }
  }
  render() {
    this.updatePixelPosition();
  }
  handleOffsetChanged() {
    this.updatePixelPosition();
  }
  handlePositionChanged() {
    this.updatePixelPosition(), this.performAutoPan();
  }
  handlePositioningChanged() {
    this.updatePixelPosition();
  }
  setElement(t) {
    this.set(Oe.ELEMENT, t);
  }
  setMap(t) {
    this.set(Oe.MAP, t);
  }
  setOffset(t) {
    this.set(Oe.OFFSET, t);
  }
  setPosition(t) {
    this.set(Oe.POSITION, t);
  }
  performAutoPan() {
    this.autoPan && this.panIntoView(this.autoPan);
  }
  panIntoView(t) {
    const i = this.getMap();
    if (!i || !i.getTargetElement() || !this.get(Oe.POSITION)) return;
    const s = this.getRect(i.getTargetElement(), i.getSize()),
      l = this.getElement(),
      o = this.getRect(l, [vx(l), Ex(l)]);
    t = t || {};
    const c = t.margin === void 0 ? 20 : t.margin;
    if (!nl(s, o)) {
      const h = o[0] - s[0],
        d = s[2] - o[2],
        _ = o[1] - s[1],
        m = s[3] - o[3],
        y = [0, 0];
      if (
        (h < 0 ? (y[0] = h - c) : d < 0 && (y[0] = Math.abs(d) + c),
        _ < 0 ? (y[1] = _ - c) : m < 0 && (y[1] = Math.abs(m) + c),
        y[0] !== 0 || y[1] !== 0)
      ) {
        const v = i.getView().getCenterInternal(),
          E = i.getPixelFromCoordinateInternal(v);
        if (!E) return;
        const x = [E[0] + y[0], E[1] + y[1]],
          b = t.animation || {};
        i.getView().animateInternal({
          center: i.getCoordinateFromPixelInternal(x),
          duration: b.duration,
          easing: b.easing,
        });
      }
    }
  }
  getRect(t, i) {
    const s = t.getBoundingClientRect(),
      l = s.left + window.pageXOffset,
      o = s.top + window.pageYOffset;
    return [l, o, l + i[0], o + i[1]];
  }
  setPositioning(t) {
    this.set(Oe.POSITIONING, t);
  }
  setVisible(t) {
    this.rendered.visible !== t &&
      ((this.element.style.display = t ? "" : "none"),
      (this.rendered.visible = t));
  }
  updatePixelPosition() {
    const t = this.getMap(),
      i = this.getPosition();
    if (!t || !t.isRendered() || !i) {
      this.setVisible(!1);
      return;
    }
    const s = t.getPixelFromCoordinate(i),
      l = t.getSize();
    this.updateRenderedPosition(s, l);
  }
  updateRenderedPosition(t, i) {
    const s = this.element.style,
      l = this.getOffset(),
      o = this.getPositioning();
    this.setVisible(!0);
    const c = Math.round(t[0] + l[0]) + "px",
      h = Math.round(t[1] + l[1]) + "px";
    let d = "0%",
      _ = "0%";
    o == "bottom-right" || o == "center-right" || o == "top-right"
      ? (d = "-100%")
      : (o == "bottom-center" || o == "center-center" || o == "top-center") &&
        (d = "-50%"),
      o == "bottom-left" || o == "bottom-center" || o == "bottom-right"
        ? (_ = "-100%")
        : (o == "center-left" || o == "center-center" || o == "center-right") &&
          (_ = "-50%");
    const m = `translate(${d}, ${_}) translate(${c}, ${h})`;
    this.rendered.transform_ != m &&
      ((this.rendered.transform_ = m), (s.transform = m));
  }
  getOptions() {
    return this.options;
  }
}
class rg {
  constructor(t, i, s, l) {
    (this.minX = t), (this.maxX = i), (this.minY = s), (this.maxY = l);
  }
  contains(t) {
    return this.containsXY(t[1], t[2]);
  }
  containsTileRange(t) {
    return (
      this.minX <= t.minX &&
      t.maxX <= this.maxX &&
      this.minY <= t.minY &&
      t.maxY <= this.maxY
    );
  }
  containsXY(t, i) {
    return this.minX <= t && t <= this.maxX && this.minY <= i && i <= this.maxY;
  }
  equals(t) {
    return (
      this.minX == t.minX &&
      this.minY == t.minY &&
      this.maxX == t.maxX &&
      this.maxY == t.maxY
    );
  }
  extend(t) {
    t.minX < this.minX && (this.minX = t.minX),
      t.maxX > this.maxX && (this.maxX = t.maxX),
      t.minY < this.minY && (this.minY = t.minY),
      t.maxY > this.maxY && (this.maxY = t.maxY);
  }
  getHeight() {
    return this.maxY - this.minY + 1;
  }
  getSize() {
    return [this.getWidth(), this.getHeight()];
  }
  getWidth() {
    return this.maxX - this.minX + 1;
  }
  intersects(t) {
    return (
      this.minX <= t.maxX &&
      this.maxX >= t.minX &&
      this.minY <= t.maxY &&
      this.maxY >= t.minY
    );
  }
}
function Qr(r, t, i, s, l) {
  return l !== void 0
    ? ((l.minX = r), (l.maxX = t), (l.minY = i), (l.maxY = s), l)
    : new rg(r, t, i, s);
}
function _d(r) {
  return r instanceof Image ||
    r instanceof HTMLCanvasElement ||
    r instanceof HTMLVideoElement ||
    r instanceof ImageBitmap
    ? r
    : null;
}
const tT = new Error("disposed"),
  eT = [256, 256];
class Ky extends tg {
  constructor(t) {
    const i = ft.IDLE;
    super(t.tileCoord, i, {
      transition: t.transition,
      interpolate: t.interpolate,
    }),
      (this.loader_ = t.loader),
      (this.data_ = null),
      (this.error_ = null),
      (this.size_ = t.size || null),
      (this.controller_ = t.controller || null);
  }
  getSize() {
    if (this.size_) return this.size_;
    const t = _d(this.data_);
    return t ? [t.width, t.height] : eT;
  }
  getData() {
    return this.data_;
  }
  getError() {
    return this.error_;
  }
  load() {
    if (this.state !== ft.IDLE && this.state !== ft.ERROR) return;
    (this.state = ft.LOADING), this.changed();
    const t = this;
    this.loader_()
      .then(function (i) {
        (t.data_ = i), (t.state = ft.LOADED), t.changed();
      })
      .catch(function (i) {
        (t.error_ = i), (t.state = ft.ERROR), t.changed();
      });
  }
  disposeInternal() {
    this.controller_ && (this.controller_.abort(tT), (this.controller_ = null)),
      super.disposeInternal();
  }
}
let Hf;
const ul = [];
function qy(r, t, i, s, l) {
  r.beginPath(),
    r.moveTo(0, 0),
    r.lineTo(t, i),
    r.lineTo(s, l),
    r.closePath(),
    r.save(),
    r.clip(),
    r.fillRect(0, 0, Math.max(t, s) + 1, Math.max(i, l)),
    r.restore();
}
function jf(r, t) {
  return (
    Math.abs(r[t * 4] - 210) > 2 || Math.abs(r[t * 4 + 3] - 0.75 * 255) > 2
  );
}
function iT() {
  if (Hf === void 0) {
    const r = pe(6, 6, ul);
    (r.globalCompositeOperation = "lighter"),
      (r.fillStyle = "rgba(210, 0, 0, 0.75)"),
      qy(r, 4, 5, 4, 0),
      qy(r, 4, 5, 0, 5);
    const t = r.getImageData(0, 0, 3, 3).data;
    (Hf = jf(t, 0) || jf(t, 4) || jf(t, 8)), sc(r), ul.push(r.canvas);
  }
  return Hf;
}
function Vy(r, t, i, s) {
  const l = tc(i, t, r);
  let o = ly(t, s, i);
  const c = t.getMetersPerUnit();
  c !== void 0 && (o *= c);
  const h = r.getMetersPerUnit();
  h !== void 0 && (o /= h);
  const d = r.getExtent();
  if (!d || fl(d, l)) {
    const _ = ly(r, o, l) / o;
    isFinite(_) && _ > 0 && (o /= _);
  }
  return o;
}
function nT(r, t, i, s) {
  const l = ys(i);
  let o = Vy(r, t, l, s);
  return (
    (!isFinite(o) || o <= 0) &&
      lp(i, function (c) {
        return (o = Vy(r, t, c, s)), isFinite(o) && o > 0;
      }),
    o
  );
}
function sT(r, t, i, s, l, o, c, h, d, _, m, y, v, E) {
  const x = pe(Math.round(i * r), Math.round(i * t), ul);
  if ((y || (x.imageSmoothingEnabled = !1), d.length === 0)) return x.canvas;
  x.scale(i, i);
  function b(D) {
    return Math.round(D * i) / i;
  }
  x.globalCompositeOperation = "lighter";
  const R = Ri();
  d.forEach(function (D, j, Q) {
    sp(R, D.extent);
  });
  let A;
  const O = i / s,
    G = (y ? 1 : 1 + Math.pow(2, -24)) / O;
  (A = pe(Math.round(Ft(R) * O), Math.round(Ye(R) * O), ul)),
    y || (A.imageSmoothingEnabled = !1),
    d.forEach(function (D, j, Q) {
      if (D.image.width > 0 && D.image.height > 0) {
        if (D.clipExtent) {
          A.save();
          const it = (D.clipExtent[0] - R[0]) * O,
            ot = -(D.clipExtent[3] - R[3]) * O,
            st = Ft(D.clipExtent) * O,
            nt = Ye(D.clipExtent) * O;
          A.rect(
            y ? it : Math.round(it),
            y ? ot : Math.round(ot),
            y ? st : Math.round(it + st) - Math.round(it),
            y ? nt : Math.round(ot + nt) - Math.round(ot),
          ),
            A.clip();
        }
        const Z = (D.extent[0] - R[0]) * O,
          F = -(D.extent[3] - R[3]) * O,
          V = Ft(D.extent) * O,
          rt = Ye(D.extent) * O;
        A.drawImage(
          D.image,
          _,
          _,
          D.image.width - 2 * _,
          D.image.height - 2 * _,
          y ? Z : Math.round(Z),
          y ? F : Math.round(F),
          y ? V : Math.round(Z + V) - Math.round(Z),
          y ? rt : Math.round(F + rt) - Math.round(F),
        ),
          D.clipExtent && A.restore();
      }
    });
  const z = lr(c);
  return (
    h.getTriangles().forEach(function (D, j, Q) {
      const Z = D.source,
        F = D.target;
      let V = Z[0][0],
        rt = Z[0][1],
        it = Z[1][0],
        ot = Z[1][1],
        st = Z[2][0],
        nt = Z[2][1];
      const Y = b((F[0][0] - z[0]) / o),
        q = b(-(F[0][1] - z[1]) / o),
        W = b((F[1][0] - z[0]) / o),
        $ = b(-(F[1][1] - z[1]) / o),
        T = b((F[2][0] - z[0]) / o),
        X = b(-(F[2][1] - z[1]) / o),
        U = V,
        tt = rt;
      (V = 0), (rt = 0), (it -= U), (ot -= tt), (st -= U), (nt -= tt);
      const J = [
          [it, ot, 0, 0, W - Y],
          [st, nt, 0, 0, T - Y],
          [0, 0, it, ot, $ - q],
          [0, 0, st, nt, X - q],
        ],
        lt = aS(J);
      if (!lt) return;
      if ((x.save(), x.beginPath(), iT() || !y)) {
        x.moveTo(W, $);
        const Nt = 4,
          mt = Y - W,
          Ut = q - $;
        for (let vt = 0; vt < Nt; vt++)
          x.lineTo(W + b(((vt + 1) * mt) / Nt), $ + b((vt * Ut) / (Nt - 1))),
            vt != Nt - 1 &&
              x.lineTo(
                W + b(((vt + 1) * mt) / Nt),
                $ + b(((vt + 1) * Ut) / (Nt - 1)),
              );
        x.lineTo(T, X);
      } else x.moveTo(W, $), x.lineTo(Y, q), x.lineTo(T, X);
      x.clip(),
        x.transform(lt[0], lt[2], lt[1], lt[3], Y, q),
        x.translate(R[0] - U, R[3] - tt);
      let ct;
      if (A) (ct = A.canvas), x.scale(G, -G);
      else {
        const Nt = d[0],
          mt = Nt.extent;
        (ct = Nt.image), x.scale(Ft(mt) / ct.width, -Ye(mt) / ct.height);
      }
      x.drawImage(ct, 0, 0), x.restore();
    }),
    A && (sc(A), ul.push(A.canvas)),
    m &&
      (x.save(),
      (x.globalCompositeOperation = "source-over"),
      (x.strokeStyle = "black"),
      (x.lineWidth = 1),
      h.getTriangles().forEach(function (D, j, Q) {
        const Z = D.target,
          F = (Z[0][0] - z[0]) / o,
          V = -(Z[0][1] - z[1]) / o,
          rt = (Z[1][0] - z[0]) / o,
          it = -(Z[1][1] - z[1]) / o,
          ot = (Z[2][0] - z[0]) / o,
          st = -(Z[2][1] - z[1]) / o;
        x.beginPath(),
          x.moveTo(rt, it),
          x.lineTo(F, V),
          x.lineTo(ot, st),
          x.closePath(),
          x.stroke();
      }),
      x.restore()),
    x.canvas
  );
}
const rT = 10,
  Wy = 0.25;
class lT {
  constructor(t, i, s, l, o, c, h) {
    (this.sourceProj_ = t), (this.targetProj_ = i);
    let d = {};
    const _ = h
      ? XS((G) => ye(h, tc(G, this.targetProj_, this.sourceProj_)))
      : gl(this.targetProj_, this.sourceProj_);
    (this.transformInv_ = function (G) {
      const z = G[0] + "/" + G[1];
      return d[z] || (d[z] = _(G)), d[z];
    }),
      (this.maxSourceExtent_ = l),
      (this.errorThresholdSquared_ = o * o),
      (this.triangles_ = []),
      (this.wrapsXInSource_ = !1),
      (this.canWrapXInSource_ =
        this.sourceProj_.canWrapX() &&
        !!l &&
        !!this.sourceProj_.getExtent() &&
        Ft(l) >= Ft(this.sourceProj_.getExtent())),
      (this.sourceWorldWidth_ = this.sourceProj_.getExtent()
        ? Ft(this.sourceProj_.getExtent())
        : null),
      (this.targetWorldWidth_ = this.targetProj_.getExtent()
        ? Ft(this.targetProj_.getExtent())
        : null);
    const m = lr(s),
      y = Qu(s),
      v = Wu(s),
      E = Vu(s),
      x = this.transformInv_(m),
      b = this.transformInv_(y),
      R = this.transformInv_(v),
      A = this.transformInv_(E),
      O =
        rT +
        (c
          ? Math.max(0, Math.ceil(Math.log2($f(s) / (c * c * 256 * 256))))
          : 0);
    if ((this.addQuad_(m, y, v, E, x, b, R, A, O), this.wrapsXInSource_)) {
      let G = 1 / 0;
      this.triangles_.forEach(function (z, D, j) {
        G = Math.min(G, z.source[0][0], z.source[1][0], z.source[2][0]);
      }),
        this.triangles_.forEach((z) => {
          if (
            Math.max(z.source[0][0], z.source[1][0], z.source[2][0]) - G >
            this.sourceWorldWidth_ / 2
          ) {
            const D = [
              [z.source[0][0], z.source[0][1]],
              [z.source[1][0], z.source[1][1]],
              [z.source[2][0], z.source[2][1]],
            ];
            D[0][0] - G > this.sourceWorldWidth_ / 2 &&
              (D[0][0] -= this.sourceWorldWidth_),
              D[1][0] - G > this.sourceWorldWidth_ / 2 &&
                (D[1][0] -= this.sourceWorldWidth_),
              D[2][0] - G > this.sourceWorldWidth_ / 2 &&
                (D[2][0] -= this.sourceWorldWidth_);
            const j = Math.min(D[0][0], D[1][0], D[2][0]);
            Math.max(D[0][0], D[1][0], D[2][0]) - j <
              this.sourceWorldWidth_ / 2 && (z.source = D);
          }
        });
    }
    d = {};
  }
  addTriangle_(t, i, s, l, o, c) {
    this.triangles_.push({ source: [l, o, c], target: [t, i, s] });
  }
  addQuad_(t, i, s, l, o, c, h, d, _) {
    const m = W0([o, c, h, d]),
      y = this.sourceWorldWidth_ ? Ft(m) / this.sourceWorldWidth_ : null,
      v = this.sourceWorldWidth_,
      E = this.sourceProj_.canWrapX() && y > 0.5 && y < 1;
    let x = !1;
    if (_ > 0) {
      if (this.targetProj_.isGlobal() && this.targetWorldWidth_) {
        const R = W0([t, i, s, l]);
        x = Ft(R) / this.targetWorldWidth_ > Wy || x;
      }
      !E && this.sourceProj_.isGlobal() && y && (x = y > Wy || x);
    }
    if (
      !x &&
      this.maxSourceExtent_ &&
      isFinite(m[0]) &&
      isFinite(m[1]) &&
      isFinite(m[2]) &&
      isFinite(m[3]) &&
      !qe(m, this.maxSourceExtent_)
    )
      return;
    let b = 0;
    if (
      !x &&
      (!isFinite(o[0]) ||
        !isFinite(o[1]) ||
        !isFinite(c[0]) ||
        !isFinite(c[1]) ||
        !isFinite(h[0]) ||
        !isFinite(h[1]) ||
        !isFinite(d[0]) ||
        !isFinite(d[1]))
    ) {
      if (_ > 0) x = !0;
      else if (
        ((b =
          (!isFinite(o[0]) || !isFinite(o[1]) ? 8 : 0) +
          (!isFinite(c[0]) || !isFinite(c[1]) ? 4 : 0) +
          (!isFinite(h[0]) || !isFinite(h[1]) ? 2 : 0) +
          (!isFinite(d[0]) || !isFinite(d[1]) ? 1 : 0)),
        b != 1 && b != 2 && b != 4 && b != 8)
      )
        return;
    }
    if (_ > 0) {
      if (!x) {
        const R = [(t[0] + s[0]) / 2, (t[1] + s[1]) / 2],
          A = this.transformInv_(R);
        let O;
        E
          ? (O = (ll(o[0], v) + ll(h[0], v)) / 2 - ll(A[0], v))
          : (O = (o[0] + h[0]) / 2 - A[0]);
        const G = (o[1] + h[1]) / 2 - A[1];
        x = O * O + G * G > this.errorThresholdSquared_;
      }
      if (x) {
        if (Math.abs(t[0] - s[0]) <= Math.abs(t[1] - s[1])) {
          const R = [(i[0] + s[0]) / 2, (i[1] + s[1]) / 2],
            A = this.transformInv_(R),
            O = [(l[0] + t[0]) / 2, (l[1] + t[1]) / 2],
            G = this.transformInv_(O);
          this.addQuad_(t, i, R, O, o, c, A, G, _ - 1),
            this.addQuad_(O, R, s, l, G, A, h, d, _ - 1);
        } else {
          const R = [(t[0] + i[0]) / 2, (t[1] + i[1]) / 2],
            A = this.transformInv_(R),
            O = [(s[0] + l[0]) / 2, (s[1] + l[1]) / 2],
            G = this.transformInv_(O);
          this.addQuad_(t, R, O, l, o, A, G, d, _ - 1),
            this.addQuad_(R, i, s, O, A, c, h, G, _ - 1);
        }
        return;
      }
    }
    if (E) {
      if (!this.canWrapXInSource_) return;
      this.wrapsXInSource_ = !0;
    }
    (b & 11) == 0 && this.addTriangle_(t, s, l, o, h, d),
      (b & 14) == 0 && this.addTriangle_(t, s, i, o, h, c),
      b &&
        ((b & 13) == 0 && this.addTriangle_(i, l, t, c, d, o),
        (b & 7) == 0 && this.addTriangle_(i, l, s, c, d, h));
  }
  calculateSourceExtent() {
    const t = Ri();
    return (
      this.triangles_.forEach(function (i, s, l) {
        const o = i.source;
        za(t, o[0]), za(t, o[1]), za(t, o[2]);
      }),
      t
    );
  }
  getTriangles() {
    return this.triangles_;
  }
}
const aT = 0.5;
class v1 extends tg {
  constructor(t, i, s, l, o, c, h, d, _, m, y, v) {
    super(o, ft.IDLE, v),
      (this.renderEdges_ = y !== void 0 ? y : !1),
      (this.pixelRatio_ = h),
      (this.gutter_ = d),
      (this.canvas_ = null),
      (this.sourceTileGrid_ = i),
      (this.targetTileGrid_ = l),
      (this.wrappedTileCoord_ = c || o),
      (this.sourceTiles_ = []),
      (this.sourcesListenerKeys_ = null),
      (this.sourceZ_ = 0),
      (this.clipExtent_ = t.canWrapX() ? t.getExtent() : void 0);
    const E = l.getTileCoordExtent(this.wrappedTileCoord_),
      x = this.targetTileGrid_.getExtent();
    let b = this.sourceTileGrid_.getExtent();
    const R = x ? er(E, x) : E;
    if ($f(R) === 0) {
      this.state = ft.EMPTY;
      return;
    }
    const A = t.getExtent();
    A && (b ? (b = er(b, A)) : (b = A));
    const O = l.getResolution(this.wrappedTileCoord_[0]),
      G = nT(t, s, R, O);
    if (!isFinite(G) || G <= 0) {
      this.state = ft.EMPTY;
      return;
    }
    const z = m !== void 0 ? m : aT;
    if (
      ((this.triangulation_ = new lT(t, s, R, b, G * z, O)),
      this.triangulation_.getTriangles().length === 0)
    ) {
      this.state = ft.EMPTY;
      return;
    }
    this.sourceZ_ = i.getZForResolution(G);
    let D = this.triangulation_.calculateSourceExtent();
    if (
      (b &&
        (t.canWrapX()
          ? ((D[1] = re(D[1], b[1], b[3])), (D[3] = re(D[3], b[1], b[3])))
          : (D = er(D, b))),
      !$f(D))
    )
      this.state = ft.EMPTY;
    else {
      let j = 0,
        Q = 0;
      t.canWrapX() && ((j = Ft(A)), (Q = Math.floor((D[0] - A[0]) / j))),
        up(D.slice(), t, !0).forEach((F) => {
          const V = i.getTileRangeForExtentAndZ(F, this.sourceZ_);
          for (let rt = V.minX; rt <= V.maxX; rt++)
            for (let it = V.minY; it <= V.maxY; it++) {
              const ot = _(this.sourceZ_, rt, it, h);
              if (ot) {
                const st = Q * j;
                this.sourceTiles_.push({ tile: ot, offset: st });
              }
            }
          ++Q;
        }),
        this.sourceTiles_.length === 0 && (this.state = ft.EMPTY);
    }
  }
  getImage() {
    return this.canvas_;
  }
  reproject_() {
    const t = [];
    if (
      (this.sourceTiles_.forEach((i) => {
        var l;
        const s = i.tile;
        if (s && s.getState() == ft.LOADED) {
          const o = this.sourceTileGrid_.getTileCoordExtent(s.tileCoord);
          (o[0] += i.offset), (o[2] += i.offset);
          const c = (l = this.clipExtent_) == null ? void 0 : l.slice();
          c && ((c[0] += i.offset), (c[2] += i.offset)),
            t.push({ extent: o, clipExtent: c, image: s.getImage() });
        }
      }),
      (this.sourceTiles_.length = 0),
      t.length === 0)
    )
      this.state = ft.ERROR;
    else {
      const i = this.wrappedTileCoord_[0],
        s = this.targetTileGrid_.getTileSize(i),
        l = typeof s == "number" ? s : s[0],
        o = typeof s == "number" ? s : s[1],
        c = this.targetTileGrid_.getResolution(i),
        h = this.sourceTileGrid_.getResolution(this.sourceZ_),
        d = this.targetTileGrid_.getTileCoordExtent(this.wrappedTileCoord_);
      (this.canvas_ = sT(
        l,
        o,
        this.pixelRatio_,
        h,
        this.sourceTileGrid_.getExtent(),
        c,
        d,
        this.triangulation_,
        t,
        this.gutter_,
        this.renderEdges_,
        this.interpolate,
      )),
        (this.state = ft.LOADED);
    }
    this.changed();
  }
  load() {
    if (this.state == ft.IDLE) {
      (this.state = ft.LOADING), this.changed();
      let t = 0;
      (this.sourcesListenerKeys_ = []),
        this.sourceTiles_.forEach(({ tile: i }) => {
          const s = i.getState();
          if (s == ft.IDLE || s == ft.LOADING) {
            t++;
            const l = Mt(i, pt.CHANGE, (o) => {
              const c = i.getState();
              (c == ft.LOADED || c == ft.ERROR || c == ft.EMPTY) &&
                (jt(l),
                t--,
                t === 0 && (this.unlistenSources_(), this.reproject_()));
            });
            this.sourcesListenerKeys_.push(l);
          }
        }),
        t === 0
          ? setTimeout(this.reproject_.bind(this), 0)
          : this.sourceTiles_.forEach(function ({ tile: i }, s, l) {
              i.getState() == ft.IDLE && i.load();
            });
    }
  }
  unlistenSources_() {
    this.sourcesListenerKeys_.forEach(jt), (this.sourcesListenerKeys_ = null);
  }
  release() {
    this.canvas_ &&
      (sc(this.canvas_.getContext("2d")),
      ul.push(this.canvas_),
      (this.canvas_ = null)),
      super.release();
  }
}
class oT {
  constructor(t) {
    (this.highWaterMark = t !== void 0 ? t : 2048),
      (this.count_ = 0),
      (this.entries_ = {}),
      (this.oldest_ = null),
      (this.newest_ = null);
  }
  deleteOldest() {
    const t = this.pop();
    t instanceof ju && t.dispose();
  }
  canExpireCache() {
    return this.highWaterMark > 0 && this.getCount() > this.highWaterMark;
  }
  expireCache(t) {
    for (; this.canExpireCache(); ) this.deleteOldest();
  }
  clear() {
    for (; this.oldest_; ) this.deleteOldest();
  }
  containsKey(t) {
    return this.entries_.hasOwnProperty(t);
  }
  forEach(t) {
    let i = this.oldest_;
    for (; i; ) t(i.value_, i.key_, this), (i = i.newer);
  }
  get(t, i) {
    const s = this.entries_[t];
    return (
      Lt(
        s !== void 0,
        "Tried to get a value for a key that does not exist in the cache",
      ),
      s === this.newest_ ||
        (s === this.oldest_
          ? ((this.oldest_ = this.oldest_.newer), (this.oldest_.older = null))
          : ((s.newer.older = s.older), (s.older.newer = s.newer)),
        (s.newer = null),
        (s.older = this.newest_),
        (this.newest_.newer = s),
        (this.newest_ = s)),
      s.value_
    );
  }
  remove(t) {
    const i = this.entries_[t];
    return (
      Lt(
        i !== void 0,
        "Tried to get a value for a key that does not exist in the cache",
      ),
      i === this.newest_
        ? ((this.newest_ = i.older),
          this.newest_ && (this.newest_.newer = null))
        : i === this.oldest_
          ? ((this.oldest_ = i.newer),
            this.oldest_ && (this.oldest_.older = null))
          : ((i.newer.older = i.older), (i.older.newer = i.newer)),
      delete this.entries_[t],
      --this.count_,
      i.value_
    );
  }
  getCount() {
    return this.count_;
  }
  getKeys() {
    const t = new Array(this.count_);
    let i = 0,
      s;
    for (s = this.newest_; s; s = s.older) t[i++] = s.key_;
    return t;
  }
  getValues() {
    const t = new Array(this.count_);
    let i = 0,
      s;
    for (s = this.newest_; s; s = s.older) t[i++] = s.value_;
    return t;
  }
  peekLast() {
    return this.oldest_.value_;
  }
  peekLastKey() {
    return this.oldest_.key_;
  }
  peekFirstKey() {
    return this.newest_.key_;
  }
  peek(t) {
    var i;
    return (i = this.entries_[t]) == null ? void 0 : i.value_;
  }
  pop() {
    const t = this.oldest_;
    return (
      delete this.entries_[t.key_],
      t.newer && (t.newer.older = null),
      (this.oldest_ = t.newer),
      this.oldest_ || (this.newest_ = null),
      --this.count_,
      t.value_
    );
  }
  replace(t, i) {
    this.get(t), (this.entries_[t].value_ = i);
  }
  set(t, i) {
    Lt(
      !(t in this.entries_),
      "Tried to set a value for a key that is used already",
    );
    const s = { key_: t, newer: null, older: this.newest_, value_: i };
    this.newest_ ? (this.newest_.newer = s) : (this.oldest_ = s),
      (this.newest_ = s),
      (this.entries_[t] = s),
      ++this.count_;
  }
  setSize(t) {
    this.highWaterMark = t;
  }
}
function Hu(r, t, i, s) {
  return s !== void 0 ? ((s[0] = r), (s[1] = t), (s[2] = i), s) : [r, t, i];
}
function uT(r, t, i) {
  return r + "/" + t + "/" + i;
}
function cT(r) {
  return hT(r[0], r[1], r[2]);
}
function hT(r, t, i) {
  return (t << r) + i;
}
function fT(r, t) {
  const i = r[0],
    s = r[1],
    l = r[2];
  if (t.getMinZoom() > i || i > t.getMaxZoom()) return !1;
  const o = t.getFullTileRange(i);
  return o ? o.containsXY(s, l) : !0;
}
function Zf(r, t, i, s) {
  return `${r},${uT(t, i, s)}`;
}
function Kf(r, t, i) {
  if (!(i in r)) return (r[i] = new Set([t])), !0;
  const s = r[i],
    l = s.has(t);
  return l || s.add(t), !l;
}
function dT(r, t, i) {
  const s = r[i];
  return s ? s.delete(t) : !1;
}
function Qy(r, t) {
  const i = r.layerStatesArray[r.layerIndex];
  i.extent && (t = er(t, hs(i.extent, r.viewState.projection)));
  const s = i.layer.getRenderSource();
  if (!s.getWrapX()) {
    const l = s.getTileGridForProjection(r.viewState.projection).getExtent();
    l && (t = er(t, l));
  }
  return t;
}
class gT extends e1 {
  constructor(t, i) {
    super(t),
      (i = i || {}),
      (this.extentChanged = !0),
      (this.renderComplete = !1),
      (this.renderedExtent_ = null),
      this.renderedPixelRatio,
      (this.renderedProjection = null),
      this.renderedRevision_,
      (this.renderedTiles = []),
      this.renderedSourceKey_,
      this.renderedSourceRevision_,
      (this.tempExtent = Ri()),
      (this.tempTileRange_ = new rg(0, 0, 0, 0)),
      (this.tempTileCoord_ = Hu(0, 0, 0));
    const s = i.cacheSize !== void 0 ? i.cacheSize : 512;
    (this.tileCache_ = new oT(s)), (this.maxStaleKeys = s * 0.5);
  }
  getTileCache() {
    return this.tileCache_;
  }
  getOrCreateTile(t, i, s, l) {
    const o = this.tileCache_,
      h = this.getLayer().getSource(),
      d = Zf(h.getKey(), t, i, s);
    let _;
    if (o.containsKey(d)) _ = o.get(d);
    else {
      if (((_ = h.getTile(t, i, s, l.pixelRatio, l.viewState.projection)), !_))
        return null;
      o.set(d, _);
    }
    return _;
  }
  getTile(t, i, s, l) {
    const o = this.getOrCreateTile(t, i, s, l);
    return o || null;
  }
  getData(t) {
    const i = this.frameState;
    if (!i) return null;
    const s = this.getLayer(),
      l = ye(i.pixelToCoordinateTransform, t.slice()),
      o = s.getExtent();
    if (o && !fl(o, l)) return null;
    const c = i.viewState,
      h = s.getRenderSource(),
      d = h.getTileGridForProjection(c.projection),
      _ = h.getTilePixelRatio(i.pixelRatio);
    for (let m = d.getZForResolution(c.resolution); m >= d.getMinZoom(); --m) {
      const y = d.getTileCoordForCoordAndZ(l, m),
        v = this.getTile(m, y[1], y[2], i);
      if (!v || v.getState() !== ft.LOADED) continue;
      const E = d.getOrigin(m),
        x = We(d.getTileSize(m)),
        b = d.getResolution(m);
      let R;
      if (v instanceof f1 || v instanceof v1) R = v.getImage();
      else if (v instanceof Ky) {
        if (((R = _d(v.getData())), !R)) continue;
      } else continue;
      const A = Math.floor(_ * ((l[0] - E[0]) / b - y[1] * x[0])),
        O = Math.floor(_ * ((E[1] - l[1]) / b - y[2] * x[1])),
        G = Math.round(_ * h.getGutterForProjection(c.projection));
      return this.getImageData(R, A + G, O + G);
    }
    return null;
  }
  prepareFrame(t) {
    this.renderedProjection
      ? t.viewState.projection !== this.renderedProjection &&
        (this.tileCache_.clear(),
        (this.renderedProjection = t.viewState.projection))
      : (this.renderedProjection = t.viewState.projection);
    const i = this.getLayer().getSource();
    if (!i) return !1;
    const s = i.getRevision();
    return (
      this.renderedRevision_
        ? this.renderedRevision_ !== s &&
          ((this.renderedRevision_ = s),
          this.renderedSourceKey_ === i.getKey() && this.tileCache_.clear())
        : (this.renderedRevision_ = s),
      !0
    );
  }
  enqueueTiles(t, i, s, l, o) {
    const c = t.viewState,
      h = this.getLayer(),
      d = h.getRenderSource(),
      _ = d.getTileGridForProjection(c.projection),
      m = It(d);
    m in t.wantedTiles || (t.wantedTiles[m] = {});
    const y = t.wantedTiles[m],
      v = h.getMapInternal(),
      E = Math.max(
        s - o,
        _.getMinZoom(),
        _.getZForResolution(
          Math.min(
            h.getMaxResolution(),
            v
              ? v.getView().getResolutionForZoom(Math.max(h.getMinZoom(), 0))
              : _.getResolution(0),
          ),
          d.zDirection,
        ),
      ),
      x = c.rotation,
      b = x ? ap(c.center, c.resolution, x, t.size) : void 0;
    for (let R = s; R >= E; --R) {
      const A = _.getTileRangeForExtentAndZ(i, R, this.tempTileRange_),
        O = _.getResolution(R);
      for (let G = A.minX; G <= A.maxX; ++G)
        for (let z = A.minY; z <= A.maxY; ++z) {
          if (x && !_.tileCoordIntersectsViewport([R, G, z], b)) continue;
          const D = this.getTile(R, G, z, t);
          if (!D || !Kf(l, D, R)) continue;
          const Q = D.getKey();
          if (
            ((y[Q] = !0),
            D.getState() === ft.IDLE && !t.tileQueue.isKeyQueued(Q))
          ) {
            const Z = Hu(R, G, z, this.tempTileCoord_);
            t.tileQueue.enqueue([D, m, _.getTileCoordCenter(Z), O]);
          }
        }
    }
  }
  findStaleTile_(t, i) {
    const s = this.tileCache_,
      l = t[0],
      o = t[1],
      c = t[2],
      h = this.getStaleKeys();
    for (let d = 0; d < h.length; ++d) {
      const _ = Zf(h[d], l, o, c);
      if (s.containsKey(_)) {
        const m = s.peek(_);
        if (m.getState() === ft.LOADED)
          return m.endTransition(It(this)), Kf(i, m, l), !0;
      }
    }
    return !1;
  }
  findAltTiles_(t, i, s, l) {
    const o = t.getTileRangeForTileCoordAndZ(i, s, this.tempTileRange_);
    if (!o) return !1;
    let c = !0;
    const h = this.tileCache_,
      _ = this.getLayer().getRenderSource().getKey();
    for (let m = o.minX; m <= o.maxX; ++m)
      for (let y = o.minY; y <= o.maxY; ++y) {
        const v = Zf(_, s, m, y);
        let E = !1;
        if (h.containsKey(v)) {
          const x = h.peek(v);
          x.getState() === ft.LOADED && (Kf(l, x, s), (E = !0));
        }
        E || (c = !1);
      }
    return c;
  }
  renderFrame(t, i) {
    let s = !0;
    this.renderComplete = !0;
    const l = t.layerStatesArray[t.layerIndex],
      o = t.viewState,
      c = o.projection,
      h = o.resolution,
      d = o.center,
      _ = t.pixelRatio,
      m = this.getLayer(),
      y = m.getSource(),
      v = y.getTileGridForProjection(c),
      E = v.getZForResolution(h, y.zDirection),
      x = v.getResolution(E),
      b = y.getKey();
    this.renderedSourceKey_
      ? this.renderedSourceKey_ !== b &&
        (this.prependStaleKey(this.renderedSourceKey_),
        (this.renderedSourceKey_ = b))
      : (this.renderedSourceKey_ = b);
    let R = t.extent;
    const A = y.getTilePixelRatio(_);
    this.prepareContainer(t, i);
    const O = this.context.canvas.width,
      G = this.context.canvas.height,
      z = l.extent && hs(l.extent, c);
    z && (R = er(R, hs(l.extent, c)));
    const D = (x * O) / 2 / A,
      j = (x * G) / 2 / A,
      Q = [d[0] - D, d[1] - j, d[0] + D, d[1] + j],
      Z = {};
    this.renderedTiles.length = 0;
    const F = m.getPreload();
    if (t.nextExtent) {
      const $ = v.getZForResolution(o.nextResolution, y.zDirection),
        T = Qy(t, t.nextExtent);
      this.enqueueTiles(t, T, $, Z, F);
    }
    const V = Qy(t, R);
    if (
      (this.enqueueTiles(t, V, E, Z, 0),
      F > 0 &&
        setTimeout(() => {
          this.enqueueTiles(t, V, E - 1, Z, F - 1);
        }, 0),
      !(E in Z))
    )
      return this.container;
    const rt = It(this),
      it = t.time;
    for (const $ of Z[E]) {
      const T = $.getState();
      if (T === ft.EMPTY) continue;
      const X = $.tileCoord;
      if (T === ft.LOADED && $.getAlpha(rt, it) === 1) {
        $.endTransition(rt);
        continue;
      }
      if (
        (T !== ft.IDLE && (s = !1),
        T !== ft.ERROR && (this.renderComplete = !1),
        this.findStaleTile_(X, Z))
      ) {
        dT(Z, $, E), (t.animate = !0);
        continue;
      }
      if (this.findAltTiles_(v, X, E + 1, Z)) continue;
      const J = v.getMinZoom();
      for (let lt = E - 1; lt >= J && !this.findAltTiles_(v, X, lt, Z); --lt);
    }
    const ot = ((x / h) * _) / A,
      st = this.getRenderContext(t);
    zn(this.tempTransform, O / 2, G / 2, ot, ot, 0, -O / 2, -G / 2),
      l.extent && this.clipUnrotated(st, t, z),
      y.getInterpolate() || (st.imageSmoothingEnabled = !1),
      this.preRender(st, t);
    const nt = Object.keys(Z).map(Number);
    nt.sort(Mn);
    let Y;
    const q = [],
      W = [];
    for (let $ = nt.length - 1; $ >= 0; --$) {
      const T = nt[$],
        X = y.getTilePixelSize(T, _, c),
        tt = v.getResolution(T) / x,
        J = X[0] * tt * ot,
        lt = X[1] * tt * ot,
        ct = v.getTileCoordForCoordAndZ(lr(Q), T),
        Nt = v.getTileCoordExtent(ct),
        mt = ye(this.tempTransform, [
          (A * (Nt[0] - Q[0])) / x,
          (A * (Q[3] - Nt[3])) / x,
        ]),
        Ut = A * y.getGutterForProjection(c);
      for (const vt of Z[T]) {
        if (vt.getState() !== ft.LOADED) continue;
        const Ie = vt.tileCoord,
          Yi = ct[1] - Ie[1],
          Qe = Math.round(mt[0] - (Yi - 1) * J),
          Je = ct[2] - Ie[2],
          ki = Math.round(mt[1] - (Je - 1) * lt),
          ve = Math.round(mt[0] - Yi * J),
          ke = Math.round(mt[1] - Je * lt),
          Ai = Qe - ve,
          wi = ki - ke,
          Pi = nt.length === 1;
        let nn = !1;
        Y = [ve, ke, ve + Ai, ke, ve + Ai, ke + wi, ve, ke + wi];
        for (let Mi = 0, sn = q.length; Mi < sn; ++Mi)
          if (!Pi && T < W[Mi]) {
            const kt = q[Mi];
            qe([ve, ke, ve + Ai, ke + wi], [kt[0], kt[3], kt[4], kt[7]]) &&
              (nn || (st.save(), (nn = !0)),
              st.beginPath(),
              st.moveTo(Y[0], Y[1]),
              st.lineTo(Y[2], Y[3]),
              st.lineTo(Y[4], Y[5]),
              st.lineTo(Y[6], Y[7]),
              st.moveTo(kt[6], kt[7]),
              st.lineTo(kt[4], kt[5]),
              st.lineTo(kt[2], kt[3]),
              st.lineTo(kt[0], kt[1]),
              st.clip());
          }
        q.push(Y),
          W.push(T),
          this.drawTile(vt, t, ve, ke, Ai, wi, Ut, Pi),
          nn && st.restore(),
          this.renderedTiles.unshift(vt),
          this.updateUsedTiles(t.usedTiles, y, vt);
      }
    }
    if (
      ((this.renderedResolution = x),
      (this.extentChanged =
        !this.renderedExtent_ || !Na(this.renderedExtent_, Q)),
      (this.renderedExtent_ = Q),
      (this.renderedPixelRatio = _),
      this.postRender(this.context, t),
      l.extent && st.restore(),
      (st.imageSmoothingEnabled = !0),
      this.renderComplete)
    ) {
      const $ = (T, X) => {
        const U = It(y),
          tt = X.wantedTiles[U],
          J = tt ? Object.keys(tt).length : 0;
        this.updateCacheSize(J), this.tileCache_.expireCache();
      };
      t.postRenderFunctions.push($);
    }
    return !this.renderComplete && !s && (t.animate = !0), this.container;
  }
  updateCacheSize(t) {
    this.tileCache_.highWaterMark = Math.max(
      this.tileCache_.highWaterMark,
      t * 2,
    );
  }
  drawTile(t, i, s, l, o, c, h, d) {
    let _;
    if (t instanceof Ky) {
      if (((_ = _d(t.getData())), !_))
        throw new Error("Rendering array data is not yet supported");
    } else _ = this.getTileImage(t);
    if (!_) return;
    const m = this.getRenderContext(i),
      y = It(this),
      v = i.layerStatesArray[i.layerIndex],
      E = v.opacity * (d ? t.getAlpha(y, i.time) : 1),
      x = E !== m.globalAlpha;
    x && (m.save(), (m.globalAlpha = E)),
      m.drawImage(_, h, h, _.width - 2 * h, _.height - 2 * h, s, l, o, c),
      x && m.restore(),
      E !== v.opacity ? (i.animate = !0) : d && t.endTransition(y);
  }
  getImage() {
    const t = this.context;
    return t ? t.canvas : null;
  }
  getTileImage(t) {
    return t.getImage();
  }
  updateUsedTiles(t, i, s) {
    const l = It(i);
    l in t || (t[l] = {}), (t[l][s.getKey()] = !0);
  }
}
const Cu = {
  PRELOAD: "preload",
  USE_INTERIM_TILES_ON_ERROR: "useInterimTilesOnError",
};
class _T extends gc {
  constructor(t) {
    t = t || {};
    const i = Object.assign({}, t),
      s = t.cacheSize;
    delete t.cacheSize,
      delete i.preload,
      delete i.useInterimTilesOnError,
      super(i),
      this.on,
      this.once,
      this.un,
      (this.cacheSize_ = s),
      this.setPreload(t.preload !== void 0 ? t.preload : 0),
      this.setUseInterimTilesOnError(
        t.useInterimTilesOnError !== void 0 ? t.useInterimTilesOnError : !0,
      );
  }
  getCacheSize() {
    return this.cacheSize_;
  }
  getPreload() {
    return this.get(Cu.PRELOAD);
  }
  setPreload(t) {
    this.set(Cu.PRELOAD, t);
  }
  getUseInterimTilesOnError() {
    return this.get(Cu.USE_INTERIM_TILES_ON_ERROR);
  }
  setUseInterimTilesOnError(t) {
    this.set(Cu.USE_INTERIM_TILES_ON_ERROR, t);
  }
  getData(t) {
    return super.getData(t);
  }
}
class mT extends _T {
  constructor(t) {
    super(t);
  }
  createRenderer() {
    return new gT(this, { cacheSize: this.getCacheSize() });
  }
}
const Jr = [0, 0, 0],
  os = 5;
class E1 {
  constructor(t) {
    (this.minZoom = t.minZoom !== void 0 ? t.minZoom : 0),
      (this.resolutions_ = t.resolutions),
      Lt(
        VE(this.resolutions_, (l, o) => o - l),
        "`resolutions` must be sorted in descending order",
      );
    let i;
    if (!t.origins) {
      for (let l = 0, o = this.resolutions_.length - 1; l < o; ++l)
        if (!i) i = this.resolutions_[l] / this.resolutions_[l + 1];
        else if (this.resolutions_[l] / this.resolutions_[l + 1] !== i) {
          i = void 0;
          break;
        }
    }
    (this.zoomFactor_ = i),
      (this.maxZoom = this.resolutions_.length - 1),
      (this.origin_ = t.origin !== void 0 ? t.origin : null),
      (this.origins_ = null),
      t.origins !== void 0 &&
        ((this.origins_ = t.origins),
        Lt(
          this.origins_.length == this.resolutions_.length,
          "Number of `origins` and `resolutions` must be equal",
        ));
    const s = t.extent;
    s !== void 0 && !this.origin_ && !this.origins_ && (this.origin_ = lr(s)),
      Lt(
        (!this.origin_ && this.origins_) || (this.origin_ && !this.origins_),
        "Either `origin` or `origins` must be configured, never both",
      ),
      (this.tileSizes_ = null),
      t.tileSizes !== void 0 &&
        ((this.tileSizes_ = t.tileSizes),
        Lt(
          this.tileSizes_.length == this.resolutions_.length,
          "Number of `tileSizes` and `resolutions` must be equal",
        )),
      (this.tileSize_ =
        t.tileSize !== void 0 ? t.tileSize : this.tileSizes_ ? null : Qd),
      Lt(
        (!this.tileSize_ && this.tileSizes_) ||
          (this.tileSize_ && !this.tileSizes_),
        "Either `tileSize` or `tileSizes` must be configured, never both",
      ),
      (this.extent_ = s !== void 0 ? s : null),
      (this.fullTileRanges_ = null),
      (this.tmpSize_ = [0, 0]),
      (this.tmpExtent_ = [0, 0, 0, 0]),
      t.sizes !== void 0
        ? (this.fullTileRanges_ = t.sizes.map((l, o) => {
            const c = new rg(
              Math.min(0, l[0]),
              Math.max(l[0] - 1, -1),
              Math.min(0, l[1]),
              Math.max(l[1] - 1, -1),
            );
            if (s) {
              const h = this.getTileRangeForExtentAndZ(s, o);
              (c.minX = Math.max(h.minX, c.minX)),
                (c.maxX = Math.min(h.maxX, c.maxX)),
                (c.minY = Math.max(h.minY, c.minY)),
                (c.maxY = Math.min(h.maxY, c.maxY));
            }
            return c;
          }))
        : s && this.calculateTileRanges_(s);
  }
  forEachTileCoord(t, i, s) {
    const l = this.getTileRangeForExtentAndZ(t, i);
    for (let o = l.minX, c = l.maxX; o <= c; ++o)
      for (let h = l.minY, d = l.maxY; h <= d; ++h) s([i, o, h]);
  }
  forEachTileCoordParentTileRange(t, i, s, l) {
    let o,
      c,
      h,
      d = null,
      _ = t[0] - 1;
    for (
      this.zoomFactor_ === 2
        ? ((c = t[1]), (h = t[2]))
        : (d = this.getTileCoordExtent(t, l));
      _ >= this.minZoom;

    ) {
      if (
        (c !== void 0 && h !== void 0
          ? ((c = Math.floor(c / 2)),
            (h = Math.floor(h / 2)),
            (o = Qr(c, c, h, h, s)))
          : (o = this.getTileRangeForExtentAndZ(d, _, s)),
        i(_, o))
      )
        return !0;
      --_;
    }
    return !1;
  }
  getExtent() {
    return this.extent_;
  }
  getMaxZoom() {
    return this.maxZoom;
  }
  getMinZoom() {
    return this.minZoom;
  }
  getOrigin(t) {
    return this.origin_ ? this.origin_ : this.origins_[t];
  }
  getResolution(t) {
    return this.resolutions_[t];
  }
  getResolutions() {
    return this.resolutions_;
  }
  getTileCoordChildTileRange(t, i, s) {
    if (t[0] < this.maxZoom) {
      if (this.zoomFactor_ === 2) {
        const o = t[1] * 2,
          c = t[2] * 2;
        return Qr(o, o + 1, c, c + 1, i);
      }
      const l = this.getTileCoordExtent(t, s || this.tmpExtent_);
      return this.getTileRangeForExtentAndZ(l, t[0] + 1, i);
    }
    return null;
  }
  getTileRangeForTileCoordAndZ(t, i, s) {
    if (i > this.maxZoom || i < this.minZoom) return null;
    const l = t[0],
      o = t[1],
      c = t[2];
    if (i === l) return Qr(o, c, o, c, s);
    if (this.zoomFactor_) {
      const d = Math.pow(this.zoomFactor_, i - l),
        _ = Math.floor(o * d),
        m = Math.floor(c * d);
      if (i < l) return Qr(_, _, m, m, s);
      const y = Math.floor(d * (o + 1)) - 1,
        v = Math.floor(d * (c + 1)) - 1;
      return Qr(_, y, m, v, s);
    }
    const h = this.getTileCoordExtent(t, this.tmpExtent_);
    return this.getTileRangeForExtentAndZ(h, i, s);
  }
  getTileRangeForExtentAndZ(t, i, s) {
    this.getTileCoordForXYAndZ_(t[0], t[3], i, !1, Jr);
    const l = Jr[1],
      o = Jr[2];
    this.getTileCoordForXYAndZ_(t[2], t[1], i, !0, Jr);
    const c = Jr[1],
      h = Jr[2];
    return Qr(l, c, o, h, s);
  }
  getTileCoordCenter(t) {
    const i = this.getOrigin(t[0]),
      s = this.getResolution(t[0]),
      l = We(this.getTileSize(t[0]), this.tmpSize_);
    return [i[0] + (t[1] + 0.5) * l[0] * s, i[1] - (t[2] + 0.5) * l[1] * s];
  }
  getTileCoordExtent(t, i) {
    const s = this.getOrigin(t[0]),
      l = this.getResolution(t[0]),
      o = We(this.getTileSize(t[0]), this.tmpSize_),
      c = s[0] + t[1] * o[0] * l,
      h = s[1] - (t[2] + 1) * o[1] * l,
      d = c + o[0] * l,
      _ = h + o[1] * l;
    return Ln(c, h, d, _, i);
  }
  getTileCoordForCoordAndResolution(t, i, s) {
    return this.getTileCoordForXYAndResolution_(t[0], t[1], i, !1, s);
  }
  getTileCoordForXYAndResolution_(t, i, s, l, o) {
    const c = this.getZForResolution(s),
      h = s / this.getResolution(c),
      d = this.getOrigin(c),
      _ = We(this.getTileSize(c), this.tmpSize_);
    let m = (h * (t - d[0])) / s / _[0],
      y = (h * (d[1] - i)) / s / _[1];
    return (
      l
        ? ((m = _u(m, os) - 1), (y = _u(y, os) - 1))
        : ((m = gu(m, os)), (y = gu(y, os))),
      Hu(c, m, y, o)
    );
  }
  getTileCoordForXYAndZ_(t, i, s, l, o) {
    const c = this.getOrigin(s),
      h = this.getResolution(s),
      d = We(this.getTileSize(s), this.tmpSize_);
    let _ = (t - c[0]) / h / d[0],
      m = (c[1] - i) / h / d[1];
    return (
      l
        ? ((_ = _u(_, os) - 1), (m = _u(m, os) - 1))
        : ((_ = gu(_, os)), (m = gu(m, os))),
      Hu(s, _, m, o)
    );
  }
  getTileCoordForCoordAndZ(t, i, s) {
    return this.getTileCoordForXYAndZ_(t[0], t[1], i, !1, s);
  }
  getTileCoordResolution(t) {
    return this.resolutions_[t[0]];
  }
  getTileSize(t) {
    return this.tileSize_ ? this.tileSize_ : this.tileSizes_[t];
  }
  getFullTileRange(t) {
    return this.fullTileRanges_
      ? this.fullTileRanges_[t]
      : this.extent_
        ? this.getTileRangeForExtentAndZ(this.extent_, t)
        : null;
  }
  getZForResolution(t, i) {
    const s = pd(this.resolutions_, t, i || 0);
    return re(s, this.minZoom, this.maxZoom);
  }
  tileCoordIntersectsViewport(t, i) {
    return Ap(i, 0, i.length, 2, this.getTileCoordExtent(t));
  }
  calculateTileRanges_(t) {
    const i = this.resolutions_.length,
      s = new Array(i);
    for (let l = this.minZoom; l < i; ++l)
      s[l] = this.getTileRangeForExtentAndZ(t, l);
    this.fullTileRanges_ = s;
  }
}
function S1(r) {
  let t = r.getDefaultTileGrid();
  return t || ((t = ET(r)), r.setDefaultTileGrid(t)), t;
}
function yT(r, t, i) {
  const s = t[0],
    l = r.getTileCoordCenter(t),
    o = lg(i);
  if (!fl(o, l)) {
    const c = Ft(o),
      h = Math.ceil((o[0] - l[0]) / c);
    return (l[0] += c * h), r.getTileCoordForCoordAndZ(l, s);
  }
  return t;
}
function pT(r, t, i, s) {
  s = s !== void 0 ? s : "top-left";
  const l = x1(r, t, i);
  return new E1({ extent: r, origin: iS(r, s), resolutions: l, tileSize: i });
}
function vT(r) {
  const t = r || {},
    i = t.extent || Kt("EPSG:3857").getExtent(),
    s = {
      extent: i,
      minZoom: t.minZoom,
      tileSize: t.tileSize,
      resolutions: x1(i, t.maxZoom, t.tileSize, t.maxResolution),
    };
  return new E1(s);
}
function x1(r, t, i, s) {
  (t = t !== void 0 ? t : gC), (i = We(i !== void 0 ? i : Qd));
  const l = Ye(r),
    o = Ft(r);
  s = s > 0 ? s : Math.max(o / i[0], l / i[1]);
  const c = t + 1,
    h = new Array(c);
  for (let d = 0; d < c; ++d) h[d] = s / Math.pow(2, d);
  return h;
}
function ET(r, t, i, s) {
  const l = lg(r);
  return pT(l, t, i, s);
}
function lg(r) {
  r = Kt(r);
  let t = r.getExtent();
  if (!t) {
    const i = (180 * Td.degrees) / r.getMetersPerUnit();
    t = Ln(-i, -i, i, i);
  }
  return t;
}
const ST = /\{z\}/g,
  xT = /\{x\}/g,
  CT = /\{y\}/g,
  TT = /\{-y\}/g;
function RT(r, t, i, s, l) {
  return r
    .replace(ST, t.toString())
    .replace(xT, i.toString())
    .replace(CT, s.toString())
    .replace(TT, function () {
      if (l === void 0)
        throw new Error(
          "If the URL template has a {-y} placeholder, the grid extent must be known",
        );
      return (l - s).toString();
    });
}
function bT(r) {
  const t = [];
  let i = /\{([a-z])-([a-z])\}/.exec(r);
  if (i) {
    const s = i[1].charCodeAt(0),
      l = i[2].charCodeAt(0);
    let o;
    for (o = s; o <= l; ++o) t.push(r.replace(i[0], String.fromCharCode(o)));
    return t;
  }
  if (((i = /\{(\d+)-(\d+)\}/.exec(r)), i)) {
    const s = parseInt(i[2], 10);
    for (let l = parseInt(i[1], 10); l <= s; l++)
      t.push(r.replace(i[0], l.toString()));
    return t;
  }
  return t.push(r), t;
}
function AT(r, t) {
  return function (i, s, l) {
    if (!i) return;
    let o;
    const c = i[0];
    if (t) {
      const h = t.getFullTileRange(c);
      h && (o = h.getHeight() - 1);
    }
    return RT(r, c, i[1], i[2], o);
  };
}
function wT(r, t) {
  const i = r.length,
    s = new Array(i);
  for (let l = 0; l < i; ++l) s[l] = AT(r[l], t);
  return MT(s);
}
function MT(r) {
  return r.length === 1
    ? r[0]
    : function (t, i, s) {
        if (!t) return;
        const l = cT(t),
          o = ll(l, r.length);
        return r[o](t, i, s);
      };
}
class OT extends Wp {
  constructor(t) {
    super({
      attributions: t.attributions,
      attributionsCollapsible: t.attributionsCollapsible,
      projection: t.projection,
      state: t.state,
      wrapX: t.wrapX,
      interpolate: t.interpolate,
    }),
      this.on,
      this.once,
      this.un,
      (this.tilePixelRatio_ =
        t.tilePixelRatio !== void 0 ? t.tilePixelRatio : 1),
      (this.tileGrid = t.tileGrid !== void 0 ? t.tileGrid : null);
    const i = [256, 256];
    this.tileGrid &&
      We(this.tileGrid.getTileSize(this.tileGrid.getMinZoom()), i),
      (this.tmpSize = [0, 0]),
      (this.key_ = t.key || It(this)),
      (this.tileOptions = {
        transition: t.transition,
        interpolate: t.interpolate,
      }),
      (this.zDirection = t.zDirection ? t.zDirection : 0);
  }
  getGutterForProjection(t) {
    return 0;
  }
  getKey() {
    return this.key_;
  }
  setKey(t) {
    this.key_ !== t && ((this.key_ = t), this.changed());
  }
  getResolutions(t) {
    const i = t ? this.getTileGridForProjection(t) : this.tileGrid;
    return i ? i.getResolutions() : null;
  }
  getTile(t, i, s, l, o) {
    return _t();
  }
  getTileGrid() {
    return this.tileGrid;
  }
  getTileGridForProjection(t) {
    return this.tileGrid ? this.tileGrid : S1(t);
  }
  getTilePixelRatio(t) {
    return this.tilePixelRatio_;
  }
  getTilePixelSize(t, i, s) {
    const l = this.getTileGridForProjection(s),
      o = this.getTilePixelRatio(i),
      c = We(l.getTileSize(t), this.tmpSize);
    return o == 1 ? c : e2(c, o, this.tmpSize);
  }
  getTileCoordForTileUrlFunction(t, i) {
    const s = i !== void 0 ? i : this.getProjection(),
      l =
        i !== void 0
          ? this.getTileGridForProjection(s)
          : this.tileGrid || this.getTileGridForProjection(s);
    return (
      this.getWrapX() && s.isGlobal() && (t = yT(l, t, s)), fT(t, l) ? t : null
    );
  }
  clear() {}
  refresh() {
    this.clear(), super.refresh();
  }
}
class DT extends In {
  constructor(t, i) {
    super(t), (this.tile = i);
  }
}
const qf = {
  TILELOADSTART: "tileloadstart",
  TILELOADEND: "tileloadend",
  TILELOADERROR: "tileloaderror",
};
class ag extends OT {
  constructor(t) {
    super({
      attributions: t.attributions,
      cacheSize: t.cacheSize,
      projection: t.projection,
      state: t.state,
      tileGrid: t.tileGrid,
      tilePixelRatio: t.tilePixelRatio,
      wrapX: t.wrapX,
      transition: t.transition,
      interpolate: t.interpolate,
      key: t.key,
      attributionsCollapsible: t.attributionsCollapsible,
      zDirection: t.zDirection,
    }),
      (this.generateTileUrlFunction_ =
        this.tileUrlFunction === ag.prototype.tileUrlFunction),
      (this.tileLoadFunction = t.tileLoadFunction),
      t.tileUrlFunction && (this.tileUrlFunction = t.tileUrlFunction),
      (this.urls = null),
      t.urls ? this.setUrls(t.urls) : t.url && this.setUrl(t.url),
      (this.tileLoadingKeys_ = {});
  }
  getTileLoadFunction() {
    return this.tileLoadFunction;
  }
  getTileUrlFunction() {
    return Object.getPrototypeOf(this).tileUrlFunction === this.tileUrlFunction
      ? this.tileUrlFunction.bind(this)
      : this.tileUrlFunction;
  }
  getUrls() {
    return this.urls;
  }
  handleTileChange(t) {
    const i = t.target,
      s = It(i),
      l = i.getState();
    let o;
    l == ft.LOADING
      ? ((this.tileLoadingKeys_[s] = !0), (o = qf.TILELOADSTART))
      : s in this.tileLoadingKeys_ &&
        (delete this.tileLoadingKeys_[s],
        (o =
          l == ft.ERROR
            ? qf.TILELOADERROR
            : l == ft.LOADED
              ? qf.TILELOADEND
              : void 0)),
      o != null && this.dispatchEvent(new DT(o, i));
  }
  setTileLoadFunction(t) {
    (this.tileLoadFunction = t), this.changed();
  }
  setTileUrlFunction(t, i) {
    (this.tileUrlFunction = t),
      typeof i < "u" ? this.setKey(i) : this.changed();
  }
  setUrl(t) {
    const i = bT(t);
    (this.urls = i), this.setUrls(i);
  }
  setUrls(t) {
    this.urls = t;
    const i = t.join(`
`);
    this.generateTileUrlFunction_
      ? this.setTileUrlFunction(wT(t, this.tileGrid), i)
      : this.setKey(i);
  }
  tileUrlFunction(t, i, s) {}
}
class LT extends ag {
  constructor(t) {
    super({
      attributions: t.attributions,
      cacheSize: t.cacheSize,
      projection: t.projection,
      state: t.state,
      tileGrid: t.tileGrid,
      tileLoadFunction: t.tileLoadFunction ? t.tileLoadFunction : zT,
      tilePixelRatio: t.tilePixelRatio,
      tileUrlFunction: t.tileUrlFunction,
      url: t.url,
      urls: t.urls,
      wrapX: t.wrapX,
      transition: t.transition,
      interpolate: t.interpolate !== void 0 ? t.interpolate : !0,
      key: t.key,
      attributionsCollapsible: t.attributionsCollapsible,
      zDirection: t.zDirection,
    }),
      (this.crossOrigin = t.crossOrigin !== void 0 ? t.crossOrigin : null),
      (this.tileClass = t.tileClass !== void 0 ? t.tileClass : f1),
      (this.tileGridForProjection = {}),
      (this.reprojectionErrorThreshold_ = t.reprojectionErrorThreshold),
      (this.renderReprojectionEdges_ = !1);
  }
  getGutterForProjection(t) {
    return this.getProjection() && t && !Ru(this.getProjection(), t)
      ? 0
      : this.getGutter();
  }
  getGutter() {
    return 0;
  }
  getKey() {
    let t = super.getKey();
    return this.getInterpolate() || (t += ":disable-interpolation"), t;
  }
  getTileGridForProjection(t) {
    const i = this.getProjection();
    if (this.tileGrid && (!i || Ru(i, t))) return this.tileGrid;
    const s = It(t);
    return (
      s in this.tileGridForProjection ||
        (this.tileGridForProjection[s] = S1(t)),
      this.tileGridForProjection[s]
    );
  }
  createTile_(t, i, s, l, o, c) {
    const h = [t, i, s],
      d = this.getTileCoordForTileUrlFunction(h, o),
      _ = d ? this.tileUrlFunction(d, l, o) : void 0,
      m = new this.tileClass(
        h,
        _ !== void 0 ? ft.IDLE : ft.EMPTY,
        _ !== void 0 ? _ : "",
        this.crossOrigin,
        this.tileLoadFunction,
        this.tileOptions,
      );
    return (
      (m.key = c),
      m.addEventListener(pt.CHANGE, this.handleTileChange.bind(this)),
      m
    );
  }
  getTile(t, i, s, l, o) {
    const c = this.getProjection();
    if (!c || !o || Ru(c, o)) return this.getTileInternal(t, i, s, l, c || o);
    const h = [t, i, s],
      d = this.getKey(),
      _ = this.getTileGridForProjection(c),
      m = this.getTileGridForProjection(o),
      y = this.getTileCoordForTileUrlFunction(h, o),
      v = new v1(
        c,
        _,
        o,
        m,
        h,
        y,
        this.getTilePixelRatio(l),
        this.getGutter(),
        (E, x, b, R) => this.getTileInternal(E, x, b, R, c),
        this.reprojectionErrorThreshold_,
        this.renderReprojectionEdges_,
        this.tileOptions,
      );
    return (v.key = d), v;
  }
  getTileInternal(t, i, s, l, o) {
    const c = this.getKey();
    return this.createTile_(t, i, s, l, o, c);
  }
  setRenderReprojectionEdges(t) {
    this.renderReprojectionEdges_ != t &&
      ((this.renderReprojectionEdges_ = t), this.changed());
  }
  setTileGridForProjection(t, i) {
    const s = Kt(t);
    if (s) {
      const l = It(s);
      l in this.tileGridForProjection || (this.tileGridForProjection[l] = i);
    }
  }
}
function zT(r, t) {
  r.getImage().src = t;
}
class IT extends LT {
  constructor(t) {
    t = t || {};
    const i = t.projection !== void 0 ? t.projection : "EPSG:3857",
      s =
        t.tileGrid !== void 0
          ? t.tileGrid
          : vT({
              extent: lg(i),
              maxResolution: t.maxResolution,
              maxZoom: t.maxZoom,
              minZoom: t.minZoom,
              tileSize: t.tileSize,
            });
    super({
      attributions: t.attributions,
      cacheSize: t.cacheSize,
      crossOrigin: t.crossOrigin,
      interpolate: t.interpolate,
      projection: i,
      reprojectionErrorThreshold: t.reprojectionErrorThreshold,
      tileGrid: s,
      tileLoadFunction: t.tileLoadFunction,
      tilePixelRatio: t.tilePixelRatio,
      tileUrlFunction: t.tileUrlFunction,
      url: t.url,
      urls: t.urls,
      wrapX: t.wrapX !== void 0 ? t.wrapX : !0,
      transition: t.transition,
      attributionsCollapsible: t.attributionsCollapsible,
      zDirection: t.zDirection,
    }),
      (this.gutter_ = t.gutter !== void 0 ? t.gutter : 0);
  }
  getGutter() {
    return this.gutter_;
  }
}
const NT =
  '&#169; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors.';
class GT extends IT {
  constructor(t) {
    t = t || {};
    let i;
    t.attributions !== void 0 ? (i = t.attributions) : (i = [NT]);
    const s = t.crossOrigin !== void 0 ? t.crossOrigin : "anonymous",
      l =
        t.url !== void 0
          ? t.url
          : "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
    super({
      attributions: i,
      attributionsCollapsible: !1,
      cacheSize: t.cacheSize,
      crossOrigin: s,
      interpolate: t.interpolate,
      maxZoom: t.maxZoom !== void 0 ? t.maxZoom : 19,
      reprojectionErrorThreshold: t.reprojectionErrorThreshold,
      tileLoadFunction: t.tileLoadFunction,
      transition: t.transition,
      url: l,
      wrapX: t.wrapX,
      zDirection: t.zDirection,
    });
  }
}
class FT {
  constructor() {
    (this.dataProjection = void 0),
      (this.defaultFeatureProjection = void 0),
      (this.featureClass = qu),
      (this.supportedMediaTypes = null);
  }
  getReadOptions(t, i) {
    if (i) {
      let s = i.dataProjection ? Kt(i.dataProjection) : this.readProjection(t);
      i.extent &&
        s &&
        s.getUnits() === "tile-pixels" &&
        ((s = Kt(s)), s.setWorldExtent(i.extent)),
        (i = { dataProjection: s, featureProjection: i.featureProjection });
    }
    return this.adaptOptions(i);
  }
  adaptOptions(t) {
    return Object.assign(
      {
        dataProjection: this.dataProjection,
        featureProjection: this.defaultFeatureProjection,
        featureClass: this.featureClass,
      },
      t,
    );
  }
  getType() {
    return _t();
  }
  readFeature(t, i) {
    return _t();
  }
  readFeatures(t, i) {
    return _t();
  }
  readGeometry(t, i) {
    return _t();
  }
  readProjection(t) {
    return _t();
  }
  writeFeature(t, i) {
    return _t();
  }
  writeFeatures(t, i) {
    return _t();
  }
  writeGeometry(t, i) {
    return _t();
  }
}
function og(r, t, i) {
  const s = i ? Kt(i.featureProjection) : null,
    l = i ? Kt(i.dataProjection) : null;
  let o = r;
  if (s && l && !Ru(s, l)) {
    t && (o = r.clone());
    const c = t ? s : l,
      h = t ? l : s;
    c.getUnits() === "tile-pixels"
      ? o.transform(c, h)
      : o.applyTransform(gl(c, h));
  }
  if (t && i && i.decimals !== void 0) {
    const c = Math.pow(10, i.decimals),
      h = function (d) {
        for (let _ = 0, m = d.length; _ < m; ++_)
          d[_] = Math.round(d[_] * c) / c;
        return d;
      };
    o === r && (o = r.clone()), o.applyTransform(h);
  }
  return o;
}
const UT = {
  Point: _l,
  LineString: ml,
  Polygon: ps,
  MultiPoint: lc,
  MultiLineString: Uu,
  MultiPolygon: Xu,
};
function XT(r, t, i) {
  return Array.isArray(t[0])
    ? (Mp(r, 0, t, i) || ((r = r.slice()), ad(r, 0, t, i)), r)
    : (Ud(r, 0, t, i) || ((r = r.slice()), Lu(r, 0, t, i)), r);
}
function C1(r, t) {
  var o;
  const i = r.geometry;
  if (!i) return [];
  if (Array.isArray(i)) return i.map((c) => C1({ ...r, geometry: c })).flat();
  const s = i.type === "MultiPolygon" ? "Polygon" : i.type;
  if (s === "GeometryCollection" || s === "Circle")
    throw new Error("Unsupported geometry type: " + s);
  const l = i.layout.length;
  return og(
    new li(
      s,
      s === "Polygon" ? XT(i.flatCoordinates, i.ends, l) : i.flatCoordinates,
      (o = i.ends) == null ? void 0 : o.flat(),
      l,
      r.properties || {},
      r.id,
    ).enableSimplifyTransformed(),
    !1,
    t,
  );
}
function ug(r, t) {
  if (!r) return null;
  if (Array.isArray(r)) {
    const s = r.map((l) => ug(l, t));
    return new Fu(s);
  }
  const i = UT[r.type];
  return og(new i(r.flatCoordinates, r.layout || "XY", r.ends), !1, t);
}
class YT extends FT {
  constructor() {
    super();
  }
  getType() {
    return "json";
  }
  readFeature(t, i) {
    return this.readFeatureFromObject(Tu(t), this.getReadOptions(t, i));
  }
  readFeatures(t, i) {
    return this.readFeaturesFromObject(Tu(t), this.getReadOptions(t, i));
  }
  readFeatureFromObject(t, i) {
    return _t();
  }
  readFeaturesFromObject(t, i) {
    return _t();
  }
  readGeometry(t, i) {
    return this.readGeometryFromObject(Tu(t), this.getReadOptions(t, i));
  }
  readGeometryFromObject(t, i) {
    return _t();
  }
  readProjection(t) {
    return this.readProjectionFromObject(Tu(t));
  }
  readProjectionFromObject(t) {
    return _t();
  }
  writeFeature(t, i) {
    return JSON.stringify(this.writeFeatureObject(t, i));
  }
  writeFeatureObject(t, i) {
    return _t();
  }
  writeFeatures(t, i) {
    return JSON.stringify(this.writeFeaturesObject(t, i));
  }
  writeFeaturesObject(t, i) {
    return _t();
  }
  writeGeometry(t, i) {
    return JSON.stringify(this.writeGeometryObject(t, i));
  }
  writeGeometryObject(t, i) {
    return _t();
  }
}
function Tu(r) {
  if (typeof r == "string") {
    const t = JSON.parse(r);
    return t || null;
  }
  return r !== null ? r : null;
}
class cg extends YT {
  constructor(t) {
    (t = t || {}),
      super(),
      (this.dataProjection = Kt(
        t.dataProjection ? t.dataProjection : "EPSG:4326",
      )),
      t.featureProjection &&
        (this.defaultFeatureProjection = Kt(t.featureProjection)),
      t.featureClass && (this.featureClass = t.featureClass),
      (this.geometryName_ = t.geometryName),
      (this.extractGeometryName_ = t.extractGeometryName),
      (this.supportedMediaTypes = [
        "application/geo+json",
        "application/vnd.geo+json",
      ]);
  }
  readFeatureFromObject(t, i) {
    let s = null;
    t.type === "Feature"
      ? (s = t)
      : (s = { type: "Feature", geometry: t, properties: null });
    const l = hg(s.geometry);
    if (this.featureClass === li)
      return C1({ geometry: l, id: s.id, properties: s.properties }, i);
    const o = new qu();
    return (
      this.geometryName_
        ? o.setGeometryName(this.geometryName_)
        : this.extractGeometryName_ &&
          s.geometry_name &&
          o.setGeometryName(s.geometry_name),
      o.setGeometry(ug(l, i)),
      "id" in s && o.setId(s.id),
      s.properties && o.setProperties(s.properties, !0),
      o
    );
  }
  readFeaturesFromObject(t, i) {
    const s = t;
    let l = null;
    if (s.type === "FeatureCollection") {
      const o = t;
      l = [];
      const c = o.features;
      for (let h = 0, d = c.length; h < d; ++h) {
        const _ = this.readFeatureFromObject(c[h], i);
        _ && l.push(_);
      }
    } else l = [this.readFeatureFromObject(t, i)];
    return l.flat();
  }
  readGeometryFromObject(t, i) {
    return kT(t, i);
  }
  readProjectionFromObject(t) {
    const i = t.crs;
    let s;
    if (i)
      if (i.type == "name") s = Kt(i.properties.name);
      else if (i.type === "EPSG") s = Kt("EPSG:" + i.properties.code);
      else throw new Error("Unknown SRS type");
    else s = this.dataProjection;
    return s;
  }
  writeFeatureObject(t, i) {
    i = this.adaptOptions(i);
    const s = { type: "Feature", geometry: null, properties: null },
      l = t.getId();
    if ((l !== void 0 && (s.id = l), !t.hasProperties())) return s;
    const o = t.getProperties(),
      c = t.getGeometry();
    return (
      c && ((s.geometry = md(c, i)), delete o[t.getGeometryName()]),
      nr(o) || (s.properties = o),
      s
    );
  }
  writeFeaturesObject(t, i) {
    i = this.adaptOptions(i);
    const s = [];
    for (let l = 0, o = t.length; l < o; ++l)
      s.push(this.writeFeatureObject(t[l], i));
    return { type: "FeatureCollection", features: s };
  }
  writeGeometryObject(t, i) {
    return md(t, this.adaptOptions(i));
  }
}
function hg(r, t) {
  if (!r) return null;
  let i;
  switch (r.type) {
    case "Point": {
      i = BT(r);
      break;
    }
    case "LineString": {
      i = HT(r);
      break;
    }
    case "Polygon": {
      i = qT(r);
      break;
    }
    case "MultiPoint": {
      i = ZT(r);
      break;
    }
    case "MultiLineString": {
      i = jT(r);
      break;
    }
    case "MultiPolygon": {
      i = KT(r);
      break;
    }
    case "GeometryCollection": {
      i = PT(r);
      break;
    }
    default:
      throw new Error("Unsupported GeoJSON type: " + r.type);
  }
  return i;
}
function kT(r, t) {
  const i = hg(r);
  return ug(i, t);
}
function PT(r, t) {
  return r.geometries.map(function (s) {
    return hg(s);
  });
}
function BT(r) {
  const t = r.coordinates;
  return { type: "Point", flatCoordinates: t, layout: or(t.length) };
}
function HT(r) {
  var s;
  const t = r.coordinates,
    i = t.flat();
  return {
    type: "LineString",
    flatCoordinates: i,
    ends: [i.length],
    layout: or(((s = t[0]) == null ? void 0 : s.length) || 2),
  };
}
function jT(r) {
  var o, c;
  const t = r.coordinates,
    i =
      ((c = (o = t[0]) == null ? void 0 : o[0]) == null ? void 0 : c.length) ||
      2,
    s = [],
    l = Qa(s, 0, t, i);
  return {
    type: "MultiLineString",
    flatCoordinates: s,
    ends: l,
    layout: or(i),
  };
}
function ZT(r) {
  var i;
  const t = r.coordinates;
  return {
    type: "MultiPoint",
    flatCoordinates: t.flat(),
    layout: or(((i = t[0]) == null ? void 0 : i.length) || 2),
  };
}
function KT(r) {
  var o, c;
  const t = r.coordinates,
    i = [],
    s =
      ((c = (o = t[0]) == null ? void 0 : o[0]) == null
        ? void 0
        : c[0].length) || 2,
    l = Cp(i, 0, t, s);
  return { type: "MultiPolygon", flatCoordinates: i, ends: l, layout: or(s) };
}
function qT(r) {
  var o, c;
  const t = r.coordinates,
    i = [],
    s = (c = (o = t[0]) == null ? void 0 : o[0]) == null ? void 0 : c.length,
    l = Qa(i, 0, t, s);
  return { type: "Polygon", flatCoordinates: i, ends: l, layout: or(s) };
}
function md(r, t) {
  r = og(r, !0, t);
  const i = r.getType();
  let s;
  switch (i) {
    case "Point": {
      s = tR(r);
      break;
    }
    case "LineString": {
      s = WT(r);
      break;
    }
    case "Polygon": {
      s = eR(r, t);
      break;
    }
    case "MultiPoint": {
      s = JT(r);
      break;
    }
    case "MultiLineString": {
      s = QT(r);
      break;
    }
    case "MultiPolygon": {
      s = $T(r, t);
      break;
    }
    case "GeometryCollection": {
      s = VT(r, t);
      break;
    }
    case "Circle": {
      s = { type: "GeometryCollection", geometries: [] };
      break;
    }
    default:
      throw new Error("Unsupported geometry type: " + i);
  }
  return s;
}
function VT(r, t) {
  return (
    (t = Object.assign({}, t)),
    delete t.featureProjection,
    {
      type: "GeometryCollection",
      geometries: r.getGeometriesArray().map(function (s) {
        return md(s, t);
      }),
    }
  );
}
function WT(r, t) {
  return { type: "LineString", coordinates: r.getCoordinates() };
}
function QT(r, t) {
  return { type: "MultiLineString", coordinates: r.getCoordinates() };
}
function JT(r, t) {
  return { type: "MultiPoint", coordinates: r.getCoordinates() };
}
function $T(r, t) {
  let i;
  return (
    t && (i = t.rightHanded),
    { type: "MultiPolygon", coordinates: r.getCoordinates(i) }
  );
}
function tR(r, t) {
  return { type: "Point", coordinates: r.getCoordinates() };
}
function eR(r, t) {
  let i;
  return (
    t && (i = t.rightHanded),
    { type: "Polygon", coordinates: r.getCoordinates(i) }
  );
}
const iR = new jd({
    url: "https://adka001.github.io/arbeidskrav_kart/geojson/skoler.geojson",
    format: new cg(),
  }),
  Jy = new $d({ source: iR }),
  Vf = new sg({ positioning: "bottom-center" });
function nR({ setLayers: r, map: t }) {
  const [i, s] = te.useState(!1),
    l = te.useRef(null),
    [o, c] = te.useState([]);
  function h(d) {
    c(t.getFeaturesAtPixel(d.pixel)), Vf.setPosition(d.coordinate);
  }
  return (
    te.useEffect(() => {
      Vf.setElement(l.current), t.addOverlay(Vf);
    }, []),
    te.useEffect(() => {
      i
        ? (r((d) => [...d, Jy]), t.on("click", h))
        : r((d) => d.filter((_) => _ !== Jy));
    }, [i]),
    ue.createElement(
      "button",
      {
        className: "button btn btn-outline-primary",
        onClick: () => s((d) => !d),
      },
      ue.createElement("input", {
        className: "checkbox",
        type: "checkbox",
        checked: i,
      }),
      "Show schools",
      ue.createElement(
        "div",
        { ref: l, className: "overlaystyle" },
        "School:",
        " ",
        o.map((d) => d.getProperties().navn).join(", "),
      ),
    )
  );
}
const sR = new jd({
    url: "https://adka001.github.io/arbeidskrav_kart/geojson/sivilforsvarsdistrikter.geojson",
    format: new cg(),
  }),
  Wf = new $d({ source: sR }),
  $y = new sg({ positioning: "bottom-center" });
function rR({ setLayers: r, map: t }) {
  const [i, s] = te.useState(!1),
    l = te.useRef(null),
    [o, c] = te.useState([]),
    h = te.useRef([]),
    d = (m) =>
      new ms({
        stroke: new El({ width: 3 }),
        text: new cc({
          text: m.getProperties().navn,
          font: "16px arial",
          fill: new xl({ color: "green" }),
          stroke: new El({ color: "white", width: 6 }),
        }),
      });
  function _(m) {
    var v;
    for (const E of h.current) E.setStyle(void 0);
    const y =
      ((v = Wf.getSource()) == null
        ? void 0
        : v.getFeaturesAtCoordinate(m.coordinate)) || [];
    for (const E of y) E.setStyle(d);
    h.current = y;
  }
  return (
    te.useEffect(() => {
      $y.setElement(l.current), t.addOverlay($y);
    }, []),
    te.useEffect(() => {
      i
        ? (r((m) => [...m, Wf]), t.on("pointermove", _))
        : r((m) => m.filter((y) => y !== Wf));
    }, [i]),
    ue.createElement(
      "button",
      {
        className: "button btn btn-outline-primary",
        onClick: () => s((m) => !m),
      },
      ue.createElement("input", {
        className: "checkbox",
        type: "checkbox",
        checked: i,
      }),
      "Defence districts",
      ue.createElement(
        "div",
        { ref: l },
        o.map((m) => m.getProperties().navn).join(", "),
      ),
    )
  );
}
const lR = new jd({
    url: "https://adka001.github.io/arbeidskrav_kart/geojson/offentligetilfluktsrom.geojson",
    format: new cg(),
  }),
  tp = new $d({ source: lR }),
  Qf = new sg({ positioning: "bottom-center" });
function aR({ setLayers: r, map: t }) {
  const [i, s] = te.useState(!1),
    l = te.useRef(null),
    [o, c] = te.useState([]);
  function h(d) {
    c(t.getFeaturesAtPixel(d.pixel)), Qf.setPosition(d.coordinate);
  }
  return (
    te.useEffect(() => {
      Qf.setElement(l.current), t.addOverlay(Qf);
    }, []),
    te.useEffect(() => {
      i
        ? (r((d) => [...d, tp]), t.on("click", h))
        : r((d) => d.filter((_) => _ !== tp));
    }, [i]),
    ue.createElement(
      "button",
      {
        className: "button btn btn-outline-primary",
        onClick: () => s((d) => !d),
      },
      ue.createElement("input", {
        className: "checkbox",
        type: "checkbox",
        checked: i,
      }),
      "Show shelters",
      ue.createElement(
        "div",
        { ref: l, className: "overlaystyle" },
        "Shelter address:",
        " ",
        o.map((d) => d.getProperties().adresse).join(", "),
      ),
    )
  );
}
kS();
const T1 = new Ji({ center: [10.8, 59.9], zoom: 10 }),
  Vs = new JC({ view: T1 });
function oR() {
  const r = te.useRef(null),
    [t, i] = te.useState([new mT({ source: new GT() })]);
  te.useEffect(() => Vs.setTarget(r.current), []),
    te.useEffect(() => Vs.setLayers(t), [t]);
  function s() {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude: l, longitude: o } }) => {
        T1.animate({ center: [o, l], zoom: 15, duration: 500 });
      },
    );
  }
  return (
    te.useEffect(() => {
      Vs.setTarget(r.current),
        navigator.geolocation.getCurrentPosition(
          (l) => {
            const { longitude: o, latitude: c } = l.coords;
            Vs.getView().animate({ center: [o, c], zoom: 11 });
          },
          (l) => {
            alert(l.message);
          },
        );
    }, []),
    ue.createElement(
      ue.Fragment,
      null,
      ue.createElement(
        "nav",
        null,
        ue.createElement(
          "button",
          { onClick: s, className: "btn btn-primary" },
          "My Location",
        ),
        ue.createElement(nR, { setLayers: i, map: Vs }),
        ue.createElement(rR, { setLayers: i, map: Vs }),
        ue.createElement(aR, { setLayers: i, map: Vs }),
      ),
      ue.createElement("main", null, ue.createElement("div", { ref: r })),
    )
  );
}
jE.createRoot(document.getElementById("root")).render(
  ue.createElement(oR, null),
);
