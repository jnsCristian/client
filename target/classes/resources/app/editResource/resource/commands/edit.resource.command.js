function EditResourceCommand() {
	'use strict';
	$(".editresourcename").click(
			function(event) {
				event.preventDefault();
				var resource = {

				};
				resource.id = $('.resource-name').find('input').attr(
						'data-resourceid');

				resource.name = $(".resource-name").find('input').val();
				console.log(resource);
				EditResourceNameService(resource);
			});

};
