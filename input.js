// Establishes movement variables.
let inputDirection = {x: 0, y: 0}
let lastInputDirection = {x: 0, y: 0}

/* Movement control event listeners and prevents
the "snake" from moving in the same direction. */
window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            if (lastInputDirection.y !== 0) break
            inputDirection = {x: 0, y: -1}
            break
        case 'ArrowDown':
            if (lastInputDirection.y !== 0) break
            inputDirection = {x: 0, y: 1}
            break
        case 'ArrowLeft':
            if (lastInputDirection.x !== 0) break
            inputDirection = {x: -1, y: 0}
            break
        case 'ArrowRight':
            if (lastInputDirection.x !== 0) break
            inputDirection = {x: 1, y: 0}
            break
    }
})

// Exports control squeme to the game.js file.
export function getInputDirection() {
    lastInputDirection = inputDirection
    return inputDirection
}