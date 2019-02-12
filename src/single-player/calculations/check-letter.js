import wordSplit from '../single-player.js';
let trueArray = [];
let winArray = [];
let selectHiddenImages = document.querySelectorAll('.hidden-img');
function checkLetter(letter) {
    trueArray = [];
    for(let i = 0; i < wordSplit.length; i++) {
        if(wordSplit[i] === letter) {
            const selectCorrect = document.querySelectorAll('.' + wordSplit[i]);
            winArray.push(i);
            for(let j = 0; j < selectCorrect.length; j++) {
                selectCorrect[j].classList.remove('hidden-letter');
                trueArray.push(i);
            }
        }
    }
    if(trueArray.length === 0) {
        selectHiddenImages[0].classList.remove('hidden-img');
        selectHiddenImages = document.querySelectorAll('.hidden-img');
    }
    if(selectHiddenImages.length === 0) {
        alert('you lose');
    }
    if(winArray.length === wordSplit.length) {
        alert('you win');
    }
}
export default checkLetter;