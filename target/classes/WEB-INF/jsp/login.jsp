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
<link href="<c:url value="/resources/register.modifier.css" />" rel="stylesheet">
<meta name="csrf-token" content="${_csrf.token}">
<meta name="_csrf_header" content="${_csrf.headerName}" />
</head>
<!--  data-userId="3" -->
<body>
	 <jsp:include page="header.jsp" />
	<div  class="login-wrapper">
	<div class="login">
	 <h1 >Login</h1> 
	<section class="user-data">
	<c:url value="/j_spring_security_check" var="loginUrl" />
	<form name="myFormLogin" action="${loginUrl}" method="POST">
		<p class="login-data setting user-email" >
		<span>Email</span>
			<input class="cell" type="text" name="j_username">
		</p>
		<p class="login-data setting user-password" >
		<span>Password</span>
			<input class="cell" type="text" name="j_password">
		</p>
		<button class="button login-button" type="submit"  >Login</button> <input
			type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
	</form>
	</section>
	</div>
            <div  class="register">
      <h1 >Register</h1> 
      <section  class="user-data">
        
        <p class="register-data setting user-email" >
        	<span class="tooltip">
        	<span >Email</span>
        	<span class="tooltiptext__position tooltiptext ">The format is: something@domain.smth</span>
        	</span>
        	<input id="email">
        </p>
        
        <p class="register-data setting nickname" >
        <span class="tooltip">
        	<span >Nickname</span>
        	<span class="tooltiptext__position tooltiptext ">Between 5 and 10 alphabetical characters</span>
        	</span>
        	<input id="nickName">
        </p>
        
        <p class="register-data setting firstname ">
        <span class="tooltip">
        	<span >First Name</span>
        	<span class="tooltiptext__position tooltiptext ">Between 5 and 10 alphabetical characters</span>
        	</span>
        	<input id="firstName">
        </p>
		
		 <p class="register-data setting lastname" >
		 <span class="tooltip">
        	<span >Last Name</span>
        	<span class="tooltiptext__position tooltiptext ">Between 5 and 10 alphabetical characters</span>
        	</span>	
        	<input id="lastName">
        </p>
		 
		  <p class="setting password" >
		   <span class="tooltip">
        	<span >Password</span>
        	<span class="tooltiptext__position tooltiptext ">Between 6 and 20 characters</span>
        	</span>
        	<input type="password" id="password">
        </p>
		  
		   <p class="setting repassword" >
		    <span class="tooltip">
        	<span >Repeat password</span>
        	<span class="tooltiptext__position tooltiptext ">Between 6 and 20 characters</span>
        	</span>
        	<input type="password" id="repassword">
        </p>
		 
		 <button class="button register-button">Register</button>
      </section>
    </div>
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
	<!-- Register dependencies -->
	<script src="<c:url value="/resources/app/register/commands/register.command.js"/>" /></script>
	<script src="<c:url value="/resources/app/register/services/register.service.js"/>" /></script>
	<script src="<c:url value="/resources/app/register/register.config.js"/>" /></script>
</body>
</html>