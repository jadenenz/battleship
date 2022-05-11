import './style.css'
import gameboardFactory from './gameboardFactory'
import playerFactory from './playerFactory'
import shipFactory from './ship'
import gamecontroller from './gamecontroller'
import DOM from './DOM'

const game = gamecontroller()
const board1DOM = document.querySelector('.board1')
const board2DOM = document.querySelector('.board2')

const p1board = game.p1.playerBoard
const p2board = game.p2.playerBoard
const domControl = DOM()

p1board.receiveAttack(0, 0)
p1board.receiveAttack(0, 4)
p1board.receiveAttack(3, 0)
// console.log(p1board.grid)
// console.log(p1board.getHitCoords())
// console.log(p1board.getMissedAttacks())

domControl.setGrid(board1DOM, p1board)
domControl.setGrid(board2DOM, p2board)

// domControl.clickAttack(board1DOM, p1board)
