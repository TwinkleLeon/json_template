<template>
    <div class="part_content privilege_box">
        <swiper class="swiper-wrapper" :options="options" ref="myNav">
            <swiper-slide   v-for="(item,index) in levelPrivileges" :key="index"   :class="{'swiper-slide privilege_item':true,'isHas':item.status}" >
                <div class="privilege_icon row middle">
                    <div>
                        <div class="icon_img row middle">
                            <img v-if="item.status" :src="item.imgs.active" alt="生日祝福">
                            <img v-else :src="item.imgs.noActive"  alt="生日祝福">
                        </div>
                        <div class="icon_des"></div>
                    </div>
                </div>
                <div class="privilege_name">{{item.desc}}</div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import birthIcon from "../../common/img/privilege_birth.png";
import classIcon from "../../common/img/privilege_class.png";
import mailIcon  from "../../common/img/privilege_freeMail.png";
import doubleIcon from "../../common/img/privilege_double.png";
import serviceIcon from "../../common/img/privilege_service.png";
import dayIcon from "../../common/img/privilege_day.png";
import consultIcon from "../../common/img/privilege_consult.png";
import gbirthIcon from "../../common/img/privilege_birth_no.png";
import gclassIcon from "../../common/img/privilege_class_no.png";
import gmailIcon  from "../../common/img/privilege_freeMail_no.png";
import gdoubleIcon from "../../common/img/privilege_double_no.png";
import gserviceIcon from "../../common/img/privilege_service_no.png";
import gdayIcon from "../../common/img/privilege_day_no.png";
import gconsultIcon from "../../common/img/privilege_consult_no.png";
export default {
    name: 'myPrivilege',
    data(){
        return {
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
            }
        };
    },
    created() {
        console.log("privilege create")
    },
    computed:{
        levelPrivileges(){
            let result = [],obj;
            for(let key in g_levelPrivileges){
                obj = {};
                if(key == 'birthday'){
                    obj = g_levelPrivileges[key];
                    obj.desc = "生日祝福";
                    obj.key = key;
                    obj.imgs = {
                        noActive:gbirthIcon,
                        active:birthIcon
                    };
                    result[0] = obj;
                }
                if(key == 'consult'){
                    obj = g_levelPrivileges[key];
                    obj.desc = "专家咨询";
                    obj.key = key;
                    obj.imgs = {
                        noActive:gconsultIcon,
                        active:consultIcon
                    };
                    result[5] = obj;
                }
                if(key == 'freeMail'){
                    obj = g_levelPrivileges[key];
                    obj.desc = "理赔免邮";
                    obj.key = key;
                    obj.imgs = {
                        noActive:gmailIcon,
                        active:mailIcon
                    };
                    result[2] = obj;
                }
                if(key == 'invite'){
                    obj = g_levelPrivileges[key];
                    obj.desc = "奖励翻倍";
                    obj.key = key;
                    obj.imgs = {
                        noActive:gdoubleIcon,
                        active:doubleIcon
                    };
                    result[3] = obj;
                }
                if(key == 'lecture'){
                    obj = g_levelPrivileges[key];
                    obj.desc = "会员讲座";
                    obj.key = key;
                    obj.imgs = {
                        noActive:gclassIcon,
                        active:classIcon
                    };
                    result[1] = obj;
                }
                if(key == 'secretGift'){
                    obj = g_levelPrivileges[key];
                    obj.desc = "神秘礼物";
                    obj.key = key;
                    obj.imgs = {
                        noActive:gdayIcon,
                        active:dayIcon
                    };
                    result[6] = obj;
                }
                if(key == 'server'){
                    obj = g_levelPrivileges[key];
                    obj.desc = "专属客服";
                    obj.key = key;
                    obj.imgs = {
                        noActive:gserviceIcon,
                        active:serviceIcon
                    };
                    result[4] = obj;
                }
            }
            return result;
        }
    },
    methods:{
        _tapNav(){
            console.log(this.$refs.myNav.swiper.clickedIndex)
            let index = this.$refs.myNav.swiper.clickedIndex;
            this.$router.push({path:"/intro",query:{type:this.levelPrivileges[index].key}});
        }
    },
    components:{
        swiper,
        swiperSlide,
    },
    props:[]
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .my_privilege .privilege_box{overflow:hidden;padding:1.5rem 1.05rem;margin-left: 1.2rem;border-top-left-radius: .8rem;border-bottom-left-radius: .8rem;background-color: #fff;box-shadow: 0 .5rem 1rem rgba(179,179,179,.2);}
        .my_privilege .privilege_box .privilege_item{text-align: center;padding:0 1.05rem;}
            .privilege_item.isHas .privilege_icon{background-color: #fffaee;}
            .privilege_item.isHas .privilege_name{color:#cfb97d;}
                .privilege_item .privilege_icon{width:5.5rem;height: 5.5rem;border-radius: 50%;margin:0 auto;background-color:#f0f0f0;flex-wrap: wrap;-webkit-flex-wrap: wrap;}
                    .privilege_item .privilege_icon>div{}
                    .privilege_item .privilege_icon .icon_img{width: 2.9rem;height: 2.7rem;margin:0 auto;}
                        .privilege_item .privilege_icon img{max-width: 100%;max-height: 100%;}
                    .privilege_item .privilege_icon .icon_des{margin-top:0.15rem;font-size: 0.9rem;color:#b3b3b3;line-height: .9rem;}
                .privilege_item .privilege_name{margin-top:0.9rem;font-size: 1.3rem;color:#b3b3b3;line-height: 1.5rem;}
</style>
