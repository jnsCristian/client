function PopulateButtonsService() {
	'use strict';
		$.ajax({
			url : atlantis.endpoints.alliances,
			type : "GET",

			success : function(data, textStatus, request) {
					atlantis.entity.alliances = data;
					atlantis.eventManger.fire('get.alliances.success');
			}
			
		});
};

