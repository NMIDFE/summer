// 导航
var show = document.getElementById('root');
var scrollFunc=function(e){   
    e=e || window.event;   
    // 为了实现浏览器兼容????????
    if(e.wheelDelta){//IE/Opera/Chrome   
        if(e.wheelDelta==-120){  
            //向上滚动事件 
			show.style.display = "none";
			disappear(show);
        }else{
			//向下滚动事件
			
			show.style.display = "block";
			showslow(show);    //用笔记本电脑自己配的滑动区域时向上滑动不能出现
		}
	}else if(e.detail){//Firefox 
		 if(e.detail==-3) {
			 //向上滚动事件
			show.style.display = "block";
			showslow(show);
		 }else{
			 //向下滚动事件
			show.style.display = "none";
			disappear(show);
		 }
	} //ScrollText(direct); 
} 
/*注册事件*/   
if(document.addEventListener){ document.addEventListener('DOMMouseScroll',scrollFunc,false);}
window.onmousewheel=document.onmousewheel=scrollFunc;//IE/Opera/Chrome

var t_over,t_leave;
function showslow(show) {
            var h = show.offsetHeight;
            if (h <48) {
            	 h += 1;
                    show.style.height = h + "px";
                    t_over = setTimeout("showslow('" + show + "')", 1000);
                }
            else {
            	return;
            }
           }
// EXPLORE TODAY
// var EXPLORE = document.getElementsByClassName('EXPLORE')[0];
// alert(EXPLORE.offsetTop)
// if(EXPLORE.offsetTop==10){
	
// 	EXPLORE.style.cssText= "background-attachment: fixed;	";
// }



