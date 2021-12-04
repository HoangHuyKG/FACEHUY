const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
// Open search history
    $('.search__input').onfocus = function () {
        $('.search__input').style.width = 252 +'px'
        $('.search__input').style.marginLeft = -40 +'px'
    }
// Remove search history
    $('.search__input').onblur = function () {
        $('.search__input').style.width = 224 + 'px'
        $('.search__input').style.marginLeft = -12 + 'px'
    }

// Open messenger

// Stop Propagation
    $('.search__history').onclick = function (a) {
        a.stopPropagation();
    }
    $('.message').onclick = function (e) {
        e.stopPropagation();
    }
// Onclick head nav 
    const getheadicons = $$('.choose__icon');
    const getheaditems = $$('.choose__item')
    getheadicons.forEach((a,i) => {
        const getheaditem = getheaditems[i]
        a.onclick = function (){
            $('.choose__item.icon--active').classList.remove('icon--active')
            $('.choose__icon.icon--active').classList.remove('icon--active')
            this.classList.add('icon--active')
            getheaditem.classList.add('icon--active')
        }
    })
// Show scroll
$('.menu').onmouseenter = function () {
    $('.menu').style.overflowY = 'scroll';
}
$('.menu').onmouseleave = function () {
    $('.menu').style.overflowY = 'hidden';
}
$('.message').onmouseenter = function () {
    $('.message').style.overflowY = 'scroll';
}
$('.message').onmouseleave = function () {
    $('.message').style.overflowY = 'hidden';
}
$('.notify').onmouseenter = function () {
    $('.notify').style.overflowY = 'scroll';
}
$('.notify').onmouseleave = function () {
    $('.notify').style.overflowY = 'hidden';
}
$('.container__nav').onmouseenter = function () {
    $('.container__nav').style.overflowY = 'scroll';
}
$('.container__nav').onmouseleave = function () {
    $('.container__nav').style.overflowY = 'hidden';
}
$('.category__right').onmouseenter = function () {
    $('.category__right').style.overflowY = 'scroll';
}
$('.category__right').onmouseleave = function () {
    $('.category__right').style.overflowY = 'hidden';
}

$('.slider__next').onclick = function () {
    $('.slider').style.marginLeft = -790 +'px' ;
    $('.slider__back').style.display = 'flex';
}
$('.slider__back').onclick = function () {
    $('.slider').style.marginLeft = -82 + 'px' ;
    $('.slider__back').style.display = 'none';
}

var input = 0;
$('.main__slider__next').onclick = function () {
    if(input > -300){
        input -= 100
        $('.main__slider-box').style.marginLeft = input + 'px'
    } else {
        input = -300
    }
}
$('.main__slider__back').onclick = function () {
    if(input < 0){
        input += 100
        $('.main__slider-box').style.marginLeft = input + 'px'
    } else {
        input = 0
    }
        
}