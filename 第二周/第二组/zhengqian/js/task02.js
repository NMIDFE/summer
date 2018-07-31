$(document).ready(function(){
	var imgLists = $('.pics li');
	var m = 0;	
	var arr = [];	
	var len;
	var curIndex = 0;	//第几个五张
	var showlen = 5;
	imgLists.each(function(i){
		var $this = imgLists[i];
		arr.push($this);
		if(i>=showlen){
			// alert('hide');
		}
	})
	len = arr.length;
	console.log(len);
	function normal(cur){
		// cur = cur||0;
		alert(cur);
		for(var i = cur;i<showlen;i++){
			console.log(arr[i]);
			arr[i].style.display='block';
		}
	};
	normal(0);
	$('#prev').click(function(){
		if(curIndex>0){
			curIndex--;
			normal(curIndex*5);
		}else{
			alert('已经是最前面');
		}
	})
	$('#next').click(function(){
		if(curIndex<=(len/showlen)){
			curIndex++;
			normal(curIndex*5);
		}else{
			alert('已经是最后图片');
		}	
	})
})