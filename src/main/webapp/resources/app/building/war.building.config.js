(function() {
	'use strict';

	OpenConstructionBuildingCommand();
	OpenWarBuildingCommand();
	UpgradeCommand();
	atlantis.eventManger.addListener('written.all.troops', function() {
	TroopsTrainCommand();
	document.getElementById("loader").style.display = "none";
	document.getElementById("w").style.display = "block";
	})
	
	
})();
