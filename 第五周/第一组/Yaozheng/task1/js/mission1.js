
/**

 * aqiData，存储用户输入的空气指数数据

 * 示例格式：

 * aqiData = {

 *    "北京": 90,

 *    "上海": 40

 * };

 */
/*
    任务描述:
    1.参考以下示例代码，用户输入城市名称和空气质量指数后，点击“确认添加”按钮后，就会将用户的输入在进行验证后，添加到下面的表格中，新增一行进行显示
    2.用户输入的城市名必须为中英文字符，空气质量指数必须为整数
    3.用户输入的城市名字和空气质量指数需要进行前后去空格及空字符处理（trim）
    4.用户输入不合规格时，需要给出提示（允许用alert，也可以自行定义提示方式）
    5.用户可以点击表格列中的“删除”按钮，删掉那一行的数据
*/

var aqiData = {};

/**

 * 从用户输入中获取数据，向aqiData中增加一条数据

 * 然后渲染aqi-list列表，增加新增的数据

 */

function addAqiData() {

  var aqi_city_input = document.getElementById("aqi-city-input");

  var aqi_value_input = document.getElementById("aqi-value-input");

  var city = aqi_city_input.value.trim();

  var reg = /^[\u4E00-\uFA29A-Za-z]+$/;

  if(!reg.test(city)){

    alert("请输入城市名称(中英文)");

    return;

  }

  var reg_number = /^\d+$/;

  var value = aqi_value_input.value.trim();

  if(!reg_number.test(value)){

    alert("请输入空气质量指数(整数)");

    return;

  }

  aqiData[city] = value;

}


/**

 * 渲染aqi-table表格

 */

function renderAqiList() {

  var aqi_table = document.getElementById("aqi-table");

  var content = "<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";

  for(var data in aqiData){

      content+= "<tr><td>"+data+"</td><td>" + aqiData[data] +"</td><td><button>删除</button></td>";

  }

  aqi_table.innerHTML = content;

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

function delBtnHandle(e) {

  // do sth.

  var target = e.target;

  if(target.nodeName.toLowerCase() === "button"){

    var tr = target.parentNode.parentNode;

    var city = tr.firstElementChild.innerText;

    delete aqiData[city];

  }else{

    return ;

  }

  renderAqiList();

}



function init() {



  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数

  var add_btn = document.getElementById("add-btn");

  add_btn.onclick = addBtnHandle;

  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

  var aqi_table = document.getElementById("aqi-table");

  aqi_table.onclick = delBtnHandle;



}



init();