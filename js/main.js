// Agency Theme JavaScript

(function($) {
  'use strict' // Start of use strict
  var isProduction = false // changed by gulpFile
  var developmentEnvironment = isProduction ? 'production' :  'development'
  var imageFilePath = {
    production: 'static/img/header/header-xl.jpg',
    development: '/img/header/header-xl.jpg'
  }  
  imageFilePath = imageFilePath[developmentEnvironment] 
  //Lazy Load Header 
  var objImg = new Image()
  objImg.src = imageFilePath
  objImg.onload = function () {
    $('header').css('background-image', 'url(' + imageFilePath + ')')
  }

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


})(jQuery) // End of use strict
