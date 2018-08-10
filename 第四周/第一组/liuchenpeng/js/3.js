window.onload = function(){
  var zz = document.querySelector('.zz');
  var ttop = document.querySelector('.top');
  var month = ttop.getElementsByTagName('div');
  for (var i = 0; i < month.length; i++) {
    month[i].index = i;
    month[i].onmouseover = function(){
      for (var i = 0; i < month.length; i++) {
        month[i].className = "";
      }
      this.className = "cg";
      zz.innerHTML = "";
      zz.innerHTML = "这是"+ (this.index+1) + "月";
    }
  }
}
