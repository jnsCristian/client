function EditBuildingService(params) {
	'use strict';

	$.ajax({
		url :atlantis.endpoints.building+"?id="+"1" ,
		type : "GET",
		success : function(data, textStatus, request) {
			atlantis.entity.building=data;
		}
		
	});
};
