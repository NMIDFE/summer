var Btn = document.getElementsByTagName("input");
    oUl = document.getElementsByTagName("ul")[0],
    timer=null;
    for (var i=0;i<Btn.length;i++) {
        Btn[i].index=i;
        Btn[i].onclick=function(){
            var parent = this.parentNode,
                befor = parseInt(getStyle(parent,"top")),
                pre = this.parentNode.previousElementSibling,
                next = this.parentNode.nextElementSibling;
                clearInterval(timer);
            if(this.index%2 == 0){
                if(this.parentNode == oUl.firstElementChild){
                    oUl.firstElementChild = this;
                }else{
                    oUl.insertBefore(parent, pre);
                    timer = setInterval(function(){
                        var nowPos = parseInt(getStyle(parent,"top"));
                        nowPos -= 30;
                        var nowPosBefor = parseInt(getStyle(pre,"top"));
                        nowPosBefor += 30;
                        if(befor - nowPos == 30){
                            clearInterval(timer);
                        }
                        parent.style.top = nowPos+"px";
                        pre.style.top = nowPosBefor+"px";
                    },0)
                }
            }else{
                if(this.parentNode == oUl.lastElementChild){
                    oUl.lastElementChild = this;
                }else{
                    oUl.insertBefore(parent,next.nextElementSibling);
                    timer=setInterval(function(){
                        var nowPos=parseInt(getStyle(parent,"top"));
                        nowPos += 30;
                        var nowPosBefor=parseInt(getStyle(next,"top"));
                        nowPosBefor -= 30;
                        if(nowPos - befor == 30){
                            clearInterval(timer);
                        }
                        parent.style.top = nowPos+"px";
                        next.style.top = nowPosBefor+"px";
                    },0)
                }
            }
            
    }
}
function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle(attr);
    }else{
        return getComputedStyle(obj)[attr];
    }
}