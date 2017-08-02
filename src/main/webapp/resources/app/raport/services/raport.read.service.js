function ReadReportsService(params) {
	'use strict';
	
	 return $.ajax({
		url : atlantis.endpoints.raports + '/' + params,
		type : "PUT",
		
		success : function(data, textStatus, request) {
			atlantis.entity.mess = data;
			atlantis.eventManger.fire('read.specific.raport.success');
			
		}
		
	});

};
