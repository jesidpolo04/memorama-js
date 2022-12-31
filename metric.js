const htmlTime = document.getElementById("time")
const htmlTotalCards = document.getElementById("total-cards")
const htmlRights = document.getElementById("rights")
const htmlWrongs = document.getElementById("wrongs")
const board = document.querySelector(`.${BOARD_CLASS}`)
if(!board){
    throw Error("There is not a board in the game :/")
}
let cards = board.querySelectorAll(`.${CARD_CLASS}`)

htmlTotalCards.innerText = cards.length 
console.info("cards in game: ", cards.length)

let time = 0; //seconds
let wrongs = 0;
let rights = 0;

function startTime(){
    setInterval(()=>{
        time ++;
        htmlTime.innerText = time.toString()
    }, 1000)
}

function right(){
    rights ++;
    htmlRights.innerText = rights.toString()
}

function wrong(){
    wrongs ++;
    htmlWrongs.innerText = wrongs.toString()
}
