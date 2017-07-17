<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>

<meta http-equiv="Content-Type"
	content="text/html; text/html;charset=utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!--Load the common stuff first-->
<link
	href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css"
	rel="stylesheet" type="text/css" />
<!--Load more generic app stuff-->
<!--Load specific stuff-->
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link href="<c:url value="/resources/common.css" />" rel="stylesheet">
<link href="<c:url value="/resources/newCss.css" />" rel="stylesheet">
<link href="<c:url value="/resources/cristi.temporary.css" />" rel="stylesheet">
</head>
<!--  data-userId="3" -->
<body data-ID=<c:out value="${ userId}" ></c:out>>
	<header class="app__header ">
		<!--APP header: logo-->
		<div class="logo">
		  <img src="resources/logo.png" class="logo">
		</div>
		
		<!--APP header: main menu-->
		<ul class="menu reset--list ">
			<li><a href="home"class="myButton">Home</a></li>
			<li><a href="users"class="myButton">Users</a></li>
			<li><a href="map"class="myButton">Map</a></li>
			<li><button class="myButton" id="myBtn">Reports</button>
			<!-- The Modal -->
			<div id="myModal" class="modal">

  			<!-- Modal content -->
  			<div class="modal-content">
  			<span class="close">&times;</span>
   			 <p>Some text in the Modal</p>
  			</div>

			</div>
			</li>
			<li><button class="myButton" id="myBtnMesg">Messages</button>
			<!-- The Modal -->
			<div id="myModalBtn" class="modal">

  			<!-- Modal content -->
  			<div class="modal-content">
  			<span class="close">&times;</span>
   			 <p>Some text in the Modal..</p>
  			</div>

			</div>
			</li>
			
		</ul>

		<!--APP header: profile-->
	  <div class="w3-dropdown-hover">
	    <button class="avatar-button"><img src="resources/avatar.png" class="avatar"></button>
	    <div class="w3-dropdown-content ">
	      <a href="profile" class=" button">Profile</a>
	      <c:url value="/j_spring_security_logout" var="logoutUrl" />
	      		<form action="${logoutUrl}" method="POST" >
							<button class="button" type="submit"  >Logout</button>
            <input type="hidden"
                    name="${_csrf.parameterName}"
                    value="${_csrf.token}" />
</form>
	    </div>
  	  </div>
  	  
	</header>
	<div class="body-wrapper">
		<aside>
			<ul class="resource-wrap reset--list">
				<li class="resource-item">
					<button onclick="document.getElementById('id03').style.display='block'" class="transparent "><img src="resources/img/attack.png" class="img"></button><br/>
			<div id="id03" class="w3-modal">
			<div class="w3-modal-content">
			 <span onclick="document.getElementById('id03').style.display='none'" class="button">&times;</span>
  				<form class="action-form">
			<div class="center coordinates">
				<input id="x" type="text" class="troops-input coordinates"
					placeholder="x">
			</div>
			<div class="center coordinates">
				<input id="y" type="text" class="troops-input coordinates"
					placeholder="y">
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
					<span data-resourceName="basic trooper"><img src="resources/img/troops/1.png" class="innerimg"><br/><span class="army-quantity"></span><br/> </span>
					<span data-resourceName="storm trooper"><img src="resources/img/troops/2.png" class="innerimg"><br/><span  class="army-quantity"></span><br/> </span>
					<span data-resourceName="commando"><img src="resources/img/troops/3.png" class="innerimg"><br/><span class="army-quantity"></span></span>
				</span>
			</li>
			<li class="resource-item tooltip">
				<img src="resources/img/troops/genericTank.png" class="img">
				<span class="tooltiptext"> 
					<span data-resourceName="tank 1"><img src="resources/img/troops/4.png" class="innerimg"><br/> <span class="army-quantity"></span><br/> </span>
					<span data-resourceName="tank 2"><img src="resources/img/troops/5.png" class="innerimg"><br/>  <span class="army-quantity"></span><br/> </span>
					<span data-resourceName="tank 3"><img src="resources/img/troops/6.png" class="innerimg"><br/><span class="army-quantity"></span></span>
				</span>
			</li>
			<li class="resource-item tooltip">
				<img src="resources/img/troops/genericPlane.png" class="img">
				<span class="tooltiptext"> 
					<span data-resourceName="plane 1"><img src="resources/img/troops/7.png" class="innerimg"><br/>  <span class="army-quantity"></span><br/> </span>
					<span data-resourceName="plane 2"><img src="resources/img/troops/8.png" class="innerimg"><br/>  <span class="army-quantity"></span><br/> </span>
					<span data-resourceName="plane 3"><img src="resources/img/troops/9.png" class="innerimg"><br/><span class="army-quantity"></span></span>
				</span>
			</li>
			</ul>
		</aside>
			<div class="building-wrapper">
				
				<div class="barracks"><img class="barracks-image" src="resources/img/buildings/barracks.png"> </div> 
			<div class="farm"><img class="farm-image" src="resources/img/buildings/farm.png" > </div>
				<div class="tankfactory"><img class="tankfactory-image" src="resources/img/buildings/tankfactory.png" > </div> 
				<div class="ironmine"><img class="ironmine-image" src="resources/img/buildings/ironmine.png" > </div>  
				<div class="planfactory"><img class="planfactory-image" src="resources/img/buildings/planfactory.png"> </div> 
				<div class="stone"><img class="stone-image" src="resources/img/buildings/stone.png" > </div>
					
				<div class="bank"><img class="bank-image" src="resources/img/buildings/bank.png" > </div>	
				<div class="eoliana"><img class="eoliana-image" src="resources/img/street/eoliana.png" > </div> 
				<div class="eoliana1"><img class="eoliana1-image" src="resources/img/street/eoliana.png" > </div> 
				<div class="eoliana2"><img class="eoliana2-image" src="resources/img/street/eoliana.png" > </div> 
				<div class="eoliana3"><img class="eoliana3-image" src="resources/img/street/eoliana.png" > </div> 
				<div class="eoliana4"><img class="eoliana2-image" src="resources/img/street/eoliana.png" > </div> 
				<div class="eoliana5"><img class="eoliana3-image" src="resources/img/street/eoliana.png" > </div> 
	            <div class="forest"><img class="forest-image" src="resources/img/street/forest.png" > </div> 
	            <div class="forest1"><img class="forest1-image" src="resources/img/street/forest1.png" > </div> 
	            <div class="forest2"><img class="forest2-image" src="resources/img/street/forest2.png" > </div> 
	            <div class="forest3"><img class="forest3-image" src="resources/img/street/forest3.png" > </div> 
			</div>
		<aside>
			<ul class="resource-wrap reset--list">
				<li class="resource-item" data-resourceName="food">
					<img src="resources/img/constructionResources/food.png" class="img"> 
					<span class="resource-quantity"></span> 
					<br/> 
					<span class="resource-production"></span>
				</li>
				<li class="resource-item" data-resourceName="stone">
					<img src="resources/img/constructionResources/stone.png" class="img"> 
					<span class="resource-quantity"></span> 
					<br/> 
					<span class="resource-production"></span>
				</li>
				<li class="resource-item" data-resourceName="iron">
					<img src="resources/img/constructionResources/iron.png" class="img"> 
					<span class="resource-quantity"></span> 
					<br/> 
					<span class="resource-production"></span>
				</li>
				<li class="resource-item" data-resourceName="money">
					<img src="resources/img/constructionResources/money.png" class="img"> 
					<span class="resource-quantity"></span> 
					<br/> 
					<span class="resource-production"></span>
				</li>
				<li class="resource-item" data-resourceName="wood">
					<img src="resources/img/constructionResources/wood.png" class="img"> 
					<span class="resource-quantity"></span> 
					<br/> 
					<span class="resource-production"></span>
				</li>
			</ul>
		</aside>
	</div>
	
	<!--START app main
	<footer class="app__footer">
		
			&copy; 2017 NttData Romania <br> Design by Atlantis | Atlantis
			Portal
		
	</footer>
	END app main content-->

	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

	<!-- Plugins -->
	<script src="<c:url value="/resources/app/common/eventmanager.js"/>" /></script>
	<script src="<c:url value="/resources/app/common/ajax.command.js"/>" /></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/4.9.1/d3.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.min.js"></script>
	<!-- App config -->
	<script src="<c:url value="/resources/app/config/app.config.js"/>" /></script>
	<script src="<c:url value="/resources/app/config/app.entity.js"/>" /></script>
	<script src="<c:url value="/resources/app/config/app.endpoints.js"/>" /></script>
	<!-- Resources dependencies -->
	<script
		src="<c:url value="/resources/app/resources/construction/services/get.resources.service.js"/>" /></script>
	<script
		src="<c:url value="/resources/app/resources/construction/commands/construction.command.js"/>" /></script>
	<script
		src="<c:url value="/resources/app/resources/construction/construction.config.js"/>" /></script>
			<!-- User dependencies -->
	<script
		src="<c:url value="/resources/app/header/services/get.user.service.js"/>" /></script>
	<script
		src="<c:url value="/resources/app/header/commands/user.command.js"/>" /></script>
	<script
		src="<c:url value="/resources/app/header/user.config.js"/>" /></script>
	<!-- Troops dependencies -->
	<script
		src="<c:url value="/resources/app/resources/army/services/get.troops.service.js"/>" /></script>
	<script
		src="<c:url value="/resources/app/resources/army/commands/troops.command.js"/>" /></script>
	<script
		src="<c:url value="/resources/app/resources/army/troops.config.js"/>" /></script>
	<!-- Home view dependencies -->
	<script
		src="<c:url value="/resources/app/home/commands/setMarkup.command.js"/>" /></script>
	<script src="<c:url value="/resources/app/home/home.config.js"/>" /></script>
	<script src="<c:url value="/resources/app/home/home.entity.js"/>" /></script>
	<!-- Action dependencies -->
		<script
		src="<c:url value="/resources/app/action/commands/action.command.js"/>" /></script>
	<script
		src="<c:url value="/resources/app/action/services/create.action.service.js"/>" /></script>
		<script
		src="<c:url value="/resources/app/action/commands/show.first.action.command.js"/>" /></script>
				<script
		src="<c:url value="/resources/app/action/commands/show.incomming.actions.command.js"/>" /></script>
						<script
		src="<c:url value="/resources/app/action/commands/show.outgoing.actions.command.js"/>" /></script>
				<script
		src="<c:url value="/resources/app/action/commands/action.command.js"/>" /></script>
	<script
		src="<c:url value="/resources/app/action/services/show.first.action.service.js"/>" /></script>
		<script
		src="<c:url value="/resources/app/action/services/show.incoming.actions.service.js"/>" /></script>
				<script
		src="<c:url value="/resources/app/action/services/show.outgoing.actions.service.js"/>" /></script>
			<script
		src="<c:url value="/resources/app/action/services/show.outgoing.actions.service.js"/>" /></script>
	<script src="<c:url value="/resources/app/action/action.config.js"/>" /></script>	


</body>
</html>