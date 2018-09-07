var aleft=document.getElementsByClassName('aleft')[0];var aright=document.getElementsByClassName('aright')[0];
var ul1=document.getElementsByClassName('ul1')[0];var ul2=document.getElementsByClassName('ul2')[0];
aleft.onclick=function(){
    if(parseInt(ul1.style.left)>=0){
        ul1.style.left=parseInt(ul1.style.left)-650+"px";//biamwei fu
        ul2.style.left=parseInt(ul2.style.left)-650+"px";//bianwei 0
    }
    else{
        ul1.style.left=parseInt(ul1.style.left)+650+"px";
        ul2.style.left=parseInt(ul2.style.left)+650+"px";
    }
}
aright.onclick=function(){
    if(parseInt(ul1.style.left)<0){
        ul1.style.left=parseInt(ul1.style.left)+650+"px";//biamwei fu
        ul2.style.left=parseInt(ul2.style.left)+650+"px";//bianwei 0
    }
    else{
        ul1.style.left=parseInt(ul1.style.left)-650+"px";//biamwei fu
        ul2.style.left=parseInt(ul2.style.left)-650+"px";//bianwei 0
    }
}


var a_li=document.getElementById('main').getElementsByTagName("li");
var a_bangb=document.getElementsByClassName('bangb');
for(var i=0;i<=a_li.length;i++){
    a_li[i].index=i;
    a_li[i].onmouseover=function(){
        console.log(this.index);
        a_bangb[this.index].style.display="block";
    }
    a_li[i].onmouseout=function(){
        console.log(this.index);
        a_bangb[this.index].style.display="none";
    }
}