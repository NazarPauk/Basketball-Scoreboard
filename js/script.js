let homeScore = 0
let guestScore = 0
let homePoints = document.getElementById("scoreboard__point-text-home")
let guestPoints = document.getElementById("scoreboard__point-text-guest")

function plusOneHomePoints(){
    homeScore += 1
    homePoints.textContent = homeScore
}

function plusTwoHomePoints(){
    homeScore += 2
    homePoints.textContent = homeScore
}

function plusThreeHomePoints(){
    homeScore += 3
    homePoints.textContent = homeScore
}

function plusOneGuestPoints(){
    guestScore += 1
    guestPoints.textContent = guestScore
}

function plusTwoGuestPoints(){
    guestScore += 2
    guestPoints.textContent = guestScore
}

function plusThreeGuestPoints(){
    guestScore += 3
    guestPoints.textContent = guestScore
}

// function restart(){
//     guestScore = 0
//     homeScore = 0
//     guestPoints.textContent = guestScore
//     homePoints.textContent = homeScore
// }

