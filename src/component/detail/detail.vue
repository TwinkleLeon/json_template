<template>
    <div>
        <div class="header">
            <div class="user_icon">
                <img :src="headerInfo.headurl" alt="用户头像">
                <div class="user_lv">
                    <span class="txt_1st">v</span>
                    <span class="txt_2rd">{{headerInfo.level}}</span>
                    <span class="txt_3rd">会</span>
                    <span class="txt_4th">员</span>
                </div>
            </div>
            <div class="user_info">
                <span class="user_name">{{headerInfo.name}}</span> <span class="score">成长值：{{headerInfo.exp}}</span>
            </div>
            <div class="score_detail">
                <span class="d_value" v-if="headerInfo.level < 4">距V{{headerInfo.level+1}}还差{{getExpToNextLevel()}}</span><a href="/privilege/growth_detail.html">如何增加成长值 ＞</a>
            </div>
        </div>
        <div class="main">
            <!-- 我的专属特权 s-->
            <section class="part my_privilege">
                <div class="part_title clearfix">
                    <h3>我的专属特权</h3>
                    <router-link to="/intro?type=birthday">全部特权 ></router-link>
                </div>
                <my-privilege></my-privilege>
            </section>
            <!-- 我的专属特权 e-->

            <!-- 我的可用特权卡 s-->
            <section class="part my_userbleCard">
                <div class="part_title clearfix">
                    <h3>我的可用特权卡</h3>
                </div>
                <my-userbleCard :availd-privilges="availdPrivilges"></my-userbleCard>
            </section>
            <!-- 我的可用特权卡 e-->

            <!-- 广告位 s-->
            <section class="part my_banner" v-if="ads.length > 0">
                <swiper class="swiper-wrapper" :options="swiperOptions.myBanner" ref="mySwiper" @touchmove.native="preventMove">
                    <swiper-slide v-for="(item,index) in ads" :key="index" class="swiper-slide banner_item row middle">
                        <a :href="item.url">
                            <img :src="item.picSrc" :alt="item.desc">
                        </a>
                    </swiper-slide>
                    <div v-if="ads.length > 1" class="swiper-pagination pagination_style" slot="pagination"></div>
                </swiper>
            </section>
            <!-- 广告位 e-->

            <!-- 会员福利 s-->
            <my-welfare :layer-txt="layerTxt"></my-welfare>
            <!-- 会员福利 e-->

            <!-- 晋升得积分 积分兑好礼 s-->
            <section class="part my_score">
                <div class="part_title clearfix">
                    <h3>晋升得积分 积分兑好礼</h3>
                    <a href="/score#/index?chn=vip">去积分商城 ></a>
                </div>
                <my-score :vip-tips="vipTips" :layer-txt="layerTxt"></my-score>
            </section>
            <!-- 晋升得积分 积分兑好礼 e-->
        </div>
        <div class="footer"></div>
        <common-layer v-if="layerIsShow.commonLayer" :type="commonLayerType" :layer-info="layerInfo" @close="layerClose('commonLayer')" @confirm="commonLayertConfirm"></common-layer>
        <promote-layer v-if="layerIsShow.promoteLayer" @show-layer="layerIsShow.promoteLayer = true" @close="layerClose('promoteLayer')"  @returnVipTips="returnVipTips"></promote-layer>
        <!-- 如果promote-layer（在show-gift下面的子组件）一开始默认展示,会导致show-gift开始解析template,并且此时拿不到传过去的giftInfo 暂时的解决方案：判断giftInfo是否存在 -->
        <err-tip :err-msg="errMsg" :tips-type="tipsType"  @hideTips="errMsg=''"></err-tip>
    </div>
</template>
<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
    import showGift from "./components/showGift.vue";
    import promoteLayer from "./components/promoteLayer.vue";
    import myPrivilege from "./components/privilege.vue";
    import myUserbleCard from "./components/userbleCard.vue";
    import myWelfare from "./components/welfare.vue";
    import myScore from "./components/score.vue";
    import commonLayer from "../common/layer.vue";
    import errTip from "../common/errTips.vue";
    export default {
        name:"detail",
        data(){
            return {
                errMsg:"",
                tipsType:1,
                swiperOptions:{
                    myBanner:{
                        notNextTick:true,
                        autoplay:0,
                        loop:false,
                        setWrapperSize :true,
                        pagination : '.my_banner .swiper-pagination',
                        paginationClickable :false,
                        preventClicks:true,
                        observeParents:true,
                        onTap: this._tapSwiper
                    }
                },
                headerInfo:{
                     name:g_nickname,
                  headurl:g_headurl,
                    level:g_level,
                      exp:g_exp
                },
                layerIsShow:{
                    commonLayer:false,
                    promoteLayer:true
                },
                layerInfo:{},
                layerTxt:{
                    fillInTxt:{
                        title:"填写信息",
                        desc:['1.会员可按照会员等级相应档位的礼品，每月仅可领取一份','2.会员福利礼品将于每月30日发放，未领取的用户不予发放'],
                        btnTxt:{
                            confirm:'立即领取'
                        }
                    },
                    ruleTxtForGift:{
                        title:"领取规则",
                        desc:['1.会员可按照会员等级相应档位的礼品，每月仅可领取一份，如当月未领取则资格作废','2.所有礼品均需通过登记会员手机号码，通过短信的形式发放','3.会员福利礼品将于每月30日发放，未领取的用户不予发放'],
                        btnTxt:{
                            confirm:'知道了'
                        }
                    },
                    ruleTxtForScore:{
                        title:"详细规则",
                        desc:['30日内完成等级晋升，你将获得以下礼品，礼品将于5个工作日后以短信方式发送。','V1→V2 ：价值10元积分','V2→V3 ：价值50元积分','V3→V4 ：价值100元积分','规则说明：','1.规则生效时间为2017年6月1日。在此之前的等级初始计算时间为6月1日。','2.如果在30日内晋升多级，可以获得多份礼品。'],
                        btnTxt:{
                            confirm:'知道了'
                        }
                    },
                },
                commonLayerType:1,
                vipTips:""
            }
        },
        computed:{
            availdPrivilges(){
                if(Object.prototype.toString.call(g_availdPrivilges) == "[object Object]"){
                    g_availdPrivilges.length = 1;
                }
                return g_availdPrivilges;
            },
            ads(){
                return g_ad;
            }
        },
        mounted() {
            
        },
        methods:{
            getExpToNextLevel(){
                if(g_level == 1){
                    return 10000-g_exp;
                }
                if(g_level == 2){
                    return 50000-g_exp;
                }
                if(g_level == 3){
                    return	150000-g_exp;
                }
            },
            returnVipTips(txt){
                this.vipTips = txt;
            },
            commonLayertConfirm(mobile){
                if(this.commonLayerType == 1){
                    this.fillInMes(mobile);
                }else if(this.commonLayerType == 2){
                    this.layerIsShow.commonLayer = false;
                }
            },
            showRule(key){
                this.showCommonLayer({
                    type:2,
                    txt:this.layerTxt[key]
                });
            },
            showCommonLayer(options){
                options = options || {};
                if(!options.txt){
                    return;
                }
                this.commonLayerType = options.type;
                this.layerInfo = options.txt;
                this.layerIsShow.commonLayer = true;
            },
            layerClose(layer){
                console.log(layer)
                this.layerIsShow[layer] = false;
            },
            preventMove( e ){
                e._prevent = true;
            }
        },
        components:{
            swiperSlide,
            swiper,
            commonLayer,
            errTip,
            promoteLayer,
            myPrivilege,
            myUserbleCard,
            myWelfare,
            myScore
        }
    }
</script>
<style scoped>
body{background-color: #f0f0f0;}
    .header{width:100%;padding:1.4rem 0 2.15rem;background:url("./imgs/header_bottom.jpg") no-repeat bottom center/100% .5rem, #242830;text-align: center;}
        .user_icon{position:relative;width:14rem;height:5.9rem;margin:0 auto;background: url("./imgs/header_bg.jpg") no-repeat center/100% 100%;overflow: hidden;}
            .user_icon img{width:5.9rem;height:5.9rem;border-radius: 50%;}
            .user_icon .user_lv{position: absolute;top:3.5rem;left:50%;margin-left:-4.05rem;box-sizing:content-box;width: 4.5rem;height:3rem;border:1.8rem solid transparent;border-radius: 9999999%;border-top-color: #cfb97d;font-size: 1.1rem;color:#fff;}
                .user_icon .user_lv .txt_1st{position: absolute;top:-1.7rem;left:0.2rem;transform: rotate(-22deg);font-size: 1.4rem;}
                .user_icon .user_lv .txt_2rd{position: absolute;top:-1.6rem;left:1rem;transform: rotate(-11deg);}
                .user_icon .user_lv .txt_3rd{position: absolute;top:-1.7rem;left:1.7rem;transform: rotate(3deg);}
                .user_icon .user_lv .txt_4th{position: absolute;top:-1.5rem;left:3rem;transform: rotate(17deg);}
        .user_info{margin-top: 1.1rem;font-size: 1.4rem;color:#cfb97d;line-height: 2.2rem;}
            .user_info .user_name,.user_info .score{vertical-align: middle;}
        .score_detail{font-size: 1.2rem;line-height: 2.1rem;color:#fff;}
            .score_detail .d_value{}
            .score_detail a{margin-left:1.35rem;color:#fff;}
    .main{}
       
           .part .part_content{} 
        
        .my_banner{position:relative;height:10rem;border-radius: .8rem;margin:2.7rem 1.2rem .5rem;background-color: #e6cf92;}
            .banner_item{width: 100%;height: 100%;}
                .banner_item a,.banner_item img{max-width: 100%;height: 100%;}
            .my_banner .swiper-pagination{bottom:0;}
    .footer{width: 100%;height: 21.4rem;margin-top:4.5rem;background: url("./imgs/footer.jpg") no-repeat center/100% 100%;}
.arrow{display:inline-block;box-sizing:border-box;width:.8rem;height:.8rem;border-top:.1rem solid transparent;border-right:.1rem solid transparent;}
.arrow.arrowUp{-webkit-transform: rotate(-45deg);transform: rotate(-45deg);margin-left: .6rem;}
.arrow.arrowDown{-webkit-transform: rotate(135deg);transform: rotate(135deg);margin-left:.6rem;margin-bottom:.3rem;}
.arrow.arrowRight{-webkit-transform: rotate(45deg);transform: rotate(45deg);margin-left: .3rem;margin-bottom:.1rem;}
.arrow.arrowRight{border-color:#999999;border-right-color:#999999;}
</style>
