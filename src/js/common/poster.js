let PreLoad = function(resources, obj) {
    let objs = obj || {};
    this.source = resources,
    this.count = 0,
    this.total = resources.length, //数组数量
    this.arr = {}, // 加载好的图片对象
    this.onload = objs.onload,
    this.init()
};
PreLoad.prototype.init = function() {
    let that = this;
    that.source.forEach(function(value, index) { //forEach数组循环遍历，for的简介版 参数为数组值
        let element = value
        that.image.call(that, element, index)
    })
},
PreLoad.prototype.image = function(element,index) {
    var img = new Image();
    if( element.src.match(/^http/) ){
        img.crossOrigin = 'anonymous';
    }
    this.load(img,element,index);
    img.src = element.src;
},
PreLoad.prototype.load = function(img, element, index) {
    let that = this;
    img.onload = img.onerror = img.onabort = function() { //noload加载完成 onerror加载错误 noabort加载中断
		/*EXIF.getData(img, function(){
			EXIF.getAllTags(this);
			let Orientation = EXIF.getTag(this, 'Orientation');
			if(Orientation && Orientation == 6)
				that.arr[index] = [this, element.x, element.y, element.width, element.height, Orientation];
            else*/
                that.arr[index] = [this, element.x, element.y, element.width, element.height];
            that.onload && that.onload({
                count: ++that.count,
                total: that.total,
                item: element,
                type: img.type,
                arr: that.arr
            })
		/*});*/
    }
};
	
export function poster(resources, callBack){
	new PreLoad(resources, {
	    onload: callBack
	})
}