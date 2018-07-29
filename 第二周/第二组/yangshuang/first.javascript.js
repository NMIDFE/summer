//设置导航滚动到多少再消失(可自己设置)
var fix_length = 200;


// 获取导航节点
var $nav = $('#fix_nav');


// 获取导航节点距离顶部位置
var navTop = $nav.offset().top; 


// 获取导航的高度(包括border)
var navH = $nav.outerHeight();


// 设置初始位置
var winTop_1=0;


// 判断浏览器宽度(可用于自适应是否启用此效果)
var winWidth=$(window).width();




// 判断滚动条


$(window).on('scroll',function(){
// 滚动条距离顶部距离
var winTop_2 = $(window).scrollTop();
//开始浮动，不过不显示
if(winTop_2>navTop && winWidth>980){
$nav.addClass('fixed-nav');
if(winTop_2>winTop_1){
$nav.addClass('fix_sec');
if(winTop_2>fix_length){
$nav.removeClass('fix_sec');
}
}
}else{
$nav.removeClass('fixed-nav');
}
//判断鼠标向上滚动，显示出来
if(winTop_2>winTop_1 && winWidth>980){
$nav.removeClass('fixed-nav-appear');
}else if(winTop_2<winTop_1){
$nav.addClass('fixed-nav-appear');
$nav.removeClass('fix_sec');
}
// 滚动后距离赋值
winTop_1 = $(window).scrollTop();
})
