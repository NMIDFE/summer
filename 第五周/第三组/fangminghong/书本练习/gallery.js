function addLoadEvent (fn) {
	var oldonload = window.onload;
	if(typeof window.onload != 'function'){
		window.onload = fn;
	}else {
		window.onload = function () {
			oldonload();
			fn();
		}
	}
}

function insertAfter (newElement,targetElement) {
	var parent = targetElement.parentNode;
	if(parent.lastChild == targetElement){
		parent.appendChild(newElement);
	}else {
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}


function preparePlaceholder () {
	if(!document.getElementsByTagName) return false;
	if(!document.createTextNode) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("gallery")) return false;
	var placeholder = document.createElement("img");
	placeholder.setAttribute("id", "placeholder");
	placeholder.setAttribute("src", "images/banner1.jpg");
	placeholder.setAttribute("alt", "My image gallery");
	var description = document.createElement("p");
	description.setAttribute("id", "description");
	var desctext = document.createTextNode("Choose an image");
	description.appendChild(desctext);
	var gellery = document.getElementById("gallery");
	insertAfter(placeholder,gallery);
	insertAfter(description,placeholder);
}

function prepareGallery () {
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("gallery")) return false;
	var gellery = document.getElementById("placeholder");
	var links = gallery.getElementsByTagName("a");
	for(var i=0;i<links.length;i++){
		links[i].onclick =function () {
			return showPic(this);
		}
		links[i].onkeypress = links[i].onclick;
	}
}

function showPic (whichpic) {
	if(!document.getElementById("placeholder")) return false;
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src", source);
	if(!document.getElementById("description")) return false;
	if(whichpic.getAttribute("title")){
		var text = whichpic.getAttribute("title");
	}else {
		var test = "";
	}
	var description = document.getElementById("description");
	if(description.firstChild.nodeType == 3){
		description.firstChild.nodeValue = text;
	}
	return false;
}

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);