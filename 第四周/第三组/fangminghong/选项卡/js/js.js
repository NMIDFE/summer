function $ (id) {
	/**
	 * id : 元素id
	 * return : 元素id
	 */
	return document.getElementById(id); 
}
var index = 0;
for(var i=0;i<$("navUl").children.length;i++){
	$("navUl").children[i].setAttribute("index", i);
	$("navUl").children[i].onmouseover = function () {
		for(var j=0;j<$("navUl").children.length;j++){
			$("navUl").children[j].removeAttribute("class");
			$("contentUl").children[j].removeAttribute("class");
		}
		this.className = "currentNav";
		index = this.getAttribute("index");
		$("contentUl").children[index].className = "current";
	};
}
