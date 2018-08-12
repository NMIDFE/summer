window.onload = function(){
    tab("tab_1","li","tab_2","div","onmouseover")
    function tab(tab_1,tab_1_tag,tab_2,tag_c_tag,evt){
        var tab_1 = document.getElementById(tab_1);
        var tab_1_li = tab_1.getElementsByTagName(tab_1_tag);
        var tab_2 = document.getElementById(tab_2);
        var tab_2_li = tab_2.getElementsByTagName(tag_c_tag);
        var len = tab_1_li.length;
        var i=0;
    for(i=0; i<len; i++){
        tab_1_li[i].index = i;
        tab_1_li[i][evt] = function(){
    for(i=0; i<len; i++){
        tab_1_li[i].className = '';
        tab_2_li[i].className = 'hide';
    }
        tab_1_li[this.index].className = 'rep';
        tab_2_li[this.index].className = '';
    }
    }
    }
}