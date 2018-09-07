var o_login=document.getElementsByClassName("login")[0];
        var o_list=document.getElementById("list");
        o_login.onmouseenter=function(){
            o_list.style.display='block';
       }
       o_list.onmouseleave=function(){
        o_list.style.display='none';
       }

       /*轮播*/
       var count = 0;  //定义图片变更次数
            var FI=null; //存储淡入interval循环
            var timer=null;//存储轮播interval循环
            var fullBox = document.getElementById('container');//用于设置背景颜色
            var pictures=document.getElementsByClassName('pictures');//存储图片
            var arrow=document.getElementsByClassName('arrow');//存储左右箭头
            var button=document.getElementsByClassName('button');//存储下部圆圈
            var percent = 0;//淡入循环变量
            function fadeIn(){//淡入函数
                    FI = setInterval(function (){
                    percent += 0.010000; //精确浮点数精度
                    if(percent>=1){clearInterval(FI);}
                    else{
                        pictures[count].style.opacity=percent;}
                    },10);
                    percent = 0;}
            function pic(){//图像变换函数
                for(var i=0;i<pictures.length;i++){
                  pictures[i].style.opacity=0;};//所有图片透明
                fullBox.style.backgroundColor = pictures[count].id//背景图片颜色等于相应图片的id
                for(var c=0;c<button.length;c++){//底部按钮颜色变化
                    button[c].style.backgroundColor = 'grey';
                };
                button[count].style.backgroundColor='red';    
            }
            
            //主轮播循环
            showtime();
            function showtime(){timer=setInterval(show,4000)};
            function show(){//轮播循环函数
                count ++;
                if(count > pictures.length - 1){
                count = 0;};
                fadeIn();               
                pic();
            }
            
            //左右箭头
            for(var i=0;i<arrow.length;i++){
                arrow[i].onmouseover=function(){
                    clearInterval(timer);
                };
                arrow[i].onmouseout=function(){
                    showtime();
                };
                arrow[i].onclick=function(){
                    if(this.title == 'left'){
                        count--;
                        if(count < 0){count = pictures.length - 1;}
                    }else{
                        count++;
                        if(count>pictures.length - 1){count = 0;}
                    };
                fadeIn();
                pic();
                }
            }
            //底部圆点
            for(var i=0;i<button.length;i++){
                button[i].index = i;
                button[i].onmouseover=function(){
                    clearInterval(timer);
                    count = this.index;//确保count值不会出错
                    fadeIn();
                    pic();
                };
                button[i].onmouseout=function(){showtime()};
                }

    ///
   

   