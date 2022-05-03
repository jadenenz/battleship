const gameboardFactory = () => {
    //create an array of arrays with 10 elements each
    let grid = Array.from(new Array(10), () => new Array(10).fill(1))

    const clearBoard = () => {
        grid = Array.from(new Array(10), () => new Array(10).fill(1))
        sunkShips = 0
        allSunk = false
    }

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
        } else {
            console.log('placement is invalid')
        }
    }

    let missedAttacks = []
    let hitCoords = []
    let sunkShips = 0
    let allSunk = false
    const alreadyHit = (x, y) => {
        return hitCoords.find((element) => element[0] === x && element[1] === y)
    }
    const alreadyMissed = (x, y) => {
        return missedAttacks.find(
            (element) => element[0] === x && element[1] === y
        )
    }
    const receiveAttack = (x, y) => {
        if (get(x, y) !== 1) {
            //if (x,y) isn't empty

            if (!alreadyHit(x, y)) {
                //if (x,y) hasn't already been hit
                get(x, y).hit()
            }
            //send .hit() to ship in location
            hitCoords.push([x, y])
            //record the hit location
            if (get(x, y).isSunk()) {
                //after being hit check if ship is sunk
                //if sunk add to sunkShips counter
                sunkShips++
                if (sunkShips >= 5) {
                    console.log('All battleships have been sunk')
                    allSunk = true
                }
            }
        } else if (get(x, y) == 1) {
            //else record the missed shot
            missedAttacks.push([x, y])
        }
    }

    const getMissedAttacks = () => {
        return missedAttacks
    }

    const getSunkShips = () => {
        return sunkShips
    }

    return {
        grid,
        getMissedAttacks,
        getSunkShips,
        placeShip,
        get,
        receiveAttack,
        clearBoard,
        alreadyHit,
        alreadyMissed,
    }
}
module.exports = gameboardFactory
