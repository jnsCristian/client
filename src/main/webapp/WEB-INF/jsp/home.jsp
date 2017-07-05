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

</head>
<body data-userId="3">
	<header class="app__header ">
		<div class="logo">Logo here</div>
		<ul class="menu reset--list ">
			<li><button class="button">Reports</button></li>
			<li><button class="button">Reports</button></li>
			<li><button class="button">Reports</button></li>
			<li><button class="button">Reports</button></li>
		</ul>

		<!--APP header: profile-->
	  <div class="w3-dropdown-hover">
	    <button class="avatar-button"><img src="resources/avatar.png" class="avatar"></button>
	    <div class="w3-dropdown-content ">
	      <a href="#" class=" button">Link 1</a>
	      <a href="#" class=" button">Link 2</a>
	      <a href="#" class=" button">Link 3</a>
	    </div>
  	  </div>
	</header>
	<div class="body-wrapper">
		<aside>
			<ul class="resource-wrap reset--list">
				<li class="resource-item">
					<img src="resources/img/arrowLeft.png" class="img"><br/>2:30:45
				</li>
				<li class="resource-item">
					<img src="resources/img/arrowRight.png" class="img"><br/>2:30:45
				</li>
			<li class="resource-item tooltip" >
				<img src="resources/img/troops/genericTrooper.png" class="img">
				<span class="tooltiptext"> 
					<span data-resourceName="basic trooper"><img src="resources/img/troops/1.png" class="innerimg"><br/><span class="army-quantity"></span><br/> </span>
					<span data-resourceName="storm trooper"><img src="resources/img/troops/2.png" class="innerimg"><br/><span  class="army-quantity"></span><br/> </span>
					<span data-resourceName="cyborg"><img src="resources/img/troops/3.png" class="innerimg"><br/><span class="army-quantity"></span></span>
				</span>
			</li>
			<li class="resource-item tooltip">
				<img src="resources/img/troops/genericTank.png" class="img">
				<span class="tooltiptext"> 
					<img src="resources/img/troops/4.png" class="innerimg"><br/> 
					<img src="resources/img/troops/5.png" class="innerimg"><br/> 
					<img src="resources/img/troops/6.png" class="innerimg">
				</span>
			</li>
			<li class="resource-item tooltip">
				<img src="resources/img/troops/genericPlane.png" class="img">
				<span class="tooltiptext"> 
					<img src="resources/img/troops/7.png" class="innerimg"><br/> 
					<img src="resources/img/troops/8.png" class="innerimg"><br/> 
					<img src="resources/img/troops/9.png" class="innerimg">
				</span>
			</li>
			</ul>
		</aside>
			<div class="building-wrapper">
				<a class="building"><img class="building-image" src="resources/img/mine.png" > </a>
				<a class="building"><img class="building-image" src="resources/img/build2.png"> </a>
				<a class="building"><img class="building-image" src="resources/img/build3.png" > </a> 
				<a class="building"><img class="building-image" src="resources/img/build4.png" > </a> 
				<a class="building"><img class="building-image" src="resources/img/build3.png" > </a> 
				<a class="building"><img class="building-image" src="resources/img/build2.png" > </a> 
				<a class="building"><img class="building-image" src="resources/img/build3.png" > </a> 
				<a class="building"><img class="building-image" src="resources/img/build4.png" > </a> 
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
	<!--START app main-->
	<footer class="app__footer">
		
			&copy; 2017 NttData Romania <br> Design by Atlantis | Atlantis
			Portal
		
	</footer>
	<!--END app main content-->

	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

	<!-- Plugins -->
	<script src="<c:url value="/resources/app/common/eventmanager.js"/>" /></script>
	<script src="<c:url value="/resources/app/common/ajax.command.js"/>" /></script>
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
</body>
</html>