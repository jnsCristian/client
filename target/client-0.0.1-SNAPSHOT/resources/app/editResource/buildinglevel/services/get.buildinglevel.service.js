function GetResourceService(param) {
	'use strict';
	

	$.ajax({
		url :atlantis.endpoints.resources+"?id="+param ,
		type : "GET",
		success : function(data, textStatus, request) {
			atlantis.entity.resource=data;
			atlantis.eventManger.fire('get.resource.success');
		}
		
	});
};
