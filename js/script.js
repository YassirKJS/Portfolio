$(window).on("load", function() {
	$(".loader .inner").fadeOut(500, function() {
		$(".loader").fadeOut(750);
	});

	$(".items").isotope({
		filter: '*', //filter applied right from the start is all*
		animationOptions: {
			duration: 1500,
			easing: 'linear',
			queue: false
		}
	});
});


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

	

	/*# is used before the id*/
	$("#filters a").click(function() {
		$("#filters .current").removeClass("current");
		$(this).addClass("current");

		var selector = $(this).attr("data-filter");

		$(".items").isotope({
			filter: selector,
			animationOptions: {
				duration: 1500,
				easing: 'linear',
				queue: false
			}
		});
		return false; /*false => dont do anything else*/
	});


	$("#navigation li a").click(function(e) {
		e.preventDefault(); //prevent the default click event
		var targetElement = $(this).attr("href");
		var targetPosition = $(targetElement).offset().top;
		$("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");
	});


	const nav = $("#navigation");
	const navTop = nav.offset().top;

	$(window).on("scroll", stickyNavigation);

	function stickyNavigation() {
		var body = $("body");
		if ($(window).scrollTop() >= navTop) {
			body.css("padding-top", nav.outerHeight() + "px");
			body.addClass("fixedNav");	
		}
		else {
			body.css("padding-top", 0);
			body.removeClass("fixedNav");
		}
	}

});

