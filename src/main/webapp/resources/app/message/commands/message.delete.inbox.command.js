function DeleteMessageInboxCommand() {
	'use strict';
	
	$(".message-inbox-delete").on("click", function(event) {
		event.preventDefault();
		
		$(this).parents('tr').remove();
		
		DeleteMessagesService($(this).attr("data-message-id"));
		
		
	});

};