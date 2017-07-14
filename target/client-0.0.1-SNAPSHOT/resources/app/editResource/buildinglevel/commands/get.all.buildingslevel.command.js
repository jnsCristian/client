function BuildingsCommand () {
	'use strict';

	var buildings = atlantis.entity.buildings.buildingsDto;
	var temp = '<tr><th>Name</th><th></th></tr>';
	if(buildings.length){
		for (var i = 0; i < buildings.length; i++) {
			temp = temp + '<tr ><td>' + buildings[i].buildingName
					+ '</td><td>' + '<button class="button viewbuilding" data-buildingId='+buildings[i].buildingId +' >View</button>'
					+ '</td></tr>';

		} 
	}
	
	$('.buildings-table').html(temp); 
	atlantis.eventManger.fire('written.all.buildings');
	
};

