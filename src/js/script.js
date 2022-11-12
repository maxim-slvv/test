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
        autoplaySpeed: 5000,
        pauseOnHover: false,
      });
});  
 

//при нажатии на ссылки в header делать плавный переход к разделу  //!----------------------
let linkCollect = document.querySelectorAll('.header__links a')  
console.log(linkCollect)

  
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


