function OpenConstructionBuildingCommand() {
	'use strict';
	ConstructionBuildingService($('body').attr('data-building-id'));
	
	atlantis.eventManger.addListener('get.construction.building.success',function() {
		var building = atlantis.entity.building, cBuildingMarkup = '<span>Next level cost</span>';
		if (building.nextLevelCost&&building.nextLevelCost.length) {
			for (var i = 0; i < building.nextLevelCost.length; i++) {
				cBuildingMarkup += '  <tr><td>'
				+ String(building.nextLevelCost[i].resourceName)
				+ '  </td><td>'
				+ String(building.nextLevelCost[i].cost)
				+ '  </td><td>'
			}
			$('.nextLevelCost').html(cBuildingMarkup);
		}
	/*	if(building.avatar){
			$("#buildingphoto").html('<img src="'+building.inside+'" >');
		}*/
		$('.buildingName').html('<input id="buildingName" value="'+ building.buildingName+ '"  readonly></input>');
		$('.description').html('<span>Description </span> <textarea id="description" class="textarea__description" readonly >'+ building.description+ '</textarea>');
		
		$('.level').html('<span>Level </span> <input id="level" value="'+ building.level+ '" readonly></input>');
		$('.production').html('<span>Production per hour </span> <input id="production" value="'+ building.production+ '" readonly></input>');
		$('.productionResource').html('<span>Production resource </span> <input id="productionResource" value="'+ building.productionResource+ '" readonly></input>');
		
	
		atlantis.eventManger.fire('written.construction.building');
	});
};  


