/* const board = document.getElementById('game-board') */

document.addEventListener('click', (e)=>{
    if(e.target.classList.contains('card')){
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
    if(!isFlippedCard(card)){
        if( !(flippedCards < maxFlippableCards) ){
            throw Error("Player Can't flip more than two cards per turn")
        }
        flipCard(card)
        flippedCards ++;
        cardsInPlay.push(card)
        console.info('flipped cards', cardsInPlay)
        if(flippedCards >= maxFlippableCards){
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
    }else{
        flipCards(cardsInPlay)
    }
    cardsInPlay = [];
    flippedCards = 0;
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
    console.log(cardOne.dataset.code === cardTwo.dataset.code ? true : false)
    return cardOne.dataset.code === cardTwo.dataset.code ? true : false
}
