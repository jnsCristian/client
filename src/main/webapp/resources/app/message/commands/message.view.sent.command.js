function OpenMessageSentCommand() {
	'use strict';

	$(".message-sent-view").on("click", function(event) {
		event.preventDefault();
		
		OpenMessagesSentService($(this).attr('data-message-id'));
		ReadMessagesService($(this).attr("data-message-id"));
		atlantis.eventManger.addListener('get.specific.message.success', function() {
		var temp= atlantis.entity.mess,messageMarkup ='<tr><th>Message</th></tr>';
		
		messageMarkup += '<tr><td><textarea readonly class="width">'
			+ temp.message
			+ '</textarea></td>';
		
		$(' .testtable').html(messageMarkup);
		
		});
		
		
		
	});

};