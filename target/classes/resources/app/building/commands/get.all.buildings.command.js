function BuildingsCommand () {
	'use strict';

	var buildings = atlantis.entity.buildings.buildingsDto;
	console.log(buildings);
	var temp = '<tr><th>Name</th><th></th></tr>';
	if(buildings.length){
		for (var i = 0; i < buildings.length; i++) {
			temp = temp + '<tr data-buildingId='+buildings[i].buildingId +'><td>' + buildings[i].buildingName
					+ '</td><td>' + '<button class="button">View</button>'
					+ '</td></tr>';

		} 
	}
	$('.buildings-table').html(temp); 
};

