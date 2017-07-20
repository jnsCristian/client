function TroopsCommand () {
	'use strict';

	var troops = atlantis.entity.troops.troopsDto;
	var temp = '<tr><th>Name</th><th></th></tr>';
	if(troops.length){
		for (var i = 0; i < troops.length; i++) {
			temp = temp + '<tr ><td>' + troops[i].name + '</td><td>' 
			+ 
			'<button data-tab="view-troop" class="button viewtroop admin-switch-button" data-troopId='+troops[i].id +' >View</button>'
					+ '</td></tr>';
		} 
	}
	
	$('.troops-table').html(temp); 
	atlantis.eventManger.fire('written.all.troops');
	
};
