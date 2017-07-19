function TroopsTrainService(unitId,placeId,quantity) {
	'use strict';
	
	 return $.ajax({
		url : atlantis.endpoints.troops + '/' + unitId,
		type : "PUT",
		contentType: "application/json",
		beforeSend : function(request) {
			request.setRequestHeader("placeId", placeId);
			request.setRequestHeader("quantity", quantity);
		},
		
		success : function(data, textStatus, request) {
			alert('train');
		
			
		}
	});

};