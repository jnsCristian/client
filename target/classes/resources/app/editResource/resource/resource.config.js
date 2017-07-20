(function () {
	'use strict';

	if (atlantis.entity.userId) {
		EditResourceCommand();
		GetResourcesService();	 
		atlantis.eventManger.addListener('get.all.resources.success', function() {
			ResourcesCommand(); 
			
		});
		
		atlantis.eventManger.addListener('written.all.resources', function() {
			ResourceCommand();			
			ButtonSwitchTab();
		});
		return;
	}	
	return;
})();