function OpenConstructionBuildingCommand() {
	'use strict';

	ConstructionBuildingService(1);
	
	atlantis.eventManger.addListener('get.construction.building.success',function() {
		var building = atlantis.entity.building, cBuildingMarkup = '<span>Next level cost</span>';
		if (building.nextLevelCost.length) {
			for (var i = 0; i < building.nextLevelCost.length; i++) {
				cBuildingMarkup += '  <tr><td>'
				+ String(building.nextLevelCost[i].resourceName)
				+ '  </td><td>'
				+ String(building.nextLevelCost[i].cost)
				+ '  </td><td>'
			}
		}
	/*	if(building.avatar){
			$("#buildingphoto").html('<img src="'+building.inside+'" >');
		}*/
		$('.buildingName').html('<input id="buildingName" value="'+ building.buildingName+ '"  readonly></input>');
		$('.description').html('<span>Description </span> <input id="description" value="'+ building.description+ '" readonly ></input>');
		$('.nextLevelCost').html(cBuildingMarkup);
		$('.level').html('<span>Level </span> <input id="level" value="'+ building.level+ '" readonly></input>');
		$('.production').html('<span>Production per hour </span> <input id="production" value="'+ building.production+ '" readonly></input>');
		$('.productionResource').html('<span>Production resource </span> <input id="productionResource" value="'+ building.productionResource+ '" readonly></input>');
		
	
		
	});
};  


