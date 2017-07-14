function BuildingLevelCommand () {
	'use strict';
	console.log("daaalevel");
	$(".viewbuildinglevel").click(function(){	
		var param = $(this).attr('data-buildingid');
		GetBuildingService(param);
		atlantis.eventManger.addListener('get.buildinglevel.success', function() {
			var buildinglevel = atlantis.entity.buildinglevel;
			$('.buildinglevel-name').html('<span>Building Name </span> <input id="name" value="'+building.buildingName+'"></input>');	
			$('.buildinglevel-description').html('<span>Description </span> <input id="description" value="'+building.description+'"></input>');	
		});
	});
};
