(function () {
	'use strict';
	
	CreateActionCommand();
	
	
	if (atlantis.entity.userId) {
		GetFirstActionService();
		
		atlantis.eventManger.addListener('get.first.action.success', function() {
			GetFirstActionCommand();
		});
		
		
		GetAllIncommingActionsService();
		
		atlantis.eventManger.addListener('get.incoming.actions.success', function() {
			GetAllIncommingActionsCommand();
		});
		
		GetAllOutgoingActionsService();
		
		atlantis.eventManger.addListener('get.outgoing.actions.success', function() {
			GetAllOutgoingActionsCommand();
		});
		return;
	}
})();