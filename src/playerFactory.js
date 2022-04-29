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
        makeAttack(board, getRandomInt(0, 10), getRandomInt(0, 10))
    }

    return { name, playerBoard, makeAttack, computerAttack }
}

module.exports = playerFactory
