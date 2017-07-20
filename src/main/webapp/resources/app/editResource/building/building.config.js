(function () {
	'use strict';
	if (atlantis.entity.userId) {
		EditBuildingCommand();
		GetBuildingsService();		 
		atlantis.eventManger.addListener('get.all.buildings.success', function() {
			BuildingsCommand(); 	
		});
		atlantis.eventManger.addListener('written.all.buildings', function() {
		BuildingCommand();
		ButtonSwitchTab();
	});
		return;
	}	
	return;
})();