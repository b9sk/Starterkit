//=include inc/_win8fix.js
//=include inc/_console.js
//=include inc/_breakpoints.js
//=include plugins/**/*.js

if (typeof jQuery == 'undefined') {
    console.warn('jQuery is missing.');
}

(function($) {
    'use strict';

    debug(true);

    console.log('main.js loaded');

    var html = $('html'),
        body = $('body'),
        scrollTop = $(this).scrollTop();


    //$(".lazyload").unveil(200);

    if ( $('.slider').length >= 1 ){
        $('.slider__inner').slick();
    }

    /**
     * Include all UI functions
     */
    //=include ui/_nav-dropdown.js
    //=include ui/_mobile-navtoggle.js
    //=include ui/_general-toggle.js
    //=include ui/_smooth-scrolling.js
    //=include ui/_data-scrollto.js


    /**
     * Window Resize Helper Function
     *
     * runs on each resize event, after 250ms throtteling
     */
    function windowResize(){
        breakpoint.refreshValue();

        // Set body padding for fixed header
        if ( $('.header').hasClass('header--fixed') ) {
            body.css({'padding-top': $('.header').outerHeight()+'px'});
        }
    }


    /**
     * Window Scroll Helper Function
     */
    function windowScroll(){
        scrollTop = $(window).scrollTop();

        // Set header to scrolled
        if (scrollTop > $('.header').outerHeight()) {
            $('.header').addClass('header--scrolled');
        }else{
            $('.header.header--scrolled').removeClass('header--scrolled');
        }
    }


    $(window).scroll(windowScroll).scroll();

    $(window).resize(function(){
        clearTimeout(window.resizedFinished);
        window.resizedFinished = setTimeout(windowResize, 250);
    });


    /**
     * init function
     * runs on each page load
     */
    function init(){
        html.toggleClass('no-js js-init');
        windowResize();
    }
    init();

})(jQuery);
