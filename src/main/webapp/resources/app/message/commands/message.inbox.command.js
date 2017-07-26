function MessageInboxCommand() {
	'use strict';

	var message = atlantis.entity.messages.messageDto,
		messageInboxMarkup = '<tr><th>Nick Name</th><th>Subject</th><th></th></tr>';

	
	if(!atlantis.entity.messages.messageDto){
		console.log("No messages");
		messageInboxMarkup += '<tr><td>'
			+ "No messages"
			+ '</td><td>'
			+ '</td><td></td></tr>';
		
	} else if (message.length) {
		for (var i = 0; i < message.length; i++) {
			
			messageInboxMarkup += '<tr><td>'
					+ String(message[i].recieverNickName)
					+ '</td><td>'
					+ message[i].subject
					+ '</td><td><button class="button message-inbox-delete" data-message-id="'
					+ message[i].messageId + '">Delete</button><button class="button  messsage-switch-tab  message-inbox-view message-inbox-read" data-message-id="'
					+ message[i].messageId + '"  data-message-nickname="'
					+ message[i].recieverNickName + '"data-tab="view" >Open</button></td></tr>';
		}

	} else {
		messageInboxMarkup += '<tr><td>'
				+ message.recieverNickName
				+ '</td><td>'
				+ message.subject
				+ '</td><td>'
				+ '<button class="button   message-inbox-delete" data-message-id="'
				+ message.messageId + '">Delete</button><button class="button  messsage-switch-tab message-inbox-view message-inbox-read" data-message-id="'
				+ message.messageId + '" data-tab="view">Open</button></td></tr>';

	}

	$('.testtable').html(messageInboxMarkup);
	atlantis.eventManger.fire('written.all.inbox.messages');
	
};

