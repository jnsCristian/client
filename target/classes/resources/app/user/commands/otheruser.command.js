function OtherUserCommand () {
	'use strict';
	$(".view-user").click(function(){
		GetOtherUserService($(this).attr('data-userId'));
		atlantis.eventManger.addListener('get.otheruser.success', function() {
		
			var user = atlantis.entity.otheruser;
			
			$('.nickname').html('<span>Nickname </span> '+user.nickName);	
			$('.userAlliance').html('<span>Alliance </span> '+user.alliance);	
			$('.exitbutton').html('<button class="button exit" id="'+atlantis.entity.activeTab+'"data-tab="'+atlantis.entity.activeTab+'">Exit</button>');
			atlantis.eventManger.fire('got.user.success');
			if(user.avatar){
				 $("#userphoto").html('<img src="'+user.avatar+'" >');
			}
			else{
				 $("#userphoto").html('<img src="resources/avatar.png" >');
			}
			
		});
		
	});
	
};

