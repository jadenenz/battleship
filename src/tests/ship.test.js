const shipFactory = require('../ship')

const ship = shipFactory(10, 'carrier')
const sunkenShip = shipFactory(2, 'sunken')
sunkenShip.hit(0)
sunkenShip.hit(1)

test('ship factory creates an object with length property of 10', () => {
    expect(ship).toMatchObject({ length: 10 })
})

test('ship factory creates an array of bools equal to length', () => {
    expect(ship.hitLocations).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
})

test('ship gets hit at location 3', () => {
    expect(ship.hit(2)).toEqual([0, 0, 1, 0, 0, 0, 0, 0, 0, 0])
})

test('ship factory creates an object that isnt sunk', () => {
    expect(ship.isSunk()).toBe(false)
})

test('isSunk properly checks if ship is sunk', () => {
    expect(sunkenShip.isSunk()).toBe(true)
})
