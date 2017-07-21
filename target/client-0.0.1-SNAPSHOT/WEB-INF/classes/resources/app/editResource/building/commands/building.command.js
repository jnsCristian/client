function BuildingCommand () {
	'use strict';

	$(".viewbuilding").click(function(){	
		var param = $(this).attr('data-buildingid');
		GetBuildingService(param);
		atlantis.eventManger.addListener('get.building.success', function() {
			var building = atlantis.entity.building;
			$('.building-name').html('<span>Building Name </span> <input data-buildingid="'+building.buildingId+'" id="name" value="'+building.buildingName+'"></input>');	
			$('.building-description').html('<span>Description Name </span> <input data-buildingid="'+building.buildingId+'" id="name" value="'+building.description+'"></input>');	
		});
	});
};

