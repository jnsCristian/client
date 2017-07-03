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
<link rel="stylesheet" type="text/css"
	href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css">
<link href="<c:url value="/resources/common.css" />" rel="stylesheet">
<link href="<c:url value="/resources/app.css" />" rel="stylesheet">
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link href="<c:url value="/resources/navBar.css" />" rel="stylesheet">
<link href="<c:url value="/resources/troops1.css" />" rel="stylesheet">
<meta name="viewport" content="width=device-width, initial-scale=1">

</head>
<body>
	<div class="app">

		<!--APP overlay control that appears on top over the screen-->
		<section class="app__overlay">

			<!--APP header: logo -->
			<header class="app__header ">
				<div class="logo">
					<a href="#">Logo here</a>
				</div>
				
				<!--APP header: navigation-->
				<div class="nav">
					<ul
						style="position: relative; top: -42px; border-radius: 10px; border-top-left-radius: 0; border-top-right-radius: 0;">
						<li class="home"><a href="#">Reports</a></li>
						<li class="tutorials"><a href="#">Messages</a>
							<ul>
								<li><a href="#">Tutorial </a></li>
								<li><a href="#">Tutorial #2</a></li>
								<li><a href="#">Tutorial #3</a></li>
							</ul></li>
						<li class="about"><a class="active" href="#">Home</a></li>
						<li class="news"><a href="#">Map</a></li>
					</ul>
				</div>
				
				<!--APP header: profile-->
				<div class="nav">
					<li class="dropdown" style="align: right"><a href="#"
						class="dropdown-toggle" data-toggle="dropdown"> <img
							src="resources/img/3.png" style="allign: center;"
							class="profile-image img-circle">
					</a>
						<ul class="dropdown-menu">
							<li><a href="#"><i class="fa fa-cog"></i> Account</a></li>
							<li class="divider"></li>
							<li><a href="#"><i class="fa fa-sign-out"></i> Sign-out</a></li>
						</ul></li>
				</div>
			</header>
		
			<!--APP: Troops and Timestamp -->
			<div style="padding-top: 50px;" class="main__wrapper">
				<div>
					<div class="icon-bar">
						<a><img src="resources/img/5.png" class="imgarrow"></br>2:30:45</a>
					</div>
					<div class="icon-bar">
						<a><img src="resources/img/6.png" class="imgarrow"></br>2:30:45</a>
					</div>
					<div class="icon-bar tooltip">
						<a><img src="resources/img/2.png" class="imgtroop"></a> <span
							class="tooltiptext"> <img src="resources/img/2.png"
							class="innerimg"></br> <img src="resources/img/2.png"
							class="innerimg"></br> <img src="resources/img/2.png"
							class="innerimg"></span>
					</div>
					<div class="icon-bar tooltip">
						<a><img src="resources/img/2.png" class="imgtroop"></a> <span
							class="tooltiptext"> <img src="resources/img/2.png"
							class="innerimg"></br> <img src="resources/img/2.png"
							class="innerimg"></br> <img src="resources/img/2.png"
							class="innerimg"></span>
					</div>
					<div class="icon-bar tooltip">
						<a><img src="resources/img/2.png" class="imgtroop"></a> <span
							class="tooltiptext"> <img src="resources/img/2.png"
							class="innerimg"></br> <img src="resources/img/2.png"
							class="innerimg"></br> <img src="resources/img/2.png"
							class="innerimg"></span>
					</div>

				</div>

				<!--Center side: buildings stuff area-->
				<div style="" id="center__menu" class="building-wrapper home">
					<a class="building"><img src="resources/img/build3.png"
						height=100px width=100px> </a> <a class="building"><img
						src="resources/img/build2.png" height=100px width=100px> </a> <a
						class="building"><img src="resources/img/build3.png"
						height=100px width=100px> </a> <a class="building"><img
						src="resources/img/build4.png" height=100px width=100px> </a> <a
						class="building"><img src="resources/img/build3.png"
						height=100px width=100px> </a> <a class="building"><img
						src="resources/img/build2.png" height=100px width=100px> </a> <a
						class="building"><img src="resources/img/build3.png"
						height=100px width=100px> </a> <a class="building"><img
						src="resources/img/build4.png" height=100px width=100px> </a> <a
						class="building"><img src="resources/img/build2.png"
						height=100px width=100px> </a>

				</div>

				<!--LEFT sidebar: army stuff area-->
				<div class="icon-bar" style="">
					<a><img src="resources/img/res1.png" class="img"> 500 <br>150/h</a>
					<a><img src="resources/img/res2.png" class="img"> 500 <br>150/h</a>
					<a><img src="resources/img/res3.png" class="img"> 500 <br>150/h</a>
					<a><img src="resources/img/res4.png" class="img"> 500 <br>150/h</a>
					<a><img src="resources/img/res2.png" class="img"> 500 <br>150/h</a>
				</div>
		</section>
		<!--END app overlay-->
	</div>
	
	<!--START app main-->
	<footer class="app__footer">
		<p align="center">
			&copy; 2010 NttData Romania &nbsp;&nbsp;&nbsp;&nbsp; <br> Design
			by <a href="">Atlantis</a> | <a href="">Atlantis Portal </a>
		</p>
	</footer>
	<!--END app main content-->

	<!--Load the common stuff first-->
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

	<!--Load more generic app stuff-->
	<script src="app/config/app.config.js"></script>
	<script src="app/config/app.entity.js"></script>

	<!--Load specific stuff-->
	<script src="app/views/home/home.view.js"></script>
</body>
</html>