window.onload=function(){
	var lun=$("lun1");
	var tops=lun.getElementsByTagName('a');
	var lis=lun.getElementsByTagName('li');
	var LUN=lun.parentNode.parentNode;
    var n=null;
	var loop=0;
	var fix=$("fix");
	var close=$("close");
	var btn1=$("btn1");
	var btn2=$("btn2");
	var Denglu=$("Denglu");
	var sub=$("SUB");
	var zhuce=$("zhuce");
	var denglu=$("denglu");
	var close2=$("close2");
	var back=$("back");
	var back2=$("back2");
	var close3=$("close3");
	var center=zhuce.children[1].children[0].children[0];
	var Center=denglu.children[1].children[0].children[0];
	var Sub=$("btn5");
	var bangbs=document.getElementsByClassName('bangb');
	var ol=document.getElementsByTagName('ol');
	var li1=ol[0].children;
	var li2=ol[1].children;
	var li3=ol[2].children;
	var img1=$("img1");
	var img2=$("img2");
	var img3=$("img3");
	var img4=$("img4");
	var img5=$("img5");
	var img6=$("img6");
	var yichangs=document.getElementsByClassName('yichang');
	var yichangf=yichangs.parentNode;
	var deng=$("deng2");
    var slide=document.getElementsByClassName('slide');
    var iconl=$("iconl");
    var iconr=$("iconr");
    var inow=0;


	console.log(bang);
	console.log(center);
	console.log(bangbs);
	console.log(ol);
	console.log(ol[0].children);
	console.log(yichangf);
	console.log(deng);
    console.log(slide);

    for (var n = 1; n < slide.length; n++) {
        slide[n].style.left="717px";
    }



    iconl.onmousedown=function(){
        buffer(slide[inow],{"left":717});
        inow--;
        if (inow<0) {
            inow=slide.length-1;
        }
        slide[inow].style.left=-717+"px";
        buffer(slide[inow],{"left":40});
    }
    iconr.onmousedown=function(){
        buffer(slide[inow],{"left":-717});
        inow++;
        if (inow>=slide.length) {
            inow=0;
        }
        slide[inow].style.left=717+"px";
        buffer(slide[inow],{"left":40});
    }











    sub.onmouseover=function(){
    	deng.style.display="block";
    }
    sub.onmouseout=function(){
    	deng.style.display="none";
    }


	img1.onmouseover=function(){
		img1.src="bigimg/1.png";
	}
	img1.onmouseout=function(){
		img1.src="bigimg/bofang2.png";
	}
	img2.onmouseover=function(){
		img2.src="bigimg/2.png";
	}
	img2.onmouseout=function(){
		img2.src="bigimg/sochang.png";
	}
	img3.onmouseover=function(){
		img3.src="bigimg/1.png";
	}
	img3.onmouseout=function(){
		img3.src="bigimg/bofang2.png";
	}
	img4.onmouseover=function(){
		img4.src="bigimg/2.png";
	}
	img4.onmouseout=function(){
		img4.src="bigimg/sochang.png";
	}
	img5.onmouseover=function(){
		img5.src="bigimg/1.png";
	}
	img5.onmouseout=function(){
		img5.src="bigimg/bofang2.png";
	}
	img6.onmouseover=function(){
		img6.src="bigimg/2.png";
	}
	img6.onmouseout=function(){
		img6.src="bigimg/sochang.png";
	}


	//排行榜移上显示图片
     	li1[0].onmouseover=function(){
     		bangbs[0].style.display="inline-block";
     	}
     	li1[0].onmouseout=function(){
     		bangbs[0].style.display="none";
     	}
     	li1[1].onmouseover=function(){
     		bangbs[1].style.display="inline-block";
     	}
     	li1[1].onmouseout=function(){
     		bangbs[1].style.display="none";
     	}
     	li1[2].onmouseover=function(){
     		bangbs[2].style.display="inline-block";
     	}
     	li1[2].onmouseout=function(){
     		bangbs[2].style.display="none";
     	}
     	li1[3].onmouseover=function(){
     		bangbs[3].style.display="inline-block";
     	}
     	li1[3].onmouseout=function(){
     		bangbs[3].style.display="none";
     	}
     	li1[4].onmouseover=function(){
     		bangbs[4].style.display="inline-block";
     	}
     	li1[4].onmouseout=function(){
     		bangbs[4].style.display="none";
     	}
     	li1[5].onmouseover=function(){
     		bangbs[5].style.display="inline-block";
     	}
     	li1[5].onmouseout=function(){
     		bangbs[5].style.display="none";
     	}
     	li1[6].onmouseover=function(){
     		bangbs[6].style.display="inline-block";
     	}
     	li1[6].onmouseout=function(){
     		bangbs[6].style.display="none";
     	}
     	li1[7].onmouseover=function(){
     		bangbs[7].style.display="inline-block";
     	}
     	li1[7].onmouseout=function(){
     		bangbs[7].style.display="none";
     	}
     	li1[8].onmouseover=function(){
     		bangbs[8].style.display="inline-block";
     	}
     	li1[8].onmouseout=function(){
     		bangbs[8].style.display="none";
     	}
     	li1[9].onmouseover=function(){
     		bangbs[9].style.display="inline-block";
     	}
     	li1[9].onmouseout=function(){
     		bangbs[9].style.display="none";
     	}



     	li2[0].onmouseover=function(){
     		bangbs[10].style.display="inline-block";
     	}
     	li2[0].onmouseout=function(){
     		bangbs[10].style.display="none";
     	}
     	li2[1].onmouseover=function(){
     		bangbs[11].style.display="inline-block";
     	}
     	li2[1].onmouseout=function(){
     		bangbs[11].style.display="none";
     	}
     	li2[2].onmouseover=function(){
     		bangbs[12].style.display="inline-block";
     	}
     	li2[2].onmouseout=function(){
     		bangbs[12].style.display="none";
     	}
     	li2[3].onmouseover=function(){
     		bangbs[13].style.display="inline-block";
     	}
     	li2[3].onmouseout=function(){
     		bangbs[13].style.display="none";
     	}
     	li2[4].onmouseover=function(){
     		bangbs[14].style.display="inline-block";
     	}
     	li2[4].onmouseout=function(){
     		bangbs[14].style.display="none";
     	}
     	li2[5].onmouseover=function(){
     		bangbs[15].style.display="inline-block";
     	}
     	li2[5].onmouseout=function(){
     		bangbs[15].style.display="none";
     	}
     	li2[6].onmouseover=function(){
     		bangbs[16].style.display="inline-block";
     	}
     	li2[6].onmouseout=function(){
     		bangbs[16].style.display="none";
     	}
     	li2[7].onmouseover=function(){
     		bangbs[17].style.display="inline-block";
     	}
     	li2[7].onmouseout=function(){
     		bangbs[17].style.display="none";
     	}
     	li2[8].onmouseover=function(){
     		bangbs[18].style.display="inline-block";
     	}
     	li2[8].onmouseout=function(){
     		bangbs[18].style.display="none";
     	}
     	li2[9].onmouseover=function(){
     		bangbs[19].style.display="inline-block";
     	}
     	li2[9].onmouseout=function(){
     		bangbs[19].style.display="none";
     	}     	




     	li3[0].onmouseover=function(){
     		bangbs[20].style.display="inline-block";
     	}
     	li3[0].onmouseout=function(){
     		bangbs[20].style.display="none";
     	}
     	li3[1].onmouseover=function(){
     		bangbs[21].style.display="inline-block";
     	}
     	li3[1].onmouseout=function(){
     		bangbs[21].style.display="none";
     	}
     	li3[2].onmouseover=function(){
     		bangbs[22].style.display="inline-block";
     	}
     	li3[2].onmouseout=function(){
     		bangbs[22].style.display="none";
     	}
     	li3[3].onmouseover=function(){
     		bangbs[23].style.display="inline-block";
     	}
     	li3[3].onmouseout=function(){
     		bangbs[23].style.display="none";
     	}
     	li3[4].onmouseover=function(){
     		bangbs[24].style.display="inline-block";
     	}
     	li3[4].onmouseout=function(){
     		bangbs[24].style.display="none";
     	}
     	li3[5].onmouseover=function(){
     		bangbs[25].style.display="inline-block";
     	}
     	li3[5].onmouseout=function(){
     		bangbs[25].style.display="none";
     	}
     	li3[6].onmouseover=function(){
     		bangbs[26].style.display="inline-block";
     	}
     	li3[6].onmouseout=function(){
     		bangbs[26].style.display="none";
     	}
     	li3[7].onmouseover=function(){
     		bangbs[27].style.display="inline-block";
     	}
     	li3[7].onmouseout=function(){
     		bangbs[27].style.display="none";
     	}
     	li3[8].onmouseover=function(){
     		bangbs[28].style.display="inline-block";
     	}
     	li3[8].onmouseout=function(){
     		bangbs[28].style.display="none";
     	}
     	li3[9].onmouseover=function(){
     		bangbs[29].style.display="inline-block";
     	}
     	li3[9].onmouseout=function(){
     		bangbs[29].style.display="none";
     	}

     	




//轮播图
window.setInterval(function(){
	for (var i = 0; i < tops.length; i++) {
		j=i;
	tops[i].style.display="none";
	lis[i].className="";
}
	loop=loop+1;
	loop%=8;
	lis[loop].className="current";
	tops[loop].style.display="block";
	LUN.className="bgc"+loop;
},4000);


    //回到顶部
    window.onscroll=function () {
    	var e=window.pageYOffset;
    	console.log(e);
    	if (e>=100) {
    		fix.style.display="block";
    	}
    	else{
    		fix.style.display="none";
    	}
    }
//登录窗口
    sub.onclick=function(){
    	Denglu.style.display="block"; 
    }
    Sub.onclick=function(){
    	Denglu.style.display="block";
    }
    close.onclick=function(){
    	Denglu.style.display="none";
    }
    btn1.onclick=function(){
    	denglu.style.display="block";
        Denglu.style.display="none";
    }
    btn2.onclick=function(){
        zhuce.style.display="block";
        Denglu.style.display="none";
    }
    close2.onclick=function(){
    	zhuce.style.display="none";
    }
    close3.onclick=function(){
    	denglu.style.display="none";
    }
    back.onclick=function(){
    	zhuce.style.display="none";
        Denglu.style.display="block";
    }
    back2.onclick=function(){
    	denglu.style.display="none";
        Denglu.style.display="block";
    }
//注册功能
var name1=document.getElementById('name');
	var pass1=document.getElementById('password');
	var btn3=document.getElementById('btn3');

	btn3.onclick=function(){
	var name=name1.value;
	var pass=pass1.value;
	ajaxLogin(name,pass);
function ajaxLogin(name,pass){
    var xmlhttp;

    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET", "http://120.78.51.133:8080/frontdemo/testAdd?name=" + name  + "&password=" + pass, false);

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            if (xmlhttp.responseText == "{"+'"result"'+":"+'"yes"'+"}") {
                center.innerHTML = "注册成功,快去登录吧";
            }else{
            	center.innerHTML ="注册失败";
            }
        }
        else{
        	alert(wrong);
        }
    };
    xmlhttp.send();
}
}








//登录
      /* Ajax登录 */
    var name2=document.getElementById('name2');
    var pass2=document.getElementById('password2');
    var btn4=document.getElementById('btn4');


    btn4.onclick=function(){
    var Name=name2.value;
    var Pass=pass2.value;
    ajaxLogin(Name,Pass);


/* Ajax登录 */
function ajaxLogin(name,pass){
    var xmlhttp;

    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET", "http://120.78.51.133:8080/frontdemo/testLogin?name=" + name + "&password=" + pass, false);

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            console.log(xmlhttp.responseText);
            if (xmlhttp.responseText == "{"+'"result"'+":"+'"yes"'+"}") {
                var textArray = xmlhttp.responseText.split("|");
                console.log(textArray);
                Center.innerHTML = "欢迎你!   "+ name ;
                sub.innerHTML = "欢迎你!   "+ name ;
                sub.style.color="#C20C0C";
            }else{
                Center.innerHTML = "账号或密码错误。。。。。";
            }
        }
    };
    xmlhttp.send();
}
}









    
	function $(id){
 	return typeof id==="string"?document.getElementById(id):null;
 }



    function buffer(obj, json){
        clearInterval(obj.timer);
        var begin =0,target=0,speed=0;
        obj.timer=setInterval(function() {
            for (var k in json)

            {


                begin=parseInt(getCss1(obj, k)) || 0;
                target=parseInt(json[k]);
                speed =(target-begin)*0.2;
                speed=(target>begin)?Math.ceil(speed) : Math.floor(speed);
                obj.style[k]=begin+speed+"px";
                if (begin===target) {
                    clearInterval(obj.timer);
                }


            }
        },20)
    }






    function getCss1(curEle, attr) {

           var val = null, reg = null;

           if ("getComputedStyle" in window) {

               val = window.getComputedStyle(curEle, null)[attr];

           } else {

               val = curEle.currentStyle[attr];

           }

           reg = /^(-?\d+(\.\d+)?)(px|pt|rem|em)?$/i;

           return reg.test(val) ? parseFloat(val) : val;

       }




}

