var move = document.querySelector('.imglong');
var Left = document.querySelector('.left');
var Right = document.querySelector('.right');
var allImg = document.querySelector('.all-img');
move.style.left = -400 + 'px';
function run(a){
  var b = parseInt(move.style.left);
  if(b==0){
    move.style.left = -1200 + "px";
  }else if (b==-2000) {
    move.style.left = -800 + "px";
  }else {
    move.style.left = a + b + "px";
  }
  console.log(move.style.left);

}
Left.onclick = function(){
  run(-400);
}
Right.onclick = function(){
  run(400);
}
var timed = setInterval(function(){
  run(-400);
},2000);
timed;
allImg.onmouseover = function() {
  clearInterval(timed);
}
allImg.onmouseout = function() {
  timed = setInterval(function(){
    run(-400);
  },2000);
}
