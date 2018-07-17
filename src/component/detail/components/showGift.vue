<template>
    <div v-if="giftInfo" class="giftlayer layer" @touchmove="prevent" @click.self="close">
        <div class="layer_box">
            <div class="layer_close" @click.stop="close"></div>
            <div class="layer_banner row middle">
                <img :src="giftInfo.imgSrc" alt="">
            </div>
            <div class="layer_value">价值：{{parseInt(giftInfo.price)/100}}元</div>
            <div class="layer_detail">
                <h3 class="detail_title">{{giftInfo.name}}</h3>
                <div class="detail_desc">
                    <div class="desc_title inline">适用等级：</div>
                    <div class="desc_content inline">{{giftInfo.level}}</div>
                </div>
                <div class="detail_desc">
                    <div class="desc_title">使用方法：</div>
                    <div v-for="(item,index) in giftInfo.useMethod" :key="index" class="desc_content">{{item}}</div>
                </div>
            </div>
            <div class="layer_btn">
                <a @click.stop="confirm" class="confirm white col" href="javascript:void(0);">立即领取</a>
                <!-- <a class="cancel col" href="javascript:void(0);">取消</a> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'showGift',
    data(){
        return {
            
        };
    },
    created() {
        console.log("show create")
    },
    updated(){
        
    },
    methods:{
        parseInt(str){
            return parseInt(str);
        },
        prevent(e){
            e._prevent = true;
        },
        close(){
            this.$emit("close");
        },
        confirm(){
            this.$emit("confirm");
        }
    },
    props:['giftInfo']
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .giftlayer{position: fixed;left:0;right:0;top:0;bottom:0;background-color: rgba(0,0,0,.7);z-index: 1000;}
        .layer_box{position: absolute;left:50%;top:50%;transform: translate(-50%,-50%);-webkit-transform: translate(-50%,-50%);width:32.45rem;max-width:86.5%;}
            .layer_box .layer_close{position: absolute;right:0;top:-4.25rem;width:2.85rem;height:4.25rem;background: url("./imgs/layerClose.png") no-repeat center/100% 100%;}
            .layer_box .layer_banner{width: 100%;height: 16.5rem;border-top-left-radius:0.8rem;border-top-right-radius: 0.8rem;background-color: #f0f0f0;}
                .layer_box .layer_banner img{max-width: 100%;max-height:100%;}
            .layer_box .layer_value{box-sizing:border-box;position: absolute;right:0;top:12.55rem;padding:0 1rem 0 1.5rem;height:3rem;border-bottom-left-radius:1.5rem;border-top-left-radius: 1.5rem;background-color: #f0f0f0;line-height: 3rem;font-size: 1.3rem;color:#fff;background-color: #ff5a6e;}
            .layer_box .layer_detail{width: 100%;padding:.9rem 0 0.95rem 1.7rem;background-color: #fff;overflow: hidden;}
                .layer_box .layer_detail .detail_title{margin:0.7rem 0 1.2rem;font-size: 1.9rem;color:#333333;line-height: 2.1rem;font-weight: normal;}
                .layer_box .layer_detail .detail_desc{margin:1rem 0;font-size: 1.3rem;line-height: 1.5rem;}
                    .layer_box .layer_detail .detail_desc .desc_title{color:#333333;}
                    .layer_box .layer_detail .detail_desc .desc_content{line-height: 1.65rem;color:#666666;}
            .layer_box .layer_btn{width: 100%;height: 4.8rem;text-align: center;font-size: 1.6rem;line-height: 4.8rem;border-bottom-left-radius:0.8rem;border-bottom-right-radius: 0.8rem;background-color:#e0ca8d; }
                .layer_box .layer_btn a{display: block;}
                .layer_box .layer_btn a.confirm{}
                .white{color:#fff;}
    .inline{display: inline-block;}

</style>
