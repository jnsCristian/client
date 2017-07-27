function CreateActionCommand () {
	'use strict';

	$(".action-form").on("submit",function(event){
		event.preventDefault();
		$(".x").attr('id', 'loader');
		var troops={
				
		};
		
		$(".form-element").each(function(){
			
			var troopName=$(this).find("input").attr("data-troopId"),
			troopNumber=$(this).find("input").val();
			troops[troopName]=troopNumber||"0";
			

		});
		
		troops.nickName=$('.nick').find('input').val();
		
		CreateActionService(troops);
		
		
		
	})
	
};

