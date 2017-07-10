function GetTroopsService () {
	'use strict';

	$.ajax({
		url : atlantis.endpoints.troops + "?userId="
				+ atlantis.entity.userId,
		type : "GET",
		success : function(response) {

			atlantis.entity.troops = response;

			atlantis.eventManger.fire('get.troops.success');
		}
	});
};