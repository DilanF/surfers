$('.slider-for').slick({
    slidesToShow: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
});
$('.slider-nav').slick({
    slidesToShow: 4,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    arrows: false,
    vertical: true,
    responsive: [
        {
            breakpoint: 870,
            settings: {
                slidesToShow: 4,
                vertical: false,
                dots: false
            }
        }
    ]
});

$('.desc').slick({
    slidesToShow: 1,
    arrows: false,
    fade: true,
    asNavFor: '.barra'
});
$('.barra').slick({
    slidesToShow: 3,
    asNavFor: '.desc',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    arrows: false,
});

$('.team').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});