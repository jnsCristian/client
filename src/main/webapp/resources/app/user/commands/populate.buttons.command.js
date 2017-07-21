function PopulateButtonsCommand () {
	'use strict';

	var alliances = atlantis.entity.alliances.alliances;
	if(alliances&&alliances.length){
		for (var i = 0; i < alliances.length; i++) {
			$('[data-allianceId="' + alliances[i].id + '"]').text(alliances[i].name+' Alliance');

		}
	}

};

