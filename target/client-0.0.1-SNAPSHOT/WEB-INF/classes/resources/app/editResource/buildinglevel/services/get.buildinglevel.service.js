function GetBuildingLevelService(param) {
	'use strict';
	$.ajax({
		url :atlantis.endpoints.levels+"/"+param ,
		type : "GET",
		success : function(data, textStatus, request) {
			atlantis.entity.level=data;
			atlantis.eventManger.fire('get.buildinglevel.success');
		}	
	});
};
