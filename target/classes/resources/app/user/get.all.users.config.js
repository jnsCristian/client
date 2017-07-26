(function () {
	'use strict';
	if (atlantis.entity.userId) {
		PopulateButtonsService();
		UsersSwitchTabCommand();
		atlantis.eventManger.addListener('get.alliances.success', function() {
			
			PopulateButtonsCommand();
		});
		
		atlantis.eventManger.addListener('atlantis.users.active.tab', function() {
			atlantis.entity.activeTab='atlantis';
			GetUsersFromAtlantis();
		});
		
		atlantis.eventManger.addListener('get.users.from.atlantis.success', function() {
			GetAllUsersFromAtlantisCommand();
		});
		
		
		atlantis.eventManger.addListener('all.users.active.tab', function() {
			GetAllUsersService({
				activeTab : "all"
			});
		});
		
		atlantis.eventManger.addListener('red.users.active.tab', function() {
			GetAllUsersService({
				activeTab : "red",
				allianceId : "1"
			});
		});
		
		atlantis.eventManger.addListener('green.users.active.tab', function() {
			GetAllUsersService({
				activeTab : "green",
				allianceId : "2"
			});
		});
		
		atlantis.eventManger.addListener('blue.users.active.tab', function() {
			GetAllUsersService({
				activeTab : "blue",
				allianceId : "3"
			});
		});
		
		atlantis.eventManger.addListener('white.users.active.tab', function() {
			GetAllUsersService({
				activeTab : "white",
				allianceId : "4"
			});
		});
		
		atlantis.eventManger.addListener('search.users.active.tab', function() {
			atlantis.entity.activeTab='all';
			SearchUsersService();
		});
		
		
		atlantis.eventManger.addListener('found.users.success', function() {			
			GetAllUsersCommand();
		});
		
		atlantis.eventManger.addListener('get.all.users.success', function() {
			GetAllUsersCommand();
		});
		
		atlantis.eventManger.addListener('written.all.users', function() {
			ViewUsersSwitchTabCommand();
			OtherUserCommand();
		});
		
		atlantis.eventManger.addListener('got.user.success', function() {
			BackSwitchTabCommand();
		});
		return;
	}
	
	console.error('No userId found.');
	
	return;
})();