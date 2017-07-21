function GetBuildingsService() {
	'use strict';
	$.ajax({
		url : atlantis.endpoints.buildings,
		type : "GET",
		success : function(data, textStatus, request) {
				atlantis.entity.buildings = data;
				atlantis.eventManger.fire('get.all.buildings.success');
		}
		
	});
};