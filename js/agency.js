// Agency Theme JavaScript

(function($) {
  'use strict' // Start of use strict

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $('a.page-scroll').bind('click', function (event) {
    var $anchor = $(this)
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 1250, 'easeInOutExpo')
    event.preventDefault()
  })

  // Highlight the top nav as scrolling occurs
  $('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 51
  })

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click()
  })

  //Update copyright
  $('.copyright .current-year').text((new Date()).getFullYear())

  //Lazy Load Header 
  var objImg = new Image()
  objImg.src = '../img/header/header-xl.jpg'
  objImg.onload = function () {
    $('header').css('background-image', 'url(../img/header/header-xl.jpg)')
  }

})(jQuery) // End of use strict
