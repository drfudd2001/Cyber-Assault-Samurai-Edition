// Create functions to address the logic for the snake movement, growth, and collision.

/*// Imports game controls from the input file.
import {getInputDirection} from "./input.js"

// Exports the "snake's" speed, this can be modified to speed up the game.
export const SNAKE_SPEED = 5

// Creates the "snake" body starting position and prevents it from creating new body segments before it consumes any "food". 
const snakeBody = [{x: 11, y: 11}]
let newSegments = 0

export function update() {
  addSegments()

  const inputDirection = getInputDirection()
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = {...snakeBody[i]}
  }

  snakeBody[0].x += inputDirection.x
  snakeBody[0].y += inputDirection.y
}

// Exports function that creates the snake object in the game board.
export function draw(gameBoard) {
  snakeBody.forEach(segment => {
    const snakeElement = document.createElement('div')
    snakeElement.style.gridRowStart = segment.y
    snakeElement.style.gridColumnStart = segment.x
    snakeElement.classList.add('snake')
    gameBoard.appendChild(snakeElement)
  })
}

// Exports logic for the creation of new segments of the "snake" with the consumption of "food". 
export function expandSnake(amount) {
  newSegments += amount
}

// Exports the collision logic for the "snake" by verifying body position and head position 
export function onSnake(position, {ignoreHead = false} = {}) {
  return snakeBody.some((segment, index) => {
    if (ignoreHead && index === 0) return false
    return equalPositions(segment, position)
  })
}

// Establishes the position of the "snake's" head to assist in the collision logic.
export function getSnakeHead() {
  return snakeBody[0]
}

export function snakeIntersection() {
  return onSnake(snakeBody[0], {ignoreHead: true})
}

function equalPositions(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y
}

// Establishes logic for the creation of new body parts for the "snake".
function addSegments() {
  for (let i = 0; i < newSegments; i++) {
    snakeBody.push({...snakeBody[snakeBody.length - 1]})
  }
  newSegments = 0
}*/