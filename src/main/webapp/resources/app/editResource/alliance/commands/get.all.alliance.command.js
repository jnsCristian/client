function AlliancesCommand () {
	'use strict';
	var alliances = atlantis.entity.alliances.alliances;
	var temp = '<tr><th>Name</th><th></th></tr>';
	if(alliances.length){
		for (var i = 0; i < alliances.length; i++) {
			temp = temp + '<tr ><td>' + alliances[i].name
					+ '</td><td>' 
					+ '<button data-tab="view-alliance" class="button viewalliance admin-switch-button" data-allianceid='+alliances[i].id +' >View</button>'
					+ '</td></tr>';
		} 
	}
	$('.alliances-table').html(temp); 
	atlantis.eventManger.fire('written.all.alliances');
	
};

