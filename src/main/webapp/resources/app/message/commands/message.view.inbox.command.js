function OpenMessageInboxCommand() {
		'use strict';
		
		$(".message-inbox-view").click( function(event) {
			event.preventDefault();
			
			OpenMessagesService($(this).attr('data-message-id'));
			atlantis.eventManger.addListener('get.specific.message.success', function() {
			var temp= atlantis.entity.message,messageMarkup = "";
			console.log(temp,'message');
			messageMarkup = '<tr><td>'
				+ temp.message
				+ '</td>';
			
			$(' .testtable tbody').html(messageMarkup);
			
			
			});
			
		});

	};