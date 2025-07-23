document.querySelector(".burger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".menu").classList.toggle("open");
  document.body.classList.toggle("no-scroll");
});

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
