window.onload = function(){
  var zc = document.getElementsByClassName("zc");
  var zc1 = document.getElementsByClassName("zc1");
  var zc2 = document.getElementsByClassName("zc2");
  for(var i = 0; i<zc1.length ; i++){
    zc1[i].index = i;
    zc1[i].onclick = function(){
      if((this.index+1) == zc1.length){
        return;
      }else{
      var a = zc[this.index].innerHTML;
      zc[this.index].innerHTML = zc[this.index+1].innerHTML;
      zc[this.index+1].innerHTML = a;
    }
    }
  }
  for(var j = 0; j<zc2.length;j++){
    zc2[j].index = j ;
    zc2[j].onclick = function(){
      if((this.index-1) == -1){
        return;
      } else{
      var b = zc[this.index].innerHTML;
        zc[this.index].innerHTML = zc[this.index-1].innerHTML;
        zc[this.index-1].innerHTML = b;
      }
    }
  }
}
