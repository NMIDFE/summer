window.onload=function(){


//获取文档中的元素
	var input=$("input");
	var zuor=$("zuor");
	var your=$("your");
	var zuoc=$("zuoc");
	var youc=$("youc");
	var bot=$("bottom");


//入
	zuor.onclick=function(){
		var box=document.createElement("div");
		box.innerHTML=input.value;
		if (Isnum(box.innerHTML)==1) {
		box.className="box";
		bot.insertBefore(box,bot.children[0]);
	}
	else{
		alert("请输入数字");
	}
	}
	your.onclick=function(){
		var box=document.createElement("div");
		box.innerHTML=input.value;
		if (Isnum(box.innerHTML)==1) {
		box.className="box";
		bot.appendChild(box);
	}
	else{
		alert("请输入数字");
	}
	}


//出
zuoc.onclick=function(){
	var divs=bot.getElementsByTagName('div');
	var zhi=divs[0].innerText;
	alert(zhi);
	divs[0].remove();

}
youc.onclick=function(){
	var divs=bot.getElementsByTagName('div');
	var n=divs.length;
	var zhi=divs[n-1].innerText;
	alert(zhi);
	divs[n-1].remove();
}


//点击消失
bot.onmouseover=function(){
var divs=bot.getElementsByTagName('div');
	for (var i = 0; i < divs.length; i++) {
		var a=divs[i];
		a.onclick=function(){
            this.style.display="none";
		}
		}
	}


//调用的一些函数
	function $(id){
		return typeof id==="string"?document.getElementById(id):null;
	}
}
 function Isnum(value)     
{           
        if(value.length!=0){    
        reg=/^(-?\d+)(\.\d+)?$/;     
        if(!reg.test(value)){    
            return 0;  
        }
        else
        {
        	return 1;
        }   
        }    
} 
