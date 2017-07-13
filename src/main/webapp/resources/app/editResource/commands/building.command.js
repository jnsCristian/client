function BuildingCommand () {
	'use strict';
	console.log("daaa");
	$(".viewbuilding").click(function(){	
		var param = $(this).attr('data-buildingid');
		GetBuildingService(param);
		atlantis.eventManger.addListener('get.building.success', function() {
			var building = atlantis.entity.building;
			$('.building-name').html('<span>Building Name </span> <input id="name" value="'+building.buildingName+'"></input>');	
			$('.building-description').html('<span>Description </span> <input id="description" value="'+building.description+'"></input>');	
		});
	});
};
