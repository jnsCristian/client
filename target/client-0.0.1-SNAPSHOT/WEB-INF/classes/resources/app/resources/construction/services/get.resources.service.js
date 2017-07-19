function GetReourcesService() {
	'use strict';
	$.ajax({
		url : atlantis.endpoints.resources + "?userId="
				+ atlantis.entity.userId,
		type : "GET",

		beforeSend : function(request) {
<<<<<<< HEAD
			if(atlantis.entity.constructionResources)
				request.setRequestHeader("etag", atlantis.entity.constructionResources);
		},
		success : function(data, textStatus, request) {
			if (textStatus == 'success') {
=======
			if(atlantis.entity.resourceETag){
				request.setRequestHeader("etag", atlantis.entity.constructionResources);
			}
		},
		success : function(data, textStatus, request) {
			if (textStatus == 'success') {
				var constructionResourcesETag;
>>>>>>> 82d371eac0a1ffd6b1b7b6bed21c8040b5d81888
				console.log(request.getResponseHeader('etag'));
				atlantis.entity.resourceETag = request
						.getResponseHeader('etag');
				atlantis.entity.constructionResources = data;
				console.log(atlantis.entity.resourceETag);
				atlantis.eventManger.fire('get.resources.success');
			}
			else{
<<<<<<< HEAD
				atlantis.entity.constructionResources=atlantis.entity.constructionResources;
				atlantis.eventManger.fire('get.resources.success');
			}
=======
				atlantis.eventManger.fire('get.resources.success');
			}
			console.log(atlantis,localStorage);
>>>>>>> 82d371eac0a1ffd6b1b7b6bed21c8040b5d81888
		}
		
	});
};

<<<<<<< HEAD
/*
function GetReourcesService() {
'use strict';

$.ajax({
	url : atlantis.endpoints.resources + "?userId="
			+ atlantis.entity.userId,
	type : "GET",

=======

/*function GetReourcesService() {
'use strict';

$.ajax({
	url : atlantis.endpoints.resources + "?userId="
			+ atlantis.entity.userId,
	type : "GET",

>>>>>>> 82d371eac0a1ffd6b1b7b6bed21c8040b5d81888
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