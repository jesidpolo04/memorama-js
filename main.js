/* const board = document.getElementById('game-board') */

document.addEventListener('click', (e)=>{
    if(e.target.classList.contains('card')){
        flipCard(e.target)
    }
})

/* Game State */
cardsFlipped = 0;
flippedCards = []

/* Player actions */
function flipCard(card){
    if(!isFlippedCard(card)){
        if(cardsFlipped >= 2){
            throw Error("Player Can´t flip more than two cards per turn")
        }
        card.classList.add('flipped');
        cardsFlipped ++;
    }  
}

function isFlippedCard(card){
    return card.classList.contains('flipped')
}

/* Game actions */
function finishTurn(){
    
}