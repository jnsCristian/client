function GetReourcesService() {
	'use strict';
	$.ajax({
		url : atlantis.endpoints.resources + "?userId="
				+ atlantis.entity.userId,
		type : "GET",

		beforeSend : function(request) {
			if(atlantis.entity.resourceETag){
				request.setRequestHeader("etag", atlantis.entity.constructionResources);
			}
		},
		success : function(data, textStatus, request) {
			if (textStatus == 'success') {
				var constructionResourcesETag;
				atlantis.entity.resourceETag = request
						.getResponseHeader('etag');
				atlantis.entity.constructionResources = data;
				atlantis.eventManger.fire('get.resources.success');
			}
			else{
				atlantis.eventManger.fire('get.resources.success');
			}
		}
		
	});
};

