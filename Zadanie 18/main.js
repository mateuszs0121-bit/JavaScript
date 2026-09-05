const spanText = document.querySelector(".text");
const txt =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non explicabo facere id nostrum sint saepe odit. Aperiam, maxime eos. Sequi harum quod provident libero facere quos dolorem rerum recusandae ipsa.";

let indexText = 0;
const time = 40;
const addLetter = () => {
  //   console.log("ok");
  spanText.textContent += txt[indexText];
  indexText++;
  if (indexText == txt.length) {
    clearInterval(indexTyping);
  }
};
const indexTyping = setInterval(addLetter, time);
