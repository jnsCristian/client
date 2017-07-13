function MessageSentCommand() {
	'use strict';

	var message = atlantis.entity.messages.messageDto, messageMarkup = "";

	console.log(atlantis.entity.messages);
	
	if(!atlantis.entity.messages.messageDto){
		console.log("No messages");
		messageMarkup += '<tr><td>'
			+ "No messages"
			+ '</td><td>'
			+ '</td><td></td></tr>';
		
	} else if (message.length) {
		for (var i = 0; i < message.length; i++) {
			console.log(message[i].sourceNickName);
			messageMarkup += '<tr><td>'
					+ String(message[i].sourceNickName)
					+ '</td><td>'
					+ message[i].subject
					+ '</td><td><button class="button message-sent-delete" data-message-id="'
					+ message[i].messageId + '">Delete</button><button class="button message-sent-view" data-message-id="'
					+ message[i].messageId + '">Open</button></td></tr>';
		}

	} else {
		messageMarkup = '<tr><td>'
				+ message.sourceNickName
				+ '</td><td>'
				+ message.subject
				+ '</td><td>'
				+ '<button class="button message-sent-delete" data-message-id="'
				+ message.messageId + '">Delete</button><button class="button message-sent-view" data-message-id="'
				+ message.messageId + '">Open</button></td></tr>';

	}

	console.log(messageMarkup);

	$('.testtable tbody').html(messageMarkup);
	atlantis.eventManger.fire('written.all.sent.messages');

};

