function GetResourcesService() {
	'use strict';
	$.ajax({
		url : atlantis.endpoints.resources,
		type : "GET",
		success : function(data, textStatus, request) {
				atlantis.entity.resources = data;
				atlantis.eventManger.fire('get.all.resource.success');
		}
		
	});
};