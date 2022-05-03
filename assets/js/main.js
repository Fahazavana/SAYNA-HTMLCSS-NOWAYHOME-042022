$(document).ready(function() {
    $(function() {
        $(".titre").animate({ left: '10%' }, 500);
    })

    const finDecompte = new Date("May 6, 2022 08:00:00").getTime()
    let interval = setInterval(function() {
        let maintenant = new Date().getTime();
        let tempsRestant = finDecompte - maintenant;
        let jours = Math.floor(tempsRestant / (1000 * 60 * 60 * 24));
        let heures = Math.floor((tempsRestant % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((tempsRestant % (1000 * 60 * 60)) / (1000 * 60));
        let secondes = Math.floor((tempsRestant % (1000 * 60)) / 1000);
        if (tempsRestant < 0) {
            clearInterval(interval)
            $("#decompte").text("Temps écoulé")
        } else {
            let decompte = `${jours} jour et ${heures}:${minutes}:${secondes}`
            $("#decompte").text(decompte);
        }
    }, 1000);

    $(".button1").mouseenter(function() {
        $(this).css({
            'background-color': 'rgba(0,0,0,0)',
            'color': 'var(--white-ad-color)',
            'box-shadow': '0px 0px 10px var(--white-ad-color)',
            'border': '2 px solid var(--white-ad-color)',
            'font-weight': 'bold'
        })
    });

    $(".button1").mouseleave(function() {
        $(this).css({
            'background-color': 'var(--white-ad-color)',
            'color': 'var(--primary-ad-color)',
            'box-shadow': 'initial',
            'border': 'initial',
            'font-weight': 'initial'
        })
    });

    $(".cta .button2,input.btn").mouseenter(function() {
        $(this).addClass('button2-invert')
    });
    $(".cta .button2,input.btn").mouseleave(function() {
        $(this).removeClass('button2-invert')
    });
    $("footer .media img").mouseenter(function() {
        $(this).css({ 'filter': 'brightness(100%)' })
    });
    $("footer .media img").mouseleave(function() {
        $(this).css({ 'filter': 'invert(0)' })
    });

    /* SpiderMan Cimena */
    $("#spider1").mouseenter(function() {
        $(this, ">img").css({ "transform": "scale(1.05)" });
        $("#spider1 > .card-body").slideDown(1500)
    });
    $("#spider2").mouseenter(function() {
        $(this, ">img").css({ "transform": "scale(1.05)" });
        $("#spider2 > .card-body").slideDown(1500)
    });
    $("#spider3").mouseenter(function() {
        $(this, ">img").css({ "transform": "scale(1.05)" });
        $("#spider3 > .card-body").slideDown(1500)
    });

    $("#spider1").mouseleave(function() {
        $(this, ">img").css({ "transform": "scale(1)" });
        $("#spider1 > .card-body").slideUp(1500)
    });
    $("#spider2").mouseleave(function() {
        $(this, ">img").css({ "transform": "scale(1)" });
        $("#spider2 > .card-body").slideUp(1500)
    });
    $("#spider3").mouseleave(function() {
        $(this, ">img").css({ "transform": "scale(1)" });
        $("#spider3 > .card-body").slideUp(1500)
    });

});