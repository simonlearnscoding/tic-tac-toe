//You’re going to store the gameboard as an array inside of a Gameboard object, so start there!

const Player = (sign) => {
    var obj = {}
    obj.sign = sign;
    obj.fields = [];
    return obj;
}



const gameboard = (function () {
    
    const buttons = document.querySelectorAll('.field')
    console.log(buttons)
    let fields = ["","","", "","","", "","",""]
    buttons.forEach( field => { field.addEventListener('click', () => {gameFlow.playRound(field.id)})})
    const fillField = (sign, id) => {
        fields[id - 1] = sign;
        display();
    }

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
    return {display, fields, fillField}
    })()

gameboard.display()
const player = (function () {})();

const gameFlow = (() => {

    const player1 = Player("x");
    const player2 = Player('o');
    const roundCounter = document.querySelector('.round-counter')
    let round = 0;
    const checkWinner = (player) => {
        const winningPatterns = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]]

        for (let i = 0; i < winningPatterns.length; i++) {
            if (winningPatterns[i].every(element => {
            player.fields.includes(element) })) {
            return `PLAYER WON!`}
        }

        if (player.fields)
        if (round == 9) {
            return "DRAW!"
        }
    }
    roundCounter.textContent = `Round ${round}`
    let gameIsOver = false;
    const playRound = (id) => {

        //if field not empty -> return
        round++
        roundCounter.textContent = `Round ${round}`
        var player = (round % 2 == 1) ? player1 : player2;
        player.fields.push(id);
        gameboard.fillField(player.sign, id);
        checkWinner(player)

    }

    return {playRound}
     // round % 2 === 1 ? player.getSign() : player.getSign();
})();

//and you’re probably going to want an object to control the flow of the game itself
