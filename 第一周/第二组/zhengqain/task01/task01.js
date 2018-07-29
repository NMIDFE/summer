$(document).ready(function(){
	//关闭
	$('#close').click(function(){
		$('.wrapForm').toggle(1000);
	})

	//找回密码
	$('#findSecret').click(function(){
		$('#myLoginForm').hide();
		$('#findSecrectForm').show();
	})
})