/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};



//从用户输入中获取数据，向aqiData中增加一条数据  然后渲染aqi-list列表，增加新增的数据
function addAqiData() {
	var city = document.getElementById('aqi-city-input').value.trim();
	var value = document.getElementById('aqi-value-input').value.trim();
	var hints = document.getElementsByClassName('hint');
	var partten1 = /^[\u4e00-\u9fa5_a-zA-Z]+$/;
	var partten2 = /^[0-9]+$/;

	if(!(city.match(partten1))){
		hints[0].innerHTML = '输入的城市名必须为中英文字符';
		alert('添加失败')
	}else{
		hints[0].innerHTML = '输入格式正确'
	}

	if(!(value.match(partten2))){
		hints[1].innerHTML = '输入的指数必须为数字';
		alert('添加失败')

	}else{
		hints[1].innerHTML = '输入格式正确'
	}

	if(value.match(partten2)&&city.match(partten1)){
		aqiData[city] = value;
	}

}

//渲染aqi-table表格
function renderAqiList() {
	var table = document.getElementById('aqi-table');
	var temp = '';
	temp += 
	`<tr>
		 <td>城市</td><td>空气质量</td><td>操作</td>
    </tr>`;
	for(let key in aqiData){
		temp +=`
			<tr>
		      <td>${key}</td><td>${aqiData[key]}</td><td><button class='del-btn'>删除</button></td>
		    </tr>
		`;

	}
	table.innerHTML = temp;
	console.log(table);
}

//点击add-btn时的处理逻辑 获取用户输入，更新数据，并进行页面呈现的更新
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

//点击各个删除按钮的时候的处理逻辑  获取哪个城市数据被删，删除数据，更新表格显示
function delBtnHandle(target) {
  console.log(target);
  //获取tr节点
  var par = target.parentNode.parentNode;
  //删除对象中响应键值对
  var city = par.children[0].innerHTML;
  delete aqiData[city];
  renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  var addBtn = document.getElementById('add-btn');
  addBtn.addEventListener('click',addBtnHandle,false);
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
  var table = document.getElementById("aqi-table");
  table.addEventListener("click", function(e) {
    if (e.target && e.target.nodeName === "BUTTON") {
        delBtnHandle(e.target);
    }
  })
}

init();