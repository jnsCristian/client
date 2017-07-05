function TroopsCommand () {
	'use strict';
	var army = atlantis.entity.troops.resources;
	
	if(army.length){
		for(var i=0 ; i < army.length; i++){
			$('.resource-item [data-resourceName="' + army[i].name + '"]')
				.find('.army-quantity').text(army[i].quantity);
		}
	}

};