function CreateActionCommand () {
	'use strict';

	$(".action-form").on("submit",function(event){
		event.preventDefault();
		
		var troops={
				
		};
		
		$(".form-element").each(function(){
			
			var troopName=$(this).find("input").attr("data-troopId"),
			troopNumber=$(this).find("input").val();
			troops[troopName]=troopNumber||"0";
			

		});
		
		$(".coordinates").each(function(){
			
			var troopName=$(this).find("input").attr("id"),
			troopNumber=$(this).find("input").val();
			troops[troopName]=troopNumber;
			console.log(troopName);

		});
		
		console.log(troops);
		CreateActionService(troops);
	})
	
};

