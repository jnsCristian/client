function GetMessagesService() {
	'use strict';
	
	 $.ajax({
		url : atlantis.endpoints.messages+'/reciver',
		type : "GET",
		beforeSend : function(request) {
				request.setRequestHeader("userId", atlantis.entity.userId);
		},
		
		success : function(data, textStatus, request) {
				var messagesETag;
				atlantis.entity.messagesETag = request
						.getResponseHeader('userId');
				atlantis.entity.messages = data;
				atlantis.eventManger.fire('get.message.inbox.success');
		}
		
	});
};