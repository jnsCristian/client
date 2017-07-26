function MessageSwitchTabCommand() {
	"use strict";
	
	$(".messsage-switch-tab").on("click", function(event) { 
		event.preventDefault();
		var tabTarget=$(this).attr("data-tab"),
		tabToDisplay="#"+tabTarget;
		
		$(".tabContent").removeClass("message-tab-active");
		
		$(tabToDisplay).addClass("message-tab-active");
		
		atlantis.eventManger.fire('message.active.tab.' + tabTarget);
			
	});
}