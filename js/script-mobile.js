$(document).ready(function (){
    $('.slider-mobile').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        // slidesToShow: 3,
        slidesToScroll: 2,
        speed: 1000,
    });
    ('.slider').slick('setPosition');
    // $('.slider').slick('GoTo', 3);
});