startTime()
let playerCanPlay = true

document.addEventListener('click', (e)=>{
    if(e.target.classList.contains(CARD_CLASS)){
        play(e.target)
    }
})

/* Game State */
const maxFlippableCards = 2
let flippedCards = 0;
let outPlayCards = []
let cardsInPlay = []

/* Player actions */
function play(card){
    if(!playerCanPlay) return;
    if(!isFlippedCard(card)){
        if( !(flippedCards < maxFlippableCards) ){
            throw Error("Player Can't flip more than two cards per turn")
        }
        flipCard(card)
        flippedCards ++;
        cardsInPlay.push(card)
        console.info('flipped cards', cardsInPlay)
        if(flippedCards >= maxFlippableCards){
            lockPlayerActions()
            finishTurn()
        }
    }
}

function flipCard(card){
    if(!isFlippedCard(card)){
        card.classList.add('flipped');
    }else{
        card.classList.remove('flipped')
    }
}

/**
 * @returns {boolean}
 */
function isFlippedCard(card){
    return card.classList.contains('flipped')
}

/* Game actions */
function finishTurn(){
    if( cardMatch(cardsInPlay[0], cardsInPlay[1]) ){
        outPlayCards.push(...cardsInPlay)
        right()
        checkGameState()
        unlockPlayerActions()
        cardsInPlay = [];
        flippedCards = 0;
    }else{
        setTimeout( ()=>{
            flipCards(cardsInPlay)
            wrong()
            checkGameState()
            unlockPlayerActions()
            cardsInPlay = [];
            flippedCards = 0;
        }, TURN_TIMEOUT )
    }
}

function flipCards(cards){
    console.log('flip cards')
    cards.forEach(card => {
        flipCard(card)
    });
}

/**
 * @param {HTMLElement} cardOne
 * @param {HTMLElement} cardTwo
 * @returns {boolean}
 */
function cardMatch(cardOne, cardTwo){
    return cardOne.dataset.code === cardTwo.dataset.code ? true : false
}


function checkGameState(){
    if(rights === cards.length / 2){
        endGame()
    }
}

function endGame(){
    alert(`Congratulations!\nYou finished in ${time} seconds with ${wrongs} mistakes!`)
    lockPlayerActions()
}

function lockPlayerActions(){
    playerCanPlay = false
}

function unlockPlayerActions(){
    playerCanPlay = true
}