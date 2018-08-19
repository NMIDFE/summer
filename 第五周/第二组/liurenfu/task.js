
 /* aqiData，存储用户输入的空气指数数据
 示例格式：
 *aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */


/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
	var a=document.getElementById('aqi-table');
	var b=document.getElementById("add-btn");
	b.onclick=function(){
	var city=document.getElementById("aqi-city-input").value.trim();
      var value=document.getElementById("aqi-value-input").value.trim();
      if(!(/^[\u4e00-\u9fa5a-zA-Z]/.test(city))){
                alert("请输入中英文");
                return;
            }
            if (!(/^[0-9]*$/.test(value))){
                alert("请输入数字");
                return;
            }

            var aqiList=document.getElementById("aqi-table").innerHTML;
                aqiList+="<tr><td>"+city+"</td><td>"+value+"</td><td><button>删除</button></td></tr>";
                a.innerHTML=aqiList;
                del();
	}

}

//创建删除函数
    function del(){
        var table=document.getElementById("aqi-table");
        var btns=table.getElementsByTagName('button');
        for(var i=0,len=btns.length;i<len;i++){
            btns[i].onclick=function(){
                //获取tr
                var child=this.parentNode.parentNode;
                //获取tbody,删除tr
            this.parentNode.parentNode.parentNode.removeChild(child);
            };
        }
    }
  
   
        

function init() {
addAqiData();
        del();
 
  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数

  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

}

init();
