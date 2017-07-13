(function () {
	'use strict';
	
	if (atlantis.entity.userId) {
		GetBuildingsService();
		
		atlantis.eventManger.addListener('get.all.buildings.success', function() {

			BuildingsCommand(); 
		});
		

		return;
	}
	
	console.error('No userId found.');
	
	return;
})();