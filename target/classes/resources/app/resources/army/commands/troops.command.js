function TroopsCommand () {
	'use strict';
	var army = atlantis.entity.troops.resources;
	if(army.length){
		for(var i=0 ; i < army.length; i++){
			$('.resource-item [data-troopId="' + army[i].id + '"]')
				.find('.army-quantity').text(army[i].quantity);
			$('.resource-item [data-troopId="' + army[i].id + '"]')
			.find('.army-name').text(army[i].name);
		}
	}

};