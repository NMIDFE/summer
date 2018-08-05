var root = document.getElementById('root');
document.body.onmousewheel = function() {
	if (event.wheelDelta < 0) {
		root.style.display = "none";
		// ie上的电脑上下滑动实现不了
	}
	else if(event.wheelDelta > 0){
		root.style.display = "block";
		
	}
}
document.body.addEventListener('DOMMouseScroll', function(event) {
	// ????????????????????????????????????????????
  if (event.detail > 0) {
		root.style.display = "none";
	}
	else if(event.detail < 0){
		root.style.display = "block";
	}
});
// function dis() {
// 		var h = root.offsetHeight;
// 		h-=1;
// 		if(h>=0) {
// 			root.style.height = h + "px";
// 			setTimeout(dis,10);
// 		}
// 		else {
// 			return;
// 		}
// }
// function apr() {
// 		var h = root.offsetHeight;
// 		h+=1;
// 		if(h<=48) {
// 			root.style.height = h + "px";
// 			setTimeout(apr,10);
// 		}
// 		else {
// 			return;
// 		}
// }
	//  top = watch.scrollTop;
	// 	 topl = watch.scrollTop - document.scrollTop;
	// 	 alert(topl);
 // 到达顶部固定不定


	//  if (watch.offsetTop == 0) {
	// // 	alert(123);
	// // 我尽力了，还是不行
	
