const spanText = document.querySelector(".text");
const spanCursor = document.querySelector(".cursor");
const txt =
  // "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non explicabo facere id nostrum sint saepe odit. Aperiam, maxime eos. Sequi harum quod provident libero facere quos dolorem rerum recusandae ipsa.";
  ["tekst1", "tekst2", "tekst3"];

let indexText = 0;
let activeLetter = -15;
let activeText = 0;
const time = 40;

const addLetter = () => {
  //   console.log("ok");
  // spanText.textContent += txt[indexText];
  // indexText++;
  // if (indexText == txt.length) {
  //   clearInterval(indexTyping);
  // }
  if (activeLetter >= 0) {
    spanText.textContent += txt[activeText][activeLetter];
  }

  activeLetter++;
  if (activeLetter === txt[activeText].length) {
    activeText++;
    if (activeText === txt.length) {
      return;
    }
    return setTimeout(() => {
      activeLetter = -15;
      spanText.textContent = "";
      addLetter();
    }, 2000);
  }
  setTimeout(addLetter, 100);
};
// const indexTyping = setInterval(addLetter, time);

addLetter();

const cursorAnimation = () => {
  spanCursor.classList.toggle("active");
};

setInterval(cursorAnimation, 400);
