// Declaring variables


const rollBtn = document.getElementById("rollBtn") // Player one throw button
const rollBtn2 = document.getElementById("rollBtn2") // Player two throw button
const newGameBtn = document.getElementById("newGameBtn")//New game button
const holdBtn = document.getElementById("holdBtn")//Hold button
const random = Math.floor(Math.random() * 6) + 1 //Dice random number from 1-6
const scoreamount = document.getElementById("scoreAmount")
const scoreamount2 = document.getElementById("scoreAmount2")
let score = 0 //Beginning score amount. Player reaches 20, they win. Roll 1, they lose.
let score2 = 0 // Player 2 score
// rollBtn2.disabled = true
scoreamount.textContent = 0
scoreamount2.textContent = 0



// Dice throw function happens, when player clicks the roll button

const diceThrow = () => {
    rollBtn2.disabled = true
    document.getElementById("diceImage").style.display = "block"
    document.querySelector(".blankdice1").style.display = "none"
    document.querySelector("#loseGame").style.display = "none"
    document.getElementById("diceImage").innerHTML = "<img src='images/dicethrow1.gif' height:100px width:100px/>"
    document.getElementById("beginningMsg").style.display = "none"
    setTimeout(() => {
    const random = Math.floor(Math.random() * 6) + 1
    score += random
    holdBtn.style.display = "block"
    document.getElementById("diceImage").innerHTML = "<img src = 'images/dice" + random + ".svg'/>"
    if (random === 1) {
        score = 0
        scoreamount.textContent = 0
        holdBtn.style.display = "none"
        document.querySelector("#loseGame").style.display = "block"
        document.querySelector("#loseGame").innerHTML = "Player one rolled 1. Player two rolls..."
        rollBtn.disabled = true
        rollBtn2.disabled = false
    }else{
        scoreamount.innerHTML = score

    }

    if (score >= 20) {
        document.querySelector("#winGame").style.display = "block"
        document.querySelector("#winGame").innerHTML = "Player one wins!"
        rollBtn.disabled = true
        rollBtn2.disabled = true
        holdBtn.style.display = "none"

    }
    console.log(score)
    }, 1000)
}

const diceThrow2 = () => {
    rollBtn.disabled = true;
    document.getElementById("diceImage2").style.display = "block"
    document.querySelector(".blankdice2").style.display = "none"
    document.querySelector("#loseGame").style.display = "none"
    document.getElementById("diceImage2").innerHTML = "<img src='images/dicethrow1.gif' height:100px width:100px/>"
    document.getElementById("beginningMsg").style.display = "none"
    setTimeout(() => {
    const random = Math.floor(Math.random() * 6) + 1
    score2 += random
    holdBtn.style.display = "block"
    document.getElementById("diceImage2").innerHTML = "<img src = 'images/dice" + random + ".svg'/>"
    if (random === 1) {
        score2 = 0
        scoreamount2.textContent = 0
        holdBtn.style.display = "none"
        document.querySelector("#loseGame").style.display = "block"
        document.querySelector("#loseGame").innerHTML = "Player two rolled 1. Player one rolls..."
        rollBtn.disabled = false
        rollBtn2.disabled = true
    }else{
        scoreamount2.innerHTML = score2

    }

    if (score2 >= 20) {
        document.querySelector("#winGame").style.display = "block"
        document.querySelector("#winGame").innerHTML = "Player two wins!"
        rollBtn.disabled = true
        rollBtn2.disabled = true
        holdBtn.style.display = "none"

    }
    console.log(score2)
    }, 1000)
}

// Function that hides elements when called
const hide = () => {
    document.querySelector("#winGame").style.display = "none"
    document.querySelector("#loseGame").style.display = "none"
    document.getElementById("diceImage").style.display = "none"
    document.getElementById("diceImage2").style.display = "none"
    holdBtn.style.display = "none"
    }


// New game button function
const newgame = () => {
    score = 0
    score2 = 0
    scoreamount.textContent = 0
    scoreamount2.textContent = 0
    rollBtn.disabled = false
    rollBtn2.disabled = false
    document.getElementById("beginningMsg").style.display = "block"
    document.querySelector(".blankdice1").style.display = "block"
    document.querySelector(".blankdice2").style.display = "block"
    hide()  
}

// Hold button function
const hold = () => {
    if (rollBtn.disabled == false){
        rollBtn.disabled = true
        rollBtn2.disabled = false
    }else{
        rollBtn2.disabled = true
        rollBtn.disabled = false
    }
}
