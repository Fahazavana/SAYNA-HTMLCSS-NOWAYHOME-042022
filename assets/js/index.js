$(document).ready(function() {
    /* Spiderman scroll */
    $(window).scroll(function() {
        let stop = $("#spiderman").offset().top;
        let positionY = Math.floor($(document).scrollTop());
        if (positionY < stop) {
            $(".img-title2").animate({ 'top': positionY + "px" });
        }
    });

});