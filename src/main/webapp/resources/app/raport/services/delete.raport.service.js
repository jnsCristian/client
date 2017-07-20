function DeleteRaportService(params) {
	'use strict';
	
	 return $.ajax({
		url : atlantis.endpoints.raports + '/' + params,
		type : "DELETE",
		contentType: "application/json",
		
		success : function(data, textStatus, request) {
			alert('Raport deleted successfully');
			
		}
		
	});

};
