///<reference path="finch.js"/>
$(function () {
	//	Finch.route("about", function () {		
	//	});

	//	Finch.route("contact", function () {
	//	});

	Finch.route("", function () {
		loadContent("index");
	});

	Finch.route("/:page", function (bindings) {
		loadContent(bindings.page);
	});

	Finch.listen();
});


function loadContent(view) {
	$.get("./views/" + view + ".tmpl", function (data) {
		$("#mainContent").html(data);
	});
}