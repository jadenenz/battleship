const gameboardFactory = () => {
    //create an array of arrays with 10 elements each
    const grid = Array.from(new Array(10), () => new Array(10).fill(1))

    const get = (x, y) => {
        const max = 9
        const min = 0
        if (x <= max && x >= min) {
            if (y <= max && y >= min) {
                return grid[x][y]
            }
        } else {
            console.log('x,y coordinates out of bounds')
            return undefined
        }
    }

    //helper function that checks for valid positioning of
    //ships
    const checkPlacement = (ship, alignment, x, y) => {
        const verticalMax = ship.length + y
        const horizontalMax = ship.length + x
        for (let i = 0; i < ship.length; i++) {
            if (alignment === 'vertical') {
                if (verticalMax <= 9 && x <= 9) {
                    if (get(x, y + i) !== 1) {
                        return false
                    }
                } else {
                    return false
                }
            } else if (alignment === 'horizontal') {
                if (horizontalMax <= 9 && y <= 9) {
                    if (get(x + i, y) !== 1) {
                        return false
                    }
                } else {
                    return false
                }
            }
        }
        return true
    }

    //takes ship object, 'vertical' or 'horizontal' alignment,
    //and x,y coords to place ship starting with initial point
    //and moving down or right respectively
    const placeShip = (ship, alignment, x, y) => {
        if (checkPlacement(ship, alignment, x, y)) {
            for (let i = 0; i < ship.length; i++) {
                if (alignment === 'vertical') {
                    grid[x][y + i] = ship
                } else if (alignment === 'horizontal') {
                    grid[x + i][y] = ship
                }
            }
        }
    }

    let missedAttacks = []
    const receiveAttack = (x, y) => {
        if (get(x, y) !== 1) {
            //if (x,y) isn't empty
            //send .hit() to ship in location
            get(x, y).hit()
        } else if (get(x, y) == 1) {
            //THIS IS UNTESTED
            //else record the missed shot
            missedAttacks.push(x, y)
        }
    }

    return { grid, missedAttacks, placeShip, get, receiveAttack }
}
module.exports = gameboardFactory
