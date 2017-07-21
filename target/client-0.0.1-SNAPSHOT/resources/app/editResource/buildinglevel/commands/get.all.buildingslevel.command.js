function BuildingsLevelCommand () {
	'use strict';
	var buildingsLevel = atlantis.entity.levels.buildingsLevel;
	var temp = '<tr><th>Level</th><th></th></tr>';
	if(buildingsLevel.length){
		for (var i = 0; i < buildingsLevel.length; i++) {
			temp = temp + '<tr ><td>' + buildingsLevel[i].level
					+ '</td><td>' + '<button data-tab="view-level" class="button viewbuildinglevel admin-switch-button" data-buildinglevelId='+buildingsLevel[i].id +' >View</button>'
					+ '</td></tr>';
		} 
	}
	$('.buildinglevel-table').html(temp); 
	atlantis.eventManger.fire('written.all.buildinglevel');	
};

