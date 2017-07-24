function SearchUsersService() {
	'use strict';
	
	var param=$('#content').find("input").val()||"";
		$.ajax({
			url : atlantis.endpoints.user+'?nickname='+param ,
			type : "GET",

			success : function(data, textStatus, request) {
					atlantis.entity.allUsers = data;
					atlantis.eventManger.fire('found.users.success');
			}
			
		});
	

};

