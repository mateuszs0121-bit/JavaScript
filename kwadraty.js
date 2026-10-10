function pole(a, b) {
  let min = a < b ? a : b;
  let count = 0;
  for (let i = 0; i < min; i++) {
    let result = (a - i) * (b - i);
    console.log(`Kwadratów ${i + 1}x${i + 1} jest ${result}`);
    count += result;
  }
  console.log(`Razem mamy ${count} kwadratów`);
  return count;
}

pole(5, 5);
