function GetUserService() {
	'use strict';
	$.ajax({
		url : atlantis.endpoints.user + "/"
				+ atlantis.entity.userId,
		type : "GET",

		success : function(data, textStatus, request) {
				atlantis.entity.user = data;
				atlantis.eventManger.fire('get.user.success');
		}
		
	});
};

