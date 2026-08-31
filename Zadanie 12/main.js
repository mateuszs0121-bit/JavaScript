const input = document.querySelector("input");
const div = document.querySelector("div");
const passwords = ["jedEN", "DwA"];
const messages = ["super", "działa!"];

// passwords.forEach((password, index) => {
//   passwords[index] = password.toLowerCase();
// });

const lowerCasePass = passwords.map((password) => password.toLowerCase());

const showMessage = (e) => {
  const textInput = e.target.value.toLowerCase();
  for (let i = 0; i < lowerCasePass.length; i++) {
    if (textInput === lowerCasePass[i]) {
      div.innerHTML = messages[i];
    }
  }
  // Pierwszy sposób rozwiązania
  // const input = e.target.value.toLowerCase();
  // passwords.forEach((password, i) => {
  //   if (password === input) {
  //     document.querySelector("div").textContent = messages[i];
  //   }
  // });
};

input.addEventListener("input", showMessage);
