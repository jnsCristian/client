function GetBuildingLevelService(param) {
	'use strict';
	

	$.ajax({
		url :atlantis.endpoints.buildinglevel+"?id="+param ,
		type : "GET",
		success : function(data, textStatus, request) {
			atlantis.entity.buildinglevel=data;
			atlantis.eventManger.fire('get.buildinglevel.success');
		}
		
	});
};
