function EditTroopService(params) {
	'use strict';

	$.ajax({
		url :atlantis.endpoints.troop+"?id="+"1" ,
		type : "GET",
		success : function(data, textStatus, request) {
			atlantis.entity.troop=data;
		}
		
	});
};
