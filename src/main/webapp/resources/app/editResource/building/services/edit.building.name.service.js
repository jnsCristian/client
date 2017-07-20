function EditBuildingNameService(params) {
	'use strict';
	var test=JSON.stringify(params);
	$.ajax({
		url :atlantis.endpoints.buildings,
		type : "PUT",
		data: test,
        contentType: "application/json",
		success : function(data, textStatus, request) {		
		}		
	});
};
