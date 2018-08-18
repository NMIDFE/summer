/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
 var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
 var table = document.getElementById("aqi-table");
 function addAqiData() {
 	var city = document.getElementById("aqi-city-input").value.trim();
 	var aqi = document.getElementById("aqi-value-input").value.trim();
 	var regCity = /^[\u4E00-\u9FA5a-zA-Z]+$/;
 	var regNum = /^[\d]+$/;
 	if(!regCity.test(city)){
 		alert("请输入城市名必须为中英文字符!");
 		return;
 	}
 	if(!regNum.test(aqi)){
 		alert("请输入空气质量指数必须为整数!");
 		return;
 	}
 	aqiData[city] = aqi;
 }

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
	table.innerHTML = '';
	table.innerHTML = "<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
	for(var city in aqiData){
		var tr = document.createElement("tr");
		var td1 = document.createElement("td");
		var td2 = document.createElement("td");
		var td3 = document.createElement("td");
		var text1 = document.createTextNode(city);
		var text2 = document.createTextNode(aqiData[city]);
		td1.appendChild(text1);
		tr.appendChild(td1);
		td2.appendChild(text2);
		tr.appendChild(td2);
		td3.innerHTML = "<td><button id='del-btn'>删除</button></td>";
		tr.appendChild(td3);
		table.appendChild(tr);
	}
}
/**
 * 取得标签内容
 */
function getInnerText(element){
	if(element.textContent){
		return element.textContent;
	}else{
		return element.innerText;
	}
}
/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
	addAqiData();
	renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(element) {
  	// do sth.
  	var delElement = element.parentElement.parentElement;
  	delete aqiData[getInnerText(delElement.children[0])];
	renderAqiList();
}
/**
 * 绑定事件
 */
function addEvent (element,type,fn) {
	if(element.addEventListener){
		element.addEventListener(type, fn, false);
	}else if(element.attachEvent){
		element.attachEvent("on"+type,fn);
	}else{
		element["on"+type] = fn;
	}
}

function init() {
	// 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
	var addBtn = document.getElementById("add-btn");
	addBtn.onclick = function () {
		addBtnHandle();
	};
	// 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
	addEvent(table,"click",function (e) {
		e = e||window.event;
		target=e.target||e.srcElement;
		if(target && target.nodeName =="BUTTON"){
			delBtnHandle(target);
		}
	});
}

init();
