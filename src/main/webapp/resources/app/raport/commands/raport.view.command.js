function OpenRaportCommand() {
		'use strict';
		
		$(".raport-view").click( function(event) {
			event.preventDefault();
			
			OpenRaportService($(this).attr('data-raport-id'));
			atlantis.eventManger.addListener('get.specific.raport.success', function() {
			var temp= atlantis.entity.raport,raportMarkup = "";
		
			raportMarkup = '<tr><td>'
				+ temp.message
				+ '</td>';
			
			$(' .testtable-r').html(raportMarkup);
			
			
			});
			
		});

	};