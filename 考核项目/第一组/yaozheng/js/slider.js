var img = document.querySelectorAll('.img');
var post = document.querySelector('.post_left_icon');
var next = document.querySelector('.post_right_icon');
console.log(next)
var i = 0;
post.addEventListener('click',function(){
    if(i>5){
        i=0;
    }
    for(var n=0;n<img.length;n++){
        img[n].classList.remove('active');
    }
    img[i].classList.add('active');
    i++;
    console.log(i)
})

next.addEventListener('click',function(){
    if(i<0){
        i=5;
    }
    for(var n=0;n<img.length;n++){
        img[n].classList.remove('active');
    }
    img[i].classList.add('active');
    i--;
    console.log(i)
})
var timer =null;

timer = setInterval(function(){
    if(i>5){
        i=0;
    }
    for(var n=0;n<img.length;n++){
        img[n].classList.remove('active');
    }
    img[i].classList.add('active');
    i++;
    console.log(i)
},3000)

var img = document.querySelectorAll('.img');
var post = document.querySelector('.post_left_icon');
var next = document.querySelector('.post_right_icon');
console.log(next)
var i = 0;
post.addEventListener('click',function(){
    if(i>5){
        i=0;
    }
    for(var n=0;n<img.length;n++){
        img[n].classList.remove('active');
    }
    img[i].classList.add('active');
    i++;
    console.log(i)
})

next.addEventListener('click',function(){
    if(i<0){
        i=5;
    }
    for(var n=0;n<img.length;n++){
        img[n].classList.remove('active');
    }
    img[i].classList.add('active');
    i--;
    console.log(i)
})
var timer =null;

timer = setInterval(function(){
    if(i>5){
        i=0;
    }
    for(var n=0;n<img.length;n++){
        img[n].classList.remove('active');
    }
    img[i].classList.add('active');
    i++;
    console.log(i)
},3000)