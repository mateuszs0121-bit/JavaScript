console.log("Hello, World!");
const userName = "Mateusz";

//Pętle na tablicy

const userAge = [25, 30, 35, 40, 45];

for (let i = 0; i < userAge.length; i++) {
  console.log(`Wiek użytkownika numer ${i + 1} to ${userAge[i]} lat.`);
}

const userBirthYear = [1995, 1990, 1985, 1980, 1975];
const currentYear = new Date().getFullYear();

for (let i = 0; i < userBirthYear.length; i++) {
  const age = currentYear - userBirthYear[i];
  console.log(`Użytkownik urodzony w ${userBirthYear[i]} ma ${age} lat.`);
}

const guests = ["Alice", "Bob", "Charlie", "David", "Eve"];
for (let i = 0; i < guests.length; i++) {
  if (guests[i] === "Charlie") {
    console.log("Charlie jest na liście gości!");
  } else if (guests[i] === "Alice") {
    console.log("Alice jest na liście gości!");
  } else {
    console.log(`${guests[i]} nie jest na liście gości.`);
  }
}
