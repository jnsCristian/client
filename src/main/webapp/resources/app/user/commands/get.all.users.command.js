function GetAllUsersCommand () {
	'use strict';

	var users = atlantis.entity.allUsers.usersDto;
	console.log(users);
	var temp='<tr><th>Nickname</th><th>Alliance</th></tr>';
	if(users.length){
		for (var i = 0; i < users.length; i++) {
			temp = temp + '<tr data-userId='+users[i].userId+'><td>' + users[i].nickName
					+ '</td><td>' + users[i].alliance
					+ '</td></tr>';

		}
	}
	else{
		temp = temp + '<tr data-userId='+users.userId+'><td>' + users.nickName
		+ '</td><td>' + users.alliance
		+ '</td></tr>';
	}
	
	$('.users-table').html(temp);
};

