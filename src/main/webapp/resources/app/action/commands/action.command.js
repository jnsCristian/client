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
		
		troops.nickName=$('.nick').find('input').val();
		
		console.log(troops);
		CreateActionService(troops);
		
		
		
	})
	
};

