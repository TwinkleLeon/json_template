const  detailPage         = () => import(/*webpackChunkName:"detailPage"*/ "../../component/detail/detail.vue");
const  introducePage      = () => import(/*webpackChunkName:"introducePage"*/ "../../component/intro/intro.vue");
const  claimListPage      = () => import(/*webpackChunkName:"introducePage"*/ "../../component/claimList/index.vue");

export default [
	{
		path: '/', 
	  	redirect:'/detail'
	},
	{
		path: '/detail', 
	  	component: detailPage,
	},
	{
		path: '/intro', 
		component: introducePage
	},
	{
		path:"/claimlist",
		component:claimListPage
	}
];