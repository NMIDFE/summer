window.onload=function(){
	//获取id
	var name=$("name");
	var num=$("number");
	var btn=$("btn");
	var tbe=$("tbe")
	
	
	
	btn.onclick=function(){
		//判断数据		
		var namez=name.value;
		var numz=num.value;
		var nam=trim(namez);
		var nu=trim(numz);
        if (Iszheng(nu)==1&&(IsChinese(nam)||IsLetter(nam))) {

        
		//创造一行并赋值
		var tr=document.createElement("tr");
		tr.innerHTML="<td></td>"+"<td></td>"+"<td><button>删除</button></td>";
		tr.children[0].innerHTML=nam;
		tr.children[1].innerHTML=nu;


        //赋值后清掉输入内容
        name.value="";
        num.value="";

        //插入一行，并且最新插入的在最前面
		tbe.insertBefore(tr,tbe.children[1]);

        //实现删除功能
		var btns=tbe.getElementsByTagName('button');
    for (var i = 0; i < btns.length; i++) {
	var a=btns[i];
		a.onclick=function(){
		this.parentNode.parentNode.style.display="none";
}
}
	}
	//输入的格式不对，进行提示，并清掉输入内容
	else{
         alert("对不起，请重新输入!");
        name.value="";
        num.value="";
	}
}



//调用的一些函数
 function $(id){
 	return typeof id==="string"?document.getElementById(id):null;
 }
}



 function Iszheng(value)     
{           
        if(value.length!=0){    
        reg=/^[-+]?\d*$/;     
        if(!reg.test(value)){    
            return 0;  
        }
        else
        {
        	return 1;
        }   
        }    
} 



function IsChinese(value) 
{ 
if(value.length!=0){ 
reg=/^[\u0391-\uFFE5]+$/; 
if(!reg.test(value)){ 
	return 0;
}
    else
   {        	
    return 1;
} 
} 
} 


function IsLetter(value) 
{ 
if(value.length!=0){ 
reg=/^[a-zA-Z]+$/; 
if(!reg.test(value)){ 
	return 0;
}
    else
   {        	
    return 1;
} 
} 
} 

function trim(value){
return value.replace(/(^\s*)|(\s*$)/g, "");
}