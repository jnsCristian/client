function EditBuildingCommand () {
	'use strict';
	console.log("merge");
	$(".editbuilding").click(function(event){
		event.preventDefault();
		
		var building={
				
		};
		
		$(".building-data").each(function(){
			
			var elementName=$(this).find("input").attr("id"),
			elementValue=$(this).find("input").val();
			building[elementName]=elementValue||undefined;
			

		});
		
		EditBuildingService(building);
	})
	
};
