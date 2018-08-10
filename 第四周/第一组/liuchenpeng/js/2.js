window.onload = function () {
  var di = document.getElementById("div1");
  var btn = di.getElementsByTagName('input');
  var xx = di.getElementsByTagName('div');
  for (var i = 0; i < btn.length; i++) {
    btn[i].index = i;
    btn[i].onclick = function () {
      for (var i = 0; i < btn.length; i++) {
        btn[i].className = "";
        xx[i].style.display = "none";
      }
      this.className = "act";
    xx[this.index].style.display ='block';
    }
  }
}
