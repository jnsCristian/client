function EditAllianceNameService(param1,param2) {
	'use strict';
	var test=JSON.stringify(param1);
	$.ajax({
		url :atlantis.endpoints.alliances+"/"+param2,
		type : "PUT",
		data: test,
        contentType: "application/json",
		success : function(data, textStatus, request) {		
		}		
	});
};
