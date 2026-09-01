const options = ["Opcja 2", "Opcja 1"];

const showOptions = () => {
  alert(options.join("\n"));
};

const reset = (e) => {
  e.preventDefault();
  options.length = 0;
  document.querySelector("h1").textContent = "";
};

const addOption = (e) => {
  e.preventDefault();
  const input = document.querySelector("input");
  options.push(input.value);
  alert(`Dodano opcję: ${input.value}`);
  input.value = "";

  console.log(options);
};

const showAdvice = () => {
  const index = Math.floor(Math.random() * options.length);
  document.querySelector("h1").textContent = options[index];
};

document.querySelector(".option").addEventListener("click", showOptions);
document.querySelector(".clean").addEventListener("click", reset);
document.querySelector(".add").addEventListener("click", addOption);
document.querySelector(".advice").addEventListener("click", showAdvice);
