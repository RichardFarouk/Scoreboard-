let homeBtn = document.getElementById("home-btn")
let awayBtn = document.getElementById("away-btn")

let result = document.getElementById("winner")

let homeCount = 0
let awayCount = 0

function home() {
  homeCount += 1
  homeBtn.textContent = homeCount
  
}

function homeTwo() {
  homeCount += 2
  homeBtn.textContent = homeCount
  
}

function homeThree() {
  homeCount += 3
  homeBtn.textContent = homeCount
  
}


function away() {
  awayCount += 1
  awayBtn.textContent = awayCount
  
}

function awayTwo() {
  awayCount += 2
  awayBtn.textContent = awayCount
  
}

function awayThree() {
  awayCount += 3
  awayBtn.textContent = awayCount
}



function winResult() {
  if (homeCount > awayCount) {
  result.textContent = "Winner: HOME";
} else if (homeCount < awayCount) {
  result.textContent = "Winner: GUEST";
} else {
  result.textContent = "It's a TIE";
}
}

