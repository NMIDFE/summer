


//建造变量
var table  = document.getElementById("aqi-table");
var delBtn = table.getElementsByTagName("button");


/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var tr = '<tr>'+'<td>'+'城市'+'</td>'+'<td>'+'空气质量'+'</td>'+'<td>'+'操作'+'</td>'+'</tr>';
    var i = 0;
    for ( var x in aqiData ){
        tr += '<tr>'+'<td>'+x+'</td>'+'<td>'+aqiData[x]+'</td>'+'<td>'+"<button onclick='delBtnHandle(\""+x+"\")'>"+'删除'+'</button>'+'</td>'+'</tr>';
        }
    table.innerHTML = tr;
}

//定义变量
var aqiData = {};



//获得输入对象
var city_input  = document.getElementById("aqi-city-input") ;
var value_input = document.getElementById("aqi-value-input");



//添加数据
function addAqiData() {
    //trim()去首尾空格
    var city  = city_input.value.trim() ;

        var value = value_input.value.trim();

    //标识，当都为真时才能进行添加操作
             var cityflag  = false;

         var valueflag = false;

    //正则匹配城市名称
    var regCity = /^[a-zA-Z\u4E00-\u9FA5]+$/ ;

    //正则匹配空气质量（整数）
    var regValue = /[\d*]/;

    //匹配城市
           if( !regCity.test(city) )
              {
        alert("请输入正确的城市名");
        city_input.value  = '';        
    }
              else cityflag = true;

    //匹配空气质量指数
                   if( !regValue.test(value) )
                  {
        alert("请输入正确的整数");
        value_input.value = '';
    }
         else valueflag = true;

    if( cityflag && valueflag )
        aqiData[city]  = value ; 
}


//建造变量
var addBtn = document.getElementById("add-btn");

window.onload = function () {
  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  addBtn.addEventListener("click",addBtnHandle);
}


//获取用户输入
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

