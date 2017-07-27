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
		
		atlantis.eventManger.addListener('created.action', function() {
			/*CreateActionCommand();*/
			GetFirstActionService();
			GetAllIncommingActionsService();
			GetAllOutgoingActionsService();
			GetTroopsService();
			document.getElementById("loader").style.display = "none";
			document.getElementById("actions").style.display = "block";
			
		});
		return;
	}
})();