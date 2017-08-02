function BackSwitchTabCommand() {
	"use strict";
	$(".exit").click( function(event) { 
		event.preventDefault();
		var tabTarget=$(this).attr("data-tab"),
		tabToDisplay="#"+atlantis.entity.activeTab;
		$(".tabContent").removeClass("tab-active");
		
		$(tabToDisplay).addClass("tab-active");
		console.log(atlantis.entity.activeTab);
			
	});
}
