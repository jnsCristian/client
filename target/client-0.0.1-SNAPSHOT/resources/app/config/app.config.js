(function() {
	'use strict';

	window.atlantis = window.atlantis || {};
<<<<<<< HEAD
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
=======
	
>>>>>>> 82d371eac0a1ffd6b1b7b6bed21c8040b5d81888
	atlantis.config = {
		host : "http://localhost:",
		port : "8085/",
	}

	/* global event manager for custom listeners */
	atlantis.eventManger = new EventManager();

})();