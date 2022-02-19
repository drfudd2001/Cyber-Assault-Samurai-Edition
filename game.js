/* Create functionality for game to allow losing and winning conditions along with board area and sizing based on browser utilized 
for playing. I will attempt to create a save-state that allows player to continue playing from last known position and progress. */

// Imports functions from the different JS files.
import {update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection} from './snake.js'
import {update as updateFood, draw as drawFood} from './food.js'
import {outsideGrid} from './grid.js'

// Renders the game board and checks the game state.
let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')

function main(currentTime) {
    if (gameOver) {
        if (confirm ('The mouse is laughing at you, loser! Press "Ok" to try again.')) {
            window.location = '/'
        }
        return
    }
    
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender <1 / SNAKE_SPEED) return

    lastRenderTime = currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)

// Continuously runs the games logic.
function update() {
    updateSnake()
    updateFood()
    checkDeath()
}

// Creates the game board with the "food" and the "snake".
function draw(){
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

/* Validates that "snake" has died by either running 
into the board borders or runs into it's own body. */
function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}