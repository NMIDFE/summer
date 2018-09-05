$(function () {
	var loginButton = $("#login-button");
	var cover = $(".login-cover");
	var close  = $(".login-close");
	var warnIcon = $(".warn");
	var show = $("#show-info");
	var nameInput = $("#name");
	var passwordInput = $("#password");
	var nameFlag = false;
	var passwordFlag = false;
	var loginURL = 'http://120.78.51.133:8080/frontdemo/testLogin';
	//点击登录 弹出登录框
	loginButton.click(function() {
		cover.css("display","block");
	});
	//点击关闭 关闭登录框
	close.click(function() {
		cover.css("display","none");
	});
	//验证账号合法性
	nameInput.blur(function() {
		var nameValue = nameInput.val();
		var nameReg = /^[0-9a-zA-Z]{1,10}$/;
		if(!nameReg.test(nameValue)){
			warnIcon.css("display","block");
			show.css("display","block");
			show.html("请输入账号为1-10位数字或字母");
			nameFlag = false;
			return;
		}else{
			warnIcon.css("display","none");
			show.css("display","none");
			nameFlag = true;
		}
	});
	//验证密码合法性
	passwordInput.blur(function() {
		var passwordValue = passwordInput.val();
		var passwordReg = /^[0-9a-zA-Z]{6,20}$/;
		if(!passwordReg.test(passwordValue)){
			warnIcon.css("display","block");
			show.css("display","block");
			show.html("请输入密码为6-20位数字");
			passwordFlag = false;
			return;
		}else{
			warnIcon.css("display","none");
			show.css("display","none");
			passwordFlag = true;
		}
	});
	

	//登录验证
	$("#check-login").click(function() {
		//验证账号密码格式合法性
		if(passwordFlag&&nameFlag){
			console.log('账号密码格式正确');
			nameValue = nameInput.val();
			passwordValue = passwordInput.val();
			$.ajax({
				url:loginURL,
				type:"post",
				data:{
					name:nameValue,
					password:passwordValue
				},
				dataType:"json",
				success:function (result) {
					if(result.result == "yes"){
						warnIcon.css("display","none");
						show.css("display","none");
						cover.css("display","none");
						$(".header-button").html("<p>"+nameValue+"</p>，<span>退出</span>");
						signOut ();
					}else{
						warnIcon.css("display","block");
						show.css("display","block");
						show.html(result.reason);
					}
				}
			});
		}else{
			warnIcon.css("display","block");
			show.css("display","block");
			show.html("请输入正确的账号或者密码");
		}
	});


	function signOut () {
		$(".header-button span").click(function() {
			window.location.reload();
		});
	}
});