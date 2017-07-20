<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<header class="app__header ">
		<!--APP header: logo-->
		<div class="logo">
		  <img src="resources/logo.png" class="logo">
		</div>
		
		<!--APP header: main menu-->
		<ul class="menu reset--list ">
			<li><a href="home"class="myButton">Home</a></li>
			<li><a href="users"class="myButton">Users</a></li>
			<li><a href="map"class="myButton">Map</a></li>
			<li><button onclick="document.getElementById('id05').style.display='block'" class="myButton report-button" >Reports</button>
			<div id="id05" class="w3-modal">
			<div class="w3-modal-content">
			 <span onclick="document.getElementById('id05').style.display='none'" class="button white">&times;</span>
					
		<table class="w3-table__full white testtable-r">

		</table>
	
</div>
</div>
			</li>
			<li><button onclick="document.getElementById('id04').style.display='block'" class="myButton" >Messages</button>
			<div id="id04" class="w3-modal">
			<div class="w3-modal-content">
			 <span onclick="document.getElementById('id04').style.display='none'" class="button white">&times;</span>
				<button class="button white messsage-switch-tab" data-tab="inbox">Inbox</button>
	<button class="button white messsage-switch-tab" data-tab="sent">Sent</button>
	<button class="button white messsage-switch-tab" data-tab="create">Create</button>

	<div class="tabContent message-tab-active" id="inbox">


		<table class="w3-table__full white testtable">
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
			</div>
			</div>
			</li>
			
		</ul>

		<!--APP header: profile-->
	  <div class="w3-dropdown-hover">
	    <button class="avatar-button"><img src="resources/avatar.png" class="avatar"></button>
	    <div class="w3-dropdown-content ">
	      <a href="profile" class=" button">Profile</a>
	      <c:url value="/j_spring_security_logout" var="logoutUrl" />
	      		<form action="${logoutUrl}" method="POST" >
							<button class="button" type="submit"  >Logout</button>
            <input type="hidden"
                    name="${_csrf.parameterName}"
                    value="${_csrf.token}" />
</form>
	    </div>
  	  </div>
  	  
	</header>