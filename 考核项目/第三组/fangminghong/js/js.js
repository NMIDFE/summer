/**
 * 取得id
 */
function getID (id) {
	return document.getElementById(id);
}

/**
 * 二级菜单隐藏弹出功能
 */
function secondMenu () {
	var more = getID("more");
	var second = getID("second-menu");
	var moreColor = more.getElementsByTagName("a");
	more.onmouseover = function () {
		second.style.display = 'block';
		moreColor[0].innerHTML = '更多<i class="iconfont">&#xe60a;</i>';
	};
	second.onmouseover = function () {
		second.style.display = 'block';
		more.style.backgroundColor = '#0c8ed9';
		moreColor[0].style.color = '#fff';
		moreColor[0].innerHTML = '更多<i class="iconfont">&#xe60a;</i>';
	};
	second.onmouseout = function () {
		second.style.display = 'none';
		more.style.backgroundColor = '';
		moreColor[0].style.color = '';
		moreColor[0].innerHTML = '更多<i class="iconfont">&#xe605;</i>';
	};
	more.onmouseout = function () {
		second.style.display = 'none';
		more.style.backgroundColor = '';
		moreColor[0].style.color = '';
		moreColor[0].innerHTML = '更多<i class="iconfont">&#xe605;</i>';
	};
}

/**
 * 导航栏图标变色
 * 鼠标进入改变图标为变色后的图标
 * 鼠标离开图标又还原
 */
function navIcon (argument) {
	var rightUl = getID("right-ul");
	var img = rightUl.getElementsByTagName("img");
	var lis = rightUl.getElementsByTagName("li");
	for(var i=0;i<img.length;i++){
		lis[i].setAttribute("icon", i);
		lis[i].onmouseover = function () {
			var index = this.getAttribute("icon");
			var change = parseInt(index)+4;
			img[index].setAttribute("src", "images/nav"+change+".png");
		};
		lis[i].onmouseout = function () {
			var index = this.getAttribute("icon");
			var change = parseInt(index);
			img[index].setAttribute("src", "images/nav"+change+".png");
		};
	}
}

/**
 * 初始化
 */
function init () {
	secondMenu();
	navIcon();
}
init();