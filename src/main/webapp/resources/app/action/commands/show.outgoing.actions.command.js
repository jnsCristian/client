function GetAllOutgoingActionsCommand() {
	'use strict';

	$(".outgoing-actions")
			.click(
					function(event) {
						event.preventDefault();
						var actions = atlantis.entity.actions.outgouingActions;
						var temp = '<tr><th>Initiator</th><th>Target</th><th>Type</th><th>Time</th></tr>';
						if (actions.length) {
							for (var i = 0; i < actions.length; i++) {
								var time='<div id="clockdiv-outgoing'+i+'"><span class="days"></span><span class="hours">'+
								'</span><span class="minutes"></span><span class="seconds"></span></div>';
								temp = temp + '<tr><td>' + actions[i].initiator
								 		+ '</td><td>' + actions[i].target
										+ '</td><td>' + actions[i].type
										+ '</td><td>' + time
										+ '</td></tr>';

							}
							$('.outgoing-actions-table').html(temp);
							for (var i = 0; i < actions.length; i++) {
								 startClock('clockdiv-outgoing'+i,actions[i].time*1000);

							}

						} else {
							var time='<div id="clockdiv-outgoing0"><span class="days"></span><span class="hours">'+
							'</span><span class="minutes"></span><span class="seconds"></span></div>';
							temp = temp + '<tr><td>' + actions.initiator
									+ '</td><td>' + actions.target
									+ '</td><td>' + actions.type + '</td><td>'
									+ time + '</td></tr>';
							temp=temp+"";
							$('.outgoing-actions-table').html(temp);
							startClock('clockdiv-outgoing'+0,actions.time*1000);
							
						}

					});

};

