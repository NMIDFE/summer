$(function () {
    var login_btn = $(".login_btn");
    var login = $(".login");
    var login_close = $(".login_close");

    //弹出登录框
    login_btn.click(function() {
        login.css("display","block");
    });
    //关闭登录框
    login_close.click(function() {
        login.css("display","none");
    });
}
);