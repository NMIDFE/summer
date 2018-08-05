var windowWidth = $(window).width();
    if(windowWidth < 760){
        // do something
    }
    if(windowWidth > 760){
        var imgs_div=document.getElementById("imgs");
		var nav_div=document.getElementById("nav");
		var imgsUl=imgs_div.getElementsByTagName("ul")[0];
		var nav=nav_div.getElementsByTagName("ul")[0];
		var prious=document.getElementById("preous");
		var next =document.getElementById("next");
		var timer;
		var animTimer;
		var index=1;
		play();
		prious.onclick=function(){
			initImgs(index);
			index-=1;
			if(index<1){
				index=4;
			}
			animate(940);
			btnShow(index);
		}
		next.onclick=function(){
			initImgs(index);
			index+=1;
			if(index>4){
				index=1;
			}
			animate(-940);
			btnShow(index);
		}

		function animate(offset){
			var newLeft=parseInt(imgsUl.offsetLeft)+offset;
			if(newLeft>-940){
				donghua(-3760);	
			}else if(newLeft<-3760){
				donghua(-940);	
			}else{
				donghua(newLeft);
			}

		}
		function donghua(offset){
			clearInterval(animTimer);
			animTimer=setInterval(function(){
				imgsUl.style.left=imgsUl.offsetLeft+(offset-imgsUl.offsetLeft)/10 + "px";
				if(imgsUl.offsetLeft-offset<10&&imgsUl.offsetLeft-offset>-10){
					imgsUl.style.left=offset+"px";
					clearInterval(animTimer);
					play();			
				}
			},20);
		}
		function initImgs(cur_index){
			clearInterval(timer);
			clearInterval(animTimer);
			var off=cur_index*940;
			imgsUl.style.left=-off+"px";
		}
		function play(){
			timer=setInterval(function(){
				next.onclick();
			},2000)
		}
		function btnShow(cur_index){
			var list=nav.children;
			for(var i=0;i<nav.children.length;i++){
				nav.children[i].children[0].className="hidden";
			}
			nav.children[cur_index-1].children[0].className="current";
		}
		for(var i=0;i<nav.children.length;i++){
			nav.children[i].index=i;
			var sd=nav.children[i].index;
			nav.children[i].onmouseover=function(){
				index=this.index+1;
				initImgs(this.index+1);
				btnShow(this.index+1);
			}
			nav.children[i].onmouseout=function(){
				play();
			}
		}
    }