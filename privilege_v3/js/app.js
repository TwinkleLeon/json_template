webpackJsonp([4],{

/***/ "0lA4":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "WydO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export wxJsConf */
/* unused harmony export isWxJsReady */
/* unused harmony export checkIdCard */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return setCookie; });
/* unused harmony export delCookie */
/* unused harmony export getParameter */
/* unused harmony export request */
/* unused harmony export browser */
/* unused harmony export scrollFix */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return initShareMenu; });
/* unused harmony export eventType */
/* unused harmony export antiClickTransparent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isMobile; });
/* unused harmony export isEmail */
/* unused harmony export getResourceCompleteTime */
/**
 * 获取对应key的cookies值
 * 没有则返回空字符串
 * @param  {String} key 要获取的key值
 */
var getCookie = function getCookie(key) {
	var r = new RegExp('(?:^|;+|\\s+)' + key + '=([^;]*)'),
	    m = document.cookie.match(r);
	return !m ? '' : m[1];
};
var setCookie = function setCookie(name, value, expires, path, domain, secure) {
	console.log("setCookie");
	//写入COOKIES
	var exp = new Date();
	expires = arguments[2] || null, path = arguments[3] || "/";
	domain = arguments[4] || null;
	secure = arguments[5] || false;
	expires ? exp.setMinutes(exp.getMinutes() + parseInt(expires)) : "";
	document.cookie = name + '=' + escape(value) + (expires ? ';expires=' + exp.toGMTString() : '') + (path ? ';path=' + path : '') + (domain ? ';domain=' + domain : '') + (secure ? ';secure' : '');
};
var delCookie = function delCookie(name, path, domain, secure) {
	console.log("delCookie");
	//删除cookie
	var value = getCookie(name);
	if (value != null) {
		var exp = new Date();
		exp.setMinutes(exp.getMinutes() - 1000);
		path = path || "/";
		document.cookie = name + '=;expires=' + exp.toGMTString() + (path ? ';path=' + path : '') + (domain ? ';domain=' + domain : '') + (secure ? ';secure' : '');
	}
};
var getParameter = function getParameter(name, str) {
	str = str || location.href;
	var r = new RegExp("(\\?|#|&)" + name + "=([^&#]*)(&|#|$)"),
	    m = str.match(r);
	return decodeURIComponent(!m ? "" : m[2]);
};
// 浏览器基础信息	
var browser = {
	versions: function () {
		var u = navigator.userAgent,
		    app = navigator.appVersion;
		return {
			trident: u.indexOf('Trident') > -1, //IE内核
			presto: u.indexOf('Presto') > -1, //opera内核
			webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
			gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
			mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
			ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
			android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
			iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
			iPad: u.indexOf('iPad') > -1, //是否iPad
			webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
			weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
			qq: u.match(/\sQQ/i) == " qq" //是否QQ
		};
	}(),
	language: (navigator.browserLanguage || navigator.language).toLowerCase()
};
var scrollFix = function scrollFix(elem) {
	// Variables to track inputs
	var startTopScroll = void 0,
	    noScroll = void 0;

	elem = elem || document.querySelector(elem);

	// If there is no element, then do nothing	
	if (!elem) return;

	// Handle the start of interactions
	elem.addEventListener('touchstart', function () {
		noScroll = elem.scrollHeight <= elem.clientHeight;

		if (!noScroll) {
			startTopScroll = elem.scrollTop;

			if (startTopScroll <= 0) elem.scrollTop = 1;

			if (startTopScroll + elem.offsetHeight >= elem.scrollHeight) elem.scrollTop = elem.scrollHeight - elem.offsetHeight - 1;
		}
	}, false);

	elem.addEventListener('touchmove', function (event) {
		if (noScroll) {
			event.preventDefault();
		}
	});
};
var isMobile = function isMobile(v) {
	if (!/^1[3|4|5|7|8|9][0-9]\d{8}$/.test(v)) {
		return false;
	}
	return v;
};
var isEmail = function isEmail(v) {
	v = $.trim(v);
	var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
	if (reg.test(v)) {
		return v;
	}
	return false;
};
var isWxJsReady = false;
var wxJsConf = function wxJsConf() {
	if (g_sign_package.length == 0 || isWxJsReady) {
		return;
	}
	wx.config({
		debug: false,
		appId: g_sign_package["appId"],
		timestamp: g_sign_package["timestamp"],
		nonceStr: g_sign_package["nonceStr"],
		signature: g_sign_package["signature"],
		jsApiList: ['showMenuItems', 'hideMenuItems', 'onMenuShareTimeline', 'onMenuShareAppMessage', 'uploadImage', 'chooseImage', 'previewImage', 'chooseWXPay']
	});
	wx.ready(function () {
		isWxJsReady = true;
	});
};
var initShareMenu = function initShareMenu(title, desc, link, imgUrl) {
	var successCb = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function () {};
	var cancelCb = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : function () {};

	if (imgUrl && imgUrl.match(/^\/\//)) {
		imgUrl = window.location.protocol + imgUrl;
	}
	wx.showMenuItems({
		menuList: ['menuItem:refresh', 'menuItem:profile', 'menuItem:copyUrl', 'menuItem:share:timeline', 'menuItem:share:appMessage'] // 要显示的菜单项，所有menu项见附录3
	});
	wx.hideMenuItems({
		menuList: ['menuItem:share:qq', 'menuItem:addContact', 'menuItem:share:facebook', 'menuItem:share:QZone', 'menuItem:originPage', 'menuItem:readMode', 'menuItem:openWithQQBrowser', 'menuItem:openWithSafari'] // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
	});
	// 在这里调用 API
	wx.onMenuShareTimeline({
		title: title, // 分享标题
		link: link, // 分享链接
		imgUrl: imgUrl,
		success: function success() {
			// 用户确认分享后执行的回调函数
			// Util.reportEtag("1.2.1.1");
			successCb();
		},
		cancel: function cancel() {
			// 用户取消分享后执行的回调函数
			cancelCb();
		}
	});
	wx.onMenuShareAppMessage({
		title: title, // 分享标题
		desc: desc, // 分享描述
		link: link, // 分享链接
		imgUrl: imgUrl, // 分享图标
		type: '', // 分享类型,music、video或link，不填默认为link
		dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
		success: function success() {
			// 用户确认分享后执行的回调函数
			// Util.reportEtag("1.2.1.2");
			successCb();
		},
		cancel: function cancel() {
			// 用户取消分享后执行的回调函数
			cancelCb();
		}
	});
};
var eventType = "tap";
if (!browser.versions.mobile) {
	eventType = "click";
}
var antiClickTransparent = function antiClickTransparent() {
	if ($("#antiClickTransparent").length == 0) {
		$(document.body).append('<div id="antiClickTransparent" style="position:fixed;opacity:0;left:0;top:0;right:0;bottom:0;z-index:9999;"></div>');
	}
	$("#antiClickTransparent")[0].style.display = "block";
	setTimeout(function () {
		return $("#antiClickTransparent")[0].style.display = "none";
	}, 400);
};
var replace = function replace(str) {
	return str.replace(/＜/g, "<").replace(/＞/g, ">").replace(/＆/g, "&").replace(/＇/g, "'").replace(/＂/g, '"');
};
var getResourceCompleteTime = function getResourceCompleteTime(options) {
	var time = 0,
	    count = 0;
	if (performance && performance.getEntries) {
		var _loop = function _loop(i) {
			performance.getEntries().map(function (item) {
				if (item.name.indexOf(options[i].name) != -1 && item.initiatorType == options[i].type) {
					count++;
					time += item.duration;
				}
			});
			if (count) {
				time = Math.floor(time / count);
			}
		};

		for (var i = 0; i < options.length; i++) {
			_loop(i);
		}
	}
	return time;
};
function checkIdCard(str, type) {
	if (str == null || str == "") {
		return false;
	}
	var rule = void 0;
	if (type == 0) {
		str = str.toUpperCase();
		if (!/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(str)) {
			return false;
		}
		var k, p;
		k = str.length;
		if (k == 15) {
			rule = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);
			var splitstr = str.match(rule);
			var idDate = new Date("19" + splitstr[2] + "/" + splitstr[3] + "/" + splitstr[4]);
			var f = idDate.getYear() == Number(splitstr[2]) && idDate.getMonth() + 1 == Number(splitstr[3]) && (idDate.getDate() == Number(splitstr[4]) || idDate.getDate() == Number(splitstr[4]) - 1);
			if (!f) {
				return false;
			} else {
				return true;
			}
		}
		if (k == 18) {
			rule = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);
			var splitstr = str.match(rule);
			var idDate = new Date(splitstr[2] + "/" + splitstr[3] + "/" + splitstr[4]);
			var f = idDate.getFullYear() == Number(splitstr[2]) && idDate.getMonth() + 1 == Number(splitstr[3]) && (idDate.getDate() == Number(splitstr[4]) || idDate.getDate() == Number(splitstr[4]) - 1);
			if (!f) {
				return false;
			} else {
				var d;

				var m = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
				var n = new Array("1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2");
				var l = 0,
				    h;
				for (h = 0; h < 17; h++) {
					l += str.substr(h, 1) * m[h];
				}

				d = n[l % 11];
				if (d != str.substr(17, 1)) {
					return false;
				}
				return true;
			}
		}
		return false;
	}
	return !/[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/.test(str);
}
console.log('global is load');


/***/ }),

/***/ "aEDl":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "cbRa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: F:/xproject/web/privilege_v3/node_modules/_es6-promise@4.2.4@es6-promise/auto.js
var auto = __webpack_require__("ABOc");
var auto_default = /*#__PURE__*/__webpack_require__.n(auto);

// EXTERNAL MODULE: F:/xproject/web/privilege_v3/node_modules/_vue@2.5.16@vue/dist/vue.common.js
var vue_common = __webpack_require__("0zUc");
var vue_common_default = /*#__PURE__*/__webpack_require__.n(vue_common);

// EXTERNAL MODULE: F:/xproject/web/privilege_v3/node_modules/_vue-router@2.8.1@vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("cigS");

// CONCATENATED MODULE: ./src/js/common/router.js
var detailPage = function detailPage() {
	return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, "8h/L"));
};
var introducePage = function introducePage() {
	return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, "9sRX"));
};
var claimListPage = function claimListPage() {
	return Promise.all/* import() */([__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, "w8rm"));
};

/* harmony default export */ var router = ([{
	path: '/',
	redirect: '/detail'
}, {
	path: '/detail',
	component: detailPage
}, {
	path: '/intro',
	component: introducePage
}, {
	path: "/claimlist",
	component: claimListPage
}]);
// EXTERNAL MODULE: F:/xproject/web/privilege_v3/node_modules/_vuex@2.5.0@vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("HVJf");

// CONCATENATED MODULE: ./src/store/state.js
/* harmony default export */ var state = ({}); //全局state配置
// CONCATENATED MODULE: ./src/store/getters.js
//全局getters配置
/* harmony default export */ var getters = ({});
// CONCATENATED MODULE: ./src/store/actions.js
/* harmony default export */ var actions = ({}); //全局actions配置
// CONCATENATED MODULE: ./src/store/mutations.js
//全局mutations配置
/* harmony default export */ var mutations = ({});
// CONCATENATED MODULE: ./src/store/index.js


 //全局配置
 //全局配置
 //全局配置
 //全局配置
vue_common_default.a.use(vuex_esm["a" /* default */]);
/* harmony default export */ var store = (new vuex_esm["a" /* default */].Store({
	state: state,
	getters: getters,
	actions: actions,
	mutations: mutations,
	modules: {}
}));
// EXTERNAL MODULE: F:/xproject/web/privilege_v3/node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/json/stringify.js
var stringify = __webpack_require__("3cXf");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// EXTERNAL MODULE: F:/xproject/web/privilege_v3/node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__("hRKE");
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// EXTERNAL MODULE: F:/xproject/web/privilege_v3/node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/promise.js
var promise = __webpack_require__("rVsN");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// EXTERNAL MODULE: F:/xproject/web/privilege_v3/node_modules/_axios@0.16.2@axios/index.js
var _axios_0_16_2_axios = __webpack_require__("BMa3");
var _axios_0_16_2_axios_default = /*#__PURE__*/__webpack_require__.n(_axios_0_16_2_axios);

// EXTERNAL MODULE: ./src/js/common/global.js
var global = __webpack_require__("WydO");

// CONCATENATED MODULE: ./src/js/common/prototype.js






vue_common_default.a.prototype.$initShareMenu = global["b" /* initShareMenu */];
vue_common_default.a.prototype.$fetch = function (url, param) {
    var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 8000;

    return new promise_default.a(function (revolved, reject) {
        _axios_0_16_2_axios_default()({
            method: 'post',
            url: url,
            data: param,
            timeout: timeout,
            withCredentials: true,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            transformRequest: [function (data) {
                var ret = [];
                for (var it in data) {
                    if (typeof_default()(data[it]) == "object") {
                        ret.push(encodeURIComponent(it) + '=' + stringify_default()(data[it]));
                    } else {
                        ret.push(encodeURIComponent(it) + '=' + encodeURIComponent(data[it]));
                    }
                }
                return ret.join("&");
            }]
        }).then(function (data) {
            revolved(data.data);
        }).catch(function (e) {
            reject("系统繁忙，请稍后重试");
        });
    });
};
Date.prototype.format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }return fmt;
};
String.prototype.escapeHTML = function () {
    return this.replace(/&/g, "＆").replace(/</g, "＜").replace(/>/g, "＞").replace(/"/g, "＂").replace(/'/g, "＇").replace(/…/g, "...");
};
String.prototype.unescapeHTML = function () {
    return this.replace(/＆/g, "&").replace(/＞/g, ">").replace(/＜/g, "<").replace(/＂/g, '"').replace(/＇/g, "'").replace(/&ldquo;/g, '\"').replace(/&rdquo;/g, '\"').replace(/&hellip;/g, '...').replace(/&middot;/g, '·');
};
//加法函数  
function accAdd(arg1, arg2) {
    var r1, r2, m;
    try {
        r1 = arg1.toString().split(".")[1].length;
    } catch (e) {
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split(".")[1].length;
    } catch (e) {
        r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2));
    return (arg1 * m + arg2 * m) / m;
}
//给Number类型增加一个add方法，，使用时直接用 .add 即可完成计算。   
Number.prototype.add = function (arg) {
    return accAdd(arg, this);
};
//减法函数  
function Subtr(arg1, arg2) {
    var r1, r2, m, n;
    try {
        r1 = arg1.toString().split(".")[1].length;
    } catch (e) {
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split(".")[1].length;
    } catch (e) {
        r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2));
    //last modify by deeka  
    //动态控制精度长度  
    n = r1 >= r2 ? r1 : r2;
    return ((arg1 * m - arg2 * m) / m).toFixed(n);
}
//给Number类型增加一个add方法，，使用时直接用 .sub 即可完成计算。   
Number.prototype.sub = function (arg) {
    return Subtr(this, arg);
};
//乘法函数  
function accMul(arg1, arg2) {
    var m = 0,
        s1 = arg1.toString(),
        s2 = arg2.toString();
    try {
        m += s1.split(".")[1].length;
    } catch (e) {}
    try {
        m += s2.split(".")[1].length;
    } catch (e) {}
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
}
//给Number类型增加一个mul方法，使用时直接用 .mul 即可完成计算。   
Number.prototype.mul = function (arg) {
    return accMul(arg, this);
};
//除法函数  
function accDiv(arg1, arg2) {
    var t1 = 0,
        t2 = 0,
        r1,
        r2;
    try {
        t1 = arg1.toString().split(".")[1].length;
    } catch (e) {}
    try {
        t2 = arg2.toString().split(".")[1].length;
    } catch (e) {}
    r1 = Number(arg1.toString().replace(".", ""));
    r2 = Number(arg2.toString().replace(".", ""));
    return r1 / r2 * Math.pow(10, t2 - t1);
}
//给Number类型增加一个div方法，，使用时直接用 .div 即可完成计算。   
Number.prototype.div = function (arg) {
    return accDiv(this, arg);
};
// EXTERNAL MODULE: F:/xproject/web/privilege_v3/node_modules/_swiper@3.4.2@swiper/dist/css/swiper.css
var swiper = __webpack_require__("aEDl");
var swiper_default = /*#__PURE__*/__webpack_require__.n(swiper);

// EXTERNAL MODULE: ./src/css/common.css
var common = __webpack_require__("0lA4");
var common_default = /*#__PURE__*/__webpack_require__.n(common);

// CONCATENATED MODULE: ./src/js/app.js
//有些库如axios使用原生Promise，故全环境引入Promise支持，但js中的Promise任然使用babel转码








vue_common_default.a.use(vue_router_esm["a" /* default */]);
var app_router = new vue_router_esm["a" /* default */]({
	mode: 'history',
	base: '/privilege/index',
	routes: router
});
// router.beforeEach((to,from,next)=>{
// 	window._detailBegainTime = (new Date()).getTime();
// 	next();
// });
// router.afterEach(route => {
// 	//方便分享加的导航钩子
// 	if( !isWx || !isWxJsReady ){
// 		return ;
// 	}
// 	if( !route.fullPath.match(/^\/index/) && !route.fullPath.match(/^\/detail\//) ){
// 		initShareMenu("小雨伞筹",location.href,location.href,shareIcon);
// 	}
// });
document.body.addEventListener("touchmove", function (e) {
	if (e._prevent) {
		e.preventDefault();
	}
}, { passive: false });
var app = new vue_common_default.a({
	router: app_router,
	store: store
}).$mount('#app');

/***/ })

},["cbRa"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2NvbW1vbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbW1vbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vL0Y6L3hwcm9qZWN0L3dlYi9wcml2aWxlZ2VfdjMvbm9kZV9tb2R1bGVzL19zd2lwZXJAMy40LjJAc3dpcGVyL2Rpc3QvY3NzL3N3aXBlci5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbW1vbi9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3N0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9nZXR0ZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9tdXRhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21tb24vcHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9hcHAuanMiXSwibmFtZXMiOlsiZ2V0Q29va2llIiwia2V5IiwiciIsIlJlZ0V4cCIsIm0iLCJkb2N1bWVudCIsImNvb2tpZSIsIm1hdGNoIiwic2V0Q29va2llIiwibmFtZSIsInZhbHVlIiwiZXhwaXJlcyIsInBhdGgiLCJkb21haW4iLCJzZWN1cmUiLCJjb25zb2xlIiwibG9nIiwiZXhwIiwiRGF0ZSIsImFyZ3VtZW50cyIsInNldE1pbnV0ZXMiLCJnZXRNaW51dGVzIiwicGFyc2VJbnQiLCJlc2NhcGUiLCJ0b0dNVFN0cmluZyIsImRlbENvb2tpZSIsImdldFBhcmFtZXRlciIsInN0ciIsImxvY2F0aW9uIiwiaHJlZiIsImRlY29kZVVSSUNvbXBvbmVudCIsImJyb3dzZXIiLCJ2ZXJzaW9ucyIsInUiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJhcHAiLCJhcHBWZXJzaW9uIiwidHJpZGVudCIsImluZGV4T2YiLCJwcmVzdG8iLCJ3ZWJLaXQiLCJnZWNrbyIsIm1vYmlsZSIsImlvcyIsImFuZHJvaWQiLCJpUGhvbmUiLCJpUGFkIiwid2ViQXBwIiwid2VpeGluIiwicXEiLCJsYW5ndWFnZSIsImJyb3dzZXJMYW5ndWFnZSIsInRvTG93ZXJDYXNlIiwic2Nyb2xsRml4IiwiZWxlbSIsInN0YXJ0VG9wU2Nyb2xsIiwibm9TY3JvbGwiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsInNjcm9sbFRvcCIsIm9mZnNldEhlaWdodCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJpc01vYmlsZSIsInYiLCJ0ZXN0IiwiaXNFbWFpbCIsIiQiLCJ0cmltIiwicmVnIiwiaXNXeEpzUmVhZHkiLCJ3eEpzQ29uZiIsImdfc2lnbl9wYWNrYWdlIiwibGVuZ3RoIiwid3giLCJjb25maWciLCJkZWJ1ZyIsImFwcElkIiwidGltZXN0YW1wIiwibm9uY2VTdHIiLCJzaWduYXR1cmUiLCJqc0FwaUxpc3QiLCJyZWFkeSIsImluaXRTaGFyZU1lbnUiLCJ0aXRsZSIsImRlc2MiLCJsaW5rIiwiaW1nVXJsIiwic3VjY2Vzc0NiIiwiY2FuY2VsQ2IiLCJ3aW5kb3ciLCJwcm90b2NvbCIsInNob3dNZW51SXRlbXMiLCJtZW51TGlzdCIsImhpZGVNZW51SXRlbXMiLCJvbk1lbnVTaGFyZVRpbWVsaW5lIiwic3VjY2VzcyIsImNhbmNlbCIsIm9uTWVudVNoYXJlQXBwTWVzc2FnZSIsInR5cGUiLCJkYXRhVXJsIiwiZXZlbnRUeXBlIiwiYW50aUNsaWNrVHJhbnNwYXJlbnQiLCJib2R5IiwiYXBwZW5kIiwic3R5bGUiLCJkaXNwbGF5Iiwic2V0VGltZW91dCIsInJlcGxhY2UiLCJnZXRSZXNvdXJjZUNvbXBsZXRlVGltZSIsIm9wdGlvbnMiLCJ0aW1lIiwiY291bnQiLCJwZXJmb3JtYW5jZSIsImdldEVudHJpZXMiLCJpIiwibWFwIiwiaXRlbSIsImluaXRpYXRvclR5cGUiLCJkdXJhdGlvbiIsIk1hdGgiLCJmbG9vciIsImNoZWNrSWRDYXJkIiwicnVsZSIsInRvVXBwZXJDYXNlIiwiayIsInAiLCJzcGxpdHN0ciIsImlkRGF0ZSIsImYiLCJnZXRZZWFyIiwiTnVtYmVyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0RnVsbFllYXIiLCJkIiwiQXJyYXkiLCJuIiwibCIsImgiLCJzdWJzdHIiLCJkZXRhaWxQYWdlIiwiaW50cm9kdWNlUGFnZSIsImNsYWltTGlzdFBhZ2UiLCJyZWRpcmVjdCIsImNvbXBvbmVudCIsIlZ1ZSIsInVzZSIsIlZ1ZXgiLCJTdG9yZSIsInN0YXRlIiwiZ2V0dGVycyIsImFjdGlvbnMiLCJtdXRhdGlvbnMiLCJtb2R1bGVzIiwicHJvdG90eXBlIiwiJGluaXRTaGFyZU1lbnUiLCIkZmV0Y2giLCJ1cmwiLCJwYXJhbSIsInRpbWVvdXQiLCJyZXZvbHZlZCIsInJlamVjdCIsIkF4aW9zIiwibWV0aG9kIiwiZGF0YSIsIndpdGhDcmVkZW50aWFscyIsImhlYWRlcnMiLCJ0cmFuc2Zvcm1SZXF1ZXN0IiwicmV0IiwiaXQiLCJwdXNoIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwiam9pbiIsInRoZW4iLCJjYXRjaCIsImZvcm1hdCIsImZtdCIsIm8iLCJnZXRIb3VycyIsImdldFNlY29uZHMiLCJnZXRNaWxsaXNlY29uZHMiLCIkMSIsIlN0cmluZyIsImVzY2FwZUhUTUwiLCJ1bmVzY2FwZUhUTUwiLCJhY2NBZGQiLCJhcmcxIiwiYXJnMiIsInIxIiwicjIiLCJ0b1N0cmluZyIsInNwbGl0IiwiZSIsInBvdyIsIm1heCIsImFkZCIsImFyZyIsIlN1YnRyIiwidG9GaXhlZCIsInN1YiIsImFjY011bCIsInMxIiwiczIiLCJtdWwiLCJhY2NEaXYiLCJ0MSIsInQyIiwiZGl2Iiwicm91dGVyIiwibW9kZSIsImJhc2UiLCJyb3V0ZXMiLCJSb3V0ZXJDb25mIiwiX3ByZXZlbnQiLCJwYXNzaXZlIiwic3RvcmUiLCIkbW91bnQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEseUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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VixFQUFlO0FBQ2xDLFdBQU9RLE9BQU8sSUFBUCxFQUFhUixHQUFiLENBQVA7QUFDSCxDQUZELEM7Ozs7Ozs7Ozs7QUMxSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQUFuRCxDQUFJQyxHQUFKLENBQVEsaUNBQVI7QUFDQSxJQUFNLFVBQUE4RCxHQUFTLElBQUksaUNBQUosQ0FBYztBQUM1QkMsT0FBSyxTQUR1QjtBQUU1QkMsT0FBSyxrQkFGdUI7QUFHMUJDLFNBQU8sTUFBQUM7QUFIbUIsQ0FBZCxDQUFmO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQW5OLFNBQVNxRyxJQUFULENBQWMvQyxnQkFBZCxDQUErQixXQUEvQixFQUEyQyxhQUFHO0FBQzdDLEtBQUl5SSxFQUFFcUIsUUFBTixFQUFnQjtBQUNmckIsSUFBRW5JLGNBQUY7QUFDQTtBQUNELENBSkQsRUFJRSxFQUFDeUosU0FBUyxLQUFWLEVBSkY7QUFLQSxJQUFNdEwsTUFBTSxJQUFJLG9CQUFKLENBQVE7QUFDbkJnTCxTQUFBLFVBRG1CO0FBRW5CTyxRQUFBLEtBQUFBO0FBRm1CLENBQVIsRUFHVEMsTUFIUyxDQUdGLE1BSEUsQ0FBWixDIiwiZmlsZSI6ImpzL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY3NzL2NvbW1vbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDBsQTRcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwiLyoqXG4gKiDojrflj5blr7nlupRrZXnnmoRjb29raWVz5YC8XG4gKiDmsqHmnInliJnov5Tlm57nqbrlrZfnrKbkuLJcbiAqIEBwYXJhbSAge1N0cmluZ30ga2V5IOimgeiOt+WPlueahGtleeWAvFxuICovXG5sZXQgZ2V0Q29va2llID0gZnVuY3Rpb24oa2V5KSB7XG5cdGxldCByID0gbmV3IFJlZ0V4cCgnKD86Xnw7K3xcXFxccyspJyArIGtleSArICc9KFteO10qKScpLFxuXHRcdG0gPSBkb2N1bWVudC5jb29raWUubWF0Y2gocik7XG5cdHJldHVybiAoIW0gPyAnJyA6IG1bMV0pO1xufTtcbmxldCBzZXRDb29raWUgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpIHtcblx0Y29uc29sZS5sb2coXCJzZXRDb29raWVcIik7XG5cdC8v5YaZ5YWlQ09PS0lFU1xuXHRsZXQgZXhwID0gbmV3IERhdGUoKTtcblx0ZXhwaXJlcyA9IGFyZ3VtZW50c1syXSB8fCBudWxsLFxuXHRwYXRoID0gYXJndW1lbnRzWzNdIHx8IFwiL1wiO1xuXHRkb21haW4gPSBhcmd1bWVudHNbNF0gfHwgbnVsbDtcblx0c2VjdXJlID0gYXJndW1lbnRzWzVdIHx8IGZhbHNlO1xuXHRleHBpcmVzID8gZXhwLnNldE1pbnV0ZXMoZXhwLmdldE1pbnV0ZXMoKSArIHBhcnNlSW50KGV4cGlyZXMpKSA6IFwiXCI7XG5cdGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyAnPScgKyBlc2NhcGUodmFsdWUpICsgKCBleHBpcmVzID8gJztleHBpcmVzPScgKyBleHAudG9HTVRTdHJpbmcoKSA6ICcnKSArICggcGF0aCA/ICc7cGF0aD0nICsgcGF0aCA6ICcnKSArICggZG9tYWluID8gJztkb21haW49JyArIGRvbWFpbiA6ICcnKSArICggc2VjdXJlID8gJztzZWN1cmUnIDogJycpO1xufTtcbmxldCBkZWxDb29raWUgPSBmdW5jdGlvbihuYW1lLCBwYXRoLCBkb21haW4sIHNlY3VyZSkge1xuXHRjb25zb2xlLmxvZyhcImRlbENvb2tpZVwiKTtcblx0Ly/liKDpmaRjb29raWVcblx0bGV0IHZhbHVlID0gZ2V0Q29va2llKG5hbWUpO1xuXHRpZih2YWx1ZSAhPSBudWxsKSB7XG5cdFx0bGV0IGV4cCA9IG5ldyBEYXRlKCk7XG5cdFx0ZXhwLnNldE1pbnV0ZXMoZXhwLmdldE1pbnV0ZXMoKSAtIDEwMDApO1xuXHRcdHBhdGggPSBwYXRoIHx8IFwiL1wiO1xuXHRcdGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyAnPTtleHBpcmVzPScgKyBleHAudG9HTVRTdHJpbmcoKSArICggcGF0aCA/ICc7cGF0aD0nICsgcGF0aCA6ICcnKSArICggZG9tYWluID8gJztkb21haW49JyArIGRvbWFpbiA6ICcnKSArICggc2VjdXJlID8gJztzZWN1cmUnIDogJycpO1xuXHR9XG59O1xubGV0IGdldFBhcmFtZXRlciA9IGZ1bmN0aW9uKG5hbWUsc3RyKXtcbiAgICBzdHIgPSBzdHIgfHwgbG9jYXRpb24uaHJlZjtcbiAgICBsZXQgciA9IG5ldyBSZWdFeHAoXCIoXFxcXD98I3wmKVwiICsgbmFtZSArIFwiPShbXiYjXSopKCZ8I3wkKVwiKSwgbSA9IHN0ci5tYXRjaChyKTtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KCFtID8gXCJcIiA6IG1bMl0pO1x0XHRcbn1cbi8vIOa1j+iniOWZqOWfuuehgOS/oeaBr1x0XG5sZXQgYnJvd3Nlcj17XG5cdHZlcnNpb25zOmZ1bmN0aW9uKCl7XG5cdFx0bGV0IHUgPSBuYXZpZ2F0b3IudXNlckFnZW50LCBhcHAgPSBuYXZpZ2F0b3IuYXBwVmVyc2lvbjtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dHJpZGVudDogdS5pbmRleE9mKCdUcmlkZW50JykgPiAtMSwgLy9JReWGheaguFxuXHRcdFx0cHJlc3RvOiB1LmluZGV4T2YoJ1ByZXN0bycpID4gLTEsIC8vb3BlcmHlhoXmoLhcblx0XHRcdHdlYktpdDogdS5pbmRleE9mKCdBcHBsZVdlYktpdCcpID4gLTEsIC8v6Iu55p6c44CB6LC35q2M5YaF5qC4XG5cdFx0XHRnZWNrbzogdS5pbmRleE9mKCdHZWNrbycpID4gLTEgJiYgdS5pbmRleE9mKCdLSFRNTCcpID09IC0xLC8v54Gr54uQ5YaF5qC4XG5cdFx0XHRtb2JpbGU6ICEhdS5tYXRjaCgvQXBwbGVXZWJLaXQuKk1vYmlsZS4qLyksIC8v5piv5ZCm5Li656e75Yqo57uI56uvXG5cdFx0XHRpb3M6ICEhdS5tYXRjaCgvXFwoaVteO10rOyggVTspPyBDUFUuK01hYyBPUyBYLyksIC8vaW9z57uI56uvXG5cdFx0XHRhbmRyb2lkOiB1LmluZGV4T2YoJ0FuZHJvaWQnKSA+IC0xIHx8IHUuaW5kZXhPZignQWRyJykgPiAtMSwgLy9hbmRyb2lk57uI56uvXG5cdFx0XHRpUGhvbmU6IHUuaW5kZXhPZignaVBob25lJykgPiAtMSAsIC8v5piv5ZCm5Li6aVBob25l5oiW6ICFUVFIROa1j+iniOWZqFxuXHRcdFx0aVBhZDogdS5pbmRleE9mKCdpUGFkJykgPiAtMSwgLy/mmK/lkKZpUGFkXG5cdFx0XHR3ZWJBcHA6IHUuaW5kZXhPZignU2FmYXJpJykgPT0gLTEsIC8v5piv5ZCmd2Vi5bqU6K+l56iL5bqP77yM5rKh5pyJ5aS06YOo5LiO5bqV6YOoXG5cdFx0XHR3ZWl4aW46IHUuaW5kZXhPZignTWljcm9NZXNzZW5nZXInKSA+IC0xLCAvL+aYr+WQpuW+ruS/oSDvvIgyMDE1LTAxLTIy5paw5aKe77yJXG5cdFx0XHRxcTogdS5tYXRjaCgvXFxzUVEvaSkgPT0gXCIgcXFcIiAvL+aYr+WQplFRXG5cdFx0fTtcblx0fSgpLFxuXHRsYW5ndWFnZToobmF2aWdhdG9yLmJyb3dzZXJMYW5ndWFnZSB8fCBuYXZpZ2F0b3IubGFuZ3VhZ2UpLnRvTG93ZXJDYXNlKClcbn1cbmxldCBzY3JvbGxGaXggPSBmdW5jdGlvbihlbGVtKSB7XG5cdC8vIFZhcmlhYmxlcyB0byB0cmFjayBpbnB1dHNcblx0bGV0IHN0YXJ0VG9wU2Nyb2xsLCBub1Njcm9sbDtcblx0XG5cdGVsZW0gPSBlbGVtIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbSk7XG5cdFxuXHQvLyBJZiB0aGVyZSBpcyBubyBlbGVtZW50LCB0aGVuIGRvIG5vdGhpbmdcdFxuXHRpZighZWxlbSlcblx0XHRyZXR1cm47XG5cblx0Ly8gSGFuZGxlIHRoZSBzdGFydCBvZiBpbnRlcmFjdGlvbnNcblx0ZWxlbS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24oKXtcblx0XHRub1Njcm9sbCA9IGVsZW0uc2Nyb2xsSGVpZ2h0IDw9IGVsZW0uY2xpZW50SGVpZ2h0O1xuXG5cdFx0aWYoIW5vU2Nyb2xsKXtcblx0XHRcdHN0YXJ0VG9wU2Nyb2xsID0gZWxlbS5zY3JvbGxUb3A7XG5cdFx0XG5cdFx0XHRpZihzdGFydFRvcFNjcm9sbCA8PSAwKVxuXHRcdFx0XHRlbGVtLnNjcm9sbFRvcCA9IDE7XG5cblx0XHRcdGlmKHN0YXJ0VG9wU2Nyb2xsICsgZWxlbS5vZmZzZXRIZWlnaHQgPj0gZWxlbS5zY3JvbGxIZWlnaHQpXG5cdFx0XHRcdGVsZW0uc2Nyb2xsVG9wID0gZWxlbS5zY3JvbGxIZWlnaHQgLSBlbGVtLm9mZnNldEhlaWdodCAtIDE7XG5cdFx0fVxuXHR9LCBmYWxzZSk7XG5cblx0ZWxlbS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBmdW5jdGlvbihldmVudCl7XG5cdFx0aWYobm9TY3JvbGwpe1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR9XG5cdH0pO1xufTtcbmxldCBpc01vYmlsZSA9IGZ1bmN0aW9uKHYpe1xuXHRpZighKC9eMVszfDR8NXw3fDh8OV1bMC05XVxcZHs4fSQvLnRlc3QodikpKXsgXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdHJldHVybiB2O1xufVxubGV0IGlzRW1haWwgPSBmdW5jdGlvbih2KXtcblx0diA9ICQudHJpbSh2KTtcblx0dmFyIHJlZyA9IC9eKFthLXpBLVowLTldK1tffFxcX3xcXC5dPykqW2EtekEtWjAtOV0rQChbYS16QS1aMC05XStbX3xcXF98XFwuXT8pKlthLXpBLVowLTldK1xcLlthLXpBLVpdezIsM30kLztcblx0aWYoIHJlZy50ZXN0KHYpICl7XG5cdFx0cmV0dXJuIHY7XG5cdH1cblx0cmV0dXJuIGZhbHNlO1xufVxubGV0IGlzV3hKc1JlYWR5ID0gZmFsc2U7XG5sZXQgd3hKc0NvbmYgPSBmdW5jdGlvbigpe1xuXHRpZiAoZ19zaWduX3BhY2thZ2UubGVuZ3RoID09IDAgfHwgaXNXeEpzUmVhZHkgKSB7XG5cdCAgICByZXR1cm47XG5cdH1cblx0d3guY29uZmlnKHtcblx0ICAgIGRlYnVnOiBmYWxzZSxcblx0ICAgIGFwcElkOiBnX3NpZ25fcGFja2FnZVtcImFwcElkXCJdLFxuXHQgICAgdGltZXN0YW1wOiBnX3NpZ25fcGFja2FnZVtcInRpbWVzdGFtcFwiXSxcblx0ICAgIG5vbmNlU3RyOiBnX3NpZ25fcGFja2FnZVtcIm5vbmNlU3RyXCJdLFxuXHQgICAgc2lnbmF0dXJlOiBnX3NpZ25fcGFja2FnZVtcInNpZ25hdHVyZVwiXSxcblx0ICAgIGpzQXBpTGlzdDogW1xuXHRcdFx0J3Nob3dNZW51SXRlbXMnLFxuXHRcdFx0J2hpZGVNZW51SXRlbXMnLFxuXHRcdFx0J29uTWVudVNoYXJlVGltZWxpbmUnLFxuXHRcdFx0J29uTWVudVNoYXJlQXBwTWVzc2FnZScsXG5cdFx0XHQndXBsb2FkSW1hZ2UnLFxuXHRcdFx0J2Nob29zZUltYWdlJyxcblx0XHRcdCdwcmV2aWV3SW1hZ2UnLFxuXHRcdFx0J2Nob29zZVdYUGF5J1xuXHQgICAgXVxuXHR9KTtcblx0d3gucmVhZHkoZnVuY3Rpb24gKCkge1xuXHRcdGlzV3hKc1JlYWR5ID0gdHJ1ZTsgICAgICAgICBcblx0fSk7XG59O1xubGV0IGluaXRTaGFyZU1lbnUgPSBmdW5jdGlvbih0aXRsZSxkZXNjLGxpbmssaW1nVXJsLHN1Y2Nlc3NDYiA9ICgpPT57fSxjYW5jZWxDYiA9ICgpPT57fSl7XG5cdGlmKCBpbWdVcmwgJiYgaW1nVXJsLm1hdGNoKC9eXFwvXFwvLykgKXtcblx0XHRpbWdVcmwgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyBpbWdVcmw7XG5cdH0gICAgXG5cdHd4LnNob3dNZW51SXRlbXMoe1xuXHRcdG1lbnVMaXN0OiBbXG5cdFx0ICAgICdtZW51SXRlbTpyZWZyZXNoJyxcblx0XHQgICAgJ21lbnVJdGVtOnByb2ZpbGUnLFxuXHRcdFx0J21lbnVJdGVtOmNvcHlVcmwnLFxuXHRcdFx0J21lbnVJdGVtOnNoYXJlOnRpbWVsaW5lJyxcblx0XHRcdCdtZW51SXRlbTpzaGFyZTphcHBNZXNzYWdlJ1xuXHRcdF0gLy8g6KaB5pi+56S655qE6I+c5Y2V6aG577yM5omA5pyJbWVudemhueingemZhOW9lTNcbiAgICB9KTtcbiAgICB3eC5oaWRlTWVudUl0ZW1zKHtcblx0XHRtZW51TGlzdDogW1xuXHRcdFx0J21lbnVJdGVtOnNoYXJlOnFxJyxcblx0XHRcdCdtZW51SXRlbTphZGRDb250YWN0Jyxcblx0XHQgICAgJ21lbnVJdGVtOnNoYXJlOmZhY2Vib29rJyxcblx0XHQgICAgJ21lbnVJdGVtOnNoYXJlOlFab25lJyxcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgXG5cdFx0ICAgICdtZW51SXRlbTpvcmlnaW5QYWdlJyxcblx0XHQgICAgJ21lbnVJdGVtOnJlYWRNb2RlJyxcblx0XHQgICAgJ21lbnVJdGVtOm9wZW5XaXRoUVFCcm93c2VyJyxcblx0XHQgICAgJ21lbnVJdGVtOm9wZW5XaXRoU2FmYXJpJ1xuXHRcdF0gLy8g6KaB6ZqQ6JeP55qE6I+c5Y2V6aG577yM5Y+q6IO96ZqQ6JeP4oCc5Lyg5pKt57G74oCd5ZKM4oCc5L+d5oqk57G74oCd5oyJ6ZKu77yM5omA5pyJbWVudemhueingemZhOW9lTNcbiAgICB9KTtcbiAgICAvLyDlnKjov5nph4zosIPnlKggQVBJXG4gICAgd3gub25NZW51U2hhcmVUaW1lbGluZSh7XG4gICAgICAgICAgdGl0bGU6IHRpdGxlLCAvLyDliIbkuqvmoIfpophcbiAgICAgICAgICBsaW5rOiBsaW5rLCAvLyDliIbkuqvpk77mjqVcbiAgICAgICAgICBpbWdVcmw6aW1nVXJsLFxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHsgXG4gICAgICAgICAgICAgICAgLy8g55So5oi356Gu6K6k5YiG5Lqr5ZCO5omn6KGM55qE5Zue6LCD5Ye95pWwXG4gICAgICAgICAgICAgICAgLy8gVXRpbC5yZXBvcnRFdGFnKFwiMS4yLjEuMVwiKTtcbiAgICAgICAgICAgICAgICBzdWNjZXNzQ2IoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNhbmNlbDogZnVuY3Rpb24gKCkgeyBcbiAgICAgICAgICAgICAgICAvLyDnlKjmiLflj5bmtojliIbkuqvlkI7miafooYznmoTlm57osIPlh73mlbBcbiAgICAgICAgICAgICAgICBjYW5jZWxDYigpO1xuICAgICAgICAgIH1cbiAgICB9KTtcbiAgICB3eC5vbk1lbnVTaGFyZUFwcE1lc3NhZ2Uoe1xuICAgICAgICAgIHRpdGxlOiB0aXRsZSwgLy8g5YiG5Lqr5qCH6aKYXG4gICAgICAgICAgZGVzYzogZGVzYywgLy8g5YiG5Lqr5o+P6L+wXG4gICAgICAgICAgbGluazogbGluaywgLy8g5YiG5Lqr6ZO+5o6lXG4gICAgICAgICAgaW1nVXJsOmltZ1VybCwgLy8g5YiG5Lqr5Zu+5qCHXG4gICAgICAgICAgdHlwZTogJycsIC8vIOWIhuS6q+exu+WeiyxtdXNpY+OAgXZpZGVv5oiWbGlua++8jOS4jeWhq+m7mOiupOS4umxpbmtcbiAgICAgICAgICBkYXRhVXJsOiAnJywgLy8g5aaC5p6cdHlwZeaYr211c2lj5oiWdmlkZW/vvIzliJnopoHmj5DkvpvmlbDmja7pk77mjqXvvIzpu5jorqTkuLrnqbpcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7IFxuICAgICAgICAgICAgICAgIC8vIOeUqOaIt+ehruiupOWIhuS6q+WQjuaJp+ihjOeahOWbnuiwg+WHveaVsFxuICAgICAgICAgICAgICAgIC8vIFV0aWwucmVwb3J0RXRhZyhcIjEuMi4xLjJcIik7XG4gICAgICAgICAgICAgICAgc3VjY2Vzc0NiKCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjYW5jZWw6IGZ1bmN0aW9uICgpIHsgXG4gICAgICAgICAgICAgICAgLy8g55So5oi35Y+W5raI5YiG5Lqr5ZCO5omn6KGM55qE5Zue6LCD5Ye95pWwXG4gICAgICAgICAgICAgICAgY2FuY2VsQ2IoKTtcbiAgICAgICAgICB9XG4gICAgfSk7ICBcbn07XG5sZXQgZXZlbnRUeXBlID0gXCJ0YXBcIjtcbmlmKCAhYnJvd3Nlci52ZXJzaW9ucy5tb2JpbGUgKXtcblx0ZXZlbnRUeXBlID0gXCJjbGlja1wiO1xufVxubGV0IGFudGlDbGlja1RyYW5zcGFyZW50ID0gKCk9Pntcblx0aWYoICQoXCIjYW50aUNsaWNrVHJhbnNwYXJlbnRcIikubGVuZ3RoID09IDAgKXtcblx0XHQkKGRvY3VtZW50LmJvZHkpLmFwcGVuZCgnPGRpdiBpZD1cImFudGlDbGlja1RyYW5zcGFyZW50XCIgc3R5bGU9XCJwb3NpdGlvbjpmaXhlZDtvcGFjaXR5OjA7bGVmdDowO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7ei1pbmRleDo5OTk5O1wiPjwvZGl2PicpO1xuXHR9XG5cdCQoXCIjYW50aUNsaWNrVHJhbnNwYXJlbnRcIilbMF0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0c2V0VGltZW91dCgoKT0+JChcIiNhbnRpQ2xpY2tUcmFuc3BhcmVudFwiKVswXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIsNDAwKTtcbn07XG5sZXQgcmVwbGFjZSA9IChzdHIpPT57XG5cdHJldHVybiBzdHIucmVwbGFjZSgv77ycL2csXCI8XCIpLnJlcGxhY2UoL++8ni9nLFwiPlwiKS5yZXBsYWNlKC/vvIYvZyxcIiZcIikucmVwbGFjZSgv77yHL2csXCInXCIpLnJlcGxhY2UoL++8gi9nLCdcIicpO1xufTtcbmxldCBnZXRSZXNvdXJjZUNvbXBsZXRlVGltZSA9IChvcHRpb25zKT0+e1xuXHRsZXQgdGltZT0wLGNvdW50PTA7XG5cdGlmKCBwZXJmb3JtYW5jZSAmJiBwZXJmb3JtYW5jZS5nZXRFbnRyaWVzICl7XG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspe1xuXHRcdFx0cGVyZm9ybWFuY2UuZ2V0RW50cmllcygpLm1hcCggKGl0ZW0pID0+IHtcblx0XHRcdFx0aWYoIGl0ZW0ubmFtZS5pbmRleE9mKG9wdGlvbnNbaV0ubmFtZSkgIT0gLTEgJiYgaXRlbS5pbml0aWF0b3JUeXBlID09IG9wdGlvbnNbaV0udHlwZSApe1xuXHRcdFx0XHRcdGNvdW50Kys7XG5cdFx0XHRcdFx0dGltZSArPSBpdGVtLmR1cmF0aW9uO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdGlmKCBjb3VudCApe1xuXHRcdFx0XHR0aW1lID0gIE1hdGguZmxvb3IodGltZS9jb3VudCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0aW1lO1xufVxuZnVuY3Rpb24gY2hlY2tJZENhcmQoc3RyLCB0eXBlKSB7XG4gICAgaWYoc3RyID09IG51bGwgfHwgc3RyID09IFwiXCIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBsZXQgcnVsZTtcbiAgICBpZih0eXBlID09IDApIHtcbiAgICAgICAgc3RyID0gc3RyLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIGlmKCEoLyheXFxkezE1fSQpfCheXFxkezE3fShbMC05XXxYKSQpLy50ZXN0KHN0cikpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGssXG4gICAgICAgICAgICAgICAgcDtcbiAgICAgICAgayA9IHN0ci5sZW5ndGg7XG4gICAgICAgIGlmKGsgPT0gMTUpIHtcbiAgICAgICAgICAgIHJ1bGUgPSBuZXcgUmVnRXhwKC9eKFxcZHs2fSkoXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkoXFxkezN9KSQvKTtcbiAgICAgICAgICAgIHZhciBzcGxpdHN0ciA9IHN0ci5tYXRjaChydWxlKTtcbiAgICAgICAgICAgIHZhciBpZERhdGUgPSBuZXcgRGF0ZShcIjE5XCIgKyBzcGxpdHN0clsyXSArIFwiL1wiICsgc3BsaXRzdHJbM10gKyBcIi9cIiArIHNwbGl0c3RyWzRdKTtcbiAgICAgICAgICAgIHZhciBmID0gKGlkRGF0ZS5nZXRZZWFyKCkgPT0gTnVtYmVyKHNwbGl0c3RyWzJdKSkgJiYgKChpZERhdGUuZ2V0TW9udGgoKSArIDEpID09IE51bWJlcihzcGxpdHN0clszXSkpICYmIChpZERhdGUuZ2V0RGF0ZSgpID09IE51bWJlcihzcGxpdHN0cls0XSkgfHwgKGlkRGF0ZS5nZXREYXRlKCkgPT0gTnVtYmVyKHNwbGl0c3RyWzRdKSAtIDEpKTtcbiAgICAgICAgICAgIGlmKCFmKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKGsgPT0gMTgpIHtcbiAgICAgICAgICAgIHJ1bGUgPSBuZXcgUmVnRXhwKC9eKFxcZHs2fSkoXFxkezR9KShcXGR7Mn0pKFxcZHsyfSkoXFxkezN9KShbMC05XXxYKSQvKTtcbiAgICAgICAgICAgIHZhciBzcGxpdHN0ciA9IHN0ci5tYXRjaChydWxlKTtcbiAgICAgICAgICAgIHZhciBpZERhdGUgPSBuZXcgRGF0ZShzcGxpdHN0clsyXSArIFwiL1wiICsgc3BsaXRzdHJbM10gKyBcIi9cIiArIHNwbGl0c3RyWzRdKTtcbiAgICAgICAgICAgIHZhciBmID0gKGlkRGF0ZS5nZXRGdWxsWWVhcigpID09IE51bWJlcihzcGxpdHN0clsyXSkpICYmICgoaWREYXRlLmdldE1vbnRoKCkgKyAxKSA9PSBOdW1iZXIoc3BsaXRzdHJbM10pKSAmJiAoaWREYXRlLmdldERhdGUoKSA9PSBOdW1iZXIoc3BsaXRzdHJbNF0pIHx8IChpZERhdGUuZ2V0RGF0ZSgpID09IE51bWJlcihzcGxpdHN0cls0XSkgLSAxKSk7XG4gICAgICAgICAgICBpZighZikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgZDtcblxuICAgICAgICAgICAgICAgIHZhciBtID0gbmV3IEFycmF5KDcsIDksIDEwLCA1LCA4LCA0LCAyLCAxLCA2LCAzLCA3LCA5LCAxMCwgNSwgOCwgNCwgMik7XG4gICAgICAgICAgICAgICAgdmFyIG4gPSBuZXcgQXJyYXkoXCIxXCIsIFwiMFwiLCBcIlhcIiwgXCI5XCIsIFwiOFwiLCBcIjdcIiwgXCI2XCIsIFwiNVwiLCBcIjRcIiwgXCIzXCIsIFwiMlwiKTtcbiAgICAgICAgICAgICAgICB2YXIgbCA9IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBoO1xuICAgICAgICAgICAgICAgIGZvcihoID0gMDsgaCA8IDE3OyBoKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbCArPSBzdHIuc3Vic3RyKGgsIDEpICogbVtoXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBkID0gbltsICUgMTFdO1xuICAgICAgICAgICAgICAgIGlmKGQgIT0gc3RyLnN1YnN0cigxNywgMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiAhL1tcXHU0RTAwLVxcdTlGQTVdfFtcXHVGRTMwLVxcdUZGQTBdLy50ZXN0KHN0cik7XG59XG5jb25zb2xlLmxvZygnZ2xvYmFsIGlzIGxvYWQnKTtcbmV4cG9ydCB7d3hKc0NvbmYsaXNXeEpzUmVhZHksY2hlY2tJZENhcmQsZ2V0Q29va2llLHNldENvb2tpZSxkZWxDb29raWUsZ2V0UGFyYW1ldGVyLHJlcXVlc3QsYnJvd3NlcixzY3JvbGxGaXgsaW5pdFNoYXJlTWVudSxldmVudFR5cGUsYW50aUNsaWNrVHJhbnNwYXJlbnQsaXNNb2JpbGUsaXNFbWFpbCxnZXRSZXNvdXJjZUNvbXBsZXRlVGltZX07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NvbW1vbi9nbG9iYWwuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIEY6L3hwcm9qZWN0L3dlYi9wcml2aWxlZ2VfdjMvbm9kZV9tb2R1bGVzL19zd2lwZXJAMy40LjJAc3dpcGVyL2Rpc3QvY3NzL3N3aXBlci5jc3Ncbi8vIG1vZHVsZSBpZCA9IGFFRGxcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwiY29uc3QgIGRldGFpbFBhZ2UgICAgICAgICA9ICgpID0+IGltcG9ydCgvKndlYnBhY2tDaHVua05hbWU6XCJkZXRhaWxQYWdlXCIqLyBcIi4uLy4uL2NvbXBvbmVudC9kZXRhaWwvZGV0YWlsLnZ1ZVwiKTtcclxuY29uc3QgIGludHJvZHVjZVBhZ2UgICAgICA9ICgpID0+IGltcG9ydCgvKndlYnBhY2tDaHVua05hbWU6XCJpbnRyb2R1Y2VQYWdlXCIqLyBcIi4uLy4uL2NvbXBvbmVudC9pbnRyby9pbnRyby52dWVcIik7XHJcbmNvbnN0ICBjbGFpbUxpc3RQYWdlICAgICAgPSAoKSA9PiBpbXBvcnQoLyp3ZWJwYWNrQ2h1bmtOYW1lOlwiaW50cm9kdWNlUGFnZVwiKi8gXCIuLi8uLi9jb21wb25lbnQvY2xhaW1MaXN0L2luZGV4LnZ1ZVwiKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFtcclxuXHR7XHJcblx0XHRwYXRoOiAnLycsIFxyXG5cdCAgXHRyZWRpcmVjdDonL2RldGFpbCdcclxuXHR9LFxyXG5cdHtcclxuXHRcdHBhdGg6ICcvZGV0YWlsJywgXHJcblx0ICBcdGNvbXBvbmVudDogZGV0YWlsUGFnZSxcclxuXHR9LFxyXG5cdHtcclxuXHRcdHBhdGg6ICcvaW50cm8nLCBcclxuXHRcdGNvbXBvbmVudDogaW50cm9kdWNlUGFnZVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0cGF0aDpcIi9jbGFpbWxpc3RcIixcclxuXHRcdGNvbXBvbmVudDpjbGFpbUxpc3RQYWdlXHJcblx0fVxyXG5dO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jb21tb24vcm91dGVyLmpzIiwiZXhwb3J0IGRlZmF1bHQge307Ly/lhajlsYBzdGF0ZemFjee9rlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZS9zdGF0ZS5qcyIsIi8v5YWo5bGAZ2V0dGVyc+mFjee9rlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3JlL2dldHRlcnMuanMiLCJleHBvcnQgZGVmYXVsdCB7fTsvL+WFqOWxgGFjdGlvbnPphY3nva5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmUvYWN0aW9ucy5qcyIsIi8v5YWo5bGAbXV0YXRpb25z6YWN572uXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmUvbXV0YXRpb25zLmpzIiwiaW1wb3J0IFZ1ZSAgZnJvbSAndnVlJztcclxuaW1wb3J0IFZ1ZXggZnJvbSAndnVleCc7XHJcbmltcG9ydCBnU3RhdGUgICBmcm9tICcuL3N0YXRlLmpzJzsvL+WFqOWxgOmFjee9rlxyXG5pbXBvcnQgZ0dldHRlcnMgZnJvbSAnLi9nZXR0ZXJzLmpzJzsvL+WFqOWxgOmFjee9rlxyXG5pbXBvcnQgZ0FjdGlvbnMgZnJvbSAnLi9hY3Rpb25zLmpzJzsvL+WFqOWxgOmFjee9rlxyXG5pbXBvcnQgZ011dGF0aW9ucyBmcm9tICcuL211dGF0aW9ucy5qcyc7Ly/lhajlsYDphY3nva5cclxuVnVlLnVzZShWdWV4KTtcclxuZXhwb3J0IGRlZmF1bHQgbmV3IFZ1ZXguU3RvcmUoe1xyXG5cdHN0YXRlOmdTdGF0ZSxcclxuXHRnZXR0ZXJzOmdHZXR0ZXJzLFxyXG5cdGFjdGlvbnM6Z0FjdGlvbnMsXHJcblx0bXV0YXRpb25zOmdNdXRhdGlvbnMsXHJcblx0bW9kdWxlczp7XHJcblx0fVxyXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmUvaW5kZXguanMiLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XHJcbmltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7aW5pdFNoYXJlTWVudX0gZnJvbSBcIi4vZ2xvYmFsXCI7XHJcblZ1ZS5wcm90b3R5cGUuJGluaXRTaGFyZU1lbnUgPSBpbml0U2hhcmVNZW51O1xyXG5WdWUucHJvdG90eXBlLiRmZXRjaCA9ICh1cmwscGFyYW0sdGltZW91dD04MDAwKT0+e1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXZvbHZlZCxyZWplY3QpPT57XHJcbiAgICAgICAgQXhpb3Moe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgIGRhdGE6IHBhcmFtLFxyXG4gICAgICAgICAgICB0aW1lb3V0OnRpbWVvdXQsXHJcbiAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJldCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaXQgaW4gZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCB0eXBlb2YgZGF0YVtpdF0gPT0gXCJvYmplY3RcIiApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXQucHVzaChlbmNvZGVVUklDb21wb25lbnQoaXQpICsgJz0nICsgSlNPTi5zdHJpbmdpZnkoZGF0YVtpdF0pKTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0LnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGl0KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChkYXRhW2l0XSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXQuam9pbihcIiZcIilcclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9KS50aGVuKGRhdGE9PntcclxuICAgICAgICAgICAgcmV2b2x2ZWQoZGF0YS5kYXRhKTtcclxuICAgICAgICB9KS5jYXRjaChlPT57XHJcbiAgICAgICAgICAgIHJlamVjdChcIuezu+e7n+e5geW/me+8jOivt+eojeWQjumHjeivlVwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5EYXRlLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbihmbXQpe1xyXG4gICAgbGV0IG8gPSB7XHJcbiAgICAgICAgXCJNK1wiOiB0aGlzLmdldE1vbnRoKCkgKyAxLCAvL+aciOS7vSBcclxuICAgICAgICBcImQrXCI6IHRoaXMuZ2V0RGF0ZSgpLCAvL+aXpSBcclxuICAgICAgICBcImgrXCI6IHRoaXMuZ2V0SG91cnMoKSwgLy/lsI/ml7YgXHJcbiAgICAgICAgXCJtK1wiOiB0aGlzLmdldE1pbnV0ZXMoKSwgLy/liIYgXHJcbiAgICAgICAgXCJzK1wiOiB0aGlzLmdldFNlY29uZHMoKSwgLy/np5IgXHJcbiAgICAgICAgXCJxK1wiOiBNYXRoLmZsb29yKCh0aGlzLmdldE1vbnRoKCkgKyAzKSAvIDMpLCAvL+Wto+W6piBcclxuICAgICAgICBcIlNcIjogdGhpcy5nZXRNaWxsaXNlY29uZHMoKSAvL+avq+enkiBcclxuICAgIH07XHJcbiAgICBpZiAoLyh5KykvLnRlc3QoZm10KSkgZm10ID0gZm10LnJlcGxhY2UoUmVnRXhwLiQxLCAodGhpcy5nZXRGdWxsWWVhcigpICsgXCJcIikuc3Vic3RyKDQgLSBSZWdFeHAuJDEubGVuZ3RoKSk7XHJcbiAgICBmb3IgKGxldCBrIGluIG8pXHJcbiAgICBpZiAobmV3IFJlZ0V4cChcIihcIiArIGsgKyBcIilcIikudGVzdChmbXQpKSBmbXQgPSBmbXQucmVwbGFjZShSZWdFeHAuJDEsIChSZWdFeHAuJDEubGVuZ3RoID09IDEpID8gKG9ba10pIDogKChcIjAwXCIgKyBvW2tdKS5zdWJzdHIoKFwiXCIgKyBvW2tdKS5sZW5ndGgpKSk7XHJcbiAgICByZXR1cm4gZm10O1xyXG59O1xyXG5TdHJpbmcucHJvdG90eXBlLmVzY2FwZUhUTUwgPSBmdW5jdGlvbigpe1xyXG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZSgvJi9nLCBcIu+8hlwiKS5yZXBsYWNlKC88L2csIFwi77ycXCIpLnJlcGxhY2UoLz4vZywgXCLvvJ5cIikucmVwbGFjZSgvXCIvZywgXCLvvIJcIikucmVwbGFjZSgvJy9nLCBcIu+8h1wiKS5yZXBsYWNlKC/igKYvZywgXCIuLi5cIik7XHJcbn07XHJcblN0cmluZy5wcm90b3R5cGUudW5lc2NhcGVIVE1MID0gZnVuY3Rpb24oKXtcclxuICAgIHJldHVybiB0aGlzLnJlcGxhY2UoL++8hi9nLCBcIiZcIikucmVwbGFjZSgv77yeL2csIFwiPlwiKS5yZXBsYWNlKC/vvJwvZywgXCI8XCIpLnJlcGxhY2UoL++8gi9nLCAnXCInKS5yZXBsYWNlKC/vvIcvZywgXCInXCIpLnJlcGxhY2UoLyZsZHF1bzsvZywgJ1xcXCInKS5yZXBsYWNlKC8mcmRxdW87L2csICdcXFwiJykucmVwbGFjZSgvJmhlbGxpcDsvZywgJy4uLicpLnJlcGxhY2UoLyZtaWRkb3Q7L2csICfCtycpO1xyXG59O1xyXG4vL+WKoOazleWHveaVsCAgXHJcbmZ1bmN0aW9uIGFjY0FkZChhcmcxLCBhcmcyKSB7ICBcclxuICAgIHZhciByMSwgcjIsIG07ICBcclxuICAgIHRyeSB7ICBcclxuICAgICAgICByMSA9IGFyZzEudG9TdHJpbmcoKS5zcGxpdChcIi5cIilbMV0ubGVuZ3RoOyAgXHJcbiAgICB9ICBcclxuICAgIGNhdGNoIChlKSB7ICBcclxuICAgICAgICByMSA9IDA7ICBcclxuICAgIH0gIFxyXG4gICAgdHJ5IHsgIFxyXG4gICAgICAgIHIyID0gYXJnMi50b1N0cmluZygpLnNwbGl0KFwiLlwiKVsxXS5sZW5ndGg7ICBcclxuICAgIH0gIFxyXG4gICAgY2F0Y2ggKGUpIHsgIFxyXG4gICAgICAgIHIyID0gMDsgIFxyXG4gICAgfSAgXHJcbiAgICBtID0gTWF0aC5wb3coMTAsIE1hdGgubWF4KHIxLCByMikpOyAgXHJcbiAgICByZXR1cm4gKGFyZzEgKiBtICsgYXJnMiAqIG0pIC8gbTsgIFxyXG59ICAgXHJcbi8v57uZTnVtYmVy57G75Z6L5aKe5Yqg5LiA5LiqYWRk5pa55rOV77yM77yM5L2/55So5pe255u05o6l55SoIC5hZGQg5Y2z5Y+v5a6M5oiQ6K6h566X44CCICAgXHJcbk51bWJlci5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKGFyZykgeyAgXHJcbiAgICByZXR1cm4gYWNjQWRkKGFyZywgdGhpcyk7ICBcclxufTsgIFxyXG4vL+WHj+azleWHveaVsCAgXHJcbmZ1bmN0aW9uIFN1YnRyKGFyZzEsIGFyZzIpIHsgIFxyXG4gICAgdmFyIHIxLCByMiwgbSwgbjsgIFxyXG4gICAgdHJ5IHsgIFxyXG4gICAgICAgIHIxID0gYXJnMS50b1N0cmluZygpLnNwbGl0KFwiLlwiKVsxXS5sZW5ndGg7ICBcclxuICAgIH0gIFxyXG4gICAgY2F0Y2ggKGUpIHsgIFxyXG4gICAgICAgIHIxID0gMDsgIFxyXG4gICAgfSAgXHJcbiAgICB0cnkgeyAgXHJcbiAgICAgICAgcjIgPSBhcmcyLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpWzFdLmxlbmd0aDsgIFxyXG4gICAgfSAgXHJcbiAgICBjYXRjaCAoZSkgeyAgXHJcbiAgICAgICAgcjIgPSAwOyAgXHJcbiAgICB9ICBcclxuICAgIG0gPSBNYXRoLnBvdygxMCwgTWF0aC5tYXgocjEsIHIyKSk7ICBcclxuICAgICAvL2xhc3QgbW9kaWZ5IGJ5IGRlZWthICBcclxuICAgICAvL+WKqOaAgeaOp+WItueyvuW6pumVv+W6piAgXHJcbiAgICBuID0gKHIxID49IHIyKSA/IHIxIDogcjI7ICBcclxuICAgIHJldHVybiAoKGFyZzEgKiBtIC0gYXJnMiAqIG0pIC8gbSkudG9GaXhlZChuKTsgIFxyXG59ICBcclxuLy/nu5lOdW1iZXLnsbvlnovlop7liqDkuIDkuKphZGTmlrnms5XvvIzvvIzkvb/nlKjml7bnm7TmjqXnlKggLnN1YiDljbPlj6/lrozmiJDorqHnrpfjgIIgICBcclxuTnVtYmVyLnByb3RvdHlwZS5zdWIgPSBmdW5jdGlvbiAoYXJnKSB7ICBcclxuICAgIHJldHVybiBTdWJ0cih0aGlzLCBhcmcpOyAgXHJcbn07ICBcclxuLy/kuZjms5Xlh73mlbAgIFxyXG5mdW5jdGlvbiBhY2NNdWwoYXJnMSwgYXJnMikgeyAgXHJcbiAgICB2YXIgbSA9IDAsIHMxID0gYXJnMS50b1N0cmluZygpLCBzMiA9IGFyZzIudG9TdHJpbmcoKTsgIFxyXG4gICAgdHJ5IHsgIFxyXG4gICAgICAgIG0gKz0gczEuc3BsaXQoXCIuXCIpWzFdLmxlbmd0aDsgIFxyXG4gICAgfSAgXHJcbiAgICBjYXRjaCAoZSkgeyAgXHJcbiAgICB9ICBcclxuICAgIHRyeSB7ICBcclxuICAgICAgICBtICs9IHMyLnNwbGl0KFwiLlwiKVsxXS5sZW5ndGg7ICBcclxuICAgIH0gIFxyXG4gICAgY2F0Y2ggKGUpIHsgIFxyXG4gICAgfSAgXHJcbiAgICByZXR1cm4gTnVtYmVyKHMxLnJlcGxhY2UoXCIuXCIsIFwiXCIpKSAqIE51bWJlcihzMi5yZXBsYWNlKFwiLlwiLCBcIlwiKSkgLyBNYXRoLnBvdygxMCwgbSk7ICBcclxufSAgIFxyXG4vL+e7mU51bWJlcuexu+Wei+WinuWKoOS4gOS4qm11bOaWueazle+8jOS9v+eUqOaXtuebtOaOpeeUqCAubXVsIOWNs+WPr+WujOaIkOiuoeeul+OAgiAgIFxyXG5OdW1iZXIucHJvdG90eXBlLm11bCA9IGZ1bmN0aW9uIChhcmcpIHsgIFxyXG4gICAgcmV0dXJuIGFjY011bChhcmcsIHRoaXMpOyAgXHJcbn07ICAgXHJcbi8v6Zmk5rOV5Ye95pWwICBcclxuZnVuY3Rpb24gYWNjRGl2KGFyZzEsIGFyZzIpIHsgIFxyXG4gICAgdmFyIHQxID0gMCwgdDIgPSAwLCByMSwgcjI7ICBcclxuICAgIHRyeSB7ICBcclxuICAgICAgICB0MSA9IGFyZzEudG9TdHJpbmcoKS5zcGxpdChcIi5cIilbMV0ubGVuZ3RoOyAgXHJcbiAgICB9ICBcclxuICAgIGNhdGNoIChlKSB7ICBcclxuICAgIH0gIFxyXG4gICAgdHJ5IHsgIFxyXG4gICAgICAgIHQyID0gYXJnMi50b1N0cmluZygpLnNwbGl0KFwiLlwiKVsxXS5sZW5ndGg7ICBcclxuICAgIH0gIFxyXG4gICAgY2F0Y2ggKGUpIHsgIFxyXG4gICAgfSAgXHJcbiAgICByMSA9IE51bWJlcihhcmcxLnRvU3RyaW5nKCkucmVwbGFjZShcIi5cIiwgXCJcIikpOyAgXHJcbiAgICByMiA9IE51bWJlcihhcmcyLnRvU3RyaW5nKCkucmVwbGFjZShcIi5cIiwgXCJcIikpOyAgXHJcbiAgICByZXR1cm4gKHIxIC8gcjIpICogTWF0aC5wb3coMTAsIHQyIC0gdDEpOyAgXHJcbn0gICBcclxuLy/nu5lOdW1iZXLnsbvlnovlop7liqDkuIDkuKpkaXbmlrnms5XvvIzvvIzkvb/nlKjml7bnm7TmjqXnlKggLmRpdiDljbPlj6/lrozmiJDorqHnrpfjgIIgICBcclxuTnVtYmVyLnByb3RvdHlwZS5kaXYgPSBmdW5jdGlvbiAoYXJnKSB7ICBcclxuICAgIHJldHVybiBhY2NEaXYodGhpcywgYXJnKTsgIFxyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jb21tb24vcHJvdG90eXBlLmpzIiwiLy/mnInkupvlupPlpoJheGlvc+S9v+eUqOWOn+eUn1Byb21pc2XvvIzmlYXlhajnjq/looPlvJXlhaVQcm9taXNl5pSv5oyB77yM5L2GanPkuK3nmoRQcm9taXNl5Lu754S25L2/55SoYmFiZWzovaznoIFcclxuaW1wb3J0ICdlczYtcHJvbWlzZS9hdXRvJztcclxuaW1wb3J0IFZ1ZSAgZnJvbSAndnVlJztcclxuaW1wb3J0IFZ1ZVJvdXRlciAgZnJvbSAndnVlLXJvdXRlcic7XHJcbmltcG9ydCBSb3V0ZXJDb25mIGZyb20gJy4vY29tbW9uL3JvdXRlcic7XHJcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9zdG9yZS9pbmRleCc7XHJcbmltcG9ydCBcIi4vY29tbW9uL3Byb3RvdHlwZS5qc1wiO1xyXG5pbXBvcnQgJ3N3aXBlci9kaXN0L2Nzcy9zd2lwZXIuY3NzJztcclxuaW1wb3J0IFwiLi4vY3NzL2NvbW1vbi5jc3NcIjtcclxuVnVlLnVzZShWdWVSb3V0ZXIpO1xyXG5jb25zdCByb3V0ZXIgPSBuZXcgVnVlUm91dGVyKHtcclxuXHRtb2RlOidoaXN0b3J5JyxcclxuXHRiYXNlOicvcHJpdmlsZWdlL2luZGV4JyxcclxuICBcdHJvdXRlczpSb3V0ZXJDb25mXHJcbn0pO1xyXG4vLyByb3V0ZXIuYmVmb3JlRWFjaCgodG8sZnJvbSxuZXh0KT0+e1xyXG4vLyBcdHdpbmRvdy5fZGV0YWlsQmVnYWluVGltZSA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XHJcbi8vIFx0bmV4dCgpO1xyXG4vLyB9KTtcclxuLy8gcm91dGVyLmFmdGVyRWFjaChyb3V0ZSA9PiB7XHJcbi8vIFx0Ly/mlrnkvr/liIbkuqvliqDnmoTlr7zoiKrpkqnlrZBcclxuLy8gXHRpZiggIWlzV3ggfHwgIWlzV3hKc1JlYWR5ICl7XHJcbi8vIFx0XHRyZXR1cm4gO1xyXG4vLyBcdH1cclxuLy8gXHRpZiggIXJvdXRlLmZ1bGxQYXRoLm1hdGNoKC9eXFwvaW5kZXgvKSAmJiAhcm91dGUuZnVsbFBhdGgubWF0Y2goL15cXC9kZXRhaWxcXC8vKSApe1xyXG4vLyBcdFx0aW5pdFNoYXJlTWVudShcIuWwj+mbqOS8nuetuVwiLGxvY2F0aW9uLmhyZWYsbG9jYXRpb24uaHJlZixzaGFyZUljb24pO1xyXG4vLyBcdH1cclxuLy8gfSk7XHJcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLGU9PntcclxuXHRpZiggZS5fcHJldmVudCApe1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdH1cclxufSx7cGFzc2l2ZTogZmFsc2V9KTtcclxuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XHJcblx0cm91dGVyLFxyXG5cdHN0b3JlXHJcbn0pLiRtb3VudCgnI2FwcCcpO1xyXG5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9hcHAuanMiXSwic291cmNlUm9vdCI6IiJ9