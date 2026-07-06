function calculateAverage(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}
console.log(calculateAverage([10, 20, 30, 40, 50]));

function filterEvenNumbers(numbers) {
  let evenNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  }
  return evenNumbers;
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

function countOccurrences(array, element) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      count++;
    }
  }
  return count;
}
console.log(countOccurrences([1, 2, 2, 3, 3, 3], 3));
