function CreateMessageService(params) {
	'use strict';

	params["source_id"]="24";
	
	var test=JSON.stringify(params);
	console.log(test);
	$.ajax({
		url : atlantis.endpoints.messages ,
		type : "POST",
		data: test,
        contentType: "application/json",
		success : function(data, textStatus, request) {
			alert('Message created successfully');
			console.log('merge');
		}
		
	});

};
