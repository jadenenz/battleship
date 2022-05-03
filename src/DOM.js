// function setGrid(board) {
//     for (let i = 1; i <= 100; i++) {
//         let div = document.createElement('div')
//         div.classList.add('grid-square')
//         board.appendChild(div)
//     }
// }

function setGrid(container, boardObject) {
    for (let y of boardObject) {
        for (let x of y) {
            let div = document.createElement('div')
            container.appendChild(div)
            if (element === 1) {
                div.classList.add('grid-square')
            } else {
                div.classList.add('grid-ship')
            }
        }
    }
}

module.exports = setGrid
