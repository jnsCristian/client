(function() {
	'use strict';

	OpenConstructionBuildingCommand();
	OpenWarBuildingCommand();
	UpgradeCommand();
	atlantis.eventManger.addListener('written.all.troops', function() {
	TroopsTrainCommand();
	})
})();
