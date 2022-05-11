const DOM = () => {
    const setGrid = (container, boardObject) => {
        clearGrid(container)
        for (let y = 0; y < 10; y++) {
            for (let x = 0; x < 10; x++) {
                const cell = boardObject.get(x, y)
                let div = document.createElement('div')
                div.setAttribute('data-x', x)
                div.setAttribute('data-y', y)
                div.classList.add('any-grid')
                container.appendChild(div)
                div.textContent = `${x},${y}`
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
        clickAttack(container, boardObject)
    }

    //need to figure out how to properly setGrid and retain the click event
    //handlers

    const clickAttack = (container, boardObject) => {
        const wholeGrid = document.querySelectorAll('.any-grid')

        wholeGrid.forEach((square) => {
            const xCoord = square.getAttribute('data-x')
            const yCoord = square.getAttribute('data-y')
            square.addEventListener('click', () => {
                boardObject.receiveAttack(xCoord, yCoord)
            })
        })
    }

    const clearGrid = (container) => {
        while (container.firstChild) {
            container.removeChild(container.firstChild)
        }
    }

    return {
        setGrid,
        clickAttack,
    }
}

module.exports = DOM
