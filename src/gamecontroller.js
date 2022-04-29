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
    p1.playerBoard.placeShip(c1, 'vertical', 0, 0)
    p2.playerBoard.placeShip(c2, 'horizontal', 2, 1)

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
