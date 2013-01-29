$(document).ready(function(){
	$(".content").hover(
		function () {
			//$(this).addClass("hover");
			$(this).prev().addClass("pointerhover");
		},
		  function () {
			//$(this).removeClass("hover");
			$(this).prev().removeClass("pointerhover");
		  }
	);
	
	$("#conMe").click(function () {
		$('.subtitletext, .titletext').hide();
		$('#subMe').fadeIn();
		$('#textcontent').fadeIn();
		$('#all').css('padding-top', '0px');
		$('#main').css('padding-top', '30px');
		$('#artTitle').html($(this).children().first().next().html());
		$('#artText').html($(this).children().first().next().next().html());
	});
	
	$("#conWork").click(function () {
		$('.subtitletext, .titletext').hide();
		$('#subWork').fadeIn();
		$('#textcontent').fadeIn();
		$('#all').css('padding-top', '0px');
		$('#main').css('padding-top', '30px');
		$('#artTitle').html($(this).children().first().next().html());
		$('#artText').html($(this).children().first().next().next().html());
	});
	
	$("#conContact").click(function () {
		$('.subtitletext, .titletext').hide();
		$('#subContact').fadeIn();
		$('#textcontent').fadeIn();
		$('#all').css('padding-top', '0px');
		$('#main').css('padding-top', '30px');
		$('#artTitle').html($(this).children().first().next().html());
		$('#artText').html($(this).children().first().next().next().html());
	});
})

