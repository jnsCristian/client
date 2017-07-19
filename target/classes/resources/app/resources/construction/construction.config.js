(function () {
	'use strict';
	
	if (atlantis.entity.userId) {
		GetReourcesService();
		
		
		atlantis.eventManger.addListener('get.resources.success', function() {
			ContructionCommand();
		});
		

		return;
	}
	
	console.error('No userId found.');
	
	return;
})();