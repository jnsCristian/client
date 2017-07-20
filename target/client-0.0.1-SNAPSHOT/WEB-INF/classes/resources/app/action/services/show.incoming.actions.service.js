function GetAllIncommingActionsService() {
	'use strict';
	
	 return $.ajax({
		url : atlantis.endpoints.actions,
		type : "GET",
		beforeSend : function(request) {
				request.setRequestHeader("userId", atlantis.entity.userId);
		},
		
		success : function(data, textStatus, request) {
			
				atlantis.entity.actions = data;
				atlantis.eventManger.fire('get.incoming.actions.success');
		}
		
	});
};