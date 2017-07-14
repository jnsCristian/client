function EditUserCommand () {
	'use strict';

	$(".edituser").click(function(event){
		event.preventDefault();
		
		var user={
				
		};
		
		$(".user-data").each(function(){
			
			var elementName=$(this).find("input").attr("id"),
			elementValue=$(this).find("input").val();
			user[elementName]=elementValue||undefined;
			

		});
		
		
		console.log(user);
		EditUserService(user);
	})
	
};

