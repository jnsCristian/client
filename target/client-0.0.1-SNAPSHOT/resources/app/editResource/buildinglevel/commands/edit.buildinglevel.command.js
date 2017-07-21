function EditBuildingLevelCommand () {
	'use strict';
	$(".editbuildinglevel").click(
			function(event) {
				event.preventDefault();

				var buildinglevel = {
				};
				buildinglevel.levelId = $('.buildinglevel-name').find('input').attr('data-buildinglevelId');

				$(".setting").each(
						function() {var elementName = $(this).find("input").attr(
									"data-buildinglevelId"), elementValue = $(this)
									.find("input").val();
							buildinglevel[elementName] = elementValue || undefined;});

				EditBuildingLevelService(buildinglevel);
			});
	
};
