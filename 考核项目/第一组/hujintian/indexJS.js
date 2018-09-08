//注册框
var signup = document.getElementsByClassName("signup")[0];
var signup_place = document.getElementsByClassName("signup-place")[0];
var mask = document.getElementsByClassName("mask")[0];
signup.onclick = function () {
    signup_place.style.display = "block";
    mask.style.display = "block";
}
document.getElementsByClassName("fa fa-times fa-1x")[0].onclick = function () {
    signup_place.style.display = "none";
    mask.style.display = "none";
}
//登录框
var signin = document.getElementsByClassName("signin")[0];
var signin_place = document.getElementsByClassName("signin-place")[0];
signin.onclick = function () {
    signin_place.style.display = "block";
    mask.style.display = "block";
}
document.getElementsByClassName("fa fa-times fa-1x")[1].onclick = function () {
    signin_place.style.display = "none";
    mask.style.display = "none";
}
//登录跳转注册
var skip = document.getElementsByClassName("signin-place-body-bottom")[0];
skip.onclick = function () {
    signin_place.style.display = "none";
    signup_place.style.display = "block";
}

//轮播
var lunbowrap = document.getElementsByClassName("lunbo-wrap")[0];
var placeholder = document.getElementsByClassName("placeholder");
var i=0;
//点击切换
var beforeimg = document.getElementsByClassName("leftbutton")[0];
var nextimg = document.getElementsByClassName("rightbutton")[0];
beforeimg.onclick = function () {
    if (i==0)
    {
        i=6;
        time();
    }
    else
    {
        i-=2;
        time();
    }

}
nextimg.onclick = function(){
    if(i==7)
    {
        i=-1;
        time()
    }
    else
    {
        time();
    }

}
placeholder[0].style.display = "block";
//轮播函数
function time() {
    i++;
    if(i>7)
    {
        i=0;
    }
    placeholder[i].style.display = "block";
    if(i == 0)
    {
        placeholder[1].style.display = "none";
        placeholder[2].style.display = "none";
        placeholder[3].style.display = "none";
        placeholder[4].style.display = "none";
        placeholder[5].style.display = "none";
        placeholder[6].style.display = "none";
        placeholder[7].style.display = "none";
    }
    else if(i == 1)
    {
        placeholder[0].style.display = "none";
        placeholder[2].style.display = "none";
        placeholder[3].style.display = "none";
        placeholder[4].style.display = "none";
        placeholder[5].style.display = "none";
        placeholder[6].style.display = "none";
        placeholder[7].style.display = "none";
    }    else if(i == 2)
    {
        placeholder[0].style.display = "none";
        placeholder[1].style.display = "none";
        placeholder[3].style.display = "none";
        placeholder[4].style.display = "none";
        placeholder[5].style.display = "none";
        placeholder[6].style.display = "none";
        placeholder[7].style.display = "none";
    }    else if(i == 3)
    {
        placeholder[0].style.display = "none";
        placeholder[1].style.display = "none";
        placeholder[2].style.display = "none";
        placeholder[4].style.display = "none";
        placeholder[5].style.display = "none";
        placeholder[6].style.display = "none";
        placeholder[7].style.display = "none";
    }    else if(i == 4)
    {
        placeholder[0].style.display = "none";
        placeholder[2].style.display = "none";
        placeholder[3].style.display = "none";
        placeholder[1].style.display = "none";
        placeholder[5].style.display = "none";
        placeholder[6].style.display = "none";
        placeholder[7].style.display = "none";
    }    else if(i == 5)
    {
        placeholder[0].style.display = "none";
        placeholder[2].style.display = "none";
        placeholder[3].style.display = "none";
        placeholder[4].style.display = "none";
        placeholder[1].style.display = "none";
        placeholder[6].style.display = "none";
        placeholder[7].style.display = "none";
    }    else if(i == 6)
    {
        placeholder[0].style.display = "none";
        placeholder[2].style.display = "none";
        placeholder[3].style.display = "none";
        placeholder[4].style.display = "none";
        placeholder[5].style.display = "none";
        placeholder[1].style.display = "none";
        placeholder[7].style.display = "none";
    }    else if(i == 7)
    {
        placeholder[0].style.display = "none";
        placeholder[2].style.display = "none";
        placeholder[3].style.display = "none";
        placeholder[4].style.display = "none";
        placeholder[5].style.display = "none";
        placeholder[6].style.display = "none";
        placeholder[1].style.display = "none";
    }
    if(i==0){
        lunbowrap.style.backgroundColor = "#F5FAFF";
    }
    else if(i==1)
    {
        lunbowrap.style.backgroundColor = "#121D1F";
    }else if(i==2)
    {
        lunbowrap.style.backgroundColor = "#FD5143";
    }else if(i==3)
    {
        lunbowrap.style.backgroundColor = "#EEECE0";
    }else if(i==4)
    {
        lunbowrap.style.backgroundColor = "#CAD7E1";
    }else if(i==5)
    {
        lunbowrap.style.backgroundColor = "#16151A";
    }else if(i==6)
    {
        lunbowrap.style.backgroundColor = "#2D2559";
    }else if(i==7)
    {
        lunbowrap.style.backgroundColor = "#C8EAF6";
    }
}
var imgloop = setInterval(time,4000);
lunbowrap.onmouseover = function () {
    clearInterval(imgloop);
}
lunbowrap.onmouseout = function () {
    imgloop = setInterval(time,4000);
}
