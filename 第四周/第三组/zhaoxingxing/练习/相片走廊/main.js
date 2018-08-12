var displayedImage = document.getElementsByClassName('displayed-img');
var thumbBar = document.querySelector('.thumb-bar');
btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
for(var i=0;i<displayedImage.length;i++) {
	var src = displayedImage[i].src;
  var newImage = document.createElement('img');
  newImage.setAttribute('src', src);
  thumbBar.appendChild(newImage);
}
var img = thumbBar.getElementsByTagName('img');
// for(let i=0;i<img.length;i++) {
// 	img[i].addEventListener("click",appear.bind(i,i),false);
// };
// function appear(i,e) {
// 	console.log(i);
// 	console.log(e);

// 		displayedImage[i].style.display = "block";
// 	}


for(let i=0;i<img.length;i++){
	img[i].onclick=function(){
		for(var m=0;m<displayedImage.length;m++){
			displayedImage[m].style.display = "none";
		}
		displayedImage[i].style.display="block";
	}
}
/* Wiring up the Darken/Lighten button */

