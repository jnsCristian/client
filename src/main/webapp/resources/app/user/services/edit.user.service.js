function EditUserService(params) {
	'use strict';

	var test=JSON.stringify(params);
	$.ajax({
		url : atlantis.endpoints.user+"/"+atlantis.entity.userId ,
		type : "PUT",
		data: test,
        contentType: "application/json",
		success : function(data, textStatus, request) {
			console.log('merge');
		}
		
	});
};


