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

	$('.owl-carousel').owlCarousel({
	    loop:true,
	    items: 4,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        938:{
	            items:4
	        }
	    }
	});

	

    var skillsTopOffset = $(".skillsSection").offset().top;
    var statsTopOffset = $(".statsSection").offset().top;
    var countUpFinished = false;

    $(window).scroll(function() {
    	if (window.pageYOffset > skillsTopOffset - $(window).height() + 220) {
    		$('.chart').easyPieChart({
		        easing: 'easeInOut',
		        barColor: '#fff',
		        trackColor:false,
		        lineWidth: 4,
		        size: 152,
		        onStep: function(from, to, percent) {
		        	$(this.el).find('.percent').text(Math.round(percent));
		        }
		    });
    	}

    	var str1 = '#count-test-';
		var str2 = 'count-test-';
    	if (!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 220) {
			for (var i = 1; i < 5; i++) {
				$(str1.concat(i)).jQuerySimpleCounter({
				start:  0,
		        end:    document.getElementById(str2.concat(i)).innerHTML,
				duration: 1500
				});
			}
			countUpFinished = true;
    	}
    });
	
	$("[data-fancybox]").fancybox();

	$(".items").isotope({
		filter: '*', //filter applied right from the start is all*
		animationOptions: {
			duration: 1500,
			easing: 'linear',
			queue: false
		}
	});

});

