const gameBoard = document.querySelector('.game');
const winP = document.querySelector('p');
const resetButton = document.querySelector('button');
const symbols = [
    "♥", "♥",
    "♦", "♦",
    "♣", "♣",
    "♠", "♠",
    "◘", "◘",
    "○", "○",
];

let test = new Cards(gameBoard, symbols, "cards", winP, resetButton);
test.createCards();

resetButton.addEventListener("click", function () {
    winP.innerText = "Retournez toutes les paires"
    gameBoard.innerHTML = '';
    test = new Cards(gameBoard, symbols, "cards", winP, resetButton);
    test.createCards();
    this.style.display = 'none';
})