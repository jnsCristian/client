function GetAllianceService(param) {
	'use strict';
	$.ajax({
		url :atlantis.endpoints.alliances+"/"+param,
		type : "GET",
		success : function(data, textStatus, request) {
			atlantis.entity.alliance=data;
			atlantis.eventManger.fire('get.alliance.success');
		}
		
	});
};
