/**
 * 取得元素id
 */
function $ (id) {
	return document.getElementById(id); 
}
/**
 * 事件绑定
 */
function addEvent (element,type,fn) {
	if(element.addEventListener){
		element.addEventListener(type, fn, false);
	}else if(element.attachEvent){
		element.attachEvent("on"+type,fn);
	}else{
		element["on"+type] = fn;
	}
}
/**
 * 取得节点内容
 */
function getInnerText(element){
	if(element.textContent){
		return element.textContent;
	}else{
		return element.innerText;
	}
}
/**
 * 将新元素插入到现有元素之后
 * newElement: 插入的新元素
 * targetElement: 目标元素
 */
function insertAfter(newElement,targetElement) {
	var parent = targetElement.parentNode; // 此处在IE8-会出现兼容性错误,尚未解决
	if(parent.lastChild == targetElement){
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}
/**
 * 队列进入
 */
var container = $("container");
function queueIn (direction) {
	var value = $("input").value;
	if(container.children.length==0){
		var firstDiv = document.createElement("div");
		var text = document.createTextNode(value);
		firstDiv.appendChild(text);
		container.appendChild(firstDiv);
	}else{
		var OtherDivs = document.createElement("div");
		var text = document.createTextNode(value);
		OtherDivs.appendChild(text);
		if(direction == "left"){
			container.insertBefore(OtherDivs,container.children[0]);
		}else{
			insertAfter(OtherDivs,container.lastElementChild);
		}
	}
}
/**
 * 队列出去
 */
function queueOut (direction) {
	if(container.children.length==0){
		alert("当前没有要删除的节点");
	}else{
		if(direction == "left"){
			var delDivs = container.removeChild(container.children[0]);
			alert(getInnerText(delDivs));
		}else{
			var delDivs = container.removeChild(container.lastElementChild);
			alert(getInnerText(delDivs));
		}
	}
}
/**
 * 正则表达式
 * @type {RegExp}
 */
var check = /^[0-9]+$/;
/**
 * 为按钮添加点击事件
 */
addEvent($("leftIn"), "click", function () {
	var input = $("input").value;
	if(!check.test(input)){
		alert("请输入正确的数字");
		return;
	}else{
		queueIn("left");
	}
});
addEvent($("leftOut"), "click", function () {
	queueOut("left");
});
addEvent($("rightIn"), "click", function () {
	var input = $("input").value;
	if(!check.test(input)){
		alert("请输入正确的数字");
		return;
	}else{
		queueIn("right");
	}
});
addEvent($("rightOut"), "click", function () {
	queueOut("right");
});