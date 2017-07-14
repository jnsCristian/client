function ResourceCommand () {
	'use strict';
	console.log("resourceee");
	$(".viewresource").click(function(){	
		var param = $(this).attr('data-resourceId');
		GetResourceService(param);
		atlantis.eventManger.addListener('get.resources.success', function() {
			var resource = atlantis.entity.resources;
			$('.resource-id').html('<span>Resource Name </span> <input id="id" value="'+resource.id+'"></input>');	
			$('.resource-name').html('<span>Description </span> <input id="name" value="'+resource.name+'"></input>');	
		});
	});
};
