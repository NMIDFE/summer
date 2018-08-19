var aqiIndex=0;

var aqiData = [];

function DataItem(city, num){ 

    this.city = city;

    this.num = num;

}


function trim(str){

    return str.replace();

}



function addAqiData() {

    
    var tempCity = trim(document.getElementById("aqi-city-input").value);

    var tempNum = trim(document.getElementById("aqi-value-input").value);

    var regCity = /[\u4E00-\u9FA5]/g;

    var regNum = /^[0-9]+.?[0-9]*$/;

    if(!regCity.test(tempCity)){

        alert("城市名称必须是汉字");

        return;

    }

    if(!regNum.test(tempNum)){

        alert("空气质量指数必须是整数");

        return;

    }

    var tempItem =new DataItem(tempCity,tempNum);//new关键字不可缺少

    aqiData[aqiIndex++] = tempItem;

}




function renderAqiList() {

    var myTable = document.getElementById("aqi-table");

    

    myTable.innerHTML = "";

    

    if(aqiData.length !=0)
    {

        myTable.innerHTML = "<tr><th>城市</th><th>空气质量</th><th>操作</th></tr>";

    }

    

    for(var i=0; i<aqiData.length; i++){

        var tempCity = aqiData[i].city;

        var tempNum = aqiData[i].num;

        myTable.innerHTML += "<tr><td>"+tempCity+"</td><td>"+tempNum+"</td><td><button>删除</button></td></tr>";

    }

    

    btndelEvent();

}





function addBtnHandle() {

    addAqiData();

    renderAqiList();

}


function delBtnHandle() {

    var myTable = document.getElementById("aqi-table");

    var index = this.parentNode.parentNode.rowIndex;//this是HTMLButtonElement

    aqiData.splice(index-1,1);
    aqiIndex--;
    myTable.deleteRow(index);
    if(aqiData.length == 0)

        myTable.innerHTML = "";



}



function btndelEvent(){

    var buttonArr = document.getElementsByTagName("button");

    for(var i=1; i<buttonArr.length; i++){
        buttonArr[i].addEventListener("click",delBtnHandle);

    }

}

function init() {



    
    document.getElementById("add-btn").addEventListener("click",addBtnHandle);

    
}
init();