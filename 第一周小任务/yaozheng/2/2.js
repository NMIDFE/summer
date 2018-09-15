window.onload = function() {
 var oBox = document.getElementById('box'),
 //获取 div 
     oBoxP = oBox.getElementsByTagName('p'),
     //获取节点数组
     i = 0,
     //归零
     n = null;
     //归零值
    for(i = 0; i < oBoxP.length; i++) {
        oBoxP[i].index = i;
        //设置索引值，闭包
        oBoxP[i].onmouseover = function() {
        //鼠标移过 触发，并获取此对象索引值
            var index = this.index;
            //console.log(i)
            //console.log(this.index)
            if(n) {
                clearInterval(n);
                //清除变量，释放内存
            }
            n = setInterval(function() {
                //设置timer
            var oWidth = 500;
            for(i = 0; i < oBoxP.length; i++) {
                if(index != oBoxP[i].index) {
                    var oTranslate = (40 - oBoxP[i].offsetWidth)/2//;
                    // 颜色块移动速度
                    //console.log(oTranslate)
                    oTranslate > 0 ? Math.ceil(oTranslate) : Math.floor(oTranslate);
                    //取整
                    oBoxP[i].style.width = oBoxP[i].offsetWidth + oTranslate + 'px';
                    //更改主颜色块的宽度
                    oWidth -= oBoxP[i].offsetWidth;
                    //console.log(oWidth)总宽度
                };
            };
    oBoxP[index].style.width = oWidth + 'px';
    //分颜色块宽度
   }, 30);
  };
 }
}
