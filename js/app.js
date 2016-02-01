/**
 * Created by Pol on 2015-12-31.
 */
console.log('test');

var test = function () {
    console.log('test');
};

<<<<<<< HEAD
=======
// scroll spy navbar changes
// Add scrollspy to <body>
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').start().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
>>>>>>> master
