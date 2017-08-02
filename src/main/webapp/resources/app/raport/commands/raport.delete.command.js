function DeleteRaportCommand() {
	'use strict';
	
	$(".raport-delete").on("click", function(event) {
		event.preventDefault();
		$(this).parents('tr').remove();
		
		DeleteRaportService($(this).attr("data-raport-id"));
		
		
	});

};