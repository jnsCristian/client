<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
    <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
 <!Doctype html>
 <html>
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
		<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css">
		<link href="<c:url value="/resources/common.css" />" rel="stylesheet">
		<link href="<c:url value="/resources/app.css" />" rel="stylesheet">
		<title>Home</title>
	</head>
	<body data-userId="3">
		<div class="app">
			<header class="app__header">
				<div id="logo">
					<p>Logo</p>
				</div>	
				<nav class="app__header--nav">
					<ul class=" reset--list">
						<li class="list">Home</li>
						<li class="list">Profile</li>
						<li class="list">Map</li>
						<li class="list">Message</li>
						<li class="list">Raport</li>
					<ul>
				</nav>			
			</header>
			<main class="app__main">
				<div id="view__home" class="show">
					<div class="resource-wrapper">
						<ul class=" reset--list">
							<li class="list">Resource 1</li>
							<li class="list">Resource 2</li>
							<li class="list">Resource 3</li>
							<li class="list">Resource 4</li>
							<li class="list">Resource 5</li>
						<ul>
					</div>
					<div class="main-screen">
						<ul class="building-wrapper reset--list">
								<li class="building" data-buildingId="1">Cladire 1</li>
								<li class="building" data-buildingId="">Cladire 2</li>
								<li class="building">Cladire 3</li>
								<li class="building">Cladire 4</li>
								<li class="building">Cladire 5</li>
								<li class="building">Cladire 6</li>
								<li class="building">Cladire 7</li>
								<li class="building">Cladire 8</li>
								<li class="building">Cladire 9</li>
								<li class="building">Cladire 10</li>		
						</ul>
						<div class="stats">
							<ul class="stats__group reset--list">
									<li class="stats__item">Resource 1</li>
									<li class="stats__item">Resource 2</li>
									<li class="stats__item">Resource 3</li>
									<li class="stats__item">Resource 4</li>
									<li class="stats__item">Resource 5</li>	
							</ul>
							<ul class="stats__group reset--list"  style= "background-color: brown;">
									<li class="stats__item">Action 1</li>
									<li class="stats__item">Action 2</li>
									<li class="stats__item">Action 3</li>
									<li class="stats__item">Action 4</li>
									<li class="stats__item">Action 5</li>	
							</ul>
							<ul class="stats__group reset--list" style= "background-color: white;">
									<li class="stats__item">Troop 1</li>
									<li class="stats__item">Troop 2</li>
									<li class="stats__item">Troop 3</li>
									<li class="stats__item">Troop 4</li>
									<li class="stats__item">Troop 5</li>	
							</ul>
						</div>
					</div>
				</div>
				<div id="view__building" class="hide">
					building
				</div>
				<div id="view__map" class="hide">
					map
				</div>
				<div id="view__messages" class="hide">
					messages
				</div>
				<div id="view__raports" class="hide">
					raports
				</div>	
				<div id="view__user" class="hide">
					user
				</div>	
			</main>
			<footer class="app__footer">
				Footer
			</footer>
		</div>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
		<script src="<c:url value="/resources/common.js" />" ></script>
		<script src="<c:url value="/resources/app.js" />" ></script>
	</body>
 </html>