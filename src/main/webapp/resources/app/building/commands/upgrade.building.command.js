function UpgradeCommand() {
	
	'use strict';
	$(".upgrade-building").on("click", function(event) { 
		event.preventDefault();
		UpgradeBuildingService($('body').attr('data-building-id'));
	});
	


};