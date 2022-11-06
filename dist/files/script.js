$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger, .header__links, .header__row').toggleClass('active');
    })
});

var number = document.querySelectorAll('.way__number');

var addMod = function (number){
    number.addEventListener('mouseenter', function(event){
        console.log('red');
});
};
for(i = 0; i < number.length; i++){
    addMod(number[i]);
}

// $('way__number'+i).hover(function(){
//     $('way__number1').addClass('hovered');
// }, function() {
//     $('way__number1').removeClass('hovered');
// });