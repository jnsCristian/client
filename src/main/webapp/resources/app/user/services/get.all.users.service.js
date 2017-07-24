function GetAllUsersService(param) {
	'use strict';
	var url;
	param && param.allianceId ? url = atlantis.endpoints.user+'?alliance='+param.allianceId : url = atlantis.endpoints.user;

	
	param && param.activeTab && ( atlantis.entity.activeTab = param.activeTab ); 
		$.ajax({
			url : url,
			type : "GET",

			success : function(data, textStatus, request) {
					atlantis.entity.allUsers = data;
					atlantis.eventManger.fire('get.all.users.success');
			}
			
		});
	

};

