const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time')
let score = document.querySelector('#score')

let result = 0
let currentTime = timeLeft.textContent

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole')
    })
    let randomPostion = square[Math.floor(Math.random() * 9)]
    randomPostion.classList.add('mole')
    // assign id to random position for locating a hit position
    hitPosition = randomPostion.id
}

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if(id.id === hitPosition){
            result = result + 1
            score.textContent = result
        }
    })
})

function moveMole() {
    let timeId = null
    timeId = setInterval(randomSquare, 1000)
}

function countDown() {
    currnetTime--
    timeLeft.textContent = currnetTime

    if(currentTime === 0) {
        clearInterval(timerId)
        alert('Game Over')
    }
}

moveMole()

let timerId = setInterval(countDown(), 100)