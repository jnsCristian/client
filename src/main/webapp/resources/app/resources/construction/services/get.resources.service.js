function GetReourcesService () {
	'use strict';

	$.ajax({
		url : atlantis.endpoints.resources + "?userId="
				+ atlantis.entity.userId,
		type : "GET",
		success : function(response) {

			atlantis.entity.constructionResources = response;
			atlantis.eventManger.fire('get.resources.success');
		}
	});
};