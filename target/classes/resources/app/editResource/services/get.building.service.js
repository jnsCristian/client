function GetBuildingService(param) {
	'use strict';
	

	$.ajax({
		url :atlantis.endpoints.buildings+"?id="+param ,
		type : "GET",
		success : function(data, textStatus, request) {
			atlantis.entity.building=data;
			atlantis.eventManger.fire('get.building.success');
		}
		
	});
};
