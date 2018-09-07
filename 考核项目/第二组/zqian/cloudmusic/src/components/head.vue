<template>
  <div class="headTop">
  		<div class="logo">
  			<!-- <img src="./img/topbar.png"> -->
  		</div>
		<div class="nav">
			<ul>
				<li>
					<router-link to='/'>
						<span>发现音乐</span>
						<sub class="selectNav"></sub>
					</router-link>
				</li>
				<li @click='gomusic'>
					<router-link to='/mymusic'>
						<span>我的音乐</span>
						<sub class="selectNav"></sub>
					</router-link>
				</li>
				<li>
					<router-link to='/'>
						<span>朋友</span>
						<sub class="selectNav"></sub>
					</router-link>
				</li>
				<li>
					<router-link to='/'>
						<span>商城</span>
						<sub class="selectNav"></sub>
					</router-link>
				</li>
				<li>
					<router-link to='/'>
						<span>音乐人</span>
						<sub class="selectNav"></sub>
					</router-link>
				</li>
				<li>
					<router-link to='/'>
						<span>下载客户端</span>
						<sub class="selectNav"></sub>
					</router-link>
				</li>
			</ul>
		</div>
		<div class='search_login'>
			<div class="search">
				<i></i>
				<!-- <span>音乐/视频/用户</span> -->
				<input type="text"/>
			</div>

			<div class="video">视频投稿</div>
			<div class="login" ref='log' @mouseover="showLoginWay" @mouseout="hideLoginWay" @click='ChangeheadFlag'>
				<span ref='logintxt'>登录</span>
				<span ref='user'></span>
				 <i ref='trans'></i>
				<ul class="loginWay" ref='loginWay'>
					<li><i></i><a href="#">手机号登录</a></li>
					<li><i></i><a href="#">微信登录</a></li>
					<li><i></i><a href="#">QQ登录</a></li>
					<li><i></i><a href="#">新浪微博登录</a></li>
					<li><i></i><a href="#">网易邮箱账号登录</a></li>
				</ul>
			</div>
		</div>
  </div>
</template>

<script>
import Bus from '@/assets/bus.js';
export default {
  name: 'headTop',
  data () {
    return {
      msg: '',
      headFlag:false,
      username:''
    }
  },
  mounted:function(){
  	Bus.$on('userInfo',(data)=>{
  		console.log(data);
  		this.$refs.logintxt.style.display = 'none';
  		this.$refs.user.innerHTML = data;
  		this.username = data;
  	})
  },
  methods:{
  	gomusic:function(){
  		// alert(this.username);
  		this.$router.push({name:'Mymusic',params:{username:'dlfad'}});
  	},
  	showLoginWay:function(){
  		var loginWay = this.$refs.loginWay;
  		loginWay.style.display = 'block';
  		this.$refs.trans.setAttribute('class','transition');
  	},
  	hideLoginWay:function(){
   		var loginWay = this.$refs.loginWay;
  		loginWay.style.display = 'none'; 	
  		this.$refs.trans.setAttribute('class','');	
  	},
  	ChangeheadFlag:function(){
  		this.headFlag = 'true',
  		Bus.$emit('getheadflag',this.headFlag);
  	}
  }
};
</script>


<style scoped>
div,ul,li{
	margin: 0;
	padding: 0;
}
.transition{
	transform:rotate(180deg);
	-ms-transform:rotate(180deg); 	/* IE 9 */
	-moz-transform:rotate(180deg); 	/* Firefox */
	-webkit-transform:rotate(180deg); /* Safari 和 Chrome */
	-o-transform:rotate(180deg); 	/* Opera */
}
.headTop{
	width: 80%;
	padding:0 10%;
	display: flex;
	height:70px;
	background: #242424;
	color: #ccc;
	font-size: 14px;
	min-width: 970px;
}
.logo{
	width: 10%;
	max-width:175px;
	height:100%;
	background:url("../assets/topbar.png") no-repeat;
}
.nav{
	width: 55%;
}
.nav ul{
	display: flex;
    align-items: center;
    justify-content: space-around;
}
.nav ul li{
	/*padding: 0 10px;*/
	list-style: none;
}
.nav li:hover{
	background: #000;
	color: #fff;
}
.nav li span{
	display: inline-block;
	height: 70px;
	line-height: 70px;
	color: #ccc;
}
.search_login{
	width: 35%;
	display: flex;
}

.search{
	width: 180px;
	height: 32px;
	display: flex;
	background: #fff;
	margin: 20px 10px 0 0;
	border-radius: 10px;
}
.search input{
	border: none;
	border-radius: 8px;
}
.search i{
	width: 32px;
	height: 32px;
	margin-top: 7px;
	display: inline-block;
	background:url("../assets/topbar.png") no-repeat;
	background-position: 0 -105px;
}
.search span{
	display: inline-block;
	line-height: 32px;
	font-size: 12px;
}
.video{
	width: 85px;
	height: 32px;
	line-height: 32px;
	font-size: 12px;
	padding-left: 15px;
	margin: 20px 10px 0 0;
	background:url("../assets/topbar.png") no-repeat;
	background-position: 0 -140px;
}
.login{
	min-width: 100px;
	line-height: 70px;
	padding: 0 10px;
}
.login i{
	width: 20px;
	height: 20px;
	display: inline-block;
}
.login>i{
	height: 10px;
	margin-left: 12px;
	background: url('../assets/toplist.png') no-repeat;
	background-position: -20px 0px;
}
.search_login .loginWay{
	position: relative;
	display: none;
	min-width: 103px;
	margin-top: -2px;
	padding: 5px 10px;
	list-style: none;
	line-height: 21px;
	font-size: 10px;
	text-align: left;
    background: #2b2b2b;
    border: 1px solid #202020;
    box-shadow: 0 8px 24px 0 rgba(0,0,0,0.50);
    border-radius: 4px;
    z-index: 1000;
}
.search_login .loginWay li{
	display: flex;
	border-bottom: 1px solid #232323;
}
.search_login .loginWay li:nth-child(1) i{
	background: url('../assets/toplist.png') no-repeat;
}
.search_login .loginWay li:nth-child(2) i{
	background: url('../assets/toplist.png') no-repeat;
	background-position: -20px -20px;
}
.search_login .loginWay li:nth-child(3) i{
	background: url('../assets/toplist.png') no-repeat;
	background-position: -20px -40px;
}
.search_login .loginWay li:nth-child(4) i{
	background: url('../assets/toplist.png') no-repeat;
	background-position: 0px -20px;
}
.search_login .loginWay li:nth-child(5) i{
	background: url('../assets/toplist.png') no-repeat;
	background-position: 0px -40px;
}
.search_login .loginWay a{
	display: inline-block;
	padding-left: 3px;
	color: #ccc;
	text-decoration: none;
}
.search_login div{
	cursor: pointer;
}
</style>