window.onload=function(){
	var tops=document.getElementsByTagName('a');
	var lis=document.getElementsByTagName('li');
	var loop=0;
window.setInterval(function(){
	for (var i = 0; i < tops.length; i++) {
	tops[i].style.display="none";
	lis[i].className="";
}
	loop=loop+1;
	loop%=4;
	lis[loop].className="current";
	tops[loop].style.display="block"
},2000);
}