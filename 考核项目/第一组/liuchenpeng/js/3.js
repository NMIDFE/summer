  var photomove = document.querySelector("#photomove");
  var qq = new Array();
  var t = 1;
  var left = document.querySelector(".leftarrow");
  var right = document.querySelector(".rightarrow");
  var lunbo = document.querySelector('.lunbo');
  var timed;
  qq[0] = "images/4.jpg";
  qq[1] = "images/1.jpg";
  qq[2] = "images/2.jpg";
  qq[3] = "images/3.jpg";
  qq[4] = "images/4.jpg";
  left.onclick = function(){
    if(t == 0){
      t = 3;
    } else {
      t--;
    }
    photomove.src = qq[t];
  }
  right.onclick = function(){
    if(t == 4){
      t = 1;
    } else {
      t++;
    }
    photomove.src = qq[t];
  }
  function move(){
    if(t == qq.length-1){
      t = 1;
    }else if(t== 0){
      t = 4;
    }
     else {
      t++;
    }
    photomove.src = qq[t];
  }
  timed = setInterval(move,2000);
  timed;
  photomove.onmouseover = function(){
    clearInterval(timed);
  }
  photomove.onmouseout = function(){
    timed = setInterval(move,2000);
  }
  lunbo.onmouseover = function(){
    left.style.display = "block";
    right.style.display = "block";
  }
  lunbo.onmouseout = function(){
    left.style.display = "none";
    right.style.display = "none";
  }
