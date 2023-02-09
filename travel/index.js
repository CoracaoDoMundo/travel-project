// BURGER MENU START //

// (function () {
const burgerItem = document.querySelector(".burger"),
  menu = document.querySelector(".header_nav"),
  menuCloseItem = document.querySelector(".header_nav_close"),
  menuCloseItemAcc = document.querySelector(".account"),
  menuCloseItemAll = document.querySelector(".close_menu"),
  menuItems = document.querySelectorAll(".header_item");

function openMenu() {
  menu.classList.add("header_nav_activ");
  menuCloseItemAll.style.display = "block";
}

function closeMenu() {
  menu.classList.remove("header_nav_activ");
  menuCloseItemAll.style.display = "none";
}

burgerItem.addEventListener("click", openMenu);
menuCloseItem.addEventListener("click", closeMenu);
menuCloseItemAll.addEventListener("click", closeMenu);

for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", closeMenu);
}

// BURGER MENU END //

// POPUP START //

const popupLinks = document.querySelectorAll(".popup__link"),
  popup = document.getElementById("popup"),
  registerHeader = document.querySelector(".popup__headline"),
  registerLink = document.querySelector(".register__link"),
  registerText = document.querySelector(".popup__link__text__thin"),
  fbBtn = document.querySelector(".button__facebook"),
  googleBtn = document.querySelector(".button__google"),
  lines = document.querySelectorAll(".separator__line"),
  sepText = document.querySelector(".separator__text"),
  signBtn = document.querySelector(".button__sign-in"),
  singBtnText = document.querySelector(".button__sign-in__text"),
  forgotPassText = document.querySelector(".forgot-password"),
  popupBlock = document.querySelector(".popup__content"),
  popupForms = document.querySelectorAll(".popup__form");

function popupOpen() {
  popup.classList.add("open");
}

function popupClose() {
  this.addEventListener("click", (event) => {
    if (!event.target.closest(".popup__content")) {
      this.classList.remove("open");
    }
  });
}

for (let i = 0; i < popupLinks.length; i++) {
  popupLinks[i].addEventListener("click", popupOpen);
}

popup.addEventListener("click", popupClose);

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

function registration() {
  if (registerLink.textContent === "Register") {
    registerHeader.textContent = "Create account";
    registerHeader.style.marginBottom = "1.5%";
    fbBtn.style.display = "none";
    googleBtn.style.display = "none";
    lines.forEach((el) => el.style.display = "none");
    sepText.style.display = "none";
    popupForms.forEach((el) => el.style.height = "40%");
    singBtnText.textContent = "Sign Up";
    signBtn.style.marginBottom = "25px";
    signBtn.style.marginTop = "70px";
    signBtn.style.height = "12%";
    forgotPassText.style.display = "none";
    registerLink.textContent = "Log in";
    registerText.textContent = "Already have an account? ";
    popupBlock.style.height = "436px";
  } else {
    registerHeader.textContent = "Log in to your account";
    registerHeader.style.marginBottom = "4.5%";
    fbBtn.style.display = "block";
    googleBtn.style.display = "block";
    lines.forEach((el) => el.style.display = "block");
    sepText.style.display = "block";
    popupForms.forEach((el) => el.style.height = "27%");
    singBtnText.textContent = "Sign In";
    signBtn.style.marginBottom = "10px";
    signBtn.style.marginTop = "0";
    signBtn.style.height = "8.5%";
    forgotPassText.style.display = "block";
    registerLink.textContent = "Register";
    registerText.textContent = "Don’t have an account? ";
    popupBlock.style.height = "660px";
  }
}

// POPUP END //

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

// const BTN_LEFT = document.querySelector("#btn-left");
// const BTN_RIGHT = document.querySelector("#btn-right");
// const CAROUSEL = document.querySelector("#carousel");

// const moveLeft = () => {
//   CAROUSEL.classList.add("transition-left");
//   BTN_LEFT.removeEventListener("click", moveLeft);
//   BTN_RIGHT.removeEventListener("click", moveRight);
// };

// const moveRight = () => {
//   CAROUSEL.classList.add("transition-right");
//   BTN_RIGHT.removeEventListener("click", moveRight);
//   BTN_LEFT.removeEventListener("click", moveLeft);
// };

// BTN_LEFT.addEventListener("click", moveLeft);
// BTN_RIGHT.addEventListener("click", moveRight);

// CAROUSEL.addEventListener("animationend", (animationEvent) => {
//   if (animationEvent.animationName === "move-left") {
//     CAROUSEL.classList.remove("transition-left");
//   } else {
//     CAROUSEL.classList.remove("transition-right");
//   }
//   BTN_LEFT.addEventListener("click", moveLeft);
//   BTN_RIGHT.addEventListener("click", moveRight);
// });

// console.log("Ваша оценка - 80 баллов \nОтзыв по пунктам ТЗ: \nНе выполненные/не засчитанные пункты: \n1. Три точки внизу отображают \"номер слайда\", то есть каждому слайду соответствует свой кружочек, который становится активным при нахождении соответствующего ему слайда в центре. На мобильном варианте картинка одна, но поверх нее появляются стрелочки навигации \(можно сделать как карусель или же затемнять кнопку если слайдер достиг края\) \n2. Нажатие на кнопку Register на Login попапе меняет разметку попапа на разметку Sign Up попапа согласно макету \(То есть нажатие не закрывает модал а просто меняет его наполнение\) \nВыполненные пункты: \n1. на десктоп варианте при клике на урезанную картинку слева или справа изображение меняется по принципу карусели \(например если нажать правую картинку та что была в центре на уезжает налево, а та что была видна наполовину оказывается справа\) \n2. Анимации плавного перемещения для слайдера \n3. логин попап соответствует верстке его закрытие происходит при клике вне попапа \n4. логин попап имеет 2 инпута \(логин и пароль\) при нажатии на кнопку Sign In показывается браузерный алерт с введенными данными \(для реализации можно использовать тег\)");
