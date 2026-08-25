const div = document.querySelector("div");
let divX = 150;
let divY = 50;
let insertDivX;
let insertDivY;

div.style.left = `${divX}px`;
div.style.top = `${divY}px`;

let drawing = false;

div.addEventListener("mousedown", function (e) {
  div.style.backgroundColor = "grey";
  drawing = !drawing;

  insertDivX = e.offsetX;
  insertDivY = e.offsetY;
});

div.addEventListener("mousemove", function (e) {
  if (drawing) {
    divX = e.clientX - insertDivX;
    divY = e.clientY - insertDivY;
    div.style.left = `${divX}px`;
    div.style.top = `${divY}px`;
  }
});

div.addEventListener("mouseup", function () {
  div.style.backgroundColor = "black";
  drawing = !drawing;
});
