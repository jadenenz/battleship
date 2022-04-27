const gameboardFactory = require('../gameboardFactory')
const shipFactory = require('../ship')

const gameboard = gameboardFactory()

const carrier = shipFactory(5, 'carrier')
const battleship = shipFactory(4, 'battleship')

test('gameboard makes a 2d grid of 1s', () => {
    expect(gameboard.grid[5][3]).toBe(1)
})

test('gameboard places a carrier vertical at (0,1)', () => {
    gameboard.placeShip(carrier, 'vertical', 0, 1)
    expect(gameboard.grid[0][1].name).toEqual('carrier')
    expect(gameboard.grid[0][2].name).toEqual('carrier')
    expect(gameboard.grid[0][3].name).toEqual('carrier')
    expect(gameboard.grid[0][4].name).toEqual('carrier')
    expect(gameboard.grid[0][5].name).toEqual('carrier')
})

test('ships cannot be placed out of bounds', () => {
    gameboard.placeShip(carrier, 'vertical', 8, 8)
    expect(gameboard.grid[9][8]).toEqual(1)
    expect(gameboard.grid[9][9]).toEqual(1)
    expect(gameboard.grid[9][10]).toBeUndefined()
    expect(gameboard.grid[9][11]).toBeUndefined()
})

test('ships cannot be placed out of bounds 2', () => {
    gameboard.placeShip(carrier, 'vertical', 13, 5)
    expect(gameboard.get(13, 5)).toBeUndefined()
})

test('ship can receive an attack', () => {
    gameboard.placeShip(battleship, 'vertical', 1, 1)
    gameboard.receiveAttack(1, 2)
    gameboard.receiveAttack(1, 4)
    expect(gameboard.get(1, 2).getHitValue()).toEqual(2)
    expect(gameboard.get(1, 4).getHitValue()).toEqual(2)
})
