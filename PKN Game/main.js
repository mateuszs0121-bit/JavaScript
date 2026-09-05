const gameSummary = {
  numbers: 0,
  wins: 0,
  losses: 0,
  draws: 0,
};

const game = {
  playerHand: "",
  aiHand: "",
};

const hands = [...document.querySelectorAll(".select img")];

// const gameResult = checkResult();

function handSelection() {
  console.log(this);
  game.playerHand = this.dataset.option;
  console.log(`Player: ${game.playerHand}`);
  hands.forEach((hand) => (hand.style.boxShadow = ""));
  this.style.boxShadow = "0 0 0 4px green";
}

function aiChoice() {
  return hands[Math.floor(Math.random() * 3)].dataset.option;
}

function checkResult(player, ai) {
  if (player === ai) {
    console.log("Remis");
    return "draw";
  } else if (
    (player === "papier" && ai === "kamień") ||
    (player === "kamień" && ai === "nożyce") ||
    (player === "nożyce" && ai === "papier")
  ) {
    console.log("Punkt dla użytkownika");
    return "win";
  } else console.log("Punkt dla AI");
  return "loss";
}

function publishResult(player, ai, result) {
  document.querySelector("[data-summary='your-choice']").textContent = player;
  document.querySelector("[data-summary='ai-choice']").textContent = ai;
  document.querySelector("p.numbers span").textContent = ++gameSummary.numbers;

  if (result === "win") {
    document.querySelector("p.wins span").textContent = ++gameSummary.wins;
    document.querySelector("[data-summary='winner']").textContent = "Wygrałeś!";
    document.querySelector("[data-summary='winner']").style.color = "green";
  } else if (result === "loss") {
    document.querySelector("p.losses span").textContent = ++gameSummary.losses;
    document.querySelector("[data-summary='winner']").textContent =
      "Przegrałeś!";
    document.querySelector("[data-summary='winner']").style.color = "red";
  } else {
    document.querySelector("p.draws span").textContent = ++gameSummary.draws;
    document.querySelector("[data-summary='winner']").textContent = "Remis!";
    document.querySelector("[data-summary='winner']").style.color = "grey";
  }
}

function endGame() {
  document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow =
    "";
  game.playerHand = "";
  game.aiHand = "";
}

function startGame() {
  if (!game.playerHand) {
    return alert("Wybierz dłoń, aby rozpocząć grę!");
  }
  console.log("Przechodzę dalej");
  game.aiHand = aiChoice();
  console.log(`AI: ${game.aiHand}`);
  const gameResult = checkResult(game.playerHand, game.aiHand);
  console.log(gameResult);
  publishResult(game.playerHand, game.aiHand, gameResult);
  endGame();
}

hands.forEach((hand) => hand.addEventListener("click", handSelection));

document.querySelector(".start").addEventListener("click", startGame);
