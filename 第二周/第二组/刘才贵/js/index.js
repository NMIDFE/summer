 /*隐藏导航*/
    document.body.onmousewheel = function (event) {
    var nav=document.getElementsByClassName("nav")[0];
    
    event = event || window.event;
    direction = event.wheelDelta && (event.wheelDelta > 0 ? "mouseup" : "mousedown");
    if(direction==="mouseup"){
        nav.style.display="block";
        showslow(nav);
    }
    if(direction==="mousedown"){
        nav.style.display="none";
    }
    };
    /*改变图片*/
       document.getElementById('user').onmouseover=function(){
            this.src="./images/用户2.png";
       };
       document.getElementById('user').onmouseout=function(){
            this.src="./images/用户.png";
       };
    /*轮播*/
    var a_swiper=document.getElementsByClassName('swiper')[0];
        document.getElementById('a-left').onclick=function(){
           if(parseInt(a_swiper.style.left)>=0){
            a_swiper.style.left=parseInt(a_swiper.style.left)-900+'px';
           }
        };
        document.getElementById('a-right').onclick=function(){
           if(parseInt(a_swiper.style.left)<0){
            a_swiper.style.left=parseInt(a_swiper.style.left)+900+'px';
           }
        };
    /*背景图片放大*/
    
    document.getElementsByClassName('th1')[0].onmouseover=function(){
           document.getElementsByClassName('th1')[0].getElementsByTagName('img')[0].style.transform='scale(1.1)';
        };
        document.getElementsByClassName('th1')[0].onmouseout=function(){
            document.getElementsByClassName('th1')[0].getElementsByTagName('img')[0].style.transform='';
        };
        document.getElementsByClassName('th2')[0].onmouseover=function(){
           document.getElementsByClassName('th2')[0].getElementsByTagName('img')[0].style.transform='scale(1.1)';
        };
        document.getElementsByClassName('th2')[0].onmouseout=function(){
            document.getElementsByClassName('th2')[0].getElementsByTagName('img')[0].style.transform='';
        };

        var a_top=document.getElementsByClassName('first')[0].getElementsByClassName('top')[0];
        a_top.onmouseover=function(){
            a_top.getElementsByTagName('img')[0].style.transform='scale(1.1)';
        };
        a_top.onmouseout=function(){
            a_top.getElementsByTagName('img')[0].style.transform='';
        };

        var a_top2=document.getElementsByClassName('thi')[0].getElementsByClassName('top')[0];
        a_top2.onmouseover=function(){
            a_top2.getElementsByTagName('img')[0].style.transform='scale(1.1)';
        };
        a_top2.onmouseout=function(){
            a_top2.getElementsByTagName('img')[0].style.transform='';
        };
         /*根据滚轮位置改变样式*/
         var z_from=document.getElementsByClassName('from')[0];
         window.onscroll=function(){
             
         console.log(window.scrollY);
            if(window.scrollY>5298){
                z_from.style = '';
            }
            if(window.scrollY < 5298){
                z_from.style = '';
            }
        }