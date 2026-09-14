Math.random() * (6 - 4) + 4;

const randomNumber = (min, max) => {
  const number = Math.random() * (max - min) + min;
  return number;
};

Math.floor(Math.random() * (6 - 4 + 1) + 4);

const randomInt = (min, max) => {
  const intNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return intNumber;
};
