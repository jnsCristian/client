function GetBuildingsLevelService() {
	'use strict';
	$.ajax({
		url : atlantis.endpoints.buildingsLevel,
		type : "GET",
		success : function(data, textStatus, request) {
				atlantis.entity.buildingsLevel = data;
				atlantis.eventManger.fire('get.all.buildingLevel.success');
		}
		
	});
};