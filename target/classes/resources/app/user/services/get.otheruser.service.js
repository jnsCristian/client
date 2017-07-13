function GetOtherUserService() {
	'use strict';
	$.ajax({
		url : atlantis.endpoints.user + "/"
				+ "25",
		type : "GET",

		success : function(data, textStatus, request) {
				atlantis.entity.otheruser = data;
				atlantis.eventManger.fire('get.otheruser.success');
				console.log(atlantis.entity.otheruser);
		}
		
	});
};

