AOS.init({
    duration: 500,
    easing: 'slide'
});

(function($) {


    var carousel = function() {
        $('.home-slider').owlCarousel({
            loop:true,
            autoplay: true,
            margin:0,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            rtl:true,
            nav:true,
            dots: false,
            autoplayHoverPause: false,
            items: 1,
            navText : [" <i class=\"fa-solid fa-angle-right\"></i>"," <i class=\"fa-solid fa-angle-left\"></i>"],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        });
        $('.carousel-testimony').owlCarousel({
            center: true,
            loop: true,
            items:1,
            rtl:true,
            margin: 30,
            stagePadding: 0,
            nav: false,
            navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
            responsive:{
                0:{
                    items: 1
                },
                600:{
                    items: 2
                },
                1000:{
                    items: 3
                }
            }
        });
    };
    carousel();

    var $a= $.noConflict(true);
    $a(window).scroll(function(){
        if ($a(window).scrollTop() >= 300) {
            $a('.menu-header').addClass('scrolled');
        }
        else {
            $a('.menu-header').removeClass('scrolled');
        }
    });

    var counter = function() {

        $('.section-counter').waypoint( function( direction ) {

            if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

                var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
                $('.number').each(function(){
                    var $this = $(this),
                        num = $this.data('number');
                    console.log(num);
                    $this.animateNumber(
                        {
                            number: num,
                            numberStep: comma_separator_number_step
                        }, 7000
                    );
                });

            }

        } , { offset: '95%' } );

    }
    counter();




})(jQuery);

