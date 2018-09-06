function btn() {
    var username=$("#username").val();
    var password=$("#password").val();
    if (username=="" || username==null){
        alert("用户名不能为空");
    } else if(password==""||password==null){
        alert("密码不能为空");
    }else{
        $.post("http://120.78.51.133:8080/frontdemo/testAdd",{name:username,password:password},cell,"JSON");
        function cell(date) {
            if (date.result=="yes"){
                alert("注册成功");
                window.location.href="index.html"; 
            }else{
                alert("注册失败");
            }
        }
    }
}