function countDown(){

	console.log("Hello");
	var now = new Date();
	var eventDate = new Date(2018, 1, 9)

	var currentTime = now.getTime();
	var eventTime = eventDate.getTime();
	
	var remTime = eventTime - currentTime;

	var s = Math.floor(remTime / 1000);			
	var m = Math.floor(s / 60);			
	var h = Math.floor(m / 60);			
	var d = Math.floor(h / 24);			

	h %= 24;
	m %= 60;
	s %= 60;

	h= (h<10) ? "0" + h: h;
	m= (m<10) ? "0" + m: m;
	s= (s<10) ? "0" + s: s;

	$('#days').html(d);
	$('#hours').html(h);
	$('#minutes').html(m);
	$('#seconds').html(s);

	setTimeout(countDown, 1000);
}

countDown();