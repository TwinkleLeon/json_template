<template>
    <div>
        <div v-if="availdPrivilges.length > 0" class="part_content userbleCard_box">
            <swiper class="swiper-wrapper" :options="options">
                <swiper-slide v-if="availdPrivilges.lecture" v-for="(item,index) in availdPrivilges.lecture" :key="index" class="swiper-slide userbleCard_item row middle" data-title="专家讲座">
                    <a :href="item.url">
                        <div>
                            <h3 class="userbleCard_title">《{{item.name}}》</h3>
                            <div class="userbleCard_time">{{item.begTime}}</div>
                        </div>
                    </a>
                </swiper-slide>
                <swiper-slide v-if="availdPrivilges.freeMail" class="swiper-slide userbleCard_item row middle" data-title="理赔免邮" >
                    <router-link to="/claimlist">
                        <div>
                            <h3 class="userbleCard_title big_size">15元免邮补贴 <span class="red">X{{availdPrivilges.freeMail.num}}</span></h3>
                        </div>
                    </router-link>
                </swiper-slide>
                <swiper-slide v-if="availdPrivilges.consult" class="swiper-slide userbleCard_item row" data-title="专家咨询">
                    <a href="/pay/actPay?id=1004&chn=vip">
                        <div>
                            <h3 class="userbleCard_title">保险问诊服务</h3>
                            <div class="userbleCard_time">￥<span class="middle_size red">{{parseInt(68*availdPrivilges.consult.rate)}}</span> <span style="text-decoration: line-through;">￥68</span></div>
                        </div>
                    </a>
                </swiper-slide>
            </swiper>
        </div>
        <div v-else>你没有可用的特权卡</div>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default {
    name: 'myUserbleCard',
    data(){
        return {
            options:{
                notNextTick:true,
                autoplay:0,
                loop:false,
                setWrapperSize :true,
                pagination : '.userbleCard_box .swiper-pagination',
                paginationClickable :false,
                preventClicks:true,
                observeParents:true,
                slidesPerView:1.9
            }
        };
    },
    created() {
        console.log("UserbleCard create")
    },
    updated(){
        
    },
    methods:{
        
    },
    components:{
        swiper,
        swiperSlide,
    },
    props:['availdPrivilges']
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.userbleCard_box{margin-left: 1.2rem;}
            .userbleCard_box .userbleCard_item{position: relative;height:10rem;padding:3rem 1.1rem 1.6rem;border-radius: .8rem;background-color: #fff;box-shadow: 0 .5rem 1rem rgba(179,179,179,.2);margin-right: 1.5rem;overflow: hidden;align-items:center; -webkit-align-items:center;}
                .userbleCard_box .userbleCard_item:before{content:attr(data-title);position: absolute;top:0;left:0;padding:0 1rem;border-bottom-right-radius: .8rem;font-size: 1.3rem;color:#fff;text-align: center;background-color: #e6cf92;line-height: 2rem;}
                .userbleCard_box .userbleCard_item .userbleCard_title{font-size: 1.4rem;font-weight:normal;color:#333333;line-height: 1.9rem;}
                .userbleCard_box .userbleCard_item .userbleCard_title.big_size{font-size: 1.8rem;}
                    .middle_size{font-size: 1.5rem;}
                    .red{color:#ff5a6e;}
                .userbleCard_box .userbleCard_item .userbleCard_time{margin-top: .4rem;font-size: 1.2rem;color:#999999;line-height: 1.4rem;}
</style>
