
/**
 * 由于jQuery使用得不太熟练,本项目jQuery代码写得都比较复杂和臃肿,非常抱歉
 * 
 * 为什么使用jQuery?
 * 1.DOM操作更方便
 * 2.免去for遍历
 * 3.兼容性得到解决
 */




/**
 * 淡入淡出轮播图效果
 */
$(function () {
	var count = 0;
	var timeID;
	function moveRight () {
		count++;
		if(count == 9){
			count = 0;
		}
		$("#banner li").eq(count).fadeIn(1000).siblings('li').fadeOut(1000);
		$(".cursor-main a").eq(count).addClass('active').siblings('a').removeClass('active');
	}
	function moveLeft () {
		count--;
		if(count == -1){
			count = 8;
		}
		$("#banner li").eq(count).fadeIn(1000).siblings('li').fadeOut(1000);
		$(".cursor-main a").eq(count).addClass('active').siblings('a').removeClass('active');
	}
	$("#arrow-right").click(function() {
		moveRight();
	});
	$("#arrow-left").click(function() {
		moveLeft();
	});
	clearInterval(timeID);
	timeID = setInterval(moveRight, 2000);
	var banner = $("#banner");
	banner.mouseenter(function() {
		clearInterval(timeID);
	});
	banner.mouseleave(function() {
		clearInterval(timeID);
		timeID=setInterval(moveRight, 2000);
	});
});


/**
 * 新歌首发切换效果
 */
$(function () {
	var pageLeft = $(".page-left")[0];
	var pageRight = $(".page-right")[0];
	var area = $(".new-songs-content-main").children("div");
	var areaHeader = $(".songs-tab a");
	var index = 0;
	areaHeader.mouseenter(function () {
		$(this).addClass('current').siblings('a').removeClass('current');
		/**
		 * 每次选择某个地区,歌曲列表重置为第一页
		 */
		index = 0;
		arrow ();
		/**
		 * 判断显示那个某个地区,且默认显示第一页歌曲列表
		 */
		if($(areaHeader[0]).hasClass('current')){
			$(area[0]).css("display","block").siblings('div').css("display","none");
			$(".chinese ul").eq(0).css("display","block").siblings('ul').css("display","none");
		}else if($(areaHeader[1]).hasClass('current')){
			$(area[1]).css("display","block").siblings('div').css("display","none");
			$(".western ul").eq(0).css("display","block").siblings('ul').css("display","none");
		}else if($(areaHeader[2]).hasClass('current')){
			$(area[2]).css("display","block").siblings('div').css("display","none");
			$(".korea ul").eq(0).css("display","block").siblings('ul').css("display","none");
		}else{
			$(area[3]).css("display","block").siblings('div').css("display","none");
			$(".japanese ul").eq(0).css("display","block").siblings('ul').css("display","none");
			$(".japanese ul img").css("display","none");
		}
	});
	/**
	 * 箭头改变事件
	 */
	function arrow () {
		if(index == 0){
			$(".page-left").css({
				"backgroundPosition": "0px 0px"
			});
			$(".new-songs-content-switch p").text("1/3");
			$(".page-right").css("backgroundPosition","-13px -14px");
		}else if(index == 1){
			$(".page-left").css({
				"backgroundPosition": "0px -14px"
			});
			$(".new-songs-content-switch p").text("2/3");
			$(".page-right").css("backgroundPosition","-13px -14px");
		}else if (index == 2) {
			$(".page-left").css({
				"backgroundPosition": "0px -14px"
			});
			$(".new-songs-content-switch p").text("3/3");
			$(".page-right").css("backgroundPosition","-13px 0px");
		}
	}
	arrow();
	$(pageRight).click(function () {
		index++;
		if(index == 3){
			index = 2;
		}
		arrow();
		if($(areaHeader[0]).hasClass('current')){
			$(".chinese ul").eq(index).css("display","block").siblings('ul').css("display","none");
		}else if($(areaHeader[1]).hasClass('current')){
			$(".western ul").eq(index).css("display","block").siblings('ul').css("display","none");
		}else if($(areaHeader[2]).hasClass('current')){
			$(".korea ul").eq(index).css("display","block").siblings('ul').css("display","none");
		}else{
			$(".japanese ul").eq(index).css("display","block").siblings('ul').css("display","none");
		}
	});
	$(pageLeft).click(function () {
		index--;
		if(index==-1){
			index = 0;
		}
		arrow();
		if($(areaHeader[0]).hasClass('current')){
			$(".chinese ul").eq(index).css("display","block").siblings('ul').css("display","none");
		}else if($(areaHeader[1]).hasClass('current')){
			$(".western ul").eq(index).css("display","block").siblings('ul').css("display","none");
		}else if($(areaHeader[2]).hasClass('current')){
			$(".korea ul").eq(index).css("display","block").siblings('ul').css("display","none");
		}else{
			$(".japanese ul").eq(index).css("display","block").siblings('ul').css("display","none");
		}
	});
});

/**
 * 热门歌手切换效果
 */
$(function () {
	var index = 0;
	var content = $(".popular-radio-right-content>div");
	var nav = $(".popular-radio-nav a");
	var choice = $(".popular-radio-switch span");
	var singers = $(".popular-radio-right-content>div>div");
	/**
	 * 鼠标进入选择地区
	 */
	nav.mouseenter(function() {
		$(this).addClass('display-current').siblings().removeClass('display-current');
		current();
	});
	function current () {
		if(nav.eq(0).hasClass('display-current')){
			content.eq(0).css("display","block").siblings().css("display","none");
			content.eq(3).css("display","block");
			choice.eq(0).addClass('current-switch').siblings().removeClass('current-switch');
			displaySinger ()
		}else if(nav.eq(1).hasClass('display-current')){
			content.eq(1).css("display","block").siblings().css("display","none");
			content.eq(3).css("display","block");
			choice.eq(0).addClass('current-switch').siblings().removeClass('current-switch');
			displaySinger ()
		}else{
			content.eq(2).css("display","block").siblings().css("display","none");
			content.eq(3).css("display","block");
			choice.eq(0).addClass('current-switch').siblings().removeClass('current-switch');
			displaySinger ()
		}
	}
	current();
	/**
	 * 鼠标进入显示当前地区不同歌手
	 */
	choice.mouseenter(function() {
		$(this).addClass('current-switch').siblings().removeClass('current-switch');
		displaySinger ();
	});
	function displaySinger () {
		if(choice.eq(0).hasClass('current-switch')){
			singers.eq(0).css("display","block").siblings().css("display","none");
			singers.eq(3).css("display","block").siblings().css("display","none");
			singers.eq(6).css("display","block").siblings().css("display","none");
		}else if(choice.eq(1).hasClass('current-switch')){
			singers.eq(1).css("display","block").siblings().css("display","none");
			singers.eq(4).css("display","block").siblings().css("display","none");
			singers.eq(7).css("display","block").siblings().css("display","none");
		}else{
			singers.eq(2).css("display","block").siblings().css("display","none");
			singers.eq(5).css("display","block").siblings().css("display","none");
			singers.eq(8).css("display","block").siblings().css("display","none");
		}
	}
	 displaySinger();
});