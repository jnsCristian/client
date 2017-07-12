function EditUserCommand () {
	'use strict';

	$(".edituser").click(function(event){
		event.preventDefault();
		
		var user={
				
		};
		
/*		$(".user-data").each(function(){
			
			var elementName=$(this).find("input").attr("id"),
			elementValue=$(this).find("input").val();
			user[elementName]=elementValue||undefined;
			console.log('intra');

		});*/
		var elementName=$(".user-data").find("#email").attr("id"),
		elementValue=$(".user-data").find("#email").val();
		user[elementName]=elementValue||undefined;
		var elementName=$(".user-data").find("#nickName").attr("id"),
		elementValue=$(".user-data").find("#nickName").val();
		user[elementName]=elementValue||undefined;
		var elementName=$(".user-data").find("#firstName").attr("id"),
		elementValue=$(".user-data").find("#firstName").val();
		user[elementName]=elementValue||undefined;
		var elementName=$(".user-data").find("#lastName").attr("id"),
		elementValue=$(".user-data").find("#lastName").val();
		user[elementName]=elementValue||undefined;
		EditUserService(user);
	})
	
};

