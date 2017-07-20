function TroopsTrainCommand() {
	
	'use strict';
	$(".troops-train").on("click", function(event) { 
		event.preventDefault();
		var unitId=$(this).attr('data-troop-id');
		
		var placeId=atlantis.entity.placeId;
		var quantity=$('.troop'+unitId).find('input').val();
		TroopsTrainService(unitId,placeId,quantity);
	});
	


};