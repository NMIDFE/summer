//限定城市输入框只能输入汉字
var city = document.getElementById("city-input");
city.onkeyup = function () {
    city.value = city.value.replace(/[^\a-zA-Z\u4E00-\u9FA5]/g,'');
}
city.onafterpaste = function () {
    city.value = city.value.replace(/[^\a-zA-Z\u4E00-\u9FA5]/g,'');
}

//限定空气质量指数输入框只能输入整数
var air = document.getElementById("value-input");
air.onkeyup = function () {
    air.value = air.value.replace(/\D/g,'');
}
air.onafterpaste = function () {
    air.value = air.value.replace(/\D/g,'');
}

//点击后添加到列表中
var addbtn = document.getElementById("add-btn");
var list = document.getElementById("t-body");
addbtn.onclick = function () {
    //检查是否有信息输入
    if (city.value==""||air.value=="")
    {
        alert("请输入完整信息！");
        return;
    }
    //创建表格
    var addtr = document.createElement("tr");
    var addtd = document.createElement("td");
    var addtd1 = document.createElement("td");
    var addtd2 = document.createElement("td");
    //添加表格
    list.appendChild(addtr);
    addtr.appendChild(addtd);
    addtr.appendChild(addtd1);
    addtr.appendChild(addtd2);
    addtd.innerHTML = city.value;
    addtd1.innerHTML = air.value;
    addtd2.innerHTML = "<input type='button' class='delbutton' value='删除' onclick='delrow(this)'>";
    //将输入框内容删除
    city.value = "";
    air.value = "";
}
//删除按钮
function delrow(r) {
    var a = r.parentNode.parentNode.rowIndex;
    document.getElementById("table").deleteRow(a);
}