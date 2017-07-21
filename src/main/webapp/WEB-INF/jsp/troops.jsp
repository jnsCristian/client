		<aside>
			<ul class="resource-wrap reset--list">
				<li class="resource-item">
					<button onclick="document.getElementById('id03').style.display='block'" class="transparent "><img src="resources/img/attack.png" class="img"></button><br/>
			<div id="id03" class="w3-modal">
			<div class="w3-modal-content">
			 <span onclick="document.getElementById('id03').style.display='none'" class="button">&times;</span>
  				<form class="action-form">
			<div class="center nick">
				<input id="nick" type="text" placeholder="Nickname">
			</div>
			<div class="action-form__troops">
				<div class="form-element">
					<img src="resources/img/troops/1.png" class="innerimg"> <br />
					<input data-troopId="1" type="text" class="troops-input">
				</div>
				<div class="form-element">
					<img src="resources/img/troops/2.png" class="innerimg"> <br />
					<input data-troopId="2" type="text" class="troops-input">
				</div>
				<div class="form-element">
					<img src="resources/img/troops/3.png" class="innerimg"> <br />
					<input data-troopId="3" type="text" class="troops-input">
				</div>
				<div class="form-element">
					<img src="resources/img/troops/4.png" class="innerimg"> <br />
					<input data-troopId="9" type="text" class="troops-input">
				</div>
				<div class="form-element">
					<img src="resources/img/troops/5.png" class="innerimg"> <br />
					<input data-troopId="10" type="text" class="troops-input">
				</div>
				<div class="form-element">
					<img src="resources/img/troops/6.png" class="innerimg"> <br />
					<input data-troopId="11" type="text" class="troops-input">
				</div>
				<div class="form-element">
					<img src="resources/img/troops/7.png" class="innerimg"> <br />
					<input data-troopId="12" type="text" class="troops-input">
				</div>
				<div class="form-element">
					<img src="resources/img/troops/8.png" class="innerimg"> <br />
					<input data-troopId="13" type="text" class="troops-input">
				</div>
				<div class="form-element">
					<img src="resources/img/troops/9.png" class="innerimg"> <br />
					<input data-troopId="14" type="text" class="troops-input">
				</div>
				<input type="submit" value="Send" class="button">
			</div>

		</form>
			</div>
			</div>
				</li>
			
			
				<li class="resource-item">
					<button onclick="document.getElementById('id01').style.display='block'" class="transparent incomming-actions"><img src="resources/img/arrowLeft.png" class="img"></button><br/>
					<span class="incoming"></span>
			<div id="id01" class="w3-modal">
			<div class="w3-modal-content">
			 <span onclick="document.getElementById('id01').style.display='none'" class="button">&times;</span>
  				<table class="w3-table__full incoming-actions-table">

				</table>
			</div>
			</div>
				</li>
				
				<li class="resource-item">
					<button onclick="document.getElementById('id02').style.display='block'" class="transparent outgoing-actions"><img src="resources/img/arrowRight.png" class="img"></button><br/>
					<span class="outgoing"></span>
					<div id="id02" class="w3-modal">
					<div class="w3-modal-content">
					 <span onclick="document.getElementById('id02').style.display='none'" class="button">&times;</span>
		  				<table class="w3-table__full outgoing-actions-table">
		
						</table>
					</div>
					</div>
				</li>

			<li class="resource-item tooltip" >
				<img src="resources/img/troops/genericTrooper.png" class="img">
				<span class="tooltiptext"> 
					<span data-troopId="1"><img src="resources/img/troops/1.png" class="innerimg"><br/><span class="army-quantity"></span><br/> </span>
					<span data-troopId="2r"><img src="resources/img/troops/2.png" class="innerimg"><br/><span  class="army-quantity"></span><br/> </span>
					<span data-troopId="3"><img src="resources/img/troops/3.png" class="innerimg"><br/><span class="army-quantity"></span></span>
				</span>
			</li>
			<li class="resource-item tooltip">
				<img src="resources/img/troops/genericTank.png" class="img">
				<span class="tooltiptext"> 
					<span data-troopId="9"><img src="resources/img/troops/4.png" class="innerimg"><br/> <span class="army-quantity"></span><br/> </span>
					<span data-troopId="10"><img src="resources/img/troops/5.png" class="innerimg"><br/>  <span class="army-quantity"></span><br/> </span>
					<span data-troopId="11"><img src="resources/img/troops/6.png" class="innerimg"><br/><span class="army-quantity"></span></span>
				</span>
			</li>
			<li class="resource-item tooltip">
				<img src="resources/img/troops/genericPlane.png" class="img">
				<span class="tooltiptext"> 
					<span data-troopId="12"><img src="resources/img/troops/7.png" class="innerimg"><br/>  <span class="army-quantity"></span><br/> </span>
					<span data-troopId="13"><img src="resources/img/troops/8.png" class="innerimg"><br/>  <span class="army-quantity"></span><br/> </span>
					<span data-troopId="14"><img src="resources/img/troops/9.png" class="innerimg"><br/><span class="army-quantity"></span></span>
				</span>
			</li>
			</ul>
		</aside>