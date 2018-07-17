<template>
    <div class="list_container">
        <ul v-if="claimList.length > 0" class="list_box">
            <li class="list_item" v-for="(item,index) in claimList" :key="index">
                <h3 class="item_title">{{item.product_title}}</h3>
                <div class="item_detail row">
                    <div class="item_mes col">
                        <p>被保险人：<span>{{item.insurance_benificiary}}</span></p>
                        <p>申请时间：<span>{{item.gen_time}}</span></p>
                        <p class="state">理赔状态：<span>理赔已完成，金额为{{item.claims_price/100}}元</span></p>
                    </div>
                    <div class="item_icon row middle">
                        <img src="./imgs/insure_icon.jpg" alt="保险icon">
                    </div>
                </div>
                <div class="item_bottom row center">
                    <p class="item_tip">15元理赔免邮补贴已发放</p>
                    <div class="item_btn">
                        <a :href="'/claims/index#/detail/'+ item.claims_id">查看详情</a>
                    </div>
                </div>
            </li>
        </ul>
        <div v-else>暂无理赔免邮记录</div>
        <err-tip :err-msg="errMsg" :tips-type="tipsType"  @hideTips="errMsg=''"></err-tip>
    </div>
</template>
<script>
    import errTip from "../common/errTips.vue";
    export default {
        data(){
            return {
                errMsg:"",
                tipsType:1,
                claimList:[]
            }
        },
        mounted() {
            this.initPage();
        },
        methods:{
            initPage(){
                this.$fetch("/claims/getUserFreeMailRecord").then(data=>{
                    if( data.ret != 0 ){
                        this.tipsType = 1;
                        this.errMsg = data.errmsg;
                    }else{
                        console.log(data)
                        this.claimList = data.data;
                    }
                }).catch(e=>{
                    if( !e ){
                        e = "系统繁忙，请稍后重试";
                    }
                    this.tipsType = 1;
                    this.errMsg = e.toString();
                });
            },
            preventMove( e ){
                e._prevent = true;
            }
        },
        components:{
            errTip
        }
    }
</script>
<style scoped>
body{background-color: #f0f0f0;}
.list_container{}
    .list_box{}
        .list_box .list_item{overflow:hidden;margin-bottom:.9rem;background-color: #fff;}
            .list_item .item_title{height:4rem;margin:0 1.2rem;font-size: 1.6rem;color:#333333;font-weight: normal;line-height: 4rem;border-bottom:1px solid #e2e5e7;}
            .list_item .item_detail{padding:.65rem 1.2rem;}
                .list_item .item_detail .item_mes{}
                    .list_item .item_mes p{font-size: 1.4rem;color:#666666;line-height: 2.4rem;}
                    .list_item .state span{color:#fe5b70;}
                .list_item .item_detail .item_icon{min-height:100%;width: 8rem;}
                    .list_item .item_icon img{max-width: 100%;}
            .list_item .item_bottom{margin: 1.1rem 1.2rem 1.75rem;}
                .list_item .item_bottom .item_tip{display:inline-block;padding:0 1rem;font-size: 1.3rem;color:#666666;line-height: 2.6rem;background-color: #ffebee;}
                .list_item .item_bottom .item_btn{}
                    .list_item .item_btn a{display: inline-block;width: 9rem;height: 3rem;border-radius: .5rem;border:1px solid #e2e5e7;font-size: 1.3rem;color:#666666;text-align: center;line-height: 3rem;}
.mod_tips {position: fixed;top: 50%;left: 50%;text-align: center;background-color: rgba(0,0,0,.8);z-index: 501;padding: 1rem;transform: translate(-50%,-50%);border-radius: 3px;color: #fff;display: none;}
.row.center{ -webkit-box-align: center;-webkit-align-items: center;align-items: center;-webkit-box-pack:center;-webkit-flex-pack:center; flex-pack:center;-webkit-justify-content:space-between;justify-content: space-between;}
</style>
