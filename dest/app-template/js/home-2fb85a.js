webpackJsonp([ 1 ], {
    198: function(e, t, n) {
        "use strict";
        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t;
        }
        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function i(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function r(o, i) {
                        try {
                            var a = t[o](i), u = a.value;
                        } catch (error) {
                            return void n(error);
                        }
                        return a.done ? void e(u) : Promise.resolve(u).then(function(e) {
                            r("next", e);
                        }, function(e) {
                            r("throw", e);
                        });
                    }
                    return r("next");
                });
            };
        }
        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function u(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }
        function c(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }
        function l(e, t) {
            var n = {};
            for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
            return n;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
            };
        }(), f = n(199), p = o(f), h = n(211), d = o(h), y = n(219), v = r(y), b = v.initialState, m = l(v, [ "initialState" ]), _ = function(e) {
            function t() {
                var e, n, r, o, c = this;
                a(this, t);
                for (var l = arguments.length, s = Array(l), f = 0; f < l; f++) s[f] = arguments[f];
                return n = r = u(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
                r.preload = {
                    test: "/app-template/css/test.css"
                }, r.View = d["default"], r.initialState = b, r.actions = m, r.handleIncre = function(e) {
                    var t = r, n = (t.history, t.store), o = (t.fetch, n.getState()), i = n.actions.INCREMENT;
                    i(o.num);
                }, r.handleDecre = function() {
                    var e = i(regeneratorRuntime.mark(function t(e) {
                        var n, o, i, a;
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return n = r, o = n.store, i = o.getState(), a = o.actions.UPDATE_STATE, e.next = 5, 
                                new Promise(function(e) {
                                    return setTimeout(e, 1e3);
                                });

                              case 5:
                                a({
                                    count: i.count - i.num
                                });

                              case 6:
                              case "end":
                                return e.stop();
                            }
                        }, t, c);
                    }));
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                }(), r.handleInputChange = function(e, t, n) {
                    switch (e) {
                      case "num":
                        return Number(t) || n;
                    }
                    return t;
                }, o = n, u(r, o);
            }
            return c(t, e), s(t, [ {
                key: "shouldComponentCreate",
                value: function() {
                    function e() {
                        return t.apply(this, arguments);
                    }
                    var t = i(regeneratorRuntime.mark(function n() {
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                              case 1:
                              case "end":
                                return e.stop();
                            }
                        }, n, this);
                    }));
                    return e;
                }()
            }, {
                key: "componentWillCreate",
                value: function() {
                    function e() {
                        return t.apply(this, arguments);
                    }
                    var t = i(regeneratorRuntime.mark(function n() {
                        var e, t, r;
                        return regeneratorRuntime.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return e = this.store.actions.UPDATE_STATE, t = this.store.getState(), n.next = 4, 
                                this.fetch(t.api.test);

                              case 4:
                                r = n.sent, e({
                                    test: r
                                });

                              case 6:
                              case "end":
                                return n.stop();
                            }
                        }, n, this);
                    }));
                    return e;
                }()
            }, {
                key: "componentWillMount",
                value: function() {}
            }, {
                key: "componentDidMount",
                value: function() {}
            }, {
                key: "componentWillUpdate",
                value: function() {}
            }, {
                key: "componentDidUpdate",
                value: function() {}
            }, {
                key: "componentWillUnmount",
                value: function() {}
            }, {
                key: "pageWillLeave",
                value: function() {
                    return "pageWillLeave";
                }
            }, {
                key: "windowWillUnload",
                value: function() {
                    return "windowWillUnload";
                }
            } ]), t;
        }(p["default"]);
        t["default"] = _;
    },
    199: function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }
        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }, c = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
            };
        }(), l = n(200), s = r(l), f = n(210), p = r(f), h = function(e) {
            function t() {
                return o(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
            }
            return a(t, e), c(t, [ {
                key: "getInitialState",
                value: function(e) {
                    return u({}, e, p["default"]);
                }
            } ]), t;
        }(s["default"]);
        t["default"] = h;
    },
    200: function(e, t, n) {
        "use strict";
        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t;
        }
        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }
        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }
        function u(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function r(o, i) {
                        try {
                            var a = t[o](i), u = a.value;
                        } catch (error) {
                            return void n(error);
                        }
                        return a.done ? void e(u) : Promise.resolve(u).then(function(e) {
                            r("next", e);
                        }, function(e) {
                            r("throw", e);
                        });
                    }
                    return r("next");
                });
            };
        }
        function c(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function l() {
            return !1;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }, f = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
            };
        }(), p = n(201), h = o(p), d = n(202), y = n(206), v = r(y), b = n(207), m = o(b), _ = n(208), O = o(_), g = n(209), w = r(g), j = function() {
            function e(t, n) {
                c(this, e), this.View = l, this.location = t, this.context = n, this.handlers = {};
            }
            return f(e, [ {
                key: "combineHandlers",
                value: function(e) {
                    var t = this, n = this.handlers;
                    Object.keys(e).forEach(function(r) {
                        var o = e[r];
                        0 === r.indexOf("handle") && "function" == typeof o && (n[r] = o.bind(t));
                    });
                }
            }, {
                key: "prependBasename",
                value: function(e) {
                    if (v.isAbsoluteUrl(e)) return e;
                    var t = this.context, n = t.locationOrigin, r = t.basename;
                    return n + r + e;
                }
            }, {
                key: "prependPublicPath",
                value: function(e) {
                    if (v.isAbsoluteUrl(e)) return e;
                    var t = this.context, n = t.locationOrigin, r = t.publicPath;
                    return n + r + e;
                }
            }, {
                key: "prependRestfulBasename",
                value: function(e) {
                    var t = this.context;
                    return v.isAbsoluteUrl(e) ? (t.isClient && 0 === e.indexOf("http:") && (e = e.replace("http:", "")), 
                    e) : 0 === e.indexOf("/mock/") ? t.locationOrigin + t.basename + e : t.restfulApi + e;
                }
            }, {
                key: "redirect",
                value: function(e, t) {
                    var n = this.history, r = this.context;
                    r.isServer ? (v.isAbsoluteUrl(e) || (e = r.basename + e), r.res.redirect(e)) : r.isClient && (v.isAbsoluteUrl(e) ? t ? window.location.replace(e) : window.location.href = e : t ? n.replace(e) : n.push(e));
                }
            }, {
                key: "fetch",
                value: function(e) {
                    function t(t) {
                        return e.apply(this, arguments);
                    }
                    return t.toString = function() {
                        return e.toString();
                    }, t;
                }(function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = this.context, r = this.prependRestfulBasename(e), o = s({
                        method: "GET",
                        credentials: "include"
                    }, t, {
                        headers: s({
                            "Content-Type": "application/json"
                        }, t.headers)
                    });
                    n.isServer && (o.headers["Cookie"] = n.req.headers.cookie || "");
                    var i = fetch(r, o);
                    t.json !== !1 && (i = i.then(function(e) {
                        return e.ok && 200 === e.status ? e.json() : Promise.reject(new Error(e.statusText));
                    }));
                    var a = [ i ];
                    if ("number" == typeof t.timeout) {
                        var u = new Promise(function(e, n) {
                            setTimeout(function() {
                                return n(new Error("Timeout Error:" + t.timeout + "ms"));
                            }, t.timeout);
                        });
                        a.push(u);
                    }
                    return Promise.race(a);
                })
            }, {
                key: "fetchPreload",
                value: function(e) {
                    var t = this;
                    e = e || this.preload;
                    var n = Object.keys(e);
                    if (e && 0 !== n.length) {
                        var r = this.fetch, o = this.context, i = n.map(function(n) {
                            if (!o.preload[n]) {
                                var i = e[n];
                                if (!v.isAbsoluteUrl(i)) {
                                    var a = t.context, u = a.locationOrigin, c = a.serverLocationOrigin, l = a.publicPath, s = a.isClient, f = a.isServer;
                                    s ? i = u + l + i : f && (i = c + l + i);
                                }
                                var p = {
                                    json: !1
                                };
                                return r(i, p).then(v.toText).then(function(e) {
                                    i.indexOf(".css") !== -1 && (e = e.replace(/\r+/g, "")), o.preload[n] = e;
                                });
                            }
                        });
                        return Promise.all(i);
                    }
                }
            }, {
                key: "subscriber",
                value: function(e) {
                    var t = this.context, n = this.logger;
                    t.isServer || (n(e), this.refreshView(), this.stateDidChange && this.stateDidChange(e));
                }
            }, {
                key: "init",
                value: function() {
                    function e() {
                        return t.apply(this, arguments);
                    }
                    var t = u(regeneratorRuntime.mark(function n() {
                        var e, t, r, o, i, a, u, c, l, f, p;
                        return regeneratorRuntime.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                if (e = this.initialState, t = this.getInitialState, r = this.actions, o = this.context, 
                                i = this.location, this.fetch = this.fetch.bind(this), a = void 0, "undefined" != typeof __INITIAL_STATE__ && (a = __INITIAL_STATE__, 
                                __INITIAL_STATE__ = void 0), u = s({}, e, a, {
                                    location: i,
                                    isClient: o.isClient,
                                    isServer: o.isServer,
                                    publicPath: o.publicPath,
                                    restfulApi: o.restfulApi
                                }), !this.getInitialState) {
                                    n.next = 9;
                                    break;
                                }
                                return n.next = 8, this.getInitialState(u);

                              case 8:
                                u = n.sent;

                              case 9:
                                if (c = s({}, w, r), l = this.store = (0, d.createStore)(c, u), this.combineHandlers(this), 
                                !a) {
                                    n.next = 14;
                                    break;
                                }
                                return n.abrupt("return", this.bindStoreToView());

                              case 14:
                                if (f = [], !this.shouldComponentCreate) {
                                    n.next = 21;
                                    break;
                                }
                                return n.next = 18, this.shouldComponentCreate();

                              case 18:
                                if (p = n.sent, p !== !1) {
                                    n.next = 21;
                                    break;
                                }
                                return n.abrupt("return", null);

                              case 21:
                                if (this.componentWillCreate && f.push(this.componentWillCreate()), this.preload && f.push(this.fetchPreload()), 
                                !f.length) {
                                    n.next = 26;
                                    break;
                                }
                                return n.next = 26, Promise.all(f);

                              case 26:
                                return n.abrupt("return", this.bindStoreToView());

                              case 27:
                              case "end":
                                return n.stop();
                            }
                        }, n, this);
                    }));
                    return e;
                }()
            }, {
                key: "bindStoreToView",
                value: function() {
                    var e = this.context, t = this.store, n = this.location, r = this.View, o = this.history;
                    if (e.isClient) {
                        this.logger = (0, d.createLogger)({
                            name: this.name || n.pattern
                        });
                        var u = [], l = t.subscribe(this.subscriber.bind(this));
                        if (u.push(l), this.pageWillLeave) {
                            var s = o.listenBefore(this.pageWillLeave.bind(this));
                            u.push(s);
                        }
                        if (this.windowWillUnload) {
                            var y = o.listenBeforeUnload(this.windowWillUnload.bind(this));
                            u.push(y);
                        }
                        this.unsubscribeList = u, (0, m["default"])(t), window.scrollTo(0, 0);
                    }
                    var v = this, b = function(e) {
                        function t() {
                            return c(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
                        }
                        return a(t, e), f(t, [ {
                            key: "componentWillMount",
                            value: function() {
                                v.componentWillMount && v.componentWillMount();
                            }
                        }, {
                            key: "componentDidMount",
                            value: function() {
                                v.componentDidMount && v.componentDidMount();
                            }
                        }, {
                            key: "componentWillUpdate",
                            value: function() {
                                v.componentWillUpdate && v.componentWillUpdate.apply(v, arguments);
                            }
                        }, {
                            key: "componentDidUpdate",
                            value: function() {
                                v.componentDidUpdate && v.componentDidUpdate.apply(v, arguments);
                            }
                        }, {
                            key: "shouldComponentUpdate",
                            value: function() {
                                if (v.shouldComponentUpdate) {
                                    var e = v.shouldComponentUpdate.apply(v, arguments);
                                    return e !== !1;
                                }
                                return !0;
                            }
                        }, {
                            key: "componentWillUnmount",
                            value: function() {
                                v.componentWillUnmount && v.componentWillUnmount();
                            }
                        }, {
                            key: "render",
                            value: function() {
                                return h["default"].createElement(r, this.props);
                            }
                        } ]), t;
                    }(p.Component);
                    return this.ViewWrapper = b, this.render();
                }
            }, {
                key: "destroy",
                value: function() {
                    this.unsubscribeList && (this.unsubscribeList.forEach(function(e) {
                        return e();
                    }), this.unsubscribeList = null);
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.ViewWrapper, t = this.store, n = this.handlers, r = this.location, o = this.history, i = this.context, a = this.handleInputChange, u = t.getState(), c = {
                        location: r,
                        history: o,
                        state: u,
                        actions: t.actions,
                        preload: i.preload,
                        handleInputChange: a
                    };
                    return h["default"].createElement(O["default"], {
                        context: c,
                        key: r.raw
                    }, h["default"].createElement(e, {
                        state: u,
                        handlers: n
                    }));
                }
            } ]), e;
        }();
        t["default"] = j;
    },
    206: function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o(e) {
            return e.json();
        }
        function i(e) {
            return e.text();
        }
        function a(e) {
            return 0 === e.indexOf("http") || 0 === e.indexOf("//");
        }
        function u(e, t) {
            return Object.keys(e).reduce(function(n, r) {
                return n[r] = t(e[r], r), n;
            }, {});
        }
        function c(e) {
            var t = e.substr(e.lastIndexOf(".") + 1);
            return /(jpg|png|gif|jepg)/.test(t);
        }
        function l(e) {
            return null != e && "function" == typeof e.then;
        }
        function s(e, t, n) {
            t = Array.isArray(t) ? t : t.split(".");
            var r = t.reduce(function(e, r, o) {
                if (o === t.length - 1) e[o][r] = n; else {
                    var i = e[o][r] = p({}, e[o][r]);
                    e.push(i);
                }
                return e;
            }, [ p({}, e) ]);
            return r[0];
        }
        function f(e, t) {
            return t = Array.isArray(t) ? t : t.split("."), t.reduce(function(e, t) {
                return e[t];
            }, e);
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.closePopup = t.openModal = t.registerModal = void 0;
        var p = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }, h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        };
        t.toJson = o, t.toText = i, t.isAbsoluteUrl = a, t.mapValues = u, t.isImage = c, 
        t.isThenable = l, t.setValueByPath = s, t.getValueByPath = f;
        var d = n(201), y = r(d), v = n(1), b = r(v), m = {}, _ = (t.registerModal = function g(e, t) {
            return "object" === ("undefined" == typeof e ? "undefined" : h(e)) ? Object.keys(e).forEach(function(t) {
                return g(t, e[t]);
            }) : void (m[e] = t);
        }, function() {
            return document.getElementById("modal");
        }), O = (t.openModal = function(e) {
            var t = e.type, n = e.props, r = m[t];
            if (r) {
                var o = function(e) {
                    n && n.onClose && n.onClose(e), O();
                };
                b["default"].render(y["default"].createElement(r, p({}, n, {
                    onClose: o
                })), _());
            }
        }, t.closePopup = function() {
            b["default"].unmountComponentAtNode(_());
        });
    },
    207: function(e, t) {
        "use strict";
        function n(e) {
            function t(e) {
                s.push(e), f = s.length - 1;
            }
            function n(e) {
                s = [], f = 0;
            }
            function r(e, t) {
                s = state.slice(e, t), f = state.length ? state.length - 1 : 0;
            }
            function o() {
                return s;
            }
            function i() {
                return s[f];
            }
            function a(e) {
                var t = s.length;
                e >= 0 && e <= t - 1 && (f = e, l());
            }
            function u() {
                a(f - 1);
            }
            function c() {
                a(f + 1);
            }
            function l() {
                var t = i(), n = new Date();
                e.replaceState(t, {
                    isAsync: !1,
                    start: n,
                    end: n,
                    actionType: "__RECORD_ACTION__",
                    previousState: e.getState(),
                    currentState: t
                });
            }
            var s = [], f = 0;
            e.subscribe(function(e) {
                var n = e.currentState, r = e.actionType;
                "__RECORD_ACTION__" !== r && t(n);
            }), t(e.getState());
            var p = {
                add: t,
                clear: n,
                slice: r,
                getStates: o,
                back: u,
                forward: c,
                goTo: a
            };
            window.recorder = p;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t["default"] = n;
    },
    208: function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }
        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
            };
        }(), c = n(201), l = (r(c), function(e) {
            function t() {
                return o(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
            }
            return a(t, e), u(t, [ {
                key: "updateDocumentTitle",
                value: function() {
                    var e = this.props.context.state.html;
                    if (e) {
                        var t = e.title;
                        t && t !== document.title && (document.title = t);
                    }
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    this.updateDocumentTitle();
                }
            }, {
                key: "getChildContext",
                value: function() {
                    return this.props.context;
                }
            }, {
                key: "render",
                value: function() {
                    return c.Children.only(this.props.children);
                }
            } ]), t;
        }(c.PureComponent));
        l.childContextTypes = {
            location: c.PropTypes.object,
            history: c.PropTypes.object,
            actions: c.PropTypes.object,
            state: c.PropTypes.object,
            preload: c.PropTypes.object,
            handleInputChange: c.PropTypes.func
        }, t["default"] = l;
    },
    209: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }, r = (t.INDENTITY = function(e) {
            return e;
        }, t.UPDATE_STATE = function(e, t) {
            return n({}, e, t);
        });
        t.UPDATE_INPUT_VALUE = r;
    },
    210: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t["default"] = {
            api: {
                test: "/mock/app-template/json/test"
            }
        };
    },
    211: function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o(e) {
            var t = e.state, n = e.handlers;
            return a["default"].createElement("div", null, a["default"].createElement(u.Style, {
                name: "test"
            }), a["default"].createElement(l["default"], null), a["default"].createElement("div", null, a["default"].createElement("h1", null, "count: ", t.count), a["default"].createElement("div", null, a["default"].createElement("button", {
                onClick: n.handleIncre
            }, "\u52a0", t.num), " ", a["default"].createElement("button", {
                onClick: n.handleDecre
            }, "\u51cf", t.num), " ", a["default"].createElement(u.Input, {
                name: "num"
            })), a["default"].createElement("div", null, "\u6211\u662f\u5c55\u793a ajax \u6570\u636e\u7684\u5bb9\u5668\uff1a", JSON.stringify(t.test)), a["default"].createElement("img", {
                src: t.publicPath + "/app-template/img/Koala.jpg",
                width: 200
            })));
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t["default"] = o;
        var i = n(201), a = r(i), u = n(212), c = n(218), l = r(c);
    },
    212: function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.OuterClickWrapper = t.Style = t.Preload = t.Input = t.Link = t.BaseView = void 0;
        var o = n(208), i = r(o), a = n(213), u = r(a), c = n(214), l = r(c), s = n(215), f = r(s), p = n(216), h = r(p), d = n(217), y = r(d);
        t.BaseView = i["default"], t.Link = u["default"], t.Input = l["default"], t.Preload = f["default"], 
        t.Style = h["default"], t.OuterClickWrapper = y["default"];
    },
    213: function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o(e, t) {
            var n = {};
            for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
            return n;
        }
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }
        function u(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }, l = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
            };
        }(), s = n(201), f = r(s), p = function(e) {
            function t() {
                var e, n, r, o;
                i(this, t);
                for (var u = arguments.length, c = Array(u), l = 0; l < u; l++) c[l] = arguments[l];
                return n = r = a(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(c))), 
                r.handleClick = function(e) {
                    var t = r.props, n = t.onClick, o = t.replace, i = t.to, a = r.context, u = a.history;
                    a.location;
                    n && n(e), i && (e.preventDefault(), o === !0 ? u.replace(i) : u.push(i));
                }, o = n, a(r, o);
            }
            return u(t, e), l(t, [ {
                key: "render",
                value: function() {
                    var e = this.context.location.basename, t = void 0 === e ? "" : e, n = this.props, r = n.to, i = n.children, a = (n.replace, 
                    n.as), u = o(n, [ "to", "children", "replace", "as" ]), l = a;
                    if ("a" === l) {
                        var s = r ? "" + t + r : null;
                        return f["default"].createElement("a", c({}, u, {
                            href: s,
                            onClick: this.handleClick
                        }), i);
                    }
                    return f["default"].createElement(l, c({}, u, {
                        onClick: this.handleClick
                    }), i);
                }
            } ]), t;
        }(s.Component);
        p.contextTypes = {
            location: s.PropTypes.object,
            history: s.PropTypes.object
        }, p.defaultProps = {
            as: "a"
        }, t["default"] = p;
    },
    214: function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o(e, t) {
            var n = {};
            for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
            return n;
        }
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }
        function u(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }
        function c(e, t, n) {
            t = Array.isArray(t) ? t : t.split(".");
            var r = t.reduce(function(e, r, o) {
                if (o === t.length - 1) e[o][r] = n; else {
                    var i = e[o][r] = s({}, e[o][r]);
                    e.push(i);
                }
                return e;
            }, [ s({}, e) ]);
            return r[0];
        }
        function l(e, t) {
            return t = Array.isArray(t) ? t : t.split("."), t.reduce(function(e, t) {
                return e[t];
            }, e);
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }, f = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
            };
        }(), p = n(201), h = r(p), d = function(e) {
            function t() {
                var e, n, r, o;
                i(this, t);
                for (var u = arguments.length, s = Array(u), f = 0; f < u; f++) s[f] = arguments[f];
                return n = r = a(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(s))), 
                r.handleChange = function(e) {
                    var t = r.context, n = t.state, o = t.handleInputChange, i = r.props, a = i.name, u = i.onChange, s = i.check, f = e.currentTarget.value, p = s ? a + ".value" : a, h = l(n, p), d = o ? o(p, f, h) : f, y = c(n, p, d);
                    r.setGlobalState(y), u && u(e);
                }, r.handleFocus = function(e) {
                    var t = r.context.state, n = r.props, o = n.name, i = n.onFocus, a = o + ".isWarn", u = l(t, a);
                    if (u) {
                        var s = c(t, a, !1);
                        r.setGlobalState(s), i && i(e);
                    }
                }, r.handleBlur = function(e) {
                    var t = r.context.state, n = r.props, o = n.name, i = n.onBlur, a = n.check, u = o + ".isValid", l = o + ".isWarn", s = a(e.currentTarget.value), f = t;
                    f = c(f, u, s), f = c(f, l, !s), r.setGlobalState(f), i && i(e);
                }, o = n, a(r, o);
            }
            return u(t, e), f(t, [ {
                key: "render",
                value: function() {
                    var e = this.context.state, t = this.props, n = t.as, r = t.name, i = t.value, a = t.check, u = (t.actionType, 
                    o(t, [ "as", "name", "value", "check", "actionType" ])), c = n, s = a ? r + ".value" : r;
                    return void 0 === i && (i = l(e, s)), u.value = i, u.name = r, u.onChange = this.handleChange, 
                    a && (u.onFocus = this.handleFocus, u.onBlur = this.handleBlur), h["default"].createElement(c, u);
                }
            }, {
                key: "getAction",
                value: function() {
                    return this.context.actions[this.props.actionType];
                }
            }, {
                key: "setGlobalState",
                value: function(e) {
                    var t = this.getAction();
                    t(e);
                }
            } ]), t;
        }(p.Component);
        d.contextTypes = {
            state: p.PropTypes.object,
            actions: p.PropTypes.object,
            handleInputChange: p.PropTypes.func
        }, d.defaultProps = {
            as: "input",
            type: "text",
            name: "",
            actionType: "UPDATE_INPUT_VALUE"
        }, t["default"] = d;
    },
    215: function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o(e, t) {
            var n = {};
            for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
            return n;
        }
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }
        function u(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }, l = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
            };
        }(), s = n(201), f = r(s), p = function(e) {
            function t() {
                return i(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
            }
            return u(t, e), l(t, [ {
                key: "render",
                value: function() {
                    var e = this.context.preload, t = this.props, n = t.name, r = t.as, i = o(t, [ "name", "as" ]), a = e[n];
                    return null == r || null == a ? null : f["default"].createElement(r, c({}, i, {
                        "data-preload": n
                    }), a);
                }
            } ]), t;
        }(s.Component);
        p.contextTypes = {
            preload: s.PropTypes.object
        }, p.defaultProps = {
            as: "div"
        }, t["default"] = p;
    },
    216: function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o(e) {
            var t = e.name;
            return u["default"].createElement(l["default"], {
                as: i,
                name: t
            });
        }
        function i(e) {
            return u["default"].createElement("style", {
                type: "text/css",
                "data-preload": e["data-preload"],
                dangerouslySetInnerHTML: {
                    __html: e.children
                }
            });
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t["default"] = o;
        var a = n(201), u = r(a), c = n(215), l = r(c);
    },
    217: function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }
        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
            };
        }(), c = n(201), l = (r(c), n(1)), s = function(e) {
            function t() {
                var e, n, r, a;
                o(this, t);
                for (var u = arguments.length, c = Array(u), s = 0; s < u; s++) c[s] = arguments[s];
                return n = r = i(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(c))), 
                r.handleOutterClick = function(e) {
                    var t = r.props.onClick;
                    if (t) {
                        var n = (0, l.findDOMNode)(r), o = r.contains(n, e.target);
                        o || t(e);
                    }
                }, a = n, i(r, a);
            }
            return a(t, e), u(t, [ {
                key: "componentDidMount",
                value: function() {
                    document.addEventListener("click", this.handleOutterClick);
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    document.removeEventListener("click", this.handleOutterClick);
                }
            }, {
                key: "contains",
                value: function(e, t) {
                    if (e.contains) return e.contains(t);
                    for (;t; ) {
                        if (t === e) return !0;
                        t = t.parentNode;
                    }
                    return !1;
                }
            }, {
                key: "render",
                value: function() {
                    return c.Children.only(this.props.children);
                }
            } ]), t;
        }(c.Component);
        t["default"] = s;
    },
    218: function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            };
        }
        function o() {
            return a["default"].createElement("div", null, a["default"].createElement(u.Link, {
                to: "/template"
            }, "\u9996\u9875"), " ", a["default"].createElement(u.Link, {
                to: "/template/list"
            }, "\u5217\u8868"), " ", a["default"].createElement(u.Link, {
                to: "/template/detail"
            }, "\u8be6\u60c5"));
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t["default"] = o;
        var i = n(201), a = r(i), u = n(212);
    },
    219: function(e, t) {
        "use strict";
        function n(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
            return r({}, e, {
                count: e.count + t
            });
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        };
        t.INCREMENT = n;
        t.initialState = {
            count: 0,
            num: 1
        };
    }
});