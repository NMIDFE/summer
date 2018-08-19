window.onload = function () {
  var cityLogo = document.querySelector('#aqi-city-input');
  var air = document.querySelector('#aqi-value-input');
  var zj = document.querySelector('#add-btn');
  var list = document.querySelector('.list');
  var li = list.getElementsByTagName('li');
  var btn = list.getElementsByTagName('button');
  var dj = document.querySelector('.dj')
  console.log(btn);
  function create(){
    var ll = document.createElement('li');
    var div = document.createElement('div');
    var bbtn = document.createElement('button');
    bbtn.className = "dj";
    bbtn.innerHTML = "删除";
    div.innerHTML =  cityLogo.value + " " + air.value;
    ll.appendChild(div);
    ll.appendChild(bbtn);
    list.appendChild(ll);
  }
  zj.onclick = function(){
    if(air.value%1==0){
    create();
    console.log(btn);
  }else {
    alert("error")
  }
  }
  function a() {
        for (var i = 0; i < btn.length; i++) {
         btn[i].index = i;
         btn[i].onclick = function(){
           for (var i = 0; i < 999999; i++) {
            if (list.childNodes[this.index].nodeType ==1) {
              list.removeChild(list.childNodes[this.index]);
              console.log(this.index);
              break;
            }else {
              this.index++;
            }
           }
         }
       }
     }
     addEventListener("click",a,false);
}
