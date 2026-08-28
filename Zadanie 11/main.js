const input = document.getElementById("pass");
const div = document.querySelector(".message");
const passwords = ["user", "wiosna", "Ania"];
const messages = ["Hasło poprawne", "Piękna pora roku", "tak to ona"];
input.addEventListener("input", function (e) {
  div.textContent = "";
  const text = e.target.value;
  passwords.forEach((password, index) => {
    if (password === text) {
      div.textContent = messages[index];
      e.target.value = "";
    }
  });
  // console.log(this.value);
  // console.log(e.target.value);
  // if (passwords === e.target.value) {
  //   div.textContent = messages;
  //   e.target.value = "";
  // } else {
  //   div.textContent = "";
  // }
});
input.addEventListener("focus", (e) => {
  e.target.classList.add("active");
});
input.addEventListener("blur", (e) => {
  e.target.classList.remove("active");
});
