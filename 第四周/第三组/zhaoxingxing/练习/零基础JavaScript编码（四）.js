window.onload = function() {
	var addBtn = document.getElementById('add-btn');
	var aqiCityInput = document.getElementById('aqi-city-input');
	var aqiValueInput = document.getElementById('aqi-value-input');
	
	addBtn.addEventListener('click',getData);
	function getData() {
		var aqiTable = document.getElementById('aqi-table');
		var tr = document.createElement("tr");
		aqiTable.appendChild(tr);
		var trT = aqiTable.getElementsByTagName('tr');
		var td = document.createElement("td");
		for(var i=0;i<3;i++){
			var td = document.createElement("td");
			trT[0].appendChild(td);
		}
		var tdT = trT[0].getElementsByTagName('td');
		tdT[0].innerHTML = "城市";
		tdT[1].innerHTML = "空气质量";
		tdT[2].innerHTML = "操作";

		var city = aqiCityInput.value;
		var value = aqiValueInput.value;
		var reg = /^[a-zA-Z]$/;// 这里是 正则表达式，大小写英文字母都可以
		var ch = /^[\u4E00-\u9FA5]$/;
		if (reg.test(city) == true && ch.test(city) == true) {
		alert("请输入中英文字符");
		return;
		}
		else {
			city = filterspace();
			function filterspace(){
			return city.replace(/^\s+/,"").replace(/\s+$/,"");
				}
			}
		if(typeof value !== 'number' && value%1 !== 0 || value == "") {
			alert("请输入整数");
			return;
		}
		else {
			value = filterspace();
			function filterspace(){
			return value.replace(/^\s+/,"").replace(/\s+$/,"");
				}
			}
		var tr = document.createElement("tr");
		var aqiTable = document.getElementById('aqi-table');
		aqiTable.appendChild(tr);
		
		var trT = aqiTable.getElementsByTagName('tr');
		var m = trT.length-1;
		for(var i=0;i<3;i++) {
			var td = document.createElement("td");
			trT[m].appendChild(td);
		}
		var td = trT[m].getElementsByTagName('td');
		td[0].innerHTML = city;
		td[1].innerHTML = value;
		td[2].innerHTML = "删除";
		changetr = aqiTable.getElementsByTagName('tr');
		var m = changetr.length;
		alert(m)
		for(var i = 0;i<m;i++) {
			var changetb = changetr[i].getElementsByTagName('td');
			changetb[2].onclick = function () {
				changetr.splice(i,1);
			}
		}
	}
	
}