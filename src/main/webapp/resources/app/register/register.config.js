(function () {
	'use strict';
	
	RegisterCommand();
	
	
	if (atlantis.entity.userId) {

		return;
	}
	atlantis.eventManger.addListener('registered.user', function() {
	
		document.getElementById("loader").style.display = "none";
		document.getElementById("register").style.display = "block";
		
	});
	atlantis.eventManger.addListener('error.register', function() {
		
		document.getElementById("loader").style.display = "none";
		document.getElementById("register").style.display = "block";
		
	});
})();