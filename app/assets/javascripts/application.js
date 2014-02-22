// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require bootstrap.min

$(document).ready(function(){
	$('#search-form').submit(function(event){
		event.preventDefault();
		var searchValue = $('#search').val();

		$.getScript('/products?search=' + searchValue);

		// $.ajax({
		// 	url: '/products?search=' + searchValue,
		// 	type: 'GET'
		// 	dataType: 'html'
		// }).done(function(data){
		// 	$('#products').html(data);
		// });
	});


// jQuery(function(){
// 	$(window).scroll(function(){
// 		if ($(window).scrollTop() > $(document).height() - $(window).height() - 50) {
// 			return alert('near bottom');
// 		}
// 	});
// });

// jQuery(function(){
// 	$(window).scroll(function(){
// 		if ($(window).scrollTop() > $(document).height() - $(window).height() - 50) {
// 			console.log($('.pagination span.next').children().attr('href'));
// 			$.getScript($('.pagination span.net').children().attr('href'));
// 		}
// 	});
// });

// jQuery(function() {
//   if ($('.pagination').length) {
//     $(window).scroll(function() {
//       var url = $('.pagination span.next').children().attr('href');
//       if (url && $(window).scrollTop() > $(document).height() - $(window).height() - 50) {
//         $('.pagination').text("Fetching more products...");
//         return $.getScript(url);
//       }
//     });
//   }
// });

	$(window).scroll(function(){
		var url = $('.pagination span.next').children().attr('href');
		if (url && $(window).scrollTop() > $(document).height() - $(window).height() - 200) {
			$('.pagination').text("Fetching more products...");
			$.getScript(url);
		}
	});
});