let trueArray = [];
let winArray = [];

function checkLetter(letter, wordSplit) {
    let selectHiddenLetters = document.querySelectorAll('.hidden-letter');
    let selectHiddenImages = document.querySelectorAll('.hidden-img');
    const endMessageNode = document.getElementById('win-or-lose');
    const messageNode = document.getElementById('end-msg');
    const redLetterNode = document.getElementById('objective-word');
    const buttonSelect = document.getElementById('button-' + letter);
    const keyboardNode = document.getElementById('letter-buttons');
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
    buttonSelect.classList.add('hidden-button')
    if(trueArray.length === 0 && selectHiddenImages.length > 0) {
        selectHiddenImages[0].classList.remove('hidden-img');
        selectHiddenImages = document.querySelectorAll('.hidden-img');
    }
    if(selectHiddenImages.length === 0) {
        endMessageNode.classList.remove('hidden-letter');
        messageNode.classList.remove('hidden-letter');
        selectHiddenLetters = document.querySelectorAll('.hidden-letter');
        messageNode.textContent = 'Your inability to word killed whatever this thing is. Great.';
        redLetterNode.style.color = 'red';
        redLetterNode.style.opacity = 0.7;
        for(let k = 0; k < selectHiddenLetters.length; k++) {
            selectHiddenLetters[k].classList.remove('hidden-letter');
        }
        keyboardNode.classList.add('hidden-button');
    }
    if(winArray.length === wordSplit.length) {
        endMessageNode.classList.remove('hidden-letter');
        messageNode.classList.remove('hidden-letter');
        messageNode.textContent = 'You guessed correct letters. Terrific.';
        keyboardNode.classList.add('hidden-button');
    }
}
export default checkLetter;


