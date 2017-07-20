function DeleteRaportCommand() {
	'use strict';
	
	$(".raport-delete").on("click", function(event) {
		console.log($(this));
		event.preventDefault();
		debugger;
		$(this).parents('tr').remove();
		
		DeleteRaportService($(this).attr("data-raport-id"));
		
		
	});

};