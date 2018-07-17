<template>
   <div class="part_content score_box">
        <div class="process_box row middle">
            <div :class="{'small_ball row middle':true,disabled:level < 1}" data-content="v1"></div>
            <div :class="{'process_bar':true, full:level > 1,half:level == 1}"></div>
            <div :class="{ball_box:true, disabled:level <= 1}">
                <div class="big_ball row middle">
                    <div>
                        <p class="need_score">100</p>
                        <div>积分</div>
                    </div>
                </div>
                <div class="small_ball row middle" data-content="v2"></div>
            </div>
            <div :class="{'process_bar':true, full:level > 2,half:level == 2}"></div>
            <div :class="{ball_box:true, disabled:level <= 2}">
                <div class="big_ball row middle">
                    <div>
                        <p class="need_score">500</p>
                        <div>积分</div>
                    </div>
                </div>
                <div class="small_ball row middle" data-content="v3"></div>
            </div>
            <div :class="{'process_bar':true, full:level > 3,half:level == 3}"></div>
            <div :class="{ball_box:true, disabled:level <= 3}">
                <div class="big_ball row middle">
                    <div>
                        <p class="need_score">1000</p>
                        <div>积分</div>
                    </div>
                </div>
                <div class="small_ball row middle" data-content="v4"></div>
            </div>
        </div>
        <p>{{vipTips}}<a @click.stop="showRule('ruleTxtForScore')" href="javascript:void(0);">详细规则 ></a></p>
        <a href="/proposal/result?id=4401&chn=vip">更多查看我的专属保障方案<i class="arrowRight arrow"></i></a>
        <common-layer v-if="layerIsShow.commonLayer" :type="commonLayerType" :layer-info="layerInfo" @close="layerClose('commonLayer')" @confirm="layerClose('commonLayer')"></common-layer>

    </div>
</template>

<script>
import commonLayer from "../../common/layer.vue";
export default {
    name: 'myScore',
    data(){
        return {
            commonLayerType:1,
            layerInfo:"",
            level:g_level,
            layerIsShow:{
                commonLayer:false
            }
        };
    },
    created() {
        console.log("myScore create")
    },
    mounted(){
       
    },
    methods:{
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
        commonLayer
    },
    props:['layerTxt','vipTips']
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.score_box{margin:0 1.2rem;border-radius: 0.8rem;background-color: #fff;overflow: hidden;}
    .process_box{padding:3rem 0;}
        .ball_box.disabled .small_ball:before,.ball_box.disabled .big_ball{background-color: #cecece;}
        .score_box .small_ball{position:relative;width: 2.2rem;height:2.2rem;border-radius: 50%;line-height:2.2rem;text-align:center;background-color: #fff;}
            .small_ball:before{display:inline-block;content:"";width: 1.9rem;height:1.9rem;border-radius: 50%;background-color: #e6cf92;vertical-align: middle;}
            .small_ball.disabled:before{background-color: #cecece;}
            .small_ball:after{position: absolute;content:attr(data-content);color:#fff;font-size: 1.05rem;font-style: oblique;}
            .ball_box{position: relative;display: inline-block;}
                .ball_box .small_ball{position: absolute;right: -.75rem;bottom:-.75rem;}
        .score_box .big_ball{width: 5.5rem;height:5.5rem;border-radius: 50%;background-color: #e2cb8e;font-size: 1.1rem;line-height:1.1rem;color:#fff;text-align: center;}
            .score_box .big_ball .need_score{font-size: 2.2rem;font-weight:bold;line-height: 2.2rem;}
        .score_box .process_bar{position: relative;display: inline-block;height:.3rem;width: 4rem;background-color: #b3b3b3;}
            .process_bar:before{position: absolute;content:"";height:100%;background-color: #cfb97d;}
            .process_bar.full:before{width:100%;}
            .process_bar.half:before{width:50%;}
        .score_box>p{font-size: 1.3rem;color:#969696;line-height: 1.3rem;text-align: center;}
            .score_box>p a{margin-left:1rem;color:#f93f56;}
        .score_box>a{display: inline-block;width: 100%;height:5rem;margin-top: 2.8rem;font-size: 1.6rem;color:#666666;line-height: 5rem;text-align: center;background-color: #f9f9f9;}
        .arrow.arrowRight{-webkit-transform: rotate(45deg);transform: rotate(45deg);margin-left: .3rem;margin-bottom:.1rem;}
        .arrow.arrowRight{border-color:#999999;border-right-color:#999999;}
</style>
