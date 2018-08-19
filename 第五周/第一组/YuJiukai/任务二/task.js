/*
*	数据存储
*/
var apiData = [11,11,12,13,14,15];
var input = document.getElementById("input_word");
/*
*	读取表单,并验证
*/

function getInput(){
	var input_word = input.value;
	if(!/^\s*\d+\s*$/.test(input_word)){
		alert("请输入正整数数字!");
		input.focus();
		return false;
	}
	input_word = input_word.replace(/(^\s*)|(\s*$)/g, ""); //删除左右两端的空格
	return input_word;
}

/*
*	左侧入
*/
function insertLeft(){
	var inputText = getInput();
	if(inputText === false) return;
	//c存储
	apiData.unshift(inputText);

	//渲染图表
	renderChart();
}
/*
*	右侧入
*/
function insertRight(){
	var inputText = getInput();
	if(inputText === false) return;
	//c存储
	apiData.push(inputText);

	//渲染图表
	renderChart();
}

/*
*	左侧出
*/
function deleteLeft(){
	if(apiData.length === 0){
		alert("已无数据！")
		return false;
	};
	//删除
	apiData.shift();

	//渲染图表
	renderChart();
}

/*
*	右侧出
*/
function deleteRight(){
	if(apiData.length === 0){
		alert("已无数据！")
		return false;
	};
	//删除
	apiData.pop();

	//渲染图表
	renderChart();
}
/*
*	点击删除
*/
function deleteThis(index){
	//删除
	apiData.splice(index,1);

	//渲染图表
	renderChart();
}

/*
*	渲染图表
*/
function renderChart(){
	var api_display = document.getElementById("api-display");
	api_display.style.width = "628px";
	api_display.innerHTML = "";
	for(var i = 0 ; i < apiData.length ; i++){
		api_display.innerHTML += "<span onclick=deleteThis("+i+") title='删除该项' style='display:inline-block;cursor:pointer;background-color:red;font-size:20px; color:#fff;height:30px;padding:0 10px;line-height:30px;margin:5px 0 5px 5px;'>"
								 + apiData[i] + "</span>";
	}
	//将焦点赋给输入框
	input.focus();
}
/*
*	绑定按键事件
*/
function initBtnEvent(){
	var insert_left = document.getElementById("insert-left");
	var insert_right = document.getElementById("insert-right");
	var delete_left = document.getElementById("delete-left");
	var delete_right = document.getElementById("delete-right");

	insert_left.onclick = function(){insertLeft();};
	insert_right.onclick = function(){insertRight();};
	delete_left.onclick = function(){deleteLeft();};
	delete_right.onclick = function(){deleteRight();};
}

/*
*	初始化
*/
function init(){
	initBtnEvent();
	renderChart();
}
init();