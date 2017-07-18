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
<body data-code=<c:out value="${ code}" ></c:out>>
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
	<div  class="alliances">
		<div class="alliance1"></div>
		<div class="alliance2"></div>
		<div class="alliance3"></div>
		<div class="alliance4"></div>
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
	<!-- Alliances dependencies -->
	<script
		src="<c:url value="/resources/app/alliances/services/get.alliances.service.js"/>" /></script>
	<script
		src="<c:url value="/resources/app/alliances/services/choose.alliance.service.js"/>" /></script>
	<script
		src="<c:url value="/resources/app/alliances/commands/get.alliances.command.js"/>" /></script>
	<script
		src="<c:url value="/resources/app/alliances/alliances.config.js"/>" /></script>



</body>
</html>