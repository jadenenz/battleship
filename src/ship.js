const shipFactory = (length, name) => {
    //counter for how many hits ship has taken
    let hitCounter = 0
    //increases hit counter by 1
    const hit = () => {
        hitCounter = hitCounter + 1
    }
    //returns true if amt of hits is >= length
    const isSunk = () => {
        return hitCounter >= length
    }
    //gets hitCounter value
    const getHitValue = () => {
        return hitCounter
    }

    return { name, length, hitCounter, hit, isSunk, getHitValue }
}

module.exports = shipFactory
