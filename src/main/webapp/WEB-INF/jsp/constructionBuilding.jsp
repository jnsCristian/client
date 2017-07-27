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
<link href="<c:url value="/resources/message.css" />" rel="stylesheet">
<link href="<c:url value="/resources/raport.css" />" rel="stylesheet">
<link href="<c:url value="/resources/constructionBuilding.css" />"
	rel="stylesheet">
<link href="<c:url value="/resources/loader.css" />"
	rel="stylesheet">
</head>
<body  data-ID=<c:out value="${ userId}" ></c:out>  data-building-id=<c:out value="${ buildingId}"> </c:out> >
		<c:choose>
		 <c:when test="${role=='ROLE_ADMIN'}">
		 <jsp:include page="headerAdmin.jsp" />
   		 </c:when> 
   		     <c:otherwise>
   		     <jsp:include page="header.jsp" />
    </c:otherwise>
	</c:choose>
	<div class="body-wrapper">
	<jsp:include page="troops.jsp" />
	<div id="loader"></div>
	<div id="w" class="white">
		
		<div class="white"> 
			<img class="image" src="resources/img/buildingsInt/building${ buildingId}.jpg">
			<p class="setting buildingName building"></p>
		</div>



		<section class="user-data after-box blabla">

			<p class="setting description"></p>

			<p class="setting nextLevelCost"></p>
			<p class="setting level"></p>

			<p class="setting productionResource "></p>

			<p class="setting production"></p>



			<button class="button upgrade-building">Upgrade</button>
			<a href="home" class="button transparent ">Exit building</a>
		</section>
	</div>
	<jsp:include page="resources.jsp" />
	</div>
	

	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

	<!-- Plugins -->
	<script src="<c:url value="/resources/app/common/eventmanager.js"/>" /></script>
	<script src="<c:url value="/resources/app/common/ajax.command.js"/>" /></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/4.9.1/d3.min.js"></script>
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.min.js"></script>
	<script src="<c:url value="/resources/app/config/app.config.js"/>" /></script>
	<script src="<c:url value="/resources/app/config/app.entity.js"/>" /></script>
	<script src="<c:url value="/resources/app/config/app.endpoints.js"/>" /></script>
	<script src="<c:url value="/resources/app/building/services/construction.building.service.js"/>" /></script>
	<script src="<c:url value="/resources/app/building/services/upgrade.building.service.js"/>" /></script>
	<script src="<c:url value="/resources/app/building/commands/construction.building.command.js"/>" /></script>
	<script src="<c:url value="/resources/app/building/commands/upgrade.building.command.js"/>" /></script>
	<script src="<c:url value="/resources/app/building/construction.building.config.js"/>" /></script>
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

<!-- Messages dependencies -->
	<script
		src="<c:url value="/resources/app/message/services/get.message.inbox.service.js"/>" /></script>
	<script
		src="<c:url value="/resources/app/message/services/get.message.sent.service.js"/>" /></script>
	<script
		src="<c:url value="/resources/app/message/services/create.message.service.js"/>" /></script>
	<script
		src="<c:url value="/resources/app/message/services/delete.message.service.js"/>" /></script>
			<script
		src="<c:url value="/resources/app/message/services/view.message.inbox.service.js"/>" /></script>
				<script
		src="<c:url value="/resources/app/message/services/view.message.sent.service.js"/>" /></script>
	<script
		src="<c:url value="/resources/app/message/commands/message.inbox.command.js"/>" /></script>
	<script
		src="<c:url value="/resources/app/message/commands/message.switch.tab.command.js"/>" /></script>
	<script
		src="<c:url value="/resources/app/message/commands/message.sent.command.js"/>" /></script>
	<script
		src="<c:url value="/resources/app/message/commands/message.create.command.js"/>" /></script>
	<script
		src="<c:url value="/resources/app/message/commands/message.delete.inbox.command.js"/>" /></script>
		<script
		src="<c:url value="/resources/app/message/commands/message.delete.sent.command.js"/>" /></script>
	<script
		src="<c:url value="/resources/app/message/commands/message.view.inbox.command.js"/>" /></script>
	
	
		<script
		src="<c:url value="/resources/app/message/commands/message.view.sent.command.js"/>" /></script>
		<script src="<c:url value="/resources/app/message/message.config.js"/>" /></script>
		<!-- Reports dependencies -->
			<script
		src="<c:url value="/resources/app/raport/services/get.reports.service.js"/>" /></script>
	<script
		src="<c:url value="/resources/app/raport/services/delete.raport.service.js"/>" /></script>
	<script
		src="<c:url value="/resources/app/raport/services/view.raport.service.js"/>" /></script>
	<script
		src="<c:url value="/resources/app/raport/commands/raport.command.js"/>" /></script>
	<script
		src="<c:url value="/resources/app/raport/commands/raport.delete.command.js"/>" /></script>
	<script
		src="<c:url value="/resources/app/raport/commands/raport.view.command.js"/>" /></script>

	<script src="<c:url value="/resources/app/raport/raport.config.js"/>" /></script>
</body>
</html>