function UserCommand () {
	'use strict';

	var user = atlantis.entity.user;

	$('.user-email').html('<span>E-mail Address </span> <input id="email" value="'+user.email+'"></input>');	
	$('.nickname').html('<span>Nickname </span> <input id="nickName" value="'+user.nickName+'"></input>');	
	$('.firstname').html('<span>First Name </span> <input  id="firstName" value="'+user.firstName+'"></input>');	
	$('.lastname').html('<span>Last Name </span> <input id="lastName" value="'+user.lastName+'"></input>');	
	
	
	if(user.avatar){
		 $("#userphoto").html('<img src="'+user.avatar+'" >');
	}
	
};

