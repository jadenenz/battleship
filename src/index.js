import './style.css'
import gameboardFactory from './gameboardFactory'
import playerFactory from './playerFactory'
import shipFactory from './ship'
import gamecontroller from './gamecontroller'
import setGrid from './DOM'

const game = gamecontroller()
const board1DOM = document.querySelector('.board1')
const board2DOM = document.querySelector('.board2')

const p1board = game.p1.playerBoard
const p2board = game.p2.playerBoard

setGrid(board1DOM, p1board)
setGrid(board2DOM, p2board)

p1board.receiveAttack(0, 0)
p1board.receiveAttack(0, 4)
console.log(p1board.grid)
console.log(p1board.getHitCoords())
console.log(p1board.getMissedAttacks())
//looooooool the grid is being displayed wrong the orientation is
//fucked!

setGrid(board1DOM, p1board)
