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

const changeSlide = () => {
  active++;
  if (active === slideList.length) {
    active = 0;
  }
  img.src = slideList[active].img;
  h1.textContent = slideList[active].text;
};

setInterval(changeSlide, time);
