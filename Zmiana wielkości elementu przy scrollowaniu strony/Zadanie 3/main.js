const square = document.createElement("div");
document.body.appendChild(square);
let size = 10;
let grow = true;
square.style.width = size + "px";
square.style.height = size + "px";

window.addEventListener("scroll", function () {
  if (size >= window.innerHeight * 0.5) {
    grow = !grow;
  } else if (size <= 0) {
    grow = !grow;
  }

  if (grow) {
    size++;
    square.style.width = size + "px";
    square.style.height = size + "px";
  } else {
    size--;
    square.style.width = size + "px";
    square.style.height = size + "px";
  }
});
