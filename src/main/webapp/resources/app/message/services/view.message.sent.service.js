function OpenMessagesSentService(params) {
	'use strict';
	
	 return $.ajax({
		url : atlantis.endpoints.messages + '/' + params,
		type : "GET",
		
		success : function(data, textStatus, request) {
			
			atlantis.entity.mess = data;
			atlantis.eventManger.fire('get.specific.message.success');
		}
		
	});

};
