function RaportCommand() {
	'use strict';
	
	$(".raport").click( function(event) {
		event.preventDefault();
		
		GetReportsService().then(function(response){
			
			var raport=atlantis.entity.raports.raportDto;
			console.log( raport);
			var temp='<tr><th>Nick Name</th><th>Read</th><th></th></tr>';
			if (raport.length) {
				if(raport.length==1){
					temp = temp
					+ '<tr><td>'
					+ raport
					+ '</td><td>'
					+ raport
					+ '</td><td><button class="button delete1">Delete</button></td></tr>';

			}	else
				for (var i = 0; i < raport.length; i++) {
					temp=temp+'<tr><td>'+raport[i]+'</td><td>'+raport[i]+'</td><td><button class="button delete1">Delete</button></td></tr>';
					
					
					
				}
				$('.testtable').html(temp);
			
				}
			
			
		});
	
		
	});

};

