function DeleteMessageSentCommand() {
	'use strict';
	console.log("test")
	console.log($(".message-sent-delete").length)

	
	$(".message-sent-delete").on("click", function(event) {
		console.log($(this));
		event.preventDefault();
		
		$(this).parents('tr').remove();
		
		DeleteMessagesService($(this).attr("data-message-id"));
		
		
	});

};