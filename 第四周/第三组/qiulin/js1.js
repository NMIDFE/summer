function cgcolor(){
      
      con.style.color="red"
      txt.style.color="red"
  }

//定义"改变宽高"的函数
function kg(){
    con.style.width="300px"
    txt.style.height="300px"
}

//定义"隐藏内容"的函数
function yc()
{
    con.style.display="none"
    txt.style.display="none"
    
}
//定义"显示内容"的函数
function xs()
{
    con.style.display="block"
    txt.style.display="block"
}

//定义"取消设置"的函数
function qx(){
    var my=confirm("确认是否取消")
    if(my==true){
    con.style="none"
    txt.style="none"}
    else{
        alert("谢谢")
    }
}
