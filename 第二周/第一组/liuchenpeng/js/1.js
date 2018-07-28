window.onload=function(){
	var menuu = document.querySelector('.menuu');
	function scroll(e){
		e = e||window.event;
		if(e.wheelDelta == 150){
			menuu.style.display = 'block';
		}else{
			menuu.style.display = 'none';
		}
	}
	window.onmousewheel = document.onmousewheel = scroll;
}