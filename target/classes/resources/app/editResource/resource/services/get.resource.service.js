function GetResourceService(param) {
	'use strict';
	$.ajax({
		url :atlantis.endpoints.resources+"/"+param ,
		type : "GET",
		success : function(data, textStatus, request) {
			atlantis.entity.resources=data;
			atlantis.eventManger.fire('get.resources.success');
		}
		
	});
};