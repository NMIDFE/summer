var tree = document.querySelector('.tree');
var timer;
var nodeArr = [];
var btn = document.getElementsByTagName("input");
function search(){
  var text = btn[0].value;
  var i = 0;
  nodeArr[i].style.backgroundColor = "red";
  timer = setInterval(function(){
    i++;
    if(i<nodeArr.length){
      var txt = nodeArr[i].firstChild.nodeValue.replace(/(^\s*)|(\s*$)/g, "")
      if(txt == text&& txt) {
        clearInterval(timer);
        nodeArr[i].style.backgroundColor='red';
        nodeArr[i-1].style.backgroundColor='#fff';
      } else {
        nodeArr[i].style.backgroundColor = "red";
        nodeArr[i-1].style.backgroundColor = "#fff";
      }
    }else{
      alert("未找到");
      clear();
    }
  },200)
}
function clear(){
  nodeArr = [];
  clearInterval(timer);
  var div = document.getElementsByTagName('div');
  for(var i =0 ; i<div.length ; i++){
    div[i].style.backgroundColor = "#fff";
  }
}
function deep(node){
  nodeArr.push(node);
  if(node == null || node.children.length == 0) {
    return;
  }
  for(var i = 0; i < node.children.length; i++) {
      deep(node.children[i]);
  }
}
btn[1].onclick = function(){
  clear();
  deep(tree);
  search();
}
