function GetReourcesService() {
	'use strict';
	$.ajax({
		url : atlantis.endpoints.resources + "?userId="
				+ atlantis.entity.userId,
		type : "GET",

		beforeSend : function(request) {
			if(atlantis.entity.constructionResources)
				request.setRequestHeader("etag", atlantis.entity.constructionResources);
		},
		success : function(data, textStatus, request) {
			if (textStatus == 'success') {
				console.log(request.getResponseHeader('etag'));
				atlantis.entity.resourceETag = request
						.getResponseHeader('etag');
				atlantis.entity.constructionResources = data;
				console.log(atlantis.entity.resourceETag);
				atlantis.eventManger.fire('get.resources.success');
			}
			else{
				atlantis.entity.constructionResources=atlantis.entity.constructionResources;
				atlantis.eventManger.fire('get.resources.success');
			}
		}
		
	});
};

/*
function GetReourcesService() {
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