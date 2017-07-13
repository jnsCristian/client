function GetAllUsersService() {
	'use strict';
	$.ajax({
		url : atlantis.endpoints.user ,
		type : "GET",

		success : function(data, textStatus, request) {
				atlantis.entity.allUsers = data;
				atlantis.eventManger.fire('get.all.users.success');
		}
		
	});
};

