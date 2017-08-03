function EditAllianceCommand () {
	'use strict';
	$(".editalliancename").click(function(event) {
		event.preventDefault();
		var alliance = {		};
		console.log(alliances);
		alliance.id = $('.alliance-data').find('input').attr('data-allianceid');
		alliance.name = $(".alliance-name").find('input').val();
		alliance.description = $(".alliance-description").find('input').val();
		console.log(alliance.description);
		EditAllianceNameService(alliance,alliance.id);
	});
};
