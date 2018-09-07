var aas=document.getElementsByClassName('nav')[0].getElementsByTagName('a');
var nav_2=document.getElementsByClassName('nav-2')[0];
var lun=document.getElementsByClassName('lun')[0];
var conn=document.getElementsByClassName('conn')[0];
var page2=document.getElementsByClassName('page2')[0];
aas[2].onclick=function(){
    nav_2.style.display="none";
    lun.style.display="none";
    conn.style.display="none";
    page2.style.display="block";
    aas[1].className="";
    aas[2].className="li_onbluer";
}
aas[1].onclick=function(){
    page2.style.display="none";
    nav_2.style.display="block";
    lun.style.display="block";
    conn.style.display="block";
    aas[2].className="";
    aas[1].className="li_onbluer";
}