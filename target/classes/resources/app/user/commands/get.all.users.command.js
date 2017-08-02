function GetAllUsersCommand () {
	'use strict';

	var users = atlantis.entity.allUsers.usersDto;
	var temp='<tr><th>Nickname</th><th>Alliance</th></tr>';
	if(users&&users.length){
		for (var i = 0; i < users.length; i++) {
			if(users[i].alliance)
			temp = temp + '<tr><td><button data-tab="user" class="view-user users-switch-tab-button button"  data-userId='+users[i].userId+' >' + users[i].nickName
					+ '</button></td><td>' + users[i].alliance
					+ '</td></tr>';

		}
	}
	else if(users){
		if(users.alliance)
		temp = temp + '<tr><td><button data-tab="user" class="view-user users-switch-tab-button button"  data-userId='+users.userId+' >' + users.nickName
		+ '</button></td><td>' + users.alliance
		+ '</td></tr>';
	}
	else{
		temp+='<tr ><td>No users found</td></tr>';
	}

	$('.users-table').html(temp);
	atlantis.eventManger.fire('written.all.users');
};

