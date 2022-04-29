const gamecontroller = require('../gamecontroller')
const playerFactory = require('../playerFactory')
const shipFactory = require('../ship')

const game = gamecontroller()
const p1board = game.p1.playerBoard
const p2board = game.p2.playerBoard

test('test that both players have a carrier placed', () => {
    expect(p1board.get(0, 1).name).toEqual('carrier')
    expect(p2board.get(1, 1)).toEqual(1)
    expect(p2board.get(4, 1).name).toEqual('carrier')
})

test('p2 attacks p1 carrier', () => {
    expect(p1board.get(0, 1).getHitValue()).toEqual(0)
    game.p2.makeAttack(p1board, 0, 1)
    expect(p1board.get(0, 1).getHitValue()).toEqual(1)
})

test('computer makes attack on p1', () => {
    game.p2.computerAttack(p1board)
    expect(p1board.getMissedAttacks()).toHaveLength(1)
})
