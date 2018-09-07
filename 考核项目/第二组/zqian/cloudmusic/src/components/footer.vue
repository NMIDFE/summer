<template>
  <div class="foot container">
      <div class="left">
        <ul class="nav">
          <li>
            <router-link to='/'>
              <span class="select">关于网易</span>|
            </router-link>
          </li>
          <li>
            <router-link to='/mymusic'>
              <span>客户服务</span>|
            </router-link>
          </li>
          <li>
            <router-link to='/'>
              <span>服务条款</span>|
            </router-link>
          </li>
          <li>
            <router-link to='/'>
              <span>网站导航</span>|
            </router-link>
          </li>
          <li>
            <router-link to='/'>
              <span>意见反馈</span>
            </router-link>
          </li>
        </ul>
        <p>网易公司版权所有©1997-2018杭州乐读科技有限公司运营：浙网文[2018]3506-263号</p>
        <p>违法和不良信息举报电话：0571-89853516 举报邮箱：cloudmusicservice@163.com</p>
      </div>
      <div class="right">
         <div class="item">
          <!--  <span></span>
           <span>独立音乐人</span> -->
         </div>
         <div class="item">
       <!--     <span></span>
           <span>音乐专栏</span> -->
         </div>
         <div class="item">
         <!--   <span></span>
           <span>自媒体</span> -->
         </div>
         <div class="item">
         <!--   <span></span>
           <span>赞赏</span> -->
         </div>
         <div class="item">
      <!--      <span></span>
           <span>视频奖励</span> -->
         </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'headTop',
  data () {
    return {
      msg: ''
    }
  }
};
</script>


<style scoped>
div,ul,li,p{
  margin: 0;
  padding: 0;
}
@media only screen and (min-width: 750px) and (max-width: 970px){
  .container{
    width: 90%;
  }
}
@media only screen and (min-width: 970px) and (max-width: 1024px){
  .container{
    width: 80%;
  }
}
@media only screen and (min-width: 1025px) {
  .container{
    width: 70%;
  }
}
.container{
  background: #f5f5f5;
  margin:0 auto;
  display: flex;
  justify-content: space-between;
}
.contanier div{
  /*display: inline-block;*/
}
.left{
  /*width: 50%;*/
}
.right{
  width: 50%;
}
.nav{
    display: flex;
    align-items: center;
    /*justify-content: space-around;*/
}
.nav li{
  font-size: 12px;
  list-style: none;
}
.nav li a{
  color: #999;
  text-decoration: none;
}
.nav li a:hover{
  text-decoration: underline;
}
.left p{
  line-height: 24px;
  font-size: 12px;
  color: #666;
}
.right{
  display: flex;
  justify-content: space-around;
}
.right .item{
  width: 60px;
  height: 60px;
}
.right .item:nth-child(1){
  background: url("../assets/foot_enter.png") no-repeat;
  background-position: -60px -80px;
}
.right .item:nth-child(2){
  background: url("../assets/foot_enter.png") no-repeat;
  background-position: 0px -80px;
}
.right .item:nth-child(3){
  background: url("../assets/foot_enter.png") no-repeat;
  background-position: 0 0;
}
.right .item:nth-child(4){
  background: url("../assets/foot_enter.png") no-repeat;
  background-position: -60px 0px;
}
.right .item:nth-child(5){
  background: url("../assets/cash.png") no-repeat;
  background-position: 0 0;
}
</style>