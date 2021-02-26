$('.open-popup').on('click', function(){
    $('.overlay, #popup').fadeIn('slow');
});

$('.modal__close').on('click', function(){
    $('.overlay, #popup').fadeOut('slow');
});