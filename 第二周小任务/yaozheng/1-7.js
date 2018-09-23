var btn = document.getElementsByTagName('input'),
    preBtn = btn[0],
    mdBtn = btn[1],
    lastBtn = btn[2],
    oText = btn[3],
    oSearch = btn[4],
    treeRoot = document.querySelector('.root'),
    nodeArr = [],
    timer = null;

    window.onload=function(){

      //先序
        preBtn.onclick = function () {
          reset();
          preOrder(treeRoot);
          changeColor();
}    
       //中序
        mdBtn.onclick = function () {
          reset();
          inOrder(treeRoot);
          changeColor();
}     
      //后序
        lastBtn.onclick = function () {
          reset();
          postOrder(treeRoot);
          changeColor();
}     
      //深度 （类先序 ） 多叉树
        oSearch.onclick = function() {
          reset();
          recursionOrder(treeRoot);
          searchNum(1);
        }
}

//先序遍历
    function preOrder(node){
      if(!(node==null)){
        nodeArr.push(node);
        preOrder(node.firstElementChild);
        preOrder(node.lastElementChild);
      }
}

//中序遍历
    function inOrder(node) {
      if (!(node == null)) {
        inOrder(node.firstElementChild);
        nodeArr.push(node);
        inOrder(node.lastElementChild);
      }
}

//后序遍历
    function postOrder(node) {
      if (!(node == null)) {
        postOrder(node.firstElementChild);
        postOrder(node.lastElementChild);
        nodeArr.push(node);
      }
}

//深度优先遍历
    function recursionOrder(node) {
        nodeArr.push(node);
        if(node == null || node.children.length == 0) return;
        for(var i = 0; i < node.children.length; i++) {
            recursionOrder(node.children[i]);
        }
}

//查询
    function searchNum(arr){
          var inputValue = oText.value;
          console.log(inputValue)
          i = 0;
          nodeArr[i].style.backgroundColor='red';
          timer = setInterval(function () {
              i++;
              console.log(i)
              if (i < nodeArr.length) {
                //去除空格 获取节点值
                  var textValue = nodeArr[i].firstChild.nodeValue.replace(/(^\s*)|(\s*$)/g, "") ;
                  console.log(textValue)
                  if(inputValue == textValue && textValue && arr==1){
                      clearInterval(timer);
                      nodeArr[i].style.backgroundColor='red';
                      nodeArr[i-1].style.backgroundColor='#fff';
                  }
                  else{
                      nodeArr[i-1].style.backgroundColor = '#fff';
                      nodeArr[i].style.backgroundColor = 'red';
                  }
                }else{
                      reset();
                      if(arr == 1) alert("未找到输入的值！");
              }
          },800);
      }
   //清除定时器
    function reset(){
      nodeArr=[];
      clearInterval(timer);
      var nodeArr=document.getElementsByTagName("div");
      for(var i=0;i<nodeArr.length;i++){
        nodeArr[i].style.backgroundColor="#fff";
      }
  }
  //list颜色变化
    function changeColor(){
        var i=0;
        nodeArr[i].style.backgroundColor = 'red';
        timer=setInterval(function(argument){
          i++;
          if(i<nodeArr.length){
            nodeArr[i-1].style.backgroundColor="#fff";
            nodeArr[i].style.backgroundColor="red";
              }else{
                nodeArr[nodeArr.length-1].style.backgroundColor="#fff";
    }
  },800)
}