

var.testdiv = document.getElementById("testdiv");
window.onload = function(){
	var.testdiv = document.getElementById("testdiv");
	alert(testdiv.innerHTML);
}



window.onload = function(){
var para = document.createElement("p");
var info = "nodeName:";
info+= para.nodeName;
info+= "nodeType:";
info+= para.nodeType;
alert(info);

testdiv.appendChild(para);

}


/*
//定义一个数组
var myarr =new Array();
var i;



function len(){
//f返回数组的长度。
 return myarr.length;
}



function num(){
//得到输入框里的字符。	
var  mynum = document.getElementById("getNum").value;
return mynum;
}


//从左侧入
function leftin(){

myarr.unshift(num());

showarr();

}


//从右侧输入
function rightin(){
	
myarr.push(num());

showarr();
}


//从左侧出
function leftout(){

	var leftnum = myarr.shift();
	showarr();
	alert(leftnum);
}


//从右侧出
function rightout(){

	var rightnum = myarr.pop();
	showarr();
	alert(rightnum);

}


//function showarr(){
	/*
	//输出数组。
	document.getElementById("Show").innerHTML = null;
for(i =0;i<len();i++) 
	
 document.getElementById("Show").innerHTML += myarr[i] ;
*/



//创建节点显示数组
/*
for(i=0;i<len();i++)
{
var mess =	document.createTextNode(myarr[i]);
mess.style.width(50);
mess.style.height(50);
mess.style.backgroundColor("red");
Show.appendChild(mess);
mess.style.width(50);
mess.style.height(50);
mess.style.backgroundColor("red");
}
}

/*
function cityName(){
//检测并添加输入的城市名
  var name =document.getElementById("aqi-value-input").value;
 // testName(name);
  return name;


}
function cityScore(){
//检测并添加输入的分数
 var num =  document.getElementById("aqi-city-input");
//testScore(num);
return num.value;

}

/*
 function testName(s){
 //判断是否是汉字、字母组成
var regu = "^[a-zA-Z\u4e00-\u9fa5]+$";
var re = new RegExp(regu);
if (!re.test(s)) 
alert("请输入正确的名字！");
break;
}

*/

/*
function testScore(score){
//检测用户的输入数字
score.onblur=function(){
        if(isNaN(Number(score.value))||Math round(score.value)!=score.value ){  //当输入不是数字的时候，Number后返回的值是NaN;然后用isNaN判断。
            alert('不是整数！')；
            break;
        }
    }
}
 
*/
/*
var i = -1;
function add(){
//用innerHTML把信息输入
var childrens = document.getElementById("aqi-table")
{/*
	var tr = document.createElement("tr");
		var td1 = document.createElement("td");
		var td2 = document.createElement("td");
		var td3 = document.createElement("td");
		var
		var text1 = document.createTextNode(cityName());
		var text2 = document.createTextNode(cityScore());
		td1.appendChild(text1);

		tr.appendChild(td1);

		td2.appendChild(text2);

		tr.appendChild(td2);

		td3.innerHTML = "<td><button id='del-btn' onclick='del()'>删除</button></td>";

		tr.appendChild(td3);

		childrens.appendChild(tr);
*/
/*
	childrens.innerHTML += "<tr><td>"+ cityName() +"</td><td>"+cityScore()+"</td><td><button onclick = 'del()'>删除</button></td></tr>";
}

}

function del(){
this.parentElement[0].innerHTML = "";
//document.getElementById("aqi-table").innerHTML;
}

*/
/*

/建造变量
var table  = document.getElementById("aqi-table");
var delBtn = table.getElementsByTagName("button");



//定义变量
var aqiData = {};



//获得输入对象
var city_input  = document.getElementById("aqi-city-input") ;
var value_input = document.getElementById("aqi-value-input");




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
        city_input.value  = '';        //清除数据
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

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */

