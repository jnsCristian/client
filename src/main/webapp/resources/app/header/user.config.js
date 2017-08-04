(function () {
	'use strict';
	if (atlantis.entity.userId) {
		GetHeaderService();
		
		atlantis.eventManger.addListener('get.user.success', function() {
			HeaderCommand();
			
		});
		
		
		return;
	}
	
	console.error('No userId found.');
	
	return;
})();