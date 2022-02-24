/* Create functionality for game to allow losing and winning conditions along with board area and sizing based on browser utilized 
for playing. I will attempt to create a save-state that allows player to continue playing from last known position and progress. */

// Game was created with the assistance of a tutorial by Web Dev Simplified (YouTube video: https://www.youtube.com/watch?v=QTcIXok9wNY)

// Game Constants & Variables
let inputDir = { x: 0, y: 0 };
const foodSound = new Audio('assets/food.wav');
const gameOverSound = new Audio('assets/game-over.wav');
const moveSound = new Audio('assets/move.wav');
//const musicSound = new Audio('assets/game-music.mp3');
let speed = 10;
let score = 0;
let level = 0
let lastDrawTime = 0;
let snakeArr = [
    { x: 13, y: 15 }
];

food = { x: 6, y: 7 };

// Game Functions
function main(time) {
    window.requestAnimationFrame(main);
    if ((time - lastDrawTime) / 1000 < 1 / speed) {
        return;
    }
    lastDrawTime = time;
    gameEngine();
}


function isCollide(snake) {
    // If you bump into yourself 
    for (let i = 1; i < snakeArr.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            return true;
        }
    }
    // If you bump into the wall
    if (snake[0].x >= 18 || snake[0].x <= 0 || snake[0].y >= 18 || snake[0].y <= 0) {
        return true;
    }
    return false;
}

function gameEngine() {
    // Part 1: Updating the snake array & Food
    if (isCollide(snakeArr)) {
        gameOverSound.play();
        //musicSound.pause();
        inputDir = { x: 0, y: 0 };
        alert("Game Over Samurai. Press any key to get those Corpos again!");
        snakeArr = [{ x: 13, y: 15 }];
        //musicSound.play();
        score = 0;
    }
    // If you have eaten the food, increment the score and regenerate the food
    if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
        foodSound.play();
        score += 1;
        if (score > highScoreVal) {
            highScoreVal = score;
            localStorage.setItem("high Score", JSON.stringify(highScoreVal));
            highScoreBox.innerHTML = "High Score: " + highScoreVal;
        }
        scoreBox.innerHTML = "Score: " + score;
        snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y });
        let a = 2;
        let b = 16;
        food = {x: Math.round(a + (b - a)*Math.random()), y: Math.round(a + (b - a)*Math.random())}
    }

    // Moving the snake
    for (let i = snakeArr.length - 2; i >= 0; i--) {
        snakeArr[i + 1] = {...snakeArr[i] };
    }

    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;

    // Part 2: Display the snake and Food
    // Display the snake
    board.innerHTML = "";
    snakeArr.forEach((e, index) => {
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if (index === 0) {
            snakeElement.classList.add('head');
        } else {
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
    });
    // Display the food
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food')
    board.appendChild(foodElement);
}

// Main logic starts here
//musicSound.play();
let highScore = localStorage.getItem("high score");
if (highScore === null) {
    highScoreVal = 0;
    localStorage.setItem("high score", JSON.stringify(highScoreVal))
} else {
    highScoreVal = JSON.parse(highScore);
    highScoreBox.innerHTML = "High Score: " + highScore;
}

window.requestAnimationFrame(main);
window.addEventListener('keydown', e => {
    inputDir = { x: 0, y: 1 } // Start the game
    moveSound.play();
    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp");
            inputDir.x = 0;
            inputDir.y = -1;
            break;
        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x = 0;
            inputDir.y = 1;
            break;
        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x = -1;
            inputDir.y = 0;
            break;
        case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x = 1;
            inputDir.y = 0;
            break;
        default:
            break;
    }
})