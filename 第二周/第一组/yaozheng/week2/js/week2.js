window.onload=function(){
	var nav = document.querySelector('.nav');
	function scroll(e){
		e = e||window.event;
		if(e.wheelDelta == 150){
			nav.style.display = 'block';
		}else{
			nav.style.display = 'none';
		}
	}
	window.onmousewheel = document.onmousewheel = scroll;
}