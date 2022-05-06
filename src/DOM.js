const gameboardFactory = require('./gameboardFactory')

function setGrid(container, boardObject) {
    for (let y in boardObject.grid) {
        const yArray = boardObject.grid[y]
        for (let x in yArray) {
            const cell = yArray[x]
            let div = document.createElement('div')
            div.setAttribute('data-x', x)
            div.setAttribute('data-y', y)
            container.appendChild(div)
            if (boardObject.alreadyHit(x, y)) {
                console.log('TRUE')
                div.classList.add('grid-hit')
            } else if (boardObject.alreadyMissed(x, y)) {
                div.classList.add('grid-missed')
            } else {
                if (cell === 1) {
                    //if space is empty
                    div.classList.add('grid-square')
                } else {
                    div.classList.add('grid-ship')
                }
            }
        }
    }
}

module.exports = setGrid
