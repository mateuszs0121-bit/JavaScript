//Zadanie 1
let suma = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    suma += i;
  }
}
console.log(`Suma liczb parzystych od 1 do 100 to: ${suma}`);

//Zadanie 2
const h = 5;
for (let i = 1; i <= h; i++) {
  let wiersz = "";
  for (let j = 1; j <= i; j++) {
    wiersz += "*";
  }
  console.log(wiersz);
}

//Zadanie 3
let counter = 0;
let i = 1;
while (i <= 50) {
  if (i % 3 === 0) {
    counter++;
  }
  i++;
}
console.log(`Liczb podzielnych przez 3 w zakresie od 1 do 50 jest: ${counter}`);
