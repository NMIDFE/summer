    var oBox = document.getElementById("box");
    var aBtn = oBox.getElementsByTagName("input");
    var aDiv = oBox.getElementsByTagName("div");
    for(var i=0;i<aBtn.length;i++){
        aBtn[i].index=i;
        aBtn[i].onclick=function(){
            for(var k=0;k<aBtn.length;k++){
                aBtn[k].className ='';
                aDiv[k].style.display ='none';
            }
            this.className ='on';
            aDiv[this.index].style.display ='block';
        };
    }