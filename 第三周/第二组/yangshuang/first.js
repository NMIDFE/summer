function fade()
var s= document.getElementByClassName("hov1");
var jishu=s.parentNode.childNode()
for ( var i=1; i <= jishu.length-1; i++ )
{
jishu[i].opacity=0.3;
}