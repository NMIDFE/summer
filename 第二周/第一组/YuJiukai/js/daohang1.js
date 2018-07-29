$(function(){
                var oTop1 = $(document).scrollTop(); 

                $(window).scroll(function(){
                    var oTop2 = $(document).scrollTop(); 

                    if(oTop2 > oTop1){
                        $(".header").addClass("hide").removeClass("show");
                    }else {
                          $(".header").addClass("show").removeClass("hide");
                    }
                    oTop1 = $(document).scrollTop();
                  });
            });