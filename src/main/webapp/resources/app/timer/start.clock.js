function startClock(id,time){
	var deadline = new Date(Date.parse(new Date()) + time);
	initializeClock(id, deadline);
}