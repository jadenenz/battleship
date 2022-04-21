const shipFactory = (length, name) => {
    //creates an array of bools in # equal to length
    const hitLocations = []
    for (let i = 0; i < length; i++) {
        hitLocations.push(0)
    }
    //changes bool in hitLocations to 1 where the ship got hit
    const hit = (number) => {
        hitLocations[number - 1] = 1
        return hitLocations
    }
    //returns true if every element in hitLocations = 1
    const isSunk = () => {
        return !hitLocations.includes(0)
    }
    return { name, length, hitLocations, hit, isSunk }
}

module.exports = shipFactory
