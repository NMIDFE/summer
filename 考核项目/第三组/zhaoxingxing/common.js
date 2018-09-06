//ajax公共函数
function ajax(obj)
{
	//进行数据初始化
    var method=obj.method.toUpperCase()||'GET';
    var url=obj.url||'';
    var data='';
    var dataType=obj.dataType||'JSON';
    var async=obj.async?true:false;
    var suc=obj.success;
    var fail=obj.fail;
    if(obj.data)
    {
    	var arr=[];
    	for(var key in obj.data)
    	{
    		arr.push(key+'='+obj.data[key])
    	}
    	data=arr.join('&');
    }
    if(data&&method=='GET')
    {
    	url+='?'+data;
    }
    
    //创建ajax对象
    if(window.XMLHttpRequest)
    {
    	var myAjax=new XMLHttpRequest();
    } else {
    	var myAjax=new ActiveXObject('Mcrosoft.XMLHTTP');
    }

    //链接服务器
    if(method=='GET')
    {
    	myAjax.open(method,url, async);
    	myAjax.send(null);
    }
    else if(method=='POST')
    {
    	myAjax.open(method,url,async);
        myAjax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    	myAjax.send(data);
    }

    //设置请求头
    myAjax.onreadystatechange = function() {
    	if(myAjax.readyState==4) {
    		if (myAjax.status==200) {
    			suc&&suc(myAjax.responseText);
    		} else {
                if(fail) {
                    fail&fail(myAjax.status);
                }
            }
    	}
    }
} 

//cookie公共函数
//设置cookie
function setCookie(cname,cvalue,exdays){
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    if(exdays==0) {
        var expires = "expires="+'';
    }
    else {
        var expires = "expires="+d.toGMTString();
    }
    document.cookie = cname+"="+cvalue+"; "+expires;
}
//获取cookie
function getCookie(cname){
    var name = cname + "=";
    var cList = document.cookie.split(';');
    for(var i=0; i<cList.length; i++) {
        var cN = cList[i].trim();
        if (cN.indexOf(name)==0) { return cN.substring(name.length,cN.length); }
    }
    return "";
}
//删除cookie
function delateCookie(cname)
{
    var data=new Date();
    data.setTime(data.getTime()-1);
    var cN=getCookie(cname);
    if(cN!=null) {
        document.cookie=name+'='+cN+";expires="+data+toGMTString();
    }
}

//获取css属性值的公共函数
function getCssValue(element,attr) {
    if(window.getComputedStyle) {
        return window.getComputedStyle(element, false)[attr];
    } else {
        return element.currentStyle(attr);
    }
}

