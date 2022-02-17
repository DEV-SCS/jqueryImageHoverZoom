let panelMouseOver,
	minwidth = 767,
	dynemicOwl = $("#product_carousel_dynemic");

$("*").on("mousemove", function (event) {
	if ($(".cerceve").is(event.target) || 
		$(".mouseP").is(event.target) || 
		$(event.target).hasClass('.cerceve') || 
		$(event.target).hasClass('.mouseP'))
	{
		
	}
	else {
		$('.cerceve .image ').hide();
		$(".cerceve .mouseP").hide();
	}
})
$(".zoomImage").on("mousemove", function (event) {
	if (panelMouseOver != undefined && panelMouseOver != null)
		panelMouseOver.remove();
	var resim = $(this);
	$("body .cerceve").remove();
	var randomId = "";
	//var randomId = "Z" + Math.floor((Math.random() * 1000000) + 1);
	//resim.attr("id", randomId);
	$("body").append('<div class="cerceve" data-index="' + resim.data("index") + '" onclick="' + resim.attr('onclick') + '" >\
				<div class="mouseP"></div>\
				<div class="image lazy loadingimg" data-srcauto="0" ></div>\
			</div>');
	if (resim.attr("src").indexOf("spacer") == -1) {
		resim.css('width', resim.width() + "px");
		resim.css('height', resim.height() + "px");
		var oran = 40;
		var buyutoran = (100 / oran);
		var width = (resim.width() / 100 * oran);
		var height = (resim.height() / 100 * oran);
		$('.cerceve .mouseP').css('box-shadow', "0px 0px 10px #000");
		$('.cerceve .mouseP').css('border', "1px solid #000");
		$('.cerceve .mouseP').css('width', parseInt(width) + "px");
		$('.cerceve .mouseP').css('height', parseInt(height) + "px");
		$('.cerceve').css('width', resim.width() + "px"),
			$('.cerceve').css('height', resim.height() + "px"),
			$('.cerceve').css('position', "absolute"),
			$('.cerceve').css("left", resim.offset().left + "px"),
			$('.cerceve').css("top", resim.offset().top + "px");
		$('div#product_carousel_dynemic_nav').css('height', resim.height() - 40 + "px");
		$('.cerceve .image').data("src", resim.data('large-image'));
		$('.cerceve .image').css("background-image", "url('"+resim.data('large-image')+"')");
		$('.cerceve .image').removeClass("loaded");
		$(window).trigger("scroll");
		$('.cerceve .image').css("background-size", (resim.width() * buyutoran) + "px " + (resim.height() * buyutoran) + "px");
		panelMouseOver = $(".cerceve").on("mousemove", function (event) {
			var cerceveevent = $(this);
			$('.cerceve .image').show();
			$(".cerceve .mouseP").show();
			var topMouse = (event.pageY - cerceveevent.offset().top);
			var leftMouse = (event.pageX - cerceveevent.offset().left);
			var toparafark = 0; var leftarafark = 0;
			if (topMouse > (height / 2))
				if (topMouse > (cerceveevent.height() - (height / 2)))
					toparafark = (cerceveevent.height() - height);
				else
					toparafark = topMouse - (height / 2);
			if (leftMouse > (width / 2))
				if (leftMouse > (cerceveevent.width() - (width / 2)))
					leftarafark = (cerceveevent.width() - width);
				else
					leftarafark = leftMouse - (width / 2);
			$('.cerceve .mouseP').css("transform", "translate(" + parseInt(leftarafark) + "px, " + parseInt(toparafark) + "px)");
			$('.cerceve .image').css("background-position-x", "-" + parseInt(leftarafark * buyutoran) + "px");
			$('.cerceve .image').css("background-position-y", "-" + parseInt(toparafark * buyutoran) + "px");
		});
	}
});

$(".cerceve").on("click", function (event) {
	$("#" + $(this).data("id")).parents("a").click();
});
