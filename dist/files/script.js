//бургер меню
$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger, .header__links, .header__row').toggleClass('active');
    })
});

//слайдер
$(document).ready(function(){
    $('.single-item').slick({
        infinite: true,
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 50000,
        pauseOnHover: false,
      });
});

// $('.slider').slick({
//     infinite: true,
//     dots: true,
//     slidesToShow: 3,
//     slidesToScroll: 1
//   });

// при наведении на пункты "направления деятельности" -
// дает пункту анимацию
var number = document.querySelectorAll('.way__item');
var addMod = function (number){
    number.addEventListener('mouseenter', function(event){
        let sortedNumber = number;
        sortedNumber.classList.add('pulse');
});
    number.addEventListener('mouseleave', function(event){
        let sortedNumber = number;
        sortedNumber.classList.remove('pulse');
});
};
for(i = 0; i < number.length; i++){
    addMod(number[i]);
}

// отменить стандартное действие кнопки отправки формы
let button = document.querySelector('.form__button');
button.addEventListener('click', function(event){
    event.preventDefault();
})
