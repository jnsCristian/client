function GetSentMessagesService() {
	'use strict';
	
	 return $.ajax({
		url : atlantis.endpoints.messages+'/sender',
		type : "GET",
		beforeSend : function(request) {
				request.setRequestHeader("userId", atlantis.entity.userId);
		},
		
		success : function(data, textStatus, request) {
				var messagesETag;
				atlantis.entity.messagesETag = request
						.getResponseHeader('userId');
			
				atlantis.entity.messages = data;
				atlantis.eventManger.fire('get.message.sent.success');
		}
		
	});
};