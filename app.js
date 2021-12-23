const gameBoard = document.querySelector('.game');
const winP = document.querySelector('p');
const resetButton = document.querySelector('button');
const symbols = [
    "1", "1",
    "2", "2",
    "3", "3",
    "4", "4"
];

let test = new Cards(gameBoard, symbols, "cards", winP, resetButton);
test.createCards();

resetButton.addEventListener("click", function () {
    gameBoard.innerHTML = '';
    test = new Cards(gameBoard, symbols, "cards", winP, resetButton);
    test.createCards();
    this.style.display = 'none';
})