 //  Gallery
var galleryLis=$('#gallery').children();
$('#gallery').children().on("mouseover",function(){
	$('#gallery').children().removeClass("transparency1");
	$('#gallery').children().addClass('transparency2');
	$(this).removeClass('transparency2');
	$(this).addClass('transparency1');
});
$('#gallery').children().on("mouseout",function(){
	$('#gallery').children().removeClass("transparency2");
	$('#gallery').children().addClass('transparency1');
});
