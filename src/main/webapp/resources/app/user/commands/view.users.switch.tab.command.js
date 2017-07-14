function ViewUsersSwitchTabCommand() {
	"use strict";

	console.log('aici');
	$(".users-switch-tab-button").click( function(event) { 
		event.preventDefault();
		var tabTarget=$(this).attr("data-tab"),
		tabToDisplay="#"+tabTarget;
		$(".tabContent").removeClass("tab-active");
		
		$(tabToDisplay).addClass("tab-active");
		

		atlantis.eventManger.fire(tabTarget+'.users.active.tab' );
			
	});
}
