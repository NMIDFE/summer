window.onload = function(){
	
//创建XMLHttpRequset对象
	var xhr;
	if(window.XMLHttpRequest){
		xhr=new XMLHttpRequest();
	}
	else{
		xhr= new ActiveObject("Micorosoft.XMLHTTP");
	}
//连接服务器
	xhr.open("get","data.txt","true");
//发送请求
	xhr.send(null);
//处理服务器响应
	xhr.onreadystatechange=function(){
		if(xhr.readyState == 4){
			if(xhr.status == 200 || xhr.status == 0){
				console.log(xhr.responseText);
				document.getElementById('container').innerHTML = xhr.responseText;
			}else{
				alert(xhr.status);
			}
		}
	}
}