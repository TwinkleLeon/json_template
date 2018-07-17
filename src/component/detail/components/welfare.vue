<template>
    <section v-if="awardPrivileges.length > 0" class="part my_welfare">
        <div class="part_title clearfix">
            <h3>会员福利</h3>
            <a @click="showRule('ruleTxtForGift')" href="javascript:void(0);">领取规则</a>
        </div>
        <div class="part_content welfare_box row center">
            <div class="welfare_item" v-for="(item,index) in awardPrivileges" :key="index" v-if="index != 'length'">
                <div class="welfare_detail">
                    <h4>{{item.name}}</h4>
                    <p>{{item.level}}</p>
                </div>
                <div class="welfare_btn">
                    <a :class="{unuseable:!btnStatusMap[item.status-1].isUseable}" @click.stop="getGift(item.id,item.status)" href="javascript:void(0);" >{{btnStatusMap[item.status-1].txt}}</a>
                </div>
            </div>
            <show-gift v-if="layerIsShow.showGift" :gift-info="giftInfo" @close="layerClose('showGift')" @confirm="showGiftConfirm"></show-gift>
            <common-layer v-if="layerIsShow.commonLayer" :type="commonLayerType" :layer-info="layerInfo" @close="layerClose('commonLayer')" @confirm="commonLayerConfirm"></common-layer>
            <err-tip :err-msg="errMsg" :tips-type="tipsType"  @hideTips="errMsg=''"></err-tip>
        </div>
    </section>
</template>

<script>
import showGift from "./showGift.vue";
import commonLayer from "../../common/layer.vue";
import errTip from "../../common/errTips.vue";
import {isMobile} from "../../../js/common/global.js";
export default {
    name: 'myWelfare',
    data(){
        return {
            errMsg:"",
            tipsType:1,
            options:{
                notNextTick:true,
                autoplay:0,
                loop:false,
                setWrapperSize :true,
                pagination : '.privilege_box .swiper-pagination',
                paginationClickable :false,
                preventClicks:true,
                observeParents:true,
                onTap: this._tapNav,
                slidesPerView:4.5
            },
            layerIsShow:{
                showGift:false,
                commonLayer:false
            },
            btnStatusMap:[
                    {
                        isUseable:true,
                        txt:"立即领取"
                    },
                    {
                        isUseable:false,
                        txt:"已领取"
                    },
                    {
                        isUseable:false,
                        txt:"立即领取"
                    },
                    {
                        isUseable:false,
                        txt:"立即领取"
                    }
                ],
            giftInfo:{
                imgSrc:"https://sslstatic.xiaoyusan.com/xchitem/item_1514535272.jpg",
                name:"爱奇艺单月会员",
                level:"V2-V4",
                price:"111980"
            },
            awardPrivileges:[],
            commonLayerType:1,
            layerInfo:"",
            prizeId:""
        };
    },
    created() {
        console.log("myWelfare create")
    },
    mounted(){
        if(Object.prototype.toString.call(g_awardPrivileges) == "[object Object]"){
            g_awardPrivileges.length = 1;
            this.awardPrivileges = this.initAwardPrivileges(g_awardPrivileges);
        }
    },
    methods:{
        initAwardPrivileges(data){
            for(let key in data){
                for(let k in data[key]){
                    if(k == 'useMethod' && typeof data[key][k] == "string"){
                        data[key][k] = data[key][k].split("。");
                    }
                    if(k == 'level' && data[key][k].indexOf("会员") == -1){
                        data[key][k] = this.getMinLevel(data[key][k]);
                    }
                }
            }
            return data;
        },
        getGift(prizeId,status){
            //status
            //1-可领取，2-领取了本福利，3-领取了其他福利，4-非该等级可领取的福利
            console.log(status)
            console.log(prizeId)
            switch(status)
            {
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
        commonLayerConfirm(options){
            if(options.type == 1){
                this.fillInMes(options.mobile);
            }else if(options.type == 2){
                this.layerClose('commonLayer');
            }
        },
        fillInMes(mobile){
            console.log('fillInMes is confirm')
            console.log('moblie',mobile)
            console.log('prizeId',this.prizeId)
            if(!isMobile(mobile)){
                this.errMsg = "请输入正确的手机号码";
                return;
            }
            this.$fetch("/privilege/addAward",{id:this.prizeId,mobile:mobile,level:g_level}).then(data=>{
                if( data.ret != 0 ){
                    this.tipsType = 1;
                    this.errMsg = data.errmsg;
                }else{
                    console.log(data)
                    this.awardPrivileges = this.initAwardPrivileges(data.data);
                    if(Object.prototype.toString.call(data.data) == "[object Object]"){
                        this.awardPrivileges.length = 1;
                    }
                    this.errMsg = "会员福利礼品将于每月30日通过手机短信发放，请注意查收。您可以在个人中心-我的奖品查看奖品发放进展。";
                    this.layerIsShow.commonLayer = false;
                }
            }).catch(e=>{
                if( !e ){
                    e = "系统繁忙，请稍后重试";
                }
                this.tipsType = 1;
                this.errMsg = e.toString();
            });
        },
        getMinLevel(levelStr){
            let levelArr = levelStr.split(",").sort((a,b)=>(a-b)),length = levelArr.length,dValue = 5 - levelArr[0];
            if(length  ==  dValue){
                return 'V' + levelArr[0] + '及以上会员';
            }else if(length  <  dValue){
                let str = '';
                levelArr.map((item,index)=>{
                    if(index < length-1){
                        str += 'V' + item + '、'
                    }else{
                        str += 'V' + item;
                    }
                })
                return str + '会员';
            }
        },
        showGiftConfirm(){
            console.log('showGiftConfirm is confirm')
            this.showCommonLayer({
                    type:1,
                    txt:this.layerTxt.fillInTxt
                });
            this.layerIsShow.showGift = false;
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
    },
    components:{
        showGift,
        commonLayer,
        errTip
    },
    props:['layerTxt']
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.welfare_box{margin:0 1.2rem;flex-wrap: wrap;-webkit-flex-wrap:wrap;}
    .welfare_box .welfare_item{width:16.8rem;max-width:49%;border-radius: .8rem;margin:1.5rem 0 0 0;background-color: #fff;box-shadow: 0 .5rem 1rem rgba(179,179,179,.2);text-align: center;}
    .welfare_item:first-child,.welfare_item:first-child + .welfare_item{margin-top: 0;}
    .welfare_item .welfare_detail{position:relative;padding:.8rem 0 .75rem;border-bottom:1px dashed #e2e5e7;}
        .welfare_detail:before{content:"";position: absolute;left:-.6rem;bottom:-.6rem;width: 1.2rem;height:1.2rem;border-radius: 50%;background-color: #f0f0f0;}
        .welfare_detail:after{content:"";position: absolute;right:-.6rem;bottom:-.6rem;width: 1.2rem;height:1.2rem;border-radius: 50%;background-color: #f0f0f0;}
            .welfare_item .welfare_detail h4{position:relative;padding:.45rem 0;font-size: 1.6rem;font-weight:normal;color:#333333;line-height: 2.1rem;}
                .welfare_item .welfare_detail h4:after{content:"";position: absolute;bottom:0;left:50%;width:2.35rem;height:.1rem;margin-left:-1.175rem;background-color: #e6cf92;}
            .welfare_item .welfare_detail p{font-size: 1.2rem;color:#cfb97d;line-height: 1.8rem;margin:.3rem 0;}
        .welfare_item .welfare_btn{padding:.8rem 0;}
            .welfare_btn a{display: inline-block;width: 9rem;height:2.5rem;border-radius: 1.25rem;font-size: 1.3rem;line-height:2.5rem;color:#fff;background:linear-gradient(to right top,#e6cf92,#cfb97d);background:-webkit-linear-gradient(to right top,#e6cf92,#cfb97d);box-shadow: 0 .3rem .6rem rgba(209,187,127,.4);text-align: center; }
            .welfare_btn a.unuseable{background:linear-gradient(to right top,#afafaf,#cdcdcd);background:-webkit-linear-gradient(to right top,#afafaf,#cdcdcd);box-shadow: 0 .3rem .6rem rgba(169,169,169,.4);}
</style>
