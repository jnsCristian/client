function ReadMessagesService(params) {
	'use strict';
	
	 return $.ajax({
		url : atlantis.endpoints.messages + '/' + params,
		type : "PUT",
		
		success : function(data, textStatus, request) {
			atlantis.entity.mess = data;
			atlantis.eventManger.fire('read.specific.message.success');
			
		}
		
	});

};
