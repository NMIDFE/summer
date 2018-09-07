<template>
	<div class="userLogin">
		<div class="enter" ref='access'>
			<p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
			<button @click='loginDialog' ref='enterBtn'>用户登录</button>
		</div>
		<div class="loginDialog" ref='dialog'>
			<div class="log_reg" ref='login_register'>
				<div class="bar">登录</div>
				<div class="cnt">
					<div class="main">
						<div class="flatform"></div>
						<button @click='showLogin'>手机号登录</button>
						<button @click='showRegister'>注册</button>
					</div>
					<div class="alt">
						<ul class="loginWay">
							<li><i></i><a href="#">微信登录</a></li>
							<li><i></i><a href="#">QQ登录</a></li>
							<li><i></i><a href="#">新浪微博登录</a></li>
							<li><i></i><a href="#">网易邮箱账号登录</a></li>
						</ul>
					</div>
				</div>
			</div>
			<div class="login loginDialog" ref='login'>
				<div class="bar">手机号登录</div>
				<form>
					<div class="group">
						<span>+86</span>
						<input type="text" placeholder="请输入手机号" v-model='username'/>
					</div>
					<div class="group">
						<input type="text" placeholder="请输入密码" v-model='userpsg'/>
					</div>
					<div class="group">
						<div>
							<input type="checkbox"/>
							<label>自动登录</label>
						</div>
						<div>忘记密码？</div>
					</div>
					<div class="group">
						<input type="submit" value="登录" @click='userLogin'/>
					</div>
				</form>
				<footer>
					<div class="return" ref='return' @click='showLog_Reg'><其他登录方式</div>
					<div class="reg" ref='toRegister' @click='showRegister'>没有账号？免费注册</div>
				</footer>
			</div>
			<div class="register" ref='register'>
				<div class="bar">手机号注册</div>
				<form id="regData" ref='regData'>
					<div class="group">
						<p>手机号：</p>
						<span>+86</span>
						<input type="text" placeholder="请输入手机号" v-model='name'/>
					</div>
					<div class="group">
						<p>密码：</p>
						<input type="text" placeholder="设置登录密码，不少于6位" v-model='password'/>
					</div>
					<div class="group">

						<div>
							<input type="checkbox"/>
							<label>自动登录</label>
						</div>
						<div>忘记密码？</div>
					</div>
					<div class="group">
						<input type="submit" value="下一步" @click='userRegister'/>
					</div>
				</form>
				<footer>
					<div class="return" ref='return' @click='showLogin'><返回登录</div>
				</footer>
			</div>
			<span class="close" @click='hide'>×</span>
		</div>
	</div>
</template>

<script>
import axios from 'axios';

import Bus from '@/assets/bus.js';
export default{
	name:'userLogin',
	data(){
		return {
			flag:'',
			name:'',
			password:'',
			username:'',
			userpsg:'',
			success:false
		}
	},

	mounted:function(){
		Bus.$on('getheadflag',(data)=>{
		this.flag = !data;
		this.loginDialog();
		})
	},
	methods:{
		userRegister:function(){
			var that = this;
			var regInfo = this.$refs.register;
			let param = new URLSearchParams();
            param.append('name',this.name);
            param.append('password',this.password);
			axios({
				method:'post',
				url:'http://120.78.51.133:8080/frontdemo/testAdd',
				data:param
			})
			.then(function(res){
				console.log(res);
				if(res.data.result == 'yes'){
					alert('注册成功');
					that.username = that.name;
					that.showLogin();
				}else{
					alert('注册失败');
				}
			})
		},
		userLogin:function(){
			var that = this;
			var regInfo = this.$refs.register;
			let param = new URLSearchParams();
            param.append('name',this.username);
            param.append('password',this.userpsg);
            console.log(param);
			axios({
				method:'post',
				url:'http://120.78.51.133:8080/frontdemo/testLogin',
				data:param
			})
			.then(function(res){
				console.log(res);
				if(res.data.result == 'yes'){
					alert('登录成功');
					// window.sessionStorage.username = that.username;
					// console.log(window.sessionStorage);
					that.flag = true;
					that.loginDialog();
					that.$refs.access.style.display = 'none';
					Bus.$emit('userInfo',that.username);
					that.$emit('pageInfo',that.username);
				}else{
					alert('登录失败');
				}
			})
		},
		loginDialog:function(){
			this.flag = this.flag==''?true :!(this.flag);
			var btn = this.$refs.enterBtn;
			var dialog = this.$refs.dialog;
			dialog.style.display = this.flag ? 'block':'none';
		},
		showLogin:function(){
			var login_register = this.$refs.login_register;
			var login = this.$refs.login;
			var register = this.$refs.register;
			login_register.style.display = 'none';
			register.style.display = 'none';
			login.style.display ='block';
		},
		showRegister:function(){
			var login_register = this.$refs.login_register;
			var login = this.$refs.login;
			var register = this.$refs.register;
			login_register.style.display = 'none';
			login.style.display = 'none';
			register.style.display ='block';
		},
		showLog_Reg:function(){
			var login_register = this.$refs.login_register;
			var login = this.$refs.login;
			var register = this.$refs.register;
			login.style.display = 'none';
			login_register.style.display ='block';
		},
		hide:function(){
			this.flag = true;
			this.loginDialog();
		}
	}
};
</script>

<style scoped>
div,ul,li,p{
	margin: 0;
	padding: 0;
}
.userLogin{
	padding: 10px 20px;
	margin: 5px;
	background: #f5f5f5;
	color: #333;
	font-size: 12px;
	border: 1px solid #e5e5e5;
}
.userLogin button{
	background: #ba3a2e;
	outline: none;
	border: none;
	padding: 5px 10px;
	margin: 3px;
	border-radius: 3px;
	box-shadow: 0 1px 0 2px rgba(152,78,78,.5);
	color: #ddd;
	font-size: 12px;
}
.userLogin button:hover{
	cursor: pointer;
	background: #cb3c30;
}
.userLogin .loginDialog{
	width: 530px;
	height: 330px;
	background: #fff;
	position: fixed;
	top: 50%;
	left: 50%;
	margin-top: -165px;
	margin-left: -265px;
    border-radius: 4px;
    box-shadow: 0 5px 16px rgba(0,0,0,0.8);
    z-index: 1000;
}

.close{
	position: absolute;
	right: 10px;
	top: 0px;
	font-size: 22px;
	line-height: 38px;
	color: #fff;
	z-index: 1001;
}
.close:hover{
	cursor: pointer;
}
.loginDialog .bar{
	text-align: left;
	padding-left: 20px;
	background: #2d2d2d;
	font-size: 14px;
	line-height: 38px;
	height: 38px;
	color: #fff;
	font-weight: bold;
}
.loginDialog .cnt{
	display: flex;
	padding: 40px 0 39px;
}
.loginDialog .cnt .main{
	width: 224px;
	padding:  0 35px 3px 40px;
	border-right: 1px dotted #ccc;
}
.loginDialog .flatform{
	width: 224px;
	height: 120px;
	background: url('../assets/platform.png') no-repeat;
	margin-bottom: 40px;
}
.loginDialog .cnt button{
	display: block;
	width: 190px;
	margin: 10px;
	color: #eee;
	background: #4aa0e8;
	box-shadow: 0 1px 0 1px rgba(71,131,160,0.5);
}
.loginDialog button:hover{
	background: #4aa1e8;
	cursor: pointer;
}
.loginDialog .alt .loginWay{

}
.loginDialog .alt .loginWay li{
	display: flex;
	list-style: none;
	text-align: left;
	margin-left: 30px;
	margin-top: 15px;
}
.loginDialog .alt .loginWay i{
	display: inline-block;
	width: 38px;
	height: 38px;
	margin-right: 10px;
}
.loginDialog .alt .loginWay li:nth-child(1) i{
	background: url('../assets/Loginlogo.png') no-repeat;
	background-position: -150px -670px;
}
.loginDialog .alt .loginWay li:nth-child(2) i{
	background: url('../assets/Loginlogo.png') no-repeat;
	background-position: -190px -670px;
}
.loginDialog .alt .loginWay li:nth-child(3) i{
	background: url('../assets/Loginlogo.png') no-repeat;
	background-position: -230px -670px;
}
.loginDialog .alt .loginWay li:nth-child(4) i{
	background: url('../assets/Loginlogo.png') no-repeat;
	background-position: -270px -670px;
}
.loginDialog .alt .loginWay a{
	text-decoration: none;
	color: #333;
	font-size: 12px;
	line-height: 38px;
}
.loginDialog .login{
	display: none;
}
.login form{
	padding: 39px 0 43px;
}
.loginDialog .login .group{
	margin: 12px auto;
	width: 206px;
}
.loginDialog .login span{
	display: inline-block;
	border: 1px solid #e5e5e5;
	padding: 7px;
}
.loginDialog .login input{
	padding: 5px 3px;
	outline: none;
	border: 1px solid #e5e5e5;
}
.loginDialog .group:nth-child(2) input{
	width: 100%;
	box-sizing: border-box;
}
.loginDialog .group:nth-child(3){
	display: flex;
	justify-content: space-between;
	cursor: pointer;
}
.loginDialog .group input[type='submit']{
	background: #4aa0e8;
	width: 80%;
	border-radius: 5px;
	color: #eee;
}
.loginDialog .group input[type='submit']:hover{
	cursor: pointer;
}
.loginDialog footer{
	height: 49px;
	padding:  0 10px;
	background: #f7f7f7;
	border-top: 1px solid #c6c6c6;
	line-height: 49px;
	font-size: 12px;
	color: #333;
	display: flex;
	justify-content: space-between;
}
.loginDialog footer div:hover{
	cursor: pointer;
}
.loginDialog .register{
	display: none;
}
.register form{
	padding: 19px 0 18px;
}
.loginDialog .register .group{
	margin: 12px auto;
	width: 206px;
}
.loginDialog .register .group p{
	color: #333;
	text-align: left;
	line-height: 24px;
}
.loginDialog .register span{
	display: inline-block;
	border: 1px solid #e5e5e5;
	padding: 7px;
}
.loginDialog .register input{
	padding: 5px 3px;
	outline: none;
	border: 1px solid #e5e5e5;
}
.loginDialog .group:nth-child(2) input{
	width: 100%;
	box-sizing: border-box;
}
.loginDialog .group:nth-child(3){
	display: flex;
	justify-content: space-between;
	cursor: pointer;
}
.loginDialog .group input[type='submit']{
	background: #4aa0e8;
	width: 80%;
	border-radius: 5px;
	color: #eee;
}
.loginDialog .group input[type='submit']:hover{
	cursor: pointer;
}
.loginDialog footer{
	height: 49px;
	padding:  0 10px;
	background: #f7f7f7;
	border-top: 1px solid #c6c6c6;
	line-height: 49px;
	font-size: 12px;
	color: #333;
	display: flex;
	justify-content: space-between;
}
.loginDialog footer div:hover{
	cursor: pointer;
}
</style>