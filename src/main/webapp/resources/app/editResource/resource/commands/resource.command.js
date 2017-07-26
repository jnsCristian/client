function ResourceCommand () {
	'use strict';
	$(".viewresource").click(function(){	
		var param = $(this).attr('data-resourceId');
		GetResourceService(param);
		atlantis.eventManger.addListener('get.resources.success', function() {
			var resource = atlantis.entity.resources;
			$('.resource-name').html('<span>Name </span> <input data-resourceid ="'+resource.id+'" id="name" value="'+resource.name+'"></input>');	
		});
	});
};
