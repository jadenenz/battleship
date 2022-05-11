const playerFactory = require('./playerFactory')
const shipFactory = require('./ship')

const gamecontroller = () => {
    const c1 = shipFactory(5, 'carrier')
    const c2 = shipFactory(5, 'carrier')
    const b1 = shipFactory(4, 'battleship')
    const b2 = shipFactory(4, 'battleship')
    const cr1 = shipFactory(3, 'cruiser')
    const cr2 = shipFactory(3, 'cruiser')
    const s1 = shipFactory(3, 'submarine')
    const s2 = shipFactory(3, 'submarine')
    const d1 = shipFactory(2, 'destroyer')
    const d2 = shipFactory(2, 'destroyer')
    const p1 = playerFactory('p1')
    const p2 = playerFactory('p2')
    p1.playerBoard.placeShip(c1, 'vertical', 0, 0) //(0,0), (0,1), (0,2)...
    p2.playerBoard.placeShip(c2, 'horizontal', 2, 1) //(2,1), (3,1), (4,1)...
    p1.playerBoard.placeShip(cr1, 'horizontal', 4, 6) //(4,6), (5,6), (6,6)..
    p2.playerBoard.placeShip(cr2, 'vertical', 9, 0)
    p1.playerBoard.placeShip(b1, 'horizontal', 4, 2)
    p1.playerBoard.placeShip(s1, 'vertical', 0, 5)
    p1.playerBoard.placeShip(d1, 'horizontal', 5, 9)
    p2.playerBoard.placeShip(b2, 'vertical', 1, 2)
    p2.playerBoard.placeShip(s2, 'horizontal', 2, 6)
    p2.playerBoard.placeShip(d2, 'vertical', 8, 6)

    return {
        c1,
        c2,
        b1,
        b2,
        cr1,
        cr2,
        s1,
        s2,
        d1,
        d2,
        p1,
        p2,
    }
}

module.exports = gamecontroller
