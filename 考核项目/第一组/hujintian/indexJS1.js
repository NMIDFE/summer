var signup = document.getElementsByClassName("signup-submit")[0];
var signin = document.getElementsByClassName("signin-submit")[0];
var account = document.getElementsByClassName("signup-account")[0];
var password = document.getElementsByClassName("signup-password")[0];
var account1 = document.getElementsByClassName("signin-account")[0];
var password1 = document.getElementsByClassName("signin-password")[0];
var signupplace = document.getElementsByClassName("signup-place")[0];
var signinplace = document.getElementsByClassName("signin-place")[0];
var subutton = document.getElementsByClassName("signup")[0];
var sibutton = document.getElementsByClassName("signin")[0];
var mask = document.getElementsByClassName("mask")[0];


function ajax(id,pass) {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET", "http://120.78.51.133:8080/frontdemo/testAdd?name=" + id + "&password=" + pass, false);

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var obj = JSON.parse(xmlhttp.responseText);
            if (obj.result == "yes") {
                alert("恭喜你注册成功");
                signupplace.style.display = "none";
                signinplace.style.display = "block";
            } else {
                alert(obj.reason);
            }
        }
    };
    xmlhttp.send();
}
subutton.onclick = function(){
    signinplace.style.display = "none";
    signupplace.style.display = "block";
}

    function ajax1(id,pass){
        var xmlhttp;
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.open("GET","http://120.78.51.133:8080/frontdemo/testLogin?name="+id+"&password="+pass,false);

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var obj = JSON.parse(xmlhttp.responseText);
                if(obj.result == "yes"){
                    alert("恭喜你登陆成功");
                    signinplace.style.display = "none";
                    sibutton.style.display = "none";
                    subutton.style.display = "none";
                    mask.style.display = "none";
                } else {
                    alert(obj.reason);
                }
            }
        };
        xmlhttp.send();
    }
    signin.onclick = function(){
        ajax1(account1.value,password1.value);
        account1.value = "";
        password1.value = "";
    }
signup.onclick = function(){
    ajax(account.value,password.value);
    account.value = "";
    password.value = "";
}
