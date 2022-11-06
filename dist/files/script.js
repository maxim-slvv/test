//бургер меню
$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger, .header__links, .header__row').toggleClass('active');
    })
});

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
