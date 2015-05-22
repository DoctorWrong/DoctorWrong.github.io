$(function() {
	$.material.init();
	$("#unclezheng .banner-title").lettering().fitText(0.73);

	$(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scrollTop').fadeIn();
        } else {
            $('#scrollTop').fadeOut();
        }
    });

    $('#scrollTop').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
});