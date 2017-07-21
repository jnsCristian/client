function GetBuildingsLevelService() {
	'use strict';
	$.ajax({
		url : atlantis.endpoints.levels,
		type : "GET",
		success : function(data, textStatus, request) {
				atlantis.entity.levels = data;
				atlantis.eventManger.fire('get.all.buildingLevel.success');
		}
	});
};