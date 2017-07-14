(function () {
	'use strict';

	if (atlantis.entity.userId) {
		GetBuildingsService();
		 
		atlantis.eventManger.addListener('get.all.buildings.success', function() {

			BuildingsCommand(); 
			
		});
		
	//GetBuildingService();
//	atlantis.eventManger.addListener('get.building.success', function() {
		atlantis.eventManger.addListener('written.all.buildings', function() {
		BuildingCommand();
			
	});

		return;
	}
	
	console.error('No buildingId found.');
	
	return;
})();