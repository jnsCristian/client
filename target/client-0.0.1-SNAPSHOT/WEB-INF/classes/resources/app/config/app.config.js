(function() {
	'use strict';

	window.atlantis = window.atlantis || {};
	
	atlantis.config = {
		host : "http://localhost:",
		port : "8085/",
	}

	/* global event manager for custom listeners */
	atlantis.eventManger = new EventManager();

})();