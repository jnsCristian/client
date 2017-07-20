(function() {
	'user strict';

	atlantis.endpoints = {
		resources : atlantis.config.host + atlantis.config.port + "atlantis/resources",
		troops : atlantis.config.host + atlantis.config.port + "atlantis/troops",
		user : atlantis.config.host + atlantis.config.port + "atlantis/users",
		map:atlantis.config.host + atlantis.config.port + "atlantis/map",
		actions:atlantis.config.host + atlantis.config.port + "atlantis/actions",
		buildings:atlantis.config.host + atlantis.config.port + "atlantis/buildings",
		levels:atlantis.config.host + atlantis.config.port + "atlantis/levels"
	}
})();