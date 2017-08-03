function AllianceCommand () {
	'use strict';

	$(".viewalliance").click(function(){	
		var param = $(this).attr('data-allianceid');
		GetAllianceService(param);
		atlantis.eventManger.addListener('get.alliance.success', function() {
			var alliance = atlantis.entity.alliance;
			//$('.alliance-name').html('<span>Alliance Name </span> <input data-allianceid="'+alliance.id+'" id="name" value="'+alliance.name+'" ></input>');	
			$('.alliance-name').html('<span>Alliance Name </span> <input data-allianceid="'+alliance.id+'" id="name" value="'+alliance.name+'" ></input>');	
			$('.alliance-description').html('<span>Description Name </span> <input data-allianceid="'+alliance.id+'" id="description" value="'+alliance.description+'" ></input>');	
		});
	});
};

