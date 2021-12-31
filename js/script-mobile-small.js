$(document).ready(function (){
    $('.slider-mobile-small').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
    });
    ('.slider').slick('setPosition');
    // $('.slider').slick('GoTo', 3);
});