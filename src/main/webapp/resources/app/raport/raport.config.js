(function () {
	'use strict';

	GetReportsService();
	
	atlantis.eventManger.addListener('get.reports.success', function() {
		RaportCommand();
		DeleteRaportCommand();
		
	});

	atlantis.eventManger.addListener('written.all.reports', function() {
		OpenRaportCommand();
	});

			

})();


