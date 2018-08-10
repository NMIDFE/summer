		 var logo = document.querySelector('#aqi-input');
		 var btn = document.querySelector('#button');
		 var cp = document.querySelector('#aqi-display');
		 function a(){
			 if(logo.value ==""){
				 cp.innerHTML = "你需要填上内容";
				 alert("你还没填东西啊，喵！");
			 }else{
				 cp.innerHTML = logo.value;
			 }
		 };
		 btn.onclick = function(){
			 a();
		 };
		 logo.onkeydown = function(e){
			 if(e&&e.keyCode == 13){
				 a();
			 }
		 };
