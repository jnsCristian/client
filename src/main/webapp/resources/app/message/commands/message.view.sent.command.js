function OpenMessageSentCommand() {
	'use strict';

	$(".message-sent-view").on("click", function(event) {
		event.preventDefault();
		
		OpenMessagesSentService($(this).attr('data-message-id'));
		atlantis.eventManger.addListener('get.specific.message.success', function() {
		var temp= atlantis.entity.mess,messageMarkup = "";
		
		messageMarkup = '<tr><td>'
			+ temp.message
			+ '</td>';
		
		$(' .testtable tbody').html(messageMarkup);
		
		});
		
		
		
	});

};