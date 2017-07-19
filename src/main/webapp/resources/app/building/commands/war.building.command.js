function OpenWarBuildingCommand() {
	'use strict';

	WarBuildingService();

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
		$('.buildingName').html('<input id="buildingName" value="'+ building.buildingName+ '"  readonly></input>');
		$('.description').html('<span>Description </span> <input id="description" value="'+ building.description+ '" readonly ></input>');
		$('.nextLevelCost').html(cBuildingMarkup);
		$('.level').html('<span>Level </span> <input id="level" value="'+ building.level+ '" readonly></input>');	
		
	});
	atlantis.eventManger.addListener('get.war.building.success', function() {
		console.log('enters');
		var troops = atlantis.entity.troop, troopMarkup='<span>Troops</span>';
		
		if (troops.troopsDto.length) {
			for (var i = 0; i < troops.troopsDto.length; i++) {
				var cost=troops.troopsDto[i].cost;
				console.log(cost);
				troopMarkup += '<br><div class="troop'+ troops.troopsDto[i].id + '"><td>'+ String(troops.troopsDto[i].name)+ '  </td><td><input type="text" data-troop-id="'+ troops.troopsDto[i].id + '"><button class="button troops-train " data-troop-id="'+ troops.troopsDto[i].id + '">Train</button></td></div>'
				for (var j = 0; j <cost.length; j++) {
					troopMarkup += '<td>'+ String(cost[j].cost)+ '  </td><td>'+ String(cost[j].resourceName)+ '  </td>'
				}
				
			}
		}
		$('.troops').html(troopMarkup);
		atlantis.eventManger.fire('written.all.troops');
		});
};

	