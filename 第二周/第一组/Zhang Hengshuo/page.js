
//滚轮事件监听

    var box=document.getElementById("box");

    var scrollFunc=function(e){
       var direct=0;
       e=e || window.event;

       if(e.wheelDelta > 0){//IE/Opera/Chrome
           box.style.display = "block"
       }else if(e.wheelDelta < 0){
           box.style.display = "none"
       }
       if(e.detail > 0){//Firefox
           box.style.display = "none";
       }else if(e.detail < 0){
           box.style.display = "none"
       }
    }

    //注册滚轮事件
    if(document.addEventListener){
      document.addEventListener('DOMMouseScroll',scrollFunc,false);
    }//W3C
      window.onmousewheel=document.onmousewheel=scrollFunc;//IE/Opera/Chrome/Safari