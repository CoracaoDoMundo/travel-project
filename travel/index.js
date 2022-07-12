(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header_nav');
    const menuCloseItem = document.querySelector('.header_nav_close');
    const menuCloseItemAcc = document.querySelector('.account');
    const menuCloseItemHow = document.querySelector('.header_link_works');
    const menuCloseItemPlan = document.querySelector('.header_link_plan');
    const menuCloseItemDest = document.querySelector('.header_link_destinations');
    const menuCloseItemStory = document.querySelector('.header_link_stories');
    const menuCloseItemSocial = document.querySelector('.header_link_social');
    const menuCloseItemAll = document.querySelector('.close_menu');
    const menuCloseItemAllDown = document.querySelector('.close_menu_second_part');

    burgerItem.addEventListener('click', () => {
        menu.classList.add('header_nav_activ');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header_nav_activ');
    });
    menuCloseItemAcc.addEventListener('click', () => {
        menu.classList.remove('header_nav_activ');
    });
    menuCloseItemHow.addEventListener('click', () => {
        menu.classList.remove('header_nav_activ');
    });
    menuCloseItemPlan.addEventListener('click', () => {
        menu.classList.remove('header_nav_activ');
    });
    menuCloseItemDest.addEventListener('click', () => {
        menu.classList.remove('header_nav_activ');
    });
    menuCloseItemStory.addEventListener('click', () => {
        menu.classList.remove('header_nav_activ');
    });
    menuCloseItemSocial.addEventListener('click', () => {
        menu.classList.remove('header_nav_activ');
    });
    menuCloseItemAll.addEventListener('click', () => {
        menu.classList.remove('header_nav_activ');
    });
    menuCloseItemAllDown.addEventListener('click', () => {
        menu.classList.remove('header_nav_activ');
    });

}());

// (console.log("Ваша оценка - 85 баллов\n Выполненные пункты:\n
//     1. Блок header\n
//     2. Секция preview\n
//     3. Секция steps\n
//     4. Секция destinations\n
//     5. Секция stories\n
//     6. Блок footer\n 7. Нет полосы прокрутки при ширине страницы от 1440px до 390px\n
//     8. нет полосы прокрутки при ширине страницы от 390px до 320рх\n 9. при ширине страницы 390рх панель навигации скрывается, появляется бургер-иконка\n 10. при нажатии на бургер-иконку плавно появляется адаптивное меню\n 11. адаптивное меню соответствует макету\n 12. при нажатии на крестик адаптивное меню плавно скрывается уезжая за экран\n
//     13. ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям. Все, кроме Account, она пока просто закрывает меню\n 14. при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна")
// ());