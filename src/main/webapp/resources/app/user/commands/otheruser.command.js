function OtherUserCommand () {
	'use strict';
	$(".view-user").click(function(){
		GetOtherUserService($(this).attr('data-userId'));
		atlantis.eventManger.addListener('get.otheruser.success', function() {
		
			var user = atlantis.entity.otheruser;
		
			$('.nickname').html('<span>Nickname </span> '+user.nickName);	
			$('.userAlliance').html('<span>Alliance </span> '+user.alliance);	
			
			
			if(user.avatar){
				 $("#userphoto").html('<img src="'+user.avatar+'" >');
			}
		})
	});
};

