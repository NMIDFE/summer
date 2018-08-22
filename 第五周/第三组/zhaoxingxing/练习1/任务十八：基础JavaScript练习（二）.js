var leftEnter = document.getElementsByClassName('left-enter')[0];
var rightEnter = document.getElementsByClassName('right-enter')[0];
var leftOut = document.getElementsByClassName('left-out')[0];
var rightOut = document.getElementsByClassName('right-out')[0];
var kuang = document.getElementsByClassName('kuang')[0];
var Ul = document.getElementsByTagName('ul')[0];
var paixu = document.getElementsByClassName('paixu')[0];
paixu.addEventListener('click',function() {
	var li = document.getElementsByTagName('li');
	for(var i=0;i<li.length-1;i++){
		for(var j = 0;j<li.length-1-i;j++) {
			if (li[j].textContent>li[j+1].textContent) {
				k = li[j].textContent;
				li[j].textContent = li[j+1].textContent;
				li[j+1].textContent = k;
				r = li[j].style.height;
				li[j].style.height = li[j+1].style.height;
				li[j+1].style.height = r;

			}
			else {
				continue;
			}
		}
	}
})
function checklist(){
	var length = document.getElementsByTagName('li').length;
	if (length+1 > 10) {
		alert("已满限制添加数量60");
		return 0;
	}
	else {
		return 1;
	}
}
function check(value) {
	var valength = value.length;
	if (valength == 0) {
		alert("请输入内容");
		return false;
	}
	for(var i=0;i<valength;i++) {
		var ch=value.charCodeAt(i);
		if(ch<48 || ch>57) {
			alert("请输入数字");
			return false;
		}
	}
	if (value>100||value<10) {
		alert("请输入10~100以内的数字")
		return false;
	}
	return 1;
	// ？？？？？？？？？上面那个if的条件放在下面的那个不可以
}
leftEnter.addEventListener('click',function() {
	var value = kuang.value;
	var n = checklist();
	if (n==0) {
		return;
	}
	else{}
	if (check(value)) {
	var Li = document.createElement('li');
	Li.textContent = value;
	var Ul = document.getElementsByTagName('ul')[0];
	var lilist = Ul.childNodes;
	Ul.insertBefore(Li,lilist[0]);
	Ul.firstChild.style.height = value+ "px"; 
	kuang.value = "";
	}
	else {
		return;
	}
},false);
rightEnter.addEventListener('click',function() {
	var value = kuang.value;
	var n = checklist();
	if (n==0) {
		return;
	}
	else{}
	if (check(value)) {
		var Li = document.createElement('li');
		Li.textContent = value;
		Ul.appendChild(Li);
		Ul.lastChild.style.height = value+ "px"; 
		kuang.value = "";
	}
})
leftOut.addEventListener("click",function() {
	length = 0;
	remove(length);
})
rightOut.addEventListener("click",function () {
	length = 1;
	remove(length);
})
function remove(length) {
	li = document.getElementsByTagName('li');
	if(length==0){
		length = 0;
	}
	else {
		length = li.length-1;
	}
	alert("移出的元素值为: " + li[length].textContent);
	var childs = Ul.childNodes;
	Ul.removeChild(childs[length]);
}
var int = setInterval("deletee()",50);
function deletee() {
	var li = document.getElementsByTagName('li');
		var childs = Ul.childNodes;
		for(let i=0;i<li.length;i++){
		li[i].onclick = function() {
			Ul.removeChild(childs[i]);
		}
	}
	// for(var i=0;i<li.length;i++){
	// 	li[i].onclick = function() {
	// 		Ul.removeChild(childs[i]);
	// 	}
	// }
}
