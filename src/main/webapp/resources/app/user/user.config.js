(function () {
	'use strict';
	EditUserCommand();
	if (atlantis.entity.userId) {
		GetUserService();
		
		atlantis.eventManger.addListener('get.user.success', function() {
			UserCommand();
		});
		

		return;
	}
	
	console.error('No userId found.');
	
	return;
})();