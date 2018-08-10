window.onload = function  () {
	function $(id) {
		return document.getElementById(id);
	}
	//移动动画
	function animate(element,target,speed) {
		clearInterval(element.timeID);
		element.timeID = setInterval(function () {
			var current = element.offsetLeft;
			var step = 10;
			step = current < target ? step:-step;
			current += step;
			if(Math.abs(target-current)>Math.abs(step)){
				element.style.left = current + "px";
			}else{
				clearInterval(element.timeID);
				element.style.left = target + "px";
			}
		}, speed);
	};
	var box = $("box");
	var photosUl = $("photos");
	var photosLi = photosUl.children;
	var imgWidth = photosLi[0].offsetWidth;
	var newNode = photosLi[0].cloneNode(true);
	photosUl.appendChild(newNode);
	var choice = $("choice");
	var choiceLi = choice.children;
	var index=0 ;

	// 鼠标悬停轮播
	for(var i=0;i<choiceLi.length;i++){
		choiceLi[i].setAttribute("index", i);
		choiceLi[i].onmouseover = function () {
			for(var j=0;j<choiceLi.length;j++){
				choiceLi[j].removeAttribute("class");
			}
			this.className = "current";
			index = this.getAttribute("index");
			animate($("photos"),-(index*imgWidth),1);
		};
	}
	
	//鼠标点击轮播
	$("left").onclick = leftMove;
	function leftMove(){
		if(index==0){
			index = $("photos").children.length-1;
			$("photos").style.left = -index*imgWidth + "px" ;
		}
		index--;
		for(var i=0;i<$("choice").children.length;i++){
			$("choice").children[i].className = "";
		}
		$("choice").children[index].className = "current";
		animate($("photos"),-(index*imgWidth),1);
	};
	$("right").onclick = rightMove;
	function rightMove(){
		if(index==$("photos").children.length-1){
			$("photos").style.left =  0;
			index = 0;
		}
		index++;
		if(index==$("photos").children.length-1){
			$("choice").children[$("choice").children.length-1].className = "";
			$("choice").children[0].className = "current";
		}else{
			for(var i=0;i<$("choice").children.length;i++){
				$("choice").children[i].className = "";
			}
			$("choice").children[index].className = "current";
		}
		animate($("photos"),-(index*imgWidth),1);
	};
	//自动轮播
	var rightTimeID=setInterval(rightMove, 2000);
	box.onmouseover = function () {
		clearInterval(rightTimeID);
	};
	box.onmouseout = function () {
		rightTimeID=setInterval(rightMove, 2000);	
	};
};