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
<body  data-ID=<c:out value="${ userId}" ></c:out>>
		<c:choose>
		 <c:when test="${role=='ROLE_ADMIN'}">
		 <jsp:include page="headerAdmin.jsp" />
   		 </c:when> 
   		     <c:otherwise>
   		     <jsp:include page="header.jsp" />
    </c:otherwise>
	</c:choose>
		<div  class="users-wrapper" >
	<div id="content">
	
		<button class="button admin-switch-tab" data-tab="buildings">Buildings</button>
		<button class="button admin-switch-tab" data-tab="levels">Levels</button>
		<button class="button admin-switch-tab" data-tab="troops">Troops</button>
		<button class="button admin-switch-tab" data-tab="resources">Resources</button>
		<button class="button admin-switch-tab" data-tab="alliances">Alliances</button>
	
	<div class="tabContent tab-active" id="buildings">
		<table class="w3-table__full white buildings-table">
		</table>

	</div>
	<div class="tabContent " id="view-building">
			<div >

			<h1>Buildings</h1>
			<section class="building-data">
				<p>Edit building settings:</p>
				<p class="setting building-id"></p>
				<p class="setting building-name"></p>
				<p class="setting building-description"></p>
				<button class="button " onclick="document.getElementById('editbuildingname').style.display='block'">Submit name</button>
							<div id="editbuildingname" class="w3-modal  ">
							
			<div class="w3-modal-content center">	
			<div class="white pop-up-wrapper">
			<div>
			<h3>Are you sure?</h3>	
			</div>
			<div>
			<button class="editbuildingname button green" onclick="document.getElementById('editbuildingname').style.display='none'">Yes</button>
			<button class=" button red" onclick="document.getElementById('editbuildingname').style.display='none'">No</button>
			</div>
			</div>
</div>
</div>
			</section>
		</div>
		</div>
		<div class="tabContent " id="troops">
			<table class="w3-table__full white troops-table">
			</table>

		</div>
		<div class="tabContent " id="view-troop">

				<h1>Troops</h1>
				<section class="troop-data">
					<p>Edit troop settings:</p>
					<p class="setting troop-name"></p>
					<button class="button " onclick="document.getElementById('edittroopname').style.display='block'">Submit name</button>
												<div id="edittroopname" class="w3-modal  ">
							
			<div class="w3-modal-content center">	
			<div class="white pop-up-wrapper">
			<div>
			<h3>Are you sure?</h3>	
			</div>
			<div>
			<button class="edittroopname button green" onclick="document.getElementById('edittroopname').style.display='none'">Yes</button>
			<button class=" button red" onclick="document.getElementById('edittroopname').style.display='none'">No</button>
			</div>
			</div>
</div>
</div>
					<p>The cost is:</p>
					<p class="setting troop-cost1"></p>
					<p class="setting troop-cost2"></p>
					<p class="setting troop-cost3"></p>
					<p class="setting troop-cost4"></p>
					<p class="setting troop-cost5"></p>
					<button class="button " onclick="document.getElementById('edittroop').style.display='block'">Submit changes</button>
												<div id="edittroop" class="w3-modal  ">
							
			<div class="w3-modal-content center">	
			<div class="white pop-up-wrapper">
			<div>
			<h3>Are you sure?</h3>	
			</div>
			<div>
			<button class="edittroop button green" onclick="document.getElementById('edittroop').style.display='none'">Yes</button>
			<button class=" button red" onclick="document.getElementById('edittroop').style.display='none'">No</button>
			</div>
			</div>
</div>
</div>
				</section>
			</div>
		<div class="tabContent " id="levels">
			<table class="w3-table__full white buildinglevel-table">
			</table>

		</div>
		<div class="tabContent " id="view-level">

				<h1>Building level</h1>
				<section class="buildinglevel-data">
					<p>Edit settings:</p>
					<p class="setting buildinglevel-name"></p>
					


					<p>The cost is:</p>
					<p class="setting buildinglevel-cost1"></p>
					<p class="setting buildinglevel-cost2"></p>
					<p class="setting buildinglevel-cost3"></p>
					<p class="setting buildinglevel-cost4"></p>
					<p class="setting buildinglevel-cost5"></p>
					<button class="button "  onclick="document.getElementById('editbuildinglevel').style.display='block'">Submit changes</button>
					<div id="editbuildinglevel" class="w3-modal  " >
							
			<div class="w3-modal-content center">	
			<div class="white pop-up-wrapper">
			<div>
			<h3>Are you sure?</h3>	
			</div>
			<div>
			<button class="editbuildinglevel button green" onclick="document.getElementById('editbuildinglevel').style.display='none'">Yes</button>
			<button class=" button red" onclick="document.getElementById('editbuildinglevel').style.display='none'">No</button>
			</div>
			</div>
</div>
</div>
				</section>
			</div>
			<div class="tabContent " id="resources">
		<table class="w3-table__full white resource-table">
		</table>

	</div>
	<div class="tabContent " id="view-resource">

			<h1>Resources</h1>
			<section class="resource-data">
				<p>Edit resource settings:</p>
				<p class="setting resource-id"></p>
				<p class="setting resource-name"></p>
				
				<button class="button " onclick="document.getElementById('editresourcename').style.display='block'">Submit name</button>
				<div id="editresourcename" class="w3-modal  " >
							
			<div class="w3-modal-content center">	
			<div class="white pop-up-wrapper">
			<div>
			<h3>Are you sure?</h3>	
			</div>
			<div>
			<button class="editresourcename button green" onclick="document.getElementById('editresourcename').style.display='none'">Yes</button>
			<button class=" button red" onclick="document.getElementById('editresourcename').style.display='none'">No</button>
			</div>
			</div>
</div>
</div>
			</section>
		</div>
		
		<div class="tabContent " id="alliances">
		<table class="w3-table__full white alliances-table">
		</table>

	</div>
	<div class="tabContent " id="view-alliance">
			<div >

			<h1>Alliances</h1>
			<section class="alliance-data">
				<p>Edit Alliance name:</p>
				<p class="setting alliance-name"></p>
				<p class="setting alliance-description"></p>
				<button class="button "  onclick="document.getElementById('editalliancename').style.display='block'">Submit name</button>
<div id="editalliancename" class="w3-modal  " >
							
			<div class="w3-modal-content center">	
			<div class="white pop-up-wrapper">
			<div>
			<h3>Are you sure?</h3>	
			</div>
			<div>
			<button class="editalliancename button green" onclick="document.getElementById('editalliancename').style.display='none'">Yes</button>
			<button class=" button red" onclick="document.getElementById('editalliancename').style.display='none'">No</button>
			</div>
			</div>
</div>
</div>
			</section>
		</div>
		</div>
		</div>
		</div>
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
			<script
			src="<c:url value="/resources/app/editResource/building/commands/get.all.buildings.command.js"/>" /></script>
		<script
			src="<c:url value="/resources/app/editResource/building/services/get.all.buildings.service.js"/>" /></script>
		<script
			src="<c:url value="/resources/app/editResource/building/commands/building.command.js"/>" /></script>
		<script
			src="<c:url value="/resources/app/editResource/building/services/get.building.service.js"/>" /></script>

					<script
			src="<c:url value="/resources/app/editResource/building/commands/edit.building.command.js"/>" /></script>
		<script
			src="<c:url value="/resources/app/editResource/building/services/edit.building.service.js"/>" /></script>
		<script
			src="<c:url value="/resources/app/editResource/building/services/edit.building.name.service.js"/>" /></script>
		<script
			src="<c:url value="/resources/app/editResource/building/building.config.js"/>" /></script>
		<!-- Resource dependencies -->
		<script
		src="<c:url value="/resources/app/editResource/resource/commands/resource.command.js"/>" /></script>
	<script
		src="<c:url value="/resources/app/editResource/resource/services/get.resource.service.js"/>" /></script>
	<script
		src="<c:url value="/resources/app/editResource/resource/commands/get.all.resource.command.js"/>" /></script>
	<script
		src="<c:url value="/resources/app/editResource/resource/services/get.all.resource.service.js"/>" /></script>
			<script
			src="<c:url value="/resources/app/editResource/resource/commands/edit.resource.command.js"/>" /></script>
		<script
			src="<c:url value="/resources/app/editResource/resource/services/edit.resource.service.js"/>" /></script>
		<script
			src="<c:url value="/resources/app/editResource/resource/services/edit.resource.name.service.js"/>" /></script>
	<script
		src="<c:url value="/resources/app/editResource/resource/resource.config.js"/>" /></script>
		
 <!-- Building Level dependencies -->

		<script
			src="<c:url value="/resources/app/editResource/buildinglevel/commands/buildinglevel.command.js"/>" /></script>
		<script
			src="<c:url value="/resources/app/editResource/buildinglevel/services/get.buildinglevel.service.js"/>" /></script>
		<script
			src="<c:url value="/resources/app/editResource/buildinglevel/commands/get.all.buildingslevel.command.js"/>" /></script>
		<script
			src="<c:url value="/resources/app/editResource/buildinglevel/services/get.all.buildinglevel.service.js"/>" /></script>

		<script
			src="<c:url value="/resources/app/editResource/buildinglevel/commands/edit.buildinglevel.command.js"/>" /></script>
		<script
			src="<c:url value="/resources/app/editResource/buildinglevel/services/edit.buildinglevel.service.js"/>" /></script>
		<script
			src="<c:url value="/resources/app/editResource/buildinglevel/buildinglevel.config.js"/>" /></script>

					<!--Troop dependencies -->
		<script
			src="<c:url value="/resources/app/editResource/troop/commands/troop.command.js"/>" /></script>
		<script
			src="<c:url value="/resources/app/editResource/troop/services/get.troop.service.js"/>" /></script>
		<script
			src="<c:url value="/resources/app/editResource/troop/commands/get.all.troop.command.js"/>" /></script>
		<script
			src="<c:url value="/resources/app/editResource/troop/services/get.all.troop.service.js"/>" /></script>

		<script
			src="<c:url value="/resources/app/editResource/troop/commands/edit.troop.command.js"/>" /></script>
		<script
			src="<c:url value="/resources/app/editResource/troop/services/edit.troop.service.js"/>" /></script>
		<script
			src="<c:url value="/resources/app/editResource/troop/services/edit.troop.name.service.js"/>" /></script>
		<script
			src="<c:url value="/resources/app/editResource/troop/troop.config.js"/>" /></script>
					<script
			src="<c:url value="/resources/app/editResource/edit.button.switch.tab.config.js"/>" /></script>
		<script
			src="<c:url value="/resources/app/editResource/edit.switch.tab.config.js"/>" /></script>
			<!-- Alliance dependencies -->
			<script
			src="<c:url value="/resources/app/editResource/alliance/commands/get.all.alliance.command.js"/>" /></script>
		<script
			src="<c:url value="/resources/app/editResource/alliance/services/get.all.alliance.service.js"/>" /></script>
		<script
			src="<c:url value="/resources/app/editResource/alliance/commands/alliance.command.js"/>" /></script>
		<script
			src="<c:url value="/resources/app/editResource/alliance/services/get.alliance.service.js"/>" /></script>

					<script
			src="<c:url value="/resources/app/editResource/alliance/commands/edit.alliance.command.js"/>" /></script>
		<script
			src="<c:url value="/resources/app/editResource/alliance/services/edit.alliance.service.js"/>" /></script>
		<script
			src="<c:url value="/resources/app/editResource/alliance/services/edit.alliance.name.service.js"/>" /></script>
		<script
			src="<c:url value="/resources/app/editResource/alliance/alliance.config.js"/>" /></script>
			
				<script
		src="<c:url value="/resources/app/header/services/get.user.service.js"/>" /></script>
	<script
		src="<c:url value="/resources/app/header/commands/user.command.js"/>" /></script>
	<script
		src="<c:url value="/resources/app/header/user.config.js"/>" /></script>

</body>
</html>
