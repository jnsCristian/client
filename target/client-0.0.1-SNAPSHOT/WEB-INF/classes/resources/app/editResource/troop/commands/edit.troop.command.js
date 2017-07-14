function EditTroopCommand () {
	'use strict';
	console.log("mergetroop");
	$(".edittroop").click(function(event){
		event.preventDefault();
		
		var troop={
				
		};
		
		$(".troop-data").each(function(){
			
			var elementName=$(this).find("input").attr("id"),
			elementValue=$(this).find("input").val();
			troop[elementName]=elementValue||undefined;
			

		});
		
		EditTroopService(troop);
	})
	
};
