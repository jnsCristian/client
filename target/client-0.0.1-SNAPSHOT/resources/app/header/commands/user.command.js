function UserCommand () {
	'use strict';
	var user = atlantis.entity.user;
	if(user.avatar){
		 $(".avatar").attr("src",  user.avatar);
	}

};