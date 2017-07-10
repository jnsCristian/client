function ContructionCommand () {
	'use strict';

	var constructionResources = atlantis.entity.constructionResources.resources;
	
	if(constructionResources.length){
		for(var i=0 ; i < constructionResources.length; i++){
			$('.resource-wrap [data-resourceName="' + constructionResources[i].name + '"]')
				.find('.resource-quantity').text(constructionResources[i].quantity);

			$('.resource-wrap [data-resourceName="' + constructionResources[i].name + '"]')
				.find('.resource-production').text(constructionResources[i].production + '/h' );
		}
	}

};

