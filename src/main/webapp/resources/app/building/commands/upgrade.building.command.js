function UpgradeCommand() {
	
	'use strict';
	$(".upgrade-building").on("click", function(event) { 
		event.preventDefault();
		UpgradeBuildingService(1);
	});
	


};