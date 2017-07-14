function GetOtherUserService(param) {
	'use strict';
	$.ajax({
		url : atlantis.endpoints.user + "/"
				+ param,
		type : "GET",

		success : function(data, textStatus, request) {
				atlantis.entity.otheruser = data;
				atlantis.eventManger.fire('get.otheruser.success');
		}
		
	});
};

