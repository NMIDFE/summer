$(function() {
    var denglu = $("#denglu");
    var login_area = $(".login_area");
    denglu.click(function() {
        var username=$("#username").val();
        var password=$("#password").val();
        if (username=="" || username==null){
            alert("用户名不能为空");
        } else if(password==""||password==null){
            alert("密码不能为空");
        }else{
            $.post("http://120.78.51.133:8080/frontdemo/testLogin",{name:username,password:password},cell,"JSON");
            function cell(date) {
                if (date.result=="yes"){
                    alert("登录成功");
                    window.location.href = "kugou.html";
                }else{
                    alert("登录失败");
                }
            }
        }
    });
});