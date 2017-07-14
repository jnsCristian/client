function TroopCommand () {
	'use strict';
	console.log("daaa");
	$(".viewtroop").click(function(){	
		var param = $(this).attr('data-troopid');
		GetTroopService(param);
		atlantis.eventManger.addListener('get.troop.success', function() {
			var troop = atlantis.entity.troop;
			$('.troop-name').html('<span>troop Name </span> <input data-troopid = '+troop.id+' id="name" value="'+troop.name+'"></input>');	
			for(var i=0; i<troop.cost.length; i++){
			$('.troop-cost'+(i+1)).html('<span>'+troop.cost[i].resourceName+' Cost </span> <input data-resourceId='+troop.cost[i].resourceId+' id="cost" value="'+troop.cost[i].cost+'"></input>');	
			}
		});
	});
};
