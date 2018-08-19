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

function addAqiData() {
    var otextc=document.getElementById('aqi-city-input');
    var otextv=document.getElementById('aqi-value-input');
    aqiData.cityName=otextc.value;
    aqiData.cityValue=otextv.value;
    if(otextc.value&&otextv.value){
        var oTab=document.getElementById('aqi-table');
        var oTr=document.createElement('tr');
        var oTd=document.createElement('td');
        oTd.innerHTML=aqiData.cityName;
        oTr.appendChild(oTd);//第一列
        var oTd=document.createElement('td');
        oTd.innerHTML=aqiData.cityValue;
        oTr.appendChild(oTd);//第二列
        oTab.appendChild(oTr);
        var oTd=document.createElement('td');
        oTd.innerHTML='<button>'+'删除'+'</button>';
        oTr.appendChild(oTd);//第三列
        oTab.tBodies[0].appendChild(oTr);
        oTd.getElementsByTagName('button')[0].onclick=function() {
					oTab.tBodies[0].removeChild(this.parentNode.parentNode);
				}
    }
    
}
/**
 * 渲染aqi-table表格
 */

function renderAqiList() {
   var oTab=document.getElementById('aqi-table');
   var aBtn=oTab.getElementsByTagName('button');
   
   //console.log(aBtn.length);
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
function delBtnHandle() {
  // do sth.
  var oTab=document.getElementById('aqi-table');
  var aBtn=oTab.getElementsByTagName('button');
  for(var i=0;i<=aBtn.length;i++){
    aBtn[i].addEventListener("click", function(){
      oTab.tBodies[0].removeChild(this.parentNode.parentNode);
      //console.log(aBtn.length);
    });
    renderAqiList();
  }
  
 
  
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  var oBtnAdd=document.getElementById('add-btn');
  //oBtnAdd.addEventListener("click",addBtnHandle);
  oBtnAdd.onclick=addBtnHandle;
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
  delBtnHandle();
  
}

init();
