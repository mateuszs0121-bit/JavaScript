document.addEventListener("click", function (e) {
  console.log(e.clientX, e.clientY);
  // if (e.clientX % 2 == 0 && e.clientY % 2 == 0)
  //   document.body.style.backgroundColor = "red";
  // else if (e.clientX % 2 != 0 && e.clientY % 2 != 0)
  //   document.body.style.backgroundColor = "blue";
  // else document.body.style.backgroundColor = "green";
  const color = getColor(e);
  document.body.style.backgroundColor = color;
});

function getColor(e) {
  if (e.clientX % 2 === 0) {
    if (e.clientY % 2 === 0) {
      return "red";
    } else return "green";
  } else {
    if (e.clientY % 2 === 0) {
      return "green";
    } else return "blue";
  }
}
