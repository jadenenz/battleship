const gamecontroller = require('../gamecontroller')
const playerFactory = require('../playerFactory')
const shipFactory = require('../ship')

const game = gamecontroller()

test('test that both players have a carrier placed', () => {
    expect(game.p1.playerBoard.get(0, 0).name).toEqual('carrier')
    expect(game.p2.playerBoard.get(5, 6).name).toEqual('carrier') //find out why this is not working
})
