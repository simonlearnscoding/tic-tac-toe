//You’re going to store the gameboard as an array inside of a Gameboard object, so start there!

const Player = (sign) => {
    this.sign = sign;
}

const gameboard = (function () {
    
    const buttons = document.querySelectorAll('.field')
    
    let fields = ["","x","", "","o","", "o","",""]
    const display = () => {
        console.log("it works")
        for(let x = 0; x < fields.length; x++) {
            if (fields[x] == "x") {
                buttons[x].classList.add('x')
                console.log("hihi")
            }
            else if (fields[x] == "o") {
                buttons[x].classList.add('o')
            }
        }
    }
    return {display, fields}
    })()

gameboard.display()
const player = (function () {})();

const gameFlow = (() => {

    const player1 = Player("X");
    const player2 = Player("O");
    let round = 1;
    let gameIsOver = false;


    const playRound()
    const getCurrentPlayerSign = () => {
        return round % 2 === 1 ? playerX.getSign() : playerO.getSign();
    };
})();

//and you’re probably going to want an object to control the flow of the game itself
