function BuildingCommand () {
	'use strict';

	var building = atlantis.entity.building;
	$('.building-name').html('<span>Building Name </span> <input id="name" value="'+building.buildingName+'"></input>');	
	$('.building-description').html('<span>Description </span> <input id="description" value="'+building.description+'"></input>');	
	
};