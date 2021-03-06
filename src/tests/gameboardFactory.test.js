const gameboardFactory = require('../gameboardFactory')
const shipFactory = require('../ship')

let gameboard

let carrier
let battleship
let submarine
let botwes
let kyori
let lauren
let shawn
let panda

beforeEach(() => {
    gameboard = gameboardFactory()
    carrier = shipFactory(5, 'carrier')
    battleship = shipFactory(4, 'battleship')
    submarine = shipFactory(3, 'submarine')
    botwes = shipFactory(2, 'botwes')
    kyori = shipFactory(1, 'kyori')
    lauren = shipFactory(1, 'lauren')
    shawn = shipFactory(2, 'shawn')
    panda = shipFactory(1, 'panda')
})

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

test('gameboard places a horizontal battleship at (3,5)', () => {
    gameboard.placeShip(battleship, 'horizontal', 3, 5)
    expect(gameboard.get(3, 5).name).toEqual('battleship')
    expect(gameboard.get(4, 5).name).toEqual('battleship')
    expect(gameboard.get(5, 5).name).toEqual('battleship')
    expect(gameboard.get(6, 5).name).toEqual('battleship')
    expect(gameboard.get(7, 5)).toEqual(1)
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

test('fresh ship gets attacked and is sunk', () => {
    gameboard.placeShip(submarine, 'horizontal', 6, 5)
    expect(gameboard.get(6, 5).name).toEqual('submarine')
    expect(gameboard.get(7, 5).name).toEqual('submarine')
    expect(gameboard.get(8, 5).name).toEqual('submarine')
    gameboard.receiveAttack(7, 5)
    gameboard.receiveAttack(8, 5)
    expect(gameboard.get(7, 5).isSunk()).toEqual(false)
    gameboard.receiveAttack(6, 5)
    expect(gameboard.get(6, 5).getHitValue()).toEqual(3)
    expect(gameboard.get(6, 5).isSunk()).toEqual(true)
})

test('missed shots are recorded', () => {
    gameboard.receiveAttack(7, 7)
    gameboard.receiveAttack(2, 2)
    expect(gameboard.getMissedAttacks()).toEqual([
        [7, 7],
        [2, 2],
    ])
    // expect(gameboard.getMissedAttacks()).toContain([7, 7])
})

test('gameboard confirms all ships are sunk', () => {
    gameboard.placeShip(lauren, 'horizontal', 1, 1)
    gameboard.placeShip(shawn, 'vertical', 1, 2)
    gameboard.placeShip(kyori, 'horizontal', 2, 2)
    gameboard.placeShip(botwes, 'vertical', 5, 6)
    gameboard.placeShip(panda, 'horizontal', 8, 4)
    gameboard.receiveAttack(1, 1)
    gameboard.receiveAttack(1, 2)
    gameboard.receiveAttack(1, 3)
    gameboard.receiveAttack(2, 2)
    gameboard.receiveAttack(5, 6)
    gameboard.receiveAttack(5, 7)
    gameboard.receiveAttack(8, 4)
    expect(gameboard.getSunkShips()).toEqual(5)
})

test('ships cant be hit twice in the same spot', () => {
    gameboard.placeShip(botwes, 'horizontal', 0, 0)
    gameboard.receiveAttack(0, 0)
    gameboard.receiveAttack(0, 0)
    expect(botwes.getHitValue()).toEqual(1)
})
