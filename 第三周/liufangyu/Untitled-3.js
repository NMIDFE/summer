window.onload=function(){
	var moveall = document.querySelector(".moveall")
	var left = document.querySelector('#left');
	var right = document.querySelector("#right");
	var bg = document.querySelector(".round").getElementsByTagName('li');
	var round = document.querySelector(".round");
	bg[0].style.backgroundColor = "black";
	moveall.style.left = 0 + "px";
		function move(a){
		var b = parseInt(moveall.style.left)+a;
		if(b<-2820){
			moveall.style.left = 0 +"px";
		}else if(b>0){
			moveall.style.left = -2820 + "px";
		}else{
			moveall.style.left = b + "px";
		}
		}
		function changes1(){
			for(var i = 0;i<4;i++){
				if(bg[i].style.backgroundColor =="black"){
					if(i==3){
					bg[0].style.backgroundColor ="black";
					bg[i].style.backgroundColor ="white";
					}else{
					bg[i+1].style.backgroundColor ="black";
					bg[i].style.backgroundColor ="white";
					}
					break;					
				}	
			}
		}
		function changes2(){
			for(var i = 3;i>-1;i--){
				if(bg[i].style.backgroundColor =="black"){
					if(i==0){
					bg[3].style.backgroundColor ="black";
					bg[i].style.backgroundColor ="white";
					}else{
					bg[i-1].style.backgroundColor ="black";
					bg[i].style.backgroundColor ="white";
					}
					break;					
				}	
			}
		}
	
	
	left.onclick = function(){
	move(-940);
	changes1();
	}
	right.onclick = function(){
		move(940);
		changes2();
	}
	var timed = setInterval(left.onclick,2000);
	timed;	 
	 moveall.onmousemove = function(){
		clearInterval(timed);
	 }

	moveall.onmouseout = function(){
	timed = setInterval(left.onclick,2000);
	}
}