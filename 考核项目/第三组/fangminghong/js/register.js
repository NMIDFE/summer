/**
 * 注册效果
 */
$(function () {
	var account = $("#r-account");
	var passwordOne = $("#r-password");
	var passwordTwo = $("#r-password-two");
	var accountFlag = false;
	var passwordOneFlag = false;
	var passwordTwoFlag = false;
	var rURL = 'http://120.78.51.133:8080/frontdemo/testAdd';
	account.click(function() {
		$(".r-info-one").css("display","block");
		$(".r-info-one").html("请输入1-10位数字或者字母");
	});
	passwordOne.click(function() {
		$(".r-info-two").css("display","block");
		$(".r-info-two").html("密码由6-20位数字或字母组成");
	});
	passwordTwo.click(function() {
		$(".r-info-third").css("display","block");
		$(".r-info-third").html("请再次确认密码");
	});
	//验证账号合法性
	account.blur(function() {
		var nameValue = account.val();
		var nameReg = /^[0-9a-zA-Z]{1,10}$/;
		if(!nameReg.test(nameValue)){
			$(".r-info-one").css({"display":"block","color":"red"});
			$(".r-info-one").html("请输入1-10位数字或者字母");
			accountFlag = false;
			return;
		}else{
			$(".r-info-one").css("display","none");
			accountFlag = true;
		}
	});
	//验证密码合法性
	passwordOne.blur(function() {
		var passwordValue = passwordOne.val();
		var passwordReg = /^[0-9a-zA-Z]{6,20}$/;
		if(!passwordReg.test(passwordValue)){
			$(".r-info-two").css({"display":"block","color":"red"});
			$(".r-info-two").html("请输入6-20位数字或者字母");
			passwordOneFlag = false;
			return;
		}else{
			$(".r-info-two").css("display","none");
			passwordOneFlag = true;
		}
	});
	//验证密码合法性
	passwordTwo.blur(function() {
		var passwordValueTwo = passwordTwo.val();
		if(passwordOne.val()!=passwordTwo.val()){
			$(".r-info-third").css({"display":"block","color":"red"});
			$(".r-info-third").html("密码不一致，请确认后重新输入");
			passwordTwoFlag = false;
			return;
		}else{
			$(".r-info-third").css("display","none");
			passwordTwoFlag = true;
		}
	});
	//登录验证
	$(".r-register").click(function() {
		var flagOne = passwordTwoFlag&&passwordOneFlag;
		var flagTwo = flagOne&&accountFlag;

		var isAgree = $(".r-info input").prop("checked");
		console.log(isAgree);
		//检验是否同意
		if(!isAgree){
			alert("请同意用户协议和隐私政策");
			return;
		}else{
			//验证账号密码格式合法性
			if(flagTwo){
				console.log('账号密码格式正确');
				nameValue = account.val();
				passwordValue = passwordOne.val();
				$.ajax({
					url:rURL,
					type:"post",
					data:{
						name:nameValue,
						password:passwordValue
					},
					dataType:"json",
					success:function (result) {
						if(result.result == "yes"){
							$(".r-content").html('<div class="congratulations"><p>恭喜你注册成功!</p><a href="index.html">返回首页</a></div>')
						}else{
							$(".r-info-one").css({"display":"block","color":"red"});
							$(".r-info-one").html(result.reason);
						}
					}
				});
			}else{
				$(".r-info-one").css({"display":"block","color":"red"});
				$(".r-info-two").css({"display":"block","color":"red"});
				$(".r-info-third").css({"display":"block","color":"red"});
				$(".r-info-one").html("请输入正确的账号或者密码");
				$(".r-info-two").html("请输入正确的账号或者密码");
				$(".r-info-third").html("请输入正确的账号或者密码");

			}
		}
	});
});