function GetMapService () {
	'use strict';

	$.ajax({
		url : atlantis.endpoints.map+"/all" ,
		type : "GET",
		success : function(response) {

			atlantis.entity.map = response;
			atlantis.eventManger.fire('get.map.success');
		}
	});
};