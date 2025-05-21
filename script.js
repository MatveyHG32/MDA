const choices = ["Камень", "Ножницы", "Бумага"];
const buttons = document.querySelectorAll(".choice");
const playerChoiceDisplay = document.getElementById("player-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const outcomeDisplay = document.getElementById("outcome");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const playerChoice = button.getAttribute("data-choice");
        const computerChoice = choices[Math.floor(Math.random() * 3)];
        
        playerChoiceDisplay.textContent = `Твой выбор: ${playerChoice}`;
        computerChoiceDisplay.textContent = `Компьютер: ${computerChoice}`;
        
        if (playerChoice === computerChoice) {
            outcomeDisplay.textContent = "Ничья!";
        } else if (
            (playerChoice === "Камень" && computerChoice === "Ножницы") ||
            (playerChoice === "Ножницы" && computerChoice === "Бумага") ||
            (playerChoice === "Бумага" && computerChoice === "Камень")
        ) {
            outcomeDisplay.textContent = "Ты победил! 🎉";
        } else {
            outcomeDisplay.textContent = "Ты проиграл!  ";
        }
    });
});