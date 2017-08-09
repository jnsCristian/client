function UpgradeBuildingService(params) {
	'use strict';
	
	 return $.ajax({
		url : atlantis.endpoints.building + '/' + params,
		type : "PUT",
		contentType: "application/json",
		beforeSend : function(request) {
			request.setRequestHeader("userId", atlantis.entity.userId);
		},
		
		success : function(data, textStatus, request) {

			location.reload();
		
			
		},		
			error: function(data, textStatus, request) {
			$('.response').text("Not enough resources");
		}
	});

};