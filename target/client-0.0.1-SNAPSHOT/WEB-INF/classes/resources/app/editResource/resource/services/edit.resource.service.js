function EditResourceService(params) {
	'use strict';

	$.ajax({
		url :atlantis.endpoints.resources+"?id="+"4" ,
		type : "GET",
		success : function(data, textStatus, request) {
			atlantis.entity.resources=data;
		}
		
	});
};
