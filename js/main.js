// Agency Theme JavaScript

(function($) {
  'use strict' // Start of use strict

  // Sets the imageFileDirPath according to development environment
  var isProduction = false // changed by gulpFile
  var developmentEnvironment = isProduction ? 'production' :  'development'
  var imageFileDirPath = {
    production: 'static/img/header/',
    development: '/img/header/'
  }  
  imageFileDirPath = imageFileDirPath[developmentEnvironment]

  var getWindowResponsiveBreakpoint = function () {
    var winWidth = $(window).innerWidth()
    switch (true) {
    case winWidth <= 575:
      return 'xs'
    case 575 < winWidth && winWidth <= 767:
      return 'sm'
    case 767 < winWidth && winWidth <= 991:
      return 'md'
    case 991 < winWidth && winWidth <= 1199:
      return 'lg'
    case 1199 < winWidth:
      return 'xl'
    }
  }

  var getImageFilePath =  function (imageFileDirPath) {
    return imageFileDirPath + 'header-' + getWindowResponsiveBreakpoint() + '.jpg'
  }

  // This function in combination with css lazy loads an image
  var headerImageChanger = function (imageFilePath) {
    var objImg = new Image()
    objImg.src = imageFilePath // preload image
    objImg.onload = function () {
      $('.background-lazy-load').css('background-image', 'url(' + imageFilePath + ')')
      $('.background-lazy-load').css('opacity', '1')
    }
  }

  //Lazy Load Header on first visit  
  headerImageChanger(getImageFilePath(imageFileDirPath))
  
  $(window).on('resize', function(){
    headerImageChanger(getImageFilePath(imageFileDirPath))
  })

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

  var navState = 'closed'
  function changeNavState () {
    navState = navState === 'closed' 
      ? 'open'
      : 'closed'
  }
  function changeNavBackgroundLayer () {
    var layerStyleObj = {
      open: { opacity: 1, 'pointer-events': 'auto' },
      closed: { opacity: 0, 'pointer-events': 'none' }
    }
    $('.nav-background-layer').css('opacity', layerStyleObj[navState].opacity)
    $('.nav-background-layer').css('pointer-events', layerStyleObj[navState]['pointer-events'])
  }
  
  // navbar-toggle listener
  $('.navbar-toggle').click(function () {
    changeNavState()
    changeNavBackgroundLayer()
  })

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click()
  })

  // Closes the Responsive Menu on nav-background-layer Click
  $('.nav-background-layer').click(function () {
    $('.navbar-toggle:visible').click()
  })

  //Update copyright
  $('.copyright .current-year').text((new Date()).getFullYear())


})(jQuery) // End of use strict
