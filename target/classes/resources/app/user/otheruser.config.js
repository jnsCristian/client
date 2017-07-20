(function () {
	'use strict';
	if (atlantis.entity.userId) {
		GetOtherUserService();
		
		atlantis.eventManger.addListener('get.otheruser.success', function() {
			OtherUserCommand();
		});
		

		return;
	}
	
	console.error('No userId found.');
	
	return;
})();