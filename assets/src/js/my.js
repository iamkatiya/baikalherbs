$(document).ready(function() {
    $('.history-carousel').owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        items: 1,
        speed: 16000,

        nextArrow: '<a class="arrow-next"></a>',
        prevArrow: '<a class="arrow-prev"></a>',
        responsive: {
            700: {
                items: 1,
            },
            1610: {
                items: 1,
            }
        }
    });
});