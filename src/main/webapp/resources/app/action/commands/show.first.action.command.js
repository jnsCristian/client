function GetFirstActionCommand () {
	'use strict';

	var incoming = atlantis.entity.firstIncomingActions.incomingActions;
	var outgoing = atlantis.entity.firstIncomingActions.outgouingActions;
/*	if(constructionResources.length){
		for(var i=0 ; i < constructionResources.length; i++){
			$('.resource-wrap [data-resourceName="' + constructionResources[i].name + '"]')
				.find('.resource-quantity').text(constructionResources[i].quantity);
			$('.resource-wrap [data-resourceName="' + constructionResources[i].name + '"]')
				.find('.resource-production').text(constructionResources[i].production + '/h' );
		}
	}*/
	if(incoming){
		$('.resource-item').find('.incoming').text(incoming.time);
	}
	if(outgoing){
		$('.resource-item').find('.outgoing').text(outgoing.time);
	}

};