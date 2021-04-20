$(function() {

	/*Fixed Header*/

	let header = $("#header");
	let home = $("#home");
	let homeH = home.innerHeight();
	let scrollPos = $(window).scrollTop();
	let nav = $("#nav");

	checkScroll(scrollPos, homeH);


	$(window).on("scroll resize", function() {

		homeH = home.innerHeight();

		scrollPos = $(this).scrollTop();

		checkScroll(scrollPos, homeH);

	});

	function checkScroll(scrollPos, homeH) {
		if( scrollPos > homeH ) {

			header.addClass("fixed");

		} else {

			header.removeClass("fixed");

		}
	}


	/*Smooth Scroll*/
		$("[data-scroll]").on("click", function(event) {

			event.preventDefault();

			let elementId = $(this).data('scroll');
			let elementOffset = $(elementId).offset().top;

			nav.removeClass("show");


			$("html, body").animate({

				scrollTop: elementOffset - 70
			}, 700);

		});



		/*Nav Toggle*/
		

		$("#navToggle").on("click", function(event) {

			event.preventDefault();

			nav.toggleClass("show");

		});



});

