const array = [12, 23, 34, 45, 56, 67, 78, 89];
const oddNumbers = array.filter((number) => number % 2);
const evenNumbers = array.filter((number) => !(number % 2));
const numbesBiggerThan50 = array.filter((number) => number > 50);

const double = array.map((number) => number + " osób");

array.forEach((number, index) => (array[index] = number * 2));

const input = document.querySelector("input");
const ul = document.querySelector("ul");
const li = document.querySelectorAll("li");

const searchTask = (e) => {
  const searchText = e.target.value.toLowerCase();
  let tasks = [...li];
  tasks = tasks.filter((task) =>
    task.textContent.toLowerCase().includes(searchText),
  );
  console.log(tasks);
  ul.textContent = "";
  tasks.forEach((task) => ul.appendChild(task));
};

input.addEventListener("input", searchTask);

const removeTask = (e) => {
  //   console.log(e.target.textContent);
  //   e.target.parentNode.remove();
  //   console.log(e.target.parentNode);
  //   e.target.parentNode.style.textDecoration = "line-through";
  //   e.target.remove();
  const index = e.target.dataset.key;
  document.querySelector(`li[data-key = "${index}"]`).remove();
};

document.querySelectorAll("button[data-key]").forEach((item) => {
  item.addEventListener("click", removeTask);
});
