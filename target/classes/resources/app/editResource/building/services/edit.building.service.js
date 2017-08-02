function EditBuildingService(params) {
	'use strict';
	var test = JSON.stringfy(params)
	$.ajax({
		url :atlantis.endpoints.buildings,
		type : "PUT",
		data: test,
        contentType: "application/json",
		success : function(data, textStatus, request) {
		}
		
	});
};
