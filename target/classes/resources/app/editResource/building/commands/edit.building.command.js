function EditBuildingCommand () {
	'use strict';
	$(".editbuildingname").click(function(event) {
		event.preventDefault();
		var building = {		};
		building.id = $('.building-name').find('input').attr('data-buildingid');
		building.name = $(".building-name").find('input').val();
		building.description = $(".building-description").find('input').val();

		EditBuildingNameService(building);
	});
};
