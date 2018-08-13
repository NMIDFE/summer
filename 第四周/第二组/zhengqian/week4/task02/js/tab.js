window.onload = function(){
	//获取元素
    var oBox = document.getElementById("box");
    var aBtn = oBox.getElementsByTagName("input");
    var aDiv = oBox.getElementsByTagName("div");
    //aBtn是一组元素，所以需要用到for循环
    for(var i=0;i<aBtn.length;i++){
        aBtn[i].index=i;
        aBtn[i].onclick=function(){
            for(var k=0;k<aBtn.length;k++){//先清空所有的样式
                aBtn[k].className ='';
                aDiv[k].style.display ='none';
            }
    //给当前的按钮和div添加样式
            this.className ='on';
            aDiv[this.index].style.display ='block';
        };
    }
}