// BURGER MENU START //

// (function () {
const burgerItem = document.querySelector(".burger"),
  MENU = document.querySelector(".header_nav"),
  MENU_CLOSE_ITEM = document.querySelector(".header_nav_close"),
  menuCloseItemAcc = document.querySelector(".account"),
  menuCloseItemAll = document.querySelector(".close_menu"),
  menuItems = document.querySelectorAll(".header_item"),
  logoHeader = document.querySelector(".header_wrapper"),
  burgerLogo = document.querySelector(".header_burger"),
  body = document.querySelector(".body");

function openMenu() {
  MENU.classList.add("header_nav_activ");
  menuCloseItemAll.style.display = "block";
  logoHeader.classList.add("header_wrapper_visible");
  burgerLogo.classList.add("hidden");
  body.style.overflow = "hidden";
}

function closeMenu() {
  MENU.classList.remove("header_nav_activ");
  menuCloseItemAll.style.display = "none";
  logoHeader.classList.remove("header_wrapper_visible");
  burgerLogo.classList.remove("hidden");
  body.style.overflow = "visible";
}

burgerItem.addEventListener("click", openMenu);
MENU_CLOSE_ITEM.addEventListener("click", closeMenu);
menuCloseItemAll.addEventListener("click", closeMenu);

for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", closeMenu);
}

// BURGER MENU END //

// POPUP START //

const popupLinks = document.querySelectorAll(".popup__link"),
  POPUP = document.getElementById("popup"),
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
  POPUP.classList.add("open");
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

POPUP.addEventListener("click", popupClose);

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
    lines.forEach((el) => (el.style.display = "none"));
    sepText.style.display = "none";
    popupForms.forEach((el) => (el.style.height = "40%"));
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
    lines.forEach((el) => (el.style.display = "block"));
    sepText.style.display = "block";
    popupForms.forEach((el) => (el.style.height = "27%"));
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

// SLIDER START //

let leftSlide = document.querySelector(".left-slide"),
  middleSlide = document.querySelector(".middle-slide"),
  rightSlide = document.querySelector(".right-slide");

const CAROUSEL = document.querySelector(".carousel"),
  dotLeft = document.querySelector(".left-dot"),
  dotRight = document.querySelector(".right-dot"),
  dotMiddle = document.querySelector(".middle-dot"),
  dots = document.querySelectorAll(".dot"),
  btnPrev = document.querySelector(".btn-prev"),
  btnNext = document.querySelector(".btn-next");

let newSlide;

btnPrev.addEventListener("click", moveSlides);
btnNext.addEventListener("click", moveSlides);

function createLeftSlide() {
  newSlide = rightSlide.cloneNode(true);
  newSlide.classList.remove("right-slide");
  newSlide.classList.add("left-slide");
}

function createRightSlide() {
  newSlide = leftSlide.cloneNode(true);
  newSlide.classList.remove("left-slide");
  newSlide.classList.add("right-slide");
}

function activeDot() {
  dots.forEach((el) => el.classList.remove("active-dot"));
  this.classList.add("active-dot");
}

function removeAnimation() {
  CAROUSEL.classList.remove("transition-left");
  CAROUSEL.classList.remove("transition-right");
}

function removeSlide(item) {
  CAROUSEL.removeChild(item);
}

// function deleteSlide(slide) {
//   CAROUSEL.addEventListener("transitionend", CAROUSEL.removeChild(slide));
// }

function moveSlides() {
  if (this.classList.contains("btn-prev")) {
    createLeftSlide();
    for (let i = 0; i < dots.length - 1; i++) {
      if (dots[0].classList.contains("active-dot")) {
        dots[0].classList.remove("active-dot");
        dots[1].classList.add("active-dot");
      } else if (dots[1].classList.contains("active-dot")) {
        dots[1].classList.remove("active-dot");
        dots[2].classList.add("active-dot");
      } else {
        dots[2].classList.remove("active-dot");
        dots[0].classList.add("active-dot");
      }
    }
    CAROUSEL.classList.add("transition-left");
  } else {
    createRightSlide();
    for (let i = 0; i < dots.length - 1; i++) {
      if (dots[0].classList.contains("active-dot")) {
        dots[0].classList.remove("active-dot");
        dots[2].classList.add("active-dot");
      } else if (dots[1].classList.contains("active-dot")) {
        dots[1].classList.remove("active-dot");
        dots[0].classList.add("active-dot");
      } else {
        dots[2].classList.remove("active-dot");
        dots[1].classList.add("active-dot");
      }
      CAROUSEL.classList.add("transition-right");
    }
  }
  CAROUSEL.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
  CAROUSEL.appendChild(newSlide);

  if (this.classList.contains("btn-prev")) {
    setTimeout(removeSlide(rightSlide), 3000);
    // deleteSlide(rightSlide);
    middleSlide.classList.add("right-slide");
    middleSlide.classList.remove("middle-slide");
    leftSlide.classList.add("middle-slide");
    leftSlide.classList.remove("left-slide");
    rightSlide = middleSlide;
    middleSlide = leftSlide;
    leftSlide = newSlide;
  } else {
    setTimeout(removeSlide(leftSlide), 3000);
    // deleteSlide(leftSlide);
    middleSlide.classList.add("left-slide");
    middleSlide.classList.remove("middle-slide");
    rightSlide.classList.add("middle-slide");
    rightSlide.classList.remove("right-slide");
    leftSlide = middleSlide;
    middleSlide = rightSlide;
    rightSlide = newSlide;
  }
  CAROUSEL.style.gridTemplateColumns = "1fr 1fr 1fr";
  setTimeout(removeAnimation, 1000);
}

// SLIDER END //
