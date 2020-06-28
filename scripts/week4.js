// Week 4 OSB

// $(document).ready(function () {
// 	$(".hideText").hide();
// }); // end ready
$(document).ready(function () {
	$(".readMore").click(function () {
		$(".hideText").each(function () {
			$(this).toggle();
		});
	}); // end click
});

// $(document).ready(function () {});
