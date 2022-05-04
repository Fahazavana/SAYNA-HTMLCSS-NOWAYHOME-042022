$(document).ready(function() {
    $(".card").hover(function() {
        $(this).toggleClass("zomm")
        $(".card-name").toggleClass("add-bg").toggleClass("rm-bg")
        $(".card-name>h2").animate({ 'left': '10%' });
        $(".card-body").slideDown(1500);

    }, function() {
        $(this).toggleClass("zomm")
        $(".card-name").toggleClass("add-bg").toggleClass("rm-bg")
        $(".card-name>h2").animate({ 'left': '3%' });
        $(".card-body").slideUp(1500);
    });

});