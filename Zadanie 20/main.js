let number = 0;

const counter = () => {
  number++;
  document.body.textContent = `Aktualny stan licznika to ${number}`;
};

document.addEventListener("click", counter);
