(function () {
	'use strict';

	if (atlantis.entity.userId) {
		GetBuildingsLevelService();
		 
		atlantis.eventManger.addListener('get.all.buildingslevel.success', function() {

			BuildingsLevelCommand(); 
			
		});
		
		atlantis.eventManger.addListener('written.all.buildingslevel', function() {
		BuildingLevelCommand();
			
	});

		return;
	}
	
	console.error('No buildingLevelId found.');
	
	return;
})();