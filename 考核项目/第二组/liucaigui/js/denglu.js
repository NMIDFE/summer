var dialogInstace , onMoveStartId , mousePos = {x:0,y:0};	//	用于记录当前可拖拽的对象
	
// var zIndex = 9000;

//	获取元素对象	
function g(id){return document.getElementById(id);}

//	自动居中元素（el = Element）
function autoCenter( el ){
    var bodyW = document.documentElement.clientWidth;
    var bodyH = document.documentElement.clientHeight;

    var elW = el.offsetWidth;
    var elH = el.offsetHeight;

    el.style.left = (bodyW-elW)/2 + 'px';
    el.style.top = (bodyH-elH)/2 + 'px';
    
}

//	自动扩展元素到全部显示区域
function fillToBody( el ){
    el.style.width  = document.documentElement.clientWidth  +'px';
    el.style.height = document.documentElement.clientHeight + 'px';
}

//	Dialog实例化的方法
function Dialog( dragId , moveId ){

    var instace = {} ;

    instace.dragElement  = g(dragId);	//	允许执行 拖拽操作 的元素
    instace.moveElement  = g(moveId);	//	拖拽操作时，移动的元素

    instace.mouseOffsetLeft = 0;			//	拖拽操作时，移动元素的起始 X 点
    instace.mouseOffsetTop = 0;			//	拖拽操作时，移动元素的起始 Y 点

    instace.dragElement.addEventListener('mousedown',function(e){

        var e = e || window.event;

        dialogInstace = instace;
        instace.mouseOffsetLeft = e.pageX - instace.moveElement.offsetLeft ;
        instace.mouseOffsetTop  = e.pageY - instace.moveElement.offsetTop ;
        
        onMoveStartId = setInterval(onMoveStart,10);
        return false;
        // instace.moveElement.style.zIndex = zIndex ++;
    })

    return instace;
}

//	在页面中侦听 鼠标弹起事件
document.onmouseup = function(e){
    dialogInstace = false;
    clearInterval(onMoveStartId);
}
document.onmousemove = function( e ){
    var e = window.event || e;
    mousePos.x = e.clientX;
    mousePos.y = e.clientY;
    

    e.stopPropagation && e.stopPropagation();
    e.cancelBubble = true;
    e = this.originalEvent;
    e && ( e.preventDefault ? e.preventDefault() : e.returnValue = false );

    document.body.style.MozUserSelect = 'none';
}	

function onMoveStart(){


    var instace = dialogInstace;
    if (instace) {
        
        var maxX = document.documentElement.clientWidth -  instace.moveElement.offsetWidth;
        var maxY = document.documentElement.clientHeight - instace.moveElement.offsetHeight ;

        instace.moveElement.style.left = Math.min( Math.max( ( mousePos.x - instace.mouseOffsetLeft) , 0 ) , maxX) + "px";
        instace.moveElement.style.top  = Math.min( Math.max( ( mousePos.y - instace.mouseOffsetTop ) , 0 ) , maxY) + "px";

    }

}

//	重新调整对话框的位置和遮罩，并且展现
function showDialog(){
    g('dialogMove').style.display = 'block';
    g('mask').style.display = 'block';
    autoCenter( g('dialogMove') );
    fillToBody( g('mask') );
}

//	关闭对话框
function hideDialog(){
    g('dialogMove').style.display = 'none';
    g('mask').style.display = 'none';
}

//	侦听浏览器窗口大小变化
//window.onresize = showDialog;

Dialog('dialogDrag','dialogMove');

//默认设置弹出层启动
//showDialog();


var ringup=document.getElementById('ringup');
ringup.onclick=showDialog;
var phone=document.getElementById('phone');
phone.onclick=showDialog;


var neirong =document.getElementsByClassName('ui-dialog-content')[0].getElementsByClassName('neirong')[0];
var neirong2 =document.getElementsByClassName('ui-dialog-content')[0].getElementsByClassName('neirong2')[0];
var dibu=document.getElementsByClassName('ui-dialog-content')[0].getElementsByClassName('dibu')[0];
var dibu2=document.getElementsByClassName('ui-dialog-content')[0].getElementsByClassName('dibu')[1];
var fanhui=document.getElementById('fanhui');


//console.log(neirong);

var signin=document.getElementById('signin');
signin.onclick=function(){
    neirong.style.display="none";
    neirong2.style.display="block";
    dibu.style.display="none";
    dibu2.style.display="block";
}
fanhui.onclick=function(){
    neirong.style.display="block";
    neirong2.style.display="none";
    dibu.style.display="block";
    dibu2.style.display="none";
}



var zc=document.getElementById('zc');
var ringup=document.getElementById('ringup');
var user1=document.getElementById('user1');
var password1=document.getElementById('password1');
var user2=document.getElementById('user2');
var password2=document.getElementById('password2');


function Ajax(id,pass){
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET","http://120.78.51.133:8080/frontdemo/testAdd?name="+id+"&password="+pass,false);

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          var obj = JSON.parse(xmlhttp.responseText);
          if(obj.result == "yes"){
            alert("恭喜你注册成功");
            neirong.style.display="block";
            neirong2.style.display="none";
            dibu.style.display="block";
            dibu2.style.display="none";
          } else {
            alert(obj.reason);
          }
        }
    };
  xmlhttp.send();
  }
  zc.onclick = function(){
    Ajax(user2.value,password2.value);
    user2.value = "";
    password2.value = "";
  }

  //登录
  function Ajax1(id,pass){
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET","http://120.78.51.133:8080/frontdemo/testLogin?name="+id+"&password="+pass,false);

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          var obj = JSON.parse(xmlhttp.responseText);
          if(obj.result == "yes"){
            alert("恭喜你登陆成功");
            hideDialog();
          } else {
            alert(obj.reason);
          }
        }
    };
  xmlhttp.send();
  }
  ringup.onclick = function(){
    Ajax1(user1.value,password1.value);
    user1.value = "";
    password1.value = "";
  }




















