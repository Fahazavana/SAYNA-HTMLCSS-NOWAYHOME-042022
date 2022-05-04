$(document).ready(function() {
    var $i = 0
    $(function() {
        function changeNow() {
            if ($i == 5) {
                $i = 1;
                $slideNow = "slide5";
                $slide = "slide" + $i;
            } else {
                $slideNow = "slide" + ($i);
                $i++;
                $slide = "slide" + $i;
            }
            $("#avengers").removeClass($slideNow).addClass($slide)
        }
        setInterval(changeNow, 5000)
    });



    $("img").hover(function() {
        $(this).toggleClass("zoom")

    }, function() {
        $(this).toggleClass("zoom")
    });
});