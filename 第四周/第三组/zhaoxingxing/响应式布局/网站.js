var prev = document.getElementsByClassName('all')[0].getElementsByClassName('prev')[0];
var next = document.getElementsByClassName('all')[0].getElementsByClassName('next')[0];
var list = document.getElementsByClassName('lunbo')[0].getElementsByClassName('list')[0];
var buttons = document.getElementsByClassName('buttons')[0].getElementsByTagName('span');
var lunbo = document.getElementsByClassName('lunbo')[0];
var index = 1;
var width = lunbo.offsetWidth;
var left = list.style.left;
var left =-width + "px";
var maxwidth = list.offsetWidth;
var maxww = list.style.maxwidth;
var maxww =-maxwidth + "px";
var name = 0;
function change() {
	if (name == 9999) {
		var left = list.style.left;
		left =-width + "px";
		name+=1;
		change();
	}
}
change();
prev.onclick = function () {
	changetoleft();
}
next.onclick = function () {
	changetoright();
}
function changetoright() {
	if (parseInt(list.style.left)>-width*4) {
		list.style.left = parseInt(list.style.left)-width+"px";
	}
	else {
		list.style.left = -width+"px";
	}
	if (index==4) {
		index = 1;
	}
	else {
		index +=1;
	}
	showbt(index);
}
function changetoleft() {
	if (parseInt(list.style.left)<-width) {
		list.style.left = parseInt(list.style.left)+width+"px";
	}
	else {
		list.style.left = -width*4+"px";
	}
	if (index==1) {
		index = 4;
	}
	else {
		index -= 1;
	}
	showbt(index);
}
function showbt(index) {
	for(var i = 0;i<buttons.length;i++){
		if (buttons[i].className=='on') {
			buttons[i].className = '';
		}
	}
	buttons[index-1].className = 'on';
}
for(var i=0;i<buttons.length;i++) {
	buttons[i].onclick = function() {
		if (this.className == 'on') {
		return;
		}
		var index = parseInt(this.getAttribute('index'))
		list.style.left = -width*index+"px";
		showbt(index);
	}
}
function play() {
        timer = setTimeout(function () {
            next.onclick();
            play();
        }, 2000);
    }
play();