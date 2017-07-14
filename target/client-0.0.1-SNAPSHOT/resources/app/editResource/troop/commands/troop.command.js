function TroopCommand () {
	'use strict';
	console.log("daaa");
	$(".viewtroop").click(function(){	
		var param = $(this).attr('data-troopid');
		GetTroopService(param);
		atlantis.eventManger.addListener('get.troop.success', function() {
			var troop = atlantis.entity.troop;
			$('.troop-name').html('<span>troop Name </span> <input id="name" value="'+troop.name+'"></input>');	
			$('.troop-description').html('<span>Description </span> <input id="cost" value="'+troop.cost+'"></input>');	
		});
	});
};
