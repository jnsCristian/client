(function() {
	'user strict';

	atlantis.endpoints = {
		resources : atlantis.config.host + atlantis.config.port + "atlantis/resources",
		troops : atlantis.config.host + atlantis.config.port + "atlantis/troops",
		user : atlantis.config.host + atlantis.config.port + "atlantis/users",
		map:atlantis.config.host + atlantis.config.port + "atlantis/map",
		messages: atlantis.config.host + atlantis.config.port + "atlantis/messages",
		raports: atlantis.config.host + atlantis.config.port + "atlantis/raports",
		building: atlantis.config.host + atlantis.config.port + "atlantis/buildings"
	}
})();