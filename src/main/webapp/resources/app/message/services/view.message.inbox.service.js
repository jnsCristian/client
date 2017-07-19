function OpenMessagesService(params) {
	'use strict';
	
	 return $.ajax({
		url : atlantis.endpoints.messages + '/' + params,
		type : "GET",
		
		success : function(data, textStatus, request) {
			atlantis.entity.message = data;
			console.log(atlantis.entity.message,'here');
			atlantis.eventManger.fire('get.specific.message.success');
			
		}
		
	});

};
