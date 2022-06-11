//You’re going to store the gameboard as an array inside of a Gameboard object, so start there!

const Player = (sign) => {
    var obj = {}
    obj.sign = sign;
    obj.number = (obj.sign == 'x') ? 1 : 2
    obj.fields = [];
    return obj;
}



const gameboard = (function () {

    const mainFrame = document.querySelector('.main-container')
    const buttons = document.querySelectorAll('.field')
    console.log(buttons)
    let fields = ["","","", "","","", "","",""]
    let resetFields = () => { gameboard.fields = ["","","", "","","", "","",""] }
    buttons.forEach( field => { field.addEventListener('click', () => {gameFlow.playRound(field.id)})})
    const fillField = (sign, id) => {
        gameboard.fields[id - 1] = sign;
        display();
    }

    const display = () => {
        for(let x = 0; x < fields.length; x++) {
            if (gameboard.fields[x] == "x") {
                buttons[x].classList.add('x')
            }
            else if (gameboard.fields[x] == "o") {
                buttons[x].classList.add('o')
            }
        }
    }
    return {display, fields, fillField, buttons, resetFields, mainFrame}
    })()

gameboard.display()
const player = (function () {})();

const gameFlow = (() => {

    const player1 = Player("x");
    const player2 = Player('o');
    const roundCounter = document.querySelector('.round-counter')
    let round = 0;

    let gameEndPopup = (message) => {
        let popUp = document.createElement('div')
        let popUpText = document.createElement('div')
        popUpText.innerText = message
        let popUpButton = document.createElement('button')
        popUpButton.innerText = "okay cool"
        popUp.classList.add('popup')
        popUp.appendChild(popUpText)
        popUp.appendChild(popUpButton)
        gameboard.mainFrame.appendChild(popUp)
        popUpButton.addEventListener('click', () => {popUp.remove()})
    }

    gameIsOver = (message) => {
        round = 0;
        roundCounter.textContent = `Round ${round}`
        gameEndPopup(message)
        gameboard.resetFields()
        for(let x = 0; x < gameboard.buttons.length; x++) {
            gameboard.buttons[x].classList.remove('x', 'o')
        }
        player1.fields = []
        player2.fields = []

        gameboard.display()
    }
    const checkWinner = (player) => {
        const winningPatterns = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]]

        for (let i = 0; i < winningPatterns.length; i++) {
            let curpattern = winningPatterns[i]
            let correct = 0;
            for(let j=0; j < curpattern.length; j++) {
                if (player.fields.includes(curpattern[j])) {
                    correct++;
                }}
            if (correct == 3) {
                let message = (`Player ${player.number} Won!`)
                gameIsOver(message);
            }
        }
        if (round == 9) {
            gameIsOver("DRAW!");
        }
    }
    roundCounter.textContent = `Round ${round}`
    const playRound = (id) => {
        //if field not empty -> return
        if (gameboard.fields[id - 1] != '') {
            console.log("this field is not empty")
            return
        }
        round++
        roundCounter.textContent = `Round ${round}`
        var player = (round % 2 == 1) ? player1 : player2;
        player.fields.push(parseInt(id));
        gameboard.fillField(player.sign, id);
        checkWinner(player)

    }

    return {playRound}
     // round % 2 === 1 ? player.getSign() : player.getSign();
})();

//and you’re probably going to want an object to control the flow of the game itself
