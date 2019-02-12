import letterButtonArray from './letterbutton-array.js';
import checkLetter from './check-letter.js';
let selectHiddenLetters = document.querySelectorAll('.hidden-letter');
function buildLetterButtons() {
    //builds letter buttons
    const rowOneNode = document.getElementById('row-one');
    const rowTwoNode = document.getElementById('row-two');
    const rowThreeNode = document.getElementById('row-three');

    //row1

    for(let index = 0; index < 10; index++) {
        const letterButton = document.createElement('button');
        letterButton.classList.add('letter-button');
        letterButton.textContent = letterButtonArray[index].letter;
        letterButton.value = letterButtonArray[index].letter;
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
        letterButton.textContent = letterButtonArray[index].letter;
        letterButton.value = letterButtonArray[index].letter;
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
        letterButton.textContent = letterButtonArray[index].letter;
        letterButton.value = letterButtonArray[index].letter;
        rowThreeNode.appendChild(letterButton);
        letterButton.addEventListener('click', function(){
            checkLetter(letterButton.value);
            selectHiddenLetters = document.querySelectorAll('.hidden-letter');
        });
    }
}
export default buildLetterButtons;