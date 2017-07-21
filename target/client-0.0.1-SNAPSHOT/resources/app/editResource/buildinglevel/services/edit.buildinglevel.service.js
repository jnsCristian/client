function EditBuildingLevelService(params) {
	'use strict';
	var test=JSON.stringify(params);
	$.ajax({
		url :atlantis.endpoints.buildings+"/cost",
		type : "PUT",
		data: test,
        contentType: "application/json",
		success : function(data, textStatus, request) {
		}
		
	});
};
