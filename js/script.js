$('.slider__point').on('click', function () {
    $('.slider__point').each((i, el) => {
        if (el === this) {
            $(el).addClass('active');
        } else {
            $(el).removeClass('active');
        }
    });
});