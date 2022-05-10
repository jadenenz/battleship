const gameboardFactory = require('./gameboardFactory')

function setGrid(container, boardObject) {
    for (let y = 0; y < 10; y++) {
        for (let x = 0; x < 10; x++) {
            const cell = boardObject.get(x, y)
            let div = document.createElement('div')
            div.setAttribute('data-x', x)
            div.setAttribute('data-y', y)
            container.appendChild(div)
            div.textContent = `${x},${y}`
            console.log(x, y, cell)
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
