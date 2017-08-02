function GetUsersFromAtlantis() {
	'use strict';
		$.ajax({
			url : atlantis.endpoints.map+"/atlantis" ,
			type : "GET",

			success : function(data, textStatus, request) {
					atlantis.entity.usersFromAtlantis = data;
					atlantis.eventManger.fire('get.users.from.atlantis.success');
			}
			
		});
};

