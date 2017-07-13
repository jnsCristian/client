function OtherUserCommand () {
	'use strict';

	var user = atlantis.entity.otheruser;

	$('.nickname').html('<span>Nickname </span> '+user.nickName);	
	$('.userAlliance').html('<span>Alliance </span> '+user.alliance);	
	
	
	if(user.avatar){
		 $("#userphoto").html('<img src="'+user.avatar+'" >');
	}
	
};

