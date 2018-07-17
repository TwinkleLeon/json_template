<template>
    <div v-if="layerInfo" class="giftlayer layer" @touchmove="prevent" @click.self="close">
        <div class="layer_box">
            <div v-if="type == 1" class="layer_close" @click.stop="close"></div>
            <h2 class="layer_head">{{layerInfo.title}}</h2>
            <div v-if="type == 1" class="layer_form">
                <div class="form_input">
                    <input v-model="value.mobile" type="text" placeholder="请填写福利领取手机号">
                </div>
            </div>
            <div class="layer_content">
                <p v-for="(item,index) in layerInfo.desc" :key="index" class="layer_desc">{{item}}</p>
            </div>
            <div class="layer_btn">
                <a class="confirm white col" href="javascript:void(0);" @click.stop="confirm">{{layerInfo.btnTxt.confirm}}</a>
                <!-- <a class="cancel col" href="javascript:void(0);">取消</a> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'commonLayer',
    data(){
        return {
            value:{
                mobile:""
            }
        };
    },
    updated(){
        
    },
    methods:{
        prevent(e){
            e._prevent = true;
        },
        close(){
            this.$emit("close");
        },
        confirm(){
            if(this.type == 1){
                this.$emit("confirm",{
                    mobile:this.value.mobile,
                    type:this.type
                });
            }else{
                this.$emit("confirm",{
                    type:this.type
                });
            }
        }
    },
    props:['layerInfo','type']
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .giftlayer{position: fixed;left:0;right:0;top:0;bottom:0;background-color: rgba(0,0,0,.7);z-index: 1000;}
        .layer_box{position: absolute;left:50%;top:50%;transform: translate(-50%,-50%);-webkit-transform: translate(-50%,-50%);width:32.45rem;max-width:86.5%;background-color: #fff;border-radius: 0.8rem;}
            .layer_box .layer_close{position: absolute;right:0;top:-4.25rem;width:2.85rem;height:4.25rem;background: url("./img/layerClose.png") no-repeat center/100% 100%;}
            .layer_box .layer_head{padding:2rem 0 1.15rem;font-size: 1.9rem;color:#333333;line-height: 2.1rem;text-align: center;}
            .layer_box .layer_form{padding:0 1.6rem;}
                .layer_box .layer_form .form_input{margin-bottom: 0.5rem;}
                    .layer_box .layer_form .form_input input{width: 100%;height: 4.5rem;padding-left:1.4rem;border:none;outline:none;border-radius:.5rem;font-size: 1.4rem;line-height: 4.5rem;color:#666666;background-color: #eeeeee;}
            .layer_box .layer_content{padding:0.75rem 1.6rem 1.5rem;}
                .layer_box .layer_desc{line-height: 1.8rem;font-size: 1.3rem;color:#666666;}
            .layer_box .layer_btn{width: 100%;height: 4.8rem;text-align: center;font-size: 1.6rem;line-height: 4.8rem;border-bottom-left-radius:0.8rem;border-bottom-right-radius: 0.8rem;background-color:#e0ca8d; }
                .layer_box .layer_btn a{display: block;}
                .layer_box .layer_btn a.confirm{}
                .white{color:#fff;}
    .inline{display: inline-block;}

</style>
