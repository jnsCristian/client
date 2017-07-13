function MessageInboxCommand() {
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
			console.log(message[i].recieverNickName);
			messageMarkup += '<tr><td>'
					+ String(message[i].recieverNickName)
					+ '</td><td>'
					+ message[i].subject
					+ '</td><td><button class="button message-inbox-delete" data-message-id="'
					+ message[i].messageId + '">Delete</button><button class="button  messsage-switch-tab  message-inbox-view" data-message-id="'
					+ message[i].messageId + '" data-tab="view" >Open</button></td></tr>';
		}

	} else {
		messageMarkup = '<tr><td>'
				+ message.recieverNickName
				+ '</td><td>'
				+ message.subject
				+ '</td><td>'
				+ '<button class="button   message-inbox-delete" data-message-id="'
				+ message.messageId + '">Delete</button><button class="button  messsage-switch-tab message-inbox-view" data-message-id="'
				+ message.messageId + '" data-tab="view">Open</button></td></tr>';

	}

	console.log(messageMarkup);

	$('.testtable tbody').html(messageMarkup);
	atlantis.eventManger.fire('written.all.inbox.messages');
	
};

