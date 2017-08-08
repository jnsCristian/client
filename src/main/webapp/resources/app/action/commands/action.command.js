function CreateActionCommand () {
	'use strict';
	var found=false;
	$(".action-form").on("submit",function(event){
		event.preventDefault();
		$(".x").attr('id', 'loader');
		var troops={
				
		};
		
		$(".form-element").each(function(){
			
			var troopName=$(this).find("input").attr("data-troopId"),
			troopNumber=$(this).find("input").val();
			troops[troopName]=troopNumber||"0";
			if(troops[troopName]!=0)
				found=true;

		});
		
		troops.nickName=$('.nick').find('input').val();
		if(found)
		CreateActionService(troops);
		else{
			atlantis.eventManger.fire('created.action');
			alert('Invalid command');
		}
		
		
	})
	
};

