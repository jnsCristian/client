(function() {
	'use strict';

	OpenConstructionBuildingCommand();
	UpgradeCommand();
	atlantis.eventManger.addListener('written.construction.building', function() {
		document.getElementById("loader").style.display = "none";
		document.getElementById("w").style.display = "block";
	})
})();
