const elsFeaturesItem = document.querySelectorAll('.features__item');
const elsTabLink = document.querySelectorAll('.js-tab-link');
const elsAccordionItem = document.querySelectorAll('.accordion__item');

elsFeaturesItem.forEach(function (item, index){
    elsFeaturesItem[index].addEventListener('click', function(){
        elsFeaturesItem.forEach(function (elsFeaturesItem){
            elsFeaturesItem.classList.remove('features__item--active');
        });
        elsFeaturesItem[index].classList.add('features__item--active');
    });

});

// ACCORDION//
elsAccordionItem.forEach(function (item, index){
    item.addEventListener('click', function(){
        elsAccordionItem.forEach(function(){
            elsAccordionItem[index].classList.toggle("accordion__item--open")
        })
        elsAccordionItem[index].classList.toggle('accordion__item--open');
    });
});

// INPUT

