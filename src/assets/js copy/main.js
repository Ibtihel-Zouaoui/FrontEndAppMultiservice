/* =================================
------------------------------------
	Unica - University Template
	Version: 1.0
 ------------------------------------ 
 ====================================*/


'use strict';


var window_w = $(window).innerWidth();

$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut(); 
	$("#preloder").delay(400).fadeOut("slow");
    


});

(function($) {

	/*------------------
		Navigation
	--------------------*/
	$('.nav-switch').on('click', function(event) {
		$('.main-menu').slideToggle(400);
		event.preventDefault();
	});


	/*------------------
		Background set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});



	
	/*------------------
		Hero Slider
	--------------------*/
	var window_h = $(window).innerHeight();
	var header_h = $('.header-section').innerHeight();
	var nav_h = $('.nav-section').innerHeight();

	if (window_w > 767) {
		$('.hs-item').height((window_h)-((header_h)+(nav_h)));
	}

	$('.hero-slider').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		mouseDrag: false,
		animateOut: 'fadeOut',
    	animateIn: 'fadeIn',
		items: 1,
		autoplay: true
	});


	/*------------------
		Counter
	--------------------*/
	$(".counter").countdown("2018/07/01", function(event) {
		$(this).html(event.strftime("<div class='counter-item'><h4>%D</h4>Days</div>" + "<div class='counter-item'><h4>%H</h4>hours</div>" + "<div class='counter-item'><h4>%M</h4>Mins</div>" + "<div class='counter-item'><h4>%S</h4>secs</div>"));
	});


	/*------------------
		Gallery
	--------------------*/
	$('.gallery').find('.gallery-item').each(function() {
		var pi_height1 = $(this).width(),
		pi_height2 = pi_height1/2;
		
		if($(this).hasClass('gi-long') && window_w > 991){
			$(this).css('height', pi_height2);
		}else{
			$(this).css('height', Math.abs(pi_height1));
		}
	});

	$('.gallery').masonry({
		itemSelector: '.gallery-item',
		columnWidth: '.grid-sizer'
	});
	


	/*------------------
		Testimonial
	--------------------*/
	$('.testimonial-slider').owlCarousel({
		loop: true,
		nav: true,
		dots: true,
		animateOut: 'fadeOutUp',
		animateIn: 'fadeInUp',
		navText: ['<i class="fa fa-angle-left"></i>', '</i><i class="fa fa-angle-right"></i>'],
		items: 1,
		autoplay: true
	});


	!function ($) {
		$(function(){
		  $('#homepage_slider').carousel();
		})
	  }(window.jQuery)
	
	
	// if user chooses to not autoplay the video, the button should be uncommented in html and this script will make the button work:
	var vid = document.getElementById("bgvid");
	var playButton = document.querySelector("#slider-play-button button");
	
	playButton.addEventListener("click", function() {
	  if (vid.paused) {
		vid.play();
		playButton.classList.remove("play-video-button");
		playButton.classList.add("pause-video-button");
	  } else {
		vid.pause();
		playButton.classList.add("play-video-button");
		playButton.classList.remove("pause-video-button");
	  }
	});
	


	/*------------------
		Popup
	--------------------*/
	$('.img-popup').magnificPopup({
		type: 'image',
		mainClass: 'img-popup-warp',
		removalDelay: 400,
	});



})(jQuery);

