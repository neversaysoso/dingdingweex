<template>
  <div class="header">
    <div class="nav">
      <div class="time" @click="ddTimeBox">
        <!-- {{date.split(' ')[0]}} -->
        <text class="time-text">{{ newTimer }}</text>
        <div class="time-icon">
          <image src="http://s.kcimg.cn/dingtalk/image/time.png" style="width:12px;height:6px;"></image>          
        </div>
      </div>
      <div class="link" @click="gotoLink('dealer/index')">
        <text class="link-text">经销商拜访记录</text>
        <div class="link-icon"></div>
      </div>
    </div>
    <div class="sign">
      <text class="text">本月签到{{ dayCount }}次</text>
      <text class="text">本日签到{{ monthCount }}次</text>
    </div>
  </div>
</template>
<script>
  import dingtalk from 'dingtalk-javascript-sdk';
  import {toast,openLink} from '../lib/util.js';
  export default {
    props:['newTimer','dayCount','monthCount'],
    data(){
      return {
        time:'2017-12-02'
      }
    },
    created(){

    },
    methods:{
      // 调取钉钉时间
      ddTimeBox(){
        dingtalk.ready(()=>{
          const dd = dingtalk.apis;
          dd.biz.util.datepicker({
            format: 'yyyy-MM-dd',
            value: this.newTimer, //默认显示日期
            onSuccess : (result)=> {
                this.newTimer = result.value

                // 传值
                this.$emit('ddTimeSet',{
                  time:this.newTimer,
                  page:1
                })
            },
            onFail : (err)=> {}
          })
        })
      },
      // 页面跳转
      gotoLink(go){
        openLink(go)
      }
    }
  }
</script>

<style scoped>
  .header{
    border-top-width: 1px;
    border-top-style: solid;
    border-top-color: #D8D8D8;
    background-color: #fff;
    padding-bottom: 20px;
  }
  .nav{
    padding-top: 16px;
    padding-left: 16px;
    padding-bottom: 12px;
    padding-right: 12px;
    height: 60px;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
  }
  .time{
    padding-left: 14px;
    height: 30px;
    line-height: 30px;
    align-content: center;
    align-items: center;
    justify-content:flex-start;
    flex-direction: row;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(23,24,26,0.12);
    border-bottom-left-radius :15px;
    border-bottom-right-radius :15px;
    border-top-left-radius :15px;
    border-top-right-radius :15px;
  }
  .time-text{
    line-height: 30px;
    color: #17181A;
    font-size: 16px;
  }
  .time-icon{
    width: 12px;
    height: 6px;
    padding-right: 14px;
    padding-left: 14px;
    align-items: center;
  }
  .link{
    align-items: center;
    flex-direction: row;
  }
  .link-text{
    color: #1571E5;
    line-height: 30px;
    align-items: center;
    font-size: 14px;
  }
  .link-icon{
    margin-right: 3px;
    width: 8px;
    height: 8px;
    border-top-width: 1px;
    border-right-width: 1px;
    border-style: solid;
    border-color: #1571E5;
    transform: rotate(45deg)
  }
  .sign{
    flex-direction: row;
    justify-content: flex-start;
    height: 14px;
    padding-left: 16px;
  }
  .text{
    font-size: 12px;
    color: #A1A9B3;
    line-height: 14px;
    margin-right: 20px;
  }
</style>
