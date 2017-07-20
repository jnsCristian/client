(function () {
	'use strict';

	if (atlantis.entity.userId) {
		EditTroopCommand();
		GetTroopsService();		 
		atlantis.eventManger.addListener('get.all.troops.success', function() {
			TroopsCommand(); 			
		});

		atlantis.eventManger.addListener('written.all.troops', function() {
		TroopCommand();			
		ButtonSwitchTab();
	});
		return;
	}
	return;
})();