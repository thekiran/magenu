$(function(){
	//	Initialize Superfish
	$('.sf-menu').superfish({
		autoArrows: false
	});
	$('.list-2 li').hover(
		function(){
			$(this).find("img").stop().animate({opacity:'0.5'},200)
		},
		function(){
			$(this).find("img").stop().animate({opacity:'1'},200)
		}
	)
})