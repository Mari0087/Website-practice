const homeScore = document.getElementById("home-score");

const guestScore = document.getElementById("guest-score");

let homeCount=0;
let guestCount=0;

function addOneHome(){
    homeCount+=1
    homeScore.innerText=homeCount
}

function addTwoHome(){
    homeCount+=2
    homeScore.innerText=homeCount
}

function addThreeHome(){
    homeCount+=3
    homeScore.innerText=homeCount
}

function addOneGuest(){
    guestCount+=1
    guestScore.innerText=guestCount
}

function addTwoGuest(){
    guestCount+=2
    guestScore.innerText=guestCount
}

function addThreeGuest(){
    guestCount+=3
    guestScore.innerText=guestCount
}