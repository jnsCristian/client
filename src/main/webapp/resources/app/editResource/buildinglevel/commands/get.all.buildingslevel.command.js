function BuildingsLevelCommand () {
	'use strict';

	var buildingsLevel = atlantis.entity.buildinglevel;
	var temp = '<tr><th>Name</th><th></th></tr>';
	if(buildingsLevel.length){
		for (var i = 0; i < buildingsLevel.length; i++) {
			temp = temp + '<tr ><td>' + buildingsLevel[i].buildingName
					+ '</td><td>' + '<button class="button viewbuildinglevel" data-buildingId='+buildingsLevel[i].buildingId +' >View</button>'
					+ '</td></tr>';

		} 
	}
	
	$('.buildinglevel-table').html(temp); 
	atlantis.eventManger.fire('written.all.buildingslevel');
	
};

