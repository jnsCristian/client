function EditAllianceCommand () {
	'use strict';
	$(".editalliancename").click(function(event) {
		event.preventDefault();
		var alliance = {		};
		alliance.id = $('.alliance-data').find('input').attr('data-allianceid');
		alliance.name = $(".alliance-name").find('input').val();
		console.log(alliance);
		EditAllianceNameService(alliance,alliance.id);
	});
};
