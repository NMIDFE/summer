var addLeft = document.getElementById('left_in');
var addRight = document.getElementById('right_in');
var deleteLeft = document.getElementById('left_out');
var deleteRight = document.getElementById('right_out');

//绑定事件
addLeft.addEventListener('click',addLeftHandle,false);
addRight.addEventListener('click',addRightHandle,false);
deleteLeft.addEventListener('click',deleteLeft,false);
deleteRight.addEventListener('click',deleteRight,false);

var queue = [];
//输入校验
function validate(){
	var reg = /^[0-9]+$/;
	var value = document.getElementById('num').value;
	if(!(reg.test(value))){
		alert('请输入整数');
		return;
	}else{
		return value;
	}
}
//数据渲染
function render(){
	var show = document.getElementById('show');
	var temp='';
	queue.forEach(function(value){
		temp += `
			<span>${value}</span>
		`;
	})
	show.innerHTML = temp;
}

function addLeftHandle(){
	var val = validate();
	if(val != undefined){
		queue.unshift(val);
	}
	render();
}
function addRightHandle(){
	var val = validate();
	if(val != undefined){
		queue.push(val);
	}
	render();
}
function deleteLeft(){
	var val = validate();
	queue.shift(val);
	render();
}
function deleteRight(){
	var val = validate();
	queue.pop(val);
	render();
}

