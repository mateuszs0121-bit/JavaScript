const showItems = document.querySelector("#showButton");
const itemsList = document.querySelectorAll("li");
// const itemsList = [...document.getElementsByTagName("li")];
let itemsSize = 10;

showItems.addEventListener("click", function () {
  //   console.log("Button clicked");

  //   for (let i = 0; i < itemsList.length; i++) {
  //     // if (itemsList[i].style.display === "") {
  //     if (!itemsList[i].style.display) {
  //       itemsList[i].style.display = "block";
  //     }
  //     itemsList[i].style.fontSize = itemsSize + "px";
  //   }

  itemsList.forEach((itemList) => {
    itemList.style.display = "block";
    itemList.style.fontSize = itemsSize + "px";
  });
  itemsSize++;
});
