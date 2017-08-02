(function () {
	'use strict';
	if (atlantis.entity.userId) {
		GetTroopsService();
		
		atlantis.eventManger.addListener('get.troops.success', function() {
			TroopsCommand();
			
		});
		
		
		return;
	}
	
	console.error('No userId found.');
	
	return;
})();