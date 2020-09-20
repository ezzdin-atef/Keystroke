

$(function () {

    // make the background lines have the document height
    let body = document.body,
    html = document.documentElement;

    let height1 = Math.max( body.scrollHeight, body.offsetHeight, 
                        html.clientHeight, html.scrollHeight, html.offsetHeight );

    $('.lines').css('height', height1);


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
    
    /* Store the element in el */
    let el = document.querySelectorAll('.box-animation');

    /* Get the height and width of the element */
    const height = el[0].clientHeight;
    const width = el[0].clientWidth;

    

    /* Define function a */
    function handleMove(e) {
        // console.log(e.target.closest(".box-animation"));
        const el = e.target.closest(".box-animation");
        /*
            * Get position of mouse cursor
            * With respect to the element
            * On mouseover
            */
        /* Store the x position */
        const xVal = e.layerX;
        /* Store the y position */
        const yVal = e.layerY;
        
        /*
            * Calculate rotation valuee along the Y-axis
            * Here the multiplier 20 is to
            * Control the rotation
            * You can change the value and see the results
            */
        const yRotation = 20 * ((xVal - width / 2) / width);
        
        /* Calculate the rotation along the X-axis */
        const xRotation = -20 * ((yVal - height / 2) / height);
        
        /* Generate string for CSS transform property */
        const string = 'perspective(800px) scale(1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)';
        
        /* Apply the calculated transformation */
        el.style.transform = string;
    }

    el.forEach(el => {

        el.addEventListener('mousemove', handleMove);

        /* Add listener for mouseout event, remove the rotation */
        el.addEventListener('mouseout', function(e) {
            e.target.closest(".box-animation").style.transform = 'perspective(800px) scale(1) rotateX(0) rotateY(0)';
        })

        /* Add listener for mousedown event, to simulate click */
        el.addEventListener('mousedown', function(e) {
            e.target.closest(".box-animation").style.transform = 'perspective(800px) scale(1) rotateX(0) rotateY(0)';
        })

        /* Add listener for mouseup, simulate release of mouse click */
        el.addEventListener('mouseup', function(e) {
            e.target.closest(".box-animation").style.transform = 'perspective(800px) scale(1) rotateX(0) rotateY(0)';
        })
    });

    
      

});



