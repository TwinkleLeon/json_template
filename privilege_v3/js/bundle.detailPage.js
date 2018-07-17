webpackJsonp([2],{

/***/ "5ATH":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "8h/L":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: F:/xproject/web/privilege_v3/node_modules/_vue-awesome-swiper@2.6.7@vue-awesome-swiper/index.js
var _vue_awesome_swiper_2_6_7_vue_awesome_swiper = __webpack_require__("41jX");
var _vue_awesome_swiper_2_6_7_vue_awesome_swiper_default = /*#__PURE__*/__webpack_require__.n(_vue_awesome_swiper_2_6_7_vue_awesome_swiper);

// CONCATENATED MODULE: F:/xproject/web/privilege_v3/node_modules/_babel-loader@6.4.1@babel-loader/lib!./node_modules/_vue-loader@13.7.2@vue-loader/lib/selector.js?type=script&index=0!./src/component/detail/components/showGift.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var showGift = ({
    name: 'showGift',
    data: function data() {
        return {};
    },
    created: function created() {
        console.log("show create");
    },
    updated: function updated() {},

    methods: {
        parseInt: function (_parseInt) {
            function parseInt(_x) {
                return _parseInt.apply(this, arguments);
            }

            parseInt.toString = function () {
                return _parseInt.toString();
            };

            return parseInt;
        }(function (str) {
            return parseInt(str);
        }),
        prevent: function prevent(e) {
            e._prevent = true;
        },
        close: function close() {
            this.$emit("close");
        },
        confirm: function confirm() {
            this.$emit("confirm");
        }
    },
    props: ['giftInfo']
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.2@vue-loader/lib/template-compiler?{"id":"data-v-ab2c41e6","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.2@vue-loader/lib/selector.js?type=template&index=0!./src/component/detail/components/showGift.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.giftInfo
    ? _c(
        "div",
        {
          staticClass: "giftlayer layer",
          on: {
            touchmove: _vm.prevent,
            click: function($event) {
              if ($event.target !== $event.currentTarget) {
                return null
              }
              return _vm.close($event)
            }
          }
        },
        [
          _c("div", { staticClass: "layer_box" }, [
            _c("div", {
              staticClass: "layer_close",
              on: {
                click: function($event) {
                  $event.stopPropagation()
                  return _vm.close($event)
                }
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "layer_banner row middle" }, [
              _c("img", { attrs: { src: _vm.giftInfo.imgSrc, alt: "" } })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "layer_value" }, [
              _vm._v(
                "价值：" + _vm._s(parseInt(_vm.giftInfo.price) / 100) + "元"
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "layer_detail" }, [
              _c("h3", { staticClass: "detail_title" }, [
                _vm._v(_vm._s(_vm.giftInfo.name))
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "detail_desc" }, [
                _c("div", { staticClass: "desc_title inline" }, [
                  _vm._v("适用等级：")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "desc_content inline" }, [
                  _vm._v(_vm._s(_vm.giftInfo.level))
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "detail_desc" },
                [
                  _c("div", { staticClass: "desc_title" }, [
                    _vm._v("使用方法：")
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.giftInfo.useMethod, function(item, index) {
                    return _c(
                      "div",
                      { key: index, staticClass: "desc_content" },
                      [_vm._v(_vm._s(item))]
                    )
                  })
                ],
                2
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "layer_btn" }, [
              _c(
                "a",
                {
                  staticClass: "confirm white col",
                  attrs: { href: "javascript:void(0);" },
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      return _vm.confirm($event)
                    }
                  }
                },
                [_vm._v("立即领取")]
              )
            ])
          ])
        ]
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_showGift = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-ab2c41e6", esExports)
  }
}
// CONCATENATED MODULE: ./src/component/detail/components/showGift.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("tiqs")
}
var normalizeComponent = __webpack_require__("vSlaU")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ab2c41e6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  showGift,
  components_showGift,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\component\\detail\\components\\showGift.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ab2c41e6", Component.options)
  } else {
    hotAPI.reload("data-v-ab2c41e6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var detail_components_showGift = (Component.exports);

// EXTERNAL MODULE: ./src/js/common/global.js
var global = __webpack_require__("WydO");

// CONCATENATED MODULE: F:/xproject/web/privilege_v3/node_modules/_babel-loader@6.4.1@babel-loader/lib!./node_modules/_vue-loader@13.7.2@vue-loader/lib/selector.js?type=script&index=0!./src/component/detail/components/promoteLayer.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var promoteLayer = ({
    name: 'promoteLayer',
    data: function data() {
        return {
            isShow: false,
            //晋升时间没有超过一个月并且没有展示过（cookie有效期内）
            dataForGetGift: [{
                headIcon: g_cdn + "/privilege/img/dialog/dialv2.png",
                title: "恭喜您！晋升为V2会员",
                prizeDesc: "每次晋升都有奖，特赠您价值10元积分！",
                icons: [{
                    icon: g_cdn + '/privilege/img/gift/lv2gift1.png',
                    txt: 'V1→V2'
                }, {
                    icon: g_cdn + '/privilege/img/gift/v3gift1.png',
                    txt: 'V2→V3'
                }, {
                    icon: g_cdn + '/privilege/img/gift/v4gift1.png',
                    txt: 'V3→V4'
                }],
                btn: {
                    txt: "知道了"
                }
            }, {
                headIcon: g_cdn + "/privilege/img/dialog/dialv3.png",
                title: "恭喜您！晋升为V3会员",
                prizeDesc: "每次晋升都有奖，特赠您价值50元积分！",
                icons: [{
                    icon: g_cdn + '/privilege/img/gift/lv2gift1.png',
                    txt: 'V1→V2'
                }, {
                    icon: g_cdn + '/privilege/img/gift/v3gift1.png',
                    txt: 'V2→V3'
                }, {
                    icon: g_cdn + '/privilege/img/gift/v4gift1.png',
                    txt: 'V3→V4'
                }],
                btn: {
                    txt: "知道了"
                }
            }, {
                headIcon: g_cdn + "/privilege/img/dialog/dialv4.png",
                title: "恭喜您！晋升为V4会员",
                prizeDesc: "每次晋升都有奖，特赠您价值100元积分！",
                icons: [{
                    icon: g_cdn + '/privilege/img/gift/lv2gift1.png',
                    txt: 'V1→V2'
                }, {
                    icon: g_cdn + '/privilege/img/gift/v3gift1.png',
                    txt: 'V2→V3'
                }, {
                    icon: g_cdn + '/privilege/img/gift/v4gift1.png',
                    txt: 'V3→V4'
                }],
                btn: {
                    txt: "知道了"
                }
            }],
            //晋升时间超过一个月并且没有展示过（cookie有效期内）
            dataForHasGetGift: [{
                headIcon: g_cdn + "/privilege/img/dialog/dialv2.png",
                title: "恭喜您！晋升为V2会员",
                prizeDesc: "最高八项特权，尊享升级",
                icons: [{
                    icon: g_cdn + '/privilege/img/rightsicon/ipost1.png',
                    txt: '理赔免邮'
                }, {
                    icon: g_cdn + '/privilege/img/rightsicon/iinvite1.png',
                    txt: '邀请有奖'
                }, {
                    icon: g_cdn + '/privilege/img/rightsicon/iserver.png',
                    txt: '专属客服'
                }],
                btn: {
                    txt: "查看我的特权"
                }
            }, {
                headIcon: g_cdn + "/privilege/img/dialog/dialv3.png",
                title: "恭喜您！晋升为V3会员",
                prizeDesc: "最高八项特权，尊享升级",
                icons: [{
                    icon: g_cdn + '/privilege/img/rightsicon/iinvite2.png',
                    txt: '邀请有奖'
                }, {
                    icon: g_cdn + '/privilege/img/rightsicon/iserver.png',
                    txt: '专属客服'
                }, {
                    icon: g_cdn + '/privilege/img/rightsicon/iclaims.png',
                    txt: '理赔私人管家'
                }],
                btn: {
                    txt: "查看我的特权"
                }
            }, {
                headIcon: g_cdn + "/privilege/img/dialog/dialv4.png",
                title: "恭喜您！晋升为V4会员",
                prizeDesc: "最高八项特权，尊享升级",
                icons: [{
                    icon: g_cdn + '/privilege/img/rightsicon/iserver.png',
                    txt: '专属客服'
                }, {
                    icon: g_cdn + '/privilege/img/rightsicon/iclaims.png',
                    txt: '理赔私人管家'
                }, {
                    icon: g_cdn + '/privilege/img/rightsicon/iteeth.png',
                    txt: '免费洗牙'
                }],
                btn: {
                    txt: "查看我的特权"
                }
            }],
            pageInfo: {
                headIcon: g_cdn + "/privilege/img/dialog/diavip.png",
                title: "每月1-3号会员日！",
                prizeDesc: "每月1号狂欢节",
                icons: [{
                    icon: g_cdn + '/privilege/img/dialog/info1.png',
                    txt: '低价秒杀'
                }, {
                    icon: g_cdn + '/privilege/img/dialog/info2.png',
                    txt: '抽百元大奖'
                }, {
                    icon: g_cdn + '/privilege/img/dialog/info3.png',
                    txt: '专享价换购'
                }],
                btn: {
                    url: "closeandinput  /privilege/addMemberPhone",
                    txt: "开始狂欢"
                }
            }
        };
    },

    computed: {
        closeIcon: function closeIcon() {
            return g_cdn + '/privilege/img/layer_close2.png';
        }
    },
    created: function created() {
        console.log("promote create");
    },
    mounted: function mounted() {
        this.initLayer();
    },

    methods: {
        initLayer: function initLayer() {
            var changetime = this.getLevelChangeTime();
            var day = new Date().getDate();
            var level = g_level;
            var deadline;
            //防止V1干扰
            Object(global["d" /* setCookie */])("getgift1", "viewed", 3600 * 24 * 365 * 2);
            Object(global["d" /* setCookie */])("levelup1", "viewed", 3600 * 24 * 365 * 2);
            //会员日浮层,晋升浮层和会员日浮层同时出现时优先展示会员日浮层
            console.log("Day", day);
            console.log("changetime", changetime);
            if (day == 1 || day == 2 || day == 3 || day == 11) {
                if ((Object(global["a" /* getCookie */])("vipday") != "viewed" || Object(global["a" /* getCookie */])("vipday") == undefined) && (Object(global["a" /* getCookie */])("getgift" + level) == "viewed" || Object(global["a" /* getCookie */])("levelup" + level) == "viewed")) {
                    this.isShow = true;
                    Object(global["d" /* setCookie */])("vipday", "viewed", 3600 * 24 * 3);
                }
            }
            if (g_levelinfo != 1 && g_levelinfo.length >= 2) {
                var prevLevel = g_levelinfo[g_levelinfo.length - 2].level;
                if (level > prevLevel) {
                    if (level == 2) {
                        if (changetime.v1 != '' && changetime.v2 - changetime.v1 <= 86400 * 30) {
                            if (Object(global["a" /* getCookie */])("getgift2") != "viewed" || Object(global["a" /* getCookie */])("getgift2") == undefined) {
                                this.pageInfo = this.dataForGetGift[0];
                                this.isShow = true;
                                Object(global["d" /* setCookie */])("getgift2", "viewed", 365 * 3600 * 24);
                            }
                        } else {
                            if (Object(global["a" /* getCookie */])("levelup2") != "viewed" || Object(global["a" /* getCookie */])("levelup2") == undefined) {
                                this.pageInfo = this.dataForHasGetGift[0];
                                this.isShow = true;
                                Object(global["d" /* setCookie */])("levelup2", "viewed", 365 * 3600 * 24);
                            }
                        }
                        if (changetime.v2 != '') {
                            deadline = this.getLocalTime(changetime.v2 + 86400 * 30);
                        } else {
                            deadline = this.getLocalTime(Date.parse(new Date()) / 1000 + 86400 * 30);
                        }
                        this.$emit("returnVipTips", deadline + "之前成为V3会员可获得500积分");
                    }
                    if (level == 3) {
                        if (changetime.v1 != '' && changetime.v3 - changetime.v1 <= 86400 * 30 || changetime.v2 != '' && changetime.v3 - changetime.v2 <= 86400 * 30) {
                            if (Object(global["a" /* getCookie */])("getgift3") != "viewed" || Object(global["a" /* getCookie */])("getgift3") == undefined) {
                                this.pageInfo = this.dataForGetGift[1];
                                this.isShow = true;
                                Object(global["d" /* setCookie */])("getgift3", "viewed", 3600 * 24 * 365);
                            }
                        } else {
                            if (Object(global["a" /* getCookie */])("levelup3") != "viewed" || Object(global["a" /* getCookie */])("levelup3") == undefined) {
                                this.pageInfo = this.dataForHasGetGift[1];
                                this.isShow = true;
                                Object(global["d" /* setCookie */])("levelup3", "viewed", 3600 * 24 * 365);
                            }
                        }
                        if (changetime.v3 != '') {
                            deadline = this.getLocalTime(changetime.v3 + 86400 * 30);
                        } else {
                            deadline = this.getLocalTime(Date.parse(new Date()) / 1000 + 86400 * 30);
                        }
                        this.$emit("returnVipTips", deadline + "前晋升为V4会员可获得1000积分");
                    }
                    if (level == 4) {
                        if (changetime.v1 != '' && changetime.v4 - changetime.v1 <= 86400 * 30 || changetime.v2 != '' && changetime.v4 - changetime.v2 <= 86400 * 30 || changetime.v3 != '' && changetime.v4 - changetime.v3 <= 86400 * 30) {
                            if (Object(global["a" /* getCookie */])("getgift4") != "viewed" || Object(global["a" /* getCookie */])("getgift4") == undefined) {
                                this.pageInfo = this.dataForGetGift[2];
                                this.isShow = true;
                                Object(global["d" /* setCookie */])("getgift4", "viewed", 365 * 3600 * 24);
                            }
                        } else {
                            if (Object(global["a" /* getCookie */])("levelup4") != "viewed" || Object(global["a" /* getCookie */])("levelup4") == undefined) {
                                this.pageInfo = this.dataForHasGetGift[2];
                                this.isShow = true;
                                Object(global["d" /* setCookie */])("levelup4", "viewed", 365 * 24 * 3600);
                            }
                        }
                        this.$emit("returnVipTips", "您已是最高等级会员了");
                    }
                }
            } else {
                if (level == 1) {
                    deadline = this.getLocalTime(Date.parse(new Date()) / 1000 + 86400 * 30);
                    this.$emit("returnVipTips", deadline + "前晋升为V2会员可获得100积分");
                }
            }
        },
        getLevelChangeTime: function getLevelChangeTime() {
            //获取等级对应的变更时间
            var time = {};
            var v1 = '',
                v2 = '',
                v3 = '',
                v4 = '';
            //取各个等级最近的变更时间
            if (g_levelinfo != 1) {
                for (var i = 0; i < g_levelinfo.length; i++) {
                    if (g_levelinfo[i].level == 1) {
                        v1 = g_levelinfo[i].time;
                    }
                    if (g_levelinfo[i].level == 2) {
                        v2 = g_levelinfo[i].time;
                    }
                    if (g_levelinfo[i].level == 3) {
                        v3 = g_levelinfo[i].time;
                    }
                    if (g_levelinfo[i].level == 4) {
                        v4 = g_levelinfo[i].time;
                    }
                }
            }
            time = { v1: v1, v2: v2, v3: v3, v4: v4 };
            return time;
        },
        getLocalTime: function getLocalTime(nS) {
            var date = new Date(parseInt(nS) * 1000);
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var day = date.getDate();
            var fdate = year + '.' + month + '.' + day;
            return fdate;
        },
        prevent: function prevent(e) {
            e._prevent = true;
        },
        close: function close() {
            this.$emit("close");
        },
        confirm: function confirm() {
            this.$emit("confirm");
        }
    },
    props: []
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.2@vue-loader/lib/template-compiler?{"id":"data-v-5afcd69e","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.2@vue-loader/lib/selector.js?type=template&index=0!./src/component/detail/components/promoteLayer.vue
var promoteLayer_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.isShow
    ? _c(
        "div",
        {
          staticClass: "layer",
          attrs: { id: "layer" },
          on: {
            touchmove: _vm.prevent,
            click: function($event) {
              if ($event.target !== $event.currentTarget) {
                return null
              }
              return _vm.close($event)
            }
          }
        },
        [
          _c("div", { staticClass: "layer_box viptip" }, [
            _c(
              "a",
              {
                staticClass: "layer_close",
                attrs: { href: "javascript:void(0);" },
                on: { click: _vm.close }
              },
              [_c("img", { attrs: { src: _vm.closeIcon, alt: "" } })]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "dialog_img" }, [
              _c("img", { attrs: { src: _vm.pageInfo.headIcon, alt: "" } })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "dialog_tit" }, [
              _c("div", { staticClass: "tit" }, [
                _vm._v(_vm._s(_vm.pageInfo.title))
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "dialog_subtit" }, [
                _vm._v(_vm._s(_vm.pageInfo.prizeDesc))
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "dialog_info grid" }, [
              _c("div", { staticClass: "dialog_info_item col-1" }, [
                _c("div", { staticClass: "info_img img1" }, [
                  _c("img", {
                    attrs: { src: _vm.pageInfo.icons[0].icon, alt: "" }
                  }),
                  _vm._v(" "),
                  _c("i", { staticClass: "vipgift lv2 grey" })
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "info_txt txt1" }, [
                  _vm._v(_vm._s(_vm.pageInfo.icons[0].txt))
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "dialog_info_item col-1" }, [
                _c("div", { staticClass: "info_img img2" }, [
                  _c("img", {
                    attrs: { src: _vm.pageInfo.icons[1].icon, alt: "" }
                  })
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "info_txt txt2" }, [
                  _vm._v(_vm._s(_vm.pageInfo.icons[1].txt))
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "dialog_info_item col-1" }, [
                _c("div", { staticClass: "info_img img3" }, [
                  _c("img", {
                    attrs: { src: _vm.pageInfo.icons[2].icon, alt: "" }
                  })
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "info_txt txt3" }, [
                  _vm._v(_vm._s(_vm.pageInfo.icons[2].txt))
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "dialog_btngroup grid" }, [
              _c(
                "a",
                {
                  staticClass: "dialog_btn red col-1",
                  attrs: { href: "javascript:void(0);" },
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      return _vm.close($event)
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.pageInfo.btn.txt))]
              )
            ])
          ])
        ]
      )
    : _vm._e()
}
var promoteLayer_staticRenderFns = []
promoteLayer_render._withStripped = true
var promoteLayer_esExports = { render: promoteLayer_render, staticRenderFns: promoteLayer_staticRenderFns }
/* harmony default export */ var components_promoteLayer = (promoteLayer_esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-5afcd69e", promoteLayer_esExports)
  }
}
// CONCATENATED MODULE: ./src/component/detail/components/promoteLayer.vue
var promoteLayer_disposed = false
function promoteLayer_injectStyle (ssrContext) {
  if (promoteLayer_disposed) return
  __webpack_require__("vWqe")
}
var promoteLayer_normalizeComponent = __webpack_require__("vSlaU")
/* script */


/* template */

/* template functional */
var promoteLayer___vue_template_functional__ = false
/* styles */
var promoteLayer___vue_styles__ = promoteLayer_injectStyle
/* scopeId */
var promoteLayer___vue_scopeId__ = "data-v-5afcd69e"
/* moduleIdentifier (server only) */
var promoteLayer___vue_module_identifier__ = null
var promoteLayer_Component = promoteLayer_normalizeComponent(
  promoteLayer,
  components_promoteLayer,
  promoteLayer___vue_template_functional__,
  promoteLayer___vue_styles__,
  promoteLayer___vue_scopeId__,
  promoteLayer___vue_module_identifier__
)
promoteLayer_Component.options.__file = "src\\component\\detail\\components\\promoteLayer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5afcd69e", promoteLayer_Component.options)
  } else {
    hotAPI.reload("data-v-5afcd69e", promoteLayer_Component.options)
  }
  module.hot.dispose(function (data) {
    promoteLayer_disposed = true
  })
})()}

/* harmony default export */ var detail_components_promoteLayer = (promoteLayer_Component.exports);

// EXTERNAL MODULE: ./src/component/common/img/privilege_birth.png
var privilege_birth = __webpack_require__("xg9A");
var privilege_birth_default = /*#__PURE__*/__webpack_require__.n(privilege_birth);

// EXTERNAL MODULE: ./src/component/common/img/privilege_class.png
var privilege_class = __webpack_require__("0lSB");
var privilege_class_default = /*#__PURE__*/__webpack_require__.n(privilege_class);

// EXTERNAL MODULE: ./src/component/common/img/privilege_freeMail.png
var privilege_freeMail = __webpack_require__("53Z0");
var privilege_freeMail_default = /*#__PURE__*/__webpack_require__.n(privilege_freeMail);

// EXTERNAL MODULE: ./src/component/common/img/privilege_double.png
var privilege_double = __webpack_require__("gPPH");
var privilege_double_default = /*#__PURE__*/__webpack_require__.n(privilege_double);

// EXTERNAL MODULE: ./src/component/common/img/privilege_service.png
var privilege_service = __webpack_require__("26aI");
var privilege_service_default = /*#__PURE__*/__webpack_require__.n(privilege_service);

// EXTERNAL MODULE: ./src/component/common/img/privilege_day.png
var privilege_day = __webpack_require__("e4yf");
var privilege_day_default = /*#__PURE__*/__webpack_require__.n(privilege_day);

// EXTERNAL MODULE: ./src/component/common/img/privilege_consult.png
var privilege_consult = __webpack_require__("FkTd");
var privilege_consult_default = /*#__PURE__*/__webpack_require__.n(privilege_consult);

// EXTERNAL MODULE: ./src/component/common/img/privilege_birth_no.png
var privilege_birth_no = __webpack_require__("O1lU");
var privilege_birth_no_default = /*#__PURE__*/__webpack_require__.n(privilege_birth_no);

// EXTERNAL MODULE: ./src/component/common/img/privilege_class_no.png
var privilege_class_no = __webpack_require__("iGwG");
var privilege_class_no_default = /*#__PURE__*/__webpack_require__.n(privilege_class_no);

// EXTERNAL MODULE: ./src/component/common/img/privilege_freeMail_no.png
var privilege_freeMail_no = __webpack_require__("a9h+");
var privilege_freeMail_no_default = /*#__PURE__*/__webpack_require__.n(privilege_freeMail_no);

// EXTERNAL MODULE: ./src/component/common/img/privilege_double_no.png
var privilege_double_no = __webpack_require__("QSn8");
var privilege_double_no_default = /*#__PURE__*/__webpack_require__.n(privilege_double_no);

// EXTERNAL MODULE: ./src/component/common/img/privilege_service_no.png
var privilege_service_no = __webpack_require__("xcMY");
var privilege_service_no_default = /*#__PURE__*/__webpack_require__.n(privilege_service_no);

// EXTERNAL MODULE: ./src/component/common/img/privilege_day_no.png
var privilege_day_no = __webpack_require__("nPed");
var privilege_day_no_default = /*#__PURE__*/__webpack_require__.n(privilege_day_no);

// EXTERNAL MODULE: ./src/component/common/img/privilege_consult_no.png
var privilege_consult_no = __webpack_require__("6aJs");
var privilege_consult_no_default = /*#__PURE__*/__webpack_require__.n(privilege_consult_no);

// CONCATENATED MODULE: F:/xproject/web/privilege_v3/node_modules/_babel-loader@6.4.1@babel-loader/lib!./node_modules/_vue-loader@13.7.2@vue-loader/lib/selector.js?type=script&index=0!./src/component/detail/components/privilege.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
















/* harmony default export */ var privilege = ({
    name: 'myPrivilege',
    data: function data() {
        return {
            options: {
                notNextTick: true,
                autoplay: 0,
                loop: false,
                setWrapperSize: true,
                pagination: '.privilege_box .swiper-pagination',
                paginationClickable: false,
                preventClicks: true,
                observeParents: true,
                onTap: this._tapNav,
                slidesPerView: 4.5
            }
        };
    },
    created: function created() {
        console.log("privilege create");
    },

    computed: {
        levelPrivileges: function levelPrivileges() {
            var result = [],
                obj = void 0;
            for (var key in g_levelPrivileges) {
                obj = {};
                if (key == 'birthday') {
                    obj = g_levelPrivileges[key];
                    obj.desc = "生日祝福";
                    obj.key = key;
                    obj.imgs = {
                        noActive: privilege_birth_no_default.a,
                        active: privilege_birth_default.a
                    };
                    result[0] = obj;
                }
                if (key == 'consult') {
                    obj = g_levelPrivileges[key];
                    obj.desc = "专家咨询";
                    obj.key = key;
                    obj.imgs = {
                        noActive: privilege_consult_no_default.a,
                        active: privilege_consult_default.a
                    };
                    result[5] = obj;
                }
                if (key == 'freeMail') {
                    obj = g_levelPrivileges[key];
                    obj.desc = "理赔免邮";
                    obj.key = key;
                    obj.imgs = {
                        noActive: privilege_freeMail_no_default.a,
                        active: privilege_freeMail_default.a
                    };
                    result[2] = obj;
                }
                if (key == 'invite') {
                    obj = g_levelPrivileges[key];
                    obj.desc = "奖励翻倍";
                    obj.key = key;
                    obj.imgs = {
                        noActive: privilege_double_no_default.a,
                        active: privilege_double_default.a
                    };
                    result[3] = obj;
                }
                if (key == 'lecture') {
                    obj = g_levelPrivileges[key];
                    obj.desc = "会员讲座";
                    obj.key = key;
                    obj.imgs = {
                        noActive: privilege_class_no_default.a,
                        active: privilege_class_default.a
                    };
                    result[1] = obj;
                }
                if (key == 'secretGift') {
                    obj = g_levelPrivileges[key];
                    obj.desc = "神秘礼物";
                    obj.key = key;
                    obj.imgs = {
                        noActive: privilege_day_no_default.a,
                        active: privilege_day_default.a
                    };
                    result[6] = obj;
                }
                if (key == 'server') {
                    obj = g_levelPrivileges[key];
                    obj.desc = "专属客服";
                    obj.key = key;
                    obj.imgs = {
                        noActive: privilege_service_no_default.a,
                        active: privilege_service_default.a
                    };
                    result[4] = obj;
                }
            }
            return result;
        }
    },
    methods: {
        _tapNav: function _tapNav() {
            console.log(this.$refs.myNav.swiper.clickedIndex);
            var index = this.$refs.myNav.swiper.clickedIndex;
            this.$router.push({ path: "/intro", query: { type: this.levelPrivileges[index].key } });
        }
    },
    components: {
        swiper: _vue_awesome_swiper_2_6_7_vue_awesome_swiper["swiper"],
        swiperSlide: _vue_awesome_swiper_2_6_7_vue_awesome_swiper["swiperSlide"]
    },
    props: []
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.2@vue-loader/lib/template-compiler?{"id":"data-v-531f24a1","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.2@vue-loader/lib/selector.js?type=template&index=0!./src/component/detail/components/privilege.vue
var privilege_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "part_content privilege_box" },
    [
      _c(
        "swiper",
        {
          ref: "myNav",
          staticClass: "swiper-wrapper",
          attrs: { options: _vm.options }
        },
        _vm._l(_vm.levelPrivileges, function(item, index) {
          return _c(
            "swiper-slide",
            {
              key: index,
              class: { "swiper-slide privilege_item": true, isHas: item.status }
            },
            [
              _c("div", { staticClass: "privilege_icon row middle" }, [
                _c("div", [
                  _c("div", { staticClass: "icon_img row middle" }, [
                    item.status
                      ? _c("img", {
                          attrs: { src: item.imgs.active, alt: "生日祝福" }
                        })
                      : _c("img", {
                          attrs: { src: item.imgs.noActive, alt: "生日祝福" }
                        })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "icon_des" })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "privilege_name" }, [
                _vm._v(_vm._s(item.desc))
              ])
            ]
          )
        })
      )
    ],
    1
  )
}
var privilege_staticRenderFns = []
privilege_render._withStripped = true
var privilege_esExports = { render: privilege_render, staticRenderFns: privilege_staticRenderFns }
/* harmony default export */ var components_privilege = (privilege_esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-531f24a1", privilege_esExports)
  }
}
// CONCATENATED MODULE: ./src/component/detail/components/privilege.vue
var privilege_disposed = false
function privilege_injectStyle (ssrContext) {
  if (privilege_disposed) return
  __webpack_require__("F70I")
}
var privilege_normalizeComponent = __webpack_require__("vSlaU")
/* script */


/* template */

/* template functional */
var privilege___vue_template_functional__ = false
/* styles */
var privilege___vue_styles__ = privilege_injectStyle
/* scopeId */
var privilege___vue_scopeId__ = "data-v-531f24a1"
/* moduleIdentifier (server only) */
var privilege___vue_module_identifier__ = null
var privilege_Component = privilege_normalizeComponent(
  privilege,
  components_privilege,
  privilege___vue_template_functional__,
  privilege___vue_styles__,
  privilege___vue_scopeId__,
  privilege___vue_module_identifier__
)
privilege_Component.options.__file = "src\\component\\detail\\components\\privilege.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-531f24a1", privilege_Component.options)
  } else {
    hotAPI.reload("data-v-531f24a1", privilege_Component.options)
  }
  module.hot.dispose(function (data) {
    privilege_disposed = true
  })
})()}

/* harmony default export */ var detail_components_privilege = (privilege_Component.exports);

// CONCATENATED MODULE: F:/xproject/web/privilege_v3/node_modules/_babel-loader@6.4.1@babel-loader/lib!./node_modules/_vue-loader@13.7.2@vue-loader/lib/selector.js?type=script&index=0!./src/component/detail/components/userbleCard.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var userbleCard = ({
    name: 'myUserbleCard',
    data: function data() {
        return {
            options: {
                notNextTick: true,
                autoplay: 0,
                loop: false,
                setWrapperSize: true,
                pagination: '.userbleCard_box .swiper-pagination',
                paginationClickable: false,
                preventClicks: true,
                observeParents: true,
                slidesPerView: 1.9
            }
        };
    },
    created: function created() {
        console.log("UserbleCard create");
    },
    updated: function updated() {},

    methods: {},
    components: {
        swiper: _vue_awesome_swiper_2_6_7_vue_awesome_swiper["swiper"],
        swiperSlide: _vue_awesome_swiper_2_6_7_vue_awesome_swiper["swiperSlide"]
    },
    props: ['availdPrivilges']
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.2@vue-loader/lib/template-compiler?{"id":"data-v-78b70d60","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.2@vue-loader/lib/selector.js?type=template&index=0!./src/component/detail/components/userbleCard.vue
var userbleCard_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.availdPrivilges.length > 0
      ? _c(
          "div",
          { staticClass: "part_content userbleCard_box" },
          [
            _c(
              "swiper",
              {
                staticClass: "swiper-wrapper",
                attrs: { options: _vm.options }
              },
              [
                _vm._l(_vm.availdPrivilges.lecture, function(item, index) {
                  return _vm.availdPrivilges.lecture
                    ? _c(
                        "swiper-slide",
                        {
                          key: index,
                          staticClass:
                            "swiper-slide userbleCard_item row middle",
                          attrs: { "data-title": "专家讲座" }
                        },
                        [
                          _c("a", { attrs: { href: item.url } }, [
                            _c("div", [
                              _c("h3", { staticClass: "userbleCard_title" }, [
                                _vm._v("《" + _vm._s(item.name) + "》")
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "userbleCard_time" }, [
                                _vm._v(_vm._s(item.begTime))
                              ])
                            ])
                          ])
                        ]
                      )
                    : _vm._e()
                }),
                _vm._v(" "),
                _vm.availdPrivilges.freeMail
                  ? _c(
                      "swiper-slide",
                      {
                        staticClass: "swiper-slide userbleCard_item row middle",
                        attrs: { "data-title": "理赔免邮" }
                      },
                      [
                        _c("router-link", { attrs: { to: "/claimlist" } }, [
                          _c("div", [
                            _c(
                              "h3",
                              { staticClass: "userbleCard_title big_size" },
                              [
                                _vm._v("15元免邮补贴 "),
                                _c("span", { staticClass: "red" }, [
                                  _vm._v(
                                    "X" +
                                      _vm._s(_vm.availdPrivilges.freeMail.num)
                                  )
                                ])
                              ]
                            )
                          ])
                        ])
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.availdPrivilges.consult
                  ? _c(
                      "swiper-slide",
                      {
                        staticClass: "swiper-slide userbleCard_item row",
                        attrs: { "data-title": "专家咨询" }
                      },
                      [
                        _c(
                          "a",
                          { attrs: { href: "/pay/actPay?id=1004&chn=vip" } },
                          [
                            _c("div", [
                              _c("h3", { staticClass: "userbleCard_title" }, [
                                _vm._v("保险问诊服务")
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "userbleCard_time" }, [
                                _vm._v("￥"),
                                _c("span", { staticClass: "middle_size red" }, [
                                  _vm._v(
                                    _vm._s(
                                      parseInt(
                                        68 * _vm.availdPrivilges.consult.rate
                                      )
                                    )
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    staticStyle: {
                                      "text-decoration": "line-through"
                                    }
                                  },
                                  [_vm._v("￥68")]
                                )
                              ])
                            ])
                          ]
                        )
                      ]
                    )
                  : _vm._e()
              ],
              2
            )
          ],
          1
        )
      : _c("div", [_vm._v("你没有可用的特权卡")])
  ])
}
var userbleCard_staticRenderFns = []
userbleCard_render._withStripped = true
var userbleCard_esExports = { render: userbleCard_render, staticRenderFns: userbleCard_staticRenderFns }
/* harmony default export */ var components_userbleCard = (userbleCard_esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-78b70d60", userbleCard_esExports)
  }
}
// CONCATENATED MODULE: ./src/component/detail/components/userbleCard.vue
var userbleCard_disposed = false
function userbleCard_injectStyle (ssrContext) {
  if (userbleCard_disposed) return
  __webpack_require__("xIBr")
}
var userbleCard_normalizeComponent = __webpack_require__("vSlaU")
/* script */


/* template */

/* template functional */
var userbleCard___vue_template_functional__ = false
/* styles */
var userbleCard___vue_styles__ = userbleCard_injectStyle
/* scopeId */
var userbleCard___vue_scopeId__ = "data-v-78b70d60"
/* moduleIdentifier (server only) */
var userbleCard___vue_module_identifier__ = null
var userbleCard_Component = userbleCard_normalizeComponent(
  userbleCard,
  components_userbleCard,
  userbleCard___vue_template_functional__,
  userbleCard___vue_styles__,
  userbleCard___vue_scopeId__,
  userbleCard___vue_module_identifier__
)
userbleCard_Component.options.__file = "src\\component\\detail\\components\\userbleCard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-78b70d60", userbleCard_Component.options)
  } else {
    hotAPI.reload("data-v-78b70d60", userbleCard_Component.options)
  }
  module.hot.dispose(function (data) {
    userbleCard_disposed = true
  })
})()}

/* harmony default export */ var detail_components_userbleCard = (userbleCard_Component.exports);

// CONCATENATED MODULE: F:/xproject/web/privilege_v3/node_modules/_babel-loader@6.4.1@babel-loader/lib!./node_modules/_vue-loader@13.7.2@vue-loader/lib/selector.js?type=script&index=0!./src/component/common/layer.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var common_layer = ({
    name: 'commonLayer',
    data: function data() {
        return {
            value: {
                mobile: ""
            }
        };
    },
    updated: function updated() {},

    methods: {
        prevent: function prevent(e) {
            e._prevent = true;
        },
        close: function close() {
            this.$emit("close");
        },
        confirm: function confirm() {
            if (this.type == 1) {
                this.$emit("confirm", {
                    mobile: this.value.mobile,
                    type: this.type
                });
            } else {
                this.$emit("confirm", {
                    type: this.type
                });
            }
        }
    },
    props: ['layerInfo', 'type']
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.2@vue-loader/lib/template-compiler?{"id":"data-v-3a213625","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.2@vue-loader/lib/selector.js?type=template&index=0!./src/component/common/layer.vue
var layer_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.layerInfo
    ? _c(
        "div",
        {
          staticClass: "giftlayer layer",
          on: {
            touchmove: _vm.prevent,
            click: function($event) {
              if ($event.target !== $event.currentTarget) {
                return null
              }
              return _vm.close($event)
            }
          }
        },
        [
          _c("div", { staticClass: "layer_box" }, [
            _vm.type == 1
              ? _c("div", {
                  staticClass: "layer_close",
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      return _vm.close($event)
                    }
                  }
                })
              : _vm._e(),
            _vm._v(" "),
            _c("h2", { staticClass: "layer_head" }, [
              _vm._v(_vm._s(_vm.layerInfo.title))
            ]),
            _vm._v(" "),
            _vm.type == 1
              ? _c("div", { staticClass: "layer_form" }, [
                  _c("div", { staticClass: "form_input" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.value.mobile,
                          expression: "value.mobile"
                        }
                      ],
                      attrs: {
                        type: "text",
                        placeholder: "请填写福利领取手机号"
                      },
                      domProps: { value: _vm.value.mobile },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.value, "mobile", $event.target.value)
                        }
                      }
                    })
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "layer_content" },
              _vm._l(_vm.layerInfo.desc, function(item, index) {
                return _c("p", { key: index, staticClass: "layer_desc" }, [
                  _vm._v(_vm._s(item))
                ])
              })
            ),
            _vm._v(" "),
            _c("div", { staticClass: "layer_btn" }, [
              _c(
                "a",
                {
                  staticClass: "confirm white col",
                  attrs: { href: "javascript:void(0);" },
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      return _vm.confirm($event)
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.layerInfo.btnTxt.confirm))]
              )
            ])
          ])
        ]
      )
    : _vm._e()
}
var layer_staticRenderFns = []
layer_render._withStripped = true
var layer_esExports = { render: layer_render, staticRenderFns: layer_staticRenderFns }
/* harmony default export */ var component_common_layer = (layer_esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-3a213625", layer_esExports)
  }
}
// CONCATENATED MODULE: ./src/component/common/layer.vue
var layer_disposed = false
function layer_injectStyle (ssrContext) {
  if (layer_disposed) return
  __webpack_require__("5ATH")
}
var layer_normalizeComponent = __webpack_require__("vSlaU")
/* script */


/* template */

/* template functional */
var layer___vue_template_functional__ = false
/* styles */
var layer___vue_styles__ = layer_injectStyle
/* scopeId */
var layer___vue_scopeId__ = "data-v-3a213625"
/* moduleIdentifier (server only) */
var layer___vue_module_identifier__ = null
var layer_Component = layer_normalizeComponent(
  common_layer,
  component_common_layer,
  layer___vue_template_functional__,
  layer___vue_styles__,
  layer___vue_scopeId__,
  layer___vue_module_identifier__
)
layer_Component.options.__file = "src\\component\\common\\layer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3a213625", layer_Component.options)
  } else {
    hotAPI.reload("data-v-3a213625", layer_Component.options)
  }
  module.hot.dispose(function (data) {
    layer_disposed = true
  })
})()}

/* harmony default export */ var src_component_common_layer = (layer_Component.exports);

// EXTERNAL MODULE: ./src/component/common/errTips.vue + 1 modules
var errTips = __webpack_require__("tsjb");

// CONCATENATED MODULE: F:/xproject/web/privilege_v3/node_modules/_babel-loader@6.4.1@babel-loader/lib!./node_modules/_vue-loader@13.7.2@vue-loader/lib/selector.js?type=script&index=0!./src/component/detail/components/welfare.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var welfare = ({
    name: 'myWelfare',
    data: function data() {
        return {
            errMsg: "",
            tipsType: 1,
            options: {
                notNextTick: true,
                autoplay: 0,
                loop: false,
                setWrapperSize: true,
                pagination: '.privilege_box .swiper-pagination',
                paginationClickable: false,
                preventClicks: true,
                observeParents: true,
                onTap: this._tapNav,
                slidesPerView: 4.5
            },
            layerIsShow: {
                showGift: false,
                commonLayer: false
            },
            btnStatusMap: [{
                isUseable: true,
                txt: "立即领取"
            }, {
                isUseable: false,
                txt: "已领取"
            }, {
                isUseable: false,
                txt: "立即领取"
            }, {
                isUseable: false,
                txt: "立即领取"
            }],
            giftInfo: {
                imgSrc: "https://sslstatic.xiaoyusan.com/xchitem/item_1514535272.jpg",
                name: "爱奇艺单月会员",
                level: "V2-V4",
                price: "111980"
            },
            awardPrivileges: [],
            commonLayerType: 1,
            layerInfo: "",
            prizeId: ""
        };
    },
    created: function created() {
        console.log("myWelfare create");
    },
    mounted: function mounted() {
        if (Object.prototype.toString.call(g_awardPrivileges) == "[object Object]") {
            g_awardPrivileges.length = 1;
            this.awardPrivileges = this.initAwardPrivileges(g_awardPrivileges);
        }
    },

    methods: {
        initAwardPrivileges: function initAwardPrivileges(data) {
            for (var key in data) {
                for (var k in data[key]) {
                    if (k == 'useMethod' && typeof data[key][k] == "string") {
                        data[key][k] = data[key][k].split("。");
                    }
                    if (k == 'level' && data[key][k].indexOf("会员") == -1) {
                        data[key][k] = this.getMinLevel(data[key][k]);
                    }
                }
            }
            return data;
        },
        getGift: function getGift(prizeId, status) {
            //status
            //1-可领取，2-领取了本福利，3-领取了其他福利，4-非该等级可领取的福利
            console.log(status);
            console.log(prizeId);
            switch (status) {
                case 2:
                    this.errMsg = "您已领取过了";
                    return;
                case 3:
                    this.errMsg = "您已领取过其他福利，本月无法再领取";
                    return;
                case 4:
                    this.errMsg = "您的会员等级不符合，无法领取";
                    return;
                default:
                    break;
            }
            this.prizeId = prizeId;
            this.giftInfo = this.awardPrivileges[prizeId];
            this.layerIsShow.showGift = true;
        },
        commonLayerConfirm: function commonLayerConfirm(options) {
            if (options.type == 1) {
                this.fillInMes(options.mobile);
            } else if (options.type == 2) {
                this.layerClose('commonLayer');
            }
        },
        fillInMes: function fillInMes(mobile) {
            var _this = this;

            console.log('fillInMes is confirm');
            console.log('moblie', mobile);
            console.log('prizeId', this.prizeId);
            if (!Object(global["c" /* isMobile */])(mobile)) {
                this.errMsg = "请输入正确的手机号码";
                return;
            }
            this.$fetch("/privilege/addAward", { id: this.prizeId, mobile: mobile, level: g_level }).then(function (data) {
                if (data.ret != 0) {
                    _this.tipsType = 1;
                    _this.errMsg = data.errmsg;
                } else {
                    console.log(data);
                    _this.awardPrivileges = _this.initAwardPrivileges(data.data);
                    if (Object.prototype.toString.call(data.data) == "[object Object]") {
                        _this.awardPrivileges.length = 1;
                    }
                    _this.errMsg = "会员福利礼品将于每月30日通过手机短信发放，请注意查收。您可以在个人中心-我的奖品查看奖品发放进展。";
                    _this.layerIsShow.commonLayer = false;
                }
            }).catch(function (e) {
                if (!e) {
                    e = "系统繁忙，请稍后重试";
                }
                _this.tipsType = 1;
                _this.errMsg = e.toString();
            });
        },
        getMinLevel: function getMinLevel(levelStr) {
            var levelArr = levelStr.split(",").sort(function (a, b) {
                return a - b;
            }),
                length = levelArr.length,
                dValue = 5 - levelArr[0];
            if (length == dValue) {
                return 'V' + levelArr[0] + '及以上会员';
            } else if (length < dValue) {
                var str = '';
                levelArr.map(function (item, index) {
                    if (index < length - 1) {
                        str += 'V' + item + '、';
                    } else {
                        str += 'V' + item;
                    }
                });
                return str + '会员';
            }
        },
        showGiftConfirm: function showGiftConfirm() {
            console.log('showGiftConfirm is confirm');
            this.showCommonLayer({
                type: 1,
                txt: this.layerTxt.fillInTxt
            });
            this.layerIsShow.showGift = false;
        },
        showRule: function showRule(key) {
            this.showCommonLayer({
                type: 2,
                txt: this.layerTxt[key]
            });
        },
        showCommonLayer: function showCommonLayer(options) {
            options = options || {};
            if (!options.txt) {
                return;
            }
            this.commonLayerType = options.type;
            this.layerInfo = options.txt;
            this.layerIsShow.commonLayer = true;
        },
        layerClose: function layerClose(layer) {
            console.log(layer);
            this.layerIsShow[layer] = false;
        }
    },
    components: {
        showGift: detail_components_showGift,
        commonLayer: src_component_common_layer,
        errTip: errTips["a" /* default */]
    },
    props: ['layerTxt']
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.2@vue-loader/lib/template-compiler?{"id":"data-v-7991a2fc","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.2@vue-loader/lib/selector.js?type=template&index=0!./src/component/detail/components/welfare.vue
var welfare_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.awardPrivileges.length > 0
    ? _c("section", { staticClass: "part my_welfare" }, [
        _c("div", { staticClass: "part_title clearfix" }, [
          _c("h3", [_vm._v("会员福利")]),
          _vm._v(" "),
          _c(
            "a",
            {
              attrs: { href: "javascript:void(0);" },
              on: {
                click: function($event) {
                  _vm.showRule("ruleTxtForGift")
                }
              }
            },
            [_vm._v("领取规则")]
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "part_content welfare_box row center" },
          [
            _vm._l(_vm.awardPrivileges, function(item, index) {
              return index != "length"
                ? _c("div", { key: index, staticClass: "welfare_item" }, [
                    _c("div", { staticClass: "welfare_detail" }, [
                      _c("h4", [_vm._v(_vm._s(item.name))]),
                      _vm._v(" "),
                      _c("p", [_vm._v(_vm._s(item.level))])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "welfare_btn" }, [
                      _c(
                        "a",
                        {
                          class: {
                            unuseable: !_vm.btnStatusMap[item.status - 1]
                              .isUseable
                          },
                          attrs: { href: "javascript:void(0);" },
                          on: {
                            click: function($event) {
                              $event.stopPropagation()
                              _vm.getGift(item.id, item.status)
                            }
                          }
                        },
                        [_vm._v(_vm._s(_vm.btnStatusMap[item.status - 1].txt))]
                      )
                    ])
                  ])
                : _vm._e()
            }),
            _vm._v(" "),
            _vm.layerIsShow.showGift
              ? _c("show-gift", {
                  attrs: { "gift-info": _vm.giftInfo },
                  on: {
                    close: function($event) {
                      _vm.layerClose("showGift")
                    },
                    confirm: _vm.showGiftConfirm
                  }
                })
              : _vm._e(),
            _vm._v(" "),
            _vm.layerIsShow.commonLayer
              ? _c("common-layer", {
                  attrs: {
                    type: _vm.commonLayerType,
                    "layer-info": _vm.layerInfo
                  },
                  on: {
                    close: function($event) {
                      _vm.layerClose("commonLayer")
                    },
                    confirm: _vm.commonLayerConfirm
                  }
                })
              : _vm._e(),
            _vm._v(" "),
            _c("err-tip", {
              attrs: { "err-msg": _vm.errMsg, "tips-type": _vm.tipsType },
              on: {
                hideTips: function($event) {
                  _vm.errMsg = ""
                }
              }
            })
          ],
          2
        )
      ])
    : _vm._e()
}
var welfare_staticRenderFns = []
welfare_render._withStripped = true
var welfare_esExports = { render: welfare_render, staticRenderFns: welfare_staticRenderFns }
/* harmony default export */ var components_welfare = (welfare_esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-7991a2fc", welfare_esExports)
  }
}
// CONCATENATED MODULE: ./src/component/detail/components/welfare.vue
var welfare_disposed = false
function welfare_injectStyle (ssrContext) {
  if (welfare_disposed) return
  __webpack_require__("zvyx")
}
var welfare_normalizeComponent = __webpack_require__("vSlaU")
/* script */


/* template */

/* template functional */
var welfare___vue_template_functional__ = false
/* styles */
var welfare___vue_styles__ = welfare_injectStyle
/* scopeId */
var welfare___vue_scopeId__ = "data-v-7991a2fc"
/* moduleIdentifier (server only) */
var welfare___vue_module_identifier__ = null
var welfare_Component = welfare_normalizeComponent(
  welfare,
  components_welfare,
  welfare___vue_template_functional__,
  welfare___vue_styles__,
  welfare___vue_scopeId__,
  welfare___vue_module_identifier__
)
welfare_Component.options.__file = "src\\component\\detail\\components\\welfare.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7991a2fc", welfare_Component.options)
  } else {
    hotAPI.reload("data-v-7991a2fc", welfare_Component.options)
  }
  module.hot.dispose(function (data) {
    welfare_disposed = true
  })
})()}

/* harmony default export */ var detail_components_welfare = (welfare_Component.exports);

// CONCATENATED MODULE: F:/xproject/web/privilege_v3/node_modules/_babel-loader@6.4.1@babel-loader/lib!./node_modules/_vue-loader@13.7.2@vue-loader/lib/selector.js?type=script&index=0!./src/component/detail/components/score.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var score = ({
    name: 'myScore',
    data: function data() {
        return {
            commonLayerType: 1,
            layerInfo: "",
            level: g_level,
            layerIsShow: {
                commonLayer: false
            }
        };
    },
    created: function created() {
        console.log("myScore create");
    },
    mounted: function mounted() {},

    methods: {
        showRule: function showRule(key) {
            this.showCommonLayer({
                type: 2,
                txt: this.layerTxt[key]
            });
        },
        showCommonLayer: function showCommonLayer(options) {
            options = options || {};
            if (!options.txt) {
                return;
            }
            this.commonLayerType = options.type;
            this.layerInfo = options.txt;
            this.layerIsShow.commonLayer = true;
        },
        layerClose: function layerClose(layer) {
            console.log(layer);
            this.layerIsShow[layer] = false;
        }
    },
    components: {
        commonLayer: src_component_common_layer
    },
    props: ['layerTxt', 'vipTips']
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.2@vue-loader/lib/template-compiler?{"id":"data-v-44137ffc","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.2@vue-loader/lib/selector.js?type=template&index=0!./src/component/detail/components/score.vue
var score_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "part_content score_box" },
    [
      _c("div", { staticClass: "process_box row middle" }, [
        _c("div", {
          class: { "small_ball row middle": true, disabled: _vm.level < 1 },
          attrs: { "data-content": "v1" }
        }),
        _vm._v(" "),
        _c("div", {
          class: {
            process_bar: true,
            full: _vm.level > 1,
            half: _vm.level == 1
          }
        }),
        _vm._v(" "),
        _c("div", { class: { ball_box: true, disabled: _vm.level <= 1 } }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", {
            staticClass: "small_ball row middle",
            attrs: { "data-content": "v2" }
          })
        ]),
        _vm._v(" "),
        _c("div", {
          class: {
            process_bar: true,
            full: _vm.level > 2,
            half: _vm.level == 2
          }
        }),
        _vm._v(" "),
        _c("div", { class: { ball_box: true, disabled: _vm.level <= 2 } }, [
          _vm._m(1),
          _vm._v(" "),
          _c("div", {
            staticClass: "small_ball row middle",
            attrs: { "data-content": "v3" }
          })
        ]),
        _vm._v(" "),
        _c("div", {
          class: {
            process_bar: true,
            full: _vm.level > 3,
            half: _vm.level == 3
          }
        }),
        _vm._v(" "),
        _c("div", { class: { ball_box: true, disabled: _vm.level <= 3 } }, [
          _vm._m(2),
          _vm._v(" "),
          _c("div", {
            staticClass: "small_ball row middle",
            attrs: { "data-content": "v4" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(_vm._s(_vm.vipTips)),
        _c(
          "a",
          {
            attrs: { href: "javascript:void(0);" },
            on: {
              click: function($event) {
                $event.stopPropagation()
                _vm.showRule("ruleTxtForScore")
              }
            }
          },
          [_vm._v("详细规则 >")]
        )
      ]),
      _vm._v(" "),
      _vm._m(3),
      _vm._v(" "),
      _vm.layerIsShow.commonLayer
        ? _c("common-layer", {
            attrs: { type: _vm.commonLayerType, "layer-info": _vm.layerInfo },
            on: {
              close: function($event) {
                _vm.layerClose("commonLayer")
              },
              confirm: function($event) {
                _vm.layerClose("commonLayer")
              }
            }
          })
        : _vm._e()
    ],
    1
  )
}
var score_staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "big_ball row middle" }, [
      _c("div", [
        _c("p", { staticClass: "need_score" }, [_vm._v("100")]),
        _vm._v(" "),
        _c("div", [_vm._v("积分")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "big_ball row middle" }, [
      _c("div", [
        _c("p", { staticClass: "need_score" }, [_vm._v("500")]),
        _vm._v(" "),
        _c("div", [_vm._v("积分")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "big_ball row middle" }, [
      _c("div", [
        _c("p", { staticClass: "need_score" }, [_vm._v("1000")]),
        _vm._v(" "),
        _c("div", [_vm._v("积分")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { href: "/proposal/result?id=4401&chn=vip" } }, [
      _vm._v("更多查看我的专属保障方案"),
      _c("i", { staticClass: "arrowRight arrow" })
    ])
  }
]
score_render._withStripped = true
var score_esExports = { render: score_render, staticRenderFns: score_staticRenderFns }
/* harmony default export */ var components_score = (score_esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-44137ffc", score_esExports)
  }
}
// CONCATENATED MODULE: ./src/component/detail/components/score.vue
var score_disposed = false
function score_injectStyle (ssrContext) {
  if (score_disposed) return
  __webpack_require__("YkH/")
}
var score_normalizeComponent = __webpack_require__("vSlaU")
/* script */


/* template */

/* template functional */
var score___vue_template_functional__ = false
/* styles */
var score___vue_styles__ = score_injectStyle
/* scopeId */
var score___vue_scopeId__ = "data-v-44137ffc"
/* moduleIdentifier (server only) */
var score___vue_module_identifier__ = null
var score_Component = score_normalizeComponent(
  score,
  components_score,
  score___vue_template_functional__,
  score___vue_styles__,
  score___vue_scopeId__,
  score___vue_module_identifier__
)
score_Component.options.__file = "src\\component\\detail\\components\\score.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-44137ffc", score_Component.options)
  } else {
    hotAPI.reload("data-v-44137ffc", score_Component.options)
  }
  module.hot.dispose(function (data) {
    score_disposed = true
  })
})()}

/* harmony default export */ var detail_components_score = (score_Component.exports);

// CONCATENATED MODULE: F:/xproject/web/privilege_v3/node_modules/_babel-loader@6.4.1@babel-loader/lib!./node_modules/_vue-loader@13.7.2@vue-loader/lib/selector.js?type=script&index=0!./src/component/detail/detail.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










/* harmony default export */ var detail = ({
    name: "detail",
    data: function data() {
        return {
            errMsg: "",
            tipsType: 1,
            swiperOptions: {
                myBanner: {
                    notNextTick: true,
                    autoplay: 0,
                    loop: false,
                    setWrapperSize: true,
                    pagination: '.my_banner .swiper-pagination',
                    paginationClickable: false,
                    preventClicks: true,
                    observeParents: true,
                    onTap: this._tapSwiper
                }
            },
            headerInfo: {
                name: g_nickname,
                headurl: g_headurl,
                level: g_level,
                exp: g_exp
            },
            layerIsShow: {
                commonLayer: false,
                promoteLayer: true
            },
            layerInfo: {},
            layerTxt: {
                fillInTxt: {
                    title: "填写信息",
                    desc: ['1.会员可按照会员等级相应档位的礼品，每月仅可领取一份', '2.会员福利礼品将于每月30日发放，未领取的用户不予发放'],
                    btnTxt: {
                        confirm: '立即领取'
                    }
                },
                ruleTxtForGift: {
                    title: "领取规则",
                    desc: ['1.会员可按照会员等级相应档位的礼品，每月仅可领取一份，如当月未领取则资格作废', '2.所有礼品均需通过登记会员手机号码，通过短信的形式发放', '3.会员福利礼品将于每月30日发放，未领取的用户不予发放'],
                    btnTxt: {
                        confirm: '知道了'
                    }
                },
                ruleTxtForScore: {
                    title: "详细规则",
                    desc: ['30日内完成等级晋升，你将获得以下礼品，礼品将于5个工作日后以短信方式发送。', 'V1→V2 ：价值10元积分', 'V2→V3 ：价值50元积分', 'V3→V4 ：价值100元积分', '规则说明：', '1.规则生效时间为2017年6月1日。在此之前的等级初始计算时间为6月1日。', '2.如果在30日内晋升多级，可以获得多份礼品。'],
                    btnTxt: {
                        confirm: '知道了'
                    }
                }
            },
            commonLayerType: 1,
            vipTips: ""
        };
    },

    computed: {
        availdPrivilges: function availdPrivilges() {
            if (Object.prototype.toString.call(g_availdPrivilges) == "[object Object]") {
                g_availdPrivilges.length = 1;
            }
            return g_availdPrivilges;
        },
        ads: function ads() {
            return g_ad;
        }
    },
    mounted: function mounted() {},

    methods: {
        getExpToNextLevel: function getExpToNextLevel() {
            if (g_level == 1) {
                return 10000 - g_exp;
            }
            if (g_level == 2) {
                return 50000 - g_exp;
            }
            if (g_level == 3) {
                return 150000 - g_exp;
            }
        },
        returnVipTips: function returnVipTips(txt) {
            this.vipTips = txt;
        },
        commonLayertConfirm: function commonLayertConfirm(mobile) {
            if (this.commonLayerType == 1) {
                this.fillInMes(mobile);
            } else if (this.commonLayerType == 2) {
                this.layerIsShow.commonLayer = false;
            }
        },
        showRule: function showRule(key) {
            this.showCommonLayer({
                type: 2,
                txt: this.layerTxt[key]
            });
        },
        showCommonLayer: function showCommonLayer(options) {
            options = options || {};
            if (!options.txt) {
                return;
            }
            this.commonLayerType = options.type;
            this.layerInfo = options.txt;
            this.layerIsShow.commonLayer = true;
        },
        layerClose: function layerClose(layer) {
            console.log(layer);
            this.layerIsShow[layer] = false;
        },
        preventMove: function preventMove(e) {
            e._prevent = true;
        }
    },
    components: {
        swiperSlide: _vue_awesome_swiper_2_6_7_vue_awesome_swiper["swiperSlide"],
        swiper: _vue_awesome_swiper_2_6_7_vue_awesome_swiper["swiper"],
        commonLayer: src_component_common_layer,
        errTip: errTips["a" /* default */],
        promoteLayer: detail_components_promoteLayer,
        myPrivilege: detail_components_privilege,
        myUserbleCard: detail_components_userbleCard,
        myWelfare: detail_components_welfare,
        myScore: detail_components_score
    }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.2@vue-loader/lib/template-compiler?{"id":"data-v-ea52edf2","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.2@vue-loader/lib/selector.js?type=template&index=0!./src/component/detail/detail.vue
var detail_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { staticClass: "header" }, [
        _c("div", { staticClass: "user_icon" }, [
          _c("img", {
            attrs: { src: _vm.headerInfo.headurl, alt: "用户头像" }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "user_lv" }, [
            _c("span", { staticClass: "txt_1st" }, [_vm._v("v")]),
            _vm._v(" "),
            _c("span", { staticClass: "txt_2rd" }, [
              _vm._v(_vm._s(_vm.headerInfo.level))
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "txt_3rd" }, [_vm._v("会")]),
            _vm._v(" "),
            _c("span", { staticClass: "txt_4th" }, [_vm._v("员")])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "user_info" }, [
          _c("span", { staticClass: "user_name" }, [
            _vm._v(_vm._s(_vm.headerInfo.name))
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "score" }, [
            _vm._v("成长值：" + _vm._s(_vm.headerInfo.exp))
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "score_detail" }, [
          _vm.headerInfo.level < 4
            ? _c("span", { staticClass: "d_value" }, [
                _vm._v(
                  "距V" +
                    _vm._s(_vm.headerInfo.level + 1) +
                    "还差" +
                    _vm._s(_vm.getExpToNextLevel())
                )
              ])
            : _vm._e(),
          _c("a", { attrs: { href: "/privilege/growth_detail.html" } }, [
            _vm._v("如何增加成长值 ＞")
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "main" },
        [
          _c(
            "section",
            { staticClass: "part my_privilege" },
            [
              _c(
                "div",
                { staticClass: "part_title clearfix" },
                [
                  _c("h3", [_vm._v("我的专属特权")]),
                  _vm._v(" "),
                  _c("router-link", { attrs: { to: "/intro?type=birthday" } }, [
                    _vm._v("全部特权 >")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c("my-privilege")
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "section",
            { staticClass: "part my_userbleCard" },
            [
              _vm._m(0),
              _vm._v(" "),
              _c("my-userbleCard", {
                attrs: { "availd-privilges": _vm.availdPrivilges }
              })
            ],
            1
          ),
          _vm._v(" "),
          _vm.ads.length > 0
            ? _c(
                "section",
                { staticClass: "part my_banner" },
                [
                  _c(
                    "swiper",
                    {
                      ref: "mySwiper",
                      staticClass: "swiper-wrapper",
                      attrs: { options: _vm.swiperOptions.myBanner },
                      nativeOn: {
                        touchmove: function($event) {
                          return _vm.preventMove($event)
                        }
                      }
                    },
                    [
                      _vm._l(_vm.ads, function(item, index) {
                        return _c(
                          "swiper-slide",
                          {
                            key: index,
                            staticClass: "swiper-slide banner_item row middle"
                          },
                          [
                            _c("a", { attrs: { href: item.url } }, [
                              _c("img", {
                                attrs: { src: item.picSrc, alt: item.desc }
                              })
                            ])
                          ]
                        )
                      }),
                      _vm._v(" "),
                      _vm.ads.length > 1
                        ? _c("div", {
                            staticClass: "swiper-pagination pagination_style",
                            attrs: { slot: "pagination" },
                            slot: "pagination"
                          })
                        : _vm._e()
                    ],
                    2
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c("my-welfare", { attrs: { "layer-txt": _vm.layerTxt } }),
          _vm._v(" "),
          _c(
            "section",
            { staticClass: "part my_score" },
            [
              _vm._m(1),
              _vm._v(" "),
              _c("my-score", {
                attrs: { "vip-tips": _vm.vipTips, "layer-txt": _vm.layerTxt }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "footer" }),
      _vm._v(" "),
      _vm.layerIsShow.commonLayer
        ? _c("common-layer", {
            attrs: { type: _vm.commonLayerType, "layer-info": _vm.layerInfo },
            on: {
              close: function($event) {
                _vm.layerClose("commonLayer")
              },
              confirm: _vm.commonLayertConfirm
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.layerIsShow.promoteLayer
        ? _c("promote-layer", {
            on: {
              "show-layer": function($event) {
                _vm.layerIsShow.promoteLayer = true
              },
              close: function($event) {
                _vm.layerClose("promoteLayer")
              },
              returnVipTips: _vm.returnVipTips
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _c("err-tip", {
        attrs: { "err-msg": _vm.errMsg, "tips-type": _vm.tipsType },
        on: {
          hideTips: function($event) {
            _vm.errMsg = ""
          }
        }
      })
    ],
    1
  )
}
var detail_staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "part_title clearfix" }, [
      _c("h3", [_vm._v("我的可用特权卡")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "part_title clearfix" }, [
      _c("h3", [_vm._v("晋升得积分 积分兑好礼")]),
      _vm._v(" "),
      _c("a", { attrs: { href: "/score#/index?chn=vip" } }, [
        _vm._v("去积分商城 >")
      ])
    ])
  }
]
detail_render._withStripped = true
var detail_esExports = { render: detail_render, staticRenderFns: detail_staticRenderFns }
/* harmony default export */ var detail_detail = (detail_esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-ea52edf2", detail_esExports)
  }
}
// CONCATENATED MODULE: ./src/component/detail/detail.vue
var detail_disposed = false
function detail_injectStyle (ssrContext) {
  if (detail_disposed) return
  __webpack_require__("o9/d")
}
var detail_normalizeComponent = __webpack_require__("vSlaU")
/* script */


/* template */

/* template functional */
var detail___vue_template_functional__ = false
/* styles */
var detail___vue_styles__ = detail_injectStyle
/* scopeId */
var detail___vue_scopeId__ = "data-v-ea52edf2"
/* moduleIdentifier (server only) */
var detail___vue_module_identifier__ = null
var detail_Component = detail_normalizeComponent(
  detail,
  detail_detail,
  detail___vue_template_functional__,
  detail___vue_styles__,
  detail___vue_scopeId__,
  detail___vue_module_identifier__
)
detail_Component.options.__file = "src\\component\\detail\\detail.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ea52edf2", detail_Component.options)
  } else {
    hotAPI.reload("data-v-ea52edf2", detail_Component.options)
  }
  module.hot.dispose(function (data) {
    detail_disposed = true
  })
})()}

/* harmony default export */ var component_detail_detail = __webpack_exports__["default"] = (detail_Component.exports);


/***/ }),

/***/ "F70I":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "YkH/":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "o9/d":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "tiqs":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "vWqe":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "xIBr":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "zvyx":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L2NvbW1vbi9sYXllci52dWU/YjFlOCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudC9kZXRhaWwvY29tcG9uZW50cy9zaG93R2lmdC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9kZXRhaWwvY29tcG9uZW50cy9zaG93R2lmdC52dWU/N2NlZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L2RldGFpbC9jb21wb25lbnRzL3Nob3dHaWZ0LnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudC9kZXRhaWwvY29tcG9uZW50cy9wcm9tb3RlTGF5ZXIudnVlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvZGV0YWlsL2NvbXBvbmVudHMvcHJvbW90ZUxheWVyLnZ1ZT8yNzAzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvZGV0YWlsL2NvbXBvbmVudHMvcHJvbW90ZUxheWVyLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudC9kZXRhaWwvY29tcG9uZW50cy9wcml2aWxlZ2UudnVlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvZGV0YWlsL2NvbXBvbmVudHMvcHJpdmlsZWdlLnZ1ZT9jNmRmIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvZGV0YWlsL2NvbXBvbmVudHMvcHJpdmlsZWdlLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudC9kZXRhaWwvY29tcG9uZW50cy91c2VyYmxlQ2FyZC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9kZXRhaWwvY29tcG9uZW50cy91c2VyYmxlQ2FyZC52dWU/NDIyNyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L2RldGFpbC9jb21wb25lbnRzL3VzZXJibGVDYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudC9jb21tb24vbGF5ZXIudnVlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvY29tbW9uL2xheWVyLnZ1ZT81ZjFkIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvY29tbW9uL2xheWVyLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudC9kZXRhaWwvY29tcG9uZW50cy93ZWxmYXJlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L2RldGFpbC9jb21wb25lbnRzL3dlbGZhcmUudnVlPzA1YjYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9kZXRhaWwvY29tcG9uZW50cy93ZWxmYXJlLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudC9kZXRhaWwvY29tcG9uZW50cy9zY29yZS52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9kZXRhaWwvY29tcG9uZW50cy9zY29yZS52dWU/MzU4MyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L2RldGFpbC9jb21wb25lbnRzL3Njb3JlLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudC9kZXRhaWwvZGV0YWlsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L2RldGFpbC9kZXRhaWwudnVlPzYyNDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9kZXRhaWwvZGV0YWlsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L2RldGFpbC9jb21wb25lbnRzL3ByaXZpbGVnZS52dWU/ZTdmZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L2RldGFpbC9jb21wb25lbnRzL3Njb3JlLnZ1ZT9kY2IyIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvZGV0YWlsL2RldGFpbC52dWU/Yzk0YiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L2RldGFpbC9jb21wb25lbnRzL3Nob3dHaWZ0LnZ1ZT85Y2UwIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvZGV0YWlsL2NvbXBvbmVudHMvcHJvbW90ZUxheWVyLnZ1ZT83YjA5Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvZGV0YWlsL2NvbXBvbmVudHMvdXNlcmJsZUNhcmQudnVlPzFjM2IiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9kZXRhaWwvY29tcG9uZW50cy93ZWxmYXJlLnZ1ZT9hMjI5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEseUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM0QkE7QUFDQSxvQkFEQTtBQUVBLFFBRkEsa0JBRUE7QUFDQTtBQUdBLEtBTkE7QUFPQSxXQVBBLHFCQU9BO0FBQ0E7QUFDQSxLQVRBO0FBVUEsV0FWQSxxQkFVQSxDQUVBLENBWkE7O0FBYUE7QUFDQSxnQkFEQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxvQkFDQSxHQURBLEVBQ0E7QUFDQTtBQUNBLFNBSEE7QUFJQSxlQUpBLG1CQUlBLENBSkEsRUFJQTtBQUNBO0FBQ0EsU0FOQTtBQU9BLGFBUEEsbUJBT0E7QUFDQTtBQUNBLFNBVEE7QUFVQSxlQVZBLHFCQVVBO0FBQ0E7QUFDQTtBQVpBLEtBYkE7QUEyQkE7QUEzQkEsRzs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EscUJBQXFCLDJCQUEyQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsdUJBQXVCLHlDQUF5QztBQUNoRSx5QkFBeUIsU0FBUyxvQ0FBb0MsRUFBRTtBQUN4RTtBQUNBO0FBQ0EsdUJBQXVCLDZCQUE2QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDhCQUE4QjtBQUNyRCx3QkFBd0IsOEJBQThCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw2QkFBNkI7QUFDdEQsMkJBQTJCLG1DQUFtQztBQUM5RDtB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QTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscUNBQXFDO0FBQzNEO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscUNBQXFDO0FBQzNEO0FBQ0E7QUFDQSxlQUFlLFNBQVMsZ0NBQWdDLEVBQUU7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7O0FDdE9BO0FBQ0E7QUFDQTtBQUNBLDRCQUF1WTtBQUN2WTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNkw7QUFDN0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7OztBQzdDQSx5Qzs7Ozs7OztBQ0FBLHlDOzs7Ozs7O0FDQUEseUM7Ozs7Ozs7QUNBQSx5Qzs7Ozs7OztBQ0FBLHlDOzs7Ozs7O0FDQUEseUM7Ozs7Ozs7QUNBQSx5QyIsImZpbGUiOiJqcy9idW5kbGUuZGV0YWlsUGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2V4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbkAzLjAuMkBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4vZGlzdC9sb2FkZXIuanM/e1wib21pdFwiOjEsXCJyZW1vdmVcIjp0cnVlfSFGOi94cHJvamVjdC93ZWIvcHJpdmlsZWdlX3YzL25vZGVfbW9kdWxlcy9fdnVlLXN0eWxlLWxvYWRlckAzLjEuMkB2dWUtc3R5bGUtbG9hZGVyIUY6L3hwcm9qZWN0L3dlYi9wcml2aWxlZ2VfdjMvbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlcj97XCJpbXBvcnRMb2FkZXJzXCI6MSxcIm1pbmltaXplXCI6ZmFsc2UsXCJzb3VyY2VNYXBcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTMuNy4yQHZ1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTNhMjEzNjI1XCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDEzLjcuMkB2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL2NvbXBvbmVudC9jb21tb24vbGF5ZXIudnVlXG4vLyBtb2R1bGUgaWQgPSA1QVRIXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgdi1pZj1cImdpZnRJbmZvXCIgY2xhc3M9XCJnaWZ0bGF5ZXIgbGF5ZXJcIiBAdG91Y2htb3ZlPVwicHJldmVudFwiIEBjbGljay5zZWxmPVwiY2xvc2VcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibGF5ZXJfYm94XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYXllcl9jbG9zZVwiIEBjbGljay5zdG9wPVwiY2xvc2VcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxheWVyX2Jhbm5lciByb3cgbWlkZGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJnaWZ0SW5mby5pbWdTcmNcIiBhbHQ9XCJcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYXllcl92YWx1ZVwiPuS7t+WAvO+8mnt7cGFyc2VJbnQoZ2lmdEluZm8ucHJpY2UpLzEwMH195YWDPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYXllcl9kZXRhaWxcIj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImRldGFpbF90aXRsZVwiPnt7Z2lmdEluZm8ubmFtZX19PC9oMz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWxfZGVzY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXNjX3RpdGxlIGlubGluZVwiPumAgueUqOetiee6p++8mjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXNjX2NvbnRlbnQgaW5saW5lXCI+e3tnaWZ0SW5mby5sZXZlbH19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWxfZGVzY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXNjX3RpdGxlXCI+5L2/55So5pa55rOV77yaPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBnaWZ0SW5mby51c2VNZXRob2RcIiA6a2V5PVwiaW5kZXhcIiBjbGFzcz1cImRlc2NfY29udGVudFwiPnt7aXRlbX19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYXllcl9idG5cIj5cclxuICAgICAgICAgICAgICAgIDxhIEBjbGljay5zdG9wPVwiY29uZmlybVwiIGNsYXNzPVwiY29uZmlybSB3aGl0ZSBjb2xcIiBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiPueri+WNs+mihuWPljwvYT5cclxuICAgICAgICAgICAgICAgIDwhLS0gPGEgY2xhc3M9XCJjYW5jZWwgY29sXCIgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIj7lj5bmtog8L2E+IC0tPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogJ3Nob3dHaWZ0JyxcclxuICAgIGRhdGEoKXtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzaG93IGNyZWF0ZVwiKVxyXG4gICAgfSxcclxuICAgIHVwZGF0ZWQoKXtcclxuICAgICAgICBcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOntcclxuICAgICAgICBwYXJzZUludChzdHIpe1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoc3RyKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHByZXZlbnQoZSl7XHJcbiAgICAgICAgICAgIGUuX3ByZXZlbnQgPSB0cnVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2xvc2UoKXtcclxuICAgICAgICAgICAgdGhpcy4kZW1pdChcImNsb3NlXCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29uZmlybSgpe1xyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KFwiY29uZmlybVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgcHJvcHM6WydnaWZ0SW5mbyddXHJcbn1cclxuPC9zY3JpcHQ+XHJcbjwhLS0gQWRkIFwic2NvcGVkXCIgYXR0cmlidXRlIHRvIGxpbWl0IENTUyB0byB0aGlzIGNvbXBvbmVudCBvbmx5IC0tPlxyXG48c3R5bGUgc2NvcGVkPlxyXG4gICAgLmdpZnRsYXllcntwb3NpdGlvbjogZml4ZWQ7bGVmdDowO3JpZ2h0OjA7dG9wOjA7Ym90dG9tOjA7YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuNyk7ei1pbmRleDogMTAwMDt9XHJcbiAgICAgICAgLmxheWVyX2JveHtwb3NpdGlvbjogYWJzb2x1dGU7bGVmdDo1MCU7dG9wOjUwJTt0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpOy13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTt3aWR0aDozMi40NXJlbTttYXgtd2lkdGg6ODYuNSU7fVxyXG4gICAgICAgICAgICAubGF5ZXJfYm94IC5sYXllcl9jbG9zZXtwb3NpdGlvbjogYWJzb2x1dGU7cmlnaHQ6MDt0b3A6LTQuMjVyZW07d2lkdGg6Mi44NXJlbTtoZWlnaHQ6NC4yNXJlbTtiYWNrZ3JvdW5kOiB1cmwoXCIuL2ltZ3MvbGF5ZXJDbG9zZS5wbmdcIikgbm8tcmVwZWF0IGNlbnRlci8xMDAlIDEwMCU7fVxyXG4gICAgICAgICAgICAubGF5ZXJfYm94IC5sYXllcl9iYW5uZXJ7d2lkdGg6IDEwMCU7aGVpZ2h0OiAxNi41cmVtO2JvcmRlci10b3AtbGVmdC1yYWRpdXM6MC44cmVtO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjhyZW07YmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDt9XHJcbiAgICAgICAgICAgICAgICAubGF5ZXJfYm94IC5sYXllcl9iYW5uZXIgaW1ne21heC13aWR0aDogMTAwJTttYXgtaGVpZ2h0OjEwMCU7fVxyXG4gICAgICAgICAgICAubGF5ZXJfYm94IC5sYXllcl92YWx1ZXtib3gtc2l6aW5nOmJvcmRlci1ib3g7cG9zaXRpb246IGFic29sdXRlO3JpZ2h0OjA7dG9wOjEyLjU1cmVtO3BhZGRpbmc6MCAxcmVtIDAgMS41cmVtO2hlaWdodDozcmVtO2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MS41cmVtO2JvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEuNXJlbTtiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO2xpbmUtaGVpZ2h0OiAzcmVtO2ZvbnQtc2l6ZTogMS4zcmVtO2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjogI2ZmNWE2ZTt9XHJcbiAgICAgICAgICAgIC5sYXllcl9ib3ggLmxheWVyX2RldGFpbHt3aWR0aDogMTAwJTtwYWRkaW5nOi45cmVtIDAgMC45NXJlbSAxLjdyZW07YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtvdmVyZmxvdzogaGlkZGVuO31cclxuICAgICAgICAgICAgICAgIC5sYXllcl9ib3ggLmxheWVyX2RldGFpbCAuZGV0YWlsX3RpdGxle21hcmdpbjowLjdyZW0gMCAxLjJyZW07Zm9udC1zaXplOiAxLjlyZW07Y29sb3I6IzMzMzMzMztsaW5lLWhlaWdodDogMi4xcmVtO2ZvbnQtd2VpZ2h0OiBub3JtYWw7fVxyXG4gICAgICAgICAgICAgICAgLmxheWVyX2JveCAubGF5ZXJfZGV0YWlsIC5kZXRhaWxfZGVzY3ttYXJnaW46MXJlbSAwO2ZvbnQtc2l6ZTogMS4zcmVtO2xpbmUtaGVpZ2h0OiAxLjVyZW07fVxyXG4gICAgICAgICAgICAgICAgICAgIC5sYXllcl9ib3ggLmxheWVyX2RldGFpbCAuZGV0YWlsX2Rlc2MgLmRlc2NfdGl0bGV7Y29sb3I6IzMzMzMzMzt9XHJcbiAgICAgICAgICAgICAgICAgICAgLmxheWVyX2JveCAubGF5ZXJfZGV0YWlsIC5kZXRhaWxfZGVzYyAuZGVzY19jb250ZW50e2xpbmUtaGVpZ2h0OiAxLjY1cmVtO2NvbG9yOiM2NjY2NjY7fVxyXG4gICAgICAgICAgICAubGF5ZXJfYm94IC5sYXllcl9idG57d2lkdGg6IDEwMCU7aGVpZ2h0OiA0LjhyZW07dGV4dC1hbGlnbjogY2VudGVyO2ZvbnQtc2l6ZTogMS42cmVtO2xpbmUtaGVpZ2h0OiA0LjhyZW07Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowLjhyZW07Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuOHJlbTtiYWNrZ3JvdW5kLWNvbG9yOiNlMGNhOGQ7IH1cclxuICAgICAgICAgICAgICAgIC5sYXllcl9ib3ggLmxheWVyX2J0biBhe2Rpc3BsYXk6IGJsb2NrO31cclxuICAgICAgICAgICAgICAgIC5sYXllcl9ib3ggLmxheWVyX2J0biBhLmNvbmZpcm17fVxyXG4gICAgICAgICAgICAgICAgLndoaXRle2NvbG9yOiNmZmY7fVxyXG4gICAgLmlubGluZXtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7fVxyXG5cclxuPC9zdHlsZT5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnQvZGV0YWlsL2NvbXBvbmVudHMvc2hvd0dpZnQudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0uZ2lmdEluZm9cbiAgICA/IF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2lmdGxheWVyIGxheWVyXCIsXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIHRvdWNobW92ZTogX3ZtLnByZXZlbnQsXG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0ICE9PSAkZXZlbnQuY3VycmVudFRhcmdldCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5jbG9zZSgkZXZlbnQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsYXllcl9ib3hcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxheWVyX2Nsb3NlXCIsXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNsb3NlKCRldmVudClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGF5ZXJfYmFubmVyIHJvdyBtaWRkbGVcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBfdm0uZ2lmdEluZm8uaW1nU3JjLCBhbHQ6IFwiXCIgfSB9KVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsYXllcl92YWx1ZVwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwi5Lu35YC877yaXCIgKyBfdm0uX3MocGFyc2VJbnQoX3ZtLmdpZnRJbmZvLnByaWNlKSAvIDEwMCkgKyBcIuWFg1wiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGF5ZXJfZGV0YWlsXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwiZGV0YWlsX3RpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmdpZnRJbmZvLm5hbWUpKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkZXRhaWxfZGVzY1wiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRlc2NfdGl0bGUgaW5saW5lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi6YCC55So562J57qn77yaXCIpXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRlc2NfY29udGVudCBpbmxpbmVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5naWZ0SW5mby5sZXZlbCkpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJkZXRhaWxfZGVzY1wiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkZXNjX3RpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLkvb/nlKjmlrnms5XvvJpcIilcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZ2lmdEluZm8udXNlTWV0aG9kLCBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IGtleTogaW5kZXgsIHN0YXRpY0NsYXNzOiBcImRlc2NfY29udGVudFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoaXRlbSkpXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxheWVyX2J0blwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29uZmlybSB3aGl0ZSBjb2xcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiamF2YXNjcmlwdDp2b2lkKDApO1wiIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jb25maXJtKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIueri+WNs+mihuWPllwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdXG4gICAgICApXG4gICAgOiBfdm0uX2UoKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbnZhciBlc0V4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5leHBvcnQgZGVmYXVsdCBlc0V4cG9ydHNcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtYWIyYzQxZTZcIiwgZXNFeHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTMuNy4yQHZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtYWIyYzQxZTZcIixcImhhc1Njb3BlZFwiOnRydWUsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDEzLjcuMkB2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvY29tcG9uZW50L2RldGFpbC9jb21wb25lbnRzL3Nob3dHaWZ0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvX2V4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbkAzLjAuMkBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4vZGlzdC9sb2FkZXIuanM/e1xcXCJvbWl0XFxcIjoxLFxcXCJyZW1vdmVcXFwiOnRydWV9IXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj97XFxcImltcG9ydExvYWRlcnNcXFwiOjEsXFxcIm1pbmltaXplXFxcIjpmYWxzZSxcXFwic291cmNlTWFwXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDEzLjcuMkB2dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtYWIyYzQxZTZcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxMy43LjJAdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Nob3dHaWZ0LnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDEzLjcuMkB2dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG5leHBvcnQgKiBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDEzLjcuMkB2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vc2hvd0dpZnQudnVlXCJcbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDEzLjcuMkB2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vc2hvd0dpZnQudnVlXCJcbi8qIHRlbXBsYXRlICovXG5pbXBvcnQgX192dWVfdGVtcGxhdGVfXyBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTMuNy4yQHZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtYWIyYzQxZTZcXFwiLFxcXCJoYXNTY29wZWRcXFwiOnRydWUsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDEzLjcuMkB2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zaG93R2lmdC52dWVcIlxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gXCJkYXRhLXYtYWIyYzQxZTZcIlxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjXFxcXGNvbXBvbmVudFxcXFxkZXRhaWxcXFxcY29tcG9uZW50c1xcXFxzaG93R2lmdC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtYWIyYzQxZTZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1hYjJjNDFlNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnQvZGV0YWlsL2NvbXBvbmVudHMvc2hvd0dpZnQudnVlXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiB2LWlmPVwiaXNTaG93XCIgY2xhc3M9XCJsYXllclwiIGlkPVwibGF5ZXJcIiBAdG91Y2htb3ZlPVwicHJldmVudFwiIEBjbGljay5zZWxmPVwiY2xvc2VcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibGF5ZXJfYm94IHZpcHRpcFwiPlxyXG4gICAgICAgICAgICA8YSBAY2xpY2s9XCJjbG9zZVwiIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgY2xhc3M9XCJsYXllcl9jbG9zZVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiY2xvc2VJY29uXCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpYWxvZ19pbWdcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cInBhZ2VJbmZvLmhlYWRJY29uXCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGlhbG9nX3RpdFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdFwiPnt7cGFnZUluZm8udGl0bGV9fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpYWxvZ19zdWJ0aXRcIj57e3BhZ2VJbmZvLnByaXplRGVzY319PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGlhbG9nX2luZm8gZ3JpZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpYWxvZ19pbmZvX2l0ZW0gY29sLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mb19pbWcgaW1nMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJwYWdlSW5mby5pY29uc1swXS5pY29uXCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwidmlwZ2lmdCBsdjIgZ3JleVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImluZm9fdHh0IHR4dDFcIj57e3BhZ2VJbmZvLmljb25zWzBdLnR4dH19PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGlhbG9nX2luZm9faXRlbSBjb2wtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvX2ltZyBpbWcyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cInBhZ2VJbmZvLmljb25zWzFdLmljb25cIiBhbHQ9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImluZm9fdHh0IHR4dDJcIj57e3BhZ2VJbmZvLmljb25zWzFdLnR4dH19PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGlhbG9nX2luZm9faXRlbSBjb2wtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvX2ltZyBpbWczXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cInBhZ2VJbmZvLmljb25zWzJdLmljb25cIiBhbHQ9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImluZm9fdHh0IHR4dDNcIj57e3BhZ2VJbmZvLmljb25zWzJdLnR4dH19PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGlhbG9nX2J0bmdyb3VwIGdyaWRcIj5cclxuICAgICAgICAgICAgICAgIDxhIEBjbGljay5zdG9wPVwiY2xvc2VcIiBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzPVwiZGlhbG9nX2J0biByZWQgY29sLTFcIiA+e3twYWdlSW5mby5idG4udHh0fX08L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQge3NldENvb2tpZSxnZXRDb29raWV9IGZyb20gXCIuLi8uLi8uLi9qcy9jb21tb24vZ2xvYmFsXCI7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6ICdwcm9tb3RlTGF5ZXInLFxyXG4gICAgZGF0YSgpe1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlzU2hvdzpmYWxzZSxcclxuICAgICAgICAgICAgLy/mmYvljYfml7bpl7TmsqHmnInotoXov4fkuIDkuKrmnIjlubbkuJTmsqHmnInlsZXnpLrov4fvvIhjb29raWXmnInmlYjmnJ/lhoXvvIlcclxuICAgICAgICAgICAgZGF0YUZvckdldEdpZnQ6W1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRJY29uOmdfY2RuICsgXCIvcHJpdmlsZWdlL2ltZy9kaWFsb2cvZGlhbHYyLnBuZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOlwi5oGt5Zac5oKo77yB5pmL5Y2H5Li6VjLkvJrlkZhcIixcclxuICAgICAgICAgICAgICAgICAgICBwcml6ZURlc2M6XCLmr4/mrKHmmYvljYfpg73mnInlpZbvvIznibnotaDmgqjku7flgLwxMOWFg+enr+WIhu+8gVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb25zOltcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjpnX2NkbiArICcvcHJpdmlsZWdlL2ltZy9naWZ0L2x2MmdpZnQxLnBuZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eHQ6J1Yx4oaSVjInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IGdfY2RuICsgJy9wcml2aWxlZ2UvaW1nL2dpZnQvdjNnaWZ0MS5wbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHh0OidWMuKGklYzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBnX2NkbiArICcvcHJpdmlsZWdlL2ltZy9naWZ0L3Y0Z2lmdDEucG5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR4dDonVjPihpJWNCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgYnRuOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHh0Olwi55+l6YGT5LqGXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRJY29uOmdfY2RuICsgXCIvcHJpdmlsZWdlL2ltZy9kaWFsb2cvZGlhbHYzLnBuZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOlwi5oGt5Zac5oKo77yB5pmL5Y2H5Li6VjPkvJrlkZhcIixcclxuICAgICAgICAgICAgICAgICAgICBwcml6ZURlc2M6XCLmr4/mrKHmmYvljYfpg73mnInlpZbvvIznibnotaDmgqjku7flgLw1MOWFg+enr+WIhu+8gVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb25zOltcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjpnX2NkbiArICcvcHJpdmlsZWdlL2ltZy9naWZ0L2x2MmdpZnQxLnBuZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eHQ6J1Yx4oaSVjInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IGdfY2RuICsgJy9wcml2aWxlZ2UvaW1nL2dpZnQvdjNnaWZ0MS5wbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHh0OidWMuKGklYzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBnX2NkbiArICcvcHJpdmlsZWdlL2ltZy9naWZ0L3Y0Z2lmdDEucG5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR4dDonVjPihpJWNCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgYnRuOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHh0Olwi55+l6YGT5LqGXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRJY29uOmdfY2RuICsgXCIvcHJpdmlsZWdlL2ltZy9kaWFsb2cvZGlhbHY0LnBuZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOlwi5oGt5Zac5oKo77yB5pmL5Y2H5Li6VjTkvJrlkZhcIixcclxuICAgICAgICAgICAgICAgICAgICBwcml6ZURlc2M6XCLmr4/mrKHmmYvljYfpg73mnInlpZbvvIznibnotaDmgqjku7flgLwxMDDlhYPnp6/liIbvvIFcIixcclxuICAgICAgICAgICAgICAgICAgICBpY29uczpbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246Z19jZG4gKyAnL3ByaXZpbGVnZS9pbWcvZ2lmdC9sdjJnaWZ0MS5wbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHh0OidWMeKGklYyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBnX2NkbiArICcvcHJpdmlsZWdlL2ltZy9naWZ0L3YzZ2lmdDEucG5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR4dDonVjLihpJWMydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogZ19jZG4gKyAnL3ByaXZpbGVnZS9pbWcvZ2lmdC92NGdpZnQxLnBuZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eHQ6J1Yz4oaSVjQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ0bjp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR4dDpcIuefpemBk+S6hlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAvL+aZi+WNh+aXtumXtOi2hei/h+S4gOS4quaciOW5tuS4lOayoeacieWxleekuui/h++8iGNvb2tpZeacieaViOacn+WGhe+8iVxyXG4gICAgICAgICAgICBkYXRhRm9ySGFzR2V0R2lmdDpbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZEljb246Z19jZG4gKyBcIi9wcml2aWxlZ2UvaW1nL2RpYWxvZy9kaWFsdjIucG5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6XCLmga3llpzmgqjvvIHmmYvljYfkuLpWMuS8muWRmFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHByaXplRGVzYzpcIuacgOmrmOWFq+mhueeJueadg++8jOWwiuS6q+WNh+e6p1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb25zOltcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjpnX2NkbiArICcvcHJpdmlsZWdlL2ltZy9yaWdodHNpY29uL2lwb3N0MS5wbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHh0OifnkIbotZTlhY3pgq4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IGdfY2RuICsgJy9wcml2aWxlZ2UvaW1nL3JpZ2h0c2ljb24vaWludml0ZTEucG5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR4dDon6YKA6K+35pyJ5aWWJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBnX2NkbiArICcvcHJpdmlsZWdlL2ltZy9yaWdodHNpY29uL2lzZXJ2ZXIucG5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR4dDon5LiT5bGe5a6i5pyNJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBidG46e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eHQ6XCLmn6XnnIvmiJHnmoTnibnmnYNcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZEljb246Z19jZG4gKyBcIi9wcml2aWxlZ2UvaW1nL2RpYWxvZy9kaWFsdjMucG5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6XCLmga3llpzmgqjvvIHmmYvljYfkuLpWM+S8muWRmFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHByaXplRGVzYzpcIuacgOmrmOWFq+mhueeJueadg++8jOWwiuS6q+WNh+e6p1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb25zOltcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjpnX2NkbiArICcvcHJpdmlsZWdlL2ltZy9yaWdodHNpY29uL2lpbnZpdGUyLnBuZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eHQ6J+mCgOivt+acieWllidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogZ19jZG4gKyAnL3ByaXZpbGVnZS9pbWcvcmlnaHRzaWNvbi9pc2VydmVyLnBuZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eHQ6J+S4k+WxnuWuouacjSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogZ19jZG4gKyAnL3ByaXZpbGVnZS9pbWcvcmlnaHRzaWNvbi9pY2xhaW1zLnBuZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eHQ6J+eQhui1lOengeS6uueuoeWutidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgYnRuOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHh0Olwi5p+l55yL5oiR55qE54m55p2DXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRJY29uOmdfY2RuICsgXCIvcHJpdmlsZWdlL2ltZy9kaWFsb2cvZGlhbHY0LnBuZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOlwi5oGt5Zac5oKo77yB5pmL5Y2H5Li6VjTkvJrlkZhcIixcclxuICAgICAgICAgICAgICAgICAgICBwcml6ZURlc2M6XCLmnIDpq5jlhavpobnnibnmnYPvvIzlsIrkuqvljYfnuqdcIixcclxuICAgICAgICAgICAgICAgICAgICBpY29uczpbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246Z19jZG4gKyAnL3ByaXZpbGVnZS9pbWcvcmlnaHRzaWNvbi9pc2VydmVyLnBuZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eHQ6J+S4k+WxnuWuouacjSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogZ19jZG4gKyAnL3ByaXZpbGVnZS9pbWcvcmlnaHRzaWNvbi9pY2xhaW1zLnBuZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eHQ6J+eQhui1lOengeS6uueuoeWutidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogZ19jZG4gKyAnL3ByaXZpbGVnZS9pbWcvcmlnaHRzaWNvbi9pdGVldGgucG5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR4dDon5YWN6LS55rSX54mZJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBidG46e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eHQ6XCLmn6XnnIvmiJHnmoTnibnmnYNcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgcGFnZUluZm86e1xyXG4gICAgICAgICAgICAgICAgaGVhZEljb246Z19jZG4gKyBcIi9wcml2aWxlZ2UvaW1nL2RpYWxvZy9kaWF2aXAucG5nXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTpcIuavj+aciDEtM+WPt+S8muWRmOaXpe+8gVwiLFxyXG4gICAgICAgICAgICAgICAgcHJpemVEZXNjOlwi5q+P5pyIMeWPt+eLguasouiKglwiLFxyXG4gICAgICAgICAgICAgICAgaWNvbnM6W1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjpnX2NkbiArICcvcHJpdmlsZWdlL2ltZy9kaWFsb2cvaW5mbzEucG5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHh0OifkvY7ku7fnp5LmnYAnXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246IGdfY2RuICsgJy9wcml2aWxlZ2UvaW1nL2RpYWxvZy9pbmZvMi5wbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eHQ6J+aKveeZvuWFg+Wkp+WllidcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogZ19jZG4gKyAnL3ByaXZpbGVnZS9pbWcvZGlhbG9nL2luZm8zLnBuZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR4dDon5LiT5Lqr5Lu35o2i6LStJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBidG46e1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDpcImNsb3NlYW5kaW5wdXQgIC9wcml2aWxlZ2UvYWRkTWVtYmVyUGhvbmVcIixcclxuICAgICAgICAgICAgICAgICAgICB0eHQ6XCLlvIDlp4vni4LmrKJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDp7XHJcbiAgICAgICAgY2xvc2VJY29uKCl7XHJcbiAgICAgICAgICAgIHJldHVybiBnX2NkbiArICcvcHJpdmlsZWdlL2ltZy9sYXllcl9jbG9zZTIucG5nJztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInByb21vdGUgY3JlYXRlXCIpXHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgICB0aGlzLmluaXRMYXllcigpO1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6e1xyXG4gICAgICAgIGluaXRMYXllcigpIHtcclxuICAgICAgICAgICAgdmFyIGNoYW5nZXRpbWUgPSB0aGlzLmdldExldmVsQ2hhbmdlVGltZSgpO1xyXG4gICAgICAgICAgICB2YXIgZGF5ID0gbmV3IERhdGUoKS5nZXREYXRlKCk7XHJcbiAgICAgICAgICAgIHZhciBsZXZlbCA9IGdfbGV2ZWw7XHJcbiAgICAgICAgICAgIHZhciBkZWFkbGluZTtcclxuICAgICAgICAgICAgLy/pmLLmraJWMeW5suaJsFxyXG4gICAgICAgICAgICBzZXRDb29raWUoXCJnZXRnaWZ0MVwiLCBcInZpZXdlZFwiLDM2MDAqMjQqMzY1KjIpO1xyXG4gICAgICAgICAgICBzZXRDb29raWUoXCJsZXZlbHVwMVwiLCBcInZpZXdlZFwiLDM2MDAqMjQqMzY1KjIpO1xyXG4gICAgICAgICAgICAvL+S8muWRmOaXpea1ruWxgizmmYvljYfmta7lsYLlkozkvJrlkZjml6Xmta7lsYLlkIzml7blh7rnjrDml7bkvJjlhYjlsZXnpLrkvJrlkZjml6Xmta7lsYJcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEYXlcIixkYXkpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hhbmdldGltZVwiLGNoYW5nZXRpbWUpXHJcbiAgICAgICAgICAgIGlmKGRheT09MXx8ZGF5PT0yfHxkYXk9PTN8fGRheSA9PSAxMSl7XHJcbiAgICAgICAgICAgICAgICBpZigoZ2V0Q29va2llKFwidmlwZGF5XCIpIT1cInZpZXdlZFwifHxnZXRDb29raWUoXCJ2aXBkYXlcIik9PXVuZGVmaW5lZCkmJihnZXRDb29raWUoXCJnZXRnaWZ0XCIrbGV2ZWwpPT1cInZpZXdlZFwifHxnZXRDb29raWUoXCJsZXZlbHVwXCIrbGV2ZWwpPT1cInZpZXdlZFwiKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1Nob3cgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldENvb2tpZShcInZpcGRheVwiLCBcInZpZXdlZFwiLDM2MDAqMjQqMyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoZ19sZXZlbGluZm8hPTEgJiYgZ19sZXZlbGluZm8ubGVuZ3RoPj0yKXtcclxuICAgICAgICAgICAgICAgIHZhciBwcmV2TGV2ZWwgPSBnX2xldmVsaW5mb1tnX2xldmVsaW5mby5sZW5ndGgtMl0ubGV2ZWw7XHJcbiAgICAgICAgICAgICAgICBpZihsZXZlbCA+IHByZXZMZXZlbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYobGV2ZWwgPT0gMil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNoYW5nZXRpbWUudjEhPScnJiYoY2hhbmdldGltZS52Mi1jaGFuZ2V0aW1lLnYxKTw9ODY0MDAqMzApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdldENvb2tpZShcImdldGdpZnQyXCIpIT1cInZpZXdlZFwifHxnZXRDb29raWUoXCJnZXRnaWZ0MlwiKT09dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VJbmZvID0gdGhpcy5kYXRhRm9yR2V0R2lmdFswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q29va2llKFwiZ2V0Z2lmdDJcIiwgXCJ2aWV3ZWRcIiwzNjUqMzYwMCoyNCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdldENvb2tpZShcImxldmVsdXAyXCIpIT1cInZpZXdlZFwifHxnZXRDb29raWUoXCJsZXZlbHVwMlwiKT09dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VJbmZvID0gdGhpcy5kYXRhRm9ySGFzR2V0R2lmdFswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q29va2llKFwibGV2ZWx1cDJcIiwgXCJ2aWV3ZWRcIiwzNjUqMzYwMCoyNCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoY2hhbmdldGltZS52MiAhPSAnJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWFkbGluZSA9IHRoaXMuZ2V0TG9jYWxUaW1lKGNoYW5nZXRpbWUudjIgKyA4NjQwMCozMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVhZGxpbmUgPSB0aGlzLmdldExvY2FsVGltZShEYXRlLnBhcnNlKG5ldyBEYXRlKCkpLzEwMDArODY0MDAqMzApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoXCJyZXR1cm5WaXBUaXBzXCIsZGVhZGxpbmUgK1wi5LmL5YmN5oiQ5Li6VjPkvJrlkZjlj6/ojrflvpc1MDDnp6/liIZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGxldmVsPT0zKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoKGNoYW5nZXRpbWUudjEhPScnJiYoY2hhbmdldGltZS52My1jaGFuZ2V0aW1lLnYxKTw9ODY0MDAqMzApfHwoY2hhbmdldGltZS52MiE9JycmJihjaGFuZ2V0aW1lLnYzLWNoYW5nZXRpbWUudjIpPD04NjQwMCozMCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdldENvb2tpZShcImdldGdpZnQzXCIpIT1cInZpZXdlZFwifHxnZXRDb29raWUoXCJnZXRnaWZ0M1wiKT09dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VJbmZvID0gdGhpcy5kYXRhRm9yR2V0R2lmdFsxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q29va2llKFwiZ2V0Z2lmdDNcIiwgXCJ2aWV3ZWRcIiwzNjAwKjI0KjM2NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdldENvb2tpZShcImxldmVsdXAzXCIpIT1cInZpZXdlZFwifHxnZXRDb29raWUoXHRcImxldmVsdXAzXCIpPT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZUluZm8gPSB0aGlzLmRhdGFGb3JIYXNHZXRHaWZ0WzFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDb29raWUoXCJsZXZlbHVwM1wiLCBcInZpZXdlZFwiLDM2MDAqMjQqMzY1KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjaGFuZ2V0aW1lLnYzIT0nJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWFkbGluZSA9IHRoaXMuZ2V0TG9jYWxUaW1lKGNoYW5nZXRpbWUudjMrODY0MDAqMzApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlYWRsaW5lID0gdGhpcy5nZXRMb2NhbFRpbWUoRGF0ZS5wYXJzZShuZXcgRGF0ZSgpKS8xMDAwKzg2NDAwKjMwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KFwicmV0dXJuVmlwVGlwc1wiLGRlYWRsaW5lICtcIuWJjeaZi+WNh+S4ulY05Lya5ZGY5Y+v6I635b6XMTAwMOenr+WIhlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYobGV2ZWw9PTQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZigoY2hhbmdldGltZS52MSE9JycmJihjaGFuZ2V0aW1lLnY0LWNoYW5nZXRpbWUudjEpPD04NjQwMCozMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8KGNoYW5nZXRpbWUudjIhPScnJiYoY2hhbmdldGltZS52NC1jaGFuZ2V0aW1lLnYyKTw9ODY0MDAqMzApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fChjaGFuZ2V0aW1lLnYzIT0nJyYmKGNoYW5nZXRpbWUudjQtY2hhbmdldGltZS52Myk8PTg2NDAwKjMwKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2V0Q29va2llKFwiZ2V0Z2lmdDRcIikhPVwidmlld2VkXCJ8fGdldENvb2tpZShcImdldGdpZnQ0XCIpPT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZUluZm8gPSB0aGlzLmRhdGFGb3JHZXRHaWZ0WzJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDb29raWUoXCJnZXRnaWZ0NFwiLCBcInZpZXdlZFwiLDM2NSozNjAwKjI0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2V0Q29va2llKFwibGV2ZWx1cDRcIikhPVwidmlld2VkXCJ8fGdldENvb2tpZShcImxldmVsdXA0XCIpPT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZUluZm8gPSB0aGlzLmRhdGFGb3JIYXNHZXRHaWZ0WzJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDb29raWUoXCJsZXZlbHVwNFwiLCBcInZpZXdlZFwiLDM2NSoyNCozNjAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KFwicmV0dXJuVmlwVGlwc1wiLFwi5oKo5bey5piv5pyA6auY562J57qn5Lya5ZGY5LqGXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHRcdCAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGlmKGxldmVsID09IDEpe1xyXG4gICAgICAgICAgICAgICAgICAgIGRlYWRsaW5lID0gdGhpcy5nZXRMb2NhbFRpbWUoRGF0ZS5wYXJzZShuZXcgRGF0ZSgpKS8xMDAwKzg2NDAwKjMwKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KFwicmV0dXJuVmlwVGlwc1wiLGRlYWRsaW5lICtcIuWJjeaZi+WNh+S4ulYy5Lya5ZGY5Y+v6I635b6XMTAw56ev5YiGXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRMZXZlbENoYW5nZVRpbWUoKXtcclxuICAgICAgICAgICAgLy/ojrflj5bnrYnnuqflr7nlupTnmoTlj5jmm7Tml7bpl7RcclxuICAgICAgICAgICAgdmFyIHRpbWUgPSB7fTtcclxuICAgICAgICAgICAgdmFyIHYxPScnLHYyPScnLHYzPScnLHY0PSAnJztcclxuICAgICAgICAgICAgLy/lj5blkITkuKrnrYnnuqfmnIDov5HnmoTlj5jmm7Tml7bpl7RcclxuICAgICAgICAgICAgaWYoZ19sZXZlbGluZm8hPTEpe1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaT0wO2k8Z19sZXZlbGluZm8ubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZ19sZXZlbGluZm9baV0ubGV2ZWwgPT0xKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdjEgPSBnX2xldmVsaW5mb1tpXS50aW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZihnX2xldmVsaW5mb1tpXS5sZXZlbCA9PTIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2MiA9IGdfbGV2ZWxpbmZvW2ldLnRpbWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZ19sZXZlbGluZm9baV0ubGV2ZWwgPT0zKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdjMgPSBnX2xldmVsaW5mb1tpXS50aW1lXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGdfbGV2ZWxpbmZvW2ldLmxldmVsID09NCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHY0ID0gZ19sZXZlbGluZm9baV0udGltZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aW1lID0ge3YxOnYxLHYyOnYyLHYzOnYzLHY0OnY0fTtcclxuICAgICAgICAgICAgcmV0dXJuIHRpbWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRMb2NhbFRpbWUoblMpIHtcclxuICAgICAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZShwYXJzZUludChuUykgKiAxMDAwKTtcclxuICAgICAgICAgICAgdmFyIHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgICAgIHZhciBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSsxO1xyXG4gICAgICAgICAgICB2YXIgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XHJcbiAgICAgICAgICAgIHZhciBmZGF0ZSA9IHllYXIrJy4nK21vbnRoKycuJytkYXk7XHJcbiAgICAgICAgICAgIHJldHVybiBmZGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHByZXZlbnQoZSl7XHJcbiAgICAgICAgICAgIGUuX3ByZXZlbnQgPSB0cnVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2xvc2UoKXtcclxuICAgICAgICAgICAgdGhpcy4kZW1pdChcImNsb3NlXCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29uZmlybSgpe1xyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KFwiY29uZmlybVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgcHJvcHM6W11cclxufVxyXG48L3NjcmlwdD5cclxuPCEtLSBBZGQgXCJzY29wZWRcIiBhdHRyaWJ1dGUgdG8gbGltaXQgQ1NTIHRvIHRoaXMgY29tcG9uZW50IG9ubHkgLS0+XHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgICAubGF5ZXJ7IHBvc2l0aW9uOiBmaXhlZDsgdG9wOiA1MCU7IGxlZnQ6IDUwJTsgd2lkdGg6IDEwMCU7IG1heC13aWR0aDogNjQwcHg7IGhlaWdodDogMTAwJTsgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpOyAgei1pbmRleDogMTAwMDsgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IH1cclxuICAgIC5sYXllcl9ib3h7IHBvc2l0aW9uOiByZWxhdGl2ZTsgdG9wOiA1MCU7IGxlZnQ6IDUwJTsgd2lkdGg6IDk2JTsgcGFkZGluZzogMS41cmVtIDFyZW07IGJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IC40cmVtOyB0ZXh0LWFsaWduOiBjZW50ZXI7IC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyB9XHJcbiAgICAuZGlhbG9neyB3aWR0aDogOTAlOyBwYWRkaW5nOiAxLjNyZW0gMCAwOyB9XHJcbiAgICAudmlwdGlweyB3aWR0aDogODAlOyBwYWRkaW5nOiA3cmVtIDAgMDsgfVxyXG4gICAgXHQubGF5ZXJfY2xvc2V7IGRpc3BsYXk6IGJsb2NrOyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogLTEuNHJlbTsgcmlnaHQ6IC0xLjRyZW07IHdpZHRoOiAyLjhyZW07IGhlaWdodDogMi44cmVtOyB9XHJcbiAgICBcdC5kaWFsb2dfaW1neyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogLTcuNXJlbTsgbGVmdDogNTAlOyB3aWR0aDogMTYuN3JlbTsgaGVpZ2h0OiAxNi43cmVtOyBtYXJnaW4tbGVmdDogLTguMjVyZW07IH1cclxuICAgICAgICBpbWd7bWF4LXdpZHRoOiAxMDAlO21heC13aWR0aDogMTAwJTt9XHJcbiAgICAgICAgLmRpYWxvZ190aXR7IG1hcmdpbi1ib3R0b206IDEuM3JlbTsgZm9udC1zaXplOiAxLjZyZW07IGNvbG9yOiAjM2MzYzNjOyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cclxuICAgICAgICBcdC5kaWFsb2dfc3VidGl0eyBmb250LXNpemU6IDEuMXJlbTsgY29sb3I6ICM5Njk2OTY7IH1cclxuICAgICAgICAuZGlhbG9nX3R4dHsgbWFyZ2luLWJvdHRvbTogMnJlbTsgcGFkZGluZzogMCAycmVtOyBmb250LXNpemU6IDEuM3JlbTsgY29sb3I6ICMzMzMzMzM7IH1cclxuICAgICAgICAuZGlhbG9nX2lucHV0eyBkaXNwbGF5OiBibG9jazsgd2lkdGg6IDkwJTsgaGVpZ2h0OiAzLjZyZW07IG1hcmdpbjogMCA1JSAxLjNyZW07IHBhZGRpbmc6IDAgMXJlbTsgYm9yZGVyOiBub25lOyBib3JkZXItcmFkaXVzOiAuNHJlbTsgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTsgbGluZS1oZWlnaHQ6IDMuNnJlbTsgZm9udC1zaXplOiAxLjNyZW07IGNvbG9yOiAjM2MzYzNjOyB9XHJcbiAgICAgICAgLmRpYWxvZ19pbmZveyBtYXJnaW46IDAgYXV0byAyLjJyZW07IHBhZGRpbmc6IDAgMnJlbTsgfVxyXG4gICAgICAgIFx0LmRpYWxvZ19pbmZvX2l0ZW17IHdpZHRoOiA3cmVtOyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cclxuICAgICAgICBcdFx0LmluZm9faW1neyB3aWR0aDogNXJlbTsgaGVpZ2h0OiA1cmVtOyBtYXJnaW46IDAgYXV0bzsgfVxyXG4gICAgICAgIFx0XHQuaW5mb19pbWcgLnZpcGdpZnR7IHdpZHRoOiA1cmVtOyBoZWlnaHQ6IDVyZW07IH1cclxuICAgICAgICBcdFx0LmluZm9fdHh0eyBtYXJnaW4tdG9wOi41cmVtO2ZvbnQtc2l6ZTogMXJlbTsgY29sb3I6ICM5Njk2OTY7IH1cclxuICAgICAgICAuZGlhbG9nX2J0bmdyb3VweyBoZWlnaHQ6IDQuNHJlbTsgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTsgYm9yZGVyLXRvcDogc29saWQgMXB4ICNlMmU1ZTc7IGJvcmRlci1yYWRpdXM6IDAgMCAuNHJlbSAuNHJlbTsgbGluZS1oZWlnaHQ6IDQuNHJlbTsgZm9udC1zaXplOiAxLjVyZW07IH1cclxuICAgICAgICAgICAgLmRpYWxvZ19idG57IGRpc3BsYXk6IGJsb2NrOyB9XHJcbiAgICAgICAgICAgIC5kaWFsb2dfYnRuOmZpcnN0LW9mLXR5cGV7IGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IC40cmVtOyB9XHJcbiAgICAgICAgICAgIC5kaWFsb2dfYnRuOmxhc3Qtb2YtdHlwZXsgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IC40cmVtOyB9XHJcbiAgICAgICAgICAgIC5kaWFsb2dfYnRuOm5vdCg6bGFzdC1vZi10eXBlKXsgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggI2UyZTVlNzsgfVxyXG4gICAgICAgICAgICAuZGlhbG9nX2J0bi5ibHVleyBjb2xvcjogIzhjN2ZlZTsgfVxyXG4gICAgICAgICAgICAuZGlhbG9nX2J0bi5ncmV5eyBjb2xvcjogIzk5OTk5OTsgfVxyXG4gICAgICAgICAgICAuZGlhbG9nX2J0bi5yZWQgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjkzZjU2OyBjb2xvcjogI2ZmZjsgfVxyXG4vKiDkuKrkurrkv6Hmga/lm77moIcgKi9cclxuLmhlYWRpY29uIFx0XHR7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogNTAlOyBib3R0b206IDA7IGRpc3BsYXk6IGJsb2NrOyBoZWlnaHQ6IDEuODVyZW07IHdpZHRoOiA1LjA1cmVtOyBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTsgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpOyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTsgfVxyXG4vKiAuaGVhZGljb24ubHYxIFx0eyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1nL2hlYWRpY29uL2xldmVsMS5wbmcpOyB9XHJcbi5oZWFkaWNvbi5sdjIgXHR7IGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWcvaGVhZGljb24vbGV2ZWwyLnBuZyk7IH1cclxuLmhlYWRpY29uLmx2MyBcdHsgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltZy9oZWFkaWNvbi9sZXZlbDMucG5nKTsgfVxyXG4uaGVhZGljb24ubHY0IFx0eyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1nL2hlYWRpY29uL2xldmVsNC5wbmcpOyB9ICovXHJcbi8qIC5oZWFkaWNvbi53aW5ncyB7IGJvdHRvbTogLjhyZW07IGhlaWdodDogMS45NXJlbTsgd2lkdGg6IDcuMDVyZW07IGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWcvaGVhZGljb24vd2luZ3MucG5nKTsgfSAqL1xyXG4vKiDmqKHlnZfmoIfpopjpm6rnoqflm74gKi9cclxuLyogLnRpdGxlIFx0XHQgIHsgYmFja2dyb3VuZDogdXJsKC4uL2ltZy90aXRsZS90aXRsZS5wbmcpIG5vLXJlcGVhdDsgYmFja2dyb3VuZC1zaXplOiAxNy4xcmVtIDE3LjFyZW07IGRpc3BsYXk6IGJsb2NrOyBtYXJnaW46IDAgYXV0bzsgfSAqL1xyXG4udGl0bGUudGl0bGUxIHsgaGVpZ2h0OiAyLjJyZW07IHdpZHRoOiAxMy4ycmVtOyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7IH1cclxuLnRpdGxlLnRpdGxlMiB7IGhlaWdodDogMi4ycmVtOyB3aWR0aDogMTAuMnJlbTsgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtM3JlbTsgfVxyXG4udGl0bGUudGl0bGUzIHsgaGVpZ2h0OiAyLjJyZW07IHdpZHRoOiAxNC4ycmVtOyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC02cmVtOyB9XHJcbi50aXRsZS50aXRsZTQgeyBoZWlnaHQ6IDIuMnJlbTsgd2lkdGg6IDE3LjJyZW07IGJhY2tncm91bmQtcG9zaXRpb246IDAgLTlyZW07IH1cclxuLnRpdGxlLnRpdGxlNSB7IGhlaWdodDogMi4ycmVtOyB3aWR0aDogMTAuMnJlbTsgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMTJyZW07IH1cclxuLnRpdGxlLnRpdGxlNiB7IGhlaWdodDogMi4ycmVtOyB3aWR0aDogMTAuMnJlbTsgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMTVyZW07IH1cclxuLyog5Lya5ZGY5p2D55uK5Zu+5qCHICovXHJcbi5yaWdodHNpY29uIFx0XHRcdCB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgZGlzcGxheTogYmxvY2s7IGhlaWdodDogNXJlbTsgd2lkdGg6IDVyZW07IG1hcmdpbjogMCBhdXRvIC42cmVtOyBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTsgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgfVxyXG4vKiAucmlnaHRzaWNvbi52aXBkYXlcdFx0IHsgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltZy9yaWdodHNpY29uL2l2aXBkYXkucG5nKTsgfVxyXG4ucmlnaHRzaWNvbi5iaXJ0aFx0IFx0IHsgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltZy9yaWdodHNpY29uL2liaXJ0aC5wbmcpOyB9XHJcbi5yaWdodHNpY29uLmxlY3R1cmVcdFx0IHsgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltZy9yaWdodHNpY29uL2lsZWN0dXJlLnBuZyk7IH1cclxuLnJpZ2h0c2ljb24ucG9zdDFcdCBcdCB7IGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWcvcmlnaHRzaWNvbi9pcG9zdDEucG5nKTsgfVxyXG4ucmlnaHRzaWNvbi5wb3N0Mlx0IFx0IHsgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltZy9yaWdodHNpY29uL2lwb3N0Mi5wbmcpOyB9XHJcbi5yaWdodHNpY29uLnBvc3QzXHQgXHQgeyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1nL3JpZ2h0c2ljb24vaXBvc3QzLnBuZyk7IH1cclxuLnJpZ2h0c2ljb24uaW52aXRlMVx0XHQgeyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1nL3JpZ2h0c2ljb24vaWludml0ZTEucG5nKTsgfVxyXG4ucmlnaHRzaWNvbi5pbnZpdGUyXHRcdCB7IGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWcvcmlnaHRzaWNvbi9paW52aXRlMi5wbmcpOyB9XHJcbi5yaWdodHNpY29uLmludml0ZTNcdFx0IHsgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltZy9yaWdodHNpY29uL2lpbnZpdGUzLnBuZyk7IH1cclxuLnJpZ2h0c2ljb24uc2VydmVyXHRcdCB7IGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWcvcmlnaHRzaWNvbi9pc2VydmVyLnBuZyk7IH1cclxuLnJpZ2h0c2ljb24uY2xhaW1zXHRcdCB7IGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWcvcmlnaHRzaWNvbi9pY2xhaW1zLnBuZyk7IH1cclxuLnJpZ2h0c2ljb24udGVldGhcdCBcdCB7IGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWcvcmlnaHRzaWNvbi9pdGVldGgucG5nKTsgfVxyXG4uZ3JleSAucmlnaHRzaWNvbi52aXBkYXkgeyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1nL3JpZ2h0c2ljb24vZ3ZpcGRheS5wbmcpOyB9XHJcbi5ncmV5IC5yaWdodHNpY29uLmJpcnRoICB7IGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWcvcmlnaHRzaWNvbi9nYmlydGgucG5nKTsgfVxyXG4uZ3JleSAucmlnaHRzaWNvbi5sZWN0dXJleyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1nL3JpZ2h0c2ljb24vZ2xlY3R1cmUucG5nKTsgfVxyXG4uZ3JleSAucmlnaHRzaWNvbi5wb3N0MSAgeyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1nL3JpZ2h0c2ljb24vZ3Bvc3QucG5nKTsgfVxyXG4uZ3JleSAucmlnaHRzaWNvbi5pbnZpdGUxeyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1nL3JpZ2h0c2ljb24vZ2ludml0ZS5wbmcpOyB9XHJcbi5ncmV5IC5yaWdodHNpY29uLnNlcnZlciB7IGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWcvcmlnaHRzaWNvbi9nc2VydmVyLnBuZyk7IH1cclxuLmdyZXkgLnJpZ2h0c2ljb24uY2xhaW1zIHsgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltZy9yaWdodHNpY29uL2djbGFpbXMucG5nKTsgfVxyXG4uZ3JleSAucmlnaHRzaWNvbi50ZWV0aFx0IHsgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltZy9yaWdodHNpY29uL2d0ZWV0aC5wbmcpOyB9ICovXHJcbi8qIOS8muWRmOaZi+WNh+ekvOeJqeWbvuaghyAqL1xyXG4udmlwZ2lmdCBcdFx0IHsgZGlzcGxheTogYmxvY2s7IGhlaWdodDogNS4ycmVtOyB3aWR0aDogNS4ycmVtOyBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTsgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgfVxyXG4vKiAudmlwZ2lmdC5sdjJcdCB7IGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWcvZ2lmdC9sdjJnaWZ0LnBuZyk7IH1cclxuLnZpcGdpZnQubHYzXHQgeyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1nL2dpZnQvdjNnaWZ0LnBuZyk7IH1cclxuLnZpcGdpZnQubHY0XHQgeyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1nL2dpZnQvdjRnaWZ0LnBuZyk7IH1cclxuLnZpcGdpZnQubHYyLmdyZXl7IGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWcvZ2lmdC9sdjJnaWZ0MS5wbmcpOyB9XHJcbi52aXBnaWZ0Lmx2My5ncmV5eyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1nL2dpZnQvdjNnaWZ0MS5wbmcpOyB9XHJcbi52aXBnaWZ0Lmx2NC5ncmV5eyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1nL2dpZnQvdjRnaWZ0MS5wbmcpOyB9ICovXHJcbi8qIOS8muWRmOaZi+WNh+etiee6p+WbvuaghyAqL1xyXG4ubGV2ZWxcdFx0XHR7IGRpc3BsYXk6IGJsb2NrOyBoZWlnaHQ6IDEuOXJlbTsgd2lkdGg6IDEuOXJlbTsgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7IGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IH1cclxuLyogLmxldmVsLmx2MVx0XHR7IGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWcvbGV2ZWwvc2xldmVsMS5wbmcpOyB9XHJcbi5sZXZlbC5sdjJcdFx0eyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1nL2xldmVsL3NsZXZlbDIucG5nKTsgfVxyXG4ubGV2ZWwubHYzXHRcdHsgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltZy9sZXZlbC9zbGV2ZWwzLnBuZyk7IH1cclxuLmxldmVsLmx2NFx0XHR7IGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWcvbGV2ZWwvc2xldmVsNC5wbmcpOyB9XHJcbi5sZXZlbC5sdjEuZ3JleVx0eyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1nL2xldmVsL3NnbGV2ZWwxLnBuZyk7IH1cclxuLmxldmVsLmx2Mi5ncmV5XHR7IGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWcvbGV2ZWwvc2dsZXZlbDIucG5nKTsgfVxyXG4ubGV2ZWwubHYzLmdyZXlcdHsgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltZy9sZXZlbC9zZ2xldmVsMy5wbmcpOyB9XHJcbi5sZXZlbC5sdjQuZ3JleVx0eyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1nL2xldmVsL3NnbGV2ZWw0LnBuZyk7IH0gKi9cclxuPC9zdHlsZT5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnQvZGV0YWlsL2NvbXBvbmVudHMvcHJvbW90ZUxheWVyLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLmlzU2hvd1xuICAgID8gX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJsYXllclwiLFxuICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImxheWVyXCIgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgdG91Y2htb3ZlOiBfdm0ucHJldmVudCxcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQgIT09ICRldmVudC5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNsb3NlKCRldmVudClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxheWVyX2JveCB2aXB0aXBcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsYXllcl9jbG9zZVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiamF2YXNjcmlwdDp2b2lkKDApO1wiIH0sXG4gICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jbG9zZSB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogX3ZtLmNsb3NlSWNvbiwgYWx0OiBcIlwiIH0gfSldXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGlhbG9nX2ltZ1wiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJpbWdcIiwgeyBhdHRyczogeyBzcmM6IF92bS5wYWdlSW5mby5oZWFkSWNvbiwgYWx0OiBcIlwiIH0gfSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGlhbG9nX3RpdFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ucGFnZUluZm8udGl0bGUpKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkaWFsb2dfc3VidGl0XCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnBhZ2VJbmZvLnByaXplRGVzYykpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRpYWxvZ19pbmZvIGdyaWRcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGlhbG9nX2luZm9faXRlbSBjb2wtMVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImluZm9faW1nIGltZzFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogX3ZtLnBhZ2VJbmZvLmljb25zWzBdLmljb24sIGFsdDogXCJcIiB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJ2aXBnaWZ0IGx2MiBncmV5XCIgfSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImluZm9fdHh0IHR4dDFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5wYWdlSW5mby5pY29uc1swXS50eHQpKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRpYWxvZ19pbmZvX2l0ZW0gY29sLTFcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbmZvX2ltZyBpbWcyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IF92bS5wYWdlSW5mby5pY29uc1sxXS5pY29uLCBhbHQ6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImluZm9fdHh0IHR4dDJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5wYWdlSW5mby5pY29uc1sxXS50eHQpKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRpYWxvZ19pbmZvX2l0ZW0gY29sLTFcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbmZvX2ltZyBpbWczXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IF92bS5wYWdlSW5mby5pY29uc1syXS5pY29uLCBhbHQ6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImluZm9fdHh0IHR4dDNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5wYWdlSW5mby5pY29uc1syXS50eHQpKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRpYWxvZ19idG5ncm91cCBncmlkXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkaWFsb2dfYnRuIHJlZCBjb2wtMVwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNsb3NlKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLnBhZ2VJbmZvLmJ0bi50eHQpKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdXG4gICAgICApXG4gICAgOiBfdm0uX2UoKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbnZhciBlc0V4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5leHBvcnQgZGVmYXVsdCBlc0V4cG9ydHNcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNWFmY2Q2OWVcIiwgZXNFeHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTMuNy4yQHZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNWFmY2Q2OWVcIixcImhhc1Njb3BlZFwiOnRydWUsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDEzLjcuMkB2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvY29tcG9uZW50L2RldGFpbC9jb21wb25lbnRzL3Byb21vdGVMYXllci52dWVcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19leHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5AMy4wLjJAZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luL2Rpc3QvbG9hZGVyLmpzP3tcXFwib21pdFxcXCI6MSxcXFwicmVtb3ZlXFxcIjp0cnVlfSF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/e1xcXCJpbXBvcnRMb2FkZXJzXFxcIjoxLFxcXCJtaW5pbWl6ZVxcXCI6ZmFsc2UsXFxcInNvdXJjZU1hcFxcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxMy43LjJAdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTVhZmNkNjllXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTMuNy4yQHZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9wcm9tb3RlTGF5ZXIudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTMuNy4yQHZ1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTMuNy4yQHZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9wcm9tb3RlTGF5ZXIudnVlXCJcbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDEzLjcuMkB2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vcHJvbW90ZUxheWVyLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xuaW1wb3J0IF9fdnVlX3RlbXBsYXRlX18gZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDEzLjcuMkB2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTVhZmNkNjllXFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxMy43LjJAdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcHJvbW90ZUxheWVyLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi01YWZjZDY5ZVwiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmNcXFxcY29tcG9uZW50XFxcXGRldGFpbFxcXFxjb21wb25lbnRzXFxcXHByb21vdGVMYXllci52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNWFmY2Q2OWVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01YWZjZDY5ZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnQvZGV0YWlsL2NvbXBvbmVudHMvcHJvbW90ZUxheWVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJwYXJ0X2NvbnRlbnQgcHJpdmlsZWdlX2JveFwiPlxyXG4gICAgICAgIDxzd2lwZXIgY2xhc3M9XCJzd2lwZXItd3JhcHBlclwiIDpvcHRpb25zPVwib3B0aW9uc1wiIHJlZj1cIm15TmF2XCI+XHJcbiAgICAgICAgICAgIDxzd2lwZXItc2xpZGUgICB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBsZXZlbFByaXZpbGVnZXNcIiA6a2V5PVwiaW5kZXhcIiAgIDpjbGFzcz1cInsnc3dpcGVyLXNsaWRlIHByaXZpbGVnZV9pdGVtJzp0cnVlLCdpc0hhcyc6aXRlbS5zdGF0dXN9XCIgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaXZpbGVnZV9pY29uIHJvdyBtaWRkbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaWNvbl9pbWcgcm93IG1pZGRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyB2LWlmPVwiaXRlbS5zdGF0dXNcIiA6c3JjPVwiaXRlbS5pbWdzLmFjdGl2ZVwiIGFsdD1cIueUn+aXpeelneemj1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyB2LWVsc2UgOnNyYz1cIml0ZW0uaW1ncy5ub0FjdGl2ZVwiICBhbHQ9XCLnlJ/ml6XnpZ3npo9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpY29uX2Rlc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpdmlsZWdlX25hbWVcIj57e2l0ZW0uZGVzY319PC9kaXY+XHJcbiAgICAgICAgICAgIDwvc3dpcGVyLXNsaWRlPlxyXG4gICAgICAgIDwvc3dpcGVyPlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgeyBzd2lwZXIsIHN3aXBlclNsaWRlIH0gZnJvbSAndnVlLWF3ZXNvbWUtc3dpcGVyJztcclxuaW1wb3J0IGJpcnRoSWNvbiBmcm9tIFwiLi4vLi4vY29tbW9uL2ltZy9wcml2aWxlZ2VfYmlydGgucG5nXCI7XHJcbmltcG9ydCBjbGFzc0ljb24gZnJvbSBcIi4uLy4uL2NvbW1vbi9pbWcvcHJpdmlsZWdlX2NsYXNzLnBuZ1wiO1xyXG5pbXBvcnQgbWFpbEljb24gIGZyb20gXCIuLi8uLi9jb21tb24vaW1nL3ByaXZpbGVnZV9mcmVlTWFpbC5wbmdcIjtcclxuaW1wb3J0IGRvdWJsZUljb24gZnJvbSBcIi4uLy4uL2NvbW1vbi9pbWcvcHJpdmlsZWdlX2RvdWJsZS5wbmdcIjtcclxuaW1wb3J0IHNlcnZpY2VJY29uIGZyb20gXCIuLi8uLi9jb21tb24vaW1nL3ByaXZpbGVnZV9zZXJ2aWNlLnBuZ1wiO1xyXG5pbXBvcnQgZGF5SWNvbiBmcm9tIFwiLi4vLi4vY29tbW9uL2ltZy9wcml2aWxlZ2VfZGF5LnBuZ1wiO1xyXG5pbXBvcnQgY29uc3VsdEljb24gZnJvbSBcIi4uLy4uL2NvbW1vbi9pbWcvcHJpdmlsZWdlX2NvbnN1bHQucG5nXCI7XHJcbmltcG9ydCBnYmlydGhJY29uIGZyb20gXCIuLi8uLi9jb21tb24vaW1nL3ByaXZpbGVnZV9iaXJ0aF9uby5wbmdcIjtcclxuaW1wb3J0IGdjbGFzc0ljb24gZnJvbSBcIi4uLy4uL2NvbW1vbi9pbWcvcHJpdmlsZWdlX2NsYXNzX25vLnBuZ1wiO1xyXG5pbXBvcnQgZ21haWxJY29uICBmcm9tIFwiLi4vLi4vY29tbW9uL2ltZy9wcml2aWxlZ2VfZnJlZU1haWxfbm8ucG5nXCI7XHJcbmltcG9ydCBnZG91YmxlSWNvbiBmcm9tIFwiLi4vLi4vY29tbW9uL2ltZy9wcml2aWxlZ2VfZG91YmxlX25vLnBuZ1wiO1xyXG5pbXBvcnQgZ3NlcnZpY2VJY29uIGZyb20gXCIuLi8uLi9jb21tb24vaW1nL3ByaXZpbGVnZV9zZXJ2aWNlX25vLnBuZ1wiO1xyXG5pbXBvcnQgZ2RheUljb24gZnJvbSBcIi4uLy4uL2NvbW1vbi9pbWcvcHJpdmlsZWdlX2RheV9uby5wbmdcIjtcclxuaW1wb3J0IGdjb25zdWx0SWNvbiBmcm9tIFwiLi4vLi4vY29tbW9uL2ltZy9wcml2aWxlZ2VfY29uc3VsdF9uby5wbmdcIjtcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogJ215UHJpdmlsZWdlJyxcclxuICAgIGRhdGEoKXtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBvcHRpb25zOntcclxuICAgICAgICAgICAgICAgIG5vdE5leHRUaWNrOnRydWUsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheTowLFxyXG4gICAgICAgICAgICAgICAgbG9vcDpmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNldFdyYXBwZXJTaXplIDp0cnVlLFxyXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbiA6ICcucHJpdmlsZWdlX2JveCAuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbkNsaWNrYWJsZSA6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBwcmV2ZW50Q2xpY2tzOnRydWUsXHJcbiAgICAgICAgICAgICAgICBvYnNlcnZlUGFyZW50czp0cnVlLFxyXG4gICAgICAgICAgICAgICAgb25UYXA6IHRoaXMuX3RhcE5hdixcclxuICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6NC41XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwcml2aWxlZ2UgY3JlYXRlXCIpXHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6e1xyXG4gICAgICAgIGxldmVsUHJpdmlsZWdlcygpe1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gW10sb2JqO1xyXG4gICAgICAgICAgICBmb3IobGV0IGtleSBpbiBnX2xldmVsUHJpdmlsZWdlcyl7XHJcbiAgICAgICAgICAgICAgICBvYmogPSB7fTtcclxuICAgICAgICAgICAgICAgIGlmKGtleSA9PSAnYmlydGhkYXknKXtcclxuICAgICAgICAgICAgICAgICAgICBvYmogPSBnX2xldmVsUHJpdmlsZWdlc1trZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5kZXNjID0gXCLnlJ/ml6XnpZ3npo9cIjtcclxuICAgICAgICAgICAgICAgICAgICBvYmoua2V5ID0ga2V5O1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5pbWdzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub0FjdGl2ZTpnYmlydGhJY29uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6YmlydGhJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRbMF0gPSBvYmo7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihrZXkgPT0gJ2NvbnN1bHQnKXtcclxuICAgICAgICAgICAgICAgICAgICBvYmogPSBnX2xldmVsUHJpdmlsZWdlc1trZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5kZXNjID0gXCLkuJPlrrblkqjor6JcIjtcclxuICAgICAgICAgICAgICAgICAgICBvYmoua2V5ID0ga2V5O1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5pbWdzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub0FjdGl2ZTpnY29uc3VsdEljb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTpjb25zdWx0SWNvblxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0WzVdID0gb2JqO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoa2V5ID09ICdmcmVlTWFpbCcpe1xyXG4gICAgICAgICAgICAgICAgICAgIG9iaiA9IGdfbGV2ZWxQcml2aWxlZ2VzW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLmRlc2MgPSBcIueQhui1lOWFjemCrlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5rZXkgPSBrZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLmltZ3MgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vQWN0aXZlOmdtYWlsSWNvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOm1haWxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRbMl0gPSBvYmo7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihrZXkgPT0gJ2ludml0ZScpe1xyXG4gICAgICAgICAgICAgICAgICAgIG9iaiA9IGdfbGV2ZWxQcml2aWxlZ2VzW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLmRlc2MgPSBcIuWlluWKsee/u+WAjVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5rZXkgPSBrZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLmltZ3MgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vQWN0aXZlOmdkb3VibGVJY29uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6ZG91YmxlSWNvblxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0WzNdID0gb2JqO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoa2V5ID09ICdsZWN0dXJlJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqID0gZ19sZXZlbFByaXZpbGVnZXNba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICBvYmouZGVzYyA9IFwi5Lya5ZGY6K6y5bqnXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLmtleSA9IGtleTtcclxuICAgICAgICAgICAgICAgICAgICBvYmouaW1ncyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9BY3RpdmU6Z2NsYXNzSWNvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOmNsYXNzSWNvblxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0WzFdID0gb2JqO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoa2V5ID09ICdzZWNyZXRHaWZ0Jyl7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqID0gZ19sZXZlbFByaXZpbGVnZXNba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICBvYmouZGVzYyA9IFwi56We56eY56S854mpXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLmtleSA9IGtleTtcclxuICAgICAgICAgICAgICAgICAgICBvYmouaW1ncyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9BY3RpdmU6Z2RheUljb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTpkYXlJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRbNl0gPSBvYmo7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihrZXkgPT0gJ3NlcnZlcicpe1xyXG4gICAgICAgICAgICAgICAgICAgIG9iaiA9IGdfbGV2ZWxQcml2aWxlZ2VzW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLmRlc2MgPSBcIuS4k+WxnuWuouacjVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5rZXkgPSBrZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLmltZ3MgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vQWN0aXZlOmdzZXJ2aWNlSWNvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOnNlcnZpY2VJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRbNF0gPSBvYmo7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczp7XHJcbiAgICAgICAgX3RhcE5hdigpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLiRyZWZzLm15TmF2LnN3aXBlci5jbGlja2VkSW5kZXgpXHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMuJHJlZnMubXlOYXYuc3dpcGVyLmNsaWNrZWRJbmRleDtcclxuICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe3BhdGg6XCIvaW50cm9cIixxdWVyeTp7dHlwZTp0aGlzLmxldmVsUHJpdmlsZWdlc1tpbmRleF0ua2V5fX0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRzOntcclxuICAgICAgICBzd2lwZXIsXHJcbiAgICAgICAgc3dpcGVyU2xpZGUsXHJcbiAgICB9LFxyXG4gICAgcHJvcHM6W11cclxufVxyXG48L3NjcmlwdD5cclxuPCEtLSBBZGQgXCJzY29wZWRcIiBhdHRyaWJ1dGUgdG8gbGltaXQgQ1NTIHRvIHRoaXMgY29tcG9uZW50IG9ubHkgLS0+XHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgICAubXlfcHJpdmlsZWdlIC5wcml2aWxlZ2VfYm94e292ZXJmbG93OmhpZGRlbjtwYWRkaW5nOjEuNXJlbSAxLjA1cmVtO21hcmdpbi1sZWZ0OiAxLjJyZW07Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogLjhyZW07Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogLjhyZW07YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtib3gtc2hhZG93OiAwIC41cmVtIDFyZW0gcmdiYSgxNzksMTc5LDE3OSwuMik7fVxyXG4gICAgICAgIC5teV9wcml2aWxlZ2UgLnByaXZpbGVnZV9ib3ggLnByaXZpbGVnZV9pdGVte3RleHQtYWxpZ246IGNlbnRlcjtwYWRkaW5nOjAgMS4wNXJlbTt9XHJcbiAgICAgICAgICAgIC5wcml2aWxlZ2VfaXRlbS5pc0hhcyAucHJpdmlsZWdlX2ljb257YmFja2dyb3VuZC1jb2xvcjogI2ZmZmFlZTt9XHJcbiAgICAgICAgICAgIC5wcml2aWxlZ2VfaXRlbS5pc0hhcyAucHJpdmlsZWdlX25hbWV7Y29sb3I6I2NmYjk3ZDt9XHJcbiAgICAgICAgICAgICAgICAucHJpdmlsZWdlX2l0ZW0gLnByaXZpbGVnZV9pY29ue3dpZHRoOjUuNXJlbTtoZWlnaHQ6IDUuNXJlbTtib3JkZXItcmFkaXVzOiA1MCU7bWFyZ2luOjAgYXV0bztiYWNrZ3JvdW5kLWNvbG9yOiNmMGYwZjA7ZmxleC13cmFwOiB3cmFwOy13ZWJraXQtZmxleC13cmFwOiB3cmFwO31cclxuICAgICAgICAgICAgICAgICAgICAucHJpdmlsZWdlX2l0ZW0gLnByaXZpbGVnZV9pY29uPmRpdnt9XHJcbiAgICAgICAgICAgICAgICAgICAgLnByaXZpbGVnZV9pdGVtIC5wcml2aWxlZ2VfaWNvbiAuaWNvbl9pbWd7d2lkdGg6IDIuOXJlbTtoZWlnaHQ6IDIuN3JlbTttYXJnaW46MCBhdXRvO31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnByaXZpbGVnZV9pdGVtIC5wcml2aWxlZ2VfaWNvbiBpbWd7bWF4LXdpZHRoOiAxMDAlO21heC1oZWlnaHQ6IDEwMCU7fVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcml2aWxlZ2VfaXRlbSAucHJpdmlsZWdlX2ljb24gLmljb25fZGVze21hcmdpbi10b3A6MC4xNXJlbTtmb250LXNpemU6IDAuOXJlbTtjb2xvcjojYjNiM2IzO2xpbmUtaGVpZ2h0OiAuOXJlbTt9XHJcbiAgICAgICAgICAgICAgICAucHJpdmlsZWdlX2l0ZW0gLnByaXZpbGVnZV9uYW1le21hcmdpbi10b3A6MC45cmVtO2ZvbnQtc2l6ZTogMS4zcmVtO2NvbG9yOiNiM2IzYjM7bGluZS1oZWlnaHQ6IDEuNXJlbTt9XHJcbjwvc3R5bGU+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50L2RldGFpbC9jb21wb25lbnRzL3ByaXZpbGVnZS52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJwYXJ0X2NvbnRlbnQgcHJpdmlsZWdlX2JveFwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwic3dpcGVyXCIsXG4gICAgICAgIHtcbiAgICAgICAgICByZWY6IFwibXlOYXZcIixcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJzd2lwZXItd3JhcHBlclwiLFxuICAgICAgICAgIGF0dHJzOiB7IG9wdGlvbnM6IF92bS5vcHRpb25zIH1cbiAgICAgICAgfSxcbiAgICAgICAgX3ZtLl9sKF92bS5sZXZlbFByaXZpbGVnZXMsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgXCJzd2lwZXItc2xpZGVcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAgICAgY2xhc3M6IHsgXCJzd2lwZXItc2xpZGUgcHJpdmlsZWdlX2l0ZW1cIjogdHJ1ZSwgaXNIYXM6IGl0ZW0uc3RhdHVzIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHJpdmlsZWdlX2ljb24gcm93IG1pZGRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImljb25faW1nIHJvdyBtaWRkbGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc3RhdHVzXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogaXRlbS5pbWdzLmFjdGl2ZSwgYWx0OiBcIueUn+aXpeelneemj1wiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogaXRlbS5pbWdzLm5vQWN0aXZlLCBhbHQ6IFwi55Sf5pel56Wd56aPXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaWNvbl9kZXNcIiB9KVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInByaXZpbGVnZV9uYW1lXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS5kZXNjKSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG52YXIgZXNFeHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuZXhwb3J0IGRlZmF1bHQgZXNFeHBvcnRzXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTUzMWYyNGExXCIsIGVzRXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDEzLjcuMkB2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTUzMWYyNGExXCIsXCJoYXNTY29wZWRcIjp0cnVlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxMy43LjJAdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2NvbXBvbmVudC9kZXRhaWwvY29tcG9uZW50cy9wcml2aWxlZ2UudnVlXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9fZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luQDMuMC4yQGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbi9kaXN0L2xvYWRlci5qcz97XFxcIm9taXRcXFwiOjEsXFxcInJlbW92ZVxcXCI6dHJ1ZX0hdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3tcXFwiaW1wb3J0TG9hZGVyc1xcXCI6MSxcXFwibWluaW1pemVcXFwiOmZhbHNlLFxcXCJzb3VyY2VNYXBcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTMuNy4yQHZ1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01MzFmMjRhMVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDEzLjcuMkB2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vcHJpdmlsZWdlLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDEzLjcuMkB2dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG5leHBvcnQgKiBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDEzLjcuMkB2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vcHJpdmlsZWdlLnZ1ZVwiXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxMy43LjJAdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3ByaXZpbGVnZS52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCBfX3Z1ZV90ZW1wbGF0ZV9fIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxMy43LjJAdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi01MzFmMjRhMVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTMuNy4yQHZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3ByaXZpbGVnZS52dWVcIlxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gXCJkYXRhLXYtNTMxZjI0YTFcIlxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjXFxcXGNvbXBvbmVudFxcXFxkZXRhaWxcXFxcY29tcG9uZW50c1xcXFxwcml2aWxlZ2UudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTUzMWYyNGExXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNTMxZjI0YTFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50L2RldGFpbC9jb21wb25lbnRzL3ByaXZpbGVnZS52dWVcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgdi1pZj1cImF2YWlsZFByaXZpbGdlcy5sZW5ndGggPiAwXCIgY2xhc3M9XCJwYXJ0X2NvbnRlbnQgdXNlcmJsZUNhcmRfYm94XCI+XHJcbiAgICAgICAgICAgIDxzd2lwZXIgY2xhc3M9XCJzd2lwZXItd3JhcHBlclwiIDpvcHRpb25zPVwib3B0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgPHN3aXBlci1zbGlkZSB2LWlmPVwiYXZhaWxkUHJpdmlsZ2VzLmxlY3R1cmVcIiB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBhdmFpbGRQcml2aWxnZXMubGVjdHVyZVwiIDprZXk9XCJpbmRleFwiIGNsYXNzPVwic3dpcGVyLXNsaWRlIHVzZXJibGVDYXJkX2l0ZW0gcm93IG1pZGRsZVwiIGRhdGEtdGl0bGU9XCLkuJPlrrborrLluqdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSA6aHJlZj1cIml0ZW0udXJsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJ1c2VyYmxlQ2FyZF90aXRsZVwiPuOAint7aXRlbS5uYW1lfX3jgIs8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVzZXJibGVDYXJkX3RpbWVcIj57e2l0ZW0uYmVnVGltZX19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvc3dpcGVyLXNsaWRlPlxyXG4gICAgICAgICAgICAgICAgPHN3aXBlci1zbGlkZSB2LWlmPVwiYXZhaWxkUHJpdmlsZ2VzLmZyZWVNYWlsXCIgY2xhc3M9XCJzd2lwZXItc2xpZGUgdXNlcmJsZUNhcmRfaXRlbSByb3cgbWlkZGxlXCIgZGF0YS10aXRsZT1cIueQhui1lOWFjemCrlwiID5cclxuICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgdG89XCIvY2xhaW1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJ1c2VyYmxlQ2FyZF90aXRsZSBiaWdfc2l6ZVwiPjE15YWD5YWN6YKu6KGl6LS0IDxzcGFuIGNsYXNzPVwicmVkXCI+WHt7YXZhaWxkUHJpdmlsZ2VzLmZyZWVNYWlsLm51bX19PC9zcGFuPjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgICAgICA8L3N3aXBlci1zbGlkZT5cclxuICAgICAgICAgICAgICAgIDxzd2lwZXItc2xpZGUgdi1pZj1cImF2YWlsZFByaXZpbGdlcy5jb25zdWx0XCIgY2xhc3M9XCJzd2lwZXItc2xpZGUgdXNlcmJsZUNhcmRfaXRlbSByb3dcIiBkYXRhLXRpdGxlPVwi5LiT5a625ZKo6K+iXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9wYXkvYWN0UGF5P2lkPTEwMDQmY2huPXZpcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwidXNlcmJsZUNhcmRfdGl0bGVcIj7kv53pmanpl67or4rmnI3liqE8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVzZXJibGVDYXJkX3RpbWVcIj7vv6U8c3BhbiBjbGFzcz1cIm1pZGRsZV9zaXplIHJlZFwiPnt7cGFyc2VJbnQoNjgqYXZhaWxkUHJpdmlsZ2VzLmNvbnN1bHQucmF0ZSl9fTwvc3Bhbj4gPHNwYW4gc3R5bGU9XCJ0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcIj7vv6U2ODwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9zd2lwZXItc2xpZGU+XHJcbiAgICAgICAgICAgIDwvc3dpcGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgdi1lbHNlPuS9oOayoeacieWPr+eUqOeahOeJueadg+WNoTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgeyBzd2lwZXIsIHN3aXBlclNsaWRlIH0gZnJvbSAndnVlLWF3ZXNvbWUtc3dpcGVyJztcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogJ215VXNlcmJsZUNhcmQnLFxyXG4gICAgZGF0YSgpe1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG9wdGlvbnM6e1xyXG4gICAgICAgICAgICAgICAgbm90TmV4dFRpY2s6dHJ1ZSxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OjAsXHJcbiAgICAgICAgICAgICAgICBsb29wOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc2V0V3JhcHBlclNpemUgOnRydWUsXHJcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uIDogJy51c2VyYmxlQ2FyZF9ib3ggLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb25DbGlja2FibGUgOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcHJldmVudENsaWNrczp0cnVlLFxyXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZVBhcmVudHM6dHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6MS45XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJVc2VyYmxlQ2FyZCBjcmVhdGVcIilcclxuICAgIH0sXHJcbiAgICB1cGRhdGVkKCl7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczp7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czp7XHJcbiAgICAgICAgc3dpcGVyLFxyXG4gICAgICAgIHN3aXBlclNsaWRlLFxyXG4gICAgfSxcclxuICAgIHByb3BzOlsnYXZhaWxkUHJpdmlsZ2VzJ11cclxufVxyXG48L3NjcmlwdD5cclxuPCEtLSBBZGQgXCJzY29wZWRcIiBhdHRyaWJ1dGUgdG8gbGltaXQgQ1NTIHRvIHRoaXMgY29tcG9uZW50IG9ubHkgLS0+XHJcbjxzdHlsZSBzY29wZWQ+XHJcbi51c2VyYmxlQ2FyZF9ib3h7bWFyZ2luLWxlZnQ6IDEuMnJlbTt9XHJcbiAgICAgICAgICAgIC51c2VyYmxlQ2FyZF9ib3ggLnVzZXJibGVDYXJkX2l0ZW17cG9zaXRpb246IHJlbGF0aXZlO2hlaWdodDoxMHJlbTtwYWRkaW5nOjNyZW0gMS4xcmVtIDEuNnJlbTtib3JkZXItcmFkaXVzOiAuOHJlbTtiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO2JveC1zaGFkb3c6IDAgLjVyZW0gMXJlbSByZ2JhKDE3OSwxNzksMTc5LC4yKTttYXJnaW4tcmlnaHQ6IDEuNXJlbTtvdmVyZmxvdzogaGlkZGVuO2FsaWduLWl0ZW1zOmNlbnRlcjsgLXdlYmtpdC1hbGlnbi1pdGVtczpjZW50ZXI7fVxyXG4gICAgICAgICAgICAgICAgLnVzZXJibGVDYXJkX2JveCAudXNlcmJsZUNhcmRfaXRlbTpiZWZvcmV7Y29udGVudDphdHRyKGRhdGEtdGl0bGUpO3Bvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7cGFkZGluZzowIDFyZW07Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IC44cmVtO2ZvbnQtc2l6ZTogMS4zcmVtO2NvbG9yOiNmZmY7dGV4dC1hbGlnbjogY2VudGVyO2JhY2tncm91bmQtY29sb3I6ICNlNmNmOTI7bGluZS1oZWlnaHQ6IDJyZW07fVxyXG4gICAgICAgICAgICAgICAgLnVzZXJibGVDYXJkX2JveCAudXNlcmJsZUNhcmRfaXRlbSAudXNlcmJsZUNhcmRfdGl0bGV7Zm9udC1zaXplOiAxLjRyZW07Zm9udC13ZWlnaHQ6bm9ybWFsO2NvbG9yOiMzMzMzMzM7bGluZS1oZWlnaHQ6IDEuOXJlbTt9XHJcbiAgICAgICAgICAgICAgICAudXNlcmJsZUNhcmRfYm94IC51c2VyYmxlQ2FyZF9pdGVtIC51c2VyYmxlQ2FyZF90aXRsZS5iaWdfc2l6ZXtmb250LXNpemU6IDEuOHJlbTt9XHJcbiAgICAgICAgICAgICAgICAgICAgLm1pZGRsZV9zaXple2ZvbnQtc2l6ZTogMS41cmVtO31cclxuICAgICAgICAgICAgICAgICAgICAucmVke2NvbG9yOiNmZjVhNmU7fVxyXG4gICAgICAgICAgICAgICAgLnVzZXJibGVDYXJkX2JveCAudXNlcmJsZUNhcmRfaXRlbSAudXNlcmJsZUNhcmRfdGltZXttYXJnaW4tdG9wOiAuNHJlbTtmb250LXNpemU6IDEuMnJlbTtjb2xvcjojOTk5OTk5O2xpbmUtaGVpZ2h0OiAxLjRyZW07fVxyXG48L3N0eWxlPlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudC9kZXRhaWwvY29tcG9uZW50cy91c2VyYmxlQ2FyZC52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfdm0uYXZhaWxkUHJpdmlsZ2VzLmxlbmd0aCA+IDBcbiAgICAgID8gX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBhcnRfY29udGVudCB1c2VyYmxlQ2FyZF9ib3hcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInN3aXBlclwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3dpcGVyLXdyYXBwZXJcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBvcHRpb25zOiBfdm0ub3B0aW9ucyB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmF2YWlsZFByaXZpbGdlcy5sZWN0dXJlLCBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5hdmFpbGRQcml2aWxnZXMubGVjdHVyZVxuICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzd2lwZXItc2xpZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzd2lwZXItc2xpZGUgdXNlcmJsZUNhcmRfaXRlbSByb3cgbWlkZGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiZGF0YS10aXRsZVwiOiBcIuS4k+WutuiusuW6p1wiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IGl0ZW0udXJsIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJ1c2VyYmxlQ2FyZF90aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi44CKXCIgKyBfdm0uX3MoaXRlbS5uYW1lKSArIFwi44CLXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInVzZXJibGVDYXJkX3RpbWVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS5iZWdUaW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS5hdmFpbGRQcml2aWxnZXMuZnJlZU1haWxcbiAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJzd2lwZXItc2xpZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzd2lwZXItc2xpZGUgdXNlcmJsZUNhcmRfaXRlbSByb3cgbWlkZGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImRhdGEtdGl0bGVcIjogXCLnkIbotZTlhY3pgq5cIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInJvdXRlci1saW5rXCIsIHsgYXR0cnM6IHsgdG86IFwiL2NsYWltbGlzdFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImgzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInVzZXJibGVDYXJkX3RpdGxlIGJpZ19zaXplXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiMTXlhYPlhY3pgq7ooaXotLQgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJyZWRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJYXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmF2YWlsZFByaXZpbGdlcy5mcmVlTWFpbC5udW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uYXZhaWxkUHJpdmlsZ2VzLmNvbnN1bHRcbiAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJzd2lwZXItc2xpZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzd2lwZXItc2xpZGUgdXNlcmJsZUNhcmRfaXRlbSByb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiZGF0YS10aXRsZVwiOiBcIuS4k+WutuWSqOivolwiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBocmVmOiBcIi9wYXkvYWN0UGF5P2lkPTEwMDQmY2huPXZpcFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJ1c2VyYmxlQ2FyZF90aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5L+d6Zmp6Zeu6K+K5pyN5YqhXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInVzZXJibGVDYXJkX3RpbWVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIu+/pVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibWlkZGxlX3NpemUgcmVkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNjggKiBfdm0uYXZhaWxkUHJpdmlsZ2VzLmNvbnN1bHQucmF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LWRlY29yYXRpb25cIjogXCJsaW5lLXRocm91Z2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIu+/pTY4XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICA6IF9jKFwiZGl2XCIsIFtfdm0uX3YoXCLkvaDmsqHmnInlj6/nlKjnmoTnibnmnYPljaFcIildKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbnZhciBlc0V4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5leHBvcnQgZGVmYXVsdCBlc0V4cG9ydHNcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNzhiNzBkNjBcIiwgZXNFeHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTMuNy4yQHZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNzhiNzBkNjBcIixcImhhc1Njb3BlZFwiOnRydWUsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDEzLjcuMkB2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvY29tcG9uZW50L2RldGFpbC9jb21wb25lbnRzL3VzZXJibGVDYXJkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvX2V4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbkAzLjAuMkBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4vZGlzdC9sb2FkZXIuanM/e1xcXCJvbWl0XFxcIjoxLFxcXCJyZW1vdmVcXFwiOnRydWV9IXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj97XFxcImltcG9ydExvYWRlcnNcXFwiOjEsXFxcIm1pbmltaXplXFxcIjpmYWxzZSxcXFwic291cmNlTWFwXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDEzLjcuMkB2dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzhiNzBkNjBcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxMy43LjJAdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3VzZXJibGVDYXJkLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDEzLjcuMkB2dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG5leHBvcnQgKiBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDEzLjcuMkB2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vdXNlcmJsZUNhcmQudnVlXCJcbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDEzLjcuMkB2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vdXNlcmJsZUNhcmQudnVlXCJcbi8qIHRlbXBsYXRlICovXG5pbXBvcnQgX192dWVfdGVtcGxhdGVfXyBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTMuNy4yQHZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzhiNzBkNjBcXFwiLFxcXCJoYXNTY29wZWRcXFwiOnRydWUsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDEzLjcuMkB2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi91c2VyYmxlQ2FyZC52dWVcIlxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gXCJkYXRhLXYtNzhiNzBkNjBcIlxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjXFxcXGNvbXBvbmVudFxcXFxkZXRhaWxcXFxcY29tcG9uZW50c1xcXFx1c2VyYmxlQ2FyZC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNzhiNzBkNjBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03OGI3MGQ2MFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnQvZGV0YWlsL2NvbXBvbmVudHMvdXNlcmJsZUNhcmQudnVlXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiB2LWlmPVwibGF5ZXJJbmZvXCIgY2xhc3M9XCJnaWZ0bGF5ZXIgbGF5ZXJcIiBAdG91Y2htb3ZlPVwicHJldmVudFwiIEBjbGljay5zZWxmPVwiY2xvc2VcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibGF5ZXJfYm94XCI+XHJcbiAgICAgICAgICAgIDxkaXYgdi1pZj1cInR5cGUgPT0gMVwiIGNsYXNzPVwibGF5ZXJfY2xvc2VcIiBAY2xpY2suc3RvcD1cImNsb3NlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzcz1cImxheWVyX2hlYWRcIj57e2xheWVySW5mby50aXRsZX19PC9oMj5cclxuICAgICAgICAgICAgPGRpdiB2LWlmPVwidHlwZSA9PSAxXCIgY2xhc3M9XCJsYXllcl9mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybV9pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwidmFsdWUubW9iaWxlXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuivt+Whq+WGmeemj+WIqemihuWPluaJi+acuuWPt1wiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGF5ZXJfY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPHAgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gbGF5ZXJJbmZvLmRlc2NcIiA6a2V5PVwiaW5kZXhcIiBjbGFzcz1cImxheWVyX2Rlc2NcIj57e2l0ZW19fTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYXllcl9idG5cIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiY29uZmlybSB3aGl0ZSBjb2xcIiBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIEBjbGljay5zdG9wPVwiY29uZmlybVwiPnt7bGF5ZXJJbmZvLmJ0blR4dC5jb25maXJtfX08L2E+XHJcbiAgICAgICAgICAgICAgICA8IS0tIDxhIGNsYXNzPVwiY2FuY2VsIGNvbFwiIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCI+5Y+W5raIPC9hPiAtLT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6ICdjb21tb25MYXllcicsXHJcbiAgICBkYXRhKCl7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdmFsdWU6e1xyXG4gICAgICAgICAgICAgICAgbW9iaWxlOlwiXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlZCgpe1xyXG4gICAgICAgIFxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6e1xyXG4gICAgICAgIHByZXZlbnQoZSl7XHJcbiAgICAgICAgICAgIGUuX3ByZXZlbnQgPSB0cnVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2xvc2UoKXtcclxuICAgICAgICAgICAgdGhpcy4kZW1pdChcImNsb3NlXCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29uZmlybSgpe1xyXG4gICAgICAgICAgICBpZih0aGlzLnR5cGUgPT0gMSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KFwiY29uZmlybVwiLHtcclxuICAgICAgICAgICAgICAgICAgICBtb2JpbGU6dGhpcy52YWx1ZS5tb2JpbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTp0aGlzLnR5cGVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoXCJjb25maXJtXCIse1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6dGhpcy50eXBlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBwcm9wczpbJ2xheWVySW5mbycsJ3R5cGUnXVxyXG59XHJcbjwvc2NyaXB0PlxyXG48IS0tIEFkZCBcInNjb3BlZFwiIGF0dHJpYnV0ZSB0byBsaW1pdCBDU1MgdG8gdGhpcyBjb21wb25lbnQgb25seSAtLT5cclxuPHN0eWxlIHNjb3BlZD5cclxuICAgIC5naWZ0bGF5ZXJ7cG9zaXRpb246IGZpeGVkO2xlZnQ6MDtyaWdodDowO3RvcDowO2JvdHRvbTowO2JhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjcpO3otaW5kZXg6IDEwMDA7fVxyXG4gICAgICAgIC5sYXllcl9ib3h7cG9zaXRpb246IGFic29sdXRlO2xlZnQ6NTAlO3RvcDo1MCU7dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTstd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7d2lkdGg6MzIuNDVyZW07bWF4LXdpZHRoOjg2LjUlO2JhY2tncm91bmQtY29sb3I6ICNmZmY7Ym9yZGVyLXJhZGl1czogMC44cmVtO31cclxuICAgICAgICAgICAgLmxheWVyX2JveCAubGF5ZXJfY2xvc2V7cG9zaXRpb246IGFic29sdXRlO3JpZ2h0OjA7dG9wOi00LjI1cmVtO3dpZHRoOjIuODVyZW07aGVpZ2h0OjQuMjVyZW07YmFja2dyb3VuZDogdXJsKFwiLi9pbWcvbGF5ZXJDbG9zZS5wbmdcIikgbm8tcmVwZWF0IGNlbnRlci8xMDAlIDEwMCU7fVxyXG4gICAgICAgICAgICAubGF5ZXJfYm94IC5sYXllcl9oZWFke3BhZGRpbmc6MnJlbSAwIDEuMTVyZW07Zm9udC1zaXplOiAxLjlyZW07Y29sb3I6IzMzMzMzMztsaW5lLWhlaWdodDogMi4xcmVtO3RleHQtYWxpZ246IGNlbnRlcjt9XHJcbiAgICAgICAgICAgIC5sYXllcl9ib3ggLmxheWVyX2Zvcm17cGFkZGluZzowIDEuNnJlbTt9XHJcbiAgICAgICAgICAgICAgICAubGF5ZXJfYm94IC5sYXllcl9mb3JtIC5mb3JtX2lucHV0e21hcmdpbi1ib3R0b206IDAuNXJlbTt9XHJcbiAgICAgICAgICAgICAgICAgICAgLmxheWVyX2JveCAubGF5ZXJfZm9ybSAuZm9ybV9pbnB1dCBpbnB1dHt3aWR0aDogMTAwJTtoZWlnaHQ6IDQuNXJlbTtwYWRkaW5nLWxlZnQ6MS40cmVtO2JvcmRlcjpub25lO291dGxpbmU6bm9uZTtib3JkZXItcmFkaXVzOi41cmVtO2ZvbnQtc2l6ZTogMS40cmVtO2xpbmUtaGVpZ2h0OiA0LjVyZW07Y29sb3I6IzY2NjY2NjtiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO31cclxuICAgICAgICAgICAgLmxheWVyX2JveCAubGF5ZXJfY29udGVudHtwYWRkaW5nOjAuNzVyZW0gMS42cmVtIDEuNXJlbTt9XHJcbiAgICAgICAgICAgICAgICAubGF5ZXJfYm94IC5sYXllcl9kZXNje2xpbmUtaGVpZ2h0OiAxLjhyZW07Zm9udC1zaXplOiAxLjNyZW07Y29sb3I6IzY2NjY2Njt9XHJcbiAgICAgICAgICAgIC5sYXllcl9ib3ggLmxheWVyX2J0bnt3aWR0aDogMTAwJTtoZWlnaHQ6IDQuOHJlbTt0ZXh0LWFsaWduOiBjZW50ZXI7Zm9udC1zaXplOiAxLjZyZW07bGluZS1oZWlnaHQ6IDQuOHJlbTtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjAuOHJlbTtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC44cmVtO2JhY2tncm91bmQtY29sb3I6I2UwY2E4ZDsgfVxyXG4gICAgICAgICAgICAgICAgLmxheWVyX2JveCAubGF5ZXJfYnRuIGF7ZGlzcGxheTogYmxvY2s7fVxyXG4gICAgICAgICAgICAgICAgLmxheWVyX2JveCAubGF5ZXJfYnRuIGEuY29uZmlybXt9XHJcbiAgICAgICAgICAgICAgICAud2hpdGV7Y29sb3I6I2ZmZjt9XHJcbiAgICAuaW5saW5le2Rpc3BsYXk6IGlubGluZS1ibG9jazt9XHJcblxyXG48L3N0eWxlPlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudC9jb21tb24vbGF5ZXIudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0ubGF5ZXJJbmZvXG4gICAgPyBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdpZnRsYXllciBsYXllclwiLFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICB0b3VjaG1vdmU6IF92bS5wcmV2ZW50LFxuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldCAhPT0gJGV2ZW50LmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uY2xvc2UoJGV2ZW50KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGF5ZXJfYm94XCIgfSwgW1xuICAgICAgICAgICAgX3ZtLnR5cGUgPT0gMVxuICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxheWVyX2Nsb3NlXCIsXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jbG9zZSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiaDJcIiwgeyBzdGF0aWNDbGFzczogXCJsYXllcl9oZWFkXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5sYXllckluZm8udGl0bGUpKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLnR5cGUgPT0gMVxuICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGF5ZXJfZm9ybVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybV9pbnB1dFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnZhbHVlLm1vYmlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ2YWx1ZS5tb2JpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwi6K+35aGr5YaZ56aP5Yip6aKG5Y+W5omL5py65Y+3XCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0udmFsdWUubW9iaWxlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnZhbHVlLCBcIm1vYmlsZVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJsYXllcl9jb250ZW50XCIgfSxcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS5sYXllckluZm8uZGVzYywgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJwXCIsIHsga2V5OiBpbmRleCwgc3RhdGljQ2xhc3M6IFwibGF5ZXJfZGVzY1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbSkpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsYXllcl9idG5cIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbmZpcm0gd2hpdGUgY29sXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcImphdmFzY3JpcHQ6dm9pZCgwKTtcIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY29uZmlybSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5sYXllckluZm8uYnRuVHh0LmNvbmZpcm0pKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdXG4gICAgICApXG4gICAgOiBfdm0uX2UoKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbnZhciBlc0V4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5leHBvcnQgZGVmYXVsdCBlc0V4cG9ydHNcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtM2EyMTM2MjVcIiwgZXNFeHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTMuNy4yQHZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtM2EyMTM2MjVcIixcImhhc1Njb3BlZFwiOnRydWUsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDEzLjcuMkB2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvY29tcG9uZW50L2NvbW1vbi9sYXllci52dWVcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19leHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5AMy4wLjJAZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luL2Rpc3QvbG9hZGVyLmpzP3tcXFwib21pdFxcXCI6MSxcXFwicmVtb3ZlXFxcIjp0cnVlfSF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/e1xcXCJpbXBvcnRMb2FkZXJzXFxcIjoxLFxcXCJtaW5pbWl6ZVxcXCI6ZmFsc2UsXFxcInNvdXJjZU1hcFxcXCI6ZmFsc2V9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxMy43LjJAdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTNhMjEzNjI1XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOmZhbHNlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTMuNy4yQHZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9sYXllci52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxMy43LjJAdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xuZXhwb3J0ICogZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxMy43LjJAdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2xheWVyLnZ1ZVwiXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxMy43LjJAdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2xheWVyLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xuaW1wb3J0IF9fdnVlX3RlbXBsYXRlX18gZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDEzLjcuMkB2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTNhMjEzNjI1XFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxMy43LjJAdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vbGF5ZXIudnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTNhMjEzNjI1XCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyY1xcXFxjb21wb25lbnRcXFxcY29tbW9uXFxcXGxheWVyLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0zYTIxMzYyNVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTNhMjEzNjI1XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudC9jb21tb24vbGF5ZXIudnVlXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiPHRlbXBsYXRlPlxyXG4gICAgPHNlY3Rpb24gdi1pZj1cImF3YXJkUHJpdmlsZWdlcy5sZW5ndGggPiAwXCIgY2xhc3M9XCJwYXJ0IG15X3dlbGZhcmVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFydF90aXRsZSBjbGVhcmZpeFwiPlxyXG4gICAgICAgICAgICA8aDM+5Lya5ZGY56aP5YipPC9oMz5cclxuICAgICAgICAgICAgPGEgQGNsaWNrPVwic2hvd1J1bGUoJ3J1bGVUeHRGb3JHaWZ0JylcIiBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiPumihuWPluinhOWImTwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFydF9jb250ZW50IHdlbGZhcmVfYm94IHJvdyBjZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndlbGZhcmVfaXRlbVwiIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIGF3YXJkUHJpdmlsZWdlc1wiIDprZXk9XCJpbmRleFwiIHYtaWY9XCJpbmRleCAhPSAnbGVuZ3RoJ1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndlbGZhcmVfZGV0YWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0Pnt7aXRlbS5uYW1lfX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPnt7aXRlbS5sZXZlbH19PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2VsZmFyZV9idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSA6Y2xhc3M9XCJ7dW51c2VhYmxlOiFidG5TdGF0dXNNYXBbaXRlbS5zdGF0dXMtMV0uaXNVc2VhYmxlfVwiIEBjbGljay5zdG9wPVwiZ2V0R2lmdChpdGVtLmlkLGl0ZW0uc3RhdHVzKVwiIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgPnt7YnRuU3RhdHVzTWFwW2l0ZW0uc3RhdHVzLTFdLnR4dH19PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c2hvdy1naWZ0IHYtaWY9XCJsYXllcklzU2hvdy5zaG93R2lmdFwiIDpnaWZ0LWluZm89XCJnaWZ0SW5mb1wiIEBjbG9zZT1cImxheWVyQ2xvc2UoJ3Nob3dHaWZ0JylcIiBAY29uZmlybT1cInNob3dHaWZ0Q29uZmlybVwiPjwvc2hvdy1naWZ0PlxyXG4gICAgICAgICAgICA8Y29tbW9uLWxheWVyIHYtaWY9XCJsYXllcklzU2hvdy5jb21tb25MYXllclwiIDp0eXBlPVwiY29tbW9uTGF5ZXJUeXBlXCIgOmxheWVyLWluZm89XCJsYXllckluZm9cIiBAY2xvc2U9XCJsYXllckNsb3NlKCdjb21tb25MYXllcicpXCIgQGNvbmZpcm09XCJjb21tb25MYXllckNvbmZpcm1cIj48L2NvbW1vbi1sYXllcj5cclxuICAgICAgICAgICAgPGVyci10aXAgOmVyci1tc2c9XCJlcnJNc2dcIiA6dGlwcy10eXBlPVwidGlwc1R5cGVcIiAgQGhpZGVUaXBzPVwiZXJyTXNnPScnXCI+PC9lcnItdGlwPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHNob3dHaWZ0IGZyb20gXCIuL3Nob3dHaWZ0LnZ1ZVwiO1xyXG5pbXBvcnQgY29tbW9uTGF5ZXIgZnJvbSBcIi4uLy4uL2NvbW1vbi9sYXllci52dWVcIjtcclxuaW1wb3J0IGVyclRpcCBmcm9tIFwiLi4vLi4vY29tbW9uL2VyclRpcHMudnVlXCI7XHJcbmltcG9ydCB7aXNNb2JpbGV9IGZyb20gXCIuLi8uLi8uLi9qcy9jb21tb24vZ2xvYmFsLmpzXCI7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6ICdteVdlbGZhcmUnLFxyXG4gICAgZGF0YSgpe1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGVyck1zZzpcIlwiLFxyXG4gICAgICAgICAgICB0aXBzVHlwZToxLFxyXG4gICAgICAgICAgICBvcHRpb25zOntcclxuICAgICAgICAgICAgICAgIG5vdE5leHRUaWNrOnRydWUsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheTowLFxyXG4gICAgICAgICAgICAgICAgbG9vcDpmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNldFdyYXBwZXJTaXplIDp0cnVlLFxyXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbiA6ICcucHJpdmlsZWdlX2JveCAuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbkNsaWNrYWJsZSA6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBwcmV2ZW50Q2xpY2tzOnRydWUsXHJcbiAgICAgICAgICAgICAgICBvYnNlcnZlUGFyZW50czp0cnVlLFxyXG4gICAgICAgICAgICAgICAgb25UYXA6IHRoaXMuX3RhcE5hdixcclxuICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6NC41XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxheWVySXNTaG93OntcclxuICAgICAgICAgICAgICAgIHNob3dHaWZ0OmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY29tbW9uTGF5ZXI6ZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYnRuU3RhdHVzTWFwOltcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVXNlYWJsZTp0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eHQ6XCLnq4vljbPpooblj5ZcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1VzZWFibGU6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR4dDpcIuW3sumihuWPllwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVXNlYWJsZTpmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHh0Olwi56uL5Y2z6aKG5Y+WXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNVc2VhYmxlOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eHQ6XCLnq4vljbPpooblj5ZcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGdpZnRJbmZvOntcclxuICAgICAgICAgICAgICAgIGltZ1NyYzpcImh0dHBzOi8vc3Nsc3RhdGljLnhpYW95dXNhbi5jb20veGNoaXRlbS9pdGVtXzE1MTQ1MzUyNzIuanBnXCIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOlwi54ix5aWH6Im65Y2V5pyI5Lya5ZGYXCIsXHJcbiAgICAgICAgICAgICAgICBsZXZlbDpcIlYyLVY0XCIsXHJcbiAgICAgICAgICAgICAgICBwcmljZTpcIjExMTk4MFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGF3YXJkUHJpdmlsZWdlczpbXSxcclxuICAgICAgICAgICAgY29tbW9uTGF5ZXJUeXBlOjEsXHJcbiAgICAgICAgICAgIGxheWVySW5mbzpcIlwiLFxyXG4gICAgICAgICAgICBwcml6ZUlkOlwiXCJcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJteVdlbGZhcmUgY3JlYXRlXCIpXHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpe1xyXG4gICAgICAgIGlmKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChnX2F3YXJkUHJpdmlsZWdlcykgPT0gXCJbb2JqZWN0IE9iamVjdF1cIil7XHJcbiAgICAgICAgICAgIGdfYXdhcmRQcml2aWxlZ2VzLmxlbmd0aCA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuYXdhcmRQcml2aWxlZ2VzID0gdGhpcy5pbml0QXdhcmRQcml2aWxlZ2VzKGdfYXdhcmRQcml2aWxlZ2VzKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczp7XHJcbiAgICAgICAgaW5pdEF3YXJkUHJpdmlsZWdlcyhkYXRhKXtcclxuICAgICAgICAgICAgZm9yKGxldCBrZXkgaW4gZGF0YSl7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGsgaW4gZGF0YVtrZXldKXtcclxuICAgICAgICAgICAgICAgICAgICBpZihrID09ICd1c2VNZXRob2QnICYmIHR5cGVvZiBkYXRhW2tleV1ba10gPT0gXCJzdHJpbmdcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFba2V5XVtrXSA9IGRhdGFba2V5XVtrXS5zcGxpdChcIuOAglwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoayA9PSAnbGV2ZWwnICYmIGRhdGFba2V5XVtrXS5pbmRleE9mKFwi5Lya5ZGYXCIpID09IC0xKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtrZXldW2tdID0gdGhpcy5nZXRNaW5MZXZlbChkYXRhW2tleV1ba10pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldEdpZnQocHJpemVJZCxzdGF0dXMpe1xyXG4gICAgICAgICAgICAvL3N0YXR1c1xyXG4gICAgICAgICAgICAvLzEt5Y+v6aKG5Y+W77yMMi3pooblj5bkuobmnKznpo/liKnvvIwzLemihuWPluS6huWFtuS7luemj+WIqe+8jDQt6Z2e6K+l562J57qn5Y+v6aKG5Y+W55qE56aP5YipXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0YXR1cylcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocHJpemVJZClcclxuICAgICAgICAgICAgc3dpdGNoKHN0YXR1cylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyTXNnID0gXCLmgqjlt7Lpooblj5bov4fkuoZcIjtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJNc2cgPSBcIuaCqOW3sumihuWPlui/h+WFtuS7luemj+WIqe+8jOacrOaciOaXoOazleWGjemihuWPllwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVyck1zZyA9IFwi5oKo55qE5Lya5ZGY562J57qn5LiN56ym5ZCI77yM5peg5rOV6aKG5Y+WXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnByaXplSWQgPSBwcml6ZUlkO1xyXG4gICAgICAgICAgICB0aGlzLmdpZnRJbmZvID0gdGhpcy5hd2FyZFByaXZpbGVnZXNbcHJpemVJZF07XHJcbiAgICAgICAgICAgIHRoaXMubGF5ZXJJc1Nob3cuc2hvd0dpZnQgPSB0cnVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tbW9uTGF5ZXJDb25maXJtKG9wdGlvbnMpe1xyXG4gICAgICAgICAgICBpZihvcHRpb25zLnR5cGUgPT0gMSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGxJbk1lcyhvcHRpb25zLm1vYmlsZSk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKG9wdGlvbnMudHlwZSA9PSAyKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubGF5ZXJDbG9zZSgnY29tbW9uTGF5ZXInKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmlsbEluTWVzKG1vYmlsZSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmaWxsSW5NZXMgaXMgY29uZmlybScpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtb2JsaWUnLG1vYmlsZSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3ByaXplSWQnLHRoaXMucHJpemVJZClcclxuICAgICAgICAgICAgaWYoIWlzTW9iaWxlKG1vYmlsZSkpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lcnJNc2cgPSBcIuivt+i+k+WFpeato+ehrueahOaJi+acuuWPt+eggVwiO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuJGZldGNoKFwiL3ByaXZpbGVnZS9hZGRBd2FyZFwiLHtpZDp0aGlzLnByaXplSWQsbW9iaWxlOm1vYmlsZSxsZXZlbDpnX2xldmVsfSkudGhlbihkYXRhPT57XHJcbiAgICAgICAgICAgICAgICBpZiggZGF0YS5yZXQgIT0gMCApe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlwc1R5cGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyTXNnID0gZGF0YS5lcnJtc2c7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXdhcmRQcml2aWxlZ2VzID0gdGhpcy5pbml0QXdhcmRQcml2aWxlZ2VzKGRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGRhdGEuZGF0YSkgPT0gXCJbb2JqZWN0IE9iamVjdF1cIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXdhcmRQcml2aWxlZ2VzLmxlbmd0aCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyTXNnID0gXCLkvJrlkZjnpo/liKnnpLzlk4HlsIbkuo7mr4/mnIgzMOaXpemAmui/h+aJi+acuuefreS/oeWPkeaUvu+8jOivt+azqOaEj+afpeaUtuOAguaCqOWPr+S7peWcqOS4quS6uuS4reW/gy3miJHnmoTlpZblk4Hmn6XnnIvlpZblk4Hlj5HmlL7ov5vlsZXjgIJcIjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxheWVySXNTaG93LmNvbW1vbkxheWVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGU9PntcclxuICAgICAgICAgICAgICAgIGlmKCAhZSApe1xyXG4gICAgICAgICAgICAgICAgICAgIGUgPSBcIuezu+e7n+e5geW/me+8jOivt+eojeWQjumHjeivlVwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy50aXBzVHlwZSA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVyck1zZyA9IGUudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRNaW5MZXZlbChsZXZlbFN0cil7XHJcbiAgICAgICAgICAgIGxldCBsZXZlbEFyciA9IGxldmVsU3RyLnNwbGl0KFwiLFwiKS5zb3J0KChhLGIpPT4oYS1iKSksbGVuZ3RoID0gbGV2ZWxBcnIubGVuZ3RoLGRWYWx1ZSA9IDUgLSBsZXZlbEFyclswXTtcclxuICAgICAgICAgICAgaWYobGVuZ3RoICA9PSAgZFZhbHVlKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnVicgKyBsZXZlbEFyclswXSArICflj4rku6XkuIrkvJrlkZgnO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihsZW5ndGggIDwgIGRWYWx1ZSl7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3RyID0gJyc7XHJcbiAgICAgICAgICAgICAgICBsZXZlbEFyci5tYXAoKGl0ZW0saW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaW5kZXggPCBsZW5ndGgtMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ciArPSAnVicgKyBpdGVtICsgJ+OAgSdcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyICs9ICdWJyArIGl0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdHIgKyAn5Lya5ZGYJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hvd0dpZnRDb25maXJtKCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzaG93R2lmdENvbmZpcm0gaXMgY29uZmlybScpXHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0NvbW1vbkxheWVyKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOjEsXHJcbiAgICAgICAgICAgICAgICAgICAgdHh0OnRoaXMubGF5ZXJUeHQuZmlsbEluVHh0XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5sYXllcklzU2hvdy5zaG93R2lmdCA9IGZhbHNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hvd1J1bGUoa2V5KXtcclxuICAgICAgICAgICAgdGhpcy5zaG93Q29tbW9uTGF5ZXIoe1xyXG4gICAgICAgICAgICAgICAgdHlwZToyLFxyXG4gICAgICAgICAgICAgICAgdHh0OnRoaXMubGF5ZXJUeHRba2V5XVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNob3dDb21tb25MYXllcihvcHRpb25zKXtcclxuICAgICAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcbiAgICAgICAgICAgIGlmKCFvcHRpb25zLnR4dCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jb21tb25MYXllclR5cGUgPSBvcHRpb25zLnR5cGU7XHJcbiAgICAgICAgICAgIHRoaXMubGF5ZXJJbmZvID0gb3B0aW9ucy50eHQ7XHJcbiAgICAgICAgICAgIHRoaXMubGF5ZXJJc1Nob3cuY29tbW9uTGF5ZXIgPSB0cnVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGF5ZXJDbG9zZShsYXllcil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxheWVyKVxyXG4gICAgICAgICAgICB0aGlzLmxheWVySXNTaG93W2xheWVyXSA9IGZhbHNlO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czp7XHJcbiAgICAgICAgc2hvd0dpZnQsXHJcbiAgICAgICAgY29tbW9uTGF5ZXIsXHJcbiAgICAgICAgZXJyVGlwXHJcbiAgICB9LFxyXG4gICAgcHJvcHM6WydsYXllclR4dCddXHJcbn1cclxuPC9zY3JpcHQ+XHJcbjwhLS0gQWRkIFwic2NvcGVkXCIgYXR0cmlidXRlIHRvIGxpbWl0IENTUyB0byB0aGlzIGNvbXBvbmVudCBvbmx5IC0tPlxyXG48c3R5bGUgc2NvcGVkPlxyXG4ud2VsZmFyZV9ib3h7bWFyZ2luOjAgMS4ycmVtO2ZsZXgtd3JhcDogd3JhcDstd2Via2l0LWZsZXgtd3JhcDp3cmFwO31cclxuICAgIC53ZWxmYXJlX2JveCAud2VsZmFyZV9pdGVte3dpZHRoOjE2LjhyZW07bWF4LXdpZHRoOjQ5JTtib3JkZXItcmFkaXVzOiAuOHJlbTttYXJnaW46MS41cmVtIDAgMCAwO2JhY2tncm91bmQtY29sb3I6ICNmZmY7Ym94LXNoYWRvdzogMCAuNXJlbSAxcmVtIHJnYmEoMTc5LDE3OSwxNzksLjIpO3RleHQtYWxpZ246IGNlbnRlcjt9XHJcbiAgICAud2VsZmFyZV9pdGVtOmZpcnN0LWNoaWxkLC53ZWxmYXJlX2l0ZW06Zmlyc3QtY2hpbGQgKyAud2VsZmFyZV9pdGVte21hcmdpbi10b3A6IDA7fVxyXG4gICAgLndlbGZhcmVfaXRlbSAud2VsZmFyZV9kZXRhaWx7cG9zaXRpb246cmVsYXRpdmU7cGFkZGluZzouOHJlbSAwIC43NXJlbTtib3JkZXItYm90dG9tOjFweCBkYXNoZWQgI2UyZTVlNzt9XHJcbiAgICAgICAgLndlbGZhcmVfZGV0YWlsOmJlZm9yZXtjb250ZW50OlwiXCI7cG9zaXRpb246IGFic29sdXRlO2xlZnQ6LS42cmVtO2JvdHRvbTotLjZyZW07d2lkdGg6IDEuMnJlbTtoZWlnaHQ6MS4ycmVtO2JvcmRlci1yYWRpdXM6IDUwJTtiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO31cclxuICAgICAgICAud2VsZmFyZV9kZXRhaWw6YWZ0ZXJ7Y29udGVudDpcIlwiO3Bvc2l0aW9uOiBhYnNvbHV0ZTtyaWdodDotLjZyZW07Ym90dG9tOi0uNnJlbTt3aWR0aDogMS4ycmVtO2hlaWdodDoxLjJyZW07Ym9yZGVyLXJhZGl1czogNTAlO2JhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7fVxyXG4gICAgICAgICAgICAud2VsZmFyZV9pdGVtIC53ZWxmYXJlX2RldGFpbCBoNHtwb3NpdGlvbjpyZWxhdGl2ZTtwYWRkaW5nOi40NXJlbSAwO2ZvbnQtc2l6ZTogMS42cmVtO2ZvbnQtd2VpZ2h0Om5vcm1hbDtjb2xvcjojMzMzMzMzO2xpbmUtaGVpZ2h0OiAyLjFyZW07fVxyXG4gICAgICAgICAgICAgICAgLndlbGZhcmVfaXRlbSAud2VsZmFyZV9kZXRhaWwgaDQ6YWZ0ZXJ7Y29udGVudDpcIlwiO3Bvc2l0aW9uOiBhYnNvbHV0ZTtib3R0b206MDtsZWZ0OjUwJTt3aWR0aDoyLjM1cmVtO2hlaWdodDouMXJlbTttYXJnaW4tbGVmdDotMS4xNzVyZW07YmFja2dyb3VuZC1jb2xvcjogI2U2Y2Y5Mjt9XHJcbiAgICAgICAgICAgIC53ZWxmYXJlX2l0ZW0gLndlbGZhcmVfZGV0YWlsIHB7Zm9udC1zaXplOiAxLjJyZW07Y29sb3I6I2NmYjk3ZDtsaW5lLWhlaWdodDogMS44cmVtO21hcmdpbjouM3JlbSAwO31cclxuICAgICAgICAud2VsZmFyZV9pdGVtIC53ZWxmYXJlX2J0bntwYWRkaW5nOi44cmVtIDA7fVxyXG4gICAgICAgICAgICAud2VsZmFyZV9idG4gYXtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7d2lkdGg6IDlyZW07aGVpZ2h0OjIuNXJlbTtib3JkZXItcmFkaXVzOiAxLjI1cmVtO2ZvbnQtc2l6ZTogMS4zcmVtO2xpbmUtaGVpZ2h0OjIuNXJlbTtjb2xvcjojZmZmO2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IHRvcCwjZTZjZjkyLCNjZmI5N2QpO2JhY2tncm91bmQ6LXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQgdG9wLCNlNmNmOTIsI2NmYjk3ZCk7Ym94LXNoYWRvdzogMCAuM3JlbSAuNnJlbSByZ2JhKDIwOSwxODcsMTI3LC40KTt0ZXh0LWFsaWduOiBjZW50ZXI7IH1cclxuICAgICAgICAgICAgLndlbGZhcmVfYnRuIGEudW51c2VhYmxle2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IHRvcCwjYWZhZmFmLCNjZGNkY2QpO2JhY2tncm91bmQ6LXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQgdG9wLCNhZmFmYWYsI2NkY2RjZCk7Ym94LXNoYWRvdzogMCAuM3JlbSAuNnJlbSByZ2JhKDE2OSwxNjksMTY5LC40KTt9XHJcbjwvc3R5bGU+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50L2RldGFpbC9jb21wb25lbnRzL3dlbGZhcmUudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0uYXdhcmRQcml2aWxlZ2VzLmxlbmd0aCA+IDBcbiAgICA/IF9jKFwic2VjdGlvblwiLCB7IHN0YXRpY0NsYXNzOiBcInBhcnQgbXlfd2VsZmFyZVwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwYXJ0X3RpdGxlIGNsZWFyZml4XCIgfSwgW1xuICAgICAgICAgIF9jKFwiaDNcIiwgW192bS5fdihcIuS8muWRmOemj+WIqVwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uc2hvd1J1bGUoXCJydWxlVHh0Rm9yR2lmdFwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCLpooblj5bop4TliJlcIildXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBhcnRfY29udGVudCB3ZWxmYXJlX2JveCByb3cgY2VudGVyXCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfdm0uX2woX3ZtLmF3YXJkUHJpdmlsZWdlcywgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGluZGV4ICE9IFwibGVuZ3RoXCJcbiAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsga2V5OiBpbmRleCwgc3RhdGljQ2xhc3M6IFwid2VsZmFyZV9pdGVtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndlbGZhcmVfZGV0YWlsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDRcIiwgW192bS5fdihfdm0uX3MoaXRlbS5uYW1lKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLmxldmVsKSldKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3ZWxmYXJlX2J0blwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVudXNlYWJsZTogIV92bS5idG5TdGF0dXNNYXBbaXRlbS5zdGF0dXMgLSAxXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmlzVXNlYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcImphdmFzY3JpcHQ6dm9pZCgwKTtcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdldEdpZnQoaXRlbS5pZCwgaXRlbS5zdGF0dXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmJ0blN0YXR1c01hcFtpdGVtLnN0YXR1cyAtIDFdLnR4dCkpXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLmxheWVySXNTaG93LnNob3dHaWZ0XG4gICAgICAgICAgICAgID8gX2MoXCJzaG93LWdpZnRcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJnaWZ0LWluZm9cIjogX3ZtLmdpZnRJbmZvIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbG9zZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmxheWVyQ2xvc2UoXCJzaG93R2lmdFwiKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb25maXJtOiBfdm0uc2hvd0dpZnRDb25maXJtXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0ubGF5ZXJJc1Nob3cuY29tbW9uTGF5ZXJcbiAgICAgICAgICAgICAgPyBfYyhcImNvbW1vbi1sYXllclwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBfdm0uY29tbW9uTGF5ZXJUeXBlLFxuICAgICAgICAgICAgICAgICAgICBcImxheWVyLWluZm9cIjogX3ZtLmxheWVySW5mb1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsb3NlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ubGF5ZXJDbG9zZShcImNvbW1vbkxheWVyXCIpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm06IF92bS5jb21tb25MYXllckNvbmZpcm1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZXJyLXRpcFwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IFwiZXJyLW1zZ1wiOiBfdm0uZXJyTXNnLCBcInRpcHMtdHlwZVwiOiBfdm0udGlwc1R5cGUgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBoaWRlVGlwczogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uZXJyTXNnID0gXCJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDJcbiAgICAgICAgKVxuICAgICAgXSlcbiAgICA6IF92bS5fZSgpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxudmFyIGVzRXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmV4cG9ydCBkZWZhdWx0IGVzRXhwb3J0c1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi03OTkxYTJmY1wiLCBlc0V4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxMy43LjJAdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi03OTkxYTJmY1wiLFwiaGFzU2NvcGVkXCI6dHJ1ZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTMuNy4yQHZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9jb21wb25lbnQvZGV0YWlsL2NvbXBvbmVudHMvd2VsZmFyZS52dWVcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19leHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5AMy4wLjJAZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luL2Rpc3QvbG9hZGVyLmpzP3tcXFwib21pdFxcXCI6MSxcXFwicmVtb3ZlXFxcIjp0cnVlfSF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/e1xcXCJpbXBvcnRMb2FkZXJzXFxcIjoxLFxcXCJtaW5pbWl6ZVxcXCI6ZmFsc2UsXFxcInNvdXJjZU1hcFxcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxMy43LjJAdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTc5OTFhMmZjXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTMuNy4yQHZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi93ZWxmYXJlLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDEzLjcuMkB2dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG5leHBvcnQgKiBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDEzLjcuMkB2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vd2VsZmFyZS52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTMuNy4yQHZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi93ZWxmYXJlLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xuaW1wb3J0IF9fdnVlX3RlbXBsYXRlX18gZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDEzLjcuMkB2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTc5OTFhMmZjXFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxMy43LjJAdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vd2VsZmFyZS52dWVcIlxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gXCJkYXRhLXYtNzk5MWEyZmNcIlxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjXFxcXGNvbXBvbmVudFxcXFxkZXRhaWxcXFxcY29tcG9uZW50c1xcXFx3ZWxmYXJlLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi03OTkxYTJmY1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTc5OTFhMmZjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudC9kZXRhaWwvY29tcG9uZW50cy93ZWxmYXJlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIjx0ZW1wbGF0ZT5cclxuICAgPGRpdiBjbGFzcz1cInBhcnRfY29udGVudCBzY29yZV9ib3hcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvY2Vzc19ib3ggcm93IG1pZGRsZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IDpjbGFzcz1cInsnc21hbGxfYmFsbCByb3cgbWlkZGxlJzp0cnVlLGRpc2FibGVkOmxldmVsIDwgMX1cIiBkYXRhLWNvbnRlbnQ9XCJ2MVwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IDpjbGFzcz1cInsncHJvY2Vzc19iYXInOnRydWUsIGZ1bGw6bGV2ZWwgPiAxLGhhbGY6bGV2ZWwgPT0gMX1cIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiA6Y2xhc3M9XCJ7YmFsbF9ib3g6dHJ1ZSwgZGlzYWJsZWQ6bGV2ZWwgPD0gMX1cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiaWdfYmFsbCByb3cgbWlkZGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJuZWVkX3Njb3JlXCI+MTAwPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Puenr+WIhjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic21hbGxfYmFsbCByb3cgbWlkZGxlXCIgZGF0YS1jb250ZW50PVwidjJcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwieydwcm9jZXNzX2Jhcic6dHJ1ZSwgZnVsbDpsZXZlbCA+IDIsaGFsZjpsZXZlbCA9PSAyfVwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IDpjbGFzcz1cIntiYWxsX2JveDp0cnVlLCBkaXNhYmxlZDpsZXZlbCA8PSAyfVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJpZ19iYWxsIHJvdyBtaWRkbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm5lZWRfc2NvcmVcIj41MDA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+56ev5YiGPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzbWFsbF9iYWxsIHJvdyBtaWRkbGVcIiBkYXRhLWNvbnRlbnQ9XCJ2M1wiPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiA6Y2xhc3M9XCJ7J3Byb2Nlc3NfYmFyJzp0cnVlLCBmdWxsOmxldmVsID4gMyxoYWxmOmxldmVsID09IDN9XCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwie2JhbGxfYm94OnRydWUsIGRpc2FibGVkOmxldmVsIDw9IDN9XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmlnX2JhbGwgcm93IG1pZGRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibmVlZF9zY29yZVwiPjEwMDA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+56ev5YiGPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzbWFsbF9iYWxsIHJvdyBtaWRkbGVcIiBkYXRhLWNvbnRlbnQ9XCJ2NFwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8cD57e3ZpcFRpcHN9fTxhIEBjbGljay5zdG9wPVwic2hvd1J1bGUoJ3J1bGVUeHRGb3JTY29yZScpXCIgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIj7or6bnu4bop4TliJkgPjwvYT48L3A+XHJcbiAgICAgICAgPGEgaHJlZj1cIi9wcm9wb3NhbC9yZXN1bHQ/aWQ9NDQwMSZjaG49dmlwXCI+5pu05aSa5p+l55yL5oiR55qE5LiT5bGe5L+d6Zqc5pa55qGIPGkgY2xhc3M9XCJhcnJvd1JpZ2h0IGFycm93XCI+PC9pPjwvYT5cclxuICAgICAgICA8Y29tbW9uLWxheWVyIHYtaWY9XCJsYXllcklzU2hvdy5jb21tb25MYXllclwiIDp0eXBlPVwiY29tbW9uTGF5ZXJUeXBlXCIgOmxheWVyLWluZm89XCJsYXllckluZm9cIiBAY2xvc2U9XCJsYXllckNsb3NlKCdjb21tb25MYXllcicpXCIgQGNvbmZpcm09XCJsYXllckNsb3NlKCdjb21tb25MYXllcicpXCI+PC9jb21tb24tbGF5ZXI+XHJcblxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgY29tbW9uTGF5ZXIgZnJvbSBcIi4uLy4uL2NvbW1vbi9sYXllci52dWVcIjtcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogJ215U2NvcmUnLFxyXG4gICAgZGF0YSgpe1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNvbW1vbkxheWVyVHlwZToxLFxyXG4gICAgICAgICAgICBsYXllckluZm86XCJcIixcclxuICAgICAgICAgICAgbGV2ZWw6Z19sZXZlbCxcclxuICAgICAgICAgICAgbGF5ZXJJc1Nob3c6e1xyXG4gICAgICAgICAgICAgICAgY29tbW9uTGF5ZXI6ZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm15U2NvcmUgY3JlYXRlXCIpXHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpe1xyXG4gICAgICAgXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczp7XHJcbiAgICAgICAgc2hvd1J1bGUoa2V5KXtcclxuICAgICAgICAgICAgdGhpcy5zaG93Q29tbW9uTGF5ZXIoe1xyXG4gICAgICAgICAgICAgICAgdHlwZToyLFxyXG4gICAgICAgICAgICAgICAgdHh0OnRoaXMubGF5ZXJUeHRba2V5XVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNob3dDb21tb25MYXllcihvcHRpb25zKXtcclxuICAgICAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcbiAgICAgICAgICAgIGlmKCFvcHRpb25zLnR4dCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jb21tb25MYXllclR5cGUgPSBvcHRpb25zLnR5cGU7XHJcbiAgICAgICAgICAgIHRoaXMubGF5ZXJJbmZvID0gb3B0aW9ucy50eHQ7XHJcbiAgICAgICAgICAgIHRoaXMubGF5ZXJJc1Nob3cuY29tbW9uTGF5ZXIgPSB0cnVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGF5ZXJDbG9zZShsYXllcil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxheWVyKVxyXG4gICAgICAgICAgICB0aGlzLmxheWVySXNTaG93W2xheWVyXSA9IGZhbHNlO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czp7XHJcbiAgICAgICAgY29tbW9uTGF5ZXJcclxuICAgIH0sXHJcbiAgICBwcm9wczpbJ2xheWVyVHh0JywndmlwVGlwcyddXHJcbn1cclxuPC9zY3JpcHQ+XHJcbjwhLS0gQWRkIFwic2NvcGVkXCIgYXR0cmlidXRlIHRvIGxpbWl0IENTUyB0byB0aGlzIGNvbXBvbmVudCBvbmx5IC0tPlxyXG48c3R5bGUgc2NvcGVkPlxyXG4uc2NvcmVfYm94e21hcmdpbjowIDEuMnJlbTtib3JkZXItcmFkaXVzOiAwLjhyZW07YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtvdmVyZmxvdzogaGlkZGVuO31cclxuICAgIC5wcm9jZXNzX2JveHtwYWRkaW5nOjNyZW0gMDt9XHJcbiAgICAgICAgLmJhbGxfYm94LmRpc2FibGVkIC5zbWFsbF9iYWxsOmJlZm9yZSwuYmFsbF9ib3guZGlzYWJsZWQgLmJpZ19iYWxse2JhY2tncm91bmQtY29sb3I6ICNjZWNlY2U7fVxyXG4gICAgICAgIC5zY29yZV9ib3ggLnNtYWxsX2JhbGx7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6IDIuMnJlbTtoZWlnaHQ6Mi4ycmVtO2JvcmRlci1yYWRpdXM6IDUwJTtsaW5lLWhlaWdodDoyLjJyZW07dGV4dC1hbGlnbjpjZW50ZXI7YmFja2dyb3VuZC1jb2xvcjogI2ZmZjt9XHJcbiAgICAgICAgICAgIC5zbWFsbF9iYWxsOmJlZm9yZXtkaXNwbGF5OmlubGluZS1ibG9jaztjb250ZW50OlwiXCI7d2lkdGg6IDEuOXJlbTtoZWlnaHQ6MS45cmVtO2JvcmRlci1yYWRpdXM6IDUwJTtiYWNrZ3JvdW5kLWNvbG9yOiAjZTZjZjkyO3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7fVxyXG4gICAgICAgICAgICAuc21hbGxfYmFsbC5kaXNhYmxlZDpiZWZvcmV7YmFja2dyb3VuZC1jb2xvcjogI2NlY2VjZTt9XHJcbiAgICAgICAgICAgIC5zbWFsbF9iYWxsOmFmdGVye3Bvc2l0aW9uOiBhYnNvbHV0ZTtjb250ZW50OmF0dHIoZGF0YS1jb250ZW50KTtjb2xvcjojZmZmO2ZvbnQtc2l6ZTogMS4wNXJlbTtmb250LXN0eWxlOiBvYmxpcXVlO31cclxuICAgICAgICAgICAgLmJhbGxfYm94e3Bvc2l0aW9uOiByZWxhdGl2ZTtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7fVxyXG4gICAgICAgICAgICAgICAgLmJhbGxfYm94IC5zbWFsbF9iYWxse3Bvc2l0aW9uOiBhYnNvbHV0ZTtyaWdodDogLS43NXJlbTtib3R0b206LS43NXJlbTt9XHJcbiAgICAgICAgLnNjb3JlX2JveCAuYmlnX2JhbGx7d2lkdGg6IDUuNXJlbTtoZWlnaHQ6NS41cmVtO2JvcmRlci1yYWRpdXM6IDUwJTtiYWNrZ3JvdW5kLWNvbG9yOiAjZTJjYjhlO2ZvbnQtc2l6ZTogMS4xcmVtO2xpbmUtaGVpZ2h0OjEuMXJlbTtjb2xvcjojZmZmO3RleHQtYWxpZ246IGNlbnRlcjt9XHJcbiAgICAgICAgICAgIC5zY29yZV9ib3ggLmJpZ19iYWxsIC5uZWVkX3Njb3Jle2ZvbnQtc2l6ZTogMi4ycmVtO2ZvbnQtd2VpZ2h0OmJvbGQ7bGluZS1oZWlnaHQ6IDIuMnJlbTt9XHJcbiAgICAgICAgLnNjb3JlX2JveCAucHJvY2Vzc19iYXJ7cG9zaXRpb246IHJlbGF0aXZlO2Rpc3BsYXk6IGlubGluZS1ibG9jaztoZWlnaHQ6LjNyZW07d2lkdGg6IDRyZW07YmFja2dyb3VuZC1jb2xvcjogI2IzYjNiMzt9XHJcbiAgICAgICAgICAgIC5wcm9jZXNzX2JhcjpiZWZvcmV7cG9zaXRpb246IGFic29sdXRlO2NvbnRlbnQ6XCJcIjtoZWlnaHQ6MTAwJTtiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZiOTdkO31cclxuICAgICAgICAgICAgLnByb2Nlc3NfYmFyLmZ1bGw6YmVmb3Jle3dpZHRoOjEwMCU7fVxyXG4gICAgICAgICAgICAucHJvY2Vzc19iYXIuaGFsZjpiZWZvcmV7d2lkdGg6NTAlO31cclxuICAgICAgICAuc2NvcmVfYm94PnB7Zm9udC1zaXplOiAxLjNyZW07Y29sb3I6Izk2OTY5NjtsaW5lLWhlaWdodDogMS4zcmVtO3RleHQtYWxpZ246IGNlbnRlcjt9XHJcbiAgICAgICAgICAgIC5zY29yZV9ib3g+cCBhe21hcmdpbi1sZWZ0OjFyZW07Y29sb3I6I2Y5M2Y1Njt9XHJcbiAgICAgICAgLnNjb3JlX2JveD5he2Rpc3BsYXk6IGlubGluZS1ibG9jazt3aWR0aDogMTAwJTtoZWlnaHQ6NXJlbTttYXJnaW4tdG9wOiAyLjhyZW07Zm9udC1zaXplOiAxLjZyZW07Y29sb3I6IzY2NjY2NjtsaW5lLWhlaWdodDogNXJlbTt0ZXh0LWFsaWduOiBjZW50ZXI7YmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTt9XHJcbiAgICAgICAgLmFycm93LmFycm93UmlnaHR7LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO21hcmdpbi1sZWZ0OiAuM3JlbTttYXJnaW4tYm90dG9tOi4xcmVtO31cclxuICAgICAgICAuYXJyb3cuYXJyb3dSaWdodHtib3JkZXItY29sb3I6Izk5OTk5OTtib3JkZXItcmlnaHQtY29sb3I6Izk5OTk5OTt9XHJcbjwvc3R5bGU+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50L2RldGFpbC9jb21wb25lbnRzL3Njb3JlLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInBhcnRfY29udGVudCBzY29yZV9ib3hcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHJvY2Vzc19ib3ggcm93IG1pZGRsZVwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgIGNsYXNzOiB7IFwic21hbGxfYmFsbCByb3cgbWlkZGxlXCI6IHRydWUsIGRpc2FibGVkOiBfdm0ubGV2ZWwgPCAxIH0sXG4gICAgICAgICAgYXR0cnM6IHsgXCJkYXRhLWNvbnRlbnRcIjogXCJ2MVwiIH1cbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgcHJvY2Vzc19iYXI6IHRydWUsXG4gICAgICAgICAgICBmdWxsOiBfdm0ubGV2ZWwgPiAxLFxuICAgICAgICAgICAgaGFsZjogX3ZtLmxldmVsID09IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IGNsYXNzOiB7IGJhbGxfYm94OiB0cnVlLCBkaXNhYmxlZDogX3ZtLmxldmVsIDw9IDEgfSB9LCBbXG4gICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic21hbGxfYmFsbCByb3cgbWlkZGxlXCIsXG4gICAgICAgICAgICBhdHRyczogeyBcImRhdGEtY29udGVudFwiOiBcInYyXCIgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgIHByb2Nlc3NfYmFyOiB0cnVlLFxuICAgICAgICAgICAgZnVsbDogX3ZtLmxldmVsID4gMixcbiAgICAgICAgICAgIGhhbGY6IF92bS5sZXZlbCA9PSAyXG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBjbGFzczogeyBiYWxsX2JveDogdHJ1ZSwgZGlzYWJsZWQ6IF92bS5sZXZlbCA8PSAyIH0gfSwgW1xuICAgICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNtYWxsX2JhbGwgcm93IG1pZGRsZVwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgXCJkYXRhLWNvbnRlbnRcIjogXCJ2M1wiIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICBwcm9jZXNzX2JhcjogdHJ1ZSxcbiAgICAgICAgICAgIGZ1bGw6IF92bS5sZXZlbCA+IDMsXG4gICAgICAgICAgICBoYWxmOiBfdm0ubGV2ZWwgPT0gM1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgY2xhc3M6IHsgYmFsbF9ib3g6IHRydWUsIGRpc2FibGVkOiBfdm0ubGV2ZWwgPD0gMyB9IH0sIFtcbiAgICAgICAgICBfdm0uX20oMiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzbWFsbF9iYWxsIHJvdyBtaWRkbGVcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IFwiZGF0YS1jb250ZW50XCI6IFwidjRcIiB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnZpcFRpcHMpKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJhXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICBfdm0uc2hvd1J1bGUoXCJydWxlVHh0Rm9yU2NvcmVcIilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIuivpue7huinhOWImSA+XCIpXVxuICAgICAgICApXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX20oMyksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmxheWVySXNTaG93LmNvbW1vbkxheWVyXG4gICAgICAgID8gX2MoXCJjb21tb24tbGF5ZXJcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogX3ZtLmNvbW1vbkxheWVyVHlwZSwgXCJsYXllci1pbmZvXCI6IF92bS5sYXllckluZm8gfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsb3NlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0ubGF5ZXJDbG9zZShcImNvbW1vbkxheWVyXCIpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNvbmZpcm06IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5sYXllckNsb3NlKFwiY29tbW9uTGF5ZXJcIilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJiaWdfYmFsbCByb3cgbWlkZGxlXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJuZWVkX3Njb3JlXCIgfSwgW192bS5fdihcIjEwMFwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCBbX3ZtLl92KFwi56ev5YiGXCIpXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJiaWdfYmFsbCByb3cgbWlkZGxlXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJuZWVkX3Njb3JlXCIgfSwgW192bS5fdihcIjUwMFwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCBbX3ZtLl92KFwi56ev5YiGXCIpXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJiaWdfYmFsbCByb3cgbWlkZGxlXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJuZWVkX3Njb3JlXCIgfSwgW192bS5fdihcIjEwMDBcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgW192bS5fdihcIuenr+WIhlwiKV0pXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiL3Byb3Bvc2FsL3Jlc3VsdD9pZD00NDAxJmNobj12aXBcIiB9IH0sIFtcbiAgICAgIF92bS5fdihcIuabtOWkmuafpeeci+aIkeeahOS4k+WxnuS/nemanOaWueahiFwiKSxcbiAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImFycm93UmlnaHQgYXJyb3dcIiB9KVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxudmFyIGVzRXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmV4cG9ydCBkZWZhdWx0IGVzRXhwb3J0c1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi00NDEzN2ZmY1wiLCBlc0V4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxMy43LjJAdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi00NDEzN2ZmY1wiLFwiaGFzU2NvcGVkXCI6dHJ1ZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTMuNy4yQHZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9jb21wb25lbnQvZGV0YWlsL2NvbXBvbmVudHMvc2NvcmUudnVlXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9fZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luQDMuMC4yQGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbi9kaXN0L2xvYWRlci5qcz97XFxcIm9taXRcXFwiOjEsXFxcInJlbW92ZVxcXCI6dHJ1ZX0hdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3tcXFwiaW1wb3J0TG9hZGVyc1xcXCI6MSxcXFwibWluaW1pemVcXFwiOmZhbHNlLFxcXCJzb3VyY2VNYXBcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTMuNy4yQHZ1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00NDEzN2ZmY1xcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDEzLjcuMkB2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vc2NvcmUudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTMuNy4yQHZ1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTMuNy4yQHZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9zY29yZS52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTMuNy4yQHZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9zY29yZS52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCBfX3Z1ZV90ZW1wbGF0ZV9fIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxMy43LjJAdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi00NDEzN2ZmY1xcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTMuNy4yQHZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Njb3JlLnZ1ZVwiXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi00NDEzN2ZmY1wiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmNcXFxcY29tcG9uZW50XFxcXGRldGFpbFxcXFxjb21wb25lbnRzXFxcXHNjb3JlLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi00NDEzN2ZmY1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTQ0MTM3ZmZjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudC9kZXRhaWwvY29tcG9uZW50cy9zY29yZS52dWVcbi8vIG1vZHVsZSBpZCA9IG51bGxcbi8vIG1vZHVsZSBjaHVua3MgPSAiLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVzZXJfaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiaGVhZGVySW5mby5oZWFkdXJsXCIgYWx0PVwi55So5oi35aS05YOPXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXNlcl9sdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidHh0XzFzdFwiPnY8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0eHRfMnJkXCI+e3toZWFkZXJJbmZvLmxldmVsfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0eHRfM3JkXCI+5LyaPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidHh0XzR0aFwiPuWRmDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVzZXJfaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ1c2VyX25hbWVcIj57e2hlYWRlckluZm8ubmFtZX19PC9zcGFuPiA8c3BhbiBjbGFzcz1cInNjb3JlXCI+5oiQ6ZW/5YC877yae3toZWFkZXJJbmZvLmV4cH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNjb3JlX2RldGFpbFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkX3ZhbHVlXCIgdi1pZj1cImhlYWRlckluZm8ubGV2ZWwgPCA0XCI+6LedVnt7aGVhZGVySW5mby5sZXZlbCsxfX3ov5jlt657e2dldEV4cFRvTmV4dExldmVsKCl9fTwvc3Bhbj48YSBocmVmPVwiL3ByaXZpbGVnZS9ncm93dGhfZGV0YWlsLmh0bWxcIj7lpoLkvZXlop7liqDmiJDplb/lgLwg77yePC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWFpblwiPlxyXG4gICAgICAgICAgICA8IS0tIOaIkeeahOS4k+WxnueJueadgyBzLS0+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwicGFydCBteV9wcml2aWxlZ2VcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYXJ0X3RpdGxlIGNsZWFyZml4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPuaIkeeahOS4k+WxnueJueadgzwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIHRvPVwiL2ludHJvP3R5cGU9YmlydGhkYXlcIj7lhajpg6jnibnmnYMgPjwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxteS1wcml2aWxlZ2U+PC9teS1wcml2aWxlZ2U+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPCEtLSDmiJHnmoTkuJPlsZ7nibnmnYMgZS0tPlxyXG5cclxuICAgICAgICAgICAgPCEtLSDmiJHnmoTlj6/nlKjnibnmnYPljaEgcy0tPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInBhcnQgbXlfdXNlcmJsZUNhcmRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYXJ0X3RpdGxlIGNsZWFyZml4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPuaIkeeahOWPr+eUqOeJueadg+WNoTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxteS11c2VyYmxlQ2FyZCA6YXZhaWxkLXByaXZpbGdlcz1cImF2YWlsZFByaXZpbGdlc1wiPjwvbXktdXNlcmJsZUNhcmQ+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPCEtLSDmiJHnmoTlj6/nlKjnibnmnYPljaEgZS0tPlxyXG5cclxuICAgICAgICAgICAgPCEtLSDlub/lkYrkvY0gcy0tPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInBhcnQgbXlfYmFubmVyXCIgdi1pZj1cImFkcy5sZW5ndGggPiAwXCI+XHJcbiAgICAgICAgICAgICAgICA8c3dpcGVyIGNsYXNzPVwic3dpcGVyLXdyYXBwZXJcIiA6b3B0aW9ucz1cInN3aXBlck9wdGlvbnMubXlCYW5uZXJcIiByZWY9XCJteVN3aXBlclwiIEB0b3VjaG1vdmUubmF0aXZlPVwicHJldmVudE1vdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3dpcGVyLXNsaWRlIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIGFkc1wiIDprZXk9XCJpbmRleFwiIGNsYXNzPVwic3dpcGVyLXNsaWRlIGJhbm5lcl9pdGVtIHJvdyBtaWRkbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgOmhyZWY9XCJpdGVtLnVybFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiaXRlbS5waWNTcmNcIiA6YWx0PVwiaXRlbS5kZXNjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L3N3aXBlci1zbGlkZT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJhZHMubGVuZ3RoID4gMVwiIGNsYXNzPVwic3dpcGVyLXBhZ2luYXRpb24gcGFnaW5hdGlvbl9zdHlsZVwiIHNsb3Q9XCJwYWdpbmF0aW9uXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3N3aXBlcj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8IS0tIOW5v+WRiuS9jSBlLS0+XHJcblxyXG4gICAgICAgICAgICA8IS0tIOS8muWRmOemj+WIqSBzLS0+XHJcbiAgICAgICAgICAgIDxteS13ZWxmYXJlIDpsYXllci10eHQ9XCJsYXllclR4dFwiPjwvbXktd2VsZmFyZT5cclxuICAgICAgICAgICAgPCEtLSDkvJrlkZjnpo/liKkgZS0tPlxyXG5cclxuICAgICAgICAgICAgPCEtLSDmmYvljYflvpfnp6/liIYg56ev5YiG5YWR5aW956S8IHMtLT5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJwYXJ0IG15X3Njb3JlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFydF90aXRsZSBjbGVhcmZpeFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz7mmYvljYflvpfnp6/liIYg56ev5YiG5YWR5aW956S8PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3Njb3JlIy9pbmRleD9jaG49dmlwXCI+5Y6756ev5YiG5ZWG5Z+OID48L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxteS1zY29yZSA6dmlwLXRpcHM9XCJ2aXBUaXBzXCIgOmxheWVyLXR4dD1cImxheWVyVHh0XCI+PC9teS1zY29yZT5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8IS0tIOaZi+WNh+W+l+enr+WIhiDnp6/liIblhZHlpb3npLwgZS0tPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJcIj48L2Rpdj5cclxuICAgICAgICA8Y29tbW9uLWxheWVyIHYtaWY9XCJsYXllcklzU2hvdy5jb21tb25MYXllclwiIDp0eXBlPVwiY29tbW9uTGF5ZXJUeXBlXCIgOmxheWVyLWluZm89XCJsYXllckluZm9cIiBAY2xvc2U9XCJsYXllckNsb3NlKCdjb21tb25MYXllcicpXCIgQGNvbmZpcm09XCJjb21tb25MYXllcnRDb25maXJtXCI+PC9jb21tb24tbGF5ZXI+XHJcbiAgICAgICAgPHByb21vdGUtbGF5ZXIgdi1pZj1cImxheWVySXNTaG93LnByb21vdGVMYXllclwiIEBzaG93LWxheWVyPVwibGF5ZXJJc1Nob3cucHJvbW90ZUxheWVyID0gdHJ1ZVwiIEBjbG9zZT1cImxheWVyQ2xvc2UoJ3Byb21vdGVMYXllcicpXCIgIEByZXR1cm5WaXBUaXBzPVwicmV0dXJuVmlwVGlwc1wiPjwvcHJvbW90ZS1sYXllcj5cclxuICAgICAgICA8IS0tIOWmguaenHByb21vdGUtbGF5ZXLvvIjlnKhzaG93LWdpZnTkuIvpnaLnmoTlrZDnu4Tku7bvvInkuIDlvIDlp4vpu5jorqTlsZXnpLos5Lya5a+86Ie0c2hvdy1naWZ05byA5aeL6Kej5p6QdGVtcGxhdGUs5bm25LiU5q2k5pe25ou/5LiN5Yiw5Lyg6L+H5Y6755qEZ2lmdEluZm8g5pqC5pe255qE6Kej5Yaz5pa55qGI77ya5Yik5patZ2lmdEluZm/mmK/lkKblrZjlnKggLS0+XHJcbiAgICAgICAgPGVyci10aXAgOmVyci1tc2c9XCJlcnJNc2dcIiA6dGlwcy10eXBlPVwidGlwc1R5cGVcIiAgQGhpZGVUaXBzPVwiZXJyTXNnPScnXCI+PC9lcnItdGlwPlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgeyBzd2lwZXIsIHN3aXBlclNsaWRlIH0gZnJvbSAndnVlLWF3ZXNvbWUtc3dpcGVyJztcclxuICAgIGltcG9ydCBzaG93R2lmdCBmcm9tIFwiLi9jb21wb25lbnRzL3Nob3dHaWZ0LnZ1ZVwiO1xyXG4gICAgaW1wb3J0IHByb21vdGVMYXllciBmcm9tIFwiLi9jb21wb25lbnRzL3Byb21vdGVMYXllci52dWVcIjtcclxuICAgIGltcG9ydCBteVByaXZpbGVnZSBmcm9tIFwiLi9jb21wb25lbnRzL3ByaXZpbGVnZS52dWVcIjtcclxuICAgIGltcG9ydCBteVVzZXJibGVDYXJkIGZyb20gXCIuL2NvbXBvbmVudHMvdXNlcmJsZUNhcmQudnVlXCI7XHJcbiAgICBpbXBvcnQgbXlXZWxmYXJlIGZyb20gXCIuL2NvbXBvbmVudHMvd2VsZmFyZS52dWVcIjtcclxuICAgIGltcG9ydCBteVNjb3JlIGZyb20gXCIuL2NvbXBvbmVudHMvc2NvcmUudnVlXCI7XHJcbiAgICBpbXBvcnQgY29tbW9uTGF5ZXIgZnJvbSBcIi4uL2NvbW1vbi9sYXllci52dWVcIjtcclxuICAgIGltcG9ydCBlcnJUaXAgZnJvbSBcIi4uL2NvbW1vbi9lcnJUaXBzLnZ1ZVwiO1xyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIG5hbWU6XCJkZXRhaWxcIixcclxuICAgICAgICBkYXRhKCl7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBlcnJNc2c6XCJcIixcclxuICAgICAgICAgICAgICAgIHRpcHNUeXBlOjEsXHJcbiAgICAgICAgICAgICAgICBzd2lwZXJPcHRpb25zOntcclxuICAgICAgICAgICAgICAgICAgICBteUJhbm5lcjp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdE5leHRUaWNrOnRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5OjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvb3A6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFdyYXBwZXJTaXplIDp0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uIDogJy5teV9iYW5uZXIgLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbkNsaWNrYWJsZSA6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZlbnRDbGlja3M6dHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZVBhcmVudHM6dHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25UYXA6IHRoaXMuX3RhcFN3aXBlclxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJJbmZvOntcclxuICAgICAgICAgICAgICAgICAgICAgbmFtZTpnX25pY2tuYW1lLFxyXG4gICAgICAgICAgICAgICAgICBoZWFkdXJsOmdfaGVhZHVybCxcclxuICAgICAgICAgICAgICAgICAgICBsZXZlbDpnX2xldmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZXhwOmdfZXhwXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbGF5ZXJJc1Nob3c6e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1vbkxheWVyOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb21vdGVMYXllcjp0cnVlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbGF5ZXJJbmZvOnt9LFxyXG4gICAgICAgICAgICAgICAgbGF5ZXJUeHQ6e1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGxJblR4dDp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOlwi5aGr5YaZ5L+h5oGvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2M6WycxLuS8muWRmOWPr+aMieeFp+S8muWRmOetiee6p+ebuOW6lOaho+S9jeeahOekvOWTge+8jOavj+aciOS7heWPr+mihuWPluS4gOS7vScsJzIu5Lya5ZGY56aP5Yip56S85ZOB5bCG5LqO5q+P5pyIMzDml6Xlj5HmlL7vvIzmnKrpooblj5bnmoTnlKjmiLfkuI3kuojlj5HmlL4nXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnRuVHh0OntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm06J+eri+WNs+mihuWPlidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZVR4dEZvckdpZnQ6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTpcIumihuWPluinhOWImVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjOlsnMS7kvJrlkZjlj6/mjInnhafkvJrlkZjnrYnnuqfnm7jlupTmoaPkvY3nmoTnpLzlk4HvvIzmr4/mnIjku4Xlj6/pooblj5bkuIDku73vvIzlpoLlvZPmnIjmnKrpooblj5bliJnotYTmoLzkvZzlup8nLCcyLuaJgOacieekvOWTgeWdh+mcgOmAmui/h+eZu+iusOS8muWRmOaJi+acuuWPt+egge+8jOmAmui/h+efreS/oeeahOW9ouW8j+WPkeaUvicsJzMu5Lya5ZGY56aP5Yip56S85ZOB5bCG5LqO5q+P5pyIMzDml6Xlj5HmlL7vvIzmnKrpooblj5bnmoTnlKjmiLfkuI3kuojlj5HmlL4nXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnRuVHh0OntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm06J+efpemBk+S6hidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZVR4dEZvclNjb3JlOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6XCLor6bnu4bop4TliJlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzYzpbJzMw5pel5YaF5a6M5oiQ562J57qn5pmL5Y2H77yM5L2g5bCG6I635b6X5Lul5LiL56S85ZOB77yM56S85ZOB5bCG5LqONeS4quW3peS9nOaXpeWQjuS7peefreS/oeaWueW8j+WPkemAgeOAgicsJ1Yx4oaSVjIg77ya5Lu35YC8MTDlhYPnp6/liIYnLCdWMuKGklYzIO+8muS7t+WAvDUw5YWD56ev5YiGJywnVjPihpJWNCDvvJrku7flgLwxMDDlhYPnp6/liIYnLCfop4TliJnor7TmmI7vvJonLCcxLuinhOWImeeUn+aViOaXtumXtOS4ujIwMTflubQ25pyIMeaXpeOAguWcqOatpOS5i+WJjeeahOetiee6p+WIneWni+iuoeeul+aXtumXtOS4ujbmnIgx5pel44CCJywnMi7lpoLmnpzlnKgzMOaXpeWGheaZi+WNh+Wkmue6p++8jOWPr+S7peiOt+W+l+WkmuS7veekvOWTgeOAgiddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidG5UeHQ6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybTon55+l6YGT5LqGJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjb21tb25MYXllclR5cGU6MSxcclxuICAgICAgICAgICAgICAgIHZpcFRpcHM6XCJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wdXRlZDp7XHJcbiAgICAgICAgICAgIGF2YWlsZFByaXZpbGdlcygpe1xyXG4gICAgICAgICAgICAgICAgaWYoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGdfYXZhaWxkUHJpdmlsZ2VzKSA9PSBcIltvYmplY3QgT2JqZWN0XVwiKXtcclxuICAgICAgICAgICAgICAgICAgICBnX2F2YWlsZFByaXZpbGdlcy5sZW5ndGggPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdfYXZhaWxkUHJpdmlsZ2VzO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhZHMoKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBnX2FkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6e1xyXG4gICAgICAgICAgICBnZXRFeHBUb05leHRMZXZlbCgpe1xyXG4gICAgICAgICAgICAgICAgaWYoZ19sZXZlbCA9PSAxKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTAwMDAtZ19leHA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihnX2xldmVsID09IDIpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA1MDAwMC1nX2V4cDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKGdfbGV2ZWwgPT0gMyl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHQxNTAwMDAtZ19leHA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJldHVyblZpcFRpcHModHh0KXtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlwVGlwcyA9IHR4dDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29tbW9uTGF5ZXJ0Q29uZmlybShtb2JpbGUpe1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5jb21tb25MYXllclR5cGUgPT0gMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxsSW5NZXMobW9iaWxlKTtcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuY29tbW9uTGF5ZXJUeXBlID09IDIpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGF5ZXJJc1Nob3cuY29tbW9uTGF5ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2hvd1J1bGUoa2V5KXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvbW1vbkxheWVyKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOjIsXHJcbiAgICAgICAgICAgICAgICAgICAgdHh0OnRoaXMubGF5ZXJUeHRba2V5XVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNob3dDb21tb25MYXllcihvcHRpb25zKXtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgaWYoIW9wdGlvbnMudHh0KXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbW1vbkxheWVyVHlwZSA9IG9wdGlvbnMudHlwZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGF5ZXJJbmZvID0gb3B0aW9ucy50eHQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxheWVySXNTaG93LmNvbW1vbkxheWVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGF5ZXJDbG9zZShsYXllcil7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhsYXllcilcclxuICAgICAgICAgICAgICAgIHRoaXMubGF5ZXJJc1Nob3dbbGF5ZXJdID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByZXZlbnRNb3ZlKCBlICl7XHJcbiAgICAgICAgICAgICAgICBlLl9wcmV2ZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcG9uZW50czp7XHJcbiAgICAgICAgICAgIHN3aXBlclNsaWRlLFxyXG4gICAgICAgICAgICBzd2lwZXIsXHJcbiAgICAgICAgICAgIGNvbW1vbkxheWVyLFxyXG4gICAgICAgICAgICBlcnJUaXAsXHJcbiAgICAgICAgICAgIHByb21vdGVMYXllcixcclxuICAgICAgICAgICAgbXlQcml2aWxlZ2UsXHJcbiAgICAgICAgICAgIG15VXNlcmJsZUNhcmQsXHJcbiAgICAgICAgICAgIG15V2VsZmFyZSxcclxuICAgICAgICAgICAgbXlTY29yZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBzY29wZWQ+XHJcbmJvZHl7YmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDt9XHJcbiAgICAuaGVhZGVye3dpZHRoOjEwMCU7cGFkZGluZzoxLjRyZW0gMCAyLjE1cmVtO2JhY2tncm91bmQ6dXJsKFwiLi9pbWdzL2hlYWRlcl9ib3R0b20uanBnXCIpIG5vLXJlcGVhdCBib3R0b20gY2VudGVyLzEwMCUgLjVyZW0sICMyNDI4MzA7dGV4dC1hbGlnbjogY2VudGVyO31cclxuICAgICAgICAudXNlcl9pY29ue3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjE0cmVtO2hlaWdodDo1LjlyZW07bWFyZ2luOjAgYXV0bztiYWNrZ3JvdW5kOiB1cmwoXCIuL2ltZ3MvaGVhZGVyX2JnLmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyLzEwMCUgMTAwJTtvdmVyZmxvdzogaGlkZGVuO31cclxuICAgICAgICAgICAgLnVzZXJfaWNvbiBpbWd7d2lkdGg6NS45cmVtO2hlaWdodDo1LjlyZW07Ym9yZGVyLXJhZGl1czogNTAlO31cclxuICAgICAgICAgICAgLnVzZXJfaWNvbiAudXNlcl9sdntwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjMuNXJlbTtsZWZ0OjUwJTttYXJnaW4tbGVmdDotNC4wNXJlbTtib3gtc2l6aW5nOmNvbnRlbnQtYm94O3dpZHRoOiA0LjVyZW07aGVpZ2h0OjNyZW07Ym9yZGVyOjEuOHJlbSBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItcmFkaXVzOiA5OTk5OTk5JTtib3JkZXItdG9wLWNvbG9yOiAjY2ZiOTdkO2ZvbnQtc2l6ZTogMS4xcmVtO2NvbG9yOiNmZmY7fVxyXG4gICAgICAgICAgICAgICAgLnVzZXJfaWNvbiAudXNlcl9sdiAudHh0XzFzdHtwb3NpdGlvbjogYWJzb2x1dGU7dG9wOi0xLjdyZW07bGVmdDowLjJyZW07dHJhbnNmb3JtOiByb3RhdGUoLTIyZGVnKTtmb250LXNpemU6IDEuNHJlbTt9XHJcbiAgICAgICAgICAgICAgICAudXNlcl9pY29uIC51c2VyX2x2IC50eHRfMnJke3Bvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6LTEuNnJlbTtsZWZ0OjFyZW07dHJhbnNmb3JtOiByb3RhdGUoLTExZGVnKTt9XHJcbiAgICAgICAgICAgICAgICAudXNlcl9pY29uIC51c2VyX2x2IC50eHRfM3Jke3Bvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6LTEuN3JlbTtsZWZ0OjEuN3JlbTt0cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKTt9XHJcbiAgICAgICAgICAgICAgICAudXNlcl9pY29uIC51c2VyX2x2IC50eHRfNHRoe3Bvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6LTEuNXJlbTtsZWZ0OjNyZW07dHJhbnNmb3JtOiByb3RhdGUoMTdkZWcpO31cclxuICAgICAgICAudXNlcl9pbmZve21hcmdpbi10b3A6IDEuMXJlbTtmb250LXNpemU6IDEuNHJlbTtjb2xvcjojY2ZiOTdkO2xpbmUtaGVpZ2h0OiAyLjJyZW07fVxyXG4gICAgICAgICAgICAudXNlcl9pbmZvIC51c2VyX25hbWUsLnVzZXJfaW5mbyAuc2NvcmV7dmVydGljYWwtYWxpZ246IG1pZGRsZTt9XHJcbiAgICAgICAgLnNjb3JlX2RldGFpbHtmb250LXNpemU6IDEuMnJlbTtsaW5lLWhlaWdodDogMi4xcmVtO2NvbG9yOiNmZmY7fVxyXG4gICAgICAgICAgICAuc2NvcmVfZGV0YWlsIC5kX3ZhbHVle31cclxuICAgICAgICAgICAgLnNjb3JlX2RldGFpbCBhe21hcmdpbi1sZWZ0OjEuMzVyZW07Y29sb3I6I2ZmZjt9XHJcbiAgICAubWFpbnt9XHJcbiAgICAgICBcclxuICAgICAgICAgICAucGFydCAucGFydF9jb250ZW50e30gXHJcbiAgICAgICAgXHJcbiAgICAgICAgLm15X2Jhbm5lcntwb3NpdGlvbjpyZWxhdGl2ZTtoZWlnaHQ6MTByZW07Ym9yZGVyLXJhZGl1czogLjhyZW07bWFyZ2luOjIuN3JlbSAxLjJyZW0gLjVyZW07YmFja2dyb3VuZC1jb2xvcjogI2U2Y2Y5Mjt9XHJcbiAgICAgICAgICAgIC5iYW5uZXJfaXRlbXt3aWR0aDogMTAwJTtoZWlnaHQ6IDEwMCU7fVxyXG4gICAgICAgICAgICAgICAgLmJhbm5lcl9pdGVtIGEsLmJhbm5lcl9pdGVtIGltZ3ttYXgtd2lkdGg6IDEwMCU7aGVpZ2h0OiAxMDAlO31cclxuICAgICAgICAgICAgLm15X2Jhbm5lciAuc3dpcGVyLXBhZ2luYXRpb257Ym90dG9tOjA7fVxyXG4gICAgLmZvb3Rlcnt3aWR0aDogMTAwJTtoZWlnaHQ6IDIxLjRyZW07bWFyZ2luLXRvcDo0LjVyZW07YmFja2dyb3VuZDogdXJsKFwiLi9pbWdzL2Zvb3Rlci5qcGdcIikgbm8tcmVwZWF0IGNlbnRlci8xMDAlIDEwMCU7fVxyXG4uYXJyb3d7ZGlzcGxheTppbmxpbmUtYmxvY2s7Ym94LXNpemluZzpib3JkZXItYm94O3dpZHRoOi44cmVtO2hlaWdodDouOHJlbTtib3JkZXItdG9wOi4xcmVtIHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1yaWdodDouMXJlbSBzb2xpZCB0cmFuc3BhcmVudDt9XHJcbi5hcnJvdy5hcnJvd1Vwey13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO21hcmdpbi1sZWZ0OiAuNnJlbTt9XHJcbi5hcnJvdy5hcnJvd0Rvd257LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO3RyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7bWFyZ2luLWxlZnQ6LjZyZW07bWFyZ2luLWJvdHRvbTouM3JlbTt9XHJcbi5hcnJvdy5hcnJvd1JpZ2h0ey13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO3RyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTttYXJnaW4tbGVmdDogLjNyZW07bWFyZ2luLWJvdHRvbTouMXJlbTt9XHJcbi5hcnJvdy5hcnJvd1JpZ2h0e2JvcmRlci1jb2xvcjojOTk5OTk5O2JvcmRlci1yaWdodC1jb2xvcjojOTk5OTk5O31cclxuPC9zdHlsZT5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnQvZGV0YWlsL2RldGFpbC52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoZWFkZXJcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidXNlcl9pY29uXCIgfSwgW1xuICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogX3ZtLmhlYWRlckluZm8uaGVhZHVybCwgYWx0OiBcIueUqOaIt+WktOWDj1wiIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidXNlcl9sdlwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInR4dF8xc3RcIiB9LCBbX3ZtLl92KFwidlwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInR4dF8ycmRcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmhlYWRlckluZm8ubGV2ZWwpKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidHh0XzNyZFwiIH0sIFtfdm0uX3YoXCLkvJpcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0eHRfNHRoXCIgfSwgW192bS5fdihcIuWRmFwiKV0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidXNlcl9pbmZvXCIgfSwgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInVzZXJfbmFtZVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmhlYWRlckluZm8ubmFtZSkpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJzY29yZVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIuaIkOmVv+WAvO+8mlwiICsgX3ZtLl9zKF92bS5oZWFkZXJJbmZvLmV4cCkpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2NvcmVfZGV0YWlsXCIgfSwgW1xuICAgICAgICAgIF92bS5oZWFkZXJJbmZvLmxldmVsIDwgNFxuICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJkX3ZhbHVlXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgIFwi6LedVlwiICtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5oZWFkZXJJbmZvLmxldmVsICsgMSkgK1xuICAgICAgICAgICAgICAgICAgICBcIui/mOW3rlwiICtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5nZXRFeHBUb05leHRMZXZlbCgpKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogXCIvcHJpdmlsZWdlL2dyb3d0aF9kZXRhaWwuaHRtbFwiIH0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwi5aaC5L2V5aKe5Yqg5oiQ6ZW/5YC8IO+8nlwiKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYWluXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJzZWN0aW9uXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBhcnQgbXlfcHJpdmlsZWdlXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBhcnRfdGl0bGUgY2xlYXJmaXhcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaDNcIiwgW192bS5fdihcIuaIkeeahOS4k+WxnueJueadg1wiKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwicm91dGVyLWxpbmtcIiwgeyBhdHRyczogeyB0bzogXCIvaW50cm8/dHlwZT1iaXJ0aGRheVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLlhajpg6jnibnmnYMgPlwiKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJteS1wcml2aWxlZ2VcIilcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJzZWN0aW9uXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBhcnQgbXlfdXNlcmJsZUNhcmRcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwibXktdXNlcmJsZUNhcmRcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYXZhaWxkLXByaXZpbGdlc1wiOiBfdm0uYXZhaWxkUHJpdmlsZ2VzIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5hZHMubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcInNlY3Rpb25cIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBhcnQgbXlfYmFubmVyXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJzd2lwZXJcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJteVN3aXBlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInN3aXBlci13cmFwcGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgb3B0aW9uczogX3ZtLnN3aXBlck9wdGlvbnMubXlCYW5uZXIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2htb3ZlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5wcmV2ZW50TW92ZSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5hZHMsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwic3dpcGVyLXNsaWRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInN3aXBlci1zbGlkZSBiYW5uZXJfaXRlbSByb3cgbWlkZGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IGl0ZW0udXJsIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IGl0ZW0ucGljU3JjLCBhbHQ6IGl0ZW0uZGVzYyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5hZHMubGVuZ3RoID4gMVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3dpcGVyLXBhZ2luYXRpb24gcGFnaW5hdGlvbl9zdHlsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwicGFnaW5hdGlvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdDogXCJwYWdpbmF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJteS13ZWxmYXJlXCIsIHsgYXR0cnM6IHsgXCJsYXllci10eHRcIjogX3ZtLmxheWVyVHh0IH0gfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwic2VjdGlvblwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwYXJ0IG15X3Njb3JlXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcIm15LXNjb3JlXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyBcInZpcC10aXBzXCI6IF92bS52aXBUaXBzLCBcImxheWVyLXR4dFwiOiBfdm0ubGF5ZXJUeHQgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb290ZXJcIiB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ubGF5ZXJJc1Nob3cuY29tbW9uTGF5ZXJcbiAgICAgICAgPyBfYyhcImNvbW1vbi1sYXllclwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBfdm0uY29tbW9uTGF5ZXJUeXBlLCBcImxheWVyLWluZm9cIjogX3ZtLmxheWVySW5mbyB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5sYXllckNsb3NlKFwiY29tbW9uTGF5ZXJcIilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgY29uZmlybTogX3ZtLmNvbW1vbkxheWVydENvbmZpcm1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5sYXllcklzU2hvdy5wcm9tb3RlTGF5ZXJcbiAgICAgICAgPyBfYyhcInByb21vdGUtbGF5ZXJcIiwge1xuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgXCJzaG93LWxheWVyXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5sYXllcklzU2hvdy5wcm9tb3RlTGF5ZXIgPSB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNsb3NlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0ubGF5ZXJDbG9zZShcInByb21vdGVMYXllclwiKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICByZXR1cm5WaXBUaXBzOiBfdm0ucmV0dXJuVmlwVGlwc1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJlcnItdGlwXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgXCJlcnItbXNnXCI6IF92bS5lcnJNc2csIFwidGlwcy10eXBlXCI6IF92bS50aXBzVHlwZSB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGhpZGVUaXBzOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgIF92bS5lcnJNc2cgPSBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBhcnRfdGl0bGUgY2xlYXJmaXhcIiB9LCBbXG4gICAgICBfYyhcImgzXCIsIFtfdm0uX3YoXCLmiJHnmoTlj6/nlKjnibnmnYPljaFcIildKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicGFydF90aXRsZSBjbGVhcmZpeFwiIH0sIFtcbiAgICAgIF9jKFwiaDNcIiwgW192bS5fdihcIuaZi+WNh+W+l+enr+WIhiDnp6/liIblhZHlpb3npLxcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcIi9zY29yZSMvaW5kZXg/Y2huPXZpcFwiIH0gfSwgW1xuICAgICAgICBfdm0uX3YoXCLljrvnp6/liIbllYbln44gPlwiKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbnZhciBlc0V4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5leHBvcnQgZGVmYXVsdCBlc0V4cG9ydHNcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtZWE1MmVkZjJcIiwgZXNFeHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTMuNy4yQHZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtZWE1MmVkZjJcIixcImhhc1Njb3BlZFwiOnRydWUsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDEzLjcuMkB2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvY29tcG9uZW50L2RldGFpbC9kZXRhaWwudnVlXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luQDMuMC4yQGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbi9kaXN0L2xvYWRlci5qcz97XFxcIm9taXRcXFwiOjEsXFxcInJlbW92ZVxcXCI6dHJ1ZX0hdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3tcXFwiaW1wb3J0TG9hZGVyc1xcXCI6MSxcXFwibWluaW1pemVcXFwiOmZhbHNlLFxcXCJzb3VyY2VNYXBcXFwiOmZhbHNlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTMuNy4yQHZ1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi1lYTUyZWRmMlxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjpmYWxzZX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDEzLjcuMkB2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vZGV0YWlsLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDEzLjcuMkB2dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG5leHBvcnQgKiBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDEzLjcuMkB2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vZGV0YWlsLnZ1ZVwiXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxMy43LjJAdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2RldGFpbC52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCBfX3Z1ZV90ZW1wbGF0ZV9fIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxMy43LjJAdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi1lYTUyZWRmMlxcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTMuNy4yQHZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2RldGFpbC52dWVcIlxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gXCJkYXRhLXYtZWE1MmVkZjJcIlxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjXFxcXGNvbXBvbmVudFxcXFxkZXRhaWxcXFxcZGV0YWlsLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1lYTUyZWRmMlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWVhNTJlZGYyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudC9kZXRhaWwvZGV0YWlsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2V4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbkAzLjAuMkBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4vZGlzdC9sb2FkZXIuanM/e1wib21pdFwiOjEsXCJyZW1vdmVcIjp0cnVlfSFGOi94cHJvamVjdC93ZWIvcHJpdmlsZWdlX3YzL25vZGVfbW9kdWxlcy9fdnVlLXN0eWxlLWxvYWRlckAzLjEuMkB2dWUtc3R5bGUtbG9hZGVyIUY6L3hwcm9qZWN0L3dlYi9wcml2aWxlZ2VfdjMvbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlcj97XCJpbXBvcnRMb2FkZXJzXCI6MSxcIm1pbmltaXplXCI6ZmFsc2UsXCJzb3VyY2VNYXBcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTMuNy4yQHZ1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTUzMWYyNGExXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDEzLjcuMkB2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL2NvbXBvbmVudC9kZXRhaWwvY29tcG9uZW50cy9wcml2aWxlZ2UudnVlXG4vLyBtb2R1bGUgaWQgPSBGNzBJXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2V4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbkAzLjAuMkBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4vZGlzdC9sb2FkZXIuanM/e1wib21pdFwiOjEsXCJyZW1vdmVcIjp0cnVlfSFGOi94cHJvamVjdC93ZWIvcHJpdmlsZWdlX3YzL25vZGVfbW9kdWxlcy9fdnVlLXN0eWxlLWxvYWRlckAzLjEuMkB2dWUtc3R5bGUtbG9hZGVyIUY6L3hwcm9qZWN0L3dlYi9wcml2aWxlZ2VfdjMvbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlcj97XCJpbXBvcnRMb2FkZXJzXCI6MSxcIm1pbmltaXplXCI6ZmFsc2UsXCJzb3VyY2VNYXBcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTMuNy4yQHZ1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTQ0MTM3ZmZjXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDEzLjcuMkB2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL2NvbXBvbmVudC9kZXRhaWwvY29tcG9uZW50cy9zY29yZS52dWVcbi8vIG1vZHVsZSBpZCA9IFlrSC9cbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luQDMuMC4yQGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbi9kaXN0L2xvYWRlci5qcz97XCJvbWl0XCI6MSxcInJlbW92ZVwiOnRydWV9IUY6L3hwcm9qZWN0L3dlYi9wcml2aWxlZ2VfdjMvbm9kZV9tb2R1bGVzL192dWUtc3R5bGUtbG9hZGVyQDMuMS4yQHZ1ZS1zdHlsZS1sb2FkZXIhRjoveHByb2plY3Qvd2ViL3ByaXZpbGVnZV92My9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyP3tcImltcG9ydExvYWRlcnNcIjoxLFwibWluaW1pemVcIjpmYWxzZSxcInNvdXJjZU1hcFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxMy43LjJAdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtZWE1MmVkZjJcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTMuNy4yQHZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvY29tcG9uZW50L2RldGFpbC9kZXRhaWwudnVlXG4vLyBtb2R1bGUgaWQgPSBvOS9kXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2V4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbkAzLjAuMkBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4vZGlzdC9sb2FkZXIuanM/e1wib21pdFwiOjEsXCJyZW1vdmVcIjp0cnVlfSFGOi94cHJvamVjdC93ZWIvcHJpdmlsZWdlX3YzL25vZGVfbW9kdWxlcy9fdnVlLXN0eWxlLWxvYWRlckAzLjEuMkB2dWUtc3R5bGUtbG9hZGVyIUY6L3hwcm9qZWN0L3dlYi9wcml2aWxlZ2VfdjMvbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlcj97XCJpbXBvcnRMb2FkZXJzXCI6MSxcIm1pbmltaXplXCI6ZmFsc2UsXCJzb3VyY2VNYXBcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTMuNy4yQHZ1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LWFiMmM0MWU2XCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDEzLjcuMkB2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL2NvbXBvbmVudC9kZXRhaWwvY29tcG9uZW50cy9zaG93R2lmdC52dWVcbi8vIG1vZHVsZSBpZCA9IHRpcXNcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luQDMuMC4yQGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbi9kaXN0L2xvYWRlci5qcz97XCJvbWl0XCI6MSxcInJlbW92ZVwiOnRydWV9IUY6L3hwcm9qZWN0L3dlYi9wcml2aWxlZ2VfdjMvbm9kZV9tb2R1bGVzL192dWUtc3R5bGUtbG9hZGVyQDMuMS4yQHZ1ZS1zdHlsZS1sb2FkZXIhRjoveHByb2plY3Qvd2ViL3ByaXZpbGVnZV92My9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyP3tcImltcG9ydExvYWRlcnNcIjoxLFwibWluaW1pemVcIjpmYWxzZSxcInNvdXJjZU1hcFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxMy43LjJAdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNWFmY2Q2OWVcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTMuNy4yQHZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvY29tcG9uZW50L2RldGFpbC9jb21wb25lbnRzL3Byb21vdGVMYXllci52dWVcbi8vIG1vZHVsZSBpZCA9IHZXcWVcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luQDMuMC4yQGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbi9kaXN0L2xvYWRlci5qcz97XCJvbWl0XCI6MSxcInJlbW92ZVwiOnRydWV9IUY6L3hwcm9qZWN0L3dlYi9wcml2aWxlZ2VfdjMvbm9kZV9tb2R1bGVzL192dWUtc3R5bGUtbG9hZGVyQDMuMS4yQHZ1ZS1zdHlsZS1sb2FkZXIhRjoveHByb2plY3Qvd2ViL3ByaXZpbGVnZV92My9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyP3tcImltcG9ydExvYWRlcnNcIjoxLFwibWluaW1pemVcIjpmYWxzZSxcInNvdXJjZU1hcFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxMy43LjJAdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNzhiNzBkNjBcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTMuNy4yQHZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvY29tcG9uZW50L2RldGFpbC9jb21wb25lbnRzL3VzZXJibGVDYXJkLnZ1ZVxuLy8gbW9kdWxlIGlkID0geElCclxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19leHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5AMy4wLjJAZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luL2Rpc3QvbG9hZGVyLmpzP3tcIm9taXRcIjoxLFwicmVtb3ZlXCI6dHJ1ZX0hRjoveHByb2plY3Qvd2ViL3ByaXZpbGVnZV92My9ub2RlX21vZHVsZXMvX3Z1ZS1zdHlsZS1sb2FkZXJAMy4xLjJAdnVlLXN0eWxlLWxvYWRlciFGOi94cHJvamVjdC93ZWIvcHJpdmlsZWdlX3YzL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXI/e1wiaW1wb3J0TG9hZGVyc1wiOjEsXCJtaW5pbWl6ZVwiOmZhbHNlLFwic291cmNlTWFwXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDEzLjcuMkB2dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi03OTkxYTJmY1wiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxMy43LjJAdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9jb21wb25lbnQvZGV0YWlsL2NvbXBvbmVudHMvd2VsZmFyZS52dWVcbi8vIG1vZHVsZSBpZCA9IHp2eXhcbi8vIG1vZHVsZSBjaHVua3MgPSAyIl0sInNvdXJjZVJvb3QiOiIifQ==