var p1 =document.getElementById("p1"); 
var p2 =document.getElementById("p2"); 
var p3 =document.getElementById("p3"); 
var p4 =document.getElementById("p4"); 
p1.style.display = "none"; 
p2.style.display = "none"; 
p3.style.display = "none"; 
p4.style.display = "none"; 
var box = new Array(p1,p2,p3,p4)
function selects(n){
for (var i = 0; i<4; i++) {
	if (n==i) {
box[i].style.display ="block";
	}
	else{
		box[i].style.display ="none";
	}
}

}