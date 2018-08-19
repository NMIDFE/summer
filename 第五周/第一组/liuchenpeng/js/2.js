window.onload = function () {
  var logo = document.querySelector('.logo');
  var charu = document.querySelector('.charu');
  var leftIn = document.querySelector('.left-in');
  var rightIn = document.querySelector('.right-in');
  var leftOut = document.querySelector('.left-out');
  var rightOut = document.querySelector('.right-out');
  var insert = charu.getElementsByTagName('div');
  function createR(z){
    var div = document.createElement('DIV');
    var text = document.createTextNode(z);
    div.appendChild(text);
    charu.appendChild(div);
  }
  function createL(z) {
    var div = document.createElement('DIV');
    var text = document.createTextNode(z);
    div.appendChild(text);
    charu.insertBefore(div,insert[0]);

  }
  function removeL(){
  for(var i = 0; i < charu.childNodes.length ; i++){
    if(charu.childNodes[i].nodeType == 1){
      charu.removeChild(charu.childNodes[i]);
      break;
    }
/* alert(charu.childNodes[i].nodeType);*/
    }
  }
  function removeR() {
    for(var i = charu.childNodes.length-1 ; i>=0 ; i--){
      if(charu.childNodes[i].nodeType == 1){
        charu.removeChild(charu.childNodes[i]);
        break;
      }
      }
  }
  rightIn.onclick = function() {
    createR(logo.value);
    logo.value = "";
  }
  leftIn.onclick = function () {
    createL(logo.value);
    logo.value = "";
  }
  leftOut.onclick = function () {
    removeL();
  }
  rightOut.onclick = function () {
    removeR();
  }
}
