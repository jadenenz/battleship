const gameboardFactory = require('./gameboardFactory')
const playerFactory = (name) => {
    const playerBoard = gameboardFactory()

    return { name, playerBoard }
}

module.exports = playerFactory
