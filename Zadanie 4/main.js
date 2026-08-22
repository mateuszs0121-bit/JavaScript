let size = 10;
let change = true;
// document.body.style.height = "10000vh";

document.body.style.height = "10000px";
const div = document.createElement("div");
document.body.appendChild(div);

div.style.height = size + "px";
div.style.width = "100%";
div.style.position = "fixed";
div.style.left = "0";
div.style.top = "0";
div.style.backgroundColor = "green";

const changeHeight = function () {
  // changeHeight = () => {
  if (size > window.innerHeight * 0.5) {
    // size += 10;
    // div.style.height = size + "px";
    change = !change;
    div.style.backgroundColor = "red";
  } else if (size <= 0) {
    // size -= 10;
    // div.style.height = size + "px";
    // div.style.backgroundColor = "red";
    change = !change;
    div.style.backgroundColor = "green";
  }

  if (change) {
    // change = !change;
    size += 10;
    // div.style.height = size + "px";
  } else {
    // change = !change;
    size -= 10;
    // div.style.height = size + "px";
  }
  div.style.height = size + "px";
};

// div.addEventListener("scroll", (changeHeight) => {});
window.addEventListener("scroll", changeHeight);
