/*! layer-v3.0.3 Web弹层组件 MIT License  http://layer.layui.com/  By 贤心 */ ;
! function(e, t) {
	"use strict";
	var i, n, a = e.layui && layui.define,
		o = {
			getPath: function() {
				var e = document.scripts,
					t = e[e.length - 1],
					i = t.src;
				if(!t.getAttribute("merge")) return i.substring(0, i.lastIndexOf("/") + 1)
			}(),
			config: {},
			end: {},
			minIndex: 0,
			minLeft: [],
			btn: ["&#x786E;&#x5B9A;", "&#x53D6;&#x6D88;"],
			type: ["dialog", "page", "iframe", "loading", "tips"]
		},
		r = {
			v: "3.0.3",
			ie: function() {
				var t = navigator.userAgent.toLowerCase();
				return !!(e.ActiveXObject || "ActiveXObject" in e) && ((t.match(/msie\s(\d+)/) || [])[1] || "11")
			}(),
			index: e.layer && e.layer.v ? 1e5 : 0,
			path: o.getPath,
			config: function(e, t) {
				return e = e || {}, r.cache = o.config = i.extend({}, o.config, e), r.path = o.config.path || r.path, "string" == typeof e.extend && (e.extend = [e.extend]), o.config.path && r.ready(), e.extend ? (a ? layui.addcss("modules/layer/" + e.extend) : r.link("skin/" + e.extend), this) : this
			},
			link: function(t, n, a) {
				if(r.path) {
					var o = i("head")[0],
						s = document.createElement("link");
					"string" == typeof n && (a = n);
					var l = (a || t).replace(/\.|\//g, ""),
						f = "layuicss-" + l,
						c = 0;
					s.rel = "stylesheet", s.href = r.path + t, s.id = f, i("#" + f)[0] || o.appendChild(s), "function" == typeof n && ! function u() {
						return ++c > 80 ? e.console && console.error("layer.css: Invalid") : void(1989 === parseInt(i("#" + f).css("width")) ? n() : setTimeout(u, 100))
					}()
				}
			},
			ready: function(e) {
				var t = "skinlayercss",
					i = "303";
				return a ? layui.addcss("modules/layer/default/layer.css?v=" + r.v + i, e, t) : r.link("skin/default/layer.css?v=" + r.v + i, e, t), this
			},
			alert: function(e, t, n) {
				var a = "function" == typeof t;
				return a && (n = t), r.open(i.extend({
					content: e,
					yes: n
				}, a ? {} : t))
			},
			confirm: function(e, t, n, a) {
				var s = "function" == typeof t;
				return s && (a = n, n = t), r.open(i.extend({
					content: e,
					btn: o.btn,
					yes: n,
					btn2: a
				}, s ? {} : t))
			},
			msg: function(e, n, a) {
				var s = "function" == typeof n,
					f = o.config.skin,
					c = (f ? f + " " + f + "-msg" : "") || "layui-layer-msg",
					u = l.anim.length - 1;
				return s && (a = n), r.open(i.extend({
					content: e,
					time: 3e3,
					shade: !1,
					skin: c,
					title: !1,
					closeBtn: !1,
					btn: !1,
					resize: !1,
					end: a
				}, s && !o.config.skin ? {
					skin: c + " layui-layer-hui",
					anim: u
				} : function() {
					return n = n || {}, (n.icon === -1 || n.icon === t && !o.config.skin) && (n.skin = c + " " + (n.skin || "layui-layer-hui")), n
				}()))
			},
			load: function(e, t) {
				return r.open(i.extend({
					type: 3,
					icon: e || 0,
					resize: !1,
					shade: .01
				}, t))
			},
			tips: function(e, t, n) {
				return r.open(i.extend({
					type: 4,
					content: [e, t],
					closeBtn: !1,
					time: 3e3,
					shade: !1,
					resize: !1,
					fixed: !1,
					maxWidth: 210
				}, n))
			}
		},
		s = function(e) {
			var t = this;
			t.index = ++r.index, t.config = i.extend({}, t.config, o.config, e), document.body ? t.creat() : setTimeout(function() {
				t.creat()
			}, 30)
		};
	s.pt = s.prototype;
	var l = ["layui-layer", ".layui-layer-title", ".layui-layer-main", ".layui-layer-dialog", "layui-layer-iframe", "layui-layer-content", "layui-layer-btn", "layui-layer-close"];
	l.anim = ["layer-anim", "layer-anim-01", "layer-anim-02", "layer-anim-03", "layer-anim-04", "layer-anim-05", "layer-anim-06"], s.pt.config = {
		type: 0,
		shade: .3,
		fixed: !0,
		move: l[1],
		title: "&#x4FE1;&#x606F;",
		offset: "auto",
		area: "auto",
		closeBtn: 1,
		time: 0,
		zIndex: 19891014,
		maxWidth: 360,
		anim: 0,
		isOutAnim: !0,
		icon: -1,
		moveType: 1,
		resize: !0,
		scrollbar: !0,
		tips: 2
	}, s.pt.vessel = function(e, t) {
		var n = this,
			a = n.index,
			r = n.config,
			s = r.zIndex + a,
			f = "object" == typeof r.title,
			c = r.maxmin && (1 === r.type || 2 === r.type),
			// 尝试给标题添加logo
			u = r.title ? '<div class="layui-layer-title" style="' + (f ? r.title[1] : "") + '">' + (f ? r.title[0] : r.title) + "</div>" : "";
		return r.zIndex = s, t([r.shade ? '<div class="layui-layer-shade" id="layui-layer-shade' + a + '" times="' + a + '" style="' + ("z-index:" + (s - 1) + "; background-color:" + (r.shade[1] || "#000") + "; opacity:" + (r.shade[0] || r.shade) + "; filter:alpha(opacity=" + (100 * r.shade[0] || 100 * r.shade) + ");") + '"></div>' : "", '<div class="' + l[0] + (" layui-layer-" + o.type[r.type]) + (0 != r.type && 2 != r.type || r.shade ? "" : " layui-layer-border") + " " + (r.skin || "") + '" id="' + l[0] + a + '" type="' + o.type[r.type] + '" times="' + a + '" showtime="' + r.time + '" conType="' + (e ? "object" : "string") + '" style="z-index: ' + s + "; width:" + r.area[0] + ";height:" + r.area[1] + (r.fixed ? "" : ";position:absolute;") + '">' + (e && 2 != r.type ? "" : u) + '<div id="' + (r.id || "") + '" class="layui-layer-content' + (0 == r.type && r.icon !== -1 ? " layui-layer-padding" : "") + (3 == r.type ? " layui-layer-loading" + r.icon : "") + '">' + (0 == r.type && r.icon !== -1 ? '<i class="layui-layer-ico layui-layer-ico' + r.icon + '"></i>' : "") + (1 == r.type && e ? "" : r.content || "") + '</div><span class="layui-layer-setwin">' + function() {
			var e = c ? '<a class="layui-layer-min" href="javascript:;"><cite></cite></a><a class="layui-layer-ico layui-layer-max" href="javascript:;"></a>' : "";
			return r.closeBtn && (e += '<a class="layui-layer-ico ' + l[7] + " " + l[7] + (r.title ? r.closeBtn : 4 == r.type ? "1" : "2") + '" href="javascript:;"></a>'), e
		}() + "</span>" + (r.btn ? function() {
			var e = "";
			"string" == typeof r.btn && (r.btn = [r.btn]);
			for(var t = 0, i = r.btn.length; t < i; t++) e += '<a class="' + l[6] + t + '">' + r.btn[t] + "</a>";
			return '<div class="' + l[6] + " layui-layer-btn-" + (r.btnAlign || "") + '">' + e + "</div>"
		}() : "") + (r.resize ? '<span class="layui-layer-resize"></span>' : "") + "</div>"], u, i('<div class="layui-layer-move"></div>')), n
	}, s.pt.creat = function() {
		var e = this,
			t = e.config,
			a = e.index,
			s = t.content,
			f = "object" == typeof s,
			c = i("body");
		if(!t.id || !i("#" + t.id)[0]) {
			switch("string" == typeof t.area && (t.area = "auto" === t.area ? ["", ""] : [t.area, ""]), t.shift && (t.anim = t.shift), 6 == r.ie && (t.fixed = !1), t.type) {
				case 0:
					t.btn = "btn" in t ? t.btn : o.btn[0], r.closeAll("dialog");
					break;
				case 2:
					var s = t.content = f ? t.content : [t.content || "http://layer.layui.com", "auto"];
					t.content = '<iframe scrolling="' + (t.content[1] || "auto") + '" allowtransparency="true" id="' + l[4] + a + '" name="' + l[4] + a + '" onload="this.className=\'\';" class="layui-layer-load" frameborder="0" src="' + t.content[0] + '"></iframe>';
					break;
				case 3:
					delete t.title, delete t.closeBtn, t.icon === -1 && 0 === t.icon, r.closeAll("loading");
					break;
				case 4:
					f || (t.content = [t.content, "body"]), t.follow = t.content[1], t.content = t.content[0] + '<i class="layui-layer-TipsG"></i>', delete t.title, t.tips = "object" == typeof t.tips ? t.tips : [t.tips, !0], t.tipsMore || r.closeAll("tips")
			}
			e.vessel(f, function(n, r, u) {
				c.append(n[0]), f ? function() {
					2 == t.type || 4 == t.type ? function() {
						i("body").append(n[1])
					}() : function() {
						s.parents("." + l[0])[0] || (s.data("display", s.css("display")).show().addClass("layui-layer-wrap").wrap(n[1]), i("#" + l[0] + a).find("." + l[5]).before(r))
					}()
				}() : c.append(n[1]), i(".layui-layer-move")[0] || c.append(o.moveElem = u), e.layero = i("#" + l[0] + a), t.scrollbar || l.html.css("overflow", "hidden").attr("layer-full", a)
			}).auto(a), 2 == t.type && 6 == r.ie && e.layero.find("iframe").attr("src", s[0]), 4 == t.type ? e.tips() : e.offset(), t.fixed && n.on("resize", function() {
				e.offset(), (/^\d+%$/.test(t.area[0]) || /^\d+%$/.test(t.area[1])) && e.auto(a), 4 == t.type && e.tips()
			}), t.time <= 0 || setTimeout(function() {
				r.close(e.index)
			}, t.time), e.move().callback(), l.anim[t.anim] && e.layero.addClass(l.anim[t.anim]), t.isOutAnim && e.layero.data("isOutAnim", !0)
		}
	}, s.pt.auto = function(e) {
		function t(e) {
			e = s.find(e), e.height(f[1] - c - u - 2 * (0 | parseFloat(e.css("padding-top"))))
		}
		var a = this,
			o = a.config,
			s = i("#" + l[0] + e);
		"" === o.area[0] && o.maxWidth > 0 && (r.ie && r.ie < 8 && o.btn && s.width(s.innerWidth()), s.outerWidth() > o.maxWidth && s.width(o.maxWidth));
		var f = [s.innerWidth(), s.innerHeight()],
			c = s.find(l[1]).outerHeight() || 0,
			u = s.find("." + l[6]).outerHeight() || 0;
		switch(o.type) {
			case 2:
				t("iframe");
				break;
			default:
				"" === o.area[1] ? o.fixed && f[1] >= n.height() && (f[1] = n.height(), t("." + l[5])) : t("." + l[5])
		}
		return a
	}, s.pt.offset = function() {
		var e = this,
			t = e.config,
			i = e.layero,
			a = [i.outerWidth(), i.outerHeight()],
			o = "object" == typeof t.offset;
		e.offsetTop = (n.height() - a[1]) / 2, e.offsetLeft = (n.width() - a[0]) / 2, o ? (e.offsetTop = t.offset[0], e.offsetLeft = t.offset[1] || e.offsetLeft) : "auto" !== t.offset && ("t" === t.offset ? e.offsetTop = 0 : "r" === t.offset ? e.offsetLeft = n.width() - a[0] : "b" === t.offset ? e.offsetTop = n.height() - a[1] : "l" === t.offset ? e.offsetLeft = 0 : "lt" === t.offset ? (e.offsetTop = 0, e.offsetLeft = 0) : "lb" === t.offset ? (e.offsetTop = n.height() - a[1], e.offsetLeft = 0) : "rt" === t.offset ? (e.offsetTop = 0, e.offsetLeft = n.width() - a[0]) : "rb" === t.offset ? (e.offsetTop = n.height() - a[1], e.offsetLeft = n.width() - a[0]) : e.offsetTop = t.offset), t.fixed || (e.offsetTop = /%$/.test(e.offsetTop) ? n.height() * parseFloat(e.offsetTop) / 100 : parseFloat(e.offsetTop), e.offsetLeft = /%$/.test(e.offsetLeft) ? n.width() * parseFloat(e.offsetLeft) / 100 : parseFloat(e.offsetLeft), e.offsetTop += n.scrollTop(), e.offsetLeft += n.scrollLeft()), i.attr("minLeft") && (e.offsetTop = n.height() - (i.find(l[1]).outerHeight() || 0), e.offsetLeft = i.css("left")), i.css({
			top: e.offsetTop,
			left: e.offsetLeft
		})
	}, s.pt.tips = function() {
		var e = this,
			t = e.config,
			a = e.layero,
			o = [a.outerWidth(), a.outerHeight()],
			r = i(t.follow);
		r[0] || (r = i("body"));
		var s = {
				width: r.outerWidth(),
				height: r.outerHeight(),
				top: r.offset().top,
				left: r.offset().left
			},
			f = a.find(".layui-layer-TipsG"),
			c = t.tips[0];
		t.tips[1] || f.remove(), s.autoLeft = function() {
			s.left + o[0] - n.width() > 0 ? (s.tipLeft = s.left + s.width - o[0], f.css({
				right: 12,
				left: "auto"
			})) : s.tipLeft = s.left
		}, s.where = [function() {
			s.autoLeft(), s.tipTop = s.top - o[1] - 10, f.removeClass("layui-layer-TipsB").addClass("layui-layer-TipsT").css("border-right-color", t.tips[1])
		}, function() {
			s.tipLeft = s.left + s.width + 10, s.tipTop = s.top, f.removeClass("layui-layer-TipsL").addClass("layui-layer-TipsR").css("border-bottom-color", t.tips[1])
		}, function() {
			s.autoLeft(), s.tipTop = s.top + s.height + 10, f.removeClass("layui-layer-TipsT").addClass("layui-layer-TipsB").css("border-right-color", t.tips[1])
		}, function() {
			s.tipLeft = s.left - o[0] - 10, s.tipTop = s.top, f.removeClass("layui-layer-TipsR").addClass("layui-layer-TipsL").css("border-bottom-color", t.tips[1])
		}], s.where[c - 1](), 1 === c ? s.top - (n.scrollTop() + o[1] + 16) < 0 && s.where[2]() : 2 === c ? n.width() - (s.left + s.width + o[0] + 16) > 0 || s.where[3]() : 3 === c ? s.top - n.scrollTop() + s.height + o[1] + 16 - n.height() > 0 && s.where[0]() : 4 === c && o[0] + 16 - s.left > 0 && s.where[1](), a.find("." + l[5]).css({
			"background-color": t.tips[1],
			"padding-right": t.closeBtn ? "30px" : ""
		}), a.css({
			left: s.tipLeft - (t.fixed ? n.scrollLeft() : 0),
			top: s.tipTop - (t.fixed ? n.scrollTop() : 0)
		})
	}, s.pt.move = function() {
		var e = this,
			t = e.config,
			a = i(document),
			s = e.layero,
			l = s.find(t.move),
			f = s.find(".layui-layer-resize"),
			c = {};
		return t.move && l.css("cursor", "move"), l.on("mousedown", function(e) {
			e.preventDefault(), t.move && (c.moveStart = !0, c.offset = [e.clientX - parseFloat(s.css("left")), e.clientY - parseFloat(s.css("top"))], o.moveElem.css("cursor", "move").show())
		}), f.on("mousedown", function(e) {
			e.preventDefault(), c.resizeStart = !0, c.offset = [e.clientX, e.clientY], c.area = [s.outerWidth(), s.outerHeight()], o.moveElem.css("cursor", "se-resize").show()
		}), a.on("mousemove", function(i) {
			if(c.moveStart) {
				var a = i.clientX - c.offset[0],
					o = i.clientY - c.offset[1],
					l = "fixed" === s.css("position");
				if(i.preventDefault(), c.stX = l ? 0 : n.scrollLeft(), c.stY = l ? 0 : n.scrollTop(), !t.moveOut) {
					var f = n.width() - s.outerWidth() + c.stX,
						u = n.height() - s.outerHeight() + c.stY;
					a < c.stX && (a = c.stX), a > f && (a = f), o < c.stY && (o = c.stY), o > u && (o = u)
				}
				s.css({
					left: a,
					top: o
				})
			}
			if(t.resize && c.resizeStart) {
				var a = i.clientX - c.offset[0],
					o = i.clientY - c.offset[1];
				i.preventDefault(), r.style(e.index, {
					width: c.area[0] + a,
					height: c.area[1] + o
				}), c.isResize = !0, t.resizing && t.resizing(s)
			}
		}).on("mouseup", function(e) {
			c.moveStart && (delete c.moveStart, o.moveElem.hide(), t.moveEnd && t.moveEnd(s)), c.resizeStart && (delete c.resizeStart, o.moveElem.hide())
		}), e
	}, s.pt.callback = function() {
		function e() {
			var e = a.cancel && a.cancel(t.index, n);
			e === !1 || r.close(t.index)
		}
		var t = this,
			n = t.layero,
			a = t.config;
		t.openLayer(), a.success && (2 == a.type ? n.find("iframe").on("load", function() {
			a.success(n, t.index)
		}) : a.success(n, t.index)), 6 == r.ie && t.IE6(n), n.find("." + l[6]).children("a").on("click", function() {
			var e = i(this).index();
			if(0 === e) a.yes ? a.yes(t.index, n) : a.btn1 ? a.btn1(t.index, n) : r.close(t.index);
			else {
				var o = a["btn" + (e + 1)] && a["btn" + (e + 1)](t.index, n);
				o === !1 || r.close(t.index)
			}
		}), n.find("." + l[7]).on("click", e), a.shadeClose && i("#layui-layer-shade" + t.index).on("click", function() {
			r.close(t.index)
		}), n.find(".layui-layer-min").on("click", function() {
			var e = a.min && a.min(n);
			e === !1 || r.min(t.index, a)
		}), n.find(".layui-layer-max").on("click", function() {
			i(this).hasClass("layui-layer-maxmin") ? (r.restore(t.index), a.restore && a.restore(n)) : (r.full(t.index, a), setTimeout(function() {
				a.full && a.full(n)
			}, 100))
		}), a.end && (o.end[t.index] = a.end)
	}, o.reselect = function() {
		i.each(i("select"), function(e, t) {
			var n = i(this);
			n.parents("." + l[0])[0] || 1 == n.attr("layer") && i("." + l[0]).length < 1 && n.removeAttr("layer").show(), n = null
		})
	}, s.pt.IE6 = function(e) {
		i("select").each(function(e, t) {
			var n = i(this);
			n.parents("." + l[0])[0] || "none" === n.css("display") || n.attr({
				layer: "1"
			}).hide(), n = null
		})
	}, s.pt.openLayer = function() {
		var e = this;
		r.zIndex = e.config.zIndex, r.setTop = function(e) {
			var t = function() {
				r.zIndex++, e.css("z-index", r.zIndex + 1)
			};
			return r.zIndex = parseInt(e[0].style.zIndex), e.on("mousedown", t), r.zIndex
		}
	}, o.record = function(e) {
		var t = [e.width(), e.height(), e.position().top, e.position().left + parseFloat(e.css("margin-left"))];
		e.find(".layui-layer-max").addClass("layui-layer-maxmin"), e.attr({
			area: t
		})
	}, o.rescollbar = function(e) {
		l.html.attr("layer-full") == e && (l.html[0].style.removeProperty ? l.html[0].style.removeProperty("overflow") : l.html[0].style.removeAttribute("overflow"), l.html.removeAttr("layer-full"))
	}, e.layer = r, r.getChildFrame = function(e, t) {
		return t = t || i("." + l[4]).attr("times"), i("#" + l[0] + t).find("iframe").contents().find(e)
	}, r.getFrameIndex = function(e) {
		return i("#" + e).parents("." + l[4]).attr("times")
	}, r.iframeAuto = function(e) {
		if(e) {
			var t = r.getChildFrame("html", e).outerHeight(),
				n = i("#" + l[0] + e),
				a = n.find(l[1]).outerHeight() || 0,
				o = n.find("." + l[6]).outerHeight() || 0;
			n.css({
				height: t + a + o
			}), n.find("iframe").css({
				height: t
			})
		}
	}, r.iframeSrc = function(e, t) {
		i("#" + l[0] + e).find("iframe").attr("src", t)
	}, r.style = function(e, t, n) {
		var a = i("#" + l[0] + e),
			r = a.find(".layui-layer-content"),
			s = a.attr("type"),
			f = a.find(l[1]).outerHeight() || 0,
			c = a.find("." + l[6]).outerHeight() || 0;
		a.attr("minLeft");
		s !== o.type[3] && s !== o.type[4] && (n || (parseFloat(t.width) <= 260 && (t.width = 260), parseFloat(t.height) - f - c <= 64 && (t.height = 64 + f + c)), a.css(t), c = a.find("." + l[6]).outerHeight(), s === o.type[2] ? a.find("iframe").css({
			height: parseFloat(t.height) - f - c
		}) : r.css({
			height: parseFloat(t.height) - f - c - parseFloat(r.css("padding-top")) - parseFloat(r.css("padding-bottom"))
		}))
	}, r.min = function(e, t) {
		var a = i("#" + l[0] + e),
			s = a.find(l[1]).outerHeight() || 0,
			f = a.attr("minLeft") || 181 * o.minIndex + "px",
			c = a.css("position");
		o.record(a), o.minLeft[0] && (f = o.minLeft[0], o.minLeft.shift()), a.attr("position", c), r.style(e, {
			width: 180,
			height: s,
			left: f,
			top: n.height() - s,
			position: "fixed",
			overflow: "hidden"
		}, !0), a.find(".layui-layer-min").hide(), "page" === a.attr("type") && a.find(l[4]).hide(), o.rescollbar(e), a.attr("minLeft") || o.minIndex++, a.attr("minLeft", f)
	}, r.restore = function(e) {
		var t = i("#" + l[0] + e),
			n = t.attr("area").split(",");
		t.attr("type");
		r.style(e, {
			width: parseFloat(n[0]),
			height: parseFloat(n[1]),
			top: parseFloat(n[2]),
			left: parseFloat(n[3]),
			position: t.attr("position"),
			overflow: "visible"
		}, !0), t.find(".layui-layer-max").removeClass("layui-layer-maxmin"), t.find(".layui-layer-min").show(), "page" === t.attr("type") && t.find(l[4]).show(), o.rescollbar(e)
	}, r.full = function(e) {
		var t, a = i("#" + l[0] + e);
		o.record(a), l.html.attr("layer-full") || l.html.css("overflow", "hidden").attr("layer-full", e), clearTimeout(t), t = setTimeout(function() {
			var t = "fixed" === a.css("position");
			r.style(e, {
				top: t ? 0 : n.scrollTop(),
				left: t ? 0 : n.scrollLeft(),
				width: n.width(),
				height: n.height()
			}, !0), a.find(".layui-layer-min").hide()
		}, 100)
	}, r.title = function(e, t) {
		var n = i("#" + l[0] + (t || r.index)).find(l[1]);
		n.html(e)
	}, r.close = function(e) {
		var t = i("#" + l[0] + e),
			n = t.attr("type"),
			a = "layer-anim-close";
		if(t[0]) {
			var s = "layui-layer-wrap",
				f = function() {
					if(n === o.type[1] && "object" === t.attr("conType")) {
						t.children(":not(." + l[5] + ")").remove();
						for(var a = t.find("." + s), r = 0; r < 2; r++) a.unwrap();
						a.css("display", a.data("display")).removeClass(s)
					} else {
						if(n === o.type[2]) try {
							var f = i("#" + l[4] + e)[0];
							f.contentWindow.document.write(""), f.contentWindow.close(), t.find("." + l[5])[0].removeChild(f)
						} catch(c) {}
						t[0].innerHTML = "", t.remove()
					}
					"function" == typeof o.end[e] && o.end[e](), delete o.end[e]
				};
			t.data("isOutAnim") && t.addClass(a), i("#layui-layer-moves, #layui-layer-shade" + e).remove(), 6 == r.ie && o.reselect(), o.rescollbar(e), t.attr("minLeft") && (o.minIndex--, o.minLeft.push(t.attr("minLeft"))), r.ie && r.ie < 10 || !t.data("isOutAnim") ? f() : setTimeout(function() {
				f()
			}, 200)
		}
	}, r.closeAll = function(e) {
		i.each(i("." + l[0]), function() {
			var t = i(this),
				n = e ? t.attr("type") === e : 1;
			n && r.close(t.attr("times")), n = null
		})
	};
	var f = r.cache || {},
		c = function(e) {
			return f.skin ? " " + f.skin + " " + f.skin + "-" + e : ""
		};
	r.prompt = function(e, t) {
		var a = "";
		if(e = e || {}, "function" == typeof e && (t = e), e.area) {
			var o = e.area;
			a = 'style="width: ' + o[0] + "; height: " + o[1] + ';"', delete e.area
		}
		var s, l = 2 == e.formType ? '<textarea class="layui-layer-input"' + a + ">" + (e.value || "") + "</textarea>" : function() {
				return '<input type="' + (1 == e.formType ? "password" : "text") + '" class="layui-layer-input" value="' + (e.value || "") + '">'
			}(),
			f = e.success;
		return delete e.success, r.open(i.extend({
			type: 1,
			btn: ["&#x786E;&#x5B9A;", "&#x53D6;&#x6D88;"],
			content: l,
			skin: "layui-layer-prompt" + c("prompt"),
			maxWidth: n.width(),
			success: function(e) {
				s = e.find(".layui-layer-input"), s.focus(), "function" == typeof f && f(e)
			},
			resize: !1,
			yes: function(i) {
				var n = s.val();
				"" === n ? s.focus() : n.length > (e.maxlength || 500) ? r.tips("&#x6700;&#x591A;&#x8F93;&#x5165;" + (e.maxlength || 500) + "&#x4E2A;&#x5B57;&#x6570;", s, {
					tips: 1
				}) : t && t(n, i, s)
			}
		}, e))
	}, r.tab = function(e) {
		e = e || {};
		var t = e.tab || {},
			n = e.success;
		return delete e.success, r.open(i.extend({
			type: 1,
			skin: "layui-layer-tab" + c("tab"),
			resize: !1,
			title: function() {
				var e = t.length,
					i = 1,
					n = "";
				if(e > 0)
					for(n = '<span class="layui-layer-tabnow">' + t[0].title + "</span>"; i < e; i++) n += "<span>" + t[i].title + "</span>";
				return n
			}(),
			content: '<ul class="layui-layer-tabmain">' + function() {
				var e = t.length,
					i = 1,
					n = "";
				if(e > 0)
					for(n = '<li class="layui-layer-tabli xubox_tab_layer">' + (t[0].content || "no content") + "</li>"; i < e; i++) n += '<li class="layui-layer-tabli">' + (t[i].content || "no  content") + "</li>";
				return n
			}() + "</ul>",
			success: function(t) {
				var a = t.find(".layui-layer-title").children(),
					o = t.find(".layui-layer-tabmain").children();
				a.on("mousedown", function(t) {
					t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0;
					var n = i(this),
						a = n.index();
					n.addClass("layui-layer-tabnow").siblings().removeClass("layui-layer-tabnow"), o.eq(a).show().siblings().hide(), "function" == typeof e.change && e.change(a)
				}), "function" == typeof n && n(t)
			}
		}, e))
	}, r.photos = function(t, n, a) {
		function o(e, t, i) {
			var n = new Image;
			return n.src = e, n.complete ? t(n) : (n.onload = function() {
				n.onload = null, t(n)
			}, void(n.onerror = function(e) {
				n.onerror = null, i(e)
			}))
		}
		var s = {};
		if(t = t || {}, t.photos) {
			var l = t.photos.constructor === Object,
				f = l ? t.photos : {},
				u = f.data || [],
				d = f.start || 0;
			s.imgIndex = (0 | d) + 1, t.img = t.img || "img";
			var y = t.success;
			if(delete t.success, l) {
				if(0 === u.length) return r.msg("&#x6CA1;&#x6709;&#x56FE;&#x7247;")
			} else {
				var p = i(t.photos),
					h = function() {
						u = [], p.find(t.img).each(function(e) {
							var t = i(this);
							t.attr("layer-index", e), u.push({
								alt: t.attr("alt"),
								pid: t.attr("layer-pid"),
								src: t.attr("layer-src") || t.attr("src"),
								thumb: t.attr("src")
							})
						})
					};
				if(h(), 0 === u.length) return;
				if(n || p.on("click", t.img, function() {
						var e = i(this),
							n = e.attr("layer-index");
						r.photos(i.extend(t, {
							photos: {
								start: n,
								data: u,
								tab: t.tab
							},
							full: t.full
						}), !0), h()
					}), !n) return
			}
			s.imgprev = function(e) {
				s.imgIndex--, s.imgIndex < 1 && (s.imgIndex = u.length), s.tabimg(e)
			}, s.imgnext = function(e, t) {
				s.imgIndex++, s.imgIndex > u.length && (s.imgIndex = 1, t) || s.tabimg(e)
			}, s.keyup = function(e) {
				if(!s.end) {
					var t = e.keyCode;
					e.preventDefault(), 37 === t ? s.imgprev(!0) : 39 === t ? s.imgnext(!0) : 27 === t && r.close(s.index)
				}
			}, s.tabimg = function(e) {
				if(!(u.length <= 1)) return f.start = s.imgIndex - 1, r.close(s.index), r.photos(t, !0, e)
			}, s.event = function() {
				s.bigimg.hover(function() {
					s.imgsee.show()
				}, function() {
					s.imgsee.hide()
				}), s.bigimg.find(".layui-layer-imgprev").on("click", function(e) {
					e.preventDefault(), s.imgprev()
				}), s.bigimg.find(".layui-layer-imgnext").on("click", function(e) {
					e.preventDefault(), s.imgnext()
				}), i(document).on("keyup", s.keyup)
			}, s.loadi = r.load(1, {
				shade: !("shade" in t) && .9,
				scrollbar: !1
			}), o(u[d].src, function(n) {
				r.close(s.loadi), s.index = r.open(i.extend({
					type: 1,
					id: "layui-layer-photos",
					area: function() {
						var a = [n.width, n.height],
							o = [i(e).width() - 100, i(e).height() - 100];
						if(!t.full && (a[0] > o[0] || a[1] > o[1])) {
							var r = [a[0] / o[0], a[1] / o[1]];
							r[0] > r[1] ? (a[0] = a[0] / r[0], a[1] = a[1] / r[0]) : r[0] < r[1] && (a[0] = a[0] / r[1], a[1] = a[1] / r[1])
						}
						return [a[0] + "px", a[1] + "px"]
					}(),
					title: !1,
					shade: .9,
					shadeClose: !0,
					closeBtn: !1,
					move: ".layui-layer-phimg img",
					moveType: 1,
					scrollbar: !1,
					moveOut: !0,
					isOutAnim: !1,
					skin: "layui-layer-photos" + c("photos"),
					content: '<div class="layui-layer-phimg"><img src="' + u[d].src + '" alt="' + (u[d].alt || "") + '" layer-pid="' + u[d].pid + '"><div class="layui-layer-imgsee">' + (u.length > 1 ? '<span class="layui-layer-imguide"><a href="javascript:;" class="layui-layer-iconext layui-layer-imgprev"></a><a href="javascript:;" class="layui-layer-iconext layui-layer-imgnext"></a></span>' : "") + '<div class="layui-layer-imgbar" style="display:' + (a ? "block" : "") + '"><span class="layui-layer-imgtit"><a href="javascript:;">' + (u[d].alt || "") + "</a><em>" + s.imgIndex + "/" + u.length + "</em></span></div></div></div>",
					success: function(e, i) {
						s.bigimg = e.find(".layui-layer-phimg"), s.imgsee = e.find(".layui-layer-imguide,.layui-layer-imgbar"), s.event(e), t.tab && t.tab(u[d], e), "function" == typeof y && y(e)
					},
					end: function() {
						s.end = !0, i(document).off("keyup", s.keyup)
					}
				}, t))
			}, function() {
				r.close(s.loadi), r.msg("&#x5F53;&#x524D;&#x56FE;&#x7247;&#x5730;&#x5740;&#x5F02;&#x5E38;<br>&#x662F;&#x5426;&#x7EE7;&#x7EED;&#x67E5;&#x770B;&#x4E0B;&#x4E00;&#x5F20;&#xFF1F;", {
					time: 3e4,
					btn: ["&#x4E0B;&#x4E00;&#x5F20;", "&#x4E0D;&#x770B;&#x4E86;"],
					yes: function() {
						u.length > 1 && s.imgnext(!0, !0)
					}
				})
			})
		}
	}, o.run = function(t) {
		i = t, n = i(e), l.html = i("html"), r.open = function(e) {
			var t = new s(e);
			return t.index
		}
	}, e.layui && layui.define ? (r.ready(), layui.define("jquery", function(t) {
		r.path = layui.cache.dir, o.run(layui.jquery), e.layer = r, t("layer", r)
	})) : "function" == typeof define && define.amd ? define(["jquery"], function() {
		return o.run(e.jQuery), r
	}) : function() {
		o.run(e.jQuery), r.ready()
	}()
}(window);



/*参数数组：1. 显示文字(content) [必选]
			 2. 类型 info 警告  错误 成功 失败 询问 输入(0 1 2 3 4 5)  | 超过范围的按默认皮肤加载
			 3. 按钮组 (0 1 2 [自定义数组] ) | 自定义按钮支持数组和单个字符串 | 超出0 1 2 范围则按字符串处理
			 4. 标题 (string  | '' | false)
1个参数时，指定:内容[string],简单的tips，没有按钮和标题
2个参数时，指定:内容[string]、类型[Number],有标提，除了确认和输入情况有按钮，其他均没有按钮
3个参数时，指定:内容[string]、类型[Number]、按钮[Number | 数组(自定义按钮)]
4个参数时，指定:内容[string]、类型[Number]、按钮[Number | 数组(自定义按钮)]、标题[string  | '' | false]
	回调返回参数：自己传入的参数+index(弹窗编号可用于关闭)+当前弹窗对象+输入框输入value(只有输入弹窗，类型6的才有此返回值)
	该方法对输入框弹窗做了简单封装，如果是输入框，则点击确定会返回第一次输入的value
*/
/**
 * 参数为对象时：对象属性包括：content | type | btn | callback | title | time | skin | closeBtn |shadeClose | anim 
 * @type {Object}
 */
/*var pop = {type:0,skin:"yj-info",closeBtn:1,title:"是是是",shadeClose:false,time:"asas",btn:1,anim:5,callback:[[cback1,{para：para,para2：para2,para3：para3}],cback2],content:'我只是一个打酱油的'};*/
function tips(){
	var retype = 0;				//返回值，0代表不需要操作，没有点击
	var gettype=Object.prototype.toString;
	var infomation;				//显示内容
	var infotype;				//类型
	var btnGroup;				//按钮组
	var callback;				//回调函数?
	var title;					//标题
	var time =0;				//定时关闭?
	var skin = 'yj-default';	//皮肤
	var closeBtn = 1;			//关闭按钮
	var shadeClose = false;		//点击阴影关闭
	var anim = 0;				//动画?
	
	var arrpara1 = new Array();	//参数数组：用于存放参数
	var arrpara2 = new Array();	//按钮2的参数数组
	var arrpara3 = new Array();	//按钮3的参数数组
	var arrpara4 = new Array();	//按钮4的参数数组
	var arrpara5 = new Array();	//按钮5的参数数组 取消按钮
	
	var btn = false;

	var para = arguments[0];							//第一个参数
	if (gettype.call(para) == '[object Object]') {		//参数为对象
		// var pop = {type:0,skin:"yj-info",closeBtn:1,resize:false,title:"",shadeClose:false,time:"",btn:"",anim:"",callback:[],content:''};
		console.log('这是一个对象');
		infomation = para.content;
		infotype = para.type;
		btnGroup = para.btn;
		callback = para.callback;
		title = para.title;
		/*==================================undefined*/
		time = para.time;
		skin = para.skin;
		closeBtn = para.closeBtn;
		shadeClose = para.shadeClose;
		anim = para.anim;
		if (infomation == undefined || infomation == '') {
			tips('弹窗显示内容不能为空，请检查！',2,1,[cback1,cback2],'ERROR');
			return;
		}
		if (infotype == undefined) {
			title = false;
			infotype = -1;
		}
		if (btnGroup == undefined) {
			btnGroup = 0;
		}
		if (callback == undefined && btnGroup != 0) {
			tips('回调函数不能为空，请检查！',2,1,[cback1,cback2],'ERROR');
			return;
		}
		var callb = callback;						//第四个参数：回调函数
		var cb = {};
		if (gettype.call(callb) == '[object Function]') {		//对回调函数参数做判断：单个 or 多个 回调
			cb.fn1 = callb;
		}else if(gettype.call(callb) == '[object Array]') {		//多个,通过数组接收
			console.log(gettype.call(callb[0][0]));
			console.log(callb[0].length);
			//第一个回调
			arrpara1 = callb[0] ? paraTOArr(callb[0][1]) : undefined;			//抽离到单独的方法中，将参数保存到数组      
			cb.fn1 = callb[0];
		    if (callb[0] ? callb[0][0] : false) {
		    	cb.fn1 = callb[0][0];
		    }
		    //第二个回调
		    arrpara2 = callb[1] ? paraTOArr(callb[1][1]) : undefined;
			cb.fn2 = callb[1];
			if (callb[1] ? callb[1][0] : false) {
		    	cb.fn2 = callb[1][0];
		    }
		    //第三个回调
		    arrpara3 = callb[2] ? paraTOArr(callb[2][1]) : undefined;
			cb.fn3 = callb[2];
			if (callb[2] ? callb[2][0] : false) {
		    	cb.fn2 = callb[2][0];
		    }
		    //第四个回调
		    arrpara4 = callb[3] ? paraTOArr(callb[3][1]) : undefined;
			cb.fn4 = callb[3];
			if (callb[3] ? callb[3][0] : false) {
		    	cb.fn2 = callb[3][0];
		    }
		    //第五个回调
		    arrpara5 = paraTOArr(callb[callb.length-1][1]);
			cb.fn = callb[callb.length-1];
			if (callb[callb.length-1] ? callb[callb.length-1][0] : false) {
		    	cb.fn2 = callb[callb.length-1][0];
		    }
		}
	}else {												//参数为其他
		console.log(gettype.call(arguments[5]));		//————————————————————永恒的————————————————————————————分割线

		infomation = para;								//第一个参数：内容
		var infotype = arguments[1];					//skin | content
		var title = '信息';								//标题
		if (arguments[1]==undefined) {					//第二个参数：类型
			title = false;
			infotype = -1;
		}
		var btnGroup = 0;	//按钮组 | 回调函数？
		if (arguments[2]!=undefined) {					//第三个参数：按钮组
			btnGroup =arguments[2];
		}
		var callb = arguments[3];						//第四个参数：回调函数
		var cb = {};									//用于获取回调，并调用
		console.log(gettype.call(callb))
		if (gettype.call(callb) == '[object Function]') {		//对回调函数参数做判断：单个 or 多个 回调
			cb.fn1 = callb;
		}else if(gettype.call(callb) == '[object Array]') {		//多个,通过数组接收
			//第一个回调
			arrpara1 = paraTOArr(callb[0][1]);			//抽离到单独的方法中，将参数保存到数组      
			cb.fn1 = callb[0];
		    if (callb[0][0]) {
		    	cb.fn1 = callb[0][0];
		    }
		    //第二个回调
		    arrpara2 = paraTOArr(callb[1][1]);
			cb.fn2 = callb[1];
			if (callb[1][0]) {
		    	cb.fn2 = callb[1][0];
		    }
		    //第三个回调
		    arrpara3 = paraTOArr(callb[2][1]);
			cb.fn3 = callb[2][0];
			if (callb[2][0]) {
		    	cb.fn2 = callb[2][0];
		    }
		    //第四个回调
		    arrpara4 = paraTOArr(callb[3][1]);
			cb.fn4 = callb[3];
			if (callb[3][0]) {
		    	cb.fn2 = callb[3][0];
		    }
		    //第五个回调
		    arrpara5 = paraTOArr(callb[callb.length-1][1]);
			cb.fn = callb[callb.length-1];
			if (callb[callb.length-1][0]) {
		    	cb.fn2 = callb[callb.length-1][0];
		    }
		}
	}

	//传参数为方法
	/*var fn = {};
	fn.o = arguments[4];
	console.log(gettype.call(arguments[4][0]));*/



	/*样式class属性*/
	var divClass = 'alert-content ';

	if (gettype.call(infotype) != '[object Number]') {
		tips('弹窗类型参数不正确，请检查！',2,1,[cback1,cback2],'ERROR');
		return;
	}
	//皮肤、样式class以及shadeClose
	switch(infotype) {
		case 0:title ='信息';skin = 'yj-info';divClass+='alert-info ';shadeClose = true;anim = 1;break;
        case 1:title ='警告';skin = 'yj-warn';divClass+='alert-warn ';anim = 1;break;
        case 2:title ='错误';skin = 'yj-error';divClass+='alert-error ';anim = 1;break;
        case 3:title ='成功';skin = 'yj-success';divClass+='alert-success ';shadeClose = true;anim = 1;break;
        case 4:title ='失败';skin = 'yj-failure';divClass+='alert-failure ';anim = 1;break;
        case 5:title ='确认';skin = 'yj-comfirm';divClass+='alert-comfirm ';anim = 1;if (arguments[2]==undefined) {btnGroup = 2;};break;
        case 6:title ='请输入';skin = 'yj-input';divClass+='alert-input ';anim = 1;if (arguments[2]==undefined) {btnGroup = 2;};break;
        default :skin = 'yj-default';shadeClose = true;anim = 4;break;
    }
    if (para.anim != undefined) {anim =para.anim;}
	if (arguments[4]!=undefined) {title =arguments[4];}
    //按钮组
    if (para.btn != undefined) {btnGroup = para.btn;}
    if (gettype.call(btnGroup) == '[object Number]') {
	    switch(btnGroup) {
			case 0:btn = false;break;
	        case 1:btn = ['确定'];break;
	        case 2:btn = ['确定','取消'];break;
	        default :btn = btnGroup.toString();
	    }
    }else if(gettype.call(btnGroup) == '[object Array]' || gettype.call(btnGroup) == '[object String]'){
    	btn = btnGroup;
    }else{
    	tips('按钮组参数不正确，请检查！',2,1,[cback1,cback2],'ERROR');
		return;
    }

    //标题栏
   	if (para.title != undefined) {title = para.title;}
    if (title =='' || !title) {//判断标题栏，并修改关闭按钮
    	title = false;
    	shadeClose = true;
    	closeBtn = 0;
    }
    if (title == true) {
    	title = '信息';
    }
    // 判断并绘制圆角
    if (title == false && btn != false) {
    	divClass += 'alert-fillet-top ';
    }
    if (title != false && btn == false) {
    	divClass += 'alert-fillet-bottom ';
    }
    if (title == false && btn == false) {
    	divClass += 'alert-fillet ';
    }
 	if (time == undefined){time = 0;}						// time
	if (para.skin != undefined) {skin = para.skin;}			// skin = para.skin;
	if (closeBtn == undefined) {closeBtn = 1;}				// closeBtn
	if (para.shadeClose != undefined) {shadeClose = para.shadeClose}
	/*if (shadeClose == undefined) {shadeClose = false;}	*/	// shadeClose
	if (anim == undefined) {anim = 2;}						// 动画
	if (gettype.call(time) != '[object Number]') {
		time = 0;
	}
    var style1='';
    var style2='';
    if (btn.length>3) {
		style1 = 'width:350px;height:120px;'
		style2 = 'height:120px;'
	}
    //content内容拼接
    var content = '<div class="'+divClass+'" style="'+style1+'"">'+
				'<div class="alert-img"></div>'+
				'<div class="alert-msg" style="'+style2+'">'+
					'<p class="alert-msg-p">'+infomation+'</p>'+
				'</div>'+
				'<p style="clear:both;"></p>'+
				'</div>';
	
    var isboolean = ((typeof arguments[0] != 'object') && arguments.length == 1) || ((typeof arguments[0] == 'object') && (title == false) && (btn == false));
    if (isboolean) {
    	console.log(999)
    	content = '<div class="'+divClass+'" style="display:table-cell;text-align:center;vertical-align:middle;padding:0 10px;">'+/**display:inline;*zoom:1;*/
    					'<p style="background:none;">'+infomation+'</p>'+
    				'</div>';
    }
    //输入提示弹窗
    if (infotype == 6) {
    	content = '<div class="" style="padding:30px 50px;width:300px;height:100px;">'+
    					'<input type="text" id="input_prompt_value" placeholder="'+para.placeholder+'" style="height:40px;width:200px;color:#bfbfbf;">'+
    				'</div>';
    }

    return openLayer(skin,closeBtn,title,shadeClose,btn,anim,time,content,cb,arrpara1,arrpara2,arrpara3,arrpara4,arrpara5);
    // return retype;

  // 	var index = layer.open({
	 //  	type:1,						//弹窗类型，这里统一为：1
	 //  	skin: skin,					//皮肤
		// closeBtn: closeBtn,			//关闭按钮：0 1 2
		// resize:false,				//是否允许拉伸，默认不允许拉伸
		// title :title,				//标题
		// shadeClose :shadeClose,		//模态
		// btn: btn,					//按钮
		// anim:anim,					//动画？1:从上而下  2：从下而上  3：从左而右   4：左翻转  5：中间  6：抖动
		// time:time,					//定时关闭？
		// yes: function(index, layero){
		// 	if (typeof cb.fn1 == 'function') {
		// 		var lenarr = arrpara1.length;
		// 		arrpara1[lenarr] = index;
		// 		arrpara1[lenarr+1] = layero;
		// 		cb.fn1.apply(null,arrpara1);		//利用apply()方法动态传参
		// 	} else {
		// 		layer.close(index);
		// 		console.log('test回调函数不正确');
		// 		retype = 1;	//点击了第一个按钮
  // 				return retype;
		// 		// tips('回调函数不正确')
		// 	}
		// },
		// btn2: function(index, layero){
		// 	if (typeof cb.fn2 == 'function') {
		// 		var lenarr = arrpara2.length;
		// 		arrpara2[lenarr] = index;
		// 		arrpara2[lenarr+1] = layero;
		// 		cb.fn2.apply(null,arrpara2);
		// 	} else {
		// 		layer.close(index);
		// 		console.log('回调函数不正确');
		// 		// tips('回调函数不正确')
		// 	}
		// },
		// btn3: function(index, layero){
		// 	if (typeof cb.fn3 == 'function') {
		// 		var lenarr = arrpara3.length;
		// 		arrpara3[lenarr] = index;
		// 		arrpara3[lenarr+1] = layero;
		// 		cb.fn3.apply(null,arrpara3);
		// 	} else {
		// 		layer.close(index);
		// 		console.log('回调函数不正确');
		// 		// tips('回调函数不正确')
		// 	}
		// },
		// btn4: function(index, layero){
		// 	if (typeof cb.fn4 == 'function') {
		// 		var lenarr = arrpara4.length;
		// 		arrpara4[lenarr] = index;
		// 		arrpara4[lenarr+1] = layero;
		// 		cb.fn4.apply(null,arrpara4);
		// 	} else {
		// 		layer.close(index);
		// 		console.log('回调函数不正确');
		// 		// tips('回调函数不正确')
		// 	}
		// },
		// cancel: function(index, layero){
		// 	if (typeof cb.fn == 'function') {
		// 		var lenarr = arrpara5.length;
		// 		arrpara5[lenarr] = index;
		// 		arrpara5[lenarr+1] = layero;
		// 		cb.fn.apply(null,arrpara5);
		// 	} else {
		// 		layer.close(index);
		// 		console.log('回调函数不正确');
		// 		// tips('回调函数不正确')
		// 	}
		// },
		// content: content
	 //  });

};

function openLayer(skin,closeBtn,title,shadeClose,btn,anim,time,content,cb,arrpara1,arrpara2,arrpara3,arrpara4,arrpara5){
	var index = layer.open({
	  	type:1,						//弹窗类型，这里统一为：1
	  	skin: skin,					//皮肤
		closeBtn: closeBtn,			//关闭按钮：0 1 2
		resize:false,				//是否允许拉伸，默认不允许拉伸
		title :title,				//标题
		shadeClose :shadeClose,		//模态
		btn: btn,					//按钮
		anim:4,					//动画？1:从上而下  2：从下而上  3：从左而右   4：左翻转  5：中间  6：抖动
		time:time,					//定时关闭？
		yes: function(index, layero){
			if (typeof cb.fn1 == 'function') {
				var lenarr = arrpara1.length;
				arrpara1[lenarr] = index;
				arrpara1[lenarr+1] = layero;
				if ($('#input_prompt_value').val()) {
					arrpara1[lenarr+2] = $('#input_prompt_value').val();
				}
				cb.fn1.apply(null,arrpara1);		//利用apply()方法动态传参
			} else {
				layer.close(index);
				// console.log('test回调函数不正确');
				layer.retype = 1;	//点击了第一个按钮
				return 1;
				// tips('回调函数不正确')
			}
		},
		btn2: function(index, layero){
			if (typeof cb.fn2 == 'function') {
				var lenarr = arrpara2.length;
				arrpara2[lenarr] = index;
				arrpara2[lenarr+1] = layero;
				cb.fn2.apply(null,arrpara2);
			} else {
				layer.close(index);
				console.log('回调函数不正确');
				layer.retype = 2;
				return 2;
				// tips('回调函数不正确')
			}
		},
		btn3: function(index, layero){
			if (typeof cb.fn3 == 'function') {
				var lenarr = arrpara3.length;
				arrpara3[lenarr] = index;
				arrpara3[lenarr+1] = layero;
				cb.fn3.apply(null,arrpara3);
			} else {
				layer.close(index);
				// console.log('回调函数不正确');
				layer.retype = 3;
				return 3;
				// tips('回调函数不正确')
			}
		},
		btn4: function(index, layero){
			if (typeof cb.fn4 == 'function') {
				var lenarr = arrpara4.length;
				arrpara4[lenarr] = index;
				arrpara4[lenarr+1] = layero;
				cb.fn4.apply(null,arrpara4);
			} else {
				layer.close(index);
				// console.log('回调函数不正确');
				layer.retype = 4;
				return 4;
				// tips('回调函数不正确')
			}
		},
		cancel: function(index, layero){
			if (typeof cb.fn == 'function') {
				var lenarr = arrpara5.length;
				arrpara5[lenarr] = index;
				arrpara5[lenarr+1] = layero;
				cb.fn.apply(null,arrpara5);
			} else {
				layer.close(index);
				// console.log('回调函数不正确');
				layer.retype = 0;
				return 0;
				// tips('回调函数不正确')
			}
		},
		content: content
	  });
	return index;
}
/**
 * 将传递进来的对象各属性拆开，并放到数组返回
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
function paraTOArr(callback){				//抽离到单独的方法中，将参数保存到数组
	var arr = new Array();
	var i = 0;     
	for(var name in callback){				//获取传递的参数并将其保存在数组中
		console.log(typeof callback);
		arr[i++] = callback[name];
		console.log(typeof arr[i-1]);
	}
	return arr;
}

function loading(){
	layer.msg('努力加载中', {
	  icon: 16,
	  shade: 0.01	
	});
}

