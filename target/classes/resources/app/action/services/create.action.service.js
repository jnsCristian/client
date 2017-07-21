function CreateActionService(params) {
	'use strict';

	params["idSource"]=atlantis.entity.userId;
	var test=JSON.stringify(params);
	$.ajax({
		url : atlantis.endpoints.actions ,
		type : "POST",
		data: test,
        contentType: "application/json",
		success : function(data, textStatus, request) {
			console.log('merge');
			atlantis.eventManger.fire('created.action');
		}
		
	});
	

};


