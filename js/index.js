document.querySelector(".burger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".menu").classList.toggle("open");
  document.body.classList.toggle("no-scroll");
});

document.querySelector(".signIn").addEventListener("click", function () {
  document.getElementById("signIn").classList.add("open");
});

document
  .querySelector(".modal-window__cross")
  .addEventListener("click", function () {
    document.getElementById("signIn").classList.remove("open");
  });

const overlay = document.querySelector(".modal-overlay");
// const modal = document.querySelector(".modal-window");

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.classList.remove("open");
  }
});

document
  .querySelector(".menu__link--frame")
  .addEventListener("click", function () {
    document.getElementById("logIn").classList.add("open");
  });

document.querySelector(".intro__button").addEventListener("click", function () {
  document.getElementById("logIn").classList.add("open");
});
document.querySelector(".promo__link").addEventListener("click", function () {
  document.getElementById("logIn").classList.add("open");
});
document
  .querySelector(".modal-window__crossLg")
  .addEventListener("click", function () {
    document.getElementById("logIn").classList.remove("open");
  });
const overlayLg = document.querySelector(".modal-overlayLg");
overlayLg.addEventListener("click", (e) => {
  if (e.target === overlayLg) {
    overlayLg.classList.remove("open");
  }
});

const checkbox = document.querySelector(".modal-window__checkbox");
const button = document.querySelector(".modal-window__btnLi");

checkbox.addEventListener("change", () => {
  button.disabled = !checkbox.checked;
});
///////////////////////////////////////////////////////////////
const boxes = document.querySelectorAll(".start-animation");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("left-show");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  }
);
boxes.forEach((box) => observer.observe(box));

const boxesR = document.querySelectorAll(".food-highlight__column--bottom");

const observerR = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("right-show");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  }
);
boxesR.forEach((box) => observerR.observe(box));
