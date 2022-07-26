(function () {
  const burgerItem = document.querySelector(".burger");
  const menu = document.querySelector(".header_nav");
  const menuCloseItem = document.querySelector(".header_nav_close");
  const menuCloseItemAcc = document.querySelector(".account");
  const menuCloseItemHow = document.querySelector(".header_link_works");
  const menuCloseItemPlan = document.querySelector(".header_link_plan");
  const menuCloseItemDest = document.querySelector(".header_link_destinations");
  const menuCloseItemStory = document.querySelector(".header_link_stories");
  const menuCloseItemSocial = document.querySelector(".header_link_social");
  const menuCloseItemAll = document.querySelector(".close_menu");
  const menuCloseItemAllDown = document.querySelector(
    ".close_menu_second_part"
  );

  burgerItem.addEventListener("click", () => {
    menu.classList.add("header_nav_activ");
  });
  menuCloseItem.addEventListener("click", () => {
    menu.classList.remove("header_nav_activ");
  });
  menuCloseItemHow.addEventListener("click", () => {
    menu.classList.remove("header_nav_activ");
  });
  menuCloseItemPlan.addEventListener("click", () => {
    menu.classList.remove("header_nav_activ");
  });
  menuCloseItemDest.addEventListener("click", () => {
    menu.classList.remove("header_nav_activ");
  });
  menuCloseItemStory.addEventListener("click", () => {
    menu.classList.remove("header_nav_activ");
  });
  menuCloseItemSocial.addEventListener("click", () => {
    menu.classList.remove("header_nav_activ");
  });
  menuCloseItemAll.addEventListener("click", () => {
    menu.classList.remove("header_nav_activ");
  });
  menuCloseItemAllDown.addEventListener("click", () => {
    menu.classList.remove("header_nav_activ");
  });
})();

const popupLinks = document.querySelectorAll(".popup__link");
const body = document.querySelector(".body");
const lockPadding = document.querySelectorAll(".lock-padding");
const popupActive = document.querySelector(".popup.open");
const register = document.querySelector(".register__link");
const popupSignup = document.querySelector(".popup.signup");
const popup = document.querySelector(".popup__content");

for (let i = 0; i < popupLinks.length; i++) {
  const popupLink = popupLinks[i];
  popupLink.addEventListener("click", (event) => {
    const popupName = popupLink.getAttribute("href").replace("#", "");
    const currentPopup = document.getElementById(popupName);
    popupOpen(currentPopup);
    event.preventDefault();
  });
}

function popupOpen(currentPopup) {
  currentPopup.classList.add("open");
  currentPopup.addEventListener("click", (event) => {
    if (!event.target.closest(".popup__content")) {
      popupClose(event.target.closest(".popup"));
    }
  });
}

function popupClose(popupActive) {
  popupActive.classList.remove("open");
}

// document.querySelector('.register__link').onclick = function() {
//     document.querySelector('.button__facebook').hidden = true;
//     document.querySelector('.button__google').hidden = true;
//     document.querySelector('.popup__separator').hidden = true;
//     document.querySelector('.forgot-password').hidden = true;
//   }

// register.addEventListener('click', () => {
//     popup.classList.add('signup');
// });

const sign_in__button = document.querySelector(".button__sign-in");
const email = document.querySelector(".popup_email");
const pass = document.querySelector(".popup_pass");

sign_in__button.addEventListener("click", () => {
  if (!email.value || !pass.value) alert('Заполните поля "E-mail" и "Пароль"');
  else
    alert(
      `Добро пожаловать, Ваш email: ${email.value}, Ваш пароль: ${pass.value}!`
    );
});

// console.log("Ваша оценка - 85 баллов\n Выполненные пункты:\n
//     1. Блок header\n
//     2. Секция preview\n
//     3. Секция steps\n
//     4. Секция destinations\n
//     5. Секция stories\n
//     6. Блок footer\n 7. Нет полосы прокрутки при ширине страницы от 1440px до 390px\n
//     8. нет полосы прокрутки при ширине страницы от 390px до 320рх\n 9. при ширине страницы 390рх панель навигации скрывается, появляется бургер-иконка\n 10. при нажатии на бургер-иконку плавно появляется адаптивное меню\n 11. адаптивное меню соответствует макету\n 12. при нажатии на крестик адаптивное меню плавно скрывается уезжая за экран\n
//     13. ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям. Все, кроме Account, она пока просто закрывает меню\n 14. при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна")
// ();
