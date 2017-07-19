<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<link href="<c:url value="/resources/constructionBuilding.css" />"
	rel="stylesheet">

<body>

	<div id="w">

		<div>
			<img src="resources/avatar.png">
			<p class="setting buildingName building"></p>
		</div>



		<section class="user-data after-box blabla">

			<p class="setting description"></p>

			<p class="setting nextLevelCost"></p>
			<p class="setting level"></p>

			<p class="setting productionResource "></p>

			<p class="setting production"></p>



			<button class="button upgrade-building">Upgrade</button>
		</section>
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
</body>
</html>