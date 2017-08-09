function AlliancesCommand () {
	'use strict';

	var alliances=atlantis.entity.allainces.alliances;
	console.log(alliances);
	$('.alliance1').html('<p>'+alliances[0].description+'</p><div><button class="button choosealliance alliance-button" data-allianceId="'+alliances[0].id+'">'+alliances[0].name+'</button></div>');
	$('.alliance2').html('<p>'+alliances[1].description+'</p><div><button class="button choosealliance alliance-button" data-allianceId="'+alliances[1].id+'">'+alliances[1].name+'</button></div>');
	$('.alliance3').html('<p>'+alliances[2].description+'</p><div><button class="button choosealliance alliance-button" data-allianceId="'+alliances[2].id+'">'+alliances[2].name+'</button></div>');
	$('.alliance4').html('<p>'+alliances[3].description+'</p><div><button class="button choosealliance alliance-button" data-allianceId="'+alliances[3].id+'">'+alliances[3].name+'</button></div>');
	atlantis.eventManger.fire('written.all.alliances');
};

