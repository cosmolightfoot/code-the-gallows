import buildGallows from './calculations/build-gallows.js';
import wordList from './calculations/word-list.js';
import buildObjective from './calculations/build-objective.js';
//the selected word
let ranNum = Math.floor(Math.random() * wordList.length);
let objectiveWord = wordList[ranNum];
let wordSplit = objectiveWord.split('');
console.log(objectiveWord);

buildGallows();
buildObjective(wordSplit);




const rowOneNode = document.getElementById('row-one');
const rowTwoNode = document.getElementById('row-two');
const rowThreeNode = document.getElementById('row-three');
const buildLetterButtons = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'a', 'e', 'i', 'o', 'u', 'y', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'];

let selectHiddenLetters = document.querySelectorAll('.hidden-letter');
let selectHiddenImages = document.querySelectorAll('.hidden-img');

//row1
for(let index = 0; index < 10; index++) {
    const letterButton = document.createElement('button');
    letterButton.classList.add('letter-button');
    letterButton.id = 'button-' + buildLetterButtons[index];
    letterButton.textContent = buildLetterButtons[index];
    letterButton.value = buildLetterButtons[index];
    rowOneNode.appendChild(letterButton);
    letterButton.addEventListener('click', function(){
        checkLetter(letterButton.value);
        selectHiddenLetters = document.querySelectorAll('.hidden-letter');

    });
}
//row2
for(let index = 10; index < 18; index++) {
    const letterButton = document.createElement('button');
    letterButton.classList.add('letter-button');
    letterButton.id = 'button-' + buildLetterButtons[index];
    letterButton.textContent = buildLetterButtons[index];
    letterButton.value = buildLetterButtons[index];
    rowTwoNode.appendChild(letterButton);
    letterButton.addEventListener('click', function(){
        checkLetter(letterButton.value);
        selectHiddenLetters = document.querySelectorAll('.hidden-letter');
    });
}
//row3

for(let index = 18; index < 26; index++) {
    const letterButton = document.createElement('button');
    letterButton.classList.add('letter-button');
    letterButton.id = 'button-' + buildLetterButtons[index];
    letterButton.textContent = buildLetterButtons[index];
    letterButton.value = buildLetterButtons[index];
    rowThreeNode.appendChild(letterButton);
    letterButton.addEventListener('click', function(){
        checkLetter(letterButton.value);
        selectHiddenLetters = document.querySelectorAll('.hidden-letter');
    });
}
//function reveals letters that match the objective word
let trueArray = [];
let winArray = [];
const endMessageNode = document.getElementById('win-or-lose');
const messageNode = document.getElementById('end-msg');

function checkLetter(letter) {
    trueArray = [];
    const redLetterNode = document.getElementById('objective-word');
    const buttonSelect = document.getElementById('button-' + letter);
    const keyboardNode = document.getElementById('letter-buttons');
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



