function erweimaoutput() {
        document.getElementsByClassName("erweima")[0].style.display = "block";
}
function erweimaoutput1() {
    document.getElementsByClassName("erweima")[0].style.display = "none";
}
//触发close顶栏消失事件
function close() {
    document.getElementById("header").style.display = "none";
    document.getElementById("middle").style.marginTop = 0;
}
document.getElementsByClassName("fa fa-close fa-2x")[0].onclick = close;
/*twitter图标*/
document.getElementsByClassName("fa fa-twitter-square")[0].onclick = twitter;
document.getElementsByClassName("fa fa-twitter-square")[1].onclick = twitter;
document.getElementsByClassName("fa fa-twitter-square")[2].onclick = twitter;
    function twitter() {
        window.open("http://www.twitter.com");
    }
function appear() {
    document.getElementsByClassName("overview")[0].style.display = "block";
}
function disappear() {
    document.getElementsByClassName("overview")[0].style.display = "none";
}
function appear1() {
    document.getElementsByClassName("overview")[1].style.display = "block";
}
function disappear1() {
    document.getElementsByClassName("overview")[1].style.display = "none";
}
function appear2() {
    document.getElementsByClassName("overview")[2].style.display = "block";
}
function disappear2() {
    document.getElementsByClassName("overview")[2].style.display = "none";
}
function appear3() {
    document.getElementsByClassName("overview")[3].style.display = "block";
}
function disappear3() {
    document.getElementsByClassName("overview")[3].style.display = "none";
}
/*轮播*/
var timer=setInterval("hello()",4000);
var mylist=document.getElementById("mylist");
var num=document.getElementById("mylist").getElementsByTagName("li");
var now=0;
var left=0;
function hello(){
    // body...
    // document.write("ddd"+now);
    if (left<=-(num.length-1)*940) {
        now=0;
        left=-now*940;
        mylist.style.marginLeft=left+"px";
        now=now+1;
    }else{
        left=-now*940;
        mylist.style.marginLeft=left+"px";
        now=now+1;
    };

}
//移动的位置
function toCover(now1){
    now=now1;
    left=-now*940;
    mylist.style.marginLeft=left+"px";
    clearInterval(timer);

}
var numli=document.getElementById("underNum").getElementsByTagName("li");
for (var i = 0; i <=numli.length - 1; i++) {
    numli[i].index=i;
    numli[i].onmouseover=function(){
        //alert(this.index);
        toCover(this.index);
    };
    numli[i].onmouseout=function(){
        //alert(this.index);
        timer=setInterval("hello()",1000);
    };
};