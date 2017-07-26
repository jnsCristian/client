function WarBuildingService(buildingId) {
	'use strict';
	$.ajax({
		url : atlantis.endpoints.troops + '/building',
		type : "GET",
		beforeSend : function(request) {
			request.setRequestHeader("buildingId", buildingId);
			request.setRequestHeader("userId",atlantis.entity.userId);
			
		},
	success : function(data, textStatus, request) {
			atlantis.entity.troop = data;
			atlantis.eventManger.fire('get.war.building.success');

		}

	});

};


