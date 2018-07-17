import Vue from 'vue';
import Axios from 'axios';
import {initShareMenu} from "./global";
Vue.prototype.$initShareMenu = initShareMenu;
Vue.prototype.$fetch = (url,param,timeout=8000)=>{
    return new Promise((revolved,reject)=>{
        Axios({
            method: 'post',
            url: url,
            data: param,
            timeout:timeout,
            withCredentials: true,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            transformRequest: [function (data) {
                let ret = [];
                for (let it in data) {
                    if( typeof data[it] == "object" ){
                        ret.push(encodeURIComponent(it) + '=' + JSON.stringify(data[it]));
                    }else{
                        ret.push(encodeURIComponent(it) + '=' + encodeURIComponent(data[it]));
                    }
                }
                return ret.join("&")
            }]
        }).then(data=>{
            revolved(data.data);
        }).catch(e=>{
            reject("系统繁忙，请稍后重试");
        });
    });
};
Date.prototype.format = function(fmt){
    let o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (let k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};
String.prototype.escapeHTML = function(){
    return this.replace(/&/g, "＆").replace(/</g, "＜").replace(/>/g, "＞").replace(/"/g, "＂").replace(/'/g, "＇").replace(/…/g, "...");
};
String.prototype.unescapeHTML = function(){
    return this.replace(/＆/g, "&").replace(/＞/g, ">").replace(/＜/g, "<").replace(/＂/g, '"').replace(/＇/g, "'").replace(/&ldquo;/g, '\"').replace(/&rdquo;/g, '\"').replace(/&hellip;/g, '...').replace(/&middot;/g, '·');
};
//加法函数  
function accAdd(arg1, arg2) {  
    var r1, r2, m;  
    try {  
        r1 = arg1.toString().split(".")[1].length;  
    }  
    catch (e) {  
        r1 = 0;  
    }  
    try {  
        r2 = arg2.toString().split(".")[1].length;  
    }  
    catch (e) {  
        r2 = 0;  
    }  
    m = Math.pow(10, Math.max(r1, r2));  
    return (arg1 * m + arg2 * m) / m;  
}   
//给Number类型增加一个add方法，，使用时直接用 .add 即可完成计算。   
Number.prototype.add = function (arg) {  
    return accAdd(arg, this);  
};  
//减法函数  
function Subtr(arg1, arg2) {  
    var r1, r2, m, n;  
    try {  
        r1 = arg1.toString().split(".")[1].length;  
    }  
    catch (e) {  
        r1 = 0;  
    }  
    try {  
        r2 = arg2.toString().split(".")[1].length;  
    }  
    catch (e) {  
        r2 = 0;  
    }  
    m = Math.pow(10, Math.max(r1, r2));  
     //last modify by deeka  
     //动态控制精度长度  
    n = (r1 >= r2) ? r1 : r2;  
    return ((arg1 * m - arg2 * m) / m).toFixed(n);  
}  
//给Number类型增加一个add方法，，使用时直接用 .sub 即可完成计算。   
Number.prototype.sub = function (arg) {  
    return Subtr(this, arg);  
};  
//乘法函数  
function accMul(arg1, arg2) {  
    var m = 0, s1 = arg1.toString(), s2 = arg2.toString();  
    try {  
        m += s1.split(".")[1].length;  
    }  
    catch (e) {  
    }  
    try {  
        m += s2.split(".")[1].length;  
    }  
    catch (e) {  
    }  
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);  
}   
//给Number类型增加一个mul方法，使用时直接用 .mul 即可完成计算。   
Number.prototype.mul = function (arg) {  
    return accMul(arg, this);  
};   
//除法函数  
function accDiv(arg1, arg2) {  
    var t1 = 0, t2 = 0, r1, r2;  
    try {  
        t1 = arg1.toString().split(".")[1].length;  
    }  
    catch (e) {  
    }  
    try {  
        t2 = arg2.toString().split(".")[1].length;  
    }  
    catch (e) {  
    }  
    r1 = Number(arg1.toString().replace(".", ""));  
    r2 = Number(arg2.toString().replace(".", ""));  
    return (r1 / r2) * Math.pow(10, t2 - t1);  
}   
//给Number类型增加一个div方法，，使用时直接用 .div 即可完成计算。   
Number.prototype.div = function (arg) {  
    return accDiv(this, arg);  
};