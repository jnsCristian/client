function ReadMessagesService(params) {
	'use strict';
	debugger;
	
	 return $.ajax({
		url : atlantis.endpoints.messages + '/' + params,
		type : "PUT",
		
		success : function(data, textStatus, request) {
			alert('read');
			atlantis.entity.mess = data;
			atlantis.eventManger.fire('read.specific.message.success');
			
		}
		
	});

};
