function EditResourceCommand () {
	'use strict';
	console.log("mergeresource");
	$(".editresource").click(function(event){
		event.preventDefault();
		
		var resource={
				
		};
		
		$(".resource-data").each(function(){
			
			var elementName=$(this).find("input").attr("id"),
			elementValue=$(this).find("input").val();
			resource[elementName]=elementValue||undefined;
			

		});
		
		EditResourceService(resource);
	})
	
};
