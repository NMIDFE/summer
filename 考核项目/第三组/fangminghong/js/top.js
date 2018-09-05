/**
 * 返回顶部
 */

function getScrollTop () {
	var scrollTop = window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;
	return scrollTop;
}
window.onscroll = function  () {
	if(getScrollTop () >450){
		getID("scroll-top").style.display = "block";
	}else{
		getID("scroll-top").style.display = "none";
	}
	if(getScrollTop () >=2300){
		getID("scroll-top").style.bottom = "376px";
	}else{
		getID("scroll-top").style.bottom = "100px";
	}
}