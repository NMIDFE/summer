  var zc4 = document.querySelector('.zc4');
  var zhanghao = document.querySelector("#zhanghao");
  var mima = document.querySelector("#mima");
  var zhanghao1 = document.querySelector("#zhanghao1");
  var mima1 = document.querySelector("#mima1");
  var zcjiemian = document.querySelector(".zcjiemian");
  var zc = document.querySelector(".zc");
  var zc7 = document.querySelector(".zc7");
  var denglujiemian = document.querySelector(".denglujiemian");
  var logo1 = document.querySelector(".logo1");
  var logIn = document.querySelector(".logIn");
  var user = document.querySelector(".user");
  var zhemuceng = document.querySelector(".zhemuceng");
  function Ajax(id,pass){
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET","http://120.78.51.133:8080/frontdemo/testAdd?name="+id+"&password="+pass,false);

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          var obj = JSON.parse(xmlhttp.responseText);
          if(obj.result == "yes"){
            alert("恭喜你注册成功");
            zcjiemian.style.display = "none";
            denglujiemian.style.display = "block";
          } else {
            alert(obj.reason);
          }
        }
    };
  xmlhttp.send();
  }
  zc.onclick = function(){
    zhemuceng.style.display = "block";
    zcjiemian.style.display = "block";
  }
  zc4.onclick = function(){
    Ajax(zhanghao.value,mima.value);
    zhanghao.value = "";
    mima.value = "";
  }
  function Ajax1(id,pass){
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
            denglujiemian.style.display = "none";
            logIn.style.display = "none";
            zhemuceng.style.display = "none";
            user.innerHTML = id
          } else {
            alert(obj.reason);
          }
        }
    };
  xmlhttp.send();
  }
  logo1.onclick = function(){
    Ajax1(zhanghao1.value,mima1.value);
    zhanghao1.value = "";
    mima1.value = "";
  }
  zc7.onclick = function(){
    zcjiemian.style.display = "none";
    zhemuceng.style.display = "none";
  }
