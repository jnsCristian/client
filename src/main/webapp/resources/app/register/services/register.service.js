function RegisterService(params) {
	'use strict';

	var test=JSON.stringify(params);
	var password=$(".password").find('input').val();
	var repassword=$(".repassword").find('input').val();
	$.ajax({
		url : atlantis.endpoints.user ,
		type : "POST",
		data: test,
        contentType: "application/json",
		beforeSend : function(request) {
			request.setRequestHeader("password",password);
			request.setRequestHeader("rePassword",repassword );
		},
		success : function(data, textStatus, request) {
			atlantis.eventManger.fire('registered.user');
			location.reload();
		},
		error: function(data, textStatus, request) {
			atlantis.eventManger.fire('error.register');
			$('.response').text("Failure");
			
		}
		
		
	});
	

};


