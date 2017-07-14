function GetAllUsersCommand () {
	'use strict';

	var users = atlantis.entity.allUsers.usersDto;
	var temp='<tr><th>Nickname</th><th>Alliance</th></tr>';
	if(users&&users.length){
		for (var i = 0; i < users.length; i++) {
			temp = temp + '<tr data-userId='+users[i].userId+'><td><a href="">' + users[i].nickName
					+ '</a></td><td>' + users[i].alliance
					+ '</td></tr>';

		}
	}
	else if(users){
		temp = temp + '<tr data-userId='+users.userId+'><td>' + users.nickName
		+ '</td><td>' + users.alliance
		+ '</td></tr>';
	}
	else{
		temp+='<tr ><td>No users found</td></tr>';
	}
	$('.users-table').html(temp);
};

