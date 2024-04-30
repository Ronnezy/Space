$('.scroll').on('click', function () {
    let block = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(block).offset().top
    }, {
        duration: 500,
        easing: "linear"
    });
    return false;
});