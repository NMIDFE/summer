function $(id){
  return typeof id==='string'?document.getElementById(id):id;
}
window.onload=function(){
  var navs=$('tab-nav').getElementsByTagName('li');
  var divs=$('tab-contain').getElementsByTagName('div');
  // alert(divs.length);
  if(navs.length!=divs.length){
    return;
  }
  for(var i=0;i<navs.length;i++){  //循环遍历onmouseover事件
    navs[i].index=i;
    navs[i].onmouseover=function(){
      for(var j=0;j<navs.length;j++){
        navs[j].className="";  //循环历遍去掉nav样式
        divs[j].style.display="none";  //循环遍历将div隐藏
      }
      this.className="active";  //为当前nav添加样式
      divs[this.index].style.display="block";  //div显示this.index是当前的div
    }
  }
}