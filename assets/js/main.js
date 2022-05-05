$(document).ready(function() {

    /* animation au chargement */
    $(function() {
        $(".titre,h2.font-spider").animate({ left: '0%' }, 1500);
        $(".description").animate({ "opacity": "1" }, 2000);

    })
    $(".description").click(function() { $(this).fadeIn(); });

    /* Hover */
    $(".button1").hover(function() {
        $(this).css({
            'background-color': 'rgba(0,0,0,0)',
            'color': 'var(--white-ad-color)',
            'box-shadow': '0px 0px 1rem var(--white-ad-color)',
            'border': '2 px solid var(--white-ad-color)',
            'font-weight': 'bold'
        })

    }, function() {
        $(this).css({
            'background-color': 'var(--white-ad-color)',
            'color': 'var(--primary-ad-color)',
            'box-shadow': 'initial',
            'border': 'initial',
            'font-weight': 'initial'
        })
    });

    $(".button2").hover(function() {
        $(this).css({
            'background-color': 'var(--white-ad-color)',
            'color': 'var(--primary-ad-color)',
            'box-shadow': '0px 0px 1rem var(--white-ad-color)',
            'border': 'initial',
            'font-weight': 'bold'
        })
    }, function() {
        $(this).css({
            'background-color': 'initial',
            'color': 'var(--white-ad-color)',
            'box-shadow': 'initial',
            'border': 'var(--white-ad-color) 2px solid',
            'font-weight': 'initial'
        })
    });


    $(".button3").hover(function() {
        $(this).css({
            'background-color': 'var(--white-ad-color)',
            'color': 'var(--blue-color)',
            'box-shadow': '0px 0px 1rem var(--white-ad-color)',
            'border': 'initial',
            'font-weight': 'bold'
        })
    }, function() {
        $(this).css({
            'background-color': 'transparent',
            'color': 'var(--white-ad-color)',
            'box-shadow': 'initial',
            'border': 'var(--white-ad-color) 2px solid',
            'font-weight': 'initial'
        })
    });

    $(".nav-link").hover(function() {
        $(this).css({ 'text-decoration': 'line-through', 'color': 'var(--white-ad-color)' });

    }, function() {
        $(this).css('text-decoration', 'none');
    });


    /* SpiderMan Cimena */

    $(".card").hover(function() {
        $("img", this).css({ "transform": "scale(1.05)" });
        $(".card-body", this).slideDown(1500)

    }, function() {
        $("img", this).css({ "transform": "scale(1)" });
        $(".card-body", this).slideUp(1500)
    });


    $('[type="submit"]').click(function() {
        $(this).preventDefault();
        $(".pop-up-overlay", this).toggleClass("d-none")
    });

    $(".fermer").click(function() {
        $(".pop-up-overlay").addClass("d-none");
    });

    $(".ic-1").hover(function() {
        $(this).css({ 'filter': 'invert(1)' });
    }, function() {
        $(this).css({ 'filter': 'invert(0)' })
    });
});