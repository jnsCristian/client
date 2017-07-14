function UsersSwitchTabCommand() {
	"use strict";
	
	$(".users-switch-tab").on("click", function(event) { 
		event.preventDefault();
		var tabTarget=$(this).attr("data-tab"),
		tabToDisplay="#"+tabTarget;
		
		$(".tabContent").removeClass("tab-active");
		
		$(tabToDisplay).addClass("tab-active");
		console.log(tabTarget+'.users.active.tab');
		atlantis.eventManger.fire(tabTarget+'.users.active.tab' );
			
	});
}
