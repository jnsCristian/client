function WarBuildingService() {
	'use strict';
	$.ajax({
		url : atlantis.endpoints.troops + '/building',
		type : "GET",
		beforeSend : function(request) {
			request.setRequestHeader("buildingId", '1');
			request.setRequestHeader("buildingLevel",'3');
			
		},
	success : function(data, textStatus, request) {
			atlantis.entity.troop = data;
			console.log(data);
			atlantis.eventManger.fire('get.war.building.success');

		}

	});

};