function TroopsTrainCommand() {
	
	'use strict';
	$(".troops-train").on("click", function(event) { 
		event.preventDefault();
		var unitId=$(this).attr('data-troop-id');
		
		var placeId=122;
		var quantity=$('.troop'+unitId).find('input').val();
		console.log('train',unitId,quantity);
		TroopsTrainService(unitId,placeId,quantity);
	});
	


};