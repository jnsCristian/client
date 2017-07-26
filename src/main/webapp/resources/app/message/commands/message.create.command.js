function MessageCreateCommand() {
	'use strict';

	var message = {};

	$('.create-message').on('submit', function(event) {
		event.preventDefault();
		
		$(".message-field").each(function() {
			message[$(this).attr('data-type')] = $(this).val() || null;
		});
		CreateMessageService(message);
	})
	
};
