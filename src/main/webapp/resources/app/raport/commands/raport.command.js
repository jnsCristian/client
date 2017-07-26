function RaportCommand() {
	'use strict';
	
	var raport = atlantis.entity.reports.raports, raportMarkup = "<tr><th>Message</th><th></th></tr>";
	
	if(!atlantis.entity.reports.raports){
		console.log("No messages");
		raportMarkup += '<tr><td>'
			+ "No reports"
			+ '</td><td>';
		
	} else if (raport.length) {
		for (var i = 0; i < raport.length; i++) {
			
			raportMarkup += '<tr><td>'
					+ String(raport[i].message)
					+ '</td><td><button class="button raport-delete" data-raport-id="'
					+ raport[i].id + '">Delete</button><button class="button raport-view" data-raport-id="'
					+ raport[i].id + ' ">Open</button></td></tr>';
		}
	} else {
		raportMarkup += '<tr><td>'
			+ String(raport.message)
			+ '</td><td><button class="button raport-delete" data-raport-id="'
			+ raport.id + '">Delete</button><button class="button raport-view" data-raport-id="'
			+ raport.id + '" >Open</button></td></tr>';

	}
	$('.testtable-r').html(raportMarkup);
	atlantis.eventManger.fire('written.all.reports');

};

