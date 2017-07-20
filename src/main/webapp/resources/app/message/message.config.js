(function () {
	'use strict';
	
	MessageSwitchTabCommand();
	
	atlantis.eventManger.addListener('message.active.tab.inbox', function() {
		GetMessagesService();
		
		
	});
	atlantis.eventManger.addListener('get.message.inbox.success', function() {
		MessageInboxCommand();
		DeleteMessageInboxCommand();
		
		
	});
	atlantis.eventManger.addListener('message.active.tab.sent', function() {
		GetSentMessagesService();
	});
	atlantis.eventManger.addListener('get.message.sent.success', function() {
		MessageSentCommand();
		DeleteMessageSentCommand();
	
		
	});
	
	atlantis.eventManger.addListener('get.specific.message.success', function() {
		OpenMessageSentCommand();
	});
	atlantis.eventManger.addListener('written.all.inbox.messages', function() {
		OpenMessageInboxCommand();
	});
	atlantis.eventManger.addListener('written.all.sent.messages', function() {
		OpenMessageSentCommand();
	});
	MessageCreateCommand();


})();


