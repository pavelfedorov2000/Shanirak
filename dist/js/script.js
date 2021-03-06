$('.hamburger-btn').on('click', function() {
    $(this).toggleClass('hamburger-btn--active');
    $('.mobile-menu').toggleClass('mobile-menu--active');
});

$('.promo-slider').slick({
    prevArrow: '<button class="promo-slider__btn promo-slider__btn--prev"><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.32721 1.34579L1 11.2523L9.32721 21.1589" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/></svg></button>',
    nextArrow: '<button class="promo-slider__btn promo-slider__btn--next"><svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.67279 1.34579L10 11.2523L1.67279 21.1589" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/></svg></button>',
    dots: true,
    appendArrows: $('.promo-slider__arrows'),
    appendDots: $('.promo-slider__dots'),
    //autoplay: true,
    //autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                //autoplay: false,
            }
        },
    ]
});

$('.open-popup').on('click', function(){
    $('.overlay, #popup').fadeIn('slow');
});

$('.modal__close').on('click', function(){
    $('.overlay, #popup').fadeOut('slow');
});

$('.registration-form__field').on('change', function () {
    $(this).addClass('registration-form__field--changed');
});