window.onload=function () {
	var alllis= $("thead").getElementsByTagName('li');
	var allbo=$("tbody").getElementsByClassName('con');
	for (var i = 0;i<alllis.length;i++){
		var li = alllis[i];
		li.index=i;
		li.onmouseover=function() {
			for (var j= 0; j < alllis.length; j++) {
				alllis[j].className='';
				allbo[j].style.display="none";
			}
			this.className="selected";
			allbo[this.index].style.display="block";
		}
		}
	





	function $(id){
		return typeof id==="string"?document.getElementById(id):null;
	}
}