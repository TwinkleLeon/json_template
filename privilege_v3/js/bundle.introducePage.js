webpackJsonp([1],{

/***/ "3neS":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "9sRX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: F:/xproject/web/privilege_v3/node_modules/_swiper@3.4.2@swiper/dist/css/swiper.css
var swiper = __webpack_require__("aEDl");
var swiper_default = /*#__PURE__*/__webpack_require__.n(swiper);

// EXTERNAL MODULE: F:/xproject/web/privilege_v3/node_modules/_vue-awesome-swiper@2.6.7@vue-awesome-swiper/index.js
var _vue_awesome_swiper_2_6_7_vue_awesome_swiper = __webpack_require__("41jX");
var _vue_awesome_swiper_2_6_7_vue_awesome_swiper_default = /*#__PURE__*/__webpack_require__.n(_vue_awesome_swiper_2_6_7_vue_awesome_swiper);

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

// EXTERNAL MODULE: ./src/component/intro/imgs/code.jpg
var code = __webpack_require__("oA58");
var code_default = /*#__PURE__*/__webpack_require__.n(code);

// CONCATENATED MODULE: F:/xproject/web/privilege_v3/node_modules/_babel-loader@6.4.1@babel-loader/lib!./node_modules/_vue-loader@13.7.2@vue-loader/lib/selector.js?type=script&index=0!./src/component/intro/intro.vue
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


















/* harmony default export */ var intro = ({
    name: "intro",
    data: function data() {
        return {
            swiperOptions: {
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
            data: {
                birthday: {
                    intro: "会员账户下每个被保人生日当天都会收到一份来自小雨伞的惊喜生日祝福，同时还可以参加幸运抽奖，100%中奖。",
                    link: {
                        url: "javascript:void(0);",
                        txt: "管理我的被保人>"
                    },
                    table: {
                        desc: "",
                        ths: ['会员等级', '抽奖次数'],
                        tds: {
                            "V1会员": '2次/每个被保人',
                            "V2会员": '2次/每个被保人',
                            "V3会员": '3次/每个被保人',
                            "V4会员": '4次/每个被保人'
                        }
                    },
                    guide: ['1、生日贺卡：生日当天，可收到生日贺卡祝福（贺卡将以微信/短信/邮件的形式发放）', '2、幸运抽奖：收到生日祝福后按照信息提示点击进入抽奖环节即可参与', '3、虚拟奖品可立即领取或使用；实物奖品完善收件信息后将在3日内寄出'],
                    btn: {
                        btnUrl: "/lottery/action?actId=2016",
                        txt: "立即抽奖"
                    }
                },
                lecture: {
                    intro: "为丰富会员对保险及相关领域的知识，小雨伞特别精选了精算师讲师团队、外聘了理财、育儿等专家为会员举办讲座。",
                    table: {
                        desc: "",
                        ths: ['会员等级', '专家讲座价格'],
                        tds: {
                            "V1会员": '付费',
                            "V2会员": '免费',
                            "V3会员": '免费',
                            "V4会员": '免费'
                        }
                    },
                    guide: ['1、每月将举办1-2次会员讲座，讲座前会提前预告主题和大纲，会员可提前预约', '2、讲座当天19:30-20:30举办讲座，讲座中会有和专家一对一沟通的机会，并且不定期会有神秘福利送出', '3、讲座结束后，用户可随时回顾往期讲座'],
                    btn: {
                        btnUrl: "https://m.qlchat.com/wechat/page/live/840000123365012",
                        txt: "查看往期讲座"
                    }
                },
                freeMail: {
                    intro: "购买小雨伞保险平台产品后申请理赔过程中，如需邮寄理赔材料给保险公司，将可以获得邮费补贴，每次15元。",
                    table: {
                        desc: "您已享受理赔免邮补贴共计30元",
                        ths: ['会员等级', '邮费补贴次数'],
                        tds: {
                            "V1会员": '0次',
                            "V2会员": '1次（共15元）',
                            "V3会员": '2次（共30元）',
                            "V4会员": '3次（共45元）'
                        }
                    },
                    guide: ['1、在小雨伞保险公众号申请理赔的用户，理赔完成后，免邮补贴直接发放至微信零钱账户', '2、在小雨伞APP申请理赔的用户可获得同等价值的积分：150分，可通过积分商城兑换礼品'],
                    btn: {
                        btnUrl: "/privilege/index/claimlist",
                        txt: "查看符合条件的理赔单"
                    }
                },
                invite: {
                    intro: "参与小雨伞保险邀请有奖活动，按照规则推荐好友购买小雨伞保险平台产品，好友保单生效后获得相应红包奖励。会员所得红包可翻倍，不同等级会员享受不同倍数。",
                    table: {
                        desc: "等级越高，额外获得的奖励越多",
                        ths: ['会员等级', '翻倍特权'],
                        tds: {
                            "V1会员": '无',
                            "V2会员": '有',
                            "V3会员": '有',
                            "V4会员": '有'
                        }
                    },
                    guide: ['1、小雨伞保险公众号＞个人中心＞邀请有红包', '2、不定期的针对某商品的邀请有奖活动']
                },
                server: {
                    intro: "一对一咨询服务，且可受邀请进入VIP会员群，享受群内不定期福利。",
                    table: {
                        desc: "",
                        ths: ['会员等级', '专属客服'],
                        tds: {
                            "V1会员": '无',
                            "V2会员": '有',
                            "V3会员": '有',
                            "V4会员": '有'
                        }
                    },
                    guide: ['1、V2及以上会员可微信添加xiaoyusan2，回复“会员+投保电话号码”进行添加', '2、客服阳阳妈验证通过后，邀您进入VIP会员群，如有问题可随时咨询阳阳妈'],
                    code: {
                        codeUrl: code_default.a,
                        desc: "长按扫码添加阳阳妈"
                    }
                },
                consult: {
                    intro: "保险专家一对一为您服务，为您规划家庭整体保险方案，对市面上重点产品进行对比，对已有保单进行诊断分析",
                    table: {
                        desc: "",
                        ths: ['会员等级', '专家一对一'],
                        tds: {
                            "V1会员": '68元（限时优惠）',
                            "V2会员": '61.6元（7折）',
                            "V3会员": '52.8元（5折）',
                            "V4会员": '44元（3折）'
                        }
                    },
                    guide: ['1、个人中心＞会员特权＞专家一对一', '2、小雨伞保险＞发现＞保险问诊服务'],
                    btn: {
                        btnUrl: "/pay/actPay?id=1004&chn=vip",
                        txt: "低价预约保险问诊服务"
                    }
                },
                secretGift: {
                    intro: "为给予会员更发的福利，小雨伞保险将每年都会有神秘礼物直接寄送到家，每次礼物均不同，惊喜满满！V2以上用户可收到至少一年一次神秘礼物",
                    table: {
                        desc: "",
                        ths: ['会员等级', '神秘礼物'],
                        tds: {
                            "V1会员": '无',
                            "V2会员": '有',
                            "V3会员": '有',
                            "V4会员": '有'
                        }
                    },
                    guide: ['1、小雨伞保险公众号＞个人中心＞点击个人头像，完善收货地址', '2、静静等待小雨伞的神秘礼物寄送到家']
                }
            },
            navData: [{
                isActive: true,
                iconUrl: {
                    active: privilege_birth_default.a,
                    noActive: privilege_birth_no_default.a
                },
                tip: "",
                desc: "生日礼包"
            }, {
                isActive: false,
                iconUrl: {
                    active: privilege_class_default.a,
                    noActive: privilege_class_no_default.a
                },
                tip: "每月15日",
                desc: "会员讲座"
            }, {
                isActive: false,
                iconUrl: {
                    active: privilege_freeMail_default.a,
                    noActive: privilege_freeMail_no_default.a
                },
                tip: "15元一次",
                desc: "理赔免邮"
            }, {
                isActive: false,
                iconUrl: {
                    active: privilege_double_default.a,
                    noActive: privilege_double_no_default.a
                },
                tip: "",
                desc: "奖励翻倍"
            }, {
                isActive: false,
                iconUrl: {
                    active: privilege_service_default.a,
                    noActive: privilege_service_no_default.a
                },
                tip: "",
                desc: "专属客服"
            }, {
                isActive: false,
                iconUrl: {
                    active: privilege_consult_default.a,
                    noActive: privilege_consult_no_default.a
                },
                tip: "",
                desc: "专家咨询"
            }, {
                isActive: false,
                iconUrl: {
                    active: privilege_day_default.a,
                    noActive: privilege_day_no_default.a
                },
                tip: "",
                desc: "神秘礼物"
            }],
            pagetypeMap: ['birthday', 'lecture', 'freeMail', 'invite', 'server', 'consult', 'secretGift'],
            pageType: "birthday",
            pageInfo: {
                intro: "会员账户下每个被保人生日当天都会收到一份来自小雨伞的惊喜生日祝福，同时还可以参加幸运抽奖，100%中奖。",
                link: {
                    url: "javascript:void(0);",
                    txt: "管理我的被保人>"
                },
                table: {
                    desc: "",
                    ths: ['会员等级', '抽奖次数'],
                    tds: {
                        "V1会员": '2次/每个被保人',
                        "V2会员": '2次/每个被保人',
                        "V3会员": '3次/每个被保人',
                        "V4会员": '4次/每个被保人'
                    }
                },
                guide: ['1、生日贺卡：生日当天，可收到生日贺卡祝福（贺卡将以微信/短信/邮件的形式发放）', '2、幸运抽奖：收到生日祝福后按照信息提示点击进入抽奖环节即可参与', '3、虚拟奖品可立即领取或使用；实物奖品完善收件信息后将在3日内寄出'],
                btn: {
                    btnUrl: "/lottery/action?actId=2016",
                    txt: "立即抽奖"
                }
            }
        };
    },
    mounted: function mounted() {
        // this.pageType = 'birthday';
        this.initPageType();
    },

    methods: {
        initPageType: function initPageType() {
            var type = this.$route.query.type;
            console.log('type', type);
            if (type) {
                this.pageType = type;
            }
        },
        _tapNav: function _tapNav() {
            var index = this.$refs.mySwiper.swiper.clickedIndex;
            console.log(this.$refs.mySwiper.swiper.clickedIndex);
            this.pageType = this.pagetypeMap[index];
        },
        preventMove: function preventMove(e) {
            e._prevent = true;
        }
    },
    watch: {
        pageType: function pageType(value) {
            console.log('value', value);
            var index = this.pagetypeMap.indexOf(value);
            this.$refs.mySwiper.swiper.slideTo(index);
            this.navData = this.navData.filter(function (item, i) {
                if (i == index) {
                    item.isActive = true;
                } else {
                    item.isActive = false;
                }
                return true;
            });
            this.pageInfo = this.data[value];
        }
    },
    components: {
        swiper: _vue_awesome_swiper_2_6_7_vue_awesome_swiper["swiper"],
        swiperSlide: _vue_awesome_swiper_2_6_7_vue_awesome_swiper["swiperSlide"]
    }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.2@vue-loader/lib/template-compiler?{"id":"data-v-76fac087","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.2@vue-loader/lib/selector.js?type=template&index=0!./src/component/intro/intro.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "header" }, [
      _c(
        "nav",
        { staticClass: "part_content privilege_box" },
        [
          _c(
            "swiper",
            {
              ref: "mySwiper",
              staticClass: "swiper-wrapper",
              attrs: { options: _vm.swiperOptions },
              nativeOn: {
                touchmove: function($event) {
                  return _vm.preventMove($event)
                }
              }
            },
            _vm._l(_vm.navData, function(item, index) {
              return _c(
                "swiper-slide",
                {
                  key: index,
                  class: {
                    "swiper-slide privilege_item": true,
                    active: item.isActive
                  }
                },
                [
                  _c("div", { staticClass: "privilege_icon row middle" }, [
                    _c("div", [
                      _c("div", { staticClass: "icon_img row middle" }, [
                        item.isActive
                          ? _c("img", {
                              attrs: {
                                src: item.iconUrl.active,
                                alt: item.desc
                              }
                            })
                          : _c("img", {
                              attrs: {
                                src: item.iconUrl.noActive,
                                alt: item.desc
                              }
                            })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "icon_des" }, [
                        _vm._v(_vm._s(item.tip))
                      ])
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
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "main" }, [
      _c("section", { staticClass: "part my_score" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "part_content score_box" }, [
          _c("p", [_vm._v(_vm._s(_vm.pageInfo.intro))]),
          _vm._v(" "),
          _vm.pageInfo.link
            ? _c("a", { attrs: { href: _vm.pageInfo.link.url } }, [
                _vm._v(_vm._s(_vm.pageInfo.link.txt))
              ])
            : _vm._e()
        ])
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "part my_sevice" }, [
        _vm._m(1),
        _vm._v(" "),
        _c("div", { staticClass: "part_content sevice_box" }, [
          _c("p", [_vm._v(_vm._s(_vm.pageInfo.table.desc))]),
          _vm._v(" "),
          _c("table", [
            _c("thead", { staticClass: "row middle" }, [
              _c("th", [_vm._v("会员等级")]),
              _vm._v(" "),
              _c("th", { staticClass: "col" }, [
                _vm._v(_vm._s(_vm.pageInfo.table.ths[1]))
              ])
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.pageInfo.table.tds, function(item, key) {
                return _c("tr", { key: key, staticClass: "row middle" }, [
                  _c("td", [_vm._v(_vm._s(key))]),
                  _vm._v(" "),
                  _c("td", { staticClass: "col" }, [_vm._v(_vm._s(item))])
                ])
              })
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "part my_right" }, [
        _vm._m(2),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "part_content right_box" },
          [
            _vm._l(_vm.pageInfo.guide, function(item, index) {
              return _c("p", { key: index }, [_vm._v(_vm._s(item))])
            }),
            _vm._v(" "),
            _vm.pageInfo.code
              ? _c("div", { staticClass: "code_box" }, [
                  _c("img", {
                    attrs: { src: _vm.pageInfo.code.codeUrl, alt: "二维码" }
                  }),
                  _vm._v(" "),
                  _c("p", [_vm._v(_vm._s(_vm.pageInfo.code.desc))])
                ])
              : _vm._e()
          ],
          2
        )
      ])
    ]),
    _vm._v(" "),
    _vm.pageInfo.btn
      ? _c("div", { staticClass: "footer" }, [
          _c("a", { attrs: { href: _vm.pageInfo.btn.btnUrl } }, [
            _vm._v(_vm._s(_vm.pageInfo.btn.txt))
          ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "part_title clearfix" }, [
      _c("h3", [_vm._v("权益介绍")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "part_title clearfix" }, [
      _c("h3", [_vm._v("用户服务")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "part_title clearfix" }, [
      _c("h3", [_vm._v("权益介绍")])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var intro_intro = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-76fac087", esExports)
  }
}
// CONCATENATED MODULE: ./src/component/intro/intro.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("3neS")
}
var normalizeComponent = __webpack_require__("vSlaU")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-76fac087"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  intro,
  intro_intro,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\component\\intro\\intro.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-76fac087", Component.options)
  } else {
    hotAPI.reload("data-v-76fac087", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var component_intro_intro = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "dtJt":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "oA58":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/code.5d03298f5503ff45.jpg";

/***/ }),

/***/ "pVzf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/insure_icon.b73ac77a3878516e.jpg";

/***/ }),

/***/ "w8rm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/component/common/errTips.vue + 1 modules
var errTips = __webpack_require__("tsjb");

// CONCATENATED MODULE: F:/xproject/web/privilege_v3/node_modules/_babel-loader@6.4.1@babel-loader/lib!./node_modules/_vue-loader@13.7.2@vue-loader/lib/selector.js?type=script&index=0!./src/component/claimList/index.vue
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


/* harmony default export */ var claimList = ({
    data: function data() {
        return {
            errMsg: "",
            tipsType: 1,
            claimList: []
        };
    },
    mounted: function mounted() {
        this.initPage();
    },

    methods: {
        initPage: function initPage() {
            var _this = this;

            this.$fetch("/claims/getUserFreeMailRecord").then(function (data) {
                if (data.ret != 0) {
                    _this.tipsType = 1;
                    _this.errMsg = data.errmsg;
                } else {
                    console.log(data);
                    _this.claimList = data.data;
                }
            }).catch(function (e) {
                if (!e) {
                    e = "系统繁忙，请稍后重试";
                }
                _this.tipsType = 1;
                _this.errMsg = e.toString();
            });
        },
        preventMove: function preventMove(e) {
            e._prevent = true;
        }
    },
    components: {
        errTip: errTips["a" /* default */]
    }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.2@vue-loader/lib/template-compiler?{"id":"data-v-7fd5850a","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.2@vue-loader/lib/selector.js?type=template&index=0!./src/component/claimList/index.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "list_container" },
    [
      _vm.claimList.length > 0
        ? _c(
            "ul",
            { staticClass: "list_box" },
            _vm._l(_vm.claimList, function(item, index) {
              return _c("li", { key: index, staticClass: "list_item" }, [
                _c("h3", { staticClass: "item_title" }, [
                  _vm._v(_vm._s(item.product_title))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "item_detail row" }, [
                  _c("div", { staticClass: "item_mes col" }, [
                    _c("p", [
                      _vm._v("被保险人："),
                      _c("span", [_vm._v(_vm._s(item.insurance_benificiary))])
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v("申请时间："),
                      _c("span", [_vm._v(_vm._s(item.gen_time))])
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "state" }, [
                      _vm._v("理赔状态："),
                      _c("span", [
                        _vm._v(
                          "理赔已完成，金额为" +
                            _vm._s(item.claims_price / 100) +
                            "元"
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(0, true)
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "item_bottom row center" }, [
                  _c("p", { staticClass: "item_tip" }, [
                    _vm._v("15元理赔免邮补贴已发放")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "item_btn" }, [
                    _c(
                      "a",
                      {
                        attrs: {
                          href: "/claims/index#/detail/" + item.claims_id
                        }
                      },
                      [_vm._v("查看详情")]
                    )
                  ])
                ])
              ])
            })
          )
        : _c("div", [_vm._v("暂无理赔免邮记录")]),
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
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "item_icon row middle" }, [
      _c("img", {
        attrs: { src: __webpack_require__("pVzf"), alt: "保险icon" }
      })
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var component_claimList = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-7fd5850a", esExports)
  }
}
// CONCATENATED MODULE: ./src/component/claimList/index.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("dtJt")
}
var normalizeComponent = __webpack_require__("vSlaU")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7fd5850a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  claimList,
  component_claimList,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\component\\claimList\\index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7fd5850a", Component.options)
  } else {
    hotAPI.reload("data-v-7fd5850a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var src_component_claimList = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L2ludHJvL2ludHJvLnZ1ZT80ZjRkIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50L2ludHJvL2ludHJvLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L2ludHJvL2ludHJvLnZ1ZT9mNmM4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvaW50cm8vaW50cm8udnVlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvY2xhaW1MaXN0L2luZGV4LnZ1ZT82ZTUzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvaW50cm8vaW1ncy9jb2RlLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L2NsYWltTGlzdC9pbWdzL2luc3VyZV9pY29uLmpwZyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudC9jbGFpbUxpc3QvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvY2xhaW1MaXN0L2luZGV4LnZ1ZT9hM2U0Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvY2xhaW1MaXN0L2luZGV4LnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7MENBQ0E7QUFDQSxpQkFEQTtBQUVBLFFBRkEsa0JBRUE7QUFDQTtBQUNBO0FBQ0EsaUNBREE7QUFFQSwyQkFGQTtBQUdBLDJCQUhBO0FBSUEsb0NBSkE7QUFLQSwrREFMQTtBQU1BLDBD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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRCIsImZpbGUiOiJqcy9idW5kbGUuaW50cm9kdWNlUGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2V4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbkAzLjAuMkBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4vZGlzdC9sb2FkZXIuanM/e1wib21pdFwiOjEsXCJyZW1vdmVcIjp0cnVlfSFGOi94cHJvamVjdC93ZWIvcHJpdmlsZWdlX3YzL25vZGVfbW9kdWxlcy9fdnVlLXN0eWxlLWxvYWRlckAzLjEuMkB2dWUtc3R5bGUtbG9hZGVyIUY6L3hwcm9qZWN0L3dlYi9wcml2aWxlZ2VfdjMvbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlcj97XCJpbXBvcnRMb2FkZXJzXCI6MSxcIm1pbmltaXplXCI6ZmFsc2UsXCJzb3VyY2VNYXBcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTMuNy4yQHZ1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTc2ZmFjMDg3XCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDEzLjcuMkB2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL2NvbXBvbmVudC9pbnRyby9pbnRyby52dWVcbi8vIG1vZHVsZSBpZCA9IDNuZVNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJwYXJ0X2NvbnRlbnQgcHJpdmlsZWdlX2JveFwiPlxyXG4gICAgICAgICAgICAgICAgPHN3aXBlciBjbGFzcz1cInN3aXBlci13cmFwcGVyXCIgOm9wdGlvbnM9XCJzd2lwZXJPcHRpb25zXCIgcmVmPVwibXlTd2lwZXJcIiBAdG91Y2htb3ZlLm5hdGl2ZT1cInByZXZlbnRNb3ZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN3aXBlci1zbGlkZSB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBuYXZEYXRhXCIgOmtleT1cImluZGV4XCIgIDpjbGFzcz1cInsnc3dpcGVyLXNsaWRlIHByaXZpbGVnZV9pdGVtJzp0cnVlLGFjdGl2ZTppdGVtLmlzQWN0aXZlfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpdmlsZWdlX2ljb24gcm93IG1pZGRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaWNvbl9pbWcgcm93IG1pZGRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHYtaWY9XCJpdGVtLmlzQWN0aXZlXCIgOnNyYz1cIml0ZW0uaWNvblVybC5hY3RpdmVcIiA6YWx0PVwiaXRlbS5kZXNjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgdi1lbHNlIDpzcmM9XCJpdGVtLmljb25Vcmwubm9BY3RpdmVcIiA6YWx0PVwiaXRlbS5kZXNjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImljb25fZGVzXCI+e3tpdGVtLnRpcH19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcml2aWxlZ2VfbmFtZVwiPnt7aXRlbS5kZXNjfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L3N3aXBlci1zbGlkZT5cclxuICAgICAgICAgICAgICAgIDwvc3dpcGVyPlxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWFpblwiPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInBhcnQgbXlfc2NvcmVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYXJ0X3RpdGxlIGNsZWFyZml4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPuadg+ebiuS7i+e7jTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYXJ0X2NvbnRlbnQgc2NvcmVfYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e3twYWdlSW5mby5pbnRyb319PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIHYtaWY9XCJwYWdlSW5mby5saW5rXCIgOmhyZWY9XCJwYWdlSW5mby5saW5rLnVybFwiPnt7cGFnZUluZm8ubGluay50eHR9fTwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwicGFydCBteV9zZXZpY2VcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYXJ0X3RpdGxlIGNsZWFyZml4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPueUqOaIt+acjeWKoTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYXJ0X2NvbnRlbnQgc2V2aWNlX2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPnt7cGFnZUluZm8udGFibGUuZGVzY319PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkIGNsYXNzPVwicm93IG1pZGRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuS8muWRmOetiee6pzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJjb2xcIj57e3BhZ2VJbmZvLnRhYmxlLnRoc1sxXX19PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHYtZm9yPVwiKGl0ZW0sa2V5KSBpbiBwYWdlSW5mby50YWJsZS50ZHNcIiA6a2V5PVwia2V5XCIgY2xhc3M9XCJyb3cgbWlkZGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7a2V5fX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImNvbFwiPnt7aXRlbX19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwicGFydCBteV9yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhcnRfdGl0bGUgY2xlYXJmaXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+5p2D55uK5LuL57uNPC9oMz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhcnRfY29udGVudCByaWdodF9ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBwYWdlSW5mby5ndWlkZVwiIDprZXk9XCJpbmRleFwiPnt7aXRlbX19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cInBhZ2VJbmZvLmNvZGVcIiBjbGFzcz1cImNvZGVfYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cInBhZ2VJbmZvLmNvZGUuY29kZVVybFwiIGFsdD1cIuS6jOe7tOeggVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57e3BhZ2VJbmZvLmNvZGUuZGVzY319PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHYtaWY9XCJwYWdlSW5mby5idG5cIiBjbGFzcz1cImZvb3RlclwiPlxyXG4gICAgICAgICAgICA8YSAgOmhyZWY9XCJwYWdlSW5mby5idG4uYnRuVXJsXCI+e3twYWdlSW5mby5idG4udHh0fX08L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCAnc3dpcGVyL2Rpc3QvY3NzL3N3aXBlci5jc3MnO1xyXG4gICAgaW1wb3J0IHsgc3dpcGVyLCBzd2lwZXJTbGlkZSB9IGZyb20gJ3Z1ZS1hd2Vzb21lLXN3aXBlcic7XHJcbiAgICBpbXBvcnQgYmlydGhJY29uIGZyb20gXCIuLi9jb21tb24vaW1nL3ByaXZpbGVnZV9iaXJ0aC5wbmdcIjtcclxuICAgIGltcG9ydCBjbGFzc0ljb24gZnJvbSBcIi4uL2NvbW1vbi9pbWcvcHJpdmlsZWdlX2NsYXNzLnBuZ1wiO1xyXG4gICAgaW1wb3J0IG1haWxJY29uICBmcm9tIFwiLi4vY29tbW9uL2ltZy9wcml2aWxlZ2VfZnJlZU1haWwucG5nXCI7XHJcbiAgICBpbXBvcnQgZG91YmxlSWNvbiBmcm9tIFwiLi4vY29tbW9uL2ltZy9wcml2aWxlZ2VfZG91YmxlLnBuZ1wiO1xyXG4gICAgaW1wb3J0IHNlcnZpY2VJY29uIGZyb20gXCIuLi9jb21tb24vaW1nL3ByaXZpbGVnZV9zZXJ2aWNlLnBuZ1wiO1xyXG4gICAgaW1wb3J0IGRheUljb24gZnJvbSBcIi4uL2NvbW1vbi9pbWcvcHJpdmlsZWdlX2RheS5wbmdcIjtcclxuICAgIGltcG9ydCBjb25zdWx0SWNvbiBmcm9tIFwiLi4vY29tbW9uL2ltZy9wcml2aWxlZ2VfY29uc3VsdC5wbmdcIjtcclxuICAgIGltcG9ydCBnYmlydGhJY29uIGZyb20gXCIuLi9jb21tb24vaW1nL3ByaXZpbGVnZV9iaXJ0aF9uby5wbmdcIjtcclxuICAgIGltcG9ydCBnY2xhc3NJY29uIGZyb20gXCIuLi9jb21tb24vaW1nL3ByaXZpbGVnZV9jbGFzc19uby5wbmdcIjtcclxuICAgIGltcG9ydCBnbWFpbEljb24gIGZyb20gXCIuLi9jb21tb24vaW1nL3ByaXZpbGVnZV9mcmVlTWFpbF9uby5wbmdcIjtcclxuICAgIGltcG9ydCBnZG91YmxlSWNvbiBmcm9tIFwiLi4vY29tbW9uL2ltZy9wcml2aWxlZ2VfZG91YmxlX25vLnBuZ1wiO1xyXG4gICAgaW1wb3J0IGdzZXJ2aWNlSWNvbiBmcm9tIFwiLi4vY29tbW9uL2ltZy9wcml2aWxlZ2Vfc2VydmljZV9uby5wbmdcIjtcclxuICAgIGltcG9ydCBnZGF5SWNvbiBmcm9tIFwiLi4vY29tbW9uL2ltZy9wcml2aWxlZ2VfZGF5X25vLnBuZ1wiO1xyXG4gICAgaW1wb3J0IGdjb25zdWx0SWNvbiBmcm9tIFwiLi4vY29tbW9uL2ltZy9wcml2aWxlZ2VfY29uc3VsdF9uby5wbmdcIjtcclxuICAgIGltcG9ydCBjb2RlSWNvbiBmcm9tIFwiLi9pbWdzL2NvZGUuanBnXCI7XHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgbmFtZTpcImludHJvXCIsXHJcbiAgICAgICAgZGF0YSgpe1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc3dpcGVyT3B0aW9uczp7XHJcbiAgICAgICAgICAgICAgICAgICAgbm90TmV4dFRpY2s6dHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBhdXRvcGxheTowLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvb3A6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0V3JhcHBlclNpemUgOnRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbiA6ICcucHJpdmlsZWdlX2JveCAuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb25DbGlja2FibGUgOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHByZXZlbnRDbGlja3M6dHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlUGFyZW50czp0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG9uVGFwOnRoaXMuX3RhcE5hdixcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OjQuNSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgICAgICBiaXJ0aGRheTp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludHJvOlwi5Lya5ZGY6LSm5oi35LiL5q+P5Liq6KKr5L+d5Lq655Sf5pel5b2T5aSp6YO95Lya5pS25Yiw5LiA5Lu95p2l6Ieq5bCP6Zuo5Lye55qE5oOK5Zac55Sf5pel56Wd56aP77yM5ZCM5pe26L+Y5Y+v5Lul5Y+C5Yqg5bm46L+Q5oq95aWW77yMMTAwJeS4reWlluOAglwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDpcImphdmFzY3JpcHQ6dm9pZCgwKTtcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR4dDpcIueuoeeQhuaIkeeahOiiq+S/neS6uj5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZTp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjOlwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHM6WyfkvJrlkZjnrYnnuqcnLCfmir3lpZbmrKHmlbAnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRkczp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJWMeS8muWRmFwiOicy5qyhL+avj+S4quiiq+S/neS6uicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJWMuS8muWRmFwiOicy5qyhL+avj+S4quiiq+S/neS6uicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJWM+S8muWRmFwiOicz5qyhL+avj+S4quiiq+S/neS6uicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJWNOS8muWRmFwiOic05qyhL+avj+S4quiiq+S/neS6uidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3VpZGU6W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzHjgIHnlJ/ml6XotLrljaHvvJrnlJ/ml6XlvZPlpKnvvIzlj6/mlLbliLDnlJ/ml6XotLrljaHnpZ3npo/vvIjotLrljaHlsIbku6Xlvq7kv6Ev55+t5L+hL+mCruS7tueahOW9ouW8j+WPkeaUvu+8iScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnMuOAgeW5uOi/kOaKveWllu+8muaUtuWIsOeUn+aXpeelneemj+WQjuaMieeFp+S/oeaBr+aPkOekuueCueWHu+i/m+WFpeaKveWllueOr+iKguWNs+WPr+WPguS4jicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnM+OAgeiZmuaLn+WlluWTgeWPr+eri+WNs+mihuWPluaIluS9v+eUqO+8m+WunueJqeWlluWTgeWujOWWhOaUtuS7tuS/oeaBr+WQjuWwhuWcqDPml6XlhoXlr4Tlh7onXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0bjp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG5Vcmw6XCIvbG90dGVyeS9hY3Rpb24/YWN0SWQ9MjAxNlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHh0Olwi56uL5Y2z5oq95aWWXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgbGVjdHVyZTp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludHJvOlwi5Li65Liw5a+M5Lya5ZGY5a+55L+d6Zmp5Y+K55u45YWz6aKG5Z+f55qE55+l6K+G77yM5bCP6Zuo5Lye54m55Yir57K+6YCJ5LqG57K+566X5biI6K6y5biI5Zui6Zif44CB5aSW6IGY5LqG55CG6LSi44CB6IKy5YS/562J5LiT5a625Li65Lya5ZGY5Li+5Yqe6K6y5bqn44CCXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2M6XCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoczpbJ+S8muWRmOetiee6pycsJ+S4k+WutuiusuW6p+S7t+agvCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGRzOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlYx5Lya5ZGYXCI6J+S7mOi0uScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJWMuS8muWRmFwiOiflhY3otLknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVjPkvJrlkZhcIjon5YWN6LS5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlY05Lya5ZGYXCI6J+WFjei0uSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3VpZGU6W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzHjgIHmr4/mnIjlsIbkuL7lip4xLTLmrKHkvJrlkZjorrLluqfvvIzorrLluqfliY3kvJrmj5DliY3pooTlkYrkuLvpopjlkozlpKfnurLvvIzkvJrlkZjlj6/mj5DliY3pooTnuqYnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzLjgIHorrLluqflvZPlpKkxOTozMC0yMDozMOS4vuWKnuiusuW6p++8jOiusuW6p+S4reS8muacieWSjOS4k+WutuS4gOWvueS4gOayn+mAmueahOacuuS8mu+8jOW5tuS4lOS4jeWumuacn+S8muacieelnuenmOemj+WIqemAgeWHuicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnM+OAgeiusuW6p+e7k+adn+WQju+8jOeUqOaIt+WPr+maj+aXtuWbnumhvuW+gOacn+iusuW6pydcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnRuOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0blVybDpcImh0dHBzOi8vbS5xbGNoYXQuY29tL3dlY2hhdC9wYWdlL2xpdmUvODQwMDAwMTIzMzY1MDEyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eHQ6XCLmn6XnnIvlvoDmnJ/orrLluqdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBmcmVlTWFpbDp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludHJvOlwi6LSt5Lmw5bCP6Zuo5Lye5L+d6Zmp5bmz5Y+w5Lqn5ZOB5ZCO55Sz6K+355CG6LWU6L+H56iL5Lit77yM5aaC6ZyA6YKu5a+E55CG6LWU5p2Q5paZ57uZ5L+d6Zmp5YWs5Y+477yM5bCG5Y+v5Lul6I635b6X6YKu6LS56KGl6LS077yM5q+P5qyhMTXlhYPjgIJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGU6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzYzpcIuaCqOW3suS6q+WPl+eQhui1lOWFjemCruihpei0tOWFseiuoTMw5YWDXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHM6WyfkvJrlkZjnrYnnuqcnLCfpgq7otLnooaXotLTmrKHmlbAnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRkczp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJWMeS8muWRmFwiOicw5qyhJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlYy5Lya5ZGYXCI6JzHmrKHvvIjlhbExNeWFg++8iScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJWM+S8muWRmFwiOicy5qyh77yI5YWxMzDlhYPvvIknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVjTkvJrlkZhcIjonM+asoe+8iOWFsTQ15YWD77yJJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBndWlkZTpbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnMeOAgeWcqOWwj+mbqOS8nuS/nemZqeWFrOS8l+WPt+eUs+ivt+eQhui1lOeahOeUqOaIt++8jOeQhui1lOWujOaIkOWQju+8jOWFjemCruihpei0tOebtOaOpeWPkeaUvuiHs+W+ruS/oembtumSsei0puaItycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnMuOAgeWcqOWwj+mbqOS8nkFQUOeUs+ivt+eQhui1lOeahOeUqOaIt+WPr+iOt+W+l+WQjOetieS7t+WAvOeahOenr+WIhu+8mjE1MOWIhu+8jOWPr+mAmui/h+enr+WIhuWVhuWfjuWFkeaNouekvOWTgSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnRuOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0blVybDpcIi9wcml2aWxlZ2UvaW5kZXgvY2xhaW1saXN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eHQ6XCLmn6XnnIvnrKblkIjmnaHku7bnmoTnkIbotZTljZVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBpbnZpdGU6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRybzpcIuWPguS4juWwj+mbqOS8nuS/nemZqemCgOivt+acieWllua0u+WKqO+8jOaMieeFp+inhOWImeaOqOiNkOWlveWPi+i0reS5sOWwj+mbqOS8nuS/nemZqeW5s+WPsOS6p+WTge+8jOWlveWPi+S/neWNleeUn+aViOWQjuiOt+W+l+ebuOW6lOe6ouWMheWlluWKseOAguS8muWRmOaJgOW+l+e6ouWMheWPr+e/u+WAje+8jOS4jeWQjOetiee6p+S8muWRmOS6q+WPl+S4jeWQjOWAjeaVsOOAglwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZTp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjOlwi562J57qn6LaK6auY77yM6aKd5aSW6I635b6X55qE5aWW5Yqx6LaK5aSaXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHM6WyfkvJrlkZjnrYnnuqcnLCfnv7vlgI3nibnmnYMnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRkczp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJWMeS8muWRmFwiOifml6AnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVjLkvJrlkZhcIjon5pyJJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlYz5Lya5ZGYXCI6J+aciScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJWNOS8muWRmFwiOifmnIknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGd1aWRlOltcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcx44CB5bCP6Zuo5Lye5L+d6Zmp5YWs5LyX5Y+377ye5Liq5Lq65Lit5b+D77ye6YKA6K+35pyJ57qi5YyFJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcy44CB5LiN5a6a5pyf55qE6ZKI5a+55p+Q5ZWG5ZOB55qE6YKA6K+35pyJ5aWW5rS75YqoJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBzZXJ2ZXI6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRybzpcIuS4gOWvueS4gOWSqOivouacjeWKoe+8jOS4lOWPr+WPl+mCgOivt+i/m+WFpVZJUOS8muWRmOe+pO+8jOS6q+WPl+e+pOWGheS4jeWumuacn+emj+WIqeOAglwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZTp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjOlwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHM6WyfkvJrlkZjnrYnnuqcnLCfkuJPlsZ7lrqLmnI0nXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRkczp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJWMeS8muWRmFwiOifml6AnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVjLkvJrlkZhcIjon5pyJJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlYz5Lya5ZGYXCI6J+aciScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJWNOS8muWRmFwiOifmnIknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGd1aWRlOltcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcx44CBVjLlj4rku6XkuIrkvJrlkZjlj6/lvq7kv6Hmt7vliqB4aWFveXVzYW4y77yM5Zue5aSN4oCc5Lya5ZGYK+aKleS/neeUteivneWPt+eggeKAnei/m+ihjOa3u+WKoCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnMuOAgeWuouacjemYs+mYs+WmiOmqjOivgemAmui/h+WQju+8jOmCgOaCqOi/m+WFpVZJUOS8muWRmOe+pO+8jOWmguaciemXrumimOWPr+maj+aXtuWSqOivoumYs+mYs+WmiCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlVXJsOmNvZGVJY29uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzYzpcIumVv+aMieaJq+eggea3u+WKoOmYs+mYs+WmiFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN1bHQ6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRybzpcIuS/nemZqeS4k+WutuS4gOWvueS4gOS4uuaCqOacjeWKoe+8jOS4uuaCqOinhOWIkuWutuW6reaVtOS9k+S/nemZqeaWueahiO+8jOWvueW4gumdouS4iumHjeeCueS6p+WTgei/m+ihjOWvueavlO+8jOWvueW3suacieS/neWNlei/m+ihjOiviuaWreWIhuaekFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZTp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjOlwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHM6WyfkvJrlkZjnrYnnuqcnLCfkuJPlrrbkuIDlr7nkuIAnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRkczp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJWMeS8muWRmFwiOic2OOWFg++8iOmZkOaXtuS8mOaDoO+8iScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJWMuS8muWRmFwiOic2MS425YWD77yIN+aKmO+8iScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJWM+S8muWRmFwiOic1Mi445YWD77yINeaKmO+8iScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJWNOS8muWRmFwiOic0NOWFg++8iDPmipjvvIknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGd1aWRlOltcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcx44CB5Liq5Lq65Lit5b+D77ye5Lya5ZGY54m55p2D77ye5LiT5a625LiA5a+55LiAJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcy44CB5bCP6Zuo5Lye5L+d6Zmp77ye5Y+R546w77ye5L+d6Zmp6Zeu6K+K5pyN5YqhJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidG46e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuVXJsOlwiL3BheS9hY3RQYXk/aWQ9MTAwNCZjaG49dmlwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eHQ6XCLkvY7ku7fpooTnuqbkv53pmanpl67or4rmnI3liqFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBzZWNyZXRHaWZ0OntcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW50cm86XCLkuLrnu5nkuojkvJrlkZjmm7Tlj5HnmoTnpo/liKnvvIzlsI/pm6jkvJ7kv53pmanlsIbmr4/lubTpg73kvJrmnInnpZ7np5jnpLzniannm7TmjqXlr4TpgIHliLDlrrbvvIzmr4/mrKHnpLznianlnYfkuI3lkIzvvIzmg4rllpzmu6Hmu6HvvIFWMuS7peS4iueUqOaIt+WPr+aUtuWIsOiHs+WwkeS4gOW5tOS4gOasoeelnuenmOekvOeJqVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZTp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjOlwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHM6WyfkvJrlkZjnrYnnuqcnLCfnpZ7np5jnpLzniaknXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRkczp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJWMeS8muWRmFwiOifml6AnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVjLkvJrlkZhcIjon5pyJJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlYz5Lya5ZGYXCI6J+aciScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJWNOS8muWRmFwiOifmnIknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGd1aWRlOltcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcx44CB5bCP6Zuo5Lye5L+d6Zmp5YWs5LyX5Y+377ye5Liq5Lq65Lit5b+D77ye54K55Ye75Liq5Lq65aS05YOP77yM5a6M5ZaE5pS26LSn5Zyw5Z2AJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcy44CB6Z2Z6Z2Z562J5b6F5bCP6Zuo5Lye55qE56We56eY56S854mp5a+E6YCB5Yiw5a62J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG5hdkRhdGE6W1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmU6dHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvblVybDp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6YmlydGhJY29uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9BY3RpdmU6Z2JpcnRoSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXA6XCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzYzpcIueUn+aXpeekvOWMhVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uVXJsOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTpjbGFzc0ljb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub0FjdGl2ZTpnY2xhc3NJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpcDpcIuavj+aciDE15pelXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2M6XCLkvJrlkZjorrLluqdcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZTpmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvblVybDp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6bWFpbEljb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub0FjdGl2ZTpnbWFpbEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlwOlwiMTXlhYPkuIDmrKFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzYzpcIueQhui1lOWFjemCrlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uVXJsOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTpkb3VibGVJY29uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9BY3RpdmU6Z2RvdWJsZUljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlwOlwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2M6XCLlpZblirHnv7vlgI1cIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZTpmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvblVybDp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6c2VydmljZUljb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub0FjdGl2ZTpnc2VydmljZUljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlwOlwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2M6XCLkuJPlsZ7lrqLmnI1cIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZTpmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvblVybDp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6Y29uc3VsdEljb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub0FjdGl2ZTpnY29uc3VsdEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlwOlwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2M6XCLkuJPlrrblkqjor6JcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZTpmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvblVybDp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6ZGF5SWNvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vQWN0aXZlOmdkYXlJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpcDpcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjOlwi56We56eY56S854mpXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcGFnZXR5cGVNYXA6WydiaXJ0aGRheScsJ2xlY3R1cmUnLCdmcmVlTWFpbCcsJ2ludml0ZScsJ3NlcnZlcicsJ2NvbnN1bHQnLCdzZWNyZXRHaWZ0J10sXHJcbiAgICAgICAgICAgICAgICBwYWdlVHlwZTpcImJpcnRoZGF5XCIsXHJcbiAgICAgICAgICAgICAgICBwYWdlSW5mbzp7XHJcbiAgICAgICAgICAgICAgICAgICAgaW50cm86XCLkvJrlkZjotKbmiLfkuIvmr4/kuKrooqvkv53kurrnlJ/ml6XlvZPlpKnpg73kvJrmlLbliLDkuIDku73mnaXoh6rlsI/pm6jkvJ7nmoTmg4rllpznlJ/ml6XnpZ3npo/vvIzlkIzml7bov5jlj6/ku6Xlj4LliqDlubjov5Dmir3lpZbvvIwxMDAl5Lit5aWW44CCXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluazp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDpcImphdmFzY3JpcHQ6dm9pZCgwKTtcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHh0Olwi566h55CG5oiR55qE6KKr5L+d5Lq6PlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB0YWJsZTp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2M6XCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhzOlsn5Lya5ZGY562J57qnJywn5oq95aWW5qyh5pWwJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRkczp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlYx5Lya5ZGYXCI6JzLmrKEv5q+P5Liq6KKr5L+d5Lq6JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVjLkvJrlkZhcIjonMuasoS/mr4/kuKrooqvkv53kuronLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJWM+S8muWRmFwiOicz5qyhL+avj+S4quiiq+S/neS6uicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlY05Lya5ZGYXCI6JzTmrKEv5q+P5Liq6KKr5L+d5Lq6J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBndWlkZTpbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICcx44CB55Sf5pel6LS65Y2h77ya55Sf5pel5b2T5aSp77yM5Y+v5pS25Yiw55Sf5pel6LS65Y2h56Wd56aP77yI6LS65Y2h5bCG5Lul5b6u5L+hL+efreS/oS/pgq7ku7bnmoTlvaLlvI/lj5HmlL7vvIknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnMuOAgeW5uOi/kOaKveWllu+8muaUtuWIsOeUn+aXpeelneemj+WQjuaMieeFp+S/oeaBr+aPkOekuueCueWHu+i/m+WFpeaKveWllueOr+iKguWNs+WPr+WPguS4jicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICcz44CB6Jma5ouf5aWW5ZOB5Y+v56uL5Y2z6aKG5Y+W5oiW5L2/55So77yb5a6e54mp5aWW5ZOB5a6M5ZaE5pS25Lu25L+h5oGv5ZCO5bCG5ZyoM+aXpeWGheWvhOWHuidcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ0bjp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0blVybDpcIi9sb3R0ZXJ5L2FjdGlvbj9hY3RJZD0yMDE2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR4dDpcIueri+WNs+aKveWlllwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgICAgICAvLyB0aGlzLnBhZ2VUeXBlID0gJ2JpcnRoZGF5JztcclxuICAgICAgICAgICAgdGhpcy5pbml0UGFnZVR5cGUoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6e1xyXG4gICAgICAgICAgICBpbml0UGFnZVR5cGUoKXtcclxuICAgICAgICAgICAgICAgIGxldCB0eXBlID0gdGhpcy4kcm91dGUucXVlcnkudHlwZTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0eXBlJyx0eXBlKTtcclxuICAgICAgICAgICAgICAgIGlmKHR5cGUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZVR5cGUgPSB0eXBlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBfdGFwTmF2KCl7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLiRyZWZzLm15U3dpcGVyLnN3aXBlci5jbGlja2VkSW5kZXg7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLiRyZWZzLm15U3dpcGVyLnN3aXBlci5jbGlja2VkSW5kZXgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VUeXBlID0gdGhpcy5wYWdldHlwZU1hcFtpbmRleF07XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByZXZlbnRNb3ZlKCBlICl7XHJcbiAgICAgICAgICAgICAgICBlLl9wcmV2ZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2F0Y2g6e1xyXG4gICAgICAgICAgICBwYWdlVHlwZSh2YWx1ZSl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndmFsdWUnLHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5wYWdldHlwZU1hcC5pbmRleE9mKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMubXlTd2lwZXIuc3dpcGVyLnNsaWRlVG8oaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uYXZEYXRhID0gdGhpcy5uYXZEYXRhLmZpbHRlcigoaXRlbSxpKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGkgPT0gaW5kZXgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pc0FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlSW5mbyA9IHRoaXMuZGF0YVt2YWx1ZV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbXBvbmVudHM6e1xyXG4gICAgICAgICAgICBzd2lwZXIsXHJcbiAgICAgICAgICAgIHN3aXBlclNsaWRlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuPHN0eWxlIHNjb3BlZD5cclxuYm9keXtiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO31cclxuLmhlYWRlcnt9XHJcbiAgICAucHJpdmlsZWdlX2JveHt3aWR0aDoxMDAlO292ZXJmbG93OmhpZGRlbjtiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO31cclxuICAgICAgICAucHJpdmlsZWdlX2JveCAucHJpdmlsZWdlX2l0ZW17cG9zaXRpb246cmVsYXRpdmU7dGV4dC1hbGlnbjogY2VudGVyO3BhZGRpbmc6MS42cmVtIDEuMDVyZW0gMnJlbTt9XHJcbiAgICAgICAgICAgIC5wcml2aWxlZ2VfaXRlbS5hY3RpdmU6YWZ0ZXJ7Y29udGVudDpcIlwiO3Bvc2l0aW9uOiBhYnNvbHV0ZTtib3R0b206MDtsZWZ0OjUwJTttYXJnaW4tbGVmdDotMS4zcmVtO2JvcmRlcjoxLjJyZW0gc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLWJvdHRvbS1jb2xvcjogI2YwZjBmMDt9XHJcbiAgICAgICAgICAgIC5wcml2aWxlZ2VfaXRlbS5hY3RpdmUgLnByaXZpbGVnZV9pY29ue2JhY2tncm91bmQtY29sb3I6ICNmZmZhZWU7fVxyXG4gICAgICAgICAgICAgICAgLnByaXZpbGVnZV9pdGVtLmFjdGl2ZSAucHJpdmlsZWdlX2ljb24gLmljb25fZGVze2NvbG9yOiNjZmI5N2Q7fVxyXG4gICAgICAgICAgICAucHJpdmlsZWdlX2l0ZW0uYWN0aXZlIC5wcml2aWxlZ2VfbmFtZXtjb2xvcjojY2ZiOTdkO31cclxuICAgICAgICAgICAgLnByaXZpbGVnZV9pdGVtIC5wcml2aWxlZ2VfaWNvbnt3aWR0aDo1LjVyZW07aGVpZ2h0OiA1LjVyZW07Ym9yZGVyLXJhZGl1czogNTAlO21hcmdpbjowIGF1dG87YmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtmbGV4LXdyYXA6IHdyYXA7LXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7fVxyXG4gICAgICAgICAgICAgICAgLnByaXZpbGVnZV9pdGVtIC5wcml2aWxlZ2VfaWNvbj5kaXZ7fVxyXG4gICAgICAgICAgICAgICAgLnByaXZpbGVnZV9pdGVtIC5wcml2aWxlZ2VfaWNvbiAuaWNvbl9pbWd7d2lkdGg6IDIuOXJlbTtoZWlnaHQ6IDIuN3JlbTttYXJnaW46MCBhdXRvO31cclxuICAgICAgICAgICAgICAgICAgICAucHJpdmlsZWdlX2l0ZW0gLnByaXZpbGVnZV9pY29uIGltZ3ttYXgtd2lkdGg6IDEwMCU7fVxyXG4gICAgICAgICAgICAgICAgLnByaXZpbGVnZV9pdGVtIC5wcml2aWxlZ2VfaWNvbiAuaWNvbl9kZXN7bWFyZ2luLXRvcDowLjE1cmVtO2ZvbnQtc2l6ZTogMC45cmVtO2NvbG9yOiM5OTk5OTk7bGluZS1oZWlnaHQ6IC45cmVtO31cclxuICAgICAgICAgICAgLnByaXZpbGVnZV9pdGVtIC5wcml2aWxlZ2VfbmFtZXttYXJnaW4tdG9wOjAuOXJlbTtmb250LXNpemU6IDEuM3JlbTtjb2xvcjojM2MzYzNjO2xpbmUtaGVpZ2h0OiAxLjVyZW07fVxyXG4ubWFpbntwYWRkaW5nLWJvdHRvbTo4cmVtO2ZvbnQtc2l6ZTogMS40cmVtO2xpbmUtaGVpZ2h0OiAyLjRyZW07fVxyXG4gICAgLnBhcnR7bWFyZ2luLWJvdHRvbTogLjVyZW07fSBcclxuICAgIC5wYXJ0IC5wYXJ0X3RpdGxle3BhZGRpbmc6LjdyZW0gMS4ycmVtIDA7bGluZS1oZWlnaHQ6IDQuNXJlbTt9IFxyXG4gICAgICAgIC5wYXJ0IC5wYXJ0X3RpdGxlIGgze2Zsb2F0OmxlZnQ7Zm9udC1zaXplOiAxLjdyZW07Y29sb3I6IzNjM2MzYztmb250LXdlaWdodDogbm9ybWFsO30gXHJcbiAgICAgICAgLnBhcnQgLnBhcnRfdGl0bGUgYXtmbG9hdDpyaWdodDtmb250LXNpemU6IDEuM3JlbTtjb2xvcjojY2ZiOTdkO30gXHJcbiAgICAucGFydCAucGFydF9jb250ZW50e3BhZGRpbmc6LjlyZW0gMS40cmVtIDEuNXJlbTtib3JkZXItcmFkaXVzOiAuOHJlbTttYXJnaW46MCAxLjJyZW07YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtib3gtc2hhZG93OiAwIC41cmVtIDFyZW0gcmdiYSgxNzksMTc5LDE3OSwuMik7fSBcclxuXHJcbiAgICAubXlfc2NvcmV7fVxyXG4gICAgICAgIC5teV9zY29yZSAuc2NvcmVfYm94e31cclxuICAgICAgICAgICAgLm15X3Njb3JlIC5zY29yZV9ib3ggcHtjb2xvcjojNjY2NjY2O31cclxuICAgICAgICAgICAgLm15X3Njb3JlIC5zY29yZV9ib3ggYXtjb2xvcjojY2ZiOTdkO31cclxuICAgIC5teV9zZXZpY2V7fVxyXG4gICAgICAgIC5teV9zZXZpY2UgLnNldmljZV9ib3h7fVxyXG4gICAgICAgICAgICAubXlfc2V2aWNlIC5zZXZpY2VfYm94IHB7bWFyZ2luOjAuMXJlbSAwIDEuMnJlbTtmb250LXNpemU6IDEuNHJlbTtjb2xvcjojNjY2NjY2O2xpbmUtaGVpZ2h0OiAxLjZyZW07fVxyXG4gICAgICAgICAgICAubXlfc2V2aWNlIC5zZXZpY2VfYm94IGltZ3t3aWR0aDozMi4xNXJlbTttYXgtd2lkdGg6MTAwJTttYXJnaW4tdG9wOiAuOXJlbTt9XHJcbiAgICAgICAgICAgIC5teV9zZXZpY2UgLnNldmljZV9ib3ggdGFibGV7d2lkdGg6MTAwJTtsaW5lLWhlaWdodDozLjA1cmVtO3RleHQtYWxpZ246IGNlbnRlcjt9XHJcbiAgICAgICAgICAgICAgICB0YWJsZSB0aHt3aWR0aDoxMi4xcmVtO2hlaWdodDozLjA1cmVtO21hcmdpbjowLjFyZW0gMC4xcmVtIDAgMDtmb250LXNpemU6MS41cmVtO2NvbG9yOiNmZmY7Zm9udC13ZWlnaHQ6bm9ybWFsO2JhY2tncm91bmQtY29sb3I6ICNjZmI5N2Q7fVxyXG4gICAgICAgICAgICAgICAgdGFibGUgdHJ7Zm9udC1zaXplOiAxLjNyZW07Y29sb3I6Izk5OTk5OTt9XHJcbiAgICAgICAgICAgICAgICAgICAgdGFibGUgdHIgdGR7d2lkdGg6MTIuMXJlbTtoZWlnaHQ6My4wNXJlbTttYXJnaW46MC4xcmVtIDAuMXJlbSAwIDA7YmFja2dyb3VuZC1jb2xvcjogI2ZmZjVkZDt9XHJcbiAgICAgICAgICAgICAgICAgICAgdGFibGUgdHI6bnRoLWNoaWxkKDJuKSB0ZHtiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmMWNlO31cclxuICAgIC5teV9yaWdodHt9XHJcbiAgICAgICAgLm15X3JpZ2h0IC5yaWdodF9ib3h7fVxyXG4gICAgICAgICAgICAubXlfcmlnaHQgLnJpZ2h0X2JveCAuY29kZV9ib3h7bWFyZ2luOiAxLjZyZW0gMCAuM3JlbTt0ZXh0LWFsaWduOiBjZW50ZXI7fVxyXG4gICAgICAgICAgICAgICAgLmNvZGVfYm94IGltZ3t3aWR0aDogMTMuNnJlbTtoZWlnaHQ6MTMuNnJlbTt9XHJcbiAgICAgICAgICAgICAgICAuY29kZV9ib3ggcHttYXJnaW4tdG9wOjEuMnJlbTtmb250LXNpemU6IDEuM3JlbTtjb2xvcjojOTk5OTk5O2xpbmUtaGVpZ2h0OiAxLjhyZW07fVxyXG4uZm9vdGVye3Bvc2l0aW9uOiBmaXhlZDtsZWZ0OjUwJTtib3R0b206MDt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTsgLXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTt3aWR0aDoxMDAlO21heC13aWR0aDogNzUwcHg7bWluLXdpZHRoOiAzMjBweDt9XHJcbiAgICAuZm9vdGVyIGF7ZGlzcGxheTogaW5saW5lLWJsb2NrO3dpZHRoOiAxMDAlO2hlaWdodDogNS41cmVtO2ZvbnQtc2l6ZTogMS42cmVtO2xpbmUtaGVpZ2h0OiA1LjVyZW07dGV4dC1hbGlnbjogY2VudGVyO2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjogI2U0Y2Q5MDt9XHJcbi5tb2RfdGlwcyB7cG9zaXRpb246IGZpeGVkO3RvcDogNTAlO2xlZnQ6IDUwJTt0ZXh0LWFsaWduOiBjZW50ZXI7YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuOCk7ei1pbmRleDogNTAxO3BhZGRpbmc6IDFyZW07dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtib3JkZXItcmFkaXVzOiAzcHg7Y29sb3I6ICNmZmY7ZGlzcGxheTogbm9uZTt9XHJcbi5yb3cuY2VudGVyeyAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyOy13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjthbGlnbi1pdGVtczogY2VudGVyOy13ZWJraXQtYm94LXBhY2s6Y2VudGVyOy13ZWJraXQtZmxleC1wYWNrOmNlbnRlcjsgZmxleC1wYWNrOmNlbnRlcjstd2Via2l0LWp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2p1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjt9XHJcbjwvc3R5bGU+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50L2ludHJvL2ludHJvLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhZGVyXCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwibmF2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicGFydF9jb250ZW50IHByaXZpbGVnZV9ib3hcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInN3aXBlclwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZWY6IFwibXlTd2lwZXJcIixcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3dpcGVyLXdyYXBwZXJcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgb3B0aW9uczogX3ZtLnN3aXBlck9wdGlvbnMgfSxcbiAgICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgICB0b3VjaG1vdmU6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5wcmV2ZW50TW92ZSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX3ZtLl9sKF92bS5uYXZEYXRhLCBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgXCJzd2lwZXItc2xpZGVcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJzd2lwZXItc2xpZGUgcHJpdmlsZWdlX2l0ZW1cIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBpdGVtLmlzQWN0aXZlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInByaXZpbGVnZV9pY29uIHJvdyBtaWRkbGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImljb25faW1nIHJvdyBtaWRkbGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmlzQWN0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBpdGVtLmljb25VcmwuYWN0aXZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IGl0ZW0uZGVzY1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBpdGVtLmljb25Vcmwubm9BY3RpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogaXRlbS5kZXNjXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaWNvbl9kZXNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0udGlwKSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwcml2aWxlZ2VfbmFtZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLmRlc2MpKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1haW5cIiB9LCBbXG4gICAgICBfYyhcInNlY3Rpb25cIiwgeyBzdGF0aWNDbGFzczogXCJwYXJ0IG15X3Njb3JlXCIgfSwgW1xuICAgICAgICBfdm0uX20oMCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicGFydF9jb250ZW50IHNjb3JlX2JveFwiIH0sIFtcbiAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihfdm0uX3MoX3ZtLnBhZ2VJbmZvLmludHJvKSldKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5wYWdlSW5mby5saW5rXG4gICAgICAgICAgICA/IF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IF92bS5wYWdlSW5mby5saW5rLnVybCB9IH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5wYWdlSW5mby5saW5rLnR4dCkpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInNlY3Rpb25cIiwgeyBzdGF0aWNDbGFzczogXCJwYXJ0IG15X3NldmljZVwiIH0sIFtcbiAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBhcnRfY29udGVudCBzZXZpY2VfYm94XCIgfSwgW1xuICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KF92bS5fcyhfdm0ucGFnZUluZm8udGFibGUuZGVzYykpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInRhYmxlXCIsIFtcbiAgICAgICAgICAgIF9jKFwidGhlYWRcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgbWlkZGxlXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCLkvJrlkZjnrYnnuqdcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5wYWdlSW5mby50YWJsZS50aHNbMV0pKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidGJvZHlcIixcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS5wYWdlSW5mby50YWJsZS50ZHMsIGZ1bmN0aW9uKGl0ZW0sIGtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInRyXCIsIHsga2V5OiBrZXksIHN0YXRpY0NsYXNzOiBcInJvdyBtaWRkbGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKGtleSkpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0sIFtfdm0uX3YoX3ZtLl9zKGl0ZW0pKV0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJzZWN0aW9uXCIsIHsgc3RhdGljQ2xhc3M6IFwicGFydCBteV9yaWdodFwiIH0sIFtcbiAgICAgICAgX3ZtLl9tKDIpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicGFydF9jb250ZW50IHJpZ2h0X2JveFwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX3ZtLl9sKF92bS5wYWdlSW5mby5ndWlkZSwgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jKFwicFwiLCB7IGtleTogaW5kZXggfSwgW192bS5fdihfdm0uX3MoaXRlbSkpXSlcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5wYWdlSW5mby5jb2RlXG4gICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2RlX2JveFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBfdm0ucGFnZUluZm8uY29kZS5jb2RlVXJsLCBhbHQ6IFwi5LqM57u056CBXCIgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5wYWdlSW5mby5jb2RlLmRlc2MpKV0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMlxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLnBhZ2VJbmZvLmJ0blxuICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvb3RlclwiIH0sIFtcbiAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBfdm0ucGFnZUluZm8uYnRuLmJ0blVybCB9IH0sIFtcbiAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnBhZ2VJbmZvLmJ0bi50eHQpKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICA6IF92bS5fZSgpXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBhcnRfdGl0bGUgY2xlYXJmaXhcIiB9LCBbXG4gICAgICBfYyhcImgzXCIsIFtfdm0uX3YoXCLmnYPnm4rku4vnu41cIildKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicGFydF90aXRsZSBjbGVhcmZpeFwiIH0sIFtcbiAgICAgIF9jKFwiaDNcIiwgW192bS5fdihcIueUqOaIt+acjeWKoVwiKV0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwYXJ0X3RpdGxlIGNsZWFyZml4XCIgfSwgW1xuICAgICAgX2MoXCJoM1wiLCBbX3ZtLl92KFwi5p2D55uK5LuL57uNXCIpXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbnZhciBlc0V4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5leHBvcnQgZGVmYXVsdCBlc0V4cG9ydHNcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNzZmYWMwODdcIiwgZXNFeHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTMuNy4yQHZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNzZmYWMwODdcIixcImhhc1Njb3BlZFwiOnRydWUsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDEzLjcuMkB2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvY29tcG9uZW50L2ludHJvL2ludHJvLnZ1ZVxuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX2V4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbkAzLjAuMkBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4vZGlzdC9sb2FkZXIuanM/e1xcXCJvbWl0XFxcIjoxLFxcXCJyZW1vdmVcXFwiOnRydWV9IXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj97XFxcImltcG9ydExvYWRlcnNcXFwiOjEsXFxcIm1pbmltaXplXFxcIjpmYWxzZSxcXFwic291cmNlTWFwXFxcIjpmYWxzZX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDEzLjcuMkB2dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzZmYWMwODdcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6ZmFsc2V9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxMy43LjJAdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2ludHJvLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDEzLjcuMkB2dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG5leHBvcnQgKiBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDEzLjcuMkB2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vaW50cm8udnVlXCJcbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDEzLjcuMkB2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vaW50cm8udnVlXCJcbi8qIHRlbXBsYXRlICovXG5pbXBvcnQgX192dWVfdGVtcGxhdGVfXyBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTMuNy4yQHZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzZmYWMwODdcXFwiLFxcXCJoYXNTY29wZWRcXFwiOnRydWUsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDEzLjcuMkB2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9pbnRyby52dWVcIlxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gXCJkYXRhLXYtNzZmYWMwODdcIlxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjXFxcXGNvbXBvbmVudFxcXFxpbnRyb1xcXFxpbnRyby52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNzZmYWMwODdcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03NmZhYzA4N1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnQvaW50cm8vaW50cm8udnVlXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luQDMuMC4yQGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbi9kaXN0L2xvYWRlci5qcz97XCJvbWl0XCI6MSxcInJlbW92ZVwiOnRydWV9IUY6L3hwcm9qZWN0L3dlYi9wcml2aWxlZ2VfdjMvbm9kZV9tb2R1bGVzL192dWUtc3R5bGUtbG9hZGVyQDMuMS4yQHZ1ZS1zdHlsZS1sb2FkZXIhRjoveHByb2plY3Qvd2ViL3ByaXZpbGVnZV92My9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyP3tcImltcG9ydExvYWRlcnNcIjoxLFwibWluaW1pemVcIjpmYWxzZSxcInNvdXJjZU1hcFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxMy43LjJAdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtN2ZkNTg1MGFcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTMuNy4yQHZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvY29tcG9uZW50L2NsYWltTGlzdC9pbmRleC52dWVcbi8vIG1vZHVsZSBpZCA9IGR0SnRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2NvZGUuNWQwMzI5OGY1NTAzZmY0NS5qcGdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnQvaW50cm8vaW1ncy9jb2RlLmpwZ1xuLy8gbW9kdWxlIGlkID0gb0E1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvaW5zdXJlX2ljb24uYjczYWM3N2EzODc4NTE2ZS5qcGdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnQvY2xhaW1MaXN0L2ltZ3MvaW5zdXJlX2ljb24uanBnXG4vLyBtb2R1bGUgaWQgPSBwVnpmXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJsaXN0X2NvbnRhaW5lclwiPlxyXG4gICAgICAgIDx1bCB2LWlmPVwiY2xhaW1MaXN0Lmxlbmd0aCA+IDBcIiBjbGFzcz1cImxpc3RfYm94XCI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3RfaXRlbVwiIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIGNsYWltTGlzdFwiIDprZXk9XCJpbmRleFwiPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiaXRlbV90aXRsZVwiPnt7aXRlbS5wcm9kdWN0X3RpdGxlfX08L2gzPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1fZGV0YWlsIHJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtX21lcyBjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+6KKr5L+d6Zmp5Lq677yaPHNwYW4+e3tpdGVtLmluc3VyYW5jZV9iZW5pZmljaWFyeX19PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+55Sz6K+35pe26Ze077yaPHNwYW4+e3tpdGVtLmdlbl90aW1lfX08L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInN0YXRlXCI+55CG6LWU54q25oCB77yaPHNwYW4+55CG6LWU5bey5a6M5oiQ77yM6YeR6aKd5Li6e3tpdGVtLmNsYWltc19wcmljZS8xMDB9feWFgzwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1faWNvbiByb3cgbWlkZGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9pbWdzL2luc3VyZV9pY29uLmpwZ1wiIGFsdD1cIuS/nemZqWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1fYm90dG9tIHJvdyBjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIml0ZW1fdGlwXCI+MTXlhYPnkIbotZTlhY3pgq7ooaXotLTlt7Llj5HmlL48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1fYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIDpocmVmPVwiJy9jbGFpbXMvaW5kZXgjL2RldGFpbC8nKyBpdGVtLmNsYWltc19pZFwiPuafpeeci+ivpuaDhTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPGRpdiB2LWVsc2U+5pqC5peg55CG6LWU5YWN6YKu6K6w5b2VPC9kaXY+XHJcbiAgICAgICAgPGVyci10aXAgOmVyci1tc2c9XCJlcnJNc2dcIiA6dGlwcy10eXBlPVwidGlwc1R5cGVcIiAgQGhpZGVUaXBzPVwiZXJyTXNnPScnXCI+PC9lcnItdGlwPlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgZXJyVGlwIGZyb20gXCIuLi9jb21tb24vZXJyVGlwcy52dWVcIjtcclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBkYXRhKCl7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBlcnJNc2c6XCJcIixcclxuICAgICAgICAgICAgICAgIHRpcHNUeXBlOjEsXHJcbiAgICAgICAgICAgICAgICBjbGFpbUxpc3Q6W11cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91bnRlZCgpIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0UGFnZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczp7XHJcbiAgICAgICAgICAgIGluaXRQYWdlKCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRmZXRjaChcIi9jbGFpbXMvZ2V0VXNlckZyZWVNYWlsUmVjb3JkXCIpLnRoZW4oZGF0YT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCBkYXRhLnJldCAhPSAwICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGlwc1R5cGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVyck1zZyA9IGRhdGEuZXJybXNnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsYWltTGlzdCA9IGRhdGEuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlPT57XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoICFlICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUgPSBcIuezu+e7n+e5geW/me+8jOivt+eojeWQjumHjeivlVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpcHNUeXBlID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVyck1zZyA9IGUudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcmV2ZW50TW92ZSggZSApe1xyXG4gICAgICAgICAgICAgICAgZS5fcHJldmVudCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbXBvbmVudHM6e1xyXG4gICAgICAgICAgICBlcnJUaXBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG48c3R5bGUgc2NvcGVkPlxyXG5ib2R5e2JhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7fVxyXG4ubGlzdF9jb250YWluZXJ7fVxyXG4gICAgLmxpc3RfYm94e31cclxuICAgICAgICAubGlzdF9ib3ggLmxpc3RfaXRlbXtvdmVyZmxvdzpoaWRkZW47bWFyZ2luLWJvdHRvbTouOXJlbTtiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO31cclxuICAgICAgICAgICAgLmxpc3RfaXRlbSAuaXRlbV90aXRsZXtoZWlnaHQ6NHJlbTttYXJnaW46MCAxLjJyZW07Zm9udC1zaXplOiAxLjZyZW07Y29sb3I6IzMzMzMzMztmb250LXdlaWdodDogbm9ybWFsO2xpbmUtaGVpZ2h0OiA0cmVtO2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNlMmU1ZTc7fVxyXG4gICAgICAgICAgICAubGlzdF9pdGVtIC5pdGVtX2RldGFpbHtwYWRkaW5nOi42NXJlbSAxLjJyZW07fVxyXG4gICAgICAgICAgICAgICAgLmxpc3RfaXRlbSAuaXRlbV9kZXRhaWwgLml0ZW1fbWVze31cclxuICAgICAgICAgICAgICAgICAgICAubGlzdF9pdGVtIC5pdGVtX21lcyBwe2ZvbnQtc2l6ZTogMS40cmVtO2NvbG9yOiM2NjY2NjY7bGluZS1oZWlnaHQ6IDIuNHJlbTt9XHJcbiAgICAgICAgICAgICAgICAgICAgLmxpc3RfaXRlbSAuc3RhdGUgc3Bhbntjb2xvcjojZmU1YjcwO31cclxuICAgICAgICAgICAgICAgIC5saXN0X2l0ZW0gLml0ZW1fZGV0YWlsIC5pdGVtX2ljb257bWluLWhlaWdodDoxMDAlO3dpZHRoOiA4cmVtO31cclxuICAgICAgICAgICAgICAgICAgICAubGlzdF9pdGVtIC5pdGVtX2ljb24gaW1ne21heC13aWR0aDogMTAwJTt9XHJcbiAgICAgICAgICAgIC5saXN0X2l0ZW0gLml0ZW1fYm90dG9te21hcmdpbjogMS4xcmVtIDEuMnJlbSAxLjc1cmVtO31cclxuICAgICAgICAgICAgICAgIC5saXN0X2l0ZW0gLml0ZW1fYm90dG9tIC5pdGVtX3RpcHtkaXNwbGF5OmlubGluZS1ibG9jaztwYWRkaW5nOjAgMXJlbTtmb250LXNpemU6IDEuM3JlbTtjb2xvcjojNjY2NjY2O2xpbmUtaGVpZ2h0OiAyLjZyZW07YmFja2dyb3VuZC1jb2xvcjogI2ZmZWJlZTt9XHJcbiAgICAgICAgICAgICAgICAubGlzdF9pdGVtIC5pdGVtX2JvdHRvbSAuaXRlbV9idG57fVxyXG4gICAgICAgICAgICAgICAgICAgIC5saXN0X2l0ZW0gLml0ZW1fYnRuIGF7ZGlzcGxheTogaW5saW5lLWJsb2NrO3dpZHRoOiA5cmVtO2hlaWdodDogM3JlbTtib3JkZXItcmFkaXVzOiAuNXJlbTtib3JkZXI6MXB4IHNvbGlkICNlMmU1ZTc7Zm9udC1zaXplOiAxLjNyZW07Y29sb3I6IzY2NjY2Njt0ZXh0LWFsaWduOiBjZW50ZXI7bGluZS1oZWlnaHQ6IDNyZW07fVxyXG4ubW9kX3RpcHMge3Bvc2l0aW9uOiBmaXhlZDt0b3A6IDUwJTtsZWZ0OiA1MCU7dGV4dC1hbGlnbjogY2VudGVyO2JhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjgpO3otaW5kZXg6IDUwMTtwYWRkaW5nOiAxcmVtO3RyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7Ym9yZGVyLXJhZGl1czogM3B4O2NvbG9yOiAjZmZmO2Rpc3BsYXk6IG5vbmU7fVxyXG4ucm93LmNlbnRlcnsgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjstd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7YWxpZ24taXRlbXM6IGNlbnRlcjstd2Via2l0LWJveC1wYWNrOmNlbnRlcjstd2Via2l0LWZsZXgtcGFjazpjZW50ZXI7IGZsZXgtcGFjazpjZW50ZXI7LXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47fVxyXG48L3N0eWxlPlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudC9jbGFpbUxpc3QvaW5kZXgudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwibGlzdF9jb250YWluZXJcIiB9LFxuICAgIFtcbiAgICAgIF92bS5jbGFpbUxpc3QubGVuZ3RoID4gMFxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJ1bFwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJsaXN0X2JveFwiIH0sXG4gICAgICAgICAgICBfdm0uX2woX3ZtLmNsYWltTGlzdCwgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jKFwibGlcIiwgeyBrZXk6IGluZGV4LCBzdGF0aWNDbGFzczogXCJsaXN0X2l0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcIml0ZW1fdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0ucHJvZHVjdF90aXRsZSkpXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIml0ZW1fZGV0YWlsIHJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbV9tZXMgY29sXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuiiq+S/nemZqeS6uu+8mlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoaXRlbS5pbnN1cmFuY2VfYmVuaWZpY2lhcnkpKV0pXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIueUs+ivt+aXtumXtO+8mlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoaXRlbS5nZW5fdGltZSkpXSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInN0YXRlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIueQhui1lOeKtuaAge+8mlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIueQhui1lOW3suWujOaIkO+8jOmHkemineS4ulwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoaXRlbS5jbGFpbXNfcHJpY2UgLyAxMDApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIuWFg1wiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fbSgwLCB0cnVlKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpdGVtX2JvdHRvbSByb3cgY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbV90aXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIjE15YWD55CG6LWU5YWN6YKu6KGl6LS05bey5Y+R5pS+XCIpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIml0ZW1fYnRuXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBcIi9jbGFpbXMvaW5kZXgjL2RldGFpbC9cIiArIGl0ZW0uY2xhaW1zX2lkXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5p+l55yL6K+m5oOFXCIpXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgOiBfYyhcImRpdlwiLCBbX3ZtLl92KFwi5pqC5peg55CG6LWU5YWN6YKu6K6w5b2VXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJlcnItdGlwXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgXCJlcnItbXNnXCI6IF92bS5lcnJNc2csIFwidGlwcy10eXBlXCI6IF92bS50aXBzVHlwZSB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGhpZGVUaXBzOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgIF92bS5lcnJNc2cgPSBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIml0ZW1faWNvbiByb3cgbWlkZGxlXCIgfSwgW1xuICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCIuL2ltZ3MvaW5zdXJlX2ljb24uanBnXCIpLCBhbHQ6IFwi5L+d6ZmpaWNvblwiIH1cbiAgICAgIH0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG52YXIgZXNFeHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuZXhwb3J0IGRlZmF1bHQgZXNFeHBvcnRzXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTdmZDU4NTBhXCIsIGVzRXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDEzLjcuMkB2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTdmZDU4NTBhXCIsXCJoYXNTY29wZWRcIjp0cnVlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxMy43LjJAdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2NvbXBvbmVudC9jbGFpbUxpc3QvaW5kZXgudnVlXG4vLyBtb2R1bGUgaWQgPSBudWxsXG4vLyBtb2R1bGUgY2h1bmtzID0gIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luQDMuMC4yQGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbi9kaXN0L2xvYWRlci5qcz97XFxcIm9taXRcXFwiOjEsXFxcInJlbW92ZVxcXCI6dHJ1ZX0hdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3tcXFwiaW1wb3J0TG9hZGVyc1xcXCI6MSxcXFwibWluaW1pemVcXFwiOmZhbHNlLFxcXCJzb3VyY2VNYXBcXFwiOmZhbHNlfSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTMuNy4yQHZ1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03ZmQ1ODUwYVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjpmYWxzZX0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDEzLjcuMkB2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vaW5kZXgudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTMuNy4yQHZ1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTMuNy4yQHZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9pbmRleC52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTMuNy4yQHZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9pbmRleC52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCBfX3Z1ZV90ZW1wbGF0ZV9fIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxMy43LjJAdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi03ZmQ1ODUwYVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTMuNy4yQHZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi03ZmQ1ODUwYVwiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmNcXFxcY29tcG9uZW50XFxcXGNsYWltTGlzdFxcXFxpbmRleC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtN2ZkNTg1MGFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03ZmQ1ODUwYVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnQvY2xhaW1MaXN0L2luZGV4LnZ1ZVxuLy8gbW9kdWxlIGlkID0gbnVsbFxuLy8gbW9kdWxlIGNodW5rcyA9ICJdLCJzb3VyY2VSb290IjoiIn0=