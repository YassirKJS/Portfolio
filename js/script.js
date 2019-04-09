$(document).ready(function() {
	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false,
	});

	var typed = new Typed(".typed", {
		strings: ["Web Developer. ^1000", "Software Engineer. ^1000", "Student. ^1000"],
		typeSpeed: 48,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});
});

