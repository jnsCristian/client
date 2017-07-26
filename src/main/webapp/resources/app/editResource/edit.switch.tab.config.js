(function () {
	"use strict";

	$(".admin-switch-tab").click( function(event) { 
		event.preventDefault();
		var tabTarget=$(this).attr("data-tab"),
		tabToDisplay="#"+tabTarget;
		$(".tabContent").removeClass("tab-active");
		
		$(tabToDisplay).addClass("tab-active");
		

		
			
	});
})();
