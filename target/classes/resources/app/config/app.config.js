(function() {
	'use strict';

	window.atlantis = window.atlantis || {};
	
	atlantis.config = {
		host : "http://10.224.15.195:",
		port : "9080/",
	}
	
	/* global event manager for custom listeners */
	atlantis.eventManger = new EventManager();

})();