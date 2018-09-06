// 轮播

//跑动次数，动画方向，定义计时器
var count = 0,
    isgo = false,
    timer;

window.onload = function () {
    //获取ul li 方向箭头 按钮
    var img_wrap = this.document.getElementsByClassName("img-wrap")[0],
        item = this.document.getElementsByClassName("item"),
        btn1= this.document.getElementsByClassName("btn1"),
        btn = document.getElementsByClassName("btn");

    btn[0].style.backgroundColor = "white";

    // 定义计时器,控制图片移动
    showtime();
    function showtime() {
        timer = setInterval(function () {
            if (isgo == false) {
                count++;
                img_wrap.style.transform = "translate(" + -1519 * count + "px)";
                if (count >= item.length - 1) {
                    count = item.length - 1 ;
                    isgo = true ;
                }
            }
            else {
                count--;
                img_wrap.style.transform = "translate(" + -1519 * count + "px)";
                if (count <= 0) {
                    count = 0;
                    isgo = false;
                }
            }
            for (var i = 0;i < btn.length; i++) {
                btn[i].style.backgroundColor = "#868686";
            }
            btn[count].style.backgroundColor = "white";
        },4000)
    }
    // 左右按钮操作
    for ( var i = 0; i < btn1.length; i++) {
        //鼠标悬停
        btn1[i].onmouseover = function () {
            //停止计时器
            clearInterval(timer);
        }
        //鼠标离开时
        btn1[i].onmouseout = function () {
            //添加计时器
            showtime();
        }
        btn1[i].onclick = function () {
            //区分左右
            if (this.title == 0) {
                count++;
                if (count > 3) {
                    count = 0;
                }
            }
            else {
                count--;
                if(count < 0) {
                    count = 3 ;
                }
            }
            img_wrap.style.transform = "translate(" + -1519 * count + "px)";
            for (var i = 0;i < btn.length; i++) {
                btn[i].style.backgroundColor = "#868686";
            }
            btn[count].style.backgroundColor = "white";
        }
    }
    //鼠标悬停在底部按钮
    for( var b = 0; b < btn.length; b++) {
        btn[b].index = b;
        btn[b].onmouseover = function () {
            clearInterval(timer);
            for (var a = 0; a < btn.length ; a++) {
                btn[a].style.backgroundColor = "#868686";
            }
            btn[this.index].style.backgroundColor = "white";
            //让count值对应
            //控制方向
            if (this.index == 4) {
                isgo = ture;
            }
            if(this.index == 0) {
                isgo = false;
            }
            count = this.index;
            img_wrap.style.transform = "translate(" + -1519 * count + "px)";
        }
        btn[b].onmouseout = function() {
            showtime();
        }
    }
}