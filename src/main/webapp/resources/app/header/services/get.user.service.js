function GetHeaderService () {
	'use strict';
	$.ajax({
		url : atlantis.endpoints.user + "/"
				+ atlantis.entity.userId,
		type : "GET",
		success : function(response) {

			atlantis.entity.user = response;

			atlantis.eventManger.fire('get.user.success');
		}
	});
};