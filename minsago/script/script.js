$(function(){
    //quickmenu
	$(".quickmenu ul li").click(function(){
		$(".quickmenu ul li").removeClass("active");
		$(this).stop().addClass("active");
	});
    
});