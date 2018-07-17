<template>
    <div>
        <div class="header">
            <nav class="part_content privilege_box">
                <swiper class="swiper-wrapper" :options="swiperOptions" ref="mySwiper" @touchmove.native="preventMove">
                    <swiper-slide v-for="(item,index) in navData" :key="index"  :class="{'swiper-slide privilege_item':true,active:item.isActive}">
                        <div class="privilege_icon row middle">
                            <div>
                                <div class="icon_img row middle">
                                    <img v-if="item.isActive" :src="item.iconUrl.active" :alt="item.desc">
                                    <img v-else :src="item.iconUrl.noActive" :alt="item.desc">
                                </div>
                                <div class="icon_des">{{item.tip}}</div>
                            </div>
                        </div>
                        <div class="privilege_name">{{item.desc}}</div>
                    </swiper-slide>
                </swiper>
            </nav>
        </div>
        <div class="main">
            <section class="part my_score">
                <div class="part_title clearfix">
                    <h3>权益介绍</h3>
                </div>
                <div class="part_content score_box">
                    <p>{{pageInfo.intro}}</p>
                    <a v-if="pageInfo.link" :href="pageInfo.link.url">{{pageInfo.link.txt}}</a>
                </div>
            </section>
            <section class="part my_sevice">
                <div class="part_title clearfix">
                    <h3>用户服务</h3>
                </div>
                <div class="part_content sevice_box">
                    <p>{{pageInfo.table.desc}}</p>
                    <table>
                        <thead class="row middle">
                            <th>会员等级</th>
                            <th class="col">{{pageInfo.table.ths[1]}}</th>
                        </thead>
                        <tbody>
                            <tr v-for="(item,key) in pageInfo.table.tds" :key="key" class="row middle">
                                <td>{{key}}</td>
                                <td class="col">{{item}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <section class="part my_right">
                <div class="part_title clearfix">
                    <h3>权益介绍</h3>
                </div>
                <div class="part_content right_box">
                    <p v-for="(item,index) in pageInfo.guide" :key="index">{{item}}</p>
                    <div v-if="pageInfo.code" class="code_box">
                        <img :src="pageInfo.code.codeUrl" alt="二维码">
                        <p>{{pageInfo.code.desc}}</p>
                    </div>
                </div>
            </section>
        </div>
        <div v-if="pageInfo.btn" class="footer">
            <a  :href="pageInfo.btn.btnUrl">{{pageInfo.btn.txt}}</a>
        </div>
    </div>
</template>
<script>
    import 'swiper/dist/css/swiper.css';
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
    import birthIcon from "../common/img/privilege_birth.png";
    import classIcon from "../common/img/privilege_class.png";
    import mailIcon  from "../common/img/privilege_freeMail.png";
    import doubleIcon from "../common/img/privilege_double.png";
    import serviceIcon from "../common/img/privilege_service.png";
    import dayIcon from "../common/img/privilege_day.png";
    import consultIcon from "../common/img/privilege_consult.png";
    import gbirthIcon from "../common/img/privilege_birth_no.png";
    import gclassIcon from "../common/img/privilege_class_no.png";
    import gmailIcon  from "../common/img/privilege_freeMail_no.png";
    import gdoubleIcon from "../common/img/privilege_double_no.png";
    import gserviceIcon from "../common/img/privilege_service_no.png";
    import gdayIcon from "../common/img/privilege_day_no.png";
    import gconsultIcon from "../common/img/privilege_consult_no.png";
    import codeIcon from "./imgs/code.jpg";
    export default {
        name:"intro",
        data(){
            return {
                swiperOptions:{
                    notNextTick:true,
                    autoplay:0,
                    loop:false,
                    setWrapperSize :true,
                    pagination : '.privilege_box .swiper-pagination',
                    paginationClickable :false,
                    preventClicks:true,
                    observeParents:true,
                    onTap:this._tapNav,
                    slidesPerView:4.5,
                },
                data:{
                    birthday:{
                        intro:"会员账户下每个被保人生日当天都会收到一份来自小雨伞的惊喜生日祝福，同时还可以参加幸运抽奖，100%中奖。",
                        link:{
                            url:"javascript:void(0);",
                            txt:"管理我的被保人>"
                        },
                        table:{
                            desc:"",
                            ths:['会员等级','抽奖次数'],
                            tds:{
                                "V1会员":'2次/每个被保人',
                                "V2会员":'2次/每个被保人',
                                "V3会员":'3次/每个被保人',
                                "V4会员":'4次/每个被保人'
                            }
                        },
                        guide:[
                            '1、生日贺卡：生日当天，可收到生日贺卡祝福（贺卡将以微信/短信/邮件的形式发放）',
                            '2、幸运抽奖：收到生日祝福后按照信息提示点击进入抽奖环节即可参与',
                            '3、虚拟奖品可立即领取或使用；实物奖品完善收件信息后将在3日内寄出'
                        ],
                        btn:{
                            btnUrl:"/lottery/action?actId=2016",
                            txt:"立即抽奖"
                        }
                    },
                    lecture:{
                        intro:"为丰富会员对保险及相关领域的知识，小雨伞特别精选了精算师讲师团队、外聘了理财、育儿等专家为会员举办讲座。",
                        table:{
                            desc:"",
                            ths:['会员等级','专家讲座价格'],
                            tds:{
                                "V1会员":'付费',
                                "V2会员":'免费',
                                "V3会员":'免费',
                                "V4会员":'免费'
                            }
                        },
                        guide:[
                            '1、每月将举办1-2次会员讲座，讲座前会提前预告主题和大纲，会员可提前预约',
                            '2、讲座当天19:30-20:30举办讲座，讲座中会有和专家一对一沟通的机会，并且不定期会有神秘福利送出',
                            '3、讲座结束后，用户可随时回顾往期讲座'
                        ],
                        btn:{
                            btnUrl:"https://m.qlchat.com/wechat/page/live/840000123365012",
                            txt:"查看往期讲座"
                        }
                    },
                    freeMail:{
                        intro:"购买小雨伞保险平台产品后申请理赔过程中，如需邮寄理赔材料给保险公司，将可以获得邮费补贴，每次15元。",
                        table:{
                            desc:"您已享受理赔免邮补贴共计30元",
                            ths:['会员等级','邮费补贴次数'],
                            tds:{
                                "V1会员":'0次',
                                "V2会员":'1次（共15元）',
                                "V3会员":'2次（共30元）',
                                "V4会员":'3次（共45元）'
                            }
                        },
                        guide:[
                            '1、在小雨伞保险公众号申请理赔的用户，理赔完成后，免邮补贴直接发放至微信零钱账户',
                            '2、在小雨伞APP申请理赔的用户可获得同等价值的积分：150分，可通过积分商城兑换礼品'
                        ],
                        btn:{
                            btnUrl:"/privilege/index/claimlist",
                            txt:"查看符合条件的理赔单"
                        }
                    },
                    invite:{
                        intro:"参与小雨伞保险邀请有奖活动，按照规则推荐好友购买小雨伞保险平台产品，好友保单生效后获得相应红包奖励。会员所得红包可翻倍，不同等级会员享受不同倍数。",
                        table:{
                            desc:"等级越高，额外获得的奖励越多",
                            ths:['会员等级','翻倍特权'],
                            tds:{
                                "V1会员":'无',
                                "V2会员":'有',
                                "V3会员":'有',
                                "V4会员":'有'
                            }
                        },
                        guide:[
                            '1、小雨伞保险公众号＞个人中心＞邀请有红包',
                            '2、不定期的针对某商品的邀请有奖活动'
                        ]
                    },
                    server:{
                        intro:"一对一咨询服务，且可受邀请进入VIP会员群，享受群内不定期福利。",
                        table:{
                            desc:"",
                            ths:['会员等级','专属客服'],
                            tds:{
                                "V1会员":'无',
                                "V2会员":'有',
                                "V3会员":'有',
                                "V4会员":'有'
                            }
                        },
                        guide:[
                            '1、V2及以上会员可微信添加xiaoyusan2，回复“会员+投保电话号码”进行添加',
                            '2、客服阳阳妈验证通过后，邀您进入VIP会员群，如有问题可随时咨询阳阳妈'
                        ],
                        code:{
                            codeUrl:codeIcon,
                            desc:"长按扫码添加阳阳妈"
                        }
                    },
                    consult:{
                        intro:"保险专家一对一为您服务，为您规划家庭整体保险方案，对市面上重点产品进行对比，对已有保单进行诊断分析",
                        table:{
                            desc:"",
                            ths:['会员等级','专家一对一'],
                            tds:{
                                "V1会员":'68元（限时优惠）',
                                "V2会员":'61.6元（7折）',
                                "V3会员":'52.8元（5折）',
                                "V4会员":'44元（3折）'
                            }
                        },
                        guide:[
                            '1、个人中心＞会员特权＞专家一对一',
                            '2、小雨伞保险＞发现＞保险问诊服务'
                        ],
                        btn:{
                            btnUrl:"/pay/actPay?id=1004&chn=vip",
                            txt:"低价预约保险问诊服务"
                        }
                    },
                    secretGift:{
                        intro:"为给予会员更发的福利，小雨伞保险将每年都会有神秘礼物直接寄送到家，每次礼物均不同，惊喜满满！V2以上用户可收到至少一年一次神秘礼物",
                        table:{
                            desc:"",
                            ths:['会员等级','神秘礼物'],
                            tds:{
                                "V1会员":'无',
                                "V2会员":'有',
                                "V3会员":'有',
                                "V4会员":'有'
                            }
                        },
                        guide:[
                            '1、小雨伞保险公众号＞个人中心＞点击个人头像，完善收货地址',
                            '2、静静等待小雨伞的神秘礼物寄送到家'
                        ]
                    }
                },
                navData:[
                    {
                        isActive:true,
                        iconUrl:{
                            active:birthIcon,
                            noActive:gbirthIcon
                        },
                        tip:"",
                        desc:"生日礼包"
                    },
                    {
                        isActive:false,
                        iconUrl:{
                            active:classIcon,
                            noActive:gclassIcon
                        },
                        tip:"每月15日",
                        desc:"会员讲座"
                    },
                    {
                        isActive:false,
                        iconUrl:{
                            active:mailIcon,
                            noActive:gmailIcon
                        },
                        tip:"15元一次",
                        desc:"理赔免邮"
                    },
                    {
                        isActive:false,
                        iconUrl:{
                            active:doubleIcon,
                            noActive:gdoubleIcon
                        },
                        tip:"",
                        desc:"奖励翻倍"
                    },
                    {
                        isActive:false,
                        iconUrl:{
                            active:serviceIcon,
                            noActive:gserviceIcon
                        },
                        tip:"",
                        desc:"专属客服"
                    },
                    {
                        isActive:false,
                        iconUrl:{
                            active:consultIcon,
                            noActive:gconsultIcon
                        },
                        tip:"",
                        desc:"专家咨询"
                    },
                    {
                        isActive:false,
                        iconUrl:{
                            active:dayIcon,
                            noActive:gdayIcon
                        },
                        tip:"",
                        desc:"神秘礼物"
                    }
                ],
                pagetypeMap:['birthday','lecture','freeMail','invite','server','consult','secretGift'],
                pageType:"birthday",
                pageInfo:{
                    intro:"会员账户下每个被保人生日当天都会收到一份来自小雨伞的惊喜生日祝福，同时还可以参加幸运抽奖，100%中奖。",
                    link:{
                        url:"javascript:void(0);",
                        txt:"管理我的被保人>"
                    },
                    table:{
                        desc:"",
                        ths:['会员等级','抽奖次数'],
                        tds:{
                            "V1会员":'2次/每个被保人',
                            "V2会员":'2次/每个被保人',
                            "V3会员":'3次/每个被保人',
                            "V4会员":'4次/每个被保人'
                        }
                    },
                    guide:[
                        '1、生日贺卡：生日当天，可收到生日贺卡祝福（贺卡将以微信/短信/邮件的形式发放）',
                        '2、幸运抽奖：收到生日祝福后按照信息提示点击进入抽奖环节即可参与',
                        '3、虚拟奖品可立即领取或使用；实物奖品完善收件信息后将在3日内寄出'
                    ],
                    btn:{
                        btnUrl:"/lottery/action?actId=2016",
                        txt:"立即抽奖"
                    }
                }
            }
        },
        mounted() {
            // this.pageType = 'birthday';
            this.initPageType();
        },
        methods:{
            initPageType(){
                let type = this.$route.query.type;
                console.log('type',type);
                if(type){
                    this.pageType = type;
                }
            },
            _tapNav(){
                let index = this.$refs.mySwiper.swiper.clickedIndex;
                console.log(this.$refs.mySwiper.swiper.clickedIndex)
                this.pageType = this.pagetypeMap[index];
            },
            preventMove( e ){
                e._prevent = true;
            }
        },
        watch:{
            pageType(value){
                console.log('value',value)
                let index = this.pagetypeMap.indexOf(value);
                this.$refs.mySwiper.swiper.slideTo(index);
                this.navData = this.navData.filter((item,i)=>{
                    if(i == index){
                        item.isActive = true;
                    }else{
                        item.isActive = false;
                    }
                    return true;
                });
                this.pageInfo = this.data[value];
            }
        },
        components:{
            swiper,
            swiperSlide
        }
    }
</script>
<style scoped>
body{background-color: #f0f0f0;}
.header{}
    .privilege_box{width:100%;overflow:hidden;background-color: #fff;}
        .privilege_box .privilege_item{position:relative;text-align: center;padding:1.6rem 1.05rem 2rem;}
            .privilege_item.active:after{content:"";position: absolute;bottom:0;left:50%;margin-left:-1.3rem;border:1.2rem solid transparent;border-bottom-color: #f0f0f0;}
            .privilege_item.active .privilege_icon{background-color: #fffaee;}
                .privilege_item.active .privilege_icon .icon_des{color:#cfb97d;}
            .privilege_item.active .privilege_name{color:#cfb97d;}
            .privilege_item .privilege_icon{width:5.5rem;height: 5.5rem;border-radius: 50%;margin:0 auto;background-color: #f0f0f0;flex-wrap: wrap;-webkit-flex-wrap: wrap;}
                .privilege_item .privilege_icon>div{}
                .privilege_item .privilege_icon .icon_img{width: 2.9rem;height: 2.7rem;margin:0 auto;}
                    .privilege_item .privilege_icon img{max-width: 100%;}
                .privilege_item .privilege_icon .icon_des{margin-top:0.15rem;font-size: 0.9rem;color:#999999;line-height: .9rem;}
            .privilege_item .privilege_name{margin-top:0.9rem;font-size: 1.3rem;color:#3c3c3c;line-height: 1.5rem;}
.main{padding-bottom:8rem;font-size: 1.4rem;line-height: 2.4rem;}
    .part{margin-bottom: .5rem;} 
    .part .part_title{padding:.7rem 1.2rem 0;line-height: 4.5rem;} 
        .part .part_title h3{float:left;font-size: 1.7rem;color:#3c3c3c;font-weight: normal;} 
        .part .part_title a{float:right;font-size: 1.3rem;color:#cfb97d;} 
    .part .part_content{padding:.9rem 1.4rem 1.5rem;border-radius: .8rem;margin:0 1.2rem;background-color: #fff;box-shadow: 0 .5rem 1rem rgba(179,179,179,.2);} 

    .my_score{}
        .my_score .score_box{}
            .my_score .score_box p{color:#666666;}
            .my_score .score_box a{color:#cfb97d;}
    .my_sevice{}
        .my_sevice .sevice_box{}
            .my_sevice .sevice_box p{margin:0.1rem 0 1.2rem;font-size: 1.4rem;color:#666666;line-height: 1.6rem;}
            .my_sevice .sevice_box img{width:32.15rem;max-width:100%;margin-top: .9rem;}
            .my_sevice .sevice_box table{width:100%;line-height:3.05rem;text-align: center;}
                table th{width:12.1rem;height:3.05rem;margin:0.1rem 0.1rem 0 0;font-size:1.5rem;color:#fff;font-weight:normal;background-color: #cfb97d;}
                table tr{font-size: 1.3rem;color:#999999;}
                    table tr td{width:12.1rem;height:3.05rem;margin:0.1rem 0.1rem 0 0;background-color: #fff5dd;}
                    table tr:nth-child(2n) td{background-color: #fff1ce;}
    .my_right{}
        .my_right .right_box{}
            .my_right .right_box .code_box{margin: 1.6rem 0 .3rem;text-align: center;}
                .code_box img{width: 13.6rem;height:13.6rem;}
                .code_box p{margin-top:1.2rem;font-size: 1.3rem;color:#999999;line-height: 1.8rem;}
.footer{position: fixed;left:50%;bottom:0;transform:translateX(-50%); -webkit-transform:translateX(-50%);width:100%;max-width: 750px;min-width: 320px;}
    .footer a{display: inline-block;width: 100%;height: 5.5rem;font-size: 1.6rem;line-height: 5.5rem;text-align: center;color:#fff;background-color: #e4cd90;}
.mod_tips {position: fixed;top: 50%;left: 50%;text-align: center;background-color: rgba(0,0,0,.8);z-index: 501;padding: 1rem;transform: translate(-50%,-50%);border-radius: 3px;color: #fff;display: none;}
.row.center{ -webkit-box-align: center;-webkit-align-items: center;align-items: center;-webkit-box-pack:center;-webkit-flex-pack:center; flex-pack:center;-webkit-justify-content:space-between;justify-content: space-between;}
</style>
