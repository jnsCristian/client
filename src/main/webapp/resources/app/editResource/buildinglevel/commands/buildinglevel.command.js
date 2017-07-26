function BuildingLevelCommand () {
	'use strict';
	
	$(".viewbuildinglevel").click(function(){	
		var param = $(this).attr('data-buildinglevelId');
		GetBuildingLevelService(param);
		atlantis.eventManger.addListener('get.buildinglevel.success', function() {
			var buildinglevel = atlantis.entity.level;
			
			$('.buildinglevel-name').html('<span>Level is </span> <input data-buildinglevelId = '+buildinglevel.id+' id="name" value="'+buildinglevel.level+'"></input>');	
			for(var i=0; i<buildinglevel.levelCost.length; i++){
				
		$('.buildinglevel-cost'+(i+1)).html('<span>'+buildinglevel.levelCost[i].resourceName+' Cost </span> <input data-buildinglevelId='+buildinglevel.levelCost[i].resourceId+' id="cost" value="'+buildinglevel.levelCost[i].cost+'"></input>');	
		}
		});
	});
};
