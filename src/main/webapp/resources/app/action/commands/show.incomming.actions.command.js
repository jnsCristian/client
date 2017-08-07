function GetAllIncommingActionsCommand() {
	'use strict';

	$(".incomming-actions")
			.click(
					function(event) {
						event.preventDefault();
						var actions = atlantis.entity.actions.incomingActions;
						var temp = '<tr><th>Initiator</th><th>Target</th><th>Type</th><th>Time</th></tr>';
						if (actions.length) {
							for (var i = 0; i < actions.length; i++) {
								var time='<div id="clockdiv-incoming'+i+'"><span class="days"></span><span class="hours">'+
									'</span><span class="minutes"></span><span class="seconds"></span></div>';
								temp = temp + '<tr><td>' + actions[i].initiator
								 		+ '</td><td>' + actions[i].target
										+ '</td><td>' + actions[i].type
										+ '</td><td>' +time
										+ '</td></tr>';
								temp=temp+"";
								
								/* startClock('clockdiv-incoming'+i,actions[i].time*1000);*/

							}
							$('.incoming-actions-table').html(temp);
							for (var i = 0; i < actions.length; i++) {
								 startClock('clockdiv-incoming'+i,actions[i].time*1000);

							}


						} else {
							var time='<div id="clockdiv-incoming0"><span class="days"></span><span class="hours">'+
							'</span><span class="minutes"></span><span class="seconds"></span></div>';
							temp = temp + '<tr><td>' + actions.initiator
									+ '</td><td>' + actions.target
									+ '</td><td>' + actions.type 
									+ '</td><td>' + time
									+ '</td></tr>';
							temp=temp+"";
							$('.incoming-actions-table').html(temp);
							startClock('clockdiv-incoming'+0,actions.time*1000);
							
						}
						
						
					});

};

