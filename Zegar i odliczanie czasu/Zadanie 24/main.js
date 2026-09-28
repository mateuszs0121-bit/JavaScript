const buttonTime = document.querySelector(".main");
const buttonReset = document.querySelector(".reset");
const panel = document.querySelector(".time div");

let time = 0;
let active = false;
let idInterval;

const timer = () => {
  if (!active) {
    active = !active;
    buttonTime.textContent = "Pauza";
    idInterval = setInterval(start, 10);
  } else {
    active = !active;
    buttonTime.textContent = "Start";
    clearInterval(idInterval);
  }
};

const start = () => {
  time++;
  panel.textContent = (time / 100).toFixed(2);
  //   console.log(time / 100);
};

const reset = () => {
  time = 0;
  panel.textContent = "---";
  active = false;
  buttonTime.textContent = "Start";
  clearInterval(idInterval);
};

buttonTime.addEventListener("click", timer);
buttonReset.addEventListener("click", reset);
