

var numSave = new Array();




function insLeft(){
	var num = document.getElementById("numIn").value;
	var sexnum=/^[0-9]+$/;
	if(sexnum.test(num)){
        
		numSave.unshift([num]);
		display();
	}
	else{
		alert("输入有误，必须为数字~");
	}
}
function insRight(){
	var num = document.getElementById("numIn").value;
	var sexnum=/^[0-9]+$/;
	if(sexnum.test(num)){
      
		numSave.push([num]);
		display();		
	}
	else{
		alert("输入有误，必须为数字~");
	}
}
function delLeft(){
	var num = document.getElementById("numIn").value;
	var sexnum=/^[0-9]+$/;
	if(sexnum.test(num)){
      
		numSave.shift();
		alert(num);
		display();
	}
	else{
		alert("输入有误，必须为数字~");
	}
}
function delRight(){
	var num = document.getElementById("numIn").value;
	var sexnum=/^[0-9]+$/;
	if(sexnum.test(num)){
       
		numSave.pop();
		alert(num);
		display();
	}
	else{
		alert("输入有误，必须为数字~");
	}
}


clickBut();



//显示函数
function display(){
		document.getElementById("display").innerHTML='';//每次将div清空
	for(var i = 0;i<numSave.length;++i){
		document.getElementById("display").innerHTML+="<span class='red' id='"+i+"'>"+numSave[i]+"</span>";
	}
}
function clickBut(){
	document.getElementById("leftIn").onclick = insLeft;
	console.log(leftIn);
	document.getElementById("rightIn").onclick = insRight;
	document.getElementById("leftOut").onclick = delLeft;
	document.getElementById("rightOut").onclick = delRight;
}




