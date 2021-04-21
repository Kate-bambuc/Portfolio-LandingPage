window.addEventListener('DOMContentLoaded', () => {

	const header = document.querySelector('#header'),
		home = document.querySelector('#home'),
		homeH = home.scrollHeight,
		navElements = document.querySelectorAll('[data-scroll'),
		nav = document.querySelector('#nav'),
		navToggle = document.querySelector('#navToggle'),
		btns = document.querySelectorAll('#btn'),
		modal = document.querySelector('#modal'),
		modalClose = document.querySelector('#modal__close');

	let scrollPos = document.documentElement.scrollTop;		


	// Fixed Header
		checkScroll(scrollPos);

		function checkScroll(scrollPos) {
			if (scrollPos > homeH) {
				header.classList.add('fixed');
			} else {
				header.classList.remove('fixed');
			}
		}

	
		document.addEventListener('scroll', () => {
			scrollPos = window.scrollY;
			checkScroll(scrollPos, homeH);
		});


		// Smooth scroll

		navElements.forEach (item=> {
			
			item.addEventListener('click', (event) => {
				event.preventDefault();

			let navElement = item.getAttribute('data-scroll');
			
			//const topOffset = document.getElementById(navElement);
			//let navOffset = navElements.getBoundingClientRect().top;
			let navOffset = navElement.offsetTop;
			console.log(navElement, navOffset);

		});
	});

	// Burger Menu

	navToggle.addEventListener('click', (event) => {
		event.preventDefault();

		nav.classList.toggle('show');
	});

	// Modal

	btns.forEach ( btn => {
		btn.addEventListener('click', (event) => {
			event.preventDefault();

			modal.classList.toggle('show');
			document.body.style.overflow = 'hidden'; 
		});
	});

	modalClose.addEventListener('click', () => {
		fooClose();
	});
	modal.addEventListener('click', (event) => {
		if (event.target === modal) {
		fooClose();
		}
	});


	function fooClose() {
		modal.classList.toggle('show');
			document.body.style.overflow = ''; 
	}

});