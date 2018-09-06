window.onload = function(){
        document.getElementById("btn_showlogin").onclick = shogMinLogin;
        document.getElementById("close_minilogin").onclick = closeLogin;
        document.getElementById("firstLine").onmousedown = moveLogin;
        /* 显示登录窗口 */
        function shogMinLogin(){
            var mini_login = document.getElementsByClassName("mini_login")[0];
            var cover = document.getElementsByClassName("cover")[0];
            mini_login.style.display = "block";
            cover.style.display = "block";
            
            mini_login.style.left = (document.body.scrollWidth - mini_login.scrollWidth) / 2 + "px";
            mini_login.style.top = (document.body.scrollHeight - mini_login.scrollHeight) / 9 + "px";
            console.log(mini_login.style.left)
            console.log(mini_login.style.top)
        }
    
        /* 关闭登录窗口 */
        function closeLogin(){
            var mini_login = document.getElementsByClassName("mini_login")[0];
            var cover = document.getElementsByClassName("cover")[0];
            mini_login.style.display = "none";
            cover.style.display = "none";
        }
    
        /* 移动登录窗口 */
        function moveLogin(event){
            var moveable = true;
    
            //获取事件源
            event = event ? event : window.event;
            var clientX = event.clientX;
            var clientY = event.clientY;
            
            var mini_login = document.getElementById("mini_login");
            console.log(mini_login);
            var top = parseInt(mini_login.style.top);
            var left = parseInt(mini_login.style.left);//鼠标拖动
            document.onmousemove = function(event){
                if(moveable){
                    event = event ? event : window.event;
                    var y = top + event.clientY - clientY;
                    var x = left + event.clientX - clientX;
                    if(x>0 && y>0){
                        mini_login.style.top = y + "px";
                        mini_login.style.left = x + "px";
                    }
                }
            }
            //鼠标弹起
            document.onmouseup = function(){
                moveable = false;
            }
        }


        var un = document.getElementById("username").value;
        var name3 = document.cookie;
        var name4 = name3.split("=");
        console.log(name4)
        if(name4[1]==un){
                console.log(1);
                var show = document.getElementById("show");
                show.classList.add('shows');
                show.innerHTML = un;
                console.log(un);
                document.getElementById("mini_login").style.display = "none";
                document.querySelector(".cover").style.display = "none";
        };
    };