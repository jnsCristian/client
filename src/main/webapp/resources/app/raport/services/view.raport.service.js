function OpenRaportService(params) {
	'use strict';
	
	 return $.ajax({
		url : atlantis.endpoints.raports + '/' + params,
		type : "GET",
		
		success : function(data, textStatus, request) {
		
			atlantis.entity.raport = data;
			atlantis.eventManger.fire('get.specific.raport.success');
			
		}
		
	});

};
