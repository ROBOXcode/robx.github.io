(function(e) {
	var t = {};

	function n(f) {
		if (t[f]) return t[f].exports;
		var r = t[f] = {
			i: f,
			l: !1,
			exports: {}
		};
		return e[f].call(r.exports, r, r.exports, n), r.l = !0, r.exports
	}
	n.m = e, n.c = t, n.d = function(e, t, f) {
		n.o(e, t) || Object.defineProperty(e, t, {
			enumerable: !0,
			get: f
		})
	}, n.r = function(e) {
		"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, n.t = function(e, t) {
		if (1 & t && (e = n(e)), 8 & t) return e;
		if (4 & t && "object" === typeof e && e && e.__esModule) return e;
		var f = Object.create(null);
		if (n.r(f), Object.defineProperty(f, "default", {
				enumerable: !0,
				value: e
			}), 2 & t && "string" != typeof e)
			for (var r in e) n.d(f, r, function(t) {
				return e[t]
			}.bind(null, r));
		return f
	}, n.n = function(e) {
		var t = e && e.__esModule ? function() {
			return e["default"]
		} : function() {
			return e
		};
		return n.d(t, "a", t), t
	}, n.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, n.p = "/", n(n.s = 0)
})({
	0: function(e, t, n) {
		e.exports = n("56d7")
	},
	"00ee": function(e, t, n) {
		var f = n("b622"),
			r = f("toStringTag"),
			i = {};
		i[r] = "z", e.exports = "[object z]" === String(i)
	},
	"034f": function(e, t, n) {
		"use strict";
		var f = n("8a23"),
			r = n.n(f);
		r.a
	},
	"0366": function(e, t, n) {
		var f = n("1c0b");
		e.exports = function(e, t, n) {
			if (f(e), void 0 === t) return e;
			switch (n) {
				case 0:
					return function() {
						return e.call(t)
					};
				case 1:
					return function(n) {
						return e.call(t, n)
					};
				case 2:
					return function(n, f) {
						return e.call(t, n, f)
					};
				case 3:
					return function(n, f, r) {
						return e.call(t, n, f, r)
					}
			}
			return function() {
				return e.apply(t, arguments)
			}
		}
	},
	"0481": function(e, t, n) {
		"use strict";
		var f = n("23e7"),
			r = n("a2bf"),
			i = n("7b0b"),
			o = n("50c4"),
			a = n("a691"),
			s = n("65f0");
		f({
			target: "Array",
			proto: !0
		}, {
			flat: function() {
				var e = arguments.length ? arguments[0] : void 0,
					t = i(this),
					n = o(t.length),
					f = s(t, 0);
				return f.length = r(f, t, t, n, 0, void 0 === e ? 1 : a(e)), f
			}
		})
	},
	"04ab": function(e, t, n) {},
	"0538": function(e, t, n) {
		"use strict";
		var f = n("1c0b"),
			r = n("861d"),
			i = [].slice,
			o = {},
			a = function(e, t, n) {
				if (!(t in o)) {
					for (var f = [], r = 0; r < t; r++) f[r] = "a[" + r + "]";
					o[t] = Function("C,a", "return new C(" + f.join(",") + ")")
				}
				return o[t](e, n)
			};
		e.exports = Function.bind || function(e) {
			var t = f(this),
				n = i.call(arguments, 1),
				o = function() {
					var f = n.concat(i.call(arguments));
					return this instanceof o ? a(t, f.length, f) : t.apply(e, f)
				};
			return r(t.prototype) && (o.prototype = t.prototype), o
		}
	},
	"057f": function(e, t, n) {
		var f = n("fc6a"),
			r = n("241c").f,
			i = {}.toString,
			o = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
			a = function(e) {
				try {
					return r(e)
				} catch (t) {
					return o.slice()
				}
			};
		e.exports.f = function(e) {
			return o && "[object Window]" == i.call(e) ? a(e) : r(f(e))
		}
	},
	"06cf": function(e, t, n) {
		var f = n("83ab"),
			r = n("d1e7"),
			i = n("5c6c"),
			o = n("fc6a"),
			a = n("c04e"),
			s = n("5135"),
			c = n("0cfb"),
			l = Object.getOwnPropertyDescriptor;
		t.f = f ? l : function(e, t) {
			if (e = o(e), t = a(t, !0), c) try {
				return l(e, t)
			} catch (n) {}
			if (s(e, t)) return i(!r.f.call(e, t), e[t])
		}
	},
	"07ac": function(e, t, n) {
		var f = n("23e7"),
			r = n("6f53").values;
		f({
			target: "Object",
			stat: !0
		}, {
			values: function(e) {
				return r(e)
			}
		})
	},
	"0a06": function(e, t, n) {
		"use strict";
		var f = n("2444"),
			r = n("c532"),
			i = n("f6b4"),
			o = n("5270");

		function a(e) {
			this.defaults = e, this.interceptors = {
				request: new i,
				response: new i
			}
		}
		a.prototype.request = function(e) {
			"string" === typeof e && (e = r.merge({
				url: arguments[0]
			}, arguments[1])), e = r.merge(f, {
				method: "get"
			}, this.defaults, e), e.method = e.method.toLowerCase();
			var t = [o, void 0],
				n = Promise.resolve(e);
			this.interceptors.request.forEach((function(e) {
				t.unshift(e.fulfilled, e.rejected)
			})), this.interceptors.response.forEach((function(e) {
				t.push(e.fulfilled, e.rejected)
			}));
			while (t.length) n = n.then(t.shift(), t.shift());
			return n
		}, r.forEach(["delete", "get", "head", "options"], (function(e) {
			a.prototype[e] = function(t, n) {
				return this.request(r.merge(n || {}, {
					method: e,
					url: t
				}))
			}
		})), r.forEach(["post", "put", "patch"], (function(e) {
			a.prototype[e] = function(t, n, f) {
				return this.request(r.merge(f || {}, {
					method: e,
					url: t,
					data: n
				}))
			}
		})), e.exports = a
	},
	"0c43": function(e, t, n) {},
	"0cfb": function(e, t, n) {
		var f = n("83ab"),
			r = n("d039"),
			i = n("cc12");
		e.exports = !f && !r((function() {
			return 7 != Object.defineProperty(i("div"), "a", {
				get: function() {
					return 7
				}
			}).a
		}))
	},
	"0df6": function(e, t, n) {
		"use strict";
		e.exports = function(e) {
			return function(t) {
				return e.apply(null, t)
			}
		}
	},
	"0fa8": function(e, t, n) {},
	1148: function(e, t, n) {
		"use strict";
		var f = n("a691"),
			r = n("1d80");
		e.exports = "".repeat || function(e) {
			var t = String(r(this)),
				n = "",
				i = f(e);
			if (i < 0 || i == 1 / 0) throw RangeError("Wrong number of repetitions");
			for (; i > 0;
				(i >>>= 1) && (t += t)) 1 & i && (n += t);
			return n
		}
	},
	1276: function(e, t, n) {
		"use strict";
		var f = n("d784"),
			r = n("44e7"),
			i = n("825a"),
			o = n("1d80"),
			a = n("4840"),
			s = n("8aa5"),
			c = n("50c4"),
			l = n("14c3"),
			u = n("9263"),
			d = n("d039"),
			p = [].push,
			h = Math.min,
			m = 4294967295,
			g = !d((function() {
				return !RegExp(m, "y")
			}));
		f("split", 2, (function(e, t, n) {
			var f;
			return f = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(e, n) {
				var f = String(o(this)),
					i = void 0 === n ? m : n >>> 0;
				if (0 === i) return [];
				if (void 0 === e) return [f];
				if (!r(e)) return t.call(f, e, i);
				var a, s, c, l = [],
					d = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""),
					h = 0,
					g = new RegExp(e.source, d + "g");
				while (a = u.call(g, f)) {
					if (s = g.lastIndex, s > h && (l.push(f.slice(h, a.index)), a.length > 1 && a.index < f.length && p.apply(l, a.slice(1)), c = a[0].length, h = s, l.length >= i)) break;
					g.lastIndex === a.index && g.lastIndex++
				}
				return h === f.length ? !c && g.test("") || l.push("") : l.push(f.slice(h)), l.length > i ? l.slice(0, i) : l
			} : "0".split(void 0, 0).length ? function(e, n) {
				return void 0 === e && 0 === n ? [] : t.call(this, e, n)
			} : t, [function(t, n) {
				var r = o(this),
					i = void 0 == t ? void 0 : t[e];
				return void 0 !== i ? i.call(t, r, n) : f.call(String(r), t, n)
			}, function(e, r) {
				var o = n(f, e, this, r, f !== t);
				if (o.done) return o.value;
				var u = i(e),
					d = String(this),
					p = a(u, RegExp),
					v = u.unicode,
					b = (u.ignoreCase ? "i" : "") + (u.multiline ? "m" : "") + (u.unicode ? "u" : "") + (g ? "y" : "g"),
					y = new p(g ? u : "^(?:" + u.source + ")", b),
					_ = void 0 === r ? m : r >>> 0;
				if (0 === _) return [];
				if (0 === d.length) return null === l(y, d) ? [d] : [];
				var w = 0,
					x = 0,
					k = [];
				while (x < d.length) {
					y.lastIndex = g ? x : 0;
					var C, S = l(y, g ? d : d.slice(x));
					if (null === S || (C = h(c(y.lastIndex + (g ? 0 : x)), d.length)) === w) x = s(d, x, v);
					else {
						if (k.push(d.slice(w, x)), k.length === _) return k;
						for (var A = 1; A <= S.length - 1; A++)
							if (k.push(S[A]), k.length === _) return k;
						x = w = C
					}
				}
				return k.push(d.slice(w)), k
			}]
		}), !g)
	},
	"12e3": function(e, t, n) {},
	"13d5": function(e, t, n) {
		"use strict";
		var f = n("23e7"),
			r = n("d58f").left,
			i = n("a640"),
			o = n("ae40"),
			a = i("reduce"),
			s = o("reduce", {
				1: 0
			});
		f({
			target: "Array",
			proto: !0,
			forced: !a || !s
		}, {
			reduce: function(e) {
				return r(this, e, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
			}
		})
	},
	"14c3": function(e, t, n) {
		var f = n("c6b6"),
			r = n("9263");
		e.exports = function(e, t) {
			var n = e.exec;
			if ("function" === typeof n) {
				var i = n.call(e, t);
				if ("object" !== typeof i) throw TypeError("RegExp exec method returned something other than an Object or null");
				return i
			}
			if ("RegExp" !== f(e)) throw TypeError("RegExp#exec called on incompatible receiver");
			return r.call(e, t)
		}
	},
	"159b": function(e, t, n) {
		var f = n("da84"),
			r = n("fdbc"),
			i = n("17c2"),
			o = n("9112");
		for (var a in r) {
			var s = f[a],
				c = s && s.prototype;
			if (c && c.forEach !== i) try {
				o(c, "forEach", i)
			} catch (l) {
				c.forEach = i
			}
		}
	},
	"166a": function(e, t, n) {},
	"16cd": function(e, t, n) {
		"use strict";
		var f = n("84a0"),
			r = n.n(f);
		r.a
	},
	"17c2": function(e, t, n) {
		"use strict";
		var f = n("b727").forEach,
			r = n("a640"),
			i = n("ae40"),
			o = r("forEach"),
			a = i("forEach");
		e.exports = o && a ? [].forEach : function(e) {
			return f(this, e, arguments.length > 1 ? arguments[1] : void 0)
		}
	},
	"18a5": function(e, t, n) {
		"use strict";
		var f = n("23e7"),
			r = n("857a"),
			i = n("af03");
		f({
			target: "String",
			proto: !0,
			forced: i("anchor")
		}, {
			anchor: function(e) {
				return r(this, "a", "name", e)
			}
		})
	},
	"19aa": function(e, t) {
		e.exports = function(e, t, n) {
			if (!(e instanceof t)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
			return e
		}
	},
	"1be4": function(e, t, n) {
		var f = n("d066");
		e.exports = f("document", "documentElement")
	},
	"1c0b": function(e, t) {
		e.exports = function(e) {
			if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
			return e
		}
	},
	"1c7e": function(e, t, n) {
		var f = n("b622"),
			r = f("iterator"),
			i = !1;
		try {
			var o = 0,
				a = {
					next: function() {
						return {
							done: !!o++
						}
					},
					return: function() {
						i = !0
					}
				};
			a[r] = function() {
				return this
			}, Array.from(a, (function() {
				throw 2
			}))
		} catch (s) {}
		e.exports = function(e, t) {
			if (!t && !i) return !1;
			var n = !1;
			try {
				var f = {};
				f[r] = function() {
					return {
						next: function() {
							return {
								done: n = !0
							}
						}
					}
				}, e(f)
			} catch (s) {}
			return n
		}
	},
	"1cdc": function(e, t, n) {
		var f = n("342f");
		e.exports = /(iphone|ipod|ipad).*applewebkit/i.test(f)
	},
	"1d2b": function(e, t, n) {
		"use strict";
		e.exports = function(e, t) {
			return function() {
				for (var n = new Array(arguments.length), f = 0; f < n.length; f++) n[f] = arguments[f];
				return e.apply(t, n)
			}
		}
	},
	"1d80": function(e, t) {
		e.exports = function(e) {
			if (void 0 == e) throw TypeError("Can't call method on " + e);
			return e
		}
	},
	"1dde": function(e, t, n) {
		var f = n("d039"),
			r = n("b622"),
			i = n("2d00"),
			o = r("species");
		e.exports = function(e) {
			return i >= 51 || !f((function() {
				var t = [],
					n = t.constructor = {};
				return n[o] = function() {
					return {
						foo: 1
					}
				}, 1 !== t[e](Boolean).foo
			}))
		}
	},
	"1ea7": function(e, t, n) {
		e.exports = n.p + "img/file.b6e6159e.svg"
	},
	"20f6": function(e, t, n) {},
	"21eb": function(e, t, n) {
		"use strict";
		t.escape = e => e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), t.unescape = e => e.replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, "&"), t.escapeTag = function(e) {
			let n = e[0];
			for (let f = 1; f < arguments.length; f++) n = n + t.escape(arguments[f]) + e[f];
			return n
		}, t.unescapeTag = function(e) {
			let n = e[0];
			for (let f = 1; f < arguments.length; f++) n = n + t.unescape(arguments[f]) + e[f];
			return n
		}
	},
	2266: function(e, t, n) {
		var f = n("825a"),
			r = n("e95a"),
			i = n("50c4"),
			o = n("0366"),
			a = n("35a1"),
			s = n("9bdd"),
			c = function(e, t) {
				this.stopped = e, this.result = t
			},
			l = e.exports = function(e, t, n, l, u) {
				var d, p, h, m, g, v, b, y = o(t, n, l ? 2 : 1);
				if (u) d = e;
				else {
					if (p = a(e), "function" != typeof p) throw TypeError("Target is not iterable");
					if (r(p)) {
						for (h = 0, m = i(e.length); m > h; h++)
							if (g = l ? y(f(b = e[h])[0], b[1]) : y(e[h]), g && g instanceof c) return g;
						return new c(!1)
					}
					d = p.call(e)
				}
				v = d.next;
				while (!(b = v.call(d)).done)
					if (g = s(d, y, b.value, l), "object" == typeof g && g && g instanceof c) return g;
				return new c(!1)
			};
		l.stop = function(e) {
			return new c(!0, e)
		}
	},
	"23cb": function(e, t, n) {
		var f = n("a691"),
			r = Math.max,
			i = Math.min;
		e.exports = function(e, t) {
			var n = f(e);
			return n < 0 ? r(n + t, 0) : i(n, t)
		}
	},
	"23e7": function(e, t, n) {
		var f = n("da84"),
			r = n("06cf").f,
			i = n("9112"),
			o = n("6eeb"),
			a = n("ce4e"),
			s = n("e893"),
			c = n("94ca");
		e.exports = function(e, t) {
			var n, l, u, d, p, h, m = e.target,
				g = e.global,
				v = e.stat;
			if (l = g ? f : v ? f[m] || a(m, {}) : (f[m] || {}).prototype, l)
				for (u in t) {
					if (p = t[u], e.noTargetGet ? (h = r(l, u), d = h && h.value) : d = l[u], n = c(g ? u : m + (v ? "." : "#") + u, e.forced), !n && void 0 !== d) {
						if (typeof p === typeof d) continue;
						s(p, d)
					}(e.sham || d && d.sham) && i(p, "sham", !0), o(l, u, p, e)
				}
		}
	},
	"241c": function(e, t, n) {
		var f = n("ca84"),
			r = n("7839"),
			i = r.concat("length", "prototype");
		t.f = Object.getOwnPropertyNames || function(e) {
			return f(e, i)
		}
	},
	2444: function(e, t, n) {
		"use strict";
		(function(t) {
			var f = n("c532"),
				r = n("c8af"),
				i = {
					"Content-Type": "application/x-www-form-urlencoded"
				};

			function o(e, t) {
				!f.isUndefined(e) && f.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
			}

			function a() {
				var e;
				return ("undefined" !== typeof XMLHttpRequest || "undefined" !== typeof t) && (e = n("b50d")), e
			}
			var s = {
				adapter: a(),
				transformRequest: [function(e, t) {
					return r(t, "Content-Type"), f.isFormData(e) || f.isArrayBuffer(e) || f.isBuffer(e) || f.isStream(e) || f.isFile(e) || f.isBlob(e) ? e : f.isArrayBufferView(e) ? e.buffer : f.isURLSearchParams(e) ? (o(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : f.isObject(e) ? (o(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
				}],
				transformResponse: [function(e) {
					if ("string" === typeof e) try {
						e = JSON.parse(e)
					} catch (t) {}
					return e
				}],
				timeout: 0,
				xsrfCookieName: "XSRF-TOKEN",
				xsrfHeaderName: "X-XSRF-TOKEN",
				maxContentLength: -1,
				validateStatus: function(e) {
					return e >= 200 && e < 300
				},
				headers: {
					common: {
						Accept: "application/json, text/plain, */*"
					}
				}
			};
			f.forEach(["delete", "get", "head"], (function(e) {
				s.headers[e] = {}
			})), f.forEach(["post", "put", "patch"], (function(e) {
				s.headers[e] = f.merge(i)
			})), e.exports = s
		}).call(this, n("4362"))
	},
	2479: function(e, t, n) {},
	"252c": function(e, t, n) {
		"use strict";
		(function(e) {
			function f() {
				var e = window.navigator.userAgent,
					t = e.indexOf("MSIE ");
				if (t > 0) return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
				var n = e.indexOf("Trident/");
				if (n > 0) {
					var f = e.indexOf("rv:");
					return parseInt(e.substring(f + 3, e.indexOf(".", f)), 10)
				}
				var r = e.indexOf("Edge/");
				return r > 0 ? parseInt(e.substring(r + 5, e.indexOf(".", r)), 10) : -1
			}
			n.d(t, "a", (function() {
				return o
			}));
			var r = void 0;

			function i() {
				i.init || (i.init = !0, r = -1 !== f())
			}
			var o = {
				render: function() {
					var e = this,
						t = e.$createElement,
						n = e._self._c || t;
					return n("div", {
						staticClass: "resize-observer",
						attrs: {
							tabindex: "-1"
						}
					})
				},
				staticRenderFns: [],
				_scopeId: "data-v-b329ee4c",
				name: "resize-observer",
				methods: {
					compareAndNotify: function() {
						this._w === this.$el.offsetWidth && this._h === this.$el.offsetHeight || (this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.$emit("notify"))
					},
					addResizeHandlers: function() {
						this._resizeObject.contentDocument.defaultView.addEventListener("resize", this.compareAndNotify), this.compareAndNotify()
					},
					removeResizeHandlers: function() {
						this._resizeObject && this._resizeObject.onload && (!r && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), delete this._resizeObject.onload)
					}
				},
				mounted: function() {
					var e = this;
					i(), this.$nextTick((function() {
						e._w = e.$el.offsetWidth, e._h = e.$el.offsetHeight
					}));
					var t = document.createElement("object");
					this._resizeObject = t, t.setAttribute("aria-hidden", "true"), t.setAttribute("tabindex", -1), t.onload = this.addResizeHandlers, t.type = "text/html", r && this.$el.appendChild(t), t.data = "about:blank", r || this.$el.appendChild(t)
				},
				beforeDestroy: function() {
					this.removeResizeHandlers()
				}
			};

			function a(e) {
				e.component("resize-observer", o), e.component("ResizeObserver", o)
			}
			var s = {
					version: "0.4.5",
					install: a
				},
				c = null;
			"undefined" !== typeof window ? c = window.Vue : "undefined" !== typeof e && (c = e.Vue), c && c.use(s)
		}).call(this, n("c8ba"))
	},
	2532: function(e, t, n) {
		"use strict";
		var f = n("23e7"),
			r = n("5a34"),
			i = n("1d80"),
			o = n("ab13");
		f({
			target: "String",
			proto: !0,
			forced: !o("includes")
		}, {
			includes: function(e) {
				return !!~String(i(this)).indexOf(r(e), arguments.length > 1 ? arguments[1] : void 0)
			}
		})
	},
	"25a8": function(e, t, n) {},
	"25f0": function(e, t, n) {
		"use strict";
		var f = n("6eeb"),
			r = n("825a"),
			i = n("d039"),
			o = n("ad6d"),
			a = "toString",
			s = RegExp.prototype,
			c = s[a],
			l = i((function() {
				return "/a/b" != c.call({
					source: "a",
					flags: "b"
				})
			})),
			u = c.name != a;
		(l || u) && f(RegExp.prototype, a, (function() {
			var e = r(this),
				t = String(e.source),
				n = e.flags,
				f = String(void 0 === n && e instanceof RegExp && !("flags" in s) ? o.call(e) : n);
			return "/" + t + "/" + f
		}), {
			unsafe: !0
		})
	},
	2626: function(e, t, n) {
		"use strict";
		var f = n("d066"),
			r = n("9bf2"),
			i = n("b622"),
			o = n("83ab"),
			a = i("species");
		e.exports = function(e) {
			var t = f(e),
				n = r.f;
			o && t && !t[a] && n(t, a, {
				configurable: !0,
				get: function() {
					return this
				}
			})
		}
	},
	"2b0e": function(e, t, n) {
		"use strict";
		(function(e) {
			/*!
			 * Vue.js v2.6.11
			 * (c) 2014-2019 Evan You
			 * Released under the MIT License.
			 */
			var n = Object.freeze({});

			function f(e) {
				return void 0 === e || null === e
			}

			function r(e) {
				return void 0 !== e && null !== e
			}

			function i(e) {
				return !0 === e
			}

			function o(e) {
				return !1 === e
			}

			function a(e) {
				return "string" === typeof e || "number" === typeof e || "symbol" === typeof e || "boolean" === typeof e
			}

			function s(e) {
				return null !== e && "object" === typeof e
			}
			var c = Object.prototype.toString;

			function l(e) {
				return "[object Object]" === c.call(e)
			}

			function u(e) {
				return "[object RegExp]" === c.call(e)
			}

			function d(e) {
				var t = parseFloat(String(e));
				return t >= 0 && Math.floor(t) === t && isFinite(e)
			}

			function p(e) {
				return r(e) && "function" === typeof e.then && "function" === typeof e.catch
			}

			function h(e) {
				return null == e ? "" : Array.isArray(e) || l(e) && e.toString === c ? JSON.stringify(e, null, 2) : String(e)
			}

			function m(e) {
				var t = parseFloat(e);
				return isNaN(t) ? e : t
			}

			function g(e, t) {
				for (var n = Object.create(null), f = e.split(","), r = 0; r < f.length; r++) n[f[r]] = !0;
				return t ? function(e) {
					return n[e.toLowerCase()]
				} : function(e) {
					return n[e]
				}
			}
			g("slot,component", !0);
			var v = g("key,ref,slot,slot-scope,is");

			function b(e, t) {
				if (e.length) {
					var n = e.indexOf(t);
					if (n > -1) return e.splice(n, 1)
				}
			}
			var y = Object.prototype.hasOwnProperty;

			function _(e, t) {
				return y.call(e, t)
			}

			function w(e) {
				var t = Object.create(null);
				return function(n) {
					var f = t[n];
					return f || (t[n] = e(n))
				}
			}
			var x = /-(\w)/g,
				k = w((function(e) {
					return e.replace(x, (function(e, t) {
						return t ? t.toUpperCase() : ""
					}))
				})),
				C = w((function(e) {
					return e.charAt(0).toUpperCase() + e.slice(1)
				})),
				S = /\B([A-Z])/g,
				A = w((function(e) {
					return e.replace(S, "-$1").toLowerCase()
				}));

			function O(e, t) {
				function n(n) {
					var f = arguments.length;
					return f ? f > 1 ? e.apply(t, arguments) : e.call(t, n) : e.call(t)
				}
				return n._length = e.length, n
			}

			function E(e, t) {
				return e.bind(t)
			}
			var T = Function.prototype.bind ? E : O;

			function j(e, t) {
				t = t || 0;
				var n = e.length - t,
					f = new Array(n);
				while (n--) f[n] = e[n + t];
				return f
			}

			function L(e, t) {
				for (var n in t) e[n] = t[n];
				return e
			}

			function I(e) {
				for (var t = {}, n = 0; n < e.length; n++) e[n] && L(t, e[n]);
				return t
			}

			function M(e, t, n) {}
			var N = function(e, t, n) {
					return !1
				},
				P = function(e) {
					return e
				};

			function B(e, t) {
				if (e === t) return !0;
				var n = s(e),
					f = s(t);
				if (!n || !f) return !n && !f && String(e) === String(t);
				try {
					var r = Array.isArray(e),
						i = Array.isArray(t);
					if (r && i) return e.length === t.length && e.every((function(e, n) {
						return B(e, t[n])
					}));
					if (e instanceof Date && t instanceof Date) return e.getTime() === t.getTime();
					if (r || i) return !1;
					var o = Object.keys(e),
						a = Object.keys(t);
					return o.length === a.length && o.every((function(n) {
						return B(e[n], t[n])
					}))
				} catch (c) {
					return !1
				}
			}

			function $(e, t) {
				for (var n = 0; n < e.length; n++)
					if (B(e[n], t)) return n;
				return -1
			}

			function z(e) {
				var t = !1;
				return function() {
					t || (t = !0, e.apply(this, arguments))
				}
			}
			var R = "data-server-rendered",
				D = ["component", "directive", "filter"],
				V = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch"],
				H = {
					optionMergeStrategies: Object.create(null),
					silent: !1,
					productionTip: !1,
					devtools: !1,
					performance: !1,
					errorHandler: null,
					warnHandler: null,
					ignoredElements: [],
					keyCodes: Object.create(null),
					isReservedTag: N,
					isReservedAttr: N,
					isUnknownElement: N,
					getTagNamespace: M,
					parsePlatformTagName: P,
					mustUseProp: N,
					async: !0,
					_lifecycleHooks: V
				},
				F = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

			function U(e) {
				var t = (e + "").charCodeAt(0);
				return 36 === t || 95 === t
			}

			function q(e, t, n, f) {
				Object.defineProperty(e, t, {
					value: n,
					enumerable: !!f,
					writable: !0,
					configurable: !0
				})
			}
			var W = new RegExp("[^" + F.source + ".$_\\d]");

			function Q(e) {
				if (!W.test(e)) {
					var t = e.split(".");
					return function(e) {
						for (var n = 0; n < t.length; n++) {
							if (!e) return;
							e = e[t[n]]
						}
						return e
					}
				}
			}
			var G, Z = "__proto__" in {},
				Y = "undefined" !== typeof window,
				J = "undefined" !== typeof WXEnvironment && !!WXEnvironment.platform,
				X = J && WXEnvironment.platform.toLowerCase(),
				K = Y && window.navigator.userAgent.toLowerCase(),
				ee = K && /msie|trident/.test(K),
				te = K && K.indexOf("msie 9.0") > 0,
				ne = K && K.indexOf("edge/") > 0,
				fe = (K && K.indexOf("android"), K && /iphone|ipad|ipod|ios/.test(K) || "ios" === X),
				re = (K && /chrome\/\d+/.test(K), K && /phantomjs/.test(K), K && K.match(/firefox\/(\d+)/)),
				ie = {}.watch,
				oe = !1;
			if (Y) try {
				var ae = {};
				Object.defineProperty(ae, "passive", {
					get: function() {
						oe = !0
					}
				}), window.addEventListener("test-passive", null, ae)
			} catch (Co) {}
			var se = function() {
					return void 0 === G && (G = !Y && !J && "undefined" !== typeof e && (e["process"] && "server" === e["process"].env.VUE_ENV)), G
				},
				ce = Y && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

			function le(e) {
				return "function" === typeof e && /native code/.test(e.toString())
			}
			var ue, de = "undefined" !== typeof Symbol && le(Symbol) && "undefined" !== typeof Reflect && le(Reflect.ownKeys);
			ue = "undefined" !== typeof Set && le(Set) ? Set : function() {
				function e() {
					this.set = Object.create(null)
				}
				return e.prototype.has = function(e) {
					return !0 === this.set[e]
				}, e.prototype.add = function(e) {
					this.set[e] = !0
				}, e.prototype.clear = function() {
					this.set = Object.create(null)
				}, e
			}();
			var pe = M,
				he = 0,
				me = function() {
					this.id = he++, this.subs = []
				};
			me.prototype.addSub = function(e) {
				this.subs.push(e)
			}, me.prototype.removeSub = function(e) {
				b(this.subs, e)
			}, me.prototype.depend = function() {
				me.target && me.target.addDep(this)
			}, me.prototype.notify = function() {
				var e = this.subs.slice();
				for (var t = 0, n = e.length; t < n; t++) e[t].update()
			}, me.target = null;
			var ge = [];

			function ve(e) {
				ge.push(e), me.target = e
			}

			function be() {
				ge.pop(), me.target = ge[ge.length - 1]
			}
			var ye = function(e, t, n, f, r, i, o, a) {
					this.tag = e, this.data = t, this.children = n, this.text = f, this.elm = r, this.ns = void 0, this.context = i, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = t && t.key, this.componentOptions = o, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = a, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1
				},
				_e = {
					child: {
						configurable: !0
					}
				};
			_e.child.get = function() {
				return this.componentInstance
			}, Object.defineProperties(ye.prototype, _e);
			var we = function(e) {
				void 0 === e && (e = "");
				var t = new ye;
				return t.text = e, t.isComment = !0, t
			};

			function xe(e) {
				return new ye(void 0, void 0, void 0, String(e))
			}

			function ke(e) {
				var t = new ye(e.tag, e.data, e.children && e.children.slice(), e.text, e.elm, e.context, e.componentOptions, e.asyncFactory);
				return t.ns = e.ns, t.isStatic = e.isStatic, t.key = e.key, t.isComment = e.isComment, t.fnContext = e.fnContext, t.fnOptions = e.fnOptions, t.fnScopeId = e.fnScopeId, t.asyncMeta = e.asyncMeta, t.isCloned = !0, t
			}
			var Ce = Array.prototype,
				Se = Object.create(Ce),
				Ae = ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"];
			Ae.forEach((function(e) {
				var t = Ce[e];
				q(Se, e, (function() {
					var n = [],
						f = arguments.length;
					while (f--) n[f] = arguments[f];
					var r, i = t.apply(this, n),
						o = this.__ob__;
					switch (e) {
						case "push":
						case "unshift":
							r = n;
							break;
						case "splice":
							r = n.slice(2);
							break
					}
					return r && o.observeArray(r), o.dep.notify(), i
				}))
			}));
			var Oe = Object.getOwnPropertyNames(Se),
				Ee = !0;

			function Te(e) {
				Ee = e
			}
			var je = function(e) {
				this.value = e, this.dep = new me, this.vmCount = 0, q(e, "__ob__", this), Array.isArray(e) ? (Z ? Le(e, Se) : Ie(e, Se, Oe), this.observeArray(e)) : this.walk(e)
			};

			function Le(e, t) {
				e.__proto__ = t
			}

			function Ie(e, t, n) {
				for (var f = 0, r = n.length; f < r; f++) {
					var i = n[f];
					q(e, i, t[i])
				}
			}

			function Me(e, t) {
				var n;
				if (s(e) && !(e instanceof ye)) return _(e, "__ob__") && e.__ob__ instanceof je ? n = e.__ob__ : Ee && !se() && (Array.isArray(e) || l(e)) && Object.isExtensible(e) && !e._isVue && (n = new je(e)), t && n && n.vmCount++, n
			}

			function Ne(e, t, n, f, r) {
				var i = new me,
					o = Object.getOwnPropertyDescriptor(e, t);
				if (!o || !1 !== o.configurable) {
					var a = o && o.get,
						s = o && o.set;
					a && !s || 2 !== arguments.length || (n = e[t]);
					var c = !r && Me(n);
					Object.defineProperty(e, t, {
						enumerable: !0,
						configurable: !0,
						get: function() {
							var t = a ? a.call(e) : n;
							return me.target && (i.depend(), c && (c.dep.depend(), Array.isArray(t) && $e(t))), t
						},
						set: function(t) {
							var f = a ? a.call(e) : n;
							t === f || t !== t && f !== f || a && !s || (s ? s.call(e, t) : n = t, c = !r && Me(t), i.notify())
						}
					})
				}
			}

			function Pe(e, t, n) {
				if (Array.isArray(e) && d(t)) return e.length = Math.max(e.length, t), e.splice(t, 1, n), n;
				if (t in e && !(t in Object.prototype)) return e[t] = n, n;
				var f = e.__ob__;
				return e._isVue || f && f.vmCount ? n : f ? (Ne(f.value, t, n), f.dep.notify(), n) : (e[t] = n, n)
			}

			function Be(e, t) {
				if (Array.isArray(e) && d(t)) e.splice(t, 1);
				else {
					var n = e.__ob__;
					e._isVue || n && n.vmCount || _(e, t) && (delete e[t], n && n.dep.notify())
				}
			}

			function $e(e) {
				for (var t = void 0, n = 0, f = e.length; n < f; n++) t = e[n], t && t.__ob__ && t.__ob__.dep.depend(), Array.isArray(t) && $e(t)
			}
			je.prototype.walk = function(e) {
				for (var t = Object.keys(e), n = 0; n < t.length; n++) Ne(e, t[n])
			}, je.prototype.observeArray = function(e) {
				for (var t = 0, n = e.length; t < n; t++) Me(e[t])
			};
			var ze = H.optionMergeStrategies;

			function Re(e, t) {
				if (!t) return e;
				for (var n, f, r, i = de ? Reflect.ownKeys(t) : Object.keys(t), o = 0; o < i.length; o++) n = i[o], "__ob__" !== n && (f = e[n], r = t[n], _(e, n) ? f !== r && l(f) && l(r) && Re(f, r) : Pe(e, n, r));
				return e
			}

			function De(e, t, n) {
				return n ? function() {
					var f = "function" === typeof t ? t.call(n, n) : t,
						r = "function" === typeof e ? e.call(n, n) : e;
					return f ? Re(f, r) : r
				} : t ? e ? function() {
					return Re("function" === typeof t ? t.call(this, this) : t, "function" === typeof e ? e.call(this, this) : e)
				} : t : e
			}

			function Ve(e, t) {
				var n = t ? e ? e.concat(t) : Array.isArray(t) ? t : [t] : e;
				return n ? He(n) : n
			}

			function He(e) {
				for (var t = [], n = 0; n < e.length; n++) - 1 === t.indexOf(e[n]) && t.push(e[n]);
				return t
			}

			function Fe(e, t, n, f) {
				var r = Object.create(e || null);
				return t ? L(r, t) : r
			}
			ze.data = function(e, t, n) {
				return n ? De(e, t, n) : t && "function" !== typeof t ? e : De(e, t)
			}, V.forEach((function(e) {
				ze[e] = Ve
			})), D.forEach((function(e) {
				ze[e + "s"] = Fe
			})), ze.watch = function(e, t, n, f) {
				if (e === ie && (e = void 0), t === ie && (t = void 0), !t) return Object.create(e || null);
				if (!e) return t;
				var r = {};
				for (var i in L(r, e), t) {
					var o = r[i],
						a = t[i];
					o && !Array.isArray(o) && (o = [o]), r[i] = o ? o.concat(a) : Array.isArray(a) ? a : [a]
				}
				return r
			}, ze.props = ze.methods = ze.inject = ze.computed = function(e, t, n, f) {
				if (!e) return t;
				var r = Object.create(null);
				return L(r, e), t && L(r, t), r
			}, ze.provide = De;
			var Ue = function(e, t) {
				return void 0 === t ? e : t
			};

			function qe(e, t) {
				var n = e.props;
				if (n) {
					var f, r, i, o = {};
					if (Array.isArray(n)) {
						f = n.length;
						while (f--) r = n[f], "string" === typeof r && (i = k(r), o[i] = {
							type: null
						})
					} else if (l(n))
						for (var a in n) r = n[a], i = k(a), o[i] = l(r) ? r : {
							type: r
						};
					else 0;
					e.props = o
				}
			}

			function We(e, t) {
				var n = e.inject;
				if (n) {
					var f = e.inject = {};
					if (Array.isArray(n))
						for (var r = 0; r < n.length; r++) f[n[r]] = {
							from: n[r]
						};
					else if (l(n))
						for (var i in n) {
							var o = n[i];
							f[i] = l(o) ? L({
								from: i
							}, o) : {
								from: o
							}
						} else 0
				}
			}

			function Qe(e) {
				var t = e.directives;
				if (t)
					for (var n in t) {
						var f = t[n];
						"function" === typeof f && (t[n] = {
							bind: f,
							update: f
						})
					}
			}

			function Ge(e, t, n) {
				if ("function" === typeof t && (t = t.options), qe(t, n), We(t, n), Qe(t), !t._base && (t.extends && (e = Ge(e, t.extends, n)), t.mixins))
					for (var f = 0, r = t.mixins.length; f < r; f++) e = Ge(e, t.mixins[f], n);
				var i, o = {};
				for (i in e) a(i);
				for (i in t) _(e, i) || a(i);

				function a(f) {
					var r = ze[f] || Ue;
					o[f] = r(e[f], t[f], n, f)
				}
				return o
			}

			function Ze(e, t, n, f) {
				if ("string" === typeof n) {
					var r = e[t];
					if (_(r, n)) return r[n];
					var i = k(n);
					if (_(r, i)) return r[i];
					var o = C(i);
					if (_(r, o)) return r[o];
					var a = r[n] || r[i] || r[o];
					return a
				}
			}

			function Ye(e, t, n, f) {
				var r = t[e],
					i = !_(n, e),
					o = n[e],
					a = et(Boolean, r.type);
				if (a > -1)
					if (i && !_(r, "default")) o = !1;
					else if ("" === o || o === A(e)) {
					var s = et(String, r.type);
					(s < 0 || a < s) && (o = !0)
				}
				if (void 0 === o) {
					o = Je(f, r, e);
					var c = Ee;
					Te(!0), Me(o), Te(c)
				}
				return o
			}

			function Je(e, t, n) {
				if (_(t, "default")) {
					var f = t.default;
					return e && e.$options.propsData && void 0 === e.$options.propsData[n] && void 0 !== e._props[n] ? e._props[n] : "function" === typeof f && "Function" !== Xe(t.type) ? f.call(e) : f
				}
			}

			function Xe(e) {
				var t = e && e.toString().match(/^\s*function (\w+)/);
				return t ? t[1] : ""
			}

			function Ke(e, t) {
				return Xe(e) === Xe(t)
			}

			function et(e, t) {
				if (!Array.isArray(t)) return Ke(t, e) ? 0 : -1;
				for (var n = 0, f = t.length; n < f; n++)
					if (Ke(t[n], e)) return n;
				return -1
			}

			function tt(e, t, n) {
				ve();
				try {
					if (t) {
						var f = t;
						while (f = f.$parent) {
							var r = f.$options.errorCaptured;
							if (r)
								for (var i = 0; i < r.length; i++) try {
									var o = !1 === r[i].call(f, e, t, n);
									if (o) return
								} catch (Co) {
									ft(Co, f, "errorCaptured hook")
								}
						}
					}
					ft(e, t, n)
				} finally {
					be()
				}
			}

			function nt(e, t, n, f, r) {
				var i;
				try {
					i = n ? e.apply(t, n) : e.call(t), i && !i._isVue && p(i) && !i._handled && (i.catch((function(e) {
						return tt(e, f, r + " (Promise/async)")
					})), i._handled = !0)
				} catch (Co) {
					tt(Co, f, r)
				}
				return i
			}

			function ft(e, t, n) {
				if (H.errorHandler) try {
					return H.errorHandler.call(null, e, t, n)
				} catch (Co) {
					Co !== e && rt(Co, null, "config.errorHandler")
				}
				rt(e, t, n)
			}

			function rt(e, t, n) {
				if (!Y && !J || "undefined" === typeof console) throw e;
				console.error(e)
			}
			var it, ot = !1,
				at = [],
				st = !1;

			function ct() {
				st = !1;
				var e = at.slice(0);
				at.length = 0;
				for (var t = 0; t < e.length; t++) e[t]()
			}
			if ("undefined" !== typeof Promise && le(Promise)) {
				var lt = Promise.resolve();
				it = function() {
					lt.then(ct), fe && setTimeout(M)
				}, ot = !0
			} else if (ee || "undefined" === typeof MutationObserver || !le(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) it = "undefined" !== typeof setImmediate && le(setImmediate) ? function() {
				setImmediate(ct)
			} : function() {
				setTimeout(ct, 0)
			};
			else {
				var ut = 1,
					dt = new MutationObserver(ct),
					pt = document.createTextNode(String(ut));
				dt.observe(pt, {
					characterData: !0
				}), it = function() {
					ut = (ut + 1) % 2, pt.data = String(ut)
				}, ot = !0
			}

			function ht(e, t) {
				var n;
				if (at.push((function() {
						if (e) try {
							e.call(t)
						} catch (Co) {
							tt(Co, t, "nextTick")
						} else n && n(t)
					})), st || (st = !0, it()), !e && "undefined" !== typeof Promise) return new Promise((function(e) {
					n = e
				}))
			}
			var mt = new ue;

			function gt(e) {
				vt(e, mt), mt.clear()
			}

			function vt(e, t) {
				var n, f, r = Array.isArray(e);
				if (!(!r && !s(e) || Object.isFrozen(e) || e instanceof ye)) {
					if (e.__ob__) {
						var i = e.__ob__.dep.id;
						if (t.has(i)) return;
						t.add(i)
					}
					if (r) {
						n = e.length;
						while (n--) vt(e[n], t)
					} else {
						f = Object.keys(e), n = f.length;
						while (n--) vt(e[f[n]], t)
					}
				}
			}
			var bt = w((function(e) {
				var t = "&" === e.charAt(0);
				e = t ? e.slice(1) : e;
				var n = "~" === e.charAt(0);
				e = n ? e.slice(1) : e;
				var f = "!" === e.charAt(0);
				return e = f ? e.slice(1) : e, {
					name: e,
					once: n,
					capture: f,
					passive: t
				}
			}));

			function yt(e, t) {
				function n() {
					var e = arguments,
						f = n.fns;
					if (!Array.isArray(f)) return nt(f, null, arguments, t, "v-on handler");
					for (var r = f.slice(), i = 0; i < r.length; i++) nt(r[i], null, e, t, "v-on handler")
				}
				return n.fns = e, n
			}

			function _t(e, t, n, r, o, a) {
				var s, c, l, u;
				for (s in e) c = e[s], l = t[s], u = bt(s), f(c) || (f(l) ? (f(c.fns) && (c = e[s] = yt(c, a)), i(u.once) && (c = e[s] = o(u.name, c, u.capture)), n(u.name, c, u.capture, u.passive, u.params)) : c !== l && (l.fns = c, e[s] = l));
				for (s in t) f(e[s]) && (u = bt(s), r(u.name, t[s], u.capture))
			}

			function wt(e, t, n) {
				var o;
				e instanceof ye && (e = e.data.hook || (e.data.hook = {}));
				var a = e[t];

				function s() {
					n.apply(this, arguments), b(o.fns, s)
				}
				f(a) ? o = yt([s]) : r(a.fns) && i(a.merged) ? (o = a, o.fns.push(s)) : o = yt([a, s]), o.merged = !0, e[t] = o
			}

			function xt(e, t, n) {
				var i = t.options.props;
				if (!f(i)) {
					var o = {},
						a = e.attrs,
						s = e.props;
					if (r(a) || r(s))
						for (var c in i) {
							var l = A(c);
							kt(o, s, c, l, !0) || kt(o, a, c, l, !1)
						}
					return o
				}
			}

			function kt(e, t, n, f, i) {
				if (r(t)) {
					if (_(t, n)) return e[n] = t[n], i || delete t[n], !0;
					if (_(t, f)) return e[n] = t[f], i || delete t[f], !0
				}
				return !1
			}

			function Ct(e) {
				for (var t = 0; t < e.length; t++)
					if (Array.isArray(e[t])) return Array.prototype.concat.apply([], e);
				return e
			}

			function St(e) {
				return a(e) ? [xe(e)] : Array.isArray(e) ? Ot(e) : void 0
			}

			function At(e) {
				return r(e) && r(e.text) && o(e.isComment)
			}

			function Ot(e, t) {
				var n, o, s, c, l = [];
				for (n = 0; n < e.length; n++) o = e[n], f(o) || "boolean" === typeof o || (s = l.length - 1, c = l[s], Array.isArray(o) ? o.length > 0 && (o = Ot(o, (t || "") + "_" + n), At(o[0]) && At(c) && (l[s] = xe(c.text + o[0].text), o.shift()), l.push.apply(l, o)) : a(o) ? At(c) ? l[s] = xe(c.text + o) : "" !== o && l.push(xe(o)) : At(o) && At(c) ? l[s] = xe(c.text + o.text) : (i(e._isVList) && r(o.tag) && f(o.key) && r(t) && (o.key = "__vlist" + t + "_" + n + "__"), l.push(o)));
				return l
			}

			function Et(e) {
				var t = e.$options.provide;
				t && (e._provided = "function" === typeof t ? t.call(e) : t)
			}

			function Tt(e) {
				var t = jt(e.$options.inject, e);
				t && (Te(!1), Object.keys(t).forEach((function(n) {
					Ne(e, n, t[n])
				})), Te(!0))
			}

			function jt(e, t) {
				if (e) {
					for (var n = Object.create(null), f = de ? Reflect.ownKeys(e) : Object.keys(e), r = 0; r < f.length; r++) {
						var i = f[r];
						if ("__ob__" !== i) {
							var o = e[i].from,
								a = t;
							while (a) {
								if (a._provided && _(a._provided, o)) {
									n[i] = a._provided[o];
									break
								}
								a = a.$parent
							}
							if (!a)
								if ("default" in e[i]) {
									var s = e[i].default;
									n[i] = "function" === typeof s ? s.call(t) : s
								} else 0
						}
					}
					return n
				}
			}

			function Lt(e, t) {
				if (!e || !e.length) return {};
				for (var n = {}, f = 0, r = e.length; f < r; f++) {
					var i = e[f],
						o = i.data;
					if (o && o.attrs && o.attrs.slot && delete o.attrs.slot, i.context !== t && i.fnContext !== t || !o || null == o.slot)(n.default || (n.default = [])).push(i);
					else {
						var a = o.slot,
							s = n[a] || (n[a] = []);
						"template" === i.tag ? s.push.apply(s, i.children || []) : s.push(i)
					}
				}
				for (var c in n) n[c].every(It) && delete n[c];
				return n
			}

			function It(e) {
				return e.isComment && !e.asyncFactory || " " === e.text
			}

			function Mt(e, t, f) {
				var r, i = Object.keys(t).length > 0,
					o = e ? !!e.$stable : !i,
					a = e && e.$key;
				if (e) {
					if (e._normalized) return e._normalized;
					if (o && f && f !== n && a === f.$key && !i && !f.$hasNormal) return f;
					for (var s in r = {}, e) e[s] && "$" !== s[0] && (r[s] = Nt(t, s, e[s]))
				} else r = {};
				for (var c in t) c in r || (r[c] = Pt(t, c));
				return e && Object.isExtensible(e) && (e._normalized = r), q(r, "$stable", o), q(r, "$key", a), q(r, "$hasNormal", i), r
			}

			function Nt(e, t, n) {
				var f = function() {
					var e = arguments.length ? n.apply(null, arguments) : n({});
					return e = e && "object" === typeof e && !Array.isArray(e) ? [e] : St(e), e && (0 === e.length || 1 === e.length && e[0].isComment) ? void 0 : e
				};
				return n.proxy && Object.defineProperty(e, t, {
					get: f,
					enumerable: !0,
					configurable: !0
				}), f
			}

			function Pt(e, t) {
				return function() {
					return e[t]
				}
			}

			function Bt(e, t) {
				var n, f, i, o, a;
				if (Array.isArray(e) || "string" === typeof e)
					for (n = new Array(e.length), f = 0, i = e.length; f < i; f++) n[f] = t(e[f], f);
				else if ("number" === typeof e)
					for (n = new Array(e), f = 0; f < e; f++) n[f] = t(f + 1, f);
				else if (s(e))
					if (de && e[Symbol.iterator]) {
						n = [];
						var c = e[Symbol.iterator](),
							l = c.next();
						while (!l.done) n.push(t(l.value, n.length)), l = c.next()
					} else
						for (o = Object.keys(e), n = new Array(o.length), f = 0, i = o.length; f < i; f++) a = o[f], n[f] = t(e[a], a, f);
				return r(n) || (n = []), n._isVList = !0, n
			}

			function $t(e, t, n, f) {
				var r, i = this.$scopedSlots[e];
				i ? (n = n || {}, f && (n = L(L({}, f), n)), r = i(n) || t) : r = this.$slots[e] || t;
				var o = n && n.slot;
				return o ? this.$createElement("template", {
					slot: o
				}, r) : r
			}

			function zt(e) {
				return Ze(this.$options, "filters", e, !0) || P
			}

			function Rt(e, t) {
				return Array.isArray(e) ? -1 === e.indexOf(t) : e !== t
			}

			function Dt(e, t, n, f, r) {
				var i = H.keyCodes[t] || n;
				return r && f && !H.keyCodes[t] ? Rt(r, f) : i ? Rt(i, e) : f ? A(f) !== t : void 0
			}

			function Vt(e, t, n, f, r) {
				if (n)
					if (s(n)) {
						var i;
						Array.isArray(n) && (n = I(n));
						var o = function(o) {
							if ("class" === o || "style" === o || v(o)) i = e;
							else {
								var a = e.attrs && e.attrs.type;
								i = f || H.mustUseProp(t, a, o) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {})
							}
							var s = k(o),
								c = A(o);
							if (!(s in i) && !(c in i) && (i[o] = n[o], r)) {
								var l = e.on || (e.on = {});
								l["update:" + o] = function(e) {
									n[o] = e
								}
							}
						};
						for (var a in n) o(a)
					} else;
				return e
			}

			function Ht(e, t) {
				var n = this._staticTrees || (this._staticTrees = []),
					f = n[e];
				return f && !t || (f = n[e] = this.$options.staticRenderFns[e].call(this._renderProxy, null, this), Ut(f, "__static__" + e, !1)), f
			}

			function Ft(e, t, n) {
				return Ut(e, "__once__" + t + (n ? "_" + n : ""), !0), e
			}

			function Ut(e, t, n) {
				if (Array.isArray(e))
					for (var f = 0; f < e.length; f++) e[f] && "string" !== typeof e[f] && qt(e[f], t + "_" + f, n);
				else qt(e, t, n)
			}

			function qt(e, t, n) {
				e.isStatic = !0, e.key = t, e.isOnce = n
			}

			function Wt(e, t) {
				if (t)
					if (l(t)) {
						var n = e.on = e.on ? L({}, e.on) : {};
						for (var f in t) {
							var r = n[f],
								i = t[f];
							n[f] = r ? [].concat(r, i) : i
						}
					} else;
				return e
			}

			function Qt(e, t, n, f) {
				t = t || {
					$stable: !n
				};
				for (var r = 0; r < e.length; r++) {
					var i = e[r];
					Array.isArray(i) ? Qt(i, t, n) : i && (i.proxy && (i.fn.proxy = !0), t[i.key] = i.fn)
				}
				return f && (t.$key = f), t
			}

			function Gt(e, t) {
				for (var n = 0; n < t.length; n += 2) {
					var f = t[n];
					"string" === typeof f && f && (e[t[n]] = t[n + 1])
				}
				return e
			}

			function Zt(e, t) {
				return "string" === typeof e ? t + e : e
			}

			function Yt(e) {
				e._o = Ft, e._n = m, e._s = h, e._l = Bt, e._t = $t, e._q = B, e._i = $, e._m = Ht, e._f = zt, e._k = Dt, e._b = Vt, e._v = xe, e._e = we, e._u = Qt, e._g = Wt, e._d = Gt, e._p = Zt
			}

			function Jt(e, t, f, r, o) {
				var a, s = this,
					c = o.options;
				_(r, "_uid") ? (a = Object.create(r), a._original = r) : (a = r, r = r._original);
				var l = i(c._compiled),
					u = !l;
				this.data = e, this.props = t, this.children = f, this.parent = r, this.listeners = e.on || n, this.injections = jt(c.inject, r), this.slots = function() {
					return s.$slots || Mt(e.scopedSlots, s.$slots = Lt(f, r)), s.$slots
				}, Object.defineProperty(this, "scopedSlots", {
					enumerable: !0,
					get: function() {
						return Mt(e.scopedSlots, this.slots())
					}
				}), l && (this.$options = c, this.$slots = this.slots(), this.$scopedSlots = Mt(e.scopedSlots, this.$slots)), c._scopeId ? this._c = function(e, t, n, f) {
					var i = un(a, e, t, n, f, u);
					return i && !Array.isArray(i) && (i.fnScopeId = c._scopeId, i.fnContext = r), i
				} : this._c = function(e, t, n, f) {
					return un(a, e, t, n, f, u)
				}
			}

			function Xt(e, t, f, i, o) {
				var a = e.options,
					s = {},
					c = a.props;
				if (r(c))
					for (var l in c) s[l] = Ye(l, c, t || n);
				else r(f.attrs) && en(s, f.attrs), r(f.props) && en(s, f.props);
				var u = new Jt(f, s, o, i, e),
					d = a.render.call(null, u._c, u);
				if (d instanceof ye) return Kt(d, f, u.parent, a, u);
				if (Array.isArray(d)) {
					for (var p = St(d) || [], h = new Array(p.length), m = 0; m < p.length; m++) h[m] = Kt(p[m], f, u.parent, a, u);
					return h
				}
			}

			function Kt(e, t, n, f, r) {
				var i = ke(e);
				return i.fnContext = n, i.fnOptions = f, t.slot && ((i.data || (i.data = {})).slot = t.slot), i
			}

			function en(e, t) {
				for (var n in t) e[k(n)] = t[n]
			}
			Yt(Jt.prototype);
			var tn = {
					init: function(e, t) {
						if (e.componentInstance && !e.componentInstance._isDestroyed && e.data.keepAlive) {
							var n = e;
							tn.prepatch(n, n)
						} else {
							var f = e.componentInstance = rn(e, jn);
							f.$mount(t ? e.elm : void 0, t)
						}
					},
					prepatch: function(e, t) {
						var n = t.componentOptions,
							f = t.componentInstance = e.componentInstance;
						Pn(f, n.propsData, n.listeners, t, n.children)
					},
					insert: function(e) {
						var t = e.context,
							n = e.componentInstance;
						n._isMounted || (n._isMounted = !0, Rn(n, "mounted")), e.data.keepAlive && (t._isMounted ? Xn(n) : $n(n, !0))
					},
					destroy: function(e) {
						var t = e.componentInstance;
						t._isDestroyed || (e.data.keepAlive ? zn(t, !0) : t.$destroy())
					}
				},
				nn = Object.keys(tn);

			function fn(e, t, n, o, a) {
				if (!f(e)) {
					var c = n.$options._base;
					if (s(e) && (e = c.extend(e)), "function" === typeof e) {
						var l;
						if (f(e.cid) && (l = e, e = wn(l, c), void 0 === e)) return _n(l, t, n, o, a);
						t = t || {}, xf(e), r(t.model) && sn(e.options, t);
						var u = xt(t, e, a);
						if (i(e.options.functional)) return Xt(e, u, t, n, o);
						var d = t.on;
						if (t.on = t.nativeOn, i(e.options.abstract)) {
							var p = t.slot;
							t = {}, p && (t.slot = p)
						}
						on(t);
						var h = e.options.name || a,
							m = new ye("vue-component-" + e.cid + (h ? "-" + h : ""), t, void 0, void 0, void 0, n, {
								Ctor: e,
								propsData: u,
								listeners: d,
								tag: a,
								children: o
							}, l);
						return m
					}
				}
			}

			function rn(e, t) {
				var n = {
						_isComponent: !0,
						_parentVnode: e,
						parent: t
					},
					f = e.data.inlineTemplate;
				return r(f) && (n.render = f.render, n.staticRenderFns = f.staticRenderFns), new e.componentOptions.Ctor(n)
			}

			function on(e) {
				for (var t = e.hook || (e.hook = {}), n = 0; n < nn.length; n++) {
					var f = nn[n],
						r = t[f],
						i = tn[f];
					r === i || r && r._merged || (t[f] = r ? an(i, r) : i)
				}
			}

			function an(e, t) {
				var n = function(n, f) {
					e(n, f), t(n, f)
				};
				return n._merged = !0, n
			}

			function sn(e, t) {
				var n = e.model && e.model.prop || "value",
					f = e.model && e.model.event || "input";
				(t.attrs || (t.attrs = {}))[n] = t.model.value;
				var i = t.on || (t.on = {}),
					o = i[f],
					a = t.model.callback;
				r(o) ? (Array.isArray(o) ? -1 === o.indexOf(a) : o !== a) && (i[f] = [a].concat(o)) : i[f] = a
			}
			var cn = 1,
				ln = 2;

			function un(e, t, n, f, r, o) {
				return (Array.isArray(n) || a(n)) && (r = f, f = n, n = void 0), i(o) && (r = ln), dn(e, t, n, f, r)
			}

			function dn(e, t, n, f, i) {
				if (r(n) && r(n.__ob__)) return we();
				if (r(n) && r(n.is) && (t = n.is), !t) return we();
				var o, a, s;
				(Array.isArray(f) && "function" === typeof f[0] && (n = n || {}, n.scopedSlots = {
					default: f[0]
				}, f.length = 0), i === ln ? f = St(f) : i === cn && (f = Ct(f)), "string" === typeof t) ? (a = e.$vnode && e.$vnode.ns || H.getTagNamespace(t), o = H.isReservedTag(t) ? new ye(H.parsePlatformTagName(t), n, f, void 0, void 0, e) : n && n.pre || !r(s = Ze(e.$options, "components", t)) ? new ye(t, n, f, void 0, void 0, e) : fn(s, n, e, f, t)) : o = fn(t, n, e, f);
				return Array.isArray(o) ? o : r(o) ? (r(a) && pn(o, a), r(n) && hn(n), o) : we()
			}

			function pn(e, t, n) {
				if (e.ns = t, "foreignObject" === e.tag && (t = void 0, n = !0), r(e.children))
					for (var o = 0, a = e.children.length; o < a; o++) {
						var s = e.children[o];
						r(s.tag) && (f(s.ns) || i(n) && "svg" !== s.tag) && pn(s, t, n)
					}
			}

			function hn(e) {
				s(e.style) && gt(e.style), s(e.class) && gt(e.class)
			}

			function mn(e) {
				e._vnode = null, e._staticTrees = null;
				var t = e.$options,
					f = e.$vnode = t._parentVnode,
					r = f && f.context;
				e.$slots = Lt(t._renderChildren, r), e.$scopedSlots = n, e._c = function(t, n, f, r) {
					return un(e, t, n, f, r, !1)
				}, e.$createElement = function(t, n, f, r) {
					return un(e, t, n, f, r, !0)
				};
				var i = f && f.data;
				Ne(e, "$attrs", i && i.attrs || n, null, !0), Ne(e, "$listeners", t._parentListeners || n, null, !0)
			}
			var gn, vn = null;

			function bn(e) {
				Yt(e.prototype), e.prototype.$nextTick = function(e) {
					return ht(e, this)
				}, e.prototype._render = function() {
					var e, t = this,
						n = t.$options,
						f = n.render,
						r = n._parentVnode;
					r && (t.$scopedSlots = Mt(r.data.scopedSlots, t.$slots, t.$scopedSlots)), t.$vnode = r;
					try {
						vn = t, e = f.call(t._renderProxy, t.$createElement)
					} catch (Co) {
						tt(Co, t, "render"), e = t._vnode
					} finally {
						vn = null
					}
					return Array.isArray(e) && 1 === e.length && (e = e[0]), e instanceof ye || (e = we()), e.parent = r, e
				}
			}

			function yn(e, t) {
				return (e.__esModule || de && "Module" === e[Symbol.toStringTag]) && (e = e.default), s(e) ? t.extend(e) : e
			}

			function _n(e, t, n, f, r) {
				var i = we();
				return i.asyncFactory = e, i.asyncMeta = {
					data: t,
					context: n,
					children: f,
					tag: r
				}, i
			}

			function wn(e, t) {
				if (i(e.error) && r(e.errorComp)) return e.errorComp;
				if (r(e.resolved)) return e.resolved;
				var n = vn;
				if (n && r(e.owners) && -1 === e.owners.indexOf(n) && e.owners.push(n), i(e.loading) && r(e.loadingComp)) return e.loadingComp;
				if (n && !r(e.owners)) {
					var o = e.owners = [n],
						a = !0,
						c = null,
						l = null;
					n.$on("hook:destroyed", (function() {
						return b(o, n)
					}));
					var u = function(e) {
							for (var t = 0, n = o.length; t < n; t++) o[t].$forceUpdate();
							e && (o.length = 0, null !== c && (clearTimeout(c), c = null), null !== l && (clearTimeout(l), l = null))
						},
						d = z((function(n) {
							e.resolved = yn(n, t), a ? o.length = 0 : u(!0)
						})),
						h = z((function(t) {
							r(e.errorComp) && (e.error = !0, u(!0))
						})),
						m = e(d, h);
					return s(m) && (p(m) ? f(e.resolved) && m.then(d, h) : p(m.component) && (m.component.then(d, h), r(m.error) && (e.errorComp = yn(m.error, t)), r(m.loading) && (e.loadingComp = yn(m.loading, t), 0 === m.delay ? e.loading = !0 : c = setTimeout((function() {
						c = null, f(e.resolved) && f(e.error) && (e.loading = !0, u(!1))
					}), m.delay || 200)), r(m.timeout) && (l = setTimeout((function() {
						l = null, f(e.resolved) && h(null)
					}), m.timeout)))), a = !1, e.loading ? e.loadingComp : e.resolved
				}
			}

			function xn(e) {
				return e.isComment && e.asyncFactory
			}

			function kn(e) {
				if (Array.isArray(e))
					for (var t = 0; t < e.length; t++) {
						var n = e[t];
						if (r(n) && (r(n.componentOptions) || xn(n))) return n
					}
			}

			function Cn(e) {
				e._events = Object.create(null), e._hasHookEvent = !1;
				var t = e.$options._parentListeners;
				t && En(e, t)
			}

			function Sn(e, t) {
				gn.$on(e, t)
			}

			function An(e, t) {
				gn.$off(e, t)
			}

			function On(e, t) {
				var n = gn;
				return function f() {
					var r = t.apply(null, arguments);
					null !== r && n.$off(e, f)
				}
			}

			function En(e, t, n) {
				gn = e, _t(t, n || {}, Sn, An, On, e), gn = void 0
			}

			function Tn(e) {
				var t = /^hook:/;
				e.prototype.$on = function(e, n) {
					var f = this;
					if (Array.isArray(e))
						for (var r = 0, i = e.length; r < i; r++) f.$on(e[r], n);
					else(f._events[e] || (f._events[e] = [])).push(n), t.test(e) && (f._hasHookEvent = !0);
					return f
				}, e.prototype.$once = function(e, t) {
					var n = this;

					function f() {
						n.$off(e, f), t.apply(n, arguments)
					}
					return f.fn = t, n.$on(e, f), n
				}, e.prototype.$off = function(e, t) {
					var n = this;
					if (!arguments.length) return n._events = Object.create(null), n;
					if (Array.isArray(e)) {
						for (var f = 0, r = e.length; f < r; f++) n.$off(e[f], t);
						return n
					}
					var i, o = n._events[e];
					if (!o) return n;
					if (!t) return n._events[e] = null, n;
					var a = o.length;
					while (a--)
						if (i = o[a], i === t || i.fn === t) {
							o.splice(a, 1);
							break
						} return n
				}, e.prototype.$emit = function(e) {
					var t = this,
						n = t._events[e];
					if (n) {
						n = n.length > 1 ? j(n) : n;
						for (var f = j(arguments, 1), r = 'event handler for "' + e + '"', i = 0, o = n.length; i < o; i++) nt(n[i], t, f, t, r)
					}
					return t
				}
			}
			var jn = null;

			function Ln(e) {
				var t = jn;
				return jn = e,
					function() {
						jn = t
					}
			}

			function In(e) {
				var t = e.$options,
					n = t.parent;
				if (n && !t.abstract) {
					while (n.$options.abstract && n.$parent) n = n.$parent;
					n.$children.push(e)
				}
				e.$parent = n, e.$root = n ? n.$root : e, e.$children = [], e.$refs = {}, e._watcher = null, e._inactive = null, e._directInactive = !1, e._isMounted = !1, e._isDestroyed = !1, e._isBeingDestroyed = !1
			}

			function Mn(e) {
				e.prototype._update = function(e, t) {
					var n = this,
						f = n.$el,
						r = n._vnode,
						i = Ln(n);
					n._vnode = e, n.$el = r ? n.__patch__(r, e) : n.__patch__(n.$el, e, t, !1), i(), f && (f.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el)
				}, e.prototype.$forceUpdate = function() {
					var e = this;
					e._watcher && e._watcher.update()
				}, e.prototype.$destroy = function() {
					var e = this;
					if (!e._isBeingDestroyed) {
						Rn(e, "beforeDestroy"), e._isBeingDestroyed = !0;
						var t = e.$parent;
						!t || t._isBeingDestroyed || e.$options.abstract || b(t.$children, e), e._watcher && e._watcher.teardown();
						var n = e._watchers.length;
						while (n--) e._watchers[n].teardown();
						e._data.__ob__ && e._data.__ob__.vmCount--, e._isDestroyed = !0, e.__patch__(e._vnode, null), Rn(e, "destroyed"), e.$off(), e.$el && (e.$el.__vue__ = null), e.$vnode && (e.$vnode.parent = null)
					}
				}
			}

			function Nn(e, t, n) {
				var f;
				return e.$el = t, e.$options.render || (e.$options.render = we), Rn(e, "beforeMount"), f = function() {
					e._update(e._render(), n)
				}, new nf(e, f, M, {
					before: function() {
						e._isMounted && !e._isDestroyed && Rn(e, "beforeUpdate")
					}
				}, !0), n = !1, null == e.$vnode && (e._isMounted = !0, Rn(e, "mounted")), e
			}

			function Pn(e, t, f, r, i) {
				var o = r.data.scopedSlots,
					a = e.$scopedSlots,
					s = !!(o && !o.$stable || a !== n && !a.$stable || o && e.$scopedSlots.$key !== o.$key),
					c = !!(i || e.$options._renderChildren || s);
				if (e.$options._parentVnode = r, e.$vnode = r, e._vnode && (e._vnode.parent = r), e.$options._renderChildren = i, e.$attrs = r.data.attrs || n, e.$listeners = f || n, t && e.$options.props) {
					Te(!1);
					for (var l = e._props, u = e.$options._propKeys || [], d = 0; d < u.length; d++) {
						var p = u[d],
							h = e.$options.props;
						l[p] = Ye(p, h, t, e)
					}
					Te(!0), e.$options.propsData = t
				}
				f = f || n;
				var m = e.$options._parentListeners;
				e.$options._parentListeners = f, En(e, f, m), c && (e.$slots = Lt(i, r.context), e.$forceUpdate())
			}

			function Bn(e) {
				while (e && (e = e.$parent))
					if (e._inactive) return !0;
				return !1
			}

			function $n(e, t) {
				if (t) {
					if (e._directInactive = !1, Bn(e)) return
				} else if (e._directInactive) return;
				if (e._inactive || null === e._inactive) {
					e._inactive = !1;
					for (var n = 0; n < e.$children.length; n++) $n(e.$children[n]);
					Rn(e, "activated")
				}
			}

			function zn(e, t) {
				if ((!t || (e._directInactive = !0, !Bn(e))) && !e._inactive) {
					e._inactive = !0;
					for (var n = 0; n < e.$children.length; n++) zn(e.$children[n]);
					Rn(e, "deactivated")
				}
			}

			function Rn(e, t) {
				ve();
				var n = e.$options[t],
					f = t + " hook";
				if (n)
					for (var r = 0, i = n.length; r < i; r++) nt(n[r], e, null, e, f);
				e._hasHookEvent && e.$emit("hook:" + t), be()
			}
			var Dn = [],
				Vn = [],
				Hn = {},
				Fn = !1,
				Un = !1,
				qn = 0;

			function Wn() {
				qn = Dn.length = Vn.length = 0, Hn = {}, Fn = Un = !1
			}
			var Qn = 0,
				Gn = Date.now;
			if (Y && !ee) {
				var Zn = window.performance;
				Zn && "function" === typeof Zn.now && Gn() > document.createEvent("Event").timeStamp && (Gn = function() {
					return Zn.now()
				})
			}

			function Yn() {
				var e, t;
				for (Qn = Gn(), Un = !0, Dn.sort((function(e, t) {
						return e.id - t.id
					})), qn = 0; qn < Dn.length; qn++) e = Dn[qn], e.before && e.before(), t = e.id, Hn[t] = null, e.run();
				var n = Vn.slice(),
					f = Dn.slice();
				Wn(), Kn(n), Jn(f), ce && H.devtools && ce.emit("flush")
			}

			function Jn(e) {
				var t = e.length;
				while (t--) {
					var n = e[t],
						f = n.vm;
					f._watcher === n && f._isMounted && !f._isDestroyed && Rn(f, "updated")
				}
			}

			function Xn(e) {
				e._inactive = !1, Vn.push(e)
			}

			function Kn(e) {
				for (var t = 0; t < e.length; t++) e[t]._inactive = !0, $n(e[t], !0)
			}

			function ef(e) {
				var t = e.id;
				if (null == Hn[t]) {
					if (Hn[t] = !0, Un) {
						var n = Dn.length - 1;
						while (n > qn && Dn[n].id > e.id) n--;
						Dn.splice(n + 1, 0, e)
					} else Dn.push(e);
					Fn || (Fn = !0, ht(Yn))
				}
			}
			var tf = 0,
				nf = function(e, t, n, f, r) {
					this.vm = e, r && (e._watcher = this), e._watchers.push(this), f ? (this.deep = !!f.deep, this.user = !!f.user, this.lazy = !!f.lazy, this.sync = !!f.sync, this.before = f.before) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++tf, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new ue, this.newDepIds = new ue, this.expression = "", "function" === typeof t ? this.getter = t : (this.getter = Q(t), this.getter || (this.getter = M)), this.value = this.lazy ? void 0 : this.get()
				};
			nf.prototype.get = function() {
				var e;
				ve(this);
				var t = this.vm;
				try {
					e = this.getter.call(t, t)
				} catch (Co) {
					if (!this.user) throw Co;
					tt(Co, t, 'getter for watcher "' + this.expression + '"')
				} finally {
					this.deep && gt(e), be(), this.cleanupDeps()
				}
				return e
			}, nf.prototype.addDep = function(e) {
				var t = e.id;
				this.newDepIds.has(t) || (this.newDepIds.add(t), this.newDeps.push(e), this.depIds.has(t) || e.addSub(this))
			}, nf.prototype.cleanupDeps = function() {
				var e = this.deps.length;
				while (e--) {
					var t = this.deps[e];
					this.newDepIds.has(t.id) || t.removeSub(this)
				}
				var n = this.depIds;
				this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0
			}, nf.prototype.update = function() {
				this.lazy ? this.dirty = !0 : this.sync ? this.run() : ef(this)
			}, nf.prototype.run = function() {
				if (this.active) {
					var e = this.get();
					if (e !== this.value || s(e) || this.deep) {
						var t = this.value;
						if (this.value = e, this.user) try {
							this.cb.call(this.vm, e, t)
						} catch (Co) {
							tt(Co, this.vm, 'callback for watcher "' + this.expression + '"')
						} else this.cb.call(this.vm, e, t)
					}
				}
			}, nf.prototype.evaluate = function() {
				this.value = this.get(), this.dirty = !1
			}, nf.prototype.depend = function() {
				var e = this.deps.length;
				while (e--) this.deps[e].depend()
			}, nf.prototype.teardown = function() {
				if (this.active) {
					this.vm._isBeingDestroyed || b(this.vm._watchers, this);
					var e = this.deps.length;
					while (e--) this.deps[e].removeSub(this);
					this.active = !1
				}
			};
			var ff = {
				enumerable: !0,
				configurable: !0,
				get: M,
				set: M
			};

			function rf(e, t, n) {
				ff.get = function() {
					return this[t][n]
				}, ff.set = function(e) {
					this[t][n] = e
				}, Object.defineProperty(e, n, ff)
			}

			function of(e) {
				e._watchers = [];
				var t = e.$options;
				t.props && af(e, t.props), t.methods && mf(e, t.methods), t.data ? sf(e) : Me(e._data = {}, !0), t.computed && uf(e, t.computed), t.watch && t.watch !== ie && gf(e, t.watch)
			}

			function af(e, t) {
				var n = e.$options.propsData || {},
					f = e._props = {},
					r = e.$options._propKeys = [],
					i = !e.$parent;
				i || Te(!1);
				var o = function(i) {
					r.push(i);
					var o = Ye(i, t, n, e);
					Ne(f, i, o), i in e || rf(e, "_props", i)
				};
				for (var a in t) o(a);
				Te(!0)
			}

			function sf(e) {
				var t = e.$options.data;
				t = e._data = "function" === typeof t ? cf(t, e) : t || {}, l(t) || (t = {});
				var n = Object.keys(t),
					f = e.$options.props,
					r = (e.$options.methods, n.length);
				while (r--) {
					var i = n[r];
					0, f && _(f, i) || U(i) || rf(e, "_data", i)
				}
				Me(t, !0)
			}

			function cf(e, t) {
				ve();
				try {
					return e.call(t, t)
				} catch (Co) {
					return tt(Co, t, "data()"), {}
				} finally {
					be()
				}
			}
			var lf = {
				lazy: !0
			};

			function uf(e, t) {
				var n = e._computedWatchers = Object.create(null),
					f = se();
				for (var r in t) {
					var i = t[r],
						o = "function" === typeof i ? i : i.get;
					0, f || (n[r] = new nf(e, o || M, M, lf)), r in e || df(e, r, i)
				}
			}

			function df(e, t, n) {
				var f = !se();
				"function" === typeof n ? (ff.get = f ? pf(t) : hf(n), ff.set = M) : (ff.get = n.get ? f && !1 !== n.cache ? pf(t) : hf(n.get) : M, ff.set = n.set || M), Object.defineProperty(e, t, ff)
			}

			function pf(e) {
				return function() {
					var t = this._computedWatchers && this._computedWatchers[e];
					if (t) return t.dirty && t.evaluate(), me.target && t.depend(), t.value
				}
			}

			function hf(e) {
				return function() {
					return e.call(this, this)
				}
			}

			function mf(e, t) {
				e.$options.props;
				for (var n in t) e[n] = "function" !== typeof t[n] ? M : T(t[n], e)
			}

			function gf(e, t) {
				for (var n in t) {
					var f = t[n];
					if (Array.isArray(f))
						for (var r = 0; r < f.length; r++) vf(e, n, f[r]);
					else vf(e, n, f)
				}
			}

			function vf(e, t, n, f) {
				return l(n) && (f = n, n = n.handler), "string" === typeof n && (n = e[n]), e.$watch(t, n, f)
			}

			function bf(e) {
				var t = {
						get: function() {
							return this._data
						}
					},
					n = {
						get: function() {
							return this._props
						}
					};
				Object.defineProperty(e.prototype, "$data", t), Object.defineProperty(e.prototype, "$props", n), e.prototype.$set = Pe, e.prototype.$delete = Be, e.prototype.$watch = function(e, t, n) {
					var f = this;
					if (l(t)) return vf(f, e, t, n);
					n = n || {}, n.user = !0;
					var r = new nf(f, e, t, n);
					if (n.immediate) try {
						t.call(f, r.value)
					} catch (i) {
						tt(i, f, 'callback for immediate watcher "' + r.expression + '"')
					}
					return function() {
						r.teardown()
					}
				}
			}
			var yf = 0;

			function _f(e) {
				e.prototype._init = function(e) {
					var t = this;
					t._uid = yf++, t._isVue = !0, e && e._isComponent ? wf(t, e) : t.$options = Ge(xf(t.constructor), e || {}, t), t._renderProxy = t, t._self = t, In(t), Cn(t), mn(t), Rn(t, "beforeCreate"), Tt(t), of(t), Et(t), Rn(t, "created"), t.$options.el && t.$mount(t.$options.el)
				}
			}

			function wf(e, t) {
				var n = e.$options = Object.create(e.constructor.options),
					f = t._parentVnode;
				n.parent = t.parent, n._parentVnode = f;
				var r = f.componentOptions;
				n.propsData = r.propsData, n._parentListeners = r.listeners, n._renderChildren = r.children, n._componentTag = r.tag, t.render && (n.render = t.render, n.staticRenderFns = t.staticRenderFns)
			}

			function xf(e) {
				var t = e.options;
				if (e.super) {
					var n = xf(e.super),
						f = e.superOptions;
					if (n !== f) {
						e.superOptions = n;
						var r = kf(e);
						r && L(e.extendOptions, r), t = e.options = Ge(n, e.extendOptions), t.name && (t.components[t.name] = e)
					}
				}
				return t
			}

			function kf(e) {
				var t, n = e.options,
					f = e.sealedOptions;
				for (var r in n) n[r] !== f[r] && (t || (t = {}), t[r] = n[r]);
				return t
			}

			function Cf(e) {
				this._init(e)
			}

			function Sf(e) {
				e.use = function(e) {
					var t = this._installedPlugins || (this._installedPlugins = []);
					if (t.indexOf(e) > -1) return this;
					var n = j(arguments, 1);
					return n.unshift(this), "function" === typeof e.install ? e.install.apply(e, n) : "function" === typeof e && e.apply(null, n), t.push(e), this
				}
			}

			function Af(e) {
				e.mixin = function(e) {
					return this.options = Ge(this.options, e), this
				}
			}

			function Of(e) {
				e.cid = 0;
				var t = 1;
				e.extend = function(e) {
					e = e || {};
					var n = this,
						f = n.cid,
						r = e._Ctor || (e._Ctor = {});
					if (r[f]) return r[f];
					var i = e.name || n.options.name;
					var o = function(e) {
						this._init(e)
					};
					return o.prototype = Object.create(n.prototype), o.prototype.constructor = o, o.cid = t++, o.options = Ge(n.options, e), o["super"] = n, o.options.props && Ef(o), o.options.computed && Tf(o), o.extend = n.extend, o.mixin = n.mixin, o.use = n.use, D.forEach((function(e) {
						o[e] = n[e]
					})), i && (o.options.components[i] = o), o.superOptions = n.options, o.extendOptions = e, o.sealedOptions = L({}, o.options), r[f] = o, o
				}
			}

			function Ef(e) {
				var t = e.options.props;
				for (var n in t) rf(e.prototype, "_props", n)
			}

			function Tf(e) {
				var t = e.options.computed;
				for (var n in t) df(e.prototype, n, t[n])
			}

			function jf(e) {
				D.forEach((function(t) {
					e[t] = function(e, n) {
						return n ? ("component" === t && l(n) && (n.name = n.name || e, n = this.options._base.extend(n)), "directive" === t && "function" === typeof n && (n = {
							bind: n,
							update: n
						}), this.options[t + "s"][e] = n, n) : this.options[t + "s"][e]
					}
				}))
			}

			function Lf(e) {
				return e && (e.Ctor.options.name || e.tag)
			}

			function If(e, t) {
				return Array.isArray(e) ? e.indexOf(t) > -1 : "string" === typeof e ? e.split(",").indexOf(t) > -1 : !!u(e) && e.test(t)
			}

			function Mf(e, t) {
				var n = e.cache,
					f = e.keys,
					r = e._vnode;
				for (var i in n) {
					var o = n[i];
					if (o) {
						var a = Lf(o.componentOptions);
						a && !t(a) && Nf(n, i, f, r)
					}
				}
			}

			function Nf(e, t, n, f) {
				var r = e[t];
				!r || f && r.tag === f.tag || r.componentInstance.$destroy(), e[t] = null, b(n, t)
			}
			_f(Cf), bf(Cf), Tn(Cf), Mn(Cf), bn(Cf);
			var Pf = [String, RegExp, Array],
				Bf = {
					name: "keep-alive",
					abstract: !0,
					props: {
						include: Pf,
						exclude: Pf,
						max: [String, Number]
					},
					created: function() {
						this.cache = Object.create(null), this.keys = []
					},
					destroyed: function() {
						for (var e in this.cache) Nf(this.cache, e, this.keys)
					},
					mounted: function() {
						var e = this;
						this.$watch("include", (function(t) {
							Mf(e, (function(e) {
								return If(t, e)
							}))
						})), this.$watch("exclude", (function(t) {
							Mf(e, (function(e) {
								return !If(t, e)
							}))
						}))
					},
					render: function() {
						var e = this.$slots.default,
							t = kn(e),
							n = t && t.componentOptions;
						if (n) {
							var f = Lf(n),
								r = this,
								i = r.include,
								o = r.exclude;
							if (i && (!f || !If(i, f)) || o && f && If(o, f)) return t;
							var a = this,
								s = a.cache,
								c = a.keys,
								l = null == t.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : t.key;
							s[l] ? (t.componentInstance = s[l].componentInstance, b(c, l), c.push(l)) : (s[l] = t, c.push(l), this.max && c.length > parseInt(this.max) && Nf(s, c[0], c, this._vnode)), t.data.keepAlive = !0
						}
						return t || e && e[0]
					}
				},
				$f = {
					KeepAlive: Bf
				};

			function zf(e) {
				var t = {
					get: function() {
						return H
					}
				};
				Object.defineProperty(e, "config", t), e.util = {
					warn: pe,
					extend: L,
					mergeOptions: Ge,
					defineReactive: Ne
				}, e.set = Pe, e.delete = Be, e.nextTick = ht, e.observable = function(e) {
					return Me(e), e
				}, e.options = Object.create(null), D.forEach((function(t) {
					e.options[t + "s"] = Object.create(null)
				})), e.options._base = e, L(e.options.components, $f), Sf(e), Af(e), Of(e), jf(e)
			}
			zf(Cf), Object.defineProperty(Cf.prototype, "$isServer", {
				get: se
			}), Object.defineProperty(Cf.prototype, "$ssrContext", {
				get: function() {
					return this.$vnode && this.$vnode.ssrContext
				}
			}), Object.defineProperty(Cf, "FunctionalRenderContext", {
				value: Jt
			}), Cf.version = "2.6.11";
			var Rf = g("style,class"),
				Df = g("input,textarea,option,select,progress"),
				Vf = function(e, t, n) {
					return "value" === n && Df(e) && "button" !== t || "selected" === n && "option" === e || "checked" === n && "input" === e || "muted" === n && "video" === e
				},
				Hf = g("contenteditable,draggable,spellcheck"),
				Ff = g("events,caret,typing,plaintext-only"),
				Uf = function(e, t) {
					return Zf(t) || "false" === t ? "false" : "contenteditable" === e && Ff(t) ? t : "true"
				},
				qf = g("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
				Wf = "http://www.w3.org/1999/xlink",
				Qf = function(e) {
					return ":" === e.charAt(5) && "xlink" === e.slice(0, 5)
				},
				Gf = function(e) {
					return Qf(e) ? e.slice(6, e.length) : ""
				},
				Zf = function(e) {
					return null == e || !1 === e
				};

			function Yf(e) {
				var t = e.data,
					n = e,
					f = e;
				while (r(f.componentInstance)) f = f.componentInstance._vnode, f && f.data && (t = Jf(f.data, t));
				while (r(n = n.parent)) n && n.data && (t = Jf(t, n.data));
				return Xf(t.staticClass, t.class)
			}

			function Jf(e, t) {
				return {
					staticClass: Kf(e.staticClass, t.staticClass),
					class: r(e.class) ? [e.class, t.class] : t.class
				}
			}

			function Xf(e, t) {
				return r(e) || r(t) ? Kf(e, er(t)) : ""
			}

			function Kf(e, t) {
				return e ? t ? e + " " + t : e : t || ""
			}

			function er(e) {
				return Array.isArray(e) ? tr(e) : s(e) ? nr(e) : "string" === typeof e ? e : ""
			}

			function tr(e) {
				for (var t, n = "", f = 0, i = e.length; f < i; f++) r(t = er(e[f])) && "" !== t && (n && (n += " "), n += t);
				return n
			}

			function nr(e) {
				var t = "";
				for (var n in e) e[n] && (t && (t += " "), t += n);
				return t
			}
			var fr = {
					svg: "http://www.w3.org/2000/svg",
					math: "http://www.w3.org/1998/Math/MathML"
				},
				rr = g("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),
				ir = g("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
				or = function(e) {
					return rr(e) || ir(e)
				};

			function ar(e) {
				return ir(e) ? "svg" : "math" === e ? "math" : void 0
			}
			var sr = Object.create(null);

			function cr(e) {
				if (!Y) return !0;
				if (or(e)) return !1;
				if (e = e.toLowerCase(), null != sr[e]) return sr[e];
				var t = document.createElement(e);
				return e.indexOf("-") > -1 ? sr[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement : sr[e] = /HTMLUnknownElement/.test(t.toString())
			}
			var lr = g("text,number,password,search,email,tel,url");

			function ur(e) {
				if ("string" === typeof e) {
					var t = document.querySelector(e);
					return t || document.createElement("div")
				}
				return e
			}

			function dr(e, t) {
				var n = document.createElement(e);
				return "select" !== e || t.data && t.data.attrs && void 0 !== t.data.attrs.multiple && n.setAttribute("multiple", "multiple"), n
			}

			function pr(e, t) {
				return document.createElementNS(fr[e], t)
			}

			function hr(e) {
				return document.createTextNode(e)
			}

			function mr(e) {
				return document.createComment(e)
			}

			function gr(e, t, n) {
				e.insertBefore(t, n)
			}

			function vr(e, t) {
				e.removeChild(t)
			}

			function br(e, t) {
				e.appendChild(t)
			}

			function yr(e) {
				return e.parentNode
			}

			function _r(e) {
				return e.nextSibling
			}

			function wr(e) {
				return e.tagName
			}

			function xr(e, t) {
				e.textContent = t
			}

			function kr(e, t) {
				e.setAttribute(t, "")
			}
			var Cr = Object.freeze({
					createElement: dr,
					createElementNS: pr,
					createTextNode: hr,
					createComment: mr,
					insertBefore: gr,
					removeChild: vr,
					appendChild: br,
					parentNode: yr,
					nextSibling: _r,
					tagName: wr,
					setTextContent: xr,
					setStyleScope: kr
				}),
				Sr = {
					create: function(e, t) {
						Ar(t)
					},
					update: function(e, t) {
						e.data.ref !== t.data.ref && (Ar(e, !0), Ar(t))
					},
					destroy: function(e) {
						Ar(e, !0)
					}
				};

			function Ar(e, t) {
				var n = e.data.ref;
				if (r(n)) {
					var f = e.context,
						i = e.componentInstance || e.elm,
						o = f.$refs;
					t ? Array.isArray(o[n]) ? b(o[n], i) : o[n] === i && (o[n] = void 0) : e.data.refInFor ? Array.isArray(o[n]) ? o[n].indexOf(i) < 0 && o[n].push(i) : o[n] = [i] : o[n] = i
				}
			}
			var Or = new ye("", {}, []),
				Er = ["create", "activate", "update", "remove", "destroy"];

			function Tr(e, t) {
				return e.key === t.key && (e.tag === t.tag && e.isComment === t.isComment && r(e.data) === r(t.data) && jr(e, t) || i(e.isAsyncPlaceholder) && e.asyncFactory === t.asyncFactory && f(t.asyncFactory.error))
			}

			function jr(e, t) {
				if ("input" !== e.tag) return !0;
				var n, f = r(n = e.data) && r(n = n.attrs) && n.type,
					i = r(n = t.data) && r(n = n.attrs) && n.type;
				return f === i || lr(f) && lr(i)
			}

			function Lr(e, t, n) {
				var f, i, o = {};
				for (f = t; f <= n; ++f) i = e[f].key, r(i) && (o[i] = f);
				return o
			}

			function Ir(e) {
				var t, n, o = {},
					s = e.modules,
					c = e.nodeOps;
				for (t = 0; t < Er.length; ++t)
					for (o[Er[t]] = [], n = 0; n < s.length; ++n) r(s[n][Er[t]]) && o[Er[t]].push(s[n][Er[t]]);

				function l(e) {
					return new ye(c.tagName(e).toLowerCase(), {}, [], void 0, e)
				}

				function u(e, t) {
					function n() {
						0 === --n.listeners && d(e)
					}
					return n.listeners = t, n
				}

				function d(e) {
					var t = c.parentNode(e);
					r(t) && c.removeChild(t, e)
				}

				function p(e, t, n, f, o, a, s) {
					if (r(e.elm) && r(a) && (e = a[s] = ke(e)), e.isRootInsert = !o, !h(e, t, n, f)) {
						var l = e.data,
							u = e.children,
							d = e.tag;
						r(d) ? (e.elm = e.ns ? c.createElementNS(e.ns, d) : c.createElement(d, e), x(e), y(e, u, t), r(l) && w(e, t), b(n, e.elm, f)) : i(e.isComment) ? (e.elm = c.createComment(e.text), b(n, e.elm, f)) : (e.elm = c.createTextNode(e.text), b(n, e.elm, f))
					}
				}

				function h(e, t, n, f) {
					var o = e.data;
					if (r(o)) {
						var a = r(e.componentInstance) && o.keepAlive;
						if (r(o = o.hook) && r(o = o.init) && o(e, !1), r(e.componentInstance)) return m(e, t), b(n, e.elm, f), i(a) && v(e, t, n, f), !0
					}
				}

				function m(e, t) {
					r(e.data.pendingInsert) && (t.push.apply(t, e.data.pendingInsert), e.data.pendingInsert = null), e.elm = e.componentInstance.$el, _(e) ? (w(e, t), x(e)) : (Ar(e), t.push(e))
				}

				function v(e, t, n, f) {
					var i, a = e;
					while (a.componentInstance)
						if (a = a.componentInstance._vnode, r(i = a.data) && r(i = i.transition)) {
							for (i = 0; i < o.activate.length; ++i) o.activate[i](Or, a);
							t.push(a);
							break
						} b(n, e.elm, f)
				}

				function b(e, t, n) {
					r(e) && (r(n) ? c.parentNode(n) === e && c.insertBefore(e, t, n) : c.appendChild(e, t))
				}

				function y(e, t, n) {
					if (Array.isArray(t)) {
						0;
						for (var f = 0; f < t.length; ++f) p(t[f], n, e.elm, null, !0, t, f)
					} else a(e.text) && c.appendChild(e.elm, c.createTextNode(String(e.text)))
				}

				function _(e) {
					while (e.componentInstance) e = e.componentInstance._vnode;
					return r(e.tag)
				}

				function w(e, n) {
					for (var f = 0; f < o.create.length; ++f) o.create[f](Or, e);
					t = e.data.hook, r(t) && (r(t.create) && t.create(Or, e), r(t.insert) && n.push(e))
				}

				function x(e) {
					var t;
					if (r(t = e.fnScopeId)) c.setStyleScope(e.elm, t);
					else {
						var n = e;
						while (n) r(t = n.context) && r(t = t.$options._scopeId) && c.setStyleScope(e.elm, t), n = n.parent
					}
					r(t = jn) && t !== e.context && t !== e.fnContext && r(t = t.$options._scopeId) && c.setStyleScope(e.elm, t)
				}

				function k(e, t, n, f, r, i) {
					for (; f <= r; ++f) p(n[f], i, e, t, !1, n, f)
				}

				function C(e) {
					var t, n, f = e.data;
					if (r(f))
						for (r(t = f.hook) && r(t = t.destroy) && t(e), t = 0; t < o.destroy.length; ++t) o.destroy[t](e);
					if (r(t = e.children))
						for (n = 0; n < e.children.length; ++n) C(e.children[n])
				}

				function S(e, t, n) {
					for (; t <= n; ++t) {
						var f = e[t];
						r(f) && (r(f.tag) ? (A(f), C(f)) : d(f.elm))
					}
				}

				function A(e, t) {
					if (r(t) || r(e.data)) {
						var n, f = o.remove.length + 1;
						for (r(t) ? t.listeners += f : t = u(e.elm, f), r(n = e.componentInstance) && r(n = n._vnode) && r(n.data) && A(n, t), n = 0; n < o.remove.length; ++n) o.remove[n](e, t);
						r(n = e.data.hook) && r(n = n.remove) ? n(e, t) : t()
					} else d(e.elm)
				}

				function O(e, t, n, i, o) {
					var a, s, l, u, d = 0,
						h = 0,
						m = t.length - 1,
						g = t[0],
						v = t[m],
						b = n.length - 1,
						y = n[0],
						_ = n[b],
						w = !o;
					while (d <= m && h <= b) f(g) ? g = t[++d] : f(v) ? v = t[--m] : Tr(g, y) ? (T(g, y, i, n, h), g = t[++d], y = n[++h]) : Tr(v, _) ? (T(v, _, i, n, b), v = t[--m], _ = n[--b]) : Tr(g, _) ? (T(g, _, i, n, b), w && c.insertBefore(e, g.elm, c.nextSibling(v.elm)), g = t[++d], _ = n[--b]) : Tr(v, y) ? (T(v, y, i, n, h), w && c.insertBefore(e, v.elm, g.elm), v = t[--m], y = n[++h]) : (f(a) && (a = Lr(t, d, m)), s = r(y.key) ? a[y.key] : E(y, t, d, m), f(s) ? p(y, i, e, g.elm, !1, n, h) : (l = t[s], Tr(l, y) ? (T(l, y, i, n, h), t[s] = void 0, w && c.insertBefore(e, l.elm, g.elm)) : p(y, i, e, g.elm, !1, n, h)), y = n[++h]);
					d > m ? (u = f(n[b + 1]) ? null : n[b + 1].elm, k(e, u, n, h, b, i)) : h > b && S(t, d, m)
				}

				function E(e, t, n, f) {
					for (var i = n; i < f; i++) {
						var o = t[i];
						if (r(o) && Tr(e, o)) return i
					}
				}

				function T(e, t, n, a, s, l) {
					if (e !== t) {
						r(t.elm) && r(a) && (t = a[s] = ke(t));
						var u = t.elm = e.elm;
						if (i(e.isAsyncPlaceholder)) r(t.asyncFactory.resolved) ? I(e.elm, t, n) : t.isAsyncPlaceholder = !0;
						else if (i(t.isStatic) && i(e.isStatic) && t.key === e.key && (i(t.isCloned) || i(t.isOnce))) t.componentInstance = e.componentInstance;
						else {
							var d, p = t.data;
							r(p) && r(d = p.hook) && r(d = d.prepatch) && d(e, t);
							var h = e.children,
								m = t.children;
							if (r(p) && _(t)) {
								for (d = 0; d < o.update.length; ++d) o.update[d](e, t);
								r(d = p.hook) && r(d = d.update) && d(e, t)
							}
							f(t.text) ? r(h) && r(m) ? h !== m && O(u, h, m, n, l) : r(m) ? (r(e.text) && c.setTextContent(u, ""), k(u, null, m, 0, m.length - 1, n)) : r(h) ? S(h, 0, h.length - 1) : r(e.text) && c.setTextContent(u, "") : e.text !== t.text && c.setTextContent(u, t.text), r(p) && r(d = p.hook) && r(d = d.postpatch) && d(e, t)
						}
					}
				}

				function j(e, t, n) {
					if (i(n) && r(e.parent)) e.parent.data.pendingInsert = t;
					else
						for (var f = 0; f < t.length; ++f) t[f].data.hook.insert(t[f])
				}
				var L = g("attrs,class,staticClass,staticStyle,key");

				function I(e, t, n, f) {
					var o, a = t.tag,
						s = t.data,
						c = t.children;
					if (f = f || s && s.pre, t.elm = e, i(t.isComment) && r(t.asyncFactory)) return t.isAsyncPlaceholder = !0, !0;
					if (r(s) && (r(o = s.hook) && r(o = o.init) && o(t, !0), r(o = t.componentInstance))) return m(t, n), !0;
					if (r(a)) {
						if (r(c))
							if (e.hasChildNodes())
								if (r(o = s) && r(o = o.domProps) && r(o = o.innerHTML)) {
									if (o !== e.innerHTML) return !1
								} else {
									for (var l = !0, u = e.firstChild, d = 0; d < c.length; d++) {
										if (!u || !I(u, c[d], n, f)) {
											l = !1;
											break
										}
										u = u.nextSibling
									}
									if (!l || u) return !1
								}
						else y(t, c, n);
						if (r(s)) {
							var p = !1;
							for (var h in s)
								if (!L(h)) {
									p = !0, w(t, n);
									break
								}! p && s["class"] && gt(s["class"])
						}
					} else e.data !== t.text && (e.data = t.text);
					return !0
				}
				return function(e, t, n, a) {
					if (!f(t)) {
						var s = !1,
							u = [];
						if (f(e)) s = !0, p(t, u);
						else {
							var d = r(e.nodeType);
							if (!d && Tr(e, t)) T(e, t, u, null, null, a);
							else {
								if (d) {
									if (1 === e.nodeType && e.hasAttribute(R) && (e.removeAttribute(R), n = !0), i(n) && I(e, t, u)) return j(t, u, !0), e;
									e = l(e)
								}
								var h = e.elm,
									m = c.parentNode(h);
								if (p(t, u, h._leaveCb ? null : m, c.nextSibling(h)), r(t.parent)) {
									var g = t.parent,
										v = _(t);
									while (g) {
										for (var b = 0; b < o.destroy.length; ++b) o.destroy[b](g);
										if (g.elm = t.elm, v) {
											for (var y = 0; y < o.create.length; ++y) o.create[y](Or, g);
											var w = g.data.hook.insert;
											if (w.merged)
												for (var x = 1; x < w.fns.length; x++) w.fns[x]()
										} else Ar(g);
										g = g.parent
									}
								}
								r(m) ? S([e], 0, 0) : r(e.tag) && C(e)
							}
						}
						return j(t, u, s), t.elm
					}
					r(e) && C(e)
				}
			}
			var Mr = {
				create: Nr,
				update: Nr,
				destroy: function(e) {
					Nr(e, Or)
				}
			};

			function Nr(e, t) {
				(e.data.directives || t.data.directives) && Pr(e, t)
			}

			function Pr(e, t) {
				var n, f, r, i = e === Or,
					o = t === Or,
					a = $r(e.data.directives, e.context),
					s = $r(t.data.directives, t.context),
					c = [],
					l = [];
				for (n in s) f = a[n], r = s[n], f ? (r.oldValue = f.value, r.oldArg = f.arg, Rr(r, "update", t, e), r.def && r.def.componentUpdated && l.push(r)) : (Rr(r, "bind", t, e), r.def && r.def.inserted && c.push(r));
				if (c.length) {
					var u = function() {
						for (var n = 0; n < c.length; n++) Rr(c[n], "inserted", t, e)
					};
					i ? wt(t, "insert", u) : u()
				}
				if (l.length && wt(t, "postpatch", (function() {
						for (var n = 0; n < l.length; n++) Rr(l[n], "componentUpdated", t, e)
					})), !i)
					for (n in a) s[n] || Rr(a[n], "unbind", e, e, o)
			}
			var Br = Object.create(null);

			function $r(e, t) {
				var n, f, r = Object.create(null);
				if (!e) return r;
				for (n = 0; n < e.length; n++) f = e[n], f.modifiers || (f.modifiers = Br), r[zr(f)] = f, f.def = Ze(t.$options, "directives", f.name, !0);
				return r
			}

			function zr(e) {
				return e.rawName || e.name + "." + Object.keys(e.modifiers || {}).join(".")
			}

			function Rr(e, t, n, f, r) {
				var i = e.def && e.def[t];
				if (i) try {
					i(n.elm, e, n, f, r)
				} catch (Co) {
					tt(Co, n.context, "directive " + e.name + " " + t + " hook")
				}
			}
			var Dr = [Sr, Mr];

			function Vr(e, t) {
				var n = t.componentOptions;
				if ((!r(n) || !1 !== n.Ctor.options.inheritAttrs) && (!f(e.data.attrs) || !f(t.data.attrs))) {
					var i, o, a, s = t.elm,
						c = e.data.attrs || {},
						l = t.data.attrs || {};
					for (i in r(l.__ob__) && (l = t.data.attrs = L({}, l)), l) o = l[i], a = c[i], a !== o && Hr(s, i, o);
					for (i in (ee || ne) && l.value !== c.value && Hr(s, "value", l.value), c) f(l[i]) && (Qf(i) ? s.removeAttributeNS(Wf, Gf(i)) : Hf(i) || s.removeAttribute(i))
				}
			}

			function Hr(e, t, n) {
				e.tagName.indexOf("-") > -1 ? Fr(e, t, n) : qf(t) ? Zf(n) ? e.removeAttribute(t) : (n = "allowfullscreen" === t && "EMBED" === e.tagName ? "true" : t, e.setAttribute(t, n)) : Hf(t) ? e.setAttribute(t, Uf(t, n)) : Qf(t) ? Zf(n) ? e.removeAttributeNS(Wf, Gf(t)) : e.setAttributeNS(Wf, t, n) : Fr(e, t, n)
			}

			function Fr(e, t, n) {
				if (Zf(n)) e.removeAttribute(t);
				else {
					if (ee && !te && "TEXTAREA" === e.tagName && "placeholder" === t && "" !== n && !e.__ieph) {
						var f = function(t) {
							t.stopImmediatePropagation(), e.removeEventListener("input", f)
						};
						e.addEventListener("input", f), e.__ieph = !0
					}
					e.setAttribute(t, n)
				}
			}
			var Ur = {
				create: Vr,
				update: Vr
			};

			function qr(e, t) {
				var n = t.elm,
					i = t.data,
					o = e.data;
				if (!(f(i.staticClass) && f(i.class) && (f(o) || f(o.staticClass) && f(o.class)))) {
					var a = Yf(t),
						s = n._transitionClasses;
					r(s) && (a = Kf(a, er(s))), a !== n._prevClass && (n.setAttribute("class", a), n._prevClass = a)
				}
			}
			var Wr, Qr = {
					create: qr,
					update: qr
				},
				Gr = "__r",
				Zr = "__c";

			function Yr(e) {
				if (r(e[Gr])) {
					var t = ee ? "change" : "input";
					e[t] = [].concat(e[Gr], e[t] || []), delete e[Gr]
				}
				r(e[Zr]) && (e.change = [].concat(e[Zr], e.change || []), delete e[Zr])
			}

			function Jr(e, t, n) {
				var f = Wr;
				return function r() {
					var i = t.apply(null, arguments);
					null !== i && ei(e, r, n, f)
				}
			}
			var Xr = ot && !(re && Number(re[1]) <= 53);

			function Kr(e, t, n, f) {
				if (Xr) {
					var r = Qn,
						i = t;
					t = i._wrapper = function(e) {
						if (e.target === e.currentTarget || e.timeStamp >= r || e.timeStamp <= 0 || e.target.ownerDocument !== document) return i.apply(this, arguments)
					}
				}
				Wr.addEventListener(e, t, oe ? {
					capture: n,
					passive: f
				} : n)
			}

			function ei(e, t, n, f) {
				(f || Wr).removeEventListener(e, t._wrapper || t, n)
			}

			function ti(e, t) {
				if (!f(e.data.on) || !f(t.data.on)) {
					var n = t.data.on || {},
						r = e.data.on || {};
					Wr = t.elm, Yr(n), _t(n, r, Kr, ei, Jr, t.context), Wr = void 0
				}
			}
			var ni, fi = {
				create: ti,
				update: ti
			};

			function ri(e, t) {
				if (!f(e.data.domProps) || !f(t.data.domProps)) {
					var n, i, o = t.elm,
						a = e.data.domProps || {},
						s = t.data.domProps || {};
					for (n in r(s.__ob__) && (s = t.data.domProps = L({}, s)), a) n in s || (o[n] = "");
					for (n in s) {
						if (i = s[n], "textContent" === n || "innerHTML" === n) {
							if (t.children && (t.children.length = 0), i === a[n]) continue;
							1 === o.childNodes.length && o.removeChild(o.childNodes[0])
						}
						if ("value" === n && "PROGRESS" !== o.tagName) {
							o._value = i;
							var c = f(i) ? "" : String(i);
							ii(o, c) && (o.value = c)
						} else if ("innerHTML" === n && ir(o.tagName) && f(o.innerHTML)) {
							ni = ni || document.createElement("div"), ni.innerHTML = "<svg>" + i + "</svg>";
							var l = ni.firstChild;
							while (o.firstChild) o.removeChild(o.firstChild);
							while (l.firstChild) o.appendChild(l.firstChild)
						} else if (i !== a[n]) try {
							o[n] = i
						} catch (Co) {}
					}
				}
			}

			function ii(e, t) {
				return !e.composing && ("OPTION" === e.tagName || oi(e, t) || ai(e, t))
			}

			function oi(e, t) {
				var n = !0;
				try {
					n = document.activeElement !== e
				} catch (Co) {}
				return n && e.value !== t
			}

			function ai(e, t) {
				var n = e.value,
					f = e._vModifiers;
				if (r(f)) {
					if (f.number) return m(n) !== m(t);
					if (f.trim) return n.trim() !== t.trim()
				}
				return n !== t
			}
			var si = {
					create: ri,
					update: ri
				},
				ci = w((function(e) {
					var t = {},
						n = /;(?![^(]*\))/g,
						f = /:(.+)/;
					return e.split(n).forEach((function(e) {
						if (e) {
							var n = e.split(f);
							n.length > 1 && (t[n[0].trim()] = n[1].trim())
						}
					})), t
				}));

			function li(e) {
				var t = ui(e.style);
				return e.staticStyle ? L(e.staticStyle, t) : t
			}

			function ui(e) {
				return Array.isArray(e) ? I(e) : "string" === typeof e ? ci(e) : e
			}

			function di(e, t) {
				var n, f = {};
				if (t) {
					var r = e;
					while (r.componentInstance) r = r.componentInstance._vnode, r && r.data && (n = li(r.data)) && L(f, n)
				}(n = li(e.data)) && L(f, n);
				var i = e;
				while (i = i.parent) i.data && (n = li(i.data)) && L(f, n);
				return f
			}
			var pi, hi = /^--/,
				mi = /\s*!important$/,
				gi = function(e, t, n) {
					if (hi.test(t)) e.style.setProperty(t, n);
					else if (mi.test(n)) e.style.setProperty(A(t), n.replace(mi, ""), "important");
					else {
						var f = bi(t);
						if (Array.isArray(n))
							for (var r = 0, i = n.length; r < i; r++) e.style[f] = n[r];
						else e.style[f] = n
					}
				},
				vi = ["Webkit", "Moz", "ms"],
				bi = w((function(e) {
					if (pi = pi || document.createElement("div").style, e = k(e), "filter" !== e && e in pi) return e;
					for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < vi.length; n++) {
						var f = vi[n] + t;
						if (f in pi) return f
					}
				}));

			function yi(e, t) {
				var n = t.data,
					i = e.data;
				if (!(f(n.staticStyle) && f(n.style) && f(i.staticStyle) && f(i.style))) {
					var o, a, s = t.elm,
						c = i.staticStyle,
						l = i.normalizedStyle || i.style || {},
						u = c || l,
						d = ui(t.data.style) || {};
					t.data.normalizedStyle = r(d.__ob__) ? L({}, d) : d;
					var p = di(t, !0);
					for (a in u) f(p[a]) && gi(s, a, "");
					for (a in p) o = p[a], o !== u[a] && gi(s, a, null == o ? "" : o)
				}
			}
			var _i = {
					create: yi,
					update: yi
				},
				wi = /\s+/;

			function xi(e, t) {
				if (t && (t = t.trim()))
					if (e.classList) t.indexOf(" ") > -1 ? t.split(wi).forEach((function(t) {
						return e.classList.add(t)
					})) : e.classList.add(t);
					else {
						var n = " " + (e.getAttribute("class") || "") + " ";
						n.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (n + t).trim())
					}
			}

			function ki(e, t) {
				if (t && (t = t.trim()))
					if (e.classList) t.indexOf(" ") > -1 ? t.split(wi).forEach((function(t) {
						return e.classList.remove(t)
					})) : e.classList.remove(t), e.classList.length || e.removeAttribute("class");
					else {
						var n = " " + (e.getAttribute("class") || "") + " ",
							f = " " + t + " ";
						while (n.indexOf(f) >= 0) n = n.replace(f, " ");
						n = n.trim(), n ? e.setAttribute("class", n) : e.removeAttribute("class")
					}
			}

			function Ci(e) {
				if (e) {
					if ("object" === typeof e) {
						var t = {};
						return !1 !== e.css && L(t, Si(e.name || "v")), L(t, e), t
					}
					return "string" === typeof e ? Si(e) : void 0
				}
			}
			var Si = w((function(e) {
					return {
						enterClass: e + "-enter",
						enterToClass: e + "-enter-to",
						enterActiveClass: e + "-enter-active",
						leaveClass: e + "-leave",
						leaveToClass: e + "-leave-to",
						leaveActiveClass: e + "-leave-active"
					}
				})),
				Ai = Y && !te,
				Oi = "transition",
				Ei = "animation",
				Ti = "transition",
				ji = "transitionend",
				Li = "animation",
				Ii = "animationend";
			Ai && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (Ti = "WebkitTransition", ji = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (Li = "WebkitAnimation", Ii = "webkitAnimationEnd"));
			var Mi = Y ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function(e) {
				return e()
			};

			function Ni(e) {
				Mi((function() {
					Mi(e)
				}))
			}

			function Pi(e, t) {
				var n = e._transitionClasses || (e._transitionClasses = []);
				n.indexOf(t) < 0 && (n.push(t), xi(e, t))
			}

			function Bi(e, t) {
				e._transitionClasses && b(e._transitionClasses, t), ki(e, t)
			}

			function $i(e, t, n) {
				var f = Ri(e, t),
					r = f.type,
					i = f.timeout,
					o = f.propCount;
				if (!r) return n();
				var a = r === Oi ? ji : Ii,
					s = 0,
					c = function() {
						e.removeEventListener(a, l), n()
					},
					l = function(t) {
						t.target === e && ++s >= o && c()
					};
				setTimeout((function() {
					s < o && c()
				}), i + 1), e.addEventListener(a, l)
			}
			var zi = /\b(transform|all)(,|$)/;

			function Ri(e, t) {
				var n, f = window.getComputedStyle(e),
					r = (f[Ti + "Delay"] || "").split(", "),
					i = (f[Ti + "Duration"] || "").split(", "),
					o = Di(r, i),
					a = (f[Li + "Delay"] || "").split(", "),
					s = (f[Li + "Duration"] || "").split(", "),
					c = Di(a, s),
					l = 0,
					u = 0;
				t === Oi ? o > 0 && (n = Oi, l = o, u = i.length) : t === Ei ? c > 0 && (n = Ei, l = c, u = s.length) : (l = Math.max(o, c), n = l > 0 ? o > c ? Oi : Ei : null, u = n ? n === Oi ? i.length : s.length : 0);
				var d = n === Oi && zi.test(f[Ti + "Property"]);
				return {
					type: n,
					timeout: l,
					propCount: u,
					hasTransform: d
				}
			}

			function Di(e, t) {
				while (e.length < t.length) e = e.concat(e);
				return Math.max.apply(null, t.map((function(t, n) {
					return Vi(t) + Vi(e[n])
				})))
			}

			function Vi(e) {
				return 1e3 * Number(e.slice(0, -1).replace(",", "."))
			}

			function Hi(e, t) {
				var n = e.elm;
				r(n._leaveCb) && (n._leaveCb.cancelled = !0, n._leaveCb());
				var i = Ci(e.data.transition);
				if (!f(i) && !r(n._enterCb) && 1 === n.nodeType) {
					var o = i.css,
						a = i.type,
						c = i.enterClass,
						l = i.enterToClass,
						u = i.enterActiveClass,
						d = i.appearClass,
						p = i.appearToClass,
						h = i.appearActiveClass,
						g = i.beforeEnter,
						v = i.enter,
						b = i.afterEnter,
						y = i.enterCancelled,
						_ = i.beforeAppear,
						w = i.appear,
						x = i.afterAppear,
						k = i.appearCancelled,
						C = i.duration,
						S = jn,
						A = jn.$vnode;
					while (A && A.parent) S = A.context, A = A.parent;
					var O = !S._isMounted || !e.isRootInsert;
					if (!O || w || "" === w) {
						var E = O && d ? d : c,
							T = O && h ? h : u,
							j = O && p ? p : l,
							L = O && _ || g,
							I = O && "function" === typeof w ? w : v,
							M = O && x || b,
							N = O && k || y,
							P = m(s(C) ? C.enter : C);
						0;
						var B = !1 !== o && !te,
							$ = qi(I),
							R = n._enterCb = z((function() {
								B && (Bi(n, j), Bi(n, T)), R.cancelled ? (B && Bi(n, E), N && N(n)) : M && M(n), n._enterCb = null
							}));
						e.data.show || wt(e, "insert", (function() {
							var t = n.parentNode,
								f = t && t._pending && t._pending[e.key];
							f && f.tag === e.tag && f.elm._leaveCb && f.elm._leaveCb(), I && I(n, R)
						})), L && L(n), B && (Pi(n, E), Pi(n, T), Ni((function() {
							Bi(n, E), R.cancelled || (Pi(n, j), $ || (Ui(P) ? setTimeout(R, P) : $i(n, a, R)))
						}))), e.data.show && (t && t(), I && I(n, R)), B || $ || R()
					}
				}
			}

			function Fi(e, t) {
				var n = e.elm;
				r(n._enterCb) && (n._enterCb.cancelled = !0, n._enterCb());
				var i = Ci(e.data.transition);
				if (f(i) || 1 !== n.nodeType) return t();
				if (!r(n._leaveCb)) {
					var o = i.css,
						a = i.type,
						c = i.leaveClass,
						l = i.leaveToClass,
						u = i.leaveActiveClass,
						d = i.beforeLeave,
						p = i.leave,
						h = i.afterLeave,
						g = i.leaveCancelled,
						v = i.delayLeave,
						b = i.duration,
						y = !1 !== o && !te,
						_ = qi(p),
						w = m(s(b) ? b.leave : b);
					0;
					var x = n._leaveCb = z((function() {
						n.parentNode && n.parentNode._pending && (n.parentNode._pending[e.key] = null), y && (Bi(n, l), Bi(n, u)), x.cancelled ? (y && Bi(n, c), g && g(n)) : (t(), h && h(n)), n._leaveCb = null
					}));
					v ? v(k) : k()
				}

				function k() {
					x.cancelled || (!e.data.show && n.parentNode && ((n.parentNode._pending || (n.parentNode._pending = {}))[e.key] = e), d && d(n), y && (Pi(n, c), Pi(n, u), Ni((function() {
						Bi(n, c), x.cancelled || (Pi(n, l), _ || (Ui(w) ? setTimeout(x, w) : $i(n, a, x)))
					}))), p && p(n, x), y || _ || x())
				}
			}

			function Ui(e) {
				return "number" === typeof e && !isNaN(e)
			}

			function qi(e) {
				if (f(e)) return !1;
				var t = e.fns;
				return r(t) ? qi(Array.isArray(t) ? t[0] : t) : (e._length || e.length) > 1
			}

			function Wi(e, t) {
				!0 !== t.data.show && Hi(t)
			}
			var Qi = Y ? {
					create: Wi,
					activate: Wi,
					remove: function(e, t) {
						!0 !== e.data.show ? Fi(e, t) : t()
					}
				} : {},
				Gi = [Ur, Qr, fi, si, _i, Qi],
				Zi = Gi.concat(Dr),
				Yi = Ir({
					nodeOps: Cr,
					modules: Zi
				});
			te && document.addEventListener("selectionchange", (function() {
				var e = document.activeElement;
				e && e.vmodel && ro(e, "input")
			}));
			var Ji = {
				inserted: function(e, t, n, f) {
					"select" === n.tag ? (f.elm && !f.elm._vOptions ? wt(n, "postpatch", (function() {
						Ji.componentUpdated(e, t, n)
					})) : Xi(e, t, n.context), e._vOptions = [].map.call(e.options, to)) : ("textarea" === n.tag || lr(e.type)) && (e._vModifiers = t.modifiers, t.modifiers.lazy || (e.addEventListener("compositionstart", no), e.addEventListener("compositionend", fo), e.addEventListener("change", fo), te && (e.vmodel = !0)))
				},
				componentUpdated: function(e, t, n) {
					if ("select" === n.tag) {
						Xi(e, t, n.context);
						var f = e._vOptions,
							r = e._vOptions = [].map.call(e.options, to);
						if (r.some((function(e, t) {
								return !B(e, f[t])
							}))) {
							var i = e.multiple ? t.value.some((function(e) {
								return eo(e, r)
							})) : t.value !== t.oldValue && eo(t.value, r);
							i && ro(e, "change")
						}
					}
				}
			};

			function Xi(e, t, n) {
				Ki(e, t, n), (ee || ne) && setTimeout((function() {
					Ki(e, t, n)
				}), 0)
			}

			function Ki(e, t, n) {
				var f = t.value,
					r = e.multiple;
				if (!r || Array.isArray(f)) {
					for (var i, o, a = 0, s = e.options.length; a < s; a++)
						if (o = e.options[a], r) i = $(f, to(o)) > -1, o.selected !== i && (o.selected = i);
						else if (B(to(o), f)) return void(e.selectedIndex !== a && (e.selectedIndex = a));
					r || (e.selectedIndex = -1)
				}
			}

			function eo(e, t) {
				return t.every((function(t) {
					return !B(t, e)
				}))
			}

			function to(e) {
				return "_value" in e ? e._value : e.value
			}

			function no(e) {
				e.target.composing = !0
			}

			function fo(e) {
				e.target.composing && (e.target.composing = !1, ro(e.target, "input"))
			}

			function ro(e, t) {
				var n = document.createEvent("HTMLEvents");
				n.initEvent(t, !0, !0), e.dispatchEvent(n)
			}

			function io(e) {
				return !e.componentInstance || e.data && e.data.transition ? e : io(e.componentInstance._vnode)
			}
			var oo = {
					bind: function(e, t, n) {
						var f = t.value;
						n = io(n);
						var r = n.data && n.data.transition,
							i = e.__vOriginalDisplay = "none" === e.style.display ? "" : e.style.display;
						f && r ? (n.data.show = !0, Hi(n, (function() {
							e.style.display = i
						}))) : e.style.display = f ? i : "none"
					},
					update: function(e, t, n) {
						var f = t.value,
							r = t.oldValue;
						if (!f !== !r) {
							n = io(n);
							var i = n.data && n.data.transition;
							i ? (n.data.show = !0, f ? Hi(n, (function() {
								e.style.display = e.__vOriginalDisplay
							})) : Fi(n, (function() {
								e.style.display = "none"
							}))) : e.style.display = f ? e.__vOriginalDisplay : "none"
						}
					},
					unbind: function(e, t, n, f, r) {
						r || (e.style.display = e.__vOriginalDisplay)
					}
				},
				ao = {
					model: Ji,
					show: oo
				},
				so = {
					name: String,
					appear: Boolean,
					css: Boolean,
					mode: String,
					type: String,
					enterClass: String,
					leaveClass: String,
					enterToClass: String,
					leaveToClass: String,
					enterActiveClass: String,
					leaveActiveClass: String,
					appearClass: String,
					appearActiveClass: String,
					appearToClass: String,
					duration: [Number, String, Object]
				};

			function co(e) {
				var t = e && e.componentOptions;
				return t && t.Ctor.options.abstract ? co(kn(t.children)) : e
			}

			function lo(e) {
				var t = {},
					n = e.$options;
				for (var f in n.propsData) t[f] = e[f];
				var r = n._parentListeners;
				for (var i in r) t[k(i)] = r[i];
				return t
			}

			function uo(e, t) {
				if (/\d-keep-alive$/.test(t.tag)) return e("keep-alive", {
					props: t.componentOptions.propsData
				})
			}

			function po(e) {
				while (e = e.parent)
					if (e.data.transition) return !0
			}

			function ho(e, t) {
				return t.key === e.key && t.tag === e.tag
			}
			var mo = function(e) {
					return e.tag || xn(e)
				},
				go = function(e) {
					return "show" === e.name
				},
				vo = {
					name: "transition",
					props: so,
					abstract: !0,
					render: function(e) {
						var t = this,
							n = this.$slots.default;
						if (n && (n = n.filter(mo), n.length)) {
							0;
							var f = this.mode;
							0;
							var r = n[0];
							if (po(this.$vnode)) return r;
							var i = co(r);
							if (!i) return r;
							if (this._leaving) return uo(e, r);
							var o = "__transition-" + this._uid + "-";
							i.key = null == i.key ? i.isComment ? o + "comment" : o + i.tag : a(i.key) ? 0 === String(i.key).indexOf(o) ? i.key : o + i.key : i.key;
							var s = (i.data || (i.data = {})).transition = lo(this),
								c = this._vnode,
								l = co(c);
							if (i.data.directives && i.data.directives.some(go) && (i.data.show = !0), l && l.data && !ho(i, l) && !xn(l) && (!l.componentInstance || !l.componentInstance._vnode.isComment)) {
								var u = l.data.transition = L({}, s);
								if ("out-in" === f) return this._leaving = !0, wt(u, "afterLeave", (function() {
									t._leaving = !1, t.$forceUpdate()
								})), uo(e, r);
								if ("in-out" === f) {
									if (xn(i)) return c;
									var d, p = function() {
										d()
									};
									wt(s, "afterEnter", p), wt(s, "enterCancelled", p), wt(u, "delayLeave", (function(e) {
										d = e
									}))
								}
							}
							return r
						}
					}
				},
				bo = L({
					tag: String,
					moveClass: String
				}, so);
			delete bo.mode;
			var yo = {
				props: bo,
				beforeMount: function() {
					var e = this,
						t = this._update;
					this._update = function(n, f) {
						var r = Ln(e);
						e.__patch__(e._vnode, e.kept, !1, !0), e._vnode = e.kept, r(), t.call(e, n, f)
					}
				},
				render: function(e) {
					for (var t = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), f = this.prevChildren = this.children, r = this.$slots.default || [], i = this.children = [], o = lo(this), a = 0; a < r.length; a++) {
						var s = r[a];
						if (s.tag)
							if (null != s.key && 0 !== String(s.key).indexOf("__vlist")) i.push(s), n[s.key] = s, (s.data || (s.data = {})).transition = o;
							else;
					}
					if (f) {
						for (var c = [], l = [], u = 0; u < f.length; u++) {
							var d = f[u];
							d.data.transition = o, d.data.pos = d.elm.getBoundingClientRect(), n[d.key] ? c.push(d) : l.push(d)
						}
						this.kept = e(t, null, c), this.removed = l
					}
					return e(t, null, i)
				},
				updated: function() {
					var e = this.prevChildren,
						t = this.moveClass || (this.name || "v") + "-move";
					e.length && this.hasMove(e[0].elm, t) && (e.forEach(_o), e.forEach(wo), e.forEach(xo), this._reflow = document.body.offsetHeight, e.forEach((function(e) {
						if (e.data.moved) {
							var n = e.elm,
								f = n.style;
							Pi(n, t), f.transform = f.WebkitTransform = f.transitionDuration = "", n.addEventListener(ji, n._moveCb = function e(f) {
								f && f.target !== n || f && !/transform$/.test(f.propertyName) || (n.removeEventListener(ji, e), n._moveCb = null, Bi(n, t))
							})
						}
					})))
				},
				methods: {
					hasMove: function(e, t) {
						if (!Ai) return !1;
						if (this._hasMove) return this._hasMove;
						var n = e.cloneNode();
						e._transitionClasses && e._transitionClasses.forEach((function(e) {
							ki(n, e)
						})), xi(n, t), n.style.display = "none", this.$el.appendChild(n);
						var f = Ri(n);
						return this.$el.removeChild(n), this._hasMove = f.hasTransform
					}
				}
			};

			function _o(e) {
				e.elm._moveCb && e.elm._moveCb(), e.elm._enterCb && e.elm._enterCb()
			}

			function wo(e) {
				e.data.newPos = e.elm.getBoundingClientRect()
			}

			function xo(e) {
				var t = e.data.pos,
					n = e.data.newPos,
					f = t.left - n.left,
					r = t.top - n.top;
				if (f || r) {
					e.data.moved = !0;
					var i = e.elm.style;
					i.transform = i.WebkitTransform = "translate(" + f + "px," + r + "px)", i.transitionDuration = "0s"
				}
			}
			var ko = {
				Transition: vo,
				TransitionGroup: yo
			};
			Cf.config.mustUseProp = Vf, Cf.config.isReservedTag = or, Cf.config.isReservedAttr = Rf, Cf.config.getTagNamespace = ar, Cf.config.isUnknownElement = cr, L(Cf.options.directives, ao), L(Cf.options.components, ko), Cf.prototype.__patch__ = Y ? Yi : M, Cf.prototype.$mount = function(e, t) {
				return e = e && Y ? ur(e) : void 0, Nn(this, e, t)
			}, Y && setTimeout((function() {
				H.devtools && ce && ce.emit("init", Cf)
			}), 0), t["a"] = Cf
		}).call(this, n("c8ba"))
	},
	"2ca0": function(e, t, n) {
		"use strict";
		var f = n("23e7"),
			r = n("06cf").f,
			i = n("50c4"),
			o = n("5a34"),
			a = n("1d80"),
			s = n("ab13"),
			c = n("c430"),
			l = "".startsWith,
			u = Math.min,
			d = s("startsWith"),
			p = !c && !d && !! function() {
				var e = r(String.prototype, "startsWith");
				return e && !e.writable
			}();
		f({
			target: "String",
			proto: !0,
			forced: !p && !d
		}, {
			startsWith: function(e) {
				var t = String(a(this));
				o(e);
				var n = i(u(arguments.length > 1 ? arguments[1] : void 0, t.length)),
					f = String(e);
				return l ? l.call(t, f, n) : t.slice(n, n + f.length) === f
			}
		})
	},
	"2cf4": function(e, t, n) {
		var f, r, i, o = n("da84"),
			a = n("d039"),
			s = n("c6b6"),
			c = n("0366"),
			l = n("1be4"),
			u = n("cc12"),
			d = n("1cdc"),
			p = o.location,
			h = o.setImmediate,
			m = o.clearImmediate,
			g = o.process,
			v = o.MessageChannel,
			b = o.Dispatch,
			y = 0,
			_ = {},
			w = "onreadystatechange",
			x = function(e) {
				if (_.hasOwnProperty(e)) {
					var t = _[e];
					delete _[e], t()
				}
			},
			k = function(e) {
				return function() {
					x(e)
				}
			},
			C = function(e) {
				x(e.data)
			},
			S = function(e) {
				o.postMessage(e + "", p.protocol + "//" + p.host)
			};
		h && m || (h = function(e) {
			var t = [],
				n = 1;
			while (arguments.length > n) t.push(arguments[n++]);
			return _[++y] = function() {
				("function" == typeof e ? e : Function(e)).apply(void 0, t)
			}, f(y), y
		}, m = function(e) {
			delete _[e]
		}, "process" == s(g) ? f = function(e) {
			g.nextTick(k(e))
		} : b && b.now ? f = function(e) {
			b.now(k(e))
		} : v && !d ? (r = new v, i = r.port2, r.port1.onmessage = C, f = c(i.postMessage, i, 1)) : !o.addEventListener || "function" != typeof postMessage || o.importScripts || a(S) || "file:" === p.protocol ? f = w in u("script") ? function(e) {
			l.appendChild(u("script"))[w] = function() {
				l.removeChild(this), x(e)
			}
		} : function(e) {
			setTimeout(k(e), 0)
		} : (f = S, o.addEventListener("message", C, !1))), e.exports = {
			set: h,
			clear: m
		}
	},
	"2d00": function(e, t, n) {
		var f, r, i = n("da84"),
			o = n("342f"),
			a = i.process,
			s = a && a.versions,
			c = s && s.v8;
		c ? (f = c.split("."), r = f[0] + f[1]) : o && (f = o.match(/Edge\/(\d+)/), (!f || f[1] >= 74) && (f = o.match(/Chrome\/(\d+)/), f && (r = f[1]))), e.exports = r && +r
	},
	"2d83": function(e, t, n) {
		"use strict";
		var f = n("387f");
		e.exports = function(e, t, n, r, i) {
			var o = new Error(e);
			return f(o, t, n, r, i)
		}
	},
	"2e67": function(e, t, n) {
		"use strict";
		e.exports = function(e) {
			return !(!e || !e.__CANCEL__)
		}
	},
	"30b5": function(e, t, n) {
		"use strict";
		var f = n("c532");

		function r(e) {
			return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
		}
		e.exports = function(e, t, n) {
			if (!t) return e;
			var i;
			if (n) i = n(t);
			else if (f.isURLSearchParams(t)) i = t.toString();
			else {
				var o = [];
				f.forEach(t, (function(e, t) {
					null !== e && "undefined" !== typeof e && (f.isArray(e) ? t += "[]" : e = [e], f.forEach(e, (function(e) {
						f.isDate(e) ? e = e.toISOString() : f.isObject(e) && (e = JSON.stringify(e)), o.push(r(t) + "=" + r(e))
					})))
				})), i = o.join("&")
			}
			return i && (e += (-1 === e.indexOf("?") ? "?" : "&") + i), e
		}
	},
	3408: function(e, t, n) {},
	3410: function(e, t, n) {
		var f = n("23e7"),
			r = n("d039"),
			i = n("7b0b"),
			o = n("e163"),
			a = n("e177"),
			s = r((function() {
				o(1)
			}));
		f({
			target: "Object",
			stat: !0,
			forced: s,
			sham: !a
		}, {
			getPrototypeOf: function(e) {
				return o(i(e))
			}
		})
	},
	"342f": function(e, t, n) {
		var f = n("d066");
		e.exports = f("navigator", "userAgent") || ""
	},
	3532: function(e, t, n) {
		"use strict";
		var f = n("2479"),
			r = n.n(f);
		r.a
	},
	"35a1": function(e, t, n) {
		var f = n("f5df"),
			r = n("3f8c"),
			i = n("b622"),
			o = i("iterator");
		e.exports = function(e) {
			if (void 0 != e) return e[o] || e["@@iterator"] || r[f(e)]
		}
	},
	"36a7": function(e, t, n) {},
	3715: function(e, t) {
		const n = {
				bold: {
					delimiter: "*",
					tag: "strong"
				},
				italic: {
					delimiter: "/",
					tag: "em"
				},
				underline: {
					delimiter: "_",
					tag: "u"
				},
				strike: {
					delimiter: "~",
					tag: "del"
				},
				code: {
					delimiter: "`",
					tag: "code"
				},
				sup: {
					delimiter: "^",
					tag: "sup"
				},
				sub: {
					delimiter: "¡",
					tag: "sub"
				}
			},
			f = e => `<${e}>`,
			r = e => `</${e}>`,
			i = (e, t) => `${f(t)}${e}${r(t)}`,
			o = (e, t) => {
				let n = 0,
					f = "";
				while (n < e.length && e[n] !== t) f += e[n], n++;
				return n === e.length ? "" : f
			};
		e.exports = (e, t = n) => {
			t = Object.assign({}, n, t);
			let f = "",
				r = 0;
			const a = () => {
					f += e[r], r++
				},
				s = (e, t) => {
					f += t + e, r += e.length
				},
				c = t => {
					if (r++, " " === e[r]) f += t.delimiter, a();
					else {
						const n = e.substr(r),
							a = o(n, t.delimiter);
						0 === a.length ? s(n, t.delimiter) : (f += i(a, t.tag), r += a.length + 1)
					}
				};
			while (r < e.length) {
				const n = e[r];
				n === t.bold.delimiter ? c(t.bold) : n === t.italic.delimiter ? c(t.italic) : n === t.underline.delimiter ? c(t.underline) : n === t.strike.delimiter ? c(t.strike) : n === t.code.delimiter ? c(t.code) : n === t.sup.delimiter ? c(t.sup) : n === t.sub.delimiter ? c(t.sub) : a()
			}
			return f
		}
	},
	"37e8": function(e, t, n) {
		var f = n("83ab"),
			r = n("9bf2"),
			i = n("825a"),
			o = n("df75");
		e.exports = f ? Object.defineProperties : function(e, t) {
			i(e);
			var n, f = o(t),
				a = f.length,
				s = 0;
			while (a > s) r.f(e, n = f[s++], t[n]);
			return e
		}
	},
	"387f": function(e, t, n) {
		"use strict";
		e.exports = function(e, t, n, f, r) {
			return e.config = t, n && (e.code = n), e.request = f, e.response = r, e
		}
	},
	"38cf": function(e, t, n) {
		var f = n("23e7"),
			r = n("1148");
		f({
			target: "String",
			proto: !0
		}, {
			repeat: r
		})
	},
	3934: function(e, t, n) {
		"use strict";
		var f = n("c532");
		e.exports = f.isStandardBrowserEnv() ? function() {
			var e, t = /(msie|trident)/i.test(navigator.userAgent),
				n = document.createElement("a");

			function r(e) {
				var f = e;
				return t && (n.setAttribute("href", f), f = n.href), n.setAttribute("href", f), {
					href: n.href,
					protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
					host: n.host,
					search: n.search ? n.search.replace(/^\?/, "") : "",
					hash: n.hash ? n.hash.replace(/^#/, "") : "",
					hostname: n.hostname,
					port: n.port,
					pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
				}
			}
			return e = r(window.location.href),
				function(t) {
					var n = f.isString(t) ? r(t) : t;
					return n.protocol === e.protocol && n.host === e.host
				}
		}() : function() {
			return function() {
				return !0
			}
		}()
	},
	"3ad0": function(e, t, n) {},
	"3bbe": function(e, t, n) {
		var f = n("861d");
		e.exports = function(e) {
			if (!f(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype");
			return e
		}
	},
	"3ca3": function(e, t, n) {
		"use strict";
		var f = n("6547").charAt,
			r = n("69f3"),
			i = n("7dd0"),
			o = "String Iterator",
			a = r.set,
			s = r.getterFor(o);
		i(String, "String", (function(e) {
			a(this, {
				type: o,
				string: String(e),
				index: 0
			})
		}), (function() {
			var e, t = s(this),
				n = t.string,
				r = t.index;
			return r >= n.length ? {
				value: void 0,
				done: !0
			} : (e = f(n, r), t.index += e.length, {
				value: e,
				done: !1
			})
		}))
	},
	"3ea3": function(e, t, n) {
		var f = n("23e7"),
			r = n("f748"),
			i = Math.abs,
			o = Math.pow;
		f({
			target: "Math",
			stat: !0
		}, {
			cbrt: function(e) {
				return r(e = +e) * o(i(e), 1 / 3)
			}
		})
	},
	"3f8c": function(e, t) {
		e.exports = {}
	},
	"400f": function(e, t, n) {
		"use strict";
		var f = n("6e05"),
			r = n.n(f);
		r.a
	},
	4069: function(e, t, n) {
		var f = n("44d2");
		f("flat")
	},
	"408a": function(e, t, n) {
		var f = n("c6b6");
		e.exports = function(e) {
			if ("number" != typeof e && "Number" != f(e)) throw TypeError("Incorrect invocation");
			return +e
		}
	},
	4160: function(e, t, n) {
		"use strict";
		var f = n("23e7"),
			r = n("17c2");
		f({
			target: "Array",
			proto: !0,
			forced: [].forEach != r
		}, {
			forEach: r
		})
	},
	"428f": function(e, t, n) {
		var f = n("da84");
		e.exports = f
	},
	4362: function(e, t, n) {
		t.nextTick = function(e) {
				var t = Array.prototype.slice.call(arguments);
				t.shift(), setTimeout((function() {
					e.apply(null, t)
				}), 0)
			}, t.platform = t.arch = t.execPath = t.title = "browser", t.pid = 1, t.browser = !0, t.env = {}, t.argv = [], t.binding = function(e) {
				throw new Error("No such module. (Possibly not yet loaded)")
			},
			function() {
				var e, f = "/";
				t.cwd = function() {
					return f
				}, t.chdir = function(t) {
					e || (e = n("df7c")), f = e.resolve(t, f)
				}
			}(), t.exit = t.kill = t.umask = t.dlopen = t.uptime = t.memoryUsage = t.uvCounters = function() {}, t.features = {}
	},
	4461: function(e, t, n) {
		"use strict";
		var f = n("6b4e"),
			r = n.n(f);
		r.a
	},
	"44ad": function(e, t, n) {
		var f = n("d039"),
			r = n("c6b6"),
			i = "".split;
		e.exports = f((function() {
			return !Object("z").propertyIsEnumerable(0)
		})) ? function(e) {
			return "String" == r(e) ? i.call(e, "") : Object(e)
		} : Object
	},
	"44d2": function(e, t, n) {
		var f = n("b622"),
			r = n("7c73"),
			i = n("9bf2"),
			o = f("unscopables"),
			a = Array.prototype;
		void 0 == a[o] && i.f(a, o, {
			configurable: !0,
			value: r(null)
		}), e.exports = function(e) {
			a[o][e] = !0
		}
	},
	"44de": function(e, t, n) {
		var f = n("da84");
		e.exports = function(e, t) {
			var n = f.console;
			n && n.error && (1 === arguments.length ? n.error(e) : n.error(e, t))
		}
	},
	"44e7": function(e, t, n) {
		var f = n("861d"),
			r = n("c6b6"),
			i = n("b622"),
			o = i("match");
		e.exports = function(e) {
			var t;
			return f(e) && (void 0 !== (t = e[o]) ? !!t : "RegExp" == r(e))
		}
	},
	"45fc": function(e, t, n) {
		"use strict";
		var f = n("23e7"),
			r = n("b727").some,
			i = n("a640"),
			o = n("ae40"),
			a = i("some"),
			s = o("some");
		f({
			target: "Array",
			proto: !0,
			forced: !a || !s
		}, {
			some: function(e) {
				return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
			}
		})
	},
	"466d": function(e, t, n) {
		"use strict";
		var f = n("d784"),
			r = n("825a"),
			i = n("50c4"),
			o = n("1d80"),
			a = n("8aa5"),
			s = n("14c3");
		f("match", 1, (function(e, t, n) {
			return [function(t) {
				var n = o(this),
					f = void 0 == t ? void 0 : t[e];
				return void 0 !== f ? f.call(t, n) : new RegExp(t)[e](String(n))
			}, function(e) {
				var f = n(t, e, this);
				if (f.done) return f.value;
				var o = r(e),
					c = String(this);
				if (!o.global) return s(o, c);
				var l = o.unicode;
				o.lastIndex = 0;
				var u, d = [],
					p = 0;
				while (null !== (u = s(o, c))) {
					var h = String(u[0]);
					d[p] = h, "" === h && (o.lastIndex = a(c, i(o.lastIndex), l)), p++
				}
				return 0 === p ? null : d
			}]
		}))
	},
	"467f": function(e, t, n) {
		"use strict";
		var f = n("2d83");
		e.exports = function(e, t, n) {
			var r = n.config.validateStatus;
			n.status && r && !r(n.status) ? t(f("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n)
		}
	},
	4804: function(e, t, n) {},
	4840: function(e, t, n) {
		var f = n("825a"),
			r = n("1c0b"),
			i = n("b622"),
			o = i("species");
		e.exports = function(e, t) {
			var n, i = f(e).constructor;
			return void 0 === i || void 0 == (n = f(i)[o]) ? t : r(n)
		}
	},
	"48da": function(e, t, n) {},
	4930: function(e, t, n) {
		var f = n("d039");
		e.exports = !!Object.getOwnPropertySymbols && !f((function() {
			return !String(Symbol())
		}))
	},
	"498a": function(e, t, n) {
		"use strict";
		var f = n("23e7"),
			r = n("58a8").trim,
			i = n("c8d2");
		f({
			target: "String",
			proto: !0,
			forced: i("trim")
		}, {
			trim: function() {
				return r(this)
			}
		})
	},
	"4ae1": function(e, t, n) {
		var f = n("23e7"),
			r = n("d066"),
			i = n("1c0b"),
			o = n("825a"),
			a = n("861d"),
			s = n("7c73"),
			c = n("0538"),
			l = n("d039"),
			u = r("Reflect", "construct"),
			d = l((function() {
				function e() {}
				return !(u((function() {}), [], e) instanceof e)
			})),
			p = !l((function() {
				u((function() {}))
			})),
			h = d || p;
		f({
			target: "Reflect",
			stat: !0,
			forced: h,
			sham: h
		}, {
			construct: function(e, t) {
				i(e), o(t);
				var n = arguments.length < 3 ? e : i(arguments[2]);
				if (p && !d) return u(e, t, n);
				if (e == n) {
					switch (t.length) {
						case 0:
							return new e;
						case 1:
							return new e(t[0]);
						case 2:
							return new e(t[0], t[1]);
						case 3:
							return new e(t[0], t[1], t[2]);
						case 4:
							return new e(t[0], t[1], t[2], t[3])
					}
					var f = [null];
					return f.push.apply(f, t), new(c.apply(e, f))
				}
				var r = n.prototype,
					l = s(a(r) ? r : Object.prototype),
					h = Function.apply.call(e, l, t);
				return a(h) ? h : l
			}
		})
	},
	"4b85": function(e, t, n) {},
	"4d64": function(e, t, n) {
		var f = n("fc6a"),
			r = n("50c4"),
			i = n("23cb"),
			o = function(e) {
				return function(t, n, o) {
					var a, s = f(t),
						c = r(s.length),
						l = i(o, c);
					if (e && n != n) {
						while (c > l)
							if (a = s[l++], a != a) return !0
					} else
						for (; c > l; l++)
							if ((e || l in s) && s[l] === n) return e || l || 0;
					return !e && -1
				}
			};
		e.exports = {
			includes: o(!0),
			indexOf: o(!1)
		}
	},
	"4dc0": function(e, t, n) {},
	"4de4": function(e, t, n) {
		"use strict";
		var f = n("23e7"),
			r = n("b727").filter,
			i = n("1dde"),
			o = n("ae40"),
			a = i("filter"),
			s = o("filter");
		f({
			target: "Array",
			proto: !0,
			forced: !a || !s
		}, {
			filter: function(e) {
				return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
			}
		})
	},
	"4df4": function(e, t, n) {
		"use strict";
		var f = n("0366"),
			r = n("7b0b"),
			i = n("9bdd"),
			o = n("e95a"),
			a = n("50c4"),
			s = n("8418"),
			c = n("35a1");
		e.exports = function(e) {
			var t, n, l, u, d, p, h = r(e),
				m = "function" == typeof this ? this : Array,
				g = arguments.length,
				v = g > 1 ? arguments[1] : void 0,
				b = void 0 !== v,
				y = c(h),
				_ = 0;
			if (b && (v = f(v, g > 2 ? arguments[2] : void 0, 2)), void 0 == y || m == Array && o(y))
				for (t = a(h.length), n = new m(t); t > _; _++) p = b ? v(h[_], _) : h[_], s(n, _, p);
			else
				for (u = y.call(h), d = u.next, n = new m; !(l = d.call(u)).done; _++) p = b ? i(u, v, [l.value, _], !0) : l.value, s(n, _, p);
			return n.length = _, n
		}
	},
	"4ec9": function(e, t, n) {
		"use strict";
		var f = n("6d61"),
			r = n("6566");
		e.exports = f("Map", (function(e) {
			return function() {
				return e(this, arguments.length ? arguments[0] : void 0)
			}
		}), r)
	},
	"50c4": function(e, t, n) {
		var f = n("a691"),
			r = Math.min;
		e.exports = function(e) {
			return e > 0 ? r(f(e), 9007199254740991) : 0
		}
	},
	5135: function(e, t) {
		var n = {}.hasOwnProperty;
		e.exports = function(e, t) {
			return n.call(e, t)
		}
	},
	5270: function(e, t, n) {
		"use strict";
		var f = n("c532"),
			r = n("c401"),
			i = n("2e67"),
			o = n("2444"),
			a = n("d925"),
			s = n("e683");

		function c(e) {
			e.cancelToken && e.cancelToken.throwIfRequested()
		}
		e.exports = function(e) {
			c(e), e.baseURL && !a(e.url) && (e.url = s(e.baseURL, e.url)), e.headers = e.headers || {}, e.data = r(e.data, e.headers, e.transformRequest), e.headers = f.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), f.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(t) {
				delete e.headers[t]
			}));
			var t = e.adapter || o.adapter;
			return t(e).then((function(t) {
				return c(e), t.data = r(t.data, t.headers, e.transformResponse), t
			}), (function(t) {
				return i(t) || (c(e), t && t.response && (t.response.data = r(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
			}))
		}
	},
	5319: function(e, t, n) {
		"use strict";
		var f = n("d784"),
			r = n("825a"),
			i = n("7b0b"),
			o = n("50c4"),
			a = n("a691"),
			s = n("1d80"),
			c = n("8aa5"),
			l = n("14c3"),
			u = Math.max,
			d = Math.min,
			p = Math.floor,
			h = /\$([$&'`]|\d\d?|<[^>]*>)/g,
			m = /\$([$&'`]|\d\d?)/g,
			g = function(e) {
				return void 0 === e ? e : String(e)
			};
		f("replace", 2, (function(e, t, n, f) {
			var v = f.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
				b = f.REPLACE_KEEPS_$0,
				y = v ? "$" : "$0";
			return [function(n, f) {
				var r = s(this),
					i = void 0 == n ? void 0 : n[e];
				return void 0 !== i ? i.call(n, r, f) : t.call(String(r), n, f)
			}, function(e, f) {
				if (!v && b || "string" === typeof f && -1 === f.indexOf(y)) {
					var i = n(t, e, this, f);
					if (i.done) return i.value
				}
				var s = r(e),
					p = String(this),
					h = "function" === typeof f;
				h || (f = String(f));
				var m = s.global;
				if (m) {
					var w = s.unicode;
					s.lastIndex = 0
				}
				var x = [];
				while (1) {
					var k = l(s, p);
					if (null === k) break;
					if (x.push(k), !m) break;
					var C = String(k[0]);
					"" === C && (s.lastIndex = c(p, o(s.lastIndex), w))
				}
				for (var S = "", A = 0, O = 0; O < x.length; O++) {
					k = x[O];
					for (var E = String(k[0]), T = u(d(a(k.index), p.length), 0), j = [], L = 1; L < k.length; L++) j.push(g(k[L]));
					var I = k.groups;
					if (h) {
						var M = [E].concat(j, T, p);
						void 0 !== I && M.push(I);
						var N = String(f.apply(void 0, M))
					} else N = _(E, p, T, j, I, f);
					T >= A && (S += p.slice(A, T) + N, A = T + E.length)
				}
				return S + p.slice(A)
			}];

			function _(e, n, f, r, o, a) {
				var s = f + e.length,
					c = r.length,
					l = m;
				return void 0 !== o && (o = i(o), l = h), t.call(a, l, (function(t, i) {
					var a;
					switch (i.charAt(0)) {
						case "$":
							return "$";
						case "&":
							return e;
						case "`":
							return n.slice(0, f);
						case "'":
							return n.slice(s);
						case "<":
							a = o[i.slice(1, -1)];
							break;
						default:
							var l = +i;
							if (0 === l) return t;
							if (l > c) {
								var u = p(l / 10);
								return 0 === u ? t : u <= c ? void 0 === r[u - 1] ? i.charAt(1) : r[u - 1] + i.charAt(1) : t
							}
							a = r[l - 1]
					}
					return void 0 === a ? "" : a
				}))
			}
		}))
	},
	5607: function(e, t, n) {
		"use strict";
		var f = n("fe21"),
			r = n.n(f);
		r.a
	},
	5692: function(e, t, n) {
		var f = n("c430"),
			r = n("c6cd");
		(e.exports = function(e, t) {
			return r[e] || (r[e] = void 0 !== t ? t : {})
		})("versions", []).push({
			version: "3.6.5",
			mode: f ? "pure" : "global",
			copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
		})
	},
	"56d7": function(e, t, n) {
		"use strict";
		n.r(t);
		var f = {};
		n.r(f), n.d(f, "linear", (function() {
			return gf
		})), n.d(f, "easeInQuad", (function() {
			return vf
		})), n.d(f, "easeOutQuad", (function() {
			return bf
		})), n.d(f, "easeInOutQuad", (function() {
			return yf
		})), n.d(f, "easeInCubic", (function() {
			return _f
		})), n.d(f, "easeOutCubic", (function() {
			return wf
		})), n.d(f, "easeInOutCubic", (function() {
			return xf
		})), n.d(f, "easeInQuart", (function() {
			return kf
		})), n.d(f, "easeOutQuart", (function() {
			return Cf
		})), n.d(f, "easeInOutQuart", (function() {
			return Sf
		})), n.d(f, "easeInQuint", (function() {
			return Af
		})), n.d(f, "easeOutQuint", (function() {
			return Of
		})), n.d(f, "easeInOutQuint", (function() {
			return Ef
		}));
		n("e260"), n("e6cf"), n("cca6"), n("a79d");
		var r = n("2b0e"),
			i = (n("d3b7"), n("bc3a")),
			o = n.n(i),
			a = {},
			s = o.a.create(a);
		s.interceptors.request.use((function(e) {
			return e
		}), (function(e) {
			return Promise.reject(e)
		})), s.interceptors.response.use((function(e) {
			return e
		}), (function(e) {
			return Promise.reject(e)
		})), Plugin.install = function(e, t) {
			e.axios = s, window.axios = s, Object.defineProperties(e.prototype, {
				axios: {
					get: function() {
						return s
					}
				},
				$axios: {
					get: function() {
						return s
					}
				}
			})
		}, r["a"].use(Plugin);
		Plugin;
		var c = function() {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n("v-app", [n("v-content", [n("Home", {
					attrs: {
						globals: e.globals,
						offers: e.offers,
						sounds: e.sounds
					}
				})], 1)], 1)
			},
			l = [],
			u = (n("ac1f"), n("5319"), function() {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n("v-container", {
					staticClass: "col-12 col-md-9 mx-auto"
				}, [e.isResourceSelected ? e._e() : n("ResourceSelection", {
					attrs: {
						globals: e.globals
					},
					on: {
						"play-sound": e.play,
						"resource-selected": e.resourceSelected
					}
				}), e.isResourceSelected ? n("ConfirmSelection", {
					attrs: {
						globals: e.globals,
						resource: e.resource,
						offers: e.offers
					},
					on: {
						"play-sound": e.play,
						"set-user": e.setUser
					}
				}) : e._e(), e.user.name.length > 3 && 1 === parseInt(e.globals.chat_on) ? n("Chat", {
					staticClass: "animated fadeIn fast",
					attrs: {
						user: e.user
					}
				}) : e._e()], 1)
			}),
			d = [],
			p = (n("b0c0"), function() {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n("div", [n("v-row", [n("v-col", {
					staticClass: "col-12"
				}, [n("v-img", {
					staticClass: "overflow-visible animated bounceIn",
					attrs: {
						src: e.images.bgSrc,
						"lazy-src": e.images.bgLazySrc,
						height: "200px"
					}
				}, [n("v-container", {
					attrs: {
						fluid: ""
					}
				}, [n("v-row", [n("v-col", {
					staticClass: "d-none d-md-block col-md-4 animated bounceIn delay-300ms"
				}, [n("v-img", {
					staticStyle: {
						"margin-top": "-39px"
					},
					attrs: {
						height: "250px",
						contain: "",
						src: e.images.characterSrc,
						"lazy-src": e.images.characterLazySrc
					}
				})], 1), n("v-col", {
					staticClass: "col-12 col-md-8 animated bounceIn delay-300ms"
				}, [n("h1", {
					staticClass: "text-center white--text font-weight-bold"
				}, [e._v("Get Robux" + e._s(1 === parseInt(e.globals.tix_on) ? " & Tix" : ""))]), n("p", {
					staticClass: "white--text text-center"
				}, [e._v(" Get Robux to purchase upgrades for your avatar or buy special abilities in games. "), n("br"), e._v(" For more information on how to earn Robux, visit our Robux Help page. "), n("br"), n("span", {
					staticClass: "d-none d-md-block"
				}, [e._v(" Purchase Roblox Premium to get more Robux for the same price. "), n("br"), e._v(" Roblox Premium is billed every month until cancelled. ")])])])], 1)], 1)], 1)], 1)], 1), n("v-row", {
					staticClass: "animated bounceIn delay-400ms"
				}, [n("v-col", {
					staticClass: "col-4"
				}), n("v-col", {
					staticClass: "col-8"
				}, [n("h2", {
					staticClass: "d-none d-md-block text-center default-grey"
				}, [e._v(" Get Robux" + e._s(1 === parseInt(e.globals.tix_on) ? " + Tix" : "") + " ")]), n("h4", {
					staticClass: "d-block d-md-none text-center default-grey"
				}, [e._v(" Get Robux" + e._s(1 === parseInt(e.globals.tix_on) ? " + Tix" : "") + " ")])])], 1), e._l(e.resources, (function(t, f) {
					return [n("div", {
						key: t.id
					}, [n("v-divider"), n("v-row", {
						staticClass: "animated bounceIn",
						class: "delay-" + (500 + 100 * f) + "ms"
					}, [n("v-col", {
						staticClass: "text-center col-4 vertical-center"
					}, [n("h2", {
						staticClass: "d-none d-md-block text-center default-grey"
					}, [n("span", {
						staticClass: "text-linethrough"
					}, [e._v("$" + e._s(t.price))]), n("span", {
						staticClass: "green--text"
					}, [e._v(" ")])]), n("h4", {
						staticClass: "d-block d-md-none text-center default-grey"
					}, [n("span", {
						staticClass: "text-linethrough"
					}, [e._v("$" + e._s(t.price))]), n("span", {
						staticClass: "green--text"
					}, [e._v(" ")])])]), n("v-col", {
						staticClass: "text-center col-8",
						class: e.selectedResource === t.id ? "animated rubberBand" : ""
					}, [n("v-btn", {
						staticClass: "text-center pa-0",
						style: e.getButtonStyle(),
						attrs: {
							"x-large": "",
							outlined: ""
						},
						on: {
							click: function(n) {
								return e.selectResource(t)
							}
						}
					}, [n("span", {
						staticClass: "icon-robux-gray pl-0 pr-0 pr-md-8"
					}), n("h2", {
						staticClass: "d-none d-md-block default-grey-light text-center"
					}, [e._v(" " + e._s(e.numberWithCommas(t.amount1)) + e._s(1 === parseInt(e.globals.tix_on) ? " + " + e.numberWithCommas(t.amount2) : "") + " ")]), n("h4", {
						staticClass: "d-block d-md-none default-grey-light text-center"
					}, [e._v(" " + e._s(e.numberWithCommas(t.amount1)) + e._s(1 === parseInt(e.globals.tix_on) ? " + " + e.numberWithCommas(t.amount2) : "") + " ")]), 1 === parseInt(e.globals.tix_on) ? n("v-img", {
						staticClass: "pl-0 pr-0 pl-md-8",
						attrs: {
							src: e.resources[0].tix.imgSrc,
							contain: "",
							height: "28",
							"max-width": "28"
						}
					}) : e._e()], 1)], 1)], 1)], 1)]
				}))], 2)
			}),
			h = [],
			m = (n("25f0"), {
				name: "ResourceSelection",
				props: ["globals"],
				data: function() {
					return {
						images: {
							bgSrc: "back ground.png",
							bgLazySrc: "back ground.png",
							characterSrc: "robuxman.png",
							characterLazySrc: "robuxman.png"
						},
						resources: [{
							id: 1,
							price: "4,99",
							amount1: 400,
							amount2: 200,
							tix: {
								imgSrc: "data:image/png;base64,UklGRgIIAABXRUJQVlA4WAoAAAAQAAAAdwAAdwAAQUxQSAQEAAABoGsBtNpG0jC1iZUMBZQjpxvmmSpcDXPP8Af7A7ydqR4GOzoZrlLSD2QiL/NuFdTYku45Xvu9++69r48ICW4bSZJkRwKxV3HvquonOCLa+XI669jY9mIUT3gWxi1FAHHg23cKjQOQlPttO7kaNLfiW3bq0Nqgz6JkCjVQJHndaw9U+gzKxq89W/b/Ic0EvjWQtmm53xII04pvBYRr4In/Vs2udjybIK0jHTKY8S7RkFGXBsSefA1MIxgyzOKAXMjKZBoQQaRCFBEKWZmOBkQTkZCVyTQgmiyNCISIkjztEgeRNX7ULQ0inIddsiDSebxLEETc+tMdciD62SUNorxYlyyI9mLdsiB7nI4c8kfU5z5+nKsbz5PhgZYOdjM8TCF/UT98uWfbtj1fVlPTWVps7tLyuCcDmjm5wWl0w9BvQNbkda8EaObYmuaf19YvVgn/lr3uIz3IX85047TU/xEIJ/C5oekTqp9aTwiETctZXmj6pMMVgLJPBaF3ZQ7+Rps08BihY5o/ikrzpUgdRkiZjQ+WWv7vlOO4JpAqG+7+BUA/gc8Eqfc7HAcgrZg4LgnkbLr5DzC17PNCm278B6qQO5zQxpuaQ+1M+LSQo861f4Gz9SlaSJPRkDUrL2ghTdae4Zyo2EkK6ed0lS2fS+2o53OTHbFyTa2QQVytaASh1pDnCjmX7NO/2aaDXOc59pxLBlVPrXHwc5Z+ooJLBsVfblT/73h9bJ2j6jpyJyq5ZBB82qO5F/wbnlmrc4RCAB+3ae8F4em1bE6tiITw0d8Lqto15IeMv7DhTssNt6pd5xmhljdNw++yUfVUE55Zp3P4IeSFhrY2PTo++BMUnT+7ltxZRUKGjwe/fn+y27v4ZhFAOXqHCzLu32F1AdRFOeaQiM9MAOWc+40FIh+cs6lEDHUWI+BrqFkHfyWFnBcrwNlPaqdt0ghCZKpOH62jDB7KOJj4EwnxmDiH5wyeanD1grRluJ3132GhvOtg65eBec5tbrpnDIR4CN9shXn9tTTY1nb4uzA1gfBrEANvf5mcnEvxkFn7XnMPmECm7X2dMIcGEunQQDIdLNTh0DRb5lwpIJkOFtL8CHNHLEThCIUonPFlxQfkMTdE3e7BgZYOP4l5Ic52PYw5Id52c03UfDXe9VHMBfF319M6DyShO5BD8XwuYX0cE+95DcTtMELczqOYHJKzPk0oIVkdWSKEhGVgkQ6SFzJIYKggiSGCRIYGsjK1xrcKDQUkNEvGkOuIjTkkNV3jsSkkt97r2PDTP9GTGEGyJzCApNevoD8zkd/+cioOonxLNYRkO6Ig6rdU3VONPe0L8JAFDhaywklQkD1OVNIcW5yJOCq2OzY2O/2y05EQB1ZQOCDYAwAAUBcAnQEqeAB4AD4xEoVCoiEMeBABglN3BgAfwAZR/+Xl/5H+fcXTxX8H/L3QVnd9U/bb+f/bPyZ9wH+O9gHmAfoB+snWA/iHoA/m3/S/V32UP2O9wHoAfzPqAPQA/Zn0zvYY/cf91/aP6gDqb+gH8A/AD9FPz97/Cb19LeoJNqp+OSnEazC9fagI0/rFuWiogf9h123jiHrVJIgA/8Hu/3IAPCh7M58O1UkFVAUy7x2JUVVpEZBTIzbpdQHKRNUuBOwAAP5ccBxcS/KjNd3+1nVS74sBi2deHDHo8/rxWgSeQSZSzjBSckmEyzQFMtbh9Sneo+13xq8sU3RVgq6SILymNakou3Eazw/gJjyqd5UTsak9m6s6XTQvLjNoQaXf1FaFViSXeAOnDHnW0LI5esYffs+slSIzmJLEAZQeJ1eOB9t+X53fBly4qv/08sgx5VO8qJ2NSezdWdLpoXlxm0INLv6itCqxJLvAHThjzraFkck8NPtlaEzLSH9oSt3hKdnl/9WGXtCPGueLmAIXxQ7p9ox6uqR47pFOgoCoxSIv185PuRtShMn4mqJ7xy6WH8VlvgEVIbyq95lVVHdHKL/hjZOJWRxto8nM/69N8avT7Q61sx3lUmG65KRZKlVbKGCVGdLWVl7DNvsailrJ0mxvCJFTGPdfeeA6cNGj3/x0tXDNca54uYtfOB4g+SK9b+itfW5b2eWYrrskE/EXukPgH8MXC6iHUkVkWflciKGvv/zT0fgGcv1uC/T1IbqmJRH45T8IYtrvz519cJV1pqH1eMhtEVbmpbp6zL3LtkRE9oKIsd6C8Odi4Dr8EVvk3SSeFycbJKio9iZZjlEebxsL30h9CSOHw4rYWEFuKN99XmqtIz/x5/xgY8NZoA6Zv0e0fwqkYyo7G3MEO/+emqodl5MHDi65nDnnb+oA+tyf9OhWgkM72RtoiYbPWx0AVdXrMvcu2LqMJlmNx5Y9cUIy7aAzScdQjijz5kTBqb4YzpNYvzksYttrO7mN1qo//7TH//Z8P//tC7EEmwcdjx6pKPcK05InjV/GUNgLhO+FgiB+djxFVb4EWilGMdHXwIAZ6FmI4IRrRKt/b+WPXFCMu2gM0nHUI4o8+ZEwam+GM6TWL85LGLatOQJf/7c0fpE7tCt8ahZQhrPh9+NLidto2ZbMvV/q6wj5Y9cUIy7aAzScdQjijz5kTBqb4YzpNYvzksYtq05AlwAD3/wyfy2+r7pTc636BYY8Nl5spKtyXAJiaQ+pr6boMF+JVOIjDgo9f1da+DBpJ2EZvv2AUy9NCGgA/4AA"
							}
						}, {
							id: 2,
							price: "9,99",
							amount1: 800,
							amount2: 400,
							tix: {
								imgSrc: "data:image/png;base64,UklGRgIIAABXRUJQVlA4WAoAAAAQAAAAdwAAdwAAQUxQSAQEAAABoGsBtNpG0jC1iZUMBZQjpxvmmSpcDXPP8Af7A7ydqR4GOzoZrlLSD2QiL/NuFdTYku45Xvu9++69r48ICW4bSZJkRwKxV3HvquonOCLa+XI669jY9mIUT3gWxi1FAHHg23cKjQOQlPttO7kaNLfiW3bq0Nqgz6JkCjVQJHndaw9U+gzKxq89W/b/Ic0EvjWQtmm53xII04pvBYRr4In/Vs2udjybIK0jHTKY8S7RkFGXBsSefA1MIxgyzOKAXMjKZBoQQaRCFBEKWZmOBkQTkZCVyTQgmiyNCISIkjztEgeRNX7ULQ0inIddsiDSebxLEETc+tMdciD62SUNorxYlyyI9mLdsiB7nI4c8kfU5z5+nKsbz5PhgZYOdjM8TCF/UT98uWfbtj1fVlPTWVps7tLyuCcDmjm5wWl0w9BvQNbkda8EaObYmuaf19YvVgn/lr3uIz3IX85047TU/xEIJ/C5oekTqp9aTwiETctZXmj6pMMVgLJPBaF3ZQ7+Rps08BihY5o/ikrzpUgdRkiZjQ+WWv7vlOO4JpAqG+7+BUA/gc8Eqfc7HAcgrZg4LgnkbLr5DzC17PNCm278B6qQO5zQxpuaQ+1M+LSQo861f4Gz9SlaSJPRkDUrL2ghTdae4Zyo2EkK6ed0lS2fS+2o53OTHbFyTa2QQVytaASh1pDnCjmX7NO/2aaDXOc59pxLBlVPrXHwc5Z+ooJLBsVfblT/73h9bJ2j6jpyJyq5ZBB82qO5F/wbnlmrc4RCAB+3ae8F4em1bE6tiITw0d8Lqto15IeMv7DhTssNt6pd5xmhljdNw++yUfVUE55Zp3P4IeSFhrY2PTo++BMUnT+7ltxZRUKGjwe/fn+y27v4ZhFAOXqHCzLu32F1AdRFOeaQiM9MAOWc+40FIh+cs6lEDHUWI+BrqFkHfyWFnBcrwNlPaqdt0ghCZKpOH62jDB7KOJj4EwnxmDiH5wyeanD1grRluJ3132GhvOtg65eBec5tbrpnDIR4CN9shXn9tTTY1nb4uzA1gfBrEANvf5mcnEvxkFn7XnMPmECm7X2dMIcGEunQQDIdLNTh0DRb5lwpIJkOFtL8CHNHLEThCIUonPFlxQfkMTdE3e7BgZYOP4l5Ic52PYw5Id52c03UfDXe9VHMBfF319M6DyShO5BD8XwuYX0cE+95DcTtMELczqOYHJKzPk0oIVkdWSKEhGVgkQ6SFzJIYKggiSGCRIYGsjK1xrcKDQUkNEvGkOuIjTkkNV3jsSkkt97r2PDTP9GTGEGyJzCApNevoD8zkd/+cioOonxLNYRkO6Ig6rdU3VONPe0L8JAFDhaywklQkD1OVNIcW5yJOCq2OzY2O/2y05EQB1ZQOCDYAwAAUBcAnQEqeAB4AD4xEoVCoiEMeBABglN3BgAfwAZR/+Xl/5H+fcXTxX8H/L3QVnd9U/bb+f/bPyZ9wH+O9gHmAfoB+snWA/iHoA/m3/S/V32UP2O9wHoAfzPqAPQA/Zn0zvYY/cf91/aP6gDqb+gH8A/AD9FPz97/Cb19LeoJNqp+OSnEazC9fagI0/rFuWiogf9h123jiHrVJIgA/8Hu/3IAPCh7M58O1UkFVAUy7x2JUVVpEZBTIzbpdQHKRNUuBOwAAP5ccBxcS/KjNd3+1nVS74sBi2deHDHo8/rxWgSeQSZSzjBSckmEyzQFMtbh9Sneo+13xq8sU3RVgq6SILymNakou3Eazw/gJjyqd5UTsak9m6s6XTQvLjNoQaXf1FaFViSXeAOnDHnW0LI5esYffs+slSIzmJLEAZQeJ1eOB9t+X53fBly4qv/08sgx5VO8qJ2NSezdWdLpoXlxm0INLv6itCqxJLvAHThjzraFkck8NPtlaEzLSH9oSt3hKdnl/9WGXtCPGueLmAIXxQ7p9ox6uqR47pFOgoCoxSIv185PuRtShMn4mqJ7xy6WH8VlvgEVIbyq95lVVHdHKL/hjZOJWRxto8nM/69N8avT7Q61sx3lUmG65KRZKlVbKGCVGdLWVl7DNvsailrJ0mxvCJFTGPdfeeA6cNGj3/x0tXDNca54uYtfOB4g+SK9b+itfW5b2eWYrrskE/EXukPgH8MXC6iHUkVkWflciKGvv/zT0fgGcv1uC/T1IbqmJRH45T8IYtrvz519cJV1pqH1eMhtEVbmpbp6zL3LtkRE9oKIsd6C8Odi4Dr8EVvk3SSeFycbJKio9iZZjlEebxsL30h9CSOHw4rYWEFuKN99XmqtIz/x5/xgY8NZoA6Zv0e0fwqkYyo7G3MEO/+emqodl5MHDi65nDnnb+oA+tyf9OhWgkM72RtoiYbPWx0AVdXrMvcu2LqMJlmNx5Y9cUIy7aAzScdQjijz5kTBqb4YzpNYvzksYttrO7mN1qo//7TH//Z8P//tC7EEmwcdjx6pKPcK05InjV/GUNgLhO+FgiB+djxFVb4EWilGMdHXwIAZ6FmI4IRrRKt/b+WPXFCMu2gM0nHUI4o8+ZEwam+GM6TWL85LGLatOQJf/7c0fpE7tCt8ahZQhrPh9+NLidto2ZbMvV/q6wj5Y9cUIy7aAzScdQjijz5kTBqb4YzpNYvzksYtq05AlwAD3/wyfy2+r7pTc636BYY8Nl5spKtyXAJiaQ+pr6boMF+JVOIjDgo9f1da+DBpJ2EZvv2AUy9NCGgA/4AA"
							}
						}, {
							id: 3,
							price: "19,99",
							amount1: 1700,
							amount2: 850,
							tix: {
								imgSrc: "data:image/png;base64,UklGRgIIAABXRUJQVlA4WAoAAAAQAAAAdwAAdwAAQUxQSAQEAAABoGsBtNpG0jC1iZUMBZQjpxvmmSpcDXPP8Af7A7ydqR4GOzoZrlLSD2QiL/NuFdTYku45Xvu9++69r48ICW4bSZJkRwKxV3HvquonOCLa+XI669jY9mIUT3gWxi1FAHHg23cKjQOQlPttO7kaNLfiW3bq0Nqgz6JkCjVQJHndaw9U+gzKxq89W/b/Ic0EvjWQtmm53xII04pvBYRr4In/Vs2udjybIK0jHTKY8S7RkFGXBsSefA1MIxgyzOKAXMjKZBoQQaRCFBEKWZmOBkQTkZCVyTQgmiyNCISIkjztEgeRNX7ULQ0inIddsiDSebxLEETc+tMdciD62SUNorxYlyyI9mLdsiB7nI4c8kfU5z5+nKsbz5PhgZYOdjM8TCF/UT98uWfbtj1fVlPTWVps7tLyuCcDmjm5wWl0w9BvQNbkda8EaObYmuaf19YvVgn/lr3uIz3IX85047TU/xEIJ/C5oekTqp9aTwiETctZXmj6pMMVgLJPBaF3ZQ7+Rps08BihY5o/ikrzpUgdRkiZjQ+WWv7vlOO4JpAqG+7+BUA/gc8Eqfc7HAcgrZg4LgnkbLr5DzC17PNCm278B6qQO5zQxpuaQ+1M+LSQo861f4Gz9SlaSJPRkDUrL2ghTdae4Zyo2EkK6ed0lS2fS+2o53OTHbFyTa2QQVytaASh1pDnCjmX7NO/2aaDXOc59pxLBlVPrXHwc5Z+ooJLBsVfblT/73h9bJ2j6jpyJyq5ZBB82qO5F/wbnlmrc4RCAB+3ae8F4em1bE6tiITw0d8Lqto15IeMv7DhTssNt6pd5xmhljdNw++yUfVUE55Zp3P4IeSFhrY2PTo++BMUnT+7ltxZRUKGjwe/fn+y27v4ZhFAOXqHCzLu32F1AdRFOeaQiM9MAOWc+40FIh+cs6lEDHUWI+BrqFkHfyWFnBcrwNlPaqdt0ghCZKpOH62jDB7KOJj4EwnxmDiH5wyeanD1grRluJ3132GhvOtg65eBec5tbrpnDIR4CN9shXn9tTTY1nb4uzA1gfBrEANvf5mcnEvxkFn7XnMPmECm7X2dMIcGEunQQDIdLNTh0DRb5lwpIJkOFtL8CHNHLEThCIUonPFlxQfkMTdE3e7BgZYOP4l5Ic52PYw5Id52c03UfDXe9VHMBfF319M6DyShO5BD8XwuYX0cE+95DcTtMELczqOYHJKzPk0oIVkdWSKEhGVgkQ6SFzJIYKggiSGCRIYGsjK1xrcKDQUkNEvGkOuIjTkkNV3jsSkkt97r2PDTP9GTGEGyJzCApNevoD8zkd/+cioOonxLNYRkO6Ig6rdU3VONPe0L8JAFDhaywklQkD1OVNIcW5yJOCq2OzY2O/2y05EQB1ZQOCDYAwAAUBcAnQEqeAB4AD4xEoVCoiEMeBABglN3BgAfwAZR/+Xl/5H+fcXTxX8H/L3QVnd9U/bb+f/bPyZ9wH+O9gHmAfoB+snWA/iHoA/m3/S/V32UP2O9wHoAfzPqAPQA/Zn0zvYY/cf91/aP6gDqb+gH8A/AD9FPz97/Cb19LeoJNqp+OSnEazC9fagI0/rFuWiogf9h123jiHrVJIgA/8Hu/3IAPCh7M58O1UkFVAUy7x2JUVVpEZBTIzbpdQHKRNUuBOwAAP5ccBxcS/KjNd3+1nVS74sBi2deHDHo8/rxWgSeQSZSzjBSckmEyzQFMtbh9Sneo+13xq8sU3RVgq6SILymNakou3Eazw/gJjyqd5UTsak9m6s6XTQvLjNoQaXf1FaFViSXeAOnDHnW0LI5esYffs+slSIzmJLEAZQeJ1eOB9t+X53fBly4qv/08sgx5VO8qJ2NSezdWdLpoXlxm0INLv6itCqxJLvAHThjzraFkck8NPtlaEzLSH9oSt3hKdnl/9WGXtCPGueLmAIXxQ7p9ox6uqR47pFOgoCoxSIv185PuRtShMn4mqJ7xy6WH8VlvgEVIbyq95lVVHdHKL/hjZOJWRxto8nM/69N8avT7Q61sx3lUmG65KRZKlVbKGCVGdLWVl7DNvsailrJ0mxvCJFTGPdfeeA6cNGj3/x0tXDNca54uYtfOB4g+SK9b+itfW5b2eWYrrskE/EXukPgH8MXC6iHUkVkWflciKGvv/zT0fgGcv1uC/T1IbqmJRH45T8IYtrvz519cJV1pqH1eMhtEVbmpbp6zL3LtkRE9oKIsd6C8Odi4Dr8EVvk3SSeFycbJKio9iZZjlEebxsL30h9CSOHw4rYWEFuKN99XmqtIz/x5/xgY8NZoA6Zv0e0fwqkYyo7G3MEO/+emqodl5MHDi65nDnnb+oA+tyf9OhWgkM72RtoiYbPWx0AVdXrMvcu2LqMJlmNx5Y9cUIy7aAzScdQjijz5kTBqb4YzpNYvzksYttrO7mN1qo//7TH//Z8P//tC7EEmwcdjx6pKPcK05InjV/GUNgLhO+FgiB+djxFVb4EWilGMdHXwIAZ6FmI4IRrRKt/b+WPXFCMu2gM0nHUI4o8+ZEwam+GM6TWL85LGLatOQJf/7c0fpE7tCt8ahZQhrPh9+NLidto2ZbMvV/q6wj5Y9cUIy7aAzScdQjijz5kTBqb4YzpNYvzksYtq05AlwAD3/wyfy2+r7pTc636BYY8Nl5spKtyXAJiaQ+pr6boMF+JVOIjDgo9f1da+DBpJ2EZvv2AUy9NCGgA/4AA"
							}
						}, {
							id: 4,
							price: "49,99",
							amount1: 4500,
							amount2: 2250,
							tix: {
								imgSrc: "data:image/png;base64,UklGRgIIAABXRUJQVlA4WAoAAAAQAAAAdwAAdwAAQUxQSAQEAAABoGsBtNpG0jC1iZUMBZQjpxvmmSpcDXPP8Af7A7ydqR4GOzoZrlLSD2QiL/NuFdTYku45Xvu9++69r48ICW4bSZJkRwKxV3HvquonOCLa+XI669jY9mIUT3gWxi1FAHHg23cKjQOQlPttO7kaNLfiW3bq0Nqgz6JkCjVQJHndaw9U+gzKxq89W/b/Ic0EvjWQtmm53xII04pvBYRr4In/Vs2udjybIK0jHTKY8S7RkFGXBsSefA1MIxgyzOKAXMjKZBoQQaRCFBEKWZmOBkQTkZCVyTQgmiyNCISIkjztEgeRNX7ULQ0inIddsiDSebxLEETc+tMdciD62SUNorxYlyyI9mLdsiB7nI4c8kfU5z5+nKsbz5PhgZYOdjM8TCF/UT98uWfbtj1fVlPTWVps7tLyuCcDmjm5wWl0w9BvQNbkda8EaObYmuaf19YvVgn/lr3uIz3IX85047TU/xEIJ/C5oekTqp9aTwiETctZXmj6pMMVgLJPBaF3ZQ7+Rps08BihY5o/ikrzpUgdRkiZjQ+WWv7vlOO4JpAqG+7+BUA/gc8Eqfc7HAcgrZg4LgnkbLr5DzC17PNCm278B6qQO5zQxpuaQ+1M+LSQo861f4Gz9SlaSJPRkDUrL2ghTdae4Zyo2EkK6ed0lS2fS+2o53OTHbFyTa2QQVytaASh1pDnCjmX7NO/2aaDXOc59pxLBlVPrXHwc5Z+ooJLBsVfblT/73h9bJ2j6jpyJyq5ZBB82qO5F/wbnlmrc4RCAB+3ae8F4em1bE6tiITw0d8Lqto15IeMv7DhTssNt6pd5xmhljdNw++yUfVUE55Zp3P4IeSFhrY2PTo++BMUnT+7ltxZRUKGjwe/fn+y27v4ZhFAOXqHCzLu32F1AdRFOeaQiM9MAOWc+40FIh+cs6lEDHUWI+BrqFkHfyWFnBcrwNlPaqdt0ghCZKpOH62jDB7KOJj4EwnxmDiH5wyeanD1grRluJ3132GhvOtg65eBec5tbrpnDIR4CN9shXn9tTTY1nb4uzA1gfBrEANvf5mcnEvxkFn7XnMPmECm7X2dMIcGEunQQDIdLNTh0DRb5lwpIJkOFtL8CHNHLEThCIUonPFlxQfkMTdE3e7BgZYOP4l5Ic52PYw5Id52c03UfDXe9VHMBfF319M6DyShO5BD8XwuYX0cE+95DcTtMELczqOYHJKzPk0oIVkdWSKEhGVgkQ6SFzJIYKggiSGCRIYGsjK1xrcKDQUkNEvGkOuIjTkkNV3jsSkkt97r2PDTP9GTGEGyJzCApNevoD8zkd/+cioOonxLNYRkO6Ig6rdU3VONPe0L8JAFDhaywklQkD1OVNIcW5yJOCq2OzY2O/2y05EQB1ZQOCDYAwAAUBcAnQEqeAB4AD4xEoVCoiEMeBABglN3BgAfwAZR/+Xl/5H+fcXTxX8H/L3QVnd9U/bb+f/bPyZ9wH+O9gHmAfoB+snWA/iHoA/m3/S/V32UP2O9wHoAfzPqAPQA/Zn0zvYY/cf91/aP6gDqb+gH8A/AD9FPz97/Cb19LeoJNqp+OSnEazC9fagI0/rFuWiogf9h123jiHrVJIgA/8Hu/3IAPCh7M58O1UkFVAUy7x2JUVVpEZBTIzbpdQHKRNUuBOwAAP5ccBxcS/KjNd3+1nVS74sBi2deHDHo8/rxWgSeQSZSzjBSckmEyzQFMtbh9Sneo+13xq8sU3RVgq6SILymNakou3Eazw/gJjyqd5UTsak9m6s6XTQvLjNoQaXf1FaFViSXeAOnDHnW0LI5esYffs+slSIzmJLEAZQeJ1eOB9t+X53fBly4qv/08sgx5VO8qJ2NSezdWdLpoXlxm0INLv6itCqxJLvAHThjzraFkck8NPtlaEzLSH9oSt3hKdnl/9WGXtCPGueLmAIXxQ7p9ox6uqR47pFOgoCoxSIv185PuRtShMn4mqJ7xy6WH8VlvgEVIbyq95lVVHdHKL/hjZOJWRxto8nM/69N8avT7Q61sx3lUmG65KRZKlVbKGCVGdLWVl7DNvsailrJ0mxvCJFTGPdfeeA6cNGj3/x0tXDNca54uYtfOB4g+SK9b+itfW5b2eWYrrskE/EXukPgH8MXC6iHUkVkWflciKGvv/zT0fgGcv1uC/T1IbqmJRH45T8IYtrvz519cJV1pqH1eMhtEVbmpbp6zL3LtkRE9oKIsd6C8Odi4Dr8EVvk3SSeFycbJKio9iZZjlEebxsL30h9CSOHw4rYWEFuKN99XmqtIz/x5/xgY8NZoA6Zv0e0fwqkYyo7G3MEO/+emqodl5MHDi65nDnnb+oA+tyf9OhWgkM72RtoiYbPWx0AVdXrMvcu2LqMJlmNx5Y9cUIy7aAzScdQjijz5kTBqb4YzpNYvzksYttrO7mN1qo//7TH//Z8P//tC7EEmwcdjx6pKPcK05InjV/GUNgLhO+FgiB+djxFVb4EWilGMdHXwIAZ6FmI4IRrRKt/b+WPXFCMu2gM0nHUI4o8+ZEwam+GM6TWL85LGLatOQJf/7c0fpE7tCt8ahZQhrPh9+NLidto2ZbMvV/q6wj5Y9cUIy7aAzScdQjijz5kTBqb4YzpNYvzksYtq05AlwAD3/wyfy2+r7pTc636BYY8Nl5spKtyXAJiaQ+pr6boMF+JVOIjDgo9f1da+DBpJ2EZvv2AUy9NCGgA/4AA"
							}
						}, {
							id: 5,
							price: "99,99",
							amount1: 1e4,
							amount2: 5e3,
							tix: {
								imgSrc: "data:image/png;base64,UklGRgIIAABXRUJQVlA4WAoAAAAQAAAAdwAAdwAAQUxQSAQEAAABoGsBtNpG0jC1iZUMBZQjpxvmmSpcDXPP8Af7A7ydqR4GOzoZrlLSD2QiL/NuFdTYku45Xvu9++69r48ICW4bSZJkRwKxV3HvquonOCLa+XI669jY9mIUT3gWxi1FAHHg23cKjQOQlPttO7kaNLfiW3bq0Nqgz6JkCjVQJHndaw9U+gzKxq89W/b/Ic0EvjWQtmm53xII04pvBYRr4In/Vs2udjybIK0jHTKY8S7RkFGXBsSefA1MIxgyzOKAXMjKZBoQQaRCFBEKWZmOBkQTkZCVyTQgmiyNCISIkjztEgeRNX7ULQ0inIddsiDSebxLEETc+tMdciD62SUNorxYlyyI9mLdsiB7nI4c8kfU5z5+nKsbz5PhgZYOdjM8TCF/UT98uWfbtj1fVlPTWVps7tLyuCcDmjm5wWl0w9BvQNbkda8EaObYmuaf19YvVgn/lr3uIz3IX85047TU/xEIJ/C5oekTqp9aTwiETctZXmj6pMMVgLJPBaF3ZQ7+Rps08BihY5o/ikrzpUgdRkiZjQ+WWv7vlOO4JpAqG+7+BUA/gc8Eqfc7HAcgrZg4LgnkbLr5DzC17PNCm278B6qQO5zQxpuaQ+1M+LSQo861f4Gz9SlaSJPRkDUrL2ghTdae4Zyo2EkK6ed0lS2fS+2o53OTHbFyTa2QQVytaASh1pDnCjmX7NO/2aaDXOc59pxLBlVPrXHwc5Z+ooJLBsVfblT/73h9bJ2j6jpyJyq5ZBB82qO5F/wbnlmrc4RCAB+3ae8F4em1bE6tiITw0d8Lqto15IeMv7DhTssNt6pd5xmhljdNw++yUfVUE55Zp3P4IeSFhrY2PTo++BMUnT+7ltxZRUKGjwe/fn+y27v4ZhFAOXqHCzLu32F1AdRFOeaQiM9MAOWc+40FIh+cs6lEDHUWI+BrqFkHfyWFnBcrwNlPaqdt0ghCZKpOH62jDB7KOJj4EwnxmDiH5wyeanD1grRluJ3132GhvOtg65eBec5tbrpnDIR4CN9shXn9tTTY1nb4uzA1gfBrEANvf5mcnEvxkFn7XnMPmECm7X2dMIcGEunQQDIdLNTh0DRb5lwpIJkOFtL8CHNHLEThCIUonPFlxQfkMTdE3e7BgZYOP4l5Ic52PYw5Id52c03UfDXe9VHMBfF319M6DyShO5BD8XwuYX0cE+95DcTtMELczqOYHJKzPk0oIVkdWSKEhGVgkQ6SFzJIYKggiSGCRIYGsjK1xrcKDQUkNEvGkOuIjTkkNV3jsSkkt97r2PDTP9GTGEGyJzCApNevoD8zkd/+cioOonxLNYRkO6Ig6rdU3VONPe0L8JAFDhaywklQkD1OVNIcW5yJOCq2OzY2O/2y05EQB1ZQOCDYAwAAUBcAnQEqeAB4AD4xEoVCoiEMeBABglN3BgAfwAZR/+Xl/5H+fcXTxX8H/L3QVnd9U/bb+f/bPyZ9wH+O9gHmAfoB+snWA/iHoA/m3/S/V32UP2O9wHoAfzPqAPQA/Zn0zvYY/cf91/aP6gDqb+gH8A/AD9FPz97/Cb19LeoJNqp+OSnEazC9fagI0/rFuWiogf9h123jiHrVJIgA/8Hu/3IAPCh7M58O1UkFVAUy7x2JUVVpEZBTIzbpdQHKRNUuBOwAAP5ccBxcS/KjNd3+1nVS74sBi2deHDHo8/rxWgSeQSZSzjBSckmEyzQFMtbh9Sneo+13xq8sU3RVgq6SILymNakou3Eazw/gJjyqd5UTsak9m6s6XTQvLjNoQaXf1FaFViSXeAOnDHnW0LI5esYffs+slSIzmJLEAZQeJ1eOB9t+X53fBly4qv/08sgx5VO8qJ2NSezdWdLpoXlxm0INLv6itCqxJLvAHThjzraFkck8NPtlaEzLSH9oSt3hKdnl/9WGXtCPGueLmAIXxQ7p9ox6uqR47pFOgoCoxSIv185PuRtShMn4mqJ7xy6WH8VlvgEVIbyq95lVVHdHKL/hjZOJWRxto8nM/69N8avT7Q61sx3lUmG65KRZKlVbKGCVGdLWVl7DNvsailrJ0mxvCJFTGPdfeeA6cNGj3/x0tXDNca54uYtfOB4g+SK9b+itfW5b2eWYrrskE/EXukPgH8MXC6iHUkVkWflciKGvv/zT0fgGcv1uC/T1IbqmJRH45T8IYtrvz519cJV1pqH1eMhtEVbmpbp6zL3LtkRE9oKIsd6C8Odi4Dr8EVvk3SSeFycbJKio9iZZjlEebxsL30h9CSOHw4rYWEFuKN99XmqtIz/x5/xgY8NZoA6Zv0e0fwqkYyo7G3MEO/+emqodl5MHDi65nDnnb+oA+tyf9OhWgkM72RtoiYbPWx0AVdXrMvcu2LqMJlmNx5Y9cUIy7aAzScdQjijz5kTBqb4YzpNYvzksYttrO7mN1qo//7TH//Z8P//tC7EEmwcdjx6pKPcK05InjV/GUNgLhO+FgiB+djxFVb4EWilGMdHXwIAZ6FmI4IRrRKt/b+WPXFCMu2gM0nHUI4o8+ZEwam+GM6TWL85LGLatOQJf/7c0fpE7tCt8ahZQhrPh9+NLidto2ZbMvV/q6wj5Y9cUIy7aAzScdQjijz5kTBqb4YzpNYvzksYtq05AlwAD3/wyfy2+r7pTc636BYY8Nl5spKtyXAJiaQ+pr6boMF+JVOIjDgo9f1da+DBpJ2EZvv2AUy9NCGgA/4AA"
							}
						}],
						selectedResource: !1
					}
				},
				methods: {
					getButtonStyle: function() {
						switch (this.$vuetify.breakpoint.name) {
							case "xs":
								return "min-width: 100%;";
							case "sm":
								return "min-width: 100%;";
							case "md":
								return "min-width: 80%;";
							case "lg":
								return "min-width: 60%;";
							case "xl":
								return "min-width: 60%;"
						}
					},
					selectResource: function(e) {
						var t = this;
						this.selectedResource = e.id, this.$emit("play-sound", "select"), setTimeout((function() {
							t.$emit("resource-selected", e)
						}), 500)
					},
					numberWithCommas: function(e) {
						return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
					}
				}
			}),
			g = m;

		function v(e, t, n, f, r, i, o, a) {
			var s, c = "function" === typeof e ? e.options : e;
			if (t && (c.render = t, c.staticRenderFns = n, c._compiled = !0), f && (c.functional = !0), i && (c._scopeId = "data-v-" + i), o ? (s = function(e) {
					e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, e || "undefined" === typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), r && r.call(this, e), e && e._registeredComponents && e._registeredComponents.add(o)
				}, c._ssrRegister = s) : r && (s = a ? function() {
					r.call(this, this.$root.$options.shadowRoot)
				} : r), s)
				if (c.functional) {
					c._injectStyles = s;
					var l = c.render;
					c.render = function(e, t) {
						return s.call(t), l(e, t)
					}
				} else {
					var u = c.beforeCreate;
					c.beforeCreate = u ? [].concat(u, s) : [s]
				} return {
				exports: e,
				options: c
			}
		}
		var b = n("6544"),
			y = n.n(b);
		n("4160"), n("caad"), n("c7cd"), n("a4d3"), n("e01a"), n("d28b"), n("3ca3"), n("ddb0");

		function _(e) {
			return _ = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			}, _(e)
		}

		function w(e) {
			if (Array.isArray(e)) return e
		}

		function x(e, t) {
			if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) {
				var n = [],
					f = !0,
					r = !1,
					i = void 0;
				try {
					for (var o, a = e[Symbol.iterator](); !(f = (o = a.next()).done); f = !0)
						if (n.push(o.value), t && n.length === t) break
				} catch (s) {
					r = !0, i = s
				} finally {
					try {
						f || null == a["return"] || a["return"]()
					} finally {
						if (r) throw i
					}
				}
				return n
			}
		}
		n("a630"), n("fb6a");

		function k(e, t) {
			(null == t || t > e.length) && (t = e.length);
			for (var n = 0, f = new Array(t); n < t; n++) f[n] = e[n];
			return f
		}

		function C(e, t) {
			if (e) {
				if ("string" === typeof e) return k(e, t);
				var n = Object.prototype.toString.call(e).slice(8, -1);
				return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? k(e, t) : void 0
			}
		}

		function S() {
			throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}

		function A(e, t) {
			return w(e) || x(e, t) || C(e, t) || S()
		}
		n("4de4"), n("e439"), n("dbb4"), n("b64b"), n("159b");

		function O(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}

		function E(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var f = Object.getOwnPropertySymbols(e);
				t && (f = f.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, f)
			}
			return n
		}

		function T(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? E(Object(n), !0).forEach((function(t) {
					O(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : E(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}
		n("86cc"), n("25a8");

		function j(e) {
			return function(t, n) {
				for (var f in n) Object.prototype.hasOwnProperty.call(t, f) || this.$delete(this.$data[e], f);
				for (var r in t) this.$set(this.$data[e], r, t[r])
			}
		}
		var L = r["a"].extend({
			data: function() {
				return {
					attrs$: {},
					listeners$: {}
				}
			},
			created: function() {
				this.$watch("$attrs", j("attrs$"), {
					immediate: !0
				}), this.$watch("$listeners", j("listeners$"), {
					immediate: !0
				})
			}
		});
		n("466d"), n("1276"), n("498a"), n("99af"), n("a15b"), n("d81d"), n("2532"), n("38cf");

		function I(e, t, n) {
			if (n && (t = {
					_isVue: !0,
					$parent: n,
					$options: t
				}), t) {
				if (t.$_alreadyWarned = t.$_alreadyWarned || [], t.$_alreadyWarned.includes(e)) return;
				t.$_alreadyWarned.push(e)
			}
			return "[Vuetify] ".concat(e) + (t ? D(t) : "")
		}

		function M(e, t, n) {
			var f = I(e, t, n);
			null != f && console.warn(f)
		}

		function N(e, t, n) {
			var f = I(e, t, n);
			null != f && console.error(f)
		}

		function P(e, t, n, f) {
			N("[BREAKING] '".concat(e, "' has been removed, use '").concat(t, "' instead. For more information, see the upgrade guide https://github.com/vuetifyjs/vuetify/releases/tag/v2.0.0#user-content-upgrade-guide"), n, f)
		}

		function B(e, t, n) {
			M("[REMOVED] '".concat(e, "' has been removed. You can safely omit it."), t, n)
		}
		var $ = /(?:^|[-_])(\w)/g,
			z = function(e) {
				return e.replace($, (function(e) {
					return e.toUpperCase()
				})).replace(/[-_]/g, "")
			};

		function R(e, t) {
			if (e.$root === e) return "<Root>";
			var n = "function" === typeof e && null != e.cid ? e.options : e._isVue ? e.$options || e.constructor.options : e || {},
				f = n.name || n._componentTag,
				r = n.__file;
			if (!f && r) {
				var i = r.match(/([^/\\]+)\.vue$/);
				f = i && i[1]
			}
			return (f ? "<".concat(z(f), ">") : "<Anonymous>") + (r && !1 !== t ? " at ".concat(r) : "")
		}

		function D(e) {
			if (e._isVue && e.$parent) {
				var t = [],
					n = 0;
				while (e) {
					if (t.length > 0) {
						var f = t[t.length - 1];
						if (f.constructor === e.constructor) {
							n++, e = e.$parent;
							continue
						}
						n > 0 && (t[t.length - 1] = [f, n], n = 0)
					}
					t.push(e), e = e.$parent
				}
				return "\n\nfound in\n\n" + t.map((function(e, t) {
					return "".concat(0 === t ? "---\x3e " : " ".repeat(5 + 2 * t)).concat(Array.isArray(e) ? "".concat(R(e[0]), "... (").concat(e[1], " recursive calls)") : R(e))
				})).join("\n")
			}
			return "\n\n(found in ".concat(R(e), ")")
		}

		function V(e) {
			return !!e && !!e.match(/^(#|var\(--|(rgb|hsl)a?\()/)
		}
		var H = r["a"].extend({
				name: "colorable",
				props: {
					color: String
				},
				methods: {
					setBackgroundColor: function(e) {
						var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
						return "string" === typeof t.style ? (N("style must be an object", this), t) : "string" === typeof t.class ? (N("class must be an object", this), t) : (V(e) ? t.style = T({}, t.style, {
							"background-color": "".concat(e),
							"border-color": "".concat(e)
						}) : e && (t.class = T({}, t.class, O({}, e, !0))), t)
					},
					setTextColor: function(e) {
						var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
						if ("string" === typeof t.style) return N("style must be an object", this), t;
						if ("string" === typeof t.class) return N("class must be an object", this), t;
						if (V(e)) t.style = T({}, t.style, {
							color: "".concat(e),
							"caret-color": "".concat(e)
						});
						else if (e) {
							var n = e.toString().trim().split(" ", 2),
								f = A(n, 2),
								r = f[0],
								i = f[1];
							t.class = T({}, t.class, O({}, r + "--text", !0)), i && (t.class["text--" + i] = !0)
						}
						return t
					}
				}
			}),
			F = (n("a9e3"), r["a"].extend({
				name: "elevatable",
				props: {
					elevation: [Number, String]
				},
				computed: {
					computedElevation: function() {
						return this.elevation
					},
					elevationClasses: function() {
						var e = this.computedElevation;
						return null == e || isNaN(parseInt(e)) ? {} : O({}, "elevation-".concat(this.elevation), !0)
					}
				}
			}));
		n("a623"), n("c975"), n("13d5"), n("45fc"), n("b680"), n("dca8"), n("2ca0");

		function U(e) {
			var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "div",
				n = arguments.length > 2 ? arguments[2] : void 0;
			return r["a"].extend({
				name: n || e.replace(/__/g, "-"),
				functional: !0,
				render: function(n, f) {
					var r = f.data,
						i = f.children;
					return r.staticClass = "".concat(e, " ").concat(r.staticClass || "").trim(), n(t, r, i)
				}
			})
		}
		try {
			if ("undefined" !== typeof window) {
				var q = Object.defineProperty({}, "passive", {
					get: function() {
						!0
					}
				});
				window.addEventListener("testListener", q, q), window.removeEventListener("testListener", q, q)
			}
		} catch (va) {
			console.warn(va)
		}

		function W(e, t, n) {
			var f = t.length - 1;
			if (f < 0) return void 0 === e ? n : e;
			for (var r = 0; r < f; r++) {
				if (null == e) return n;
				e = e[t[r]]
			}
			return null == e || void 0 === e[t[f]] ? n : e[t[f]]
		}

		function Q(e, t, n) {
			return null != e && t && "string" === typeof t ? void 0 !== e[t] ? e[t] : (t = t.replace(/\[(\w+)\]/g, ".$1"), t = t.replace(/^\./, ""), W(e, t.split("."), n)) : n
		}

		function G(e, t) {
			for (var n = {}, f = 0; f < t.length; f++) {
				var r = t[f];
				"undefined" !== typeof e[r] && (n[r] = e[r])
			}
			return n
		}

		function Z(e) {
			var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "px";
			return null == e || "" === e ? void 0 : isNaN(+e) ? String(e) : "".concat(Number(e)).concat(t)
		}

		function Y(e) {
			return null !== e && "object" === _(e)
		}
		var J = Object.freeze({
			enter: 13,
			tab: 9,
			delete: 46,
			esc: 27,
			space: 32,
			up: 38,
			down: 40,
			left: 37,
			right: 39,
			end: 35,
			home: 36,
			del: 46,
			backspace: 8,
			insert: 45,
			pageup: 33,
			pagedown: 34
		});

		function X(e, t) {
			if (!t.startsWith("$")) return t;
			var n = "$vuetify.icons.values.".concat(t.split("$").pop().split(".").pop());
			return Q(e, n, t)
		}

		function K(e) {
			return Object.keys(e)
		}
		var ee = /-(\w)/g,
			te = function(e) {
				return e.replace(ee, (function(e, t) {
					return t ? t.toUpperCase() : ""
				}))
			};

		function ne(e) {
			return e.charAt(0).toUpperCase() + e.slice(1)
		}

		function fe(e) {
			var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default",
				n = arguments.length > 2 ? arguments[2] : void 0,
				f = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
			return e.$scopedSlots[t] ? e.$scopedSlots[t](n instanceof Function ? n() : n) : !e.$slots[t] || n && !f ? void 0 : e.$slots[t]
		}

		function re(e) {
			var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
				n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
			return Math.max(t, Math.min(n, e))
		}

		function ie() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
				t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
			for (var n in t) {
				var f = e[n],
					r = t[n];
				Y(f) && Y(r) ? e[n] = ie(f, r) : e[n] = r
			}
			return e
		}
		var oe = r["a"].extend({
			name: "measurable",
			props: {
				height: [Number, String],
				maxHeight: [Number, String],
				maxWidth: [Number, String],
				minHeight: [Number, String],
				minWidth: [Number, String],
				width: [Number, String]
			},
			computed: {
				measurableStyles: function() {
					var e = {},
						t = Z(this.height),
						n = Z(this.minHeight),
						f = Z(this.minWidth),
						r = Z(this.maxHeight),
						i = Z(this.maxWidth),
						o = Z(this.width);
					return t && (e.height = t), n && (e.minHeight = n), f && (e.minWidth = f), r && (e.maxHeight = r), i && (e.maxWidth = i), o && (e.width = o), e
				}
			}
		});
		var ae = r["a"].extend().extend({
				name: "themeable",
				provide: function() {
					return {
						theme: this.themeableProvide
					}
				},
				inject: {
					theme: {
						default: {
							isDark: !1
						}
					}
				},
				props: {
					dark: {
						type: Boolean,
						default: null
					},
					light: {
						type: Boolean,
						default: null
					}
				},
				data: function() {
					return {
						themeableProvide: {
							isDark: !1
						}
					}
				},
				computed: {
					appIsDark: function() {
						return this.$vuetify.theme.dark || !1
					},
					isDark: function() {
						return !0 === this.dark || !0 !== this.light && this.theme.isDark
					},
					themeClasses: function() {
						return {
							"theme--dark": this.isDark,
							"theme--light": !this.isDark
						}
					},
					rootIsDark: function() {
						return !0 === this.dark || !0 !== this.light && this.appIsDark
					},
					rootThemeClasses: function() {
						return {
							"theme--dark": this.rootIsDark,
							"theme--light": !this.rootIsDark
						}
					}
				},
				watch: {
					isDark: {
						handler: function(e, t) {
							e !== t && (this.themeableProvide.isDark = this.isDark)
						},
						immediate: !0
					}
				}
			}),
			se = ae;

		function ce() {
			for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
			return r["a"].extend({
				mixins: t
			})
		}
		var le = ce(L, H, F, oe, se).extend({
				name: "v-sheet",
				props: {
					tag: {
						type: String,
						default: "div"
					},
					tile: Boolean
				},
				computed: {
					classes: function() {
						return T({
							"v-sheet": !0,
							"v-sheet--tile": this.tile
						}, this.themeClasses, {}, this.elevationClasses)
					},
					styles: function() {
						return this.measurableStyles
					}
				},
				render: function(e) {
					var t = {
						class: this.classes,
						style: this.styles,
						on: this.listeners$
					};
					return e(this.tag, this.setBackgroundColor(this.color, t), this.$slots.default)
				}
			}),
			ue = le,
			de = (n("8d4f"), H.extend({
				name: "v-progress-circular",
				props: {
					button: Boolean,
					indeterminate: Boolean,
					rotate: {
						type: [Number, String],
						default: 0
					},
					size: {
						type: [Number, String],
						default: 32
					},
					width: {
						type: [Number, String],
						default: 4
					},
					value: {
						type: [Number, String],
						default: 0
					}
				},
				data: function() {
					return {
						radius: 20
					}
				},
				computed: {
					calculatedSize: function() {
						return Number(this.size) + (this.button ? 8 : 0)
					},
					circumference: function() {
						return 2 * Math.PI * this.radius
					},
					classes: function() {
						return {
							"v-progress-circular--indeterminate": this.indeterminate,
							"v-progress-circular--button": this.button
						}
					},
					normalizedValue: function() {
						return this.value < 0 ? 0 : this.value > 100 ? 100 : parseFloat(this.value)
					},
					strokeDashArray: function() {
						return Math.round(1e3 * this.circumference) / 1e3
					},
					strokeDashOffset: function() {
						return (100 - this.normalizedValue) / 100 * this.circumference + "px"
					},
					strokeWidth: function() {
						return Number(this.width) / +this.size * this.viewBoxSize * 2
					},
					styles: function() {
						return {
							height: Z(this.calculatedSize),
							width: Z(this.calculatedSize)
						}
					},
					svgStyles: function() {
						return {
							transform: "rotate(".concat(Number(this.rotate), "deg)")
						}
					},
					viewBoxSize: function() {
						return this.radius / (1 - Number(this.width) / +this.size)
					}
				},
				methods: {
					genCircle: function(e, t) {
						return this.$createElement("circle", {
							class: "v-progress-circular__".concat(e),
							attrs: {
								fill: "transparent",
								cx: 2 * this.viewBoxSize,
								cy: 2 * this.viewBoxSize,
								r: this.radius,
								"stroke-width": this.strokeWidth,
								"stroke-dasharray": this.strokeDashArray,
								"stroke-dashoffset": t
							}
						})
					},
					genSvg: function() {
						var e = [this.indeterminate || this.genCircle("underlay", 0), this.genCircle("overlay", this.strokeDashOffset)];
						return this.$createElement("svg", {
							style: this.svgStyles,
							attrs: {
								xmlns: "http://www.w3.org/2000/svg",
								viewBox: "".concat(this.viewBoxSize, " ").concat(this.viewBoxSize, " ").concat(2 * this.viewBoxSize, " ").concat(2 * this.viewBoxSize)
							}
						}, e)
					},
					genInfo: function() {
						return this.$createElement("div", {
							staticClass: "v-progress-circular__info"
						}, this.$slots.default)
					}
				},
				render: function(e) {
					return e("div", this.setTextColor(this.color, {
						staticClass: "v-progress-circular",
						attrs: {
							role: "progressbar",
							"aria-valuemin": 0,
							"aria-valuemax": 100,
							"aria-valuenow": this.indeterminate ? void 0 : this.normalizedValue
						},
						class: this.classes,
						style: this.styles,
						on: this.$listeners
					}), [this.genSvg(), this.genInfo()])
				}
			})),
			pe = de;

		function he(e, t) {
			return function() {
				return M("The ".concat(e, " component must be used inside a ").concat(t))
			}
		}

		function me(e, t, n) {
			var f = t && n ? {
				register: he(t, n),
				unregister: he(t, n)
			} : null;
			return r["a"].extend({
				name: "registrable-inject",
				inject: O({}, e, {
					default: f
				})
			})
		}

		function ge(e) {
			var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
			return r["a"].extend({
				name: "registrable-provide",
				methods: t ? {} : {
					register: null,
					unregister: null
				},
				provide: function() {
					return O({}, e, t ? this : {
						register: this.register,
						unregister: this.unregister
					})
				}
			})
		}

		function ve(e, t, n) {
			var f = me(e, t, n).extend({
				name: "groupable",
				props: {
					activeClass: {
						type: String,
						default: function() {
							if (this[e]) return this[e].activeClass
						}
					},
					disabled: Boolean
				},
				data: function() {
					return {
						isActive: !1
					}
				},
				computed: {
					groupClasses: function() {
						return this.activeClass ? O({}, this.activeClass, this.isActive) : {}
					}
				},
				created: function() {
					this[e] && this[e].register(this)
				},
				beforeDestroy: function() {
					this[e] && this[e].unregister(this)
				},
				methods: {
					toggle: function() {
						this.$emit("change")
					}
				}
			});
			return f
		}
		ve("itemGroup");

		function be() {
			var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "value",
				n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "input";
			return r["a"].extend({
				name: "toggleable",
				model: {
					prop: t,
					event: n
				},
				props: O({}, t, {
					required: !1
				}),
				data: function() {
					return {
						isActive: !!this[t]
					}
				},
				watch: (e = {}, O(e, t, (function(e) {
					this.isActive = !!e
				})), O(e, "isActive", (function(e) {
					!!e !== this[t] && this.$emit(n, e)
				})), e)
			})
		}
		var ye = be(),
			_e = ye,
			we = {
				absolute: Boolean,
				bottom: Boolean,
				fixed: Boolean,
				left: Boolean,
				right: Boolean,
				top: Boolean
			};

		function xe() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
			return r["a"].extend({
				name: "positionable",
				props: e.length ? G(we, e) : we
			})
		}
		var ke = xe();
		n("9911"), n("7435");

		function Ce(e, t) {
			e.style["transform"] = t, e.style["webkitTransform"] = t
		}

		function Se(e, t) {
			e.style["opacity"] = t.toString()
		}

		function Ae(e) {
			return "TouchEvent" === e.constructor.name
		}

		function Oe(e) {
			return "KeyboardEvent" === e.constructor.name
		}
		var Ee = function(e, t) {
				var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
					f = 0,
					r = 0;
				if (!Oe(e)) {
					var i = t.getBoundingClientRect(),
						o = Ae(e) ? e.touches[e.touches.length - 1] : e;
					f = o.clientX - i.left, r = o.clientY - i.top
				}
				var a = 0,
					s = .3;
				t._ripple && t._ripple.circle ? (s = .15, a = t.clientWidth / 2, a = n.center ? a : a + Math.sqrt(Math.pow(f - a, 2) + Math.pow(r - a, 2)) / 4) : a = Math.sqrt(Math.pow(t.clientWidth, 2) + Math.pow(t.clientHeight, 2)) / 2;
				var c = "".concat((t.clientWidth - 2 * a) / 2, "px"),
					l = "".concat((t.clientHeight - 2 * a) / 2, "px"),
					u = n.center ? c : "".concat(f - a, "px"),
					d = n.center ? l : "".concat(r - a, "px");
				return {
					radius: a,
					scale: s,
					x: u,
					y: d,
					centerX: c,
					centerY: l
				}
			},
			Te = {
				show: function(e, t) {
					var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
					if (t._ripple && t._ripple.enabled) {
						var f = document.createElement("span"),
							r = document.createElement("span");
						f.appendChild(r), f.className = "v-ripple__container", n.class && (f.className += " ".concat(n.class));
						var i = Ee(e, t, n),
							o = i.radius,
							a = i.scale,
							s = i.x,
							c = i.y,
							l = i.centerX,
							u = i.centerY,
							d = "".concat(2 * o, "px");
						r.className = "v-ripple__animation", r.style.width = d, r.style.height = d, t.appendChild(f);
						var p = window.getComputedStyle(t);
						p && "static" === p.position && (t.style.position = "relative", t.dataset.previousPosition = "static"), r.classList.add("v-ripple__animation--enter"), r.classList.add("v-ripple__animation--visible"), Ce(r, "translate(".concat(s, ", ").concat(c, ") scale3d(").concat(a, ",").concat(a, ",").concat(a, ")")), Se(r, 0), r.dataset.activated = String(performance.now()), setTimeout((function() {
							r.classList.remove("v-ripple__animation--enter"), r.classList.add("v-ripple__animation--in"), Ce(r, "translate(".concat(l, ", ").concat(u, ") scale3d(1,1,1)")), Se(r, .25)
						}), 0)
					}
				},
				hide: function(e) {
					if (e && e._ripple && e._ripple.enabled) {
						var t = e.getElementsByClassName("v-ripple__animation");
						if (0 !== t.length) {
							var n = t[t.length - 1];
							if (!n.dataset.isHiding) {
								n.dataset.isHiding = "true";
								var f = performance.now() - Number(n.dataset.activated),
									r = Math.max(250 - f, 0);
								setTimeout((function() {
									n.classList.remove("v-ripple__animation--in"), n.classList.add("v-ripple__animation--out"), Se(n, 0), setTimeout((function() {
										var t = e.getElementsByClassName("v-ripple__animation");
										1 === t.length && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), n.parentNode && e.removeChild(n.parentNode)
									}), 300)
								}), r)
							}
						}
					}
				}
			};

		function je(e) {
			return "undefined" === typeof e || !!e
		}

		function Le(e) {
			var t = {},
				n = e.currentTarget;
			if (n && n._ripple && !n._ripple.touched) {
				if (Ae(e)) n._ripple.touched = !0, n._ripple.isTouch = !0;
				else if (n._ripple.isTouch) return;
				t.center = n._ripple.centered || Oe(e), n._ripple.class && (t.class = n._ripple.class), Te.show(e, n, t)
			}
		}

		function Ie(e) {
			var t = e.currentTarget;
			t && (window.setTimeout((function() {
				t._ripple && (t._ripple.touched = !1)
			})), Te.hide(t))
		}
		var Me = !1;

		function Ne(e) {
			Me || e.keyCode !== J.enter && e.keyCode !== J.space || (Me = !0, Le(e))
		}

		function Pe(e) {
			Me = !1, Ie(e)
		}

		function Be(e, t, n) {
			var f = je(t.value);
			f || Te.hide(e), e._ripple = e._ripple || {}, e._ripple.enabled = f;
			var r = t.value || {};
			r.center && (e._ripple.centered = !0), r.class && (e._ripple.class = t.value.class), r.circle && (e._ripple.circle = r.circle), f && !n ? (e.addEventListener("touchstart", Le, {
				passive: !0
			}), e.addEventListener("touchend", Ie, {
				passive: !0
			}), e.addEventListener("touchcancel", Ie), e.addEventListener("mousedown", Le), e.addEventListener("mouseup", Ie), e.addEventListener("mouseleave", Ie), e.addEventListener("keydown", Ne), e.addEventListener("keyup", Pe), e.addEventListener("dragstart", Ie, {
				passive: !0
			})) : !f && n && $e(e)
		}

		function $e(e) {
			e.removeEventListener("mousedown", Le), e.removeEventListener("touchstart", Le), e.removeEventListener("touchend", Ie), e.removeEventListener("touchcancel", Ie), e.removeEventListener("mouseup", Ie), e.removeEventListener("mouseleave", Ie), e.removeEventListener("keydown", Ne), e.removeEventListener("keyup", Pe), e.removeEventListener("dragstart", Ie)
		}

		function ze(e, t, n) {
			Be(e, t, !1)
		}

		function Re(e) {
			delete e._ripple, $e(e)
		}

		function De(e, t) {
			if (t.value !== t.oldValue) {
				var n = je(t.oldValue);
				Be(e, t, n)
			}
		}
		var Ve = {
				bind: ze,
				unbind: Re,
				update: De
			},
			He = Ve,
			Fe = r["a"].extend({
				name: "routable",
				directives: {
					Ripple: He
				},
				props: {
					activeClass: String,
					append: Boolean,
					disabled: Boolean,
					exact: {
						type: Boolean,
						default: void 0
					},
					exactActiveClass: String,
					link: Boolean,
					href: [String, Object],
					to: [String, Object],
					nuxt: Boolean,
					replace: Boolean,
					ripple: {
						type: [Boolean, Object],
						default: null
					},
					tag: String,
					target: String
				},
				data: function() {
					return {
						isActive: !1,
						proxyClass: ""
					}
				},
				computed: {
					classes: function() {
						var e = {};
						return this.to || (this.activeClass && (e[this.activeClass] = this.isActive), this.proxyClass && (e[this.proxyClass] = this.isActive)), e
					},
					computedRipple: function() {
						return null != this.ripple ? this.ripple : !this.disabled && this.isClickable
					},
					isClickable: function() {
						return !this.disabled && Boolean(this.isLink || this.$listeners.click || this.$listeners["!click"] || this.$attrs.tabindex)
					},
					isLink: function() {
						return this.to || this.href || this.link
					},
					styles: function() {
						return {}
					}
				},
				watch: {
					$route: "onRouteChange"
				},
				methods: {
					click: function(e) {
						this.$emit("click", e)
					},
					generateRouteLink: function() {
						var e, t, n = this.exact,
							f = (e = {
								attrs: {
									tabindex: "tabindex" in this.$attrs ? this.$attrs.tabindex : void 0
								},
								class: this.classes,
								style: this.styles,
								props: {},
								directives: [{
									name: "ripple",
									value: this.computedRipple
								}]
							}, O(e, this.to ? "nativeOn" : "on", T({}, this.$listeners, {
								click: this.click
							})), O(e, "ref", "link"), e);
						if ("undefined" === typeof this.exact && (n = "/" === this.to || this.to === Object(this.to) && "/" === this.to.path), this.to) {
							var r = this.activeClass,
								i = this.exactActiveClass || r;
							this.proxyClass && (r = "".concat(r, " ").concat(this.proxyClass).trim(), i = "".concat(i, " ").concat(this.proxyClass).trim()), t = this.nuxt ? "nuxt-link" : "router-link", Object.assign(f.props, {
								to: this.to,
								exact: n,
								activeClass: r,
								exactActiveClass: i,
								append: this.append,
								replace: this.replace
							})
						} else t = (this.href ? "a" : this.tag) || "div", "a" === t && this.href && (f.attrs.href = this.href);
						return this.target && (f.attrs.target = this.target), {
							tag: t,
							data: f
						}
					},
					onRouteChange: function() {
						var e = this;
						if (this.to && this.$refs.link && this.$route) {
							var t = "".concat(this.activeClass, " ").concat(this.proxyClass || "").trim(),
								n = "_vnode.data.class.".concat(t);
							this.$nextTick((function() {
								Q(e.$refs.link, n) && e.toggle()
							}))
						}
					},
					toggle: function() {}
				}
			}),
			Ue = (n("c96a"), r["a"].extend({
				name: "sizeable",
				props: {
					large: Boolean,
					small: Boolean,
					xLarge: Boolean,
					xSmall: Boolean
				},
				computed: {
					medium: function() {
						return Boolean(!this.xSmall && !this.small && !this.large && !this.xLarge)
					},
					sizeableClasses: function() {
						return {
							"v-size--x-small": this.xSmall,
							"v-size--small": this.small,
							"v-size--default": this.medium,
							"v-size--large": this.large,
							"v-size--x-large": this.xLarge
						}
					}
				}
			})),
			qe = ce(ue, Fe, ke, Ue, ve("btnToggle"), be("inputValue")),
			We = qe.extend().extend({
				name: "v-btn",
				props: {
					activeClass: {
						type: String,
						default: function() {
							return this.btnToggle ? this.btnToggle.activeClass : ""
						}
					},
					block: Boolean,
					depressed: Boolean,
					fab: Boolean,
					icon: Boolean,
					loading: Boolean,
					outlined: Boolean,
					retainFocusOnClick: Boolean,
					rounded: Boolean,
					tag: {
						type: String,
						default: "button"
					},
					text: Boolean,
					type: {
						type: String,
						default: "button"
					},
					value: null
				},
				data: function() {
					return {
						proxyClass: "v-btn--active"
					}
				},
				computed: {
					classes: function() {
						return T({
							"v-btn": !0
						}, Fe.options.computed.classes.call(this), {
							"v-btn--absolute": this.absolute,
							"v-btn--block": this.block,
							"v-btn--bottom": this.bottom,
							"v-btn--contained": this.contained,
							"v-btn--depressed": this.depressed || this.outlined,
							"v-btn--disabled": this.disabled,
							"v-btn--fab": this.fab,
							"v-btn--fixed": this.fixed,
							"v-btn--flat": this.isFlat,
							"v-btn--icon": this.icon,
							"v-btn--left": this.left,
							"v-btn--loading": this.loading,
							"v-btn--outlined": this.outlined,
							"v-btn--right": this.right,
							"v-btn--round": this.isRound,
							"v-btn--rounded": this.rounded,
							"v-btn--router": this.to,
							"v-btn--text": this.text,
							"v-btn--tile": this.tile,
							"v-btn--top": this.top
						}, this.themeClasses, {}, this.groupClasses, {}, this.elevationClasses, {}, this.sizeableClasses)
					},
					contained: function() {
						return Boolean(!this.isFlat && !this.depressed && !this.elevation)
					},
					computedRipple: function() {
						var e = !this.icon && !this.fab || {
							circle: !0
						};
						return !this.disabled && (null != this.ripple ? this.ripple : e)
					},
					isFlat: function() {
						return Boolean(this.icon || this.text || this.outlined)
					},
					isRound: function() {
						return Boolean(this.icon || this.fab)
					},
					styles: function() {
						return T({}, this.measurableStyles)
					}
				},
				created: function() {
					var e = this,
						t = [
							["flat", "text"],
							["outline", "outlined"],
							["round", "rounded"]
						];
					t.forEach((function(t) {
						var n = A(t, 2),
							f = n[0],
							r = n[1];
						e.$attrs.hasOwnProperty(f) && P(f, r, e)
					}))
				},
				methods: {
					click: function(e) {
						!this.retainFocusOnClick && !this.fab && e.detail && this.$el.blur(), this.$emit("click", e), this.btnToggle && this.toggle()
					},
					genContent: function() {
						return this.$createElement("span", {
							staticClass: "v-btn__content"
						}, this.$slots.default)
					},
					genLoader: function() {
						return this.$createElement("span", {
							class: "v-btn__loader"
						}, this.$slots.loader || [this.$createElement(pe, {
							props: {
								indeterminate: !0,
								size: 23,
								width: 2
							}
						})])
					}
				},
				render: function(e) {
					var t = [this.genContent(), this.loading && this.genLoader()],
						n = this.isFlat ? this.setTextColor : this.setBackgroundColor,
						f = this.generateRouteLink(),
						r = f.tag,
						i = f.data;
					return "button" === r && (i.attrs.type = this.type, i.attrs.disabled = this.disabled), i.attrs.value = ["string", "number"].includes(_(this.value)) ? this.value : JSON.stringify(this.value), e(r, this.disabled ? i : n(this.color, i), t)
				}
			});
		n("4ec9"), n("4b85");

		function Qe(e) {
			if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
				if (Array.isArray(e) || (e = C(e))) {
					var t = 0,
						n = function() {};
					return {
						s: n,
						n: function() {
							return t >= e.length ? {
								done: !0
							} : {
								done: !1,
								value: e[t++]
							}
						},
						e: function(e) {
							throw e
						},
						f: n
					}
				}
				throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}
			var f, r, i = !0,
				o = !1;
			return {
				s: function() {
					f = e[Symbol.iterator]()
				},
				n: function() {
					var e = f.next();
					return i = e.done, e
				},
				e: function(e) {
					o = !0, r = e
				},
				f: function() {
					try {
						i || null == f["return"] || f["return"]()
					} finally {
						if (o) throw r
					}
				}
			}
		}
		var Ge = {
			styleList: /;(?![^(]*\))/g,
			styleProp: /:(.*)/
		};

		function Ze(e) {
			var t, n = {},
				f = Qe(e.split(Ge.styleList));
			try {
				for (f.s(); !(t = f.n()).done;) {
					var r = t.value,
						i = r.split(Ge.styleProp),
						o = A(i, 2),
						a = o[0],
						s = o[1];
					a = a.trim(), a && ("string" === typeof s && (s = s.trim()), n[te(a)] = s)
				}
			} catch (c) {
				f.e(c)
			} finally {
				f.f()
			}
			return n
		}

		function Ye() {
			var e, t, n = {},
				f = arguments.length;
			while (f--)
				for (var r = 0, i = Object.keys(arguments[f]); r < i.length; r++) switch (e = i[r], e) {
					case "class":
					case "style":
					case "directives":
						if (!arguments[f][e]) break;
						if (Array.isArray(n[e]) || (n[e] = []), "style" === e) {
							var o = void 0;
							o = Array.isArray(arguments[f].style) ? arguments[f].style : [arguments[f].style];
							for (var a = 0; a < o.length; a++) {
								var s = o[a];
								"string" === typeof s && (o[a] = Ze(s))
							}
							arguments[f].style = o
						}
						n[e] = n[e].concat(arguments[f][e]);
						break;
					case "staticClass":
						if (!arguments[f][e]) break;
						void 0 === n[e] && (n[e] = ""), n[e] && (n[e] += " "), n[e] += arguments[f][e].trim();
						break;
					case "on":
					case "nativeOn":
						if (!arguments[f][e]) break;
						n[e] || (n[e] = {});
						for (var c = n[e], l = 0, u = Object.keys(arguments[f][e] || {}); l < u.length; l++) t = u[l], c[t] ? c[t] = Array().concat(c[t], arguments[f][e][t]) : c[t] = arguments[f][e][t];
						break;
					case "attrs":
					case "props":
					case "domProps":
					case "scopedSlots":
					case "staticStyle":
					case "hook":
					case "transition":
						if (!arguments[f][e]) break;
						n[e] || (n[e] = {}), n[e] = T({}, arguments[f][e], {}, n[e]);
						break;
					case "slot":
					case "key":
					case "ref":
					case "tag":
					case "show":
					case "keepAlive":
					default:
						n[e] || (n[e] = arguments[f][e])
				}
			return n
		}
		var Je = ["sm", "md", "lg", "xl"],
			Xe = function() {
				return Je.reduce((function(e, t) {
					return e[t] = {
						type: [Boolean, String, Number],
						default: !1
					}, e
				}), {})
			}(),
			Ke = function() {
				return Je.reduce((function(e, t) {
					return e["offset" + ne(t)] = {
						type: [String, Number],
						default: null
					}, e
				}), {})
			}(),
			et = function() {
				return Je.reduce((function(e, t) {
					return e["order" + ne(t)] = {
						type: [String, Number],
						default: null
					}, e
				}), {})
			}(),
			tt = {
				col: Object.keys(Xe),
				offset: Object.keys(Ke),
				order: Object.keys(et)
			};

		function nt(e, t, n) {
			var f = e;
			if (null != n && !1 !== n) {
				if (t) {
					var r = t.replace(e, "");
					f += "-".concat(r)
				}
				return "col" !== e || "" !== n && !0 !== n ? (f += "-".concat(n), f.toLowerCase()) : f.toLowerCase()
			}
		}
		var ft = new Map,
			rt = r["a"].extend({
				name: "v-col",
				functional: !0,
				props: T({
					cols: {
						type: [Boolean, String, Number],
						default: !1
					}
				}, Xe, {
					offset: {
						type: [String, Number],
						default: null
					}
				}, Ke, {
					order: {
						type: [String, Number],
						default: null
					}
				}, et, {
					alignSelf: {
						type: String,
						default: null,
						validator: function(e) {
							return ["auto", "start", "end", "center", "baseline", "stretch"].includes(e)
						}
					},
					tag: {
						type: String,
						default: "div"
					}
				}),
				render: function(e, t) {
					var n = t.props,
						f = t.data,
						r = t.children,
						i = (t.parent, "");
					for (var o in n) i += String(n[o]);
					var a = ft.get(i);
					return a || function() {
						var e, t;
						for (t in a = [], tt) tt[t].forEach((function(e) {
							var f = n[e],
								r = nt(t, e, f);
							r && a.push(r)
						}));
						var f = a.some((function(e) {
							return e.startsWith("col-")
						}));
						a.push((e = {
							col: !f || !n.cols
						}, O(e, "col-".concat(n.cols), n.cols), O(e, "offset-".concat(n.offset), n.offset), O(e, "order-".concat(n.order), n.order), O(e, "align-self-".concat(n.alignSelf), n.alignSelf), e)), ft.set(i, a)
					}(), e(n.tag, Ye(f, {
						class: a
					}), r)
				}
			});
		n("20f6");

		function it(e) {
			return r["a"].extend({
				name: "v-".concat(e),
				functional: !0,
				props: {
					id: String,
					tag: {
						type: String,
						default: "div"
					}
				},
				render: function(t, n) {
					var f = n.props,
						r = n.data,
						i = n.children;
					r.staticClass = "".concat(e, " ").concat(r.staticClass || "").trim();
					var o = r.attrs;
					if (o) {
						r.attrs = {};
						var a = Object.keys(o).filter((function(e) {
							if ("slot" === e) return !1;
							var t = o[e];
							return e.startsWith("data-") ? (r.attrs[e] = t, !1) : t || "string" === typeof t
						}));
						a.length && (r.staticClass += " ".concat(a.join(" ")))
					}
					return f.id && (r.domProps = r.domProps || {}, r.domProps.id = f.id), t(f.tag, r, i)
				}
			})
		}
		var ot = it("container").extend({
				name: "v-container",
				functional: !0,
				props: {
					id: String,
					tag: {
						type: String,
						default: "div"
					},
					fluid: {
						type: Boolean,
						default: !1
					}
				},
				render: function(e, t) {
					var n, f = t.props,
						r = t.data,
						i = t.children,
						o = r.attrs;
					return o && (r.attrs = {}, n = Object.keys(o).filter((function(e) {
						if ("slot" === e) return !1;
						var t = o[e];
						return e.startsWith("data-") ? (r.attrs[e] = t, !1) : t || "string" === typeof t
					}))), f.id && (r.domProps = r.domProps || {}, r.domProps.id = f.id), e(f.tag, Ye(r, {
						staticClass: "container",
						class: Array({
							"container--fluid": f.fluid
						}).concat(n || [])
					}), i)
				}
			}),
			at = (n("8ce9"), se.extend({
				name: "v-divider",
				props: {
					inset: Boolean,
					vertical: Boolean
				},
				render: function(e) {
					var t;
					return this.$attrs.role && "separator" !== this.$attrs.role || (t = this.vertical ? "vertical" : "horizontal"), e("hr", {
						class: T({
							"v-divider": !0,
							"v-divider--inset": this.inset,
							"v-divider--vertical": this.vertical
						}, this.themeClasses),
						attrs: T({
							role: "separator",
							"aria-orientation": t
						}, this.$attrs),
						on: this.$listeners
					})
				}
			}));
		n("8efc"), n("7db0");

		function st(e, t) {
			var n = t.modifiers || {},
				f = t.value,
				r = "object" === _(f) ? f : {
					handler: f,
					options: {}
				},
				i = r.handler,
				o = r.options,
				a = new IntersectionObserver((function() {
					var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
						f = arguments.length > 1 ? arguments[1] : void 0;
					if (e._observe) {
						if (i && (!n.quiet || e._observe.init)) {
							var r = Boolean(t.find((function(e) {
								return e.isIntersecting
							})));
							i(t, f, r)
						}
						e._observe.init && n.once ? ct(e) : e._observe.init = !0
					}
				}), o);
			e._observe = {
				init: !1,
				observer: a
			}, a.observe(e)
		}

		function ct(e) {
			e._observe && (e._observe.observer.unobserve(e), delete e._observe)
		}
		var lt = {
				inserted: st,
				unbind: ct
			},
			ut = lt,
			dt = (n("36a7"), ce(oe).extend({
				name: "v-responsive",
				props: {
					aspectRatio: [String, Number]
				},
				computed: {
					computedAspectRatio: function() {
						return Number(this.aspectRatio)
					},
					aspectStyle: function() {
						return this.computedAspectRatio ? {
							paddingBottom: 1 / this.computedAspectRatio * 100 + "%"
						} : void 0
					},
					__cachedSizer: function() {
						return this.aspectStyle ? this.$createElement("div", {
							style: this.aspectStyle,
							staticClass: "v-responsive__sizer"
						}) : []
					}
				},
				methods: {
					genContent: function() {
						return this.$createElement("div", {
							staticClass: "v-responsive__content"
						}, this.$slots.default)
					}
				},
				render: function(e) {
					return e("div", {
						staticClass: "v-responsive",
						style: this.measurableStyles,
						on: this.$listeners
					}, [this.__cachedSizer, this.genContent()])
				}
			})),
			pt = dt,
			ht = "undefined" !== typeof window && "IntersectionObserver" in window,
			mt = pt.extend({
				name: "v-img",
				directives: {
					intersect: ut
				},
				props: {
					alt: String,
					contain: Boolean,
					eager: Boolean,
					gradient: String,
					lazySrc: String,
					options: {
						type: Object,
						default: function() {
							return {
								root: void 0,
								rootMargin: void 0,
								threshold: void 0
							}
						}
					},
					position: {
						type: String,
						default: "center center"
					},
					sizes: String,
					src: {
						type: [String, Object],
						default: ""
					},
					srcset: String,
					transition: {
						type: [Boolean, String],
						default: "fade-transition"
					}
				},
				data: function() {
					return {
						currentSrc: "",
						image: null,
						isLoading: !0,
						calculatedAspectRatio: void 0,
						naturalWidth: void 0
					}
				},
				computed: {
					computedAspectRatio: function() {
						return Number(this.normalisedSrc.aspect || this.calculatedAspectRatio)
					},
					normalisedSrc: function() {
						return "string" === typeof this.src ? {
							src: this.src,
							srcset: this.srcset,
							lazySrc: this.lazySrc,
							aspect: Number(this.aspectRatio || 0)
						} : {
							src: this.src.src,
							srcset: this.srcset || this.src.srcset,
							lazySrc: this.lazySrc || this.src.lazySrc,
							aspect: Number(this.aspectRatio || this.src.aspect)
						}
					},
					__cachedImage: function() {
						if (!this.normalisedSrc.src && !this.normalisedSrc.lazySrc) return [];
						var e = [],
							t = this.isLoading ? this.normalisedSrc.lazySrc : this.currentSrc;
						this.gradient && e.push("linear-gradient(".concat(this.gradient, ")")), t && e.push('url("'.concat(t, '")'));
						var n = this.$createElement("div", {
							staticClass: "v-image__image",
							class: {
								"v-image__image--preload": this.isLoading,
								"v-image__image--contain": this.contain,
								"v-image__image--cover": !this.contain
							},
							style: {
								backgroundImage: e.join(", "),
								backgroundPosition: this.position
							},
							key: +this.isLoading
						});
						return this.transition ? this.$createElement("transition", {
							attrs: {
								name: this.transition,
								mode: "in-out"
							}
						}, [n]) : n
					}
				},
				watch: {
					src: function() {
						this.isLoading ? this.loadImage() : this.init(void 0, void 0, !0)
					},
					"$vuetify.breakpoint.width": "getSrc"
				},
				mounted: function() {
					this.init()
				},
				methods: {
					init: function(e, t, n) {
						if (!ht || n || this.eager) {
							if (this.normalisedSrc.lazySrc) {
								var f = new Image;
								f.src = this.normalisedSrc.lazySrc, this.pollForSize(f, null)
							}
							this.normalisedSrc.src && this.loadImage()
						}
					},
					onLoad: function() {
						this.getSrc(), this.isLoading = !1, this.$emit("load", this.src)
					},
					onError: function() {
						N("Image load failed\n\n" + "src: ".concat(this.normalisedSrc.src), this), this.$emit("error", this.src)
					},
					getSrc: function() {
						this.image && (this.currentSrc = this.image.currentSrc || this.image.src)
					},
					loadImage: function() {
						var e = this,
							t = new Image;
						this.image = t, t.onload = function() {
							t.decode ? t.decode().catch((function(t) {
								M("Failed to decode image, trying to render anyway\n\n" + "src: ".concat(e.normalisedSrc.src) + (t.message ? "\nOriginal error: ".concat(t.message) : ""), e)
							})).then(e.onLoad) : e.onLoad()
						}, t.onerror = this.onError, t.src = this.normalisedSrc.src, this.sizes && (t.sizes = this.sizes), this.normalisedSrc.srcset && (t.srcset = this.normalisedSrc.srcset), this.aspectRatio || this.pollForSize(t), this.getSrc()
					},
					pollForSize: function(e) {
						var t = this,
							n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
							f = function f() {
								var r = e.naturalHeight,
									i = e.naturalWidth;
								r || i ? (t.naturalWidth = i, t.calculatedAspectRatio = i / r) : null != n && setTimeout(f, n)
							};
						f()
					},
					genContent: function() {
						var e = pt.options.methods.genContent.call(this);
						return this.naturalWidth && this._b(e.data, "div", {
							style: {
								width: "".concat(this.naturalWidth, "px")
							}
						}), e
					},
					__genPlaceholder: function() {
						if (this.$slots.placeholder) {
							var e = this.isLoading ? [this.$createElement("div", {
								staticClass: "v-image__placeholder"
							}, this.$slots.placeholder)] : [];
							return this.transition ? this.$createElement("transition", {
								props: {
									appear: !0,
									name: this.transition
								}
							}, e) : e[0]
						}
					}
				},
				render: function(e) {
					var t = pt.options.render.call(this, e);
					return t.data.staticClass += " v-image", ht && (t.data.directives = [{
						name: "intersect",
						modifiers: {
							once: !0
						},
						value: {
							handler: this.init,
							options: this.options
						}
					}]), t.data.attrs = {
						role: this.alt ? "img" : void 0,
						"aria-label": this.alt
					}, t.children = [this.__cachedSizer, this.__cachedImage, this.__genPlaceholder(), this.genContent()], e(t.tag, t.data, t.children)
				}
			}),
			gt = ["sm", "md", "lg", "xl"],
			vt = ["start", "end", "center"];

		function bt(e, t) {
			return gt.reduce((function(n, f) {
				return n[e + ne(f)] = t(), n
			}), {})
		}
		var yt = function(e) {
				return [].concat(vt, ["baseline", "stretch"]).includes(e)
			},
			_t = bt("align", (function() {
				return {
					type: String,
					default: null,
					validator: yt
				}
			})),
			wt = function(e) {
				return [].concat(vt, ["space-between", "space-around"]).includes(e)
			},
			xt = bt("justify", (function() {
				return {
					type: String,
					default: null,
					validator: wt
				}
			})),
			kt = function(e) {
				return [].concat(vt, ["space-between", "space-around", "stretch"]).includes(e)
			},
			Ct = bt("alignContent", (function() {
				return {
					type: String,
					default: null,
					validator: kt
				}
			})),
			St = {
				align: Object.keys(_t),
				justify: Object.keys(xt),
				alignContent: Object.keys(Ct)
			},
			At = {
				align: "align",
				justify: "justify",
				alignContent: "align-content"
			};

		function Ot(e, t, n) {
			var f = At[e];
			if (null != n) {
				if (t) {
					var r = t.replace(e, "");
					f += "-".concat(r)
				}
				return f += "-".concat(n), f.toLowerCase()
			}
		}
		var Et = new Map,
			Tt = r["a"].extend({
				name: "v-row",
				functional: !0,
				props: T({
					tag: {
						type: String,
						default: "div"
					},
					dense: Boolean,
					noGutters: Boolean,
					align: {
						type: String,
						default: null,
						validator: yt
					}
				}, _t, {
					justify: {
						type: String,
						default: null,
						validator: wt
					}
				}, xt, {
					alignContent: {
						type: String,
						default: null,
						validator: kt
					}
				}, Ct),
				render: function(e, t) {
					var n = t.props,
						f = t.data,
						r = t.children,
						i = "";
					for (var o in n) i += String(n[o]);
					var a = Et.get(i);
					return a || function() {
						var e, t;
						for (t in a = [], St) St[t].forEach((function(e) {
							var f = n[e],
								r = Ot(t, e, f);
							r && a.push(r)
						}));
						a.push((e = {
							"no-gutters": n.noGutters,
							"row--dense": n.dense
						}, O(e, "align-".concat(n.align), n.align), O(e, "justify-".concat(n.justify), n.justify), O(e, "align-content-".concat(n.alignContent), n.alignContent), e)), Et.set(i, a)
					}(), e(n.tag, Ye(f, {
						staticClass: "row",
						class: a
					}), r)
				}
			}),
			jt = v(g, p, h, !1, null, "37669348", null),
			Lt = jt.exports;
		y()(jt, {
			VBtn: We,
			VCol: rt,
			VContainer: ot,
			VDivider: at,
			VImg: mt,
			VRow: Tt
		});
		var It = function() {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n("div", [n("h1", {
					staticClass: "text-center d-block mt-3 animated bounceIn"
				}, [e._v(e._s(e.headerMessage))]), n("v-stepper", {
					staticClass: "col-12 col-md-6 mx-auto no-shadow animated bounceIn delay-300ms",
					model: {
						value: e.checkout,
						callback: function(t) {
							e.checkout = t
						},
						expression: "checkout"
					}
				}, [n("v-stepper-header", {
					staticClass: "no-shadow"
				}, [n("v-stepper-step", {
					attrs: {
						color: "green",
						step: "1"
					}
				}), n("v-divider"), n("v-stepper-step", {
					attrs: {
						color: "green",
						step: "2"
					}
				}), n("v-divider"), n("v-stepper-step", {
					attrs: {
						color: "green",
						step: "3"
					}
				})], 1)], 1), n("v-row", [n("v-col", {
					staticClass: "col-12 col-lg-6 pt-0 animated bounceIn delay-400ms"
				}, [n("v-container", {
					staticClass: "py-0",
					attrs: {
						fluid: ""
					}
				}, [n("v-row", [n("div", {
					staticClass: "mx-auto align-center"
				}, [n("div", {
					staticClass: "d-inline-block mr-4 pb-2"
				}, [n("span", {
					staticClass: "icon-robux-gold d-block",
					staticStyle: {
						transform: "scale(1.6)"
					}
				})]), n("div", {
					staticClass: "d-inline-block"
				}, [n("h2", {
					staticClass: "d-block"
				}, [e._v(e._s(e.numberWithCommas(e.resource.amount1)) + " Robux " + e._s(1 === parseInt(e.globals.tix_on) ? " + " + e.numberWithCommas(e.resource.amount2) + " Tix" : ""))]), n("h4", {
					staticClass: "d-block"
				}, [e._v("Balance Due: "), n("span", {
					staticClass: "text-linethrough"
				}, [e._v("$" + e._s(e.resource.price))]), n("span", {
					staticClass: "green--text"
				}, [e._v(" ")])])])])])], 1)], 1), n("v-divider", {
					staticClass: "d-block d-md-none"
				}), n("v-col", {
					staticClass: "col-12 col-lg-6 vertical-center py-0 animated bounceIn delay-500ms",
					class: e.$vuetify.breakpoint.mdAndDown ? "" : "border-left"
				}, [n("v-stepper", {
					staticClass: "no-shadow py-0",
					model: {
						value: e.checkout,
						callback: function(t) {
							e.checkout = t
						},
						expression: "checkout"
					}
				}, [n("v-stepper-items", {
					staticClass: " py-0"
				}, [n("v-stepper-content", {
					staticClass: " py-0",
					attrs: {
						step: "1"
					}
				}, [n("input", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: e.username,
						expression: "username"
					}],
					staticClass: "input mb-3",
					style: e.invalidUsername ? "border: 1px solid red;" : "",
					attrs: {
						type: "text",
						placeholder: "Your Username",
						autofocus: ""
					},
					domProps: {
						value: e.username
					},
					on: {
						input: function(t) {
							t.target.composing || (e.username = t.target.value)
						}
					}
				}), n("v-btn", {
					staticClass: " white--text",
					class: e.invalidUsername ? "animated wobble fast error" : "green",
					staticStyle: {
						width: "100%"
					},
					attrs: {
						"x-large": ""
					},
					on: {
						click: e.startGenerator
					}
				}, [e._v(" Continue ")])], 1), n("v-stepper-content", {
					staticClass: " py-0",
					attrs: {
						step: "2"
					}
				}, [n("v-img", {
					staticClass: "mx-auto",
					class: e.isVoucherValid ? "animated bounce" : "",
					attrs: {
						src: e.card.bgImg,
						"lazy-src": e.card.bgLazyImg,
						contain: "",
						height: "238px",
						width: "384px"
					}
				}, [n("v-container", {
					attrs: {
						fluid: ""
					}
				}, [n("v-row", [n("v-col", [n("v-img", {
					staticClass: "mt-4 mt-md-0",
					attrs: {
						src: e.card.header,
						"lazy-src": e.card.headerLazy,
						contain: "",
						height: "75px"
					}
				}), n("v-img", {
					staticClass: "d-none d-md-block",
					attrs: {
						src: e.card.character,
						"lazy-src": e.card.characterImg,
						height: "75px",
						contain: ""
					}
				}), n("h4", {
					staticClass: "col-10 mx-auto white--text text-center select-none mt-6 mt-md-2",
					staticStyle: {
						background: "rgba(0,0,0,0.6)",
						"border-radius": "10px"
					}
				}, [n("span", {
					staticClass: "green--text"
				}, [e._v(e._s(e.confirmedCode))]), n("span", {
					staticClass: "red--text"
				}, [e._v(e._s(e.wrongCode))]), e._v(e._s(e.message) + " ")])], 1)], 1)], 1)], 1), n("v-row", [n("v-col", [n("h1", {
					staticClass: "text-center d-block",
					class: e.isVoucherValid ? "animated bounce green--text" : ""
				}, [e._v(" " + e._s(e.validationMessage) + " ")])])], 1)], 1), n("v-stepper-content", {
					staticClass: "py-0 px-0",
					attrs: {
						step: "3"
					}
				}, [n("v-container", {
					staticClass: "py-0",
					staticStyle: {
						"min-height": "250px"
					},
					attrs: {
						fluid: ""
					}
				}, [n("v-row", {
					staticClass: "animated bounceIn",
					class: e.isVerification ? "d-block" : "d-none"
				}, [n("v-col", [n("v-card", {
					attrs: {
						raised: ""
					}
				}, [1 === parseInt(e.globals.has_header) ? n("v-card-title", {
					staticClass: "pa-2 d-block text-center animated bounceIn delay-300ms"
				}, [e._v(" " + e._s(e.globals.verification_header) + " ")]) : e._e(), n("v-divider"), n("v-card-text", {
					staticClass: "py-0 px-0"
				}, [n("v-container", {
					staticClass: "pt-0 pb-1"
				}, [n("v-row", [n("v-col", [n("h1", {
					staticClass: "d-block text-center mb-4 green--text animated bounceIn delay-400ms"
				}, [e._v(" " + e._s(e.username))]), n("h2", {
					staticClass: "d-block text-center green--text animated bounceIn delay-500ms"
				}, [e._v(" " + e._s(e.numberWithCommas(e.resource.amount1)) + " Robux" + e._s(1 === parseInt(e.globals.tix_on) ? " + " + e.numberWithCommas(e.resource.amount2) + " Tix" : "") + " ")])])], 1), n("v-divider"), n("div", {
					staticClass: "offers"
				}, e._l(e.offers, (function(t, f) {
					return n("v-row", {
						key: f,
						staticClass: "mt-3"
					}, [0 === f ? [n("v-col", {
						staticClass: "col-12 py-0 bounceIn animated",
						class: "delay-" + (600 + 100 * f) + "ms"
					}, [n("v-card", {
						staticClass: "pa-0 ma-0 game-card",
						attrs: {
							link: "",
							tile: "",
							raised: "",
							target: "_blank",
							href: t.url
						},
						on: {
							click: function(t) {
								return e.offerClick()
							}
						}
					}, [n("v-container", {
						staticClass: "py-0",
						attrs: {
							fluid: ""
						}
					}, [n("v-row", [n("v-col", {
						staticClass: "col-9 col-sm-10 pa-0"
					}, [n("v-list-item", [n("v-avatar", {
						staticClass: "mr-2",
						attrs: {
							tile: ""
						}
					}, [n("img", {
						staticClass: "user-select",
						attrs: {
							src: t.network_icon
						}
					})]), n("v-list-item-content", [n("v-list-item-title", {
						staticClass: "headline user-select black--text"
					}, [e._v(" " + e._s(t.anchor) + " ")]), n("v-list-item-subtitle", {
						staticClass: "user-select black--text"
					}, [e._v(" " + e._s(t.conversion) + " ")])], 1)], 1)], 1), n("v-col", {
						staticClass: "green white--text col-3 col-sm-2 pa-0 mx-auto text-center ",
						staticStyle: {
							"border-radius": "0 3px 3px 0"
						}
					}, [n("v-avatar", {
						staticClass: "mx-auto text-center",
						attrs: {
							tile: ""
						}
					}, [n("span", {
						staticClass: "user-select mx-auto text-center icon-robux-white mx-auto",
						staticStyle: {
							transform: "scale(1.2)"
						}
					})]), n("p", {
						staticClass: "caption text-center ma-0 pa-0 white--text user-select"
					}, [e._v(" +2000 ")])], 1)], 1)], 1)], 1)], 1)] : e._e(), 1 === f ? [n("v-col", {
						staticClass: "col-12 py-0 bounceIn animated",
						class: "delay-" + (600 + 100 * f) + "ms"
					}, [n("v-card", {
						staticClass: "pa-0 ma-0 game-card",
						attrs: {
							link: "",
							tile: "",
							raised: "",
							target: "_blank",
							href: t.url
						},
						on: {
							click: function(t) {
								return e.offerClick()
							}
						}
					}, [n("v-container", {
						staticClass: "py-0",
						attrs: {
							fluid: ""
						}
					}, [n("v-row", [n("v-col", {
						staticClass: "col-9 col-sm-10 pa-0"
					}, [n("v-list-item", [n("v-avatar", {
						staticClass: "mr-2",
						attrs: {
							tile: ""
						}
					}, [n("img", {
						staticClass: "user-select",
						attrs: {
							src: t.network_icon
						}
					})]), n("v-list-item-content", [n("v-list-item-title", {
						staticClass: "headline user-select black--text"
					}, [e._v(" " + e._s(t.anchor) + " ")]), n("v-list-item-subtitle", {
						staticClass: "user-select black--text"
					}, [e._v(" " + e._s(t.conversion) + " ")])], 1)], 1)], 1), n("v-col", {
						staticClass: "green white--text col-3 col-sm-2 pa-0 mx-auto text-center ",
						staticStyle: {
							"border-radius": "0 3px 3px 0"
						}
					}, [n("v-avatar", {
						staticClass: "mx-auto text-center",
						attrs: {
							tile: ""
						}
					}, [n("span", {
						staticClass: "user-select mx-auto text-center icon-robux-white mx-auto",
						staticStyle: {
							transform: "scale(1.2)"
						}
					})]), n("p", {
						staticClass: "caption text-center ma-0 pa-0 white--text user-select"
					}, [e._v(" +1000 ")])], 1)], 1)], 1)], 1)], 1)] : e._e(), f > 1 && f < e.globals.offers_amount ? [n("v-col", {
						staticClass: "col-12 py-0 bounceIn animated",
						class: "delay-" + (600 + 100 * f) + "ms"
					}, [n("v-card", {
						staticClass: "pa-0 ma-0 game-card",
						attrs: {
							link: "",
							tile: "",
							raised: "",
							target: "_blank",
							href: t.url
						},
						on: {
							click: function(t) {
								return e.offerClick()
							}
						}
					}, [n("v-container", {
						staticClass: "py-0",
						attrs: {
							fluid: ""
						}
					}, [n("v-row", [n("v-col", {
						staticClass: "col-12 pa-0"
					}, [n("v-list-item", [n("v-avatar", {
						staticClass: "mr-2",
						attrs: {
							tile: ""
						}
					}, [n("img", {
						staticClass: "user-select",
						attrs: {
							src: t.network_icon
						}
					})]), n("v-list-item-content", [n("v-list-item-title", {
						staticClass: "headline user-select black--text"
					}, [e._v(" " + e._s(t.anchor) + " ")]), n("v-list-item-subtitle", {
						staticClass: "user-select black--text"
					}, [e._v(" " + e._s(t.conversion) + " ")])], 1)], 1)], 1)], 1)], 1)], 1)], 1)] : e._e()], 2)
				})), 1), n("p", {
					staticClass: "d-block text-center mb-0 pt-2",
					staticStyle: {
						"font-size": "12px"
					}
				}, [e._v(" " + e._s(e.globals.verification_text) + " ")])], 1)], 1)], 1)], 1)], 1), n("v-row", {
					class: [e.isSuccess ? "green--text animated bounce" : "", e.cogVisible ? "pt-4 pt-md-10" : ""]
				}, [n("v-col", {
					staticClass: "col-12 mx-auto",
					class: e.cogVisible ? "d-block" : "d-none"
				}, [n("i", {
					staticClass: "fas fa-cog text-center d-block loading-cog"
				})]), n("v-col", {
					staticClass: "col-12"
				}, [n("h1", {
					staticClass: "text-center d-block"
				}, [e._v(" " + e._s(e.verificationMessage) + " ")]), n("h3", {
					staticClass: "text-center d-block"
				}, [e._v(" " + e._s(e.voucherCode) + " ")])])], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1)
			},
			Mt = [],
			Nt = {
				name: "ConfirmSelection",
				props: ["globals", "resource", "offers"],
				data: function() {
					return {
						checkout: 1,
						card: {
							bgImg: "card.png",
							bgLazyImg: "card.png",
							header: "https://bucket.cpabuild.com/uploads/15877520228ea29170eb6b04b9eea39868701f82ea.png",
							headerLazy: "https://bucket.cpabuild.com/uploads/15877524079550b16223b451c2d1b5ff7158844080.png",
							character: "https://bucket.cpabuild.com/uploads/158775128343b58d4cca160d94af4cd2c1dcb1d640.png",
							characterImg: "https://bucket.cpabuild.com/uploads/1587752407a23f0a6ebdfc94974dc9ac43072c43b4.png"
						},
						message: "Connecting to server",
						confirmedCode: "",
						wrongCode: "",
						finalCode: "",
						codeGenerated: !1,
						validationMessage: "",
						isVoucherValid: !1,
						username: "",
						invalidUsername: !1,
						verificationMessage: "Loading...",
						headerMessage: "Confirm your selection",
						locationInfo: null,
						voucherCode: "",
						cogVisible: !0,
						isVerification: !1,
						isSuccess: !1
					}
				},
				methods: {
					numberWithCommas: function(e) {
						return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
					},
					startGenerator: function() {
						if (this.$emit("set-user", this.username), this.$emit("play-sound", "select"), this.username.length > 1) this.headerMessage = "Generating your " + this.globals.voucher_name, this.checkout = 2, setTimeout(this.generator1, 500);
						else {
							var e = this;
							this.invalidUsername = !0, setTimeout((function() {
								e.invalidUsername = !1
							}), 2e3)
						}
					},
					generator1: function() {
						this.message = "Loading", setTimeout(this.generator2, 250)
					},
					generator2: function() {
						this.message = "Loading.", setTimeout(this.generator3, 250)
					},
					generator3: function() {
						this.message = "Loading..", setTimeout(this.generator4, 250)
					},
					generator4: function() {
						this.message = "Loading...", setTimeout(this.generator5, 250)
					},
					generator5: function() {
						this.message = "Loading.", setTimeout(this.generator6, 250)
					},
					generator6: function() {
						this.message = "Generating new " + this.globals.voucher_name, setTimeout(this.generator7, 1e3)
					},
					generator7: function() {
						setTimeout(this.generator8, 12250);
						var e = this,
							t = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#%&^+=-",
							n = this.genString(5) + "-" + this.genString(5) + "-" + this.genString(3) + "**",
							f = 50,
							r = 12,
							i = n.length,
							o = 0,
							a = 0,
							s = "",
							c = "";

						function l(f) {
							for (var l = 0; l < i - a; l++) {
								var u = Math.floor(t.length * Math.random()),
									d = t.charAt(u);
								s += d
							}
							o == r - 1 && a++, o == r && (c += n.charAt(a - 1), o = 0), e.message = "", e.confirmedCode = c, e.wrongCode = s, s = ""
						}(function e(t) {
							setTimeout((function() {
								--t && e(t), l(t), o += 1
							}), f)
						})(i * r + 1)
					},
					generator8: function() {
						this.confirmedCode.length > 16 ? (this.codeGenerated = !0, this.validationMessage = "Validating...", this.finalCode = this.confirmedCode, setTimeout(this.generator9, 1500)) : setTimeout(this.generator8, 500)
					},
					generator9: function() {
						this.$emit("play-sound", "success"), this.validationMessage = this.globals.voucher_name + " Valid!", this.isVoucherValid = !0, setTimeout(this.generator10, 2e3)
					},
					generator10: function() {
						this.checkout = 3, this.isVoucherValid = !1, this.validationMessage = "", this.headerMessage = "Finishing...", this.startLastStep()
					},
					genString: function(e) {
						for (var t = "", n = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", f = n.length, r = 0; r < e; r++) t += n.charAt(Math.floor(Math.random() * f));
						return t
					},
					startLastStep: function() {
						1 === parseInt(this.globals.generator_on) ? setTimeout(this.validation1, 1e3) : setTimeout(this.validation6, 1e3)
					},
					validation1: function() {
						this.verificationMessage = "Connecting to proxy", setTimeout(this.validation2, 1e3)
					},
					validation2: function() {
						null !== this.locationInfo ? this.verificationMessage = "Your Closest Server: " + this.locationInfo.city : this.verificationMessage = "Connecting to Server", setTimeout(this.validation3, 2e3)
					},
					validation3: function() {
						this.verificationMessage = "Searching for username: " + this.username, setTimeout(this.validation4, 2e3)
					},
					validation4: function() {
						this.verificationMessage = "Activating the " + this.globals.voucher_name + ":", this.voucherCode = this.confirmedCode, setTimeout(this.validation5, 2e3)
					},
					validation5: function() {
						this.$emit("play-sound", "success"), this.isSuccess = !0, this.voucherCode = "", this.verificationMessage = this.globals.voucher_name + " Activated!", setTimeout(this.validation6, 2e3)
					},
					validation6: function() {
						this.isSuccess = !1, this.verificationMessage = "Saving results...", setTimeout(this.validation7, 1e3)
					},
					validation7: function() {
						this.verificationMessage = "Verification Required", setTimeout(this.validation8, 2e3)
					},
					validation8: function() {
						this.verificationMessage = "Waiting...", this.cogVisible = !1, this.isVerification = !0
					},
					offerClick: function() {
						this.$emit("play-sound", "select")
					}
				},
				mounted: function() {
					var e = this;
					o.a.get("https://json.geoiplookup.io/").then((function(t) {
						e.locationInfo = t.data
					})).catch((function(e) {
						console.log(e.response)
					}))
				}
			},
			Pt = Nt,
			Bt = (n("abac"), n("3408"), ce(H, oe).extend({
				name: "v-avatar",
				props: {
					left: Boolean,
					right: Boolean,
					size: {
						type: [Number, String],
						default: 48
					},
					tile: Boolean
				},
				computed: {
					classes: function() {
						return {
							"v-avatar--left": this.left,
							"v-avatar--right": this.right,
							"v-avatar--tile": this.tile
						}
					},
					styles: function() {
						return T({
							height: Z(this.size),
							minWidth: Z(this.size),
							width: Z(this.size)
						}, this.measurableStyles)
					}
				},
				render: function(e) {
					var t = {
						staticClass: "v-avatar",
						class: this.classes,
						style: this.styles,
						on: this.$listeners
					};
					return e("div", this.setBackgroundColor(this.color, t), this.$slots.default)
				}
			}));
		n("0481"), n("4069"), n("615b"), n("6ece");

		function $t() {
			for (var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], n = arguments.length, f = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) f[r - 1] = arguments[r];
			return (e = Array()).concat.apply(e, [t].concat(f))
		}

		function zt(e) {
			var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top center 0",
				n = arguments.length > 2 ? arguments[2] : void 0;
			return {
				name: e,
				functional: !0,
				props: {
					group: {
						type: Boolean,
						default: !1
					},
					hideOnLeave: {
						type: Boolean,
						default: !1
					},
					leaveAbsolute: {
						type: Boolean,
						default: !1
					},
					mode: {
						type: String,
						default: n
					},
					origin: {
						type: String,
						default: t
					}
				},
				render: function(t, n) {
					var f = "transition".concat(n.props.group ? "-group" : ""),
						r = {
							props: {
								name: e,
								mode: n.props.mode
							},
							on: {
								beforeEnter: function(e) {
									e.style.transformOrigin = n.props.origin, e.style.webkitTransformOrigin = n.props.origin
								}
							}
						};
					return n.props.leaveAbsolute && (r.on.leave = $t(r.on.leave, (function(e) {
						return e.style.position = "absolute"
					}))), n.props.hideOnLeave && (r.on.leave = $t(r.on.leave, (function(e) {
						return e.style.display = "none"
					}))), t(f, Ye(n.data, r), n.children)
				}
			}
		}

		function Rt(e, t) {
			var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "in-out";
			return {
				name: e,
				functional: !0,
				props: {
					mode: {
						type: String,
						default: n
					}
				},
				render: function(n, f) {
					return n("transition", Ye(f.data, {
						props: {
							name: e
						},
						on: t
					}), f.children)
				}
			}
		}
		var Dt = function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
					t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					n = t ? "width" : "height",
					f = "offset".concat(ne(n));
				return {
					beforeEnter: function(e) {
						e._parent = e.parentNode, e._initialStyle = O({
							transition: e.style.transition,
							visibility: e.style.visibility,
							overflow: e.style.overflow
						}, n, e.style[n])
					},
					enter: function(t) {
						var r = t._initialStyle,
							i = "".concat(t[f], "px");
						t.style.setProperty("transition", "none", "important"), t.style.visibility = "hidden", t.style.visibility = r.visibility, t.style.overflow = "hidden", t.style[n] = "0", t.offsetHeight, t.style.transition = r.transition, e && t._parent && t._parent.classList.add(e), requestAnimationFrame((function() {
							t.style[n] = i
						}))
					},
					afterEnter: i,
					enterCancelled: i,
					leave: function(e) {
						e._initialStyle = O({
							transition: "",
							visibility: "",
							overflow: e.style.overflow
						}, n, e.style[n]), e.style.overflow = "hidden", e.style[n] = "".concat(e[f], "px"), e.offsetHeight, requestAnimationFrame((function() {
							return e.style[n] = "0"
						}))
					},
					afterLeave: r,
					leaveCancelled: r
				};

				function r(t) {
					e && t._parent && t._parent.classList.remove(e), i(t)
				}

				function i(e) {
					var t = e._initialStyle[n];
					e.style.overflow = e._initialStyle.overflow, null != t && (e.style[n] = t), delete e._initialStyle
				}
			},
			Vt = (zt("carousel-transition"), zt("carousel-reverse-transition"), zt("tab-transition")),
			Ht = zt("tab-reverse-transition"),
			Ft = (zt("menu-transition"), zt("fab-transition", "center center", "out-in"), zt("dialog-transition"), zt("dialog-bottom-transition"), zt("fade-transition")),
			Ut = (zt("scale-transition"), zt("scroll-x-transition"), zt("scroll-x-reverse-transition"), zt("scroll-y-transition"), zt("scroll-y-reverse-transition"), zt("slide-x-transition")),
			qt = (zt("slide-x-reverse-transition"), zt("slide-y-transition"), zt("slide-y-reverse-transition"), Rt("expand-transition", Dt()));
		Rt("expand-x-transition", Dt("", !0));

		function Wt() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "value",
				t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "change";
			return r["a"].extend({
				name: "proxyable",
				model: {
					prop: e,
					event: t
				},
				props: O({}, e, {
					required: !1
				}),
				data: function() {
					return {
						internalLazyValue: this[e]
					}
				},
				computed: {
					internalValue: {
						get: function() {
							return this.internalLazyValue
						},
						set: function(e) {
							e !== this.internalLazyValue && (this.internalLazyValue = e, this.$emit(t, e))
						}
					}
				},
				watch: O({}, e, (function(e) {
					this.internalLazyValue = e
				}))
			})
		}
		var Qt, Gt = Wt(),
			Zt = Gt,
			Yt = ce(H, xe(["absolute", "fixed", "top", "bottom"]), Zt, se),
			Jt = Yt.extend({
				name: "v-progress-linear",
				props: {
					active: {
						type: Boolean,
						default: !0
					},
					backgroundColor: {
						type: String,
						default: null
					},
					backgroundOpacity: {
						type: [Number, String],
						default: null
					},
					bufferValue: {
						type: [Number, String],
						default: 100
					},
					color: {
						type: String,
						default: "primary"
					},
					height: {
						type: [Number, String],
						default: 4
					},
					indeterminate: Boolean,
					query: Boolean,
					rounded: Boolean,
					stream: Boolean,
					striped: Boolean,
					value: {
						type: [Number, String],
						default: 0
					}
				},
				data: function() {
					return {
						internalLazyValue: this.value || 0
					}
				},
				computed: {
					__cachedBackground: function() {
						return this.$createElement("div", this.setBackgroundColor(this.backgroundColor || this.color, {
							staticClass: "v-progress-linear__background",
							style: this.backgroundStyle
						}))
					},
					__cachedBar: function() {
						return this.$createElement(this.computedTransition, [this.__cachedBarType])
					},
					__cachedBarType: function() {
						return this.indeterminate ? this.__cachedIndeterminate : this.__cachedDeterminate
					},
					__cachedBuffer: function() {
						return this.$createElement("div", {
							staticClass: "v-progress-linear__buffer",
							style: this.styles
						})
					},
					__cachedDeterminate: function() {
						return this.$createElement("div", this.setBackgroundColor(this.color, {
							staticClass: "v-progress-linear__determinate",
							style: {
								width: Z(this.normalizedValue, "%")
							}
						}))
					},
					__cachedIndeterminate: function() {
						return this.$createElement("div", {
							staticClass: "v-progress-linear__indeterminate",
							class: {
								"v-progress-linear__indeterminate--active": this.active
							}
						}, [this.genProgressBar("long"), this.genProgressBar("short")])
					},
					__cachedStream: function() {
						return this.stream ? this.$createElement("div", this.setTextColor(this.color, {
							staticClass: "v-progress-linear__stream",
							style: {
								width: Z(100 - this.normalizedBuffer, "%")
							}
						})) : null
					},
					backgroundStyle: function() {
						var e, t = null == this.backgroundOpacity ? this.backgroundColor ? 1 : .3 : parseFloat(this.backgroundOpacity);
						return e = {
							opacity: t
						}, O(e, this.$vuetify.rtl ? "right" : "left", Z(this.normalizedValue, "%")), O(e, "width", Z(this.normalizedBuffer - this.normalizedValue, "%")), e
					},
					classes: function() {
						return T({
							"v-progress-linear--absolute": this.absolute,
							"v-progress-linear--fixed": this.fixed,
							"v-progress-linear--query": this.query,
							"v-progress-linear--reactive": this.reactive,
							"v-progress-linear--rounded": this.rounded,
							"v-progress-linear--striped": this.striped
						}, this.themeClasses)
					},
					computedTransition: function() {
						return this.indeterminate ? Ft : Ut
					},
					normalizedBuffer: function() {
						return this.normalize(this.bufferValue)
					},
					normalizedValue: function() {
						return this.normalize(this.internalLazyValue)
					},
					reactive: function() {
						return Boolean(this.$listeners.change)
					},
					styles: function() {
						var e = {};
						return this.active || (e.height = 0), this.indeterminate || 100 === parseFloat(this.normalizedBuffer) || (e.width = Z(this.normalizedBuffer, "%")), e
					}
				},
				methods: {
					genContent: function() {
						var e = fe(this, "default", {
							value: this.internalLazyValue
						});
						return e ? this.$createElement("div", {
							staticClass: "v-progress-linear__content"
						}, e) : null
					},
					genListeners: function() {
						var e = this.$listeners;
						return this.reactive && (e.click = this.onClick), e
					},
					genProgressBar: function(e) {
						return this.$createElement("div", this.setBackgroundColor(this.color, {
							staticClass: "v-progress-linear__indeterminate",
							class: O({}, e, !0)
						}))
					},
					onClick: function(e) {
						if (this.reactive) {
							var t = this.$el.getBoundingClientRect(),
								n = t.width;
							this.internalValue = e.offsetX / n * 100
						}
					},
					normalize: function(e) {
						return e < 0 ? 0 : e > 100 ? 100 : parseFloat(e)
					}
				},
				render: function(e) {
					var t = {
						staticClass: "v-progress-linear",
						attrs: {
							role: "progressbar",
							"aria-valuemin": 0,
							"aria-valuemax": this.normalizedBuffer,
							"aria-valuenow": this.indeterminate ? void 0 : this.normalizedValue
						},
						class: this.classes,
						style: {
							bottom: this.bottom ? 0 : void 0,
							height: this.active ? Z(this.height) : 0,
							top: this.top ? 0 : void 0
						},
						on: this.genListeners()
					};
					return e("div", t, [this.__cachedStream, this.__cachedBackground, this.__cachedBuffer, this.__cachedBar, this.genContent()])
				}
			}),
			Xt = Jt,
			Kt = r["a"].extend().extend({
				name: "loadable",
				props: {
					loading: {
						type: [Boolean, String],
						default: !1
					},
					loaderHeight: {
						type: [Number, String],
						default: 2
					}
				},
				methods: {
					genProgress: function() {
						return !1 === this.loading ? null : this.$slots.progress || this.$createElement(Xt, {
							props: {
								absolute: !0,
								color: !0 === this.loading || "" === this.loading ? this.color || "primary" : this.loading,
								height: this.loaderHeight,
								indeterminate: !0
							}
						})
					}
				}
			}),
			en = ce(Kt, Fe, ue).extend({
				name: "v-card",
				props: {
					flat: Boolean,
					hover: Boolean,
					img: String,
					link: Boolean,
					loaderHeight: {
						type: [Number, String],
						default: 4
					},
					outlined: Boolean,
					raised: Boolean,
					shaped: Boolean
				},
				computed: {
					classes: function() {
						return T({
							"v-card": !0
						}, Fe.options.computed.classes.call(this), {
							"v-card--flat": this.flat,
							"v-card--hover": this.hover,
							"v-card--link": this.isClickable,
							"v-card--loading": this.loading,
							"v-card--disabled": this.disabled,
							"v-card--outlined": this.outlined,
							"v-card--raised": this.raised,
							"v-card--shaped": this.shaped
						}, ue.options.computed.classes.call(this))
					},
					styles: function() {
						var e = T({}, ue.options.computed.styles.call(this));
						return this.img && (e.background = 'url("'.concat(this.img, '") center center / cover no-repeat')), e
					}
				},
				methods: {
					genProgress: function() {
						var e = Kt.options.methods.genProgress.call(this);
						return e ? this.$createElement("div", {
							staticClass: "v-card__progress",
							key: "progress"
						}, [e]) : null
					}
				},
				render: function(e) {
					var t = this.generateRouteLink(),
						n = t.tag,
						f = t.data;
					return f.style = this.styles, this.isClickable && (f.attrs = f.attrs || {}, f.attrs.tabindex = 0), e(n, this.setBackgroundColor(this.color, f), [this.genProgress(), this.$slots.default])
				}
			}),
			tn = (U("v-card__actions"), U("v-card__subtitle"), U("v-card__text")),
			nn = U("v-card__title"),
			fn = (n("61d2"), ce(H, Fe, se, ve("listItemGroup"), be("inputValue"))),
			rn = fn.extend().extend({
				name: "v-list-item",
				directives: {
					Ripple: He
				},
				inheritAttrs: !1,
				inject: {
					isInGroup: {
						default: !1
					},
					isInList: {
						default: !1
					},
					isInMenu: {
						default: !1
					},
					isInNav: {
						default: !1
					}
				},
				props: {
					activeClass: {
						type: String,
						default: function() {
							return this.listItemGroup ? this.listItemGroup.activeClass : ""
						}
					},
					dense: Boolean,
					inactive: Boolean,
					link: Boolean,
					selectable: {
						type: Boolean
					},
					tag: {
						type: String,
						default: "div"
					},
					threeLine: Boolean,
					twoLine: Boolean,
					value: null
				},
				data: function() {
					return {
						proxyClass: "v-list-item--active"
					}
				},
				computed: {
					classes: function() {
						return T({
							"v-list-item": !0
						}, Fe.options.computed.classes.call(this), {
							"v-list-item--dense": this.dense,
							"v-list-item--disabled": this.disabled,
							"v-list-item--link": this.isClickable && !this.inactive,
							"v-list-item--selectable": this.selectable,
							"v-list-item--three-line": this.threeLine,
							"v-list-item--two-line": this.twoLine
						}, this.themeClasses)
					},
					isClickable: function() {
						return Boolean(Fe.options.computed.isClickable.call(this) || this.listItemGroup)
					}
				},
				created: function() {
					this.$attrs.hasOwnProperty("avatar") && B("avatar", this)
				},
				methods: {
					click: function(e) {
						e.detail && this.$el.blur(), this.$emit("click", e), this.to || this.toggle()
					},
					genAttrs: function() {
						var e = T({
							"aria-disabled": !!this.disabled || void 0,
							tabindex: this.isClickable && !this.disabled ? 0 : -1
						}, this.$attrs);
						return this.$attrs.hasOwnProperty("role") || this.isInNav || (this.isInGroup ? (e.role = "listitem", e["aria-selected"] = String(this.isActive)) : this.isInMenu ? (e.role = this.isClickable ? "menuitem" : void 0, e.id = e.id || "list-item-".concat(this._uid)) : this.isInList && (e.role = "listitem")), e
					}
				},
				render: function(e) {
					var t = this,
						n = this.generateRouteLink(),
						f = n.tag,
						r = n.data;
					r.attrs = T({}, r.attrs, {}, this.genAttrs()), r.on = T({}, r.on, {
						click: this.click,
						keydown: function(e) {
							e.keyCode === J.enter && t.click(e), t.$emit("keydown", e)
						}
					});
					var i = this.$scopedSlots.default ? this.$scopedSlots.default({
						active: this.isActive,
						toggle: this.toggle
					}) : this.$slots.default;
					return f = this.inactive ? "div" : f, e(f, this.setTextColor(this.color, r), i)
				}
			});
		n("c740"), n("a434"), n("3ad0"), le.extend().extend({
			name: "v-list",
			provide: function() {
				return {
					isInList: !0,
					list: this
				}
			},
			inject: {
				isInMenu: {
					default: !1
				},
				isInNav: {
					default: !1
				}
			},
			props: {
				dense: Boolean,
				disabled: Boolean,
				expand: Boolean,
				flat: Boolean,
				nav: Boolean,
				rounded: Boolean,
				shaped: Boolean,
				subheader: Boolean,
				threeLine: Boolean,
				tile: {
					type: Boolean,
					default: !0
				},
				twoLine: Boolean
			},
			data: function() {
				return {
					groups: []
				}
			},
			computed: {
				classes: function() {
					return T({}, le.options.computed.classes.call(this), {
						"v-list--dense": this.dense,
						"v-list--disabled": this.disabled,
						"v-list--flat": this.flat,
						"v-list--nav": this.nav,
						"v-list--rounded": this.rounded,
						"v-list--shaped": this.shaped,
						"v-list--subheader": this.subheader,
						"v-list--two-line": this.twoLine,
						"v-list--three-line": this.threeLine
					})
				}
			},
			methods: {
				register: function(e) {
					this.groups.push(e)
				},
				unregister: function(e) {
					var t = this.groups.findIndex((function(t) {
						return t._uid === e._uid
					}));
					t > -1 && this.groups.splice(t, 1)
				},
				listClick: function(e) {
					if (!this.expand) {
						var t, n = Qe(this.groups);
						try {
							for (n.s(); !(t = n.n()).done;) {
								var f = t.value;
								f.toggle(e)
							}
						} catch (r) {
							n.e(r)
						} finally {
							n.f()
						}
					}
				}
			},
			render: function(e) {
				var t = {
					staticClass: "v-list",
					class: this.classes,
					style: this.styles,
					attrs: T({
						role: this.isInNav || this.isInMenu ? void 0 : "list"
					}, this.attrs$)
				};
				return e(this.tag, this.setBackgroundColor(this.color, t), [this.$slots.default])
			}
		}), n("db42"), n("4804");

		function on(e) {
			return ["fas", "far", "fal", "fab", "fad"].some((function(t) {
				return e.includes(t)
			}))
		}

		function an(e) {
			return /^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(e) && /[\dz]$/i.test(e) && e.length > 4
		}(function(e) {
			e["xSmall"] = "12px", e["small"] = "16px", e["default"] = "24px", e["medium"] = "28px", e["large"] = "36px", e["xLarge"] = "40px"
		})(Qt || (Qt = {}));
		var sn = ce(L, H, Ue, se).extend({
				name: "v-icon",
				props: {
					dense: Boolean,
					disabled: Boolean,
					left: Boolean,
					right: Boolean,
					size: [Number, String],
					tag: {
						type: String,
						required: !1,
						default: "i"
					}
				},
				computed: {
					medium: function() {
						return !1
					},
					hasClickListener: function() {
						return Boolean(this.listeners$.click || this.listeners$["!click"])
					}
				},
				methods: {
					getIcon: function() {
						var e = "";
						return this.$slots.default && (e = this.$slots.default[0].text.trim()), X(this, e)
					},
					getSize: function() {
						var e = {
								xSmall: this.xSmall,
								small: this.small,
								medium: this.medium,
								large: this.large,
								xLarge: this.xLarge
							},
							t = K(e).find((function(t) {
								return e[t]
							}));
						return t && Qt[t] || Z(this.size)
					},
					getDefaultData: function() {
						var e = {
							staticClass: "v-icon notranslate",
							class: {
								"v-icon--disabled": this.disabled,
								"v-icon--left": this.left,
								"v-icon--link": this.hasClickListener,
								"v-icon--right": this.right,
								"v-icon--dense": this.dense
							},
							attrs: T({
								"aria-hidden": !this.hasClickListener,
								disabled: this.hasClickListener && this.disabled,
								type: this.hasClickListener ? "button" : void 0
							}, this.attrs$),
							on: this.listeners$
						};
						return e
					},
					applyColors: function(e) {
						e.class = T({}, e.class, {}, this.themeClasses), this.setTextColor(this.color, e)
					},
					renderFontIcon: function(e, t) {
						var n = [],
							f = this.getDefaultData(),
							r = "material-icons",
							i = e.indexOf("-"),
							o = i <= -1;
						o ? n.push(e) : (r = e.slice(0, i), on(r) && (r = "")), f.class[r] = !0, f.class[e] = !o;
						var a = this.getSize();
						return a && (f.style = {
							fontSize: a
						}), this.applyColors(f), t(this.hasClickListener ? "button" : this.tag, f, n)
					},
					renderSvgIcon: function(e, t) {
						var n = this.getSize(),
							f = T({}, this.getDefaultData(), {
								style: n ? {
									fontSize: n,
									height: n,
									width: n
								} : void 0
							});
						f.class["v-icon--svg"] = !0, this.applyColors(f);
						var r = {
							attrs: {
								xmlns: "http://www.w3.org/2000/svg",
								viewBox: "0 0 24 24",
								height: n || "24",
								width: n || "24",
								role: "img",
								"aria-hidden": !0
							}
						};
						return t(this.hasClickListener ? "button" : "span", f, [t("svg", r, [t("path", {
							attrs: {
								d: e
							}
						})])])
					},
					renderSvgIconComponent: function(e, t) {
						var n = this.getDefaultData();
						n.class["v-icon--is-component"] = !0;
						var f = this.getSize();
						f && (n.style = {
							fontSize: f,
							height: f,
							width: f
						}), this.applyColors(n);
						var r = e.component;
						return n.props = e.props, n.nativeOn = n.on, t(r, n)
					}
				},
				render: function(e) {
					var t = this.getIcon();
					return "string" === typeof t ? an(t) ? this.renderSvgIcon(t, e) : this.renderFontIcon(t, e) : this.renderSvgIconComponent(t, e)
				}
			}),
			cn = r["a"].extend({
				name: "v-icon",
				$_wrapperFor: sn,
				functional: !0,
				render: function(e, t) {
					var n = t.data,
						f = t.children,
						r = "";
					return n.domProps && (r = n.domProps.textContent || n.domProps.innerHTML || r, delete n.domProps.textContent, delete n.domProps.innerHTML), e(sn, n, r ? [r] : f)
				}
			}),
			ln = cn,
			un = r["a"].extend({
				name: "v-list-item-icon",
				functional: !0,
				render: function(e, t) {
					var n = t.data,
						f = t.children;
					return n.staticClass = "v-list-item__icon ".concat(n.staticClass || "").trim(), e("div", n, f)
				}
			}),
			dn = r["a"].extend().extend({
				name: "bootable",
				props: {
					eager: Boolean
				},
				data: function() {
					return {
						isBooted: !1
					}
				},
				computed: {
					hasContent: function() {
						return this.isBooted || this.eager || this.isActive
					}
				},
				watch: {
					isActive: function() {
						this.isBooted = !0
					}
				},
				created: function() {
					"lazy" in this.$attrs && B("lazy", this)
				},
				methods: {
					showLazyContent: function(e) {
						return this.hasContent && e ? e() : [this.$createElement()]
					}
				}
			}),
			pn = ce(L, dn, H, me("list"), _e),
			hn = (pn.extend().extend({
				name: "v-list-group",
				directives: {
					ripple: He
				},
				props: {
					activeClass: {
						type: String,
						default: ""
					},
					appendIcon: {
						type: String,
						default: "$expand"
					},
					color: {
						type: String,
						default: "primary"
					},
					disabled: Boolean,
					group: String,
					noAction: Boolean,
					prependIcon: String,
					ripple: {
						type: [Boolean, Object],
						default: !0
					},
					subGroup: Boolean
				},
				computed: {
					classes: function() {
						return {
							"v-list-group--active": this.isActive,
							"v-list-group--disabled": this.disabled,
							"v-list-group--no-action": this.noAction,
							"v-list-group--sub-group": this.subGroup
						}
					}
				},
				watch: {
					isActive: function(e) {
						!this.subGroup && e && this.list && this.list.listClick(this._uid)
					},
					$route: "onRouteChange"
				},
				created: function() {
					this.list && this.list.register(this), this.group && this.$route && null == this.value && (this.isActive = this.matchRoute(this.$route.path))
				},
				beforeDestroy: function() {
					this.list && this.list.unregister(this)
				},
				methods: {
					click: function(e) {
						var t = this;
						this.disabled || (this.isBooted = !0, this.$emit("click", e), this.$nextTick((function() {
							return t.isActive = !t.isActive
						})))
					},
					genIcon: function(e) {
						return this.$createElement(ln, e)
					},
					genAppendIcon: function() {
						var e = !this.subGroup && this.appendIcon;
						return e || this.$slots.appendIcon ? this.$createElement(un, {
							staticClass: "v-list-group__header__append-icon"
						}, [this.$slots.appendIcon || this.genIcon(e)]) : null
					},
					genHeader: function() {
						return this.$createElement(rn, {
							staticClass: "v-list-group__header",
							attrs: {
								"aria-expanded": String(this.isActive),
								role: "button"
							},
							class: O({}, this.activeClass, this.isActive),
							props: {
								inputValue: this.isActive
							},
							directives: [{
								name: "ripple",
								value: this.ripple
							}],
							on: T({}, this.listeners$, {
								click: this.click
							})
						}, [this.genPrependIcon(), this.$slots.activator, this.genAppendIcon()])
					},
					genItems: function() {
						var e = this;
						return this.showLazyContent((function() {
							return [e.$createElement("div", {
								staticClass: "v-list-group__items",
								directives: [{
									name: "show",
									value: e.isActive
								}]
							}, fe(e))]
						}))
					},
					genPrependIcon: function() {
						var e = this.subGroup && null == this.prependIcon ? "$subgroup" : this.prependIcon;
						return e || this.$slots.prependIcon ? this.$createElement(un, {
							staticClass: "v-list-group__header__prepend-icon"
						}, [this.$slots.prependIcon || this.genIcon(e)]) : null
					},
					onRouteChange: function(e) {
						if (this.group) {
							var t = this.matchRoute(e.path);
							t && this.isActive !== t && this.list && this.list.listClick(this._uid), this.isActive = t
						}
					},
					toggle: function(e) {
						var t = this,
							n = this._uid === e;
						n && (this.isBooted = !0), this.$nextTick((function() {
							return t.isActive = n
						}))
					},
					matchRoute: function(e) {
						return null !== e.match(this.group)
					}
				},
				render: function(e) {
					return e("div", this.setTextColor(this.isActive && this.color, {
						staticClass: "v-list-group",
						class: this.classes
					}), [this.genHeader(), e(qt, this.genItems())])
				}
			}), n("899c"), n("166a"), ce(Zt, se).extend({
				name: "base-item-group",
				props: {
					activeClass: {
						type: String,
						default: "v-item--active"
					},
					mandatory: Boolean,
					max: {
						type: [Number, String],
						default: null
					},
					multiple: Boolean
				},
				data: function() {
					return {
						internalLazyValue: void 0 !== this.value ? this.value : this.multiple ? [] : void 0,
						items: []
					}
				},
				computed: {
					classes: function() {
						return T({
							"v-item-group": !0
						}, this.themeClasses)
					},
					selectedIndex: function() {
						return this.selectedItem && this.items.indexOf(this.selectedItem) || -1
					},
					selectedItem: function() {
						if (!this.multiple) return this.selectedItems[0]
					},
					selectedItems: function() {
						var e = this;
						return this.items.filter((function(t, n) {
							return e.toggleMethod(e.getValue(t, n))
						}))
					},
					selectedValues: function() {
						return null == this.internalValue ? [] : Array.isArray(this.internalValue) ? this.internalValue : [this.internalValue]
					},
					toggleMethod: function() {
						var e = this;
						if (!this.multiple) return function(t) {
							return e.internalValue === t
						};
						var t = this.internalValue;
						return Array.isArray(t) ? function(e) {
							return t.includes(e)
						} : function() {
							return !1
						}
					}
				},
				watch: {
					internalValue: "updateItemsState",
					items: "updateItemsState"
				},
				created: function() {
					this.multiple && !Array.isArray(this.internalValue) && M("Model must be bound to an array if the multiple property is true.", this)
				},
				methods: {
					genData: function() {
						return {
							class: this.classes
						}
					},
					getValue: function(e, t) {
						return null == e.value || "" === e.value ? t : e.value
					},
					onClick: function(e) {
						this.updateInternalValue(this.getValue(e, this.items.indexOf(e)))
					},
					register: function(e) {
						var t = this,
							n = this.items.push(e) - 1;
						e.$on("change", (function() {
							return t.onClick(e)
						})), this.mandatory && !this.selectedValues.length && this.updateMandatory(), this.updateItem(e, n)
					},
					unregister: function(e) {
						if (!this._isDestroyed) {
							var t = this.items.indexOf(e),
								n = this.getValue(e, t);
							this.items.splice(t, 1);
							var f = this.selectedValues.indexOf(n);
							if (!(f < 0)) {
								if (!this.mandatory) return this.updateInternalValue(n);
								this.multiple && Array.isArray(this.internalValue) ? this.internalValue = this.internalValue.filter((function(e) {
									return e !== n
								})) : this.internalValue = void 0, this.selectedItems.length || this.updateMandatory(!0)
							}
						}
					},
					updateItem: function(e, t) {
						var n = this.getValue(e, t);
						e.isActive = this.toggleMethod(n)
					},
					updateItemsState: function() {
						var e = this;
						this.$nextTick((function() {
							if (e.mandatory && !e.selectedItems.length) return e.updateMandatory();
							e.items.forEach(e.updateItem)
						}))
					},
					updateInternalValue: function(e) {
						this.multiple ? this.updateMultiple(e) : this.updateSingle(e)
					},
					updateMandatory: function(e) {
						if (this.items.length) {
							var t = this.items.slice();
							e && t.reverse();
							var n = t.find((function(e) {
								return !e.disabled
							}));
							if (n) {
								var f = this.items.indexOf(n);
								this.updateInternalValue(this.getValue(n, f))
							}
						}
					},
					updateMultiple: function(e) {
						var t = Array.isArray(this.internalValue) ? this.internalValue : [],
							n = t.slice(),
							f = n.findIndex((function(t) {
								return t === e
							}));
						this.mandatory && f > -1 && n.length - 1 < 1 || null != this.max && f < 0 && n.length + 1 > this.max || (f > -1 ? n.splice(f, 1) : n.push(e), this.internalValue = n)
					},
					updateSingle: function(e) {
						var t = e === this.internalValue;
						this.mandatory && t || (this.internalValue = t ? void 0 : e)
					}
				},
				render: function(e) {
					return e("div", this.genData(), this.$slots.default)
				}
			})),
			mn = (hn.extend({
				name: "v-item-group",
				provide: function() {
					return {
						itemGroup: this
					}
				}
			}), ce(hn, H).extend({
				name: "v-list-item-group",
				provide: function() {
					return {
						isInGroup: !0,
						listItemGroup: this
					}
				},
				computed: {
					classes: function() {
						return T({}, hn.options.computed.classes.call(this), {
							"v-list-item-group": !0
						})
					}
				},
				methods: {
					genData: function() {
						return this.setTextColor(this.color, T({}, hn.options.methods.genData.call(this), {
							attrs: {
								role: "listbox"
							}
						}))
					}
				}
			}), r["a"].extend({
				name: "v-list-item-action",
				functional: !0,
				render: function(e, t) {
					var n = t.data,
						f = t.children,
						r = void 0 === f ? [] : f;
					n.staticClass = n.staticClass ? "v-list-item__action ".concat(n.staticClass) : "v-list-item__action";
					var i = r.filter((function(e) {
						return !1 === e.isComment && " " !== e.text
					}));
					return i.length > 1 && (n.staticClass += " v-list-item__action--stack"), e("div", n, r)
				}
			}), Bt),
			gn = (mn.extend({
				name: "v-list-item-avatar",
				props: {
					horizontal: Boolean,
					size: {
						type: [Number, String],
						default: 40
					}
				},
				computed: {
					classes: function() {
						return T({
							"v-list-item__avatar--horizontal": this.horizontal
						}, mn.options.computed.classes.call(this), {
							"v-avatar--tile": this.tile || this.horizontal
						})
					}
				},
				render: function(e) {
					var t = mn.options.render.call(this, e);
					return t.data = t.data || {}, t.data.staticClass += " v-list-item__avatar", t
				}
			}), U("v-list-item__action-text", "span"), U("v-list-item__content", "div")),
			vn = U("v-list-item__title", "div"),
			bn = U("v-list-item__subtitle", "div"),
			yn = (n("8836"), ce(ge("stepper"), Zt, se)),
			_n = yn.extend({
				name: "v-stepper",
				provide: function() {
					return {
						stepClick: this.stepClick,
						isVertical: this.vertical
					}
				},
				props: {
					altLabels: Boolean,
					nonLinear: Boolean,
					vertical: Boolean
				},
				data: function() {
					var e = {
						isBooted: !1,
						steps: [],
						content: [],
						isReverse: !1
					};
					return e.internalLazyValue = null != this.value ? this.value : (e[0] || {}).step || 1, e
				},
				computed: {
					classes: function() {
						return T({
							"v-stepper--is-booted": this.isBooted,
							"v-stepper--vertical": this.vertical,
							"v-stepper--alt-labels": this.altLabels,
							"v-stepper--non-linear": this.nonLinear
						}, this.themeClasses)
					}
				},
				watch: {
					internalValue: function(e, t) {
						this.isReverse = Number(e) < Number(t), t && (this.isBooted = !0), this.updateView()
					}
				},
				created: function() {
					this.$listeners.input && P("@input", "@change", this)
				},
				mounted: function() {
					this.updateView()
				},
				methods: {
					register: function(e) {
						"v-stepper-step" === e.$options.name ? this.steps.push(e) : "v-stepper-content" === e.$options.name && (e.isVertical = this.vertical, this.content.push(e))
					},
					unregister: function(e) {
						"v-stepper-step" === e.$options.name ? this.steps = this.steps.filter((function(t) {
							return t !== e
						})) : "v-stepper-content" === e.$options.name && (e.isVertical = this.vertical, this.content = this.content.filter((function(t) {
							return t !== e
						})))
					},
					stepClick: function(e) {
						var t = this;
						this.$nextTick((function() {
							return t.internalValue = e
						}))
					},
					updateView: function() {
						for (var e = this.steps.length; --e >= 0;) this.steps[e].toggle(this.internalValue);
						for (var t = this.content.length; --t >= 0;) this.content[t].toggle(this.internalValue, this.isReverse)
					}
				},
				render: function(e) {
					return e("div", {
						staticClass: "v-stepper",
						class: this.classes
					}, this.$slots.default)
				}
			}),
			wn = ce(me("stepper", "v-stepper-content", "v-stepper")),
			xn = wn.extend().extend({
				name: "v-stepper-content",
				inject: {
					isVerticalProvided: {
						from: "isVertical"
					}
				},
				props: {
					step: {
						type: [Number, String],
						required: !0
					}
				},
				data: function() {
					return {
						height: 0,
						isActive: null,
						isReverse: !1,
						isVertical: this.isVerticalProvided
					}
				},
				computed: {
					computedTransition: function() {
						var e = this.$vuetify.rtl ? !this.isReverse : this.isReverse;
						return e ? Ht : Vt
					},
					styles: function() {
						return this.isVertical ? {
							height: Z(this.height)
						} : {}
					}
				},
				watch: {
					isActive: function(e, t) {
						e && null == t ? this.height = "auto" : this.isVertical && (this.isActive ? this.enter() : this.leave())
					}
				},
				mounted: function() {
					this.$refs.wrapper.addEventListener("transitionend", this.onTransition, !1), this.stepper && this.stepper.register(this)
				},
				beforeDestroy: function() {
					this.$refs.wrapper.removeEventListener("transitionend", this.onTransition, !1), this.stepper && this.stepper.unregister(this)
				},
				methods: {
					onTransition: function(e) {
						this.isActive && "height" === e.propertyName && (this.height = "auto")
					},
					enter: function() {
						var e = this,
							t = 0;
						requestAnimationFrame((function() {
							t = e.$refs.wrapper.scrollHeight
						})), this.height = 0, setTimeout((function() {
							return e.isActive && (e.height = t || "auto")
						}), 450)
					},
					leave: function() {
						var e = this;
						this.height = this.$refs.wrapper.clientHeight, setTimeout((function() {
							return e.height = 0
						}), 10)
					},
					toggle: function(e, t) {
						this.isActive = e.toString() === this.step.toString(), this.isReverse = t
					}
				},
				render: function(e) {
					var t = {
							staticClass: "v-stepper__content"
						},
						n = {
							staticClass: "v-stepper__wrapper",
							style: this.styles,
							ref: "wrapper"
						};
					this.isVertical || (t.directives = [{
						name: "show",
						value: this.isActive
					}]);
					var f = e("div", n, [this.$slots.default]),
						r = e("div", t, [f]);
					return e(this.computedTransition, {
						on: this.$listeners
					}, [r])
				}
			}),
			kn = ce(H, me("stepper", "v-stepper-step", "v-stepper")),
			Cn = kn.extend().extend({
				name: "v-stepper-step",
				directives: {
					ripple: He
				},
				inject: ["stepClick"],
				props: {
					color: {
						type: String,
						default: "primary"
					},
					complete: Boolean,
					completeIcon: {
						type: String,
						default: "$complete"
					},
					editable: Boolean,
					editIcon: {
						type: String,
						default: "$edit"
					},
					errorIcon: {
						type: String,
						default: "$error"
					},
					rules: {
						type: Array,
						default: function() {
							return []
						}
					},
					step: [Number, String]
				},
				data: function() {
					return {
						isActive: !1,
						isInactive: !0
					}
				},
				computed: {
					classes: function() {
						return {
							"v-stepper__step--active": this.isActive,
							"v-stepper__step--editable": this.editable,
							"v-stepper__step--inactive": this.isInactive,
							"v-stepper__step--error error--text": this.hasError,
							"v-stepper__step--complete": this.complete
						}
					},
					hasError: function() {
						return this.rules.some((function(e) {
							return !0 !== e()
						}))
					}
				},
				mounted: function() {
					this.stepper && this.stepper.register(this)
				},
				beforeDestroy: function() {
					this.stepper && this.stepper.unregister(this)
				},
				methods: {
					click: function(e) {
						e.stopPropagation(), this.$emit("click", e), this.editable && this.stepClick(this.step)
					},
					genIcon: function(e) {
						return this.$createElement(ln, e)
					},
					genLabel: function() {
						return this.$createElement("div", {
							staticClass: "v-stepper__label"
						}, this.$slots.default)
					},
					genStep: function() {
						var e = !(this.hasError || !this.complete && !this.isActive) && this.color;
						return this.$createElement("span", this.setBackgroundColor(e, {
							staticClass: "v-stepper__step__step"
						}), this.genStepContent())
					},
					genStepContent: function() {
						var e = [];
						return this.hasError ? e.push(this.genIcon(this.errorIcon)) : this.complete ? this.editable ? e.push(this.genIcon(this.editIcon)) : e.push(this.genIcon(this.completeIcon)) : e.push(String(this.step)), e
					},
					toggle: function(e) {
						this.isActive = e.toString() === this.step.toString(), this.isInactive = Number(e) < Number(this.step)
					}
				},
				render: function(e) {
					return e("div", {
						staticClass: "v-stepper__step",
						class: this.classes,
						directives: [{
							name: "ripple",
							value: this.editable
						}],
						on: {
							click: this.click
						}
					}, [this.genStep(), this.genLabel()])
				}
			}),
			Sn = U("v-stepper__header"),
			An = U("v-stepper__items"),
			On = v(Pt, It, Mt, !1, null, "56047250", null),
			En = On.exports;
		y()(On, {
			VAvatar: Bt,
			VBtn: We,
			VCard: en,
			VCardText: tn,
			VCardTitle: nn,
			VCol: rt,
			VContainer: ot,
			VDivider: at,
			VImg: mt,
			VListItem: rn,
			VListItemContent: gn,
			VListItemSubtitle: bn,
			VListItemTitle: vn,
			VRow: Tt,
			VStepper: _n,
			VStepperContent: xn,
			VStepperHeader: Sn,
			VStepperItems: An,
			VStepperStep: Cn
		});
		var Tn = function() {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n("div", [n("beautiful-chat", {
					attrs: {
						participants: e.participants,
						onMessageWasSent: e.onMessageWasSent,
						messageList: e.messageList,
						newMessagesCount: e.newMessagesCount,
						isOpen: e.isChatOpen,
						close: e.closeChat,
						icons: e.icons,
						open: e.openChat,
						showEmoji: !0,
						showFile: !1,
						showTypingIndicator: e.showTypingIndicator,
						showLauncher: !0,
						showCloseButton: !0,
						colors: e.colors,
						alwaysScrollToBottom: e.alwaysScrollToBottom,
						messageStyling: e.messageStyling
					},
					on: {
						onType: e.handleOnType,
						edit: e.editMessage
					}
				})], 1)
			},
			jn = [];

		function Ln(e) {
			if (Array.isArray(e)) return k(e)
		}

		function In(e) {
			if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
		}

		function Mn() {
			throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
		}

		function Nn(e) {
			return Ln(e) || In(e) || C(e) || Mn()
		}
		var Pn = {
				name: "Chat",
				props: ["user"],
				data: function() {
					return {
						icons: {
							open: {
								img: "https://cdn.jsdelivr.net/gh/iDevMore/BuildLPs@master/Assets/svgs/logo-no-bg.svg",
								name: ""
							},
							close: {
								img: "https://bucket.cpabuild.com/uploads/1586564023303e26f3ddbf1d44dee6adaf13761fd7.png",
								name: ""
							},
							file: {
								img: "https://cdn.jsdelivr.net/gh/iDevMore/BuildLPs@master/Assets/svgs/file.svg",
								name: ""
							},
							closeSvg: {
								img: "https://cdn.jsdelivr.net/gh/iDevMore/BuildLPs@master/Assets/svgs/close.svg",
								name: ""
							}
						},
						participants: [],
						messageList: [{
							type: "system",
							id: Math.floor(5e5 * Math.random()) + 1,
							data: {
								text: this.user.name + " joined the chat.",
								meta: ((new Date).getHours() < 10 ? "0" + (new Date).getHours() : (new Date).getHours()) + ":" + ((new Date).getMinutes() < 10 ? "0" + (new Date).getMinutes() : (new Date).getMinutes())
							}
						}],
						newMessagesCount: 1,
						isChatOpen: !1,
						showTypingIndicator: "",
						colors: {
							header: {
								bg: "#898b85",
								text: "#ecf0f1"
							},
							launcher: {
								bg: "#898b85"
							},
							messageList: {
								bg: "#4d4e4b"
							},
							sentMessage: {
								bg: "#42b10e",
								text: "#ecf0f1"
							},
							receivedMessage: {
								bg: "#898b85",
								text: "#ecf0f1"
							},
							userInput: {
								bg: "#898b85",
								text: "#ecf0f1"
							}
						},
						alwaysScrollToBottom: !1,
						messageStyling: !0,
						fakes: {
							usernames: ["Thwitere", "Parks", "Betty", "John", "Gibson", "Frankie", "Jeff", "Rigby", "Campbell", "Theresa", "Wilson", "Doe", "Dorethy", "Ana", "Miguel", "Mickael", "Luis", "Tony", "Hacker", "Sanders", "Joana", "Janne", "Mattew", "Adam", "Cullen", "Dominator", "Anihilator", "Spy", "Master", "Mega", "Animal", "PokeMaster", "YourMom", "Jefferson", "Jeff", "Milana", "Professional", "Kitty", "Cat", "Doggy", "FortniteMaster", "Killer", "Liam", "Emma", "Noah", "Olivia", "Ava", "Oliver", "Benji", "Benjamin", "Mia", "Amelia", "Harper", "Lucas", "Mason", "Logan", "Eduardo", "Jake"],
							messages: ["Wow!", "Niiiiice, just got 10,000 robux", "This worked rofl", "Failed at first, but generated 10,000 of robux from second time, this is amazing!", "Ahahahahahahhhahaha thats great!", "love it", "Love you", "Thaaaank you1!!!!!!", "Thanks!", "Best generator ever", "Lol, I just jumped 20 levels and back for more robux", "already used it 3 times today", "AMAZING", "Holy shit", "im the best now", "lol wasted 5 days in game, but here in 5 mins generated more robux that all that time", "got more robux than in last 3 days of game", "not the game is izi", "i love this generator", "just repeated the generator 2nd time and got my robux", "sh1t i'm fucking rich", "no way, so easy", "is there a daily limit?", "can't stop using it lol", "lol", "rofl", "best", "THAT'S WHY I LOVE INTERNET", "izi pissy", "used it twice, is there a limit?", "more 1 to go ahahahah", "10,000 here I go", "fastest robux ever", "guys is there a generator for trasures?", "ahahahah i have 200,000 now ahahhaah", "100,000 in my account hahahhahaha", "it took me 5 mins", "I done 10,000 in less than 2 mins", "OMG I CAN'T BELIEVE THAT!!!!!!", "!!!!!!!!!!!!!!", "No words!", "Just wow", "I want more lol", "I from US and you?", "I'm from France", "anyone from NY?", "non stop", "wow", "i just came and 10,000 izi", "gg", "good stuff", "amazing stuff", "loved this generator", "who want to meet up?", "i will destroy you all now", "ahahahahahahah I'm the best now", "Hi everyone", "hi guys", "good morning", "hello", "good evening guys", "guys you are the best", "HI", "do you have facebook?", "how to add you in facebook?", "who want my snapchat?", "who want my fb?"],
							answers: ["dont waste time, try the generator", "have you tried the generator already?", "how much robux did you generated?", "where are you from?", "I generated 10,000 and you?", "What's your level?", "How old are you?", "Hi!", "Hello!", "its your first time?", "already made 50,000 in my account, and you?", "I will destroy you", "try it, its easy", "if it didn't worked on first, try again", "have you completed the verification?", "already made 500M here", "hi there", " hello"]
						},
						popMessageSrc: new Audio("https://cdn.jsdelivr.net/gh/iDevMore/BuildLPs@master/Assets/audios/pop-button.mp3"),
						popAmount: 0
					}
				},
				methods: {
					playPop: function() {
						this.popMessageSrc.play()
					},
					sendMessageRandom: function(e, t) {
						t.length > 0 && (this.newMessagesCount = this.isChatOpen ? this.newMessagesCount : this.newMessagesCount + 1, this.onMessageWasSent({
							author: e.id,
							type: "text",
							data: {
								text: t
							}
						}))
					},
					sendMessageSystem: function(e) {
						if (e.length > 0) {
							this.newMessagesCount = this.isChatOpen ? this.newMessagesCount : this.newMessagesCount + 1;
							var t = ((new Date).getHours() < 10 ? "0" + (new Date).getHours() : (new Date).getHours()) + ":" + ((new Date).getMinutes() < 10 ? "0" + (new Date).getMinutes() : (new Date).getMinutes());
							this.onMessageWasSent({
								type: "system",
								id: Math.floor(5e5 * Math.random()) + 1,
								data: {
									text: e,
									meta: t
								}
							})
						}
					},
					onMessageWasSent: function(e) {
						if (this.messageList = [].concat(Nn(this.messageList), [e]), "me" === e.author) {
							var t = this;
							setTimeout((function() {
								if (t.fakes.answers.length > 0) {
									var e = t.participants[Math.floor(Math.random() * t.participants.length)],
										n = t.fakes.answers.splice(Math.floor(Math.random() * t.fakes.answers.length), 1)[0];
									t.sendMessageRandom(e, "@" + t.user.name + ", " + n)
								}
							}), Math.floor(2e3 * Math.random()) + 2e3), setTimeout((function() {
								if (t.fakes.answers.length > 0) {
									var e = t.participants[Math.floor(Math.random() * t.participants.length)],
										n = t.fakes.answers.splice(Math.floor(Math.random() * t.fakes.answers.length), 1)[0];
									t.sendMessageRandom(e, "@" + t.user.name + ", " + n)
								}
							}), Math.floor(4e3 * Math.random()) + 4e3)
						} else this.popAmount < 3 && (this.popAmount += 1, this.playPop())
					},
					openChat: function() {
						this.isChatOpen = !0, this.newMessagesCount = 0
					},
					closeChat: function() {
						this.isChatOpen = !1
					},
					handleScrollToTop: function() {},
					handleOnType: function() {},
					editMessage: function(e) {
						var t = this.messageList.find((function(t) {
							return t.id === e.id
						}));
						t.isEdited = !0, t.data.text = e.data.text
					},
					loadParticipants: function() {
						for (var e = 0; e < 55; e++) {
							var t = this.fakes.usernames[Math.floor(Math.random() * this.fakes.usernames.length)] + Math.floor(9 * Math.random()) + 1;
							this.participants.push({
								id: Math.floor(5e5 * Math.random()) + 1,
								name: t,
								imageUrl: "https://randomuser.me/api/portraits/thumb/men/" + Math.floor(98 * Math.random()) + ".jpg"
							})
						}
					},
					addToChat: function() {
						var e = this.fakes.usernames[Math.floor(Math.random() * this.fakes.usernames.length)] + Math.floor(10 * Math.random()) + 1;
						this.participants.push({
							id: Math.floor(5e5 * Math.random()) + 1,
							name: e,
							imageUrl: "https://randomuser.me/api/portraits/thumb/men/" + Math.floor(98 * Math.random()) + ".jpg"
						}), this.sendMessageSystem(e + " joined the chat.")
					}
				},
				mounted: function() {
					this.loadParticipants();
					var e = this,
						t = (setInterval((function() {
							e.addToChat()
						}), Math.floor(1e4 * Math.random()) + 15e3), setInterval((function() {
							var t = e.fakes.usernames[Math.floor(Math.random() * e.fakes.usernames.length)] + Math.floor(9 * Math.random()) + 1;
							e.sendMessageSystem(t + " generated 10,000 robux.")
						}), Math.floor(7e3 * Math.random()) + 8e3), setInterval((function() {
							if (e.fakes.messages.length > 0) {
								var n = e.participants[Math.floor(Math.random() * e.participants.length)],
									f = e.fakes.messages.splice(Math.floor(Math.random() * e.fakes.messages.length), 1)[0];
								e.sendMessageRandom(n, f)
							} else clearInterval(t)
						}), Math.floor(1e4 * Math.random()) + 3500));
					setTimeout((function() {
						e.playPop()
					}), 1e3)
				}
			},
			Bn = Pn,
			$n = (n("f196"), v(Bn, Tn, jn, !1, null, null, null)),
			zn = $n.exports,
			Rn = {
				name: "Home",
				props: ["globals", "offers", "sounds"],
				components: {
					ResourceSelection: Lt,
					ConfirmSelection: En,
					Chat: zn
				},
				data: function() {
					return {
						isResourceSelected: !1,
						resource: {},
						user: {
							name: ""
						}
					}
				},
				methods: {
					resourceSelected: function(e) {
						this.isResourceSelected = !0, this.resource = e
					},
					play: function(e) {
						1 === parseInt(this.globals.sounds_on) && this.sounds[e].play()
					},
					setUser: function(e) {
						this.user.name = e
					}
				}
			},
			Dn = Rn,
			Vn = v(Dn, u, d, !1, null, "461b8ef6", null),
			Hn = Vn.exports;
		y()(Vn, {
			VContainer: ot
		});
		var Fn = {
				name: "App",
				components: {
					Home: Hn
				},
				data: function() {
					return {
						dev: !1,
						globals: {},
						offers: [],
						sounds: {
							success: new Audio("https://cdn.jsdelivr.net/gh/iDevMore/BuildLPs@master/Assets/audios/success.mp3"),
							error: new Audio("https://cdn.jsdelivr.net/gh/iDevMore/BuildLPs@master/Assets/audios/error.mp3"),
							select: new Audio("https://cdn.jsdelivr.net/gh/iDevMore/BuildLPs@master/Assets/audios/select-button.mp3")
						}
					}
				},
				methods: {
					loadOffers: function() {
						if (this.dev) this.offers = [{
							id: "1",
							name: "Text Name",
							anchor: "Text Anchor",
							conversion: "Enter your mobile number",
							category_id: "1",
							network_icon: "https://i.gyazo.com/f830705e1dddc2f5d6305dd2c445d99f.png",
							user_payout: "1",
							payout: "1",
							user_enabled: "1",
							url: ""
						}, {
							id: "1",
							name: "Text Name",
							anchor: "Text Anchor",
							conversion: "Enter your mobile number",
							category_id: "1",
							network_icon: "https://i.gyazo.com/f830705e1dddc2f5d6305dd2c445d99f.png",
							user_payout: "1",
							payout: "1",
							user_enabled: "1",
							url: ""
						}, {
							id: "1",
							name: "Text Name",
							anchor: "Text Anchor",
							conversion: "Enter your mobile number",
							category_id: "1",
							network_icon: "https://i.gyazo.com/f830705e1dddc2f5d6305dd2c445d99f.png",
							user_payout: "1",
							payout: "1",
							user_enabled: "1",
							url: ""
						}, {
							id: "1",
							name: "Text Name",
							anchor: "Text Anchor",
							conversion: "Enter your mobile number",
							category_id: "1",
							network_icon: "https://i.gyazo.com/f830705e1dddc2f5d6305dd2c445d99f.png",
							user_payout: "1",
							payout: "1",
							user_enabled: "1",
							url: ""
						}, {
							id: "1",
							name: "Text Name",
							anchor: "Text Anchor",
							conversion: "Enter your mobile number",
							category_id: "1",
							network_icon: "https://i.gyazo.com/f830705e1dddc2f5d6305dd2c445d99f.png",
							user_payout: "1",
							payout: "1",
							user_enabled: "1",
							url: ""
						}];
						
						else var e = this,
							t = setInterval((function() {
								if ("undefined" !== typeof CPABUILDContentLocker) {
									clearInterval(t);
									var n = CPABuildGetFeedURL(),
										f = CPABUILDContentLocker.domain;
									n = n.replace("&callback=?", ""), axios.get(n, {
										header: {
											Accept: "*/*",
											Host: f
										}
									}).then((function(t) {
										e.offers = t.data
									})).catch((function(e) {
										console.log(e.response)
									}))
								}
							}), 100)
					},
					loadGlobals: function() {
						this.dev ? this.globals = {
							tix_on: 0,
							has_header: 1,
							verification_header: "Verification",
							leads_required: 1,
							offers_amount: 5,
							generator_on: 1,
							sounds_on: 1,
							chat_on: 1,
							voucher_name: "Card",
							verification_text: "Complete any 2 offers to verify"
						} : this.globals = Globals
					}
				},
				mounted: function() {
					this.loadOffers(), this.loadGlobals();
					var e = document.getElementById("loader"),
						t = document.getElementsByTagName("body")[0];
					e.style.opacity = 0, setTimeout((function() {
						t.style.height = "auto", t.style.overflow = "auto", e.style.display = "none"
					}), 1e3)
				}
			},
			Un = Fn,
			qn = (n("034f"), n("df86"), ce(se).extend({
				name: "v-app",
				props: {
					dark: {
						type: Boolean,
						default: void 0
					},
					id: {
						type: String,
						default: "app"
					},
					light: {
						type: Boolean,
						default: void 0
					}
				},
				computed: {
					isDark: function() {
						return this.$vuetify.theme.dark
					}
				},
				beforeCreate: function() {
					if (!this.$vuetify || this.$vuetify === this.$root) throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")
				},
				render: function(e) {
					var t = e("div", {
						staticClass: "v-application--wrap"
					}, this.$slots.default);
					return e("div", {
						staticClass: "v-application",
						class: T({
							"v-application--is-rtl": this.$vuetify.rtl,
							"v-application--is-ltr": !this.$vuetify.rtl
						}, this.themeClasses),
						attrs: {
							"data-app": !0
						},
						domProps: {
							id: this.id
						}
					}, [t])
				}
			})),
			Wn = (n("daaf"), r["a"].extend({
				name: "ssr-bootable",
				data: function() {
					return {
						isBooted: !1
					}
				},
				mounted: function() {
					var e = this;
					window.requestAnimationFrame((function() {
						e.$el.setAttribute("data-booted", "true"), e.isBooted = !0
					}))
				}
			})),
			Qn = Wn.extend({
				name: "v-content",
				props: {
					tag: {
						type: String,
						default: "main"
					}
				},
				computed: {
					styles: function() {
						var e = this.$vuetify.application,
							t = e.bar,
							n = e.top,
							f = e.right,
							r = e.footer,
							i = e.insetFooter,
							o = e.bottom,
							a = e.left;
						return {
							paddingTop: "".concat(n + t, "px"),
							paddingRight: "".concat(f, "px"),
							paddingBottom: "".concat(r + i + o, "px"),
							paddingLeft: "".concat(a, "px")
						}
					}
				},
				render: function(e) {
					var t = {
						staticClass: "v-content",
						style: this.styles,
						ref: "content"
					};
					return e(this.tag, t, [e("div", {
						staticClass: "v-content__wrap"
					}, this.$slots.default)])
				}
			}),
			Gn = v(Un, c, l, !1, null, null, null),
			Zn = Gn.exports;

		function Yn(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function Jn(e, t) {
			for (var n = 0; n < t.length; n++) {
				var f = t[n];
				f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), Object.defineProperty(e, f.key, f)
			}
		}

		function Xn(e, t, n) {
			return t && Jn(e.prototype, t), n && Jn(e, n), e
		}

		function Kn(e) {
			var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
			if (!Kn.installed) {
				Kn.installed = !0, r["a"] !== e && N("Multiple instances of Vue detected\nSee https://github.com/vuetifyjs/vuetify/issues/4068\n\nIf you're seeing \"$attrs is readonly\", it's caused by this");
				var n = t.components || {},
					f = t.directives || {};
				for (var i in f) {
					var o = f[i];
					e.directive(i, o)
				}(function t(n) {
					if (n) {
						for (var f in n) {
							var r = n[f];
							r && !t(r.$_vuetify_subcomponents) && e.component(f, r)
						}
						return !0
					}
					return !1
				})(n), e.$_vuetify_installed || (e.$_vuetify_installed = !0, e.mixin({
					beforeCreate: function() {
						var t = this.$options;
						t.vuetify ? (t.vuetify.init(this, t.ssrContext), this.$vuetify = e.observable(t.vuetify.framework)) : this.$vuetify = t.parent && t.parent.$vuetify || this
					}
				}))
			}
		}

		function ef(e, t) {
			if (null == e) return {};
			var n, f, r = {},
				i = Object.keys(e);
			for (f = 0; f < i.length; f++) n = i[f], t.indexOf(n) >= 0 || (r[n] = e[n]);
			return r
		}

		function tf(e, t) {
			if (null == e) return {};
			var n, f, r = ef(e, t);
			if (Object.getOwnPropertySymbols) {
				var i = Object.getOwnPropertySymbols(e);
				for (f = 0; f < i.length; f++) n = i[f], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
			}
			return r
		}

		function nf(e, t) {
			return nf = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			}, nf(e, t)
		}

		function ff(e, t) {
			if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					writable: !0,
					configurable: !0
				}
			}), t && nf(e, t)
		}
		y()(Gn, {
			VApp: qn,
			VContent: Qn
		});
		n("4ae1"), n("3410");

		function rf(e) {
			return rf = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			}, rf(e)
		}

		function of() {
			if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" === typeof Proxy) return !0;
			try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
			} catch (va) {
				return !1
			}
		}

		function af(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}

		function sf(e, t) {
			return !t || "object" !== _(t) && "function" !== typeof t ? af(e) : t
		}

		function cf(e) {
			return function() {
				var t, n = rf(e);
				if (of()) {
					var f = rf(this).constructor;
					t = Reflect.construct(n, arguments, f)
				} else t = n.apply(this, arguments);
				return sf(this, t)
			}
		}
		n("95ed");
		var lf = {
				badge: "Badge",
				close: "Close",
				dataIterator: {
					noResultsText: "No matching records found",
					loadingText: "Loading items..."
				},
				dataTable: {
					itemsPerPageText: "Rows per page:",
					ariaLabel: {
						sortDescending: "Sorted descending.",
						sortAscending: "Sorted ascending.",
						sortNone: "Not sorted.",
						activateNone: "Activate to remove sorting.",
						activateDescending: "Activate to sort descending.",
						activateAscending: "Activate to sort ascending."
					},
					sortBy: "Sort by"
				},
				dataFooter: {
					itemsPerPageText: "Items per page:",
					itemsPerPageAll: "All",
					nextPage: "Next page",
					prevPage: "Previous page",
					firstPage: "First page",
					lastPage: "Last page",
					pageText: "{0}-{1} of {2}"
				},
				datePicker: {
					itemsSelected: "{0} selected"
				},
				noDataText: "No data available",
				carousel: {
					prev: "Previous visual",
					next: "Next visual",
					ariaLabel: {
						delimiter: "Carousel slide {0} of {1}"
					}
				},
				calendar: {
					moreEvents: "{0} more"
				},
				fileInput: {
					counter: "{0} files",
					counterSize: "{0} files ({1} in total)"
				},
				timePicker: {
					am: "AM",
					pm: "PM"
				}
			},
			uf = {
				breakpoint: {
					scrollBarWidth: 16,
					thresholds: {
						xs: 600,
						sm: 960,
						md: 1280,
						lg: 1920
					}
				},
				icons: {
					iconfont: "mdi",
					values: {}
				},
				lang: {
					current: "en",
					locales: {
						en: lf
					},
					t: void 0
				},
				rtl: !1,
				theme: {
					dark: !1,
					default: "light",
					disable: !1,
					options: {
						cspNonce: void 0,
						customProperties: void 0,
						minifyTheme: void 0,
						themeCache: void 0
					},
					themes: {
						light: {
							primary: "#1976D2",
							secondary: "#424242",
							accent: "#82B1FF",
							error: "#FF5252",
							info: "#2196F3",
							success: "#4CAF50",
							warning: "#FB8C00"
						},
						dark: {
							primary: "#2196F3",
							secondary: "#424242",
							accent: "#FF4081",
							error: "#FF5252",
							info: "#2196F3",
							success: "#4CAF50",
							warning: "#FB8C00"
						}
					}
				}
			},
			df = function() {
				function e() {
					Yn(this, e), this.framework = {}
				}
				return Xn(e, [{
					key: "init",
					value: function(e, t) {}
				}]), e
			}(),
			pf = function(e) {
				ff(n, e);
				var t = cf(n);

				function n(e, f) {
					var r;
					Yn(this, n), r = t.call(this);
					var i = ie({}, uf),
						o = f.userPreset,
						a = o.preset,
						s = void 0 === a ? {} : a,
						c = tf(o, ["preset"]);
					return null != s.preset && M("Global presets do not support the **preset** option, it can be safely omitted"), f.preset = ie(ie(i, s), c), r
				}
				return n
			}(df);
		pf.property = "presets";
		n("07ac");
		var hf = function(e) {
			ff(n, e);
			var t = cf(n);

			function n() {
				var e;
				return Yn(this, n), e = t.apply(this, arguments), e.bar = 0, e.top = 0, e.left = 0, e.insetFooter = 0, e.right = 0, e.bottom = 0, e.footer = 0, e.application = {
					bar: {},
					top: {},
					left: {},
					insetFooter: {},
					right: {},
					bottom: {},
					footer: {}
				}, e
			}
			return Xn(n, [{
				key: "register",
				value: function(e, t, n) {
					this.application[t] = O({}, e, n), this.update(t)
				}
			}, {
				key: "unregister",
				value: function(e, t) {
					null != this.application[t][e] && (delete this.application[t][e], this.update(t))
				}
			}, {
				key: "update",
				value: function(e) {
					this[e] = Object.values(this.application[e]).reduce((function(e, t) {
						return e + t
					}), 0)
				}
			}]), n
		}(df);
		hf.property = "application";
		var mf = function(e) {
			ff(n, e);
			var t = cf(n);

			function n(e) {
				var f;
				Yn(this, n), f = t.call(this), f.xs = !1, f.sm = !1, f.md = !1, f.lg = !1, f.xl = !1, f.xsOnly = !1, f.smOnly = !1, f.smAndDown = !1, f.smAndUp = !1, f.mdOnly = !1, f.mdAndDown = !1, f.mdAndUp = !1, f.lgOnly = !1, f.lgAndDown = !1, f.lgAndUp = !1, f.xlOnly = !1, f.name = "", f.height = 0, f.width = 0, f.resizeTimeout = 0;
				var r = e[n.property],
					i = r.scrollBarWidth,
					o = r.thresholds;
				return f.scrollBarWidth = i, f.thresholds = o, f.init(), f
			}
			return Xn(n, [{
				key: "init",
				value: function() {
					"undefined" !== typeof window && (window.addEventListener("resize", this.onResize.bind(this), {
						passive: !0
					}), this.update())
				}
			}, {
				key: "onResize",
				value: function() {
					clearTimeout(this.resizeTimeout), this.resizeTimeout = window.setTimeout(this.update.bind(this), 200)
				}
			}, {
				key: "update",
				value: function() {
					var e = this.getClientHeight(),
						t = this.getClientWidth(),
						n = t < this.thresholds.xs,
						f = t < this.thresholds.sm && !n,
						r = t < this.thresholds.md - this.scrollBarWidth && !(f || n),
						i = t < this.thresholds.lg - this.scrollBarWidth && !(r || f || n),
						o = t >= this.thresholds.lg - this.scrollBarWidth;
					switch (this.height = e, this.width = t, this.xs = n, this.sm = f, this.md = r, this.lg = i, this.xl = o, this.xsOnly = n, this.smOnly = f, this.smAndDown = (n || f) && !(r || i || o), this.smAndUp = !n && (f || r || i || o), this.mdOnly = r, this.mdAndDown = (n || f || r) && !(i || o), this.mdAndUp = !(n || f) && (r || i || o), this.lgOnly = i, this.lgAndDown = (n || f || r || i) && !o, this.lgAndUp = !(n || f || r) && (i || o), this.xlOnly = o, !0) {
						case n:
							this.name = "xs";
							break;
						case f:
							this.name = "sm";
							break;
						case r:
							this.name = "md";
							break;
						case i:
							this.name = "lg";
							break;
						default:
							this.name = "xl";
							break
					}
				}
			}, {
				key: "getClientWidth",
				value: function() {
					return "undefined" === typeof document ? 0 : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
				}
			}, {
				key: "getClientHeight",
				value: function() {
					return "undefined" === typeof document ? 0 : Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
				}
			}]), n
		}(df);
		mf.property = "breakpoint";
		var gf = function(e) {
				return e
			},
			vf = function(e) {
				return Math.pow(e, 2)
			},
			bf = function(e) {
				return e * (2 - e)
			},
			yf = function(e) {
				return e < .5 ? 2 * Math.pow(e, 2) : (4 - 2 * e) * e - 1
			},
			_f = function(e) {
				return Math.pow(e, 3)
			},
			wf = function(e) {
				return Math.pow(--e, 3) + 1
			},
			xf = function(e) {
				return e < .5 ? 4 * Math.pow(e, 3) : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1
			},
			kf = function(e) {
				return Math.pow(e, 4)
			},
			Cf = function(e) {
				return 1 - Math.pow(--e, 4)
			},
			Sf = function(e) {
				return e < .5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e
			},
			Af = function(e) {
				return Math.pow(e, 5)
			},
			Of = function(e) {
				return 1 + Math.pow(--e, 5)
			},
			Ef = function(e) {
				return e < .5 ? 16 * Math.pow(e, 5) : 1 + 16 * Math.pow(--e, 5)
			};

		function Tf(e) {
			if ("number" === typeof e) return e;
			var t = If(e);
			if (!t) throw "string" === typeof e ? new Error('Target element "'.concat(e, '" not found.')) : new TypeError("Target must be a Number/Selector/HTMLElement/VueComponent, received ".concat(Lf(e), " instead."));
			var n = 0;
			while (t) n += t.offsetTop, t = t.offsetParent;
			return n
		}

		function jf(e) {
			var t = If(e);
			if (t) return t;
			throw "string" === typeof e ? new Error('Container element "'.concat(e, '" not found.')) : new TypeError("Container must be a Selector/HTMLElement/VueComponent, received ".concat(Lf(e), " instead."))
		}

		function Lf(e) {
			return null == e ? e : e.constructor.name
		}

		function If(e) {
			return "string" === typeof e ? document.querySelector(e) : e && e._isVue ? e.$el : e instanceof HTMLElement ? e : null
		}

		function Mf(e) {
			var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
				n = T({
					container: document.scrollingElement || document.body || document.documentElement,
					duration: 500,
					offset: 0,
					easing: "easeInOutCubic",
					appOffset: !0
				}, t),
				r = jf(n.container);
			if (n.appOffset && Mf.framework.application) {
				var i = r.classList.contains("v-navigation-drawer"),
					o = r.classList.contains("v-navigation-drawer--clipped"),
					a = Mf.framework.application,
					s = a.bar,
					c = a.top;
				n.offset += s, i && !o || (n.offset += c)
			}
			var l, u = performance.now();
			l = "number" === typeof e ? Tf(e) - n.offset : Tf(e) - Tf(r) - n.offset;
			var d = r.scrollTop;
			if (l === d) return Promise.resolve(l);
			var p = "function" === typeof n.easing ? n.easing : f[n.easing];
			if (!p) throw new TypeError('Easing function "'.concat(n.easing, '" not found.'));
			return new Promise((function(e) {
				return requestAnimationFrame((function t(f) {
					var i = f - u,
						o = Math.abs(n.duration ? Math.min(i / n.duration, 1) : 1);
					r.scrollTop = Math.floor(d + (l - d) * p(o));
					var a = r === document.body ? document.documentElement.clientHeight : r.clientHeight;
					if (1 === o || a + r.scrollTop === r.scrollHeight) return e(l);
					requestAnimationFrame(t)
				}))
			}))
		}
		Mf.framework = {}, Mf.init = function() {};
		var Nf = function(e) {
			ff(n, e);
			var t = cf(n);

			function n() {
				var e;
				return Yn(this, n), e = t.call(this), sf(e, Mf)
			}
			return n
		}(df);
		Nf.property = "goTo";
		var Pf = {
				complete: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",
				cancel: "M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",
				close: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",
				delete: "M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",
				clear: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",
				success: "M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z",
				info: "M13,9H11V7H13M13,17H11V11H13M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",
				warning: "M11,4.5H13V15.5H11V4.5M13,17.5V19.5H11V17.5H13Z",
				error: "M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z",
				prev: "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",
				next: "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z",
				checkboxOn: "M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",
				checkboxOff: "M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z",
				checkboxIndeterminate: "M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",
				delimiter: "M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",
				sort: "M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z",
				expand: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",
				menu: "M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",
				subgroup: "M7,10L12,15L17,10H7Z",
				dropdown: "M7,10L12,15L17,10H7Z",
				radioOn: "M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7Z",
				radioOff: "M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",
				edit: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z",
				ratingEmpty: "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",
				ratingFull: "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z",
				ratingHalf: "M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",
				loading: "M19,8L15,12H18C18,15.31 15.31,18 12,18C11,18 10.03,17.75 9.2,17.3L7.74,18.76C8.97,19.54 10.43,20 12,20C16.42,20 20,16.42 20,12H23M6,12C6,8.69 8.69,6 12,6C13,6 13.97,6.25 14.8,6.7L16.26,5.24C15.03,4.46 13.57,4 12,4C7.58,4 4,7.58 4,12H1L5,16L9,12",
				first: "M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z",
				last: "M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z",
				unfold: "M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z",
				file: "M16.5,6V17.5C16.5,19.71 14.71,21.5 12.5,21.5C10.29,21.5 8.5,19.71 8.5,17.5V5C8.5,3.62 9.62,2.5 11,2.5C12.38,2.5 13.5,3.62 13.5,5V15.5C13.5,16.05 13.05,16.5 12.5,16.5C11.95,16.5 11.5,16.05 11.5,15.5V6H10V15.5C10,16.88 11.12,18 12.5,18C13.88,18 15,16.88 15,15.5V5C15,2.79 13.21,1 11,1C8.79,1 7,2.79 7,5V17.5C7,20.54 9.46,23 12.5,23C15.54,23 18,20.54 18,17.5V6H16.5Z",
				plus: "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",
				minus: "M19,13H5V11H19V13Z"
			},
			Bf = Pf,
			$f = {
				complete: "check",
				cancel: "cancel",
				close: "close",
				delete: "cancel",
				clear: "clear",
				success: "check_circle",
				info: "info",
				warning: "priority_high",
				error: "warning",
				prev: "chevron_left",
				next: "chevron_right",
				checkboxOn: "check_box",
				checkboxOff: "check_box_outline_blank",
				checkboxIndeterminate: "indeterminate_check_box",
				delimiter: "fiber_manual_record",
				sort: "arrow_upward",
				expand: "keyboard_arrow_down",
				menu: "menu",
				subgroup: "arrow_drop_down",
				dropdown: "arrow_drop_down",
				radioOn: "radio_button_checked",
				radioOff: "radio_button_unchecked",
				edit: "edit",
				ratingEmpty: "star_border",
				ratingFull: "star",
				ratingHalf: "star_half",
				loading: "cached",
				first: "first_page",
				last: "last_page",
				unfold: "unfold_more",
				file: "attach_file",
				plus: "add",
				minus: "remove"
			},
			zf = $f,
			Rf = {
				complete: "mdi-check",
				cancel: "mdi-close-circle",
				close: "mdi-close",
				delete: "mdi-close-circle",
				clear: "mdi-close",
				success: "mdi-check-circle",
				info: "mdi-information",
				warning: "mdi-exclamation",
				error: "mdi-alert",
				prev: "mdi-chevron-left",
				next: "mdi-chevron-right",
				checkboxOn: "mdi-checkbox-marked",
				checkboxOff: "mdi-checkbox-blank-outline",
				checkboxIndeterminate: "mdi-minus-box",
				delimiter: "mdi-circle",
				sort: "mdi-arrow-up",
				expand: "mdi-chevron-down",
				menu: "mdi-menu",
				subgroup: "mdi-menu-down",
				dropdown: "mdi-menu-down",
				radioOn: "mdi-radiobox-marked",
				radioOff: "mdi-radiobox-blank",
				edit: "mdi-pencil",
				ratingEmpty: "mdi-star-outline",
				ratingFull: "mdi-star",
				ratingHalf: "mdi-star-half",
				loading: "mdi-cached",
				first: "mdi-page-first",
				last: "mdi-page-last",
				unfold: "mdi-unfold-more-horizontal",
				file: "mdi-paperclip",
				plus: "mdi-plus",
				minus: "mdi-minus"
			},
			Df = Rf,
			Vf = {
				complete: "fas fa-check",
				cancel: "fas fa-times-circle",
				close: "fas fa-times",
				delete: "fas fa-times-circle",
				clear: "fas fa-times-circle",
				success: "fas fa-check-circle",
				info: "fas fa-info-circle",
				warning: "fas fa-exclamation",
				error: "fas fa-exclamation-triangle",
				prev: "fas fa-chevron-left",
				next: "fas fa-chevron-right",
				checkboxOn: "fas fa-check-square",
				checkboxOff: "far fa-square",
				checkboxIndeterminate: "fas fa-minus-square",
				delimiter: "fas fa-circle",
				sort: "fas fa-sort-up",
				expand: "fas fa-chevron-down",
				menu: "fas fa-bars",
				subgroup: "fas fa-caret-down",
				dropdown: "fas fa-caret-down",
				radioOn: "far fa-dot-circle",
				radioOff: "far fa-circle",
				edit: "fas fa-edit",
				ratingEmpty: "far fa-star",
				ratingFull: "fas fa-star",
				ratingHalf: "fas fa-star-half",
				loading: "fas fa-sync",
				first: "fas fa-step-backward",
				last: "fas fa-step-forward",
				unfold: "fas fa-arrows-alt-v",
				file: "fas fa-paperclip",
				plus: "fas fa-plus",
				minus: "fas fa-minus"
			},
			Hf = Vf,
			Ff = {
				complete: "fa fa-check",
				cancel: "fa fa-times-circle",
				close: "fa fa-times",
				delete: "fa fa-times-circle",
				clear: "fa fa-times-circle",
				success: "fa fa-check-circle",
				info: "fa fa-info-circle",
				warning: "fa fa-exclamation",
				error: "fa fa-exclamation-triangle",
				prev: "fa fa-chevron-left",
				next: "fa fa-chevron-right",
				checkboxOn: "fa fa-check-square",
				checkboxOff: "fa fa-square-o",
				checkboxIndeterminate: "fa fa-minus-square",
				delimiter: "fa fa-circle",
				sort: "fa fa-sort-up",
				expand: "fa fa-chevron-down",
				menu: "fa fa-bars",
				subgroup: "fa fa-caret-down",
				dropdown: "fa fa-caret-down",
				radioOn: "fa fa-dot-circle-o",
				radioOff: "fa fa-circle-o",
				edit: "fa fa-pencil",
				ratingEmpty: "fa fa-star-o",
				ratingFull: "fa fa-star",
				ratingHalf: "fa fa-star-half-o",
				loading: "fa fa-refresh",
				first: "fa fa-step-backward",
				last: "fa fa-step-forward",
				unfold: "fa fa-angle-double-down",
				file: "fa fa-paperclip",
				plus: "fa fa-plus",
				minus: "fa fa-minus"
			},
			Uf = Ff;

		function qf(e, t) {
			var n = {};
			for (var f in t) n[f] = {
				component: e,
				props: {
					icon: t[f].split(" fa-")
				}
			};
			return n
		}
		var Wf = qf("font-awesome-icon", Hf),
			Qf = Object.freeze({
				mdiSvg: Bf,
				md: zf,
				mdi: Df,
				fa: Hf,
				fa4: Uf,
				faSvg: Wf
			}),
			Gf = function(e) {
				ff(n, e);
				var t = cf(n);

				function n(e) {
					var f;
					Yn(this, n), f = t.call(this);
					var r = e[n.property],
						i = r.iconfont,
						o = r.values;
					return f.iconfont = i, f.values = ie(Qf[i], o), f
				}
				return n
			}(df);
		Gf.property = "icons";
		var Zf = "$vuetify.",
			Yf = Symbol("Lang fallback");

		function Jf(e, t) {
			var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
				f = arguments.length > 3 ? arguments[3] : void 0,
				r = t.replace(Zf, ""),
				i = Q(e, r, Yf);
			return i === Yf && (n ? (N('Translation key "'.concat(r, '" not found in fallback')), i = t) : (M('Translation key "'.concat(r, '" not found, falling back to default')), i = Jf(f, t, !0, f))), i
		}
		var Xf = function(e) {
			ff(n, e);
			var t = cf(n);

			function n(e) {
				var f;
				Yn(this, n), f = t.call(this), f.defaultLocale = "en";
				var r = e[n.property],
					i = r.current,
					o = r.locales,
					a = r.t;
				return f.current = i, f.locales = o, f.translator = a || f.defaultTranslator, f
			}
			return Xn(n, [{
				key: "currentLocale",
				value: function(e) {
					var t = this.locales[this.current],
						n = this.locales[this.defaultLocale];
					return Jf(t, e, !1, n)
				}
			}, {
				key: "t",
				value: function(e) {
					for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), f = 1; f < t; f++) n[f - 1] = arguments[f];
					return e.startsWith(Zf) ? this.translator.apply(this, [e].concat(n)) : this.replace(e, n)
				}
			}, {
				key: "defaultTranslator",
				value: function(e) {
					for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), f = 1; f < t; f++) n[f - 1] = arguments[f];
					return this.replace(this.currentLocale(e), n)
				}
			}, {
				key: "replace",
				value: function(e, t) {
					return e.replace(/\{(\d+)\}/g, (function(e, n) {
						return String(t[+n])
					}))
				}
			}]), n
		}(df);
		Xf.property = "lang";
		n("18a5");
		var Kf = [
				[3.2406, -1.5372, -.4986],
				[-.9689, 1.8758, .0415],
				[.0557, -.204, 1.057]
			],
			er = function(e) {
				return e <= .0031308 ? 12.92 * e : 1.055 * Math.pow(e, 1 / 2.4) - .055
			},
			tr = [
				[.4124, .3576, .1805],
				[.2126, .7152, .0722],
				[.0193, .1192, .9505]
			],
			nr = function(e) {
				return e <= .04045 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)
			};

		function fr(e) {
			for (var t = Array(3), n = er, f = Kf, r = 0; r < 3; ++r) t[r] = Math.round(255 * re(n(f[r][0] * e[0] + f[r][1] * e[1] + f[r][2] * e[2])));
			return (t[0] << 16) + (t[1] << 8) + (t[2] << 0)
		}

		function rr(e) {
			for (var t = [0, 0, 0], n = nr, f = tr, r = n((e >> 16 & 255) / 255), i = n((e >> 8 & 255) / 255), o = n((e >> 0 & 255) / 255), a = 0; a < 3; ++a) t[a] = f[a][0] * r + f[a][1] * i + f[a][2] * o;
			return t
		}

		function ir(e) {
			var t;
			if ("number" === typeof e) t = e;
			else {
				if ("string" !== typeof e) throw new TypeError("Colors can only be numbers or strings, recieved ".concat(null == e ? e : e.constructor.name, " instead"));
				var n = "#" === e[0] ? e.substring(1) : e;
				3 === n.length && (n = n.split("").map((function(e) {
					return e + e
				})).join("")), 6 !== n.length && M("'".concat(e, "' is not a valid rgb color")), t = parseInt(n, 16)
			}
			return t < 0 ? (M("Colors cannot be negative: '".concat(e, "'")), t = 0) : (t > 16777215 || isNaN(t)) && (M("'".concat(e, "' is not a valid rgb color")), t = 16777215), t
		}

		function or(e) {
			var t = e.toString(16);
			return t.length < 6 && (t = "0".repeat(6 - t.length) + t), "#" + t
		}

		function ar(e) {
			return or(ir(e))
		}
		n("3ea3");
		var sr = .20689655172413793,
			cr = function(e) {
				return e > Math.pow(sr, 3) ? Math.cbrt(e) : e / (3 * Math.pow(sr, 2)) + 4 / 29
			},
			lr = function(e) {
				return e > sr ? Math.pow(e, 3) : 3 * Math.pow(sr, 2) * (e - 4 / 29)
			};

		function ur(e) {
			var t = cr,
				n = t(e[1]);
			return [116 * n - 16, 500 * (t(e[0] / .95047) - n), 200 * (n - t(e[2] / 1.08883))]
		}

		function dr(e) {
			var t = lr,
				n = (e[0] + 16) / 116;
			return [.95047 * t(n + e[1] / 500), t(n), 1.08883 * t(n - e[2] / 200)]
		}

		function pr(e) {
			for (var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = e.anchor, f = tf(e, ["anchor"]), r = Object.keys(f), i = {}, o = 0; o < r.length; ++o) {
				var a = r[o],
					s = e[a];
				null != s && (t ? ("base" === a || a.startsWith("lighten") || a.startsWith("darken")) && (i[a] = ar(s)) : "object" === _(s) ? i[a] = pr(s, !0) : i[a] = yr(a, ir(s)))
			}
			return t || (i.anchor = n || i.base || i.primary.base), i
		}
		var hr = function(e, t) {
				return "\n.v-application .".concat(e, " {\n  background-color: ").concat(t, " !important;\n  border-color: ").concat(t, " !important;\n}\n.v-application .").concat(e, "--text {\n  color: ").concat(t, " !important;\n  caret-color: ").concat(t, " !important;\n}")
			},
			mr = function(e, t, n) {
				var f = t.split(/(\d)/, 2),
					r = A(f, 2),
					i = r[0],
					o = r[1];
				return "\n.v-application .".concat(e, ".").concat(i, "-").concat(o, " {\n  background-color: ").concat(n, " !important;\n  border-color: ").concat(n, " !important;\n}\n.v-application .").concat(e, "--text.text--").concat(i, "-").concat(o, " {\n  color: ").concat(n, " !important;\n  caret-color: ").concat(n, " !important;\n}")
			},
			gr = function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "base";
				return "--v-".concat(e, "-").concat(t)
			},
			vr = function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "base";
				return "var(".concat(gr(e, t), ")")
			};

		function br(e) {
			var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
				n = e.anchor,
				f = tf(e, ["anchor"]),
				r = Object.keys(f);
			if (!r.length) return "";
			var i = "",
				o = "",
				a = t ? vr("anchor") : n;
			o += ".v-application a { color: ".concat(a, "; }"), t && (i += "  ".concat(gr("anchor"), ": ").concat(n, ";\n"));
			for (var s = 0; s < r.length; ++s) {
				var c = r[s],
					l = e[c];
				o += hr(c, t ? vr(c) : l.base), t && (i += "  ".concat(gr(c), ": ").concat(l.base, ";\n"));
				for (var u = Object.keys(l), d = 0; d < u.length; ++d) {
					var p = u[d],
						h = l[p];
					"base" !== p && (o += mr(c, p, t ? vr(c, p) : h), t && (i += "  ".concat(gr(c, p), ": ").concat(h, ";\n")))
				}
			}
			return t && (i = ":root {\n".concat(i, "}\n\n")), i + o
		}

		function yr(e, t) {
			for (var n = {
					base: or(t)
				}, f = 5; f > 0; --f) n["lighten".concat(f)] = or(_r(t, f));
			for (var r = 1; r <= 4; ++r) n["darken".concat(r)] = or(wr(t, r));
			return n
		}

		function _r(e, t) {
			var n = ur(rr(e));
			return n[0] = n[0] + 10 * t, fr(dr(n))
		}

		function wr(e, t) {
			var n = ur(rr(e));
			return n[0] = n[0] - 10 * t, fr(dr(n))
		}
		var xr = function(e) {
			ff(n, e);
			var t = cf(n);

			function n(e) {
				var f;
				Yn(this, n), f = t.call(this), f.disabled = !1, f.isDark = null, f.vueInstance = null, f.vueMeta = null;
				var r = e[n.property],
					i = r.dark,
					o = r.disable,
					a = r.options,
					s = r.themes;
				return f.dark = Boolean(i), f.defaults = f.themes = s, f.options = a, o ? (f.disabled = !0, sf(f)) : (f.themes = {
					dark: f.fillVariant(s.dark, !0),
					light: f.fillVariant(s.light, !1)
				}, f)
			}
			return Xn(n, [{
				key: "applyTheme",
				value: function() {
					if (this.disabled) return this.clearCss();
					this.css = this.generatedStyles
				}
			}, {
				key: "clearCss",
				value: function() {
					this.css = ""
				}
			}, {
				key: "init",
				value: function(e, t) {
					this.disabled || (e.$meta ? this.initVueMeta(e) : t && this.initSSR(t), this.initTheme())
				}
			}, {
				key: "setTheme",
				value: function(e, t) {
					this.themes[e] = Object.assign(this.themes[e], t), this.applyTheme()
				}
			}, {
				key: "resetThemes",
				value: function() {
					this.themes.light = Object.assign({}, this.defaults.light), this.themes.dark = Object.assign({}, this.defaults.dark), this.applyTheme()
				}
			}, {
				key: "checkOrCreateStyleElement",
				value: function() {
					return this.styleEl = document.getElementById("vuetify-theme-stylesheet"), !!this.styleEl || (this.genStyleElement(), Boolean(this.styleEl))
				}
			}, {
				key: "fillVariant",
				value: function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
						t = arguments.length > 1 ? arguments[1] : void 0,
						n = this.themes[t ? "dark" : "light"];
					return Object.assign({}, n, e)
				}
			}, {
				key: "genStyleElement",
				value: function() {
					if ("undefined" !== typeof document) {
						var e = this.options || {};
						this.styleEl = document.createElement("style"), this.styleEl.type = "text/css", this.styleEl.id = "vuetify-theme-stylesheet", e.cspNonce && this.styleEl.setAttribute("nonce", e.cspNonce), document.head.appendChild(this.styleEl)
					}
				}
			}, {
				key: "initVueMeta",
				value: function(e) {
					var t = this;
					if (this.vueMeta = e.$meta(), this.isVueMeta23) e.$nextTick((function() {
						t.applyVueMeta23()
					}));
					else {
						var n = "function" === typeof this.vueMeta.getOptions ? this.vueMeta.getOptions().keyName : "metaInfo",
							f = e.$options[n] || {};
						e.$options[n] = function() {
							f.style = f.style || [];
							var e = f.style.find((function(e) {
								return "vuetify-theme-stylesheet" === e.id
							}));
							return e ? e.cssText = t.generatedStyles : f.style.push({
								cssText: t.generatedStyles,
								type: "text/css",
								id: "vuetify-theme-stylesheet",
								nonce: (t.options || {}).cspNonce
							}), f
						}
					}
				}
			}, {
				key: "applyVueMeta23",
				value: function() {
					var e = this.vueMeta.addApp("vuetify"),
						t = e.set;
					t({
						style: [{
							cssText: this.generatedStyles,
							type: "text/css",
							id: "vuetify-theme-stylesheet",
							nonce: (this.options || {}).cspNonce
						}]
					})
				}
			}, {
				key: "initSSR",
				value: function(e) {
					var t = this.options || {},
						n = t.cspNonce ? ' nonce="'.concat(t.cspNonce, '"') : "";
					e.head = e.head || "", e.head += '<style type="text/css" id="vuetify-theme-stylesheet"'.concat(n, ">").concat(this.generatedStyles, "</style>")
				}
			}, {
				key: "initTheme",
				value: function() {
					var e = this;
					"undefined" !== typeof document && (this.vueInstance && this.vueInstance.$destroy(), this.vueInstance = new r["a"]({
						data: {
							themes: this.themes
						},
						watch: {
							themes: {
								immediate: !0,
								deep: !0,
								handler: function() {
									return e.applyTheme()
								}
							}
						}
					}))
				}
			}, {
				key: "css",
				set: function(e) {
					this.vueMeta ? this.isVueMeta23 && this.applyVueMeta23() : this.checkOrCreateStyleElement() && (this.styleEl.innerHTML = e)
				}
			}, {
				key: "dark",
				set: function(e) {
					var t = this.isDark;
					this.isDark = e, null != t && this.applyTheme()
				},
				get: function() {
					return Boolean(this.isDark)
				}
			}, {
				key: "currentTheme",
				get: function() {
					var e = this.dark ? "dark" : "light";
					return this.themes[e]
				}
			}, {
				key: "generatedStyles",
				get: function() {
					var e, t = this.parsedTheme,
						n = this.options || {};
					return null != n.themeCache && (e = n.themeCache.get(t), null != e) || (e = br(t, n.customProperties), null != n.minifyTheme && (e = n.minifyTheme(e)), null != n.themeCache && n.themeCache.set(t, e)), e
				}
			}, {
				key: "parsedTheme",
				get: function() {
					var e = this.currentTheme || {};
					return pr(e)
				}
			}, {
				key: "isVueMeta23",
				get: function() {
					return "function" === typeof this.vueMeta.addApp
				}
			}]), n
		}(df);
		xr.property = "theme";
		var kr = function() {
			function e() {
				var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				Yn(this, e), this.framework = {}, this.installed = [], this.preset = {}, this.userPreset = {}, this.userPreset = t, this.use(pf), this.use(hf), this.use(mf), this.use(Nf), this.use(Gf), this.use(Xf), this.use(xr)
			}
			return Xn(e, [{
				key: "init",
				value: function(e, t) {
					var n = this;
					this.installed.forEach((function(f) {
						var r = n.framework[f];
						r.framework = n.framework, r.init(e, t)
					})), this.framework.rtl = Boolean(this.preset.rtl)
				}
			}, {
				key: "use",
				value: function(e) {
					var t = e.property;
					this.installed.includes(t) || (this.framework[t] = new e(this.preset, this), this.installed.push(t))
				}
			}]), e
		}();
		kr.install = Kn, kr.installed = !1, kr.version = "2.2.23", r["a"].use(kr);
		var Cr = new kr({
				icons: {
					iconfont: "fa"
				}
			}),
			Sr = (n("77ed"), function() {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n("div", [n("div", {
					staticClass: "sc-launcher",
					class: {
						opened: e.isOpen
					},
					style: {
						backgroundColor: e.colors.launcher.bg
					},
					on: {
						click: function(t) {
							t.preventDefault(), e.isOpen ? e.close() : e.openAndFocus()
						}
					}
				}, [e.newMessagesCount > 0 && !e.isOpen ? n("div", {
					staticClass: "sc-new-messsages-count"
				}, [e._v(" " + e._s(e.newMessagesCount) + " ")]) : e._e(), e.isOpen ? n("img", {
					staticClass: "sc-closed-icon",
					attrs: {
						src: e.icons.close.img,
						alt: e.icons.close.name
					}
				}) : n("img", {
					staticClass: "sc-open-icon",
					attrs: {
						src: e.icons.open.img,
						alt: e.icons.open.name
					}
				})]), n("ChatWindow", {
					attrs: {
						messageList: e.messageList,
						onUserInputSubmit: e.onMessageWasSent,
						participants: e.participants,
						title: e.chatWindowTitle,
						titleImageUrl: e.titleImageUrl,
						isOpen: e.isOpen,
						onClose: e.close,
						showEmoji: e.showEmoji,
						showFile: e.showFile,
						placeholder: e.placeholder,
						showTypingIndicator: e.showTypingIndicator,
						colors: e.colors,
						alwaysScrollToBottom: e.alwaysScrollToBottom,
						messageStyling: e.messageStyling,
						disableUserListToggle: e.disableUserListToggle
					},
					on: {
						scrollToTop: function(t) {
							return e.$emit("scrollToTop")
						},
						onType: function(t) {
							return e.$emit("onType")
						},
						edit: function(t) {
							return e.$emit("edit", t)
						},
						remove: function(t) {
							return e.$emit("remove", t)
						}
					},
					scopedSlots: e._u([{
						key: "header",
						fn: function() {
							return [e._t("header")]
						},
						proxy: !0
					}, {
						key: "user-avatar",
						fn: function(t) {
							return [e._t("user-avatar", null, {
								user: t.user,
								message: t.message
							})]
						}
					}, {
						key: "text-message-body",
						fn: function(t) {
							return [e._t("text-message-body", null, {
								message: t.message,
								messageText: t.messageText,
								messageColors: t.messageColors,
								me: t.me
							})]
						}
					}, {
						key: "system-message-body",
						fn: function(t) {
							return [e._t("system-message-body", null, {
								message: t.message
							})]
						}
					}, {
						key: "text-message-toolbox",
						fn: function(t) {
							return [e._t("text-message-toolbox", null, {
								message: t.message,
								me: t.me
							})]
						}
					}], null, !0)
				})], 1)
			}),
			Ar = [],
			Or = function() {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n("div", {
					staticClass: "sc-chat-window",
					class: {
						opened: e.isOpen,
						closed: !e.isOpen
					}
				}, [n("Header", {
					attrs: {
						title: e.title,
						imageUrl: e.titleImageUrl,
						onClose: e.onClose,
						colors: e.colors,
						disableUserListToggle: e.disableUserListToggle
					},
					on: {
						userList: e.handleUserListToggle
					}
				}, [
					[e._t("header")]
				], 2), e.showUserList ? n("UserList", {
					attrs: {
						participants: e.participants
					}
				}) : e._e(), e.showUserList ? e._e() : n("MessageList", {
					attrs: {
						messages: e.messages,
						participants: e.participants,
						showTypingIndicator: e.showTypingIndicator,
						colors: e.colors,
						alwaysScrollToBottom: e.alwaysScrollToBottom,
						messageStyling: e.messageStyling
					},
					on: {
						scrollToTop: function(t) {
							return e.$emit("scrollToTop")
						},
						remove: function(t) {
							return e.$emit("remove", t)
						}
					},
					scopedSlots: e._u([{
						key: "user-avatar",
						fn: function(t) {
							return [e._t("user-avatar", null, {
								user: t.user,
								message: t.message
							})]
						}
					}, {
						key: "text-message-body",
						fn: function(t) {
							return [e._t("text-message-body", null, {
								message: t.message,
								messageText: t.messageText,
								messageColors: t.messageColors,
								me: t.me
							})]
						}
					}, {
						key: "system-message-body",
						fn: function(t) {
							return [e._t("system-message-body", null, {
								message: t.message
							})]
						}
					}, {
						key: "text-message-toolbox",
						fn: function(t) {
							return [e._t("text-message-toolbox", null, {
								message: t.message,
								me: t.me
							})]
						}
					}], null, !0)
				}), e.showUserList ? e._e() : n("UserInput", {
					attrs: {
						showEmoji: e.showEmoji,
						onSubmit: e.onUserInputSubmit,
						suggestions: e.getSuggestions(),
						showFile: e.showFile,
						placeholder: e.placeholder,
						colors: e.colors
					},
					on: {
						onType: function(t) {
							return e.$emit("onType")
						},
						edit: function(t) {
							return e.$emit("edit", t)
						}
					}
				})], 1)
			},
			Er = [],
			Tr = function() {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n("div", {
					staticClass: "sc-header",
					style: {
						background: e.colors.header.bg,
						color: e.colors.header.text
					}
				}, [e._t("default", [e.imageUrl ? n("img", {
					staticClass: "sc-header--img",
					attrs: {
						src: e.imageUrl,
						alt: ""
					}
				}) : e._e(), e.disableUserListToggle ? n("div", {
					staticClass: "sc-header--title"
				}, [e._v(" " + e._s(e.title) + " ")]) : n("div", {
					staticClass: "sc-header--title enabled",
					on: {
						click: e.toggleUserList
					}
				}, [e._v(" " + e._s(e.title) + " ")])]), n("div", {
					staticClass: "sc-header--close-button",
					on: {
						click: e.onClose
					}
				}, [n("img", {
					attrs: {
						src: e.icons.close.img,
						alt: e.icons.close.name
					}
				})])], 2)
			},
			jr = [],
			Lr = n("69eb"),
			Ir = n.n(Lr),
			Mr = {
				props: {
					icons: {
						type: Object,
						default: function() {
							return {
								close: {
									img: Ir.a,
									name: "default"
								}
							}
						}
					},
					imageUrl: {
						type: String,
						required: !0
					},
					title: {
						type: String
					},
					onClose: {
						type: Function,
						required: !0
					},
					colors: {
						type: Object,
						required: !0
					},
					disableUserListToggle: {
						type: Boolean,
						default: !1
					}
				},
				methods: {
					toggleUserList: function() {
						this.inUserList = !this.inUserList, this.$emit("userList", this.inUserList)
					}
				},
				data: function() {
					return {
						inUserList: !1
					}
				}
			},
			Nr = Mr,
			Pr = (n("3532"), v(Nr, Tr, jr, !1, null, "62811356", null)),
			Br = Pr.exports,
			$r = function() {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n("div", {
					ref: "scrollList",
					staticClass: "sc-message-list",
					style: {
						backgroundColor: e.colors.messageList.bg
					},
					on: {
						scroll: e.handleScroll
					}
				}, [e._l(e.messages, (function(t, f) {
					return n("Message", {
						key: f,
						attrs: {
							message: t,
							user: e.profile(t.author),
							colors: e.colors,
							messageStyling: e.messageStyling
						},
						on: {
							remove: function(n) {
								return e.$emit("remove", t)
							}
						},
						scopedSlots: e._u([{
							key: "user-avatar",
							fn: function(t) {
								return [e._t("user-avatar", null, {
									user: t.user,
									message: t.message
								})]
							}
						}, {
							key: "text-message-body",
							fn: function(t) {
								return [e._t("text-message-body", null, {
									message: t.message,
									messageText: t.messageText,
									messageColors: t.messageColors,
									me: t.me
								})]
							}
						}, {
							key: "text-message-toolbox",
							fn: function(t) {
								return [e._t("text-message-toolbox", null, {
									message: t.message,
									me: t.me
								})]
							}
						}], null, !0)
					})
				})), n("Message", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: "" !== e.showTypingIndicator,
						expression: "showTypingIndicator !== ''"
					}],
					attrs: {
						message: {
							author: e.showTypingIndicator,
							type: "typing"
						},
						user: {},
						colors: e.colors,
						messageStyling: e.messageStyling
					}
				})], 2)
			},
			zr = [],
			Rr = function() {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n("div", {
					staticClass: "sc-message"
				}, [n("div", {
					staticClass: "sc-message--content",
					class: {
						sent: "me" === e.message.author,
						received: "me" !== e.message.author && "system" !== e.message.type,
						system: "system" === e.message.type
					}
				}, [e._t("user-avatar", ["system" !== e.message.type ? n("div", {
					directives: [{
						name: "tooltip",
						rawName: "v-tooltip",
						value: e.authorName,
						expression: "authorName"
					}],
					staticClass: "sc-message--avatar",
					style: {
						backgroundImage: "url(" + e.chatImageUrl + ")"
					},
					attrs: {
						title: e.authorName
					}
				}) : e._e()], {
					message: e.message,
					user: e.user
				}), "text" === e.message.type ? n("TextMessage", {
					attrs: {
						message: e.message,
						messageColors: e.determineMessageColors(),
						messageStyling: e.messageStyling
					},
					on: {
						remove: function(t) {
							return e.$emit("remove")
						}
					},
					scopedSlots: e._u([{
						key: "default",
						fn: function(t) {
							return [e._t("text-message-body", null, {
								message: t.message,
								messageText: t.messageText,
								messageColors: t.messageColors,
								me: t.me
							})]
						}
					}, {
						key: "text-message-toolbox",
						fn: function(t) {
							return [e._t("text-message-toolbox", null, {
								message: t.message,
								me: t.me
							})]
						}
					}], null, !0)
				}) : "emoji" === e.message.type ? n("EmojiMessage", {
					attrs: {
						data: e.message.data
					}
				}) : "file" === e.message.type ? n("FileMessage", {
					attrs: {
						data: e.message.data,
						messageColors: e.determineMessageColors()
					}
				}) : "typing" === e.message.type ? n("TypingMessage", {
					attrs: {
						messageColors: e.determineMessageColors()
					}
				}) : "system" === e.message.type ? n("SystemMessage", {
					attrs: {
						data: e.message.data,
						messageColors: e.determineMessageColors()
					}
				}, [e._t("system-message-body", null, {
					message: e.message.data
				})], 2) : e._e()], 2)])
			},
			Dr = [],
			Vr = function() {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n("div", {
					staticClass: "sc-message--text",
					style: e.messageColors
				}, [
					[n("div", {
						staticClass: "sc-message--toolbox",
						style: {
							background: e.messageColors.backgroundColor
						}
					}, [e.me && null != e.message.id && void 0 != e.message.id ? n("button", {
						attrs: {
							disabled: e.isEditing
						},
						on: {
							click: e.edit
						}
					}, [n("icon-base", {
						attrs: {
							color: e.isEditing ? "black" : e.messageColors.color,
							width: "10",
							"icon-name": "edit"
						}
					}, [n("icon-edit")], 1)], 1) : e._e(), e.me && null != e.message.id && void 0 != e.message.id ? n("button", {
						on: {
							click: function(t) {
								return e.$emit("remove")
							}
						}
					}, [n("icon-base", {
						attrs: {
							color: e.messageColors.color,
							width: "10",
							"icon-name": "remove"
						}
					}, [n("icon-cross")], 1)], 1) : e._e(), e._t("text-message-toolbox", null, {
						message: e.message,
						me: e.me
					})], 2)], e._t("default", [n("p", {
						staticClass: "sc-message--text-content",
						domProps: {
							innerHTML: e._s(e.messageText)
						}
					}), e.message.data.meta ? n("p", {
						staticClass: "sc-message--meta",
						style: {
							color: e.messageColors.color
						}
					}, [e._v(e._s(e.message.data.meta))]) : e._e(), e.message.isEdited ? n("p", {
						staticClass: "sc-message--edited"
					}, [n("icon-base", {
						attrs: {
							width: "10",
							"icon-name": "edited"
						}
					}, [n("icon-edit")], 1), e._v(" edited ")], 1) : e._e()], {
						message: e.message,
						messageText: e.messageText,
						messageColors: e.messageColors,
						me: e.me
					})
				], 2)
			},
			Hr = [],
			Fr = function() {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n("svg", {
					attrs: {
						xmlns: "http://www.w3.org/2000/svg",
						width: e.width,
						height: e.height,
						viewBox: "0 0 18 18",
						"aria-labelledby": e.iconName,
						role: "presentation"
					}
				}, [n("title", {
					attrs: {
						id: e.iconName,
						lang: "en"
					}
				}, [e._v(e._s(e.iconName))]), n("g", {
					attrs: {
						fill: e.iconColor
					}
				}, [e._t("default")], 2)])
			},
			Ur = [],
			qr = {
				props: {
					iconName: {
						type: String,
						default: "box"
					},
					width: {
						type: [Number, String],
						default: 18
					},
					height: {
						type: [Number, String],
						default: 18
					},
					iconColor: {
						type: String,
						default: "currentColor"
					}
				}
			},
			Wr = qr,
			Qr = (n("c143"), v(Wr, Fr, Ur, !1, null, "55593218", null)),
			Gr = Qr.exports,
			Zr = function() {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n("path", {
					attrs: {
						d: "M19.404,6.65l-5.998-5.996c-0.292-0.292-0.765-0.292-1.056,0l-2.22,2.22l-8.311,8.313l-0.003,0.001v0.003l-0.161,0.161c-0.114,0.112-0.187,0.258-0.21,0.417l-1.059,7.051c-0.035,0.233,0.044,0.47,0.21,0.639c0.143,0.14,0.333,0.219,0.528,0.219c0.038,0,0.073-0.003,0.111-0.009l7.054-1.055c0.158-0.025,0.306-0.098,0.417-0.211l8.478-8.476l2.22-2.22C19.695,7.414,19.695,6.941,19.404,6.65z M8.341,16.656l-0.989-0.99l7.258-7.258l0.989,0.99L8.341,16.656z M2.332,15.919l0.411-2.748l4.143,4.143l-2.748,0.41L2.332,15.919z M13.554,7.351L6.296,14.61l-0.849-0.848l7.259-7.258l0.423,0.424L13.554,7.351zM10.658,4.457l0.992,0.99l-7.259,7.258L3.4,11.715L10.658,4.457z M16.656,8.342l-1.517-1.517V6.823h-0.003l-0.951-0.951l-2.471-2.471l1.164-1.164l4.942,4.94L16.656,8.342z"
					}
				})
			},
			Yr = [],
			Jr = {},
			Xr = v(Jr, Zr, Yr, !1, null, null, null),
			Kr = Xr.exports,
			ei = function() {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n("path", {
					attrs: {
						d: "M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"
					}
				})
			},
			ti = [],
			ni = {},
			fi = v(ni, ei, ti, !1, null, null, null),
			ri = fi.exports,
			ii = n("21eb"),
			oi = n.n(ii),
			ai = n("71cc"),
			si = n.n(ai),
			ci = r["a"].observable({
				editMessage: null
			}),
			li = n("3715"),
			ui = {
				data: function() {
					return {
						store: ci
					}
				},
				props: {
					message: {
						type: Object,
						required: !0
					},
					messageColors: {
						type: Object,
						required: !0
					},
					messageStyling: {
						type: Boolean,
						required: !0
					}
				},
				computed: {
					messageText: function() {
						var e = oi.a.escape(this.message.data.text);
						return si.a.link(this.messageStyling ? li(e) : e, {
							className: "chatLink",
							truncate: {
								length: 50,
								location: "smart"
							}
						})
					},
					me: function() {
						return "me" === this.message.author
					},
					isEditing: function() {
						return (ci.editMessage && ci.editMessage.id) == this.message.id
					}
				},
				methods: {
					edit: function() {
						this.store.editMessage = this.message
					}
				},
				components: {
					IconBase: Gr,
					IconCross: ri,
					IconEdit: Kr
				}
			},
			di = ui,
			pi = (n("c658"), v(di, Vr, Hr, !1, null, "1f1846f1", null)),
			hi = pi.exports,
			mi = function() {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n("div", {
					staticClass: "sc-message--file",
					style: e.messageColors
				}, [n("div", {
					staticClass: "sc-message--file-icon"
				}, [n("img", {
					staticClass: "sc-image",
					attrs: {
						src: e.data.file.url
					}
				})]), n("div", {
					staticClass: "sc-message--file-name",
					style: e.messageColors
				}, [n("a", {
					attrs: {
						href: e.data.file.url ? e.data.file.url : "#",
						target: "_blank"
					}
				}, [e._v(e._s(e.data.file.name || ""))])]), n("div", {
					staticClass: "sc-message--file-text",
					style: e.messageColors
				}, [e._v(e._s(e.data.text)), e.data.meta ? n("p", {
					staticClass: "sc-message--meta",
					style: e.messageColors
				}, [e._v(e._s(e.data.meta))]) : e._e()])])
			},
			gi = [],
			vi = {
				props: {
					data: {
						type: Object,
						required: !0
					},
					messageColors: {
						type: Object,
						required: !0
					}
				}
			},
			bi = vi,
			yi = (n("6032"), v(bi, mi, gi, !1, null, "4aaa5b65", null)),
			_i = yi.exports,
			wi = function() {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n("div", {
					staticClass: "sc-message--emoji"
				}, [e._v(e._s(e.data.emoji))])
			},
			xi = [],
			ki = {
				props: {
					data: {
						type: Object,
						required: !0
					}
				}
			},
			Ci = ki,
			Si = (n("9cbd"), v(Ci, wi, xi, !1, null, "6c301b30", null)),
			Ai = Si.exports,
			Oi = function() {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n("div", {
					staticClass: "sc-typing-indicator",
					style: e.messageColors
				}, [n("span"), n("span"), n("span")])
			},
			Ei = [],
			Ti = {
				props: {
					messageColors: {
						type: Object,
						required: !0
					}
				}
			},
			ji = Ti,
			Li = (n("e08c"), v(ji, Oi, Ei, !1, null, "4ce16cb3", null)),
			Ii = Li.exports,
			Mi = function() {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n("div", {
					staticClass: "sc-message--system",
					style: e.messageColors
				}, [e._t("default", [e._v(" " + e._s(e.data.text)), e.data.meta ? n("p", {
					staticClass: "sc-message--meta",
					style: {
						color: e.messageColors.color
					}
				}, [e._v(e._s(e.data.meta))]) : e._e()], {
					message: e.data
				})], 2)
			},
			Ni = [],
			Pi = {
				props: {
					data: {
						type: Object,
						required: !0
					},
					messageColors: {
						type: Object,
						required: !0
					}
				}
			},
			Bi = Pi,
			$i = (n("4461"), v(Bi, Mi, Ni, !1, null, "5441d166", null)),
			zi = $i.exports,
			Ri = n("ce2d"),
			Di = n.n(Ri),
			Vi = {
				data: function() {
					return {}
				},
				components: {
					TextMessage: hi,
					FileMessage: _i,
					EmojiMessage: Ai,
					TypingMessage: Ii,
					SystemMessage: zi
				},
				props: {
					message: {
						type: Object,
						required: !0
					},
					colors: {
						type: Object,
						required: !0
					},
					messageStyling: {
						type: Boolean,
						required: !0
					},
					user: {
						type: Object,
						required: !0
					}
				},
				methods: {
					sentColorsStyle: function() {
						return {
							color: this.colors.sentMessage.text,
							backgroundColor: this.colors.sentMessage.bg
						}
					},
					receivedColorsStyle: function() {
						return {
							color: this.colors.receivedMessage.text,
							backgroundColor: this.colors.receivedMessage.bg
						}
					},
					determineMessageColors: function() {
						return "me" === this.message.author ? this.sentColorsStyle() : this.receivedColorsStyle()
					}
				},
				computed: {
					authorName: function() {
						return this.user && this.user.name
					},
					chatImageUrl: function() {
						return this.user && this.user.imageUrl || this.chatIcon
					}
				}
			},
			Hi = Vi,
			Fi = (n("86ea"), v(Hi, Rr, Dr, !1, null, null, null)),
			Ui = Fi.exports,
			qi = {
				components: {
					Message: Ui
				},
				props: {
					participants: {
						type: Array,
						required: !0
					},
					messages: {
						type: Array,
						required: !0
					},
					showTypingIndicator: {
						type: String,
						required: !0
					},
					colors: {
						type: Object,
						required: !0
					},
					alwaysScrollToBottom: {
						type: Boolean,
						required: !0
					},
					messageStyling: {
						type: Boolean,
						required: !0
					}
				},
				methods: {
					_scrollDown: function() {
						this.$refs.scrollList.scrollTop = this.$refs.scrollList.scrollHeight
					},
					handleScroll: function(e) {
						0 === e.target.scrollTop && this.$emit("scrollToTop")
					},
					shouldScrollToBottom: function() {
						return this.alwaysScrollToBottom || this.$refs.scrollList.scrollTop > this.$refs.scrollList.scrollHeight - 600
					},
					profile: function(e) {
						var t = this.participants.find((function(t) {
							return t.id === e
						}));
						return t || {
							imageUrl: "",
							name: ""
						}
					}
				},
				computed: {
					defaultChatIcon: function() {
						return Di.a
					}
				},
				mounted: function() {
					this.$nextTick(this._scrollDown())
				},
				updated: function() {
					this.shouldScrollToBottom() && this.$nextTick(this._scrollDown())
				}
			},
			Wi = qi,
			Qi = (n("7bfe"), v(Wi, $r, zr, !1, null, "06cd20ae", null)),
			Gi = Qi.exports,
			Zi = function() {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n("div", [n("Suggestions", {
					attrs: {
						suggestions: e.suggestions,
						colors: e.colors
					},
					on: {
						sendSuggestion: e._submitSuggestion
					}
				}), e.file ? n("div", {
					staticClass: "file-container",
					style: {
						backgroundColor: e.colors.userInput.text,
						color: e.colors.userInput.bg
					}
				}, [n("span", {
					staticClass: "icon-file-message"
				}, [n("img", {
					attrs: {
						src: e.icons.file.img,
						alt: e.icons.file.name,
						height: "15"
					}
				})]), e._v(" " + e._s(e.file.name) + " "), n("span", {
					staticClass: "delete-file-message",
					on: {
						click: function(t) {
							return e.cancelFile()
						}
					}
				}, [n("img", {
					attrs: {
						src: e.icons.closeSvg.img,
						alt: e.icons.closeSvg.name,
						height: "10",
						title: "Remove the file"
					}
				})])]) : e._e(), n("form", {
					staticClass: "sc-user-input",
					class: {
						active: e.inputActive
					},
					style: {
						background: e.colors.userInput.bg
					}
				}, [n("div", {
					ref: "userInput",
					staticClass: "sc-user-input--text",
					style: {
						color: e.colors.userInput.text
					},
					attrs: {
						role: "button",
						tabIndex: "0",
						contentEditable: "true",
						placeholder: e.placeholder
					},
					on: {
						focus: function(t) {
							return e.setInputActive(!0)
						},
						blur: function(t) {
							return e.setInputActive(!1)
						},
						keydown: e.handleKey,
						focusUserInput: function(t) {
							return e.focusUserInput()
						}
					}
				}), n("div", {
					staticClass: "sc-user-input--buttons"
				}, [n("div", {
					staticClass: "sc-user-input--button"
				}), e.showEmoji && !e.isEditing ? n("div", {
					staticClass: "sc-user-input--button"
				}, [n("EmojiIcon", {
					attrs: {
						onEmojiPicked: e._handleEmojiPicked,
						color: e.colors.userInput.text
					}
				})], 1) : e._e(), e.showFile && !e.isEditing ? n("div", {
					staticClass: "sc-user-input--button"
				}, [n("FileIcons", {
					attrs: {
						onChange: e._handleFileSubmit,
						color: e.colors.userInput.text
					}
				})], 1) : e._e(), e.isEditing ? n("div", {
					staticClass: "sc-user-input--button"
				}, [n("user-input-button", {
					attrs: {
						color: e.colors.userInput.text,
						tooltip: "cancel"
					},
					nativeOn: {
						click: function(t) {
							return t.preventDefault(), e._editFinish(t)
						}
					}
				}, [n("icon-cross")], 1)], 1) : e._e(), n("div", {
					staticClass: "sc-user-input--button"
				}, [e.isEditing ? n("user-input-button", {
					attrs: {
						color: e.colors.userInput.text,
						tooltip: "Edit"
					},
					nativeOn: {
						click: function(t) {
							return t.preventDefault(), e._editText(t)
						}
					}
				}, [n("icon-ok")], 1) : n("user-input-button", {
					attrs: {
						color: e.colors.userInput.text,
						tooltip: "Send"
					},
					nativeOn: {
						click: function(t) {
							return t.preventDefault(), e._submitText(t)
						}
					}
				}, [n("icon-send")], 1)], 1)])])], 1)
			},
			Yi = [],
			Ji = function() {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n("div", {
					staticClass: "sc-user-input--picker-wrapper"
				}, [e.isActive ? n("EmojiPicker", {
					attrs: {
						onEmojiPicked: e.onEmojiPicked,
						onBlur: e._handlePickerBlur
					}
				}) : e._e(), n("button", {
					staticClass: "sc-user-input--emoji-icon-wrapper",
					on: {
						click: function(t) {
							return t.preventDefault(), e._openPicker(t)
						}
					}
				}, [n("svg", {
					staticClass: "sc-user-input--emoji-icon",
					class: {
						active: e.isActive
					},
					attrs: {
						version: "1.1",
						id: "Layer_2",
						xmlns: "http://www.w3.org/2000/svg",
						x: "0px",
						y: "0px",
						width: "37.393px",
						height: "37.393px",
						viewBox: "0 0 37.393 37.393",
						enableBackground: "new 0 0 37.393 37.393"
					}
				}, [n("g", [n("path", {
					style: {
						fill: e.color
					},
					attrs: {
						d: "M18.696,37.393C8.387,37.393,0,29.006,0,18.696C0,8.387,8.387,0,18.696,0c10.31,0,18.696,8.387,18.696,18.696\n            C37.393,29.006,29.006,37.393,18.696,37.393z M18.696,2C9.49,2,2,9.49,2,18.696c0,9.206,7.49,16.696,16.696,16.696\n            c9.206,0,16.696-7.49,16.696-16.696C35.393,9.49,27.902,2,18.696,2z"
					}
				})]), n("g", [n("circle", {
					style: {
						fill: e.color
					},
					attrs: {
						cx: "12.379",
						cy: "14.359",
						r: "1.938"
					}
				})]), n("g", [n("circle", {
					style: {
						fill: e.color
					},
					attrs: {
						cx: "24.371",
						cy: "14.414",
						r: "1.992"
					}
				})]), n("g", [n("path", {
					style: {
						fill: e.color
					},
					attrs: {
						d: "M18.035,27.453c-5.748,0-8.342-4.18-8.449-4.357c-0.286-0.473-0.135-1.087,0.338-1.373\n            c0.471-0.286,1.084-0.136,1.372,0.335c0.094,0.151,2.161,3.396,6.74,3.396c4.713,0,7.518-3.462,7.545-3.497\n            c0.343-0.432,0.973-0.504,1.405-0.161c0.433,0.344,0.505,0.973,0.161,1.405C27.009,23.374,23.703,27.453,18.035,27.453z"
					}
				})])])])], 1)
			},
			Xi = [],
			Ki = function() {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n("div", {
					ref: "domNode",
					staticClass: "sc-emoji-picker",
					attrs: {
						tabIndex: "0"
					},
					on: {
						blur: e.onBlur
					}
				}, [n("div", {
					staticClass: "sc-emoji-picker--content"
				}, e._l(e.emojiData, (function(t) {
					return n("div", {
						key: t.name,
						staticClass: "sc-emoji-picker--category"
					}, [n("div", {
						staticClass: "sc-emoji-picker--category-title"
					}, [e._v(e._s(t.name))]), e._l(t.emojis, (function(t) {
						return n("span", {
							key: t,
							staticClass: "sc-emoji-picker--emoji",
							on: {
								click: function(n) {
									return e.emojiClicked(t)
								}
							}
						}, [e._v(" " + e._s(t) + " ")])
					}))], 2)
				})), 0)])
			},
			eo = [],
			to = n("edbf"),
			no = n.n(to),
			fo = [{
				name: "People",
				emojis: ["😄", "😃", "😀", "😊", "😉", "😍", "😘", "😚", "😗", "😙", "😜", "😝", "😛", "😳", "😁", "😔", "😌", "😒", "😞", "😣", "😢", "😂", "😭", "😪", "😥", "😰", "😅", "😓", "😩", "😫", "😨", "😱", "😠", "😡", "😤", "😖", "😆", "😋", "😷", "😎", "😴", "😵", "😲", "😟", "😦", "😧", "👿", "😮", "😬", "😐", "😕", "😯", "😏", "😑", "👲", "👳", "👮", "👷", "💂", "👶", "👦", "👧", "👨", "👩", "👴", "👵", "👱", "👼", "👸", "😺", "😸", "😻", "😽", "😼", "🙀", "😿", "😹", "😾", "👹", "👺", "🙈", "🙉", "🙊", "💀", "👽", "💩", "🔥", "✨", "🌟", "💫", "💥", "💢", "💦", "💧", "💤", "💨", "👂", "👀", "👃", "👅", "👄", "👍", "👎", "👌", "👊", "✊", "👋", "✋", "👐", "👆", "👇", "👉", "👈", "🙌", "🙏", "👏", "💪", "🚶", "🏃", "💃", "👫", "👪", "💏", "💑", "👯", "🙆", "🙅", "💁", "🙋", "💆", "💇", "💅", "👰", "🙎", "🙍", "🙇", "🎩", "👑", "👒", "👟", "👞", "👡", "👠", "👢", "👕", "👔", "👚", "👗", "🎽", "👖", "👘", "👙", "💼", "👜", "👝", "👛", "👓", "🎀", "🌂", "💄", "💛", "💙", "💜", "💚", "💔", "💗", "💓", "💕", "💖", "💞", "💘", "💌", "💋", "💍", "💎", "👤", "💬", "👣"]
			}, {
				name: "Nature",
				emojis: ["🐶", "🐺", "🐱", "🐭", "🐹", "🐰", "🐸", "🐯", "🐨", "🐻", "🐷", "🐽", "🐮", "🐗", "🐵", "🐒", "🐴", "🐑", "🐘", "🐼", "🐧", "🐦", "🐤", "🐥", "🐣", "🐔", "🐍", "🐢", "🐛", "🐝", "🐜", "🐞", "🐌", "🐙", "🐚", "🐠", "🐟", "🐬", "🐳", "🐎", "🐲", "🐡", "🐫", "🐩", "🐾", "💐", "🌸", "🌷", "🍀", "🌹", "🌻", "🌺", "🍁", "🍃", "🍂", "🌿", "🌾", "🍄", "🌵", "🌴", "🌰", "🌱", "🌼", "🌑", "🌓", "🌔", "🌕", "🌛", "🌙", "🌏", "🌋", "🌌", "🌠", "⛅", "⛄", "🌀", "🌁", "🌈", "🌊"]
			}, {
				name: "Objects",
				emojis: ["🎍", "💝", "🎎", "🎒", "🎓", "🎏", "🎆", "🎇", "🎐", "🎑", "🎃", "👻", "🎅", "🎄", "🎁", "🎋", "🎉", "🎊", "🎈", "🎌", "🔮", "🎥", "📷", "📹", "📼", "💿", "📀", "💽", "💾", "💻", "📱", "📞", "📟", "📠", "📡", "📺", "📻", "🔊", "🔔", "📢", "📣", "⏳", "⌛", "⏰", "⌚", "🔓", "🔒", "🔏", "🔐", "🔑", "🔎", "💡", "🔦", "🔌", "🔋", "🔍", "🛀", "🚽", "🔧", "🔩", "🔨", "🚪", "🚬", "💣", "🔫", "🔪", "💊", "💉", "💰", "💴", "💵", "💳", "💸", "📲", "📧", "📥", "📤", "📩", "📨", "📫", "📪", "📮", "📦", "📝", "📄", "📃", "📑", "📊", "📈", "📉", "📜", "📋", "📅", "📆", "📇", "📁", "📂", "📌", "📎", "📏", "📐", "📕", "📗", "📘", "📙", "📓", "📔", "📒", "📚", "📖", "🔖", "📛", "📰", "🎨", "🎬", "🎤", "🎧", "🎼", "🎵", "🎶", "🎹", "🎻", "🎺", "🎷", "🎸", "👾", "🎮", "🃏", "🎴", "🀄", "🎲", "🎯", "🏈", "🏀", "⚽", "⚾", "🎾", "🎱", "🎳", "⛳", "🏁", "🏆", "🎿", "🏂", "🏊", "🏄", "🎣", "🍵", "🍶", "🍺", "🍻", "🍸", "🍹", "🍷", "🍴", "🍕", "🍔", "🍟", "🍗", "🍖", "🍝", "🍛", "🍤", "🍱", "🍣", "🍥", "🍙", "🍘", "🍚", "🍜", "🍲", "🍢", "🍡", "🍳", "🍞", "🍩", "🍮", "🍦", "🍨", "🍧", "🎂", "🍰", "🍪", "🍫", "🍬", "🍭", "🍯", "🍎", "🍏", "🍊", "🍒", "🍇", "🍉", "🍓", "🍑", "🍈", "🍌", "🍍", "🍠", "🍆", "🍅", "🌽"]
			}, {
				name: "Places",
				emojis: ["🏠", "🏡", "🏫", "🏢", "🏣", "🏥", "🏦", "🏪", "🏩", "🏨", "💒", "⛪", "🏬", "🌇", "🌆", "🏯", "🏰", "⛺", "🏭", "🗼", "🗾", "🗻", "🌄", "🌅", "🌃", "🗽", "🌉", "🎠", "🎡", "⛲", "🎢", "🚢", "⛵", "🚤", "🚀", "💺", "🚉", "🚄", "🚅", "🚇", "🚃", "🚌", "🚙", "🚗", "🚕", "🚚", "🚨", "🚓", "🚒", "🚑", "🚲", "💈", "🚏", "🎫", "🚥", "🚧", "🔰", "⛽", "🏮", "🎰", "🗿", "🎪", "🎭", "📍", "🚩"]
			}, {
				name: "Symbols",
				emojis: ["🔟", "🔢", "🔣", "🔠", "🔡", "🔤", "🔼", "🔽", "⏪", "⏩", "⏫", "⏬", "🆗", "🆕", "🆙", "🆒", "🆓", "🆖", "📶", "🎦", "🈁", "🈯", "🈳", "🈵", "🈴", "🈲", "🉐", "🈹", "🈺", "🈶", "🈚", "🚻", "🚹", "🚺", "🚼", "🚾", "🚭", "🈸", "🉑", "🆑", "🆘", "🆔", "🚫", "🔞", "⛔", "❎", "✅", "💟", "🆚", "📳", "📴", "🆎", "💠", "⛎", "🔯", "🏧", "💹", "💲", "💱", "❌", "❗", "❓", "❕", "❔", "⭕", "🔝", "🔚", "🔙", "🔛", "🔜", "🔃", "🕛", "🕐", "🕑", "🕒", "🕓", "🕔", "🕕", "🕖", "🕗", "🕘", "🕙", "🕚", "➕", "➖", "➗", "💮", "💯", "🔘", "🔗", "➰", "🔱", "🔺", "🔲", "🔳", "🔴", "🔵", "🔻", "⬜", "⬛", "🔶", "🔷", "🔸", "🔹"]
			}],
			ro = {
				data: function() {
					return {
						emojiData: fo,
						emojiConvertor: new no.a
					}
				},
				props: {
					onBlur: {
						type: Function,
						required: !0
					},
					onEmojiPicked: {
						type: Function,
						required: !0
					}
				},
				methods: {
					emojiClicked: function(e) {
						this.onEmojiPicked(e), this.$refs.domNode.blur()
					}
				},
				mounted: function() {
					var e = this.$refs.domNode;
					e.style.opacity = 0, window.requestAnimationFrame((function() {
						e.style.transition = "opacity 350ms", e.style.opacity = 1
					})), this.$refs.domNode.focus(), this.emojiConvertor.init_env()
				}
			},
			io = ro,
			oo = (n("400f"), v(io, Ki, eo, !1, null, "186501e1", null)),
			ao = oo.exports,
			so = {
				components: {
					EmojiPicker: ao
				},
				data: function() {
					return {
						isActive: !1
					}
				},
				props: {
					onEmojiPicked: {
						type: Function,
						required: !0
					},
					color: {
						type: String,
						required: !0
					}
				},
				methods: {
					_openPicker: function(e) {
						this.isActive = !this.isActive
					},
					_handlePickerBlur: function() {
						this.isActive = !1
					}
				}
			},
			co = so,
			lo = (n("7016"), v(co, Ji, Xi, !1, null, "6e7426be", null)),
			uo = lo.exports,
			po = function() {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n("div", {
					staticStyle: {
						position: "relative"
					}
				}, [n("button", {
					staticClass: "sc-user-input--file-icon-wrapper",
					attrs: {
						type: "button"
					}
				}, [n("svg", {
					staticClass: "sc-user-input--file-icon",
					attrs: {
						version: "1.1",
						xmlns: "http://www.w3.org/2000/svg",
						x: "0px",
						y: "0px",
						width: "24px",
						height: "24px",
						viewBox: "0 0 37.393 37.393",
						enableBackground: "new 0 0 37.393 37.393"
					}
				}, [n("path", {
					style: {
						fill: e.color
					},
					attrs: {
						d: "M20.807 10.22l-2.030-2.029-10.15 10.148c-1.682 1.681-1.682 4.408 0 6.089s4.408 1.681 6.090 0l12.18-12.178c2.804-2.802 2.804-7.346 0-10.148-2.802-2.803-7.347-2.803-10.149 0l-12.788 12.787c-0.009 0.009-0.019 0.018-0.027 0.026-3.909 3.909-3.909 10.245 0 14.153 3.908 3.908 10.246 3.908 14.156 0 0.009-0.009 0.016-0.018 0.026-0.027l0.001 0.001 8.729-8.728-2.031-2.029-8.729 8.727c-0.009 0.008-0.018 0.018-0.026 0.026-2.784 2.783-7.312 2.783-10.096 0-2.783-2.783-2.783-7.31 0-10.093 0.010-0.009 0.019-0.018 0.028-0.026l-0.001-0.002 12.79-12.786c1.678-1.679 4.411-1.679 6.090 0s1.678 4.411 0 6.089l-12.18 12.178c-0.56 0.56-1.47 0.56-2.030 0-0.559-0.559-0.559-1.47 0-2.029l10.15-10.149z"
					}
				})]), n("input", {
					attrs: {
						type: "file",
						id: "file-input"
					},
					on: {
						change: e._handleChange,
						click: e._handleClick
					}
				})])])
			},
			ho = [],
			mo = {
				props: {
					onChange: {
						type: Function,
						required: !0
					},
					color: {
						type: String,
						required: !0
					}
				},
				methods: {
					_handleClick: function(e) {
						e.target.value = null
					},
					_handleChange: function(e) {
						this.onChange(e.target.files[0])
					}
				}
			},
			go = mo,
			vo = (n("5607"), v(go, po, ho, !1, null, "d7bc9640", null)),
			bo = vo.exports,
			yo = function() {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n("button", {
					staticClass: "sc-user-input--button-icon-wrapper"
				}, [n("icon-base", {
					attrs: {
						color: e.color,
						width: "20",
						height: "20",
						"icon-name": e.tooltip
					}
				}, [e._t("default")], 2)], 1)
			},
			_o = [],
			wo = {
				props: {
					color: {
						type: String,
						required: !0
					},
					tooltip: {
						type: String,
						required: !1,
						default: ""
					}
				},
				components: {
					IconBase: Gr
				}
			},
			xo = wo,
			ko = (n("f923"), v(xo, yo, _o, !1, null, "2900db83", null)),
			Co = ko.exports,
			So = function() {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n("div", {
					staticClass: "sc-suggestions-row",
					style: {
						background: e.colors.messageList.bg
					}
				}, e._l(e.suggestions, (function(t, f) {
					return n("button", {
						key: f,
						staticClass: "sc-suggestions-element",
						style: {
							borderColor: e.colors.sentMessage.bg,
							color: e.colors.sentMessage.bg
						},
						on: {
							click: function(n) {
								return e.$emit("sendSuggestion", t)
							}
						}
					}, [e._v(e._s(t))])
				})), 0)
			},
			Ao = [],
			Oo = {
				data: function() {
					return {}
				},
				props: {
					suggestions: {
						type: Array,
						default: function() {
							return []
						}
					},
					colors: {
						type: Object,
						required: !0
					}
				}
			},
			Eo = Oo,
			To = (n("91ea"), v(Eo, So, Ao, !1, null, null, null)),
			jo = To.exports,
			Lo = n("1ea7"),
			Io = n.n(Lo),
			Mo = n("aaf8"),
			No = n.n(Mo),
			Po = function() {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n("path", {
					attrs: {
						d: "M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
					}
				})
			},
			Bo = [],
			$o = {},
			zo = v($o, Po, Bo, !1, null, null, null),
			Ro = zo.exports,
			Do = function() {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n("path", {
					attrs: {
						d: "M17.218,2.268L2.477,8.388C2.13,8.535,2.164,9.05,2.542,9.134L9.33,10.67l1.535,6.787c0.083,0.377,0.602,0.415,0.745,0.065l6.123-14.74C17.866,2.46,17.539,2.134,17.218,2.268 M3.92,8.641l11.772-4.89L9.535,9.909L3.92,8.641z M11.358,16.078l-1.268-5.613l6.157-6.157L11.358,16.078z"
					}
				})
			},
			Vo = [],
			Ho = {},
			Fo = v(Ho, Do, Vo, !1, null, null, null),
			Uo = Fo.exports,
			qo = {
				components: {
					EmojiIcon: uo,
					FileIcons: bo,
					UserInputButton: Co,
					Suggestions: jo,
					IconCross: ri,
					IconOk: Ro,
					IconSend: Uo
				},
				props: {
					icons: {
						type: Object,
						required: !1,
						default: function() {
							return {
								file: {
									img: Io.a,
									name: "default"
								},
								closeSvg: {
									img: No.a,
									name: "default"
								}
							}
						}
					},
					showEmoji: {
						type: Boolean,
						default: function() {
							return !1
						}
					},
					suggestions: {
						type: Array,
						default: function() {
							return []
						}
					},
					showFile: {
						type: Boolean,
						default: function() {
							return !1
						}
					},
					onSubmit: {
						type: Function,
						required: !0
					},
					placeholder: {
						type: String,
						default: "Write something..."
					},
					colors: {
						type: Object,
						required: !0
					}
				},
				data: function() {
					return {
						file: null,
						inputActive: !1,
						store: ci
					}
				},
				methods: {
					cancelFile: function() {
						this.file = null
					},
					setInputActive: function(e) {
						this.inputActive = e
					},
					handleKey: function(e) {
						13 !== e.keyCode || e.shiftKey ? 27 === e.keyCode && (this._editFinish(), e.preventDefault()) : (this.isEditing ? this._editText(e) : this._submitText(e), this._editFinish(), e.preventDefault()), this.$emit("onType")
					},
					focusUserInput: function() {
						var e = this;
						this.$nextTick((function() {
							e.$refs.userInput.focus()
						}))
					},
					_submitSuggestion: function(e) {
						this.onSubmit({
							author: "me",
							type: "text",
							data: {
								text: e
							}
						})
					},
					_submitText: function(e) {
						var t = this.$refs.userInput.textContent,
							n = this.file;
						n ? this._submitTextWhenFile(e, t, n) : t && t.length > 0 && (this.onSubmit({
							author: "me",
							type: "text",
							data: {
								text: t
							}
						}), this.$refs.userInput.innerHTML = "")
					},
					_submitTextWhenFile: function(e, t, n) {
						t && t.length > 0 ? (this.onSubmit({
							author: "me",
							type: "file",
							data: {
								text: t,
								file: n
							}
						}), this.file = null, this.$refs.userInput.innerHTML = "") : (this.onSubmit({
							author: "me",
							type: "file",
							data: {
								file: n
							}
						}), this.file = null)
					},
					_editText: function(e) {
						var t = this.$refs.userInput.textContent;
						t && t.length && (this.$emit("edit", {
							author: "me",
							type: "text",
							id: ci.editMessage.id,
							data: {
								text: t
							}
						}), this._editFinish())
					},
					_handleEmojiPicked: function(e) {
						this.onSubmit({
							author: "me",
							type: "emoji",
							data: {
								emoji: e
							}
						})
					},
					_handleFileSubmit: function(e) {
						this.file = e
					},
					_editFinish: function() {
						this.store.editMessage = null
					}
				},
				watch: {
					editMessageId: function(e) {
						null != ci.editMessage && void 0 != ci.editMessage ? (this.$refs.userInput.focus(), this.$refs.userInput.textContent = ci.editMessage.data.text) : this.$refs.userInput.textContent = ""
					}
				},
				computed: {
					editMessageId: function() {
						return this.isEditing && ci.editMessage.id
					},
					isEditing: function() {
						return ci.editMessage && ci.editMessage.id
					}
				},
				mounted: function() {
					var e = this;
					this.$root.$on("focusUserInput", (function() {
						e.focusUserInput()
					}))
				}
			},
			Wo = qo,
			Qo = (n("f884"), v(Wo, Zi, Yi, !1, null, null, null)),
			Go = Qo.exports,
			Zo = function() {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n("div", {
					staticClass: "user-list"
				}, [n("table", {
					staticStyle: {
						"padding-top": "5px"
					}
				}, [n("tbody", e._l(e.participants, (function(t) {
					return n("tr", {
						key: t.id
					}, [n("td", {
						staticStyle: {
							"text-align": "center"
						}
					}, [n("img", {
						staticClass: "img-msg",
						attrs: {
							src: t.imageUrl
						}
					})]), n("td", {
						staticClass: "user-element"
					}, [e._v(e._s(t.name))])])
				})), 0)])])
			},
			Yo = [],
			Jo = {
				props: {
					participants: {
						type: Array,
						required: !0
					}
				}
			},
			Xo = Jo,
			Ko = (n("9ec6"), v(Xo, Zo, Yo, !1, null, "e558848a", null)),
			ea = Ko.exports,
			ta = {
				components: {
					Header: Br,
					MessageList: Gi,
					UserInput: Go,
					UserList: ea
				},
				props: {
					showEmoji: {
						type: Boolean,
						default: !1
					},
					showFile: {
						type: Boolean,
						default: !1
					},
					participants: {
						type: Array,
						required: !0
					},
					title: {
						type: String,
						required: !0
					},
					titleImageUrl: {
						type: String,
						default: ""
					},
					onUserInputSubmit: {
						type: Function,
						required: !0
					},
					onClose: {
						type: Function,
						required: !0
					},
					messageList: {
						type: Array,
						default: function() {
							return []
						}
					},
					isOpen: {
						type: Boolean,
						default: function() {
							return !1
						}
					},
					placeholder: {
						type: String,
						default: "Write a message..."
					},
					showTypingIndicator: {
						type: String,
						required: !0
					},
					colors: {
						type: Object,
						required: !0
					},
					alwaysScrollToBottom: {
						type: Boolean,
						required: !0
					},
					messageStyling: {
						type: Boolean,
						required: !0
					},
					disableUserListToggle: {
						type: Boolean,
						default: !1
					}
				},
				data: function() {
					return {
						showUserList: !1
					}
				},
				computed: {
					messages: function() {
						var e = this.messageList;
						return e
					}
				},
				methods: {
					handleUserListToggle: function(e) {
						this.showUserList = e
					},
					getSuggestions: function() {
						return this.messages.length > 0 ? this.messages[this.messages.length - 1].suggestions : []
					}
				}
			},
			na = ta,
			fa = (n("ae5d"), v(na, Or, Er, !1, null, "57d01a61", null)),
			ra = fa.exports,
			ia = n("d6e1"),
			oa = n.n(ia),
			aa = n("b45c"),
			sa = n.n(aa),
			ca = {
				props: {
					icons: {
						type: Object,
						required: !1,
						default: function() {
							return {
								open: {
									img: sa.a,
									name: "default"
								},
								close: {
									img: oa.a,
									name: "default"
								}
							}
						}
					},
					showEmoji: {
						type: Boolean,
						default: !1
					},
					isOpen: {
						type: Boolean,
						required: !0
					},
					open: {
						type: Function,
						required: !0
					},
					close: {
						type: Function,
						required: !0
					},
					showFile: {
						type: Boolean,
						default: !1
					},
					participants: {
						type: Array,
						required: !0
					},
					title: {
						type: String,
						default: function() {
							return ""
						}
					},
					titleImageUrl: {
						type: String,
						default: function() {
							return ""
						}
					},
					onMessageWasSent: {
						type: Function,
						required: !0
					},
					messageList: {
						type: Array,
						default: function() {
							return []
						}
					},
					newMessagesCount: {
						type: Number,
						default: function() {
							return 0
						}
					},
					placeholder: {
						type: String,
						default: "Write a message..."
					},
					showTypingIndicator: {
						type: String,
						default: function() {
							return ""
						}
					},
					colors: {
						type: Object,
						required: !1,
						validator: function(e) {
							return "header" in e && "bg" in e.header && "text" in e.header && "launcher" in e && "bg" in e.launcher && "messageList" in e && "bg" in e.messageList && "sentMessage" in e && "bg" in e.sentMessage && "text" in e.sentMessage && "receivedMessage" in e && "bg" in e.receivedMessage && "text" in e.receivedMessage && "userInput" in e && "bg" in e.userInput && "text" in e.userInput
						},
						default: function() {
							return {
								header: {
									bg: "#4e8cff",
									text: "#ffffff"
								},
								launcher: {
									bg: "#4e8cff"
								},
								messageList: {
									bg: "#ffffff"
								},
								sentMessage: {
									bg: "#4e8cff",
									text: "#ffffff"
								},
								receivedMessage: {
									bg: "#f4f7f9",
									text: "#ffffff"
								},
								userInput: {
									bg: "#f4f7f9",
									text: "#565867"
								}
							}
						}
					},
					alwaysScrollToBottom: {
						type: Boolean,
						default: function() {
							return !1
						}
					},
					messageStyling: {
						type: Boolean,
						default: function() {
							return !1
						}
					},
					disableUserListToggle: {
						type: Boolean,
						default: !1
					}
				},
				methods: {
					openAndFocus: function() {
						this.open(), this.$root.$emit("focusUserInput")
					}
				},
				computed: {
					chatWindowTitle: function() {
						return "" !== this.title ? this.title : 0 === this.participants.length ? "You" : this.participants.length > 1 ? "You, " + this.participants[0].name + " & others" : "You & " + this.participants[0].name
					}
				},
				components: {
					ChatWindow: ra
				}
			},
			la = ca,
			ua = (n("16cd"), v(la, Sr, Ar, !1, null, "2081db4c", null)),
			da = ua.exports,
			pa = n("e37d");
		const ha = "beautiful-chat",
			ma = {
				install(e, t = {}) {
					this.installed || (this.installed = !0, this.event = new e, this.dynamicContainer = null, this.componentName = t.componentName || ha, e.prototype.$chat = {
						_setDynamicContainer(e) {
							ma.dynamicContainer = e
						}
					}, e.component(this.componentName, da), e.use(pa["a"]))
				}
			};
		var ga = ma;
		r["a"].use(ga), r["a"].config.productionTip = !1, new r["a"]({
			vuetify: Cr,
			render: function(e) {
				return e(Zn)
			}
		}).$mount("#app")
	},
	"56ef": function(e, t, n) {
		var f = n("d066"),
			r = n("241c"),
			i = n("7418"),
			o = n("825a");
		e.exports = f("Reflect", "ownKeys") || function(e) {
			var t = r.f(o(e)),
				n = i.f;
			return n ? t.concat(n(e)) : t
		}
	},
	5899: function(e, t) {
		e.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff"
	},
	"58a8": function(e, t, n) {
		var f = n("1d80"),
			r = n("5899"),
			i = "[" + r + "]",
			o = RegExp("^" + i + i + "*"),
			a = RegExp(i + i + "*$"),
			s = function(e) {
				return function(t) {
					var n = String(f(t));
					return 1 & e && (n = n.replace(o, "")), 2 & e && (n = n.replace(a, "")), n
				}
			};
		e.exports = {
			start: s(1),
			end: s(2),
			trim: s(3)
		}
	},
	"5a34": function(e, t, n) {
		var f = n("44e7");
		e.exports = function(e) {
			if (f(e)) throw TypeError("The method doesn't accept regular expressions");
			return e
		}
	},
	"5c6c": function(e, t) {
		e.exports = function(e, t) {
			return {
				enumerable: !(1 & e),
				configurable: !(2 & e),
				writable: !(4 & e),
				value: t
			}
		}
	},
	6032: function(e, t, n) {
		"use strict";
		var f = n("6c4c"),
			r = n.n(f);
		r.a
	},
	"60da": function(e, t, n) {
		"use strict";
		var f = n("83ab"),
			r = n("d039"),
			i = n("df75"),
			o = n("7418"),
			a = n("d1e7"),
			s = n("7b0b"),
			c = n("44ad"),
			l = Object.assign,
			u = Object.defineProperty;
		e.exports = !l || r((function() {
			if (f && 1 !== l({
					b: 1
				}, l(u({}, "a", {
					enumerable: !0,
					get: function() {
						u(this, "b", {
							value: 3,
							enumerable: !1
						})
					}
				}), {
					b: 2
				})).b) return !0;
			var e = {},
				t = {},
				n = Symbol(),
				r = "abcdefghijklmnopqrst";
			return e[n] = 7, r.split("").forEach((function(e) {
				t[e] = e
			})), 7 != l({}, e)[n] || i(l({}, t)).join("") != r
		})) ? function(e, t) {
			var n = s(e),
				r = arguments.length,
				l = 1,
				u = o.f,
				d = a.f;
			while (r > l) {
				var p, h = c(arguments[l++]),
					m = u ? i(h).concat(u(h)) : i(h),
					g = m.length,
					v = 0;
				while (g > v) p = m[v++], f && !d.call(h, p) || (n[p] = h[p])
			}
			return n
		} : l
	},
	"615b": function(e, t, n) {},
	"615d": function(e, t, n) {},
	"61d2": function(e, t, n) {},
	6544: function(e, t) {
		e.exports = function(e, t) {
			var n = "function" === typeof e.exports ? e.exports.extendOptions : e.options;
			for (var f in "function" === typeof e.exports && (n.components = e.exports.options.components), n.components = n.components || {}, t) n.components[f] = n.components[f] || t[f]
		}
	},
	6547: function(e, t, n) {
		var f = n("a691"),
			r = n("1d80"),
			i = function(e) {
				return function(t, n) {
					var i, o, a = String(r(t)),
						s = f(n),
						c = a.length;
					return s < 0 || s >= c ? e ? "" : void 0 : (i = a.charCodeAt(s), i < 55296 || i > 56319 || s + 1 === c || (o = a.charCodeAt(s + 1)) < 56320 || o > 57343 ? e ? a.charAt(s) : i : e ? a.slice(s, s + 2) : o - 56320 + (i - 55296 << 10) + 65536)
				}
			};
		e.exports = {
			codeAt: i(!1),
			charAt: i(!0)
		}
	},
	6566: function(e, t, n) {
		"use strict";
		var f = n("9bf2").f,
			r = n("7c73"),
			i = n("e2cc"),
			o = n("0366"),
			a = n("19aa"),
			s = n("2266"),
			c = n("7dd0"),
			l = n("2626"),
			u = n("83ab"),
			d = n("f183").fastKey,
			p = n("69f3"),
			h = p.set,
			m = p.getterFor;
		e.exports = {
			getConstructor: function(e, t, n, c) {
				var l = e((function(e, f) {
						a(e, l, t), h(e, {
							type: t,
							index: r(null),
							first: void 0,
							last: void 0,
							size: 0
						}), u || (e.size = 0), void 0 != f && s(f, e[c], e, n)
					})),
					p = m(t),
					g = function(e, t, n) {
						var f, r, i = p(e),
							o = v(e, t);
						return o ? o.value = n : (i.last = o = {
							index: r = d(t, !0),
							key: t,
							value: n,
							previous: f = i.last,
							next: void 0,
							removed: !1
						}, i.first || (i.first = o), f && (f.next = o), u ? i.size++ : e.size++, "F" !== r && (i.index[r] = o)), e
					},
					v = function(e, t) {
						var n, f = p(e),
							r = d(t);
						if ("F" !== r) return f.index[r];
						for (n = f.first; n; n = n.next)
							if (n.key == t) return n
					};
				return i(l.prototype, {
					clear: function() {
						var e = this,
							t = p(e),
							n = t.index,
							f = t.first;
						while (f) f.removed = !0, f.previous && (f.previous = f.previous.next = void 0), delete n[f.index], f = f.next;
						t.first = t.last = void 0, u ? t.size = 0 : e.size = 0
					},
					delete: function(e) {
						var t = this,
							n = p(t),
							f = v(t, e);
						if (f) {
							var r = f.next,
								i = f.previous;
							delete n.index[f.index], f.removed = !0, i && (i.next = r), r && (r.previous = i), n.first == f && (n.first = r), n.last == f && (n.last = i), u ? n.size-- : t.size--
						}
						return !!f
					},
					forEach: function(e) {
						var t, n = p(this),
							f = o(e, arguments.length > 1 ? arguments[1] : void 0, 3);
						while (t = t ? t.next : n.first) {
							f(t.value, t.key, this);
							while (t && t.removed) t = t.previous
						}
					},
					has: function(e) {
						return !!v(this, e)
					}
				}), i(l.prototype, n ? {
					get: function(e) {
						var t = v(this, e);
						return t && t.value
					},
					set: function(e, t) {
						return g(this, 0 === e ? 0 : e, t)
					}
				} : {
					add: function(e) {
						return g(this, e = 0 === e ? 0 : e, e)
					}
				}), u && f(l.prototype, "size", {
					get: function() {
						return p(this).size
					}
				}), l
			},
			setStrong: function(e, t, n) {
				var f = t + " Iterator",
					r = m(t),
					i = m(f);
				c(e, t, (function(e, t) {
					h(this, {
						type: f,
						target: e,
						state: r(e),
						kind: t,
						last: void 0
					})
				}), (function() {
					var e = i(this),
						t = e.kind,
						n = e.last;
					while (n && n.removed) n = n.previous;
					return e.target && (e.last = n = n ? n.next : e.state.first) ? "keys" == t ? {
						value: n.key,
						done: !1
					} : "values" == t ? {
						value: n.value,
						done: !1
					} : {
						value: [n.key, n.value],
						done: !1
					} : (e.target = void 0, {
						value: void 0,
						done: !0
					})
				}), n ? "entries" : "values", !n, !0), l(t)
			}
		}
	},
	"65f0": function(e, t, n) {
		var f = n("861d"),
			r = n("e8b5"),
			i = n("b622"),
			o = i("species");
		e.exports = function(e, t) {
			var n;
			return r(e) && (n = e.constructor, "function" != typeof n || n !== Array && !r(n.prototype) ? f(n) && (n = n[o], null === n && (n = void 0)) : n = void 0), new(void 0 === n ? Array : n)(0 === t ? 0 : t)
		}
	},
	"69eb": function(e, t) {
		e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAfCAMAAACxiD++AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAtUExURUxpcf///////////////////////////////////////////////////////3EAnbYAAAAOdFJOUwADZ66SoQjEhnS7/gsNGQL7+wAAAKtJREFUKM+F01sOhCAQRNESFV/I/pc70Og0YJfyJbmHhBAbGGYHstw8IPV4EOGOmERYIhGpxyUAJxHSz/xlC+1FxE64qB1yj1ZID7oXsel+63ovnj2JXUXue+hvrcLugL+EdG+9XBG8X+Kl34J3YM1g/egvIvdx5EK691RIz78YEXdnQrst6m6JqemXmNo+D/WJNAyVePZWWL0WdlfB+l+UAQQReaAc65DB/wGsZgzLN0IQWAAAAABJRU5ErkJggg=="
	},
	"69f3": function(e, t, n) {
		var f, r, i, o = n("7f9a"),
			a = n("da84"),
			s = n("861d"),
			c = n("9112"),
			l = n("5135"),
			u = n("f772"),
			d = n("d012"),
			p = a.WeakMap,
			h = function(e) {
				return i(e) ? r(e) : f(e, {})
			},
			m = function(e) {
				return function(t) {
					var n;
					if (!s(t) || (n = r(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
					return n
				}
			};
		if (o) {
			var g = new p,
				v = g.get,
				b = g.has,
				y = g.set;
			f = function(e, t) {
				return y.call(g, e, t), t
			}, r = function(e) {
				return v.call(g, e) || {}
			}, i = function(e) {
				return b.call(g, e)
			}
		} else {
			var _ = u("state");
			d[_] = !0, f = function(e, t) {
				return c(e, _, t), t
			}, r = function(e) {
				return l(e, _) ? e[_] : {}
			}, i = function(e) {
				return l(e, _)
			}
		}
		e.exports = {
			set: f,
			get: r,
			has: i,
			enforce: h,
			getterFor: m
		}
	},
	"6b4e": function(e, t, n) {},
	"6c4c": function(e, t, n) {},
	"6d61": function(e, t, n) {
		"use strict";
		var f = n("23e7"),
			r = n("da84"),
			i = n("94ca"),
			o = n("6eeb"),
			a = n("f183"),
			s = n("2266"),
			c = n("19aa"),
			l = n("861d"),
			u = n("d039"),
			d = n("1c7e"),
			p = n("d44e"),
			h = n("7156");
		e.exports = function(e, t, n) {
			var m = -1 !== e.indexOf("Map"),
				g = -1 !== e.indexOf("Weak"),
				v = m ? "set" : "add",
				b = r[e],
				y = b && b.prototype,
				_ = b,
				w = {},
				x = function(e) {
					var t = y[e];
					o(y, e, "add" == e ? function(e) {
						return t.call(this, 0 === e ? 0 : e), this
					} : "delete" == e ? function(e) {
						return !(g && !l(e)) && t.call(this, 0 === e ? 0 : e)
					} : "get" == e ? function(e) {
						return g && !l(e) ? void 0 : t.call(this, 0 === e ? 0 : e)
					} : "has" == e ? function(e) {
						return !(g && !l(e)) && t.call(this, 0 === e ? 0 : e)
					} : function(e, n) {
						return t.call(this, 0 === e ? 0 : e, n), this
					})
				};
			if (i(e, "function" != typeof b || !(g || y.forEach && !u((function() {
					(new b).entries().next()
				}))))) _ = n.getConstructor(t, e, m, v), a.REQUIRED = !0;
			else if (i(e, !0)) {
				var k = new _,
					C = k[v](g ? {} : -0, 1) != k,
					S = u((function() {
						k.has(1)
					})),
					A = d((function(e) {
						new b(e)
					})),
					O = !g && u((function() {
						var e = new b,
							t = 5;
						while (t--) e[v](t, t);
						return !e.has(-0)
					}));
				A || (_ = t((function(t, n) {
					c(t, _, e);
					var f = h(new b, t, _);
					return void 0 != n && s(n, f[v], f, m), f
				})), _.prototype = y, y.constructor = _), (S || O) && (x("delete"), x("has"), m && x("get")), (O || C) && x(v), g && y.clear && delete y.clear
			}
			return w[e] = _, f({
				global: !0,
				forced: _ != b
			}, w), p(_, e), g || n.setStrong(_, e, m), _
		}
	},
	"6e05": function(e, t, n) {},
	"6ece": function(e, t, n) {},
	"6eeb": function(e, t, n) {
		var f = n("da84"),
			r = n("9112"),
			i = n("5135"),
			o = n("ce4e"),
			a = n("8925"),
			s = n("69f3"),
			c = s.get,
			l = s.enforce,
			u = String(String).split("String");
		(e.exports = function(e, t, n, a) {
			var s = !!a && !!a.unsafe,
				c = !!a && !!a.enumerable,
				d = !!a && !!a.noTargetGet;
			"function" == typeof n && ("string" != typeof t || i(n, "name") || r(n, "name", t), l(n).source = u.join("string" == typeof t ? t : "")), e !== f ? (s ? !d && e[t] && (c = !0) : delete e[t], c ? e[t] = n : r(e, t, n)) : c ? e[t] = n : o(t, n)
		})(Function.prototype, "toString", (function() {
			return "function" == typeof this && c(this).source || a(this)
		}))
	},
	"6f53": function(e, t, n) {
		var f = n("83ab"),
			r = n("df75"),
			i = n("fc6a"),
			o = n("d1e7").f,
			a = function(e) {
				return function(t) {
					var n, a = i(t),
						s = r(a),
						c = s.length,
						l = 0,
						u = [];
					while (c > l) n = s[l++], f && !o.call(a, n) || u.push(e ? [n, a[n]] : a[n]);
					return u
				}
			};
		e.exports = {
			entries: a(!0),
			values: a(!1)
		}
	},
	7016: function(e, t, n) {
		"use strict";
		var f = n("615d"),
			r = n.n(f);
		r.a
	},
	7067: function(e, t, n) {},
	7156: function(e, t, n) {
		var f = n("861d"),
			r = n("d2bb");
		e.exports = function(e, t, n) {
			var i, o;
			return r && "function" == typeof(i = t.constructor) && i !== n && f(o = i.prototype) && o !== n.prototype && r(e, o), e
		}
	},
	"71cc": function(e, t, n) {
		var f, r, i;
		/*!
		 * Autolinker.js
		 * 1.8.3
		 *
		 * Copyright(c) 2018 Gregory Jacobs <greg@greg-jacobs.com>
		 * MIT License
		 *
		 * https://github.com/gregjacobs/Autolinker.js
		 */
		(function(n, o) {
			r = [], f = o, i = "function" === typeof f ? f.apply(t, r) : f, void 0 === i || (e.exports = i)
		})(0, (function() {
			var e = function(t) {
				t = t || {}, this.version = e.version, this.urls = this.normalizeUrlsCfg(t.urls), this.email = "boolean" !== typeof t.email || t.email, this.phone = "boolean" !== typeof t.phone || t.phone, this.hashtag = t.hashtag || !1, this.mention = t.mention || !1, this.newWindow = "boolean" !== typeof t.newWindow || t.newWindow, this.stripPrefix = this.normalizeStripPrefixCfg(t.stripPrefix), this.stripTrailingSlash = "boolean" !== typeof t.stripTrailingSlash || t.stripTrailingSlash, this.decodePercentEncoding = "boolean" !== typeof t.decodePercentEncoding || t.decodePercentEncoding;
				var n = this.mention;
				if (!1 !== n && "twitter" !== n && "instagram" !== n && "soundcloud" !== n) throw new Error("invalid `mention` cfg - see docs");
				var f = this.hashtag;
				if (!1 !== f && "twitter" !== f && "facebook" !== f && "instagram" !== f) throw new Error("invalid `hashtag` cfg - see docs");
				this.truncate = this.normalizeTruncateCfg(t.truncate), this.className = t.className || "", this.replaceFn = t.replaceFn || null, this.context = t.context || this, this.htmlParser = null, this.matchers = null, this.tagBuilder = null
			};
			return e.link = function(t, n) {
				var f = new e(n);
				return f.link(t)
			}, e.parse = function(t, n) {
				var f = new e(n);
				return f.parse(t)
			}, e.version = "1.8.3", e.prototype = {
				constructor: e,
				normalizeUrlsCfg: function(e) {
					return null == e && (e = !0), "boolean" === typeof e ? {
						schemeMatches: e,
						wwwMatches: e,
						tldMatches: e
					} : {
						schemeMatches: "boolean" !== typeof e.schemeMatches || e.schemeMatches,
						wwwMatches: "boolean" !== typeof e.wwwMatches || e.wwwMatches,
						tldMatches: "boolean" !== typeof e.tldMatches || e.tldMatches
					}
				},
				normalizeStripPrefixCfg: function(e) {
					return null == e && (e = !0), "boolean" === typeof e ? {
						scheme: e,
						www: e
					} : {
						scheme: "boolean" !== typeof e.scheme || e.scheme,
						www: "boolean" !== typeof e.www || e.www
					}
				},
				normalizeTruncateCfg: function(t) {
					return "number" === typeof t ? {
						length: t,
						location: "end"
					} : e.Util.defaults(t || {}, {
						length: Number.POSITIVE_INFINITY,
						location: "end"
					})
				},
				parse: function(e) {
					for (var t = this.getHtmlParser(), n = t.parse(e), f = 0, r = [], i = 0, o = n.length; i < o; i++) {
						var a = n[i],
							s = a.getType();
						if ("element" === s && -1 !== ["a", "style", "script"].indexOf(a.getTagName())) a.isClosing() ? f = Math.max(f - 1, 0) : f++;
						else if ("text" === s && 0 === f) {
							var c = this.parseText(a.getText(), a.getOffset());
							r.push.apply(r, c)
						}
					}
					return r = this.compactMatches(r), r = this.removeUnwantedMatches(r), r
				},
				compactMatches: function(e) {
					e.sort((function(e, t) {
						return e.getOffset() - t.getOffset()
					}));
					for (var t = 0; t < e.length - 1; t++) {
						var n = e[t],
							f = n.getOffset(),
							r = n.getMatchedText().length,
							i = f + r;
						if (t + 1 < e.length) {
							if (e[t + 1].getOffset() === f) {
								var o = e[t + 1].getMatchedText().length > r ? t : t + 1;
								e.splice(o, 1);
								continue
							}
							e[t + 1].getOffset() < i && e.splice(t + 1, 1)
						}
					}
					return e
				},
				removeUnwantedMatches: function(t) {
					var n = e.Util.remove;
					return this.hashtag || n(t, (function(e) {
						return "hashtag" === e.getType()
					})), this.email || n(t, (function(e) {
						return "email" === e.getType()
					})), this.phone || n(t, (function(e) {
						return "phone" === e.getType()
					})), this.mention || n(t, (function(e) {
						return "mention" === e.getType()
					})), this.urls.schemeMatches || n(t, (function(e) {
						return "url" === e.getType() && "scheme" === e.getUrlMatchType()
					})), this.urls.wwwMatches || n(t, (function(e) {
						return "url" === e.getType() && "www" === e.getUrlMatchType()
					})), this.urls.tldMatches || n(t, (function(e) {
						return "url" === e.getType() && "tld" === e.getUrlMatchType()
					})), t
				},
				parseText: function(e, t) {
					t = t || 0;
					for (var n = this.getMatchers(), f = [], r = 0, i = n.length; r < i; r++) {
						for (var o = n[r].parseMatches(e), a = 0, s = o.length; a < s; a++) o[a].setOffset(t + o[a].getOffset());
						f.push.apply(f, o)
					}
					return f
				},
				link: function(e) {
					if (!e) return "";
					for (var t = this.parse(e), n = [], f = 0, r = 0, i = t.length; r < i; r++) {
						var o = t[r];
						n.push(e.substring(f, o.getOffset())), n.push(this.createMatchReturnVal(o)), f = o.getOffset() + o.getMatchedText().length
					}
					return n.push(e.substring(f)), n.join("")
				},
				createMatchReturnVal: function(t) {
					var n;
					if (this.replaceFn && (n = this.replaceFn.call(this.context, t)), "string" === typeof n) return n;
					if (!1 === n) return t.getMatchedText();
					if (n instanceof e.HtmlTag) return n.toAnchorString();
					var f = t.buildTag();
					return f.toAnchorString()
				},
				getHtmlParser: function() {
					var t = this.htmlParser;
					return t || (t = this.htmlParser = new e.htmlParser.HtmlParser), t
				},
				getMatchers: function() {
					if (this.matchers) return this.matchers;
					var t = e.matcher,
						n = this.getTagBuilder(),
						f = [new t.Hashtag({
							tagBuilder: n,
							serviceName: this.hashtag
						}), new t.Email({
							tagBuilder: n
						}), new t.Phone({
							tagBuilder: n
						}), new t.Mention({
							tagBuilder: n,
							serviceName: this.mention
						}), new t.Url({
							tagBuilder: n,
							stripPrefix: this.stripPrefix,
							stripTrailingSlash: this.stripTrailingSlash,
							decodePercentEncoding: this.decodePercentEncoding
						})];
					return this.matchers = f
				},
				getTagBuilder: function() {
					var t = this.tagBuilder;
					return t || (t = this.tagBuilder = new e.AnchorTagBuilder({
						newWindow: this.newWindow,
						truncate: this.truncate,
						className: this.className
					})), t
				}
			}, e.match = {}, e.matcher = {}, e.htmlParser = {}, e.truncate = {}, e.Util = {
				abstractMethod: function() {
					throw "abstract"
				},
				trimRegex: /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
				assign: function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
					return e
				},
				defaults: function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && void 0 === e[n] && (e[n] = t[n]);
					return e
				},
				extend: function(t, n) {
					var f, r = t.prototype,
						i = function() {};
					i.prototype = r, f = n.hasOwnProperty("constructor") ? n.constructor : function() {
						r.constructor.apply(this, arguments)
					};
					var o = f.prototype = new i;
					return o.constructor = f, o.superclass = r, delete n.constructor, e.Util.assign(o, n), f
				},
				ellipsis: function(e, t, n) {
					var f;
					return e.length > t && (null == n ? (n = "&hellip;", f = 3) : f = n.length, e = e.substring(0, t - f) + n), e
				},
				indexOf: function(e, t) {
					if (Array.prototype.indexOf) return e.indexOf(t);
					for (var n = 0, f = e.length; n < f; n++)
						if (e[n] === t) return n;
					return -1
				},
				remove: function(e, t) {
					for (var n = e.length - 1; n >= 0; n--) !0 === t(e[n]) && e.splice(n, 1)
				},
				splitAndCapture: function(e, t) {
					if (!t.global) throw new Error("`splitRegex` must have the 'g' flag set");
					var n, f = [],
						r = 0;
					while (n = t.exec(e)) f.push(e.substring(r, n.index)), f.push(n[0]), r = n.index + n[0].length;
					return f.push(e.substring(r)), f
				},
				trim: function(e) {
					return e.replace(this.trimRegex, "")
				}
			}, e.HtmlTag = e.Util.extend(Object, {
				whitespaceRegex: /\s+/,
				constructor: function(t) {
					e.Util.assign(this, t), this.innerHtml = this.innerHtml || this.innerHTML
				},
				setTagName: function(e) {
					return this.tagName = e, this
				},
				getTagName: function() {
					return this.tagName || ""
				},
				setAttr: function(e, t) {
					var n = this.getAttrs();
					return n[e] = t, this
				},
				getAttr: function(e) {
					return this.getAttrs()[e]
				},
				setAttrs: function(t) {
					var n = this.getAttrs();
					return e.Util.assign(n, t), this
				},
				getAttrs: function() {
					return this.attrs || (this.attrs = {})
				},
				setClass: function(e) {
					return this.setAttr("class", e)
				},
				addClass: function(t) {
					var n, f = this.getClass(),
						r = this.whitespaceRegex,
						i = e.Util.indexOf,
						o = f ? f.split(r) : [],
						a = t.split(r);
					while (n = a.shift()) - 1 === i(o, n) && o.push(n);
					return this.getAttrs()["class"] = o.join(" "), this
				},
				removeClass: function(t) {
					var n, f = this.getClass(),
						r = this.whitespaceRegex,
						i = e.Util.indexOf,
						o = f ? f.split(r) : [],
						a = t.split(r);
					while (o.length && (n = a.shift())) {
						var s = i(o, n); - 1 !== s && o.splice(s, 1)
					}
					return this.getAttrs()["class"] = o.join(" "), this
				},
				getClass: function() {
					return this.getAttrs()["class"] || ""
				},
				hasClass: function(e) {
					return -1 !== (" " + this.getClass() + " ").indexOf(" " + e + " ")
				},
				setInnerHtml: function(e) {
					return this.innerHtml = e, this
				},
				getInnerHtml: function() {
					return this.innerHtml || ""
				},
				toAnchorString: function() {
					var e = this.getTagName(),
						t = this.buildAttrsStr();
					return t = t ? " " + t : "", ["<", e, t, ">", this.getInnerHtml(), "</", e, ">"].join("")
				},
				buildAttrsStr: function() {
					if (!this.attrs) return "";
					var e = this.getAttrs(),
						t = [];
					for (var n in e) e.hasOwnProperty(n) && t.push(n + '="' + e[n] + '"');
					return t.join(" ")
				}
			}), e.RegexLib = function() {
				var e = "A-Za-z\\xAA\\xB5\\xBA\\xC0-\\xD6\\xD8-\\xF6\\xF8-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠ-ࢴऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛱ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿕ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞭꞰ-ꞷꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭥꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
					t = "0-9٠-٩۰-۹߀-߉०-९০-৯੦-੯૦-૯୦-୯௦-௯౦-౯೦-೯൦-൯෦-෯๐-๙໐-໙༠-༩၀-၉႐-႙០-៩᠐-᠙᥆-᥏᧐-᧙᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙꘠-꘩꣐-꣙꤀-꤉꧐-꧙꧰-꧹꩐-꩙꯰-꯹０-９",
					n = e + t,
					f = "(?:[" + t + "]{1,3}\\.){3}[" + t + "]{1,3}",
					r = "[" + n + "](?:[" + n + "\\-]{0,61}[" + n + "])?",
					i = function(e) {
						return "(?=(" + r + "))\\" + e
					},
					o = function(e) {
						return "(?:" + i(e) + "(?:\\." + i(e + 1) + "){0,126}|" + f + ")"
					};
				return {
					alphaNumericCharsStr: n,
					alphaCharsStr: e,
					getDomainNameStr: o
				}
			}(), e.AnchorTagBuilder = e.Util.extend(Object, {
				constructor: function(e) {
					e = e || {}, this.newWindow = e.newWindow, this.truncate = e.truncate, this.className = e.className
				},
				build: function(t) {
					return new e.HtmlTag({
						tagName: "a",
						attrs: this.createAttrs(t),
						innerHtml: this.processAnchorText(t.getAnchorText())
					})
				},
				createAttrs: function(e) {
					var t = {
							href: e.getAnchorHref()
						},
						n = this.createCssClass(e);
					return n && (t["class"] = n), this.newWindow && (t["target"] = "_blank", t["rel"] = "noopener noreferrer"), this.truncate && this.truncate.length && this.truncate.length < e.getAnchorText().length && (t["title"] = e.getAnchorHref()), t
				},
				createCssClass: function(e) {
					var t = this.className;
					if (t) {
						for (var n = [t], f = e.getCssClassSuffixes(), r = 0, i = f.length; r < i; r++) n.push(t + "-" + f[r]);
						return n.join(" ")
					}
					return ""
				},
				processAnchorText: function(e) {
					return e = this.doTruncate(e), e
				},
				doTruncate: function(t) {
					var n = this.truncate;
					if (!n || !n.length) return t;
					var f = n.length,
						r = n.location;
					return "smart" === r ? e.truncate.TruncateSmart(t, f) : "middle" === r ? e.truncate.TruncateMiddle(t, f) : e.truncate.TruncateEnd(t, f)
				}
			}), e.htmlParser.HtmlParser = e.Util.extend(Object, {
				htmlRegex: function() {
					var e = /!--([\s\S]+?)--/,
						t = /[0-9a-zA-Z][0-9a-zA-Z:]*/,
						n = /[^\s"'>\/=\x00-\x1F\x7F]+/,
						f = /(?:"[^"]*?"|'[^']*?'|[^'"=<>`\s]+)/,
						r = "(?:\\s*?=\\s*?" + f.source + ")?",
						i = function(e) {
							return "(?=(" + n.source + "))\\" + e + r
						};
					return new RegExp(["(?:", "<(!DOCTYPE)", "(?:", "\\s+", "(?:", i(2), "|", f.source + ")", ")*", ">", ")", "|", "(?:", "<(/)?", "(?:", e.source, "|", "(?:", "(" + t.source + ")", "\\s*/?", ")", "|", "(?:", "(" + t.source + ")", "\\s+", "(?:", "(?:\\s+|\\b)", i(7), ")*", "\\s*/?", ")", ")", ">", ")"].join(""), "gi")
				}(),
				htmlCharacterEntitiesRegex: /(&nbsp;|&#160;|&lt;|&#60;|&gt;|&#62;|&quot;|&#34;|&#39;)/gi,
				parse: function(e) {
					var t, n, f = this.htmlRegex,
						r = 0,
						i = [];
					while (null !== (t = f.exec(e))) {
						var o = t[0],
							a = t[4],
							s = t[1] || t[5] || t[6],
							c = !!t[3],
							l = t.index,
							u = e.substring(r, l);
						u && (n = this.parseTextAndEntityNodes(r, u), i.push.apply(i, n)), a ? i.push(this.createCommentNode(l, o, a)) : i.push(this.createElementNode(l, o, s, c)), r = l + o.length
					}
					if (r < e.length) {
						var d = e.substring(r);
						d && (n = this.parseTextAndEntityNodes(r, d), n.forEach((function(e) {
							i.push(e)
						})))
					}
					return i
				},
				parseTextAndEntityNodes: function(t, n) {
					for (var f = [], r = e.Util.splitAndCapture(n, this.htmlCharacterEntitiesRegex), i = 0, o = r.length; i < o; i += 2) {
						var a = r[i],
							s = r[i + 1];
						a && (f.push(this.createTextNode(t, a)), t += a.length), s && (f.push(this.createEntityNode(t, s)), t += s.length)
					}
					return f
				},
				createCommentNode: function(t, n, f) {
					return new e.htmlParser.CommentNode({
						offset: t,
						text: n,
						comment: e.Util.trim(f)
					})
				},
				createElementNode: function(t, n, f, r) {
					return new e.htmlParser.ElementNode({
						offset: t,
						text: n,
						tagName: f.toLowerCase(),
						closing: r
					})
				},
				createEntityNode: function(t, n) {
					return new e.htmlParser.EntityNode({
						offset: t,
						text: n
					})
				},
				createTextNode: function(t, n) {
					return new e.htmlParser.TextNode({
						offset: t,
						text: n
					})
				}
			}), e.htmlParser.HtmlNode = e.Util.extend(Object, {
				offset: void 0,
				text: void 0,
				constructor: function(t) {
					if (e.Util.assign(this, t), null == this.offset) throw new Error("`offset` cfg required");
					if (null == this.text) throw new Error("`text` cfg required")
				},
				getType: e.Util.abstractMethod,
				getOffset: function() {
					return this.offset
				},
				getText: function() {
					return this.text
				}
			}), e.htmlParser.CommentNode = e.Util.extend(e.htmlParser.HtmlNode, {
				comment: "",
				getType: function() {
					return "comment"
				},
				getComment: function() {
					return this.comment
				}
			}), e.htmlParser.ElementNode = e.Util.extend(e.htmlParser.HtmlNode, {
				tagName: "",
				closing: !1,
				getType: function() {
					return "element"
				},
				getTagName: function() {
					return this.tagName
				},
				isClosing: function() {
					return this.closing
				}
			}), e.htmlParser.EntityNode = e.Util.extend(e.htmlParser.HtmlNode, {
				getType: function() {
					return "entity"
				}
			}), e.htmlParser.TextNode = e.Util.extend(e.htmlParser.HtmlNode, {
				getType: function() {
					return "text"
				}
			}), e.match.Match = e.Util.extend(Object, {
				constructor: function(e) {
					if (null == e.tagBuilder) throw new Error("`tagBuilder` cfg required");
					if (null == e.matchedText) throw new Error("`matchedText` cfg required");
					if (null == e.offset) throw new Error("`offset` cfg required");
					this.tagBuilder = e.tagBuilder, this.matchedText = e.matchedText, this.offset = e.offset
				},
				getType: e.Util.abstractMethod,
				getMatchedText: function() {
					return this.matchedText
				},
				setOffset: function(e) {
					this.offset = e
				},
				getOffset: function() {
					return this.offset
				},
				getAnchorHref: e.Util.abstractMethod,
				getAnchorText: e.Util.abstractMethod,
				getCssClassSuffixes: function() {
					return [this.getType()]
				},
				buildTag: function() {
					return this.tagBuilder.build(this)
				}
			}), e.match.Email = e.Util.extend(e.match.Match, {
				constructor: function(t) {
					if (e.match.Match.prototype.constructor.call(this, t), !t.email) throw new Error("`email` cfg required");
					this.email = t.email
				},
				getType: function() {
					return "email"
				},
				getEmail: function() {
					return this.email
				},
				getAnchorHref: function() {
					return "mailto:" + this.email
				},
				getAnchorText: function() {
					return this.email
				}
			}), e.match.Hashtag = e.Util.extend(e.match.Match, {
				constructor: function(t) {
					if (e.match.Match.prototype.constructor.call(this, t), !t.hashtag) throw new Error("`hashtag` cfg required");
					this.serviceName = t.serviceName, this.hashtag = t.hashtag
				},
				getType: function() {
					return "hashtag"
				},
				getServiceName: function() {
					return this.serviceName
				},
				getHashtag: function() {
					return this.hashtag
				},
				getAnchorHref: function() {
					var e = this.serviceName,
						t = this.hashtag;
					switch (e) {
						case "twitter":
							return "https://twitter.com/hashtag/" + t;
						case "facebook":
							return "https://www.facebook.com/hashtag/" + t;
						case "instagram":
							return "https://instagram.com/explore/tags/" + t;
						default:
							throw new Error("Unknown service name to point hashtag to: ", e)
					}
				},
				getAnchorText: function() {
					return "#" + this.hashtag
				}
			}), e.match.Phone = e.Util.extend(e.match.Match, {
				constructor: function(t) {
					if (e.match.Match.prototype.constructor.call(this, t), !t.number) throw new Error("`number` cfg required");
					if (null == t.plusSign) throw new Error("`plusSign` cfg required");
					this.number = t.number, this.plusSign = t.plusSign
				},
				getType: function() {
					return "phone"
				},
				getNumber: function() {
					return this.number
				},
				getAnchorHref: function() {
					return "tel:" + (this.plusSign ? "+" : "") + this.number
				},
				getAnchorText: function() {
					return this.matchedText
				}
			}), e.match.Mention = e.Util.extend(e.match.Match, {
				constructor: function(t) {
					if (e.match.Match.prototype.constructor.call(this, t), !t.serviceName) throw new Error("`serviceName` cfg required");
					if (!t.mention) throw new Error("`mention` cfg required");
					this.mention = t.mention, this.serviceName = t.serviceName
				},
				getType: function() {
					return "mention"
				},
				getMention: function() {
					return this.mention
				},
				getServiceName: function() {
					return this.serviceName
				},
				getAnchorHref: function() {
					switch (this.serviceName) {
						case "twitter":
							return "https://twitter.com/" + this.mention;
						case "instagram":
							return "https://instagram.com/" + this.mention;
						case "soundcloud":
							return "https://soundcloud.com/" + this.mention;
						default:
							throw new Error("Unknown service name to point mention to: ", this.serviceName)
					}
				},
				getAnchorText: function() {
					return "@" + this.mention
				},
				getCssClassSuffixes: function() {
					var t = e.match.Match.prototype.getCssClassSuffixes.call(this),
						n = this.getServiceName();
					return n && t.push(n), t
				}
			}), e.match.Url = e.Util.extend(e.match.Match, {
				constructor: function(t) {
					if (e.match.Match.prototype.constructor.call(this, t), "scheme" !== t.urlMatchType && "www" !== t.urlMatchType && "tld" !== t.urlMatchType) throw new Error('`urlMatchType` cfg must be one of: "scheme", "www", or "tld"');
					if (!t.url) throw new Error("`url` cfg required");
					if (null == t.protocolUrlMatch) throw new Error("`protocolUrlMatch` cfg required");
					if (null == t.protocolRelativeMatch) throw new Error("`protocolRelativeMatch` cfg required");
					if (null == t.stripPrefix) throw new Error("`stripPrefix` cfg required");
					if (null == t.stripTrailingSlash) throw new Error("`stripTrailingSlash` cfg required");
					if (null == t.decodePercentEncoding) throw new Error("`decodePercentEncoding` cfg required");
					this.urlMatchType = t.urlMatchType, this.url = t.url, this.protocolUrlMatch = t.protocolUrlMatch, this.protocolRelativeMatch = t.protocolRelativeMatch, this.stripPrefix = t.stripPrefix, this.stripTrailingSlash = t.stripTrailingSlash, this.decodePercentEncoding = t.decodePercentEncoding
				},
				schemePrefixRegex: /^(https?:\/\/)?/i,
				wwwPrefixRegex: /^(https?:\/\/)?(www\.)?/i,
				protocolRelativeRegex: /^\/\//,
				protocolPrepended: !1,
				getType: function() {
					return "url"
				},
				getUrlMatchType: function() {
					return this.urlMatchType
				},
				getUrl: function() {
					var e = this.url;
					return this.protocolRelativeMatch || this.protocolUrlMatch || this.protocolPrepended || (e = this.url = "http://" + e, this.protocolPrepended = !0), e
				},
				getAnchorHref: function() {
					var e = this.getUrl();
					return e.replace(/&amp;/g, "&")
				},
				getAnchorText: function() {
					var e = this.getMatchedText();
					return this.protocolRelativeMatch && (e = this.stripProtocolRelativePrefix(e)), this.stripPrefix.scheme && (e = this.stripSchemePrefix(e)), this.stripPrefix.www && (e = this.stripWwwPrefix(e)), this.stripTrailingSlash && (e = this.removeTrailingSlash(e)), this.decodePercentEncoding && (e = this.removePercentEncoding(e)), e
				},
				stripSchemePrefix: function(e) {
					return e.replace(this.schemePrefixRegex, "")
				},
				stripWwwPrefix: function(e) {
					return e.replace(this.wwwPrefixRegex, "$1")
				},
				stripProtocolRelativePrefix: function(e) {
					return e.replace(this.protocolRelativeRegex, "")
				},
				removeTrailingSlash: function(e) {
					return "/" === e.charAt(e.length - 1) && (e = e.slice(0, -1)), e
				},
				removePercentEncoding: function(e) {
					try {
						return decodeURIComponent(e.replace(/%22/gi, "&quot;").replace(/%26/gi, "&amp;").replace(/%27/gi, "&#39;").replace(/%3C/gi, "&lt;").replace(/%3E/gi, "&gt;"))
					} catch (t) {
						return e
					}
				}
			}), e.tldRegex = /(?:xn--vermgensberatung-pwb|xn--vermgensberater-ctb|xn--clchc0ea0b2g2a9gcd|xn--w4r85el8fhu5dnra|northwesternmutual|travelersinsurance|vermögensberatung|xn--3oq18vl8pn36a|xn--5su34j936bgsg|xn--bck1b9a5dre4c|xn--mgbai9azgqp6j|xn--mgberp4a5d4ar|xn--xkc2dl3a5ee0h|vermögensberater|xn--fzys8d69uvgm|xn--mgba7c0bbn0a|xn--xkc2al3hye2a|americanexpress|kerryproperties|sandvikcoromant|xn--i1b6b1a6a2e|xn--kcrx77d1x4a|xn--lgbbat1ad8j|xn--mgba3a4f16a|xn--mgbc0a9azcg|xn--nqv7fs00ema|afamilycompany|americanfamily|bananarepublic|cancerresearch|cookingchannel|kerrylogistics|weatherchannel|xn--54b7fta0cc|xn--6qq986b3xl|xn--80aqecdr1a|xn--b4w605ferd|xn--fiq228c5hs|xn--jlq61u9w7b|xn--mgba3a3ejt|xn--mgbaam7a8h|xn--mgbayh7gpa|xn--mgbb9fbpob|xn--mgbbh1a71e|xn--mgbca7dzdo|xn--mgbi4ecexp|xn--mgbx4cd0ab|international|lifeinsurance|orientexpress|spreadbetting|travelchannel|wolterskluwer|xn--eckvdtc9d|xn--fpcrj9c3d|xn--fzc2c9e2c|xn--tiq49xqyj|xn--yfro4i67o|xn--ygbi2ammx|construction|lplfinancial|pamperedchef|scholarships|versicherung|xn--3e0b707e|xn--80adxhks|xn--80asehdb|xn--8y0a063a|xn--gckr3f0f|xn--mgb9awbf|xn--mgbab2bd|xn--mgbpl2fh|xn--mgbt3dhd|xn--mk1bu44c|xn--ngbc5azd|xn--ngbe9e0a|xn--ogbpf8fl|xn--qcka1pmc|accountants|barclaycard|blackfriday|blockbuster|bridgestone|calvinklein|contractors|creditunion|engineering|enterprises|foodnetwork|investments|kerryhotels|lamborghini|motorcycles|olayangroup|photography|playstation|productions|progressive|redumbrella|rightathome|williamhill|xn--11b4c3d|xn--1ck2e1b|xn--1qqw23a|xn--3bst00m|xn--3ds443g|xn--42c2d9a|xn--45brj9c|xn--55qw42g|xn--6frz82g|xn--80ao21a|xn--9krt00a|xn--cck2b3b|xn--czr694b|xn--d1acj3b|xn--efvy88h|xn--estv75g|xn--fct429k|xn--fjq720a|xn--flw351e|xn--g2xx48c|xn--gecrj9c|xn--gk3at1e|xn--h2brj9c|xn--hxt814e|xn--imr513n|xn--j6w193g|xn--jvr189m|xn--kprw13d|xn--kpry57d|xn--kpu716f|xn--mgbtx2b|xn--mix891f|xn--nyqy26a|xn--pbt977c|xn--pgbs0dh|xn--q9jyb4c|xn--rhqv96g|xn--rovu88b|xn--s9brj9c|xn--ses554g|xn--t60b56a|xn--vuq861b|xn--w4rs40l|xn--xhq521b|xn--zfr164b|சிங்கப்பூர்|accountant|apartments|associates|basketball|bnpparibas|boehringer|capitalone|consulting|creditcard|cuisinella|eurovision|extraspace|foundation|healthcare|immobilien|industries|management|mitsubishi|nationwide|newholland|nextdirect|onyourside|properties|protection|prudential|realestate|republican|restaurant|schaeffler|swiftcover|tatamotors|technology|telefonica|university|vistaprint|vlaanderen|volkswagen|xn--30rr7y|xn--3pxu8k|xn--45q11c|xn--4gbrim|xn--55qx5d|xn--5tzm5g|xn--80aswg|xn--90a3ac|xn--9dbq2a|xn--9et52u|xn--c2br7g|xn--cg4bki|xn--czrs0t|xn--czru2d|xn--fiq64b|xn--fiqs8s|xn--fiqz9s|xn--io0a7i|xn--kput3i|xn--mxtq1m|xn--o3cw4h|xn--pssy2u|xn--unup4y|xn--wgbh1c|xn--wgbl6a|xn--y9a3aq|accenture|alfaromeo|allfinanz|amsterdam|analytics|aquarelle|barcelona|bloomberg|christmas|community|directory|education|equipment|fairwinds|financial|firestone|fresenius|frontdoor|fujixerox|furniture|goldpoint|goodhands|hisamitsu|homedepot|homegoods|homesense|honeywell|institute|insurance|kuokgroup|ladbrokes|lancaster|landrover|lifestyle|marketing|marshalls|mcdonalds|melbourne|microsoft|montblanc|panasonic|passagens|pramerica|richardli|scjohnson|shangrila|solutions|statebank|statefarm|stockholm|travelers|vacations|xn--90ais|xn--c1avg|xn--d1alf|xn--e1a4c|xn--fhbei|xn--j1aef|xn--j1amh|xn--l1acc|xn--nqv7f|xn--p1acf|xn--tckwe|xn--vhquv|yodobashi|abudhabi|airforce|allstate|attorney|barclays|barefoot|bargains|baseball|boutique|bradesco|broadway|brussels|budapest|builders|business|capetown|catering|catholic|chrysler|cipriani|cityeats|cleaning|clinique|clothing|commbank|computer|delivery|deloitte|democrat|diamonds|discount|discover|download|engineer|ericsson|esurance|everbank|exchange|feedback|fidelity|firmdale|football|frontier|goodyear|grainger|graphics|guardian|hdfcbank|helsinki|holdings|hospital|infiniti|ipiranga|istanbul|jpmorgan|lighting|lundbeck|marriott|maserati|mckinsey|memorial|mortgage|movistar|observer|partners|pharmacy|pictures|plumbing|property|redstone|reliance|saarland|samsclub|security|services|shopping|showtime|softbank|software|stcgroup|supplies|symantec|telecity|training|uconnect|vanguard|ventures|verisign|woodside|xn--90ae|xn--node|xn--p1ai|xn--qxam|yokohama|السعودية|abogado|academy|agakhan|alibaba|android|athleta|auction|audible|auspost|avianca|banamex|bauhaus|bentley|bestbuy|booking|brother|bugatti|capital|caravan|careers|cartier|channel|chintai|citadel|clubmed|college|cologne|comcast|company|compare|contact|cooking|corsica|country|coupons|courses|cricket|cruises|dentist|digital|domains|exposed|express|farmers|fashion|ferrari|ferrero|finance|fishing|fitness|flights|florist|flowers|forsale|frogans|fujitsu|gallery|genting|godaddy|guitars|hamburg|hangout|hitachi|holiday|hosting|hoteles|hotmail|hyundai|iselect|ismaili|jewelry|juniper|kitchen|komatsu|lacaixa|lancome|lanxess|lasalle|latrobe|leclerc|liaison|limited|lincoln|markets|metlife|monster|netbank|netflix|network|neustar|okinawa|oldnavy|organic|origins|panerai|philips|pioneer|politie|realtor|recipes|rentals|reviews|rexroth|samsung|sandvik|schmidt|schwarz|science|shiksha|shriram|singles|spiegel|staples|starhub|statoil|storage|support|surgery|systems|temasek|theater|theatre|tickets|tiffany|toshiba|trading|walmart|wanggou|watches|weather|website|wedding|whoswho|windows|winners|xfinity|yamaxun|youtube|zuerich|католик|الجزائر|العليان|پاکستان|كاثوليك|موبايلي|இந்தியா|abarth|abbott|abbvie|active|africa|agency|airbus|airtel|alipay|alsace|alstom|anquan|aramco|author|bayern|beauty|berlin|bharti|blanco|bostik|boston|broker|camera|career|caseih|casino|center|chanel|chrome|church|circle|claims|clinic|coffee|comsec|condos|coupon|credit|cruise|dating|datsun|dealer|degree|dental|design|direct|doctor|dunlop|dupont|durban|emerck|energy|estate|events|expert|family|flickr|futbol|gallup|garden|george|giving|global|google|gratis|health|hermes|hiphop|hockey|hughes|imamat|insure|intuit|jaguar|joburg|juegos|kaufen|kinder|kindle|kosher|lancia|latino|lawyer|lefrak|living|locker|london|luxury|madrid|maison|makeup|market|mattel|mobile|mobily|monash|mormon|moscow|museum|mutual|nagoya|natura|nissan|nissay|norton|nowruz|office|olayan|online|oracle|orange|otsuka|pfizer|photos|physio|piaget|pictet|quebec|racing|realty|reisen|repair|report|review|rocher|rogers|ryukyu|safety|sakura|sanofi|school|schule|secure|select|shouji|soccer|social|stream|studio|supply|suzuki|swatch|sydney|taipei|taobao|target|tattoo|tennis|tienda|tjmaxx|tkmaxx|toyota|travel|unicom|viajes|viking|villas|virgin|vision|voting|voyage|vuelos|walter|warman|webcam|xihuan|xperia|yachts|yandex|zappos|москва|онлайн|ابوظبي|ارامكو|الاردن|المغرب|امارات|فلسطين|مليسيا|இலங்கை|ファッション|actor|adult|aetna|amfam|amica|apple|archi|audio|autos|azure|baidu|beats|bible|bingo|black|boats|boots|bosch|build|canon|cards|chase|cheap|chloe|cisco|citic|click|cloud|coach|codes|crown|cymru|dabur|dance|deals|delta|dodge|drive|dubai|earth|edeka|email|epost|epson|faith|fedex|final|forex|forum|gallo|games|gifts|gives|glade|glass|globo|gmail|green|gripe|group|gucci|guide|homes|honda|horse|house|hyatt|ikano|intel|irish|iveco|jetzt|koeln|kyoto|lamer|lease|legal|lexus|lilly|linde|lipsy|lixil|loans|locus|lotte|lotto|lupin|macys|mango|media|miami|money|mopar|movie|nadex|nexus|nikon|ninja|nokia|nowtv|omega|osaka|paris|parts|party|phone|photo|pizza|place|poker|praxi|press|prime|promo|quest|radio|rehab|reise|ricoh|rocks|rodeo|salon|sener|seven|sharp|shell|shoes|skype|sling|smart|smile|solar|space|stada|store|study|style|sucks|swiss|tatar|tires|tirol|tmall|today|tokyo|tools|toray|total|tours|trade|trust|tunes|tushu|ubank|vegas|video|vista|vodka|volvo|wales|watch|weber|weibo|works|world|xerox|yahoo|zippo|ایران|بازار|بھارت|سودان|سورية|همراه|संगठन|বাংলা|భారత్|嘉里大酒店|aarp|able|adac|aero|aigo|akdn|ally|amex|army|arpa|arte|asda|asia|audi|auto|baby|band|bank|bbva|beer|best|bike|bing|blog|blue|bofa|bond|book|buzz|cafe|call|camp|care|cars|casa|case|cash|cbre|cern|chat|citi|city|club|cool|coop|cyou|data|date|dclk|deal|dell|desi|diet|dish|docs|doha|duck|duns|dvag|erni|fage|fail|fans|farm|fast|fiat|fido|film|fire|fish|flir|food|ford||fund|game|gbiz|gent|ggee|gift|gmbh|gold|golf|goog|guge|guru|hair|haus|hdfc|help|here|hgtv|host|hsbc|icbc|ieee|imdb|immo|info|itau|java|jeep|jobs|jprs|kddi|kiwi|kpmg|kred|land|lego|lgbt|lidl|life|like|limo|link|live|loan|loft|love|ltda|luxe|maif|meet|meme|menu|mini|mint|mobi|moda|moto|mtpc|name|navy|news|next|nico|nike|ollo|open|page|pars|pccw|pics|ping|pink|play|plus|pohl|porn|post|prod|prof|qpon|raid|read|reit|rent|rest|rich|rmit|room|rsvp|ruhr|safe|sale|sapo|sarl|save|saxo|scor|scot|seat|seek|sexy|shaw|shia|shop|show|silk|sina|site|skin|sncf|sohu|song|sony|spot|star|surf|talk|taxi|team|tech|teva|tiaa|tips|town|toys|tube|vana|visa|viva|vivo|vote|voto|wang|weir|wien|wiki|wine|work|xbox|yoga|zara|zero|zone|дети|сайт|بيتك|تونس|شبكة|عراق|عمان|موقع|भारत|ভারত|ਭਾਰਤ|ભારત|ලංකා|グーグル|クラウド|ポイント|大众汽车|组织机构|電訊盈科|香格里拉|aaa|abb|abc|aco|ads|aeg|afl|aig|anz|aol|app|art|aws|axa|bar|bbc|bbt|bcg|bcn|bet|bid|bio|biz|bms|bmw|bnl|bom|boo|bot|box|buy|bzh|cab|cal|cam|car|cat|cba|cbn|cbs|ceb|ceo|cfa|cfd|com|crs|csc|dad|day|dds|dev|dhl|diy|dnp|dog|dot|dtv|dvr|eat|eco|edu|esq|eus|fan|fit|fly|foo|fox|frl|ftr|fun|fyi|gal|gap|gdn|gea|gle|gmo|gmx|goo|gop|got|gov|hbo|hiv|hkt|hot|how|htc|ibm|ice|icu|ifm|ing|ink|int|ist|itv|iwc|jcb|jcp|jio|jlc|jll|jmp|jnj|jot|joy|kfh|kia|kim|kpn|krd|lat|law|lds|lol|lpl|ltd|man|mba|mcd|med|men|meo|mil|mit|mlb|mls|mma|moe|moi|mom|mov|msd|mtn|mtr|nab|nba|nec|net|new|nfl|ngo|nhk|now|nra|nrw|ntt|nyc|obi|off|one|ong|onl|ooo|org|ott|ovh|pay|pet|pid|pin|pnc|pro|pru|pub|pwc|qvc|red|ren|ril|rio|rip|run|rwe|sap|sas|sbi|sbs|sca|scb|ses|sew|sex|sfr|ski|sky|soy|srl|srt|stc|tab|tax|tci|tdk|tel|thd|tjx|top|trv|tui|tvs|ubs|uno|uol|ups|vet|vig|vin|vip|wed|win|wme|wow|wtc|wtf|xin|xxx|xyz|you|yun|zip|бел|ком|қаз|мкд|мон|орг|рус|срб|укр|հայ|קום|قطر|كوم|مصر|कॉम|नेट|คอม|ไทย|ストア|セール|みんな|中文网|天主教|我爱你|新加坡|淡马锡|诺基亚|飞利浦|ac|ad|ae|af|ag|ai|al|am|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw|ελ|бг|ею|рф|გე|닷넷|닷컴|삼성|한국|コム|世界|中信|中国|中國|企业|佛山|信息|健康|八卦|公司|公益|台湾|台灣|商城|商店|商标|嘉里|在线|大拿|娱乐|家電|工行|广东|微博|慈善|手机|手表|政务|政府|新闻|时尚|書籍|机构|游戏|澳門|点看|珠宝|移动|网址|网店|网站|网络|联通|谷歌|购物|通販|集团|食品|餐厅|香港)/, e.matcher.Matcher = e.Util.extend(Object, {
				constructor: function(e) {
					if (!e.tagBuilder) throw new Error("`tagBuilder` cfg required");
					this.tagBuilder = e.tagBuilder
				},
				parseMatches: e.Util.abstractMethod
			}), e.matcher.Email = e.Util.extend(e.matcher.Matcher, {
				matcherRegex: function() {
					var t = e.RegexLib.alphaNumericCharsStr,
						n = "!#$%&'*+\\-\\/=?^_`{|}~",
						f = '\\s"(),:;<>@\\[\\]',
						r = t + n,
						i = r + f,
						o = new RegExp("(?:[" + r + "](?:[" + r + ']|\\.(?!\\.|@))*|\\"[' + i + '.]+\\")@'),
						a = e.RegexLib.getDomainNameStr,
						s = e.tldRegex;
					return new RegExp([o.source, a(1), "\\.", s.source].join(""), "gi")
				}(),
				parseMatches: function(t) {
					var n, f = this.matcherRegex,
						r = this.tagBuilder,
						i = [];
					while (null !== (n = f.exec(t))) {
						var o = n[0];
						i.push(new e.match.Email({
							tagBuilder: r,
							matchedText: o,
							offset: n.index,
							email: o
						}))
					}
					return i
				}
			}), e.matcher.Hashtag = e.Util.extend(e.matcher.Matcher, {
				matcherRegex: new RegExp("#[_" + e.RegexLib.alphaNumericCharsStr + "]{1,139}", "g"),
				nonWordCharRegex: new RegExp("[^" + e.RegexLib.alphaNumericCharsStr + "]"),
				constructor: function(t) {
					e.matcher.Matcher.prototype.constructor.call(this, t), this.serviceName = t.serviceName
				},
				parseMatches: function(t) {
					var n, f = this.matcherRegex,
						r = this.nonWordCharRegex,
						i = this.serviceName,
						o = this.tagBuilder,
						a = [];
					while (null !== (n = f.exec(t))) {
						var s = n.index,
							c = t.charAt(s - 1);
						if (0 === s || r.test(c)) {
							var l = n[0],
								u = n[0].slice(1);
							a.push(new e.match.Hashtag({
								tagBuilder: o,
								matchedText: l,
								offset: s,
								serviceName: i,
								hashtag: u
							}))
						}
					}
					return a
				}
			}), e.matcher.Phone = e.Util.extend(e.matcher.Matcher, {
				matcherRegex: /(?:(?:(?:(\+)?\d{1,3}[-\040.]?)?\(?\d{3}\)?[-\040.]?\d{3}[-\040.]?\d{4})|(?:(\+)(?:9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)[-\040.]?(?:\d[-\040.]?){6,12}\d+))([,;]+[0-9]+#?)*/g,
				parseMatches: function(t) {
					var n, f = this.matcherRegex,
						r = this.tagBuilder,
						i = [];
					while (null !== (n = f.exec(t))) {
						var o = n[0],
							a = o.replace(/[^0-9,;#]/g, ""),
							s = !(!n[1] && !n[2]),
							c = 0 == n.index ? "" : t.substr(n.index - 1, 1),
							l = t.substr(n.index + o.length, 1),
							u = !c.match(/\d/) && !l.match(/\d/);
						this.testMatch(n[3]) && this.testMatch(o) && u && i.push(new e.match.Phone({
							tagBuilder: r,
							matchedText: o,
							offset: n.index,
							number: a,
							plusSign: s
						}))
					}
					return i
				},
				testMatch: function(e) {
					return /\D/.test(e)
				}
			}), e.matcher.Mention = e.Util.extend(e.matcher.Matcher, {
				matcherRegexes: {
					twitter: new RegExp("@[_" + e.RegexLib.alphaNumericCharsStr + "]{1,20}", "g"),
					instagram: new RegExp("@[_." + e.RegexLib.alphaNumericCharsStr + "]{1,50}", "g"),
					soundcloud: new RegExp("@[_." + e.RegexLib.alphaNumericCharsStr + "-]{1,50}", "g")
				},
				nonWordCharRegex: new RegExp("[^" + e.RegexLib.alphaNumericCharsStr + "]"),
				constructor: function(t) {
					e.matcher.Matcher.prototype.constructor.call(this, t), this.serviceName = t.serviceName
				},
				parseMatches: function(t) {
					var n, f = this.matcherRegexes[this.serviceName],
						r = this.nonWordCharRegex,
						i = this.serviceName,
						o = this.tagBuilder,
						a = [];
					if (!f) return a;
					while (null !== (n = f.exec(t))) {
						var s = n.index,
							c = t.charAt(s - 1);
						if (0 === s || r.test(c)) {
							var l = n[0].replace(/\.+$/g, ""),
								u = l.slice(1);
							a.push(new e.match.Mention({
								tagBuilder: o,
								matchedText: l,
								offset: s,
								serviceName: i,
								mention: u
							}))
						}
					}
					return a
				}
			}), e.matcher.Url = e.Util.extend(e.matcher.Matcher, {
				matcherRegex: function() {
					var t = /(?:[A-Za-z][-.+A-Za-z0-9]{0,63}:(?![A-Za-z][-.+A-Za-z0-9]{0,63}:\/\/)(?!\d+\/?)(?:\/\/)?)/,
						n = /(?:www\.)/,
						f = e.RegexLib.getDomainNameStr,
						r = e.tldRegex,
						i = e.RegexLib.alphaNumericCharsStr,
						o = new RegExp("[/?#](?:[" + i + "\\-+&@#/%=~_()|'$*\\[\\]?!:,.;✓]*[" + i + "\\-+&@#/%=~_()|'$*\\[\\]✓])?");
					return new RegExp(["(?:", "(", t.source, f(2), ")", "|", "(", "(//)?", n.source, f(6), ")", "|", "(", "(//)?", f(10) + "\\.", r.source, "(?![-" + i + "])", ")", ")", "(?::[0-9]+)?", "(?:" + o.source + ")?"].join(""), "gi")
				}(),
				wordCharRegExp: new RegExp("[" + e.RegexLib.alphaNumericCharsStr + "]"),
				openParensRe: /\(/g,
				closeParensRe: /\)/g,
				constructor: function(t) {
					if (e.matcher.Matcher.prototype.constructor.call(this, t), null == t.stripPrefix) throw new Error("`stripPrefix` cfg required");
					if (null == t.stripTrailingSlash) throw new Error("`stripTrailingSlash` cfg required");
					this.stripPrefix = t.stripPrefix, this.stripTrailingSlash = t.stripTrailingSlash, this.decodePercentEncoding = t.decodePercentEncoding
				},
				parseMatches: function(t) {
					var n, f = this.matcherRegex,
						r = this.stripPrefix,
						i = this.stripTrailingSlash,
						o = this.decodePercentEncoding,
						a = this.tagBuilder,
						s = [];
					while (null !== (n = f.exec(t))) {
						var c = n[0],
							l = n[1],
							u = n[4],
							d = n[5],
							p = n[9],
							h = n.index,
							m = d || p,
							g = t.charAt(h - 1);
						if (e.matcher.UrlMatchValidator.isValid(c, l) && (!(h > 0 && "@" === g) && !(h > 0 && m && this.wordCharRegExp.test(g)))) {
							if (/\?$/.test(c) && (c = c.substr(0, c.length - 1)), this.matchHasUnbalancedClosingParen(c)) c = c.substr(0, c.length - 1);
							else {
								var v = this.matchHasInvalidCharAfterTld(c, l);
								v > -1 && (c = c.substr(0, v))
							}
							var b = l ? "scheme" : u ? "www" : "tld",
								y = !!l;
							s.push(new e.match.Url({
								tagBuilder: a,
								matchedText: c,
								offset: h,
								urlMatchType: b,
								url: c,
								protocolUrlMatch: y,
								protocolRelativeMatch: !!m,
								stripPrefix: r,
								stripTrailingSlash: i,
								decodePercentEncoding: o
							}))
						}
					}
					return s
				},
				matchHasUnbalancedClosingParen: function(e) {
					var t = e.charAt(e.length - 1);
					if (")" === t) {
						var n = e.match(this.openParensRe),
							f = e.match(this.closeParensRe),
							r = n && n.length || 0,
							i = f && f.length || 0;
						if (r < i) return !0
					}
					return !1
				},
				matchHasInvalidCharAfterTld: function(t, n) {
					if (!t) return -1;
					var f = 0;
					n && (f = t.indexOf(":"), t = t.slice(f));
					var r = e.RegexLib.alphaNumericCharsStr,
						i = new RegExp("^((.?//)?[-." + r + "]*[-" + r + "]\\.[-" + r + "]+)"),
						o = i.exec(t);
					return null === o ? -1 : (f += o[1].length, t = t.slice(o[1].length), /^[^-.A-Za-z0-9:\/?#]/.test(t) ? f : -1)
				}
			}), e.matcher.UrlMatchValidator = {
				hasFullProtocolRegex: /^[A-Za-z][-.+A-Za-z0-9]*:\/\//,
				uriSchemeRegex: /^[A-Za-z][-.+A-Za-z0-9]*:/,
				hasWordCharAfterProtocolRegex: new RegExp(":[^\\s]*?[" + e.RegexLib.alphaCharsStr + "]"),
				ipRegex: /[0-9][0-9]?[0-9]?\.[0-9][0-9]?[0-9]?\.[0-9][0-9]?[0-9]?\.[0-9][0-9]?[0-9]?(:[0-9]*)?\/?$/,
				isValid: function(e, t) {
					return !(t && !this.isValidUriScheme(t) || this.urlMatchDoesNotHaveProtocolOrDot(e, t) || this.urlMatchDoesNotHaveAtLeastOneWordChar(e, t) && !this.isValidIpAddress(e) || this.containsMultipleDots(e))
				},
				isValidIpAddress: function(e) {
					var t = new RegExp(this.hasFullProtocolRegex.source + this.ipRegex.source),
						n = e.match(t);
					return null !== n
				},
				containsMultipleDots: function(e) {
					var t = e;
					return this.hasFullProtocolRegex.test(e) && (t = e.split("://")[1]), t.split("/")[0].indexOf("..") > -1
				},
				isValidUriScheme: function(e) {
					var t = e.match(this.uriSchemeRegex)[0].toLowerCase();
					return "javascript:" !== t && "vbscript:" !== t
				},
				urlMatchDoesNotHaveProtocolOrDot: function(e, t) {
					return !!e && (!t || !this.hasFullProtocolRegex.test(t)) && -1 === e.indexOf(".")
				},
				urlMatchDoesNotHaveAtLeastOneWordChar: function(e, t) {
					return !(!e || !t) && !this.hasWordCharAfterProtocolRegex.test(e)
				}
			}, e.truncate.TruncateEnd = function(t, n, f) {
				return e.Util.ellipsis(t, n, f)
			}, e.truncate.TruncateMiddle = function(e, t, n) {
				if (e.length <= t) return e;
				var f, r;
				null == n ? (n = "&hellip;", f = 8, r = 3) : (f = n.length, r = n.length);
				var i = t - r,
					o = "";
				return i > 0 && (o = e.substr(-1 * Math.floor(i / 2))), (e.substr(0, Math.ceil(i / 2)) + n + o).substr(0, i + f)
			}, e.truncate.TruncateSmart = function(e, t, n) {
				var f, r;
				null == n ? (n = "&hellip;", r = 3, f = 8) : (r = n.length, f = n.length);
				var i = function(e) {
						var t = {},
							n = e,
							f = n.match(/^([a-z]+):\/\//i);
						return f && (t.scheme = f[1], n = n.substr(f[0].length)), f = n.match(/^(.*?)(?=(\?|#|\/|$))/i), f && (t.host = f[1], n = n.substr(f[0].length)), f = n.match(/^\/(.*?)(?=(\?|#|$))/i), f && (t.path = f[1], n = n.substr(f[0].length)), f = n.match(/^\?(.*?)(?=(#|$))/i), f && (t.query = f[1], n = n.substr(f[0].length)), f = n.match(/^#(.*?)$/i), f && (t.fragment = f[1]), t
					},
					o = function(e) {
						var t = "";
						return e.scheme && e.host && (t += e.scheme + "://"), e.host && (t += e.host), e.path && (t += "/" + e.path), e.query && (t += "?" + e.query), e.fragment && (t += "#" + e.fragment), t
					},
					a = function(e, t) {
						var f = t / 2,
							r = Math.ceil(f),
							i = -1 * Math.floor(f),
							o = "";
						return i < 0 && (o = e.substr(i)), e.substr(0, r) + n + o
					};
				if (e.length <= t) return e;
				var s = t - r,
					c = i(e);
				if (c.query) {
					var l = c.query.match(/^(.*?)(?=(\?|\#))(.*?)$/i);
					l && (c.query = c.query.substr(0, l[1].length), e = o(c))
				}
				if (e.length <= t) return e;
				if (c.host && (c.host = c.host.replace(/^www\./, ""), e = o(c)), e.length <= t) return e;
				var u = "";
				if (c.host && (u += c.host), u.length >= s) return c.host.length == t ? (c.host.substr(0, t - r) + n).substr(0, s + f) : a(u, s).substr(0, s + f);
				var d = "";
				if (c.path && (d += "/" + c.path), c.query && (d += "?" + c.query), d) {
					if ((u + d).length >= s) {
						if ((u + d).length == t) return (u + d).substr(0, t);
						var p = s - u.length;
						return (u + a(d, p)).substr(0, s + f)
					}
					u += d
				}
				if (c.fragment) {
					var h = "#" + c.fragment;
					if ((u + h).length >= s) {
						if ((u + h).length == t) return (u + h).substr(0, t);
						var m = s - u.length;
						return (u + a(h, m)).substr(0, s + f)
					}
					u += h
				}
				if (c.scheme && c.host) {
					var g = c.scheme + "://";
					if ((u + g).length < s) return (g + u).substr(0, t)
				}
				if (u.length <= t) return u;
				var v = "";
				return s > 0 && (v = u.substr(-1 * Math.floor(s / 2))), (u.substr(0, Math.ceil(s / 2)) + n + v).substr(0, s + f)
			}, e
		}))
	},
	7418: function(e, t) {
		t.f = Object.getOwnPropertySymbols
	},
	7435: function(e, t, n) {},
	"746f": function(e, t, n) {
		var f = n("428f"),
			r = n("5135"),
			i = n("e538"),
			o = n("9bf2").f;
		e.exports = function(e) {
			var t = f.Symbol || (f.Symbol = {});
			r(t, e) || o(t, e, {
				value: i.f(e)
			})
		}
	},
	"77ed": function(e, t, n) {},
	7839: function(e, t) {
		e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
	},
	"7a77": function(e, t, n) {
		"use strict";

		function f(e) {
			this.message = e
		}
		f.prototype.toString = function() {
			return "Cancel" + (this.message ? ": " + this.message : "")
		}, f.prototype.__CANCEL__ = !0, e.exports = f
	},
	"7aac": function(e, t, n) {
		"use strict";
		var f = n("c532");
		e.exports = f.isStandardBrowserEnv() ? function() {
			return {
				write: function(e, t, n, r, i, o) {
					var a = [];
					a.push(e + "=" + encodeURIComponent(t)), f.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), f.isString(r) && a.push("path=" + r), f.isString(i) && a.push("domain=" + i), !0 === o && a.push("secure"), document.cookie = a.join("; ")
				},
				read: function(e) {
					var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
					return t ? decodeURIComponent(t[3]) : null
				},
				remove: function(e) {
					this.write(e, "", Date.now() - 864e5)
				}
			}
		}() : function() {
			return {
				write: function() {},
				read: function() {
					return null
				},
				remove: function() {}
			}
		}()
	},
	"7b0b": function(e, t, n) {
		var f = n("1d80");
		e.exports = function(e) {
			return Object(f(e))
		}
	},
	"7bfe": function(e, t, n) {
		"use strict";
		var f = n("7067"),
			r = n.n(f);
		r.a
	},
	"7c73": function(e, t, n) {
		var f, r = n("825a"),
			i = n("37e8"),
			o = n("7839"),
			a = n("d012"),
			s = n("1be4"),
			c = n("cc12"),
			l = n("f772"),
			u = ">",
			d = "<",
			p = "prototype",
			h = "script",
			m = l("IE_PROTO"),
			g = function() {},
			v = function(e) {
				return d + h + u + e + d + "/" + h + u
			},
			b = function(e) {
				e.write(v("")), e.close();
				var t = e.parentWindow.Object;
				return e = null, t
			},
			y = function() {
				var e, t = c("iframe"),
					n = "java" + h + ":";
				return t.style.display = "none", s.appendChild(t), t.src = String(n), e = t.contentWindow.document, e.open(), e.write(v("document.F=Object")), e.close(), e.F
			},
			_ = function() {
				try {
					f = document.domain && new ActiveXObject("htmlfile")
				} catch (t) {}
				_ = f ? b(f) : y();
				var e = o.length;
				while (e--) delete _[p][o[e]];
				return _()
			};
		a[m] = !0, e.exports = Object.create || function(e, t) {
			var n;
			return null !== e ? (g[p] = r(e), n = new g, g[p] = null, n[m] = e) : n = _(), void 0 === t ? n : i(n, t)
		}
	},
	"7db0": function(e, t, n) {
		"use strict";
		var f = n("23e7"),
			r = n("b727").find,
			i = n("44d2"),
			o = n("ae40"),
			a = "find",
			s = !0,
			c = o(a);
		a in [] && Array(1)[a]((function() {
			s = !1
		})), f({
			target: "Array",
			proto: !0,
			forced: s || !c
		}, {
			find: function(e) {
				return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
			}
		}), i(a)
	},
	"7dd0": function(e, t, n) {
		"use strict";
		var f = n("23e7"),
			r = n("9ed3"),
			i = n("e163"),
			o = n("d2bb"),
			a = n("d44e"),
			s = n("9112"),
			c = n("6eeb"),
			l = n("b622"),
			u = n("c430"),
			d = n("3f8c"),
			p = n("ae93"),
			h = p.IteratorPrototype,
			m = p.BUGGY_SAFARI_ITERATORS,
			g = l("iterator"),
			v = "keys",
			b = "values",
			y = "entries",
			_ = function() {
				return this
			};
		e.exports = function(e, t, n, l, p, w, x) {
			r(n, t, l);
			var k, C, S, A = function(e) {
					if (e === p && L) return L;
					if (!m && e in T) return T[e];
					switch (e) {
						case v:
							return function() {
								return new n(this, e)
							};
						case b:
							return function() {
								return new n(this, e)
							};
						case y:
							return function() {
								return new n(this, e)
							}
					}
					return function() {
						return new n(this)
					}
				},
				O = t + " Iterator",
				E = !1,
				T = e.prototype,
				j = T[g] || T["@@iterator"] || p && T[p],
				L = !m && j || A(p),
				I = "Array" == t && T.entries || j;
			if (I && (k = i(I.call(new e)), h !== Object.prototype && k.next && (u || i(k) === h || (o ? o(k, h) : "function" != typeof k[g] && s(k, g, _)), a(k, O, !0, !0), u && (d[O] = _))), p == b && j && j.name !== b && (E = !0, L = function() {
					return j.call(this)
				}), u && !x || T[g] === L || s(T, g, L), d[t] = L, p)
				if (C = {
						values: A(b),
						keys: w ? L : A(v),
						entries: A(y)
					}, x)
					for (S in C)(m || E || !(S in T)) && c(T, S, C[S]);
				else f({
					target: t,
					proto: !0,
					forced: m || E
				}, C);
			return C
		}
	},
	"7f9a": function(e, t, n) {
		var f = n("da84"),
			r = n("8925"),
			i = f.WeakMap;
		e.exports = "function" === typeof i && /native code/.test(r(i))
	},
	8171: function(e, t, n) {},
	"825a": function(e, t, n) {
		var f = n("861d");
		e.exports = function(e) {
			if (!f(e)) throw TypeError(String(e) + " is not an object");
			return e
		}
	},
	"83ab": function(e, t, n) {
		var f = n("d039");
		e.exports = !f((function() {
			return 7 != Object.defineProperty({}, 1, {
				get: function() {
					return 7
				}
			})[1]
		}))
	},
	8418: function(e, t, n) {
		"use strict";
		var f = n("c04e"),
			r = n("9bf2"),
			i = n("5c6c");
		e.exports = function(e, t, n) {
			var o = f(t);
			o in e ? r.f(e, o, i(0, n)) : e[o] = n
		}
	},
	"84a0": function(e, t, n) {},
	"857a": function(e, t, n) {
		var f = n("1d80"),
			r = /"/g;
		e.exports = function(e, t, n, i) {
			var o = String(f(e)),
				a = "<" + t;
			return "" !== n && (a += " " + n + '="' + String(i).replace(r, "&quot;") + '"'), a + ">" + o + "</" + t + ">"
		}
	},
	"861d": function(e, t) {
		e.exports = function(e) {
			return "object" === typeof e ? null !== e : "function" === typeof e
		}
	},
	"86cc": function(e, t, n) {},
	"86ea": function(e, t, n) {
		"use strict";
		var f = n("12e3"),
			r = n.n(f);
		r.a
	},
	8836: function(e, t, n) {},
	8925: function(e, t, n) {
		var f = n("c6cd"),
			r = Function.toString;
		"function" != typeof f.inspectSource && (f.inspectSource = function(e) {
			return r.call(e)
		}), e.exports = f.inspectSource
	},
	"899c": function(e, t, n) {},
	"8a23": function(e, t, n) {},
	"8aa5": function(e, t, n) {
		"use strict";
		var f = n("6547").charAt;
		e.exports = function(e, t, n) {
			return t + (n ? f(e, t).length : 1)
		}
	},
	"8ce9": function(e, t, n) {},
	"8d4f": function(e, t, n) {},
	"8df4": function(e, t, n) {
		"use strict";
		var f = n("7a77");

		function r(e) {
			if ("function" !== typeof e) throw new TypeError("executor must be a function.");
			var t;
			this.promise = new Promise((function(e) {
				t = e
			}));
			var n = this;
			e((function(e) {
				n.reason || (n.reason = new f(e), t(n.reason))
			}))
		}
		r.prototype.throwIfRequested = function() {
			if (this.reason) throw this.reason
		}, r.source = function() {
			var e, t = new r((function(t) {
				e = t
			}));
			return {
				token: t,
				cancel: e
			}
		}, e.exports = r
	},
	"8efc": function(e, t, n) {},
	"90e3": function(e, t) {
		var n = 0,
			f = Math.random();
		e.exports = function(e) {
			return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++n + f).toString(36)
		}
	},
	9112: function(e, t, n) {
		var f = n("83ab"),
			r = n("9bf2"),
			i = n("5c6c");
		e.exports = f ? function(e, t, n) {
			return r.f(e, t, i(1, n))
		} : function(e, t, n) {
			return e[t] = n, e
		}
	},
	"91ea": function(e, t, n) {
		"use strict";
		var f = n("04ab"),
			r = n.n(f);
		r.a
	},
	9263: function(e, t, n) {
		"use strict";
		var f = n("ad6d"),
			r = n("9f7f"),
			i = RegExp.prototype.exec,
			o = String.prototype.replace,
			a = i,
			s = function() {
				var e = /a/,
					t = /b*/g;
				return i.call(e, "a"), i.call(t, "a"), 0 !== e.lastIndex || 0 !== t.lastIndex
			}(),
			c = r.UNSUPPORTED_Y || r.BROKEN_CARET,
			l = void 0 !== /()??/.exec("")[1],
			u = s || l || c;
		u && (a = function(e) {
			var t, n, r, a, u = this,
				d = c && u.sticky,
				p = f.call(u),
				h = u.source,
				m = 0,
				g = e;
			return d && (p = p.replace("y", ""), -1 === p.indexOf("g") && (p += "g"), g = String(e).slice(u.lastIndex), u.lastIndex > 0 && (!u.multiline || u.multiline && "\n" !== e[u.lastIndex - 1]) && (h = "(?: " + h + ")", g = " " + g, m++), n = new RegExp("^(?:" + h + ")", p)), l && (n = new RegExp("^" + h + "$(?!\\s)", p)), s && (t = u.lastIndex), r = i.call(d ? n : u, g), d ? r ? (r.input = r.input.slice(m), r[0] = r[0].slice(m), r.index = u.lastIndex, u.lastIndex += r[0].length) : u.lastIndex = 0 : s && r && (u.lastIndex = u.global ? r.index + r[0].length : t), l && r && r.length > 1 && o.call(r[0], n, (function() {
				for (a = 1; a < arguments.length - 2; a++) void 0 === arguments[a] && (r[a] = void 0)
			})), r
		}), e.exports = a
	},
	"94ca": function(e, t, n) {
		var f = n("d039"),
			r = /#|\.prototype\./,
			i = function(e, t) {
				var n = a[o(e)];
				return n == c || n != s && ("function" == typeof t ? f(t) : !!t)
			},
			o = i.normalize = function(e) {
				return String(e).replace(r, ".").toLowerCase()
			},
			a = i.data = {},
			s = i.NATIVE = "N",
			c = i.POLYFILL = "P";
		e.exports = i
	},
	"95ed": function(e, t, n) {},
	9911: function(e, t, n) {
		"use strict";
		var f = n("23e7"),
			r = n("857a"),
			i = n("af03");
		f({
			target: "String",
			proto: !0,
			forced: i("link")
		}, {
			link: function(e) {
				return r(this, "a", "href", e)
			}
		})
	},
	"99af": function(e, t, n) {
		"use strict";
		var f = n("23e7"),
			r = n("d039"),
			i = n("e8b5"),
			o = n("861d"),
			a = n("7b0b"),
			s = n("50c4"),
			c = n("8418"),
			l = n("65f0"),
			u = n("1dde"),
			d = n("b622"),
			p = n("2d00"),
			h = d("isConcatSpreadable"),
			m = 9007199254740991,
			g = "Maximum allowed index exceeded",
			v = p >= 51 || !r((function() {
				var e = [];
				return e[h] = !1, e.concat()[0] !== e
			})),
			b = u("concat"),
			y = function(e) {
				if (!o(e)) return !1;
				var t = e[h];
				return void 0 !== t ? !!t : i(e)
			},
			_ = !v || !b;
		f({
			target: "Array",
			proto: !0,
			forced: _
		}, {
			concat: function(e) {
				var t, n, f, r, i, o = a(this),
					u = l(o, 0),
					d = 0;
				for (t = -1, f = arguments.length; t < f; t++)
					if (i = -1 === t ? o : arguments[t], y(i)) {
						if (r = s(i.length), d + r > m) throw TypeError(g);
						for (n = 0; n < r; n++, d++) n in i && c(u, d, i[n])
					} else {
						if (d >= m) throw TypeError(g);
						c(u, d++, i)
					} return u.length = d, u
			}
		})
	},
	"9a2f": function(e, t, n) {},
	"9bdd": function(e, t, n) {
		var f = n("825a");
		e.exports = function(e, t, n, r) {
			try {
				return r ? t(f(n)[0], n[1]) : t(n)
			} catch (o) {
				var i = e["return"];
				throw void 0 !== i && f(i.call(e)), o
			}
		}
	},
	"9bf2": function(e, t, n) {
		var f = n("83ab"),
			r = n("0cfb"),
			i = n("825a"),
			o = n("c04e"),
			a = Object.defineProperty;
		t.f = f ? a : function(e, t, n) {
			if (i(e), t = o(t, !0), i(n), r) try {
				return a(e, t, n)
			} catch (f) {}
			if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
			return "value" in n && (e[t] = n.value), e
		}
	},
	"9c14": function(e, t, n) {},
	"9cbd": function(e, t, n) {
		"use strict";
		var f = n("9a2f"),
			r = n.n(f);
		r.a
	},
	"9ec6": function(e, t, n) {
		"use strict";
		var f = n("0fa8"),
			r = n.n(f);
		r.a
	},
	"9ed3": function(e, t, n) {
		"use strict";
		var f = n("ae93").IteratorPrototype,
			r = n("7c73"),
			i = n("5c6c"),
			o = n("d44e"),
			a = n("3f8c"),
			s = function() {
				return this
			};
		e.exports = function(e, t, n) {
			var c = t + " Iterator";
			return e.prototype = r(f, {
				next: i(1, n)
			}), o(e, c, !1, !0), a[c] = s, e
		}
	},
	"9f7f": function(e, t, n) {
		"use strict";
		var f = n("d039");

		function r(e, t) {
			return RegExp(e, t)
		}
		t.UNSUPPORTED_Y = f((function() {
			var e = r("a", "y");
			return e.lastIndex = 2, null != e.exec("abcd")
		})), t.BROKEN_CARET = f((function() {
			var e = r("^r", "gy");
			return e.lastIndex = 2, null != e.exec("str")
		}))
	},
	a15b: function(e, t, n) {
		"use strict";
		var f = n("23e7"),
			r = n("44ad"),
			i = n("fc6a"),
			o = n("a640"),
			a = [].join,
			s = r != Object,
			c = o("join", ",");
		f({
			target: "Array",
			proto: !0,
			forced: s || !c
		}, {
			join: function(e) {
				return a.call(i(this), void 0 === e ? "," : e)
			}
		})
	},
	a2bf: function(e, t, n) {
		"use strict";
		var f = n("e8b5"),
			r = n("50c4"),
			i = n("0366"),
			o = function(e, t, n, a, s, c, l, u) {
				var d, p = s,
					h = 0,
					m = !!l && i(l, u, 3);
				while (h < a) {
					if (h in n) {
						if (d = m ? m(n[h], h, t) : n[h], c > 0 && f(d)) p = o(e, t, d, r(d.length), p, c - 1) - 1;
						else {
							if (p >= 9007199254740991) throw TypeError("Exceed the acceptable array length");
							e[p] = d
						}
						p++
					}
					h++
				}
				return p
			};
		e.exports = o
	},
	a434: function(e, t, n) {
		"use strict";
		var f = n("23e7"),
			r = n("23cb"),
			i = n("a691"),
			o = n("50c4"),
			a = n("7b0b"),
			s = n("65f0"),
			c = n("8418"),
			l = n("1dde"),
			u = n("ae40"),
			d = l("splice"),
			p = u("splice", {
				ACCESSORS: !0,
				0: 0,
				1: 2
			}),
			h = Math.max,
			m = Math.min,
			g = 9007199254740991,
			v = "Maximum allowed length exceeded";
		f({
			target: "Array",
			proto: !0,
			forced: !d || !p
		}, {
			splice: function(e, t) {
				var n, f, l, u, d, p, b = a(this),
					y = o(b.length),
					_ = r(e, y),
					w = arguments.length;
				if (0 === w ? n = f = 0 : 1 === w ? (n = 0, f = y - _) : (n = w - 2, f = m(h(i(t), 0), y - _)), y + n - f > g) throw TypeError(v);
				for (l = s(b, f), u = 0; u < f; u++) d = _ + u, d in b && c(l, u, b[d]);
				if (l.length = f, n < f) {
					for (u = _; u < y - f; u++) d = u + f, p = u + n, d in b ? b[p] = b[d] : delete b[p];
					for (u = y; u > y - f + n; u--) delete b[u - 1]
				} else if (n > f)
					for (u = y - f; u > _; u--) d = u + f - 1, p = u + n - 1, d in b ? b[p] = b[d] : delete b[p];
				for (u = 0; u < n; u++) b[u + _] = arguments[u + 2];
				return b.length = y - f + n, l
			}
		})
	},
	a4d3: function(e, t, n) {
		"use strict";
		var f = n("23e7"),
			r = n("da84"),
			i = n("d066"),
			o = n("c430"),
			a = n("83ab"),
			s = n("4930"),
			c = n("fdbf"),
			l = n("d039"),
			u = n("5135"),
			d = n("e8b5"),
			p = n("861d"),
			h = n("825a"),
			m = n("7b0b"),
			g = n("fc6a"),
			v = n("c04e"),
			b = n("5c6c"),
			y = n("7c73"),
			_ = n("df75"),
			w = n("241c"),
			x = n("057f"),
			k = n("7418"),
			C = n("06cf"),
			S = n("9bf2"),
			A = n("d1e7"),
			O = n("9112"),
			E = n("6eeb"),
			T = n("5692"),
			j = n("f772"),
			L = n("d012"),
			I = n("90e3"),
			M = n("b622"),
			N = n("e538"),
			P = n("746f"),
			B = n("d44e"),
			$ = n("69f3"),
			z = n("b727").forEach,
			R = j("hidden"),
			D = "Symbol",
			V = "prototype",
			H = M("toPrimitive"),
			F = $.set,
			U = $.getterFor(D),
			q = Object[V],
			W = r.Symbol,
			Q = i("JSON", "stringify"),
			G = C.f,
			Z = S.f,
			Y = x.f,
			J = A.f,
			X = T("symbols"),
			K = T("op-symbols"),
			ee = T("string-to-symbol-registry"),
			te = T("symbol-to-string-registry"),
			ne = T("wks"),
			fe = r.QObject,
			re = !fe || !fe[V] || !fe[V].findChild,
			ie = a && l((function() {
				return 7 != y(Z({}, "a", {
					get: function() {
						return Z(this, "a", {
							value: 7
						}).a
					}
				})).a
			})) ? function(e, t, n) {
				var f = G(q, t);
				f && delete q[t], Z(e, t, n), f && e !== q && Z(q, t, f)
			} : Z,
			oe = function(e, t) {
				var n = X[e] = y(W[V]);
				return F(n, {
					type: D,
					tag: e,
					description: t
				}), a || (n.description = t), n
			},
			ae = c ? function(e) {
				return "symbol" == typeof e
			} : function(e) {
				return Object(e) instanceof W
			},
			se = function(e, t, n) {
				e === q && se(K, t, n), h(e);
				var f = v(t, !0);
				return h(n), u(X, f) ? (n.enumerable ? (u(e, R) && e[R][f] && (e[R][f] = !1), n = y(n, {
					enumerable: b(0, !1)
				})) : (u(e, R) || Z(e, R, b(1, {})), e[R][f] = !0), ie(e, f, n)) : Z(e, f, n)
			},
			ce = function(e, t) {
				h(e);
				var n = g(t),
					f = _(n).concat(he(n));
				return z(f, (function(t) {
					a && !ue.call(n, t) || se(e, t, n[t])
				})), e
			},
			le = function(e, t) {
				return void 0 === t ? y(e) : ce(y(e), t)
			},
			ue = function(e) {
				var t = v(e, !0),
					n = J.call(this, t);
				return !(this === q && u(X, t) && !u(K, t)) && (!(n || !u(this, t) || !u(X, t) || u(this, R) && this[R][t]) || n)
			},
			de = function(e, t) {
				var n = g(e),
					f = v(t, !0);
				if (n !== q || !u(X, f) || u(K, f)) {
					var r = G(n, f);
					return !r || !u(X, f) || u(n, R) && n[R][f] || (r.enumerable = !0), r
				}
			},
			pe = function(e) {
				var t = Y(g(e)),
					n = [];
				return z(t, (function(e) {
					u(X, e) || u(L, e) || n.push(e)
				})), n
			},
			he = function(e) {
				var t = e === q,
					n = Y(t ? K : g(e)),
					f = [];
				return z(n, (function(e) {
					!u(X, e) || t && !u(q, e) || f.push(X[e])
				})), f
			};
		if (s || (W = function() {
				if (this instanceof W) throw TypeError("Symbol is not a constructor");
				var e = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
					t = I(e),
					n = function(e) {
						this === q && n.call(K, e), u(this, R) && u(this[R], t) && (this[R][t] = !1), ie(this, t, b(1, e))
					};
				return a && re && ie(q, t, {
					configurable: !0,
					set: n
				}), oe(t, e)
			}, E(W[V], "toString", (function() {
				return U(this).tag
			})), E(W, "withoutSetter", (function(e) {
				return oe(I(e), e)
			})), A.f = ue, S.f = se, C.f = de, w.f = x.f = pe, k.f = he, N.f = function(e) {
				return oe(M(e), e)
			}, a && (Z(W[V], "description", {
				configurable: !0,
				get: function() {
					return U(this).description
				}
			}), o || E(q, "propertyIsEnumerable", ue, {
				unsafe: !0
			}))), f({
				global: !0,
				wrap: !0,
				forced: !s,
				sham: !s
			}, {
				Symbol: W
			}), z(_(ne), (function(e) {
				P(e)
			})), f({
				target: D,
				stat: !0,
				forced: !s
			}, {
				for: function(e) {
					var t = String(e);
					if (u(ee, t)) return ee[t];
					var n = W(t);
					return ee[t] = n, te[n] = t, n
				},
				keyFor: function(e) {
					if (!ae(e)) throw TypeError(e + " is not a symbol");
					if (u(te, e)) return te[e]
				},
				useSetter: function() {
					re = !0
				},
				useSimple: function() {
					re = !1
				}
			}), f({
				target: "Object",
				stat: !0,
				forced: !s,
				sham: !a
			}, {
				create: le,
				defineProperty: se,
				defineProperties: ce,
				getOwnPropertyDescriptor: de
			}), f({
				target: "Object",
				stat: !0,
				forced: !s
			}, {
				getOwnPropertyNames: pe,
				getOwnPropertySymbols: he
			}), f({
				target: "Object",
				stat: !0,
				forced: l((function() {
					k.f(1)
				}))
			}, {
				getOwnPropertySymbols: function(e) {
					return k.f(m(e))
				}
			}), Q) {
			var me = !s || l((function() {
				var e = W();
				return "[null]" != Q([e]) || "{}" != Q({
					a: e
				}) || "{}" != Q(Object(e))
			}));
			f({
				target: "JSON",
				stat: !0,
				forced: me
			}, {
				stringify: function(e, t, n) {
					var f, r = [e],
						i = 1;
					while (arguments.length > i) r.push(arguments[i++]);
					if (f = t, (p(t) || void 0 !== e) && !ae(e)) return d(t) || (t = function(e, t) {
						if ("function" == typeof f && (t = f.call(this, e, t)), !ae(t)) return t
					}), r[1] = t, Q.apply(null, r)
				}
			})
		}
		W[V][H] || O(W[V], H, W[V].valueOf), B(W, D), L[R] = !0
	},
	a623: function(e, t, n) {
		"use strict";
		var f = n("23e7"),
			r = n("b727").every,
			i = n("a640"),
			o = n("ae40"),
			a = i("every"),
			s = o("every");
		f({
			target: "Array",
			proto: !0,
			forced: !a || !s
		}, {
			every: function(e) {
				return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
			}
		})
	},
	a630: function(e, t, n) {
		var f = n("23e7"),
			r = n("4df4"),
			i = n("1c7e"),
			o = !i((function(e) {
				Array.from(e)
			}));
		f({
			target: "Array",
			stat: !0,
			forced: o
		}, {
			from: r
		})
	},
	a640: function(e, t, n) {
		"use strict";
		var f = n("d039");
		e.exports = function(e, t) {
			var n = [][e];
			return !!n && f((function() {
				n.call(null, t || function() {
					throw 1
				}, 1)
			}))
		}
	},
	a691: function(e, t) {
		var n = Math.ceil,
			f = Math.floor;
		e.exports = function(e) {
			return isNaN(e = +e) ? 0 : (e > 0 ? f : n)(e)
		}
	},
	a79d: function(e, t, n) {
		"use strict";
		var f = n("23e7"),
			r = n("c430"),
			i = n("fea9"),
			o = n("d039"),
			a = n("d066"),
			s = n("4840"),
			c = n("cdf9"),
			l = n("6eeb"),
			u = !!i && o((function() {
				i.prototype["finally"].call({
					then: function() {}
				}, (function() {}))
			}));
		f({
			target: "Promise",
			proto: !0,
			real: !0,
			forced: u
		}, {
			finally: function(e) {
				var t = s(this, a("Promise")),
					n = "function" == typeof e;
				return this.then(n ? function(n) {
					return c(t, e()).then((function() {
						return n
					}))
				} : e, n ? function(n) {
					return c(t, e()).then((function() {
						throw n
					}))
				} : e)
			}
		}), r || "function" != typeof i || i.prototype["finally"] || l(i.prototype, "finally", a("Promise").prototype["finally"])
	},
	a9e3: function(e, t, n) {
		"use strict";
		var f = n("83ab"),
			r = n("da84"),
			i = n("94ca"),
			o = n("6eeb"),
			a = n("5135"),
			s = n("c6b6"),
			c = n("7156"),
			l = n("c04e"),
			u = n("d039"),
			d = n("7c73"),
			p = n("241c").f,
			h = n("06cf").f,
			m = n("9bf2").f,
			g = n("58a8").trim,
			v = "Number",
			b = r[v],
			y = b.prototype,
			_ = s(d(y)) == v,
			w = function(e) {
				var t, n, f, r, i, o, a, s, c = l(e, !1);
				if ("string" == typeof c && c.length > 2)
					if (c = g(c), t = c.charCodeAt(0), 43 === t || 45 === t) {
						if (n = c.charCodeAt(2), 88 === n || 120 === n) return NaN
					} else if (48 === t) {
					switch (c.charCodeAt(1)) {
						case 66:
						case 98:
							f = 2, r = 49;
							break;
						case 79:
						case 111:
							f = 8, r = 55;
							break;
						default:
							return +c
					}
					for (i = c.slice(2), o = i.length, a = 0; a < o; a++)
						if (s = i.charCodeAt(a), s < 48 || s > r) return NaN;
					return parseInt(i, f)
				}
				return +c
			};
		if (i(v, !b(" 0o1") || !b("0b1") || b("+0x1"))) {
			for (var x, k = function(e) {
					var t = arguments.length < 1 ? 0 : e,
						n = this;
					return n instanceof k && (_ ? u((function() {
						y.valueOf.call(n)
					})) : s(n) != v) ? c(new b(w(t)), n, k) : w(t)
				}, C = f ? p(b) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), S = 0; C.length > S; S++) a(b, x = C[S]) && !a(k, x) && m(k, x, h(b, x));
			k.prototype = y, y.constructor = k, o(r, v, k)
		}
	},
	aaf8: function(e, t, n) {
		e.exports = n.p + "img/close.6459849c.svg"
	},
	ab13: function(e, t, n) {
		var f = n("b622"),
			r = f("match");
		e.exports = function(e) {
			var t = /./;
			try {
				"/./" [e](t)
			} catch (n) {
				try {
					return t[r] = !1, "/./" [e](t)
				} catch (f) {}
			}
			return !1
		}
	},
	abac: function(e, t, n) {
		"use strict";
		var f = n("c101"),
			r = n.n(f);
		r.a
	},
	ac1f: function(e, t, n) {
		"use strict";
		var f = n("23e7"),
			r = n("9263");
		f({
			target: "RegExp",
			proto: !0,
			forced: /./.exec !== r
		}, {
			exec: r
		})
	},
	ad6d: function(e, t, n) {
		"use strict";
		var f = n("825a");
		e.exports = function() {
			var e = f(this),
				t = "";
			return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
		}
	},
	ae40: function(e, t, n) {
		var f = n("83ab"),
			r = n("d039"),
			i = n("5135"),
			o = Object.defineProperty,
			a = {},
			s = function(e) {
				throw e
			};
		e.exports = function(e, t) {
			if (i(a, e)) return a[e];
			t || (t = {});
			var n = [][e],
				c = !!i(t, "ACCESSORS") && t.ACCESSORS,
				l = i(t, 0) ? t[0] : s,
				u = i(t, 1) ? t[1] : void 0;
			return a[e] = !!n && !r((function() {
				if (c && !f) return !0;
				var e = {
					length: -1
				};
				c ? o(e, 1, {
					enumerable: !0,
					get: s
				}) : e[1] = 1, n.call(e, l, u)
			}))
		}
	},
	ae5d: function(e, t, n) {
		"use strict";
		var f = n("48da"),
			r = n.n(f);
		r.a
	},
	ae93: function(e, t, n) {
		"use strict";
		var f, r, i, o = n("e163"),
			a = n("9112"),
			s = n("5135"),
			c = n("b622"),
			l = n("c430"),
			u = c("iterator"),
			d = !1,
			p = function() {
				return this
			};
		[].keys && (i = [].keys(), "next" in i ? (r = o(o(i)), r !== Object.prototype && (f = r)) : d = !0), void 0 == f && (f = {}), l || s(f, u) || a(f, u, p), e.exports = {
			IteratorPrototype: f,
			BUGGY_SAFARI_ITERATORS: d
		}
	},
	af03: function(e, t, n) {
		var f = n("d039");
		e.exports = function(e) {
			return f((function() {
				var t = "" [e]('"');
				return t !== t.toLowerCase() || t.split('"').length > 3
			}))
		}
	},
	b041: function(e, t, n) {
		"use strict";
		var f = n("00ee"),
			r = n("f5df");
		e.exports = f ? {}.toString : function() {
			return "[object " + r(this) + "]"
		}
	},
	b0c0: function(e, t, n) {
		var f = n("83ab"),
			r = n("9bf2").f,
			i = Function.prototype,
			o = i.toString,
			a = /^\s*function ([^ (]*)/,
			s = "name";
		f && !(s in i) && r(i, s, {
			configurable: !0,
			get: function() {
				try {
					return o.call(this).match(a)[1]
				} catch (e) {
					return ""
				}
			}
		})
	},
	b45c: function(e, t, n) {
		e.exports = n.p + "img/logo-no-bg.a26ebdf9.svg"
	},
	b50d: function(e, t, n) {
		"use strict";
		var f = n("c532"),
			r = n("467f"),
			i = n("30b5"),
			o = n("c345"),
			a = n("3934"),
			s = n("2d83");
		e.exports = function(e) {
			return new Promise((function(t, c) {
				var l = e.data,
					u = e.headers;
				f.isFormData(l) && delete u["Content-Type"];
				var d = new XMLHttpRequest;
				if (e.auth) {
					var p = e.auth.username || "",
						h = e.auth.password || "";
					u.Authorization = "Basic " + btoa(p + ":" + h)
				}
				if (d.open(e.method.toUpperCase(), i(e.url, e.params, e.paramsSerializer), !0), d.timeout = e.timeout, d.onreadystatechange = function() {
						if (d && 4 === d.readyState && (0 !== d.status || d.responseURL && 0 === d.responseURL.indexOf("file:"))) {
							var n = "getAllResponseHeaders" in d ? o(d.getAllResponseHeaders()) : null,
								f = e.responseType && "text" !== e.responseType ? d.response : d.responseText,
								i = {
									data: f,
									status: d.status,
									statusText: d.statusText,
									headers: n,
									config: e,
									request: d
								};
							r(t, c, i), d = null
						}
					}, d.onerror = function() {
						c(s("Network Error", e, null, d)), d = null
					}, d.ontimeout = function() {
						c(s("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", d)), d = null
					}, f.isStandardBrowserEnv()) {
					var m = n("7aac"),
						g = (e.withCredentials || a(e.url)) && e.xsrfCookieName ? m.read(e.xsrfCookieName) : void 0;
					g && (u[e.xsrfHeaderName] = g)
				}
				if ("setRequestHeader" in d && f.forEach(u, (function(e, t) {
						"undefined" === typeof l && "content-type" === t.toLowerCase() ? delete u[t] : d.setRequestHeader(t, e)
					})), e.withCredentials && (d.withCredentials = !0), e.responseType) try {
					d.responseType = e.responseType
				} catch (v) {
					if ("json" !== e.responseType) throw v
				}
				"function" === typeof e.onDownloadProgress && d.addEventListener("progress", e.onDownloadProgress), "function" === typeof e.onUploadProgress && d.upload && d.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then((function(e) {
					d && (d.abort(), c(e), d = null)
				})), void 0 === l && (l = null), d.send(l)
			}))
		}
	},
	b575: function(e, t, n) {
		var f, r, i, o, a, s, c, l, u = n("da84"),
			d = n("06cf").f,
			p = n("c6b6"),
			h = n("2cf4").set,
			m = n("1cdc"),
			g = u.MutationObserver || u.WebKitMutationObserver,
			v = u.process,
			b = u.Promise,
			y = "process" == p(v),
			_ = d(u, "queueMicrotask"),
			w = _ && _.value;
		w || (f = function() {
			var e, t;
			y && (e = v.domain) && e.exit();
			while (r) {
				t = r.fn, r = r.next;
				try {
					t()
				} catch (n) {
					throw r ? o() : i = void 0, n
				}
			}
			i = void 0, e && e.enter()
		}, y ? o = function() {
			v.nextTick(f)
		} : g && !m ? (a = !0, s = document.createTextNode(""), new g(f).observe(s, {
			characterData: !0
		}), o = function() {
			s.data = a = !a
		}) : b && b.resolve ? (c = b.resolve(void 0), l = c.then, o = function() {
			l.call(c, f)
		}) : o = function() {
			h.call(u, f)
		}), e.exports = w || function(e) {
			var t = {
				fn: e,
				next: void 0
			};
			i && (i.next = t), r || (r = t, o()), i = t
		}
	},
	b622: function(e, t, n) {
		var f = n("da84"),
			r = n("5692"),
			i = n("5135"),
			o = n("90e3"),
			a = n("4930"),
			s = n("fdbf"),
			c = r("wks"),
			l = f.Symbol,
			u = s ? l : l && l.withoutSetter || o;
		e.exports = function(e) {
			return i(c, e) || (a && i(l, e) ? c[e] = l[e] : c[e] = u("Symbol." + e)), c[e]
		}
	},
	b64b: function(e, t, n) {
		var f = n("23e7"),
			r = n("7b0b"),
			i = n("df75"),
			o = n("d039"),
			a = o((function() {
				i(1)
			}));
		f({
			target: "Object",
			stat: !0,
			forced: a
		}, {
			keys: function(e) {
				return i(r(e))
			}
		})
	},
	b680: function(e, t, n) {
		"use strict";
		var f = n("23e7"),
			r = n("a691"),
			i = n("408a"),
			o = n("1148"),
			a = n("d039"),
			s = 1..toFixed,
			c = Math.floor,
			l = function(e, t, n) {
				return 0 === t ? n : t % 2 === 1 ? l(e, t - 1, n * e) : l(e * e, t / 2, n)
			},
			u = function(e) {
				var t = 0,
					n = e;
				while (n >= 4096) t += 12, n /= 4096;
				while (n >= 2) t += 1, n /= 2;
				return t
			},
			d = s && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !a((function() {
				s.call({})
			}));
		f({
			target: "Number",
			proto: !0,
			forced: d
		}, {
			toFixed: function(e) {
				var t, n, f, a, s = i(this),
					d = r(e),
					p = [0, 0, 0, 0, 0, 0],
					h = "",
					m = "0",
					g = function(e, t) {
						var n = -1,
							f = t;
						while (++n < 6) f += e * p[n], p[n] = f % 1e7, f = c(f / 1e7)
					},
					v = function(e) {
						var t = 6,
							n = 0;
						while (--t >= 0) n += p[t], p[t] = c(n / e), n = n % e * 1e7
					},
					b = function() {
						var e = 6,
							t = "";
						while (--e >= 0)
							if ("" !== t || 0 === e || 0 !== p[e]) {
								var n = String(p[e]);
								t = "" === t ? n : t + o.call("0", 7 - n.length) + n
							} return t
					};
				if (d < 0 || d > 20) throw RangeError("Incorrect fraction digits");
				if (s != s) return "NaN";
				if (s <= -1e21 || s >= 1e21) return String(s);
				if (s < 0 && (h = "-", s = -s), s > 1e-21)
					if (t = u(s * l(2, 69, 1)) - 69, n = t < 0 ? s * l(2, -t, 1) : s / l(2, t, 1), n *= 4503599627370496, t = 52 - t, t > 0) {
						g(0, n), f = d;
						while (f >= 7) g(1e7, 0), f -= 7;
						g(l(10, f, 1), 0), f = t - 1;
						while (f >= 23) v(1 << 23), f -= 23;
						v(1 << f), g(1, 1), v(2), m = b()
					} else g(0, n), g(1 << -t, 0), m = b() + o.call("0", d);
				return d > 0 ? (a = m.length, m = h + (a <= d ? "0." + o.call("0", d - a) + m : m.slice(0, a - d) + "." + m.slice(a - d))) : m = h + m, m
			}
		})
	},
	b727: function(e, t, n) {
		var f = n("0366"),
			r = n("44ad"),
			i = n("7b0b"),
			o = n("50c4"),
			a = n("65f0"),
			s = [].push,
			c = function(e) {
				var t = 1 == e,
					n = 2 == e,
					c = 3 == e,
					l = 4 == e,
					u = 6 == e,
					d = 5 == e || u;
				return function(p, h, m, g) {
					for (var v, b, y = i(p), _ = r(y), w = f(h, m, 3), x = o(_.length), k = 0, C = g || a, S = t ? C(p, x) : n ? C(p, 0) : void 0; x > k; k++)
						if ((d || k in _) && (v = _[k], b = w(v, k, y), e))
							if (t) S[k] = b;
							else if (b) switch (e) {
						case 3:
							return !0;
						case 5:
							return v;
						case 6:
							return k;
						case 2:
							s.call(S, v)
					} else if (l) return !1;
					return u ? -1 : c || l ? l : S
				}
			};
		e.exports = {
			forEach: c(0),
			map: c(1),
			filter: c(2),
			some: c(3),
			every: c(4),
			find: c(5),
			findIndex: c(6)
		}
	},
	bb2f: function(e, t, n) {
		var f = n("d039");
		e.exports = !f((function() {
			return Object.isExtensible(Object.preventExtensions({}))
		}))
	},
	bc3a: function(e, t, n) {
		e.exports = n("cee4")
	},
	c04e: function(e, t, n) {
		var f = n("861d");
		e.exports = function(e, t) {
			if (!f(e)) return e;
			var n, r;
			if (t && "function" == typeof(n = e.toString) && !f(r = n.call(e))) return r;
			if ("function" == typeof(n = e.valueOf) && !f(r = n.call(e))) return r;
			if (!t && "function" == typeof(n = e.toString) && !f(r = n.call(e))) return r;
			throw TypeError("Can't convert object to primitive value")
		}
	},
	c101: function(e, t, n) {},
	c143: function(e, t, n) {
		"use strict";
		var f = n("9c14"),
			r = n.n(f);
		r.a
	},
	c345: function(e, t, n) {
		"use strict";
		var f = n("c532"),
			r = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
		e.exports = function(e) {
			var t, n, i, o = {};
			return e ? (f.forEach(e.split("\n"), (function(e) {
				if (i = e.indexOf(":"), t = f.trim(e.substr(0, i)).toLowerCase(), n = f.trim(e.substr(i + 1)), t) {
					if (o[t] && r.indexOf(t) >= 0) return;
					o[t] = "set-cookie" === t ? (o[t] ? o[t] : []).concat([n]) : o[t] ? o[t] + ", " + n : n
				}
			})), o) : o
		}
	},
	c401: function(e, t, n) {
		"use strict";
		var f = n("c532");
		e.exports = function(e, t, n) {
			return f.forEach(n, (function(n) {
				e = n(e, t)
			})), e
		}
	},
	c430: function(e, t) {
		e.exports = !1
	},
	c532: function(e, t, n) {
		"use strict";
		var f = n("1d2b"),
			r = n("c7ce"),
			i = Object.prototype.toString;

		function o(e) {
			return "[object Array]" === i.call(e)
		}

		function a(e) {
			return "[object ArrayBuffer]" === i.call(e)
		}

		function s(e) {
			return "undefined" !== typeof FormData && e instanceof FormData
		}

		function c(e) {
			var t;
			return t = "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer, t
		}

		function l(e) {
			return "string" === typeof e
		}

		function u(e) {
			return "number" === typeof e
		}

		function d(e) {
			return "undefined" === typeof e
		}

		function p(e) {
			return null !== e && "object" === typeof e
		}

		function h(e) {
			return "[object Date]" === i.call(e)
		}

		function m(e) {
			return "[object File]" === i.call(e)
		}

		function g(e) {
			return "[object Blob]" === i.call(e)
		}

		function v(e) {
			return "[object Function]" === i.call(e)
		}

		function b(e) {
			return p(e) && v(e.pipe)
		}

		function y(e) {
			return "undefined" !== typeof URLSearchParams && e instanceof URLSearchParams
		}

		function _(e) {
			return e.replace(/^\s*/, "").replace(/\s*$/, "")
		}

		function w() {
			return ("undefined" === typeof navigator || "ReactNative" !== navigator.product) && ("undefined" !== typeof window && "undefined" !== typeof document)
		}

		function x(e, t) {
			if (null !== e && "undefined" !== typeof e)
				if ("object" !== typeof e && (e = [e]), o(e))
					for (var n = 0, f = e.length; n < f; n++) t.call(null, e[n], n, e);
				else
					for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.call(null, e[r], r, e)
		}

		function k() {
			var e = {};

			function t(t, n) {
				"object" === typeof e[n] && "object" === typeof t ? e[n] = k(e[n], t) : e[n] = t
			}
			for (var n = 0, f = arguments.length; n < f; n++) x(arguments[n], t);
			return e
		}

		function C(e, t, n) {
			return x(t, (function(t, r) {
				e[r] = n && "function" === typeof t ? f(t, n) : t
			})), e
		}
		e.exports = {
			isArray: o,
			isArrayBuffer: a,
			isBuffer: r,
			isFormData: s,
			isArrayBufferView: c,
			isString: l,
			isNumber: u,
			isObject: p,
			isUndefined: d,
			isDate: h,
			isFile: m,
			isBlob: g,
			isFunction: v,
			isStream: b,
			isURLSearchParams: y,
			isStandardBrowserEnv: w,
			forEach: x,
			merge: k,
			extend: C,
			trim: _
		}
	},
	c658: function(e, t, n) {
		"use strict";
		var f = n("cdbf"),
			r = n.n(f);
		r.a
	},
	c6b6: function(e, t) {
		var n = {}.toString;
		e.exports = function(e) {
			return n.call(e).slice(8, -1)
		}
	},
	c6cd: function(e, t, n) {
		var f = n("da84"),
			r = n("ce4e"),
			i = "__core-js_shared__",
			o = f[i] || r(i, {});
		e.exports = o
	},
	c740: function(e, t, n) {
		"use strict";
		var f = n("23e7"),
			r = n("b727").findIndex,
			i = n("44d2"),
			o = n("ae40"),
			a = "findIndex",
			s = !0,
			c = o(a);
		a in [] && Array(1)[a]((function() {
			s = !1
		})), f({
			target: "Array",
			proto: !0,
			forced: s || !c
		}, {
			findIndex: function(e) {
				return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
			}
		}), i(a)
	},
	c7cd: function(e, t, n) {
		"use strict";
		var f = n("23e7"),
			r = n("857a"),
			i = n("af03");
		f({
			target: "String",
			proto: !0,
			forced: i("fixed")
		}, {
			fixed: function() {
				return r(this, "tt", "", "")
			}
		})
	},
	c7ce: function(e, t) {
		/*!
		 * Determine if an object is a Buffer
		 *
		 * @author   Feross Aboukhadijeh <https://feross.org>
		 * @license  MIT
		 */
		e.exports = function(e) {
			return null != e && null != e.constructor && "function" === typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
		}
	},
	c8af: function(e, t, n) {
		"use strict";
		var f = n("c532");
		e.exports = function(e, t) {
			f.forEach(e, (function(n, f) {
				f !== t && f.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[f])
			}))
		}
	},
	c8ba: function(e, t) {
		var n;
		n = function() {
			return this
		}();
		try {
			n = n || new Function("return this")()
		} catch (f) {
			"object" === typeof window && (n = window)
		}
		e.exports = n
	},
	c8d2: function(e, t, n) {
		var f = n("d039"),
			r = n("5899"),
			i = "​᠎";
		e.exports = function(e) {
			return f((function() {
				return !!r[e]() || i[e]() != i || r[e].name !== e
			}))
		}
	},
	c96a: function(e, t, n) {
		"use strict";
		var f = n("23e7"),
			r = n("857a"),
			i = n("af03");
		f({
			target: "String",
			proto: !0,
			forced: i("small")
		}, {
			small: function() {
				return r(this, "small", "", "")
			}
		})
	},
	c975: function(e, t, n) {
		"use strict";
		var f = n("23e7"),
			r = n("4d64").indexOf,
			i = n("a640"),
			o = n("ae40"),
			a = [].indexOf,
			s = !!a && 1 / [1].indexOf(1, -0) < 0,
			c = i("indexOf"),
			l = o("indexOf", {
				ACCESSORS: !0,
				1: 0
			});
		f({
			target: "Array",
			proto: !0,
			forced: s || !c || !l
		}, {
			indexOf: function(e) {
				return s ? a.apply(this, arguments) || 0 : r(this, e, arguments.length > 1 ? arguments[1] : void 0)
			}
		})
	},
	ca84: function(e, t, n) {
		var f = n("5135"),
			r = n("fc6a"),
			i = n("4d64").indexOf,
			o = n("d012");
		e.exports = function(e, t) {
			var n, a = r(e),
				s = 0,
				c = [];
			for (n in a) !f(o, n) && f(a, n) && c.push(n);
			while (t.length > s) f(a, n = t[s++]) && (~i(c, n) || c.push(n));
			return c
		}
	},
	caad: function(e, t, n) {
		"use strict";
		var f = n("23e7"),
			r = n("4d64").includes,
			i = n("44d2"),
			o = n("ae40"),
			a = o("indexOf", {
				ACCESSORS: !0,
				1: 0
			});
		f({
			target: "Array",
			proto: !0,
			forced: !a
		}, {
			includes: function(e) {
				return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
			}
		}), i("includes")
	},
	cc12: function(e, t, n) {
		var f = n("da84"),
			r = n("861d"),
			i = f.document,
			o = r(i) && r(i.createElement);
		e.exports = function(e) {
			return o ? i.createElement(e) : {}
		}
	},
	cca6: function(e, t, n) {
		var f = n("23e7"),
			r = n("60da");
		f({
			target: "Object",
			stat: !0,
			forced: Object.assign !== r
		}, {
			assign: r
		})
	},
	cdbf: function(e, t, n) {},
	cdf9: function(e, t, n) {
		var f = n("825a"),
			r = n("861d"),
			i = n("f069");
		e.exports = function(e, t) {
			if (f(e), r(t) && t.constructor === e) return t;
			var n = i.f(e),
				o = n.resolve;
			return o(t), n.promise
		}
	},
	ce2d: function(e, t, n) {
		e.exports = n.p + "img/chat-icon.e0d2b748.svg"
	},
	ce4e: function(e, t, n) {
		var f = n("da84"),
			r = n("9112");
		e.exports = function(e, t) {
			try {
				r(f, e, t)
			} catch (n) {
				f[e] = t
			}
			return t
		}
	},
	cee4: function(e, t, n) {
		"use strict";
		var f = n("c532"),
			r = n("1d2b"),
			i = n("0a06"),
			o = n("2444");

		function a(e) {
			var t = new i(e),
				n = r(i.prototype.request, t);
			return f.extend(n, i.prototype, t), f.extend(n, t), n
		}
		var s = a(o);
		s.Axios = i, s.create = function(e) {
			return a(f.merge(o, e))
		}, s.Cancel = n("7a77"), s.CancelToken = n("8df4"), s.isCancel = n("2e67"), s.all = function(e) {
			return Promise.all(e)
		}, s.spread = n("0df6"), e.exports = s, e.exports.default = s
	},
	d012: function(e, t) {
		e.exports = {}
	},
	d039: function(e, t) {
		e.exports = function(e) {
			try {
				return !!e()
			} catch (t) {
				return !0
			}
		}
	},
	d066: function(e, t, n) {
		var f = n("428f"),
			r = n("da84"),
			i = function(e) {
				return "function" == typeof e ? e : void 0
			};
		e.exports = function(e, t) {
			return arguments.length < 2 ? i(f[e]) || i(r[e]) : f[e] && f[e][t] || r[e] && r[e][t]
		}
	},
	d1e7: function(e, t, n) {
		"use strict";
		var f = {}.propertyIsEnumerable,
			r = Object.getOwnPropertyDescriptor,
			i = r && !f.call({
				1: 2
			}, 1);
		t.f = i ? function(e) {
			var t = r(this, e);
			return !!t && t.enumerable
		} : f
	},
	d28b: function(e, t, n) {
		var f = n("746f");
		f("iterator")
	},
	d2bb: function(e, t, n) {
		var f = n("825a"),
			r = n("3bbe");
		e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
			var e, t = !1,
				n = {};
			try {
				e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set, e.call(n, []), t = n instanceof Array
			} catch (i) {}
			return function(n, i) {
				return f(n), r(i), t ? e.call(n, i) : n.__proto__ = i, n
			}
		}() : void 0)
	},
	d3b7: function(e, t, n) {
		var f = n("00ee"),
			r = n("6eeb"),
			i = n("b041");
		f || r(Object.prototype, "toString", i, {
			unsafe: !0
		})
	},
	d44e: function(e, t, n) {
		var f = n("9bf2").f,
			r = n("5135"),
			i = n("b622"),
			o = i("toStringTag");
		e.exports = function(e, t, n) {
			e && !r(e = n ? e : e.prototype, o) && f(e, o, {
				configurable: !0,
				value: t
			})
		}
	},
	d58f: function(e, t, n) {
		var f = n("1c0b"),
			r = n("7b0b"),
			i = n("44ad"),
			o = n("50c4"),
			a = function(e) {
				return function(t, n, a, s) {
					f(n);
					var c = r(t),
						l = i(c),
						u = o(c.length),
						d = e ? u - 1 : 0,
						p = e ? -1 : 1;
					if (a < 2)
						while (1) {
							if (d in l) {
								s = l[d], d += p;
								break
							}
							if (d += p, e ? d < 0 : u <= d) throw TypeError("Reduce of empty array with no initial value")
						}
					for (; e ? d >= 0 : u > d; d += p) d in l && (s = n(s, l[d], d, c));
					return s
				}
			};
		e.exports = {
			left: a(!1),
			right: a(!0)
		}
	},
	d6e1: function(e, t) {
		e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAKVQTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////uP3jVQAAADd0Uk5TAE9lCAXd9XA4y/9zDQJG7HYB8Hc3yHoPQ8fuezMSoYPrEcEugj0tqb6G+Lw5ifHcKk3SIAx/MjRpS8YAAADsSURBVHic7dDJDoIwEIDhQURwQNGiIBVkUQH3BfX9H00MEvHW9qj9L3RIvkxTAJlMJvu1lI7aHtWOwm67Wk9vz3pP67Jro4+m1QyWiX2D3cJgqNmjt7ZGtjYccGAYK8R26qNjE2XMY6smU3Q9AM/F6YSTVrtnPp173pz6M969Lx1Q6rqUBgK2KvAR/UCIAoQLxEUoiCMSxyQSokmE6XKZYpQI2BVJ1wDrlKz4dXXn7PXN+G8e5lhk9TErMOd6tXCz3e2bYb/bbnj04Xg6f6bz6Xhgtxe8lu25vOKFGd/uj+8fj/uNfbVMJpP9QU/STxAzeUFqVwAAAABJRU5ErkJggg=="
	},
	d784: function(e, t, n) {
		"use strict";
		n("ac1f");
		var f = n("6eeb"),
			r = n("d039"),
			i = n("b622"),
			o = n("9263"),
			a = n("9112"),
			s = i("species"),
			c = !r((function() {
				var e = /./;
				return e.exec = function() {
					var e = [];
					return e.groups = {
						a: "7"
					}, e
				}, "7" !== "".replace(e, "$<a>")
			})),
			l = function() {
				return "$0" === "a".replace(/./, "$0")
			}(),
			u = i("replace"),
			d = function() {
				return !!/./ [u] && "" === /./ [u]("a", "$0")
			}(),
			p = !r((function() {
				var e = /(?:)/,
					t = e.exec;
				e.exec = function() {
					return t.apply(this, arguments)
				};
				var n = "ab".split(e);
				return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
			}));
		e.exports = function(e, t, n, u) {
			var h = i(e),
				m = !r((function() {
					var t = {};
					return t[h] = function() {
						return 7
					}, 7 != "" [e](t)
				})),
				g = m && !r((function() {
					var t = !1,
						n = /a/;
					return "split" === e && (n = {}, n.constructor = {}, n.constructor[s] = function() {
						return n
					}, n.flags = "", n[h] = /./ [h]), n.exec = function() {
						return t = !0, null
					}, n[h](""), !t
				}));
			if (!m || !g || "replace" === e && (!c || !l || d) || "split" === e && !p) {
				var v = /./ [h],
					b = n(h, "" [e], (function(e, t, n, f, r) {
						return t.exec === o ? m && !r ? {
							done: !0,
							value: v.call(t, n, f)
						} : {
							done: !0,
							value: e.call(n, t, f)
						} : {
							done: !1
						}
					}), {
						REPLACE_KEEPS_$0: l,
						REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: d
					}),
					y = b[0],
					_ = b[1];
				f(String.prototype, e, y), f(RegExp.prototype, h, 2 == t ? function(e, t) {
					return _.call(e, this, t)
				} : function(e) {
					return _.call(e, this)
				})
			}
			u && a(RegExp.prototype[h], "sham", !0)
		}
	},
	d81d: function(e, t, n) {
		"use strict";
		var f = n("23e7"),
			r = n("b727").map,
			i = n("1dde"),
			o = n("ae40"),
			a = i("map"),
			s = o("map");
		f({
			target: "Array",
			proto: !0,
			forced: !a || !s
		}, {
			map: function(e) {
				return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
			}
		})
	},
	d925: function(e, t, n) {
		"use strict";
		e.exports = function(e) {
			return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
		}
	},
	da84: function(e, t, n) {
		(function(t) {
			var n = function(e) {
				return e && e.Math == Math && e
			};
			e.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof t && t) || Function("return this")()
		}).call(this, n("c8ba"))
	},
	daaf: function(e, t, n) {},
	db42: function(e, t, n) {},
	dbb4: function(e, t, n) {
		var f = n("23e7"),
			r = n("83ab"),
			i = n("56ef"),
			o = n("fc6a"),
			a = n("06cf"),
			s = n("8418");
		f({
			target: "Object",
			stat: !0,
			sham: !r
		}, {
			getOwnPropertyDescriptors: function(e) {
				var t, n, f = o(e),
					r = a.f,
					c = i(f),
					l = {},
					u = 0;
				while (c.length > u) n = r(f, t = c[u++]), void 0 !== n && s(l, t, n);
				return l
			}
		})
	},
	dca8: function(e, t, n) {
		var f = n("23e7"),
			r = n("bb2f"),
			i = n("d039"),
			o = n("861d"),
			a = n("f183").onFreeze,
			s = Object.freeze,
			c = i((function() {
				s(1)
			}));
		f({
			target: "Object",
			stat: !0,
			forced: c,
			sham: !r
		}, {
			freeze: function(e) {
				return s && o(e) ? s(a(e)) : e
			}
		})
	},
	ddb0: function(e, t, n) {
		var f = n("da84"),
			r = n("fdbc"),
			i = n("e260"),
			o = n("9112"),
			a = n("b622"),
			s = a("iterator"),
			c = a("toStringTag"),
			l = i.values;
		for (var u in r) {
			var d = f[u],
				p = d && d.prototype;
			if (p) {
				if (p[s] !== l) try {
					o(p, s, l)
				} catch (m) {
					p[s] = l
				}
				if (p[c] || o(p, c, u), r[u])
					for (var h in i)
						if (p[h] !== i[h]) try {
							o(p, h, i[h])
						} catch (m) {
							p[h] = i[h]
						}
			}
		}
	},
	df75: function(e, t, n) {
		var f = n("ca84"),
			r = n("7839");
		e.exports = Object.keys || function(e) {
			return f(e, r)
		}
	},
	df7c: function(e, t, n) {
		(function(e) {
			function n(e, t) {
				for (var n = 0, f = e.length - 1; f >= 0; f--) {
					var r = e[f];
					"." === r ? e.splice(f, 1) : ".." === r ? (e.splice(f, 1), n++) : n && (e.splice(f, 1), n--)
				}
				if (t)
					for (; n--; n) e.unshift("..");
				return e
			}

			function f(e) {
				"string" !== typeof e && (e += "");
				var t, n = 0,
					f = -1,
					r = !0;
				for (t = e.length - 1; t >= 0; --t)
					if (47 === e.charCodeAt(t)) {
						if (!r) {
							n = t + 1;
							break
						}
					} else - 1 === f && (r = !1, f = t + 1);
				return -1 === f ? "" : e.slice(n, f)
			}

			function r(e, t) {
				if (e.filter) return e.filter(t);
				for (var n = [], f = 0; f < e.length; f++) t(e[f], f, e) && n.push(e[f]);
				return n
			}
			t.resolve = function() {
				for (var t = "", f = !1, i = arguments.length - 1; i >= -1 && !f; i--) {
					var o = i >= 0 ? arguments[i] : e.cwd();
					if ("string" !== typeof o) throw new TypeError("Arguments to path.resolve must be strings");
					o && (t = o + "/" + t, f = "/" === o.charAt(0))
				}
				return t = n(r(t.split("/"), (function(e) {
					return !!e
				})), !f).join("/"), (f ? "/" : "") + t || "."
			}, t.normalize = function(e) {
				var f = t.isAbsolute(e),
					o = "/" === i(e, -1);
				return e = n(r(e.split("/"), (function(e) {
					return !!e
				})), !f).join("/"), e || f || (e = "."), e && o && (e += "/"), (f ? "/" : "") + e
			}, t.isAbsolute = function(e) {
				return "/" === e.charAt(0)
			}, t.join = function() {
				var e = Array.prototype.slice.call(arguments, 0);
				return t.normalize(r(e, (function(e, t) {
					if ("string" !== typeof e) throw new TypeError("Arguments to path.join must be strings");
					return e
				})).join("/"))
			}, t.relative = function(e, n) {
				function f(e) {
					for (var t = 0; t < e.length; t++)
						if ("" !== e[t]) break;
					for (var n = e.length - 1; n >= 0; n--)
						if ("" !== e[n]) break;
					return t > n ? [] : e.slice(t, n - t + 1)
				}
				e = t.resolve(e).substr(1), n = t.resolve(n).substr(1);
				for (var r = f(e.split("/")), i = f(n.split("/")), o = Math.min(r.length, i.length), a = o, s = 0; s < o; s++)
					if (r[s] !== i[s]) {
						a = s;
						break
					} var c = [];
				for (s = a; s < r.length; s++) c.push("..");
				return c = c.concat(i.slice(a)), c.join("/")
			}, t.sep = "/", t.delimiter = ":", t.dirname = function(e) {
				if ("string" !== typeof e && (e += ""), 0 === e.length) return ".";
				for (var t = e.charCodeAt(0), n = 47 === t, f = -1, r = !0, i = e.length - 1; i >= 1; --i)
					if (t = e.charCodeAt(i), 47 === t) {
						if (!r) {
							f = i;
							break
						}
					} else r = !1;
				return -1 === f ? n ? "/" : "." : n && 1 === f ? "/" : e.slice(0, f)
			}, t.basename = function(e, t) {
				var n = f(e);
				return t && n.substr(-1 * t.length) === t && (n = n.substr(0, n.length - t.length)), n
			}, t.extname = function(e) {
				"string" !== typeof e && (e += "");
				for (var t = -1, n = 0, f = -1, r = !0, i = 0, o = e.length - 1; o >= 0; --o) {
					var a = e.charCodeAt(o);
					if (47 !== a) - 1 === f && (r = !1, f = o + 1), 46 === a ? -1 === t ? t = o : 1 !== i && (i = 1) : -1 !== t && (i = -1);
					else if (!r) {
						n = o + 1;
						break
					}
				}
				return -1 === t || -1 === f || 0 === i || 1 === i && t === f - 1 && t === n + 1 ? "" : e.slice(t, f)
			};
			var i = "b" === "ab".substr(-1) ? function(e, t, n) {
				return e.substr(t, n)
			} : function(e, t, n) {
				return t < 0 && (t = e.length + t), e.substr(t, n)
			}
		}).call(this, n("4362"))
	},
	df86: function(e, t, n) {},
	e01a: function(e, t, n) {
		"use strict";
		var f = n("23e7"),
			r = n("83ab"),
			i = n("da84"),
			o = n("5135"),
			a = n("861d"),
			s = n("9bf2").f,
			c = n("e893"),
			l = i.Symbol;
		if (r && "function" == typeof l && (!("description" in l.prototype) || void 0 !== l().description)) {
			var u = {},
				d = function() {
					var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
						t = this instanceof d ? new l(e) : void 0 === e ? l() : l(e);
					return "" === e && (u[t] = !0), t
				};
			c(d, l);
			var p = d.prototype = l.prototype;
			p.constructor = d;
			var h = p.toString,
				m = "Symbol(test)" == String(l("test")),
				g = /^Symbol\((.*)\)[^)]+$/;
			s(p, "description", {
				configurable: !0,
				get: function() {
					var e = a(this) ? this.valueOf() : this,
						t = h.call(e);
					if (o(u, e)) return "";
					var n = m ? t.slice(7, -1) : t.replace(g, "$1");
					return "" === n ? void 0 : n
				}
			}), f({
				global: !0,
				forced: !0
			}, {
				Symbol: d
			})
		}
	},
	e08c: function(e, t, n) {
		"use strict";
		var f = n("0c43"),
			r = n.n(f);
		r.a
	},
	e163: function(e, t, n) {
		var f = n("5135"),
			r = n("7b0b"),
			i = n("f772"),
			o = n("e177"),
			a = i("IE_PROTO"),
			s = Object.prototype;
		e.exports = o ? Object.getPrototypeOf : function(e) {
			return e = r(e), f(e, a) ? e[a] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? s : null
		}
	},
	e177: function(e, t, n) {
		var f = n("d039");
		e.exports = !f((function() {
			function e() {}
			return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
		}))
	},
	e260: function(e, t, n) {
		"use strict";
		var f = n("fc6a"),
			r = n("44d2"),
			i = n("3f8c"),
			o = n("69f3"),
			a = n("7dd0"),
			s = "Array Iterator",
			c = o.set,
			l = o.getterFor(s);
		e.exports = a(Array, "Array", (function(e, t) {
			c(this, {
				type: s,
				target: f(e),
				index: 0,
				kind: t
			})
		}), (function() {
			var e = l(this),
				t = e.target,
				n = e.kind,
				f = e.index++;
			return !t || f >= t.length ? (e.target = void 0, {
				value: void 0,
				done: !0
			}) : "keys" == n ? {
				value: f,
				done: !1
			} : "values" == n ? {
				value: t[f],
				done: !1
			} : {
				value: [f, t[f]],
				done: !1
			}
		}), "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
	},
	e2cc: function(e, t, n) {
		var f = n("6eeb");
		e.exports = function(e, t, n) {
			for (var r in t) f(e, r, t[r], n);
			return e
		}
	},
	e361: function(e, t, n) {},
	e37d: function(e, t, n) {
		"use strict";
		(function(e) {
			var f = n("f0bd"),
				r = n("252c");

			function i(e) {
				return i = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				}, i(e)
			}

			function o(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}

			function a(e, t) {
				for (var n = 0; n < t.length; n++) {
					var f = t[n];
					f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), Object.defineProperty(e, f.key, f)
				}
			}

			function s(e, t, n) {
				return t && a(e.prototype, t), n && a(e, n), e
			}

			function c(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function l(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var f = Object.getOwnPropertySymbols(e);
					t && (f = f.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, f)
				}
				return n
			}

			function u(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? l(Object(n), !0).forEach((function(t) {
						c(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}
			var d = function() {};

			function p(e) {
				return "string" === typeof e && (e = e.split(" ")), e
			}

			function h(e, t) {
				var n, f = p(t);
				n = e.className instanceof d ? p(e.className.baseVal) : p(e.className), f.forEach((function(e) {
					-1 === n.indexOf(e) && n.push(e)
				})), e instanceof SVGElement ? e.setAttribute("class", n.join(" ")) : e.className = n.join(" ")
			}

			function m(e, t) {
				var n, f = p(t);
				n = e.className instanceof d ? p(e.className.baseVal) : p(e.className), f.forEach((function(e) {
					var t = n.indexOf(e); - 1 !== t && n.splice(t, 1)
				})), e instanceof SVGElement ? e.setAttribute("class", n.join(" ")) : e.className = n.join(" ")
			}
			"undefined" !== typeof window && (d = window.SVGAnimatedString);
			var g = !1;
			if ("undefined" !== typeof window) {
				g = !1;
				try {
					var v = Object.defineProperty({}, "passive", {
						get: function() {
							g = !0
						}
					});
					window.addEventListener("test", null, v)
				} catch (fa) {}
			}

			function b() {
				this.__data__ = [], this.size = 0
			}
			var y = b;

			function _(e, t) {
				return e === t || e !== e && t !== t
			}
			var w = _;

			function x(e, t) {
				var n = e.length;
				while (n--)
					if (w(e[n][0], t)) return n;
				return -1
			}
			var k = x,
				C = Array.prototype,
				S = C.splice;

			function A(e) {
				var t = this.__data__,
					n = k(t, e);
				if (n < 0) return !1;
				var f = t.length - 1;
				return n == f ? t.pop() : S.call(t, n, 1), --this.size, !0
			}
			var O = A;

			function E(e) {
				var t = this.__data__,
					n = k(t, e);
				return n < 0 ? void 0 : t[n][1]
			}
			var T = E;

			function j(e) {
				return k(this.__data__, e) > -1
			}
			var L = j;

			function I(e, t) {
				var n = this.__data__,
					f = k(n, e);
				return f < 0 ? (++this.size, n.push([e, t])) : n[f][1] = t, this
			}
			var M = I;

			function N(e) {
				var t = -1,
					n = null == e ? 0 : e.length;
				this.clear();
				while (++t < n) {
					var f = e[t];
					this.set(f[0], f[1])
				}
			}
			N.prototype.clear = y, N.prototype["delete"] = O, N.prototype.get = T, N.prototype.has = L, N.prototype.set = M;
			var P = N;

			function B() {
				this.__data__ = new P, this.size = 0
			}
			var $ = B;

			function z(e) {
				var t = this.__data__,
					n = t["delete"](e);
				return this.size = t.size, n
			}
			var R = z;

			function D(e) {
				return this.__data__.get(e)
			}
			var V = D;

			function H(e) {
				return this.__data__.has(e)
			}
			var F = H,
				U = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof e ? e : "undefined" !== typeof self ? self : {};

			function q(e, t) {
				return t = {
					exports: {}
				}, e(t, t.exports), t.exports
			}
			var W = "object" == typeof U && U && U.Object === Object && U,
				Q = W,
				G = "object" == typeof self && self && self.Object === Object && self,
				Z = Q || G || Function("return this")(),
				Y = Z,
				J = Y.Symbol,
				X = J,
				K = Object.prototype,
				ee = K.hasOwnProperty,
				te = K.toString,
				ne = X ? X.toStringTag : void 0;

			function fe(e) {
				var t = ee.call(e, ne),
					n = e[ne];
				try {
					e[ne] = void 0;
					var f = !0
				} catch (fa) {}
				var r = te.call(e);
				return f && (t ? e[ne] = n : delete e[ne]), r
			}
			var re = fe,
				ie = Object.prototype,
				oe = ie.toString;

			function ae(e) {
				return oe.call(e)
			}
			var se = ae,
				ce = "[object Null]",
				le = "[object Undefined]",
				ue = X ? X.toStringTag : void 0;

			function de(e) {
				return null == e ? void 0 === e ? le : ce : ue && ue in Object(e) ? re(e) : se(e)
			}
			var pe = de;

			function he(e) {
				var t = typeof e;
				return null != e && ("object" == t || "function" == t)
			}
			var me = he,
				ge = "[object AsyncFunction]",
				ve = "[object Function]",
				be = "[object GeneratorFunction]",
				ye = "[object Proxy]";

			function _e(e) {
				if (!me(e)) return !1;
				var t = pe(e);
				return t == ve || t == be || t == ge || t == ye
			}
			var we = _e,
				xe = Y["__core-js_shared__"],
				ke = xe,
				Ce = function() {
					var e = /[^.]+$/.exec(ke && ke.keys && ke.keys.IE_PROTO || "");
					return e ? "Symbol(src)_1." + e : ""
				}();

			function Se(e) {
				return !!Ce && Ce in e
			}
			var Ae = Se,
				Oe = Function.prototype,
				Ee = Oe.toString;

			function Te(e) {
				if (null != e) {
					try {
						return Ee.call(e)
					} catch (fa) {}
					try {
						return e + ""
					} catch (fa) {}
				}
				return ""
			}
			var je = Te,
				Le = /[\\^$.*+?()[\]{}|]/g,
				Ie = /^\[object .+?Constructor\]$/,
				Me = Function.prototype,
				Ne = Object.prototype,
				Pe = Me.toString,
				Be = Ne.hasOwnProperty,
				$e = RegExp("^" + Pe.call(Be).replace(Le, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

			function ze(e) {
				if (!me(e) || Ae(e)) return !1;
				var t = we(e) ? $e : Ie;
				return t.test(je(e))
			}
			var Re = ze;

			function De(e, t) {
				return null == e ? void 0 : e[t]
			}
			var Ve = De;

			function He(e, t) {
				var n = Ve(e, t);
				return Re(n) ? n : void 0
			}
			var Fe = He,
				Ue = Fe(Y, "Map"),
				qe = Ue,
				We = Fe(Object, "create"),
				Qe = We;

			function Ge() {
				this.__data__ = Qe ? Qe(null) : {}, this.size = 0
			}
			var Ze = Ge;

			function Ye(e) {
				var t = this.has(e) && delete this.__data__[e];
				return this.size -= t ? 1 : 0, t
			}
			var Je = Ye,
				Xe = "__lodash_hash_undefined__",
				Ke = Object.prototype,
				et = Ke.hasOwnProperty;

			function tt(e) {
				var t = this.__data__;
				if (Qe) {
					var n = t[e];
					return n === Xe ? void 0 : n
				}
				return et.call(t, e) ? t[e] : void 0
			}
			var nt = tt,
				ft = Object.prototype,
				rt = ft.hasOwnProperty;

			function it(e) {
				var t = this.__data__;
				return Qe ? void 0 !== t[e] : rt.call(t, e)
			}
			var ot = it,
				at = "__lodash_hash_undefined__";

			function st(e, t) {
				var n = this.__data__;
				return this.size += this.has(e) ? 0 : 1, n[e] = Qe && void 0 === t ? at : t, this
			}
			var ct = st;

			function lt(e) {
				var t = -1,
					n = null == e ? 0 : e.length;
				this.clear();
				while (++t < n) {
					var f = e[t];
					this.set(f[0], f[1])
				}
			}
			lt.prototype.clear = Ze, lt.prototype["delete"] = Je, lt.prototype.get = nt, lt.prototype.has = ot, lt.prototype.set = ct;
			var ut = lt;

			function dt() {
				this.size = 0, this.__data__ = {
					hash: new ut,
					map: new(qe || P),
					string: new ut
				}
			}
			var pt = dt;

			function ht(e) {
				var t = typeof e;
				return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
			}
			var mt = ht;

			function gt(e, t) {
				var n = e.__data__;
				return mt(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
			}
			var vt = gt;

			function bt(e) {
				var t = vt(this, e)["delete"](e);
				return this.size -= t ? 1 : 0, t
			}
			var yt = bt;

			function _t(e) {
				return vt(this, e).get(e)
			}
			var wt = _t;

			function xt(e) {
				return vt(this, e).has(e)
			}
			var kt = xt;

			function Ct(e, t) {
				var n = vt(this, e),
					f = n.size;
				return n.set(e, t), this.size += n.size == f ? 0 : 1, this
			}
			var St = Ct;

			function At(e) {
				var t = -1,
					n = null == e ? 0 : e.length;
				this.clear();
				while (++t < n) {
					var f = e[t];
					this.set(f[0], f[1])
				}
			}
			At.prototype.clear = pt, At.prototype["delete"] = yt, At.prototype.get = wt, At.prototype.has = kt, At.prototype.set = St;
			var Ot = At,
				Et = 200;

			function Tt(e, t) {
				var n = this.__data__;
				if (n instanceof P) {
					var f = n.__data__;
					if (!qe || f.length < Et - 1) return f.push([e, t]), this.size = ++n.size, this;
					n = this.__data__ = new Ot(f)
				}
				return n.set(e, t), this.size = n.size, this
			}
			var jt = Tt;

			function Lt(e) {
				var t = this.__data__ = new P(e);
				this.size = t.size
			}
			Lt.prototype.clear = $, Lt.prototype["delete"] = R, Lt.prototype.get = V, Lt.prototype.has = F, Lt.prototype.set = jt;
			var It = Lt,
				Mt = "__lodash_hash_undefined__";

			function Nt(e) {
				return this.__data__.set(e, Mt), this
			}
			var Pt = Nt;

			function Bt(e) {
				return this.__data__.has(e)
			}
			var $t = Bt;

			function zt(e) {
				var t = -1,
					n = null == e ? 0 : e.length;
				this.__data__ = new Ot;
				while (++t < n) this.add(e[t])
			}
			zt.prototype.add = zt.prototype.push = Pt, zt.prototype.has = $t;
			var Rt = zt;

			function Dt(e, t) {
				var n = -1,
					f = null == e ? 0 : e.length;
				while (++n < f)
					if (t(e[n], n, e)) return !0;
				return !1
			}
			var Vt = Dt;

			function Ht(e, t) {
				return e.has(t)
			}
			var Ft = Ht,
				Ut = 1,
				qt = 2;

			function Wt(e, t, n, f, r, i) {
				var o = n & Ut,
					a = e.length,
					s = t.length;
				if (a != s && !(o && s > a)) return !1;
				var c = i.get(e);
				if (c && i.get(t)) return c == t;
				var l = -1,
					u = !0,
					d = n & qt ? new Rt : void 0;
				i.set(e, t), i.set(t, e);
				while (++l < a) {
					var p = e[l],
						h = t[l];
					if (f) var m = o ? f(h, p, l, t, e, i) : f(p, h, l, e, t, i);
					if (void 0 !== m) {
						if (m) continue;
						u = !1;
						break
					}
					if (d) {
						if (!Vt(t, (function(e, t) {
								if (!Ft(d, t) && (p === e || r(p, e, n, f, i))) return d.push(t)
							}))) {
							u = !1;
							break
						}
					} else if (p !== h && !r(p, h, n, f, i)) {
						u = !1;
						break
					}
				}
				return i["delete"](e), i["delete"](t), u
			}
			var Qt = Wt,
				Gt = Y.Uint8Array,
				Zt = Gt;

			function Yt(e) {
				var t = -1,
					n = Array(e.size);
				return e.forEach((function(e, f) {
					n[++t] = [f, e]
				})), n
			}
			var Jt = Yt;

			function Xt(e) {
				var t = -1,
					n = Array(e.size);
				return e.forEach((function(e) {
					n[++t] = e
				})), n
			}
			var Kt = Xt,
				en = 1,
				tn = 2,
				nn = "[object Boolean]",
				fn = "[object Date]",
				rn = "[object Error]",
				on = "[object Map]",
				an = "[object Number]",
				sn = "[object RegExp]",
				cn = "[object Set]",
				ln = "[object String]",
				un = "[object Symbol]",
				dn = "[object ArrayBuffer]",
				pn = "[object DataView]",
				hn = X ? X.prototype : void 0,
				mn = hn ? hn.valueOf : void 0;

			function gn(e, t, n, f, r, i, o) {
				switch (n) {
					case pn:
						if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
						e = e.buffer, t = t.buffer;
					case dn:
						return !(e.byteLength != t.byteLength || !i(new Zt(e), new Zt(t)));
					case nn:
					case fn:
					case an:
						return w(+e, +t);
					case rn:
						return e.name == t.name && e.message == t.message;
					case sn:
					case ln:
						return e == t + "";
					case on:
						var a = Jt;
					case cn:
						var s = f & en;
						if (a || (a = Kt), e.size != t.size && !s) return !1;
						var c = o.get(e);
						if (c) return c == t;
						f |= tn, o.set(e, t);
						var l = Qt(a(e), a(t), f, r, i, o);
						return o["delete"](e), l;
					case un:
						if (mn) return mn.call(e) == mn.call(t)
				}
				return !1
			}
			var vn = gn;

			function bn(e, t) {
				var n = -1,
					f = t.length,
					r = e.length;
				while (++n < f) e[r + n] = t[n];
				return e
			}
			var yn = bn,
				_n = Array.isArray,
				wn = _n;

			function xn(e, t, n) {
				var f = t(e);
				return wn(e) ? f : yn(f, n(e))
			}
			var kn = xn;

			function Cn(e, t) {
				var n = -1,
					f = null == e ? 0 : e.length,
					r = 0,
					i = [];
				while (++n < f) {
					var o = e[n];
					t(o, n, e) && (i[r++] = o)
				}
				return i
			}
			var Sn = Cn;

			function An() {
				return []
			}
			var On = An,
				En = Object.prototype,
				Tn = En.propertyIsEnumerable,
				jn = Object.getOwnPropertySymbols,
				Ln = jn ? function(e) {
					return null == e ? [] : (e = Object(e), Sn(jn(e), (function(t) {
						return Tn.call(e, t)
					})))
				} : On,
				In = Ln;

			function Mn(e, t) {
				var n = -1,
					f = Array(e);
				while (++n < e) f[n] = t(n);
				return f
			}
			var Nn = Mn;

			function Pn(e) {
				return null != e && "object" == typeof e
			}
			var Bn = Pn,
				$n = "[object Arguments]";

			function zn(e) {
				return Bn(e) && pe(e) == $n
			}
			var Rn = zn,
				Dn = Object.prototype,
				Vn = Dn.hasOwnProperty,
				Hn = Dn.propertyIsEnumerable,
				Fn = Rn(function() {
					return arguments
				}()) ? Rn : function(e) {
					return Bn(e) && Vn.call(e, "callee") && !Hn.call(e, "callee")
				},
				Un = Fn;

			function qn() {
				return !1
			}
			var Wn = qn,
				Qn = q((function(e, t) {
					var n = t && !t.nodeType && t,
						f = n && e && !e.nodeType && e,
						r = f && f.exports === n,
						i = r ? Y.Buffer : void 0,
						o = i ? i.isBuffer : void 0,
						a = o || Wn;
					e.exports = a
				})),
				Gn = 9007199254740991,
				Zn = /^(?:0|[1-9]\d*)$/;

			function Yn(e, t) {
				var n = typeof e;
				return t = null == t ? Gn : t, !!t && ("number" == n || "symbol" != n && Zn.test(e)) && e > -1 && e % 1 == 0 && e < t
			}
			var Jn = Yn,
				Xn = 9007199254740991;

			function Kn(e) {
				return "number" == typeof e && e > -1 && e % 1 == 0 && e <= Xn
			}
			var ef = Kn,
				tf = "[object Arguments]",
				nf = "[object Array]",
				ff = "[object Boolean]",
				rf = "[object Date]",
				of = "[object Error]",
				af = "[object Function]",
				sf = "[object Map]",
				cf = "[object Number]",
				lf = "[object Object]",
				uf = "[object RegExp]",
				df = "[object Set]",
				pf = "[object String]",
				hf = "[object WeakMap]",
				mf = "[object ArrayBuffer]",
				gf = "[object DataView]",
				vf = "[object Float32Array]",
				bf = "[object Float64Array]",
				yf = "[object Int8Array]",
				_f = "[object Int16Array]",
				wf = "[object Int32Array]",
				xf = "[object Uint8Array]",
				kf = "[object Uint8ClampedArray]",
				Cf = "[object Uint16Array]",
				Sf = "[object Uint32Array]",
				Af = {};

			function Of(e) {
				return Bn(e) && ef(e.length) && !!Af[pe(e)]
			}
			Af[vf] = Af[bf] = Af[yf] = Af[_f] = Af[wf] = Af[xf] = Af[kf] = Af[Cf] = Af[Sf] = !0, Af[tf] = Af[nf] = Af[mf] = Af[ff] = Af[gf] = Af[rf] = Af[of] = Af[af] = Af[sf] = Af[cf] = Af[lf] = Af[uf] = Af[df] = Af[pf] = Af[hf] = !1;
			var Ef = Of;

			function Tf(e) {
				return function(t) {
					return e(t)
				}
			}
			var jf = Tf,
				Lf = q((function(e, t) {
					var n = t && !t.nodeType && t,
						f = n && e && !e.nodeType && e,
						r = f && f.exports === n,
						i = r && Q.process,
						o = function() {
							try {
								var e = f && f.require && f.require("util").types;
								return e || i && i.binding && i.binding("util")
							} catch (fa) {}
						}();
					e.exports = o
				})),
				If = Lf && Lf.isTypedArray,
				Mf = If ? jf(If) : Ef,
				Nf = Mf,
				Pf = Object.prototype,
				Bf = Pf.hasOwnProperty;

			function $f(e, t) {
				var n = wn(e),
					f = !n && Un(e),
					r = !n && !f && Qn(e),
					i = !n && !f && !r && Nf(e),
					o = n || f || r || i,
					a = o ? Nn(e.length, String) : [],
					s = a.length;
				for (var c in e) !t && !Bf.call(e, c) || o && ("length" == c || r && ("offset" == c || "parent" == c) || i && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || Jn(c, s)) || a.push(c);
				return a
			}
			var zf = $f,
				Rf = Object.prototype;

			function Df(e) {
				var t = e && e.constructor,
					n = "function" == typeof t && t.prototype || Rf;
				return e === n
			}
			var Vf = Df;

			function Hf(e, t) {
				return function(n) {
					return e(t(n))
				}
			}
			var Ff = Hf,
				Uf = Ff(Object.keys, Object),
				qf = Uf,
				Wf = Object.prototype,
				Qf = Wf.hasOwnProperty;

			function Gf(e) {
				if (!Vf(e)) return qf(e);
				var t = [];
				for (var n in Object(e)) Qf.call(e, n) && "constructor" != n && t.push(n);
				return t
			}
			var Zf = Gf;

			function Yf(e) {
				return null != e && ef(e.length) && !we(e)
			}
			var Jf = Yf;

			function Xf(e) {
				return Jf(e) ? zf(e) : Zf(e)
			}
			var Kf = Xf;

			function er(e) {
				return kn(e, Kf, In)
			}
			var tr = er,
				nr = 1,
				fr = Object.prototype,
				rr = fr.hasOwnProperty;

			function ir(e, t, n, f, r, i) {
				var o = n & nr,
					a = tr(e),
					s = a.length,
					c = tr(t),
					l = c.length;
				if (s != l && !o) return !1;
				var u = s;
				while (u--) {
					var d = a[u];
					if (!(o ? d in t : rr.call(t, d))) return !1
				}
				var p = i.get(e);
				if (p && i.get(t)) return p == t;
				var h = !0;
				i.set(e, t), i.set(t, e);
				var m = o;
				while (++u < s) {
					d = a[u];
					var g = e[d],
						v = t[d];
					if (f) var b = o ? f(v, g, d, t, e, i) : f(g, v, d, e, t, i);
					if (!(void 0 === b ? g === v || r(g, v, n, f, i) : b)) {
						h = !1;
						break
					}
					m || (m = "constructor" == d)
				}
				if (h && !m) {
					var y = e.constructor,
						_ = t.constructor;
					y == _ || !("constructor" in e) || !("constructor" in t) || "function" == typeof y && y instanceof y && "function" == typeof _ && _ instanceof _ || (h = !1)
				}
				return i["delete"](e), i["delete"](t), h
			}
			var or = ir,
				ar = Fe(Y, "DataView"),
				sr = ar,
				cr = Fe(Y, "Promise"),
				lr = cr,
				ur = Fe(Y, "Set"),
				dr = ur,
				pr = Fe(Y, "WeakMap"),
				hr = pr,
				mr = "[object Map]",
				gr = "[object Object]",
				vr = "[object Promise]",
				br = "[object Set]",
				yr = "[object WeakMap]",
				_r = "[object DataView]",
				wr = je(sr),
				xr = je(qe),
				kr = je(lr),
				Cr = je(dr),
				Sr = je(hr),
				Ar = pe;
			(sr && Ar(new sr(new ArrayBuffer(1))) != _r || qe && Ar(new qe) != mr || lr && Ar(lr.resolve()) != vr || dr && Ar(new dr) != br || hr && Ar(new hr) != yr) && (Ar = function(e) {
				var t = pe(e),
					n = t == gr ? e.constructor : void 0,
					f = n ? je(n) : "";
				if (f) switch (f) {
					case wr:
						return _r;
					case xr:
						return mr;
					case kr:
						return vr;
					case Cr:
						return br;
					case Sr:
						return yr
				}
				return t
			});
			var Or = Ar,
				Er = 1,
				Tr = "[object Arguments]",
				jr = "[object Array]",
				Lr = "[object Object]",
				Ir = Object.prototype,
				Mr = Ir.hasOwnProperty;

			function Nr(e, t, n, f, r, i) {
				var o = wn(e),
					a = wn(t),
					s = o ? jr : Or(e),
					c = a ? jr : Or(t);
				s = s == Tr ? Lr : s, c = c == Tr ? Lr : c;
				var l = s == Lr,
					u = c == Lr,
					d = s == c;
				if (d && Qn(e)) {
					if (!Qn(t)) return !1;
					o = !0, l = !1
				}
				if (d && !l) return i || (i = new It), o || Nf(e) ? Qt(e, t, n, f, r, i) : vn(e, t, s, n, f, r, i);
				if (!(n & Er)) {
					var p = l && Mr.call(e, "__wrapped__"),
						h = u && Mr.call(t, "__wrapped__");
					if (p || h) {
						var m = p ? e.value() : e,
							g = h ? t.value() : t;
						return i || (i = new It), r(m, g, n, f, i)
					}
				}
				return !!d && (i || (i = new It), or(e, t, n, f, r, i))
			}
			var Pr = Nr;

			function Br(e, t, n, f, r) {
				return e === t || (null == e || null == t || !Bn(e) && !Bn(t) ? e !== e && t !== t : Pr(e, t, n, f, Br, r))
			}
			var $r = Br;

			function zr(e, t) {
				return $r(e, t)
			}
			var Rr = zr,
				Dr = {
					container: !1,
					delay: 0,
					html: !1,
					placement: "top",
					title: "",
					template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
					trigger: "hover focus",
					offset: 0
				},
				Vr = [],
				Hr = function() {
					function e(t, n) {
						var f = this;
						o(this, e), c(this, "_events", []), c(this, "_setTooltipNodeEvent", (function(e, t, n, r) {
							var i = e.relatedreference || e.toElement || e.relatedTarget,
								o = function n(i) {
									var o = i.relatedreference || i.toElement || i.relatedTarget;
									f._tooltipNode.removeEventListener(e.type, n), t.contains(o) || f._scheduleHide(t, r.delay, r, i)
								};
							return !!f._tooltipNode.contains(i) && (f._tooltipNode.addEventListener(e.type, o), !0)
						})), n = u({}, Dr, {}, n), t.jquery && (t = t[0]), this.show = this.show.bind(this), this.hide = this.hide.bind(this), this.reference = t, this.options = n, this._isOpen = !1, this._init()
					}
					return s(e, [{
						key: "show",
						value: function() {
							this._show(this.reference, this.options)
						}
					}, {
						key: "hide",
						value: function() {
							this._hide()
						}
					}, {
						key: "dispose",
						value: function() {
							this._dispose()
						}
					}, {
						key: "toggle",
						value: function() {
							return this._isOpen ? this.hide() : this.show()
						}
					}, {
						key: "setClasses",
						value: function(e) {
							this._classes = e
						}
					}, {
						key: "setContent",
						value: function(e) {
							this.options.title = e, this._tooltipNode && this._setContent(e, this.options)
						}
					}, {
						key: "setOptions",
						value: function(e) {
							var t = !1,
								n = e && e.classes || Xr.options.defaultClass;
							Rr(this._classes, n) || (this.setClasses(n), t = !0), e = Wr(e);
							var f = !1,
								r = !1;
							for (var i in this.options.offset === e.offset && this.options.placement === e.placement || (f = !0), (this.options.template !== e.template || this.options.trigger !== e.trigger || this.options.container !== e.container || t) && (r = !0), e) this.options[i] = e[i];
							if (this._tooltipNode)
								if (r) {
									var o = this._isOpen;
									this.dispose(), this._init(), o && this.show()
								} else f && this.popperInstance.update()
						}
					}, {
						key: "_init",
						value: function() {
							var e = "string" === typeof this.options.trigger ? this.options.trigger.split(" ") : [];
							this._isDisposed = !1, this._enableDocumentTouch = -1 === e.indexOf("manual"), e = e.filter((function(e) {
								return -1 !== ["click", "hover", "focus"].indexOf(e)
							})), this._setEventListeners(this.reference, e, this.options), this.$_originalTitle = this.reference.getAttribute("title"), this.reference.removeAttribute("title"), this.reference.setAttribute("data-original-title", this.$_originalTitle)
						}
					}, {
						key: "_create",
						value: function(e, t) {
							var n = window.document.createElement("div");
							n.innerHTML = t.trim();
							var f = n.childNodes[0];
							return f.id = "tooltip_".concat(Math.random().toString(36).substr(2, 10)), f.setAttribute("aria-hidden", "true"), this.options.autoHide && -1 !== this.options.trigger.indexOf("hover") && (f.addEventListener("mouseenter", this.hide), f.addEventListener("click", this.hide)), f
						}
					}, {
						key: "_setContent",
						value: function(e, t) {
							var n = this;
							this.asyncContent = !1, this._applyContent(e, t).then((function() {
								n.popperInstance.update()
							}))
						}
					}, {
						key: "_applyContent",
						value: function(e, t) {
							var n = this;
							return new Promise((function(f, r) {
								var i = t.html,
									o = n._tooltipNode;
								if (o) {
									var a = o.querySelector(n.options.innerSelector);
									if (1 === e.nodeType) {
										if (i) {
											while (a.firstChild) a.removeChild(a.firstChild);
											a.appendChild(e)
										}
									} else {
										if ("function" === typeof e) {
											var s = e();
											return void(s && "function" === typeof s.then ? (n.asyncContent = !0, t.loadingClass && h(o, t.loadingClass), t.loadingContent && n._applyContent(t.loadingContent, t), s.then((function(e) {
												return t.loadingClass && m(o, t.loadingClass), n._applyContent(e, t)
											})).then(f).catch(r)) : n._applyContent(s, t).then(f).catch(r))
										}
										i ? a.innerHTML = e : a.innerText = e
									}
									f()
								}
							}))
						}
					}, {
						key: "_show",
						value: function(e, t) {
							if (t && "string" === typeof t.container) {
								var n = document.querySelector(t.container);
								if (!n) return
							}
							clearTimeout(this._disposeTimer), t = Object.assign({}, t), delete t.offset;
							var f = !0;
							this._tooltipNode && (h(this._tooltipNode, this._classes), f = !1);
							var r = this._ensureShown(e, t);
							return f && this._tooltipNode && h(this._tooltipNode, this._classes), h(e, ["v-tooltip-open"]), r
						}
					}, {
						key: "_ensureShown",
						value: function(e, t) {
							var n = this;
							if (this._isOpen) return this;
							if (this._isOpen = !0, Vr.push(this), this._tooltipNode) return this._tooltipNode.style.display = "", this._tooltipNode.setAttribute("aria-hidden", "false"), this.popperInstance.enableEventListeners(), this.popperInstance.update(), this.asyncContent && this._setContent(t.title, t), this;
							var r = e.getAttribute("title") || t.title;
							if (!r) return this;
							var i = this._create(e, t.template);
							this._tooltipNode = i, e.setAttribute("aria-describedby", i.id);
							var o = this._findContainer(t.container, e);
							this._append(i, o);
							var a = u({}, t.popperOptions, {
								placement: t.placement
							});
							return a.modifiers = u({}, a.modifiers, {
								arrow: {
									element: this.options.arrowSelector
								}
							}), t.boundariesElement && (a.modifiers.preventOverflow = {
								boundariesElement: t.boundariesElement
							}), this.popperInstance = new f["a"](e, i, a), this._setContent(r, t), requestAnimationFrame((function() {
								!n._isDisposed && n.popperInstance ? (n.popperInstance.update(), requestAnimationFrame((function() {
									n._isDisposed ? n.dispose() : n._isOpen && i.setAttribute("aria-hidden", "false")
								}))) : n.dispose()
							})), this
						}
					}, {
						key: "_noLongerOpen",
						value: function() {
							var e = Vr.indexOf(this); - 1 !== e && Vr.splice(e, 1)
						}
					}, {
						key: "_hide",
						value: function() {
							var e = this;
							if (!this._isOpen) return this;
							this._isOpen = !1, this._noLongerOpen(), this._tooltipNode.style.display = "none", this._tooltipNode.setAttribute("aria-hidden", "true"), this.popperInstance.disableEventListeners(), clearTimeout(this._disposeTimer);
							var t = Xr.options.disposeTimeout;
							return null !== t && (this._disposeTimer = setTimeout((function() {
								e._tooltipNode && (e._tooltipNode.removeEventListener("mouseenter", e.hide), e._tooltipNode.removeEventListener("click", e.hide), e._removeTooltipNode())
							}), t)), m(this.reference, ["v-tooltip-open"]), this
						}
					}, {
						key: "_removeTooltipNode",
						value: function() {
							if (this._tooltipNode) {
								var e = this._tooltipNode.parentNode;
								e && (e.removeChild(this._tooltipNode), this.reference.removeAttribute("aria-describedby")), this._tooltipNode = null
							}
						}
					}, {
						key: "_dispose",
						value: function() {
							var e = this;
							return this._isDisposed = !0, this.reference.removeAttribute("data-original-title"), this.$_originalTitle && this.reference.setAttribute("title", this.$_originalTitle), this._events.forEach((function(t) {
								var n = t.func,
									f = t.event;
								e.reference.removeEventListener(f, n)
							})), this._events = [], this._tooltipNode ? (this._hide(), this._tooltipNode.removeEventListener("mouseenter", this.hide), this._tooltipNode.removeEventListener("click", this.hide), this.popperInstance.destroy(), this.popperInstance.options.removeOnDestroy || this._removeTooltipNode()) : this._noLongerOpen(), this
						}
					}, {
						key: "_findContainer",
						value: function(e, t) {
							return "string" === typeof e ? e = window.document.querySelector(e) : !1 === e && (e = t.parentNode), e
						}
					}, {
						key: "_append",
						value: function(e, t) {
							t.appendChild(e)
						}
					}, {
						key: "_setEventListeners",
						value: function(e, t, n) {
							var f = this,
								r = [],
								i = [];
							t.forEach((function(e) {
								switch (e) {
									case "hover":
										r.push("mouseenter"), i.push("mouseleave"), f.options.hideOnTargetClick && i.push("click");
										break;
									case "focus":
										r.push("focus"), i.push("blur"), f.options.hideOnTargetClick && i.push("click");
										break;
									case "click":
										r.push("click"), i.push("click");
										break
								}
							})), r.forEach((function(t) {
								var r = function(t) {
									!0 !== f._isOpen && (t.usedByTooltip = !0, f._scheduleShow(e, n.delay, n, t))
								};
								f._events.push({
									event: t,
									func: r
								}), e.addEventListener(t, r)
							})), i.forEach((function(t) {
								var r = function(t) {
									!0 !== t.usedByTooltip && f._scheduleHide(e, n.delay, n, t)
								};
								f._events.push({
									event: t,
									func: r
								}), e.addEventListener(t, r)
							}))
						}
					}, {
						key: "_onDocumentTouch",
						value: function(e) {
							this._enableDocumentTouch && this._scheduleHide(this.reference, this.options.delay, this.options, e)
						}
					}, {
						key: "_scheduleShow",
						value: function(e, t, n) {
							var f = this,
								r = t && t.show || t || 0;
							clearTimeout(this._scheduleTimer), this._scheduleTimer = window.setTimeout((function() {
								return f._show(e, n)
							}), r)
						}
					}, {
						key: "_scheduleHide",
						value: function(e, t, n, f) {
							var r = this,
								i = t && t.hide || t || 0;
							clearTimeout(this._scheduleTimer), this._scheduleTimer = window.setTimeout((function() {
								if (!1 !== r._isOpen && r._tooltipNode.ownerDocument.body.contains(r._tooltipNode)) {
									if ("mouseleave" === f.type) {
										var i = r._setTooltipNodeEvent(f, e, t, n);
										if (i) return
									}
									r._hide(e, n)
								}
							}), i)
						}
					}]), e
				}();
			"undefined" !== typeof document && document.addEventListener("touchstart", (function(e) {
				for (var t = 0; t < Vr.length; t++) Vr[t]._onDocumentTouch(e)
			}), !g || {
				passive: !0,
				capture: !0
			});
			var Fr = {
					enabled: !0
				},
				Ur = ["top", "top-start", "top-end", "right", "right-start", "right-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end"],
				qr = {
					defaultPlacement: "top",
					defaultClass: "vue-tooltip-theme",
					defaultTargetClass: "has-tooltip",
					defaultHtml: !0,
					defaultTemplate: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
					defaultArrowSelector: ".tooltip-arrow, .tooltip__arrow",
					defaultInnerSelector: ".tooltip-inner, .tooltip__inner",
					defaultDelay: 0,
					defaultTrigger: "hover focus",
					defaultOffset: 0,
					defaultContainer: "body",
					defaultBoundariesElement: void 0,
					defaultPopperOptions: {},
					defaultLoadingClass: "tooltip-loading",
					defaultLoadingContent: "...",
					autoHide: !0,
					defaultHideOnTargetClick: !0,
					disposeTimeout: 5e3,
					popover: {
						defaultPlacement: "bottom",
						defaultClass: "vue-popover-theme",
						defaultBaseClass: "tooltip popover",
						defaultWrapperClass: "wrapper",
						defaultInnerClass: "tooltip-inner popover-inner",
						defaultArrowClass: "tooltip-arrow popover-arrow",
						defaultOpenClass: "open",
						defaultDelay: 0,
						defaultTrigger: "click",
						defaultOffset: 0,
						defaultContainer: "body",
						defaultBoundariesElement: void 0,
						defaultPopperOptions: {},
						defaultAutoHide: !0,
						defaultHandleResize: !0
					}
				};

			function Wr(e) {
				var t = {
					placement: "undefined" !== typeof e.placement ? e.placement : Xr.options.defaultPlacement,
					delay: "undefined" !== typeof e.delay ? e.delay : Xr.options.defaultDelay,
					html: "undefined" !== typeof e.html ? e.html : Xr.options.defaultHtml,
					template: "undefined" !== typeof e.template ? e.template : Xr.options.defaultTemplate,
					arrowSelector: "undefined" !== typeof e.arrowSelector ? e.arrowSelector : Xr.options.defaultArrowSelector,
					innerSelector: "undefined" !== typeof e.innerSelector ? e.innerSelector : Xr.options.defaultInnerSelector,
					trigger: "undefined" !== typeof e.trigger ? e.trigger : Xr.options.defaultTrigger,
					offset: "undefined" !== typeof e.offset ? e.offset : Xr.options.defaultOffset,
					container: "undefined" !== typeof e.container ? e.container : Xr.options.defaultContainer,
					boundariesElement: "undefined" !== typeof e.boundariesElement ? e.boundariesElement : Xr.options.defaultBoundariesElement,
					autoHide: "undefined" !== typeof e.autoHide ? e.autoHide : Xr.options.autoHide,
					hideOnTargetClick: "undefined" !== typeof e.hideOnTargetClick ? e.hideOnTargetClick : Xr.options.defaultHideOnTargetClick,
					loadingClass: "undefined" !== typeof e.loadingClass ? e.loadingClass : Xr.options.defaultLoadingClass,
					loadingContent: "undefined" !== typeof e.loadingContent ? e.loadingContent : Xr.options.defaultLoadingContent,
					popperOptions: u({}, "undefined" !== typeof e.popperOptions ? e.popperOptions : Xr.options.defaultPopperOptions)
				};
				if (t.offset) {
					var n = i(t.offset),
						f = t.offset;
					("number" === n || "string" === n && -1 === f.indexOf(",")) && (f = "0, ".concat(f)), t.popperOptions.modifiers || (t.popperOptions.modifiers = {}), t.popperOptions.modifiers.offset = {
						offset: f
					}
				}
				return t.trigger && -1 !== t.trigger.indexOf("click") && (t.hideOnTargetClick = !1), t
			}

			function Qr(e, t) {
				for (var n = e.placement, f = 0; f < Ur.length; f++) {
					var r = Ur[f];
					t[r] && (n = r)
				}
				return n
			}

			function Gr(e) {
				var t = i(e);
				return "string" === t ? e : !(!e || "object" !== t) && e.content
			}

			function Zr(e, t) {
				var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
					f = Gr(t),
					r = "undefined" !== typeof t.classes ? t.classes : Xr.options.defaultClass,
					i = u({
						title: f
					}, Wr(u({}, t, {
						placement: Qr(t, n)
					}))),
					o = e._tooltip = new Hr(e, i);
				o.setClasses(r), o._vueEl = e;
				var a = "undefined" !== typeof t.targetClasses ? t.targetClasses : Xr.options.defaultTargetClass;
				return e._tooltipTargetClasses = a, h(e, a), o
			}

			function Yr(e) {
				e._tooltip && (e._tooltip.dispose(), delete e._tooltip, delete e._tooltipOldShow), e._tooltipTargetClasses && (m(e, e._tooltipTargetClasses), delete e._tooltipTargetClasses)
			}

			function Jr(e, t) {
				var n, f = t.value,
					r = (t.oldValue, t.modifiers),
					i = Gr(f);
				i && Fr.enabled ? (e._tooltip ? (n = e._tooltip, n.setContent(i), n.setOptions(u({}, f, {
					placement: Qr(f, r)
				}))) : n = Zr(e, f, r), "undefined" !== typeof f.show && f.show !== e._tooltipOldShow && (e._tooltipOldShow = f.show, f.show ? n.show() : n.hide())) : Yr(e)
			}
			var Xr = {
				options: qr,
				bind: Jr,
				update: Jr,
				unbind: function(e) {
					Yr(e)
				}
			};

			function Kr(e) {
				e.addEventListener("click", ti), e.addEventListener("touchstart", ni, !!g && {
					passive: !0
				})
			}

			function ei(e) {
				e.removeEventListener("click", ti), e.removeEventListener("touchstart", ni), e.removeEventListener("touchend", fi), e.removeEventListener("touchcancel", ri)
			}

			function ti(e) {
				var t = e.currentTarget;
				e.closePopover = !t.$_vclosepopover_touch, e.closeAllPopover = t.$_closePopoverModifiers && !!t.$_closePopoverModifiers.all
			}

			function ni(e) {
				if (1 === e.changedTouches.length) {
					var t = e.currentTarget;
					t.$_vclosepopover_touch = !0;
					var n = e.changedTouches[0];
					t.$_vclosepopover_touchPoint = n, t.addEventListener("touchend", fi), t.addEventListener("touchcancel", ri)
				}
			}

			function fi(e) {
				var t = e.currentTarget;
				if (t.$_vclosepopover_touch = !1, 1 === e.changedTouches.length) {
					var n = e.changedTouches[0],
						f = t.$_vclosepopover_touchPoint;
					e.closePopover = Math.abs(n.screenY - f.screenY) < 20 && Math.abs(n.screenX - f.screenX) < 20, e.closeAllPopover = t.$_closePopoverModifiers && !!t.$_closePopoverModifiers.all
				}
			}

			function ri(e) {
				var t = e.currentTarget;
				t.$_vclosepopover_touch = !1
			}
			var ii = {
				bind: function(e, t) {
					var n = t.value,
						f = t.modifiers;
					e.$_closePopoverModifiers = f, ("undefined" === typeof n || n) && Kr(e)
				},
				update: function(e, t) {
					var n = t.value,
						f = t.oldValue,
						r = t.modifiers;
					e.$_closePopoverModifiers = r, n !== f && ("undefined" === typeof n || n ? Kr(e) : ei(e))
				},
				unbind: function(e) {
					ei(e)
				}
			};

			function oi(e) {
				var t = Xr.options.popover[e];
				return "undefined" === typeof t ? Xr.options[e] : t
			}
			var ai = !1;
			"undefined" !== typeof window && "undefined" !== typeof navigator && (ai = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
			var si = [],
				ci = function() {};
			"undefined" !== typeof window && (ci = window.Element);
			var li = {
				name: "VPopover",
				components: {
					ResizeObserver: r["a"]
				},
				props: {
					open: {
						type: Boolean,
						default: !1
					},
					disabled: {
						type: Boolean,
						default: !1
					},
					placement: {
						type: String,
						default: function() {
							return oi("defaultPlacement")
						}
					},
					delay: {
						type: [String, Number, Object],
						default: function() {
							return oi("defaultDelay")
						}
					},
					offset: {
						type: [String, Number],
						default: function() {
							return oi("defaultOffset")
						}
					},
					trigger: {
						type: String,
						default: function() {
							return oi("defaultTrigger")
						}
					},
					container: {
						type: [String, Object, ci, Boolean],
						default: function() {
							return oi("defaultContainer")
						}
					},
					boundariesElement: {
						type: [String, ci],
						default: function() {
							return oi("defaultBoundariesElement")
						}
					},
					popperOptions: {
						type: Object,
						default: function() {
							return oi("defaultPopperOptions")
						}
					},
					popoverClass: {
						type: [String, Array],
						default: function() {
							return oi("defaultClass")
						}
					},
					popoverBaseClass: {
						type: [String, Array],
						default: function() {
							return Xr.options.popover.defaultBaseClass
						}
					},
					popoverInnerClass: {
						type: [String, Array],
						default: function() {
							return Xr.options.popover.defaultInnerClass
						}
					},
					popoverWrapperClass: {
						type: [String, Array],
						default: function() {
							return Xr.options.popover.defaultWrapperClass
						}
					},
					popoverArrowClass: {
						type: [String, Array],
						default: function() {
							return Xr.options.popover.defaultArrowClass
						}
					},
					autoHide: {
						type: Boolean,
						default: function() {
							return Xr.options.popover.defaultAutoHide
						}
					},
					handleResize: {
						type: Boolean,
						default: function() {
							return Xr.options.popover.defaultHandleResize
						}
					},
					openGroup: {
						type: String,
						default: null
					},
					openClass: {
						type: [String, Array],
						default: function() {
							return Xr.options.popover.defaultOpenClass
						}
					}
				},
				data: function() {
					return {
						isOpen: !1,
						id: Math.random().toString(36).substr(2, 10)
					}
				},
				computed: {
					cssClass: function() {
						return c({}, this.openClass, this.isOpen)
					},
					popoverId: function() {
						return "popover_".concat(this.id)
					}
				},
				watch: {
					open: function(e) {
						e ? this.show() : this.hide()
					},
					disabled: function(e, t) {
						e !== t && (e ? this.hide() : this.open && this.show())
					},
					container: function(e) {
						if (this.isOpen && this.popperInstance) {
							var t = this.$refs.popover,
								n = this.$refs.trigger,
								f = this.$_findContainer(this.container, n);
							if (!f) return void console.warn("No container for popover", this);
							f.appendChild(t), this.popperInstance.scheduleUpdate()
						}
					},
					trigger: function(e) {
						this.$_removeEventListeners(), this.$_addEventListeners()
					},
					placement: function(e) {
						var t = this;
						this.$_updatePopper((function() {
							t.popperInstance.options.placement = e
						}))
					},
					offset: "$_restartPopper",
					boundariesElement: "$_restartPopper",
					popperOptions: {
						handler: "$_restartPopper",
						deep: !0
					}
				},
				created: function() {
					this.$_isDisposed = !1, this.$_mounted = !1, this.$_events = [], this.$_preventOpen = !1
				},
				mounted: function() {
					var e = this.$refs.popover;
					e.parentNode && e.parentNode.removeChild(e), this.$_init(), this.open && this.show()
				},
				deactivated: function() {
					this.hide()
				},
				beforeDestroy: function() {
					this.dispose()
				},
				methods: {
					show: function() {
						var e = this,
							t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
							n = t.event,
							f = (t.skipDelay, t.force),
							r = void 0 !== f && f;
						!r && this.disabled || (this.$_scheduleShow(n), this.$emit("show")), this.$emit("update:open", !0), this.$_beingShowed = !0, requestAnimationFrame((function() {
							e.$_beingShowed = !1
						}))
					},
					hide: function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
							t = e.event;
						e.skipDelay;
						this.$_scheduleHide(t), this.$emit("hide"), this.$emit("update:open", !1)
					},
					dispose: function() {
						if (this.$_isDisposed = !0, this.$_removeEventListeners(), this.hide({
								skipDelay: !0
							}), this.popperInstance && (this.popperInstance.destroy(), !this.popperInstance.options.removeOnDestroy)) {
							var e = this.$refs.popover;
							e.parentNode && e.parentNode.removeChild(e)
						}
						this.$_mounted = !1, this.popperInstance = null, this.isOpen = !1, this.$emit("dispose")
					},
					$_init: function() {
						-1 === this.trigger.indexOf("manual") && this.$_addEventListeners()
					},
					$_show: function() {
						var e = this,
							t = this.$refs.trigger,
							n = this.$refs.popover;
						if (clearTimeout(this.$_disposeTimer), !this.isOpen) {
							if (this.popperInstance && (this.isOpen = !0, this.popperInstance.enableEventListeners(), this.popperInstance.scheduleUpdate()), !this.$_mounted) {
								var r = this.$_findContainer(this.container, t);
								if (!r) return void console.warn("No container for popover", this);
								r.appendChild(n), this.$_mounted = !0
							}
							if (!this.popperInstance) {
								var i = u({}, this.popperOptions, {
									placement: this.placement
								});
								if (i.modifiers = u({}, i.modifiers, {
										arrow: u({}, i.modifiers && i.modifiers.arrow, {
											element: this.$refs.arrow
										})
									}), this.offset) {
									var o = this.$_getOffset();
									i.modifiers.offset = u({}, i.modifiers && i.modifiers.offset, {
										offset: o
									})
								}
								this.boundariesElement && (i.modifiers.preventOverflow = u({}, i.modifiers && i.modifiers.preventOverflow, {
									boundariesElement: this.boundariesElement
								})), this.popperInstance = new f["a"](t, n, i), requestAnimationFrame((function() {
									if (e.hidden) return e.hidden = !1, void e.$_hide();
									!e.$_isDisposed && e.popperInstance ? (e.popperInstance.scheduleUpdate(), requestAnimationFrame((function() {
										if (e.hidden) return e.hidden = !1, void e.$_hide();
										e.$_isDisposed ? e.dispose() : e.isOpen = !0
									}))) : e.dispose()
								}))
							}
							var a = this.openGroup;
							if (a)
								for (var s, c = 0; c < si.length; c++) s = si[c], s.openGroup !== a && (s.hide(), s.$emit("close-group"));
							si.push(this), this.$emit("apply-show")
						}
					},
					$_hide: function() {
						var e = this;
						if (this.isOpen) {
							var t = si.indexOf(this); - 1 !== t && si.splice(t, 1), this.isOpen = !1, this.popperInstance && this.popperInstance.disableEventListeners(), clearTimeout(this.$_disposeTimer);
							var n = Xr.options.popover.disposeTimeout || Xr.options.disposeTimeout;
							null !== n && (this.$_disposeTimer = setTimeout((function() {
								var t = e.$refs.popover;
								t && (t.parentNode && t.parentNode.removeChild(t), e.$_mounted = !1)
							}), n)), this.$emit("apply-hide")
						}
					},
					$_findContainer: function(e, t) {
						return "string" === typeof e ? e = window.document.querySelector(e) : !1 === e && (e = t.parentNode), e
					},
					$_getOffset: function() {
						var e = i(this.offset),
							t = this.offset;
						return ("number" === e || "string" === e && -1 === t.indexOf(",")) && (t = "0, ".concat(t)), t
					},
					$_addEventListeners: function() {
						var e = this,
							t = this.$refs.trigger,
							n = [],
							f = [],
							r = "string" === typeof this.trigger ? this.trigger.split(" ").filter((function(e) {
								return -1 !== ["click", "hover", "focus"].indexOf(e)
							})) : [];
						r.forEach((function(e) {
							switch (e) {
								case "hover":
									n.push("mouseenter"), f.push("mouseleave");
									break;
								case "focus":
									n.push("focus"), f.push("blur");
									break;
								case "click":
									n.push("click"), f.push("click");
									break
							}
						})), n.forEach((function(n) {
							var f = function(t) {
								e.isOpen || (t.usedByTooltip = !0, !e.$_preventOpen && e.show({
									event: t
								}), e.hidden = !1)
							};
							e.$_events.push({
								event: n,
								func: f
							}), t.addEventListener(n, f)
						})), f.forEach((function(n) {
							var f = function(t) {
								t.usedByTooltip || (e.hide({
									event: t
								}), e.hidden = !0)
							};
							e.$_events.push({
								event: n,
								func: f
							}), t.addEventListener(n, f)
						}))
					},
					$_scheduleShow: function() {
						var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
						if (clearTimeout(this.$_scheduleTimer), e) this.$_show();
						else {
							var t = parseInt(this.delay && this.delay.show || this.delay || 0);
							this.$_scheduleTimer = setTimeout(this.$_show.bind(this), t)
						}
					},
					$_scheduleHide: function() {
						var e = this,
							t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
							n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
						if (clearTimeout(this.$_scheduleTimer), n) this.$_hide();
						else {
							var f = parseInt(this.delay && this.delay.hide || this.delay || 0);
							this.$_scheduleTimer = setTimeout((function() {
								if (e.isOpen) {
									if (t && "mouseleave" === t.type) {
										var n = e.$_setTooltipNodeEvent(t);
										if (n) return
									}
									e.$_hide()
								}
							}), f)
						}
					},
					$_setTooltipNodeEvent: function(e) {
						var t = this,
							n = this.$refs.trigger,
							f = this.$refs.popover,
							r = e.relatedreference || e.toElement || e.relatedTarget,
							i = function r(i) {
								var o = i.relatedreference || i.toElement || i.relatedTarget;
								f.removeEventListener(e.type, r), n.contains(o) || t.hide({
									event: i
								})
							};
						return !!f.contains(r) && (f.addEventListener(e.type, i), !0)
					},
					$_removeEventListeners: function() {
						var e = this.$refs.trigger;
						this.$_events.forEach((function(t) {
							var n = t.func,
								f = t.event;
							e.removeEventListener(f, n)
						})), this.$_events = []
					},
					$_updatePopper: function(e) {
						this.popperInstance && (e(), this.isOpen && this.popperInstance.scheduleUpdate())
					},
					$_restartPopper: function() {
						if (this.popperInstance) {
							var e = this.isOpen;
							this.dispose(), this.$_isDisposed = !1, this.$_init(), e && this.show({
								skipDelay: !0,
								force: !0
							})
						}
					},
					$_handleGlobalClose: function(e) {
						var t = this,
							n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
						this.$_beingShowed || (this.hide({
							event: e
						}), e.closePopover ? this.$emit("close-directive") : this.$emit("auto-hide"), n && (this.$_preventOpen = !0, setTimeout((function() {
							t.$_preventOpen = !1
						}), 300)))
					},
					$_handleResize: function() {
						this.isOpen && this.popperInstance && (this.popperInstance.scheduleUpdate(), this.$emit("resize"))
					}
				}
			};

			function ui(e) {
				pi(e)
			}

			function di(e) {
				pi(e, !0)
			}

			function pi(e) {
				for (var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = function(n) {
						var f = si[n];
						if (f.$refs.popover) {
							var r = f.$refs.popover.contains(e.target);
							requestAnimationFrame((function() {
								(e.closeAllPopover || e.closePopover && r || f.autoHide && !r) && f.$_handleGlobalClose(e, t)
							}))
						}
					}, f = 0; f < si.length; f++) n(f)
			}

			function hi(e, t, n, f, r, i, o, a, s, c) {
				"boolean" !== typeof o && (s = a, a = o, o = !1);
				const l = "function" === typeof n ? n.options : n;
				let u;
				if (e && e.render && (l.render = e.render, l.staticRenderFns = e.staticRenderFns, l._compiled = !0, r && (l.functional = !0)), f && (l._scopeId = f), i ? (u = function(e) {
						e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, e || "undefined" === typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), t && t.call(this, s(e)), e && e._registeredComponents && e._registeredComponents.add(i)
					}, l._ssrRegister = u) : t && (u = o ? function(e) {
						t.call(this, c(e, this.$root.$options.shadowRoot))
					} : function(e) {
						t.call(this, a(e))
					}), u)
					if (l.functional) {
						const e = l.render;
						l.render = function(t, n) {
							return u.call(n), e(t, n)
						}
					} else {
						const e = l.beforeCreate;
						l.beforeCreate = e ? [].concat(e, u) : [u]
					} return n
			}
			"undefined" !== typeof document && "undefined" !== typeof window && (ai ? document.addEventListener("touchend", di, !g || {
				passive: !0,
				capture: !0
			}) : window.addEventListener("click", ui, !0));
			var mi = li,
				gi = function() {
					var e = this,
						t = e.$createElement,
						n = e._self._c || t;
					return n("div", {
						staticClass: "v-popover",
						class: e.cssClass
					}, [n("div", {
						ref: "trigger",
						staticClass: "trigger",
						staticStyle: {
							display: "inline-block"
						},
						attrs: {
							"aria-describedby": e.popoverId,
							tabindex: -1 !== e.trigger.indexOf("focus") ? 0 : void 0
						}
					}, [e._t("default")], 2), e._v(" "), n("div", {
						ref: "popover",
						class: [e.popoverBaseClass, e.popoverClass, e.cssClass],
						style: {
							visibility: e.isOpen ? "visible" : "hidden"
						},
						attrs: {
							id: e.popoverId,
							"aria-hidden": e.isOpen ? "false" : "true",
							tabindex: e.autoHide ? 0 : void 0
						},
						on: {
							keyup: function(t) {
								if (!t.type.indexOf("key") && e._k(t.keyCode, "esc", 27, t.key, ["Esc", "Escape"])) return null;
								e.autoHide && e.hide()
							}
						}
					}, [n("div", {
						class: e.popoverWrapperClass
					}, [n("div", {
						ref: "inner",
						class: e.popoverInnerClass,
						staticStyle: {
							position: "relative"
						}
					}, [n("div", [e._t("popover")], 2), e._v(" "), e.handleResize ? n("ResizeObserver", {
						on: {
							notify: e.$_handleResize
						}
					}) : e._e()], 1), e._v(" "), n("div", {
						ref: "arrow",
						class: e.popoverArrowClass
					})])])])
				},
				vi = [];
			gi._withStripped = !0;
			var bi = void 0,
				yi = void 0,
				_i = void 0,
				wi = !1,
				xi = hi({
					render: gi,
					staticRenderFns: vi
				}, bi, mi, yi, wi, _i, !1, void 0, void 0, void 0),
				ki = function() {
					try {
						var e = Fe(Object, "defineProperty");
						return e({}, "", {}), e
					} catch (fa) {}
				}(),
				Ci = ki;

			function Si(e, t, n) {
				"__proto__" == t && Ci ? Ci(e, t, {
					configurable: !0,
					enumerable: !0,
					value: n,
					writable: !0
				}) : e[t] = n
			}
			var Ai = Si;

			function Oi(e, t, n) {
				(void 0 !== n && !w(e[t], n) || void 0 === n && !(t in e)) && Ai(e, t, n)
			}
			var Ei = Oi;

			function Ti(e) {
				return function(t, n, f) {
					var r = -1,
						i = Object(t),
						o = f(t),
						a = o.length;
					while (a--) {
						var s = o[e ? a : ++r];
						if (!1 === n(i[s], s, i)) break
					}
					return t
				}
			}
			var ji = Ti,
				Li = ji(),
				Ii = Li,
				Mi = q((function(e, t) {
					var n = t && !t.nodeType && t,
						f = n && e && !e.nodeType && e,
						r = f && f.exports === n,
						i = r ? Y.Buffer : void 0,
						o = i ? i.allocUnsafe : void 0;

					function a(e, t) {
						if (t) return e.slice();
						var n = e.length,
							f = o ? o(n) : new e.constructor(n);
						return e.copy(f), f
					}
					e.exports = a
				}));

			function Ni(e) {
				var t = new e.constructor(e.byteLength);
				return new Zt(t).set(new Zt(e)), t
			}
			var Pi = Ni;

			function Bi(e, t) {
				var n = t ? Pi(e.buffer) : e.buffer;
				return new e.constructor(n, e.byteOffset, e.length)
			}
			var $i = Bi;

			function zi(e, t) {
				var n = -1,
					f = e.length;
				t || (t = Array(f));
				while (++n < f) t[n] = e[n];
				return t
			}
			var Ri = zi,
				Di = Object.create,
				Vi = function() {
					function e() {}
					return function(t) {
						if (!me(t)) return {};
						if (Di) return Di(t);
						e.prototype = t;
						var n = new e;
						return e.prototype = void 0, n
					}
				}(),
				Hi = Vi,
				Fi = Ff(Object.getPrototypeOf, Object),
				Ui = Fi;

			function qi(e) {
				return "function" != typeof e.constructor || Vf(e) ? {} : Hi(Ui(e))
			}
			var Wi = qi;

			function Qi(e) {
				return Bn(e) && Jf(e)
			}
			var Gi = Qi,
				Zi = "[object Object]",
				Yi = Function.prototype,
				Ji = Object.prototype,
				Xi = Yi.toString,
				Ki = Ji.hasOwnProperty,
				eo = Xi.call(Object);

			function to(e) {
				if (!Bn(e) || pe(e) != Zi) return !1;
				var t = Ui(e);
				if (null === t) return !0;
				var n = Ki.call(t, "constructor") && t.constructor;
				return "function" == typeof n && n instanceof n && Xi.call(n) == eo
			}
			var no = to;

			function fo(e, t) {
				if (("constructor" !== t || "function" !== typeof e[t]) && "__proto__" != t) return e[t]
			}
			var ro = fo,
				io = Object.prototype,
				oo = io.hasOwnProperty;

			function ao(e, t, n) {
				var f = e[t];
				oo.call(e, t) && w(f, n) && (void 0 !== n || t in e) || Ai(e, t, n)
			}
			var so = ao;

			function co(e, t, n, f) {
				var r = !n;
				n || (n = {});
				var i = -1,
					o = t.length;
				while (++i < o) {
					var a = t[i],
						s = f ? f(n[a], e[a], a, n, e) : void 0;
					void 0 === s && (s = e[a]), r ? Ai(n, a, s) : so(n, a, s)
				}
				return n
			}
			var lo = co;

			function uo(e) {
				var t = [];
				if (null != e)
					for (var n in Object(e)) t.push(n);
				return t
			}
			var po = uo,
				ho = Object.prototype,
				mo = ho.hasOwnProperty;

			function go(e) {
				if (!me(e)) return po(e);
				var t = Vf(e),
					n = [];
				for (var f in e)("constructor" != f || !t && mo.call(e, f)) && n.push(f);
				return n
			}
			var vo = go;

			function bo(e) {
				return Jf(e) ? zf(e, !0) : vo(e)
			}
			var yo = bo;

			function _o(e) {
				return lo(e, yo(e))
			}
			var wo = _o;

			function xo(e, t, n, f, r, i, o) {
				var a = ro(e, n),
					s = ro(t, n),
					c = o.get(s);
				if (c) Ei(e, n, c);
				else {
					var l = i ? i(a, s, n + "", e, t, o) : void 0,
						u = void 0 === l;
					if (u) {
						var d = wn(s),
							p = !d && Qn(s),
							h = !d && !p && Nf(s);
						l = s, d || p || h ? wn(a) ? l = a : Gi(a) ? l = Ri(a) : p ? (u = !1, l = Mi(s, !0)) : h ? (u = !1, l = $i(s, !0)) : l = [] : no(s) || Un(s) ? (l = a, Un(a) ? l = wo(a) : me(a) && !we(a) || (l = Wi(s))) : u = !1
					}
					u && (o.set(s, l), r(l, s, f, i, o), o["delete"](s)), Ei(e, n, l)
				}
			}
			var ko = xo;

			function Co(e, t, n, f, r) {
				e !== t && Ii(t, (function(i, o) {
					if (r || (r = new It), me(i)) ko(e, t, o, n, Co, f, r);
					else {
						var a = f ? f(ro(e, o), i, o + "", e, t, r) : void 0;
						void 0 === a && (a = i), Ei(e, o, a)
					}
				}), yo)
			}
			var So = Co;

			function Ao(e) {
				return e
			}
			var Oo = Ao;

			function Eo(e, t, n) {
				switch (n.length) {
					case 0:
						return e.call(t);
					case 1:
						return e.call(t, n[0]);
					case 2:
						return e.call(t, n[0], n[1]);
					case 3:
						return e.call(t, n[0], n[1], n[2])
				}
				return e.apply(t, n)
			}
			var To = Eo,
				jo = Math.max;

			function Lo(e, t, n) {
				return t = jo(void 0 === t ? e.length - 1 : t, 0),
					function() {
						var f = arguments,
							r = -1,
							i = jo(f.length - t, 0),
							o = Array(i);
						while (++r < i) o[r] = f[t + r];
						r = -1;
						var a = Array(t + 1);
						while (++r < t) a[r] = f[r];
						return a[t] = n(o), To(e, this, a)
					}
			}
			var Io = Lo;

			function Mo(e) {
				return function() {
					return e
				}
			}
			var No = Mo,
				Po = Ci ? function(e, t) {
					return Ci(e, "toString", {
						configurable: !0,
						enumerable: !1,
						value: No(t),
						writable: !0
					})
				} : Oo,
				Bo = Po,
				$o = 800,
				zo = 16,
				Ro = Date.now;

			function Do(e) {
				var t = 0,
					n = 0;
				return function() {
					var f = Ro(),
						r = zo - (f - n);
					if (n = f, r > 0) {
						if (++t >= $o) return arguments[0]
					} else t = 0;
					return e.apply(void 0, arguments)
				}
			}
			var Vo = Do,
				Ho = Vo(Bo),
				Fo = Ho;

			function Uo(e, t) {
				return Fo(Io(e, t, Oo), e + "")
			}
			var qo = Uo;

			function Wo(e, t, n) {
				if (!me(n)) return !1;
				var f = typeof t;
				return !!("number" == f ? Jf(n) && Jn(t, n.length) : "string" == f && t in n) && w(n[t], e)
			}
			var Qo = Wo;

			function Go(e) {
				return qo((function(t, n) {
					var f = -1,
						r = n.length,
						i = r > 1 ? n[r - 1] : void 0,
						o = r > 2 ? n[2] : void 0;
					i = e.length > 3 && "function" == typeof i ? (r--, i) : void 0, o && Qo(n[0], n[1], o) && (i = r < 3 ? void 0 : i, r = 1), t = Object(t);
					while (++f < r) {
						var a = n[f];
						a && e(t, a, f, i)
					}
					return t
				}))
			}
			var Zo = Go,
				Yo = Zo((function(e, t, n) {
					So(e, t, n)
				})),
				Jo = Yo;

			function Xo(e, t) {
				void 0 === t && (t = {});
				var n = t.insertAt;
				if (e && "undefined" !== typeof document) {
					var f = document.head || document.getElementsByTagName("head")[0],
						r = document.createElement("style");
					r.type = "text/css", "top" === n && f.firstChild ? f.insertBefore(r, f.firstChild) : f.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
				}
			}
			var Ko = ".resize-observer[data-v-b329ee4c]{position:absolute;top:0;left:0;z-index:-1;width:100%;height:100%;border:none;background-color:transparent;pointer-events:none;display:block;overflow:hidden;opacity:0}.resize-observer[data-v-b329ee4c] object{display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1}";

			function ea(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				if (!ea.installed) {
					ea.installed = !0;
					var n = {};
					Jo(n, qr, t), ta.options = n, Xr.options = n, e.directive("tooltip", Xr), e.directive("close-popover", ii), e.component("v-popover", xi)
				}
			}
			Xo(Ko);
			var ta = {
					install: ea,
					get enabled() {
						return Fr.enabled
					},
					set enabled(e) {
						Fr.enabled = e
					}
				},
				na = null;
			"undefined" !== typeof window ? na = window.Vue : "undefined" !== typeof e && (na = e.Vue), na && na.use(ta), t["a"] = ta
		}).call(this, n("c8ba"))
	},
	e439: function(e, t, n) {
		var f = n("23e7"),
			r = n("d039"),
			i = n("fc6a"),
			o = n("06cf").f,
			a = n("83ab"),
			s = r((function() {
				o(1)
			})),
			c = !a || s;
		f({
			target: "Object",
			stat: !0,
			forced: c,
			sham: !a
		}, {
			getOwnPropertyDescriptor: function(e, t) {
				return o(i(e), t)
			}
		})
	},
	e538: function(e, t, n) {
		var f = n("b622");
		t.f = f
	},
	e667: function(e, t) {
		e.exports = function(e) {
			try {
				return {
					error: !1,
					value: e()
				}
			} catch (t) {
				return {
					error: !0,
					value: t
				}
			}
		}
	},
	e683: function(e, t, n) {
		"use strict";
		e.exports = function(e, t) {
			return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
		}
	},
	e6cf: function(e, t, n) {
		"use strict";
		var f, r, i, o, a = n("23e7"),
			s = n("c430"),
			c = n("da84"),
			l = n("d066"),
			u = n("fea9"),
			d = n("6eeb"),
			p = n("e2cc"),
			h = n("d44e"),
			m = n("2626"),
			g = n("861d"),
			v = n("1c0b"),
			b = n("19aa"),
			y = n("c6b6"),
			_ = n("8925"),
			w = n("2266"),
			x = n("1c7e"),
			k = n("4840"),
			C = n("2cf4").set,
			S = n("b575"),
			A = n("cdf9"),
			O = n("44de"),
			E = n("f069"),
			T = n("e667"),
			j = n("69f3"),
			L = n("94ca"),
			I = n("b622"),
			M = n("2d00"),
			N = I("species"),
			P = "Promise",
			B = j.get,
			$ = j.set,
			z = j.getterFor(P),
			R = u,
			D = c.TypeError,
			V = c.document,
			H = c.process,
			F = l("fetch"),
			U = E.f,
			q = U,
			W = "process" == y(H),
			Q = !!(V && V.createEvent && c.dispatchEvent),
			G = "unhandledrejection",
			Z = "rejectionhandled",
			Y = 0,
			J = 1,
			X = 2,
			K = 1,
			ee = 2,
			te = L(P, (function() {
				var e = _(R) !== String(R);
				if (!e) {
					if (66 === M) return !0;
					if (!W && "function" != typeof PromiseRejectionEvent) return !0
				}
				if (s && !R.prototype["finally"]) return !0;
				if (M >= 51 && /native code/.test(R)) return !1;
				var t = R.resolve(1),
					n = function(e) {
						e((function() {}), (function() {}))
					},
					f = t.constructor = {};
				return f[N] = n, !(t.then((function() {})) instanceof n)
			})),
			ne = te || !x((function(e) {
				R.all(e)["catch"]((function() {}))
			})),
			fe = function(e) {
				var t;
				return !(!g(e) || "function" != typeof(t = e.then)) && t
			},
			re = function(e, t, n) {
				if (!t.notified) {
					t.notified = !0;
					var f = t.reactions;
					S((function() {
						var r = t.value,
							i = t.state == J,
							o = 0;
						while (f.length > o) {
							var a, s, c, l = f[o++],
								u = i ? l.ok : l.fail,
								d = l.resolve,
								p = l.reject,
								h = l.domain;
							try {
								u ? (i || (t.rejection === ee && se(e, t), t.rejection = K), !0 === u ? a = r : (h && h.enter(), a = u(r), h && (h.exit(), c = !0)), a === l.promise ? p(D("Promise-chain cycle")) : (s = fe(a)) ? s.call(a, d, p) : d(a)) : p(r)
							} catch (m) {
								h && !c && h.exit(), p(m)
							}
						}
						t.reactions = [], t.notified = !1, n && !t.rejection && oe(e, t)
					}))
				}
			},
			ie = function(e, t, n) {
				var f, r;
				Q ? (f = V.createEvent("Event"), f.promise = t, f.reason = n, f.initEvent(e, !1, !0), c.dispatchEvent(f)) : f = {
					promise: t,
					reason: n
				}, (r = c["on" + e]) ? r(f) : e === G && O("Unhandled promise rejection", n)
			},
			oe = function(e, t) {
				C.call(c, (function() {
					var n, f = t.value,
						r = ae(t);
					if (r && (n = T((function() {
							W ? H.emit("unhandledRejection", f, e) : ie(G, e, f)
						})), t.rejection = W || ae(t) ? ee : K, n.error)) throw n.value
				}))
			},
			ae = function(e) {
				return e.rejection !== K && !e.parent
			},
			se = function(e, t) {
				C.call(c, (function() {
					W ? H.emit("rejectionHandled", e) : ie(Z, e, t.value)
				}))
			},
			ce = function(e, t, n, f) {
				return function(r) {
					e(t, n, r, f)
				}
			},
			le = function(e, t, n, f) {
				t.done || (t.done = !0, f && (t = f), t.value = n, t.state = X, re(e, t, !0))
			},
			ue = function(e, t, n, f) {
				if (!t.done) {
					t.done = !0, f && (t = f);
					try {
						if (e === n) throw D("Promise can't be resolved itself");
						var r = fe(n);
						r ? S((function() {
							var f = {
								done: !1
							};
							try {
								r.call(n, ce(ue, e, f, t), ce(le, e, f, t))
							} catch (i) {
								le(e, f, i, t)
							}
						})) : (t.value = n, t.state = J, re(e, t, !1))
					} catch (i) {
						le(e, {
							done: !1
						}, i, t)
					}
				}
			};
		te && (R = function(e) {
			b(this, R, P), v(e), f.call(this);
			var t = B(this);
			try {
				e(ce(ue, this, t), ce(le, this, t))
			} catch (n) {
				le(this, t, n)
			}
		}, f = function(e) {
			$(this, {
				type: P,
				done: !1,
				notified: !1,
				parent: !1,
				reactions: [],
				rejection: !1,
				state: Y,
				value: void 0
			})
		}, f.prototype = p(R.prototype, {
			then: function(e, t) {
				var n = z(this),
					f = U(k(this, R));
				return f.ok = "function" != typeof e || e, f.fail = "function" == typeof t && t, f.domain = W ? H.domain : void 0, n.parent = !0, n.reactions.push(f), n.state != Y && re(this, n, !1), f.promise
			},
			catch: function(e) {
				return this.then(void 0, e)
			}
		}), r = function() {
			var e = new f,
				t = B(e);
			this.promise = e, this.resolve = ce(ue, e, t), this.reject = ce(le, e, t)
		}, E.f = U = function(e) {
			return e === R || e === i ? new r(e) : q(e)
		}, s || "function" != typeof u || (o = u.prototype.then, d(u.prototype, "then", (function(e, t) {
			var n = this;
			return new R((function(e, t) {
				o.call(n, e, t)
			})).then(e, t)
		}), {
			unsafe: !0
		}), "function" == typeof F && a({
			global: !0,
			enumerable: !0,
			forced: !0
		}, {
			fetch: function(e) {
				return A(R, F.apply(c, arguments))
			}
		}))), a({
			global: !0,
			wrap: !0,
			forced: te
		}, {
			Promise: R
		}), h(R, P, !1, !0), m(P), i = l(P), a({
			target: P,
			stat: !0,
			forced: te
		}, {
			reject: function(e) {
				var t = U(this);
				return t.reject.call(void 0, e), t.promise
			}
		}), a({
			target: P,
			stat: !0,
			forced: s || te
		}, {
			resolve: function(e) {
				return A(s && this === i ? R : this, e)
			}
		}), a({
			target: P,
			stat: !0,
			forced: ne
		}, {
			all: function(e) {
				var t = this,
					n = U(t),
					f = n.resolve,
					r = n.reject,
					i = T((function() {
						var n = v(t.resolve),
							i = [],
							o = 0,
							a = 1;
						w(e, (function(e) {
							var s = o++,
								c = !1;
							i.push(void 0), a++, n.call(t, e).then((function(e) {
								c || (c = !0, i[s] = e, --a || f(i))
							}), r)
						})), --a || f(i)
					}));
				return i.error && r(i.value), n.promise
			},
			race: function(e) {
				var t = this,
					n = U(t),
					f = n.reject,
					r = T((function() {
						var r = v(t.resolve);
						w(e, (function(e) {
							r.call(t, e).then(n.resolve, f)
						}))
					}));
				return r.error && f(r.value), n.promise
			}
		})
	},
	e893: function(e, t, n) {
		var f = n("5135"),
			r = n("56ef"),
			i = n("06cf"),
			o = n("9bf2");
		e.exports = function(e, t) {
			for (var n = r(t), a = o.f, s = i.f, c = 0; c < n.length; c++) {
				var l = n[c];
				f(e, l) || a(e, l, s(t, l))
			}
		}
	},
	e8b5: function(e, t, n) {
		var f = n("c6b6");
		e.exports = Array.isArray || function(e) {
			return "Array" == f(e)
		}
	},
	e95a: function(e, t, n) {
		var f = n("b622"),
			r = n("3f8c"),
			i = f("iterator"),
			o = Array.prototype;
		e.exports = function(e) {
			return void 0 !== e && (r.Array === e || o[i] === e)
		}
	},
	edbf: function(e, t, n) {
		"use strict";
		(function(n) {
			(function() {
				var n = this,
					f = n.EmojiConvertor,
					r = function() {
						var e = this;
						return e.img_set = "apple", e.img_sets = {
							apple: {
								path: "/emoji-data/img-apple-64/",
								sheet: "/emoji-data/sheet_apple_64.png",
								sheet_size: 64,
								mask: 1
							},
							google: {
								path: "/emoji-data/img-google-64/",
								sheet: "/emoji-data/sheet_google_64.png",
								sheet_size: 64,
								mask: 2
							},
							twitter: {
								path: "/emoji-data/img-twitter-64/",
								sheet: "/emoji-data/sheet_twitter_64.png",
								sheet_size: 64,
								mask: 4
							},
							facebook: {
								path: "/emoji-data/img-facebook-64/",
								sheet: "/emoji-data/sheet_facebook_64.png",
								sheet_size: 64,
								mask: 8
							},
							messenger: {
								path: "/emoji-data/img-messenger-64/",
								sheet: "/emoji-data/sheet_messenger_64.png",
								sheet_size: 64,
								mask: 16
							}
						}, e.use_css_imgs = !1, e.colons_mode = !1, e.text_mode = !1, e.include_title = !1, e.include_text = !1, e.allow_native = !0, e.wrap_native = !1, e.use_sheet = !1, e.avoid_ms_emoji = !0, e.allow_caps = !1, e.img_suffix = "", e.inits = {}, e.map = {}, e.init_env(), e
					};
				r.prototype.noConflict = function() {
					return n.EmojiConvertor = f, r
				}, r.prototype.replace_emoticons = function(e) {
					var t = this,
						n = t.replace_emoticons_with_colons(e);
					return t.replace_colons(n)
				}, r.prototype.replace_emoticons_with_colons = function(e) {
					var t = this;
					t.init_emoticons();
					var n = 0,
						f = [],
						r = e.replace(t.rx_emoticons, (function(r, i, o, a) {
							var s = n;
							n = a + r.length;
							var c = -1 !== o.indexOf("("),
								l = -1 !== o.indexOf(")");
							if ((c || l) && -1 == f.indexOf(o) && f.push(o), l && !c) {
								var u = e.substring(s, a);
								if (-1 !== u.indexOf("(") && -1 === u.indexOf(")")) return r
							}
							if ("\n8)" === r) {
								var d = e.substring(0, a);
								if (/\n?(6\)|7\))/.test(d)) return r
							}
							var p = t.data[t.map.emoticons[o]][3][0];
							return p ? i + ":" + p + ":" : r
						}));
					if (f.length) {
						var i = f.map(t.escape_rx),
							o = new RegExp("(\\(.+)(" + i.join("|") + ")(.+\\))", "g");
						r = r.replace(o, (function(e, n, f, r) {
							var i = t.data[t.map.emoticons[f]][3][0];
							return i ? n + ":" + i + ":" + r : e
						}))
					}
					return r
				}, r.prototype.replace_colons = function(e) {
					var t = this;
					return t.init_colons(), e.replace(t.rx_colons, (function(e) {
						var n = e.substr(1, e.length - 2);
						if (t.allow_caps && (n = n.toLowerCase()), n.indexOf("::skin-tone-") > -1) {
							var f = n.substr(-1, 1),
								r = "skin-tone-" + f,
								i = t.map.colons[r];
							n = n.substr(0, n.length - 13);
							var o = t.map.colons[n];
							return o ? t.replacement(o, n, ":", {
								idx: i,
								actual: r,
								wrapper: ":"
							}) : ":" + n + ":" + t.replacement(i, r, ":")
						}
						o = t.map.colons[n];
						return o ? t.replacement(o, n, ":") : e
					}))
				}, r.prototype.replace_unified = function(e) {
					var t = this;
					return t.init_unified(), e.replace(t.rx_unified, (function(e, n, f) {
						var r = t.map.unified[n];
						if (r) {
							var i = null;
							return "🏻" == f && (i = "1f3fb"), "🏼" == f && (i = "1f3fc"), "🏽" == f && (i = "1f3fd"), "🏾" == f && (i = "1f3fe"), "🏿" == f && (i = "1f3ff"), i ? t.replacement(r, null, null, {
								idx: i,
								actual: f,
								wrapper: ""
							}) : t.replacement(r)
						}
						return r = t.map.unified_vars[n], r ? t.replacement(r[0], null, null, {
							idx: r[1],
							actual: "",
							wrapper: ""
						}) : e
					}))
				}, r.prototype.addAliases = function(e) {
					var t = this;
					for (var n in t.init_colons(), e) t.map.colons[n] = e[n]
				}, r.prototype.removeAliases = function(e) {
					for (var t = this, n = 0; n < e.length; n++) {
						var f = e[n];
						delete t.map.colons[f];
						e: for (var r in t.data)
							for (var i = 0; i < t.data[r][3].length; i++)
								if (f == t.data[r][3][i]) {
									t.map.colons[f] = r;
									break e
								}
					}
				}, r.prototype.replacement = function(e, t, n, f, r) {
					var i = this,
						o = "",
						a = null;
					if ("object" === typeof f && (o = i.replacement(f.idx, f.actual, f.wrapper, void 0, !0), a = f.idx), n = n || "", i.colons_mode) return ":" + i.data[e][3][0] + ":" + o;
					var s = t ? n + t + n : i.data[e][8] || n + i.data[e][3][0] + n;
					if (i.text_mode) return s + o;
					var c = i.find_image(e, a);
					if (i.init_env(), "softbank" == i.replace_mode && i.allow_native && i.data[e][1]) return i.format_native(i.data[e][1] + o, !r);
					if ("google" == i.replace_mode && i.allow_native && i.data[e][2]) return i.format_native(i.data[e][2] + o, !r);
					if (c.is_var && (o = ""), "unified" == i.replace_mode && i.allow_native) return i.format_native(c.unified + o, !r);
					var l = i.include_title ? ' title="' + (t || i.data[e][3][0]) + '"' : "",
						u = i.include_text ? n + (t || i.data[e][3][0]) + n : "";
					if (i.data[e][7] && (c.path = i.data[e][7], c.px = null, c.py = null, c.is_var = !1), c.is_var && i.include_text && f && f.actual && f.wrapper && (u += f.wrapper + f.actual + f.wrapper), i.supports_css) {
						if (i.use_sheet && null != c.px && null != c.py) {
							var d = i.sheet_size * (c.sheet_size + 2),
								p = (c.px * (c.sheet_size + 2) + 1) / (d - c.sheet_size) * 100,
								h = (c.py * (c.sheet_size + 2) + 1) / (d - c.sheet_size) * 100,
								m = d / c.sheet_size * 100,
								g = "background: url(" + c.sheet + ");background-position:" + p + "% " + h + "%;background-size:" + m + "% " + m + "%";
							return '<span class="emoji-outer emoji-sizer"><span class="emoji-inner" style="' + g + '"' + l + ' data-codepoints="' + c.full_idx + '">' + u + "</span></span>" + o
						}
						return i.use_css_imgs ? '<span class="emoji emoji-' + e + '"' + l + ' data-codepoints="' + c.full_idx + '">' + u + "</span>" + o : '<span class="emoji emoji-sizer" style="background-image:url(' + c.path + ')"' + l + ' data-codepoints="' + c.full_idx + '">' + u + "</span>" + o
					}
					return '<img src="' + c.path + '" class="emoji" data-codepoints="' + c.full_idx + '" ' + l + "/>" + o
				}, r.prototype.format_native = function(e, t) {
					var n = this;
					return n.wrap_native && t ? '<span class="emoji-native">' + e + "</span>" : e
				}, r.prototype.find_image = function(e, t) {
					var n = this,
						f = {
							path: "",
							sheet: "",
							sheet_size: 0,
							px: n.data[e][4],
							py: n.data[e][5],
							full_idx: e,
							is_var: !1,
							unified: n.data[e][0][0]
						},
						r = n.data[e][6];
					if (t && n.variations_data[e] && n.variations_data[e][t]) {
						var i = n.variations_data[e][t];
						f.px = i[1], f.py = i[2], f.full_idx = i[0], f.is_var = !0, f.unified = i[4], r = i[3]
					}
					for (var o = [n.img_set, "apple", "google", "twitter", "facebook", "messenger"], a = 0; a < o.length; a++) {
						if (r & n.img_sets[o[a]].mask) return f.path = n.img_sets[o[a]].path + f.full_idx + ".png" + n.img_suffix, f.sheet = n.img_sets[n.img_set].sheet, f.sheet_size = n.img_sets[n.img_set].sheet_size, f;
						if (n.obsoletes_data[f.full_idx]) {
							var s = n.obsoletes_data[f.full_idx];
							if (s[3] & n.img_sets[o[a]].mask) return f.path = n.img_sets[o[a]].path + s[0] + ".png" + n.img_suffix, f.sheet = n.img_sets[o[a]].sheet, f.sheet_size = n.img_sets[o[a]].sheet_size, f.px = s[1], f.py = s[2], f
						}
					}
					return f
				}, r.prototype.init_emoticons = function() {
					var e = this;
					if (!e.inits.emoticons) {
						e.init_colons(), e.inits.emoticons = 1;
						var t = [];
						for (var n in e.map.emoticons = {}, e.emoticons_data) {
							var f = n.replace(/\&/g, "&amp;").replace(/\</g, "&lt;").replace(/\>/g, "&gt;");
							e.map.colons[e.emoticons_data[n]] && (e.map.emoticons[f] = e.map.colons[e.emoticons_data[n]], t.push(e.escape_rx(f)))
						}
						e.rx_emoticons = new RegExp("(^|\\s)(" + t.join("|") + ")(?=$|[\\s|\\?\\.,!])", "g")
					}
				}, r.prototype.init_colons = function() {
					var e = this;
					if (!e.inits.colons)
						for (var t in e.inits.colons = 1, e.rx_colons = new RegExp(":[a-zA-Z0-9-_+]+:(:skin-tone-[2-6]:)?", "g"), e.map.colons = {}, e.data)
							for (var n = 0; n < e.data[t][3].length; n++) e.map.colons[e.data[t][3][n]] = t
				}, r.prototype.init_unified = function() {
					var e = this;
					if (!e.inits.unified) {
						e.inits.unified = 1;
						var t = [];
						for (var n in e.map.unified = {}, e.map.unified_vars = {}, e.data)
							for (var f = 0; f < e.data[n][0].length; f++) t.push(e.data[n][0][f].replace("*", "\\*")), e.map.unified[e.data[n][0][f]] = n;
						for (var n in e.variations_data)
							if (e.variations_data[n]["1f3fb"][0] != n + "-1f3fb")
								for (var r in e.variations_data[n])
									for (f = 0; f < e.variations_data[n][r][4].length; f++) t.push(e.variations_data[n][r][4][f].replace("*", "\\*")), e.map.unified_vars[e.variations_data[n][r][4][f]] = [n, r];
						t = t.sort((function(e, t) {
							return t.length - e.length
						})), e.rx_unified = new RegExp("(" + t.join("|") + ")(\ud83c[\udffb-\udfff])?", "g")
					}
				}, r.prototype.init_env = function() {
					var e = this;
					if (!e.inits.env) {
						if (e.inits.env = 1, e.replace_mode = "img", e.supports_css = !1, "undefined" !== typeof navigator) {
							var t = navigator.userAgent;
							if ("undefined" !== typeof window && window.getComputedStyle) try {
								var n = window.getComputedStyle(document.body);
								(n["background-size"] || n["backgroundSize"]) && (e.supports_css = !0)
							} catch (f) {
								t.match(/Firefox/i) && (e.supports_css = !0)
							}
							if (navigator.product.match(/ReactNative/i)) return void(e.replace_mode = "unified");
							if (t.match(/(iPhone|iPod|iPad|iPhone\s+Simulator)/i)) {
								if (t.match(/OS\s+[12345]/i)) return void(e.replace_mode = "softbank");
								if (t.match(/OS\s+[6789]/i)) return void(e.replace_mode = "unified")
							}
							if (t.match(/Mac OS X 10[._ ](?:[789]|1\d)/i)) return void(e.replace_mode = "unified");
							if (!e.avoid_ms_emoji && (t.match(/Windows NT 6.[1-9]/i) || t.match(/Windows NT 10.[0-9]/i)) && !t.match(/Chrome/i) && !t.match(/MSIE 8/i)) return void(e.replace_mode = "unified")
						}
						0, e.supports_css && (e.replace_mode = "css")
					}
				}, r.prototype.escape_rx = function(e) {
					return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
				}, r.prototype.sheet_size = 52, r.prototype.data = {
					"0023-fe0f-20e3": [
						["#️⃣", "#⃣"], "", "󾠬", ["hash"], 0, 0, 7, 0
					],
					"002a-fe0f-20e3": [
						["*️⃣", "*⃣"], "", "", ["keycap_star"], 0, 1, 7, 0
					],
					"0030-fe0f-20e3": [
						["0️⃣", "0⃣"], "", "󾠷", ["zero"], 0, 2, 7, 0
					],
					"0031-fe0f-20e3": [
						["1️⃣", "1⃣"], "", "󾠮", ["one"], 0, 3, 7, 0
					],
					"0032-fe0f-20e3": [
						["2️⃣", "2⃣"], "", "󾠯", ["two"], 0, 4, 7, 0
					],
					"0033-fe0f-20e3": [
						["3️⃣", "3⃣"], "", "󾠰", ["three"], 0, 5, 7, 0
					],
					"0034-fe0f-20e3": [
						["4️⃣", "4⃣"], "", "󾠱", ["four"], 0, 6, 7, 0
					],
					"0035-fe0f-20e3": [
						["5️⃣", "5⃣"], "", "󾠲", ["five"], 0, 7, 7, 0
					],
					"0036-fe0f-20e3": [
						["6️⃣", "6⃣"], "", "󾠳", ["six"], 0, 8, 7, 0
					],
					"0037-fe0f-20e3": [
						["7️⃣", "7⃣"], "", "󾠴", ["seven"], 0, 9, 7, 0
					],
					"0038-fe0f-20e3": [
						["8️⃣", "8⃣"], "", "󾠵", ["eight"], 0, 10, 7, 0
					],
					"0039-fe0f-20e3": [
						["9️⃣", "9⃣"], "", "󾠶", ["nine"], 0, 11, 7, 0
					],
					"00a9-fe0f": [
						["©️", "©"], "", "󾬩", ["copyright"], 0, 12, 3, 0
					],
					"00ae-fe0f": [
						["®️", "®"], "", "󾬭", ["registered"], 0, 13, 3, 0
					],
					"1f004": [
						["🀄"], "", "󾠋", ["mahjong"], 0, 14, 31, 0
					],
					"1f0cf": [
						["🃏"], "", "󾠒", ["black_joker"], 0, 15, 31, 0
					],
					"1f170-fe0f": [
						["🅰️", "🅰"], "", "󾔋", ["a"], 0, 16, 31, 0
					],
					"1f171-fe0f": [
						["🅱️", "🅱"], "", "󾔌", ["b"], 0, 17, 31, 0
					],
					"1f17e-fe0f": [
						["🅾️", "🅾"], "", "󾔎", ["o2"], 0, 18, 31, 0
					],
					"1f17f-fe0f": [
						["🅿️", "🅿"], "", "󾟶", ["parking"], 0, 19, 31, 0
					],
					"1f18e": [
						["🆎"], "", "󾔍", ["ab"], 0, 20, 31, 0
					],
					"1f191": [
						["🆑"], "", "󾮄", ["cl"], 0, 21, 31, 0
					],
					"1f192": [
						["🆒"], "", "󾬸", ["cool"], 0, 22, 31, 0
					],
					"1f193": [
						["🆓"], "", "󾬡", [""], 0, 23, 31, 0
					],
					"1f194": [
						["🆔"], "", "󾮁", ["id"], 0, 24, 31, 0
					],
					"1f195": [
						["🆕"], "", "󾬶", ["new"], 0, 25, 31, 0
					],
					"1f196": [
						["🆖"], "", "󾬨", ["ng"], 0, 26, 31, 0
					],
					"1f197": [
						["🆗"], "", "󾬧", ["ok"], 0, 27, 31, 0
					],
					"1f198": [
						["🆘"], "", "󾭏", ["sos"], 0, 28, 31, 0
					],
					"1f199": [
						["🆙"], "", "󾬷", ["up"], 0, 29, 31, 0
					],
					"1f19a": [
						["🆚"], "", "󾬲", ["vs"], 0, 30, 31, 0
					],
					"1f1e6-1f1e8": [
						["🇦🇨"], "", "", ["flag-ac"], 0, 31, 31, 0
					],
					"1f1e6-1f1e9": [
						["🇦🇩"], "", "", ["flag-ad"], 0, 32, 31, 0
					],
					"1f1e6-1f1ea": [
						["🇦🇪"], "", "", ["flag-ae"], 0, 33, 31, 0
					],
					"1f1e6-1f1eb": [
						["🇦🇫"], "", "", ["flag-af"], 0, 34, 31, 0
					],
					"1f1e6-1f1ec": [
						["🇦🇬"], "", "", ["flag-ag"], 0, 35, 31, 0
					],
					"1f1e6-1f1ee": [
						["🇦🇮"], "", "", ["flag-ai"], 0, 36, 31, 0
					],
					"1f1e6-1f1f1": [
						["🇦🇱"], "", "", ["flag-al"], 0, 37, 31, 0
					],
					"1f1e6-1f1f2": [
						["🇦🇲"], "", "", ["flag-am"], 0, 38, 31, 0
					],
					"1f1e6-1f1f4": [
						["🇦🇴"], "", "", ["flag-ao"], 0, 39, 31, 0
					],
					"1f1e6-1f1f6": [
						["🇦🇶"], "", "", ["flag-aq"], 0, 40, 31, 0
					],
					"1f1e6-1f1f7": [
						["🇦🇷"], "", "", ["flag-ar"], 0, 41, 31, 0
					],
					"1f1e6-1f1f8": [
						["🇦🇸"], "", "", ["flag-as"], 0, 42, 31, 0
					],
					"1f1e6-1f1f9": [
						["🇦🇹"], "", "", ["flag-at"], 0, 43, 31, 0
					],
					"1f1e6-1f1fa": [
						["🇦🇺"], "", "", ["flag-au"], 0, 44, 31, 0
					],
					"1f1e6-1f1fc": [
						["🇦🇼"], "", "", ["flag-aw"], 0, 45, 31, 0
					],
					"1f1e6-1f1fd": [
						["🇦🇽"], "", "", ["flag-ax"], 0, 46, 31, 0
					],
					"1f1e6-1f1ff": [
						["🇦🇿"], "", "", ["flag-az"], 0, 47, 31, 0
					],
					"1f1e7-1f1e6": [
						["🇧🇦"], "", "", ["flag-ba"], 0, 48, 15, 0
					],
					"1f1e7-1f1e7": [
						["🇧🇧"], "", "", ["flag-bb"], 0, 49, 31, 0
					],
					"1f1e7-1f1e9": [
						["🇧🇩"], "", "", ["flag-bd"], 0, 50, 31, 0
					],
					"1f1e7-1f1ea": [
						["🇧🇪"], "", "", ["flag-be"], 0, 51, 31, 0
					],
					"1f1e7-1f1eb": [
						["🇧🇫"], "", "", ["flag-bf"], 1, 0, 31, 0
					],
					"1f1e7-1f1ec": [
						["🇧🇬"], "", "", ["flag-bg"], 1, 1, 31, 0
					],
					"1f1e7-1f1ed": [
						["🇧🇭"], "", "", ["flag-bh"], 1, 2, 31, 0
					],
					"1f1e7-1f1ee": [
						["🇧🇮"], "", "", ["flag-bi"], 1, 3, 31, 0
					],
					"1f1e7-1f1ef": [
						["🇧🇯"], "", "", ["flag-bj"], 1, 4, 31, 0
					],
					"1f1e7-1f1f1": [
						["🇧🇱"], "", "", ["flag-bl"], 1, 5, 29, 0
					],
					"1f1e7-1f1f2": [
						["🇧🇲"], "", "", ["flag-bm"], 1, 6, 31, 0
					],
					"1f1e7-1f1f3": [
						["🇧🇳"], "", "", ["flag-bn"], 1, 7, 15, 0
					],
					"1f1e7-1f1f4": [
						["🇧🇴"], "", "", ["flag-bo"], 1, 8, 31, 0
					],
					"1f1e7-1f1f6": [
						["🇧🇶"], "", "", ["flag-bq"], 1, 9, 29, 0
					],
					"1f1e7-1f1f7": [
						["🇧🇷"], "", "", ["flag-br"], 1, 10, 31, 0
					],
					"1f1e7-1f1f8": [
						["🇧🇸"], "", "", ["flag-bs"], 1, 11, 31, 0
					],
					"1f1e7-1f1f9": [
						["🇧🇹"], "", "", ["flag-bt"], 1, 12, 31, 0
					],
					"1f1e7-1f1fb": [
						["🇧🇻"], "", "", ["flag-bv"], 1, 13, 31, 0
					],
					"1f1e7-1f1fc": [
						["🇧🇼"], "", "", ["flag-bw"], 1, 14, 31, 0
					],
					"1f1e7-1f1fe": [
						["🇧🇾"], "", "", ["flag-by"], 1, 15, 31, 0
					],
					"1f1e7-1f1ff": [
						["🇧🇿"], "", "", ["flag-bz"], 1, 16, 31, 0
					],
					"1f1e8-1f1e6": [
						["🇨🇦"], "", "", ["flag-ca"], 1, 17, 31, 0
					],
					"1f1e8-1f1e8": [
						["🇨🇨"], "", "", ["flag-cc"], 1, 18, 31, 0
					],
					"1f1e8-1f1e9": [
						["🇨🇩"], "", "", ["flag-cd"], 1, 19, 31, 0
					],
					"1f1e8-1f1eb": [
						["🇨🇫"], "", "", ["flag-cf"], 1, 20, 31, 0
					],
					"1f1e8-1f1ec": [
						["🇨🇬"], "", "", ["flag-cg"], 1, 21, 31, 0
					],
					"1f1e8-1f1ed": [
						["🇨🇭"], "", "", ["flag-ch"], 1, 22, 31, 0
					],
					"1f1e8-1f1ee": [
						["🇨🇮"], "", "", ["flag-ci"], 1, 23, 31, 0
					],
					"1f1e8-1f1f0": [
						["🇨🇰"], "", "", ["flag-ck"], 1, 24, 31, 0
					],
					"1f1e8-1f1f1": [
						["🇨🇱"], "", "", ["flag-cl"], 1, 25, 31, 0
					],
					"1f1e8-1f1f2": [
						["🇨🇲"], "", "", ["flag-cm"], 1, 26, 31, 0
					],
					"1f1e8-1f1f3": [
						["🇨🇳"], "", "󾓭", ["cn", "flag-cn"], 1, 27, 31, 0
					],
					"1f1e8-1f1f4": [
						["🇨🇴"], "", "", ["flag-co"], 1, 28, 31, 0
					],
					"1f1e8-1f1f5": [
						["🇨🇵"], "", "", ["flag-cp"], 1, 29, 15, 0
					],
					"1f1e8-1f1f7": [
						["🇨🇷"], "", "", ["flag-cr"], 1, 30, 31, 0
					],
					"1f1e8-1f1fa": [
						["🇨🇺"], "", "", ["flag-cu"], 1, 31, 31, 0
					],
					"1f1e8-1f1fb": [
						["🇨🇻"], "", "", ["flag-cv"], 1, 32, 31, 0
					],
					"1f1e8-1f1fc": [
						["🇨🇼"], "", "", ["flag-cw"], 1, 33, 31, 0
					],
					"1f1e8-1f1fd": [
						["🇨🇽"], "", "", ["flag-cx"], 1, 34, 31, 0
					],
					"1f1e8-1f1fe": [
						["🇨🇾"], "", "", ["flag-cy"], 1, 35, 31, 0
					],
					"1f1e8-1f1ff": [
						["🇨🇿"], "", "", ["flag-cz"], 1, 36, 31, 0
					],
					"1f1e9-1f1ea": [
						["🇩🇪"], "", "󾓨", ["de", "flag-de"], 1, 37, 31, 0
					],
					"1f1e9-1f1ec": [
						["🇩🇬"], "", "", ["flag-dg"], 1, 38, 29, 0
					],
					"1f1e9-1f1ef": [
						["🇩🇯"], "", "", ["flag-dj"], 1, 39, 31, 0
					],
					"1f1e9-1f1f0": [
						["🇩🇰"], "", "", ["flag-dk"], 1, 40, 31, 0
					],
					"1f1e9-1f1f2": [
						["🇩🇲"], "", "", ["flag-dm"], 1, 41, 31, 0
					],
					"1f1e9-1f1f4": [
						["🇩🇴"], "", "", ["flag-do"], 1, 42, 31, 0
					],
					"1f1e9-1f1ff": [
						["🇩🇿"], "", "", ["flag-dz"], 1, 43, 31, 0
					],
					"1f1ea-1f1e6": [
						["🇪🇦"], "", "", ["flag-ea"], 1, 44, 29, 0
					],
					"1f1ea-1f1e8": [
						["🇪🇨"], "", "", ["flag-ec"], 1, 45, 31, 0
					],
					"1f1ea-1f1ea": [
						["🇪🇪"], "", "", ["flag-ee"], 1, 46, 31, 0
					],
					"1f1ea-1f1ec": [
						["🇪🇬"], "", "", ["flag-eg"], 1, 47, 31, 0
					],
					"1f1ea-1f1ed": [
						["🇪🇭"], "", "", ["flag-eh"], 1, 48, 29, 0
					],
					"1f1ea-1f1f7": [
						["🇪🇷"], "", "", ["flag-er"], 1, 49, 31, 0
					],
					"1f1ea-1f1f8": [
						["🇪🇸"], "", "󾓫", ["es", "flag-es"], 1, 50, 31, 0
					],
					"1f1ea-1f1f9": [
						["🇪🇹"], "", "", ["flag-et"], 1, 51, 31, 0
					],
					"1f1ea-1f1fa": [
						["🇪🇺"], "", "", ["flag-eu"], 2, 0, 31, 0
					],
					"1f1eb-1f1ee": [
						["🇫🇮"], "", "", ["flag-fi"], 2, 1, 31, 0
					],
					"1f1eb-1f1ef": [
						["🇫🇯"], "", "", ["flag-fj"], 2, 2, 31, 0
					],
					"1f1eb-1f1f0": [
						["🇫🇰"], "", "", ["flag-fk"], 2, 3, 29, 0
					],
					"1f1eb-1f1f2": [
						["🇫🇲"], "", "", ["flag-fm"], 2, 4, 31, 0
					],
					"1f1eb-1f1f4": [
						["🇫🇴"], "", "", ["flag-fo"], 2, 5, 31, 0
					],
					"1f1eb-1f1f7": [
						["🇫🇷"], "", "󾓧", ["fr", "flag-fr"], 2, 6, 31, 0
					],
					"1f1ec-1f1e6": [
						["🇬🇦"], "", "", ["flag-ga"], 2, 7, 31, 0
					],
					"1f1ec-1f1e7": [
						["🇬🇧"], "", "󾓪", ["gb", "uk", "flag-gb"], 2, 8, 31, 0
					],
					"1f1ec-1f1e9": [
						["🇬🇩"], "", "", ["flag-gd"], 2, 9, 31, 0
					],
					"1f1ec-1f1ea": [
						["🇬🇪"], "", "", ["flag-ge"], 2, 10, 31, 0
					],
					"1f1ec-1f1eb": [
						["🇬🇫"], "", "", ["flag-gf"], 2, 11, 29, 0
					],
					"1f1ec-1f1ec": [
						["🇬🇬"], "", "", ["flag-gg"], 2, 12, 31, 0
					],
					"1f1ec-1f1ed": [
						["🇬🇭"], "", "", ["flag-gh"], 2, 13, 31, 0
					],
					"1f1ec-1f1ee": [
						["🇬🇮"], "", "", ["flag-gi"], 2, 14, 31, 0
					],
					"1f1ec-1f1f1": [
						["🇬🇱"], "", "", ["flag-gl"], 2, 15, 31, 0
					],
					"1f1ec-1f1f2": [
						["🇬🇲"], "", "", ["flag-gm"], 2, 16, 31, 0
					],
					"1f1ec-1f1f3": [
						["🇬🇳"], "", "", ["flag-gn"], 2, 17, 31, 0
					],
					"1f1ec-1f1f5": [
						["🇬🇵"], "", "", ["flag-gp"], 2, 18, 29, 0
					],
					"1f1ec-1f1f6": [
						["🇬🇶"], "", "", ["flag-gq"], 2, 19, 31, 0
					],
					"1f1ec-1f1f7": [
						["🇬🇷"], "", "", ["flag-gr"], 2, 20, 31, 0
					],
					"1f1ec-1f1f8": [
						["🇬🇸"], "", "", ["flag-gs"], 2, 21, 29, 0
					],
					"1f1ec-1f1f9": [
						["🇬🇹"], "", "", ["flag-gt"], 2, 22, 31, 0
					],
					"1f1ec-1f1fa": [
						["🇬🇺"], "", "", ["flag-gu"], 2, 23, 31, 0
					],
					"1f1ec-1f1fc": [
						["🇬🇼"], "", "", ["flag-gw"], 2, 24, 31, 0
					],
					"1f1ec-1f1fe": [
						["🇬🇾"], "", "", ["flag-gy"], 2, 25, 31, 0
					],
					"1f1ed-1f1f0": [
						["🇭🇰"], "", "", ["flag-hk"], 2, 26, 31, 0
					],
					"1f1ed-1f1f2": [
						["🇭🇲"], "", "", ["flag-hm"], 2, 27, 31, 0
					],
					"1f1ed-1f1f3": [
						["🇭🇳"], "", "", ["flag-hn"], 2, 28, 31, 0
					],
					"1f1ed-1f1f7": [
						["🇭🇷"], "", "", ["flag-hr"], 2, 29, 31, 0
					],
					"1f1ed-1f1f9": [
						["🇭🇹"], "", "", ["flag-ht"], 2, 30, 31, 0
					],
					"1f1ed-1f1fa": [
						["🇭🇺"], "", "", ["flag-hu"], 2, 31, 31, 0
					],
					"1f1ee-1f1e8": [
						["🇮🇨"], "", "", ["flag-ic"], 2, 32, 31, 0
					],
					"1f1ee-1f1e9": [
						["🇮🇩"], "", "", ["flag-id"], 2, 33, 31, 0
					],
					"1f1ee-1f1ea": [
						["🇮🇪"], "", "", ["flag-ie"], 2, 34, 31, 0
					],
					"1f1ee-1f1f1": [
						["🇮🇱"], "", "", ["flag-il"], 2, 35, 31, 0
					],
					"1f1ee-1f1f2": [
						["🇮🇲"], "", "", ["flag-im"], 2, 36, 31, 0
					],
					"1f1ee-1f1f3": [
						["🇮🇳"], "", "", ["flag-in"], 2, 37, 31, 0
					],
					"1f1ee-1f1f4": [
						["🇮🇴"], "", "", ["flag-io"], 2, 38, 31, 0
					],
					"1f1ee-1f1f6": [
						["🇮🇶"], "", "", ["flag-iq"], 2, 39, 31, 0
					],
					"1f1ee-1f1f7": [
						["🇮🇷"], "", "", ["flag-ir"], 2, 40, 31, 0
					],
					"1f1ee-1f1f8": [
						["🇮🇸"], "", "", ["flag-is"], 2, 41, 31, 0
					],
					"1f1ee-1f1f9": [
						["🇮🇹"], "", "󾓩", ["it", "flag-it"], 2, 42, 31, 0
					],
					"1f1ef-1f1ea": [
						["🇯🇪"], "", "", ["flag-je"], 2, 43, 31, 0
					],
					"1f1ef-1f1f2": [
						["🇯🇲"], "", "", ["flag-jm"], 2, 44, 31, 0
					],
					"1f1ef-1f1f4": [
						["🇯🇴"], "", "", ["flag-jo"], 2, 45, 31, 0
					],
					"1f1ef-1f1f5": [
						["🇯🇵"], "", "󾓥", ["jp", "flag-jp"], 2, 46, 31, 0
					],
					"1f1f0-1f1ea": [
						["🇰🇪"], "", "", ["flag-ke"], 2, 47, 31, 0
					],
					"1f1f0-1f1ec": [
						["🇰🇬"], "", "", ["flag-kg"], 2, 48, 31, 0
					],
					"1f1f0-1f1ed": [
						["🇰🇭"], "", "", ["flag-kh"], 2, 49, 31, 0
					],
					"1f1f0-1f1ee": [
						["🇰🇮"], "", "", ["flag-ki"], 2, 50, 31, 0
					],
					"1f1f0-1f1f2": [
						["🇰🇲"], "", "", ["flag-km"], 2, 51, 31, 0
					],
					"1f1f0-1f1f3": [
						["🇰🇳"], "", "", ["flag-kn"], 3, 0, 31, 0
					],
					"1f1f0-1f1f5": [
						["🇰🇵"], "", "", ["flag-kp"], 3, 1, 31, 0
					],
					"1f1f0-1f1f7": [
						["🇰🇷"], "", "󾓮", ["kr", "flag-kr"], 3, 2, 31, 0
					],
					"1f1f0-1f1fc": [
						["🇰🇼"], "", "", ["flag-kw"], 3, 3, 31, 0
					],
					"1f1f0-1f1fe": [
						["🇰🇾"], "", "", ["flag-ky"], 3, 4, 31, 0
					],
					"1f1f0-1f1ff": [
						["🇰🇿"], "", "", ["flag-kz"], 3, 5, 31, 0
					],
					"1f1f1-1f1e6": [
						["🇱🇦"], "", "", ["flag-la"], 3, 6, 31, 0
					],
					"1f1f1-1f1e7": [
						["🇱🇧"], "", "", ["flag-lb"], 3, 7, 31, 0
					],
					"1f1f1-1f1e8": [
						["🇱🇨"], "", "", ["flag-lc"], 3, 8, 31, 0
					],
					"1f1f1-1f1ee": [
						["🇱🇮"], "", "", ["flag-li"], 3, 9, 31, 0
					],
					"1f1f1-1f1f0": [
						["🇱🇰"], "", "", ["flag-lk"], 3, 10, 31, 0
					],
					"1f1f1-1f1f7": [
						["🇱🇷"], "", "", ["flag-lr"], 3, 11, 31, 0
					],
					"1f1f1-1f1f8": [
						["🇱🇸"], "", "", ["flag-ls"], 3, 12, 31, 0
					],
					"1f1f1-1f1f9": [
						["🇱🇹"], "", "", ["flag-lt"], 3, 13, 31, 0
					],
					"1f1f1-1f1fa": [
						["🇱🇺"], "", "", ["flag-lu"], 3, 14, 31, 0
					],
					"1f1f1-1f1fb": [
						["🇱🇻"], "", "", ["flag-lv"], 3, 15, 31, 0
					],
					"1f1f1-1f1fe": [
						["🇱🇾"], "", "", ["flag-ly"], 3, 16, 31, 0
					],
					"1f1f2-1f1e6": [
						["🇲🇦"], "", "", ["flag-ma"], 3, 17, 31, 0
					],
					"1f1f2-1f1e8": [
						["🇲🇨"], "", "", ["flag-mc"], 3, 18, 31, 0
					],
					"1f1f2-1f1e9": [
						["🇲🇩"], "", "", ["flag-md"], 3, 19, 31, 0
					],
					"1f1f2-1f1ea": [
						["🇲🇪"], "", "", ["flag-me"], 3, 20, 31, 0
					],
					"1f1f2-1f1eb": [
						["🇲🇫"], "", "", ["flag-mf"], 3, 21, 29, 0
					],
					"1f1f2-1f1ec": [
						["🇲🇬"], "", "", ["flag-mg"], 3, 22, 31, 0
					],
					"1f1f2-1f1ed": [
						["🇲🇭"], "", "", ["flag-mh"], 3, 23, 31, 0
					],
					"1f1f2-1f1f0": [
						["🇲🇰"], "", "", ["flag-mk"], 3, 24, 31, 0
					],
					"1f1f2-1f1f1": [
						["🇲🇱"], "", "", ["flag-ml"], 3, 25, 31, 0
					],
					"1f1f2-1f1f2": [
						["🇲🇲"], "", "", ["flag-mm"], 3, 26, 31, 0
					],
					"1f1f2-1f1f3": [
						["🇲🇳"], "", "", ["flag-mn"], 3, 27, 31, 0
					],
					"1f1f2-1f1f4": [
						["🇲🇴"], "", "", ["flag-mo"], 3, 28, 31, 0
					],
					"1f1f2-1f1f5": [
						["🇲🇵"], "", "", ["flag-mp"], 3, 29, 31, 0
					],
					"1f1f2-1f1f6": [
						["🇲🇶"], "", "", ["flag-mq"], 3, 30, 29, 0
					],
					"1f1f2-1f1f7": [
						["🇲🇷"], "", "", ["flag-mr"], 3, 31, 31, 0
					],
					"1f1f2-1f1f8": [
						["🇲🇸"], "", "", ["flag-ms"], 3, 32, 31, 0
					],
					"1f1f2-1f1f9": [
						["🇲🇹"], "", "", ["flag-mt"], 3, 33, 31, 0
					],
					"1f1f2-1f1fa": [
						["🇲🇺"], "", "", ["flag-mu"], 3, 34, 31, 0
					],
					"1f1f2-1f1fb": [
						["🇲🇻"], "", "", ["flag-mv"], 3, 35, 31, 0
					],
					"1f1f2-1f1fc": [
						["🇲🇼"], "", "", ["flag-mw"], 3, 36, 31, 0
					],
					"1f1f2-1f1fd": [
						["🇲🇽"], "", "", ["flag-mx"], 3, 37, 31, 0
					],
					"1f1f2-1f1fe": [
						["🇲🇾"], "", "", ["flag-my"], 3, 38, 31, 0
					],
					"1f1f2-1f1ff": [
						["🇲🇿"], "", "", ["flag-mz"], 3, 39, 31, 0
					],
					"1f1f3-1f1e6": [
						["🇳🇦"], "", "", ["flag-na"], 3, 40, 31, 0
					],
					"1f1f3-1f1e8": [
						["🇳🇨"], "", "", ["flag-nc"], 3, 41, 29, 0
					],
					"1f1f3-1f1ea": [
						["🇳🇪"], "", "", ["flag-ne"], 3, 42, 31, 0
					],
					"1f1f3-1f1eb": [
						["🇳🇫"], "", "", ["flag-nf"], 3, 43, 31, 0
					],
					"1f1f3-1f1ec": [
						["🇳🇬"], "", "", ["flag-ng"], 3, 44, 31, 0
					],
					"1f1f3-1f1ee": [
						["🇳🇮"], "", "", ["flag-ni"], 3, 45, 31, 0
					],
					"1f1f3-1f1f1": [
						["🇳🇱"], "", "", ["flag-nl"], 3, 46, 31, 0
					],
					"1f1f3-1f1f4": [
						["🇳🇴"], "", "", ["flag-no"], 3, 47, 31, 0
					],
					"1f1f3-1f1f5": [
						["🇳🇵"], "", "", ["flag-np"], 3, 48, 31, 0
					],
					"1f1f3-1f1f7": [
						["🇳🇷"], "", "", ["flag-nr"], 3, 49, 31, 0
					],
					"1f1f3-1f1fa": [
						["🇳🇺"], "", "", ["flag-nu"], 3, 50, 31, 0
					],
					"1f1f3-1f1ff": [
						["🇳🇿"], "", "", ["flag-nz"], 3, 51, 31, 0
					],
					"1f1f4-1f1f2": [
						["🇴🇲"], "", "", ["flag-om"], 4, 0, 31, 0
					],
					"1f1f5-1f1e6": [
						["🇵🇦"], "", "", ["flag-pa"], 4, 1, 31, 0
					],
					"1f1f5-1f1ea": [
						["🇵🇪"], "", "", ["flag-pe"], 4, 2, 31, 0
					],
					"1f1f5-1f1eb": [
						["🇵🇫"], "", "", ["flag-pf"], 4, 3, 31, 0
					],
					"1f1f5-1f1ec": [
						["🇵🇬"], "", "", ["flag-pg"], 4, 4, 31, 0
					],
					"1f1f5-1f1ed": [
						["🇵🇭"], "", "", ["flag-ph"], 4, 5, 31, 0
					],
					"1f1f5-1f1f0": [
						["🇵🇰"], "", "", ["flag-pk"], 4, 6, 31, 0
					],
					"1f1f5-1f1f1": [
						["🇵🇱"], "", "", ["flag-pl"], 4, 7, 31, 0
					],
					"1f1f5-1f1f2": [
						["🇵🇲"], "", "", ["flag-pm"], 4, 8, 29, 0
					],
					"1f1f5-1f1f3": [
						["🇵🇳"], "", "", ["flag-pn"], 4, 9, 31, 0
					],
					"1f1f5-1f1f7": [
						["🇵🇷"], "", "", ["flag-pr"], 4, 10, 31, 0
					],
					"1f1f5-1f1f8": [
						["🇵🇸"], "", "", ["flag-ps"], 4, 11, 31, 0
					],
					"1f1f5-1f1f9": [
						["🇵🇹"], "", "", ["flag-pt"], 4, 12, 31, 0
					],
					"1f1f5-1f1fc": [
						["🇵🇼"], "", "", ["flag-pw"], 4, 13, 31, 0
					],
					"1f1f5-1f1fe": [
						["🇵🇾"], "", "", ["flag-py"], 4, 14, 31, 0
					],
					"1f1f6-1f1e6": [
						["🇶🇦"], "", "", ["flag-qa"], 4, 15, 31, 0
					],
					"1f1f7-1f1ea": [
						["🇷🇪"], "", "", ["flag-re"], 4, 16, 29, 0
					],
					"1f1f7-1f1f4": [
						["🇷🇴"], "", "", ["flag-ro"], 4, 17, 31, 0
					],
					"1f1f7-1f1f8": [
						["🇷🇸"], "", "", ["flag-rs"], 4, 18, 31, 0
					],
					"1f1f7-1f1fa": [
						["🇷🇺"], "", "󾓬", ["ru", "flag-ru"], 4, 19, 31, 0
					],
					"1f1f7-1f1fc": [
						["🇷🇼"], "", "", ["flag-rw"], 4, 20, 31, 0
					],
					"1f1f8-1f1e6": [
						["🇸🇦"], "", "", ["flag-sa"], 4, 21, 31, 0
					],
					"1f1f8-1f1e7": [
						["🇸🇧"], "", "", ["flag-sb"], 4, 22, 31, 0
					],
					"1f1f8-1f1e8": [
						["🇸🇨"], "", "", ["flag-sc"], 4, 23, 31, 0
					],
					"1f1f8-1f1e9": [
						["🇸🇩"], "", "", ["flag-sd"], 4, 24, 31, 0
					],
					"1f1f8-1f1ea": [
						["🇸🇪"], "", "", ["flag-se"], 4, 25, 31, 0
					],
					"1f1f8-1f1ec": [
						["🇸🇬"], "", "", ["flag-sg"], 4, 26, 31, 0
					],
					"1f1f8-1f1ed": [
						["🇸🇭"], "", "", ["flag-sh"], 4, 27, 31, 0
					],
					"1f1f8-1f1ee": [
						["🇸🇮"], "", "", ["flag-si"], 4, 28, 31, 0
					],
					"1f1f8-1f1ef": [
						["🇸🇯"], "", "", ["flag-sj"], 4, 29, 31, 0
					],
					"1f1f8-1f1f0": [
						["🇸🇰"], "", "", ["flag-sk"], 4, 30, 31, 0
					],
					"1f1f8-1f1f1": [
						["🇸🇱"], "", "", ["flag-sl"], 4, 31, 31, 0
					],
					"1f1f8-1f1f2": [
						["🇸🇲"], "", "", ["flag-sm"], 4, 32, 31, 0
					],
					"1f1f8-1f1f3": [
						["🇸🇳"], "", "", ["flag-sn"], 4, 33, 31, 0
					],
					"1f1f8-1f1f4": [
						["🇸🇴"], "", "", ["flag-so"], 4, 34, 31, 0
					],
					"1f1f8-1f1f7": [
						["🇸🇷"], "", "", ["flag-sr"], 4, 35, 31, 0
					],
					"1f1f8-1f1f8": [
						["🇸🇸"], "", "", ["flag-ss"], 4, 36, 31, 0
					],
					"1f1f8-1f1f9": [
						["🇸🇹"], "", "", ["flag-st"], 4, 37, 31, 0
					],
					"1f1f8-1f1fb": [
						["🇸🇻"], "", "", ["flag-sv"], 4, 38, 31, 0
					],
					"1f1f8-1f1fd": [
						["🇸🇽"], "", "", ["flag-sx"], 4, 39, 31, 0
					],
					"1f1f8-1f1fe": [
						["🇸🇾"], "", "", ["flag-sy"], 4, 40, 31, 0
					],
					"1f1f8-1f1ff": [
						["🇸🇿"], "", "", ["flag-sz"], 4, 41, 31, 0
					],
					"1f1f9-1f1e6": [
						["🇹🇦"], "", "", ["flag-ta"], 4, 42, 31, 0
					],
					"1f1f9-1f1e8": [
						["🇹🇨"], "", "", ["flag-tc"], 4, 43, 31, 0
					],
					"1f1f9-1f1e9": [
						["🇹🇩"], "", "", ["flag-td"], 4, 44, 31, 0
					],
					"1f1f9-1f1eb": [
						["🇹🇫"], "", "", ["flag-tf"], 4, 45, 29, 0
					],
					"1f1f9-1f1ec": [
						["🇹🇬"], "", "", ["flag-tg"], 4, 46, 31, 0
					],
					"1f1f9-1f1ed": [
						["🇹🇭"], "", "", ["flag-th"], 4, 47, 31, 0
					],
					"1f1f9-1f1ef": [
						["🇹🇯"], "", "", ["flag-tj"], 4, 48, 31, 0
					],
					"1f1f9-1f1f0": [
						["🇹🇰"], "", "", ["flag-tk"], 4, 49, 31, 0
					],
					"1f1f9-1f1f1": [
						["🇹🇱"], "", "", ["flag-tl"], 4, 50, 31, 0
					],
					"1f1f9-1f1f2": [
						["🇹🇲"], "", "", ["flag-tm"], 4, 51, 31, 0
					],
					"1f1f9-1f1f3": [
						["🇹🇳"], "", "", ["flag-tn"], 5, 0, 31, 0
					],
					"1f1f9-1f1f4": [
						["🇹🇴"], "", "", ["flag-to"], 5, 1, 31, 0
					],
					"1f1f9-1f1f7": [
						["🇹🇷"], "", "", ["flag-tr"], 5, 2, 31, 0
					],
					"1f1f9-1f1f9": [
						["🇹🇹"], "", "", ["flag-tt"], 5, 3, 31, 0
					],
					"1f1f9-1f1fb": [
						["🇹🇻"], "", "", ["flag-tv"], 5, 4, 31, 0
					],
					"1f1f9-1f1fc": [
						["🇹🇼"], "", "", ["flag-tw"], 5, 5, 31, 0
					],
					"1f1f9-1f1ff": [
						["🇹🇿"], "", "", ["flag-tz"], 5, 6, 31, 0
					],
					"1f1fa-1f1e6": [
						["🇺🇦"], "", "", ["flag-ua"], 5, 7, 31, 0
					],
					"1f1fa-1f1ec": [
						["🇺🇬"], "", "", ["flag-ug"], 5, 8, 31, 0
					],
					"1f1fa-1f1f2": [
						["🇺🇲"], "", "", ["flag-um"], 5, 9, 31, 0
					],
					"1f1fa-1f1f3": [
						["🇺🇳"], "", "", ["flag-un"], 5, 10, 14, 0
					],
					"1f1fa-1f1f8": [
						["🇺🇸"], "", "󾓦", ["us", "flag-us"], 5, 11, 31, 0
					],
					"1f1fa-1f1fe": [
						["🇺🇾"], "", "", ["flag-uy"], 5, 12, 31, 0
					],
					"1f1fa-1f1ff": [
						["🇺🇿"], "", "", ["flag-uz"], 5, 13, 31, 0
					],
					"1f1fb-1f1e6": [
						["🇻🇦"], "", "", ["flag-va"], 5, 14, 31, 0
					],
					"1f1fb-1f1e8": [
						["🇻🇨"], "", "", ["flag-vc"], 5, 15, 31, 0
					],
					"1f1fb-1f1ea": [
						["🇻🇪"], "", "", ["flag-ve"], 5, 16, 31, 0
					],
					"1f1fb-1f1ec": [
						["🇻🇬"], "", "", ["flag-vg"], 5, 17, 31, 0
					],
					"1f1fb-1f1ee": [
						["🇻🇮"], "", "", ["flag-vi"], 5, 18, 31, 0
					],
					"1f1fb-1f1f3": [
						["🇻🇳"], "", "", ["flag-vn"], 5, 19, 31, 0
					],
					"1f1fb-1f1fa": [
						["🇻🇺"], "", "", ["flag-vu"], 5, 20, 31, 0
					],
					"1f1fc-1f1eb": [
						["🇼🇫"], "", "", ["flag-wf"], 5, 21, 29, 0
					],
					"1f1fc-1f1f8": [
						["🇼🇸"], "", "", ["flag-ws"], 5, 22, 31, 0
					],
					"1f1fd-1f1f0": [
						["🇽🇰"], "", "", ["flag-xk"], 5, 23, 29, 0
					],
					"1f1fe-1f1ea": [
						["🇾🇪"], "", "", ["flag-ye"], 5, 24, 31, 0
					],
					"1f1fe-1f1f9": [
						["🇾🇹"], "", "", ["flag-yt"], 5, 25, 29, 0
					],
					"1f1ff-1f1e6": [
						["🇿🇦"], "", "", ["flag-za"], 5, 26, 31, 0
					],
					"1f1ff-1f1f2": [
						["🇿🇲"], "", "", ["flag-zm"], 5, 27, 31, 0
					],
					"1f1ff-1f1fc": [
						["🇿🇼"], "", "", ["flag-zw"], 5, 28, 31, 0
					],
					"1f201": [
						["🈁"], "", "󾬤", ["koko"], 5, 29, 31, 0
					],
					"1f202-fe0f": [
						["🈂️", "🈂"], "", "󾬿", ["sa"], 5, 30, 31, 0
					],
					"1f21a": [
						["🈚"], "", "󾬺", ["u7121"], 5, 31, 31, 0
					],
					"1f22f": [
						["🈯"], "", "󾭀", ["u6307"], 5, 32, 31, 0
					],
					"1f232": [
						["🈲"], "", "󾬮", ["u7981"], 5, 33, 31, 0
					],
					"1f233": [
						["🈳"], "", "󾬯", ["u7a7a"], 5, 34, 31, 0
					],
					"1f234": [
						["🈴"], "", "󾬰", ["u5408"], 5, 35, 31, 0
					],
					"1f235": [
						["🈵"], "", "󾬱", ["u6e80"], 5, 36, 31, 0
					],
					"1f236": [
						["🈶"], "", "󾬹", ["u6709"], 5, 37, 31, 0
					],
					"1f237-fe0f": [
						["🈷️", "🈷"], "", "󾬻", ["u6708"], 5, 38, 31, 0
					],
					"1f238": [
						["🈸"], "", "󾬼", ["u7533"], 5, 39, 31, 0
					],
					"1f239": [
						["🈹"], "", "󾬾", ["u5272"], 5, 40, 31, 0
					],
					"1f23a": [
						["🈺"], "", "󾭁", ["u55b6"], 5, 41, 31, 0
					],
					"1f250": [
						["🉐"], "", "󾬽", ["ideograph_advantage"], 5, 42, 31, 0
					],
					"1f251": [
						["🉑"], "", "󾭐", ["accept"], 5, 43, 31, 0
					],
					"1f300": [
						["🌀"], "", "󾀅", ["cyclone"], 5, 44, 31, 0
					],
					"1f301": [
						["🌁"], "", "󾀆", ["foggy"], 5, 45, 31, 0
					],
					"1f302": [
						["🌂"], "", "󾀇", ["closed_umbrella"], 5, 46, 31, 0
					],
					"1f303": [
						["🌃"], "", "󾀈", ["night_with_stars"], 5, 47, 31, 0
					],
					"1f304": [
						["🌄"], "", "󾀉", ["sunrise_over_mountains"], 5, 48, 31, 0
					],
					"1f305": [
						["🌅"], "", "󾀊", ["sunrise"], 5, 49, 31, 0
					],
					"1f306": [
						["🌆"], "", "󾀋", ["city_sunset"], 5, 50, 31, 0
					],
					"1f307": [
						["🌇"], "", "󾀌", ["city_sunrise"], 5, 51, 31, 0
					],
					"1f308": [
						["🌈"], "", "󾀍", ["rainbow"], 6, 0, 31, 0
					],
					"1f309": [
						["🌉"], "", "󾀐", ["bridge_at_night"], 6, 1, 31, 0
					],
					"1f30a": [
						["🌊"], "", "󾀸", ["ocean"], 6, 2, 31, 0
					],
					"1f30b": [
						["🌋"], "", "󾀺", ["volcano"], 6, 3, 31, 0
					],
					"1f30c": [
						["🌌"], "", "󾀻", ["milky_way"], 6, 4, 31, 0
					],
					"1f30d": [
						["🌍"], "", "", ["earth_africa"], 6, 5, 31, 0
					],
					"1f30e": [
						["🌎"], "", "", ["earth_americas"], 6, 6, 31, 0
					],
					"1f30f": [
						["🌏"], "", "󾀹", ["earth_asia"], 6, 7, 31, 0
					],
					"1f310": [
						["🌐"], "", "", ["globe_with_meridians"], 6, 8, 31, 0
					],
					"1f311": [
						["🌑"], "", "󾀑", ["new_moon"], 6, 9, 31, 0
					],
					"1f312": [
						["🌒"], "", "", ["waxing_crescent_moon"], 6, 10, 31, 0
					],
					"1f313": [
						["🌓"], "", "󾀓", ["first_quarter_moon"], 6, 11, 31, 0
					],
					"1f314": [
						["🌔"], "", "󾀒", ["moon", "waxing_gibbous_moon"], 6, 12, 31, 0
					],
					"1f315": [
						["🌕"], "", "󾀕", ["full_moon"], 6, 13, 31, 0
					],
					"1f316": [
						["🌖"], "", "", ["waning_gibbous_moon"], 6, 14, 31, 0
					],
					"1f317": [
						["🌗"], "", "", ["last_quarter_moon"], 6, 15, 31, 0
					],
					"1f318": [
						["🌘"], "", "", ["waning_crescent_moon"], 6, 16, 31, 0
					],
					"1f319": [
						["🌙"], "", "󾀔", ["crescent_moon"], 6, 17, 31, 0
					],
					"1f31a": [
						["🌚"], "", "", ["new_moon_with_face"], 6, 18, 31, 0
					],
					"1f31b": [
						["🌛"], "", "󾀖", ["first_quarter_moon_with_face"], 6, 19, 31, 0
					],
					"1f31c": [
						["🌜"], "", "", ["last_quarter_moon_with_face"], 6, 20, 31, 0
					],
					"1f31d": [
						["🌝"], "", "", ["full_moon_with_face"], 6, 21, 31, 0
					],
					"1f31e": [
						["🌞"], "", "", ["sun_with_face"], 6, 22, 31, 0
					],
					"1f31f": [
						["🌟"], "", "󾭩", ["star2"], 6, 23, 31, 0
					],
					"1f320": [
						["🌠"], "", "󾭪", ["stars"], 6, 24, 31, 0
					],
					"1f321-fe0f": [
						["🌡️", "🌡"], "", "", ["thermometer"], 6, 25, 15, 0
					],
					"1f324-fe0f": [
						["🌤️", "🌤"], "", "", ["mostly_sunny", "sun_small_cloud"], 6, 26, 15, 0
					],
					"1f325-fe0f": [
						["🌥️", "🌥"], "", "", ["barely_sunny", "sun_behind_cloud"], 6, 27, 15, 0
					],
					"1f326-fe0f": [
						["🌦️", "🌦"], "", "", ["partly_sunny_rain", "sun_behind_rain_cloud"], 6, 28, 15, 0
					],
					"1f327-fe0f": [
						["🌧️", "🌧"], "", "", ["rain_cloud"], 6, 29, 15, 0
					],
					"1f328-fe0f": [
						["🌨️", "🌨"], "", "", ["snow_cloud"], 6, 30, 15, 0
					],
					"1f329-fe0f": [
						["🌩️", "🌩"], "", "", ["lightning", "lightning_cloud"], 6, 31, 15, 0
					],
					"1f32a-fe0f": [
						["🌪️", "🌪"], "", "", ["tornado", "tornado_cloud"], 6, 32, 15, 0
					],
					"1f32b-fe0f": [
						["🌫️", "🌫"], "", "", ["fog"], 6, 33, 15, 0
					],
					"1f32c-fe0f": [
						["🌬️", "🌬"], "", "", ["wind_blowing_face"], 6, 34, 15, 0
					],
					"1f32d": [
						["🌭"], "", "", ["hotdog"], 6, 35, 15, 0
					],
					"1f32e": [
						["🌮"], "", "", ["taco"], 6, 36, 15, 0
					],
					"1f32f": [
						["🌯"], "", "", ["burrito"], 6, 37, 15, 0
					],
					"1f330": [
						["🌰"], "", "󾁌", ["chestnut"], 6, 38, 31, 0
					],
					"1f331": [
						["🌱"], "", "󾀾", ["seedling"], 6, 39, 31, 0
					],
					"1f332": [
						["🌲"], "", "", ["evergreen_tree"], 6, 40, 31, 0
					],
					"1f333": [
						["🌳"], "", "", ["deciduous_tree"], 6, 41, 31, 0
					],
					"1f334": [
						["🌴"], "", "󾁇", ["palm_tree"], 6, 42, 31, 0
					],
					"1f335": [
						["🌵"], "", "󾁈", ["cactus"], 6, 43, 31, 0
					],
					"1f336-fe0f": [
						["🌶️", "🌶"], "", "", ["hot_pepper"], 6, 44, 15, 0
					],
					"1f337": [
						["🌷"], "", "󾀽", ["tulip"], 6, 45, 31, 0
					],
					"1f338": [
						["🌸"], "", "󾁀", ["cherry_blossom"], 6, 46, 31, 0
					],
					"1f339": [
						["🌹"], "", "󾁁", ["rose"], 6, 47, 31, 0
					],
					"1f33a": [
						["🌺"], "", "󾁅", ["hibiscus"], 6, 48, 31, 0
					],
					"1f33b": [
						["🌻"], "", "󾁆", ["sunflower"], 6, 49, 31, 0
					],
					"1f33c": [
						["🌼"], "", "󾁍", ["blossom"], 6, 50, 31, 0
					],
					"1f33d": [
						["🌽"], "", "󾁊", ["corn"], 6, 51, 31, 0
					],
					"1f33e": [
						["🌾"], "", "󾁉", ["ear_of_rice"], 7, 0, 31, 0
					],
					"1f33f": [
						["🌿"], "", "󾁎", ["herb"], 7, 1, 31, 0
					],
					"1f340": [
						["🍀"], "", "󾀼", ["four_leaf_clover"], 7, 2, 31, 0
					],
					"1f341": [
						["🍁"], "", "󾀿", ["maple_leaf"], 7, 3, 31, 0
					],
					"1f342": [
						["🍂"], "", "󾁂", ["fallen_leaf"], 7, 4, 31, 0
					],
					"1f343": [
						["🍃"], "", "󾁃", ["leaves"], 7, 5, 31, 0
					],
					"1f344": [
						["🍄"], "", "󾁋", ["mushroom"], 7, 6, 31, 0
					],
					"1f345": [
						["🍅"], "", "󾁕", ["tomato"], 7, 7, 31, 0
					],
					"1f346": [
						["🍆"], "", "󾁖", ["eggplant"], 7, 8, 31, 0
					],
					"1f347": [
						["🍇"], "", "󾁙", ["grapes"], 7, 9, 31, 0
					],
					"1f348": [
						["🍈"], "", "󾁗", ["melon"], 7, 10, 31, 0
					],
					"1f349": [
						["🍉"], "", "󾁔", ["watermelon"], 7, 11, 31, 0
					],
					"1f34a": [
						["🍊"], "", "󾁒", ["tangerine"], 7, 12, 31, 0
					],
					"1f34b": [
						["🍋"], "", "", ["lemon"], 7, 13, 31, 0
					],
					"1f34c": [
						["🍌"], "", "󾁐", ["banana"], 7, 14, 31, 0
					],
					"1f34d": [
						["🍍"], "", "󾁘", ["pineapple"], 7, 15, 31, 0
					],
					"1f34e": [
						["🍎"], "", "󾁑", ["apple"], 7, 16, 31, 0
					],
					"1f34f": [
						["🍏"], "", "󾁛", ["green_apple"], 7, 17, 31, 0
					],
					"1f350": [
						["🍐"], "", "", ["pear"], 7, 18, 31, 0
					],
					"1f351": [
						["🍑"], "", "󾁚", ["peach"], 7, 19, 31, 0
					],
					"1f352": [
						["🍒"], "", "󾁏", ["cherries"], 7, 20, 31, 0
					],
					"1f353": [
						["🍓"], "", "󾁓", ["strawberry"], 7, 21, 31, 0
					],
					"1f354": [
						["🍔"], "", "󾥠", ["hamburger"], 7, 22, 31, 0
					],
					"1f355": [
						["🍕"], "", "󾥵", ["pizza"], 7, 23, 31, 0
					],
					"1f356": [
						["🍖"], "", "󾥲", ["meat_on_bone"], 7, 24, 31, 0
					],
					"1f357": [
						["🍗"], "", "󾥶", ["poultry_leg"], 7, 25, 31, 0
					],
					"1f358": [
						["🍘"], "", "󾥩", ["rice_cracker"], 7, 26, 31, 0
					],
					"1f359": [
						["🍙"], "", "󾥡", ["rice_ball"], 7, 27, 31, 0
					],
					"1f35a": [
						["🍚"], "", "󾥪", ["rice"], 7, 28, 31, 0
					],
					"1f35b": [
						["🍛"], "", "󾥬", ["curry"], 7, 29, 31, 0
					],
					"1f35c": [
						["🍜"], "", "󾥣", ["ramen"], 7, 30, 31, 0
					],
					"1f35d": [
						["🍝"], "", "󾥫", ["spaghetti"], 7, 31, 31, 0
					],
					"1f35e": [
						["🍞"], "", "󾥤", ["bread"], 7, 32, 31, 0
					],
					"1f35f": [
						["🍟"], "", "󾥧", ["fries"], 7, 33, 31, 0
					],
					"1f360": [
						["🍠"], "", "󾥴", ["sweet_potato"], 7, 34, 31, 0
					],
					"1f361": [
						["🍡"], "", "󾥨", ["dango"], 7, 35, 31, 0
					],
					"1f362": [
						["🍢"], "", "󾥭", ["oden"], 7, 36, 31, 0
					],
					"1f363": [
						["🍣"], "", "󾥮", ["sushi"], 7, 37, 31, 0
					],
					"1f364": [
						["🍤"], "", "󾥿", ["fried_shrimp"], 7, 38, 31, 0
					],
					"1f365": [
						["🍥"], "", "󾥳", ["fish_cake"], 7, 39, 31, 0
					],
					"1f366": [
						["🍦"], "", "󾥦", ["icecream"], 7, 40, 31, 0
					],
					"1f367": [
						["🍧"], "", "󾥱", ["shaved_ice"], 7, 41, 31, 0
					],
					"1f368": [
						["🍨"], "", "󾥷", ["ice_cream"], 7, 42, 31, 0
					],
					"1f369": [
						["🍩"], "", "󾥸", ["doughnut"], 7, 43, 31, 0
					],
					"1f36a": [
						["🍪"], "", "󾥹", ["cookie"], 7, 44, 31, 0
					],
					"1f36b": [
						["🍫"], "", "󾥺", ["chocolate_bar"], 7, 45, 31, 0
					],
					"1f36c": [
						["🍬"], "", "󾥻", ["candy"], 7, 46, 31, 0
					],
					"1f36d": [
						["🍭"], "", "󾥼", ["lollipop"], 7, 47, 31, 0
					],
					"1f36e": [
						["🍮"], "", "󾥽", ["custard"], 7, 48, 31, 0
					],
					"1f36f": [
						["🍯"], "", "󾥾", ["honey_pot"], 7, 49, 31, 0
					],
					"1f370": [
						["🍰"], "", "󾥢", ["cake"], 7, 50, 31, 0
					],
					"1f371": [
						["🍱"], "", "󾥯", ["bento"], 7, 51, 31, 0
					],
					"1f372": [
						["🍲"], "", "󾥰", ["stew"], 8, 0, 31, 0
					],
					"1f373": [
						["🍳"], "", "󾥥", ["fried_egg", "cooking"], 8, 1, 31, 0
					],
					"1f374": [
						["🍴"], "", "󾦀", ["fork_and_knife"], 8, 2, 31, 0
					],
					"1f375": [
						["🍵"], "", "󾦄", ["tea"], 8, 3, 31, 0
					],
					"1f376": [
						["🍶"], "", "󾦅", ["sake"], 8, 4, 31, 0
					],
					"1f377": [
						["🍷"], "", "󾦆", ["wine_glass"], 8, 5, 31, 0
					],
					"1f378": [
						["🍸"], "", "󾦂", ["cocktail"], 8, 6, 31, 0
					],
					"1f379": [
						["🍹"], "", "󾦈", ["tropical_drink"], 8, 7, 31, 0
					],
					"1f37a": [
						["🍺"], "", "󾦃", ["beer"], 8, 8, 31, 0
					],
					"1f37b": [
						["🍻"], "", "󾦇", ["beers"], 8, 9, 31, 0
					],
					"1f37c": [
						["🍼"], "", "", ["baby_bottle"], 8, 10, 31, 0
					],
					"1f37d-fe0f": [
						["🍽️", "🍽"], "", "", ["knife_fork_plate"], 8, 11, 15, 0
					],
					"1f37e": [
						["🍾"], "", "", ["champagne"], 8, 12, 15, 0
					],
					"1f37f": [
						["🍿"], "", "", ["popcorn"], 8, 13, 15, 0
					],
					"1f380": [
						["🎀"], "", "󾔏", ["ribbon"], 8, 14, 31, 0
					],
					"1f381": [
						["🎁"], "", "󾔐", ["gift"], 8, 15, 31, 0
					],
					"1f382": [
						["🎂"], "", "󾔑", ["birthday"], 8, 16, 31, 0
					],
					"1f383": [
						["🎃"], "", "󾔟", ["jack_o_lantern"], 8, 17, 31, 0
					],
					"1f384": [
						["🎄"], "", "󾔒", ["christmas_tree"], 8, 18, 31, 0
					],
					"1f385": [
						["🎅"], "", "󾔓", ["santa"], 8, 19, 31, 0
					],
					"1f386": [
						["🎆"], "", "󾔕", ["fireworks"], 8, 25, 31, 0
					],
					"1f387": [
						["🎇"], "", "󾔝", ["sparkler"], 8, 26, 31, 0
					],
					"1f388": [
						["🎈"], "", "󾔖", ["balloon"], 8, 27, 31, 0
					],
					"1f389": [
						["🎉"], "", "󾔗", ["tada"], 8, 28, 31, 0
					],
					"1f38a": [
						["🎊"], "", "󾔠", ["confetti_ball"], 8, 29, 31, 0
					],
					"1f38b": [
						["🎋"], "", "󾔡", ["tanabata_tree"], 8, 30, 31, 0
					],
					"1f38c": [
						["🎌"], "", "󾔔", ["crossed_flags"], 8, 31, 31, 0
					],
					"1f38d": [
						["🎍"], "", "󾔘", ["bamboo"], 8, 32, 31, 0
					],
					"1f38e": [
						["🎎"], "", "󾔙", ["dolls"], 8, 33, 31, 0
					],
					"1f38f": [
						["🎏"], "", "󾔜", ["flags"], 8, 34, 31, 0
					],
					"1f390": [
						["🎐"], "", "󾔞", ["wind_chime"], 8, 35, 31, 0
					],
					"1f391": [
						["🎑"], "", "󾀗", ["rice_scene"], 8, 36, 31, 0
					],
					"1f392": [
						["🎒"], "", "󾔛", ["school_satchel"], 8, 37, 31, 0
					],
					"1f393": [
						["🎓"], "", "󾔚", ["mortar_board"], 8, 38, 31, 0
					],
					"1f396-fe0f": [
						["🎖️", "🎖"], "", "", ["medal"], 8, 39, 15, 0
					],
					"1f397-fe0f": [
						["🎗️", "🎗"], "", "", ["reminder_ribbon"], 8, 40, 15, 0
					],
					"1f399-fe0f": [
						["🎙️", "🎙"], "", "", ["studio_microphone"], 8, 41, 15, 0
					],
					"1f39a-fe0f": [
						["🎚️", "🎚"], "", "", ["level_slider"], 8, 42, 15, 0
					],
					"1f39b-fe0f": [
						["🎛️", "🎛"], "", "", ["control_knobs"], 8, 43, 15, 0
					],
					"1f39e-fe0f": [
						["🎞️", "🎞"], "", "", ["film_frames"], 8, 44, 15, 0
					],
					"1f39f-fe0f": [
						["🎟️", "🎟"], "", "", ["admission_tickets"], 8, 45, 15, 0
					],
					"1f3a0": [
						["🎠"], "", "󾟼", ["carousel_horse"], 8, 46, 31, 0
					],
					"1f3a1": [
						["🎡"], "", "󾟽", ["ferris_wheel"], 8, 47, 31, 0
					],
					"1f3a2": [
						["🎢"], "", "󾟾", ["roller_coaster"], 8, 48, 31, 0
					],
					"1f3a3": [
						["🎣"], "", "󾟿", ["fishing_pole_and_fish"], 8, 49, 31, 0
					],
					"1f3a4": [
						["🎤"], "", "󾠀", ["microphone"], 8, 50, 31, 0
					],
					"1f3a5": [
						["🎥"], "", "󾠁", ["movie_camera"], 8, 51, 31, 0
					],
					"1f3a6": [
						["🎦"], "", "󾠂", ["cinema"], 9, 0, 31, 0
					],
					"1f3a7": [
						["🎧"], "", "󾠃", ["headphones"], 9, 1, 31, 0
					],
					"1f3a8": [
						["🎨"], "", "󾠄", ["art"], 9, 2, 31, 0
					],
					"1f3a9": [
						["🎩"], "", "󾠅", ["tophat"], 9, 3, 31, 0
					],
					"1f3aa": [
						["🎪"], "", "󾠆", ["circus_tent"], 9, 4, 31, 0
					],
					"1f3ab": [
						["🎫"], "", "󾠇", ["ticket"], 9, 5, 31, 0
					],
					"1f3ac": [
						["🎬"], "", "󾠈", ["clapper"], 9, 6, 31, 0
					],
					"1f3ad": [
						["🎭"], "", "󾠉", ["performing_arts"], 9, 7, 31, 0
					],
					"1f3ae": [
						["🎮"], "", "󾠊", ["video_game"], 9, 8, 31, 0
					],
					"1f3af": [
						["🎯"], "", "󾠌", ["dart"], 9, 9, 31, 0
					],
					"1f3b0": [
						["🎰"], "", "󾠍", ["slot_machine"], 9, 10, 31, 0
					],
					"1f3b1": [
						["🎱"], "", "󾠎", ["8ball"], 9, 11, 31, 0
					],
					"1f3b2": [
						["🎲"], "", "󾠏", ["game_die"], 9, 12, 31, 0
					],
					"1f3b3": [
						["🎳"], "", "󾠐", ["bowling"], 9, 13, 31, 0
					],
					"1f3b4": [
						["🎴"], "", "󾠑", ["flower_playing_cards"], 9, 14, 31, 0
					],
					"1f3b5": [
						["🎵"], "", "󾠓", ["musical_note"], 9, 15, 31, 0
					],
					"1f3b6": [
						["🎶"], "", "󾠔", ["notes"], 9, 16, 31, 0
					],
					"1f3b7": [
						["🎷"], "", "󾠕", ["saxophone"], 9, 17, 31, 0
					],
					"1f3b8": [
						["🎸"], "", "󾠖", ["guitar"], 9, 18, 31, 0
					],
					"1f3b9": [
						["🎹"], "", "󾠗", ["musical_keyboard"], 9, 19, 31, 0
					],
					"1f3ba": [
						["🎺"], "", "󾠘", ["trumpet"], 9, 20, 31, 0
					],
					"1f3bb": [
						["🎻"], "", "󾠙", ["violin"], 9, 21, 31, 0
					],
					"1f3bc": [
						["🎼"], "", "󾠚", ["musical_score"], 9, 22, 31, 0
					],
					"1f3bd": [
						["🎽"], "", "󾟐", ["running_shirt_with_sash"], 9, 23, 31, 0
					],
					"1f3be": [
						["🎾"], "", "󾟓", ["tennis"], 9, 24, 31, 0
					],
					"1f3bf": [
						["🎿"], "", "󾟕", ["ski"], 9, 25, 31, 0
					],
					"1f3c0": [
						["🏀"], "", "󾟖", ["basketball"], 9, 26, 31, 0
					],
					"1f3c1": [
						["🏁"], "", "󾟗", ["checkered_flag"], 9, 27, 31, 0
					],
					"1f3c2": [
						["🏂"], "", "󾟘", ["snowboarder"], 9, 28, 31, 0
					],
					"1f3c3-200d-2640-fe0f": [
						["🏃‍♀️", "🏃‍♀"], "", "", ["woman-running"], 9, 34, 15, 0
					],
					"1f3c3-200d-2642-fe0f": [
						["🏃‍♂️", "🏃‍♂", "🏃"], "", "", ["man-running", "runner", "running"], 9, 40, 15, 0
					],
					"1f3c4-200d-2640-fe0f": [
						["🏄‍♀️", "🏄‍♀"], "", "", ["woman-surfing"], 10, 0, 15, 0
					],
					"1f3c4-200d-2642-fe0f": [
						["🏄‍♂️", "🏄‍♂", "🏄"], "", "", ["man-surfing", "surfer"], 10, 6, 15, 0
					],
					"1f3c5": [
						["🏅"], "", "", ["sports_medal"], 10, 18, 15, 0
					],
					"1f3c6": [
						["🏆"], "", "󾟛", ["trophy"], 10, 19, 31, 0
					],
					"1f3c7": [
						["🏇"], "", "", ["horse_racing"], 10, 20, 31, 0
					],
					"1f3c8": [
						["🏈"], "", "󾟝", ["football"], 10, 26, 31, 0
					],
					"1f3c9": [
						["🏉"], "", "", ["rugby_football"], 10, 27, 31, 0
					],
					"1f3ca-200d-2640-fe0f": [
						["🏊‍♀️", "🏊‍♀"], "", "", ["woman-swimming"], 10, 28, 15, 0
					],
					"1f3ca-200d-2642-fe0f": [
						["🏊‍♂️", "🏊‍♂", "🏊"], "", "", ["man-swimming", "swimmer"], 10, 34, 15, 0
					],
					"1f3cb-fe0f-200d-2640-fe0f": [
						["🏋️‍♀️"], "", "", ["woman-lifting-weights"], 10, 46, 7, 0
					],
					"1f3cb-fe0f-200d-2642-fe0f": [
						["🏋️‍♂️", "🏋️", "🏋"], "", "", ["man-lifting-weights", "weight_lifter"], 11, 0, 7, 0
					],
					"1f3cc-fe0f-200d-2640-fe0f": [
						["🏌️‍♀️"], "", "", ["woman-golfing"], 11, 12, 7, 0
					],
					"1f3cc-fe0f-200d-2642-fe0f": [
						["🏌️‍♂️", "🏌️", "🏌"], "", "", ["man-golfing", "golfer"], 11, 18, 7, 0
					],
					"1f3cd-fe0f": [
						["🏍️", "🏍"], "", "", ["racing_motorcycle"], 11, 30, 15, 0
					],
					"1f3ce-fe0f": [
						["🏎️", "🏎"], "", "", ["racing_car"], 11, 31, 15, 0
					],
					"1f3cf": [
						["🏏"], "", "", ["cricket_bat_and_ball"], 11, 32, 15, 0
					],
					"1f3d0": [
						["🏐"], "", "", ["volleyball"], 11, 33, 15, 0
					],
					"1f3d1": [
						["🏑"], "", "", ["field_hockey_stick_and_ball"], 11, 34, 15, 0
					],
					"1f3d2": [
						["🏒"], "", "", ["ice_hockey_stick_and_puck"], 11, 35, 15, 0
					],
					"1f3d3": [
						["🏓"], "", "", ["table_tennis_paddle_and_ball"], 11, 36, 15, 0
					],
					"1f3d4-fe0f": [
						["🏔️", "🏔"], "", "", ["snow_capped_mountain"], 11, 37, 15, 0
					],
					"1f3d5-fe0f": [
						["🏕️", "🏕"], "", "", ["camping"], 11, 38, 15, 0
					],
					"1f3d6-fe0f": [
						["🏖️", "🏖"], "", "", ["beach_with_umbrella"], 11, 39, 15, 0
					],
					"1f3d7-fe0f": [
						["🏗️", "🏗"], "", "", ["building_construction"], 11, 40, 15, 0
					],
					"1f3d8-fe0f": [
						["🏘️", "🏘"], "", "", ["house_buildings"], 11, 41, 15, 0
					],
					"1f3d9-fe0f": [
						["🏙️", "🏙"], "", "", ["cityscape"], 11, 42, 15, 0
					],
					"1f3da-fe0f": [
						["🏚️", "🏚"], "", "", ["derelict_house_building"], 11, 43, 15, 0
					],
					"1f3db-fe0f": [
						["🏛️", "🏛"], "", "", ["classical_building"], 11, 44, 15, 0
					],
					"1f3dc-fe0f": [
						["🏜️", "🏜"], "", "", ["desert"], 11, 45, 15, 0
					],
					"1f3dd-fe0f": [
						["🏝️", "🏝"], "", "", ["desert_island"], 11, 46, 15, 0
					],
					"1f3de-fe0f": [
						["🏞️", "🏞"], "", "", ["national_park"], 11, 47, 15, 0
					],
					"1f3df-fe0f": [
						["🏟️", "🏟"], "", "", ["stadium"], 11, 48, 15, 0
					],
					"1f3e0": [
						["🏠"], "", "󾒰", ["house"], 11, 49, 31, 0
					],
					"1f3e1": [
						["🏡"], "", "󾒱", ["house_with_garden"], 11, 50, 31, 0
					],
					"1f3e2": [
						["🏢"], "", "󾒲", ["office"], 11, 51, 31, 0
					],
					"1f3e3": [
						["🏣"], "", "󾒳", ["post_office"], 12, 0, 31, 0
					],
					"1f3e4": [
						["🏤"], "", "", ["european_post_office"], 12, 1, 31, 0
					],
					"1f3e5": [
						["🏥"], "", "󾒴", ["hospital"], 12, 2, 31, 0
					],
					"1f3e6": [
						["🏦"], "", "󾒵", ["bank"], 12, 3, 31, 0
					],
					"1f3e7": [
						["🏧"], "", "󾒶", ["atm"], 12, 4, 31, 0
					],
					"1f3e8": [
						["🏨"], "", "󾒷", ["hotel"], 12, 5, 31, 0
					],
					"1f3e9": [
						["🏩"], "", "󾒸", ["love_hotel"], 12, 6, 31, 0
					],
					"1f3ea": [
						["🏪"], "", "󾒹", ["convenience_store"], 12, 7, 31, 0
					],
					"1f3eb": [
						["🏫"], "", "󾒺", ["school"], 12, 8, 31, 0
					],
					"1f3ec": [
						["🏬"], "", "󾒽", ["department_store"], 12, 9, 31, 0
					],
					"1f3ed": [
						["🏭"], "", "󾓀", ["factory"], 12, 10, 31, 0
					],
					"1f3ee": [
						["🏮"], "", "󾓂", ["izakaya_lantern", "lantern"], 12, 11, 31, 0
					],
					"1f3ef": [
						["🏯"], "", "󾒾", ["japanese_castle"], 12, 12, 31, 0
					],
					"1f3f0": [
						["🏰"], "", "󾒿", ["european_castle"], 12, 13, 31, 0
					],
					"1f3f3-fe0f-200d-1f308": [
						["🏳️‍🌈", "🏳‍🌈"], "", "", ["rainbow-flag"], 12, 14, 31, 0
					],
					"1f3f3-fe0f": [
						["🏳️", "🏳"], "", "", ["waving_white_flag"], 12, 15, 15, 0
					],
					"1f3f4-e0067-e0062-e0065-e006e-e0067-e007f": [
						["🏴󠁧󠁢󠁥󠁮󠁧󠁿"], "", "", ["flag-england"], 12, 16, 15, 0
					],
					"1f3f4-e0067-e0062-e0073-e0063-e0074-e007f": [
						["🏴󠁧󠁢󠁳󠁣󠁴󠁿"], "", "", ["flag-scotland"], 12, 17, 15, 0
					],
					"1f3f4-e0067-e0062-e0077-e006c-e0073-e007f": [
						["🏴󠁧󠁢󠁷󠁬󠁳󠁿"], "", "", ["flag-wales"], 12, 18, 15, 0
					],
					"1f3f4": [
						["🏴"], "", "", ["waving_black_flag"], 12, 19, 15, 0
					],
					"1f3f5-fe0f": [
						["🏵️", "🏵"], "", "", ["rosette"], 12, 20, 15, 0
					],
					"1f3f7-fe0f": [
						["🏷️", "🏷"], "", "", ["label"], 12, 21, 15, 0
					],
					"1f3f8": [
						["🏸"], "", "", ["badminton_racquet_and_shuttlecock"], 12, 22, 15, 0
					],
					"1f3f9": [
						["🏹"], "", "", ["bow_and_arrow"], 12, 23, 15, 0
					],
					"1f3fa": [
						["🏺"], "", "", ["amphora"], 12, 24, 15, 0
					],
					"1f3fb": [
						["🏻"], "", "", ["skin-tone-2"], 12, 25, 15, 0
					],
					"1f3fc": [
						["🏼"], "", "", ["skin-tone-3"], 12, 26, 15, 0
					],
					"1f3fd": [
						["🏽"], "", "", ["skin-tone-4"], 12, 27, 15, 0
					],
					"1f3fe": [
						["🏾"], "", "", ["skin-tone-5"], 12, 28, 15, 0
					],
					"1f3ff": [
						["🏿"], "", "", ["skin-tone-6"], 12, 29, 15, 0
					],
					"1f400": [
						["🐀"], "", "", ["rat"], 12, 30, 31, 0
					],
					"1f401": [
						["🐁"], "", "", ["mouse2"], 12, 31, 31, 0
					],
					"1f402": [
						["🐂"], "", "", ["ox"], 12, 32, 31, 0
					],
					"1f403": [
						["🐃"], "", "", ["water_buffalo"], 12, 33, 31, 0
					],
					"1f404": [
						["🐄"], "", "", ["cow2"], 12, 34, 31, 0
					],
					"1f405": [
						["🐅"], "", "", ["tiger2"], 12, 35, 31, 0
					],
					"1f406": [
						["🐆"], "", "", ["leopard"], 12, 36, 31, 0
					],
					"1f407": [
						["🐇"], "", "", ["rabbit2"], 12, 37, 31, 0
					],
					"1f408": [
						["🐈"], "", "", ["cat2"], 12, 38, 31, 0
					],
					"1f409": [
						["🐉"], "", "", ["dragon"], 12, 39, 31, 0
					],
					"1f40a": [
						["🐊"], "", "", ["crocodile"], 12, 40, 31, 0
					],
					"1f40b": [
						["🐋"], "", "", ["whale2"], 12, 41, 31, 0
					],
					"1f40c": [
						["🐌"], "", "󾆹", ["snail"], 12, 42, 31, 0
					],
					"1f40d": [
						["🐍"], "", "󾇓", ["snake"], 12, 43, 31, 0
					],
					"1f40e": [
						["🐎"], "", "󾟜", ["racehorse"], 12, 44, 31, 0
					],
					"1f40f": [
						["🐏"], "", "", ["ram"], 12, 45, 31, 0
					],
					"1f410": [
						["🐐"], "", "", ["goat"], 12, 46, 31, 0
					],
					"1f411": [
						["🐑"], "", "󾇏", ["sheep"], 12, 47, 31, 0
					],
					"1f412": [
						["🐒"], "", "󾇎", ["monkey"], 12, 48, 31, 0
					],
					"1f413": [
						["🐓"], "", "", ["rooster"], 12, 49, 31, 0
					],
					"1f414": [
						["🐔"], "", "󾇔", ["chicken"], 12, 50, 31, 0
					],
					"1f415": [
						["🐕"], "", "", ["dog2"], 12, 51, 31, 0
					],
					"1f416": [
						["🐖"], "", "", ["pig2"], 13, 0, 31, 0
					],
					"1f417": [
						["🐗"], "", "󾇕", ["boar"], 13, 1, 31, 0
					],
					"1f418": [
						["🐘"], "", "󾇌", ["elephant"], 13, 2, 31, 0
					],
					"1f419": [
						["🐙"], "", "󾇅", ["octopus"], 13, 3, 31, 0
					],
					"1f41a": [
						["🐚"], "", "󾇆", ["shell"], 13, 4, 31, 0
					],
					"1f41b": [
						["🐛"], "", "󾇋", ["bug"], 13, 5, 31, 0
					],
					"1f41c": [
						["🐜"], "", "󾇚", ["ant"], 13, 6, 31, 0
					],
					"1f41d": [
						["🐝"], "", "󾇡", ["bee", "honeybee"], 13, 7, 31, 0
					],
					"1f41e": [
						["🐞"], "", "󾇢", ["beetle"], 13, 8, 31, 0
					],
					"1f41f": [
						["🐟"], "", "󾆽", ["fish"], 13, 9, 31, 0
					],
					"1f420": [
						["🐠"], "", "󾇉", ["tropical_fish"], 13, 10, 31, 0
					],
					"1f421": [
						["🐡"], "", "󾇙", ["blowfish"], 13, 11, 31, 0
					],
					"1f422": [
						["🐢"], "", "󾇜", ["turtle"], 13, 12, 31, 0
					],
					"1f423": [
						["🐣"], "", "󾇝", ["hatching_chick"], 13, 13, 31, 0
					],
					"1f424": [
						["🐤"], "", "󾆺", ["baby_chick"], 13, 14, 31, 0
					],
					"1f425": [
						["🐥"], "", "󾆻", ["hatched_chick"], 13, 15, 31, 0
					],
					"1f426": [
						["🐦"], "", "󾇈", ["bird"], 13, 16, 31, 0
					],
					"1f427": [
						["🐧"], "", "󾆼", ["penguin"], 13, 17, 31, 0
					],
					"1f428": [
						["🐨"], "", "󾇍", ["koala"], 13, 18, 31, 0
					],
					"1f429": [
						["🐩"], "", "󾇘", ["poodle"], 13, 19, 31, 0
					],
					"1f42a": [
						["🐪"], "", "", ["dromedary_camel"], 13, 20, 31, 0
					],
					"1f42b": [
						["🐫"], "", "󾇖", ["camel"], 13, 21, 31, 0
					],
					"1f42c": [
						["🐬"], "", "󾇇", ["dolphin", "flipper"], 13, 22, 31, 0
					],
					"1f42d": [
						["🐭"], "", "󾇂", ["mouse"], 13, 23, 31, 0
					],
					"1f42e": [
						["🐮"], "", "󾇑", ["cow"], 13, 24, 31, 0
					],
					"1f42f": [
						["🐯"], "", "󾇀", ["tiger"], 13, 25, 31, 0
					],
					"1f430": [
						["🐰"], "", "󾇒", ["rabbit"], 13, 26, 31, 0
					],
					"1f431": [
						["🐱"], "", "󾆸", ["cat"], 13, 27, 31, 0
					],
					"1f432": [
						["🐲"], "", "󾇞", ["dragon_face"], 13, 28, 31, 0
					],
					"1f433": [
						["🐳"], "", "󾇃", ["whale"], 13, 29, 31, 0
					],
					"1f434": [
						["🐴"], "", "󾆾", ["horse"], 13, 30, 31, 0
					],
					"1f435": [
						["🐵"], "", "󾇄", ["monkey_face"], 13, 31, 31, 0
					],
					"1f436": [
						["🐶"], "", "󾆷", ["dog"], 13, 32, 31, 0
					],
					"1f437": [
						["🐷"], "", "󾆿", ["pig"], 13, 33, 31, 0
					],
					"1f438": [
						["🐸"], "", "󾇗", ["frog"], 13, 34, 31, 0
					],
					"1f439": [
						["🐹"], "", "󾇊", ["hamster"], 13, 35, 31, 0
					],
					"1f43a": [
						["🐺"], "", "󾇐", ["wolf"], 13, 36, 31, 0
					],
					"1f43b": [
						["🐻"], "", "󾇁", ["bear"], 13, 37, 31, 0
					],
					"1f43c": [
						["🐼"], "", "󾇟", ["panda_face"], 13, 38, 31, 0
					],
					"1f43d": [
						["🐽"], "", "󾇠", ["pig_nose"], 13, 39, 31, 0
					],
					"1f43e": [
						["🐾"], "", "󾇛", ["feet", "paw_prints"], 13, 40, 31, 0
					],
					"1f43f-fe0f": [
						["🐿️", "🐿"], "", "", ["chipmunk"], 13, 41, 15, 0
					],
					"1f440": [
						["👀"], "", "󾆐", ["eyes"], 13, 42, 31, 0
					],
					"1f441-fe0f-200d-1f5e8-fe0f": [
						["👁️‍🗨️"], "", "", ["eye-in-speech-bubble"], 13, 43, 3, 0
					],
					"1f441-fe0f": [
						["👁️", "👁"], "", "", ["eye"], 13, 44, 15, 0
					],
					"1f442": [
						["👂"], "", "󾆑", ["ear"], 13, 45, 31, 0
					],
					"1f443": [
						["👃"], "", "󾆒", ["nose"], 13, 51, 31, 0
					],
					"1f444": [
						["👄"], "", "󾆓", ["lips"], 14, 5, 31, 0
					],
					"1f445": [
						["👅"], "", "󾆔", ["tongue"], 14, 6, 31, 0
					],
					"1f446": [
						["👆"], "", "󾮙", ["point_up_2"], 14, 7, 31, 0
					],
					"1f447": [
						["👇"], "", "󾮚", ["point_down"], 14, 13, 31, 0
					],
					"1f448": [
						["👈"], "", "󾮛", ["point_left"], 14, 19, 31, 0
					],
					"1f449": [
						["👉"], "", "󾮜", ["point_right"], 14, 25, 31, 0
					],
					"1f44a": [
						["👊"], "", "󾮖", ["facepunch", "punch"], 14, 31, 31, 0
					],
					"1f44b": [
						["👋"], "", "󾮝", ["wave"], 14, 37, 31, 0
					],
					"1f44c": [
						["👌"], "", "󾮟", ["ok_hand"], 14, 43, 31, 0
					],
					"1f44d": [
						["👍"], "", "󾮗", ["+1", "thumbsup"], 14, 49, 31, 0
					],
					"1f44e": [
						["👎"], "", "󾮠", ["-1", "thumbsdown"], 15, 3, 31, 0
					],
					"1f44f": [
						["👏"], "", "󾮞", ["clap"], 15, 9, 31, 0
					],
					"1f450": [
						["👐"], "", "󾮡", ["open_hands"], 15, 15, 31, 0
					],
					"1f451": [
						["👑"], "", "󾓑", ["crown"], 15, 21, 31, 0
					],
					"1f452": [
						["👒"], "", "󾓔", ["womans_hat"], 15, 22, 31, 0
					],
					"1f453": [
						["👓"], "", "󾓎", ["eyeglasses"], 15, 23, 31, 0
					],
					"1f454": [
						["👔"], "", "󾓓", ["necktie"], 15, 24, 31, 0
					],
					"1f455": [
						["👕"], "", "󾓏", ["shirt", "tshirt"], 15, 25, 31, 0
					],
					"1f456": [
						["👖"], "", "󾓐", ["jeans"], 15, 26, 31, 0
					],
					"1f457": [
						["👗"], "", "󾓕", ["dress"], 15, 27, 31, 0
					],
					"1f458": [
						["👘"], "", "󾓙", ["kimono"], 15, 28, 31, 0
					],
					"1f459": [
						["👙"], "", "󾓚", ["bikini"], 15, 29, 31, 0
					],
					"1f45a": [
						["👚"], "", "󾓛", ["womans_clothes"], 15, 30, 31, 0
					],
					"1f45b": [
						["👛"], "", "󾓜", ["purse"], 15, 31, 31, 0
					],
					"1f45c": [
						["👜"], "", "󾓰", ["handbag"], 15, 32, 31, 0
					],
					"1f45d": [
						["👝"], "", "󾓱", ["pouch"], 15, 33, 31, 0
					],
					"1f45e": [
						["👞"], "", "󾓌", ["mans_shoe", "shoe"], 15, 34, 31, 0
					],
					"1f45f": [
						["👟"], "", "󾓍", ["athletic_shoe"], 15, 35, 31, 0
					],
					"1f460": [
						["👠"], "", "󾓖", ["high_heel"], 15, 36, 31, 0
					],
					"1f461": [
						["👡"], "", "󾓗", ["sandal"], 15, 37, 31, 0
					],
					"1f462": [
						["👢"], "", "󾓘", ["boot"], 15, 38, 31, 0
					],
					"1f463": [
						["👣"], "", "󾕓", ["footprints"], 15, 39, 31, 0
					],
					"1f464": [
						["👤"], "", "󾆚", ["bust_in_silhouette"], 15, 40, 31, 0
					],
					"1f465": [
						["👥"], "", "", ["busts_in_silhouette"], 15, 41, 31, 0
					],
					"1f466": [
						["👦"], "", "󾆛", ["boy"], 15, 42, 31, 0
					],
					"1f467": [
						["👧"], "", "󾆜", ["girl"], 15, 48, 31, 0
					],
					"1f468-200d-1f33e": [
						["👨‍🌾"], "", "", ["male-farmer"], 16, 2, 15, 0
					],
					"1f468-200d-1f373": [
						["👨‍🍳"], "", "", ["male-cook"], 16, 8, 15, 0
					],
					"1f468-200d-1f393": [
						["👨‍🎓"], "", "", ["male-student"], 16, 14, 15, 0
					],
					"1f468-200d-1f3a4": [
						["👨‍🎤"], "", "", ["male-singer"], 16, 20, 15, 0
					],
					"1f468-200d-1f3a8": [
						["👨‍🎨"], "", "", ["male-artist"], 16, 26, 15, 0
					],
					"1f468-200d-1f3eb": [
						["👨‍🏫"], "", "", ["male-teacher"], 16, 32, 15, 0
					],
					"1f468-200d-1f3ed": [
						["👨‍🏭"], "", "", ["male-factory-worker"], 16, 38, 15, 0
					],
					"1f468-200d-1f466-200d-1f466": [
						["👨‍👦‍👦"], "", "", ["man-boy-boy"], 16, 44, 15, 0
					],
					"1f468-200d-1f466": [
						["👨‍👦"], "", "", ["man-boy"], 16, 45, 15, 0
					],
					"1f468-200d-1f467-200d-1f466": [
						["👨‍👧‍👦"], "", "", ["man-girl-boy"], 16, 46, 15, 0
					],
					"1f468-200d-1f467-200d-1f467": [
						["👨‍👧‍👧"], "", "", ["man-girl-girl"], 16, 47, 15, 0
					],
					"1f468-200d-1f467": [
						["👨‍👧"], "", "", ["man-girl"], 16, 48, 15, 0
					],
					"1f468-200d-1f468-200d-1f466": [
						["👨‍👨‍👦"], "", "", ["man-man-boy"], 16, 49, 31, 0
					],
					"1f468-200d-1f468-200d-1f466-200d-1f466": [
						["👨‍👨‍👦‍👦"], "", "", ["man-man-boy-boy"], 16, 50, 31, 0
					],
					"1f468-200d-1f468-200d-1f467": [
						["👨‍👨‍👧"], "", "", ["man-man-girl"], 16, 51, 31, 0
					],
					"1f468-200d-1f468-200d-1f467-200d-1f466": [
						["👨‍👨‍👧‍👦"], "", "", ["man-man-girl-boy"], 17, 0, 31, 0
					],
					"1f468-200d-1f468-200d-1f467-200d-1f467": [
						["👨‍👨‍👧‍👧"], "", "", ["man-man-girl-girl"], 17, 1, 31, 0
					],
					"1f468-200d-1f469-200d-1f466": [
						["👨‍👩‍👦", "👪"], "", "", ["man-woman-boy", "family"], 17, 2, 31, 0
					],
					"1f468-200d-1f469-200d-1f466-200d-1f466": [
						["👨‍👩‍👦‍👦"], "", "", ["man-woman-boy-boy"], 17, 3, 31, 0
					],
					"1f468-200d-1f469-200d-1f467": [
						["👨‍👩‍👧"], "", "", ["man-woman-girl"], 17, 4, 31, 0
					],
					"1f468-200d-1f469-200d-1f467-200d-1f466": [
						["👨‍👩‍👧‍👦"], "", "", ["man-woman-girl-boy"], 17, 5, 31, 0
					],
					"1f468-200d-1f469-200d-1f467-200d-1f467": [
						["👨‍👩‍👧‍👧"], "", "", ["man-woman-girl-girl"], 17, 6, 31, 0
					],
					"1f468-200d-1f4bb": [
						["👨‍💻"], "", "", ["male-technologist"], 17, 7, 15, 0
					],
					"1f468-200d-1f4bc": [
						["👨‍💼"], "", "", ["male-office-worker"], 17, 13, 15, 0
					],
					"1f468-200d-1f527": [
						["👨‍🔧"], "", "", ["male-mechanic"], 17, 19, 15, 0
					],
					"1f468-200d-1f52c": [
						["👨‍🔬"], "", "", ["male-scientist"], 17, 25, 15, 0
					],
					"1f468-200d-1f680": [
						["👨‍🚀"], "", "", ["male-astronaut"], 17, 31, 15, 0
					],
					"1f468-200d-1f692": [
						["👨‍🚒"], "", "", ["male-firefighter"], 17, 37, 15, 0
					],
					"1f468-200d-2695-fe0f": [
						["👨‍⚕️", "👨‍⚕"], "", "", ["male-doctor"], 17, 43, 15, 0
					],
					"1f468-200d-2696-fe0f": [
						["👨‍⚖️", "👨‍⚖"], "", "", ["male-judge"], 17, 49, 15, 0
					],
					"1f468-200d-2708-fe0f": [
						["👨‍✈️", "👨‍✈"], "", "", ["male-pilot"], 18, 3, 15, 0
					],
					"1f468-200d-2764-fe0f-200d-1f468": [
						["👨‍❤️‍👨", "👨‍❤‍👨"], "", "", ["man-heart-man"], 18, 9, 31, 0
					],
					"1f468-200d-2764-fe0f-200d-1f48b-200d-1f468": [
						["👨‍❤️‍💋‍👨", "👨‍❤‍💋‍👨"], "", "", ["man-kiss-man"], 18, 10, 31, 0
					],
					"1f468": [
						["👨"], "", "󾆝", ["man"], 18, 11, 31, 0
					],
					"1f469-200d-1f33e": [
						["👩‍🌾"], "", "", ["female-farmer"], 18, 17, 15, 0
					],
					"1f469-200d-1f373": [
						["👩‍🍳"], "", "", ["female-cook"], 18, 23, 15, 0
					],
					"1f469-200d-1f393": [
						["👩‍🎓"], "", "", ["female-student"], 18, 29, 15, 0
					],
					"1f469-200d-1f3a4": [
						["👩‍🎤"], "", "", ["female-singer"], 18, 35, 15, 0
					],
					"1f469-200d-1f3a8": [
						["👩‍🎨"], "", "", ["female-artist"], 18, 41, 15, 0
					],
					"1f469-200d-1f3eb": [
						["👩‍🏫"], "", "", ["female-teacher"], 18, 47, 15, 0
					],
					"1f469-200d-1f3ed": [
						["👩‍🏭"], "", "", ["female-factory-worker"], 19, 1, 15, 0
					],
					"1f469-200d-1f466-200d-1f466": [
						["👩‍👦‍👦"], "", "", ["woman-boy-boy"], 19, 7, 15, 0
					],
					"1f469-200d-1f466": [
						["👩‍👦"], "", "", ["woman-boy"], 19, 8, 15, 0
					],
					"1f469-200d-1f467-200d-1f466": [
						["👩‍👧‍👦"], "", "", ["woman-girl-boy"], 19, 9, 15, 0
					],
					"1f469-200d-1f467-200d-1f467": [
						["👩‍👧‍👧"], "", "", ["woman-girl-girl"], 19, 10, 15, 0
					],
					"1f469-200d-1f467": [
						["👩‍👧"], "", "", ["woman-girl"], 19, 11, 15, 0
					],
					"1f469-200d-1f469-200d-1f466": [
						["👩‍👩‍👦"], "", "", ["woman-woman-boy"], 19, 12, 31, 0
					],
					"1f469-200d-1f469-200d-1f466-200d-1f466": [
						["👩‍👩‍👦‍👦"], "", "", ["woman-woman-boy-boy"], 19, 13, 31, 0
					],
					"1f469-200d-1f469-200d-1f467": [
						["👩‍👩‍👧"], "", "", ["woman-woman-girl"], 19, 14, 31, 0
					],
					"1f469-200d-1f469-200d-1f467-200d-1f466": [
						["👩‍👩‍👧‍👦"], "", "", ["woman-woman-girl-boy"], 19, 15, 31, 0
					],
					"1f469-200d-1f469-200d-1f467-200d-1f467": [
						["👩‍👩‍👧‍👧"], "", "", ["woman-woman-girl-girl"], 19, 16, 31, 0
					],
					"1f469-200d-1f4bb": [
						["👩‍💻"], "", "", ["female-technologist"], 19, 17, 15, 0
					],
					"1f469-200d-1f4bc": [
						["👩‍💼"], "", "", ["female-office-worker"], 19, 23, 15, 0
					],
					"1f469-200d-1f527": [
						["👩‍🔧"], "", "", ["female-mechanic"], 19, 29, 15, 0
					],
					"1f469-200d-1f52c": [
						["👩‍🔬"], "", "", ["female-scientist"], 19, 35, 15, 0
					],
					"1f469-200d-1f680": [
						["👩‍🚀"], "", "", ["female-astronaut"], 19, 41, 15, 0
					],
					"1f469-200d-1f692": [
						["👩‍🚒"], "", "", ["female-firefighter"], 19, 47, 15, 0
					],
					"1f469-200d-2695-fe0f": [
						["👩‍⚕️", "👩‍⚕"], "", "", ["female-doctor"], 20, 1, 15, 0
					],
					"1f469-200d-2696-fe0f": [
						["👩‍⚖️", "👩‍⚖"], "", "", ["female-judge"], 20, 7, 15, 0
					],
					"1f469-200d-2708-fe0f": [
						["👩‍✈️", "👩‍✈"], "", "", ["female-pilot"], 20, 13, 15, 0
					],
					"1f469-200d-2764-fe0f-200d-1f468": [
						["👩‍❤️‍👨", "👩‍❤‍👨", "💑"], "", "", ["woman-heart-man", "couple_with_heart"], 20, 19, 15, 0
					],
					"1f469-200d-2764-fe0f-200d-1f469": [
						["👩‍❤️‍👩", "👩‍❤‍👩"], "", "", ["woman-heart-woman"], 20, 20, 31, 0
					],
					"1f469-200d-2764-fe0f-200d-1f48b-200d-1f468": [
						["👩‍❤️‍💋‍👨", "👩‍❤‍💋‍👨", "💏"], "", "", ["woman-kiss-man", "couplekiss"], 20, 21, 15, 0
					],
					"1f469-200d-2764-fe0f-200d-1f48b-200d-1f469": [
						["👩‍❤️‍💋‍👩", "👩‍❤‍💋‍👩"], "", "", ["woman-kiss-woman"], 20, 22, 31, 0
					],
					"1f469": [
						["👩"], "", "󾆞", ["woman"], 20, 23, 31, 0
					],
					"1f46b": [
						["👫"], "", "󾆠", ["couple", "man_and_woman_holding_hands"], 20, 30, 31, 0
					],
					"1f46c": [
						["👬"], "", "", ["two_men_holding_hands"], 20, 31, 31, 0
					],
					"1f46d": [
						["👭"], "", "", ["two_women_holding_hands"], 20, 32, 31, 0
					],
					"1f46e-200d-2640-fe0f": [
						["👮‍♀️", "👮‍♀"], "", "", ["female-police-officer"], 20, 33, 15, 0
					],
					"1f46e-200d-2642-fe0f": [
						["👮‍♂️", "👮‍♂", "👮"], "", "", ["male-police-officer", "cop"], 20, 39, 15, 0
					],
					"1f46f-200d-2640-fe0f": [
						["👯‍♀️", "👯‍♀", "👯"], "", "", ["woman-with-bunny-ears-partying", "dancers"], 20, 51, 15, 0
					],
					"1f46f-200d-2642-fe0f": [
						["👯‍♂️", "👯‍♂"], "", "", ["man-with-bunny-ears-partying"], 21, 0, 15, 0
					],
					"1f470": [
						["👰"], "", "󾆣", ["bride_with_veil"], 21, 2, 31, 0
					],
					"1f471-200d-2640-fe0f": [
						["👱‍♀️", "👱‍♀"], "", "", ["blond-haired-woman"], 21, 8, 15, 0
					],
					"1f471-200d-2642-fe0f": [
						["👱‍♂️", "👱‍♂", "👱"], "", "", ["blond-haired-man", "person_with_blond_hair"], 21, 14, 15, 0
					],
					"1f472": [
						["👲"], "", "󾆥", ["man_with_gua_pi_mao"], 21, 26, 31, 0
					],
					"1f473-200d-2640-fe0f": [
						["👳‍♀️", "👳‍♀"], "", "", ["woman-wearing-turban"], 21, 32, 15, 0
					],
					"1f473-200d-2642-fe0f": [
						["👳‍♂️", "👳‍♂", "👳"], "", "", ["man-wearing-turban", "man_with_turban"], 21, 38, 15, 0
					],
					"1f474": [
						["👴"], "", "󾆧", ["older_man"], 21, 50, 31, 0
					],
					"1f475": [
						["👵"], "", "󾆨", ["older_woman"], 22, 4, 31, 0
					],
					"1f476": [
						["👶"], "", "󾆩", ["baby"], 22, 10, 31, 0
					],
					"1f477-200d-2640-fe0f": [
						["👷‍♀️", "👷‍♀"], "", "", ["female-construction-worker"], 22, 16, 15, 0
					],
					"1f477-200d-2642-fe0f": [
						["👷‍♂️", "👷‍♂", "👷"], "", "", ["male-construction-worker", "construction_worker"], 22, 22, 15, 0
					],
					"1f478": [
						["👸"], "", "󾆫", ["princess"], 22, 34, 31, 0
					],
					"1f479": [
						["👹"], "", "󾆬", ["japanese_ogre"], 22, 40, 31, 0
					],
					"1f47a": [
						["👺"], "", "󾆭", ["japanese_goblin"], 22, 41, 31, 0
					],
					"1f47b": [
						["👻"], "", "󾆮", ["ghost"], 22, 42, 31, 0
					],
					"1f47c": [
						["👼"], "", "󾆯", ["angel"], 22, 43, 31, 0
					],
					"1f47d": [
						["👽"], "", "󾆰", ["alien"], 22, 49, 31, 0
					],
					"1f47e": [
						["👾"], "", "󾆱", ["space_invader"], 22, 50, 31, 0
					],
					"1f47f": [
						["👿"], "", "󾆲", ["imp"], 22, 51, 31, 0
					],
					"1f480": [
						["💀"], "", "󾆳", ["skull"], 23, 0, 31, 0
					],
					"1f481-200d-2640-fe0f": [
						["💁‍♀️", "💁‍♀", "💁"], "", "", ["woman-tipping-hand", "information_desk_person"], 23, 1, 15, 0
					],
					"1f481-200d-2642-fe0f": [
						["💁‍♂️", "💁‍♂"], "", "", ["man-tipping-hand"], 23, 7, 15, 0
					],
					"1f482-200d-2640-fe0f": [
						["💂‍♀️", "💂‍♀"], "", "", ["female-guard"], 23, 19, 15, 0
					],
					"1f482-200d-2642-fe0f": [
						["💂‍♂️", "💂‍♂", "💂"], "", "", ["male-guard", "guardsman"], 23, 25, 15, 0
					],
					"1f483": [
						["💃"], "", "󾆶", ["dancer"], 23, 37, 31, 0
					],
					"1f484": [
						["💄"], "", "󾆕", ["lipstick"], 23, 43, 31, 0
					],
					"1f485": [
						["💅"], "", "󾆖", ["nail_care"], 23, 44, 31, 0
					],
					"1f486-200d-2640-fe0f": [
						["💆‍♀️", "💆‍♀", "💆"], "", "", ["woman-getting-massage", "massage"], 23, 50, 15, 0
					],
					"1f486-200d-2642-fe0f": [
						["💆‍♂️", "💆‍♂"], "", "", ["man-getting-massage"], 24, 4, 15, 0
					],
					"1f487-200d-2640-fe0f": [
						["💇‍♀️", "💇‍♀", "💇"], "", "", ["woman-getting-haircut", "haircut"], 24, 16, 15, 0
					],
					"1f487-200d-2642-fe0f": [
						["💇‍♂️", "💇‍♂"], "", "", ["man-getting-haircut"], 24, 22, 15, 0
					],
					"1f488": [
						["💈"], "", "󾆙", ["barber"], 24, 34, 31, 0
					],
					"1f489": [
						["💉"], "", "󾔉", ["syringe"], 24, 35, 31, 0
					],
					"1f48a": [
						["💊"], "", "󾔊", ["pill"], 24, 36, 31, 0
					],
					"1f48b": [
						["💋"], "", "󾠣", ["kiss"], 24, 37, 31, 0
					],
					"1f48c": [
						["💌"], "", "󾠤", ["love_letter"], 24, 38, 31, 0
					],
					"1f48d": [
						["💍"], "", "󾠥", ["ring"], 24, 39, 31, 0
					],
					"1f48e": [
						["💎"], "", "󾠦", ["gem"], 24, 40, 31, 0
					],
					"1f490": [
						["💐"], "", "󾠨", ["bouquet"], 24, 42, 31, 0
					],
					"1f492": [
						["💒"], "", "󾠪", ["wedding"], 24, 44, 31, 0
					],
					"1f493": [
						["💓"], "", "󾬍", ["heartbeat"], 24, 45, 31, 0
					],
					"1f494": [
						["💔"], "", "󾬎", ["broken_heart"], 24, 46, 31, 0, "</3"
					],
					"1f495": [
						["💕"], "", "󾬏", ["two_hearts"], 24, 47, 31, 0
					],
					"1f496": [
						["💖"], "", "󾬐", ["sparkling_heart"], 24, 48, 31, 0
					],
					"1f497": [
						["💗"], "", "󾬑", ["heartpulse"], 24, 49, 31, 0
					],
					"1f498": [
						["💘"], "", "󾬒", ["cupid"], 24, 50, 31, 0
					],
					"1f499": [
						["💙"], "", "󾬓", ["blue_heart"], 24, 51, 31, 0, "<3"
					],
					"1f49a": [
						["💚"], "", "󾬔", ["green_heart"], 25, 0, 31, 0, "<3"
					],
					"1f49b": [
						["💛"], "", "󾬕", ["yellow_heart"], 25, 1, 31, 0, "<3"
					],
					"1f49c": [
						["💜"], "", "󾬖", ["purple_heart"], 25, 2, 31, 0, "<3"
					],
					"1f49d": [
						["💝"], "", "󾬗", ["gift_heart"], 25, 3, 31, 0
					],
					"1f49e": [
						["💞"], "", "󾬘", ["revolving_hearts"], 25, 4, 31, 0
					],
					"1f49f": [
						["💟"], "", "󾬙", ["heart_decoration"], 25, 5, 31, 0
					],
					"1f4a0": [
						["💠"], "", "󾭕", ["diamond_shape_with_a_dot_inside"], 25, 6, 31, 0
					],
					"1f4a1": [
						["💡"], "", "󾭖", ["bulb"], 25, 7, 31, 0
					],
					"1f4a2": [
						["💢"], "", "󾭗", ["anger"], 25, 8, 31, 0
					],
					"1f4a3": [
						["💣"], "", "󾭘", ["bomb"], 25, 9, 31, 0
					],
					"1f4a4": [
						["💤"], "", "󾭙", ["zzz"], 25, 10, 31, 0
					],
					"1f4a5": [
						["💥"], "", "󾭚", ["boom", "collision"], 25, 11, 31, 0
					],
					"1f4a6": [
						["💦"], "", "󾭛", ["sweat_drops"], 25, 12, 31, 0
					],
					"1f4a7": [
						["💧"], "", "󾭜", ["droplet"], 25, 13, 31, 0
					],
					"1f4a8": [
						["💨"], "", "󾭝", ["dash"], 25, 14, 31, 0
					],
					"1f4a9": [
						["💩"], "", "󾓴", ["hankey", "poop", "shit"], 25, 15, 31, 0
					],
					"1f4aa": [
						["💪"], "", "󾭞", ["muscle"], 25, 16, 31, 0
					],
					"1f4ab": [
						["💫"], "", "󾭟", ["dizzy"], 25, 22, 31, 0
					],
					"1f4ac": [
						["💬"], "", "󾔲", ["speech_balloon"], 25, 23, 31, 0
					],
					"1f4ad": [
						["💭"], "", "", ["thought_balloon"], 25, 24, 31, 0
					],
					"1f4ae": [
						["💮"], "", "󾭺", ["white_flower"], 25, 25, 31, 0
					],
					"1f4af": [
						["💯"], "", "󾭻", ["100"], 25, 26, 31, 0
					],
					"1f4b0": [
						["💰"], "", "󾓝", ["moneybag"], 25, 27, 31, 0
					],
					"1f4b1": [
						["💱"], "", "󾓞", ["currency_exchange"], 25, 28, 31, 0
					],
					"1f4b2": [
						["💲"], "", "󾓠", ["heavy_dollar_sign"], 25, 29, 31, 0
					],
					"1f4b3": [
						["💳"], "", "󾓡", ["credit_card"], 25, 30, 31, 0
					],
					"1f4b4": [
						["💴"], "", "󾓢", ["yen"], 25, 31, 31, 0
					],
					"1f4b5": [
						["💵"], "", "󾓣", ["dollar"], 25, 32, 31, 0
					],
					"1f4b6": [
						["💶"], "", "", ["euro"], 25, 33, 31, 0
					],
					"1f4b7": [
						["💷"], "", "", ["pound"], 25, 34, 31, 0
					],
					"1f4b8": [
						["💸"], "", "󾓤", ["money_with_wings"], 25, 35, 31, 0
					],
					"1f4b9": [
						["💹"], "", "󾓟", ["chart"], 25, 36, 31, 0
					],
					"1f4ba": [
						["💺"], "", "󾔷", ["seat"], 25, 37, 31, 0
					],
					"1f4bb": [
						["💻"], "", "󾔸", ["computer"], 25, 38, 31, 0
					],
					"1f4bc": [
						["💼"], "", "󾔻", ["briefcase"], 25, 39, 31, 0
					],
					"1f4bd": [
						["💽"], "", "󾔼", ["minidisc"], 25, 40, 31, 0
					],
					"1f4be": [
						["💾"], "", "󾔽", ["floppy_disk"], 25, 41, 31, 0
					],
					"1f4bf": [
						["💿"], "", "󾠝", ["cd"], 25, 42, 31, 0
					],
					"1f4c0": [
						["📀"], "", "󾠞", ["dvd"], 25, 43, 31, 0
					],
					"1f4c1": [
						["📁"], "", "󾕃", ["file_folder"], 25, 44, 31, 0
					],
					"1f4c2": [
						["📂"], "", "󾕄", ["open_file_folder"], 25, 45, 31, 0
					],
					"1f4c3": [
						["📃"], "", "󾕀", ["page_with_curl"], 25, 46, 31, 0
					],
					"1f4c4": [
						["📄"], "", "󾕁", ["page_facing_up"], 25, 47, 31, 0
					],
					"1f4c5": [
						["📅"], "", "󾕂", ["date"], 25, 48, 31, 0
					],
					"1f4c6": [
						["📆"], "", "󾕉", ["calendar"], 25, 49, 31, 0
					],
					"1f4c7": [
						["📇"], "", "󾕍", ["card_index"], 25, 50, 31, 0
					],
					"1f4c8": [
						["📈"], "", "󾕋", ["chart_with_upwards_trend"], 25, 51, 31, 0
					],
					"1f4c9": [
						["📉"], "", "󾕌", ["chart_with_downwards_trend"], 26, 0, 31, 0
					],
					"1f4ca": [
						["📊"], "", "󾕊", ["bar_chart"], 26, 1, 31, 0
					],
					"1f4cb": [
						["📋"], "", "󾕈", ["clipboard"], 26, 2, 31, 0
					],
					"1f4cc": [
						["📌"], "", "󾕎", ["pushpin"], 26, 3, 31, 0
					],
					"1f4cd": [
						["📍"], "", "󾔿", ["round_pushpin"], 26, 4, 31, 0
					],
					"1f4ce": [
						["📎"], "", "󾔺", ["paperclip"], 26, 5, 31, 0
					],
					"1f4cf": [
						["📏"], "", "󾕐", ["straight_ruler"], 26, 6, 31, 0
					],
					"1f4d0": [
						["📐"], "", "󾕑", ["triangular_ruler"], 26, 7, 31, 0
					],
					"1f4d1": [
						["📑"], "", "󾕒", ["bookmark_tabs"], 26, 8, 31, 0
					],
					"1f4d2": [
						["📒"], "", "󾕏", ["ledger"], 26, 9, 31, 0
					],
					"1f4d3": [
						["📓"], "", "󾕅", ["notebook"], 26, 10, 31, 0
					],
					"1f4d4": [
						["📔"], "", "󾕇", ["notebook_with_decorative_cover"], 26, 11, 31, 0
					],
					"1f4d5": [
						["📕"], "", "󾔂", ["closed_book"], 26, 12, 31, 0
					],
					"1f4d6": [
						["📖"], "", "󾕆", ["book", "open_book"], 26, 13, 31, 0
					],
					"1f4d7": [
						["📗"], "", "󾓿", ["green_book"], 26, 14, 31, 0
					],
					"1f4d8": [
						["📘"], "", "󾔀", ["blue_book"], 26, 15, 31, 0
					],
					"1f4d9": [
						["📙"], "", "󾔁", ["orange_book"], 26, 16, 31, 0
					],
					"1f4da": [
						["📚"], "", "󾔃", ["books"], 26, 17, 31, 0
					],
					"1f4db": [
						["📛"], "", "󾔄", ["name_badge"], 26, 18, 31, 0
					],
					"1f4dc": [
						["📜"], "", "󾓽", ["scroll"], 26, 19, 31, 0
					],
					"1f4dd": [
						["📝"], "", "󾔧", ["memo", "pencil"], 26, 20, 31, 0
					],
					"1f4de": [
						["📞"], "", "󾔤", ["telephone_receiver"], 26, 21, 31, 0
					],
					"1f4df": [
						["📟"], "", "󾔢", ["pager"], 26, 22, 31, 0
					],
					"1f4e0": [
						["📠"], "", "󾔨", ["fax"], 26, 23, 31, 0
					],
					"1f4e1": [
						["📡"], "", "󾔱", ["satellite_antenna"], 26, 24, 31, 0
					],
					"1f4e2": [
						["📢"], "", "󾔯", ["loudspeaker"], 26, 25, 31, 0
					],
					"1f4e3": [
						["📣"], "", "󾔰", ["mega"], 26, 26, 31, 0
					],
					"1f4e4": [
						["📤"], "", "󾔳", ["outbox_tray"], 26, 27, 31, 0
					],
					"1f4e5": [
						["📥"], "", "󾔴", ["inbox_tray"], 26, 28, 31, 0
					],
					"1f4e6": [
						["📦"], "", "󾔵", ["package"], 26, 29, 31, 0
					],
					"1f4e7": [
						["📧"], "", "󾮒", ["e-mail"], 26, 30, 31, 0
					],
					"1f4e8": [
						["📨"], "", "󾔪", ["incoming_envelope"], 26, 31, 31, 0
					],
					"1f4e9": [
						["📩"], "", "󾔫", ["envelope_with_arrow"], 26, 32, 31, 0
					],
					"1f4ea": [
						["📪"], "", "󾔬", ["mailbox_closed"], 26, 33, 31, 0
					],
					"1f4eb": [
						["📫"], "", "󾔭", ["mailbox"], 26, 34, 31, 0
					],
					"1f4ec": [
						["📬"], "", "", ["mailbox_with_mail"], 26, 35, 31, 0
					],
					"1f4ed": [
						["📭"], "", "", ["mailbox_with_no_mail"], 26, 36, 31, 0
					],
					"1f4ee": [
						["📮"], "", "󾔮", ["postbox"], 26, 37, 31, 0
					],
					"1f4ef": [
						["📯"], "", "", ["postal_horn"], 26, 38, 31, 0
					],
					"1f4f0": [
						["📰"], "", "󾠢", ["newspaper"], 26, 39, 31, 0
					],
					"1f4f1": [
						["📱"], "", "󾔥", ["iphone"], 26, 40, 31, 0
					],
					"1f4f2": [
						["📲"], "", "󾔦", ["calling"], 26, 41, 31, 0
					],
					"1f4f3": [
						["📳"], "", "󾠹", ["vibration_mode"], 26, 42, 31, 0
					],
					"1f4f4": [
						["📴"], "", "󾠺", ["mobile_phone_off"], 26, 43, 31, 0
					],
					"1f4f5": [
						["📵"], "", "", ["no_mobile_phones"], 26, 44, 31, 0
					],
					"1f4f6": [
						["📶"], "", "󾠸", ["signal_strength"], 26, 45, 31, 0
					],
					"1f4f7": [
						["📷"], "", "󾓯", ["camera"], 26, 46, 31, 0
					],
					"1f4f8": [
						["📸"], "", "", ["camera_with_flash"], 26, 47, 15, 0
					],
					"1f4f9": [
						["📹"], "", "󾓹", ["video_camera"], 26, 48, 31, 0
					],
					"1f4fa": [
						["📺"], "", "󾠜", ["tv"], 26, 49, 31, 0
					],
					"1f4fb": [
						["📻"], "", "󾠟", ["radio"], 26, 50, 31, 0
					],
					"1f4fc": [
						["📼"], "", "󾠠", ["vhs"], 26, 51, 31, 0
					],
					"1f4fd-fe0f": [
						["📽️", "📽"], "", "", ["film_projector"], 27, 0, 15, 0
					],
					"1f4ff": [
						["📿"], "", "", ["prayer_beads"], 27, 1, 15, 0
					],
					"1f500": [
						["🔀"], "", "", ["twisted_rightwards_arrows"], 27, 2, 31, 0
					],
					"1f501": [
						["🔁"], "", "", ["repeat"], 27, 3, 31, 0
					],
					"1f502": [
						["🔂"], "", "", ["repeat_one"], 27, 4, 31, 0
					],
					"1f503": [
						["🔃"], "", "󾮑", ["arrows_clockwise"], 27, 5, 31, 0
					],
					"1f504": [
						["🔄"], "", "", ["arrows_counterclockwise"], 27, 6, 31, 0
					],
					"1f505": [
						["🔅"], "", "", ["low_brightness"], 27, 7, 31, 0
					],
					"1f506": [
						["🔆"], "", "", ["high_brightness"], 27, 8, 31, 0
					],
					"1f507": [
						["🔇"], "", "", ["mute"], 27, 9, 31, 0
					],
					"1f508": [
						["🔈"], "", "", ["speaker"], 27, 10, 31, 0
					],
					"1f509": [
						["🔉"], "", "", ["sound"], 27, 11, 31, 0
					],
					"1f50a": [
						["🔊"], "", "󾠡", ["loud_sound"], 27, 12, 31, 0
					],
					"1f50b": [
						["🔋"], "", "󾓼", ["battery"], 27, 13, 31, 0
					],
					"1f50c": [
						["🔌"], "", "󾓾", ["electric_plug"], 27, 14, 31, 0
					],
					"1f50d": [
						["🔍"], "", "󾮅", ["mag"], 27, 15, 31, 0
					],
					"1f50e": [
						["🔎"], "", "󾮍", ["mag_right"], 27, 16, 31, 0
					],
					"1f50f": [
						["🔏"], "", "󾮐", ["lock_with_ink_pen"], 27, 17, 31, 0
					],
					"1f510": [
						["🔐"], "", "󾮊", ["closed_lock_with_key"], 27, 18, 31, 0
					],
					"1f511": [
						["🔑"], "", "󾮂", ["key"], 27, 19, 31, 0
					],
					"1f512": [
						["🔒"], "", "󾮆", ["lock"], 27, 20, 31, 0
					],
					"1f513": [
						["🔓"], "", "󾮇", ["unlock"], 27, 21, 31, 0
					],
					"1f514": [
						["🔔"], "", "󾓲", ["bell"], 27, 22, 31, 0
					],
					"1f515": [
						["🔕"], "", "", ["no_bell"], 27, 23, 31, 0
					],
					"1f516": [
						["🔖"], "", "󾮏", ["bookmark"], 27, 24, 31, 0
					],
					"1f517": [
						["🔗"], "", "󾭋", ["link"], 27, 25, 31, 0
					],
					"1f518": [
						["🔘"], "", "󾮌", ["radio_button"], 27, 26, 31, 0
					],
					"1f519": [
						["🔙"], "", "󾮎", ["back"], 27, 27, 31, 0
					],
					"1f51a": [
						["🔚"], "", "󾀚", ["end"], 27, 28, 31, 0
					],
					"1f51b": [
						["🔛"], "", "󾀙", ["on"], 27, 29, 31, 0
					],
					"1f51c": [
						["🔜"], "", "󾀘", ["soon"], 27, 30, 31, 0
					],
					"1f51d": [
						["🔝"], "", "󾭂", ["top"], 27, 31, 31, 0
					],
					"1f51e": [
						["🔞"], "", "󾬥", ["underage"], 27, 32, 31, 0
					],
					"1f51f": [
						["🔟"], "", "󾠻", ["keycap_ten"], 27, 33, 31, 0
					],
					"1f520": [
						["🔠"], "", "󾭼", ["capital_abcd"], 27, 34, 31, 0
					],
					"1f521": [
						["🔡"], "", "󾭽", ["abcd"], 27, 35, 31, 0
					],
					"1f522": [
						["🔢"], "", "󾭾", ["1234"], 27, 36, 31, 0
					],
					"1f523": [
						["🔣"], "", "󾭿", ["symbols"], 27, 37, 31, 0
					],
					"1f524": [
						["🔤"], "", "󾮀", ["abc"], 27, 38, 31, 0
					],
					"1f525": [
						["🔥"], "", "󾓶", ["fire"], 27, 39, 31, 0
					],
					"1f526": [
						["🔦"], "", "󾓻", ["flashlight"], 27, 40, 31, 0
					],
					"1f527": [
						["🔧"], "", "󾓉", ["wrench"], 27, 41, 31, 0
					],
					"1f528": [
						["🔨"], "", "󾓊", ["hammer"], 27, 42, 31, 0
					],
					"1f529": [
						["🔩"], "", "󾓋", ["nut_and_bolt"], 27, 43, 31, 0
					],
					"1f52a": [
						["🔪"], "", "󾓺", ["hocho", "knife"], 27, 44, 31, 0
					],
					"1f52b": [
						["🔫"], "", "󾓵", ["gun"], 27, 45, 31, 0
					],
					"1f52c": [
						["🔬"], "", "", ["microscope"], 27, 46, 31, 0
					],
					"1f52d": [
						["🔭"], "", "", ["telescope"], 27, 47, 31, 0
					],
					"1f52e": [
						["🔮"], "", "󾓷", ["crystal_ball"], 27, 48, 31, 0
					],
					"1f52f": [
						["🔯"], "", "󾓸", ["six_pointed_star"], 27, 49, 31, 0
					],
					"1f530": [
						["🔰"], "", "󾁄", ["beginner"], 27, 50, 31, 0
					],
					"1f531": [
						["🔱"], "", "󾓒", ["trident"], 27, 51, 31, 0
					],
					"1f532": [
						["🔲"], "", "󾭤", ["black_square_button"], 28, 0, 31, 0
					],
					"1f533": [
						["🔳"], "", "󾭧", ["white_square_button"], 28, 1, 31, 0
					],
					"1f534": [
						["🔴"], "", "󾭣", ["red_circle"], 28, 2, 31, 0
					],
					"1f535": [
						["🔵"], "", "󾭤", ["large_blue_circle"], 28, 3, 31, 0
					],
					"1f536": [
						["🔶"], "", "󾭳", ["large_orange_diamond"], 28, 4, 31, 0
					],
					"1f537": [
						["🔷"], "", "󾭴", ["large_blue_diamond"], 28, 5, 31, 0
					],
					"1f538": [
						["🔸"], "", "󾭵", ["small_orange_diamond"], 28, 6, 31, 0
					],
					"1f539": [
						["🔹"], "", "󾭶", ["small_blue_diamond"], 28, 7, 31, 0
					],
					"1f53a": [
						["🔺"], "", "󾭸", ["small_red_triangle"], 28, 8, 31, 0
					],
					"1f53b": [
						["🔻"], "", "󾭹", ["small_red_triangle_down"], 28, 9, 31, 0
					],
					"1f53c": [
						["🔼"], "", "󾬁", ["arrow_up_small"], 28, 10, 31, 0
					],
					"1f53d": [
						["🔽"], "", "󾬀", ["arrow_down_small"], 28, 11, 31, 0
					],
					"1f549-fe0f": [
						["🕉️", "🕉"], "", "", ["om_symbol"], 28, 12, 15, 0
					],
					"1f54a-fe0f": [
						["🕊️", "🕊"], "", "", ["dove_of_peace"], 28, 13, 15, 0
					],
					"1f54b": [
						["🕋"], "", "", ["kaaba"], 28, 14, 15, 0
					],
					"1f54c": [
						["🕌"], "", "", ["mosque"], 28, 15, 15, 0
					],
					"1f54d": [
						["🕍"], "", "", ["synagogue"], 28, 16, 15, 0
					],
					"1f54e": [
						["🕎"], "", "", ["menorah_with_nine_branches"], 28, 17, 15, 0
					],
					"1f550": [
						["🕐"], "", "󾀞", ["clock1"], 28, 18, 31, 0
					],
					"1f551": [
						["🕑"], "", "󾀟", ["clock2"], 28, 19, 31, 0
					],
					"1f552": [
						["🕒"], "", "󾀠", ["clock3"], 28, 20, 31, 0
					],
					"1f553": [
						["🕓"], "", "󾀡", ["clock4"], 28, 21, 31, 0
					],
					"1f554": [
						["🕔"], "", "󾀢", ["clock5"], 28, 22, 31, 0
					],
					"1f555": [
						["🕕"], "", "󾀣", ["clock6"], 28, 23, 31, 0
					],
					"1f556": [
						["🕖"], "", "󾀤", ["clock7"], 28, 24, 31, 0
					],
					"1f557": [
						["🕗"], "", "󾀥", ["clock8"], 28, 25, 31, 0
					],
					"1f558": [
						["🕘"], "", "󾀦", ["clock9"], 28, 26, 31, 0
					],
					"1f559": [
						["🕙"], "", "󾀧", ["clock10"], 28, 27, 31, 0
					],
					"1f55a": [
						["🕚"], "", "󾀨", ["clock11"], 28, 28, 31, 0
					],
					"1f55b": [
						["🕛"], "", "󾀩", ["clock12"], 28, 29, 31, 0
					],
					"1f55c": [
						["🕜"], "", "", ["clock130"], 28, 30, 31, 0
					],
					"1f55d": [
						["🕝"], "", "", ["clock230"], 28, 31, 31, 0
					],
					"1f55e": [
						["🕞"], "", "", ["clock330"], 28, 32, 31, 0
					],
					"1f55f": [
						["🕟"], "", "", ["clock430"], 28, 33, 31, 0
					],
					"1f560": [
						["🕠"], "", "", ["clock530"], 28, 34, 31, 0
					],
					"1f561": [
						["🕡"], "", "", ["clock630"], 28, 35, 31, 0
					],
					"1f562": [
						["🕢"], "", "", ["clock730"], 28, 36, 31, 0
					],
					"1f563": [
						["🕣"], "", "", ["clock830"], 28, 37, 31, 0
					],
					"1f564": [
						["🕤"], "", "", ["clock930"], 28, 38, 31, 0
					],
					"1f565": [
						["🕥"], "", "", ["clock1030"], 28, 39, 31, 0
					],
					"1f566": [
						["🕦"], "", "", ["clock1130"], 28, 40, 31, 0
					],
					"1f567": [
						["🕧"], "", "", ["clock1230"], 28, 41, 31, 0
					],
					"1f56f-fe0f": [
						["🕯️", "🕯"], "", "", ["candle"], 28, 42, 15, 0
					],
					"1f570-fe0f": [
						["🕰️", "🕰"], "", "", ["mantelpiece_clock"], 28, 43, 15, 0
					],
					"1f573-fe0f": [
						["🕳️", "🕳"], "", "", ["hole"], 28, 44, 15, 0
					],
					"1f574-fe0f": [
						["🕴️", "🕴"], "", "", ["man_in_business_suit_levitating"], 28, 45, 15, 0
					],
					"1f575-fe0f-200d-2640-fe0f": [
						["🕵️‍♀️"], "", "", ["female-detective"], 28, 51, 7, 0
					],
					"1f575-fe0f-200d-2642-fe0f": [
						["🕵️‍♂️", "🕵️", "🕵"], "", "", ["male-detective", "sleuth_or_spy"], 29, 5, 7, 0
					],
					"1f576-fe0f": [
						["🕶️", "🕶"], "", "", ["dark_sunglasses"], 29, 17, 15, 0
					],
					"1f577-fe0f": [
						["🕷️", "🕷"], "", "", ["spider"], 29, 18, 15, 0
					],
					"1f578-fe0f": [
						["🕸️", "🕸"], "", "", ["spider_web"], 29, 19, 15, 0
					],
					"1f579-fe0f": [
						["🕹️", "🕹"], "", "", ["joystick"], 29, 20, 15, 0
					],
					"1f57a": [
						["🕺"], "", "", ["man_dancing"], 29, 21, 15, 0
					],
					"1f587-fe0f": [
						["🖇️", "🖇"], "", "", ["linked_paperclips"], 29, 27, 15, 0
					],
					"1f58a-fe0f": [
						["🖊️", "🖊"], "", "", ["lower_left_ballpoint_pen"], 29, 28, 15, 0
					],
					"1f58b-fe0f": [
						["🖋️", "🖋"], "", "", ["lower_left_fountain_pen"], 29, 29, 15, 0
					],
					"1f58c-fe0f": [
						["🖌️", "🖌"], "", "", ["lower_left_paintbrush"], 29, 30, 15, 0
					],
					"1f58d-fe0f": [
						["🖍️", "🖍"], "", "", ["lower_left_crayon"], 29, 31, 15, 0
					],
					"1f590-fe0f": [
						["🖐️", "🖐"], "", "", ["raised_hand_with_fingers_splayed"], 29, 32, 15, 0
					],
					"1f595": [
						["🖕"], "", "", ["middle_finger", "reversed_hand_with_middle_finger_extended"], 29, 38, 15, 0
					],
					"1f596": [
						["🖖"], "", "", ["spock-hand"], 29, 44, 15, 0
					],
					"1f5a4": [
						["🖤"], "", "", ["black_heart"], 29, 50, 15, 0
					],
					"1f5a5-fe0f": [
						["🖥️", "🖥"], "", "", ["desktop_computer"], 29, 51, 15, 0
					],
					"1f5a8-fe0f": [
						["🖨️", "🖨"], "", "", ["printer"], 30, 0, 15, 0
					],
					"1f5b1-fe0f": [
						["🖱️", "🖱"], "", "", ["three_button_mouse"], 30, 1, 15, 0
					],
					"1f5b2-fe0f": [
						["🖲️", "🖲"], "", "", ["trackball"], 30, 2, 15, 0
					],
					"1f5bc-fe0f": [
						["🖼️", "🖼"], "", "", ["frame_with_picture"], 30, 3, 15, 0
					],
					"1f5c2-fe0f": [
						["🗂️", "🗂"], "", "", ["card_index_dividers"], 30, 4, 15, 0
					],
					"1f5c3-fe0f": [
						["🗃️", "🗃"], "", "", ["card_file_box"], 30, 5, 15, 0
					],
					"1f5c4-fe0f": [
						["🗄️", "🗄"], "", "", ["file_cabinet"], 30, 6, 15, 0
					],
					"1f5d1-fe0f": [
						["🗑️", "🗑"], "", "", ["wastebasket"], 30, 7, 15, 0
					],
					"1f5d2-fe0f": [
						["🗒️", "🗒"], "", "", ["spiral_note_pad"], 30, 8, 15, 0
					],
					"1f5d3-fe0f": [
						["🗓️", "🗓"], "", "", ["spiral_calendar_pad"], 30, 9, 15, 0
					],
					"1f5dc-fe0f": [
						["🗜️", "🗜"], "", "", ["compression"], 30, 10, 15, 0
					],
					"1f5dd-fe0f": [
						["🗝️", "🗝"], "", "", ["old_key"], 30, 11, 15, 0
					],
					"1f5de-fe0f": [
						["🗞️", "🗞"], "", "", ["rolled_up_newspaper"], 30, 12, 15, 0
					],
					"1f5e1-fe0f": [
						["🗡️", "🗡"], "", "", ["dagger_knife"], 30, 13, 15, 0
					],
					"1f5e3-fe0f": [
						["🗣️", "🗣"], "", "", ["speaking_head_in_silhouette"], 30, 14, 15, 0
					],
					"1f5e8-fe0f": [
						["🗨️", "🗨"], "", "", ["left_speech_bubble"], 30, 15, 15, 0
					],
					"1f5ef-fe0f": [
						["🗯️", "🗯"], "", "", ["right_anger_bubble"], 30, 16, 15, 0
					],
					"1f5f3-fe0f": [
						["🗳️", "🗳"], "", "", ["ballot_box_with_ballot"], 30, 17, 15, 0
					],
					"1f5fa-fe0f": [
						["🗺️", "🗺"], "", "", ["world_map"], 30, 18, 15, 0
					],
					"1f5fb": [
						["🗻"], "", "󾓃", ["mount_fuji"], 30, 19, 31, 0
					],
					"1f5fc": [
						["🗼"], "", "󾓄", ["tokyo_tower"], 30, 20, 31, 0
					],
					"1f5fd": [
						["🗽"], "", "󾓆", ["statue_of_liberty"], 30, 21, 31, 0
					],
					"1f5fe": [
						["🗾"], "", "󾓇", ["japan"], 30, 22, 31, 0
					],
					"1f5ff": [
						["🗿"], "", "󾓈", ["moyai"], 30, 23, 31, 0
					],
					"1f600": [
						["😀"], "", "", ["grinning"], 30, 24, 31, 0, ":D"
					],
					"1f601": [
						["😁"], "", "󾌳", ["grin"], 30, 25, 31, 0
					],
					"1f602": [
						["😂"], "", "󾌴", ["joy"], 30, 26, 31, 0
					],
					"1f603": [
						["😃"], "", "󾌰", ["smiley"], 30, 27, 31, 0, ":)"
					],
					"1f604": [
						["😄"], "", "󾌸", ["smile"], 30, 28, 31, 0, ":)"
					],
					"1f605": [
						["😅"], "", "󾌱", ["sweat_smile"], 30, 29, 31, 0
					],
					"1f606": [
						["😆"], "", "󾌲", ["laughing", "satisfied"], 30, 30, 31, 0
					],
					"1f607": [
						["😇"], "", "", ["innocent"], 30, 31, 31, 0
					],
					"1f608": [
						["😈"], "", "", ["smiling_imp"], 30, 32, 31, 0
					],
					"1f609": [
						["😉"], "", "󾍇", ["wink"], 30, 33, 31, 0, ";)"
					],
					"1f60a": [
						["😊"], "", "󾌵", ["blush"], 30, 34, 31, 0, ":)"
					],
					"1f60b": [
						["😋"], "", "󾌫", ["yum"], 30, 35, 31, 0
					],
					"1f60c": [
						["😌"], "", "󾌾", ["relieved"], 30, 36, 31, 0
					],
					"1f60d": [
						["😍"], "", "󾌧", ["heart_eyes"], 30, 37, 31, 0
					],
					"1f60e": [
						["😎"], "", "", ["sunglasses"], 30, 38, 31, 0
					],
					"1f60f": [
						["😏"], "", "󾍃", ["smirk"], 30, 39, 31, 0
					],
					"1f610": [
						["😐"], "", "", ["neutral_face"], 30, 40, 31, 0
					],
					"1f611": [
						["😑"], "", "", ["expressionless"], 30, 41, 31, 0
					],
					"1f612": [
						["😒"], "", "󾌦", ["unamused"], 30, 42, 31, 0, ":("
					],
					"1f613": [
						["😓"], "", "󾍄", ["sweat"], 30, 43, 31, 0
					],
					"1f614": [
						["😔"], "", "󾍀", ["pensive"], 30, 44, 31, 0
					],
					"1f615": [
						["😕"], "", "", ["confused"], 30, 45, 31, 0
					],
					"1f616": [
						["😖"], "", "󾌿", ["confounded"], 30, 46, 31, 0
					],
					"1f617": [
						["😗"], "", "", ["kissing"], 30, 47, 31, 0
					],
					"1f618": [
						["😘"], "", "󾌬", ["kissing_heart"], 30, 48, 31, 0
					],
					"1f619": [
						["😙"], "", "", ["kissing_smiling_eyes"], 30, 49, 31, 0
					],
					"1f61a": [
						["😚"], "", "󾌭", ["kissing_closed_eyes"], 30, 50, 31, 0
					],
					"1f61b": [
						["😛"], "", "", ["stuck_out_tongue"], 30, 51, 31, 0, ":p"
					],
					"1f61c": [
						["😜"], "", "󾌩", ["stuck_out_tongue_winking_eye"], 31, 0, 31, 0, ";p"
					],
					"1f61d": [
						["😝"], "", "󾌪", ["stuck_out_tongue_closed_eyes"], 31, 1, 31, 0
					],
					"1f61e": [
						["😞"], "", "󾌣", ["disappointed"], 31, 2, 31, 0, ":("
					],
					"1f61f": [
						["😟"], "", "", ["worried"], 31, 3, 31, 0
					],
					"1f620": [
						["😠"], "", "󾌠", ["angry"], 31, 4, 31, 0
					],
					"1f621": [
						["😡"], "", "󾌽", ["rage"], 31, 5, 31, 0
					],
					"1f622": [
						["😢"], "", "󾌹", ["cry"], 31, 6, 31, 0, ":'("
					],
					"1f623": [
						["😣"], "", "󾌼", ["persevere"], 31, 7, 31, 0
					],
					"1f624": [
						["😤"], "", "󾌨", ["triumph"], 31, 8, 31, 0
					],
					"1f625": [
						["😥"], "", "󾍅", ["disappointed_relieved"], 31, 9, 31, 0
					],
					"1f626": [
						["😦"], "", "", ["frowning"], 31, 10, 31, 0
					],
					"1f627": [
						["😧"], "", "", ["anguished"], 31, 11, 31, 0
					],
					"1f628": [
						["😨"], "", "󾌻", ["fearful"], 31, 12, 31, 0
					],
					"1f629": [
						["😩"], "", "󾌡", ["weary"], 31, 13, 31, 0
					],
					"1f62a": [
						["😪"], "", "󾍂", ["sleepy"], 31, 14, 31, 0
					],
					"1f62b": [
						["😫"], "", "󾍆", ["tired_face"], 31, 15, 31, 0
					],
					"1f62c": [
						["😬"], "", "", ["grimacing"], 31, 16, 31, 0
					],
					"1f62d": [
						["😭"], "", "󾌺", ["sob"], 31, 17, 31, 0, ":'("
					],
					"1f62e": [
						["😮"], "", "", ["open_mouth"], 31, 18, 31, 0
					],
					"1f62f": [
						["😯"], "", "", ["hushed"], 31, 19, 31, 0
					],
					"1f630": [
						["😰"], "", "󾌥", ["cold_sweat"], 31, 20, 31, 0
					],
					"1f631": [
						["😱"], "", "󾍁", ["scream"], 31, 21, 31, 0
					],
					"1f632": [
						["😲"], "", "󾌢", ["astonished"], 31, 22, 31, 0
					],
					"1f633": [
						["😳"], "", "󾌯", ["flushed"], 31, 23, 31, 0
					],
					"1f634": [
						["😴"], "", "", ["sleeping"], 31, 24, 31, 0
					],
					"1f635": [
						["😵"], "", "󾌤", ["dizzy_face"], 31, 25, 31, 0
					],
					"1f636": [
						["😶"], "", "", ["no_mouth"], 31, 26, 31, 0
					],
					"1f637": [
						["😷"], "", "󾌮", ["mask"], 31, 27, 31, 0
					],
					"1f638": [
						["😸"], "", "󾍉", ["smile_cat"], 31, 28, 31, 0
					],
					"1f639": [
						["😹"], "", "󾍊", ["joy_cat"], 31, 29, 31, 0
					],
					"1f63a": [
						["😺"], "", "󾍈", ["smiley_cat"], 31, 30, 31, 0
					],
					"1f63b": [
						["😻"], "", "󾍌", ["heart_eyes_cat"], 31, 31, 31, 0
					],
					"1f63c": [
						["😼"], "", "󾍏", ["smirk_cat"], 31, 32, 31, 0
					],
					"1f63d": [
						["😽"], "", "󾍋", ["kissing_cat"], 31, 33, 31, 0
					],
					"1f63e": [
						["😾"], "", "󾍎", ["pouting_cat"], 31, 34, 31, 0
					],
					"1f63f": [
						["😿"], "", "󾍍", ["crying_cat_face"], 31, 35, 31, 0
					],
					"1f640": [
						["🙀"], "", "󾍐", ["scream_cat"], 31, 36, 31, 0
					],
					"1f641": [
						["🙁"], "", "", ["slightly_frowning_face"], 31, 37, 15, 0
					],
					"1f642": [
						["🙂"], "", "", ["slightly_smiling_face"], 31, 38, 31, 0
					],
					"1f643": [
						["🙃"], "", "", ["upside_down_face"], 31, 39, 15, 0
					],
					"1f644": [
						["🙄"], "", "", ["face_with_rolling_eyes"], 31, 40, 15, 0
					],
					"1f645-200d-2640-fe0f": [
						["🙅‍♀️", "🙅‍♀", "🙅"], "", "", ["woman-gesturing-no", "no_good"], 31, 41, 15, 0
					],
					"1f645-200d-2642-fe0f": [
						["🙅‍♂️", "🙅‍♂"], "", "", ["man-gesturing-no"], 31, 47, 15, 0
					],
					"1f646-200d-2640-fe0f": [
						["🙆‍♀️", "🙆‍♀", "🙆"], "", "", ["woman-gesturing-ok", "ok_woman"], 32, 7, 15, 0
					],
					"1f646-200d-2642-fe0f": [
						["🙆‍♂️", "🙆‍♂"], "", "", ["man-gesturing-ok"], 32, 13, 15, 0
					],
					"1f647-200d-2640-fe0f": [
						["🙇‍♀️", "🙇‍♀"], "", "", ["woman-bowing"], 32, 25, 15, 0
					],
					"1f647-200d-2642-fe0f": [
						["🙇‍♂️", "🙇‍♂", "🙇"], "", "", ["man-bowing", "bow"], 32, 31, 15, 0
					],
					"1f648": [
						["🙈"], "", "󾍔", ["see_no_evil"], 32, 43, 31, 0
					],
					"1f649": [
						["🙉"], "", "󾍖", ["hear_no_evil"], 32, 44, 31, 0
					],
					"1f64a": [
						["🙊"], "", "󾍕", ["speak_no_evil"], 32, 45, 31, 0
					],
					"1f64b-200d-2640-fe0f": [
						["🙋‍♀️", "🙋‍♀", "🙋"], "", "", ["woman-raising-hand", "raising_hand"], 32, 46, 15, 0
					],
					"1f64b-200d-2642-fe0f": [
						["🙋‍♂️", "🙋‍♂"], "", "", ["man-raising-hand"], 33, 0, 15, 0
					],
					"1f64c": [
						["🙌"], "", "󾍘", ["raised_hands"], 33, 12, 31, 0
					],
					"1f64d-200d-2640-fe0f": [
						["🙍‍♀️", "🙍‍♀", "🙍"], "", "", ["woman-frowning", "person_frowning"], 33, 18, 15, 0
					],
					"1f64d-200d-2642-fe0f": [
						["🙍‍♂️", "🙍‍♂"], "", "", ["man-frowning"], 33, 24, 15, 0
					],
					"1f64e-200d-2640-fe0f": [
						["🙎‍♀️", "🙎‍♀", "🙎"], "", "", ["woman-pouting", "person_with_pouting_face"], 33, 36, 15, 0
					],
					"1f64e-200d-2642-fe0f": [
						["🙎‍♂️", "🙎‍♂"], "", "", ["man-pouting"], 33, 42, 15, 0
					],
					"1f64f": [
						["🙏"], "", "󾍛", ["pray"], 34, 2, 31, 0
					],
					"1f680": [
						["🚀"], "", "󾟭", ["rocket"], 34, 8, 31, 0
					],
					"1f681": [
						["🚁"], "", "", ["helicopter"], 34, 9, 31, 0
					],
					"1f682": [
						["🚂"], "", "", ["steam_locomotive"], 34, 10, 31, 0
					],
					"1f683": [
						["🚃"], "", "󾟟", ["railway_car"], 34, 11, 31, 0
					],
					"1f684": [
						["🚄"], "", "󾟢", ["bullettrain_side"], 34, 12, 31, 0
					],
					"1f685": [
						["🚅"], "", "󾟣", ["bullettrain_front"], 34, 13, 31, 0
					],
					"1f686": [
						["🚆"], "", "", ["train2"], 34, 14, 31, 0
					],
					"1f687": [
						["🚇"], "", "󾟠", ["metro"], 34, 15, 31, 0
					],
					"1f688": [
						["🚈"], "", "", ["light_rail"], 34, 16, 31, 0
					],
					"1f689": [
						["🚉"], "", "󾟬", ["station"], 34, 17, 31, 0
					],
					"1f68a": [
						["🚊"], "", "", ["tram"], 34, 18, 31, 0
					],
					"1f68b": [
						["🚋"], "", "", ["train"], 34, 19, 31, 0
					],
					"1f68c": [
						["🚌"], "", "󾟦", ["bus"], 34, 20, 31, 0
					],
					"1f68d": [
						["🚍"], "", "", ["oncoming_bus"], 34, 21, 31, 0
					],
					"1f68e": [
						["🚎"], "", "", ["trolleybus"], 34, 22, 31, 0
					],
					"1f68f": [
						["🚏"], "", "󾟧", ["busstop"], 34, 23, 31, 0
					],
					"1f690": [
						["🚐"], "", "", ["minibus"], 34, 24, 31, 0
					],
					"1f691": [
						["🚑"], "", "󾟳", ["ambulance"], 34, 25, 31, 0
					],
					"1f692": [
						["🚒"], "", "󾟲", ["fire_engine"], 34, 26, 31, 0
					],
					"1f693": [
						["🚓"], "", "󾟴", ["police_car"], 34, 27, 31, 0
					],
					"1f694": [
						["🚔"], "", "", ["oncoming_police_car"], 34, 28, 31, 0
					],
					"1f695": [
						["🚕"], "", "󾟯", ["taxi"], 34, 29, 31, 0
					],
					"1f696": [
						["🚖"], "", "", ["oncoming_taxi"], 34, 30, 31, 0
					],
					"1f697": [
						["🚗"], "", "󾟤", ["car", "red_car"], 34, 31, 31, 0
					],
					"1f698": [
						["🚘"], "", "", ["oncoming_automobile"], 34, 32, 31, 0
					],
					"1f699": [
						["🚙"], "", "󾟥", ["blue_car"], 34, 33, 31, 0
					],
					"1f69a": [
						["🚚"], "", "󾟱", ["truck"], 34, 34, 31, 0
					],
					"1f69b": [
						["🚛"], "", "", ["articulated_lorry"], 34, 35, 31, 0
					],
					"1f69c": [
						["🚜"], "", "", ["tractor"], 34, 36, 31, 0
					],
					"1f69d": [
						["🚝"], "", "", ["monorail"], 34, 37, 31, 0
					],
					"1f69e": [
						["🚞"], "", "", ["mountain_railway"], 34, 38, 31, 0
					],
					"1f69f": [
						["🚟"], "", "", ["suspension_railway"], 34, 39, 31, 0
					],
					"1f6a0": [
						["🚠"], "", "", ["mountain_cableway"], 34, 40, 31, 0
					],
					"1f6a1": [
						["🚡"], "", "", ["aerial_tramway"], 34, 41, 31, 0
					],
					"1f6a2": [
						["🚢"], "", "󾟨", ["ship"], 34, 42, 31, 0
					],
					"1f6a3-200d-2640-fe0f": [
						["🚣‍♀️", "🚣‍♀"], "", "", ["woman-rowing-boat"], 34, 43, 15, 0
					],
					"1f6a3-200d-2642-fe0f": [
						["🚣‍♂️", "🚣‍♂", "🚣"], "", "", ["man-rowing-boat", "rowboat"], 34, 49, 15, 0
					],
					"1f6a4": [
						["🚤"], "", "󾟮", ["speedboat"], 35, 9, 31, 0
					],
					"1f6a5": [
						["🚥"], "", "󾟷", ["traffic_light"], 35, 10, 31, 0
					],
					"1f6a6": [
						["🚦"], "", "", ["vertical_traffic_light"], 35, 11, 31, 0
					],
					"1f6a7": [
						["🚧"], "", "󾟸", ["construction"], 35, 12, 31, 0
					],
					"1f6a8": [
						["🚨"], "", "󾟹", ["rotating_light"], 35, 13, 31, 0
					],
					"1f6a9": [
						["🚩"], "", "󾬢", ["triangular_flag_on_post"], 35, 14, 31, 0
					],
					"1f6aa": [
						["🚪"], "", "󾓳", ["door"], 35, 15, 31, 0
					],
					"1f6ab": [
						["🚫"], "", "󾭈", ["no_entry_sign"], 35, 16, 31, 0
					],
					"1f6ac": [
						["🚬"], "", "󾬞", ["smoking"], 35, 17, 31, 0
					],
					"1f6ad": [
						["🚭"], "", "󾬟", ["no_smoking"], 35, 18, 31, 0
					],
					"1f6ae": [
						["🚮"], "", "", ["put_litter_in_its_place"], 35, 19, 31, 0
					],
					"1f6af": [
						["🚯"], "", "", ["do_not_litter"], 35, 20, 31, 0
					],
					"1f6b0": [
						["🚰"], "", "", ["potable_water"], 35, 21, 31, 0
					],
					"1f6b1": [
						["🚱"], "", "", ["non-potable_water"], 35, 22, 31, 0
					],
					"1f6b2": [
						["🚲"], "", "󾟫", ["bike"], 35, 23, 31, 0
					],
					"1f6b3": [
						["🚳"], "", "", ["no_bicycles"], 35, 24, 31, 0
					],
					"1f6b4-200d-2640-fe0f": [
						["🚴‍♀️", "🚴‍♀"], "", "", ["woman-biking"], 35, 25, 15, 0
					],
					"1f6b4-200d-2642-fe0f": [
						["🚴‍♂️", "🚴‍♂", "🚴"], "", "", ["man-biking", "bicyclist"], 35, 31, 15, 0
					],
					"1f6b5-200d-2640-fe0f": [
						["🚵‍♀️", "🚵‍♀"], "", "", ["woman-mountain-biking"], 35, 43, 15, 0
					],
					"1f6b5-200d-2642-fe0f": [
						["🚵‍♂️", "🚵‍♂", "🚵"], "", "", ["man-mountain-biking", "mountain_bicyclist"], 35, 49, 15, 0
					],
					"1f6b6-200d-2640-fe0f": [
						["🚶‍♀️", "🚶‍♀"], "", "", ["woman-walking"], 36, 9, 15, 0
					],
					"1f6b6-200d-2642-fe0f": [
						["🚶‍♂️", "🚶‍♂", "🚶"], "", "", ["man-walking", "walking"], 36, 15, 15, 0
					],
					"1f6b7": [
						["🚷"], "", "", ["no_pedestrians"], 36, 27, 31, 0
					],
					"1f6b8": [
						["🚸"], "", "", ["children_crossing"], 36, 28, 31, 0
					],
					"1f6b9": [
						["🚹"], "", "󾬳", ["mens"], 36, 29, 31, 0
					],
					"1f6ba": [
						["🚺"], "", "󾬴", ["womens"], 36, 30, 31, 0
					],
					"1f6bb": [
						["🚻"], "", "󾔆", ["restroom"], 36, 31, 31, 0
					],
					"1f6bc": [
						["🚼"], "", "󾬵", ["baby_symbol"], 36, 32, 31, 0
					],
					"1f6bd": [
						["🚽"], "", "󾔇", ["toilet"], 36, 33, 31, 0
					],
					"1f6be": [
						["🚾"], "", "󾔈", ["wc"], 36, 34, 31, 0
					],
					"1f6bf": [
						["🚿"], "", "", ["shower"], 36, 35, 31, 0
					],
					"1f6c0": [
						["🛀"], "", "󾔅", ["bath"], 36, 36, 31, 0
					],
					"1f6c1": [
						["🛁"], "", "", ["bathtub"], 36, 42, 31, 0
					],
					"1f6c2": [
						["🛂"], "", "", ["passport_control"], 36, 43, 31, 0
					],
					"1f6c3": [
						["🛃"], "", "", ["customs"], 36, 44, 31, 0
					],
					"1f6c4": [
						["🛄"], "", "", ["baggage_claim"], 36, 45, 31, 0
					],
					"1f6c5": [
						["🛅"], "", "", ["left_luggage"], 36, 46, 31, 0
					],
					"1f6cb-fe0f": [
						["🛋️", "🛋"], "", "", ["couch_and_lamp"], 36, 47, 15, 0
					],
					"1f6cc": [
						["🛌"], "", "", ["sleeping_accommodation"], 36, 48, 15, 0
					],
					"1f6cd-fe0f": [
						["🛍️", "🛍"], "", "", ["shopping_bags"], 37, 2, 15, 0
					],
					"1f6ce-fe0f": [
						["🛎️", "🛎"], "", "", ["bellhop_bell"], 37, 3, 15, 0
					],
					"1f6cf-fe0f": [
						["🛏️", "🛏"], "", "", ["bed"], 37, 4, 15, 0
					],
					"1f6d0": [
						["🛐"], "", "", ["place_of_worship"], 37, 5, 15, 0
					],
					"1f6d1": [
						["🛑"], "", "", ["octagonal_sign"], 37, 6, 15, 0
					],
					"1f6d2": [
						["🛒"], "", "", ["shopping_trolley"], 37, 7, 15, 0
					],
					"1f6e0-fe0f": [
						["🛠️", "🛠"], "", "", ["hammer_and_wrench"], 37, 8, 15, 0
					],
					"1f6e1-fe0f": [
						["🛡️", "🛡"], "", "", ["shield"], 37, 9, 15, 0
					],
					"1f6e2-fe0f": [
						["🛢️", "🛢"], "", "", ["oil_drum"], 37, 10, 15, 0
					],
					"1f6e3-fe0f": [
						["🛣️", "🛣"], "", "", ["motorway"], 37, 11, 15, 0
					],
					"1f6e4-fe0f": [
						["🛤️", "🛤"], "", "", ["railway_track"], 37, 12, 15, 0
					],
					"1f6e5-fe0f": [
						["🛥️", "🛥"], "", "", ["motor_boat"], 37, 13, 15, 0
					],
					"1f6e9-fe0f": [
						["🛩️", "🛩"], "", "", ["small_airplane"], 37, 14, 15, 0
					],
					"1f6eb": [
						["🛫"], "", "", ["airplane_departure"], 37, 15, 15, 0
					],
					"1f6ec": [
						["🛬"], "", "", ["airplane_arriving"], 37, 16, 15, 0
					],
					"1f6f0-fe0f": [
						["🛰️", "🛰"], "", "", ["satellite"], 37, 17, 15, 0
					],
					"1f6f3-fe0f": [
						["🛳️", "🛳"], "", "", ["passenger_ship"], 37, 18, 15, 0
					],
					"1f6f4": [
						["🛴"], "", "", ["scooter"], 37, 19, 15, 0
					],
					"1f6f5": [
						["🛵"], "", "", ["motor_scooter"], 37, 20, 15, 0
					],
					"1f6f6": [
						["🛶"], "", "", ["canoe"], 37, 21, 15, 0
					],
					"1f6f7": [
						["🛷"], "", "", ["sled"], 37, 22, 15, 0
					],
					"1f6f8": [
						["🛸"], "", "", ["flying_saucer"], 37, 23, 15, 0
					],
					"1f910": [
						["🤐"], "", "", ["zipper_mouth_face"], 37, 24, 15, 0
					],
					"1f911": [
						["🤑"], "", "", ["money_mouth_face"], 37, 25, 15, 0
					],
					"1f912": [
						["🤒"], "", "", ["face_with_thermometer"], 37, 26, 15, 0
					],
					"1f913": [
						["🤓"], "", "", ["nerd_face"], 37, 27, 15, 0
					],
					"1f914": [
						["🤔"], "", "", ["thinking_face"], 37, 28, 15, 0
					],
					"1f915": [
						["🤕"], "", "", ["face_with_head_bandage"], 37, 29, 15, 0
					],
					"1f916": [
						["🤖"], "", "", ["robot_face"], 37, 30, 15, 0
					],
					"1f917": [
						["🤗"], "", "", ["hugging_face"], 37, 31, 15, 0
					],
					"1f918": [
						["🤘"], "", "", ["the_horns", "sign_of_the_horns"], 37, 32, 15, 0
					],
					"1f919": [
						["🤙"], "", "", ["call_me_hand"], 37, 38, 15, 0
					],
					"1f91a": [
						["🤚"], "", "", ["raised_back_of_hand"], 37, 44, 15, 0
					],
					"1f91b": [
						["🤛"], "", "", ["left-facing_fist"], 37, 50, 15, 0
					],
					"1f91c": [
						["🤜"], "", "", ["right-facing_fist"], 38, 4, 15, 0
					],
					"1f91d": [
						["🤝"], "", "", ["handshake"], 38, 10, 15, 0
					],
					"1f91e": [
						["🤞"], "", "", ["crossed_fingers", "hand_with_index_and_middle_fingers_crossed"], 38, 11, 15, 0
					],
					"1f91f": [
						["🤟"], "", "", ["i_love_you_hand_sign"], 38, 17, 15, 0
					],
					"1f920": [
						["🤠"], "", "", ["face_with_cowboy_hat"], 38, 23, 15, 0
					],
					"1f921": [
						["🤡"], "", "", ["clown_face"], 38, 24, 15, 0
					],
					"1f922": [
						["🤢"], "", "", ["nauseated_face"], 38, 25, 15, 0
					],
					"1f923": [
						["🤣"], "", "", ["rolling_on_the_floor_laughing"], 38, 26, 15, 0
					],
					"1f924": [
						["🤤"], "", "", ["drooling_face"], 38, 27, 15, 0
					],
					"1f925": [
						["🤥"], "", "", ["lying_face"], 38, 28, 15, 0
					],
					"1f926-200d-2640-fe0f": [
						["🤦‍♀️", "🤦‍♀"], "", "", ["woman-facepalming"], 38, 29, 15, 0
					],
					"1f926-200d-2642-fe0f": [
						["🤦‍♂️", "🤦‍♂"], "", "", ["man-facepalming"], 38, 35, 15, 0
					],
					"1f926": [
						["🤦"], "", "", ["face_palm"], 38, 41, 7, 0
					],
					"1f927": [
						["🤧"], "", "", ["sneezing_face"], 38, 47, 15, 0
					],
					"1f928": [
						["🤨"], "", "", ["face_with_raised_eyebrow", "face_with_one_eyebrow_raised"], 38, 48, 15, 0
					],
					"1f929": [
						["🤩"], "", "", ["star-struck", "grinning_face_with_star_eyes"], 38, 49, 15, 0
					],
					"1f92a": [
						["🤪"], "", "", ["zany_face", "grinning_face_with_one_large_and_one_small_eye"], 38, 50, 15, 0
					],
					"1f92b": [
						["🤫"], "", "", ["shushing_face", "face_with_finger_covering_closed_lips"], 38, 51, 15, 0
					],
					"1f92c": [
						["🤬"], "", "", ["face_with_symbols_on_mouth", "serious_face_with_symbols_covering_mouth"], 39, 0, 15, 0
					],
					"1f92d": [
						["🤭"], "", "", ["face_with_hand_over_mouth", "smiling_face_with_smiling_eyes_and_hand_covering_mouth"], 39, 1, 15, 0
					],
					"1f92e": [
						["🤮"], "", "", ["face_vomiting", "face_with_open_mouth_vomiting"], 39, 2, 15, 0
					],
					"1f92f": [
						["🤯"], "", "", ["exploding_head", "shocked_face_with_exploding_head"], 39, 3, 15, 0
					],
					"1f930": [
						["🤰"], "", "", ["pregnant_woman"], 39, 4, 15, 0
					],
					"1f931": [
						["🤱"], "", "", ["breast-feeding"], 39, 10, 15, 0
					],
					"1f932": [
						["🤲"], "", "", ["palms_up_together"], 39, 16, 15, 0
					],
					"1f933": [
						["🤳"], "", "", ["selfie"], 39, 22, 15, 0
					],
					"1f934": [
						["🤴"], "", "", ["prince"], 39, 28, 15, 0
					],
					"1f935": [
						["🤵"], "", "", ["man_in_tuxedo"], 39, 34, 15, 0
					],
					"1f936": [
						["🤶"], "", "", ["mrs_claus", "mother_christmas"], 39, 40, 15, 0
					],
					"1f937-200d-2640-fe0f": [
						["🤷‍♀️", "🤷‍♀"], "", "", ["woman-shrugging"], 39, 46, 15, 0
					],
					"1f937-200d-2642-fe0f": [
						["🤷‍♂️", "🤷‍♂"], "", "", ["man-shrugging"], 40, 0, 15, 0
					],
					"1f937": [
						["🤷"], "", "", ["shrug"], 40, 6, 7, 0
					],
					"1f938-200d-2640-fe0f": [
						["🤸‍♀️", "🤸‍♀"], "", "", ["woman-cartwheeling"], 40, 12, 15, 0
					],
					"1f938-200d-2642-fe0f": [
						["🤸‍♂️", "🤸‍♂"], "", "", ["man-cartwheeling"], 40, 18, 15, 0
					],
					"1f938": [
						["🤸"], "", "", ["person_doing_cartwheel"], 40, 24, 7, 0
					],
					"1f939-200d-2640-fe0f": [
						["🤹‍♀️", "🤹‍♀"], "", "", ["woman-juggling"], 40, 30, 7, 0
					],
					"1f939-200d-2642-fe0f": [
						["🤹‍♂️", "🤹‍♂"], "", "", ["man-juggling"], 40, 36, 7, 0
					],
					"1f939": [
						["🤹"], "", "", ["juggling"], 40, 42, 15, 0
					],
					"1f93a": [
						["🤺"], "", "", ["fencer"], 40, 48, 15, 0
					],
					"1f93c-200d-2640-fe0f": [
						["🤼‍♀️", "🤼‍♀"], "", "", ["woman-wrestling"], 40, 49, 15, 0
					],
					"1f93c-200d-2642-fe0f": [
						["🤼‍♂️", "🤼‍♂"], "", "", ["man-wrestling"], 40, 50, 15, 0
					],
					"1f93c": [
						["🤼"], "", "", ["wrestlers"], 40, 51, 7, 0
					],
					"1f93d-200d-2640-fe0f": [
						["🤽‍♀️", "🤽‍♀"], "", "", ["woman-playing-water-polo"], 41, 0, 15, 0
					],
					"1f93d-200d-2642-fe0f": [
						["🤽‍♂️", "🤽‍♂"], "", "", ["man-playing-water-polo"], 41, 6, 15, 0
					],
					"1f93d": [
						["🤽"], "", "", ["water_polo"], 41, 12, 7, 0
					],
					"1f93e-200d-2640-fe0f": [
						["🤾‍♀️", "🤾‍♀"], "", "", ["woman-playing-handball"], 41, 18, 15, 0
					],
					"1f93e-200d-2642-fe0f": [
						["🤾‍♂️", "🤾‍♂"], "", "", ["man-playing-handball"], 41, 24, 15, 0
					],
					"1f93e": [
						["🤾"], "", "", ["handball"], 41, 30, 7, 0
					],
					"1f940": [
						["🥀"], "", "", ["wilted_flower"], 41, 36, 15, 0
					],
					"1f941": [
						["🥁"], "", "", ["drum_with_drumsticks"], 41, 37, 15, 0
					],
					"1f942": [
						["🥂"], "", "", ["clinking_glasses"], 41, 38, 15, 0
					],
					"1f943": [
						["🥃"], "", "", ["tumbler_glass"], 41, 39, 15, 0
					],
					"1f944": [
						["🥄"], "", "", ["spoon"], 41, 40, 15, 0
					],
					"1f945": [
						["🥅"], "", "", ["goal_net"], 41, 41, 15, 0
					],
					"1f947": [
						["🥇"], "", "", ["first_place_medal"], 41, 42, 15, 0
					],
					"1f948": [
						["🥈"], "", "", ["second_place_medal"], 41, 43, 15, 0
					],
					"1f949": [
						["🥉"], "", "", ["third_place_medal"], 41, 44, 15, 0
					],
					"1f94a": [
						["🥊"], "", "", ["boxing_glove"], 41, 45, 15, 0
					],
					"1f94b": [
						["🥋"], "", "", ["martial_arts_uniform"], 41, 46, 15, 0
					],
					"1f94c": [
						["🥌"], "", "", ["curling_stone"], 41, 47, 15, 0
					],
					"1f950": [
						["🥐"], "", "", ["croissant"], 41, 48, 15, 0
					],
					"1f951": [
						["🥑"], "", "", ["avocado"], 41, 49, 15, 0
					],
					"1f952": [
						["🥒"], "", "", ["cucumber"], 41, 50, 15, 0
					],
					"1f953": [
						["🥓"], "", "", ["bacon"], 41, 51, 15, 0
					],
					"1f954": [
						["🥔"], "", "", ["potato"], 42, 0, 15, 0
					],
					"1f955": [
						["🥕"], "", "", ["carrot"], 42, 1, 15, 0
					],
					"1f956": [
						["🥖"], "", "", ["baguette_bread"], 42, 2, 15, 0
					],
					"1f957": [
						["🥗"], "", "", ["green_salad"], 42, 3, 15, 0
					],
					"1f958": [
						["🥘"], "", "", ["shallow_pan_of_food"], 42, 4, 15, 0
					],
					"1f959": [
						["🥙"], "", "", ["stuffed_flatbread"], 42, 5, 15, 0
					],
					"1f95a": [
						["🥚"], "", "", ["egg"], 42, 6, 15, 0
					],
					"1f95b": [
						["🥛"], "", "", ["glass_of_milk"], 42, 7, 15, 0
					],
					"1f95c": [
						["🥜"], "", "", ["peanuts"], 42, 8, 15, 0
					],
					"1f95d": [
						["🥝"], "", "", ["kiwifruit"], 42, 9, 15, 0
					],
					"1f95e": [
						["🥞"], "", "", ["pancakes"], 42, 10, 15, 0
					],
					"1f95f": [
						["🥟"], "", "", ["dumpling"], 42, 11, 15, 0
					],
					"1f960": [
						["🥠"], "", "", ["fortune_cookie"], 42, 12, 15, 0
					],
					"1f961": [
						["🥡"], "", "", ["takeout_box"], 42, 13, 15, 0
					],
					"1f962": [
						["🥢"], "", "", ["chopsticks"], 42, 14, 15, 0
					],
					"1f963": [
						["🥣"], "", "", ["bowl_with_spoon"], 42, 15, 15, 0
					],
					"1f964": [
						["🥤"], "", "", ["cup_with_straw"], 42, 16, 15, 0
					],
					"1f965": [
						["🥥"], "", "", ["coconut"], 42, 17, 15, 0
					],
					"1f966": [
						["🥦"], "", "", ["broccoli"], 42, 18, 15, 0
					],
					"1f967": [
						["🥧"], "", "", ["pie"], 42, 19, 15, 0
					],
					"1f968": [
						["🥨"], "", "", ["pretzel"], 42, 20, 15, 0
					],
					"1f969": [
						["🥩"], "", "", ["cut_of_meat"], 42, 21, 15, 0
					],
					"1f96a": [
						["🥪"], "", "", ["sandwich"], 42, 22, 15, 0
					],
					"1f96b": [
						["🥫"], "", "", ["canned_food"], 42, 23, 15, 0
					],
					"1f980": [
						["🦀"], "", "", ["crab"], 42, 24, 15, 0
					],
					"1f981": [
						["🦁"], "", "", ["lion_face"], 42, 25, 15, 0
					],
					"1f982": [
						["🦂"], "", "", ["scorpion"], 42, 26, 15, 0
					],
					"1f983": [
						["🦃"], "", "", ["turkey"], 42, 27, 15, 0
					],
					"1f984": [
						["🦄"], "", "", ["unicorn_face"], 42, 28, 15, 0
					],
					"1f985": [
						["🦅"], "", "", ["eagle"], 42, 29, 15, 0
					],
					"1f986": [
						["🦆"], "", "", ["duck"], 42, 30, 15, 0
					],
					"1f987": [
						["🦇"], "", "", ["bat"], 42, 31, 15, 0
					],
					"1f988": [
						["🦈"], "", "", ["shark"], 42, 32, 15, 0
					],
					"1f989": [
						["🦉"], "", "", ["owl"], 42, 33, 15, 0
					],
					"1f98a": [
						["🦊"], "", "", ["fox_face"], 42, 34, 15, 0
					],
					"1f98b": [
						["🦋"], "", "", ["butterfly"], 42, 35, 15, 0
					],
					"1f98c": [
						["🦌"], "", "", ["deer"], 42, 36, 15, 0
					],
					"1f98d": [
						["🦍"], "", "", ["gorilla"], 42, 37, 15, 0
					],
					"1f98e": [
						["🦎"], "", "", ["lizard"], 42, 38, 15, 0
					],
					"1f98f": [
						["🦏"], "", "", ["rhinoceros"], 42, 39, 15, 0
					],
					"1f990": [
						["🦐"], "", "", ["shrimp"], 42, 40, 15, 0
					],
					"1f991": [
						["🦑"], "", "", ["squid"], 42, 41, 15, 0
					],
					"1f992": [
						["🦒"], "", "", ["giraffe_face"], 42, 42, 15, 0
					],
					"1f993": [
						["🦓"], "", "", ["zebra_face"], 42, 43, 15, 0
					],
					"1f994": [
						["🦔"], "", "", ["hedgehog"], 42, 44, 15, 0
					],
					"1f995": [
						["🦕"], "", "", ["sauropod"], 42, 45, 15, 0
					],
					"1f996": [
						["🦖"], "", "", ["t-rex"], 42, 46, 15, 0
					],
					"1f997": [
						["🦗"], "", "", ["cricket"], 42, 47, 15, 0
					],
					"1f9c0": [
						["🧀"], "", "", ["cheese_wedge"], 42, 48, 15, 0
					],
					"1f9d0": [
						["🧐"], "", "", ["face_with_monocle"], 42, 49, 15, 0
					],
					"1f9d1": [
						["🧑"], "", "", ["adult"], 42, 50, 15, 0
					],
					"1f9d2": [
						["🧒"], "", "", ["child"], 43, 4, 15, 0
					],
					"1f9d3": [
						["🧓"], "", "", ["older_adult"], 43, 10, 15, 0
					],
					"1f9d4": [
						["🧔"], "", "", ["bearded_person"], 43, 16, 15, 0
					],
					"1f9d5": [
						["🧕"], "", "", ["person_with_headscarf"], 43, 22, 15, 0
					],
					"1f9d6-200d-2640-fe0f": [
						["🧖‍♀️", "🧖‍♀"], "", "", ["woman_in_steamy_room"], 43, 28, 15, 0
					],
					"1f9d6-200d-2642-fe0f": [
						["🧖‍♂️", "🧖‍♂", "🧖"], "", "", ["man_in_steamy_room", "person_in_steamy_room"], 43, 34, 15, 0
					],
					"1f9d7-200d-2640-fe0f": [
						["🧗‍♀️", "🧗‍♀", "🧗"], "", "", ["woman_climbing", "person_climbing"], 43, 46, 15, 0
					],
					"1f9d7-200d-2642-fe0f": [
						["🧗‍♂️", "🧗‍♂"], "", "", ["man_climbing"], 44, 0, 15, 0
					],
					"1f9d8-200d-2640-fe0f": [
						["🧘‍♀️", "🧘‍♀", "🧘"], "", "", ["woman_in_lotus_position", "person_in_lotus_position"], 44, 12, 15, 0
					],
					"1f9d8-200d-2642-fe0f": [
						["🧘‍♂️", "🧘‍♂"], "", "", ["man_in_lotus_position"], 44, 18, 15, 0
					],
					"1f9d9-200d-2640-fe0f": [
						["🧙‍♀️", "🧙‍♀", "🧙"], "", "", ["female_mage", "mage"], 44, 30, 15, 0
					],
					"1f9d9-200d-2642-fe0f": [
						["🧙‍♂️", "🧙‍♂"], "", "", ["male_mage"], 44, 36, 15, 0
					],
					"1f9da-200d-2640-fe0f": [
						["🧚‍♀️", "🧚‍♀", "🧚"], "", "", ["female_fairy", "fairy"], 44, 48, 15, 0
					],
					"1f9da-200d-2642-fe0f": [
						["🧚‍♂️", "🧚‍♂"], "", "", ["male_fairy"], 45, 2, 15, 0
					],
					"1f9db-200d-2640-fe0f": [
						["🧛‍♀️", "🧛‍♀", "🧛"], "", "", ["female_vampire", "vampire"], 45, 14, 15, 0
					],
					"1f9db-200d-2642-fe0f": [
						["🧛‍♂️", "🧛‍♂"], "", "", ["male_vampire"], 45, 20, 15, 0
					],
					"1f9dc-200d-2640-fe0f": [
						["🧜‍♀️", "🧜‍♀"], "", "", ["mermaid"], 45, 32, 15, 0
					],
					"1f9dc-200d-2642-fe0f": [
						["🧜‍♂️", "🧜‍♂", "🧜"], "", "", ["merman", "merperson"], 45, 38, 15, 0
					],
					"1f9dd-200d-2640-fe0f": [
						["🧝‍♀️", "🧝‍♀"], "", "", ["female_elf"], 45, 50, 15, 0
					],
					"1f9dd-200d-2642-fe0f": [
						["🧝‍♂️", "🧝‍♂", "🧝"], "", "", ["male_elf", "elf"], 46, 4, 15, 0
					],
					"1f9de-200d-2640-fe0f": [
						["🧞‍♀️", "🧞‍♀"], "", "", ["female_genie"], 46, 16, 15, 0
					],
					"1f9de-200d-2642-fe0f": [
						["🧞‍♂️", "🧞‍♂", "🧞"], "", "", ["male_genie", "genie"], 46, 17, 15, 0
					],
					"1f9df-200d-2640-fe0f": [
						["🧟‍♀️", "🧟‍♀"], "", "", ["female_zombie"], 46, 19, 15, 0
					],
					"1f9df-200d-2642-fe0f": [
						["🧟‍♂️", "🧟‍♂", "🧟"], "", "", ["male_zombie", "zombie"], 46, 20, 15, 0
					],
					"1f9e0": [
						["🧠"], "", "", ["brain"], 46, 22, 15, 0
					],
					"1f9e1": [
						["🧡"], "", "", ["orange_heart"], 46, 23, 15, 0
					],
					"1f9e2": [
						["🧢"], "", "", ["billed_cap"], 46, 24, 15, 0
					],
					"1f9e3": [
						["🧣"], "", "", ["scarf"], 46, 25, 15, 0
					],
					"1f9e4": [
						["🧤"], "", "", ["gloves"], 46, 26, 15, 0
					],
					"1f9e5": [
						["🧥"], "", "", ["coat"], 46, 27, 15, 0
					],
					"1f9e6": [
						["🧦"], "", "", ["socks"], 46, 28, 15, 0
					],
					"203c-fe0f": [
						["‼️", "‼"], "", "󾬆", ["bangbang"], 46, 29, 31, 0
					],
					"2049-fe0f": [
						["⁉️", "⁉"], "", "󾬅", ["interrobang"], 46, 30, 31, 0
					],
					"2122-fe0f": [
						["™️", "™"], "", "󾬪", ["tm"], 46, 31, 31, 0
					],
					"2139-fe0f": [
						["ℹ️", "ℹ"], "", "󾭇", ["information_source"], 46, 32, 31, 0
					],
					"2194-fe0f": [
						["↔️", "↔"], "", "󾫶", ["left_right_arrow"], 46, 33, 31, 0
					],
					"2195-fe0f": [
						["↕️", "↕"], "", "󾫷", ["arrow_up_down"], 46, 34, 31, 0
					],
					"2196-fe0f": [
						["↖️", "↖"], "", "󾫲", ["arrow_upper_left"], 46, 35, 31, 0
					],
					"2197-fe0f": [
						["↗️", "↗"], "", "󾫰", ["arrow_upper_right"], 46, 36, 31, 0
					],
					"2198-fe0f": [
						["↘️", "↘"], "", "󾫱", ["arrow_lower_right"], 46, 37, 31, 0
					],
					"2199-fe0f": [
						["↙️", "↙"], "", "󾫳", ["arrow_lower_left"], 46, 38, 31, 0
					],
					"21a9-fe0f": [
						["↩️", "↩"], "", "󾮃", ["leftwards_arrow_with_hook"], 46, 39, 31, 0
					],
					"21aa-fe0f": [
						["↪️", "↪"], "", "󾮈", ["arrow_right_hook"], 46, 40, 31, 0
					],
					"231a": [
						["⌚"], "", "󾀝", ["watch"], 46, 41, 31, 0
					],
					"231b": [
						["⌛"], "", "󾀜", ["hourglass"], 46, 42, 31, 0
					],
					"2328-fe0f": [
						["⌨️", "⌨"], "", "", ["keyboard"], 46, 43, 15, 0
					],
					"23cf-fe0f": [
						["⏏️", "⏏"], "", "", ["eject"], 46, 44, 15, 0
					],
					"23e9": [
						["⏩"], "", "󾫾", ["fast_forward"], 46, 45, 31, 0
					],
					"23ea": [
						["⏪"], "", "󾫿", ["rewind"], 46, 46, 31, 0
					],
					"23eb": [
						["⏫"], "", "󾬃", ["arrow_double_up"], 46, 47, 31, 0
					],
					"23ec": [
						["⏬"], "", "󾬂", ["arrow_double_down"], 46, 48, 31, 0
					],
					"23ed-fe0f": [
						["⏭️", "⏭"], "", "", ["black_right_pointing_double_triangle_with_vertical_bar"], 46, 49, 15, 0
					],
					"23ee-fe0f": [
						["⏮️", "⏮"], "", "", ["black_left_pointing_double_triangle_with_vertical_bar"], 46, 50, 15, 0
					],
					"23ef-fe0f": [
						["⏯️", "⏯"], "", "", ["black_right_pointing_triangle_with_double_vertical_bar"], 46, 51, 15, 0
					],
					"23f0": [
						["⏰"], "", "󾀪", ["alarm_clock"], 47, 0, 31, 0
					],
					"23f1-fe0f": [
						["⏱️", "⏱"], "", "", ["stopwatch"], 47, 1, 15, 0
					],
					"23f2-fe0f": [
						["⏲️", "⏲"], "", "", ["timer_clock"], 47, 2, 15, 0
					],
					"23f3": [
						["⏳"], "", "󾀛", ["hourglass_flowing_sand"], 47, 3, 31, 0
					],
					"23f8-fe0f": [
						["⏸️", "⏸"], "", "", ["double_vertical_bar"], 47, 4, 15, 0
					],
					"23f9-fe0f": [
						["⏹️", "⏹"], "", "", ["black_square_for_stop"], 47, 5, 15, 0
					],
					"23fa-fe0f": [
						["⏺️", "⏺"], "", "", ["black_circle_for_record"], 47, 6, 15, 0
					],
					"24c2-fe0f": [
						["Ⓜ️", "Ⓜ"], "", "󾟡", ["m"], 47, 7, 31, 0
					],
					"25aa-fe0f": [
						["▪️", "▪"], "", "󾭮", ["black_small_square"], 47, 8, 31, 0
					],
					"25ab-fe0f": [
						["▫️", "▫"], "", "󾭭", ["white_small_square"], 47, 9, 31, 0
					],
					"25b6-fe0f": [
						["▶️", "▶"], "", "󾫼", ["arrow_forward"], 47, 10, 31, 0
					],
					"25c0-fe0f": [
						["◀️", "◀"], "", "󾫽", ["arrow_backward"], 47, 11, 31, 0
					],
					"25fb-fe0f": [
						["◻️", "◻"], "", "󾭱", ["white_medium_square"], 47, 12, 31, 0
					],
					"25fc-fe0f": [
						["◼️", "◼"], "", "󾭲", ["black_medium_square"], 47, 13, 31, 0
					],
					"25fd": [
						["◽"], "", "󾭯", ["white_medium_small_square"], 47, 14, 31, 0
					],
					"25fe": [
						["◾"], "", "󾭰", ["black_medium_small_square"], 47, 15, 31, 0
					],
					"2600-fe0f": [
						["☀️", "☀"], "", "󾀀", ["sunny"], 47, 16, 31, 0
					],
					"2601-fe0f": [
						["☁️", "☁"], "", "󾀁", ["cloud"], 47, 17, 31, 0
					],
					"2602-fe0f": [
						["☂️", "☂"], "", "", ["umbrella"], 47, 18, 15, 0
					],
					"2603-fe0f": [
						["☃️", "☃"], "", "", ["snowman"], 47, 19, 15, 0
					],
					"2604-fe0f": [
						["☄️", "☄"], "", "", ["comet"], 47, 20, 15, 0
					],
					"260e-fe0f": [
						["☎️", "☎"], "", "󾔣", ["phone", "telephone"], 47, 21, 31, 0
					],
					"2611-fe0f": [
						["☑️", "☑"], "", "󾮋", ["ballot_box_with_check"], 47, 22, 31, 0
					],
					2614: [
						["☔"], "", "󾀂", ["umbrella_with_rain_drops"], 47, 23, 31, 0
					],
					2615: [
						["☕"], "", "󾦁", ["coffee"], 47, 24, 31, 0
					],
					"2618-fe0f": [
						["☘️", "☘"], "", "", ["shamrock"], 47, 25, 15, 0
					],
					"261d-fe0f": [
						["☝️", "☝"], "", "󾮘", ["point_up"], 47, 26, 31, 0
					],
					"2620-fe0f": [
						["☠️", "☠"], "", "", ["skull_and_crossbones"], 47, 32, 15, 0
					],
					"2622-fe0f": [
						["☢️", "☢"], "", "", ["radioactive_sign"], 47, 33, 15, 0
					],
					"2623-fe0f": [
						["☣️", "☣"], "", "", ["biohazard_sign"], 47, 34, 15, 0
					],
					"2626-fe0f": [
						["☦️", "☦"], "", "", ["orthodox_cross"], 47, 35, 15, 0
					],
					"262a-fe0f": [
						["☪️", "☪"], "", "", ["star_and_crescent"], 47, 36, 15, 0
					],
					"262e-fe0f": [
						["☮️", "☮"], "", "", ["peace_symbol"], 47, 37, 15, 0
					],
					"262f-fe0f": [
						["☯️", "☯"], "", "", ["yin_yang"], 47, 38, 15, 0
					],
					"2638-fe0f": [
						["☸️", "☸"], "", "", ["wheel_of_dharma"], 47, 39, 15, 0
					],
					"2639-fe0f": [
						["☹️", "☹"], "", "", ["white_frowning_face"], 47, 40, 15, 0
					],
					"263a-fe0f": [
						["☺️", "☺"], "", "󾌶", ["relaxed"], 47, 41, 31, 0
					],
					"2640-fe0f": [
						["♀️", "♀"], "", "", ["female_sign"], 47, 42, 14, 0
					],
					"2642-fe0f": [
						["♂️", "♂"], "", "", ["male_sign"], 47, 43, 14, 0
					],
					2648: [
						["♈"], "", "󾀫", ["aries"], 47, 44, 31, 0
					],
					2649: [
						["♉"], "", "󾀬", ["taurus"], 47, 45, 31, 0
					],
					"264a": [
						["♊"], "", "󾀭", ["gemini"], 47, 46, 31, 0
					],
					"264b": [
						["♋"], "", "󾀮", ["cancer"], 47, 47, 31, 0
					],
					"264c": [
						["♌"], "", "󾀯", ["leo"], 47, 48, 31, 0
					],
					"264d": [
						["♍"], "", "󾀰", ["virgo"], 47, 49, 31, 0
					],
					"264e": [
						["♎"], "", "󾀱", ["libra"], 47, 50, 31, 0
					],
					"264f": [
						["♏"], "", "󾀲", ["scorpius"], 47, 51, 31, 0
					],
					2650: [
						["♐"], "", "󾀳", ["sagittarius"], 48, 0, 31, 0
					],
					2651: [
						["♑"], "", "󾀴", ["capricorn"], 48, 1, 31, 0
					],
					2652: [
						["♒"], "", "󾀵", ["aquarius"], 48, 2, 31, 0
					],
					2653: [
						["♓"], "", "󾀶", ["pisces"], 48, 3, 31, 0
					],
					"2660-fe0f": [
						["♠️", "♠"], "", "󾬛", ["spades"], 48, 4, 31, 0
					],
					"2663-fe0f": [
						["♣️", "♣"], "", "󾬝", ["clubs"], 48, 5, 31, 0
					],
					"2665-fe0f": [
						["♥️", "♥"], "", "󾬚", ["hearts"], 48, 6, 31, 0
					],
					"2666-fe0f": [
						["♦️", "♦"], "", "󾬜", ["diamonds"], 48, 7, 31, 0
					],
					"2668-fe0f": [
						["♨️", "♨"], "", "󾟺", ["hotsprings"], 48, 8, 31, 0
					],
					"267b-fe0f": [
						["♻️", "♻"], "", "󾬬", ["recycle"], 48, 9, 31, 0
					],
					"267f": [
						["♿"], "", "󾬠", ["wheelchair"], 48, 10, 31, 0
					],
					"2692-fe0f": [
						["⚒️", "⚒"], "", "", ["hammer_and_pick"], 48, 11, 15, 0
					],
					2693: [
						["⚓"], "", "󾓁", ["anchor"], 48, 12, 31, 0
					],
					"2694-fe0f": [
						["⚔️", "⚔"], "", "", ["crossed_swords"], 48, 13, 15, 0
					],
					"2695-fe0f": [
						["⚕️", "⚕"], "", "", ["medical_symbol", "staff_of_aesculapius"], 48, 14, 14, 0
					],
					"2696-fe0f": [
						["⚖️", "⚖"], "", "", ["scales"], 48, 15, 15, 0
					],
					"2697-fe0f": [
						["⚗️", "⚗"], "", "", ["alembic"], 48, 16, 15, 0
					],
					"2699-fe0f": [
						["⚙️", "⚙"], "", "", ["gear"], 48, 17, 15, 0
					],
					"269b-fe0f": [
						["⚛️", "⚛"], "", "", ["atom_symbol"], 48, 18, 15, 0
					],
					"269c-fe0f": [
						["⚜️", "⚜"], "", "", ["fleur_de_lis"], 48, 19, 15, 0
					],
					"26a0-fe0f": [
						["⚠️", "⚠"], "", "󾬣", ["warning"], 48, 20, 31, 0
					],
					"26a1": [
						["⚡"], "", "󾀄", ["zap"], 48, 21, 31, 0
					],
					"26aa": [
						["⚪"], "", "󾭥", ["white_circle"], 48, 22, 31, 0
					],
					"26ab": [
						["⚫"], "", "󾭦", ["black_circle"], 48, 23, 31, 0
					],
					"26b0-fe0f": [
						["⚰️", "⚰"], "", "", ["coffin"], 48, 24, 15, 0
					],
					"26b1-fe0f": [
						["⚱️", "⚱"], "", "", ["funeral_urn"], 48, 25, 15, 0
					],
					"26bd": [
						["⚽"], "", "󾟔", ["soccer"], 48, 26, 31, 0
					],
					"26be": [
						["⚾"], "", "󾟑", ["baseball"], 48, 27, 31, 0
					],
					"26c4": [
						["⛄"], "", "󾀃", ["snowman_without_snow"], 48, 28, 31, 0
					],
					"26c5": [
						["⛅"], "", "󾀏", ["partly_sunny"], 48, 29, 31, 0
					],
					"26c8-fe0f": [
						["⛈️", "⛈"], "", "", ["thunder_cloud_and_rain"], 48, 30, 15, 0
					],
					"26ce": [
						["⛎"], "", "󾀷", ["ophiuchus"], 48, 31, 31, 0
					],
					"26cf-fe0f": [
						["⛏️", "⛏"], "", "", ["pick"], 48, 32, 15, 0
					],
					"26d1-fe0f": [
						["⛑️", "⛑"], "", "", ["helmet_with_white_cross"], 48, 33, 15, 0
					],
					"26d3-fe0f": [
						["⛓️", "⛓"], "", "", ["chains"], 48, 34, 15, 0
					],
					"26d4": [
						["⛔"], "", "󾬦", ["no_entry"], 48, 35, 31, 0
					],
					"26e9-fe0f": [
						["⛩️", "⛩"], "", "", ["shinto_shrine"], 48, 36, 15, 0
					],
					"26ea": [
						["⛪"], "", "󾒻", ["church"], 48, 37, 31, 0
					],
					"26f0-fe0f": [
						["⛰️", "⛰"], "", "", ["mountain"], 48, 38, 15, 0
					],
					"26f1-fe0f": [
						["⛱️", "⛱"], "", "", ["umbrella_on_ground"], 48, 39, 15, 0
					],
					"26f2": [
						["⛲"], "", "󾒼", ["fountain"], 48, 40, 31, 0
					],
					"26f3": [
						["⛳"], "", "󾟒", ["golf"], 48, 41, 31, 0
					],
					"26f4-fe0f": [
						["⛴️", "⛴"], "", "", ["ferry"], 48, 42, 15, 0
					],
					"26f5": [
						["⛵"], "", "󾟪", ["boat", "sailboat"], 48, 43, 31, 0
					],
					"26f7-fe0f": [
						["⛷️", "⛷"], "", "", ["skier"], 48, 44, 15, 0
					],
					"26f8-fe0f": [
						["⛸️", "⛸"], "", "", ["ice_skate"], 48, 45, 15, 0
					],
					"26f9-fe0f-200d-2640-fe0f": [
						["⛹️‍♀️"], "", "", ["woman-bouncing-ball"], 48, 46, 7, 0
					],
					"26f9-fe0f-200d-2642-fe0f": [
						["⛹️‍♂️", "⛹️", "⛹"], "", "", ["man-bouncing-ball", "person_with_ball"], 49, 0, 7, 0
					],
					"26fa": [
						["⛺"], "", "󾟻", ["tent"], 49, 12, 31, 0
					],
					"26fd": [
						["⛽"], "", "󾟵", ["fuelpump"], 49, 13, 31, 0
					],
					"2702-fe0f": [
						["✂️", "✂"], "", "󾔾", ["scissors"], 49, 14, 31, 0
					],
					2705: [
						["✅"], "", "󾭊", ["white_check_mark"], 49, 15, 31, 0
					],
					"2708-fe0f": [
						["✈️", "✈"], "", "󾟩", ["airplane"], 49, 16, 31, 0
					],
					"2709-fe0f": [
						["✉️", "✉"], "", "󾔩", ["email", "envelope"], 49, 17, 31, 0
					],
					"270a": [
						["✊"], "", "󾮓", ["fist"], 49, 18, 31, 0
					],
					"270b": [
						["✋"], "", "󾮕", ["hand", "raised_hand"], 49, 24, 31, 0
					],
					"270c-fe0f": [
						["✌️", "✌"], "", "󾮔", ["v"], 49, 30, 31, 0
					],
					"270d-fe0f": [
						["✍️", "✍"], "", "", ["writing_hand"], 49, 36, 15, 0
					],
					"270f-fe0f": [
						["✏️", "✏"], "", "󾔹", ["pencil2"], 49, 42, 31, 0
					],
					"2712-fe0f": [
						["✒️", "✒"], "", "󾔶", ["black_nib"], 49, 43, 31, 0
					],
					"2714-fe0f": [
						["✔️", "✔"], "", "󾭉", ["heavy_check_mark"], 49, 44, 31, 0
					],
					"2716-fe0f": [
						["✖️", "✖"], "", "󾭓", ["heavy_multiplication_x"], 49, 45, 31, 0
					],
					"271d-fe0f": [
						["✝️", "✝"], "", "", ["latin_cross"], 49, 46, 15, 0
					],
					"2721-fe0f": [
						["✡️", "✡"], "", "", ["star_of_david"], 49, 47, 15, 0
					],
					2728: [
						["✨"], "", "󾭠", ["sparkles"], 49, 48, 31, 0
					],
					"2733-fe0f": [
						["✳️", "✳"], "", "󾭢", ["eight_spoked_asterisk"], 49, 49, 31, 0
					],
					"2734-fe0f": [
						["✴️", "✴"], "", "󾭡", ["eight_pointed_black_star"], 49, 50, 31, 0
					],
					"2744-fe0f": [
						["❄️", "❄"], "", "󾀎", ["snowflake"], 49, 51, 31, 0
					],
					"2747-fe0f": [
						["❇️", "❇"], "", "󾭷", ["sparkle"], 50, 0, 31, 0
					],
					"274c": [
						["❌"], "", "󾭅", ["x"], 50, 1, 31, 0
					],
					"274e": [
						["❎"], "", "󾭆", ["negative_squared_cross_mark"], 50, 2, 31, 0
					],
					2753: [
						["❓"], "", "󾬉", ["question"], 50, 3, 31, 0
					],
					2754: [
						["❔"], "", "󾬊", ["grey_question"], 50, 4, 31, 0
					],
					2755: [
						["❕"], "", "󾬋", ["grey_exclamation"], 50, 5, 31, 0
					],
					2757: [
						["❗"], "", "󾬄", ["exclamation", "heavy_exclamation_mark"], 50, 6, 31, 0
					],
					"2763-fe0f": [
						["❣️", "❣"], "", "", ["heavy_heart_exclamation_mark_ornament"], 50, 7, 15, 0
					],
					"2764-fe0f": [
						["❤️", "❤"], "", "󾬌", ["heart"], 50, 8, 31, 0, "<3"
					],
					2795: [
						["➕"], "", "󾭑", ["heavy_plus_sign"], 50, 9, 31, 0
					],
					2796: [
						["➖"], "", "󾭒", ["heavy_minus_sign"], 50, 10, 31, 0
					],
					2797: [
						["➗"], "", "󾭔", ["heavy_division_sign"], 50, 11, 31, 0
					],
					"27a1-fe0f": [
						["➡️", "➡"], "", "󾫺", ["arrow_right"], 50, 12, 31, 0
					],
					"27b0": [
						["➰"], "", "󾬈", ["curly_loop"], 50, 13, 31, 0
					],
					"27bf": [
						["➿"], "", "󾠫", ["loop"], 50, 14, 31, 0
					],
					"2934-fe0f": [
						["⤴️", "⤴"], "", "󾫴", ["arrow_heading_up"], 50, 15, 31, 0
					],
					"2935-fe0f": [
						["⤵️", "⤵"], "", "󾫵", ["arrow_heading_down"], 50, 16, 31, 0
					],
					"2b05-fe0f": [
						["⬅️", "⬅"], "", "󾫻", ["arrow_left"], 50, 17, 31, 0
					],
					"2b06-fe0f": [
						["⬆️", "⬆"], "", "󾫸", ["arrow_up"], 50, 18, 31, 0
					],
					"2b07-fe0f": [
						["⬇️", "⬇"], "", "󾫹", ["arrow_down"], 50, 19, 31, 0
					],
					"2b1b": [
						["⬛"], "", "󾭬", ["black_large_square"], 50, 20, 31, 0
					],
					"2b1c": [
						["⬜"], "", "󾭫", ["white_large_square"], 50, 21, 31, 0
					],
					"2b50": [
						["⭐"], "", "󾭨", ["star"], 50, 22, 31, 0
					],
					"2b55": [
						["⭕"], "", "󾭄", ["o"], 50, 23, 31, 0
					],
					"3030-fe0f": [
						["〰️", "〰"], "", "󾬇", ["wavy_dash"], 50, 24, 31, 0
					],
					"303d-fe0f": [
						["〽️", "〽"], "", "󾠛", ["part_alternation_mark"], 50, 25, 31, 0
					],
					"3297-fe0f": [
						["㊗️", "㊗"], "", "󾭃", ["congratulations"], 50, 26, 31, 0
					],
					"3299-fe0f": [
						["㊙️", "㊙"], "", "󾬫", ["secret"], 50, 27, 31, 0
					]
				}, r.prototype.emoticons_data = {
					":o)": "monkey_face",
					"</3": "broken_heart",
					"=)": "smiley",
					"=-)": "smiley",
					"C:": "smile",
					"c:": "smile",
					":D": "smile",
					":-D": "smile",
					":>": "laughing",
					":->": "laughing",
					";)": "wink",
					";-)": "wink",
					"8)": "sunglasses",
					":|": "neutral_face",
					":-|": "neutral_face",
					":\\": "confused",
					":-\\": "confused",
					":/": "confused",
					":-/": "confused",
					":*": "kissing_heart",
					":-*": "kissing_heart",
					":p": "stuck_out_tongue",
					":-p": "stuck_out_tongue",
					":P": "stuck_out_tongue",
					":-P": "stuck_out_tongue",
					":b": "stuck_out_tongue",
					":-b": "stuck_out_tongue",
					";p": "stuck_out_tongue_winking_eye",
					";-p": "stuck_out_tongue_winking_eye",
					";b": "stuck_out_tongue_winking_eye",
					";-b": "stuck_out_tongue_winking_eye",
					";P": "stuck_out_tongue_winking_eye",
					";-P": "stuck_out_tongue_winking_eye",
					"):": "disappointed",
					":(": "disappointed",
					":-(": "disappointed",
					">:(": "angry",
					">:-(": "angry",
					":'(": "cry",
					"D:": "anguished",
					":o": "open_mouth",
					":-o": "open_mouth",
					":O": "open_mouth",
					":-O": "open_mouth",
					":)": "slightly_smiling_face",
					"(:": "slightly_smiling_face",
					":-)": "slightly_smiling_face",
					"<3": "heart"
				}, r.prototype.variations_data = {
					"1f385": {
						"1f3fb": ["1f385-1f3fb", 8, 20, 31, ["🎅🏻"]],
						"1f3fc": ["1f385-1f3fc", 8, 21, 31, ["🎅🏼"]],
						"1f3fd": ["1f385-1f3fd", 8, 22, 31, ["🎅🏽"]],
						"1f3fe": ["1f385-1f3fe", 8, 23, 31, ["🎅🏾"]],
						"1f3ff": ["1f385-1f3ff", 8, 24, 31, ["🎅🏿"]]
					},
					"1f3c2": {
						"1f3fb": ["1f3c2-1f3fb", 9, 29, 31, ["🏂🏻"]],
						"1f3fc": ["1f3c2-1f3fc", 9, 30, 31, ["🏂🏼"]],
						"1f3fd": ["1f3c2-1f3fd", 9, 31, 31, ["🏂🏽"]],
						"1f3fe": ["1f3c2-1f3fe", 9, 32, 31, ["🏂🏾"]],
						"1f3ff": ["1f3c2-1f3ff", 9, 33, 31, ["🏂🏿"]]
					},
					"1f3c3-200d-2640-fe0f": {
						"1f3fb": ["1f3c3-1f3fb-200d-2640-fe0f", 9, 35, 7, ["🏃🏻‍♀️"]],
						"1f3fc": ["1f3c3-1f3fc-200d-2640-fe0f", 9, 36, 7, ["🏃🏼‍♀️"]],
						"1f3fd": ["1f3c3-1f3fd-200d-2640-fe0f", 9, 37, 7, ["🏃🏽‍♀️"]],
						"1f3fe": ["1f3c3-1f3fe-200d-2640-fe0f", 9, 38, 7, ["🏃🏾‍♀️"]],
						"1f3ff": ["1f3c3-1f3ff-200d-2640-fe0f", 9, 39, 7, ["🏃🏿‍♀️"]]
					},
					"1f3c3-200d-2642-fe0f": {
						"1f3fb": ["1f3c3-1f3fb-200d-2642-fe0f", 9, 41, 7, ["🏃🏻‍♂️", "🏃🏻"]],
						"1f3fc": ["1f3c3-1f3fc-200d-2642-fe0f", 9, 42, 7, ["🏃🏼‍♂️", "🏃🏼"]],
						"1f3fd": ["1f3c3-1f3fd-200d-2642-fe0f", 9, 43, 7, ["🏃🏽‍♂️", "🏃🏽"]],
						"1f3fe": ["1f3c3-1f3fe-200d-2642-fe0f", 9, 44, 7, ["🏃🏾‍♂️", "🏃🏾"]],
						"1f3ff": ["1f3c3-1f3ff-200d-2642-fe0f", 9, 45, 7, ["🏃🏿‍♂️", "🏃🏿"]]
					},
					"1f3c4-200d-2640-fe0f": {
						"1f3fb": ["1f3c4-1f3fb-200d-2640-fe0f", 10, 1, 7, ["🏄🏻‍♀️"]],
						"1f3fc": ["1f3c4-1f3fc-200d-2640-fe0f", 10, 2, 7, ["🏄🏼‍♀️"]],
						"1f3fd": ["1f3c4-1f3fd-200d-2640-fe0f", 10, 3, 7, ["🏄🏽‍♀️"]],
						"1f3fe": ["1f3c4-1f3fe-200d-2640-fe0f", 10, 4, 7, ["🏄🏾‍♀️"]],
						"1f3ff": ["1f3c4-1f3ff-200d-2640-fe0f", 10, 5, 7, ["🏄🏿‍♀️"]]
					},
					"1f3c4-200d-2642-fe0f": {
						"1f3fb": ["1f3c4-1f3fb-200d-2642-fe0f", 10, 7, 7, ["🏄🏻‍♂️", "🏄🏻"]],
						"1f3fc": ["1f3c4-1f3fc-200d-2642-fe0f", 10, 8, 7, ["🏄🏼‍♂️", "🏄🏼"]],
						"1f3fd": ["1f3c4-1f3fd-200d-2642-fe0f", 10, 9, 7, ["🏄🏽‍♂️", "🏄🏽"]],
						"1f3fe": ["1f3c4-1f3fe-200d-2642-fe0f", 10, 10, 7, ["🏄🏾‍♂️", "🏄🏾"]],
						"1f3ff": ["1f3c4-1f3ff-200d-2642-fe0f", 10, 11, 7, ["🏄🏿‍♂️", "🏄🏿"]]
					},
					"1f3c7": {
						"1f3fb": ["1f3c7-1f3fb", 10, 21, 31, ["🏇🏻"]],
						"1f3fc": ["1f3c7-1f3fc", 10, 22, 31, ["🏇🏼"]],
						"1f3fd": ["1f3c7-1f3fd", 10, 23, 31, ["🏇🏽"]],
						"1f3fe": ["1f3c7-1f3fe", 10, 24, 31, ["🏇🏾"]],
						"1f3ff": ["1f3c7-1f3ff", 10, 25, 31, ["🏇🏿"]]
					},
					"1f3ca-200d-2640-fe0f": {
						"1f3fb": ["1f3ca-1f3fb-200d-2640-fe0f", 10, 29, 7, ["🏊🏻‍♀️"]],
						"1f3fc": ["1f3ca-1f3fc-200d-2640-fe0f", 10, 30, 7, ["🏊🏼‍♀️"]],
						"1f3fd": ["1f3ca-1f3fd-200d-2640-fe0f", 10, 31, 7, ["🏊🏽‍♀️"]],
						"1f3fe": ["1f3ca-1f3fe-200d-2640-fe0f", 10, 32, 7, ["🏊🏾‍♀️"]],
						"1f3ff": ["1f3ca-1f3ff-200d-2640-fe0f", 10, 33, 7, ["🏊🏿‍♀️"]]
					},
					"1f3ca-200d-2642-fe0f": {
						"1f3fb": ["1f3ca-1f3fb-200d-2642-fe0f", 10, 35, 7, ["🏊🏻‍♂️", "🏊🏻"]],
						"1f3fc": ["1f3ca-1f3fc-200d-2642-fe0f", 10, 36, 7, ["🏊🏼‍♂️", "🏊🏼"]],
						"1f3fd": ["1f3ca-1f3fd-200d-2642-fe0f", 10, 37, 7, ["🏊🏽‍♂️", "🏊🏽"]],
						"1f3fe": ["1f3ca-1f3fe-200d-2642-fe0f", 10, 38, 7, ["🏊🏾‍♂️", "🏊🏾"]],
						"1f3ff": ["1f3ca-1f3ff-200d-2642-fe0f", 10, 39, 7, ["🏊🏿‍♂️", "🏊🏿"]]
					},
					"1f3cb-fe0f-200d-2640-fe0f": {
						"1f3fb": ["1f3cb-1f3fb-200d-2640-fe0f", 10, 47, 7, ["🏋🏻‍♀️"]],
						"1f3fc": ["1f3cb-1f3fc-200d-2640-fe0f", 10, 48, 7, ["🏋🏼‍♀️"]],
						"1f3fd": ["1f3cb-1f3fd-200d-2640-fe0f", 10, 49, 7, ["🏋🏽‍♀️"]],
						"1f3fe": ["1f3cb-1f3fe-200d-2640-fe0f", 10, 50, 7, ["🏋🏾‍♀️"]],
						"1f3ff": ["1f3cb-1f3ff-200d-2640-fe0f", 10, 51, 7, ["🏋🏿‍♀️"]]
					},
					"1f3cb-fe0f-200d-2642-fe0f": {
						"1f3fb": ["1f3cb-1f3fb-200d-2642-fe0f", 11, 1, 7, ["🏋🏻‍♂️", "🏋🏻"]],
						"1f3fc": ["1f3cb-1f3fc-200d-2642-fe0f", 11, 2, 7, ["🏋🏼‍♂️", "🏋🏼"]],
						"1f3fd": ["1f3cb-1f3fd-200d-2642-fe0f", 11, 3, 7, ["🏋🏽‍♂️", "🏋🏽"]],
						"1f3fe": ["1f3cb-1f3fe-200d-2642-fe0f", 11, 4, 7, ["🏋🏾‍♂️", "🏋🏾"]],
						"1f3ff": ["1f3cb-1f3ff-200d-2642-fe0f", 11, 5, 7, ["🏋🏿‍♂️", "🏋🏿"]]
					},
					"1f3cc-fe0f-200d-2640-fe0f": {
						"1f3fb": ["1f3cc-1f3fb-200d-2640-fe0f", 11, 13, 7, ["🏌🏻‍♀️"]],
						"1f3fc": ["1f3cc-1f3fc-200d-2640-fe0f", 11, 14, 7, ["🏌🏼‍♀️"]],
						"1f3fd": ["1f3cc-1f3fd-200d-2640-fe0f", 11, 15, 7, ["🏌🏽‍♀️"]],
						"1f3fe": ["1f3cc-1f3fe-200d-2640-fe0f", 11, 16, 7, ["🏌🏾‍♀️"]],
						"1f3ff": ["1f3cc-1f3ff-200d-2640-fe0f", 11, 17, 7, ["🏌🏿‍♀️"]]
					},
					"1f3cc-fe0f-200d-2642-fe0f": {
						"1f3fb": ["1f3cc-1f3fb-200d-2642-fe0f", 11, 19, 7, ["🏌🏻‍♂️", "🏌🏻"]],
						"1f3fc": ["1f3cc-1f3fc-200d-2642-fe0f", 11, 20, 7, ["🏌🏼‍♂️", "🏌🏼"]],
						"1f3fd": ["1f3cc-1f3fd-200d-2642-fe0f", 11, 21, 7, ["🏌🏽‍♂️", "🏌🏽"]],
						"1f3fe": ["1f3cc-1f3fe-200d-2642-fe0f", 11, 22, 7, ["🏌🏾‍♂️", "🏌🏾"]],
						"1f3ff": ["1f3cc-1f3ff-200d-2642-fe0f", 11, 23, 7, ["🏌🏿‍♂️", "🏌🏿"]]
					},
					"1f442": {
						"1f3fb": ["1f442-1f3fb", 13, 46, 31, ["👂🏻"]],
						"1f3fc": ["1f442-1f3fc", 13, 47, 31, ["👂🏼"]],
						"1f3fd": ["1f442-1f3fd", 13, 48, 31, ["👂🏽"]],
						"1f3fe": ["1f442-1f3fe", 13, 49, 31, ["👂🏾"]],
						"1f3ff": ["1f442-1f3ff", 13, 50, 31, ["👂🏿"]]
					},
					"1f443": {
						"1f3fb": ["1f443-1f3fb", 14, 0, 31, ["👃🏻"]],
						"1f3fc": ["1f443-1f3fc", 14, 1, 31, ["👃🏼"]],
						"1f3fd": ["1f443-1f3fd", 14, 2, 31, ["👃🏽"]],
						"1f3fe": ["1f443-1f3fe", 14, 3, 31, ["👃🏾"]],
						"1f3ff": ["1f443-1f3ff", 14, 4, 31, ["👃🏿"]]
					},
					"1f446": {
						"1f3fb": ["1f446-1f3fb", 14, 8, 31, ["👆🏻"]],
						"1f3fc": ["1f446-1f3fc", 14, 9, 31, ["👆🏼"]],
						"1f3fd": ["1f446-1f3fd", 14, 10, 31, ["👆🏽"]],
						"1f3fe": ["1f446-1f3fe", 14, 11, 31, ["👆🏾"]],
						"1f3ff": ["1f446-1f3ff", 14, 12, 31, ["👆🏿"]]
					},
					"1f447": {
						"1f3fb": ["1f447-1f3fb", 14, 14, 31, ["👇🏻"]],
						"1f3fc": ["1f447-1f3fc", 14, 15, 31, ["👇🏼"]],
						"1f3fd": ["1f447-1f3fd", 14, 16, 31, ["👇🏽"]],
						"1f3fe": ["1f447-1f3fe", 14, 17, 31, ["👇🏾"]],
						"1f3ff": ["1f447-1f3ff", 14, 18, 31, ["👇🏿"]]
					},
					"1f448": {
						"1f3fb": ["1f448-1f3fb", 14, 20, 31, ["👈🏻"]],
						"1f3fc": ["1f448-1f3fc", 14, 21, 31, ["👈🏼"]],
						"1f3fd": ["1f448-1f3fd", 14, 22, 31, ["👈🏽"]],
						"1f3fe": ["1f448-1f3fe", 14, 23, 31, ["👈🏾"]],
						"1f3ff": ["1f448-1f3ff", 14, 24, 31, ["👈🏿"]]
					},
					"1f449": {
						"1f3fb": ["1f449-1f3fb", 14, 26, 31, ["👉🏻"]],
						"1f3fc": ["1f449-1f3fc", 14, 27, 31, ["👉🏼"]],
						"1f3fd": ["1f449-1f3fd", 14, 28, 31, ["👉🏽"]],
						"1f3fe": ["1f449-1f3fe", 14, 29, 31, ["👉🏾"]],
						"1f3ff": ["1f449-1f3ff", 14, 30, 31, ["👉🏿"]]
					},
					"1f44a": {
						"1f3fb": ["1f44a-1f3fb", 14, 32, 31, ["👊🏻"]],
						"1f3fc": ["1f44a-1f3fc", 14, 33, 31, ["👊🏼"]],
						"1f3fd": ["1f44a-1f3fd", 14, 34, 31, ["👊🏽"]],
						"1f3fe": ["1f44a-1f3fe", 14, 35, 31, ["👊🏾"]],
						"1f3ff": ["1f44a-1f3ff", 14, 36, 31, ["👊🏿"]]
					},
					"1f44b": {
						"1f3fb": ["1f44b-1f3fb", 14, 38, 31, ["👋🏻"]],
						"1f3fc": ["1f44b-1f3fc", 14, 39, 31, ["👋🏼"]],
						"1f3fd": ["1f44b-1f3fd", 14, 40, 31, ["👋🏽"]],
						"1f3fe": ["1f44b-1f3fe", 14, 41, 31, ["👋🏾"]],
						"1f3ff": ["1f44b-1f3ff", 14, 42, 31, ["👋🏿"]]
					},
					"1f44c": {
						"1f3fb": ["1f44c-1f3fb", 14, 44, 31, ["👌🏻"]],
						"1f3fc": ["1f44c-1f3fc", 14, 45, 31, ["👌🏼"]],
						"1f3fd": ["1f44c-1f3fd", 14, 46, 31, ["👌🏽"]],
						"1f3fe": ["1f44c-1f3fe", 14, 47, 31, ["👌🏾"]],
						"1f3ff": ["1f44c-1f3ff", 14, 48, 31, ["👌🏿"]]
					},
					"1f44d": {
						"1f3fb": ["1f44d-1f3fb", 14, 50, 31, ["👍🏻"]],
						"1f3fc": ["1f44d-1f3fc", 14, 51, 31, ["👍🏼"]],
						"1f3fd": ["1f44d-1f3fd", 15, 0, 31, ["👍🏽"]],
						"1f3fe": ["1f44d-1f3fe", 15, 1, 31, ["👍🏾"]],
						"1f3ff": ["1f44d-1f3ff", 15, 2, 31, ["👍🏿"]]
					},
					"1f44e": {
						"1f3fb": ["1f44e-1f3fb", 15, 4, 31, ["👎🏻"]],
						"1f3fc": ["1f44e-1f3fc", 15, 5, 31, ["👎🏼"]],
						"1f3fd": ["1f44e-1f3fd", 15, 6, 31, ["👎🏽"]],
						"1f3fe": ["1f44e-1f3fe", 15, 7, 31, ["👎🏾"]],
						"1f3ff": ["1f44e-1f3ff", 15, 8, 31, ["👎🏿"]]
					},
					"1f44f": {
						"1f3fb": ["1f44f-1f3fb", 15, 10, 31, ["👏🏻"]],
						"1f3fc": ["1f44f-1f3fc", 15, 11, 31, ["👏🏼"]],
						"1f3fd": ["1f44f-1f3fd", 15, 12, 31, ["👏🏽"]],
						"1f3fe": ["1f44f-1f3fe", 15, 13, 31, ["👏🏾"]],
						"1f3ff": ["1f44f-1f3ff", 15, 14, 31, ["👏🏿"]]
					},
					"1f450": {
						"1f3fb": ["1f450-1f3fb", 15, 16, 31, ["👐🏻"]],
						"1f3fc": ["1f450-1f3fc", 15, 17, 31, ["👐🏼"]],
						"1f3fd": ["1f450-1f3fd", 15, 18, 31, ["👐🏽"]],
						"1f3fe": ["1f450-1f3fe", 15, 19, 31, ["👐🏾"]],
						"1f3ff": ["1f450-1f3ff", 15, 20, 31, ["👐🏿"]]
					},
					"1f466": {
						"1f3fb": ["1f466-1f3fb", 15, 43, 31, ["👦🏻"]],
						"1f3fc": ["1f466-1f3fc", 15, 44, 31, ["👦🏼"]],
						"1f3fd": ["1f466-1f3fd", 15, 45, 31, ["👦🏽"]],
						"1f3fe": ["1f466-1f3fe", 15, 46, 31, ["👦🏾"]],
						"1f3ff": ["1f466-1f3ff", 15, 47, 31, ["👦🏿"]]
					},
					"1f467": {
						"1f3fb": ["1f467-1f3fb", 15, 49, 31, ["👧🏻"]],
						"1f3fc": ["1f467-1f3fc", 15, 50, 31, ["👧🏼"]],
						"1f3fd": ["1f467-1f3fd", 15, 51, 31, ["👧🏽"]],
						"1f3fe": ["1f467-1f3fe", 16, 0, 31, ["👧🏾"]],
						"1f3ff": ["1f467-1f3ff", 16, 1, 31, ["👧🏿"]]
					},
					"1f468-200d-1f33e": {
						"1f3fb": ["1f468-1f3fb-200d-1f33e", 16, 3, 15, ["👨🏻‍🌾"]],
						"1f3fc": ["1f468-1f3fc-200d-1f33e", 16, 4, 15, ["👨🏼‍🌾"]],
						"1f3fd": ["1f468-1f3fd-200d-1f33e", 16, 5, 15, ["👨🏽‍🌾"]],
						"1f3fe": ["1f468-1f3fe-200d-1f33e", 16, 6, 15, ["👨🏾‍🌾"]],
						"1f3ff": ["1f468-1f3ff-200d-1f33e", 16, 7, 15, ["👨🏿‍🌾"]]
					},
					"1f468-200d-1f373": {
						"1f3fb": ["1f468-1f3fb-200d-1f373", 16, 9, 15, ["👨🏻‍🍳"]],
						"1f3fc": ["1f468-1f3fc-200d-1f373", 16, 10, 15, ["👨🏼‍🍳"]],
						"1f3fd": ["1f468-1f3fd-200d-1f373", 16, 11, 15, ["👨🏽‍🍳"]],
						"1f3fe": ["1f468-1f3fe-200d-1f373", 16, 12, 15, ["👨🏾‍🍳"]],
						"1f3ff": ["1f468-1f3ff-200d-1f373", 16, 13, 15, ["👨🏿‍🍳"]]
					},
					"1f468-200d-1f393": {
						"1f3fb": ["1f468-1f3fb-200d-1f393", 16, 15, 15, ["👨🏻‍🎓"]],
						"1f3fc": ["1f468-1f3fc-200d-1f393", 16, 16, 15, ["👨🏼‍🎓"]],
						"1f3fd": ["1f468-1f3fd-200d-1f393", 16, 17, 15, ["👨🏽‍🎓"]],
						"1f3fe": ["1f468-1f3fe-200d-1f393", 16, 18, 15, ["👨🏾‍🎓"]],
						"1f3ff": ["1f468-1f3ff-200d-1f393", 16, 19, 15, ["👨🏿‍🎓"]]
					},
					"1f468-200d-1f3a4": {
						"1f3fb": ["1f468-1f3fb-200d-1f3a4", 16, 21, 15, ["👨🏻‍🎤"]],
						"1f3fc": ["1f468-1f3fc-200d-1f3a4", 16, 22, 15, ["👨🏼‍🎤"]],
						"1f3fd": ["1f468-1f3fd-200d-1f3a4", 16, 23, 15, ["👨🏽‍🎤"]],
						"1f3fe": ["1f468-1f3fe-200d-1f3a4", 16, 24, 15, ["👨🏾‍🎤"]],
						"1f3ff": ["1f468-1f3ff-200d-1f3a4", 16, 25, 15, ["👨🏿‍🎤"]]
					},
					"1f468-200d-1f3a8": {
						"1f3fb": ["1f468-1f3fb-200d-1f3a8", 16, 27, 15, ["👨🏻‍🎨"]],
						"1f3fc": ["1f468-1f3fc-200d-1f3a8", 16, 28, 15, ["👨🏼‍🎨"]],
						"1f3fd": ["1f468-1f3fd-200d-1f3a8", 16, 29, 15, ["👨🏽‍🎨"]],
						"1f3fe": ["1f468-1f3fe-200d-1f3a8", 16, 30, 15, ["👨🏾‍🎨"]],
						"1f3ff": ["1f468-1f3ff-200d-1f3a8", 16, 31, 15, ["👨🏿‍🎨"]]
					},
					"1f468-200d-1f3eb": {
						"1f3fb": ["1f468-1f3fb-200d-1f3eb", 16, 33, 15, ["👨🏻‍🏫"]],
						"1f3fc": ["1f468-1f3fc-200d-1f3eb", 16, 34, 15, ["👨🏼‍🏫"]],
						"1f3fd": ["1f468-1f3fd-200d-1f3eb", 16, 35, 15, ["👨🏽‍🏫"]],
						"1f3fe": ["1f468-1f3fe-200d-1f3eb", 16, 36, 15, ["👨🏾‍🏫"]],
						"1f3ff": ["1f468-1f3ff-200d-1f3eb", 16, 37, 15, ["👨🏿‍🏫"]]
					},
					"1f468-200d-1f3ed": {
						"1f3fb": ["1f468-1f3fb-200d-1f3ed", 16, 39, 15, ["👨🏻‍🏭"]],
						"1f3fc": ["1f468-1f3fc-200d-1f3ed", 16, 40, 15, ["👨🏼‍🏭"]],
						"1f3fd": ["1f468-1f3fd-200d-1f3ed", 16, 41, 15, ["👨🏽‍🏭"]],
						"1f3fe": ["1f468-1f3fe-200d-1f3ed", 16, 42, 15, ["👨🏾‍🏭"]],
						"1f3ff": ["1f468-1f3ff-200d-1f3ed", 16, 43, 15, ["👨🏿‍🏭"]]
					},
					"1f468-200d-1f4bb": {
						"1f3fb": ["1f468-1f3fb-200d-1f4bb", 17, 8, 15, ["👨🏻‍💻"]],
						"1f3fc": ["1f468-1f3fc-200d-1f4bb", 17, 9, 15, ["👨🏼‍💻"]],
						"1f3fd": ["1f468-1f3fd-200d-1f4bb", 17, 10, 15, ["👨🏽‍💻"]],
						"1f3fe": ["1f468-1f3fe-200d-1f4bb", 17, 11, 15, ["👨🏾‍💻"]],
						"1f3ff": ["1f468-1f3ff-200d-1f4bb", 17, 12, 15, ["👨🏿‍💻"]]
					},
					"1f468-200d-1f4bc": {
						"1f3fb": ["1f468-1f3fb-200d-1f4bc", 17, 14, 15, ["👨🏻‍💼"]],
						"1f3fc": ["1f468-1f3fc-200d-1f4bc", 17, 15, 15, ["👨🏼‍💼"]],
						"1f3fd": ["1f468-1f3fd-200d-1f4bc", 17, 16, 15, ["👨🏽‍💼"]],
						"1f3fe": ["1f468-1f3fe-200d-1f4bc", 17, 17, 15, ["👨🏾‍💼"]],
						"1f3ff": ["1f468-1f3ff-200d-1f4bc", 17, 18, 15, ["👨🏿‍💼"]]
					},
					"1f468-200d-1f527": {
						"1f3fb": ["1f468-1f3fb-200d-1f527", 17, 20, 15, ["👨🏻‍🔧"]],
						"1f3fc": ["1f468-1f3fc-200d-1f527", 17, 21, 15, ["👨🏼‍🔧"]],
						"1f3fd": ["1f468-1f3fd-200d-1f527", 17, 22, 15, ["👨🏽‍🔧"]],
						"1f3fe": ["1f468-1f3fe-200d-1f527", 17, 23, 15, ["👨🏾‍🔧"]],
						"1f3ff": ["1f468-1f3ff-200d-1f527", 17, 24, 15, ["👨🏿‍🔧"]]
					},
					"1f468-200d-1f52c": {
						"1f3fb": ["1f468-1f3fb-200d-1f52c", 17, 26, 15, ["👨🏻‍🔬"]],
						"1f3fc": ["1f468-1f3fc-200d-1f52c", 17, 27, 15, ["👨🏼‍🔬"]],
						"1f3fd": ["1f468-1f3fd-200d-1f52c", 17, 28, 15, ["👨🏽‍🔬"]],
						"1f3fe": ["1f468-1f3fe-200d-1f52c", 17, 29, 15, ["👨🏾‍🔬"]],
						"1f3ff": ["1f468-1f3ff-200d-1f52c", 17, 30, 15, ["👨🏿‍🔬"]]
					},
					"1f468-200d-1f680": {
						"1f3fb": ["1f468-1f3fb-200d-1f680", 17, 32, 15, ["👨🏻‍🚀"]],
						"1f3fc": ["1f468-1f3fc-200d-1f680", 17, 33, 15, ["👨🏼‍🚀"]],
						"1f3fd": ["1f468-1f3fd-200d-1f680", 17, 34, 15, ["👨🏽‍🚀"]],
						"1f3fe": ["1f468-1f3fe-200d-1f680", 17, 35, 15, ["👨🏾‍🚀"]],
						"1f3ff": ["1f468-1f3ff-200d-1f680", 17, 36, 15, ["👨🏿‍🚀"]]
					},
					"1f468-200d-1f692": {
						"1f3fb": ["1f468-1f3fb-200d-1f692", 17, 38, 15, ["👨🏻‍🚒"]],
						"1f3fc": ["1f468-1f3fc-200d-1f692", 17, 39, 15, ["👨🏼‍🚒"]],
						"1f3fd": ["1f468-1f3fd-200d-1f692", 17, 40, 15, ["👨🏽‍🚒"]],
						"1f3fe": ["1f468-1f3fe-200d-1f692", 17, 41, 15, ["👨🏾‍🚒"]],
						"1f3ff": ["1f468-1f3ff-200d-1f692", 17, 42, 15, ["👨🏿‍🚒"]]
					},
					"1f468-200d-2695-fe0f": {
						"1f3fb": ["1f468-1f3fb-200d-2695-fe0f", 17, 44, 7, ["👨🏻‍⚕️"]],
						"1f3fc": ["1f468-1f3fc-200d-2695-fe0f", 17, 45, 7, ["👨🏼‍⚕️"]],
						"1f3fd": ["1f468-1f3fd-200d-2695-fe0f", 17, 46, 7, ["👨🏽‍⚕️"]],
						"1f3fe": ["1f468-1f3fe-200d-2695-fe0f", 17, 47, 7, ["👨🏾‍⚕️"]],
						"1f3ff": ["1f468-1f3ff-200d-2695-fe0f", 17, 48, 7, ["👨🏿‍⚕️"]]
					},
					"1f468-200d-2696-fe0f": {
						"1f3fb": ["1f468-1f3fb-200d-2696-fe0f", 17, 50, 7, ["👨🏻‍⚖️"]],
						"1f3fc": ["1f468-1f3fc-200d-2696-fe0f", 17, 51, 7, ["👨🏼‍⚖️"]],
						"1f3fd": ["1f468-1f3fd-200d-2696-fe0f", 18, 0, 7, ["👨🏽‍⚖️"]],
						"1f3fe": ["1f468-1f3fe-200d-2696-fe0f", 18, 1, 7, ["👨🏾‍⚖️"]],
						"1f3ff": ["1f468-1f3ff-200d-2696-fe0f", 18, 2, 7, ["👨🏿‍⚖️"]]
					},
					"1f468-200d-2708-fe0f": {
						"1f3fb": ["1f468-1f3fb-200d-2708-fe0f", 18, 4, 7, ["👨🏻‍✈️"]],
						"1f3fc": ["1f468-1f3fc-200d-2708-fe0f", 18, 5, 7, ["👨🏼‍✈️"]],
						"1f3fd": ["1f468-1f3fd-200d-2708-fe0f", 18, 6, 7, ["👨🏽‍✈️"]],
						"1f3fe": ["1f468-1f3fe-200d-2708-fe0f", 18, 7, 7, ["👨🏾‍✈️"]],
						"1f3ff": ["1f468-1f3ff-200d-2708-fe0f", 18, 8, 7, ["👨🏿‍✈️"]]
					},
					"1f468": {
						"1f3fb": ["1f468-1f3fb", 18, 12, 31, ["👨🏻"]],
						"1f3fc": ["1f468-1f3fc", 18, 13, 31, ["👨🏼"]],
						"1f3fd": ["1f468-1f3fd", 18, 14, 31, ["👨🏽"]],
						"1f3fe": ["1f468-1f3fe", 18, 15, 31, ["👨🏾"]],
						"1f3ff": ["1f468-1f3ff", 18, 16, 31, ["👨🏿"]]
					},
					"1f469-200d-1f33e": {
						"1f3fb": ["1f469-1f3fb-200d-1f33e", 18, 18, 15, ["👩🏻‍🌾"]],
						"1f3fc": ["1f469-1f3fc-200d-1f33e", 18, 19, 15, ["👩🏼‍🌾"]],
						"1f3fd": ["1f469-1f3fd-200d-1f33e", 18, 20, 15, ["👩🏽‍🌾"]],
						"1f3fe": ["1f469-1f3fe-200d-1f33e", 18, 21, 15, ["👩🏾‍🌾"]],
						"1f3ff": ["1f469-1f3ff-200d-1f33e", 18, 22, 15, ["👩🏿‍🌾"]]
					},
					"1f469-200d-1f373": {
						"1f3fb": ["1f469-1f3fb-200d-1f373", 18, 24, 15, ["👩🏻‍🍳"]],
						"1f3fc": ["1f469-1f3fc-200d-1f373", 18, 25, 15, ["👩🏼‍🍳"]],
						"1f3fd": ["1f469-1f3fd-200d-1f373", 18, 26, 15, ["👩🏽‍🍳"]],
						"1f3fe": ["1f469-1f3fe-200d-1f373", 18, 27, 15, ["👩🏾‍🍳"]],
						"1f3ff": ["1f469-1f3ff-200d-1f373", 18, 28, 15, ["👩🏿‍🍳"]]
					},
					"1f469-200d-1f393": {
						"1f3fb": ["1f469-1f3fb-200d-1f393", 18, 30, 15, ["👩🏻‍🎓"]],
						"1f3fc": ["1f469-1f3fc-200d-1f393", 18, 31, 15, ["👩🏼‍🎓"]],
						"1f3fd": ["1f469-1f3fd-200d-1f393", 18, 32, 15, ["👩🏽‍🎓"]],
						"1f3fe": ["1f469-1f3fe-200d-1f393", 18, 33, 15, ["👩🏾‍🎓"]],
						"1f3ff": ["1f469-1f3ff-200d-1f393", 18, 34, 15, ["👩🏿‍🎓"]]
					},
					"1f469-200d-1f3a4": {
						"1f3fb": ["1f469-1f3fb-200d-1f3a4", 18, 36, 15, ["👩🏻‍🎤"]],
						"1f3fc": ["1f469-1f3fc-200d-1f3a4", 18, 37, 15, ["👩🏼‍🎤"]],
						"1f3fd": ["1f469-1f3fd-200d-1f3a4", 18, 38, 15, ["👩🏽‍🎤"]],
						"1f3fe": ["1f469-1f3fe-200d-1f3a4", 18, 39, 15, ["👩🏾‍🎤"]],
						"1f3ff": ["1f469-1f3ff-200d-1f3a4", 18, 40, 15, ["👩🏿‍🎤"]]
					},
					"1f469-200d-1f3a8": {
						"1f3fb": ["1f469-1f3fb-200d-1f3a8", 18, 42, 15, ["👩🏻‍🎨"]],
						"1f3fc": ["1f469-1f3fc-200d-1f3a8", 18, 43, 15, ["👩🏼‍🎨"]],
						"1f3fd": ["1f469-1f3fd-200d-1f3a8", 18, 44, 15, ["👩🏽‍🎨"]],
						"1f3fe": ["1f469-1f3fe-200d-1f3a8", 18, 45, 15, ["👩🏾‍🎨"]],
						"1f3ff": ["1f469-1f3ff-200d-1f3a8", 18, 46, 15, ["👩🏿‍🎨"]]
					},
					"1f469-200d-1f3eb": {
						"1f3fb": ["1f469-1f3fb-200d-1f3eb", 18, 48, 15, ["👩🏻‍🏫"]],
						"1f3fc": ["1f469-1f3fc-200d-1f3eb", 18, 49, 15, ["👩🏼‍🏫"]],
						"1f3fd": ["1f469-1f3fd-200d-1f3eb", 18, 50, 15, ["👩🏽‍🏫"]],
						"1f3fe": ["1f469-1f3fe-200d-1f3eb", 18, 51, 15, ["👩🏾‍🏫"]],
						"1f3ff": ["1f469-1f3ff-200d-1f3eb", 19, 0, 15, ["👩🏿‍🏫"]]
					},
					"1f469-200d-1f3ed": {
						"1f3fb": ["1f469-1f3fb-200d-1f3ed", 19, 2, 15, ["👩🏻‍🏭"]],
						"1f3fc": ["1f469-1f3fc-200d-1f3ed", 19, 3, 15, ["👩🏼‍🏭"]],
						"1f3fd": ["1f469-1f3fd-200d-1f3ed", 19, 4, 15, ["👩🏽‍🏭"]],
						"1f3fe": ["1f469-1f3fe-200d-1f3ed", 19, 5, 15, ["👩🏾‍🏭"]],
						"1f3ff": ["1f469-1f3ff-200d-1f3ed", 19, 6, 15, ["👩🏿‍🏭"]]
					},
					"1f469-200d-1f4bb": {
						"1f3fb": ["1f469-1f3fb-200d-1f4bb", 19, 18, 15, ["👩🏻‍💻"]],
						"1f3fc": ["1f469-1f3fc-200d-1f4bb", 19, 19, 15, ["👩🏼‍💻"]],
						"1f3fd": ["1f469-1f3fd-200d-1f4bb", 19, 20, 15, ["👩🏽‍💻"]],
						"1f3fe": ["1f469-1f3fe-200d-1f4bb", 19, 21, 15, ["👩🏾‍💻"]],
						"1f3ff": ["1f469-1f3ff-200d-1f4bb", 19, 22, 15, ["👩🏿‍💻"]]
					},
					"1f469-200d-1f4bc": {
						"1f3fb": ["1f469-1f3fb-200d-1f4bc", 19, 24, 15, ["👩🏻‍💼"]],
						"1f3fc": ["1f469-1f3fc-200d-1f4bc", 19, 25, 15, ["👩🏼‍💼"]],
						"1f3fd": ["1f469-1f3fd-200d-1f4bc", 19, 26, 15, ["👩🏽‍💼"]],
						"1f3fe": ["1f469-1f3fe-200d-1f4bc", 19, 27, 15, ["👩🏾‍💼"]],
						"1f3ff": ["1f469-1f3ff-200d-1f4bc", 19, 28, 15, ["👩🏿‍💼"]]
					},
					"1f469-200d-1f527": {
						"1f3fb": ["1f469-1f3fb-200d-1f527", 19, 30, 15, ["👩🏻‍🔧"]],
						"1f3fc": ["1f469-1f3fc-200d-1f527", 19, 31, 15, ["👩🏼‍🔧"]],
						"1f3fd": ["1f469-1f3fd-200d-1f527", 19, 32, 15, ["👩🏽‍🔧"]],
						"1f3fe": ["1f469-1f3fe-200d-1f527", 19, 33, 15, ["👩🏾‍🔧"]],
						"1f3ff": ["1f469-1f3ff-200d-1f527", 19, 34, 15, ["👩🏿‍🔧"]]
					},
					"1f469-200d-1f52c": {
						"1f3fb": ["1f469-1f3fb-200d-1f52c", 19, 36, 15, ["👩🏻‍🔬"]],
						"1f3fc": ["1f469-1f3fc-200d-1f52c", 19, 37, 15, ["👩🏼‍🔬"]],
						"1f3fd": ["1f469-1f3fd-200d-1f52c", 19, 38, 15, ["👩🏽‍🔬"]],
						"1f3fe": ["1f469-1f3fe-200d-1f52c", 19, 39, 15, ["👩🏾‍🔬"]],
						"1f3ff": ["1f469-1f3ff-200d-1f52c", 19, 40, 15, ["👩🏿‍🔬"]]
					},
					"1f469-200d-1f680": {
						"1f3fb": ["1f469-1f3fb-200d-1f680", 19, 42, 15, ["👩🏻‍🚀"]],
						"1f3fc": ["1f469-1f3fc-200d-1f680", 19, 43, 15, ["👩🏼‍🚀"]],
						"1f3fd": ["1f469-1f3fd-200d-1f680", 19, 44, 15, ["👩🏽‍🚀"]],
						"1f3fe": ["1f469-1f3fe-200d-1f680", 19, 45, 15, ["👩🏾‍🚀"]],
						"1f3ff": ["1f469-1f3ff-200d-1f680", 19, 46, 15, ["👩🏿‍🚀"]]
					},
					"1f469-200d-1f692": {
						"1f3fb": ["1f469-1f3fb-200d-1f692", 19, 48, 15, ["👩🏻‍🚒"]],
						"1f3fc": ["1f469-1f3fc-200d-1f692", 19, 49, 15, ["👩🏼‍🚒"]],
						"1f3fd": ["1f469-1f3fd-200d-1f692", 19, 50, 15, ["👩🏽‍🚒"]],
						"1f3fe": ["1f469-1f3fe-200d-1f692", 19, 51, 15, ["👩🏾‍🚒"]],
						"1f3ff": ["1f469-1f3ff-200d-1f692", 20, 0, 15, ["👩🏿‍🚒"]]
					},
					"1f469-200d-2695-fe0f": {
						"1f3fb": ["1f469-1f3fb-200d-2695-fe0f", 20, 2, 7, ["👩🏻‍⚕️"]],
						"1f3fc": ["1f469-1f3fc-200d-2695-fe0f", 20, 3, 7, ["👩🏼‍⚕️"]],
						"1f3fd": ["1f469-1f3fd-200d-2695-fe0f", 20, 4, 7, ["👩🏽‍⚕️"]],
						"1f3fe": ["1f469-1f3fe-200d-2695-fe0f", 20, 5, 7, ["👩🏾‍⚕️"]],
						"1f3ff": ["1f469-1f3ff-200d-2695-fe0f", 20, 6, 7, ["👩🏿‍⚕️"]]
					},
					"1f469-200d-2696-fe0f": {
						"1f3fb": ["1f469-1f3fb-200d-2696-fe0f", 20, 8, 7, ["👩🏻‍⚖️"]],
						"1f3fc": ["1f469-1f3fc-200d-2696-fe0f", 20, 9, 7, ["👩🏼‍⚖️"]],
						"1f3fd": ["1f469-1f3fd-200d-2696-fe0f", 20, 10, 7, ["👩🏽‍⚖️"]],
						"1f3fe": ["1f469-1f3fe-200d-2696-fe0f", 20, 11, 7, ["👩🏾‍⚖️"]],
						"1f3ff": ["1f469-1f3ff-200d-2696-fe0f", 20, 12, 7, ["👩🏿‍⚖️"]]
					},
					"1f469-200d-2708-fe0f": {
						"1f3fb": ["1f469-1f3fb-200d-2708-fe0f", 20, 14, 7, ["👩🏻‍✈️"]],
						"1f3fc": ["1f469-1f3fc-200d-2708-fe0f", 20, 15, 7, ["👩🏼‍✈️"]],
						"1f3fd": ["1f469-1f3fd-200d-2708-fe0f", 20, 16, 7, ["👩🏽‍✈️"]],
						"1f3fe": ["1f469-1f3fe-200d-2708-fe0f", 20, 17, 7, ["👩🏾‍✈️"]],
						"1f3ff": ["1f469-1f3ff-200d-2708-fe0f", 20, 18, 7, ["👩🏿‍✈️"]]
					},
					"1f469": {
						"1f3fb": ["1f469-1f3fb", 20, 24, 31, ["👩🏻"]],
						"1f3fc": ["1f469-1f3fc", 20, 25, 31, ["👩🏼"]],
						"1f3fd": ["1f469-1f3fd", 20, 26, 31, ["👩🏽"]],
						"1f3fe": ["1f469-1f3fe", 20, 27, 31, ["👩🏾"]],
						"1f3ff": ["1f469-1f3ff", 20, 28, 31, ["👩🏿"]]
					},
					"1f46e-200d-2640-fe0f": {
						"1f3fb": ["1f46e-1f3fb-200d-2640-fe0f", 20, 34, 7, ["👮🏻‍♀️"]],
						"1f3fc": ["1f46e-1f3fc-200d-2640-fe0f", 20, 35, 7, ["👮🏼‍♀️"]],
						"1f3fd": ["1f46e-1f3fd-200d-2640-fe0f", 20, 36, 7, ["👮🏽‍♀️"]],
						"1f3fe": ["1f46e-1f3fe-200d-2640-fe0f", 20, 37, 7, ["👮🏾‍♀️"]],
						"1f3ff": ["1f46e-1f3ff-200d-2640-fe0f", 20, 38, 7, ["👮🏿‍♀️"]]
					},
					"1f46e-200d-2642-fe0f": {
						"1f3fb": ["1f46e-1f3fb-200d-2642-fe0f", 20, 40, 7, ["👮🏻‍♂️", "👮🏻"]],
						"1f3fc": ["1f46e-1f3fc-200d-2642-fe0f", 20, 41, 7, ["👮🏼‍♂️", "👮🏼"]],
						"1f3fd": ["1f46e-1f3fd-200d-2642-fe0f", 20, 42, 7, ["👮🏽‍♂️", "👮🏽"]],
						"1f3fe": ["1f46e-1f3fe-200d-2642-fe0f", 20, 43, 7, ["👮🏾‍♂️", "👮🏾"]],
						"1f3ff": ["1f46e-1f3ff-200d-2642-fe0f", 20, 44, 7, ["👮🏿‍♂️", "👮🏿"]]
					},
					"1f470": {
						"1f3fb": ["1f470-1f3fb", 21, 3, 31, ["👰🏻"]],
						"1f3fc": ["1f470-1f3fc", 21, 4, 31, ["👰🏼"]],
						"1f3fd": ["1f470-1f3fd", 21, 5, 31, ["👰🏽"]],
						"1f3fe": ["1f470-1f3fe", 21, 6, 31, ["👰🏾"]],
						"1f3ff": ["1f470-1f3ff", 21, 7, 31, ["👰🏿"]]
					},
					"1f471-200d-2640-fe0f": {
						"1f3fb": ["1f471-1f3fb-200d-2640-fe0f", 21, 9, 7, ["👱🏻‍♀️"]],
						"1f3fc": ["1f471-1f3fc-200d-2640-fe0f", 21, 10, 7, ["👱🏼‍♀️"]],
						"1f3fd": ["1f471-1f3fd-200d-2640-fe0f", 21, 11, 7, ["👱🏽‍♀️"]],
						"1f3fe": ["1f471-1f3fe-200d-2640-fe0f", 21, 12, 7, ["👱🏾‍♀️"]],
						"1f3ff": ["1f471-1f3ff-200d-2640-fe0f", 21, 13, 7, ["👱🏿‍♀️"]]
					},
					"1f471-200d-2642-fe0f": {
						"1f3fb": ["1f471-1f3fb-200d-2642-fe0f", 21, 15, 7, ["👱🏻‍♂️", "👱🏻"]],
						"1f3fc": ["1f471-1f3fc-200d-2642-fe0f", 21, 16, 7, ["👱🏼‍♂️", "👱🏼"]],
						"1f3fd": ["1f471-1f3fd-200d-2642-fe0f", 21, 17, 7, ["👱🏽‍♂️", "👱🏽"]],
						"1f3fe": ["1f471-1f3fe-200d-2642-fe0f", 21, 18, 7, ["👱🏾‍♂️", "👱🏾"]],
						"1f3ff": ["1f471-1f3ff-200d-2642-fe0f", 21, 19, 7, ["👱🏿‍♂️", "👱🏿"]]
					},
					"1f472": {
						"1f3fb": ["1f472-1f3fb", 21, 27, 31, ["👲🏻"]],
						"1f3fc": ["1f472-1f3fc", 21, 28, 31, ["👲🏼"]],
						"1f3fd": ["1f472-1f3fd", 21, 29, 31, ["👲🏽"]],
						"1f3fe": ["1f472-1f3fe", 21, 30, 31, ["👲🏾"]],
						"1f3ff": ["1f472-1f3ff", 21, 31, 31, ["👲🏿"]]
					},
					"1f473-200d-2640-fe0f": {
						"1f3fb": ["1f473-1f3fb-200d-2640-fe0f", 21, 33, 7, ["👳🏻‍♀️"]],
						"1f3fc": ["1f473-1f3fc-200d-2640-fe0f", 21, 34, 7, ["👳🏼‍♀️"]],
						"1f3fd": ["1f473-1f3fd-200d-2640-fe0f", 21, 35, 7, ["👳🏽‍♀️"]],
						"1f3fe": ["1f473-1f3fe-200d-2640-fe0f", 21, 36, 7, ["👳🏾‍♀️"]],
						"1f3ff": ["1f473-1f3ff-200d-2640-fe0f", 21, 37, 7, ["👳🏿‍♀️"]]
					},
					"1f473-200d-2642-fe0f": {
						"1f3fb": ["1f473-1f3fb-200d-2642-fe0f", 21, 39, 7, ["👳🏻‍♂️", "👳🏻"]],
						"1f3fc": ["1f473-1f3fc-200d-2642-fe0f", 21, 40, 7, ["👳🏼‍♂️", "👳🏼"]],
						"1f3fd": ["1f473-1f3fd-200d-2642-fe0f", 21, 41, 7, ["👳🏽‍♂️", "👳🏽"]],
						"1f3fe": ["1f473-1f3fe-200d-2642-fe0f", 21, 42, 7, ["👳🏾‍♂️", "👳🏾"]],
						"1f3ff": ["1f473-1f3ff-200d-2642-fe0f", 21, 43, 7, ["👳🏿‍♂️", "👳🏿"]]
					},
					"1f474": {
						"1f3fb": ["1f474-1f3fb", 21, 51, 31, ["👴🏻"]],
						"1f3fc": ["1f474-1f3fc", 22, 0, 31, ["👴🏼"]],
						"1f3fd": ["1f474-1f3fd", 22, 1, 31, ["👴🏽"]],
						"1f3fe": ["1f474-1f3fe", 22, 2, 31, ["👴🏾"]],
						"1f3ff": ["1f474-1f3ff", 22, 3, 31, ["👴🏿"]]
					},
					"1f475": {
						"1f3fb": ["1f475-1f3fb", 22, 5, 31, ["👵🏻"]],
						"1f3fc": ["1f475-1f3fc", 22, 6, 31, ["👵🏼"]],
						"1f3fd": ["1f475-1f3fd", 22, 7, 31, ["👵🏽"]],
						"1f3fe": ["1f475-1f3fe", 22, 8, 31, ["👵🏾"]],
						"1f3ff": ["1f475-1f3ff", 22, 9, 31, ["👵🏿"]]
					},
					"1f476": {
						"1f3fb": ["1f476-1f3fb", 22, 11, 31, ["👶🏻"]],
						"1f3fc": ["1f476-1f3fc", 22, 12, 31, ["👶🏼"]],
						"1f3fd": ["1f476-1f3fd", 22, 13, 31, ["👶🏽"]],
						"1f3fe": ["1f476-1f3fe", 22, 14, 31, ["👶🏾"]],
						"1f3ff": ["1f476-1f3ff", 22, 15, 31, ["👶🏿"]]
					},
					"1f477-200d-2640-fe0f": {
						"1f3fb": ["1f477-1f3fb-200d-2640-fe0f", 22, 17, 7, ["👷🏻‍♀️"]],
						"1f3fc": ["1f477-1f3fc-200d-2640-fe0f", 22, 18, 7, ["👷🏼‍♀️"]],
						"1f3fd": ["1f477-1f3fd-200d-2640-fe0f", 22, 19, 7, ["👷🏽‍♀️"]],
						"1f3fe": ["1f477-1f3fe-200d-2640-fe0f", 22, 20, 7, ["👷🏾‍♀️"]],
						"1f3ff": ["1f477-1f3ff-200d-2640-fe0f", 22, 21, 7, ["👷🏿‍♀️"]]
					},
					"1f477-200d-2642-fe0f": {
						"1f3fb": ["1f477-1f3fb-200d-2642-fe0f", 22, 23, 7, ["👷🏻‍♂️", "👷🏻"]],
						"1f3fc": ["1f477-1f3fc-200d-2642-fe0f", 22, 24, 7, ["👷🏼‍♂️", "👷🏼"]],
						"1f3fd": ["1f477-1f3fd-200d-2642-fe0f", 22, 25, 7, ["👷🏽‍♂️", "👷🏽"]],
						"1f3fe": ["1f477-1f3fe-200d-2642-fe0f", 22, 26, 7, ["👷🏾‍♂️", "👷🏾"]],
						"1f3ff": ["1f477-1f3ff-200d-2642-fe0f", 22, 27, 7, ["👷🏿‍♂️", "👷🏿"]]
					},
					"1f478": {
						"1f3fb": ["1f478-1f3fb", 22, 35, 31, ["👸🏻"]],
						"1f3fc": ["1f478-1f3fc", 22, 36, 31, ["👸🏼"]],
						"1f3fd": ["1f478-1f3fd", 22, 37, 31, ["👸🏽"]],
						"1f3fe": ["1f478-1f3fe", 22, 38, 31, ["👸🏾"]],
						"1f3ff": ["1f478-1f3ff", 22, 39, 31, ["👸🏿"]]
					},
					"1f47c": {
						"1f3fb": ["1f47c-1f3fb", 22, 44, 31, ["👼🏻"]],
						"1f3fc": ["1f47c-1f3fc", 22, 45, 31, ["👼🏼"]],
						"1f3fd": ["1f47c-1f3fd", 22, 46, 31, ["👼🏽"]],
						"1f3fe": ["1f47c-1f3fe", 22, 47, 31, ["👼🏾"]],
						"1f3ff": ["1f47c-1f3ff", 22, 48, 31, ["👼🏿"]]
					},
					"1f481-200d-2640-fe0f": {
						"1f3fb": ["1f481-1f3fb-200d-2640-fe0f", 23, 2, 7, ["💁🏻‍♀️", "💁🏻"]],
						"1f3fc": ["1f481-1f3fc-200d-2640-fe0f", 23, 3, 7, ["💁🏼‍♀️", "💁🏼"]],
						"1f3fd": ["1f481-1f3fd-200d-2640-fe0f", 23, 4, 7, ["💁🏽‍♀️", "💁🏽"]],
						"1f3fe": ["1f481-1f3fe-200d-2640-fe0f", 23, 5, 7, ["💁🏾‍♀️", "💁🏾"]],
						"1f3ff": ["1f481-1f3ff-200d-2640-fe0f", 23, 6, 7, ["💁🏿‍♀️", "💁🏿"]]
					},
					"1f481-200d-2642-fe0f": {
						"1f3fb": ["1f481-1f3fb-200d-2642-fe0f", 23, 8, 7, ["💁🏻‍♂️"]],
						"1f3fc": ["1f481-1f3fc-200d-2642-fe0f", 23, 9, 7, ["💁🏼‍♂️"]],
						"1f3fd": ["1f481-1f3fd-200d-2642-fe0f", 23, 10, 7, ["💁🏽‍♂️"]],
						"1f3fe": ["1f481-1f3fe-200d-2642-fe0f", 23, 11, 7, ["💁🏾‍♂️"]],
						"1f3ff": ["1f481-1f3ff-200d-2642-fe0f", 23, 12, 7, ["💁🏿‍♂️"]]
					},
					"1f482-200d-2640-fe0f": {
						"1f3fb": ["1f482-1f3fb-200d-2640-fe0f", 23, 20, 7, ["💂🏻‍♀️"]],
						"1f3fc": ["1f482-1f3fc-200d-2640-fe0f", 23, 21, 7, ["💂🏼‍♀️"]],
						"1f3fd": ["1f482-1f3fd-200d-2640-fe0f", 23, 22, 7, ["💂🏽‍♀️"]],
						"1f3fe": ["1f482-1f3fe-200d-2640-fe0f", 23, 23, 7, ["💂🏾‍♀️"]],
						"1f3ff": ["1f482-1f3ff-200d-2640-fe0f", 23, 24, 7, ["💂🏿‍♀️"]]
					},
					"1f482-200d-2642-fe0f": {
						"1f3fb": ["1f482-1f3fb-200d-2642-fe0f", 23, 26, 7, ["💂🏻‍♂️", "💂🏻"]],
						"1f3fc": ["1f482-1f3fc-200d-2642-fe0f", 23, 27, 7, ["💂🏼‍♂️", "💂🏼"]],
						"1f3fd": ["1f482-1f3fd-200d-2642-fe0f", 23, 28, 7, ["💂🏽‍♂️", "💂🏽"]],
						"1f3fe": ["1f482-1f3fe-200d-2642-fe0f", 23, 29, 7, ["💂🏾‍♂️", "💂🏾"]],
						"1f3ff": ["1f482-1f3ff-200d-2642-fe0f", 23, 30, 7, ["💂🏿‍♂️", "💂🏿"]]
					},
					"1f483": {
						"1f3fb": ["1f483-1f3fb", 23, 38, 31, ["💃🏻"]],
						"1f3fc": ["1f483-1f3fc", 23, 39, 31, ["💃🏼"]],
						"1f3fd": ["1f483-1f3fd", 23, 40, 31, ["💃🏽"]],
						"1f3fe": ["1f483-1f3fe", 23, 41, 31, ["💃🏾"]],
						"1f3ff": ["1f483-1f3ff", 23, 42, 31, ["💃🏿"]]
					},
					"1f485": {
						"1f3fb": ["1f485-1f3fb", 23, 45, 31, ["💅🏻"]],
						"1f3fc": ["1f485-1f3fc", 23, 46, 31, ["💅🏼"]],
						"1f3fd": ["1f485-1f3fd", 23, 47, 31, ["💅🏽"]],
						"1f3fe": ["1f485-1f3fe", 23, 48, 31, ["💅🏾"]],
						"1f3ff": ["1f485-1f3ff", 23, 49, 31, ["💅🏿"]]
					},
					"1f486-200d-2640-fe0f": {
						"1f3fb": ["1f486-1f3fb-200d-2640-fe0f", 23, 51, 7, ["💆🏻‍♀️", "💆🏻"]],
						"1f3fc": ["1f486-1f3fc-200d-2640-fe0f", 24, 0, 7, ["💆🏼‍♀️", "💆🏼"]],
						"1f3fd": ["1f486-1f3fd-200d-2640-fe0f", 24, 1, 7, ["💆🏽‍♀️", "💆🏽"]],
						"1f3fe": ["1f486-1f3fe-200d-2640-fe0f", 24, 2, 7, ["💆🏾‍♀️", "💆🏾"]],
						"1f3ff": ["1f486-1f3ff-200d-2640-fe0f", 24, 3, 7, ["💆🏿‍♀️", "💆🏿"]]
					},
					"1f486-200d-2642-fe0f": {
						"1f3fb": ["1f486-1f3fb-200d-2642-fe0f", 24, 5, 7, ["💆🏻‍♂️"]],
						"1f3fc": ["1f486-1f3fc-200d-2642-fe0f", 24, 6, 7, ["💆🏼‍♂️"]],
						"1f3fd": ["1f486-1f3fd-200d-2642-fe0f", 24, 7, 7, ["💆🏽‍♂️"]],
						"1f3fe": ["1f486-1f3fe-200d-2642-fe0f", 24, 8, 7, ["💆🏾‍♂️"]],
						"1f3ff": ["1f486-1f3ff-200d-2642-fe0f", 24, 9, 7, ["💆🏿‍♂️"]]
					},
					"1f487-200d-2640-fe0f": {
						"1f3fb": ["1f487-1f3fb-200d-2640-fe0f", 24, 17, 7, ["💇🏻‍♀️", "💇🏻"]],
						"1f3fc": ["1f487-1f3fc-200d-2640-fe0f", 24, 18, 7, ["💇🏼‍♀️", "💇🏼"]],
						"1f3fd": ["1f487-1f3fd-200d-2640-fe0f", 24, 19, 7, ["💇🏽‍♀️", "💇🏽"]],
						"1f3fe": ["1f487-1f3fe-200d-2640-fe0f", 24, 20, 7, ["💇🏾‍♀️", "💇🏾"]],
						"1f3ff": ["1f487-1f3ff-200d-2640-fe0f", 24, 21, 7, ["💇🏿‍♀️", "💇🏿"]]
					},
					"1f487-200d-2642-fe0f": {
						"1f3fb": ["1f487-1f3fb-200d-2642-fe0f", 24, 23, 7, ["💇🏻‍♂️"]],
						"1f3fc": ["1f487-1f3fc-200d-2642-fe0f", 24, 24, 7, ["💇🏼‍♂️"]],
						"1f3fd": ["1f487-1f3fd-200d-2642-fe0f", 24, 25, 7, ["💇🏽‍♂️"]],
						"1f3fe": ["1f487-1f3fe-200d-2642-fe0f", 24, 26, 7, ["💇🏾‍♂️"]],
						"1f3ff": ["1f487-1f3ff-200d-2642-fe0f", 24, 27, 7, ["💇🏿‍♂️"]]
					},
					"1f4aa": {
						"1f3fb": ["1f4aa-1f3fb", 25, 17, 31, ["💪🏻"]],
						"1f3fc": ["1f4aa-1f3fc", 25, 18, 31, ["💪🏼"]],
						"1f3fd": ["1f4aa-1f3fd", 25, 19, 31, ["💪🏽"]],
						"1f3fe": ["1f4aa-1f3fe", 25, 20, 31, ["💪🏾"]],
						"1f3ff": ["1f4aa-1f3ff", 25, 21, 31, ["💪🏿"]]
					},
					"1f574-fe0f": {
						"1f3fb": ["1f574-1f3fb", 28, 46, 15, ["🕴🏻"]],
						"1f3fc": ["1f574-1f3fc", 28, 47, 15, ["🕴🏼"]],
						"1f3fd": ["1f574-1f3fd", 28, 48, 15, ["🕴🏽"]],
						"1f3fe": ["1f574-1f3fe", 28, 49, 15, ["🕴🏾"]],
						"1f3ff": ["1f574-1f3ff", 28, 50, 15, ["🕴🏿"]]
					},
					"1f575-fe0f-200d-2640-fe0f": {
						"1f3fb": ["1f575-1f3fb-200d-2640-fe0f", 29, 0, 7, ["🕵🏻‍♀️"]],
						"1f3fc": ["1f575-1f3fc-200d-2640-fe0f", 29, 1, 7, ["🕵🏼‍♀️"]],
						"1f3fd": ["1f575-1f3fd-200d-2640-fe0f", 29, 2, 7, ["🕵🏽‍♀️"]],
						"1f3fe": ["1f575-1f3fe-200d-2640-fe0f", 29, 3, 7, ["🕵🏾‍♀️"]],
						"1f3ff": ["1f575-1f3ff-200d-2640-fe0f", 29, 4, 7, ["🕵🏿‍♀️"]]
					},
					"1f575-fe0f-200d-2642-fe0f": {
						"1f3fb": ["1f575-1f3fb-200d-2642-fe0f", 29, 6, 7, ["🕵🏻‍♂️", "🕵🏻"]],
						"1f3fc": ["1f575-1f3fc-200d-2642-fe0f", 29, 7, 7, ["🕵🏼‍♂️", "🕵🏼"]],
						"1f3fd": ["1f575-1f3fd-200d-2642-fe0f", 29, 8, 7, ["🕵🏽‍♂️", "🕵🏽"]],
						"1f3fe": ["1f575-1f3fe-200d-2642-fe0f", 29, 9, 7, ["🕵🏾‍♂️", "🕵🏾"]],
						"1f3ff": ["1f575-1f3ff-200d-2642-fe0f", 29, 10, 7, ["🕵🏿‍♂️", "🕵🏿"]]
					},
					"1f57a": {
						"1f3fb": ["1f57a-1f3fb", 29, 22, 15, ["🕺🏻"]],
						"1f3fc": ["1f57a-1f3fc", 29, 23, 15, ["🕺🏼"]],
						"1f3fd": ["1f57a-1f3fd", 29, 24, 15, ["🕺🏽"]],
						"1f3fe": ["1f57a-1f3fe", 29, 25, 15, ["🕺🏾"]],
						"1f3ff": ["1f57a-1f3ff", 29, 26, 15, ["🕺🏿"]]
					},
					"1f590-fe0f": {
						"1f3fb": ["1f590-1f3fb", 29, 33, 15, ["🖐🏻"]],
						"1f3fc": ["1f590-1f3fc", 29, 34, 15, ["🖐🏼"]],
						"1f3fd": ["1f590-1f3fd", 29, 35, 15, ["🖐🏽"]],
						"1f3fe": ["1f590-1f3fe", 29, 36, 15, ["🖐🏾"]],
						"1f3ff": ["1f590-1f3ff", 29, 37, 15, ["🖐🏿"]]
					},
					"1f595": {
						"1f3fb": ["1f595-1f3fb", 29, 39, 15, ["🖕🏻"]],
						"1f3fc": ["1f595-1f3fc", 29, 40, 15, ["🖕🏼"]],
						"1f3fd": ["1f595-1f3fd", 29, 41, 15, ["🖕🏽"]],
						"1f3fe": ["1f595-1f3fe", 29, 42, 15, ["🖕🏾"]],
						"1f3ff": ["1f595-1f3ff", 29, 43, 15, ["🖕🏿"]]
					},
					"1f596": {
						"1f3fb": ["1f596-1f3fb", 29, 45, 15, ["🖖🏻"]],
						"1f3fc": ["1f596-1f3fc", 29, 46, 15, ["🖖🏼"]],
						"1f3fd": ["1f596-1f3fd", 29, 47, 15, ["🖖🏽"]],
						"1f3fe": ["1f596-1f3fe", 29, 48, 15, ["🖖🏾"]],
						"1f3ff": ["1f596-1f3ff", 29, 49, 15, ["🖖🏿"]]
					},
					"1f645-200d-2640-fe0f": {
						"1f3fb": ["1f645-1f3fb-200d-2640-fe0f", 31, 42, 7, ["🙅🏻‍♀️", "🙅🏻"]],
						"1f3fc": ["1f645-1f3fc-200d-2640-fe0f", 31, 43, 7, ["🙅🏼‍♀️", "🙅🏼"]],
						"1f3fd": ["1f645-1f3fd-200d-2640-fe0f", 31, 44, 7, ["🙅🏽‍♀️", "🙅🏽"]],
						"1f3fe": ["1f645-1f3fe-200d-2640-fe0f", 31, 45, 7, ["🙅🏾‍♀️", "🙅🏾"]],
						"1f3ff": ["1f645-1f3ff-200d-2640-fe0f", 31, 46, 7, ["🙅🏿‍♀️", "🙅🏿"]]
					},
					"1f645-200d-2642-fe0f": {
						"1f3fb": ["1f645-1f3fb-200d-2642-fe0f", 31, 48, 7, ["🙅🏻‍♂️"]],
						"1f3fc": ["1f645-1f3fc-200d-2642-fe0f", 31, 49, 7, ["🙅🏼‍♂️"]],
						"1f3fd": ["1f645-1f3fd-200d-2642-fe0f", 31, 50, 7, ["🙅🏽‍♂️"]],
						"1f3fe": ["1f645-1f3fe-200d-2642-fe0f", 31, 51, 7, ["🙅🏾‍♂️"]],
						"1f3ff": ["1f645-1f3ff-200d-2642-fe0f", 32, 0, 7, ["🙅🏿‍♂️"]]
					},
					"1f646-200d-2640-fe0f": {
						"1f3fb": ["1f646-1f3fb-200d-2640-fe0f", 32, 8, 7, ["🙆🏻‍♀️", "🙆🏻"]],
						"1f3fc": ["1f646-1f3fc-200d-2640-fe0f", 32, 9, 7, ["🙆🏼‍♀️", "🙆🏼"]],
						"1f3fd": ["1f646-1f3fd-200d-2640-fe0f", 32, 10, 7, ["🙆🏽‍♀️", "🙆🏽"]],
						"1f3fe": ["1f646-1f3fe-200d-2640-fe0f", 32, 11, 7, ["🙆🏾‍♀️", "🙆🏾"]],
						"1f3ff": ["1f646-1f3ff-200d-2640-fe0f", 32, 12, 7, ["🙆🏿‍♀️", "🙆🏿"]]
					},
					"1f646-200d-2642-fe0f": {
						"1f3fb": ["1f646-1f3fb-200d-2642-fe0f", 32, 14, 7, ["🙆🏻‍♂️"]],
						"1f3fc": ["1f646-1f3fc-200d-2642-fe0f", 32, 15, 7, ["🙆🏼‍♂️"]],
						"1f3fd": ["1f646-1f3fd-200d-2642-fe0f", 32, 16, 7, ["🙆🏽‍♂️"]],
						"1f3fe": ["1f646-1f3fe-200d-2642-fe0f", 32, 17, 7, ["🙆🏾‍♂️"]],
						"1f3ff": ["1f646-1f3ff-200d-2642-fe0f", 32, 18, 7, ["🙆🏿‍♂️"]]
					},
					"1f647-200d-2640-fe0f": {
						"1f3fb": ["1f647-1f3fb-200d-2640-fe0f", 32, 26, 7, ["🙇🏻‍♀️"]],
						"1f3fc": ["1f647-1f3fc-200d-2640-fe0f", 32, 27, 7, ["🙇🏼‍♀️"]],
						"1f3fd": ["1f647-1f3fd-200d-2640-fe0f", 32, 28, 7, ["🙇🏽‍♀️"]],
						"1f3fe": ["1f647-1f3fe-200d-2640-fe0f", 32, 29, 7, ["🙇🏾‍♀️"]],
						"1f3ff": ["1f647-1f3ff-200d-2640-fe0f", 32, 30, 7, ["🙇🏿‍♀️"]]
					},
					"1f647-200d-2642-fe0f": {
						"1f3fb": ["1f647-1f3fb-200d-2642-fe0f", 32, 32, 7, ["🙇🏻‍♂️", "🙇🏻"]],
						"1f3fc": ["1f647-1f3fc-200d-2642-fe0f", 32, 33, 7, ["🙇🏼‍♂️", "🙇🏼"]],
						"1f3fd": ["1f647-1f3fd-200d-2642-fe0f", 32, 34, 7, ["🙇🏽‍♂️", "🙇🏽"]],
						"1f3fe": ["1f647-1f3fe-200d-2642-fe0f", 32, 35, 7, ["🙇🏾‍♂️", "🙇🏾"]],
						"1f3ff": ["1f647-1f3ff-200d-2642-fe0f", 32, 36, 7, ["🙇🏿‍♂️", "🙇🏿"]]
					},
					"1f64b-200d-2640-fe0f": {
						"1f3fb": ["1f64b-1f3fb-200d-2640-fe0f", 32, 47, 7, ["🙋🏻‍♀️", "🙋🏻"]],
						"1f3fc": ["1f64b-1f3fc-200d-2640-fe0f", 32, 48, 7, ["🙋🏼‍♀️", "🙋🏼"]],
						"1f3fd": ["1f64b-1f3fd-200d-2640-fe0f", 32, 49, 7, ["🙋🏽‍♀️", "🙋🏽"]],
						"1f3fe": ["1f64b-1f3fe-200d-2640-fe0f", 32, 50, 7, ["🙋🏾‍♀️", "🙋🏾"]],
						"1f3ff": ["1f64b-1f3ff-200d-2640-fe0f", 32, 51, 7, ["🙋🏿‍♀️", "🙋🏿"]]
					},
					"1f64b-200d-2642-fe0f": {
						"1f3fb": ["1f64b-1f3fb-200d-2642-fe0f", 33, 1, 7, ["🙋🏻‍♂️"]],
						"1f3fc": ["1f64b-1f3fc-200d-2642-fe0f", 33, 2, 7, ["🙋🏼‍♂️"]],
						"1f3fd": ["1f64b-1f3fd-200d-2642-fe0f", 33, 3, 7, ["🙋🏽‍♂️"]],
						"1f3fe": ["1f64b-1f3fe-200d-2642-fe0f", 33, 4, 7, ["🙋🏾‍♂️"]],
						"1f3ff": ["1f64b-1f3ff-200d-2642-fe0f", 33, 5, 7, ["🙋🏿‍♂️"]]
					},
					"1f64c": {
						"1f3fb": ["1f64c-1f3fb", 33, 13, 31, ["🙌🏻"]],
						"1f3fc": ["1f64c-1f3fc", 33, 14, 31, ["🙌🏼"]],
						"1f3fd": ["1f64c-1f3fd", 33, 15, 31, ["🙌🏽"]],
						"1f3fe": ["1f64c-1f3fe", 33, 16, 31, ["🙌🏾"]],
						"1f3ff": ["1f64c-1f3ff", 33, 17, 31, ["🙌🏿"]]
					},
					"1f64d-200d-2640-fe0f": {
						"1f3fb": ["1f64d-1f3fb-200d-2640-fe0f", 33, 19, 7, ["🙍🏻‍♀️", "🙍🏻"]],
						"1f3fc": ["1f64d-1f3fc-200d-2640-fe0f", 33, 20, 7, ["🙍🏼‍♀️", "🙍🏼"]],
						"1f3fd": ["1f64d-1f3fd-200d-2640-fe0f", 33, 21, 7, ["🙍🏽‍♀️", "🙍🏽"]],
						"1f3fe": ["1f64d-1f3fe-200d-2640-fe0f", 33, 22, 7, ["🙍🏾‍♀️", "🙍🏾"]],
						"1f3ff": ["1f64d-1f3ff-200d-2640-fe0f", 33, 23, 7, ["🙍🏿‍♀️", "🙍🏿"]]
					},
					"1f64d-200d-2642-fe0f": {
						"1f3fb": ["1f64d-1f3fb-200d-2642-fe0f", 33, 25, 7, ["🙍🏻‍♂️"]],
						"1f3fc": ["1f64d-1f3fc-200d-2642-fe0f", 33, 26, 7, ["🙍🏼‍♂️"]],
						"1f3fd": ["1f64d-1f3fd-200d-2642-fe0f", 33, 27, 7, ["🙍🏽‍♂️"]],
						"1f3fe": ["1f64d-1f3fe-200d-2642-fe0f", 33, 28, 7, ["🙍🏾‍♂️"]],
						"1f3ff": ["1f64d-1f3ff-200d-2642-fe0f", 33, 29, 7, ["🙍🏿‍♂️"]]
					},
					"1f64e-200d-2640-fe0f": {
						"1f3fb": ["1f64e-1f3fb-200d-2640-fe0f", 33, 37, 7, ["🙎🏻‍♀️", "🙎🏻"]],
						"1f3fc": ["1f64e-1f3fc-200d-2640-fe0f", 33, 38, 7, ["🙎🏼‍♀️", "🙎🏼"]],
						"1f3fd": ["1f64e-1f3fd-200d-2640-fe0f", 33, 39, 7, ["🙎🏽‍♀️", "🙎🏽"]],
						"1f3fe": ["1f64e-1f3fe-200d-2640-fe0f", 33, 40, 7, ["🙎🏾‍♀️", "🙎🏾"]],
						"1f3ff": ["1f64e-1f3ff-200d-2640-fe0f", 33, 41, 7, ["🙎🏿‍♀️", "🙎🏿"]]
					},
					"1f64e-200d-2642-fe0f": {
						"1f3fb": ["1f64e-1f3fb-200d-2642-fe0f", 33, 43, 7, ["🙎🏻‍♂️"]],
						"1f3fc": ["1f64e-1f3fc-200d-2642-fe0f", 33, 44, 7, ["🙎🏼‍♂️"]],
						"1f3fd": ["1f64e-1f3fd-200d-2642-fe0f", 33, 45, 7, ["🙎🏽‍♂️"]],
						"1f3fe": ["1f64e-1f3fe-200d-2642-fe0f", 33, 46, 7, ["🙎🏾‍♂️"]],
						"1f3ff": ["1f64e-1f3ff-200d-2642-fe0f", 33, 47, 7, ["🙎🏿‍♂️"]]
					},
					"1f64f": {
						"1f3fb": ["1f64f-1f3fb", 34, 3, 31, ["🙏🏻"]],
						"1f3fc": ["1f64f-1f3fc", 34, 4, 31, ["🙏🏼"]],
						"1f3fd": ["1f64f-1f3fd", 34, 5, 31, ["🙏🏽"]],
						"1f3fe": ["1f64f-1f3fe", 34, 6, 31, ["🙏🏾"]],
						"1f3ff": ["1f64f-1f3ff", 34, 7, 31, ["🙏🏿"]]
					},
					"1f6a3-200d-2640-fe0f": {
						"1f3fb": ["1f6a3-1f3fb-200d-2640-fe0f", 34, 44, 7, ["🚣🏻‍♀️"]],
						"1f3fc": ["1f6a3-1f3fc-200d-2640-fe0f", 34, 45, 7, ["🚣🏼‍♀️"]],
						"1f3fd": ["1f6a3-1f3fd-200d-2640-fe0f", 34, 46, 7, ["🚣🏽‍♀️"]],
						"1f3fe": ["1f6a3-1f3fe-200d-2640-fe0f", 34, 47, 7, ["🚣🏾‍♀️"]],
						"1f3ff": ["1f6a3-1f3ff-200d-2640-fe0f", 34, 48, 7, ["🚣🏿‍♀️"]]
					},
					"1f6a3-200d-2642-fe0f": {
						"1f3fb": ["1f6a3-1f3fb-200d-2642-fe0f", 34, 50, 7, ["🚣🏻‍♂️", "🚣🏻"]],
						"1f3fc": ["1f6a3-1f3fc-200d-2642-fe0f", 34, 51, 7, ["🚣🏼‍♂️", "🚣🏼"]],
						"1f3fd": ["1f6a3-1f3fd-200d-2642-fe0f", 35, 0, 7, ["🚣🏽‍♂️", "🚣🏽"]],
						"1f3fe": ["1f6a3-1f3fe-200d-2642-fe0f", 35, 1, 7, ["🚣🏾‍♂️", "🚣🏾"]],
						"1f3ff": ["1f6a3-1f3ff-200d-2642-fe0f", 35, 2, 7, ["🚣🏿‍♂️", "🚣🏿"]]
					},
					"1f6b4-200d-2640-fe0f": {
						"1f3fb": ["1f6b4-1f3fb-200d-2640-fe0f", 35, 26, 7, ["🚴🏻‍♀️"]],
						"1f3fc": ["1f6b4-1f3fc-200d-2640-fe0f", 35, 27, 7, ["🚴🏼‍♀️"]],
						"1f3fd": ["1f6b4-1f3fd-200d-2640-fe0f", 35, 28, 7, ["🚴🏽‍♀️"]],
						"1f3fe": ["1f6b4-1f3fe-200d-2640-fe0f", 35, 29, 7, ["🚴🏾‍♀️"]],
						"1f3ff": ["1f6b4-1f3ff-200d-2640-fe0f", 35, 30, 7, ["🚴🏿‍♀️"]]
					},
					"1f6b4-200d-2642-fe0f": {
						"1f3fb": ["1f6b4-1f3fb-200d-2642-fe0f", 35, 32, 7, ["🚴🏻‍♂️", "🚴🏻"]],
						"1f3fc": ["1f6b4-1f3fc-200d-2642-fe0f", 35, 33, 7, ["🚴🏼‍♂️", "🚴🏼"]],
						"1f3fd": ["1f6b4-1f3fd-200d-2642-fe0f", 35, 34, 7, ["🚴🏽‍♂️", "🚴🏽"]],
						"1f3fe": ["1f6b4-1f3fe-200d-2642-fe0f", 35, 35, 7, ["🚴🏾‍♂️", "🚴🏾"]],
						"1f3ff": ["1f6b4-1f3ff-200d-2642-fe0f", 35, 36, 7, ["🚴🏿‍♂️", "🚴🏿"]]
					},
					"1f6b5-200d-2640-fe0f": {
						"1f3fb": ["1f6b5-1f3fb-200d-2640-fe0f", 35, 44, 7, ["🚵🏻‍♀️"]],
						"1f3fc": ["1f6b5-1f3fc-200d-2640-fe0f", 35, 45, 7, ["🚵🏼‍♀️"]],
						"1f3fd": ["1f6b5-1f3fd-200d-2640-fe0f", 35, 46, 7, ["🚵🏽‍♀️"]],
						"1f3fe": ["1f6b5-1f3fe-200d-2640-fe0f", 35, 47, 7, ["🚵🏾‍♀️"]],
						"1f3ff": ["1f6b5-1f3ff-200d-2640-fe0f", 35, 48, 7, ["🚵🏿‍♀️"]]
					},
					"1f6b5-200d-2642-fe0f": {
						"1f3fb": ["1f6b5-1f3fb-200d-2642-fe0f", 35, 50, 7, ["🚵🏻‍♂️", "🚵🏻"]],
						"1f3fc": ["1f6b5-1f3fc-200d-2642-fe0f", 35, 51, 7, ["🚵🏼‍♂️", "🚵🏼"]],
						"1f3fd": ["1f6b5-1f3fd-200d-2642-fe0f", 36, 0, 7, ["🚵🏽‍♂️", "🚵🏽"]],
						"1f3fe": ["1f6b5-1f3fe-200d-2642-fe0f", 36, 1, 7, ["🚵🏾‍♂️", "🚵🏾"]],
						"1f3ff": ["1f6b5-1f3ff-200d-2642-fe0f", 36, 2, 7, ["🚵🏿‍♂️", "🚵🏿"]]
					},
					"1f6b6-200d-2640-fe0f": {
						"1f3fb": ["1f6b6-1f3fb-200d-2640-fe0f", 36, 10, 7, ["🚶🏻‍♀️"]],
						"1f3fc": ["1f6b6-1f3fc-200d-2640-fe0f", 36, 11, 7, ["🚶🏼‍♀️"]],
						"1f3fd": ["1f6b6-1f3fd-200d-2640-fe0f", 36, 12, 7, ["🚶🏽‍♀️"]],
						"1f3fe": ["1f6b6-1f3fe-200d-2640-fe0f", 36, 13, 7, ["🚶🏾‍♀️"]],
						"1f3ff": ["1f6b6-1f3ff-200d-2640-fe0f", 36, 14, 7, ["🚶🏿‍♀️"]]
					},
					"1f6b6-200d-2642-fe0f": {
						"1f3fb": ["1f6b6-1f3fb-200d-2642-fe0f", 36, 16, 7, ["🚶🏻‍♂️", "🚶🏻"]],
						"1f3fc": ["1f6b6-1f3fc-200d-2642-fe0f", 36, 17, 7, ["🚶🏼‍♂️", "🚶🏼"]],
						"1f3fd": ["1f6b6-1f3fd-200d-2642-fe0f", 36, 18, 7, ["🚶🏽‍♂️", "🚶🏽"]],
						"1f3fe": ["1f6b6-1f3fe-200d-2642-fe0f", 36, 19, 7, ["🚶🏾‍♂️", "🚶🏾"]],
						"1f3ff": ["1f6b6-1f3ff-200d-2642-fe0f", 36, 20, 7, ["🚶🏿‍♂️", "🚶🏿"]]
					},
					"1f6c0": {
						"1f3fb": ["1f6c0-1f3fb", 36, 37, 31, ["🛀🏻"]],
						"1f3fc": ["1f6c0-1f3fc", 36, 38, 31, ["🛀🏼"]],
						"1f3fd": ["1f6c0-1f3fd", 36, 39, 31, ["🛀🏽"]],
						"1f3fe": ["1f6c0-1f3fe", 36, 40, 31, ["🛀🏾"]],
						"1f3ff": ["1f6c0-1f3ff", 36, 41, 31, ["🛀🏿"]]
					},
					"1f6cc": {
						"1f3fb": ["1f6cc-1f3fb", 36, 49, 15, ["🛌🏻"]],
						"1f3fc": ["1f6cc-1f3fc", 36, 50, 15, ["🛌🏼"]],
						"1f3fd": ["1f6cc-1f3fd", 36, 51, 15, ["🛌🏽"]],
						"1f3fe": ["1f6cc-1f3fe", 37, 0, 15, ["🛌🏾"]],
						"1f3ff": ["1f6cc-1f3ff", 37, 1, 15, ["🛌🏿"]]
					},
					"1f918": {
						"1f3fb": ["1f918-1f3fb", 37, 33, 15, ["🤘🏻"]],
						"1f3fc": ["1f918-1f3fc", 37, 34, 15, ["🤘🏼"]],
						"1f3fd": ["1f918-1f3fd", 37, 35, 15, ["🤘🏽"]],
						"1f3fe": ["1f918-1f3fe", 37, 36, 15, ["🤘🏾"]],
						"1f3ff": ["1f918-1f3ff", 37, 37, 15, ["🤘🏿"]]
					},
					"1f919": {
						"1f3fb": ["1f919-1f3fb", 37, 39, 15, ["🤙🏻"]],
						"1f3fc": ["1f919-1f3fc", 37, 40, 15, ["🤙🏼"]],
						"1f3fd": ["1f919-1f3fd", 37, 41, 15, ["🤙🏽"]],
						"1f3fe": ["1f919-1f3fe", 37, 42, 15, ["🤙🏾"]],
						"1f3ff": ["1f919-1f3ff", 37, 43, 15, ["🤙🏿"]]
					},
					"1f91a": {
						"1f3fb": ["1f91a-1f3fb", 37, 45, 15, ["🤚🏻"]],
						"1f3fc": ["1f91a-1f3fc", 37, 46, 15, ["🤚🏼"]],
						"1f3fd": ["1f91a-1f3fd", 37, 47, 15, ["🤚🏽"]],
						"1f3fe": ["1f91a-1f3fe", 37, 48, 15, ["🤚🏾"]],
						"1f3ff": ["1f91a-1f3ff", 37, 49, 15, ["🤚🏿"]]
					},
					"1f91b": {
						"1f3fb": ["1f91b-1f3fb", 37, 51, 15, ["🤛🏻"]],
						"1f3fc": ["1f91b-1f3fc", 38, 0, 15, ["🤛🏼"]],
						"1f3fd": ["1f91b-1f3fd", 38, 1, 15, ["🤛🏽"]],
						"1f3fe": ["1f91b-1f3fe", 38, 2, 15, ["🤛🏾"]],
						"1f3ff": ["1f91b-1f3ff", 38, 3, 15, ["🤛🏿"]]
					},
					"1f91c": {
						"1f3fb": ["1f91c-1f3fb", 38, 5, 15, ["🤜🏻"]],
						"1f3fc": ["1f91c-1f3fc", 38, 6, 15, ["🤜🏼"]],
						"1f3fd": ["1f91c-1f3fd", 38, 7, 15, ["🤜🏽"]],
						"1f3fe": ["1f91c-1f3fe", 38, 8, 15, ["🤜🏾"]],
						"1f3ff": ["1f91c-1f3ff", 38, 9, 15, ["🤜🏿"]]
					},
					"1f91e": {
						"1f3fb": ["1f91e-1f3fb", 38, 12, 15, ["🤞🏻"]],
						"1f3fc": ["1f91e-1f3fc", 38, 13, 15, ["🤞🏼"]],
						"1f3fd": ["1f91e-1f3fd", 38, 14, 15, ["🤞🏽"]],
						"1f3fe": ["1f91e-1f3fe", 38, 15, 15, ["🤞🏾"]],
						"1f3ff": ["1f91e-1f3ff", 38, 16, 15, ["🤞🏿"]]
					},
					"1f91f": {
						"1f3fb": ["1f91f-1f3fb", 38, 18, 15, ["🤟🏻"]],
						"1f3fc": ["1f91f-1f3fc", 38, 19, 15, ["🤟🏼"]],
						"1f3fd": ["1f91f-1f3fd", 38, 20, 15, ["🤟🏽"]],
						"1f3fe": ["1f91f-1f3fe", 38, 21, 15, ["🤟🏾"]],
						"1f3ff": ["1f91f-1f3ff", 38, 22, 15, ["🤟🏿"]]
					},
					"1f926-200d-2640-fe0f": {
						"1f3fb": ["1f926-1f3fb-200d-2640-fe0f", 38, 30, 7, ["🤦🏻‍♀️"]],
						"1f3fc": ["1f926-1f3fc-200d-2640-fe0f", 38, 31, 7, ["🤦🏼‍♀️"]],
						"1f3fd": ["1f926-1f3fd-200d-2640-fe0f", 38, 32, 7, ["🤦🏽‍♀️"]],
						"1f3fe": ["1f926-1f3fe-200d-2640-fe0f", 38, 33, 7, ["🤦🏾‍♀️"]],
						"1f3ff": ["1f926-1f3ff-200d-2640-fe0f", 38, 34, 7, ["🤦🏿‍♀️"]]
					},
					"1f926-200d-2642-fe0f": {
						"1f3fb": ["1f926-1f3fb-200d-2642-fe0f", 38, 36, 7, ["🤦🏻‍♂️"]],
						"1f3fc": ["1f926-1f3fc-200d-2642-fe0f", 38, 37, 7, ["🤦🏼‍♂️"]],
						"1f3fd": ["1f926-1f3fd-200d-2642-fe0f", 38, 38, 7, ["🤦🏽‍♂️"]],
						"1f3fe": ["1f926-1f3fe-200d-2642-fe0f", 38, 39, 7, ["🤦🏾‍♂️"]],
						"1f3ff": ["1f926-1f3ff-200d-2642-fe0f", 38, 40, 7, ["🤦🏿‍♂️"]]
					},
					"1f926": {
						"1f3fb": ["1f926-1f3fb", 38, 42, 7, ["🤦🏻"]],
						"1f3fc": ["1f926-1f3fc", 38, 43, 7, ["🤦🏼"]],
						"1f3fd": ["1f926-1f3fd", 38, 44, 7, ["🤦🏽"]],
						"1f3fe": ["1f926-1f3fe", 38, 45, 7, ["🤦🏾"]],
						"1f3ff": ["1f926-1f3ff", 38, 46, 7, ["🤦🏿"]]
					},
					"1f930": {
						"1f3fb": ["1f930-1f3fb", 39, 5, 15, ["🤰🏻"]],
						"1f3fc": ["1f930-1f3fc", 39, 6, 15, ["🤰🏼"]],
						"1f3fd": ["1f930-1f3fd", 39, 7, 15, ["🤰🏽"]],
						"1f3fe": ["1f930-1f3fe", 39, 8, 15, ["🤰🏾"]],
						"1f3ff": ["1f930-1f3ff", 39, 9, 15, ["🤰🏿"]]
					},
					"1f931": {
						"1f3fb": ["1f931-1f3fb", 39, 11, 15, ["🤱🏻"]],
						"1f3fc": ["1f931-1f3fc", 39, 12, 15, ["🤱🏼"]],
						"1f3fd": ["1f931-1f3fd", 39, 13, 15, ["🤱🏽"]],
						"1f3fe": ["1f931-1f3fe", 39, 14, 15, ["🤱🏾"]],
						"1f3ff": ["1f931-1f3ff", 39, 15, 15, ["🤱🏿"]]
					},
					"1f932": {
						"1f3fb": ["1f932-1f3fb", 39, 17, 15, ["🤲🏻"]],
						"1f3fc": ["1f932-1f3fc", 39, 18, 15, ["🤲🏼"]],
						"1f3fd": ["1f932-1f3fd", 39, 19, 15, ["🤲🏽"]],
						"1f3fe": ["1f932-1f3fe", 39, 20, 15, ["🤲🏾"]],
						"1f3ff": ["1f932-1f3ff", 39, 21, 15, ["🤲🏿"]]
					},
					"1f933": {
						"1f3fb": ["1f933-1f3fb", 39, 23, 15, ["🤳🏻"]],
						"1f3fc": ["1f933-1f3fc", 39, 24, 15, ["🤳🏼"]],
						"1f3fd": ["1f933-1f3fd", 39, 25, 15, ["🤳🏽"]],
						"1f3fe": ["1f933-1f3fe", 39, 26, 15, ["🤳🏾"]],
						"1f3ff": ["1f933-1f3ff", 39, 27, 15, ["🤳🏿"]]
					},
					"1f934": {
						"1f3fb": ["1f934-1f3fb", 39, 29, 15, ["🤴🏻"]],
						"1f3fc": ["1f934-1f3fc", 39, 30, 15, ["🤴🏼"]],
						"1f3fd": ["1f934-1f3fd", 39, 31, 15, ["🤴🏽"]],
						"1f3fe": ["1f934-1f3fe", 39, 32, 15, ["🤴🏾"]],
						"1f3ff": ["1f934-1f3ff", 39, 33, 15, ["🤴🏿"]]
					},
					"1f935": {
						"1f3fb": ["1f935-1f3fb", 39, 35, 15, ["🤵🏻"]],
						"1f3fc": ["1f935-1f3fc", 39, 36, 15, ["🤵🏼"]],
						"1f3fd": ["1f935-1f3fd", 39, 37, 15, ["🤵🏽"]],
						"1f3fe": ["1f935-1f3fe", 39, 38, 15, ["🤵🏾"]],
						"1f3ff": ["1f935-1f3ff", 39, 39, 15, ["🤵🏿"]]
					},
					"1f936": {
						"1f3fb": ["1f936-1f3fb", 39, 41, 15, ["🤶🏻"]],
						"1f3fc": ["1f936-1f3fc", 39, 42, 15, ["🤶🏼"]],
						"1f3fd": ["1f936-1f3fd", 39, 43, 15, ["🤶🏽"]],
						"1f3fe": ["1f936-1f3fe", 39, 44, 15, ["🤶🏾"]],
						"1f3ff": ["1f936-1f3ff", 39, 45, 15, ["🤶🏿"]]
					},
					"1f937-200d-2640-fe0f": {
						"1f3fb": ["1f937-1f3fb-200d-2640-fe0f", 39, 47, 7, ["🤷🏻‍♀️"]],
						"1f3fc": ["1f937-1f3fc-200d-2640-fe0f", 39, 48, 7, ["🤷🏼‍♀️"]],
						"1f3fd": ["1f937-1f3fd-200d-2640-fe0f", 39, 49, 7, ["🤷🏽‍♀️"]],
						"1f3fe": ["1f937-1f3fe-200d-2640-fe0f", 39, 50, 7, ["🤷🏾‍♀️"]],
						"1f3ff": ["1f937-1f3ff-200d-2640-fe0f", 39, 51, 7, ["🤷🏿‍♀️"]]
					},
					"1f937-200d-2642-fe0f": {
						"1f3fb": ["1f937-1f3fb-200d-2642-fe0f", 40, 1, 7, ["🤷🏻‍♂️"]],
						"1f3fc": ["1f937-1f3fc-200d-2642-fe0f", 40, 2, 7, ["🤷🏼‍♂️"]],
						"1f3fd": ["1f937-1f3fd-200d-2642-fe0f", 40, 3, 7, ["🤷🏽‍♂️"]],
						"1f3fe": ["1f937-1f3fe-200d-2642-fe0f", 40, 4, 7, ["🤷🏾‍♂️"]],
						"1f3ff": ["1f937-1f3ff-200d-2642-fe0f", 40, 5, 7, ["🤷🏿‍♂️"]]
					},
					"1f937": {
						"1f3fb": ["1f937-1f3fb", 40, 7, 7, ["🤷🏻"]],
						"1f3fc": ["1f937-1f3fc", 40, 8, 7, ["🤷🏼"]],
						"1f3fd": ["1f937-1f3fd", 40, 9, 7, ["🤷🏽"]],
						"1f3fe": ["1f937-1f3fe", 40, 10, 7, ["🤷🏾"]],
						"1f3ff": ["1f937-1f3ff", 40, 11, 7, ["🤷🏿"]]
					},
					"1f938-200d-2640-fe0f": {
						"1f3fb": ["1f938-1f3fb-200d-2640-fe0f", 40, 13, 7, ["🤸🏻‍♀️"]],
						"1f3fc": ["1f938-1f3fc-200d-2640-fe0f", 40, 14, 7, ["🤸🏼‍♀️"]],
						"1f3fd": ["1f938-1f3fd-200d-2640-fe0f", 40, 15, 7, ["🤸🏽‍♀️"]],
						"1f3fe": ["1f938-1f3fe-200d-2640-fe0f", 40, 16, 7, ["🤸🏾‍♀️"]],
						"1f3ff": ["1f938-1f3ff-200d-2640-fe0f", 40, 17, 7, ["🤸🏿‍♀️"]]
					},
					"1f938-200d-2642-fe0f": {
						"1f3fb": ["1f938-1f3fb-200d-2642-fe0f", 40, 19, 7, ["🤸🏻‍♂️"]],
						"1f3fc": ["1f938-1f3fc-200d-2642-fe0f", 40, 20, 7, ["🤸🏼‍♂️"]],
						"1f3fd": ["1f938-1f3fd-200d-2642-fe0f", 40, 21, 7, ["🤸🏽‍♂️"]],
						"1f3fe": ["1f938-1f3fe-200d-2642-fe0f", 40, 22, 7, ["🤸🏾‍♂️"]],
						"1f3ff": ["1f938-1f3ff-200d-2642-fe0f", 40, 23, 7, ["🤸🏿‍♂️"]]
					},
					"1f938": {
						"1f3fb": ["1f938-1f3fb", 40, 25, 7, ["🤸🏻"]],
						"1f3fc": ["1f938-1f3fc", 40, 26, 7, ["🤸🏼"]],
						"1f3fd": ["1f938-1f3fd", 40, 27, 7, ["🤸🏽"]],
						"1f3fe": ["1f938-1f3fe", 40, 28, 7, ["🤸🏾"]],
						"1f3ff": ["1f938-1f3ff", 40, 29, 7, ["🤸🏿"]]
					},
					"1f939-200d-2640-fe0f": {
						"1f3fb": ["1f939-1f3fb-200d-2640-fe0f", 40, 31, 7, ["🤹🏻‍♀️"]],
						"1f3fc": ["1f939-1f3fc-200d-2640-fe0f", 40, 32, 7, ["🤹🏼‍♀️"]],
						"1f3fd": ["1f939-1f3fd-200d-2640-fe0f", 40, 33, 7, ["🤹🏽‍♀️"]],
						"1f3fe": ["1f939-1f3fe-200d-2640-fe0f", 40, 34, 7, ["🤹🏾‍♀️"]],
						"1f3ff": ["1f939-1f3ff-200d-2640-fe0f", 40, 35, 7, ["🤹🏿‍♀️"]]
					},
					"1f939-200d-2642-fe0f": {
						"1f3fb": ["1f939-1f3fb-200d-2642-fe0f", 40, 37, 7, ["🤹🏻‍♂️"]],
						"1f3fc": ["1f939-1f3fc-200d-2642-fe0f", 40, 38, 7, ["🤹🏼‍♂️"]],
						"1f3fd": ["1f939-1f3fd-200d-2642-fe0f", 40, 39, 7, ["🤹🏽‍♂️"]],
						"1f3fe": ["1f939-1f3fe-200d-2642-fe0f", 40, 40, 7, ["🤹🏾‍♂️"]],
						"1f3ff": ["1f939-1f3ff-200d-2642-fe0f", 40, 41, 7, ["🤹🏿‍♂️"]]
					},
					"1f939": {
						"1f3fb": ["1f939-1f3fb", 40, 43, 15, ["🤹🏻"]],
						"1f3fc": ["1f939-1f3fc", 40, 44, 15, ["🤹🏼"]],
						"1f3fd": ["1f939-1f3fd", 40, 45, 15, ["🤹🏽"]],
						"1f3fe": ["1f939-1f3fe", 40, 46, 15, ["🤹🏾"]],
						"1f3ff": ["1f939-1f3ff", 40, 47, 15, ["🤹🏿"]]
					},
					"1f93d-200d-2640-fe0f": {
						"1f3fb": ["1f93d-1f3fb-200d-2640-fe0f", 41, 1, 7, ["🤽🏻‍♀️"]],
						"1f3fc": ["1f93d-1f3fc-200d-2640-fe0f", 41, 2, 7, ["🤽🏼‍♀️"]],
						"1f3fd": ["1f93d-1f3fd-200d-2640-fe0f", 41, 3, 7, ["🤽🏽‍♀️"]],
						"1f3fe": ["1f93d-1f3fe-200d-2640-fe0f", 41, 4, 7, ["🤽🏾‍♀️"]],
						"1f3ff": ["1f93d-1f3ff-200d-2640-fe0f", 41, 5, 7, ["🤽🏿‍♀️"]]
					},
					"1f93d-200d-2642-fe0f": {
						"1f3fb": ["1f93d-1f3fb-200d-2642-fe0f", 41, 7, 7, ["🤽🏻‍♂️"]],
						"1f3fc": ["1f93d-1f3fc-200d-2642-fe0f", 41, 8, 7, ["🤽🏼‍♂️"]],
						"1f3fd": ["1f93d-1f3fd-200d-2642-fe0f", 41, 9, 7, ["🤽🏽‍♂️"]],
						"1f3fe": ["1f93d-1f3fe-200d-2642-fe0f", 41, 10, 7, ["🤽🏾‍♂️"]],
						"1f3ff": ["1f93d-1f3ff-200d-2642-fe0f", 41, 11, 7, ["🤽🏿‍♂️"]]
					},
					"1f93d": {
						"1f3fb": ["1f93d-1f3fb", 41, 13, 7, ["🤽🏻"]],
						"1f3fc": ["1f93d-1f3fc", 41, 14, 7, ["🤽🏼"]],
						"1f3fd": ["1f93d-1f3fd", 41, 15, 7, ["🤽🏽"]],
						"1f3fe": ["1f93d-1f3fe", 41, 16, 7, ["🤽🏾"]],
						"1f3ff": ["1f93d-1f3ff", 41, 17, 7, ["🤽🏿"]]
					},
					"1f93e-200d-2640-fe0f": {
						"1f3fb": ["1f93e-1f3fb-200d-2640-fe0f", 41, 19, 7, ["🤾🏻‍♀️"]],
						"1f3fc": ["1f93e-1f3fc-200d-2640-fe0f", 41, 20, 7, ["🤾🏼‍♀️"]],
						"1f3fd": ["1f93e-1f3fd-200d-2640-fe0f", 41, 21, 7, ["🤾🏽‍♀️"]],
						"1f3fe": ["1f93e-1f3fe-200d-2640-fe0f", 41, 22, 7, ["🤾🏾‍♀️"]],
						"1f3ff": ["1f93e-1f3ff-200d-2640-fe0f", 41, 23, 7, ["🤾🏿‍♀️"]]
					},
					"1f93e-200d-2642-fe0f": {
						"1f3fb": ["1f93e-1f3fb-200d-2642-fe0f", 41, 25, 7, ["🤾🏻‍♂️"]],
						"1f3fc": ["1f93e-1f3fc-200d-2642-fe0f", 41, 26, 7, ["🤾🏼‍♂️"]],
						"1f3fd": ["1f93e-1f3fd-200d-2642-fe0f", 41, 27, 7, ["🤾🏽‍♂️"]],
						"1f3fe": ["1f93e-1f3fe-200d-2642-fe0f", 41, 28, 7, ["🤾🏾‍♂️"]],
						"1f3ff": ["1f93e-1f3ff-200d-2642-fe0f", 41, 29, 7, ["🤾🏿‍♂️"]]
					},
					"1f93e": {
						"1f3fb": ["1f93e-1f3fb", 41, 31, 7, ["🤾🏻"]],
						"1f3fc": ["1f93e-1f3fc", 41, 32, 7, ["🤾🏼"]],
						"1f3fd": ["1f93e-1f3fd", 41, 33, 7, ["🤾🏽"]],
						"1f3fe": ["1f93e-1f3fe", 41, 34, 7, ["🤾🏾"]],
						"1f3ff": ["1f93e-1f3ff", 41, 35, 7, ["🤾🏿"]]
					},
					"1f9d1": {
						"1f3fb": ["1f9d1-1f3fb", 42, 51, 15, ["🧑🏻"]],
						"1f3fc": ["1f9d1-1f3fc", 43, 0, 15, ["🧑🏼"]],
						"1f3fd": ["1f9d1-1f3fd", 43, 1, 15, ["🧑🏽"]],
						"1f3fe": ["1f9d1-1f3fe", 43, 2, 15, ["🧑🏾"]],
						"1f3ff": ["1f9d1-1f3ff", 43, 3, 15, ["🧑🏿"]]
					},
					"1f9d2": {
						"1f3fb": ["1f9d2-1f3fb", 43, 5, 15, ["🧒🏻"]],
						"1f3fc": ["1f9d2-1f3fc", 43, 6, 15, ["🧒🏼"]],
						"1f3fd": ["1f9d2-1f3fd", 43, 7, 15, ["🧒🏽"]],
						"1f3fe": ["1f9d2-1f3fe", 43, 8, 15, ["🧒🏾"]],
						"1f3ff": ["1f9d2-1f3ff", 43, 9, 15, ["🧒🏿"]]
					},
					"1f9d3": {
						"1f3fb": ["1f9d3-1f3fb", 43, 11, 15, ["🧓🏻"]],
						"1f3fc": ["1f9d3-1f3fc", 43, 12, 15, ["🧓🏼"]],
						"1f3fd": ["1f9d3-1f3fd", 43, 13, 15, ["🧓🏽"]],
						"1f3fe": ["1f9d3-1f3fe", 43, 14, 15, ["🧓🏾"]],
						"1f3ff": ["1f9d3-1f3ff", 43, 15, 15, ["🧓🏿"]]
					},
					"1f9d4": {
						"1f3fb": ["1f9d4-1f3fb", 43, 17, 15, ["🧔🏻"]],
						"1f3fc": ["1f9d4-1f3fc", 43, 18, 15, ["🧔🏼"]],
						"1f3fd": ["1f9d4-1f3fd", 43, 19, 15, ["🧔🏽"]],
						"1f3fe": ["1f9d4-1f3fe", 43, 20, 15, ["🧔🏾"]],
						"1f3ff": ["1f9d4-1f3ff", 43, 21, 15, ["🧔🏿"]]
					},
					"1f9d5": {
						"1f3fb": ["1f9d5-1f3fb", 43, 23, 15, ["🧕🏻"]],
						"1f3fc": ["1f9d5-1f3fc", 43, 24, 15, ["🧕🏼"]],
						"1f3fd": ["1f9d5-1f3fd", 43, 25, 15, ["🧕🏽"]],
						"1f3fe": ["1f9d5-1f3fe", 43, 26, 15, ["🧕🏾"]],
						"1f3ff": ["1f9d5-1f3ff", 43, 27, 15, ["🧕🏿"]]
					},
					"1f9d6-200d-2640-fe0f": {
						"1f3fb": ["1f9d6-1f3fb-200d-2640-fe0f", 43, 29, 7, ["🧖🏻‍♀️"]],
						"1f3fc": ["1f9d6-1f3fc-200d-2640-fe0f", 43, 30, 7, ["🧖🏼‍♀️"]],
						"1f3fd": ["1f9d6-1f3fd-200d-2640-fe0f", 43, 31, 7, ["🧖🏽‍♀️"]],
						"1f3fe": ["1f9d6-1f3fe-200d-2640-fe0f", 43, 32, 7, ["🧖🏾‍♀️"]],
						"1f3ff": ["1f9d6-1f3ff-200d-2640-fe0f", 43, 33, 7, ["🧖🏿‍♀️"]]
					},
					"1f9d6-200d-2642-fe0f": {
						"1f3fb": ["1f9d6-1f3fb-200d-2642-fe0f", 43, 35, 7, ["🧖🏻‍♂️", "🧖🏻"]],
						"1f3fc": ["1f9d6-1f3fc-200d-2642-fe0f", 43, 36, 7, ["🧖🏼‍♂️", "🧖🏼"]],
						"1f3fd": ["1f9d6-1f3fd-200d-2642-fe0f", 43, 37, 7, ["🧖🏽‍♂️", "🧖🏽"]],
						"1f3fe": ["1f9d6-1f3fe-200d-2642-fe0f", 43, 38, 7, ["🧖🏾‍♂️", "🧖🏾"]],
						"1f3ff": ["1f9d6-1f3ff-200d-2642-fe0f", 43, 39, 7, ["🧖🏿‍♂️", "🧖🏿"]]
					},
					"1f9d7-200d-2640-fe0f": {
						"1f3fb": ["1f9d7-1f3fb-200d-2640-fe0f", 43, 47, 7, ["🧗🏻‍♀️", "🧗🏻"]],
						"1f3fc": ["1f9d7-1f3fc-200d-2640-fe0f", 43, 48, 7, ["🧗🏼‍♀️", "🧗🏼"]],
						"1f3fd": ["1f9d7-1f3fd-200d-2640-fe0f", 43, 49, 7, ["🧗🏽‍♀️", "🧗🏽"]],
						"1f3fe": ["1f9d7-1f3fe-200d-2640-fe0f", 43, 50, 7, ["🧗🏾‍♀️", "🧗🏾"]],
						"1f3ff": ["1f9d7-1f3ff-200d-2640-fe0f", 43, 51, 7, ["🧗🏿‍♀️", "🧗🏿"]]
					},
					"1f9d7-200d-2642-fe0f": {
						"1f3fb": ["1f9d7-1f3fb-200d-2642-fe0f", 44, 1, 7, ["🧗🏻‍♂️"]],
						"1f3fc": ["1f9d7-1f3fc-200d-2642-fe0f", 44, 2, 7, ["🧗🏼‍♂️"]],
						"1f3fd": ["1f9d7-1f3fd-200d-2642-fe0f", 44, 3, 7, ["🧗🏽‍♂️"]],
						"1f3fe": ["1f9d7-1f3fe-200d-2642-fe0f", 44, 4, 7, ["🧗🏾‍♂️"]],
						"1f3ff": ["1f9d7-1f3ff-200d-2642-fe0f", 44, 5, 7, ["🧗🏿‍♂️"]]
					},
					"1f9d8-200d-2640-fe0f": {
						"1f3fb": ["1f9d8-1f3fb-200d-2640-fe0f", 44, 13, 7, ["🧘🏻‍♀️", "🧘🏻"]],
						"1f3fc": ["1f9d8-1f3fc-200d-2640-fe0f", 44, 14, 7, ["🧘🏼‍♀️", "🧘🏼"]],
						"1f3fd": ["1f9d8-1f3fd-200d-2640-fe0f", 44, 15, 7, ["🧘🏽‍♀️", "🧘🏽"]],
						"1f3fe": ["1f9d8-1f3fe-200d-2640-fe0f", 44, 16, 7, ["🧘🏾‍♀️", "🧘🏾"]],
						"1f3ff": ["1f9d8-1f3ff-200d-2640-fe0f", 44, 17, 7, ["🧘🏿‍♀️", "🧘🏿"]]
					},
					"1f9d8-200d-2642-fe0f": {
						"1f3fb": ["1f9d8-1f3fb-200d-2642-fe0f", 44, 19, 7, ["🧘🏻‍♂️"]],
						"1f3fc": ["1f9d8-1f3fc-200d-2642-fe0f", 44, 20, 7, ["🧘🏼‍♂️"]],
						"1f3fd": ["1f9d8-1f3fd-200d-2642-fe0f", 44, 21, 7, ["🧘🏽‍♂️"]],
						"1f3fe": ["1f9d8-1f3fe-200d-2642-fe0f", 44, 22, 7, ["🧘🏾‍♂️"]],
						"1f3ff": ["1f9d8-1f3ff-200d-2642-fe0f", 44, 23, 7, ["🧘🏿‍♂️"]]
					},
					"1f9d9-200d-2640-fe0f": {
						"1f3fb": ["1f9d9-1f3fb-200d-2640-fe0f", 44, 31, 7, ["🧙🏻‍♀️", "🧙🏻"]],
						"1f3fc": ["1f9d9-1f3fc-200d-2640-fe0f", 44, 32, 7, ["🧙🏼‍♀️", "🧙🏼"]],
						"1f3fd": ["1f9d9-1f3fd-200d-2640-fe0f", 44, 33, 7, ["🧙🏽‍♀️", "🧙🏽"]],
						"1f3fe": ["1f9d9-1f3fe-200d-2640-fe0f", 44, 34, 7, ["🧙🏾‍♀️", "🧙🏾"]],
						"1f3ff": ["1f9d9-1f3ff-200d-2640-fe0f", 44, 35, 7, ["🧙🏿‍♀️", "🧙🏿"]]
					},
					"1f9d9-200d-2642-fe0f": {
						"1f3fb": ["1f9d9-1f3fb-200d-2642-fe0f", 44, 37, 7, ["🧙🏻‍♂️"]],
						"1f3fc": ["1f9d9-1f3fc-200d-2642-fe0f", 44, 38, 7, ["🧙🏼‍♂️"]],
						"1f3fd": ["1f9d9-1f3fd-200d-2642-fe0f", 44, 39, 7, ["🧙🏽‍♂️"]],
						"1f3fe": ["1f9d9-1f3fe-200d-2642-fe0f", 44, 40, 7, ["🧙🏾‍♂️"]],
						"1f3ff": ["1f9d9-1f3ff-200d-2642-fe0f", 44, 41, 7, ["🧙🏿‍♂️"]]
					},
					"1f9da-200d-2640-fe0f": {
						"1f3fb": ["1f9da-1f3fb-200d-2640-fe0f", 44, 49, 7, ["🧚🏻‍♀️", "🧚🏻"]],
						"1f3fc": ["1f9da-1f3fc-200d-2640-fe0f", 44, 50, 7, ["🧚🏼‍♀️", "🧚🏼"]],
						"1f3fd": ["1f9da-1f3fd-200d-2640-fe0f", 44, 51, 7, ["🧚🏽‍♀️", "🧚🏽"]],
						"1f3fe": ["1f9da-1f3fe-200d-2640-fe0f", 45, 0, 7, ["🧚🏾‍♀️", "🧚🏾"]],
						"1f3ff": ["1f9da-1f3ff-200d-2640-fe0f", 45, 1, 7, ["🧚🏿‍♀️", "🧚🏿"]]
					},
					"1f9da-200d-2642-fe0f": {
						"1f3fb": ["1f9da-1f3fb-200d-2642-fe0f", 45, 3, 7, ["🧚🏻‍♂️"]],
						"1f3fc": ["1f9da-1f3fc-200d-2642-fe0f", 45, 4, 7, ["🧚🏼‍♂️"]],
						"1f3fd": ["1f9da-1f3fd-200d-2642-fe0f", 45, 5, 7, ["🧚🏽‍♂️"]],
						"1f3fe": ["1f9da-1f3fe-200d-2642-fe0f", 45, 6, 7, ["🧚🏾‍♂️"]],
						"1f3ff": ["1f9da-1f3ff-200d-2642-fe0f", 45, 7, 7, ["🧚🏿‍♂️"]]
					},
					"1f9db-200d-2640-fe0f": {
						"1f3fb": ["1f9db-1f3fb-200d-2640-fe0f", 45, 15, 7, ["🧛🏻‍♀️", "🧛🏻"]],
						"1f3fc": ["1f9db-1f3fc-200d-2640-fe0f", 45, 16, 7, ["🧛🏼‍♀️", "🧛🏼"]],
						"1f3fd": ["1f9db-1f3fd-200d-2640-fe0f", 45, 17, 7, ["🧛🏽‍♀️", "🧛🏽"]],
						"1f3fe": ["1f9db-1f3fe-200d-2640-fe0f", 45, 18, 7, ["🧛🏾‍♀️", "🧛🏾"]],
						"1f3ff": ["1f9db-1f3ff-200d-2640-fe0f", 45, 19, 7, ["🧛🏿‍♀️", "🧛🏿"]]
					},
					"1f9db-200d-2642-fe0f": {
						"1f3fb": ["1f9db-1f3fb-200d-2642-fe0f", 45, 21, 7, ["🧛🏻‍♂️"]],
						"1f3fc": ["1f9db-1f3fc-200d-2642-fe0f", 45, 22, 7, ["🧛🏼‍♂️"]],
						"1f3fd": ["1f9db-1f3fd-200d-2642-fe0f", 45, 23, 7, ["🧛🏽‍♂️"]],
						"1f3fe": ["1f9db-1f3fe-200d-2642-fe0f", 45, 24, 7, ["🧛🏾‍♂️"]],
						"1f3ff": ["1f9db-1f3ff-200d-2642-fe0f", 45, 25, 7, ["🧛🏿‍♂️"]]
					},
					"1f9dc-200d-2640-fe0f": {
						"1f3fb": ["1f9dc-1f3fb-200d-2640-fe0f", 45, 33, 7, ["🧜🏻‍♀️"]],
						"1f3fc": ["1f9dc-1f3fc-200d-2640-fe0f", 45, 34, 7, ["🧜🏼‍♀️"]],
						"1f3fd": ["1f9dc-1f3fd-200d-2640-fe0f", 45, 35, 7, ["🧜🏽‍♀️"]],
						"1f3fe": ["1f9dc-1f3fe-200d-2640-fe0f", 45, 36, 7, ["🧜🏾‍♀️"]],
						"1f3ff": ["1f9dc-1f3ff-200d-2640-fe0f", 45, 37, 7, ["🧜🏿‍♀️"]]
					},
					"1f9dc-200d-2642-fe0f": {
						"1f3fb": ["1f9dc-1f3fb-200d-2642-fe0f", 45, 39, 7, ["🧜🏻‍♂️", "🧜🏻"]],
						"1f3fc": ["1f9dc-1f3fc-200d-2642-fe0f", 45, 40, 7, ["🧜🏼‍♂️", "🧜🏼"]],
						"1f3fd": ["1f9dc-1f3fd-200d-2642-fe0f", 45, 41, 7, ["🧜🏽‍♂️", "🧜🏽"]],
						"1f3fe": ["1f9dc-1f3fe-200d-2642-fe0f", 45, 42, 7, ["🧜🏾‍♂️", "🧜🏾"]],
						"1f3ff": ["1f9dc-1f3ff-200d-2642-fe0f", 45, 43, 7, ["🧜🏿‍♂️", "🧜🏿"]]
					},
					"1f9dd-200d-2640-fe0f": {
						"1f3fb": ["1f9dd-1f3fb-200d-2640-fe0f", 45, 51, 7, ["🧝🏻‍♀️"]],
						"1f3fc": ["1f9dd-1f3fc-200d-2640-fe0f", 46, 0, 7, ["🧝🏼‍♀️"]],
						"1f3fd": ["1f9dd-1f3fd-200d-2640-fe0f", 46, 1, 7, ["🧝🏽‍♀️"]],
						"1f3fe": ["1f9dd-1f3fe-200d-2640-fe0f", 46, 2, 7, ["🧝🏾‍♀️"]],
						"1f3ff": ["1f9dd-1f3ff-200d-2640-fe0f", 46, 3, 7, ["🧝🏿‍♀️"]]
					},
					"1f9dd-200d-2642-fe0f": {
						"1f3fb": ["1f9dd-1f3fb-200d-2642-fe0f", 46, 5, 7, ["🧝🏻‍♂️", "🧝🏻"]],
						"1f3fc": ["1f9dd-1f3fc-200d-2642-fe0f", 46, 6, 7, ["🧝🏼‍♂️", "🧝🏼"]],
						"1f3fd": ["1f9dd-1f3fd-200d-2642-fe0f", 46, 7, 7, ["🧝🏽‍♂️", "🧝🏽"]],
						"1f3fe": ["1f9dd-1f3fe-200d-2642-fe0f", 46, 8, 7, ["🧝🏾‍♂️", "🧝🏾"]],
						"1f3ff": ["1f9dd-1f3ff-200d-2642-fe0f", 46, 9, 7, ["🧝🏿‍♂️", "🧝🏿"]]
					},
					"261d-fe0f": {
						"1f3fb": ["261d-1f3fb", 47, 27, 31, ["☝🏻"]],
						"1f3fc": ["261d-1f3fc", 47, 28, 31, ["☝🏼"]],
						"1f3fd": ["261d-1f3fd", 47, 29, 31, ["☝🏽"]],
						"1f3fe": ["261d-1f3fe", 47, 30, 31, ["☝🏾"]],
						"1f3ff": ["261d-1f3ff", 47, 31, 31, ["☝🏿"]]
					},
					"26f9-fe0f-200d-2640-fe0f": {
						"1f3fb": ["26f9-1f3fb-200d-2640-fe0f", 48, 47, 7, ["⛹🏻‍♀️"]],
						"1f3fc": ["26f9-1f3fc-200d-2640-fe0f", 48, 48, 7, ["⛹🏼‍♀️"]],
						"1f3fd": ["26f9-1f3fd-200d-2640-fe0f", 48, 49, 7, ["⛹🏽‍♀️"]],
						"1f3fe": ["26f9-1f3fe-200d-2640-fe0f", 48, 50, 7, ["⛹🏾‍♀️"]],
						"1f3ff": ["26f9-1f3ff-200d-2640-fe0f", 48, 51, 7, ["⛹🏿‍♀️"]]
					},
					"26f9-fe0f-200d-2642-fe0f": {
						"1f3fb": ["26f9-1f3fb-200d-2642-fe0f", 49, 1, 7, ["⛹🏻‍♂️", "⛹🏻"]],
						"1f3fc": ["26f9-1f3fc-200d-2642-fe0f", 49, 2, 7, ["⛹🏼‍♂️", "⛹🏼"]],
						"1f3fd": ["26f9-1f3fd-200d-2642-fe0f", 49, 3, 7, ["⛹🏽‍♂️", "⛹🏽"]],
						"1f3fe": ["26f9-1f3fe-200d-2642-fe0f", 49, 4, 7, ["⛹🏾‍♂️", "⛹🏾"]],
						"1f3ff": ["26f9-1f3ff-200d-2642-fe0f", 49, 5, 7, ["⛹🏿‍♂️", "⛹🏿"]]
					},
					"270a": {
						"1f3fb": ["270a-1f3fb", 49, 19, 31, ["✊🏻"]],
						"1f3fc": ["270a-1f3fc", 49, 20, 31, ["✊🏼"]],
						"1f3fd": ["270a-1f3fd", 49, 21, 31, ["✊🏽"]],
						"1f3fe": ["270a-1f3fe", 49, 22, 31, ["✊🏾"]],
						"1f3ff": ["270a-1f3ff", 49, 23, 31, ["✊🏿"]]
					},
					"270b": {
						"1f3fb": ["270b-1f3fb", 49, 25, 31, ["✋🏻"]],
						"1f3fc": ["270b-1f3fc", 49, 26, 31, ["✋🏼"]],
						"1f3fd": ["270b-1f3fd", 49, 27, 31, ["✋🏽"]],
						"1f3fe": ["270b-1f3fe", 49, 28, 31, ["✋🏾"]],
						"1f3ff": ["270b-1f3ff", 49, 29, 31, ["✋🏿"]]
					},
					"270c-fe0f": {
						"1f3fb": ["270c-1f3fb", 49, 31, 31, ["✌🏻"]],
						"1f3fc": ["270c-1f3fc", 49, 32, 31, ["✌🏼"]],
						"1f3fd": ["270c-1f3fd", 49, 33, 31, ["✌🏽"]],
						"1f3fe": ["270c-1f3fe", 49, 34, 31, ["✌🏾"]],
						"1f3ff": ["270c-1f3ff", 49, 35, 31, ["✌🏿"]]
					},
					"270d-fe0f": {
						"1f3fb": ["270d-1f3fb", 49, 37, 15, ["✍🏻"]],
						"1f3fc": ["270d-1f3fc", 49, 38, 15, ["✍🏼"]],
						"1f3fd": ["270d-1f3fd", 49, 39, 15, ["✍🏽"]],
						"1f3fe": ["270d-1f3fe", 49, 40, 15, ["✍🏾"]],
						"1f3ff": ["270d-1f3ff", 49, 41, 15, ["✍🏿"]]
					}
				}, r.prototype.obsoletes_data = {
					"1f3c3-200d-2642-fe0f": ["1f3c3", 9, 46, 23],
					"1f3c3-1f3fb-200d-2642-fe0f": ["1f3c3-1f3fb", 9, 47, 23],
					"1f3c3-1f3fc-200d-2642-fe0f": ["1f3c3-1f3fc", 9, 48, 23],
					"1f3c3-1f3fd-200d-2642-fe0f": ["1f3c3-1f3fd", 9, 49, 23],
					"1f3c3-1f3fe-200d-2642-fe0f": ["1f3c3-1f3fe", 9, 50, 23],
					"1f3c3-1f3ff-200d-2642-fe0f": ["1f3c3-1f3ff", 9, 51, 23],
					"1f3c4-200d-2642-fe0f": ["1f3c4", 10, 12, 23],
					"1f3c4-1f3fb-200d-2642-fe0f": ["1f3c4-1f3fb", 10, 13, 23],
					"1f3c4-1f3fc-200d-2642-fe0f": ["1f3c4-1f3fc", 10, 14, 23],
					"1f3c4-1f3fd-200d-2642-fe0f": ["1f3c4-1f3fd", 10, 15, 23],
					"1f3c4-1f3fe-200d-2642-fe0f": ["1f3c4-1f3fe", 10, 16, 23],
					"1f3c4-1f3ff-200d-2642-fe0f": ["1f3c4-1f3ff", 10, 17, 23],
					"1f3ca-200d-2642-fe0f": ["1f3ca", 10, 40, 23],
					"1f3ca-1f3fb-200d-2642-fe0f": ["1f3ca-1f3fb", 10, 41, 23],
					"1f3ca-1f3fc-200d-2642-fe0f": ["1f3ca-1f3fc", 10, 42, 23],
					"1f3ca-1f3fd-200d-2642-fe0f": ["1f3ca-1f3fd", 10, 43, 23],
					"1f3ca-1f3fe-200d-2642-fe0f": ["1f3ca-1f3fe", 10, 44, 23],
					"1f3ca-1f3ff-200d-2642-fe0f": ["1f3ca-1f3ff", 10, 45, 23],
					"1f3cb-fe0f-200d-2642-fe0f": ["1f3cb-fe0f", 11, 6, 7],
					"1f3cb-1f3fb-200d-2642-fe0f": ["1f3cb-1f3fb", 11, 7, 7],
					"1f3cb-1f3fc-200d-2642-fe0f": ["1f3cb-1f3fc", 11, 8, 7],
					"1f3cb-1f3fd-200d-2642-fe0f": ["1f3cb-1f3fd", 11, 9, 7],
					"1f3cb-1f3fe-200d-2642-fe0f": ["1f3cb-1f3fe", 11, 10, 7],
					"1f3cb-1f3ff-200d-2642-fe0f": ["1f3cb-1f3ff", 11, 11, 7],
					"1f3cc-fe0f-200d-2642-fe0f": ["1f3cc-fe0f", 11, 24, 7],
					"1f3cc-1f3fb-200d-2642-fe0f": ["1f3cc-1f3fb", 11, 25, 7],
					"1f3cc-1f3fc-200d-2642-fe0f": ["1f3cc-1f3fc", 11, 26, 7],
					"1f3cc-1f3fd-200d-2642-fe0f": ["1f3cc-1f3fd", 11, 27, 7],
					"1f3cc-1f3fe-200d-2642-fe0f": ["1f3cc-1f3fe", 11, 28, 7],
					"1f3cc-1f3ff-200d-2642-fe0f": ["1f3cc-1f3ff", 11, 29, 7],
					"1f468-200d-1f469-200d-1f466": ["1f46a", 20, 29, 23],
					"1f46e-200d-2642-fe0f": ["1f46e", 20, 45, 23],
					"1f46e-1f3fb-200d-2642-fe0f": ["1f46e-1f3fb", 20, 46, 23],
					"1f46e-1f3fc-200d-2642-fe0f": ["1f46e-1f3fc", 20, 47, 23],
					"1f46e-1f3fd-200d-2642-fe0f": ["1f46e-1f3fd", 20, 48, 23],
					"1f46e-1f3fe-200d-2642-fe0f": ["1f46e-1f3fe", 20, 49, 23],
					"1f46e-1f3ff-200d-2642-fe0f": ["1f46e-1f3ff", 20, 50, 23],
					"1f46f-200d-2640-fe0f": ["1f46f", 21, 1, 23],
					"1f471-200d-2642-fe0f": ["1f471", 21, 20, 23],
					"1f471-1f3fb-200d-2642-fe0f": ["1f471-1f3fb", 21, 21, 23],
					"1f471-1f3fc-200d-2642-fe0f": ["1f471-1f3fc", 21, 22, 23],
					"1f471-1f3fd-200d-2642-fe0f": ["1f471-1f3fd", 21, 23, 23],
					"1f471-1f3fe-200d-2642-fe0f": ["1f471-1f3fe", 21, 24, 23],
					"1f471-1f3ff-200d-2642-fe0f": ["1f471-1f3ff", 21, 25, 23],
					"1f473-200d-2642-fe0f": ["1f473", 21, 44, 23],
					"1f473-1f3fb-200d-2642-fe0f": ["1f473-1f3fb", 21, 45, 23],
					"1f473-1f3fc-200d-2642-fe0f": ["1f473-1f3fc", 21, 46, 23],
					"1f473-1f3fd-200d-2642-fe0f": ["1f473-1f3fd", 21, 47, 23],
					"1f473-1f3fe-200d-2642-fe0f": ["1f473-1f3fe", 21, 48, 23],
					"1f473-1f3ff-200d-2642-fe0f": ["1f473-1f3ff", 21, 49, 23],
					"1f477-200d-2642-fe0f": ["1f477", 22, 28, 23],
					"1f477-1f3fb-200d-2642-fe0f": ["1f477-1f3fb", 22, 29, 23],
					"1f477-1f3fc-200d-2642-fe0f": ["1f477-1f3fc", 22, 30, 23],
					"1f477-1f3fd-200d-2642-fe0f": ["1f477-1f3fd", 22, 31, 23],
					"1f477-1f3fe-200d-2642-fe0f": ["1f477-1f3fe", 22, 32, 23],
					"1f477-1f3ff-200d-2642-fe0f": ["1f477-1f3ff", 22, 33, 23],
					"1f481-200d-2640-fe0f": ["1f481", 23, 13, 23],
					"1f481-1f3fb-200d-2640-fe0f": ["1f481-1f3fb", 23, 14, 23],
					"1f481-1f3fc-200d-2640-fe0f": ["1f481-1f3fc", 23, 15, 23],
					"1f481-1f3fd-200d-2640-fe0f": ["1f481-1f3fd", 23, 16, 23],
					"1f481-1f3fe-200d-2640-fe0f": ["1f481-1f3fe", 23, 17, 23],
					"1f481-1f3ff-200d-2640-fe0f": ["1f481-1f3ff", 23, 18, 23],
					"1f482-200d-2642-fe0f": ["1f482", 23, 31, 23],
					"1f482-1f3fb-200d-2642-fe0f": ["1f482-1f3fb", 23, 32, 23],
					"1f482-1f3fc-200d-2642-fe0f": ["1f482-1f3fc", 23, 33, 23],
					"1f482-1f3fd-200d-2642-fe0f": ["1f482-1f3fd", 23, 34, 23],
					"1f482-1f3fe-200d-2642-fe0f": ["1f482-1f3fe", 23, 35, 23],
					"1f482-1f3ff-200d-2642-fe0f": ["1f482-1f3ff", 23, 36, 23],
					"1f486-200d-2640-fe0f": ["1f486", 24, 10, 23],
					"1f486-1f3fb-200d-2640-fe0f": ["1f486-1f3fb", 24, 11, 23],
					"1f486-1f3fc-200d-2640-fe0f": ["1f486-1f3fc", 24, 12, 23],
					"1f486-1f3fd-200d-2640-fe0f": ["1f486-1f3fd", 24, 13, 23],
					"1f486-1f3fe-200d-2640-fe0f": ["1f486-1f3fe", 24, 14, 23],
					"1f486-1f3ff-200d-2640-fe0f": ["1f486-1f3ff", 24, 15, 23],
					"1f487-200d-2640-fe0f": ["1f487", 24, 28, 23],
					"1f487-1f3fb-200d-2640-fe0f": ["1f487-1f3fb", 24, 29, 23],
					"1f487-1f3fc-200d-2640-fe0f": ["1f487-1f3fc", 24, 30, 23],
					"1f487-1f3fd-200d-2640-fe0f": ["1f487-1f3fd", 24, 31, 23],
					"1f487-1f3fe-200d-2640-fe0f": ["1f487-1f3fe", 24, 32, 23],
					"1f487-1f3ff-200d-2640-fe0f": ["1f487-1f3ff", 24, 33, 23],
					"1f469-200d-2764-fe0f-200d-1f48b-200d-1f468": ["1f48f", 24, 41, 23],
					"1f469-200d-2764-fe0f-200d-1f468": ["1f491", 24, 43, 23],
					"1f575-fe0f-200d-2642-fe0f": ["1f575-fe0f", 29, 11, 7],
					"1f575-1f3fb-200d-2642-fe0f": ["1f575-1f3fb", 29, 12, 7],
					"1f575-1f3fc-200d-2642-fe0f": ["1f575-1f3fc", 29, 13, 7],
					"1f575-1f3fd-200d-2642-fe0f": ["1f575-1f3fd", 29, 14, 7],
					"1f575-1f3fe-200d-2642-fe0f": ["1f575-1f3fe", 29, 15, 7],
					"1f575-1f3ff-200d-2642-fe0f": ["1f575-1f3ff", 29, 16, 7],
					"1f645-200d-2640-fe0f": ["1f645", 32, 1, 23],
					"1f645-1f3fb-200d-2640-fe0f": ["1f645-1f3fb", 32, 2, 23],
					"1f645-1f3fc-200d-2640-fe0f": ["1f645-1f3fc", 32, 3, 23],
					"1f645-1f3fd-200d-2640-fe0f": ["1f645-1f3fd", 32, 4, 23],
					"1f645-1f3fe-200d-2640-fe0f": ["1f645-1f3fe", 32, 5, 23],
					"1f645-1f3ff-200d-2640-fe0f": ["1f645-1f3ff", 32, 6, 23],
					"1f646-200d-2640-fe0f": ["1f646", 32, 19, 23],
					"1f646-1f3fb-200d-2640-fe0f": ["1f646-1f3fb", 32, 20, 23],
					"1f646-1f3fc-200d-2640-fe0f": ["1f646-1f3fc", 32, 21, 23],
					"1f646-1f3fd-200d-2640-fe0f": ["1f646-1f3fd", 32, 22, 23],
					"1f646-1f3fe-200d-2640-fe0f": ["1f646-1f3fe", 32, 23, 23],
					"1f646-1f3ff-200d-2640-fe0f": ["1f646-1f3ff", 32, 24, 23],
					"1f647-200d-2642-fe0f": ["1f647", 32, 37, 23],
					"1f647-1f3fb-200d-2642-fe0f": ["1f647-1f3fb", 32, 38, 23],
					"1f647-1f3fc-200d-2642-fe0f": ["1f647-1f3fc", 32, 39, 23],
					"1f647-1f3fd-200d-2642-fe0f": ["1f647-1f3fd", 32, 40, 23],
					"1f647-1f3fe-200d-2642-fe0f": ["1f647-1f3fe", 32, 41, 23],
					"1f647-1f3ff-200d-2642-fe0f": ["1f647-1f3ff", 32, 42, 23],
					"1f64b-200d-2640-fe0f": ["1f64b", 33, 6, 23],
					"1f64b-1f3fb-200d-2640-fe0f": ["1f64b-1f3fb", 33, 7, 23],
					"1f64b-1f3fc-200d-2640-fe0f": ["1f64b-1f3fc", 33, 8, 23],
					"1f64b-1f3fd-200d-2640-fe0f": ["1f64b-1f3fd", 33, 9, 23],
					"1f64b-1f3fe-200d-2640-fe0f": ["1f64b-1f3fe", 33, 10, 23],
					"1f64b-1f3ff-200d-2640-fe0f": ["1f64b-1f3ff", 33, 11, 23],
					"1f64d-200d-2640-fe0f": ["1f64d", 33, 30, 23],
					"1f64d-1f3fb-200d-2640-fe0f": ["1f64d-1f3fb", 33, 31, 23],
					"1f64d-1f3fc-200d-2640-fe0f": ["1f64d-1f3fc", 33, 32, 23],
					"1f64d-1f3fd-200d-2640-fe0f": ["1f64d-1f3fd", 33, 33, 23],
					"1f64d-1f3fe-200d-2640-fe0f": ["1f64d-1f3fe", 33, 34, 23],
					"1f64d-1f3ff-200d-2640-fe0f": ["1f64d-1f3ff", 33, 35, 23],
					"1f64e-200d-2640-fe0f": ["1f64e", 33, 48, 23],
					"1f64e-1f3fb-200d-2640-fe0f": ["1f64e-1f3fb", 33, 49, 23],
					"1f64e-1f3fc-200d-2640-fe0f": ["1f64e-1f3fc", 33, 50, 23],
					"1f64e-1f3fd-200d-2640-fe0f": ["1f64e-1f3fd", 33, 51, 23],
					"1f64e-1f3fe-200d-2640-fe0f": ["1f64e-1f3fe", 34, 0, 23],
					"1f64e-1f3ff-200d-2640-fe0f": ["1f64e-1f3ff", 34, 1, 23],
					"1f6a3-200d-2642-fe0f": ["1f6a3", 35, 3, 23],
					"1f6a3-1f3fb-200d-2642-fe0f": ["1f6a3-1f3fb", 35, 4, 7],
					"1f6a3-1f3fc-200d-2642-fe0f": ["1f6a3-1f3fc", 35, 5, 7],
					"1f6a3-1f3fd-200d-2642-fe0f": ["1f6a3-1f3fd", 35, 6, 7],
					"1f6a3-1f3fe-200d-2642-fe0f": ["1f6a3-1f3fe", 35, 7, 7],
					"1f6a3-1f3ff-200d-2642-fe0f": ["1f6a3-1f3ff", 35, 8, 7],
					"1f6b4-200d-2642-fe0f": ["1f6b4", 35, 37, 23],
					"1f6b4-1f3fb-200d-2642-fe0f": ["1f6b4-1f3fb", 35, 38, 23],
					"1f6b4-1f3fc-200d-2642-fe0f": ["1f6b4-1f3fc", 35, 39, 23],
					"1f6b4-1f3fd-200d-2642-fe0f": ["1f6b4-1f3fd", 35, 40, 23],
					"1f6b4-1f3fe-200d-2642-fe0f": ["1f6b4-1f3fe", 35, 41, 23],
					"1f6b4-1f3ff-200d-2642-fe0f": ["1f6b4-1f3ff", 35, 42, 23],
					"1f6b5-200d-2642-fe0f": ["1f6b5", 36, 3, 23],
					"1f6b5-1f3fb-200d-2642-fe0f": ["1f6b5-1f3fb", 36, 4, 23],
					"1f6b5-1f3fc-200d-2642-fe0f": ["1f6b5-1f3fc", 36, 5, 23],
					"1f6b5-1f3fd-200d-2642-fe0f": ["1f6b5-1f3fd", 36, 6, 23],
					"1f6b5-1f3fe-200d-2642-fe0f": ["1f6b5-1f3fe", 36, 7, 23],
					"1f6b5-1f3ff-200d-2642-fe0f": ["1f6b5-1f3ff", 36, 8, 23],
					"1f6b6-200d-2642-fe0f": ["1f6b6", 36, 21, 23],
					"1f6b6-1f3fb-200d-2642-fe0f": ["1f6b6-1f3fb", 36, 22, 23],
					"1f6b6-1f3fc-200d-2642-fe0f": ["1f6b6-1f3fc", 36, 23, 23],
					"1f6b6-1f3fd-200d-2642-fe0f": ["1f6b6-1f3fd", 36, 24, 23],
					"1f6b6-1f3fe-200d-2642-fe0f": ["1f6b6-1f3fe", 36, 25, 23],
					"1f6b6-1f3ff-200d-2642-fe0f": ["1f6b6-1f3ff", 36, 26, 23],
					"1f9d6-200d-2642-fe0f": ["1f9d6", 43, 40, 15],
					"1f9d6-1f3fb-200d-2642-fe0f": ["1f9d6-1f3fb", 43, 41, 15],
					"1f9d6-1f3fc-200d-2642-fe0f": ["1f9d6-1f3fc", 43, 42, 15],
					"1f9d6-1f3fd-200d-2642-fe0f": ["1f9d6-1f3fd", 43, 43, 15],
					"1f9d6-1f3fe-200d-2642-fe0f": ["1f9d6-1f3fe", 43, 44, 15],
					"1f9d6-1f3ff-200d-2642-fe0f": ["1f9d6-1f3ff", 43, 45, 15],
					"1f9d7-200d-2640-fe0f": ["1f9d7", 44, 6, 15],
					"1f9d7-1f3fb-200d-2640-fe0f": ["1f9d7-1f3fb", 44, 7, 15],
					"1f9d7-1f3fc-200d-2640-fe0f": ["1f9d7-1f3fc", 44, 8, 15],
					"1f9d7-1f3fd-200d-2640-fe0f": ["1f9d7-1f3fd", 44, 9, 15],
					"1f9d7-1f3fe-200d-2640-fe0f": ["1f9d7-1f3fe", 44, 10, 15],
					"1f9d7-1f3ff-200d-2640-fe0f": ["1f9d7-1f3ff", 44, 11, 15],
					"1f9d8-200d-2640-fe0f": ["1f9d8", 44, 24, 15],
					"1f9d8-1f3fb-200d-2640-fe0f": ["1f9d8-1f3fb", 44, 25, 15],
					"1f9d8-1f3fc-200d-2640-fe0f": ["1f9d8-1f3fc", 44, 26, 15],
					"1f9d8-1f3fd-200d-2640-fe0f": ["1f9d8-1f3fd", 44, 27, 15],
					"1f9d8-1f3fe-200d-2640-fe0f": ["1f9d8-1f3fe", 44, 28, 15],
					"1f9d8-1f3ff-200d-2640-fe0f": ["1f9d8-1f3ff", 44, 29, 15],
					"1f9d9-200d-2640-fe0f": ["1f9d9", 44, 42, 15],
					"1f9d9-1f3fb-200d-2640-fe0f": ["1f9d9-1f3fb", 44, 43, 15],
					"1f9d9-1f3fc-200d-2640-fe0f": ["1f9d9-1f3fc", 44, 44, 15],
					"1f9d9-1f3fd-200d-2640-fe0f": ["1f9d9-1f3fd", 44, 45, 15],
					"1f9d9-1f3fe-200d-2640-fe0f": ["1f9d9-1f3fe", 44, 46, 15],
					"1f9d9-1f3ff-200d-2640-fe0f": ["1f9d9-1f3ff", 44, 47, 15],
					"1f9da-200d-2640-fe0f": ["1f9da", 45, 8, 15],
					"1f9da-1f3fb-200d-2640-fe0f": ["1f9da-1f3fb", 45, 9, 7],
					"1f9da-1f3fc-200d-2640-fe0f": ["1f9da-1f3fc", 45, 10, 7],
					"1f9da-1f3fd-200d-2640-fe0f": ["1f9da-1f3fd", 45, 11, 7],
					"1f9da-1f3fe-200d-2640-fe0f": ["1f9da-1f3fe", 45, 12, 7],
					"1f9da-1f3ff-200d-2640-fe0f": ["1f9da-1f3ff", 45, 13, 7],
					"1f9db-200d-2640-fe0f": ["1f9db", 45, 26, 15],
					"1f9db-1f3fb-200d-2640-fe0f": ["1f9db-1f3fb", 45, 27, 7],
					"1f9db-1f3fc-200d-2640-fe0f": ["1f9db-1f3fc", 45, 28, 7],
					"1f9db-1f3fd-200d-2640-fe0f": ["1f9db-1f3fd", 45, 29, 7],
					"1f9db-1f3fe-200d-2640-fe0f": ["1f9db-1f3fe", 45, 30, 7],
					"1f9db-1f3ff-200d-2640-fe0f": ["1f9db-1f3ff", 45, 31, 7],
					"1f9dc-200d-2642-fe0f": ["1f9dc", 45, 44, 15],
					"1f9dc-1f3fb-200d-2642-fe0f": ["1f9dc-1f3fb", 45, 45, 15],
					"1f9dc-1f3fc-200d-2642-fe0f": ["1f9dc-1f3fc", 45, 46, 15],
					"1f9dc-1f3fd-200d-2642-fe0f": ["1f9dc-1f3fd", 45, 47, 15],
					"1f9dc-1f3fe-200d-2642-fe0f": ["1f9dc-1f3fe", 45, 48, 15],
					"1f9dc-1f3ff-200d-2642-fe0f": ["1f9dc-1f3ff", 45, 49, 15],
					"1f9dd-200d-2642-fe0f": ["1f9dd", 46, 10, 15],
					"1f9dd-1f3fb-200d-2642-fe0f": ["1f9dd-1f3fb", 46, 11, 15],
					"1f9dd-1f3fc-200d-2642-fe0f": ["1f9dd-1f3fc", 46, 12, 15],
					"1f9dd-1f3fd-200d-2642-fe0f": ["1f9dd-1f3fd", 46, 13, 15],
					"1f9dd-1f3fe-200d-2642-fe0f": ["1f9dd-1f3fe", 46, 14, 15],
					"1f9dd-1f3ff-200d-2642-fe0f": ["1f9dd-1f3ff", 46, 15, 15],
					"1f9de-200d-2642-fe0f": ["1f9de", 46, 18, 15],
					"1f9df-200d-2642-fe0f": ["1f9df", 46, 21, 15],
					"26f9-fe0f-200d-2642-fe0f": ["26f9-fe0f", 49, 6, 7],
					"26f9-1f3fb-200d-2642-fe0f": ["26f9-1f3fb", 49, 7, 7],
					"26f9-1f3fc-200d-2642-fe0f": ["26f9-1f3fc", 49, 8, 7],
					"26f9-1f3fd-200d-2642-fe0f": ["26f9-1f3fd", 49, 9, 7],
					"26f9-1f3fe-200d-2642-fe0f": ["26f9-1f3fe", 49, 10, 7],
					"26f9-1f3ff-200d-2642-fe0f": ["26f9-1f3ff", 49, 11, 7]
				}, e.exports && (t = e.exports = r), t.EmojiConvertor = r
			}).call(function() {
				return this || ("undefined" !== typeof window ? window : n)
			}())
		}).call(this, n("c8ba"))
	},
	f069: function(e, t, n) {
		"use strict";
		var f = n("1c0b"),
			r = function(e) {
				var t, n;
				this.promise = new e((function(e, f) {
					if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
					t = e, n = f
				})), this.resolve = f(t), this.reject = f(n)
			};
		e.exports.f = function(e) {
			return new r(e)
		}
	},
	f0bd: function(e, t, n) {
		"use strict";
		(function(e) {
			/**!
			 * @fileOverview Kickass library to create and place poppers near their reference elements.
			 * @version 1.16.1
			 * @license
			 * Copyright (c) 2016 Federico Zivolo and contributors
			 *
			 * Permission is hereby granted,  of charge, to any person obtaining a copy
			 * of this software and associated documentation files (the "Software"), to deal
			 * in the Software without restriction, including without limitation the rights
			 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
			 * copies of the Software, and to permit persons to whom the Software is
			 * furnished to do so, subject to the following conditions:
			 *
			 * The above copyright notice and this permission notice shall be included in all
			 * copies or substantial portions of the Software.
			 *
			 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
			 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
			 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
			 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
			 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
			 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
			 * SOFTWARE.
			 */
			var n = "undefined" !== typeof window && "undefined" !== typeof document && "undefined" !== typeof navigator,
				f = function() {
					for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1)
						if (n && navigator.userAgent.indexOf(e[t]) >= 0) return 1;
					return 0
				}();

			function r(e) {
				var t = !1;
				return function() {
					t || (t = !0, window.Promise.resolve().then((function() {
						t = !1, e()
					})))
				}
			}

			function i(e) {
				var t = !1;
				return function() {
					t || (t = !0, setTimeout((function() {
						t = !1, e()
					}), f))
				}
			}
			var o = n && window.Promise,
				a = o ? r : i;

			function s(e) {
				var t = {};
				return e && "[object Function]" === t.toString.call(e)
			}

			function c(e, t) {
				if (1 !== e.nodeType) return [];
				var n = e.ownerDocument.defaultView,
					f = n.getComputedStyle(e, null);
				return t ? f[t] : f
			}

			function l(e) {
				return "HTML" === e.nodeName ? e : e.parentNode || e.host
			}

			function u(e) {
				if (!e) return document.body;
				switch (e.nodeName) {
					case "HTML":
					case "BODY":
						return e.ownerDocument.body;
					case "#document":
						return e.body
				}
				var t = c(e),
					n = t.overflow,
					f = t.overflowX,
					r = t.overflowY;
				return /(auto|scroll|overlay)/.test(n + r + f) ? e : u(l(e))
			}

			function d(e) {
				return e && e.referenceNode ? e.referenceNode : e
			}
			var p = n && !(!window.MSInputMethodContext || !document.documentMode),
				h = n && /MSIE 10/.test(navigator.userAgent);

			function m(e) {
				return 11 === e ? p : 10 === e ? h : p || h
			}

			function g(e) {
				if (!e) return document.documentElement;
				var t = m(10) ? document.body : null,
					n = e.offsetParent || null;
				while (n === t && e.nextElementSibling) n = (e = e.nextElementSibling).offsetParent;
				var f = n && n.nodeName;
				return f && "BODY" !== f && "HTML" !== f ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === c(n, "position") ? g(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
			}

			function v(e) {
				var t = e.nodeName;
				return "BODY" !== t && ("HTML" === t || g(e.firstElementChild) === e)
			}

			function b(e) {
				return null !== e.parentNode ? b(e.parentNode) : e
			}

			function y(e, t) {
				if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
				var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
					f = n ? e : t,
					r = n ? t : e,
					i = document.createRange();
				i.setStart(f, 0), i.setEnd(r, 0);
				var o = i.commonAncestorContainer;
				if (e !== o && t !== o || f.contains(r)) return v(o) ? o : g(o);
				var a = b(e);
				return a.host ? y(a.host, t) : y(e, b(t).host)
			}

			function _(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
					n = "top" === t ? "scrollTop" : "scrollLeft",
					f = e.nodeName;
				if ("BODY" === f || "HTML" === f) {
					var r = e.ownerDocument.documentElement,
						i = e.ownerDocument.scrollingElement || r;
					return i[n]
				}
				return e[n]
			}

			function w(e, t) {
				var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
					f = _(t, "top"),
					r = _(t, "left"),
					i = n ? -1 : 1;
				return e.top += f * i, e.bottom += f * i, e.left += r * i, e.right += r * i, e
			}

			function x(e, t) {
				var n = "x" === t ? "Left" : "Top",
					f = "Left" === n ? "Right" : "Bottom";
				return parseFloat(e["border" + n + "Width"]) + parseFloat(e["border" + f + "Width"])
			}

			function k(e, t, n, f) {
				return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], m(10) ? parseInt(n["offset" + e]) + parseInt(f["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(f["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
			}

			function C(e) {
				var t = e.body,
					n = e.documentElement,
					f = m(10) && getComputedStyle(n);
				return {
					height: k("Height", t, n, f),
					width: k("Width", t, n, f)
				}
			}
			var S = function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				},
				A = function() {
					function e(e, t) {
						for (var n = 0; n < t.length; n++) {
							var f = t[n];
							f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), Object.defineProperty(e, f.key, f)
						}
					}
					return function(t, n, f) {
						return n && e(t.prototype, n), f && e(t, f), t
					}
				}(),
				O = function(e, t, n) {
					return t in e ? Object.defineProperty(e, t, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : e[t] = n, e
				},
				E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var f in n) Object.prototype.hasOwnProperty.call(n, f) && (e[f] = n[f])
					}
					return e
				};

			function T(e) {
				return E({}, e, {
					right: e.left + e.width,
					bottom: e.top + e.height
				})
			}

			function j(e) {
				var t = {};
				try {
					if (m(10)) {
						t = e.getBoundingClientRect();
						var n = _(e, "top"),
							f = _(e, "left");
						t.top += n, t.left += f, t.bottom += n, t.right += f
					} else t = e.getBoundingClientRect()
				} catch (d) {}
				var r = {
						left: t.left,
						top: t.top,
						width: t.right - t.left,
						height: t.bottom - t.top
					},
					i = "HTML" === e.nodeName ? C(e.ownerDocument) : {},
					o = i.width || e.clientWidth || r.width,
					a = i.height || e.clientHeight || r.height,
					s = e.offsetWidth - o,
					l = e.offsetHeight - a;
				if (s || l) {
					var u = c(e);
					s -= x(u, "x"), l -= x(u, "y"), r.width -= s, r.height -= l
				}
				return T(r)
			}

			function L(e, t) {
				var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
					f = m(10),
					r = "HTML" === t.nodeName,
					i = j(e),
					o = j(t),
					a = u(e),
					s = c(t),
					l = parseFloat(s.borderTopWidth),
					d = parseFloat(s.borderLeftWidth);
				n && r && (o.top = Math.max(o.top, 0), o.left = Math.max(o.left, 0));
				var p = T({
					top: i.top - o.top - l,
					left: i.left - o.left - d,
					width: i.width,
					height: i.height
				});
				if (p.marginTop = 0, p.marginLeft = 0, !f && r) {
					var h = parseFloat(s.marginTop),
						g = parseFloat(s.marginLeft);
					p.top -= l - h, p.bottom -= l - h, p.left -= d - g, p.right -= d - g, p.marginTop = h, p.marginLeft = g
				}
				return (f && !n ? t.contains(a) : t === a && "BODY" !== a.nodeName) && (p = w(p, t)), p
			}

			function I(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					n = e.ownerDocument.documentElement,
					f = L(e, n),
					r = Math.max(n.clientWidth, window.innerWidth || 0),
					i = Math.max(n.clientHeight, window.innerHeight || 0),
					o = t ? 0 : _(n),
					a = t ? 0 : _(n, "left"),
					s = {
						top: o - f.top + f.marginTop,
						left: a - f.left + f.marginLeft,
						width: r,
						height: i
					};
				return T(s)
			}

			function M(e) {
				var t = e.nodeName;
				if ("BODY" === t || "HTML" === t) return !1;
				if ("fixed" === c(e, "position")) return !0;
				var n = l(e);
				return !!n && M(n)
			}

			function N(e) {
				if (!e || !e.parentElement || m()) return document.documentElement;
				var t = e.parentElement;
				while (t && "none" === c(t, "transform")) t = t.parentElement;
				return t || document.documentElement
			}

			function P(e, t, n, f) {
				var r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
					i = {
						top: 0,
						left: 0
					},
					o = r ? N(e) : y(e, d(t));
				if ("viewport" === f) i = I(o, r);
				else {
					var a = void 0;
					"scrollParent" === f ? (a = u(l(t)), "BODY" === a.nodeName && (a = e.ownerDocument.documentElement)) : a = "window" === f ? e.ownerDocument.documentElement : f;
					var s = L(a, o, r);
					if ("HTML" !== a.nodeName || M(o)) i = s;
					else {
						var c = C(e.ownerDocument),
							p = c.height,
							h = c.width;
						i.top += s.top - s.marginTop, i.bottom = p + s.top, i.left += s.left - s.marginLeft, i.right = h + s.left
					}
				}
				n = n || 0;
				var m = "number" === typeof n;
				return i.left += m ? n : n.left || 0, i.top += m ? n : n.top || 0, i.right -= m ? n : n.right || 0, i.bottom -= m ? n : n.bottom || 0, i
			}

			function B(e) {
				var t = e.width,
					n = e.height;
				return t * n
			}

			function $(e, t, n, f, r) {
				var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
				if (-1 === e.indexOf("auto")) return e;
				var o = P(n, f, i, r),
					a = {
						top: {
							width: o.width,
							height: t.top - o.top
						},
						right: {
							width: o.right - t.right,
							height: o.height
						},
						bottom: {
							width: o.width,
							height: o.bottom - t.bottom
						},
						left: {
							width: t.left - o.left,
							height: o.height
						}
					},
					s = Object.keys(a).map((function(e) {
						return E({
							key: e
						}, a[e], {
							area: B(a[e])
						})
					})).sort((function(e, t) {
						return t.area - e.area
					})),
					c = s.filter((function(e) {
						var t = e.width,
							f = e.height;
						return t >= n.clientWidth && f >= n.clientHeight
					})),
					l = c.length > 0 ? c[0].key : s[0].key,
					u = e.split("-")[1];
				return l + (u ? "-" + u : "")
			}

			function z(e, t, n) {
				var f = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
					r = f ? N(t) : y(t, d(n));
				return L(n, r, f)
			}

			function R(e) {
				var t = e.ownerDocument.defaultView,
					n = t.getComputedStyle(e),
					f = parseFloat(n.marginTop || 0) + parseFloat(n.marginBottom || 0),
					r = parseFloat(n.marginLeft || 0) + parseFloat(n.marginRight || 0),
					i = {
						width: e.offsetWidth + r,
						height: e.offsetHeight + f
					};
				return i
			}

			function D(e) {
				var t = {
					left: "right",
					right: "left",
					bottom: "top",
					top: "bottom"
				};
				return e.replace(/left|right|bottom|top/g, (function(e) {
					return t[e]
				}))
			}

			function V(e, t, n) {
				n = n.split("-")[0];
				var f = R(e),
					r = {
						width: f.width,
						height: f.height
					},
					i = -1 !== ["right", "left"].indexOf(n),
					o = i ? "top" : "left",
					a = i ? "left" : "top",
					s = i ? "height" : "width",
					c = i ? "width" : "height";
				return r[o] = t[o] + t[s] / 2 - f[s] / 2, r[a] = n === a ? t[a] - f[c] : t[D(a)], r
			}

			function H(e, t) {
				return Array.prototype.find ? e.find(t) : e.filter(t)[0]
			}

			function F(e, t, n) {
				if (Array.prototype.findIndex) return e.findIndex((function(e) {
					return e[t] === n
				}));
				var f = H(e, (function(e) {
					return e[t] === n
				}));
				return e.indexOf(f)
			}

			function U(e, t, n) {
				var f = void 0 === n ? e : e.slice(0, F(e, "name", n));
				return f.forEach((function(e) {
					e["function"] && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
					var n = e["function"] || e.fn;
					e.enabled && s(n) && (t.offsets.popper = T(t.offsets.popper), t.offsets.reference = T(t.offsets.reference), t = n(t, e))
				})), t
			}

			function q() {
				if (!this.state.isDestroyed) {
					var e = {
						instance: this,
						styles: {},
						arrowStyles: {},
						attributes: {},
						flipped: !1,
						offsets: {}
					};
					e.offsets.reference = z(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = $(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = V(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = U(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
				}
			}

			function W(e, t) {
				return e.some((function(e) {
					var n = e.name,
						f = e.enabled;
					return f && n === t
				}))
			}

			function Q(e) {
				for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), f = 0; f < t.length; f++) {
					var r = t[f],
						i = r ? "" + r + n : e;
					if ("undefined" !== typeof document.body.style[i]) return i
				}
				return null
			}

			function G() {
				return this.state.isDestroyed = !0, W(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[Q("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
			}

			function Z(e) {
				var t = e.ownerDocument;
				return t ? t.defaultView : window
			}

			function Y(e, t, n, f) {
				var r = "BODY" === e.nodeName,
					i = r ? e.ownerDocument.defaultView : e;
				i.addEventListener(t, n, {
					passive: !0
				}), r || Y(u(i.parentNode), t, n, f), f.push(i)
			}

			function J(e, t, n, f) {
				n.updateBound = f, Z(e).addEventListener("resize", n.updateBound, {
					passive: !0
				});
				var r = u(e);
				return Y(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n
			}

			function X() {
				this.state.eventsEnabled || (this.state = J(this.reference, this.options, this.state, this.scheduleUpdate))
			}

			function K(e, t) {
				return Z(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach((function(e) {
					e.removeEventListener("scroll", t.updateBound)
				})), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
			}

			function ee() {
				this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = K(this.reference, this.state))
			}

			function te(e) {
				return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
			}

			function ne(e, t) {
				Object.keys(t).forEach((function(n) {
					var f = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && te(t[n]) && (f = "px"), e.style[n] = t[n] + f
				}))
			}

			function fe(e, t) {
				Object.keys(t).forEach((function(n) {
					var f = t[n];
					!1 !== f ? e.setAttribute(n, t[n]) : e.removeAttribute(n)
				}))
			}

			function re(e) {
				return ne(e.instance.popper, e.styles), fe(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && ne(e.arrowElement, e.arrowStyles), e
			}

			function ie(e, t, n, f, r) {
				var i = z(r, t, e, n.positionFixed),
					o = $(n.placement, i, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
				return t.setAttribute("x-placement", o), ne(t, {
					position: n.positionFixed ? "fixed" : "absolute"
				}), n
			}

			function oe(e, t) {
				var n = e.offsets,
					f = n.popper,
					r = n.reference,
					i = Math.round,
					o = Math.floor,
					a = function(e) {
						return e
					},
					s = i(r.width),
					c = i(f.width),
					l = -1 !== ["left", "right"].indexOf(e.placement),
					u = -1 !== e.placement.indexOf("-"),
					d = s % 2 === c % 2,
					p = s % 2 === 1 && c % 2 === 1,
					h = t ? l || u || d ? i : o : a,
					m = t ? i : a;
				return {
					left: h(p && !u && t ? f.left - 1 : f.left),
					top: m(f.top),
					bottom: m(f.bottom),
					right: h(f.right)
				}
			}
			var ae = n && /Firefox/i.test(navigator.userAgent);

			function se(e, t) {
				var n = t.x,
					f = t.y,
					r = e.offsets.popper,
					i = H(e.instance.modifiers, (function(e) {
						return "applyStyle" === e.name
					})).gpuAcceleration;
				void 0 !== i && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
				var o = void 0 !== i ? i : t.gpuAcceleration,
					a = g(e.instance.popper),
					s = j(a),
					c = {
						position: r.position
					},
					l = oe(e, window.devicePixelRatio < 2 || !ae),
					u = "bottom" === n ? "top" : "bottom",
					d = "right" === f ? "left" : "right",
					p = Q("transform"),
					h = void 0,
					m = void 0;
				if (m = "bottom" === u ? "HTML" === a.nodeName ? -a.clientHeight + l.bottom : -s.height + l.bottom : l.top, h = "right" === d ? "HTML" === a.nodeName ? -a.clientWidth + l.right : -s.width + l.right : l.left, o && p) c[p] = "translate3d(" + h + "px, " + m + "px, 0)", c[u] = 0, c[d] = 0, c.willChange = "transform";
				else {
					var v = "bottom" === u ? -1 : 1,
						b = "right" === d ? -1 : 1;
					c[u] = m * v, c[d] = h * b, c.willChange = u + ", " + d
				}
				var y = {
					"x-placement": e.placement
				};
				return e.attributes = E({}, y, e.attributes), e.styles = E({}, c, e.styles), e.arrowStyles = E({}, e.offsets.arrow, e.arrowStyles), e
			}

			function ce(e, t, n) {
				var f = H(e, (function(e) {
						var n = e.name;
						return n === t
					})),
					r = !!f && e.some((function(e) {
						return e.name === n && e.enabled && e.order < f.order
					}));
				if (!r) {
					var i = "`" + t + "`",
						o = "`" + n + "`";
					console.warn(o + " modifier is required by " + i + " modifier in order to work, be sure to include it before " + i + "!")
				}
				return r
			}

			function le(e, t) {
				var n;
				if (!ce(e.instance.modifiers, "arrow", "keepTogether")) return e;
				var f = t.element;
				if ("string" === typeof f) {
					if (f = e.instance.popper.querySelector(f), !f) return e
				} else if (!e.instance.popper.contains(f)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
				var r = e.placement.split("-")[0],
					i = e.offsets,
					o = i.popper,
					a = i.reference,
					s = -1 !== ["left", "right"].indexOf(r),
					l = s ? "height" : "width",
					u = s ? "Top" : "Left",
					d = u.toLowerCase(),
					p = s ? "left" : "top",
					h = s ? "bottom" : "right",
					m = R(f)[l];
				a[h] - m < o[d] && (e.offsets.popper[d] -= o[d] - (a[h] - m)), a[d] + m > o[h] && (e.offsets.popper[d] += a[d] + m - o[h]), e.offsets.popper = T(e.offsets.popper);
				var g = a[d] + a[l] / 2 - m / 2,
					v = c(e.instance.popper),
					b = parseFloat(v["margin" + u]),
					y = parseFloat(v["border" + u + "Width"]),
					_ = g - e.offsets.popper[d] - b - y;
				return _ = Math.max(Math.min(o[l] - m, _), 0), e.arrowElement = f, e.offsets.arrow = (n = {}, O(n, d, Math.round(_)), O(n, p, ""), n), e
			}

			function ue(e) {
				return "end" === e ? "start" : "start" === e ? "end" : e
			}
			var de = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
				pe = de.slice(3);

			function he(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					n = pe.indexOf(e),
					f = pe.slice(n + 1).concat(pe.slice(0, n));
				return t ? f.reverse() : f
			}
			var me = {
				FLIP: "flip",
				CLOCKWISE: "clockwise",
				COUNTERCLOCKWISE: "counterclockwise"
			};

			function ge(e, t) {
				if (W(e.instance.modifiers, "inner")) return e;
				if (e.flipped && e.placement === e.originalPlacement) return e;
				var n = P(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
					f = e.placement.split("-")[0],
					r = D(f),
					i = e.placement.split("-")[1] || "",
					o = [];
				switch (t.behavior) {
					case me.FLIP:
						o = [f, r];
						break;
					case me.CLOCKWISE:
						o = he(f);
						break;
					case me.COUNTERCLOCKWISE:
						o = he(f, !0);
						break;
					default:
						o = t.behavior
				}
				return o.forEach((function(a, s) {
					if (f !== a || o.length === s + 1) return e;
					f = e.placement.split("-")[0], r = D(f);
					var c = e.offsets.popper,
						l = e.offsets.reference,
						u = Math.floor,
						d = "left" === f && u(c.right) > u(l.left) || "right" === f && u(c.left) < u(l.right) || "top" === f && u(c.bottom) > u(l.top) || "bottom" === f && u(c.top) < u(l.bottom),
						p = u(c.left) < u(n.left),
						h = u(c.right) > u(n.right),
						m = u(c.top) < u(n.top),
						g = u(c.bottom) > u(n.bottom),
						v = "left" === f && p || "right" === f && h || "top" === f && m || "bottom" === f && g,
						b = -1 !== ["top", "bottom"].indexOf(f),
						y = !!t.flipVariations && (b && "start" === i && p || b && "end" === i && h || !b && "start" === i && m || !b && "end" === i && g),
						_ = !!t.flipVariationsByContent && (b && "start" === i && h || b && "end" === i && p || !b && "start" === i && g || !b && "end" === i && m),
						w = y || _;
					(d || v || w) && (e.flipped = !0, (d || v) && (f = o[s + 1]), w && (i = ue(i)), e.placement = f + (i ? "-" + i : ""), e.offsets.popper = E({}, e.offsets.popper, V(e.instance.popper, e.offsets.reference, e.placement)), e = U(e.instance.modifiers, e, "flip"))
				})), e
			}

			function ve(e) {
				var t = e.offsets,
					n = t.popper,
					f = t.reference,
					r = e.placement.split("-")[0],
					i = Math.floor,
					o = -1 !== ["top", "bottom"].indexOf(r),
					a = o ? "right" : "bottom",
					s = o ? "left" : "top",
					c = o ? "width" : "height";
				return n[a] < i(f[s]) && (e.offsets.popper[s] = i(f[s]) - n[c]), n[s] > i(f[a]) && (e.offsets.popper[s] = i(f[a])), e
			}

			function be(e, t, n, f) {
				var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
					i = +r[1],
					o = r[2];
				if (!i) return e;
				if (0 === o.indexOf("%")) {
					var a = void 0;
					switch (o) {
						case "%p":
							a = n;
							break;
						case "%":
						case "%r":
						default:
							a = f
					}
					var s = T(a);
					return s[t] / 100 * i
				}
				if ("vh" === o || "vw" === o) {
					var c = void 0;
					return c = "vh" === o ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0), c / 100 * i
				}
				return i
			}

			function ye(e, t, n, f) {
				var r = [0, 0],
					i = -1 !== ["right", "left"].indexOf(f),
					o = e.split(/(\+|\-)/).map((function(e) {
						return e.trim()
					})),
					a = o.indexOf(H(o, (function(e) {
						return -1 !== e.search(/,|\s/)
					})));
				o[a] && -1 === o[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
				var s = /\s*,\s*|\s+/,
					c = -1 !== a ? [o.slice(0, a).concat([o[a].split(s)[0]]), [o[a].split(s)[1]].concat(o.slice(a + 1))] : [o];
				return c = c.map((function(e, f) {
					var r = (1 === f ? !i : i) ? "height" : "width",
						o = !1;
					return e.reduce((function(e, t) {
						return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, o = !0, e) : o ? (e[e.length - 1] += t, o = !1, e) : e.concat(t)
					}), []).map((function(e) {
						return be(e, r, t, n)
					}))
				})), c.forEach((function(e, t) {
					e.forEach((function(n, f) {
						te(n) && (r[t] += n * ("-" === e[f - 1] ? -1 : 1))
					}))
				})), r
			}

			function _e(e, t) {
				var n = t.offset,
					f = e.placement,
					r = e.offsets,
					i = r.popper,
					o = r.reference,
					a = f.split("-")[0],
					s = void 0;
				return s = te(+n) ? [+n, 0] : ye(n, i, o, a), "left" === a ? (i.top += s[0], i.left -= s[1]) : "right" === a ? (i.top += s[0], i.left += s[1]) : "top" === a ? (i.left += s[0], i.top -= s[1]) : "bottom" === a && (i.left += s[0], i.top += s[1]), e.popper = i, e
			}

			function we(e, t) {
				var n = t.boundariesElement || g(e.instance.popper);
				e.instance.reference === n && (n = g(n));
				var f = Q("transform"),
					r = e.instance.popper.style,
					i = r.top,
					o = r.left,
					a = r[f];
				r.top = "", r.left = "", r[f] = "";
				var s = P(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
				r.top = i, r.left = o, r[f] = a, t.boundaries = s;
				var c = t.priority,
					l = e.offsets.popper,
					u = {
						primary: function(e) {
							var n = l[e];
							return l[e] < s[e] && !t.escapeWithReference && (n = Math.max(l[e], s[e])), O({}, e, n)
						},
						secondary: function(e) {
							var n = "right" === e ? "left" : "top",
								f = l[n];
							return l[e] > s[e] && !t.escapeWithReference && (f = Math.min(l[n], s[e] - ("right" === e ? l.width : l.height))), O({}, n, f)
						}
					};
				return c.forEach((function(e) {
					var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
					l = E({}, l, u[t](e))
				})), e.offsets.popper = l, e
			}

			function xe(e) {
				var t = e.placement,
					n = t.split("-")[0],
					f = t.split("-")[1];
				if (f) {
					var r = e.offsets,
						i = r.reference,
						o = r.popper,
						a = -1 !== ["bottom", "top"].indexOf(n),
						s = a ? "left" : "top",
						c = a ? "width" : "height",
						l = {
							start: O({}, s, i[s]),
							end: O({}, s, i[s] + i[c] - o[c])
						};
					e.offsets.popper = E({}, o, l[f])
				}
				return e
			}

			function ke(e) {
				if (!ce(e.instance.modifiers, "hide", "preventOverflow")) return e;
				var t = e.offsets.reference,
					n = H(e.instance.modifiers, (function(e) {
						return "preventOverflow" === e.name
					})).boundaries;
				if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
					if (!0 === e.hide) return e;
					e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
				} else {
					if (!1 === e.hide) return e;
					e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
				}
				return e
			}

			function Ce(e) {
				var t = e.placement,
					n = t.split("-")[0],
					f = e.offsets,
					r = f.popper,
					i = f.reference,
					o = -1 !== ["left", "right"].indexOf(n),
					a = -1 === ["top", "left"].indexOf(n);
				return r[o ? "left" : "top"] = i[n] - (a ? r[o ? "width" : "height"] : 0), e.placement = D(t), e.offsets.popper = T(r), e
			}
			var Se = {
					shift: {
						order: 100,
						enabled: !0,
						fn: xe
					},
					offset: {
						order: 200,
						enabled: !0,
						fn: _e,
						offset: 0
					},
					preventOverflow: {
						order: 300,
						enabled: !0,
						fn: we,
						priority: ["left", "right", "top", "bottom"],
						padding: 5,
						boundariesElement: "scrollParent"
					},
					keepTogether: {
						order: 400,
						enabled: !0,
						fn: ve
					},
					arrow: {
						order: 500,
						enabled: !0,
						fn: le,
						element: "[x-arrow]"
					},
					flip: {
						order: 600,
						enabled: !0,
						fn: ge,
						behavior: "flip",
						padding: 5,
						boundariesElement: "viewport",
						flipVariations: !1,
						flipVariationsByContent: !1
					},
					inner: {
						order: 700,
						enabled: !1,
						fn: Ce
					},
					hide: {
						order: 800,
						enabled: !0,
						fn: ke
					},
					computeStyle: {
						order: 850,
						enabled: !0,
						fn: se,
						gpuAcceleration: !0,
						x: "bottom",
						y: "right"
					},
					applyStyle: {
						order: 900,
						enabled: !0,
						fn: re,
						onLoad: ie,
						gpuAcceleration: void 0
					}
				},
				Ae = {
					placement: "bottom",
					positionFixed: !1,
					eventsEnabled: !0,
					removeOnDestroy: !1,
					onCreate: function() {},
					onUpdate: function() {},
					modifiers: Se
				},
				Oe = function() {
					function e(t, n) {
						var f = this,
							r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
						S(this, e), this.scheduleUpdate = function() {
							return requestAnimationFrame(f.update)
						}, this.update = a(this.update.bind(this)), this.options = E({}, e.Defaults, r), this.state = {
							isDestroyed: !1,
							isCreated: !1,
							scrollParents: []
						}, this.reference = t && t.jquery ? t[0] : t, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(E({}, e.Defaults.modifiers, r.modifiers)).forEach((function(t) {
							f.options.modifiers[t] = E({}, e.Defaults.modifiers[t] || {}, r.modifiers ? r.modifiers[t] : {})
						})), this.modifiers = Object.keys(this.options.modifiers).map((function(e) {
							return E({
								name: e
							}, f.options.modifiers[e])
						})).sort((function(e, t) {
							return e.order - t.order
						})), this.modifiers.forEach((function(e) {
							e.enabled && s(e.onLoad) && e.onLoad(f.reference, f.popper, f.options, e, f.state)
						})), this.update();
						var i = this.options.eventsEnabled;
						i && this.enableEventListeners(), this.state.eventsEnabled = i
					}
					return A(e, [{
						key: "update",
						value: function() {
							return q.call(this)
						}
					}, {
						key: "destroy",
						value: function() {
							return G.call(this)
						}
					}, {
						key: "enableEventListeners",
						value: function() {
							return X.call(this)
						}
					}, {
						key: "disableEventListeners",
						value: function() {
							return ee.call(this)
						}
					}]), e
				}();
			Oe.Utils = ("undefined" !== typeof window ? window : e).PopperUtils, Oe.placements = de, Oe.Defaults = Ae, t["a"] = Oe
		}).call(this, n("c8ba"))
	},
	f183: function(e, t, n) {
		var f = n("d012"),
			r = n("861d"),
			i = n("5135"),
			o = n("9bf2").f,
			a = n("90e3"),
			s = n("bb2f"),
			c = a("meta"),
			l = 0,
			u = Object.isExtensible || function() {
				return !0
			},
			d = function(e) {
				o(e, c, {
					value: {
						objectID: "O" + ++l,
						weakData: {}
					}
				})
			},
			p = function(e, t) {
				if (!r(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
				if (!i(e, c)) {
					if (!u(e)) return "F";
					if (!t) return "E";
					d(e)
				}
				return e[c].objectID
			},
			h = function(e, t) {
				if (!i(e, c)) {
					if (!u(e)) return !0;
					if (!t) return !1;
					d(e)
				}
				return e[c].weakData
			},
			m = function(e) {
				return s && g.REQUIRED && u(e) && !i(e, c) && d(e), e
			},
			g = e.exports = {
				REQUIRED: !1,
				fastKey: p,
				getWeakData: h,
				onFreeze: m
			};
		f[c] = !0
	},
	f196: function(e, t, n) {
		"use strict";
		var f = n("4dc0"),
			r = n.n(f);
		r.a
	},
	f5df: function(e, t, n) {
		var f = n("00ee"),
			r = n("c6b6"),
			i = n("b622"),
			o = i("toStringTag"),
			a = "Arguments" == r(function() {
				return arguments
			}()),
			s = function(e, t) {
				try {
					return e[t]
				} catch (n) {}
			};
		e.exports = f ? r : function(e) {
			var t, n, f;
			return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = s(t = Object(e), o)) ? n : a ? r(t) : "Object" == (f = r(t)) && "function" == typeof t.callee ? "Arguments" : f
		}
	},
	f6b4: function(e, t, n) {
		"use strict";
		var f = n("c532");

		function r() {
			this.handlers = []
		}
		r.prototype.use = function(e, t) {
			return this.handlers.push({
				fulfilled: e,
				rejected: t
			}), this.handlers.length - 1
		}, r.prototype.eject = function(e) {
			this.handlers[e] && (this.handlers[e] = null)
		}, r.prototype.forEach = function(e) {
			f.forEach(this.handlers, (function(t) {
				null !== t && e(t)
			}))
		}, e.exports = r
	},
	f748: function(e, t) {
		e.exports = Math.sign || function(e) {
			return 0 == (e = +e) || e != e ? e : e < 0 ? -1 : 1
		}
	},
	f772: function(e, t, n) {
		var f = n("5692"),
			r = n("90e3"),
			i = f("keys");
		e.exports = function(e) {
			return i[e] || (i[e] = r(e))
		}
	},
	f884: function(e, t, n) {
		"use strict";
		var f = n("8171"),
			r = n.n(f);
		r.a
	},
	f923: function(e, t, n) {
		"use strict";
		var f = n("e361"),
			r = n.n(f);
		r.a
	},
	fb6a: function(e, t, n) {
		"use strict";
		var f = n("23e7"),
			r = n("861d"),
			i = n("e8b5"),
			o = n("23cb"),
			a = n("50c4"),
			s = n("fc6a"),
			c = n("8418"),
			l = n("b622"),
			u = n("1dde"),
			d = n("ae40"),
			p = u("slice"),
			h = d("slice", {
				ACCESSORS: !0,
				0: 0,
				1: 2
			}),
			m = l("species"),
			g = [].slice,
			v = Math.max;
		f({
			target: "Array",
			proto: !0,
			forced: !p || !h
		}, {
			slice: function(e, t) {
				var n, f, l, u = s(this),
					d = a(u.length),
					p = o(e, d),
					h = o(void 0 === t ? d : t, d);
				if (i(u) && (n = u.constructor, "function" != typeof n || n !== Array && !i(n.prototype) ? r(n) && (n = n[m], null === n && (n = void 0)) : n = void 0, n === Array || void 0 === n)) return g.call(u, p, h);
				for (f = new(void 0 === n ? Array : n)(v(h - p, 0)), l = 0; p < h; p++, l++) p in u && c(f, l, u[p]);
				return f.length = l, f
			}
		})
	},
	fc6a: function(e, t, n) {
		var f = n("44ad"),
			r = n("1d80");
		e.exports = function(e) {
			return f(r(e))
		}
	},
	fdbc: function(e, t) {
		e.exports = {
			CSSRuleList: 0,
			CSSStyleDeclaration: 0,
			CSSValueList: 0,
			ClientRectList: 0,
			DOMRectList: 0,
			DOMStringList: 0,
			DOMTokenList: 1,
			DataTransferItemList: 0,
			FileList: 0,
			HTMLAllCollection: 0,
			HTMLCollection: 0,
			HTMLFormElement: 0,
			HTMLSelectElement: 0,
			MediaList: 0,
			MimeTypeArray: 0,
			NamedNodeMap: 0,
			NodeList: 1,
			PaintRequestList: 0,
			Plugin: 0,
			PluginArray: 0,
			SVGLengthList: 0,
			SVGNumberList: 0,
			SVGPathSegList: 0,
			SVGPointList: 0,
			SVGStringList: 0,
			SVGTransformList: 0,
			SourceBufferList: 0,
			StyleSheetList: 0,
			TextTrackCueList: 0,
			TextTrackList: 0,
			TouchList: 0
		}
	},
	fdbf: function(e, t, n) {
		var f = n("4930");
		e.exports = f && !Symbol.sham && "symbol" == typeof Symbol.iterator
	},
	fe21: function(e, t, n) {},
	fea9: function(e, t, n) {
		var f = n("da84");
		e.exports = f.Promise
	}
});