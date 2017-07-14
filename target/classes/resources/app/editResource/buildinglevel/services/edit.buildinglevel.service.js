function EditResourceService(params) {
	'use strict';

	$.ajax({
		url :atlantis.endpoints.buildinglevel+"?id="+"4" ,
		type : "GET",
		success : function(data, textStatus, request) {
			atlantis.entity.buildinglevels=data;
		}
		
	});
};
