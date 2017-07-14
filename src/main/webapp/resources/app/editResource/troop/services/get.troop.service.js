function GetTroopService(param) {
	'use strict';
	

	$.ajax({
		url :atlantis.endpoints.troops+"/"+param ,
		type : "GET",
		success : function(data, textStatus, request) {
			atlantis.entity.troop=data;
			atlantis.eventManger.fire('get.troop.success');
		}
		
	});
};
