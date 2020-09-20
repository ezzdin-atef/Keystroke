

$(function () {

    // make the background lines have the document height
    let body = document.body,
    html = document.documentElement;

    let height = Math.max( body.scrollHeight, body.offsetHeight, 
                        html.clientHeight, html.scrollHeight, html.offsetHeight );

    $('.lines').css('height', height);


    // To Top Button
    let btn = $('#button');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 500) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, 1500);
    });


    // Top Navbar 
    let nav = $('#topnav');

    $(window).scroll(function  () {
        if ($(window).scrollTop() > 500) {
            //nav.removeClass('hide');
            nav.slideDown();
        }  else {
            //nav.addClass('hide');
            nav.slideUp();
        }
    });


    // Navbar Links
    $('a[href="#template"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.our-templates').offset().top
        }, 800);
    });
    $('a[href="#features"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.features').offset().top
        }, 800);
    });
    $('a[href="#why"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.why-us').offset().top
        }, 800);
    });

    $(".mobile-menu").on("click", function() {
        $(".mobile-menu + nav").toggleClass("mobile-nav");
    });
    



});



