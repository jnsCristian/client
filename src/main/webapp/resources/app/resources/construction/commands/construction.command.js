(function() {
	'use strict';

	atlantis.eventManger.addListener('get.resources.success', function() {
		
		var constructionResources = atlantis.entity.constructionResources.resources;
		
		if(constructionResources.length){
			for(var i=0 ; i < constructionResources.length; i++){
				$('.' + constructionResources[i].name).text(constructionResources[i].quantity);
				
				$('.' + constructionResources[i].name).append('<span> Production:' + constructionResources[i].production + '</span>')
			}
		}
	});
})();