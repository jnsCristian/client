function EditBuildingLevelCommand () {
	'use strict';
	console.log("mergebuildinglevel");
	$(".editbuildinglevel").click(function(event){
		event.preventDefault();
		
		var buildinglevel={
				
		};
		
		$(".buildinglevel-data").each(function(){
			
			var elementName=$(this).find("input").attr("id"),
			elementValue=$(this).find("input").val();
			buildinglevel[elementName]=elementValue||undefined;
			

		});
		
		EditBuildingLevelService(buildinglevel);
	})
	
};
