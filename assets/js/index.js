$(document).ready(function() {
    /* /* Spiderman scroll */
    let stop = $("#spiderman").offset().top + $("#spiderman").height();
    $(window).scroll(function() {
        let positionY = Math.floor($(document).scrollTop());
        if (positionY < stop) {
            $(".img-title2").css({ 'transform': `translateY(${positionY}px)` });
        }
    });

});