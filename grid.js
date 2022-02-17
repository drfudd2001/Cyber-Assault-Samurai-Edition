// Establishes the size of the game board
const GRID_SIZE = 21

// Exports the function that designates the ramdom positions that are used for the "food".
export function randomGridPosition() {
    return {
        x: Math.floor(Math.random() *GRID_SIZE) + 1,
        y: Math.floor(Math.random() *GRID_SIZE) + 1
    }
}

// Exports the function that designates what is considered the outer border of the game board.
export function outsideGrid(position) {
    return (
        position.x < 1 || position.x > GRID_SIZE ||
        position.y < 1 || position.y > GRID_SIZE
    )
}