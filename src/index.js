import './style.css'
import gameboardFactory from './gameboardFactory'
import playerFactory from './playerFactory'
import shipFactory from './ship'
import gamecontroller from './gamecontroller'
import setGrid from './DOM'

const game = gamecontroller()
const board1DOM = document.querySelector('.board1')
const board2DOM = document.querySelector('.board2')

const p1board = game.p1.playerBoard.grid
const p2board = game.p2.playerBoard.grid

setGrid(board1DOM, p1board)
setGrid(board2DOM, p2board)
