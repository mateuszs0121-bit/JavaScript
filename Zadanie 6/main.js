let size = 10;
let orderElement = 1;

const init = () => {
  const button = document.createElement("button");
  button.textContent = "Create list";
  document.body.appendChild(button);

  const reset = document.createElement("button");
  reset.textContent = "Reset";
  document.body.appendChild(reset);

  const container = document.createElement("ul");
  document.body.appendChild(container);
  container.style.listStyleType = "none";

  button.style.marginRight = "10px";

  button.addEventListener("click", createElements);
  reset.addEventListener("click", clearElements);
};

const createElements = () => {
  for (let i = 0; i < 10; i++) {
    const item = document.createElement("li");
    item.textContent = "Element " + orderElement++;
    item.style.fontSize = size + "px";
    size++;
    document.querySelector("ul").appendChild(item);
  }
};

const clearElements = () => {
  document.querySelector("ul").innerHTML = "";
  size = 10;
  orderElement = 1;
};

init();
