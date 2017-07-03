$(document).ready(function() {
/*	var atlantis = atlantis || {};

	atlantis.enitity = {
		userId : $('body').attr('data-userid') || localStorage.userId || null,

		endpoints : {
			'buildings' : 'http://localhost:8085/atlantis/buildings',
			'troops' : 'http://localhost:8085/atlantis/troops',
			'users' : 'http://localhost:8085/atlantis/users',
			'raports' : 'http://localhost:8085/atlantis/raports',
			'actions' : 'http://localhost:8085/atlantis/actions',
			'map': 'http://localhost:8085/atlantis/map',
			'alliances' : 'http://localhost:8085/atlantis/alliances',
			'messages' : 'http://localhost:8085/atlantis/messages'
		}
	}

	var buildingWrap = document.querySelector('.building-wrapper');

	console.log(atlantis);

	buildingWrap.addEventListener('click', function(event) {
		console.log(event.target);
	});*/
/* main page call */
/*	$.ajax({


		type : "GET",
		url : "http://localhost:8085/atlantis/users/3",
		data : "",
		success : function(response) {
			console.log('success', response);
		},
		error : function(response) {
			console.log('error', response);
		}
	});*/
	/* war building page call */	
/*	$.ajax({
		beforeSend : function(xhr) {
			xhr.setRequestHeader("userid", "3");

			console.log(xhr, 'added header', xhr.getResponseHeader());
		},
		type : "GET",
		url : "http://localhost:8085/atlantis/buildings/1",
		data : "",
		success : function(response) {
			console.log('success', response);
		},
		error : function(response) {
			console.log('error', response);
		}
	});

	$.ajax({
		beforeSend : function(xhr) {
			xhr.setRequestHeader("buildingId", "1");
			xhr.setRequestHeader("buildingLevel", "2");
			console.log(xhr, 'added header', xhr.getResponseHeader());
		},
		type : "GET",
		url : "http://localhost:8085/atlantis/troops/building",
		data : "",
		success : function(response) {
			console.log('success', response);
		},
		error : function(response) {
			console.log('error', response);
		}
	});
*/	
	/* construction building page call */	
/*		$.ajax({
			beforeSend : function(xhr) {
				xhr.setRequestHeader("userid", "3");

				console.log(xhr, 'added header', xhr.getResponseHeader());
			},
			type : "GET",
			url : "http://localhost:8085/atlantis/buildings/3",
			data : "",
			success : function(response) {
				console.log('success', response);
			},
			error : function(response) {
				console.log('error', response);
			}
		});*/
	$.ajax({
	type : "GET",
	url : "http://localhost:8085/atlantis/users/test",
	
	success : function(response) {
		console.log("success",response);
		 $("#imgFromScript").attr("src",  response.avatar);
	},
	error : function(response) {
		console.log('error', response);
	}
});
})
