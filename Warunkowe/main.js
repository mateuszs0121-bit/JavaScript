//Zadanie 1
const numbers = [5, 10, 15];
if (numbers[0] + numbers[2] > numbers[1]) {
  console.log(
    "Suma pierwszego i ostatniego elementu jest większa niż drugi element.",
  );
} else {
  console.log(
    "Suma pierwszego i ostatniego elementu nie jest większa niż drugi element.",
  );
}

//Zadanie 2
const firstArray = [1, 2, 3];
const secondArray = [4, 5];
if (firstArray.length == secondArray.length) {
  console.log("Tablice mają taką samą długość.");
} else if (firstArray.length > secondArray.length) {
  console.log("Pierwsza tablica jest dłuższa niż druga tablica.");
} else {
  console.log("Druga tablica jest dłuższa niż pierwsza tablica.");
}

//Zadanie 3
const fruits = ["pear", "banana", "orange"];
const fruits_v2 = ["apple", "banana", "orange"];
if (fruits[0] === "apple") {
  console.log("Pierwszy element tablicy fruits to apple.");
} else {
  console.log("Pierwszy element tablicy fruits nie jest apple.");
}
if (fruits_v2[0] == "apple") {
  console.log("Pierwszy element tablicy fruits_v2 to apple.");
} else {
  console.log("Pierwszy element tablicy fruits_v2 nie jest apple.");
}
