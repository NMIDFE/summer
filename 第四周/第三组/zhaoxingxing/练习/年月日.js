window.onload = function() {
	showTime();
}
function showTime() {
	var data = document.getElementsByClassName('data')[0];
	var newData = new Date();
	var year = newData.getFullYear();
	var month = newData.getMonth()+1;
	var day = newData.getDate();
	var week = newData.getDay();
	var h = newData.getHours();
	var f = newData.getMinutes();
	var m = newData.getSeconds();
	if (h<10) {
		h = ling(h);
	}
	if (f<10) {
		f = ling(f);
	}
	if (m<10) {
		m = ling(m);
	}
	if (day<10) {
		day = ling(day);
	}
	if (month<10) {
		month = ling(month);
	}
	weekday = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]
	data.innerHTML = year + "年" + month +"月" + day +"日" + weekday[week] + h + ":" + f + ":" + m;
	setTimeout(showTime,500);
}
function ling(x) {
	x = "0" + x;
	return x;
}
