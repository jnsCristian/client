(function () {
	'use strict';
	if (atlantis.entity.userId) {
		GetAllUsersService();
		
		atlantis.eventManger.addListener('get.all.users.success', function() {
			GetAllUsersCommand();
		});
		

		return;
	}
	
	console.error('No userId found.');
	
	return;
})();