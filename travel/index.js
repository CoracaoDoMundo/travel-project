// BURGER MENU //

(function () {
  const burgerItem = document.querySelector(".burger");
  menu = document.querySelector(".header_nav");
  menuCloseItem = document.querySelector(".header_nav_close");
  menuCloseItemAcc = document.querySelector(".account");
  menuCloseItemHow = document.querySelector(".header_link_works");
  menuCloseItemPlan = document.querySelector(".header_link_plan");
  menuCloseItemDest = document.querySelector(".header_link_destinations");
  menuCloseItemStory = document.querySelector(".header_link_stories");
  menuCloseItemSocial = document.querySelector(".header_link_social");
  menuCloseItemAll = document.querySelector(".close_menu");
  menuCloseItemAllDown = document.querySelector(".close_menu_second_part");

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

// POPUP //

const popupLinks = document.querySelectorAll(".popup__link");
body = document.querySelector(".body");
lockPadding = document.querySelectorAll(".lock-padding");
popupActive = document.querySelector(".popup.open");
register = document.querySelector(".register__link");
popupSignup = document.querySelector(".popup.signup");
popup = document.querySelector(".popup__content");
buttonText = document.querySelector(".button__sign-in__text");

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
email = document.querySelector(".popup_email");
pass = document.querySelector(".popup_pass");

sign_in__button.addEventListener("click", () => {
  if (!email.value || !pass.value) alert('Заполните поля "E-mail" и "Пароль"');
  else
    alert(
      `Добро пожаловать, Ваш email: ${email.value}, Ваш пароль: ${pass.value}!`
    );
});

// SLIDER //

// const prev = document.querySelector('.btn-prev');
//       next = document.querySelector('.btn-next');
//       slides = document.querySelectorAll('.slide');
//       dots = document.querySelectorAll('.dot');

// // console.log(slides);
// // console.log(prev);
// // console.log(next);

// let index = 0;

// const activeSlide = n => {
//     console.log(n);
//     for(let slide of slides) {
//         slide.classList.remove('active');
//     }
//     slides[n].classList.add('active');
// }

// const nextSlide = () => {
//     if (index == slides.length - 1) {
//         index = 0;
//         activeSlide(index);
//     } else {
//         index++;
//         activeSlide(index);
//     }
// }

// next.addEventListener('click', nextSlide());

// SLIDER 2 //

// let slides = document.querySelectorAll('.slide');
// // console.log(slides);
// let slider = [];

// for (let i = 0; i < slides.length; i++) {
//     slider[i] = slides[i].id;
//     slides[i].remove();
// }
// // console.log(slider);
// let step = 0;
// let offset = 0;

// function draw() {
//     let div = document.createElement('div');
//     div.id = slider[step];
//     div.classList.add('slide');
//     div.style.left = offset*800 + 'px';
//     document.querySelector('#slide-area').appendChild(div);
// }

// draw()

// SLIDER 3 //

const BTN_LEFT = document.querySelector("#btn-left");
const BTN_RIGHT = document.querySelector("#btn-right");
const CAROUSEL = document.querySelector("#carousel");

const moveLeft = () => {
  CAROUSEL.classList.add("transition-left");
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_RIGHT.removeEventListener("click", moveRight);
};

const moveRight = () => {
  CAROUSEL.classList.add("transition-right");
  BTN_RIGHT.removeEventListener("click", moveRight);
  BTN_LEFT.removeEventListener("click", moveLeft);
};

BTN_LEFT.addEventListener("click", moveLeft);
BTN_RIGHT.addEventListener("click", moveRight);

CAROUSEL.addEventListener("animationend", (animationEvent) => {
  if (animationEvent.animationName === "move-left") {
    CAROUSEL.classList.remove("transition-left");
  } else {
    CAROUSEL.classList.remove("transition-right");
  }
  BTN_LEFT.addEventListener("click", moveLeft);
  BTN_RIGHT.addEventListener("click", moveRight);
});

console.log("Ваша оценка - 80 баллов \nОтзыв по пунктам ТЗ: \nНе выполненные/не засчитанные пункты: \n1. Три точки внизу отображают \"номер слайда\", то есть каждому слайду соответствует свой кружочек, который становится активным при нахождении соответствующего ему слайда в центре. На мобильном варианте картинка одна, но поверх нее появляются стрелочки навигации \(можно сделать как карусель или же затемнять кнопку если слайдер достиг края\) \n2. Нажатие на кнопку Register на Login попапе меняет разметку попапа на разметку Sign Up попапа согласно макету \(То есть нажатие не закрывает модал а просто меняет его наполнение\) \nВыполненные пункты: \n1. на десктоп варианте при клике на урезанную картинку слева или справа изображение меняется по принципу карусели \(например если нажать правую картинку та что была в центре на уезжает налево, а та что была видна наполовину оказывается справа\) \n2. Анимации плавного перемещения для слайдера \n3. логин попап соответствует верстке его закрытие происходит при клике вне попапа \n4. логин попап имеет 2 инпута \(логин и пароль\) при нажатии на кнопку Sign In показывается браузерный алерт с введенными данными \(для реализации можно использовать тег\)");
