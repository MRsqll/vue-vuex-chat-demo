webpackJsonp([1], {
    NHnr: function (e, t, s) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = s("7+uW"), i = s("Dd8w"), a = s.n(i), r = s("NYxO"), c = {computed: a()({}, Object(r.d)(["user"]))},
            o = {
                render: function () {
                    var e = this.$createElement, t = this._self._c || e;
                    return t("div", {attrs: {id: "avatar"}}, [t("header", [t("img", {
                        staticClass: "avaImg",
                        attrs: {src: this.user.img}
                    }), this._v(" "), t("p", {staticClass: "name"}, [this._v(this._s(this.user.name))])]), this._v(" "), this._m(0)])
                }, staticRenderFns: [function () {
                    var e = this.$createElement, t = this._self._c || e;
                    return t("footer", [t("input", {staticClass: "search", attrs: {type: "text", placeholder: "请搜索"}})])
                }]
            };
        var u = s("VU/8")(c, o, !1, function (e) {
            s("NvS2")
        }, "data-v-20f10f35", null).exports, d = {
            name: "userList",
            computed: a()({}, Object(r.d)(["session", "currentUserId"])),
            methods: a()({}, Object(r.b)(["changeList"]), Object(r.c)(["changeSession"]), {
                selectUser: function (e) {
                    this.changeList(e)
                }
            }),
            created: function () {
                this.changeSession(this.session)
            }
        }, l = {
            render: function () {
                var e = this, t = e.$createElement, s = e._self._c || t;
                return s("div", {attrs: {id: "userList"}}, [s("ul", e._l(e.session, function (t) {
                    return s("li", {
                        staticClass: "listChildren",
                        class: {action: t.id === e.currentUserId},
                        on: {
                            click: function (s) {
                                return e.selectUser(t.id)
                            }
                        }
                    }, [s("img", {
                        staticClass: "userImg",
                        attrs: {src: t.user.img}
                    }), e._v(" "), s("p", {staticClass: "userName"}, [e._v(e._s(t.user.name))])])
                }), 0)])
            }, staticRenderFns: []
        };
        var m = s("VU/8")(d, l, !1, function (e) {
            s("aB/o")
        }, "data-v-8e2db796", null).exports, v = {
            name: "session",
            computed: a()({}, Object(r.d)(["session", "currentUserId"])),
            methods: {},
            created: function () {
            }
        }, f = {
            render: function () {
                var e = this, t = e.$createElement, s = e._self._c || t;
                return s("div", {attrs: {id: "session"}}, [s("ul", e._l(e.session, function (t) {
                    return t.id === e.currentUserId ? s("li", e._l(t.messages, function (n, i) {
                        return s("div", {key: i}, [s("p", {staticClass: "time"}, [s("span", [e._v(e._s(n.date))])]), e._v(" "), s("div", {staticClass: "message"}, [s("div", {staticClass: "text"}, [e._v(e._s(n.content))]), e._v(" "), s("img", {
                            staticClass: "userAvatar",
                            attrs: {src: t.user.img}
                        })])])
                    }), 0) : e._e()
                }), 0)])
            }, staticRenderFns: []
        };
        var p = s("VU/8")(v, f, !1, function (e) {
            s("vs3R")
        }, "data-v-755228d2", null).exports, h = {
            name: "contents", data: function () {
                return {content: ""}
            }, methods: a()({}, Object(r.b)(["sendSessions"]), {
                keyDown: function (e) {
                    13 === e.keyCode && "" !== this.content && (this.sendSessions(this.content), this.content = "")
                }
            })
        }, g = {
            render: function () {
                var e = this, t = e.$createElement, s = e._self._c || t;
                return s("div", {attrs: {id: "contents"}}, [s("textarea", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.content,
                        expression: "content"
                    }],
                    attrs: {placeholder: "请按Enter发送信息"},
                    domProps: {value: e.content},
                    on: {
                        keyup: e.keyDown, input: function (t) {
                            t.target.composing || (e.content = t.target.value)
                        }
                    }
                })])
            }, staticRenderFns: []
        };
        var _ = {
            name: "App",
            components: {
                avatar: u, userList: m, session: p, contents: s("VU/8")(h, g, !1, function (e) {
                    s("fZnU")
                }, "data-v-5958147e", null).exports
            }
        }, S = {
            render: function () {
                var e = this.$createElement, t = this._self._c || e;
                return t("div", {attrs: {id: "app"}}, [t("div", {staticClass: "list"}, [t("avatar"), this._v(" "), t("user-list")], 1), this._v(" "), t("div", {staticClass: "main"}, [t("session"), this._v(" "), t("contents")], 1)])
            }, staticRenderFns: []
        };
        var U = s("VU/8")(_, S, !1, function (e) {
            s("fzlL")
        }, null, null).exports, C = s("/ocq");
        n.a.use(C.a);
        var x = new C.a({routes: []}), I = s("mvHQ"), b = s.n(I);
        n.a.use(r.a);
        var w = new Date, j = new r.a.Store({
            state: {
                user: {name: "MRsqll", img: "./static/images/1.jpg"},
                session: [{
                    id: 1,
                    user: {name: "客服1号", img: "./static/images/2.png"},
                    messages: [{content: "Hello，你好，我是客服1号", date: w}]
                }, {
                    id: 2,
                    user: {name: "小良良", img: "./static/images/3.jpg"},
                    messages: [{content: "我学会了vuex，你呢？", date: w}]
                }],
                currentUserId: 1
            }, mutations: {
                initSession: function (e) {
                    var t = localStorage.getItem("vuexChatSession");
                    t && (e.session = JSON.parse(t))
                }, selectSession: function (e, t) {
                    e.currentUserId = t
                }, sendSession: function (e, t) {
                    e.session.find(function (t) {
                        return t.id === e.currentUserId
                    }).messages.push({content: t, date: new Date})
                }
            }, getters: {
                changeSession: function (e) {
                    var t = e.session.filter(function (t) {
                        return t.id !== e.currentUserId
                    });
                    e.session.messages = t[0].messages
                }
            }, actions: {
                initSessions: function (e) {
                    e.commit("initSession")
                }, changeList: function (e, t) {
                    e.commit("selectSession", t)
                }, sendSessions: function (e, t) {
                    e.commit("sendSession", t)
                }
            }
        });
        j.watch(function (e) {
            return e.session
        }, function (e) {
            console.log(e, "21312313123"), localStorage.setItem("vuexChatSession", b()(e))
        }, {deep: !0});
        var O = j;
        n.a.config.productionTip = !1, new n.a({
            el: "#app",
            router: x,
            components: {App: U},
            template: "<App/>",
            store: O
        })
    }, NvS2: function (e, t) {
    }, "aB/o": function (e, t) {
    }, fZnU: function (e, t) {
    }, fzlL: function (e, t) {
    }, vs3R: function (e, t) {
    }
}, ["NHnr"]);
//# sourceMappingURL=app.27d878f423d1b2cf9800.js.map