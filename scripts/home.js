$(document).ready(function () {
	$(".homeNav ul li:first").addClass("active");
	$(".tabContent:not(:first)").hide();
	$(".homeNav ul li a").click(function (event) {
		event.preventDefault();
		var content = $(this).attr("href");
		$(this).parent().addClass("active");
		$(this).parent().siblings().removeClass("active");
		$(content).show();
		$(content).siblings(".tabContent").hide();
	}); // end function
	$(".homeNav").hide();
	$("i").click(function () {
		$(".homeNav").slideToggle(100);
	}); // end click
});
