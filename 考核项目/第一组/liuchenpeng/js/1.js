window.onload = function(){
  var tabt = document.querySelector('.tabt');
  var bl = tabt.getElementsByTagName('span');
  var z = document.querySelector('.z');
  var zz = z.getElementsByTagName('ul');
  var tabT = document.querySelector('.tabT');
  var bll = tabT.getElementsByTagName('span');
  var c = document.querySelector('.c');
  var cc = c.getElementsByTagName('ul');
  var pages = document.querySelector('.pages');
  var u1 = true;
  var u2 = false;
  var u3 = false;
  var u4 = false;

  for(var i = 0; i<4;i++){
    bl[i].index = i;
    bl[i].onmouseover = function(){
      for(var j = 0; j<4; j++){
        bl[j].className = "";
        zz[j].style.display = "none";
      }
      bl[this.index].className = "act";
      zz[this.index].style.display = "block";
    }
  }


  for(var i = 0; i<4;i++){
    bll[i].index = i;
    bll[i].onmouseover = function(){
      for(var j = 0; j<4 ; j++){
        bll[j].className = "";
        cc[j].style.display = "none";
      }
      bll[this.index].className ="cg";
      cc[this.index].style.display = "block";
      if(this.index == 0){
        u1 = true;
        u2 = false;
        u3 = false;
        u4 = false;
      }else if (this.index == 1){
        u1 = false;
        u2 = true;
        u3 = false;
        u4 = false;
      }else if (this.index == 2){
        u1 = false;
        u2 = false;
        u3 = true;
        u4 = false;
      }else if(this.index == 3){
        u1 = false;
        u2 = false;
        u3 = false;
        u4 = true;
      }
    }
  }


  pages.onclick = function(){
    if(u1){
      if(parseInt(cc[0].style.marginTop) ==-560){
      cc[0].style.marginTop = 0;
    }else{
      cc[0].style.marginTop = parseInt(cc[0].style.marginTop) - 280 +"px";
    }
  }
    else if(u2){
      if(parseInt(cc[1].style.marginTop) ==-560){
      cc[1].style.marginTop = 0;
    }else{
      cc[1].style.marginTop = parseInt(cc[1].style.marginTop) - 280 +"px";
    }
  }
    else if(u3){
      if(parseInt(cc[2].style.marginTop) ==-560){
      cc[2].style.marginTop = 0;
    }else{
      cc[2].style.marginTop = parseInt(cc[2].style.marginTop) - 280 +"px";
    }
  }
    else if(u4){
      if(parseInt(cc[3].style.marginTop) ==-560){
      cc[3].style.marginTop = 0;
    }else{
      cc[3].style.marginTop = parseInt(cc[3].style.marginTop) - 280 +"px";
    }
  }
}
}
