function GetFirstActionService() {
	'use strict';
	$.ajax({
		url : atlantis.endpoints.actions + "?number=1",
		type : "GET",

		beforeSend : function(request) {
				request.setRequestHeader("userId", atlantis.entity.userId);
		},
		success : function(data, textStatus, request) {
			atlantis.entity.firstIncomingActions=data;
			atlantis.eventManger.fire('get.first.action.success');
		}
	});
};
