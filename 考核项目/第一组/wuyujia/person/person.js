$(function(){
	$('.person-head').mouseover(function(){
	$('.person-manu').css('display','block');
	})
	$('.person-manu').mouseleave(function(){
		$('.person-manu').css('display','none');
	})
	$('.left-nav a').click(function(){
		$('.content').css('display','none');
		$($(this).attr('show')).css('display','block');
	})
})
$(function(){
	var user=sessionStorage.getItem('getin-user');
	var password=sessionStorage.getItem('getin-password');
	$('.getIn-user em').text(user);
	$('.getIn-password em').text(password);
	$('.sex em').text(JSON.parse(sessionStorage.getItem('reg_info')).sex=='male'?'男':'女');
})