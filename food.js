/* Create logic for food to randomly appear and lengthen the 
snake; will attempt to create "power-ups" skill level dependent. */

/*import {onSnake, expandSnake} from './snake.js'
import {randomGridPosition} from './grid.js'

// Establishes the objecs of "food" and the constant expansion rate for the "snake".
let food = getRandomFoodPosition()
const EXPANSION_RATE = 1

/* Exports the functions that indicates if the "snake" is in the same position as the"food", the
"food" disapears, expands the "snake" and renders in a randomized location on the game board. 
export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE)
    food = getRandomFoodPosition()
  }
}

/* Creates the DIV that will be ocupied by the "food".
export function draw(gameBoard) {
  const foodElement = document.createElement('div')
  foodElement.style.gridRowStart = food.y
  foodElement.style.gridColumnStart = food.x
  foodElement.classList.add('food')
  gameBoard.appendChild(foodElement)
}

/* Gets a randomized position for "food" after verifiying that new position is not
equal to old  position or a grid that the snake head or body is currently ocupying. 
function getRandomFoodPosition() {
  let newFoodPosition
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition()
  }
  return newFoodPosition
}*/