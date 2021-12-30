$(document).ready(function (){
    $('.slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        speed: 1000,
    });
    ('.slider').slick('setPosition');
    // $('.slider').slick('GoTo', 3);
    $('.slider--mobile').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        speed: 1000,
    });
    ('.slider').slick('setPosition');
    // $('.slider').slick('GoTo', 3);
});