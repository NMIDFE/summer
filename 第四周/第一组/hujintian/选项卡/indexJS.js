    var div1 = document.getElementsByClassName("no4")[0];
    var div2 = document.getElementsByClassName("no5")[0];
    var div3 = document.getElementsByClassName("no6")[0];
    var button1 = document.getElementsByClassName("no1")[0];
    var button2 = document.getElementsByClassName("no2")[0];
    var button3 = document.getElementsByClassName("no3")[0];
    function appear1() {
        div1.style.display = "block";
        div2.style.display = "none"
        div3.style.display = "none"
        button1.style.borderBottom = "1px white solid";
        button2.style.borderBottom = "1px gray solid";
        button3.style.borderBottom = "1px gray solid";
    }

    function appear2() {
        div2.style.display = "block";
        div1.style.display = "none";
        div3.style.display = "none";
        button2.style.borderBottom = "1px white solid";
        button1.style.borderBottom = "1px gray solid";
        button3.style.borderBottom = "1px gray solid";
    }

    function appear3() {
        div3.style.display = "block";
        div1.style.display = "none";
        div2.style.display = "none";
        button3.style.borderBottom = "1px white solid";
        button2.style.borderBottom = "1px gray solid";
        button1.style.borderBottom = "1px gray solid";
    }

document.getElementsByClassName("no1")[0].onclick = appear1;
document.getElementsByClassName("no2")[0].onclick = appear2;
document.getElementsByClassName("no3")[0].onclick = appear3;