const elsFeaturesItem = document.querySelectorAll('.features__item');
const elsTabLink = document.querySelectorAll('.js-tab-link');


elsFeaturesItem.forEach(function (item, index){
    elsFeaturesItem[index].addEventListener('click', function(){
        elsFeaturesItem.forEach(function (elsFeaturesItem){
            elsFeaturesItem.classList.remove('features__item--active');
        });
        elsFeaturesItem[index].classList.add('features__item--active');
    });

});