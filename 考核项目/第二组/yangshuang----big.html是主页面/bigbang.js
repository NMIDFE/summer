window.onload=function(){
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
	var deng=$("deng2");




    var tr=document.querySelectorAll("tr");
    var now=0;

    


    console.log(tr);
    for (var i = 1; i < tr.length; i++) {
         var td=new Array();
         var tz=new Array();
         td[now]=tr[i].children[2];
         tz[now]=td[now].innerHTML;
         console.log(td[now].innerHTML);
         console.log(tz[now]);
         console.log(i);
         console.log(td);
         console.log(td[now]);
    td[now].onmouseover=function(){
        var tu=document.createElement("img");
        tu.src="bigbangimg/tu.png";
        console.log(tu);
        this.innerHTML="<img src=bigbangimg/tu.png>";
        console.log(this);
    }
    now++;
}
for (var i = 1; i <100; i++) {
    console.log(td[now]);
    td[now].onmouseout=function(){
        this.innerHTML=tz[now];
    }
    now++;
}



    sub.onmouseover=function(){
    	deng.style.display="block";
    }
    sub.onmouseout=function(){
    	deng.style.display="none";
    }


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
}

