/**
 * Created by Pol on 2015-12-31.
 */
//console.log('test');
//
//var test = function () {
//    console.log('test');
//};

$(document).ready(function(){

    function scrollMe () {
        var offset=150; // when to show scroll button
        $(window).scroll(function() {
            if ($(this).scrollTop() > offset) {
                $('.top').fadeIn(500);
            }
            else {
                $('.top').fadeOut(500);
            }
        });

        // Smooth animation when scrolling
        $('.top').click(function(event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: 0});
        });

    }

    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').start().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });


// Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top'
    });

// Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();

    });

    new WOW().init();
    scrollMe();

});