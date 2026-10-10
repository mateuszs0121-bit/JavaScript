const array = [1, 23, 456, 7890, 12345];
const addScope = (x, y) => {
  let sum = null;
  for (; x <= y; x++) {
    sum += x;
  }
  return sum;
};

console.log(addScope(10, 12));

function addNumbers(numbers = []) {
  //   let sum = 0;
  //   numbers.forEach((number) => (sum += number));
  //   return sum;
  return numbers.reduce((prev, next) => prev + next, 0);
}

// function addNumbers(numbers = []) {
//   let sum = 0;
//   for (const number of numbers) {
//     sum += number;
//   }
//   return sum;
// }

console.log(addNumbers(array));
