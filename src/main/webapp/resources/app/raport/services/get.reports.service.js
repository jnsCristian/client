function GetReportsService(){
	'use strict';
	$(".report-button").click(function(event){
		event.preventDefault();
	 $.ajax({
		url : atlantis.endpoints.raports ,
		type : "GET",
		beforeSend : function(request) {
				request.setRequestHeader("userId", atlantis.entity.userId);
		},
		success : function(data, textStatus, request) {
				var reportsETag;
				atlantis.entity.reportsETag = request
						.getResponseHeader('userId');
				atlantis.entity.reports = data;
				atlantis.eventManger.fire('get.reports.success');
		}
		
	});
	})
};