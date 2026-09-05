let homeScore = 0
let guestScore = 0

document.getElementById("score-home").textContent = homeScore
document.getElementById("score-guest").textContent = guestScore

function addHome1() {
    homeScore += 1
    document.getElementById("score-home").textContent = homeScore
}

function addHome2() {
    homeScore += 2
    document.getElementById("score-home").textContent = homeScore
}

function addHome3() {
    homeScore += 3
    document.getElementById("score-home").textContent = homeScore
}

function addGuest1() {
    guestScore += 1
    document.getElementById("score-guest").textContent = guestScore
}

function addGuest2() {
    guestScore += 2
    document.getElementById("score-guest").textContent = guestScore
}

function addGuest3() {
    guestScore += 3
    document.getElementById("score-guest").textContent = guestScore
}


