const shipFactory = require('../ship')

const ship = shipFactory(5, 'carrier')
const sunkenShip = shipFactory(2, 'sunken')

test('ship factory creates an object with length property of 10', () => {
    expect(ship).toMatchObject({ length: 5 })
})

test('ship factory creates an array of bools equal to length', () => {
    expect(ship.hitCounter).toEqual(0)
})

test('ship takes one hit', () => {
    ship.hit()
    expect(ship.getHitValue()).toEqual(1)
})

test('ship factory creates an object that isnt sunk', () => {
    expect(ship.isSunk()).toBe(false)
})

test('isSunk properly checks if ship is sunk', () => {
    sunkenShip.hit()
    sunkenShip.hit()
    expect(sunkenShip.isSunk()).toEqual(true) //WHY IS THIS RETURNING TRUE
})
