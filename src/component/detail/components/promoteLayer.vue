<template>
    <div v-if="isShow" class="layer" id="layer" @touchmove="prevent" @click.self="close">
        <div class="layer_box viptip">
            <a @click="close" href="javascript:void(0);" class="layer_close">
                <img :src="closeIcon" alt="">
            </a>
            <div class="dialog_img">
                <img :src="pageInfo.headIcon" alt="">
            </div>
            <div class="dialog_tit">
                <div class="tit">{{pageInfo.title}}</div>
                <div class="dialog_subtit">{{pageInfo.prizeDesc}}</div>
            </div>
            <div class="dialog_info grid">
                <div class="dialog_info_item col-1">
                    <div class="info_img img1">
                        <img :src="pageInfo.icons[0].icon" alt="">
                        <i class="vipgift lv2 grey"></i>
                    </div>
                    <p class="info_txt txt1">{{pageInfo.icons[0].txt}}</p>
                </div>
                <div class="dialog_info_item col-1">
                    <div class="info_img img2">
                        <img :src="pageInfo.icons[1].icon" alt="">
                    </div>
                    <p class="info_txt txt2">{{pageInfo.icons[1].txt}}</p>
                </div>
                <div class="dialog_info_item col-1">
                    <div class="info_img img3">
                        <img :src="pageInfo.icons[2].icon" alt="">
                    </div>
                    <p class="info_txt txt3">{{pageInfo.icons[2].txt}}</p>
                </div>
            </div>
            <div class="dialog_btngroup grid">
                <a @click.stop="close" href="javascript:void(0);" class="dialog_btn red col-1" >{{pageInfo.btn.txt}}</a>
            </div>
        </div>
    </div>
</template>

<script>
import {setCookie,getCookie} from "../../../js/common/global";
export default {
    name: 'promoteLayer',
    data(){
        return {
            isShow:false,
            //晋升时间没有超过一个月并且没有展示过（cookie有效期内）
            dataForGetGift:[
                {
                    headIcon:g_cdn + "/privilege/img/dialog/dialv2.png",
                    title:"恭喜您！晋升为V2会员",
                    prizeDesc:"每次晋升都有奖，特赠您价值10元积分！",
                    icons:[
                        {
                            icon:g_cdn + '/privilege/img/gift/lv2gift1.png',
                            txt:'V1→V2'
                        },
                        {
                            icon: g_cdn + '/privilege/img/gift/v3gift1.png',
                            txt:'V2→V3'
                        },
                        {
                            icon: g_cdn + '/privilege/img/gift/v4gift1.png',
                            txt:'V3→V4'
                        }
                    ],
                    btn:{
                        txt:"知道了"
                    }
                },
                {
                    headIcon:g_cdn + "/privilege/img/dialog/dialv3.png",
                    title:"恭喜您！晋升为V3会员",
                    prizeDesc:"每次晋升都有奖，特赠您价值50元积分！",
                    icons:[
                        {
                            icon:g_cdn + '/privilege/img/gift/lv2gift1.png',
                            txt:'V1→V2'
                        },
                        {
                            icon: g_cdn + '/privilege/img/gift/v3gift1.png',
                            txt:'V2→V3'
                        },
                        {
                            icon: g_cdn + '/privilege/img/gift/v4gift1.png',
                            txt:'V3→V4'
                        }
                    ],
                    btn:{
                        txt:"知道了"
                    }
                },
                {
                    headIcon:g_cdn + "/privilege/img/dialog/dialv4.png",
                    title:"恭喜您！晋升为V4会员",
                    prizeDesc:"每次晋升都有奖，特赠您价值100元积分！",
                    icons:[
                        {
                            icon:g_cdn + '/privilege/img/gift/lv2gift1.png',
                            txt:'V1→V2'
                        },
                        {
                            icon: g_cdn + '/privilege/img/gift/v3gift1.png',
                            txt:'V2→V3'
                        },
                        {
                            icon: g_cdn + '/privilege/img/gift/v4gift1.png',
                            txt:'V3→V4'
                        }
                    ],
                    btn:{
                        txt:"知道了"
                    }
                }
            ],
            //晋升时间超过一个月并且没有展示过（cookie有效期内）
            dataForHasGetGift:[
                {
                    headIcon:g_cdn + "/privilege/img/dialog/dialv2.png",
                    title:"恭喜您！晋升为V2会员",
                    prizeDesc:"最高八项特权，尊享升级",
                    icons:[
                        {
                            icon:g_cdn + '/privilege/img/rightsicon/ipost1.png',
                            txt:'理赔免邮'
                        },
                        {
                            icon: g_cdn + '/privilege/img/rightsicon/iinvite1.png',
                            txt:'邀请有奖'
                        },
                        {
                            icon: g_cdn + '/privilege/img/rightsicon/iserver.png',
                            txt:'专属客服'
                        }
                    ],
                    btn:{
                        txt:"查看我的特权"
                    }
                },
                {
                    headIcon:g_cdn + "/privilege/img/dialog/dialv3.png",
                    title:"恭喜您！晋升为V3会员",
                    prizeDesc:"最高八项特权，尊享升级",
                    icons:[
                        {
                            icon:g_cdn + '/privilege/img/rightsicon/iinvite2.png',
                            txt:'邀请有奖'
                        },
                        {
                            icon: g_cdn + '/privilege/img/rightsicon/iserver.png',
                            txt:'专属客服'
                        },
                        {
                            icon: g_cdn + '/privilege/img/rightsicon/iclaims.png',
                            txt:'理赔私人管家'
                        }
                    ],
                    btn:{
                        txt:"查看我的特权"
                    }
                },
                {
                    headIcon:g_cdn + "/privilege/img/dialog/dialv4.png",
                    title:"恭喜您！晋升为V4会员",
                    prizeDesc:"最高八项特权，尊享升级",
                    icons:[
                        {
                            icon:g_cdn + '/privilege/img/rightsicon/iserver.png',
                            txt:'专属客服'
                        },
                        {
                            icon: g_cdn + '/privilege/img/rightsicon/iclaims.png',
                            txt:'理赔私人管家'
                        },
                        {
                            icon: g_cdn + '/privilege/img/rightsicon/iteeth.png',
                            txt:'免费洗牙'
                        }
                    ],
                    btn:{
                        txt:"查看我的特权"
                    }
                }
            ],
            pageInfo:{
                headIcon:g_cdn + "/privilege/img/dialog/diavip.png",
                title:"每月1-3号会员日！",
                prizeDesc:"每月1号狂欢节",
                icons:[
                    {
                        icon:g_cdn + '/privilege/img/dialog/info1.png',
                        txt:'低价秒杀'
                    },
                    {
                        icon: g_cdn + '/privilege/img/dialog/info2.png',
                        txt:'抽百元大奖'
                    },
                    {
                        icon: g_cdn + '/privilege/img/dialog/info3.png',
                        txt:'专享价换购'
                    }
                ],
                btn:{
                    url:"closeandinput  /privilege/addMemberPhone",
                    txt:"开始狂欢"
                }
            }
        };
    },
    computed:{
        closeIcon(){
            return g_cdn + '/privilege/img/layer_close2.png';
        }
    },
    created() {
        console.log("promote create")
    },
    mounted() {
        this.initLayer();
    },
    methods:{
        initLayer() {
            var changetime = this.getLevelChangeTime();
            var day = new Date().getDate();
            var level = g_level;
            var deadline;
            //防止V1干扰
            setCookie("getgift1", "viewed",3600*24*365*2);
            setCookie("levelup1", "viewed",3600*24*365*2);
            //会员日浮层,晋升浮层和会员日浮层同时出现时优先展示会员日浮层
            console.log("Day",day)
            console.log("changetime",changetime)
            if(day==1||day==2||day==3||day == 11){
                if((getCookie("vipday")!="viewed"||getCookie("vipday")==undefined)&&(getCookie("getgift"+level)=="viewed"||getCookie("levelup"+level)=="viewed")){
                    this.isShow = true;
                    setCookie("vipday", "viewed",3600*24*3);
                }
            }
            if(g_levelinfo!=1 && g_levelinfo.length>=2){
                var prevLevel = g_levelinfo[g_levelinfo.length-2].level;
                if(level > prevLevel){
                    if(level == 2){
                        if(changetime.v1!=''&&(changetime.v2-changetime.v1)<=86400*30){
                            if (getCookie("getgift2")!="viewed"||getCookie("getgift2")==undefined){
                                this.pageInfo = this.dataForGetGift[0];
                                this.isShow = true;
                                setCookie("getgift2", "viewed",365*3600*24);
                            }
                        }else{
                            if (getCookie("levelup2")!="viewed"||getCookie("levelup2")==undefined){
                                this.pageInfo = this.dataForHasGetGift[0];
                                this.isShow = true;
                                setCookie("levelup2", "viewed",365*3600*24);
                            }
                        }
                        if(changetime.v2 != ''){
                            deadline = this.getLocalTime(changetime.v2 + 86400*30);
                        }else{
                            deadline = this.getLocalTime(Date.parse(new Date())/1000+86400*30);
                        }
                        this.$emit("returnVipTips",deadline +"之前成为V3会员可获得500积分");
                    }
                    if(level==3){
                        if((changetime.v1!=''&&(changetime.v3-changetime.v1)<=86400*30)||(changetime.v2!=''&&(changetime.v3-changetime.v2)<=86400*30)){
                            if (getCookie("getgift3")!="viewed"||getCookie("getgift3")==undefined){
                                this.pageInfo = this.dataForGetGift[1];
                                this.isShow = true;
                                setCookie("getgift3", "viewed",3600*24*365);
                            }
                        }else{
                            if (getCookie("levelup3")!="viewed"||getCookie(	"levelup3")==undefined){
                                this.pageInfo = this.dataForHasGetGift[1];
                                this.isShow = true;
                                setCookie("levelup3", "viewed",3600*24*365);
                            }
                        }
                        if(changetime.v3!=''){
                            deadline = this.getLocalTime(changetime.v3+86400*30);
                        }else{
                            deadline = this.getLocalTime(Date.parse(new Date())/1000+86400*30);
                        }
                        this.$emit("returnVipTips",deadline +"前晋升为V4会员可获得1000积分");
                    }
                    if(level==4){
                        if((changetime.v1!=''&&(changetime.v4-changetime.v1)<=86400*30)
                            ||(changetime.v2!=''&&(changetime.v4-changetime.v2)<=86400*30)
                            ||(changetime.v3!=''&&(changetime.v4-changetime.v3)<=86400*30)){
                            if (getCookie("getgift4")!="viewed"||getCookie("getgift4")==undefined){
                                this.pageInfo = this.dataForGetGift[2];
                                this.isShow = true;
                                setCookie("getgift4", "viewed",365*3600*24);
                            }
                        }else{
                            if (getCookie("levelup4")!="viewed"||getCookie("levelup4")==undefined){
                                this.pageInfo = this.dataForHasGetGift[2];
                                this.isShow = true;
                                setCookie("levelup4", "viewed",365*24*3600);
                            }
                        }
                        this.$emit("returnVipTips","您已是最高等级会员了");
                    }
                }
		    }else{
                if(level == 1){
                    deadline = this.getLocalTime(Date.parse(new Date())/1000+86400*30);
                    this.$emit("returnVipTips",deadline +"前晋升为V2会员可获得100积分");
                }
            }
        },
        getLevelChangeTime(){
            //获取等级对应的变更时间
            var time = {};
            var v1='',v2='',v3='',v4= '';
            //取各个等级最近的变更时间
            if(g_levelinfo!=1){
                for (var i=0;i<g_levelinfo.length;i++){
                    if(g_levelinfo[i].level ==1){
                        v1 = g_levelinfo[i].time;
                    }
                    if(g_levelinfo[i].level ==2){
                        v2 = g_levelinfo[i].time
                    }
                    if(g_levelinfo[i].level ==3){
                        v3 = g_levelinfo[i].time
                    }
                    if(g_levelinfo[i].level ==4){
                        v4 = g_levelinfo[i].time
                    }
                }
            }
            time = {v1:v1,v2:v2,v3:v3,v4:v4};
            return time;
        },
        getLocalTime(nS) {
            var date = new Date(parseInt(nS) * 1000);
            var year = date.getFullYear();
            var month = date.getMonth()+1;
            var day = date.getDate();
            var fdate = year+'.'+month+'.'+day;
            return fdate;
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
    props:[]
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .layer{ position: fixed; top: 50%; left: 50%; width: 100%; max-width: 640px; height: 100%; background-color: rgba(0, 0, 0, 0.7);  z-index: 1000; -webkit-transform: translate(-50%, -50%); transform: translate(-50%, -50%); }
    .layer_box{ position: relative; top: 50%; left: 50%; width: 96%; padding: 1.5rem 1rem; background-color: #fff; border-radius: .4rem; text-align: center; -webkit-transform: translate(-50%, -50%); transform: translate(-50%, -50%); }
    .dialog{ width: 90%; padding: 1.3rem 0 0; }
    .viptip{ width: 80%; padding: 7rem 0 0; }
    	.layer_close{ display: block; position: absolute; top: -1.4rem; right: -1.4rem; width: 2.8rem; height: 2.8rem; }
    	.dialog_img{ position: absolute; top: -7.5rem; left: 50%; width: 16.7rem; height: 16.7rem; margin-left: -8.25rem; }
        img{max-width: 100%;max-width: 100%;}
        .dialog_tit{ margin-bottom: 1.3rem; font-size: 1.6rem; color: #3c3c3c; text-align: center; }
        	.dialog_subtit{ font-size: 1.1rem; color: #969696; }
        .dialog_txt{ margin-bottom: 2rem; padding: 0 2rem; font-size: 1.3rem; color: #333333; }
        .dialog_input{ display: block; width: 90%; height: 3.6rem; margin: 0 5% 1.3rem; padding: 0 1rem; border: none; border-radius: .4rem; background-color: #eeeeee; line-height: 3.6rem; font-size: 1.3rem; color: #3c3c3c; }
        .dialog_info{ margin: 0 auto 2.2rem; padding: 0 2rem; }
        	.dialog_info_item{ width: 7rem; text-align: center; }
        		.info_img{ width: 5rem; height: 5rem; margin: 0 auto; }
        		.info_img .vipgift{ width: 5rem; height: 5rem; }
        		.info_txt{ margin-top:.5rem;font-size: 1rem; color: #969696; }
        .dialog_btngroup{ height: 4.4rem; background-color: #f9f9f9; border-top: solid 1px #e2e5e7; border-radius: 0 0 .4rem .4rem; line-height: 4.4rem; font-size: 1.5rem; }
            .dialog_btn{ display: block; }
            .dialog_btn:first-of-type{ border-bottom-left-radius: .4rem; }
            .dialog_btn:last-of-type{ border-bottom-right-radius: .4rem; }
            .dialog_btn:not(:last-of-type){ border-right: solid 1px #e2e5e7; }
            .dialog_btn.blue{ color: #8c7fee; }
            .dialog_btn.grey{ color: #999999; }
            .dialog_btn.red { background-color: #f93f56; color: #fff; }
/* 个人信息图标 */
.headicon 		{ position: absolute; left: 50%; bottom: 0; display: block; height: 1.85rem; width: 5.05rem; background-size: 100% 100%; background-repeat: no-repeat; transform: translateX(-50%); -webkit-transform: translateX(-50%); }
/* .headicon.lv1 	{ background-image: url(../img/headicon/level1.png); }
.headicon.lv2 	{ background-image: url(../img/headicon/level2.png); }
.headicon.lv3 	{ background-image: url(../img/headicon/level3.png); }
.headicon.lv4 	{ background-image: url(../img/headicon/level4.png); } */
/* .headicon.wings { bottom: .8rem; height: 1.95rem; width: 7.05rem; background-image: url(../img/headicon/wings.png); } */
/* 模块标题雪碧图 */
/* .title 		  { background: url(../img/title/title.png) no-repeat; background-size: 17.1rem 17.1rem; display: block; margin: 0 auto; } */
.title.title1 { height: 2.2rem; width: 13.2rem; background-position: 0 0; }
.title.title2 { height: 2.2rem; width: 10.2rem; background-position: 0 -3rem; }
.title.title3 { height: 2.2rem; width: 14.2rem; background-position: 0 -6rem; }
.title.title4 { height: 2.2rem; width: 17.2rem; background-position: 0 -9rem; }
.title.title5 { height: 2.2rem; width: 10.2rem; background-position: 0 -12rem; }
.title.title6 { height: 2.2rem; width: 10.2rem; background-position: 0 -15rem; }
/* 会员权益图标 */
.rightsicon 			 { position: relative; display: block; height: 5rem; width: 5rem; margin: 0 auto .6rem; background-size: 100% 100%; background-repeat: no-repeat; }
/* .rightsicon.vipday		 { background-image: url(../img/rightsicon/ivipday.png); }
.rightsicon.birth	 	 { background-image: url(../img/rightsicon/ibirth.png); }
.rightsicon.lecture		 { background-image: url(../img/rightsicon/ilecture.png); }
.rightsicon.post1	 	 { background-image: url(../img/rightsicon/ipost1.png); }
.rightsicon.post2	 	 { background-image: url(../img/rightsicon/ipost2.png); }
.rightsicon.post3	 	 { background-image: url(../img/rightsicon/ipost3.png); }
.rightsicon.invite1		 { background-image: url(../img/rightsicon/iinvite1.png); }
.rightsicon.invite2		 { background-image: url(../img/rightsicon/iinvite2.png); }
.rightsicon.invite3		 { background-image: url(../img/rightsicon/iinvite3.png); }
.rightsicon.server		 { background-image: url(../img/rightsicon/iserver.png); }
.rightsicon.claims		 { background-image: url(../img/rightsicon/iclaims.png); }
.rightsicon.teeth	 	 { background-image: url(../img/rightsicon/iteeth.png); }
.grey .rightsicon.vipday { background-image: url(../img/rightsicon/gvipday.png); }
.grey .rightsicon.birth  { background-image: url(../img/rightsicon/gbirth.png); }
.grey .rightsicon.lecture{ background-image: url(../img/rightsicon/glecture.png); }
.grey .rightsicon.post1  { background-image: url(../img/rightsicon/gpost.png); }
.grey .rightsicon.invite1{ background-image: url(../img/rightsicon/ginvite.png); }
.grey .rightsicon.server { background-image: url(../img/rightsicon/gserver.png); }
.grey .rightsicon.claims { background-image: url(../img/rightsicon/gclaims.png); }
.grey .rightsicon.teeth	 { background-image: url(../img/rightsicon/gteeth.png); } */
/* 会员晋升礼物图标 */
.vipgift 		 { display: block; height: 5.2rem; width: 5.2rem; background-size: 100% 100%; background-repeat: no-repeat; }
/* .vipgift.lv2	 { background-image: url(../img/gift/lv2gift.png); }
.vipgift.lv3	 { background-image: url(../img/gift/v3gift.png); }
.vipgift.lv4	 { background-image: url(../img/gift/v4gift.png); }
.vipgift.lv2.grey{ background-image: url(../img/gift/lv2gift1.png); }
.vipgift.lv3.grey{ background-image: url(../img/gift/v3gift1.png); }
.vipgift.lv4.grey{ background-image: url(../img/gift/v4gift1.png); } */
/* 会员晋升等级图标 */
.level			{ display: block; height: 1.9rem; width: 1.9rem; background-size: 100% 100%; background-repeat: no-repeat; }
/* .level.lv1		{ background-image: url(../img/level/slevel1.png); }
.level.lv2		{ background-image: url(../img/level/slevel2.png); }
.level.lv3		{ background-image: url(../img/level/slevel3.png); }
.level.lv4		{ background-image: url(../img/level/slevel4.png); }
.level.lv1.grey	{ background-image: url(../img/level/sglevel1.png); }
.level.lv2.grey	{ background-image: url(../img/level/sglevel2.png); }
.level.lv3.grey	{ background-image: url(../img/level/sglevel3.png); }
.level.lv4.grey	{ background-image: url(../img/level/sglevel4.png); } */
</style>
