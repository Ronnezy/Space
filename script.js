let condition = true;
let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    alert('Информация отправлена разработчику');
});

function forward() {
    anime({
        targets: '.menu-small',
        translateX: ['-100%', '0'],
        easing: 'easeInOutSine',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });

    anime({
        targets: '.menu_small_icon',
        rotate: 90,
        easing: 'easeOutCirc',
        direction: 'alternative',
        duration: 1000,
        loop: false
     });
     
     anime({
        targets: '.stick',
        rotate: 180,
        easing: 'easeOutCirc',
        direction: 'alternative',
        duration: 1000,
        loop: false
     });

    condition = false;
}

function backward() {
    anime({
        targets: '.menu-small',
        translateX: ['0', '-100%'],
        easing: 'easeInOutSine',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });

    anime({
        targets: '.menu_small_icon',
        rotate: 0,
        easing: 'easeOutCirc',
        direction: 'alternative',
        duration: 1000,
        loop: false
     });
     
     anime({
        targets: '.stick',
        rotate: 0,
        easing: 'easeOutCirc',
        direction: 'alternative',
        duration: 1000,
        loop: false
     });

    condition = true;
}

$('.menu_small_icon').on('click', function() {
    if (condition) {
        forward();
    } else {
        backward();
    }
});

let start = 0;
let end = 0;

$('.container').on('touchstart', function(event) {
    start = event.originalEvent.touches[0].pageX;
});

$('.container').on('touchend', function(event) {
    end = event.originalEvent.changedTouches[0].pageX;
    if (end - start >= 100 && condition) {
        forward();
    } else if (start - end >= 100 && !condition) {
        backward();
    }
});