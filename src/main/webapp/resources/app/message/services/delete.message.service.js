function DeleteMessagesService(params) {
	'use strict';
	
	 return $.ajax({
		url : atlantis.endpoints.messages + '/' + params,
		type : "DELETE",
		contentType: "application/json",
		
		success : function(data, textStatus, request) {
			alert('Message deleted successfully');
			
		}
		
	});

};
