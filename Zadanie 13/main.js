const btn = document.querySelector("button");
const div = document.querySelector("div");
const names = [
  "Jadzia",
  "Dominika",
  "Daria",
  "Asia",
  "Kasia",
  "Marysia",
  "Anastazja",
];
const prefixes = [
  "Wydaje mi się",
  "Mam wrażenie",
  "Szczerze uważam",
  "Jestem pewien",
];
const nameGenerator = () => {
  const index = Math.floor(Math.random() * names.length);
  //const indexPrefix = Math.floor(Math.random() * prefixes.length);
  div.textContent = `${prefixes[Math.floor(Math.random() * prefixes.length)]}, że najciekawszse imię to ${names[index]}`;
};

btn.addEventListener("click", nameGenerator);
