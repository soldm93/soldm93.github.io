$(document).ready(function(){
    $('.button_scroll_top-casinos').on('click',function (e) {
        e.preventDefault();

        var $target = $('.top-casinos-container');

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing');
    });
});