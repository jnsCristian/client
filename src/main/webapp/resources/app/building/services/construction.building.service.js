function ConstructionBuildingService(params) {
	'use strict';
	$.ajax({
		url : atlantis.endpoints.building + '/' + params,
		type : "GET",
		beforeSend : function(request) {
			request.setRequestHeader("userId", atlantis.entity.userId);
		},

		success : function(data, textStatus, request) {
			atlantis.entity.building = data;
			console.log(data);
			atlantis.eventManger.fire('get.construction.building.success');

		}

	});

};