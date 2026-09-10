const add = (firstInt = 0) => {
  let number = firstInt;
  return () => {
    number++;
    document.body.textContent = `Aktualny stan licznika to ${number}`;
  };
};

const counter = add();
const countFrom5 = add(5);

document.addEventListener("click", countFrom5);
