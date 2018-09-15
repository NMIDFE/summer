// 获取 input 标签个数  ，ul标签 
var Btn = document.getElementsByTagName("input");
    oUl = document.getElementsByTagName("ul")[0],
    timer=null;
    console.log(Btn.length)
    console.log(oUl)
    for (var i=0;i<Btn.length;i++) {
        // 获取当前input标签的索引值 
        Btn[i].index=i;
        // 点击事件 
        Btn[i].onclick=function(){
            //获取 li 节点 
            var parent = this.parentNode,
            // 记录 此刻 li标签的top值，并转化解析为十进制 
                befor = parseInt(getStyle(parent,"top")),
            //获取 li 的前一节点 
                pre = this.parentNode.previousElementSibling,
            // 获取 li 的后一节点
                next = this.parentNode.nextElementSibling;
            // 清除定时器     
                clearInterval(timer);
            // Btn i 长度余数 进行上移
            if(this.index%2 == 0){
                //若该节点，为ul第一子节点，则无法继续上移
                if(this.parentNode == oUl.firstElementChild){
                    oUl.firstElementChild = this;
                }else{
                    //将节点元素插入该子节点以前
                    oUl.insertBefore(parent, pre);
                    //设置定时器
                    timer = setInterval(function(){
                        //获得该元素的定位值
                        var nowPos = parseInt(getStyle(parent,"top"));
                        //上移位置差值30
                        nowPos -= 30;
                        //获得此元素的上一个元素的定位值
                        var nowPosBefor = parseInt(getStyle(pre,"top"));
                        //下移定位置递加
                        nowPosBefor += 30;
                        //当差值等于30时清除定时器
                        if(befor - nowPos == 30){
                            clearInterval(timer);
                        }
                        parent.style.top = nowPos+"px";
                        pre.style.top = nowPosBefor+"px";
                    },0)// 时间为0
                }
            }else{
                //下移
                if(this.parentNode == oUl.lastElementChild){
                    oUl.lastElementChild = this;
                }else{
                    //元素交换
                    oUl.insertBefore(parent,next.nextElementSibling);
                    timer=setInterval(function(){
                        //获得该元素的定位值
                        var nowPos=parseInt(getStyle(parent,"top"));
                        //下移定位值递增
                        nowPos += 30;
                        //获得此元素的上一个元素的定位值
                        var nowPosBefor=parseInt(getStyle(next,"top"));
                        //上移定位值递减
                        nowPosBefor -= 30;
                        //当差值等于30时清除定时器
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
//获取样式
function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle(attr);
    }else{
        return getComputedStyle(obj)[attr];
    }
}