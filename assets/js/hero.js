$(document).ready(function() {
    let $sliderItem = $(".slider-item");
    let $now = 0;

    $(function() {
        function slide() {
            for (var i = 0; i < $sliderItem.length; i++) {
                console.log($($sliderItem[i]))
                $($sliderItem[i]).css('display', 'none')
            }
            $now++;
            ($now > $sliderItem.length) ? ($now = 1) : {};
            $($sliderItem[$now - 1]).css('display', 'block')
        }
        setInterval(slide, 5000)
    })


    $("img:not(.ic-1,.slider-item)").hover(function() {
        $(this).toggleClass("zoom")

    }, function() {
        $(this).toggleClass("zoom")
    });

});