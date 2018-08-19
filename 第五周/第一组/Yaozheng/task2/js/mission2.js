/* 
自运行函数
*/
    (function() {

      var list = [];
  
      var input = document.getElementById("inpt");

 //左动 
      document.getElementById("leftIn").addEventListener("click",
      function() {
  
          if (regNumber(input.value))
  
          list.unshift(input.value);
  
          outPut();
  
      });
//右动
      document.getElementById("rightIn").addEventListener("click",
      function() {
  
          if (regNumber(input.value))
  
          list.push(input.value);
  
          outPut();
  
      });
 //左出 
      document.getElementById("leftOut").addEventListener("click",
      function() {
  
          var temp = list.shift();
  
          alert(temp);
  
          outPut();
  
      });
//右出 
      document.getElementById("rightOut").addEventListener("click",
      function() {
  
          var temp = list.pop();
  
          alert(temp);
  
          outPut();
  
      });
  
      document.getElementById("listOutPut").addEventListener("click",
      function(event) {
  
          var index = event.target.getAttribute("id");
  
          if (index.toLowerCase() != "listoutput") {
  
              list.splice(index, 1);
  
          }
  
          outPut();
  
      });
  
      /**
  
               * 检测是否为数字的函数
  
               */
  
      function regNumber(value) {
  
          var reg = /^[0-9]+$/;
  
          return reg.test(value);
  
      }
  
      /**
  
           * 输出数组的函数
  
           */
  
      function outPut() {
  
          var str = "";
  
          list.forEach(function(v, i) {
  
              str += "<span class='red'id='" + i + "'>" + v + "</span>";
  
          })
  
          document.getElementById("listOutPut").innerHTML = str;
  
      }
  
  })()