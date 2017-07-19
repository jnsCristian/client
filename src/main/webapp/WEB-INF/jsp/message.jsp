<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<link href="<c:url value="/resources/message.css" />" rel="stylesheet">

<body>


	<button class="button messsage-switch-tab" data-tab="inbox">Inbox</button>
	<button class="button messsage-switch-tab" data-tab="sent">Sent</button>
	<button class="button messsage-switch-tab" data-tab="create">Create</button>

	<div class="tabContent message-tab-active" id="inbox">


		<table class="testtable">
			<thead>
				<tr>
					<th>Nick Name</th>
					<th>Subject</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
			
			</tbody>
		</table>

	</div>

	<div class="tabContent" id="sent">

		<table class="testtable">
			<thead>
				<tr>
					<th>Nick Name</th>
					<th>Subject</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
			
			</tbody>
		</table>
	</div>
	
	<div class="tabContent" id="create">
		<form class="create-message">
			NickName : <input type="text" class="message-field message-nickname" data-type="reciever_id" /><br />
			Subject : <input type="text" class="message-field message-subject"  data-type="subject"/><br />
			Message : <input type="text" class="message-field message-message" data-type="message"/><br /> 
						<input type="submit" class="button" value="Send" /> <br />
		</form>

	</div>
	<div class="tabContent" id="view">
		<table class="testtable">
			<thead>
				<tr>
					<th>Message</th>
				</tr>
			</thead>
			<tbody>
			
			</tbody>
		</table>

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
</body>
</html>