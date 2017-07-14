function GetAllUsersService(param) {
	'use strict';
	if(param){
		$.ajax({
			url : atlantis.endpoints.user+'?alliance='+param ,
			type : "GET",

			success : function(data, textStatus, request) {
					atlantis.entity.allUsers = data;
					atlantis.eventManger.fire('get.all.users.success');
			}
			
		});
	}
	
	else{
	$.ajax({
		url : atlantis.endpoints.user ,
		type : "GET",

		success : function(data, textStatus, request) {
				atlantis.entity.allUsers = data;
				atlantis.eventManger.fire('get.all.users.success');
		}
		
	});
	}
};

