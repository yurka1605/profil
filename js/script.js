window.onload = function() {
    $('.ui-slider-handle.ui-corner-all').text('120 m²');
    $('.calc__area input').val('120 м²');
    $('.header').offset().top > 0 ? $('.header').addClass('scroll') : $('.header').removeClass('scroll');
};

window.onscroll = function() {
    $('.header').offset().top > 0 ? $('.header').addClass('scroll') : $('.header').removeClass('scroll');
};

const slider = $('.calc__slider').slider({
    range: "min",    
    value: 120,
    min: 0,
    max: 150,
    slide : function(event, ui) {    
        $('.ui-slider-handle.ui-corner-all').text(`${ ui.value } m²`);
        $('.calc__area input').val(`${ ui.value } m²`);     
    }
});

$('.slider__point').on('click', function () {
    $('.slider__point').each((i, el) => {
        if (el === this) {
            $(el).addClass('active');
            $('.slider__items').css('transform', `translateX(${ i * -100 }vw)`);
        } else {
            $(el).removeClass('active');
        }
    });
});

$('.calc__input_control').on('click', function () {
    let curent = parseInt($(this).parent().prev().val(), 10);
    curent += $(this).hasClass('bottom') ? -1 : 1;
    if (curent > 150 || curent < 0) {
        return false;
    } else if ($(this).hasClass('area')) {
        const val = `${ curent } m²`;
        $('.ui-slider-handle.ui-corner-all').text(val);
        $(this).parent().prev().val(val);
        $(".calc__slider").slider('value' , curent);
    } else {
        $(this).parent().prev().val(curent);
    }
});

$('.calc__input input').on('change', function () {
    let curent = parseInt($(this).val(), 10);
    if (curent > 150) {
        curent = 150;
    } else if (curent < 0) {
        current = 0;
    } else if (isNaN(curent)) {
        curent = 1;
        console.log(curent);
    }
    if ($(this).hasClass('area')) {
        const val = `${ curent } m²`;
        $('.ui-slider-handle.ui-corner-all').text(val);
        $(".calc__slider").slider('value' , curent);
        $(this).val(val);
    } else {
        $(this).val(curent);
    }
});

const timer = setInterval(() => {
    const current = $('.slider__point.active').next();
    const newActive = current.length > 0 ? current : $('.slider__point')[0];
    $('.slider__point').each((i, el) => {
        if ($(el).hasClass('active')) {
            const count = i === $('.slider__point').length - 1 ? 0 : i + 1;
            $('.slider__items').css('transform', `translateX(${ count * -100 }vw)`);
        }
    });
    $('.slider__point.active').removeClass('active');
    $(newActive).addClass('active');
}, 5000);

$('.top__images_item-min').on('click', function() {
   $('.top__images_item-min').each((i, el) => {
        if (el === this) {
            $(el).addClass('active');
            $('.top__images_list').css('transform', `translateX(${ i * -100 }vw)`);
        } else {
            $(el).removeClass('active');
        }
    }); 
});

$('.example__control').on('click', function () {
    let count = 0;
    $('.example__item').each((i, el) => {
        if ($(el).hasClass('active')) {
            count = i;
            count += $(this).hasClass('left') ? -1 : 1;
        }
        $(el).removeClass('active');
    });
    if (count < 0) {
        count = $('.example__item').length - 1;
    } else if (count > $('.example__item').length - 1) {
        count = 0;
    }
    const newItem = $('.example__item')[count];
    $(newItem).addClass('active');
    $('.example__list').css('transform', `translateX(${ count * -100 }%)`);
    $('.example__images_wrap').css('transform', `translateX(${ count * -100 }%)`);
});

$('.info__item').on('click', function () {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).css('height', '90px');
    } else {
        $('.info__item').each((i, el) => { 
            $(el).removeClass('active');
            $(el).css('height', '90px');
        });
        $(this).css('height', this.scrollHeight);
        $(this).addClass('active');
    }
});