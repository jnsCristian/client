function RegisterCommand () {
	'use strict';

	$(".register-button").click(function(event){
		event.preventDefault();
		$(".y").attr('id', 'loader');
		var user={
				
		};
		
		$(".register-data").each(function(){
			
			var data=$(this).find("input").attr("id"),
			dataValue=$(this).find("input").val();
			user[data]=dataValue;
			

		});
		RegisterService(user);
		
		
	})
	
};

