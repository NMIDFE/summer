/**
 * list 点击隐藏和打开效果
 */
$(function () {
	var flagOne = true;
	var flagTwo = true;
	var flagThird = true;
	$("#list-one").click(function() {
		if(flagOne){
			$(this).next().slideUp();
			var $i= $(this).children()[1];
			$($i).html('&#xe605;');
			flagOne = false;
		}else{
			$(this).next().slideDown();
			var $i= $(this).children()[1];
			$($i).html('&#xe60a;');
			flagOne = true;
		}
	});
	$("#list-two").click(function() {
		if(flagTwo){
			$(this).next().slideUp();
			var $i= $(this).children()[1];
			$($i).html('&#xe605;');
			flagTwo = false;
		}else{
			$(this).next().slideDown();
			var $i= $(this).children()[1];
			$($i).html('&#xe60a;');
			flagTwo = true;
		}
	});
	$("#list-third").click(function() {
		if(flagThird){
			$(this).next().slideUp();
			var $i= $(this).children()[1];
			$($i).html('&#xe605;');
			flagThird = false;
		}else{
			$(this).next().slideDown();
			var $i= $(this).children()[1];
			$($i).html('&#xe60a;');
			flagThird = true;
		}
	});
});


/**
 * 全选效果
 */

function allChecked () {
	var allCheck = $(".all-check");
	var inputCheck = $(".list-right-content ul li input");
	allCheck.click(function() {
		inputCheck.prop("checked",$(this).prop("checked"));
	});
	inputCheck.click(function() {
		var checkedLength = $(".list-right-content ul li input:checked").length;
		var inputLength = $(".list-right-content ul li input").length;
		if(checkedLength == inputLength){
			allCheck.prop("checked",true);
		}else{
			allCheck.prop("checked",false);
		}
	});
}

/**
 * 点击切换内容效果
 */
$(function () {
	var index = 0;
	var listOne = $(".list-content-one li");
	var listTwo = $(".list-content-two li");
	var listThird = $(".list-content-third li");
	allChecked ();
	listOne.click(function() {
		$(this).addClass('current-list-p').siblings('li').removeClass('current-list-p');
		index = parseInt($(this).index());
		$(".list-content-two li").removeClass('current-list-p');
		$(".list-content-third li").removeClass('current-list-p');
		needDisplay();
		allChecked ();
	});
	listTwo.click(function() {
		$(this).addClass('current-list-p').siblings('li').removeClass('current-list-p');
		index = $(this).index() + 17;
		$(".list-content-one li").removeClass('current-list-p');
		$(".list-content-third li").removeClass('current-list-p');
		needDisplay();
		allChecked ();
	});
	listThird.click(function() {
		$(this).addClass('current-list-p').siblings('li').removeClass('current-list-p');
		index = $(this).index() + 24;
		$(".list-content-two li").removeClass('current-list-p');
		$(".list-content-one li").removeClass('current-list-p');
		needDisplay();
		allChecked ();
	});

	/**
	 * 
	 * 此函数为点击某个榜单显示其特定内容
	 *
	 *
	 * 
	 * BUG笔记
	 * 为何此处直接使用
	 * $(".list-right>div").eq(index).addClass().... 无效?
	 */
	function needDisplay () {
		$($(".list-right").children()[index]).addClass('current-display').siblings().removeClass('current-display');
	}
});

