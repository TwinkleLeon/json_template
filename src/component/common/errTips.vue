<script>
export default {
    name: 'errTips',
    data(){
        return {
        };
    },
    updated(){
        if( this.errMsg ){
            let that = this;
            if( this.tipsType == 1 ){
                setTimeout(()=>{
                    that.$emit('hideTips');
                },3000);
            }
        }
    },
    props:['errMsg',"tipsType"],
    template:'<div class="mod_tips" v-show="errMsg?true:false">{{errMsg}}</div>'
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mod_tips{
    position: fixed;
    top: 50%;
    left: 50%;
    text-align: center;
    background-color: rgba(0,0,0,.8);
    -webkit-box-shadow: 0 0 2px rgba(0,0,0,.2);
    box-shadow: 0 0 2px rgba(0,0,0,.2);
    z-index: 10001;
    padding: 15px 20px;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    -webkit-border-radius: 3px;
    border-radius: 3px;
    color: #fff;
    min-width: 50%;
    word-break: break-word;
}
</style>
