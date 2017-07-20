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
</head>
<!--  data-userId="3" -->
<body data-ID=<c:out value="${ userId}" ></c:out>>
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
		
		<button class="button users-switch-tab" data-tab="all">All Users</button>
		<button class="button users-switch-tab" data-tab="red">Red Alliance</button>
		<button class="button users-switch-tab" data-tab="green">Green Alliance</button>
		<button class="button users-switch-tab" data-tab="blue">Blue Alliance</button>
		<button class="button users-switch-tab" data-tab="white">White Alliance</button>
		<input class="button " class="search" placeholder="Search"/> <button class="button users-switch-tab find" data-tab="search">Search</button>
		<div class="tabContent tab-active" id="all">
			 <table class="w3-table__full white users-table" >
			</table>
		</div>
		<div class="tabContent " id="red">
			 <table class="w3-table__full white users-table" >
			</table>
		</div>
		<div class="tabContent " id="green">
			 <table class="w3-table__full white users-table" >
			</table>
		</div>
		<div class="tabContent " id="blue">
			 <table class="w3-table__full white users-table" >
			</table>
		</div>
		<div class="tabContent " id="white">
			 <table class="w3-table__full white users-table" >
			</table>
		</div>
		<div class="tabContent " id="user">
      <div id="userphoto"><img src="resources/avatar.png" ></div>
      <h1>Profile</h1> 
      <section  class="user-data">
        
        
        <p class="setting nickname" ></p>
        
        <p class="setting userAlliance "></p>
		 
		 <button class="button sendmessage">Send message</button>
		 
		 <button class="button sendtroops">Send troops</button>
      </section>
		</div>
		<div class="tabContent " id="search">
			 <table class="w3-table__full white users-table" >
			</table>
		</div>
	</div>
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
	<script src="<c:url value="/resources/app/user/commands/users.switch.tab.command.js"/>" /></script>
	<script src="<c:url value="/resources/app/user/commands/view.users.switch.tab.command.js"/>" /></script>
		<script src="<c:url value="/resources/app/user/commands/get.all.users.command.js"/>" /></script>
	<script src="<c:url value="/resources/app/user/services/get.all.users.service.js"/>" /></script>
		<script src="<c:url value="/resources/app/user/services/get.otheruser.service.js"/>" /></script>
	<script src="<c:url value="/resources/app/user/commands/otheruser.command.js"/>" /></script>
	<script src="<c:url value="/resources/app/user/services/search.users.service.js"/>" /></script>
	<script src="<c:url value="/resources/app/user/get.all.users.config.js"/>" /></script>
	
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
</div>
</body>
</html>