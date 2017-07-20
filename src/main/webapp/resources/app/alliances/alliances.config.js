(function () {
	'use strict';
	
		GetAlliancesService();
		
		atlantis.eventManger.addListener('get.alliances.success', function() {
			AlliancesCommand();
		});
		

		atlantis.eventManger.addListener('written.all.alliances', function() {
			ChooseAllianceService();
		});
	return;
})();