(function () {
	'use strict';
	if (atlantis.entity.userId) {
		EditAllianceCommand();
		GetAlliancesService();		 
		atlantis.eventManger.addListener('get.all.alliances.success', function() {
			AlliancesCommand(); 	
		});
		atlantis.eventManger.addListener('written.all.alliances', function() {
		AllianceCommand();
		ButtonSwitchTab();
	});
		return;
	}	
	return;
})();