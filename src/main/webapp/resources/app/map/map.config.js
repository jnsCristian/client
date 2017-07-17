(function () {
	'use strict';
	if (atlantis.entity.userId) {
		GetMapService();
		
		atlantis.eventManger.addListener('get.map.success', function() {
			RenderMapCommand();
			
		});
		
		atlantis.eventManger.addListener('render.map.success', function() {
			DragMapCommand();
			
		});
		
		
		return;
	}
	
	console.error('No userId found.');
	
	return;
})();