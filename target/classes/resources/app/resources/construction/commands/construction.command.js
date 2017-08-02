function ContructionCommand () {
	'use strict';

	var constructionResources = atlantis.entity.constructionResources.resources;
	
	if(constructionResources.length){
		for(var i=0 ; i < constructionResources.length; i++){
			$('.resource-wrap [data-resourceId="' + constructionResources[i].id + '"]')
				.find('.resource-quantity').text(constructionResources[i].quantity);
			$('.resource-wrap [data-resourceId="' + constructionResources[i].id + '"]')
				.find('.resource-production').text(constructionResources[i].production + '/h' );
		}
	}

};

