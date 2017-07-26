function MessageSentCommand() {
	'use strict';

	var message = atlantis.entity.messages.messageDto, messageMarkup ='<tr><th>Nick Name</th><th>Subject</th><th></th></tr>';

	
	if(!atlantis.entity.messages.messageDto){
		console.log("No messages");
		messageMarkup += '<tr><td>'
			+ "No messages"
			+ '</td><td>'
			+ '</td><td></td></tr>';
		
	} else if (message.length) {
		for (var i = 0; i < message.length; i++) {
			messageMarkup += '<tr><td>'
					+ String(message[i].recieverNickName)
					+ '</td><td>'
					+ message[i].subject
					+ '</td><td><button class="button message-sent-delete" data-message-id="'
					+ message[i].messageId + '">Delete</button><button class="button  message-sent-read message-sent-view " data-message-id="'
					+ message[i].messageId + '">Open</button></td></tr>';
		}

	} else {
		messageMarkup += '<tr><td>'
				+ message.recieverNickName
				+ '</td><td>'
				+ message.subject
				+ '</td><td>'
				+ '<button class="button message-sent-delete" data-message-id="'
				+ message.messageId + '">Delete</button><button class="button message-sent-read message-sent-view" data-message-id="'
				+ message.messageId + '">Open</button></td></tr>';

	}


	$('.testtable').html(messageMarkup);
	atlantis.eventManger.fire('written.all.sent.messages');

};

