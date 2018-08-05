 /*header显示隐藏*/
       var a_he=document.querySelector('.header').querySelector('ul').querySelectorAll('a');
       var a_Blog=document.querySelector('.header').querySelector('.Blog');
       var a_Portfolio=document.querySelector('.header').querySelector('.Portfolio');
       var a_About=document.querySelector('.header').querySelector('.About');
       /*for(var i=0 ;i<6;i++){
           console.log(a_he[i]);
       }*/
       a_he[2].onmouseenter=function(){
        a_Blog.style.display='block';
       }
       a_Blog.onmouseleave=function(){
        a_Blog.style.display='none';
       }
       a_he[3].onmouseenter=function(){
        a_Portfolio.style.display='block';
       }
       a_Portfolio.onmouseleave=function(){
        a_Portfolio.style.display='none';
       }
       a_he[5].onmouseenter=function(){
        a_About.style.display='block';
       }
       a_About.onmouseleave=function(){
        a_About.style.display='none';
       }
       /*轮播*/
       var a_points=document.querySelector('.fir').querySelector('.points').querySelectorAll('li');
       //console.log(a_points);
       var o_con=document.querySelector('.fir').querySelector('.con');
       var o_left=document.querySelector(".fir").querySelector(".contrl").querySelector(".left");
       var o_right=document.querySelector(".fir").querySelector(".contrl").querySelector(".right");
       
            /*通过点击a_left and right控制points的移动*/
       function jd(){
            for(var i=0;i<a_points.length;i++){
                a_points[i].style.border="solid 1px #858585";
            }
            switch(parseInt(o_con.style.left)){
           
                case 0:
                    a_points[0].style.border="solid 1px black";
                    break;
                case -960:
                    a_points[1].style.border="solid 1px black";
                    break;
                case -1920:
                    a_points[2].style.border="solid 1px black";
                    break;
                case -2880:
                    a_points[3].style.border="solid 1px black";
                    break; 
            }
       }

       function next_r() {
            if (parseInt(o_con.style.left) <= -2880) {
                o_con.style.left = 0 + 'px';
            }
            else {
                o_con.style.left = parseInt(o_con.style.left) - 960 + 'px';
            }
            jd();
        }
        var timer = null;
        function autoPlay() {
            timer = setInterval(function () {
                next_r();
            }, 3000);
        }
        autoPlay();

         var container = document.querySelector('.fir').querySelector('.contrl');
            container.onmouseenter = function () {
                clearInterval(timer);
        }
            container.onmouseleave = function () {
            autoPlay();  
        }
       for(var i=0;i<a_points.length;i++){
        a_points[i].index=i;
        a_points[i].onclick=function(){
            for(var j=0;j<a_points.length;j++){
                a_points[j].style.border="solid 1px #858585";
            }
            this.style.border="solid 1px black";
            switch(this.index){
                case 0:
                    o_con.style.left=0+'px';
                    break;
                case 1:
                    o_con.style.left=-960+'px';
                    break;
                case 2:
                    o_con.style.left=-1920+'px';
                    break;
                case 3:
                    o_con.style.left=-2880+'px';
                    break;
                
            }
            //console.log(this.index);
        }
       }
       o_left.onclick=function(){
        if(parseInt(o_con.style.left)>=0){
            o_con.style.left=-2880+'px';
            
           }
        else {
            o_con.style.left=parseInt(o_con.style.left)+960+'px';
        }
        jd();
       }
       o_right.onclick=function(){
            next_r();
        }
       
       /*移动鼠标特效*/
       var thi=document.querySelector('.sec');
       //console.log(thi);
        var a_box=document.querySelector('.sec').querySelectorAll('.box');
        var a_mm=document.querySelector('.sec').querySelectorAll('a');
        //console.log(a_mm);
        for(var i=0;i<a_box.length;i++){
            a_box[i].index=i;
            a_box[i].onmouseover=function(){
                for(var j=0;j<a_box.length;j++){
                a_box[j].style.opacity='0.3';
                a_mm[j].style.color='black';
            }
                this.style.opacity='1';
                a_mm[this.index].style.color='#1a7490';
            }
            a_box[i].onmouseout=function(){
                for(var j=0;j<a_box.length;j++){
                    a_box[j].style.opacity='1';}
            }
        }
        
       
       /*点击特效*/
       var a_a=document.getElementsByClassName('thi')[0].getElementsByClassName('left')[0].getElementsByTagName('a');
       var a_ri=document.getElementsByClassName('thi')[0].getElementsByClassName('right');
       for(var i=0;i<a_a.length;i++){
        a_a[i].index=i;
        a_a[i].onclick=function(){
            for(var j=0;j<a_a.length;j++){
                a_a[j].style.background="";
                a_ri[j].style.display="none";
               }
            this.style.background="grey";
            a_ri[this.index].style.display="block";
           }
       }