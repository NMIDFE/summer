window.onload = function(){
  var tree = document.querySelector('.tree');
  var timer;
  var node = [];
  var btn = document.getElementsByTagName("input");
  btn[0].onclick = function(){
    clear();
    front(tree);
    change();
  }
  btn[1].onclick = function(){
    clear();
    center(tree);
    change();
  }
  btn[2].onclick = function(){
    clear();
    last(tree);
    change();
  }
  function front(nod){
    if(!(nod==null)){
      node.push(nod);
      front(nod.firstElementChild);
      front(nod.lastElementChild);
    }
  }
  function center(nod){
    if(!(nod==null)) {
      center(nod.firstElementChild);
      node.push(nod);
      center(nod.lastElementChild);
    }
  }
  function last(nod){
    if(!(nod ==null)) {
      last(nod.firstElementChild);
      last(nod.lastElementChild);
      node.push(nod);
    }
  }
  function change(){
    var i = 0;
    node[i].style.backgroundColor = "red";
    timer = setInterval(function(){
      i++;
      if(i<node.length){
        node[i].style.backgroundColor = "red";
        node[i-1].style.backgroundColor = "#fff";
      } else {
        node[node.length-1].style.backgroundColor = "#fff";
      }
    },200)
  }
  function clear(){
    node = [];
    clearInterval(timer);
    var div = document.getElementsByTagName('div');
    for(var i =0 ; i<div.length ; i++){
      div[i].style.backgroundColor = "#fff";
    }
  }
  function preOrder(nod){
    if(!nod == null){
      node.push(nod)
      preOrder(nod.firstElementChild);
      preOrder(nod.lastElementChild);
    }
  }
}
