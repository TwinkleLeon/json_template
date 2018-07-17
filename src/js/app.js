//有些库如axios使用原生Promise，故全环境引入Promise支持，但js中的Promise任然使用babel转码
import 'es6-promise/auto';
import Vue  from 'vue';
import VueRouter  from 'vue-router';
import RouterConf from './common/router';
import store from '../store/index';
import "./common/prototype.js";
import 'swiper/dist/css/swiper.css';
import "../css/common.css";
Vue.use(VueRouter);
const router = new VueRouter({
	mode:'history',
	base:'/privilege/index',
  	routes:RouterConf
});
// router.beforeEach((to,from,next)=>{
// 	window._detailBegainTime = (new Date()).getTime();
// 	next();
// });
// router.afterEach(route => {
// 	//方便分享加的导航钩子
// 	if( !isWx || !isWxJsReady ){
// 		return ;
// 	}
// 	if( !route.fullPath.match(/^\/index/) && !route.fullPath.match(/^\/detail\//) ){
// 		initShareMenu("小雨伞筹",location.href,location.href,shareIcon);
// 	}
// });
document.body.addEventListener("touchmove",e=>{
	if( e._prevent ){
		e.preventDefault();
	}
},{passive: false});
const app = new Vue({
	router,
	store
}).$mount('#app');


