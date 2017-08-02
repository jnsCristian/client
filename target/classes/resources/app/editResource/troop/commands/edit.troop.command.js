function EditTroopCommand() {
	'use strict';

	$(".edittroop").click(
			function(event) {
				event.preventDefault();
				var troop = {
				};
				troop.levelId = $('.troop-name').find('input').attr('data-troopid');

				$(".setting").each(
						function() {
							var elementName = $(this).find("input").attr(
									"data-resourceid"), elementValue = $(this)
									.find("input").val();
							troop[elementName] = elementValue || undefined;
						});

				EditTroopService(troop);
			});

	$(".edittroopname").click(function(event) {
		event.preventDefault();
		var troop = {	};
		troop.id = $('.troop-name').find('input').attr('data-troopid');
		troop.name = $(".troop-name").find('input').val();

		EditTroopNameService(troop);
	});
};
