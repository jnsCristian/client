function GetTroopsService() {
	'use strict';
	$.ajax({
		url : atlantis.endpoints.troops,
		type : "GET",
		success : function(data, textStatus, request) {
				atlantis.entity.troops = data;
				atlantis.eventManger.fire('get.all.troops.success');
		}
		
	});
};