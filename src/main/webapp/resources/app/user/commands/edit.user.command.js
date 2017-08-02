function EditUserCommand () {
	'use strict';
	$(".edituser").click(function(event){
		event.preventDefault();
		var user={
				
		};
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

