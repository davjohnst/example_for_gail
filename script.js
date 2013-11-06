
var toggle = function() {
	if($(this).html() != "...") {
		$(this).data("old", $(this).html());
		$(this).html("...");
	} else {
		var old = $(this).data("old");
		$(this).html(old);
	}
}

$(document).ready(function() {
	$("pre").click(toggle);
})