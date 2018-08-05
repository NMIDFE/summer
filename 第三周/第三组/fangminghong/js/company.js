
// 实现COMPANY模块点击切换
// 
window.onload = function(){
	var choiceOne = document.getElementById("choiceOne");
	var OneChild = choiceOne.children;
	var choiceTwo =document.getElementById("choiceTwo");
	var TwoChild = choiceTwo.children;
	for(var i=0;i<OneChild.length;i++){
		OneChild[i].setAttribute("index", i);
		OneChild[i].onclick = function(){
			for(var j=0;j<OneChild.length;j++){
				OneChild[j].removeAttribute("class");
			}
			for(var k=0;k<TwoChild.length;k++){
				TwoChild[k].removeAttribute("class");
			}
			var index = this.getAttribute("index");
			this.className = "active";
			TwoChild[index].className = "show";
			
		}
	}
};