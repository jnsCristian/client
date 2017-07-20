(function () {
	'use strict';

	if (atlantis.entity.userId) {	
		EditBuildingLevelCommand();	
		GetBuildingsLevelService();
		atlantis.eventManger.addListener('get.all.buildingLevel.success', function() {
			BuildingsLevelCommand(); 
			
		});
		
		atlantis.eventManger.addListener('written.all.buildinglevel', function() {
		BuildingLevelCommand();		
		ButtonSwitchTab();
	});
		return;
	}
	return;
})();