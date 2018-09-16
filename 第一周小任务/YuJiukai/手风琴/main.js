window.onload = function() {
    var oBox = document.getElementById('box'),
        oBoxP = oBox.getElementsByTagName('p'),
        i = 0,
        n = null;
       for(i = 0; i < oBoxP.length; i++) {
           oBoxP[i].index = i;
           oBoxP[i].onmouseover = function() {
               var index = this.index;
               if(n) {
                   clearInterval(n);
               }
               n = setInterval(function() {
               var oWidth = 500;
               for(i = 0; i < oBoxP.length; i++) {
                   if(index != oBoxP[i].index) {
                       var oTranslate = (40 - oBoxP[i].offsetWidth)/2;
                       oTranslate > 0 ? Math.ceil(oTranslate) : Math.floor(oTranslate);
                       oBoxP[i].style.width = oBoxP[i].offsetWidth + oTranslate + 'px';
                       oWidth -= oBoxP[i].offsetWidth;
                   };
               };
       oBoxP[index].style.width = oWidth + 'px';
      }, 30);
     };
    }
   }
   