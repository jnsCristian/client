function CreateMessageService(params) {
	'use strict';

	params["source_id"]=atlantis.entity.userId;
	
	var test=JSON.stringify(params);
	$.ajax({
		url : atlantis.endpoints.messages ,
		type : "POST",
		data: test,
        contentType: "application/json",
		success : function(data, textStatus, request) {
			alert('Message created successfully');
			
		},
		error: function(data, textStatus, request) {
			alert('Failure');
	}
		
	});

};
