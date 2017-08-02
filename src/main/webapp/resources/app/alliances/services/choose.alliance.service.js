function ChooseAllianceService () {
	'use strict';

	$(".choosealliance").click(function(event){
		event.preventDefault();
		var code=$('body').attr("data-code");
		var alliance=$(this).attr('data-allianceid');
		console.log(code,alliance);
		$.ajax({
			url : atlantis.endpoints.user+"/"+code+"/alliances/"+alliance,
			type : "PUT",
			success : function(data, textStatus, request) {
					alert('choosen alliance');
			}
			
		});
		
	})
	
};

