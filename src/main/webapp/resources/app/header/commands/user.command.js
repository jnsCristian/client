function HeaderCommand () {
	'use strict';
	var user = atlantis.entity.user;
	if(user.avatar){
		 $(".avatar").attr("src",  user.avatar);
		 
		
	}

	if(user.messagesUnread){
		 $(".message").addClass("red");
	}
	if(user.reportsUnread){
		 $(".raport").addClass("red");
	}
};