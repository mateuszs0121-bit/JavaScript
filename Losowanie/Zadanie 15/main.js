const names = [];
const div = document.querySelector("div");

const addName = (e) => {
  e.preventDefault();
  const input = document.querySelector("input");
  const newName = input.value;
  if (input.value.length) {
    for (nameCheck of names) {
      if (nameCheck === newName) {
        alert("To już tu jest");
        return;
      }
    }
    names.push(newName);
    div.textContent += newName + ", ";
    input.value = "";
  }
};

document.querySelector("button").addEventListener("click", addName);
