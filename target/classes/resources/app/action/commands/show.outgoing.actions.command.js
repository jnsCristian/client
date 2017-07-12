function GetAllOutgoingActionsCommand() {
	'use strict';

	$(".outgoing-actions")
			.click(
					function(event) {
						event.preventDefault();
						var actions = atlantis.entity.actions.outgouingActions;
						console.log(actions);
						var temp = '<tr><th>Initiator</th><th>Type</th><th>Time</th></tr>';
						if (actions.length) {
							for (var i = 0; i < actions.length; i++) {
								temp = temp + '<tr><td>' + actions[i].initiator
										+ '</td><td>' + actions[i].type
										+ '</td><td>' + actions[i].time
										+ '</td></tr>';

							}


						} else {
							temp = temp + '<tr><td>' + actions.initiator
									+ '</td><td>' + actions.type + '</td><td>'
									+ actions.time + '</td></tr>';
							
						}
						temp=temp+"";
						$('.outgoing-actions-table').html(temp);

					});

};

