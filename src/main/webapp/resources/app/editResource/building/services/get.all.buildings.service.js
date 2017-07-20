function GetBuildingsService() {
	'use strict';
	console.log("get all service");
	$.ajax({
		url : atlantis.endpoints.buildings,
		type : "GET",
		success : function(data, textStatus, request) {
				atlantis.entity.buildings = data;
				atlantis.eventManger.fire('get.all.buildings.success');
		}
		
	});
};