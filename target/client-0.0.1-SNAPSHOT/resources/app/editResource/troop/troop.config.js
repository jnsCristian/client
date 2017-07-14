(function () {
	'use strict';

	if (atlantis.entity.userId) {
		GetTroopsService();
		 
		atlantis.eventManger.addListener('get.all.troops.success', function() {

			TroopsCommand(); 
			
		});

		atlantis.eventManger.addListener('written.all.troops', function() {
		TroopCommand();
			
	});

		return;
	}
	
	console.error('No troopId found.');
	
	return;
})();