const add = (firstInt = 0) => {
  let number = firstInt;
  return () => {
    number++;
    document.body.textContent = `Aktualny stan licznika to ${number}`;
  };
};

const user = (name = "", age) => {
  let userName = name;
  let userAge = age;

  function showName() {
    console.log(
      `Cześć ${userName}, ${userAge >= 18 ? "możesz kupić monsterka" : "nie możesz kupić monsterka"}`,
    );
  }
  return showName;
};

const mateusz = user("Mateusz", 25);
const dzieciak = user("Brine", 15);
const noName = user();
mateusz();
dzieciak();
noName();

const counter = add();
const countFrom5 = add(5);

document.addEventListener("click", countFrom5);
