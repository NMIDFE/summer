      var root = document.querySelector('.root'),
          btn = document.getElementsByTagName('input'),
          font = btn[0],
          center = btn[1],
          last = btn[2],
          text = btn[3],
          find = btn[4],
          i = 0,
          timer,
          change = new Array();
          function changeColor(){
            i = 0;
            change[i].style.backgroundColor = "red";
            timer = setInterval(function(){
              i++;
              if(i<change.length) {
                change[i-1].style.backgroundColor ="#fff";
                change[i].style.backgroundColor = "red";
              }else {
                change[change.length-1].style.backgroundColor = "#fff";
              }
            },800)
          }

          function clear(){
            change = [];
            clearInterval(timer);
            var div = document.getElementsByTagName('div');
            for( var i= 0; i<div.length;i++){
              div[i].backgroundColor = "#fff";
            }
          }

          function preOrder(node){
            if(!(node==null)){
              change.push(node);
              preOrder(node.firstElementChild);
              preOrder(node.lastElementChild);
            }
      }


          function inOrder(node) {
            if (!(node == null)) {
              inOrder(node.firstElementChild);
              change.push(node);
              inOrder(node.lastElementChild);
            }
      }



          function postOrder(node) {
            if (!(node == null)) {
              postOrder(node.firstElementChild);
              postOrder(node.lastElementChild);
              change.push(node);
            }
      }

      font.onclick = function () {
        clear();
        preOrder(root);
        changeColor();
      }
      center.onclick = function () {
        clear();
        inOrder(root);
        changeColor();
      }
      last.onclick = function () {
        clear();
        postOrder(root);
        changeColor();
      }
