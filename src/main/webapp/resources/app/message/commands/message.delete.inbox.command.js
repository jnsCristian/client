function DeleteMessageInboxCommand() {
	'use strict';
	
	$(".message-inbox-delete").on("click", function(event) {
		console.log($(this));
		event.preventDefault();
		
		$(this).parents('tr').remove();
		
		DeleteMessagesService($(this).attr("data-message-id"));
		
		
	});

};