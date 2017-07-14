(function () {
	'use strict';

	if (atlantis.entity.userId) {
		GetResourcesService();
		 
		atlantis.eventManger.addListener('get.all.resources.success', function() {

			ResourcesCommand(); 
			
		});
		
		atlantis.eventManger.addListener('written.all.resources', function() {
			ResourceCommand();
			
		});

		return;
	}
	
	console.error('No resourceId found.');
	
	return;
})();