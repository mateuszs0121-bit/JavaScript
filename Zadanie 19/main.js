const slideList = [
  {
    img: "img/img1.jpg",
    text: "Pierwszy tekst",
  },
  {
    img: "img/img2.jpg",
    text: "Drugi tekst",
  },
  {
    img: "img/img3.jpg",
    text: "Trzeci tekst",
  },
];

const time = 5000;
let active = 0;
const img = document.querySelector("img.slider");
const h1 = document.querySelector("h1.slider");
const dots = [...document.querySelectorAll(".dots span")];

const changeDot = () => {
  const activeDot = dots.findIndex((dot) => dot.classList.contains("active"));
  dots[activeDot].classList.remove("active");
  dots[active].classList.add("active");
};

const changeSlide = () => {
  active++;
  if (active === slideList.length) {
    active = 0;
  }
  img.src = slideList[active].img;
  h1.textContent = slideList[active].text;
  changeDot();
};

let index = setInterval(changeSlide, time);

const keyChangeSlide = (e) => {
  clearInterval(index);
  console.log(e.keyCode);
  if (e.keyCode == 37 || e.keyCode == 39) {
    e.keyCode == 37 ? active-- : active++;
    if (active === slideList.length) {
      active = 0;
    } else if (active < 0) {
      active = slideList.length - 1;
    }
  }
  img.src = slideList[active].img;
  h1.textContent = slideList[active].text;
  changeDot();
  index = setInterval(changeSlide, time);
  console.log(active);
};
window.addEventListener("keydown", keyChangeSlide);
