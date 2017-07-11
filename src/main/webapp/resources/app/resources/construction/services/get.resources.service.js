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
				console.log(request.getResponseHeader('etag'));
				atlantis.entity.resourceETag = request
						.getResponseHeader('etag');
				atlantis.entity.constructionResources = data;
				console.log(atlantis.entity.resourceETag);
				atlantis.eventManger.fire('get.resources.success');
			}
			else{
				atlantis.eventManger.fire('get.resources.success');
			}
			console.log(atlantis,localStorage);
		}
		
	});
};


/*function GetReourcesService() {
'use strict';

$.ajax({
	url : atlantis.endpoints.resources + "?userId="
			+ atlantis.entity.userId,
	type : "GET",

	beforeSend : function(request) {
		if(localStorage.getItem("constructionResourcesETag")){
			request.setRequestHeader("etag", localStorage.getItem("constructionResourcesETag"));
		}
	},
	
	success : function(data, textStatus, request) {
		if (textStatus == 'success') {				
			var constructionResourcesETag=request.getResponseHeader('etag');
			localStorage.setItem("constructionResourcesETag", constructionResourcesETag);
			console.log('data',data);
			atlantis.entity.constructionResources = data;
			atlantis.eventManger.fire('get.resources.success');
		}
		else{
			console.log(localStorage.getItem("constructionResourcesETag"));
			console.log(textStatus);
			atlantis.eventManger.fire('get.resources.success');
		}
	}
	
});
};*/