$(function(){
	$('.sign-in').click(function(){
		$('#sign-in').modal('show');
	})
	$('.tel').blur(function(){
		var tel=$(this).val();
		if(tel.length==0){
			$(this).parents('td').siblings('td').eq(1).attr('hidden',false);
			$(this).parents('td').siblings('td').eq(1).css('color','lightcoral');
		}else if(!(/^1[3|4|5|8|7][0-9]\d{4,8}$/.test(tel))){
			$(this).parents('td').siblings('td').eq(1).attr('hidden',false);
			$(this).parents('td').siblings('td').eq(1).text('请输入正确的手机号码');
			$(this).parents('td').siblings('td').eq(1).css('color','lightcoral');
		}else{
			$(this).parents('td').siblings('td').eq(1).attr('hidden',true);
			$(this).parents('td').siblings('td').eq(1).css('color','black');
			$('.sendCode').attr('disabled',false);
			
		}
	})
	$('.password').blur(function(){
		var password=$(this).val();
		if(password.length<=4){
			$(this).parents('td').siblings('td').eq(1).attr('hidden',false);
			$(this).parents('td').siblings('td').eq(1).text('请输入6-16位数字或字符密码');
			$(this).parents('td').siblings('td').eq(1).css('color','lightcoral');
		}else{
			$(this).parents('td').siblings('td').eq(1).attr('hidden',true);
			$(this).parents('td').siblings('td').eq(1).css('color','black');
		}
	})
	$('.repassword').blur(function(){
		if($(this).val()!=$('.password').val()){
			$(this).parents('td').siblings('td').eq(1).attr('hidden',false);
			$(this).parents('td').siblings('td').eq(1).text('密码不相同，请重新输入');
			$(this).parents('td').siblings('td').eq(1).css('color','lightcoral');
		}else if($(this).val()==''){
			$(this).parents('td').siblings('td').eq(1).attr('hidden',false);
			$(this).parents('td').siblings('td').eq(1).text('密码不能为空，请重新输入');
			$(this).parents('td').siblings('td').eq(1).css('color','lightcoral');
		}else{
			$(this).parents('td').siblings('td').eq(1).attr('hidden',true);
			$(this).parents('td').siblings('td').eq(1).css('color','black');
		}
	})
	$('.getin-submit').click(function(){
		var user=$('.getIn-user input').val();
		var password=$('.getIn-password input').val();
		if(user==''||password==''){
			alert('请输入完整');
			return;
		}
		$.ajax({
			type:"post",
			url:"http://120.78.51.133:8080/frontdemo/testLogin",
			async:true,
			data:{
				'name':user,
				'password':password
			},
			success:function(res){
				if(res.result=='yes'){
					sessionStorage.setItem('getin-user',user);
					sessionStorage.setItem('getin-password',password);
					location.href='../person/index.html';
				}else{
					alert(res.reason);
				}
			}
		});
	})
	$('.reg-submit').click(function(){
		var inputs=$('.reg-form form input');
		var obj={};
		$.each(inputs, function() {
			obj[this.name]=this.value;
		});
		sessionStorage.setItem('reg_info',JSON.stringify(obj));
		console.log(sessionStorage['reg_info']);
		$.ajax({
			type:"post",
			url:"http://120.78.51.133:8080/frontdemo/testAdd",
			async:true,
			data:{
				'name':obj.user_name,
				'password':obj.password
			},
			success:function(res){
				if(res.result=='yes'){
					alert('注册成功'+'用户名是:'+obj.user_name+'密码是:'+obj.password);
					$('#sign-in').modal('show');
				}else{
					alert(res.reason);
				}
			}
		})
	})
})