<template>
<div class="m-load2">
    <div class="line">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="circlebg"></div>
</div>
</template>
<script>
export default {
    name: 'loading',
    data(){
        return {
        };
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.m-load2{position:fixed;left: 0;bottom: 0;right: 0;top: 0;background-color: #f0f0f0;z-index: 9999;opacity: 0.8;}
 /** 加载动画的静态样式 **/
.m-load2 .line div{position:absolute;left:50%;top:50%;width:2px;height:36px;margin:-18px 0 0 -1px;}
.m-load2 .line div:before,.m-load2 .line div:after{content:'';display:block;height:50%;background:#717171;border-radius:5px;}
.m-load2 .line div:nth-child(2){-webkit-transform:rotate(30deg);}
.m-load2 .line div:nth-child(3){-webkit-transform:rotate(60deg);}
.m-load2 .line div:nth-child(4){-webkit-transform:rotate(90deg);}
.m-load2 .line div:nth-child(5){-webkit-transform:rotate(120deg);}
.m-load2 .line div:nth-child(6){-webkit-transform:rotate(150deg);}
.m-load2 .circlebg{position:absolute;left:50%;top:50%;width:16px;height:16px;margin:-8px 0 0 -8px;background:#f0f0f0;border-radius:18px;}
/** 加载动画 **/
@-webkit-keyframes load{
    0%{opacity:0.3;}
    100%{opacity:1;}
}
.m-load2 .line div:nth-child(1):before{-webkit-animation:load 1.2s linear 0s infinite;}
.m-load2 .line div:nth-child(2):before{-webkit-animation:load 1.2s linear 0.1s infinite;}
.m-load2 .line div:nth-child(3):before{-webkit-animation:load 1.2s linear 0.2s infinite;}
.m-load2 .line div:nth-child(4):before{-webkit-animation:load 1.2s linear 0.3s infinite;}
.m-load2 .line div:nth-child(5):before{-webkit-animation:load 1.2s linear 0.4s infinite;}
.m-load2 .line div:nth-child(6):before{-webkit-animation:load 1.2s linear 0.5s infinite;}
.m-load2 .line div:nth-child(1):after{-webkit-animation:load 1.2s linear 0.6s infinite;}
.m-load2 .line div:nth-child(2):after{-webkit-animation:load 1.2s linear 0.7s infinite;}
.m-load2 .line div:nth-child(3):after{-webkit-animation:load 1.2s linear 0.8s infinite;}
.m-load2 .line div:nth-child(4):after{-webkit-animation:load 1.2s linear 0.9s infinite;}
.m-load2 .line div:nth-child(5):after{-webkit-animation:load 1.2s linear 1s infinite;}
.m-load2 .line div:nth-child(6):after{-webkit-animation:load 1.2s linear 1.1s infinite;}
</style>
