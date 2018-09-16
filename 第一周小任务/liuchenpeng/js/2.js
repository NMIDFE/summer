window.onload = function(){
  var accordion = document.querySelector('.accordion');
  var list = accordion.getElementsByTagName("li");
  var box = document.querySelector('.box');
  var i = 0;
  var timer = null;
  for(i = 0 ; i<list.length ; i++) {
    list[i].index = i;
    list[i].onmouseover = function(){
      var index = this.index;
      if(timer){
        clearInterval(timer);
      }
      timer = setInterval(function(){
        var allwidth = box.offsetWidth;
        for(i = 0 ; i<list.length ;i++) {
          if(index!=list[i].index) {
          var speed = (100 - list[i].offsetWidth)/5;
            speed = speed>0 ? Math.ceil(speed):Math.floor(speed);
            list[i].style.width = list[i].offsetWidth + speed + 'px';
            allwidth -= list[i].offsetWidth;
          }
          list[index].style.width = allwidth + "px";
        }
      },30)
    }
  }
}
