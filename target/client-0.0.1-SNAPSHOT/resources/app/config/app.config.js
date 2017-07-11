(function() {
	'use strict';

	window.atlantis = window.atlantis || {};
/*	if(localStorage.getItem("atl")){
		window.atlantis=localStorage.getItem("atl");
		console.log("stored");
	}
	else{
		console.log("not stored");
		window.atlantis={};
		var atl=window.atlantis;
		localStorage.setItem("atl", atl);
	}*/
	atlantis.config = {
		host : "http://localhost:",
		port : "8085/",
	}

	/* global event manager for custom listeners */
	atlantis.eventManger = new EventManager();

})();