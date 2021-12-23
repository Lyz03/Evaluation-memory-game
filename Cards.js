const Cards = function (gameBoard, symbolArray, cssClassName, winMessage, resetButton) {
    this.container = gameBoard;
    this.symbols = symbolArray;
    this.cssClass = cssClassName;


    this.createCards = function () {
        // shuffle the array
        this.symbols.sort(()=> Math.random() - 0.5);

        // create html cards
        let i = 0;

        this.symbols.forEach(value => {
            let div = document.createElement('div');
            div.setAttribute('data-symbol', value)
            div.classList.add(this.cssClass);
            div.id = 'id' + i.toString();
            this.container.appendChild(div);

            i++

            this.runGame(div);
        });
    }

    let a = 0
    let currentCardSymbol = null;
    let currentCardId = null;

    this.runGame = function (div) {

        // click event, show symbole
        div.addEventListener("click", function () {
            this.innerText = this.dataset.symbol;
            this.style.background = "white"
            a++
            if (a === 2) {
                a = 0;
                if (currentCardSymbol !== this.dataset.symbol) {
                    let previousCard = document.getElementById(currentCardId);
                    setTimeout(() => {
                        this.innerText = '';
                        this.style.background = "linear-gradient(0deg, rgba(92,248,255,1) 3%, rgba(177,227,255,1) 37%, rgb(255, 209, 249) 100%)"
                        previousCard.innerText = '';
                        previousCard.style.background = "linear-gradient(0deg, rgba(92,248,255,1) 3%, rgba(177,227,255,1) 37%, rgb(255, 209, 249) 100%)"
                    }, 700)
                }
            }

            // win
            let b = 0;
            document.querySelectorAll('.game div').forEach(value => {
                if (value.innerText !== '')
                    b++

                // end
                if (b === symbolArray.length) {
                    winMessage.innerText = "Bravo vous avez gagné !"
                    resetButton.style.display = "inline"
                }
            })

            currentCardSymbol = this.dataset.symbol;
            currentCardId = this.id;
        });
    }
}