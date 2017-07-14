function ResourcesCommand () {
	'use strict';

	var resources = atlantis.entity.resources.resources;
	var temp = '<tr><th>Name</th><th></th></tr>';
	if(resources.length){
		for (var i = 0; i < resources.length; i++) {
			temp = temp + '<tr ><td>' + resources[i].name
					+ '</td><td>' + '<button class="button viewresource" data-resourceId='+resources[i].id +' >View</button>'
					+ '</td></tr>';

		} 
	}
	
	$('.resource-table').html(temp); 
	atlantis.eventManger.fire('written.all.resources');
	
};
