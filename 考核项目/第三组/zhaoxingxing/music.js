var lunBo = document.getElementsByClassName("lun-bo")[0];
var li = lunBo.getElementsByTagName("li");
var pre = document.getElementsByClassName("pre")[0];
var next = document.getElementsByClassName("next")[0];
var btn = document.getElementsByClassName("btn")[0];
var div = btn.getElementsByTagName("div");
var i = 0;
pre.onclick = function() {
	if (i == 0) {
		li[i].style.display = "none";
		li[li.length-1].style.display = "block";
		i = li.length-1;
		return;
	}
	li[i].style.display = "none";
	li[i-1].style.display = "block";
	i = i-1;
	}
next.onclick = function() {
	if (i == li.length-1) {
		li[i].style.display = "none";
		li[0].style.display = "block";
		i = 0;
		return;
	}
	li[i].style.display = "none";
	li[i+1].style.display = "block";
	i = i+1;
}
for (let m = 0; m < div.length; m++) {
	div[m].onclick = function() {
		console.log(m)
		if (m == i) {
			return;
		}
		else {
			for(var j = 0; j < div.length; j++){
				div[j].style.background = "#ccc";
			}
			div[m].style.background = "red";
			li[i].style.display = "none";
			li[m].style.display = "block";
			i = m;
		}
	}
}
function play() {
	setTimeout(function() {
		next.onclick();
		play();
		for(var j = 0; j < div.length; j++){
			div[j].style.background = "#ccc";
		}
		div[i].style.background = "red";
	},3000);
}
play();


var haLeft = document.getElementsByClassName("ha-left")[0];
var haRight = document.getElementsByClassName("ha-right")[0];
var all = document.getElementsByClassName("alll")[0];
var changeLeft = -734;
var time = 20;
var road = 694;
var speed = road/time;
var reg = true;
haRight.onclick = function() {
	if (changeLeft <= -1428) {
		changeLeft = -40;
		all.style.left = changeLeft + "px";
	}
	if (reg == true) {
		var m = changeLeft;
		reg = false;
		function go() {
			if (changeLeft > m-694) {
				changeLeft = changeLeft - speed;
				all.style.left = changeLeft + "px";
			}
			else {
				reg = true;
				return;
			}
			setTimeout(go, time);
		}
		go();
	}
	else {
		return;
	}
 }
haLeft.onclick = function() {
 	if (changeLeft >= -734) {
		changeLeft = -2122;
		all.style.left = changeLeft + "px";
	}
	if (reg == true) {
		var m = changeLeft;
		reg = false;
		function go() {
			if (changeLeft < m+694) {
				changeLeft = changeLeft + speed;
				all.style.left = changeLeft + "px";
			}
			else {
				reg = true;
				return;
			}
			setTimeout(go, time);
		}
		go();
	}
	else {
		return;
	}
 }


var leading = document.getElementsByClassName("leading")[0];
var firstLogin = document.getElementsByClassName("login")[0];
var loginZhu = document.getElementsByClassName("login-or-zhu")[0];
var logIn = loginZhu.getElementsByClassName("login-in")[0];
var signIn = loginZhu.getElementsByClassName("sign-in")[0];
var arrLogIn = document.getElementsByClassName("logIn");
var x = document.getElementsByClassName("x");
var elseing = document.getElementsByClassName("elseing")[0];
for (var i = 0; i < x.length; i++) {
	x[i].onclick = function() {
		loginZhu.style.display = "none";
		arrLogIn[0].style.display = "none";
		arrLogIn[1].style.display = "none";
	}
}
firstLogin.onclick = function() {
	loginZhu.style.display = "block";
	arrLogIn[0].style.display = "none";
	arrLogIn[1].style.display = "none";
}
signIn.onclick = function() {
	arrLogIn[1].style.display = "block";
	loginZhu.style.display = "none";
	arrLogIn[0].style.display = "none";
}
logIn.onclick = function() {
	arrLogIn[0].style.display = "block";
	loginZhu.style.display = "none";
	arrLogIn[1].style.display = "none";
}
elseing.onclick = function() {
	arrLogIn[1].style.display = "block";
	loginZhu.style.display = "none";
	arrLogIn[0].style.display = "none";
}
for (var i = 0; i < arrLogIn.length; i++) {
	arrLogIn[i].getElementsByClassName("else")[0].onclick = function() {
		loginZhu.style.display = "block";
		arrLogIn[0].style.display = "none";
		arrLogIn[1].style.display = "none";
	}
}

var realSign = document.getElementsByClassName("realSign")[0];
var realLogin = document.getElementsByClassName("realLogin")[0];
realSign.onclick = function() {
	ajax({
		method: 'POST',
		url: 'http://120.78.51.133:8080/frontdemo/testAdd',
		data: {
			name: document.getElementById("sign-number").value,
			password: document.getElementById("sign-password").value,
		},
		async: true,
		dataType: 'JSON',
		success:function(data) {
			var data = JSON.parse(data);
			if (data.result == "yes") {
				alert("注册成功");
				arrLogIn[0].style.display = "block";
				loginZhu.style.display = "none";
				arrLogIn[1].style.display = "none";
			}
			else {
				alert(data.reason);
			}
		},
		fail:function(data) {
			alert("请检查你的网络设置！");
		}
	})
}
realLogin.onclick = function() {
	ajax({
		method: 'POST',
		url: 'http://120.78.51.133:8080/frontdemo/testLogin',
		data: {
			name: document.getElementById("login-number").value,
			password: document.getElementById("login-password").value,
		},
		async: true,
		dataType: 'JSON',
		success:function(data) {
			var data = JSON.parse(data);
			if (data.result == "yes") {
				alert("登录成功");
				arrLogIn[0].style.display = "none";
			}
			else {
				alert(data.reason);
			}
		},
		fail:function(data) {
			alert("请检查你的网络设置！");
		}
	})
}