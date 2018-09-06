window.onload = function(){
    console.log(2)
    var name3 = document.cookie;
    var name4 = name3.split("=");
    if(name4[1]=="hell"){
        console.log(1)
    };
    
}