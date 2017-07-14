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
<link href="<c:url value="/resources/geo.edit.css" />" rel="stylesheet">
</head>
<!--  data-userId="3" -->
<body>
	<header class="app__header ">
		<!--APP header: logo-->
		<div class="logo">
			<img src="resources/logo.png" class="logo">
		</div>

		<!--APP header: main menu-->
		<ul class="menu reset--list ">
			<li><button class="myButton">Home</button></li>
			<li><button class="myButton" id="myBtn">Reports</button> <!-- The Modal -->
				<div id="myModal" class="modal">

					<!-- Modal content -->
					<div class="modal-content">
						<span class="close">&times;</span>
						<p>Some text in the Modal</p>
					</div>

				</div></li>
			<li><button class="myButton" id="myBtnMesg">Messages</button> <!-- The Modal -->
				<div id="myModalBtn" class="modal">

					<!-- Modal content -->
					<div class="modal-content">
						<span class="close">&times;</span>
						<p>Some text in the Modal..</p>
					</div>

				</div></li>
			<li><button class="myButton">Map</button></li>
		</ul>

		<!--APP header: profile-->
		<div class="w3-dropdown-hover">
			<button class="avatar-button">
				<img src="resources/avatar.png" class="avatar">
			</button>
			<div class="w3-dropdown-content ">
				<a href="#" class=" button">Link 1</a> <a href="#" class=" button">Link
					2</a> <a href="#" class=" button">Link 3</a>
			</div>
		</div>
	</header>
<!-- 	<div id="w">
		<div id="content" class="clearfix">

			<h1>Buildings</h1>
			<section class="building-data">
				<p>Edit building settings:</p>

				<p class="setting building-name"></p>

				<p class="setting building-description"></p>

				<button class="button editbuilding">Submit changes</button>
			</section>
		</div> -->
		
			<div id="w">
		<div id="content" class="clearfix">

			<h1>Troops</h1>
			<section class="troop-data">
				<p>Edit building settings:</p>

		<p class="setting troop-name"></p>
					
					<p>The cost is:</p>

					<p class="setting troop-resourceid"></p>

					<p class="setting troop-resourcename"></p>
					
					<p class="setting troop-cost"></p>

				<button class="button edittroop">Submit changes</button>
			</section>
		</div>
		
<!-- 			<div id="w">
		<div id="content" class="clearfix">

			<h1>building level</h1>
			<section class="buildinglevel-data">
				<p>Edit building settings:</p>

				<p class="setting buildinglevel-name"></p>

				<p class="setting buildinglevel-description"></p>

				<button class="button editbuildinglevel">Submit changes</button>
			</section>
		</div> -->

<!-- 	<div id="w">
		<div id="content" class="clearfix">

			<h1>Resources</h1>
			<section class="resource-data">
				<p>Edit resource settings:</p>

					<p class="setting resource-id"></p>

					<p class="setting resource-name"></p>

				<button class="button editresource">Submit changes</button>
			</section>
		</div> -->
		<script
			src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

		<!-- Plugins -->
		<script src="<c:url value="/resources/app/common/eventmanager.js"/>" /></script>
		<script src="<c:url value="/resources/app/common/ajax.command.js"/>" /></script>
		<script
			src="https://cdnjs.cloudflare.com/ajax/libs/d3/4.9.1/d3.min.js"></script>
		<script
			src="https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.min.js"></script>
		<!-- App config -->
		<script src="<c:url value="/resources/app/config/app.config.js"/>" /></script>
		<script src="<c:url value="/resources/app/config/app.entity.js"/>" /></script>
		<script src="<c:url value="/resources/app/config/app.endpoints.js"/>" /></script>
	<%-- 	<!-- Buildings dependencies -->
		<script
			src="<c:url value="/resources/app/editResource/building/commands/building.command.js"/>" /></script>
		<script
			src="<c:url value="/resources/app/editResource/building/services/get.building.service.js"/>" /></script>
		<script
			src="<c:url value="/resources/app/editResource/building/commands/get.all.buildings.command.js"/>" /></script>
		<script
			src="<c:url value="/resources/app/editResource/building/services/get.all.buildings.service.js"/>" /></script>
		<script
			src="<c:url value="/resources/app/editResource/building/building.config.js"/>" /></script>
			 --%>
	<%-- 	<!-- Resource dependencies -->
		<script
			src="<c:url value="/resources/app/editResource/resource/commands/resource.command.js"/>" /></script>
		<script
			src="<c:url value="/resources/app/editResource/resource/services/get.resource.service.js"/>" /></script>
		<script
			src="<c:url value="/resources/app/editResource/resource/commands/get.all.resource.command.js"/>" /></script>
		<script
			src="<c:url value="/resources/app/editResource/resource/services/get.all.resource.service.js"/>" /></script>
		<script
			src="<c:url value="/resources/app/editResource/resource/resource.config.js"/>" /></script> --%>
	<!-- Building Level dependencies -->
<%-- 	
	<script
			src="<c:url value="/resources/app/editResource/buildinglevel/commands/buildinglevel.command.js"/>" /></script>
		<script
			src="<c:url value="/resources/app/editResource/buildinglevel/services/get.buildinglevel.service.js"/>" /></script>
		<script
			src="<c:url value="/resources/app/editResource/buildinglevel/commands/get.all.buildinglevel.command.js"/>" /></script>
		<script
			src="<c:url value="/resources/app/editResource/buildinglevel/services/get.all.buildinglevel.service.js"/>" /></script>
		<script
			src="<c:url value="/resources/app/editResource/buildinglevel/buildinglevel.config.js"/>" /></script>
 --%>
 
  <script
			src="<c:url value="/resources/app/editResource/troop/commands/troop.command.js"/>" /></script>
		<script
			src="<c:url value="/resources/app/editResource/troop/services/get.troop.service.js"/>" /></script>
		<script
			src="<c:url value="/resources/app/editResource/troop/commands/get.all.troop.command.js"/>" /></script>
		<script
			src="<c:url value="/resources/app/editResource/troop/services/get.all.troop.service.js"/>" /></script>
		<script
			src="<c:url value="/resources/app/editResource/troop/troop.config.js"/>" /></script>
	</div>
</body>
</html>
