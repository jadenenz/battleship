const gameboardFactory = require('./gameboardFactory')
const playerFactory = (name) => {
    const playerBoard = gameboardFactory()

    function getRandomInt(min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min) + min)
        //The maximum is exclusive and the minimum is inclusive
    }

    const makeAttack = (board, x, y) => {
        board.receiveAttack(x, y)
        console.log(x, y)
    }

    const computerAttack = (board) => {
        let xCoord = getRandomInt(0, 10)
        let yCoord = getRandomInt(0, 10)

        while (
            //if the random coords have already been used, reroll
            board.alreadyHit(xCoord, yCoord) ||
            board.alreadyMissed(xCoord, yCoord)
        ) {
            xCoord = getRandomInt(0, 10)
            yCoord = getRandomInt(0, 10)
        }
        makeAttack(board, xCoord, yCoord) //make attack once coords are valid
    }

    return { name, playerBoard, makeAttack, computerAttack }
}

module.exports = playerFactory
