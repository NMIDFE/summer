var inputmain = document.getElementById("input-main");
inputmain.onkeyup = function () {
    this.value=this.value.replace(/\D/g,'');
};
//按钮1：左插入
var button = document.getElementsByClassName("button");
var queue = document.getElementById("queue");
button[0].onclick = function () {
    var newnum = document.createElement("span");
    if (inputmain.value=="") {
        alert("请输入数字！")
    }
    else
    {
        if (queue == "") {
            queue.appendChild(newnum);
            newnum.innerHTML = inputmain.value;
        }
        else {
            newnum.innerHTML = inputmain.value;
            queue.insertBefore(newnum, queue.firstChild);
            inputmain.value = "";
        }
    }
};
//按钮2：右插入
button[1].onclick = function () {
    if (inputmain.value=="")
    {
        alert("请输入数字！")
    }
    else {
        var newnum = document.createElement("span");
        queue.appendChild(newnum);
        newnum.innerHTML = inputmain.value;
        inputmain.value = "";
    }
};
//按钮3：左侧出
button[2].onclick = function () {
    var spannum = document.getElementsByTagName("span");
    if (spannum.length==0)
    {
        alert("无效！");
    }
    else
    {
        var delnode = queue.removeChild(queue.childNodes[0]);
        alert(delnode.innerHTML);
    }
};
//按钮4：右侧出
button[3].onclick = function () {
    var spannum = document.getElementsByTagName("span");
    if (spannum.length==0)
    {
        alert("无效！");
    }
    else
    {
        var delnode = queue.removeChild(queue.childNodes[spannum.length-1]);
        alert(delnode.innerHTML);
    }
};
//点击移除

var disappear = document.getElementsByTagName("span");
for (var i=0;i<disappear.length;i++) {
    disappear[i].i=i;
    disappear[i].onclick = function () {
        disappear[i].style.display = "none";
    }
};






