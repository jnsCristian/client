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
<link href="<c:url value="/resources/cristi.temporary.css" />"
	rel="stylesheet">
</head>
<!--  data-userId="3" -->
<body>
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
			<button class="avatar-button">
				<img src="resources/avatar.png" class="avatar">
			</button>
			<div class="w3-dropdown-content ">
				<a href="#" class=" button">Link 1</a> <a href="#" class=" button">Link
					2</a> <a href="#" class=" button">Link 3</a>
			</div>
		</div>
	</header>
	<div class="center">
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
					<input id="basic-trooper" type="text" class="troops-input">
				</div>
				<div class="form-element">
					<img src="resources/img/troops/2.png" class="innerimg"> <br />
					<input id="storm-trooper" type="text" class="troops-input">
				</div>
				<div class="form-element">
					<img src="resources/img/troops/3.png" class="innerimg"> <br />
					<input id="commando" type="text" class="troops-input">
				</div>
				<div class="form-element">
					<img src="resources/img/troops/4.png" class="innerimg"> <br />
					<input id="tank 1" type="text" class="troops-input">
				</div>
				<div class="form-element">
					<img src="resources/img/troops/5.png" class="innerimg"> <br />
					<input id="tank 2" type="text" class="troops-input">
				</div>
				<div class="form-element">
					<img src="resources/img/troops/6.png" class="innerimg"> <br />
					<input id="tank 3" type="text" class="troops-input">
				</div>
				<div class="form-element">
					<img src="resources/img/troops/7.png" class="innerimg"> <br />
					<input id="plane 1" type="text" class="troops-input">
				</div>
				<div class="form-element">
					<img src="resources/img/troops/8.png" class="innerimg"> <br />
					<input id="plane 2" type="text" class="troops-input">
				</div>
				<div class="form-element">
					<img src="resources/img/troops/9.png" class="innerimg"> <br />
					<input id="plane 3" type="text" class="troops-input">
				</div>
				<input type="submit" value="Send" class="button">
			</div>

		</form>
		<table class="w3-table">
			<tr>
				<th>Initiator</th>
				<th>Type</th>
				<th>Time</th>
			</tr>
			<tr>
				<td>Jill</td>
				<td>Smith</td>
				<td>50</td>
			</tr>
			<tr>
				<td>Eve</td>
				<td>Jackson</td>
				<td>94</td>
			</tr>
			<tr>
				<td>Adam</td>
				<td>Johnson</td>
				<td>67</td>
			</tr>
		</table>

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
	<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/4.9.1/d3.min.js"></script>
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.min.js"></script>
	<!-- App config -->
	<script src="<c:url value="/resources/app/config/app.config.js"/>" /></script>
	<script src="<c:url value="/resources/app/config/app.entity.js"/>" /></script>
	<script src="<c:url value="/resources/app/config/app.endpoints.js"/>" /></script>


	<script
		src="<c:url value="/resources/app/action/commands/action.command.js"/>" /></script>
	<script
		src="<c:url value="/resources/app/action/services/create.action.service.js"/>" /></script>
	<script src="<c:url value="/resources/app/action/action.config.js"/>" /></script>
</body>
</html>