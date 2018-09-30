var wrap = document.querySelector(".wrap");
var btn_wrap = document.querySelector(".btn-wrap");
var btn1 = btn_wrap.querySelectorAll("button")[0];
var btn2 = btn_wrap.querySelectorAll("button")[1];
var btn3 = btn_wrap.querySelectorAll("button")[2];
var arr = [];
var last;
var toggle = false;
//给按钮绑定事件
btn1.onclick = function(){
    if(!toggle){
        toggle = true;
        reset();
        preOrder(wrap);
        showWay();
    }
}
btn2.onclick = function(){
    if(!toggle){
        toggle = true;
        reset();
        inOrder(wrap);
        showWay();
    }
}
btn3.onclick = function(){
    if(!toggle){
        toggle = true;
        reset();
        postOrder(wrap);
        showWay();
    }
}
//二叉树的遍历的三种方式
//(1)前序遍历（DLR
function preOrder(node){
    if(node){
        arr.push(node);
        preOrder(node.firstElementChild);
        preOrder(node.lastElementChild);
    }
}
//(2)中序遍历（LDR）
function inOrder(node){
    if(node){
        inOrder(node.firstElementChild);
        arr.push(node);
        inOrder(node.lastElementChild);
    }
}
//(3)后序遍历（LRD）
function postOrder(node){
    if(node){
        postOrder(node.firstElementChild);
        postOrder(node.lastElementChild);
        arr.push(node);
    }
}
//显示遍历的过程
function showWay(){
    var input = document.getElementById('ipt').value;
    for(var i=0; i<arr.length; i++){
        setTimeout(function(i){
            return function(){
                if(i == arr.length-1){
                    toggle = false;
                }
                if(last){
                    last.style.background = "white";
                }
                arr[i].style.background = "red";
                last = arr[i];
            }
        }(i),i*1000)

        if (arr[i].className == input ) {
            return;
        }
    }
}
//初始化
function reset(){
    arr = [];
    if(last){
        last.style.background = "white";
    }
}